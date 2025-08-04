Type.registerNamespace("Mscrm");
Mscrm.SetOptionsSelect = function(element) { Mscrm.SetOptionsSelect.initializeBase(this, [element]) };
Mscrm.SetOptionsSelect.prototype = {
    $2_3: null,
    $1_3: null,
    $0_3: null,
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.$0_3 = $get(this.get_element().id).parentNode;
        var $v_0 = this.$0_3.innerHTML, $v_1 = $v_0.indexOf(">");
        this.$2_3 = $v_0.substring(0, $v_1 + 1);
        this.$1_3 = "</select>"
    },
    setOptions: function(optionsHtml) {
        this.$0_3.innerHTML = this.$2_3 + optionsHtml + this.$1_3;
        $create(Mscrm.FormInputControl.SelectInputBehavior, null, null, null, $get(this.get_element().id));
        if (!IsNull(optionsHtml)) {
            var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.get_element().id);
            $v_0.set_defaultValue($v_0.get_dataValue())
        }
    }
};
Mscrm.SetOptionsSelect.registerClass("Mscrm.SetOptionsSelect", Mscrm.CrmUIBehavior)