Type.registerNamespace("Mscrm");
Mscrm.ListEdit = function($p0) {
    this.$$d_$r_3 = Function.createDelegate(this, this.$r_3);
    this.$$d_$s_3 = Function.createDelegate(this, this.$s_3);
    Mscrm.ListEdit.initializeBase(this, [$p0])
};
Mscrm.ListEdit.editValueCallback = function(result, thisContext, oldValue) {
    if (IsNull(result)) return;
    var $v_0 = result.sLabel, $v_1 = result.iValue, $v_2 = result.sColor;
    thisContext.$k_3($v_0, $v_1, oldValue, $v_2)
};
Mscrm.ListEdit.addValueCallback = function(result, thisContext, description) {
    if (IsNull(result)) return;
    var $v_0 = result.sLabel, $v_1 = result.iValue, $v_2 = result.sColor;
    thisContext.$i_3($v_0, $v_1, description, $v_2)
};
Mscrm.ListEdit.prototype = {
    $e_3: 1e5,
    $0_3: null,
    $E_3: null,
    $X_3: null,
    $5_3: false,
    $a_3: null,
    $Z_3: null,
    $O_3: null,
    $P_3: null,
    $N_3: null,
    $L_3: null,
    $T_3: null,
    $I_3: null,
    $M_3: null,
    $V_3: null,
    $G_3: null,
    get_selectedValue: function() { return this.$0_3.$6_0 },
    set_selectedValue: function(value) {
        var $v_0 = IsNull(value) ? value : Number.parseInvariant(value.toString());
        if (!this.$5_3) {
            var $v_1 = this.$0_3.$6_0;
            this.$0_3.setSelectedValue($v_0);
            for (var $v_2 = 0, $v_3 = 0, $v_4 = this.$0_3.$2_0.length, $v_5 = 0; $v_5 < $v_4; $v_5++) {
                var $v_6 = this.$8_3($v_5).$1_0;
                if ($v_1 === $v_6) $v_2 = $v_5;
                else if ($v_0 === $v_6) $v_3 = $v_5
            }
            this.$0_3.$6_0 = !IsNull($v_3) ? $v_0 : -1;
            this.$q_3($v_2);
            this.$l_3($v_3)
        }
        return value
    },
    get_defaultValue: function() {
        if (!this.checkFunction("setdefault")) throw Error.create("Function not available");
        if (this.$5_3) return 0;
        return this.$0_3.$9_0
    },
    set_defaultValue: function(value) {
        if (!this.checkFunction("setdefault")) throw Error.create("Function not available");
        if (this.$5_3) return value;
        this.$0_3.setDefaultValue(value);
        this.$u_3();
        return value
    },
    get_nextValue: function() {
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return 0;
        return this.$0_3.$F_0
    },
    set_nextValue: function(value) {
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return value;
        this.$0_3.setNextValue(value);
        return value
    },
    get_prefixValue: function() { return this.$0_3.$A_0 },
    set_prefixValue: function(value) {
        this.$0_3.setPrefixValue(value);
        return value
    },
    get_count: function() {
        var $v_0 = this.$0_3.$2_0.length;
        return $v_0 - 1
    },
    get_disabled: function() { return this.$5_3 },
    set_disabled: function(value) {
        this.$5_3 = value;
        this.$c_3("move", value);
        this.$c_3("edit", value);
        this.$c_3("addremove", value);
        this.$c_3("sort", value);
        return value
    },
    get_messageXml: function() { return this.$a_3 },
    set_messageXml: function(value) {
        this.$a_3 = value;
        return value
    },
    get_xmlData: function() { return this.$0_3.serialize() },
    set_xmlData: function(value) {
        this.$0_3.deserialize(value);
        this.$K_3();
        return value
    },
    get_initialXml: function() { return this.$Z_3 },
    set_initialXml: function(value) {
        this.$Z_3 = value;
        return value
    },
    get_$b_3: function() { return this.get_element().id },
    $c_3: function($p0, $p1) {
        switch ($p0.toLowerCase()) {
        case "move":
            this.$Q_3(this.$3_3("btnMoveValueUp"), $p1);
            this.$Q_3(this.$3_3("btnMoveValueDown"), $p1);
            break;
        case "edit":
            this.$Q_3(this.$3_3("btnEditValue"), $p1);
            break;
        case "addremove":
            this.$Q_3(this.$3_3("btnAddValue"), $p1);
            this.$Q_3(this.$3_3("btnRemoveValue"), $p1);
            break;
        case "sort":
            this.$Q_3(this.$3_3("btnSortAsc"), $p1);
            this.$Q_3(this.$3_3("btnSortDesc"), $p1);
            break;
        default:
            return
        }
    },
    isOptionSet: function() {
        var $v_0 = this.get_element().id, $v_1 = $get($v_0 + "_txtItemDesc");
        return !IsNull($v_1)
    },
    $t_3: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0);
        this.$E_3.$R_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/deletevalue", null));
        this.$E_3.$U_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/savechangedvalue", null));
        this.$E_3.$W_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/valuechangedwithoutprefix", null))
    },
    $K_3: function() {
        this.$o_3();
        this.$j_3()
    },
    $o_3: function() {
        for (var $v_0 = new Sys.StringBuilder('<table cellpadding="2" cellspacing="0" width="100%">'),
            $v_1 = -1,
            $v_2 = this.get_element().id,
            $v_3 = this.$0_3.$2_0.length,
            $v_4 = 0;
            $v_4 < $v_3;
            $v_4++) {
            var $v_5 = this.$8_3($v_4), $v_6 = $v_5.$1_0;
            if ($v_5.$7_0) {
                $v_0.append("<tr ");
                $v_0.append(String.format("id={0}_val{1} ", CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), $v_4));
                $v_0.append(String.format("value={0} ", $v_6));
                $v_0.append(String.format("selected={0} ", 0));
                $v_0.append(String.format('onclick="$find({0}).handleItemSelected({1})" ',
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$b_3()),
                    $v_4));
                var $v_7 = 'onclick="$find(' +
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$b_3()) +
                    ").handleItemSelected(" +
                    $v_4 +
                    ')" ';
                $v_0.append($v_7);
                var $v_8 = "ondblclick=$find(" +
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$b_3()) +
                    ").editValue(" +
                    $v_6 +
                    "); ";
                $v_0.append($v_8);
                $v_0.append(String.format('><td nowrap class="hand">{0}</td></tr>',
                    CrmEncodeDecode.CrmHtmlEncode($v_5.$4_0)))
            }
            if (this.$X_3 !== "add" && this.$0_3.$6_0 === $v_6) {
                $v_1 = $v_4;
                this.$0_3.$6_0 = $v_6
            }
        }
        $v_0.append("</table>");
        this.$3_3("divValueList").innerHTML = $v_0.toString();
        if (this.$X_3 === "add") {
            this.$X_3 = null;
            for (var $v_9 = $v_3 - 1; $v_9 >= 0; $v_9--) {
                var $v_A = this.$8_3($v_9);
                if ($v_A.$7_0) {
                    $v_1 = $v_9;
                    this.$0_3.$6_0 = $v_A.$1_0;
                    break
                }
            }
        }
        this.$l_3($v_1);
        this.$Y_3()
    },
    handleItemSelected: function(index) {
        if (IsNull(index)) return;
        if (this.$0_3.$2_0.length > index) {
            this.set_selectedValue(this.$8_3(index).$1_0);
            this.$Y_3()
        }
    },
    $8_3: function($p0) {
        var $v_0 = this.$0_3.$2_0[$p0];
        return $v_0
    },
    $Y_3: function() {
        if (!this.isOptionSet()) return;
        if (IsNull(this.$I_3)) return;
        var $v_0 = this.$0_3.getValue(this.get_selectedValue());
        if (IsNull($v_0)) {
            this.$m_3();
            return
        }
        this.$I_3.set_dataValue($v_0.$1_0);
        if (!IsNull(window._bIsBooleanOptionSet)) this.$I_3.set_disabled(window._bIsBooleanOptionSet);
        else this.$I_3.set_disabled(this.$5_3);
        this.$T_3.set_dataValue($v_0.$4_0);
        this.$T_3.set_disabled(this.$5_3);
        this.$M_3.set_dataValue($v_0.$H_0);
        this.$M_3.set_disabled(this.$5_3);
        var $v_1 = $v_0.$B_0;
        if (!isNullOrEmptyString($v_1)) {
            if (!$v_1.startsWith("#")) $v_1 = "#" + $v_1
        } else $v_1 = "#0000ff";
        if (!IsNull(this.$G_3)) {
            this.$G_3.set_dataValue($v_1);
            this.$G_3.set_disabled(this.$5_3);
            if (!IsNull(window.document
                .getElementById("divPreviewColor")))
                window.document.getElementById("divPreviewColor").style.backgroundColor = $v_1
        }
    },
    $m_3: function() {
        if (IsNull(this.$I_3)) return;
        this.$I_3.set_dataValue(null);
        this.$I_3.set_disabled(true);
        this.$T_3.set_dataValue(null);
        this.$T_3.set_disabled(true);
        this.$M_3.set_dataValue(null);
        this.$M_3.set_disabled(true);
        if (!IsNull(this.$G_3)) {
            this.$G_3.set_dataValue(null);
            this.$G_3.set_disabled(true);
            if (!IsNull(window.document
                .getElementById("divPreviewColor")))
                window.document.getElementById("divPreviewColor").style.backgroundColor = "#ffffff"
        }
    },
    $u_3: function() {
        if (this
            .checkFunction("setdefault") &&
            this.get_hasDefaultValue() &&
            !this.$5_3)
            for (var $v_0 = this.$3_3("selDefaultValue"), $v_1 = $v_0.options, $v_2 = $v_1.length, $v_3 = 0;
                $v_3 < $v_2;
                $v_3++) if (Number.parseInvariant($v_1[$v_3].toString()) === this.$0_3.$9_0) $v_0.selectedIndex = $v_3
    },
    $j_3: function() {
        if (this.checkFunction("setdefault") && this.get_hasDefaultValue()) {
            var $v_0 = new Select(false, false), $v_1 = this.get_element().id;
            $v_0.ID = $v_1 + "_selDefaultValue";
            $v_0.Selected = this.$0_3.$9_0.toString();
            $v_0.OnChange = String
                .format("$find({0}).set_defaultValue(Number(this.options[this.selectedIndex].value));",
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$b_3()));
            for (var $v_2 = this.$0_3.$2_0.length, $v_3 = [], $v_4 = [], $v_5, $v_9 = 0; $v_9 < $v_2; $v_9++) {
                $v_5 = this.$8_3($v_9);
                Array.add(!$v_5.$7_0 ? $v_3 : $v_4, $v_5)
            }
            var $v_6 = $v_3.concat($v_4),
                $$t_E = this,
                $v_7 = function($p1_0, $p1_1, $p1_2) {
                    var $v_A = $p1_0;
                    $v_0.AddOption($v_A.$4_0, $v_A.$1_0.toString())
                };
            Array.forEach($v_6, $v_7);
            var $v_8 = this.$3_3("selDefaultValue");
            XUI.Html.SetOuterHTML($v_8, $v_0.Render());
            $v_8.disabled = this.$5_3
        }
    },
    createDefaultControl: function(id, defaultValue) {
        var $v_0 = new Select(false, false);
        $v_0.ID = id.toString();
        $v_0.Selected = this.$0_3.$9_0;
        var $v_1 = -1, $v_2 = this.$0_3.$2_0.length;
        if (!IsNull(defaultValue)) $v_1 = Number.parseInvariant(defaultValue);
        for (var $v_3, $v_4 = 0; $v_4 < $v_2; $v_4++) {
            $v_3 = this.$8_3($v_4);
            if (!$v_3.$7_0) {
                $v_0.AddOption($v_3.$4_0, $v_3.$1_0.toString());
                if ($v_1 === $v_3.$1_0) $v_0.Selected = $v_1.toString()
            }
        }
        for (var $v_5 = 0; $v_5 < $v_2; $v_5++) {
            $v_3 = this.$8_3($v_5);
            if ($v_3.$7_0) {
                $v_0.AddOption($v_3.$4_0, $v_3.$1_0.toString());
                if ($v_1 === $v_3.$1_0) $v_0.Selected = $v_1.toString()
            }
        }
        return $v_0.Render()
    },
    $l_3: function($p0) { this.$n_3($p0, "#c4ddff") },
    $q_3: function($p0) { this.$n_3($p0, "#ffffff") },
    $n_3: function($p0, $p1) {
        if (!IsNull($p0)) {
            var $v_0 = this.$3_3("val" + $p0);
            if (IsNull($v_0)) return;
            $v_0.style.backgroundColor = $p1;
            $v_0.selected = $p1 !== "#ffffff"
        }
    },
    $3_3: function($p0) { return $get(String.format("{0}_{1}", this.get_element().id, $p0)) },
    $Q_3: function($p0, $p1) {
        $p0.disabled = $p1;
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_0) && $v_0.tagName === "IMG")
            $v_0.className = $p1 ? "ms-crm-Picklist-MenuButton-Disabled" : "ms-crm-Picklist-MenuButton"
    },
    checkFunction: function(functionName) {
        switch (functionName.toLowerCase()) {
        case "move":
            return !IsNull(this.$3_3("btnMoveValueUp")) && !IsNull(this.$3_3("btnMoveValueDown"));
        case "edit":
            return !IsNull(this.$3_3("btnEditValue"));
        case "addremove":
            return !IsNull(this.$3_3("btnAddValue")) && !IsNull(this.$3_3("btnRemoveValue"));
        case "setdefault":
            return !IsNull(this.$3_3("selDefaultValue"));
        case "sort":
            return !IsNull(this.$3_3("btnSortAsc")) && !IsNull(this.$3_3("btnSortDesc"));
        default:
            return false
        }
    },
    get_hasDefaultValue: function() { return this.$0_3.$D_0 },
    moveValueUp: function() {
        var $v_0, $v_1 = arguments.length;
        if (!this.checkFunction("move")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!$v_1) $v_0 = this.$0_3.$6_0;
        else if ($v_1 === 1 && Number.isInstanceOfType(arguments[0])) $v_0 = arguments[0];
        else throw Error.create("Invalid argument");
        this.$0_3.moveValueUp($v_0) && this.$K_3()
    },
    moveValueDown: function() {
        var $v_0;
        if (!this.checkFunction("move")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) $v_0 = this.$0_3.$6_0;
        else if (arguments.length === 1 && Number.isInstanceOfType(arguments[0])) $v_0 = arguments[0];
        else throw Error.create("Invalid argument");
        this.$0_3.moveValueDown($v_0) && this.$K_3()
    },
    editValue: function() {
        var $v_0, $v_1, $v_2 = "#0000ff", $v_3 = null;
        if (this.isOptionSet()) return;
        if (!this.checkFunction("edit")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) {
            $v_0 = this.$0_3.$6_0;
            $v_1 = null;
            $v_2 = "#0000ff";
            if (IsNull($v_0)) return
        } else if (arguments.length === 1 && Number.isInstanceOfType(arguments[0])) {
            $v_0 = arguments[0];
            $v_1 = null
        } else if (arguments.length === 1 && String.isInstanceOfType(arguments[0])) {
            $v_0 = this.$0_3.$6_0;
            $v_1 = arguments[0]
        } else if (arguments.length === 2 &&
            Number.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1])) {
            $v_0 = arguments[0];
            $v_1 = arguments[1]
        } else if (arguments.length === 3 &&
            Number.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1]) &&
            String.isInstanceOfType(arguments[2])) {
            $v_0 = arguments[0];
            $v_1 = arguments[1];
            $v_2 = arguments[2]
        } else throw Error.create("Invalid argument");
        $v_3 = this.$0_3.getValue($v_0);
        if (IsNull($v_3) || !$v_3.$7_0) throw Error.create("Invalid argument");
        if (IsNull($v_1)) {
            var $v_4 = new Mscrm.ListItem;
            $v_4.$1_0 = $v_3.$1_0;
            $v_4.$4_0 = $v_3.$4_0;
            $v_4.$B_0 = $v_3.$B_0;
            $v_4.bIsAttribute = _bIsAttribute;
            if (_bIsAttribute)
                if (this.$V_3.get_dataValue() === "picklist") {
                    $v_4.aValues = this.$0_3.$2_0;
                    $v_4.isCustomAttribute = "_bIsCustomAttribute";
                    $v_4.sAttributeType = this.$V_3.get_dataValue()
                }
            var $v_5 = new Xrm.DialogOptions;
            $v_5.height = 300;
            $v_5.width = 300;
            var $v_6 = [this, $v_0],
                $v_7 = Mscrm.Utilities.createCallbackFunctionForXrmDialog(Mscrm.ListEdit.editValueCallback, $v_6);
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=edit").toString(),
                $v_5,
                $v_4,
                null,
                $v_7)
        } else this.$k_3($v_1, $v_0, $v_0, $v_2)
    },
    $k_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$0_3.getValue($p2);
        $v_0.$4_0 = $p0;
        $v_0.$1_0 = $p1;
        $v_0.$B_0 = $p3;
        this.$K_3()
    },
    addValue: function() {
        var $v_0, $v_1 = "", $v_2 = "#0000ff", $v_3 = -1;
        this.$X_3 = "add";
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) $v_0 = null;
        else if (arguments.length === 1 && String.isInstanceOfType(arguments[0])) $v_0 = arguments[0].toString();
        else if (arguments.length === 2 &&
            String.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1])) {
            $v_0 = arguments[0].toString();
            $v_1 = arguments[1].toString()
        } else if (arguments.length === 3 &&
            String.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1]) &&
            String.isInstanceOfType(arguments[2])) {
            $v_0 = arguments[0].toString();
            $v_1 = arguments[1].toString();
            $v_2 = arguments[2].toString()
        } else throw Error.create("Invalid argument");
        if (IsNull($v_0)) {
            var $v_4 = new Mscrm.ListItem;
            $v_4.$1_0 = this.$0_3.$F_0;
            $v_4.$4_0 = "";
            $v_4.$B_0 = "#0000ff";
            if ($v_4.$1_0 === this.$e_3) {
                if (!confirm(window.LOCID_MAX_PICKLIST_VALUE)) return
            } else if ($v_4.$1_0 > this.$e_3) {
                alert(window.LOCID_ABOVE_MAX_PICKLIST_VALUE);
                return
            }
            $v_4.bIsAttribute = _bIsAttribute;
            if (_bIsAttribute)
                if (this.$V_3.get_dataValue() === "picklist") {
                    $v_4.aValues = this.$0_3.$2_0;
                    $v_4.isCustomAttribute = "_bIsCustomAttribute";
                    $v_4.sAttributeType = this.$V_3.get_dataValue()
                }
            var $v_5 = new Xrm.DialogOptions;
            $v_5.height = 300;
            $v_5.width = 300;
            var $v_6 = [this, $v_1],
                $v_7 = Mscrm.Utilities.createCallbackFunctionForXrmDialog(Mscrm.ListEdit.addValueCallback, $v_6);
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=add").toString(),
                $v_5,
                $v_4,
                null,
                $v_7)
        } else this.$i_3($v_0, $v_3, $v_1, $v_2)
    },
    $i_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = -1;
        if (!IsNull(this.$0_3.$6_0) && this.$0_3.$6_0) $v_0 = this.$0_3.findValue(this.$0_3.$6_0) + 1;
        var $v_1 = this.$0_3.addValue($p0, $v_0, $p2, $p3);
        if ($p1 !== -1 && $v_1 !== -1) this.$8_3($v_1).$1_0 = $p1;
        this.$K_3();
        if (!IsNull($v_1))
            this.get_selectedValue() !== this.$8_3($v_1).$1_0 && this.set_selectedValue(this.$8_3($v_1).$1_0)
    },
    removeValue: function(showWarning, value) {
        var $v_0 = arguments.length;
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        else if (this.$5_3) return;
        if ($v_0 > 2 ||
            $v_0 >= 1 && !Boolean.isInstanceOfType(arguments[0]) ||
            $v_0 >= 2 && !Number.isInstanceOfType(arguments[1])) throw Error.create("Invalid argument");
        if (IsNull(showWarning)) showWarning = false;
        if (IsNull(value)) value = this.$0_3.$6_0;
        var $v_1 = this.$0_3.findValue(value);
        if ($v_1 < 0) return;
        var $v_2 = this.$8_3($v_1);
        showWarning = showWarning && this.$E_3.$R_0.length > 0;
        if (!IsNull($v_2) && $v_2.$J_0) showWarning = false;
        if (!showWarning || confirm(this.$E_3.$R_0)) {
            this.$0_3.removeValue(value);
            this.$K_3()
        }
    },
    sortValues: function(ascend) {
        if (!this.checkFunction("sort")) throw Error.create("Function not available");
        if (this.$5_3) return;
        this.$0_3.sortValues(ascend);
        this.$K_3()
    },
    $s_3: function($p0) {
        var $v_0 = this.$3_3("divValueList"), $v_1 = $p0.target;
        while (!IsNull($v_1) &&
            !IsNull($v_1.id) &&
            !($v_1 === this.get_element() || $v_1 === $v_0 || $v_1.id.toLowerCase() === "commandbar")
        ) $v_1 = $v_1.parentNode;
        if (IsNull($v_1) || $v_1 === this.get_element()) return;
        switch ($p0.keyCode) {
        case 38:
        case 40:
            $p0.preventDefault();
            var $v_2 = $p0.keyCode === 38, $v_3 = XUI.Xml.DomUtils.GetFirstChild($v_0).rows, $v_4 = $v_3.length;
            if ($v_4 > 0) {
                var $v_5;
                if (IsNull(this.get_selectedValue()) || this.get_selectedValue() === -1) {
                    $v_5 = this.$h_3($v_3[0]);
                    this.set_selectedValue(this.$8_3($v_5).$1_0)
                } else {
                    $v_5 = this.$0_3.findValue(this.get_selectedValue());
                    var $v_6 = this.$3_3("val" + $v_5);
                    if (IsNull($v_6)) break;
                    $v_5 = $v_6.rowIndex;
                    if ($v_5 >= $v_4 - 1 && !$v_2 || $v_2 && !$v_5) {
                        var $v_7 = $v_2 ? $v_4 - 1 : 0;
                        $v_6 = $v_3[$v_7];
                        $v_5 = this.$h_3($v_6);
                        this.set_selectedValue(this.$8_3($v_5).$1_0);
                        $v_5 >= 0 && $v_6.scrollIntoView(true)
                    } else {
                        $v_5 = $v_2 ? $v_5 - 1 : $v_5 + 1;
                        $v_6 = $v_3[$v_5];
                        $v_5 = this.$h_3($v_6);
                        if ($v_5 >= 0) {
                            this.set_selectedValue(this.$8_3($v_5).$1_0);
                            ScrollVerticalList($v_0, $v_6, $v_6.rowIndex, $v_4, false)
                        }
                    }
                }
            }
            this.$Y_3();
            break;
        default:
            break
        }
    },
    $h_3: function($p0) {
        var $v_0 = parseInt($p0.id.substr((this.get_element().id + "_val").length));
        if (IsNull($v_0) && $v_0.toString() !== "NaN") return -1;
        return $v_0
    },
    runCommand: function(command) {
        if (this.$5_3 || !this.$p_3(command)) return;
        switch (command) {
        case "add":
            if (picklistEditIsFor !== "paramaterDialog")
                this.addValue(String.format(window.LOCID_PICKLIST_DEFAULT_LABEL, ""));
            else {
                var $v_0 = $get("parameterEditValues_txtItemDesc");
                this.addValue(String.format("parameter_{0}", this.$0_3.$F_0), $v_0.options[0].value)
            }
            this.$Y_3();
            break;
        case "edit":
            break;
        case "remove":
            if (!IsNull(this.get_selectedValue())) {
                var $v_1 = this.$0_3.findValue(this.get_selectedValue());
                this.removeValue(true, this.get_selectedValue());
                if (IsNull(this.get_selectedValue()) || !this.get_selectedValue()) {
                    var $v_2 = this.$3_3("val" + $v_1);
                    if (!IsNull($v_2)) this.set_selectedValue(this.$8_3($v_1).$1_0);
                    else {
                        $v_1 = $v_1 - 1;
                        $v_2 = this.$3_3("val" + $v_1);
                        !IsNull($v_2) && this.set_selectedValue(this.$8_3($v_1).$1_0)
                    }
                    this.$Y_3()
                }
            }
            this.$0_3.setNextValue(this.$0_3.$A_0 * 1e4);
            break;
        case "moveup":
            !IsNull(this.get_selectedValue()) && this.moveValueUp();
            break;
        case "movedown":
            !IsNull(this.get_selectedValue()) && this.moveValueDown();
            break;
        case "sortasc":
            this.sortValues(true);
            break;
        case "sortdes":
            this.sortValues(false);
            break;
        default:
            return
        }
        this.fireControlEvent("change", Sys.EventArgs.Empty)
    },
    $p_3: function($p0) {
        var $v_0 = null;
        switch ($p0) {
        case "add":
            $v_0 = this.$3_3("btnAddValue");
            break;
        case "edit":
            $v_0 = this.$3_3("btnEditValue");
            break;
        case "remove":
            $v_0 = this.$3_3("btnRemoveValue");
            break;
        case "moveup":
            $v_0 = this.$3_3("btnMoveValueUp");
            break;
        case "movedown":
            $v_0 = this.$3_3("btnMoveValueDown");
            break;
        case "sortasc":
            $v_0 = this.$3_3("btnSortAsc");
            break;
        case "sortdes":
            $v_0 = this.$3_3("btnSortDesc");
            break
        }
        if (!IsNull($v_0) || !$v_0.disabled) return true;
        return false
    },
    $r_3: function($p0) {
        if (IsNull(this.get_selectedValue())) {
            this.$m_3();
            return
        }
        var $v_0 = this.get_element().id, $v_1;
        if (!this.checkFunction("edit")) throw Error.create("Function not available");
        else if (this.$5_3) return;
        $v_1 = this.$0_3.$6_0;
        var $v_2 = this.$0_3.getValue($v_1),
            $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target),
            $v_4 = $p0.target;
        if (!IsNull($v_3)) {
            var $v_5 = $v_4.id.substr(($v_0 + "_").length);
            switch ($v_5) {
            case "txtItemVal":
                this.$w_3($v_3, $v_4, $v_2, $v_1);
                break;
            case "txtItemLb":
                this.$v_3($v_3, $v_4, $v_2);
                break;
            case "txtItemDesc":
                $v_2.$H_0 = this.$M_3.get_dataValue().toString();
                break;
            case "txtItemColor":
                $v_2.$B_0 = this.$G_3.get_dataValue().toString();
                break
            }
            var $v_6 = this.$0_3.findValue($v_1);
            if ($v_6 >= 0) {
                var $v_7 = $get(this.get_id() + "_val" + $v_6);
                if (!IsNull($v_7)) {
                    $v_7.nodeValue = $v_2.$1_0.toString();
                    XUI.Xml.DomUtils.GetFirstChild($v_7).innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2.$4_0)
                }
            }
            if (this.checkFunction("setdefault") && this.get_hasDefaultValue()) {
                this.$j_3();
                this.set_defaultValue(this.$0_3.$9_0)
            }
            this.fireControlEvent("change", Sys.EventArgs.Empty)
        }
    },
    $w_3: function($p0, $p1, $p2, $p3) {
        if (IsNull($p0.get_dataValue())) {
            $p0.set_dataValue($p2.$1_0);
            $p0.setFocus();
            $p1.select();
            return
        }
        var $v_0 = Number.parseInvariant($p0.get_dataValue().toString());
        if ($v_0 !== $p3) {
            var $v_1 = true, $v_2 = this.$0_3.getValue($v_0);
            if (!IsNull($v_2)) {
                alert(String.format(window.LOCID_VALUE_NOT_UNIQUE,
                    Mscrm.NumberUtility.addFormatting($v_2.$1_0, 0),
                    $v_2.$4_0));
                $v_1 = false
            }
            if ($v_1 && this.$E_3.$U_0.length > 0 && !$p2.$J_0) if (!confirm(this.$E_3.$U_0)) $v_1 = false;
            if ($v_1 && this.$0_3.$A_0 >= 1e4 && this.$E_3.$W_0.length > 0 && $p2.$J_0
            )
                if ($v_0 < this.$0_3.$A_0 * 1e4 || $v_0 > this.$0_3.$A_0 * 1e4 + 9999
                )
                    if (!confirm(String.format(this.$E_3.$W_0,
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$A_0, 0),
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$A_0 * 1e4, 0),
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$A_0 * 1e4 + 9999, 0)))) $v_1 = false;
            if (!$v_1) {
                $p0.set_dataValue($p2.$1_0);
                return
            }
            $p2.$1_0 = $v_0;
            this.$0_3.$D_0 && this.$0_3.$9_0 === $p3 && this.set_defaultValue($v_0);
            this.set_selectedValue($v_0);
            this.$0_3.setNextValue(this.$0_3.$A_0 * 1e4 + 1)
        }
    },
    $v_3: function($p0, $p1, $p2) {
        var $v_0 = !IsNull($p0.get_dataValue()) ? $p0.get_dataValue().toString() : null;
        if (!IsNull($v_0))
            if (picklistEditIsFor !== "paramaterDialog") $p2.$4_0 = $v_0;
            else {
                var $v_1 = $v_0, $v_2 = $v_1.match(new RegExp("([A-Za-z0-9])+([_])+([A-Za-z0-9_])*"));
                if (IsNull($v_2) || $v_2[0] !== $v_1 || $v_1.substr(0, 4).toUpperCase() === "CRM_") {
                    alert(window.LOCID_PARAM_NAME_NOT_VALID);
                    $p0.set_dataValue($p2.$4_0);
                    $p0.setFocus();
                    $p1.select();
                    return
                }
                if ($v_1 !== $p2.$4_0) {
                    var $v_3 = this.$0_3.findLabel($v_1.toString());
                    if ($v_3.length > 0) {
                        alert(String.format(window.LOCID_PARAM_NAME_NOT_UNIQUE, $v_3));
                        $p0.set_dataValue($p2.$4_0);
                        return
                    } else $p2.$4_0 = $v_0
                }
            }
        else {
            $p0.set_dataValue($p2.$4_0);
            $p0.setFocus();
            $p1.select()
        }
    },
    add_change: function(value) { this.get_events().addHandler("change", value) },
    remove_change: function(value) { this.get_events().removeHandler("change", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$e_3 = Number.parseInvariant(this.get_element().attributes.getNamedItem("maxvalue").value);
        this.$E_3 = new Mscrm.Messages;
        this.$t_3(this.$a_3);
        this.$O_3 = this.$3_3("txtItemLb");
        this.$P_3 = this.$3_3("txtItemVal");
        this.$N_3 = this.$3_3("txtItemDesc");
        this.$L_3 = this.$3_3("txtItemColor");
        this.$T_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$O_3);
        this.$I_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$P_3);
        this.$M_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$N_3);
        this.$V_3 = Mscrm.FormControlInputBehavior.GetBehavior("selType");
        this.$G_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$L_3);
        this.$0_3 = new Mscrm.ValuesList;
        this.$0_3.$D_0 = this.checkFunction("setdefault");
        this.$0_3.deserialize(this.$Z_3);
        this.$K_3();
        $addHandler(this.get_element(), "keydown", this.$$d_$s_3);
        if (!this.isOptionSet()) return;
        !IsNull(this.$O_3) && $addHandler(this.$O_3, "change", this.$$d_$r_3);
        !IsNull(this.$P_3) && $addHandler(this.$P_3, "change", this.$$d_$r_3);
        !IsNull(this.$N_3) && $addHandler(this.$N_3, "change", this.$$d_$r_3);
        !IsNull(this.$L_3) && $addHandler(this.$L_3, "change", this.$$d_$r_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$O_3) && $removeHandler(this.$O_3, "change", this.$$d_$r_3);
        !IsNull(this.$P_3) && $removeHandler(this.$P_3, "change", this.$$d_$r_3);
        !IsNull(this.$N_3) && $removeHandler(this.$N_3, "change", this.$$d_$r_3);
        !IsNull(this.$L_3) && $removeHandler(this.$L_3, "change", this.$$d_$r_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$s_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ListItem = function() {};
Mscrm.ListItem.prototype = {
    $1_0: 0,
    $4_0: null,
    $7_0: false,
    $H_0: null,
    $B_0: null,
    $g_0: null,
    $J_0: false,
    $S_0: null,
    get_value: function() { return this.$1_0 },
    set_value: function(value) {
        this.$1_0 = value;
        return value
    },
    get_label: function() { return this.$4_0 },
    set_label: function(value) {
        this.$4_0 = value;
        return value
    },
    get_editable: function() { return this.$7_0 },
    set_editable: function(value) {
        this.$7_0 = value;
        return value
    },
    get_description: function() { return this.$H_0 },
    set_description: function(value) {
        this.$H_0 = value;
        return value
    },
    get_color: function() { return this.$B_0 },
    set_color: function(value) {
        this.$B_0 = value;
        return value
    },
    get_parameter: function() { return this.$g_0 },
    set_parameter: function(value) {
        this.$g_0 = value;
        return value
    },
    get_hasNewValue: function() { return this.$J_0 },
    set_hasNewValue: function(value) {
        this.$J_0 = value;
        return value
    },
    get_innerXml: function() { return this.$S_0 },
    set_innerXml: function(value) {
        this.$S_0 = value;
        return value
    }
};
Mscrm.Messages = function() {};
Mscrm.Messages.prototype = {
    $R_0: null,
    $U_0: null,
    $W_0: null,
    get_deleteValue: function() { return this.$R_0 },
    set_deleteValue: function(value) {
        this.$R_0 = value;
        return value
    },
    get_saveChangedValue: function() { return this.$U_0 },
    set_saveChangedValue: function(value) {
        this.$U_0 = value;
        return value
    },
    get_valueChangedWithoutPrefix: function() { return this.$W_0 },
    set_valueChangedWithoutPrefix: function(value) {
        this.$W_0 = value;
        return value
    }
};
Mscrm.ValuesList = function() {
    this.$2_0 = [];
    this.$6_0 = -1
};
Mscrm.ValuesList.prototype = {
    $D_0: false,
    $9_0: 0,
    $F_0: 0,
    $A_0: 0,
    $f_0: false,
    get_bitmask: function() { return this.$f_0 },
    set_bitmask: function(value) {
        this.$f_0 = value;
        return value
    },
    get_defaultValue: function() { return this.$9_0 },
    set_defaultValue: function(value) {
        this.$9_0 = value;
        return value
    },
    get_nextValue: function() { return this.$F_0 },
    set_nextValue: function(value) {
        this.$F_0 = value;
        return value
    },
    get_prefixValue: function() { return this.$A_0 },
    set_prefixValue: function(value) {
        this.$A_0 = value;
        return value
    },
    get_valuesCollection: function() { return this.$2_0 },
    set_valuesCollection: function(value) {
        this.$2_0 = value;
        return value
    },
    get_selectedValue: function() { return this.$6_0 },
    set_selectedValue: function(value) {
        this.$6_0 = value;
        return value
    },
    get_hasDefaultValue: function() { return this.$D_0 },
    set_hasDefaultValue: function(value) {
        this.$D_0 = value;
        return value
    },
    setSelectedValue: function(value) {
        var $v_0 = this.getValue(value);
        if (IsNull($v_0) || !$v_0.$7_0) throw Error.create("Invalid argument");
        this.$6_0 = value
    },
    getValue: function(value) {
        var $v_0 = this.findValue(value);
        return $v_0 >= 0 ? this.$C_0($v_0) : null
    },
    findValue: function(value) {
        for (var $v_1 = this.$2_0
                     .length,
            $v_0 = 0;
            $v_0 < $v_1;
            $v_0++) if (this.$C_0($v_0).$1_0 === value) return $v_0;
        return -1
    },
    setDefaultValue: function(value) {
        if (!this.$D_0) throw Error.create("The control does not have default value");
        if (this.$2_0.length > 0 && this.findValue(value) < 0) {
            this.$9_0 = 0;
            return
        }
        this.$9_0 = value
    },
    setNextValue: function(value) {
        for (var $v_0 = value, $v_1 = false, $v_2 = this.$2_0.length, $v_3 = [], $v_4 = 0; $v_4 < $v_2; ++$v_4) {
            var $v_5 = this.$C_0($v_4).$1_0;
            if ($v_5 >= $v_0) {
                $v_1 = $v_1 || $v_5 === $v_0;
                Array.add($v_3, $v_5)
            }
        }
        if ($v_1) {
            var $$t_A = this;
            $v_3.sort(function($p1_0, $p1_1) { return $p1_0 - $p1_1 });
            for (var $v_6 = 0; $v_6 < $v_2; ++$v_6)
                if ($v_0 === $v_3[$v_6]) ++$v_0;
                else if ($v_0 < $v_3[$v_6]) break
        }
        this.$F_0 = $v_0
    },
    findLabel: function(label) {
        for (var $v_1 = this.$2_0.length, $v_0 = 0; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$C_0($v_0);
            if ($v_2.$4_0 === label) return $v_2.$4_0
        }
        return ""
    },
    addValue: function(label, position, description, color) {
        var $v_0 = this.$2_0.length;
        if (position !== -1) $v_0 = position;
        var $v_1 = new Mscrm.ListItem;
        $v_1.$1_0 = this.$F_0;
        $v_1.$4_0 = label;
        $v_1.$7_0 = true;
        $v_1.$J_0 = true;
        $v_1.$H_0 = description;
        $v_1.$B_0 = color;
        for (var $v_2 = this.$2_0.length, $v_3 = $v_2; $v_3 > $v_0; $v_3--) this.$2_0[$v_3] = this.$2_0[$v_3 - 1];
        this.$2_0[$v_0] = $v_1;
        this.$D_0 && $v_2 === 1 && this.setDefaultValue(this.$F_0);
        this.setNextValue(this.$F_0 + 1);
        return $v_0
    },
    moveValueUp: function(value) {
        var $v_0 = false, $v_1 = this.findValue(value), $v_2, $v_3 = this.$C_0($v_1);
        if ($v_1 < 0 || !$v_3.$7_0) throw Error.create("Invalid argument");
        for ($v_2 = $v_1 - 1; $v_2 >= 0 && !this.$C_0($v_2).$7_0; $v_2--);
        if ($v_2 >= 0) {
            var $v_4 = this.$C_0($v_2);
            this.$2_0[$v_2] = $v_3;
            this.$2_0[$v_1] = $v_4;
            $v_0 = true
        }
        return $v_0
    },
    moveValueDown: function(value) {
        var $v_0 = false, $v_1 = this.findValue(value), $v_2, $v_3 = this.$C_0($v_1);
        if ($v_1 < 0 || !$v_3.$7_0) throw Error.create("Invalid argument");
        var $v_4 = this.$2_0.length;
        for ($v_2 = $v_1 + 1; $v_2 < $v_4 && !this.$C_0($v_2).$7_0; $v_2++);
        if ($v_2 < $v_4) {
            var $v_5 = this.$C_0($v_2);
            this.$2_0[$v_2] = $v_3;
            this.$2_0[$v_1] = $v_5;
            $v_0 = true
        }
        return $v_0
    },
    $C_0: function($p0) {
        var $v_0 = this.$2_0[$p0];
        return $v_0
    },
    removeValue: function(value) {
        var $v_0 = this.findValue(value), $v_1 = this.$C_0($v_0);
        if ($v_0 < 0 || !$v_1.$7_0) throw Error.create("Invalid argument");
        this.$2_0.splice($v_0, 1);
        var $v_2 = this.$2_0.length;
        if (this.$6_0 === value) this.$6_0 = 0;
        if (this.$D_0 && this.$9_0 === value) this.$9_0 = $v_2 > 0 ? this.$C_0(0).$1_0 : -1
    },
    sortValues: function(ascend) {
        if (ascend) {
            var $$t_5 = this;
            this.$2_0.sort(function($p1_0, $p1_1) { return $p1_0.$4_0.localeCompare($p1_1.$4_0) })
        } else {
            var $$t_6 = this;
            this.$2_0.sort(function($p1_0, $p1_1) { return $p1_1.$4_0.localeCompare($p1_0.$4_0) })
        }
    },
    serialize: function() {
        var $v_0 = XUI.Xml.CreateDocument(), $v_1 = $v_0.createElement("values");
        if (this.$D_0 && !IsNull(this.$9_0)) {
            var $v_5 = $v_0.createAttribute("default");
            $v_5.nodeValue = this.$9_0.toString();
            $v_1.attributes.setNamedItem($v_5)
        }
        var $v_2 = $v_0.createAttribute("next");
        $v_2.nodeValue = this.$F_0.toString();
        $v_1.attributes.setNamedItem($v_2);
        var $v_3 = $v_0.createAttribute("prefix");
        $v_3.nodeValue = this.$A_0.toString();
        $v_1.attributes.setNamedItem($v_3);
        for (var $v_4 = this.$2_0.length, $v_6 = 0; $v_6 < $v_4; $v_6++) {
            var $v_7 = this.$C_0($v_6), $v_8 = $v_0.createElement("value"), $v_9 = $v_0.createAttribute("value");
            $v_9.nodeValue = $v_7.$1_0.toString();
            var $v_A = $v_0.createAttribute("label");
            $v_A.nodeValue = $v_7.$4_0;
            var $v_B = $v_0.createAttribute("editable");
            $v_B.nodeValue = $v_7.$7_0 ? "1" : "0";
            var $v_C = $v_0.createAttribute("description");
            $v_C.nodeValue = IsNull($v_7.$H_0) ? "" : $v_7.$H_0;
            var $v_D = $v_0.createAttribute("color");
            $v_D.nodeValue = $v_7.$B_0.toString();
            $v_8.attributes.setNamedItem($v_9);
            $v_8.attributes.setNamedItem($v_A);
            $v_8.attributes.setNamedItem($v_B);
            $v_8.attributes.setNamedItem($v_C);
            $v_8.attributes.setNamedItem($v_D);
            $v_7.$S_0 && $v_8.appendChild(XUI.Xml.DomUtils.GetFirstChild(XUI.Xml.LoadXml($v_7.$S_0)));
            $v_1.appendChild($v_8)
        }
        $v_0.appendChild($v_1);
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    deserialize: function(xml) {
        var $v_0, $v_1;
        this.$2_0 = [];
        var $v_2 = XUI.Xml.LoadXml(xml), $v_3 = XUI.Xml.SelectNodes($v_2, "values/value", null);
        for ($v_0 = 0; $v_0 < $v_3.length; $v_0++) {
            $v_1 = $v_3[$v_0];
            var $v_5 = new Mscrm.ListItem;
            $v_5.$1_0 = Number.parseInvariant($v_1.attributes.getNamedItem("value").nodeValue);
            $v_5.$4_0 = $v_1.attributes.getNamedItem("label").nodeValue;
            $v_5.$7_0 = $v_1.attributes.getNamedItem("editable").nodeValue === "1";
            $v_5.$B_0 = $v_1.attributes.getNamedItem("color").nodeValue;
            $v_5.$J_0 = false;
            var $v_6 = XUI.Xml.DomUtils.GetFirstChild($v_1);
            if ($v_6) $v_5.$S_0 = XUI.Xml.XMLSerializer.serializeToString($v_6);
            this.$2_0[this.$2_0.length] = $v_5;
            var $v_7 = $v_1.attributes.getNamedItem("description");
            if (!IsNull($v_7)) $v_5.$H_0 = $v_7.nodeValue;
            var $v_8 = $v_1.attributes.getNamedItem("color");
            if (!IsNull($v_8)) $v_5.$B_0 = $v_8.nodeValue
        }
        if (this.$D_0) {
            var $v_9 = $v_2.documentElement.attributes.getNamedItem("default");
            !IsNull($v_9) && this.setDefaultValue(Number.parseInvariant($v_9.nodeValue))
        }
        this.setNextValue(Number.parseInvariant($v_2.documentElement.attributes.getNamedItem("next").nodeValue));
        var $v_4 = $v_2.documentElement.attributes.getNamedItem("prefix");
        !IsNull($v_4) && this.setPrefixValue(Number.parseInvariant($v_4.nodeValue))
    },
    setPrefixValue: function(value) { this.$A_0 = value }
};
Mscrm.ListEdit.registerClass("Mscrm.ListEdit", Mscrm.CrmUIControl);
Mscrm.ListItem.registerClass("Mscrm.ListItem");
Mscrm.Messages.registerClass("Mscrm.Messages");
Mscrm.ValuesList.registerClass("Mscrm.ValuesList");
Mscrm.ListEdit.highlighT_COLOR = "#c4ddff";
Mscrm.ListEdit.diM_COLOR = "#ffffff";
Mscrm.ListEdit.defaulT_COLOR = "#0000ff";
Mscrm.ListEdit.optionValueSuffix = 1e4