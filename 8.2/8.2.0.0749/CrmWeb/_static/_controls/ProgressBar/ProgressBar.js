Type.registerNamespace("Mscrm");
Mscrm.ProgressBar = function(element) { Mscrm.ProgressBar.initializeBase(this, [element]) };
Mscrm.ProgressBar.prototype = {
    $0_3: 0,
    $1_3: 0,
    $3_3: null,
    $2_3: null,
    $5_3: null,
    $4_3: null,
    $7_3: null,
    $6_3: null,
    get_currentStep: function() { return this.$0_3 },
    get_maxSteps: function() { return this.$1_3 },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1_3 = parseInt(this.get_element().getAttribute("maxSteps"));
        this.$3_3 = this.get_element().getAttribute("leftOnPict");
        this.$2_3 = this.get_element().getAttribute("leftOffPict");
        this.$5_3 = this.get_element().getAttribute("midOnPict");
        this.$4_3 = this.get_element().getAttribute("midOffPict");
        this.$7_3 = this.get_element().getAttribute("rightOnPict");
        this.$6_3 = this.get_element().getAttribute("rightOffPict")
    },
    reset: function() { this.setSteps(0) },
    setSteps: function(step) {
        if (step === this.$0_3) return;
        if (step > this.$0_3) this.$8_3(this.$0_3, step - 1, true);
        else this.$8_3(step, this.$0_3 - 1, false);
        this.$0_3 = step
    },
    setPercentage: function(percentage) { this.setSteps(Math.floor(this.$1_3 * percentage / 100)) },
    incrementSteps: function(steps) { this.setSteps(this.$0_3 + steps) },
    decrementSteps: function(steps) { this.setSteps(this.$0_3 - steps) },
    $8_3: function($p0, $p1, $p2) {
        var $v_0 = $p0, $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        while (!IsNull($v_1) && $v_0 < this.$1_3) {
            if ($v_1.tagName.toUpperCase() === "IMG") {
                if (!$v_0) $v_1.src = $p2 ? this.$3_3 : this.$2_3;
                else if ($v_0 <= $p1 && $v_0 < this.$1_3 - 1) $v_1.src = $p2 ? this.$5_3 : this.$4_3;
                else if ($v_0 === this.$1_3 - 1) $v_1.src = $p2 ? this.$7_3 : this.$6_3;
                ++$v_0
            }
            $v_1 = XUI.Html.DomUtils.GetNextSibling($v_1)
        }
    }
};
Mscrm.ProgressBar.registerClass("Mscrm.ProgressBar", Mscrm.CrmUIControl)