Type.registerNamespace("Mscrm");
Mscrm.TreeList = function(element) {
    this.$$d_$5_3 = Function.createDelegate(this, this.$5_3);
    this.$$d_$6_3 = Function.createDelegate(this, this.$6_3);
    this.$$d_$7_3 = Function.createDelegate(this, this.$7_3);
    this.$$d_$2_3 = Function.createDelegate(this, this.$2_3);
    Mscrm.TreeList.initializeBase(this, [element]);
    this.$1_3 = null;
    this.$0_3 = null
};
Mscrm.TreeList.prototype = {
    $1_3: null,
    $0_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "click", this.$$d_$2_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$7_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$6_3);
        $addHandler(this.get_element(), "keydown", this.$$d_$5_3);
        var $v_0 = this.get_element().getAttribute("defaultnode");
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element()), $v_2 = $get($v_0, $v_1);
            $v_2.className = "treeNode treeNodeOn";
            this.$0_3 = $v_2
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$2_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$7_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$6_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$5_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_selectedId: function() { return !IsNull(this.$0_3) ? this.$0_3.id : null },
    $2_3: function($p0) {
        var $v_0 = this.$3_3($p0.target);
        if (!this.$4_3($v_0)) {
            $p0.stopPropagation();
            $p0.preventDefault();
            return
        }
        if (!IsNull(this.$0_3)) this.$0_3.className = "treeNode";
        this.$0_3 = $v_0;
        try {
            window.nodeSelect($v_0.id, $v_0.getAttribute("data"), $v_0.getAttribute("value"))
        } catch ($v_1) {
        }
        $v_0.className = "treeNode treeNodeOn"
    },
    $7_3: function($p0) {
        var $v_0 = this.$3_3($p0.target);
        if (this.$4_3($v_0) && $v_0 !== this.$0_3) {
            $v_0.className = "treeNode treeNodeGlow";
            this.$1_3 = $v_0
        }
    },
    $6_3: function($p0) {
        if (!IsNull(this.$1_3) && this.$1_3 !== this.$0_3) {
            this.$1_3.className = "treeNode";
            this.$1_3 = null
        }
    },
    $5_3: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 32:
            this.$2_3($p0);
            break
        }
    },
    $3_3: function($p0) {
        if (IsNull($p0)) return null;
        var $v_0 = $p0.tagName.toUpperCase();
        while ($v_0 !== "LI") {
            if ($v_0 === "DIV" || $v_0 === "TABLE") return null;
            $p0 = $p0.parentNode;
            if (IsNull($p0)) return null;
            $v_0 = $p0.tagName.toUpperCase()
        }
        return $p0
    },
    $4_3: function($p0) {
        if (IsNull($p0) || $p0.disabled) return false;
        var $v_0 = $p0.className;
        if ($v_0.indexOf("treeNodeHdr") >= 0 || $v_0.indexOf("treeNode") < 0) return false;
        return true
    }
};
Mscrm.TreeList.registerClass("Mscrm.TreeList", Mscrm.CrmUIControl)