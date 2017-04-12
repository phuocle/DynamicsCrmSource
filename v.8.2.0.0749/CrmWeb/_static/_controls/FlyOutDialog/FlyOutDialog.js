Type.registerNamespace("Mscrm");
Mscrm.IFlyOutContainer = function() {};
Mscrm.IFlyOutContainer.registerInterface("Mscrm.IFlyOutContainer");
Mscrm.ErrorFlyout = function(anchor, messageContainer, contentContainer) {
    this.$$d_onPageResize = Function.createDelegate(this, this.onPageResize);
    Mscrm.CrmDebug.assert(!IsNull(anchor), "Parameter named 'anchor' is null or undefined!");
    Mscrm.CrmDebug.assert(!IsNull(messageContainer), "Parameter named 'messageContainer' is null or undefined!");
    Mscrm.CrmDebug.assert(!IsNull(contentContainer), "Parameter named 'contentContainer' is null or undefined!");
    if (!IsNull(anchor) && !IsNull(messageContainer)) {
        this._anchor = anchor;
        this._containerElement = messageContainer;
        this._contentContainer = contentContainer;
        this._forceFlipped = false;
        this._arrowIcon = $P_CRM("<span></span>").addClass("ms-crm-Inline-ErrorArrowIcon")
            .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/inlineedit/arrow.png")))
                .attr("alt", "")).hide().insertAfter(this._containerElement);
        $P_CRM(window).bind("resize", this.$$d_onPageResize)
    }
};
Mscrm.ErrorFlyout.prototype = {
    _contentContainer: null,
    _arrowIcon: null,
    _anchor: null,
    _containerElement: null,
    _forceFlipped: false,
    get_forceFlipped: function() { return this._forceFlipped },
    set_forceFlipped: function(value) {
        this._forceFlipped = value;
        return value
    },
    get_zIndex: function() { return Mscrm.Utilities.parseInt(this._arrowIcon.css("z-index")) },
    set_zIndex: function(value) {
        this._arrowIcon.css("z-index", value.toString());
        this._containerElement.css("z-index", value.toString());
        return value
    },
    configureFlyoutPosition: function(anchor, messageContainer, errorArrowIcon) {
        var $v_0 = anchor.scrollParent,
            $v_1 = !IsNull($v_0) ? $v_0.call(anchor) : this._contentContainer,
            $v_2 = $v_1.offset(),
            $v_3 = $v_1.outerWidth(false),
            $v_4 = $v_1.outerHeight(false),
            $v_5 = !IsNull($v_2) ? $v_2.top : 0,
            $v_6 = !IsNull($v_2) ? $v_2.left : 0,
            $v_7 = anchor.offset(),
            $v_8 = anchor.outerWidth(false),
            $v_9 = anchor.outerHeight(false),
            $v_A = $v_7.top,
            $v_B = $v_7.left + $v_8 / 2,
            $v_C = errorArrowIcon.outerWidth(false),
            $v_D = errorArrowIcon.outerHeight(false),
            $v_E = $v_B - $v_C / 2,
            $v_F = 0,
            $v_G = messageContainer.outerWidth(false),
            $v_H = messageContainer.outerHeight(false),
            $v_I = $v_B - $v_G / 2,
            $v_J = 0;
        if ($v_I < $v_6) $v_I = $v_6;
        else {
            var $v_L = $v_I + $v_G - ($v_6 + $v_3);
            if ($v_L > 0) $v_I -= $v_L
        }
        var $v_K = this._forceFlipped ? true : $v_A + $v_9 + $v_D + $v_H > $v_5 + $v_4;
        if ($v_K) {
            $v_F = $v_A - $v_D;
            $v_J = $v_F - $v_H;
            errorArrowIcon.addClass("ms-crm-VerticalFlipMargin");
            errorArrowIcon.children().addClass("ms-crm-VerticalFlip")
        } else {
            $v_F = $v_A + $v_9;
            $v_J = $v_F + $v_D;
            if (errorArrowIcon.hasClass("ms-crm-VerticalFlipMargin")) {
                errorArrowIcon.removeClass("ms-crm-VerticalFlipMargin");
                errorArrowIcon.children().removeClass("ms-crm-VerticalFlip")
            }
        }
        errorArrowIcon.css({ top: $v_F + "px", left: $v_E + "px" });
        messageContainer.css({ top: $v_J + "px", left: $v_I + "px" })
    },
    showError: function(errorMessage) {
        this._containerElement.text(errorMessage);
        var $$t_1 = this;
        window.setTimeout(function() {
                $$t_1._arrowIcon.show();
                $$t_1._containerElement.show();
                $$t_1._anchor.show();
                $$t_1.configureFlyoutPosition($$t_1._anchor, $$t_1._containerElement, $$t_1._arrowIcon)
            },
            0)
    },
    hideError: function(hideAnchor) {
        var $$t_1 = this;
        window.setTimeout(function() {
                !IsNull(hideAnchor) && hideAnchor && $$t_1._anchor.hide();
                $$t_1._arrowIcon.hide();
                $$t_1._containerElement.hide()
            },
            0)
    },
    onPageResize: function(e) {
        this.validationElementVisible(this._containerElement) &&
            this.configureFlyoutPosition(this._anchor, this._containerElement, this._arrowIcon)
    },
    validationElementVisible: function(messageContainer) { return messageContainer.css("display") === "block" },
    dispose: function() { $P_CRM(window).unbind("resize", this.$$d_onPageResize) }
};
Mscrm.FlyOutButton = function(tooltip, click) {
    this.$y_0 = tooltip;
    this.$11_0 = click
};
Mscrm.FlyOutButton.prototype = {
    $y_0: null,
    $11_0: null,
    get_tooltip: function() { return this.$y_0 },
    set_tooltip: function(value) {
        this.$y_0 = value;
        return value
    },
    get_click: function() { return this.$11_0 }
};
Mscrm.FlyOutPosition = function() {};
Mscrm.FlyOutDialogEventName = function() {};
Mscrm.FlyOutButtonType = function() {};
Mscrm.ErrorFlyOutConstant = function() {};
Mscrm.FlyOutCssClassNames = function() {};
Mscrm.FlyOutElementTemplate = function() {};
Mscrm.SystemErrorCodes = function() {};
Mscrm.FlyOutDialog = function() {
    this.$$d_onCancelButtonClick = Function.createDelegate(this, this.onCancelButtonClick);
    this.$$d_onConfirmButtonClick = Function.createDelegate(this, this.onConfirmButtonClick);
    this.$$d_$27_0 = Function.createDelegate(this, this.$27_0);
    this.$5_0 = $P_CRM(this);
    this.$0_0 = new Mscrm.FlyOutOptions;
    this.$0_0.$4_0 = true;
    this.$A_0 = "bottom"
};
Mscrm.FlyOutDialog.setupDialogButtonWithIcon = function(dialogChrome,
    buttonSelector,
    buttonTextSelector,
    imageUri,
    buttonId,
    tabIndex) {
    var $v_0 = $P_CRM(buttonSelector, dialogChrome), $v_1 = $P_CRM(buttonTextSelector, $v_0);
    $v_0.length > 0 && !isNullOrEmptyString(buttonId) && $v_0.attr("id", buttonId);
    if ($v_1.length > 0) {
        var $v_2 = $v_1.text();
        $v_1.remove();
        var $v_3 = $P_CRM(Mscrm.ImageStrip.getImage(imageUri));
        $v_3.attr("alt", $v_2);
        $v_3.attr("title", $v_2);
        $v_0.attr("tabIndex", tabIndex.toString());
        $v_0.append($v_3)
    }
};
Mscrm.FlyOutDialog.setupDialogButton = function(dialogChrome, buttonSelector, buttonId, tabIndex) {
    var $v_0 = $P_CRM(buttonSelector, dialogChrome);
    if ($v_0.length > 0 && !isNullOrEmptyString(buttonId)) {
        $v_0.attr("id", buttonId);
        $v_0.attr("tabIndex", tabIndex.toString());
        $v_0.html("<div style=min-width:58px>" + $v_0.html() + "</div>")
    }
};
Mscrm.FlyOutDialog.get_$1l = function() {
    if (IsNull(Mscrm.FlyOutDialog.$F)) {
        var $v_0 = $P_CRM("<img></img>");
        $v_0.attr("src", Mscrm.CrmUri.create(window.CDNURL + "/_imgs/advfind/progress.gif").toString());
        Mscrm.FlyOutDialog.$F = $P_CRM("<div></div>");
        Mscrm.FlyOutDialog.$F.addClass("ms-crm-flyout-loadingcontent");
        Mscrm.FlyOutDialog.$F.append($v_0);
        Mscrm.FlyOutDialog.$F.appendTo(document.body)
    }
    return Mscrm.FlyOutDialog.$F
};
Mscrm.FlyOutDialog.prototype = {
    $5_0: null,
    $0_0: null,
    $E_0: null,
    $I_0: null,
    $V_0: null,
    $a_0: false,
    $A_0: null,
    $7_0: null,
    $D_0: null,
    $1C_0: null,
    $w_0: true,
    $15_0: true,
    $M_0: 0,
    $W_0: null,
    $19_0: 35,
    $x_0: false,
    $m_0: false,
    $g_0: false,
    $1H_0: true,
    $1F_0: false,
    $16_0: null,
    $G_0: null,
    get_viewport: function() { return this.$D_0 },
    set_viewport: function(value) {
        this.$D_0 = value;
        return value
    },
    $O_0: 0,
    $s_0: 0,
    get_options: function() { return this.$0_0 },
    get_position: function() { return this.$A_0 },
    set_position: function(value) {
        this.$A_0 = value;
        return value
    },
    get_visible: function() { return this.$a_0 },
    get_coverCommandBarWithOverlay: function() { return this.$g_0 },
    set_coverCommandBarWithOverlay: function(value) {
        this.$g_0 = value;
        return value
    },
    get_hideFlyOutOnConfirmClick: function() { return this.$w_0 },
    set_hideFlyOutOnConfirmClick: function(value) {
        this.$w_0 = value;
        return value
    },
    get_hideFlyOutOnCancelClick: function() { return this.$15_0 },
    set_hideFlyOutOnCancelClick: function(value) {
        this.$15_0 = value;
        return value
    },
    get_dialogLeft: function() { return this.$O_0 },
    set_dialogLeft: function(value) {
        this.$O_0 = value;
        return value
    },
    get_actionDropDownHeightAdjustment: function() { return this.$19_0 },
    set_actionDropDownHeightAdjustment: function(value) {
        this.$19_0 = value;
        return value
    },
    get_dialogTop: function() { return this.$s_0 },
    set_dialogTop: function(value) {
        this.$s_0 = value;
        return value
    },
    get_id: function() { return this.$1C_0 },
    get_buttonsInitialTabIndex: function() { return this.$M_0 },
    set_buttonsInitialTabIndex: function(value) {
        this.$M_0 = value;
        return value
    },
    get_jQueryDialog: function() { return this.$E_0 },
    set_jQueryDialog: function(value) {
        this.$E_0 = value;
        if (IsNull(value)) this.$G_0 = null;
        else {
            !IsNull(this.$G_0) && this.$1Q_0();
            this.$G_0 = this.$E_0.parents(".ui-dialog").first();
            this.$1g_0(this.$G_0)
        }
        return value
    },
    get_isCompositeFlyOut: function() { return this.$x_0 },
    set_isCompositeFlyOut: function(value) {
        this.$x_0 = value;
        return value
    },
    get_overflow: function() { return this.$m_0 },
    set_overflow: function(value) {
        this.$m_0 = value;
        return value
    },
    $1P_0: function($p0) {
        var $v_0 = $P_CRM("#" + this.$b_0($p0));
        if (!IsNull($v_0) && $v_0.length > 0) return true;
        else return false
    },
    $27_0: function($p0) {
        switch ($p0.keyCode) {
        case 27:
            if (this.$x_0) {
                this.$5_0.triggerHandler("flyout-confirming");
                this.$E_0.dialog("close");
                this.$5_0.triggerHandler("flyout-closed")
            } else this.$5_0.triggerHandler("flyout-canceled");
            $p0.stopPropagation();
            break;
        case 9:
            if (this.$0_0.$Q_0) break;
            if ($p0.shiftKey) {
                var $v_0 = $P_CRM($p0.target);
                if (IsNull($p0.target.getAttribute("data-attributename"))) {
                    var $v_1 = $v_0.parents("div[data-attributename]");
                    if (!IsNull($v_1)) $v_0 = $v_1.first()
                }
                $v_0[0] === this.get_firstTabAbleElement() && $p0.preventDefault();
                this.$2K_0($v_0)
            } else
                ($p0.target.id === this.$b_0("close") ||
                        $p0.target.id === this.$b_0("cancel") && !this.$0_0.$R_0 ||
                        !this.$1P_0("cancel") && $p0.target.id === this.$b_0("confirm")) &&
                    this.$1c_0();
            break;
        default:
            break
        }
    },
    get_firstTabAbleElement: function() {
        if (IsNull(this.$W_0)) {
            var $v_0 = $P_CRM("div.ms-crm-Inline-Chrome", this.$I_0);
            if ($v_0.length) this.$W_0 = $v_0[0]
        }
        return this.$W_0
    },
    initializeForReuse: function() {
        this.$W_0 = null;
        Mscrm.FlyOutDialog.$F = null
    },
    $1c_0: function() {
        if (!this.$0_0.$u_0) return;
        if (IsNull(this.get_firstTabAbleElement())) return;
        this.setFocusOnFirstElement()
    },
    setFocusOnFirstElement: function() {
        if (IsNull(this.get_firstTabAbleElement())) return;
        this.$1K_0($P_CRM(this.get_firstTabAbleElement()))
    },
    $2K_0: function($p0) {
        if (!IsNull($p0) && $p0.length > 0) {
            if (IsNull(this.get_firstTabAbleElement())) return;
            if ($p0[0] === this.get_firstTabAbleElement()) {
                var $v_0 = null;
                if (this.$0_0.$R_0) $v_0 = ".ui-dialog-titlebar .ui-dialog-titlebar-close";
                else if (this.$1P_0("cancel"))
                    $v_0 = String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", 2);
                else $v_0 = String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", 1);
                this.$1K_0($P_CRM($v_0, this.dialogChrome()))
            }
        }
    },
    $1K_0: function($p0) {
        if (!IsNull($p0)) {
            var $$t_1 = this;
            window.setTimeout(function() { $p0.focus() }, 0)
        }
    },
    show: function(anchor, viewport) {
        this.$1m_0();
        if (IsNull(anchor)) {
            Mscrm.CrmDebug.fail("anchor should not be null.");
            throw Error.argumentNull("anchor")
        }
        if (anchor.length !== 1) {
            Mscrm.CrmDebug.fail("anchor should only contain one element.");
            throw Error.argumentOutOfRange("anchor.Length", anchor.length)
        }
        this.$7_0 = anchor;
        this.$0_0.$H_0 && this.$7_0.addClass("li-selectedflyoutbutton");
        this.configureDialogPosition();
        if (this.$D_0 !== viewport) {
            this.$D_0 = viewport;
            if (!IsNull(viewport)) {
                if (viewport.length !== 1) {
                    Mscrm.CrmDebug.fail("viewport should only contain one element.");
                    throw Error.argumentOutOfRange("viewport.Length", viewport.length)
                }
                this.dialogChrome().appendTo(viewport)
            }
        }
        this.$E_0.dialog("open");
        this.$2J_0();
        var $v_0 = this.$a_0;
        this.$a_0 = true;
        Mscrm.FlyOutDialog.currentDialog = this;
        if (IsNull(this.$I_0)) this.$5_0.triggerHandler("flyout-loadcontent");
        else {
            this.$1f_0();
            this.$1c_0()
        }
        !$v_0 && this.$5_0.triggerHandler("flyout-visiblechanged");
        (window.UseTabletExperience || Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) &&
            $P_CRM("body").addClass("AutoScrolling");
        if (this.$g_0)
            if (window.parent && window.parent.document && window.parent.document.getElementById("crmTopBar")) {
                var $v_1 = document.createElement("div");
                $v_1.setAttribute("class",
                    "ui-widget-overlay ui-widget-overlay-flyout ui-widget-overlay-flyout-dark rollup CommandBarOverlayFlyOut");
                $v_1.id = "CommandBarOverlayDiv";
                window.parent.document.getElementById("crmTopBar").appendChild($v_1)
            }
    },
    hide: function() {
        if (!this.$a_0) return;
        Type.parse("Mscrm.InlineEditDataService") && Mscrm.InlineEditDataService.set_blockAutoSave(false);
        if (Mscrm.Utilities.isIosDevice() || Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
            var $v_0 = $P_CRM(".ui-widget-overlay");
            $v_0.remove()
        }
        this.$E_0.dialog("close");
        this.$1F_0 && this.$16_0 && setPerfMarkerTimestamp(this.$16_0);
        this.$5_0.triggerHandler("flyout-closed");
        (window.UseTabletExperience || Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled()) &&
            $P_CRM("body").removeClass("AutoScrolling");
        Mscrm.FlyOutDialog.currentDialog = null
    },
    bind: function(eventName, eventHandler) { this.$5_0.bind(eventName, eventHandler) },
    unbind: function(eventName, eventHandler) { this.$5_0.unbind(eventName, eventHandler) },
    setContent: function(content) {
        var $v_0 = this.$a_0;
        $v_0 && this.hide();
        this.initialize(content);
        $v_0 && this.show(this.$7_0, this.$D_0)
    },
    _disposed: false,
    get_isDisposed: function() { return this._disposed },
    dispose: function() {
        if (this._disposed) return;
        if (!IsNull(Mscrm.FlyOutDialog.currentDialog)) Mscrm.FlyOutDialog.currentDialog = null;
        if (!IsNull(this.$W_0)) this.$W_0 = null;
        Mscrm.Utilities.destroyObject(this.$0_0);
        this.$0_0 = null;
        this.$1Q_0();
        if (!IsNull(this.$I_0)) {
            this.$I_0.dialog("destroy");
            this.$1X_0(this.$I_0);
            this.$I_0 = null
        }
        if (!IsNull(Mscrm.FlyOutDialog.$F)) {
            this.$1X_0(Mscrm.FlyOutDialog.$F);
            Mscrm.FlyOutDialog.$F = null
        }
        !IsNull(this.$E_0) && this.set_jQueryDialog(null);
        this.$5_0.unbind();
        this.$5_0 = null;
        this._disposed = true;
        Mscrm.Utilities.destroyObject(this)
    },
    $1Q_0: function() {
        if (!IsNull(this.$G_0)) {
            if (!IsNull(this.$G_0[0])) {
                $removeHandler(this.$G_0[0], "keydown", this.$$d_$27_0);
                $removeHandler(this.$G_0[0], "keypress", this.$$d_$27_0)
            }
            this.$G_0.unbind()
        }
    },
    $1X_0: function($p0) {
        $p0.unbind();
        $p0.empty();
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) $p0[$v_0].innerHTML = "";
        $p0 = null
    },
    get_shouldDisposeContent: function() { return this.$1H_0 },
    set_shouldDisposeContent: function(value) {
        this.$1H_0 = value;
        return value
    },
    configureDialogOptions: function() { this.configureButtons() },
    configureButtons: function() {
        var $v_0 = [];
        Array.add($v_0, new Mscrm.FlyOutButton(window.LOCID_FLYOUT_CONFIRM, this.$$d_onConfirmButtonClick));
        Array.add($v_0, new Mscrm.FlyOutButton(window.LOCID_FLYOUT_CANCEL, this.$$d_onCancelButtonClick));
        this.$0_0.setButtons($v_0)
    },
    configureDialogPosition: function() {
        var $v_0 = this.$7_0.offset(), $v_1 = 0, $v_2 = 0;
        this.$m_0 = false;
        switch (this.$A_0) {
        case "right":
            if (Mscrm.Utilities.get_isLeftToRight()) {
                var $v_4 = !this.$0_0.$B_0 ? 300 : this.$0_0.$B_0;
                $v_1 = $v_0.left + this.$7_0.outerWidth(true) + 0 + 8;
                if ($v_1 + $v_4 >= document.documentElement.clientWidth) {
                    $v_1 = $v_0.left - $v_4 - 0 - 8 - 2;
                    this.$m_0 = true
                }
            } else {
                var $v_5 = !this.$0_0.$B_0 ? 300 : this.$0_0.$B_0,
                    $v_6 = Number.parseInvariant(this.$7_0.css("marginLeft"));
                $v_6 = isNaN($v_6) ? 0 : $v_6;
                $v_1 = $v_0.left - $v_5 - 0 - 8 + $v_6 - 2;
                if ($v_1 <= 0) {
                    $v_1 = $v_0.left + this.$7_0.outerWidth(true) + 0 + 8;
                    this.$m_0 = true
                }
            }
            $v_2 = $v_0.top;
            $v_2 -= this.$19_0;
            break;
        case "left":
            $v_1 = $v_0.left - 0 - this.$0_0.$B_0 - 18;
            $v_2 = $v_0.top;
            break;
        case "custom":
            $v_1 = this.$O_0;
            $v_2 = this.$s_0;
            break;
        case "bottom":
        default:
            var $v_3 = !this.$0_0.$B_0 ? 300 : this.$0_0.$B_0;
            if (Mscrm.Utilities.get_isLeftToRight())
                if (this.$7_0.selector === "#activityFilterButton") $v_1 = $v_0.left - $v_3 + 12;
                else $v_1 = $v_0.left;
            else if (this.$7_0.selector === "#activityFilterButton") $v_1 = $v_0.left;
            else $v_1 = $v_0.left - ($v_3 - this.$7_0.outerWidth(false)) - 2;
            $v_2 = $v_0.top + this.$7_0.outerHeight(false) + 0;
            break
        }
        if (this.$0_0.$4_0) {
            this.$0_0.$A_0 = [$v_1, $v_2];
            this.$2A_0()
        } else this.$E_0.dialog("option", "position", [$v_1, $v_2]);
        this.$O_0 = $v_1
    },
    setupDialogButtons: function() {
        var $v_0 = this.dialogChrome(), $v_1 = 0, $v_2 = 0, $v_3 = 0;
        if (this.$M_0 > 0) {
            $v_3 = this.$M_0 + 7;
            $v_2 = this.$M_0 + 8;
            $v_1 = this.$M_0 + 9
        }
        Mscrm.FlyOutDialog.setupDialogButtonWithIcon($v_0,
            ".ui-dialog-titlebar .ui-dialog-titlebar-close",
            ".ui-icon",
            Mscrm.CrmUri.create(window.CDNURL + "/_imgs/closeicon.png"),
            this.$b_0("close"),
            $v_1);
        Mscrm.FlyOutDialog.setupDialogButton($v_0,
            String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", 1),
            this.$b_0("confirm"),
            $v_3);
        Mscrm.FlyOutDialog.setupDialogButton($v_0,
            String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", 2),
            this.$b_0("cancel"),
            $v_2)
    },
    onConfirmButtonClick: function() {
        var $v_0 = new Mscrm.FlyOutEventData;
        this.$5_0.triggerHandler("flyout-confirming", [$v_0]);
        if (!$v_0.$v_0) {
            setPerfMarkerTimestamp("StartCloseFlyOutTimestamp");
            this.$1B_0(true, "FinishCloseFlyOutTimestamp");
            this.$5_0.triggerHandler("flyout-confirmed");
            this.$w_0 && this.hide();
            this.$1B_0(false, null)
        }
    },
    onCancelButtonClick: function() {
        var $v_0 = new Mscrm.FlyOutEventData;
        this.$5_0.triggerHandler("flyout-canceling", [$v_0]);
        if (!$v_0.$v_0) {
            setPerfMarkerTimestamp("StartCancelFlyOutTimestamp");
            this.$1B_0(true, "FinishCancelFlyOutTimestamp");
            this.$5_0.triggerHandler("flyout-canceled");
            this.$15_0 && this.hide();
            this.$1B_0(false, null)
        }
    },
    initialize: function(content) {
        this.$I_0 = content;
        if (IsNull(content)) content = Mscrm.FlyOutDialog.get_$1l();
        if (this.$0_0.$4_0) {
            this.configureDialogOptions();
            this.$0_0.$4_0 = false
        }
        this.set_jQueryDialog(content.dialog(this.$0_0.toJQueryDialogOptions()));
        var $v_0 = this.dialogChrome();
        $v_0.addClass("ui-flyout-dialog");
        var $v_1 = content.attr("id");
        if (!IsNull($v_1)) {
            $v_0.attr("id", $v_1.toString() + "_flyOut");
            this.$1C_0 = $v_0.attr("id")
        }
        if (!IsNull(this.$D_0)) {
            if (this.$D_0.length !== 1) {
                Mscrm.CrmDebug.fail("viewport should only contain one element.");
                throw Error.argumentOutOfRange("Viewport.Length", this.$D_0.length)
            }
            $v_0.appendTo(this.$D_0)
        }
        this.setupDialogButtons();
        this.setButtonsVisibility();
        this.$1b_0()
    },
    $1g_0: function($p0) {
        $addHandler($p0[0], "keydown", this.$$d_$27_0);
        $addHandler($p0[0], "keypress", this.$$d_$27_0);
        var $$t_3 = this;
        $p0.bind("dialogclose", function($p1_0) { !$p0.is(":visible") && $$t_3.$22_0() });
        var $$t_4 = this;
        $p0.bind("dialogbeforeclose", function($p1_0) { $$t_4.$1h_0() })
    },
    $1h_0: function() {
        if (this.$0_0.$K_0) {
            var $v_0 = $P_CRM(".ui-widget-overlay");
            if (this.$0_0.$L_0) $v_0.unbind("click");
            else $v_0.removeClass("ui-widget-overlay-flyout-dark")
        }
    },
    $22_0: function() {
        this.$a_0 = false;
        this.$0_0.$H_0 && !IsNull(this.$7_0) && this.$7_0.removeClass("li-selectedflyoutbutton");
        this.$1K_0(this.$7_0);
        this.$5_0.triggerHandler("flyout-visiblechanged");
        if (window
            .parent &&
            window.parent.document &&
            window.parent.document.getElementById("crmTopBar") &&
            this.$g_0) {
            var $v_0 = $P_CRM(window.parent.document.getElementById("crmTopBar")),
                $v_1 = $v_0.find("#CommandBarOverlayDiv");
            $v_1 && $v_1.remove()
        }
    },
    $1m_0: function() { if (this.$0_0.$k_0) this.$V_0 = this.$E_0.children().detach() },
    $1f_0: function() {
        if (this.$0_0.$k_0 && !IsNull(this.$V_0)) {
            this.$V_0.hasClass("ms-crm-LinkControl-content") && this.$V_0.removeClass("ms-crm-LinkControl-content");
            this.$V_0.appendTo(this.$E_0);
            this.$V_0 = null
        }
    },
    $2J_0: function() {
        if (this.$0_0.$K_0) {
            var $v_0 = $P_CRM(".ui-widget-overlay");
            $v_0.addClass("ui-widget-overlay-flyout");
            if (Mscrm.Utilities.isIosDevice() || Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
                var $v_1 = $v_0.clone(true);
                $v_0.remove();
                $v_1.insertAfter(this.dialogChrome());
                $v_0 = $v_1
            }
            if (this.$0_0.$L_0) {
                var $$t_2 = this;
                $v_0.bind("click",
                    function() {
                        $$t_2.$5_0.triggerHandler("flyout-overlayclicked");
                        $$t_2.$w_0 && $$t_2.hide()
                    })
            } else {
                $v_0.addClass("ui-widget-overlay-flyout-dark");
                $v_0.css("width", "100%");
                $v_0.css("height", "100%")
            }
        }
    },
    $2A_0: function() {
        this.$E_0.dialog("option", this.$0_0.toJQueryDialogOptions());
        this.setupDialogButtons();
        this.setButtonsVisibility();
        this.$1b_0();
        this.$0_0.$4_0 = false
    },
    dialogChrome: function() { return this.$G_0 },
    setButtonsVisibility: function() {
        var $v_0 = this.dialogChrome(),
            $v_1 = $P_CRM(".ui-dialog-buttonpane", $v_0),
            $v_2 = $P_CRM(".ui-dialog-titlebar .ui-dialog-titlebar-close", $v_0);
        if (this.$0_0.$o_0) $v_1.show();
        else {
            Mscrm.CrmBrowser.get_currentBrowser().get_isIE7() && $v_1.removeClass("ui-dialog-buttonpane");
            $v_1.hide()
        }
        if (this.$0_0.$R_0) $v_2.show();
        else $v_2.hide()
    },
    $1b_0: function() {
        var $v_0 = this.dialogChrome(), $v_1 = $P_CRM(".ui-dialog-titlebar", $v_0);
        $v_1.hide();
        if (this.$0_0.$p_0) $v_1.show();
        else $v_1.hide()
    },
    $b_0: function($p0) {
        var $v_0 = null;
        if (!IsNull(this.$I_0) && !isNullOrEmptyString($p0)) {
            var $v_1 = this.$I_0.attr("id");
            if (!isNullOrEmptyString($v_1)) $v_0 = $v_1 + "-" + $p0
        }
        return $v_0
    },
    setFlyOutButtonDisplay: function(buttonType, value) {
        var $v_0 = this.dialogChrome(),
            $v_1 = String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", buttonType),
            $v_2 = $P_CRM($v_1, $v_0);
        if ($v_2.length > 0)
            if (value) {
                $v_2.removeAttr("disabled");
                $v_2.removeClass("ui-state-disabled")
            } else {
                $v_2.attr("disabled", "disabled");
                $v_2.addClass("ui-state-disabled")
            }
    },
    setFlyOutButtonFocus: function(flyOutButtonType) {
        var $v_0 = this.dialogChrome(),
            $v_1 = String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", flyOutButtonType),
            $v_2 = $P_CRM($v_1, $v_0);
        $v_2.focus()
    },
    setButtonTooltip: function(flyOutButtonType, tooltip) {
        var $v_0 = this.dialogChrome(),
            $v_1 = String.format(".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})", flyOutButtonType),
            $v_2 = $P_CRM($v_1, $v_0),
            $v_3 = $P_CRM(".ui-button-text", $v_2);
        !IsNull($v_3) && $v_3.text(tooltip)
    },
    $1B_0: function($p0, $p1) {
        this.$1F_0 = $p0;
        this.$16_0 = $p1
    }
};
Mscrm.FlyOutEventData = function() {};
Mscrm.FlyOutEventData.prototype = {
    $v_0: false,
    get_handled: function() { return this.$v_0 },
    set_handled: function(value) {
        this.$v_0 = value;
        return value
    }
};
Mscrm.FlyOutMenu = function() {};
Mscrm.FlyOutMenu.createFlyOut = function(flyOutMenuDescriptor) {
    var $v_0 = Mscrm.FlyOutMenu.createFlyOutContent(flyOutMenuDescriptor.menuSections), $v_1 = new Mscrm.FlyOutDialog;
    $v_1.setContent($v_0);
    $v_1.$0_0.set_showButtonPane(false);
    $v_1.$0_0.set_closeOnEscape(true);
    $v_1.$0_0.$H_0 = false;
    $v_1.$0_0.set_dialogClass(flyOutMenuDescriptor.cssClass);
    flyOutMenuDescriptor.width && $v_1.$0_0.set_width(flyOutMenuDescriptor.width);
    return $v_1
};
Mscrm.FlyOutMenu.createFlyOutContent = function(menuSections) {
    for (var $v_0 = $P_CRM(document
                 .createElement("div")),
        $$arr_2 = menuSections,
        $$len_3 = $$arr_2.length,
        $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4], $v_2 = Mscrm.FlyOutMenu.createSection($v_1, $v_1.clickHandler);
        $v_0.append($v_2)
    }
    return $v_0
};
Mscrm.FlyOutMenu.createSection = function(menuSection, clickHandler) {
    var $v_0 = $P_CRM(document.createElement("div"));
    $v_0.addClass(menuSection.cssClass);
    !isNullOrEmptyString(menuSection.id) && $v_0.attr("id", menuSection.id);
    if (!isNullOrEmptyString(menuSection.displayName)) {
        var $v_1 = $P_CRM(document.createElement("label"));
        $v_1.text(menuSection.displayName || "");
        $v_0.append($v_1)
    }
    if (IsNull(menuSection.menuListItems)) return $v_0;
    for (var $$arr_4 = menuSection.menuListItems, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        $v_0.append(Mscrm.FlyOutMenu.createMenuListItem($v_2, clickHandler))
    }
    return $v_0
};
Mscrm.FlyOutMenu.createMenuListItem = function(menuListItem, clickHandler) {
    var $v_0 = $P_CRM(document.createElement("div"));
    if (IsNull(menuListItem)) return $v_0;
    !isNullOrEmptyString(menuListItem.id) && $v_0.attr("id", menuListItem.id);
    !isNullOrEmptyString(menuListItem.cssClass) && $v_0.addClass(menuListItem.cssClass);
    if (!IsNull(menuListItem.content)) $v_0.append(menuListItem.content);
    else !isNullOrEmptyString(menuListItem.displayName) && $v_0.text(menuListItem.displayName);
    !isNullOrEmptyString(menuListItem.title) && $v_0.attr("title", menuListItem.title);
    !isNullOrEmptyString(menuListItem.tabIndex) && $v_0.attr("tabindex", menuListItem.tabIndex);
    $v_0.bind("click", menuListItem.data, clickHandler);
    $v_0.bind("keydown",
        menuListItem.data,
        function($p1_0) {
            var $v_1 = $p1_0.keyCode === 13;
            if ($v_1) {
                clickHandler($p1_0);
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            }
        });
    return $v_0
};
Mscrm.FlyOutMenuDescriptor = function() {};
Mscrm.FlyOutMenuDescriptor.prototype = { cssClass: null, width: 0, menuSections: null };
Mscrm.MenuListItemDescriptor = function() {};
Mscrm.MenuListItemDescriptor.prototype = {
    id: null,
    displayName: null,
    content: null,
    title: null,
    cssClass: null,
    data: null,
    tabIndex: null
};
Mscrm.MenuSectionDescriptor = function() {};
Mscrm.MenuSectionDescriptor.prototype = {
    id: null,
    displayName: null,
    cssClass: null,
    data: null,
    menuListItems: null,
    clickHandler: null
};
Mscrm.FlyOutOptions = function() {
    this.$4_0 = false;
    this.$S_0 = [];
    this.$f_0 = window.LOCID_FLYOUT_CLOSE;
    this.$B_0 = 0;
    this.$X_0 = 0;
    this.$R_0 = false;
    this.$o_0 = true;
    this.$p_0 = false;
    this.$Z_0 = null;
    this.$i_0 = "";
    this.$e_0 = true;
    this.$K_0 = true;
    this.$L_0 = true;
    this.$l_0 = 150;
    this.$H_0 = true;
    this.$u_0 = true;
    this.$Q_0 = false;
    this.$k_0 = true
};
Mscrm.FlyOutOptions.prototype = {
    $4_0: false,
    $S_0: null,
    $10_0: false,
    $f_0: null,
    $B_0: 0,
    $X_0: 0,
    $l_0: 0,
    $R_0: false,
    $o_0: false,
    $p_0: false,
    $Z_0: null,
    $A_0: null,
    $i_0: null,
    $e_0: false,
    $K_0: false,
    $L_0: false,
    $13_0: false,
    $H_0: false,
    $u_0: false,
    $Q_0: false,
    $k_0: false,
    get_isDirty: function() { return this.$4_0 },
    set_isDirty: function(value) {
        this.$4_0 = value;
        return value
    },
    get_closeTooltip: function() { return this.$f_0 },
    set_closeTooltip: function(value) {
        if (this.$f_0 !== value) {
            this.$f_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_width: function() { return this.$B_0 },
    set_width: function(value) {
        if (this.$B_0 !== value) {
            this.$B_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_minHeight: function() { return this.$l_0 },
    set_minHeight: function(value) {
        if (this.$l_0 !== value) {
            this.$l_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_height: function() { return this.$X_0 },
    set_height: function(value) {
        if (this.$X_0 !== value) {
            this.$X_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_showCloseButton: function() { return this.$R_0 },
    set_showCloseButton: function(value) {
        if (this.$R_0 !== value) {
            this.$R_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_showButtonPane: function() { return this.$o_0 },
    set_showButtonPane: function(value) {
        if (this.$o_0 !== value) {
            this.$o_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_showTitlePane: function() { return this.$p_0 },
    set_showTitlePane: function(value) {
        if (this.$p_0 !== value) {
            this.$p_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_title: function() { return this.$Z_0 },
    set_title: function(value) {
        if (this.$Z_0 !== value) {
            this.$Z_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_position: function() { return this.$A_0 },
    set_position: function(value) {
        this.$A_0 = value;
        return value
    },
    get_draggable: function() { return this.$13_0 },
    set_draggable: function(value) {
        this.$13_0 = value;
        return value
    },
    get_modal: function() { return this.$K_0 },
    set_modal: function(value) {
        this.$K_0 = value;
        return value
    },
    get_hideWithClickOnOverlay: function() { return this.$L_0 },
    set_hideWithClickOnOverlay: function(value) {
        this.$L_0 = value;
        return value
    },
    get_focusOnFirstTabbable: function() { return this.$u_0 },
    set_focusOnFirstTabbable: function(value) {
        this.$u_0 = value;
        return value
    },
    get_letjQueryHandleTabbing: function() { return this.$Q_0 },
    set_letjQueryHandleTabbing: function(value) {
        this.$Q_0 = value;
        return value
    },
    get_isInDelayMode: function() { return this.$k_0 },
    set_isInDelayMode: function(value) {
        this.$k_0 = value;
        return value
    },
    getButtons: function() { return Array.clone(this.$S_0) },
    setButtons: function(buttons) {
        this.$10_0 && Mscrm.CrmDebug.assert(true, "Cannot reset the buttons of flyout once they are initialized");
        this.$S_0 = buttons;
        this.$4_0 = true
    },
    toJQueryDialogOptions: function() {
        var $v_0 = {};
        $v_0.autoOpen = false;
        $v_0.modal = this.$K_0;
        $v_0.draggable = this.$13_0;
        $v_0.resizable = false;
        $v_0.closeText = this.$f_0;
        $v_0.dialogClass = this.$i_0;
        $v_0.closeOnEscape = this.$e_0;
        $v_0.minHeight = this.$l_0;
        if (this.$B_0 > 0) $v_0.width = this.$B_0;
        if (this.$X_0 > 0) $v_0.height = this.$X_0;
        if (!isNullOrEmptyString(this.$Z_0)) $v_0.title = this.$Z_0;
        if (!IsNull(this.$A_0)) $v_0.position = this.$A_0;
        if (!this.$10_0) {
            $v_0.buttons = [];
            for (var $v_1 = 0;
                $v_1 < this.$S_0.length;
                $v_1++
            ) Array.add($v_0.buttons, { text: this.$S_0[$v_1].$y_0, click: this.$S_0[$v_1].$11_0 });
            this.$10_0 = true
        }
        return $v_0
    },
    get_dialogClass: function() { return this.$i_0 },
    set_dialogClass: function(value) {
        if (this.$i_0 !== value) {
            this.$i_0 = value;
            this.$4_0 = true
        }
        return value
    },
    get_applyAnchorClassChange: function() { return this.$H_0 },
    set_applyAnchorClassChange: function(value) {
        this.$H_0 = value;
        return value
    },
    get_closeOnEscape: function() { return this.$e_0 },
    set_closeOnEscape: function(value) {
        if (this.$e_0 !== value) {
            this.$e_0 = value;
            this.$4_0 = true
        }
        return value
    }
};
Mscrm.jQueryDialogOptionsImportHelper = function() {};
Mscrm.jQueryDialogOptionsImportHelper.$$cctor = function() {
    Mscrm.jQueryDialogOptionsImportHelper.registerjQueryPluginOptions("jQueryDialogOptions")
};
Mscrm.jQueryDialogOptionsImportHelper
    .registerjQueryPluginOptions = function(pluginOptionsClassName) { pluginOptionsClassName = Object.getName() };
Mscrm.SwitchProcessFlyoutViewModel = function(currentEntityId, currentEntityTypeName) {
    this.$T_0 = currentEntityId;
    this.$h_0 = currentEntityTypeName
};
Mscrm.SwitchProcessFlyoutViewModel.prototype = {
    $T_0: null,
    $h_0: null,
    populateProcessInstanceandDefinitionList: function() {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(RemoteCommandResult, Mscrm.ErrorInformation),
            $v_1 = new RemoteCommand("ProcessControl", "RetrieveMultipleProcessInstances", null);
        $v_1.IncludeContextInPath = true;
        $v_1.SetParameter("currentEntityId", this.$T_0);
        $v_1.SetParameter("entityLogicalName", Xrm.Page.data.entity.getEntityName());
        var $$t_4 = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($p1_0.Success) $v_0.resolve($p1_0.ReturnValue);
            else $v_0.reject($p1_0.ReturnValue)
        });
        return $v_0.promise()
    },
    switchProcess: function(newProcessId, newProcessInstanceId) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(RemoteCommandResult, Mscrm.ErrorInformation),
            $v_1 = new RemoteCommand("ProcessControl", "ChangeProcessAndStage", null);
        $v_1.SetParameter("currentEntityId", this.$T_0);
        $v_1.SetParameter("currentEntityTypeName", this.$h_0);
        $v_1.SetParameter("newProcessId", newProcessId);
        $v_1.SetParameter("newProcessInstanceId", newProcessInstanceId);
        var $$t_6 = this;
        $v_1.Execute(function($p1_0, $p1_1) {
            if ($p1_0.Success) $v_0.resolve($p1_0.ReturnValue);
            else $v_0.reject($p1_0.ReturnValue)
        });
        return $v_0.promise()
    }
};
Mscrm.InlineFlyOutDialog = function() { Mscrm.InlineFlyOutDialog.initializeBase(this) };
Mscrm.InlineFlyOutDialog.prototype = {
    setFocusOnFirstElement: function() {
        var $v_0 = this.get_firstTabAbleElement().id, $v_1 = Xrm.Page.ui.controls.get($v_0);
        if (!IsNull($v_1)) {
            var $$t_2 = this;
            window.setTimeout(function() { $v_1.setFocus() }, 0)
        } else Mscrm.FlyOutDialog.prototype.setFocusOnFirstElement.call(this)
    },
    configureButtons: function() {
        if (this.$x_0) {
            var $v_0 = [];
            Array.add($v_0, new Mscrm.FlyOutButton(window.LOCID_FLYOUT_CONFIRM, this.$$d_onConfirmButtonClick));
            this.$0_0.setButtons($v_0)
        } else Mscrm.FlyOutDialog.prototype.configureButtons.call(this)
    }
};
Mscrm.NotificationFlyout = function(anchor, messageContainer, contentContainer) {
    this.$$d_$25_1 = Function.createDelegate(this, this.$25_1);
    this.$$d_$26_1 = Function.createDelegate(this, this.$26_1);
    this.$$d_$21_1 = Function.createDelegate(this, this.$21_1);
    Mscrm.NotificationFlyout.initializeBase(this, [anchor, messageContainer, contentContainer]);
    Mscrm.CrmDebug.assert(!IsNull(anchor), "Parameter named 'anchor' is null or undefined!");
    Mscrm.CrmDebug.assert(!IsNull(messageContainer), "Parameter named 'messageContainer' is null or undefined!");
    Mscrm.CrmDebug.assert(!IsNull(contentContainer), "Parameter named 'contentContainer' is null or undefined!");
    if (!IsNull(anchor) && !IsNull(messageContainer)) {
        this._anchor = anchor;
        this._containerElement = messageContainer;
        this._contentContainer = contentContainer;
        this._forceFlipped = false;
        this._arrowIcon = $P_CRM("<span></span>").addClass("ms-crm-Inline-ErrorArrowIcon")
            .append($P_CRM(Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create("/_imgs/inlineedit/arrow.png")))
                .attr("alt", "")).hide().insertAfter(this._containerElement);
        $P_CRM(window).bind("resize", this.$$d_onPageResize)
    }
    this.$12_1 = this.$$d_$21_1;
    this.$1E_1 = this.$$d_$26_1;
    this.$1D_1 = this.$$d_$25_1;
    $addHandler(document.documentElement, "click", this.$12_1);
    $addHandler(window.parent.document, "click", this.$12_1)
};
Mscrm.NotificationFlyout.prototype = {
    $q_1: null,
    $12_1: null,
    $1E_1: null,
    $1D_1: null,
    $21_1: function($p0) {
        if ($p0.target === this._anchor.get(0)) return;
        if ($p0.target !== this._containerElement.get(0)) {
            for (var $v_0 = 0;
                $v_0 < this._containerElement.children().length;
                ++$v_0
            ) if ($p0.target === this._containerElement.children().get(0)) return;
            this.hideNotifications()
        }
    },
    $26_1: function($p0) { ($p0.keyCode === 9 || $p0.keyCode === 27) && this.hideNotifications() },
    $25_1: function($p0) { $p0.keyCode === 27 && this.hideNotifications() },
    showNotifications: function(notificationMessage) {
        if (!notificationMessage || notificationMessage.length <= 0 || !notificationMessage[0].messages) return;
        var $v_0 = notificationMessage[0];
        if ($v_0 && $v_0.messages.length > 0) {
            this._containerElement.text($v_0.messages[0]);
            if ($v_0.actions && $v_0.actions.length > 0) {
                this._containerElement.addClass("ms-crm-Inline-Recommendation");
                if ($v_0.actions.length === 1)
                    this._containerElement.append(this.$1d_1($v_0.actions[0].message, $v_0.actions[0].actions));
                else
                    for (var $v_1 = 0; $v_1 < $v_0.actions.length; ++$v_1) {
                        var $v_2 = document.createElement("div");
                        Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Inline-multipleRecommendation");
                        var $v_3 = $P_CRM($v_2);
                        $v_3.append(this.$1e_1($v_0.actions[$v_1].message, $v_0.actions[$v_1].actions));
                        this._containerElement.append($v_3);
                        this._containerElement.append(this.$1L_1())
                    }
            }
        }
        var $$t_5 = this;
        window.setTimeout(function() {
                $$t_5._arrowIcon.show();
                $$t_5._containerElement.show();
                $$t_5._anchor.show();
                $$t_5.configureFlyoutPosition($$t_5._anchor, $$t_5._containerElement, $$t_5._arrowIcon)
            },
            0)
    },
    $1d_1: function($p0, $p1) {
        var $v_0 = document.createElement("div");
        Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Inline-RecommendationText");
        var $v_1 = $P_CRM($v_0);
        $v_1.text($p0);
        var $v_2 = document.createElement("div"), $v_3 = $P_CRM($v_2);
        $v_3.append($v_1);
        $v_3.append(this.$1M_1($p1));
        $v_3.append(this.$1L_1());
        return $v_3
    },
    $1e_1: function($p0, $p1) {
        var $v_0 = document.createElement("div"), $v_1 = document.createElement("div");
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Inline-RecommendationText multipleRecommendation");
        var $v_2 = $P_CRM($v_1);
        $v_2.text($p0);
        var $v_3 = $P_CRM($v_0);
        $v_3.append($v_2);
        $v_3.append(this.$1M_1($p1));
        return $v_3
    },
    $1M_1: function($p0) {
        var $v_0 = window.LOCID_PBL_REC_APPLY_LABEL,
            $v_1 = document.createElement("button"),
            $v_2 = isNaN(parseInt(this._containerElement.parent().attr("TabIndex")))
                ? 0
                : parseInt(this._containerElement.parent().attr("TabIndex"));
        $v_1.setAttribute("tabindex", $v_2 - 4);
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Inline-RecommendationApply");
        $addHandler($v_1, "keydown", this.$1D_1);
        var $v_3 = $P_CRM($v_1), $$t_6 = this;
        this.$q_1 = function($p1_0) {
            $p0[0]();
            $$t_6.hideNotifications()
        };
        $v_3.click(this.$q_1);
        $v_3.text($v_0);
        return $v_3
    },
    $1L_1: function() {
        var $v_0 = window.LOCID_PBL_REC_DISMISS_LABEL,
            $v_1 = document.createElement("button"),
            $v_2 = isNaN(parseInt(this._containerElement.parent().attr("TabIndex")))
                ? 0
                : parseInt(this._containerElement.parent().attr("TabIndex"));
        $v_1.setAttribute("tabindex", $v_2 - 3);
        Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Inline-RecommendationDismiss");
        $addHandler($v_1, "keydown", this.$1E_1);
        var $v_3 = $P_CRM($v_1), $$t_5 = this;
        this.$q_1 = function($p1_0) { $$t_5.hideNotifications() };
        $v_3.click(this.$q_1);
        $v_3.text($v_0);
        return $v_3
    },
    hideError: function(hideAnchor) { this.hideNotifications(hideAnchor) },
    hideNotifications: function(hideAnchor) {
        var $$t_1 = this;
        window.setTimeout(function() {
                !IsNull(hideAnchor) && hideAnchor && $$t_1._anchor.hide();
                $$t_1._containerElement.removeClass("ms-crm-Inline-Recommendation");
                $$t_1._arrowIcon.hide();
                $$t_1._containerElement.hide()
            },
            0)
    }
};
Mscrm.RollupErrorFlyout = function(contentContainer) { this.$N_0 = contentContainer };
Mscrm.RollupErrorFlyout.prototype = {
    $1T_0: function() {
        var $v_0 = new Mscrm.FlyOutDialog;
        $v_0.$0_0.set_showTitlePane(true);
        $v_0.$0_0.set_title(window.LOCID_ROLLUPERROR_TITLE);
        $v_0.$0_0.set_width(700);
        $v_0.$0_0.set_height(188);
        $v_0.$A_0 = "bottom";
        $v_0.$0_0.set_showButtonPane(true);
        $v_0.$0_0.set_showCloseButton(true);
        $v_0.$0_0.$K_0 = true;
        $v_0.$0_0.$Q_0 = true;
        $v_0.$0_0.$L_0 = false;
        $v_0.$0_0.$H_0 = false;
        $v_0.$0_0.set_closeOnEscape(true);
        $v_0.$g_0 = true;
        $v_0.setContent(this.$1Y_0());
        $v_0.dialogChrome().addClass("rollupError");
        return $v_0
    },
    $1a_0: function($p0, $p1) {
        var $v_0 = $p0.find("#RollupErrorElementId");
        $v_0.html(CrmEncodeDecode.CrmHtmlEncode($p1));
        var $v_1 = $p0.find("div.ui-dialog-buttonpane button");
        $v_1[0].id = "rollup-errorok";
        XUI.Html.DomUtils.GetFirstChild($v_1[0]).innerHTML = window.LOCID_ROLLUP_DIALOG_OK;
        $v_1[0].title = window.LOCID_ROLLUP_DIALOG_OK;
        $v_1[1].style.display = "none"
    },
    $1Y_0: function() {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/businessruleeditor/erroricon.png")),
            $v_1 = String
                .format("<div><div class='rollupRuntimeError-dialog-content'><div class='rollupRuntimeError-dialog-icon' title='{0}'><img src='{1}' class='{2}'></img></div><div class='rollupRuntimeError-dialog-area'><div class='rollupRuntimeError-dialog-detail rollupRuntimeError-dialog-detailAttribute' id='{3}'></div></div></div></div>", CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_ROLLUPERROR_TITLE), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode("RollupErrorElementId")),
            $v_2 = $P_CRM($v_1);
        return $v_2
    },
    show: function(errorMessage) {
        if (!this.$2_0) this.$2_0 = this.$1T_0();
        var $v_0 = this.$2_0.dialogChrome(), $v_1 = this.$N_0.outerHeight(), $v_2 = Math.min($v_1, 188);
        this.$2_0.$0_0.set_height($v_2);
        this.$2_0.show(this.$N_0);
        $v_0.css("top", "50%");
        $v_0.css("left", "50%");
        $v_0.css("margin-top", "-" + ($v_2 / 2).toString() + "px");
        $v_0.css("margin-left", "-350px");
        this.$1a_0($v_0, errorMessage)
    },
    $N_0: null,
    $2_0: null
};
Mscrm.FormSectionNavigationFlyOut = function(element) {
    this.$$d_$1t_1 = Function.createDelegate(this, this.$1t_1);
    this.$$d_$1J_1 = Function.createDelegate(this, this.$1J_1);
    this.$$d_$24_1 = Function.createDelegate(this, this.$24_1);
    this.$$d_$1V_1 = Function.createDelegate(this, this.$1V_1);
    this.$$d_$1v_1 = Function.createDelegate(this, this.$1v_1);
    this.$$d_$23_1 = Function.createDelegate(this, this.$23_1);
    this.$$d_$28_1 = Function.createDelegate(this, this.$28_1);
    this.$$d_$29_1 = Function.createDelegate(this, this.$29_1);
    this.$1R_1 = "<tr id='${id}' attribute-uniqueid='${uniqueIdentifier}'><td id='" +
        CrmEncodeDecode.CrmHtmlAttributeEncode("flyoutFormSection_Cell") +
        "'><a tabindex ='0' id='" +
        CrmEncodeDecode.CrmHtmlAttributeEncode("flyoutFormSection_Anchor") +
        "' class='ms-crm-FormSectionNavigation'>${label}</a></td></tr>";
    Mscrm.FormSectionNavigationFlyOut.initializeBase(this);
    this.$D_1 = $P_CRM("#formContainer");
    this.$j_1 = $P_CRM("#FormSecNavigationControl-Icon")
};
Mscrm.FormSectionNavigationFlyOut.prototype = {
    $D_1: null,
    $j_1: null,
    $C_1: null,
    $t_1: null,
    $J_1: null,
    $P_1: null,
    $c_1: null,
    $d_1: false,
    $1_1: null,
    $17_1: null,
    $Y_1: 0,
    dispose: function() {
        !IsNull(this.$J_1) && this.$J_1.unbind();
        !IsNull(this.$1_1) && this.$1_1.dispose();
        Mscrm.Utilities.destroyObject(this)
    },
    launch: function() {
        IsNull(this.$1_1) && this.$1p_1();
        this.$1q_1();
        if (!this.$Y_1) this.$1_1.$0_0.set_height(30);
        else this.$1_1.$0_0.set_height(this.$Y_1 <= 10 ? this.$Y_1 * 30 : 300);
        this.$2H_1();
        this.$1_1.show(this.$j_1, this.$D_1);
        this.$J_1 = $P_CRM("#flyoutFormSection_Container");
        this.$J_1.mouseleave(this.$$d_$29_1);
        this.$J_1.mouseenter(this.$$d_$28_1);
        this.$J_1.removeClass("ui-dialog-content");
        this.$J_1.addClass("ms-crm-FormSectionNavigationFlyout-Dialog-Content");
        this.$J_1.focusout(this.$$d_$23_1);
        this.$t_1 = $P_CRM("#flyoutFormSection_Container_flyOut");
        this.$t_1.attr("tabindex", "0");
        this.$c_1 = $P_CRM("body");
        this.$c_1.click(this.$$d_$1v_1);
        this.$c_1.bind("touchstart", this.$$d_$1v_1);
        this.$t_1.removeClass("ui-flyout-dialog");
        this.$t_1.addClass("ms-crm-FormSectionNavigationFlyout-Dialog");
        this.$C_1 = $P_CRM("td", this.$P_1);
        if (!IsNull(this.$C_1))
            for (var $v_0 = 0; $v_0 < this.$C_1.length; $v_0++) {
                this.$C_1[$v_0].title = XUI.Html.GetText(this.$C_1[$v_0]);
                $P_CRM(this.$C_1[$v_0]).click(this.$$d_$1V_1);
                $P_CRM(this.$C_1[$v_0]).keydown(this.$$d_$24_1);
                (this.$Y_1 > 10 || this.$C_1.length > 10) &&
                    $P_CRM("a", this.$C_1[$v_0]).length > 0 &&
                    $P_CRM($P_CRM("a", this.$C_1[$v_0])[0]).addClass("ms-crm-FormSectionNavigation-On-Scroll")
            }
        this.$P_1 = $P_CRM("#flyoutFormSection_ContentTable")
    },
    $1v_1: function($p0) {
        if (!IsNull(this.$1_1) &&
            $p0.target.id !== "#flyoutFormSection_Container_flyOut".substr(1) &&
            $p0.target.id !== "#flyoutFormSection_Container".substr(1) &&
            $p0.target.id !== "#flyoutFormSection_ContentTable".substr(1) &&
            $p0.target.id !== "flyoutFormSection_Anchor" &&
            $p0.target.id !== "flyoutFormSection_Cell") {
            this.$d_1 = true;
            this.$1J_1();
            $p0.stopPropagation()
        }
    },
    $1V_1: function($p0) {
        if (!IsNull($p0.currentTarget) && !IsNull($p0.currentTarget.parentNode)) {
            var $v_0 = $p0.currentTarget.parentNode,
                $v_1 = $v_0.getAttribute("attribute-uniqueId"),
                $v_2 = this.$17_1[$v_1];
            if (!IsNull($v_2)) {
                var $v_3 = $P_CRM(window.top.document.getElementById("TabNode_tab0Tab-main"));
                if (IsNull($v_3)) return;
                else $v_3.click();
                var $$t_5 = this;
                window.setTimeout(function() {
                        $$t_5.$1_1.hide();
                        $v_2.getDisplayState() === "collapsed" && $v_2.setDisplayState("expanded");
                        $v_2.setFocus()
                    },
                    200);
                $p0.stopPropagation()
            }
        }
    },
    $24_1: function($p0) {
        if ($p0.which === 13) {
            $p0.stopPropagation();
            $p0.preventDefault();
            this.$1V_1($p0)
        }
    },
    $29_1: function($p0) {
        if (window.UseTabletExperience) return;
        this.$d_1 = true;
        window.setTimeout(this.$$d_$1J_1, 600)
    },
    $28_1: function($p0) { this.$d_1 = false },
    $23_1: function($p0) { window.setTimeout(this.$$d_$1t_1, 0) },
    $1t_1: function() {
        if (this.$J_1.closest("#flyoutFormSection_Container").has(":focus").length <= 0) {
            this.$d_1 = true;
            this.$1J_1()
        }
    },
    $1J_1: function() {
        if (this.$d_1) {
            this.$1_1.hide();
            this.$C_1.unbind("clicK");
            this.$C_1.unbind("keydown");
            this.$c_1.unbind("click");
            this.$c_1.unbind("touchstart")
        }
    },
    $1p_1: function() {
        this.$1_1 = new Mscrm.FlyOutDialog;
        this.$1_1.$0_0.set_showButtonPane(false);
        this.$1_1.$0_0.set_showCloseButton(false);
        this.$1_1.$0_0.set_closeOnEscape(true);
        this.$1_1.$0_0.set_showTitlePane(false);
        this.$1_1.$0_0.$K_0 = false;
        this.$1_1.$0_0.$L_0 = false;
        this.$1_1.$0_0.$H_0 = false;
        this.$1_1.$M_0 = 0;
        this.$1_1.$0_0.set_width(246);
        this.$1_1.$A_0 = "custom";
        this.$1_1.$0_0.$Q_0 = true;
        var $v_0 =
            $P_CRM("<div id='flyoutFormSection_Container'><table id='flyoutFormSection_ContentTable' class='ms-crm-FlyoutContentTableWidth'></table></div>");
        this.$1_1.setContent($v_0);
        this.$1_1.setButtonTooltip(1, "");
        this.$1_1.setButtonTooltip(2, "")
    },
    $1q_1: function() {
        if (IsNull(this.$P_1)) this.$P_1 = $P_CRM("#flyoutFormSection_ContentTable");
        this.$P_1.html("");
        var $v_0 = this.$1u_1();
        if ($v_0.length > 0) $P_CRM.tmpl(this.$1R_1, $v_0).appendTo(this.$P_1);
        else
            $P_CRM.tmpl("<div id='flyoutFormSection_ContentDiv_No_Tabs'>${label}</div>",
                    new Mscrm.TemplateData(Xrm.Internal.getResourceString("Form_Section_No_Tabs"), null, null))
                .appendTo(this.$P_1)
    },
    $2H_1: function() {
        var $v_0 = this.$j_1.width();
        this.$1_1.$O_0 = this.$j_1.offset().left + $v_0;
        if (window.LOCID_UI_DIR === "RTL") this.$1_1.$O_0 = this.$1_1.$O_0 - (250 + $v_0);
        this.$1_1.$s_0 = this.$j_1.offset().top + 28
    },
    $1u_1: function() {
        var $v_0 = [], $v_1, $v_2 = Xrm.Page.ui.tabs;
        this.$17_1 = {};
        this.$Y_1 = 0;
        for (var $v_3 = $v_2.get(), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            var $v_5 = $v_3[$v_4];
            if ($v_5.getVisible() && !isNullOrEmptyString($v_5.getLabel())) {
                if (Xrm.Internal.isTurboForm()) {
                    var $v_6 = $v_5;
                    if (!$v_6.getLabelVisible()) continue
                }
                $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString();
                Array.add($v_0,
                    new Mscrm.TemplateData(CrmEncodeDecode.CrmHtmlEncode($v_5.getLabel()),
                        CrmEncodeDecode.CrmHtmlAttributeEncode("flyoutFormSection_" + $v_5.getName()),
                        $v_1));
                this.$17_1[$v_1] = $v_5;
                this.$Y_1++
            }
        }
        return $v_0
    }
};
Mscrm.TemplateData = function($p0, $p1, $p2) {
    this.label = $p0;
    this.id = $p1;
    this.uniqueIdentifier = $p2
};
Mscrm.TemplateData.prototype = { label: null, id: null, uniqueIdentifier: null };
Mscrm.SwitchProcessFlyOut = function(contentContainer, currentEntityId, currentEntityTypeName) {
    this.$$d_$1w_0 = Function.createDelegate(this, this.$1w_0);
    this.$1U_0 = Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.ProcessUnification);
    this.$14_0 = new Sys.EventHandlerList;
    this.$1G_0 = -1;
    this.$N_0 = contentContainer;
    this.$T_0 = currentEntityId;
    this.$h_0 = currentEntityTypeName;
    this.$18_0 = new Mscrm.SwitchProcessFlyoutViewModel(this.$T_0, this.$h_0)
};
Mscrm.SwitchProcessFlyOut.prototype = {
    $6_0: false,
    $18_0: null,
    $T_0: null,
    $h_0: null,
    $N_0: null,
    $2_0: null,
    $U_0: null,
    $r_0: true,
    $n_0: null,
    $3_0: null,
    get_$9_0: function() { return this.$2_0.dialogChrome().find(".ms-crm-ProcessSwitcher-ProcessList") },
    get_$1o_0: function() {
        return this.$2_0.dialogChrome().find(".ui-dialog-titlebar").outerHeight() +
            this.$2_0.dialogChrome().find(".ui-dialog-buttonpane").outerHeight()
    },
    $1T_0: function() {
        this.$3_0 = new Mscrm.FlyOutDialog;
        this.$3_0.setContent(this.$1Y_0());
        this.$3_0.$0_0.set_showTitlePane(true);
        this.$3_0.$0_0.set_title(this.$6_0 ? window.LOCID_PROC_ARCSWITCH_TITLE : window.LOCID_PROCESS_SWITCH_TITLE);
        this.$3_0.$0_0.set_width(600);
        this.$3_0.$0_0.set_height(600);
        this.$3_0.$A_0 = "bottom";
        this.$3_0.$0_0.set_showCloseButton(true);
        this.$3_0.$0_0.set_showButtonPane(true);
        this.$3_0.$0_0.$K_0 = true;
        this.$3_0.$0_0.$Q_0 = true;
        this.$3_0.$0_0.$L_0 = false;
        this.$3_0.$0_0.$H_0 = false;
        var $$t_3 = this;
        this.$3_0.bind("flyout-confirmed",
            function($p1_0) {
                var $v_0 = $$t_3.$3_0.dialogChrome().find("input:checked").data("process").toString(),
                    $v_1 = $$t_3.$3_0.dialogChrome().find("input:checked").data("processinstance").toString();
                $v_0 !== $$t_3.$U_0 && $$t_3.$2L_0($v_0, $v_1)
            });
        return this.$3_0
    },
    $1a_0: function($p0) {
        var $v_0 = $p0.find(".ui-dialog-titlebar-close");
        $v_0[0].id = "SwitchProcess-Close";
        var $v_1 = $p0.find("div.ui-dialog-buttonpane button");
        if ($v_1.length === 2) {
            $v_1[0].id = "SwitchProcess-Select";
            var $v_2 = $v_1.first();
            $v_2.children("span").text(window.LOCID_PROCESS_SWITCH_SELECT);
            $v_1[1].id = "SwitchProcess-Cancel";
            $v_2 = $v_1.last();
            $v_2.children("span").text(this
                .$6_0
                ? window.LOCID_PROC_ARCSWITCH_BACK
                : window.LOCID_PROCESS_SWITCH_CANCEL);
            this.$2B_0($v_2)
        }
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) $v_1[$v_3].title = XUI.Html.GetText($v_1[$v_3]);
        this.$2C_0($p0)
    },
    $2B_0: function($p0) {
        if (this.$6_0) {
            var $$t_2 = this;
            $p0.click(function($p1_0) { $$t_2.openSwitchProcessView() })
        }
    },
    $2C_0: function($p0) {
        var $v_0 = $P_CRM(".ui-dialog-titlebar .ui-dialog-titlebar-close", $p0), $$t_3 = this;
        $v_0.click(function($p1_0) {
            $$t_3.$6_0 = false;
            $$t_3.$1S_0()
        })
    },
    $1S_0: function() {
        this.$2_0.hide();
        this.$2_0 = null
    },
    $1Y_0: function() {
        var $v_0 = String
                .format("\r\n\t\t\t<div>\r\n\t\t\t\t<div class='ms-crm-ProcessSwitcher-Subtitle' title='{1}'>{0}</div>\r\n\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessList' role='Radiogroup'></div>\r\n\t\t\t</div>", CrmEncodeDecode.CrmHtmlEncode(this.$6_0 ? window.LOCID_PROC_ARCSWITCH_SUBTITLE : window.LOCID_PROCESS_SWITCH_SUBTITLE), CrmEncodeDecode.CrmHtmlAttributeEncode(this.$6_0 ? window.LOCID_PROC_ARCSWITCH_SUBTITLE : window.LOCID_PROCESS_SWITCH_SUBTITLE)),
            $v_1 = $P_CRM($v_0);
        this.$1W_0();
        return $v_1
    },
    $1W_0: function() {
        if (!this.$1U_0) {
            var $$t_6 = this,
                $v_0 = function($p1_0) { $$t_6.$1x_0($p1_0) },
                $$t_7 = this,
                $v_1 = function($p1_0) { $$t_7.$1z_0($p1_0) };
            Xrm.Internal.messages.retrieveFilteredProcesses(Xrm.Page.data.entity.getEntityName()).then($v_0, $v_1)
        } else {
            var $$t_8 = this, $$t_9 = this;
            $P_CRM.when(this.$18_0.populateProcessInstanceandDefinitionList())
                .done(function($p1_0) { $$t_8.$1y_0($p1_0) }).fail(function($p1_0) {})
        }
    },
    $1y_0: function($p0) {
        this.get_$9_0().empty();
        var $v_0 = this.get_$9_0(), $v_1 = $get("processControlProcessInfo");
        if ($v_1) this.$U_0 = $v_1.getAttribute("data-id");
        var $v_2 = null;
        if (!IsNull($p0.toString())) $v_2 = JSON.parse($p0.toString());
        if (!$v_2 ||
            !$v_2.ProcessInstances && !$v_2.ProcessDefinitions ||
            !$v_2.ProcessInstances.length && !$v_2.ProcessDefinitions.length) {
            this.get_$9_0().append("<p>" +
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_SWITCH_NONE_FOUND) +
                "</p>");
            return
        } else {
            for (var $v_3 = true, $$arr_5 = $v_2.ProcessInstances, $$len_6 = $$arr_5.length, $$idx_7 = 0;
                $$idx_7 < $$len_6;
                ++$$idx_7) {
                var $v_4 = $$arr_5[$$idx_7];
                if ($v_4.StatusCodeName === "Active" && !this.$6_0 || $v_4.StatusCodeName !== "Active" && this.$6_0) {
                    $v_3 = false;
                    break
                }
            }
            if ($v_2.ProcessDefinitions.length && ($v_2.ProcessDefinitions && !this.$6_0)) $v_3 = false;
            $v_3 &&
                this.get_$9_0().append("<p>" +
                    CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_SWITCH_NONE_FOUND) +
                    "</p>")
        }
        for (var $$arr_9 = $v_2.ProcessInstances, $$len_A = $$arr_9.length, $$idx_B = 0; $$idx_B < $$len_A; ++$$idx_B) {
            var $v_5 = $$arr_9[$$idx_B];
            if (!this
                .$6_0 &&
                !$v_5.CurrentProcessInstanceState ||
                this.$6_0 && $v_5.CurrentProcessInstanceState === 1) {
                var $v_6 = this.$2G_0($v_5), $v_7 = $P_CRM($v_6);
                $v_0.append($v_7);
                this.$U_0 === $v_5.ProcessDefinitionId && $v_7.find("input").attr("checked", "checked");
                this.$1I_0($v_7);
                this.$1O_0($v_7)
            }
        }
        if (!this.$6_0) {
            for (var $$arr_F = $v_2.ProcessDefinitions, $$len_G = $$arr_F.length, $$idx_H = 0;
                $$idx_H < $$len_G;
                ++$$idx_H) {
                var $v_A = $$arr_F[$$idx_H], $v_B = this.$2F_0($v_A), $v_C = $P_CRM($v_B);
                $v_0.append($v_C);
                this.$1I_0($v_C);
                this.$1O_0($v_C)
            }
            var $v_8 = this.$2D_0(), $v_9 = $P_CRM($v_8);
            $v_0.append($v_9);
            this.$1j_0($v_9);
            this.$1i_0($v_9)
        }
        this.$z_0(true);
        this.$1N_0();
        this.$1A_0($v_0)
    },
    $1z_0: function($p0) {
        this.get_$9_0().empty();
        this.$z_0(true);
        if (!IsNull($p0.get_organizationServiceFault()))
            switch ($p0.get_organizationServiceFault().get_errorCode()) {
            case -2147220960:
                this.get_$9_0().text(window.LOCID_PROCESS_SWITCH_NONE_FOUND);
                break;
            default:
                this.get_$9_0().text($p0.get_localizedMessage());
                break
            }
        else this.get_$9_0().text($p0.get_localizedMessage())
    },
    $1x_0: function($p0) {
        this.get_$9_0().empty();
        var $v_0 = this.get_$9_0(), $v_1 = $get("processControlProcessInfo");
        if ($v_1) this.$U_0 = $v_1.getAttribute("data-id");
        for (var $v_2 = 0; $v_2 < $p0.processes.get_count(); $v_2++) {
            var $v_3 = this.$2E_0($p0.processes.get_item($v_2)), $v_4 = $P_CRM($v_3);
            $v_0.append($v_4);
            this.$U_0 === $p0.processes.get_item($v_2).getValue("workflowid").toString() &&
                $v_4.find("input").attr("checked", "checked");
            this.$1I_0($v_4)
        }
        this.$z_0(true);
        if (!$p0.processes.get_count()) {
            this.get_$9_0().append("<p>" +
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_SWITCH_NONE_FOUND) +
                "</p>");
            return
        }
        this.$1N_0();
        this.$1A_0($v_0)
    },
    $1I_0: function($p0) {
        var $$t_2 = this;
        $p0.click(function($p1_0) {
            $p0.find("input").attr("checked", "checked");
            $$t_2.$1A_0($$t_2.get_$9_0())
        })
    },
    $1N_0: function() {
        this.$n_0 = this.get_$9_0().find("input");
        var $$t_1 = this;
        this.$n_0.bind("change", function($p1_0) { $$t_1.$1A_0($$t_1.get_$9_0()) })
    },
    $1j_0: function($p0) {
        var $$t_2 = this;
        $p0.click(function($p1_0) { $$t_2.openArchivedProcessView() })
    },
    $1i_0: function($p0) { $p0.keydown(this.$$d_$1w_0) },
    $1w_0: function($p0) { $p0.which === 13 && $p0.target.click() },
    $1O_0: function($p0) { $p0.keydown(this.$$d_$1w_0) },
    openArchivedProcessView: function() { this.selectView(true) },
    openSwitchProcessView: function() { this.selectView(false) },
    selectView: function(selectArchivedProcessView) {
        this.$6_0 !== selectArchivedProcessView && this.$2_0 && this.$1S_0();
        this.$6_0 = selectArchivedProcessView;
        this.show()
    },
    $2E_0: function($p0) {
        var $v_0 = $p0.getValue("name").toString(), $v_1 = window.LOCID_PROCESS_NEW_PROCESS;
        return String
            .format("<div class='ms-crm-ProcessSwitcher-Process' tabindex='0' role='radio' aria-checked='false'>\r\n\t\t\t\t\t<input type='radio' name='processSwitcherProcess' data-process='{6}' data-processinstance='{7}' value='{0}'\r\n\t\t\t\t\t\tid='SwitchProcess-Process-{0}'\r\n\t\t\t\t\t\tclass='ms-crm-ProcessSwitcher-Radio' title='{4}' {3} tabindex='-1'/>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessTitle' title='{4}'>{1}</div>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessDescription' title='{5}'>{2}</div>\r\n\t\t\t\t</div>", CrmEncodeDecode.CrmHtmlAttributeEncode($p0.getValue("workflowid").toString()), CrmEncodeDecode.CrmHtmlEncode($v_0), CrmEncodeDecode.CrmHtmlEncode($v_1), "", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($p0.getValue("workflowid").toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(""))
    },
    $2G_0: function($p0) {
        var $v_0 = $p0.Title, $v_1 = this.$6_0 ? $p0.StatusCodeName : "";
        if ($v_1 !== "Active")
            if ($v_1 === "Aborted") $v_1 = window.LOCID_PROCESS_ABORTED_LABEL;
            else if ($v_1 === "Finished") $v_1 = window.LOCID_PROCESS_FINISHED_LABEL;
        return String
            .format("<div class='ms-crm-ProcessSwitcher-Process' tabindex='0' role='radio' aria-checked='false'>\r\n\t\t\t\t\t<input type='radio' name='processSwitcherProcess' data-process='{6}' data-processinstance='{7}' value='{0}'\r\n\t\t\t\t\t\tid='SwitchProcess-Process-{0}'\r\n\t\t\t\t\t\tclass='ms-crm-ProcessSwitcher-Radio' title='{4}' {3} tabindex='-1'/>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessTitle' title='{4}'>{1}</div>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessDescription' title='{5}'>{2}</div>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessDescription' title='{5}'>{8} {10} {9}</div>\r\n\t\t\t\t</div>", CrmEncodeDecode.CrmHtmlAttributeEncode($p0.ProcessInstanceId.toString()), CrmEncodeDecode.CrmHtmlEncode($v_0), CrmEncodeDecode.CrmHtmlEncode($v_1), "", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($p0.ProcessDefinitionId.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode($p0.ProcessInstanceId.toString()), CrmEncodeDecode.CrmHtmlEncode($p0.ModifiedOn), CrmEncodeDecode.CrmHtmlEncode(this.getModifiedByName($p0)), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_BY_LABEL))
    },
    $2F_0: function($p0) {
        var $v_0 = $p0.DefinitionName;
        return String
            .format("<div class='ms-crm-ProcessSwitcher-Process' tabindex='0' role='radio' aria-checked='false'>\r\n\t\t\t\t\t<input type='radio' name='processSwitcherProcess' data-process='{6}' data-processinstance='{7}' value='{0}'\r\n\t\t\t\t\t\tid='SwitchProcess-Process-{0}'\r\n\t\t\t\t\t\tclass='ms-crm-ProcessSwitcher-Radio' title='{4}' {3} tabindex='-1'/>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessTitle' title='{4}'>{1}</div>\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessDescription' title='{5}'>{2}</div>\r\n\t\t\t\t</div>", CrmEncodeDecode.CrmHtmlAttributeEncode($p0.DefinitionId.toString()), CrmEncodeDecode.CrmHtmlEncode($v_0), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROCESS_NEW_PROCESS), "", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0), CrmEncodeDecode.CrmHtmlAttributeEncode($p0.DefinitionId.toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(""))
    },
    $2D_0: function() {
        return String
            .format("<div class='ms-crm-ProcessSwitcher-Process' id='{1}'>\t\t\t\t\t\r\n\t\t\t\t\t<div class='ms-crm-ProcessSwitcher-ProcessTitle' role='link' title='{0}' tabindex='0'>{0} >></div>\t\t\t\t\t\r\n\t\t\t\t</div>", CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PROC_ARCSWITCH_LINKTITLE), CrmEncodeDecode.CrmHtmlAttributeEncode("ArchivedLink"))
    },
    add_processSwitched: function(value) { this.$14_0.addHandler("FlyoutProcessSwitchCompleted", value) },
    remove_processSwitched: function(value) { this.$14_0.removeHandler("FlyoutProcessSwitchCompleted", value) },
    getModifiedByName: function(processInstance) {
        if (!IsNull(processInstance.ModifiedByName) &&
            processInstance.ModifiedByName
            .toLowerCase() !==
            "system".toLowerCase()) return processInstance.ModifiedByName;
        else if (!IsNull(processInstance.ModifiedOnBehalfByName) &&
            processInstance.ModifiedOnBehalfByName
            .toLowerCase() !==
            "system".toLowerCase()) return processInstance.ModifiedOnBehalfByName;
        else return processInstance.ModifiedByName
    },
    $1A_0: function($p0) {
        var $v_0 = $p0.find(".ms-crm-ProcessSwitcher-Process");
        $v_0.removeClass("ms-crm-ProcessSwitcher-Process-Selected");
        var $v_1 = $p0.find("input:checked").parents(".ms-crm-ProcessSwitcher-Process");
        $v_1.addClass("ms-crm-ProcessSwitcher-Process-Selected");
        var $v_2 = $p0.find("input").parents("[aria-checked=true]");
        !IsNull($v_2) && $v_2.attr("aria-checked", "false");
        if (!IsNull($v_1) && $v_1.length > 0) {
            $v_1[0].setAttribute("aria-checked", "true");
            $v_1.focus()
        }
        if (Xrm.Page.ui.getFormType() === 4) {
            this.$z_0(false);
            return
        }
        var $v_3 = $v_1.children("input").attr("value");
        if (isNullOrEmptyString($v_3) || $v_3 === this.$U_0) this.$z_0(false);
        else this.$1n_0()
    },
    $1n_0: function() {
        if (!this.$r_0) {
            this.$2_0.setFlyOutButtonDisplay(1, true);
            this.$r_0 = true
        }
    },
    $z_0: function($p0) {
        if (this.$r_0) {
            this.$2_0.setFlyOutButtonDisplay(1, false);
            this.$r_0 = false
        }
        $p0 && this.$2_0.setFlyOutButtonFocus(2)
    },
    $2L_0: function($p0, $p1) {
        var $$t_4 = this, $$t_5 = this;
        $P_CRM.when(this.$18_0.switchProcess($p0, $p1)).then(function($p1_0) { $$t_4.$20_0() }, function($p1_0) {})
    },
    $20_0: function() {
        var $v_0 = this.$14_0.getHandler("FlyoutProcessSwitchCompleted");
        $v_0 && $v_0(this, Sys.EventArgs.Empty)
    },
    $1k_0: function($p0) {
        var $$t_1 = this;
        $P_CRM(window).resize(function() {
            window.clearTimeout($$t_1.$1G_0);
            $$t_1.$1G_0 = window.setTimeout(function() { $$t_1.$1Z_0($p0) }, 100)
        })
    },
    $1Z_0: function($p0) {
        var $v_0 = Math.min(this.$N_0.outerHeight(), 600);
        $p0.find(".ui-dialog-content").height($v_0 - this.get_$1o_0());
        $p0.css("margin-top", "-" + ($v_0 / 2).toString() + "px");
        this.$2I_0($p0)
    },
    $2I_0: function($p0) {
        var $v_0 = $p0.find(".ms-crm-ProcessSwitcher-Subtitle").outerHeight(),
            $v_1 = $p0.find(".ui-dialog-content").outerHeight(),
            $v_2 = $v_1 - $v_0 - 50;
        $p0.find(".ms-crm-ProcessSwitcher-ProcessList").height($v_2)
    },
    show: function() {
        if (!this.$2_0) {
            this.$2_0 = this.$1T_0();
            this.$1k_0(this.$2_0.dialogChrome())
        } else this.$1W_0();
        var $v_0 = this.$2_0.dialogChrome();
        this.$2_0.show(this.$N_0);
        $v_0.css("top", "");
        $v_0.css("left", "");
        $v_0.addClass("ms-crm-ProcessSwitcher-Flyout");
        $v_0.attr("id", "processSwitcherFlyout");
        this.$1Z_0($v_0);
        this.$1a_0($v_0)
    },
    dispose: function() {
        this.$n_0 = this.get_$9_0().find("input");
        !IsNull(this.$n_0) && this.$n_0.unbind();
        !IsNull(this.$3_0) && this.$3_0.unbind()
    }
};
Type.registerNamespace("Mscrm.ProcessControlShared.ObjectModels");
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceState = function() {};
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceState.prototype = { Active: 0, InActive: 1 };
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceState
    .registerEnum("Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceState", false);
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceStatus = function() {};
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceStatus.prototype = { Active: 1, Finished: 2, Aborted: 3 };
Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceStatus
    .registerEnum("Mscrm.ProcessControlShared.ObjectModels.ProcessInstanceStatus", false);
Mscrm.ProcessControlShared.ObjectModels.BusinessProcessFlow = function() {};
Mscrm.ProcessControlShared.ObjectModels.BusinessProcessFlow
    .prototype = { ProcessDefinitions: null, ProcessInstances: null };
Mscrm.ProcessControlShared.ObjectModels.ProcessInstance = function() {};
Mscrm.ProcessControlShared.ObjectModels.ProcessInstance
    .prototype = {
        Title: null,
        ProcessInstanceId: null,
        ProcessDefinitionId: null,
        ProcessDefinitionName: null,
        CurrentProcessInstanceState: 0,
        CurrentProcessInstanceStatus: 0,
        CurrentActiveStageId: null,
        TraversedPath: null,
        StatusCodeName: null,
        ModifiedOn: null,
        CreatedOn: null,
        ModifiedByName: null,
        ModifiedOnBehalfByName: null
    };
Mscrm.ProcessControlShared.ObjectModels.ProcessDefinition = function() {};
Mscrm.ProcessControlShared.ObjectModels.ProcessDefinition.prototype = { DefinitionName: null, DefinitionId: null };
Mscrm.ErrorFlyout.registerClass("Mscrm.ErrorFlyout", null, Sys.IDisposable);
Mscrm.FlyOutButton.registerClass("Mscrm.FlyOutButton");
Mscrm.FlyOutPosition.registerClass("Mscrm.FlyOutPosition");
Mscrm.FlyOutDialogEventName.registerClass("Mscrm.FlyOutDialogEventName");
Mscrm.FlyOutButtonType.registerClass("Mscrm.FlyOutButtonType");
Mscrm.ErrorFlyOutConstant.registerClass("Mscrm.ErrorFlyOutConstant");
Mscrm.FlyOutCssClassNames.registerClass("Mscrm.FlyOutCssClassNames");
Mscrm.FlyOutElementTemplate.registerClass("Mscrm.FlyOutElementTemplate");
Mscrm.SystemErrorCodes.registerClass("Mscrm.SystemErrorCodes");
Mscrm.FlyOutDialog.registerClass("Mscrm.FlyOutDialog");
Mscrm.FlyOutEventData.registerClass("Mscrm.FlyOutEventData");
Mscrm.FlyOutMenu.registerClass("Mscrm.FlyOutMenu");
Mscrm.FlyOutMenuDescriptor.registerClass("Mscrm.FlyOutMenuDescriptor");
Mscrm.MenuListItemDescriptor.registerClass("Mscrm.MenuListItemDescriptor");
Mscrm.MenuSectionDescriptor.registerClass("Mscrm.MenuSectionDescriptor");
Mscrm.FlyOutOptions.registerClass("Mscrm.FlyOutOptions");
Mscrm.jQueryDialogOptionsImportHelper.registerClass("Mscrm.jQueryDialogOptionsImportHelper");
Mscrm.SwitchProcessFlyoutViewModel.registerClass("Mscrm.SwitchProcessFlyoutViewModel");
Mscrm.InlineFlyOutDialog.registerClass("Mscrm.InlineFlyOutDialog", Mscrm.FlyOutDialog);
Mscrm.NotificationFlyout.registerClass("Mscrm.NotificationFlyout", Mscrm.ErrorFlyout);
Mscrm.RollupErrorFlyout.registerClass("Mscrm.RollupErrorFlyout");
Mscrm.FormSectionNavigationFlyOut.registerClass("Mscrm.FormSectionNavigationFlyOut", Sys.Component);
Mscrm.TemplateData.registerClass("Mscrm.TemplateData");
Mscrm.SwitchProcessFlyOut.registerClass("Mscrm.SwitchProcessFlyOut");
Mscrm.ProcessControlShared.ObjectModels.BusinessProcessFlow
    .registerClass("Mscrm.ProcessControlShared.ObjectModels.BusinessProcessFlow");
Mscrm.ProcessControlShared.ObjectModels.ProcessInstance
    .registerClass("Mscrm.ProcessControlShared.ObjectModels.ProcessInstance");
Mscrm.ProcessControlShared.ObjectModels.ProcessDefinition
    .registerClass("Mscrm.ProcessControlShared.ObjectModels.ProcessDefinition");
Mscrm.FlyOutPosition.right = "right";
Mscrm.FlyOutPosition.left = "left";
Mscrm.FlyOutPosition.bottom = "bottom";
Mscrm.FlyOutPosition.custom = "custom";
Mscrm.FlyOutDialogEventName.loadContent = "flyout-loadcontent";
Mscrm.FlyOutDialogEventName.visibleChanged = "flyout-visiblechanged";
Mscrm.FlyOutDialogEventName.confirming = "flyout-confirming";
Mscrm.FlyOutDialogEventName.confirmed = "flyout-confirmed";
Mscrm.FlyOutDialogEventName.canceling = "flyout-canceling";
Mscrm.FlyOutDialogEventName.canceled = "flyout-canceled";
Mscrm.FlyOutDialogEventName.overlayClicked = "flyout-overlayclicked";
Mscrm.FlyOutDialogEventName.closed = "flyout-closed";
Mscrm.FlyOutButtonType.confirm = 1;
Mscrm.FlyOutButtonType.cancel = 2;
Mscrm.ErrorFlyOutConstant.flyOutMargin = 7;
Mscrm.FlyOutCssClassNames.chromeElement = "ms-crm-Inline-Chrome";
Mscrm.FlyOutCssClassNames.flyOutDialog = "ui-flyout-dialog";
Mscrm.FlyOutCssClassNames.flyOutSelectButton = "li-selectedflyoutbutton";
Mscrm.FlyOutCssClassNames
    .commandBarOverlay =
    "ui-widget-overlay ui-widget-overlay-flyout ui-widget-overlay-flyout-dark rollup CommandBarOverlayFlyOut";
Mscrm.FlyOutElementTemplate.div = "<div></div>";
Mscrm.FlyOutElementTemplate.image = "<img></img>";
Mscrm.SystemErrorCodes.privilegeDenied = -2147220960;
Mscrm.FlyOutDialog.buttonSelector = ".ui-dialog-buttonpane .ui-dialog-buttonset button:nth-child({0})";
Mscrm.FlyOutDialog.buttonTextSelector = ".ui-button-text";
Mscrm.FlyOutDialog.$F = null;
Mscrm.FlyOutDialog.currentDialog = null;
Mscrm.jQueryDialogOptionsImportHelper.$$cctor()