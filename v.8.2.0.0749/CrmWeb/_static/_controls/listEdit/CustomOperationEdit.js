Type.registerNamespace("Mscrm");
Mscrm.CustomOperationEdit = function($p0) {
    this.$$d_$1C_3 = Function.createDelegate(this, this.$1C_3);
    this.$$d_$1D_3 = Function.createDelegate(this, this.$1D_3);
    this.$$d_$1A_3 = Function.createDelegate(this, this.$1A_3);
    this.$$d_$19_3 = Function.createDelegate(this, this.$19_3);
    Mscrm.CustomOperationEdit.initializeBase(this, [$p0])
};
Mscrm.CustomOperationEdit.editValueCallback = function(result, thisContext, oldValue) {
    if (IsNull(result)) return;
    var $v_0 = result.sLabel, $v_1 = result.iValue;
    thisContext.$10_3($v_0, $v_1, oldValue)
};
Mscrm.CustomOperationEdit.addValueCallback = function(result,
    thisContext,
    description,
    required,
    type,
    direction,
    typeName,
    entityName) {
    if (IsNull(result)) return;
    var $v_0 = result.sLabel, $v_1 = result.iValue;
    thisContext.$x_3($v_0, $v_1, description, required, type, direction, typeName, entityName)
};
Mscrm.CustomOperationEdit.prototype = {
    $u_3: 1e5,
    $0_3: null,
    $I_3: null,
    $h_3: null,
    $5_3: false,
    $o_3: null,
    $n_3: null,
    $Z_3: null,
    $a_3: null,
    $P_3: null,
    $V_3: null,
    $O_3: null,
    $U_3: null,
    $W_3: null,
    $Y_3: null,
    $j_3: null,
    $M_3: null,
    $e_3: null,
    $S_3: null,
    $9_3: null,
    $6_3: null,
    $N_3: null,
    $R_3: null,
    get_selectedValue: function() { return this.$0_3.$7_0 },
    set_selectedValue: function(value) {
        var $v_0 = IsNull(value) ? value : Number.parseInvariant(value.toString());
        if (!this.$5_3) {
            var $v_1 = this.$0_3.$7_0;
            this.$0_3.setSelectedValue($v_0);
            for (var $v_2 = 0, $v_3 = 0, $v_4 = this.$0_3.$4_0.length, $v_5 = 0; $v_5 < $v_4; $v_5++) {
                var $v_6 = this.$B_3($v_5).$3_0;
                if ($v_1 === $v_6) $v_2 = $v_5;
                else if ($v_0 === $v_6) $v_3 = $v_5
            }
            this.$0_3.$7_0 = !IsNull($v_3) ? $v_0 : -1;
            this.$1B_3($v_2);
            this.$12_3($v_3)
        }
        return value
    },
    get_defaultValue: function() {
        if (!this.checkFunction("setdefault")) throw Error.create("Function not available");
        if (this.$5_3) return 0;
        return this.$0_3.$C_0
    },
    set_defaultValue: function(value) {
        if (!this.checkFunction("setdefault")) throw Error.create("Function not available");
        if (this.$5_3) return value;
        this.$0_3.setDefaultValue(value);
        this.$1I_3();
        return value
    },
    get_nextValue: function() {
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return 0;
        return this.$0_3.$K_0
    },
    set_nextValue: function(value) {
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return value;
        this.$0_3.setNextValue(value);
        return value
    },
    get_prefixValue: function() { return this.$0_3.$D_0 },
    set_prefixValue: function(value) {
        this.$0_3.setPrefixValue(value);
        return value
    },
    get_count: function() {
        var $v_0 = this.$0_3.$4_0.length;
        return $v_0 - 1
    },
    get_disabled: function() { return this.$5_3 },
    set_disabled: function(value) {
        this.$5_3 = value;
        this.$r_3("move", value);
        this.$r_3("edit", value);
        this.$r_3("addremove", value);
        this.$r_3("sort", value);
        return value
    },
    get_messageXml: function() { return this.$o_3 },
    set_messageXml: function(value) {
        this.$o_3 = value;
        return value
    },
    get_error: function() {
        this.$0_3.serialize();
        this.$0_3.$X_0 && alert(this.$0_3.$m_0);
        return this.$0_3.$X_0
    },
    get_dataXml: function() { return this.$0_3.serialize() },
    set_dataXml: function(value) {
        this.$0_3.deserialize(value);
        this.$T_3();
        return value
    },
    getArgumentNames: function() { return this.$0_3.getAllArgumentNames() },
    get_initialXml: function() { return this.$n_3 },
    set_initialXml: function(value) {
        this.$n_3 = value;
        return value
    },
    get_$q_3: function() { return this.get_element().id },
    get_referredArgumentValidationCallback: function() { return this.$R_3 },
    set_referredArgumentValidationCallback: function(value) {
        this.$R_3 = value;
        return value
    },
    $r_3: function($p0, $p1) {
        switch ($p0.toLowerCase()) {
        case "move":
            this.$b_3(this.$1_3("btnMoveValueUp"), $p1);
            this.$b_3(this.$1_3("btnMoveValueDown"), $p1);
            break;
        case "edit":
            this.$b_3(this.$1_3("btnEditValue"), $p1);
            break;
        case "addremove":
            this.$b_3(this.$1_3("btnAddValue"), $p1);
            this.$b_3(this.$1_3("btnRemoveValue"), $p1);
            break;
        case "sort":
            this.$b_3(this.$1_3("btnSortAsc"), $p1);
            this.$b_3(this.$1_3("btnSortDesc"), $p1);
            break;
        default:
            return
        }
    },
    isOptionSet: function() {
        var $v_0 = this.get_element().id, $v_1 = $get($v_0 + "_txtItemDesc");
        return !IsNull($v_1)
    },
    $1F_3: function($p0) {
        var $v_0 = XUI.Xml.LoadXml($p0);
        this.$I_3.$c_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/deletevalue", null));
        this.$I_3.$d_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/savechangedvalue", null));
        this.$I_3.$f_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "messages/valuechangedwithoutprefix", null))
    },
    $T_3: function() {
        this.$17_3();
        this.$z_3();
        this.$15_3()
    },
    $t_3: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$9_3.get_options().length; $v_0++) {
            var $v_1 = this.$9_3.get_options()[$v_0];
            if ($v_1.DataValue === $p0) return $v_1.Text
        }
        return ""
    },
    $17_3: function() {
        for (var $v_0 = new Sys
                     .StringBuilder('<table cellpadding="2" cellspacing="0" width="100%" style="table-layout:fixed;">'),
            $v_1 = -1,
            $v_2 = this.get_element().id,
            $v_3 = this.$0_3.$4_0.length,
            $v_4 = 0;
            $v_4 < $v_3;
            $v_4++) {
            var $v_5 = this.$B_3($v_4), $v_6 = $v_5.$3_0;
            if ($v_5.$8_0) {
                $v_0.append("<tr ");
                $v_0.append(String.format("id={0}_val{1} ", CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), $v_4));
                $v_0.append(String.format("value={0} ", $v_6));
                $v_0.append(String.format("selected={0} ", 0));
                $v_0.append(String.format('onclick="$find({0}).handleItemSelected({1})" ',
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$q_3()),
                    $v_4));
                var $v_7 = 'onclick="$find(' +
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$q_3()) +
                    ").handleItemSelected(" +
                    $v_4 +
                    ')" ';
                $v_0.append($v_7);
                var $v_8 = "ondblclick=$find(" +
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$q_3()) +
                    ").editValue(" +
                    $v_6 +
                    "); ";
                $v_0.append($v_8);
                $v_0.append(String.format('><td nowrap class="hand" width="25%" title="{1}" >{0}</td>',
                    CrmEncodeDecode.CrmHtmlEncode($v_5.$2_0),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.$2_0)));
                $v_0.append(String.format('<td nowrap class="hand" width="25%" title="{1}" >{0}</td>',
                    CrmEncodeDecode.CrmHtmlEncode(this.$t_3($v_5.$A_0)),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$t_3($v_5.$A_0))));
                $v_0.append(String.format('<td nowrap class="hand" width="25%">{0}</td>',
                    CrmEncodeDecode.CrmHtmlEncode($v_5.$J_0)));
                $v_0.append(String.format('<td nowrap class="hand" width="25%">{0}</td></tr>',
                    CrmEncodeDecode.CrmHtmlEncode($v_5.$F_0)))
            }
            if (this.$h_3 !== "add" && this.$0_3.$7_0 === $v_6) {
                $v_1 = $v_4;
                this.$0_3.$7_0 = $v_6
            }
        }
        $v_0.append("</table>");
        this.$1_3("divValueList").innerHTML = $v_0.toString();
        if (this.$h_3 === "add") {
            this.$h_3 = null;
            for (var $v_9 = $v_3 - 1; $v_9 >= 0; $v_9--) {
                var $v_A = this.$B_3($v_9);
                if ($v_A.$8_0) {
                    $v_1 = $v_9;
                    this.$0_3.$7_0 = $v_A.$3_0;
                    break
                }
            }
        }
        this.$12_3($v_1);
        this.$l_3()
    },
    handleItemSelected: function(index) {
        if (IsNull(index)) return;
        if (this.$0_3.$4_0.length > index) {
            this.set_selectedValue(this.$B_3(index).$3_0);
            this.$l_3()
        }
    },
    $B_3: function($p0) {
        var $v_0 = this.$0_3.$4_0[$p0];
        return $v_0
    },
    $k_3: function($p0) {
        return $p0 === window.LOCID_ENTITY_REFERENCE ||
            $p0 === window.LOCID_ENTITY ||
            $p0 === "Microsoft.Xrm.Sdk.EntityReference" ||
            $p0 === "Microsoft.Xrm.Sdk.Entity"
    },
    $l_3: function() {
        if (!this.isOptionSet()) return;
        var $v_0 = this.$0_3.getValue(this.get_selectedValue());
        if (IsNull($v_0)) {
            this.$13_3();
            return
        }
        this.$Y_3.set_dataValue($v_0.$2_0);
        this.$Y_3.set_disabled(this.$5_3);
        this.$M_3.set_dataValue($v_0.$L_0);
        this.$M_3.set_disabled(this.$5_3);
        this.$S_3.set_dataValue($v_0.$J_0 === window.LOCID_REQUIRED_ARGUMENT ? true : false);
        this.$S_3.set_disabled(this.$5_3);
        this.$N_3.set_dataValue($v_0.$F_0 === window.LOCID_INPUT_ARGUMENT ? true : false);
        this.$N_3.set_disabled(this.$5_3);
        this.$9_3.set_dataValue($v_0.$A_0);
        this.$9_3.set_disabled(this.$5_3);
        if (this.$k_3(this.$9_3.get_selectedText())) this.$6_3.set_disabled(false);
        else {
            this.$6_3.set_selectedIndex(0);
            this.$6_3.set_disabled(true)
        }
        this.$6_3.set_dataValue($v_0.$G_0)
    },
    $13_3: function() {
        if (IsNull(this.$j_3)) return;
        this.$j_3.set_dataValue(null);
        this.$j_3.set_disabled(true);
        this.$Y_3.set_dataValue(null);
        this.$Y_3.set_disabled(true);
        this.$M_3.set_dataValue(null);
        this.$M_3.set_disabled(true);
        this.$9_3.set_dataValue(null);
        this.$9_3.set_disabled(true);
        this.$6_3.set_dataValue(null);
        this.$6_3.set_disabled(true);
        this.$N_3.set_dataValue(null);
        this.$N_3.set_disabled(true);
        this.$S_3.set_dataValue(null);
        this.$S_3.set_disabled(true)
    },
    $1I_3: function() {
        if (this
            .checkFunction("setdefault") &&
            this.get_hasDefaultValue() &&
            !this.$5_3)
            for (var $v_0 = this.$1_3("selDefaultValue"), $v_1 = $v_0.options, $v_2 = $v_1.length, $v_3 = 0;
                $v_3 < $v_2;
                $v_3++) if (Number.parseInvariant($v_1[$v_3].toString()) === this.$0_3.$C_0) $v_0.selectedIndex = $v_3
    },
    $z_3: function() {
        if (this.checkFunction("setdefault") && this.get_hasDefaultValue()) {
            var $v_0 = new Select(false, false), $v_1 = this.get_element().id;
            $v_0.ID = $v_1 + "_selDefaultValue";
            $v_0.Selected = this.$0_3.$C_0.toString();
            $v_0.OnChange = String
                .format("$find({0}).set_defaultValue(Number(this.options[this.selectedIndex].value));",
                    CrmEncodeDecode.CrmJavaScriptEncode(this.get_$q_3()));
            for (var $v_2 = this.$0_3.$4_0.length, $v_3 = [], $v_4 = [], $v_5, $v_9 = 0; $v_9 < $v_2; $v_9++) {
                $v_5 = this.$B_3($v_9);
                Array.add(!$v_5.$8_0 ? $v_3 : $v_4, $v_5)
            }
            var $v_6 = $v_3.concat($v_4),
                $$t_E = this,
                $v_7 = function($p1_0, $p1_1, $p1_2) {
                    var $v_A = $p1_0;
                    $v_0.AddOption($v_A.$2_0, $v_A.$3_0.toString())
                };
            Array.forEach($v_6, $v_7);
            var $v_8 = this.$1_3("selDefaultValue");
            XUI.Html.SetOuterHTML($v_8, $v_0.Render());
            $v_8.disabled = this.$5_3
        }
    },
    createDefaultControl: function(id, defaultValue) {
        var $v_0 = new Select(false, false);
        $v_0.ID = id.toString();
        $v_0.Selected = this.$0_3.$C_0;
        var $v_1 = -1, $v_2 = this.$0_3.$4_0.length;
        if (!IsNull(defaultValue)) $v_1 = Number.parseInvariant(defaultValue);
        for (var $v_3, $v_4 = 0; $v_4 < $v_2; $v_4++) {
            $v_3 = this.$B_3($v_4);
            if (!$v_3.$8_0) {
                $v_0.AddOption($v_3.$2_0, $v_3.$3_0.toString());
                if ($v_1 === $v_3.$3_0) $v_0.Selected = $v_1.toString()
            }
        }
        for (var $v_5 = 0; $v_5 < $v_2; $v_5++) {
            $v_3 = this.$B_3($v_5);
            if ($v_3.$8_0) {
                $v_0.AddOption($v_3.$2_0, $v_3.$3_0.toString());
                if ($v_1 === $v_3.$3_0) $v_0.Selected = $v_1.toString()
            }
        }
        return $v_0.Render()
    },
    $12_3: function($p0) { this.$14_3($p0, "#c4ddff") },
    $1B_3: function($p0) { this.$14_3($p0, "#ffffff") },
    $14_3: function($p0, $p1) {
        if (!IsNull($p0)) {
            var $v_0 = this.$1_3("val" + $p0);
            if (IsNull($v_0)) return;
            $v_0.style.backgroundColor = $p1;
            $v_0.selected = $p1 !== "#ffffff"
        }
    },
    $1_3: function($p0) { return $get(String.format("{0}_{1}", this.get_element().id, $p0)) },
    $b_3: function($p0, $p1) {
        $p0.disabled = $p1;
        var $v_0 = XUI.Xml.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_0) && $v_0.tagName === "IMG")
            $v_0.className = $p1 ? "ms-crm-Picklist-MenuButton-Disabled" : "ms-crm-Picklist-MenuButton"
    },
    checkFunction: function(functionName) {
        switch (functionName.toLowerCase()) {
        case "move":
            return !IsNull(this.$1_3("btnMoveValueUp")) && !IsNull(this.$1_3("btnMoveValueDown"));
        case "edit":
            return !IsNull(this.$1_3("btnEditValue"));
        case "addremove":
            return !IsNull(this.$1_3("btnAddValue")) && !IsNull(this.$1_3("btnRemoveValue"));
        case "setdefault":
            return !IsNull(this.$1_3("selDefaultValue"));
        case "sort":
            return !IsNull(this.$1_3("btnSortAsc")) && !IsNull(this.$1_3("btnSortDesc"));
        default:
            return false
        }
    },
    get_hasDefaultValue: function() { return this.$0_3.$H_0 },
    moveValueUp: function() {
        var $v_0, $v_1 = arguments.length;
        if (!this.checkFunction("move")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!$v_1) $v_0 = this.$0_3.$7_0;
        else if ($v_1 === 1 && Number.isInstanceOfType(arguments[0])) $v_0 = arguments[0];
        else throw Error.create("Invalid argument");
        this.$0_3.moveValueUp($v_0) && this.$T_3()
    },
    moveValueDown: function() {
        var $v_0;
        if (!this.checkFunction("move")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) $v_0 = this.$0_3.$7_0;
        else if (arguments.length === 1 && Number.isInstanceOfType(arguments[0])) $v_0 = arguments[0];
        else throw Error.create("Invalid argument");
        this.$0_3.moveValueDown($v_0) && this.$T_3()
    },
    editValue: function() {
        var $v_0, $v_1, $v_2 = null;
        if (this.isOptionSet()) return;
        if (!this.checkFunction("edit")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) {
            $v_0 = this.$0_3.$7_0;
            $v_1 = null;
            if (IsNull($v_0)) return
        } else if (arguments.length === 1 && Number.isInstanceOfType(arguments[0])) {
            $v_0 = arguments[0];
            $v_1 = null
        } else if (arguments.length === 1 && String.isInstanceOfType(arguments[0])) {
            $v_0 = this.$0_3.$7_0;
            $v_1 = arguments[0]
        } else if (arguments.length === 2 &&
            Number.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1])) {
            $v_0 = arguments[0];
            $v_1 = arguments[1]
        } else throw Error.create("Invalid argument");
        $v_2 = this.$0_3.getValue($v_0);
        if (IsNull($v_2) || !$v_2.$8_0) throw Error.create("Invalid argument");
        if (IsNull($v_1)) {
            var $v_3 = new Mscrm.CustomOperationListItemValue;
            $v_3.$3_0 = $v_2.$3_0;
            $v_3.$2_0 = $v_2.$2_0;
            $v_3.bIsAttribute = _bIsAttribute;
            if (_bIsAttribute)
                if (this.$e_3.get_dataValue() === "picklist") {
                    $v_3.aValues = this.$0_3.$4_0;
                    $v_3.isCustomAttribute = "_bIsCustomAttribute";
                    $v_3.sAttributeType = this.$e_3.get_dataValue()
                }
            var $v_4 = new Xrm.DialogOptions;
            $v_4.height = 220;
            $v_4.width = 300;
            var $v_5 = [this, $v_0],
                $v_6 = Mscrm.Utilities
                    .createCallbackFunctionForXrmDialog(Mscrm.CustomOperationEdit.editValueCallback, $v_5);
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=edit").toString(),
                $v_4,
                $v_3,
                null,
                $v_6)
        } else this.$10_3($v_1, $v_0, $v_0)
    },
    $10_3: function($p0, $p1, $p2) {
        var $v_0 = this.$0_3.getValue($p2);
        $v_0.$2_0 = $p0;
        $v_0.$3_0 = $p1;
        this.$T_3()
    },
    addValue: function() {
        var $v_0, $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = "", $v_5 = "", $v_6 = "", $v_7 = null, $v_8 = -1;
        this.$h_3 = "add";
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        if (this.$5_3) return;
        if (!arguments.length) $v_0 = null;
        else if (arguments.length === 1 && String.isInstanceOfType(arguments[0])) $v_0 = arguments[0].toString();
        else if (arguments.length === 2 &&
            String.isInstanceOfType(arguments[0]) &&
            String.isInstanceOfType(arguments[1])) {
            $v_0 = arguments[0].toString();
            $v_1 = arguments[1].toString()
        } else if (arguments.length === 7) {
            $v_0 = arguments[0].toString();
            $v_4 = arguments[1].toString();
            $v_2 = arguments[2].toString();
            $v_3 = arguments[3].toString();
            $v_1 = arguments[4].toString();
            $v_5 = arguments[5].toString();
            $v_6 = arguments[6].toString()
        } else throw Error.create("Invalid argument");
        if (IsNull($v_0)) {
            var $v_9 = new Mscrm.CustomOperationListItemValue;
            $v_9.$3_0 = this.$0_3.$K_0;
            $v_9.$2_0 = "";
            if ($v_9.$3_0 === this.$u_3) {
                if (!confirm(window.LOCID_MAX_PICKLIST_VALUE)) return
            } else if ($v_9.$3_0 > this.$u_3) {
                alert(window.LOCID_ABOVE_MAX_PICKLIST_VALUE);
                return
            }
            $v_9.bIsAttribute = _bIsAttribute;
            if (_bIsAttribute)
                if (this.$e_3.get_dataValue() === "picklist") {
                    $v_9.aValues = this.$0_3.$4_0;
                    $v_9.isCustomAttribute = "_bIsCustomAttribute";
                    $v_9.sAttributeType = this.$e_3.get_dataValue()
                }
            var $v_A = new Xrm.DialogOptions;
            $v_A.height = 220;
            $v_A.width = 300;
            $v_7 = [this, $v_1, $v_4, $v_2, $v_3, $v_5, $v_6];
            var $v_B = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(Mscrm.CustomOperationEdit.addValueCallback, $v_7);
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=add").toString(),
                $v_A,
                $v_9,
                null,
                $v_B)
        } else this.$x_3($v_0, $v_8, $v_1, $v_4, $v_2, $v_3, $v_5, $v_6)
    },
    $x_3: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = -1;
        if (!IsNull(this.$0_3.$7_0) && this.$0_3.$7_0) $v_0 = this.$0_3.findValue(this.$0_3.$7_0) + 1;
        var $v_1 = "NewArgument";
        if (this.$0_3.findLabel($p0).length) {
            $p0 = $v_1;
            var $v_3 = 1;
            while (this.$0_3.findLabel($p0).length) $p0 = $v_1 + $v_3++
        }
        var $v_2 = this.$0_3.addValue($p0, $v_0, $p2, $p3, $p4, $p5, $p6, $p7);
        if ($p1 !== -1 && $v_2 !== -1) this.$B_3($v_2).$3_0 = $p1;
        this.$T_3();
        if (!IsNull($v_2))
            this.get_selectedValue() !== this.$B_3($v_2).$3_0 && this.set_selectedValue(this.$B_3($v_2).$3_0)
    },
    removeValue: function(showWarning, value) {
        var $v_0 = arguments.length;
        if (!this.checkFunction("addremove")) throw Error.create("Function not available");
        else if (this.$5_3) return;
        if ($v_0 > 2 ||
            $v_0 >= 1 && !Boolean.isInstanceOfType(arguments[0]) ||
            $v_0 >= 2 && !Number.isInstanceOfType(arguments[1])) throw Error.create("Invalid argument");
        if (IsNull(showWarning)) showWarning = false;
        if (IsNull(value)) value = this.$0_3.$7_0;
        var $v_1 = this.$0_3.findValue(value);
        if ($v_1 < 0) return;
        var $v_2 = this.$B_3($v_1);
        if (!this.$R_3($v_2.$2_0)) return;
        showWarning = showWarning && this.$I_3.$c_0.length > 0;
        if (!IsNull($v_2) && $v_2.$Q_0) showWarning = false;
        if (!showWarning || confirm(this.$I_3.$c_0)) {
            this.$0_3.removeValue(value);
            this.$T_3()
        }
    },
    sortValues: function(ascend) {
        if (!this.checkFunction("sort")) throw Error.create("Function not available");
        if (this.$5_3) return;
        this.$0_3.sortValues(ascend);
        this.$T_3();
        if (ascend) $get("ArgumentsHeaderNameSortIcon").setAttribute("src", window.CDNURL + "/_imgs/up.gif");
        else $get("ArgumentsHeaderNameSortIcon").setAttribute("src", window.CDNURL + "/_imgs/down.gif")
    },
    $1D_3: function($p0) {
        var $v_0 = this.$1_3("divValueList"), $v_1 = $p0.target;
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
                if (IsNull(this.get_selectedValue())) {
                    $v_5 = this.$w_3($v_3[0]);
                    this.set_selectedValue(this.$B_3($v_5).$3_0)
                } else {
                    $v_5 = this.$0_3.findValue(this.get_selectedValue());
                    var $v_6 = this.$1_3("val" + $v_5);
                    if (IsNull($v_6)) break;
                    $v_5 = $v_6.rowIndex;
                    if ($v_5 >= $v_4 - 1 && !$v_2 || $v_2 && !$v_5) {
                        var $v_7 = $v_2 ? $v_4 - 1 : 0;
                        $v_6 = $v_3[$v_7];
                        $v_5 = this.$w_3($v_6);
                        this.set_selectedValue(this.$B_3($v_5).$3_0);
                        $v_5 >= 0 && $v_6.scrollIntoView(true)
                    } else {
                        $v_5 = $v_2 ? $v_5 - 1 : $v_5 + 1;
                        $v_6 = $v_3[$v_5];
                        $v_5 = this.$w_3($v_6);
                        if ($v_5 >= 0) {
                            this.set_selectedValue(this.$B_3($v_5).$3_0);
                            ScrollVerticalList($v_0, $v_6, $v_6.rowIndex, $v_4, false)
                        }
                    }
                }
            }
            this.$l_3();
            break;
        default:
            break
        }
    },
    $w_3: function($p0) {
        var $v_0 = parseInt($p0.id.substr((this.get_element().id + "_val").length));
        if (IsNull($v_0) && $v_0.toString() !== "NaN") return -1;
        return $v_0
    },
    $16_3: function() {
        var $v_0 = this.$Y_3.get_dataValue();
        if (!$v_0 || !$v_0.length) $v_0 = "NewArgument";
        var $v_1 = this.$S_3.get_dataValue() ? window.LOCID_REQUIRED_ARGUMENT : window.LOCID_OPTIONAL_ARGUMENT,
            $v_2 = this.$N_3.get_dataValue() ? window.LOCID_INPUT_ARGUMENT : window.LOCID_OUTPUT_ARGUMENT,
            $v_3 = this.$M_3.get_dataValue();
        if (!$v_3) $v_3 = window.LOCID_ARGUMENT_DESCRIPTION_TEXT;
        var $v_4 = this.$9_3.get_dataValue();
        if (!$v_4 || !$v_4.length) $v_4 = "String";
        var $v_5 = this.$9_3.get_selectedText();
        if (this.$k_3($v_5)) this.$6_3.set_disabled(false);
        else {
            this.$6_3.set_selectedIndex(0);
            this.$6_3.set_disabled(true)
        }
        var $v_6 = this.$6_3.get_dataValue() || "";
        if (this.$p_3($v_0, $v_2, $v_4)) {
            this.addValue($v_0, $v_1, $v_4, $v_2, $v_3, $v_5, $v_6);
            this.$l_3()
        }
    },
    runCommand: function(command) {
        if (this.$5_3 || !this.$18_3(command)) return;
        switch (command) {
        case "add":
            this.$16_3();
            break;
        case "edit":
            break;
        case "remove":
            if (!IsNull(this.get_selectedValue())) {
                var $v_0 = this.$0_3.findValue(this.get_selectedValue());
                this.removeValue(true, this.get_selectedValue());
                if (IsNull(this.get_selectedValue()) || !this.get_selectedValue()) {
                    var $v_1 = this.$1_3("val" + $v_0);
                    if (!IsNull($v_1)) this.set_selectedValue(this.$B_3($v_0).$3_0);
                    else {
                        $v_0 = $v_0 - 1;
                        $v_1 = this.$1_3("val" + $v_0);
                        !IsNull($v_1) && this.set_selectedValue(this.$B_3($v_0).$3_0)
                    }
                    this.$l_3()
                }
            }
            this.$0_3.setNextValue(this.$0_3.$D_0 * 1e4);
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
    $18_3: function($p0) {
        var $v_0 = null;
        switch ($p0) {
        case "add":
            $v_0 = this.$1_3("btnAddValue");
            break;
        case "edit":
            $v_0 = this.$1_3("btnEditValue");
            break;
        case "remove":
            $v_0 = this.$1_3("btnRemoveValue");
            break;
        case "moveup":
            $v_0 = this.$1_3("btnMoveValueUp");
            break;
        case "movedown":
            $v_0 = this.$1_3("btnMoveValueDown");
            break;
        case "sortasc":
            $v_0 = this.$1_3("btnSortAsc");
            break;
        case "sortdes":
            $v_0 = this.$1_3("btnSortDesc");
            break
        }
        if (!IsNull($v_0) || !$v_0.disabled) return true;
        return false
    },
    $1C_3: function($p0) {
        if (this.$k_3(this.$9_3.get_selectedText())) this.$6_3.set_disabled(false);
        else {
            this.$6_3.set_selectedIndex(0);
            this.$6_3.set_disabled(true)
        }
        if (IsNull(this.get_selectedValue())) {
            this.$13_3();
            return
        }
        var $v_0 = this.get_element().id, $v_1;
        if (!this.checkFunction("edit")) throw Error.create("Function not available");
        else if (this.$5_3) return;
        $v_1 = this.$0_3.$7_0;
        var $v_2 = this.$0_3.getValue($v_1);
        if (!$v_2) return;
        var $v_3 = null, $v_4 = $p0.target.id.startsWith("rad_customOperationArguments_direction");
        if ($v_4) $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("customOperationArguments_direction");
        else $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target);
        var $v_5 = $p0.target;
        if (!IsNull($v_3)) {
            var $v_6 = $v_5.id.substr(($v_0 + "_").length);
            if ($v_4) $v_6 = "direction";
            var $v_7 = this.$N_3.get_dataValue() ? window.LOCID_INPUT_ARGUMENT : window.LOCID_OUTPUT_ARGUMENT,
                $v_8 = this.$9_3.get_selectedText();
            switch ($v_6) {
            case "txtItemVal":
                this.$1K_3($v_3, $v_5, $v_2, $v_1);
                break;
            case "txtItemName":
                if (!this.$1J_3($v_3, $v_5, $v_2)) return;
                break;
            case "txtItemDesc":
                $v_2.$L_0 = this.$M_3.get_dataValue() ? this.$M_3.get_dataValue().toString() : "";
                break;
            case "txtItemType":
                if (!this.$R_3($v_2.$2_0) || !this.$p_3($v_2.$2_0, $v_7, $v_8)) {
                    if (this.$k_3($v_2.$A_0)) {
                        this.$6_3.set_dataValue($v_2.$G_0);
                        this.$6_3.set_disabled(false)
                    } else {
                        this.$6_3.set_selectedIndex(0);
                        this.$6_3.set_disabled(true)
                    }
                    $v_3.set_dataValue($v_2.$A_0);
                    $v_3.setFocus();
                    return
                }
                if (this.$k_3(this.$9_3.get_selectedText())) this.$6_3.set_disabled(false);
                else {
                    this.$6_3.set_selectedIndex(0);
                    this.$6_3.set_disabled(true);
                    $v_2.$G_0 = ""
                }
                $v_2.$A_0 = this.$9_3.get_dataValue();
                $v_2.$i_0 = this.$9_3.get_selectedText();
                break;
            case "txtItemEntity":
                if (!this.$R_3($v_2.$2_0)) {
                    $v_3.set_dataValue($v_2.$G_0);
                    $v_3.setFocus();
                    return
                }
                $v_2.$G_0 = this.$6_3.get_dataValue();
                break;
            case "chkRequired":
                $v_2.$J_0 = this.$S_3.get_dataValue() ? window.LOCID_REQUIRED_ARGUMENT : window.LOCID_OPTIONAL_ARGUMENT;
                break;
            case "direction":
                if (!this.$R_3($v_2.$2_0) || !this.$p_3($v_2.$2_0, $v_7, $v_8)) {
                    $v_3.set_dataValue($v_2.$F_0 === window.LOCID_INPUT_ARGUMENT ? true : false);
                    $v_3.setFocus();
                    return
                }
                $v_2.$F_0 = this.$N_3.get_dataValue() ? window.LOCID_INPUT_ARGUMENT : window.LOCID_OUTPUT_ARGUMENT;
                break
            }
            var $v_9 = this.$0_3.findValue($v_1);
            if ($v_9 >= 0) {
                var $v_A = $get(this.get_id() + "_val" + $v_9);
                if (!IsNull($v_A)) {
                    $v_A.nodeValue = $v_2.$3_0.toString();
                    var $v_B = XUI.Xml.DomUtils.GetFirstChild($v_A);
                    $v_B.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2.$2_0);
                    $v_B.title = $v_2.$2_0;
                    var $v_C = XUI.Xml.DomUtils.GetNextSibling($v_B),
                        $v_D = XUI.Xml.DomUtils.GetNextSibling($v_C),
                        $v_E = XUI.Xml.DomUtils.GetNextSibling($v_D);
                    $v_C.innerHTML = CrmEncodeDecode.CrmHtmlEncode(this.$t_3($v_2.$A_0));
                    $v_C.title = this.$t_3($v_2.$A_0);
                    $v_D.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2.$J_0);
                    $v_E.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2.$F_0);
                    this.$15_3()
                }
            }
            if (this.checkFunction("setdefault") && this.get_hasDefaultValue()) {
                this.$z_3();
                this.set_defaultValue(this.$0_3.$C_0)
            }
            this.fireControlEvent("change", Sys.EventArgs.Empty)
        }
    },
    $1K_3: function($p0, $p1, $p2, $p3) {
        if (IsNull($p0.get_dataValue())) {
            $p0.set_dataValue($p2.$3_0);
            $p0.setFocus();
            $p1.select();
            return
        }
        var $v_0 = Number.parseInvariant($p0.get_dataValue().toString());
        if ($v_0 !== $p3) {
            var $v_1 = true, $v_2 = this.$0_3.getValue($v_0);
            if (!IsNull($v_2)) {
                alert(String.format(window.LOCID_VALUE_NOT_UNIQUE,
                    Mscrm.NumberUtility.addFormatting($v_2.$3_0, 0),
                    $v_2.$2_0));
                $v_1 = false
            }
            if ($v_1 && this.$I_3.$d_0.length > 0 && !$p2.$Q_0) if (!confirm(this.$I_3.$d_0)) $v_1 = false;
            if ($v_1 && this.$0_3.$D_0 >= 1e4 && this.$I_3.$f_0.length > 0 && $p2.$Q_0
            )
                if ($v_0 < this.$0_3.$D_0 * 1e4 || $v_0 > this.$0_3.$D_0 * 1e4 + 9999
                )
                    if (!confirm(String.format(this.$I_3.$f_0,
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$D_0, 0),
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$D_0 * 1e4, 0),
                        Mscrm.NumberUtility.addFormatting(this.$0_3.$D_0 * 1e4 + 9999, 0)))) $v_1 = false;
            if (!$v_1) {
                $p0.set_dataValue($p2.$3_0);
                return
            }
            $p2.$3_0 = $v_0;
            this.$0_3.$H_0 && this.$0_3.$C_0 === $p3 && this.set_defaultValue($v_0);
            this.set_selectedValue($v_0);
            this.$0_3.setNextValue(this.$0_3.$D_0 * 1e4 + 1)
        }
    },
    $1J_3: function($p0, $p1, $p2) {
        var $v_0 = !IsNull($p0.get_dataValue()) ? $p0.get_dataValue().toString() : null;
        if (!IsNull($v_0)) {
            if (!this.$R_3($p2.$2_0) || !this.$p_3($v_0, $p2.$F_0, $p2.$A_0)) {
                $p0.set_dataValue($p2.$2_0);
                $p0.setFocus();
                $p1.select();
                return false
            }
            if ($v_0 !== $p2.$2_0) {
                var $v_1 = this.$0_3.findLabel($v_0);
                if ($v_1.length > 0) {
                    alert(String.format(window.LOCID_PARAM_NAME_NOT_UNIQUE, $v_1));
                    $p0.set_dataValue($p2.$2_0);
                    return false
                } else $p2.$2_0 = $v_0
            }
        } else {
            $p0.set_dataValue($p2.$2_0);
            $p0.setFocus();
            $p1.select()
        }
        return true
    },
    $p_3: function($p0, $p1, $p2) {
        if ($p1 === window.LOCID_INPUT_ARGUMENT && this.$1E_3($p2)) {
            if (!(new RegExp("^_*[A-Za-z]+[A-Za-z0-9]*$")).test($p0)) {
                alert(LOCID_ENTITYINPUTARGNAME_ERRMSG.toString());
                return false
            }
        } else if (!(new RegExp("^_*[A-Za-z]+[A-Za-z0-9_]*$")).test($p0)) {
            alert(LOCID_ARGUMENTNAME_ERRORMESSAGE.toString());
            return false
        }
        return true
    },
    $1E_3: function($p0) {
        if ($p0 === "Microsoft.Xrm.Sdk.EntityReference" ||
            $p0 === "Microsoft.Xrm.Sdk.Entity" ||
            $p0 === "EntityReference" ||
            $p0 === "Entity") return true;
        return false
    },
    $1H_3: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!$v_1.disabled) $v_0.className = $p1 ? "ms-crm-optionset-Label-Hovered" : "ms-crm-optionset-Label-Opened"
    },
    $1G_3: function($p0) { XUI.Xml.DomUtils.GetFirstChild($p0).className = "ms-crm-optionset-Label" },
    $19_3: function($p0) {
        var $v_0 = this.$11_3($p0.target);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_0);
            if (XUI.Xml.DomUtils.GetFirstChild($v_1).disabled) return;
            this.$1H_3($v_0, true)
        }
    },
    $1A_3: function($p0) {
        var $v_0 = this.$11_3($p0.target);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_0);
            if (XUI.Xml.DomUtils.GetFirstChild($v_1).disabled) return;
            this.$1G_3($v_0)
        }
    },
    $11_3: function($p0) {
        while (!IsNull($p0) && $p0.tagName.toUpperCase() !== "TD") $p0 = $p0.parentNode;
        return $p0
    },
    $y_3: function($p0) {
        this.$g_3("add", $p0);
        this.$g_3("remove", $p0);
        this.$g_3("moveup", $p0);
        this.$g_3("movedown", $p0);
        this.$g_3("sortasc", $p0);
        this.$g_3("sortdes", $p0)
    },
    $g_3: function($p0, $p1) {
        var $v_0 = null;
        switch ($p0) {
        case "add":
            $v_0 = this.$1_3("btnAddValue");
            break;
        case "remove":
            $v_0 = this.$1_3("btnRemoveValue");
            break;
        case "moveup":
            $v_0 = this.$1_3("btnMoveValueUp");
            break;
        case "movedown":
            $v_0 = this.$1_3("btnMoveValueDown");
            break;
        case "sortasc":
            $v_0 = this.$1_3("btnSortAsc");
            break;
        case "sortdes":
            $v_0 = this.$1_3("btnSortDesc");
            break
        }
        if (!IsNull($v_0) && !$v_0.disabled && !this.$5_3)
            if ($p1) {
                $addHandler($v_0, "focus", this.$$d_$19_3);
                $addHandler($v_0, "blur", this.$$d_$1A_3);
                $addHandler($v_0, "mouseover", this.$$d_$19_3);
                $addHandler($v_0, "mouseout", this.$$d_$1A_3)
            } else {
                $removeHandler($v_0, "focus", this.$$d_$19_3);
                $removeHandler($v_0, "blur", this.$$d_$1A_3);
                $removeHandler($v_0, "mouseover", this.$$d_$19_3);
                $removeHandler($v_0, "mouseout", this.$$d_$1A_3)
            }
    },
    $15_3: function() { BindSavePublicationParams() },
    add_change: function(value) { this.get_events().addHandler("change", value) },
    remove_change: function(value) { this.get_events().removeHandler("change", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$u_3 = Number.parseInvariant(this.get_element().attributes.getNamedItem("maxvalue").value);
        this.$I_3 = new Mscrm.Messages;
        this.$1F_3(this.$o_3);
        this.$Z_3 = this.$1_3("txtItemName");
        this.$a_3 = this.$1_3("txtItemVal");
        this.$V_3 = this.$1_3("txtItemDesc");
        this.$O_3 = this.$1_3("direction");
        this.$P_3 = this.$1_3("chkRequired");
        this.$U_3 = this.$1_3("txtItemType");
        this.$W_3 = this.$1_3("txtItemEntity");
        this.$Y_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$Z_3);
        this.$j_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$a_3);
        this.$M_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$V_3);
        this.$e_3 = Mscrm.FormControlInputBehavior.GetBehavior("selType");
        this.$S_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$P_3);
        this.$N_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$O_3);
        this.$9_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$U_3);
        this.$6_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$W_3);
        this.$6_3.set_disabled(true);
        this.$0_3 = new Mscrm.ValuesList;
        this.$0_3.$H_0 = this.checkFunction("setdefault");
        this.$0_3.deserialize(this.$n_3);
        this.$T_3();
        $addHandler(this.get_element(), "keydown", this.$$d_$1D_3);
        this.$y_3(true);
        if (!this.isOptionSet()) return;
        !IsNull(this.$Z_3) && $addHandler(this.$Z_3, "change", this.$$d_$1C_3);
        !IsNull(this.$a_3) && $addHandler(this.$a_3, "change", this.$$d_$1C_3);
        !IsNull(this.$V_3) && $addHandler(this.$V_3, "change", this.$$d_$1C_3);
        if (!IsNull(this.$P_3)) {
            $addHandler(this.$P_3, "change", this.$$d_$1C_3);
            (Mscrm.Utilities.isFirefox() || Mscrm.Utilities.isIE8()) && $addHandler(this.$P_3, "click", this.$$d_$1C_3)
        }
        if (!IsNull(this.$O_3)) {
            $addHandler(this.$O_3, "change", this.$$d_$1C_3);
            (Mscrm.Utilities.isFirefox() || Mscrm.Utilities.isIE8OrLower()) &&
                $addHandler(this.$O_3, "click", this.$$d_$1C_3)
        }
        !IsNull(this.$U_3) && $addHandler(this.$U_3, "change", this.$$d_$1C_3);
        !IsNull(this.$W_3) && $addHandler(this.$W_3, "change", this.$$d_$1C_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$y_3(false);
        !IsNull(this.$Z_3) && $removeHandler(this.$Z_3, "change", this.$$d_$1C_3);
        !IsNull(this.$a_3) && $removeHandler(this.$a_3, "change", this.$$d_$1C_3);
        if (!IsNull(this.$P_3)) {
            $removeHandler(this.$P_3, "change", this.$$d_$1C_3);
            Mscrm.Utilities.isFirefox() && $removeHandler(this.$P_3, "click", this.$$d_$1C_3)
        }
        !IsNull(this.$V_3) && $removeHandler(this.$V_3, "change", this.$$d_$1C_3);
        if (!IsNull(this.$O_3)) {
            $removeHandler(this.$O_3, "change", this.$$d_$1C_3);
            Mscrm.Utilities.isFirefox() && $removeHandler(this.$O_3, "click", this.$$d_$1C_3)
        }
        !IsNull(this.$U_3) && $removeHandler(this.$U_3, "change", this.$$d_$1C_3);
        !IsNull(this.$W_3) && $removeHandler(this.$W_3, "change", this.$$d_$1C_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$1D_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.CustomOperationListItemValue = function() {};
Mscrm.CustomOperationListItemValue.prototype = {
    $3_0: 0,
    $2_0: null,
    $8_0: false,
    $L_0: null,
    $Q_0: false,
    $J_0: null,
    $F_0: null,
    $A_0: null,
    $G_0: null,
    $i_0: null,
    get_value: function() { return this.$3_0 },
    set_value: function(value) {
        this.$3_0 = value;
        return value
    },
    get_label: function() { return this.$2_0 },
    set_label: function(value) {
        this.$2_0 = value;
        return value
    },
    get_type: function() { return this.$A_0 },
    set_type: function(value) {
        this.$A_0 = value;
        return value
    },
    get_typeName: function() { return this.$i_0 },
    set_typeName: function(value) {
        this.$i_0 = value;
        return value
    },
    get_entityName: function() { return this.$G_0 },
    set_entityName: function(value) {
        this.$G_0 = value;
        return value
    },
    get_direction: function() { return this.$F_0 },
    set_direction: function(value) {
        this.$F_0 = value;
        return value
    },
    get_editable: function() { return this.$8_0 },
    set_editable: function(value) {
        this.$8_0 = value;
        return value
    },
    get_required: function() { return this.$J_0 },
    set_required: function(value) {
        this.$J_0 = value;
        return value
    },
    get_description: function() { return this.$L_0 },
    set_description: function(value) {
        this.$L_0 = value;
        return value
    },
    get_hasNewValue: function() { return this.$Q_0 },
    set_hasNewValue: function(value) {
        this.$Q_0 = value;
        return value
    }
};
Mscrm.Messages = function() {};
Mscrm.Messages.prototype = {
    $c_0: null,
    $d_0: null,
    $f_0: null,
    get_deleteValue: function() { return this.$c_0 },
    set_deleteValue: function(value) {
        this.$c_0 = value;
        return value
    },
    get_saveChangedValue: function() { return this.$d_0 },
    set_saveChangedValue: function(value) {
        this.$d_0 = value;
        return value
    },
    get_valueChangedWithoutPrefix: function() { return this.$f_0 },
    set_valueChangedWithoutPrefix: function(value) {
        this.$f_0 = value;
        return value
    }
};
Mscrm.ValuesList = function() {
    this.$4_0 = [];
    this.$7_0 = -1
};
Mscrm.ValuesList.prototype = {
    $H_0: false,
    $C_0: 0,
    $K_0: 0,
    $D_0: 0,
    $v_0: false,
    $X_0: false,
    $m_0: "",
    get_bitmask: function() { return this.$v_0 },
    set_bitmask: function(value) {
        this.$v_0 = value;
        return value
    },
    get_defaultValue: function() { return this.$C_0 },
    set_defaultValue: function(value) {
        this.$C_0 = value;
        return value
    },
    get_nextValue: function() { return this.$K_0 },
    set_nextValue: function(value) {
        this.$K_0 = value;
        return value
    },
    get_prefixValue: function() { return this.$D_0 },
    set_prefixValue: function(value) {
        this.$D_0 = value;
        return value
    },
    get_valuesCollection: function() { return this.$4_0 },
    set_valuesCollection: function(value) {
        this.$4_0 = value;
        return value
    },
    get_selectedValue: function() { return this.$7_0 },
    set_selectedValue: function(value) {
        this.$7_0 = value;
        return value
    },
    get_hasDefaultValue: function() { return this.$H_0 },
    set_hasDefaultValue: function(value) {
        this.$H_0 = value;
        return value
    },
    setSelectedValue: function(value) {
        var $v_0 = this.getValue(value);
        if (IsNull($v_0) || !$v_0.$8_0) throw Error.create("Invalid argument");
        this.$7_0 = value
    },
    getValue: function(value) {
        var $v_0 = this.findValue(value);
        return $v_0 >= 0 ? this.$E_0($v_0) : null
    },
    findValue: function(value) {
        for (var $v_1 = this.$4_0
                     .length,
            $v_0 = 0;
            $v_0 < $v_1;
            $v_0++) if (this.$E_0($v_0).$3_0 === value) return $v_0;
        return -1
    },
    setDefaultValue: function(value) {
        if (!this.$H_0) throw Error.create("The control does not have default value");
        if (this.$4_0.length > 0 && this.findValue(value) < 0) {
            this.$C_0 = 0;
            return
        }
        this.$C_0 = value
    },
    setNextValue: function(value) {
        for (var $v_0 = value, $v_1 = false, $v_2 = this.$4_0.length, $v_3 = [], $v_4 = 0; $v_4 < $v_2; ++$v_4) {
            var $v_5 = this.$E_0($v_4).$3_0;
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
        this.$K_0 = value
    },
    findLabel: function(label) {
        for (var $v_1 = this.$4_0.length, $v_0 = 0; $v_0 < $v_1; $v_0++) {
            var $v_2 = this.$E_0($v_0);
            if ($v_2.$2_0 === label) return $v_2.$2_0
        }
        return ""
    },
    addValue: function(label, position, description, required, type, direction, typeName, entityName) {
        var $v_0 = this.$4_0.length;
        if (position !== -1) $v_0 = position;
        var $v_1 = new Mscrm.CustomOperationListItemValue;
        $v_1.$3_0 = this.$K_0;
        $v_1.$2_0 = label;
        $v_1.$8_0 = true;
        $v_1.$Q_0 = true;
        $v_1.$L_0 = description;
        $v_1.$J_0 = required;
        $v_1.$A_0 = type;
        $v_1.$F_0 = direction;
        $v_1.$i_0 = typeName;
        $v_1.$G_0 = entityName;
        for (var $v_2 = this.$4_0.length, $v_3 = $v_2; $v_3 > $v_0; $v_3--) this.$4_0[$v_3] = this.$4_0[$v_3 - 1];
        this.$4_0[$v_0] = $v_1;
        this.$H_0 && $v_2 === 1 && this.setDefaultValue(this.$K_0);
        this.setNextValue(this.$K_0 + 1);
        return $v_0
    },
    moveValueUp: function(value) {
        var $v_0 = false, $v_1 = this.findValue(value), $v_2, $v_3 = this.$E_0($v_1);
        if ($v_1 < 0 || !$v_3.$8_0) return false;
        for ($v_2 = $v_1 - 1; $v_2 >= 0 && !this.$E_0($v_2).$8_0; $v_2--);
        if ($v_2 >= 0) {
            var $v_4 = this.$E_0($v_2);
            this.$4_0[$v_2] = $v_3;
            this.$4_0[$v_1] = $v_4;
            $v_0 = true
        }
        return $v_0
    },
    moveValueDown: function(value) {
        var $v_0 = false, $v_1 = this.findValue(value), $v_2, $v_3 = this.$E_0($v_1);
        if ($v_1 < 0 || !$v_3.$8_0) return false;
        var $v_4 = this.$4_0.length;
        for ($v_2 = $v_1 + 1; $v_2 < $v_4 && !this.$E_0($v_2).$8_0; $v_2++);
        if ($v_2 < $v_4) {
            var $v_5 = this.$E_0($v_2);
            this.$4_0[$v_2] = $v_3;
            this.$4_0[$v_1] = $v_5;
            $v_0 = true
        }
        return $v_0
    },
    $E_0: function($p0) {
        var $v_0 = this.$4_0[$p0];
        return $v_0
    },
    removeValue: function(value) {
        var $v_0 = this.findValue(value), $v_1 = this.$E_0($v_0);
        if ($v_0 < 0 || !$v_1.$8_0) throw Error.create("Invalid argument");
        this.$4_0.splice($v_0, 1);
        var $v_2 = this.$4_0.length;
        if (this.$7_0 === value) this.$7_0 = 0;
        if (this.$H_0 && this.$C_0 === value) this.$C_0 = $v_2 > 0 ? this.$E_0(0).$3_0 : -1
    },
    sortValues: function(ascend) {
        if (ascend) {
            var $$t_5 = this;
            this.$4_0.sort(function($p1_0, $p1_1) { return $p1_0.$2_0.localeCompare($p1_1.$2_0) })
        } else {
            var $$t_6 = this;
            this.$4_0.sort(function($p1_0, $p1_1) { return $p1_1.$2_0.localeCompare($p1_0.$2_0) })
        }
    },
    getAllArgumentNames: function() {
        for (var $v_0 = this.$4_0.length, $v_1 = new Array($v_0), $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = this.$E_0($v_2);
            $v_1[$v_2] = $v_3.$2_0
        }
        return $v_1
    },
    serialize: function() {
        this.$X_0 = false;
        var $v_0 = XUI.Xml.CreateDocument(), $v_1 = $v_0.createElement("values");
        if (this.$H_0 && !IsNull(this.$C_0)) {
            var $v_5 = $v_0.createAttribute("default");
            $v_5.nodeValue = this.$C_0.toString();
            $v_1.attributes.setNamedItem($v_5)
        }
        var $v_2 = $v_0.createAttribute("next");
        $v_2.nodeValue = this.$K_0.toString();
        $v_1.attributes.setNamedItem($v_2);
        var $v_3 = $v_0.createAttribute("prefix");
        $v_3.nodeValue = this.$D_0.toString();
        $v_1.attributes.setNamedItem($v_3);
        for (var $v_4 = this.$4_0.length, $v_6 = 0; $v_6 < $v_4; $v_6++) {
            var $v_7 = this.$E_0($v_6), $v_8 = $v_0.createElement("value"), $v_9 = $v_0.createAttribute("value");
            $v_9.nodeValue = $v_7.$3_0.toString();
            var $v_A = $v_0.createAttribute("name");
            $v_A.nodeValue = $v_7.$2_0;
            var $v_B = $v_0.createAttribute("editable");
            $v_B.nodeValue = $v_7.$8_0 ? "1" : "0";
            var $v_C = $v_0.createAttribute("description");
            $v_C.nodeValue = IsNull($v_7.$L_0) ? "" : $v_7.$L_0;
            var $v_D = $v_0.createAttribute("required");
            if (IsNull($v_7.$J_0)) $v_D.nodeValue = "";
            else $v_D.nodeValue = $v_7.$J_0 === window.LOCID_REQUIRED_ARGUMENT ? "Required" : "Optional";
            var $v_E = $v_0.createAttribute("type");
            $v_E.nodeValue = IsNull($v_7.$A_0) ? "" : $v_7.$A_0;
            var $v_F = $v_0.createAttribute("entity");
            $v_F.nodeValue = IsNull($v_7.$G_0) ? "" : $v_7.$G_0;
            if ($v_E.nodeValue === "Microsoft.Xrm.Sdk.EntityReference" && !$v_F.nodeValue.length) {
                this.$X_0 = true;
                this.$m_0 = "Please enter Entity Name"
            }
            var $v_G = $v_0.createAttribute("direction");
            if (IsNull($v_7.$F_0)) $v_G.nodeValue = "";
            else $v_G.nodeValue = $v_7.$F_0 === window.LOCID_INPUT_ARGUMENT ? "Input" : "Output";
            $v_8.attributes.setNamedItem($v_9);
            $v_8.attributes.setNamedItem($v_A);
            $v_8.attributes.setNamedItem($v_B);
            $v_8.attributes.setNamedItem($v_C);
            $v_8.attributes.setNamedItem($v_D);
            $v_8.attributes.setNamedItem($v_E);
            $v_8.attributes.setNamedItem($v_G);
            $v_8.attributes.setNamedItem($v_F);
            $v_1.appendChild($v_8)
        }
        $v_0.appendChild($v_1);
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    deserialize: function(xml) {
        var $v_0, $v_1;
        this.$4_0 = [];
        var $v_2 = XUI.Xml.LoadXml(xml), $v_3 = XUI.Xml.SelectNodes($v_2, "values/value", null);
        for ($v_0 = 0; $v_0 < $v_3.length; $v_0++) {
            $v_1 = $v_3[$v_0];
            var $v_5 = new Mscrm.CustomOperationListItemValue;
            $v_5.$3_0 = Number.parseInvariant($v_1.attributes.getNamedItem("value").nodeValue);
            $v_5.$2_0 = $v_1.attributes.getNamedItem("name").nodeValue;
            $v_5.$J_0 = $v_1.attributes.getNamedItem("required").nodeValue === "Required"
                ? window.LOCID_REQUIRED_ARGUMENT
                : window.LOCID_OPTIONAL_ARGUMENT;
            $v_5.$A_0 = $v_1.attributes.getNamedItem("type").nodeValue;
            $v_5.$F_0 = $v_1.attributes.getNamedItem("direction").nodeValue === "Input"
                ? window.LOCID_INPUT_ARGUMENT
                : window.LOCID_OUTPUT_ARGUMENT;
            $v_5.$8_0 = $v_1.attributes.getNamedItem("editable").nodeValue === "1";
            $v_5.$G_0 = $v_1.attributes.getNamedItem("entity").nodeValue;
            $v_5.$Q_0 = false;
            this.$4_0[this.$4_0.length] = $v_5;
            var $v_6 = $v_1.attributes.getNamedItem("description");
            if (!IsNull($v_6)) $v_5.$L_0 = $v_6.nodeValue
        }
        if (this.$H_0) {
            var $v_7 = $v_2.documentElement.attributes.getNamedItem("default");
            !IsNull($v_7) && this.setDefaultValue(Number.parseInvariant($v_7.nodeValue))
        }
        this.setNextValue(Number.parseInvariant($v_2.documentElement.attributes.getNamedItem("next").nodeValue));
        var $v_4 = $v_2.documentElement.attributes.getNamedItem("prefix");
        !IsNull($v_4) && this.setPrefixValue(Number.parseInvariant($v_4.nodeValue))
    },
    setPrefixValue: function(value) { this.$D_0 = value },
    get_errorMessage: function() { return this.$m_0 },
    get_error: function() { return this.$X_0 },
    set_error: function(value) {
        this.$X_0 = value;
        return value
    }
};
Mscrm.CustomOperationEdit.registerClass("Mscrm.CustomOperationEdit", Mscrm.CrmUIControl);
Mscrm.CustomOperationListItemValue.registerClass("Mscrm.CustomOperationListItemValue");
Mscrm.Messages.registerClass("Mscrm.Messages");
Mscrm.ValuesList.registerClass("Mscrm.ValuesList");
Mscrm.CustomOperationEdit.highlighT_COLOR = "#c4ddff";
Mscrm.CustomOperationEdit.diM_COLOR = "#ffffff";
Mscrm.CustomOperationEdit.optionValueSuffix = 1e4