Type.registerNamespace("Mscrm");
Mscrm.ReportControl = function(element) {
    this.$$d_$5_3 = Function.createDelegate(this, this.$5_3);
    Mscrm.ReportControl.initializeBase(this, [element])
};
Mscrm.ReportControl.prototype = {
    $2_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $get("ReportControlParametersDiv", this.get_element());
        if (!IsNull($v_0)) !this.$3_3($v_0) && this.loadReport()
    },
    $3_3: function($p0) {
        var $v_0 = this.$0_3($p0, "LoadOnDemand");
        if ($v_0 === "true") return true;
        return false
    },
    loadReport: function() {
        var $v_0 = $get("ReportControlParametersDiv", this.get_element());
        if (!IsNull($v_0)) {
            this.$6_3();
            var $v_1 = this.get_element().id + "_ReportControlFrame",
                $v_2 = this.get_element().id + "_ReportControlForm";
            this.$2_3 = this.$$d_$5_3;
            var $v_3 = $get($v_1, this.get_element());
            $v_3.attachEvent("onload", this.$2_3);
            var $v_4 = document.createElement("<form id='" + $v_2 + "' name='" + $v_2 + "'>");
            document.body.insertBefore($v_4);
            $v_4.method = "post";
            $v_4.target = $v_1;
            $v_4.action = this.$0_3($v_0, "TargetUrl");
            this.$4_3($v_4, $v_0);
            $v_4.submit();
            document.body.removeChild($v_4)
        }
    },
    $4_3: function($p0, $p1) {
        this.$1_3($p0, "id", this.$0_3($p1, "id"));
        this.$1_3($p0, "uniquename", this.$0_3($p1, "uniquename"));
        this.$1_3($p0, "iscustomreport", this.$0_3($p1, "iscustomreport"));
        this.$1_3($p0, "reportnameonsrs", this.$0_3($p1, "reportnameonsrs"));
        this.$1_3($p0, "isScheduledReport", this.$0_3($p1, "isScheduledReport"));
        var $v_0 = this.$0_3($p1, "snapshotId");
        $v_0.length > 0 && this.$1_3($p0, "snapshotId", $v_0);
        var $v_1 = this.get_element().id + "_ReportControlFilterEditor", $v_2 = $get($v_1, this.get_element());
        !IsNull($v_2) && this.$1_3($p0, "CRM_Filter", $v_2.FilterExecXml);
        var $v_3 = this.$0_3($p1, "PromptAreaCollapsed");
        $v_3.length > 0 && this.$1_3($p0, "PromptAreaCollapsed", $v_3)
    },
    $1_3: function($p0, $p1, $p2) {
        var $v_0 = $get($p1, $p0);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0;
            $v_1.value = $p2
        } else {
            var $v_2 = document.createElement("<input type='hidden'>");
            $v_2.name = $p1;
            $v_2.id = $p1;
            $v_2.value = $p2;
            $p0.appendChild($v_2)
        }
    },
    $0_3: function($p0, $p1) {
        var $v_0 = "", $v_1 = $get($p1, this.get_element());
        if (!IsNull($v_1)) $v_0 = $v_1.value;
        return $v_0
    },
    $6_3: function() {
        var $v_0 = $get("ReportControlFrameRow", this.get_element()),
            $v_1 = $get("ReportControlProgressRow", this.get_element()),
            $v_2 = $get("ReportControlLoadOnDemandRow", this.get_element());
        if (!IsNull($v_1)) {
            $v_1.style.display = "inline";
            if (!IsNull($v_0)) $v_0.style.display = "none";
            if (!IsNull($v_2)) $v_2.style.display = "none"
        }
    },
    $5_3: function() {
        var $v_0 = $get("ReportControlFrameRow", this.get_element()),
            $v_1 = $get("ReportControlProgressRow", this.get_element());
        if (!IsNull($v_0)) {
            $v_0.style.display = "inline";
            if (!IsNull($v_1)) $v_1.style.display = "none"
        }
        var $v_2 = this.get_element().id + "_ReportControlFrame", $v_3 = $get($v_2, this.get_element());
        if (!IsNull($v_3) && !IsNull(this.$2_3)) {
            $v_3.detachEvent("onload", this.$2_3);
            this.$2_3 = null
        }
    }
};
Mscrm.ReportControl.registerClass("Mscrm.ReportControl", Mscrm.CrmUIControl)