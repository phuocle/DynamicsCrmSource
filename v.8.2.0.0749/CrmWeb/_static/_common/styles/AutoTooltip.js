Type.registerNamespace("Mscrm");
Mscrm.AutoToolTip = function(element) {
    this.$$d_$1_3 = Function.createDelegate(this, this.$1_3);
    Mscrm.AutoToolTip.initializeBase(this, [element])
};
Mscrm.AutoToolTip.prototype = {
    $0_3: null,
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        this.$0_3 = this.$$d_$1_3;
        $addHandler(this.get_element(), "mouseover", this.$0_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            $removeHandler(this.get_element(), "mouseover", this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $1_3: function($p0) {
        if (!this.get_element().title.length) {
            var $v_0 = Mscrm.Utilities.getNonHiddenInnerText(this.get_element());
            if (!isNullOrEmptyString($v_0)) $v_0 = $v_0.trim();
            this.get_element().title = $v_0
        }
    }
};
Mscrm.AutoToolTip.registerClass("Mscrm.AutoToolTip", Mscrm.CrmUIBehavior)