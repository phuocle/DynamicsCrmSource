Type.registerNamespace("Mscrm");
Mscrm.OnFullTreeEventArgs = function(id, node) {
    Mscrm.OnFullTreeEventArgs.initializeBase(this);
    this.$g_1 = id;
    this.$j_1 = node
};
Mscrm.OnFullTreeEventArgs.prototype = {
    $g_1: 0,
    $j_1: null,
    get_id: function() { return this.$g_1 },
    set_id: function(value) {
        this.$g_1 = value;
        return value
    },
    get_node: function() { return this.$j_1 },
    set_node: function(value) {
        this.$j_1 = value;
        return value
    }
};
Mscrm.FullTree = function(element) {
    this.$$d_$1M_3 = Function.createDelegate(this, this.$1M_3);
    this.$$d_$1F_3 = Function.createDelegate(this, this.$1F_3);
    this.$$d_$1E_3 = Function.createDelegate(this, this.$1E_3);
    this.$$d_$1Q_3 = Function.createDelegate(this, this.$1Q_3);
    this.$$d_$1R_3 = Function.createDelegate(this, this.$1R_3);
    this.$$d_$1P_3 = Function.createDelegate(this, this.$1P_3);
    this.$8_3 = -1;
    this.$9_3 = [];
    this.$7_3 = [];
    this.$c_3 = {};
    Mscrm.FullTree.initializeBase(this, [element])
};
Mscrm.FullTree.prototype = {
    $E_3: null,
    $B_3: null,
    $G_3: null,
    $D_3: null,
    $F_3: null,
    $C_3: null,
    $U_3: null,
    $X_3: null,
    $T_3: null,
    $V_3: null,
    $S_3: null,
    $Y_3: null,
    $R_3: null,
    $W_3: null,
    $M_3: 0,
    $2_3: 0,
    $h_3: 0,
    $i_3: 0,
    $l_3: false,
    $k_3: false,
    $0_3: "",
    $4_3: null,
    $3_3: null,
    $a_3: null,
    $p_3: 37,
    $q_3: 39,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$E_3 = this.$5_3();
        this.$B_3 = this.$5_3();
        this.$G_3 = this.$5_3();
        this.$D_3 = this.$5_3();
        this.$F_3 = this.$5_3();
        this.$C_3 = this.$5_3();
        this.$U_3 = this.$5_3();
        this.$X_3 = this.$5_3();
        this.$T_3 = this.$5_3();
        this.$V_3 = this.$5_3();
        this.$S_3 = this.$5_3();
        this.$Y_3 = this.$5_3();
        this.$R_3 = this.$5_3();
        this.$W_3 = this.$5_3();
        $addHandler(this.get_element(), "mousedown", this.$$d_$1P_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$1R_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$1Q_3);
        $addHandler(this.get_element(), "click", this.$$d_$1E_3);
        $addHandler(this.get_element(), "dblclick", this.$$d_$1F_3);
        $addHandler(this.get_element(), "keydown", this.$$d_$1M_3);
        if (!Mscrm.Utilities.get_isLeftToRight()) {
            this.$p_3 = 39;
            this.$q_3 = 37
        }
        this.$4_3 = XUI.Xml.CreateDocument();
        this.$19_3();
        this.RegisterNodeType("node", null, null, null, null, null, false, false);
        this.$e_3("InitCompleted")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mousedown", this.$$d_$1P_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$1R_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$1Q_3);
        $removeHandler(this.get_element(), "click", this.$$d_$1E_3);
        $removeHandler(this.get_element(), "dblclick", this.$$d_$1F_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$1M_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    RegisterNodeType: function(typeName,
        iconLeafPath,
        iconCollapsedPath,
        iconExpandedPath,
        displayTextXPath,
        descriptionXPath,
        encodeDisplayHtml,
        encodeDescriptionHtml) {
        this.RegisterNodeTypeWithImageStrip(typeName,
            iconLeafPath,
            null,
            iconCollapsedPath,
            iconExpandedPath,
            displayTextXPath,
            descriptionXPath,
            encodeDisplayHtml,
            encodeDescriptionHtml)
    },
    RegisterNodeTypeWithImageStrip: function(typeName,
        iconLeafPath,
        iconLeafClassName,
        iconCollapsedPath,
        iconExpandedPath,
        displayTextXPath,
        descriptionXPath,
        encodeDisplayHtml,
        encodeDescriptionHtml) {
        if (isNullOrEmptyString(displayTextXPath)) displayTextXPath = "@name";
        if (isNullOrEmptyString(iconLeafPath)) iconLeafPath = this.$W_3.src;
        if (isNullOrEmptyString(iconCollapsedPath)) iconCollapsedPath = this.$y_3(false);
        if (isNullOrEmptyString(iconExpandedPath)) iconExpandedPath = this.$y_3(true);
        if (isNullOrEmptyString(descriptionXPath)) descriptionXPath = "@description";
        if (IsNull(encodeDescriptionHtml)) encodeDescriptionHtml = true;
        if (IsNull(encodeDisplayHtml)) encodeDisplayHtml = true;
        var $v_0 = new Mscrm.FullTreeNodeType(typeName,
            iconLeafPath,
            iconCollapsedPath,
            iconExpandedPath,
            displayTextXPath,
            descriptionXPath,
            encodeDisplayHtml,
            encodeDescriptionHtml);
        if (!isNullOrEmptyString(iconLeafClassName)) $v_0.$L_0 = iconLeafClassName;
        this.$c_3[typeName] = $v_0
    },
    RenderTree: function() {
        this.RenderTreeToDepth(-1);
        var $v_0 = this.$1_3(this.get_element(), "UseFixedWidth");
        !IsNull($v_0) && Mscrm.Utilities.parseBoolean($v_0) && this.$x_3(this.get_element())
    },
    RenderTreeToDepth: function(maxDepth) {
        var $v_0 = "";
        this.$M_3 = 0;
        Array.clear(this.$9_3);
        Array.clear(this.$7_3);
        this.$2_3 = 0;
        this.$h_3 = 0;
        var $v_1 = this.$4_3.documentElement;
        if (!IsNull($v_1)) $v_1 = this.$s_3($v_1);
        while (!IsNull($v_1)) {
            this.$1D_3($v_1);
            if (this.$m_3($v_1) !== "deleted") {
                this.$M_3++;
                $v_0 += this.$18_3($v_1, maxDepth)
            }
            $v_1 = this.$s_3($v_1)
        }
        $v_0 += this.$18_3(null, maxDepth);
        $v_0 += "<div>&nbsp;</div>";
        this.get_element().innerHTML = $v_0;
        this.$f_3(this.$3_3)
    },
    InsertChildNode: function(parentId, xmlNode) {
        var $v_0 = false, $v_1 = XUI.Xml.LoadXml(xmlNode), $v_2 = $v_1.documentElement;
        if (!IsNull($v_2)) {
            for (var $v_3 = 0, $v_4 = $v_2.childNodes.length; $v_3 < $v_4; $v_3++) {
                var $v_5 = XUI.Xml.DomUtils.GetChildElementAt($v_2, $v_3);
                if (!IsNull($v_5)) {
                    var $v_6 = $v_5.cloneNode(true), $v_7 = null;
                    if (parentId < 0) $v_7 = this.$4_3.documentElement;
                    else
                        $v_7 = XUI.Xml.SelectSingleNode(this.$4_3.documentElement,
                            String.format('//node()[@{0}="{1}"]', "fulltree_id", parentId),
                            null);
                    if (!IsNull($v_7)) {
                        this.$I_3($v_6, "new");
                        for (var $v_9 = 0, $v_A = this.$c_3.length; $v_9 < $v_A; $v_9++) {
                            var $v_B = ".//" + this.$c_3[$v_9].$b_0, $v_C = XUI.Xml.SelectNodes($v_6, $v_B, null);
                            if (!IsNull($v_C))
                                for (var $v_D = 0, $v_E = $v_C.length; $v_D < $v_E; $v_D++) this.$I_3($v_C[$v_D], "new")
                        }
                        $v_7.appendChild($v_6);
                        var $v_8 = this.$1_3($v_7, "fulltree_status");
                        (isNullOrEmptyString($v_8) || $v_8 !== "new") && this.$I_3($v_7, "updated");
                        $v_0 = true
                    }
                }
            }
            if ($v_0) {
                this.RenderTree();
                this.$e_3("TreeChanged")
            }
        }
    },
    GetNodeElement: function(targetId) {
        return XUI.Xml.SelectSingleNode(this.$4_3, String.format('//node()[@{0}="{1}"]', "fulltree_id", targetId), null)
    },
    GetNodeId: function(targetNode) {
        var $v_0 = null, $v_1 = this.$H_3(targetNode, "DIV", "ftRow");
        if (!IsNull($v_1)) $v_0 = this.$1_3($v_1, "fulltree_id");
        return $v_0
    },
    GetParentId: function(targetNode) {
        var $v_0 = null, $v_1 = this.$H_3(targetNode, "DIV", "ftRow");
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.parentNode;
            if (!IsNull($v_2)) $v_0 = this.$1_3($v_2, "fulltree_id")
        }
        return $v_0
    },
    UpdateNodeXml: function(targetNode, xmlNode) {
        if (IsNull(targetNode)) return false;
        var $v_0 = XUI.Xml.LoadXml(xmlNode), $v_1 = $v_0.documentElement;
        return this.UpdateNode(targetNode, $v_1)
    },
    UpdateNode: function(targetNode, newNode) {
        var $v_0 = this.$1_3(targetNode, "fulltree_id");
        this.$m_3(newNode) !== "new" && this.$I_3(newNode, "updated");
        this.$u_3(newNode, $v_0);
        var $v_1 = targetNode.parentNode;
        if (!IsNull($v_1)) {
            $v_1.replaceChild(newNode, targetNode);
            this.RenderTree();
            this.$e_3("TreeChanged");
            return true
        }
        return false
    },
    DeleteNode: function(targetId) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$4_3, String.format('//*[@{0}="{1}"]', "fulltree_id", targetId), null);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.parentNode,
                $v_2 = XUI.Xml.SelectSingleNode($v_0, String.format("@{0}", "fulltree_status"), null);
            if (!IsNull($v_2) && $v_2.nodeValue === "new") $v_1.removeChild($v_0);
            else {
                this.$1N_3($v_0);
                if (!IsNull($v_1)) {
                    var $v_3 = this.$1_3($v_1, "fulltree_status");
                    (isNullOrEmptyString($v_3) || $v_3 === "new") && this.$I_3($v_1, "updated")
                }
            }
            this.RenderTree();
            this.$e_3("TreeChanged");
            return true
        }
        return false
    },
    get_imageFolder: function() { return this.$0_3 },
    set_imageFolder: function(value) {
        this.$0_3 = value;
        if (this.$0_3.charAt(this.$0_3.length - 1) !== "/") this.$0_3 += "/";
        this.$19_3();
        return value
    },
    get_selectedNodeId: function() { return this.$8_3.toString() },
    set_selectedNodeId: function(value) {
        var $v_0 = parseInt(value, 10);
        !isNaN($v_0) && this.$v_3($v_0);
        return value
    },
    get_xml: function() { return XUI.Xml.XMLSerializer.serializeToString(this.$4_3) },
    set_xml: function(value) {
        this.$4_3 = XUI.Xml.LoadXml(value);
        this.$i_3 = 0;
        isNullOrEmptyString(XUI.Xml.GetParserError(this.$4_3)) && this.$e_3("TreeChanged");
        return value
    },
    get_xmlNode: function() { return this.$4_3.documentElement },
    get_hideSelection: function() { return this.$l_3 },
    set_hideSelection: function(value) {
        this.$l_3 = value;
        return value
    },
    get_hideMouseOver: function() { return this.$k_3 },
    set_hideMouseOver: function(value) {
        this.$k_3 = value;
        return value
    },
    get_count: function() { return this.$M_3 },
    set_count: function(value) {
        this.$M_3 = value;
        return value
    },
    add_initCompleted: function(value) { this.get_events().addHandler("InitCompleted", value) },
    remove_initCompleted: function(value) { this.get_events().removeHandler("InitCompleted", value) },
    add_treeChanged: function(value) { this.get_events().addHandler("TreeChanged", value) },
    remove_treeChanged: function(value) { this.get_events().removeHandler("TreeChanged", value) },
    add_selectionChanged: function(value) { this.get_events().addHandler("SelectionChanged", value) },
    remove_selectionChanged: function(value) { this.get_events().removeHandler("SelectionChanged", value) },
    add_returnSubmitted: function(value) { this.get_events().addHandler("ReturnSubmitted", value) },
    remove_returnSubmitted: function(value) { this.get_events().removeHandler("ReturnSubmitted", value) },
    $1P_3: function($p0) {
        var $v_0 = this.$H_3($p0.target, "SPAN", "ftSelectTarget");
        $p0.stopPropagation();
        this.$f_3($v_0)
    },
    $1R_3: function($p0) {
        var $v_0 = this.$H_3($p0.target, "SPAN", "ftSelectTarget");
        $p0.stopPropagation();
        if (!IsNull($v_0)) {
            if (!this.$k_3) $v_0.style.backgroundColor = "#c4ddff";
            this.$a_3 = $v_0
        }
    },
    $1Q_3: function($p0) {
        $p0.stopPropagation();
        if (!IsNull(this.$a_3)) {
            this.$a_3.style.backgroundColor = "";
            this.$a_3 = null
        }
    },
    $1F_3: function($p0) {
        if (this.$8_3 === -1) {
            var $v_0 = this.$H_3($p0.target, "SPAN", "ftSelectTarget");
            this.$f_3($v_0)
        }
    },
    $1E_3: function($p0) {
        var $v_0 = $p0.target;
        if (!IsNull($v_0)) {
            var $v_1 = this.$1_3($v_0, "type");
            !IsNull($v_1) && $v_1 === "expander" && this.$1A_3($v_0)
        }
    },
    $1M_3: function($p0) {
        switch ($p0.keyCode) {
        case 32:
        case 13:
            this.$16_3("ReturnSubmitted");
            break;
        case 38:
            this.$15_3(true);
            break;
        case 40:
            this.$15_3(false);
            break;
        default:
            if ($p0.keyCode === this.$p_3) this.$w_3(false);
            else $p0.keyCode === this.$q_3 && this.$w_3(true);
            break
        }
    },
    $19_3: function() {
        if (isNullOrEmptyString(this.$0_3)) this.$0_3 = "/_imgs/tree/";
        this.$E_3.src = this.$0_3 + "CornerPlus.gif";
        this.$E_3.alt = window.LOCID_TREE_PLUS;
        this.$B_3.src = this.$0_3 + "CornerMinus.gif";
        this.$B_3.alt = window.LOCID_TREE_MINUS;
        this.$G_3.src = this.$0_3 + "TeePlus.gif";
        this.$G_3.alt = window.LOCID_TREE_PLUS;
        this.$D_3.src = this.$0_3 + "TeeMinus.gif";
        this.$D_3.alt = window.LOCID_TREE_MINUS;
        this.$F_3.src = this.$0_3 + "DashPlus.gif";
        this.$F_3.alt = window.LOCID_TREE_PLUS;
        this.$C_3.src = this.$0_3 + "DashMinus.gif";
        this.$C_3.alt = window.LOCID_TREE_MINUS;
        this.$U_3.src = this.$0_3 + "Dash.gif";
        this.$U_3.alt = "";
        this.$X_3.src = this.$0_3 + "Tee.gif";
        this.$X_3.alt = "";
        this.$T_3.src = this.$0_3 + "Corner.gif";
        this.$T_3.alt = "";
        this.$V_3.src = this.$0_3 + "FolderVertical.gif";
        this.$V_3.alt = "";
        this.$S_3.src = this.$0_3 + "Folder.gif";
        this.$S_3.alt = "";
        this.$Y_3.src = this.$0_3 + "Vertical.gif";
        this.$Y_3.alt = "";
        this.$R_3.src = this.$0_3 + "Blank.gif";
        this.$R_3.alt = "";
        this.$W_3.src = this.$0_3 + "defaultNode.gif";
        this.$W_3.alt = ""
    },
    $x_3: function($p0) {
        var $v_0, $$t_4 = this;
        XUI.Html.DomUtils.ForEachChild($p0,
            function($p1_0) {
                if (!IsNull($p1_0.tagName)) {
                    var $v_1 = $p1_0.tagName.toUpperCase();
                    if ($v_1 === "DIV") $$t_4.$x_3($p1_0);
                    else if ($v_1 === "SPAN")
                        if ($p1_0.className === "ftSelectTarget") {
                            $v_0 = XUI.Html.DomUtils.GetChildElementAt($p1_0, 1);
                            if (!IsNull($v_0) && $p0.offsetWidth > $v_0.offsetLeft
                            ) $v_0.style.width = String.format("{0}px", $p0.offsetWidth - $v_0.offsetLeft + 2)
                        }
                }
                return false
            })
    },
    $w_3: function($p0) {
        var $v_0 = this.$H_3(this.$3_3, "DIV", "ftRow");
        !IsNull($v_0) && this.$13_3($v_0) !== $p0 && this.$1A_3(this.$1I_3($v_0))
    },
    $15_3: function($p0) {
        if (this.$8_3 === -1) {
            this.$1S_3();
            return
        }
        for (var $v_0 = $p0 ? -1 : 1, $v_1 = 0, $v_2 = this.$7_3.length; $v_1 < $v_2; $v_1++)
            if (this.$8_3 === parseInt(this.$7_3[$v_1], 10)) {
                for ($v_1 += $v_0; $p0 ? $v_1 >= 0 : $v_1 < $v_2; $v_1 += $v_0)
                    if (this.$1O_3(this.$7_3[$v_1])) {
                        this.$v_3(this.$7_3[$v_1]);
                        break
                    }
                break
            }
    },
    $e_3: function($p0) { this.$17_3($p0, Sys.EventArgs.Empty) },
    $16_3: function($p0) {
        var $v_0 = new Mscrm.OnFullTreeEventArgs(this.$8_3, this.$3_3);
        this.$17_3($p0, $v_0)
    },
    $17_3: function($p0, $p1) {
        var $v_0 = this.get_events().getHandler($p0);
        !IsNull($v_0) && $v_0(this, $p1)
    },
    $H_3: function($p0, $p1, $p2) {
        while (!IsNull($p0) && $p0 !== this.get_element()) {
            if ($p0.tagName === $p1 && $p0.className.indexOf($p2) !== -1) break;
            $p0 = $p0.parentNode
        }
        return $p0 === this.get_element() ? null : $p0
    },
    $f_3: function($p0) {
        if (!IsNull($p0) && $p0 === this.$3_3) return;
        if (!IsNull(this.$3_3)) {
            this.$3_3.style.backgroundColor = "";
            this.$3_3.style.borderStyle = "none";
            this.$3_3.style.borderWidth = "0px";
            this.$3_3.style.marginLeft = "0px";
            this.$3_3.style.marginRight = "0px";
            this.$3_3.style.height = "26px";
            var $$t_5 = this;
            XUI.Html.DomUtils.ForEachChild(this.$3_3,
                function($p1_0) {
                    $p1_0.style.height = "26px";
                    return false
                });
            this.$3_3 = null;
            this.$8_3 = -1
        }
        if (!IsNull($p0)) {
            var $v_0 = this.$H_3($p0, "DIV", "ftRow");
            if (!IsNull($v_0)) {
                var $v_1 = this.$1_3($v_0, "fulltree_id");
                if (!isNullOrEmptyString($v_1)) {
                    if (!this.$l_3) {
                        $p0.style.backgroundColor = "#a7cdf0";
                        $p0.style.borderStyle = "solid";
                        $p0.style.borderWidth = "1px";
                        $p0.style.borderColor = "#6893cf";
                        $p0.style.marginLeft = "-1px";
                        $p0.style.marginRight = "-1px";
                        $p0.style.height = "24px";
                        var $$t_6 = this;
                        XUI.Html.DomUtils.ForEachChild($p0,
                            function($p1_0) {
                                $p1_0.style.height = "24px";
                                return false
                            })
                    }
                    this.$3_3 = $p0;
                    this.$8_3 = parseInt($v_1, 10)
                }
            }
        }
        this.$16_3("SelectionChanged")
    },
    $1A_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0.parentNode, $v_1 = $v_0.parentNode, $v_2 = this.$13_3($v_1);
            this.$1T_3($v_1, !$v_2);
            var $v_3 = this.$1K_3($p0.src);
            $p0.src = $v_3.src;
            if (!IsNull($v_3.className)) $p0.className = $v_3.className;
            $p0.alt = $v_3.alt;
            var $v_4 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils.GetNextSibling($v_0))),
                $v_5 = parseInt(this.$1_3($v_1, "fulltree_id"), 10);
            if (isNaN($v_5)) $v_5 = 0;
            var $v_6 = this.GetNodeElement($v_5);
            $v_4.src = this.$z_3($v_6, !$v_2);
            this.$1B_3($v_6, !$v_2);
            while (!IsNull($v_0)) {
                if ($v_0.tagName.toUpperCase() === "DIV") $v_0.style.display = $v_2 ? "none" : "block";
                $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
            }
        }
    },
    $1I_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        while (!IsNull($v_0)) {
            var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
            if ($v_0.tagName.toUpperCase() === "SPAN" && !IsNull($v_1) && $v_1.tagName.toUpperCase() === "IMG") {
                var $v_2 = this.$1_3($v_1, "type");
                if (!isNullOrEmptyString($v_2) && $v_2 === "expander") return $v_1
            }
            $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
        }
        return null
    },
    $1L_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        while (!IsNull($v_0)) {
            if ($v_0.tagName.toUpperCase() === "SPAN" && $v_0.className.substr(0, 14) === "ftSelectTarget") return $v_0;
            $v_0 = XUI.Html.DomUtils.GetNextSibling($v_0)
        }
        return null
    },
    $1K_3: function($p0) {
        if ($p0.endsWith(this.$E_3.src)) return this.$B_3;
        else if ($p0.endsWith(this.$B_3.src)) return this.$E_3;
        else if ($p0.endsWith(this.$G_3.src)) return this.$D_3;
        else if ($p0.endsWith(this.$D_3.src)) return this.$G_3;
        else if ($p0.endsWith(this.$F_3.src)) return this.$C_3;
        else if ($p0.endsWith(this.$C_3.src)) return this.$F_3;
        return null
    },
    $1G_3: function($p0, $p1, $p2, $p3) {
        if ($p1)
            if ($p2)
                if ($p0) return $p3 ? this.$D_3 : this.$G_3;
                else return this.$X_3;
            else if ($p0) return $p3 ? this.$B_3 : this.$E_3;
            else return this.$T_3;
        else if ($p0) return $p3 ? this.$C_3 : this.$F_3;
        else return this.$U_3
    },
    $y_3: function($p0) { return $p0 ? this.$V_3.src : this.$S_3.src },
    $s_3: function($p0) {
        var $v_0 = this.$r_3($p0);
        if (!IsNull($v_0)) {
            this.$9_3[this.$9_3.length] = $p0;
            this.$2_3++;
            return $v_0
        }
        $v_0 = this.$n_3($p0);
        if (!IsNull($v_0)) return $v_0;
        var $v_1 = $p0.parentNode;
        Array.removeAt(this.$9_3, this.$9_3.length - 1);
        this.$2_3--;
        while (this.$2_3 > 0 && !IsNull($v_1)) {
            var $v_2 = this.$n_3($v_1);
            if (!IsNull($v_2)) return $v_2;
            $v_1 = $v_1.parentNode;
            Array.removeAt(this.$9_3, this.$9_3.length - 1);
            this.$2_3--
        }
        this.$2_3++;
        return null
    },
    $r_3: function($p0) {
        var $v_0 = $p0;
        if (XUI.Xml.DomUtils.HasChildElements($v_0)) {
            var $v_1 = XUI.Xml.DomUtils.GetFirstChild($v_0);
            while (!IsNull($v_1) && (!this.$14_3($v_1) || this.$m_3($v_1) === "deleted")
            ) $v_1 = XUI.Xml.DomUtils.GetNextSibling($v_1);
            return $v_1
        }
        return null
    },
    $n_3: function($p0) {
        var $v_0 = XUI.Xml.DomUtils.GetNextSibling($p0);
        while (!IsNull($v_0) && (!this.$14_3($v_0) || this.$m_3($v_0) === "deleted")
        ) $v_0 = XUI.Xml.DomUtils.GetNextSibling($v_0);
        return $v_0
    },
    $u_3: function($p0, $p1) {
        if (isNullOrEmptyString($p1) || parseInt($p1, 10) < 0) $p0.attributes.removeNamedItem("fulltree_id");
        else this.$o_3(this.$4_3, $p0, "fulltree_id", $p1)
    },
    $1D_3: function($p0) {
        var $v_0 = this.$1_3($p0, "fulltree_id");
        if (isNullOrEmptyString($v_0)) {
            this.$i_3++;
            this.$u_3($p0, this.$i_3.toString())
        }
    },
    $I_3: function($p0, $p1) { this.$o_3(this.$4_3, $p0, "fulltree_status", $p1) },
    $m_3: function($p0) {
        var $v_0 = this.$1_3($p0, "fulltree_status");
        return IsNull($v_0) ? "existing" : $v_0
    },
    $13_3: function($p0) { return this.$t_3($p0) },
    $1T_3: function($p0, $p1) {
        this.$o_3(this.get_element().ownerDocument, $p0, "fulltree_expanded", $p1 ? "expanded" : "collapsed")
    },
    $t_3: function($p0) {
        var $v_0 = this.$1_3($p0, "fulltree_expanded");
        return !(!IsNull($v_0) && $v_0 === "collapsed")
    },
    $1B_3: function($p0, $p1) { this.$o_3(this.$4_3, $p0, "fulltree_expanded", $p1 ? "expanded" : "collapsed") },
    $1O_3: function($p0) {
        var $v_0 = this.$11_3($p0);
        return !IsNull($v_0) && (IsNull($v_0.style) || IsNull($v_0.style.display) || $v_0.style.display !== "none")
    },
    $12_3: function($p0, $p1) {
        var $v_0 = XUI.Xml.SelectSingleNode($p0, "type", null);
        if (!IsNull($v_0))
            if (parseInt(XUI.Xml
                    .GetText($v_0),
                    10) ===
                4006) return this.$d_3($p0).$K_0 ? CrmEncodeDecode.CrmHtmlDecode($p1.$A_0) : $p1.$A_0;
            else {
                var $v_1 = window.parent.document.createElement("SPAN");
                $v_1.innerHTML = $p1.$6_0;
                return XUI.Html.GetText($v_1)
            }
        return ""
    },
    $18_3: function($p0, $p1) {
        for (var $v_0 = "", $v_1 = true, $v_2 = true, $v_7 = this.$2_3; $v_7 <= this.$h_3; $v_7++) $v_0 += "</div>";
        this.$h_3 = this.$2_3;
        if (IsNull($p0)) return $v_0;
        var $v_3 = this.$1_3($p0, "fulltree_id");
        this.$7_3[this.$7_3.length] = IsNull($v_3) ? 0 : parseInt($v_3, 10);
        if ($p1 < 0) $v_1 = this.$t_3($p0);
        else {
            $v_1 = this.$2_3 <= $p1;
            this.$1B_3($p0, $v_1)
        }
        $v_2 = this.$t_3($p0.parentNode);
        $v_0 += String
            .format('<div class="ftRow" fulltree_expanded="{0}" fulltree_id="{1}" fulltree_nodetype="{2}" style="display:{3}">', $v_1 ? "expanded" : "collapsed", this.$7_3[this.$7_3.length - 1], $p0.nodeName, $v_2 ? "block" : "none");
        for (var $v_4 = this.$1H_3($p0), $v_5 = null, $v_6 = "", $v_8 = 0; $v_8 <= this.$2_3 + 1; $v_8++) {
            var $v_9 = !IsNull(this.$r_3($p0));
            if ($v_8 === this.$2_3 + 1) {
                if (!IsNull($v_4) && $v_4.$6_0.length > 0) {
                    $v_6 = this.$12_3($p0, $v_4);
                    $v_0 += String.format('<span class="ftLabel" type="label" title="{0}">{1}</span>',
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_6),
                        $v_4.$6_0)
                }
                $v_0 += "</span>"
            } else if ($v_8 === this.$2_3) {
                var $v_A = this.$z_3($p0, $v_1);
                if (!isNullOrEmptyString($v_A)) {
                    var $v_B = XUI.Xml.SelectSingleNode($p0, "id", null), $v_C = "";
                    if (!IsNull($v_B)) $v_C = $v_B.text;
                    var $v_D = XUI.Xml.SelectSingleNode($p0, "type", null), $v_E = "";
                    if (!IsNull($v_D)) $v_E = $v_D.text;
                    $v_6 = this.$12_3($p0, $v_4);
                    $v_0 += String
                        .format('<span class="ftSelectTarget" itemId="{0}" itemType="{1}"><span class="ftImage"><img src="{2}" type="icon"', $v_C, CrmEncodeDecode.CrmHtmlAttributeEncode($v_E), $v_A);
                    var $v_F = this.$1J_3($p0);
                    $v_F = this.$1C_3($v_F);
                    if (!isNullOrEmptyString($v_F)) $v_0 += String.format(' class="{0}"', $v_F);
                    $v_0 += String.format(' alt="{0}"></span>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_6))
                }
            } else if ($v_8 === this.$2_3 - 1) {
                var $v_G = this.$2_3 > 1, $v_H = !IsNull(this.$n_3($p0));
                $v_5 = this.$1G_3($v_9, $v_G, $v_H, $v_1);
                $v_5.className = !Mscrm.Utilities.get_isLeftToRight() ? "ms-crm-FlipHorizontal" : "";
                $v_0 += String.format('<span class="ftImage"><img alt="{0}" src="{1}" {2} {3}/></span>',
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.alt),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.src),
                    !IsNull($v_5.className) ? String.format(' class="{0}"', $v_5.className) : "",
                    $v_9 ? 'type="expander"' : "")
            } else if (!IsNull(this.$n_3(this
                .$9_3[$v_8 + 1])))
                $v_0 += String.format('<span class="ftImage"><img alt="" src="{0}" type="guide" {1}/></span>',
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$Y_3.src),
                    !Mscrm.Utilities.get_isLeftToRight() ? String.format(' class="{0}"', "ms-crm-FlipHorizontal") : "");
            else
                $v_0 += String.format('<span class="ftImage"><img alt="" src="{0}"/></span>',
                    CrmEncodeDecode.CrmHtmlAttributeEncode(this.$R_3.src))
        }
        return $v_0
    },
    $1C_3: function($p0) {
        if (Mscrm.Utilities.get_isLeftToRight()) return $p0;
        if (IsNull($p0)) $p0 = "ms-crm-FlipHorizontal";
        else if ($p0.indexOf("ms-crm-FlipHorizontal") < 0) $p0 += " ms-crm-FlipHorizontal";
        return $p0
    },
    $1N_3: function($p0) {
        var $v_0 = XUI.Xml.SelectNodes($p0, String.format(".//*[@{0}]", "fulltree_id"), null);
        if (!IsNull($v_0))
            for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; $v_1++) {
                this.$I_3($v_0[$v_1], "deleted");
                this.$u_3($v_0[$v_1], null)
            }
        this.$I_3($p0, "deleted")
    },
    $11_3: function($p0) {
        for (var $v_0 = this.get_element().getElementsByTagName("DIV"), $v_1 = 0, $v_2 = $v_0.length;
            $v_1 < $v_2;
            $v_1++) {
            var $v_3 = $v_0[$v_1], $v_4 = parseInt(this.$1_3($v_3, "fulltree_id"), 10);
            if (!isNaN($v_4) && $v_4 === $p0) return $v_3
        }
        return null
    },
    $d_3: function($p0) {
        var $v_0 = this.$c_3[$p0.nodeName];
        return typeof $v_0 !== "undefined" ? $v_0 : null
    },
    $14_3: function($p0) { return !IsNull(this.$d_3($p0)) },
    $1H_3: function($p0) {
        var $v_0 = new Mscrm.FullTreeLabel($p0.nodeName, ""), $v_1 = this.$d_3($p0);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.SelectSingleNode($p0, $v_1.$N_0, null);
            if (!IsNull($v_2)) {
                $v_0.$6_0 = this.$10_3($v_2);
                if ($v_1.$Z_0) $v_0.$6_0 = CrmEncodeDecode.CrmHtmlEncode($v_0.$6_0)
            }
            if (!isNullOrEmptyString($v_1.$J_0)) {
                $v_2 = XUI.Xml.SelectSingleNode($p0, $v_1.$J_0, null);
                if (!IsNull($v_2)) {
                    $v_0.$A_0 = this.$10_3($v_2);
                    if ($v_1.$K_0) $v_0.$A_0 = CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.$A_0)
                }
            }
        }
        return $v_0
    },
    $10_3: function($p0) { return XUI.Xml.GetText($p0) },
    $z_3: function($p0, $p1) {
        var $v_0 = this.$d_3($p0);
        if (!IsNull($v_0)) {
            if (!IsNull(this.$r_3($p0))) return $p1 ? $v_0.$P_0 : $v_0.$O_0;
            return $v_0.$Q_0
        }
        return null
    },
    $1J_3: function($p0) {
        var $v_0 = this.$d_3($p0);
        if (!IsNull($v_0)) return $v_0.$L_0;
        return null
    },
    $1S_3: function() {
        var $v_0 = this.$4_3.documentElement;
        if (!IsNull($v_0)) $v_0 = this.$s_3($v_0);
        var $v_1 = parseInt(this.$1_3($v_0, "fulltree_id"), 10);
        this.$v_3($v_1)
    },
    $1_3: function($p0, $p1) {
        var $v_0 = null;
        if (!IsNull($p0)) {
            var $v_1 = $p0.attributes.getNamedItem($p1);
            if (!IsNull($v_1)) $v_0 = $v_1.nodeValue
        }
        return $v_0
    },
    $o_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p0.createAttribute($p2);
        $v_0.value = $p3;
        $p1.attributes.setNamedItem($v_0)
    },
    $v_3: function($p0) {
        var $v_0 = this.$11_3($p0);
        if (IsNull($v_0)) {
            this.$8_3 = -1;
            this.$f_3(null)
        } else {
            this.$8_3 = $p0;
            this.$f_3(this.$1L_3($v_0))
        }
    },
    $5_3: function() {
        var $v_0 = {};
        $v_0.width = 20;
        $v_0.height = 26;
        return $v_0
    }
};
Mscrm.FullTreeNodeType = function(name,
    iconLeafPath,
    iconCollapsedPath,
    iconExpandedPath,
    displayXPath,
    descriptionXPath,
    encodeDisplayHtml,
    encodeDescriptionHtml) {
    this.$b_0 = name;
    this.$Q_0 = iconLeafPath;
    this.$O_0 = iconCollapsedPath;
    this.$P_0 = iconExpandedPath;
    this.$N_0 = displayXPath;
    this.$J_0 = descriptionXPath;
    this.$Z_0 = encodeDisplayHtml;
    this.$K_0 = encodeDescriptionHtml
};
Mscrm.FullTreeNodeType.prototype = {
    $b_0: null,
    $Q_0: null,
    $O_0: null,
    $P_0: null,
    $N_0: null,
    $J_0: null,
    $L_0: null,
    $Z_0: false,
    $K_0: false,
    get_name: function() { return this.$b_0 },
    set_name: function(value) {
        this.$b_0 = value;
        return value
    },
    get_iconLeafPath: function() { return this.$Q_0 },
    set_iconLeafPath: function(value) {
        this.$Q_0 = value;
        return value
    },
    get_iconExpandedPath: function() { return this.$P_0 },
    set_iconExpandedPath: function(value) {
        this.$P_0 = value;
        return value
    },
    get_iconCollapsedPath: function() { return this.$O_0 },
    set_iconCollapsedPath: function(value) {
        this.$O_0 = value;
        return value
    },
    get_nodeClass: function() { return this.$L_0 },
    set_nodeClass: function(value) {
        this.$L_0 = value;
        return value
    },
    get_displayXPath: function() { return this.$N_0 },
    set_displayXPath: function(value) {
        this.$N_0 = value;
        return value
    },
    get_descriptionXPath: function() { return this.$J_0 },
    set_descriptionXPath: function(value) {
        this.$J_0 = value;
        return value
    },
    get_isEncodeDescriptionHtml: function() { return this.$K_0 },
    set_isEncodeDescriptionHtml: function(value) {
        this.$K_0 = value;
        return value
    },
    get_isEncodeDisplayHtml: function() { return this.$Z_0 },
    set_isEncodeDisplayHtml: function(value) {
        this.$Z_0 = value;
        return value
    }
};
Mscrm.FullTreeLabel = function(displayText, descriptionText) {
    this.$6_0 = displayText;
    this.$A_0 = descriptionText
};
Mscrm.FullTreeLabel.prototype = {
    $6_0: null,
    $A_0: null,
    get_descriptionText: function() { return this.$A_0 },
    set_descriptionText: function(value) {
        this.$A_0 = value;
        return value
    },
    get_displayText: function() { return this.$6_0 },
    set_displayText: function(value) {
        this.$6_0 = value;
        return value
    }
};
Mscrm.OnFullTreeEventArgs.registerClass("Mscrm.OnFullTreeEventArgs", Sys.EventArgs);
Mscrm.FullTree.registerClass("Mscrm.FullTree", Mscrm.CrmUIControl);
Mscrm.FullTreeNodeType.registerClass("Mscrm.FullTreeNodeType");
Mscrm.FullTreeLabel.registerClass("Mscrm.FullTreeLabel")