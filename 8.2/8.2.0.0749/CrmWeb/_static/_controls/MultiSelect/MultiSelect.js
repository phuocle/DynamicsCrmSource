Type.registerNamespace("Mscrm");
Mscrm.MultiSelect = function(parent) {
    this.$$d_$b_0 = Function.createDelegate(this, this.$b_0);
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    this.$$d_$Z_0 = Function.createDelegate(this, this.$Z_0);
    this.$$d_$a_0 = Function.createDelegate(this, this.$a_0);
    this.$O_0 = window.CDNURL + "/_imgs/multiselect/multiselect_btn_on.gif";
    this.$R_0 = window.CDNURL + "/_imgs/multiselect/multiselect_btn_dis.gif";
    this.$1_0 = Mscrm.Menu.createMenu();
    this.$1_0.set_stylePrefix("MS");
    this.$1_0.set_propagateStyle(false);
    this.$1_0.set_isModal(true);
    this.$1_0.set_shiftVertical(false);
    this.$1_0.set_footer(this.$X_0());
    this.$A_0 = {};
    this.$7_0 = new Array(0);
    this.$2_0 = new Array(0);
    this.$4_0 = document.createElement("a");
    this.$4_0.setAttribute("href", "#");
    this.$4_0.style.styleFloat = Mscrm.Utilities.get_isLeftToRight() ? "right" : "left";
    this.$4_0.style.display = "inline";
    $addHandler(this.$4_0, "click", this.$$d_$a_0);
    $addHandler(this.$4_0, "keydown", this.$$d_$Z_0);
    this.$4_0.tabIndex = -1;
    this.$6_0 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(this.$O_0));
    this.$6_0.setAttribute("alt", IsNull(this.$9_0) ? "" : this.$9_0);
    this.$6_0.setAttribute("class", "ms-crm-Lookup");
    this.$6_0.removeAttribute("width");
    this.$6_0.removeAttribute("height");
    this.$4_0.appendChild(document.createElement("span"));
    XUI.Html.DomUtils.GetFirstChild(this.$4_0).appendChild(this.$6_0);
    this.$3_0 = document.createElement("input");
    this.$3_0.type = "text";
    this.$3_0.setAttribute("contentEditable", "false");
    this.$3_0.style.width = "85%";
    this.$3_0.setAttribute("readonly", "true");
    Sys.UI.DomElement.addCssClass(this.$3_0, "ms-crm-ReadOnly");
    $addHandler(this.$3_0, "keydown", this.$$d_$Z_0);
    var $v_0 = document.createElement("span");
    $v_0.appendChild(this.$3_0);
    $v_0.setAttribute("width", "85%");
    parent.appendChild(this.$4_0);
    parent.appendChild($v_0)
};
Mscrm.MultiSelect.prototype = {
    $3_0: null,
    $H_0: "",
    get_selectedItemsDisplayDefault: function() { return this.$H_0 },
    set_selectedItemsDisplayDefault: function(value) {
        this.$H_0 = value;
        return value
    },
    $1_0: null,
    $4_0: null,
    $6_0: null,
    $9_0: null,
    get_iconToolTip: function() { return this.$9_0 },
    set_iconToolTip: function(value) {
        this.$9_0 = value;
        this.$6_0.setAttribute("alt", IsNull(this.$9_0) ? "" : this.$9_0);
        return value
    },
    setFloat: function() {
        this.$6_0.setAttribute("style",
            Mscrm.Utilities.get_isLeftToRight() ? "float:right; display:inline" : "float:left; display:inline")
    },
    $F_0: null,
    get_headerText: function() { return this.$F_0 },
    set_headerText: function(value) {
        this.$F_0 = value;
        this.$1_0.set_header(this.$Y_0());
        return value
    },
    $G_0: null,
    get_okCallback: function() { return this.$G_0 },
    set_okCallback: function(value) {
        this.$G_0 = value;
        return value
    },
    $E_0: null,
    get_cancelCallback: function() { return this.$E_0 },
    set_cancelCallback: function(value) {
        this.$E_0 = value;
        return value
    },
    $A_0: null,
    $7_0: null,
    $2_0: null,
    $M_0: false,
    $Z_0: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 32:
            if ($p0.target === this.$4_0 || $p0.target === this.$3_0) {
                $p0.stopPropagation();
                $p0.preventDefault();
                this.$T_0()
            }
            break
        }
    },
    $a_0: function($p0) {
        if (this.$K_0) return;
        this.$T_0()
    },
    addMultiSelectOption: function(item) {
        var $v_0 = this.$2_0.length;
        this.$2_0[$v_0] = item;
        this.$M_0 && this.$S_0(item);
        item.$5_0 && this.$I_0()
    },
    addOption: function(title, value, isChecked, optionGroupName) {
        var $v_0 = new Mscrm.MultiSelectOption(title, value, isChecked, optionGroupName);
        this.addMultiSelectOption($v_0);
        return $v_0
    },
    $S_0: function($p0) {
        var $v_0 = $p0.$P_0;
        if (isNullOrEmptyString($v_0)) {
            if (IsNull(this.$A_0[""])) {
                var $v_3 = this.$7_0.length;
                this.$A_0[""] = $v_3;
                this.$7_0[$v_3] = 0
            }
            $v_0 = ""
        }
        if (IsNull(this.$A_0[$v_0]));
        for (var $v_1 = 0, $v_2 = this.$A_0[$v_0], $v_4 = 0; $v_4 <= $v_2; $v_4++) $v_1 += this.$7_0[$v_4];
        this.$7_0[$v_2] = this.$7_0[$v_2] + 1;
        $p0.$U_0();
        this.$1_0.insertItem($p0.$0_0, $v_1);
        $p0.$5_0 && this.$I_0()
    },
    addOptionGroup: function(group) {
        var $v_0 = this.$7_0.length;
        this.$A_0[group.$8_0] = $v_0;
        this.$7_0[$v_0] = 1;
        this.$1_0.addItem(group.$0_0)
    },
    $Y_0: function() {
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-MultiSelect-HeaderFooter";
        $v_0
            .innerHTML =
            '<table cellpadding=0 cellspacing=0 width="100%" height="100%"><tr><td style="vertical-align: middle; text-align: center"><span style="text-align: center; width:100%; white-space: nowrap"><nobr title="' + CrmEncodeDecode.CrmHtmlAttributeEncode(this.$F_0) + '">' + CrmEncodeDecode.CrmHtmlEncode(this.$F_0) + "</nobr></span></td></tr></table>";
        return $v_0
    },
    $X_0: function() {
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-MultiSelect-HeaderFooter";
        $v_0.style.textAlign = Mscrm.Utilities.get_isLeftToRight() ? "right" : "left";
        var $v_1 = document.createElement("button");
        $v_1.innerHTML = Mscrm.Utilities.decorateAccessKey(window.LOCID_CTRL_MULTIS_BTN_OK);
        $v_1.accessKey = Mscrm.Utilities.getAccessKey(window.LOCID_CTRL_MULTIS_BTN_OK);
        $v_1.className = "ms-crm-Button";
        $v_1.style.margin = "2px";
        $v_1.style.minWidth = "70px";
        $addHandler($v_1, "click", this.$$d_$c_0);
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement("button");
        $v_2.innerHTML = Mscrm.Utilities.decorateAccessKey(window.LOCID_CTRL_MULTIS_BTN_CANCEL);
        $v_2.accessKey = Mscrm.Utilities.getAccessKey(window.LOCID_CTRL_MULTIS_BTN_CANCEL);
        $v_2.className = "ms-crm-Button";
        $v_2.style.margin = "2px";
        $v_2.style.minWidth = "70px";
        $addHandler($v_2, "click", this.$$d_$b_0);
        $v_0.appendChild($v_2);
        return $v_0
    },
    $L_0: false,
    get_isDirty: function() { return this.$L_0 },
    set_isDirty: function(value) {
        this.$L_0 = value;
        return value
    },
    $K_0: false,
    get_disabled: function() { return this.$K_0 },
    set_disabled: function(value) {
        this.$K_0 = value;
        this.$6_0.setAttribute("src", value ? this.$R_0 : this.$O_0);
        this.$3_0.disabled = value;
        this.$4_0.disabled = value;
        return value
    },
    clear: function() {
        this.$2_0 = new Array(0);
        this.$1_0.clear();
        this.$3_0.value = this.$H_0
    },
    $c_0: function($p0) {
        for (var $v_0 = this.$1_0.get_menuItems(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].get_reference();
            if ($v_2.$B_0) continue;
            var $v_3 = $v_2.get_$V_0();
            if ($v_3 !== $v_2.$5_0) {
                this.$L_0 = true;
                $v_2.set_checked($v_3)
            }
        }
        this.$I_0();
        this.$1_0.hide();
        !IsNull(this.$G_0) && this.$G_0(this)
    },
    $b_0: function($p0) {
        for (var $v_0 = this.$1_0.get_menuItems(), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].get_reference();
            if ($v_2.$B_0) continue;
            $v_2.$d_0()
        }
        this.$1_0.hide();
        !IsNull(this.$E_0) && this.$E_0(this)
    },
    $I_0: function() {
        for (var $v_0 = "", $v_1 = 0; $v_1 < this.$2_0.length; $v_1++)
            if (this.$2_0[$v_1].$5_0)
                if (!isNullOrEmptyString($v_0))
                    $v_0 = String.format(window.LOCID_CTRL_MULTIS_SEP, $v_0, this.$2_0[$v_1].$D_0);
                else $v_0 = this.$2_0[$v_1].$D_0;
        if (isNullOrEmptyString($v_0)) this.$3_0.value = this.$H_0;
        else this.$3_0.value = $v_0;
        this.$4_0.style.display = "";
        this.$4_0.style.display = "inline"
    },
    $T_0: function() {
        var $v_0 = Mscrm.Utilities.getXYPos(this.$3_0, !Mscrm.Utilities.get_isLeftToRight()),
            $v_1 = parseInt($v_0["x"], 10),
            $v_2 = parseInt($v_0["y"], 10) + this.$3_0.offsetHeight;
        if (!this.$M_0) {
            this.$M_0 = true;
            for (var $v_3 = 0; $v_3 < this.$2_0.length; $v_3++) this.$S_0(this.$2_0[$v_3])
        }
        this.$1_0.set_left($v_1);
        this.$1_0.set_top($v_2);
        this.$1_0.set_width(this.$3_0.offsetWidth);
        this.$1_0.set_focusElementOnHide(this.$3_0);
        this.$1_0.refresh();
        this.$1_0.show()
    },
    refresh: function() { this.$1_0.refresh() },
    selectAll: function(toSelect) {
        for (var $v_0 = this.$2_0.length, $v_1 = 0; $v_1 < $v_0; $v_1++) this.$2_0[$v_1].set_checked(toSelect);
        this.$I_0()
    },
    selectItem: function(value, toSelect) {
        for (var $v_0 = 0; $v_0 < this.$2_0.length; $v_0++)
            if (this.$2_0[$v_0].$8_0 === value) {
                if (this.$2_0[$v_0].$5_0 !== toSelect) {
                    this.$2_0[$v_0].set_checked(toSelect);
                    this.$I_0()
                }
                break
            }
    },
    getSelectedItems: function() {
        for (var $v_0 = new Array(0), $v_1 = 0, $v_2 = 0; $v_2 < this.$2_0.length; $v_2++)
            if (this.$2_0[$v_2].$5_0) {
                $v_0[$v_1] = this.$2_0[$v_2];
                $v_1++
            }
        return $v_0
    }
};
Mscrm.MultiSelectOption = function(title, value, isChecked, optionGroupName) {
    this.$$d_$e_0 = Function.createDelegate(this, this.$e_0);
    this.$8_0 = value;
    this.$B_0 = false;
    this.$5_0 = isChecked;
    this.$D_0 = title;
    this.$P_0 = optionGroupName;
    this.$C_0 = false
};
Mscrm.MultiSelectOption.prototype = {
    $B_0: false,
    $P_0: null,
    $0_0: null,
    $8_0: null,
    get_value: function() { return this.$8_0 },
    $D_0: null,
    get_title: function() { return this.$D_0 },
    $5_0: false,
    get_checked: function() { return this.$5_0 },
    set_checked: function(value) {
        this.$5_0 = value;
        this.$Q_0(value);
        return value
    },
    $C_0: false,
    get_$V_0: function() {
        if (this.$C_0) return this.$0_0.get_auxIconPath() === Mscrm.MultiSelectOption.$J;
        else return this.$5_0
    },
    $U_0: function() {
        if (this.$C_0) return;
        this.$C_0 = true;
        this.$0_0 = Mscrm.MenuItem.createMenuItem(this.$D_0);
        this.$0_0.set_reference(this);
        this.$0_0.set_stylePrefix("MS");
        this.$0_0.set_renderFormat(Mscrm.MenuItem.formaT_AUX_IMAGE_SEP_TITLE);
        this.$0_0.set_auxIconPath(this.$5_0 ? Mscrm.MultiSelectOption.$J : Mscrm.MultiSelectOption.$N);
        this.$0_0.set_isAuxAnchorFocusable(false);
        this.$0_0.set_actionCallback(this.$$d_$e_0);
        this.$0_0.set_auxActionCallback(this.$$d_$e_0);
        this.$0_0.set_hideOnAuxAction(false);
        this.$0_0.set_hideOnAction(false)
    },
    $e_0: function($p0) { $p0.get_reference().$Q_0($p0.get_auxIconPath() === Mscrm.MultiSelectOption.$N) },
    $d_0: function() { this.$Q_0(this.$5_0) },
    $Q_0: function($p0) {
        if (!this.$C_0) return;
        if ($p0) {
            this.$0_0.set_auxIconPath(Mscrm.MultiSelectOption.$J);
            this.$0_0.set_auxIconTooltip(window.LOCID_CTRL_MULTIS_SELECT)
        } else {
            this.$0_0.set_auxIconPath(Mscrm.MultiSelectOption.$N);
            this.$0_0.set_auxIconTooltip(window.LOCID_CTRL_MULTIS_UNSELECT)
        }
    }
};
Mscrm.MultiSelectOptionGroup = function(title, value) {
    this.$8_0 = value;
    this.$B_0 = true;
    this.$0_0 = Mscrm.MenuItem.createMenuItem(title);
    this.$0_0.set_isFocusable(false);
    this.$0_0.set_reference(this);
    this.$0_0.set_stylePrefix("MS-header")
};
Mscrm.MultiSelectOptionGroup.prototype = {
    $B_0: false,
    $0_0: null,
    $8_0: null,
    get_value: function() { return this.$8_0 }
};
Mscrm.MultiSelect.registerClass("Mscrm.MultiSelect");
Mscrm.MultiSelectOption.registerClass("Mscrm.MultiSelectOption");
Mscrm.MultiSelectOptionGroup.registerClass("Mscrm.MultiSelectOptionGroup");
Mscrm.MultiSelectOption.$J = window.CDNURL + "/_imgs/multiselect/multiselect_checked.png";
Mscrm.MultiSelectOption.$N = window.CDNURL + "/_imgs/multiselect/multiselect_unchecked.png"