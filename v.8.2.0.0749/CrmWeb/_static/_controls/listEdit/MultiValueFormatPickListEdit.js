Type.registerNamespace("Mscrm");
Mscrm.MultiValueFormatPickListEdit = function(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$m_3 = Function.createDelegate(this, this.$m_3);
    this.$$d_$r_3 = Function.createDelegate(this, this.$r_3);
    this.$$d_$q_3 = Function.createDelegate(this, this.$q_3);
    this.$0_3 = new Mscrm.ValueList;
    this.$3_3 = -1;
    this.$T_3 = -1;
    this.$Q_3 = -1;
    this.$O_3 = -1;
    Mscrm.MultiValueFormatPickListEdit.initializeBase(this, [element])
};
Mscrm.MultiValueFormatPickListEdit.updateUICallback = function(result, instance, item) {
    var $v_0 = !IsNull(result) ? result.sLabel : "";
    if (isNullOrEmptyString($v_0)) return;
    item.$5_0 = $v_0;
    instance.$B_3(true)
};
Mscrm.MultiValueFormatPickListEdit.setInstanceLabel = function(result, instance) {
    var $v_0 = !IsNull(result) ? result.sLabel : "";
    if (isNullOrEmptyString($v_0)) return;
    Mscrm.MultiValueFormatPickListEdit.$j($v_0, instance)
};
Mscrm.MultiValueFormatPickListEdit.$j = function($p0, $p1) {
    var $v_0 = null, $v_1 = $p1.get_$c_3() ? $p1.get_nextValue() : $p1.get_nextValue().toString();
    if (IsNull($p1.get_$9_3())) $v_0 = $p1.$0_3.add($v_1, $p0);
    else $v_0 = $p1.$0_3.insert($v_1, $p0, $p1.$3_3 + 1);
    $p1.$B_3(false);
    $p1.set_$8_3($p1.$0_3.indexOfItem($v_0))
};
Mscrm.MultiValueFormatPickListEdit.prototype = {
    $P_3: null,
    $Y_3: 0,
    $F_3: null,
    $E_3: null,
    $H_3: null,
    $I_3: null,
    $D_3: null,
    $W_3: null,
    $X_3: null,
    $S_3: null,
    $G_3: null,
    $2_3: true,
    $4_3: null,
    $C_3: null,
    $N_3: null,
    get_textInputKey: function() { return this.$T_3 },
    set_textInputKey: function(value) {
        this.$T_3 = value;
        return value
    },
    get_integerInputKey: function() { return this.$Q_3 },
    set_integerInputKey: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_floatInputKey: function() { return this.$O_3 },
    set_floatInputKey: function(value) {
        this.$O_3 = value;
        return value
    },
    get_valueBoxIdBase: function() { return this.$C_3 },
    set_valueBoxIdBase: function(value) {
        this.$C_3 = value;
        return value
    },
    get_deleteValueMessage: function() { return this.$N_3 },
    set_deleteValueMessage: function(value) {
        this.$N_3 = value;
        return value
    },
    get_nextValue: function() {
        if (!this.CheckFunction("addremove")) throw Error.create("Function not available");
        if (this.$2_3) return -1;
        return this.$Y_3
    },
    set_nextValue: function(value) {
        if (!this.CheckFunction("addremove")) throw Error.create("Function not available");
        if (this.$2_3) return value;
        this.$Y_3 = this.$p_3(value);
        return value
    },
    get_currentValueFormat: function() { return this.$4_3 },
    set_currentValueFormat: function(value) {
        this.$4_3 = value;
        if (this.$4_3 === window.LOCID_RESPONSE_TYPE_DATEONLY ||
            this.$4_3 === window.LOCID_RESPONSE_TYPE_DATETIME ||
            this.$4_3 === window.LOCID_RESPONSE_TYPE_LOOKUP) this.$4_3 = window.LOCID_RESPONSE_TYPE_INTEGER;
        this.$v_3();
        this.$0_3.clear();
        this.$B_3(false);
        return value
    },
    get_count: function() { return this.$0_3.get_length() },
    get_disabled: function() { return this.$2_3 },
    set_disabled: function(value) {
        value && this.set_$8_3(-1);
        this.$2_3 = value;
        this.$Z_3("move", this.$2_3);
        this.$Z_3("edit", this.$2_3);
        this.$Z_3("addremove", this.$2_3);
        this.$Z_3("sort", this.$2_3);
        return value
    },
    get_selectedValue: function() { return !IsNull(this.get_$9_3()) ? this.get_$9_3().$6_0 : null },
    set_selectedValue: function(value) {
        if (this.$2_3) return value;
        var $v_0 = this.$0_3.indexOfValue(value);
        if ($v_0 < 0) throw Error.create("Invalid argument");
        this.set_$8_3($v_0);
        return value
    },
    get_dataXml: function() { return this.$t_3() },
    set_dataXml: function(value) {
        this.$f_3(value);
        this.$B_3(true);
        return value
    },
    get_initialXml: function() { return this.$P_3 },
    set_initialXml: function(value) {
        this.$P_3 = value;
        return value
    },
    get_$9_3: function() { return this.$3_3 >= 0 ? this.$0_3.getItem(this.$3_3) : null },
    get_$c_3: function() {
        return this.$4_3 === window.LOCID_RESPONSE_TYPE_FLOAT || this.$4_3 === window.LOCID_RESPONSE_TYPE_INTEGER
    },
    get_$L_3: function() {
        if (this.$4_3 === window.LOCID_RESPONSE_TYPE_TEXT) return this.$S_3;
        if (this.$4_3 === window.LOCID_RESPONSE_TYPE_FLOAT) return this.$W_3;
        if (this.$4_3 === window.LOCID_RESPONSE_TYPE_INTEGER) return this.$X_3;
        return null
    },
    set_$8_3: function($p0) {
        if (this.$2_3) return $p0;
        var $v_0 = this.$3_3;
        $v_0 >= 0 && this.$k_3($v_0, false);
        this.$3_3 = $p0;
        if (this.$3_3 >= 0) {
            this.$i_3();
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.$D_3);
            if ($v_1.rows.length === this.get_count()) {
                var $v_2 = this.$a_3(this.$3_3);
                if (!this.$3_3 || this.$3_3 === this.get_count()) $v_2.scrollIntoView(true);
                else ScrollVerticalList(this.$D_3, $v_2, $v_2.rowIndex, this.get_count(), true)
            }
            this.$k_3(this.$3_3, true)
        } else this.$d_3();
        return $p0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$F_3 = this.$1_3(this.$C_3 + this.$Q_3);
        this.$E_3 = this.$1_3(this.$C_3 + this.$O_3);
        this.$H_3 = this.$1_3(this.$C_3 + this.$T_3);
        this.$I_3 = this.$1_3("txtItemLb");
        this.$D_3 = this.$1_3("divValueList");
        this.$X_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$F_3.id);
        this.$W_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$E_3.id);
        this.$S_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$H_3.id);
        this.$G_3 = Mscrm.FormControlInputBehavior.GetBehavior(this.$I_3.id);
        $addHandler(this.get_element(), "keydown", this.$$d_$q_3);
        !IsNull(this.$F_3) && $addHandler(this.$F_3, "change", this.$$d_$r_3);
        !IsNull(this.$H_3) && $addHandler(this.$H_3, "change", this.$$d_$r_3);
        !IsNull(this.$E_3) && $addHandler(this.$E_3, "change", this.$$d_$r_3);
        !IsNull(this.$I_3) && $addHandler(this.$I_3, "change", this.$$d_$r_3);
        this.$e_3(true);
        !isNullOrEmptyString(this.$P_3) && this.$f_3(this.$P_3);
        this.$B_3(false);
        var $v_0 = this.$1_3("outerDivValueList");
        this.$D_3.style.height = $v_0.offsetHeight - 2 + "px";
        if (Mscrm.Utilities.isIE7OrIE7CompactMode()) {
            $v_0.style.height = "auto";
            $v_0.style.width = "auto"
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$e_3(false);
        !IsNull(this.$F_3) && $removeHandler(this.$F_3, "change", this.$$d_$r_3);
        !IsNull(this.$H_3) && $removeHandler(this.$H_3, "change", this.$$d_$r_3);
        !IsNull(this.$E_3) && $removeHandler(this.$E_3, "change", this.$$d_$r_3);
        !IsNull(this.$I_3) && $removeHandler(this.$I_3, "change", this.$$d_$r_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$q_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    add_onChange: function(value) { this.get_events().addHandler("onchange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("onchange", value) },
    $r_3: function($p0) {
        if (IsNull(this.get_$9_3())) {
            this.$d_3();
            return
        }
        if (!this.CheckFunction("edit")) throw Error.create("Function not available");
        if (this.$2_3) return;
        var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target),
            $v_1 = $v_0.get_element(),
            $v_2 = this.get_$9_3();
        if ($v_0 === this.$X_3 || $v_0 === this.$W_3 || $v_0 === this.$S_3)
            if (isNullOrEmptyString($v_0.get_dataValue())) {
                $v_0.set_dataValue($v_2.$6_0);
                $v_0.setFocus();
                $v_1.select()
            } else {
                var $v_5 = $v_0.get_dataValue();
                if ($v_5 !== $v_2.$6_0) {
                    var $v_6 = this.$0_3.find($v_5);
                    if (!IsNull($v_6)) {
                        alert(String.format(window.LOCID_VALUE_NOT_UNIQUE, $v_6.$6_0, $v_6.$5_0));
                        $v_0.set_dataValue($v_2.$6_0);
                        return
                    }
                    $v_2.$6_0 = $v_5;
                    this.set_nextValue(0)
                }
            }
        else if ($v_0 === this.$G_3) {
            var $v_7 = $v_0.get_dataValue();
            if (!isNullOrEmptyString($v_7)) $v_2.$5_0 = $v_7;
            else {
                $v_0.set_dataValue($v_2.$5_0);
                $v_0.setFocus();
                $v_1.select()
            }
        }
        var $v_3 = this.$a_3(this.$3_3);
        $v_3.setAttribute("value", $v_2.$6_0);
        var $v_4 = XUI.Html.DomUtils.GetFirstChild($v_3);
        $v_4.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_2.$5_0);
        this.$g_3()
    },
    $q_3: function($p0) {
        var $v_0 = $p0.target;
        while (!IsNull($v_0) &&
            !($v_0 === this.get_element() || $v_0 === this.$D_3 || $v_0.id.toLowerCase() === "commandbar")
        ) $v_0 = $v_0.parentNode;
        if (IsNull($v_0) || $v_0 === this.get_element()) return;
        var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.$D_3), $v_2 = $v_1.rows, $v_3 = $v_2.length;
        switch ($p0.keyCode) {
        case 40:
        case 38:
            $p0.preventDefault();
            var $v_4 = $p0.keyCode === 38;
            if ($v_3 > 0)
                if (IsNull(this.get_$9_3())) this.set_$8_3(0);
                else {
                    var $v_5 = this.$a_3(this.$3_3);
                    if (IsNull($v_5)) break;
                    var $v_6 = $v_5.rowIndex;
                    if (!$v_4 && $v_6 === $v_3 - 1) $v_6 = 0;
                    else if ($v_4 && !$v_6) $v_6 = $v_3 - 1;
                    else $v_6 += $v_4 ? -1 : 1;
                    this.set_$8_3(this.$V_3($v_6))
                }
            break;
        default:
            break
        }
    },
    $m_3: function($p0) {
        var $v_0 = this.$h_3($p0.target);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if (XUI.Html.DomUtils.GetFirstChild($v_1).disabled) return;
            this.$u_3($v_0, true)
        }
    },
    $n_3: function($p0) {
        var $v_0 = this.$h_3($p0.target);
        if (!IsNull($v_0)) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if (XUI.Html.DomUtils.GetFirstChild($v_1).disabled) return;
            this.$s_3($v_0)
        }
    },
    CheckFunction: function(functionName) {
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
    MoveValueUp: function() {
        if (!this.CheckFunction("move")) throw Error.create("Function not available");
        if (this.$2_3) return;
        var $v_0 = this.$3_3;
        if (this.$0_3.moveUp($v_0)) {
            this.$B_3(false);
            this.set_$8_3(this.$V_3($v_0 - 1))
        }
    },
    MoveValueDown: function() {
        if (!this.CheckFunction("move")) throw Error.create("Function not available");
        if (this.$2_3) return;
        var $v_0 = this.$3_3;
        if (this.$0_3.moveDown(this.$3_3)) {
            this.$B_3(false);
            this.set_$8_3(this.$V_3($v_0 + 1))
        }
    },
    promptLabel: function(value) {
        if (!this.CheckFunction("edit")) throw Error.create("Function not available");
        if (this.$2_3) return;
        if (IsNull(value)) value = this.get_selectedValue();
        var $v_0 = this.$0_3.find(value);
        if (IsNull($v_0)) throw Error.create("Invalid argument");
        var $v_1 = new Mscrm.ListValueDialogArguments;
        $v_1.sLabel = $v_0.$5_0;
        $v_1.iValue = $v_0.$6_0;
        var $v_2 = new Xrm.DialogOptions;
        $v_2.height = 220;
        $v_2.width = 300;
        var $v_3 = [this, $v_0],
            $v_4 = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(Mscrm.MultiValueFormatPickListEdit.updateUICallback, $v_3);
        Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=add").toString(),
            $v_2,
            $v_1,
            null,
            $v_4)
    },
    editValue: function(label, value) {
        if (!this.CheckFunction("edit")) throw Error.create("Function not available");
        if (this.$2_3) return;
        if (IsNull(label)) throw Error.create("Invalid argument");
        if (IsNull(value)) value = this.get_selectedValue();
        var $v_0 = this.$0_3.find(value);
        if (IsNull($v_0)) throw Error.create("Invalid argument");
        $v_0.$5_0 = label;
        this.$B_3(true)
    },
    AddValue: function(label) {
        if (!this.CheckFunction("addremove")) throw Error.create("Function not available");
        if (this.$2_3) return;
        if (isNullOrEmptyString(label)) {
            var $v_0 = new Mscrm.ListValueDialogArguments;
            $v_0.sLabel = "";
            $v_0.iValue = null;
            var $v_1 = new Xrm.DialogOptions;
            $v_1.height = 220;
            $v_1.width = 300;
            var $v_2 = [this],
                $v_3 = Mscrm.Utilities
                    .createCallbackFunctionForXrmDialog(Mscrm.MultiValueFormatPickListEdit.setInstanceLabel, $v_2);
            Xrm.Internal.openDialog(Mscrm.CrmUri.create("/_controls/listEdit/listValue.aspx?mode=add").toString(),
                $v_1,
                $v_0,
                null,
                $v_3)
        } else Mscrm.MultiValueFormatPickListEdit.$j(label, this)
    },
    RemoveValue: function(showWarning, index) {
        if (!this.CheckFunction("addremove")) throw Error.create("Function not available");
        if (this.$2_3) return;
        if (IsNull(showWarning)) showWarning = false;
        if (IsNull(index)) index = this.$3_3;
        var $v_0 = this.$0_3.getItem(index);
        showWarning = showWarning && !isNullOrEmptyString(this.$N_3);
        if (!IsNull($v_0) && $v_0.$R_0) showWarning = false;
        if (!showWarning || confirm(this.$N_3)) {
            this.$0_3.remove(index);
            this.$B_3(false);
            this.set_$8_3(this.$V_3(index))
        }
    },
    SortValues: function(ascend) {
        if (!this.CheckFunction("sort")) throw Error.create("Function not available");
        if (this.$2_3) return;
        this.$0_3.sort(ascend);
        this.$B_3(true)
    },
    RunCommand: function(command) {
        if (this.$2_3 || !this.checkCommand(command)) return;
        switch (command) {
        case "add":
            this.AddValue(String.format(window.LOCID_PICKLIST_DEFAULT_LABEL, this.get_nextValue()));
            break;
        case "edit":
            break;
        case "remove":
            !IsNull(this.get_$9_3()) && this.RemoveValue(true, this.$3_3);
            break;
        case "moveup":
            !IsNull(this.get_$9_3()) && this.MoveValueUp();
            break;
        case "movedown":
            !IsNull(this.get_$9_3()) && this.MoveValueDown();
            break;
        case "sortasc":
            this.SortValues(true);
            break;
        case "sortdes":
            this.SortValues(false);
            break;
        default:
            return
        }
        this.$g_3()
    },
    SetTrimValuesTxtBoxes: function() {
        this.$S_3.set_trimValue(true);
        this.$G_3.set_trimValue(true)
    },
    HandleItemSelected: function(index) { !IsNull(index) && this.get_count() > index && this.set_$8_3(index) },
    checkCommand: function(command) {
        var $v_0 = null;
        switch (command) {
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
        return !IsNull($v_0) && !$v_0.disabled
    },
    $g_3: function() {
        var $v_0 = this.get_events().getHandler("onchange");
        !IsNull($v_0) && $v_0(this, new Sys.EventArgs)
    },
    $e_3: function($p0) {
        this.$K_3("add", $p0);
        this.$K_3("remove", $p0);
        this.$K_3("moveup", $p0);
        this.$K_3("movedown", $p0);
        this.$K_3("sortasc", $p0);
        this.$K_3("sortdes", $p0)
    },
    $K_3: function($p0, $p1) {
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
        if (!IsNull($v_0) && !$v_0.disabled)
            if ($p1) {
                $addHandler($v_0, "focus", this.$$d_$m_3);
                $addHandler($v_0, "blur", this.$$d_$n_3);
                $addHandler($v_0, "mouseover", this.$$d_$m_3);
                $addHandler($v_0, "mouseout", this.$$d_$n_3)
            } else {
                $removeHandler($v_0, "focus", this.$$d_$m_3);
                $removeHandler($v_0, "blur", this.$$d_$n_3);
                $removeHandler($v_0, "mouseover", this.$$d_$m_3);
                $removeHandler($v_0, "mouseout", this.$$d_$n_3)
            }
    },
    $h_3: function($p0) {
        while (!IsNull($p0) && $p0.tagName.toUpperCase() !== "TD") $p0 = $p0.parentNode;
        return $p0
    },
    $u_3: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!$v_1.disabled) $v_0.className = $p1 ? "ms-crm-optionset-Label-Hovered" : "ms-crm-optionset-Label-Opened"
    },
    $s_3: function($p0) { XUI.Html.DomUtils.GetFirstChild($p0).className = "ms-crm-optionset-Label" },
    $B_3: function($p0) {
        for (var $v_0 = '<table cellpadding="2" cellspacing="0" width="100%">', $v_1 = 0, $v_2 = this.$0_3.get_length();
            $v_1 < $v_2;
            $v_1++) {
            var $v_3 = this.$0_3.getItem($v_1);
            $v_0 += String
                .format('<tr id="{0}_val{1}" value="{2}" selected="0" onclick="$find({3}).HandleItemSelected({1});"><td nowrap class="hand">{4}</td></tr>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_element().id), $v_1, CrmEncodeDecode.CrmHtmlAttributeEncode($v_3.$6_0.toString()), CrmEncodeDecode.CrmJavaScriptEncode(this.get_element().id), CrmEncodeDecode.CrmHtmlEncode($v_3.$5_0))
        }
        $v_0 += "</table>";
        this.$D_3.innerHTML = $v_0;
        this.set_nextValue(0);
        this.$3_3 = -1;
        $p0 && this.set_$8_3(this.$V_3(0));
        this.$i_3()
    },
    $i_3: function() {
        if (IsNull(this.get_$L_3())) return;
        var $v_0 = this.get_$9_3();
        if (IsNull($v_0)) {
            this.$d_3();
            return
        }
        this.get_$L_3().set_dataValue(this.get_$c_3() ? Mscrm.ListEditHelper.toNumber($v_0.$6_0) : $v_0.$6_0);
        this.get_$L_3().set_disabled(this.$2_3);
        this.$G_3.set_dataValue($v_0.$5_0);
        this.$G_3.set_disabled(this.$2_3)
    },
    $d_3: function() {
        if (IsNull(this.get_$L_3())) return;
        this.get_$L_3().set_dataValue(null);
        this.get_$L_3().set_disabled(true);
        this.$G_3.set_dataValue("");
        this.$G_3.set_disabled(true)
    },
    $k_3: function($p0, $p1) {
        var $v_0 = this.$a_3($p0);
        $v_0.className = $p1 ? "ms-crm-MultiPicklist-Value-Selected" : ""
    },
    $a_3: function($p0) { return this.$1_3(String.format("val{0}", $p0)) },
    $1_3: function($p0) { return $get(String.format("{0}_{1}", this.get_element().id, $p0)) },
    $p_3: function($p0) {
        for (var $v_0 = $p0, $v_1 = false, $v_2 = [], $v_3 = 0, $v_4 = this.$0_3.get_length(); $v_3 < $v_4; ++$v_3) {
            var $v_5 = Number.parseInvariant(this.$0_3.getItem($v_3).$6_0.toString());
            if (!isNaN($v_5) && $v_5 >= $v_0) {
                $v_1 = $v_1 || $v_5 === $v_0;
                Array.add($v_2, $v_5)
            }
        }
        if ($v_1) {
            var $$t_B = this;
            $v_2.sort(function($p1_0, $p1_1) { return $p1_0 - $p1_1 });
            for (var $v_6 = 0, $v_7 = $v_2.length; $v_6 < $v_7; ++$v_6)
                if ($v_0 === $v_2[$v_6]) ++$v_0;
                else if ($v_0 < $v_2[$v_6]) break
        }
        return $v_0
    },
    $V_3: function($p0) {
        if (!this.get_count()) return -1;
        if ($p0 < 0) return 0;
        if ($p0 >= this.get_count()) return this.get_count() - 1;
        return $p0
    },
    $Z_3: function($p0, $p1) {
        switch ($p0.toLowerCase()) {
        case "move":
            this.$J_3(this.$1_3("btnMoveValueUp"), $p1);
            this.$J_3(this.$1_3("btnMoveValueDown"), $p1);
            break;
        case "edit":
            this.$J_3(this.$1_3("btnEditValue"), $p1);
            break;
        case "addremove":
            this.$J_3(this.$1_3("btnAddValue"), $p1);
            this.$J_3(this.$1_3("btnRemoveValue"), $p1);
            break;
        case "sort":
            this.$J_3(this.$1_3("btnSortAsc"), $p1);
            this.$J_3(this.$1_3("btnSortDesc"), $p1);
            break;
        default:
            return
        }
    },
    $J_3: function($p0, $p1) {
        $p0.disabled = $p1;
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_0)) $v_0.className = $p1 ? "ms-crm-Picklist-MenuButton-Disabled" : "ms-crm-Picklist-MenuButton"
    },
    $v_3: function() {
        this.$H_3.parentNode.parentNode.style.display = this.$4_3 === window.LOCID_RESPONSE_TYPE_TEXT ? "" : "none";
        this.$F_3.parentNode.parentNode.style.display = this.$4_3 === window.LOCID_RESPONSE_TYPE_INTEGER ? "" : "none";
        this.$E_3.parentNode.parentNode.style.display = this.$4_3 === window.LOCID_RESPONSE_TYPE_FLOAT ? "" : "none";
        $get(String.format("td{0}_{1}", this.get_element().id, this.$C_3 + this.$T_3)).style
            .display = this.$4_3 === window.LOCID_RESPONSE_TYPE_TEXT ? "" : "none";
        $get(String.format("td{0}_{1}", this.get_element().id, this.$C_3 + this.$Q_3)).style
            .display = this.$4_3 === window.LOCID_RESPONSE_TYPE_INTEGER ? "" : "none";
        $get(String.format("td{0}_{1}", this.get_element().id, this.$C_3 + this.$O_3)).style
            .display = this.$4_3 === window.LOCID_RESPONSE_TYPE_FLOAT ? "" : "none"
    },
    $t_3: function() {
        var $v_0 = XUI.Xml.CreateDocument(), $v_1 = $v_0.createElement("values"), $v_2 = $v_0.createAttribute("next");
        $v_2.nodeValue = this.get_nextValue().toString();
        $v_1.attributes.setNamedItem($v_2);
        for (var $v_3 = 0, $v_4 = this.$0_3.get_length(); $v_3 < $v_4; ++$v_3) {
            var $v_5 = this.$0_3
                    .getItem($v_3),
                $v_6 = $v_0.createElement("value"),
                $v_7 = $v_0.createAttribute("value");
            $v_7.nodeValue = $v_5.$6_0.toString();
            var $v_8 = $v_0.createAttribute("label");
            $v_8.nodeValue = $v_5.$5_0;
            $v_6.attributes.setNamedItem($v_7);
            $v_6.attributes.setNamedItem($v_8);
            $v_1.appendChild($v_6)
        }
        $v_0.appendChild($v_1);
        return XUI.Xml.XMLSerializer.serializeToString($v_0)
    },
    $f_3: function($p0) {
        this.$0_3.clear();
        this.$3_3 = 0;
        this.$Y_3 = 0;
        for (var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = XUI.Xml.SelectNodes($v_0, "values/value", null),
            $v_3 = 0,
            $v_4 = $v_1.length;
            $v_3 < $v_4;
            ++$v_3) {
            var $v_5 = $v_1[$v_3],
                $v_6 = $v_5.attributes.getNamedItem("value").nodeValue,
                $v_7 = $v_5.attributes.getNamedItem("label").nodeValue,
                $v_8 = $v_6;
            if (this.get_$c_3()) $v_8 = Number.parseInvariant($v_6);
            var $v_9 = new Mscrm.ValueListItem($v_8, $v_7, false);
            this.$0_3.addItem($v_9)
        }
        var $v_2 = $v_0.documentElement.attributes.getNamedItem("next");
        if (IsNull($v_2)) {
            var $v_A = XUI.Xml.GetText($v_2);
            this.set_nextValue(parseInt($v_A))
        }
    }
};
Mscrm.ListEditHelper = function() {};
Mscrm.ListEditHelper.toNumber = function(value) { return Number(value) };
Mscrm.ValueListItem = function(value, label, isNew) {
    this.$6_0 = -1;
    this.$5_0 = label;
    this.$R_0 = isNew;
    this.$6_0 = value
};
Mscrm.ValueListItem.prototype = {
    $R_0: false,
    $5_0: null,
    get_isNew: function() { return this.$R_0 },
    set_isNew: function(value) {
        this.$R_0 = value;
        return value
    },
    get_value: function() { return this.$6_0 },
    set_value: function(value) {
        this.$6_0 = value;
        return value
    },
    get_label: function() { return this.$5_0 },
    set_label: function(value) {
        this.$5_0 = value;
        return value
    }
};
Mscrm.ValueList = function() {
    this.$$d_$o_0 = Function.createDelegate(this, this.$o_0);
    this.$$d_$l_0 = Function.createDelegate(this, this.$l_0);
    this.$0_0 = []
};
Mscrm.ValueList.prototype = {
    get_length: function() { return this.$0_0.length },
    moveUp: function(index) {
        this.$U_0(index);
        if (!index) return false;
        var $v_0 = this.getItem(index - 1);
        this.setItem(index - 1, this.getItem(index));
        this.setItem(index, $v_0);
        return true
    },
    moveDown: function(index) {
        this.$U_0(index);
        if (index + 1 === this.get_length()) return false;
        var $v_0 = this.getItem(index + 1);
        this.setItem(index + 1, this.getItem(index));
        this.setItem(index, $v_0);
        return true
    },
    getItem: function(index) {
        this.$U_0(index);
        return this.$0_0[index]
    },
    setItem: function(index, item) {
        this.$U_0(index);
        this.$0_0[index] = item
    },
    add: function(value, label) {
        var $v_0 = new Mscrm.ValueListItem(value, label, true);
        Array.add(this.$0_0, $v_0);
        return $v_0
    },
    addItem: function(item) { Array.add(this.$0_0, item) },
    insert: function(value, label, index) {
        if (index < 0 || index > this.get_length()) throw Error.create("Invalid index");
        var $v_0 = new Mscrm.ValueListItem(value, label, true);
        Array.insert(this.$0_0, index, $v_0);
        return $v_0
    },
    remove: function(index) {
        this.$U_0(index);
        Array.removeAt(this.$0_0, index)
    },
    clear: function() { Array.clear(this.$0_0) },
    sort: function(ascend) {
        var $v_0 = ascend ? this.$$d_$l_0 : this.$$d_$o_0;
        this.$0_0.sort($v_0)
    },
    $l_0: function($p0, $p1) { return $p0.$5_0.localeCompare($p1.$5_0) },
    $o_0: function($p0, $p1) { return $p1.$5_0.localeCompare($p0.$5_0) },
    find: function(value) {
        var $v_0 = this.indexOfValue(value);
        return $v_0 >= 0 ? this.getItem($v_0) : null
    },
    indexOfValue: function(value) {
        for (var $v_0 = 0, $v_1 = this.$0_0.length;
            $v_0 < $v_1;
            $v_0++
        ) if (this.getItem($v_0).$6_0 === value) return $v_0;
        return -1
    },
    indexOfItem: function(item) {
        for (var $v_0 = 0, $v_1 = this.$0_0.length; $v_0 < $v_1; $v_0++) if (this.getItem($v_0) === item) return $v_0;
        return -1
    },
    $U_0: function($p0) { if ($p0 < 0 || $p0 >= this.get_length()) throw Error.create("Invalid index") }
};
Mscrm.ListValueDialogArguments = function() {};
Mscrm.ListValueDialogArguments.prototype = {
    bIsAttribute: false,
    iValue: null,
    sAttributeType: null,
    aValues: null,
    isCustomAttribute: false,
    sLabel: null
};
Mscrm.MultiValueFormatPickListEdit.registerClass("Mscrm.MultiValueFormatPickListEdit", Mscrm.CrmUIControl);
Mscrm.ListEditHelper.registerClass("Mscrm.ListEditHelper");
Mscrm.ValueListItem.registerClass("Mscrm.ValueListItem");
Mscrm.ValueList.registerClass("Mscrm.ValueList");
Mscrm.ListValueDialogArguments.registerClass("Mscrm.ListValueDialogArguments")