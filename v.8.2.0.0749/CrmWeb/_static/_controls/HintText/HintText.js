Type.registerNamespace("Mscrm");
Mscrm.HintText = function(element) {
    this.$$d_$2_3 = Function.createDelegate(this, this.$2_3);
    this.$$d_notifyFocus = Function.createDelegate(this, this.notifyFocus);
    this.$$d_notifyTextChanged = Function.createDelegate(this, this.notifyTextChanged);
    Mscrm.HintText.initializeBase(this, [element])
};
Mscrm.HintText.prototype = {
    $1_3: false,
    $0_3: null,
    initialize: function() {
        Mscrm.CrmUIBehavior.prototype.initialize.call(this);
        $addHandler(this.get_element(), "change", this.$$d_notifyTextChanged);
        $addHandler(this.get_element(), "focus", this.$$d_notifyFocus);
        $addHandler(this.get_element(), "blur", this.$$d_$2_3);
        this.notifyTextChanged(null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "change", this.$$d_notifyTextChanged);
        $removeHandler(this.get_element(), "focus", this.$$d_notifyFocus);
        $removeHandler(this.get_element(), "blur", this.$$d_$2_3);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    get_hintLabel: function() {
        if (IsNull(this.$0_3)) {
            if (!isNullOrEmptyString(this.get_element()
                .getAttribute("hintlabelid"))) this.$0_3 = $get(this.get_element().getAttribute("hintlabelid"));
            else this.$0_3 = XUI.Html.DomUtils.GetPrevSibling(this.get_element());
            if (!IsNull(this.$0_3)) if (this.$0_3.tagName.toUpperCase() !== "LABEL") this.$0_3 = null
        }
        return this.$0_3
    },
    toggleHintVisibility: function(visible) {
        if (IsNull(this.get_hintLabel())) return;
        this.get_hintLabel().style.display = visible ? "inline" : "none"
    },
    notifyTextChanged: function(eventArg) {
        var $v_0 = "", $v_1 = this.get_element();
        if (!IsNull($v_1)) $v_0 = $v_1.value;
        if (!isNullOrEmptyString($v_0) || this.$1_3) this.toggleHintVisibility(false);
        else this.toggleHintVisibility(true)
    },
    notifyFocus: function(eventArg) {
        if (IsNull(this.$0_3)) return;
        this.toggleHintVisibility(false);
        this.$1_3 = true
    },
    $2_3: function($p0) {
        this.$1_3 = false;
        this.notifyTextChanged($p0)
    }
};
Mscrm.HintText.registerClass("Mscrm.HintText", Mscrm.CrmUIBehavior)