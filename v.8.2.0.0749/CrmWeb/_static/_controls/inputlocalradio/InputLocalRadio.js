Type.registerNamespace("Mscrm");
Mscrm.InputLocalRadio = function(element) {
    this.$$d_$8_3 = Function.createDelegate(this, this.$8_3);
    Mscrm.InputLocalRadio.initializeBase(this, [element])
};
Mscrm.InputLocalRadio.prototype = {
    $0_3: null,
    get_$3_3: function() { return this.$0_3.value },
    set_$3_3: function($p0) {
        this.$0_3.value = $p0;
        return $p0
    },
    get_$1_3: function() { return this.get_element().value },
    get_$4_3: function() { return this.get_element().name },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $get(this.get_$4_3().substr(7));
        if (this.get_$1_3() === this.get_$3_3()) this.get_element().checked = true;
        $addHandler(this.get_element(), "click", this.$$d_$8_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$8_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $8_3: function($p0) {
        this.set_$3_3(this.get_$1_3());
        XUI.Html.DispatchDomEvent(this.get_element(), XUI.Html.CreateDomEvent("change"))
    }
};
Mscrm.InputLocalRadio.registerClass("Mscrm.InputLocalRadio", Mscrm.CrmUIControl)