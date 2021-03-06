Type.registerNamespace("Mscrm");
Mscrm.TaskBoxControl = function(element) {
    this.$$d_$1_3 = Function.createDelegate(this, this.$1_3);
    this.$$d_$2_3 = Function.createDelegate(this, this.$2_3);
    Mscrm.TaskBoxControl.initializeBase(this, [element])
};
Mscrm.TaskBoxControl.prototype = {
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "mouseover", this.$$d_$2_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$1_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$2_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$1_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $0_3: function($p0) {
        switch ($p0.tagName.toUpperCase()) {
        case "DIV":
            return $p0.parentNode;
        case "A":
        case "NOBR":
        case "IMG":
            return $p0.parentNode.parentNode;
        default:
            return null
        }
    },
    $2_3: function($p0) {
        var $v_0 = this.$0_3($p0.target);
        if (!IsNull($v_0) && $v_0.className === "wizItemRow") {
            var $v_1 = null;
            if (XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetLastChild($v_0)))
                $v_1 = XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_0)));
            if (isNullOrEmptyString($v_0.title) && !isNullOrEmptyString($v_1)) $v_0.title = $v_1;
            $v_0.style.color = "#000000";
            $v_0.className = "wizItemRow ms-crm-TaskBox-On"
        }
    },
    $1_3: function($p0) {
        var $v_0 = this.$0_3($p0.target);
        if (!IsNull($v_0) && $v_0.className === "wizItemRow ms-crm-TaskBox-On") {
            $v_0.style.color = "";
            $v_0.className = "wizItemRow"
        }
    }
};
Mscrm.TaskBoxControl.registerClass("Mscrm.TaskBoxControl", Mscrm.CrmUIControl)