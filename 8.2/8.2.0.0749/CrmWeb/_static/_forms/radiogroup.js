Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.RadioGroupBehavior = function(element) {
    this.$$d_$C_4 = Function.createDelegate(this, this.$C_4);
    this.$$d_$9_4 = Function.createDelegate(this, this.$9_4);
    Mscrm.FormInputControl.RadioGroupBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue = function(dataValue) {
    if (!IsNull(dataValue)) {
        var $v_0 = typeof dataValue;
        if (!IsNull($v_0))
            if ($v_0.toLowerCase() === "boolean") return dataValue;
            else if ($v_0.toLowerCase() === "string") {
                var $v_1 = dataValue;
                if ($v_1.toLowerCase() === "checked") return true;
                else if ($v_1.length > 0) return Boolean.parse($v_1)
            }
    }
    return false
};
Mscrm.FormInputControl.RadioGroupBehavior.prototype = {
    $5_4: false,
    $6_4: false,
    $3_4: null,
    $0_4: null,
    $1_4: null,
    $2_4: null,
    $4_4: null,
    add_focus: function(value) { this.get_events().addHandler("RadioOnFocus", value) },
    remove_focus: function(value) { this.get_events().removeHandler("RadioOnFocus", value) },
    add_change: function(value) { this.get_events().addHandler("RadioOnChange", value) },
    remove_change: function(value) { this.get_events().removeHandler("RadioOnChange", value) },
    add_onchange: function(value) { this.get_events().addHandler("RadioOnChange", value) },
    remove_onchange: function(value) { this.get_events().removeHandler("RadioOnChange", value) },
    get_isDirty: function() { return this.$3_4 !== this.$7_4() },
    get_dataXml: function() {
        var $v_0 = this.$7_4(), $v_1 = "";
        if (!IsNull($v_0))
            if (this.$0_4.length > 2) $v_1 = $v_0;
            else $v_1 = $v_0 ? "1" : "0";
        return String.format("<{0}>{1}</{0}>", this.get_element().id, CrmEncodeDecode.CrmXmlEncode($v_1))
    },
    get_dataValue: function() { return this.$7_4() },
    set_dataValue: function(value) {
        this.$D_4(value);
        return value
    },
    get_defaultValue: function() { return this.$3_4 },
    get_disabled: function() { return Mscrm.FormControlInputBehavior.prototype.get_disabled.call(this) },
    set_disabled: function(value) {
        Mscrm.FormControlInputBehavior.prototype.set_disabled.call(this, value);
        for (var $v_0 = 0; $v_0 < this.$0_4.length; $v_0++) this.$0_4[$v_0].disabled = value;
        !value && this.$8_4();
        return value
    },
    initialize: function() {
        this.$0_4 = this.get_element().getElementsByTagName("INPUT");
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        this.$1_4 = this.$$d_$9_4;
        this.$2_4 = this.$$d_$C_4;
        if (!this.get_disabled()) {
            this.$8_4();
            this.$B_4()
        }
        var $v_0 = window.FORM_TYPE;
        if (IsNull($v_0) || $v_0 !== "BulkEdit") {
            this.$3_4 = this.$7_4();
            this.get_element().DefaultValue = this.$3_4
        }
    },
    get_isDataSlugSupported: function() { return true },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_4))
            for (var $v_2 = this.$0_4.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
                !IsNull(this.$1_4) && this.$5_4 && $removeHandler(this.$0_4[$v_3], "click", this.$1_4);
                !IsNull(this.$2_4) && this.$6_4 && $removeHandler(this.$0_4[$v_3], "focus", this.$2_4)
            }
        this.$1_4 = null;
        this.$2_4 = null;
        this.$5_4 = false;
        this.$6_4 = false;
        var $v_0 = this.get_events().getHandler("RadioOnFocus");
        !IsNull($v_0) && this.remove_focus($v_0);
        var $v_1 = this.get_events().getHandler("RadioOnChange");
        !IsNull($v_1) && this.remove_change($v_1);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $C_4: function($p0) {
        var $v_0 = this.get_events().getHandler("RadioOnFocus");
        !IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
    },
    $9_4: function($p0) {
        if ($p0.target !== this.$4_4) {
            this.$4_4 = $p0.target;
            var $v_0 = this.get_events().getHandler("RadioOnChange");
            !IsNull($v_0) && $v_0(this, Sys.EventArgs.Empty)
        }
    },
    setFocus: function() {
        var form = $find("crmForm");
        !IsNull(form) && form.GetTab(this.get_element(), true);
        this.$0_4[0].focus()
    },
    fireOnChange: function() { this.$9_4(null) },
    $8_4: function() {
        for (var $v_0 = this.$0_4.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            $addHandler(this.$0_4[$v_1], "click", this.$1_4);
            var $v_2 = this.$0_4[$v_1];
            if (!IsNull($v_2) && $v_2.checked) {
                var $v_3 = window.FORM_TYPE;
                if (!IsNull($v_3) && $v_3 === "BulkEdit") this.$0_4[$v_1].setAttribute("checked", false);
                else this.$4_4 = this.$0_4[$v_1]
            }
        }
        this.$5_4 = true
    },
    $B_4: function() {
        for (var $v_0 = this.$0_4
                     .length,
            $v_1 = 0;
            $v_1 < $v_0;
            $v_1++) $addHandler(this.$0_4[$v_1], "focus", this.$2_4);
        this.$6_4 = true
    },
    $7_4: function() {
        var $v_0 = this.$A_4();
        if (!IsNull($v_0)) {
            var $v_1 = this.get_element().getAttribute("atype");
            if (IsNull($v_1) || $v_1.toLowerCase() === "boolean") return $v_0 === "1";
            return $v_0
        }
        return null
    },
    $A_4: function() {
        for (var $v_0 = this.$0_4.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$0_4[$v_1];
            if (!IsNull($v_2) && $v_2.checked) return this.$0_4[$v_1].getAttribute("value")
        }
        return null
    },
    $D_4: function($p0) {
        var $v_0 = this.get_element().getAttribute("atype"), $v_1 = !IsNull($v_0) ? $v_0.toLowerCase() : "";
        if (IsNull($p0) && $v_1 !== "string") $p0 = -1;
        else if (IsNull($p0) && $v_1 === "string") $p0 = "";
        else if (!$v_1.length || $v_1 === "boolean") {
            var $v_3 = typeof $p0;
            if (!IsNull($v_3) && $v_3.toLowerCase() !== "boolean") {
                alert(window.LOCID_DEVERROR_BADDATATYPE_BOOL);
                return
            }
            $p0 = $p0 ? 1 : 0
        }
        for (var $v_2 = this.$0_4.length, $v_4 = 0; $v_4 < $v_2; $v_4++) {
            var $v_5 = this.$0_4[$v_4].getAttribute("value");
            if (!IsNull($p0) && !IsNull($v_5)) {
                var $v_6 = $get(this.$0_4[$v_4].id);
                if (!IsNull($v_6)) {
                    var $v_7 = $p0.toString() === $v_5.toString();
                    $v_6.checked = $v_7;
                    if ($v_7) this.$4_4 = this.$0_4[$v_4]
                }
            }
        }
        this.handleDataValueChangedEvent()
    }
};
Mscrm.FormInputControl.RadioGroupBehavior.registerClass("Mscrm.FormInputControl.RadioGroupBehavior",
    Mscrm.FormControlInputBehavior)