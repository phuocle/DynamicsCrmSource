Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.EmailBodyInputBehavior = function(element) {
    this.$$d_$10_4 = Function.createDelegate(this, this.$10_4);
    this.$$d_$y_4 = Function.createDelegate(this, this.$y_4);
    this.$$d_updateMessageBody = Function.createDelegate(this, this.updateMessageBody);
    this.$$d_$g_4 = Function.createDelegate(this, this.$g_4);
    this.$$d_$x_4 = Function.createDelegate(this, this.$x_4);
    this.$$d_$z_4 = Function.createDelegate(this, this.$z_4);
    this.$$d_$v_4 = Function.createDelegate(this, this.$v_4);
    this.$$d_$w_4 = Function.createDelegate(this, this.$w_4);
    this.$$d_$11_4 = Function.createDelegate(this, this.$11_4);
    this.$$d_$l_4 = Function.createDelegate(this, this.$l_4);
    this.$$d_setUrl = Function.createDelegate(this, this.setUrl);
    Mscrm.FormInputControl.EmailBodyInputBehavior.initializeBase(this, [element])
};
Mscrm.FormInputControl.EmailBodyInputBehavior.prototype = {
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        this.$N_4 = 0;
        this.$9_4 = $get(this.getPostfixToMainElementId("HtmlBar"), this.get_element());
        this.$2_4 = $get(this.getPostfixToMainElementId("IFrame"), this.get_element());
        this.$0_4 = this.$2_4.contentWindow;
        this.$N_4 = this.$2_4.tabIndex;
        if (this.$2_4.parentNode.getAttribute("disabled")) {
            this.$2_4.tabIndex = -1;
            this.set_disabled(true)
        }
        if (this.$a_4() && this.$2_4.contentWindow.location.href.indexOf("/_static/blank.htm") > -1) this.setUrl(null);
        else $addHandler(this.$2_4, "load", this.$$d_setUrl)
    },
    get_isDataSlugSupported: function() { return true },
    $5_4: false,
    $B_4: false,
    $W_4: true,
    $4_4: null,
    $A_4: null,
    $I_4: false,
    $C_4: false,
    $H_4: false,
    get_willSubmit: function() { return this.$W_4 },
    set_willSubmit: function(value) {
        this.$W_4 = value;
        return value
    },
    get_disabled: function() { return this.$H_4 },
    set_disabled: function(value) {
        if (this.$H_4 !== value) {
            this.$0_4.document.body.setAttribute("contentEditable", value ? false : true);
            this.$9_4.style.display = value ? "none" : "inline";
            this.$2_4.tabIndex = value ? -1 : this.$N_4
        }
        this.$H_4 = value;
        return value
    },
    get_isDirty: function() {
        if (this.$6_4) {
            this.updateMessageBody();
            return this.$8_4 !== this.$1_4
        }
        return false
    },
    get_dataXml: function() { return this.$d_4(true) },
    get_dataValue: function() { return this.$q_4() },
    set_dataValue: function(value) {
        this.$14_4(value);
        return value
    },
    get_slugSupport: function() { return this.$5_4 },
    set_slugSupport: function(value) {
        this.$15_4(value);
        return value
    },
    get_dataXmlUnEncoded: function() { return this.$d_4(false) },
    get_dataChangeHandler: function() { return this.$A_4 },
    set_dataChangeHandler: function(value) {
        this.$A_4 = value;
        return value
    },
    $9_4: null,
    get_htmlBar: function() { return this.$9_4 },
    set_htmlBar: function(value) {
        this.$9_4 = value;
        return value
    },
    $2_4: null,
    get_frame: function() { return this.$2_4 },
    set_frame: function(value) {
        this.$2_4 = value;
        return value
    },
    $0_4: null,
    get_emailBody: function() { return this.$0_4 },
    set_emailBody: function(value) {
        this.$0_4 = value;
        return value
    },
    $1_4: null,
    $8_4: null,
    $N_4: 0,
    $6_4: false,
    get_initialized: function() { return this.$6_4 },
    set_initialized: function(value) {
        this.$6_4 = value;
        return value
    },
    $3_4: null,
    get_$O_4: function() { return String.format("<P>{0}&nbsp;</P>", this.$3_4) },
    $D_4: null,
    add_change: function(value) { this.get_events().addHandler("selectionchange", value) },
    remove_change: function(value) { this.get_events().removeHandler("selectionchange", value) },
    add_focus: function(value) { this.get_events().addHandler("focus", value) },
    remove_focus: function(value) { this.get_events().removeHandler("focus", value) },
    add_contentReady: function(value) { this.get_events().addHandler("ContentReadyEvent", value) },
    remove_contentReady: function(value) { this.get_events().removeHandler("ContentReadyEvent", value) },
    $d_4: function($p0) {
        this.updateMessageBody();
        var $v_0 = this.get_element().id, $v_1 = this.$1_4 || "";
        if (this.$5_4) if (IsNull(this.$1_4) || this.$1_4 === this.$3_4 || this.$1_4 === this.get_$O_4()) $v_1 = "";
        if (!Mscrm.Utilities.get_isLeftToRight()) $v_1 = String.format("<div style='direction:rtl;'>{0}</div>", $v_1);
        if ($p0) $v_1 = CrmEncodeDecode.CrmXmlEncode($v_1);
        return String.format("<{0}>{1}</{0}>", $v_0, $v_1)
    },
    $14_4: function($p0) {
        if (!this.get_disabled() && $p0 !== this.$1_4) {
            if (IsNull($p0)) {
                this.$0_4.document.body.innerHTML = "";
                this.$1_4 = ""
            } else {
                this.$0_4.document.body.innerHTML = $p0;
                $p0 = CrmEncodeDecode.CrmHtmlEncode($p0);
                this.$1_4 = $p0
            }
            !IsNull(this.$A_4) && this.$A_4()
        }
    },
    $q_4: function() {
        this.updateMessageBody();
        if (this.$5_4) if (IsNull(this.$1_4) || this.$1_4 === this.$3_4 || this.$1_4 === this.get_$O_4()) return null;
        return this.$1_4
    },
    $l_4: function() { this.fireControlEvent("focus", Sys.EventArgs.Empty) },
    fireOnContentReady: function() { this.fireControlEvent("ContentReadyEvent", Sys.EventArgs.Empty) },
    $10_4: function($p0) {
        if (this.get_disabled()) {
            $p0.stopPropagation();
            $p0.preventDefault();
            return
        }
        var $v_0 = this.$c_4($p0);
        if (IsNull($v_0)) $v_0 = $p0.target;
        var $v_1 = this.$S_4();
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.anchorOffset, $v_3 = $v_0.tagName.toUpperCase();
            if ("HTML" !== $v_3 && "DIV" !== $v_3) {
                var $v_4 = $v_0;
                while (!IsNull($v_4) && "P" !== $v_4.tagName.toUpperCase()) {
                    $v_4 = $v_4.parentNode;
                    if (XUI.Html.DomUtils.NodeType.Document === $v_4.nodeType) return
                }
                if (!IsNull($v_4)) {
                    var $v_5 = this.$0_4.document.createElement("DIV");
                    $v_5.innerHTML = $v_4.innerHTML;
                    $v_5.setAttribute("style", $v_4.getAttribute("style"));
                    $v_5.style.display = "inline";
                    $v_0.parentNode.insertBefore($v_5, $v_4);
                    var $v_6 = $v_1.getRangeAt(0).commonAncestorContainer;
                    if (!IsNull($v_6)) {
                        var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6.parentNode),
                            $v_8 = XUI.Html.DomUtils.GetFirstChild($v_5);
                        while ($v_7 !== $v_6) {
                            $v_7 = XUI.Html.DomUtils.GetNextSibling($v_7);
                            $v_8 = XUI.Html.DomUtils.GetNextSibling($v_8)
                        }
                        if (XUI.Html.DomUtils.NodeType.TextNode !== $v_8.nodeType) $v_8 = this.$R_4($v_8);
                        this.$7_4($v_8, false, $v_2)
                    }
                    $v_4.parentNode.removeChild($v_4)
                } else {
                    var $v_9 = this.$0_4.document.createElement("DIV"), $v_A = this.$0_4.document.createTextNode("");
                    $v_9.style.display = "inline";
                    var $v_B = this.$s_4($v_0, $v_2);
                    if (!IsNull($v_B)) {
                        var $v_C = XUI.Html.GetText($v_B),
                            $v_D = $v_0.getAttribute("style"),
                            $v_E = this.$0_4.document.createElement($v_3);
                        $v_E.setAttribute("style", $v_D);
                        var $v_F = this.$0_4.document.createTextNode($v_C.substring(0, $v_2));
                        $v_E.appendChild($v_F);
                        XUI.Html.SetText($v_B, $v_C.substring($v_2, $v_C.length));
                        $v_0.parentNode.insertBefore($v_9, $v_0);
                        $v_0.parentNode.insertBefore($v_E, $v_9)
                    } else $v_0.appendChild($v_9);
                    $v_9.appendChild($v_A);
                    this.$7_4($v_A, true, 0)
                }
                this.$0_4.document.execCommand("paste", false, null);
                $p0.stopPropagation();
                $p0.preventDefault()
            } else {
                var $v_G = window.clipboardData.getData("Text").length, $$t_I = this;
                window.setTimeout(function() { $$t_I.$7_4($$t_I.$X_4($v_0), false, $v_2 + $v_G) }, 0)
            }
        }
    },
    $o_4: function($p0, $p1, $p2) {
        if (XUI.Html.DomUtils.NodeType.TextNode === $p0.nodeType) $p0 = $p0.parentNode;
        if ((13 === $p1 || "P" === $p0.tagName.toUpperCase()) && "MS-CRM-DATASLUG" !== $p0.className.toUpperCase()) {
            var $v_0 = this.$S_4();
            if (!IsNull($v_0) && $v_0.isCollapsed) {
                var $v_1 = $v_0.anchorOffset;
                if (46 === $p1 || 127 === $p1) return this.$n_4($p2, $p0, $v_1);
                else if (8 === $p1) return this.$m_4($p2, $p0, $v_1);
                else if (13 === $p1) return this.$p_4($p2)
            }
        }
        return false
    },
    $p_4: function($p0) {
        this.InsertValue("<br />",
            Mscrm.Utilities.get_ieBrowserVersion() <= 10 ? this.$0_4.document.selection.createRange() : this.$S_4());
        $p0.stopPropagation();
        $p0.preventDefault();
        return true
    },
    $n_4: function($p0, $p1, $p2) {
        var $v_0 = XUI.Html.GetText($p1).length;
        if ($p2 >= $v_0) {
            var $v_1 = this.$Q_4($p1);
            if (!IsNull($v_1)) {
                $p1.removeChild($v_1);
                $p0.stopPropagation();
                $p0.preventDefault();
                return true
            }
            var $v_2 = XUI.Html.DomUtils.GetNextSibling($p1);
            if (!IsNull($v_2) && ("SPAN" === $v_2.tagName.toUpperCase() || "FONT" === $v_2.tagName.toUpperCase())) {
                var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
                if (!IsNull($v_3)) {
                    if (isNullOrEmptyString(XUI.Html.GetText($v_3))) {
                        $v_1 = this.$Q_4($v_3);
                        if (!IsNull($v_1)) $v_3.removeChild($v_1);
                        else $v_2.removeChild($v_3)
                    } else {
                        $v_3.innerHTML = $p1.innerHTML + $v_3.innerHTML;
                        $p1.parentNode.removeChild($p1);
                        this.$7_4(this.$R_4($v_3), false, $v_0)
                    }
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return true
                }
            }
        }
        return false
    },
    $m_4: function($p0, $p1, $p2) {
        if (0 === $p2) {
            var $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1);
            if (!IsNull($v_0)) {
                if ("SPAN" === $v_0.tagName.toUpperCase()) {
                    var $v_1 = XUI.Html.DomUtils.GetLastChild($v_0);
                    if (!IsNull($v_1)) {
                        var $v_2 = XUI.Html.DomUtils.GetLastChild($v_1);
                        if (!IsNull($v_2) && "BR" === $v_2.tagName.toUpperCase()) $v_1.removeChild($v_2);
                        else {
                            $v_1.innerHTML += $p1.innerHTML;
                            this.$7_4(this.$X_4($v_1), true, XUI.Html.GetText($p1).length);
                            $p1.parentNode.removeChild($p1)
                        }
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return true
                    }
                } else if ("P" === $v_0.tagName.toUpperCase())
                    if (isNullOrEmptyString(XUI.Html.GetText($v_0))) {
                        var $v_3 = this.$Q_4($v_0);
                        if (!IsNull($v_3)) $v_0.removeChild($v_3);
                        else $v_0.parentNode.removeChild($v_0);
                        $p0.stopPropagation();
                        $p0.preventDefault();
                        return true
                    }
            } else if (isNullOrEmptyString(XUI.Html.GetText($p1))) {
                $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1.parentNode);
                if (!IsNull($v_0) && "P" === $v_0.tagName.toUpperCase()) {
                    if (isNullOrEmptyString(XUI.Html.GetText($v_0))) {
                        var $v_4 = this.$Q_4($v_0);
                        if (!IsNull($v_4)) $v_0.removeChild($v_4);
                        else $v_0.parentNode.removeChild($v_0)
                    } else {
                        $p1.innerHTML = $v_0.innerHTML + $p1.innerHTML;
                        this.$7_4(this.$R_4($p1), false, XUI.Html.GetText($v_0).length);
                        $v_0.parentNode.removeChild($v_0)
                    }
                    $p0.stopPropagation();
                    $p0.preventDefault();
                    return true
                }
            }
        }
        return false
    },
    $y_4: function($p0) {
        if (this.get_disabled()) {
            $p0.stopPropagation();
            $p0.preventDefault();
            return
        }
        var $v_0 = this.$c_4($p0);
        if (IsNull($v_0)) $v_0 = $p0.target;
        var $v_1 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if (Mscrm.Utilities.get_ieBrowserVersion() >= 9 &&
            (46 === $v_1 || 127 === $v_1 || 8 === $v_1 || 13 === $v_1) &&
            this.$o_4($v_0, $v_1, $p0)) return;
        if (this.$5_4) {
            this.$I_4 = this.isClearOperator();
            var $v_2 = false;
            switch ($v_1) {
            case 46:
            case 127:
            case 8:
                if ($v_0.className === "ms-crm-DataSlug") {
                    var $v_4 = $v_0;
                    $v_0 = $v_4.parentNode;
                    $v_0.removeChild($v_4);
                    if (this.$I_4) {
                        this.$0_4.document.body.innerHTML = this.$3_4;
                        this.$h_4()
                    }
                }
                $v_2 = true;
                break;
            case 9:
            case 38:
            case 40:
                return;
            case 37:
                this.$b_4($v_0, true);
                this.$T_4($v_0);
                return;
            case 39:
                this.$b_4($v_0, false);
                this.$T_4($v_0);
                return;
            default:
                this.$b_4($v_0, false);
                break
            }
            if ($v_0.className === "ms-crm-DataSlug" && !Mscrm.Utilities.isFirefox() || this.$C_4 && !$v_2) {
                $p0.stopPropagation();
                $p0.preventDefault()
            }
            this.$g_4($p0);
            var $v_3 = $p0;
            if (this.$j_4($v_3)) {
                var $v_5 = new Mscrm.FormInputControl.BubbleArgs;
                $v_5.$J_1 = $v_3.keyCode;
                $v_5.$L_1 = $v_3.shiftKey;
                $v_5.$G_1 = $v_3.ctrlKey;
                $v_5.$E_1 = $v_3.altKey;
                $v_5.$M_1 = this.get_element();
                $v_5.$K_1 = $v_3.rawEvent.returnValue;
                $v_5.$F_1 = false;
                this.fireControlEvent("keydown", $v_5)
            }
        }
    },
    $j_4: function($p0) {
        switch ($p0.keyCode) {
        case 27:
            return true;
        case 123:
            if ($p0.shiftKey) return true;
            break;
        case 83:
            if ($p0.ctrlKey || $p0.altKey) return true;
            break
        }
        return false
    },
    $z_4: function($p0) {
        if ($p0.keyCode === 46 || $p0.keyCode === 127)
            if (this.$I_4 && !this.isClearOperator()) {
                this.$0_4.document.body.innerHTML = this.$3_4;
                this.$h_4()
            }
    },
    $g_4: function($p0) {
        var $v_0 = String.fromCharCode(Mscrm.GlobalEvents.processKeyCode($p0.keyCode)).toUpperCase();
        if (!$p0.ctrlKey && $p0.shiftKey && $p0.altKey)
            switch ($v_0) {
            case "T":
                $p0.preventDefault();
                $p0.stopPropagation();
                ApplyTemplate();
                break;
            case "A":
                $p0.preventDefault();
                $p0.stopPropagation();
                InsertKBArticle();
                break;
            case "S":
                $p0.preventDefault();
                $p0.stopPropagation();
                InsertSignature();
                break
            }
    },
    $h_4: function() {
        this.$C_4 = false;
        this.$l_4()
    },
    $f_4: function($p0) { return $p0.indexOf('<slug type="dynamic" value="null"/>') > 0 },
    $11_4: function($p0) { $p0.stopPropagation() },
    $w_4: function($p0) {
        var $v_0 = $p0.target;
        this.$T_4($v_0)
    },
    $v_4: function($p0) { this.$T_4($p0.target) },
    $15_4: function($p0) {
        this.$5_4 = $p0;
        var $v_0 = this.$0_4.document.body;
        if (this.$5_4 && !this.get_disabled()) {
            if (!this.$B_4) {
                $addHandler($v_0, "focus", this.$$d_$l_4);
                $addHandler($v_0, "selectstart", this.$$d_$11_4);
                $addHandler($v_0, "controlselect", this.$$d_$w_4);
                $addHandler($v_0, "click", this.$$d_$v_4);
                Mscrm.Utilities.get_ieBrowserVersion() < 9 && $addHandler($v_0, "keydown", this.$$d_$v_4);
                $addHandler($v_0, "keyup", this.$$d_$z_4);
                this.$B_4 = true
            }
        } else if (this.$B_4) {
            $removeHandler($v_0, "focus", this.$$d_$l_4);
            $removeHandler($v_0, "selectstart", this.$$d_$11_4);
            $removeHandler($v_0, "controlselect", this.$$d_$w_4);
            $removeHandler($v_0, "click", this.$$d_$v_4);
            Mscrm.Utilities.get_ieBrowserVersion() < 9 && $removeHandler($v_0, "keydown", this.$$d_$v_4);
            $removeHandler($v_0, "keyup", this.$$d_$z_4);
            this.$B_4 = false
        }
    },
    $13_4: function($p0, $p1) {
        this.$0_4.document.body.innerHTML = this.$3_4;
        XUI.Html.DispatchDomEvent(this.$0_4.document.body, XUI.Html.CreateDomEvent("click"));
        this.$Z_4($p0, $p1, true)
    },
    $12_4: function() {
        if (!IsNull(this.$0_4.getSelection)) {
            var $v_0 = this.$0_4.getSelection();
            if (!IsNull($v_0.getRangeAt)) {
                var $v_1 = this.$0_4.document.createElement("span");
                $v_0.getRangeAt(0).insertNode($v_1);
                return $v_1
            }
        } else if (!IsNull(this.$0_4.document.selection)) {
            var $v_2 = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime();
            this.$0_4.document.selection.createRange()
                .pasteHTML('<span id="' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_2) + '" />');
            var $v_3 = this.$0_4.document.getElementById($v_2);
            $v_3.removeAttribute("id");
            return $v_3
        }
        return null
    },
    $Z_4: function($p0, $p1, $p2) {
        this.$0_4.document.body.focus();
        if (isNullOrEmptyString(this.$0_4.document.body.innerHTML)) this.$0_4.document.body.innerHTML = this.$3_4;
        var $v_0 = false, $v_1 = null;
        if (!IsNull(this.$4_4)) {
            $v_1 = this.$4_4;
            $v_0 = true
        } else $v_1 = this.$12_4();
        if (IsNull($v_1)) return;
        $v_1.parentNode.insertBefore(this.$0_4.document.createTextNode(" "), $v_1);
        $v_1.parentNode.insertBefore(this.$0_4.document.createTextNode(" "), XUI.Html.DomUtils.GetNextSibling($v_1));
        $v_1.className = "ms-crm-DataSlug";
        this.get_element().setAttribute("contentEditable", true);
        $v_1.tabIndex = -1;
        $v_1.setAttribute("contentEditable", true);
        $v_1.setAttribute("value", $p0);
        XUI.Html.SetText($v_1, IsNull($p1) ? "" : $p1);
        $v_1.title = $p1;
        $v_1.style.display = "inline";
        if (!$v_0) {
            var $$t_6 = this;
            $addHandler($v_1,
                "beforeeditfocus",
                function($p1_0) {
                    $p1_0.stopPropagation();
                    $p1_0.preventDefault()
                })
        }
        Mscrm.Utilities.click($v_1);
        this.$C_4 = $p2
    },
    $c_4: function($p0) {
        var $v_0 = null;
        if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
            if (this.$0_4.document.selection.type
                .toUpperCase() !=
                "CONTROL") $v_0 = this.$0_4.document.selection.createRange().parentElement();
            else $v_0 = this.$0_4.document.selection.createRange().commonParentElement();
        else if (!IsNull(this.$0_4.getSelection()))
            try {
                $v_0 = this.$0_4.getSelection().getRangeAt(0).commonAncestorContainer;
                if ($v_0.parentNode.className !== "ms-crm-DataSlug" && !IsNull($p0)) $v_0 = this.$r_4($v_0, $p0);
                else if ($v_0.nodeType !== 1) $v_0 = $v_0.parentNode
            } catch ($$e_2) {
                $v_0 = null
            }
        return $v_0
    },
    $r_4: function($p0, $p1) {
        var $v_0 = $p0.previousSibling,
            $v_1 = $p0.nextSibling,
            $v_2 = this.$0_4.getSelection().getRangeAt(0).startOffset,
            $v_3 = this.$0_4.getSelection().getRangeAt(0).commonAncestorContainer.length;
        switch (Mscrm.Utilities.getDomEventKeyCode($p1)) {
        case 46:
        case 127:
            if (!IsNull($v_1))
                if ($v_1.nodeType === 3 && !XUI.Html.GetText($v_1).length) {
                    $v_1.parentNode.removeChild($v_1);
                    $v_1 = $p0.nextSibling
                }
            if (!IsNull($v_1) && !IsNull($v_1.className))
                if ($v_2 === $v_3 && $v_1.className === "ms-crm-DataSlug") return $v_1;
            break;
        case 8:
            if (!IsNull($v_0))
                if ($v_0.nodeType === 3 && !XUI.Html.GetText($v_0).length) {
                    $v_0.parentNode.removeChild($v_0);
                    $v_0 = $p0.previousSibling
                }
            if (!IsNull($v_0) && !IsNull($v_0.className))
                if (!$v_2 && $v_0.className === "ms-crm-DataSlug") return $v_0;
            break;
        default:
            $p0 = $p0.parentNode;
            break
        }
        return $p0
    },
    $S_4: function() {
        if (Mscrm.Utilities
            .get_ieBrowserVersion() >
            0 &&
            Mscrm.Utilities.get_ieBrowserVersion() < 9) return this.$0_4.document.selection.createRange();
        else if (!IsNull(this.$0_4.getSelection())) return this.$0_4.getSelection();
        return null
    },
    $7_4: function($p0, $p1, $p2) {
        var $v_0 = this.$S_4();
        if (!IsNull($v_0) && !IsNull($v_0.collapse))
            if (!IsNull($p0) && $p0.nodeType === XUI.Html.DomUtils.NodeType.TextNode) {
                !IsNull($p0.parentNode) && $p0.parentNode.focus();
                var $v_1 = $p1 ? $p0.nodeValue.length - $p2 : $p2;
                if ($v_1 < 0) $v_1 = 0;
                else if ($v_1 > $p0.nodeValue.length) $v_1 = $p0.nodeValue.length;
                $v_0.collapse($p0, $v_1)
            }
    },
    $b_4: function($p0, $p1) {
        if (this.$C_4) return;
        if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug") {
            var $v_0 = $p0.previousSibling, $v_1 = $p0.nextSibling, $v_2 = null;
            if ($p1) {
                if (IsNull($v_0) || $v_0.nodeType !== 3) {
                    $v_2 = window.document.createTextNode(" ");
                    $p0.parentNode.insertBefore($v_2, $p0)
                } else if ($v_0.nodeType === 3) $v_2 = $v_0
            } else if (IsNull($v_1)) {
                $v_2 = window.document.createTextNode(" ");
                $p0.parentNode.appendChild($v_2)
            } else if ($v_1.nodeType !== 3) {
                $v_2 = window.document.createTextNode(" ");
                $p0.parentNode.insertBefore($v_2, $v_1)
            } else $v_2 = $v_1;
            this.$7_4($v_2, $p1, 0)
        }
    },
    $T_4: function($p0) {
        if (!IsNull($p0) && $p0.className === "ms-crm-DataSlug" && !this.get_disabled()) this.$4_4 = $p0;
        else this.$4_4 = null
    },
    $s_4: function($p0, $p1) { return this.$e_4($p0, $p1)[0] },
    $e_4: function($p0, $p1) {
        var $v_0 = [null, $p1], $v_1 = XUI.Html.DomUtils.GetFirstChild($p0);
        while (!IsNull($v_1)) {
            if (XUI.Html.DomUtils.NodeType.TextNode === $v_1.nodeType) {
                $p1 -= XUI.Html.GetText($v_1).length;
                if (0 >= $p1) {
                    $v_0[0] = $v_1;
                    $v_0[1] = $p1;
                    break
                }
            } else {
                var $v_2 = this.$e_4($v_1, $v_0[1]);
                if (!IsNull($v_2[0])) return $v_2;
                $p1 = $v_2[1]
            }
            $v_1 = XUI.Html.DomUtils.GetNextSibling($v_1)
        }
        return $v_0
    },
    $R_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        while (!IsNull($v_0)) {
            if (XUI.Html.DomUtils.NodeType.TextNode === $v_0.nodeType) return $v_0;
            var $v_1 = this.$R_4($v_0);
            if (!IsNull($v_1)) return $v_1;
            $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
        }
        return null
    },
    $X_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
        while (!IsNull($v_0)) {
            if (XUI.Html.DomUtils.NodeType.TextNode === $v_0.nodeType) return $v_0;
            var $v_1 = this.$X_4($v_0);
            if (!IsNull($v_1)) return $v_1;
            $v_0 = XUI.Html.DomUtils.GetPrevSibling($v_0)
        }
        return null
    },
    $Q_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        while (!IsNull($v_0)) {
            if (!IsNull($v_0.tagName) && "BR" === $v_0.tagName.toUpperCase()) return $v_0;
            $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
        }
        return null
    },
    setUrl: function(domEvent) {
        if (this.$a_4() && this.$2_4.contentWindow.location.href.indexOf("/_static/blank.htm") > -1)
            if (this.$t_4()) this.$Y_4();
            else {
                var $v_0 = window.XrmAccess && !IsNull(Xrm.Page.data) ? Xrm.Page.data.entity.getId() : null;
                if (isNullOrEmptyString($v_0)) this.$Y_4();
                else {
                    $addHandler(this.$2_4, "load", this.$$d_$x_4);
                    this.$2_4.contentWindow.location.replace(this.$2_4.getAttribute("url").toString())
                }
                !IsNull(domEvent) && $removeHandler(this.$2_4, "load", this.$$d_setUrl)
            }
        else $addHandler(this.$2_4, "load", this.$$d_setUrl)
    },
    updateMessageBody: function() {
        if (this.get_disabled() || !this.$6_4) return;
        this.$k_4();
        window.IS_WORKFLOW_EDITOR !== "TRUE" && this.$i_4();
        var $v_0 = Sys.Browser.agent === Sys.Browser.InternetExplorer &&
            Sys.Browser.version >= 11 &&
            this.$u_4(this.$0_4.document.body.innerHTML)
            ? this.$3_4
            : this.$0_4.document.body.innerHTML;
        if (this.$1_4 !== $v_0) {
            this.$1_4 = $v_0;
            this.fireOnChange()
        }
    },
    $u_4: function($p0) {
        var $v_0 = new RegExp("^\\<br(\\s)*(\\/)?\\>$");
        return !IsNull($p0) && $v_0.test($p0)
    },
    fireOnChange: function() {
        var $v_0 = new Mscrm.FormInputControl
            .MessageBodyChangedArgs(Mscrm.DateTimeUtility.localDateTimeNow(), this.$1_4);
        this.fireControlEvent("selectionchange", $v_0)
    },
    InsertValue: function(htmlToInsert, storedRange) {
        if (!this.$6_4) {
            this.$D_4 = htmlToInsert;
            return null
        }
        this.$0_4.document.body.focus();
        var $v_0 = "df" + Mscrm.DateTimeUtility.localDateTimeNow().getTime(), $v_1;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer &&
            Sys.Browser.version < 11 &&
            !Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) {
            if (!IsNull(storedRange)) {
                storedRange.select();
                Mscrm.SessionInfo.isOutlookClient() && this.$0_4.document.body.focus()
            }
            this.$0_4.document.execCommand("insertParagraph", false, $v_0);
            $v_1 = this.$0_4.document.getElementById($v_0)
        } else {
            var $v_2 = this.$0_4.document, $v_3 = this.$0_4.getSelection();
            if ($v_3.rangeCount > 0) {
                var $v_4 = $v_3.getRangeAt(0);
                $v_4.deleteContents();
                $v_1 = $v_2.createElement("p");
                $v_1.id = $v_0;
                $v_4.insertNode($v_1);
                $v_4.collapse(true)
            } else $v_1 = null
        }
        if (IsNull($v_1)) return this.loadMessageContent(htmlToInsert);
        if (Mscrm.Utilities.isIE() && htmlToInsert === "<br />") {
            var $v_5 = this.$0_4.document.createElement("BR");
            $v_1.parentNode.replaceChild($v_5, $v_1)
        } else {
            var $v_6 = this.$0_4.document.createElement("SPAN");
            $v_6.innerHTML = htmlToInsert;
            $v_1.parentNode.replaceChild($v_6, $v_1)
        }
        this.$1_4 = this.$0_4.document.body.innerHTML;
        return ""
    },
    loadMessageContent: function(textToInsert) {
        if (this.$6_4) {
            var $v_0 = this.$0_4.document.createElement("SPAN");
            $v_0.innerHTML = textToInsert;
            this.$0_4.document.body.innerHTML = XUI.Html.GetOuterHTML($v_0);
            this.$1_4 = this.$0_4.document.body.innerHTML;
            this.$8_4 = this.$1_4;
            return ""
        } else {
            this.$D_4 = textToInsert;
            this.$8_4 = this.$1_4;
            return null
        }
    },
    setFocus: function() { !this.get_disabled() && this.$0_4.document.body.focus() },
    updateDataField: function(value, text, disabled) {
        if (this.$f_4(value)) {
            this.$13_4(value, text);
            return
        }
        if (!IsNull(this.$4_4))
            if (isNullOrEmptyString(XUI.Html.GetText(this.$4_4))) {
                try {
                    this.$0_4.document.body.removeChild(this.$4_4)
                } catch ($$e_3) {
                }
                this.$4_4 = null;
                this.$Z_4(value, text, disabled)
            } else {
                this.$4_4.setAttribute("value", value);
                XUI.Html.SetText(this.$4_4, IsNull(text) ? "" : text);
                this.$4_4.title = text
            }
        else this.$Z_4(value, text, disabled)
    },
    getHTML: function() { return this.$0_4.document.body.innerHTML },
    hasDataSlug: function() {
        for (var $v_0 = this.$0_4.document.getElementsByTagName("SPAN"), $v_1 = $v_0.length, $v_2 = 0;
            $v_2 < $v_1;
            $v_2++) {
            var $v_3 = $v_0[$v_2];
            if ($v_3.className === "ms-crm-DataSlug") return true
        }
        return false
    },
    isClearOperator: function() { return this.$f_4(this.getHTML()) },
    useTemplate: function(shouldUseTemplate) {
        this.$0_4.document.body.setAttribute("contentEditable", shouldUseTemplate ? "False" : "True");
        var $$t_5 = this,
            $v_0 = function($p1_0) {
                $p1_0.setAttribute("unselectable", shouldUseTemplate ? "off" : "on");
                $p1_0.disabled = shouldUseTemplate;
                var $v_1 = $p1_0.getAttribute("href"), $v_2 = $p1_0.getAttribute("addHref");
                if (shouldUseTemplate) {
                    if (!isNullOrEmptyString($v_1) && $v_1 === "javascript:onclick();") {
                        $p1_0.removeAttribute("href");
                        $p1_0.setAttribute("addHref", "javascript:onclick();")
                    }
                } else if (!isNullOrEmptyString($v_2) && $v_2 === "javascript:onclick();") {
                    $p1_0.setAttribute("href", $v_2);
                    $p1_0.removeAttribute("addHref")
                }
                return false
            };
        XUI.Html.DomUtils.ForEachChild(this.$9_4, $v_0)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$5_4 &&
            !IsNull(this.$0_4) &&
            !IsNull(this.$0_4.document) &&
            !IsNull(this.$0_4.document.body) &&
            $removeHandler(this.$0_4.document.body, "keydown", this.$$d_$g_4);
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    $x_4: function($p0) {
        if (this.$a_4() && this.$2_4.contentWindow.location.href.indexOf("/_static/blank.htm") === -1) {
            this.$Y_4();
            $removeHandler(this.$2_4, "load", this.$$d_$x_4)
        }
    },
    $Y_4: function() {
        this.$1_4 = this.$0_4.document.body.innerHTML;
        if (!Mscrm.Utilities.get_isLeftToRight())
            this.$0_4.document.body.style.direction = window.LOCID_UI_DIR.toLowerCase();
        this.$8_4 = this.$1_4;
        var $v_0 = window._appFormErrorOnPage;
        if (!IsNull($v_0) && typeof $v_0 !== "undefined" && $v_0 ||
            !IsNull(this.get_element().getAttribute("IsDefaultDirty")) &&
            Boolean.parse(this.get_element().getAttribute("IsDefaultDirty"))) {
            var $v_2 = $get("savedEmailBodyUserInput", this.get_element());
            if (!IsNull($v_2)) {
                this.$0_4.document.body.innerHTML = $v_2.value;
                this.$1_4 = $v_2.value
            }
        }
        if (!this.get_disabled()) {
            this.$0_4.document.body.setAttribute("contentEditable", true);
            if (!Mscrm.Utilities.isIE()) this.$0_4.document.body.style.wordWrap = "break-word"
        }
        var $v_1 = this.$0_4.document.body;
        $addHandler($v_1, "blur", this.$$d_updateMessageBody);
        this.$3_4 = this.$0_4.document.body.innerHTML;
        if (this.$5_4) {
            $addHandler($v_1, "focus", this.$$d_$l_4);
            $addHandler($v_1, "selectstart", this.$$d_$11_4);
            $addHandler($v_1, "controlselect", this.$$d_$w_4);
            $addHandler($v_1, "click", this.$$d_$v_4);
            $addHandler($v_1, "keydown", this.$$d_$y_4);
            $addHandler($v_1, "keyup", this.$$d_$z_4);
            this.$8_4 = this.$3_4
        } else $addHandler($v_1, "keydown", this.$$d_$g_4);
        if (Mscrm.Utilities.get_ieBrowserVersion() >= 9) {
            !this.$5_4 && $addHandler($v_1, "keydown", this.$$d_$y_4);
            $addHandler($v_1, "paste", this.$$d_$10_4)
        }
        this.$6_4 = true;
        !IsNull(this.$D_4) && this.loadMessageContent(this.$D_4);
        this.fireOnContentReady()
    },
    $t_4: function() {
        var $v_0 = window.msgBodyIsFor;
        return !IsNull($v_0) && $v_0 === "webResourceEditor"
    },
    $i_4: function() {
        var $$t_3 = this,
            $v_0 = function($p1_0) {
                var $v_1 = $p1_0.tagName;
                if (!isNullOrEmptyString($v_1)) $v_1 = $v_1.toUpperCase();
                if ($v_1 === "P" || $v_1 === "DIV" || $v_1 === "SPAN") {
                    if (isNullOrEmptyString($p1_0.style
                        .fontSize)) $p1_0.style.fontSize = window.LOCID_MSGBODY_DEFAULTFONTSIZE;
                    if (isNullOrEmptyString($p1_0.style
                        .fontFamily)) $p1_0.style.fontFamily = window.LOCID_MSGBODY_DEFAULTFONTFAMILY
                }
                return false
            };
        XUI.Html.DomUtils.ForEachChild(this.$0_4.document.body, $v_0)
    },
    $k_4: function() {
        for (var $v_0 = this.$0_4.document.getElementsByTagName("SPAN"), $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = $v_0[$v_1];
            (isNullOrEmptyString($v_2
                        .innerHTML) ||
                    $v_2.innerHTML === this.$3_4 ||
                    $v_2.innerHTML === this.get_$O_4()) &&
                Mscrm.Utilities.destroyElement($v_2)
        }
        if (this.$0_4.document.body.innerHTML === this.get_$O_4()) this.$0_4.document.body.innerHTML = this.$3_4
    },
    $a_4: function() {
        var $v_0;
        try {
            var $v_1 = this.$2_4;
            $v_0 = $v_1.contentWindow.document.readyState
        } catch ($$e_2) {
            return false
        }
        return $v_0.toLowerCase() === "complete"
    },
    getPostfixToMainElementId: function(postfix) { return this.get_element().id + postfix }
};
Mscrm.FormInputControl.MessageBodyChangedArgs = function($p0, $p1) {
    Mscrm.FormInputControl.MessageBodyChangedArgs.initializeBase(this);
    this.$U_1 = $p0;
    this.$V_1 = $p1
};
Mscrm.FormInputControl.MessageBodyChangedArgs.prototype = {
    $U_1: null,
    $V_1: null,
    get_dateChanged: function() { return this.$U_1 },
    get_value: function() { return this.$V_1 }
};
Mscrm.FormInputControl.BubbleArgs = function() { Mscrm.FormInputControl.BubbleArgs.initializeBase(this) };
Mscrm.FormInputControl.BubbleArgs.prototype = {
    $J_1: 0,
    get_keyCode: function() { return this.$J_1 },
    set_keyCode: function($p0) {
        this.$J_1 = $p0;
        return $p0
    },
    $L_1: false,
    get_shiftKey: function() { return this.$L_1 },
    set_shiftKey: function($p0) {
        this.$L_1 = $p0;
        return $p0
    },
    $G_1: false,
    get_ctrlKey: function() { return this.$G_1 },
    set_ctrlKey: function($p0) {
        this.$G_1 = $p0;
        return $p0
    },
    $E_1: false,
    get_altKey: function() { return this.$E_1 },
    set_altKey: function($p0) {
        this.$E_1 = $p0;
        return $p0
    },
    $M_1: null,
    get_srcElement: function() { return this.$M_1 },
    set_srcElement: function($p0) {
        this.$M_1 = $p0;
        return $p0
    },
    $K_1: false,
    get_returnValue: function() { return this.$K_1 },
    set_returnValue: function($p0) {
        this.$K_1 = $p0;
        return $p0
    },
    $F_1: false,
    get_cancelBubble: function() { return this.$F_1 },
    set_cancelBubble: function($p0) {
        this.$F_1 = $p0;
        return $p0
    }
};
Mscrm.FormInputControl.EmailBodyInputBehavior.registerClass("Mscrm.FormInputControl.EmailBodyInputBehavior",
    Mscrm.FormControlInputBehavior);
Mscrm.FormInputControl.MessageBodyChangedArgs.registerClass("Mscrm.FormInputControl.MessageBodyChangedArgs",
    Sys.EventArgs);
Mscrm.FormInputControl.BubbleArgs.registerClass("Mscrm.FormInputControl.BubbleArgs", Sys.EventArgs)