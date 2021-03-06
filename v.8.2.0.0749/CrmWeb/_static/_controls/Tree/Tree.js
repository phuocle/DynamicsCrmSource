Type.registerNamespace("Mscrm");
Mscrm.OnTreeItemSelectedEventArgs = function(id, name) {
    Mscrm.OnTreeItemSelectedEventArgs.initializeBase(this);
    this.$4_1 = id;
    this.$5_1 = name
};
Mscrm.OnTreeItemSelectedEventArgs.prototype = {
    $4_1: null,
    $5_1: null,
    get_id: function() { return this.$4_1 },
    get_name: function() { return this.$5_1 }
};
Mscrm.Tree = function(element) {
    this.$$d_$L_3 = Function.createDelegate(this, this.$L_3);
    this.$$d_$J_3 = Function.createDelegate(this, this.$J_3);
    this.$$d_$K_3 = Function.createDelegate(this, this.$K_3);
    this.$$d_$H_3 = Function.createDelegate(this, this.$H_3);
    this.$$d_$M_3 = Function.createDelegate(this, this.$M_3);
    this.$F_3 = window.LOCID_TREE_PLUS;
    this.$E_3 = window.LOCID_TREE_MINUS;
    Mscrm.Tree.initializeBase(this, [element])
};
Mscrm.Tree.prototype = {
    $6_3: 37,
    $7_3: 39,
    $0_3: null,
    $2_3: null,
    $8_3: "",
    add_itemSelected: function(value) { this.get_events().addHandler("OnItemSelected", value) },
    remove_itemSelected: function(value) { this.get_events().removeHandler("OnItemSelected", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (window.LOCID_UI_DIR.toUpperCase() === "RTL") {
            this.$6_3 = 39;
            this.$7_3 = 37
        }
        $addHandler(this.get_element(), "click", this.$$d_$M_3);
        $addHandler(this.get_element(), "dblclick", this.$$d_$H_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$K_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$J_3);
        $addHandler(this.get_element(), "keydown", this.$$d_$L_3);
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element()),
            $v_1 = parseInt($v_0.getAttribute("MaxRowsBeforeScroll"), 10);
        if (!isNaN($v_1) && $v_1 > 0) {
            var $v_2 = 0, $v_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if (!IsNull($v_3)) {
                var $v_4 = $v_3.childNodes[0];
                $v_2 = $v_4.childNodes.length;
                var $v_5 = $v_0.style;
                if ($v_2 > $v_1) {
                    var $v_6 = $v_4.childNodes[0].offsetHeight;
                    $v_5.overflowY = "auto";
                    $v_5.height = ($v_6 * $v_1).toString() + "px"
                } else {
                    $v_5.height = "auto";
                    $v_5.overflowY = ""
                }
            }
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$M_3);
        $removeHandler(this.get_element(), "dblclick", this.$$d_$H_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$K_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$J_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$L_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    Clear: function() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$0_3);
            $v_0.className = "simpleTree";
            var $v_1 = $v_0.getElementsByTagName("INPUT")[0];
            $v_1.checked = false
        }
        this.$0_3 = null
    },
    $L_3: function($p0) {
        IsNull(this.$0_3) && this.$G_3();
        switch ($p0.keyCode) {
        case 13:
            if (!IsNull(this.$0_3)) !IsNull(window.applychanges) && window.applychanges();
            break;
        case 38:
            this.$Q_3(this.$0_3);
            break;
        case 40:
            this.$P_3(this.$0_3);
            break;
        case 36:
            this.$G_3();
            break;
        case 35:
            this.$O_3();
            break;
        default:
            if ($p0.keyCode === this.$6_3) this.$9_3(this.$0_3);
            else $p0.keyCode === this.$7_3 && this.$A_3(this.$0_3);
            break
        }
    },
    $H_3: function($p0) { $p0.target.tagName.toUpperCase() === "IMG" && $p0.stopPropagation() },
    $M_3: function($p0) {
        var $v_0 = this.$C_3($p0.target);
        $p0.preventDefault();
        if (IsNull($v_0)) {
            $p0.stopPropagation();
            return
        }
        if (this.$1_3($v_0, "IsExpanded")) this.$9_3($v_0);
        else this.$A_3($v_0);
        this.$3_3($v_0)
    },
    $K_3: function($p0) {
        var $v_0 = this.$C_3($p0.target);
        if (!IsNull($v_0) && $v_0.tagName.toUpperCase() === "LI" && $v_0 !== this.$0_3) {
            XUI.Html.DomUtils.GetFirstChild($v_0).className = "ms-crm-GlowOn simpleTree";
            this.$2_3 = $v_0
        }
    },
    $J_3: function($p0) {
        if (!IsNull(this.$2_3) && this.$2_3 !== this.$0_3)
            XUI.Html.DomUtils.GetFirstChild(this.$2_3).className = "simpleTree";
        this.$2_3 = null
    },
    $N_3: function($p0) {
        var $v_0 = this.get_events().getHandler("OnItemSelected");
        !IsNull($v_0) && $v_0(this, $p0)
    },
    $C_3: function($p0) {
        var $v_0 = $p0.tagName.toUpperCase();
        switch ($v_0) {
        case "LI":
            return $p0;
        case "SPAN":
            return $p0.parentNode;
        case "A":
        case "LABEL":
        case "INPUT":
            return $p0.parentNode.parentNode;
        case "IMG":
            return $p0.parentNode.parentNode.parentNode;
        default:
            return null
        }
    },
    $D_3: function($p0) {
        var $v_0 = $p0.parentNode.parentNode;
        if ($v_0.tagName.toUpperCase() === "LI") return $v_0;
        return null
    },
    $I_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($p0));
        if ($v_0.tagName.toUpperCase() === "LI") return $v_0;
        return null
    },
    $B_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetLastChild($p0));
        while (!IsNull($v_0) && $v_0.tagName.toUpperCase() === "LI") {
            if (!this.$1_3($v_0, "IsExpanded")) return $v_0;
            $v_0 = XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetLastChild($v_0))
        }
        return null
    },
    $3_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        $v_0.className = "selectedItem simpleTree";
        var $v_1 = $v_0.getElementsByTagName("INPUT")[0];
        $v_1.checked = true;
        if (!IsNull(this.$0_3) && this.$0_3 !== $p0) {
            $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$0_3);
            $v_1 = $v_0.getElementsByTagName("INPUT")[0];
            $v_1.checked = false;
            $v_0.className = "simpleTree"
        }
        this.$0_3 = $p0;
        var $v_2 = new Mscrm.OnTreeItemSelectedEventArgs(this.$0_3.getAttribute("ItemId"),
            XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(this.$0_3)));
        this.$N_3($v_2);
        !Mscrm.SessionInfo.isOutlookClient() && this.$0_3.scrollIntoView(true)
    },
    $G_3: function() {
        var $v_0 = this.get_element().getElementsByTagName("LI")[0];
        !IsNull($v_0) && this.$3_3($v_0)
    },
    $P_3: function($p0) {
        var $v_0 = null;
        if (this.$1_3($p0, "IsExpanded")) $v_0 = this.$I_3($p0);
        else {
            var $v_1 = XUI.Html.DomUtils.GetNextSibling($p0);
            if (!IsNull($v_1)) $v_0 = $v_1;
            else {
                var $v_2 = null;
                $v_1 = null;
                do {
                    $v_2 = this.$D_3($p0);
                    if (!IsNull($v_2) && $v_2.tagName.toUpperCase() === "LI") {
                        $v_1 = XUI.Html.DomUtils.GetNextSibling($v_2);
                        if (!IsNull($v_1)) $v_0 = $v_1;
                        else $p0 = $v_2
                    }
                } while (IsNull($v_0) && !IsNull($v_2) && $v_2.tagName.toUpperCase() === "LI")
            }
        }
        !IsNull($v_0) && this.$3_3($v_0)
    },
    $O_3: function() { this.$3_3(this.$B_3(XUI.Html.DomUtils.GetFirstChild(this.get_element()))) },
    $Q_3: function($p0) {
        var $v_0 = null, $v_1 = XUI.Html.DomUtils.GetPrevSibling($p0);
        if (!IsNull($v_1))
            if (this.$1_3($v_1, "IsExpanded")) $v_0 = this.$B_3($v_1);
            else $v_0 = $v_1;
        else $v_0 = this.$D_3($p0);
        !IsNull($v_0) && this.$3_3($v_0)
    },
    $9_3: function($p0) {
        if (this.$1_3($p0, "IsExpanded")) {
            $p0.setAttribute("IsExpanded", "false");
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)));
            $v_0.src = "/_imgs/navdown.png";
            $v_0.alt = this.$F_3;
            var $v_1 = XUI.Html.DomUtils.GetLastChild($p0);
            $v_1.style.display = "none"
        }
    },
    $A_3: function($p0) {
        if (!this.$1_3($p0, "IsExpanded")) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0))),
                $v_1 = XUI.Html.DomUtils.GetLastChild($p0);
            if ($v_1.tagName.toUpperCase() === "UL") {
                $v_0.src = "/_imgs/navup.png";
                $v_0.alt = this.$8_3;
                $v_1.style.display = "block";
                $p0.setAttribute("IsExpanded", "true")
            } else if (!this.$1_3($p0, "HasBeenRetrieved")) {
                var $v_2 = false,
                    $v_3 = new RemoteCommand("SubjectManager", "RetrieveTreeNodeHTML"),
                    $v_4 = $p0.getAttribute("ItemId");
                $v_3.SetParameter("parentId",
                    isNullOrEmptyString($v_4) ? "{00000000-0000-0000-0000-000000000000}" : $v_4);
                $v_3.SetParameter("twoLetterLanguageName", XML_LANGUAGE_NAME);
                var $v_5 = $v_3.Execute();
                if ($v_5.Success) {
                    $p0.setAttribute("HasBeenRetrieved", "true");
                    var $v_6 = $v_5.ReturnValue;
                    if (isNullOrEmptyString($v_4)) $v_2 = false;
                    else if (typeof $v_6 === "string" && !isNullOrEmptyString($v_6)) {
                        $p0.setAttribute("IsExpanded", "true");
                        $v_2 = true;
                        $v_0.src = "/_imgs/navup.png";
                        $v_0.alt = this.$8_3
                    } else {
                        XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)).disabled = true;
                        $v_0.src = "/_imgs/navup.png";
                        $v_0.alt = this.$E_3
                    }
                    if (typeof $v_6 === "string") $p0.innerHTML += $v_6;
                    if ($v_2) {
                        $v_1 = XUI.Html.DomUtils.GetLastChild($p0);
                        if (window.LOCID_UI_DIR === "RTL") $v_1.style.marginRight = "15px";
                        else $v_1.style.marginLeft = "15px"
                    }
                }
            }
        }
    },
    $1_3: function($p0, $p1) {
        var $v_0 = $p0.getAttribute($p1);
        return Mscrm.Utilities.parseBoolean($v_0)
    }
};
Mscrm.OnTreeItemSelectedEventArgs.registerClass("Mscrm.OnTreeItemSelectedEventArgs", Sys.EventArgs);
Mscrm.Tree.registerClass("Mscrm.Tree", Mscrm.CrmUIControl)