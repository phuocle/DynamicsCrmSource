Type.registerNamespace("Mscrm");
Mscrm.IEnhancedPreviewControl = function() {};
Mscrm.IEnhancedPreviewControl.registerInterface("Mscrm.IEnhancedPreviewControl");
Mscrm.EnhancedPreviewControl = function() {
    this.$$d_$9_0 = Function.createDelegate(this, this.$9_0);
    this.$$d_$A_0 = Function.createDelegate(this, this.$A_0);
    this
        .$4_0 =
        "<table style='height:100%;width:100%;background-color:FFFFFF'><tr><td style='vertical-align: middle' align='center'><IMG id='loading' alt='' src='" + window.CDNURL + "/_imgs/advfind/progress.gif'><br>" + CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG) + "</td></tr></table>";
    this.initialize()
};
Mscrm.EnhancedPreviewControl.prototype = {
    $6_0: 350,
    $5_0: 250,
    $3_0: false,
    $0_0: null,
    $1_0: null,
    $2_0: null,
    $7_0: null,
    initialize: function() {
        if (this.$3_0) return;
        this.$2_0 = document.createElement("DIV");
        this.$2_0.style.width = "100%";
        this.$2_0.style.height = "100%";
        this.$2_0.innerHTML = this.$4_0;
        this.$2_0.style.display = "inline";
        this.$1_0 = document.createElement("iframe");
        this.$1_0.id = "crmPreview_iframe";
        this.$1_0.setAttribute("name", "crmPreview_iframe");
        this.$1_0.scrolling = "no";
        this.$1_0.style.width = "100%";
        this.$1_0.style.height = "100%";
        this.$1_0.style.display = "none";
        $addHandler(this.$1_0, "readystatechange", this.$$d_$A_0);
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-List-PreviewDialog";
        $v_0.appendChild(this.$1_0);
        $v_0.appendChild(this.$2_0);
        this.$0_0 = Mscrm.Dialog.createDialog(null);
        this.$0_0.set_body($v_0);
        this.$0_0.set_isModal(false);
        this.$3_0 = true
    },
    show: function(top, left, objectType, id, restoreFocusToElement) {
        if (typeof objectType === "string") objectType = parseInt(objectType);
        if (objectType === 4700 ||
            objectType === 4424 ||
            objectType === 4406 ||
            objectType === 1080 ||
            objectType === 4410 ||
            objectType === 4412 ||
            objectType === 4411 ||
            objectType === 4500 ||
            objectType === 129 ||
            objectType === 4608) return;
        var $v_0 = 3,
            $v_1 = document.documentElement.scrollWidth - $v_0 * 2,
            $v_2 = document.documentElement.scrollHeight - $v_0 * 2,
            $v_3 = Math.min(this.$6_0, $v_1),
            $v_4 = Math.min(this.$5_0, $v_2);
        this.$0_0.set_top(top);
        this.$0_0.set_left(left);
        this.$0_0.set_width($v_3);
        this.$0_0.set_height($v_4);
        if (top + $v_4 > $v_2)
            if (top - $v_4 > 0) this.$0_0.set_top(top - $v_4);
            else this.$0_0.set_top(($v_2 - $v_4) / 2);
        if (window.LOCID_UI_DIR === "RTL") {
            if (left - $v_3 < 0)
                if (left + $v_3 > 0) this.$0_0.set_left(left + $v_3);
                else this.$0_0.set_left(($v_1 - $v_3) / 2)
        } else if (left + $v_3 > $v_1)
            if (left - $v_3 > 0) this.$0_0.set_left(left - $v_3);
            else this.$0_0.set_left(($v_1 - $v_3) / 2);
        this.$1_0.style.height = "100%";
        this.$1_0.style.width = "100%";
        this.$1_0.src = this.$8_0(objectType, id);
        this.$1_0.style.display = "none";
        this.$2_0.innerHTML = this.$4_0;
        this.$2_0.style.display = "inline";
        this.$7_0 = restoreFocusToElement;
        this.$0_0.set_focusElementOnHide(restoreFocusToElement);
        this.$0_0.show()
    },
    hide: function() { this.$0_0 && this.$0_0.hide() },
    $9_0: function($p0) { $p0.keyCode === 27 && this.$0_0.hide() },
    $A_0: function($p0) {
        if (this.$1_0.readyState === "complete") {
            this.$1_0.style.display = "inline";
            this.$2_0.style.display = "none";
            this.$2_0.innerHTML = "";
            $addHandler(this.$1_0.contentWindow.document.body, "keyup", this.$$d_$9_0);
            var $v_0 = this.$1_0.contentWindow.document.getElementById("printMain");
            if ($v_0) {
                $addHandler($v_0.contentWindow.document.body, "keyup", this.$$d_$9_0);
                try {
                    $v_0.contentWindow.document.body.focus()
                } catch ($$e_2) {
                }
            }
        }
    },
    $8_0: function($p0, $p1) {
        var $v_0 = Mscrm.CrmUri.create("/_forms/print/print.aspx");
        $v_0.get_query()["objectType"] = $p0.toString();
        $v_0.get_query()["id"] = $p1;
        $v_0.get_query()["preview"] = "true";
        return $v_0.toString()
    }
};
Mscrm.EnhancedPreviewControl.registerClass("Mscrm.EnhancedPreviewControl", null, Mscrm.IEnhancedPreviewControl)