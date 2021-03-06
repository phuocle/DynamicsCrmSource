Type.registerNamespace("Mscrm");
Mscrm.IQuickFormBehavior = function() {};
Mscrm.IQuickFormBehavior.registerInterface("Mscrm.IQuickFormBehavior");
Mscrm.IErrorDisplayContainerProvider = function() {};
Mscrm.IErrorDisplayContainerProvider.registerInterface("Mscrm.IErrorDisplayContainerProvider");
Mscrm.IInlineEditInitializer = function() {};
Mscrm.IInlineEditInitializer.registerInterface("Mscrm.IInlineEditInitializer");
Mscrm.IInlineAttributeEvent = function() {};
Mscrm.IInlineAttributeEvent.registerInterface("Mscrm.IInlineAttributeEvent");
Mscrm.IInlineSectionChildControlView = function() {};
Mscrm.IInlineSectionChildControlView.registerInterface("Mscrm.IInlineSectionChildControlView");
Mscrm.ILookupControlView = function() {};
Mscrm.ILookupControlView.registerInterface("Mscrm.ILookupControlView");
Mscrm.ILookupItemView = function() {};
Mscrm.ILookupItemView.registerInterface("Mscrm.ILookupItemView");
Mscrm.SecuritySettingTypeForEmail = function() {};
Mscrm.SecuritySettingTypeForEmail.prototype = {
    warningMessageAndOptionToOpen: 1,
    warningMessageAndNoOptionToOpen: 2,
    noWarningMessageAndNoOptionToOpen: 3
};
Mscrm.SecuritySettingTypeForEmail.registerEnum("Mscrm.SecuritySettingTypeForEmail", false);
Mscrm.EnumOptionJsonWrapper = function() {};
Mscrm.StatusOptionJsonWrapper = function() {};
Mscrm.LeadFlyOutJsonWrapper = function() {};
Mscrm.OpportunityFlyOutJsonWrapper = function() {};
Mscrm.AccountFlyOutJsonWrapper = function() {};
Mscrm.ContactFlyOutJsonWrapper = function() {};
Mscrm.ControlLayout = function() {};
Mscrm.ControlLayout.prototype = { full: 0, compact: 1, headerTile: 2, processConfiguration: 3, flyOutDialog: 4 };
Mscrm.ControlLayout.registerEnum("Mscrm.ControlLayout", false);
Mscrm.PicklistType = function() {};
Mscrm.PicklistType.prototype = { radio: 0, list: 1 };
Mscrm.PicklistType.registerEnum("Mscrm.PicklistType", false);
Mscrm.HeaderTileChromeBehavior = function($p0) {
    this.$2G_5 = -1;
    Mscrm.HeaderTileChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.HeaderTileChromeBehavior.prototype = {
    get_lockIconUrl: function() { return window.CDNURL + "/_imgs/inlineedit/locked.png" },
    registerEditHintEvents: function() {
        if (Mscrm.HeaderTileLayout.isInstanceOfType(this.get_view().get_layout()))
            if (!window.UseTabletExperience) {
                var $v_0 = this.get_view().get_layout();
                $v_0.get_headerTileElement().mouseenter(this.$$d_onChromeMouseOver ||
                    (this.$$d_onChromeMouseOver = Function.createDelegate(this, this.onChromeMouseOver)));
                this.get_view().get_chromeElement().focus(this.$$d_onChromeElementFocus ||
                    (this.$$d_onChromeElementFocus = Function.createDelegate(this, this.onChromeElementFocus)))
            }
    },
    registerReadEvents: function() {
        if (Mscrm.HeaderTileLayout.isInstanceOfType(this.get_view().get_layout())) {
            if (!window.UseTabletExperience) {
                var $v_0 = this.get_view().get_layout();
                $v_0.get_headerTileElement().mouseleave(this.$$d_onChromeMouseOut ||
                    (this.$$d_onChromeMouseOut = Function.createDelegate(this, this.onChromeMouseOut)))
            }
            this.get_view().get_chromeElement().blur(this.$$d_onChromeElementBlur ||
                (this.$$d_onChromeElementBlur = Function.createDelegate(this, this.onChromeElementBlur)))
        }
    },
    registerEditEvents: function() {
        if (Mscrm.HeaderTileLayout.isInstanceOfType(this.get_view().get_layout())) {
            this.registerChromeElementKeyPress();
            var $v_0 = this.get_view().get_layout();
            $v_0.get_headerTileElement().click(this.$$d_onValueElementClicked ||
                (this.$$d_onValueElementClicked = Function.createDelegate(this, this.onValueElementClicked)));
            this.$2G_5 = 1
        }
    },
    transitionToEditHintState: function() {
        if (Mscrm.HeaderTileLayout.isInstanceOfType(this.get_view().get_layout())) {
            var $v_0 = this.get_view().get_layout();
            $v_0.get_headerTileElement().addClass("ms-crm-Inline-EditHintState");
            this.triggerLockIconStateChanged("state-edithint")
        }
        this.toggleEditIconState(true)
    },
    transitionToReadState: function() {
        if (Mscrm.HeaderTileLayout.isInstanceOfType(this.get_view().get_layout())) {
            var $v_0 = this.get_view().get_layout();
            $v_0.get_headerTileElement().removeClass("ms-crm-Inline-EditHintState");
            this.get_view().get_warningIcon().removeClass("ms-crm-Inline-EditState");
            Mscrm.InlineEditChromeBehavior.prototype.transitionToReadState.call(this);
            if (this.$2G_5 === -1) {
                var $$t_1 = this;
                this.$2G_5 = window.setTimeout(function() {
                        $v_0.get_headerTileElement().click($$t_1.$$d_onValueElementClicked ||
                        ($$t_1.$$d_onValueElementClicked = Function
                            .createDelegate($$t_1, $$t_1.onValueElementClicked)))
                    },
                    0)
            }
        }
        this.toggleEditIconState(false)
    },
    transitionToEditState: function() {
        var $v_0 = this.get_view().get_layout();
        $v_0.get_headerTileElement().unbind("click");
        this.$2G_5 = -1;
        Mscrm.InlineEditChromeBehavior.prototype.transitionToEditState.call(this);
        this.toggleEditIconState(false)
    }
};
Mscrm.HeaderTileLookupChromeBehavior = function($p0) {
    Mscrm.HeaderTileLookupChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.HeaderTileLookupChromeBehavior.prototype = {
    tryShowValidationWarning: function() {
        var $v_0 = this.get_stateData().get_validationResult();
        Mscrm.InlineLookupUtility.$5S($v_0, this.get_view())
    },
    onValueElementClicked: function($p0) { Mscrm.InlineLookupUtility.$5A($p0, this.get_view(), this.get_stateData()) },
    onEditElementWrapperStateChange: function($p0) {
        Mscrm.InlineEditChromeBehavior.prototype.onEditElementWrapperStateChange.call(this, $p0);
        Mscrm.InlineLookupUtility.$58($p0, this.get_view())
    },
    activateLink: function() { Mscrm.InlineLookupUtility.$55(this.get_view()) }
};
Mscrm.HeaderTileRollupChromeBehavior = function($p0) {
    Mscrm.HeaderTileRollupChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.HeaderTileRollupChromeBehavior.prototype = {
    onValueElementClicked: function($p0) { Mscrm.InlineRollupUtility.$3g($p0, this.get_view()) },
    onChromeElementFocus: function($p0) {
        !this.get_stateData().get_chromeMouseOver() &&
            this.get_view().get_refreshIconLink().length > 0 &&
            !Mscrm.InternalUtilities.Utilities.isHighContrastEnabled() &&
            this.get_view().get_refreshIconLink().addClass("hover");
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onChromeElementFocus.call(this, $p0)
    },
    onChromeElementBlur: function($p0) {
        this.get_view().get_refreshIconLink().removeClass("hover");
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onChromeElementBlur.call(this, $p0)
    },
    onElementKeyPress: function($p0) {
        $p0.which === 13 && Mscrm.InlineRollupUtility.$3g($p0, this.get_view());
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onElementKeyPress.call(this, $p0)
    }
};
Mscrm.HeaderTileToggleChromeBehavior = function($p0) {
    Mscrm.HeaderTileToggleChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.HeaderTileToggleChromeBehavior.prototype = {
    onValueElementClicked: function($p0) {
        this.$3S_6() && this.get_view().get_valueElement().removeClass("ms-crm-Inline-EditHintState")
    },
    onElementKeyPress: function($p0) {
        switch ($p0.which) {
        case 13:
            this.$3S_6();
            break
        }
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onElementKeyPress.call(this, $p0)
    },
    $3S_6: function() {
        if (!this.get_view().get_disabled() && "alwaysedit" !== this.get_view().get_controlMode()) {
            this.get_view().tryCompleteOnDemandInitialization();
            this.get_view().get_editView().confirm();
            return true
        }
        return false
    },
    transitionToEditState: function() {
        "alwaysedit" === this.get_view().get_controlMode() &&
            Mscrm.HeaderTileChromeBehavior.prototype.transitionToEditState.call(this)
    }
};
Mscrm.InlineCheckBoxControlBehavior = function($p0) { Mscrm.InlineCheckBoxControlBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineCheckBoxControlBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    get_isValid: function() { return true }
};
Mscrm.InlineDateTimeBehavior = function($p0) {
    Mscrm.InlineDateTimeBehavior.initializeBase(this, [$p0]);
    this.set_noValidationAlert(true)
};
Mscrm.InlineDateTimeBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function($p0) {
        this.$3_6 = $p0;
        return $p0
    },
    get_isDirty: function() {
        var $v_0 = Mscrm.FormInputControl.DateTimeBehaviorBase.prototype.get_isDirty.call(this);
        !$v_0 && this.get_$50_6() && this.$3R_6();
        return $v_0
    },
    get_isValid: function() {
        this.validateDate();
        var $v_0 = this.get_$50_6();
        $v_0 && this.$3R_6();
        return $v_0
    },
    get_$50_6: function() {
        return this.get_isDateValid() && (IsNull(this.get_timeControl()) || this.get_isTimeValid())
    },
    get_isTimeInputEnabled: function() {
        return !IsNull(this.get_timeControl()) && !this.get_timeControl().get_element().disabled
    },
    initialize: function() {
        Mscrm.FormInputControl.DateTimeBehaviorBase.prototype.initialize.call(this);
        !IsNull(this.get_timeControl()) && this.get_timeControl().set_allowKeyDownPropagation(true)
    },
    handleInvalidDateInput: function($p0) {
        var $v_0 = window.USER_DATE_FORMATTED_FORMATSTRING;
        if (1026 == LOCID_LCID) $v_0 = $v_0.replace("'\u0433.'", " \u0433.");
        var $v_1 = new Mscrm.ValidationResult(false, String.format(window.LOCID_ALERT_ENTER_VALID_DATE, $v_0));
        this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_1])
    },
    handleInvalidTimeInput: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false,
            String.format(window.LOCID_DTM_BLANK_TIME_ERROR, window.USER_DATE_FORMATTED_FORMATSTRING));
        this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    $3R_6: function() {
        this.$3_6.get_editView().get_editElementWrapper()
            .trigger("state-validated", [new Mscrm.ValidationResult(true, null)])
    },
    setShowTime: function($p0) {
        Mscrm.FormInputControl.DateTimeBehaviorBase.prototype.setShowTime.call(this, $p0);
        this.$3_6.setViewShowTime($p0);
        this.$3_6.get_editView().get_editElementWrapper()
            .trigger("state-validated", [new Mscrm.ValidationResult(true, null)])
    }
};
Mscrm.InlineDateTimeImage = function($p0) { Mscrm.InlineDateTimeImage.initializeBase(this, [$p0]) };
Mscrm.InlineDateTimeImage.prototype = { onOver: function($p0) {}, onOut: function($p0) {} };
Mscrm.InlineDurationBehavior = function($p0) { Mscrm.InlineDurationBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineDurationBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    get_isDirty: function() {
        var $v_0 = Mscrm.FormInputControl.Duration.prototype.get_isDirty.call(this);
        !$v_0 && this.get_isDurationValid() && this.$3R_5();
        return $v_0
    },
    get_isValid: function() {
        var $v_0 = this.get_isDurationValid();
        $v_0 && this.$3R_5();
        return $v_0
    },
    initialize: function() {
        this.inlineInitialize(this.get_element().id + "Select");
        !IsNull(this.get_durationSelect()) && this.get_durationSelect().set_allowKeyDownPropagation(true)
    },
    inlineInitialize: function($p0) {
        this.set_durationSelect($find($p0));
        Mscrm.FormInputControl.Duration.prototype.initializeDuration.call(this)
    },
    handleInvalidDurationInput: function($p0, $p1) {
        var $v_0 = new Mscrm.ValidationResult(false, $p1);
        this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    showErrorMessage: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false, $p0);
        this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    $3R_5: function() {
        this.$3_5.get_editView().get_editElementWrapper()
            .trigger("state-validated", [new Mscrm.ValidationResult(true, null)])
    }
};
Mscrm.InlineEditChromeBehavior = function(element) {
    this.$$d_$7Y_4 = Function.createDelegate(this, this.$7Y_4);
    this.$$d_$7e_4 = Function.createDelegate(this, this.$7e_4);
    this.$$d_$7m_4 = Function.createDelegate(this, this.$7m_4);
    this.$$d_$7R_4 = Function.createDelegate(this, this.$7R_4);
    this.$$d_$7S_4 = Function.createDelegate(this, this.$7S_4);
    this.$$d_$7p_4 = Function.createDelegate(this, this.$7p_4);
    this.$$d_$7o_4 = Function.createDelegate(this, this.$7o_4);
    Mscrm.InlineEditChromeBehavior.initializeBase(this, [element])
};
Mscrm.InlineEditChromeBehavior.prototype = {
    $1l_4: null,
    $1j_4: null,
    $13_4: null,
    $1d_4: null,
    $10_4: null,
    $15_4: null,
    $1F_4: null,
    $4N_4: null,
    $p_4: null,
    $q_4: null,
    $b_4: false,
    $1z_4: "",
    get_lockIconUrl: function() { return window.CDNURL + "/_imgs/inlineedit/locked.png" },
    get_$3V_4: function() {
        if (IsNull(this.$15_4)) {
            var $v_0 = this.get_view().isElementInFlyOut(this.get_warningIcon());
            this.$15_4 = new Mscrm.ErrorFlyout(this.get_warningIcon(),
                this.get_validationElement(),
                this.get_view().get_errorDisplayAreaProvider().getDisplayContainer(this.get_view()));
            if ($v_0) {
                var $$t_1;
                ($$t_1 = this.$15_4).set_zIndex($$t_1.get_zIndex() +
                    Mscrm.Utilities.parseInt(this.get_warningIcon().parents(".ui-flyout-dialog").css("z-index")))
            }
        }
        return this.$15_4
    },
    get_$3O_4: function() {
        if (IsNull(this.$1F_4)) {
            var $v_0 = this.get_view().isElementInFlyOut(this.get_alertIcon());
            this.$1F_4 = new Mscrm.ErrorFlyout(this.get_alertIcon(),
                this.get_alertElement(),
                this.get_view().get_errorDisplayAreaProvider().getDisplayContainer(this.get_view()));
            if ($v_0) {
                var $$t_1;
                ($$t_1 = this.$1F_4).set_zIndex($$t_1.get_zIndex() +
                    Mscrm.Utilities.parseInt(this.get_warningIcon().parents(".ui-flyout-dialog").css("z-index")))
            }
        }
        return this.$1F_4
    },
    get_compositeFlyOut: function() { return this.$q_4 },
    set_compositeFlyOut: function(value) {
        this.$q_4 = value;
        return value
    },
    get_$6L_4: function() {
        if (this.$b_4) return this.$1z_4;
        return null
    },
    get_isNotificationSetViaClientApi: function() { return this.$b_4 },
    set_isNotificationSetViaClientApi: function(value) {
        this.$b_4 = value;
        !this.$b_4 && !this.get_stateData().get_validationResult().isValid && this.$4M_4();
        return value
    },
    get_validationElement: function() {
        if (IsNull(this.$1j_4)) {
            this.$1j_4 = $P_CRM("<div></div>").addClass("ms-crm-Inline-Validation").hide()
                .attr("id", this.get_view().get_controlId() + "_err");
            this.get_view().get_errorDisplayAreaProvider().getDisplayContainer(this.get_view()).append(this.$1j_4)
        }
        return this.$1j_4
    },
    set_validationElement: function(value) {
        this.$1j_4 = value;
        return value
    },
    get_alertElement: function() {
        if (IsNull(this.$1l_4)) {
            this.$1l_4 = $P_CRM("<div></div>").addClass("ms-crm-Inline-Validation").hide();
            this.get_view().get_errorDisplayAreaProvider().getDisplayContainer(this.get_view()).append(this.$1l_4)
        }
        return this.$1l_4
    },
    set_alertElement: function(value) {
        this.$1l_4 = value;
        return value
    },
    get_lockIcon: function() {
        if (IsNull(this.$1d_4)) {
            this.$1d_4 = $P_CRM("<span></span>").addClass("ms-crm-Inline-LockIcon")
                .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(this.get_lockIconUrl()))).attr("alt", ""));
            this.get_view().get_chromeElement().append(this.$1d_4)
        }
        return this.$1d_4
    },
    set_lockIcon: function(value) {
        this.$1d_4 = value;
        return value
    },
    get_warningIcon: function() {
        if (IsNull(this.$10_4)) {
            this.$10_4 = $P_CRM("<span></span>").addClass("ms-crm-Inline-WarningIcon")
                .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/inlineedit/warning.png")))
                    .attr("alt", window.LOCID_WARNINGICON_ALTTEXT)
                    .attr("id", this.get_view().get_controlId() + "_warn"))
                .append($P_CRM("<div></div>").attr("id", this.get_view().get_warningElementId())
                    .addClass("ms-crm-Hidden-NoBehavior")).attr("title", "");
            this.get_view().get_chromeElement().append(this.$10_4);
            this.$10_4.mouseenter(this.$$d_$7o_4).mouseleave(this.$$d_$7p_4).hide()
        }
        return this.$10_4
    },
    set_warningIcon: function(value) {
        this.$10_4 = value;
        return value
    },
    get_alertIcon: function() {
        if (IsNull(this.$13_4)) {
            this.$13_4 = $P_CRM("<span></span>").addClass("ms-crm-Inline-WarningIcon")
                .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/inlineedit/alert.png"))))
                .append($P_CRM("<div></div>").attr("id", this.get_view().get_alertElementId())
                    .addClass("ms-crm-Hidden-NoBehavior")).attr("title", "");
            this.get_view().get_chromeElement().append(this.$13_4);
            this.$13_4.mouseover(this.$$d_$7S_4).mouseout(this.$$d_$7R_4).hide()
        }
        return this.$13_4
    },
    set_alertIcon: function(value) {
        this.$13_4 = value;
        return value
    },
    $7R_4: function($p0) {
        this.get_view().get_chromeElement().attr("title", this.get_view().get_chromeElement().attr("toggleTitle"));
        this.get_view().get_chromeElement().removeAttr("toggleTitle");
        this.get_$3O_4().hideError()
    },
    $7S_4: function($p0) {
        this.get_view().get_chromeElement().attr("toggleTitle", this.get_view().get_chromeElement().attr("title"));
        this.get_view().get_chromeElement().attr("title", "");
        this.get_$3O_4().showError(this.get_view().$g_2)
    },
    get_warningIconPath: function() { return "/_imgs/inlineedit/warning.png" },
    showErrorDivAndSetMessage: function(message) {
        if (this.get_stateData().get_validationResult().isValid) {
            this.showMessageInErrorDiv(message);
            this.$1z_4 = message;
            return true
        }
        return false
    },
    showErrorDiv: function() {
        if (this.$b_4) this.showMessageInErrorDiv(this.$1z_4);
        else
            !this.get_view().get_isValid() &&
                this.showMessageInErrorDiv(this.get_stateData().get_validationResult().errorText)
    },
    showMessageInErrorDiv: function(message) {
        this.get_$3V_4().showError(message);
        this.$4Y_4(true)
    },
    hideErrorDivAndResetMessage: function() {
        this.hideErrorDiv();
        this.$1z_4 = ""
    },
    hideErrorDiv: function() {
        this.get_$3V_4().hideError(true);
        this.$4Y_4(false)
    },
    isErrorDivSet: function() { return this.$b_4 || !this.get_stateData().get_validationResult().isValid },
    $4Y_4: function($p0) {
        var $v_0 = Mscrm.Utilities.get_isLeftToRight() ? "margin-left" : "margin-right", $v_1 = $p0 ? "23px" : "";
        this.get_view().get_valueElement().css($v_0, $v_1);
        var $v_2 = this.get_view().get_editView();
        $v_2 && $v_2.get_editElementWrapper().css($v_0, $v_1)
    },
    showMessageInAlertDiv: function(message) { this.get_$3O_4().showError(message) },
    hideAlertDiv: function(hideAnchor) { !IsNull(this.$1F_4) && this.get_$3O_4().hideError(hideAnchor) },
    initialize: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.initialize.call(this);
        if (this.get_view().get_disabled() && this.get_view().get_controlMode() !== "deactivated") {
            this.get_lockIcon().show();
            var $v_0 = this.get_view().get_chromeElement().children()[0];
            if (!IsNull($v_0) && $v_0.className.indexOf("ms-crm-Hidden") > -1
            ) this.get_lockIcon()[0].style.display = "none";
            this.get_view().get_valueElement().addClass("ms-crm-Inline-Locked");
            this.get_view().get_chromeElement().attr("data-controlmode", "locked")
        }
        $P_CRM(this.get_view()).bind("ms-crm-PropertyChange", this.$$d_$7m_4)
    },
    initializeForEditElement: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.initializeForEditElement.call(this);
        var $v_0 = this.get_view().get_editView(), $v_1 = $v_0.get_editElementWrapper();
        $v_1.bind("state-validated", this.$$d_$7e_4)
    },
    registerEditEvents: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.registerEditEvents.call(this);
        this.$2r_4() &&
            this.get_view().get_layout().get_labelElement()
            .click(this.$$d_onValueElementClicked ||
                (this.$$d_onValueElementClicked = Function.createDelegate(this, this.onValueElementClicked)))
    },
    $2r_4: function() { return this.get_view().get_layout().get_labelElementExists() },
    registerReadEvents: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.registerReadEvents.call(this);
        if (!window.UseTabletExperience) {
            this.get_view().get_chromeElement().mouseleave(this.$$d_onChromeMouseOut ||
                (this.$$d_onChromeMouseOut = Function.createDelegate(this, this.onChromeMouseOut)));
            this.$2r_4() &&
                this.get_view().get_layout().get_labelElement()
                .mouseleave(this.$$d_onChromeMouseOut ||
                    (this.$$d_onChromeMouseOut = Function.createDelegate(this, this.onChromeMouseOut)))
        }
    },
    registerEditHintEvents: function() {
        if (!window.UseTabletExperience) {
            Mscrm.InlineEditChromeBehaviorBase$1.prototype.registerEditHintEvents.call(this);
            this.$2r_4() &&
                this.get_view().get_layout().get_labelElement()
                .mouseenter(this.$$d_onChromeMouseOver ||
                    (this.$$d_onChromeMouseOver = Function.createDelegate(this, this.onChromeMouseOver)))
        }
    },
    $7p_4: function($p0) {
        this.get_view().get_chromeElement().attr("title", this.$4N_4);
        if (this.get_stateData().get_currentState() === 2) return;
        this.hideValidationElement()
    },
    $7o_4: function($p0) {
        this.$4N_4 = this.get_view().get_chromeElement().attr("title");
        this.get_view().get_chromeElement().attr("title", "");
        (this.$b_4 || !this.get_stateData().get_validationResult().isValid && !this.$8b_4()) && this.$4M_4()
    },
    $4M_4: function() {
        if (this.$b_4) this.get_$3V_4().showError(this.$1z_4);
        else this.get_$3V_4().showError(this.get_stateData().get_validationResult().errorText)
    },
    hideValidationElement: function() { !IsNull(this.$15_4) && this.$15_4.hideError(false) },
    setControlToEdit: function() { this.transitionToEditState() },
    $8b_4: function() { return this.get_view().get_validationElement().css("display") === "block" },
    transitionToEditState: function() {
        var $v_0 = $P_CRM(this.get_element());
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.transitionToEditState.call(this);
        if (Mscrm.InlineControlFactory.checkIfComposite($v_0)) this.$7q_4($v_0);
        else {
            this.triggerLockIconStateChanged("state-edit");
            this.triggerValidationElementStateChanged("state-edit");
            var $v_1 = this.get_view().get_chromeElement().attr("data-initializing"),
                $v_2 = !isNullOrEmptyString($v_1) && $v_1 === "1";
            !(this.get_view().get_controlMode() === "alwaysedit" && (Mscrm.Utilities.isMobileRefresh() || $v_2)) &&
                Mscrm.InlineEditUtilities.set_activeControl(this.get_view())
        }
    },
    transitionToReadState: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.transitionToReadState.call(this);
        this.triggerLockIconStateChanged("state-read");
        this.triggerAlertElementStateChanged("state-read");
        this.triggerValidationElementStateChanged("state-read");
        Mscrm.InlineEditUtilities.get_activeControl() === this.get_view() &&
            Mscrm.InlineEditUtilities.set_activeControl(null)
    },
    transitionToEditHintState: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.transitionToEditHintState.call(this);
        this.triggerLockIconStateChanged("state-edithint");
        this.triggerWarningIconStateChanged("state-edithint");
        this.triggerAlertElementStateChanged("state-edithint")
    },
    tryShowValidationWarning: function() {
        if (!this.get_view()
            .get_disableWarningsAndValidation() &&
            !this.get_stateData().get_validationResult().isValid) this.get_warningIcon().show();
        else this.get_warningIcon().hide()
    },
    trySetAriaInvalid: function() {
        var $v_0 = $P_CRM("#" + this.get_view().get_warningElementId()), $v_1 = $v_0.attr("role");
        if (!this.get_stateData().get_validationResult().isValid) {
            this.get_view().get_isEditControlInitialized() &&
                this.get_view().get_editView().get_editElement().attr("aria-invalid", "true");
            $v_0.text(this.get_stateData().get_validationResult().errorText);
            IsNull($v_1) && $v_0.attr("role", "alert")
        } else {
            if (this.get_view().get_isEditControlInitialized()) {
                var $v_2 = this.get_view().get_editView().get_editElement().attr("aria-invalid");
                !IsNull($v_2) && this.get_view().get_editView().get_editElement().removeAttr("aria-invalid")
            }
            $v_0.text("");
            !IsNull($v_1) && $v_0.removeAttr("role")
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$15_4) && this.$15_4.dispose();
        !IsNull(this.$1F_4) && this.$1F_4.dispose();
        !IsNull(this.$q_4) && this.$q_4.dispose();
        !IsNull(this.$p_4) && !this.$p_4.get_isDisposed() && this.$p_4.dispose();
        $P_CRM(this.get_view()).unbind("ms-crm-PropertyChange", this.$$d_$7m_4);
        var $v_0 = this.get_view().get_editView();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_editElementWrapper();
            $v_1.unbind("state-validated", this.$$d_$7e_4)
        }
        !IsNull(this.$10_4) && this.$10_4.unbind("mouseenter", this.$$d_$7o_4).unbind("mouseleave", this.$$d_$7p_4);
        !IsNull(this.$13_4) && this.$13_4.unbind("mouseover", this.$$d_$7S_4).unbind("mouseout", this.$$d_$7R_4);
        !this.get_view().get_layout().get_isDisposed() &&
            this.$2r_4() &&
            this.get_view().get_layout().get_labelElement()
            .unbind("click",
                this.$$d_onValueElementClicked ||
                (this.$$d_onValueElementClicked = Function.createDelegate(this, this.onValueElementClicked)));
        if (!window.UseTabletExperience) {
            !IsNull(this.get_view().get_chromeElement()) &&
                this.get_view().get_chromeElement().unbind("mouseleave",
                    this.$$d_onChromeMouseOut ||
                    (this.$$d_onChromeMouseOut = Function.createDelegate(this, this.onChromeMouseOut)));
            if (!this.get_view().get_layout().get_isDisposed() && this.$2r_4()) {
                this.get_view().get_layout().get_labelElement()
                    .unbind("mouseleave",
                        this.$$d_onChromeMouseOut ||
                        (this.$$d_onChromeMouseOut = Function.createDelegate(this, this.onChromeMouseOut)));
                this.get_view().get_layout().get_labelElement()
                    .unbind("mouseenter",
                        this.$$d_onChromeMouseOver ||
                        (this.$$d_onChromeMouseOver = Function.createDelegate(this, this.onChromeMouseOver)))
            }
        }
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.dispose.call(this)
    },
    $7q_4: function($p0) {
        var $v_0 = $p0.attr("compositionLinkControlId");
        this.$p_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_0);
        if (this.$p_4) {
            this.$p_4.set_fieldName(this.get_view().get_dataFieldName());
            this.$p_4.set_anchor($p0);
            this.$p_4.set_isEnabledForNewState(true);
            this.$p_4.set_hostId(this.get_element().id);
            this.$p_4.openFlyOut(null, $p0);
            this.$q_4 = this.$p_4.get_flyOutDialog();
            this.$q_4.bind("flyout-closed", this.$$d_$7Y_4);
            Type.parse("Mscrm.InlineEditDataService") && Mscrm.InlineEditDataService.set_blockAutoSave(true)
        }
    },
    activateLink: function() {
        var $v_0 = this.get_view().get_valueElement().find(".ms-crm-Phone, .ms-crm-gridurl");
        if (!IsNull($v_0) && !IsNull($v_0.first()) && !IsNull($v_0[0])) {
            XUI.Html.DispatchDomEvent($v_0[0], XUI.Html.CreateDomEvent("click"));
            return
        }
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.activateLink.call(this)
    },
    onEditElementWrapperStateChange: function(eventObject) {
        !(this.get_view().$0_1.get_attribute().get_isCompositeAttributeValueSet() &&
                (this.$q_4 ? this.$q_4.get_visible() : false)) &&
            Mscrm.InlineEditChromeBehaviorBase$1.prototype.onEditElementWrapperStateChange.call(this, eventObject)
    },
    $7m_4: function($p0) {
        var $v_0 = arguments[1];
        this.$6v_4($v_0)
    },
    $6v_4: function($p0) {
        switch ($p0) {
        case "ControlMode":
            this.$6t_4(this.get_view().get_controlMode());
            break
        }
    },
    $6t_4: function($p0) {
        switch ($p0) {
        case "normal":
            this.get_stateData().set_currentState(0);
            this.get_view().get_chromeElement().attr("data-controlmode", "normal");
            break;
        case "locked":
            this.get_stateData().set_currentState(0);
            this.get_view().get_chromeElement().attr("data-controlmode", "locked");
            break;
        case "deactivated":
            this.get_stateData().set_currentState(0);
            this.get_view().get_chromeElement().attr("data-controlmode", "deactivated");
            break;
        case "alwaysedit":
            this.get_stateData().set_currentState(2);
            this.get_view().get_chromeElement().attr("data-controlmode", "alwaysedit");
            break;
        default:
            break
        }
    },
    $7e_4: function($p0) {
        var $v_0 = arguments[1];
        this.get_stateData().set_validationResult($v_0);
        this.get_view().$k_2 = $v_0.isValid ? null : this.get_view().get_editView().get_editElementValue();
        this.get_view().set_validateResult(new Mscrm.ValidationResult($v_0.isValid, $v_0.errorText));
        this.$8Z_4();
        this.handleValidationEvent()
    },
    $8Z_4: function() {
        var $v_0 = this.get_view().$0_1.validate(this.get_view().get_editView().get_editElementValue());
        if (!this.get_stateData().get_validationResult().isValid &&
            !$v_0.isValid &&
            this.get_stateData().get_validationResult().errorText.indexOf($v_0.errorText) === -1 &&
            !this.get_stateData().get_validationResult()
            .overwriteErrorMessage) this.get_stateData().get_validationResult().errorText += " " + $v_0.errorText;
        else if (this.get_stateData().get_validationResult().isValid && !$v_0.isValid) {
            this.get_stateData().get_validationResult().isValid = $v_0.isValid;
            this.get_stateData().get_validationResult().errorText = $v_0.errorText;
            this.get_view().$k_2 = this.get_view().$0_1.get_editValue();
            this.get_view().set_validateResult(new Mscrm.ValidationResult($v_0.isValid, $v_0.errorText))
        }
        this.get_view().get_validateResult().attributeName = this.get_view().get_dataFieldName();
        this.get_view().get_validateResult().parentFormDataEntityId = this.get_view().$0_1.get_attribute()
            .get_parentFormDataEntityId();
        this.get_view().$0_1.set_hasError(!this.get_view().get_validateResult().isValid)
    },
    handleValidationEvent: function() {
        var $v_0 = this.get_view().get_editView();
        if (!this.get_stateData().get_validationResult().isValid) {
            this.get_view().get_valueElement().addClass("ms-crm-Inline-HasError");
            $v_0.get_editElementWrapper().addClass("ms-crm-Inline-HasError");
            this.get_view().get_chromeElement().attr("hasError", "true")
        } else {
            this.get_view().get_valueElement().removeClass("ms-crm-Inline-HasError");
            $v_0.get_editElementWrapper().removeClass("ms-crm-Inline-HasError");
            this.get_view().get_chromeElement().attr("hasError", "false")
        }
        if (!this.$b_4 || !this.get_stateData().get_validationResult().isValid) {
            if (this.$b_4) {
                this.$b_4 = false;
                this.hideErrorDivAndResetMessage()
            }
            this.triggerValidationElementStateChanged("state-validated");
            this.triggerWarningIconStateChanged("state-validated");
            this.triggerAlertElementStateChanged("state-validated")
        }
    },
    handleTabNavigation: function() {
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.handleTabNavigation.call(this);
        if (Mscrm.TabTypeHelper.get_isTabCommit() &&
            Mscrm.TabTypeHelper.get_tabbedAttributeLogicalName() !==
            this.get_view().$0_1.get_attribute().get_logicalName() &&
            !this.get_view().get_disabled()) {
            this.get_view().get_valueElement().trigger("click");
            Mscrm.TabTypeHelper.disableTabTyping()
        }
    },
    triggerWarningIconStateChanged: function(newState) {
        switch (newState) {
        case "state-read":
        case "state-edit":
        case "state-validated":
            this.trySetAriaInvalid();
            this.tryShowValidationWarning();
            break
        }
    },
    triggerLockIconStateChanged: function(newState) {
        switch (newState) {
        case "state-read":
        case "state-edithint":
            if (!this.get_view().get_hideLockIcon() && this.get_view().get_controlMode() === "locked") {
                this.get_lockIcon().show();
                this.get_view().get_valueElement().addClass("ms-crm-Inline-Locked")
            } else {
                this.get_lockIcon().hide();
                this.get_view().get_valueElement().removeClass("ms-crm-Inline-Locked")
            }
            break;
        case "state-edit":
            this.get_lockIcon().hide();
            break
        }
    },
    triggerValidationElementStateChanged: function(newState) {
        if (!this.get_view().get_disableWarningsAndValidation())
            switch (newState) {
            case "state-read":
                this.hideValidationElement();
                break;
            case "state-edit":
            case "state-validated":
                if ((this.$b_4 || !this.get_stateData().get_validationResult().isValid) &&
                    this.get_stateData().get_currentState() === 2) this.$4M_4();
                else this.hideValidationElement();
                break
            }
        else this.hideValidationElement()
    },
    triggerAlertElementStateChanged: function(newState) {
        if (!this.get_view().get_disableWarningsAndValidation())
            switch (newState) {
            case "state-read":
                this.get_view().hideAlertElement(false);
                break;
            case "state-edithint":
            case "state-validated":
                (this.get_view().$0_1.get_attribute().get_sourceType() === 1 ||
                        this.get_view().$0_1.get_attribute().get_sourceType() === 2) &&
                    this.get_view().showAlertElement();
                break
            }
        else this.get_view().hideAlertElement(true)
    },
    tryTransitionToAlwaysEditMode: function() {
        if (this.get_view().get_controlMode() === "alwaysedit") {
            this.get_view().initializeAndRenderEditView();
            this.get_stateData().set_currentState(2)
        }
    },
    $7Y_4: function($p0) {
        switch ($p0.type) {
        case "flyout-closed":
            this.get_view().get_editView().confirm();
            Mscrm.TabTypeHelper.set_isTabCommit(false);
            break
        }
    }
};
Mscrm.InlineEditCheckBoxChromeBehavior = function($p0) {
    Mscrm.InlineEditCheckBoxChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.InlineEditCheckBoxChromeBehavior.prototype = {
    onChromeElementFocus: function($p0) {
        this.get_view().get_isEditControlInitialized() &&
            !this.get_view().get_disabled() &&
            this.get_view().get_editView().get_editElementWrapper().addClass("ms-crm-Inline-EditHintState")
    },
    onChromeElementBlur: function($p0) {
        this.get_view().get_isEditControlInitialized() &&
            this.get_view().get_editView().get_editElementWrapper().removeClass("ms-crm-Inline-EditHintState")
    },
    onElementKeyPress: function($p0) {
        switch ($p0.which) {
        case 13:
            this.get_view().toggleCheckBox();
            break
        }
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onElementKeyPress.call(this, $p0)
    }
};
Mscrm.InlineEditableSelectBehavior = function($p0) { Mscrm.InlineEditableSelectBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineEditableSelectBehavior.prototype = {
    tabKeyAction: function($p0) {
        Mscrm.EditableSelectControl.prototype.tabKeyAction.call(this, $p0);
        Mscrm.EditableSelectControl.prototype.onBlur.call(this, $p0)
    },
    disableDropDownIcon: function($p0, $p1) {
        if (IsNull($p0)) return;
        Mscrm.ImageStrip.changeImage($p0,
            $p1 ? "/_imgs/inlineedit/time_icon_disabled.png" : "/_imgs/inlineedit/time_icon.png");
        $p0.disabled = $p1
    },
    onArrowImageMouseOver: function($p0) {},
    onArrowImageMouseOut: function($p0) {},
    setValues: function($p0, $p1) {
        Mscrm.EditableSelectControl.prototype.setValues.call(this, $p0, $p1);
        Mscrm.EditableSelectControl.prototype.validateValue.call(this, null)
    }
};
Mscrm.InlineEditLookupChromeBehavior = function($p0) {
    Mscrm.InlineEditLookupChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.InlineEditLookupChromeBehavior.prototype = {
    tryShowValidationWarning: function() {
        var $v_0 = this.get_stateData().get_validationResult();
        Mscrm.InlineLookupUtility.$5S($v_0, this.get_view())
    },
    onValueElementClicked: function($p0) { Mscrm.InlineLookupUtility.$5A($p0, this.get_view(), this.get_stateData()) },
    onEditElementWrapperStateChange: function($p0) {
        Mscrm.InlineEditChromeBehavior.prototype.onEditElementWrapperStateChange.call(this, $p0);
        Mscrm.InlineLookupUtility.$58($p0, this.get_view())
    },
    activateLink: function() { Mscrm.InlineLookupUtility.$55(this.get_view()) },
    transitionToEditHintState: function() {
        "multi" === this.get_view().get_viewModel().get_lookupStyle() &&
            this.get_view().get_valueElement().css("overflow-y", "auto");
        Mscrm.InlineEditChromeBehavior.prototype.transitionToEditHintState.call(this)
    },
    transitionToReadState: function() {
        "multi" === this.get_view().get_viewModel().get_lookupStyle() &&
            this.get_view().get_valueElement().css("overflow-y", "auto");
        Mscrm.InlineEditChromeBehavior.prototype.transitionToReadState.call(this)
    }
};
Mscrm.InlineEditTextAreaChromeBehavior = function($p0) {
    Mscrm.InlineEditTextAreaChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.InlineEditTextAreaChromeBehavior.prototype = {
    transitionToEditState: function() {
        this.get_view().get_chromeElement().trigger("TransitionToEditStart");
        Mscrm.InlineEditChromeBehavior.prototype.transitionToEditState.call(this)
    }
};
Mscrm.InlineEditToggleChromeBehavior = function($p0) {
    Mscrm.InlineEditToggleChromeBehavior.initializeBase(this, [$p0])
};
Mscrm.InlineEditToggleChromeBehavior.prototype = {
    handleTabNavigation: function() {},
    transitionToReadState: function() {
        Mscrm.InlineEditChromeBehavior.prototype.transitionToReadState.call(this);
        !window.UseTabletExperience && this.get_stateData().set_chromeMouseOverTimeoutTriggered(true)
    },
    onValueElementClicked: function($p0) { this.$3S_5() },
    onElementKeyPress: function($p0) {
        switch ($p0.which) {
        case 13:
            this.$3S_5();
            break
        }
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onElementKeyPress.call(this, $p0)
    },
    $3S_5: function() {
        if (!this.get_view().get_disabled() && "alwaysedit" !== this.get_view().get_controlMode()) {
            this.get_view().tryCompleteOnDemandInitialization();
            this.get_view().get_editView().confirm()
        }
    },
    transitionToEditState: function() {
        "alwaysedit" === this.get_view().get_controlMode() &&
            Mscrm.InlineEditChromeBehavior.prototype.transitionToEditState.call(this)
    },
    onChromeElementBlur: function($p0) {
        "deactivated" !== this.get_view().get_controlMode() &&
            this.get_view().get_valueElement().removeClass("ms-crm-Inline-EditHintState")
    },
    onChromeElementFocus: function($p0) {
        "deactivated" !== this.get_view().get_controlMode() &&
            this.get_view().get_valueElement().addClass("ms-crm-Inline-EditHintState")
    }
};
Mscrm.InlineEmailAddressBehavior = function($p0) { Mscrm.InlineEmailAddressBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineEmailAddressBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function($p0) {
        this.$3_6 = $p0;
        return $p0
    },
    get_isValidProxy: function() { return this.verify() },
    verify: function() {
        var $v_0 = new Mscrm.ValidationResult(this.isValid(), null);
        if ($v_0.isValid) {
            this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    get_allowValidationMessage: function() { return true },
    handleParseError: function() {},
    showErrorMessage: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false, $p0);
        this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    setOldValue: function() {}
};
Mscrm.InlineEmailBodyControlBehavior = function(element) {
    this.$$d_$7f_5 = Function.createDelegate(this, this.$7f_5);
    Mscrm.InlineEmailBodyControlBehavior.initializeBase(this, [element]);
    Mscrm.FormInputControl.EmailBodyInputBehavior.prototype.set_disabled.call(this, false)
};
Mscrm.InlineEmailBodyControlBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function(value) {
        this.$3_5 = value;
        return value
    },
    get_isValidProxy: function() {
        var $v_0 = new Mscrm.ValidationResult(true, null);
        if ($v_0.isValid) {
            this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    getPostfixToMainElementId: function(postfix) { return this.get_element().id.replace("_i", "") + postfix },
    fireOnContentReady: function() {
        $addHandler(this.get_emailBody(), "click", this.$$d_$7f_5);
        Mscrm.FormInputControl.EmailBodyInputBehavior.prototype.fireOnContentReady.call(this)
    },
    $7f_5: function($p0) { this.get_emailBody().document.body.click() }
};
Mscrm.InlineEmailBodyChromeBehavior = function($p0) { Mscrm.InlineEmailBodyChromeBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineFormDataControl = function(element) {
    this.$$d_$7d_5 = Function.createDelegate(this, this.$7d_5);
    this.$$d_$57_5 = Function.createDelegate(this, this.$57_5);
    Mscrm.InlineFormDataControl.initializeBase(this, [element])
};
Mscrm.InlineFormDataControl.prototype = {
    get_editElementWrapper: function() {
        return !IsNull(this.get_element()) ? $P_CRM(this.get_element().parentNode) : null
    },
    initializeBehaviors: function() {
        this.get_editElementWrapper().bind("state-commit", this.$$d_$57_5);
        this.get_editElementWrapper().bind("state-discard", this.$$d_$7d_5)
    },
    disposeHtmlControl: function() {
        if (!IsNull(this.get_editElementWrapper())) {
            this.get_editElementWrapper().unbind("state-commit", this.$$d_$57_5);
            this.get_editElementWrapper().unbind("state-discard", this.$$d_$7d_5)
        }
        Mscrm.FormDataControl.prototype.disposeHtmlControl.call(this)
    },
    $57_5: function($p0) { this.setAttributeValueFromControl() },
    $7d_5: function($p0) { this.setAttributeValueFromControl() }
};
Mscrm.InlineEmailBodyFormDataControl = function(element) {
    this.$$d_$57_6 = Function.createDelegate(this, this.$57_6);
    Mscrm.InlineEmailBodyFormDataControl.initializeBase(this, [element])
};
Mscrm.InlineEmailBodyFormDataControl.prototype = {
    get_editElementWrapper: function() {
        return !IsNull(this.get_element()) ? $P_CRM(this.get_element().parentNode) : null
    },
    initializeBehaviors: function() {
        Mscrm.FormDataControl.prototype.initializeBehaviors.call(this);
        this.get_editElementWrapper().bind("state-commit", this.$$d_$57_6)
    },
    disposeHtmlControl: function() {
        !IsNull(this.get_editElementWrapper()) && this.get_editElementWrapper().unbind("state-commit", this.$$d_$57_6)
    },
    $57_6: function($p0) { this.setAttributeValueFromControl() },
    onContentReady: function(sender, args) {
        this.get_attribute().resetValueWithDirtyCheck(this.get_value(), false);
        Mscrm.EmailBodyControl.prototype.onContentReady.call(this, sender, args)
    }
};
Mscrm.InlineImageLookupTransactionCurrency = function($p0) {
    this.$$d_$7E_7 = Function.createDelegate(this, this.$7E_7);
    Mscrm.InlineImageLookupTransactionCurrency.initializeBase(this, [$p0]);
    this.add_onafterselect(this.$$d_$7E_7)
};
Mscrm.InlineImageLookupTransactionCurrency.prototype = {
    $3_7: null,
    get_view: function() { return this.$3_7 },
    set_view: function($p0) {
        this.$3_7 = $p0;
        return $p0
    },
    isControlsContainer: function($p0) {
        if ($p0.className.indexOf("ms-crm-Form-Common-Dummy") > -1) return true;
        else return false
    },
    discardView: function() { this.$3_7.get_editView().discard(false) },
    IsValid: function() { return this.verify() },
    verify: function() {
        var $v_0, $v_1 = this.Items(false, true, false, false, false);
        if (IsNull($v_1) || !$v_1.length) $v_0 = !this.hasUnresolvedText();
        else $v_0 = !($v_1[0].category === 2 || $v_1[0].category === 1);
        var $v_2 = new Mscrm.ValidationResult($v_0, null);
        if ($v_2.isValid)
            if (this.currencyCheckRequired()) $v_2.isValid = false;
            else this.$3_7.get_editView().get_editElementWrapper().trigger("state-validated", [$v_2]);
        return $v_2.isValid
    },
    get_isDirty: function() { return Mscrm.InlineLookupUtility.$4z(this) },
    $7E_7: function($p0, $p1) {
        var $v_0 = this.get_dataValue();
        if (IsNull($v_0) || !$v_0.length) return;
        else Mscrm.ErrorStatusControl.showCriticalWarning(window.LOCID_CURRENCY_CHANGE_ALERT)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.remove_onafterselect(this.$$d_$7E_7);
        Mscrm.FormInputControl.ImageLookupTransactionCurrency.prototype.dispose.call(this)
    },
    autoResolveHandler: function($p0, $p1) {
        Mscrm.FormInputControl.LookupUIBehavior.prototype.autoResolveHandler.call(this, $p0, $p1);
        Mscrm.InlineLookupUtility.$4x(this.$3_7)
    },
    showErrorMessage: function($p0, $p1) { Mscrm.InlineLookupUtility.$4L($p0, $p1, this.$3_7) },
    mruXYPosition: function() { return Mscrm.InlineLookupUtility.$4I(this.get_rootControl()) }
};
Mscrm.InlineLookupFormDataControl = function($p0) { Mscrm.InlineLookupFormDataControl.initializeBase(this, [$p0]) };
Mscrm.InlineLookupFormDataControl.prototype = {
    get_editElementWrapper: function() {
        if (!IsNull(this.get_element())) {
            var $v_0 = this.get_element().id.substring(0, this.get_element().id.length - 2),
                $v_1 = $v_0 + "_lookupTable",
                $v_2 = $get($v_1);
            if (!IsNull($v_2)) return $P_CRM($v_2.parentNode)
        }
        return null
    }
};
Mscrm.InlineMoneyBehavior = function($p0) { Mscrm.InlineMoneyBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineMoneyBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function($p0) {
        this.$3_6 = $p0;
        return $p0
    },
    get_isValidProxy: function() {
        var $v_0 = new Mscrm.ValidationResult(this.IsValid(), null);
        if ($v_0.isValid) {
            this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    isValueNullOrEmpty: function($p0) { return !isNullOrEmptyString($p0) },
    showErrorMessage: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false, $p0);
        this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    get_currencyPrecision: function() {
        return Mscrm.FormInputControl.MoneyInputBehavior.prototype.get_currencyPrecision.call(this)
    },
    set_currencyPrecision: function($p0) {
        Mscrm.FormInputControl.MoneyInputBehavior.prototype.set_currencyPrecision.call(this, $p0);
        this.$3_6.$0_1.set_precision(Mscrm.FormInputControl.MoneyInputBehavior.prototype.get_currencyPrecision
            .call(this));
        return $p0
    },
    get_currencySymbol: function() {
        return Mscrm.FormInputControl.MoneyInputBehavior.prototype.get_currencySymbol.call(this)
    },
    set_currencySymbol: function($p0) {
        Mscrm.FormInputControl.MoneyInputBehavior.prototype.set_currencySymbol.call(this, $p0);
        this.$3_6.$0_1.set_currencySymbol(Mscrm.FormInputControl.MoneyInputBehavior.prototype.get_currencySymbol
            .call(this));
        return $p0
    },
    handleParseError: function() {},
    onValidationSuccess: function($p0) {},
    get_allowValidationMessage: function() { return true }
};
Mscrm.InlineMoneyFormDataControl = function($p0) { Mscrm.InlineMoneyFormDataControl.initializeBase(this, [$p0]) };
Mscrm.InlineMoneyFormDataControl.prototype = {
    $2x_6: null,
    get_editElementWrapper: function() {
        if (IsNull(this.$2x_6) && !IsNull(this.get_element())) {
            var $v_0 = this.get_element().id + "_table";
            this.$2x_6 = $P_CRM("#" + $v_0).parents().first()
        }
        return this.$2x_6
    }
};
Mscrm.InlineMultiplePicklistBehavior = function(element) {
    Mscrm.InlineMultiplePicklistBehavior.initializeBase(this, [element])
};
Mscrm.InlineMultiplePicklistBehavior.prototype = {
    $3_4: null,
    get_view: function() { return this.$3_4 },
    set_view: function(value) {
        this.$3_4 = value;
        return value
    },
    get_isDirty: function() { return true },
    get_dataValue: function() {
        var $v_0 = null;
        if (this.get_isValid()) {
            $v_0 = [];
            for (var $v_1 = 0; $v_1 < this.$3_4.get_selectedItemIndexes().length; $v_1++) {
                var $v_2 = this.$3_4.get_selectedItemIndexes()[$v_1];
                Array.add($v_0, this.$3_4.$0_1.get_options()[$v_2])
            }
        }
        return $v_0
    },
    set_dataValue: function(value) { return value },
    get_isValid: function() {
        var $v_0 = new Mscrm.ValidationResult(true, null), $v_1 = [$v_0];
        this.$3_4.get_editView().get_editElementWrapper().trigger("state-validated", $v_1);
        return $v_0.isValid
    }
};
Mscrm.InlineNumberBehavior = function($p0) { Mscrm.InlineNumberBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineNumberBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    get_isValidProxy: function() {
        var $v_0 = new Mscrm.ValidationResult(this.IsValid(), null);
        if ($v_0.isValid) {
            this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    get_allowValidationMessage: function() { return true },
    get_isDirty: function() {
        var $v_0 = this.get_element().value;
        return this.$3_5.$0_1.get_defaultEditValue() !== $v_0
    },
    onValidationSuccess: function($p0) {},
    handleParseError: function() {},
    isValueNullOrEmpty: function($p0) { return !isNullOrEmptyString($p0) },
    showErrorMessage: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false, $p0);
        this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    setOldValue: function() {}
};
Mscrm.InlineOptionSetBehavior = function(element) { Mscrm.InlineOptionSetBehavior.initializeBase(this, [element]) };
Mscrm.InlineOptionSetBehavior.prototype = {
    $3_5: null,
    $3i_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function(value) {
        this.$3_5 = value;
        return value
    },
    get_isValid: function() { return this.$8c_5() },
    get_customErrorText: function() { return this.$3i_5 },
    set_customErrorText: function(value) {
        this.$3i_5 = value;
        return value
    },
    $8c_5: function() {
        var $v_0 = new Mscrm.ValidationResult(true, null), $v_1 = [$v_0];
        this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", $v_1);
        return $v_0.isValid
    }
};
Mscrm.InlinePresenceLookupUIBehavior = function(element) {
    Mscrm.InlinePresenceLookupUIBehavior.initializeBase(this, [element])
};
Mscrm.InlinePresenceLookupUIBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function(value) {
        this.$3_6 = value;
        return value
    },
    get_isDirty: function() { return Mscrm.InlineLookupUtility.$4z(this) },
    get_isTouchSkinEnabled: function() { return false },
    IsValid: function() { return Mscrm.InlineLookupUtility.$52(this, this.$3_6) },
    verify: function() { return Mscrm.InlineLookupUtility.$4R(this, this.$3_6) },
    discardView: function() { this.$3_6.get_editView().discard(false) },
    autoResolveHandler: function(result, cmd) {
        Mscrm.FormInputControl.LookupUIBehavior.prototype.autoResolveHandler.call(this, result, cmd);
        Mscrm.InlineLookupUtility.$4x(this.$3_6)
    },
    showErrorMessage: function(message, iconPath) { Mscrm.InlineLookupUtility.$4L(message, iconPath, this.$3_6) },
    hideErrorMessage: function() { Mscrm.InlineLookupUtility.$71(this.$3_6) },
    mruXYPosition: function() { return Mscrm.InlineLookupUtility.$4I(this.get_rootControl()) }
};
Mscrm.InlineRollupChromeBehavior = function($p0) { Mscrm.InlineRollupChromeBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineRollupChromeBehavior.prototype = {
    onValueElementClicked: function($p0) {
        Mscrm.InlineRollupUtility.$3g($p0, this.get_view());
        window.UseTabletExperience && Mscrm.InlineRollupUtility.$8Q($p0, this.get_view())
    },
    initializeForEditElement: function() {},
    handleTabNavigation: function() {
        !this.get_stateData().get_chromeMouseOver() &&
            this.get_view().get_refreshIconLink().length > 0 &&
            !Mscrm.InternalUtilities.Utilities.isHighContrastEnabled() &&
            this.get_view().get_refreshIconLink().addClass("hover");
        Mscrm.InlineEditChromeBehavior.prototype.handleTabNavigation.call(this)
    },
    onChromeElementBlur: function($p0) {
        this.get_view().get_refreshIconLink().removeClass("hover");
        window.UseTabletExperience && this.get_view().get_rollupToolTipFlyout().hideError();
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onChromeElementBlur.call(this, $p0)
    },
    onElementKeyPress: function($p0) {
        $p0.which === 13 && Mscrm.InlineRollupUtility.$3g($p0, this.get_view());
        Mscrm.InlineEditChromeBehaviorBase$1.prototype.onElementKeyPress.call(this, $p0)
    }
};
Mscrm.InlineTextAreaBehavior = function($p0) { Mscrm.InlineTextAreaBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineTextAreaBehavior.prototype = {
    get_isDirty: function() {
        var $v_0 = this.get_element().value, $v_1 = this.get_defaultValue() !== $v_0;
        if ($v_1) $v_1 = this.get_defaultValue() !== Mscrm.TextAreaHelper.normalizeNewLine($v_0);
        return $v_1
    }
};
Mscrm.InlineTextBoxBehavior = function($p0) { Mscrm.InlineTextBoxBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineTextBoxBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    get_isValid: function() { return this.verify() },
    verify: function() {
        var $v_0 = new Mscrm.ValidationResult(true, null),
            $v_1 = this.get_allowTrimValue() ? this.get_element().value.trim() : this.get_element().value;
        if (this.get_isDirty())
            if ($v_1.length > this.get_maxLength()) {
                $v_0.isValid = false;
                $v_0.errorText = String.format(window.LOCID_DEVERROR_TOO_LONG, this.get_maxLength())
            } else this.get_element().value = $v_1;
        var $v_2 = [$v_0];
        this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", $v_2);
        return $v_0.isValid
    },
    onChange: function($p0) {}
};
Mscrm.InlineTickerBehavior = function($p0) { Mscrm.InlineTickerBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineTickerBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function($p0) {
        this.$3_6 = $p0;
        return $p0
    },
    get_isValidProxy: function() {
        this.$3_6.get_editView().get_editElementWrapper()
            .trigger("state-validated", [new Mscrm.ValidationResult(true, null)]);
        return true
    },
    formatStringValue: function($p0) {}
};
Mscrm.InlineUrlBehavior = function($p0) { Mscrm.InlineUrlBehavior.initializeBase(this, [$p0]) };
Mscrm.InlineUrlBehavior.prototype = {
    $3_6: null,
    get_view: function() { return this.$3_6 },
    set_view: function($p0) {
        this.$3_6 = $p0;
        return $p0
    },
    get_isValidProxy: function() { return this.verify() },
    verify: function() {
        var $v_0 = new Mscrm.ValidationResult(this.isValid(), null);
        if ($v_0.isValid) {
            this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    showErrorMessage: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(false, $p0);
        this.$3_6.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    },
    formatStringValue: function($p0) {},
    saveOldValue: function() {},
    restoreOldValue: function() {},
    handleParseError: function() {}
};
Mscrm.InlineSubjectLookupUIBehavior = function($p0) {
    this.$$d_$88_5 = Function.createDelegate(this, this.$88_5);
    this.$$d_$8W_5 = Function.createDelegate(this, this.$8W_5);
    this.$G_5 = new Mscrm.InlineFlyOutDialog;
    Mscrm.InlineSubjectLookupUIBehavior.initializeBase(this, [$p0])
};
Mscrm.InlineSubjectLookupUIBehavior.getSubjectLookupData = function() {
    if (typeof _subjectLookupData !== "undefined" && !isNullOrEmptyString(_subjectLookupData)
    ) return _subjectLookupData;
    return null
};
Mscrm.InlineSubjectLookupUIBehavior.prototype = {
    $3_5: null,
    $1i_5: false,
    $2g_5: null,
    $f_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    setValue: function($p0) {
        var $v_0 = false;
        $v_0 = this.checkIfItemsChangedAndAdd($p0);
        var $v_1 = new Mscrm.FormInputControl.ResultEventArgs;
        $v_1.get_result().items = $p0;
        $v_0 && this.handleDataValueChangedEvent($v_1);
        this.raiseEvents($v_1, $v_0)
    },
    initializeLookupPresence: function() {},
    queryLookupPresence: function($p0) {},
    showSearchResults: function() {
        var $v_0 = Mscrm.InlineSubjectLookupUIBehavior.getSubjectLookupData(),
            $v_1 = this.get_element().id.substring(0, this.get_element().id.length - 2);
        setPerfMarkerTimestamp("StartSubjectLookupShowTimestamp");
        if (!IsNull($v_0)) {
            var $v_2 = $P_CRM.parseJSON($v_0);
            this.$8P_5($v_1, $v_2)
        } else this.Lookup(false, false, "", false);
        setPerfMarkerTimestamp("FinishSubjectLookupShowTimestamp")
    },
    selectInlineSubjectItem: function($p0, $p1) {
        var $v_0 = new LookupControlItem;
        $v_0.id = $p1;
        $v_0.type = "129";
        $v_0.name = $p0;
        $v_0.onclick = "openlui(new Sys.UI.DomEvent(event)); return false;";
        $v_0.displayClass = "ms-crm-Lookup-Item";
        $v_0.data = "";
        this.selectAndRaiseEvent($v_0)
    },
    $5K_5: function() {
        if (!IsNull(Mscrm.InlineSubjectLookupUIBehavior
            .getSubjectLookupData())) this.get_element().src = "/_imgs/dropdown_refresh.png";
        else this.get_element().src = "/_imgs/search_normal.gif";
        this.get_element().height = 20
    },
    setonImage: function() { this.$5K_5() },
    setoffImage: function() { this.$5K_5() },
    isEditable: function() { return false },
    lookupDownKeyEdit: function($p0) {
        this.showSearchResults();
        return true
    },
    lookupDownKey: function($p0, $p1) {
        this.showSearchResults();
        return true
    },
    focusEdit: function($p0) {
        this.toggleSwallowFocusEdit();
        var $v_0 = XUI.Html.CreateDomEvent("focus");
        XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
    },
    closeTreeDialog: function() {
        this.$1i_5 && this.$f_5.jstree("disable_hotkeys");
        this.$G_5.hide();
        this.exitEditing()
    },
    $8P_5: function($p0, $p1) {
        var $v_0 = $P_CRM($get($p0 + "_lookupTable")), $v_1 = $v_0.width() > 210 ? $v_0.width() - 1 : 210;
        this.$G_5.get_options().set_dialogClass("subjecttree-Dialog");
        this.$G_5.get_options().set_closeOnEscape(false);
        this.$G_5.get_options().set_modal(true);
        this.$G_5.get_options().set_hideWithClickOnOverlay(true);
        this.$G_5.get_options().set_showTitlePane(false);
        this.$G_5.get_options().set_showButtonPane(false);
        this.$G_5.get_options().set_showCloseButton(false);
        this.$G_5.get_options().set_draggable(false);
        this.$G_5.get_options().set_focusOnFirstTabbable(true);
        this.$G_5.get_options().set_applyAnchorClassChange(false);
        this.$G_5.get_options().set_height(0);
        this.$G_5.get_options().set_minHeight(20);
        this.$G_5.get_options().set_width($v_1);
        this.$G_5.set_position("bottom");
        this.$G_5.set_dialogLeft(0);
        this.$G_5.set_dialogTop(0);
        this.$G_5.set_shouldDisposeContent(false);
        if (!this.$1i_5) {
            this.$f_5 = $P_CRM($get($p0 + "_treediv"));
            this.$f_5.html("");
            this.$f_5.append(LOCID_JSTREE_LOADING);
            this.$G_5.setContent(this.$f_5);
            var $v_2 = this.get_rootControl(),
                $v_3 = $v_2.ownerDocument,
                $v_4 = $v_3.body.clientHeight,
                $v_5 = Mscrm.Utilities.getXYPos($v_3.documentElement, !Mscrm.Utilities.get_isLeftToRight()),
                $v_6 = $v_0.offset(),
                $v_7 = $v_6.top + $v_0.outerHeight(false),
                $v_8 = $v_4 - $v_5["y"] - $v_7 - 2;
            if ($v_8 < 250) {
                $v_8 = $v_8 - 22;
                this.$f_5.css("max-height", $v_8.toString() + "px")
            }
        }
        this.$G_5.show($v_0);
        if (!this.$1i_5)
            if (Mscrm.Utilities.compareGuids($p1.data[0].metadata
                .subjectid,
                "{00000000-0000-0000-0000-000000000000}")) {
                this.$f_5.html("");
                this.$f_5.append("<table><tr><td>&nbsp;</td></tr></table>")
            } else {
                subjectJstree(this.$f_5, $p1, $p0);
                this.$1i_5 = true
            }
        else this.$f_5.jstree("enable_hotkeys");
        this.$G_5.dialogChrome().focus();
        this.$G_5.dialogChrome().bind("keydown", this.$$d_$8W_5);
        if (this.$1i_5) {
            this.$f_5.jstree("dehover_node");
            this.$f_5.jstree("close_all", -1);
            this.$1i_5 = false
        }
        this.$2g_5 = this.$$d_$88_5;
        $addHandler(window, "resize", this.$2g_5)
    },
    $8W_5: function($p0) {
        if ($p0.which === 27) {
            $p0.preventDefault();
            $p0.stopPropagation();
            this.closeTreeDialog()
        }
    },
    $88_5: function($p0) { this.closeTreeDialog() },
    mruXYPosition: function() { return Mscrm.InlineLookupUtility.$4I(this.get_rootControl()) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$2g_5) && $removeHandler(window, "resize", this.$2g_5);
        !IsNull(this.$G_5) && this.$G_5.dispose();
        Mscrm.FormInputControl.LookupUIBehavior.prototype.dispose.call(this)
    }
};
Mscrm.QuickFormControlMode = function() {};
Mscrm.QuickFormControlMode.isValidMode = function(mode) {
    return mode === "Read" || mode === "Edit" || mode === "Create"
};
Mscrm.WellKnownQuickFormIds = function() {};
Mscrm.QuickFormBehavior = function(element) {
    this.$$d_$59_3 = Function.createDelegate(this, this.$59_3);
    this.$B_3 = new Sys.EventHandlerList;
    Mscrm.QuickFormBehavior.initializeBase(this, [element]);
    this.$5_3 = element;
    var $v_0 = $P_CRM(element);
    this.$Q_3 = $v_0.attr("data-uniqueid");
    this.$34_3 = $v_0.attr("data-formid");
    this.$3x_3 = $v_0.attr("data-qfrelname");
    this.$d_3 = $v_0.attr("data-qfattribute");
    this.$2f_3 = $v_0.attr("data-relatedentityname");
    this.$3G_3 = $v_0.attr("data-relatedentity-primaryfieldname");
    this.$1w_3 = Boolean.parse($v_0.attr("quickformdefaultvisibility"));
    var $v_1 = $v_0.attr("data-relationshiproleordinal");
    if (!isNullOrEmptyString($v_1))
        try {
            var $v_3 = Number.parseInvariant($v_1);
            if ($v_3 === 1 || $v_3 === 2) this.$3y_3 = $v_3
        } catch ($$e_4) {
        }
    var $v_2 = $v_0.attr("data-controlmode");
    this.$A_3 = Mscrm.QuickFormControlMode.isValidMode($v_2) ? $v_2 : "Read"
};
Mscrm.QuickFormBehavior.getBehaviorById = function(id) {
    return Mscrm.QuickFormBehavior.$2c[Mscrm.QuickFormBehavior.getQuickFormDomId(id)]
};
Mscrm.QuickFormBehavior.getQuickFormDomId = function(guid) {
    var $v_0 = new RegExp("-", "g");
    guid = guid.replace($v_0, "_");
    return guid
};
Mscrm.QuickFormBehavior.getAllQuickFormBehaviors = function() {
    var $v_0 = new Array(0), $v_1 = 0, $$dict_3 = Mscrm.QuickFormBehavior.$2c;
    for (var $$key_4 in $$dict_3) {
        var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0[$v_1] = $v_2.value;
        $v_1++
    }
    return $v_0
};
Mscrm.QuickFormBehavior.$87 = function($p0, $p1) {
    var $v_0 = $p0;
    $v_0.resetLayout()
};
Mscrm.QuickFormBehavior.prototype = {
    $d_3: null,
    $V_3: null,
    $Q_3: null,
    $3x_3: null,
    $34_3: null,
    $A_3: null,
    $2f_3: null,
    $3G_3: null,
    $3y_3: 0,
    $8_3: null,
    $W_3: null,
    $5_3: null,
    $1w_3: true,
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        Mscrm.QuickFormBehavior.$2c[this.$Q_3] = this;
        this.$4T_3();
        this.$5H_3();
        this.$4X_3();
        this.$4d_3()
    },
    get_visibility: function() { return this.$1w_3 },
    set_visibility: function(value) {
        if (this.$1w_3 === value) return value;
        this.$1w_3 = value;
        if (this.$1w_3) {
            var $v_0 = $P_CRM(this.$5_3);
            $v_0.show();
            this.$8G_3()
        } else $P_CRM(this.$5_3).hide();
        return value
    },
    $4d_3: function() {
        if (this.$A_3 === "Create") return;
        this.$6G_3()
    },
    $6G_3: function() {
        var $v_0 = this.$8_3.get_attributes().get(this.$3G_3);
        if (IsNull($v_0)) return;
        var $$t_9 = this;
        $v_0.get_controls().forEach(function($p1_0, $p1_1) {
            var $v_1 = $p1_0;
            if (!IsNull($v_1)) {
                var $v_2 = $P_CRM("#" + $v_1.get_editView().get_editElementId());
                if (!IsNull($v_2)) {
                    var $v_3 = $v_2.parents();
                    if (!IsNull($v_3)) {
                        var $v_4 = $v_3.first().prev();
                        if (!IsNull($v_4)) {
                            $v_4.addClass("ms-crm-CustomerCard-Name");
                            $v_4.empty();
                            $v_4.append($$t_9.$6Y_3($v_0));
                            var $v_5 = $v_4.parents("table").first();
                            if (!IsNull($v_5)) {
                                var $v_6 = $v_5.find("td").first();
                                $v_6.css("padding-left", "0px");
                                $v_6.css("padding-right", "0px");
                                $v_6.css("padding-top", "0px")
                            }
                        }
                    }
                }
            }
        })
    },
    $6Y_3: function($p0) {
        var $v_0 = $P_CRM("<a></a>");
        $v_0.attr("href", "#");
        $v_0.addClass("ms-crm-gridurl");
        $v_0.addClass("ms-CustomerCard-Name-Anchor");
        !IsNull($p0.get_value()) && $v_0.text($p0.get_value().toString());
        var $$t_3 = this;
        $v_0.click(function($p1_0) {
            openObjEtn($$t_3.$8_3.get_typeName(), $$t_3.$8_3.get_recordId());
            $p1_0.stopPropagation();
            $p1_0.preventDefault()
        });
        return $v_0
    },
    $4X_3: function() {
        if (this.$A_3 === "Create") return;
        this.$5b_3()
    },
    $5b_3: function() {
        if (this.$34_3 !== "707fc57b-c5e6-471b-a180-e37ed28a38e2") return;
        var $v_0 = this.$8_3.get_attributes().get("parentcustomerid");
        if (IsNull($v_0)) return;
        var $$t_7 = this;
        $v_0.get_controls().forEach(function($p1_0, $p1_1) {
            var $v_1 = $p1_0;
            if (!IsNull($v_1)) {
                var $v_2 = $P_CRM("#" + $v_1.get_editView().get_editElementId());
                if (!IsNull($v_2)) {
                    var $v_3 = $v_2.parents("div").first();
                    if (!IsNull($v_3)) {
                        var $v_4 = $v_3.parents("tr").first();
                        if (!IsNull($v_4))
                            if (IsNull($v_0.get_value())) $v_4.hide();
                            else $v_4.show()
                    }
                }
            }
        })
    },
    $8G_3: function() {
        if (this.$A_3 === "Create") {
            var $v_0 = $P_CRM(this.$5_3).find("div[" +
                Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                "]").first().attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName);
            this.setEditMode($v_0)
        }
    },
    $4T_3: function() {
        if (!isNullOrEmptyString(this.$d_3) && !IsNull(this.$W_3)) {
            this.$V_3 = this.$W_3.get_attributes().get(this.$d_3);
            !IsNull(this.$V_3) && this.$V_3.addOnChange(this.$$d_$59_3, false)
        }
    },
    $5H_3: function() {
        switch (this.$A_3) {
        case "Create":
            break;
        case "Edit":
        case "Read":
            this.$6Q_3("locked");
            break;
        default:
            break
        }
    },
    $6Q_3: function($p0) {
        if (!IsNull(this.$8_3)) {
            var $$t_7 = this;
            this.$8_3.get_attributes().forEach(function($p1_0, $p1_1) {
                var $v_0 = $p1_0;
                $v_0.get_controls().forEach(function($p2_0, $p2_1) {
                    var $v_1 = $p2_0;
                    if (!IsNull($v_1))
                        switch ($v_1.get_dataContext().get_controlMode()) {
                        case "alwaysedit":
                        case "normal":
                        case "locked":
                            $v_1.get_dataContext().setDefaultControlMode($p0);
                            $v_1.set_hideLockIcon(true);
                            break;
                        case "deactivated":
                            break;
                        default:
                            break
                        }
                })
            })
        }
    },
    setDefaultEmptyValuePlaceholderText: function(attributeName, text) {
        if (IsNull(this.$8_3)) return;
        var $v_0 = this.$8_3.get_attributes().get(attributeName);
        if (IsNull($v_0)) return;
        var $$t_7 = this;
        $v_0.get_controls().forEach(function($p1_0, $p1_1) {
            var $v_1 = $p1_0;
            if (IsNull($v_1)) return;
            var $v_2 = $v_1.get_dataContext();
            if (IsNull($v_2)) return;
            $v_2.setPropertyWithoutRaisingEvent("EmptyValuePlaceholder", text);
            $v_1.blur()
        })
    },
    setEditMode: function(attributeName) {
        var $v_0 = this.$8_3;
        if (IsNull(this.$8_3)) return;
        var $v_1 = $v_0.get_attributes().get(attributeName);
        if (IsNull($v_1)) return;
        var $v_2 = $v_1.get_controls().get();
        if (IsNull($v_2) || $v_2.length < 1) return;
        var $$t_4 = this;
        window.setTimeout(function() { $v_2[0].setFocus() }, 0)
    },
    get_uniqueId: function() { return this.$Q_3 },
    get_controlMode: function() { return this.$A_3 },
    get_relatedEntityLogicalName: function() { return this.$2f_3 },
    get_relatedEntityPrimaryFieldName: function() { return this.$3G_3 },
    get_relationshipName: function() { return this.$3x_3 },
    get_relationshipRoleOrdinal: function() { return this.$3y_3 },
    get_formDataEntityObject: function() { return this.$8_3 },
    set_formDataEntityObject: function(value) {
        if (IsNull(this.$8_3)) this.$8_3 = value;
        return value
    },
    get_parentFormDataEntity: function() { return this.$W_3 },
    set_parentFormDataEntity: function(value) {
        if (IsNull(this.$W_3)) this.$W_3 = value;
        return value
    },
    get_lookupAttributeName: function() { return this.$d_3 },
    get_formId: function() { return this.$34_3 },
    get_isPendingAssociationsNeeded: function() {
        if (!isNullOrEmptyString(this.$d_3) && !IsNull(this.$W_3)) return false;
        else return true
    },
    get_entityName: function() { return this.$8_3.get_typeName() },
    $59_3: function($p0) {
        if (this.$A_3 === "Create") return;
        if (!IsNull($p0)) {
            var $v_0 = $p0.getEventSource();
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getValue();
                if (!IsNull($v_1) && !IsNull($v_1.length) && $v_1.length === 1 && !IsNull($v_1[0])) {
                    var $v_2 = $v_1[0];
                    $v_2.typename === this.$2f_3 && this.refresh($v_2.id)
                }
            }
        }
    },
    add_successEvent: function(value) { this.$B_3.addHandler("SuccessEvent", value) },
    remove_successEvent: function(value) { this.$B_3.removeHandler("SuccessEvent", value) },
    add_failureEvent: function(value) { this.$B_3.addHandler("FailureEvent", value) },
    remove_failureEvent: function(value) { this.$B_3.removeHandler("FailureEvent", value) },
    fireSuccessEvent: function(entityData, command) {
        this.$4X_3();
        this.$4d_3();
        var $v_0 = this.$B_3.getHandler("SuccessEvent");
        !IsNull($v_0) && $v_0(this, new Mscrm.InlineEdit.QuickFormRefreshedEventsArgs(this.$Q_3, entityData, command))
    },
    fireFailureEvent: function(errorData, command) {
        var $v_0 = this.$B_3.getHandler("FailureEvent");
        !IsNull($v_0) && $v_0(this, new Mscrm.InlineEdit.QuickFormRefreshedEventsArgs(this.$Q_3, errorData, command))
    },
    save: function() {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        return Mscrm.InlineEditDataService.get_dataService().quickFormSaveData(this.$Q_3, false)
    },
    saveAsCompleted: function() {
        Mscrm.InlineEditUtilities.tryResetFocusOnActiveControl();
        return Mscrm.InlineEditDataService.get_dataService().quickFormSaveData(this.$Q_3, true)
    },
    buildXml: function() { return Mscrm.InlineEditDataService.get_dataService().BuildXml(this.$8_3) },
    validateForm: function(command) {
        return Mscrm.InlineEditDataService.get_dataService().validate(this.$8_3, command, false)
    },
    clear: function() {
        var $$t_0 = this;
        window.setTimeout(function() {
                Mscrm.InlineEditDataService.get_dataService().quickFormClearData($$t_0.$Q_3);
                $$t_0.$72_3()
            },
            10)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$V_3) && !this.$V_3.get_isDisposed()) {
            this.$V_3.removeOnChange(this.$$d_$59_3);
            this.$V_3 = null
        }
        this.$8_3 = null;
        this.$W_3 = null;
        var $v_0 = $P_CRM(this.$5_3);
        $v_0 && $v_0.unbind();
        this.$5_3 = null;
        Mscrm.Utilities.destroyObject(this.$B_3);
        delete Mscrm.QuickFormBehavior.$2c[this.$Q_3];
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $72_3: function() {
        var $$t_6 = this;
        this.$8_3.get_attributes().forEach(function($p1_0, $p1_1) {
            var $v_0 = $p1_0;
            $v_0.get_controls().forEach(function($p2_0, $p2_1) {
                var $v_1 = $p2_0;
                if (IsNull($v_1)) return;
                $v_1.clearValidation()
            })
        })
    },
    clearValidation: function(attribute) {
        if (IsNull(attribute)) return;
        var $$t_5 = this;
        attribute.addOnChange(function($p1_0) {
            var $v_0 = $$t_5.$8_3.get_attributes().get(attribute.getName());
            if (IsNull($v_0)) return;
            $v_0.get_controls().forEach(function($p2_0, $p2_1) {
                !IsNull($p2_0) && Mscrm.IInlineControlView.isInstanceOfType($p2_0) && $p2_0.clearValidation()
            })
        })
    },
    refresh: function(recordId) {
        if (isNullOrEmptyString(recordId) || recordId !== this.$8_3.get_recordId())
            if (this.$A_3 !== "Create") {
                Mscrm.InlineEditDataService.get_dataService().quickFormRefreshData(this.$Q_3, recordId);
                this.$5H_3()
            }
    },
    disableWarningsOnAllControls: function() {
        if (this.$A_3 === "Create" && !IsNull(this.$8_3)) {
            var $$t_6 = this;
            this.$8_3.get_attributes().forEach(function($p1_0, $p1_1) {
                var $v_0 = $p1_0;
                if (IsNull($v_0)) return;
                $v_0.get_controls().forEach(function($p2_0, $p2_1) {
                    var $v_1 = $p2_0;
                    if (IsNull($v_1)) return;
                    switch ($v_1.get_dataContext().get_attribute().get_attributeType()) {
                    case "bit":
                    case "ntext":
                    case "nvarchar":
                    case "picklist":
                    case "status":
                        $v_1.set_disableWarningsAndValidation(true);
                        break
                    }
                })
            })
        }
    },
    resetLayoutOnBoundControls: function(attributeName) {
        var $v_0 = this.$8_3.get_attributes().get(attributeName);
        $v_0.get_controls().forEach(Mscrm.QuickFormBehavior.$87)
    },
    resetAttributeValue: function(attributeName, value) {
        var $v_0 = this.$8_3.get_attributes().get(attributeName);
        $v_0.resetValue(value)
    },
    addOnRecordNameChanged: function(handler) { this.$8_3.addOnRecordNameChanged(handler, false) },
    addOnRecordIdChanged: function(handler) { this.$8_3.addOnRecordIdChanged(handler, false) },
    removeOnRecordIdChanged: function(handler) { this.$8_3.removeOnRecordIdChanged(handler) },
    removeOnRecordNameChanged: function(handler) { this.$8_3.removeOnRecordNameChanged(handler) },
    getEntityAttribute: function(attributeName) {
        var $v_0 = this.$8_3.get_attributes().get(attributeName);
        return $v_0.getWrapper()
    }
};
Mscrm.QuickFormCollectionBehavior = function(element) {
    this.$$d_$59_3 = Function.createDelegate(this, this.$59_3);
    this.$$d_$7y_3 = Function.createDelegate(this, this.$7y_3);
    this.$$d_$7z_3 = Function.createDelegate(this, this.$7z_3);
    this.$B_3 = new Sys.EventHandlerList;
    Mscrm.QuickFormCollectionBehavior.initializeBase(this, [element]);
    this.$5_3 = element;
    var $v_0 = $P_CRM(element);
    this.$Q_3 = $v_0.attr("data-uniqueid");
    this.$d_3 = $v_0.attr("data-qfattribute");
    this.$23_3 = $P_CRM.parseJSON($v_0.attr("data-qfchildids"));
    var $v_1 = $v_0.attr("data-controlmode");
    this.$A_3 = Mscrm.QuickFormControlMode.isValidMode($v_1) ? $v_1 : "Read"
};
Mscrm.QuickFormCollectionBehavior.getBehaviorById = function(id) { return Mscrm.QuickFormCollectionBehavior.$3E[id] };
Mscrm.QuickFormCollectionBehavior.prototype = {
    $d_3: null,
    $V_3: null,
    $Q_3: null,
    $A_3: null,
    $8_3: null,
    $W_3: null,
    $23_3: null,
    $5_3: null,
    $1a_3: null,
    $2w_3: null,
    add_successEvent: function(value) { this.$B_3.addHandler("SuccessEvent", value) },
    remove_successEvent: function(value) { this.$B_3.removeHandler("SuccessEvent", value) },
    add_failureEvent: function(value) { this.$B_3.addHandler("FailureEvent", value) },
    remove_failureEvent: function(value) { this.$B_3.removeHandler("FailureEvent", value) },
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        Mscrm.QuickFormCollectionBehavior.$3E[this.$Q_3] = this;
        this.$4T_3();
        this.$73_3();
        this.$5U_3()
    },
    get_uniqueId: function() { return this.$Q_3 },
    get_controlMode: function() { return this.$A_3 },
    get_formDataEntityObject: function() { return this.$8_3 },
    set_formDataEntityObject: function(value) {
        if (IsNull(this.$8_3)) this.$8_3 = value;
        return value
    },
    get_parentFormDataEntity: function() { return this.$W_3 },
    set_parentFormDataEntity: function(value) {
        if (IsNull(this.$W_3)) this.$W_3 = value;
        return value
    },
    get_lookupAttributeName: function() { return this.$d_3 },
    $5U_3: function() {
        var $v_0 = this.$2B_3();
        if (!IsNull($v_0)) {
            $v_0.add_successEvent(this.$$d_$7z_3);
            $v_0.add_failureEvent(this.$$d_$7y_3)
        }
    },
    $7z_3: function($p0, $p1) {
        var $v_0 = this.$B_3.getHandler("SuccessEvent");
        !IsNull($v_0) &&
            $v_0(this,
                new Mscrm.InlineEdit.QuickFormRefreshedEventsArgs(this.$1a_3, $p1.get_jsonData(), $p1.get_command()))
    },
    $7y_3: function($p0, $p1) {
        var $v_0 = this.$B_3.getHandler("FailureEvent");
        !IsNull($v_0) &&
            $v_0(this,
                new Mscrm.InlineEdit.QuickFormRefreshedEventsArgs(this.$1a_3, $p1.get_jsonData(), $p1.get_command()))
    },
    $73_3: function() {
        var $v_0 = null;
        if (this.$A_3 !== "Create" && !IsNull(this.$d_3)) {
            var $v_2 = this.$W_3.get_attributes().get(this.$d_3);
            if (!IsNull($v_2)) $v_0 = $v_2.get_value()
        }
        var $v_1 = true, $$dict_5 = this.$23_3;
        for (var $$key_6 in $$dict_5) {
            var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] },
                $v_4 = Mscrm.QuickFormBehavior.getBehaviorById($v_3.key);
            this.$5D_3($v_4, $v_0, $v_1);
            if ($v_1) this.$2w_3 = $v_4;
            $v_1 = false
        }
    },
    $4T_3: function() {
        if (this.$A_3 === "Create") return;
        if (!isNullOrEmptyString(this.$d_3) && !IsNull(this.$W_3)) {
            this.$V_3 = this.$W_3.get_attributes().get(this.$d_3);
            !IsNull(this.$V_3) && this.$V_3.addOnChange(this.$$d_$59_3, false)
        }
    },
    $59_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0.getEventSource();
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getValue();
                this.$3h_3(null);
                var $$dict_5 = this.$23_3;
                for (var $$key_6 in $$dict_5) {
                    var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] },
                        $v_3 = Mscrm.QuickFormBehavior.getBehaviorById($v_2.key);
                    this.$5D_3($v_3, $v_1, false)
                }
            }
        }
    },
    $5D_3: function($p0, $p1, $p2) {
        if (!IsNull($p1) && !IsNull($p1.length) && $p1.length === 1 && !IsNull($p1[0])) {
            var $v_0 = $p1[0];
            if ($v_0.typename === $p0.$2f_3) {
                this.$3h_3($p0);
                $p0.refresh($v_0.id);
                return
            }
        }
        if ($p2 && this.$A_3 === "Create") this.$3h_3($p0);
        else $p0.set_visibility(false)
    },
    $2B_3: function() {
        if (!IsNull(this.$1a_3)) return Mscrm.QuickFormBehavior.getBehaviorById(this.$1a_3);
        return null
    },
    $3h_3: function($p0) {
        if (!IsNull($p0) && $p0.$Q_3 === this.$1a_3) return;
        var $v_0 = this.$2B_3();
        if (!IsNull($v_0)) {
            $v_0.set_visibility(false);
            $v_0.remove_successEvent(this.$$d_$7z_3);
            $v_0.remove_failureEvent(this.$$d_$7y_3)
        }
        this.$1a_3 = !IsNull($p0) ? $p0.$Q_3 : null;
        $v_0 = this.$2B_3();
        if (!IsNull($v_0)) {
            $v_0.set_visibility(true);
            $v_0.add_successEvent(this.$$d_$7z_3);
            $v_0.add_failureEvent(this.$$d_$7y_3)
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.$2B_3();
        if (!IsNull($v_0))
            try {
                $v_0.remove_successEvent(this.$$d_$7z_3);
                $v_0.remove_failureEvent(this.$$d_$7y_3)
            } catch ($$e_1) {
            }
        if (!IsNull(this.$V_3) && !this.$V_3.get_isDisposed()) {
            this.$V_3.removeOnChange(this.$$d_$59_3);
            this.$V_3 = null
        }
        this.$8_3 = null;
        this.$W_3 = null;
        this.$2w_3 = null;
        Mscrm.Utilities.destroyObject(this.$23_3);
        this.$23_3 = null;
        var $v_1 = $P_CRM(this.$5_3);
        $v_1 && $v_1.unbind();
        this.$5_3 = null;
        Mscrm.Utilities.destroyObject(this.$B_3);
        delete Mscrm.QuickFormCollectionBehavior.$3E[this.$Q_3];
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    saveActiveQuickForm: function() {
        var $v_0 = this.$2B_3();
        return $v_0.save()
    },
    resetActiveQuickForm: function() {
        var $v_0 = this.$2B_3();
        $v_0.clear()
    },
    showDefaultQuickForm: function() { this.$3h_3(this.$2w_3) }
};
Mscrm.InlinePhoneNumberBehavior = function($p0) { Mscrm.InlinePhoneNumberBehavior.initializeBase(this, [$p0]) };
Mscrm.InlinePhoneNumberBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function($p0) {
        this.$3_5 = $p0;
        return $p0
    },
    get_isValid: function() { return this.verify() },
    get_isValidProxy: function() { return this.verify() },
    verify: function() {
        var $v_0 = new Mscrm.ValidationResult(true, null);
        if ($v_0.isValid) {
            this.$3_5.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0]);
            return true
        }
        return false
    },
    onChange: function($p0) { !this.verify() && Mscrm.Utilities.preventDefault($p0.rawEvent) }
};
Mscrm.InlineRelatedCasesLookupBehavior = function(element) {
    Mscrm.InlineRelatedCasesLookupBehavior.initializeBase(this, [element]);
    this.set_doNotSubmit(true)
};
Mscrm.InlineRelatedCasesLookupBehavior.prototype = {
    $3_5: null,
    get_view: function() { return this.$3_5 },
    set_view: function(value) {
        this.$3_5 = value;
        return value
    },
    get_incidentId: function() { return Xrm.Page.data.entity.getId() },
    showSearchResults: function() {
        this.set_defaultViewId("{FB30F6AF-CEA8-4320-A060-151350F1F0E7}");
        this.set_additionalParams(null);
        this.set_inlineResultsSorted(false);
        this.set_showInlineLookupHeader(true);
        this.set_inlineLookupHeaderText(window.LOCID_INLINELOOKUP_CASES_HEADER);
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("header_process_customer_i");
        if ($v_0) {
            var $v_1 = $v_0.get_typedDataValue();
            if ($v_1) {
                this.AddParam("queryapi", "CRMIncident.RollUpByParentCustomerId");
                this.AddParam("oId", $v_1[0].id);
                this.AddParam("oTypeName", $v_1[0].typename)
            } else if (!isNullOrEmptyString(XUI.Html.GetText($v_0.getLookupField())) && !$v_0.IsValid()) {
                Array.clear(this.get_searchRecords());
                Mscrm.FormInputControl.LookupUIBehavior.prototype.showInlineLookupMenu.call(this);
                return
            }
        }
        Mscrm.FormInputControl.LookupUIBehavior.prototype.showSearchResults.call(this)
    },
    showLookupDialog: function(item) {
        this.set_additionalParams(null);
        Mscrm.FormInputControl.LookupUIBehavior.prototype.showLookupDialog.call(this, item)
    },
    getLookupSearchText: function() {
        var $v_0 = this.Items(false, false, false, false, false);
        if (IsNull($v_0) || !$v_0.length)
            return Mscrm.FormInputControl.LookupUIBehavior.prototype.getLookupSearchText.call(this);
        else return ""
    },
    showAddNewButton: function() {
        if (isNullOrEmptyString(this.get_incidentId())) return true;
        return false
    },
    showResultsForUnresolved: function() {
        Mscrm.FormInputControl.LookupUIBehavior.prototype.showResultsForUnresolved.call(this);
        var $v_0 = this.Items(false, true, false, false, false);
        (IsNull($v_0) || !$v_0.length) && this.showSearchResults()
    },
    isMruEnabled: function() { return false },
    IsValid: function() { return Mscrm.InlineLookupUtility.$52(this, this.$3_5) },
    verify: function() { return Mscrm.InlineLookupUtility.$4R(this, this.$3_5) },
    showErrorMessage: function(message, iconPath) { Mscrm.InlineLookupUtility.$4L(message, iconPath, this.$3_5) },
    initializeLookupPresence: function() {},
    queryLookupPresence: function(spans) {}
};
Mscrm.InlinePartyListBehavior = function($p0) { Mscrm.InlinePartyListBehavior.initializeBase(this, [$p0]) };
Mscrm.InlinePartyListBehavior.prototype = {
    GetDataXml: function($p0) {
        var $v_0 = this.Items(false, true, false, false, false),
            $v_1 = isNullOrEmptyString($p0) ? this.get_element().id : $p0;
        return Mscrm.Utilities.partyListXml($v_1, $v_0)
    }
};
Mscrm.InlineDateTimeControlViewWrapper = function(control) {
    Mscrm.InlineDateTimeControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineDateTimeControlViewWrapper.prototype = {
    _control: null,
    get_dataContext: function() { return this._control.$0_1 },
    getShowTime: function() { return this._control.getShowTime() },
    setShowTime: function(showTime) { this._control.setShowTime(showTime) },
    setIsAllDay: function(isAllDay) { this._control.setIsAllDay(isAllDay) },
    getIsAllDay: function() { return this._control.getIsAllDay() },
    getAttribute: function() { return this._control.getAttribute() },
    getDisabled: function() { return this._control.getDisabled() },
    setDisabled: function(isDisabled) { this._control.setDisabled(isDisabled) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return false },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineEmailEngagementActionsControlViewWrapper = function(control) {
    Mscrm.InlineEmailEngagementActionsControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineEmailEngagementActionsControlViewWrapper
    .prototype = {
        _control: null,
        clearNotifications: function() { return this._control.clearNotifications() },
        setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
        addNotification: function(notification) { return this._control.addNotification(notification) },
        clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
        getControlType: function() { return this._control.getControlType() },
        getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
        setFocus: function() { this._control.setFocus() },
        getLabel: function() { return this._control.getLabel() },
        getName: function() { return this._control.getName() },
        getVisible: function() { return this._control.getVisible() },
        setLabel: function(label) { this._control.setLabel(label) },
        setVisible: function(visible) { this._control.setVisible(visible) }
    };
Mscrm.InlineIFrameControlViewWrapper = function(control) {
    Mscrm.InlineIFrameControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineIFrameControlViewWrapper.prototype = {
    _control: null,
    getInitialUrl: function() { return this._control.getInitialUrl() },
    getSrc: function() { return this._control.getSrc() },
    getObject: function() { return this._control.getObject() },
    setSrc: function(source) { this._control.setSrc(source) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineLookupControlViewWrapper = function(control) {
    Mscrm.InlineLookupControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineLookupControlViewWrapper.prototype = {
    _control: null,
    get_dataContext: function() { return this._control.$0_1 },
    addCustomView: function(viewId, entityLogicalName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        this._control.addCustomView(viewId, entityLogicalName, viewDisplayName, fetchXml, layoutXml, isDefault)
    },
    addCustomFilter: function(fetchXmlFilter, entityType) { this._control.addCustomFilter(fetchXmlFilter, entityType) },
    allowUserToDisableRelationshipFilter: function(allowFilterOff) {
        this._control.allowUserToDisableRelationshipFilter(allowFilterOff)
    },
    getDefaultView: function() { return this._control.getDefaultView() },
    setDefaultView: function(defaultViewId) { this._control.setDefaultView(defaultViewId) },
    addPreSearch: function(handler) { this._control.addPreSearch(handler) },
    removePreSearch: function(handler) { this._control.removePreSearch(handler) },
    setParameter: function(name, value) { this._control.setParameter(name, value) },
    getAttribute: function() { return this._control.getAttribute() },
    getDisabled: function() { return this._control.getDisabled() },
    setDisabled: function(isDisabled) { this._control.setDisabled(isDisabled) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineOptionSetControlViewWrapper = function(control) {
    Mscrm.InlineOptionSetControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineOptionSetControlViewWrapper.prototype = {
    _control: null,
    get_dataContext: function() { return this._control.$0_1 },
    addOption: function(optionSetItem, placement) { this._control.addOption(optionSetItem, placement) },
    clearOptions: function() { this._control.clearOptions() },
    getOptions: function() { return null },
    removeOption: function(value) { this._control.removeOption(value.toString()) },
    getAttribute: function() { return this._control.getAttribute() },
    getDisabled: function() { return this._control.getDisabled() },
    setDisabled: function(isDisabled) { this._control.setDisabled(isDisabled) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineSectionControlViewWrapper = function(control) {
    Mscrm.InlineSectionControlViewWrapper.initializeBase(this);
    this._control = control;
    this.controls = new Xrm.XrmControls;
    var $v_0 = this._control.controls, $$t_5 = this;
    $v_0.forEach(function($p1_0, $p1_1) {
        var $v_1 = Mscrm.XrmInlineControlFactory.createInstance($p1_0);
        control && $$t_5.controls.add($v_1)
    })
};
Mscrm.InlineSectionControlViewWrapper.wrap = function(control) {
    return IsNull(control) ? null : new Mscrm.InlineSectionControlViewWrapper(control)
};
Mscrm.InlineSectionControlViewWrapper.prototype = {
    _control: null,
    getParent: function() { return new Mscrm.InlineTabControlViewWrapper(this._control.getParent()) },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineSilverlightControlWrapper = function(control) {
    Mscrm.InlineSilverlightControlWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineSilverlightControlWrapper.prototype = {
    _control: null,
    getData: function() { return this._control.getData() },
    setData: function(data) { this._control.setData(data) },
    getSrc: function() { return this._control.getSrc() },
    getObject: function() { return this._control.getObject() },
    setSrc: function(source) { this._control.setSrc(source) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineSubGridControlViewWrapper = function(control) {
    Mscrm.InlineSubGridControlViewWrapper.initializeBase(this);
    this._control = control;
    this.$x_3 = $find(control.getName())
};
Mscrm.InlineSubGridControlViewWrapper.prototype = {
    _control: null,
    $x_3: null,
    addRecord: function() { this._control.addRecord() },
    exportToExcel: function() { this._control.exportToExcel() },
    openAssociatedGrid: function() {
        Mscrm.Grid.openAssociatedGridViewOnLiteGridStandard(Xrm.Internal.getEntityCode(this.$x_3.getEntityName()),
            this.$x_3)
    },
    refresh: function() { this._control.refresh() },
    getRelationshipName: function() { return this._control.getRelationshipName() },
    getRelationshipAttributeName: function() { return this._control.getRelationshipAttributeName() },
    getRelationshipRoleOrdinal: function() { return this._control.getRelationshipRoleOrdinal() },
    getRelationshipType: function() { return this._control.getRelationshipType() },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) },
    removeOnLoad: function(handler) { this.$x_3.removeOnLoad(handler) },
    getGrid: function() { return this.$x_3.getGrid() },
    getChart: function() { return this.$x_3.getChart() },
    getRelationship: function() {
        var $v_0 = new Xrm.XrmEntityRelationship;
        $v_0.name = this.getRelationshipName();
        $v_0.relationshipType = this.getRelationshipType();
        $v_0.roleType = this.getRelationshipRoleOrdinal();
        return $v_0
    },
    getViewSelector: function() { return this.$x_3.getViewSelector() },
    addOnLoad: function(handler) { this.$x_3.addOnLoad(handler) },
    getEntityName: function() { return this.$x_3.getEntityName() }
};
Mscrm.InlineTabControlViewWrapper = function(control) {
    Mscrm.InlineTabControlViewWrapper.initializeBase(this);
    this._control = control;
    this.sections = new Xrm.XrmTabSections;
    var $v_0 = control.sections, $$t_4 = this;
    $v_0.forEach(function($p1_0, $p1_1) { $$t_4.sections.add(new Mscrm.InlineSectionControlViewWrapper($p1_0)) })
};
Mscrm.InlineTabControlViewWrapper.prototype = {
    _control: null,
    addTabStateChange: function(handler) { this._control.addTabStateChange(handler) },
    setIsSubGrid: function(issubgrid) {},
    getDisplayState: function() { return this._control.getDisplayState() },
    getParent: function() { return this._control.getParent() },
    removeTabStateChange: function(handler) { this._control.removeTabStateChange(handler) },
    setDisplayState: function(state) { this._control.setDisplayState(state) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.InlineWebResourceControlViewWrapper = function(control) {
    Mscrm.InlineWebResourceControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineWebResourceControlViewWrapper.prototype = {
    _control: null,
    getSrc: function() { return this._control.getSrc() },
    getObject: function() { return this._control.getObject() },
    setSrc: function(source) { this._control.setSrc(source) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.SimpleInlineControlViewWrapper = function(control) {
    Mscrm.SimpleInlineControlViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.SimpleInlineControlViewWrapper.prototype = {
    _control: null,
    get_dataContext: function() { return this._control.$0_1 },
    getAttribute: function() { return this._control.getAttribute() },
    getDisabled: function() { return this._control.getDisabled() },
    setDisabled: function(isDisabled) { this._control.setDisabled(isDisabled) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) }
};
Mscrm.XrmInlineControlFactory = function() {};
Mscrm.XrmInlineControlFactory.createInstance = function(control) {
    if (IsNull(control)) return null;
    switch (control.getControlType()) {
    case "iframe":
        return new Mscrm.InlineIFrameControlViewWrapper(control);
    case "lookup":
        return new Mscrm.InlineLookupControlViewWrapper(control);
    case "notes":
    case "standard":
        if (control
            .get_formDataAttributeType() ===
            "datetime") return new Mscrm.InlineDateTimeControlViewWrapper(control);
        return new Mscrm.SimpleInlineControlViewWrapper(control);
    case "optionset":
        return new Mscrm.InlineOptionSetControlViewWrapper(control);
    case "subgrid":
        return new Mscrm.InlineSubGridControlViewWrapper(control);
    case "webresource":
        if (control.get_isSilverlightControl()) return new Mscrm.InlineSilverlightControlWrapper(control);
        return new Mscrm.InlineWebResourceControlViewWrapper(control);
    case "kbsearch":
        return new Mscrm.InlineSearchWidgetViewWrapper(control);
    case "emailrecipientactivitycontrol":
        return new Mscrm.InlineEmailRecipientActivityControlViewWrapper(control);
    case "emailengagementactionscontrol":
        return new Mscrm.InlineEmailEngagementActionsControlViewWrapper(control);
    default:
        return null
    }
};
Mscrm.XrmInlineControlFactory.createTabInstance = function(control) {
    return new Mscrm.InlineTabControlViewWrapper(control)
};
Mscrm.InlineSearchWidgetViewWrapper = function(control) {
    Mscrm.InlineSearchWidgetViewWrapper.initializeBase(this);
    this._control = control
};
Mscrm.InlineSearchWidgetViewWrapper.prototype = {
    _control: null,
    isKnowledgeInCrm: function() { return this._control.isKnowledgeInCrm() },
    addOnResultOpened: function(handler) { this._control.addOnResultOpened(handler) },
    addOnSelection: function(handler) { this._control.addOnSelection(handler) },
    clearSearch: function() { this._control.clearSearch() },
    getSearchQuery: function() { return this._control.getSearchQuery() },
    getSelectedResults: function() { return this._control.getSelectedResults() },
    removeOnResultOpened: function(handler) { this._control.removeOnResultOpened(handler) },
    removeOnSelection: function(handler) { this._control.removeOnSelection(handler) },
    setSearchQuery: function(value) { return this._control.setSearchQuery(value) },
    clearNotification: function(uniqueId) { return this._control.clearNotification(uniqueId) },
    clearNotifications: function() { return this._control.clearNotifications() },
    setNotification: function(message, uniqueId) { return this._control.setNotification(message, uniqueId) },
    addNotification: function(notification) { return this._control.addNotification(notification) },
    getControlType: function() { return this._control.getControlType() },
    getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this._control.getParent()) },
    setFocus: function() { this._control.setFocus() },
    getLabel: function() { return this._control.getLabel() },
    getName: function() { return this._control.getName() },
    getVisible: function() { return this._control.getVisible() },
    setLabel: function(label) { this._control.setLabel(label) },
    setVisible: function(visible) { this._control.setVisible(visible) },
    openSearchResult: function(resultNumber, mode) { return this._control.openSearchResult(resultNumber, mode) },
    getTotalResultCount: function() { return this._control.getTotalResultCount() },
    addOnPostSearch: function(handler) { this._control.addOnPostSearch(handler) },
    removeOnPostSearch: function(handler) { this._control.removeOnPostSearch(handler) },
    addOnPreSearch: function(handler) { this._control.addOnPreSearch(handler) },
    removeOnPreSearch: function(handler) { this._control.removeOnPreSearch(handler) }
};
Mscrm.InlineEmailRecipientActivityControlViewWrapper = function(control) {
    Mscrm.InlineEmailRecipientActivityControlViewWrapper.initializeBase(this);
    this.$a_3 = control
};
Mscrm.InlineEmailRecipientActivityControlViewWrapper
    .prototype = {
        $a_3: null,
        clearNotifications: function() { return this.$a_3.clearNotifications() },
        setNotification: function(message, uniqueId) { return this.$a_3.setNotification(message, uniqueId) },
        addNotification: function(notification) { return this.$a_3.addNotification(notification) },
        clearNotification: function(uniqueId) { return this.$a_3.clearNotification(uniqueId) },
        getControlType: function() { return this.$a_3.getControlType() },
        getParent: function() { return Mscrm.InlineSectionControlViewWrapper.wrap(this.$a_3.getParent()) },
        setFocus: function() { this.$a_3.setFocus() },
        getLabel: function() { return this.$a_3.getLabel() },
        getName: function() { return this.$a_3.getName() },
        getVisible: function() { return this.$a_3.getVisible() },
        setLabel: function(label) { this.$a_3.setLabel(label) },
        setVisible: function(visible) { this.$a_3.setVisible(visible) }
    };
Mscrm.ErrorDisplayContainerProviderFactory = function() {};
Mscrm.ErrorDisplayContainerProviderFactory.createFormErrorDisplayContainerProvider = function() {
    var $v_0 = new Mscrm.FormErrorDisplayContainerProvider;
    return $v_0
};
Mscrm.FlyoutDialogErrorDisplayContainerProvider = function(parentContainerId) {
    Mscrm.FlyoutDialogErrorDisplayContainerProvider.initializeBase(this);
    if (!IsNull(parentContainerId)) this.$3u_1 = parentContainerId
};
Mscrm.FlyoutDialogErrorDisplayContainerProvider
    .prototype = { $3u_1: null, getDisplayContainer: function(view) { return $P_CRM("#" + this.$3u_1) } };
Mscrm.ErrorDisplayContainerProviderBase = function() {};
Mscrm.ErrorDisplayContainerProviderBase.prototype = {
    getDisplayContainer: function(view) {
        if (Mscrm.SimpleInlineControlView.isInstanceOfType(view)) {
            var $v_0 = view, $v_1 = $v_0.get_chromeElement().attr("data-errorflyoutcontainer");
            if (!isNullOrEmptyString($v_1)) return $P_CRM("#" + $v_1)
        }
        return null
    }
};
Mscrm.FormErrorDisplayContainerProvider = function() { Mscrm.FormErrorDisplayContainerProvider.initializeBase(this) };
Mscrm.FormErrorDisplayContainerProvider.prototype = {
    getDisplayContainer: function($p0) {
        var $v_0 = Mscrm.ErrorDisplayContainerProviderBase.prototype.getDisplayContainer.call(this, $p0);
        if (!IsNull($v_0)) return $v_0;
        var $v_1 = $p0.get_controlId();
        if ($v_1.startsWith("header_")) return this.$6k_1();
        if ($v_1.startsWith("footer_")) return this.$6g_1();
        if ($v_1.indexOf("compositionLinkControl") >= 0) return this.$6i_1();
        return this.$6h_1()
    },
    $6k_1: function() { return $P_CRM("#formHeaderContainer") },
    $6g_1: function() { return $P_CRM("#mainContainer") },
    $6h_1: function() { return $P_CRM("#areaForm").children(":first-child") },
    $6i_1: function() { return $P_CRM("#tdAreas") }
};
Mscrm.MobileErrorDisplayContainerProvider = function() {
    Mscrm.MobileErrorDisplayContainerProvider.initializeBase(this)
};
Mscrm.MobileErrorDisplayContainerProvider.prototype = {
    getDisplayContainer: function($p0) {
        var $v_0 = Mscrm.ErrorDisplayContainerProviderBase.prototype.getDisplayContainer.call(this, $p0);
        if (!IsNull($v_0)) return $v_0;
        var $v_1 = $P_CRM("#" + $p0.get_controlId());
        return $v_1.siblings(".ms-crm-Mobile-Validation")
    }
};
Mscrm.DefaultErrorDisplayContainerProvider = function() {
    Mscrm.DefaultErrorDisplayContainerProvider.initializeBase(this)
};
Mscrm.DefaultErrorDisplayContainerProvider.prototype = {
    getDisplayContainer: function($p0) {
        var $v_0 = Mscrm.ErrorDisplayContainerProviderBase.prototype.getDisplayContainer.call(this, $p0);
        if (!IsNull($v_0)) return $v_0;
        return $P_CRM(window.document.body)
    }
};
Mscrm.DeferredInlineEditOnDemandInitializer = function() { this.$2H_0 = [] };
Mscrm.DeferredInlineEditOnDemandInitializer.get_instance = function() {
    if (!Mscrm.DeferredInlineEditOnDemandInitializer.$T)
        Mscrm.DeferredInlineEditOnDemandInitializer.$T = new Mscrm.DeferredInlineEditOnDemandInitializer;
    return Mscrm.DeferredInlineEditOnDemandInitializer.$T
};
Mscrm.DeferredInlineEditOnDemandInitializer.prototype = {
    addControl: function(control) { Array.add(this.$2H_0, control) },
    completeDeferredInitialization: function() {
        while (this.$2H_0.length) {
            var $v_0 = this.$2H_0[0];
            Array.removeAt(this.$2H_0, 0);
            Mscrm.Utilities.isMobileRefresh() && $v_0.get_chromeElement().attr("data-initializing", "1");
            $v_0.tryCompleteOnDemandInitialization();
            Mscrm.Utilities.isMobileRefresh() && $v_0.get_chromeElement().removeAttr("data-initializing")
        }
    }
};
Mscrm.DeferredQuickFormInlineEditInitializer = function(errorDisplayContainerProvider, entitiesMetadata) {
    Mscrm.DeferredQuickFormInlineEditInitializer.initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata])
};
Mscrm.DeferredQuickFormInlineEditInitializer.prototype = {
    get_name: function() { return "DeferredQuickFormInlineEditInitializer" },
    get_initializationBatchSize: function() { return 1 },
    collectInlineDomElements: function() {
        var $v_0 = Mscrm.QuickFormInlineEditDomHelper.instance();
        return !IsNull($v_0) ? $v_0.getDeferredQuickFormElements() : new Array(0)
    }
};
Mscrm.DesktopInlineEditInitializationManager = function() {
    Mscrm.DesktopInlineEditInitializationManager.initializeBase(this)
};
Mscrm.DesktopInlineEditInitializationManager.$77 = function() {
    var $v_0 = 0, $v_1 = new Array(0);
    $P_CRM("div[data-formstart]").each(function($p1_0, $p1_1) {
        $v_1[$v_0] = $p1_1;
        $v_0++;
        var $v_2 = $P_CRM($p1_1),
            $v_3 = $v_2.attr("data-fdeid"),
            $v_4 = $v_2.attr("data-qfrelname"),
            $v_5 = Mscrm.InlineEditUtilities.getLinkedDataObject($v_2),
            $v_6 = Mscrm.InlineEditUtilities.getEntityReference($v_5);
        Mscrm.InlineEditInitializationManager.createFormDataEntity($v_3, $v_6.Id, $v_6.TypeName, $v_4, $v_6.Name)
    });
    return $v_1
};
Mscrm.DesktopInlineEditInitializationManager.$7B = function() {
    var $v_0 = 0, $v_1 = new Array(0);
    $P_CRM("div[data-qfccontrolstart]").each(function($p1_0, $p1_1) { $v_1[$v_0++] = $p1_1 });
    return $v_1
};
Mscrm.DesktopInlineEditInitializationManager.prototype = {
    $3w_1: null,
    $3v_1: null,
    initializeForROForm: function(entitiesMetadata) {
        if (IsNull(entitiesMetadata)) return;
        var $v_0 = Mscrm.DesktopInlineEditInitializationManager.$77();
        this.$3w_1 = new Mscrm.QuickFormInitializer($v_0);
        var $v_1 = Mscrm.DesktopInlineEditInitializationManager.$7B();
        this.$3v_1 = new Mscrm.QuickFormCollectionInitializer($v_1);
        Mscrm.InlineEditInitializationManager.prototype.initializeForROForm.call(this, entitiesMetadata)
    },
    initializeControls: function() {
        if (Mscrm.PageManager.get_isUnloading()) return;
        Mscrm.InlineEditInitializationManager.registerUITabs();
        Mscrm.InlineEditInitializationManager.initializeNavigationBar();
        Mscrm.InlineEditInitializationManager.initializeFormSelector();
        Mscrm.InlineEditInitializationManager.prototype.initializeControls.call(this);
        var $$t_0 = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() {
                $$t_0.$3w_1.initializeQuickForm();
                $$t_0.$3v_1.initializeAllQuickFormCollections();
                $$t_0.fireEvent("InitializationCompleted", null)
            },
            0)
    }
};
Mscrm.DomElementInlineEditInitializer = function(errorDisplayContainerProvider,
    entitiesMetadata,
    domElements,
    enableLazyInitialization) {
    this.$3j_1 = new Array(0);
    Mscrm.DomElementInlineEditInitializer.initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata]);
    this.$3j_1 = domElements;
    this.$3k_1 = enableLazyInitialization
};
Mscrm.DomElementInlineEditInitializer.prototype = {
    collectInlineDomElements: function() { return this.$3j_1 },
    initializeSingleInlineEditControl: function(containerElement) {
        var $v_0 = Mscrm.InlineEditInitializerBase.prototype.initializeSingleInlineEditControl
            .call(this, containerElement);
        !this.$3k_1 && $v_0.initializeAndRenderEditView();
        return $v_0
    },
    get_initializationBatchSize: function() { return -1 },
    $3k_1: true
};
Mscrm.InitializationState = function() {};
Mscrm.InlineEditControlInitializersFactory = function() {};
Mscrm.InlineEditControlInitializersFactory.getInitializers = function(errorDisplayContainerProvider, entitiesMetadata) {
    if (Mscrm.Utilities.isMobileRefresh())
        return Mscrm.MobileInlineEditControlInitializersFactory
            .getInitializers(errorDisplayContainerProvider, entitiesMetadata);
    var $v_0 = [];
    Array.add($v_0, new Mscrm.ViewportInlineEditControlInitializer(errorDisplayContainerProvider, entitiesMetadata));
    Array
        .add($v_0, new Mscrm.NonViewportFormBodyInlineEditInitializer(errorDisplayContainerProvider, entitiesMetadata));
    Array.add($v_0, new Mscrm.DeferredQuickFormInlineEditInitializer(errorDisplayContainerProvider, entitiesMetadata));
    return $v_0
};
Mscrm.InlineEditControlInitializersFactory
    .createDomElementInitializer = function(errorDisplayerContainerProvider,
        entitiesMetadata,
        domElements,
        enableLazyInitialization) {
        var $v_0 = new Mscrm
            .DomElementInlineEditInitializer(errorDisplayerContainerProvider,
                entitiesMetadata,
                domElements,
                enableLazyInitialization);
        return $v_0
    };
Mscrm.InlineEditInitializationManager = function() {
    this.$$d_$75_0 = Function.createDelegate(this, this.$75_0);
    this.$B_0 = new Sys.EventHandlerList
};
Mscrm.InlineEditInitializationManager.get_instance = function() {
    if (!Mscrm.InlineEditInitializationManager.$T)
        if (Mscrm.Utilities.isMobileRefresh())
            Mscrm.InlineEditInitializationManager.$T = new Mscrm.MobileInlineEditInitializationManager;
        else Mscrm.InlineEditInitializationManager.$T = new Mscrm.DesktopInlineEditInitializationManager;
    return Mscrm.InlineEditInitializationManager.$T
};
Mscrm.InlineEditInitializationManager
    .createFormDataEntity = function(id, recordId, typeName, relationshipName, recordName) {
        var $v_0 = {
            id: id,
            recordId: recordId,
            typeName: typeName,
            relationshipName: relationshipName,
            recordName: recordName
        };
        Mscrm.CrmUIComponent.crmCreate(Mscrm.FormDataEntity, $v_0, null, null, null)
    };
Mscrm.InlineEditInitializationManager.registerUITabs = function() {
    var $v_0 = Xrm.Page.ui;
    if (IsNull($v_0.tabs)) $v_0.tabs = new Xrm.XrmTabs;
    if (!$v_0.tabs.getLength())
        for (var $v_1 = Mscrm.InlineEditInitializerUtility.$6j(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = new Mscrm.InlineTabControlView($v_3);
            $v_0.addTab($v_4)
        }
};
Mscrm.InlineEditInitializationManager.initializeNavigationBar = function() {
    var $v_0 = {};
    $v_0["formNavControl"] = "crmNavBar";
    var $v_1 = $create(Mscrm.FormUINavigationBar, null, null, $v_0, null);
    Xrm.Page.ui.navigation = $v_1.get_wrapper()
};
Mscrm.InlineEditInitializationManager.initializeFormSelector = function() {
    var $v_0 = $create(Mscrm.FormUIFormSelector, null, null, null, null);
    Xrm.Page.ui.formSelector = $v_0.getWrapper();
    Mscrm.OnLoadDeferredExecutor.queueCallback(function() { Mscrm.InlineEditInitializationManager.$78($v_0) }, 2)
};
Mscrm.InlineEditInitializationManager.$78 = function($p0) {
    if (!IsNull($p0.get_formSelector())) return;
    var $v_0 = $find("header_crmFormSelector");
    if (IsNull($v_0)) return;
    $p0.set_formSelector($v_0);
    var $v_1 = $v_0.get_formIds();
    if ($v_1)
        for (var $v_2 = $v_0
                     .get_formTitles(),
            $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++)
            $p0.get_items().add(new Mscrm.FormSelectorItemWrapper(new Mscrm.FormUIRuleForm($v_1[$v_3], $v_2[$v_3])))
};
Mscrm.InlineEditInitializationManager.prototype = {
    $38_0: null,
    _inlineEditInitializers: null,
    get_viewportInitializationState: function() { return this.$38_0 },
    set_viewportInitializationState: function(value) {
        this.$38_0 = value;
        return value
    },
    add_inlineEditPartialInitializationCompleted: function(value) {
        this.$B_0.addHandler("PartialInitializationCompleted", value)
    },
    remove_inlineEditPartialInitializationCompleted: function(value) {
        this.$B_0.removeHandler("PartialInitializationCompleted", value)
    },
    add_inlineEditInitializationCompleted: function(value) { this.$B_0.addHandler("InitializationCompleted", value) },
    remove_inlineEditInitializationCompleted: function(value) {
        this.$B_0.removeHandler("InitializationCompleted", value)
    },
    add_inlineEditViewportInitializationCompleted: function(value) {
        this.$B_0.addHandler("ViewportInitializationCompleted", value)
    },
    remove_inlineEditViewportInitializationCompleted: function(value) {
        this.$B_0.removeHandler("ViewportInitializationCompleted", value)
    },
    initializeForROForm: function(entitiesMetadata) {
        if (IsNull(entitiesMetadata)) return;
        var $v_0 = Mscrm.Utilities.isMobileRefresh()
            ? new Mscrm.MobileErrorDisplayContainerProvider
            : new Mscrm.FormErrorDisplayContainerProvider;
        this._inlineEditInitializers = Mscrm.InlineEditControlInitializersFactory
            .getInitializers($v_0, entitiesMetadata);
        this.initializeControls()
    },
    initializeControls: function() {
        if (Mscrm.PageManager.get_isUnloading()) return;
        for (var $v_0 = 0; $v_0 < this._inlineEditInitializers.length; $v_0++) {
            var $v_1 = this._inlineEditInitializers[$v_0], $v_2 = 0;
            do {
                Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$75_0, 0);
                $v_2 += $v_1.get_initializationBatchSize()
            } while ($v_2 < $v_1.get_numberOfDomElements());
            this.$7x_0($v_1.get_name())
        }
    },
    $7x_0: function($p0) {
        if (!isNullOrEmptyString($p0)) {
            var $$t_1 = this;
            Mscrm.OnLoadDeferredExecutor.queueCallback(function() {
                    Mscrm.Performance.PerformanceMarkerManager.get_instance()
                        .addMarker("Initialize Controls - " + $p0, 1)
                },
                0)
        }
    },
    $75_0: function() {
        if (Mscrm.PageManager.get_isUnloading()) return;
        if (this._inlineEditInitializers.length > 0) {
            var $v_0 = this._inlineEditInitializers[0], $v_1 = $v_0.initializeControlInChunks();
            $v_1 === "Completed" && Array.removeAt(this._inlineEditInitializers, 0)
        }
    },
    fireEvent: function(eventName, args) {
        var $v_0 = this.$B_0.getHandler(eventName);
        !IsNull($v_0) && $v_0(this, args)
    }
};
Mscrm.InlineEditInitializerBase = function(errorDisplayContainerProvider, entitiesMetadata) {
    this.$3l_0 = entitiesMetadata;
    this.$30_0 = errorDisplayContainerProvider
};
Mscrm.InlineEditInitializerBase.$81 = function($p0) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        var $v_1 = $p0[$v_0], $v_2, $v_3, $$t_5, $$t_6, $$t_7;
        if (!($$t_7 = Mscrm.InlineEditInitializerBase
            .$7H($v_1, $$t_5 = { val: $v_3 }, $$t_6 = { val: $v_2 }), $v_3 = $$t_5.val, $v_2 = $$t_6.val, $$t_7)) {
            $v_2.get_controls().add($v_1);
            $v_2.updateRequiredLevel(Mscrm.InlineEditInitializerUtility.$5q($v_3.get_requiredLevel()), false);
            $v_1.get_dataContext().set_requiredLevel($v_3.get_requiredLevel());
            $v_2.set_format($v_3.get_attributeFormat());
            isNullOrEmptyString($v_2.get_name()) && $v_2.set_name($v_3.get_logicalName());
            if (!Mscrm.Utilities.isMobileRefresh()) {
                IsNull(Xrm.Page.data.entity.attributes.getByName($v_2.get_name())) &&
                    Xrm.Page.data.entity.attributes.add($v_2.getWrapper());
                Xrm.Page.data.entity.attributes.getByName($v_2.get_name()).controls
                    .add(Mscrm.XrmInlineControlFactory.createInstance($v_1))
            }
            $v_1.postRegisterComponent()
        }
    }
};
Mscrm.InlineEditInitializerBase.$7G = function($p0, $p1) {
    return !IsNull($p1) && !isNullOrEmptyString($p0) && $p1[$p0] === "1"
};
Mscrm.InlineEditInitializerBase.$7H = function($p0, $p1, $p2) {
    $p2.val = null;
    $p1.val = null;
    if ($p0) {
        var $v_0 = $p0.get_dataContext();
        if ($v_0) {
            $p1.val = $v_0.$4_0;
            if ($p1.val) {
                $p2.val = $find($p1.val.get_dataAttributeId());
                return false
            }
        }
    }
    return true
};
Mscrm.InlineEditInitializerBase.prototype = {
    $3p_0: false,
    $5L_0: function() { if (!this.$19_0) this.$19_0 = this.collectInlineDomElements() },
    get_numberOfDomElements: function() {
        !this.$19_0 && this.$5L_0();
        return this.$19_0.length
    },
    get_name: function() { return null },
    initializeControlInChunks: function() {
        if (!this.$3p_0) {
            this.setStartPerformanceMarker();
            this.$3p_0 = true
        }
        this.$5L_0();
        Sys.Application.beginCreateComponents();
        var $v_0 = 0, $v_1 = new Array(0);
        while (this.$19_0.length > 0 &&
            ($v_0 < this.get_initializationBatchSize() || this.get_initializationBatchSize() === -1)) {
            var $v_3 = this.$19_0[0], $v_4 = $P_CRM($v_3).attr("data-initialized");
            if (isNullOrEmptyString($v_4)) {
                var $v_5 = this.initializeSingleInlineEditControl($v_3);
                if (!IsNull($v_5)) {
                    Array.add($v_1, $v_5);
                    Mscrm.InlineEditInitializerUtility.associateControlWithParentSection($v_3, $v_5)
                }
            }
            Array.removeAt(this.$19_0, 0);
            $v_0++
        }
        Sys.Application.endCreateComponents();
        Mscrm.InlineEditInitializerBase.$81($v_1);
        this.$82_0($v_1);
        var $v_2 = Mscrm.InlineEditInitializationManager.get_instance();
        $v_2.fireEvent("PartialInitializationCompleted", new Mscrm.InlineEditPartialInitializationEventArgs($v_1));
        if (!this.$19_0.length) {
            this.setFinishPerformanceMarker();
            return "Completed"
        }
        return "Executing"
    },
    get_initializationBatchSize: function() { return 5 },
    initializeSingleInlineEditControl: function(containerElement) {
        var $v_0 = $P_CRM(containerElement),
            $v_1 = $v_0.attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName),
            $v_2 = $v_0.attr("data-formid");
        if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString($v_2)) {
            $v_0.attr("data-initialized", "true");
            var $v_3 = this.$3l_0[$v_2], $v_4 = $v_3[$v_1], $v_5 = Mscrm.InlineEditUtilities.getLinkedDataObject($v_0);
            if (!IsNull($v_4) && !$P_CRM.isEmptyObject($v_5)) {
                var $v_6 = "normal", $v_7 = Mscrm.InlineControlFactory.checkIfComposite($v_0);
                if ($v_7)
                    $v_4.RequiredLevel = Mscrm.InlineEditInitializerUtility.$4t($v_0.attr("compositeRequiredLevel"));
                if ($v_1.startsWith("unbound_")) {
                    $v_6 = "alwaysedit";
                    if ($v_5["_entitydisabled"] === "1") $v_6 = "deactivated";
                    var $v_8 = Mscrm.InlineEditInitializerUtility
                            .initializeForDomElement($v_0, $v_4, $v_6, $v_5[$v_1], this.$30_0),
                        $v_9 = $find($v_8.get_dataContext().get_attribute().get_dataAttributeId());
                    $v_9.set_isVirtual(true);
                    return $v_8
                } else {
                    var $v_A = Mscrm.InlineEditUtilities.isControlDisabled($v_0.attr("id"), $v_5),
                        $v_B = $v_0.attr("data-disabled") === "1";
                    if ($v_A || $v_B) $v_6 = "locked";
                    else if ($v_5["_entitydisabled"] === "1") $v_6 = "deactivated";
                    var $v_C = $v_6,
                        $v_D = Mscrm.InlineEditInitializerBase.$7G($v_0.attr("id"), $v_5["_hiddencontrols"]);
                    if ($v_D) {
                        $v_4.RequiredLevel = 0;
                        $v_6 = "deactivated"
                    }
                    var $v_E = Mscrm.InlineEditInitializerUtility
                        .initializeForDomElement($v_0, $v_4, $v_6, $v_5[$v_1], this.$30_0);
                    if ($v_4.AttributeType === "state") {
                        var $v_F = $find($v_E.get_dataContext().get_attribute().get_dataAttributeId());
                        $v_F.set_submitModeValue("never")
                    }
                    $v_D && $v_E.get_dataContext().setDefaultControlMode($v_C);
                    return $v_E
                }
            }
        }
        return null
    },
    $82_0: function($p0) {
        var $v_0 = Xrm.Page.ui;
        if (IsNull($v_0.controls)) $v_0.controls = new Xrm.XrmControls;
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1];
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.get_controlId();
                !isNullOrEmptyString($v_3) && $v_0.addControl($v_2)
            }
        }
    },
    $2E_0: null,
    setStartPerformanceMarker: function() {
        if (!isNullOrEmptyString(this.get_name()) && IsNull(this.$2E_0)) {
            this.$2E_0 = new Mscrm.Performance.PerformanceStopwatch(this.get_name());
            this.$2E_0.start()
        }
    },
    setFinishPerformanceMarker: function() { !IsNull(this.$2E_0) && this.$2E_0.stop() },
    $19_0: null,
    $30_0: null,
    $3l_0: null
};
Mscrm.InlineEditPartialInitializationEventArgs = function(views) {
    Mscrm.InlineEditPartialInitializationEventArgs.initializeBase(this);
    this.$44_1 = views
};
Mscrm.InlineEditPartialInitializationEventArgs.prototype = { get_views: function() { return this.$44_1 }, $44_1: null };
Mscrm.MobileInlineEditInitializationManager = function() {
    Mscrm.MobileInlineEditInitializationManager.initializeBase(this)
};
Mscrm.MobileInlineEditInitializationManager.prototype = {
    initializeControls: function() {
        if (Mscrm.PageManager.get_isUnloading()) return;
        var $v_0 = this.get_$6O_1();
        Mscrm.InlineEditInitializationManager.prototype.initializeControls.call(this);
        var $$t_1 = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() {
                !IsNull($v_0) && $v_0.$16_1.setFocus();
                $$t_1.fireEvent("InitializationCompleted", null)
            },
            0)
    },
    get_$6O_1: function() {
        if (!IsNull(this._inlineEditInitializers))
            for (var $v_0 = 0;
                $v_0 < this._inlineEditInitializers.length;
                $v_0++
            )
                if (Mscrm.MobileFirstControlInlineEditControlInitializer
                    .isInstanceOfType(this._inlineEditInitializers[$v_0])) return this._inlineEditInitializers[$v_0];
        return null
    }
};
Mscrm.InlineEditInitializerUtility = function() {};
Mscrm.InlineEditInitializerUtility
    .initializeForDomElement = function(domElement,
        attributeMetadata,
        controlMode,
        initialValue,
        errorDisplayContainerProvider) {
        if (IsNull(domElement) || domElement.length !== 1) throw Error.argument("domElement");
        if (IsNull(attributeMetadata)) throw Error.argumentNull("attributeMetadata");
        try {
            var $v_0 = Mscrm.InlineControlFactory
                .createControl(domElement, attributeMetadata, initialValue, controlMode);
            if (!IsNull($v_0)) {
                if (Mscrm.SimpleInlineControlView.isInstanceOfType($v_0)) $v_0.$1I_2 = errorDisplayContainerProvider;
                $v_0.renderForRead()
            }
            return $v_0
        } catch ($v_1) {
            var $v_2 = String
                .format("inline control initialization failed for control : {0} : with controlMode : {1} : and exception details : \n{2}", attributeMetadata.LogicalName, controlMode, $v_1.message);
            catchError($v_2, window.location.href, 0, true);
            return null
        }
    };
Mscrm.InlineEditInitializerUtility.$4F = function() {
    var $v_0 = $get("areaForm"), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    while ($v_1.id !== "crmFormTabContainer") {
        var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
        if (IsNull($v_2) || $v_1.id === "crmNotifications") $v_1 = XUI.Html.DomUtils.GetNextSibling($v_1);
        else $v_1 = $v_2
    }
    return $v_1
};
Mscrm.InlineEditInitializerUtility.$6j = function() {
    var $v_0 = new Array(0), $v_1 = Mscrm.InlineEditInitializerUtility.$4F();
    if (!IsNull($v_1)) {
        var $v_2 = $P_CRM($v_1).children("div.ms-crm-InlineTab-Read");
        !IsNull($v_2) && Array.addRange($v_0, $v_2.get())
    }
    return $v_0
};
Mscrm.InlineEditInitializerUtility.$6s = function($p0) {
    var $v_0 = new Array(0), $v_1 = 0;
    !IsNull($p0) &&
        $P_CRM($p0).find("table.ms-crm-FormSection").each(function($p1_0, $p1_1) {
            var $v_2 = $P_CRM($p1_1),
                $v_3 = $v_2.closest("div[isquickform]"),
                $v_4 = $v_2.closest("div[flyoutviewportdomid]");
            if (!IsNull($v_3)) {
                var $v_5 = $v_3.attr("isquickform");
                if (!Mscrm.InternalUtilities._String
                    .isNullOrWhiteSpace($v_5) &&
                    !Boolean.parse($v_5)) if (!IsNull($v_4) && !$v_4.length) $v_0[$v_1++] = $p1_1
            }
        });
    return $v_0
};
Mscrm.InlineEditInitializerUtility.associateControlWithParentSection = function(control, controlView) {
    if (!IsNull(control)) {
        var $v_0 = Xrm.Page.ui;
        if (IsNull($v_0) || !$v_0.tabs.getLength()) {
            window.setTimeout(function() {
                    Mscrm.InlineEditInitializerUtility.associateControlWithParentSection(control, controlView)
                },
                100);
            return
        }
        var $v_1 = $P_CRM(control).parents("table.ms-crm-FormSection:first"),
            $v_2 = IsNull($v_1) ? "" : $v_1.attr("name");
        if (isNullOrEmptyString($v_2)) return;
        var $v_3 = $P_CRM(control).parents("div.ms-crm-InlineTab-Read:first"),
            $v_4 = IsNull($v_3) ? "" : $v_3.attr("name");
        if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_4)) {
            var $v_5 = $v_0.getTab($v_4);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.sections.get($v_2);
                if (!IsNull($v_6)) {
                    $v_6.controls.add(controlView);
                    controlView.set_parentSection($v_6);
                    Xrm.Page.ui.tabs.get($v_4).sections.get($v_2).controls
                        .add(Mscrm.XrmInlineControlFactory.createInstance(controlView))
                }
            }
        }
    }
};
Mscrm.InlineEditInitializerUtility.$4G = function($p0) {
    if (IsNull($p0)) return false;
    else if (IsNull($p0.style)) return true;
    else return $p0.style.display !== "none" && $p0.style.visibility !== "hidden"
};
Mscrm.InlineEditInitializerUtility.$5J = function($p0, $p1) { if (!IsNull($p0)) $p0.style.display = $p1 ? "" : "none" };
Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttributeIds = function(attributeIds) {
    if (IsNull(attributeIds)) return;
    for (var $v_0 = Mscrm.InlineEditDataService.get_formEntity().get_attributes(), $v_1 = 0;
        $v_1 < attributeIds.length;
        $v_1++) {
        var $v_2 = $v_0.get(attributeIds[$v_1]);
        !IsNull($v_2) && Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttribute($v_2)
    }
};
Mscrm.InlineEditInitializerUtility
    .initializeEditViewsForAttribute = function(attribute) { attribute.editViewControlInitializer() };
Mscrm.InlineEditInitializerUtility.collectInlineEditForFirstTab = function(inlineEditElements) {
    var $v_0 = Mscrm.InlineEditInitializerUtility.$4F();
    if (!IsNull($v_0)) {
        var $v_1 = $P_CRM("div[" +
            Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
            "][data-fdeid=PrimaryEntity]",
            $P_CRM(XUI.Html.DomUtils.GetFirstChild($v_0)));
        Array.addRange(inlineEditElements, $v_1.get())
    }
};
Mscrm.InlineEditInitializerUtility.$5q = function($p0) {
    switch ($p0) {
    case 0:
        return "none";
    case 1:
    case 2:
        return "required";
    case 3:
        return "recommended";
    default:
        return "none"
    }
};
Mscrm.InlineEditInitializerUtility.$4t = function($p0) {
    if (IsNull($p0)) return 0;
    switch ($p0.toLowerCase()) {
    case "required":
        return 2;
    case "recommended":
        return 3;
    case "none":
    default:
        return 0
    }
};
Mscrm
    .MobileFirstControlInlineEditControlInitializer =
    function(errorDisplayContainerProvider, entitiesMetadata, element) {
        Mscrm.MobileFirstControlInlineEditControlInitializer
            .initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata]);
        this.$w_1 = new Array(1);
        this.$w_1[0] = element
    };
Mscrm.MobileFirstControlInlineEditControlInitializer.prototype = {
    get_firstControl: function() { return this.$16_1 },
    get_name: function() { return "MobileFirstControlInlineEditControlInitializer" },
    get_initializationBatchSize: function() { return 1 },
    collectInlineDomElements: function() { return this.$w_1 },
    setStartPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setStartPerformanceMarker.call(this);
        setPerfMarkerTimestamp("StartMobileFirstControlTimestamp")
    },
    setFinishPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setFinishPerformanceMarker.call(this);
        setPerfMarkerTimestamp("FinishMobileFirstControlTimestamp")
    },
    initializeControlInChunks: function() {
        var $v_0 = Mscrm.InlineEditInitializerBase.prototype.initializeControlInChunks.call(this);
        if (!IsNull(this.$16_1)) {
            var $v_1 = this.$16_1.get_dataContext();
            if ($v_1.get_optimizeForMobileRendering()) this.$16_1.goToEditState();
            else this.$16_1.setFocus()
        }
        return $v_0
    },
    initializeSingleInlineEditControl: function(containerElement) {
        this.$16_1 = Mscrm.InlineEditInitializerBase.prototype.initializeSingleInlineEditControl
            .call(this, containerElement);
        return this.$16_1
    },
    $w_1: null,
    $16_1: null
};
Mscrm.MobileInlineEditControlInitializersFactory = function() {};
Mscrm.MobileInlineEditControlInitializersFactory
    .getInitializers = function(errorDisplayContainerProvider, entitiesMetadata) {
        var $v_0 = [], $v_1 = new Array(0);
        Mscrm.InlineEditInitializerUtility.collectInlineEditForFirstTab($v_1);
        if (!$v_1.length) return $v_0;
        var $v_2 = Mscrm.InlineEditDataService.isNew();
        Mscrm.MobileInlineEditControlInitializersFactory
            .$5V($v_0, $v_1, errorDisplayContainerProvider, entitiesMetadata, $v_2);
        Mscrm.MobileInlineEditControlInitializersFactory
            .$5a($v_0, $v_1, errorDisplayContainerProvider, entitiesMetadata, $v_2);
        $v_1.length > 0 &&
            Array.add($v_0,
                new Mscrm
                .MobileNonViewportInlineEditControlInitializer(errorDisplayContainerProvider, entitiesMetadata, $v_1));
        return $v_0
    };
Mscrm.MobileInlineEditControlInitializersFactory.$5a = function($p0, $p1, $p2, $p3, $p4) {
    if (!$p1.length) return;
    var $v_0 = $p4 ? 3 : 5, $v_1 = new Array(0);
    while ($p1.length > 0 && $v_0 > 0) {
        Array.add($v_1, $p1[0]);
        Array.removeAt($p1, 0);
        $v_0--
    }
    Array.add($p0, new Mscrm.MobileViewportInlineEditControlInitializer($p2, $p3, $v_1))
};
Mscrm.MobileInlineEditControlInitializersFactory.$5V = function($p0, $p1, $p2, $p3, $p4) {
    if (!$p4) return;
    Array.add($p0, new Mscrm.MobileFirstControlInlineEditControlInitializer($p2, $p3, $p1[0]));
    Array.removeAt($p1, 0)
};
Mscrm
    .MobileNonViewportInlineEditControlInitializer =
    function(errorDisplayContainerProvider, entitiesMetadata, elements) {
        Mscrm.MobileNonViewportInlineEditControlInitializer
            .initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata]);
        this.$w_2 = elements
    };
Mscrm.MobileNonViewportInlineEditControlInitializer
    .prototype = {
        get_initializationBatchSize: function() { return 2 },
        collectInlineDomElements: function() { return this.$w_2 },
        $w_2: null
    };
Mscrm.MobileViewportInlineEditControlInitializer = function(errorDisplayContainerProvider, entitiesMetadata, elements) {
    Mscrm.MobileViewportInlineEditControlInitializer
        .initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata]);
    this.$w_2 = elements
};
Mscrm.MobileViewportInlineEditControlInitializer
    .prototype = {
        get_initializationBatchSize: function() { return 5 },
        collectInlineDomElements: function() { return this.$w_2 },
        $w_2: null
    };
Mscrm.NonViewportFormBodyInlineEditInitializer = function(errorDisplayContainerProvider, entitiesMetadata) {
    Mscrm.NonViewportFormBodyInlineEditInitializer
        .initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata])
};
Mscrm.NonViewportFormBodyInlineEditInitializer.prototype = {
    get_name: function() { return "NonViewportFormBodyInlineEditInitializer" },
    collectInlineDomElements: function() {
        var $v_0 = new Array(0);
        Array.addRange($v_0,
            $P_CRM("div[" + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + "]",
                $P_CRM($get("refreshFormFooterContainer"))).get());
        var $v_1 = Mscrm.InlineEditInitializerUtility.$4F(), $v_2 = true, $$t_4 = this;
        XUI.Html.DomUtils.ForEachChild($v_1,
            function($p1_0) {
                if ($v_2) {
                    $v_2 = false;
                    return false
                }
                Array.addRange($v_0,
                    $P_CRM("div[" +
                        Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                        "][data-fdeid=PrimaryEntity]",
                        $P_CRM($p1_0)).get());
                return false
            });
        Array.addRange($v_0, Mscrm.QuickFormInlineEditDomHelper.instance().getOnLoadQuickFormElements());
        return $v_0
    },
    setStartPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setStartPerformanceMarker.call(this);
        setPerfMarkerTimestamp("StartInlineEditPass2Timestamp")
    },
    setFinishPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setFinishPerformanceMarker.call(this);
        setPerfMarkerTimestamp("FinishInlineEditPass2Timestamp")
    }
};
Mscrm.QuickFormCollectionInitializer = function(quickFormCollectionRoots) { this.$2d_0 = quickFormCollectionRoots };
Mscrm.QuickFormCollectionInitializer.prototype = {
    $2d_0: null,
    initializeAllQuickFormCollections: function() {
        Sys.Application.beginCreateComponents();
        var $$t_1 = this;
        Array.forEach(this.$2d_0, function($p1_0) { $$t_1.$7A_0($p1_0) });
        Sys.Application.endCreateComponents();
        Array.clear(this.$2d_0);
        this.$2d_0 = null
    },
    $7A_0: function($p0) {
        var $v_0 = $P_CRM($p0), $v_1 = $v_0.attr("data-fdeid"), $v_2 = $v_0.attr("data-parentfdeid"), $v_3 = {};
        $v_3["formDataEntityObject"] = $v_1;
        $v_3["parentFormDataEntity"] = $v_2;
        Mscrm.CrmUIComponent.crmCreate(Mscrm.QuickFormCollectionBehavior, null, null, $v_3, $p0)
    }
};
Mscrm.QuickFormInitializer = function(quickFormRoots) { this.$2e_0 = quickFormRoots };
Mscrm.QuickFormInitializer.prototype = {
    $2e_0: null,
    initializeQuickForm: function() {
        Sys.Application.beginCreateComponents();
        var $$t_6 = this;
        Array.forEach(this.$2e_0,
            function($p1_0) {
                var $v_0 = $p1_0,
                    $v_1 = $P_CRM($v_0),
                    $v_2 = $v_1.attr("data-fdeid"),
                    $v_3 = $v_1.attr("data-parentfdeid"),
                    $v_4 = {};
                $v_4["formDataEntityObject"] = $v_2;
                $v_4["parentFormDataEntity"] = $v_3;
                Mscrm.CrmUIComponent.crmCreate(Mscrm.QuickFormBehavior, null, null, $v_4, $v_0)
            });
        Sys.Application.endCreateComponents();
        Array.clear(this.$2e_0);
        this.$2e_0 = null
    }
};
Mscrm.QuickFormInlineEditDomHelper = function($p0) {
    this.$2b_0 = new Array(0);
    this.$2a_0 = new Array(0);
    this.$1p_0 = new Array(0);
    var $v_0 = this.$6m_0();
    this.$5l_0($v_0, $p0)
};
Mscrm.QuickFormInlineEditDomHelper.initialize = function(loadOrder) {
    if (Mscrm.Utilities.isMobileRefresh()) return;
    Mscrm.QuickFormInlineEditDomHelper.$T = new Mscrm.QuickFormInlineEditDomHelper(loadOrder)
};
Mscrm.QuickFormInlineEditDomHelper.instance = function() { return Mscrm.QuickFormInlineEditDomHelper.$T };
Mscrm.QuickFormInlineEditDomHelper.cleanup = function() {
    if (IsNull(Mscrm.QuickFormInlineEditDomHelper.$T)) return;
    Mscrm.QuickFormInlineEditDomHelper.$T.$2b_0 = null;
    Mscrm.QuickFormInlineEditDomHelper.$T.$1p_0 = null;
    Mscrm.QuickFormInlineEditDomHelper.$T.$2a_0 = null;
    Mscrm.QuickFormInlineEditDomHelper.$T = null
};
Mscrm.QuickFormInlineEditDomHelper.prototype = {
    $2b_0: null,
    $1p_0: null,
    $2a_0: null,
    getOnLoadQuickFormElements: function() { return this.$2b_0 },
    getDeferredQuickFormElements: function() { return this.$1p_0 },
    getOnDemandQuickFormElements: function() { return this.$2a_0 },
    $6m_0: function() {
        for (var $v_0 = $P_CRM("div[" +
                     Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                     "][data-fdeid!=PrimaryEntity]").get(),
            $v_1 = {},
            $$arr_2 = $v_0,
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4];
            if (!IsNull($v_2.getAttribute("data-formid"))) {
                var $v_3 = $v_2.getAttribute("data-formid").toString();
                if (isNullOrEmptyString($v_3)) continue;
                var $v_4 = null;
                if (!($v_3 in $v_1)) {
                    $v_4 = new Array(0);
                    $v_1[$v_3] = $v_4
                } else $v_4 = $v_1[$v_3];
                $v_4[$v_4.length] = $v_2
            }
        }
        return $v_1
    },
    $5l_0: function($p0, $p1) {
        var $$dict_4 = $p1;
        for (var $$key_5 in $$dict_4) {
            var $v_0 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_1 = $p0[$v_0.key];
            if (IsNull($v_1)) continue;
            delete $p0[$v_0.key];
            switch ($v_0.value) {
            case 0:
                Array.addRange(this.$2b_0, $v_1);
                break;
            case 1:
                Array.addRange(this.$1p_0, $v_1);
                break;
            case 2:
                Array.addRange(this.$2a_0, $v_1);
                break
            }
        }
        var $$dict_8 = $p0;
        for (var $$key_9 in $$dict_8) {
            var $v_2 = { key: $$key_9, value: $$dict_8[$$key_9] }, $v_3 = $v_2.value;
            if (IsNull($v_3)) continue;
            delete $p0[$v_2.key];
            Array.addRange(this.$1p_0, $v_3)
        }
    }
};
Mscrm.ViewportInlineEditControlInitializer = function(errorDisplayContainerProvider, entitiesMetadata) {
    Mscrm.ViewportInlineEditControlInitializer.initializeBase(this, [errorDisplayContainerProvider, entitiesMetadata])
};
Mscrm.ViewportInlineEditControlInitializer.prototype = {
    get_name: function() { return "ViewportInlineEditControlInitializer" },
    get_initializationBatchSize: function() { return 20 },
    collectInlineDomElements: function() {
        var $v_0 = new Array(0),
            $v_1 = $P_CRM("div[" + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + "]",
                $P_CRM($get("HeaderTilesWrapperLayoutElement")));
        Array.addRange($v_0, $v_1.get());
        var $v_2 = $P_CRM("div[" + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + "]",
            $P_CRM($get("formFooterContainer")));
        Array.addRange($v_0, $v_2.get());
        this.$5o_1($v_0);
        Mscrm.InlineEditInitializerUtility.collectInlineEditForFirstTab($v_0);
        return $v_0
    },
    setStartPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setStartPerformanceMarker.call(this);
        setPerfMarkerTimestamp("StartInlineEditPass1Timestamp")
    },
    setFinishPerformanceMarker: function() {
        Mscrm.InlineEditInitializerBase.prototype.setFinishPerformanceMarker.call(this);
        setPerfMarkerTimestamp("FinishInlineEditPass1Timestamp")
    },
    $5o_1: function($p0) {
        var $v_0 = $get("processControlContainer");
        if (!IsNull($v_0)) {
            var $v_2 = $P_CRM($v_0),
                $v_3 = $P_CRM($get("processStepsContainer")),
                $v_4 = $v_3.children(".processStepsContent:not(.hidden)"),
                $v_5 = $v_4.find("div[" +
                    Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                    "][data-fdeid=PrimaryEntity]"),
                $v_6 = $v_2.find(".processStepsContent.hidden .ms-crm-LinkControl-content div[" +
                    Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                    "][data-fdeid=PrimaryEntity]");
            Array.addRange($p0, $v_5.get());
            Array.addRange($p0, $v_6.get())
        }
        var $v_1 = $P_CRM(".hiddenControlContainer");
        if ($v_1.length > 0) {
            var $v_7 = "div[" +
                    Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName +
                    "][data-fdeid=PrimaryEntity]",
                $v_8 = $P_CRM($v_7, $v_1).get();
            Array.addRange($p0, $v_8)
        }
    },
    initializeControlInChunks: function() {
        var $v_0 = Mscrm.InlineEditInitializerBase.prototype.initializeControlInChunks.call(this);
        Mscrm.InlineEditInitializationManager.get_instance().$38_0 = $v_0;
        if ($v_0 === "Completed") {
            var $v_1 = Mscrm.InlineEditInitializationManager.get_instance();
            $v_1.fireEvent("ViewportInitializationCompleted", null)
        }
        return $v_0
    }
};
Mscrm.InlineEditControlBaseLayout = function(chromeElement, viewModel) {
    this.$$d_removeScrollClass = Function.createDelegate(this, this.removeScrollClass);
    this.$$d_addScrollClass = Function.createDelegate(this, this.addScrollClass);
    this.$$d_appendAndWrapValueElementMaskInternal = Function
        .createDelegate(this, this.appendAndWrapValueElementMaskInternal);
    Mscrm.InlineEditControlBaseLayout.initializeBase(this, [chromeElement]);
    this.$X_1 = viewModel;
    this.$z_1 = $P_CRM(String.format('<div class="{0}"></div>', "ms-crm-Inline-GradientMask"));
    this.$X_1.set_emptyValuePlaceholder(Mscrm.Utilities.isMobileRefresh() ? "" : "--")
};
Mscrm.InlineEditControlBaseLayout.prototype = {
    $2y_1: null,
    $z_1: null,
    $X_1: null,
    $P_1: null,
    $1T_1: null,
    $40_1: false,
    $3r_1: true,
    get_editIconHtml: function() {
        if (isNullOrEmptyString(this.$2y_1)) {
            var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(this.get_editIconPath()));
            this.$2y_1 = String.format('<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>',
                "ms-crm-Inline-EditIcon",
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source),
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass))
        }
        return this.$2y_1
    },
    get_editIconPath: function() { return "/_imgs/inlineedit/inline_edit_icon.png" },
    get_showGradientMask: function() {
        if (!Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled() &&
            !Mscrm.Utilities.isMobileRefresh()) return true;
        return false
    },
    get_checkAdjustFocusElement: function() {
        if (this.$X_1.get_controlMode() === "alwaysedit") return false;
        return true
    },
    get_showEditIcon: function() { return this.$40_1 },
    set_showEditIcon: function(value) {
        this.$40_1 = value;
        return value
    },
    get_isRefreshForm: function() { return this.$3r_1 },
    set_isRefreshForm: function(value) {
        this.$3r_1 = value;
        return value
    },
    get_viewModel: function() { return this.$X_1 },
    get_labelElementId: function() { return this.get_chromeElementId() + "_c" },
    get_valueElementMaskElement: function() { return this.$z_1 },
    $45_1: function() {
        var $v_0 = this.get_labelElement().children("span");
        if (!IsNull($v_0) && $v_0.length > 0) {
            var $v_1 = $P_CRM(String.format(".{0}", "ms-crm-Inline-GradientMask"), this.get_labelElement());
            !IsNull($v_1) && this.get_showGradientMask() && $v_1.show()
        }
    },
    adjustFocusElement: function() {
        var $v_0 = $P_CRM(document.activeElement);
        this.get_checkAdjustFocusElement() && this.isElementInChrome($v_0) && this.get_chromeElement().focus()
    },
    resetForRead: function() {
        if (!this.get_labelElementExists()) return;
        this.$45_1()
    },
    resetForEdit: function() {},
    get_$2D_1: function() {
        if ((IsNull(this
                    .$1T_1) ||
                !this.$1T_1.length) &&
            this.get_labelElementExists()) this.$1T_1 = this.get_labelElement().children(this.get_$86_1());
        return this.$1T_1
    },
    get_$86_1: function() {
        return String.format("img.{0}, img.{1}", "ms-crm-Inline-RequiredLevel", "ms-crm-Inline-RecommendedLevel")
    },
    $8J_1: function($p0, $p1, $p2, $p3) {
        if (this.get_labelElementExists()) {
            if (!this.$51_1() && !$p3) return;
            if (!this.$51_1()) {
                this.$1T_1 = $P_CRM(String.format('<img src="{0}" class="{1}" alt="{2}"/>', $p0, $p1, $p2));
                this.get_labelElement().append(this.$1T_1)
            } else {
                if (!$p3) {
                    this.get_$2D_1().remove();
                    this.$1T_1 = null;
                    return
                }
                this.get_$2D_1().attr("src", $p0);
                this.get_$2D_1().attr("class", $p1);
                this.get_$2D_1().attr("alt", $p2)
            }
        }
    },
    $51_1: function() { return !IsNull(this.get_$2D_1()) && this.get_$2D_1().length === 1 },
    setRequiredOrRecommendedLevel: function(level) {
        if (this.get_labelElementExists()) {
            var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = true;
            switch (level) {
            case "recommended":
                $v_0 = window.LOCID_FORM_RECOMMENDED_ALT;
                $v_1 = "/_imgs/frm_recommended.gif";
                $v_2 = "ms-crm-Inline-RecommendedLevel";
                break;
            case "required":
                $v_0 = window.LOCID_FORM_REQUIRED_ALT;
                $v_1 = "/_imgs/frm_required.gif";
                $v_2 = "ms-crm-Inline-RequiredLevel";
                break;
            case "none":
                $v_3 = false;
                break;
            default:
                return
            }
            this.$8J_1($v_1, $v_2, $v_0, $v_3);
            $v_3 && this.$45_1()
        }
    },
    get_labelElement: function() {
        if (IsNull(this.$P_1)) {
            var $v_0 = String.format("#{0} .{1}", this.get_labelElementId(), "ms-crm-InlineEditLabel");
            this.$P_1 = $P_CRM($v_0)
        }
        return this.$P_1
    },
    get_iconElement: function() { return $P_CRM() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_labelElementExists: function() {
        return !IsNull(this.get_labelElement()) && this.get_labelElement().length === 1
    },
    renderForRead: function() {
        this.$5E_1();
        if (this.get_labelElementExists()) {
            var $$t_0 = this;
            Mscrm.OnLoadDeferredExecutor.queueCallback(function() { $$t_0.$45_1() }, 2)
        }
    },
    renderForEdit: function() { this.$5E_1() },
    updateTooltip: function(tooltip) { this.get_chromeElement().attr("title", tooltip) },
    appendAndWrapValueElementMask: function() {
        this.get_isRefreshForm() &&
            Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_appendAndWrapValueElementMaskInternal, 2)
    },
    appendAndWrapValueElementMaskInternal: function() {
        this.get_showGradientMask() && this.get_valueElement().children("span").first().append(this.$z_1);
        if (this.get_showEditIcon()) this.get_valueElement()[0].innerHTML += this.get_editIconHtml()
    },
    addScrollClass: function(eventObject) {
        var $v_0 = this.get_chromeElement().parents("div");
        this.$X_1.get_controlMode() === "normal" && $v_0.addClass("noScroll")
    },
    removeScrollClass: function(eventObject) {
        var $v_0 = this.get_chromeElement().parents("div");
        this.$X_1.get_controlMode() === "normal" && $v_0.removeClass("noScroll")
    },
    $5E_1: function() {
        Mscrm.InternalUtilities.Utilities.isHighContrastEnabled() && this.get_chromeElement().addClass("highContrast")
    },
    isElementInLabel: function(targetElement) {
        if (!this.get_labelElementExists()) return false;
        var $v_0 = targetElement.get(0);
        if ($v_0 === this.get_labelElement().get(0)) return true;
        for (var $v_1 = this.get_labelElement()
                     .children(),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) if ($v_0 === $v_1.get($v_2)) return true;
        return false
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$z_1)) {
            this.$z_1.empty().remove();
            this.$z_1 = null
        }
        if (!IsNull(this.$P_1)) {
            this.$P_1.empty().remove();
            this.$P_1 = null
        }
        this.$X_1 = null;
        Mscrm.BaseLayout.prototype.dispose.call(this)
    }
};
Mscrm.CheckBoxLayout = function($p0, $p1) { Mscrm.CheckBoxLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.CheckBoxLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditCheckBoxChromeBehavior }
};
Mscrm.EmailBodyLayout = function($p0, $p1) { Mscrm.EmailBodyLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.EmailBodyLayout.prototype = { get_showGradientMask: function() { return false } };
Mscrm.FlyOutDialogLayout = function($p0, $p1) { Mscrm.FlyOutDialogLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.FlyOutDialogLayout.prototype = { get_checkAdjustFocusElement: function() { return false } };
Mscrm.FlyOutDialogLookupLayout = function($p0, $p1) { Mscrm.FlyOutDialogLookupLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.FlyOutDialogLookupLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditLookupChromeBehavior }
};
Mscrm.FlyOutDialogTextAreaLayout = function($p0, $p1) {
    Mscrm.FlyOutDialogTextAreaLayout.initializeBase(this, [$p0, $p1])
};
Mscrm.FlyOutDialogTextAreaLayout.prototype = {
    $y_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$y_3 = null;
        Mscrm.InlineEditControlBaseLayout.prototype.dispose.call(this)
    },
    renderForEdit: function() { this.$3N_3() },
    $3N_3: function() {
        var $v_0 = 12;
        this.get_$2t_3().width(this.get_editElementWrapper().width() - $v_0)
    },
    get_$2t_3: function() {
        if (IsNull(this.$y_3)) this.$y_3 = Mscrm.TextAreaHelper.findTextArea(this.get_editElementWrapper());
        return this.$y_3
    },
    resetForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.resetForEdit.call(this);
        this.$3N_3()
    }
};
Mscrm.HeaderTileLayout = function($p0, $p1) { Mscrm.HeaderTileLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.HeaderTileLayout.prototype = {
    $1s_2: null,
    get_headerTileElement: function() {
        if (IsNull(this.$1s_2)) this.$1s_2 = this.get_chromeElement().parents(".ms-crm-HeaderTileElement");
        return this.$1s_2
    },
    get_chromeBehaviorType: function() { return Mscrm.HeaderTileChromeBehavior },
    renderForRead: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForRead.call(this);
        this.get_labelElement().addClass("ms-crm-HeaderTileLabel").attr("title", this.get_labelElement().text())
    },
    renderForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForEdit.call(this);
        this.get_editElementWrapper().addClass("ms-crm-HeaderTile")
    },
    isElementInChrome: function($p0) { return this.$7F_2($p0) || this.$7N_2($p0) },
    $7N_2: function($p0) { return $p0.get(0) === this.get_headerTileElement().get(0) },
    $7F_2: function($p0) {
        var $v_0 = String.format(".{0}", "ms-crm-HeaderTileElement"), $v_1 = $p0.parents($v_0);
        return $v_1.length > 0 && $v_1.first().get(0) === this.get_headerTileElement().get(0)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$1s_2.empty().remove();
        this.$1s_2 = null;
        Mscrm.InlineEditControlBaseLayout.prototype.dispose.call(this)
    }
};
Mscrm.HeaderTileDateTimeLayout = function($p0, $p1) { Mscrm.HeaderTileDateTimeLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.HeaderTileLookupLayout = function($p0, $p1) {
    Mscrm.HeaderTileLookupLayout.initializeBase(this, [$p0, $p1]);
    this.set_showEditIcon(true)
};
Mscrm.HeaderTileLookupLayout.prototype = {
    get_editIconPath: function() { return "/_imgs/search_normal.gif" },
    get_editIconHtml: function() {
        return Mscrm.InlineLookupUtility.$47(this.get_editIconPath(),
            '<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>',
            "ms-crm-InlineLookupEdit ms-crm-EditLookup-Image")
    },
    get_chromeBehaviorType: function() { return Mscrm.HeaderTileLookupChromeBehavior },
    updateTooltip: function($p0) {}
};
Mscrm.HeaderTileOptionSetLayout = function($p0, $p1) {
    Mscrm.HeaderTileOptionSetLayout.initializeBase(this, [$p0, $p1])
};
Mscrm.HeaderTileOptionSetLayout.prototype = {
    renderForEdit: function() {
        Mscrm.HeaderTileLayout.prototype.renderForEdit.call(this);
        this.get_editElementWrapper().bind("state-edit", this.$$d_addScrollClass);
        this.get_editElementWrapper().bind("state-read", this.$$d_removeScrollClass)
    },
    get_checkAdjustFocusElement: function() { return true }
};
Mscrm.HeaderTileRollupLayout = function($p0, $p1) {
    Mscrm.HeaderTileRollupLayout.initializeBase(this, [$p0, $p1]);
    this.set_showEditIcon(true)
};
Mscrm.HeaderTileRollupLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.HeaderTileRollupChromeBehavior },
    get_editIconPath: function() {
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) return "/_imgs/sfa/refresh_high_contrast_16.png";
        else return "/_imgs/sfa/rollup_refresh.png"
    },
    get_editIconHtml: function() {
        return Mscrm.InlineRollupUtility.$5C(this.get_editIconPath(),
            '<div class="rollup recalculate"><a class="rolluprefreshPostsLink" href="#"><img src="{0}" class="{1}" title="{2}" id="refreshIcon"/></a></div>')
    },
    appendAndWrapValueElementMaskInternal: function() {
        var $v_0 = this.get_valueElement().children("span");
        if (window.LOCID_UI_DIR === "RTL") $v_0.first().append(this.get_$3Q_3());
        else $v_0.first().prepend(this.get_$3Q_3());
        this.get_showEditIcon() && $v_0.first().append(this.get_$4J_3());
        this.get_showGradientMask() && $v_0.first().append(this.$z_1)
    },
    get_$3Q_3: function() {
        if (IsNull(this.$1G_3))
            this.$1G_3 = $P_CRM("<span></span>").addClass("calculateImage")
                .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/sfa/recalculate_16.png"))).attr("alt", ""));
        return this.$1G_3
    },
    get_$4J_3: function() {
        if (IsNull(this.$1S_3)) this.$1S_3 = $P_CRM(this.get_editIconHtml());
        return this.$1S_3
    },
    $1S_3: null,
    $1G_3: null
};
Mscrm.HeaderTileToggleLayout = function($p0, $p1) { Mscrm.HeaderTileToggleLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.HeaderTileToggleLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.HeaderTileToggleChromeBehavior }
};
Mscrm.LayoutFactory = function() {};
Mscrm.LayoutFactory.createLayout = function(containerElement, viewModel) {
    var $v_0 = null;
    if (!IsNull(containerElement) && !IsNull(viewModel)) {
        var $v_1 = Mscrm.LayoutFactory.parseLayout(containerElement);
        switch ($v_1) {
        case 0:
            $v_0 = Mscrm.LayoutFactory.$4a(containerElement, viewModel);
            break;
        case 1:
            $v_0 = Mscrm.LayoutFactory.$5s(containerElement, viewModel);
            break;
        case 2:
            $v_0 = Mscrm.LayoutFactory.$62(containerElement, viewModel);
            break;
        case 3:
            $v_0 = Mscrm.LayoutFactory.$6C(containerElement, viewModel);
            break;
        case 4:
            $v_0 = Mscrm.LayoutFactory.$61(containerElement, viewModel);
            break;
        default:
            break
        }
    }
    return $v_0
};
Mscrm.LayoutFactory.$61 = function($p0, $p1) {
    var $v_0;
    if (Mscrm.LayoutFactory.$3d($p1)) $v_0 = new Mscrm.FlyOutDialogLookupLayout($p0, $p1);
    else if (Mscrm.InlineTextAreaControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.FlyOutDialogTextAreaLayout($p0, $p1);
    else $v_0 = new Mscrm.FlyOutDialogLayout($p0, $p1);
    return $v_0
};
Mscrm.LayoutFactory.$3d = function($p0) {
    if (Mscrm.InlineLookupControlViewModel.isInstanceOfType($p0) ||
        Mscrm.InlineSubjectLookupControlViewModel.isInstanceOfType($p0) ||
        Mscrm.InlineTransactionCurrencyLookupControlViewModel.isInstanceOfType($p0) ||
        Mscrm.InlineRelatedCasesLookupControlViewModel.isInstanceOfType($p0)) return true;
    else return false
};
Mscrm.LayoutFactory.$5s = function($p0, $p1) {
    var $v_0;
    if (Mscrm.LayoutFactory.$3d($p1)) $v_0 = new Mscrm.SalesProcessLookupLayout($p0, $p1);
    else if (Mscrm.InlineTextAreaControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.SalesProcessTextAreaLayout($p0, $p1);
    else if (Mscrm.InlineToggleControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.SalesProcessToggleLayout($p0, $p1);
    else if (Mscrm.InlineOptionSetControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.SalesProcessOptionSetLayout($p0, $p1);
    else $v_0 = new Mscrm.SalesProcessLayout($p0, $p1);
    return $v_0
};
Mscrm.LayoutFactory.$62 = function($p0, $p1) {
    var $v_0;
    if (Mscrm.LayoutFactory.$3d($p1)) $v_0 = new Mscrm.HeaderTileLookupLayout($p0, $p1);
    else if ($p1.get_attribute()
        .get_sourceType() ===
        2 &&
        !Mscrm.Utilities.isMobileRefresh()) $v_0 = new Mscrm.HeaderTileRollupLayout($p0, $p1);
    else if (Mscrm.InlineOptionSetControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.HeaderTileOptionSetLayout($p0, $p1);
    else if (Mscrm.InlineDateTimeControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.HeaderTileDateTimeLayout($p0, $p1);
    else if (Mscrm.InlineToggleControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.HeaderTileToggleLayout($p0, $p1);
    else $v_0 = new Mscrm.HeaderTileLayout($p0, $p1);
    return $v_0
};
Mscrm.LayoutFactory.$4a = function($p0, $p1) {
    var $v_0;
    if (Mscrm.LayoutFactory.$3d($p1)) $v_0 = new Mscrm.LookupLayout($p0, $p1);
    else if (Mscrm.InlineCheckBoxControlViewModel.isInstanceOfType($p1)) $v_0 = new Mscrm.CheckBoxLayout($p0, $p1);
    else if (Mscrm.InlineToggleControlViewModel.isInstanceOfType($p1)) $v_0 = new Mscrm.ToggleLayout($p0, $p1);
    else if (Mscrm.InlineTextAreaControlViewModel.isInstanceOfType($p1)) $v_0 = new Mscrm.TextAreaLayout($p0, $p1);
    else if (Mscrm.InlineEmailBodyControlViewModel.isInstanceOfType($p1)) $v_0 = new Mscrm.EmailBodyLayout($p0, $p1);
    else if ($p1.get_attribute()
        .get_sourceType() ===
        2 &&
        !Mscrm.Utilities.isMobileRefresh()) $v_0 = new Mscrm.RollupLayout($p0, $p1);
    else $v_0 = new Mscrm.InlineEditControlBaseLayout($p0, $p1);
    return $v_0
};
Mscrm.LayoutFactory.$6C = function($p0, $p1) {
    var $v_0;
    if (Mscrm.InlineTextBoxControlViewModel
        .isInstanceOfType($p1)) $v_0 = new Mscrm.ProcessConfigurationTextBoxLayout($p0, $p1);
    else $v_0 = Mscrm.LayoutFactory.$4a($p0, $p1);
    return $v_0
};
Mscrm.LayoutFactory.parseLayout = function(containerElement) {
    var $v_0 = containerElement.attr("data-layout");
    return isNullOrEmptyString($v_0) ? 0 : parseInt($v_0)
};
Mscrm.LookupLayout = function($p0, $p1) {
    Mscrm.LookupLayout.initializeBase(this, [$p0, $p1]);
    this.set_showEditIcon(true)
};
Mscrm.LookupLayout.prototype = {
    get_showGradientMask: function() {
        if ("multi" === this.$X_1.get_lookupStyle()) return false;
        else return Mscrm.InlineEditControlBaseLayout.prototype.get_showGradientMask.call(this)
    },
    get_editIconPath: function() { return "/_imgs/search_normal.gif" },
    get_editIconHtml: function() {
        if ("multi" === this.$X_1.get_lookupStyle())
            return Mscrm.InlineLookupUtility.$4f(this.get_editIconPath(),
                '<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>',
                "ms-crm-InlineLookupEdit ms-crm-EditMultiLookup-Image",
                "ms-crm-Inline-EditIcon ms-crm-Inline-MultiLookupEditIcon");
        else
            return Mscrm.InlineLookupUtility.$47(this.get_editIconPath(),
                '<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>',
                "ms-crm-InlineLookupEdit ms-crm-EditLookup-Image")
    },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditLookupChromeBehavior },
    updateTooltip: function($p0) {}
};
Mscrm.ProcessConfigurationTextBoxLayout = function(containerElement, viewModel) {
    Mscrm.ProcessConfigurationTextBoxLayout.initializeBase(this, [containerElement, viewModel])
};
Mscrm.ProcessConfigurationTextBoxLayout.prototype = {
    get_showGradientMask: function() { return true },
    renderForRead: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForRead.call(this);
        this.get_chromeElement().parent().hasClass("pc_en_stage_body") &&
            this.get_valueElement().addClass("pc_stage_value");
        this.get_valueElement().addClass("pc_inline_value")
    },
    renderForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForEdit.call(this);
        this.get_chromeElement().parent().hasClass("pc_en_stage_body") &&
            this.get_editElementWrapper().children(".ms-crm-InlineInput").addClass("pc_stage_edit")
    },
    appendAndWrapValueElementMaskInternal: function() {
        if (this.get_showGradientMask()) {
            var $v_0 = this.get_valueElement().children("span").first();
            $v_0 = $v_0.length > 0 ? $v_0 : this.get_valueElement();
            $v_0.append(this.$z_1)
        }
    }
};
Mscrm.RollupLayout = function($p0, $p1) {
    Mscrm.RollupLayout.initializeBase(this, [$p0, $p1]);
    this.get_valueElement().addClass("rollup Inline-value-alignment");
    var $v_0 = Mscrm.InlineMoneyAttribute.isInstanceOfType($p1.get_attribute());
    if (!IsNull(window
            .IS_OUTLOOK_CLIENT) &&
        window.IS_OUTLOOK_CLIENT &&
        !IsNull(window.IS_ONLINE) &&
        !window.IS_ONLINE ||
        $p1.get_attribute().get_parentFormDataEntityId().startsWith("qf_fde_") ||
        !$p1.get_attribute().get_privilegeMask() ||
        $p1.get_attribute().get_sourceTypeMask() === 32 ||
        $p1.get_attribute().get_rollupInvalid() ||
        $v_0 && $p1.get_attribute().get_isBaseCurrency() ||
        Mscrm.InternalUtilities._String.isNullOrEmpty(Mscrm.InlineEditDataService.get_formEntity()
            .get_recordId())) this.set_showEditIcon(false);
    else this.set_showEditIcon(true)
};
Mscrm.RollupLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineRollupChromeBehavior },
    get_editIconPath: function() {
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) return "/_imgs/sfa/refresh_high_contrast_16.png";
        else return "/_imgs/sfa/rollup_refresh.png"
    },
    get_editIconHtml: function() {
        return Mscrm.InlineRollupUtility.$5C(this.get_editIconPath(),
            '<div class="rollup recalculate"><a class="rolluprefreshPostsLink" href="#"><img src="{0}" class="{1}" title="{2}" id="refreshIcon"/></a></div>')
    },
    appendAndWrapValueElementMaskInternal: function() {
        var $v_0 = this.get_valueElement().children("span");
        if (window
            .LOCID_UI_DIR ===
            "RTL" &&
            this.$X_1.get_attribute().get_attributeType() === "money") $v_0.first().append(this.get_$3Q_2());
        else $v_0.first().prepend(this.get_$3Q_2());
        if (this.get_showEditIcon())
            if (window.LOCID_UI_DIR === "RTL") $v_0.first().prepend(this.get_$4J_2());
            else $v_0.first().append(this.get_$4J_2());
        this.get_showGradientMask() && $v_0.first().append(this.$z_1);
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_controls/datetime/time.js"), true)
    },
    get_$4J_2: function() {
        if (IsNull(this.$1S_2)) this.$1S_2 = $P_CRM(this.get_editIconHtml());
        return this.$1S_2
    },
    get_$3Q_2: function() {
        if (IsNull(this.$1G_2))
            this
                .$1G_2 =
                $P_CRM('<div style="display:inline;"><img src="/_imgs/sfa/recalculate_16.png" id="calculator" alt="" class="calculateImage"></div>');
        return this.$1G_2
    },
    $1S_2: null,
    $1G_2: null
};
Mscrm.SalesProcessLayout = function($p0, $p1) { Mscrm.SalesProcessLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.SalesProcessLayout.prototype = {
    $P_2: null,
    $2U_2: null,
    $2u_2: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$P_2 = null;
        this.$2U_2 = null;
        Mscrm.InlineEditControlBaseLayout.prototype.dispose.call(this)
    },
    get_labelElement: function() {
        if (IsNull(this.$P_2)) {
            var $v_0 = String.format(".{0}", "processStep"),
                $v_1 = this.get_chromeElement().parents($v_0),
                $v_2 = String.format(".{0}", "ms-crm-InlineEditLabel"),
                $v_3 = String.format(".{0}", "processStepLabelMask");
            this.$P_2 = $v_1.find($v_2);
            this.$2U_2 = $v_1.children($v_3)
        }
        return this.$P_2
    },
    get_iconElement: function() {
        if (IsNull(this.$2u_2)) {
            var $v_0 = this.get_labelElement().parent(".processStep");
            this.$2u_2 = $v_0.children("img.completedStep")
        }
        return this.$2u_2
    },
    isElementInLabel: function($p0) {
        if (!this.get_labelElementExists()) return false;
        return Mscrm.InlineEditControlBaseLayout.prototype.isElementInLabel.call(this, $p0) ||
            !IsNull(this.$2U_2) && $p0.get(0) === this.$2U_2.get(0)
    },
    renderForRead: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForRead.call(this);
        var $v_0 = this.$X_1.get_controlMode();
        this.get_chromeElement().addClass($v_0);
        var $v_1 = "--";
        if ($v_0 !== "locked" && $v_0 !== "deactivated") $v_1 = window.LOCID_IEC_CLICKTOENTER;
        this.$X_1.set_emptyValuePlaceholder($v_1)
    },
    updateTooltip: function($p0) {
        Mscrm.InlineEditControlBaseLayout.prototype.updateTooltip.call(this, $p0);
        this.get_chromeElement().attr("title", $p0)
    }
};
Mscrm.SalesProcessLookupLayout = function($p0, $p1) {
    Mscrm.SalesProcessLookupLayout.initializeBase(this, [$p0, $p1]);
    this.set_showEditIcon(true)
};
Mscrm.SalesProcessLookupLayout.prototype = {
    get_editIconPath: function() { return "/_imgs/search_normal.gif" },
    get_editIconHtml: function() {
        return Mscrm.InlineLookupUtility.$47(this.get_editIconPath(),
            '<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>',
            "ms-crm-InlineLookupEdit ms-crm-EditLookup-Process-Image")
    },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditLookupChromeBehavior },
    updateTooltip: function($p0) {}
};
Mscrm.SalesProcessOptionSetLayout = function($p0, $p1) {
    Mscrm.SalesProcessOptionSetLayout.initializeBase(this, [$p0, $p1])
};
Mscrm.SalesProcessOptionSetLayout.prototype = {
    renderForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForEdit.call(this);
        if (!window.UseTabletExperience) {
            this.get_editElementWrapper().bind("state-edit", this.$$d_addScrollClass);
            this.get_editElementWrapper().bind("state-read", this.$$d_removeScrollClass)
        }
    },
    get_checkAdjustFocusElement: function() { return true }
};
Mscrm.SalesProcessTextAreaLayout = function($p0, $p1) {
    this.$$d_$7T_3 = Function.createDelegate(this, this.$7T_3);
    this.$$d_$7g_3 = Function.createDelegate(this, this.$7g_3);
    Mscrm.SalesProcessTextAreaLayout.initializeBase(this, [$p0, $p1])
};
Mscrm.SalesProcessTextAreaLayout.prototype = {
    $1R_3: null,
    $2L_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (this.get_chromeElement().children(".ms-crm-Inline-Edit").length === 1) {
            var $v_0 = Mscrm.TextAreaHelper.findTextArea(this.get_editElementWrapper());
            this.$83_3($v_0)
        }
        this.$1R_3 = null;
        this.$2L_3 = null;
        Mscrm.SalesProcessLayout.prototype.dispose.call(this)
    },
    get_labelElementExists: function() { return false },
    renderForRead: function() {
        Mscrm.SalesProcessLayout.prototype.renderForRead.call(this);
        this.$1R_3 = this.get_chromeElement().parent();
        this.$1R_3.addClass("inlineTextAreaContainer");
        this.$2L_3 = this.get_chromeElement().parents("div")
    },
    renderForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForEdit.call(this);
        var $v_0 = Mscrm.TextAreaHelper.findTextArea(this.get_editElementWrapper());
        this.$5Z_3($v_0)
    },
    $5Z_3: function($p0) {
        $p0.focus(this.$$d_$7g_3);
        $p0.blur(this.$$d_$7T_3)
    },
    $83_3: function($p0) {
        $p0.unbind("focus", this.$$d_$7g_3);
        $p0.unbind("blur", this.$$d_$7T_3)
    },
    $7g_3: function($p0) {
        $P_CRM("#crmNavBar").addClass("onTop");
        $P_CRM("#mainContainer").addClass("noOverflow");
        this.$2L_3.addClass("noScroll");
        this.$1R_3.addClass("inEdit");
        this.$1R_3.trigger("stepControlWiden", [100]);
        this.get_chromeElement().addClass("inEdit")
    },
    $7T_3: function($p0) {
        this.get_chromeElement().removeClass("inEdit");
        this.$1R_3.trigger("stepControlNarrow");
        this.$1R_3.removeClass("inEdit");
        this.$2L_3.removeClass("noScroll");
        $P_CRM("#mainContainer").removeClass("noOverflow");
        $P_CRM("#crmNavBar").removeClass("onTop")
    }
};
Mscrm.SalesProcessToggleLayout = function($p0, $p1) { Mscrm.SalesProcessToggleLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.SalesProcessToggleLayout.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditToggleChromeBehavior }
};
Mscrm.TextAreaLayout = function($p0, $p1) {
    this.$$d_$8d_2 = Function.createDelegate(this, this.$8d_2);
    this.$$d_$8V_2 = Function.createDelegate(this, this.$8V_2);
    this.$$d_$8U_2 = Function.createDelegate(this, this.$8U_2);
    Mscrm.TextAreaLayout.initializeBase(this, [$p0, $p1])
};
Mscrm.TextAreaLayout.prototype = {
    $y_2: null,
    $21_2: null,
    $2N_2: null,
    get_chromeBehaviorType: function() { return Mscrm.InlineEditTextAreaChromeBehavior },
    $4E_2: function() {
        if (!this.$2N_2)
            this.$2N_2 = this.get_chromeElement().parents(String.format(".{0}", "ms-crm-Field-Data-Print")).first();
        return this.$2N_2
    },
    renderForRead: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForRead.call(this);
        this.$8I_2()
    },
    $8I_2: function() {
        var $v_0 = this.$4E_2();
        if ($v_0.length === 1) {
            var $v_1 = $v_0.attr("data-height");
            if (!isNullOrEmptyString($v_1)) {
                var $v_2 = parseInt($v_1);
                if (!isNaN($v_2)) {
                    var $v_3 = this.get_valueElement().outerHeight(true) - this.get_valueElement().height(),
                        $v_4 = $v_2 - $v_3;
                    $v_4 = $v_4 > 0 ? $v_4 : 0;
                    $v_1 = $v_4.toString()
                }
                $v_0.height("auto");
                this.get_chromeElement().height("auto").css("overflow", "");
                this.get_valueElement().css("min-height", $v_1 + "px");
                if (!this.get_$4y_2()) {
                    this.get_valueElement().height($v_1 + "px");
                    this.get_valueElement().css("overflow", "auto")
                }
            }
        }
    },
    renderForEdit: function() {
        Mscrm.InlineEditControlBaseLayout.prototype.renderForEdit.call(this);
        this.$8H_2();
        this.get_chromeElement().bind("TransitionToEditStart", this.$$d_$8U_2);
        this.get_editElementWrapper().bind("state-read", this.$$d_$8V_2);
        $P_CRM(window).resize(this.$$d_$8d_2)
    },
    $8H_2: function() {
        var $v_0 = this.$4E_2();
        if ($v_0.length === 1) {
            var $v_1 = $v_0.attr("data-height");
            !isNullOrEmptyString($v_1) && this.get_$2t_2().css("min-height", $v_1 + "px").css("overflow", "auto")
        }
    },
    $3N_2: function() {
        var $v_0;
        if (this.get_$6z_2()) $v_0 = this.$X_1.get_disabled() || this.$X_1.get_hasError() ? 35 : 12;
        else $v_0 = 35;
        var $v_1 = this.get_chromeElement().width() - $v_0;
        $v_1 >= 0 && this.get_$2t_2().width($v_1)
    },
    $8V_2: function($p0) { this.get_$4y_2() && this.get_$2t_2().height("auto") },
    $8U_2: function($p0) {
        var $v_0 = Mscrm.Utilities.isMobileRefresh() ? 240 : this.get_valueElement().height();
        this.get_$2t_2().height($v_0);
        this.$3N_2()
    },
    $8d_2: function($p0) { this.$3N_2() },
    get_$2t_2: function() {
        if (IsNull(this.$y_2)) this.$y_2 = Mscrm.TextAreaHelper.findTextArea(this.get_editElementWrapper());
        return this.$y_2
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$y_2 = null;
        this.$21_2 = null;
        this.$2N_2 = null;
        $P_CRM(window).unbind("resize", this.$$d_$8d_2);
        Mscrm.InlineEditControlBaseLayout.prototype.dispose.call(this)
    },
    get_showGradientMask: function() { return false },
    get_$6z_2: function() {
        if (IsNull(this.$21_2)) {
            var $v_0 = this.get_chromeElement();
            this.$21_2 = $v_0.parents(".ms-crm-Inline-DynamicGutter")
        }
        return !IsNull(this.$21_2) && this.$21_2.length > 0
    },
    get_$4y_2: function() {
        if (this.$X_1.get_attribute().get_isCompositeAttributeValueSet()) return true;
        var $v_0 = this.$4E_2();
        if ($v_0.length === 1) {
            var $v_1 = $v_0.attr("isautoexpanding");
            if (!isNullOrEmptyString($v_1) && $v_1.toUpperCase() === "TRUE") return true
        }
        return false
    }
};
Mscrm.ToggleLayout = function($p0, $p1) { Mscrm.ToggleLayout.initializeBase(this, [$p0, $p1]) };
Mscrm.ToggleLayout.prototype = { get_chromeBehaviorType: function() { return Mscrm.InlineEditToggleChromeBehavior } };
Mscrm.AutoCompleteLayout = function(chromeElement, viewModel) {
    this.$$d_$7b_2 = Function.createDelegate(this, this.$7b_2);
    this.$$d_$56_2 = Function.createDelegate(this, this.$56_2);
    this.$37_2 = window.CDNURL + "/_imgs/processcontrol/dropdown.png";
    Mscrm.AutoCompleteLayout.initializeBase(this, [chromeElement, viewModel])
};
Mscrm.AutoCompleteLayout.prototype = {
    get_showGradientMask: function() { return false },
    $1q_2: null,
    renderForRead: function() { this.get_valueElement().addClass(this.$3M_2) },
    renderForEdit: function() {
        this.get_editElementWrapper().addClass("ui-autocomplete-wrapper");
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(this.$37_2));
        this.$1q_2 = $P_CRM("<a></a>").addClass("ui-combobox-toggle").attr("title", this.$1t_2).attr("alt", this.$1t_2);
        this.$1q_2.append($P_CRM("<img></img>").attr("src", $v_0.source)
            .addClass($v_0.cssClass + " ui-ac-dropdown-img"));
        this.$1q_2.appendTo(this.get_editElementWrapper()).click(this.$$d_$56_2).bind("keydown", this.$$d_$7b_2)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$1q_2) && this.$1q_2.unbind("click", this.$$d_$56_2).unbind("keydown", this.$$d_$7b_2);
        Mscrm.InlineEditControlBaseLayout.prototype.dispose.call(this)
    },
    $7b_2: function($p0) {
        switch ($p0.which) {
        case 13:
            this.$56_2(null);
            $p0.preventDefault();
            $p0.stopPropagation();
            break
        }
    },
    $56_2: function($p0) {
        if (this.get_$3P_2().autocomplete("widget").is(":visible")) {
            this.get_$3P_2().autocomplete("close");
            return
        }
        $P_CRM(this).blur();
        this.get_$3P_2().autocomplete("search", "");
        this.get_$3P_2().focus()
    },
    get_$3P_2: function() { return this.get_editElementWrapper().children(".ms-crm-InlineInput") },
    get_valueElementClass: function() { return this.$3M_2 },
    set_valueElementClass: function(value) {
        this.$3M_2 = value;
        return value
    },
    get_imageIconFilePath: function() { return this.$37_2 },
    set_imageIconFilePath: function(value) {
        this.$37_2 = value;
        return value
    },
    get_imageIconTooltip: function() { return this.$1t_2 },
    set_imageIconTooltip: function(value) {
        this.$1t_2 = value;
        return value
    },
    $3M_2: "ui-autocomplete-value",
    $1t_2: ""
};
Mscrm.InlineAttributeBase = function(jsonWrapper, initialValue, formDataEntityId) {
    Mscrm.InlineAttributeBase.$7P(jsonWrapper, initialValue);
    this._jsonWrapper = jsonWrapper;
    this.$1L_0 = initialValue;
    this.$33_0 = formDataEntityId
};
Mscrm.InlineAttributeBase.$7P = function($p0, $p1) {
    if (!IsNull($p0) && !IsNull($p1)) {
        if ($p1["securedcreate"] === "1") $p0.CanCreate = false;
        if ($p1["securedupdate"] === "1" || $p1["securedLocalize"] === "1") $p0.CanUpdate = false;
        if ($p1["securedread"] === "1") {
            $p0.CanRead = false;
            $p1["value"] = ""
        }
    }
};
Mscrm.InlineAttributeBase.prototype = {
    _jsonWrapper: null,
    $1L_0: null,
    $33_0: null,
    $3q_0: false,
    get_dataAttribute: function() { return $find(this.get_dataAttributeId()) },
    get_displayValue: function() { return (this.get_rawValue() || "").toString() },
    get_rawValue: function() { return this.get_dataAttribute().get_value() },
    set_rawValue: function(value) {
        this.get_dataAttribute().set_value(value);
        return value
    },
    get_initialValue: function() { return this.$1L_0 },
    get_dataAttributeId: function() { return "Attribute_" + this.$33_0 + "_" + this.get_logicalName() },
    get_logicalName: function() { return this._jsonWrapper.LogicalName },
    get_labelName: function() { return this._jsonWrapper.LabelName },
    get_privilegeMask: function() {
        var $v_0 = 0;
        if (this._jsonWrapper.CanCreate) $v_0 |= 1;
        if (this._jsonWrapper.CanRead) $v_0 |= 2;
        if (this._jsonWrapper.CanUpdate) $v_0 |= 4;
        return $v_0
    },
    get_requiredLevel: function() { return this._jsonWrapper.RequiredLevel },
    set_requiredLevel: function(value) {
        this._jsonWrapper.RequiredLevel = value;
        return value
    },
    get_imeMode: function() { return this._jsonWrapper.ImeMode },
    get_isDisabled: function() { return this._jsonWrapper.IsDisabled },
    get_attributeType: function() { return this._jsonWrapper.AttributeType },
    get_attributeFormat: function() { return this._jsonWrapper.Format },
    get_attributeBehavior: function() {
        if (Mscrm.DateTimeAttributeMetadataJsonWrapper.isInstanceOfType(this._jsonWrapper)) {
            var $v_0 = this._jsonWrapper;
            return $v_0.DateTimeBehavior
        }
        return 0
    },
    get_canUpdate: function() { return this._jsonWrapper.CanUpdate },
    get_canCreate: function() { return this._jsonWrapper.CanCreate },
    get_canRead: function() { return this._jsonWrapper.CanRead },
    get_isCompositeAttributeValueSet: function() { return this.$3q_0 },
    set_isCompositeAttributeValueSet: function(value) {
        this.$3q_0 = value;
        return value
    },
    get_sourceType: function() { return this._jsonWrapper.SourceType },
    get_sourceTypeMask: function() { return this._jsonWrapper.SourceTypeMask },
    get_rollupInvalid: function() { return this._jsonWrapper.RollupInvalid },
    get_rollupAssociatedDateFieldName: function() { return this._jsonWrapper.RollupAssociatedDateFieldName },
    get_rollupAssociatedStateFieldName: function() { return this._jsonWrapper.RollupAssociatedStateFieldName },
    get_parentFormDataEntityId: function() { return this.$33_0 },
    get_firstAvailableControl: function() {
        var $v_0 = this.get_dataAttribute().get_firstAvailableControl();
        return $v_0
    },
    addOnChange: function(handler, system) { this.get_dataAttribute().addOnChange(handler, system) },
    removeOnChange: function(handler) { this.get_dataAttribute().removeOnChange(handler) },
    addOnChangeInternal: function(handler, system) { this.get_dataAttribute().addOnChangeInternal(handler, system) },
    removeOnChangeInternal: function(handler) { this.get_dataAttribute().removeOnChangeInternal(handler) }
};
Mscrm.InlineCheckBoxAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineCheckBoxAttribute.initializeBase(this, [$p0, $p1, $p2]);
    if (IsNull(this.$20_1)) this.$20_1 = $p0.Options
};
Mscrm.InlineCheckBoxAttribute.prototype = {
    $20_1: null,
    get_dataAttributeType: function() { return Mscrm.OptionSetAttribute },
    get_options: function() { return this.$20_1 }
};
Mscrm.InlineDateTimeAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineDateTimeAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineDateTimeAttribute.formatDisplayValue = function($p0, $p1, $p2, $p3) {
    if (!IsNull($p0)) {
        var $v_0 = Mscrm.DateTimeUtility.formatDate($p0);
        switch ($p1) {
        case "datetime":
            if (IsNull($p3) || $p3) {
                var $v_1 = timeToString($p0, 0);
                return String.format("{0}{2}{1}", $v_0, $v_1, $p2)
            } else return String.format("{0}{1}", $v_0, $p2);
        case "date":
            return $v_0;
        default:
            return $v_0
        }
    }
    return null
};
Mscrm.InlineDateTimeAttribute.prototype = {
    get_displayValue: function() {
        return Mscrm.InlineDateTimeAttribute.formatDisplayValue(this.get_rawValue(), this.get_attributeFormat(), " ")
    },
    get_dataAttributeType: function() { return Mscrm.DateTimeAttribute }
};
Mscrm.InlineEmailBodyAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineEmailBodyAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineEmailBodyAttribute.prototype = {
    get_dataAttributeType: function() { return Mscrm.InlineFormDataEmailBodyAttribute }
};
Mscrm.InlineLookupAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineLookupAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineLookupAttribute.prototype = {
    get_lookupTypes: function() { return this._jsonWrapper.LookupTypes },
    get_createPermissionDictionary: function() { return this._jsonWrapper.CreatePermissionDictionary },
    get_crmAttributeId: function() { return this._jsonWrapper.CrmAttributeId },
    get_lookupTypeNames: function() { return this._jsonWrapper.LookupTypeNames },
    get_lookupTypeIcons: function() { return this._jsonWrapper.LookupTypeIcons },
    get_lookupBrowse: function() { return this._jsonWrapper.LookupBrowse },
    get_lookupStyle: function() { return this._jsonWrapper.LookupStyle },
    get_defaultType: function() { return this._jsonWrapper.DefaultType },
    get_currencyDisplayOption: function() { return this._jsonWrapper.CurrencyDisplayOption },
    get_displayValue: function() {
        var $v_0 = this.get_dataAttribute().get_value();
        if (IsNull($v_0) || !$v_0.length) return "";
        return $v_0[0].name
    },
    get_dataAttributeType: function() { return Mscrm.InlineFormDataLookupAttribute }
};
Mscrm.InlineMoneyAttribute = function($p0, $p1, $p2) {
    this.$22_2 = -1;
    Mscrm.InlineMoneyAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineMoneyAttribute.prototype = {
    $1m_2: null,
    get_currencySymbol: function() {
        if (isNullOrEmptyString(this.$1m_2)) {
            var $v_0 = this._jsonWrapper.CurrencySymbol;
            if (isNullOrEmptyString($v_0) && !IsNull(this.$1L_0)
            ) $v_0 = CrmEncodeDecode.CrmHtmlDecode(CrmEncodeDecode.CrmHtmlDecode(this.$1L_0["symbol"]));
            this.$1m_2 = $v_0
        }
        return this.$1m_2
    },
    set_currencySymbol: function($p0) {
        this.$1m_2 = $p0;
        return $p0
    },
    get_isBaseCurrency: function() { return this._jsonWrapper.IsBaseCurrency },
    get_precisionSource: function() { return this._jsonWrapper.PrecisionSource },
    get_displayValue: function() {
        var $v_0 = IsNull(this.get_rawValue())
            ? ""
            : Mscrm.NumberUtility.addFormatting(this.get_rawValue(), this.get_precision());
        if (isNullOrEmptyString($v_0)) return "";
        var $v_1 = isNullOrEmptyString(this.get_currencySymbol()) ? "" : this.get_currencySymbol();
        if (window.SYMBOLPOISTION_CURRENCY) return $v_1 + $v_0;
        else return $v_0 + $v_1
    },
    get_precision: function() {
        if (this.$22_2 === -1) {
            var $v_0 = -1;
            if (this.$1L_0 && "precision" in this.$1L_0) {
                var $v_1 = this.$1L_0["precision"];
                if (!isNullOrEmptyString($v_1)) $v_0 = Number.parseInvariant($v_1)
            }
            if ($v_0 >= 0) this.$22_2 = $v_0;
            else this.$22_2 = Mscrm.InlineNumberAttribute.prototype.get_precision.call(this)
        }
        return this.$22_2
    },
    set_precision: function($p0) {
        if (this.get_precisionSource() === window.PRECISIONSOURCE_CURRENCY) this.$22_2 = $p0;
        return $p0
    }
};
Mscrm.InlineMultiplePicklistAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineMultiplePicklistAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineMultiplePicklistAttribute.prototype = {
    get_dataAttributeType: function() { return Mscrm.FormDataAttribute },
    get_options: function() { return this._jsonWrapper.Options },
    get_displayValue: function() { return "" }
};
Mscrm.InlineNumberAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineNumberAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineNumberAttribute.prototype = {
    get_minValue: function() { return this._jsonWrapper.MinValue },
    get_maxValue: function() { return this._jsonWrapper.MaxValue },
    get_precision: function() { return this._jsonWrapper.Precision },
    set_precision: function($p0) {
        this._jsonWrapper.Precision = $p0;
        return $p0
    },
    get_dataAttributeType: function() { return Mscrm.NumberAttribute },
    get_displayValue: function() {
        if (IsNull(this.get_rawValue())) return "";
        if (this._jsonWrapper.Format === "duration")
            return Mscrm.NumberUtility.formatDuration(parseInt(this.get_rawValue().toString()));
        return Mscrm.NumberUtility.addFormatting(this.get_rawValue(), this.get_dataAttribute().get_precision())
    }
};
Mscrm.InlineOptionSetAttribute = function(jsonWrapper, initialValue, formDataEntityId) {
    Mscrm.InlineOptionSetAttribute.initializeBase(this, [jsonWrapper, initialValue, formDataEntityId])
};
Mscrm.InlineOptionSetAttribute.prototype = {
    get_options: function() { return this._jsonWrapper.Options },
    set_options: function(value) {
        var $v_0 = value;
        this._jsonWrapper.Options = $v_0;
        for (var $v_1 = [], $$arr_3 = $v_0, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            Array.add($v_1, new Xrm.OptionSetItem($v_2.Value, $v_2.Label))
        }
        this.get_dataAttribute().set_options($v_1);
        return value
    },
    get_displayValue: function() { return this.get_dataAttribute().get_formattedValue() },
    get_dataAttributeType: function() { return Mscrm.OptionSetAttribute }
};
Mscrm.InlineStatusAttribute = function(jsonWrapper, initialValue, formDataEntityId, metadata) {
    Mscrm.InlineStatusAttribute.initializeBase(this, [jsonWrapper, initialValue, formDataEntityId]);
    this.$2Y_2 = metadata
};
Mscrm.InlineStatusAttribute.prototype = {
    $2Y_2: null,
    get_metadata: function() { return this.$2Y_2 },
    set_metadata: function(value) {
        this.$2Y_2 = value;
        return value
    }
};
Mscrm.InlineTextAttribute = function($p0, $p1, $p2) { Mscrm.InlineTextAttribute.initializeBase(this, [$p0, $p1, $p2]) };
Mscrm.InlineTextAttribute.prototype = {
    get_dataAttributeType: function() { return Mscrm.TextAttribute },
    get_maxLength: function() {
        var $v_0 = this._jsonWrapper.MaxLength;
        return IsNull($v_0) ? 255 : this._jsonWrapper.MaxLength
    }
};
Mscrm.InlineRelatedCasesLookupAttribute = function($p0, $p1, $p2) {
    Mscrm.InlineRelatedCasesLookupAttribute.initializeBase(this, [$p0, $p1, $p2])
};
Mscrm.InlineRelatedCasesLookupAttribute.prototype = {
    get_dataAttributeType: function() { return Mscrm.InlineFormDataRelatedCasesLookupAttribute }
};
Mscrm.InlineEditControlCommonUtility = function() {};
Mscrm.InlineEditControlCommonUtility.setUnusedRowsVisibility = function($p0, $p1, $p2) {
    var $v_0 = parseInt($p0.attr("rowspan"), 10), $v_1 = $p2 ? "" : "none", $v_2 = $p1;
    while (!isNaN($v_0) && $v_0 > 1 && !IsNull($v_2)) {
        $v_2 = $v_2.next();
        $v_0--;
        if (!$p2 && !Mscrm.InlineEditControlCommonUtility.isElementAllChildrenHidden($v_2)) continue;
        $v_2.css("display", $v_1)
    }
};
Mscrm.InlineEditControlCommonUtility
    .isElementAllChildrenHidden = function($p0) { return !$p0.children(":not(:hidden)").length };
Mscrm.InlineEditControlCommonUtility.updatePageControlsErrorDivMessage = function() {
    Xrm.Page.ui.controls.forEach(function($p1_0, $p1_1) {
        var $v_0 = $p1_0._control;
        if (!IsNull($v_0) && Mscrm.SimpleInlineControlView.isInstanceOfType($v_0)) {
            !$v_0.get_isEditControlInitialized() && $v_0.initializeAndRenderEditView();
            $v_0.updateControlErrorDivMessage()
        }
    })
};
Mscrm.InlineEditControlCommonUtility.isFirefox = function() {
    if (navigator.userAgent.toLowerCase().indexOf("firefox") !== -1) return true;
    return false
};
Mscrm.InlineEditControlCommonUtility.showParentView = function($p0) { !IsNull($p0) && $p0.setVisible(true) };
Mscrm.InlineEditControlCommonUtility
    .hideParentViewIfNoControlsVisible = function($p0) {
        !IsNull($p0) && $p0.getVisible() && !$p0.isSectionAnyChildVisible() && $p0.setVisible(false)
    };
Mscrm.InlineCheckBoxControlViewModel = function(attribute, initialControlMode) {
    Mscrm.InlineCheckBoxControlViewModel.initializeBase(this, [attribute, initialControlMode])
};
Mscrm.InlineCheckBoxControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditCheckBoxChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineCheckBoxControlBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl }
};
Mscrm.InlineControlViewModelBase = function(attribute, initialControlMode) {
    this.$4_0 = attribute;
    this.setInitialControlMode(initialControlMode);
    this.$1H_0 = window.LOCID_IEC_CLICKTOENTER
};
Mscrm.InlineControlViewModelBase.prototype = {
    $4_0: null,
    $A_0: null,
    $2v_0: null,
    $I_0: null,
    $2W_0: null,
    $1o_0: null,
    $1H_0: null,
    $3m_0: false,
    raisePropertyChange: function(propertyName) { $P_CRM(this).trigger("ms-crm-PropertyChange", [propertyName]) },
    setInitialControlMode: function(initialControlMode) {
        initialControlMode = this.$8X_0(initialControlMode);
        if (initialControlMode === "deactivated") this.set_controlMode(initialControlMode);
        else if (initialControlMode === "locked" || !this.isAttributeLocked())
            if (this.$4_0.get_isCompositeAttributeValueSet()) this.set_controlMode("normal");
            else this.set_controlMode(initialControlMode);
        else this.set_controlMode("locked");
        this.$2v_0 = "normal"
    },
    isAttributeLocked: function() {
        return this.$4_0.get_isDisabled() ||
            Mscrm.InlineEditDataService.isNew() && !this.$4_0.get_canCreate() ||
            !Mscrm.InlineEditDataService.isNew() && !this.$4_0.get_canUpdate()
    },
    $8a_0: function($p0) {
        var $v_0 = new Mscrm.ValidationResult(true, null);
        if ((this.get_requiredLevel() === 1 || this.get_requiredLevel() === 2) && isNullOrEmptyString($p0)) {
            if (this.get_disabled()) return $v_0;
            if (!this.$4_0.get_canRead()) return $v_0;
            $v_0.isValid = false;
            var $v_1 = this.$2W_0.trim();
            if (isNullOrEmptyString($v_1)) if (!($v_1 = this.$4_0.get_labelName())) $v_1 = this.$4_0.get_logicalName();
            $v_0.errorText = String.format(window.LOCID_FORM_PROIVE_VALUE_MASK, $v_1)
        }
        return $v_0
    },
    get_attribute: function() { return this.$4_0 },
    set_attribute: function(value) {
        this.$4_0 = value;
        return value
    },
    get_disabled: function() { return this.$A_0 === "locked" || this.$A_0 === "deactivated" },
    set_disabled: function(value) {
        this.$A_0 !== "alwaysedit" && this.set_controlMode(value ? "locked" : this.$2v_0);
        return value
    },
    get_labelValue: function() { return this.$2W_0 },
    set_labelValue: function(value) {
        this.$2W_0 = value;
        this.raisePropertyChange("LabelValue");
        return value
    },
    get_defaultEditValue: function() { return this.$1o_0 },
    set_defaultEditValue: function(value) {
        this.$1o_0 = value;
        this.raisePropertyChange("DefaultEditValue");
        return value
    },
    get_emptyValuePlaceholder: function() { return this.$1H_0 },
    set_emptyValuePlaceholder: function(value) {
        this.$1H_0 = value;
        this.raisePropertyChange("EmptyValuePlaceholder");
        return value
    },
    get_emptyValueTooltip: function() { return window.LOCID_IEC_SELECTTOENTER },
    get_hasError: function() { return this.$3m_0 },
    set_hasError: function(value) {
        this.$3m_0 = value;
        return value
    },
    get_editValue: function() { return this.$I_0 },
    set_editValue: function(value) {
        this.$I_0 = value;
        this.raisePropertyChange("EditValue");
        return value
    },
    get_controlMode: function() { return this.$A_0 },
    set_controlMode: function(value) {
        switch (value) {
        case "normal":
        case "locked":
        case "alwaysedit":
        case "deactivated":
            break;
        default:
            throw Error.argumentOutOfRange("ControlMode", value)
        }
        this.$A_0 = value;
        this.raisePropertyChange("ControlMode");
        return value
    },
    get_requiredLevel: function() { return this.$4_0.get_requiredLevel() },
    set_requiredLevel: function(value) {
        this.$4_0.set_requiredLevel(value);
        return value
    },
    setDefaultControlMode: function(defaultControlMode) {
        this.set_controlMode(defaultControlMode);
        this.$2v_0 = defaultControlMode
    },
    validate: function(value) { return this.$8a_0(value) },
    setPropertyWithoutRaisingEvent: function(propertyName, value) {
        switch (propertyName) {
        case "EditValue":
            this.$I_0 = IsNull(value) ? "" : value.toString();
            break;
        case "LabelValue":
            this.$2W_0 = IsNull(value) ? "" : value.toString();
            break;
        case "ControlMode":
            this.$A_0 = IsNull(value) ? "" : value.toString();
            break;
        case "DefaultEditValue":
            this.$1o_0 = IsNull(value) ? "" : value.toString();
            break;
        case "EmptyValuePlaceholder":
            this.$1H_0 = IsNull(value) ? "" : value.toString();
            break
        }
    },
    get_optimizeForMobileRendering: function() {
        return !Mscrm.Utilities.isIE() && this.get_controlSupportOptimizationForMobileRendering()
    },
    get_controlSupportOptimizationForMobileRendering: function() { return false },
    $8X_0: function($p0) {
        if (Mscrm.Utilities
            .isMobileRefresh() &&
            !this.get_optimizeForMobileRendering() &&
            $p0 === "normal") return "alwaysedit";
        return $p0
    }
};
Mscrm.InlineDateTimeControlViewModel = function($p0, $p1) {
    Mscrm.InlineDateTimeControlViewModel.initializeBase(this, [$p0, $p1]);
    this.$25_1 = false
};
Mscrm.InlineDateTimeControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineDateTimeBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_showDateOnly: function() { return this.$25_1 },
    set_showDateOnly: function($p0) {
        this.$25_1 = $p0;
        return $p0
    },
    $25_1: false
};
Mscrm.InlineDurationControlViewModel = function($p0, $p1) {
    Mscrm.InlineDurationControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineDurationControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlineDurationBehavior },
    get_controlSupportOptimizationForMobileRendering: function() { return false }
};
Mscrm.InlineEmailAddressControlViewModel = function($p0, $p1) {
    Mscrm.InlineEmailAddressControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineEmailAddressControlViewModel.prototype = {
    get_maxLength: function() { return this.$4_0.get_maxLength() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineEmailAddressBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_controlSupportOptimizationForMobileRendering: function() { return true }
};
Mscrm.InlineEmailBodyControlViewModel = function(attribute, initialControlMode) {
    Mscrm.InlineEmailBodyControlViewModel.initializeBase(this, [attribute, initialControlMode])
};
Mscrm.InlineEmailBodyControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEmailBodyChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineEmailBodyControlBehavior },
    get_controlType: function() { return Mscrm.InlineEmailBodyFormDataControl }
};
Mscrm.InlineLookupControlViewModel = function(attribute, initialControlMode) {
    Mscrm.InlineLookupControlViewModel.initializeBase(this, [attribute, initialControlMode]);
    if (!IsNull(attribute.get_initialValue()) &&
        "value" in attribute.get_initialValue() &&
        IsNull(attribute.get_initialValue()["value"]))
        attribute.get_initialValue()["value"] = window.LOCID_INLINELOOKUP_NONAME
};
Mscrm.InlineLookupControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditLookupChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlinePresenceLookupUIBehavior },
    get_controlType: function() { return Mscrm.InlineLookupFormDataControl },
    get_lookupTypes: function() { return this.$4_0.get_lookupTypes() },
    get_createPermissionDictionary: function() { return this.$4_0.get_createPermissionDictionary() },
    get_crmAttributeId: function() { return this.$4_0.get_crmAttributeId() },
    get_lookupTypeNames: function() { return this.$4_0.get_lookupTypeNames() },
    get_lookupTypeIcons: function() { return this.$4_0.get_lookupTypeIcons() },
    get_lookupBrowse: function() { return this.$4_0.get_lookupBrowse() },
    get_lookupStyle: function() { return this.$4_0.get_lookupStyle() },
    get_defaultType: function() { return this.$4_0.get_defaultType() },
    isAttributeLocked: function() {
        return isNullOrEmptyString(this.get_lookupTypes()) ||
            this.$4_0.get_isDisabled() ||
            Mscrm.InlineEditDataService.isNew() && !this.$4_0.get_canCreate() ||
            !Mscrm.InlineEditDataService.isNew() &&
            !this.$4_0.get_canUpdate() &&
            this.$4_0.get_logicalName() !== "ownerid"
    }
};
Mscrm.InlineMoneyControlViewModel = function($p0, $p1) {
    Mscrm.InlineMoneyControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineMoneyControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlineMoneyBehavior },
    get_controlType: function() { return Mscrm.InlineMoneyFormDataControl },
    get_currencySymbol: function() { return this.$4_0.get_currencySymbol() },
    set_currencySymbol: function($p0) {
        this.$4_0.$1m_2 = $p0;
        this.raisePropertyChange("CurrencySymbol");
        return $p0
    },
    get_isBaseCurrency: function() { return this.$4_0.get_isBaseCurrency() },
    get_precisionSource: function() { return this.$4_0.get_precisionSource() },
    get_controlSupportOptimizationForMobileRendering: function() { return false }
};
Mscrm.InlineMultiplePicklistControlViewModel = function(attribute, initialControlMode) {
    Mscrm.InlineMultiplePicklistControlViewModel.initializeBase(this, [attribute, initialControlMode])
};
Mscrm.InlineMultiplePicklistControlViewModel.prototype = {
    $24_1: null,
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineMultiplePicklistBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_selectedItemIndexes: function() {
        if (IsNull(this.$24_1)) this.$24_1 = [];
        return this.$24_1
    },
    set_selectedItemIndexes: function(value) {
        this.$24_1 = value;
        return value
    },
    get_options: function() { return this.$4_0.get_options() }
};
Mscrm.InlineNumberControlViewModel = function($p0, $p1) {
    Mscrm.InlineNumberControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineNumberControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineNumberBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_minValue: function() { return this.$4_0.get_minValue() },
    get_maxValue: function() { return this.$4_0.get_maxValue() },
    get_precision: function() { return this.$4_0.get_precision() },
    set_precision: function($p0) {
        this.$4_0.set_precision($p0);
        this.raisePropertyChange("Precision");
        return $p0
    },
    get_controlSupportOptimizationForMobileRendering: function() { return true }
};
Mscrm.InlineOptionSetControlViewModel = function($p0, $p1) {
    Mscrm.InlineOptionSetControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineOptionSetControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineOptionSetBehavior },
    get_controlType: function() { return Mscrm.OptionSetUIControl },
    get_options: function() { return this.$4_0.get_options() }
};
Mscrm.InlineStatusControlViewModel = function($p0, $p1, $p2) {
    Mscrm.InlineStatusControlViewModel.initializeBase(this, [$p0, $p1]);
    this.$2l_2 = $p2
};
Mscrm.InlineStatusControlViewModel.$6e = function($p0, $p1) {
    for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        if ($v_0.Value === $p1) return $v_0
    }
    return null
};
Mscrm.InlineStatusControlViewModel.prototype = {
    $2l_2: 0,
    get_statusCode: function() { return this.$2l_2 },
    set_statusCode: function($p0) {
        this.$2l_2 = $p0;
        return $p0
    },
    get_options: function() { return this.$4p_2(this.$2l_2) },
    $4p_2: function($p0) {
        var $v_0 = this.$4_0.$2Y_2.Options,
            $v_1 = new Array(0),
            $v_2 = Mscrm.InlineStatusControlViewModel.$6e($v_0, $p0);
        if ($v_2) {
            var $v_3 = new Mscrm.EnumOptionJsonWrapper;
            $v_3.Value = $v_2.Value;
            $v_3.Label = $v_2.Label;
            $v_1[$v_1.length] = $v_3;
            for (var $v_4 = 0; $v_2.AllowedStatusTransition && $v_4 < $v_2.AllowedStatusTransition.length; $v_4++)
                for (var $$arr_6 = $v_0, $$len_7 = $$arr_6.length, $$idx_8 = 0; $$idx_8 < $$len_7; ++$$idx_8) {
                    var $v_5 = $$arr_6[$$idx_8];
                    if ($v_2.AllowedStatusTransition[$v_4] === $v_5.Value.toString() && $v_2.State === $v_5.State) {
                        var $v_6 = new Mscrm.EnumOptionJsonWrapper;
                        $v_6.Value = $v_5.Value;
                        $v_6.Label = $v_5.Label;
                        $v_1[$v_1.length] = $v_6
                    }
                }
        }
        return $v_1
    }
};
Mscrm.InlineTextAreaControlViewModel = function($p0, $p1) {
    Mscrm.InlineTextAreaControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineTextAreaControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlineTextAreaBehavior },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditTextAreaChromeBehavior },
    get_controlSupportOptimizationForMobileRendering: function() { return false }
};
Mscrm.InlineTextBoxControlViewModel = function($p0, $p1) {
    Mscrm.InlineTextBoxControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineTextBoxControlViewModel.prototype = {
    get_maxLength: function() { return this.$4_0.get_maxLength() },
    get_imeMode: function() { return this.$4_0.get_imeMode() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineTextBoxBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_controlSupportOptimizationForMobileRendering: function() { return true }
};
Mscrm.InlineTickerControlViewModel = function($p0, $p1) {
    Mscrm.InlineTickerControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineTickerControlViewModel.prototype = {
    get_maxLength: function() { return this.$4_0.get_maxLength() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineTickerBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl }
};
Mscrm.InlineToggleControlViewModel = function($p0, $p1) {
    Mscrm.InlineToggleControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineToggleControlViewModel.prototype = {
    get_chromeBehaviorType: function() { return Mscrm.InlineEditToggleChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineOptionSetBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_options: function() { return this.$4_0.get_options() }
};
Mscrm.InlineUrlControlViewModel = function($p0, $p1) {
    Mscrm.InlineUrlControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineUrlControlViewModel.prototype = {
    get_maxLength: function() { return this.$4_0.get_maxLength() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineUrlBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_controlSupportOptimizationForMobileRendering: function() { return true }
};
Mscrm.InlinePhoneNumberControlViewModel = function($p0, $p1) {
    Mscrm.InlinePhoneNumberControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlinePhoneNumberControlViewModel.prototype = {
    get_maxLength: function() { return this.$4_0.get_maxLength() },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlinePhoneNumberBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    get_controlSupportOptimizationForMobileRendering: function() { return true }
};
Mscrm.InlineSubjectLookupControlViewModel = function($p0, $p1) {
    Mscrm.InlineSubjectLookupControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineSubjectLookupControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlineSubjectLookupUIBehavior }
};
Mscrm.InlineRelatedCasesLookupControlViewModel = function($p0, $p1) {
    Mscrm.InlineRelatedCasesLookupControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineRelatedCasesLookupControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlineRelatedCasesLookupBehavior }
};
Mscrm.InlineTransactionCurrencyLookupControlViewModel = function($p0, $p1) {
    Mscrm.InlineTransactionCurrencyLookupControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlineTransactionCurrencyLookupControlViewModel
    .prototype = { get_behaviorType: function() { return Mscrm.InlineImageLookupTransactionCurrency } };
Mscrm.InlinePartyListControlViewModel = function($p0, $p1) {
    Mscrm.InlinePartyListControlViewModel.initializeBase(this, [$p0, $p1])
};
Mscrm.InlinePartyListControlViewModel.prototype = {
    get_behaviorType: function() { return Mscrm.InlinePartyListBehavior }
};
Mscrm.InlineAutoCompleteControlViewModel = function(attribute, initialControlMode) {
    this.$$d_filteredOptionsInputHandler = Function.createDelegate(this, this.filteredOptionsInputHandler);
    this.$31_1 = new Array(0);
    Mscrm.InlineAutoCompleteControlViewModel.initializeBase(this, [attribute, initialControlMode]);
    this.$2F_1 = this.$$d_filteredOptionsInputHandler
};
Mscrm.InlineAutoCompleteControlViewModel.prototype = {
    $1v_1: false,
    $2F_1: null,
    get_inputHandler: function() { return this.$2F_1 },
    set_inputHandler: function(value) {
        this.$2F_1 = value;
        return value
    },
    get_options: function() { return this.$4_0.get_options() },
    set_options: function(value) {
        this.$4_0.set_options(value);
        this.raisePropertyChange("FieldOptionsChangeProperty");
        return value
    },
    get_$4g_1: function() {
        if (!this.$3K_1) return this.get_options();
        return this.$31_1
    },
    get_useOptionFiltering: function() { return this.$3K_1 },
    set_useOptionFiltering: function(value) {
        this.$3K_1 = value;
        return value
    },
    get_filteredValues: function() { return this.getFilteredOptionsDelegate() },
    set_filteredValues: function(value) {
        this.setFilteredOptionsDelegate(value);
        return value
    },
    getFilteredOptionsDelegate: function() { return this.$32_1 },
    get_isInvalidSearchText: function() { return this.$1v_1 },
    set_isInvalidSearchText: function(value) {
        this.$1v_1 = value;
        return value
    },
    setFilteredOptionsDelegate: function(values) {
        this.$32_1 = values;
        this.$31_1 = new Array(0);
        for (var $v_0 = 0; $v_0 < this.get_options().length; $v_0++)
            if (Array.contains(this.$32_1, this.get_options()[$v_0].Value)) {
                var $v_1 = new Mscrm.EnumOptionJsonWrapper;
                $v_1.Value = this.get_options()[$v_0].Value;
                $v_1.Label = this.get_options()[$v_0].Label;
                Array.add(this.$31_1, $v_1)
            }
    },
    setOptions: function(options) { this.set_options(options) },
    get_chromeBehaviorType: function() { return Mscrm.InlineEditChromeBehavior },
    get_behaviorType: function() { return Mscrm.InlineOptionSetBehavior },
    get_controlType: function() { return Mscrm.InlineFormDataControl },
    $32_1: null,
    $3K_1: false,
    filteredOptionsInputHandler: function(request, response) {
        for (var $v_0 = request.term,
            $v_1 = new Array(0),
            $$arr_4 = this.get_$4g_1(),
            $$len_5 = $$arr_4.length,
            $$idx_6 = 0;
            $$idx_6 < $$len_5;
            ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6], $v_3 = $v_2.Label;
            if ($v_3.toLowerCase().indexOf($v_0.toLowerCase()) >= 0 && !isNullOrEmptyString($v_3)) {
                var $v_4 = {};
                $v_4.label = $v_2.Label;
                $v_4.value = $v_2.Label;
                $v_4.rawValue = $v_2.Value.toString();
                Array.add($v_1, $v_4)
            }
        }
        this.$1v_1 = !$v_1.length;
        response($v_1)
    }
};
Mscrm.InlineControlEditViewBase = function(view) { Mscrm.InlineControlEditViewBase.initializeBase(this, [view]) };
Mscrm.InlineControlEditViewBase.prototype = {
    dispose: function() {
        this.$0_1 = null;
        Mscrm.InlineEditViewBase.prototype.dispose.call(this)
    },
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        this.$0_1 = value;
        this.$4c_1();
        return value
    },
    $4c_1: function() { this.bindViewStateChange() },
    get_editElementId: function() { return null },
    get_selectTextOnEditFocus: function() { return false },
    set_selectTextOnEditFocus: function(value) { return value },
    isEditing: function() { return false },
    $0_1: null
};
Mscrm.CheckBoxControlEditView = function($p0) {
    this.$$d_$7c_3 = Function.createDelegate(this, this.$7c_3);
    Mscrm.CheckBoxControlEditView.initializeBase(this, [$p0])
};
Mscrm.CheckBoxControlEditView.prototype = {
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    get_$2_3: function() { return this.$0_1 },
    setDisabled: function($p0) { this.get_behavedEditElement().disabled = $p0 },
    get_editElementValue: function() { return this.get_behavedEditElement().checked.toString() },
    set_editElementValue: function($p0) {
        this.get_behavedEditElement().checked = Mscrm.Utilities.parseBoolean($p0);
        this.get_view().$0_1.setPropertyWithoutRaisingEvent("EditValue", $p0);
        return $p0
    },
    initializeInputBehavior: function() {
        this.get_editElement().change(this.$$d_$7c_3);
        Mscrm.SimpleInlineControlEditView.prototype.initializeInputBehavior.call(this)
    },
    $7c_3: function($p0) { this.confirm() },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        Mscrm.InlineEditViewBase.prototype.unbindPageClick.call(this);
        this.raiseCommitEvent()
    },
    confirm: function() { this.updateAttribute() },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("input");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-CheckBox");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("style", "ime-mode:auto");
        $v_2.setAttribute("type", "checkbox");
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("value", "on");
        if (Mscrm.Utilities.isSafari()) {
            var $v_4 = this.get_editElementId().replace("_i", ""),
                $v_5 = $get($v_4),
                $v_6 = $v_5.getAttribute("tabindex").toString();
            $v_5.removeAttribute("tabindex");
            $v_2.setAttribute("tabindex", $v_6)
        }
        for (var $v_3 = $v_1, $v_7 = 0;
            $v_7 < $v_3.$20_1.length;
            $v_7++
        ) $v_2.setAttribute(String.format("option_{0}", $v_7), $v_3.$20_1[$v_7].Label);
        if (!IsNull($v_1.get_initialValue())) {
            var $v_8 = this.get_view().$R_2() + "";
            $v_2.checked = $v_8 === "1" ? true : false
        } else $v_2.checked = false;
        if (this.get_view().get_disabled()) $v_2.disabled = true;
        return $P_CRM($v_2)
    },
    createAndAppendEditElementToDom: function() {
        Mscrm.SimpleInlineControlEditView.prototype.createAndAppendEditElementToDom.call(this);
        this.get_editElementWrapper().addClass("ms-crm-Inline-CheckBox")
    }
};
Mscrm.DateTimeControlEditView = function($p0) { Mscrm.DateTimeControlEditView.initializeBase(this, [$p0]) };
Mscrm.DateTimeControlEditView.$8S = function($p0, $p1, $p2) {
    return $p1.get($p1.length - 1) === $p2 && !Mscrm.DateTimeControlEditView.$49($p0)
};
Mscrm.DateTimeControlEditView.$8L = function($p0, $p1, $p2) {
    return $p1.get(0) === $p2 && Mscrm.DateTimeControlEditView.$49($p0)
};
Mscrm.DateTimeControlEditView.$49 = function($p0) { return $p0.shiftKey };
Mscrm.DateTimeControlEditView.$5w = function($p0, $p1, $p2, $p3) {
    var $v_0 = "", $v_1 = " ";
    if (!IsNull($p2)) {
        $v_0 = Mscrm.DateTimeUtility.formatDate($p2);
        $v_1 = timeToString($p2, 0)
    }
    var $v_2 = document.createElement("TR");
    $v_2.appendChild(Mscrm.DateTimeControlEditView.$5v($v_0, $p0.get_imeMode()));
    var $v_3 = document.createElement("TD");
    $v_3.className = "ms-crm-InlineDateTime-HiddenCell";
    $v_2.appendChild($v_3);
    $v_2.appendChild(Mscrm.DateTimeControlEditView.$5r($p1));
    var $v_4 = document.createElement("TD");
    $v_4.className = "ms-crm-InlineDateTime-HiddenCell";
    $v_2.appendChild($v_4);
    var $v_5 = $p0.get_attributeFormat() === "datetime";
    if ($v_5) {
        var $v_8 = $p1 + "Time",
            $v_9 = Mscrm.EditableSelectHelper.createElement($v_8,
                window.LOCID_DATE_SELECT_TIME,
                $v_1,
                $p0.get_imeMode(),
                IsNull($p2),
                Mscrm.DateTimeControlEditView.$6E($v_8, false)),
            $v_A = document.createElement("LABEL");
        $v_A.setAttribute("for", $p1 + "TimeInput");
        $v_A.className = "ms-crm-Hidden";
        XUI.Html.SetText($v_A, window.LOCID_DATE_SELECT_TIME);
        var $v_B = document.createElement("DIV");
        $v_B.appendChild($v_A);
        $v_B.appendChild($v_9);
        var $v_C = document.createElement("TD");
        $v_C.className = "ms-crm-InlineDateTime-TimeCell ms-crm-DateTime-Container-Input";
        $v_C.setAttribute("title", "");
        $v_C.appendChild($v_B);
        $v_2.appendChild($v_C)
    }
    var $v_6 = document.createElement("COLGROUP");
    $v_6.appendChild(Mscrm.EditableSelectHelper.createTableColumn(0));
    $v_6.appendChild(Mscrm.EditableSelectHelper.createTableColumn(45));
    $v_5 && $v_6.appendChild(Mscrm.EditableSelectHelper.createTableColumn(0));
    var $v_7 = document.createElement("TABLE");
    $v_7.setAttribute("cellspacing", "0");
    $v_7.setAttribute("cellpadding", "0");
    $v_7.id = $p1;
    $v_7.setAttribute("format", $v_5 ? "datetime" : "date");
    $v_7.setAttribute("initialValue", Mscrm.InlineEditUtilities.getRawValue($p3));
    $v_7.setAttribute("initialShowTime", $v_5.toString());
    $v_7.setAttribute("initialAllowBlankDate", "true");
    $v_7.setAttribute("initialDisableInit", "false");
    $v_7.setAttribute("initialAllDayDisplayMode", "false");
    $v_7.setAttribute("initialAllowTimeEdit", "true");
    $v_7.setAttribute("cacheValuesOnClient", "false");
    $v_7.setAttribute("req", $p0.get_requiredLevel().toString());
    $v_7.setAttribute("attrName", $p0.get_logicalName());
    $v_7.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($p0.get_privilegeMask()));
    $v_7.setAttribute("attrFormat", $v_5 ? "datetime" : "date");
    $v_7.className = "ms-crm-DateTime ms-crm-InlineDateTime";
    $v_7.appendChild($v_6);
    $v_7.appendChild($v_2);
    return $v_7
};
Mscrm.DateTimeControlEditView.$5v = function($p0, $p1) {
    var $v_0 = document.createElement("INPUT");
    $v_0.setAttribute("type", "text");
    $v_0.setAttribute("value", "");
    $v_0.setAttribute("id", "DateInput");
    $v_0.setAttribute("tabindex", "0");
    $v_0.setAttribute("title", "");
    if (Mscrm.Utilities.isEdge()) $v_0.setAttribute("style", "-ms-ime-mode:" + $p1);
    else $v_0.setAttribute("style", "ime-mode:" + $p1);
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Input");
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-DateTime-Container-Input");
    $v_0.value = $p0;
    var $v_1 = document.createElement("TD");
    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Input-Container");
    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-DateTime-Container");
    $v_1.appendChild($v_0);
    return $v_1
};
Mscrm.DateTimeControlEditView.$5r = function($p0) {
    var $v_0 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/inlineedit/calendar_icon.png"));
    $v_0.id = $p0 + "img";
    $v_0.setAttribute("alt", window.LOCID_DATE_SELECT_DATE);
    $v_0.setAttribute("title", window.LOCID_DATE_SELECT_DATE);
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-DateTime");
    Sys.UI.DomElement.addCssClass($v_0, "ms-crm-InlineDateTime-Icon");
    var $v_1 = document.createElement("DIV");
    $v_1.id = $p0 + "CalContainer";
    $v_1.style.width = "0px";
    $v_1.style.height = "0px";
    $v_1.style.position = "relative";
    $v_1.style.lineHeight = "0px";
    $v_1.style.display = "inline";
    var $v_2 = document.createElement("TD");
    Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineDateTime-IconCell");
    $v_2.appendChild($v_0);
    $v_2.appendChild($v_1);
    return $v_2
};
Mscrm.DateTimeControlEditView.$6E = function($p0, $p1) {
    for (var $v_0 = new Array(0), $v_1 = Mscrm.SelectOptionsGenerator.generateForTimeControl($p1), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = $v_1[$v_2];
        Array.add($v_0, new Mscrm.EditableSelectOption($p0 + "." + $v_3, $v_3))
    }
    return $v_0
};
Mscrm.DateTimeControlEditView.prototype = {
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    get_defaultEditValue: function() {
        var $v_0 = this.get_editControlBehavior().get_initialValue();
        if (!IsNull($v_0) && !isNaN($v_0.getTime()))
            return Mscrm.InlineDateTimeAttribute
                .formatDisplayValue($v_0, this.get_$2_3().$4_0.get_attributeFormat(), "\n");
        return null
    },
    set_defaultEditValue: function($p0) {
        this.get_view().tryUpdateValueElementText($p0);
        return $p0
    },
    get_editElementValue: function() {
        var $v_0 = this.get_editElement().find("input"), $v_1 = $v_0.first().val();
        if ($v_0.length > 1) $v_1 += "\n" + $v_0.last().val();
        if (isNullOrEmptyString($v_1.trim())) return "";
        return $v_1
    },
    set_editElementValue: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = this.get_editElement().find("input"), $v_1 = $p0.split("\n");
            $v_0.first().val($v_1[0]);
            $v_1.length > 1 && $v_0.length > 1 && $v_0.last().val($v_1[1])
        }
        return $p0
    },
    get_$2_3: function() { return this.$0_1 },
    get_$11_3: function() {
        var $v_0 = this.get_editControlBehavior();
        return $v_0
    },
    focusEditElement: function() {
        if (this.get_editElement().is(":hidden") || this.get_editElement().is(":disabled")) return;
        this.get_$11_3().setFocus()
    },
    updateEditValue: function() { this.get_$2_3().set_editValue(this.get_editElementValue()) },
    editElementValueComparer: function() {
        return this.get_editElementValue() !== this.$0_1.get_attribute().get_displayValue()
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        var $v_0 = this.get_$2_3();
        $v_0.set_defaultEditValue($v_0.$I_0);
        this.get_editElementWrapper().trigger("state-commit");
        this.get_editControlBehavior().resetDefault()
    },
    createEditElement: function() {
        return $P_CRM(Mscrm.DateTimeControlEditView.$5w(this.get_$2_3().$4_0,
            this.get_editElementId(),
            this.get_view().$R_2(),
            this.get_$2_3().$4_0.get_initialValue()))
    },
    createControlBehavior: function() {
        var $v_0 = $get(this.get_editElementId() + "img");
        Mscrm.CrmUIComponent.crmCreate(Mscrm.InlineDateTimeImage,
            { dateTimeControlId: this.get_editElementId() },
            null,
            null,
            $v_0);
        var $v_1 = $get(this.get_editElementId() + "Time");
        !IsNull($v_1) && Mscrm.CrmUIComponent.crmCreate(Mscrm.InlineEditableSelectBehavior, null, null, null, $v_1);
        Mscrm.SimpleInlineControlEditView.prototype.createControlBehavior.call(this)
    },
    onEditElementTabKeyDown: function($p0) {
        var $v_0 = $P_CRM('input[disabled!="true"]', this.get_editElement());
        if (!$v_0.length) {
            Mscrm.SimpleInlineControlEditView.prototype.onEditElementTabKeyDown.call(this, $p0);
            return
        }
        var $v_1 = document.activeElement;
        if (Mscrm.DateTimeControlEditView
            .$8L($p0, $v_0, $v_1) ||
            Mscrm.DateTimeControlEditView
            .$8S($p0, $v_0, $v_1)) Mscrm.SimpleInlineControlEditView.prototype.onEditElementTabKeyDown.call(this, $p0);
        else if (this.$8R_3($p0, $v_0, $v_1)) {
            var $v_2 = !this.get_$11_3().get_isTimeInputEnabled(), $v_3 = this.get_isValid();
            if (!$v_3) Mscrm.SimpleInlineControlEditView.prototype.onEditElementTabKeyDown.call(this, $p0);
            else if (!this.get_$11_3()
                .get_isTimeInputEnabled())
                Mscrm.SimpleInlineControlEditView.prototype.onEditElementTabKeyDown.call(this, $p0);
            else $v_2 && this.get_$11_3().get_isTimeInputEnabled() && $P_CRM.browser.mozilla && $p0.preventDefault()
        }
    },
    $8R_3: function($p0, $p1, $p2) { return $p2 === $p1[0] && !Mscrm.DateTimeControlEditView.$49($p0) },
    postCreateEditElement: function() {
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        this.$84_3()
    },
    $84_3: function() {
        if (this.get_$2_3().$25_1 &&
            !isNullOrEmptyString(this.$0_1.get_attribute().get_displayValue()) &&
            isNullOrEmptyString(this.get_view().$k_2)) {
            var $v_0 = this.$0_1.get_attribute().get_displayValue(), $v_1 = Mscrm.DateTimeUtility.parseDate($v_0, true);
            if (IsNull($v_1)) return;
            this.get_view().get_layout().appendAndWrapValueElementMask()
        }
    },
    renderAriaAttributesForEditElement: function() {
        var $v_0 = this.get_editElement().find("input");
        $v_0.first().attr("aria-labelledby",
            String.format("{0} {1}", this.get_view().get_labelElementId(), this.get_view().get_warningElementId()))
    }
};
Mscrm.DurationControlEditView = function($p0) { Mscrm.DurationControlEditView.initializeBase(this, [$p0]) };
Mscrm.DurationControlEditView.$5z = function($p0) {
    for (var $v_0 = new Array(0), $v_1 = Mscrm.DateTimeUtility.generateForDurationControl(), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = $v_1[$v_2];
        Array.add($v_0, new Mscrm.EditableSelectOption($p0 + "." + $v_3, $v_3))
    }
    return $v_0
};
Mscrm.DurationControlEditView.prototype = {
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    get_defaultEditValue: function() {
        var $v_0 = this.get_editControlBehavior().get_defaultValue();
        if (!IsNull($v_0) && !isNaN($v_0)) return Mscrm.NumberUtility.formatDuration($v_0);
        return null
    },
    set_defaultEditValue: function($p0) {
        this.get_view().tryUpdateValueElementText($p0);
        return $p0
    },
    onEditElementClick: function($p0) {
        Mscrm.SimpleInlineControlEditView.prototype.onEditElementClick.call(this, $p0);
        if (Mscrm.Utilities.isMobileRefresh() && $p0.target.tagName === "IMG") {
            var $v_0 = $P_CRM("input:focus");
            $v_0.blur()
        }
    },
    get_editElementValue: function() {
        var $v_0 = this.get_editElement().find("input"), $v_1 = $v_0.first().val();
        return $v_1
    },
    set_editElementValue: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = this.get_editElement().find("input");
            $v_0.first().val($p0)
        }
        return $p0
    },
    get_$2_3: function() { return this.$0_1 },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit");
        var $v_0 = this.get_editControlBehavior();
        $v_0.set_defaultValue($v_0.parseDuration(this.get_$2_3().$1o_0))
    },
    createEditElement: function() {
        return $P_CRM(this.$60_3(this.get_$2_3().$4_0,
            this.get_editElementId(),
            this.get_view().$R_2(),
            this.get_$2_3().$4_0.get_initialValue()))
    },
    createControlBehavior: function() {
        Mscrm.CrmUIComponent.crmCreate(Mscrm.InlineEditableSelectBehavior,
            null,
            null,
            null,
            $get(this.get_editElementId() + "Select"));
        Mscrm.SimpleInlineControlEditView.prototype.createControlBehavior.call(this)
    },
    updateEditValue: function() { this.get_$2_3().set_editValue(this.get_editElementValue()) },
    editElementValueComparer: function() {
        return this.get_editElementValue() !== this.$0_1.get_attribute().get_displayValue()
    },
    $60_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = " ";
        if (!IsNull($p2)) $v_0 = $p2;
        var $v_1 = document.createElement("TR"),
            $v_2 = $p1 + "Select",
            $v_3 = Mscrm.EditableSelectHelper.createElement($v_2,
                window.LOCID_SELECTBOX_BUTTON_ALT,
                $v_0,
                $p0.get_imeMode(),
                false,
                Mscrm.DurationControlEditView.$5z($v_2)),
            $v_4 = document.createElement("LABEL");
        $v_4.setAttribute("for", "new_duration");
        $v_4.className = "ms-crm-Hidden";
        XUI.Html.SetText($v_4, window.LOCID_DATE_SELECT_TIME);
        var $v_5 = document.createElement("DIV");
        $v_5.appendChild($v_4);
        $v_5.appendChild($v_3);
        var $v_6 = document.createElement("TD");
        $v_6.appendChild($v_5);
        $v_1.appendChild($v_6);
        var $v_7 = document.createElement("TABLE");
        $v_7.setAttribute("cellspacing", "0");
        $v_7.setAttribute("cellpadding", "0");
        $v_7.id = $p1;
        $v_7.setAttribute("format", "duration");
        $v_7.setAttribute("initialValue", Mscrm.InlineEditUtilities.getRawValue($p3));
        $v_7.setAttribute("allowValueEdit", "true");
        $v_7.setAttribute("req", $p0.get_requiredLevel().toString());
        $v_7.setAttribute("attrName", $p0.get_logicalName());
        $v_7.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($p0.get_privilegeMask()));
        $v_7.setAttribute("attrFormat", "duration");
        $v_7.setAttribute("MinMinutes", this.get_$2_3().get_minValue().toString());
        $v_7.setAttribute("MaxMinutes", this.get_$2_3().get_maxValue().toString());
        $v_7.style.width = "100%";
        $v_7.style.tableLayout = "fixed";
        $v_7.className = "ms-crm-Duration ms-crm-InlineDuration";
        $v_7.appendChild($v_1);
        return $v_7
    },
    focusEditElement: function() {
        var $v_0 = this.get_editControlBehavior();
        $v_0.setFocus()
    }
};
Mscrm.EmailAddressControlEditView = function($p0) { Mscrm.EmailAddressControlEditView.initializeBase(this, [$p0]) };
Mscrm.EmailAddressControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_$3U_3: function() {
        return Sys.UI.Behavior.getBehaviorsByType(this.get_editElement().get(0), this.get_$2_3().get_behaviorType())[0]
    },
    get_isDirty: function() { return !IsNull(this.get_$3U_3()) && this.get_$3U_3().get_isDirty() },
    get_isValid: function() { return IsNull(this.get_$3U_3()) || this.get_$3U_3().get_isValidProxy() },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("input");
        $v_2.setAttribute("id", this.get_editElementId());
        window.UseTabletExperience && $v_2.setAttribute("type", "email");
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("maxLength", $v_0.get_maxLength().toString());
        $v_2.setAttribute("title", "");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Email-Address");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_3)) {
            $v_2.value = $v_3;
            $v_2.setAttribute("defaultValue", $v_3)
        }
        return $P_CRM($v_2)
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.EmailBodyControlEditView = function($p0) {
    this.$$d_$7Z_3 = Function.createDelegate(this, this.$7Z_3);
    this.$$d_onEditElementClick = Function.createDelegate(this, this.onEditElementClick);
    Mscrm.EmailBodyControlEditView.initializeBase(this, [$p0])
};
Mscrm.EmailBodyControlEditView.prototype = {
    $1J_3: null,
    $2z_3: null,
    $41_3: null,
    $c_3: null,
    dispose: function() {
        var $v_0 = this.get_editControlBehavior();
        if (!$v_0.get_isDisposed() && !IsNull($v_0.get_htmlBar())) {
            var $v_1 = $P_CRM($v_0.get_htmlBar());
            $v_1.unbind("click", this.$$d_onEditElementClick)
        }
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValidProxy()
    },
    get_editElementValue: function() { return this.get_editElement()[0].innerHTML },
    createEditElement: function() {
        var $v_0 = this.get_view().$1e_3;
        if (IsNull($v_0)) $v_0 = this.get_view().get_valueElement().find("[mainElement='true']").first().get(0);
        var $v_1 = Mscrm.InlineEditDataService.get_formEntity();
        this.$2z_3 = $v_1.get_typeName();
        this.$1J_3 = $v_1.get_recordId();
        var $v_2 = $v_0.getElementsByTagName("iframe")[0];
        this.$41_3 = CrmEncodeDecode.CrmUrlDecode($v_2.getAttribute("url"));
        var $v_3 = window._extraParams;
        if (!IsNull($v_3)) {
            var $v_5 = $P_CRM.parseJSON($v_3);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && !Mscrm.InternalUtilities.JSTypes.isNull($v_5["id"])) {
                this.$1J_3 = $v_5["id"];
                this.$2z_3 = $v_5["entityType"]
            }
        }
        var $v_4 = new Sys.StringBuilder(this.$41_3);
        if (-1 !== $v_4.toString().indexOf("?")) $v_4.append("&id=");
        else $v_4.append("?id=");
        $v_4.append(this.$1J_3);
        $v_4.append("&entityType=");
        $v_4.append(this.$2z_3);
        $v_2.setAttribute("url", $v_4.toString());
        this.$c_3 = $get("trBlockMsg", $v_0);
        return $P_CRM($v_0)
    },
    createAndAppendEditElementToDom: function() {
        Mscrm.SimpleInlineControlEditView.prototype.createAndAppendEditElementToDom.call(this);
        this.get_editElementWrapper().addClass("ms-crm-Inline-Edit-email-body")
    },
    initializeInputBehavior: function() {
        var $v_0 = this.get_editControlBehavior();
        $v_0.add_contentReady(this.$$d_$7Z_3)
    },
    postCreateEditElement: function() {},
    bindEditElementClick: function() {
        Mscrm.InlineEditViewBase.prototype.bindEditElementClick.call(this);
        if (!IsNull(this.get_editControlBehavior().get_htmlBar())) {
            var $v_0 = $P_CRM(this.get_editControlBehavior().get_htmlBar());
            $v_0.bind("click", this.$$d_onEditElementClick)
        }
    },
    $7Z_3: function($p0, $p1) {
        var $v_0 = this.get_editControlBehavior();
        $v_0.remove_contentReady(this.$$d_$7Z_3);
        this.set_editElement($P_CRM($v_0.get_emailBody().document.body));
        Mscrm.SimpleInlineControlEditView.prototype.initializeInputBehavior.call(this);
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        var $$t_5 = this, $v_1 = function($p1_0) { window.setTimeout(function() { $$t_5.$5M_3() }, 0) };
        this.get_view().get_dataAttribute().addOnChange($v_1, false)
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_view().get_viewModel().set_defaultEditValue(this.get_view().get_viewModel().$I_0);
        this.$5M_3();
        this.raiseCommitEvent()
    },
    $5M_3: function() {
        if (!isNullOrEmptyString(this.$c_3.innerHTML)) this.$c_3.innerHTML = "";
        var $v_0 = this.get_view().showUnsafeScriptWarning(this.$c_3, true);
        if (!IsNull($v_0)) this.$c_3 = $v_0
    },
    onEditElementKeyEvent: function($p0) {
        if (IsNull($p0)) return;
        switch ($p0.which) {
        case 9:
            this.onEditElementTabKeyDown($p0);
            break;
        default:
            this.handleDefaultKeyDownEvent($p0);
            this.handleDefaultKeyPressEvent($p0);
            Mscrm.InlineEditUtilities.set_activeControl(this.get_view());
            break
        }
    },
    onEditElementClick: function($p0) {
        !IsNull(Mscrm.InlineEditUtilities.get_activeControl()) && Mscrm.InlineEditUtilities.get_activeControl().blur();
        Mscrm.InlineEditUtilities.set_activeControl(this.get_view());
        this.get_editElement().focus();
        this.bindPageClick()
    }
};
Mscrm.LookupControlEditView = function($p0) {
    this.$$d_$5m_3 = Function.createDelegate(this, this.$5m_3);
    this.$$d_$6P_3 = Function.createDelegate(this, this.$6P_3);
    this.$$d_$7j_3 = Function.createDelegate(this, this.$7j_3);
    this.$$d_$7Q_3 = Function.createDelegate(this, this.$7Q_3);
    this.$$d_$5X_3 = Function.createDelegate(this, this.$5X_3);
    Mscrm.LookupControlEditView.initializeBase(this, [$p0]);
    this.$r_3 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList)
};
Mscrm.LookupControlEditView.prototype = {
    $3t_3: "ms-crm-Lookup",
    $1X_3: null,
    $1W_3: null,
    $J_3: null,
    $3J_3: true,
    $r_3: null,
    get_eventHandlerList: function() { return this.$r_3 },
    get_preSearchEvent: function() { return "PreSearch" },
    get_lookupImageClass: function() { return this.$3t_3 },
    set_lookupImageClass: function($p0) {
        this.$3t_3 = $p0;
        return $p0
    },
    get_viewModel: function() { return this.$0_1 },
    get_$i_3: function() {
        if (Mscrm.FormInputControl.IPresenceLookupBehavior.isInstanceOfType(this.get_editControlBehavior()) &&
            Mscrm.HeaderTileLookupLayout.isInstanceOfType(this.get_view().get_layout())) {
            var $v_0 = this.get_editControlBehavior();
            $v_0.set_isHeaderTile(true)
        }
        return this.get_editControlBehavior()
    },
    dispose: function() {
        if (!this.get_$i_3().get_isDisposed()) {
            this.get_$i_3().remove_setAdditionalParams(this.$$d_$5X_3);
            this.get_$i_3().remove_afterSelect(this.$$d_$7Q_3)
        }
        !IsNull(this.$J_3) && this.removeClickHandler(this.$J_3);
        this.$1X_3 = null;
        this.$1W_3 = null;
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this);
        this.$r_3.clearAllHandler()
    },
    $5X_3: function($p0, $p1) {
        var $v_0 = this.$r_3.getHandler("PreSearch");
        !IsNull($v_0) && $v_0($p0, $p1)
    },
    $7O_3: function($p0) {
        var $v_0 = document.createElement("td");
        Sys.UI.DomElement.addCssClass($v_0, "Lookup_RenderButton_td");
        $v_0.style.verticalAlign = "top";
        $v_0.style.width = "22px";
        var $v_1 = document.createElement("img");
        this.setImage($v_1);
        $v_1.setAttribute("id", $p0);
        $v_1.setAttribute("alt", "");
        if ("multi" === this.get_viewModel().get_lookupStyle()
        ) Sys.UI.DomElement.addCssClass($v_1, "ms-crm-InlineLookupEdit ms-crm-Inline-MultiLookupEdit");
        else Sys.UI.DomElement.addCssClass($v_1, "ms-crm-InlineLookupEdit");
        if (this.get_viewModel().$4_0.get_isDisabled()) {
            $v_1.style.cursor = "default";
            $v_1.setAttribute("lookupdisabled", "true");
            Sys.UI.DomElement.addCssClass($v_1, this.get_lookupImageClass());
            $v_1.setAttribute("isInline", "true")
        }
        this.addImageExpandos($v_1);
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement("a");
        $v_2.setAttribute("href", "#");
        $v_2.setAttribute("onclick", "Mscrm.Utilities.click(previousSibling);");
        $v_2.setAttribute("tabindex", "-1");
        $v_0.appendChild($v_2);
        return $v_0
    },
    setImage: function($p0) { $p0.setAttribute("src", window.CDNURL + "/_imgs/search_normal.gif") },
    addImageExpandos: function($p0) {
        var $v_0 = this.get_viewModel(), $v_1 = this.get_chromeElement(), $v_2 = $v_0.get_lookupTypes();
        if (isNullOrEmptyString($v_2)) {
            this.get_view().set_disabled(true);
            $v_2 = ""
        }
        $p0.setAttribute("lookuptypes", $v_2);
        $p0.setAttribute("createpermissiondictionary", $v_0.get_createPermissionDictionary());
        this.$5Y_3($p0);
        $p0.setAttribute("crmattributeid", $v_0.get_crmAttributeId());
        $p0.setAttribute("lookuptypenames", $v_0.get_lookupTypeNames());
        $p0.setAttribute("lookuptypeIcons", $v_0.get_lookupTypeIcons());
        $p0.setAttribute("lookupstyle", $v_0.get_lookupStyle());
        var $v_3 = $v_1.children(".ms-crm-Inline-Value").find(".ms-crm-Lookup-Item-Read").attr("isDeDupLookup");
        if (isNullOrEmptyString($v_3)) $v_3 = $v_1.attr("isDeDupLookup");
        !isNullOrEmptyString($v_3) && $p0.setAttribute("isDeDupLookup", $v_3);
        $p0.setAttribute("defaulttype", $v_0.get_defaultType().toString());
        $p0.setAttribute("autoresolve", "1");
        $p0.setAttribute("showproperty", "1");
        $p0.setAttribute("resolveemailaddress", $v_1.attr("resolveEmailAddress"));
        $p0.setAttribute("allowUnresolvedPartiesOnEmailSend", $v_1.attr("allowUnresolvedPartiesOnEmailSend"));
        $p0.setAttribute("attrName", $v_0.$4_0.get_logicalName());
        $p0.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_0.$4_0.get_privilegeMask()));
        $p0.setAttribute("isInline", "true");
        $p0.setAttribute("inlineViewIds", $v_1.attr("inlineViewIds"));
        $p0.setAttribute("data-fdeid", $v_1.attr("data-fdeid"));
        var $v_4 = $v_1.attr("data-controlmode");
        !isNullOrEmptyString($v_4) && $p0.setAttribute("data-controlmode", $v_4);
        var $v_5 = $v_1.attr("allowFilterOff");
        !isNullOrEmptyString($v_5) && $p0.setAttribute("allowFilterOff", $v_5);
        var $v_6 = $v_1.attr("disableMru");
        !isNullOrEmptyString($v_6) && $p0.setAttribute("disableMru", $v_6);
        var $v_7 = $v_1.attr("disableQuickFind");
        !isNullOrEmptyString($v_7) && $p0.setAttribute("disableQuickFind", $v_7);
        var $v_8 = $v_1.attr("disableViewPicker");
        !isNullOrEmptyString($v_8) && $p0.setAttribute("disableViewPicker", $v_8);
        var $v_9 = $v_1.attr("availableViewIds");
        !isNullOrEmptyString($v_9) && $p0.setAttribute("availableViewIds", $v_9);
        var $v_A = $v_1.attr("DefaultViewId");
        !isNullOrEmptyString($v_A) && $p0.setAttribute("DefaultViewId", $v_A);
        var $v_B = $v_1.attr("lookupbrowse");
        if (!isNullOrEmptyString($v_B)) $p0.setAttribute("lookupbrowse", $v_B);
        else $p0.setAttribute("lookupbrowse", $v_0.get_lookupBrowse() ? "1" : "0");
        var $v_C = $v_1.attr("lookupDialogMultipleSelect");
        !isNullOrEmptyString($v_C) && $p0.setAttribute("lookupDialogMultipleSelect", $v_C);
        var $v_D = $v_1.attr("RelationshipId");
        if (!isNullOrEmptyString($v_D)) {
            $p0.setAttribute("RelationshipId", $v_D);
            $p0.setAttribute("DependantAttributeName", $v_1.attr("DependantAttributeName"));
            $p0.setAttribute("DependantAttributeType", $v_1.attr("DependantAttributeType"))
        }
    },
    isItemAmbiguous: function() {
        var $v_0 = this.get_editControlBehavior();
        if (null !== $v_0) {
            var $v_1 = $v_0.Items(false, true, false, false, false);
            if (!IsNull($v_1) && $v_1.length > 0 && $v_1[0].category === 1) return true
        }
        return false
    },
    initializeInputBehavior: function() {
        Mscrm.SimpleInlineControlEditView.prototype.initializeInputBehavior.call(this);
        this.get_$i_3().add_afterSelect(this.$$d_$7Q_3);
        this.get_$i_3().add_onSetValue(this.$$d_$7j_3)
    },
    $7j_3: function($p0, $p1) { this.updateReadLookupHtml() },
    $7Q_3: function($p0, $p1) {
        this.get_viewModel().setPropertyWithoutRaisingEvent("EditValue", this.get_editElementValue());
        this.confirm();
        this.get_editControlBehavior().get_isInlineMultiLookup() && this.$5k_3() && window.setTimeout(this.$$d_$6P_3, 0)
    },
    $5k_3: function() {
        var $v_0 = this.get_editControlBehavior().Items(false, true, false, false, false);
        if (!IsNull($v_0) &&
            $v_0.length > 0 &&
            ($v_0[$v_0.length - 1].category === 1 ||
                $v_0[$v_0.length - 1].category === 2 ||
                $v_0[$v_0.length - 1].category === 3)) return false;
        return true
    },
    $6P_3: function() { this.get_view().get_valueElement().click() },
    $4s_3: function() {
        var $v_0 = this.get_view().$R_2();
        return $v_0
    },
    getInitialValue: function() {
        var $v_0 = this.$4s_3();
        return IsNull($v_0) ? null : $v_0[0]
    },
    addClickHandler: function($p0) {},
    removeClickHandler: function($p0) {},
    $5Y_3: function($p0) {
        var $v_0 = this.get_viewModel().$4_0.get_initialValue();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0["properties"];
            !IsNull($v_1) && this.$4U_3($v_1, $p0)
        }
    },
    $4S_3: function($p0) {
        var $v_0 = this.$4s_3();
        if (!IsNull($v_0) && $v_0.length > 0)
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) $p0.appendChild(this.$5W_3($v_0[$v_1]))
    },
    $5W_3: function($p0) {
        var $v_0 = document.createElement("li");
        $v_0.style.display = "inline";
        $v_0.style.whiteSpace = "nowrap";
        if ("multi" === this.get_viewModel().get_lookupStyle()) {
            XUI.Html.SetFloat($v_0, Mscrm.Utilities.get_isLeftToRight() ? "left" : "right");
            $v_0.style.marginBottom = "3px";
            if (Mscrm.Utilities.get_isLeftToRight()) $v_0.style.marginRight = "3px";
            else $v_0.style.marginLeft = "3px"
        }
        var $v_1 = document.createElement("span");
        $v_1.setAttribute("contentEditable", "false");
        $v_1.setAttribute("title", $p0.name);
        $v_1.setAttribute("oid", $p0.id);
        if (!isNullOrEmptyString($p0.processId) && !isNullOrEmptyString($p0.processTimestamp)) {
            $v_1.setAttribute("processid", $p0.processId);
            $v_1.setAttribute("processts", $p0.processTimestamp)
        }
        $v_1.setAttribute("otype", $p0.type);
        $v_1.setAttribute("otypename", $p0.typename);
        $v_1.setAttribute("callback", $p0.callback);
        $v_1.setAttribute("isInlineLookup", "true");
        !IsNull($p0.activityPartyId) && $v_1.setAttribute("activitypartyid", $p0.activityPartyId);
        if (!IsNull($p0.displayClass)) Sys.UI.DomElement.addCssClass($v_1, $p0.displayClass);
        else Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Lookup-Item");
        var $v_2 = Number.parseInvariant($p0.type), $v_3 = Mscrm.Utilities.isIE() && ($v_2 === 2 || $v_2 === 8);
        if ("multi" !== this.get_viewModel().get_lookupStyle() &&
            (this.get_viewModel().get_lookupTypes().split(",").length > 1 || $v_3)) {
            var $v_5 = document.createElement("img");
            $v_5.setAttribute("alt", "");
            Sys.UI.DomElement.addCssClass($v_5, "ms-crm-Lookup-Item");
            $v_5.setAttribute("src", Mscrm.Utilities.getIconPath($v_2));
            $v_1.appendChild($v_5)
        }
        var $v_4 = document.createElement("span");
        Sys.UI.DomElement.addCssClass($v_4, "ms-crm-LookupItem-Name");
        $v_4.setAttribute("wrapper", "true");
        XUI.Html.SetText($v_4, $p0.name);
        if ("multi" === this.get_viewModel().get_lookupStyle()) {
            $v_1.style.backgroundColor = "rgb(204, 227, 244)";
            $v_1.setAttribute("onclick",
                String
                .format("Mscrm.FormControlInputBehavior.GetBehavior('{0}').selectInlineMultiLookupItem(new Sys.UI.DomEvent(event))", this.get_chromeElement().attr("id") + "_i"));
            $v_1.setAttribute("onkeydown",
                String
                .format("Mscrm.FormControlInputBehavior.GetBehavior('{0}').keyDownInlineMultiLookupItem(new Sys.UI.DomEvent(event))", this.get_chromeElement().attr("id") + "_i"));
            var $v_6 = IsNull($p0.onclick) ? $p0.callback : $p0.onclick;
            $v_6 = IsNull($v_6) ? "openlui(new Sys.UI.DomEvent(event))" : $v_6;
            $v_1.setAttribute("onCtrlEnter", $v_6);
            $v_1.setAttribute("ondblclick", $v_6);
            $v_1.setAttribute("tabIndex", "0");
            var $v_7 = document.createElement("span");
            $v_7.setAttribute("contentEditable", "false");
            $v_7.setAttribute("unselectable", "on");
            $v_7.setAttribute("wrapper", "true");
            $v_7.appendChild($v_4);
            $v_1.appendChild($v_7);
            var $v_8 = document.createElement("span");
            Sys.UI.DomElement.addCssClass($v_8, "ms-crm-LookupItem-Seperator");
            $v_8.setAttribute("wrapper", "true");
            XUI.Html.SetText($v_8, ";");
            $v_1.appendChild($v_8)
        } else {
            $v_1.setAttribute("onclick", "openlui(new Sys.UI.DomEvent(event))");
            $v_1.appendChild($v_4)
        }
        $v_0.appendChild($v_1);
        return $v_0
    },
    createEditElement: function() {
        this.$J_3 = document.createElement("div");
        this.$J_3.setAttribute("id", this.get_chromeElement().attr("id") + "_lookupDiv");
        this.$J_3.setAttribute("role", "list");
        this.$J_3.setAttribute("ime-mode", "auto");
        Sys.UI.DomElement.addCssClass(this.$J_3, "ms-crm-Lookup ms-crm-InlineLookupEdit");
        this.$J_3.setAttribute("tabindex", "0");
        this.$J_3.setAttribute("aria-labelledby", this.get_chromeElement().attr("id") + "_lookupedit");
        this.$J_3.setAttribute("aria-label",
            this.get_view().get_labelElementValue() + " " + this.get_viewModel().$I_0
            ? CrmEncodeDecode.CrmHtmlEncode(this.get_viewModel().$I_0)
            : "");
        this.addClickHandler(this.$J_3);
        if (this.get_viewModel().$4_0.get_isDisabled()) {
            Sys.UI.DomElement.addCssClass(this.$J_3, "ms-crm-ReadOnly");
            Sys.UI.DomElement.addCssClass(this.$J_3, " ms-crm-Lookup-ReadOnly")
        }
        switch (this.get_viewModel().$4_0.get_requiredLevel()) {
        case 2:
            break;
        case 3:
            break;
        case 0:
        default:
            break
        }
        this.$J_3.setAttribute("tabindex", "0");
        var $v_0 = document.createElement("ul");
        if ("multi" === this.get_viewModel().get_lookupStyle()) {
            this.$J_3.style.overflowY = "auto";
            if (Mscrm.Utilities.get_isLeftToRight()) this.$J_3.style.paddingLeft = "3px";
            else this.$J_3.style.paddingRight = "3px";
            this.$J_3.style.paddingTop = "3px";
            this.$J_3.style.paddingBottom = "0px";
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-InlineLookupEdit ms-crm-InlineMultiLookupEdit");
            this.$4S_3($v_0);
            var $v_7 = document.createElement("li");
            XUI.Html.SetFloat($v_7, Mscrm.Utilities.get_isLeftToRight() ? "left" : "right");
            $v_7.style.whiteSpace = "nowrap";
            var $v_8 = document.createElement("input");
            $v_8.style.border = "0px";
            $v_8.setAttribute("id", this.get_chromeElement().attr("id") + "_ledit_multi");
            $v_7.appendChild($v_8);
            $v_0.appendChild($v_7)
        } else {
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-InlineLookupEdit");
            this.$4S_3($v_0)
        }
        this.$J_3.appendChild($v_0);
        this.$1W_3 = document.createElement("div");
        Sys.UI.DomElement.addCssClass(this.$1W_3, "ms-crm-Hidden-NoBehavior");
        this.$1W_3.setAttribute("id", this.get_chromeElement().attr("id") + "_lookupedit");
        this.$1X_3 = document.createElement("label");
        Sys.UI.DomElement.addCssClass(this.$1X_3, "ms-crm-Hidden-NoBehavior");
        this.$1X_3.setAttribute("for", this.get_chromeElement().attr("id") + "_ledit");
        var $v_1 = document.createElement("input");
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Hidden-NoBehavior");
        $v_1.setAttribute("ime-mode", "auto");
        $v_1.setAttribute("type", "text");
        $v_1.setAttribute("id", this.get_chromeElement().attr("id") + "_ledit");
        $v_1.setAttribute("maxlength", "1000");
        "multi" === this.get_viewModel().get_lookupStyle() && $v_1.setAttribute("display", "none");
        var $v_2 = document.createElement("td");
        $v_2.setAttribute("vAlign", "top");
        $v_2.appendChild(this.$J_3);
        $v_2.appendChild(this.$1W_3);
        $v_2.appendChild(this.$1X_3);
        $v_2.appendChild($v_1);
        var $v_3 = document.createElement("td");
        if ("multi" === this.get_viewModel().get_lookupStyle()
        ) Sys.UI.DomElement.addCssClass($v_3, "ms-crm-InlineLookupEdit-Box ms-crm-InlineMultiLookupEdit-Box");
        else Sys.UI.DomElement.addCssClass($v_3, "ms-crm-InlineLookupEdit-Box");
        var $v_4 = document.createElement("tr");
        $v_4.appendChild($v_2);
        $v_4.appendChild($v_3);
        $v_4.appendChild(this.$7O_3(this.get_chromeElement().attr("id") + "_i"));
        var $v_5 = document.createElement("TBODY");
        $v_5.appendChild($v_4);
        var $v_6 = document.createElement("table");
        $v_6.setAttribute("id", this.get_chromeElement().attr("id") + "_lookupTable");
        $v_6.setAttribute("cellpadding", "0");
        $v_6.setAttribute("cellspacing", "0");
        $v_6.setAttribute("lookupid", this.get_chromeElement().attr("id"));
        $v_6.className = "ms-crm-Lookup";
        $v_6.style.width = "100%";
        $v_6.style.tableLayout = "fixed";
        $v_6.appendChild($v_5);
        return $P_CRM($v_6)
    },
    $4U_3: function($p0, $p1) {
        if ("lookuptypes" in $p0) {
            var $v_0 = $p0["lookuptypes"];
            if (isNullOrEmptyString($v_0)) $v_0 = this.get_viewModel().get_lookupTypes();
            if (isNullOrEmptyString($v_0)) {
                this.get_view().set_disabled(true);
                $v_0 = ""
            }
            $p1.setAttribute("lookuptypes", $v_0)
        }
        "createpermissiondictionary" in $p0 &&
            $p1.setAttribute("createpermissiondictionary", $p0["createpermissiondictionary"])
    },
    renderLabelValueForEditElement: function() {
        var $v_0 = "";
        switch (this.get_viewModel().get_requiredLevel()) {
        case 3:
            $v_0 = window.LOCID_FORM_RECOMMENDED_ALT;
            break;
        case 1:
        case 2:
            $v_0 = window.LOCID_FORM_REQUIRED_ALT;
            break
        }
        if (!$v_0.length) {
            XUI.Html.SetText(this.$1X_3, this.get_view().get_labelElementValue());
            XUI.Html.SetText(this.$1W_3,
                this.get_view()
                .get_labelElementValue() +
                " " +
                CrmEncodeDecode.CrmHtmlEncode(this.get_viewModel().$I_0))
        } else {
            XUI.Html.SetText(this.$1X_3,
                String.format(window.LOCID_LOOKUP_LABEL_FOR_EDIT, this.get_view().get_labelElementValue(), $v_0));
            XUI.Html.SetText(this.$1W_3,
                String.format(window.LOCID_LOOKUP_LABEL_FOR_EDIT, this.get_view().get_labelElementValue(), $v_0))
        }
    },
    onEditElementTabKeyDown: function($p0) {
        var $v_0 = this.get_editControlBehavior().getLookupEdit();
        if ("multi" === this.get_viewModel().get_lookupStyle() &&
            !IsNull(this.get_editControlBehavior().get_lastFocusItem()) &&
            (IsNull($v_0) || Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Hidden-NoBehavior"))) return;
        else Mscrm.SimpleInlineControlEditView.prototype.onEditElementTabKeyDown.call(this, $p0)
    },
    confirm: function() { this.$4Z_3(false) },
    $4Z_3: function($p0) {
        !IsNull(this.get_editControlBehavior().get_inlineLookupMenu()) &&
            this.get_editControlBehavior().get_inlineLookupMenu().hide();
        this.get_view().get_layout().adjustFocusElement();
        if (this.get_isDirty())
            if (this.get_isValid()) {
                this.updateAttribute();
                this.unbindPageClick()
            } else if (this.get_editControlBehavior()
                .hasUnresolvedText()) this.get_editControlBehavior().resolveAndExitEdit(true, !$p0);
            else {
                var $v_0 = this.get_editControlBehavior().Items(false, true, false, false, false);
                if (!IsNull($v_0) &&
                    $v_0.length > 0 &&
                    ($v_0[$v_0.length - 1].category === 1 || $v_0[$v_0.length - 1].category === 2)) {
                    this.updateReadLookupHtml();
                    this.get_editControlBehavior().endContentEditing(false)
                } else {
                    this.$4P_3(false, null);
                    !this.get_$i_3().get_isLookupResolving() && this.get_editElementWrapper().trigger("state-discard");
                    var $v_1 = this.get_editControlBehavior();
                    isInstanceOfTypeAcrossFrames(this.get_editControlBehavior(),
                            Mscrm.InlineImageLookupTransactionCurrency) &&
                        $v_1.currencyCheckRequired() &&
                        $v_1.showErrorMessage(window.LOCID_CURRENCY_CANNOT_BE_NULL, "/_imgs/inlineedit/warning.png");
                    this.unbindPageClick()
                }
            }
        else this.$6H_3(false)
    },
    discard: function($p0) {
        $p0 && this.get_view().get_layout().adjustFocusElement();
        var $v_0 = this.get_editControlBehavior().get_defaultValue();
        this.$4P_3(true, $v_0);
        this.get_editElementWrapper().trigger("state-discard");
        this.unbindPageClick()
    },
    $6H_3: function($p0) {
        $p0 && this.get_view().get_layout().adjustFocusElement();
        this.get_editControlBehavior().set_defaultValue(this.get_editControlBehavior()
            .Items(false, false, false, false, false));
        var $v_0 = this.get_editControlBehavior().get_defaultValue();
        this.$4P_3(false, $v_0);
        this.get_editElementWrapper().trigger("state-discard");
        this.get_editControlBehavior().endContentEditing(false);
        this.unbindPageClick()
    },
    $4P_3: function($p0, $p1) {
        var $v_0 = this.get_view();
        if (IsNull($p1) || !$p1.length) $v_0.tryUpdateValueElementText("");
        else {
            $v_0.get_valueElement().empty();
            $v_0.get_valueElement().removeClass("ms-crm-Inline-EmptyValue");
            $v_0.$3T_3($p1)
        }
        $v_0.get_layout().appendAndWrapValueElementMask();
        $p0 && this.get_editControlBehavior().set_dataValue($p1)
    },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().IsValid()
    },
    get_behavedEditElement: function() { return $get(this.get_chromeElement().attr("id") + "_i") },
    get_editElementValue: function() {
        var $v_0 = this.get_editControlBehavior().Items(true, true, false, false, false);
        if (!IsNull($v_0) && $v_0.length) {
            var $v_1 = $v_0[0];
            return CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.name)
        }
        return ""
    },
    set_editElementValue: function($p0) {
        var $v_0 = this.get_viewModel().$4_0;
        if (!($v_0.get_dataAttribute().get_isInitialization() && IsNull($p0)))
            if (!this.get_isValid() && this.get_isDirty() && this.$3J_3) {
                var $v_1 = isNullOrEmptyString($p0) ? new Array(0) : [$p0];
                this.get_editControlBehavior().set_dataValue($v_1)
            }
        Mscrm.SimpleInlineControlEditView.prototype.set_editElementValue.call(this, $p0);
        return $p0
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_editControlBehavior().set_defaultValue(this.get_editControlBehavior().get_dataValue());
        this.raiseCommitEvent()
    },
    updateReadLookupHtml: function() {
        var $v_0 = this.get_view(), $v_1 = this.get_editControlBehavior().Items(false, true, false, false, false);
        if (IsNull($v_1) || !$v_1.length) {
            $v_0.get_layout().appendAndWrapValueElementMask();
            return
        }
        var $v_2 = $v_0.get_valueElement();
        $v_2.removeClass("ms-crm-Inline-EmptyValue");
        $v_2.empty();
        $v_0.$3T_3($v_1);
        var $v_3 = $v_1[$v_1.length - 1];
        switch ($v_3.category) {
        case 1:
            this.$5O_3();
            this.get_editControlBehavior().showErrorMessage(window.LOCID_INLINELOOKUP_MOREMATCHES,
                window.CDNURL + "/_imgs/error/notif_icn_warn16.png");
            break;
        case 2:
            this.$5O_3();
            var $v_4 = parseInt($v_3.type, 10);
            if ($v_4 > 0 && $v_4 !== 9206)
                this.get_editControlBehavior()
                    .showErrorMessage(LOCID_LU_MRUUNRESOLVEDTOOLTIP, "/_imgs/inlineedit/warning.png");
            else
                this.get_editControlBehavior()
                    .showErrorMessage(window.LOCID_INLINELOOKUP_NOMATCH, "/_imgs/inlineedit/warning.png");
            break;
        default:
            break
        }
        this.unbindPageClick();
        $v_0.get_layout().appendAndWrapValueElementMask()
    },
    $5O_3: function() {
        this.$3J_3 = false;
        this.get_editElementWrapper().trigger("state-discard");
        this.$3J_3 = true
    },
    onEditElementWrapperStateChanged: function($p0) {
        if (IsNull($p0)) return;
        Mscrm.SimpleInlineControlEditView.prototype.onEditElementWrapperStateChanged.call(this, $p0);
        switch ($p0.type) {
        case "state-edit":
            var $v_0 = this.get_editControlBehavior().Items(false, true, false, false, false);
            if (!IsNull($v_0) && $v_0.length > 0 && $v_0[0].category === 2) {
                var $v_1 = this.get_editControlBehavior();
                !IsNull($v_1) && $v_1.showResultsForUnresolved();
                return
            } else this.get_editControlBehavior().showResultsForUnresolved();
            break
        }
    },
    focusEditElement: function() {
        if (this.get_editElement().is(":hidden") || this.get_editElement().is(":disabled")) return;
        var $v_0 = this.get_editControlBehavior(), $v_1 = $v_0.getLookupField();
        if ($v_0.get_isInlineMultiLookup()) {
            $v_0.resizeAndShowHideMultiLookupInputElement();
            var $v_2 = this.get_chromeElement().find(".ms-crm-selected-Lookup-Item");
            $v_2.removeClass("ms-crm-selected-Lookup-Item")
        }
        XUI.Html.DispatchDomEvent($v_1, XUI.Html.CreateDomEvent("focus"))
    },
    postCreateEditElement: function() {
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        this.get_view().get_valueElement().addClass("ms-crm-Inline-Lookup");
        this.get_editElementWrapper().addClass("ms-crm-Inline-Lookup");
        this.get_$i_3().add_setAdditionalParams(this.$$d_$5X_3)
    },
    onEditElementKeyEvent: function($p0) {
        if (IsNull($p0)) return;
        if ($p0.which === 75 && $p0.ctrlKey) {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.confirm()
        } else Mscrm.SimpleInlineControlEditView.prototype.onEditElementKeyEvent.call(this, $p0);
        !this.get_editControlBehavior().get_isInlineMultiLookup() && window.setTimeout(this.$$d_$5m_3, 0)
    },
    $5m_3: function() {
        var $v_0 = this.get_editControlBehavior().hasUnresolvedText();
        $v_0 && this.get_editControlBehavior().Clear(false)
    }
};
Mscrm.MoneyControlEditView = function($p0) { Mscrm.MoneyControlEditView.initializeBase(this, [$p0]) };
Mscrm.MoneyControlEditView.prototype = {
    $2m_3: null,
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValidProxy()
    },
    get_behavedEditElement: function() { return $P_CRM("#" + this.get_editElementId(), this.get_editElement()).get(0) },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    focusEditElement: function() {
        var $v_0 = $P_CRM("#" + this.get_editElementId(), this.get_editElement());
        this.get_selectTextOnEditFocus() && $v_0.select()
    },
    createFormDataControl: function() {
        Mscrm.SimpleInlineControlEditView.prototype.createFormDataControl.call(this);
        this.$2m_3 = Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.TableMoneyControl,
            null,
            null,
            null,
            this.get_editElement().get(0))
    },
    get_defaultEditValue: function() {
        var $v_0 = this.get_editControlBehavior().get_defaultValue();
        return !isNaN($v_0) && !IsNull($v_0)
            ? Mscrm.NumberUtility.addFormatting($v_0, this.get_$2_3().get_precision())
            : ""
    },
    set_defaultEditValue: function($p0) {
        var $v_0 = Number.parseLocale($p0);
        this.get_editControlBehavior().set_defaultValue($v_0);
        this.get_$2_3().setPropertyWithoutRaisingEvent("DefaultEditValue", $p0);
        var $v_1 = !isNaN($v_0) && !IsNull($v_0)
            ? Mscrm.NumberUtility.addFormatting($v_0, this.get_$2_3().get_precision())
            : "";
        this.get_view().tryUpdateValueElementText($v_1);
        return $p0
    },
    updateEditValue: function() {
        var $v_0 = this.get_$2_3();
        !IsNull($v_0.$4_0.get_rawValue()) &&
            $v_0.set_editValue(Mscrm.NumberUtility.addFormatting($v_0.$4_0.get_rawValue(), $v_0.get_precision()))
    },
    get_editElementValue: function() { return $P_CRM("#" + this.get_editElementId(), this.get_editElement()).val() },
    set_editElementValue: function($p0) {
        var $v_0 = $P_CRM("#" + this.get_editElementId(), this.get_editElement());
        $v_0.val($p0);
        this.get_$2_3().setPropertyWithoutRaisingEvent("EditValue", $p0);
        return $p0
    },
    postCreateEditElement: function() {
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        this.get_editElementWrapper().addClass("ms-crm-Inline-Currency")
    },
    createEditElement: function() {
        var $v_0 = document.createElement("TR");
        $v_0.appendChild(this.$5t_3());
        $v_0.appendChild(this.$67_3());
        var $v_1 = document.createElement("TBODY");
        $v_1.appendChild($v_0);
        var $v_2 = document.createElement("TABLE");
        $v_2.setAttribute("id", this.get_editElementId() + "_table");
        $v_2.setAttribute("cellpadding", "0");
        $v_2.setAttribute("cellspacing", "0");
        $v_2.setAttribute("dir", "ltr");
        $v_2.className = "ms-crm-CurrencyTable-Refresh";
        $v_2.appendChild($v_1);
        return $P_CRM($v_2)
    },
    $5t_3: function() {
        var $v_0 = document.createElement("span");
        $v_0.setAttribute("tabindex", "-1");
        window.LOCID_UI_DIR === "RTL" && $v_0.setAttribute("dir", "rtl");
        XUI.Html.SetText($v_0, this.get_$2_3().get_currencySymbol());
        var $v_1 = document.createElement("TD");
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-CurrencySymbol-Refresh");
        $v_1.appendChild($v_0);
        return $v_1
    },
    renderAriaAttributesForEditElement: function() {
        var $v_0 = $P_CRM("#" + this.get_editElementId(), this.get_editElement());
        $v_0.attr("aria-labelledby", this.get_view().get_labelElementId())
    },
    $67_3: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("INPUT");
        $v_2.setAttribute("type", "text");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("min", $v_0.get_minValue().toString());
        $v_2.setAttribute("max", $v_0.get_maxValue().toString());
        $v_2.setAttribute("acc", $v_0.get_precision().toString());
        $v_2.setAttribute("dt", $v_1.get_attributeType());
        $v_2.setAttribute("title", $v_0.get_currencySymbol());
        $v_2.setAttribute("isBaseCur", $v_0.get_isBaseCurrency() ? "1" : "0");
        $v_2.setAttribute("preSrc", $v_0.get_precisionSource().toString());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Money");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!IsNull($v_3)) $v_2.value = Mscrm.NumberUtility.addFormatting($v_3, $v_0.get_precision());
        var $v_4 = document.createElement("DIV");
        $v_4.style.whiteSpace = "normal";
        $v_4.appendChild($v_2);
        var $v_5 = document.createElement("TD");
        $v_5.appendChild($v_4);
        return $v_5
    },
    editElementValueComparer: function() {
        var $v_0 = this.$0_1.get_attribute().get_rawValue(),
            $v_1 = !IsNull($v_0)
                ? Mscrm.NumberUtility.addFormatting($v_0, this.get_$2_3().get_precision()).toString()
                : this.$0_1.get_attribute().get_displayValue(),
            $v_2 = this.get_editElementValue();
        if (!isNullOrEmptyString($v_2)) {
            var $v_3 = Mscrm.NumberUtility.locStringToFloat($v_2);
            $v_2 = Mscrm.NumberUtility.addFormatting($v_3, this.get_$2_3().get_precision())
        }
        return $v_2 !== $v_1
    },
    dispose: function() {
        if (!IsNull(this.$2m_3)) {
            this.$2m_3.dispose();
            this.$2m_3 = null
        }
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    }
};
Mscrm.MultiplePicklistControlEditView = function(view) {
    this.$$d_$7W_3 = Function.createDelegate(this, this.$7W_3);
    this.$$d_$7U_3 = Function.createDelegate(this, this.$7U_3);
    this.$$d_$7V_3 = Function.createDelegate(this, this.$7V_3);
    Mscrm.MultiplePicklistControlEditView.initializeBase(this, [view])
};
Mscrm.MultiplePicklistControlEditView.prototype = {
    $1O_3: false,
    $1M_3: null,
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() { return true },
    initializeInputBehavior: function() {
        Mscrm.SimpleInlineControlEditView.prototype.initializeInputBehavior.call(this);
        var $$t_3 = this;
        this.get_editElement().change(function($p1_0) { !$$t_3.$1O_3 && $$t_3.confirm() });
        var $$t_4 = this;
        this.get_editElement().keydown(function($p1_0) { $$t_4.$1O_3 = true });
        var $$t_5 = this;
        this.get_editElement().click(function($p1_0) {
            $$t_5.$1O_3 = false;
            $$t_5.confirm()
        })
    },
    get_editElementValue: function() {
        var $v_0 = this.get_view().get_selectedItemIndexes();
        if (IsNull($v_0)) return "";
        for (var $v_1 = "", $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            if ($v_2 > 0) $v_1 = $v_1 + ":";
            $v_1 = $v_1 + $v_0[$v_2]
        }
        return $v_1
    },
    set_editElementValue: function(value) {
        var $v_0 = value.split(":"),
            $v_1 = "checked",
            $$t_7 = this,
            $v_2 = function($p1_0, $p1_1) {
                var $v_3 = $P_CRM($p1_1);
                if (!Array.contains($v_0, $p1_0.toString())) $v_3.prop($v_1, false);
                else !$v_3.prop($v_1) && $v_3.prop($v_1, true)
            };
        $P_CRM("input", this.get_editElement()).each($v_2);
        return value
    },
    $4H_2: function($p0, $p1) {
        switch ($p1) {
        case "EditValue":
            this.set_editElementValue(this.get_$2_3().get_selectedItemIndexes().join(":"));
            break;
        default:
            Mscrm.SimpleInlineControlEditView.prototype.$4H_2.call(this, $p0, $p1);
            break
        }
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = this.get_view().$R_2(), $v_3 = $P_CRM("<div></div>");
        $v_3.attr("id", this.get_editElementId());
        $v_3.attr("attrName", $v_1.get_logicalName());
        $v_3.attr("req", $v_1.get_requiredLevel().toString());
        $v_3.attr("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_3.attr("title", "");
        $v_3.addClass("ms-crm-SelectBox");
        $v_3.addClass("ms-crm-InlineMultiPicklist");
        for (var $v_4 = $v_0.get_options(), $v_5 = 0; $v_5 < $v_4.length; ++$v_5) {
            var $v_6 = $v_4[$v_5], $v_7 = this.get_editElementId() + "_option_" + $v_5.toString();
            this.$27_3($v_3, $v_7, $v_6.Value.toString(), $v_6.Label, Array.contains($v_2, $v_6.Value))
        }
        return $v_3
    },
    $27_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $P_CRM("<input></input>");
        $v_0.attr("id", $p1);
        $v_0.attr("type", "checkbox");
        $v_0.attr("value", $p2 === "-1" ? null : $p2);
        $v_0.addClass("ms-crm-InlineMultiPicklist-Checkbox");
        $v_0.attr("checked", $p4 ? "checked" : null);
        var $v_1 = $P_CRM("<label></label>");
        $v_1.attr("for", $p1);
        $v_1.attr("title", $p3);
        $v_1.text($p3);
        var $v_2 = $P_CRM("<nobr></nobr>");
        $v_2.append($v_0);
        $v_2.append($v_1);
        $p0.append($v_2)
    },
    postCreateEditElement: function() {
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        this.$1M_3 = this.get_editElement().find(".ms-crm-InlineMultiPicklist-Checkbox");
        this.$1M_3.focus(this.$$d_$7V_3);
        this.$1M_3.blur(this.$$d_$7U_3);
        this.$1M_3.keydown(this.$$d_$7W_3)
    },
    $7V_3: function($p0) {
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName !== "INPUT") return;
        Sys.UI.DomElement.addCssClass($v_0.parentNode, "ms-crm-selectedmultiboxitem")
    },
    $7U_3: function($p0) {
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName !== "INPUT") return;
        Sys.UI.DomElement.removeCssClass($v_0.parentNode, "ms-crm-selectedmultiboxitem")
    },
    $7W_3: function($p0) {
        if (IsNull($p0) || $p0.type !== "keydown") return;
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName !== "INPUT") return;
        switch ($p0.which) {
        case 32:
        case 13:
            $v_0.checked = !$v_0.checked;
            break
        }
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    dispose: function() {
        this.get_editElement().unbind();
        !IsNull(this.$1M_3) && this.$1M_3.unbind();
        this.$1M_3 = null;
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    }
};
Mscrm.NumberControlEditView = function($p0) { Mscrm.NumberControlEditView.initializeBase(this, [$p0]) };
Mscrm.NumberControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValidProxy()
    },
    updateEditValue: function() {
        var $v_0 = this.get_$2_3();
        !IsNull($v_0.$4_0.get_rawValue()) &&
            $v_0.set_editValue(Mscrm.NumberUtility.addFormatting($v_0.$4_0.get_rawValue(), $v_0.get_precision()))
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("input");
        $v_2.setAttribute("type", "text");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("min", $v_0.get_minValue().toString());
        $v_2.setAttribute("max", $v_0.get_maxValue().toString());
        $v_2.setAttribute("acc", $v_0.get_precision().toString());
        $v_2.setAttribute("dt", $v_1.get_attributeType());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("title", "");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!IsNull($v_3)) {
            $v_2.value = Mscrm.NumberUtility.addFormatting($v_3, $v_0.get_precision());
            $v_2.setAttribute("defaultValue", $v_3.toString())
        }
        return $P_CRM($v_2)
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.OptionSetControlEditView = function(view) {
    this.$1V_3 = -1;
    this.$2o_3 = -1;
    this.$46_3 = -1;
    Mscrm.OptionSetControlEditView.initializeBase(this, [view])
};
Mscrm.OptionSetControlEditView.prototype = {
    $2C_3: 0,
    $1O_3: false,
    dispose: function() {
        this.get_editElement().unbind();
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    },
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() { return true },
    initializeInputBehavior: function() {
        Mscrm.SimpleInlineControlEditView.prototype.initializeInputBehavior.call(this);
        var $$t_5 = this;
        this.get_editElement().change(function($p1_0) { !$$t_5.$1O_3 && $$t_5.confirm() });
        var $$t_6 = this;
        this.get_editElement().keydown(function($p1_0) {
            $$t_6.$1O_3 = true;
            $$t_6.onEditElementKeyEvent($p1_0)
        });
        var $$t_7 = this;
        this.get_editElement().click(function($p1_0) { $$t_7.$1O_3 = false });
        if (this.$4Q_3()) {
            var $$t_8 = this;
            this.get_editElement().click(function($p1_0) { $$t_8.confirm() })
        }
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari()) {
            var $$t_9 = this;
            this.get_editElement().change(function($p1_0) { $$t_9.confirm() })
        }
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(),
            $v_1 = $v_0.$4_0,
            $v_2 = IsNull(this.get_view().$R_2()) ? null : this.get_view().$R_2().toString(),
            $v_3 = document.createElement("select");
        $v_3.setAttribute("id", this.get_editElementId());
        $v_3.setAttribute("attrName", $v_1.get_logicalName());
        $v_3.setAttribute("defaultSelected", $v_2);
        $v_3.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_3.setAttribute("title", "");
        $v_3.setAttribute("tabindex", "-1");
        Sys.UI.DomElement.addCssClass($v_3, "ms-crm-SelectBox");
        var $v_4 = $v_0.get_options(), $v_5 = -1;
        if (Mscrm.Utilities.isIE10() && !Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) {
            for (var $v_6 = new Sys.StringBuilder, $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                var $v_8 = $v_4[$v_7];
                if ($v_2 === $v_8.Value.toString()) $v_5 = $v_7;
                var $v_9 = $v_8.Value.toString();
                $v_6.append(String.format("<option title={0}{1}>{2}</option>",
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_8.Label),
                    $v_9 !== "-1" ? String.format(" value={0}", CrmEncodeDecode.CrmHtmlAttributeEncode($v_9)) : "",
                    CrmEncodeDecode.CrmHtmlEncode($v_8.Label)))
            }
            $v_3.innerHTML = $v_6.toString()
        } else
            for (var $v_A = 0; $v_A < $v_4.length; $v_A++) {
                var $v_B = $v_4[$v_A];
                if ($v_2 === $v_B.Value.toString()) $v_5 = $v_A;
                this.$27_3($v_3, $v_B.Value.toString(), $v_B.Label)
            }
        if (!isNullOrEmptyString($v_2) && $v_5 > -1) $v_3.selectedIndex = $v_5;
        return $P_CRM($v_3)
    },
    showEditElement: function() {
        this.$4Q_3() && this.$4W_3();
        Mscrm.InlineEditViewBase.prototype.showEditElement.call(this);
        Mscrm.Utilities.isIE() && this.get_editElement().show();
        this.get_editElementWrapper().removeClass("ms-crm-Inline-HideByZeroHeight");
        this.get_editElementWrapper().children().removeClass("ms-crm-Inline-HideByZeroHeight-Ie7");
        $P_CRM("#mainContainer").addClass("noOverflow")
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        var $$t_0 = this;
        window.setTimeout(function() {
                $$t_0.get_editElementWrapper().focus();
                $$t_0.get_editElement().focus()
            },
            0)
    },
    $4W_3: function() {
        var $v_0 = this.$6r_3();
        this.get_editElement().attr("size", $v_0.toString());
        this.get_editElement().addClass("ms-crm-Inline-OptionSet-AutoOpen");
        this.get_editElementWrapper().addClass("noScroll");
        var $v_1 = 0;
        if (this.$2C_3 > 0) {
            var $v_3 = 17 * $v_0, $v_4 = (this.$2C_3 > $v_0 ? $v_0 : this.$2C_3) * 17;
            this.$4n_3();
            if ($v_3 > this.$1V_3) $v_1 = this.$1V_3 < $v_4 ? $v_4 : this.$1V_3;
            if ($P_CRM.browser.mozilla && this.$1V_3 < $v_4) $v_1 = $v_1 - 34;
            $v_1 > 0 && this.get_editElement().height($v_1);
            return
        }
        var $v_2 = $v_0 >= 6 ? 102 : 17 * $v_0;
        this.$6Z_3();
        if ($v_2 < this.$2o_3) $v_1 = $v_2;
        else if (this.$2o_3 > 51) $v_1 = this.$2o_3;
        else {
            this.$6a_3();
            if ($v_2 - 17 < this.$46_3) {
                var $v_5 = $v_2 - 17, $v_6 = "-" + $v_5 + "px";
                this.get_editElement().css("position", "relative");
                this.get_editElement().css("z-index", "1");
                this.get_editElement().css("top", $v_6);
                $v_1 = $v_2
            } else {
                this.$4n_3();
                if ($v_2 > this.$1V_3) $v_1 = this.$1V_3;
                else $v_1 = $v_2
            }
        }
        $v_1 > 0 && this.get_editElement().height($v_1)
    },
    hideEditElement: function() {
        $P_CRM("#mainContainer").removeClass("noOverflow");
        this.get_editElementWrapper().addClass("ms-crm-Inline-HideByZeroHeight");
        this.get_editElementWrapper().height("");
        this.get_editElementWrapper().children().addClass("ms-crm-Inline-HideByZeroHeight-Ie7");
        Mscrm.Utilities.isIE() && this.get_editElement().hide()
    },
    $27_3: function($p0, $p1, $p2) {
        var $v_0 = document.createElement("option");
        if ($p1 !== "-1") $v_0.value = $p1;
        $v_0.text = $p2;
        $p0.add($v_0)
    },
    get_minOptionsToShow: function() { return this.$2C_3 },
    set_minOptionsToShow: function(value) {
        this.$2C_3 = value;
        return value
    },
    get_perceivedEditElementValue: function() {
        var $v_0 = parseInt(this.get_editElementValue());
        return $v_0 < 0 ? "" : this.get_editElementValue()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    postCreateEditElement: function() {
        Mscrm.SimpleInlineControlEditView.prototype.postCreateEditElement.call(this);
        this.get_editElementWrapper().addClass("ms-crm-Inline-OptionSet");
        this.$4Q_3() && this.$4W_3()
    },
    $6r_3: function() {
        var $v_0 = this.get_$2_3().get_options().length;
        $v_0 = Math.max($v_0, 2);
        $v_0 = Math.min($v_0, 10);
        return $v_0
    },
    $4n_3: function() {
        var $v_0 = this.get_editElement().parents("table"), $v_1 = this.get_editElement().parents("tr");
        if ($v_0.length > 0 && $v_1.length > 0) {
            var $v_2 = $v_0.first(), $v_3 = $v_1.first();
            if ($v_3.length > 0 && $v_2.length > 0)
                this.$1V_3 = $v_2.height() - ($v_3.offset().top - $v_2.offset().top) - 2
        }
    },
    $6Z_3: function() {
        var $v_0 = this.get_editElement().parents(".ms-crm-InlineTabBody-Read"),
            $v_1 = this.get_editElement().parents("tr");
        if ($v_0.length > 0 && $v_1.length > 0) {
            var $v_2 = $v_0.first(), $v_3 = $v_1.first();
            if ($v_3.length > 0 && $v_2.length > 0) {
                var $v_4 = $v_3.outerHeight(true) - $v_3.height();
                this.$2o_3 = $v_2.height() - ($v_3.offset().top - $v_2.offset().top) - $v_4 - 15
            }
        }
    },
    $6a_3: function() {
        var $v_0 = this.get_editElement().parents(".ms-crm-InlineTabBody-Read"),
            $v_1 = this.get_editElement().parents("tr");
        if ($v_0.length > 0 && $v_1.length > 0) {
            var $v_2 = $v_0.first(), $v_3 = $v_1.first();
            if ($v_3.length > 0 && $v_2.length > 0) {
                var $v_4 = $v_3.outerHeight(true) - $v_3.height();
                this.$46_3 = $v_3.offset().top - $v_2.offset().top - $v_4 - 2
            }
        }
    },
    onEditElementKeyEvent: function(eventObject) {
        if (IsNull(eventObject)) return;
        if (eventObject.which === 8) {
            if (this.isEditing()) {
                eventObject.stopPropagation();
                eventObject.preventDefault()
            }
        } else if (eventObject.which === 38 || eventObject.which === 40) eventObject.stopPropagation();
        else Mscrm.SimpleInlineControlEditView.prototype.onEditElementKeyEvent.call(this, eventObject)
    },
    $4Q_3: function() {
        if (this.get_view().get_controlMode() === "normal" &&
            !Mscrm.CrmBrowser.get_currentBrowser().get_isIE7() &&
            !Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() &&
            !Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) return true;
        return false
    }
};
Mscrm.PhoneNumberControlEditView = function($p0) {
    this.$$d_$7i_3 = Function.createDelegate(this, this.$7i_3);
    Mscrm.PhoneNumberControlEditView.initializeBase(this, [$p0])
};
Mscrm.PhoneNumberControlEditView.prototype = {
    $O_3: null,
    dispose: function() {
        !IsNull(this.$O_3) && $removeHandler(this.$O_3, "keydown", this.$$d_$7i_3);
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    },
    get_$2_3: function() { return this.$0_1 },
    get_$3e_3: function() {
        return Sys.UI.Behavior.getBehaviorsByType(this.get_editElement().get(0), this.get_$2_3().get_behaviorType())[0]
    },
    get_isDirty: function() { return !IsNull(this.get_$3e_3()) && this.get_$3e_3().get_isDirty() },
    get_isValid: function() { return IsNull(this.get_$3e_3()) || this.get_$3e_3().get_isValidProxy() },
    updateAttribute: function() {
        this.get_editElement().attr("defaultValue", this.get_editElement().val());
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0;
        this.$O_3 = document.createElement("input");
        this.$O_3.setAttribute("type", "text");
        this.$O_3.setAttribute("id", this.get_editElementId());
        this.$O_3.setAttribute("attrName", $v_1.get_logicalName());
        this.$O_3.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        this.$O_3.setAttribute("maxLength", $v_0.get_maxLength().toString());
        this.$O_3.setAttribute("title", window.PHONE_NUMBER_TOOLTIP_INLINE);
        Sys.UI.DomElement.addCssClass(this.$O_3, "ms-crm-InlineInput");
        Sys.UI.DomElement.addCssClass(this.$O_3, "ms-crm-Phone");
        var $v_2 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_2)) {
            this.$O_3.value = $v_2;
            this.$O_3.setAttribute("defaultValue", $v_2)
        }
        $addHandler(this.$O_3, "keydown", this.$$d_$7i_3);
        return $P_CRM(this.$O_3)
    },
    $7i_3: function($p0) {
        if (!isNullOrEmptyString(this.$O_3.value))
            switch ($p0.keyCode) {
            case 13:
                if ($p0.ctrlKey) {
                    Mscrm.ReadFormUtilities.openPhoneClient(this.$O_3.value);
                    $p0.stopPropagation();
                    $p0.preventDefault()
                }
                break
            }
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.RelatedCasesLookupControlEditView = function($p0, $p1) {
    Mscrm.RelatedCasesLookupControlEditView.initializeBase(this, [$p0]);
    this.$18_4 = $p1
};
Mscrm.RelatedCasesLookupControlEditView.prototype = {
    $18_4: null,
    createEditElement: function() {
        var $v_0 = this.get_view();
        $v_0.get_valueElement().empty();
        $v_0.$3T_3(this.$18_4);
        return Mscrm.LookupControlEditView.prototype.createEditElement.call(this)
    },
    updateAttribute: function() {
        Mscrm.LookupControlEditView.prototype.updateAttribute.call(this);
        this.get_editElementWrapper().trigger("state-commit")
    },
    getInitialValue: function() { return isNullOrEmptyString(this.$18_4[0].id) ? null : this.$18_4[0] }
};
Mscrm.SimpleInlineControlEditView = function(view) {
    this.$$d_$6J_2 = Function.createDelegate(this, this.$6J_2);
    this.$$d_onEditElementWrapperStateChanged = Function.createDelegate(this, this.onEditElementWrapperStateChanged);
    this.$$d_$80_2 = Function.createDelegate(this, this.$80_2);
    this.$$d_onEditElementKeyEvent = Function.createDelegate(this, this.onEditElementKeyEvent);
    this.$$d_$7w_2 = Function.createDelegate(this, this.$7w_2);
    this.$$d_$7n_2 = Function.createDelegate(this, this.$7n_2);
    Mscrm.SimpleInlineControlEditView.initializeBase(this, [view])
};
Mscrm.SimpleInlineControlEditView.prototype = {
    $2O_2: null,
    $14_2: null,
    $3z_2: true,
    $1c_2: null,
    get_doNotSubmit: function() { return this.get_view().get_editControlBehavior().get_doNotSubmit() },
    set_doNotSubmit: function(value) {
        this.get_view().get_editControlBehavior().set_doNotSubmit(value);
        return value
    },
    get_view: function() { return this.get_inlineView() },
    get_selectTextOnEditFocus: function() { return this.$3z_2 && !Mscrm.Utilities.isMobileRefresh() },
    set_selectTextOnEditFocus: function(value) {
        this.$3z_2 = value;
        return value
    },
    get_editElementValue: function() { return this.get_editElement().val() },
    set_editElementValue: function(value) {
        this.get_editElement().val(value);
        this.get_view().$0_1.setPropertyWithoutRaisingEvent("EditValue", value);
        return value
    },
    get_perceivedEditElementValue: function() { return this.get_editElementValue() },
    get_editElementId: function() { return this.get_chromeElement().attr("id") + "_i" },
    get_behavedEditElement: function() {
        if (!IsNull(this.get_editElement())) return this.get_editElement().get(0);
        return null
    },
    get_editControlBehavior: function() {
        if (IsNull(this.$14_2)) {
            var $v_0 = Sys.UI.Behavior.getBehaviorsByType(this.get_behavedEditElement(), this.$0_1.get_behaviorType());
            this.$14_2 = $v_0[0]
        }
        return this.$14_2
    },
    get_imeMode: function() { return this.$1c_2 },
    set_imeMode: function(value) {
        this.$1c_2 = value;
        return value
    },
    postCreateEditElement: function() {
        this.$4v_2();
        Mscrm.InlineEditViewBase.prototype.postCreateEditElement.call(this)
    },
    bindViewStateChange: function() { $P_CRM(this).bind("ms-crm-EditValueChange", this.$$d_$7n_2) },
    $7n_2: function($p0) { this.handleViewToModelBinding($p0) },
    $4H_2: function($p0, $p1) {
        switch ($p1) {
        case "ControlMode":
            this.bindEditElementClick();
            this.$5G_2();
            break;
        case "EditValue":
            this.set_editElementValue(this.$0_1.get_editValue());
            break;
        case "DefaultEditValue":
            this.set_defaultEditValue(this.$0_1.get_defaultEditValue());
            break
        }
    },
    get_defaultEditValue: function() { return this.get_editElement().attr("defaultValue") },
    set_defaultEditValue: function(value) {
        this.get_editElement().attr("defaultValue", value);
        this.$0_1.setPropertyWithoutRaisingEvent("DefaultEditValue", value);
        var $v_0 = this.get_view().$0_1, $v_1 = $v_0.get_attribute().get_displayValue() || "";
        this.get_view().tryUpdateValueElementText($v_1);
        return value
    },
    handleViewToModelBinding: function(jQueryEvent) {
        switch (jQueryEvent.type) {
        case "ms-crm-EditValueChange":
            window.setTimeout(this.$$d_$7w_2, 0);
            break;
        default:
            break
        }
    },
    $7w_2: function() { this.$0_1.setPropertyWithoutRaisingEvent("EditValue", this.get_editElementValue()) },
    attributeChanged: function() {
        var $v_0 = this.$0_1, $v_1 = $v_0.get_attribute().get_displayValue() || "", $v_2 = this.get_view();
        if (isNullOrEmptyString($v_1)) $v_0.set_editValue(null);
        else if (this.isEditing()) $v_0.set_editValue(this.get_editElementValue());
        else {
            this.updateEditValue();
            if (!IsNull($v_2.$k_2) && $v_2.get_isValid());
        }
        $v_0.set_defaultEditValue($v_0.get_editValue());
        $v_2.tryUpdateValueElementText($v_1);
        this.get_chromeElement().trigger("attribute-changed", [this.get_perceivedEditElementValue()]);
        window.UseTabletExperience && Mscrm.InlineEditDataService.cacheFormData()
    },
    updateEditValue: function() {
        var $v_0 = this.$0_1;
        !IsNull($v_0.get_attribute().get_rawValue()) &&
            $v_0.set_editValue($v_0.get_attribute().get_rawValue().toString())
    },
    initializeInputBehavior: function() {
        this.get_editElement().keydown(this.$$d_onEditElementKeyEvent);
        this.get_editElement().keypress(this.$$d_onEditElementKeyEvent);
        Mscrm.InlineEditViewBase.prototype.initializeInputBehavior.call(this)
    },
    raiseCommitEvent: function() { !this.get_doNotSubmit() && this.get_editElementWrapper().trigger("state-commit") },
    confirm: function() {
        var $v_0 = this.get_view();
        $v_0.get_layout().adjustFocusElement();
        this.$0_1.setPropertyWithoutRaisingEvent("EditValue", this.get_editElementValue());
        if ($v_0
            .get_isValid() &&
            ($v_0
                .get_isDirty() ||
                this.editElementValueComparer())) Mscrm.InlineEditViewBase.prototype.confirm.call(this);
        else this.discard(false)
    },
    editElementValueComparer: function() {
        var $v_0 = this.$0_1.get_attribute(),
            $v_1 = !IsNull($v_0.get_rawValue()) ? $v_0.get_rawValue().toString() : $v_0.get_displayValue();
        return this.get_editElementValue() !== $v_1
    },
    discard: function(adjustFocus) {
        var $v_0 = this.get_view();
        adjustFocus && $v_0.get_layout().adjustFocusElement();
        var $v_1 = this.$0_1;
        if (!IsNull($v_0.$k_2)) {
            $v_1.set_editValue($v_0.$k_2);
            $v_0.tryUpdateValueElementText($v_0.$k_2)
        } else {
            $v_1.set_editValue($v_1.get_defaultEditValue());
            $v_0.tryUpdateValueElementText($v_1.get_attribute().get_displayValue())
        }
        Mscrm.InlineEditViewBase.prototype.discard.call(this, adjustFocus)
    },
    onEditElementKeyEvent: function(eventObject) {
        if (IsNull(eventObject)) return;
        switch (eventObject.which) {
        case 27:
            if (this.get_view().get_controlMode() !== "alwaysedit") {
                eventObject.stopPropagation();
                this.discard(true)
            }
            eventObject.preventDefault();
            break;
        case 9:
            this.onEditElementTabKeyDown(eventObject);
            break;
        case 13:
            this.onEditElementEnterKeyDown(eventObject);
            break;
        default:
            this.handleDefaultKeyDownEvent(eventObject);
            this.handleDefaultKeyPressEvent(eventObject);
            break
        }
    },
    handleDefaultKeyPressEvent: function(eventObject) {
        if (eventObject.type !== "keypress") return;
        $P_CRM(this).trigger("ms-crm-EditValueChange")
    },
    handleDefaultKeyDownEvent: function(eventObject) {
        if (eventObject.type !== "keydown") return;
        $P_CRM(this).trigger("ms-crm-EditValueChange");
        !this.get_view().get_state().get_validationResult().isValid && window.setTimeout(this.$$d_$80_2, 0)
    },
    $80_2: function() { this.get_editElementWrapper().trigger("ms-crm-ValidateOnKeyDown") },
    onEditElementWrapperStateChanged: function(eventObject) {
        if (IsNull(eventObject)) return;
        Mscrm.InlineEditViewBase.prototype.onEditElementWrapperStateChanged.call(this, eventObject);
        switch (eventObject.type) {
        case "state-edit":
            this.$5R_2();
            break;
        case "state-read":
            this.$4O_2();
            break;
        case "ms-crm-ValidateOnKeyDown":
            this.$6x_2();
            break;
        default:
            break
        }
    },
    $6x_2: function() { this.get_view().get_isValid() && this.$4O_2() },
    $4O_2: function() {
        this.get_editElementWrapper().unbind("ms-crm-ValidateOnKeyDown", this.$$d_onEditElementWrapperStateChanged)
    },
    $5R_2: function() {
        !this.get_view().get_state().get_validationResult().isValid &&
            this.get_editElementWrapper().bind("ms-crm-ValidateOnKeyDown", this.$$d_onEditElementWrapperStateChanged)
    },
    $6J_2: function($p0) {
        this.get_editElement().unbind("focus", this.$$d_$6J_2);
        $p0.stopPropagation()
    },
    onPageClick: function(eventObject) {
        if (IsNull(eventObject)) return;
        var $v_0 = this.get_view();
        if (!$v_0.isElementInChrome($P_CRM(eventObject.target)) &&
            !$v_0.get_layout().isElementInLabel($P_CRM(eventObject.target)) &&
            !($v_0.$0_1.get_attribute().get_isCompositeAttributeValueSet() && $v_0.get_chromeBehavior().$q_4
                ? $v_0.get_chromeBehavior().$q_4.get_visible()
                : false)) {
            Mscrm.TabTypeHelper.disableTabTyping();
            this.confirm();
            eventObject.stopPropagation()
        }
    },
    onEditElementTabKeyDown: function(eventObject) {
        if (IsNull(eventObject) || eventObject.type !== "keydown") return;
        Mscrm.InlineEditViewBase.prototype.onEditElementTabKeyDown.call(this, eventObject);
        Mscrm.TabTypeHelper.enableTabTyping(this.$0_1.get_attribute().get_logicalName())
    },
    onEditElementEnterKeyDown: function(eventObject) {
        if (IsNull(eventObject) || eventObject.type !== "keydown") return;
        Mscrm.TabTypeHelper.disableTabTyping();
        Mscrm.InlineEditViewBase.prototype.onEditElementEnterKeyDown.call(this, eventObject)
    },
    createFormDataControl: function() {
        this.$2O_2 = Mscrm.CrmUIComponent.crmCreate(this.$0_1.get_controlType(),
            null,
            null,
            { attribute: this.$0_1.get_attribute().get_dataAttributeId() },
            this.get_behavedEditElement())
    },
    createControlBehavior: function() {
        Mscrm.CrmUIComponent.crmCreate(this.$0_1.get_behaviorType(),
            { view: this.get_view() },
            null,
            null,
            this.get_behavedEditElement())
    },
    attachBehaviors: function() {
        this.createFormDataControl();
        this.createControlBehavior();
        this.get_view().get_chromeBehavior().initializeForEditElement()
    },
    onEditElementClick: function(eventObject) {
        Mscrm.InlineEditViewBase.prototype.onEditElementClick.call(this, eventObject);
        this.get_view().get_controlMode() === "alwaysedit" &&
            Mscrm.Utilities.isMobileRefresh() &&
            Mscrm.InlineEditUtilities.set_activeControl(this.get_view());
        this.$5R_2()
    },
    isEditing: function() {
        if (this.get_view().get_controlMode() === "alwaysedit") return false;
        return this.get_view().get_state().get_currentState() === 2
    },
    render: function() {
        var $v_0 = false;
        if (!Sys.Application.get_isCreatingComponents()) {
            Sys.Application.beginCreateComponents();
            $v_0 = true
        }
        this.createAndAppendEditElementToDom();
        this.get_view().get_layout().renderForEdit();
        this.attachBehaviors();
        this.initializeInputBehavior();
        this.postCreateEditElement();
        this.renderLabelValueForEditElement();
        this.$5G_2();
        this.$8E_2();
        $v_0 && Sys.Application.endCreateComponents()
    },
    createAndAppendEditElementToDom: function() {
        this.set_editElement(this.createEditElement());
        !Mscrm.InlineEditControlCommonUtility.isFirefox() && this.renderAriaAttributesForEditElement();
        !Mscrm.Utilities.isFirefox() && this.renderAriaAttributesForEditElement();
        var $v_0 = document.createElement("div"),
            $v_1 = document.createElement("label"),
            $v_2 = document.createElement("div");
        $v_1.setAttribute("for", this.get_editElement()[0].id);
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-div-NotVisible");
        $v_2.innerHTML = !this.get_view().get_label().length ? "" : this.get_view().get_label();
        if (this.$0_1.get_controlMode() !== "alwaysedit") $v_0.style.display = "none";
        $v_0.appendChild($v_2);
        $v_0.appendChild($v_1);
        this.set_editElementWrapper($P_CRM($v_0));
        $v_0.appendChild(this.get_editElement()[0]);
        Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Inline-Edit");
        this.get_chromeElement().addClass(this.$0_1.get_attribute().get_attributeType());
        this.get_chromeElement().append(this.get_editElementWrapper())
    },
    renderLabelValueForEditElement: function() {},
    $4v_2: function() {
        var $v_0 = this.$0_1;
        $v_0.setPropertyWithoutRaisingEvent("EditValue", this.get_editElementValue());
        $v_0.setPropertyWithoutRaisingEvent("DefaultEditValue", this.get_defaultEditValue())
    },
    $8E_2: function() {
        if (!IsNull(this.$1c_2) && !IsNull(this.get_editElementWrapper())) {
            var $v_0 = this.get_editElementWrapper().find("input, textarea");
            if (Mscrm.Utilities.isEdge()) $v_0.css("-ms-ime-mode", this.$1c_2);
            else $v_0.css("ime-mode", this.$1c_2)
        }
    },
    $5G_2: function() {
        !IsNull(this.get_editElement()) && this.get_editElement().attr("controlmode", this.$0_1.get_controlMode())
    },
    renderAriaAttributesForEditElement: function() {
        this.get_editElement().attr("aria-labelledby",
            String.format("{0} {1}", this.get_view().get_labelElementId(), this.get_view().get_warningElementId()))
    },
    dispose: function() {
        $P_CRM(this).unbind("ms-crm-EditValueChange", this.$$d_$7n_2);
        this.get_editElement().unbind("keydown", this.$$d_onEditElementKeyEvent);
        this.get_editElement().unbind("keypress", this.$$d_onEditElementKeyEvent);
        this.get_editElementWrapper().unbind("ms-crm-ValidateOnKeyDown", this.$$d_onEditElementWrapperStateChanged);
        this.$4O_2();
        if (!IsNull(this.$2O_2)) {
            this.$2O_2.dispose();
            this.$2O_2 = null
        }
        if (IsNull(this.$14_2) && !IsNull(this.get_behavedEditElement())) {
            var $v_0 = Sys.UI.Behavior.getBehaviorsByType(this.get_behavedEditElement(), this.$0_1.get_behaviorType());
            if (!IsNull($v_0)) this.$14_2 = $v_0[0]
        }
        if (!IsNull(this.$14_2)) {
            this.$14_2.dispose();
            this.$14_2 = null
        }
        Mscrm.InlineControlEditViewBase.prototype.dispose.call(this)
    }
};
Mscrm.SubjectLookupControlEditView = function($p0) {
    this.$$d_$6I_4 = Function.createDelegate(this, this.$6I_4);
    Mscrm.SubjectLookupControlEditView.initializeBase(this, [$p0])
};
Mscrm.SubjectLookupControlEditView.prototype = {
    setImage: function($p0) {
        if (!IsNull(Mscrm.InlineSubjectLookupUIBehavior
            .getSubjectLookupData())) $p0.setAttribute("src", window.CDNURL + "/_imgs/dropdown_refresh.png");
        else $p0.setAttribute("src", window.CDNURL + "/_imgs/search_normal.gif")
    },
    createEditElement: function() {
        var $v_0 = Mscrm.LookupControlEditView.prototype.createEditElement.call(this),
            $v_1 = document.createElement("div");
        $v_1.setAttribute("id", this.get_chromeElement().attr("id") + "_treediv");
        $v_1.setAttribute("style", "overflow:auto");
        $v_1.setAttribute("style", "max-height:250px");
        var $v_2 = $P_CRM($v_1);
        $v_0.append($v_2);
        return $v_0
    },
    addClickHandler: function($p0) { $p0 && $addHandler($p0, "click", this.$$d_$6I_4) },
    removeClickHandler: function($p0) { $p0 && $removeHandler($p0, "click", this.$$d_$6I_4) },
    $6I_4: function($p0) {
        var $v_0 = $P_CRM($p0.target), $v_1 = this.get_editElement().find(".ms-crm-LookupItem-Name");
        if (!$v_0 || !$v_1) return;
        if ($v_0.parents("." + $v_1.attr("class")).length > 0 || $v_0.get(0) === $v_1.get(0)) return;
        XUI.Html.DispatchDomEvent($get(this.get_chromeElement().attr("id") + "_i"), XUI.Html.CreateDomEvent("click"))
    }
};
Mscrm.TextAreaControlEditView = function($p0) { Mscrm.TextAreaControlEditView.initializeBase(this, [$p0]) };
Mscrm.TextAreaControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    get_editElementValue: function() { return Mscrm.TextAreaHelper.normalizeNewLine(this.get_editElement().val()) },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("textarea");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("maxLength", $v_0.get_maxLength().toString());
        $v_2.setAttribute("role", "textbox");
        $v_2.setAttribute("aria-multiline", "true");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_3)) {
            $v_2.value = $v_3;
            $v_2.setAttribute("defaultValue", $v_3)
        }
        return $P_CRM($v_2)
    },
    onEditElementEnterKeyDown: function($p0) { $p0.stopPropagation() },
    onEditElementKeyEvent: function($p0) {
        if (IsNull($p0)) return;
        if ($p0.which === 27) $p0.stopPropagation();
        else Mscrm.SimpleInlineControlEditView.prototype.onEditElementKeyEvent.call(this, $p0)
    }
};
Mscrm.TextBoxControlEditView = function($p0) { Mscrm.TextBoxControlEditView.initializeBase(this, [$p0]) };
Mscrm.TextBoxControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValid()
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        var $v_0 = this.get_$2_3();
        $v_0.set_defaultEditValue($v_0.$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(),
            $v_1 = $v_0.$4_0,
            $v_2 = this.get_chromeElement(),
            $v_3 = $v_2.attr("data-iscolor") === "1",
            $v_4 = document.createElement("input");
        $v_4.setAttribute("type", $v_3 ? "color" : "text");
        $v_4.setAttribute("id", this.get_editElementId());
        $v_4.setAttribute("attrName", $v_1.get_logicalName());
        $v_4.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_4.setAttribute("maxLength", $v_0.get_maxLength().toString());
        $v_4.setAttribute("title", "");
        Sys.UI.DomElement.addCssClass($v_4, "ms-crm-InlineInput");
        $v_3 && Sys.UI.DomElement.addCssClass($v_4, "ms-crm-InputColor");
        var $v_5 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_5)) {
            $v_4.value = $v_5;
            $v_4.setAttribute("defaultValue", $v_5)
        }
        return $P_CRM($v_4)
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.TickerControlEditView = function($p0) { Mscrm.TickerControlEditView.initializeBase(this, [$p0]) };
Mscrm.TickerControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValidProxy()
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        var $v_0 = this.get_$2_3();
        $v_0.set_defaultEditValue($v_0.$I_0);
        var $v_1 = $v_0.$I_0.trim();
        $v_1.length > 0 && $v_0.set_editValue($v_1.toUpperCase());
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("input");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("maxLength", $v_0.get_maxLength().toString());
        $v_2.setAttribute("title", "");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Email-Address");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_3)) {
            $v_2.value = $v_3;
            $v_2.setAttribute("defaultValue", $v_3)
        }
        return $P_CRM($v_2)
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.ToggleControlEditView = function($p0) {
    this.$$d_onEditElementWrapperStateChanged = Function.createDelegate(this, this.onEditElementWrapperStateChanged);
    this.$$d_$7l_4 = Function.createDelegate(this, this.$7l_4);
    this.$$d_$7k_4 = Function.createDelegate(this, this.$7k_4);
    Mscrm.ToggleControlEditView.initializeBase(this, [$p0])
};
Mscrm.ToggleControlEditView.prototype = {
    dispose: function() {
        var $v_0 = this.get_view().get_valueElement();
        $v_0.unbind("mousedown", this.$$d_$7k_4);
        $v_0.unbind("mouseup", this.$$d_$7l_4);
        this.get_editElementWrapper().unbind("state-edit", this.$$d_onEditElementWrapperStateChanged);
        this.get_editElementWrapper().unbind("state-read", this.$$d_onEditElementWrapperStateChanged);
        Mscrm.OptionSetControlEditView.prototype.dispose.call(this)
    },
    get_perceivedEditElementValue: function() { return this.get_$2_4().$I_0 === "0" ? "" : this.get_$2_4().$I_0 },
    get_$2_4: function() { return this.$0_1 },
    initializeInputBehavior: function() {
        var $v_0 = this.get_view().get_valueElement();
        $v_0.mousedown(this.$$d_$7k_4);
        $v_0.mouseup(this.$$d_$7l_4);
        this.get_editElementWrapper().bind("state-edit", this.$$d_onEditElementWrapperStateChanged);
        this.get_editElementWrapper().bind("state-read", this.$$d_onEditElementWrapperStateChanged);
        if (Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari() && Mscrm.Utilities.isMobileRefresh()) {
            var $$t_2 = this;
            this.get_editElement().change(function($p1_0) { $$t_2.confirm() })
        }
    },
    $7k_4: function($p0) {
        !this.get_view().get_disabled() && this.get_view().get_valueElement().addClass("ms-crm-Inline-toggleclickState")
    },
    $7l_4: function($p0) {
        if (!this.get_view().get_disabled()) {
            var $v_0 = this.get_view().get_valueElement();
            $v_0.removeClass("ms-crm-Inline-toggleclickState");
            $v_0.addClass("ms-crm-Inline-EditHintState")
        }
    },
    confirm: function() {
        this.updateAttribute();
        this.unbindPageClick()
    },
    updateAttribute: function() {
        if ("alwaysedit" !== this.get_view().get_controlMode())
            for (var $v_0 = this.get_$2_4().get_options(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                if ($v_0[$v_1].Value.toString() === this.get_editElement().val()) continue;
                this.get_$2_4().set_editValue($v_0[$v_1].Value.toString());
                this.get_editElementWrapper().trigger("state-commit");
                break
            }
        else Mscrm.OptionSetControlEditView.prototype.updateAttribute.call(this)
    },
    onEditElementWrapperStateChanged: function($p0) {
        switch ($p0.type) {
        case "state-edit":
            break;
        case "state-read":
            break;
        default:
            break
        }
    }
};
Mscrm.TransactionCurrencyLookupControlEditView = function($p0) {
    Mscrm.TransactionCurrencyLookupControlEditView.initializeBase(this, [$p0])
};
Mscrm.TransactionCurrencyLookupControlEditView.prototype = {
    addImageExpandos: function($p0) {
        Mscrm.LookupControlEditView.prototype.addImageExpandos.call(this, $p0);
        $p0.setAttribute("cursymclm",
            this.get_viewModel().$4_0.get_currencyDisplayOption() === 1 ? "isocurrencycode" : "currencysymbol")
    },
    createEditElement: function() {
        this.set_lookupImageClass("ms-crm-Lookup-TransactionCurrency");
        return Mscrm.LookupControlEditView.prototype.createEditElement.call(this)
    }
};
Mscrm.UrlControlEditView = function($p0) { Mscrm.UrlControlEditView.initializeBase(this, [$p0]) };
Mscrm.UrlControlEditView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        return IsNull(this.get_editControlBehavior()) || this.get_editControlBehavior().get_isValidProxy()
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        var $v_0 = this.get_$2_3();
        $v_0.set_defaultEditValue($v_0.$I_0);
        var $v_1 = $v_0.$I_0.trim();
        $v_1.length > 0 &&
            $v_0.set_editValue(Mscrm.FormInputControl.UrlInputBehavior.prefixHttp($v_1, $v_0.get_maxLength()));
        this.get_editElementWrapper().trigger("state-commit")
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3(), $v_1 = $v_0.$4_0, $v_2 = document.createElement("input");
        window.UseTabletExperience && $v_2.setAttribute("type", "url");
        $v_2.setAttribute("id", this.get_editElementId());
        $v_2.setAttribute("attrName", $v_1.get_logicalName());
        $v_2.setAttribute("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_1.get_privilegeMask()));
        $v_2.setAttribute("maxLength", $v_0.get_maxLength().toString());
        $v_2.setAttribute("title", "");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Email-Address");
        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineInput");
        var $v_3 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_3)) {
            $v_2.value = $v_3;
            $v_2.setAttribute("defaultValue", $v_3)
        }
        return $P_CRM($v_2)
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_selectTextOnEditFocus() && this.get_editElement().select()
    }
};
Mscrm.AutoCompleteControlEditView = function(view) {
    this.$$d_$5h_3 = Function.createDelegate(this, this.$5h_3);
    this.$$d_$5g_3 = Function.createDelegate(this, this.$5g_3);
    this.$$d_$5f_3 = Function.createDelegate(this, this.$5f_3);
    Mscrm.AutoCompleteControlEditView.initializeBase(this, [view]);
    this.$2S_3 = false
};
Mscrm.AutoCompleteControlEditView.prototype = {
    $2S_3: false,
    dispose: function() {
        this.$K_3 = null;
        this.get_editElement().unbind("autocompleteopen");
        this.$2S_3 && this.unbindPageClick();
        Mscrm.SimpleInlineControlEditView.prototype.dispose.call(this)
    },
    get_$2_3: function() { return this.$0_1 },
    render: function() {
        Mscrm.SimpleInlineControlEditView.prototype.render.call(this);
        this.$5c_3()
    },
    get_editElementValue: function() { return this.$K_3.val() },
    set_editElementValue: function(value) {
        this.$K_3.val(value);
        this.get_editElement().val(this.get_$2_3().$4_0.get_displayValue());
        this.get_$2_3().setPropertyWithoutRaisingEvent("EditValue", value);
        return value
    },
    isEditing: function() {
        if (this.get_view().get_controlMode() === "alwaysedit") return false;
        return Mscrm.SimpleInlineControlEditView.prototype.isEditing.call(this)
    },
    updateAttribute: function() {
        Mscrm.InlineEditViewBase.prototype.updateAttribute.call(this);
        this.get_$2_3().set_defaultEditValue(this.get_$2_3().$I_0);
        this.get_editElementWrapper().trigger("state-commit")
    },
    get_defaultEditValue: function() {
        return Mscrm.SimpleInlineControlEditView.prototype.get_defaultEditValue.call(this)
    },
    set_defaultEditValue: function(value) {
        this.$K_3.attr("defaultSelected", value);
        Mscrm.SimpleInlineControlEditView.prototype.set_defaultEditValue.call(this, value);
        return value
    },
    get_behavedEditElement: function() {
        if (!IsNull(this.$K_3)) return this.$K_3[0];
        return null
    },
    createAndAppendEditElementToDom: function() {
        Mscrm.SimpleInlineControlEditView.prototype.createAndAppendEditElementToDom.call(this);
        this.get_editElementWrapper().append(this.$7u_3());
        this.$K_3.hide();
        if (window.LOCID_UI_DIR === "RTL") {
            var $v_0 = this.get_editElement(), $$t_1 = this;
            this.get_$28_3().bind("autocompleteopen",
                function() {
                    $P_CRM(".ui-autocomplete.ui-menu.ui-widget.ui-widget-content.ui-corner-all:visible")
                        .position({ of: $v_0, my: "right top", at: "right bottom" })
                })
        }
    },
    createEditElement: function() {
        var $v_0 = this.get_$2_3().$4_0, $v_1 = $P_CRM("<input></input>");
        $v_1.attr("type", "text");
        $v_1.attr("id", this.get_editElementId());
        $v_1.attr("attrName", $v_0.get_logicalName());
        $v_1.attr("attrPriv", Xrm.FormDataAttributePrivileges.toString($v_0.get_privilegeMask()));
        $v_1.addClass("ms-crm-InlineInput");
        var $v_2 = this.get_view().$R_2();
        if (!isNullOrEmptyString($v_2)) {
            $v_1.val($v_2);
            $v_1.attr("defaultValue", $v_2)
        }
        return $v_1
    },
    showEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.showEditElement.call(this);
        this.get_view().get_controlMode() !== "alwaysedit" && this.get_$28_3().autocomplete("search", "");
        this.get_$28_3().focus()
    },
    confirm: function() {
        this.get_selectedOption().text() !== this.get_editElement().val() && this.$6y_3();
        Mscrm.SimpleInlineControlEditView.prototype.confirm.call(this);
        this.$0_1.$1v_1 = false
    },
    get_selectedOption: function() { return $P_CRM("option:selected", this.$K_3) },
    $7u_3: function() {
        var $v_0 = this.$4o_3();
        this.$K_3 = $P_CRM("<select></select>");
        this.$K_3.attr("id", this.get_editElementId() + "_select");
        this.$K_3.attr("defaultSelected", $v_0);
        this.$K_3.attr("attrPriv", Xrm.FormDataAttributePrivileges.toString(this.get_$2_3().$4_0.get_privilegeMask()));
        this.$K_3.addClass("ms-crm-SelectBox");
        this.$4u_3($v_0);
        return this.$K_3
    },
    $27_3: function($p0, $p1, $p2) {
        var $v_0 = $P_CRM("<option></option>");
        $v_0.val($p1);
        $v_0.text($p2);
        $p0.append($v_0)
    },
    reinitializeOptions: function() {
        this.$K_3.empty();
        this.$4u_3(this.$4o_3())
    },
    $4o_3: function() {
        var $v_0 = this.get_$2_3().$4_0, $v_1 = Mscrm.InlineEditUtilities.getRawValue($v_0.get_initialValue());
        return IsNull($v_1) ? null : $v_1.toString()
    },
    $4u_3: function($p0) {
        isNullOrEmptyString($p0) && this.$27_3(this.$K_3, "", "");
        for (var $v_0 = this.get_$2_3().get_options(), $v_1 = -1, $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($p0 === $v_3.Value.toString()) $v_1 = $v_2;
            this.$27_3(this.$K_3, $v_3.Value.toString(), $v_3.Label)
        }
        if (!isNullOrEmptyString($p0)) {
            var $v_4 = this.$K_3.get(0);
            if (!IsNull($v_4) && $v_1 > -1) {
                $v_4.selectedIndex = $v_1;
                this.get_editElement().val($v_0[$v_1].Label)
            }
        }
    },
    get_isDirty: function() {
        return !IsNull(this.get_editControlBehavior()) && this.get_editControlBehavior().get_isDirty()
    },
    get_isValid: function() {
        if (this.$0_1.$1v_1) return false;
        else if (!IsNull(this.get_editControlBehavior())) {
            var $v_0 = this.get_editControlBehavior();
            return $v_0.get_isValid()
        }
        return false
    },
    focusEditElement: function() {
        Mscrm.InlineEditViewBase.prototype.focusEditElement.call(this);
        this.get_editElement().select()
    },
    get_$28_3: function() { return this.get_editElement() },
    $5c_3: function() {
        this.get_$28_3().autocomplete(this.$5p_3());
        this.get_$28_3().data("autocomplete")._renderItem = this.$$d_$5f_3
    },
    $5p_3: function() {
        var $v_0 = {};
        $v_0.source = this.$$d_$5g_3;
        $v_0.select = this.$$d_$5h_3;
        $v_0.minLength = 0;
        return $v_0
    },
    $5g_3: function($p0, $p1) {
        var $v_0 = this.$0_1;
        $v_0.$2F_1($p0, $p1);
        if (!this.$2S_3) {
            this.bindPageClick();
            this.$2S_3 = true
        }
    },
    $5h_3: function($p0, $p1) {
        this.$4K_3($p1.item.rawValue);
        Mscrm.SimpleInlineControlEditView.prototype.confirm.call(this);
        return true
    },
    $6y_3: function() {
        for (var $v_0 = false,
            $v_1 = this.get_editElement().val().toLowerCase(),
            $$arr_2 = this.get_$2_3().get_$4g_1(),
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_2 = $$arr_2[$$idx_4], $v_3 = $v_2.Label;
            if (!isNullOrEmptyString($v_3) && $v_3.toLowerCase() === $v_1) {
                $v_0 = true;
                this.$4K_3($v_2.Value.toString());
                break
            }
        }
        if (!$v_0) {
            this.$4K_3(this.get_$2_3().$1o_0);
            if (!Mscrm.InternalUtilities.JSTypes.isNull(this.get_$28_3()
                .data("autocomplete"))) this.get_$28_3().data("autocomplete").term = "";
            return false
        }
        return true
    },
    $4K_3: function($p0) {
        this.$K_3.val($p0);
        XUI.Html.DispatchDomEvent(this.$K_3[0], XUI.Html.CreateDomEvent("change"))
    },
    $5f_3: function($p0, $p1) {
        return $P_CRM("<li></li>").data("item.autocomplete", $p1)
            .append("<a title='" +
                CrmEncodeDecode.CrmHtmlAttributeEncode($p1.label) +
                "'>" +
                CrmEncodeDecode.CrmHtmlEncode($p1.label) +
                "</a>").appendTo($p0)
    },
    $K_3: null
};
Mscrm.EditableSelectHelper = function() {};
Mscrm.EditableSelectHelper.createElement = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = $p0 + "Input", $v_1 = document.createElement("SPAN");
    $v_1.id = $p0;
    $v_1.setAttribute("name", $v_0);
    $v_1.setAttribute("ButtonTitle", $p1);
    $v_1.setAttribute("defaultimemode", $p3);
    $v_1.setAttribute("value", $p2);
    $v_1.setAttribute("allowValueEdit", "true");
    Sys.UI.DomElement.addCssClass($v_1, "ms-crm-SelectBox");
    $v_1.appendChild(Mscrm.EditableSelectHelper.$63($v_0, $p4));
    $v_1.appendChild(Mscrm.EditableSelectHelper.$5x($p5));
    $p4 && $v_1.setAttribute("setDisabled", "1");
    return $v_1
};
Mscrm.EditableSelectHelper.createTableColumn = function($p0) {
    var $v_0 = document.createElement("COL");
    $p0 > 0 && $v_0.setAttribute("width", $p0.toString());
    return $v_0
};
Mscrm.EditableSelectHelper.$63 = function($p0, $p1) {
    var $v_0 = document.createElement("INPUT");
    $v_0.setAttribute("id", $p0);
    $v_0.setAttribute("title", "");
    $v_0.setAttribute("crmType", "sel");
    $v_0.setAttribute("style", "ime-mode:inactive");
    $v_0.className = "ms-crm-SelectBox";
    var $v_1 = document.createElement("TD");
    $v_1.className = "ms-crm-Select-Input-Container";
    $v_1.appendChild($v_0);
    var $v_2 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri
        .create($p1 ? "/_imgs/inlineedit/time_icon_disabled.png" : "/_imgs/inlineedit/time_icon.png"));
    Sys.UI.DomElement.addCssClass($v_2, "ms-crm-InlineDuration-Icon");
    var $v_3 = document.createElement("TD");
    $v_3.className = "ms-crm-InlineDuration-IconCell";
    $v_3.appendChild($v_2);
    var $v_4 = document.createElement("TR");
    $v_4.appendChild($v_1);
    $v_4.appendChild($v_3);
    var $v_5 = document.createElement("TBODY");
    $v_5.appendChild($v_4);
    var $v_6 = document.createElement("COLGROUP");
    $v_6.appendChild(Mscrm.EditableSelectHelper.createTableColumn(0));
    $v_6.appendChild(Mscrm.EditableSelectHelper.createTableColumn(21));
    var $v_7 = document.createElement("TABLE");
    $v_7.setAttribute("cellspacing", "0");
    $v_7.setAttribute("cellpadding", "0");
    $v_7.id = "selectTable";
    $v_7.className = "ms-crm-InlineDuration-InputTable";
    $v_7.appendChild($v_6);
    $v_7.appendChild($v_5);
    return $v_7
};
Mscrm.EditableSelectHelper.$5x = function($p0) {
    var $v_0 = new Sys.StringBuilder,
        $v_1 = "<table cellspacing='0' cellpadding='0' style='display:none' class='ms-crm-inlineEditableSelect'>";
    $v_0.append($v_1);
    for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) $v_0.append(Mscrm.EditableSelectHelper.$5y($p0[$v_3]));
    $v_0.append("</table>");
    var $v_2 = document.createElement("DIV");
    $v_2.innerHTML = $v_0.toString();
    return XUI.Html.DomUtils.GetFirstChild($v_2)
};
Mscrm.EditableSelectHelper.$5y = function($p0) {
    return String.format('<tr><td id="{0}" val="{1}" class=\'ms-crm-inlineSelectRow\'>{2}</td></tr>',
        CrmEncodeDecode.CrmHtmlAttributeEncode($p0.$1J_0),
        CrmEncodeDecode.CrmHtmlAttributeEncode($p0.$2n_0),
        CrmEncodeDecode.CrmHtmlEncode($p0.$2n_0))
};
Mscrm.EditableSelectOption = function($p0, $p1) {
    this.$1J_0 = $p0;
    this.$2n_0 = $p1
};
Mscrm.EditableSelectOption.prototype = {
    $1J_0: null,
    $2n_0: null,
    get_id: function() { return this.$1J_0 },
    get_value: function() { return this.$2n_0 }
};
Mscrm.InlineAutoCompleteControlView = function(inlineControlLayout) {
    Mscrm.InlineAutoCompleteControlView.initializeBase(this, [inlineControlLayout])
};
Mscrm.InlineAutoCompleteControlView.prototype = {
    get_labelElementValue: function() { return this.$0_1.get_labelValue() },
    get_getEditViewObject: function() { return new Mscrm.AutoCompleteControlEditView(this) },
    $3f_2: function() {
        var $v_0 = this.get_valueElement().text().trim();
        Mscrm.SimpleInlineControlView.prototype.$3f_2.call(this);
        this.tryUpdateValueElementText($v_0)
    },
    $R_2: function() { return Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()) },
    handleModelToViewBinding: function(jQueryEvent, propertyName) {
        switch (propertyName) {
        case "FieldOptionsChangeProperty":
            this.get_editView().reinitializeOptions();
            break;
        default:
            Mscrm.SimpleInlineControlView.prototype.handleModelToViewBinding.call(this, jQueryEvent, propertyName);
            break
        }
    },
    get_isValid: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.get_isValid.call(this);
        if (!$v_0)
            if (!isNullOrEmptyString(this.$1f_2)) {
                var $v_1 = new Mscrm.ValidationResult(false, this.$1f_2, null, true), $v_2 = [$v_1];
                this.get_editView().get_editElementWrapper().trigger("state-validated", $v_2)
            }
        return $v_0
    }
};
Mscrm.InlineControlViewBase = function(layout) {
    this.$$d_$7a_1 = Function.createDelegate(this, this.$7a_1);
    Mscrm.InlineControlViewBase.initializeBase(this, [layout])
};
Mscrm.InlineControlViewBase.prototype = {
    $0_1: null,
    $1P_1: null,
    $e_1: null,
    $2X_1: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.set_dataContext(null);
        this.$e_1 = null;
        Mscrm.InlineViewBase.prototype.dispose.call(this)
    },
    get_dataContext: function() { return this.$0_1 },
    set_dataContext: function(value) {
        !IsNull(this.$0_1) && $P_CRM(this.$0_1).unbind("ms-crm-PropertyChange", this.$$d_$7a_1);
        this.$0_1 = value;
        this.$4c_1();
        return value
    },
    $4c_1: function() { this.$5i_1() },
    $5i_1: function() { !IsNull(this.$0_1) && $P_CRM(this.$0_1).bind("ms-crm-PropertyChange", this.$$d_$7a_1) },
    $7a_1: function($p0) {
        var $v_0 = arguments[1];
        this.handleModelToViewBinding($p0, $v_0)
    },
    updateControlProperties: function(controlProperties) {},
    resetLayout: function() { this.get_layout().resetForRead() },
    getDisabled: function() { return this.get_disabled() },
    setDisabled: function(isDisabled) { this.set_disabled(isDisabled) },
    clearNotification: function(uniqueId) {
        if (this.get_chromeBehavior().$b_4)
            if (isNullOrEmptyString(uniqueId) || uniqueId === this.$2X_1) {
                this.get_chromeBehavior().hideErrorDivAndResetMessage();
                this.get_chromeBehavior().set_isNotificationSetViaClientApi(false);
                this.$2X_1 = null;
                return true
            } else return false;
        return false
    },
    clearNotifications: function() { return this.clearNotification(null) },
    addNotification: function(notification) { return false },
    setNotification: function(message, uniqueId) {
        if (this.getVisible() &&
            (!Mscrm.IFormUIControl.isInstanceOfType(this) || this.isVisibleInTree()) &&
            this.get_chromeBehavior().showErrorDivAndSetMessage(message)) {
            this.$2X_1 = uniqueId;
            this.get_chromeBehavior().set_isNotificationSetViaClientApi(true);
            return true
        }
        return false
    },
    hasNotification: function() {
        if (!isNullOrEmptyString(this.$2X_1)) return true;
        return false
    },
    getControlType: function() { return "standard" },
    getParent: function() { return this.get_parentSection() },
    get_innerControl: function() { return this },
    get_controlId: function() { return null },
    get_labelIcon: function() { return this.$1P_1 },
    set_labelIcon: function(value) {
        this.$1P_1 = value;
        return value
    },
    isEditing: function() { return false },
    postRegisterComponent: function() {},
    get_parentSection: function() { return this.$e_1 },
    set_parentSection: function(value) {
        this.$e_1 = value;
        return value
    }
};
Mscrm.InlineCheckBoxControlView = function(layout) { Mscrm.InlineCheckBoxControlView.initializeBase(this, [layout]) };
Mscrm.InlineCheckBoxControlView.prototype = {
    $1b_3: false,
    get_getEditViewObject: function() { return new Mscrm.CheckBoxControlEditView(this) },
    get_viewModel: function() { return this.$0_1 },
    $R_2: function() {
        return IsNull(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()))
            ? null
            : Number.parseInvariant(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue())
                .toString())
    },
    get_disabled: function() { return this.$1b_3 },
    set_disabled: function(value) {
        this.setDisabled(value);
        return value
    },
    setDisabled: function(isDisabled) {
        this.$1b_3 = isDisabled;
        this.get_isEditControlInitialized() && this.get_editView().setDisabled(isDisabled)
    },
    toggleCheckBox: function() {
        if (this.get_isEditControlInitialized() && !this.$1b_3) {
            var $v_0 = this.get_editView(), $v_1 = !Mscrm.Utilities.parseBoolean($v_0.get_editElementValue());
            $v_0.set_editElementValue($v_1.toString());
            $v_0.confirm()
        }
    }
};
Mscrm.InlineDateTimeControlView = function(layout) { Mscrm.InlineDateTimeControlView.initializeBase(this, [layout]) };
Mscrm.InlineDateTimeControlView.prototype = {
    get_$2_3: function() { return this.$0_1 },
    setViewShowTime: function(visible) {
        var $v_0 = Mscrm.Utilities
            .getChildElementsByClassName($get(this.get_editView().get_editElementId()),
                "ms-crm-InlineDateTime-TimeCell ms-crm-DateTime-Container-Input",
                true);
        if (!IsNull($v_0) && !IsNull($v_0[0])) $v_0[0].style.display = visible ? "" : "none";
        this.get_$2_3().$25_1 = !visible
    },
    get_getEditViewObject: function() { return new Mscrm.DateTimeControlEditView(this) },
    isElementInChrome: function(targetElement) {
        var $v_0 = Mscrm.InlineViewBase.prototype.isElementInChrome.call(this, targetElement);
        if (!$v_0 && this.get_isEditControlInitialized()) {
            var $v_1 = this.get_editView().get_editElementId(),
                $v_2 = "Dialog_" + $v_1 + "CalContainerDateInput_miniCal",
                $v_3 = "Dialog_" + $v_1 + "TimeselectPopup",
                $v_4 = "ms-crm-MiniCal";
            $v_0 = targetElement.parents("#" + $v_2).length > 0 ||
                targetElement.parents("#" + $v_3).length > 0 ||
                targetElement.parents("." + $v_4).length > 0
        }
        return $v_0
    },
    updateValueElementText: function(displayValue) {
        if (!isNullOrEmptyString(this.$0_1.get_attribute().get_displayValue()) && isNullOrEmptyString(this.$k_2)) {
            var $v_0 = this.get_isEditControlInitialized()
                    ? this.get_$11_3().get_showTime()
                    : this.$0_1.get_attribute().get_attributeFormat() === "datetime",
                $v_1 = String.format('<span class="{0}"></span>', "ms-crm-Inline-DateTimeSpacer"),
                $v_2 = this.$8F_3(),
                $v_3 = Mscrm.InlineDateTimeAttribute
                    .formatDisplayValue($v_2, this.$0_1.get_attribute().get_attributeFormat(), $v_1, $v_0);
            this.get_valueElementInnerSpan().html($v_3)
        } else this.get_valueElementInnerSpan().text(displayValue);
        this.valueElementInnerDiv(displayValue);
        this.get_layout().appendAndWrapValueElementMask()
    },
    $8F_3: function() {
        var $v_0 = this.get_isEditControlInitialized() ? this.get_$11_3().get_allDayDisplay() : false,
            $v_1 = !$v_0
                ? this.get_$2_3().$4_0.get_rawValue()
                : decrementDayAcrossTimeZones(this.get_$2_3().$4_0.get_rawValue());
        return $v_1
    },
    get_$11_3: function() {
        var $v_0 = this.get_editControlBehavior();
        return $v_0
    },
    get_$4e_3: function() {
        var $v_0 = this.get_editControlBehavior().get_initialValue();
        if (!IsNull($v_0) && !isNaN($v_0.getTime()))
            return Mscrm.InlineDateTimeAttribute
                .formatDisplayValue($v_0, this.get_$2_3().$4_0.get_attributeFormat(), "\n");
        return null
    },
    getToolTip: function(displayValue) {
        if (!isNullOrEmptyString(this.$0_1.get_attribute()
                .get_displayValue()) &&
            isNullOrEmptyString(this.$k_2)) return CrmEncodeDecode.CrmHtmlDecode(displayValue);
        else return displayValue
    },
    $R_2: function() {
        var $v_0 = this.$0_1.get_attribute().get_initialValue();
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.InlineEditUtilities.getRawValue($v_0);
            if (!isNullOrEmptyString($v_1)) return ParseUtcDate($v_1)
        }
        return null
    },
    getShowTime: function() { return this.get_$11_3().get_showTime() },
    setShowTime: function(showTime) {
        this.get_$11_3().set_showTime(showTime);
        this.updateValueElementText(this.get_$4e_3())
    },
    getIsAllDay: function() { return this.get_$11_3().get_allDayDisplay() },
    setIsAllDay: function(allDayDisplay) {
        this.get_$11_3().set_allDayDisplay(allDayDisplay);
        this.updateValueElementText(this.get_$4e_3())
    }
};
Mscrm.InlineDurationControlView = function($p0) { Mscrm.InlineDurationControlView.initializeBase(this, [$p0]) };
Mscrm.InlineDurationControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.DurationControlEditView(this) },
    isElementInChrome: function($p0) {
        var $v_0 = Mscrm.InlineViewBase.prototype.isElementInChrome.call(this, $p0);
        if (!$v_0 && this.get_isEditControlInitialized()) {
            var $v_1 = this.get_editView().get_editElementId() + "SelectInput";
            $v_0 = $p0.parents("#" + $v_1).length > 0
        }
        return $v_0
    },
    addControlTypeCssClassToChromeElement: function() { this.get_chromeElement().addClass("ms-crm-Duration") },
    $R_2: function() {
        var $v_0 = Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue());
        return IsNull($v_0) ? null : Number.parseInvariant($v_0.toString())
    }
};
Mscrm.InlineEmailAddressControlView = function($p0) { Mscrm.InlineEmailAddressControlView.initializeBase(this, [$p0]) };
Mscrm.InlineEmailAddressControlView.prototype = {
    $6_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$6_3) && this.$6_3.unbind();
        Mscrm.SimpleInlineControlView.prototype.dispose.call(this)
    },
    get_getEditViewObject: function() { return new Mscrm.EmailAddressControlEditView(this) },
    updateValueElementText: function($p0) {
        var $v_0 = $P_CRM("a", this.get_valueElement());
        $v_0.remove();
        if ($p0 !== this.$0_1.get_emptyValuePlaceholder() && this.$0_1.get_attribute().get_privilegeMask()) {
            this.$6_3 = $P_CRM("<a></a>");
            this.$6_3.attr("href", "#");
            this.$6_3.attr("tabindex", "-1");
            this.$6_3.addClass("ms-crm-gridurl");
            var $$t_3 = this;
            this.$6_3.click(function($p1_0) {
                Mscrm.ReadFormUtilities.handleEmailAddressClick(this);
                $p1_0.stopPropagation();
                $p1_0.preventDefault()
            });
            this.$6_3.text($p0);
            this.get_valueElementInnerSpan().text("");
            this.get_valueElementInnerSpan().append(this.$6_3)
        } else this.get_valueElementInnerSpan().text($p0);
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    }
};
Mscrm.InlineEmailBodyControlView = function(layout) {
    this.$$d_$7h_3 = Function.createDelegate(this, this.$7h_3);
    Mscrm.InlineEmailBodyControlView.initializeBase(this, [layout])
};
Mscrm.InlineEmailBodyControlView.prototype = {
    $c_3: null,
    $1e_3: null,
    get_getEditViewObject: function() { return new Mscrm.EmailBodyControlEditView(this) },
    get_viewModel: function() { return this.$0_1 },
    get_dataAttribute: function() { return $find(this.get_viewModel().$4_0.get_dataAttributeId()) },
    get_updatedDataValue: function() { return this.get_dataAttribute().get_updatedDataValue() },
    set_updatedDataValue: function(value) {
        this.get_dataAttribute().set_updatedDataValue(value);
        return value
    },
    get_mainElement: function() { return this.$1e_3 },
    set_mainElement: function(value) {
        this.$1e_3 = value;
        return value
    },
    updateValueElementText: function(displayValue) {
        if (this.get_isEditControlInitialized()) {
            if (!IsNull(this.$c_3)) {
                var $v_0 = this.get_editView().get_editElement().get(0);
                if (!IsNull($get("trBlockMsg", $v_0))) this.$c_3.innerHTML = ""
            }
        } else {
            var $v_1 = this.get_valueElementInnerSpan()[0].getElementsByTagName("iframe");
            if ($v_1.length > 0) {
                var $v_2 = $get("descriptionHtmlBar", this.get_valueElementInnerSpan()[0]);
                $P_CRM($v_2).css("display", "none");
                this.$8K_3($v_1[0]);
                this.get_valueElement().css("display", "inline");
                this.get_valueElementInnerSpan().css("display", "inline");
                $v_1[0].src = $v_1[0].getAttribute("url").toString();
                this.$c_3 = $get("trBlockMsg", this.get_valueElementInnerSpan()[0]);
                var $v_3 = this.showUnsafeScriptWarning(this.$c_3, false);
                if (!IsNull($v_3)) {
                    var $v_4 = this.get_valueElementInnerSpan()[0].getElementsByTagName("iframe");
                    $v_4.length > 0 && $addHandler($v_4[0], "load", this.$$d_$7h_3)
                }
            }
        }
    },
    $7h_3: function($p0) {
        var $v_0 = this.get_valueElementInnerSpan()[0].getElementsByTagName("iframe"),
            $v_1 = this.get_updatedDataValue(),
            $v_2 = "";
        if (!IsNull($v_1) && !IsNull($v_1["safeValue"])) $v_2 = $v_1["safeValue"];
        $v_2 = this.$8Y_3($v_2);
        $v_0[0].contentWindow.document.body.innerHTML = $v_2;
        $v_0[0].contentWindow.document.body.setAttribute("contentEditable", false);
        $removeHandler($v_0[0], "load", this.$$d_$7h_3)
    },
    $8K_3: function($p0) {
        var $v_0 = Mscrm.InlineEditDataService.get_formEntity(),
            $v_1 = $v_0.get_typeName(),
            $v_2 = $v_0.get_recordId(),
            $v_3 = CrmEncodeDecode.CrmUrlDecode($p0.getAttribute("url")),
            $v_4 = new Sys.StringBuilder($v_3);
        if (-1 === $v_4.toString().indexOf("id=")) {
            if (-1 !== $v_4.toString().indexOf("?")) $v_4.append("&id=");
            else $v_4.append("?id=");
            $v_4.append($v_2);
            $v_4.append("&entityType=");
            $v_4.append($v_1)
        }
        $p0.setAttribute("url", $v_4.toString())
    },
    $8Y_3: function($p0) {
        var $v_0 = document.createElement("div");
        $v_0.innerHTML = $p0;
        var $v_1 = $v_0.getElementsByTagName("a");
        if (!IsNull($v_1) && $v_1.length > 0)
            for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) $v_1[$v_6].setAttribute("target", "_blank");
        var $v_2 = Mscrm.CrmUri.create("/Activities/Attachment/download.aspx"),
            $v_3 = $v_2.toString(),
            $v_4 = this.get_chromeElement().attr("wrpcTokenForAttachment"),
            $v_5 = $v_0.getElementsByTagName("img");
        if (!IsNull($v_5) && $v_5.length > 0)
            for (var $v_7 = 0; $v_7 < $v_5.length; $v_7++) {
                var $v_8 = $v_5[$v_7].getAttribute("src").toString();
                if ($v_8.indexOf("/Activities/Attachment/download.aspx") > 0) {
                    var $v_9 = Mscrm.CrmUri.create($v_8);
                    $v_5[$v_7].setAttribute("src", $v_3 + $v_9.get_queryString() + $v_4)
                }
            }
        return $v_0.innerHTML
    },
    $3f_2: function() {
        this.$c_3 = document.createElement("span");
        this.get_valueElementInnerSpan().before($P_CRM(this.$c_3));
        this.set_updatedDataValue(this.get_viewModel().$4_0.get_initialValue());
        if (this.get_isEditControlInitialized())
            this.$1e_3 = this.get_editView().get_editElement().get(0).cloneNode(true);
        else this.$1e_3 = this.get_valueElement().find("[mainElement='true']").first().get(0).cloneNode(true);
        Mscrm.SimpleInlineControlView.prototype.$3f_2.call(this)
    },
    getToolTip: function(displayValue) { return window.LOCID_EMAIL_BODY_TOOLTIP },
    $R_2: function() {
        if (!IsNull(this.$0_1.get_attribute().get_initialValue()) &&
            "safeValue" in this.$0_1.get_attribute().get_initialValue()
        ) return this.$0_1.get_attribute().get_initialValue()["safeValue"];
        else return Mscrm.InlineEditUtilities.getDecodedValue(this.$0_1.get_attribute().get_initialValue())
    },
    showUnsafeScriptWarning: function(containerElement, isTableElement) {
        var $v_0 = this.$1e_3.getElementsByTagName("iframe")[0],
            $v_1 = CrmEncodeDecode.CrmUrlDecode($v_0.getAttribute("url")),
            $v_2 = Mscrm.InlineEditDataService.get_formEntity(),
            $v_3 = $v_2.get_typeName(),
            $v_4 = $v_2.get_recordId(),
            $v_5 = this.$6f_3(),
            $v_6 = this.get_updatedDataValue();
        if (!IsNull($v_6) && !IsNull($v_6["isUnsafe"]) && $v_6["isUnsafe"] === "1" && $v_5 !== 3) {
            containerElement.id = "trBlockMsg";
            var $v_7 = document.createElement("td");
            $v_7.style.verticalAlign = "bottom";
            var $v_8 = document.createElement("table");
            Sys.UI.DomElement.addCssClass($v_8, "ms-crm-Email-Body-Error");
            Sys.UI.DomElement.addCssClass($v_8, "ms-crm-Inline-Email-Body-Error");
            if (isTableElement) {
                containerElement.appendChild($v_7);
                $v_7.appendChild($v_8)
            } else containerElement.appendChild($v_8);
            var $v_9 = document.createElement("tr");
            $v_8.appendChild($v_9);
            var $v_A = document.createElement("td"), $v_B = "";
            if ($v_5 === 1) $v_B = LOCID_EMAIL_BADCONTENT_WARNING;
            else $v_B = LOCID_EMAIL_WARNING_NO_UNBLOCK;
            XUI.Html.SetText($v_A, $v_B);
            $v_9.appendChild($v_A);
            var $v_C = false, $v_D = "followup";
            if (-1 !== $v_1.indexOf($v_D))
                $v_C = $v_1.substr($v_1
                        .indexOf("followup") +
                        $v_D.length,
                        $v_1.indexOf("followup") + $v_D.length + 1) ===
                    "1"
                    ? true
                    : false;
            if (!$v_C && $v_3 === "email" && !isNullOrEmptyString($v_2.get_recordId()) && $v_5 === 1) {
                var $v_E = this.get_chromeElement().attr("wrpcToken"), $v_F = document.createElement("span");
                Sys.UI.DomElement.addCssClass($v_F, "ms-crm-Unblock-Content-Link");
                $v_F.setAttribute("onclick", "unblock('" + $v_4 + "','" + $v_E + "');");
                XUI.Html.SetText($v_F, LOCID_EMAIL_BADCONTENT_UNBLOCK);
                $v_A.appendChild($v_F)
            }
            Mscrm.Utilities.isIE() && containerElement.parentNode.parentNode.setAttribute("height", "90%");
            return containerElement
        }
        return null
    },
    $6f_3: function() {
        var $v_0 = 1;
        if (!IsNull(this.get_updatedDataValue()) && !IsNull(this.get_updatedDataValue()["SecuritySettingForEmail"])) {
            var $v_1 = parseInt(this.get_updatedDataValue()["SecuritySettingForEmail"]);
            $v_1 = $v_1 > 3 || $v_1 < 1 ? 1 : $v_1;
            $v_0 = $v_1
        }
        return $v_0
    }
};
Mscrm.InlineEmailEngagementActionsControlView = function(emailRecipientActivity) {
    this.$j_0 = emailRecipientActivity;
    var $v_0 = emailRecipientActivity.get_element().id.substr(0, this.$j_0.get_element().id.length);
    this.$5_0 = $get($v_0);
    this.$C_0 = $get($v_0 + "_c")
};
Mscrm.InlineEmailEngagementActionsControlView.prototype = {
    $j_0: null,
    $C_0: null,
    $5_0: null,
    $Y_0: null,
    get_element: function() { return this.$5_0 },
    set_element: function(value) {
        this.$5_0 = value;
        return value
    },
    get_emailEngagementActions: function() { return this.$j_0 },
    set_emailEngagementActions: function(value) {
        this.$j_0 = value;
        return value
    },
    get_parentSection: function() { return this.$Y_0 },
    set_parentSection: function(value) {
        this.$Y_0 = value;
        return value
    },
    dispose: function() { Mscrm.Utilities.destroyObject(this) },
    getLabel: function() {
        if (IsNull(this.$C_0)) return null;
        return XUI.Html.GetText(this.$C_0)
    },
    setLabel: function(label) {
        if (IsNull(this.$C_0)) return;
        XUI.Html.SetText(this.$C_0, label)
    },
    getName: function() { return this.$5_0.id },
    getParent: function() { return this.$Y_0 },
    getVisible: function() { return this.$5_0.style.display !== "none" },
    setVisible: function(visible) {
        if (!IsNull(this.$C_0)) this.$C_0.style.display = visible ? "block" : "none";
        this.$5_0.style.display = visible ? "block" : "none"
    },
    setFocus: function() { this.$j_0.setFocus() },
    getControlType: function() { return "emailengagementactionscontrol" },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this }
};
Mscrm.InlineIFrameControlView = function(element) {
    this.$$d_$4w_0 = Function.createDelegate(this, this.$4w_0);
    this.$B_0 = new Sys.EventHandlerList;
    this.$N_0 = element;
    var $v_0 = $get(this.$N_0.id + "_d");
    this.$M_0 = $P_CRM("#" + this.$N_0.id + "_d");
    if (!IsNull($v_0)) this.$L_0 = XUI.Html.DomUtils.GetFirstChild($v_0);
    var $v_1 = $P_CRM(this.$N_0).parents("div.ms-crm-InlineTabBody-Read:first");
    if (!IsNull($v_1) && $v_1.css("display") === "none") {
        var $$t_3 = this;
        Mscrm.OnLoadDeferredExecutor.queueCallback(function() { $$t_3.$5d_0() }, 2)
    }
    Mscrm.InlineControlFactory.registerForDispose(this)
};
Mscrm.InlineIFrameControlView.loadHandler = function(id) {
    if (!Mscrm.InternalUtilities.Utilities.isTurboForm() && !IsNull(Xrm.Page.ui) && !IsNull(Xrm.Page.ui.controls)) {
        var $v_0 = Xrm.Page.ui.controls.get(id);
        !IsNull($v_0) && Mscrm.InlineIFrameControlView.isInstanceOfType($v_0) && $v_0.$6R_0();
        !IsNull($v_0) && Mscrm.InlineIFrameControlView.setIFrameHeight(id)
    }
};
Mscrm.InlineIFrameControlView.setIFrameHeight = function(id) {
    var $v_0 = $P_CRM("#" + id + "_d");
    if (!IsNull($v_0.attr("data-isautoexpand"))) {
        var $v_1 = $v_0.attr("data-isautoexpand").toString();
        if ($v_1.toLowerCase() === "true" && !IsNull($v_1)) {
            var $v_2 = $v_0.parents(".ms-crm-FormSection-Container"),
                $v_3 = $v_2.parent(),
                $v_4 = $v_3.parent(),
                $v_5 = $v_4.height() - $v_3.height() + $v_0.height();
            $v_0.css("height", $v_5 + "px")
        }
    }
};
Mscrm.InlineIFrameControlView.prototype = {
    $N_0: null,
    $L_0: null,
    $e_0: null,
    $1u_0: null,
    $M_0: null,
    _disposed: false,
    $5d_0: function() {
        var $v_0 = $P_CRM(this.$N_0).parents("div.ms-crm-InlineTab-Read:first");
        if (!IsNull($v_0) && $v_0.length > 0) {
            var $v_1 = $find($v_0[0].id);
            !IsNull($v_1) && $v_1.get_displayState() === "collapsed" && $v_1.add_tabStateChange(this.$$d_$4w_0)
        }
    },
    $4w_0: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            var $v_0 = $p0;
            $v_0.remove_tabStateChange(this.$$d_$4w_0);
            var $v_1 = this.$N_0.getAttribute("url").toString();
            this.setSrc($v_1)
        }
    },
    dispose: function() {
        if (this._disposed) return;
        Mscrm.Utilities.destroyObject(this.$B_0);
        this.$N_0 = null;
        this.$L_0 = null;
        this._disposed = true
    },
    add_readyStateComplete: function(value) { this.$B_0.addHandler("ReadyStateComplete", value) },
    remove_readyStateComplete: function(value) { this.$B_0.removeHandler("ReadyStateComplete", value) },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this },
    get_labelContainerElement: function() { return this.$M_0 },
    set_labelContainerElement: function(value) {
        this.$M_0 = value;
        return value
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getLabel: function() { return !IsNull(this.$L_0) ? XUI.Html.GetText(this.$L_0) : null },
    getName: function() { return this.$N_0.id },
    getParent: function() { return this.get_parentSection() },
    getVisible: function() { return this.$M_0.css("display") === "none" ? false : true },
    setFocus: function() { this.$N_0.focus() },
    setLabel: function(label) { !IsNull(this.$L_0) && XUI.Html.SetText(this.$L_0, label) },
    setVisible: function(visible) {
        var $v_0 = $P_CRM("#" + this.$N_0.id + "_d"), $v_1 = $v_0.parents("table").last();
        !IsNull($v_1) && $v_1.css("table-layout", "auto");
        var $v_2 = $get(this.$N_0.id + "_c");
        if (!IsNull($v_2)) $v_2.style.display = visible ? "" : "none";
        if (visible) {
            this.$5N_0();
            Mscrm.InlineEditControlCommonUtility.showParentView(this.get_parentSection());
            this.$M_0.show();
            this.get_$1D_0().show();
            this.get_$t_0().show()
        } else {
            this.$M_0.hide();
            Mscrm.InlineEditControlCommonUtility
                .isElementAllChildrenHidden(this.get_$1D_0()) &&
                this.get_$1D_0().hide();
            Mscrm.InlineEditControlCommonUtility.isElementAllChildrenHidden(this.get_$t_0()) && this.get_$t_0().hide();
            Mscrm.InlineEditControlCommonUtility.hideParentViewIfNoControlsVisible(this.get_parentSection())
        }
        Mscrm.InlineEditControlCommonUtility.setUnusedRowsVisibility(this.$M_0, this.get_$t_0(), visible)
    },
    $U_0: null,
    get_$1D_0: function() {
        if (IsNull(this.$U_0) || !this.$U_0.length) this.$U_0 = this.$M_0.parents("td").first();
        return this.$U_0
    },
    $Z_0: null,
    get_$t_0: function() {
        if (IsNull(this.$Z_0) || !this.$Z_0.length) this.$Z_0 = this.$M_0.parents("tr").first();
        return this.$Z_0
    },
    $5N_0: function() {
        var $v_0 = $P_CRM(this.$N_0), $v_1 = $v_0.parents("td");
        $v_1.length > 0 && $v_1.first().show();
        var $v_2 = $v_0.parents("tr");
        $v_2.length > 0 && $v_2.first().show();
        var $v_3 = this.get_parentSection();
        !IsNull($v_3) && $v_3.setVisible(true)
    },
    getControlType: function() { return "iframe" },
    get_parentSection: function() { return this.$e_0 },
    set_parentSection: function(value) {
        this.$e_0 = value;
        return value
    },
    getInitialUrl: function() {
        if (IsNull(this.$1u_0)) this.$1u_0 = this.$N_0.getAttribute("url").toString();
        return this.$1u_0
    },
    getSrc: function() { return this.$N_0.getAttribute("url").toString() },
    getObject: function() { return this.$N_0 },
    setSrc: function(source) {
        this.$N_0.contentWindow.location.replace(source);
        if (IsNull(this.$1u_0)) this.$1u_0 = this.$N_0.getAttribute("url").toString();
        this.$N_0.setAttribute("url", source)
    },
    $6R_0: function() {
        var $v_0 = this.$B_0.getHandler("ReadyStateComplete");
        !IsNull($v_0) && $v_0(this.getWrapper(), Sys.EventArgs.Empty)
    }
};
Mscrm.InlineLookupControlView = function(layout) {
    this.$$d_$7t_3 = Function.createDelegate(this, this.$7t_3);
    this.$$d_$79_3 = Function.createDelegate(this, this.$79_3);
    Mscrm.InlineLookupControlView.initializeBase(this, [layout])
};
Mscrm.InlineLookupControlView.$6p = function($p0) {
    switch ($p0) {
    case "single":
        return 1;
    case "multi":
        return 2;
    case "subject":
        return 3;
    default:
        return 1
    }
};
Mscrm.InlineLookupControlView.prototype = {
    $1B_3: null,
    $3n_3: '<label for="{1}" id="{3}"><div class="ms-crm-div-NotVisible">{0}</div></label>{2}',
    get_$i_3: function() { return this.get_editControlBehavior() },
    get_getEditViewObject: function() { return new Mscrm.LookupControlEditView(this) },
    get_viewModel: function() { return this.$0_1 },
    $5u_2: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this);
        $v_0.set_lookupStyle(Mscrm.InlineLookupControlView.$6p(this.get_viewModel().get_lookupStyle()));
        return $v_0
    },
    isElementInLookupValueLink: function(targetElement) {
        var $v_0 = this.get_valueElement().find(".ms-crm-Lookup-Item");
        return targetElement.parents("." + $v_0.attr("class")).length > 0 || targetElement.get(0) === $v_0.get(0)
    },
    isItemAmbiguous: function() {
        if (!this.get_isEditControlInitialized()) return false;
        return this.get_editView().isItemAmbiguous()
    },
    $R_2: function() { return Mscrm.InlineEditUtilities.getLookupValue(this.get_viewModel().$4_0.get_initialValue()) },
    addCustomFilter: function(fetchXmlFilter, entityType) {
        this.get_$i_3().addCustomFilter(fetchXmlFilter, entityType)
    },
    addCustomView: function(viewGuid, entityName, viewDisplayName, fetchXml, layoutXml, isDefault) {
        this.get_$i_3().AddCustomView(viewGuid, entityName, viewDisplayName, fetchXml, layoutXml, isDefault)
    },
    allowUserToDisableRelationshipFilter: function(allowFilterOff) {
        this.get_$i_3().AddParam("AllowFilterOff", allowFilterOff.toString())
    },
    getDefaultView: function() { return this.get_$i_3().getDefaultView() },
    setDefaultView: function(viewGuid) { this.get_$i_3().setDefaultView(viewGuid) },
    addPreSearch: function(handler) {
        !this.get_isEditControlInitialized() && this.tryCompleteOnDemandInitialization();
        var $v_0 = this.get_editView();
        $v_0.$r_3.addHandler($v_0.get_preSearchEvent(), handler, false)
    },
    removePreSearch: function(handler) {
        !this.get_isEditControlInitialized() && this.tryCompleteOnDemandInitialization();
        var $v_0 = this.get_editView();
        $v_0.$r_3.removeHandler($v_0.get_preSearchEvent(), handler)
    },
    setParameter: function(name, value) { this.get_$i_3().AddParam(name, value) },
    getControlType: function() { return "lookup" },
    updateControlProperties: function(controlProperties) {
        if (IsNull(controlProperties) && !this.get_isEditControlInitialized() || IsNull(this.get_editView())) return;
        var $v_0 = $get(this.get_editView().get_editElementId());
        this.get_editView().$4U_3(controlProperties, $v_0)
    },
    isElementInChrome: function(targetElement) {
        if (IsNull(targetElement)) return false;
        var $v_0 = Mscrm.InlineViewBase.prototype.isElementInChrome.call(this, targetElement);
        if (this.get_isEditControlInitialized())
            $v_0 = $v_0 || this.$7K_3(targetElement) || this.$7J_3(targetElement) || this.$7I_3(targetElement);
        return $v_0
    },
    $7K_3: function($p0) {
        var $v_0 = false, $v_1 = $P_CRM($get("Dialog_" + this.get_chromeElement().attr("id") + "_i_IMRU"));
        $v_0 = $p0.parents("#" + $v_1.attr("id")).length > 0 || $p0.get(0) === $v_1.get(0);
        return $v_0
    },
    $7J_3: function($p0) {
        var $v_0 = false, $v_1 = $P_CRM($get("Dialog_" + this.get_chromeElement().attr("id") + "_i_IMenu"));
        $v_0 = $p0.parents("#" + $v_1.attr("id")).length > 0 || $p0.get(0) === $v_1.get(0);
        return $v_0
    },
    $7I_3: function($p0) {
        var $v_0 = false,
            $v_1 = this.get_editView().get_editControlBehavior(),
            $v_2 = $v_1.inlineNewFlyOutId(),
            $v_3 = this.get_chromeElement().attr("isInlineNewEnabled");
        if (!isNullOrEmptyString($v_3) && $v_3 === "1") {
            var $v_4 = $P_CRM($get($v_2));
            $v_0 = Mscrm.SimpleInlineControlView.prototype.isElementInFlyOut.call(this, $p0) ||
                $p0.get(0) === $v_4.get(0);
            if (!$v_0) {
                var $$t_A = this;
                $P_CRM("div.ms-crm-Inline-Chrome", $v_4).each(function($p1_0, $p1_1) {
                    var $v_5 = Sys.UI.Behavior.getBehaviors($p1_1);
                    if (!IsNull($v_5) && $v_5.length)
                        if (!IsNull($v_5[0].get_view())) {
                            var $v_6 = $v_5[0].get_view();
                            if ($v_6.isElementInChrome($p0)) {
                                $v_0 = true;
                                return false
                            }
                        }
                    return true
                })
            }
        }
        return $v_0
    },
    blur: function() { this.get_isEditControlInitialized() && this.get_editView().$4Z_3(true) },
    updateReadLookupHtml: function() {
        this.get_isEditControlInitialized() && this.get_editView().updateReadLookupHtml()
    },
    createReadLookupItemHtmlForUnresolved: function(lookupItem) {
        if (IsNull(lookupItem)) return null;
        var $v_0 = new Mscrm.Proxies.LookupControlItemProxy;
        $v_0.set_element(lookupItem);
        var $v_1 = new Mscrm.LookupItemView;
        $v_1.set_lookupControlItemProxy($v_0);
        $v_1.set_lookupStyle(this.get_viewModel().get_lookupStyle());
        $v_1.set_lookupTypes(this.get_viewModel().get_lookupTypes());
        $v_1.set_controlMode(this.get_controlMode());
        return $v_1
    },
    createReadLookupItemHtml: function(lookupItem) {
        if (IsNull(lookupItem) || isNullOrEmptyString(lookupItem.id)) return null;
        var $v_0 = new Mscrm.Proxies.LookupControlItemProxy;
        $v_0.set_element(lookupItem);
        var $v_1 = new Mscrm.LookupItemView;
        $v_1.set_lookupControlItemProxy($v_0);
        $v_1.set_useTabletExperience(window.UseTabletExperience);
        $v_1.set_lookupStyle(this.get_viewModel().get_lookupStyle());
        $v_1.set_lookupTypes(this.get_viewModel().get_lookupTypes());
        var $v_2 = Mscrm.Presence.PresenceControlFactory.get_instance();
        $v_1.set_presenceEnabled(window._bPresenceEnabled && !IsNull($v_2) && $v_2.get_presenceEnabled());
        return $v_1
    },
    $3T_3: function($p0) {
        if (IsNull($p0) || 0 === $p0.length) return;
        this.processItems($p0)
    },
    updateValueElementText: function(displayValue) {
        if (displayValue !== this.$0_1.get_emptyValuePlaceholder()) {
            var $v_0 = this.$0_1.get_attribute().get_rawValue();
            if (!IsNull($v_0) && $v_0.length > 0) {
                var $v_1 = this.get_valueElement().children("label");
                if (!IsNull($v_1) && !IsNull($v_1[0])) {
                    var $v_2 = $v_1[0].getAttribute("for"), $v_3 = $v_1[0].getAttribute("id");
                    $v_3 = $v_3.replace("_label", "");
                    this.get_valueElement().empty();
                    this.get_valueElement().html(String.format(this.$3n_3, $v_3 + " " + displayValue, $v_2, "", $v_3))
                } else this.get_valueElement().empty();
                this.$3T_3($v_0)
            }
        } else {
            var $v_4 = this.get_valueElement().children("label");
            if (!IsNull($v_4) && !IsNull($v_4[0])) {
                var $v_5 = $v_4[0].getAttribute("for"), $v_6 = $v_4[0].getAttribute("id");
                $v_6 = $v_6.replace("_label", "");
                this.get_valueElement().html(String.format(this.$3n_3,
                    $v_6 + " " + displayValue,
                    $v_5,
                    displayValue,
                    $v_6))
            } else this.get_valueElement().text(displayValue)
        }
        this.get_layout().appendAndWrapValueElementMask()
    },
    processItems: function(items) {
        for (var $v_0 = 0; $v_0 < items.length; $v_0++) {
            var $v_1 = items[$v_0];
            if (!IsNull($v_1.keyValues) &&
                isNullOrEmptyString($v_1.processId) &&
                isNullOrEmptyString($v_1.processTimestamp)) {
                var $v_6 = $v_1.keyValues["processid"];
                if (!IsNull($v_6)) $v_1.processId = $v_6.value;
                $v_6 = $v_1.keyValues["processts"];
                if (!IsNull($v_6)) $v_1.processTimestamp = $v_6.value
            }
            var $v_2 = this.get_chromeElement().attr("allowUnresolvedPartiesOnEmailSend");
            !IsNull($v_2) && Mscrm.InlineLookupUtility.$8D(this.get_controlMode(), $v_1, "1" === $v_2);
            var $v_3;
            switch ($v_1.category) {
            case 1:
            case 2:
            case 3:
                var $v_4 = items[$v_0];
                if ($v_0 !== items.length - 1) $v_4.name = items[$v_0].name + ";";
                $v_3 = this.createReadLookupItemHtmlForUnresolved($v_4);
                !IsNull($v_3) && this.get_valueElement().append($P_CRM($v_3.get_lookupItemElement().get_element()));
                break;
            default:
                var $v_5 = items[$v_0];
                if ($v_0 !== items.length - 1) $v_5.name = items[$v_0].name + ";";
                $v_3 = this.createReadLookupItemHtml($v_5);
                if (!IsNull($v_3)) {
                    this.get_valueElement().append($P_CRM($v_3.get_lookupItemElement().get_element()));
                    this.get_valueElement().append($P_CRM($v_3.get_lookupItemHiddenElement().get_element()))
                }
                break
            }
        }
        if (Mscrm.HeaderTileLookupLayout.isInstanceOfType(this.get_layout()) ||
            this.get_viewModel().get_lookupStyle() !== "single") return;
        Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$79_3, 2)
    },
    $79_3: function() {
        var $v_0 = new LookupBehavior.Services.PresenceService(Mscrm.Caching.LocalCaches.sipIDs);
        $v_0.set_populatePresenceViewsDelegate(this.$$d_$7t_3);
        $v_0.querySipInfo()
    },
    $7t_3: function() {
        !IsNull(this.$1B_3) && this.$1B_3.dispose();
        return this.get_presenceView()
    },
    isUnknownEmailItemPresent: function(items) {
        for (var $v_0 = 0; $v_0 < items.length; $v_0++) {
            var $v_1 = items[$v_0];
            if (parseInt($v_1.type, 10) === 9206) return true
        }
        return false
    },
    $3f_2: function() {
        Mscrm.SimpleInlineControlView.prototype.$3f_2.call(this);
        this.get_valueElement().addClass("ms-crm-Inline-Lookup")
    },
    get_presenceView: function() {
        var $$t_4 = this;
        this.get_valueElement().find("span.ms-crm-Lookup-Item, span.ms-crm-Lookup-Item-Read")
            .each(function($p1_0, $p1_1) {
                var $v_0 = new Mscrm.Proxies.DomElementProxy;
                $v_0.set_element($p1_1);
                $$t_4.$1B_3 = new LookupBehavior.Views.PresenceView;
                $$t_4.$1B_3.set_elementProxy($v_0);
                var $v_1 = new Mscrm.Proxies.DomElementProxy;
                $v_1.set_element($$t_4.get_chromeElement().get(0));
                $$t_4.$1B_3.set_chromeElement($v_1);
                $$t_4.$1B_3.set_state($$t_4.get_state())
            });
        return this.$1B_3
    },
    set_presenceView: function(value) {
        this.$1B_3 = value;
        return value
    }
};
Mscrm.InlineMoneyControlView = function($p0) { Mscrm.InlineMoneyControlView.initializeBase(this, [$p0]) };
Mscrm.InlineMoneyControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.MoneyControlEditView(this) },
    updateValueElementText: function($p0) {
        if (!IsNull(this.get_state()) &&
            !this.get_state().get_validationResult().isValid &&
            !IsNull(this.get_validateResult()) &&
            !isNullOrEmptyString(this.get_validateResult().errorText) &&
            $p0 !== this.$0_1.get_emptyValuePlaceholder())
            if (window.SYMBOLPOISTION_CURRENCY)
                this.get_valueElementInnerSpan().html(CrmEncodeDecode
                    .CrmHtmlEncode(this.$0_1.get_currencySymbol() + $p0));
            else
                this.get_valueElementInnerSpan().html(CrmEncodeDecode
                    .CrmHtmlEncode($p0 + this.$0_1.get_currencySymbol()));
        else this.get_valueElementInnerSpan().html(CrmEncodeDecode.CrmHtmlEncode($p0));
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask();
        this.$8T_3()
    },
    $8T_3: function() { this.get_chromeElement().attr("dir", this.$7L_3() ? "rtl" : "ltr") },
    $7L_3: function() {
        return this.get_valueElement().hasClass("ms-crm-Inline-EmptyValue") && window.LOCID_UI_DIR === "RTL"
    },
    handleModelToViewBinding: function($p0, $p1) {
        switch ($p1) {
        case "CurrencySymbol":
        case "Precision":
            var $v_0;
            if (!IsNull(this.get_state()) &&
                !this.get_state().get_validationResult().isValid &&
                this.get_isEditControlInitialized()) $v_0 = this.get_editView().get_editElementValue();
            else $v_0 = this.$0_1.get_attribute().get_displayValue() || "";
            this.tryUpdateValueElementText($v_0);
            break;
        default:
            Mscrm.SimpleInlineControlView.prototype.handleModelToViewBinding.call(this, $p0, $p1);
            break
        }
    },
    $3f_2: function() {
        var $v_0 = this.$0_1.get_attribute();
        this.tryUpdateValueElementText($v_0.get_displayValue())
    },
    $5u_2: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this);
        $v_0.set_metadataType(this.$0_1.get_attribute().get_attributeType());
        return $v_0
    },
    $R_2: function() {
        return IsNull(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()))
            ? null
            : Number.parseInvariant(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue())
                .toString())
    }
};
Mscrm.InlineMultiplePicklistControlView = function(inlineControlLayout) {
    Mscrm.InlineMultiplePicklistControlView.initializeBase(this, [inlineControlLayout])
};
Mscrm.InlineMultiplePicklistControlView.prototype = {
    get_selectedItemIndexes: function() {
        var $v_0 = this.$0_1;
        if (this.get_isDirty()) $v_0.$24_1 = this.$6b_3();
        return $v_0.get_selectedItemIndexes()
    },
    get_getEditViewObject: function() { return new Mscrm.MultiplePicklistControlEditView(this) },
    $6b_3: function() {
        var $v_0 = [],
            $$t_5 = this,
            $v_1 = function($p1_0, $p1_1) {
                var $v_2 = $P_CRM($p1_1);
                $v_2.is(":checked") && Array.add($v_0, $p1_0)
            };
        $P_CRM("input", this.get_editView().get_editElement()).each($v_1);
        return $v_0
    },
    $R_2: function() { return Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()) }
};
Mscrm.InlineBreadCrumbLookUpControlView = function($p0) {
    this.$$d_$7v_4 = Function.createDelegate(this, this.$7v_4);
    Mscrm.InlineBreadCrumbLookUpControlView.initializeBase(this, [$p0]);
    $p0.set_showEditIcon(false)
};
Mscrm.InlineBreadCrumbLookUpControlView.prototype = {
    updateValueElementText: function($p0) { Mscrm.OnLoadDeferredExecutor.queueCallback(this.$$d_$7v_4, 2) },
    $7v_4: function() {
        this.get_valueElement().empty();
        var $v_0 = this.get_valueElement().get(0);
        $v_0.style.width = this.get_valueElement().width().toString() + "px";
        $v_0.style.position = "relative";
        var $v_1 = new Mscrm.BreadCrumbUIRenderer;
        $v_1.renderBreadCrumbControl($v_0)
    }
};
Mscrm.InlineNumberControlView = function($p0) { Mscrm.InlineNumberControlView.initializeBase(this, [$p0]) };
Mscrm.InlineNumberControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.NumberControlEditView(this) },
    get_$2_3: function() { return this.$0_1 },
    $5u_2: function() {
        var $v_0 = {
            max: this.get_$2_3().get_maxValue(),
            min: this.get_$2_3().get_minValue(),
            precision: this.get_$2_3().get_precision()
        };
        return Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this, $v_0)
    },
    getPrecision: function() { return this.get_$2_3().get_precision() },
    setPrecision: function($p0) { !IsNull($p0) && $p0 >= 0 && this.get_$2_3().set_precision($p0) },
    $R_2: function() {
        if (!IsNull(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()))) {
            var $v_0 = Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()).toString();
            if ($v_0.length) return Number.parseInvariant($v_0)
        }
        return null
    }
};
Mscrm.InlineOptionSetControlView = function(layout) { Mscrm.InlineOptionSetControlView.initializeBase(this, [layout]) };
Mscrm.InlineOptionSetControlView.prototype = {
    get_$2s_3: function() { return this.get_editControlBehavior() },
    $5F_3: function() {
        if (!IsNull(this.get_editView())) {
            var $v_0 = this.get_editView().get_editElement()[0];
            if (!IsNull($v_0)) {
                var $v_1 = this.get_editView().get_editElement().children().length;
                $v_1 = Math.max($v_1, 2);
                $v_1 = Math.min($v_1, 10);
                $v_0.setAttribute("size", $v_1)
            }
        }
    },
    addOption: function(option, placement) {
        this.get_$2s_3().AddOption(option.text, option.value.toString(), null, placement);
        this.$5F_3()
    },
    removeOption: function(value) {
        this.get_$2s_3().RemoveOption(value);
        this.get_$2s_3().get_selectedIndex() === -1 && this.$0_1.get_attribute().set_rawValue(null);
        this.$5F_3()
    },
    clearOptions: function() {
        this.get_$2s_3().clearOptions();
        this.get_$2s_3().AddOption("", "", null, 0);
        this.$0_1.get_attribute().set_rawValue(null)
    },
    getControlType: function() { return "optionset" },
    get_getEditViewObject: function() { return new Mscrm.OptionSetControlEditView(this) },
    $R_2: function() {
        return IsNull(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue()))
            ? null
            : Number.parseInvariant(Mscrm.InlineEditUtilities.getRawValue(this.$0_1.get_attribute().get_initialValue())
                .toString())
    },
    get_enableLazyInitialization: function() {
        if ((Mscrm.Utilities.isIE10() && !Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode() ||
                Mscrm.SessionInfo.isOutlookClient()) &&
            !this.get_disabled()) return false;
        return Mscrm.SimpleInlineControlView.prototype.get_enableLazyInitialization.call(this)
    },
    $5u_2: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this);
        $v_0.set_formattedValue(Mscrm.InlineEditUtilities
            .getDecodedValue(this.$0_1.get_attribute().get_initialValue()));
        return $v_0
    }
};
Mscrm.InlinePhoneNumberControlView = function($p0) { Mscrm.InlinePhoneNumberControlView.initializeBase(this, [$p0]) };
Mscrm.InlinePhoneNumberControlView.prototype = {
    $6_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$6_3) && this.$6_3.unbind();
        Mscrm.SimpleInlineControlView.prototype.dispose.call(this)
    },
    get_getEditViewObject: function() { return new Mscrm.PhoneNumberControlEditView(this) },
    updateValueElementText: function($p0) {
        var $v_0 = $P_CRM("a", this.get_valueElement());
        $v_0.remove();
        if ($p0 !== this.$0_1.get_emptyValuePlaceholder() && this.$0_1.get_attribute().get_privilegeMask()) {
            this.$6_3 = $P_CRM("<a></a>");
            this.$6_3.attr("href", "#");
            this.$6_3.attr("title", window.PHONE_NUMBER_TOOLTIP_INLINE);
            this.$6_3.attr("tabindex", "-1");
            this.$6_3.addClass("ms-crm-gridurl");
            !this.$6_3.hasClass("ms-crm-Phone") && this.$6_3.addClass("ms-crm-Phone");
            var $$t_3 = this;
            this.$6_3.click(function($p1_0) {
                Mscrm.ReadFormUtilities.handlePhoneNumberClick(this);
                $p1_0.stopPropagation();
                $p1_0.preventDefault()
            });
            this.$6_3.text($p0);
            this.get_valueElementInnerSpan().text("");
            this.get_valueElementInnerSpan().append(this.$6_3)
        } else this.get_valueElementInnerSpan().text($p0);
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    },
    valueElementInnerDiv: function($p0) {
        var $v_0 = this.get_valueElement().children("label");
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = $v_0.children("div"), $v_2 = $v_0[0].id.trim();
            $v_2 = $v_2.replace("_label", "");
            if (Mscrm.Utilities.isFirefox() || Mscrm.Utilities.isSafari()) $v_1.first().text($v_2);
            else $v_1.first().text($v_2 + " " + $p0)
        }
    }
};
Mscrm.InlineRelatedCasesLookupControlView = function($p0) {
    this.$18_4 = new Array(1);
    Mscrm.InlineRelatedCasesLookupControlView.initializeBase(this, [$p0]);
    var $v_0 = Mscrm.InlineEditUtilities.getLinkedDataObject(this.get_chromeElement()),
        $v_1 = Mscrm.InlineEditUtilities.getEntityReference($v_0);
    this.$1K_4 = new LookupControlItem;
    this.$1K_4.id = $v_1.Id;
    this.$1K_4.name = $v_1.Name;
    this.$1K_4.type = $v_1.TypeCode.toString();
    this.$1K_4.typename = $v_1.TypeName;
    this.$18_4[0] = this.$1K_4
};
Mscrm.InlineRelatedCasesLookupControlView.prototype = {
    $1K_4: null,
    get_getEditViewObject: function() { return new Mscrm.RelatedCasesLookupControlEditView(this, this.$18_4) },
    postRegisterComponent: function() {
        Mscrm.InlineControlViewBase.prototype.postRegisterComponent.call(this);
        Mscrm.RelatedCasesLookupControl.initializeRelatedCasesLookupHandler(this.$6l_4())
    },
    $6l_4: function() { return isNullOrEmptyString(this.$1K_4.id) ? null : this.$18_4 },
    get_enableLazyInitialization: function() { return false }
};
Mscrm.InlineRollupControlView = function($p0, $p1) {
    Mscrm.InlineRollupControlView.initializeBase(this, [$p0]);
    this.$2R_3 = $p1;
    this.$2i_3 = false;
    this.$1N_3 = false
};
Mscrm.InlineRollupControlView.prototype = {
    get_isTabletToolTipVisible: function() { return this.$1N_3 },
    set_isTabletToolTipVisible: function($p0) {
        this.$1N_3 = $p0;
        return $p0
    },
    get_rollupToolTipFlyout: function() {
        if (IsNull(this.$3I_3))
            this.$3I_3 = new Mscrm.ErrorFlyout(this.get_valueElementInnerSpan(),
                this.get_$8A_3(),
                this.get_errorDisplayAreaProvider().getDisplayContainer(this));
        return this.$3I_3
    },
    get_getEditViewObject: function() { return null },
    updateValueElementText: function($p0) {
        this.get_valueElementInnerSpan().text($p0);
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    },
    calculateRollupCallBack: function($p0, $p1, $p2, $p3) {
        if (Mscrm.InternalUtilities.JSTypes.isNull($p2))
            throw Error.argumentUndefined("lasUpdatedTime",
                "The last updated time is undefined after a force recalculation of a rollup field");
        this.set_$1Z_3($p3);
        this.displayWarningMessage();
        !(this.get_$1Z_3() === 1 || !this.get_$1Z_3()) && this.get_$89_3().show(this.$g_2);
        if (Mscrm.InternalUtilities.JSTypes.isNull($p0) || this.get_$1Z_3() !== 1) {
            $p0 = this.$0_1.get_emptyValuePlaceholder();
            $p1 = null
        } else {
            if (this.$0_1.get_attribute().get_attributeType() === "datetime" ||
                this.$0_1.get_attribute().get_attributeType() === "date") {
                $p1 = ParseUtcDate($p1);
                $p0 = Mscrm.InlineDateTimeAttribute
                    .formatDisplayValue($p1, this.$0_1.get_attribute().get_attributeFormat(), " ")
            }
            if (this.$0_1.get_attribute()
                .get_attributeFormat() ===
                "duration") $p0 = Mscrm.NumberUtility.formatDuration(parseInt($p1.toString()))
        }
        var $v_0 = this.$5u_2();
        $v_0.resetValueWithDirtyCheck($p1, true) && $v_0.fireOnChange();
        this.updateValueElementText($p0);
        $p2 = ParseUtcDate($p2);
        this.$1y_3 = Mscrm.InlineDateTimeAttribute.formatDisplayValue($p2, "datetime", " ", true);
        this.get_layout().updateTooltip(this.getToolTip($p0));
        if (isOutlookHostedWindow()) {
            getOutlookHostedWindow().refreshGrid();
            return
        }
    },
    $5u_2: function() { return this.$2R_3.$5u_2() },
    $R_2: function() { return this.$2R_3.$R_2() },
    isElementInChrome: function($p0) { return this.$2R_3.isElementInChrome($p0) },
    handleModelToViewBinding: function($p0, $p1) {},
    getToolTip: function($p0) {
        switch (this.get_$1Z_3()) {
        case 0:
            return window.LOCID_ROLLUPFIELD_NOT_CACULATED;
        case 1:
            return String.format(window.LOCID_ROLLUPFIELD_LAST_UPDATED_TEMPLATE, $p0, this.get_$54_3());
        default:
            return String.format(window.LOCID_ROLLUP_LAST_UPDATED_ONLY, this.get_$54_3())
        }
    },
    tryUpdateValueElementText: function($p0) {
        Mscrm.SimpleInlineControlView.prototype.tryUpdateValueElementText.call(this, $p0);
        Mscrm.InternalUtilities._String.isNullOrEmpty($p0) && this.get_layout().updateTooltip(this.getToolTip($p0))
    },
    get_refreshIconLink: function() {
        if (!this.$3F_3) this.$3F_3 = this.get_chromeElement().find(".rolluprefreshPostsLink");
        return this.$3F_3
    },
    get_$54_3: function() {
        if (!this.$1y_3) {
            var $v_0 = this.$0_1.get_attribute().get_rollupAssociatedDateFieldName(), $v_1 = window.RecordData[$v_0];
            this.$1y_3 = "";
            if ($v_1) this.$1y_3 = $v_1["value"]
        }
        return this.$1y_3
    },
    get_$1Z_3: function() {
        if (!this.$2i_3) {
            var $v_0 = this.$0_1.get_attribute().get_rollupAssociatedStateFieldName(), $v_1 = window.RecordData[$v_0];
            if (!$v_1) this.$2h_3 = 0;
            else this.$2h_3 = parseInt($v_1["raw"]);
            this.$2i_3 = true
        }
        return this.$2h_3
    },
    set_$1Z_3: function($p0) {
        this.$2h_3 = $p0;
        this.$2i_3 = true;
        return $p0
    },
    get_$8A_3: function() {
        if (IsNull(this.$2j_3)) {
            this.$2j_3 = $P_CRM("<div></div>").addClass("ms-crm-Inline-Validation").hide();
            this.get_errorDisplayAreaProvider().getDisplayContainer(this).append(this.$2j_3)
        }
        return this.$2j_3
    },
    get_valueElementInnerSpan: function() {
        var $v_0 = this.get_valueElement().children("span");
        return $v_0.first()
    },
    displayTabletToolTip: function() {
        var $v_0 = this.$0_1.get_attribute(), $v_1 = $v_0.get_displayValue();
        $v_1 = isNullOrEmptyString($v_1)
            ? Mscrm.InlineEditUtilities.getDecodedValue($v_0.get_initialValue(), this.get_needReplaceBR())
            : $v_1;
        this.get_rollupToolTipFlyout().showError(this.getToolTip($v_1))
    },
    displayWarningMessage: function() {
        switch (this.get_$1Z_3()) {
        case 2:
            this.$g_2 = window.ROLLUP_OVERFLOW_ERROR;
            break;
        case 3:
            this.$g_2 = window.ROLLUP_OTHER_ERROR;
            break;
        case 4:
            this.$g_2 = window.ROLLUP_DEFINITION_CHANGED_ERROR;
            break;
        case 5:
            this.$g_2 = window.ROLLUP_RETRY_LIMIT_ERROR;
            break;
        case 7:
            this.$g_2 = window.ROLLUP_CURRENCYFIELDMISSING;
            break
        }
        if (this.$0_1.get_attribute().get_sourceTypeMask() === 32 || this.$0_1.get_attribute().get_rollupInvalid()) {
            this.showAlertElement();
            this.hideAlertElement(false)
        } else if (!this.get_$1Z_3() || this.get_$1Z_3() === 1) this.hideAlertElement(true);
        else {
            this.get_chromeBehavior().showMessageInAlertDiv(this.$g_2);
            this.hideAlertElement(false)
        }
    },
    get_$89_3: function() {
        if (IsNull(this.$3H_3))
            this.$3H_3 = new Mscrm.RollupErrorFlyout(this.get_errorDisplayAreaProvider().getDisplayContainer(this));
        return this.$3H_3
    },
    $2R_3: null,
    $1y_3: null,
    $2h_3: 0,
    $2i_3: false,
    $1N_3: false,
    $2j_3: null,
    $3H_3: null,
    $3F_3: null,
    $3I_3: null
};
Mscrm.InlineSearchWidgetView = function(searchWidget) {
    this.$E_0 = searchWidget;
    var $v_0 = searchWidget.get_element().id.substr(0, this.$E_0.get_element().id.lastIndexOf("_container"));
    this.$5_0 = $get($v_0);
    this.$C_0 = $get($v_0 + "_c");
    this.$7D_0($v_0)
};
Mscrm.InlineSearchWidgetView.prototype = {
    $E_0: null,
    $C_0: null,
    $5_0: null,
    $Y_0: null,
    $1Y_0: null,
    $1U_0: null,
    get_element: function() { return this.$5_0 },
    set_element: function(value) {
        this.$5_0 = value;
        return value
    },
    get_searchWidgetControl: function() { return this.$E_0 },
    set_searchWidgetControl: function(value) {
        this.$E_0 = value;
        return value
    },
    get_parentSection: function() { return this.$Y_0 },
    set_parentSection: function(value) {
        this.$Y_0 = value;
        return value
    },
    $7D_0: function($p0) {
        if (this.$E_0.get_isHostedInTabbedControl())
            if ($p0.indexOf("searchwidgetcontrol_") >= 0 && $p0.length > 20) {
                var $v_0 = $p0.substr(20);
                this.$1Y_0 = $find($v_0);
                if (!IsNull(this.$1Y_0)) {
                    var $v_1 = $P_CRM($get("header_" + $v_0));
                    if ($v_1.length > 0) this.$1U_0 = $v_1.find("a[tabId='ArticlesTab']")
                }
            }
    },
    setSearchQuery: function(searchText) { return this.$E_0.setSearchQuery(searchText) },
    isKnowledgeInCrm: function() { return this.$E_0.get_useNativeCrm() },
    getSearchQuery: function() {
        var $v_0 = $get(this.$5_0.id + "_searchTextBox", this.$5_0.parentNode);
        return $v_0.value
    },
    clearSearch: function() { this.$E_0.setSearchQuery("") },
    openSearchResult: function(resultNumber, mode) { return this.$E_0.openSearchResult(resultNumber, mode) },
    getTotalResultCount: function() { return this.$E_0.getTotalResultCount() },
    dispose: function() { Mscrm.Utilities.destroyObject(this) },
    getLabel: function() {
        if (this.$E_0
            .get_isHostedInTabbedControl() &&
            !IsNull(this.$1U_0) &&
            this.$1U_0.length > 0) return this.$1U_0.text();
        else {
            if (IsNull(this.$C_0)) return null;
            return XUI.Html.GetText(this.$C_0)
        }
    },
    setLabel: function(label) {
        if (this.$E_0
            .get_isHostedInTabbedControl() &&
            !IsNull(this.$1U_0) &&
            this.$1U_0.length > 0) this.$1U_0.text(label);
        else {
            if (IsNull(this.$C_0)) return;
            XUI.Html.SetText(this.$C_0, label)
        }
    },
    getName: function() { return this.$5_0.id },
    getParent: function() { return this.$Y_0 },
    getVisible: function() {
        if (this.$E_0.get_isHostedInTabbedControl()) return this.$1Y_0.getActiveTabId() === "ArticlesTab";
        return Sys.UI.DomElement.getVisible(this.$5_0)
    },
    setVisible: function(visible) {
        if (this.$E_0.get_isHostedInTabbedControl()) {
            this.$1Y_0.setActiveTab("ArticlesTab");
            if (visible) this.$1Y_0.showTab("ArticlesTab");
            else this.$1Y_0.hideTab("ArticlesTab")
        }
        if (!IsNull(this.$C_0)) this.$C_0.style.display = visible ? "block" : "none";
        Sys.UI.DomElement.setVisible(this.$5_0, visible)
    },
    getSelectedResults: function() { return this.$E_0.getSelectedResults() },
    addOnSelection: function(handler) { this.$E_0.add_OnSelection(handler) },
    removeOnSelection: function(handler) { this.$E_0.remove_OnSelection(handler) },
    addOnResultOpened: function(handler) { this.$E_0.add_OnResultOpened(handler) },
    removeOnResultOpened: function(handler) { this.$E_0.remove_OnResultOpened(handler) },
    addOnPostSearch: function(handler) { this.$E_0.add_OnPostSearch(handler) },
    removeOnPostSearch: function(handler) { this.$E_0.remove_OnPostSearch(handler) },
    addOnPreSearch: function(handler) { this.$E_0.add_OnPreSearch(handler) },
    removeOnPreSearch: function(handler) { this.$E_0.remove_OnPreSearch(handler) },
    setFocus: function() {
        this.$E_0.get_isHostedInTabbedControl() && this.$1Y_0.setActiveTab("ArticlesTab");
        this.$E_0.setFocus()
    },
    getControlType: function() { return "kbsearch" },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this }
};
Mscrm.InlineEmailRecipientActivityControlView = function(emailRecipientActivity) {
    this.$j_0 = emailRecipientActivity;
    var $v_0 = emailRecipientActivity.get_element().id.substr(0, this.$j_0.get_element().id.length);
    this.$5_0 = $get($v_0);
    this.$C_0 = $get($v_0 + "_c")
};
Mscrm.InlineEmailRecipientActivityControlView.prototype = {
    $j_0: null,
    $C_0: null,
    $5_0: null,
    $Y_0: null,
    get_element: function() { return this.$5_0 },
    set_element: function(value) {
        this.$5_0 = value;
        return value
    },
    get_emailRecipientActivityControl: function() { return this.$j_0 },
    set_emailRecipientActivityControl: function(value) {
        this.$j_0 = value;
        return value
    },
    get_parentSection: function() { return this.$Y_0 },
    set_parentSection: function(value) {
        this.$Y_0 = value;
        return value
    },
    dispose: function() { Mscrm.Utilities.destroyObject(this) },
    getLabel: function() {
        if (IsNull(this.$C_0)) return null;
        return XUI.Html.GetText(this.$C_0)
    },
    setLabel: function(label) {
        if (IsNull(this.$C_0)) return;
        XUI.Html.SetText(this.$C_0, label)
    },
    getName: function() { return this.$5_0.id },
    getParent: function() { return this.$Y_0 },
    getVisible: function() { return this.$5_0.style.display !== "none" },
    setVisible: function(visible) {
        if (!IsNull(this.$C_0)) this.$C_0.style.display = visible ? "block" : "none";
        this.$5_0.style.display = visible ? "block" : "none"
    },
    setFocus: function() { this.$j_0.setFocus() },
    getControlType: function() { return "emailrecipientactivitycontrol" },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this }
};
Mscrm.InlineSubGridControlView = function(gridControl) {
    this.$S_0 = gridControl;
    this.$L_0 = $get(this.$S_0.get_element().id + "_titleText");
    this.$36_0 = $get(this.$S_0.get_element().id + "_span")
};
Mscrm.InlineSubGridControlView.prototype = {
    $S_0: null,
    $L_0: null,
    $36_0: null,
    $e_0: null,
    dispose: function() {
        this.$S_0 = null;
        this.$L_0 = null;
        this.$36_0 = null
    },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this },
    getLabel: function() { return XUI.Html.GetText(this.$L_0) },
    getName: function() { return this.$S_0.get_element().id },
    getParent: function() { return this.get_parentSection() },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getVisible: function() { return this.$S_0.getVisible() },
    setFocus: function() { this.$S_0.setFocus() },
    setLabel: function(label) { XUI.Html.SetText(this.$L_0, label) },
    setVisible: function(visible) {
        visible && Mscrm.InlineEditControlCommonUtility.showParentView(this.get_parentSection());
        this.$36_0.style.display = visible ? "block" : "none";
        this.$S_0.setVisible(visible);
        !visible && Mscrm.InlineEditControlCommonUtility.hideParentViewIfNoControlsVisible(this.get_parentSection())
    },
    get_parentSection: function() { return this.$e_0 },
    set_parentSection: function(value) {
        this.$e_0 = value;
        return value
    },
    getControlType: function() { return "subgrid" },
    addRecord: function() { this.$S_0.getVisible() && this.$S_0.addButtonClickHandler() },
    exportToExcel: function() { this.$S_0.exportToExcel() },
    refresh: function() { this.$S_0.refresh() },
    getRelationshipName: function() { return this.$S_0.GetParameter("relName") },
    getRelationshipAttributeName: function() { return null },
    getRelationshipRoleOrdinal: function() {
        var $v_0 = this.$S_0.GetParameter("roleOrd");
        if (isNullOrEmptyString($v_0)) return -1;
        var $v_1 = Number.parseInvariant($v_0);
        return isNaN($v_1) ? -1 : $v_1
    },
    getRelationshipType: function() {
        var $v_0 = this.$S_0.GetParameter("relationshipType");
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
            var $v_1 = parseInt($v_0, 10);
            if (!isNaN($v_1))
                switch ($v_1) {
                case 2:
                    return 1;
                case 1:
                    return 0;
                default:
                    return -1
                }
        }
        return -1
    },
    setLabelNodeDisplay: function() { if (!IsNull(this.$L_0)) this.$L_0.style.display = "inline-block" },
    getEntityName: function() { return this.$S_0.GetParameter("otn") }
};
Mscrm.InlineSectionControlView = function(section, parentTab) {
    this.$1g_0 = section;
    this.$s_0 = parentTab;
    this.$6q_0();
    this.$74_0()
};
Mscrm.InlineSectionControlView.prototype = {
    $1g_0: null,
    $1h_0: null,
    $s_0: null,
    controls: null,
    dispose: function() {
        this.$1g_0 = null;
        this.$1h_0 = null;
        this.$s_0 = null;
        this.controls.dispose()
    },
    getLabel: function() {
        var $v_0 = "";
        if (!IsNull(this.$1h_0)) $v_0 = XUI.Html.GetText(this.$1h_0);
        return $v_0
    },
    getName: function() {
        var $v_0 = this.$1g_0.getAttribute("name");
        if (!IsNull($v_0)) return $v_0.toString();
        return ""
    },
    getParent: function() { return this.$s_0 },
    getVisible: function() { return Mscrm.InlineEditInitializerUtility.$4G(this.$1g_0) },
    setLabel: function(label) { XUI.Html.SetText(this.$1h_0, label) },
    setVisible: function(visible) {
        visible && this.$6M_0();
        Mscrm.InlineEditInitializerUtility.$5J(this.$1g_0, visible);
        !visible && this.$5n_0();
        Mscrm.InlineEditControlCommonUtility.updatePageControlsErrorDivMessage()
    },
    $6M_0: function() {
        !IsNull(this.$s_0) && "collapsed" === this.$s_0.getDisplayState() && this.$s_0.setDisplayState("expanded")
    },
    $5n_0: function() {
        !IsNull(this.$s_0) &&
            "expanded" === this.$s_0.getDisplayState() &&
            !this.$s_0.isTabAnyChildVisible() &&
            this.$s_0.setDisplayState("collapsed")
    },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this },
    isSectionAnyChildVisible: function() {
        for (var $v_0 = 0; $v_0 < this.controls.getLength(); $v_0++) {
            var $v_1 = this.controls.get($v_0);
            if (!IsNull($v_1))
                if (Mscrm.InlineControlViewBase.isInstanceOfType($v_1)) {
                    if ($v_1.getVisible()) return true
                } else if (Xrm.XrmControlBase.isInstanceOfType($v_1)) {
                    if ($v_1.getVisible()) return true
                } else if (Mscrm.IInlineSectionChildControlView.isInstanceOfType($v_1)) {
                    if ($v_1.getVisible()) return true
                } else throw Error.notImplemented("The method or operation is not implemented.")
        }
        return false
    },
    $6q_0: function() {
        if (IsNull(this.$1h_0)) {
            var $v_0 = $P_CRM("h3.ms-crm-Form", $P_CRM(this.$1g_0));
            this.$1h_0 = $v_0.get()[0]
        }
    },
    $74_0: function() { this.controls = new Mscrm.ClientApiCollection }
};
Mscrm.InlineSubjectLookupControlView = function($p0) {
    Mscrm.InlineSubjectLookupControlView.initializeBase(this, [$p0]);
    $p0.set_showEditIcon(false)
};
Mscrm.InlineSubjectLookupControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.SubjectLookupControlEditView(this) },
    isElementInChrome: function($p0) {
        var $v_0 = Mscrm.InlineLookupControlView.prototype.isElementInChrome.call(this, $p0);
        if (!$v_0) {
            var $v_1 = this.get_chromeElement().attr("id") + "_treediv",
                $v_2 = $P_CRM($get($v_1)),
                $v_3 = this.get_chromeElement().attr("id");
            $v_0 = $p0.parents("#" + $v_1).length > 0 ||
                $p0.get(0) === $v_2.get(0) ||
                $p0.parents("#" + $v_3).length > 0 ||
                $p0.get(0) === this.get_chromeElement().get(0)
        }
        return $v_0
    }
};
Mscrm.InlineStatusControlView = function(layout) {
    this.$$d_$6K_4 = Function.createDelegate(this, this.$6K_4);
    Mscrm.InlineStatusControlView.initializeBase(this, [layout]);
    Mscrm.InlineEditDataService.get_dataService().add_entitySaved(this.$$d_$6K_4)
};
Mscrm.InlineStatusControlView.prototype = {
    $6K_4: function($p0, $p1) {
        this.clearOptions();
        var $v_0;
        if (!IsNull(Mscrm.InlineEditDataService.get_formEntity().get_attributes().get("statuscode")))
            if (!IsNull(Mscrm.InlineEditDataService.get_formEntity().get_attributes().get("statuscode").get_value())) {
                var $v_1 = Mscrm.InlineEditDataService.get_formEntity().get_attributes().get("statuscode");
                $v_0 = parseInt($v_1.get_value().toString());
                var $v_2 = this.$0_1.$4p_2($v_0);
                if ($v_2 && $v_2.length > 0)
                    for (var $v_5 = 0, $$arr_6 = $v_2, $$len_7 = $$arr_6.length, $$idx_8 = 0;
                        $$idx_8 < $$len_7;
                        ++$$idx_8) {
                        var $v_6 = $$arr_6[$$idx_8];
                        this.addOption(new Xrm.OptionSetItem($v_6.Value, $v_6.Label), $v_5++)
                    }
                var $v_3 = $v_1.get_controls().get(),
                    $v_4 = Mscrm.FormControlInputBehavior.GetBehavior($v_3[0].get_editView().get_editElementId());
                $v_1.loadOptionsFromSelectControl($v_4.get_element())
            }
    },
    clearOptions: function() { this.get_editView().get_editElement().children().remove() },
    dispose: function() {
        !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
            Mscrm.InlineEditDataService.get_dataService().remove_entitySaved(this.$$d_$6K_4);
        Mscrm.SimpleInlineControlView.prototype.dispose.call(this)
    }
};
Mscrm.InlineTabControlView = function(tab) {
    this.$$d_$8B_0 = Function.createDelegate(this, this.$8B_0);
    this.$$d_$7r_0 = Function.createDelegate(this, this.$7r_0);
    this.$m_0 = tab;
    this.$6o_0();
    this.$7C_0()
};
Mscrm.InlineTabControlView.prototype = {
    $m_0: null,
    $35_0: null,
    $2T_0: false,
    $1A_0: null,
    $r_0: null,
    get_$4A_0: function() {
        if (IsNull(this.$35_0)) this.$35_0 = $find(this.$m_0.id);
        return this.$35_0
    },
    get_$48_0: function() {
        if (IsNull(this.$r_0)) this.$r_0 = new Mscrm.ClientApiEventHandlerList(new Sys.EventHandlerList);
        return this.$r_0
    },
    sections: null,
    dispose: function() {
        this.$m_0 = null;
        this.$1A_0 = null;
        this.sections.dispose();
        this.remove_tabStateChange(this.$$d_$7r_0);
        this.remove_tabStateChange(this.$$d_$8B_0)
    },
    add_tabStateChange: function(value) { this.get_$4A_0().add_tabStateChange(value) },
    remove_tabStateChange: function(value) { this.get_$4A_0().remove_tabStateChange(value) },
    getLabel: function() {
        var $v_0 = "";
        if (!IsNull(this.$1A_0))
            if (!this.$2T_0) $v_0 = XUI.Html.GetText(this.$1A_0);
            else $v_0 = this.$1A_0.getAttribute("label").toString();
        return $v_0
    },
    getName: function() {
        var $v_0 = this.$m_0.getAttribute("name");
        if (!IsNull($v_0)) return $v_0.toString();
        return ""
    },
    getParent: function() { return Xrm.Page.ui },
    getSections: function() { return this.sections },
    getVisible: function() { return Mscrm.InlineEditInitializerUtility.$4G(this.$m_0) },
    setFocus: function() {
        this.setVisible(true);
        this.$m_0.scrollIntoView(true)
    },
    setLabel: function(label) {
        if (!this.$2T_0) XUI.Html.SetText(this.$1A_0, label);
        else this.$1A_0.setAttribute("label", label)
    },
    setNotification: function(message, uniqueId) { return false },
    clearNotification: function(uniqueId) { return false },
    setVisible: function(visible) {
        Mscrm.InlineEditInitializerUtility.$5J(this.$m_0, visible);
        Mscrm.InlineEditControlCommonUtility.updatePageControlsErrorDivMessage()
    },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this },
    isTabAnyChildVisible: function() {
        for (var $v_0 = 0; $v_0 < this.sections.getLength(); $v_0++) {
            var $v_1 = this.sections.get($v_0);
            if (!IsNull($v_1) && $v_1.getVisible()) return true
        }
        return false
    },
    addTabStateChange: function(handler) { this.get_$48_0().addHandler("TabStateChange", handler, false) },
    getDisplayState: function() {
        var $v_0 = this.$6n_0();
        return Mscrm.InlineEditInitializerUtility.$4G($v_0) ? "expanded" : "collapsed"
    },
    removeTabStateChange: function(handler) { this.get_$48_0().removeHandler("TabStateChange", handler) },
    setDisplayState: function(state) { this.get_$4A_0().set_displayState(state) },
    $6o_0: function() {
        this.$2T_0 = window.self._globalQuickCreate;
        if (IsNull(this.$1A_0)) {
            var $v_0 = null;
            if (!this.$2T_0) $v_0 = $P_CRM("h2.ms-crm-Form", $P_CRM(this.$m_0));
            else $v_0 = $P_CRM("div.ms-crm-InlineTabBody-Read", $P_CRM(this.$m_0));
            if (!IsNull($v_0)) this.$1A_0 = $v_0.get()[0]
        }
    },
    $6n_0: function() {
        var $v_0 = $P_CRM(this.$m_0).children(".ms-crm-InlineTabBody-Read");
        return $v_0[0]
    },
    $7r_0: function($p0, $p1) { Mscrm.InlineEditControlCommonUtility.updatePageControlsErrorDivMessage() },
    $8B_0: function($p0, $p1) {
        var $v_0 = this.get_$48_0().getHandler("TabStateChange");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0(this.getWrapper(), $p1)
    },
    $7C_0: function() {
        this.sections = new Mscrm.ClientApiCollection;
        for (var $v_0 = Mscrm.InlineEditInitializerUtility.$6s(this.$m_0), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1], $v_3 = new Mscrm.InlineSectionControlView($v_2, this);
            this.sections.add($v_3)
        }
        this.add_tabStateChange(this.$$d_$7r_0);
        this.add_tabStateChange(this.$$d_$8B_0)
    }
};
Mscrm.InlineTextAreaControlView = function($p0) { Mscrm.InlineTextAreaControlView.initializeBase(this, [$p0]) };
Mscrm.InlineTextAreaControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.TextAreaControlEditView(this) },
    get_needReplaceBR: function() { return true },
    updateValueElementText: function($p0) {
        var $v_0 = Mscrm.TextAreaHelper.normalizeNewLine($p0);
        $v_0 = Mscrm.InlineEditUtilities.replaceAndEncodeNewLineCharsToBreakHtmlTags($v_0);
        this.get_valueElementInnerSpan().html($v_0);
        this.get_controlMode() !== "alwaysedit" && this.get_valueElementInnerSpan().css("display", "block");
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    },
    $5u_2: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this);
        $v_0.set_maxLength(this.$0_1.get_attribute().get_maxLength());
        return $v_0
    },
    $R_2: function() {
        return Mscrm.InlineEditUtilities.getDecodedValue(this.$0_1.get_attribute().get_initialValue(), true)
    }
};
Mscrm.InlineTextBoxControlView = function($p0) { Mscrm.InlineTextBoxControlView.initializeBase(this, [$p0]) };
Mscrm.InlineTextBoxControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.TextBoxControlEditView(this) },
    $5u_2: function() {
        var $v_0 = Mscrm.SimpleInlineControlView.prototype.$5u_2.call(this);
        $v_0.set_maxLength(this.$0_1.get_attribute().get_maxLength());
        return $v_0
    }
};
Mscrm.InlineTickerControlView = function($p0) { Mscrm.InlineTickerControlView.initializeBase(this, [$p0]) };
Mscrm.InlineTickerControlView.prototype = {
    $6_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$6_3) && this.$6_3.unbind();
        Mscrm.SimpleInlineControlView.prototype.dispose.call(this)
    },
    get_getEditViewObject: function() { return new Mscrm.TickerControlEditView(this) },
    updateValueElementText: function($p0) {
        var $v_0 = $P_CRM("a", this.get_valueElement());
        $v_0.remove();
        if ($p0 !== this.$0_1.get_emptyValuePlaceholder() && this.$0_1.get_attribute().get_privilegeMask()) {
            this.$6_3 = $P_CRM("<a></a>");
            this.$6_3.attr("href", "#");
            this.$6_3.addClass("ms-crm-gridurl");
            var $$t_3 = this;
            this.$6_3.click(function($p1_0) {
                $$t_3.$6w_3($$t_3.$6_3.get(0));
                $p1_0.stopPropagation();
                $p1_0.preventDefault()
            });
            this.$6_3.text($p0);
            this.get_valueElementInnerSpan().text("");
            this.get_valueElementInnerSpan().append(this.$6_3)
        } else this.get_valueElementInnerSpan().text($p0);
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    },
    $6w_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0).nodeValue;
            if (!IsNull($v_0) && $v_0.length > 0) {
                var $v_1 = Mscrm.CrmUri.create("http://go.microsoft.com/fwlink");
                $v_1.get_query()["linkid"] = 8506;
                $v_1.get_query()["clcid"] = window.USER_LANGUAGE_CODE.toString(16);
                $v_1.get_query()["Symbol"] = $v_0;
                $v_1.get_query()["q"] = $v_0;
                safeWindowOpen($v_1,
                    "",
                    String
                    .format("height={0}, width={1}, scrollbars=1, resizable=1, status=1, toolbar=1, menubar=1, location=1", window.screen.availHeight * .75, window.screen.availWidth * .75),
                    false,
                    true)
            }
        }
    }
};
Mscrm.InlineTimerControlViewBase = function(timerControl) {
    this.$$d_tick = Function.createDelegate(this, this.tick);
    this.$n_0 = timerControl;
    this.$39_0 = timerControl.get_isQuickViewForm();
    this.$5_0 = this.$n_0.get_element();
    this.$C_0 = $get(this.$5_0.id + "_c");
    this.$2V_0 = window.LOCID_LABEL_TOOLTIP;
    this.$l_0 = window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif";
    this.$17_0 = ""
};
Mscrm.InlineTimerControlViewBase.prototype = {
    $n_0: null,
    $5_0: null,
    $C_0: null,
    $Y_0: null,
    $3s_0: null,
    $42_0: null,
    $1n_0: 0,
    $2P_0: 0,
    $2Z_0: 0,
    $2k_0: 0,
    $l_0: null,
    $17_0: null,
    $2V_0: null,
    $o_0: null,
    $1C_0: null,
    $2K_0: false,
    $1b_0: true,
    $1x_0: false,
    $39_0: false,
    get_timerControl: function() { return this.$n_0 },
    set_timerControl: function(value) {
        this.$n_0 = value;
        return value
    },
    get_element: function() { return this.$5_0 },
    set_element: function(value) {
        this.$5_0 = value;
        return value
    },
    get_parentSection: function() { return this.$Y_0 },
    set_parentSection: function(value) {
        this.$Y_0 = value;
        return value
    },
    get_labelRow: function() { return this.$3s_0 },
    set_labelRow: function(value) {
        this.$3s_0 = value;
        return value
    },
    get_timerRow: function() { return this.$42_0 },
    set_timerRow: function(value) {
        this.$42_0 = value;
        return value
    },
    get_days: function() { return this.$1n_0 },
    set_days: function(value) {
        this.$1n_0 = value;
        return value
    },
    get_hours: function() { return this.$2P_0 },
    set_hours: function(value) {
        this.$2P_0 = value;
        return value
    },
    get_minutes: function() { return this.$2Z_0 },
    set_minutes: function(value) {
        this.$2Z_0 = value;
        return value
    },
    get_seconds: function() { return this.$2k_0 },
    set_seconds: function(value) {
        this.$2k_0 = value;
        return value
    },
    get_imagePath: function() { return this.$l_0 },
    set_imagePath: function(value) {
        this.$l_0 = value;
        return value
    },
    get_imageAltText: function() { return this.$17_0 },
    set_imageAltText: function(value) {
        this.$17_0 = value;
        return value
    },
    get_timerTextClassName: function() { return this.$1C_0 },
    set_timerTextClassName: function(value) {
        this.$1C_0 = value;
        return value
    },
    get_labelTooltip: function() { return this.$2V_0 },
    set_labelTooltip: function(value) {
        this.$2V_0 = value;
        return value
    },
    get_timerTooltip: function() { return this.$o_0 },
    set_timerTooltip: function(value) {
        this.$o_0 = value;
        return value
    },
    get_isQuickViewForm: function() { return this.$39_0 },
    set_isQuickViewForm: function(value) {
        this.$39_0 = value;
        return value
    },
    get_disposed: function() { return this.$2K_0 },
    set_disposed: function(value) {
        this.$2K_0 = value;
        return value
    },
    get_disabled: function() { return this.$1b_0 },
    set_disabled: function(value) {
        this.$1b_0 = value;
        return value
    },
    get_isViolated: function() { return this.$1x_0 },
    set_isViolated: function(value) {
        this.$1x_0 = value;
        return value
    },
    render: function() { this.setInnerHtml() },
    updateTimeDifferenceInSeconds: function() {
        var $v_0 = new Date;
        $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset());
        var $v_1 = $v_0.toUTCString(),
            $v_2 = Math.floor((Date.parse(this.$n_0.get_failureDateTimeUtcString()) - Date.parse($v_1)) / 1e3) +
                this.$n_0.get_timeDifferenceInSeconds();
        if ($v_2 <= 0) this.$1x_0 = true;
        return Math.abs($v_2)
    },
    populateFields: function() {
        var $v_0 = this.updateTimeDifferenceInSeconds();
        this.$1n_0 = Math.floor($v_0 / 86400);
        $v_0 = $v_0 % 86400;
        this.$2P_0 = Math.floor($v_0 / 3600);
        $v_0 = $v_0 % 3600;
        this.$2Z_0 = Math.floor($v_0 / 60);
        $v_0 = $v_0 % 60;
        this.$2k_0 = Math.floor($v_0)
    },
    $3c_0: function($p0, $p1, $p2) {
        var $v_0 = "<abbr title='{0}'>{1}</abbr>", $v_1 = String.format($v_0, $p1, CrmEncodeDecode.CrmHtmlEncode($p0));
        return String.format(window.LOCID_TIMER_GEN_PATTERN, $p2, $v_1)
    },
    getTimeString: function() {
        this.populateFields();
        var $v_0 = new Sys.StringBuilder,
            $v_1 = this.$3c_0(window.LOCID_TIMER_SECONDS, window.LOCID_TIMER_SECONDS_FULL, this.$2k_0.toString()),
            $v_2 = this.$3c_0(window.LOCID_TIMER_MINUTES, window.LOCID_TIMER_MINUTES_FULL, this.$2Z_0.toString()),
            $v_3 = this.$3c_0(window.LOCID_TIMER_HOURS, window.LOCID_TIMER_HOURS_FULL, this.$2P_0.toString()),
            $v_4 = String.format(window.LOCID_TIMER_HMS, $v_3, $v_2, $v_1);
        if (!this.$1n_0) $v_0.append($v_4);
        else {
            var $v_5 = this.$3c_0(window.LOCID_TIMER_DAYS, window.LOCID_TIMER_DAYS_FULL, this.$1n_0.toString());
            $v_0.append(String.format(window.LOCID_TIMER_TIMEFULL, $v_5, $v_4))
        }
        return $v_0.toString()
    },
    updateTimerRow: function(status) {
        var $v_0 = XUI.Html.DomUtils.GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(this.$5_0), 1);
        if (!isNullOrEmptyString(status)) {
            $v_0.parentNode.setAttribute("aria-live", "polite");
            $v_0.innerHTML = status
        } else {
            $v_0.parentNode.setAttribute("role", "timer");
            $v_0.innerHTML = this.getTimeString()
        }
    },
    setInnerHtml: function() {
        if (!isNullOrEmptyString(this.$5_0.innerHTML)) this.$5_0.innerHTML = "";
        var $v_0 = document.createElement("SPAN");
        $v_0.className = "ms-crm-InlineTimerControl-Icon";
        if (!isNullOrEmptyString(this.$l_0)) {
            var $v_4 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(this.$l_0));
            $v_4.setAttribute("alt", this.$17_0);
            $v_0.appendChild($v_4)
        } else $v_0.innerHTML = " ";
        var $v_1 = document.createElement("SPAN");
        $v_1.innerHTML = "";
        $v_1.className = "TimerControlTimerRow ms-crm-InlineTimerControl-Time";
        if (!isNullOrEmptyString(this.$1C_0)) $v_1.className = $v_1.className + " " + this.$1C_0;
        var $v_2 = document.createElement("DIV");
        $v_2.appendChild($v_0);
        $v_2.appendChild($v_1);
        $v_2.className = "ms-crm-InlineTimerControl-InnerDiv";
        $v_2.setAttribute("aria-labelledby", this.$5_0.id + "_c");
        this.$5_0.appendChild($v_2);
        this.$5_0.parentNode.className += " ms-crm-InlineTimerControl";
        this.$5_0.parentNode.setAttribute("title", this.$o_0);
        var $v_3 = XUI.Html.DomUtils.GetPrevSibling(this.$5_0.parentNode);
        $v_3.className += " ms-crm-InlineTimerControl TimerControlLabel";
        $v_3.setAttribute("title", String.format(this.$2V_0, XUI.Html.GetText($v_3)));
        $v_3.setAttribute("aria-label", XUI.Html.GetText($v_3));
        this.$5_0.className += " ms-crm-InlineTimerControl-MainDiv"
    },
    tick: function() { window.setTimeout(this.$$d_tick, 1e3) },
    dispose: function() {
        if (this.$2K_0) return;
        this.$2K_0 = true;
        this.$n_0.get_element().innerHTML = "";
        Mscrm.Utilities.destroyObject(this)
    },
    getLabel: function() { return XUI.Html.GetText(this.$C_0) },
    setLabel: function(label) { XUI.Html.SetText(this.$C_0, label) },
    getName: function() { return this.$5_0.id },
    getParent: function() { return this.$Y_0 },
    getVisible: function() { return Sys.UI.DomElement.getVisible(this.$5_0) },
    setVisible: function(visible) {
        this.$C_0.style.display = visible ? "block" : "none";
        Sys.UI.DomElement.setVisible(this.$5_0, visible)
    },
    setFocus: function() {},
    getControlType: function() { return "timercontrol" },
    setNotification: function(message, uniqueId) { return false },
    clearNotification: function(uniqueId) { return false },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this }
};
Mscrm.InlineTimerControlInProgressView = function(timerControl) {
    Mscrm.InlineTimerControlInProgressView.initializeBase(this, [timerControl]);
    this.$1x_0 = false;
    this.$o_0 = window.LOCID_INPROG_TOOLTIP;
    this.$17_0 = window.LOCID_INPROG_IMG_ALTTEXT
};
Mscrm.InlineTimerControlInProgressView.prototype = {
    render: function() {
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.populateFields();
        this.tick()
    },
    tick: function() {
        if (IsNull(this.tick)) return;
        if (this.$1x_0) {
            this.$n_0.get_element().innerHTML = "";
            this.$n_0.set_oldViewObject(new Mscrm.InlineTimerControlViolatedView(this.$n_0));
            this.$n_0.get_oldViewObject().render()
        } else {
            this.updateTimerRow("");
            Mscrm.InlineTimerControlViewBase.prototype.tick.call(this)
        }
    }
};
Mscrm.InlineTimerControlViolatedView = function(timerControl) {
    Mscrm.InlineTimerControlViolatedView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_VIOL_TOOLTIP;
    this.$17_0 = window.LOCID_VIOL_IMG_ALTTEXT;
    this.$1C_0 = "TimerControlTimerRow-Expired"
};
Mscrm.InlineTimerControlViolatedView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/timercontrol/timer_expired_16.png";
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.populateFields();
        this.tick()
    },
    tick: function() {
        if (IsNull(this.tick)) return;
        this.updateTimerRow("");
        Mscrm.InlineTimerControlViewBase.prototype.tick.call(this)
    }
};
Mscrm.InlineTimerControlNotSetView = function(timerControl) {
    Mscrm.InlineTimerControlNotSetView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_NOTSET_TOOLTIP
};
Mscrm.InlineTimerControlNotSetView.prototype = {
    render: function() {
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_NOTSET)
    }
};
Mscrm.InlineTimerControlNoPrivilegeView = function(timerControl) {
    Mscrm.InlineTimerControlNoPrivilegeView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_NOPRIVILEGE_TOOLTIP
};
Mscrm.InlineTimerControlNoPrivilegeView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/permission_key.png";
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_NOPRIVILEGE)
    }
};
Mscrm.InlineTimerControlCanceledView = function(timerControl) {
    Mscrm.InlineTimerControlCanceledView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_CANCEL_TOOLTIP
};
Mscrm.InlineTimerControlCanceledView.prototype = {
    render: function() {
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_CANCELED)
    }
};
Mscrm.InlineTimerControlSuccessView = function(timerControl) {
    Mscrm.InlineTimerControlSuccessView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_SUCC_TOOLTIP;
    this.$1C_0 = "TimerControlTimerRow-Succeeded"
};
Mscrm.InlineTimerControlSuccessView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/timercontrol/timer_success_16.png";
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_SUCCEEDED)
    }
};
Mscrm.InlineTimerControlFailureView = function(timerControl) {
    Mscrm.InlineTimerControlFailureView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_FAIL_TOOLTIP;
    this.$1C_0 = "TimerControlTimerRow-Failed"
};
Mscrm.InlineTimerControlFailureView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/timercontrol/timer_expired_16.png";
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_FAILED)
    }
};
Mscrm.InlineTimerControlWarningView = function(timerControl) {
    Mscrm.InlineTimerControlWarningView.initializeBase(this, [timerControl]);
    this.$17_0 = window.LOCID_WARN_IMG_ALTTEXT;
    this.$1C_0 = "TimerControlTimerRow-Warning"
};
Mscrm.InlineTimerControlWarningView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/timercontrol/timer_nearing_expiration_16.png";
        Mscrm.InlineTimerControlInProgressView.prototype.render.call(this);
        this.updateTimerRow("")
    }
};
Mscrm.InlineTimerControlPausedView = function(timerControl) {
    Mscrm.InlineTimerControlPausedView.initializeBase(this, [timerControl]);
    this.$o_0 = window.LOCID_PAUSED_TOOLTIP;
    this.$17_0 = window.LOCID_PAUSED_IMG_ALTTEXT
};
Mscrm.InlineTimerControlPausedView.prototype = {
    render: function() {
        this.$l_0 = "/_imgs/timercontrol/pause_16.png";
        Mscrm.InlineTimerControlViewBase.prototype.render.call(this);
        this.updateTimerRow(window.LOCID_TIMER_PAUSED)
    }
};
Mscrm.InlineToggleControlView = function($p0) { Mscrm.InlineToggleControlView.initializeBase(this, [$p0]) };
Mscrm.InlineToggleControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.ToggleControlEditView(this) },
    getControlType: function() { return "standard" }
};
Mscrm.InlineTransactionCurrencyLookupControlView = function($p0) {
    Mscrm.InlineTransactionCurrencyLookupControlView.initializeBase(this, [$p0])
};
Mscrm.InlineTransactionCurrencyLookupControlView.prototype = {
    get_getEditViewObject: function() { return new Mscrm.TransactionCurrencyLookupControlEditView(this) },
    initializeEditViewOnDemand: function() {
        Mscrm.SimpleInlineControlView.prototype.initializeEditViewOnDemand.call(this);
        var $v_0 = $find(this.get_chromeElement().attr("data-fdeid")), $$t_4 = this;
        $v_0.get_attributes().forEach(function($p1_0, $p1_1) {
            var $v_1 = $p1_0;
            $v_1.get_metadataType() === "money" &&
                Mscrm.InlineEditInitializerUtility.initializeEditViewsForAttribute($v_1)
        })
    }
};
Mscrm.InlineUrlControlView = function($p0) { Mscrm.InlineUrlControlView.initializeBase(this, [$p0]) };
Mscrm.InlineUrlControlView.prototype = {
    $6_3: null,
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$6_3) && this.$6_3.unbind();
        Mscrm.SimpleInlineControlView.prototype.dispose.call(this)
    },
    get_getEditViewObject: function() { return new Mscrm.UrlControlEditView(this) },
    updateValueElementText: function($p0) {
        var $v_0 = $P_CRM("a", this.get_valueElement());
        $v_0.remove();
        if ($p0 !== this.$0_1.get_emptyValuePlaceholder() && this.$0_1.get_attribute().get_privilegeMask()) {
            this.$6_3 = $P_CRM("<a></a>");
            this.$6_3.attr("href", "#");
            this.$6_3.addClass("ms-crm-gridurl");
            var $$t_3 = this;
            this.$6_3.click(function($p1_0) {
                Mscrm.ReadFormUtilities.handleUrlClick(this);
                $p1_0.stopPropagation();
                $p1_0.preventDefault()
            });
            this.$6_3.text($p0);
            this.get_valueElementInnerSpan().text("");
            this.get_valueElementInnerSpan().append(this.$6_3)
        } else this.get_valueElementInnerSpan().text($p0);
        this.valueElementInnerDiv($p0);
        this.get_layout().appendAndWrapValueElementMask()
    },
    valueElementInnerDiv: function($p0) {
        var $v_0 = this.get_valueElement().children("label");
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = $v_0.children("div"), $v_2 = $v_0[0].id.trim();
            $v_2 = $v_2.replace("_label", "");
            if (Mscrm.Utilities.isFirefox() || Mscrm.Utilities.isSafari()) $v_1.first().text($v_2);
            else $v_1.first().text($v_2 + " " + $p0)
        }
    }
};
Mscrm.InlineWebResourceControlView = function(webResourceControl) {
    this.$$d_$4w_0 = Function.createDelegate(this, this.$4w_0);
    this.$H_0 = webResourceControl;
    var $v_0 = $get(this.$H_0.get_element().id + "_d");
    this.$M_0 = $P_CRM("#" + this.$H_0.get_element().id + "_d");
    if (!IsNull($v_0)) this.$L_0 = XUI.Html.DomUtils.GetFirstChild($v_0);
    var $v_1 = $P_CRM(this.$H_0.get_element()).parents("div.ms-crm-InlineTab-Read:first");
    if ($v_1.length > 0) {
        var $v_2 = $find($v_1[0].id);
        $v_2.get_displayState() === "collapsed" && $v_2.add_tabStateChange(this.$$d_$4w_0)
    }
};
Mscrm.InlineWebResourceControlView.prototype = {
    $H_0: null,
    $L_0: null,
    $e_0: null,
    $M_0: null,
    get_isSilverlightControl: function() { return Mscrm.WebResourceSilverlightControl.isInstanceOfType(this.$H_0) },
    dispose: function() {
        this.$H_0 = null;
        this.$L_0 = null
    },
    $4w_0: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            var $v_0 = $p0;
            $v_0.remove_tabStateChange(this.$$d_$4w_0);
            var $v_1 = this.$H_0.get_element().attributes.getNamedItem("url");
            !IsNull($v_1) && this.$H_0.set_source($v_1.value)
        }
    },
    getKey: function() { return this.getName() },
    getWrapper: function() { return this },
    get_labelContainerElement: function() { return this.$M_0 },
    set_labelContainerElement: function(value) {
        this.$M_0 = value;
        return value
    },
    clearNotification: function(uniqueId) { return false },
    clearNotifications: function() { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getLabel: function() { return !IsNull(this.$L_0) ? XUI.Html.GetText(this.$L_0) : null },
    getName: function() { return this.$H_0.get_element().id },
    getParent: function() { return this.get_parentSection() },
    getVisible: function() { return this.$M_0.css("display") === "none" ? false : true },
    get_parentSection: function() { return this.$e_0 },
    set_parentSection: function(value) {
        this.$e_0 = value;
        return value
    },
    setFocus: function() { this.$H_0.setFocus() },
    setLabel: function(label) { !IsNull(this.$L_0) && XUI.Html.SetText(this.$L_0, label) },
    setVisible: function(visible) {
        var $v_0 = $P_CRM("#" + this.$H_0.get_element().id + "_d"), $v_1 = $v_0.parents("table").last();
        !IsNull($v_1) && $v_1.css("table-layout", "auto");
        this.$H_0.setVisible(visible);
        var $v_2 = $get(this.$H_0.get_element().id + "_c");
        if (!IsNull($v_2)) $v_2.style.display = visible ? "" : "none";
        if (visible) {
            this.$5N_0();
            Mscrm.InlineEditControlCommonUtility.showParentView(this.get_parentSection());
            this.$M_0.show();
            this.get_$1D_0().show();
            this.get_$t_0().show()
        } else {
            this.$M_0.hide();
            Mscrm.InlineEditControlCommonUtility
                .isElementAllChildrenHidden(this.get_$1D_0()) &&
                this.get_$1D_0().hide();
            Mscrm.InlineEditControlCommonUtility.isElementAllChildrenHidden(this.get_$t_0()) && this.get_$t_0().hide();
            Mscrm.InlineEditControlCommonUtility.hideParentViewIfNoControlsVisible(this.get_parentSection())
        }
        Mscrm.InlineEditControlCommonUtility.setUnusedRowsVisibility(this.$M_0, this.get_$t_0(), visible)
    },
    $U_0: null,
    get_$1D_0: function() {
        if (IsNull(this.$U_0) || !this.$U_0.length) this.$U_0 = this.$M_0.parents("td").first();
        return this.$U_0
    },
    $Z_0: null,
    get_$t_0: function() {
        if (IsNull(this.$Z_0) || !this.$Z_0.length) this.$Z_0 = this.$M_0.parents("tr").first();
        return this.$Z_0
    },
    $5N_0: function() {
        var $v_0 = $P_CRM(this.$H_0.get_element()), $v_1 = $v_0.parents("td");
        $v_1.length > 0 && $v_1.first().show();
        var $v_2 = $v_0.parents("tr");
        $v_2.length > 0 && $v_2.first().show();
        var $v_3 = this.get_parentSection();
        !IsNull($v_3) && $v_3.setVisible(true)
    },
    getControlType: function() { return "webresource" },
    getSrc: function() {
        if (Mscrm.WebResourceSilverlightControl.isInstanceOfType(this.$H_0)) return this.$H_0.get_source();
        return this.$H_0.get_element().getAttribute("url") + ""
    },
    getObject: function() { return this.$H_0.get_webResourceContainer() },
    getData: function() { return this.$H_0.get_data() },
    setData: function(data) { this.$H_0.set_data(data) },
    setSrc: function(source) {
        this.$H_0.set_source(source);
        this.$H_0.get_element().setAttribute("url", source)
    }
};
Mscrm.LookupItemView = function() {};
Mscrm.LookupItemView.prototype = {
    $2I_0: null,
    $2Q_0: null,
    $2M_0: null,
    $7_0: null,
    $9_0: null,
    $1r_0: null,
    $3L_0: false,
    $3B_0: null,
    $3C_0: null,
    $A_0: null,
    $1Q_0: null,
    $3D_0: false,
    get_lookupControlItemProxy: function() { return this.$7_0 },
    set_lookupControlItemProxy: function(value) {
        this.$7_0 = value;
        return value
    },
    get_crmEncodeDecodeProxy: function() {
        if (IsNull(this.$2I_0)) this.$2I_0 = new Mscrm.Proxies.CrmEncodeDecodeProxy;
        return this.$2I_0
    },
    set_crmEncodeDecodeProxy: function(value) {
        this.$2I_0 = value;
        return value
    },
    get_domHelperProxy: function() {
        if (IsNull(this.$2M_0)) this.$2M_0 = new Mscrm.Proxies.DomHelperProxy;
        return this.$2M_0
    },
    set_domHelperProxy: function(value) {
        this.$2M_0 = value;
        return value
    },
    get_imageStripProxy: function() {
        if (IsNull(this.$2Q_0)) this.$2Q_0 = new Mscrm.Proxies.ImageStripProxy;
        return this.$2Q_0
    },
    set_imageStripProxy: function(value) {
        this.$2Q_0 = value;
        return value
    },
    get_lookupItemElement: function() {
        if (IsNull(this.$9_0)) {
            if (IsNull(this.$7_0)) return null;
            this.$9_0 = this.get_domHelperProxy().createElement("span");
            var $v_0 = this.$7_0.get_category() === 3 ||
                    this.$7_0.get_category() === 2 ||
                    this.$7_0.get_category() === 1,
                $v_1 = this.$3B_0 === "multi",
                $v_2 = "",
                $v_3;
            if ($v_0) {
                if (this.$7_0.get_category() !== 1)
                    $v_2 = "display: inline-block; text-decoration:none; color:#FF0000;";
                if ($v_1) {
                    if (this.$A_0 !== "deactivated" && this.$7_0.get_category() !== 3 ||
                        this.$A_0 === "deactivated" && this.$7_0.get_category() === 3) {
                        this.$9_0.setAttribute("onclick",
                            "Mscrm.ReadFormUtilities.onClickInlineMultiLookupItemReadMode(new Sys.UI.DomEvent(event));");
                        $v_3 = IsNull(this.$7_0.get_callback())
                            ? "openlui(new Sys.UI.DomEvent(event))"
                            : this.$7_0.get_callback();
                        this.$9_0.setAttribute("onCtrlClick", $v_3)
                    }
                } else
                    this.$A_0 === "deactivated" &&
                        this.$7_0.get_category() === 3 &&
                        this.$9_0.setAttribute("onclick", this.$7_0.get_callback());
                this.$9_0.set_className("ms-crm-Lookup-Item");
                this.$9_0.setAttribute("resolved", "false")
            } else {
                $v_2 = "display: inline-block;";
                this.$9_0.set_className(!isNullOrEmptyString(this.$7_0.get_displayClass())
                    ? this.$7_0.get_displayClass()
                    : "ms-crm-Lookup-Item");
                !this.$3L_0 && this.$9_0.setAttribute("role", "link");
                if ($v_1) {
                    this.$9_0.setAttribute("onclick",
                        "Mscrm.ReadFormUtilities.onClickInlineMultiLookupItemReadMode(new Sys.UI.DomEvent(event));");
                    $v_3 = IsNull(this.$7_0.get_callback())
                        ? "openlui(new Sys.UI.DomEvent(event))"
                        : this.$7_0.get_callback();
                    this.$9_0.setAttribute("onCtrlClick", $v_3)
                } else
                    this.$9_0.setAttribute("onclick",
                        "Mscrm.ReadFormUtilities.openLookup(true, new Sys.UI.DomEvent(event));");
                this.$9_0.setAttribute("resolved", "true");
                $v_3 = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode(this.$7_0.get_typeName());
                this.$9_0.setAttribute("otypename", $v_3);
                $v_3 = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode(this.$7_0.get_type());
                this.$9_0.setAttribute("otype", $v_3);
                $v_3 = this.$7_0.get_id();
                this.$9_0.setAttribute("oid", $v_3);
                this.$5j_0()
            }
            this.$9_0.setAttribute("style", $v_2);
            this.$9_0.setAttribute("onkeydown", "Mscrm.ReadFormUtilities.keyDownHandler(new Sys.UI.DomEvent(event));");
            this.$9_0.set_title(this.$7_0.get_name());
            this.$9_0.set_tabIndex(-1);
            this.$9_0.setAttribute("contenteditable", false);
            this.$9_0.set_innerText(this.$7_0.get_name());
            var $v_4 = this.$3C_0.split(",").length > 1,
                $v_5 = "2",
                $v_6 = "8",
                $v_7 = this.$7_0.get_type() === $v_5 || this.$7_0.get_type() === $v_6;
            if (!$v_1 && ($v_4 || Mscrm.Utilities.isIE() && $v_7)
            ) this.$9_0.insertBefore(this.get_entityIconElement(), this.$9_0.get_firstChild());
            else if (!$v_1 && this.$3D_0 && $v_7) {
                var $v_8 = new Mscrm.Proxies.PresenceHelperProxy,
                    $v_9 = $v_8.getPresenceUri(-1),
                    $v_A = this.get_imageStripProxy().getImage($v_9);
                $v_A.setAttribute("class", "ms-crm-Lookup-PresenceItem placeholder");
                this.$9_0.insertBefore($v_A, this.$9_0.get_firstChild())
            }
        }
        return this.$9_0
    },
    set_lookupItemElement: function(value) {
        this.$9_0 = value;
        return value
    },
    $5j_0: function() {
        var $v_0 = this.get_crmEncodeDecodeProxy().crmHtmlAttributeEncode(this.$7_0.get_isProcessEnabled());
        this.$9_0.setAttribute("isprocessenabled", $v_0);
        if (!isNullOrEmptyString(this.$7_0.get_processId()) && !isNullOrEmptyString(this.$7_0.get_processTimestamp())) {
            this.$9_0.setAttribute("processid", this.$7_0.get_processId());
            this.$9_0.setAttribute("processts", this.$7_0.get_processTimestamp())
        } else if (!IsNull(this.$7_0.get_element().keyValues)) {
            var $v_1 = this.$7_0.get_keyValueProcessId();
            !IsNull($v_1) && this.$9_0.setAttribute("processid", $v_1.value);
            $v_1 = this.$7_0.get_keyValueProcessTimestamp();
            !IsNull($v_1) && this.$9_0.setAttribute("processts", $v_1.value)
        }
    },
    get_lookupItemHiddenElement: function() {
        if (IsNull(this.$1Q_0)) {
            if (IsNull(this.$7_0)) return null;
            this.$1Q_0 = this.get_domHelperProxy().createElement("span");
            this.$1Q_0.setAttribute("style", "display: none;");
            this.$1Q_0.setAttribute("contenteditable", "false");
            this.$1Q_0.set_innerText(this.$7_0.get_name())
        }
        return this.$1Q_0
    },
    set_lookupItemHiddenElement: function(value) {
        this.$1Q_0 = value;
        return value
    },
    get_entityIconElement: function() {
        if (IsNull(this.$1r_0)) {
            var $v_0 = Number.parseInvariant(this.$7_0.get_type());
            if (isNaN($v_0) || !isFinite($v_0)) return null;
            var $v_1 = this.get_imageStripProxy().getIconPath($v_0);
            this.$1r_0 = this.get_imageStripProxy().getImage($v_1);
            var $$t_2;
            ($$t_2 = this.$1r_0).set_className($$t_2.get_className() + " ms-crm-Lookup-Item")
        }
        return this.$1r_0
    },
    set_entityIconElement: function(value) {
        this.$1r_0 = value;
        return value
    },
    get_useTabletExperience: function() { return this.$3L_0 },
    set_useTabletExperience: function(value) {
        this.$3L_0 = value;
        return value
    },
    get_presenceEnabled: function() { return this.$3D_0 },
    set_presenceEnabled: function(value) {
        this.$3D_0 = value;
        return value
    },
    get_controlMode: function() { return this.$A_0 },
    set_controlMode: function(value) {
        this.$A_0 = value;
        return value
    },
    get_lookupStyle: function() { return this.$3B_0 },
    set_lookupStyle: function(value) {
        this.$3B_0 = value;
        return value
    },
    get_lookupTypes: function() { return this.$3C_0 },
    set_lookupTypes: function(value) {
        this.$3C_0 = value;
        return value
    }
};
Mscrm.SimpleInlineControlView = function(layout) {
    this.$$d_$6u_2 = Function.createDelegate(this, this.$6u_2);
    this.$$d_$5e_2 = Function.createDelegate(this, this.$5e_2);
    this.$$d_$7X_2 = Function.createDelegate(this, this.$7X_2);
    Mscrm.SimpleInlineControlView.initializeBase(this, [layout]);
    !IsNull(layout) && this.get_chromeElement().bind("unlock", this.$$d_$7X_2);
    this.$2J_2 = false;
    this.$3A_2 = layout
};
Mscrm.SimpleInlineControlView.prototype = {
    $P_2: null,
    $1I_2: null,
    $k_2: null,
    $43_2: null,
    $1H_2: null,
    $1P_2: null,
    $D_2: null,
    $2J_2: false,
    $v_2: null,
    $26_2: null,
    $3o_2: false,
    $3A_2: null,
    $1f_2: null,
    $g_2: null,
    get_$2_2: function() { return this.$0_1 },
    get_hideLockIcon: function() { return this.$3o_2 },
    set_hideLockIcon: function(value) {
        this.$3o_2 = value;
        value && !IsNull(this.$D_2) && this.$D_2.triggerLockIconStateChanged("state-read");
        return value
    },
    get_valueElementInnerSpan: function() {
        if (!this.$26_2) {
            var $v_0 = this.get_valueElement().children("span");
            if (!$v_0.length) this.$26_2 = this.get_valueElement();
            else this.$26_2 = $v_0.first()
        }
        return this.$26_2
    },
    get_errorValue: function() { return this.$k_2 },
    set_errorValue: function(value) {
        this.$k_2 = value;
        return value
    },
    get_errorNotification: function() {
        if (!IsNull(this.$D_2)) return this.$D_2.get_$6L_4();
        return Mscrm.InlineViewBase.prototype.get_errorNotification.call(this)
    },
    get_validateResult: function() { return this.$43_2 },
    set_validateResult: function(value) {
        this.$43_2 = value;
        return value
    },
    valueElementInnerDiv: function(displayValue) {
        var $v_0 = this.get_valueElement().children("label");
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = $v_0.children("div"), $v_2 = $v_0[0].id.trim();
            $v_2 = $v_2.replace("_label", "");
            if (Mscrm.Utilities.isFirefox() || Mscrm.Utilities.isSafari()) $v_1.first().text($v_2);
            else $v_1.first().text($v_2 + " " + displayValue)
        }
    },
    get_doNotSubmit: function() {
        if (this.get_isEditControlInitialized()) return this.get_editView().get_doNotSubmit();
        return false
    },
    set_doNotSubmit: function(value) {
        this.get_editView().set_doNotSubmit(value);
        return value
    },
    get_overwriteErrorMessage: function() { return this.$1f_2 },
    set_overwriteErrorMessage: function(value) {
        this.$1f_2 = value;
        return value
    },
    get_formDataAttributeType: function() {
        var $v_0 = this.$4q_2();
        if ($v_0) return $v_0.get_metadataType();
        return ""
    },
    tryCompleteOnDemandInitialization: function() {
        !this.get_isEditControlInitialized() && this.initializeEditViewOnDemand()
    },
    initializeEditViewOnDemand: function() {
        Mscrm.InlineEditInitializerUtility
            .initializeEditViewsForAttribute(this.get_$2_2().get_attribute().get_dataAttribute())
    },
    initializeAndRenderEditView: function() {
        if (this.get_isEditControlInitialized()) return;
        if (this.$76_2() && Mscrm.Utilities.isMobileRefresh()) {
            this.$0_1.set_controlMode("alwaysedit");
            this.get_editView().confirm();
            Mscrm.InlineEditUtilities.set_activeControl(this);
            return
        }
        this.set_editView(this.get_getEditViewObject());
        if (this.get_editView()) {
            this.get_editView().set_dataContext(this.$0_1);
            this.get_editView().$1c_2 = this.get_$2_2().get_attribute().get_imeMode();
            this.get_editView().render();
            this.set_initializationState(2)
        }
    },
    setFormType: function(isRefreshForm) { this.get_layout().set_isRefreshForm(isRefreshForm) },
    $76_2: function() {
        if (this.$0_1.get_optimizeForMobileRendering() && this.get_controlMode() === "normal") return true;
        return false
    },
    get_editControlBehavior: function() {
        if (!this.get_isEditControlInitialized()) {
            this.tryCompleteOnDemandInitialization();
            if (IsNull(this.get_editView())) return null
        }
        return this.get_editView().get_editControlBehavior()
    },
    get_$53_2: function() {
        if (IsNull(this.$P_2) || !this.$P_2.length) {
            var $v_0 = String.format("#{0}", this.get_labelElementId());
            this.$P_2 = $P_CRM($v_0)
        }
        return this.$P_2
    },
    get_labelIcon: function() { return this.$1P_2 },
    set_labelIcon: function(value) {
        this.$1P_2 = value;
        this.setLabelIcon();
        return value
    },
    get_needReplaceBR: function() { return false },
    get_validationElement: function() { return this.$D_2.get_validationElement() },
    set_validationElement: function(value) {
        this.$D_2.$1j_4 = value;
        return value
    },
    get_lockIcon: function() { return this.$D_2.get_lockIcon() },
    set_lockIcon: function(value) {
        this.$D_2.$1d_4 = value;
        return value
    },
    get_warningIcon: function() { return this.$D_2.get_warningIcon() },
    set_warningIcon: function(value) {
        this.$D_2.$10_4 = value;
        return value
    },
    get_disableWarningsAndValidation: function() { return this.$2J_2 },
    set_disableWarningsAndValidation: function(value) {
        if (value === this.$2J_2) return value;
        this.$2J_2 = value;
        this.$D_2.triggerWarningIconStateChanged("state-validated");
        this.$D_2.triggerValidationElementStateChanged("state-validated");
        this.$D_2.triggerAlertElementStateChanged("state-validated");
        return value
    },
    get_errorDisplayAreaProvider: function() {
        if (IsNull(this.$1I_2)) this.$1I_2 = new Mscrm.DefaultErrorDisplayContainerProvider;
        return this.$1I_2
    },
    set_errorDisplayAreaProvider: function(value) {
        this.$1I_2 = value;
        return value
    },
    get_controlMode: function() { return this.get_$2_2().get_controlMode() },
    get_warningElementId: function() { return this.get_chromeElement().attr("id") + "_w" },
    get_alertElementId: function() { return this.get_chromeElement().attr("id") + "_a" },
    get_controlId: function() { return this.get_chromeElement().attr("id") },
    get_labelElementId: function() { return this.get_chromeElement().attr("id") + "_c" },
    get_isDirty: function() {
        if (!this.get_isEditControlInitialized()) return false;
        return this.get_editView().get_isDirty()
    },
    get_isValid: function() {
        if (!this.get_isEditControlInitialized()) return true;
        return this.get_editView().get_isValid()
    },
    $3f_2: function() {
        var $v_0 = this.get_$2_2().get_attribute(),
            $v_1 = isNullOrEmptyString($v_0.get_displayValue())
                ? Mscrm.InlineEditUtilities.getDecodedValue($v_0.get_initialValue(), this.get_needReplaceBR())
                : $v_0.get_displayValue();
        this.tryUpdateValueElementText($v_1);
        (this.$0_1.get_attribute().get_sourceType() === 1 || this.$0_1.get_attribute().get_sourceType() === 2) &&
            this.displayWarningMessage()
    },
    displayWarningMessage: function() {
        if (this.$0_1.get_attribute().get_sourceTypeMask() === 32) {
            this.$g_2 = window.INVALID_FIELD_DEFINITION_ERROR;
            this.$D_2.showMessageInAlertDiv(this.$g_2);
            this.$D_2.hideAlertDiv(false)
        } else this.$D_2.hideAlertDiv(true)
    },
    showAlertElement: function() {
        if (this.$0_1.get_attribute().get_sourceTypeMask() === 32 ||
            this.$0_1.get_attribute().get_sourceType() === 2 && this.$0_1.get_attribute().get_rollupInvalid()) {
            this.$g_2 = window.INVALID_FIELD_DEFINITION_ERROR;
            this.$D_2.showMessageInAlertDiv(this.$g_2)
        }
    },
    hideAlertElement: function(hideAnchor) { this.$D_2.hideAlertDiv(hideAnchor) },
    get_enableLazyInitialization: function() { return this.get_chromeElement().attr("data-fdeid") === "PrimaryEntity" },
    handleModelToViewBinding: function(jQueryEvent, propertyName) {
        switch (propertyName) {
        case "ControlMode":
            $P_CRM(this).trigger("ms-crm-PropertyChange", ["ControlMode"]);
            if (this.get_controlMode() === "alwaysedit" || this.get_initializationState() === 2) {
                this.get_editView().$4H_2(jQueryEvent, propertyName);
                break
            }
            break;
        case "EditValue":
        case "DefaultEditValue":
            this.get_editView().$4H_2(jQueryEvent, propertyName);
            break;
        case "LabelValue":
            this.set_labelElementValue(this.get_$2_2().get_labelValue());
            break;
        case "EmptyValuePlaceholder":
            this.set_emptyValuePlaceholder(this.get_$2_2().get_emptyValuePlaceholder());
            break;
        default:
            break
        }
    },
    get_emptyValuePlaceholder: function() { return this.$1H_2 },
    set_emptyValuePlaceholder: function(value) {
        this.$1H_2 = value;
        return value
    },
    $7M_2: function($p0) { return isNullOrEmptyString($p0) },
    tryUpdateValueElementText: function(displayValue) {
        if (this.get_controlMode() === "alwaysedit" && Mscrm.Utilities.isMobileRefresh()) return;
        var $v_0 = "", $v_1 = this.get_$2_2(), $v_2 = null;
        if (this.$7M_2(displayValue)) {
            this.get_valueElement().addClass("ms-crm-Inline-EmptyValue");
            $v_2 = $v_1.get_emptyValuePlaceholder();
            if (!this.get_disabled()) $v_0 = $v_1.get_emptyValueTooltip()
        } else {
            this.get_valueElement().removeClass("ms-crm-Inline-EmptyValue");
            $v_2 = displayValue;
            $v_0 = this.getToolTip(displayValue)
        }
        if ($v_1.get_attribute().get_canRead()) {
            this.updateValueElementText($v_2);
            this.get_layout().updateTooltip($v_0)
        } else this.updateValueElementText("*******")
    },
    updateValueElementText: function(displayValue) {
        this.get_valueElementInnerSpan().text(displayValue);
        this.valueElementInnerDiv(displayValue);
        this.get_layout().appendAndWrapValueElementMask()
    },
    isElementInFlyOut: function(targetElement) { return targetElement.parents(".ui-flyout-dialog").length > 0 },
    $5u_2: function($p0) {
        var $v_0 = $find(this.get_$2_2().get_attribute().get_dataAttributeId());
        if (IsNull($v_0)) {
            if (IsNull($p0)) $p0 = {};
            $p0["id"] = this.get_$2_2().get_attribute().get_dataAttributeId();
            $p0["name"] = this.get_$2_2().get_attribute().get_logicalName();
            $p0["initialValue"] = this.$R_2();
            $v_0 = Mscrm.CrmUIComponent.crmCreate(this.get_$2_2().get_attribute().get_dataAttributeType(),
                $p0,
                null,
                { parent: this.get_$2_2().get_attribute().get_parentFormDataEntityId() },
                null);
            this.get_$2_2().get_attribute().get_attributeType() === "bit" && $v_0.set_metadataType("boolean");
            $v_0.set_isCompositeAttribute(this.get_$2_2().get_attribute().get_isCompositeAttributeValueSet());
            $v_0.set_userPrivilegeMask(this.get_$2_2().get_attribute().get_privilegeMask());
            $v_0.set_labelName(this.get_$2_2().get_attribute().get_labelName())
        }
        return $v_0
    },
    createChromeBehavior: function() {
        if (IsNull(this.$D_2))
            this.$D_2 = Mscrm.CrmUIComponent.crmCreate(this.get_layout().get_chromeBehaviorType(),
                { view: this },
                null,
                null,
                this.get_chromeElement().get(0))
    },
    get_chromeBehavior: function() { return this.$D_2 },
    attachBehaviors: function() {
        this.$5u_2();
        Mscrm.InlineViewBase.prototype.attachBehaviors.call(this)
    },
    $6u_2: function($p0) { this.resetLayout() },
    $7X_2: function($p0) {
        var $v_0 = "normal";
        this.$0_1.setDefaultControlMode($v_0);
        this.$0_1.set_disabled(false);
        this.get_layout().renderForRead();
        this.tryUpdateValueElementText(this.get_$2_2().get_attribute().get_displayValue())
    },
    getToolTip: function(displayValue) { return displayValue },
    $R_2: function() {
        return Mscrm.InlineEditUtilities.getDecodedValue(this.$0_1.get_attribute().get_initialValue(), true)
    },
    tryAddAndShowValidationResult: function(result) {
        var $v_0 = this.get_validateResult()
                ? this.get_validateResult().isValid && result.get_success()
                : result.get_success(),
            $v_1 = this.get_validateResult() ? this.get_validateResult().errorText : "";
        if ($v_0) {
            this.clearValidation();
            return false
        }
        if (!isNullOrEmptyString($v_1)) $v_1 = String.format("{0} {1}", $v_1, result.get_errorMessage());
        else $v_1 = result.get_errorMessage();
        var $v_2 = new Mscrm.ValidationResult(false, $v_1);
        this.$5Q_2($v_2);
        return true
    },
    tryReplaceAndShowValidationResult: function(result) {
        var $v_0 = this.get_validateResult()
            ? this.get_validateResult().isValid && result.get_success()
            : result.get_success();
        if ($v_0) {
            this.clearValidation();
            this.$1f_2 = null;
            return false
        }
        var $v_1 = result.get_errorMessage(), $v_2 = new Mscrm.ValidationResult(false, $v_1, null, true);
        this.$5Q_2($v_2);
        this.$1f_2 = $v_1;
        return true
    },
    $5Q_2: function($p0) {
        var $v_0 = [$p0];
        this.get_editView().get_editElementWrapper().trigger("state-validated", $v_0)
    },
    getKey: function() { return this.get_chromeElement().attr("id") },
    getWrapper: function() { return this },
    get_disabled: function() { return this.get_isDisposed() ? true : this.get_$2_2().get_disabled() },
    set_disabled: function(value) {
        this.$5I_2(value, false);
        return value
    },
    setDisabled: function(isDisabled) { this.$5I_2(isDisabled, true) },
    $5I_2: function($p0, $p1) {
        this.get_$2_2().set_disabled($p0);
        $p0 && this.get_$2_2().get_hasError() && this.clearValidation();
        $p1 && Mscrm.InlineEditUtilities.registerClientControlDisablingState(this.getKey(), $p0)
    },
    goToEditState: function() { this.get_state().set_currentState(2) },
    goToPreFocusState: function() {
        if (!IsNull(this.$v_2)) return;
        var $v_0 = this.get_chromeElement().attr("tabindex"), $v_1 = parseInt($v_0);
        if (IsNull($v_1) || isNaN($v_1)) return;
        this.$v_2 = $P_CRM(document.createElement("input")).addClass("ms-crm-Hidden-NoBehavior").attr("type", "text")
            .attr("tabindex", $v_1.toString());
        this.$v_2.insertBefore(this.get_chromeElement());
        var $$t_3 = this;
        this.$v_2.blur(function($p1_0) { $$t_3.$v_2.attr("tabindex", "-1") });
        this.$v_2.focus()
    },
    setFocus: function() {
        if (this.get_isDisposed()) return;
        !this.isVisibleInTree() && this.setVisible(true);
        if (this.get_disabled()) this.get_chromeElement().focus();
        else {
            this.get_controlMode() !== "alwaysedit" && this.get_state().set_currentState(2);
            this.get_editView().focusEditElement()
        }
    },
    isEditing: function() {
        if (!this.get_isEditControlInitialized()) return false;
        return this.get_editView().isEditing()
    },
    renderForRead: function() {
        this.get_chromeElement().attr("data-initializing", "1");
        !Mscrm.InlineEditControlCommonUtility.isFirefox() && this.$85_2();
        this.get_layout().renderForRead();
        this.attachBehaviors();
        this.$D_2.tryTransitionToAlwaysEditMode();
        this.$4v_2();
        if (!this.get_isEditControlInitialized())
            if (!this.get_enableLazyInitialization()) this.initializeAndRenderEditView();
            else Mscrm.DeferredInlineEditOnDemandInitializer.get_instance().addControl(this);
        this.get_chromeElement().removeAttr("data-initializing");
        this.$3f_2()
    },
    resetLayout: function() {
        Mscrm.InlineControlViewBase.prototype.resetLayout.call(this);
        this.get_isEditControlInitialized() && this.get_layout().renderForEdit()
    },
    clearValidation: function() {
        this.get_state().get_validationResult().isValid = true;
        this.get_state().get_validationResult().errorText = "";
        if (!IsNull(this.get_validateResult())) {
            this.get_validateResult().isValid = true;
            this.get_validateResult().errorText = ""
        }
        if (!isNullOrEmptyString(this.$D_2) && !isNullOrEmptyString(this.$D_2.triggerValidationElementStateChanged)) {
            this.$D_2.triggerValidationElementStateChanged("state-read");
            this.get_warningIcon().hide()
        }
    },
    addControlTypeCssClassToChromeElement: function() {
        this.get_chromeElement().addClass(this.get_$2_2().get_attribute().get_attributeType())
    },
    $85_2: function() { this.get_chromeElement().attr("aria-describedby", this.get_labelElementId()) },
    $4v_2: function() {
        var $v_0 = this.get_$2_2();
        $v_0.setPropertyWithoutRaisingEvent("LabelValue", this.get_labelElementValue());
        this.$0_1.get_attribute().addOnChangeInternal(this.$$d_$5e_2, false)
    },
    $5e_2: function($p0) { this.get_isEditControlInitialized() && this.get_editView().attributeChanged() },
    get_labelElementValue: function() {
        var $v_0 = this.get_layout().get_labelElement().first().text();
        return $v_0
    },
    set_labelElementValue: function(value) {
        this.get_layout().get_labelElement().first().text(value);
        return value
    },
    blur: function() {
        if (this.get_isDisposed()) return;
        this.get_isEditControlInitialized() && this.get_editView().confirm()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.clearValidation();
        !IsNull(this.$v_2) && this.$v_2.unbind();
        if (!IsNull(this.$0_1)) {
            var $v_0 = this.$0_1.get_attribute();
            !IsNull($v_0.get_dataAttribute()) && $v_0.removeOnChangeInternal(this.$$d_$5e_2)
        }
        this.get_chromeElement().unbind("unlock", this.$$d_$7X_2);
        this.$U_2 = null;
        this.$v_2 = null;
        this.$26_2 = null;
        this.$P_2 = null;
        $P_CRM(window).unbind("resize", this.$$d_$6u_2);
        this.$D_2.dispose();
        this.$D_2 = null;
        Mscrm.InlineControlViewBase.prototype.dispose.call(this)
    },
    setLabelIcon: function() {
        if (IsNull(this.get_layout().get_labelElement()) ||
            IsNull(this.$1P_2) ||
            this.get_layout().get_labelElement().length !== 1) return;
        if (!this.get_layout().get_labelElement().hasClass("ms-crm-label-icon")) {
            var $v_0 = Mscrm.CrmUri.create(this.$1P_2), $v_1 = $P_CRM(Mscrm.ImageStrip.getImage($v_0));
            $v_1.attr("alt", this.get_labelElementValue());
            this.get_layout().get_labelElement().prepend($v_1);
            this.get_layout().get_labelElement().addClass("ms-crm-label-icon")
        }
    },
    setRequiredLevel: function(level) {
        this.get_layout().setRequiredOrRecommendedLevel(level);
        var $v_0 = this.$0_1.get_attribute();
        !IsNull($v_0) && $v_0.set_requiredLevel(Mscrm.InlineEditInitializerUtility.$4t(level));
        if (this.get_isEditControlInitialized()) {
            var $v_1 = this.get_editView().get_editElementValue();
            if (isNullOrEmptyString($v_1)) {
                var $v_2 = this.$0_1.validate($v_1);
                if ($v_2.isValid) {
                    var $v_3 = [$v_2];
                    this.get_editView().get_editElementWrapper().trigger("state-validated", $v_3)
                }
            }
        }
    },
    isVisibleInTree: function() {
        if (this.get_chromeElement()
            .css("display") ===
            "none" ||
            this.get_chromeElement().css("height") === "0px") return false;
        for (var $v_0 = this.get_chromeElement().parents(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0.eq($v_1);
            if ($v_2.css("display") === "none" || $v_2.css("visibilty") === "hidden") return false
        }
        return true
    },
    getLabel: function() { return this.get_label() },
    setLabel: function(label) { this.set_label(label) },
    getName: function() {
        if (!IsNull(this.get_chromeElement())) return this.get_chromeElement().attr("id");
        return this.get_dataFieldName()
    },
    getAttribute: function() {
        var $v_0 = null, $v_1 = this.$4q_2();
        if ($v_1) $v_0 = $v_1.getWrapper();
        return $v_0
    },
    $4q_2: function() {
        var $v_0 = this.$0_1;
        if ($v_0) {
            var $v_1 = $v_0.$4_0;
            if ($v_1) {
                var $v_2 = $find($v_1.get_dataAttributeId());
                return $v_2
            }
        }
        return null
    },
    getVisible: function() { return this.get_chromeElement().css("display") !== "none" },
    setVisible: function(isVisible) {
        if (isVisible) {
            Mscrm.InlineEditControlCommonUtility.showParentView(this.get_parentSection());
            this.get_$53_2().show();
            this.get_chromeElement().show();
            this.$8M_2();
            this.get_$1D_2().show();
            this.get_$t_2().show()
        } else {
            this.get_$53_2().hide();
            this.get_chromeElement().hide();
            this.$70_2();
            Mscrm.InlineEditControlCommonUtility
                .isElementAllChildrenHidden(this.get_$1D_2()) &&
                this.get_$1D_2().hide();
            Mscrm.InlineEditControlCommonUtility.isElementAllChildrenHidden(this.get_$t_2()) && this.get_$t_2().hide();
            Mscrm.InlineEditControlCommonUtility.hideParentViewIfNoControlsVisible(this.get_parentSection())
        }
        Mscrm.InlineEditControlCommonUtility.updatePageControlsErrorDivMessage()
    },
    $8M_2: function() { this.$3A_2.get_iconElement().removeClass("ms-crm-Hidden") },
    $70_2: function() { this.$3A_2.get_iconElement().addClass("ms-crm-Hidden") },
    $U_2: null,
    get_$1D_2: function() {
        if (IsNull(this.$U_2) || !this.$U_2.length) this.$U_2 = this.get_chromeElement().parents("td").first();
        return this.$U_2
    },
    $Z_2: null,
    get_$t_2: function() {
        if (IsNull(this.$Z_2) || !this.$Z_2.length) this.$Z_2 = this.get_chromeElement().parents("tr").first();
        return this.$Z_2
    },
    updateControlErrorDivMessage: function() {
        if (this.get_chromeBehavior().isErrorDivSet()) {
            this.get_chromeBehavior().hideErrorDiv();
            this.isVisibleInTree() && this.get_chromeBehavior().showErrorDiv()
        }
    },
    get_label: function() {
        var $v_0 = this.get_layout().get_labelElement();
        if ($v_0.length > 0) {
            var $v_1 = $v_0.first().text();
            if (!IsNull($v_1)) return $v_1.trim()
        }
        if (!IsNull(this.$0_1) && !IsNull(this.$0_1.get_attribute())) {
            if (!isNullOrEmptyString(this.$0_1.get_attribute()
                .get_displayValue())) return this.$0_1.get_attribute().get_displayValue();
            return this.$0_1.get_attribute().get_logicalName()
        }
        return ""
    },
    set_label: function(value) {
        var $v_0 = this.get_layout().get_labelElement();
        if ($v_0.length > 0 && !IsNull(value))
            if ($v_0.children().length > 0) {
                var $v_1 = $v_0.find(String.format(".{0}", "ms-crm-InlineEditLabelText"));
                $v_1.length > 0 && $v_1.text(value)
            } else $v_0.first().text(value);
        return value
    },
    get_dataFieldName: function() {
        if (!IsNull(this
                .$0_1) &&
            !IsNull(this.$0_1.get_attribute())) return this.$0_1.get_attribute().get_logicalName();
        return null
    },
    set_dataFieldName: function(value) { return value }
};
Mscrm.TextAreaHelper = function() {};
Mscrm.TextAreaHelper.normalizeNewLine = function($p0) {
    return Mscrm.InlineEditUtilities.normalizeNewLineForTextArea($p0)
};
Mscrm.TextAreaHelper.findTextArea = function($p0) {
    var $v_0 = $p0.children(".ms-crm-InlineInput");
    return $v_0
};
Mscrm.InlineRelatedEntityLookupType = function() {};
Mscrm.CompositeLinkControl = function() {};
Mscrm.AttributeFormat = function() {};
Mscrm.AttributeBehavior = function() {};
Mscrm.SourceType = function() {};
Mscrm.SourceTypeMask = function() {};
Mscrm.HtmlAttributeNames = function() {};
Mscrm.EditEvents = function() {};
Mscrm.CssClassNames = function() {};
Mscrm.HtmlElementNames = function() {};
Mscrm.ElementTemplate = function() {};
Mscrm.InlineLookupUtility = function() {};
Mscrm.InlineLookupUtility.$4z = function($p0) {
    var $v_0;
    if ($p0.get_isInlineMultiLookup()) $v_0 = $p0.Items(true, true, false, false, false);
    else $v_0 = $p0.Items(false, false, false, false, false);
    return Mscrm.LookupAttribute.itemsDifferent($v_0, $p0.get_defaultValue())
};
Mscrm.InlineLookupUtility.$8D = function($p0, $p1, $p2) {
    var $v_0 = parseInt($p1.type, 10) === 9206;
    if ($v_0)
        if ($p0 === "deactivated" || $p2) $p1.category = 3;
        else $p1.category = 2
};
Mscrm.InlineLookupUtility.$47 = function($p0, $p1, $p2) {
    return Mscrm.InlineLookupUtility.$4f($p0, $p1, $p2, "ms-crm-Inline-EditIcon")
};
Mscrm.InlineLookupUtility.$4f = function($p0, $p1, $p2, $p3) {
    var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($p0));
    return String.format($p1,
        $p3,
        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source),
        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass + " " + $p2))
};
Mscrm.InlineLookupUtility.$4I = function($p0) {
    var $v_0 = $P_CRM(XUI.Html.DomUtils.GetFirstChild($p0)),
        $v_1 = $v_0.offset(),
        $v_2 = $v_1.left,
        $v_3 = $v_1.top,
        $v_4 = {};
    $v_4["x"] = $v_2;
    $v_4["y"] = $v_3;
    return $v_4
};
Mscrm.InlineLookupUtility.$4L = function($p0, $p1, $p2) {
    if (!$p2.get_isEditControlInitialized()) return;
    var $v_0 = new Mscrm.ValidationResult(false, $p0, $p1);
    $p2.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
};
Mscrm.InlineLookupUtility.$71 = function($p0) {
    var $v_0 = new Mscrm.ValidationResult(true, null, null);
    $p0.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
};
Mscrm.InlineLookupUtility.$4x = function($p0) { $p0.updateReadLookupHtml() };
Mscrm.InlineLookupUtility.$52 = function($p0, $p1) { return Mscrm.InlineLookupUtility.$4R($p0, $p1) };
Mscrm.InlineLookupUtility.$4R = function($p0, $p1) {
    if (!$p1.get_isEditControlInitialized()) return true;
    var $v_0, $v_1 = $p0.Items(false, true, false, false, false);
    if (IsNull($v_1) || !$v_1.length) {
        $v_0 = !$p0.hasUnresolvedText();
        $v_0 && $p1.tryUpdateValueElementText("")
    } else if ($p0.get_isInlineMultiLookup() && $p0.hasUnresolvedText()) $v_0 = false;
    else $v_0 = !($v_1[$v_1.length - 1].category === 2 || $v_1[$v_1.length - 1].category === 1);
    var $v_2 = new Mscrm.ValidationResult($v_0, null);
    $v_2.isValid && $p1.get_editView().get_editElementWrapper().trigger("state-validated", [$v_2]);
    return $v_2.isValid
};
Mscrm.InlineLookupUtility.$5S = function($p0, $p1) {
    if (!$p1.get_disableWarningsAndValidation() && !$p0.isValid) {
        if (!IsNull($p1.get_warningIcon()[0])) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild($p1.get_warningIcon()[0]);
            if (IsNull($p0.errorIconPath)) $v_0.src = "/_imgs/inlineedit/warning.png";
            else {
                $v_0.src = $p0.errorIconPath;
                $v_0.style.backgroundImage = "none"
            }
            $p1.get_warningIcon().show()
        }
    } else !IsNull($p1.get_warningIcon()[0]) && $p1.get_warningIcon().hide()
};
Mscrm.InlineLookupUtility.$5A = function($p0, $p1, $p2) {
    var $v_0 = $p1;
    if ("multi" !== $v_0.get_viewModel().get_lookupStyle()) {
        var $v_1 = "#" + $p0.currentTarget.parentNode.id, $v_2 = $P_CRM($v_1).find($v_1 + "_i");
        $v_2.attr("isdeduplookup") === "1" && Mscrm.InlineLookupUtility.$5P($v_2, $p1);
        if (!$v_0.isElementInLookupValueLink($P_CRM($p0.target)) || $v_0.isItemAmbiguous()) {
            $p2.set_valueElementClicked(true);
            $v_2.attr("isdeduplookup") !== "1" && Mscrm.InlineLookupUtility.$5P($v_2, $p1)
        }
    } else $p2.set_valueElementClicked(true)
};
Mscrm.InlineLookupUtility.$5P = function($p0, $p1) {
    !IsNull($p0) && $p1.get_controlMode() !== "locked" && $p0.trigger("click")
};
Mscrm.InlineLookupUtility.$58 = function($p0, $p1) {
    if (!$p1.get_isEditControlInitialized()) return;
    if ($p0.type === "state-discard" || $p0.type === "state-commit") {
        var $v_0 = new Mscrm.ValidationResult(true, null);
        $p1.get_editView().get_editElementWrapper().trigger("state-validated", [$v_0])
    }
};
Mscrm.InlineLookupUtility.$55 = function($p0) {
    var $v_0 = $p0.get_valueElement().find(".ms-crm-Lookup-Item");
    !IsNull($v_0) && !IsNull($v_0.first()) && XUI.Html.DispatchDomEvent($v_0[0], XUI.Html.CreateDomEvent("click"))
};
Mscrm.InlineRollupUtility = function() {};
Mscrm.InlineRollupUtility.$5C = function($p0, $p1) {
    var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($p0));
    return String.format($p1,
        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source),
        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass + " rollup refreshImage refresh"),
        CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_ROLLUP_CALCULATE_TOOLTIP))
};
Mscrm.InlineRollupUtility.$3g = function($p0, $p1) {
    var $v_0 = Mscrm.InlineEditDataService.get_formEntity().get_recordId();
    if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_0) &&
        $p1.get_refreshIconLink().length > 0 &&
        $p1.get_refreshIconLink().hasClass("rolluprefreshPostsLink") &&
        ($p0.target.id === "refreshIcon" || !IsNull($p0.which) && $p0.which === 13) &&
        $p1.$0_1.get_attribute().get_sourceTypeMask() !== 32) {
        var $v_1 = $p1.get_refreshIconLink().find("img");
        Mscrm.InlineRollupUtility.$8O($v_1);
        var $v_2 = new RemoteCommand("RollupFieldsWebService", "CalculateRollupField");
        $v_2.SetParameter("recordId", Mscrm.InlineEditDataService.get_formEntity().get_recordId());
        $v_2.SetParameter("entityLogicalName", Mscrm.InlineEditDataService.get_formEntity().get_typeName());
        $v_2.SetParameter("attributeLogicalName", $p1.get_dataFieldName());
        var $v_3 = function($p1_0, $p1_1) {
            Mscrm.InlineRollupUtility.$8N($v_1);
            if ($p1_0.Success) {
                var $v_4 = $p1_0.ReturnValue;
                $p1.calculateRollupCallBack($v_4.RollupValue, $v_4.RollupValueRaw, $v_4.LastUpdatedTime, $v_4.State)
            }
        };
        $v_2.Execute($v_3)
    }
};
Mscrm.InlineRollupUtility.$8Q = function($p0, $p1) {
    if ($p0.target.id === "refreshIcon") {
        $p1.get_rollupToolTipFlyout().hideError();
        $p1.$1N_3 = false
    } else {
        $p1.$1N_3 = !$p1.$1N_3;
        if ($p1.$1N_3) $p1.displayTabletToolTip();
        else $p1.get_rollupToolTipFlyout().hideError()
    }
};
Mscrm.InlineRollupUtility.$8O = function($p0) {
    $p0.attr("src", "/_imgs/inlineedit/saveanimation.gif");
    $p0.parent().addClass("rolluprefreshPostsLinkSpinningWheel");
    $p0.removeClass("ms-crm-ImageStrip-rollup_refresh");
    $p0.parent().removeClass("rolluprefreshPostsLink")
};
Mscrm.InlineRollupUtility.$8N = function($p0) {
    if (Mscrm.InternalUtilities.Utilities
        .isHighContrastEnabled()) $p0.attr("src", "/_imgs/sfa/refresh_high_contrast_16.png");
    else {
        $p0.attr("src", "/_imgs/imagestrips/transparent_spacer.gif");
        $p0.addClass("ms-crm-ImageStrip-rollup_refresh")
    }
    $p0.parent().removeClass("rolluprefreshPostsLinkSpinningWheel");
    $p0.parent().addClass("rolluprefreshPostsLink")
};
Mscrm.InlineControlFactory = function() {};
Mscrm.InlineControlFactory.$$cctor = function() { $P_CRM(window).bind("unload", Mscrm.InlineControlFactory.$5B) };
Mscrm.InlineControlFactory.$5B = function($p0) {
    $P_CRM(window).unbind("unload", Mscrm.InlineControlFactory.$5B);
    Mscrm.InlineControlFactory.disposeAllControls()
};
Mscrm.InlineControlFactory.registerForDispose = function(view) { Array.add(Mscrm.InlineControlFactory.$F, view) };
Mscrm.InlineControlFactory.unregisterAllDisposedObjects = function() {
    for (var $v_0 = 0;
        $v_0 < Mscrm.InlineControlFactory.$F.length;
        $v_0++
    )
        if (!IsNull(Mscrm.InlineControlFactory
                .$F[$v_0]) &&
            Mscrm.InlineControlFactory.$F[$v_0]._disposed) Mscrm.InlineControlFactory.$F[$v_0] = null
};
Mscrm.InlineControlFactory.disposeAllControls = function() {
    for (var $v_0 = 0;
        $v_0 < Mscrm.InlineControlFactory.$F.length;
        $v_0++
    )
        !IsNull(Mscrm.InlineControlFactory.$F[$v_0]) &&
            Mscrm.InlineControlFactory.$F[$v_0].dispose &&
            Mscrm.InlineControlFactory.$F[$v_0].dispose();
    Array.clear(Mscrm.InlineControlFactory.$F)
};
Mscrm.InlineControlFactory.createControl = function(containerElement, metadata, initialValue, initialControlMode) {
    var $v_0 = null,
        $v_1,
        $v_2 = null,
        $v_3 = null,
        $v_4 = metadata,
        $v_5 = metadata,
        $v_6 = containerElement.attr("data-fdeid"),
        $v_7 = metadata,
        $v_8 = metadata;
    switch (metadata.AttributeType) {
    case "ntext":
        var $$t_E, $$t_F, $$t_G, $$t_H;
        Mscrm.InlineControlFactory.$65(containerElement,
            initialValue,
            initialControlMode,
            $v_4,
            $v_6,
            $$t_E = { val: $v_2 },
            $$t_F = { val: $v_1 },
            $$t_G = { val: $v_3 },
            $$t_H = { val: $v_0 }), $v_2 = $$t_E.val, $v_1 = $$t_F.val, $v_3 = $$t_G.val, $v_0 = $$t_H.val;
        break;
    case "nvarchar":
    case "uniqueidentifier":
    case "primarykey":
        var $$t_I, $$t_J, $$t_K, $$t_L;
        Mscrm.InlineControlFactory.$68(containerElement,
            initialValue,
            initialControlMode,
            $v_4,
            $v_6,
            $$t_I = { val: $v_2 },
            $$t_J = { val: $v_1 },
            $$t_K = { val: $v_3 },
            $$t_L = { val: $v_0 }), $v_2 = $$t_I.val, $v_1 = $$t_J.val, $v_3 = $$t_K.val, $v_0 = $$t_L.val;
        break;
    case "lookup":
    case "owner":
    case "customer":
        var $$t_M, $$t_N, $$t_O, $$t_P;
        Mscrm.InlineControlFactory.$64(containerElement,
            initialValue,
            initialControlMode,
            $v_8,
            $v_6,
            $$t_M = { val: $v_2 },
            $$t_N = { val: $v_1 },
            $$t_O = { val: $v_3 },
            $$t_P = { val: $v_0 }), $v_2 = $$t_M.val, $v_1 = $$t_N.val, $v_3 = $$t_O.val, $v_0 = $$t_P.val;
        break;
    case "partylist":
        var $$t_Q, $$t_R, $$t_S, $$t_T;
        Mscrm.InlineControlFactory.$69(containerElement,
            initialValue,
            initialControlMode,
            $v_8,
            $v_6,
            $$t_Q = { val: $v_2 },
            $$t_R = { val: $v_1 },
            $$t_S = { val: $v_3 },
            $$t_T = { val: $v_0 }), $v_2 = $$t_Q.val, $v_1 = $$t_R.val, $v_3 = $$t_S.val, $v_0 = $$t_T.val;
        break;
    case "int":
    case "float":
    case "decimal":
        var $$t_U, $$t_V, $$t_W, $$t_X;
        Mscrm.InlineControlFactory.$66(containerElement,
            metadata,
            initialValue,
            initialControlMode,
            $v_7,
            $v_5,
            $v_6,
            $$t_U = { val: $v_2 },
            $$t_V = { val: $v_1 },
            $$t_W = { val: $v_3 },
            $$t_X = { val: $v_0 }), $v_2 = $$t_U.val, $v_1 = $$t_V.val, $v_3 = $$t_W.val, $v_0 = $$t_X.val;
        break;
    case "picklist":
    case "state":
        var $$t_Y, $$t_Z, $$t_a, $$t_b;
        Mscrm.InlineControlFactory.$6A(containerElement,
            metadata,
            initialValue,
            initialControlMode,
            $v_5,
            $v_6,
            $$t_Y = { val: $v_2 },
            $$t_Z = { val: $v_1 },
            $$t_a = { val: $v_3 },
            $$t_b = { val: $v_0 }), $v_2 = $$t_Y.val, $v_1 = $$t_Z.val, $v_3 = $$t_a.val, $v_0 = $$t_b.val;
        break;
    case "status":
        var $$t_c, $$t_d, $$t_e, $$t_f;
        Mscrm.InlineControlFactory.$6B(containerElement,
            metadata,
            initialValue,
            initialControlMode,
            $v_6,
            $$t_c = { val: $v_2 },
            $$t_d = { val: $v_1 },
            $$t_e = { val: $v_3 },
            $$t_f = { val: $v_0 }), $v_2 = $$t_c.val, $v_1 = $$t_d.val, $v_3 = $$t_e.val, $v_0 = $$t_f.val;
        break;
    case "datetime":
        $v_1 = new Mscrm.InlineDateTimeAttribute(metadata, initialValue, $v_6);
        $v_2 = new Mscrm.InlineDateTimeControlViewModel($v_1, initialControlMode);
        $v_3 = Mscrm.LayoutFactory.createLayout(containerElement, $v_2);
        $v_0 = new Mscrm.InlineDateTimeControlView($v_3);
        $v_0.set_dataContext($v_2);
        break;
    case "money":
        $v_1 = new Mscrm.InlineMoneyAttribute(metadata, initialValue, $v_6);
        $v_2 = new Mscrm.InlineMoneyControlViewModel($v_1, initialControlMode);
        $v_3 = Mscrm.LayoutFactory.createLayout(containerElement, $v_2);
        $v_0 = new Mscrm.InlineMoneyControlView($v_3);
        $v_0.set_dataContext($v_2);
        break;
    case "bit":
        var $v_9 = containerElement.attr("isInlineCheckBox");
        if (!isNullOrEmptyString($v_9) && $v_9 === "true") {
            $v_1 = new Mscrm.InlineCheckBoxAttribute(metadata, initialValue, $v_6);
            $v_2 = new Mscrm.InlineCheckBoxControlViewModel($v_1, "alwaysedit");
            $v_3 = Mscrm.LayoutFactory.createLayout(containerElement, $v_2);
            $v_0 = new Mscrm.InlineCheckBoxControlView($v_3);
            $v_0.set_dataContext($v_2);
            (initialControlMode === "locked" || initialControlMode === "deactivated") && $v_0.set_disabled(true)
        } else {
            var $$t_g, $$t_h, $$t_i, $$t_j;
            Mscrm.InlineControlFactory.$6F(containerElement,
                initialValue,
                initialControlMode,
                $v_5,
                $v_6,
                $$t_g = { val: $v_2 },
                $$t_h = { val: $v_1 },
                $$t_i = { val: $v_3 },
                $$t_j = { val: $v_0 }), $v_2 = $$t_g.val, $v_1 = $$t_h.val, $v_3 = $$t_i.val, $v_0 = $$t_j.val
        }
        break
    }
    if (metadata.SourceType === 2 && !Mscrm.Utilities.isMobileRefresh()) {
        $v_0 = new Mscrm.InlineRollupControlView($v_3, $v_0);
        $v_0.set_dataContext($v_2)
    }
    Array.add(Mscrm.InlineControlFactory.$F, $v_0);
    return $v_0
};
Mscrm.InlineControlFactory
    .createInlineLookupControlForDom = function(element, attributeName, entityName, attributeId, parentContainerId) {
        var $v_0 = Mscrm.InlineControlFactory
            .createInlineLookupControlForDomWithDisableState(element,
                attributeName,
                entityName,
                attributeId,
                false,
                parentContainerId);
        Array.add(Mscrm.InlineControlFactory.$F, $v_0);
        return $v_0
    };
Mscrm.InlineControlFactory
    .createInlineLookupControlForDomWithDisableState =
    function(element, attributeName, entityName, attributeId, isDisabled, parentContainerId) {
        var $v_0 = Mscrm.InlineControlFactory
                .getLookupAttributeMetadataJson(attributeName, entityName, attributeId, isDisabled),
            $v_1 = Mscrm.InlineControlFactory
                .initializeUnboundedField(element, $v_0, null, parentContainerId, "alwaysedit");
        Array.add(Mscrm.InlineControlFactory.$F, $v_1);
        return $v_1
    };
Mscrm.InlineControlFactory
    .getLookupAttributeMetadataJson = function(attributeName, entityName, attributeId, isDisabled) {
        var $v_0 = {};
        $v_0["oid"] = "";
        $v_0["value"] = "";
        $v_0["img"] = window.CDNURL + "/_imgs/ico_16_1.gif";
        $v_0["otype"] = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[entityName.toLowerCase()];
        $v_0["otypename"] = entityName;
        var $v_1 = {};
        $v_1.AttributeType = "lookup";
        $v_1.LookupTypeNames = String.format("{0}:{1}:{2}", $v_0["otypename"], $v_0["otype"], $v_0["otypename"]);
        $v_1.CrmAttributeId = attributeId;
        $v_1.LogicalName = attributeName;
        $v_1.DefaultType = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[entityName.toLowerCase()];
        $v_1.LookupTypes = $v_0["otype"].toString();
        $v_1.ReferencedEntities = [$v_0["otype"]];
        $v_1.LookupTypeIcons = $v_0["img"].toString();
        $v_1.RequiredLevel = 0;
        $v_1.CanCreate = true;
        $v_1.CanRead = true;
        $v_1.CanUpdate = true;
        $v_1.Format = "";
        $v_1.IsDisabled = isDisabled;
        $v_1.LookupBrowse = true;
        $v_1.LookupStyle = "single";
        $v_1.CreatePermissionDictionary = entityName + ":" + $v_1.CanCreate.toString();
        return $v_1
    };
Mscrm.InlineControlFactory
    .createInlineTextAreaControlForDom = function(element, attributeName, maxLength, parentContainerId) {
        var $v_0 = Mscrm.InlineControlFactory
            .createInlineTextControlForDom(element,
                attributeName,
                maxLength,
                "ntext",
                null,
                parentContainerId,
                "alwaysedit");
        Array.add(Mscrm.InlineControlFactory.$F, $v_0);
        return $v_0
    };
Mscrm.InlineControlFactory
    .createInlineTextBoxControlForDom = function(element,
        attributeName,
        maxLength,
        initialValues,
        parentContainerId,
        editMode) {
        var $v_0 = Mscrm.InlineControlFactory
            .createInlineTextControlForDom(element,
                attributeName,
                maxLength,
                "nvarchar",
                initialValues,
                parentContainerId,
                editMode);
        Array.add(Mscrm.InlineControlFactory.$F, $v_0);
        return $v_0
    };
Mscrm.InlineControlFactory
    .createInlineTextControlForDom = function(element,
        attributeName,
        maxLength,
        attributeType,
        initialValues,
        parentContainerId,
        editMode) {
        var $v_0 = {};
        $v_0.AttributeType = attributeType;
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Format = "text";
        $v_0.LogicalName = attributeName;
        $v_0.MaxLength = maxLength;
        $v_0.RequiredLevel = 0;
        var $v_1 = Mscrm.InlineControlFactory
            .initializeUnboundedField(element, $v_0, initialValues, parentContainerId, editMode);
        Array.add(Mscrm.InlineControlFactory.$F, $v_1);
        return $v_1
    };
Mscrm.InlineControlFactory
    .createInlineNumberControlForDom = function(element,
        attributeName,
        maxValue,
        minValue,
        precision,
        attributeType,
        initialValues,
        parentContainerId,
        editMode) {
        var $v_0 = {};
        $v_0.AttributeType = attributeType;
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Format = "none";
        $v_0.Precision = precision;
        $v_0.LogicalName = attributeName;
        $v_0.MaxValue = maxValue;
        $v_0.MinValue = minValue;
        $v_0.RequiredLevel = 0;
        var $v_1 = Mscrm.InlineControlFactory
            .initializeUnboundedField(element, $v_0, initialValues, parentContainerId, editMode);
        Array.add(Mscrm.InlineControlFactory.$F, $v_1);
        return $v_1
    };
Mscrm.InlineControlFactory
    .createInlineMoneyControlForDom = function(element,
        attributeName,
        minValue,
        maxValue,
        precision,
        currencySymbol,
        parentContainerId,
        requiredLevel,
        labelValue) {
        var $v_0 = {};
        $v_0.AttributeType = "money";
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Format = "none";
        $v_0.LogicalName = attributeName;
        $v_0.MinValue = minValue;
        $v_0.MaxValue = maxValue;
        $v_0.Precision = precision;
        $v_0.RequiredLevel = requiredLevel;
        $v_0.CurrencySymbol = currencySymbol;
        $v_0.IsBaseCurrency = true;
        $v_0.IsDisabled = false;
        $v_0.PrecisionSource = 2;
        var $v_1 = { precision: precision.toString(), symbol: currencySymbol, value: 0 },
            $v_2 = Mscrm.InlineControlFactory
                .initializeUnboundedField(element, $v_0, $v_1, parentContainerId, "alwaysedit");
        $v_2.get_dataContext().set_labelValue(labelValue);
        Array.add(Mscrm.InlineControlFactory.$F, $v_2);
        return $v_2
    };
Mscrm.InlineControlFactory
    .createInlineDateTimeControlForDom = function(element,
        attributeName,
        attributeFormat,
        behavior,
        initialData,
        parentContainerId) {
        var $v_0 = {};
        $v_0.AttributeType = "datetime";
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Format = attributeFormat;
        $v_0.DateTimeBehavior = behavior;
        $v_0.LogicalName = attributeName;
        $v_0.RequiredLevel = 0;
        var $v_1 = Mscrm.InlineControlFactory
            .initializeUnboundedField(element, $v_0, initialData, parentContainerId, "alwaysedit");
        Array.add(Mscrm.InlineControlFactory.$F, $v_1);
        return $v_1
    };
Mscrm.InlineControlFactory
    .createInlinePicklistControlForDom = function(element, attributeName, options, parentContainerId) {
        var $v_0 = Mscrm.InlineControlFactory
            .createInlinePicklistControlForDomByControlMode(element,
                attributeName,
                options,
                parentContainerId,
                "alwaysedit",
                "");
        Array.add(Mscrm.InlineControlFactory.$F, $v_0);
        return $v_0
    };
Mscrm.InlineControlFactory
    .createInlinePicklistControlForDomByControlMode =
    function(element, attributeName, options, parentContainerId, controlMode, initialValue) {
        var $v_0 = {};
        $v_0.AttributeType = "picklist";
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Options = options;
        $v_0.LogicalName = attributeName;
        $v_0.RequiredLevel = 0;
        var $v_1 = null;
        if (isNullOrEmptyString(initialValue) && !IsNull(options) && options.length > 0
        ) $v_1 = Mscrm.InlineControlFactory.$4r(options[0].Value.toString());
        else $v_1 = Mscrm.InlineControlFactory.$4r(initialValue);
        var $v_2 = Mscrm.InlineControlFactory
            .initializeUnboundedField(element, $v_0, $v_1, parentContainerId, controlMode);
        Array.add(Mscrm.InlineControlFactory.$F, $v_2);
        return $v_2
    };
Mscrm.InlineControlFactory
    .createInlineAutoCompletePicklistControlForDom =
    function(element,
        attributeName,
        options,
        defaultValue,
        parentContainerId,
        requirementLevel,
        editMode,
        dropDownLabel,
        fieldLabel) {
        var $v_0 = {};
        $v_0.AttributeType = "picklist";
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Options = options;
        $v_0.LogicalName = attributeName;
        $v_0.RequiredLevel = requirementLevel;
        var $v_1 = null;
        if (!IsNull(defaultValue)) $v_1 = { raw: defaultValue };
        Sys.Application.beginCreateComponents();
        var $v_2 = new Mscrm.InlineOptionSetAttribute($v_0, $v_1, element.attr("data-fdeid")),
            $v_3 = new Mscrm.InlineAutoCompleteControlViewModel($v_2, editMode);
        $v_3.set_labelValue(fieldLabel);
        var $v_4 = new Mscrm.AutoCompleteLayout(element, $v_3);
        $v_4.$1t_2 = dropDownLabel;
        var $v_5 = new Mscrm.InlineAutoCompleteControlView($v_4);
        $v_5.set_dataContext($v_3);
        $v_5.$1I_2 = new Mscrm.FlyoutDialogErrorDisplayContainerProvider(parentContainerId);
        $v_5.renderForRead();
        Sys.Application.endCreateComponents();
        var $v_6 = $find($v_5.$0_1.get_attribute().get_dataAttributeId());
        $v_6.get_controls().add($v_5);
        $v_6.set_isVirtual(true);
        Array.add(Mscrm.InlineControlFactory.$F, $v_5);
        return $v_5
    };
Mscrm.InlineControlFactory.$4r = function($p0) { return { raw: $p0, defaultvalue: $p0 } };
Mscrm.InlineControlFactory
    .createInlineMultiplePicklistControlForDom = function(element,
        attributeName,
        options,
        defaultValues,
        parentContainerId,
        requirementLevel,
        editMode,
        fieldLabel) {
        var $v_0 = {};
        $v_0.AttributeType = "picklist";
        $v_0.CanCreate = true;
        $v_0.CanRead = true;
        $v_0.CanUpdate = true;
        $v_0.Options = options;
        $v_0.LogicalName = attributeName;
        $v_0.RequiredLevel = requirementLevel;
        var $v_1 = null;
        if (!IsNull(options) && options.length > 0 && !IsNull(defaultValues)) $v_1 = { raw: defaultValues };
        Sys.Application.beginCreateComponents();
        var $v_2 = new Mscrm.InlineMultiplePicklistAttribute($v_0, $v_1, element.attr("data-fdeid")),
            $v_3 = new Mscrm.InlineMultiplePicklistControlViewModel($v_2, editMode);
        $v_3.set_labelValue(fieldLabel);
        var $v_4 = Mscrm.LayoutFactory.createLayout(element, $v_3),
            $v_5 = new Mscrm.InlineMultiplePicklistControlView($v_4);
        $v_5.set_dataContext($v_3);
        $v_5.$1I_2 = new Mscrm.FlyoutDialogErrorDisplayContainerProvider(parentContainerId);
        $v_5.renderForRead();
        Sys.Application.endCreateComponents();
        Array.add(Mscrm.InlineControlFactory.$F, $v_5);
        return $v_5
    };
Mscrm.InlineControlFactory
    .initializeUnboundedField = function(element, metadataJsonWrapper, initialValues, parentContainerId, editMode) {
        Sys.Application.beginCreateComponents();
        var $v_0 = Mscrm.InlineEditInitializerUtility
            .initializeForDomElement(element,
                metadataJsonWrapper,
                editMode,
                initialValues,
                new Mscrm.FlyoutDialogErrorDisplayContainerProvider(parentContainerId));
        Sys.Application.endCreateComponents();
        var $v_1 = $find($v_0.get_dataContext().get_attribute().get_dataAttributeId());
        $v_1.set_isVirtual(true);
        Array.add(Mscrm.InlineControlFactory.$F, $v_0);
        return $v_0
    };
Mscrm.InlineControlFactory.$6B = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = null, $v_1 = Mscrm.InlineControlFactory.$6c($p0), $v_2 = Mscrm.InlineControlFactory.$6d($p0), $v_3 = $p1;
    $v_0 = Mscrm.InlineControlFactory.$6N($v_3, $v_1);
    if (!IsNull($p2) && ("value" in $p2 && IsNull($p2["value"])) && $v_0.Options.length > 0) {
        var $v_4 = $v_0.Options[0];
        $p2["value"] = $v_4.Label
    }
    if ($v_2 !== -1 && Mscrm.InternalUtilities.Utilities.enforceStateTransitions(Xrm.Internal.getEntityName($v_2))) {
        $p6.val = new Mscrm.InlineStatusAttribute($v_0, $p2, $p4, $v_3);
        $p5.val = new Mscrm.InlineStatusControlViewModel($p6.val, $p3, $v_2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineStatusControlView($p7.val);
        $p8.val.set_dataContext($p5.val)
    } else {
        $p6.val = new Mscrm.InlineOptionSetAttribute($v_0, $p2, $p4);
        $p5.val = new Mscrm.InlineOptionSetControlViewModel($p6.val, $p3);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineOptionSetControlView($p7.val);
        $p8.val.set_dataContext($p5.val)
    }
};
Mscrm.InlineControlFactory.$6A = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
    var $v_0 = null;
    switch ($p1.AttributeType) {
    case "state":
        $p3 = "deactivated";
        $v_0 = $p4;
        break;
    default:
        var $v_1 = Mscrm.InlineEditUtilities.getDefaultValue($p2);
        if (IsNull($p2) || $v_1 === "-1") $v_0 = Mscrm.InlineControlFactory.$27($p4);
        else $v_0 = $p4;
        break
    }
    if (!IsNull($p2) && ("value" in $p2 && IsNull($p2["value"])) && $v_0.Options.length > 0) {
        var $v_2 = $v_0.Options[0];
        $p2["value"] = $v_2.Label
    }
    $p7.val = new Mscrm.InlineOptionSetAttribute($v_0, $p2, $p5);
    $p6.val = new Mscrm.InlineOptionSetControlViewModel($p7.val, $p3);
    $p8.val = Mscrm.LayoutFactory.createLayout($p0, $p6.val);
    $p9.val = new Mscrm.InlineOptionSetControlView($p8.val);
    $p9.val.set_dataContext($p6.val)
};
Mscrm.InlineControlFactory.$6F = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    $p6.val = new Mscrm.InlineOptionSetAttribute($p3, $p1, $p4);
    var $v_0 = Mscrm.InlineControlFactory.$7s($p0);
    switch ($v_0) {
    case 1:
        $p5.val = new Mscrm.InlineOptionSetControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineOptionSetControlView($p7.val);
        break;
    default:
        if (!IsNull($p1)) {
            var $v_1 = $p1["raw"];
            if (!IsNull($v_1))
                for (var $v_2 = 0; $v_2 < $p3.Options.length; $v_2++) {
                    var $v_3 = $p3.Options[$v_2];
                    if ($v_3.Value === Number.parseInvariant($v_1.toString())) $p1["value"] = $v_3.Label
                }
        }
        $p5.val = new Mscrm.InlineToggleControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineToggleControlView($p7.val);
        break
    }
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.$66 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10) {
    switch ($p1.Format) {
    case "timezone":
    case "language":
        var $v_0 = Mscrm.InlineControlFactory.$27($p5);
        $p8.val = new Mscrm.InlineOptionSetAttribute($v_0, $p2, $p6);
        $p7.val = new Mscrm.InlineOptionSetControlViewModel($p8.val, $p3);
        $p9.val = Mscrm.LayoutFactory.createLayout($p0, $p7.val);
        $p10.val = new Mscrm.InlineOptionSetControlView($p9.val);
        break;
    case "duration":
        $p8.val = new Mscrm.InlineNumberAttribute($p4, $p2, $p6);
        $p7.val = new Mscrm.InlineDurationControlViewModel($p8.val, $p3);
        $p9.val = Mscrm.LayoutFactory.createLayout($p0, $p7.val);
        $p10.val = new Mscrm.InlineDurationControlView($p9.val);
        break;
    default:
        $p8.val = new Mscrm.InlineNumberAttribute($p4, $p2, $p6);
        $p7.val = new Mscrm.InlineNumberControlViewModel($p8.val, $p3);
        $p9.val = Mscrm.LayoutFactory.createLayout($p0, $p7.val);
        $p10.val = new Mscrm.InlineNumberControlView($p9.val);
        break
    }
    $p10.val.set_dataContext($p7.val)
};
Mscrm.InlineControlFactory.$64 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = $p0.attr("lookupType"), $v_1 = $p0.attr("ShowAsBreadcrumbControl");
    if ($p3.LookupStyle === "subject") {
        $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineSubjectLookupControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineSubjectLookupControlView($p7.val)
    } else if (!isNullOrEmptyString($v_1) &&
        !IsNull(Xrm.Page.data) &&
        !isNullOrEmptyString(Xrm.Page.data.entity.getId()) &&
        $p0.attr("ShowAsBreadcrumbControl") === "1") {
        $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineLookupControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineBreadCrumbLookUpControlView($p7.val)
    } else if ($p3.IsTransactionCurrencyLookup) {
        $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineTransactionCurrencyLookupControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineTransactionCurrencyLookupControlView($p7.val)
    } else if (!isNullOrEmptyString($v_0))
        switch ($v_0) {
        case "relatedcaseslookup":
            $p6.val = new Mscrm.InlineRelatedCasesLookupAttribute($p3, $p1, $p4);
            $p5.val = new Mscrm.InlineRelatedCasesLookupControlViewModel($p6.val, $p2);
            $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
            $p8.val = new Mscrm.InlineRelatedCasesLookupControlView($p7.val);
            break;
        default:
            $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
            $p5.val = new Mscrm.InlineLookupControlViewModel($p6.val, $p2);
            $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
            $p8.val = new Mscrm.InlineLookupControlView($p7.val);
            break
        }
    else {
        $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineLookupControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineLookupControlView($p7.val)
    }
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.$69 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    $p6.val = new Mscrm.InlineLookupAttribute($p3, $p1, $p4);
    $p5.val = new Mscrm.InlinePartyListControlViewModel($p6.val, $p2);
    $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
    $p8.val = new Mscrm.InlineLookupControlView($p7.val);
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.checkIfComposite = function(containerElement) {
    var $v_0 = containerElement.attr("hasCompositeData");
    if ($v_0) if ($v_0 === "true") return true;
    return false
};
Mscrm.InlineControlFactory.$6D = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
    $p6.val.set_isCompositeAttributeValueSet(Mscrm.InlineControlFactory.checkIfComposite($p0));
    $p5.val = new Mscrm.InlineTextAreaControlViewModel($p6.val, $p2);
    $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
    $p8.val = new Mscrm.InlineTextAreaControlView($p7.val);
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.$4b = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = $p2 === "locked" || $p2 === "deactivated" ? $p2 : "alwaysedit";
    $p6.val = new Mscrm.InlineEmailBodyAttribute($p3, $p1, $p4);
    $p6.val.set_isCompositeAttributeValueSet(Mscrm.InlineControlFactory.checkIfComposite($p0));
    $p5.val = new Mscrm.InlineEmailBodyControlViewModel($p6.val, $v_0);
    $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
    $p8.val = new Mscrm.InlineEmailBodyControlView($p7.val);
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.$65 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    switch ($p3.Format) {
    case "emailbody":
        Mscrm.InlineControlFactory.$4b($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
        break;
    default:
        Mscrm.InlineControlFactory.$6D($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
        break
    }
};
Mscrm.InlineControlFactory.$68 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    switch ($p3.Format) {
    case "email":
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineEmailAddressControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineEmailAddressControlView($p7.val);
        break;
    case "url":
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineUrlControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineUrlControlView($p7.val);
        break;
    case "tickersymbol":
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlineTickerControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineTickerControlView($p7.val);
        break;
    case "phone":
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p5.val = new Mscrm.InlinePhoneNumberControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlinePhoneNumberControlView($p7.val);
        break;
    case "textarea":
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p6.val.set_isCompositeAttributeValueSet(Mscrm.InlineControlFactory.checkIfComposite($p0));
        $p5.val = new Mscrm.InlineTextAreaControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineTextAreaControlView($p7.val);
        break;
    case "emailbody":
        Mscrm.InlineControlFactory.$4b($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8);
        break;
    default:
        $p6.val = new Mscrm.InlineTextAttribute($p3, $p1, $p4);
        $p6.val.set_isCompositeAttributeValueSet(Mscrm.InlineControlFactory.checkIfComposite($p0));
        $p5.val = new Mscrm.InlineTextBoxControlViewModel($p6.val, $p2);
        $p7.val = Mscrm.LayoutFactory.createLayout($p0, $p5.val);
        $p8.val = new Mscrm.InlineTextBoxControlView($p7.val);
        break
    }
    $p8.val.set_dataContext($p5.val)
};
Mscrm.InlineControlFactory.$6c = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getLinkedDataObject($p0)["statecode"];
    if (!IsNull($v_0)) return parseInt(Mscrm.InlineEditUtilities.getRawValue($v_0, true).toString());
    return -1
};
Mscrm.InlineControlFactory.$6d = function($p0) {
    var $v_0 = Mscrm.InlineEditUtilities.getLinkedDataObject($p0)["statuscode"];
    if (!IsNull($v_0)) return parseInt(Mscrm.InlineEditUtilities.getRawValue($v_0, true).toString());
    return -1
};
Mscrm.InlineControlFactory.$6N = function($p0, $p1) {
    var $v_0 = new Array(0), $v_1 = [];
    Array.addRange($v_1, $p0.DefaultStateOptions);
    !Array.contains($v_1, $p1) && Array.add($v_1, $p1);
    for (var $v_3 = 0; $v_3 < $v_1.length; ++$v_3)
        for (var $$arr_5 = $p0.Options, $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_4 = $$arr_5[$$idx_7];
            if ($v_4.State === $v_1[$v_3]) {
                var $v_5 = new Mscrm.EnumOptionJsonWrapper;
                $v_5.Value = $v_4.Value;
                $v_5.Label = $v_4.Label;
                $v_0[$v_0.length] = $v_5
            }
        }
    var $v_2 = {};
    $v_2.Options = $v_0;
    $v_2.LogicalName = $p0.LogicalName;
    $v_2.AttributeType = $p0.AttributeType;
    $v_2.Format = $p0.Format;
    $v_2.RequiredLevel = $p0.RequiredLevel;
    $v_2.CanCreate = $p0.CanCreate;
    $v_2.CanRead = $p0.CanRead;
    $v_2.CanUpdate = $p0.CanUpdate;
    return $v_2
};
Mscrm.InlineControlFactory.$27 = function($p0) {
    if (!IsNull($p0.Options[0]) && $p0.Options[0].Value !== -1) {
        var $v_0 = $p0.Options, $v_1 = new Mscrm.EnumOptionJsonWrapper;
        $v_1.Label = "";
        $v_1.Value = -1;
        Array.insert($v_0, 0, $v_1)
    }
    return $p0
};
Mscrm.InlineControlFactory.$7s = function($p0) {
    var $v_0 = $p0.attr("data-picklisttype");
    return parseInt($v_0)
};
Mscrm.SelectOptionsGenerator = function() {};
Mscrm.SelectOptionsGenerator.generateForTimeControl = function(positionMidnightLast) {
    for (var $v_0 = null, $v_1 = new Array(0), $v_2 = 0; $v_2 < 24; $v_2++)
        for (var $v_3 = 0; $v_3 < 60; $v_3 += 30) {
            var $v_4 = new Date(2012, 7, 24, $v_2, $v_3, 0), $v_5 = timeToString($v_4, 0);
            if (positionMidnightLast && !$v_2 && !$v_3) $v_0 = $v_5;
            else Mscrm.SelectOptionsGenerator.$4V($v_1, $v_5)
        }
    positionMidnightLast && Mscrm.SelectOptionsGenerator.$4V($v_1, $v_0);
    return $v_1
};
Mscrm.SelectOptionsGenerator.$4V = function($p0, $p1) { Array.add($p0, $p1) };
Mscrm.EnumOptionJsonWrapper.registerClass("Mscrm.EnumOptionJsonWrapper");
Mscrm.StatusOptionJsonWrapper.registerClass("Mscrm.StatusOptionJsonWrapper");
Mscrm.LeadFlyOutJsonWrapper.registerClass("Mscrm.LeadFlyOutJsonWrapper");
Mscrm.OpportunityFlyOutJsonWrapper.registerClass("Mscrm.OpportunityFlyOutJsonWrapper");
Mscrm.AccountFlyOutJsonWrapper.registerClass("Mscrm.AccountFlyOutJsonWrapper");
Mscrm.ContactFlyOutJsonWrapper.registerClass("Mscrm.ContactFlyOutJsonWrapper");
Mscrm.InlineEditChromeBehavior.registerClass("Mscrm.InlineEditChromeBehavior",
    Mscrm.InlineEditChromeBehaviorBase$1.$$(Mscrm.SimpleInlineControlView));
Mscrm.HeaderTileChromeBehavior.registerClass("Mscrm.HeaderTileChromeBehavior", Mscrm.InlineEditChromeBehavior);
Mscrm.HeaderTileLookupChromeBehavior.registerClass("Mscrm.HeaderTileLookupChromeBehavior",
    Mscrm.HeaderTileChromeBehavior);
Mscrm.HeaderTileRollupChromeBehavior.registerClass("Mscrm.HeaderTileRollupChromeBehavior",
    Mscrm.HeaderTileChromeBehavior);
Mscrm.HeaderTileToggleChromeBehavior.registerClass("Mscrm.HeaderTileToggleChromeBehavior",
    Mscrm.HeaderTileChromeBehavior);
Mscrm.InlineCheckBoxControlBehavior.registerClass("Mscrm.InlineCheckBoxControlBehavior",
    Mscrm.FormInputControl.CheckBoxInputBehavior);
Mscrm.InlineDateTimeBehavior.registerClass("Mscrm.InlineDateTimeBehavior", Mscrm.FormInputControl.DateTimeBehavior);
Mscrm.InlineDateTimeImage.registerClass("Mscrm.InlineDateTimeImage", Mscrm.FormInputControl.DateTimeImage);
Mscrm.InlineDurationBehavior.registerClass("Mscrm.InlineDurationBehavior", Mscrm.FormInputControl.Duration);
Mscrm.InlineEditCheckBoxChromeBehavior.registerClass("Mscrm.InlineEditCheckBoxChromeBehavior",
    Mscrm.InlineEditChromeBehavior);
Mscrm.InlineEditableSelectBehavior.registerClass("Mscrm.InlineEditableSelectBehavior", Mscrm.EditableSelectControl);
Mscrm.InlineEditLookupChromeBehavior.registerClass("Mscrm.InlineEditLookupChromeBehavior",
    Mscrm.InlineEditChromeBehavior);
Mscrm.InlineEditTextAreaChromeBehavior.registerClass("Mscrm.InlineEditTextAreaChromeBehavior",
    Mscrm.InlineEditChromeBehavior);
Mscrm.InlineEditToggleChromeBehavior.registerClass("Mscrm.InlineEditToggleChromeBehavior",
    Mscrm.InlineEditChromeBehavior);
Mscrm.InlineEmailAddressBehavior.registerClass("Mscrm.InlineEmailAddressBehavior",
    Mscrm.FormInputControl.EmailAddressInputBehavior);
Mscrm.InlineEmailBodyControlBehavior.registerClass("Mscrm.InlineEmailBodyControlBehavior",
    Mscrm.FormInputControl.EmailBodyInputBehavior);
Mscrm.InlineEmailBodyChromeBehavior
    .registerClass("Mscrm.InlineEmailBodyChromeBehavior", Mscrm.InlineEditChromeBehavior);
Mscrm.InlineFormDataControl.registerClass("Mscrm.InlineFormDataControl", Mscrm.FormDataControl);
Mscrm.InlineEmailBodyFormDataControl.registerClass("Mscrm.InlineEmailBodyFormDataControl", Mscrm.EmailBodyControl);
Mscrm.InlineImageLookupTransactionCurrency.registerClass("Mscrm.InlineImageLookupTransactionCurrency",
    Mscrm.FormInputControl.ImageLookupTransactionCurrency);
Mscrm.InlineLookupFormDataControl.registerClass("Mscrm.InlineLookupFormDataControl", Mscrm.InlineFormDataControl);
Mscrm.InlineMoneyBehavior.registerClass("Mscrm.InlineMoneyBehavior", Mscrm.FormInputControl.MoneyInputBehavior);
Mscrm.InlineMoneyFormDataControl.registerClass("Mscrm.InlineMoneyFormDataControl", Mscrm.InlineFormDataControl);
Mscrm.InlineMultiplePicklistBehavior.registerClass("Mscrm.InlineMultiplePicklistBehavior",
    Mscrm.FormControlInputBehavior);
Mscrm.InlineNumberBehavior.registerClass("Mscrm.InlineNumberBehavior", Mscrm.FormInputControl.NumberInputBehavior);
Mscrm.InlineOptionSetBehavior
    .registerClass("Mscrm.InlineOptionSetBehavior", Mscrm.FormInputControl.SelectInputBehavior);
Mscrm.InlinePresenceLookupUIBehavior.registerClass("Mscrm.InlinePresenceLookupUIBehavior",
    Mscrm.FormInputControl.PresenceLookupUIBehavior);
Mscrm.InlineRollupChromeBehavior.registerClass("Mscrm.InlineRollupChromeBehavior", Mscrm.InlineEditChromeBehavior);
Mscrm.InlineTextBoxBehavior.registerClass("Mscrm.InlineTextBoxBehavior", Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.InlineTextAreaBehavior.registerClass("Mscrm.InlineTextAreaBehavior", Mscrm.InlineTextBoxBehavior);
Mscrm.InlineTickerBehavior.registerClass("Mscrm.InlineTickerBehavior", Mscrm.FormInputControl.TickerInputBehavior);
Mscrm.InlineUrlBehavior.registerClass("Mscrm.InlineUrlBehavior", Mscrm.FormInputControl.UrlInputBehavior);
Mscrm.InlineSubjectLookupUIBehavior.registerClass("Mscrm.InlineSubjectLookupUIBehavior",
    Mscrm.FormInputControl.LookupUIBehavior);
Mscrm.QuickFormControlMode.registerClass("Mscrm.QuickFormControlMode");
Mscrm.WellKnownQuickFormIds.registerClass("Mscrm.WellKnownQuickFormIds");
Mscrm.QuickFormBehavior.registerClass("Mscrm.QuickFormBehavior", Mscrm.CrmUIBehavior, Mscrm.IQuickFormBehavior);
Mscrm.QuickFormCollectionBehavior.registerClass("Mscrm.QuickFormCollectionBehavior", Mscrm.CrmUIBehavior);
Mscrm.InlinePhoneNumberBehavior.registerClass("Mscrm.InlinePhoneNumberBehavior",
    Mscrm.FormInputControl.TextInputBehaviorBase);
Mscrm.InlineRelatedCasesLookupBehavior.registerClass("Mscrm.InlineRelatedCasesLookupBehavior",
    Mscrm.FormInputControl.LookupUIBehavior);
Mscrm.InlinePartyListBehavior.registerClass("Mscrm.InlinePartyListBehavior", Mscrm.InlinePresenceLookupUIBehavior);
Mscrm.InlineDateTimeControlViewWrapper.registerClass("Mscrm.InlineDateTimeControlViewWrapper", Xrm.XrmControlDateTime);
Mscrm.InlineEmailEngagementActionsControlViewWrapper
    .registerClass("Mscrm.InlineEmailEngagementActionsControlViewWrapper", Xrm.XrmControlEmailEngagementActionsControl);
Mscrm.InlineIFrameControlViewWrapper.registerClass("Mscrm.InlineIFrameControlViewWrapper", Xrm.XrmControlIFrame);
Mscrm.InlineLookupControlViewWrapper.registerClass("Mscrm.InlineLookupControlViewWrapper", Xrm.XrmControlLookup);
Mscrm.InlineOptionSetControlViewWrapper.registerClass("Mscrm.InlineOptionSetControlViewWrapper",
    Xrm.XrmControlOptionSet);
Mscrm.InlineSectionControlViewWrapper.registerClass("Mscrm.InlineSectionControlViewWrapper", Xrm.XrmTabSection);
Mscrm.InlineSilverlightControlWrapper.registerClass("Mscrm.InlineSilverlightControlWrapper", Xrm.XrmControlSilverlight);
Mscrm.InlineSubGridControlViewWrapper.registerClass("Mscrm.InlineSubGridControlViewWrapper", Xrm.XrmControlSubGrid);
Mscrm.InlineTabControlViewWrapper.registerClass("Mscrm.InlineTabControlViewWrapper", Xrm.XrmTab);
Mscrm.InlineWebResourceControlViewWrapper.registerClass("Mscrm.InlineWebResourceControlViewWrapper",
    Xrm.XrmControlWebResource);
Mscrm.SimpleInlineControlViewWrapper.registerClass("Mscrm.SimpleInlineControlViewWrapper", Xrm.XrmDataControl);
Mscrm.XrmInlineControlFactory.registerClass("Mscrm.XrmInlineControlFactory");
Mscrm.InlineSearchWidgetViewWrapper.registerClass("Mscrm.InlineSearchWidgetViewWrapper", Xrm.XrmControlSearchWidget);
Mscrm.InlineEmailRecipientActivityControlViewWrapper
    .registerClass("Mscrm.InlineEmailRecipientActivityControlViewWrapper", Xrm.XrmControlEmailRecipientActivity);
Mscrm.ErrorDisplayContainerProviderFactory.registerClass("Mscrm.ErrorDisplayContainerProviderFactory");
Mscrm.ErrorDisplayContainerProviderBase.registerClass("Mscrm.ErrorDisplayContainerProviderBase",
    null,
    Mscrm.IErrorDisplayContainerProvider);
Mscrm.FlyoutDialogErrorDisplayContainerProvider
    .registerClass("Mscrm.FlyoutDialogErrorDisplayContainerProvider", Mscrm.ErrorDisplayContainerProviderBase);
Mscrm.FormErrorDisplayContainerProvider.registerClass("Mscrm.FormErrorDisplayContainerProvider",
    Mscrm.ErrorDisplayContainerProviderBase);
Mscrm.MobileErrorDisplayContainerProvider.registerClass("Mscrm.MobileErrorDisplayContainerProvider",
    Mscrm.ErrorDisplayContainerProviderBase);
Mscrm.DefaultErrorDisplayContainerProvider.registerClass("Mscrm.DefaultErrorDisplayContainerProvider",
    Mscrm.ErrorDisplayContainerProviderBase);
Mscrm.DeferredInlineEditOnDemandInitializer.registerClass("Mscrm.DeferredInlineEditOnDemandInitializer");
Mscrm.InlineEditInitializerBase.registerClass("Mscrm.InlineEditInitializerBase", null, Mscrm.IInlineEditInitializer);
Mscrm.DeferredQuickFormInlineEditInitializer.registerClass("Mscrm.DeferredQuickFormInlineEditInitializer",
    Mscrm.InlineEditInitializerBase);
Mscrm.InlineEditInitializationManager.registerClass("Mscrm.InlineEditInitializationManager");
Mscrm.DesktopInlineEditInitializationManager.registerClass("Mscrm.DesktopInlineEditInitializationManager",
    Mscrm.InlineEditInitializationManager);
Mscrm.DomElementInlineEditInitializer.registerClass("Mscrm.DomElementInlineEditInitializer",
    Mscrm.InlineEditInitializerBase);
Mscrm.InitializationState.registerClass("Mscrm.InitializationState");
Mscrm.InlineEditControlInitializersFactory.registerClass("Mscrm.InlineEditControlInitializersFactory");
Mscrm.InlineEditPartialInitializationEventArgs
    .registerClass("Mscrm.InlineEditPartialInitializationEventArgs", Sys.EventArgs);
Mscrm.MobileInlineEditInitializationManager.registerClass("Mscrm.MobileInlineEditInitializationManager",
    Mscrm.InlineEditInitializationManager);
Mscrm.InlineEditInitializerUtility.registerClass("Mscrm.InlineEditInitializerUtility");
Mscrm.MobileFirstControlInlineEditControlInitializer
    .registerClass("Mscrm.MobileFirstControlInlineEditControlInitializer", Mscrm.InlineEditInitializerBase);
Mscrm.MobileInlineEditControlInitializersFactory.registerClass("Mscrm.MobileInlineEditControlInitializersFactory");
Mscrm.NonViewportFormBodyInlineEditInitializer
    .registerClass("Mscrm.NonViewportFormBodyInlineEditInitializer", Mscrm.InlineEditInitializerBase);
Mscrm.MobileNonViewportInlineEditControlInitializer
    .registerClass("Mscrm.MobileNonViewportInlineEditControlInitializer",
        Mscrm.NonViewportFormBodyInlineEditInitializer);
Mscrm.ViewportInlineEditControlInitializer.registerClass("Mscrm.ViewportInlineEditControlInitializer",
    Mscrm.InlineEditInitializerBase);
Mscrm.MobileViewportInlineEditControlInitializer
    .registerClass("Mscrm.MobileViewportInlineEditControlInitializer", Mscrm.ViewportInlineEditControlInitializer);
Mscrm.QuickFormCollectionInitializer.registerClass("Mscrm.QuickFormCollectionInitializer");
Mscrm.QuickFormInitializer.registerClass("Mscrm.QuickFormInitializer");
Mscrm.QuickFormInlineEditDomHelper.registerClass("Mscrm.QuickFormInlineEditDomHelper");
Mscrm.InlineEditControlBaseLayout.registerClass("Mscrm.InlineEditControlBaseLayout",
    Mscrm.BaseLayout,
    Mscrm.IInlineControlLayout,
    Mscrm.IInlineLayout);
Mscrm.CheckBoxLayout.registerClass("Mscrm.CheckBoxLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.EmailBodyLayout.registerClass("Mscrm.EmailBodyLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.FlyOutDialogLayout.registerClass("Mscrm.FlyOutDialogLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.FlyOutDialogLookupLayout.registerClass("Mscrm.FlyOutDialogLookupLayout", Mscrm.FlyOutDialogLayout);
Mscrm.FlyOutDialogTextAreaLayout.registerClass("Mscrm.FlyOutDialogTextAreaLayout", Mscrm.FlyOutDialogLayout);
Mscrm.HeaderTileLayout.registerClass("Mscrm.HeaderTileLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.HeaderTileDateTimeLayout.registerClass("Mscrm.HeaderTileDateTimeLayout", Mscrm.HeaderTileLayout);
Mscrm.HeaderTileLookupLayout.registerClass("Mscrm.HeaderTileLookupLayout", Mscrm.HeaderTileLayout);
Mscrm.HeaderTileOptionSetLayout.registerClass("Mscrm.HeaderTileOptionSetLayout", Mscrm.HeaderTileLayout);
Mscrm.HeaderTileRollupLayout.registerClass("Mscrm.HeaderTileRollupLayout", Mscrm.HeaderTileLayout);
Mscrm.HeaderTileToggleLayout.registerClass("Mscrm.HeaderTileToggleLayout", Mscrm.HeaderTileLayout);
Mscrm.LayoutFactory.registerClass("Mscrm.LayoutFactory");
Mscrm.LookupLayout.registerClass("Mscrm.LookupLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.ProcessConfigurationTextBoxLayout.registerClass("Mscrm.ProcessConfigurationTextBoxLayout",
    Mscrm.InlineEditControlBaseLayout);
Mscrm.RollupLayout.registerClass("Mscrm.RollupLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.SalesProcessLayout.registerClass("Mscrm.SalesProcessLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.SalesProcessLookupLayout.registerClass("Mscrm.SalesProcessLookupLayout", Mscrm.SalesProcessLayout);
Mscrm.SalesProcessOptionSetLayout.registerClass("Mscrm.SalesProcessOptionSetLayout", Mscrm.SalesProcessLayout);
Mscrm.SalesProcessTextAreaLayout.registerClass("Mscrm.SalesProcessTextAreaLayout", Mscrm.SalesProcessLayout);
Mscrm.SalesProcessToggleLayout.registerClass("Mscrm.SalesProcessToggleLayout", Mscrm.SalesProcessLayout);
Mscrm.TextAreaLayout.registerClass("Mscrm.TextAreaLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.ToggleLayout.registerClass("Mscrm.ToggleLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.AutoCompleteLayout.registerClass("Mscrm.AutoCompleteLayout", Mscrm.InlineEditControlBaseLayout);
Mscrm.InlineAttributeBase.registerClass("Mscrm.InlineAttributeBase",
    null,
    Mscrm.IInlineAttribute,
    Mscrm.IInlineAttributeEvent);
Mscrm.InlineCheckBoxAttribute.registerClass("Mscrm.InlineCheckBoxAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineDateTimeAttribute.registerClass("Mscrm.InlineDateTimeAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineEmailBodyAttribute.registerClass("Mscrm.InlineEmailBodyAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineLookupAttribute.registerClass("Mscrm.InlineLookupAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineNumberAttribute.registerClass("Mscrm.InlineNumberAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineMoneyAttribute.registerClass("Mscrm.InlineMoneyAttribute", Mscrm.InlineNumberAttribute);
Mscrm.InlineMultiplePicklistAttribute.registerClass("Mscrm.InlineMultiplePicklistAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineOptionSetAttribute.registerClass("Mscrm.InlineOptionSetAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineStatusAttribute.registerClass("Mscrm.InlineStatusAttribute", Mscrm.InlineOptionSetAttribute);
Mscrm.InlineTextAttribute.registerClass("Mscrm.InlineTextAttribute", Mscrm.InlineAttributeBase);
Mscrm.InlineRelatedCasesLookupAttribute.registerClass("Mscrm.InlineRelatedCasesLookupAttribute",
    Mscrm.InlineLookupAttribute);
Mscrm.InlineEditControlCommonUtility.registerClass("Mscrm.InlineEditControlCommonUtility");
Mscrm.InlineControlViewModelBase.registerClass("Mscrm.InlineControlViewModelBase", null, Mscrm.IInlineControlViewModel);
Mscrm.InlineCheckBoxControlViewModel.registerClass("Mscrm.InlineCheckBoxControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineDateTimeControlViewModel.registerClass("Mscrm.InlineDateTimeControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineNumberControlViewModel
    .registerClass("Mscrm.InlineNumberControlViewModel", Mscrm.InlineControlViewModelBase);
Mscrm.InlineDurationControlViewModel.registerClass("Mscrm.InlineDurationControlViewModel",
    Mscrm.InlineNumberControlViewModel);
Mscrm.InlineEmailAddressControlViewModel.registerClass("Mscrm.InlineEmailAddressControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineEmailBodyControlViewModel.registerClass("Mscrm.InlineEmailBodyControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineLookupControlViewModel
    .registerClass("Mscrm.InlineLookupControlViewModel", Mscrm.InlineControlViewModelBase);
Mscrm.InlineMoneyControlViewModel
    .registerClass("Mscrm.InlineMoneyControlViewModel", Mscrm.InlineNumberControlViewModel);
Mscrm.InlineMultiplePicklistControlViewModel.registerClass("Mscrm.InlineMultiplePicklistControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineOptionSetControlViewModel.registerClass("Mscrm.InlineOptionSetControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineStatusControlViewModel.registerClass("Mscrm.InlineStatusControlViewModel",
    Mscrm.InlineOptionSetControlViewModel);
Mscrm.InlineTextBoxControlViewModel.registerClass("Mscrm.InlineTextBoxControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineTextAreaControlViewModel.registerClass("Mscrm.InlineTextAreaControlViewModel",
    Mscrm.InlineTextBoxControlViewModel);
Mscrm.InlineTickerControlViewModel
    .registerClass("Mscrm.InlineTickerControlViewModel", Mscrm.InlineControlViewModelBase);
Mscrm.InlineToggleControlViewModel
    .registerClass("Mscrm.InlineToggleControlViewModel", Mscrm.InlineControlViewModelBase);
Mscrm.InlineUrlControlViewModel.registerClass("Mscrm.InlineUrlControlViewModel", Mscrm.InlineControlViewModelBase);
Mscrm.InlinePhoneNumberControlViewModel.registerClass("Mscrm.InlinePhoneNumberControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineSubjectLookupControlViewModel.registerClass("Mscrm.InlineSubjectLookupControlViewModel",
    Mscrm.InlineLookupControlViewModel);
Mscrm.InlineRelatedCasesLookupControlViewModel
    .registerClass("Mscrm.InlineRelatedCasesLookupControlViewModel", Mscrm.InlineLookupControlViewModel);
Mscrm.InlineTransactionCurrencyLookupControlViewModel
    .registerClass("Mscrm.InlineTransactionCurrencyLookupControlViewModel", Mscrm.InlineLookupControlViewModel);
Mscrm.InlinePartyListControlViewModel.registerClass("Mscrm.InlinePartyListControlViewModel",
    Mscrm.InlineLookupControlViewModel);
Mscrm.InlineAutoCompleteControlViewModel.registerClass("Mscrm.InlineAutoCompleteControlViewModel",
    Mscrm.InlineControlViewModelBase);
Mscrm.InlineControlEditViewBase.registerClass("Mscrm.InlineControlEditViewBase",
    Mscrm.InlineEditViewBase,
    Mscrm.IInlineEditControlView,
    Mscrm.IInlineEditView,
    Sys.IDisposable);
Mscrm.SimpleInlineControlEditView.registerClass("Mscrm.SimpleInlineControlEditView", Mscrm.InlineControlEditViewBase);
Mscrm.CheckBoxControlEditView.registerClass("Mscrm.CheckBoxControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.DateTimeControlEditView.registerClass("Mscrm.DateTimeControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.DurationControlEditView.registerClass("Mscrm.DurationControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.EmailAddressControlEditView.registerClass("Mscrm.EmailAddressControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.EmailBodyControlEditView.registerClass("Mscrm.EmailBodyControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.LookupControlEditView.registerClass("Mscrm.LookupControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.MoneyControlEditView.registerClass("Mscrm.MoneyControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.MultiplePicklistControlEditView.registerClass("Mscrm.MultiplePicklistControlEditView",
    Mscrm.SimpleInlineControlEditView);
Mscrm.NumberControlEditView.registerClass("Mscrm.NumberControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.OptionSetControlEditView.registerClass("Mscrm.OptionSetControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.PhoneNumberControlEditView.registerClass("Mscrm.PhoneNumberControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.RelatedCasesLookupControlEditView.registerClass("Mscrm.RelatedCasesLookupControlEditView",
    Mscrm.LookupControlEditView);
Mscrm.SubjectLookupControlEditView.registerClass("Mscrm.SubjectLookupControlEditView", Mscrm.LookupControlEditView);
Mscrm.TextAreaControlEditView.registerClass("Mscrm.TextAreaControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.TextBoxControlEditView.registerClass("Mscrm.TextBoxControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.TickerControlEditView.registerClass("Mscrm.TickerControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.ToggleControlEditView.registerClass("Mscrm.ToggleControlEditView", Mscrm.OptionSetControlEditView);
Mscrm.TransactionCurrencyLookupControlEditView
    .registerClass("Mscrm.TransactionCurrencyLookupControlEditView", Mscrm.LookupControlEditView);
Mscrm.UrlControlEditView.registerClass("Mscrm.UrlControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.AutoCompleteControlEditView.registerClass("Mscrm.AutoCompleteControlEditView", Mscrm.SimpleInlineControlEditView);
Mscrm.EditableSelectHelper.registerClass("Mscrm.EditableSelectHelper");
Mscrm.EditableSelectOption.registerClass("Mscrm.EditableSelectOption");
Mscrm.InlineControlViewBase.registerClass("Mscrm.InlineControlViewBase",
    Mscrm.InlineViewBase,
    Mscrm.IInlineControlView,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IUIControl,
    Mscrm.IInlineView,
    Sys.IDisposable,
    Mscrm.IInlineSectionChildControlView);
Mscrm.SimpleInlineControlView.registerClass("Mscrm.SimpleInlineControlView",
    Mscrm.InlineControlViewBase,
    Mscrm.IFormUIControl);
Mscrm.InlineAutoCompleteControlView.registerClass("Mscrm.InlineAutoCompleteControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineCheckBoxControlView.registerClass("Mscrm.InlineCheckBoxControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineDateTimeControlView.registerClass("Mscrm.InlineDateTimeControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineDurationControlView.registerClass("Mscrm.InlineDurationControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineEmailAddressControlView.registerClass("Mscrm.InlineEmailAddressControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineEmailBodyControlView.registerClass("Mscrm.InlineEmailBodyControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineEmailEngagementActionsControlView.registerClass("Mscrm.InlineEmailEngagementActionsControlView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.InlineIFrameControlView.registerClass("Mscrm.InlineIFrameControlView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.InlineLookupControlView.registerClass("Mscrm.InlineLookupControlView",
    Mscrm.SimpleInlineControlView,
    Mscrm.ILookupControlView);
Mscrm.InlineMoneyControlView.registerClass("Mscrm.InlineMoneyControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineMultiplePicklistControlView.registerClass("Mscrm.InlineMultiplePicklistControlView",
    Mscrm.SimpleInlineControlView);
Mscrm.InlineBreadCrumbLookUpControlView.registerClass("Mscrm.InlineBreadCrumbLookUpControlView",
    Mscrm.InlineLookupControlView);
Mscrm.InlineNumberControlView.registerClass("Mscrm.InlineNumberControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineOptionSetControlView.registerClass("Mscrm.InlineOptionSetControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlinePhoneNumberControlView.registerClass("Mscrm.InlinePhoneNumberControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineRelatedCasesLookupControlView.registerClass("Mscrm.InlineRelatedCasesLookupControlView",
    Mscrm.InlineLookupControlView);
Mscrm.InlineRollupControlView.registerClass("Mscrm.InlineRollupControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineSearchWidgetView.registerClass("Mscrm.InlineSearchWidgetView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.InlineEmailRecipientActivityControlView.registerClass("Mscrm.InlineEmailRecipientActivityControlView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.InlineSubGridControlView.registerClass("Mscrm.InlineSubGridControlView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.InlineSectionControlView.registerClass("Mscrm.InlineSectionControlView", null, Mscrm.IClientApiCollectionItem);
Mscrm.InlineSubjectLookupControlView.registerClass("Mscrm.InlineSubjectLookupControlView",
    Mscrm.InlineLookupControlView);
Mscrm.InlineStatusControlView.registerClass("Mscrm.InlineStatusControlView", Mscrm.InlineOptionSetControlView);
Mscrm.InlineTabControlView.registerClass("Mscrm.InlineTabControlView", null, Mscrm.IClientApiCollectionItem);
Mscrm.InlineTextAreaControlView.registerClass("Mscrm.InlineTextAreaControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineTextBoxControlView.registerClass("Mscrm.InlineTextBoxControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineTickerControlView.registerClass("Mscrm.InlineTickerControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineTimerControlViewBase.registerClass("Mscrm.InlineTimerControlViewBase",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView,
    Sys.IDisposable);
Mscrm.InlineTimerControlInProgressView.registerClass("Mscrm.InlineTimerControlInProgressView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlViolatedView.registerClass("Mscrm.InlineTimerControlViolatedView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlNotSetView
    .registerClass("Mscrm.InlineTimerControlNotSetView", Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlNoPrivilegeView.registerClass("Mscrm.InlineTimerControlNoPrivilegeView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlCanceledView.registerClass("Mscrm.InlineTimerControlCanceledView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlSuccessView.registerClass("Mscrm.InlineTimerControlSuccessView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlFailureView.registerClass("Mscrm.InlineTimerControlFailureView",
    Mscrm.InlineTimerControlViewBase);
Mscrm.InlineTimerControlWarningView.registerClass("Mscrm.InlineTimerControlWarningView",
    Mscrm.InlineTimerControlInProgressView);
Mscrm.InlineTimerControlPausedView
    .registerClass("Mscrm.InlineTimerControlPausedView", Mscrm.InlineTimerControlViewBase);
Mscrm.InlineToggleControlView.registerClass("Mscrm.InlineToggleControlView", Mscrm.InlineOptionSetControlView);
Mscrm.InlineTransactionCurrencyLookupControlView
    .registerClass("Mscrm.InlineTransactionCurrencyLookupControlView", Mscrm.InlineLookupControlView);
Mscrm.InlineUrlControlView.registerClass("Mscrm.InlineUrlControlView", Mscrm.SimpleInlineControlView);
Mscrm.InlineWebResourceControlView.registerClass("Mscrm.InlineWebResourceControlView",
    null,
    Mscrm.IClientApiCollectionItem,
    Mscrm.IInlineSectionChildControlView);
Mscrm.LookupItemView.registerClass("Mscrm.LookupItemView", null, Mscrm.ILookupItemView);
Mscrm.TextAreaHelper.registerClass("Mscrm.TextAreaHelper");
Mscrm.InlineRelatedEntityLookupType.registerClass("Mscrm.InlineRelatedEntityLookupType");
Mscrm.CompositeLinkControl.registerClass("Mscrm.CompositeLinkControl");
Mscrm.AttributeFormat.registerClass("Mscrm.AttributeFormat");
Mscrm.AttributeBehavior.registerClass("Mscrm.AttributeBehavior");
Mscrm.SourceType.registerClass("Mscrm.SourceType");
Mscrm.SourceTypeMask.registerClass("Mscrm.SourceTypeMask");
Mscrm.HtmlAttributeNames.registerClass("Mscrm.HtmlAttributeNames");
Mscrm.EditEvents.registerClass("Mscrm.EditEvents");
Mscrm.CssClassNames.registerClass("Mscrm.CssClassNames");
Mscrm.HtmlElementNames.registerClass("Mscrm.HtmlElementNames");
Mscrm.ElementTemplate.registerClass("Mscrm.ElementTemplate");
Mscrm.InlineLookupUtility.registerClass("Mscrm.InlineLookupUtility");
Mscrm.InlineRollupUtility.registerClass("Mscrm.InlineRollupUtility");
Mscrm.InlineControlFactory.registerClass("Mscrm.InlineControlFactory");
Mscrm.SelectOptionsGenerator.registerClass("Mscrm.SelectOptionsGenerator");
Mscrm.QuickFormControlMode.read = "Read";
Mscrm.QuickFormControlMode.edit = "Edit";
Mscrm.QuickFormControlMode.create = "Create";
Mscrm.WellKnownQuickFormIds.accountCard = "b028db32-3619-48a5-ac51-cf3f947b0ef3";
Mscrm.WellKnownQuickFormIds.contactCard = "707fc57b-c5e6-471b-a180-e37ed28a38e2";
Mscrm.QuickFormBehavior.$2c = {};
Mscrm.QuickFormCollectionBehavior.$3E = {};
Mscrm.DeferredInlineEditOnDemandInitializer.$T = null;
Mscrm.InitializationState.executing = "Executing";
Mscrm.InitializationState.completed = "Completed";
Mscrm.InlineEditInitializationManager.initializationCompletedEventName = "InitializationCompleted";
Mscrm.InlineEditInitializationManager.partialInitializationCompletedEventName = "PartialInitializationCompleted";
Mscrm.InlineEditInitializationManager.viewportInitializationCompletedEventName = "ViewportInitializationCompleted";
Mscrm.InlineEditInitializationManager.$T = null;
Mscrm.QuickFormInlineEditDomHelper.$T = null;
Mscrm.InlineEditControlBaseLayout.maskElementTemplate = '<div class="{0}"></div>';
Mscrm.InlineEditControlBaseLayout
    .editIconElementTemplate = '<div class="{0}"><img src="{1}" class="{2}" alt=""/></div>';
Mscrm.InlineEditControlBaseLayout
    .refreshRollupElementTemplate =
    '<div class="rollup recalculate"><a class="rolluprefreshPostsLink" href="#"><img src="{0}" class="{1}" title="{2}" id="refreshIcon"/></a></div>';
Mscrm.InlineEditControlBaseLayout.requiredLevelElementTemplate = '<img src="{0}" class="{1}" alt="{2}"/>';
Mscrm.InlineControlViewModelBase.controlModePropertyName = "ControlMode";
Mscrm.InlineControlViewModelBase.editValuePropertyName = "EditValue";
Mscrm.InlineControlViewModelBase.labelValuePropertyName = "LabelValue";
Mscrm.InlineControlViewModelBase.defaultEditValuePropertyName = "DefaultEditValue";
Mscrm.InlineControlViewModelBase.emptyValuePlaceholderPropertyName = "EmptyValuePlaceholder";
Mscrm.InlineMoneyControlViewModel.currencySymbolPropertyName = "CurrencySymbol";
Mscrm.InlineNumberControlViewModel.precisionPropertyName = "Precision";
Mscrm.InlineAutoCompleteControlViewModel.fieldOptionsChangePropertyValue = "FieldOptionsChangeProperty";
Mscrm.DurationControlEditView.durationControlSuffix = "Select";
Mscrm.MoneyControlEditView.tableElementIdSuffix = "_table";
Mscrm.EditableSelectHelper.selectDropDownIdSuffix = "selectPopup";
Mscrm.EditableSelectHelper.inputIdSuffix = "Input";
Mscrm.InlineTimerControlViewBase.dayLowerLimit = 0;
Mscrm.InlineTimerControlViewBase.hoursLowerLimit = 0;
Mscrm.InlineTimerControlViewBase.minutesLowerLimit = 0;
Mscrm.InlineTimerControlViewBase.secondsLowerLimit = 0;
Mscrm.InlineTimerControlViewBase.hoursUpperLimit = 23;
Mscrm.InlineTimerControlViewBase.minutesUpperLimit = 59;
Mscrm.InlineTimerControlViewBase.secondsUpperLimit = 59;
Mscrm.InlineTimerControlViolatedView.violatedImagePath = "/_imgs/timercontrol/timer_expired_16.png";
Mscrm.InlineTimerControlNoPrivilegeView.noPrivilegeImagePath = "/_imgs/permission_key.png";
Mscrm.InlineTimerControlSuccessView.succeededImagePath = "/_imgs/timercontrol/timer_success_16.png";
Mscrm.InlineTimerControlFailureView.failureImagePath = "/_imgs/timercontrol/timer_expired_16.png";
Mscrm.InlineTimerControlWarningView.warningImagePath = "/_imgs/timercontrol/timer_nearing_expiration_16.png";
Mscrm.InlineTimerControlPausedView.pausedImagePath = "/_imgs/timercontrol/pause_16.png";
Mscrm.LookupItemView.resolvedStyle = "display: inline-block;";
Mscrm.LookupItemView.unresolvedStyle = "display: inline-block; text-decoration:none; color:#FF0000;";
Mscrm.InlineRelatedEntityLookupType.relatedCasesLookup = "relatedcaseslookup";
Mscrm.CompositeLinkControl.compositeControl = "compositionLinkControl";
Mscrm.AttributeFormat.date = "date";
Mscrm.AttributeFormat.datetime = "datetime";
Mscrm.AttributeFormat.duration = "duration";
Mscrm.AttributeFormat.email = "email";
Mscrm.AttributeFormat.emailBody = "emailbody";
Mscrm.AttributeFormat.language = "language";
Mscrm.AttributeFormat.none = "none";
Mscrm.AttributeFormat.text = "text";
Mscrm.AttributeFormat.tickersymbol = "tickersymbol";
Mscrm.AttributeFormat.timezone = "timezone";
Mscrm.AttributeFormat.url = "url";
Mscrm.AttributeFormat.phone = "phone";
Mscrm.AttributeFormat.textarea = "textarea";
Mscrm.AttributeBehavior.none = 0;
Mscrm.AttributeBehavior.dynamic = 1;
Mscrm.AttributeBehavior.dateOnly = 2;
Mscrm.AttributeBehavior.staticTimeZoneInvariant = 3;
Mscrm.SourceType.persistent = 0;
Mscrm.SourceType.calculated = 1;
Mscrm.SourceType.rollup = 2;
Mscrm.SourceTypeMask.undefined = 0;
Mscrm.SourceTypeMask.simple = 1;
Mscrm.SourceTypeMask.related = 2;
Mscrm.SourceTypeMask.logical = 4;
Mscrm.SourceTypeMask.calculated = 8;
Mscrm.SourceTypeMask.rollup = 16;
Mscrm.SourceTypeMask.invalid = 32;
Mscrm.HtmlAttributeNames.altText = "alt";
Mscrm.HtmlAttributeNames.attributeLogicalName = "attrName";
Mscrm.HtmlAttributeNames.defaultSelected = "defaultSelected";
Mscrm.HtmlAttributeNames.defaultValue = "defaultValue";
Mscrm.HtmlAttributeNames.id = "id";
Mscrm.HtmlAttributeNames.nameAttribute = "name";
Mscrm.HtmlAttributeNames.maxLength = "maxLength";
Mscrm.HtmlAttributeNames.privilegeMask = "attrPriv";
Mscrm.HtmlAttributeNames.requiredLevel = "req";
Mscrm.HtmlAttributeNames.tabIndex = "tabindex";
Mscrm.HtmlAttributeNames.type = "type";
Mscrm.HtmlAttributeNames.min = "min";
Mscrm.HtmlAttributeNames.max = "max";
Mscrm.HtmlAttributeNames.accuracy = "acc";
Mscrm.HtmlAttributeNames.dataType = "dt";
Mscrm.HtmlAttributeNames.href = "href";
Mscrm.HtmlAttributeNames.format = "format";
Mscrm.HtmlAttributeNames.dir = "dir";
Mscrm.HtmlAttributeNames.ariaDescribedBy = "aria-describedby";
Mscrm.HtmlAttributeNames.ariaLabeledBy = "aria-labelledby";
Mscrm.HtmlAttributeNames.ariaInvalid = "aria-invalid";
Mscrm.HtmlAttributeNames.role = "role";
Mscrm.HtmlAttributeNames.title = "title";
Mscrm.EditEvents.attributeChanged = "attribute-changed";
Mscrm.CssClassNames.dynamicGutter = "ms-crm-Inline-DynamicGutter";
Mscrm.CssClassNames.processStepLabelMask = "processStepLabelMask";
Mscrm.CssClassNames.processStep = "processStep";
Mscrm.CssClassNames.completedProcessStep = "completedStep";
Mscrm.CssClassNames.processStepLabel = "processStepLabel";
Mscrm.CssClassNames.inlineNumber = "ms-crm-Inline-Number";
Mscrm.CssClassNames.inlineCheckBox = "ms-crm-Inline-CheckBox";
Mscrm.CssClassNames.inlineRequiredLevel = "ms-crm-Inline-RequiredLevel";
Mscrm.CssClassNames.inlineRecommendedLevel = "ms-crm-Inline-RecommendedLevel";
Mscrm.CssClassNames.gradientMask = "ms-crm-Inline-GradientMask";
Mscrm.CssClassNames.editIcon = "ms-crm-Inline-EditIcon";
Mscrm.CssClassNames.inlineEditLabel = "ms-crm-InlineEditLabel";
Mscrm.CssClassNames.inlineEditLabelText = "ms-crm-InlineEditLabelText";
Mscrm.CssClassNames.editing = "inEdit";
Mscrm.CssClassNames.noScroll = "noScroll";
Mscrm.CssClassNames.inlineTextAreaContainer = "inlineTextAreaContainer";
Mscrm.CssClassNames.inlineOptionSet = "ms-crm-Inline-OptionSet";
Mscrm.CssClassNames.inlineOptionSetAutoOpen = "ms-crm-Inline-OptionSet-AutoOpen";
Mscrm.CssClassNames.inlineCurrency = "ms-crm-Inline-Currency";
Mscrm.CssClassNames.inlineLookup = "ms-crm-Inline-Lookup";
Mscrm.CssClassNames.lockedMode = "ms-crm-Inline-Locked";
Mscrm.CssClassNames.hasError = "ms-crm-Inline-HasError";
Mscrm.CssClassNames.headerTileLabel = "ms-crm-HeaderTileLabel";
Mscrm.CssClassNames.headerTile = "ms-crm-HeaderTile";
Mscrm.CssClassNames.headerTileElement = "ms-crm-HeaderTileElement";
Mscrm.CssClassNames.formBreadCrumb = "ms-crm-Form-Breadcrumb";
Mscrm.CssClassNames.absolutePosition = "ms-crm-absolutePosition";
Mscrm.CssClassNames.formTitleData = "ms-crm-Form-Title-Data";
Mscrm.CssClassNames.formTitleLabel = "ms-crm-Form-Title-Label";
Mscrm.CssClassNames.fieldDataPrint = "ms-crm-Field-Data-Print";
Mscrm.CssClassNames.floatLeadingEdge = "ms-crm-float-leadingedge";
Mscrm.CssClassNames.crmHidden = "ms-crm-Hidden";
Mscrm.CssClassNames.hiddenNoBehavior = "ms-crm-Hidden-NoBehavior";
Mscrm.CssClassNames.selectBox = "ms-crm-SelectBox";
Mscrm.CssClassNames.emptyValue = "ms-crm-Inline-EmptyValue";
Mscrm.CssClassNames.chromeElement = "ms-crm-Inline-Chrome";
Mscrm.CssClassNames.valueElement = "ms-crm-Inline-Value";
Mscrm.CssClassNames.editElement = "ms-crm-Inline-Edit";
Mscrm.CssClassNames.valueElementEmailBody = "ms-crm-Inline-Value-email-body";
Mscrm.CssClassNames.editElementEmailBody = "ms-crm-Inline-Edit-email-body";
Mscrm.CssClassNames.valueElementEmailBodyBorder = "ms-crm-Inline-Value-email-border";
Mscrm.CssClassNames.hyperLink = "ms-crm-Email-Address";
Mscrm.CssClassNames.crmInput = "ms-crm-Input";
Mscrm.CssClassNames.inlineInput = "ms-crm-InlineInput";
Mscrm.CssClassNames.inlineInputColor = "ms-crm-InputColor";
Mscrm.CssClassNames.gridUrlLink = "ms-crm-gridurl";
Mscrm.CssClassNames.validationElement = "ms-crm-Inline-Validation";
Mscrm.CssClassNames.recommendationElement = "ms-crm-Inline-Recommendation";
Mscrm.CssClassNames.warningIcon = "ms-crm-Inline-WarningIcon";
Mscrm.CssClassNames.recommendationIcon = "ms-crm-Inline-RecommendationIcon";
Mscrm.CssClassNames.lockIcon = "ms-crm-Inline-LockIcon";
Mscrm.CssClassNames.editHintState = "ms-crm-Inline-EditHintState";
Mscrm.CssClassNames.editState = "ms-crm-Inline-EditState";
Mscrm.CssClassNames.flyOutDialog = "ui-flyout-dialog";
Mscrm.CssClassNames.errorArrowIcon = "ms-crm-Inline-ErrorArrowIcon";
Mscrm.CssClassNames.dateTime = "ms-crm-DateTime";
Mscrm.CssClassNames.duration = "ms-crm-Duration";
Mscrm.CssClassNames.money = "ms-crm-Money";
Mscrm.CssClassNames.moneySymbolRefresh = "ms-crm-CurrencySymbol-Refresh";
Mscrm.CssClassNames.moneyTableRefresh = "ms-crm-CurrencyTable-Refresh";
Mscrm.CssClassNames.inlineDateTime = "ms-crm-InlineDateTime";
Mscrm.CssClassNames.inlineDateTimeIconCell = "ms-crm-InlineDateTime-IconCell";
Mscrm.CssClassNames.inlineDateTimeHiddenCell = "ms-crm-InlineDateTime-HiddenCell";
Mscrm.CssClassNames.inlineDateTimeIcon = "ms-crm-InlineDateTime-Icon";
Mscrm.CssClassNames.inlineDateTimeTimeCell = "ms-crm-InlineDateTime-TimeCell";
Mscrm.CssClassNames.inlineDuration = "ms-crm-InlineDuration";
Mscrm.CssClassNames.inlineDurationInputTable = "ms-crm-InlineDuration-InputTable";
Mscrm.CssClassNames.inlineDurationIcon = "ms-crm-InlineDuration-Icon";
Mscrm.CssClassNames.inlineDurationIconCell = "ms-crm-InlineDuration-IconCell";
Mscrm.CssClassNames.inlineLabelIconSpan = "ms-crm-label-icon";
Mscrm.CssClassNames.inputContainer = "ms-crm-Input-Container";
Mscrm.CssClassNames.inputDateTimeContainer = "ms-crm-DateTime-Container";
Mscrm.CssClassNames.inputDateTimeContainerInput = "ms-crm-DateTime-Container-Input";
Mscrm.CssClassNames.selectInputContainer = "ms-crm-Select-Input-Container";
Mscrm.CssClassNames.editableSelectButtonOff = "select_htc_img_selectOff";
Mscrm.CssClassNames.inlineLookupValueLink = "ms-crm-Lookup-Item";
Mscrm.CssClassNames.flyoutSelectButton = "li-selectedflyoutbutton";
Mscrm.CssClassNames.hideByZeroHeight = "ms-crm-Inline-HideByZeroHeight";
Mscrm.CssClassNames.hideByZeroHeightIE7 = "ms-crm-Inline-HideByZeroHeight-Ie7";
Mscrm.CssClassNames.formCommonDummy = "ms-crm-Form-Common-Dummy";
Mscrm.CssClassNames.toggleClickState = "ms-crm-Inline-toggleclickState";
Mscrm.CssClassNames.phoneNumberControl = "ms-crm-Phone";
Mscrm.CssClassNames.inlineEditableSelect = "ms-crm-inlineEditableSelect";
Mscrm.CssClassNames.customerCardName = "ms-crm-CustomerCard-Name";
Mscrm.CssClassNames.customerCardNameAnchor = "ms-CustomerCard-Name-Anchor";
Mscrm.CssClassNames.inlineMultiplePicklist = "ms-crm-InlineMultiPicklist";
Mscrm.CssClassNames.inlineMultiplePicklistCheckBox = "ms-crm-InlineMultiPicklist-Checkbox";
Mscrm.CssClassNames.selectedMultipleCheckBoxItem = "ms-crm-selectedmultiboxitem";
Mscrm.CssClassNames.imageStripRollupRefresh = "ms-crm-ImageStrip-rollup_refresh";
Mscrm.CssClassNames.rollupRefreshPostsLinkSpinningWheel = "rolluprefreshPostsLinkSpinningWheel";
Mscrm.CssClassNames.rollupRefreshPostsLink = "rolluprefreshPostsLink";
Mscrm.HtmlElementNames.div = "div";
Mscrm.HtmlElementNames.listItem = "li";
Mscrm.HtmlElementNames.unorderedList = "ul";
Mscrm.HtmlElementNames.orderedList = "ol";
Mscrm.HtmlElementNames.select = "select";
Mscrm.HtmlElementNames.option = "option";
Mscrm.HtmlElementNames.input = "input";
Mscrm.HtmlElementNames.image = "img";
Mscrm.HtmlElementNames.span = "span";
Mscrm.HtmlElementNames.noBR = "nobr";
Mscrm.HtmlElementNames.textArea = "textarea";
Mscrm.HtmlElementNames.anchor = "a";
Mscrm.HtmlElementNames.label = "label";
Mscrm.HtmlElementNames.table = "table";
Mscrm.HtmlElementNames.tableColumn = "col";
Mscrm.HtmlElementNames.tableColumnGroup = "colgroup";
Mscrm.HtmlElementNames.tableRow = "tr";
Mscrm.HtmlElementNames.tableCell = "td";
Mscrm.ElementTemplate.div = "<div></div>";
Mscrm.ElementTemplate.lineBreak = "<br />";
Mscrm.ElementTemplate.listItem = "<li></li>";
Mscrm.ElementTemplate.select = "<select></select>";
Mscrm.ElementTemplate.option = "<option></option>";
Mscrm.ElementTemplate.input = "<input></input>";
Mscrm.ElementTemplate.image = "<img></img>";
Mscrm.ElementTemplate.span = "<span></span>";
Mscrm.ElementTemplate.noBR = "<nobr></nobr>";
Mscrm.ElementTemplate.textArea = "<textarea></textarea>";
Mscrm.ElementTemplate.anchor = "<a></a>";
Mscrm.ElementTemplate.label = "<label></label>";
Mscrm.ElementTemplate.tableNoSpacingPadding = '<table cellspacing="0" cellpadding="0"></table>';
Mscrm.ElementTemplate.tableColumn = "<col></col>";
Mscrm.ElementTemplate.tableColumnGroup = "<colgroup></colgroup>";
Mscrm.ElementTemplate.tableRow = "<tr></tr>";
Mscrm.ElementTemplate.tableCell = "<td></td>";
Mscrm.ElementTemplate.button = '<button type="button"></button>';
Mscrm.InlineControlFactory.$F = [];
Mscrm.InlineControlFactory.$$cctor()