Type.registerNamespace("Mscrm");
Mscrm.MultiPicklistInputWrapper = function($p0) { if (!IsNull($p0)) this.$1_0 = $p0 };
Mscrm.MultiPicklistInputWrapper.prototype = {
    $1_0: null,
    get_innerInput: function() { return this.$1_0 },
    get_data: function() { return this.$1_0.getAttribute("Data") },
    set_data: function($p0) {
        this.$1_0.setAttribute("Data", $p0);
        return $p0
    },
    get_value: function() { return this.$1_0.value },
    set_value: function($p0) {
        this.$1_0.value = $p0;
        return $p0
    }
};
Mscrm.MultiPicklist = function(element) {
    this.$$d_$I_3 = Function.createDelegate(this, this.$I_3);
    this.$$d_$9_3 = Function.createDelegate(this, this.$9_3);
    this.$$d_$H_3 = Function.createDelegate(this, this.$H_3);
    this.$$d_$F_3 = Function.createDelegate(this, this.$F_3);
    this.$$d_$G_3 = Function.createDelegate(this, this.$G_3);
    this.setFocus = this.SetFocus;
    this.fireOnChange = this.FireOnChange;
    Mscrm.MultiPicklist.initializeBase(this, [element])
};
Mscrm.MultiPicklist.prototype = {
    $5_3: true,
    $2_3: null,
    $0_3: null,
    $3_3: null,
    $4_3: false,
    $6_3: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element()), $v_1 = $v_0.rows[0];
        this.$0_3 = new Mscrm.MultiPicklistInputWrapper(XUI.Html.DomUtils.GetFirstChild($v_1.cells[0]));
        this.$3_3 = XUI.Html.DomUtils.GetFirstChild($v_1.cells[2]);
        $addHandler(this.$3_3, "click", this.$$d_$G_3);
        $addHandler(this.$3_3, "blur", this.$$d_$F_3);
        $addHandler(this.$0_3.$1_0, "dblclick", this.$$d_$H_3);
        $addHandler(this.$0_3.$1_0, "blur", this.$$d_$F_3);
        $addHandler(this.$0_3.$1_0, "focus", this.$$d_$9_3);
        $addHandler(this.$0_3.$1_0, "keyup", this.$$d_$I_3);
        var $v_2 = $v_0.getAttribute("IsMultipleSelectionAllowed");
        !IsNull($v_2) && this.set_isMultipleSelectionAllowed(Boolean.parse($v_2));
        this.$4_3 = true;
        this.LoadOptionsXml(this.get_$D_3());
        this.$B_3();
        Mscrm.FormControlInputBehavior.createSlugSupportIfNeeded(this.get_element())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.$3_3, "click", this.$$d_$G_3);
        $removeHandler(this.$3_3, "blur", this.$$d_$F_3);
        $removeHandler(this.$0_3.$1_0, "dblclick", this.$$d_$H_3);
        $removeHandler(this.$0_3.$1_0, "blur", this.$$d_$F_3);
        $removeHandler(this.$0_3.$1_0, "focus", this.$$d_$9_3);
        $removeHandler(this.$0_3.$1_0, "keyup", this.$$d_$I_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    LoadOptionsXml: function(xmlOptionsText) {
        if (isNullOrEmptyString(xmlOptionsText)) return false;
        this.set_$D_3(xmlOptionsText);
        if (!this.$4_3) return true;
        this.$2_3 = XUI.Xml.LoadXml(xmlOptionsText);
        if (Mscrm.XmlUtil.handleXMLErr(this.$2_3, false) !== window.ERROR_NONE) {
            this.$2_3 = null;
            return false
        }
        return true
    },
    SetFocus: function() {
        this.$0_3.$1_0.focus();
        this.$9_3(null)
    },
    FireOnChange: function() { this.$7_3() },
    get_isMultipleSelectionAllowed: function() { return this.$5_3 },
    set_isMultipleSelectionAllowed: function(value) {
        this.$5_3 = IsNull(value) ? true : value;
        return value
    },
    get_sortDataOnLoad: function() { return this.$6_3 },
    set_sortDataOnLoad: function(value) {
        this.$6_3 = IsNull(value) ? false : value;
        return value
    },
    get_dataText: function() { return this.$0_3.get_value() },
    get_innerInput: function() { return this.$0_3.$1_0 },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    $I_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        switch ($v_0) {
        case 127:
            this.$0_3.set_value("");
            this.$0_3.set_data("");
            this.$B_3();
            this.$7_3();
            break;
        case 13:
        case 32:
            this.$C_3();
            break
        }
    },
    $9_3: function($p0) { this.$0_3.$1_0.className = "multiPickLstSel" },
    $F_3: function($p0) { this.$0_3.$1_0.className = "" },
    $G_3: function($p0) { this.$C_3() },
    $H_3: function($p0) { this.$C_3() },
    get_$D_3: function() { return this.get_element().getAttribute("OptionsXml") },
    set_$D_3: function($p0) {
        this.get_element().setAttribute("OptionsXml", $p0);
        return $p0
    },
    $B_3: function() {
        if (!IsNull(this.$2_3)) {
            var $v_0 = this.$0_3.get_data().split(";");
            this.$0_3.set_value("");
            var $v_1 = null, $v_2 = [];
            $v_2[0] = [];
            $v_2[1] = [];
            for (var $v_3 = new Sys.StringBuilder, $v_4 = new Sys.StringBuilder, $v_5 = 0, $v_6 = 0, $v_7 = $v_0.length;
                $v_6 < $v_7;
                $v_6++) {
                $v_1 = XUI.Xml.SelectSingleNode(this.$2_3,
                    String.format("/select/option[@value='{0}']", $v_0[$v_6]),
                    null);
                if (!IsNull($v_1)) {
                    $v_2[0][$v_5] = $v_0[$v_6];
                    $v_3.append(($v_6 ? ";" : "") + $v_2[0][$v_5]);
                    $v_2[1][$v_5] = XUI.Xml.GetText($v_1);
                    $v_4.append(($v_6 ? ";" : "") + $v_2[1][$v_5]);
                    $v_5++
                }
            }
            this.$6_3 && window.Quicksort($v_2[1], 0, $v_5 - 1, $v_2[0]);
            this.$0_3.set_value($v_4.toString());
            this.$0_3.set_data($v_3.toString())
        }
    },
    $C_3: function() {
        if (!IsNull(this.$2_3)) {
            var $v_0 = {};
            $v_0["valuesXml"] = this.$2_3;
            $v_0["sSelectedValues"] = this.$0_3.get_data();
            $v_0["IsMultipleSelectionAllowed"] = this.$5_3.toString();
            var $v_1 = Mscrm.Utilities.createCallbackFunctionObject("selectValuesCallback", this, null, false),
                $v_2 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/Tools/ViewEditor/Dialogs/SelectValues.aspx"),
                    $v_0,
                    517,
                    325,
                    null);
            $v_2.setCallbackReference($v_1);
            $v_2.show()
        }
    },
    selectValuesCallback: function(selectedItems) {
        this.$9_3(null);
        if (!IsNull(selectedItems)) {
            for (var $v_0 = null,
                $v_1 = this.$0_3.get_data(),
                $v_2 = new Sys.StringBuilder,
                $v_3 = new Sys.StringBuilder,
                $v_4 = 0,
                $v_5 = selectedItems.length;
                $v_4 < $v_5;
                $v_4++) {
                $v_0 = XUI.Xml.SelectSingleNode(this.$2_3,
                    String.format("/select/option[@value='{0}']", selectedItems[$v_4]),
                    null);
                if (!IsNull($v_0)) {
                    $v_3.append(($v_4 ? ";" : "") + XUI.Xml.GetText($v_0));
                    $v_2.append(($v_4 ? ";" : "") + $v_0.attributes.getNamedItem("value").nodeValue)
                }
            }
            this.$0_3.set_value($v_3.toString());
            this.$0_3.set_data($v_2.toString());
            $v_1 !== this.$0_3.get_data() && this.$7_3()
        }
    },
    $7_3: function() { this.fireControlEvent("OnChange", Sys.EventArgs.Empty) },
    $A_3: function($p0, $p1) {
        if (typeof $p1 !== "boolean");
        this.get_element().setAttribute($p0, $p1)
    },
    $8_3: function($p0) {
        var $v_0 = this.get_element().getAttribute($p0);
        if (IsNull($v_0)) return false;
        switch (typeof $v_0) {
        case "boolean":
            return $v_0;
        case "string":
            return Mscrm.Utilities.parseBoolean($v_0)
        }
        return $v_0
    },
    add_dataValueChanged: function(value) {},
    remove_dataValueChanged: function(value) {},
    get_dataValue: function() { return this.$0_3.get_data() },
    set_dataValue: function(value) {
        this.$0_3.set_data(IsNull(value) ? "" : value);
        this.$4_3 && this.$B_3();
        return value
    },
    get_dataXml: function() {
        for (var $v_0 = this.$0_3.get_data().split(";"), $v_1 = new Sys.StringBuilder, $v_2 = 0, $v_3 = $v_0.length;
            $v_2 < $v_3;
            $v_2++) $v_1.append(String.format("<value>{0}</value>", $v_0[$v_2]));
        return String.format("<values>{0}</values>", $v_1)
    },
    get_requiredLevel: function() { return 0 },
    set_requiredLevel: function(value) { return value },
    get_disabled: function() { return this.$8_3("Disabled") },
    set_disabled: function(value) {
        this.$A_3("Disabled", value);
        return value
    },
    get_isDirty: function() { return false },
    get_forceSubmit: function() { return this.$8_3("ForceSubmit") },
    set_forceSubmit: function(value) {
        this.$A_3("ForceSubmit", value);
        return value
    },
    get_doNotSubmit: function() { return this.$8_3("DoNotSubmit") },
    set_doNotSubmit: function(value) {
        this.$A_3("DoNotSubmit", value);
        return value
    },
    isValid: function() { return true }
};
Mscrm.MultiPicklistInputWrapper.registerClass("Mscrm.MultiPicklistInputWrapper");
Mscrm.MultiPicklist.registerClass("Mscrm.MultiPicklist", Mscrm.CrmUIControl, Mscrm.ICrmUIFormDataComponent)