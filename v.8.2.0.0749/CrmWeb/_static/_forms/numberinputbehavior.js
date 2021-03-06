Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.MoneyInputBehavior = function(element) {
    Mscrm.FormInputControl.MoneyInputBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.MoneyInputBehavior.prototype = {
    $0_5: null,
    $3_5: null,
    $5_5: false,
    initialize: function() {
        Mscrm.FormInputControl.NumberInputBehavior.prototype.initialize.call(this);
        try {
            var $v_0 = $get(this.get_element().id + "_table"),
                $v_1 = $v_0.getElementsByTagName("tr")[0],
                $v_2 = $v_1.getElementsByTagName("td")[0];
            this.$0_5 = XUI.Html.DomUtils.GetFirstChild($v_2);
            this.$3_5 = XUI.Html.DomUtils.GetChildElementAt($v_2, 1);
            this.set_disabled(this.get_element().disabled ? true : false)
        } catch ($$e_3) {
            this.$0_5 = null;
            this.$3_5 = null
        }
    },
    get_isMoney: function() { return true },
    get_currencySymbol: function() { return IsNull(this.$0_5) ? "" : XUI.Html.GetText(this.$0_5) },
    set_currencySymbol: function(value) {
        if (!IsNull(this.$0_5)) {
            XUI.Html.SetText(this.$0_5, value);
            if (!IsNull(this.$3_5)) {
                this.$0_5.style.display = "inline";
                this.$3_5.style.display = "none"
            }
        }
        return value
    },
    get_ignoreCurrencySymbol: function() { return this.$5_5 },
    set_ignoreCurrencySymbol: function(value) {
        this.$5_5 = value;
        return value
    },
    get_isBaseCurrency: function() { return this.get_element().getAttribute("isBaseCur") === "1" },
    get_currencyPrecision: function() { return this.get_precision() },
    set_currencyPrecision: function(value) {
        this.get_element().getAttribute("preSrc") === window.PRECISIONSOURCE_CURRENCY && this.set_precision(value);
        return value
    },
    $H_5: function() {
        for (var $v_0 = null,
            $v_1 = this.get_element().ownerDocument.body.getElementsByTagName("FORM"),
            $v_2 = 0,
            $v_3 = $v_1.length;
            $v_2 < $v_3;
            $v_2++)
            if ($v_1[$v_2].className === "ms-crm-Form") {
                $v_0 = $v_1[$v_2];
                break
            }
        if (!IsNull($v_0))
            for (var $v_4 = $v_0.getElementsByTagName("IMG"), $v_5 = 0, $v_6 = $v_4.length; $v_5 < $v_6; $v_5++) {
                var $v_7 = $v_4[$v_5];
                if ($v_7.className === "ms-crm-Lookup-TransactionCurrency") {
                    var $v_8 = $v_7;
                    while (!IsNull($v_8) && $v_8.tagName.toUpperCase() !== "TABLE" && $v_8.className !== "ms-crm-Lookup"
                    ) $v_8 = $v_8.parentNode;
                    if (!IsNull($v_8) && $v_8.IsDataSlug) return true
                }
            }
        return false
    },
    onCustomValidateValue: function(value) {
        var $v_0 = !isNullOrEmptyString(this.get_currencySymbol());
        if (this.$5_5) $v_0 = true;
        if (!$v_0) $v_0 = this.$H_5();
        return new Mscrm.ValidationResult($v_0, $v_0 ? null : window.LOCID_CURRENCY_NOT_SPECIFIED)
    },
    onAfterDisabled: function(disable) {
        if (!IsNull(this.$0_5)) {
            this.$0_5.className = disable
                ? "ms-crm-Money-CurrencySymbol ms-crm-ReadOnly"
                : "ms-crm-Money-CurrencySymbol";
            this.$0_5.disabled = disable;
            this.$0_5.readOnly = !disable
        }
        var $v_0 = XUI.Html.GetComputedStyle(this.get_element(), "backgroundColor"),
            $v_1 = $get(this.get_element().id + "_table");
        if (!IsNull($v_1)) $v_1.style.backgroundColor = $v_0
    }
};
Mscrm.FormInputControl.PrecisionChangeEventArgs = function(precision) {
    Mscrm.FormInputControl.PrecisionChangeEventArgs.initializeBase(this);
    this.precision = precision
};
Mscrm.FormInputControl.PrecisionChangeEventArgs.prototype = { precision: 0 };
Mscrm.FormInputControl.NumberInputBehavior = function(element) {
    this.$$d_$D_4 = Function.createDelegate(this, this.$D_4);
    this.$$d_$E_4 = Function.createDelegate(this, this.$E_4);
    this.$$d_$G_4 = Function.createDelegate(this, this.$G_4);
    this.$$d_OnChangeHandler = Function.createDelegate(this, this.OnChangeHandler);
    this.$B_4 = -1e11;
    Mscrm.FormInputControl.NumberInputBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.NumberInputBehavior.prototype = {
    $A_4: 1e11,
    $8_4: null,
    $9_4: false,
    $4_4: true,
    $6_4: false,
    $2_4: null,
    $7_4: null,
    get_isDirty: function() { return this.$2_4 !== this.get_dataValue() },
    get_dataXml: function() {
        var $v_0 = this.get_dataValue(), $v_1 = "";
        if (!IsNull($v_0)) {
            $v_1 = $v_0.toString();
            if ($v_1.indexOf("e") > -1) $v_1 = $v_0.toFixed(10)
        }
        return String.format("<{0}>{1}</{0}>", this.get_element().id, $v_1)
    },
    get_dataValue: function() {
        var $v_0 = this.get_element().value,
            $v_1 = "int" === this.get_dataType()
                ? Mscrm.NumberUtility.locStringToInt($v_0)
                : Mscrm.NumberUtility.locStringToFloat($v_0);
        return isNullOrEmptyString($v_0) || isNaN($v_1) ? null : $v_1
    },
    set_dataValue: function(value) {
        var $v_0 = true;
        if (IsNull(value)) this.get_element().value = "";
        else if (typeof value === "number")
            try {
                this.$C_4(value)
            } catch ($$e_2) {
                $v_0 = false
            }
        else {
            this.showErrorMessage(window.LOCID_DEVERROR_BADDATATYPE_INT);
            $v_0 = false
        }
        $v_0 && this.handleDataValueChangedEvent();
        return value
    },
    get_disabled: function() { return this.get_element().disabled },
    set_disabled: function(value) {
        if (value) Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-ReadOnly");
        else Sys.UI.DomElement.removeCssClass(this.get_element(), "ms-crm-ReadOnly");
        this.get_element().disabled = value;
        this.onAfterDisabled(value);
        return value
    },
    get_requiredLevel: function() {
        try {
            var $v_0 = this.get_element().getAttribute("req");
            if (IsNull($v_0)) return 0;
            else return parseInt($v_0, 10)
        } catch ($$e_1) {
            return 0
        }
    },
    get_precision: function() {
        try {
            var $v_0 = this.get_element().getAttribute("acc");
            return parseInt($v_0, 10)
        } catch ($$e_1) {
            return 2
        }
    },
    set_precision: function(value) {
        if (!IsNull(value)) {
            var $v_0 = value;
            if (typeof value !== "number") $v_0 = parseInt(value.toString(), 10);
            if (this.$L_4($v_0)) {
                this.get_element().setAttribute("acc", $v_0.toString());
                this.$I_4($v_0);
                this.set_dataValue(this.get_dataValue())
            }
        }
        return value
    },
    get_min: function() {
        try {
            return parseFloat(this.get_element().getAttribute("min"))
        } catch ($$e_0) {
            return this.$B_4
        }
    },
    set_min: function(value) {
        this.get_element().setAttribute("min", value.toString());
        return value
    },
    get_max: function() {
        try {
            return parseFloat(this.get_element().getAttribute("max"))
        } catch ($$e_0) {
            return this.$A_4
        }
    },
    set_max: function(value) {
        this.get_element().setAttribute("max", value.toString());
        return value
    },
    get_ignoreRange: function() { return this.$6_4 },
    set_ignoreRange: function(value) {
        this.$6_4 = value;
        return value
    },
    get_dataType: function() { return this.get_element().getAttribute("dt") },
    set_dataType: function(value) {
        this.get_element().setAttribute("dt", value);
        return value
    },
    get_allowValidationMessage: function() { return this.$4_4 },
    add_precisionChange: function(value) { this.get_events().addHandler("PrecisionChangeHandler", value) },
    remove_precisionChange: function(value) { this.get_events().removeHandler("PrecisionChangeHandler", value) },
    $I_4: function($p0) {
        var $v_0 = this.get_events().getHandler("PrecisionChangeHandler");
        !IsNull($v_0) && $v_0(this, new Mscrm.FormInputControl.PrecisionChangeEventArgs($p0))
    },
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        this.$2_4 = this.get_dataValue();
        this.$7_4 = this.get_element().value;
        if (!this.$9_4) {
            this.$8_4 = Mscrm.Utilities.getLegacyEventHandler(this.get_element(), "onchange");
            this.$9_4 = true;
            Mscrm.Utilities.removeLegacyEventHandler(this.get_element(), "onchange")
        }
        this.get_element().onchange = this.$$d_OnChangeHandler;
        $addHandler(this.get_element(), "focus", this.$$d_$G_4);
        Sys.Browser.agent === Sys.Browser.Safari &&
            !Mscrm.Utilities.isChrome() &&
            $addHandler(this.get_element(), "blur", this.$$d_$E_4);
        attachWindowOnBeforeUnload(this.$$d_$D_4, null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.get_element())) {
            this.get_element().onchange = null;
            Sys.Browser.agent === Sys.Browser.Safari &&
                !Mscrm.Utilities.isChrome() &&
                $removeHandler(this.get_element(), "blur", this.$$d_$E_4);
            $removeHandler(this.get_element(), "focus", this.$$d_$G_4)
        }
        detachWindowOnBeforeUnload(this.$$d_$D_4, null);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    get_isDataSlugSupported: function() { return true },
    $G_4: function($p0) { this.$4_4 = true },
    $E_4: function($p0) {
        if (!IsNull(this.get_element().getAttribute("blockFormSubmit")) &&
            !this.get_element().getAttribute("blockFormSubmit")) {
            this.get_element().setAttribute("blockFormSubmit", false);
            $p0.target.focus()
        }
    },
    $D_4: function($p0) { this.$4_4 = false },
    OnChangeHandler: function(eventObj) {
        if (IsNull(eventObj)) eventObj = window.event;
        var $v_0 = this.IsValid();
        !$v_0 && !Mscrm.Utilities.isDefaultPrevented(eventObj) && Mscrm.Utilities.preventDefault(eventObj);
        if (!$v_0)
            if (!IsNull(this.get_element())) {
                this.get_element().setAttribute("blockFormSubmit", true);
                this.get_element().setAttribute("ValidationFailed", true);
                var $v_1 = this.get_element(), $$t_3 = this;
                window.setTimeout(function() { $v_1.removeAttribute("ValidationFailed") }, 50)
            }
        $v_0 && !IsNull(this.$8_4) && this.$8_4.call(this.get_element(), eventObj);
        $v_0 && this.handleDataValueChangedEvent()
    },
    IsValid: function() { return this.$J_4() },
    setFocus: function() {
        var form = $find("crmForm");
        !IsNull(form) && form.GetTab(this.get_element(), true);
        var $v_0 = this.get_element(), $$t_2 = this;
        window.setTimeout(function() {
                try {
                    $v_0.focus();
                    $v_0.select()
                } catch ($$e_1) {
                }
            },
            0)
    },
    fireOnChange: function() {
        var $v_0 = XUI.Html.CreateDomEvent("change");
        XUI.Html.DispatchDomEvent(this.get_element(), $v_0)
    },
    get_defaultValue: function() { return this.$2_4 },
    set_defaultValue: function(value) {
        this.$2_4 = value;
        return value
    },
    onAfterDisabled: function(disable) {},
    $C_4: function($p0) {
        var $v_0 = this.validateValue($p0);
        if ($v_0.isValid) {
            var $v_1 = Mscrm.NumberUtility.addFormatting($p0, this.get_precision());
            this.$7_4 = $v_1;
            this.onValidationSuccess($v_1)
        } else if (this.get_allowValidationMessage()) {
            var $v_2 = $v_0.errorText;
            if (IsNull($v_2))
                $v_2 = "int" === this.get_dataType()
                    ? String.format(window.LOCID_NUMBER_RANGE_MASK,
                        Mscrm.NumberUtility.addFormatting(this.get_min(), 0),
                        Mscrm.NumberUtility.addFormatting(this.get_max(), 0))
                    : String.format(window.LOCID_FLOAT_RANGE_MASK,
                        Mscrm.NumberUtility.addFormatting(this.get_min(), this.get_precision()),
                        Mscrm.NumberUtility.addFormatting(this.get_max(), this.get_precision()));
            this.showErrorMessage($v_2);
            throw Error.create($v_2, { number: 100 })
        }
    },
    onValidationSuccess: function(newValue) { this.get_element().value = newValue },
    $J_4: function() {
        var $v_0 = Mscrm.Utilities.trim(this.get_element().value, null);
        try {
            if (this.isValueNullOrEmpty($v_0)) {
                var $v_1 = "int" === this.get_dataType()
                    ? Mscrm.NumberUtility.locStringToInt($v_0)
                    : Mscrm.NumberUtility.locStringToFloat($v_0);
                this.$C_4($v_1)
            }
        } catch ($$e_2) {
            this.handleParseError();
            return false
        }
        return true
    },
    isValueNullOrEmpty: function(value) { return !isNullOrEmptyString(value) },
    handleParseError: function() {
        this.setOldValue();
        this.setFocus()
    },
    onCustomValidateValue: function(value) { return null },
    validateValue: function(value) {
        if (isNaN(value)) return new Mscrm.ValidationResult(false, null);
        var $v_0 = this.onCustomValidateValue(value);
        if (IsNull($v_0)) $v_0 = new Mscrm.ValidationResult(true, null);
        var $v_1 = false;
        if (!this.$6_4 && !IsNull(value)) $v_1 = value < this.get_min() || value > this.get_max();
        $v_0.isValid = IsNull(value) || $v_0.isValid && !$v_1;
        return $v_0
    },
    $L_4: function($p0) {
        var $v_0 = this.get_dataType();
        if (isNaN($p0) ||
            $p0 < 0 ||
            $v_0 === "money" && $p0 > 4 ||
            $v_0 === "int" && $p0 ||
            $v_0 === "decimal" && $p0 > 10 ||
            $v_0 === "float" && $p0 > 5 ||
            IsNull($v_0) && $p0 > 10) {
            this.showErrorMessage(window.LOCID_ACCURACY_RANGE_MESSAGE);
            return false
        }
        var $v_1 = true, $v_2 = Math.pow(10, -$p0), $v_3 = this.get_min() / $v_2, $v_4 = this.get_max() / $v_2;
        $v_1 = $v_4 - $v_3 > 1;
        $v_1 = $v_3 === Math.round($v_3) || $v_1;
        $v_1 = $v_4 === Math.round($v_4) || $v_1;
        !$v_1 && this.showErrorMessage(window.LOCID_PRECISION_RANGE_MESSAGE);
        return $v_1
    },
    setDisplay: function(visibility) {
        var $v_0 = visibility ? "block" : "none";
        if (!IsNull(this.get_element()) && !IsNull(this.get_element().parentNode)) {
            this.get_element().parentNode.style.display = $v_0;
            this.get_element().style.display = $v_0
        }
    },
    showErrorMessage: function(message) { alert(message) },
    setOldValue: function() { this.get_element().value = this.$7_4 }
};
Mscrm.FormInputControl.TableMoneyControl = function(element) {
    this.$$d_$K_3 = Function.createDelegate(this, this.$K_3);
    Mscrm.FormInputControl.TableMoneyControl.initializeBase(this, [element])
};
Mscrm.FormInputControl.TableMoneyControl.prototype = {
    $1_3: null,
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        var $v_0 = this.$F_3();
        this.$1_3 = Mscrm.FormControlInputBehavior.GetBehavior($v_0.id);
        $addHandler(this.get_element(), "focus", this.$$d_$K_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.get_element()) && $removeHandler(this.get_element(), "focus", this.$$d_$K_3);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    get_dataValue: function() { return this.$1_3.get_dataValue() },
    set_dataValue: function(value) {
        this.$1_3.set_dataValue(value);
        return value
    },
    get_innerDataXml: function() { return this.$1_3.get_dataXml() },
    get_innerControlId: function() { return this.$1_3.get_element().id },
    get_value: function() { return this.$1_3.get_dataValue() },
    fireOnChange: function() { this.$1_3.fireOnChange() },
    setFocus: function() { this.$1_3.setFocus() },
    $K_3: function($p0) { this.setFocus() },
    $F_3: function() {
        return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.get_element())),
                    1)))
    }
};
Mscrm.FormInputControl.NumberInputBehavior.registerClass("Mscrm.FormInputControl.NumberInputBehavior",
    Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.MoneyInputBehavior.registerClass("Mscrm.FormInputControl.MoneyInputBehavior",
    Mscrm.FormInputControl.NumberInputBehavior);
Mscrm.FormInputControl.PrecisionChangeEventArgs
    .registerClass("Mscrm.FormInputControl.PrecisionChangeEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.TableMoneyControl.registerClass("Mscrm.FormInputControl.TableMoneyControl", Mscrm.CrmUIBehavior)