Type.registerNamespace("Mscrm");
Mscrm.FormatArguments = function() { Mscrm.FormatArguments.initializeBase(this) };
Mscrm.FormatArguments.prototype = {
    type: null,
    inputValue: null,
    valueIndex: 0,
    formattedValue: null,
    returnValue: null,
    sEntry: null
};
Mscrm.Result = function() {};
Mscrm.Result.prototype = { isValid: false, sFormattedInput: null, sUnderlyingValue: null, iNext: 0, iPrevious: 0 };
Mscrm.EditableSelectControl = function(element) {
    this.$$d_handleClick = Function.createDelegate(this, this.handleClick);
    this.$$d_$j_3 = Function.createDelegate(this, this.$j_3);
    this.$$d_on = Function.createDelegate(this, this.on);
    this.$$d_onArrowImageMouseOut = Function.createDelegate(this, this.onArrowImageMouseOut);
    this.$$d_onArrowImageMouseOver = Function.createDelegate(this, this.onArrowImageMouseOver);
    this.$$d_$f_3 = Function.createDelegate(this, this.$f_3);
    this.$$d_$h_3 = Function.createDelegate(this, this.$h_3);
    this.$$d_$i_3 = Function.createDelegate(this, this.$i_3);
    this.$$d_$g_3 = Function.createDelegate(this, this.$g_3);
    this.$$d_$e_3 = Function.createDelegate(this, this.$e_3);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$$d_$d_3 = Function.createDelegate(this, this.$d_3);
    Mscrm.EditableSelectControl.initializeBase(this, [element])
};
Mscrm.EditableSelectControl.optimizeTimeForMobile = function(dialog) {
    var $v_0 = 302,
        $v_1 = 402,
        $v_2 = 44,
        $v_3 = dialog.get_container(),
        $v_4 = $P_CRM(window).width() / 2 - $v_0 / 2,
        $v_5 = $P_CRM(window).height() / 2 - $v_1 / 2;
    if ($v_5 < $v_2) $v_5 = $v_2;
    $v_4 = $v_4 < 0 ? 0 : $v_4;
    $v_5 = $v_5 < 0 ? 0 : $v_5;
    $v_3.style.position = "absolute";
    $v_3.style.top = $v_5.toString() + "px";
    $v_3.style.left = $v_4.toString() + "px";
    $v_3.style.height = "400px";
    $v_3.style.width = "300px";
    var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_3);
    $v_6.style.height = "400px";
    $v_6.style.width = "300px";
    if ($P_CRM("body").hasClass("androidStatic")) {
        $v_5 = $P_CRM(window).scrollTop();
        $v_3.style.top = $v_5.toString() + "px";
        $P_CRM("body div.ms-crm-Floating-Div").height($P_CRM("#crmForm").height() + $v_2)
    }
};
Mscrm.EditableSelectControl.prototype = {
    $H_3: 121,
    $6_3: false,
    $B_3: false,
    $A_3: false,
    $F_3: false,
    $E_3: false,
    $9_3: "",
    $1_3: null,
    $7_3: null,
    $0_3: null,
    $2_3: null,
    $5_3: null,
    $D_3: null,
    get_$V_3: function() { return this.get_$4_3().length },
    get_$I_3: function() {
        var $v_0 = this.get_$O_3()[0], $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0.getElementsByTagName("td")[1]);
        return this.$0_3.clientWidth + $v_1.clientWidth
    },
    add_returnValueChange: function(value) { this.get_events().addHandler("ReturnValueChange", value) },
    remove_returnValueChange: function(value) { this.get_events().removeHandler("ReturnValueChange", value) },
    add_validate: function(value) { this.get_events().addHandler("Validate", value) },
    remove_validate: function(value) { this.get_events().removeHandler("Validate", value) },
    add_findNextSmallestEntry: function(value) { this.get_events().addHandler("FindNextSmallestEntry", value) },
    remove_findNextSmallestEntry: function(value) { this.get_events().removeHandler("FindNextSmallestEntry", value) },
    add_initComplete: function(value) { this.get_events().addHandler("InitComplete", value) },
    remove_initComplete: function(value) { this.get_events().removeHandler("InitComplete", value) },
    add_controlFocus: function(value) { this.get_events().addHandler("ControlFocus", value) },
    remove_controlFocus: function(value) { this.get_events().removeHandler("ControlFocus", value) },
    add_controlBlur: function(value) { this.get_events().addHandler("ControlBlur", value) },
    remove_controlBlur: function(value) { this.get_events().removeHandler("ControlBlur", value) },
    add_propertyChangedEvent: function(value) { this.get_events().addHandler("PropertyChangedEvent", value) },
    remove_propertyChangedEvent: function(value) { this.get_events().removeHandler("PropertyChangedEvent", value) },
    markAsTimeControl: function() { this.$0_3.setAttribute("timeControl", "true") },
    get_isInitializedProperty: function() { return this.$F_3 },
    get_allowValueEditProperty: function() { return this.$6_3 },
    set_allowValueEditProperty: function(value) {
        this.$6_3 = value;
        document.readyState === "complete" &&
            this.$F_3 &&
            this.fireControlEvent("PropertyChangedEvent", new Sys.PropertyChangedEventArgs("allowValueEditProperty"));
        return value
    },
    get_returnValueProperty: function() { return this.$0_3.getAttribute("returnValue") },
    get_required: function() { return 0 },
    get_allowKeyDownPropagation: function() { return this.$E_3 },
    set_allowKeyDownPropagation: function(value) {
        this.$E_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "mouseup", this.$$d_$d_3);
        $addHandler(this.get_element(), "keydown", this.$$d_$c_3);
        $addHandler(this.get_element(), "blur", this.$$d_onBlur);
        $addHandler(this.get_element(), "focus", this.$$d_$e_3);
        var $v_0 = false;
        this.$6_3 = Mscrm.Utilities.parseBoolean(this.get_element().getAttribute("allowValueEdit").toString());
        try {
            var $v_1 = this.get_element().parentNode.parentNode.parentNode.parentNode.parentNode;
            if ($v_1.className === "ms-crm-DateTime") {
                var $v_2 = $v_1.getAttribute("initialDisableInit");
                if (!IsNull($v_2) && $v_2.toLowerCase() === "true") $v_0 = true
            }
        } catch ($$e_3) {
        }
        this.$9_3 = CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_element().getAttribute("defaultbgcolor"));
        if (IsNull(this.$9_3)) this.$9_3 = "";
        this.$D_3 = CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_element().getAttribute("dropdownfontsize"));
        if (IsNull(this.$D_3)) this.$D_3 = "11";
        if ($v_0) return;
        this.$l_3();
        this.set_allowValueEditProperty(this.$6_3);
        this.get_element().disabled && this.disable();
        this.$F_3 = true;
        this.set_allowValueEditProperty(this.$6_3);
        !IsNull(this.get_element().getAttribute("setdisabled")) && this.$N_3(true);
        this.fireControlEvent("InitComplete", new Sys.EventArgs);
        Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded(this.get_element())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.get_element())) {
            $removeHandler(this.get_element(), "mouseup", this.$$d_$d_3);
            $removeHandler(this.get_element(), "keydown", this.$$d_$c_3);
            $removeHandler(this.get_element(), "blur", this.$$d_onBlur);
            $removeHandler(this.get_element(), "focus", this.$$d_$e_3);
            try {
                if (!IsNull(this.$0_3)) {
                    $clearHandlers(this.$0_3);
                    $P_CRM(this.$0_3).unbind("blur");
                    this.$0_3 = null
                }
                if (!IsNull(this.$5_3)) {
                    $clearHandlers(this.$5_3);
                    this.$5_3 = null
                }
                if (!IsNull(this.$1_3)) {
                    $clearHandlers(this.$1_3);
                    this.$1_3 = null
                }
                if (!IsNull(this.$7_3)) {
                    $clearHandlers(this.$7_3);
                    this.$7_3 = null
                }
                if (!IsNull(this.$2_3)) {
                    this.$2_3.dispose();
                    this.$2_3 = null
                }
            } catch ($$e_0) {
            }
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_$O_3: function() { return this.$7_3.getElementsByTagName("tr") },
    get_$4_3: function() { return this.$1_3.getElementsByTagName("tr") },
    $l_3: function() {
        this.$7_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 0);
        this.$1_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1);
        var $v_0 = this.get_$O_3()[0];
        this.$0_3 = XUI.Html.DomUtils.GetFirstChild($v_0.getElementsByTagName("td")[0]);
        var $v_1 = this.get_element().getAttribute("changeHandler");
        !isNullOrEmptyString($v_1) && $addHandler(this.$0_3, "change", this.$$d_$g_3);
        $addHandler(this.$0_3, "selectstart", this.$$d_$i_3);
        $addHandler(this.$0_3, "mousedown", this.$$d_$i_3);
        $addHandler(this.$0_3, "focus", this.$$d_$h_3);
        $addHandler(this.$0_3, "blur", this.$$d_$f_3);
        var $v_2 = this.get_element().getAttribute("value");
        this.$0_3.setAttribute("lastValue", $v_2);
        this.$0_3.setAttribute("returnValue", $v_2);
        var $v_3 = this.$b_3($v_2);
        if (this.$8_3($v_3)) {
            this.$0_3.value = this.$L_3($v_3);
            this.$0_3.setAttribute("returnValue", this.getValue($v_3))
        } else {
            this.$0_3.value = $v_2;
            this.$0_3.setAttribute("returnValue", $v_2)
        }
        this.$0_3.setAttribute("defaultValue", this.$0_3.getAttribute("returnValue"));
        this.$0_3.setAttribute("oldDisplayValue", this.$0_3.value);
        this.$0_3.setAttribute("rowNum", this.getValueIndex(this.$0_3.value));
        this.$0_3.setAttribute("req", this.get_required());
        $addHandler(this.$0_3, "focus", this.$$d_$e_3);
        var $$t_7 = this;
        $P_CRM(this.$0_3).blur(function($p1_0) { $$t_7.onBlur($p1_0) });
        var $v_4 = window.LOCID_SELECTBOX_BUTTON_ALT, $v_5 = this.get_element().getAttribute("ButtonTitle");
        if (!IsNull($v_5)) $v_4 = $v_5;
        this.$5_3 = XUI.Html.DomUtils.GetFirstChild($v_0.getElementsByTagName("td")[1]);
        this.$5_3.alt = $v_4;
        this.$5_3.title = this.$5_3.alt;
        $addHandler(this.$5_3, "mouseover", this.$$d_onArrowImageMouseOver);
        $addHandler(this.$5_3, "mouseout", this.$$d_onArrowImageMouseOut);
        !IsNull(this.$1_3.getAttribute("bCached")) && this.$1_3.removeAttribute("bCached")
    },
    $b_3: function($p0) {
        var $v_0 = 0, $v_1 = this.get_$4_3().length;
        while ($v_0 < $v_1) {
            if (this.getValue($v_0) === $p0) break;
            $v_0++
        }
        if ($v_0 >= $v_1) $v_0 = !$p0.length ? 0 : -2;
        return $v_0
    },
    $i_3: function($p0) {
        var $v_0 = this.get_element().getAttribute("allowValueEdit");
        if (!IsNull($v_0) && $v_0.toUpperCase() === "TRUE") this.$1_3.style.MozUserSelect = "";
        else {
            this.$1_3.style.MozUserSelect = "none";
            $p0.preventDefault()
        }
    },
    $g_3: function($p0) {
        var $v_0 = $p0.target;
        if ($v_0.getAttribute("returnValue") !== $v_0.getAttribute("lastValue")) {
            var $v_1 = this.get_element().getAttribute("changeHandler");
            eval($v_1)
        }
    },
    $h_3: function($p0) {
        var $v_0 = this.$7_3.parentNode, $v_1 = $v_0.getAttribute("allowValueEdit");
        if (!$v_1) this.$0_3.style.backgroundColor = "#abc0e7"
    },
    $f_3: function($p0) {
        Sys.UI.DomElement.removeCssClass(this.$0_3, "ms-crm-select-date");
        this.$0_3.style.backgroundColor = this.$9_3
    },
    onArrowImageMouseOver: function(eventObject) {
        var $v_0 = eventObject.target;
        if (!this.get_element().disabled) {
            $v_0.src = "/_imgs/selecton.gif";
            !Mscrm.Utilities.get_isLeftToRight() && Mscrm.Utilities.flipElementHorizontally($v_0)
        }
    },
    onArrowImageMouseOut: function(eventObject) {
        var $v_0 = eventObject.target;
        if (!this.get_element().disabled) $v_0.src = "/_imgs/selectoff.gif"
    },
    $k_3: function() {
        if (IsNull(this.$2_3) || this.$2_3.get_width() === this.get_$I_3()) return;
        this.$2_3.set_width(this.get_$I_3());
        this.$2_3.refresh()
    },
    $R_3: function($p0) {
        var $v_0 = new Mscrm.Result, $v_1 = parseInt(this.$0_3.getAttribute("rowNum"));
        if (this.$8_3($v_1)) {
            $v_0.iPrevious = $v_1 - 1;
            $v_0.iNext = $v_1 + 1
        } else {
            var $v_3 = new Mscrm.FormatArguments;
            $v_3.inputValue = $p0;
            this.fireControlEvent("FindNextSmallestEntry", $v_3);
            if (!IsNull($v_3.sEntry)) {
                var $v_4 = this.getValueIndex($v_3.sEntry);
                $v_0.iPrevious = $v_4;
                $v_0.iNext = $v_4 + 1
            } else {
                $v_0.iPrevious = 0;
                $v_0.iNext = 1
            }
        }
        var $v_2 = this.get_$4_3().length;
        if ($v_0.iPrevious < 0) {
            $v_0.iPrevious = 0;
            $v_0.iNext = $v_2 > 1 ? 1 : 0
        } else if ($v_0.iNext >= $v_2) {
            $v_0.iNext = $v_2 - 1;
            $v_0.iPrevious = $v_2 > 1 ? $v_0.iNext - 1 : $v_0.iNext
        }
        return $v_0
    },
    $e_3: function($p0) {
        var $v_0 = new Mscrm.FormatArguments;
        this.fireControlEvent("ControlFocus", $v_0)
    },
    onBlur: function(eventObject) {
        if (this.$A_3) return;
        this.$A_3 = true;
        if (this.$6_3) this.$0_3.value !== this.$0_3.getAttribute("oldDisplayValue") && this.validateValue(eventObject);
        this.$A_3 = false
    },
    validateValue: function(eventObject) {
        var $v_0 = this.$U_3(eventObject, this.$0_3.value);
        if ($v_0.isValid) {
            this.$0_3.value = $v_0.sFormattedInput;
            this.$0_3.setAttribute("returnValue", $v_0.sUnderlyingValue || "");
            this.$0_3.setAttribute("oldDisplayValue", this.$0_3.value);
            this.fireReturnValueChange();
            var $v_1 = this.getValueIndex(this.$0_3.getAttribute("returnValue"));
            this.$0_3.setAttribute("rowNum", $v_1);
            var $v_2 = new Mscrm.FormatArguments;
            this.fireControlEvent("ControlBlur", $v_2)
        } else {
            this.$0_3.value = this.$0_3.getAttribute("oldDisplayValue");
            if (!this.$0_3.disabled && !this.$T_3(this.$0_3))
                try {
                    this.$0_3.focus()
                } catch ($$e_4) {
                }
        }
    },
    $T_3: function($p0) {
        if (IsNull($p0)) return true;
        while (!IsNull($p0) && !IsNull($p0.tagName) && $p0.tagName.toLowerCase() !== "body") {
            if (XUI.Html.GetComputedStyle($p0, "display") === "none" ||
                XUI.Html.GetComputedStyle($p0, "visibility") === "hidden") return true;
            $p0 = $p0.parentNode
        }
        return false
    },
    $U_3: function($p0, $p1) {
        var $v_0 = this.$M_3($p1), $v_1, $v_2 = false;
        if (!IsNull($p0) && $p0.type === "keydown") {
            $v_2 = true;
            this.$A_3 = true
        }
        var $v_3 = new Mscrm.FormatArguments;
        $v_3.inputValue = this.$0_3.value;
        $v_3.valueIndex = $v_0;
        $v_3.type = "Validate";
        this.fireControlEvent("Validate", $v_3);
        if (IsNull($v_3.returnValue)) $v_1 = this.$Z_3($p1, $v_0);
        else if (Mscrm.Utilities.parseBoolean($v_3.returnValue.toString())) {
            $v_0 = this.$M_3($v_3.formattedValue);
            $v_1 = this.$Z_3($v_3.formattedValue, $v_0)
        } else {
            $v_1 = new Mscrm.Result;
            $v_1.isValid = false
        }
        if ($v_2) this.$A_3 = false;
        return $v_1
    },
    $Z_3: function($p0, $p1) {
        var $v_0 = new Mscrm.Result;
        $v_0.isValid = true;
        $v_0.sFormattedInput = $p0;
        if ($p1 === -2) {
            $p1 = this.getValueIndex($v_0.sFormattedInput);
            if ($p1 === -2) $v_0.sUnderlyingValue = $p0;
            else {
                $v_0.sFormattedInput = this.$L_3($p1);
                $v_0.sUnderlyingValue = this.getValue($p1)
            }
        } else $v_0.sUnderlyingValue = this.getValue($p1);
        return $v_0
    },
    $L_3: function($p0) {
        var $v_0 = this.get_$4_3();
        if ($p0 < 0 || $p0 >= $v_0.length) return null;
        var $v_1 = $v_0[$p0].getElementsByTagName("td")[0];
        return XUI.Html.GetText($v_1)
    },
    getValue: function(rowNumber) {
        var $v_0 = this.get_$4_3();
        if (rowNumber < 0 || rowNumber >= $v_0.length) return null;
        var $v_1 = $v_0[rowNumber];
        return $v_1.getElementsByTagName("td")[0].getAttribute("val")
    },
    $M_3: function($p0) {
        if (!IsNull($p0) && !$p0.length) return -1;
        for (var $v_0 = this.get_$V_3(), $v_1 = 0; $v_1 < $v_0; $v_1++) if (this.$L_3($v_1) === $p0) return $v_1;
        return -2
    },
    getValueIndex: function(value) {
        if (!IsNull(value) && !value.length) return -1;
        for (var $v_0 = this.get_$V_3(), $v_1 = 0; $v_1 < $v_0; $v_1++) if (this.getValue($v_1) === value) return $v_1;
        return -2
    },
    setValue: function(value, returnValue, doNotFire) {
        var $v_0 = this.getValueIndex(value);
        if (this.$8_3($v_0)) this.setValues($v_0, doNotFire);
        else {
            this.$0_3.value = value;
            this.$0_3.setAttribute("oldDisplayValue", this.$0_3.value);
            if (!IsNull(returnValue)) this.$0_3.setAttribute("returnValue", returnValue);
            else this.$0_3.setAttribute("returnValue", value);
            this.$0_3.setAttribute("rowNum", $v_0);
            (IsNull(doNotFire) || !doNotFire) && this.fireReturnValueChange()
        }
    },
    fireReturnValueChange: function() {
        this.fireControlEvent("PropertyChangedEvent", new Sys.PropertyChangedEventArgs("returnValueProperty"));
        var $v_0 = new Mscrm.FormatArguments;
        $v_0.inputValue = this.$0_3.getAttribute("returnValue");
        $v_0.type = "returnvaluechange";
        this.fireControlEvent("ReturnValueChange", $v_0)
    },
    $S_3: function() {
        if (this.$1_3.getAttribute("Cached") === "true") {
            this.$k_3();
            return
        }
        this.$1_3 = this.$1_3.cloneNode(true);
        this.$1_3.setAttribute("Cached", "true");
        var $v_0 = this.get_$4_3().length;
        if ($v_0 <= 6) this.$H_3 = $v_0 * 17 + 2;
        var $v_1 = "";
        if (!Mscrm.Utilities.get_isLeftToRight()) $v_1 = "rtl";
        var $v_2 = this.get_element().ownerDocument.createElement("COLGROUP"),
            $v_3 = this.get_element().ownerDocument.createElement("COL");
        $v_3.style.fontSize = this.$D_3 + "px";
        $v_3.className = "select_htc_col";
        $v_2.appendChild($v_3);
        var $v_4 = XUI.Html.DomUtils.GetFirstChild(this.$1_3);
        this.$1_3.insertBefore($v_2, $v_4);
        this.$1_3.style.width = "100%";
        this.$2_3 = this.$a_3(this.get_element(),
            this.$1_3,
            this.get_$I_3(),
            this.$H_3,
            "selectPopup",
            this.get_element().ownerDocument,
            $v_1);
        $addHandler(this.$1_3, "mouseover", this.$$d_on);
        $addHandler(this.$1_3, "selectstart", this.$$d_$j_3);
        this.$1_3.style.MozUserSelect = "none";
        $addHandler(this.$1_3, "mousedown", this.$$d_$j_3);
        $addHandler(this.$1_3, "click", this.$$d_handleClick)
    },
    $j_3: function($p0) { $p0.preventDefault() },
    $d_3: function($p0) {
        this.setOpen();
        if (this.$0_3.disabled || this.$6_3 && $p0.target.tagName.toUpperCase() === "INPUT") return;
        !Mscrm.Utilities.isMobileRefresh() && this.$0_3.focus();
        if (this.$B_3) this.$2_3.hide();
        else this.$Y_3()
    },
    $G_3: function() {
        this.$B_3 = false;
        try {
            this.$2_3.hide();
            !Mscrm.Utilities.isMobileRefresh() && this.$0_3.focus();
            XUI.Html.DispatchDomEvent(this.$0_3, XUI.Html.CreateDomEvent("change"));
            var $v_0 = this.$0_3.getAttribute("rowNum");
            this.$8_3($v_0) && this.$C_3(this.$0_3, this.get_$4_3()[$v_0], false)
        } catch ($$e_1) {
        }
    },
    reset: function() {
        this.$1_3.setAttribute("Cached", "false");
        this.$0_3.setAttribute("rowNum", "0")
    },
    disableDropDownIcon: function(imageElement, disable) {
        if (IsNull(imageElement)) return;
        if (disable) {
            imageElement.className = "ms-crm-ReadOnly";
            imageElement.src = "/_imgs/selectgrey.gif";
            !Mscrm.Utilities.get_isLeftToRight() && Mscrm.Utilities.flipElementHorizontally(imageElement)
        } else {
            imageElement.className = "ms-crm-SelectBox";
            imageElement.src = "/_imgs/selectoff.gif";
            !Mscrm.Utilities.get_isLeftToRight() && Mscrm.Utilities.flipElementHorizontally(imageElement)
        }
        imageElement.disabled = disable
    },
    $N_3: function($p0) {
        var $v_0 = this.get_$O_3()[0],
            $v_1 = $v_0.getElementsByTagName("td")[1],
            $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
        if ($p0) {
            this.$0_3.style.borderColor = "#cccccc";
            this.$0_3.className = "ms-crm-SelectBox ms-crm-ReadOnly";
            $v_2.style.cursor = "default"
        } else {
            this.$0_3.style.borderColor = "";
            this.$0_3.className = "ms-crm-SelectBox";
            $v_2.style.cursor = "pointer"
        }
        this.disableDropDownIcon($v_2, $p0);
        this.$0_3.disabled = $p0;
        $v_0.disabled = $p0;
        this.get_element().disabled = $p0
    },
    enable: function() { this.$N_3(false) },
    disable: function() { this.$N_3(true) },
    setOpen: function() { this.$B_3 = !IsNull(this.$2_3) && this.$2_3.get_isVisible() },
    $Y_3: function() {
        var $v_0 = this.getValueIndex(this.$0_3.getAttribute("returnValue"));
        this.$0_3.setAttribute("rowNum", $v_0);
        this.$S_3();
        this.$X_3();
        this.$1_3.style.display = "";
        this.$W_3(this.$2_3, this.get_element(), this.get_element().ownerDocument);
        if (!Mscrm.Utilities.isMobileRefresh()) {
            var $$t_2 = this;
            this.$2_3.show(function($p1_0) { $$t_2.$m_3($v_0) })
        } else this.$2_3.show(Mscrm.EditableSelectControl.optimizeTimeForMobile)
    },
    $m_3: function($p0) {
        if ($p0 <= 0) return;
        if (this.$2_3.get_dialogId()) {
            var $v_0 = $get(this.$2_3.get_dialogId());
            if (!IsNull($v_0)) {
                var $v_1 = XUI.Html.DomUtils.GetChildElementAt($v_0, 0);
                if (!IsNull($v_1)) {
                    var $v_2 = $P_CRM("#" + $v_0.id + " .ms-crm-inlineSelectRow").get(0);
                    if (!IsNull($v_2)) {
                        var $v_3 = $v_2.clientHeight;
                        $v_1.scrollTop = $p0 * $v_3
                    }
                }
            }
        }
    },
    on: function(eventObject) {
        var $v_0 = eventObject.target.parentNode;
        if ($v_0.tagName.toUpperCase() === "TR") {
            var $v_1 = this.$0_3.getAttribute("rowNum");
            this.$C_3($v_0, this.get_$4_3()[$v_1], false);
            this.$0_3.setAttribute("rowNum", $v_0.rowIndex)
        }
    },
    handleClick: function(eventObject) {
        var $v_0 = eventObject.target.parentNode, $v_1 = $v_0.rowIndex;
        if ($v_1 >= 0) {
            this.$0_3.setAttribute("rowNum", $v_1);
            this.setValues(this.$0_3.getAttribute("rowNum"), false);
            this.$G_3()
        }
    },
    $c_3: function($p0) {
        this.setOpen();
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0), $v_1 = null;
        if ($v_0 === 9) {
            this.tabKeyAction($p0);
            return
        }
        switch ($v_0) {
        case 38:
        case 40:
        case 13:
            this.$S_3();
            !this.$B_3 && this.$X_3();
            if ($v_0 !== 13 && $p0.altKey) {
                if (this.$2_3.get_isVisible()) this.$G_3();
                else this.$Y_3();
                return
            }
            break;
        default:
            return
        }
        var $v_2 = false;
        if (this.$6_3)
            if (this.$0_3.value !== this.$0_3.getAttribute("oldDisplayValue")) {
                $v_1 = this.$U_3($p0, this.$0_3.value);
                if ($v_1.isValid) {
                    var $v_B = $v_1.sFormattedInput, $v_C = this.$M_3($v_B);
                    this.$0_3.setAttribute("rowNum", $v_C);
                    this.$0_3.setAttribute("returnValue", $v_B);
                    $v_2 = true
                } else {
                    var $v_D = this.$0_3.getAttribute("oldDisplayValue");
                    this.$0_3.value = IsNull($v_D) ? "" : $v_D;
                    if (!this.$0_3.disabled && !this.$T_3(this.$0_3))
                        try {
                            this.$0_3.focus()
                        } catch ($$e_7) {
                        }
                }
            }
        switch ($v_0) {
        case 38:
            $v_1 = this.$R_3(this.$0_3.getAttribute("returnValue"));
            if ($v_1.iPrevious === this.$0_3.getAttribute("rowNum")) break;
            var $v_3, $v_4 = this.get_$4_3(), $v_5 = this.$0_3.getAttribute("rowNum");
            if (this.$8_3($v_5)) $v_3 = $v_4[$v_5];
            else $v_3 = null;
            var $v_6 = $v_4[$v_1.iPrevious];
            this.$C_3($v_6, $v_3, true);
            this.setValues($v_1.iPrevious, false);
            XUI.Html.DispatchDomEvent(this.$0_3, XUI.Html.CreateDomEvent("change"));
            break;
        case 40:
            $v_1 = this.$R_3(this.$0_3.getAttribute("returnValue"));
            var $v_7 = this.$0_3.getAttribute("rowNum");
            if ($v_1.iNext === $v_7) break;
            var $v_8, $v_9 = this.get_$4_3();
            if (this.$8_3($v_7)) $v_8 = $v_9[$v_7];
            else $v_8 = null;
            var $v_A = $v_9[$v_1.iNext];
            this.$C_3($v_A, $v_8, true);
            this.setValues($v_1.iNext, false);
            XUI.Html.DispatchDomEvent(this.$0_3, XUI.Html.CreateDomEvent("change"));
            break;
        case 13:
            this.$G_3();
            if ($v_2) {
                XUI.Html.DispatchDomEvent(this.$0_3, XUI.Html.CreateDomEvent("change"));
                this.fireReturnValueChange()
            }
            break
        }
        !this.$E_3 && $p0.stopPropagation();
        $p0.preventDefault()
    },
    tabKeyAction: function(eventObject) {
        if (this.$B_3) {
            this.$0_3.focus();
            this.$G_3()
        }
    },
    setValues: function(index, doNotFire) {
        var $v_0 = this.get_$4_3()[index], $v_1 = $v_0.getElementsByTagName("td")[0];
        this.$0_3.setAttribute("lastValue", this.$0_3.getAttribute("returnValue"));
        this.$0_3.value = XUI.Html.GetText($v_1);
        this.$0_3.setAttribute("oldDisplayValue", this.$0_3.value);
        this.$0_3.setAttribute("returnValue", $v_1.getAttribute("val"));
        this.$0_3.setAttribute("rowNum", index);
        !doNotFire && this.fireReturnValueChange()
    },
    $C_3: function($p0, $p1, $p2) {
        $p2 && $p0.scrollIntoView();
        if ($p0 !== $p1) {
            !IsNull($p0) && Sys.UI.DomElement.addCssClass($p0, "ms-crm-select-date");
            if (!IsNull($p1)) {
                Sys.UI.DomElement.removeCssClass($p1, "ms-crm-select-date");
                $p1.style.backgroundColor = this.$9_3
            }
        }
    },
    $X_3: function() {
        for (var $v_0 = this
                     .get_$4_3(),
            $v_1 = $v_0.length,
            $v_3 = 0;
            $v_3 < $v_1;
            $v_3++) this.$C_3(null, $v_0[$v_3], false);
        var $v_2 = parseInt(this.$0_3.getAttribute("rowNum"));
        this.$8_3($v_2) && this.$C_3($v_0[$v_2], null, false)
    },
    setFocus: function() { this.$0_3.focus() },
    $8_3: function($p0) { return !IsNull($p0) && $p0 !== -1 && $p0 !== -2 },
    $a_3: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = this.$Q_3($p5), $v_1 = $p5.createElement("div");
        $v_1.className = "ms-crm-InlineSelectContainer";
        $v_0.appendChild($v_1);
        var $v_2 = $p5.createElement("div");
        $v_2.style.overflowX = "hidden";
        $v_2.style.overflowY = "auto";
        $v_2.style.width = "100%";
        $v_2.style.backgroundColor = "#FFF";
        $v_2.style.direction = $p6;
        $v_2.appendChild($p1);
        var $v_3 = Mscrm.Dialog.createDialog($v_1);
        $v_3.set_isModal(false);
        $v_1.style.border = "1px solid #000";
        this.$W_3($v_3, $p0, $p5);
        $v_3.set_shiftVertical(true);
        $v_3.set_shiftHorizontal(false);
        $v_3.set_minHeight(-1);
        $v_3.set_maxHeight(-1);
        $v_3.set_isLoading(false);
        $v_3.set_enableShadow(false);
        $v_3.set_body($v_2);
        $v_3.set_height($p3);
        $v_3.set_width($p2);
        $v_3.set_dialogId(this.get_element().id + $p4);
        $v_3.set_neverGrabFocus(true);
        return $v_3
    },
    $W_3: function($p0, $p1, $p2) {
        var $v_0 = this.$Q_3($p2),
            $v_1 = XUI.Html.DomUtils.GetFirstChild($p1),
            $v_2 = Mscrm.Utilities.getXYPos($v_1, !Mscrm.Utilities.get_isLeftToRight(), $v_0),
            $v_3 = $v_2["x"],
            $v_4 = $v_2["y"];
        $p0.set_top($v_4 + $v_1.offsetHeight);
        if (!Mscrm.Utilities.get_isLeftToRight()) $v_3 += $v_1.offsetWidth;
        $p0.set_left($v_3)
    },
    $Q_3: function($p0) {
        var $v_0 = $p0.getElementById("contentDiv");
        if (IsNull($v_0)) $v_0 = $p0.body;
        return $v_0
    }
};
Mscrm.FormatArguments.registerClass("Mscrm.FormatArguments", Sys.EventArgs);
Mscrm.Result.registerClass("Mscrm.Result");
Mscrm.EditableSelectControl.registerClass("Mscrm.EditableSelectControl", Mscrm.CrmUIControl);
Type.registerNamespace("XUI");
XUI.ClipboardManager = function() {
    var _this = this, _mimeType = GetMimeType(), _clipboardContext;

    function GetMimeType() {
        if (Sys.Browser
            .agent ==
            Sys.Browser.Safari ||
            Sys.Browser.agent == Sys.Browser.AppleWebKit) return "text/plain";
        else if (Sys.Browser.agent == Sys.Browser.Firefox) return "text/unicode";
        else return "text"
    }

    var clipboardApi = {
            SetData: function(data) {
                window.clipboardData.setData(_mimeType, data);
                return true
            },
            GetData: function(data) { return window.clipboardData.getData(_mimeType) }
        },
        componentsApi = {
            SetData: function(data) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var stringComp = Components.classes["@mozilla.org/supports-string;1"]
                        .createInstance(Components.interfaces.nsISupportsString),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"]
                        .createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"]
                    .getService(Components.interfaces.nsIClipboard);
                stringComp.data = data;
                transfComp.setTransferData(_mimeType, stringComp, data.length * 2);
                clipboardService.setData(transfComp, null, Components.interfaces.nsIClipboard.kGlobalClipboard);
                return true
            },
            GetData: function(data) {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                var clipboardService = Components.classes["@mozilla.org/widget/clipboard;1"]
                        .getService(Components.interfaces.nsIClipboard),
                    transfComp = Components.classes["@mozilla.org/widget/transferable;1"]
                        .createInstance(Components.interfaces.nsITransferable);
                transfComp.addDataFlavor(_mimeType);
                var dataComp = {}, length = {};
                clipboardService.getData(transfComp, Components.interfaces.nsIClipboard.kGlobalClipboard);
                transfComp.getTransferData(_mimeType, dataComp, length);
                dataComp = dataComp && dataComp.value.QueryInterface(Components.interfaces.nsISupportsString);
                return dataComp && dataComp.data.substring(0, length.value / 2)
            }
        },
        internalApi = {
            SetData: function(data) {
                _clipboardContext = {};
                _clipboardContext[_mimeType] = data;
                return true
            },
            GetData: function(data) { return _clipboardContext && _clipboardContext[_mimeType] }
        };

    function SelectApi(apiName) {
        if (window.clipboardData && window.clipboardData.setData) return clipboardApi[apiName];
        else if (window.Components)
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                return componentsApi[apiName]
            } catch (e) {
                return internalApi[apiName]
            }
        else return internalApi[apiName]
    }

    this.SetData = function(data) {
        this.SetData = SelectApi("SetData");
        return this.SetData(data)
    };
    this.GetData = function() {
        this.GetData = SelectApi("GetData");
        return this.GetData()
    }
};
Type.registerNamespace("XUI");
XUI.DomUtilities = function() {
    var NodeType = { Element: 1, TextNode: 3, Document: 9 };

    function Trim(strValue) {
        if (strValue != null) return strValue.replace(/^\s*/, "").replace(/\s*$/, "");
        return strValue
    }

    function IsEnumerable(domNode) {
        var nodeType = domNode.nodeType;
        if (nodeType == NodeType.Element) return true;
        if (nodeType == NodeType.TextNode) {
            var textContent = domNode.nodeValue;
            return textContent && Trim(textContent).length > 0
        }
        return false
    }

    function FindEnumerableNode(domNode, sPrevNextSibling) {
        var r = domNode;
        while (r != null && !IsEnumerable(r)) r = r[sPrevNextSibling];
        return r
    }

    var functionsRequiringInit = [
        {
            name: "Contains",
            selector: function() {
                return document.body.contains != null
                    ? function(domNode, otherDomNode) { return domNode && domNode.contains(otherDomNode) }
                    : function(domNode, otherDomNode) {
                        return domNode && domNode.compareDocumentPosition(otherDomNode) >= 16
                    }
            }
        }
    ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 NodeType: NodeType,
                 HasChildElements: function(domNode, countEmptyNodes) {
                     if (domNode.hasChildNodes()) {
                         var childNodes = domNode.childNodes;
                         if (countEmptyNodes) return childNodes.length > 0;
                         else return this.GetFirstChild(domNode) != null
                     } else return false
                 },
                 GetFirstChild: function(domNode) { return FindEnumerableNode(domNode.firstChild, "nextSibling") },
                 GetLastChild: function(domNode) { return FindEnumerableNode(domNode.lastChild, "previousSibling") },
                 GetNextSibling: function(domNode) { return FindEnumerableNode(domNode.nextSibling, "nextSibling") },
                 GetPrevSibling: function(domNode) {
                     return FindEnumerableNode(domNode.previousSibling, "previousSibling")
                 },
                 ForEachChild: function(domNode, fnProcessElement) {
                     var curNode = this.GetFirstChild(domNode);
                     while (curNode != null && !fnProcessElement(curNode)) curNode = this.GetNextSibling(curNode);
                     return curNode
                 },
                 GetChildElementAt: function(domNode, index) {
                     var idx = 0;

                     function ProcessNode(node) { return idx++ == index }

                     return this.ForEachChild(domNode, ProcessNode)
                 },
                 GetBaseName: function(domNode) { return domNode.localName || domNode.baseName || domNode.nodeName },
                 Contains: function(domNode, otherDomNode) {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Html = function() {
    var functionsRequiringInit = [
        {
            name: "SetText",
            selector: function() {
                return "textContent" in document.body
                    ? function(domNode, newVal) { domNode.textContent = newVal }
                    : function(domNode, newVal) { domNode.innerText = newVal }
            }
        }, {
            name: "GetText",
            selector: function() {
                return "textContent" in document.body
                    ? function(domNode) { return domNode.textContent }
                    : function(domNode) {
                        if (domNode.nodeName == "INPUT" &&
                            Sys.Browser.agent == Sys.Browser.InternetExplorer &&
                            Sys.Browser.version < 9) return domNode.value;
                        else return domNode.innerText
                    }
            }
        }, {
            name: "GetOuterHTML",
            selector: function() {
                return "outerHTML" in document.body
                    ? function(domNode) { return domNode.outerHTML }
                    : function(domNode) {
                        if ("outerHTML" in domNode) return domNode.outerHTML;
                        else {
                            var oDoc = domNode.ownerDocument,
                                oClone = domNode.cloneNode(true),
                                oTemp = oDoc.createElement("div");
                            oDoc.documentElement.appendChild(oTemp);
                            oTemp.appendChild(oClone);
                            var sHTML = oTemp.innerHTML;
                            oDoc.documentElement.removeChild(oTemp);
                            return sHTML
                        }
                    }
            }
        }, {
            name: "SetOuterHTML",
            selector: function() {
                return "outerHTML" in document.body
                    ? function(domNode, newVal) { domNode.outerHTML = newVal }
                    : function(domNode, newVal) {
                        var oTemp = document.createElement("div");
                        document.body.appendChild(oTemp);
                        oTemp.innerHTML = newVal;
                        var parentNode = domNode.parentNode;
                        parentNode.replaceChild(oTemp.firstChild.cloneNode(true), domNode);
                        document.body.removeChild(oTemp)
                    }
            }
        }, {
            name: "GetComputedStyle",
            selector: function() {
                return document.body.currentStyle != null
                    ? function(domNode, camelStyleName) {
                        var temp = domNode.currentStyle == null ? domNode.children : null,
                            r = domNode.currentStyle[camelStyleName];
                        if (r.indexOf("%") > 0 || r.indexOf("em") > 0) throw"RelativeMeasurementInComputedStyle";
                        return r
                    }
                    : function(domNode, camelStyleName) {
                        var computedStyle = document.defaultView.getComputedStyle(domNode, null);
                        return computedStyle != null ? computedStyle[camelStyleName] : null
                    }
            }
        }, {
            name: "SetFloat",
            selector: function() {
                return document.body.style.styleFloat != null
                    ? function(domNode, newVal) { domNode.style.styleFloat = newVal }
                    : function(domNode, newVal) { domNode.style.cssFloat = newVal }
            }
        }, {
            name: "SetOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode, newVal) { domNode.style.opacity = newVal }
                    : function(domNode, newVal) {
                        domNode.style.filter = newVal == 1 ? "" : "alpha(opacity=" + newVal * 100 + ")"
                    }
            }
        }, {
            name: "GetOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode) {
                        var o = domNode.style.opacity;
                        return o != null && o != "" ? parseFloat(o) : 1
                    }
                    : function(domNode) {
                        var f = domNode.style.filter;
                        return f != null && f != ""
                            ? parseInt(f.replace("alpha(opacity=", "").replace(")", "")) / 100
                            : 1
                    }
            }
        }, {
            name: "RemoveOpacity",
            selector: function() {
                return document.body.style.opacity != null
                    ? function(domNode) { domNode.style.opacity = "" }
                    : function(domNode) { domNode.style.filter = "" }
            }
        }, {
            name: "IsContentEditable",
            selector: function() {
                return document.body.isContentEditable != null
                    ? function(domNode) { return domNode.isContentEditable }
                    : function(domNode) { return domNode.contentEditable }
            }
        }, {
            name: "RotateElement",
            selector: function() {
                if (document.body.style.MozTransform != null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.MozTransform = "rotate(" + degrees + "deg)"
                    };
                if (document.body.style.OTransform != null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.OTransform = "rotate(" + degrees + "deg)"
                    };
                if (document.body.style
                    .WebkitTransform !=
                    null)
                    return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                        domNode.style.WebkitTransform = "rotate(" + degrees + "deg)"
                    };
                return function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {
                    var deg2radians = Math.PI * 2 / 360,
                        radians = degrees * deg2radians,
                        costheta = Math.cos(radians),
                        sintheta = Math.sin(radians),
                        newHeight = origHeight * Math.abs(costheta) + origWidth * Math.abs(sintheta),
                        newWidth = origWidth * Math.abs(costheta) + origHeight * Math.abs(sintheta),
                        newXNear = origXMid - newWidth / 2,
                        newYTop = origYMid - newHeight / 2;
                    domNode.style.left = newXNear + "px";
                    domNode.style.top = newYTop + "px";
                    domNode.filters.item(0).M11 = costheta;
                    domNode.filters.item(0).M12 = -sintheta;
                    domNode.filters.item(0).M21 = sintheta;
                    domNode.filters.item(0).M22 = costheta
                }
            }
        }, {
            name: "CreateDomEvent",
            selector: function() {
                return "createEvent" in document
                    ? function(eventType) {
                        var eventObj = document.createEvent("Event");
                        eventObj.initEvent(eventType, true, true);
                        return eventObj
                    }
                    : function(eventType) {
                        var eventObj = document.createEventObject();
                        eventObj.type = eventType;
                        return eventObj
                    }
            }
        }, {
            name: "DispatchDomEvent",
            selector: function() {
                return "dispatchEvent" in document
                    ? function(domNode, eventObj) { return domNode.dispatchEvent(eventObj) }
                    : function(domNode, eventObj) { return domNode.fireEvent("on" + eventObj.type, eventObj) }
            }
        }
    ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector();
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 DomUtils: XUI.DomUtilities,
                 GetDirection: function() { return document.documentElement.getAttribute("dir") },
                 SetText: function(domNode, newVal) {},
                 GetText: function(domNode) {},
                 GetOuterHTML: function(domNode) {},
                 SetOuterHTML: function(domNode, newVal) {},
                 GetComputedStyle: function(domNode, camelStyleName) {},
                 SetFloat: function(domNode, newVal) {},
                 SetOpacity: function(domNode, newVal) {},
                 GetOpacity: function(domNode) {},
                 RemoveOpacity: function(domNode) {},
                 IsContentEditable: function(domNode) {},
                 RotateElement: function(domNode, degrees, origXMid, origYMid, origWidth, origHeight) {},
                 CreateDomEvent: function(eventType) {},
                 DispatchDomEvent: function(domNode, eventObj) {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();
Type.registerNamespace("XUI");
XUI.Xml = function() {
    function GetActiveXObject() {
        for (var progIDs = [
                     "Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.5.0", "Msxml2.DOMDocument.4.0",
                     "Msxml2.DOMDocument.3.0", "Msxml2.DOMDocument", "MSXML.DOMDocument"
                 ],
            i = 0;
            i < progIDs.length;
            i++)
            try {
                var xmlDoc = new ActiveXObject(progIDs[i]);
                return xmlDoc
            } catch (ex) {
            }
        return null
    }

    MSXML_DOMParser = function() {};
    MSXML_DOMParser.prototype.parseFromString = function(sValue, contentType) {
        var xmlDoc = GetActiveXObject();
        if (xmlDoc != null)
            try {
                xmlDoc.async = false;
                xmlDoc.loadXML(sValue);
                xmlDoc.setProperty("SelectionLanguage", "XPath");
                return xmlDoc
            } catch (e) {
            }
        return null
    };
    MSXML_XMLSerializer = function() {};
    MSXML_XMLSerializer.prototype.serializeToString = function(node) { return node.xml || "" };
    MSXML_XPathResult = function() {
        this.singleNodeValue = null;
        this._resultNodes = null;
        var curItemIdx = 0;
        this.iterateNext = function() {
            return curItemIdx < this._resultNodes.length ? this._resultNodes[curItemIdx++] : null
        }
    };
    var ORDERED_NODE_ITERATOR_TYPE = window.XPathResult != null ? XPathResult.ORDERED_NODE_ITERATOR_TYPE : 5,
        FIRST_ORDERED_NODE_TYPE = window.XPathResult != null ? XPathResult.FIRST_ORDERED_NODE_TYPE : 9;
    MSXML_XPathEvaluator = function() {};
    MSXML_XPathEvaluator.prototype.evaluate = function(sXPath,
        contextNode,
        namespaceResolver,
        resultType,
        xPathResultObj) {
        var executeNamespaceResolver = typeof namespaceResolver === "undefined" ||
            typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true
            ? false
            : true;
        executeNamespaceResolver && namespaceResolver();
        var result;
        if (resultType == ORDERED_NODE_ITERATOR_TYPE) {
            result = new MSXML_XPathResult;
            result._resultNodes = customSelectNodes(contextNode, sXPath)
        } else if (resultType == FIRST_ORDERED_NODE_TYPE) {
            result = new MSXML_XPathResult;
            result.singleNodeValue = customSelectSingleNode(contextNode, sXPath)
        }
        return result
    };

    function isPreventNamespaceResolver() {
        return typeof window.PreventNamespaceResolver !== "undefined" && window.PreventNamespaceResolver == true
    }

    function customSelectNodes(contextNode, sXPath) {
        if (!isPreventNamespaceResolver() && typeof contextNode.selectNodes !== "undefined"
        ) return contextNode.selectNodes(sXPath);
        else if (isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient) {
            var tag = selectTag(contextNode), cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag);
            try {
                return $(contextNode).find(cssSelector)
            } catch (e) {
                return contextNode.getElementsByTagName(cssSelector)
            }
        } else return querySelectorAllNodes(contextNode, sXPath)
    }

    function customSelectSingleNode(contextNode, sXPath) {
        if (!isPreventNamespaceResolver() && typeof contextNode.selectSingleNode !== "undefined"
        ) return contextNode.selectSingleNode(sXPath);
        else if (isPreventNamespaceResolver() || typeof isMobileClient !== "undefined" && isMobileClient) {
            var tag = selectTag(contextNode), cssSelector = transformXPathSelectorToCSSSelector(sXPath, tag), selected;
            try {
                selected = $(contextNode).find(cssSelector)[0]
            } catch (e) {
                selected = contextNode.getElementsByTagName(cssSelector)[0]
            }
            if (typeof selected == "undefined") {
                var allNodes;
                try {
                    allNodes = $(contextNode).find("*")
                } catch (e) {
                    allNodes = contextNode.getElementsByTagName("*")
                }
                for (var searchTag = transformXPathSelectorToTagName(sXPath, tag), i = 0;
                    i < allNodes.length;
                    i++
                ) if (selectTag(allNodes[i]) == searchTag) return allNodes[i]
            }
            return selected
        } else return querySelectorNode(contextNode, sXPath)
    }

    function selectTag(node) {
        var tag;
        if (!isNullOrEmptyString(node.tagName)) tag = node.tagName;
        else if (typeof node
            .documentElement !==
            "undefined" &&
            !isNullOrEmptyString(node.documentElement.tagName)) tag = node.documentElement.tagName;
        return tag
    }

    function querySelectorAllNodes(contextNode, sXPath) {
        var cssSelector = transformXPathSelectorToCSSSelector(sXPath, "");
        cssSelector = cssSelector.replace(/@/g, "");
        cssSelector = cssSelector.replace(/[\w]+\\:/g, function(x) { return "*|" });
        return contextNode.querySelectorAll(cssSelector)
    }

    function querySelectorNode(contextNode, sXPath) {
        var cssSelector = transformXPathSelectorToCSSSelector(sXPath, "");
        cssSelector = cssSelector.replace(/@/g, "");
        cssSelector = cssSelector.replace(/[\w]+\\:/g, function(x) { return "*|" });
        return contextNode.querySelector(cssSelector)
    }

    function transformXPathSelectorToCSSSelector(sXPath, tag) {
        var cssSelector = sXPath;
        cssSelector = cssSelector.replace(new RegExp("default:", "g"), "");
        cssSelector = cssSelector.replace(new RegExp(":", "g"), "\\:");
        tag = tag.replace(new RegExp(":", "g"), "\\:");
        cssSelector = cssSelector.replace(new RegExp("/", "g"), " ");
        if (typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
            cssSelector = cssSelector.replace(/\[@id='(.*)\'\]/g, "#$1");
            cssSelector = cssSelector.replace(new RegExp("@", "g"), "")
        }
        cssSelector = cssSelector.trim();
        if (cssSelector.charAt(0) == ".") cssSelector = cssSelector.substr(1);
        else if (!isNullOrEmptyString(tag) &&
            cssSelector.substr(0, tag.length) == tag &&
            cssSelector.length != tag.length) cssSelector = cssSelector.substr(tag.length);
        cssSelector = cssSelector.trim();
        return cssSelector
    }

    function transformXPathSelectorToTagName(sXPath, tag) {
        var tagName = sXPath;
        tagName = tagName.replace(new RegExp("default:", "g"), "");
        tagName = tagName.replace(new RegExp("/", "g"), " ");
        if (typeof Mscrm.MobileUtility !== "undefined" && Mscrm.MobileUtility.isHostedInWindowsPhoneApp()) {
            tagName = tagName.replace(/\[@id='(.*)\'\]/g, "#$1");
            tagName = tagName.replace(new RegExp("@", "g"), "")
        }
        tagName = tagName.trim();
        if (tagName.charAt(0) == ".") tagName = tagName.substr(1);
        else if (!isNullOrEmptyString(tag) && tagName.substr(0, tag.length) == tag && tagName.length != tag.length
        ) tagName = tagName.substr(tag.length);
        tagName = tagName.trim();
        return tagName
    }

    function ShouldUseActiveXObject() {
        if ("ActiveXObject" in window)
            try {
                new ActiveXObject("Microsoft.XMLDOM");
                return true
            } catch (e) {
                return false
            }
        return false
    }

    function GetDOMParser() {
        if (ShouldUseActiveXObject()) return new MSXML_DOMParser;
        else {
            if (window.XMLDocument != null &&
            (navigator.userAgent.indexOf(" MSIE ") > -1 ||
                (navigator.userAgent.indexOf("Trident/7.0") > -1 || navigator.userAgent.indexOf("rv:11.0") > -1))) {
                if (window.XMLDocument.prototype
                    .setProperty ==
                    null) window.XMLDocument.prototype.setProperty = function(k, v) {};
                if (window.XMLDocument.prototype
                    .getProperty ==
                    null) window.XMLDocument.prototype.getProperty = function(k) { return "" };
                if (window.XMLDocument.prototype
                    .selectSingleNode ==
                    null)
                    window.XMLDocument.prototype
                        .selectSingleNode = function(expression) { return querySelectorNode(this, expression) };
                if (window.XMLDocument.prototype
                    .selectNodes ==
                    null)
                    window.XMLDocument.prototype
                        .selectNodes = function(expression) { return querySelectorAllNodes(this, expression) }
            }
            return new DOMParser
        }
    }

    function GetXMLSerializer() {
        if (ShouldUseActiveXObject()) return new MSXML_XMLSerializer;
        else return new XMLSerializer
    }

    function GetXPathEvaluator() {
        if (window.ActiveXObject != null || !window.XPathEvaluator) return new MSXML_XPathEvaluator;
        else
            try {
                var evaluator = new XPathEvaluator,
                    contextNode = GetDOMParser()
                        .parseFromString("<root />", "text/xml");
                evaluator.evaluate("/root", contextNode, null, FIRST_ORDERED_NODE_TYPE, null);
                return evaluator
            } catch (e) {
                return new MSXML_XPathEvaluator
            }
    }

    var reusableOjbects = {
        DOMParser: { instance: null, constructor: GetDOMParser },
        XMLSerializer: { instance: null, constructor: GetXMLSerializer },
        XPathEvaluator: { instance: null, constructor: GetXPathEvaluator }
    };

    function GetReusableObject(name) {
        if (reusableOjbects[name].instance == null)
            reusableOjbects[name].instance = reusableOjbects[name].constructor();
        return reusableOjbects[name].instance
    }

    var defaultReturnIfXmlDocNoSetproperty = function(contextNode, oNamespaces) {
            if (oNamespaces != null) return function(sPrefix) { return oNamespaces[sPrefix] };
            return null
        },
        functionsRequiringInit = [
            {
                name: "GetParserError",
                selector: function(xmlDoc) {
                    var fnGetParserError;
                    if (xmlDoc != null && xmlDoc.parseError != null)
                        fnGetParserError = function(xmlDoc) {
                            var parserError;
                            if (xmlDoc.parseError != 0) {
                                var props = ["errorCode", "reason", "line", "linepos", "srcText", "url", "filepos"];
                                parserError = "";
                                for (var i = 0;
                                    i < props.length;
                                    i++
                                ) parserError += props[i] + ": " + xmlDoc.parseError[props[i]] + "\n"
                            }
                            return parserError
                        };
                    else
                        fnGetParserError = function(xmlDoc) {
                            var parserError;
                            if (xmlDoc.documentElement.namespaceURI ==
                                "http://www.mozilla.org/newlayout/xml/parsererror.xml" &&
                                xmlDoc.documentElement
                                .tagName ==
                                "parsererror") parserError = xmlDoc.documentElement.textContent;
                            else if (xmlDoc.documentElement.firstChild &&
                                xmlDoc.documentElement.firstChild
                                .tagName ==
                                "parsererror") parserError = xmlDoc.documentElement.firstChild.textContent;
                            return parserError
                        };
                    return fnGetParserError
                }
            }, {
                name: "GetText",
                selector: function(contextNode) {
                    return function(contextNode) {
                        if (contextNode == null) return "";
                        return "textContent" in contextNode ? contextNode.textContent : contextNode.text
                    }
                }
            }, {
                name: "SetText",
                selector: function(contextNode) {
                    return function(contextNode, newValue) {
                        if (contextNode != null)
                            "textContent" in contextNode
                                ? (contextNode.textContent = newValue)
                                : (contextNode.text = newValue)
                    }
                }
            }, {
                name: "GetNamespaceResolver",
                selector: function(contextNode) {
                    var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document
                        ? contextNode
                        : contextNode.ownerDocument;
                    return "setProperty" in xmlDoc
                        ? function(contextNode, oNamespaces) {
                            return function(sPrefix) {
                                var xmlDoc = contextNode.nodeType == XUI.DomUtilities.NodeType.Document
                                    ? contextNode
                                    : contextNode.ownerDocument;
                                try {
                                    xmlDoc.setProperty("SelectionLanguage", "XPath")
                                } catch (ex) {
                                    Mscrm.CrmDebug.fail("Can't access setProperty method in XmlDoc");
                                    return defaultReturnIfXmlDocNoSetproperty
                                }
                                if (oNamespaces != null) {
                                    var nsDeclarations = [], nsString = "xmlns:{0}='{1}'";
                                    for (var prefix in oNamespaces
                                    ) nsDeclarations.push(String.format(nsString, prefix, oNamespaces[prefix]));
                                    xmlDoc.setProperty("SelectionNamespaces", nsDeclarations.join(" "))
                                }
                            }
                        }
                        : defaultReturnIfXmlDocNoSetproperty
                }
            }, {
                name: "CreateElementNS",
                selector: function(xmlDoc) {
                    return "createElementNS" in xmlDoc
                        ? function(xmlDoc, namespaceURI, qualifiedName) {
                            return xmlDoc.createElementNS(namespaceURI, qualifiedName)
                        }
                        : function(xmlDoc, namespaceURI, qualifiedName) {
                            return xmlDoc.createNode(1, qualifiedName, namespaceURI)
                        }
                }
            }, {
                name: "CreateDocument",
                selector: function() {
                    return "implementation" in document &&
                        "createDocument" in document.implementation &&
                        !ShouldUseActiveXObject()
                        ? function() { return document.implementation.createDocument(null, null, null) }
                        : function() { return GetActiveXObject() }
                }
            }
        ];

    function UpdateStub(fnInfo) {
        api[fnInfo.name] = function() {
            api[fnInfo.name] = fnInfo.selector(arguments[0]);
            return api[fnInfo.name].apply(api, arguments)
        }
    }

    for (var api = {
                 DomUtils: XUI.DomUtilities,
                 DOMParser: GetReusableObject("DOMParser"),
                 XMLSerializer: GetReusableObject("XMLSerializer"),
                 XPathEvaluator: GetReusableObject("XPathEvaluator"),
                 Load: function(sUrl, bAsync, fnOnSuccess, fnOnFailure) {
                     var xmlhttp = new XMLHttpRequest;
                     if (bAsync) xmlhttp.onreadystatechange = WaitForReadyState;
                     try {
                         xmlhttp.open("GET", sUrl, bAsync);
                         Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
                         xmlhttp.send()
                     } catch (ex) {
                         fnOnFailure(400, null);
                         return null
                     }
                     !bAsync && CheckXmlHttpResult();

                     function WaitForReadyState() {
                         if (xmlhttp.readyState == 4) {
                             xmlhttp.onreadystatechange = function() {};
                             CheckXmlHttpResult()
                         }
                     }

                     function CheckXmlHttpResult() {
                         if (xmlhttp.status == 200) fnOnSuccess(xmlhttp.responseXML);
                         else fnOnFailure(xmlhttp.status, xmlhttp.responseXML)
                     }
                 },
                 LoadXml: function(sXml) { return this.DOMParser.parseFromString(sXml, "text/xml") },
                 SelectNodes: function(contextNode, sXPath, oNamespaces) {
                     var result = [],
                         xPathNodes = this.XPathEvaluator
                             .evaluate(sXPath,
                                 contextNode,
                                 this.GetNamespaceResolver(contextNode, oNamespaces),
                                 ORDERED_NODE_ITERATOR_TYPE,
                                 null);
                     if (xPathNodes != null) {
                         var node = xPathNodes.iterateNext();
                         while (node != null) {
                             result.push(node);
                             node = xPathNodes.iterateNext()
                         }
                     }
                     return result
                 },
                 SelectSingleNode: function(contextNode, sXPath, oNamespaces) {
                     var xPathNode = this.XPathEvaluator
                         .evaluate(sXPath,
                             contextNode,
                             this.GetNamespaceResolver(contextNode, oNamespaces),
                             FIRST_ORDERED_NODE_TYPE,
                             null);
                     return xPathNode != null ? xPathNode.singleNodeValue : null
                 },
                 CreateNSDictionary: function(contextNode) {
                     var resolver = {};
                     if (contextNode)
                         for (var attribList = contextNode.attributes, attribLength = attribList.length, i = 0;
                             i < attribLength;
                             i++) {
                             var attrib = attribList.item(i);
                             if (attrib.prefix == "xmlns")
                                 resolver[XUI.DomUtilities.GetBaseName(attrib)] = attrib.nodeValue;
                             else if (attrib.nodeName == "xmlns") resolver["default"] = attrib.nodeValue
                         }
                     return resolver
                 },
                 GetParserError: function(xmlDoc) {},
                 GetText: function(contextNode) {},
                 SetText: function(contextNode, newValue) {},
                 GetNamespaceResolver: function(contextNode, oNamespaces) {},
                 CreateElementNS: function(xmlDoc, namespaceURI, qualifiedName) {},
                 CreateDocument: function() {}
             },
        i = 0;
        i < functionsRequiringInit.length;
        i++) UpdateStub(functionsRequiringInit[i]);
    return api
}();

function RemoteCommand(sObject, sCommand, sUrlBase, commandNameSpace) {
    this.Service = sObject;
    this.Command = sCommand;
    this.GetParameter = getParameter;
    this.ErrorHandler = RemoteCommandDefaultErrorHandler;
    this.Reference = null;
    this.Aborted = false;
    this.IgnoreCurrentSolutionContext = false;
    this.IncludeContextInPath = false;
    this.Query = null;
    var sXmlDocumentStart = "",
        sXmlDocumentEnd = "",
        oXmlHttp = new XMLHttpRequest,
        aParameters = [],
        sCommandNamespace = _sWebServicesNamespace;
    if (!IsNull(commandNameSpace)) sCommandNamespace = commandNameSpace;
    if (IsNull(sUrlBase)) sUrlBase = "/AppWebServices/";
    var sUrl = Mscrm.CrmUri.create(sUrlBase + sObject + ".asmx").toString();
    sXmlDocumentStart += '<?xml version="1.0" encoding="utf-8" ?>';
    sXmlDocumentStart +=
        '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">';
    sXmlDocumentStart += "<soap:Body>";
    sXmlDocumentStart += "<" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ' xmlns="' + sCommandNamespace + '">';
    sXmlDocumentEnd += "</" + CrmEncodeDecode.CrmXmlEncode(sCommand) + ">";
    sXmlDocumentEnd += "</soap:Body>";
    sXmlDocumentEnd += "</soap:Envelope>";
    this.Execute = execute;
    this.SetParameter = setParameter;
    this.SetXmlParameter = setXmlParameter;
    this.Abort = abort;

    function getParameter(sName) {
        var i = aParameters[sName];
        if (!IsNull(i)) return aParameters[i];
        return null
    }

    function setParameter(sName, oValue) {
        var sValue;
        if (IsNull(oValue)) sValue = "";
        else if (isArray(oValue)) {
            var sType = oValue.type;
            if (IsNull(sType) && oValue.length > 0) sType = "object";
            sValue = "";
            for (var i = 0; i < oValue.length; i++)
                sValue += "<" +
                    CrmEncodeDecode.CrmXmlEncode(sType) +
                    ">" +
                    CrmEncodeDecode.CrmXmlEncode(oValue[i]) +
                    "</" +
                    CrmEncodeDecode.CrmXmlEncode(sType) +
                    ">"
        } else sValue = CrmEncodeDecode.CrmXmlEncode(oValue);
        var oParameter = new CommandParameter(sName, sValue);
        pushCommandParameter(oParameter)
    }

    function setXmlParameter(sName, sXmlValue) {
        var oParameter = new CommandParameter(sName, IsNull(sXmlValue) ? "" : sXmlValue);
        pushCommandParameter(oParameter)
    }

    function pushCommandParameter(oParameter) {
        if (!IsNull(aParameters[oParameter.Name])) aParameters[aParameters[oParameter.Name]] = oParameter;
        else {
            aParameters[oParameter.Name] = aParameters.length;
            aParameters.push(oParameter)
        }
    }

    function abort() {
        if (!this.Aborted) {
            this.Aborted = true;
            oXmlHttp.abort()
        }
    }

    function execute(funAsyncCallbackFunction, timeout, ignoreExceptions) {
        var sXmlDocument = sXmlDocumentStart, noEx = IsNull(ignoreExceptions) ? false : ignoreExceptions;
        oXmlHttp.readyState > 0 && oXmlHttp.readyState < 4 && this.Abort();
        oXmlHttp.onreadystatechange = null;
        for (var i = 0; i < aParameters.length; i++) sXmlDocument += aParameters[i].GetXml();
        sXmlDocument += sXmlDocumentEnd;
        var async = !IsNull(funAsyncCallbackFunction), requestSw = null;
        if (Mscrm.MetricsStopwatch) {
            requestSw = new Mscrm.MetricsStopwatch("RemoteCommand.Execute");
            requestSw.properties = { IsAsync: async, Service: this.Service };
            requestSw.start()
        }
        if (async) {
            var oAsyncResultHandler = new AsyncResultHandler(this, oXmlHttp, funAsyncCallbackFunction);
            oXmlHttp.onreadystatechange = oAsyncResultHandler.ReadyStateChanged;
            oXmlHttp.metricsStopwatch = requestSw
        }
        var bTryAgain, remoteCmdResult = null, fullUrl = IsNull(this.Query) ? sUrl : sUrl + "?" + this.Query;
        do {
            bTryAgain = false;
            var commandUrl = Mscrm.CrmUri.create(fullUrl);
            commandUrl.set_includeContextInPath(this.IncludeContextInPath);
            oXmlHttp.open("POST", commandUrl.toString(), async);
            Mscrm.Utilities.setResponseTypeToMSXml(oXmlHttp);
            Mscrm.MetricsReporting && Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders(oXmlHttp);
            oXmlHttp.setRequestHeader("SOAPAction", sCommandNamespace + "/" + sCommand);
            oXmlHttp.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
            oXmlHttp.setRequestHeader("Content-Length", sXmlDocument.length);
            SetTokenInHeader(oXmlHttp, Mscrm.CrmUri.create(fullUrl));
            !this.IgnoreCurrentSolutionContext && Mscrm.SolutionDecorater.setSolutionIdInRequestHeader(oXmlHttp);
            this.Aborted = false;
            try {
                if (!IsNull(timeout) && timeout >= 0)
                    try {
                        oXmlHttp.timeout = timeout
                    } catch (e) {
                        if (!noEx) throw e
                    }
                oXmlHttp.send(sXmlDocument);
                if (oXmlHttp.readyState == 0) {
                    oXmlHttp.onreadystatechange = function() {};
                    abort()
                } else if (!async) {
                    remoteCmdResult = new RemoteCommandResult(this, oXmlHttp, false);
                    if (remoteCmdResult.Success == false) bTryAgain = remoteCmdResult.Retry;
                    else if (requestSw != null) {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if (reqId != null) requestSw.properties["ReqId"] = reqId;
                        requestSw.stop()
                    }
                }
            } catch (e) {
                var sErrorText = LOCID_REMOTECOMMAND_ERROR;
                if (noEx) bTryAgain = false;
                else bTryAgain = window.confirm(sErrorText)
            }
            if (bTryAgain) oXmlHttp = new XMLHttpRequest
        } while (bTryAgain);
        if (!async) return remoteCmdResult
    }
}

function RemoteCommandDefaultErrorHandler(sHResult, oXmlNode) {
    if (sHResult == null) sHResult = "Not available";
    var sErrMessage = "";
    if (oXmlNode != null) {
        var oDescription = XUI.Xml.SelectSingleNode(oXmlNode,
            "error/description",
            XUI.Xml.CreateNSDictionary(oXmlNode.ownerDocument.documentElement));
        if (!IsNull(oDescription)) sErrMessage = XUI.Xml.GetText(oDescription)
    }
    var errInfo = Mscrm.ErrorInformation.createFromDoc(oXmlNode), callbackFunction = null;
    if (!IsNull(window
            .closeParent) &&
        window.closeParent == true)
        callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("doErrorPostProcessing", window, null, false);
    openErrorDlg(sHResult, sErrMessage, errInfo, null, null, callbackFunction)
}

function doErrorPostProcessing() { closeWindow() }

function AsyncResultHandler(oRemoteCommand, oXmlHttp, functionCallback) {
    this.ReadyStateChanged = readyStateChanged;
    this.metricsStopwatch = null;

    function readyStateChanged() {
        if (oXmlHttp.readyState == 4) {
            oXmlHttp.onreadystatechange = null;
            if (!oRemoteCommand.Aborted && oXmlHttp.status != 0) {
                if (this.metricsStopwatch != null) {
                    if (oXmlHttp != null) {
                        var reqId = oXmlHttp.getResponseHeader("REQ_ID");
                        if (reqId != null) {
                            if (this.metricsStopwatch.properties == null) this.metricsStopwatch.properties = {};
                            this.metricsStopwatch.properties["ReqId"] = reqId
                        }
                    }
                    this.metricsStopwatch.stop()
                }
                var result = new RemoteCommandResult(oRemoteCommand, oXmlHttp, true);
                if (Mscrm.Utilities
                    .isIE11StandardOrIE11CompatibleMode())
                    window.setTimeout(function() { functionCallback(result, oRemoteCommand) }, 0);
                else functionCallback(result, oRemoteCommand);
                oXmlHttp.abort()
            }
        }
    }
}

function CommandParameter(sName, sValue) {
    this.Name = sName;
    this.Value = sValue;
    this.GetXml = getParameterXml;

    function getParameterXml() {
        var sXml = "<" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        sXml += this.Value;
        sXml += "</" + CrmEncodeDecode.CrmXmlEncode(this.Name) + ">";
        return sXml
    }
}

function RemoteCommandResult(oRemoteCommand, oXmlHttp, bIsAsync) {
    var sCommand = oRemoteCommand.Command, oXml = oXmlHttp.responseXML;
    this.RemoteCommand = oRemoteCommand;
    this.RawResponse = oXml;
    this.Xml = null;
    this.ReturnValue = null;
    var soapBodyNode = null, defaultNSName = null;
    if (!IsNull(oXml)) {
        var sNamespace = "";
        if (XUI.DomUtilities.HasChildElements(oXml)) sNamespace = XUI.DomUtilities.GetLastChild(oXml).prefix + ":";
        var soapBodyNode = XUI.Xml.SelectSingleNode(oXml,
                "/" + sNamespace + "Envelope/" + sNamespace + "Body",
                XUI.Xml.CreateNSDictionary(oXml.documentElement)),
            soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
            xmlNSAttribute = null;
        if (!IsNull(soadpBodyFirstChild)) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
        var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
        this.Xml = defaultNSName
            ? XUI.Xml.SelectSingleNode(soapBodyNode,
                "./default:" + sCommand + "Response/default:" + sCommand + "Result",
                { "default": defaultNSName })
            : null;
        this.ReturnValue = ReadXml(this.Xml)
    }
    var oResult = handleSoapResponse(oXmlHttp, bIsAsync);
    this.Success = oResult.Success;
    this.Retry = oResult.Retry;
    this.ConvertToObject = ReadXml;
    this.ErrorCode = oResult.ErrorCode;
    this.ErrorDescription = oResult.ErrorDescription;

    function handleSoapResponse(oXmlHttp, bAsyncRequest) {
        var sHResult = null,
            oXmlNode = null,
            oErrorNode,
            bSuccess = true,
            oXml = oXmlHttp.responseXML,
            nsDictionary = null,
            sNamespace = "",
            parseError = null,
            errorDescription = "";
        if (!IsNull(oXml)) {
            nsDictionary = XUI.Xml.CreateNSDictionary(oXml.documentElement);
            sNamespace = XUI.DomUtilities
                .HasChildElements(oXml)
                ? XUI.DomUtilities.GetLastChild(oXml).prefix + ":"
                : "";
            parseError = XUI.Xml.GetParserError(oXml)
        }
        if (parseError) {
            sHResult = "XmlParseError";
            bSuccess = false
        } else if (oXmlHttp.status == 401) {
            sHResult = "0x80040277";
            bSuccess = false
        } else if (oXmlHttp.status != 200) {
            oXmlNode = !IsNull(oXml)
                ? XUI.Xml.SelectSingleNode(oXml,
                    "/" + sNamespace + "Envelope/" + sNamespace + "Body/" + sNamespace + "Fault",
                    nsDictionary)
                : null;
            if (!IsNull(oXmlNode)) {
                oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "error/code", nsDictionary);
                if (!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode);
                else {
                    oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "detail/error/code", nsDictionary);
                    if (!IsNull(oErrorNode)) sHResult = XUI.Xml.GetText(oErrorNode)
                }
            } else sHResult = "ServerError";
            bSuccess = false
        }
        if (bSuccess) {
            var soapBodyNode = XUI.Xml.SelectSingleNode(oXml,
                    "/" + sNamespace + "Envelope/" + sNamespace + "Body",
                    nsDictionary),
                soadpBodyFirstChild = soapBodyNode ? XUI.DomUtilities.GetFirstChild(soapBodyNode) : null,
                xmlNSAttribute = null;
            if (soadpBodyFirstChild != null) xmlNSAttribute = soadpBodyFirstChild.attributes.getNamedItem("xmlns");
            var defaultNSName = xmlNSAttribute ? xmlNSAttribute.nodeValue : null;
            oXmlNode = defaultNSName
                ? XUI.Xml.SelectSingleNode(soapBodyNode,
                    "./default:" + sCommand + "Response",
                    { "default": defaultNSName })
                : null;
            if (IsNull(oXmlNode)) {
                sHResult = "SoapError";
                bSuccess = false
            }
        }
        if (!bSuccess) {
            var bRetry = false;
            if (sHResult == ERRORCODE_ETM) {
                if (!bAsyncRequest) bRetry = window.confirm(LOCID_ERRMSG_ETM_RETRY)
            } else oRemoteCommand.ErrorHandler && oRemoteCommand.ErrorHandler(sHResult, oXmlNode)
        }
        if (sHResult == "0x8004F50F") {
            oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "error/description", nsDictionary);
            if (!IsNull(oErrorNode)) errorDescription = XUI.Xml.GetText(oErrorNode);
            else {
                oErrorNode = XUI.Xml.SelectSingleNode(oXmlNode, "detail/error/description", nsDictionary);
                if (!IsNull(oErrorNode)) errorDescription = XUI.Xml.GetText(oErrorNode)
            }
            return { Success: bSuccess, Retry: bRetry, ErrorCode: sHResult, ErrorDescription: errorDescription }
        } else return { Success: bSuccess, Retry: bRetry }
    }

    function ReadXml(oXml) {
        var oReturnFromLoop = false, oReturnValue = {};
        if (IsNull(oXml)) return oReturnValue;
        var sReturnValue = "";
        XUI.DomUtilities.ForEachChild(oXml,
            function(oChildNode) {
                var oChildNodeBaseName = XUI.DomUtilities.GetBaseName(oChildNode);
                switch (oChildNode.nodeType) {
                case 1:
                    var oChildObject = ReadXml(oChildNode);
                    if (IsNull(oReturnValue[oChildNodeBaseName])) oReturnValue[oChildNodeBaseName] = oChildObject;
                    else {
                        if (!isArray(oReturnValue[oChildNodeBaseName])) {
                            var property = oReturnValue[oChildNodeBaseName];
                            oReturnValue[oChildNodeBaseName] = [];
                            oReturnValue[oChildNodeBaseName].push(property)
                        }
                        oReturnValue[oChildNodeBaseName].push(oChildObject)
                    }
                    break;
                case 3:
                    var parsedValue = fromString(oChildNode.nodeValue);
                    if (sReturnValue.length > 0 || typeof parsedValue == "string") {
                        sReturnValue += fromString(oChildNode.nodeValue);
                        oReturnFromLoop = true
                    } else {
                        oReturnValue = parsedValue;
                        oReturnFromLoop = true;
                        return true
                    }
                    break;
                case 4:
                    sReturnValue += XUI.Xml.GetText(oChildNode);
                    oReturnFromLoop = true;
                    break;
                default:
                    break
                }
                return false
            });
        if (sReturnValue.length > 0) oReturnValue = sReturnValue;
        if (oReturnFromLoop) return oReturnValue;
        if (IsNull(oReturnValue.xmlAttributes)) {
            var attributes = oXml.attributes;
            if (attributes.length > 0) {
                oReturnValue.xmlAttributes = {};
                for (var i = 0;
                    i < attributes.length;
                    i++
                )
                    oReturnValue.xmlAttributes[XUI.DomUtilities
                        .GetBaseName(attributes.item(i))] = fromString(attributes.item(i).nodeValue)
            }
        }
        return oReturnValue
    }

    function fromString(sValue) {
        if (sValue.toLowerCase() == "true") return true;
        else if (sValue.toLowerCase() == "false") return false;
        var intValue = parseInt(sValue, 10);
        if (!isNaN(intValue) && intValue.toString() == sValue) return intValue;
        var floatValue = parseFloat(sValue);
        if (!isNaN(floatValue) && floatValue.toString() == sValue) return floatValue;
        if (sValue.length > 19) return sValue;
        var dateValue = new Date(sValue);
        if (isNaN(dateValue) && !Date.prototype.toISOString) dateValue = ParseUTCDateFromISOString(sValue);
        if (dateValue != null && !isNaN(dateValue) && dateValue.getFullYear() >= 1900 && dateValue.getFullYear() < 5e3
        ) return dateValue;
        return sValue
    }

    function ParseUTCDateFromISOString(s) {
        var dateRegex = /^(\d{4}\-\d\d\-\d\d([tT]\d\d:\d\d:\d\d*)?)$/, dateValid = dateRegex.exec(s);
        if (dateValid == null) return null;
        if (s.length > 10)
            return new Date(Date.UTC(parseInt(s.substr(0, 4), 10),
                parseInt(s.substr(5, 2), 10) - 1,
                parseInt(s.substr(8, 2), 10),
                parseInt(s.substr(11, 2), 10),
                parseInt(s.substr(14, 2), 10),
                parseInt(s.substr(17, 2), 10)));
        else
            return new Date(Date.UTC(parseInt(s.substr(0, 4), 10),
                parseInt(s.substr(5, 2), 10) - 1,
                parseInt(s.substr(8, 2), 10)))
    }
}

function ConvertUserTypeToLike(searchValue) {
    for (var s = "", sChar = "", iLength = searchValue.length, i = 0; i < iLength; i++) {
        sChar = searchValue.charAt(i);
        switch (sChar) {
        case "%":
            s += "[%]";
            break;
        case "_":
            s += "[_]";
            break;
        case "[":
            s += "[[]";
            break;
        case "*":
            s += "%";
            break;
        default:
            s += sChar;
            break
        }
    }
    return s
}

function GetNodeValue(input, searchName, bNoDecode) {
    if (!input || !searchName) return "";
    var rootStart = input.indexOf("<" + searchName + ">");
    if (rootStart == -1) {
        rootStart = input.indexOf("<" + searchName + " ");
        if (rootStart == -1) return ""
    }
    var startIndex = input.indexOf(">", rootStart) + 1, endIndex = input.indexOf("</" + searchName + ">", startIndex);
    if (endIndex == -1) return "";
    else
        return bNoDecode
            ? input.substring(startIndex, endIndex)
            : CrmEncodeDecode.CrmXmlDecode(input.substring(startIndex, endIndex))
}

function GetCachedSetting(settingName, defaultValue) {
    if (window.top.oSettingsCache != null) {
        var stateValue = window.top.oSettingsCache[settingName];
        if (stateValue != null) return stateValue
    }
    return defaultValue
}

function SetCachedSetting(settingName, stateValue) {
    if (window.top.oSettingsCache == null) window.top.oSettingsCache = {};
    window.top.oSettingsCache[settingName] = stateValue
}

function ScrollVerticalList(oContainer, oSelected, iSelectedIndex, iNumItems, bAlignToTop) {
    (oContainer.scrollTop > iSelectedIndex / iNumItems * oContainer.scrollHeight ||
            oContainer
            .scrollTop +
            oContainer.clientHeight <
            (iSelectedIndex + 1) / iNumItems * oContainer.scrollHeight) &&
        oSelected.scrollIntoView(bAlignToTop)
}

function getNumDigits(iVal) {
    if (isNaN(iVal)) return -1;
    if (iVal == null) return 0;
    var tempVal = iVal, countDigits = 0;
    while (tempVal != 0) {
        tempVal = tempVal / 10;
        tempVal = parseInt(tempVal, 10);
        countDigits++
    }
    return countDigits
}

function GetEntityIdAndDisplayName(entityData) {
    var resultsXmlDoc = null, entityId = "", displayName = "";
    try {
        resultsXmlDoc = XUI.Xml.LoadXml(entityData);
        var entityIdNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//EntityId", null),
            displayNameNode = XUI.Xml.SelectSingleNode(resultsXmlDoc, "//DisplayName", null);
        entityId = IsNull(entityIdNode) ? "" : XUI.Xml.GetText(entityIdNode);
        displayName = IsNull(displayNameNode) ? "" : XUI.Xml.GetText(displayNameNode)
    } catch (e) {
    }
    return { EntityId: entityId, DisplayName: displayName }
}

function toBool(sValue) { return sValue.toLowerCase() == "true" }

function QualifyLeadSuppressDeDup() {
    var leadQualifyDataXmlDoc = XUI.Xml.LoadXml(_qualifyLeadData),
        oShowNew = toBool(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlShowNew", null))),
        oCreateAccount = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateAccount", null))),
        oCreateContact = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateContact", null))),
        oCreateOpportunity = toBool(XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlCreateOpportunity", null))),
        oNewStatus = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//ulNewStatus", null)),
        oOppCurrencyId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlOppCurrencyId", null)),
        oOpportunityParentType = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentType", null)),
        oOpportunityParentId = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(leadQualifyDataXmlDoc, "//qlOpportunityParentId", null)),
        oLeadId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlLeadId", null)),
        ocampaignId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignId", null)),
        ocampaignType = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(leadQualifyDataXmlDoc, "//qlCampaignType", null)),
        formEntityOtc = parseInt(document.getElementById("crmFormSubmitObjectType").value, 10);
    if (formEntityOtc == Mscrm.EntityTypeCode.CampaignResponse
    )
        QualifyLead(oLeadId,
            oShowNew,
            oCreateAccount,
            oCreateContact,
            oCreateOpportunity,
            oOpportunityParentType,
            oOpportunityParentId,
            true);
    else
        formEntityOtc == Mscrm.EntityTypeCode.Lead &&
            qualifyLead(oShowNew,
                oCreateAccount,
                oCreateContact,
                oCreateOpportunity,
                oOpportunityParentType,
                oOpportunityParentId,
                oOppCurrencyId,
                oNewStatus,
                true)
}

function CheckForDuplicates(iEventType, sRedirectUrl) {
    var dataXml = "",
        crmFormCtrl = $find("crmForm"),
        success = crmFormCtrl.BuildXml(false, false, true),
        xml = window.document.getElementById("crmFormSubmitXml");
    dataXml = xml.value;
    var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/ViewDuplicates/ViewDuplicatesOnline.aspx?source=1"),
        oid = window.document.getElementById("crmFormSubmitId");
    if (oid && oid.value && oid.value != "") oUrl.get_query()["oid"] = oid.value;
    var dataXmlObj = {};
    dataXmlObj.xml = dataXml;
    var changedDataXmlObj = {};
    changedDataXmlObj.xml = _changedFormData;
    var dataXmlArray;
    if (typeof _dupActionName != "undefined") dataXmlArray = [dataXmlObj, changedDataXmlObj, _dupActionName];
    else dataXmlArray = [dataXmlObj, changedDataXmlObj];
    var innerPageManager = $find("crmInlinePageManager");
    if (IsNull(innerPageManager)) innerPageManager = $find("crmPageManager");
    var parameters = [iEventType, sRedirectUrl, crmFormCtrl, innerPageManager],
        callbackFunction = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterViewDuplicates", this, parameters),
        entityData = openStdDlgWithCallback(oUrl, dataXmlArray, 560, 560, callbackFunction, false, false);
    isOutlookHostedWindow() &&
        performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager)
}

function performActionAfterViewDuplicates(entityData, iEventType, sRedirectUrl, crmFormCtrl, innerPageManager) {
    entityData == "QualifyLead" && QualifyLeadSuppressDeDup();
    var entityId = "", displayName = "", returnValues;
    if (entityData && entityData != "") {
        returnValues = GetEntityIdAndDisplayName(entityData);
        if (!IsNull(returnValues)) {
            entityId = returnValues.EntityId;
            displayName = returnValues.DisplayName
        }
    }
    if (entityId && entityId != "") {
        crmFormCtrl.detachCloseAlert();
        if (iEventType == 2) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                innerPageManager.executeDeferredActions();
                return
            }
            var oType = window.document.getElementById("crmFormSubmitObjectType").value;
            try {
                if (window.opener.location.href
                    .indexOf("resolve.aspx") >
                    0) window.opener.auto(oType, displayName, entityId);
                else window.opener.auto(oType)
            } catch (e) {
            }
            closeWindow()
        } else if (iEventType == 1) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            var sLocation = location.href, separator = sLocation.indexOf("?") != -1 ? "&" : "?", poundIndex = -1;
            if ((poundIndex = sLocation.indexOf("#")) != -1) sLocation = sLocation.substr(0, poundIndex);
            if (sLocation.indexOf("?id=") == -1 && sLocation.indexOf("&id=") == -1) {
                sLocation = sLocation + separator + "id=" + entityId;
                separator = "&"
            }
            if (sLocation
                .indexOf("?refreshgrid=") ==
                -1 &&
                sLocation.indexOf("&refreshgrid=") == -1) sLocation = sLocation + separator + "refreshgrid=1";
            window.location.href = sLocation
        } else if (iEventType == 59) {
            if (!IsNull(Mscrm.PageManager) &&
                Mscrm.PageManager.isFlatUIPage() &&
                !IsNull(Mscrm.PageManager.get_instance())) {
                var parameters = {};
                parameters["newId"] = entityId;
                innerPageManager.executeDeferredActions(parameters);
                return
            }
            window.location.href = sRedirectUrl
        }
    }
}

function customErrorHandler(ex, iEventType, sUrl) {
    if (ex == "0x80040333") {
        CheckForDuplicates(iEventType, sUrl);
        return true
    }
    return false
}

function escapeSingleQuotesAndBackSlashes(s) {
    s = s.replace(/\\/g, "\\\\");
    return s.replace(/'/g, "\\'")
}

function FormatDateTime(dDateTime) {
    var DATE_SEPARATOR = "-", DATETIME_SEPARATOR = "T", TIME_SEPARATOR = ":", oBuilder = new StringBuilder;
    oBuilder.Append(dDateTime.getFullYear());
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMonth() + 1));
    oBuilder.Append(DATE_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getDate()));
    oBuilder.Append(DATETIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getHours()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getMinutes()));
    oBuilder.Append(TIME_SEPARATOR);
    oBuilder.Append(PadNumber(dDateTime.getSeconds()));
    return oBuilder.ToString()
}

function PadNumber(iNumber, iLength) {
    var PAD_CHAR = "0", DEFAULT_LENGTH = 2;
    if (iLength == null) iLength = DEFAULT_LENGTH;
    for (var sNumber = new String(iNumber), oBuilder = new StringBuilder, i = 0;
        i < iLength - sNumber.length;
        i++
    ) oBuilder.Append(PAD_CHAR);
    oBuilder.Append(sNumber);
    return oBuilder.ToString()
}

function isControlVisible(oElement) { return XUI.Html.GetComputedStyle(oElement, "display") === "none" ? false : true }

function isDocumentHidden() {
    if (typeof document.visibilityState !== "undefined") {
        if (document.visibilityState == "hidden") return true;
        return false
    }
    if (document.body.offsetHeight == 0) return true;
    if (document.body.offsetWidth == 0) return true;
    return false
}