Type.registerNamespace("Mscrm");
Mscrm.NextButton = function(element) {
    this.$$d_$3_3 = Function.createDelegate(this, this.$3_3);
    this.$$d_$4_3 = Function.createDelegate(this, this.$4_3);
    Mscrm.NextButton.initializeBase(this, [element]);
    $addHandler(this.get_element(), "mouseover", this.$$d_$4_3);
    $addHandler(this.get_element(), "mouseout", this.$$d_$3_3)
};
Mscrm.NextButton.prototype = {
    $0_3: null,
    get_$1_3: function() {
        if (!this.$0_3) this.$0_3 = XUI.Xml.DomUtils.GetFirstChild(this.get_element());
        return this.$0_3
    },
    get_disabled: function() { return this.get_element().disabled },
    set_disabled: function(value) {
        this.get_element().disabled = value;
        this.get_element().className = value ? "ms-crm-NextButton ms-crm-NextButton-Disabled" : "ms-crm-NextButton";
        this.get_$1_3().src = value ? "/_imgs/next_disabled.gif" : "/_imgs/next_rest.gif";
        this.get_element().setAttribute("href",
            value ? "javascript:" : this.get_element().getAttribute("originalaction"));
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$4_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$3_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $4_3: function($p0) {
        if (!this.get_disabled()) this.get_$1_3().src = "/_imgs/next_hover.gif";
        window.top.status = ""
    },
    $3_3: function($p0) { if (!this.get_disabled()) this.get_$1_3().src = "/_imgs/next_rest.gif" }
};
Mscrm.NextButton.registerClass("Mscrm.NextButton", Mscrm.CrmUIControl)