Type.registerNamespace("Mscrm");
Mscrm.ContractCal = function(element) {
    this.$$d_$8_3 = Function.createDelegate(this, this.$8_3);
    this.$$d_$7_3 = Function.createDelegate(this, this.$7_3);
    this.$$d_$5_3 = Function.createDelegate(this, this.$5_3);
    Mscrm.ContractCal.initializeBase(this, [element])
};
Mscrm.ContractCal.prototype = {
    $2_3: null,
    $0_3: null,
    $1_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = null, $v_1 = this.get_element().value;
        if (!isNullOrEmptyString($v_1)) $v_0 = $get($v_1);
        this.$2_3 = $v_0;
        this.$0_3 = XUI.Html.DomUtils.GetNextSibling(this.get_element());
        this.$1_3 = $get("crmForm24x7Support", this.$0_3);
        $addHandler(this.$0_3, "click", this.$$d_$5_3);
        $addHandler(this.$1_3, "click", this.$$d_$7_3);
        $addHandler(this.$0_3, "keypress", this.$$d_$8_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$0_3, "click", this.$$d_$5_3);
        $removeHandler(this.$1_3, "click", this.$$d_$7_3);
        $removeHandler(this.$0_3, "keypress", this.$$d_$8_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $7_3: function($p0) {
        for (var $v_0 = $p0
                     .target,
            $v_1 = 2;
            $v_1 < 9;
            $v_1++)
            for (var $v_2 = this.$0_3.rows[$v_1], $v_3 = 1; $v_3 < 25; $v_3++) this.$4_3($v_2, $v_3, $v_0.checked);
        this.$6_3()
    },
    $8_3: function($p0) { $p0.charCode === 13 && this.$5_3($p0) },
    $5_3: function($p0) {
        var $v_0 = $p0.target;
        if (!IsNull(this.$0_3.getAttribute("readonly")) ||
            $v_0.tagName.toUpperCase() === "INPUT" ||
            $v_0.tagName.toUpperCase() === "LABEL") return;
        var $v_1, $v_2, $v_3 = false;
        if (!isNullOrEmptyString(XUI.Html.GetText($v_0)) && $v_0.tagName.toUpperCase() === "TD") {
            var $v_4 = $v_0, $v_5 = $v_4.parentNode, $v_6 = $v_4.cellIndex, $v_7 = $v_5.rowIndex;
            if (!$v_6 && $v_7 >= 2 && $v_7 < 9) {
                for ($v_1 = 1; $v_1 < 25; $v_1++)
                    if (!this.$3_3($v_5, $v_1)) {
                        $v_3 = true;
                        break
                    }
                for ($v_1 = 1; $v_1 < 25; $v_1++) this.$4_3($v_5, $v_1, $v_3)
            } else if ($v_7 === 1 && $v_6 >= 1 && $v_6 < 25) {
                for ($v_2 = 2; $v_2 < 9; $v_2++) {
                    $v_5 = this.$0_3.rows[$v_2];
                    if (!this.$3_3($v_5, $v_6)) {
                        $v_3 = true;
                        break
                    }
                }
                for ($v_2 = 2; $v_2 < 9; $v_2++) {
                    $v_5 = this.$0_3.rows[$v_2];
                    this.$4_3($v_5, $v_6, $v_3)
                }
            }
        } else {
            var $v_8 = $v_0;
            if ($v_0.tagName
                .toUpperCase() ===
                "TD" &&
                ($v_0.className === "c" || $v_0.className === "c margin")) $v_8 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if ($v_8.tagName.toUpperCase() !== "IMG") return;
            $v_8.style.visibility = XUI.Html.GetComputedStyle($v_8, "visibility") === "hidden" ? "visible" : "hidden"
        }
        this.$6_3()
    },
    $3_3: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0.cells[$p1]);
        return XUI.Html.GetComputedStyle($v_0, "visibility") !== "hidden"
    },
    $4_3: function($p0, $p1, $p2) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0.cells[$p1]);
        $v_0.style.visibility = $p2 ? "visible" : "hidden"
    },
    $6_3: function() {
        for (var $v_0 = "", $v_1 = 2; $v_1 < 9; $v_1++)
            for (var $v_2 = this.$0_3
                         .rows[$v_1],
                $v_3 = 1;
                $v_3 < 25;
                $v_3++) $v_0 += this.$3_3($v_2, $v_3) ? "+" : "-";
        this.$2_3.value = $v_0;
        this.$1_3.checked = $v_0.indexOf("-") === -1
    },
    validateMask: function() {
        var $v_0 = this.$2_3.value;
        if (isNullOrEmptyString($v_0) || $v_0.indexOf("+") === -1) {
            alert(window.LOCID_NO_SELECTION);
            return false
        }
        return true
    }
};
Mscrm.ContractCal.registerClass("Mscrm.ContractCal", Mscrm.CrmUIControl)