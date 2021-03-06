Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.AccessPrivilegeBehavior = function(element) {
    this.$$d_$9_4 = Function.createDelegate(this, this.$9_4);
    Mscrm.FormInputControl.AccessPrivilegeBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.AccessPrivilegeBehavior.prototype = {
    $7_4: 0,
    $4_4: null,
    $6_4: null,
    $3_4: null,
    $0_4: null,
    $1_4: null,
    $5_4: null,
    $2_4: null,
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        this.$4_4 = $get("Read_Access_CheckBox", this.get_element());
        this.$6_4 = $get("Write_Access_CheckBox", this.get_element());
        this.$3_4 = $get("Delete_Access_CheckBox", this.get_element());
        this.$0_4 = $get("Append_Access_CheckBox", this.get_element());
        this.$1_4 = $get("AppendTo_Access_CheckBox", this.get_element());
        this.$5_4 = $get("Share_Access_CheckBox", this.get_element());
        this.$2_4 = $get("Assign_Access_CheckBox", this.get_element());
        var $v_0 = this.get_element().getAttribute("initialValue");
        if (!isNullOrEmptyString($v_0)) this.$7_4 = parseInt($v_0, 10);
        else this.$7_4 = 0;
        this.set_dataValue(this.$7_4);
        $addHandler(this.$4_4, "change", this.$$d_$9_4);
        $addHandler(this.$6_4, "change", this.$$d_$9_4);
        $addHandler(this.$3_4, "change", this.$$d_$9_4);
        $addHandler(this.$0_4, "change", this.$$d_$9_4);
        $addHandler(this.$1_4, "change", this.$$d_$9_4);
        $addHandler(this.$5_4, "change", this.$$d_$9_4);
        $addHandler(this.$2_4, "change", this.$$d_$9_4)
    },
    $8_4: function() {
        var $v_0 = 0;
        if (this.$4_4.checked) $v_0 = $v_0 | 1;
        if (this.$6_4.checked) $v_0 = $v_0 | 2;
        if (this.$3_4.checked) $v_0 = $v_0 | 65536;
        if (this.$0_4.checked) $v_0 = $v_0 | 4;
        if (this.$1_4.checked) $v_0 = $v_0 | 16;
        if (this.$5_4.checked) $v_0 = $v_0 | 262144;
        if (this.$2_4.checked) $v_0 = $v_0 | 524288;
        return $v_0
    },
    get_isDirty: function() { return this.$7_4 !== this.$8_4() },
    get_dataXml: function() {
        var $v_0 = this.$8_4(), $v_1 = this.get_element().id;
        return String.format("<{0}>{1}</{0}>", $v_1, $v_0)
    },
    get_dataValue: function() { return this.$8_4() },
    set_dataValue: function(value) {
        var $v_0 = value;
        if ($v_0 & 1) this.$4_4.checked = true;
        if ($v_0 & 2) this.$6_4.checked = true;
        if ($v_0 & 65536) this.$3_4.checked = true;
        if ($v_0 & 4) this.$0_4.checked = true;
        if ($v_0 & 16) this.$1_4.checked = true;
        if ($v_0 & 262144) this.$5_4.checked = true;
        if ($v_0 & 524288) this.$2_4.checked = true;
        return value
    },
    setFocus: function() {
        var form = $find("crmForm");
        !IsNull(form) && form.GetTab(this.get_element(), true);
        this.get_element().focus()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$4_4, "change", this.$$d_$9_4);
        $removeHandler(this.$6_4, "change", this.$$d_$9_4);
        $removeHandler(this.$3_4, "change", this.$$d_$9_4);
        $removeHandler(this.$0_4, "change", this.$$d_$9_4);
        $removeHandler(this.$1_4, "change", this.$$d_$9_4);
        $removeHandler(this.$5_4, "change", this.$$d_$9_4);
        $removeHandler(this.$2_4, "change", this.$$d_$9_4);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $9_4: function($p0) { this.handleDataValueChangedEvent() }
};
Mscrm.FormInputControl.AccessPrivilegeBehavior
    .registerClass("Mscrm.FormInputControl.AccessPrivilegeBehavior", Mscrm.FormControlInputBehavior)