Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.ConnectionRoleObjectTypeList = function(element) {
    this.$$d_$I_4 = Function.createDelegate(this, this.$I_4);
    this.$$d_$H_4 = Function.createDelegate(this, this.$H_4);
    Mscrm.FormInputControl.ConnectionRoleObjectTypeList.initializeBase(this, [element])
};
Mscrm.FormInputControl.ConnectionRoleObjectTypeList.prototype = {
    $9_4: null,
    $A_4: null,
    $6_4: false,
    $5_4: 0,
    $1_4: null,
    $3_4: null,
    $0_4: null,
    $B_4: false,
    $4_4: null,
    $8_4: null,
    $7_4: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = this.get_element().getElementsByTagName("input"), $v_1 = $v_0.length - 2;
        this.$0_4 = new Array($v_1);
        this.$4_4 = new Array($v_1);
        for (var $v_2 = 0, $v_3 = 0, $v_4 = $v_0.length; $v_2 < $v_4; $v_2++) {
            var $v_5 = $v_0[$v_2];
            if ($v_5.id === this.$9_4) {
                this.$1_4 = $v_5;
                this.$B_4 = this.$1_4.checked
            } else if ($v_5.id === this.$A_4) this.$3_4 = $v_5;
            else {
                this.$0_4[$v_3] = $v_5;
                this.$4_4[$v_3] = $v_5.checked;
                if (this.$4_4[$v_3]) this.$5_4++;
                $addHandler($v_5, "click", this.$$d_$H_4);
                $v_3++;
                if ($v_5.value === "appointment") this.$8_4 = $v_5;
                else if ($v_5.value === "recurringappointmentmaster") this.$7_4 = $v_5
            }
        }
        $addHandler(this.$1_4, "click", this.$$d_$I_4);
        $addHandler(this.$3_4, "click", this.$$d_$I_4)
    },
    get_radioButtonAllId: function() { return this.$9_4 },
    set_radioButtonAllId: function(value) {
        this.$9_4 = value;
        return value
    },
    get_radioButtonSelectedId: function() { return this.$A_4 },
    set_radioButtonSelectedId: function(value) {
        this.$A_4 = value;
        return value
    },
    get_readOnly: function() { return this.$6_4 },
    set_readOnly: function(value) {
        this.$6_4 = value;
        return value
    },
    get_checkedCount: function() { return this.$5_4 },
    $I_4: function($p0) { this.$C_4(this.$1_4.checked) },
    $H_4: function($p0) {
        var $v_0 = $p0.target;
        this.$5_4 += $v_0.checked ? 1 : -1;
        if ($v_0 === this.$7_4 || $v_0 === this.$8_4) {
            var $v_1 = $v_0 === this.$7_4 ? this.$8_4 : this.$7_4;
            if ($v_1.checked !== $v_0.checked) {
                this.$5_4 += $v_1.checked ? 1 : -1;
                $v_1.checked = $v_0.checked
            }
        }
    },
    $D_4: function($p0) {
        if (this.$1_4.checked) return '<type id="0" value="1"/>';
        else {
            for (var $v_0 = new Sys.StringBuilder, $v_1 = 0, $v_2 = this.$0_4.length; $v_1 < $v_2; $v_1++)
                if ($p0) {
                    if (this.$0_4[$v_1].checked !== this.$4_4[$v_1]) {
                        $v_0.append('<type id="');
                        $v_0.append(CrmEncodeDecode.CrmXmlEncode(this.$0_4[$v_1].value));
                        $v_0.append('" value="');
                        $v_0.append(this.$0_4[$v_1].checked ? "1" : "0");
                        $v_0.append('"/>')
                    }
                } else if (this.$0_4[$v_1].checked) {
                    $v_0.append('<type id="');
                    $v_0.append(CrmEncodeDecode.CrmXmlEncode(this.$0_4[$v_1].value));
                    $v_0.append('" value="1"')
                }
            return $v_0.isEmpty() ? null : $v_0.toString()
        }
    },
    $E_4: function($p0) {
        this.$6_4 = $p0;
        this.$1_4.disabled = this.$3_4.disabled = $p0;
        if ($p0) {
            Sys.UI.DomElement.addCssClass(this.$1_4, "ms-crm-ReadOnly");
            Sys.UI.DomElement.addCssClass(this.$3_4, "ms-crm-ReadOnly")
        } else {
            Sys.UI.DomElement.removeCssClass(this.$1_4, "ms-crm-ReadOnly");
            Sys.UI.DomElement.removeCssClass(this.$3_4, "ms-crm-ReadOnly")
        }
        this.$C_4($p0)
    },
    get_$G_4: function() {
        if (this.$1_4.checked !== this.$B_4) return true;
        for (var $v_0 = 0, $v_1 = this.$0_4.length;
            $v_0 < $v_1;
            $v_0++
        ) if (this.$0_4[$v_0].checked !== this.$4_4[$v_0]) return true;
        return false
    },
    IsValid: function() {
        if (this.$1_4.checked) return true;
        for (var $v_0 = 0, $v_1 = this.$0_4.length; $v_0 < $v_1; $v_0++) if (this.$0_4[$v_0].checked) return true;
        return false
    },
    setFocus: function() { this.$1_4.focus() },
    $C_4: function($p0) {
        for (var $v_0 = 0, $v_1 = this.$0_4.length; $v_0 < $v_1; $v_0++) {
            this.$0_4[$v_0].disabled = $p0;
            if ($p0) Sys.UI.DomElement.addCssClass(this.$0_4[$v_0], "ms-crm-ReadOnly");
            else Sys.UI.DomElement.removeCssClass(this.$0_4[$v_0], "ms-crm-ReadOnly")
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$1_4, "click", this.$$d_$I_4);
        $removeHandler(this.$3_4, "click", this.$$d_$I_4);
        for (var $v_0 = 0, $v_1 = this.$0_4.length;
            $v_0 < $v_1;
            $v_0++
        ) $removeHandler(this.$0_4[$v_0], "click", this.$$d_$H_4);
        Mscrm.UIControl.prototype.dispose.call(this)
    }
};
Mscrm.FormInputControl.ConnectionRoleObjectTypeListInputBehavior = function(element) {
    this.$$d_$J_4 = Function.createDelegate(this, this.$J_4);
    Mscrm.FormInputControl.ConnectionRoleObjectTypeListInputBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.ConnectionRoleObjectTypeListInputBehavior.prototype = {
    $2_4: null,
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        this.$2_4 = $find(this.get_element().id);
        Sys.Application.add_load(this.$$d_$J_4)
    },
    get_isDirty: function() { return this.$2_4.get_$G_4() },
    get_dataXml: function() {
        return String.format("<{0}>{1}</{0}>",
            CrmEncodeDecode.CrmXmlEncode(this.get_element().id),
            this.$2_4.$D_4(true))
    },
    get_dataValue: function() { return this.$2_4.$D_4(false) },
    set_dataValue: function(value) { return value },
    get_requiredLevel: function() { return 2 },
    set_requiredLevel: function(value) { return value },
    get_disabled: function() { return this.$2_4.$6_4 },
    set_disabled: function(value) {
        this.$2_4.$E_4(value);
        return value
    },
    setFocus: function() { this.$2_4.setFocus() },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Sys.Application.remove_load(this.$$d_$J_4);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $J_4: function($p0, $p1) {
        var $v_0 = $find("PrimaryEntity");
        !IsNull($v_0) && $v_0.registerOtherData(new Mscrm.HtcProxyFormData(this))
    }
};
Mscrm.FormInputControl.ConnectionRoleObjectTypeList
    .registerClass("Mscrm.FormInputControl.ConnectionRoleObjectTypeList", Mscrm.UIControl);
Mscrm.FormInputControl.ConnectionRoleObjectTypeListInputBehavior
    .registerClass("Mscrm.FormInputControl.ConnectionRoleObjectTypeListInputBehavior", Mscrm.FormControlInputBehavior)