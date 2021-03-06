Type.registerNamespace("Mscrm");
Mscrm.CheckBoxList = function(element) {
    Mscrm.CheckBoxList.initializeBase(this, [element]);
    this.$0_3 = this.get_element().getElementsByTagName("INPUT")
};
Mscrm.CheckBoxList.prototype = {
    $0_3: null,
    get_dataValues: function() {
        for (var $v_0 = [], $v_1 = 0; $v_1 < this.$0_3.length; $v_1++) {
            var $v_2 = this.$0_3[$v_1];
            $v_2.checked && Array.add($v_0, $v_2.value)
        }
        return $v_0.length > 0 ? $v_0 : null
    },
    set_dataValues: function(value) {
        if (IsNull(value)) value = [];
        for (var $v_0 = {}, $v_1 = 0; $v_1 < value.length; $v_1++) {
            var $v_2 = value[$v_1];
            $v_0[$v_2] = $v_2
        }
        for (var $v_3 = 0; $v_3 < this.$0_3.length; $v_3++) {
            var $v_4 = this.$0_3[$v_3];
            if (!IsNull($v_4)) $v_4.checked = !IsNull($v_0[$v_4.value])
        }
        return value
    }
};
Mscrm.CheckBoxList.registerClass("Mscrm.CheckBoxList", Mscrm.CrmUIControl)