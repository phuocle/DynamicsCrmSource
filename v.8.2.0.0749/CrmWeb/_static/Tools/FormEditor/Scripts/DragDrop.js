Type.registerNamespace("Mscrm");
Mscrm.EditorOperations = function() {};
Mscrm.EditorOperations.prototype = {
    drag: 0,
    drop: 1,
    removeField: 2,
    changeProperties: 3,
    addField: 4,
    addSection: 5,
    removeSection: 6
};
Mscrm.EditorOperations.registerEnum("Mscrm.EditorOperations", false);
Mscrm.RelationshipFilter = function() {};
Mscrm.RelationshipFilter.prototype = { none: -1, oneToMany: 0, manyToMany: 1, manyToOne: 2, all: 3 };
Mscrm.RelationshipFilter.registerEnum("Mscrm.RelationshipFilter", false);
Mscrm.FieldFilter = function() {};
Mscrm.FieldFilter.prototype = { all: 0, unused: 1, custom: 2 };
Mscrm.FieldFilter.registerEnum("Mscrm.FieldFilter", false);
Mscrm.Render = function() {};
Mscrm.Render.prototype = { none: -1, navBar: 0, mainCanvas: 1, header: 2, footer: 3, wholeCanvas: 4 };
Mscrm.Render.registerEnum("Mscrm.Render", false);
Mscrm.ControlType = function() {};
Mscrm.ControlType.prototype = { FIELD: 1, SECTION: 2, TAB: 3, NAVITEM: 4, NAVGROUP: 6, NONE: -1 };
Mscrm.ControlType.registerEnum("Mscrm.ControlType", false);
Mscrm.FormXmlAttribute = function() {};
Mscrm.FormXmlAttribute.prototype = { COLSPAN: 1, ROWSPAN: 2, sectioN_COLUNMS: 3, id: 4 };
Mscrm.FormXmlAttribute.registerEnum("Mscrm.FormXmlAttribute", false);
Mscrm.DragSource = function(dragSource, dragMode) {
    this.$$d_$1y_2 = Function.createDelegate(this, this.$1y_2);
    this.$$d_$1x_2 = Function.createDelegate(this, this.$1x_2);
    this.$$d_$1w_2 = Function.createDelegate(this, this.$1w_2);
    this.$1B_2 = Mscrm.GlobalEvents.get_globalAllowDrag();
    Mscrm.DragSource.initializeBase(this, [dragSource]);
    this.$B_2 = dragSource;
    this.$10_2 = this.$B_2.parentNode.parentNode;
    this.$a_2 = dragMode;
    this.$c_2 = this.$$d_$1w_2;
    this.$d_2 = this.$$d_$1x_2;
    this.$e_2 = this.$$d_$1y_2
};
Mscrm.DragSource.prototype = {
    $B_2: null,
    $C_2: null,
    $10_2: null,
    $S_2: null,
    $a_2: null,
    $c_2: null,
    $d_2: null,
    $e_2: null,
    $r_2: false,
    initialize: function() {
        Sys.UI.Behavior.prototype.initialize.call(this);
        $addHandler(this.$B_2, "mousedown", this.$c_2);
        $addHandler(this.$B_2, "mousemove", this.$d_2);
        $addHandler(this.$B_2, "mouseup", this.$e_2)
    },
    dispose: function() {
        this.$25_2();
        this.$1I_2();
        this.$B_2 = null;
        this.$C_2 = null;
        this.$10_2 = null;
        Mscrm.DragDropUtils.dragStarted = false;
        Mscrm.DragDropUtils.dragSelected = null;
        Sys.UI.Behavior.prototype.dispose.call(this)
    },
    get_isDragging: function() { return this.$r_2 },
    $25_2: function() {
        !IsNull(this.$c_2) && $removeHandler(this.$B_2, "mousedown", this.$c_2);
        this.$c_2 = null;
        !IsNull(this.$e_2) && $removeHandler(this.$B_2, "mouseup", this.$e_2);
        this.$e_2 = null;
        !IsNull(this.$d_2) && $removeHandler(this.$B_2, "mousemove", this.$d_2);
        this.$d_2 = null
    },
    $1y_2: function($p0) {
        Mscrm.DragDropUtils.dragStarted = false;
        Mscrm.DragDropUtils.dragSelected = null
    },
    $1x_2: function($p0) {
        if (Mscrm.DragDropUtils.dragSelected &&
            Mscrm.DragDropUtils.dragSelected.id &&
            Mscrm.DragDropUtils.dragStarted &&
            Mscrm.DragDropUtils.dragSelected.id === this.$B_2.id) {
            Mscrm.DragDropUtils.dragStarted = false;
            Mscrm.DragDropUtils.dragSelected = null;
            this.$r_2 = true;
            var $v_0 = null, $v_1 = false;
            switch (this.$B_2.className) {
            case "ms-crm-Tab":
                $v_0 = "section";
                $v_1 = true;
                break;
            case "section":
            case "header":
            case "footer":
                $v_0 = this.$B_2.className;
                $v_1 = true;
                break;
            case "cell":
            case "iframe":
            case "aci":
            case "subgrid":
            case "webresource":
            case "notes":
            case "quickformcollection":
            case "referencepanelquickformcollection":
            case "referencepanelsubgrid":
            case "interactionwall":
            case "bingmap":
            case "socialInsight":
            case "orgInsights":
            case "timercontrol":
            case "searchwidget":
            case "referencepanelsearchwidget":
            case "powerbitile":
                $v_0 = this.$B_2.parentNode.parentNode.parentNode.className;
                break;
            case "navItem":
            case "navGroup":
                $v_0 = "navigation";
                break
            }
            if (Mscrm.FormEditorVariables.fieldExpIsFor === $v_0 ||
                this.$a_2 === "fromFieldExplorer" && Mscrm.FormEditorVariables.fieldExpIsFor !== "businessrules") {
                window._event = $p0;
                if (Mscrm.FormEditorVariables.editorType === "dashboardEditor") {
                    this.$C_2 = this.$B_2.cloneNode(false);
                    this.$C_2.style.display = "none";
                    this.$S_2 = $get("editorcontainer")
                } else {
                    if ($v_1) this.$C_2 = this.$B_2.cloneNode(true);
                    else {
                        this.$C_2 = document.createElement("div");
                        this.$C_2.innerHTML = this.$B_2.innerHTML
                    }
                    var $v_3 = this.$B_2.offsetWidth;
                    this.$C_2.style.width = $v_3.toString() + "px";
                    this.$C_2.style.height = this.$B_2.offsetHeight.toString() + "px";
                    this.$S_2 = $get("editorRootElement")
                }
                this.$C_2.style.backgroundColor = "#d9d9d9";
                this.$C_2.style.border = "1px solid #0076a3";
                this.$C_2.id = "_dragVisual";
                var $v_2 = Sys.UI.DomElement.getLocation(this.$B_2);
                switch (this.$a_2) {
                case "fromFieldExplorer":
                    this.$S_2.appendChild(this.$C_2);
                    Sys.UI.DomElement.setLocation(this.$C_2, $v_2.x, $v_2.y);
                    Mscrm.Register.regUnregDropTargetsForFieldExplorer();
                    break;
                case "fromMainCanvas":
                    RegUnRegDropTargets(GetActiveElement(), Mscrm.FormEditorVariables.currentClassName);
                    this.$S_2.appendChild(this.$C_2);
                    Sys.UI.DomElement.setLocation(this.$C_2, $v_2.x, $v_2.y);
                    break;
                case "fromNavigation":
                    RegUnRegDropTargets(GetActiveElement(), Mscrm.FormEditorVariables.currentClassName);
                    this.$S_2.appendChild(this.$C_2);
                    Sys.UI.DomElement.setLocation(this.$C_2, $v_2.x, $v_2.y);
                    break
                }
                Mscrm.GlobalEvents.set_globalAllowDrag(true);
                Sys.Preview.UI.DragDropManager.startDragDrop(this, this.$C_2, null)
            }
        }
    },
    $1w_2: function($p0) {
        Mscrm.DragDropUtils.dragStarted = true;
        Mscrm.DragDropUtils.dragSelected = this.$B_2;
        $p0.preventDefault()
    },
    $1I_2: function() {
        this.$C_2 = $get("_dragVisual");
        if (!IsNull(this.$C_2)) {
            this.$S_2 = this.$C_2.parentNode;
            this.$S_2.removeChild(this.$C_2)
        }
    },
    get_dragDataType: function() {
        var $v_0 = null;
        if (this.$a_2 === "fromFieldExplorer") $v_0 = "cell";
        else $v_0 = this.$B_2.className;
        return $v_0
    },
    getDragData: function(context) {
        var $v_0 = new Array(2);
        $v_0[0] = this.$B_2;
        $v_0[1] = this.$C_2;
        return $v_0
    },
    get_dragMode: function() { return this.$a_2 },
    onDragStart: function() {
        this.$B_2.className === "ms-crm-Dialog-ListItem-ImportMap" &&
            this.$B_2.getAttribute("type").toString() === "relationship" &&
            Mscrm.Register.registerNavGroupItemsAsDropTarget()
    },
    onDrag: function() {
        if (!IsNull(this.$C_2))
            if (Mscrm.FormEditorVariables
                .fieldExpIsFor ===
                "navigation") Mscrm.ScrollUtils.scrollViewPort($get("formNavigationBar"), 80);
            else Mscrm.ScrollUtils.scrollViewPort(Mscrm.ScrollUtils.$1L(), 20)
    },
    onDragEnd: function(canceled) {
        this.$1I_2();
        Mscrm.DragDropUtils.dragStarted = false;
        window.clearInterval(Mscrm.FormEditorVariables.intervalId);
        Mscrm.GlobalEvents.set_globalAllowDrag(this.$1B_2);
        this.$r_2 = false
    }
};
Mscrm.ScrollUtils = function() {};
Mscrm.ScrollUtils.scrollViewPortInIntervals = function() {
    if (Mscrm.FormEditorVariables
        .fieldExpIsFor ===
        "navigation") Mscrm.ScrollUtils.scrollViewPort($get("formNavigationBar"), 80);
    else Mscrm.ScrollUtils.scrollViewPort(Mscrm.ScrollUtils.$1L(), 20)
};
Mscrm.ScrollUtils.scrollViewPort = function(viewPortContainer, scrollOffset) {
    window.clearInterval(Mscrm.FormEditorVariables.intervalId);
    if (!IsNull(viewPortContainer))
        if (Mscrm.ScrollUtils.$1s(viewPortContainer)) {
            var $v_0 = window._event.clientX, $v_1 = window._event.clientY;
            if ($v_1 - scrollOffset < Sys.UI.DomElement.getLocation(viewPortContainer).y) {
                viewPortContainer.scrollTop = viewPortContainer.scrollTop - 20;
                Mscrm.FormEditorVariables.intervalId = window
                    .setInterval(Mscrm.ScrollUtils.scrollViewPortInIntervals, 100)
            }
            if ($v_1 - scrollOffset > viewPortContainer.clientHeight) {
                viewPortContainer.scrollTop = viewPortContainer.scrollTop + 20;
                Mscrm.FormEditorVariables.intervalId = window
                    .setInterval(Mscrm.ScrollUtils.scrollViewPortInIntervals, 100)
            }
        }
};
Mscrm.ScrollUtils.$1s = function($p0) {
    var $v_0 = false,
        $v_1 = Sys.UI.DomElement.getLocation($p0),
        $v_2 = $p0.clientHeight,
        $v_3 = $p0.clientWidth,
        $v_4 = window._event.clientX,
        $v_5 = window._event.clientY;
    if ($v_4 >= $v_1.x && $v_4 <= $v_1.x + $v_3 && ($v_5 >= $v_1.y && $v_5 <= $v_1.y + $v_2)) $v_0 = true;
    return $v_0
};
Mscrm.ScrollUtils.$1L = function() {
    if (Mscrm.FormEditorVariables.editorType === "dashboardEditor") return $get("editorcontainer");
    return $get("editorDiv")
};
Mscrm.DropTarget = function(dropTarget, from) {
    this.$z_2 = -1;
    Mscrm.DropTarget.initializeBase(this, [dropTarget]);
    this.$1_2 = dropTarget;
    this.$y_2 = from;
    this.$J_2 = "1px dashed #6d6e70";
    this.$O_2 = "red 1px solid";
    this.$y_2 !== "fromFieldExplorer" && this.$1_2 && this.$1X_2()
};
Mscrm.DropTarget.$1u = function($p0, $p1, $p2) {
    for (var $v_0 = false, $v_1 = $p2.$9_0, $v_2 = 1;
        $v_2 <= $p1;
        $v_2++
    ) if ($v_1) $v_1 = XUI.Xml.DomUtils.GetNextSibling($v_1);
    var $v_3 = 1, $v_4 = null;
    if (!IsNull($v_1)) {
        $v_4 = $v_1.attributes.getNamedItem("colspan");
        if (!IsNull($v_4)) $v_3 = parseInt(XUI.Xml.GetText($v_4), 10)
    }
    var $v_5 = null, $v_6 = 0;
    for ($v_2 = $p1; $v_2 < $p0; $v_2++) {
        if (!IsNull($v_5)) {
            $v_4 = $v_5.attributes.getNamedItem("colspan");
            if (!IsNull($v_4)) $v_3 = parseInt(XUI.Xml.GetText($v_4), 10)
        }
        if ($v_1) {
            var $v_7 = XUI.Xml.SelectSingleNode($v_1, "control", null);
            if (XUI.Xml.GetText($v_7.attributes.getNamedItem("id")).startsWith("placeHolder")) {
                if ($v_3 <= ++$v_6) {
                    $v_0 = true;
                    break
                }
            } else {
                $v_5 = $v_1;
                $v_6 = 0
            }
            $v_1 = XUI.Xml.DomUtils.GetNextSibling($v_1)
        }
    }
    return $v_0
};
Mscrm.DropTarget.prototype = {
    $1_2: null,
    $J_2: "",
    $O_2: null,
    $y_2: null,
    $Z_2: false,
    $A_2: true,
    $F_2: true,
    $D_2: null,
    $j_2: true,
    initialize: function() {
        if (this.$1_2) {
            Sys.UI.Behavior.prototype.initialize.call(this);
            Sys.Preview.UI.DragDropManager.registerDropTarget(this)
        }
    },
    dispose: function() {
        Sys.Preview.UI.DragDropManager.unregisterDropTarget(this);
        this.$D_2 = null;
        Sys.UI.Behavior.prototype.dispose.call(this)
    },
    $21_2: function($p0, $p1) {
        var $v_0 = $p0.$8_0.parentNode, $v_1 = null;
        if (this.$A_2) $v_1 = XUI.Xml.DomUtils.GetChildElementAt($v_0, $p1.$0_0.$3_0 + 1);
        else $v_1 = $p1.$9_0;
        $v_0.insertBefore($p0.$9_0, $v_1);
        RefreshFormEditor(4);
        SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor, GetActiveElement())
    },
    $20_2: function($p0, $p1) {
        var $v_0 = XUI.Xml.GetText($p1.$8_0.attributes.getNamedItem("id")),
            $v_1 = Mscrm.DragDropUtils.getSectionsNode($v_0, $p1.$N_0),
            $v_2 = null;
        if (this.$A_2) $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_1, $p1.$0_0.$3_0 + 1);
        else $v_2 = $p1.$9_0;
        var $v_3 = parseInt(XUI.Xml.GetText($p0.$7_0.attributes.getNamedItem("tabColumn")), 10),
            $v_4 = XUI.Xml.GetText($p1.$7_0.attributes.getNamedItem("tabColumn")),
            $v_5 = Mscrm.FormEditorVariables.formXml.createAttribute("tabColumn");
        $v_5.value = $v_4;
        $p0.$7_0.attributes.setNamedItem($v_5);
        var $v_6 = Mscrm.DragDropUtils.getChildNodes($p0.$7_0.parentNode).length;
        $v_1.insertBefore($p0.$7_0, $v_2);
        Mscrm.DragDropUtils.updateHtmlForSection($p0, $p1, this.$A_2);
        if ($v_6 === 1) {
            var $v_7 = $get(XUI.Xml.GetText($p0.$8_0.attributes.getNamedItem("id")));
            AddSection($v_7, $v_3, "11", false, true)
        }
    },
    $1z_2: function($p0, $p1, $p2, $p3, $p4) {
        $p1 = Mscrm.DragDropUtils.createElementObject(this.$1_2);
        if ($p2 === "fromFieldExplorer") {
            var $v_3 = null;
            if ($p4[0].getAttribute("id").toString() === "Spacer") $v_3 = Mscrm.DragDropUtils.createUserSpacerXml();
            else $v_3 = Mscrm.DragDropUtils.createCellNode($p4[0]);
            var $v_4 = XUI.Xml.GetText($v_3.attributes.getNamedItem("id"));
            $p0 = new Mscrm.ElementObject($p1.$8_0,
                $p1.$7_0,
                $p1.$4_0,
                $p1.$E_0,
                $v_3,
                $v_3,
                $v_4,
                "cell",
                $p1.$G_0,
                $p1.$0_0)
        }
        var $v_0 = new Mscrm.Position($p1.$0_0.$3_0 + $p1.$6_0 - 1, $p1.$0_0.$2_0, $p1.$0_0.$2_0),
            $v_1 = new Mscrm.ElementObject($p1.$8_0,
                $p1.$7_0,
                $p1.$4_0,
                $p1.$E_0,
                $p0.$P_0,
                $p0.$9_0,
                $p0.$L_0,
                "cell",
                $p1.$G_0,
                $v_0);
        $p0.$7_0 = $v_1.$7_0;
        var $v_2 = null;
        if (this.$A_2) $v_2 = Mscrm.DragDropUtils.findDropTargets($v_1, $p1.$6_0);
        else $v_2 = Mscrm.DragDropUtils.findDropTargetsInSameRow($p0, $p1);
        Mscrm.DragDropUtils.pushDown($p0, $v_2, $p1, true, this.$A_2);
        Mscrm.DragDropUtils.removeSystemSpacerRows($p1.$4_0);
        return $p0
    },
    $1A_2: function($p0) {
        var $v_0 = Sys.UI.DomElement.getLocation($p0[1]).y,
            $v_1 = Sys.UI.DomElement.getLocation(this.$1_2).y,
            $v_2 = this.$1_2.offsetHeight,
            $v_3 = window._event.offsetY;
        if ($v_0 + $v_3 <= $v_1 + $v_2 / 2 || Mscrm.DragDropUtils.isSystemSpacer(this.$D_2.$9_0)) {
            this.$1_2.style.borderBottom = this.$J_2;
            this.$1_2.style.borderTop = this.$O_2;
            this.$A_2 = false
        } else {
            this.$1_2.style.borderTop = this.$J_2;
            this.$1_2.style.borderBottom = this.$O_2;
            this.$A_2 = true
        }
    },
    $1X_2: function() {
        var $v_0 = null;
        if (this.$1_2.className === "cell" ||
            this.$1_2.className === "iframe" ||
            this.$1_2.className === "subgrid" ||
            this.$1_2.className === "webresource" ||
            this.$1_2.className === "notes" ||
            this.$1_2.className === "quickformcollection" ||
            this.$1_2.className === "bingmap" ||
            this.$1_2.className === "socialInsight" ||
            this.$1_2.className === "orgInsights" ||
            this.$1_2.className === "timercontrol" ||
            this.$1_2.className === "searchwidget" ||
            this.$1_2.className === "referencepanelquickformcollection" ||
            this.$1_2.className === "referencepanelsubgrid" ||
            this.$1_2.className === "interactionwall" ||
            this.$1_2.className === "referencepanelsearchwidget" ||
            this.$1_2.className === "aci") {
            var $v_1 = this.$1_2.getAttribute("id").toString();
            $v_0 = Mscrm.DragDropUtils.getCellNodeFromId($v_1)
        }
        this.$D_2 = Mscrm.DragDropUtils.createElementObject(this.$1_2)
    },
    $1o_2: function($p0) {
        var $v_0 = $p0[0], $v_1 = true;
        this.$F_2 = true;
        var $v_2 = 1, $v_3 = $v_0.getAttribute("colSpan");
        if ($v_3) $v_2 = parseInt($v_3.toString(), 10);
        var $v_4 = 2, $v_5 = this.$D_2.$7_0.attributes.getNamedItem("columns");
        if ($v_5) $v_4 = XUI.Xml.GetText($v_5).length;
        var $v_6 = 1, $v_7 = this.$D_2.$9_0.attributes.getNamedItem("colspan");
        if ($v_7) $v_6 = parseInt(XUI.Xml.GetText($v_7), 10);
        var $v_8 = this.$D_2.$4_0;
        Mscrm.DragDropUtils.addPlaceHolders($v_8);
        if ($v_6 < $v_2)
            if ($v_4 < $v_2 + this.$D_2.$0_0.$2_0 || Mscrm.DropTarget.$1u($v_2, $v_6, this.$D_2)) $v_1 = false;
        this.$F_2 = this.$1H_2($v_1, $p0, $v_2);
        Mscrm.DragDropUtils.removePlaceHolders($v_8);
        return this.$F_2
    },
    $1H_2: function($p0, $p1, $p2) {
        var $v_0 = Sys.UI.DomElement.getLocation($p1[1]).y,
            $v_1 = Sys.UI.DomElement.getLocation(this.$1_2).y,
            $v_2 = this.$1_2.offsetHeight,
            $v_3 = window._event.offsetY,
            $v_4 = Mscrm.DragDropUtils.isSystemSpacer(this.$D_2.$P_0),
            $v_5 = true;
        if (this.$D_2.$0_0
            .$3_0 +
            this.$D_2.$6_0 ===
            Mscrm.DragDropUtils.getChildNodes(this.$D_2.$4_0).length) if ($v_0 + $v_3 > $v_1 + $v_2 / 2) $v_5 = false;
        if ($p0) if ($v_4 || $v_5) if (Mscrm.DragDropUtils.cellCanFitInPreviousRow(this.$D_2, $p2)) $p0 = false;
        return $p0
    },
    get_dropTargetElement: function() { return this.$1_2 },
    $1t_2: function($p0, $p1) {
        if (Mscrm.FormEditorVariables.FormType === "card") {
            if ($p0 !== "fromFieldExplorer")
                if ($p1 && $p1.parentNode && $p1.parentNode.parentNode) {
                    var $v_0 = $p1.parentNode.parentNode.parentNode, $v_1 = null;
                    if (this.$1_2) {
                        if (this.$1_2.className === "section") $v_1 = this.$1_2;
                        else if (this.$1_2
                            .parentNode &&
                            this.$1_2.parentNode.parentNode) $v_1 = this.$1_2.parentNode.parentNode.parentNode;
                        if ($v_1 && $v_0 && $v_1.getAttribute("id").toString() === $v_0.getAttribute("id").toString()
                        ) return false
                    }
                }
            if (this.$1_2.getAttribute("id")) {
                var $v_2 = Mscrm.DragDropUtils.getCellNodeFromId(this.$1_2.getAttribute("id").toString());
                if ($v_2 && $v_2.parentNode && $v_2.parentNode.parentNode) {
                    var $v_3 = $v_2.parentNode.parentNode.parentNode;
                    if ($v_3 && $v_3.attributes.getNamedItem("name") && $p1.getAttribute("datatype")) {
                        var $v_4 = $p1.getAttribute("datatype").toString();
                        return !Mscrm.DragDropUtils.validateSectionForCardForm($v_3, $v_4)
                    }
                }
            }
        }
        return false
    },
    canDrop: function(dragMode, dataType, data) {
        var $v_0 = true;
        if (dataType === "cell" && this.$1t_2(dragMode, data[0])) return false;
        if (dragMode === "fromFieldExplorer" && this.$1_2.className === "section") return $v_0;
        if (data[0] === this.$1_2) return false;
        var $v_1 = Mscrm.DragDropUtils.getCellNodeFromId(this.$1_2.getAttribute("id").toString()), $v_2 = false;
        if ($v_1 &&
            $v_1.parentNode &&
            $v_1.parentNode.parentNode &&
            this.$1_2.getAttribute("name").toString().startsWith("spacer_System_")) {
            var $v_3 = $v_1.parentNode.parentNode.parentNode;
            if ($v_3 && $v_3.attributes.getNamedItem("name")
            ) if (XUI.Xml.GetText($v_3.attributes.getNamedItem("name")).toString().startsWith("ref_pan_")) $v_2 = true
        }
        if ($v_2)
            if (data[0].className === "referencepanelquickformcollection" ||
                data[0].className === "referencepanelsubgrid" ||
                data[0].className === "referencepanelsearchwidget" && data[0] !== this.$1_2) return true;
            else return false;
        switch (this.$1_2.className) {
        case "ms-crm-Tab":
            if (dataType === "ms-crm-Tab" && data[0] !== this.$1_2) $v_0 = true;
            else $v_0 = false;
            break;
        case "section":
            if (dataType === "section" && data[0] !== this.$1_2 ||
            (dataType === "cell" ||
                dataType === "iframe" ||
                dataType === "subgrid" ||
                dataType === "webresource" ||
                dataType === "quickformcollection" ||
                dataType === "bingmap" ||
                dataType === "socialInsight" ||
                dataType === "orgInsights" ||
                dataType === "timercontrol" ||
                dataType === "searchwidget" ||
                dataType === "referencepanelquickformcollection" ||
                dataType === "referencepanelsubgrid" ||
                dataType === "interactionwall" ||
                dataType === "referencepanelsearchwidget" ||
                dataType === "aci")) $v_0 = true;
            else $v_0 = false;
            break;
        case "cell":
        case "iframe":
        case "aci":
        case "subgrid":
        case "webresource":
        case "notes":
        case "quickformcollection":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "orgInsights":
        case "timercontrol":
        case "searchwidget":
        case "powerbitile":
            if (dataType === "cell" ||
                dataType === "iframe" ||
                dataType === "subgrid" ||
                dataType === "webresource" ||
                dataType === "notes" ||
                dataType === "quickformcollection" ||
                dataType === "bingmap" ||
                dataType === "socialInsight" ||
                dataType === "timercontrol" ||
                dataType === "searchwidget" ||
                dataType === "interactionwall" ||
                dataType === "aci" && data[0] !== this.$1_2) $v_0 = true;
            else $v_0 = false;
            break;
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "referencepanelsearchwidget":
            if (dataType === "referencepanelquickformcollection" ||
                dataType === "referencepanelsubgrid" ||
                dataType === "referencepanelsearchwidget" && data[0] !== this.$1_2) $v_0 = true;
            else $v_0 = false;
            break
        }
        return $v_0
    },
    drop: function(dragMode, dataType, data) {
        if (this.$F_2 && !IsNull(this.$D_2) && !IsNull(this.$1_2)) {
            if (data[0].id === this.$1_2.id) return;
            var $v_0 = null, $v_1 = null;
            if (dragMode !== "fromFieldExplorer")
                if (data[0].className === "cell" ||
                    data[0].className === "iframe" ||
                    data[0].className === "subgrid" ||
                    data[0].className === "notes" ||
                    data[0].className === "webresource" ||
                    data[0].className === "quickformcollection" ||
                    data[0].className === "bingmap" ||
                    data[0].className === "socialInsight" ||
                    data[0].className === "orgInsights" ||
                    data[0].className === "timercontrol" ||
                    data[0].className === "searchwidget" ||
                    data[0].className === "referencepanelquickformcollection" ||
                    data[0].className === "referencepanelsubgrid" ||
                    data[0].className === "interactionwall" ||
                    data[0].className === "referencepanelsearchwidget" ||
                    data[0].className === "aci") {
                    var $v_5 = data[0].getAttribute("id").toString(),
                        $v_6 = Mscrm.DragDropUtils.getCellNodeFromId($v_5),
                        $v_7 = $v_6.parentNode.parentNode;
                    Mscrm.FieldPropertiesUtils.handleAutoExpandingFieldForDragDrop($v_6, this.$1_2);
                    Mscrm.DragDropUtils.addPlaceHolders($v_7);
                    $v_0 = Mscrm.DragDropUtils.createElementObject(data[0]);
                    $v_1 = Mscrm.DragDropUtils.createElementObject(data[0]);
                    Mscrm.DragDropUtils.removeElementInFormXml($v_0);
                    Mscrm.DragDropUtils.pullUp($v_0, true, this.$1_2);
                    XUI.Xml.XMLSerializer.serializeToString($v_0.$7_0) !==
                        XUI.Xml.XMLSerializer.serializeToString(this.$D_2.$7_0) &&
                        Mscrm.DragDropUtils.removePlaceHolders($v_7)
                } else $v_0 = Mscrm.DragDropUtils.createElementObject(data[0]);
            var $v_2 = Mscrm.DragDropUtils.createElementObject(this.$1_2);
            switch (dataType) {
            case "ms-crm-Tab":
                this.$21_2($v_0, $v_2);
                break;
            case "section":
                Mscrm.FormEditorVariables.FormType !== "quickCreate" &&
                    Mscrm.FormEditorVariables.FormType !== "card" &&
                    this.$20_2($v_0, $v_2);
                break;
            case "cell":
            case "iframe":
            case "aci":
            case "subgrid":
            case "webresource":
            case "notes":
            case "quickformcollection":
            case "referencepanelquickformcollection":
            case "referencepanelsubgrid":
            case "interactionwall":
            case "bingmap":
            case "socialInsight":
            case "orgInsights":
            case "timercontrol":
            case "searchwidget":
            case "referencepanelsearchwidget":
            case "powerbitile":
                (!$v_0 ||
                        XUI.Xml.XMLSerializer.serializeToString($v_0.$7_0) !==
                        XUI.Xml.XMLSerializer.serializeToString($v_2.$7_0)) &&
                    Mscrm.DragDropUtils.addPlaceHolders($v_2.$4_0);
                $v_0 = this.$1z_2($v_0, $v_2, dragMode, dataType, data);
                Mscrm.DragDropUtils.removePlaceHolders($v_2.$4_0);
                dragMode !== "fromFieldExplorer" && $v_1 && Mscrm.DragDropUtils.removeSystemSpacerRows($v_1.$4_0);
                var $v_3 = data[0].parentNode.parentNode.parentNode, $v_4 = null;
                if (this.$1_2.className === "section") $v_4 = this.$1_2;
                else $v_4 = this.$1_2.parentNode.parentNode.parentNode;
                if (dragMode === "fromFieldExplorer") RefreshSectionHtml($v_4, null, false);
                else if ($v_3 === $v_4) RefreshSectionHtml($v_3, null, false);
                else {
                    RefreshSectionHtml($v_3, null, false);
                    RefreshSectionHtml($v_4, null, false)
                }
                break
            }
            dragMode === "fromFieldExplorer" && RefreshAttributeExplorer();
            if (this.$j_2) {
                var $v_8 = XUI.Xml.GetText($v_0.$9_0.attributes.getNamedItem("id"));
                this.$1_2.style.border = this.$J_2;
                Mscrm.FieldPropertiesUtils.clickControl($v_8, null);
                this.$1_2.style.border = this.$J_2
            }
            Mscrm.FormEditorVariables.fieldExpIsFor === "footer" && $get("footerSection").scrollIntoView(false)
        }
    },
    onDragEnterTarget: function(dragMode, dataType, data) {
        if (!Mscrm.OperationValidator.isOperationValid(1, data[0], this.$1_2, null)) {
            this.$F_2 = false;
            return
        }
        this.$Z_2 = true;
        if (dataType === "cell" ||
            dataType === "iframe" ||
            dataType === "subgrid" ||
            dataType === "webresource" ||
            dataType === "notes" ||
            dataType === "quickformcollection" ||
            dataType === "bingmap" ||
            dataType === "socialInsight" ||
            dataType === "orgInsights" ||
            dataType === "timercontrol" ||
            dataType === "searchwidget" ||
            dataType === "referencepanelquickformcollection" ||
            dataType === "referencepanelsubgrid" ||
            dataType === "interactionwall" ||
            dataType === "referencepanelsearchwidget" ||
            dataType === "aci") {
            if (this.$D_2.$K_0 === "section") {
                Mscrm.Register.registerCellsAsDropTargets(this.$D_2.$L_0);
                Mscrm.FormEditorVariables.cellsFor = Mscrm.FormEditorVariables.fieldExpIsFor;
                this.$F_2 = false;
                return
            }
            if (dragMode !== "fromFieldExplorer")
                if (this.$1o_2(data)) this.$Z_2 = true;
                else this.$Z_2 = false;
            else {
                this.$Z_2 = this.$1H_2(true, data, 1);
                this.$F_2 = this.$Z_2
            }
        }
        var $v_0 = null;
        if (this.$Z_2) {
            var $v_1 = this.$D_2;
            this.$z_2 = $v_1.$0_0.$3_0;
            if ($v_1.$7_0) $v_0 = $v_1.$4_0;
            var $v_2 = 0;
            if ($v_0) $v_2 = Mscrm.DragDropUtils.getChildNodes($v_0).length;
            this.$1_2.style.border = this.$J_2;
            if (this
                .$z_2 +
                this.$D_2.$6_0 ===
                $v_2 ||
                $v_1.$K_0 === "section" ||
                $v_1.$K_0 === "ms-crm-Tab") this.$1A_2(data);
            else {
                this.$1_2.style.borderTop = this.$O_2;
                this.$A_2 = false
            }
        }
    },
    onDragLeaveTarget: function(dragMode, dataType, data) { if (this.$F_2) this.$1_2.style.border = this.$J_2 },
    onDragInTarget: function(dragMode, dataType, data) {
        if (!Mscrm.OperationValidator.isOperationValid(1, data[0], this.$1_2, null)) {
            this.$F_2 = false;
            return
        }
        (this.$1_2.className === "section" || this.$1_2.className === "ms-crm-Tab") && this.$1A_2(data)
    },
    get_belowDropTarget: function() { return this.$A_2 },
    set_belowDropTarget: function(value) {
        this.$A_2 = value;
        return value
    },
    get_canDrop: function() { return this.$F_2 },
    set_canDrop: function(value) {
        this.$F_2 = value;
        return value
    },
    get_clickAfterDrop: function() { return this.$j_2 },
    set_clickAfterDrop: function(value) {
        this.$j_2 = value;
        return value
    }
};
Mscrm.NavigationDropTarget = function(dropTarget) {
    Mscrm.NavigationDropTarget.initializeBase(this, [dropTarget]);
    this.$1_2 = dropTarget;
    this.$J_2 = "1px dashed #6d6e70";
    this.$O_2 = "red 1px solid"
};
Mscrm.NavigationDropTarget.prototype = {
    $1_2: null,
    $J_2: "",
    $O_2: "",
    $A_2: true,
    initialize: function() {
        if (this.$1_2) {
            Sys.UI.Behavior.prototype.initialize.call(this);
            Sys.Preview.UI.DragDropManager.registerDropTarget(this)
        }
    },
    dispose: function() {
        Sys.Preview.UI.DragDropManager.unregisterDropTarget(this);
        this.$1_2 = null;
        Sys.UI.Behavior.prototype.dispose.call(this)
    },
    get_dropTargetElement: function() { return this.$1_2 },
    canDrop: function(dragMode, dataType, data) {
        if (data[0] === this.$1_2) return false;
        else if (dragMode !== "fromFieldExplorer" && data[0].className !== this.$1_2.className ||
            dragMode === "fromFieldExplorer" && data[0].className === this.$1_2.className) return false;
        else return true
    },
    drop: function(dragMode, dataType, data) {
        if (!IsNull(this.$1_2)) {
            var $v_0 = null, $v_1 = null, $v_2 = "";
            $v_1 = Mscrm.FormNavigationUtils.getNavigationBarNode(this.$1_2);
            if (dragMode === "fromFieldExplorer") {
                $v_0 = Mscrm.FormNavigationUtils.getNewRelationshipNode(data[0]);
                Mscrm.FormXmlUtils.addAttribute($v_0,
                    "Sequence",
                    Mscrm.FormXmlUtils.getAttributeValue($v_1, "Sequence"))
            } else {
                $v_0 = Mscrm.FormNavigationUtils.getNavigationBarNode(data[0]);
                if (data[0].className === "navItem") {
                    $v_2 = $v_0.attributes.getNamedItem("Area").nodeValue;
                    var $v_6 = data[0].getAttribute("atype");
                    !IsNull($v_6) &&
                        $v_6.toString() === "navRelations" &&
                        Mscrm.FormXmlUtils.addAttribute($v_0, "dirty", "true");
                    Mscrm.FormXmlUtils.addAttribute($v_0,
                        "Sequence",
                        Mscrm.FormXmlUtils.getAttributeValue($v_1, "Sequence"))
                } else Mscrm.FormXmlUtils.addAttribute($v_0, "dirty", "true")
            }
            this.$1_2.className === "navItem" &&
                Mscrm.FormUtils.addAttribute($v_0, "Area", $v_1.attributes.getNamedItem("Area").nodeValue);
            if (this.$A_2) $v_1.parentNode.insertBefore($v_0, $v_1.nextSibling);
            else $v_1.parentNode.insertBefore($v_0, $v_1);
            this.$1_2.className === "navItem" &&
                Mscrm.FormNavigationUtils
                .resolveSequenceConflictsInNavArea(Mscrm.FormXmlUtils.getAttributeValue($v_0, "Area"));
            !IsNull($v_1.attributes.getNamedItem("isNavSpacer")) && $v_1.parentNode.removeChild($v_1);
            !Mscrm.FormNavigationUtils.getVisibleGroupChildNodes($v_2).length &&
                Mscrm.FormUtils.appendChildToPath("/entity/form/Navigation/NavBar",
                    Mscrm.FormNavigationUtils.createEmptyRelationShipNode($v_2));
            var $v_3 = $get("formNavigationBar").scrollTop;
            RefreshFormEditor(0);
            dragMode === "fromFieldExplorer" && RefreshRelationShipExplorer();
            var $v_4 = $get($v_0.attributes.getNamedItem("Id").nodeValue);
            !IsNull($v_4) && Mscrm.Utilities.click($v_4);
            var $v_5 = $get("formNavigationBar");
            $v_5.scrollTop = $v_3
        }
    },
    onDragEnterTarget: function(dragMode, dataType, data) {},
    onDragLeaveTarget: function(dragMode, dataType, data) {
        if (!IsNull(this.$1_2))
            this.$1_2.style.border = this
                .$J_2
    },
    onDragInTarget: function(dragMode, dataType, data) { this.$1A_2(data) },
    $1A_2: function($p0) {
        var $v_0 = Sys.UI.DomElement.getLocation($p0[1]).y,
            $v_1 = Sys.UI.DomElement.getLocation(this.$1_2).y,
            $v_2 = this.$1_2.offsetHeight,
            $v_3 = window._event.offsetY;
        if ($v_0 + $v_3 <= $v_1 + $v_2 / 2) {
            this.$1_2.style.borderBottom = this.$J_2;
            this.$1_2.style.borderTop = this.$O_2;
            this.$A_2 = false
        } else if (IsNull(XUI.Html.DomUtils.GetNextSibling(this.$1_2))) {
            this.$1_2.style.borderTop = this.$J_2;
            this.$1_2.style.borderBottom = this.$O_2;
            this.$A_2 = true
        } else {
            this.$1_2.style.borderBottom = this.$J_2;
            this.$1_2.style.borderTop = this.$O_2;
            this.$A_2 = false
        }
    },
    get_belowDropTarget: function() { return this.$A_2 },
    set_belowDropTarget: function(value) {
        this.$A_2 = value;
        return value
    }
};
Mscrm.DragModes = function() {};
Mscrm.DragDropUtils = function() {};
Mscrm.DragDropUtils.getControlType = function(activeElement) {
    var $v_0 = -1;
    switch (activeElement.className) {
    case "cell":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "webresource":
    case "subgrid":
    case "notes":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
    case "orgInsights":
        $v_0 = 1;
        break;
    case "crmSection":
    case "section":
        $v_0 = 2;
        break;
    case "ms-crm-Tab":
        $v_0 = 3;
        break;
    case "navItem":
        $v_0 = 4;
        break;
    case "navGroup":
        $v_0 = 6;
        break
    }
    return $v_0
};
Mscrm.DragDropUtils.isNodeLocked = function(node) {
    var $v_0 = false;
    if (node && node.attributes.getNamedItem("locklevel"))
        if (XUI.Xml.GetText(node.attributes.getNamedItem("locklevel")) === "1") $v_0 = true;
    return $v_0
};
Mscrm.DragDropUtils.addEmptyCellsInNewSection = function(sectionNode) {
    var $v_0 = 2;
    if (Mscrm.FormEditorVariables
        .FormType ===
        "quick" ||
        Mscrm.FormEditorVariables.FormType === "quickCreate") $v_0 = 1;
    var $v_1 = sectionNode.attributes.getNamedItem("columns");
    if ($v_1) $v_0 = XUI.Xml.GetText($v_1).length;
    for (var $v_2 = XUI.Xml.SelectSingleNode(sectionNode, "rows", null),
        $v_3 = Mscrm.FormEditorVariables.formXml.createElement("row"),
        $v_4 = 0;
        $v_4 < $v_0;
        $v_4++) {
        var $v_5 = Mscrm.DragDropUtils.$t("spacer_System");
        $v_3.appendChild($v_5)
    }
    $v_2.appendChild($v_3)
};
Mscrm.DragDropUtils.getContainingSection = function(cellId) {
    var $v_0 = "/entity/form/tabs/tab/columns/column/sections/section", $v_1 = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "header":
        $v_1 = Mscrm.DragDropUtils.getHeaderNode();
        break;
    case "footer":
        $v_1 = Mscrm.DragDropUtils.getFooterNode();
        break;
    case "section":
        var $v_2 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            $v_0 + "/rows/row/cell[@id = '" + cellId + "']",
            null);
        $v_1 = $v_2.parentNode.parentNode.parentNode;
        break
    }
    return $v_1
};
Mscrm.DragDropUtils.getActualCell = function(cellNode) {
    var $v_0 = cellNode;
    if (!IsNull(cellNode)) {
        var $v_1 = XUI.Xml.SelectSingleNode(cellNode, "control", null).attributes.getNamedItem("id").nodeValue
                .split("_"),
            $v_2 = $v_1[1];
        $v_0 = Mscrm.DragDropUtils.getCellNodeFromId($v_2)
    }
    return $v_0
};
Mscrm.DragDropUtils.getFirstSectionOfTab = function(tabNode) {
    return Mscrm.DragDropUtils.getFirstChildUnderPath(tabNode, "columns/column/sections/section")
};
Mscrm.DragDropUtils.getFirstCellOfSection = function(sectionNode) {
    return Mscrm.DragDropUtils.getFirstChildUnderPath(sectionNode, "rows/row/cell")
};
Mscrm.DragDropUtils.getLastSectionOfTab = function(tabNode) {
    return Mscrm.DragDropUtils.getLastChildUnderPath(tabNode, "columns/column/sections/section")
};
Mscrm.DragDropUtils.getFirstValidCellOfLastRow = function(sectionNode) {
    var $v_0 = null;
    if (!IsNull(sectionNode)) {
        Mscrm.DragDropUtils.removePlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
        Mscrm.DragDropUtils.addPlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
        var $v_1 = XUI.Xml.SelectNodes(sectionNode, "rows/row", null), $v_2 = $v_1[$v_1.length - 1];
        $v_0 = XUI.Xml.DomUtils.GetFirstChild($v_2);
        if (Mscrm.DragDropUtils.isPlaceHolder($v_0)) $v_0 = Mscrm.DragDropUtils.getActualCell($v_0);
        Mscrm.DragDropUtils.removePlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null))
    }
    return $v_0
};
Mscrm.DragDropUtils.getFirstChildUnderPath = function(node, path) {
    var $v_0 = null;
    if (!IsNull(node)) {
        var $v_1 = XUI.Xml.SelectNodes(node, path, null);
        $v_0 = $v_1[0]
    }
    return $v_0
};
Mscrm.DragDropUtils.getLastChildUnderPath = function(node, path) {
    var $v_0 = null;
    if (!IsNull(node)) {
        var $v_1 = XUI.Xml.SelectNodes(node, path, null);
        $v_0 = $v_1[$v_1.length - 1]
    }
    return $v_0
};
Mscrm.DragDropUtils.getTabColumnOfSection = function(sectionNode) {
    var $v_0 = 0;
    if (!IsNull(sectionNode)) {
        var $v_1 = sectionNode.parentNode.parentNode;
        if (!IsNull(XUI.Xml.DomUtils.GetPrevSibling($v_1))) $v_0 = 1
    }
    return $v_0
};
Mscrm.DragDropUtils.isElementInLastRow = function(element) {
    var $v_0 = false, $v_1 = Mscrm.DragDropUtils.getChildNodes(element.$4_0).length;
    if ($v_1 === element.$6_0 + element.$0_0.$3_0) $v_0 = true;
    return $v_0
};
Mscrm.DragDropUtils.getLastTabOfMainCanvas = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs/tab", null);
    return $v_0[$v_0.length - 1]
};
Mscrm.DragDropUtils.getTabsNode = function() {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs", null)
};
Mscrm.DragDropUtils.getTabNodes = function() {
    return XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs/tab", null)
};
Mscrm.DragDropUtils.getTabNode = function(sTabId) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + sTabId + "']",
        null)
};
Mscrm.DragDropUtils.getSectionsNode = function(sTabId, iTabColumn) {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab[@id = '" + sTabId + "']/columns/column",
        null)[iTabColumn];
    return XUI.Xml.SelectSingleNode($v_0, "sections", null)
};
Mscrm.DragDropUtils.getHeaderNode = function() {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/header", null)
};
Mscrm.DragDropUtils.getFooterNode = function() {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/footer", null)
};
Mscrm.DragDropUtils.getSectionNode = function(sSectionId) {
    var $v_0 = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_0 = "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + sSectionId + "']";
        break;
    case "header":
        $v_0 = "/entity/form/header";
        break;
    case "footer":
        $v_0 = "/entity/form/footer";
        break
    }
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, $v_0, null)
};
Mscrm.DragDropUtils.getRowsNode = function(sSectionName, formXmlPath) {
    var $v_0 = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_0 = "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + sSectionName + "']/rows";
        break;
    case "header":
        $v_0 = "/entity/form/header/rows";
        break;
    case "footer":
        $v_0 = "/entity/form/footer/rows";
        break
    }
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, $v_0, null)
};
Mscrm.DragDropUtils.getRowNode = function(sFieldName) {
    var $v_0 = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_0 = "/entity/form/tabs/tab/columns/column/sections/section/rows";
        break;
    case "header":
        $v_0 = "/entity/form/header/rows";
        break;
    case "footer":
        $v_0 = "/entity/form/footer/rows";
        break
    }
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        $v_0 + "/row[cell/control/@id = '" + sFieldName + "']",
        null)
};
Mscrm.DragDropUtils.getCellNode = function(sFieldName) {
    if (IsNull(Mscrm.FormEditorVariables.formXml)) return null;
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        Mscrm.DragDropUtils.getFormXmlPathTilRowsNode() + "/row/cell[control/@id = '" + sFieldName + "']",
        null)
};
Mscrm.DragDropUtils.getCellNodeFromId = function(Id) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        Mscrm.DragDropUtils.getFormXmlPathTilRowsNode() + "/row/cell[@id = '" + Id + "']",
        null)
};
Mscrm.DragDropUtils.getFormXmlPathTilRowsNode = function() {
    var $v_0 = null;
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_0 = "/entity/form/tabs/tab/columns/column/sections/section/rows";
        break;
    case "header":
        $v_0 = "/entity/form/header/rows";
        break;
    case "footer":
        $v_0 = "/entity/form/footer/rows";
        break
    }
    return $v_0
};
Mscrm.DragDropUtils.isSectionEmpty = function(dropTarget) {
    var $v_0 = Mscrm.DragDropUtils.getRowsNode(dropTarget.getAttribute("id").toString(), null);
    if (XUI.Xml.DomUtils.HasChildElements($v_0)) return false;
    else return true
};
Mscrm.DragDropUtils.removeSystemSpacerRows = function(rowsNode) {
    var $v_0 = Mscrm.DragDropUtils.getChildNodes(rowsNode);
    if ($v_0.length > 1)
        for (var $v_1 = $v_0.length, $v_2 = 1; $v_2 < $v_0.length; $v_2++)
            if (Mscrm.DragDropUtils.allNodesSystemSpacers($v_0[$v_2]) && $v_1 > 0) {
                rowsNode.removeChild($v_0[$v_2]);
                $v_1--
            }
};
Mscrm.DragDropUtils.createNotesNode = function() {
    var $v_0 = Mscrm.FormEditorVariables.formXml.createElement("cell");
    Mscrm.FormXmlUtils.addAttribute($v_0, "id", Mscrm.Utilities.createGuid());
    Mscrm.FormXmlUtils.addAttribute($v_0, "showlabel", "true");
    Mscrm.FormXmlUtils.addAttribute($v_0, "rowspan", 15);
    Mscrm.FormXmlUtils.addAttribute($v_0, "auto", "false");
    var $v_1 = Mscrm.FormEditorVariables.formXml.createElement("labels");
    $v_0.appendChild($v_1);
    var $v_2 = Mscrm.FormEditorVariables.formXml.createElement("label");
    $v_1.appendChild($v_2);
    Mscrm.FormXmlUtils.addAttribute($v_2, "description", window.LOCID_FORMED_NOTES_LABEL);
    var $v_3 = Mscrm.FormEditorVariables.formAccessType === 1030
        ? window.USER_LANGUAGE_CODE.toString()
        : window.ORG_LANGUAGE_CODE.toString();
    Mscrm.FormXmlUtils.addAttribute($v_2, "languagecode", $v_3);
    var $v_4 = Mscrm.FormEditorVariables.formXml.createElement("control");
    $v_0.appendChild($v_4);
    Mscrm.FormXmlUtils.addAttribute($v_4, "id", "notescontrol");
    Mscrm.FormXmlUtils.addAttribute($v_4, "classid", "{06375649-c143-495e-a496-c962e5b4488e}");
    return $v_0
};
Mscrm.DragDropUtils.createCellNode = function(element) {
    var $v_0 = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        $v_1 = Mscrm.FormEditorVariables.formXml.createAttribute("id");
    $v_1.value = Mscrm.Utilities.createGuid();
    $v_0.attributes.setNamedItem($v_1);
    var $v_2 = Mscrm.FormEditorVariables.formXml.createAttribute("showlabel");
    $v_2.value = "true";
    $v_0.attributes.setNamedItem($v_2);
    var $v_3 = Mscrm.FormEditorVariables.formXml.createElement("labels");
    $v_0.appendChild($v_3);
    var $v_4 = Mscrm.FormEditorVariables.formXml.createElement("label");
    $v_3.appendChild($v_4);
    var $v_5 = Mscrm.FormEditorVariables.formXml.createAttribute("description");
    $v_5.value = element.getAttribute("displayname").toString();
    $v_4.attributes.setNamedItem($v_5);
    var $v_6 = Mscrm.FormEditorVariables.formXml.createAttribute("languagecode");
    $v_6.value = element.getAttribute("languageCode").toString();
    $v_4.attributes.setNamedItem($v_6);
    var $v_7 = Mscrm.FormEditorVariables.formXml.createElement("control");
    $v_0.appendChild($v_7);
    var $v_8 = element.getAttribute("dataType").toString(), $v_9 = element.getAttribute("id").toString();
    $v_9 = $v_9.substr(6);
    var $v_A = Mscrm.FormEditorVariables.formXml.createAttribute("datafieldname");
    $v_A.value = $v_9;
    var $v_B = Mscrm.FormEditorVariables.formXml.createAttribute("disabled");
    if (Mscrm.FormEditorVariables.fieldExpIsFor === "footer" ||
        Mscrm.FormEditorVariables
        .fieldExpIsFor ===
        "header" &&
        !EnableRequiredFieldsOnlyInHeader()) $v_B.value = "true";
    else $v_B.value = "false";
    if (Mscrm.FormEditorVariables
        .fieldExpIsFor !==
        "section") $v_9 = Mscrm.FormEditorVariables.fieldExpIsFor + "_" + $v_9;
    var $v_C = Mscrm.FormEditorVariables.formXml.createAttribute("id");
    $v_C.value = $v_9;
    var $v_D = Mscrm.FormEditorVariables.formXml.createAttribute("classid"),
        $v_E = element.getAttribute("format").toString();
    $v_D.value = GetControlClassId($v_8, $v_E);
    $v_7.attributes.setNamedItem($v_C);
    $v_7.attributes.setNamedItem($v_D);
    $v_7.attributes.setNamedItem($v_A);
    $v_7.attributes.setNamedItem($v_B);
    var $v_F = Mscrm.FormEditorVariables.formXml.createAttribute("locklevel");
    if (Mscrm.DependenciesUtils.isControlDependent($v_9, Mscrm.FormEditorVariables.formXml)) $v_F.value = "1";
    else $v_F.value = "0";
    $v_0.attributes.setNamedItem($v_F);
    if (Mscrm.FormEditorVariables.FormType === "mainInteractionCentric" &&
        $v_D.value === "{E0DECE4B-6FC8-4a8f-A065-082708572369}") {
        var $v_G = Mscrm.FormEditorVariables.formXml.createAttribute("rowspan");
        $v_G.value = Mscrm.FormXMlConstants._interactionCentricFormEditorTextAreaRowSpan.toString();
        $v_0.attributes.setNamedItem($v_G)
    }
    return $v_0
};
Mscrm.DragDropUtils.updateHtmlForSection = function(dragObject, dropObject, insertBelow) {
    for (var $v_0 = XUI.Xml.GetText(dragObject.$8_0.attributes.getNamedItem("id")),
        $v_1 = XUI.Xml.GetText(dropObject.$8_0.attributes.getNamedItem("id")),
        $v_2 = XUI.Xml.GetText(dragObject.$7_0.attributes.getNamedItem("id")),
        $v_3 = $get($v_0),
        $v_4 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils
                        .GetChildElementAt(XUI.Html.DomUtils
                            .GetChildElementAt(XUI.Html.DomUtils
                                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_3))),
                                1),
                            1)),
                    dragObject.$N_0))),
        $v_5 = $v_4.childNodes.length,
        $v_6 = null,
        $v_9 = 0;
        $v_9 < $v_5;
        $v_9++) {
        $v_6 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils
                        .GetFirstChild(XUI.Html.DomUtils
                            .GetChildElementAt(XUI.Html.DomUtils
                                .GetFirstChild(XUI.Html.DomUtils
                                    .GetChildElementAt(XUI.Html.DomUtils
                                        .GetChildElementAt(XUI.Html.DomUtils
                                            .GetFirstChild(XUI.Html.DomUtils
                                                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_3))),
                                            1),
                                        1)),
                                dragObject.$N_0))),
                    $v_9)));
        if ($v_6.id === $v_2) break
    }
    if (dragObject.$8_0 !== dropObject.$8_0 || dragObject.$N_0 !== dropObject.$N_0) {
        $v_3 = $get($v_1);
        $v_4 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils
                        .GetChildElementAt(XUI.Html.DomUtils
                            .GetChildElementAt(XUI.Html.DomUtils
                                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_3))),
                                1),
                            1)),
                    dropObject.$N_0)))
    }
    var $v_7 = $v_6.parentNode.parentNode, $v_8 = null;
    if (insertBelow) $v_8 = XUI.Html.DomUtils.GetChildElementAt($v_4, dropObject.$0_0.$3_0 + 1);
    else $v_8 = XUI.Html.DomUtils.GetChildElementAt($v_4, dropObject.$0_0.$3_0);
    $v_4.insertBefore($v_7, $v_8)
};
Mscrm.DragDropUtils.updateHtmlForTab = function(dragObject, dropObject, insertBelow) {
    var $v_0 = XUI.Xml.GetText(dragObject.$8_0.attributes.getNamedItem("id")),
        $v_1 = $get($v_0),
        $v_2 = $v_1.parentNode,
        $v_3 = null;
    if (insertBelow) $v_3 = XUI.Html.DomUtils.GetChildElementAt($v_2, dropObject.$0_0.$3_0 + 1);
    else $v_3 = XUI.Html.DomUtils.GetChildElementAt($v_2, dropObject.$0_0.$3_0);
    $v_2.insertBefore($v_1, $v_3)
};
Mscrm.DragDropUtils.removeElementInFormXml = function(elementObj, isFromRemoval) {
    var $v_0 = XUI.Xml.GetText(elementObj.$9_0.attributes.getNamedItem("id")),
        $v_1 = Mscrm.DragDropUtils.getCellNodeFromId($v_0),
        $v_2 = "";
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.CustomControlMobile") && isFromRemoval) {
        var $v_5 = XUI.Xml.SelectSingleNode($v_1, "control", null);
        if (!IsNull($v_5)) $v_2 = XUI.Xml.GetText($v_5.attributes.getNamedItem("uniqueid"))
    }
    var $v_3 = $v_1.parentNode, $v_4 = $v_3.parentNode;
    $v_3.removeChild($v_1);
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.CustomControlMobile") &&
        isFromRemoval &&
        !isNullOrEmptyString($v_2)) {
        var $v_6 = Mscrm.FormEditorVariables.formXml;
        if (!IsNull($v_6)) {
            var $v_7 = XUI.Xml.SelectSingleNode($v_6, "entity/form/controlDescriptions", null);
            if (!IsNull($v_7)) {
                var $v_8 = XUI.Xml.SelectSingleNode($v_6,
                    "entity/form/controlDescriptions/controlDescription[@forControl='" + $v_2 + "']",
                    null);
                !Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_7.removeChild($v_8)
            }
        }
    }
};
Mscrm.DragDropUtils.addSpacerInFormXml = function(elementObj) {
    var $v_0 = elementObj.$4_0,
        $v_1 = Mscrm.DragDropUtils.getChildNodes($v_0),
        $v_2 = $v_1[elementObj.$0_0.$3_0],
        $v_3 = null;
    if (!$v_1.length) $v_2.appendChild(elementObj.$9_0);
    else {
        $v_3 = $v_1[elementObj.$0_0.$2_0];
        $v_2.insertBefore(elementObj.$9_0, $v_3)
    }
};
Mscrm.DragDropUtils.addElementsInFormXml = function(elementObjs, pos) {
    var $v_0 = elementObjs.length,
        $v_1 = 0,
        $v_2 = true,
        $v_3 = elementObjs[0].$4_0,
        $v_4 = XUI.Xml.DomUtils.GetChildElementAt($v_3, pos.$3_0),
        $v_5 = null,
        $v_6 = Mscrm.DragDropUtils.getChildNodes($v_4);
    if ($v_6.length > 0) {
        $v_2 = false;
        $v_5 = $v_6[pos.$2_0]
    }
    for ($v_1 = 0; $v_1 < $v_0; $v_1++)
        if ($v_2) $v_4.appendChild(elementObjs[$v_1].$9_0);
        else $v_4.insertBefore(elementObjs[$v_1].$9_0, $v_5)
};
Mscrm.DragDropUtils.allNodesSystemSpacers = function(row) { return Mscrm.DragDropUtils.$1G(row, "spacer_System") };
Mscrm.DragDropUtils.allNodesUserSpacers = function(row) { return Mscrm.DragDropUtils.$1G(row, "spacer_User") };
Mscrm.DragDropUtils
    .findElementBelowCurrentElemnt = function(currentElem, firstElem, dragSource, validElementsInPreviousRow) {
        var $v_0 = null, $v_1 = XUI.Xml.DomUtils.GetChildElementAt(currentElem.$4_0, currentElem.$0_0.$3_0 + 1);
        if ($v_1) {
            var $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_1, currentElem.$0_0.$2_0),
                $v_3 = XUI.Xml.GetText($v_2.attributes.getNamedItem("id")),
                $v_4 = $v_2.attributes.getNamedItem("colspan"),
                $v_5 = 1;
            if ($v_4) $v_5 = parseInt(XUI.Xml.GetText($v_4), 10);
            if ($v_2) {
                var $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_2, "control", null).attributes
                        .getNamedItem("id")),
                    $v_7 = false;
                if ($v_6.startsWith("placeHolder"))
                    for (var $v_8 = currentElem.$0_0.$2_0, $v_9 = null, $v_A = $v_8; $v_A >= 0; $v_A--) {
                        var $v_B = $v_A - 1;
                        $v_9 = $v_B >= 0 ? XUI.Xml.DomUtils.GetChildElementAt($v_1, $v_B) : null;
                        if ($v_9) {
                            $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_9, "control", null).attributes
                                .getNamedItem("id"));
                            if ($v_6.startsWith("placeHolder")) {
                                $v_7 = true;
                                continue
                            } else {
                                var $v_C = 1, $v_D = $v_9.attributes.getNamedItem("colspan");
                                if ($v_D) $v_C = parseInt(XUI.Xml.GetText($v_D), 10);
                                if ($v_B + $v_C >= $v_8 + $v_5)
                                    if ($v_B >= dragSource.$0_0.$2_0 &&
                                        $v_C + $v_B <= dragSource.$5_0 + dragSource.$0_0.$2_0 &&
                                        $v_C <= validElementsInPreviousRow) $v_7 = true;
                                    else {
                                        $v_7 = false;
                                        break
                                    }
                                else $v_7 = true
                            }
                        } else $v_7 = true
                    }
                else if ($v_5 + currentElem.$0_0.$2_0 > dragSource.$5_0 + dragSource.$0_0.$2_0) $v_7 = false;
                else $v_7 = true;
                if ($v_7)
                    $v_0 = new Mscrm.ElementObject(currentElem.$8_0,
                        currentElem.$7_0,
                        currentElem.$4_0,
                        currentElem.$E_0,
                        $v_2,
                        $v_2,
                        $v_3,
                        currentElem.$K_0,
                        currentElem.$G_0,
                        null)
            }
        }
        return $v_0
    };
Mscrm.DragDropUtils.findDropTargetsInSameRow = function(dragObject, dropObject) {
    var $v_0 = 1, $v_1 = dragObject.$5_0, $v_2 = dropObject.$5_0, $v_3 = [];
    $v_3[0] = dropObject;
    for (var $v_4 = XUI.Xml.DomUtils.GetChildElementAt(dropObject.$4_0, dropObject.$0_0.$3_0),
        $v_5 = Mscrm.DragDropUtils.getChildNodes($v_4),
        $v_6 = 1;
        $v_6 < dropObject.$5_0;
        $v_6++) {
        var $v_7 = $v_5[dropObject.$0_0.$2_0 + $v_6],
            $v_8 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_7, "control", null).attributes.getNamedItem("id")),
            $v_9 = new Mscrm.Position(dropObject.$0_0.$3_0, dropObject.$0_0.$2_0 + $v_6, dropObject.$0_0.$l_0 + $v_6),
            $v_A = new Mscrm.ElementObject(dropObject.$8_0,
                dropObject.$7_0,
                dropObject.$4_0,
                dropObject.$E_0,
                $v_7,
                $v_7,
                $v_8,
                "cell",
                dropObject.$G_0,
                $v_9);
        $v_3[$v_0++] = $v_A
    }
    while ($v_1 > $v_2) {
        var $v_B = 1, $v_C = XUI.Xml.DomUtils.GetNextSibling(dropObject.$9_0);
        if ($v_C) {
            for (var $v_D = $v_C, $v_E = 1;
                $v_E < dropObject.$5_0;
                $v_E++
            ) $v_C = XUI.Xml.DomUtils.GetNextSibling($v_C);
            if ($v_C) {
                $v_D = $v_C.attributes.getNamedItem("colspan");
                if ($v_D) $v_B = parseInt(XUI.Xml.GetText($v_D), 10);
                $v_5 = Mscrm.DragDropUtils.getChildNodes($v_4);
                for (var $v_F = 0; $v_F < $v_B; $v_F++) {
                    var $v_G = $v_5[dropObject.$0_0.$2_0 + $v_F + 1];
                    if ($v_G) {
                        var $v_H = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_G, "control", null).attributes
                                .getNamedItem("id")),
                            $v_I = new Mscrm.Position(dropObject.$0_0.$3_0,
                                dropObject.$0_0.$2_0 + $v_0,
                                dropObject.$0_0.$l_0 + $v_0),
                            $v_J = new Mscrm.ElementObject(dropObject.$8_0,
                                dropObject.$7_0,
                                dropObject.$4_0,
                                dropObject.$E_0,
                                $v_G,
                                $v_G,
                                $v_H,
                                "cell",
                                dropObject.$G_0,
                                $v_I);
                        $v_3[$v_0++] = $v_J
                    }
                }
            }
            $v_2 += $v_B
        }
    }
    return $v_3
};
Mscrm.DragDropUtils.findDropTargets = function(elemObj, rowSpan) {
    var $v_0 = [], $v_1 = elemObj.$4_0, $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_1, elemObj.$0_0.$3_0 + 1);
    if ($v_2)
        for (var $v_3 = elemObj.$0_0.$2_0,
            $v_4 = elemObj.$5_0,
            $v_5 = Mscrm.DragDropUtils.getChildNodes($v_2),
            $v_7 = 0,
            $v_8 = 0,
            $v_6 = 0;
            $v_6 < $v_5.length;
            $v_6++) {
            var $v_9 = 1, $v_A = $v_5[$v_6].attributes.getNamedItem("colspan");
            if ($v_A) $v_9 = parseInt(XUI.Xml.GetText($v_A), 10);
            $v_7 = $v_6;
            if ($v_3 === $v_7 ||
                $v_3 + $v_4 === $v_7 + $v_9 ||
                $v_3 > $v_7 && $v_3 < $v_7 + $v_9 ||
                $v_3 < $v_7 && $v_3 + $v_4 > $v_7) {
                var $v_B = XUI.Xml.GetText($v_5[$v_6].attributes.getNamedItem("id")),
                    $v_C = new Mscrm.ElementObject(elemObj.$8_0,
                        elemObj.$7_0,
                        elemObj.$4_0,
                        elemObj.$E_0,
                        $v_5[$v_6],
                        $v_5[$v_6],
                        $v_B,
                        "cell",
                        elemObj.$G_0,
                        null);
                if (!Mscrm.DragDropUtils.duplicateExists($v_0, $v_B)) $v_0[$v_8++] = $v_C;
                for (var $v_D = 1; $v_D < $v_9; $v_D++) {
                    $v_B = XUI.Xml.GetText($v_5[++$v_6].attributes.getNamedItem("id"));
                    var $v_E = new Mscrm.Position($v_C.$0_0.$3_0, $v_C.$0_0.$2_0 + $v_D, $v_C.$0_0.$2_0 + $v_D),
                        $v_F = new Mscrm.ElementObject(elemObj.$8_0,
                            elemObj.$7_0,
                            elemObj.$4_0,
                            elemObj.$E_0,
                            $v_5[$v_6],
                            $v_5[$v_6],
                            $v_B,
                            "cell",
                            elemObj.$G_0,
                            $v_E);
                    $v_0[$v_8++] = $v_F
                }
            }
            $v_7++
        }
    return $v_0
};
Mscrm.DragDropUtils.duplicateExists = function(listOfElems, elemId) {
    for (var $v_0 = false, $v_1 = 0; $v_1 < listOfElems.length; $v_1++) {
        var $v_2 = listOfElems[$v_1];
        if ($v_2.$L_0 === elemId) {
            $v_0 = true;
            break
        }
    }
    return $v_0
};
Mscrm.DragDropUtils.getAllElementsToPushDown = function(dropTargets) {
    var $v_0 = [];
    $v_0[0] = dropTargets;
    var $v_1 = 0, $v_2 = dropTargets[0].$4_0, $v_3 = null;
    while (true) {
        $v_3 = [];
        for (var $v_4 = 0, $v_5 = 0; $v_5 < dropTargets.length; $v_5++)
            for (var $v_6 = dropTargets[$v_5], $v_7 = Mscrm.DragDropUtils.findDropTargets($v_6, $v_6.$6_0), $v_8 = 0;
                $v_8 < $v_7.length;
                $v_8++) {
                for (var $v_9 = true, $v_A = 0; $v_A < $v_3.length; $v_A++)
                    if ($v_7[$v_8].$9_0 === $v_3[$v_A].$9_0) {
                        $v_9 = false;
                        break
                    }
                if ($v_9) $v_3[$v_4++] = $v_7[$v_8]
            }
        dropTargets = null;
        dropTargets = $v_3;
        if (!$v_3.length) break;
        else $v_0[++$v_1] = $v_3
    }
    return $v_0
};
Mscrm.DragDropUtils.createEmptyRowsAtEnd = function(rowsNode, rowCount, maxColumns) {
    for (var $v_0 = 0; $v_0 < rowCount; $v_0++) {
        var $v_1 = Mscrm.FormEditorVariables.formXml.createElement("row");
        rowsNode.appendChild($v_1);
        for (var $v_2 = 0; $v_2 < maxColumns; $v_2++) {
            var $v_3 = Mscrm.DragDropUtils.createSystemSpacerXml();
            $v_1.appendChild($v_3)
        }
    }
};
Mscrm.DragDropUtils.insertDropElementsInFormXml = function(dropElemsInRow, rowsDown) {
    for (var $v_0 = dropElemsInRow[0].$4_0,
        $v_1 = dropElemsInRow[0].$0_0.$3_0,
        $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_0, rowsDown + $v_1),
        $v_3 = XUI.Xml.DomUtils.GetChildElementAt($v_0, $v_1),
        $v_4 = 0;
        $v_4 < dropElemsInRow.length;
        $v_4++) {
        var $v_5 = dropElemsInRow[$v_4], $v_6 = XUI.Xml.DomUtils.GetChildElementAt($v_3, $v_5.$0_0.$2_0);
        $v_3.insertBefore(Mscrm.DragDropUtils.createSystemSpacerXml(), $v_6);
        var $v_7 = XUI.Xml.DomUtils.GetChildElementAt($v_2, $v_5.$0_0.$2_0);
        if (!IsNull($v_7)) {
            $v_2.insertBefore($v_6, $v_7);
            $v_2.removeChild($v_7)
        }
    }
};
Mscrm.DragDropUtils.pushDown2 = function(dropSource,
    dropTargets,
    originalDropObject,
    insertDragSource,
    dropPointColPos,
    dropPointRowPos) {
    if (dropTargets.length > 0) {
        if (!Mscrm.DragDropUtils.$1Z(dropSource, dropTargets, insertDragSource)) {
            var $v_0 = Mscrm.DragDropUtils.getAllElementsToPushDown(dropTargets),
                $v_1 = dropTargets[0].$4_0,
                $v_2 = 2,
                $v_3 = dropTargets[0].$7_0.attributes.getNamedItem("columns");
            if ($v_3) $v_2 = XUI.Xml.GetText($v_3).length;
            Mscrm.DragDropUtils.createEmptyRowsAtEnd($v_1, dropSource.$6_0, $v_2);
            var $v_4 = $v_0.length - 1;
            while ($v_4 >= 0) {
                var $v_8 = $v_0[$v_4];
                Mscrm.DragDropUtils.insertDropElementsInFormXml($v_8, dropSource.$6_0);
                $v_4--
            }
            for (var $v_5 = dropTargets[0], $v_6 = $v_5.$0_0.$3_0, $v_7 = dropPointColPos, $v_9 = 0;
                $v_9 < dropSource.$6_0;
                $v_9++)
                for (var $v_A = XUI.Xml.DomUtils.GetChildElementAt($v_1, $v_6 + $v_9), $v_B = 0;
                    $v_B < dropSource.$5_0;
                    $v_B++) {
                    var $v_C = XUI.Xml.DomUtils.GetChildElementAt($v_A, $v_7);
                    $v_A.removeChild($v_C)
                }
            if (insertDragSource) {
                var $v_D = XUI.Xml.DomUtils.GetChildElementAt($v_1, dropPointRowPos),
                    $v_E = XUI.Xml.DomUtils.GetChildElementAt($v_D, dropPointColPos);
                $v_D.insertBefore(dropSource.$9_0, $v_E)
            }
        }
    } else {
        var $v_F = originalDropObject.$4_0, $v_G = 2, $v_H = originalDropObject.$7_0.attributes.getNamedItem("columns");
        if ($v_H) $v_G = XUI.Xml.GetText($v_H).length;
        for (var $v_I = 0; $v_I < dropSource.$6_0; $v_I++) {
            for (var $v_J = Mscrm.FormEditorVariables.formXml
                         .createElement("row"),
                $v_K = 0;
                $v_K < $v_G;
                $v_K++) $v_J.appendChild(Mscrm.DragDropUtils.createSystemSpacerXml());
            $v_F.appendChild($v_J)
        }
        for (var $v_L = 0; $v_L < dropSource.$6_0; $v_L++)
            for (var $v_M = XUI.Xml.DomUtils
                         .GetChildElementAt($v_F, originalDropObject.$0_0.$3_0 + originalDropObject.$6_0 + $v_L),
                $v_N = 0;
                $v_N < dropSource.$5_0;
                $v_N++) $v_M.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_M));
        if (insertDragSource) {
            var $v_O = XUI.Xml.DomUtils.GetChildElementAt($v_F, originalDropObject.$0_0.$3_0 + originalDropObject.$6_0),
                $v_P = XUI.Xml.DomUtils.GetChildElementAt($v_O, originalDropObject.$0_0.$2_0);
            $v_O.insertBefore(dropSource.$9_0, $v_P)
        }
    }
};
Mscrm.DragDropUtils
    .pushDown = function(dropSource, dropTargets, originalDropObject, insertDragSource, belowDropTarget) {
        var $v_0 = originalDropObject.$0_0.$3_0;
        if (belowDropTarget) $v_0 += originalDropObject.$6_0;
        Mscrm.DragDropUtils.pushDown2(dropSource,
            dropTargets,
            originalDropObject,
            insertDragSource,
            originalDropObject.$0_0.$2_0,
            $v_0)
    };
Mscrm.DragDropUtils.createSystemSpacerXml = function() {
    var $v_0 = null;
    $v_0 = Mscrm.DragDropUtils.$t("spacer_System");
    return $v_0
};
Mscrm.DragDropUtils.createUserSpacerXml = function() {
    var $v_0 = null;
    $v_0 = Mscrm.DragDropUtils.$t("spacer_User");
    return $v_0
};
Mscrm.DragDropUtils.addPlaceHoldersInForm = function(formPart) {
    for (var $v_0 = Mscrm.DragDropUtils
                 .getRowsNodeList(formPart),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) Mscrm.DragDropUtils.addPlaceHolders($v_0[$v_1])
};
Mscrm.DragDropUtils.removePlaceHoldersFromForm = function(formPart) {
    for (var $v_0 = Mscrm.DragDropUtils
                 .getRowsNodeList(formPart),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) Mscrm.DragDropUtils.removePlaceHolders($v_0[$v_1])
};
Mscrm.DragDropUtils.getRowsNodeList = function(formPart) {
    var $v_0 = null;
    switch (formPart) {
    case "header":
        $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/header/rows", null);
        break;
    case "footer":
        $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/footer/rows", null);
        break;
    case "section":
        $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows",
            null);
        break
    }
    return $v_0
};
Mscrm.DragDropUtils.removePlaceHolders = function(rowsNode) {
    XUI.Xml.DomUtils.ForEachChild(rowsNode,
        function($p1_0) {
            var $v_0 = $p1_0, $v_1 = null, $v_2 = null, $v_3 = [], $v_4 = 0;
            XUI.Xml.DomUtils.ForEachChild($v_0,
                function($p2_0) {
                    $v_1 = $p2_0;
                    $v_2 = XUI.Xml.SelectSingleNode($v_1, "control", null).attributes.getNamedItem("id");
                    if (XUI.Xml.GetText($v_2).startsWith("placeHolder")) {
                        $v_3[$v_4] = $v_1;
                        $v_4++
                    }
                    return false
                });
            for (var $v_5 = 0; $v_5 < $v_4; $v_5++) $v_0.removeChild($v_3[$v_5]);
            return false
        })
};
Mscrm.DragDropUtils.addPlaceHolders = function(rowsNode) {
    Mscrm.DragDropUtils.removePlaceHolders(rowsNode);
    for (var $v_0 = Mscrm.FormUtils.getAttributeValue(rowsNode.parentNode, 3),
        $v_1 = Mscrm.DragDropUtils.getChildNodes(rowsNode),
        $v_2 = 0;
        $v_2 < $v_0;
        $v_2++)
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = XUI.Xml.SelectNodes($v_1[$v_3], "cell", null)[$v_2];
            !IsNull($v_4) &&
                !Mscrm.DragDropUtils.isPlaceHolder($v_4) &&
                $v_4.nodeType !== 3 &&
                Mscrm.DragDropUtils.$1p($v_4, $v_2)
        }
};
Mscrm.DragDropUtils.getConsecutiveSpacerCountFromCell = function(cellNode) {
    var $v_0 = 0;
    while (!IsNull(cellNode) && Mscrm.DragDropUtils.isSystemSpacer(cellNode)) {
        $v_0++;
        cellNode = XUI.Xml.DomUtils.GetNextSibling(cellNode)
    }
    return $v_0
};
Mscrm.DragDropUtils.getColumPositionInFormXml = function(cellNode) {
    var $v_0 = -1;
    if (!IsNull(cellNode)) {
        var $v_1 = Mscrm.FormXmlUtils.getAttributeValue(cellNode, "id"), $v_2 = cellNode.parentNode, $v_3 = 0;
        XUI.Xml.DomUtils.ForEachChild($v_2,
            function($p1_0) {
                var $v_4 = $p1_0;
                if ($v_1 === Mscrm.FormXmlUtils.getAttributeValue($v_4, "id")) {
                    $v_0 = $v_3;
                    return true
                }
                $v_3++;
                return false
            })
    }
    return $v_0
};
Mscrm.DragDropUtils.pullUp = function(dropSource, bInsertSpacers, dropTargetDom) {
    var $v_0 = dropSource.cloneObject(), $v_1 = true, $v_2 = Mscrm.DragDropUtils.getCellNodeFromId(dropSource.$L_0);
    if (!IsNull($v_2)) $v_1 = false;
    var $v_3 = Mscrm.DragDropUtils.getSpacersCountAfterCell($v_0, dropTargetDom, $v_1);
    $v_0.$5_0 += $v_3;
    bInsertSpacers && Mscrm.DragDropUtils.$1r(dropSource);
    for (var $v_4 = Mscrm.DragDropUtils.$1b($v_0), $v_5 = dropSource.$4_0, $v_6 = 0; $v_6 < $v_4.length; $v_6++)
        for (var $v_7 = $v_4[$v_6], $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
            var $v_9 = $v_7[$v_8];
            Mscrm.DragDropUtils.$1q($v_9);
            var $v_A = XUI.Xml.DomUtils.GetChildElementAt($v_5, $v_9.$0_0.$3_0 - dropSource.$6_0);
            if ($v_A) {
                var $v_B = XUI.Xml.DomUtils.GetChildElementAt($v_A, $v_9.$0_0.$2_0);
                $v_A.insertBefore($v_9.$9_0, $v_B);
                $v_A.removeChild($v_B)
            }
        }
};
Mscrm.DragDropUtils.pullUpIfRequired = function(dragSource) {
    var $v_0 = dragSource.$4_0,
        $v_1 = dragSource.$0_0.$3_0 - 1,
        $v_2 = $v_1 >= 0 ? XUI.Xml.DomUtils.GetChildElementAt($v_0, $v_1) : null,
        $v_3 = null,
        $v_4 = dragSource.$0_0.$2_0,
        $v_5 = dragSource.$0_0.$3_0,
        $v_6 = $v_5;
    while ($v_2) {
        $v_6--;
        for (var $v_7 = $v_4, $v_8 = 0, $v_9 = 0, $v_A = false, $v_9 = 0; $v_9 < dragSource.$5_0; $v_9++) {
            Mscrm.DragDropUtils.addPlaceHolders(dragSource.$4_0);
            $v_3 = XUI.Xml.DomUtils.GetChildElementAt($v_2, $v_4 + $v_9);
            if ($v_3) {
                var $v_B = XUI.Xml.SelectSingleNode($v_3, "control/@id", null);
                if ($v_B && XUI.Xml.GetText($v_B).startsWith("spacer_System")) $v_8++;
                else if ($v_8 > 0) {
                    var $v_C = new Mscrm.ElementObject(dragSource.$8_0,
                        dragSource.$7_0,
                        dragSource.$4_0,
                        $v_2,
                        $v_3,
                        $v_3,
                        XUI.Xml.GetText($v_3.attributes.getNamedItem("id")),
                        dragSource.$K_0,
                        dragSource.$G_0,
                        dragSource.$0_0);
                    $v_C.$6_0 = 1;
                    $v_C.$5_0 = $v_8;
                    $v_C.$0_0.$3_0 = $v_6;
                    $v_C.$0_0.$2_0 = $v_9 - $v_8 + $v_4;
                    Mscrm.DragDropUtils.pullUp($v_C, false, null);
                    $v_A = true;
                    $v_8 = 0
                }
            }
            Mscrm.DragDropUtils.removePlaceHolders(dragSource.$4_0)
        }
        if ($v_3 && $v_8 > 0) {
            var $v_D = new Mscrm.ElementObject(dragSource.$8_0,
                dragSource.$7_0,
                dragSource.$4_0,
                $v_2,
                $v_3,
                $v_3,
                XUI.Xml.GetText($v_3.attributes.getNamedItem("id")),
                dragSource.$K_0,
                dragSource.$G_0,
                dragSource.$0_0);
            $v_D.$6_0 = 1;
            $v_D.$5_0 = $v_8;
            $v_D.$0_0.$3_0 = $v_6;
            $v_D.$0_0.$2_0 = $v_9 - $v_8 + $v_4;
            Mscrm.DragDropUtils.addPlaceHolders(dragSource.$4_0);
            Mscrm.DragDropUtils.pullUp($v_D, false, null);
            Mscrm.DragDropUtils.removePlaceHolders(dragSource.$4_0);
            $v_A = true
        }
        if (!$v_A) break;
        $v_2 = XUI.Xml.DomUtils.GetPrevSibling($v_2)
    }
};
Mscrm.DragDropUtils.getSpacersCountAfterCell = function(elemObj, dropTargetDom, elemRemoved) {
    var $v_0 = null;
    if (!IsNull(dropTargetDom)) $v_0 = dropTargetDom.id;
    var $v_1 = elemObj.$E_0, $v_2 = elemObj.$0_0.$2_0 + elemObj.$5_0 - 1;
    if (!elemRemoved) $v_2 = elemObj.$0_0.$2_0 + elemObj.$5_0;
    for (var $v_3 = 0, $v_4 = 0, $v_5 = 0; $v_5 < elemObj.$6_0; $v_5++) {
        var $v_6 = XUI.Xml.DomUtils.GetChildElementAt($v_1, $v_2);
        while (!IsNull($v_6)) {
            var $v_7 = XUI.Xml.GetText($v_6.attributes.getNamedItem("id"));
            if (!Mscrm.DragDropUtils.isSystemSpacer($v_6) || $v_7 === $v_0) break;
            else {
                $v_3++;
                $v_6 = XUI.Xml.DomUtils.GetNextSibling($v_6)
            }
        }
        if (!$v_5) $v_4 = $v_3;
        else if ($v_4 >= $v_3) $v_4 = $v_3;
        $v_1 = XUI.Xml.DomUtils.GetNextSibling($v_1);
        $v_2 = elemObj.$0_0.$2_0 + elemObj.$5_0;
        $v_3 = 0
    }
    return $v_4
};
Mscrm.DragDropUtils.cellCanFitInPreviousRow = function(elemToCheck, colsRequired) {
    var $v_0 = false,
        $v_1 = elemToCheck.$4_0,
        $v_2 = !elemToCheck.$0_0.$3_0 ? null : XUI.Xml.DomUtils.GetChildElementAt($v_1, elemToCheck.$0_0.$3_0 - 1),
        $v_3 = 0,
        $v_4 = null;
    if ($v_2)
        for (var $v_5 = 0; $v_5 < colsRequired; $v_5++) {
            $v_4 = XUI.Xml.DomUtils.GetChildElementAt($v_2, elemToCheck.$0_0.$2_0 + $v_5);
            if ($v_4 && Mscrm.DragDropUtils.isSystemSpacer($v_4)) {
                $v_3++;
                if ($v_3 >= colsRequired) {
                    $v_0 = true;
                    break
                }
            } else break
        }
    return $v_0
};
Mscrm.DragDropUtils.createElementObject = function(domElem) {
    var $v_0 = null,
        $v_1 = null,
        $v_2 = null,
        $v_3 = null,
        $v_4 = null,
        $v_5 = null,
        $v_6 = null,
        $v_7 = null,
        $v_8 = null,
        $v_9 = domElem.getAttribute("id").toString();
    $v_6 = $v_9;
    $v_7 = domElem.className;
    switch ($v_7) {
    case "ms-crm-Tab":
        $v_0 = Mscrm.DragDropUtils.getTabNode($v_6);
        $v_3 = $v_0;
        break;
    case "section":
        $v_1 = Mscrm.DragDropUtils.getSectionNode($v_6);
        var $v_A = domElem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.parentNode.parentNode.parentNode;
        $v_9 = $v_A.getAttribute("id").toString();
        $v_0 = Mscrm.DragDropUtils.getTabNode($v_9);
        var $v_B = null;
        switch (domElem.className) {
        case "section":
            $v_B = "/entity/form/tabs/tab/columns/column/sections/section/rows";
            break;
        case "header":
            $v_B = "/entity/form/header/rows";
            break;
        case "footer":
            $v_B = "/entity/form/footer/rows";
            break
        }
        $v_4 = Mscrm.DragDropUtils.getRowsNode(domElem.getAttribute("id").toString(), $v_B);
        $v_3 = $v_1;
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "notes":
    case "subgrid":
    case "webresource":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "orgInsights":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
        var $v_C = domElem.parentNode.parentNode.parentNode;
        $v_9 = $v_C.getAttribute("id").toString();
        var $v_D = domElem.parentNode.parentNode.parentNode.className, $v_E = null;
        switch ($v_D) {
        case "section":
            $v_1 = Mscrm.DragDropUtils.getSectionNode($v_9);
            $v_0 = $v_1.parentNode.parentNode.parentNode.parentNode;
            $v_E = "/entity/form/tabs/tab/columns/column/sections/section/rows";
            $v_8 = "section";
            break;
        case "header":
            $v_1 = Mscrm.DragDropUtils.getHeaderNode();
            $v_E = "/entity/form/header/rows";
            $v_8 = "header";
            break;
        case "footer":
            $v_1 = Mscrm.DragDropUtils.getFooterNode();
            $v_E = "/entity/form/footer/rows";
            $v_8 = "footer";
            break
        }
        if ($v_D !== "section") $v_9 = null;
        $v_4 = Mscrm.DragDropUtils.getRowsNode($v_9, $v_E);
        $v_2 = Mscrm.DragDropUtils.getCellNodeFromId(domElem.getAttribute("id").toString());
        $v_3 = $v_2;
        $v_5 = $v_2.parentNode;
        break
    }
    var $v_F = new Mscrm.ElementObject($v_0, $v_1, $v_4, $v_5, $v_2, $v_3, $v_6, $v_7, $v_8, null);
    return $v_F
};
Mscrm.DragDropUtils.validateSectionForCardForm = function(tempSecNode, dataType) {
    if (tempSecNode && dataType && tempSecNode.attributes.getNamedItem("name")) {
        var $v_0 = XUI.Xml.GetText(tempSecNode.attributes.getNamedItem("name")).toString();
        if ($v_0
            .startsWith("Color Strip") ||
            $v_0.startsWith("ColorStrip"))
            if (dataType !== "picklist" && dataType !== "boolean" && dataType !== "status") return false;
        var $v_1 = XUI.Xml.SelectNodes(tempSecNode,
                "rows/row/cell/control[not(starts-with(@id, 'spacer_System_'))]",
                null),
            $v_2 = 0;
        if ($v_1) $v_2 = $v_1.length;
        if (($v_0.startsWith("Color Strip") || $v_0.startsWith("ColorStrip")) && $v_2 >= 1) return false;
        else if ($v_2 >= 4) return false;
        return true
    }
    return false
};
Mscrm.DragDropUtils.$1p = function($p0, $p1) {
    for (var $v_0 = Mscrm.FormUtils.getAttributeValue($p0, 1),
        $v_1 = Mscrm.FormUtils.getAttributeValue($p0, 2),
        $v_2 = $p0.parentNode,
        $v_3 = 0;
        $v_3 < $v_1;
        $v_3++) {
        for (var $v_4 = 0; $v_4 < $v_0; $v_4++)
            if (!$v_3 && !$v_4) continue;
            else {
                var $v_5 = $p0.attributes.getNamedItem("id").nodeValue,
                    $v_6 = Mscrm.DragDropUtils.$t("placeHolder_" + $v_5);
                if ($v_2) {
                    var $v_7 = XUI.Xml.DomUtils.GetChildElementAt($v_2, $p1 + $v_4);
                    $v_2.insertBefore($v_6, $v_7)
                }
            }
        if ($v_2) $v_2 = XUI.Xml.DomUtils.GetNextSibling($v_2)
    }
};
Mscrm.DragDropUtils.$1b = function($p0) {
    for (var $v_0 = [],
        $v_1 = null,
        $v_2 = 0,
        $v_3 = [],
        $v_4 = $p0.$4_0,
        $v_5 = XUI.Xml.DomUtils.GetChildElementAt($v_4, $p0.$0_0.$3_0 + $p0.$6_0 - 1),
        $v_6 = null,
        $v_7 = "",
        $v_8 = 0,
        $v_9 = 0;
        $v_9 < $p0.$5_0;
        $v_9++) {
        $v_6 = XUI.Xml.DomUtils.GetChildElementAt($v_5, $p0.$0_0.$2_0 + $v_9);
        $v_7 = XUI.Xml.GetText($v_6.attributes.getNamedItem("id"));
        if (!$v_7.startsWith("placeHolder")) {
            var $v_A = new Mscrm.ElementObject($p0.$8_0,
                $p0.$7_0,
                $p0.$4_0,
                $p0.$E_0,
                $v_6,
                $v_6,
                $v_7,
                $p0.$K_0,
                $p0.$G_0,
                null);
            $v_3[$v_8++] = $v_A
        }
    }
    while (true) {
        $v_1 = [];
        for (var $v_B = 0, $v_C = 0; $v_C < $v_3.length; $v_C++) {
            var $v_D = Mscrm.DragDropUtils.findElementBelowCurrentElemnt($v_3[$v_C], $v_3[0], $p0, $v_3.length);
            if ($v_D) $v_1[$v_B++] = $v_D
        }
        if (!$v_1.length) break;
        else {
            $v_3 = null;
            $v_3 = $v_1;
            $v_0[$v_2++] = $v_1
        }
    }
    return $v_0
};
Mscrm.DragDropUtils.$1q = function($p0) {
    var $v_0 = XUI.Xml.DomUtils.GetChildElementAt($p0.$4_0, $p0.$0_0.$3_0);
    if ($v_0) {
        var $v_1 = XUI.Xml.DomUtils.GetChildElementAt($v_0, $p0.$0_0.$2_0);
        $v_0.insertBefore(Mscrm.DragDropUtils.createSystemSpacerXml(), $v_1)
    }
};
Mscrm.DragDropUtils.$1r = function($p0) {
    for (var $v_0 = 0; $v_0 < $p0.$6_0; $v_0++)
        for (var $v_1 = XUI.Xml.DomUtils.GetChildElementAt($p0.$4_0, $p0.$0_0.$3_0 + $v_0), $v_2 = 0;
            $v_2 < $p0.$5_0;
            $v_2++) {
            var $v_3 = XUI.Xml.DomUtils.GetChildElementAt($v_1, $p0.$0_0.$2_0 + $v_2);
            $v_1.insertBefore(Mscrm.DragDropUtils.createSystemSpacerXml(), $v_3);
            if (Mscrm.DragDropUtils.isPlaceHolder($v_3)) {
                var $v_4 = Mscrm.DragDropUtils.getContainingCellForPlaceHolder($v_3);
                (IsNull($v_4) || XUI.Xml.GetText($v_4.attributes.getNamedItem("id")) === $p0.$L_0) &&
                    $v_1.removeChild($v_3)
            }
        }
};
Mscrm.DragDropUtils.isSystemSpacer = function(cellNode) {
    var $v_0 = false;
    if (cellNode) {
        var $v_1 = XUI.Xml.SelectSingleNode(cellNode, "control/@id", null);
        if ($v_1 && XUI.Xml.GetText($v_1).startsWith("spacer_System")) $v_0 = true
    }
    return $v_0
};
Mscrm.DragDropUtils.isPlaceHolder = function(cellNode) {
    var $v_0 = false;
    if (!IsNull(cellNode)) {
        var $v_1 = XUI.Xml.SelectSingleNode(cellNode, "control/@id", null);
        if (!IsNull($v_1) && XUI.Xml.GetText($v_1).startsWith("placeHolder")) $v_0 = true
    }
    return $v_0
};
Mscrm.DragDropUtils.getContainingCellForPlaceHolder = function(palceHolderCell) {
    var $v_0 = null;
    if (!IsNull(palceHolderCell)) {
        var $v_1 = palceHolderCell.parentNode.parentNode,
            $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(palceHolderCell, "control/@id", null)).substr(12, 38);
        $v_0 = XUI.Xml.SelectSingleNode($v_1, "row/cell[@id='" + $v_2 + "']", null)
    }
    return $v_0
};
Mscrm.DragDropUtils.getElementInSection = function(rowsNode, elemPosition) {
    var $v_0 = null, $v_1 = XUI.Xml.DomUtils.GetChildElementAt(rowsNode, elemPosition.$3_0);
    if ($v_1) $v_0 = XUI.Xml.DomUtils.GetChildElementAt($v_1, elemPosition.$2_0);
    return $v_0
};
Mscrm.DragDropUtils.$1Z = function($p0, $p1, $p2) {
    for (var $v_0 = false,
        $v_1 = $p1[0],
        $v_2 = $v_1.$4_0,
        $v_3 = XUI.Xml.DomUtils.GetChildElementAt($v_2, $v_1.$0_0.$3_0),
        $v_4 = $v_3,
        $v_5 = $p0.$6_0 * $p0.$5_0,
        $v_6 = 0,
        $v_7 = null,
        $v_8 = null,
        $v_9 = false,
        $v_A = 0;
        $v_A < $p0.$6_0;
        $v_A++) {
        if ($v_4) {
            for (var $v_B = 0; $v_B < $p0.$5_0; $v_B++) {
                $v_7 = XUI.Xml.DomUtils.GetChildElementAt($v_4, $v_1.$0_0.$2_0 + $v_B);
                if (!$v_7) {
                    $v_9 = true;
                    break
                }
                $v_8 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_7, "control", null).attributes.getNamedItem("id"));
                if ($v_8.startsWith("spacer_System")) $v_6++
            }
            $v_4 = XUI.Xml.DomUtils.GetNextSibling($v_4)
        }
        if ($v_9) break
    }
    if ($v_6 >= $v_5) {
        $v_4 = $v_3;
        for (var $v_C = 0; $v_C < $p0.$6_0; $v_C++)
            if ($v_4) {
                for (var $v_D = 0; $v_D < $p0.$5_0; $v_D++) {
                    $v_7 = XUI.Xml.DomUtils.GetChildElementAt($v_4, $v_1.$0_0.$2_0);
                    $v_4.removeChild($v_7)
                }
                $v_4 = XUI.Xml.DomUtils.GetNextSibling($v_4)
            }
        if ($p2) {
            var $v_E = XUI.Xml.DomUtils.GetChildElementAt($v_3, $v_1.$0_0.$2_0);
            $v_3.insertBefore($p0.$9_0, $v_E)
        }
        $v_0 = true
    }
    return $v_0
};
Mscrm.DragDropUtils.$1G = function($p0, $p1) {
    var $v_0 = 2, $v_1 = $p0.parentNode.parentNode.attributes.getNamedItem("columns");
    if ($v_1) $v_0 = XUI.Xml.GetText($v_1).length;
    var $v_2 = false, $v_3 = Mscrm.DragDropUtils.getChildNodes($p0), $v_4 = 0, $v_5 = null;
    if ($v_0 === $v_3.length)
        for ($v_4 = 0; $v_4 < $v_3.length; $v_4++) {
            $v_2 = true;
            $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_3[$v_4], "control", null).attributes.getNamedItem("id"));
            if (!$v_5.startsWith($p1)) {
                $v_2 = false;
                break
            }
        }
    return $v_2
};
Mscrm.DragDropUtils.$t = function($p0) {
    var $v_0 = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        $v_1 = Mscrm.FormEditorVariables.formXml.createAttribute("id");
    $v_1.value = Mscrm.Utilities.createGuid();
    Mscrm.DragDropUtils._spacerNumber++;
    $v_0.attributes.setNamedItem($v_1);
    var $v_2 = Mscrm.FormEditorVariables.formXml.createAttribute("showlabel");
    $v_2.value = "false";
    $v_0.attributes.setNamedItem($v_2);
    var $v_3 = Mscrm.FormEditorVariables.formXml.createElement("labels");
    $v_0.appendChild($v_3);
    var $v_4 = Mscrm.FormEditorVariables.formXml.createElement("control"),
        $v_5 = Mscrm.FormEditorVariables.formXml.createAttribute("id");
    $v_5.value = $p0 + "_" + Mscrm.Utilities.createGuid();
    $v_4.attributes.setNamedItem($v_5);
    $v_0.appendChild($v_4);
    return $v_0
};
Mscrm.DragDropUtils.getChildNodes = function(xmlNode) {
    if (IsNull(xmlNode)) return [];
    var $v_0 = [], $v_1 = 0;
    XUI.Xml.DomUtils.ForEachChild(xmlNode,
        function($p1_0) {
            $v_0[$v_1] = $p1_0;
            $v_1++;
            return false
        });
    return $v_0
};
Mscrm.BusinessRulesExplorer = function() {};
Mscrm.BusinessRulesExplorer.openBusinessRuleEditorForCreate = function(templateId) {
    var $v_0 = window.APP_SOLUTION_ID,
        $v_1 = GetObjectTypeCode(),
        $v_2 = Mscrm.FormEditorVariables.currentFormId,
        $v_3 = Mscrm.BusinessRulesExplorer.$1J(),
        $v_4;
    $v_3.get_query()["appSolutionId"] = $v_0;
    $v_3.get_query()["otc"] = $v_1;
    $v_3.get_query()["templateId"] = templateId;
    $v_3.get_query()["formId"] = $v_2;
    $v_3.get_query()["BRlaunchpoint"] = "BRExplorer";
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner")) {
        $v_4 = openStdWin($v_3,
            "PortableBusinessLogicEditor",
            window.screen.availWidth,
            window.screen.availHeight,
            null);
        $v_4.moveTo(0, 0);
        $v_4.resizeTo(window.screen.availWidth, window.screen.availHeight)
    } else $v_4 = openStdWin($v_3, "PortableBusinessLogicEditor", 1024, 768, null);
    !IsNull($v_4) &&
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner") &&
        Mscrm.BusinessRulesExplorer.$1Q($v_4, "New")
};
Mscrm.BusinessRulesExplorer.handleKeyPress = function(eventObject) {
    Mscrm.Utilities.getDomEventKeyCode(eventObject) === 13 &&
        Mscrm.BusinessRulesExplorer.openBusinessRuleEditorForEdit(eventObject)
};
Mscrm.BusinessRulesExplorer.openBusinessRuleEditorForEdit = function(domEvent) {
    var $v_0 = window.APP_SOLUTION_ID, $v_1 = domEvent.target.id, $v_2 = Mscrm.BusinessRulesExplorer.$1J(), $v_3;
    $v_2.get_query()["appSolutionId"] = $v_0;
    $v_2.get_query()["id"] = $v_1;
    $v_2.get_query()["BRlaunchpoint"] = "BRExplorer";
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner")) {
        $v_3 = openStdWin($v_2, buildWinName($v_1), window.screen.availWidth, window.screen.availHeight, null);
        $v_3.moveTo(0, 0);
        $v_3.resizeTo(window.screen.availWidth, window.screen.availHeight)
    } else $v_3 = openStdWin($v_2, buildWinName($v_1), 1024, 768, null);
    !IsNull($v_3) &&
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.UnifiedProcessDesigner") &&
        Mscrm.BusinessRulesExplorer.$1Q($v_3, "Edit")
};
Mscrm.BusinessRulesExplorer.$1Q = function($p0, $p1) {
    window.setTimeout(function() {
            $p0.clientType = "WebClient";
            $p0.launchMode = $p1;
            $p0.entityLogicalName = Mscrm.FormEditorVariables.entityLogicalName;
            $p0.launchPoint = Mscrm.FormEditorVariables.editorType;
            $p0.formId = Mscrm.FormEditorVariables.currentFormId;
            $p0.formType = Mscrm.FormEditorVariables.FormType
        },
        1e3)
};
Mscrm.BusinessRulesExplorer.refreshBusinessRulesExplorer = function() {
    if (!Mscrm.BusinessRulesExplorer.$i) {
        var $v_4 = Mscrm.CrmUri.create("/Tools/FormEditor/fieldExplorer.xsl");
        XUI.Xml.Load($v_4.toString(),
            false,
            function($p1_0) { Mscrm.BusinessRulesExplorer.$i = $p1_0 },
            function($p1_0, $p1_1) { Mscrm.BusinessRulesExplorer.$i = null })
    }
    var $v_0 = Mscrm.XmlUtil.createXslTemplate();
    $v_0.stylesheet = Mscrm.BusinessRulesExplorer.$i;
    var $v_1 = $v_0.createProcessor(), $v_2 = XUI.Xml.LoadXml(Mscrm.BusinessRulesExplorer.$1c());
    $v_1.input = $v_2;
    $v_1.addParameter("sortColumnName", "displayname");
    $v_1.addParameter("userLanguageCode", window.USER_LANGUAGE_CODE);
    $v_1.addParameter("sortOrder", "ascending");
    $v_1.addParameter("RTL", window.LOCID_UI_DIR === "RTL" ? "true" : "false");
    try {
        $v_1.addParameter("languageName", window.XML_LANGUAGE_NAME);
        $v_1.transform()
    } catch ($$e_7) {
        $v_1.addParameter("languageName", window.USER_LANGUAGE_TWO_LETTER_NAME);
        $v_1.transform()
    }
    var $v_3 = window.document.getElementById("FieldList");
    $v_3.innerHTML = $v_1.output;
    Mscrm.FormUndoRedo.fldExpRefreshed = true;
    ShowSideStrip()
};
Mscrm.BusinessRulesExplorer.$1c = function() {
    var $v_0 = "";
    try {
        var $v_1 = new RemoteCommand("BusinessRulesWebService", "RetrieveBusinessRulesXml");
        $v_1.SetParameter("otc", GetObjectTypeCode());
        $v_1.SetParameter("formId", Mscrm.FormEditorVariables.currentFormId);
        var $v_2 = $v_1.Execute();
        if (!IsNull($v_2) && $v_2.Success) $v_0 = $v_2.ReturnValue.toString()
    } catch ($$e_3) {
    }
    return $v_0
};
Mscrm.BusinessRulesExplorer.$1J = function() {
    var $v_0 = null;
    if (Mscrm.FeatureControl.get_Current()
        .isFeatureEnabled("FCB.UnifiedProcessDesigner"))
        $v_0 = Mscrm.CrmUri.create("/tools/systemcustomization/businessrules/businessRulesDesigner.aspx?");
    else $v_0 = Mscrm.CrmUri.create("/tools/systemcustomization/businessrules/manageBusinessRules.aspx?");
    return $v_0
};
Mscrm.OperationValidator = function() {};
Mscrm.OperationValidator.isOperationValid = function(operation, activeElement, dropTarget, dataType) {
    if (Mscrm.Utilities.isEdge()) Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
    var $v_0 = true;
    if (activeElement && activeElement.className) {
        var $v_1 = null, $v_2 = null, $v_3 = null;
        switch (activeElement.className) {
        case "ms-crm-Tab":
            $v_1 = Mscrm.DragDropUtils.getTabNode(activeElement.id);
            $v_2 = XUI.Xml.SelectNodes($v_1, "columns/column/sections/section", null)[0];
            break;
        case "section":
            $v_2 = Mscrm.DragDropUtils.getSectionNode(activeElement.id);
            $v_1 = $v_2.parentNode.parentNode.parentNode.parentNode;
            break;
        case "cell":
        case "subgrid":
        case "iframe":
        case "aci":
        case "powerbitile":
        case "webresource":
        case "notes":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "orgInsights":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
            $v_3 = Mscrm.DragDropUtils.getCellNodeFromId(activeElement.getAttribute("id").toString());
            $v_2 = $v_3.parentNode.parentNode.parentNode;
            $v_1 = $v_2.parentNode.parentNode.parentNode.parentNode;
            break
        }
        $v_0 = Mscrm.OperationValidator.$2E($v_1, $v_2, $v_3, operation, activeElement, dropTarget, dataType)
    }
    return $v_0
};
Mscrm.OperationValidator.$2E = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = true;
    switch ($p3) {
    case 1:
        var $v_1 = null, $v_2 = null, $v_3 = null;
        if ($p5.className === "cell" ||
            $p5.className === "iframe" ||
            $p5.className === "subgrid" ||
            $p5.className === "webresource" ||
            $p5.className === "notes" ||
            $p5.className === "quickformcollection" ||
            $p5.className === "bingmap" ||
            $p5.className === "socialInsight" ||
            $p5.className === "orgInsights" ||
            $p5.className === "timercontrol" ||
            $p5.className === "searchwidget" ||
            $p5.className === "referencepanelquickformcollection" ||
            $p5.className === "referencepanelsubgrid" ||
            $p5.className === "interactionwall" ||
            $p5.className === "referencepanelsearchwidget" ||
            $p5.className === "aci") {
            $v_1 = Mscrm.DragDropUtils.getCellNodeFromId($p5.getAttribute("id").toString());
            $v_2 = $v_1.parentNode.parentNode.parentNode;
            $v_3 = $v_2.parentNode.parentNode.parentNode.parentNode
        }
        if ($p5.className === "section") {
            $v_2 = Mscrm.DragDropUtils.getSectionNode($p5.id);
            $v_3 = $v_2.parentNode.parentNode.parentNode.parentNode
        }
        if ($p5.className === "ms-crm-Tab") $v_3 = Mscrm.DragDropUtils.getTabNode($p5.id);
        var $v_4 = Mscrm.DragDropUtils.isNodeLocked($v_3),
            $v_5 = Mscrm.DragDropUtils.isNodeLocked($v_2),
            $v_6 = Mscrm.DragDropUtils.isNodeLocked($p0),
            $v_7 = Mscrm.DragDropUtils.isNodeLocked($p1);
        switch ($p4.className) {
        case "cell":
        case "notes":
        case "subgrid":
        case "iframe":
        case "aci":
        case "webresource":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "ms-crm-Dialog-ListItem-ImportMap":
        case "bingmap":
        case "socialInsight":
        case "orgInsights":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
        case "powerbitile":
            if ($p4.className === "ms-crm-Dialog-ListItem-ImportMap" && ($v_4 || $v_5)) $v_0 = false;
            else if ($p1 !== $v_2)
                if ($p0 !== $v_3) {
                    if ($v_7 || $v_5 || $v_6 || $v_4) $v_0 = false
                } else if ($v_7 || $v_5) $v_0 = false;
            break;
        case "section":
            if ($p0 !== $v_3) if ($v_6 || $v_4) $v_0 = false;
            break
        }
        break;
    case 3:
        switch ($p4.className) {
        case "cell":
        case "iframe":
        case "aci":
        case "powerbitile":
        case "notes":
        case "subgrid":
        case "webresource":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "orgInsights":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
            if (Mscrm.PreviewCellUtils.isPreviewElement($p4)) $v_0 = false;
            if (Mscrm.DragDropUtils.isNodeLocked($p1)) {
                alert(window.LOCID_FORMED_CHFLDLOCKEDSECTION);
                $v_0 = false
            } else if (Mscrm.DragDropUtils.isNodeLocked($p0)) {
                alert(window.LOCID_FORMED_CHFLDLOCKEDTAB);
                $v_0 = false
            }
            break;
        case "section":
            if (Mscrm.DragDropUtils.isNodeLocked($p0)) {
                alert(window.LOCID_FORMED_CHFLDLOCKEDTAB);
                $v_0 = false
            }
            break
        }
        break;
    case 4:
        if (Mscrm.DragDropUtils.isNodeLocked($p1)) {
            alert(window.LOCID_FORMED_ADDFIELDLOCKEDSEC);
            $v_0 = false
        } else if (Mscrm.DragDropUtils.isNodeLocked($p0)) {
            alert(window.LOCID_FORMED_ADDFIELDLOCKEDTAB);
            $v_0 = false
        } else if (Mscrm.FormEditorVariables.FormType === "mainInteractionCentric" &&
            $p6 &&
            $p1.attributes.getNamedItem("name") &&
            XUI.Xml.GetText($p1.attributes.getNamedItem("name")).toString().startsWith("ref_pan_")) {
            alert(window.LOCID_FORMED_ADDFIELDREFPANSEC);
            $v_0 = false
        } else if (Mscrm.FormEditorVariables.FormType === "card" &&
            $p6 &&
            !Mscrm.DragDropUtils.validateSectionForCardForm($p1, $p6)) {
            alert(window.LOCID_FORMED_ADDFIELDCARDFORMSEC);
            $v_0 = false
        }
        break;
    case 5:
        if (Mscrm.DragDropUtils.isNodeLocked($p0)) {
            alert(window.LOCID_FORMED_ADDFIELDLOCKEDTAB);
            $v_0 = false
        }
        break;
    case 6:
        if (Mscrm.DragDropUtils.isNodeLocked($p0)) {
            alert(window.LOCID_FORMED_FIELDLOCKEDTAB);
            $v_0 = false
        }
        break
    }
    return $v_0
};
Mscrm.ElementObject = function(tab, section, rowsNode, rowNode, cell, element, elemId, elemClass, sectionType, pos) {
    this.$N_0 = -1;
    this.$8_0 = tab;
    this.$7_0 = section;
    this.$4_0 = rowsNode;
    this.$E_0 = rowNode;
    this.$P_0 = cell;
    this.$9_0 = element;
    this.$L_0 = elemId;
    this.$K_0 = elemClass;
    this.$G_0 = sectionType;
    if (this.$K_0 === "section") this.$N_0 = this.$1h_0();
    if (!pos) this.setElementPosition();
    else this.$0_0 = pos;
    var $v_0 = this.$9_0.attributes.getNamedItem("colspan");
    if ($v_0) this.$5_0 = parseInt(XUI.Xml.GetText($v_0), 10);
    var $v_1 = this.$9_0.attributes.getNamedItem("rowspan");
    if ($v_1) this.$6_0 = parseInt(XUI.Xml.GetText($v_1), 10);
    if (elemClass === "cell") {
        var $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(this.$9_0, "control", null).attributes.getNamedItem("id"));
        if ($v_2.startsWith("spacer_System")) this.$n_0 = true;
        if ($v_2.startsWith("spacer_User")) this.$15_0 = true
    }
};
Mscrm.ElementObject.prototype = {
    $8_0: null,
    $7_0: null,
    $4_0: null,
    $E_0: null,
    $P_0: null,
    $9_0: null,
    $L_0: null,
    $K_0: null,
    $G_0: null,
    $0_0: null,
    $6_0: 1,
    $5_0: 1,
    $n_0: false,
    $15_0: false,
    get_tabColumn: function() { return this.$N_0 },
    set_tabColumn: function(value) {
        this.$N_0 = value;
        return value
    },
    get_sectionType: function() { return this.$G_0 },
    get_rowsNode: function() { return this.$4_0 },
    get_rowNode: function() { return this.$E_0 },
    set_rowNode: function(value) {
        this.$E_0 = value;
        return value
    },
    get_isSystemSpacer: function() { return this.$n_0 },
    get_isUserSpacer: function() { return this.$15_0 },
    get_rowSpan: function() { return this.$6_0 },
    set_rowSpan: function(value) {
        this.$6_0 = value;
        return value
    },
    get_colSpan: function() { return this.$5_0 },
    set_colSpan: function(value) {
        this.$5_0 = value;
        return value
    },
    get_tab: function() { return this.$8_0 },
    get_section: function() { return this.$7_0 },
    set_section: function(value) {
        this.$7_0 = value;
        return value
    },
    get_cell: function() { return this.$P_0 },
    set_cell: function(value) {
        this.$P_0 = value;
        return value
    },
    get_xmlElement: function() { return this.$9_0 },
    set_xmlElement: function(value) {
        this.$9_0 = value;
        return value
    },
    get_elementPosition: function() { return this.$0_0 },
    set_elementPosition: function(value) {
        this.$0_0 = value;
        return value
    },
    get_className: function() { return this.$K_0 },
    get_id: function() { return this.$L_0 },
    $1h_0: function() {
        for (var $v_0 = -1, $v_1 = XUI.Xml.SelectNodes(this.$8_0, "columns/column", null), $v_2 = false, $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++) {
            for (var $v_4 = XUI.Xml.SelectNodes($v_1[$v_3], "sections/section", null), $v_5 = 0;
                $v_5 < $v_4.length;
                $v_5++)
                if (this.$L_0 === XUI.Xml.GetText($v_4[$v_5].attributes.getNamedItem("id"))) {
                    $v_2 = true;
                    $v_0 = $v_3;
                    break
                }
            if ($v_2) break
        }
        return $v_0
    },
    $1i_0: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs", null),
            $v_1 = 0,
            $v_2 = XUI.Xml.GetText(this.$9_0.attributes.getNamedItem("id")),
            $$t_5 = this;
        XUI.Xml.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                var $v_3 = $p1_0;
                if (XUI.Xml.GetText($v_3.attributes.getNamedItem("id")) === $v_2) return true;
                $v_1++;
                return false
            });
        return new Mscrm.Position($v_1, -1, -1)
    },
    $1g_0: function() {
        for (var $v_0 = Mscrm.DragDropUtils.getSectionsNode(XUI.Xml.GetText(this.$8_0.attributes.getNamedItem("id")),
                     this.$N_0),
            $v_1 = XUI.Xml.SelectNodes($v_0, "section", null),
            $v_2 = -1,
            $v_3 = XUI.Xml.GetText(this.$9_0.attributes.getNamedItem("id")),
            $v_4 = $v_1.length,
            $v_2 = 0;
            $v_2 < $v_4;
            $v_2++) {
            var $v_5 = $v_1[$v_2];
            if (XUI.Xml.GetText($v_5.attributes.getNamedItem("id")) === $v_3) break
        }
        return new Mscrm.Position($v_2, -1, -1)
    },
    $1d_0: function() {
        for (var $v_0 = this.$4_0,
            $v_1 = XUI.Xml.SelectNodes($v_0, "row", null),
            $v_2 = -1,
            $v_3 = -1,
            $v_4 = XUI.Xml.GetText(this.$9_0.attributes.getNamedItem("id")),
            $v_5 = $v_1.length,
            $v_6 = false,
            $v_2 = 0;
            $v_2 < $v_5;
            $v_2++) {
            var $v_7 = $v_1[$v_2], $v_8 = XUI.Xml.SelectNodes($v_7, "cell", null), $v_9 = $v_8.length;
            $v_3 = -1;
            for ($v_3 = 0; $v_3 < $v_9; $v_3++) {
                var $v_A = $v_8[$v_3];
                if (XUI.Xml.GetText($v_A.attributes.getNamedItem("id")) === $v_4) {
                    $v_6 = true;
                    break
                }
            }
            if ($v_6) break
        }
        return new Mscrm.Position($v_2, $v_3, $v_3)
    },
    cloneObject: function() {
        var $v_0 = new Mscrm.ElementObject(this.$8_0,
            this.$7_0,
            this.$4_0,
            this.$E_0,
            this.$P_0,
            this.$9_0,
            this.$L_0,
            this.$K_0,
            this.$G_0,
            this.$0_0);
        $v_0.$5_0 = this.$5_0;
        $v_0.$6_0 = this.$6_0;
        return $v_0
    },
    setElementPosition: function() {
        switch (this.$K_0) {
        case "ms-crm-Tab":
            this.$0_0 = this.$1i_0();
            break;
        case "section":
            this.$0_0 = this.$1g_0();
            break;
        case "cell":
        case "iframe":
        case "aci":
        case "subgrid":
        case "webresource":
        case "notes":
        case "quickformcollection":
        case "referencepanelquickformcollection":
        case "referencepanelsubgrid":
        case "interactionwall":
        case "bingmap":
        case "socialInsight":
        case "orgInsights":
        case "timercontrol":
        case "searchwidget":
        case "referencepanelsearchwidget":
        case "powerbitile":
            this.$0_0 = this.$1d_0();
            break
        }
    },
    createSpacer: function() {
        var $v_0 = Mscrm.DragDropUtils.createSystemSpacerXml(),
            $v_1 = Mscrm.FormEditorVariables.formXml.createAttribute("rowspan"),
            $v_2 = Mscrm.FormEditorVariables.formXml.createAttribute("colspan");
        $v_1.value = this.$6_0.toString();
        $v_2.value = this.$5_0.toString();
        $v_0.attributes.setNamedItem($v_1);
        $v_0.attributes.setNamedItem($v_2);
        var $v_3 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "control", null).attributes.getNamedItem("id")),
            $v_4 = new Mscrm.ElementObject(this.$8_0,
                this.$7_0,
                this.$4_0,
                this.$E_0,
                $v_0,
                $v_0,
                $v_3,
                "cell",
                this.$G_0,
                this.$0_0);
        return $v_4
    }
};
Mscrm.Position = function(row, column, formXmlCol) {
    this.$3_0 = row;
    this.$2_0 = column;
    this.$l_0 = formXmlCol
};
Mscrm.Position.prototype = {
    $3_0: 0,
    $2_0: 0,
    $l_0: 0,
    get_row: function() { return this.$3_0 },
    set_row: function(value) {
        this.$3_0 = value;
        return value
    },
    get_column: function() { return this.$2_0 },
    set_column: function(value) {
        this.$2_0 = value;
        return value
    },
    get_formXmlCol: function() { return this.$l_0 }
};
Mscrm.FieldExplorerUtils = function() {};
Mscrm.FieldExplorerUtils.scrollFieldExplorer = function(val) {
    var $v_0 = $get("FieldList");
    if ($v_0)
        if (IsNull(val)) $v_0.scrollTop = Mscrm.FieldExplorerUtils.$q;
        else {
            $v_0.scrollTop = val;
            Mscrm.FieldExplorerUtils.$q = val
        }
};
Mscrm.FieldExplorerUtils.saveFieldExplorerScrollPos = function() {
    var $v_0 = $get("FieldList");
    if ($v_0) Mscrm.FieldExplorerUtils.$q = $v_0.scrollTop
};
Mscrm.FieldExplorerUtils.buildCustomFieldFilter = function(fieldsXml) {
    for (var $v_0 = "",
        $v_1 = XUI.Xml.SelectNodes(fieldsXml, "entity/fields/field[@customfield='true']", null),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        if ($v_2) $v_0 += " or ";
        $v_0 += "@name = '" + $v_1[$v_2].attributes.getNamedItem("name").nodeValue + "'"
    }
    return $v_0
};
Mscrm.FieldExplorerUtils.buildUnUsedCustomFieldFilter = function(fieldsXml) {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = "",
        $v_3 = "",
        $v_4 = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows/row/cell/control";
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_2 = "/entity/form/tabs/tab/columns/column/sections/" +
            Mscrm.FormEditorVariables.fieldExpIsFor +
            "/rows/row/cell/control";
        break;
    case "header":
        $v_2 = $v_4;
        $v_3 = "header_";
        break;
    case "footer":
        $v_2 = $v_4;
        $v_3 = "footer_";
        break
    }
    for (var $v_5 = XUI.Xml.SelectNodes(fieldsXml, "entity/fields/field[@customfield='true']", null), $v_6 = 0;
        $v_6 < $v_5.length;
        $v_6++) {
        $v_1 = $v_5[$v_6].attributes.getNamedItem("name").nodeValue;
        var $v_7 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            $v_2 + "[@id='" + $v_3 + $v_1 + "']",
            null);
        if (IsNull($v_7)) {
            if ($v_6 && $v_0.length > 0) $v_0 += " or ";
            $v_0 += "@name = '" + $v_5[$v_6].attributes.getNamedItem("name").nodeValue + "'"
        }
    }
    return $v_0
};
Mscrm.FieldExplorerUtils.handlerFilterCheckBoxClick = function() {
    if (Mscrm.FormEditorVariables.fieldExpIsFor === "navigation") RefreshRelationShipExplorer();
    else RefreshAttributeExplorer()
};
Mscrm.RelatioShipExplorerUtils = function() {};
Mscrm.RelatioShipExplorerUtils.getFilteredRelationShipsXml = function() {
    var $v_0 = "<relationships>",
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/Navigation/NavBar/NavBarByRelationshipItem[not(@Show) or @Show='true']",
            null),
        $v_2 = "";
    if ($get("unusedFilter").checked) $v_2 = Mscrm.RelatioShipExplorerUtils.$1W($v_1);
    var $v_3 = XUI.Xml.LoadXml(Mscrm.RelatioShipExplorerUtils.$1f());
    switch (Mscrm.FormEditorVariables.currentRelationshipFielter) {
    case 1:
        if ($v_2.length > 0) $v_2 += " and @relationType='ManyToMany'";
        else $v_2 = "@relationType='ManyToMany'";
        break;
    case 0:
        if ($v_2.length > 0) $v_2 += " and @relationType='OneToMany'";
        else $v_2 = "@relationType='OneToMany'";
        break
    }
    var $v_4 = null;
    if ($v_2.length > 0) $v_4 = XUI.Xml.SelectNodes($v_3, "relationships/relationship[" + $v_2 + "]", null);
    else $v_4 = XUI.Xml.SelectNodes($v_3, "relationships/relationship", null);
    for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) $v_0 += XUI.Xml.XMLSerializer.serializeToString($v_4[$v_5]);
    $v_0 += "</relationships>";
    return $v_0
};
Mscrm.RelatioShipExplorerUtils.createNewRelationship = function(domEvent, type) {
    var $v_0 = "/tools/systemcustomization/relationships/manageRelationship.aspx?";
    $v_0 += "appSolutionId=" + window.APP_SOLUTION_ID;
    $v_0 += "&entityId=" + getEntityId();
    $v_0 += "&entityRole=" + type;
    $v_0 += "&formType=" + Mscrm.FormEditorVariables.FormType;
    var $v_1 = Mscrm.CrmUri.create($v_0), $v_2 = Mscrm.WindowInformation.getWindowInformation(9803);
    openStdDlg($v_1, null, $v_2.Width, $v_2.Height);
    var $v_3 = Mscrm.FormEditorVariables.relationShipsXmlString;
    Mscrm.FormEditorVariables.relationShipsXmlString = "<relationships/>";
    RefreshRelationShipExplorer();
    Mscrm.RelatioShipExplorerUtils.$1U(domEvent, $v_3)
};
Mscrm.RelatioShipExplorerUtils.$1U = function($p0, $p1) {
    var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null;
    if (!isNullOrEmptyString(Mscrm.FormEditorVariables
        .relationShipsXmlString)) $v_0 = XUI.Xml.LoadXml(Mscrm.FormEditorVariables.relationShipsXmlString);
    if (!isNullOrEmptyString($p1)) $v_1 = XUI.Xml.LoadXml($p1);
    if (IsNull($v_1) && !IsNull($v_0)) {
        $v_2 = XUI.Xml.SelectNodes($v_0, "/relationships/relationship[@displayoption!='DoNotDisplay']", null);
        Mscrm.RelatioShipExplorerUtils.$1T($p0, $v_2)
    } else if (!IsNull($v_1) && !IsNull($v_0)) {
        $v_2 = XUI.Xml.SelectNodes($v_0, "/relationships/relationship[@displayoption!='DoNotDisplay']", null);
        $v_3 = XUI.Xml.SelectNodes($v_1, "/relationships/relationship[@displayoption!='DoNotDisplay']", null);
        for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
            for (var $v_5 = false, $v_6 = 0; $v_6 < $v_3.length; $v_6++)
                if (Mscrm.FormXmlUtils.getAttributeValue($v_2[$v_4], "relationshipid").toString() ===
                    Mscrm.FormXmlUtils.getAttributeValue($v_3[$v_6], "relationshipid").toString()) {
                    $v_5 = true;
                    break
                }
            !$v_5 && Mscrm.RelatioShipExplorerUtils.$1E($p0, $v_2[$v_4])
        }
    }
};
Mscrm.RelatioShipExplorerUtils.$1T = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) Mscrm.RelatioShipExplorerUtils.$1E($p0, $p1[$v_0])
};
Mscrm.RelatioShipExplorerUtils.$1E = function($p0, $p1) {
    if (!IsNull($p1)) {
        var $v_0 = $get(Mscrm.FormXmlUtils.getAttributeValue($p1, "id").toString());
        Mscrm.FormNavigationUtils.addNavItemFromRelationshipExplorer($p0, $v_0)
    }
};
Mscrm.RelatioShipExplorerUtils.$1W = function($p0) {
    for (var $v_0 = "", $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        if ($v_1) $v_0 += " and ";
        var $v_2 = $p0[$v_1].attributes.getNamedItem("RelationshipName");
        if (!IsNull($v_2)) $v_0 += "@name != '" + XUI.Xml.GetText($v_2) + "'"
    }
    return $v_0
};
Mscrm.RelatioShipExplorerUtils.$1f = function() {
    if (Mscrm.FormEditorVariables.relationShipsXmlString === "<relationships/>")
        try {
            var $v_0 = new RemoteCommand("FormEditorWebService", "GetRelationshipXml");
            $v_0.SetParameter("parentEntityObjectCode", GetObjectTypeCode());
            var $v_1 = $v_0.Execute();
            if (!IsNull($v_1) && $v_1.Success)
                Mscrm.FormEditorVariables.relationShipsXmlString = $v_1.ReturnValue.toString()
        } catch ($$e_2) {
            Mscrm.FormEditorVariables.relationShipsXmlString = ""
        }
    return Mscrm.FormEditorVariables.relationShipsXmlString
};
Mscrm.FieldPropertiesUtils = function() {};
Mscrm.FieldPropertiesUtils.getAllEntityData = function() {
    var $v_0 = null;
    try {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetAllEntitiesData", null), $v_2 = $v_1.Execute(null);
        if ($v_2.Success) $v_0 = $v_2.ReturnValue
    } catch ($$e_3) {
        $v_0 = null
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.getRelatedEntitiesData = function(objectTypeCode) {
    var $v_0 = null;
    try {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetRelatedEntitiesData", null);
        $v_1.SetParameter("parentEntityObjectCode", objectTypeCode);
        var $v_2 = $v_1.Execute(null);
        if ($v_2.Success) $v_0 = $v_2.ReturnValue
    } catch ($$e_4) {
        $v_0 = null
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.addFieldToForm = function(fieldToAdd, activeElement) {
    var $v_0 = "", $v_1 = "";
    if (activeElement) $v_1 = activeElement.className;
    var $v_2 = null, $v_3 = null;
    switch ($v_1) {
    case "ms-crm-Tab":
        var $v_4 = Mscrm.DragDropUtils.getTabNode(activeElement.id),
            $v_5 = XUI.Xml.SelectNodes($v_4, "columns/column/sections/section", null);
        $v_3 = $v_5[0];
        if ($v_3) $v_2 = Mscrm.FieldPropertiesUtils.$17($v_3);
        Mscrm.TabUtils.expandTabIfRequired($v_4);
        break;
    case "section":
    case "header":
    case "footer":
        $v_3 = Mscrm.DragDropUtils.getSectionNode(activeElement.id);
        if ($v_3) $v_2 = Mscrm.FieldPropertiesUtils.$17($v_3);
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "subgrid":
    case "webresource":
    case "notes":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "orgInsights":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
    case "powerbitile":
        $v_2 = activeElement;
        break;
    default:
        var $v_6 = Mscrm.DragDropUtils.getLastTabOfMainCanvas(),
            $v_7 = XUI.Xml.SelectNodes($v_6, "columns/column/sections/section", null);
        $v_3 = $v_7[0];
        if ($v_3) $v_2 = Mscrm.FieldPropertiesUtils.$17($v_3);
        break
    }
    var $v_8 = null;
    if (!fieldToAdd) $v_8 = Mscrm.DragDropUtils.createUserSpacerXml();
    else $v_8 = Mscrm.DragDropUtils.createCellNode(fieldToAdd);
    var $v_9 = null, $v_A = GetCurrentSectionName(activeElement), $v_B = $v_2.getAttribute("name");
    if ($v_B && $v_B.toString().startsWith("spacer_System")) {
        var $v_D = Mscrm.DragDropUtils.getCellNodeFromId($v_2.getAttribute("id").toString()),
            $v_E = Mscrm.DragDropUtils.getRowNode($v_B.toString());
        $v_E.insertBefore($v_8, $v_D);
        $v_E.removeChild($v_D);
        $v_0 = XUI.Xml.GetText($v_8.attributes.getNamedItem("id"))
    } else {
        var $v_F = Mscrm.DragDropUtils.getRowsNode($v_A, null);
        if ($v_F && $v_2) {
            Mscrm.DragDropUtils.addPlaceHolders($v_F);
            try {
                var $v_G = Mscrm.DragDropUtils.createElementObject($v_2),
                    $v_H = XUI.Xml.GetText($v_8.attributes.getNamedItem("id"));
                $v_9 = new Mscrm.ElementObject($v_G.$8_0,
                    $v_G.$7_0,
                    $v_G.$4_0,
                    $v_G.$E_0,
                    $v_8,
                    $v_8,
                    $v_H,
                    "cell",
                    $v_G.$G_0,
                    $v_G.$0_0);
                $v_0 = XUI.Xml.GetText($v_9.$9_0.attributes.getNamedItem("id"));
                var $v_I = new Mscrm.Position($v_G.$0_0.$3_0 + $v_G.$6_0 - 1, $v_G.$0_0.$2_0, $v_G.$0_0.$2_0),
                    $v_J = new Mscrm.ElementObject($v_G.$8_0,
                        $v_G.$7_0,
                        $v_G.$4_0,
                        $v_G.$E_0,
                        $v_9.$P_0,
                        $v_9.$9_0,
                        $v_9.$L_0,
                        "cell",
                        $v_G.$G_0,
                        $v_I),
                    $v_K = Mscrm.DragDropUtils.findDropTargets($v_J, $v_G.$6_0);
                Mscrm.DragDropUtils.pushDown($v_9, $v_K, $v_G, true, true)
            } catch ($$e_M) {
            }
            Mscrm.DragDropUtils.removePlaceHolders($v_F)
        }
    }
    var $v_C = $get($v_A);
    RefreshSectionHtml($v_C, null, false);
    RefreshAttributeExplorer();
    Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl($v_A, $v_0);
    Mscrm.FieldPropertiesUtils.clickControl($v_0, activeElement)
};
Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl = function(sectionId, controlId) {
    var $v_0 = $get(controlId);
    if (!IsNull($v_0)) {
        Mscrm.DragDropUtils.pullUpIfRequired(Mscrm.DragDropUtils.createElementObject($v_0));
        Mscrm.DragDropUtils.removeSystemSpacerRows(Mscrm.DragDropUtils.getRowsNode(sectionId, null));
        RefreshSectionHtml($get(sectionId), null, false)
    }
};
Mscrm.FieldPropertiesUtils.clickControl = function(controlId, activeElement) {
    if (controlId.length > 0) {
        var $v_0 = $get(controlId);
        if ($v_0) {
            XUI.Html.DispatchDomEvent($v_0, XUI.Html.CreateDomEvent("click"));
            Mscrm.FieldPropertiesUtils.scrollIfRequiredAfterDrop($v_0)
        }
        if (activeElement) activeElement.style.border = "1px dashed #6d6e70"
    }
};
Mscrm.FieldPropertiesUtils.adjustFormXmlForRowSpanChange = function(cellNode, oldRowSpan, newRowSpan) {
    var $v_0 = XUI.Xml.GetText(cellNode.attributes.getNamedItem("id")),
        $v_1 = $get($v_0),
        $v_2 = cellNode.parentNode.parentNode;
    Mscrm.DragDropUtils.addPlaceHolders($v_2);
    var $v_3 = Mscrm.DragDropUtils.createElementObject($v_1), $v_4 = Mscrm.DragDropUtils.createElementObject($v_1);
    if (newRowSpan > oldRowSpan) {
        var $v_5 = Mscrm.DragDropUtils.findDropTargets($v_3, $v_3.$6_0);
        $v_4.$6_0 = newRowSpan - oldRowSpan;
        Mscrm.DragDropUtils.pushDown($v_4, $v_5, $v_3, false, false);
        Mscrm.DragDropUtils.removePlaceHolders($v_2)
    } else {
        $v_4.$0_0.$3_0 += newRowSpan;
        $v_4.$6_0 = oldRowSpan - newRowSpan;
        Mscrm.DragDropUtils.pullUp($v_4, true, null);
        Mscrm.DragDropUtils.removePlaceHolders($v_2);
        Mscrm.DragDropUtils.pullUpIfRequired($v_4)
    }
    Mscrm.DragDropUtils.removeSystemSpacerRows($v_3.$4_0)
};
Mscrm.FieldPropertiesUtils.adjustFormXmlForColSpanChange = function(cellNode, oldColSpan, newColSpan) {
    var $v_0 = true,
        $v_1 = XUI.Xml.GetText(cellNode.attributes.getNamedItem("id")),
        $v_2 = $get($v_1),
        $v_3 = newColSpan - oldColSpan,
        $v_4 = cellNode.parentNode.parentNode;
    Mscrm.DragDropUtils.addPlaceHolders($v_4);
    var $v_5 = Mscrm.DragDropUtils.createElementObject($v_2), $v_6 = Mscrm.DragDropUtils.createElementObject($v_2);
    if (newColSpan > oldColSpan) {
        for (var $v_7 = XUI.Xml.GetText($v_5.$7_0.attributes.getNamedItem("columns")).length,
            $v_8 = XUI.Html.DomUtils.GetNextSibling(cellNode),
            $v_9 = 0;
            $v_9 < $v_5.$5_0 - 1;
            $v_9++) $v_8 = XUI.Html.DomUtils.GetNextSibling($v_8);
        if (!IsNull($v_8)) {
            if (Mscrm.DragDropUtils.isPlaceHolder($v_8))
                $v_8 = Mscrm.DragDropUtils.getContainingCellForPlaceHolder($v_8);
            if (!IsNull($v_8)) {
                $v_1 = XUI.Xml.GetText($v_8.attributes.getNamedItem("id"));
                $v_2 = $get($v_1);
                var $v_A = Mscrm.DragDropUtils.createElementObject($v_2),
                    $v_B = $v_A.cloneObject(),
                    $v_C = $v_7 - ($v_5.$0_0.$2_0 + $v_5.$5_0);
                if ($v_C >= $v_3) {
                    $v_B.$5_0 = $v_3;
                    $v_C = $v_3;
                    $v_3 = 0
                } else {
                    $v_B.$5_0 = $v_C;
                    $v_3 -= $v_C
                }
                $v_B.$6_0 = $v_5.$6_0 + ($v_5.$0_0.$3_0 - $v_A.$0_0.$3_0);
                var $v_D = $v_8.parentNode, $v_E = Mscrm.DragDropUtils.findDropTargetsInSameRow($v_B, $v_A);
                Mscrm.DragDropUtils.pushDown($v_B, $v_E, $v_A, false, false);
                Mscrm.FieldPropertiesUtils.$1F($v_5, $v_A, $v_D, $v_C)
            } else $v_3 = -1
        }
        if ($v_3 > 0) {
            var $v_F = $v_3;
            $v_5.$5_0 = $v_F;
            var $v_G = $v_5.$P_0;
            while ($v_F-- > 0)
                if (!IsNull($v_G))
                    if (Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 1) $v_G = $v_G.previousSibling;
                    else $v_G = $v_G.previousSibling.previousSibling;
            if (!IsNull($v_G)) {
                if (Mscrm.DragDropUtils
                    .isPlaceHolder($v_G)) $v_G = Mscrm.DragDropUtils.getContainingCellForPlaceHolder($v_G);
                if (!IsNull($v_G)) {
                    var $v_H = $get(XUI.Xml.GetText($v_G.attributes.getNamedItem("id"))),
                        $v_I = Mscrm.DragDropUtils.createElementObject($v_H),
                        $v_J = $v_G.parentNode,
                        $v_K = Mscrm.DragDropUtils.findDropTargetsInSameRow($v_5, $v_I);
                    $v_5.$6_0 = $v_5.$6_0 + ($v_5.$0_0.$3_0 - $v_I.$0_0.$3_0);
                    Mscrm.DragDropUtils.pushDown2($v_5, $v_K, $v_I, true, $v_5.$0_0.$2_0 - $v_3, $v_5.$0_0.$3_0);
                    Mscrm.FieldPropertiesUtils.$1F($v_5, $v_I, $v_J, $v_3)
                }
            } else $v_0 = false
        }
    } else {
        var $v_L = $v_5.cloneObject();
        $v_L.$5_0 = oldColSpan - newColSpan;
        $v_L.$0_0.$2_0 = $v_5.$0_0.$2_0 + newColSpan;
        Mscrm.DragDropUtils.pullUp($v_L, true, null)
    }
    Mscrm.DragDropUtils.removePlaceHolders($v_4);
    Mscrm.DragDropUtils.removeSystemSpacerRows($v_4);
    return $v_0
};
Mscrm.FieldPropertiesUtils.findElementsInNextColumnToMove = function(elemsInCurrentColumn) {
    for (var $v_0 = [], $v_1 = elemsInCurrentColumn[0].$4_0, $v_2 = null, $v_3 = 0, $v_4 = 0;
        $v_4 < elemsInCurrentColumn.length;
        $v_4++) {
        var $v_5 = elemsInCurrentColumn[$v_4], $v_6 = $v_5.$0_0.$3_0, $v_7 = $v_5.$0_0.$2_0;
        $v_2 = $v_1.childNodes[$v_6];
        var $v_8 = $v_2.childNodes[$v_7 + 1];
        if ($v_8) {
            var $v_9 = XUI.Xml.GetText($v_8.attributes.getNamedItem("id")),
                $v_A = new Mscrm.Position($v_6, $v_7 + 1, $v_7 + 1),
                $v_B = new Mscrm.ElementObject($v_5.$8_0,
                    $v_5.$7_0,
                    $v_5.$4_0,
                    $v_5.$E_0,
                    $v_8,
                    $v_8,
                    $v_9,
                    "cell",
                    Mscrm.FormEditorVariables.fieldExpIsFor,
                    $v_A);
            if (!Mscrm.DragDropUtils.duplicateExists($v_0, $v_5.$L_0)) $v_0[$v_3++] = $v_B;
            for (var $v_C = 1; $v_C < $v_B.$6_0; $v_C++) {
                var $v_D = $v_1.childNodes[$v_6 + $v_C];
                $v_8 = $v_D.childNodes[$v_7 + 1];
                if ($v_8) {
                    var $v_E = XUI.Xml.GetText($v_8.attributes.getNamedItem("id")),
                        $v_F = new Mscrm.Position($v_6 + $v_C, $v_7 + 1, $v_7 + 1),
                        $v_G = new Mscrm.ElementObject($v_5.$8_0,
                            $v_5.$7_0,
                            $v_5.$4_0,
                            $v_5.$E_0,
                            $v_8,
                            $v_8,
                            $v_E,
                            "cell",
                            Mscrm.FormEditorVariables.fieldExpIsFor,
                            $v_F);
                    $v_0[$v_3++] = $v_G
                }
            }
        }
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.getElementsToMoveRight = function(currElement) {
    var $v_0 = [];
    currElement.$0_0.$2_0 += currElement.$5_0 - 1;
    var $v_1 = [];
    $v_1[0] = currElement;
    for (var $v_2 = null, $v_3 = currElement.$0_0.$3_0, $v_5 = 1; $v_5 < currElement.$6_0; $v_5++) {
        $v_2 = currElement.$4_0.childNodes[$v_3 + $v_5];
        var $v_6 = $v_2.childNodes[currElement.$0_0.$2_0];
        if ($v_6) {
            var $v_7 = XUI.Xml.GetText($v_6.attributes.getNamedItem("id")),
                $v_8 = new Mscrm.Position($v_3 + $v_5, currElement.$0_0.$2_0, currElement.$0_0.$2_0),
                $v_9 = new Mscrm.ElementObject(currElement.$8_0,
                    currElement.$7_0,
                    currElement.$4_0,
                    currElement.$E_0,
                    $v_6,
                    $v_6,
                    $v_7,
                    "cell",
                    Mscrm.FormEditorVariables.fieldExpIsFor,
                    $v_8);
            $v_1[$v_5] = $v_9
        }
    }
    var $v_4 = 0;
    while (true) {
        $v_1 = Mscrm.FieldPropertiesUtils.findElementsInNextColumnToMove($v_1);
        if (!$v_1.length) break;
        $v_0[$v_4++] = $v_1
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.columnsAvailableToMoveRight = function(columnsOfElements, colsToMove) {
    for (var $v_0 = 0, $v_1 = 0; $v_1 < columnsOfElements.length; $v_1++) {
        for (var $v_2 = columnsOfElements[$v_1], $v_3 = true, $v_4 = 0; $v_4 < $v_2.length; $v_4++) {
            var $v_5 = $v_2[$v_4];
            if (!$v_5.$n_0) {
                $v_3 = false;
                break
            }
        }
        if ($v_3) $v_0++
    }
    if ($v_0 >= colsToMove) return true;
    else return false
};
Mscrm.FieldPropertiesUtils.moveColumnsToRight = function(colsOfElements, colsToMove) {
    var $v_0 = colsOfElements.length - 1;
    while ($v_0 >= 0) {
        var $v_1 = colsOfElements[$v_0];
        if (Mscrm.FieldPropertiesUtils.$1V($v_1)) {
            $v_0--;
            continue
        } else {
            var $v_2 = Mscrm.FieldPropertiesUtils.$1n($v_1[0], $v_1.length);
            if ($v_2 >= colsToMove) $v_2 = colsToMove;
            $v_2 > 0 && Mscrm.FieldPropertiesUtils.moveColumn($v_1, $v_2);
            $v_0--
        }
    }
};
Mscrm.FieldPropertiesUtils.moveColumn = function(elemsInOneCol, colsToMove) {
    for (var $v_0 = 0; $v_0 < elemsInOneCol.length; $v_0++) {
        var $v_1 = elemsInOneCol[$v_0],
            $v_2 = Mscrm.DragDropUtils.createSystemSpacerXml(),
            $v_3 = $v_1.$4_0.childNodes[$v_1.$0_0.$3_0],
            $v_4 = $v_3.childNodes[$v_1.$0_0.$2_0];
        $v_3.insertBefore($v_2, $v_4);
        var $v_5 = $v_3.childNodes[$v_1.$0_0.$2_0 + colsToMove + 1];
        $v_3.insertBefore($v_1.$9_0, $v_5);
        $v_3.removeChild($v_5)
    }
};
Mscrm.FieldPropertiesUtils.scrollIfRequiredAfterDrop = function(elemToClick) {
    var $v_0 = $get("editorDiv"),
        $v_1 = $get("menuHeader"),
        $v_2 = $v_0.clientHeight,
        $v_3 = Sys.UI.DomElement.getLocation(elemToClick).y;
    if (elemToClick.className === "ms-crm-Tab") elemToClick = elemToClick.parentNode;
    if (!IsNull(elemToClick)) {
        $v_3 <= 0 && elemToClick.scrollIntoView(true);
        $v_3 > $v_2 && elemToClick.scrollIntoView(false)
    }
};
Mscrm.FieldPropertiesUtils.addNotesControl = function(activeElement) {
    var $v_0 = Mscrm.DragDropUtils.createNotesNode(), $v_1 = null, $v_2 = null, $v_3 = null;
    switch (activeElement.className) {
    case "ms-crm-Tab":
        $v_3 = Mscrm.DragDropUtils.getTabNode(activeElement.id);
        $v_2 = XUI.Xml.SelectNodes($v_3, "columns/column/sections/section", null)[0];
        break;
    case "section":
        $v_2 = Mscrm.DragDropUtils.getSectionNode(activeElement.id);
        break;
    case "cell":
    case "iframe":
    case "aci":
    case "webresource":
    case "subgrid":
    case "notes":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "orgInsights":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
    case "powerbitile":
        $v_1 = Mscrm.DragDropUtils.getCellNodeFromId(activeElement.getAttribute("id").toString());
        $v_2 = $v_1.parentNode.parentNode.parentNode;
        break
    }
    if (!IsNull($v_2)) {
        $v_3 = $v_2.parentNode.parentNode.parentNode.parentNode;
        var $v_4 = Mscrm.FormUtils.getAttributeValue(XUI.Xml.SelectSingleNode($v_0, "control", null), 4);
        if (!AutoExpandingRequired(Mscrm.FormUtils
            .getAttributeValue($v_3, 4),
            $v_4,
            Mscrm.FormEditorVariables.formXml)) Mscrm.FormXmlUtils.removeAttribute($v_0, "auto");
        else {
            var $v_9 = XUI.Xml.SelectSingleNode($v_3,
                "columns/column/sections/section/rows/row/cell[@auto = 'true' and control/@id != '" + $v_4 + "' ]",
                null);
            Mscrm.FormXmlUtils.removeAttribute($v_9, "auto")
        }
        var $v_5 = XUI.Xml.SelectSingleNode($v_2, "rows", null), $v_6 = Mscrm.FormUtils.getAttributeValue($v_2, 3);
        Mscrm.FormXmlUtils.addAttribute($v_0, "colspan", $v_6.toString());
        var $v_7 = $v_5.childNodes[$v_5.childNodes.length - 1];
        if (!Mscrm.FormXmlUtils.rowContainsOnlySpacers($v_7, $v_6)) {
            $v_7 = Mscrm.FormEditorVariables.formXml.createElement("row");
            $v_7.appendChild($v_0);
            $v_5.appendChild($v_7)
        } else {
            Mscrm.FormXmlUtils.removeAllCellsInRow($v_7);
            $v_7.appendChild($v_0)
        }
        for (var $v_A = 0; $v_A < 14; $v_A++) {
            var $v_B = Mscrm.FormEditorVariables.formXml.createElement("row");
            $v_5.appendChild($v_B)
        }
        var $v_8 = $get(XUI.Xml.GetText($v_2.attributes.getNamedItem("id")));
        RefreshSectionHtml($v_8, null, false);
        Mscrm.FieldPropertiesUtils.clickControl(XUI.Xml.GetText($v_0.attributes.getNamedItem("id")), activeElement)
    }
};
Mscrm.FieldPropertiesUtils.formContainsNotesControl = function() {
    if (!Mscrm.DragDropUtils.getCellNode("notescontrol")) return false;
    else return true
};
Mscrm.FieldPropertiesUtils.addHeightAttributeForAutoExpandingCells = function(autoExpandingCells, previewXmlDoc) {
    for (var $v_0 = 0; $v_0 < autoExpandingCells.length; $v_0++) {
        var $v_1 = autoExpandingCells[$v_0],
            $v_2 = 1,
            $v_3 = $v_1.parentNode,
            $v_4 = $v_3.parentNode.parentNode,
            $v_5 = $v_1.attributes.getNamedItem("rowspan");
        if ($v_5) $v_2 = parseInt(XUI.Xml.GetText($v_5), 10);
        while ($v_2-- > 1 && $v_3) $v_3 = XUI.Html.DomUtils.GetNextSibling($v_3);
        if ($v_3) {
            var $v_6 = previewXmlDoc.createAttribute("height");
            $v_6.value = "auto";
            $v_3.attributes.setNamedItem($v_6)
        }
        if (!$v_4.attributes.getNamedItem("height")) {
            var $v_7 = previewXmlDoc.createAttribute("height");
            $v_7.value = "auto";
            $v_4.attributes.setNamedItem($v_7)
        }
    }
};
Mscrm.FieldPropertiesUtils.handleAutoExpandingFieldForDragDrop = function(cellNode, dropTarget) {
    var $v_0 = cellNode.attributes.getNamedItem("auto");
    if (!IsNull($v_0) && XUI.Xml.GetText($v_0) === "true") {
        var $v_1 = dropTarget.getAttribute("id").toString(),
            $v_2 = Mscrm.DragDropUtils.getCellNodeFromId($v_1),
            $v_3 = $v_2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
            $v_4 = XUI.Xml.GetText($v_3.attributes.getNamedItem("id")),
            $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(cellNode, "control/@id", null));
        if (AutoExpandingRequired($v_4, $v_5, Mscrm.FormEditorVariables.formXml)) {
            var $v_6 = XUI.Xml.SelectSingleNode($v_3,
                "columns/column/sections/section/rows/row/cell[@auto = 'true'and control/@id != '" + $v_5 + "' ]",
                null);
            if (!IsNull($v_6)) {
                $v_6.attributes.removeNamedItem("auto");
                if (GetControlTypeValue($v_6) === 2) {
                    Mscrm.FieldPropertiesUtils.modifySubGridRowSpanIfNotAutoExpanding($v_6);
                    var $v_7 = Mscrm.FormXmlUtils.getAttributeValue($v_2.parentNode.parentNode.parentNode, "id")
                            .toString(),
                        $v_8 = Mscrm.FormXmlUtils.getAttributeValue($v_6.parentNode.parentNode.parentNode, "id")
                            .toString();
                    $v_8 !== $v_7 && RefreshSectionHtml($get($v_8), null, false)
                }
            }
        } else cellNode.attributes.removeNamedItem("auto")
    }
};
Mscrm.FieldPropertiesUtils.removeFieldHandlers = function(cellNode) {
    if (!IsNull(cellNode)) {
        var $v_0 = XUI.Xml.SelectSingleNode(cellNode, "control/@id", null);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.nodeValue;
            if (XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@id='" + $v_1 + "']",
                    null).length <=
                1 &&
                Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
                var $v_2 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/events/event[@attribute='" + $v_1 + "']",
                    null);
                if ($v_2.length > 0) {
                    for (var $v_3 = $v_2[0]
                                 .parentNode,
                        $v_4 = 0;
                        $v_4 < $v_2.length;
                        $v_4++) $v_2[$v_4].parentNode.removeChild($v_2[$v_4]);
                    !$v_3.hasChildNodes() && $v_3.parentNode.removeChild($v_3)
                }
            }
        }
    }
};
Mscrm.FieldPropertiesUtils.removeHandlersFromFields = function(fieldList) {
    for (var $v_0 = 0; $v_0 < fieldList.length; $v_0++) Mscrm.FieldPropertiesUtils.removeFieldHandlers(fieldList[$v_0])
};
Mscrm.FieldPropertiesUtils.getFieldCountOnForm = function(fieldCell, selectedFormArea) {
    var $v_0 = 0;
    if (!IsNull(fieldCell) && !isNullOrEmptyString(selectedFormArea)) {
        var $v_1 = XUI.Xml.SelectSingleNode(fieldCell, "control/@datafieldname", null);
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.nodeValue, $v_3 = "";
            switch (selectedFormArea) {
            case "header":
                $v_3 = "/entity/form/header/rows/row/cell/control[@datafieldname='" + $v_2 + "']";
                break;
            case "section":
                $v_3 = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@datafieldname='" +
                    $v_2 +
                    "']";
                break;
            case "footer":
                $v_3 = "/entity/form/footer/rows/row/cell/control[@datafieldname='" + $v_2 + "']";
                break
            }
            var $v_4 = fieldCell.ownerDocument, $v_5 = XUI.Xml.SelectNodes($v_4, $v_3, null);
            if (!IsNull($v_5)) $v_0 = $v_5.length
        }
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.modifySubGridRowSpanIfNotAutoExpanding = function(subGridNode) {
    var $v_0 = false,
        $v_1 = false,
        $v_2 = false,
        $v_3 = false,
        $v_4 = false,
        $v_5 = Mscrm.FormXmlUtils.getNodeValue(XUI.Xml
            .SelectSingleNode(subGridNode, "control/parameters/ChartGridMode", null));
    if (!isNullOrEmptyString($v_5) && $v_5 === "Chart") $v_0 = true;
    $v_1 = Mscrm.FieldPropertiesUtils.$18(subGridNode, "EnableViewPicker");
    $v_2 = Mscrm.FieldPropertiesUtils.$18(subGridNode, "EnableQuickFind");
    $v_4 = Mscrm.FieldPropertiesUtils.$18(subGridNode, "EnableJumpBar");
    var $v_6 = Mscrm.FormXmlUtils.getAttributeValue(subGridNode, "showlabel");
    if (!IsNull($v_6)) $v_3 = $v_6.toString().toUpperCase() === "TRUE" ? true : false;
    var $v_7 = 1, $v_8 = Mscrm.FormXmlUtils.getAttributeValue(subGridNode, "rowspan");
    if (!IsNull($v_8)) {
        $v_7 = parseInt($v_8.toString());
        var $v_9 = $v_7 + GetGutterValue($v_0, $v_1, $v_2, $v_3, $v_4);
        Mscrm.FieldPropertiesUtils.adjustFormXmlForRowSpanChange(subGridNode, $v_7, $v_9);
        Mscrm.FormXmlUtils.addAttribute(subGridNode, "rowspan", $v_9.toString())
    }
};
Mscrm.FieldPropertiesUtils.$18 = function($p0, $p1) {
    var $v_0 = false,
        $v_1 = Mscrm.FormXmlUtils.getNodeValue(XUI.Xml.SelectSingleNode($p0, "control/parameters/" + $p1, null));
    if (!isNullOrEmptyString($v_1)) $v_0 = $v_1.toUpperCase() === "TRUE" ? true : false;
    return $v_0
};
Mscrm.FieldPropertiesUtils.$1F = function($p0, $p1, $p2, $p3) {
    for (var $v_0 = 0; $v_0 < $p0.$0_0.$3_0 - $p1.$0_0.$3_0; $v_0++)
        if (!IsNull($p2)) {
            for (var $v_1 = 0; $v_1 < $p3; $v_1++) {
                var $v_2 = $p2.childNodes[$p1.$0_0.$2_0];
                $p2.insertBefore(Mscrm.DragDropUtils.createSystemSpacerXml(), $v_2)
            }
            $p2 = XUI.Html.DomUtils.GetNextSibling($p2)
        }
};
Mscrm.FieldPropertiesUtils.$1n = function($p0, $p1) {
    var $v_0 = 0,
        $v_1 = $p0.$0_0.$2_0,
        $v_2 = $p0.$0_0.$3_0,
        $v_3 = 2,
        $v_4 = $p0.$7_0.attributes.getNamedItem("columns");
    if ($v_4) $v_3 = XUI.Xml.GetText($v_4).length;
    for (var $v_5 = $p0.$4_0, $v_6 = 0; $v_6 < $v_3 - $v_1 - 1; $v_6++) {
        for (var $v_7 = true, $v_8 = null, $v_9 = 0; $v_9 < $p1; $v_9++) {
            $v_8 = $v_5.childNodes[$v_2 + $v_9];
            var $v_A = $v_8.childNodes[$v_1 + $v_6 + 1],
                $v_B = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_A, "control", null).attributes.getNamedItem("id"));
            if (!$v_B.startsWith("spacer_System")) {
                $v_7 = false;
                break
            }
        }
        if ($v_7) $v_0++
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.$17 = function($p0) {
    var $v_0 = null,
        $v_1 = XUI.Xml.SelectSingleNode($p0, "rows", null),
        $v_2 = XUI.Xml.SelectNodes($p0, "rows/row", null),
        $v_3 = 1,
        $v_4 = null,
        $v_5 = $v_2[$v_2.length - $v_3];
    if ($v_5) {
        Mscrm.DragDropUtils.addPlaceHolders($v_1);
        while (true) {
            $v_5 = $v_2[$v_2.length - $v_3];
            $v_3++;
            $v_4 = XUI.Xml.DomUtils.GetFirstChild($v_5);
            var $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "control", null).attributes.getNamedItem("id"));
            if (!$v_6.startsWith("placeHolder")) break
        }
        Mscrm.DragDropUtils.removePlaceHolders($v_1);
        $v_0 = $get(XUI.Xml.GetText($v_4.attributes.getNamedItem("id")))
    }
    return $v_0
};
Mscrm.FieldPropertiesUtils.$1V = function($p0) {
    for (var $v_0 = true, $v_1 = 0; $v_1 < $p0.length; $v_1++)
        if (!$p0[$v_1].$n_0) {
            $v_0 = false;
            break
        }
    return $v_0
};
Mscrm.ChartGridMode = function() {};
Mscrm.FormNavigationUtils = function() {};
Mscrm.FormNavigationUtils.getNavigationBarNode = function(domElem) {
    var $v_0 = null;
    if (!IsNull(domElem))
        switch (domElem.className) {
        case "navGroup":
            $v_0 = Mscrm.FormUtils.getNodeById("/entity/form/Navigation/NavBarAreas/NavBarArea", domElem.id);
            break;
        case "navItem":
            var $v_1 = domElem.getAttribute("atype");
            if (!IsNull($v_1))
                if ($v_1.toString() === "navRelations")
                    $v_0 = Mscrm.FormUtils.getNodeById("/entity/form/Navigation/NavBar/NavBarByRelationshipItem",
                        domElem.id);
                else $v_0 = Mscrm.FormUtils.getNodeById("/entity/form/Navigation/NavBar/NavBarItem", domElem.id);
            break
        }
    return $v_0
};
Mscrm.FormNavigationUtils.createRelationShipNode = function(domElem) {
    var $v_0 = null;
    if (!IsNull(domElem)) {
        $v_0 = Mscrm.FormUtils.createNode("NavBarByRelationshipItem");
        Mscrm.FormUtils.addAttribute($v_0, "RelationshipName", domElem.getAttribute("schemaName").toString());
        Mscrm.FormUtils.addAttribute($v_0, "Id", "nav_" + domElem.getAttribute("schemaName").toString());
        Mscrm.FormUtils.addAttribute($v_0, "Icon", domElem.getAttribute("Icon").toString());
        Mscrm.FormUtils.addAttribute($v_0, "Show", "true");
        Mscrm.FormXmlUtils.addAttribute($v_0, "dirty", "true");
        Mscrm.FormXmlUtils.addAttribute($v_0, "navPaneId", domElem.getAttribute("navPaneId").toString());
        var $v_1 = Mscrm.FormUtils.createNode("Titles"), $v_2 = Mscrm.FormUtils.createNode("Title");
        Mscrm.FormUtils.addAttribute($v_2, "LCID", domElem.getAttribute("languageCode").toString());
        Mscrm.FormUtils.addAttribute($v_2, "Text", domElem.getAttribute("displayName").toString());
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1)
    }
    return $v_0
};
Mscrm.FormNavigationUtils.setRelationshipsDirty = function(relationName) {
    for (var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
                 "/entity/form/Navigation/NavBar/NavBarByRelationshipItem[@RelationshipName='" + relationName + "']",
                 null),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) Mscrm.FormXmlUtils.addAttribute($v_0[$v_1], "dirty", "true")
};
Mscrm.FormNavigationUtils.getNewRelationshipNode = function(domElem) {
    var $v_0 = Mscrm.FormNavigationUtils.createRelationShipNode(domElem);
    !IsNull($v_0) &&
        !IsNull(domElem.getAttribute("schemaName")) &&
        Mscrm.FormNavigationUtils.setRelationshipsDirty(domElem.getAttribute("schemaName").toString());
    return $v_0
};
Mscrm.FormNavigationUtils.getVisibleGroupChildNodes = function(groupId) {
    return XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/Navigation/NavBar/NavBarByRelationshipItem[@Area='" +
        groupId +
        "' and (not(@Show) or @Show='true')]",
        null)
};
Mscrm.FormNavigationUtils.createEmptyRelationShipNode = function(groupId) {
    var $v_0 = null;
    $v_0 = Mscrm.FormUtils.createNode("NavBarByRelationshipItem");
    Mscrm.FormUtils.addAttribute($v_0, "RelationshipName", "spacer");
    Mscrm.FormUtils.addAttribute($v_0, "Id", "spacer_" + Mscrm.Utilities.createGuid());
    Mscrm.FormUtils.addAttribute($v_0, "Icon", "");
    Mscrm.FormUtils.addAttribute($v_0, "isNavSpacer", "true");
    Mscrm.FormUtils.addAttribute($v_0, "Area", groupId);
    Mscrm.FormUtils.addAttribute($v_0, "Sequence", "1000");
    return $v_0
};
Mscrm.FormNavigationUtils.addCustomLink = function() {
    var $v_0 = {};
    $v_0["displayName"] = "";
    $v_0["icon"] = "";
    $v_0["url"] = "";
    var $v_1 = Mscrm.CrmUri.create("/tools/formEditor/Dialogs/navLink.aspx?"), $v_2 = new Xrm.DialogOptions;
    $v_2.height = 330;
    $v_2.width = 510;
    var $v_3 = Mscrm.FormNavigationUtils.bindCustomLink;
    Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, $v_3)
};
Mscrm.FormNavigationUtils.bindCustomLink = function(result) {
    var $v_0 = result;
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.FormNavigationUtils.createCustomLinkNode(), $v_2 = GetActiveElement();
        if (!IsNull($v_1) && !IsNull($v_2)) {
            var $v_3 = "Info";
            switch ($v_2.className) {
            case "navGroup":
                $v_3 = $v_2.id;
                $v_2 = Mscrm.FormNavigationUtils.getLastElementInGroup($v_2);
                break;
            case "navItem":
                $v_3 = $v_2.parentNode.parentNode.id;
                break
            }
            Mscrm.FormUtils.addAttribute($v_1, "Icon", $v_0.icon);
            Mscrm.FormUtils.addAttribute($v_1, "Url", $v_0.url);
            Mscrm.FormUtils.addAttribute($v_1, "Area", $v_3);
            var $v_4 = XUI.Xml.SelectSingleNode($v_1,
                "Titles/Title[@LCID='" + window.USER_LANGUAGE_CODE.toString() + "']",
                null);
            if (!IsNull($v_4)) {
                Mscrm.FormUtils.addAttribute($v_4, "Text", $v_0.displayName);
                var $v_5 = Mscrm.FormNavigationUtils.getNavigationBarNode($v_2);
                Mscrm.FormXmlUtils.addAttribute($v_1,
                    "Sequence",
                    Mscrm.FormXmlUtils.getAttributeValue($v_5, "Sequence"));
                $v_5.parentNode.insertBefore($v_1, XUI.Xml.DomUtils.GetNextSibling($v_5));
                RefreshFormEditor(0);
                Mscrm.FormUtils.clickNode($v_1)
            }
        }
    }
};
Mscrm.FormNavigationUtils.bindNavLinkUpdates = function(result) {
    var $v_0 = result;
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.FormNavigationUtils.getNavigationBarNode(GetActiveElement());
        if (!IsNull($v_1)) {
            Mscrm.FormUtils.addAttribute($v_1, "Icon", $v_0.icon);
            Mscrm.FormUtils.addAttribute($v_1, "Url", $v_0.url);
            var $v_2 = XUI.Xml.SelectSingleNode($v_1,
                "Titles/Title[@LCID='" + window.USER_LANGUAGE_CODE.toString() + "']",
                null);
            if (!IsNull($v_2)) {
                Mscrm.FormUtils.addAttribute($v_2, "Text", $v_0.displayName);
                RefreshFormEditor(0);
                Mscrm.FormUtils.clickNode($v_1)
            }
        }
    }
};
Mscrm.FormNavigationUtils.bindNavGroupChanges = function(result) {
    if (!IsNull(result)) {
        var $v_0 = result, $v_1 = Mscrm.FormNavigationUtils.getNavigationBarNode(GetActiveElement());
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.SelectSingleNode($v_1,
                "Titles/Title[@LCID='" + window.USER_LANGUAGE_CODE.toString() + "']",
                null);
            if (!IsNull($v_2)) {
                var $v_3 = Mscrm.FormXmlUtils.getAttributeValue($v_2, "Text");
                if ($v_3 !== $v_0.displayName) {
                    Mscrm.FormXmlUtils.addAttribute($v_2, "Text", $v_0.displayName);
                    Mscrm.FormXmlUtils.addAttribute($v_1, "dirty", "true");
                    RefreshFormEditor(0)
                }
                Mscrm.FormUtils.clickNode($v_1)
            }
        }
    }
};
Mscrm.FormNavigationUtils.performActionNavRelationship = function(result) {
    if (!IsNull(result)) {
        var $v_0 = result, $v_1 = Mscrm.FormNavigationUtils.getNavigationBarNode(GetActiveElement());
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.SelectSingleNode($v_1,
                "Titles/Title[@LCID='" + window.USER_LANGUAGE_CODE.toString() + "']",
                null);
            if (!IsNull($v_2)) {
                var $v_3 = Mscrm.FormXmlUtils.getAttributeValue($v_2, "Text");
                if ($v_3 !== $v_0.displayName) {
                    Mscrm.FormXmlUtils.addAttribute($v_2, "Text", $v_0.displayName);
                    Mscrm.FormXmlUtils.addAttribute($v_1, "dirty", "true");
                    RefreshFormEditor(0)
                }
                Mscrm.FormUtils.clickNode($v_1)
            }
        }
    }
};
Mscrm.FormNavigationUtils.createCustomLinkNode = function() {
    var $v_0 = Mscrm.FormUtils.createNode("NavBarItem");
    Mscrm.FormUtils.addAttribute($v_0, "Icon", "");
    Mscrm.FormUtils.addAttribute($v_0, "Url", "");
    Mscrm.FormUtils.addAttribute($v_0, "Id", "navLink" + Mscrm.Utilities.createGuid());
    var $v_1 = Mscrm.FormUtils.createNode("Titles"), $v_2 = Mscrm.FormUtils.createNode("Title");
    Mscrm.FormUtils.addAttribute($v_2, "LCID", window.USER_LANGUAGE_CODE.toString());
    $v_1.appendChild($v_2);
    $v_0.appendChild($v_1);
    return $v_0
};
Mscrm.FormNavigationUtils.removeNavItem = function() {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0)) {
        var $v_1 = "", $v_2 = $v_0.getAttribute("atype");
        if (!IsNull($v_2)) {
            var $v_3 = Mscrm.FormNavigationUtils.getNavigationBarNode($v_0),
                $v_4 = $v_0.getAttribute("areaId"),
                $v_5 = Mscrm.FormNavigationUtils.getNextDOMElement($v_0);
            if (!IsNull($v_5)) $v_1 = $v_5.id;
            if ($v_2.toString() === "navLinks") $v_3.parentNode.removeChild($v_3);
            else {
                Mscrm.FormXmlUtils.addAttribute($v_3, "Show", "false");
                Mscrm.FormXmlUtils.addAttribute($v_3, "dirty", "true");
                RefreshRelationShipExplorer()
            }
            !IsNull($v_4) &&
                !Mscrm.FormNavigationUtils.getVisibleGroupChildNodes($v_4.toString()).length &&
                Mscrm.FormUtils.appendChildToPath("/entity/form/Navigation/NavBar",
                    Mscrm.FormNavigationUtils.createEmptyRelationShipNode($v_4.toString()));
            RefreshFormEditor(0);
            if (!IsNull($v_1)) {
                $v_5 = $get($v_1);
                !IsNull($v_5) && Mscrm.Utilities.click($v_5)
            }
        }
    }
};
Mscrm.FormNavigationUtils.getNextDOMElement = function(currentElement) {
    var $v_0 = null;
    if (!IsNull(currentElement)) {
        $v_0 = XUI.Html.DomUtils.GetNextSibling(currentElement);
        if (IsNull($v_0)) {
            var $v_1 = currentElement.getAttribute("areaId");
            if (!IsNull($v_1)) $v_0 = $get($v_1.toString())
        }
    }
    return $v_0
};
Mscrm.FormNavigationUtils.getFirstGroupOfNavigation = function() {
    if (Mscrm.Utilities.isEdge()) Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
    var $v_0 = null,
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/Navigation/NavBarAreas/NavBarArea",
            null);
    if ($v_1.length > 0) $v_0 = $get($v_1[0].attributes.getNamedItem("Id").nodeValue);
    return $v_0
};
Mscrm.FormNavigationUtils.getFirstGroupNode = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/Navigation/NavBarAreas/NavBarArea",
        null);
    if ($v_0.length > 0) return $v_0[0];
    else return null
};
Mscrm.FormNavigationUtils.addNavItemFromRelationshipExplorer = function(domEvent, relationShipDom) {
    var $v_0 = domEvent.target;
    if (!IsNull(relationShipDom)) $v_0 = relationShipDom;
    var $v_1 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($v_1)) {
        if ($v_1.className === "navGroup") $v_1 = Mscrm.FormNavigationUtils.getLastElementInGroup($v_1);
        if (!IsNull($v_1)) {
            var $v_2 = new Mscrm.NavigationDropTarget($v_1);
            $v_2.initialize();
            var $v_3 = new Array(2);
            $v_3[0] = $v_0;
            $v_3[1] = null;
            $v_2.drop("fromFieldExplorer", $v_0.className, $v_3);
            $v_2.dispose()
        }
    }
};
Mscrm.FormNavigationUtils.updateNavItem = function(domEvent) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor !== "navigation") {
        SwitchFormSections("navigation", GetActiveElement());
        Mscrm.FormUtils.makeFormXmlDirty();
        Mscrm.Utilities.click(Mscrm.FormNavigationUtils.getFirstGroupOfNavigation())
    } else {
        var $v_0 = GetActiveElement();
        switch ($v_0.className) {
        case "navGroup":
            Mscrm.FormNavigationUtils.$2A($v_0);
            break;
        case "navItem":
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.getAttribute("atype");
                if (!IsNull($v_1))
                    switch ($v_1.toString()) {
                    case "navLinks":
                        Mscrm.FormNavigationUtils.$2B($v_0);
                        break;
                    case "navRelations":
                        !$v_0.id.startsWith("spacer") && Mscrm.FormNavigationUtils.$2C($v_0);
                        break
                    }
            }
            break
        }
    }
    if (!IsNull(domEvent)) {
        domEvent.preventDefault();
        domEvent.stopPropagation()
    }
};
Mscrm.FormNavigationUtils.getFirstElementInGroup = function(currentGroup) {
    var $v_0 = null;
    if (!IsNull(currentGroup)) $v_0 = XUI.Html.DomUtils.GetFirstChild(currentGroup.childNodes[1]);
    return $v_0
};
Mscrm.FormNavigationUtils.getLastElementInGroup = function(group) {
    var $v_0 = null;
    if (!IsNull(group)) {
        var $v_1 = group.getElementsByTagName("LI");
        if (!IsNull($v_1) && $v_1.length > 0) $v_0 = $v_1[$v_1.length - 1]
    }
    return $v_0
};
Mscrm.FormNavigationUtils.resolveSequenceConflictsInNavArea = function(area) {
    for (var $v_0 = Mscrm.DragDropUtils.getChildNodes(XUI.Xml
                 .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/Navigation/NavBar", null)),
        $v_1 = true,
        $v_2 = -1,
        $v_3 = -1,
        $v_4 = -1,
        $v_5 = 0;
        $v_5 < $v_0.length - 1;
        $v_5++)
        if (Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_5], "Area").toString() === area) {
            $v_2 = parseInt(Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_5], "Sequence").toString(), 10);
            if ($v_2 >= 2147483647) {
                $v_1 = false;
                break
            }
            $v_3 = parseInt(Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_5 + 1], "Sequence").toString(), 10);
            if ($v_3 <= $v_2) {
                Mscrm.FormXmlUtils.addAttribute($v_0[$v_5 + 1], "Sequence", ($v_2 + 1).toString());
                Mscrm.FormNavigationUtils.$1P($v_0[$v_5 + 1]) &&
                    Mscrm.FormXmlUtils.addAttribute($v_0[$v_5 + 1], "dirty", "true")
            }
        }
    if (!$v_1)
        for (var $v_6 = $v_0.length - 1; $v_6 > 0; $v_6--)
            if (Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_6], "Area").toString() === area) {
                $v_2 = parseInt(Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_6], "Sequence").toString(), 10);
                if ($v_2 > 2147483647) {
                    $v_2 = 2147483647;
                    Mscrm.FormXmlUtils.addAttribute($v_0[$v_6], "Sequence", $v_2.toString())
                }
                if ($v_2 === 1) break;
                $v_4 = parseInt(Mscrm.FormXmlUtils.getAttributeValue($v_0[$v_6 - 1], "Sequence").toString(), 10);
                if ($v_4 >= $v_2) {
                    Mscrm.FormXmlUtils.addAttribute($v_0[$v_6 - 1], "Sequence", ($v_2 - 1).toString());
                    Mscrm.FormNavigationUtils.$1P($v_0[$v_6 - 1]) &&
                        Mscrm.FormXmlUtils.addAttribute($v_0[$v_6 - 1], "dirty", "true")
                }
            }
};
Mscrm.FormNavigationUtils.$1P = function($p0) {
    var $v_0 = false;
    if (!IsNull($p0) && $p0.nodeName === "NavBarByRelationshipItem") $v_0 = true;
    return $v_0
};
Mscrm.FormNavigationUtils.$2B = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = {};
        $v_0["displayName"] = $p0.getAttribute("displayName").toString();
        var $v_1 = Mscrm.FormNavigationUtils.$1R($p0.getAttribute("Icon").toString()),
            $v_2 = Mscrm.FormNavigationUtils.$1R($p0.getAttribute("Url").toString());
        $v_0["icon"] = $v_1;
        $v_0["url"] = $v_2;
        var $v_3 = Mscrm.CrmUri.create("/tools/formEditor/Dialogs/navLink.aspx");
        $v_3.get_query()["iconWebResourceName"] = $v_1;
        $v_3.get_query()["urlWebResourceName"] = $v_2;
        var $v_4 = new Xrm.DialogOptions;
        $v_4.height = 330;
        $v_4.width = 510;
        var $v_5 = Mscrm.FormNavigationUtils.bindNavLinkUpdates;
        Xrm.Internal.openDialog($v_3.toString(), $v_4, $v_0, null, $v_5)
    }
};
Mscrm.FormNavigationUtils.$2A = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = {};
        $v_0["displayName"] = $p0.getAttribute("displayName").toString();
        var $v_1 = Mscrm.CrmUri.create("/tools/formEditor/Dialogs/navGroup.aspx"), $v_2 = new Xrm.DialogOptions;
        $v_2.height = 210;
        $v_2.width = 300;
        var $v_3 = Mscrm.FormNavigationUtils.bindNavGroupChanges;
        Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, $v_3)
    }
};
Mscrm.FormNavigationUtils.$2C = function($p0) {
    if (!IsNull($p0)) {
        var $v_0 = $p0.getAttribute("RelationshipName");
        if (!IsNull($v_0)) {
            var $v_1 = {};
            $v_1["relationName"] = $v_0.toString();
            $v_1["objectTypeCode"] = GetObjectTypeCode();
            $v_1["displayName"] = $p0.getAttribute("displayName").toString();
            var $v_2 = Mscrm.CrmUri.create("/tools/formEditor/Dialogs/navRelationship.aspx"),
                $v_3 = Mscrm.FormNavigationUtils.performActionNavRelationship,
                $v_4 = new Xrm.DialogOptions;
            $v_4.height = 450;
            $v_4.width = 430;
            Xrm.Internal.openDialog($v_2.toString(), $v_4, $v_1, null, $v_3)
        }
    }
};
Mscrm.FormNavigationUtils.$1R = function($p0) {
    var $v_0 = $p0;
    if (!isNullOrEmptyString($p0) && $p0.toLowerCase().startsWith("$webresource:")
    ) $v_0 = $p0.substring(13, $p0.length);
    return $v_0
};
Mscrm.FormEditorRibbonRules = function() {};
Mscrm.FormEditorRibbonRules.changeProperties = function(active) {
    var $v_0 = true;
    if (active)
        if (active.className === "cell") {
            if (active.getAttribute("name").toString().startsWith("spacer_User") ||
                Mscrm.PreviewCellUtils.isPreviewElement(active)) $v_0 = false;
            if (CellWithEmptyText(active)) $v_0 = false
        } else if (active.className === "socialInsight")
            $v_0 = window._IsSocialInsightsInstanceAvailable && window._AreSocialInsightsEnabled;
        else if (active.className === "interactionwall") $v_0 = false;
    return $v_0
};
Mscrm.FormEditorRibbonRules.removeButtonRule = function(active) {
    var $v_0 = true;
    if (active) {
        if (active.className === "cell" && active.getAttribute("name").toString().startsWith("spacer_System") ||
            (active.className === "header" || active.className === "footer") ||
            active.className === "navGroup" ||
            active.className === "navItem" && active.id.startsWith("spacer_") ||
            CellWithEmptyText(active)) $v_0 = false;
        if (Mscrm.FormEditorVariables.editorType === "dashboardEditor" &&
        (active
            .className ===
            "ms-crm-Tab" ||
            active.className === "crmSection" ||
            active.className === "section")) $v_0 = false
    }
    return $v_0
};
Mscrm.FormEditorRibbonRules.isHeaderOrFooterSelected = function(active) {
    var $v_0 = false;
    if (active) if (active.className === "header" || active.className === "footer") $v_0 = true;
    return $v_0
};
Mscrm.FormEditorRibbonRules.isReferencePanelSectionOrControlSelected = function(active) {
    var $v_0 = false;
    if (active)
        if (active.className === "section" && active.getAttribute("name").toString().startsWith("ref_pan_") ||
            active.className === "referencepanelquickformcollection" ||
            active.className === "referencepanelsubgrid" ||
            active.className === "referencepanelsearchwidget") $v_0 = true;
    return $v_0
};
Mscrm.FormEditorRibbonRules.undoRedoButtonRule = function(buttonName) {
    var $v_0 = false;
    switch (buttonName) {
    case "undo":
        $v_0 = Mscrm.FormUndoRedo.get_canUndo();
        break;
    case "redo":
        $v_0 = Mscrm.FormUndoRedo.get_canRedo();
        break
    }
    return $v_0
};
Mscrm.FormEditorRibbonRules.resizeColumnButtonRule = function(active, isIncrease) {
    if (active)
        if (Mscrm.ResizeUtils.isValidForResize(active.className)) {
            var $v_0 = Mscrm.FormUtils.getAttributeValueForCell(active, "colspan"), $v_1 = 1;
            if (!isNullOrEmptyString($v_0)) $v_1 = parseInt($v_0, 10);
            var $v_2;
            if (!isIncrease) $v_2 = $v_1 > Mscrm.ResizeDefaults.get_minColSpan();
            else {
                var $v_3 = 1, $v_4 = GetCurrentSectionName(active), $v_5 = GetSectionNode($v_4);
                if (!IsNull($v_5)) {
                    var $v_6 = $v_5.attributes.getNamedItem("columns");
                    if (!IsNull($v_6)) $v_3 = XUI.Xml.GetText($v_6).length
                }
                $v_2 = $v_1 < $v_3
            }
            return $v_2
        }
    return false
};
Mscrm.FormEditorRibbonRules.resizeRowButtonRule = function(active, isIncrease) {
    if (active)
        if (Mscrm.ResizeUtils.isValidForResize(active.className)) {
            var $v_0 = Mscrm.FormUtils.getAttributeValueForCell(active, "rowspan"), $v_1 = 1;
            if (!isNullOrEmptyString($v_0)) $v_1 = parseInt($v_0, 10);
            var $v_2 = isIncrease
                ? $v_1 < Mscrm.ResizeDefaults.getMaxRowSpan(active)
                : $v_1 > Mscrm.ResizeDefaults.get_minRowSpan();
            return $v_2
        }
    return false
};
Mscrm.FormEditorRibbonRules.newFormDisabledControlRule = function() {
    if (isNullOrEmptyString(Mscrm.FormEditorVariables.currentFormId) ||
        Mscrm.FormEditorVariables.currentFormId === "{00000000-0000-0000-0000-000000000000}") return false;
    else return true
};
Mscrm.FormEditorVariables = function() {};
Mscrm.FormUndoRedo = function() {};
Mscrm.FormUndoRedo.initialize = function() {
    if (!IsPreviewMode()) {
        var $v_0 = new Mscrm.DirtyPartInfo(false);
        Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo.$I] = $v_0
    }
    Mscrm.FormEditorKeyboardAccessibility.initialize()
};
Mscrm.FormUndoRedo.dispose = function() {
    if (!IsPreviewMode()) Mscrm.FormUndoRedo.$H = null;
    Mscrm.FormEditorKeyboardAccessibility.dispose()
};
Mscrm.FormUndoRedo.addDirtyPartInfo = function(refreshAttrExplorer) {
    if (!IsPreviewMode()) {
        Mscrm.FormUndoRedo.$I === 11 && Mscrm.FormUndoRedo.$29();
        var $v_0 = null;
        if (!IsNull(Mscrm.FormUndoRedo
                .$H) &&
            !IsNull(Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo.$I])) $v_0 = Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo.$I];
        if (!IsNull($v_0) && Mscrm.FormUndoRedo.addDirtyPart)
            if ($v_0.$m_0 !== XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
                var $v_1 = new Mscrm.DirtyPartInfo(refreshAttrExplorer);
                Mscrm.FormUndoRedo.$H[++Mscrm.FormUndoRedo.$I] = $v_1
            } else {
                var $v_2 = $get("editorDiv").scrollTop, $v_3 = GetActiveElement();
                $v_0.$g_0 = $v_2;
                $v_0.$Y_0 = $v_3.id
            }
        Mscrm.FormUndoRedo.fldExpRefreshed = false
    }
};
Mscrm.FormUndoRedo.redo = function() {
    if (!IsNull(Mscrm.FormUndoRedo.$H) && Mscrm.FormUndoRedo.$I < Mscrm.FormUndoRedo.$H.length - 1) {
        var $v_0 = Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo
                .$I +
                1],
            $v_1 = Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo.$I];
        Mscrm.FormUndoRedo.$1S($v_0, $v_1);
        Mscrm.FormUndoRedo.$I++
    }
};
Mscrm.FormUndoRedo.get_canRedo = function() {
    return !IsNull(Mscrm.FormUndoRedo.$H) && Mscrm.FormUndoRedo.$I < Mscrm.FormUndoRedo.$H.length - 1
};
Mscrm.FormUndoRedo.undo = function() {
    if (Mscrm.FormUndoRedo.$I >= 1) {
        var $v_0 = Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo
                .$I -
                1],
            $v_1 = Mscrm.FormUndoRedo.$H[Mscrm.FormUndoRedo.$I];
        Mscrm.FormUndoRedo.$1S($v_0, $v_1);
        Mscrm.FormUndoRedo.$I--
    }
};
Mscrm.FormUndoRedo.get_canUndo = function() { return Mscrm.FormUndoRedo.$I >= 1 };
Mscrm.FormUndoRedo.$29 = function() {
    for (var $v_0 = 0; $v_0 < 11; $v_0++) Mscrm.FormUndoRedo.$H[$v_0] = Mscrm.FormUndoRedo.$H[$v_0 + 1];
    Mscrm.FormUndoRedo.$I--
};
Mscrm.FormUndoRedo.$1S = function($p0, $p1) {
    Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml($p0.$m_0);
    RefreshFormEditor(4);
    var $v_0 = $get($p0.$Y_0);
    SwitchFormSections($p0.$k_0, $v_0);
    if ($p0.$f_0 !== $p1.$f_0 || $p0.$f_0)
        if ($p0.$k_0 === "navigation") RefreshRelationShipExplorer();
        else RefreshAttributeExplorer();
    $get("editorDiv").scrollTop = $p0.$g_0;
    Mscrm.FormUndoRedo.addDirtyPart = false;
    try {
        XUI.Html.DispatchDomEvent($get($p0.$Y_0), XUI.Html.CreateDomEvent("click"))
    } finally {
        Mscrm.FormUndoRedo.addDirtyPart = true
    }
};
Mscrm.DirtyPartInfo = function($p0) {
    this.$m_0 = XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml);
    this.$f_0 = $p0;
    this.$Y_0 = GetActiveElement().id;
    this.$g_0 = $get("editorDiv").scrollTop;
    this.$k_0 = Mscrm.FormEditorVariables.fieldExpIsFor
};
Mscrm.DirtyPartInfo.prototype = {
    $m_0: "",
    $f_0: false,
    $Y_0: "",
    $k_0: "",
    $g_0: 0,
    get_fieldExplorerIsFor: function() { return this.$k_0 },
    get_refreshFieldExplorer: function() { return this.$f_0 },
    get_formXmlString: function() { return this.$m_0 },
    get_selectedElementId: function() { return this.$Y_0 },
    set_selectedElementId: function($p0) {
        this.$Y_0 = $p0;
        return $p0
    },
    get_scrollTop: function() { return this.$g_0 },
    set_scrollTop: function($p0) {
        this.$g_0 = $p0;
        return $p0
    }
};
Mscrm.FormEditorKeyboardAccessibility = function() {};
Mscrm.FormEditorKeyboardAccessibility.initialize = function() {
    $addHandler(document, "keydown", Mscrm.FormEditorKeyboardAccessibility.$s);
    $addHandler(document, "keypress", Mscrm.FormEditorKeyboardAccessibility.$b)
};
Mscrm.FormEditorKeyboardAccessibility.keyDownHandler = function(domEvent) {
    if (IsNull(domEvent) || domEvent.target.tagName === "INPUT" && !domEvent.ctrlKey) return;
    var $v_0 = Mscrm.Utilities.getDomEventKeyCode(domEvent);
    if (domEvent.ctrlKey)
        switch ($v_0) {
        case 83:
            SaveForm(false);
            domEvent.preventDefault();
            break;
        case 13:
            Mscrm.FormEditorVariables.editorType === "formEditor" && SaveAndPublish();
            break
        }
    else if (domEvent.shiftKey && Mscrm.FormEditorVariables.editorType === "dashboardEditor") {
        var $v_1 = GetActiveElement();
        if (!IsNull($v_1))
            switch ($v_0) {
            case 37:
                Mscrm.ResizeUtils.updateColSpan($v_1, false);
                break;
            case 38:
                Mscrm.ResizeUtils.updateRowSpan($v_1, false);
                break;
            case 39:
                Mscrm.ResizeUtils.updateColSpan($v_1, true);
                break;
            case 40:
                Mscrm.ResizeUtils.updateRowSpan($v_1, true);
                break
            }
    } else
        switch ($v_0) {
        case 13:
        case 32:
            Mscrm.FormEditorKeyboardAccessibility.$1l(domEvent);
            break;
        case 37:
            if (window.LOCID_UI_DIR === "RTL") Mscrm.FormEditorKeyboardAccessibility.$1O(domEvent);
            else Mscrm.FormEditorKeyboardAccessibility.$1M(domEvent);
            break;
        case 38:
            Mscrm.FormEditorKeyboardAccessibility.$1m(domEvent);
            break;
        case 39:
            if (window.LOCID_UI_DIR === "RTL") Mscrm.FormEditorKeyboardAccessibility.$1M(domEvent);
            else Mscrm.FormEditorKeyboardAccessibility.$1O(domEvent);
            break;
        case 40:
            Mscrm.FormEditorKeyboardAccessibility.$1k(domEvent);
            break;
        case 127:
        case 46:
            var $v_2 = GetActiveElement();
            if (Mscrm.FormEditorVariables.editorType === "dashboardEditor") {
                if ($v_2
                    .className ===
                    "ms-crm-Tab" ||
                    $v_2.className === "crmSection" ||
                    $v_2.className === "section") return
            } else if (Mscrm.FormEditorVariables.editorType === "formEditor") if (CellWithEmptyText($v_2)) return;
            Delete();
            break
        }
};
Mscrm.FormEditorKeyboardAccessibility.keyPressHandler = function(domEvent) {
    if (domEvent.ctrlKey) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode(domEvent);
        switch ($v_0) {
        case 25:
        case 121:
            !IsPreviewMode() && Mscrm.FormUndoRedo.redo();
            break;
        case 26:
        case 122:
            !IsPreviewMode() && Mscrm.FormUndoRedo.undo();
            break;
        case 13:
        case 109:
            Mscrm.XmlUtil.viewXml(XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml));
            break;
        case 115:
            domEvent.preventDefault();
            break
        }
    }
};
Mscrm.FormEditorKeyboardAccessibility.dispose = function() {
    if (Mscrm.FormEditorKeyboardAccessibility.$b) {
        $removeHandler(document, "keypress", Mscrm.FormEditorKeyboardAccessibility.$b);
        Mscrm.FormEditorKeyboardAccessibility.$b = null
    }
    if (!IsNull(Mscrm.FormEditorKeyboardAccessibility.$s)) {
        $removeHandler(document, "keydown", Mscrm.FormEditorKeyboardAccessibility.$b);
        Mscrm.FormEditorKeyboardAccessibility.$s = null
    }
};
Mscrm.FormEditorKeyboardAccessibility.$1l = function($p0) {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($p0.target)) {
        if ($v_0.id === $p0.target.id) {
            if (CellWithEmptyText($v_0)) return;
            ViewProperties($p0, $v_0)
        } else {
            var $v_1 = $p0.target.className, $v_2 = $p0.target.getAttribute("type");
            if (!isNullOrEmptyString($v_1) && !IsNull($v_2))
                switch ($v_1) {
                case "ms-crm-Menu-Label":
                    ($v_0.className === "ms-crm-Tab" || $v_0.className === "section") &&
                        Mscrm.TabUtils.expandCollapseTab($p0.target);
                    break;
                case "PlaceholderAnchor":
                    return;
                case "ms-crm-Dialog-ListItem-ImportMap":
                    if ($v_2.toString() === "cell") AddFields($p0.target, true);
                    else if ($v_2.toString() === "businessrule") Mscrm.BusinessRulesExplorer.handleKeyPress($p0);
                    else Mscrm.FormNavigationUtils.addNavItemFromRelationshipExplorer($p0, null);
                    break;
                case "ms-crm-FormSelector":
                    Mscrm.Utilities.click($p0.target);
                    break;
                case "ms-crm-Button":
                    if (Mscrm.FormEditorVariables.isCustomizabe === "true")
                        switch ($p0.target.id) {
                        case "newField":
                            AddAttribute();
                            break;
                        case "new1ToNRelationship":
                            Mscrm.RelatioShipExplorerUtils.createNewRelationship($p0, "referenced");
                            break;
                        case "newNToNRelationship":
                            Mscrm.RelatioShipExplorerUtils.createNewRelationship($p0, "many");
                            break
                        }
                    break;
                default:
                    SetActiveObject($p0);
                    break
                }
            else SetActiveObject($p0)
        }
        $p0.preventDefault();
        $p0.stopPropagation()
    }
};
Mscrm.FormEditorKeyboardAccessibility.$1k = function($p0) {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($p0.target))
        if ($v_0.id === $p0.target.id) {
            var $v_1 = Mscrm.DragDropUtils.getControlType($v_0);
            switch ($v_1) {
            case 1:
                var $v_2 = Mscrm.DragDropUtils.getCellNodeFromId($v_0.getAttribute("id").toString()),
                    $v_3 = $v_2.parentNode.parentNode;
                Mscrm.DragDropUtils.addPlaceHolders($v_3);
                var $v_4 = Mscrm.DragDropUtils.createElementObject($v_0), $v_5 = null;
                if (!Mscrm.DragDropUtils
                    .isElementInLastRow($v_4)) $v_5 = Mscrm.FormEditorKeyboardAccessibility.$1e($v_4);
                else $v_5 = Mscrm.FormEditorKeyboardAccessibility.$1K($v_4);
                Mscrm.DragDropUtils.removePlaceHolders($v_3);
                if (!IsNull($v_5)) {
                    Mscrm.FormEditorKeyboardAccessibility.$w($v_0, $v_5, true);
                    $p0.preventDefault()
                }
                break;
            case 2:
                var $v_6 = Mscrm.DragDropUtils.getSectionNode($v_0.id),
                    $v_7 = XUI.Xml.DomUtils.GetNextSibling($v_6),
                    $v_8 = true;
                if (IsNull($v_7)) {
                    var $v_F = $v_6.parentNode.parentNode.parentNode.parentNode,
                        $v_G = XUI.Xml.DomUtils.GetNextSibling($v_F);
                    $v_7 = Mscrm.DragDropUtils.getFirstSectionOfTab($v_G);
                    Mscrm.TabUtils.expandTabIfRequired($v_G);
                    $v_8 = false
                }
                if (!IsNull($v_7)) {
                    var $v_H = XUI.Xml.GetText($v_7.attributes.getNamedItem("id"));
                    Mscrm.FormEditorKeyboardAccessibility.$o($v_0, $v_8, $get($v_H));
                    $p0.preventDefault()
                }
                break;
            case 3:
                var $v_9 = Mscrm.DragDropUtils.getTabNode($v_0.id), $v_A = XUI.Xml.DomUtils.GetNextSibling($v_9);
                if (!IsNull($v_A)) {
                    var $v_I = XUI.Xml.GetText($v_A.attributes.getNamedItem("id"));
                    Mscrm.FormEditorKeyboardAccessibility.$o($v_0, true, $get($v_I))
                }
                break;
            case 4:
                var $v_B = $v_0, $v_C = XUI.Html.DomUtils.GetNextSibling($v_0), $v_D = true;
                if (IsNull($v_C)) {
                    var $v_J = XUI.Html.DomUtils.GetNextSibling($v_B.parentNode.parentNode);
                    $v_C = Mscrm.FormNavigationUtils.getFirstElementInGroup($v_J);
                    $v_D = false
                }
                !IsNull($v_C) && Mscrm.FormEditorKeyboardAccessibility.$x($v_B, $v_C, $v_D);
                break;
            case 6:
                var $v_E = XUI.Html.DomUtils.GetNextSibling($v_0);
                !IsNull($v_E) && Mscrm.FormEditorKeyboardAccessibility.$x($v_0, $v_E, true);
                break
            }
        }
};
Mscrm.FormEditorKeyboardAccessibility.$1m = function($p0) {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($p0.target))
        if ($v_0.id === $p0.target.id) {
            var $v_1 = Mscrm.DragDropUtils.getControlType($v_0);
            switch ($v_1) {
            case 1:
                var $v_2 = null,
                    $v_3 = Mscrm.DragDropUtils.getCellNodeFromId($v_0.getAttribute("id").toString()),
                    $v_4 = $v_3.parentNode.parentNode;
                Mscrm.DragDropUtils.addPlaceHolders($v_4);
                var $v_5 = Mscrm.DragDropUtils.createElementObject($v_0), $v_6 = null;
                if ($v_5.$0_0.$3_0) {
                    $v_6 = Mscrm.FormEditorKeyboardAccessibility.$16($v_5);
                    $v_6.$A_2 = false
                } else if (Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
                    var $v_G = XUI.Xml.DomUtils.GetPrevSibling($v_5.$7_0);
                    if (IsNull($v_G)) {
                        $v_G = Mscrm.DragDropUtils.getLastSectionOfTab(XUI.Xml.DomUtils.GetPrevSibling($v_5.$8_0));
                        Mscrm.TabUtils.expandTabIfRequired(XUI.Xml.DomUtils.GetPrevSibling($v_5.$8_0))
                    }
                    if (!IsNull($v_G)) {
                        var $v_H = Mscrm.FormUtils.getAttributeValue($v_G, 3);
                        if ($v_H >= $v_5.$5_0) {
                            $v_2 = Mscrm.DragDropUtils.getFirstValidCellOfLastRow($v_G);
                            if (!IsNull($v_2)) {
                                var $v_I = $get($v_2.attributes.getNamedItem("id").nodeValue);
                                if (!IsNull($v_I)) {
                                    $v_6 = new Mscrm.DropTarget($v_I, "section");
                                    $v_6.$A_2 = true;
                                    if (!Mscrm.OperationValidator
                                        .isOperationValid(1, $v_0, $v_I, null)) $v_6.$F_2 = false
                                }
                            }
                        }
                    }
                }
                Mscrm.DragDropUtils.removePlaceHolders($v_4);
                if (!IsNull($v_6)) {
                    var $v_J = $v_6.get_element().parentNode.parentNode.parentNode.id;
                    Mscrm.FormEditorKeyboardAccessibility.$w($v_0, $v_6, false);
                    var $v_K = $v_0.id;
                    Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl($v_J, $v_K);
                    Mscrm.FieldPropertiesUtils.clickControl($v_K, null);
                    $p0.preventDefault()
                }
                break;
            case 2:
                var $v_7 = Mscrm.DragDropUtils.getSectionNode($v_0.id),
                    $v_8 = XUI.Xml.DomUtils.GetPrevSibling($v_7),
                    $v_9 = false;
                if (IsNull($v_8)) {
                    var $v_L = $v_7.parentNode.parentNode.parentNode.parentNode,
                        $v_M = XUI.Xml.DomUtils.GetPrevSibling($v_L);
                    $v_8 = Mscrm.DragDropUtils.getLastSectionOfTab($v_M);
                    Mscrm.TabUtils.expandTabIfRequired($v_M);
                    $v_9 = true
                }
                if (!IsNull($v_8)) {
                    var $v_N = XUI.Xml.GetText($v_8.attributes.getNamedItem("id"));
                    Mscrm.FormEditorKeyboardAccessibility.$o($v_0, $v_9, $get($v_N));
                    $p0.preventDefault()
                }
                break;
            case 3:
                var $v_A = Mscrm.DragDropUtils.getTabNode($v_0.id), $v_B = XUI.Xml.DomUtils.GetPrevSibling($v_A);
                if (!IsNull($v_B)) {
                    var $v_O = XUI.Xml.GetText($v_B.attributes.getNamedItem("id"));
                    Mscrm.FormEditorKeyboardAccessibility.$o($v_0, false, $get($v_O))
                }
                break;
            case 4:
                var $v_C = $v_0, $v_D = XUI.Html.DomUtils.GetPrevSibling($v_0), $v_E = false;
                if (IsNull($v_D)) {
                    var $v_P = XUI.Html.DomUtils.GetPrevSibling($v_C.parentNode.parentNode);
                    $v_D = Mscrm.FormNavigationUtils.getLastElementInGroup($v_P);
                    $v_E = true;
                    if (IsNull($v_D)) {
                        $v_D = Mscrm.FormNavigationUtils.getFirstElementInGroup($v_P);
                        $v_E = false
                    }
                }
                !IsNull($v_D) && Mscrm.FormEditorKeyboardAccessibility.$x($v_C, $v_D, $v_E);
                break;
            case 6:
                var $v_F = XUI.Html.DomUtils.GetPrevSibling($v_0);
                !IsNull($v_F) && Mscrm.FormEditorKeyboardAccessibility.$x($v_0, $v_F, false);
                break
            }
        }
};
Mscrm.FormEditorKeyboardAccessibility.$1M = function($p0) {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($p0.target))
        if ($v_0.id === $p0.target.id) {
            var $v_1 = Mscrm.DragDropUtils.getControlType($v_0);
            switch ($v_1) {
            case 1:
                var $v_2 = Mscrm.DragDropUtils.getCellNodeFromId($v_0.getAttribute("id").toString()),
                    $v_3 = $v_2.parentNode.parentNode;
                Mscrm.DragDropUtils.addPlaceHolders($v_3);
                var $v_4 = Mscrm.DragDropUtils.createElementObject($v_0), $v_5 = null;
                if (!IsNull(XUI.Xml.DomUtils.GetPrevSibling($v_2))) {
                    $v_4.$0_0.$3_0 += 1;
                    $v_4.$0_0.$2_0 -= 1;
                    $v_5 = Mscrm.FormEditorKeyboardAccessibility.$16($v_4)
                } else if (!IsNull($v_4.$8_0)) {
                    var $v_6 = XUI.Xml.SelectNodes($v_4.$8_0, "columns/column", null), $v_7 = $v_6.length;
                    if ($v_7 === 2) {
                        var $v_8 = XUI.Xml.SelectNodes($v_6[0], "sections/section", null)[0],
                            $v_9 = Mscrm.FormUtils.getAttributeValue($v_8, 3);
                        if ($v_9 >= $v_4.$5_0) {
                            var $v_A = Mscrm.DragDropUtils.getFirstCellOfSection($v_8),
                                $v_B = $get($v_A.attributes.getNamedItem("id").nodeValue);
                            $v_5 = new Mscrm.DropTarget($v_B, "section");
                            if (!Mscrm.OperationValidator.isOperationValid(1, $v_0, $v_B, null)) $v_5.$F_2 = false
                        }
                    }
                }
                Mscrm.DragDropUtils.removePlaceHolders($v_3);
                if (!IsNull($v_5)) {
                    var $v_C = $v_5.get_element().parentNode.parentNode.parentNode.id;
                    $v_5.$A_2 = false;
                    Mscrm.FormEditorKeyboardAccessibility.$w($v_0, $v_5, false);
                    var $v_D = $v_0.id;
                    Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl($v_C, $v_D);
                    Mscrm.FieldPropertiesUtils.clickControl($v_D, null);
                    $p0.preventDefault()
                }
                break;
            case 2:
                Mscrm.FormEditorKeyboardAccessibility.$1N($v_0, 37, $p0);
                break;
            case 3:
                break
            }
        }
};
Mscrm.FormEditorKeyboardAccessibility.$1O = function($p0) {
    var $v_0 = GetActiveElement();
    if (!IsNull($v_0) && !IsNull($p0.target))
        if ($v_0.id === $p0.target.id) {
            var $v_1 = Mscrm.DragDropUtils.getControlType($v_0);
            switch ($v_1) {
            case 1:
                var $v_2 = Mscrm.DragDropUtils.getCellNodeFromId($v_0.getAttribute("id").toString()),
                    $v_3 = $v_2.parentNode.parentNode,
                    $v_4 = null,
                    $v_5 = null;
                if (!IsNull(XUI.Xml.DomUtils.GetNextSibling($v_2))) {
                    Mscrm.DragDropUtils.addPlaceHolders($v_3);
                    $v_5 = Mscrm.DragDropUtils.createElementObject($v_0);
                    var $v_6 = Mscrm.FormUtils.getAttributeValue($v_3.parentNode, 3),
                        $v_7 = $v_6 - ($v_5.$5_0 + $v_5.$0_0.$2_0);
                    if ($v_7 >= $v_5.$5_0) {
                        $v_5.$0_0.$3_0 += 1;
                        $v_5.$0_0.$2_0 += $v_5.$5_0;
                        $v_4 = Mscrm.FormEditorKeyboardAccessibility.$16($v_5)
                    }
                    Mscrm.DragDropUtils.removePlaceHolders($v_3)
                } else {
                    Mscrm.DragDropUtils.addPlaceHolders($v_3);
                    $v_5 = Mscrm.DragDropUtils.createElementObject($v_0);
                    Mscrm.DragDropUtils.removePlaceHolders($v_3);
                    if (!IsNull($v_5.$8_0)) {
                        var $v_8 = XUI.Xml.SelectNodes($v_5.$8_0, "columns/column", null),
                            $v_9 = $v_8.length,
                            $v_A = Mscrm.FormUtils.getAttributeValue($v_5.$7_0, 3);
                        if ($v_9 === 2 && $v_5.$5_0 + $v_5.$0_0.$2_0 === $v_A) {
                            var $v_B = XUI.Xml.SelectNodes($v_8[1], "sections/section", null)[0],
                                $v_C = Mscrm.FormUtils.getAttributeValue($v_B, 3);
                            if ($v_C >= $v_5.$5_0) {
                                var $v_D = Mscrm.DragDropUtils.getFirstCellOfSection($v_B),
                                    $v_E = $get($v_D.attributes.getNamedItem("id").nodeValue);
                                $v_4 = new Mscrm.DropTarget($v_E, "section");
                                if (!Mscrm.OperationValidator.isOperationValid(1, $v_0, $v_E, null)) $v_4.$F_2 = false
                            }
                        }
                    }
                }
                if (!IsNull($v_4)) {
                    var $v_F = $v_4.get_element().parentNode.parentNode.parentNode.id;
                    $v_4.$A_2 = false;
                    Mscrm.FormEditorKeyboardAccessibility.$w($v_0, $v_4, false);
                    var $v_G = $v_0.id;
                    Mscrm.FieldPropertiesUtils.pullUpFieldsIfRequiredAfterAddingControl($v_F, $v_G);
                    Mscrm.FieldPropertiesUtils.clickControl($v_G, null);
                    $p0.preventDefault()
                }
                break;
            case 2:
                Mscrm.FormEditorKeyboardAccessibility.$1N($v_0, 39, $p0);
                break;
            case 3:
                break
            }
        }
};
Mscrm.FormEditorKeyboardAccessibility.$x = function($p0, $p1, $p2) {
    var $v_0 = new Mscrm.NavigationDropTarget($p1);
    $v_0.$A_2 = $p2;
    var $v_1 = new Array(2);
    $v_1[0] = $p0;
    $v_1[1] = null;
    $v_0.drop("fromNavigation", $p0.className, $v_1)
};
Mscrm.FormEditorKeyboardAccessibility.$1N = function($p0, $p1, $p2) {
    var $v_0 = null,
        $v_1 = Mscrm.DragDropUtils.getSectionNode($p0.id),
        $v_2 = $v_1.parentNode.parentNode.parentNode.parentNode,
        $v_3 = XUI.Xml.SelectNodes($v_2, "columns/column", null).length;
    if ($v_3 === 2) {
        var $v_4 = Mscrm.DragDropUtils.getTabColumnOfSection($v_1);
        if (!$v_4 && $p1 === 39 || $v_4 === 1 && $p1 === 37) {
            if ($p1 === 39) {
                var $v_5 = XUI.Xml.SelectNodes($v_2, "columns/column", null)[1];
                $v_0 = XUI.Xml.SelectNodes($v_5, "sections/section", null)[0]
            } else {
                var $v_6 = XUI.Xml.SelectNodes($v_2, "columns/column", null)[0];
                $v_0 = XUI.Xml.SelectNodes($v_6, "sections/section", null)[0]
            }
            if (!IsNull($v_0)) {
                Mscrm.FormEditorKeyboardAccessibility.$o($p0, false, $get(Mscrm.FormUtils.getAttributeValue($v_0, 4)));
                $p2.preventDefault()
            }
        }
    }
};
Mscrm.FormEditorKeyboardAccessibility.$o = function($p0, $p1, $p2) {
    var $v_0 = new Array(2);
    $v_0[0] = $p0;
    $v_0[1] = null;
    var $v_1 = new Mscrm.DropTarget($p2, "section");
    $v_1.$A_2 = $p1;
    if (!Mscrm.OperationValidator.isOperationValid(1, $p0, $p2, null)) $v_1.$F_2 = false;
    $v_1.drop("fromMainCanvas", $p0.className, $v_0)
};
Mscrm.FormEditorKeyboardAccessibility.$w = function($p0, $p1, $p2) {
    var $v_0 = new Array(2);
    $v_0[0] = $p0;
    $v_0[1] = null;
    $p1.$j_2 = $p2;
    $p1.drop("fromMainCanvas", $p0.className, $v_0)
};
Mscrm.FormEditorKeyboardAccessibility.$1K = function($p0) {
    var $v_0 = null, $v_1 = null;
    if (Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
        var $v_2 = XUI.Xml.DomUtils.GetNextSibling($p0.$7_0);
        if (IsNull($v_2))
            if (!IsNull($p0.$8_0)) {
                $v_2 = Mscrm.DragDropUtils.getFirstSectionOfTab(XUI.Xml.DomUtils.GetNextSibling($p0.$8_0));
                Mscrm.TabUtils.expandTabIfRequired(XUI.Xml.DomUtils.GetNextSibling($p0.$8_0))
            }
        if (!IsNull($v_2)) {
            var $v_3 = Mscrm.FormUtils.getAttributeValue($v_2, 3);
            if ($v_3 >= $p0.$5_0) {
                $v_1 = Mscrm.DragDropUtils.getFirstCellOfSection($v_2);
                if (!IsNull($v_1)) {
                    var $v_4 = $get($v_1.attributes.getNamedItem("id").nodeValue);
                    if (!IsNull($v_4)) {
                        $v_0 = new Mscrm.DropTarget($v_4, "section");
                        $v_0.$A_2 = false;
                        if (!Mscrm.OperationValidator
                            .isOperationValid(1, GetActiveElement(), $v_4, null)) $v_0.$F_2 = false
                    }
                }
            }
        }
    }
    return $v_0
};
Mscrm.FormEditorKeyboardAccessibility.$16 = function($p0) {
    var $v_0 = null, $v_1 = $p0.$0_0.$2_0, $v_2 = Mscrm.FormEditorKeyboardAccessibility.$1j($p0);
    if (!IsNull($v_2)) {
        var $v_3 = $get($v_2.attributes.getNamedItem("id").nodeValue);
        if (!IsNull($v_3)) $v_0 = new Mscrm.DropTarget($v_3, "section")
    }
    return $v_0
};
Mscrm.FormEditorKeyboardAccessibility.$1j = function($p0) {
    var $v_0 = null, $v_1 = XUI.Xml.DomUtils.GetChildElementAt($p0.$4_0, $p0.$0_0.$3_0 - 1);
    while (!IsNull($v_1)) {
        $v_0 = XUI.Xml.DomUtils.GetChildElementAt($v_1, $p0.$0_0.$2_0);
        if (Mscrm.DragDropUtils.isSystemSpacer($v_0) && Mscrm.FormEditorKeyboardAccessibility.$v($v_0) < $p0.$5_0) {
            $v_1 = XUI.Xml.DomUtils.GetPrevSibling($v_1);
            continue
        } else {
            if (Mscrm.DragDropUtils.isPlaceHolder($v_0)) $v_0 = Mscrm.DragDropUtils.getActualCell($v_0);
            var $v_2 = Mscrm.FormEditorKeyboardAccessibility.$v($v_0);
            if ($v_2 >= $p0.$5_0) break;
            else $v_1 = XUI.Xml.DomUtils.GetPrevSibling($v_1)
        }
    }
    return $v_0
};
Mscrm.FormEditorKeyboardAccessibility.$1e = function($p0) {
    var $v_0 = null,
        $v_1 = false,
        $v_2 = null,
        $v_3 = XUI.Xml.DomUtils.GetChildElementAt($p0.$4_0, $p0.$0_0.$3_0 + $p0.$6_0),
        $v_4 = XUI.Xml.DomUtils.GetChildElementAt($v_3, $p0.$0_0.$2_0);
    if (Mscrm.DragDropUtils.isPlaceHolder($v_4)) $v_4 = Mscrm.DragDropUtils.getActualCell($v_4);
    var $v_5 = parseInt(Mscrm.FormUtils.getAttributeValue($v_4, 2).toString(), 10);
    $v_3 = XUI.Xml.DomUtils.GetChildElementAt($p0.$4_0, $p0.$0_0.$3_0 + $p0.$6_0 + $v_5);
    while (!IsNull($v_3)) {
        $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_3, $p0.$0_0.$2_0);
        if (Mscrm.FormEditorKeyboardAccessibility.$v($v_2) < $p0.$5_0) {
            $v_3 = XUI.Xml.DomUtils.GetNextSibling($v_3);
            continue
        } else {
            if (Mscrm.DragDropUtils.isPlaceHolder($v_2)) $v_2 = Mscrm.DragDropUtils.getActualCell($v_2);
            var $v_6 = Mscrm.FormEditorKeyboardAccessibility.$v($v_2),
                $v_7 = Mscrm.DragDropUtils.getColumPositionInFormXml($v_2),
                $v_8 = Mscrm.DragDropUtils
                    .getConsecutiveSpacerCountFromCell(XUI.Xml.DomUtils
                        .GetChildElementAt(XUI.Xml.DomUtils.GetPrevSibling($v_2.parentNode), $v_7));
            if ($v_6 >= $p0.$5_0 && $v_8 < $p0.$5_0) break;
            else $v_3 = XUI.Xml.DomUtils.GetNextSibling($v_3)
        }
    }
    if (IsNull($v_3)) {
        $v_1 = true;
        var $v_9 = XUI.Xml.DomUtils.GetLastChild($p0.$4_0);
        $v_2 = XUI.Xml.DomUtils.GetChildElementAt($v_9, $p0.$0_0.$2_0);
        if (Mscrm.DragDropUtils.getConsecutiveSpacerCountFromCell($v_2) < $p0.$5_0) {
            if (Mscrm.DragDropUtils.isPlaceHolder($v_2)) $v_2 = Mscrm.DragDropUtils.getActualCell($v_2)
        } else return Mscrm.FormEditorKeyboardAccessibility.$1K($p0)
    }
    if (!IsNull($v_2)) {
        var $v_A = $get($v_2.attributes.getNamedItem("id").nodeValue);
        if (!IsNull($v_A)) {
            $v_0 = new Mscrm.DropTarget($v_A, "section");
            $v_0.$A_2 = $v_1
        }
    }
    return $v_0
};
Mscrm.FormEditorKeyboardAccessibility.$v = function($p0) {
    var $v_0 = 0;
    if (!Mscrm.DragDropUtils.isPlaceHolder($p0))
        while (!IsNull($p0) && !Mscrm.DragDropUtils.isPlaceHolder($p0)) {
            var $v_1 = Mscrm.FormUtils.getAttributeValue($p0, 1);
            $v_0 += $v_1;
            for (var $v_2 = 0; $v_2 < $v_1; $v_2++) $p0 = XUI.Xml.DomUtils.GetNextSibling($p0)
        }
    return $v_0
};
Mscrm.PreviewCellUtils = function() {};
Mscrm.PreviewCellUtils.isPreviewCell = function(cell) {
    if (cell) {
        var $v_0 = cell.attributes.getNamedItem("ispreviewcell");
        if ($v_0 && XUI.Xml.GetText($v_0) === "true") return true
    }
    return false
};
Mscrm.PreviewCellUtils.isPreviewElement = function(cellElement) {
    if (cellElement && cellElement.getAttribute("ispreviewcell")
    ) if (cellElement.getAttribute("ispreviewcell").toString() === "true") return true;
    return false
};
Mscrm.PreviewCellUtils.createDefaultParams = function(controlNode, className, isChart) {
    for (var $v_W = 0;
        $v_W < controlNode.childNodes.length;
        $v_W++
    ) controlNode.removeChild(controlNode.childNodes[$v_W]);
    var $v_0 = Mscrm.FormEditorVariables.formXml.createElement("parameters"), $v_1 = controlNode.parentNode;
    !XUI.Xml.SelectSingleNode($v_1, "labels", null) &&
        $v_1.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    switch (className) {
    case "subgrid":
        var $v_2 = Mscrm.FormEditorVariables.formXml.createElement("TargetEntityType");
        XUI.Xml.SetText($v_2, "0");
        $v_0.appendChild($v_2);
        var $v_3 = Mscrm.FormEditorVariables.formXml.createElement("ChartGridMode");
        if (IsNull(isChart)) isChart = false;
        var $v_4 = isChart ? "Chart" : "Grid";
        XUI.Xml.SetText($v_3, $v_4);
        $v_0.appendChild($v_3);
        var $v_5 = Mscrm.FormEditorVariables.formXml.createElement("EnableQuickFind"), $v_6 = isChart ? false : true;
        XUI.Xml.SetText($v_5, $v_6.toString());
        $v_0.appendChild($v_5);
        var $v_7 = Mscrm.FormEditorVariables.formXml.createElement("EnableViewPicker");
        XUI.Xml.SetText($v_7, "false");
        $v_0.appendChild($v_7);
        var $v_8 = Mscrm.FormEditorVariables.formXml.createElement("EnableJumpBar"), $v_9 = isChart ? false : true;
        XUI.Xml.SetText($v_8, $v_9.toString());
        $v_0.appendChild($v_8);
        var $v_A = $v_1.attributes.getNamedItem("rowspan"), $v_B = 10;
        if ($v_A) $v_B = parseInt(XUI.Xml.GetText($v_A), 10);
        var $v_C = GetRecordsPerPage(GetGutterValue(isChart, false, $v_6, false, $v_9), $v_B),
            $v_D = Mscrm.FormEditorVariables.formXml.createElement("RecordsPerPage");
        XUI.Xml.SetText($v_D, $v_C.toString());
        $v_0.appendChild($v_D);
        break;
    case "delve":
        var $v_E = Mscrm.FormEditorVariables.formXml.createElement("TargetEntityType");
        XUI.Xml.SetText($v_E, "0");
        $v_0.appendChild($v_E);
        var $v_F = Mscrm.FormEditorVariables.formXml.createElement("ChartGridMode");
        XUI.Xml.SetText($v_F, "Grid");
        $v_0.appendChild($v_F);
        var $v_G = Mscrm.FormEditorVariables.formXml.createElement("GridUIMode");
        XUI.Xml.SetText($v_G, "Card");
        $v_0.appendChild($v_G);
        break;
    case "powerbitile":
        var $v_H = Mscrm.FormEditorVariables.formXml.createElement("PowerBIDashboardId");
        XUI.Xml.SetText($v_H, "");
        $v_0.appendChild($v_H);
        var $v_I = Mscrm.FormEditorVariables.formXml.createElement("TileId");
        XUI.Xml.SetText($v_I, "");
        $v_0.appendChild($v_I);
        var $v_J = Mscrm.FormEditorVariables.formXml.createElement("TileUrl");
        XUI.Xml.SetText($v_J, "");
        $v_0.appendChild($v_J);
        var $v_K = Mscrm.FormEditorVariables.formXml.createElement("Type");
        XUI.Xml.SetText($v_K, "0");
        $v_0.appendChild($v_K);
        var $v_L = Mscrm.FormEditorVariables.formXml.createElement("EnableInMobile");
        XUI.Xml.SetText($v_L, "false");
        $v_0.appendChild($v_L);
        break;
    case "iframe":
    case "aci":
    case "webresource":
        var $v_M = Mscrm.FormEditorVariables.formXml.createElement("Url");
        XUI.Xml.SetText($v_M, "");
        $v_0.appendChild($v_M);
        var $v_N = Mscrm.FormEditorVariables.formXml.createElement("PassParameters");
        XUI.Xml.SetText($v_N, "false");
        $v_0.appendChild($v_N);
        var $v_O = "true";
        if (className === "webresource") $v_O = "false";
        var $v_P = Mscrm.FormEditorVariables.formXml.createElement("Security");
        XUI.Xml.SetText($v_P, $v_O);
        $v_0.appendChild($v_P);
        var $v_Q = Mscrm.FormEditorVariables.formXml.createElement("Scrolling");
        XUI.Xml.SetText($v_Q, "auto");
        $v_0.appendChild($v_Q);
        var $v_R = Mscrm.FormEditorVariables.formXml.createElement("Border");
        XUI.Xml.SetText($v_R, "true");
        $v_0.appendChild($v_R);
        var $v_S = Mscrm.FormEditorVariables.formXml.createElement("ShowOnMobileClient");
        XUI.Xml.SetText($v_S, "false");
        $v_0.appendChild($v_S);
        break;
    case "socialInsight":
        var $v_T = Mscrm.FormEditorVariables.formXml.createElement("PassParameters");
        XUI.Xml.SetText($v_T, "false");
        $v_0.appendChild($v_T);
        var $v_U = Mscrm.FormEditorVariables.formXml.createElement("Scrolling");
        XUI.Xml.SetText($v_U, "auto");
        $v_0.appendChild($v_U);
        var $v_V = Mscrm.FormEditorVariables.formXml.createElement("Border");
        XUI.Xml.SetText($v_V, "true");
        $v_0.appendChild($v_V);
        break
    }
    controlNode.appendChild($v_0)
};
Mscrm.PreviewCellUtils.addSubgridFromPlaceHolder = function(domEvent, isChart, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddSubGridFromRibbon(isChart, useComponentGallery)
};
Mscrm.PreviewCellUtils.addQueuesFromPlaceHolder = function(domEvent, isChart, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddQueuesFromRibbon(isChart, "queues", useComponentGallery)
};
Mscrm.PreviewCellUtils.stopPropagationFromPlaceHolder = function(domEvent) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent)
};
Mscrm.PreviewCellUtils.addTilesFromPlaceHolder = function(domEvent, isChart, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddTilesFromRibbon(isChart, "tiles", useComponentGallery)
};
Mscrm.PreviewCellUtils.addIframeFromPlaceHolder = function(domEvent, isWebresource, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    if (isWebresource) AddWebResourceFromRibbon(useComponentGallery);
    else AddIFrameFromRibbon(useComponentGallery)
};
Mscrm.PreviewCellUtils.addPowerBITileFromPlaceHolder = function(domEvent, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddPowerBITileFromRibbon(useComponentGallery)
};
Mscrm.PreviewCellUtils.addSocialInsightFromPlaceHolder = function(domEvent, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddSocialInsightFromRibbon(useComponentGallery)
};
Mscrm.PreviewCellUtils.addOrgInsightsFromPlaceHolder = function(domEvent, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddOrgInsightsFromRibbon(useComponentGallery)
};
Mscrm.PreviewCellUtils.addDelveFromPlaceHolder = function(domEvent, useComponentGallery) {
    Mscrm.PreviewCellUtils.cancelEvent(domEvent);
    SetActiveObject(domEvent);
    AddDelveFromRibbon(useComponentGallery)
};
Mscrm.PreviewCellUtils.cancelEvent = function(domEvent) {
    if (!IsNull(domEvent)) {
        domEvent.preventDefault();
        domEvent.stopPropagation()
    }
};
Mscrm.PreviewCellUtils.onHover = function(placeholderAnchor) {
    if (!IsNull(placeholderAnchor) && placeholderAnchor.className === "PlaceholderAnchor") {
        var $v_0 = placeholderAnchor.childNodes[0];
        XUI.Html.SetOpacity($v_0, 1)
    }
};
Mscrm.PreviewCellUtils.offHover = function(placeholderAnchor) {
    if (!IsNull(placeholderAnchor) && placeholderAnchor.className === "PlaceholderAnchor") {
        var $v_0 = placeholderAnchor.childNodes[0];
        XUI.Html.SetOpacity($v_0, .5)
    }
};
Mscrm.PreviewCellDefaults = function() {};
Mscrm.DashboardControls = function() {};
Mscrm.DashboardXmlAttributes = function() {};
Mscrm.Register = function() {};
Mscrm.Register.registerTabsAsDropTargets = function() {
    Mscrm.Register.unRegisterDropTargets("tabs");
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs/tab", null);
    Mscrm.Register.$R($v_0, "tabs", null)
};
Mscrm.Register.registerSectionsAsDropTargets = function() {
    Mscrm.Register.unRegisterDropTargets("sections");
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section",
        null);
    Mscrm.Register.$R($v_0, "sections", null)
};
Mscrm.Register.registerHeaderCellsAsDropTargets = function() {
    Mscrm.Register.unRegisterDropTargets("cells");
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/header/rows", null);
    Mscrm.DragDropUtils.addPlaceHolders($v_0);
    var $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/header/rows/row/cell", null);
    Mscrm.Register.$R($v_1, "cells", null);
    Mscrm.DragDropUtils.removePlaceHolders($v_0)
};
Mscrm.Register.registerFooterCellsAsDropTargets = function() {
    Mscrm.Register.unRegisterDropTargets("cells");
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/footer/rows", null);
    Mscrm.DragDropUtils.addPlaceHolders($v_0);
    var $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/footer/rows/row/cell", null);
    Mscrm.Register.$R($v_1, "cells", null);
    Mscrm.DragDropUtils.removePlaceHolders($v_0)
};
Mscrm.Register.registerCellsAsDropTargets = function(secId) {
    Mscrm.Register.unRegisterDropTargets("cells");
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + secId + "']/rows",
        null);
    Mscrm.DragDropUtils.addPlaceHolders($v_0);
    var $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section[@id = '" + secId + "']/rows/row/cell",
        null);
    Mscrm.Register.$R($v_1, "cells", null);
    var $v_2 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section",
        null);
    Mscrm.Register.$Q = [];
    Mscrm.Register.$R($v_2, "sections", secId);
    Mscrm.DragDropUtils.removePlaceHolders($v_0)
};
Mscrm.Register.registerNavGroupsAsDropTargets = function() {
    Mscrm.Register.unRegisterDropTargets("navGroups");
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/Navigation/NavBarAreas/NavBarArea",
        null);
    Mscrm.Register.$R($v_0, "navGroups", null)
};
Mscrm.Register.registerNavGroupItemsAsDropTarget = function() {
    Mscrm.Register.unRegisterDropTargets("navGroupItems");
    Mscrm.Register.$23();
    Mscrm.Register.$22()
};
Mscrm.Register.regUnregDropTargetsForFieldExplorer = function() {
    if (Mscrm.FormEditorVariables.cellsFor !== Mscrm.FormEditorVariables.fieldExpIsFor)
        switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
        case "section":
            Mscrm.Register.registerSectionsAsDropTargets();
            break;
        case "header":
            Mscrm.Register.registerHeaderCellsAsDropTargets();
            break;
        case "footer":
            Mscrm.Register.registerFooterCellsAsDropTargets();
            break
        }
};
Mscrm.Register.unRegisterDropTargets = function(typeOfControls) {
    if (Mscrm.Register.$X)
        for (var $v_0 = 0; $v_0 < Mscrm.Register.$X.length; $v_0++) {
            Mscrm.Register.$X[$v_0].dispose();
            Mscrm.Register.$X[$v_0] = null
        }
    Mscrm.Register.$X = null;
    if (Mscrm.Register.$Q)
        for (var $v_1 = 0; $v_1 < Mscrm.Register.$Q.length; $v_1++) {
            Mscrm.Register.$Q[$v_1].dispose();
            Mscrm.Register.$Q[$v_1] = null
        }
    Mscrm.Register.$Q = null;
    if (Mscrm.Register.$T)
        for (var $v_2 = 0; $v_2 < Mscrm.Register.$T.length; $v_2++) {
            Mscrm.Register.$T[$v_2].dispose();
            Mscrm.Register.$T[$v_2] = null
        }
    Mscrm.Register.$T = null;
    if (Mscrm.Register.$W)
        for (var $v_3 = 0; $v_3 < Mscrm.Register.$W.length; $v_3++) {
            Mscrm.Register.$W[$v_3].dispose();
            Mscrm.Register.$W[$v_3] = null
        }
    Mscrm.Register.$W = null;
    if (Mscrm.Register.$V)
        for (var $v_4 = 0; $v_4 < Mscrm.Register.$V.length; $v_4++) {
            Mscrm.Register.$V[$v_4].dispose();
            Mscrm.Register.$V[$v_4] = null
        }
    Mscrm.Register.$V = null;
    if (Mscrm.Register.$U)
        for (var $v_5 = 0; $v_5 < Mscrm.Register.$U.length; $v_5++) {
            Mscrm.Register.$U[$v_5].dispose();
            Mscrm.Register.$U[$v_5] = null
        }
    Mscrm.Register.$U = null;
    switch (typeOfControls) {
    case "tabs":
        Mscrm.Register.$X = [];
        break;
    case "sections":
        Mscrm.Register.$Q = [];
        break;
    case "cells":
        Mscrm.Register.$T = [];
        break;
    case "navGroupItems":
        Mscrm.Register.$W = [];
        Mscrm.Register.$V = [];
        break;
    case "navGroups":
        Mscrm.Register.$U = [];
        break
    }
};
Mscrm.Register.$23 = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/Navigation/NavBar/NavBarByRelationshipItem",
        null);
    Mscrm.Register.$R($v_0, "navRelations", null)
};
Mscrm.Register.$22 = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables
        .formXml,
        "/entity/form/Navigation/NavBar/NavBarItem",
        null);
    Mscrm.Register.$R($v_0, "navLinks", null)
};
Mscrm.Register.$R = function($p0, $p1, $p2) {
    for (var $v_0 = null, $v_1 = 0, $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_3 = $p0[$v_2].attributes.getNamedItem("id");
        if (IsNull($v_3)) $v_3 = $p0[$v_2].attributes.getNamedItem("Id");
        $v_0 = $v_3.nodeValue;
        var $v_4 = $get($v_0);
        if ($v_4 && $v_0 !== $p2)
            switch ($p1) {
            case "tabs":
                var $v_5 = new Mscrm.DropTarget($v_4, "section");
                $v_5.initialize();
                Mscrm.Register.$X[$v_1++] = $v_5;
                break;
            case "sections":
                var $v_6 = new Mscrm.DropTarget($v_4, "section");
                $v_6.initialize();
                Mscrm.Register.$Q[$v_1++] = $v_6;
                break;
            case "cells":
                var $v_7 = new Mscrm.DropTarget($v_4, "section");
                $v_7.initialize();
                Mscrm.Register.$T[$v_1++] = $v_7;
                break;
            case "navRelations":
                var $v_8 = new Mscrm.NavigationDropTarget($v_4);
                $v_8.initialize();
                Mscrm.Register.$W[$v_1++] = $v_8;
                break;
            case "navLinks":
                var $v_9 = new Mscrm.NavigationDropTarget($v_4);
                $v_9.initialize();
                Mscrm.Register.$V[$v_1++] = $v_9;
                break;
            case "navGroups":
                var $v_A = new Mscrm.NavigationDropTarget($v_4);
                $v_A.initialize();
                Mscrm.Register.$U[$v_1++] = $v_A;
                break
            }
    }
};
Mscrm.FormHtmlElementIds = function() {};
Mscrm.FormUtils = function() {};
Mscrm.FormUtils.getFormDependencies = function() {
    var $v_0 = [],
        $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency",
            null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/header/rows/row/cell/events/event/dependencies/dependency",
        null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/footer/rows/row/cell/events/event/dependencies/dependency",
        null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/externaldependencies/dependency", null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/events/event/dependencies/dependency",
        null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    $v_1 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/events/event/dependencies/dependency",
        null);
    Mscrm.FormUtils.addInArray($v_0, $v_1);
    return $v_0
};
Mscrm.FormUtils.addInArray = function(depArray, nodes) {
    for (var $v_0 = 0; $v_0 < nodes.length; $v_0++)
        depArray[depArray.length] = XUI.Xml.GetText(nodes[$v_0].attributes.getNamedItem("id"))
};
Mscrm.FormUtils.updateLockLevelForDependencies = function(oldDepList, newDepList) {
    if (oldDepList)
        for (var $v_0 = 0; $v_0 < oldDepList.length; $v_0++) {
            var $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@datafieldname= '" +
                oldDepList[$v_0] +
                "']",
                null);
            Mscrm.FormUtils.removeAttribute($v_1, "locklevel");
            $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/header/rows/row/cell[control/@datafieldname= '" + oldDepList[$v_0] + "']",
                null);
            Mscrm.FormUtils.removeAttribute($v_1, "locklevel");
            $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/footer/rows/row/cell[control/@datafieldname= '" + oldDepList[$v_0] + "']",
                null);
            Mscrm.FormUtils.removeAttribute($v_1, "locklevel")
        }
    if (newDepList)
        for (var $v_2 = 0; $v_2 < newDepList.length; $v_2++) {
            var $v_3 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@datafieldname= '" +
                newDepList[$v_2] +
                "']",
                null);
            Mscrm.FormXmlUtils.addAttribute($v_3, "locklevel", "1");
            $v_3 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/header/rows/row/cell[control/@datafieldname= '" + newDepList[$v_2] + "']",
                null);
            Mscrm.FormXmlUtils.addAttribute($v_3, "locklevel", "1");
            $v_3 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/footer/rows/row/cell[control/@datafieldname= '" + newDepList[$v_2] + "']",
                null);
            Mscrm.FormXmlUtils.addAttribute($v_3, "locklevel", "1")
        }
};
Mscrm.FormUtils.addAttribute = function(cell, attrName, attrVal) {
    var $v_0 = null;
    if (!IsNull(cell)) {
        $v_0 = Mscrm.FormEditorVariables.formXml.createAttribute(attrName);
        $v_0.value = attrVal;
        cell.attributes.setNamedItem($v_0)
    }
    return $v_0
};
Mscrm.FormUtils.isFormDirty = function() {
    var $v_0 = false;
    if (XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml) !==
        Mscrm.FormEditorVariables.initialFormXmlText) $v_0 = true;
    return $v_0
};
Mscrm.FormUtils.isTabletDirty = function() {
    var $v_0 = false;
    if (Mscrm.FormEditorVariables.isTabletEnabled !== Mscrm.FormEditorVariables.initialIsTabletEnabled) $v_0 = true;
    return $v_0
};
Mscrm.FormUtils.setInitialFormXmlText = function() {
    Mscrm.FormEditorVariables.initialFormXmlText = XUI.Xml.XMLSerializer
        .serializeToString(Mscrm.FormEditorVariables.formXml)
};
Mscrm.FormUtils.shouldPublish = function() {
    var $v_0 = true;
    if (Mscrm.FormUtils.isFormDirty())
        if (confirm(window.LOCID_FORMED_UNSAVED_PUBLISH)) $v_0 = true;
        else $v_0 = false;
    return $v_0
};
Mscrm.FormUtils.containUnBoundedCells = function() {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell",
        null);
    if (Mscrm.FormUtils.anyUnbounedCell($v_0)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/header/rows/row/cell", null);
    if (Mscrm.FormUtils.anyUnbounedCell($v_0)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/footer/rows/row/cell", null);
    if (Mscrm.FormUtils.anyUnbounedCell($v_0)) return true;
    return false
};
Mscrm.FormUtils.removeAttribute = function(node, attributeName) {
    if (!IsNull(node)) {
        var $v_0 = node.attributes.getNamedItem(attributeName);
        !IsNull($v_0) && node.attributes.removeNamedItem(attributeName)
    }
};
Mscrm.FormUtils.hasAttribute = function(node, attributeName) {
    var $v_0 = false;
    if (node)
        if (node.attributes.getNamedItem(attributeName)) $v_0 = true;
        else $v_0 = false;
    return $v_0
};
Mscrm.FormUtils.getAttributeValue = function(node, attribute) {
    var $v_0 = null, $v_1 = null;
    switch (attribute) {
    case 3:
        $v_0 = 2;
        $v_1 = node.attributes.getNamedItem("columns");
        if (!IsNull($v_1)) $v_0 = XUI.Xml.GetText($v_1).length;
        break;
    case 1:
        $v_0 = 1;
        $v_1 = node.attributes.getNamedItem("colspan");
        if (!IsNull($v_1)) $v_0 = $v_1.nodeValue;
        break;
    case 2:
        $v_0 = 1;
        $v_1 = node.attributes.getNamedItem("rowspan");
        if (!IsNull($v_1)) $v_0 = $v_1.nodeValue;
        break;
    case 4:
        $v_0 = "";
        $v_1 = node.attributes.getNamedItem("id");
        if (!IsNull($v_1)) $v_0 = $v_1.nodeValue;
        break
    }
    return $v_0
};
Mscrm.FormUtils.anyUnbounedCell = function(cells) {
    for (var $v_0 = false, $v_1 = 0; $v_1 < cells.length; $v_1++)
        if (Mscrm.FormUtils.hasAttribute(cells[$v_1], "unbounded")) {
            $v_0 = true;
            break
        }
    return $v_0
};
Mscrm.FormUtils.isDependentOnScript = function(fieldName) {
    var $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/externaldependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/header/rows/row/cell/events/event/dependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/footer/rows/row/cell/events/event/dependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/events/event/dependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    $v_0 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/events/event/dependencies/dependency",
        null);
    if (Mscrm.FormUtils.$h($v_0, fieldName)) return true;
    return false
};
Mscrm.FormUtils.getFormXmlForXslTransformation = function(part) {
    var $v_0 = "";
    switch (part) {
    case 0:
        $v_0 = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml
            .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form/Navigation", null));
        break;
    case 4:
        $v_0 = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml
            .SelectSingleNode(Mscrm.FormEditorVariables.formXml, "/entity/form", null));
        break;
    default:
        break
    }
    return $v_0
};
Mscrm.FormUtils.getNodeById = function(path, id) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, path + "[@Id='" + id + "']", null)
};
Mscrm.FormUtils.getNodeByPath = function(path) {
    return XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, path, null)
};
Mscrm.FormUtils.createNode = function(nodeName) { return Mscrm.FormEditorVariables.formXml.createElement(nodeName) };
Mscrm.FormUtils.appendChildToPath = function(path, child) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, path, null);
    !IsNull($v_0) && $v_0.appendChild(child)
};
Mscrm.FormUtils.replaceChild = function(newChild, oldChild) {
    var $v_0 = oldChild.parentNode;
    !IsNull($v_0) && $v_0.replaceChild(newChild, oldChild)
};
Mscrm.FormUtils.appendAsFirstChildToPath = function(path, child) {
    var $v_0 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml, path, null);
    !IsNull($v_0) && $v_0.insertBefore(child, XUI.Xml.DomUtils.GetFirstChild($v_0))
};
Mscrm.FormUtils.getAttributeValueForCell = function(node, attributeName) {
    var $v_0 = null, $v_1 = node.getAttribute("id").toString();
    if (!isNullOrEmptyString($v_1)) {
        var $v_2 = Mscrm.DragDropUtils.getCellNodeFromId($v_1);
        if (!IsNull($v_2)) {
            var $v_3 = $v_2.attributes.getNamedItem(attributeName);
            if (!IsNull($v_3)) $v_0 = XUI.Xml.GetText($v_3)
        }
    }
    return $v_0
};
Mscrm.FormUtils.clickNode = function(node) {
    var $v_0 = node.attributes.getNamedItem("id");
    if (IsNull($v_0)) $v_0 = node.attributes.getNamedItem("Id");
    if (!IsNull($v_0)) {
        var $v_1 = $get($v_0.nodeValue);
        !IsNull($v_1) && Mscrm.Utilities.click($v_1)
    }
};
Mscrm.FormUtils.makeFormXmlDirty = function() {
    var $v_0 = Mscrm.DragDropUtils.getTabsNode(), $v_1 = $v_0.attributes.getNamedItem("status");
    if (!IsNull($v_1)) $v_0.attributes.removeNamedItem("status");
    else Mscrm.FormUtils.addAttribute($v_0, "status", "1")
};
Mscrm.FormUtils.toggleExplorerCaption = function(selectedPartClassName) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor !== selectedPartClassName)
        if (selectedPartClassName === "navigation")
            Mscrm.FormUtils.$19(Mscrm.FieldExplorerUtils.relationshipExplorerCaption);
        else if (selectedPartClassName === "businessrules"
        ) Mscrm.FormUtils.$19(Mscrm.FieldExplorerUtils.businessRulesExplorerCaption);
        else Mscrm.FormUtils.$19(Mscrm.FieldExplorerUtils.fieldExplorerCaption);
    Mscrm.FormUtils.toggleExplorerButtons(selectedPartClassName)
};
Mscrm.FormUtils.saveForm = function(formType, objectTypeCode, name, description, isTabletEnabled) {
    var $v_0 = [], $v_1 = new RemoteCommand("FormEditorWebService", "SaveForm", null);
    $v_1.SetParameter("formId", Mscrm.FormEditorVariables.formId);
    $v_1.SetParameter("formXml", XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml));
    $v_1.SetParameter("formType", formType);
    $v_1.SetParameter("objectTypeCode", objectTypeCode.toString());
    $v_1.SetParameter("name", name);
    $v_1.SetParameter("description", description);
    var $v_2 = false;
    if (Mscrm.FormEditorVariables.formAccessType === 1031) $v_2 = true;
    $v_1.SetParameter("isUserForm", $v_2.toString());
    !IsNull(isTabletEnabled) && $v_1.SetParameter("isTabletEnabled", isTabletEnabled.toString().toLowerCase());
    var $v_3 = $v_1.Execute(null);
    if (!IsNull($v_3))
        if ($v_3.Success) {
            var $v_4 = "";
            Mscrm.FormEditorVariables.formId = $v_3.ReturnValue;
            Mscrm.FormUtils.$26();
            if (!isNullOrEmptyString(name)) {
                $v_4 = String.format(window.LOCID_EDITORWINDOW_NAME, name);
                setPageTitle($v_4)
            }
            if (!$v_2) {
                refreshRibbon();
                var $v_5 = "menuHeader",
                    $v_6 = $get($v_5),
                    $v_7 = Mscrm.Utilities.getChildElementsByClassName($v_6, "ms-crm-FormMenuBarBreadcrumb", true);
                $v_7[0].innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_4)
            }
            return true
        }
    return false
};
Mscrm.FormUtils.$26 = function() {
    if (!IsNull(Mscrm.FormEditorVariables.socialInsightsConfigurations)) {
        var $v_0 = [], $v_1 = Mscrm.FormEditorVariables.socialInsightsConfigurations, $$dict_3 = $v_1;
        for (var $$key_4 in $$dict_3) {
            var $v_2 = { key: $$key_4, value: $$dict_3[$$key_4] };
            Array.add($v_0, $v_2.value)
        }
        if (Mscrm.FormUtils.$1Y($v_0)) Mscrm.FormEditorVariables.socialInsightsConfigurations = null
    }
};
Mscrm.FormUtils.$1Y = function($p0) {
    var $v_0 = JSON.stringify($p0),
        $v_1 = new RemoteCommand("SocialInsightsWebService", "CreateOrUpdateSocialInsightsConfigurationArray", null);
    $v_1.SetParameter("serializedSocialInsightsConfigurations", $v_0);
    $v_1.SetParameter("formId", Mscrm.FormEditorVariables.formId);
    var $v_2 = $v_1.Execute(null);
    if (!IsNull($v_2)) return $v_2.Success;
    return false
};
Mscrm.FormUtils.toggleExplorerButtons = function(selectedPartClassName) {
    var $v_0 = $get("newFieldTD"),
        $v_1 = $get("new1ToNRelationshipTD"),
        $v_2 = $get("newNToNRelationshipTD"),
        $v_3 = $get("newBusinessRuleTD"),
        $v_4 = $get("fieldFilterTD"),
        $v_5 = $get("relationshipFilterTD"),
        $v_6 = $get("fieldListDiv"),
        $v_7 = $get("attrExpDivShow");
    Mscrm.FormUtils.$M($v_0, false);
    Mscrm.FormUtils.$M($v_1, false);
    Mscrm.FormUtils.$M($v_2, false);
    Mscrm.FormUtils.$M($v_3, false);
    Mscrm.FormUtils.$M($v_4, false);
    Mscrm.FormUtils.$M($v_5, false);
    if (selectedPartClassName === "businessrules") {
        Mscrm.FormUtils.$M($v_3, true);
        $v_6.style.top = "35px"
    } else if (selectedPartClassName === "navigation") {
        Mscrm.FormUtils.$M($v_1, true);
        Mscrm.FormUtils.$M($v_2, true);
        Mscrm.FormUtils.$M($v_5, true);
        $v_6.style.top = $v_7.offsetHeight + $v_7.offsetTop + 5 + "px"
    } else {
        Mscrm.FormUtils.$M($v_0, true);
        Mscrm.FormUtils.$M($v_4, true);
        if (!IsNull($v_6)) $v_6.style.top = $v_7.offsetHeight + $v_7.offsetTop + 5 + "px"
    }
};
Mscrm.FormUtils.processFormXmlBeforePreview = function(previewXml) {
    Mscrm.FormXmlUtils.processFormNavigationBeforePreview(previewXml);
    var $v_0 = XUI.Xml.SelectSingleNode(previewXml, "/entity/form/tabs", null);
    !IsNull($v_0) && Mscrm.FormUtils.removeAttribute($v_0, "status");
    for (var $v_1 = XUI.Xml.SelectNodes(previewXml, "/entity/form/tabs/tab", null), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) Mscrm.FormUtils.removeAttribute($v_1[$v_2], "expanded");
    Mscrm.FormUtils.$24(previewXml)
};
Mscrm.FormUtils.updateFormEntityIcon = function(isProfilePictureEnabled) {
    var $v_0 = "";
    if (isProfilePictureEnabled)
        $v_0 = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/formentity/default_profile_image.png").toString();
    else $v_0 = Mscrm.FormEditorVariables.defaultIconPath;
    var $v_1 = $get("formEntityIconDiv");
    if (!IsNull($v_1)) {
        var $v_2 = $v_1.getElementsByTagName("IMG");
        if ($v_2.length > 0) {
            $v_2[0].setAttribute("src", $v_0);
            $v_2[0].focus()
        }
    }
};
Mscrm.FormUtils.$24 = function($p0) {
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/header", null), "added");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/header", null), "name");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/footer", null), "added");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/footer", null), "name");
    Mscrm.FormUtils.removeAttribute(XUI.Xml
        .SelectSingleNode($p0, "/entity/form/Navigation/NavBarAreas", null),
        "added");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/Navigation/NavBar", null), "added");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/Navigation", null), "added");
    Mscrm.FormUtils.removeAttribute(XUI.Xml.SelectSingleNode($p0, "/entity/form/formparameters", null), "added")
};
Mscrm.FormUtils.$h = function($p0, $p1) {
    for (var $v_0 = false, $v_1 = null, $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        $v_1 = $p0[$v_2];
        if (XUI.Xml.GetText($v_1.attributes.getNamedItem("id")) === $p1) {
            $v_0 = true;
            break
        }
    }
    return $v_0
};
Mscrm.FormUtils.$19 = function($p0) {
    var $v_0 = $get("collapsedExplorer"), $v_1 = $get("expandedExplorer");
    if (!IsNull($v_0) && !IsNull($v_1)) {
        $v_0.innerHTML = $p0;
        $v_1.innerHTML = $p0
    }
};
Mscrm.FormUtils.$M = function($p0, $p1) {
    if (!IsNull($p0))
        if ($p1) $p0.style.display = "";
        else $p0.style.display = "none"
};
Mscrm.FormXMLAttributes = function() {};
Mscrm.CellAttributes = function() {};
Mscrm.ControlParameters = function() {};
Mscrm.FormXMlConstants = function() {};
Mscrm.FormXMlConstants.get_rowSpan = function() {
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return Mscrm.FormXMlConstants.$p;
    case "formEditor":
        return Mscrm.FormXMlConstants.$14;
    default:
        return Mscrm.FormXMlConstants.$14
    }
};
Mscrm.FormXMlConstants.get_iframeRowSpan = function() {
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return Mscrm.FormXMlConstants.$p;
    case "formEditor":
        return Mscrm.FormXMlConstants.$12;
    default:
        return Mscrm.FormXMlConstants.$12
    }
};
Mscrm.FormXMlConstants.get_colSpan = function() {
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return Mscrm.FormXMlConstants.$1C;
    case "formEditor":
        return Mscrm.FormXMlConstants.$11;
    default:
        return Mscrm.FormXMlConstants.$11
    }
};
Mscrm.FormXMlConstants.get_rowsPerPage = function() {
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return GetRecordsPerPage(GetGutterValue(false, true, true, false, true), Mscrm.FormXMlConstants.$p);
    case "formEditor":
        return Mscrm.FormXMlConstants.$13;
    default:
        return Mscrm.FormXMlConstants.$13
    }
};
Mscrm.ResizeUtils = function() {};
Mscrm.ResizeUtils.isValidForResize = function(className) {
    switch (className) {
    case "cell":
    case "subgrid":
    case "iframe":
    case "aci":
    case "powerbitile":
    case "webresource":
    case "notes":
    case "quickformcollection":
    case "referencepanelquickformcollection":
    case "referencepanelsubgrid":
    case "interactionwall":
    case "bingmap":
    case "socialInsight":
    case "orgInsights":
    case "timercontrol":
    case "searchwidget":
    case "referencepanelsearchwidget":
        return true;
    default:
        return false
    }
};
Mscrm.ResizeUtils.updateRecordsPerPageBasedonRowSpan = function(cellNode, rowSpan, className) {
    if (className === "subgrid" && !IsNull(cellNode)) {
        var $v_0 = XUI.Xml.SelectSingleNode(cellNode, "control", null);
        if ($v_0) {
            var $v_1 = XUI.Xml.SelectSingleNode($v_0, "parameters", null);
            if ($v_1) {
                var $v_2 = GetRecordsPerPage(Mscrm.ResizeUtils.getGutterValueForSubgrid(cellNode, $v_1), rowSpan),
                    $v_3 = XUI.Xml.SelectSingleNode($v_1, "RecordsPerPage", null);
                if (!IsNull($v_3)) XUI.Xml.SetText($v_3, $v_2.toString());
                else {
                    $v_3 = Mscrm.FormEditorVariables.formXml.createElement("RecordsPerPage");
                    XUI.Xml.SetText($v_3, $v_2.toString());
                    $v_1.appendChild($v_3)
                }
            }
        }
    }
};
Mscrm.ResizeUtils.getGutterValueForSubgrid = function(cellNode, parameters) {
    var $v_0 = true,
        $v_1 = false,
        $v_2 = false,
        $v_3 = false,
        $v_4 = false,
        $v_5 = cellNode.attributes.getNamedItem("showlabel");
    if ($v_5) $v_0 = Boolean.parse(XUI.Xml.GetText($v_5));
    var $v_6 = XUI.Xml.SelectSingleNode(parameters, "EnableViewPicker", null);
    if (!IsNull($v_6)) $v_1 = XUI.Xml.GetText($v_6) === "true";
    $v_6 = XUI.Xml.SelectSingleNode(parameters, "EnableQuickFind", null);
    if (!IsNull($v_6)) $v_2 = XUI.Xml.GetText($v_6) === "true";
    $v_6 = XUI.Xml.SelectSingleNode(parameters, "EnableJumpBar", null);
    if (!IsNull($v_6)) $v_3 = XUI.Xml.GetText($v_6) === "true";
    $v_6 = XUI.Xml.SelectSingleNode(parameters, "ChartGridMode", null);
    if (!IsNull($v_6)) {
        var $v_7 = XUI.Xml.GetText($v_6);
        if ($v_7.toUpperCase() === "Chart".toUpperCase()) $v_4 = true
    }
    return GetGutterValue($v_4, $v_1, $v_2, $v_0, $v_3)
};
Mscrm.ResizeUtils.updateColSpan = function(active, increase) {
    var $v_0 = GetCurrentTabName(active),
        $v_1 = GetCurrentSectionName(active),
        $v_2 = GetSectionNode($v_1),
        $v_3 = 1,
        $v_4 = $v_2.attributes.getNamedItem("columns");
    if (!IsNull($v_4)) $v_3 = XUI.Xml.GetText($v_4).length;
    var $v_5 = Mscrm.DragDropUtils.getCellNode(active.getAttribute("name").toString()),
        $v_6 = parseInt(XUI.Xml.GetText($v_5.attributes.getNamedItem("colspan")), 10);
    if (increase && $v_6 >= $v_3) return;
    else if (!increase && $v_6 <= Mscrm.ResizeDefaults.get_minColSpan()) return;
    var $v_7 = increase
        ? $v_6 + Mscrm.ResizeDefaults.get_fixedColSpanChange()
        : $v_6 - Mscrm.ResizeDefaults.get_fixedColSpanChange();
    CheckAndUpdateColSpan($v_5, $v_6, $v_7) && RefreshCellHtml($v_0, $v_1, active.id)
};
Mscrm.ResizeUtils.updateRowSpan = function(active, increase) {
    var $v_0 = GetCurrentTabName(active),
        $v_1 = GetCurrentSectionName(active),
        $v_2 = Mscrm.DragDropUtils.getCellNode(active.getAttribute("name").toString()),
        $v_3 = parseInt(XUI.Xml.GetText($v_2.attributes.getNamedItem("rowspan")), 10),
        $v_4 = Mscrm.ResizeDefaults.getMaxRowSpan(active);
    if (increase && $v_3 >= $v_4) return;
    else if (!increase && $v_3 <= Mscrm.ResizeDefaults.get_minRowSpan()) return;
    var $v_5 = increase
        ? $v_3 + Mscrm.ResizeDefaults.get_fixedRowSpanChange()
        : $v_3 - Mscrm.ResizeDefaults.get_fixedRowSpanChange();
    if ($v_5 > $v_4) $v_5 = $v_4;
    if ($v_5 < Mscrm.ResizeDefaults.get_minRowSpan()) $v_5 = Mscrm.ResizeDefaults.get_minRowSpan();
    if ($v_5 !== $v_3) {
        Mscrm.ResizeUtils.updateRecordsPerPageBasedonRowSpan($v_2, $v_5, active.className);
        Mscrm.FieldPropertiesUtils.adjustFormXmlForRowSpanChange($v_2, $v_3, $v_5);
        $v_2.setAttribute("rowspan", $v_5.toString())
    }
    RefreshCellHtml($v_0, $v_1, active.id)
};
Mscrm.ResizeDefaults = function() {};
Mscrm.ResizeDefaults.get_fixedColSpanChange = function() {
    var $v_0 = Mscrm.ResizeDefaults.get_minColSpan();
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return $v_0;
    case "formEditor":
        return $v_0
    }
    return $v_0
};
Mscrm.ResizeDefaults.get_fixedRowSpanChange = function() {
    switch (Mscrm.FormEditorVariables.editorType) {
    case "dashboardEditor":
        return 3;
    case "formEditor":
        return 1
    }
    return Mscrm.ResizeDefaults.get_minRowSpan()
};
Mscrm.ResizeDefaults.getMaxRowSpan = function(active) {
    if (active.className === "subgrid") {
        var $v_0 = Mscrm.DragDropUtils.getCellNode(active.getAttribute("name").toString());
        if ($v_0) {
            var $v_1 = XUI.Xml.SelectSingleNode($v_0, "control", null);
            if ($v_1) {
                var $v_2 = XUI.Xml.SelectSingleNode($v_1, "parameters", null);
                if ($v_2) return 250 + Mscrm.ResizeUtils.getGutterValueForSubgrid($v_0, $v_2)
            }
        }
    }
    return 40
};
Mscrm.ResizeDefaults.get_minRowSpan = function() { return 6 };
Mscrm.ResizeDefaults.get_minColSpan = function() { return 1 };
Mscrm.SectionUtils = function() {};
Mscrm.SectionUtils.canReduceSecColumns = function(newVal, sectionNode) {
    var $v_0 = true, $v_1 = XUI.Xml.SelectNodes(sectionNode, "rows/row", null), $v_2 = null;
    Mscrm.DragDropUtils.addPlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
    for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
        for (var $v_4 = XUI.Xml.SelectNodes($v_1[$v_3], "cell", null), $v_5 = 0; $v_5 < $v_4.length; $v_5++)
            if ($v_5 + 1 > newVal) {
                $v_2 = $v_4[$v_5].attributes.getNamedItem("locklevel");
                var $v_6 = new Array(1);
                $v_6[0] = XUI.Xml.SelectSingleNode($v_4[$v_5], "control", null);
                if ($v_2 && XUI.Xml.GetText($v_2) === "1" || !IsRemovable($v_6)) {
                    $v_0 = false;
                    break
                }
            }
    Mscrm.DragDropUtils.removePlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
    return $v_0
};
Mscrm.SectionUtils.removeColumnsFromSection = function(newVal, sectionNode) {
    var $v_0 = XUI.Xml.SelectNodes(sectionNode, "rows/row", null);
    Mscrm.DragDropUtils.addPlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
    for (var $v_1 = 1, $v_2 = null, $v_3 = 0; $v_3 < $v_0.length; $v_3++)
        for (var $v_4 = XUI.Xml.SelectNodes($v_0[$v_3], "cell", null), $v_5 = $v_4.length - 1; $v_5 >= 0; $v_5--) {
            $v_1 = 1;
            $v_2 = $v_4[$v_5].attributes.getNamedItem("colspan");
            if ($v_2) $v_1 = parseInt(XUI.Xml.GetText($v_2), 10);
            if ($v_5 + 1 <= newVal) {
                if ($v_5 + $v_1 > newVal) {
                    var $v_6 = Mscrm.FormEditorVariables.formXml.createAttribute("colspan");
                    $v_6.value = (newVal - $v_5).toString();
                    $v_4[$v_5].attributes.setNamedItem($v_6)
                }
            } else $v_0[$v_3].removeChild($v_4[$v_5])
        }
    Mscrm.DragDropUtils.removePlaceHolders(XUI.Xml.SelectSingleNode(sectionNode, "rows", null));
    RefreshAttributeExplorer()
};
Mscrm.SectionUtils.addColumnsToSection = function(noOfColumns, sectionNode) {
    var $v_0 = "11", $v_1 = sectionNode.attributes.getNamedItem("columns");
    if ($v_1) $v_0 = XUI.Xml.GetText($v_1);
    for (var $v_4 = 0; $v_4 < noOfColumns; $v_4++) $v_0 += "1";
    for (var $v_2 = XUI.Xml.SelectNodes(sectionNode, "rows/row", null), $v_3 = null, $v_5 = 0;
        $v_5 < $v_2.length;
        $v_5++) {
        $v_3 = $v_2[$v_5];
        for (var $v_6 = 0; $v_6 < noOfColumns; $v_6++) $v_3.appendChild(Mscrm.DragDropUtils.createSystemSpacerXml())
    }
};
Mscrm.SectionUtils.isSectionEmpty = function(secNode) {
    for (var $v_0 = true, $v_1 = XUI.Xml.SelectNodes(secNode, "rows/row/cell/control", null), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++)
        if (!XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("id")).startsWith("spacer_System")) {
            $v_0 = false;
            break
        }
    return $v_0
};
Mscrm.SectionUtils.getNextSectionName = function(parentTabName) {
    var $v_0 = Math.random().toString(),
        $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab[@name='" + parentTabName + "']",
            null);
    if (!IsNull($v_1)) {
        var $v_2 = XUI.Xml.SelectNodes($v_1, "columns/column/sections/section", null).length, $v_3 = $v_2 + 1;
        $v_0 = parentTabName + "_section_" + $v_3;
        while (true) {
            if (!IsNull(XUI.Xml
                    .SelectSingleNode($v_1, "columns/column/sections/section[@name='" + $v_0 + "']", null)) ||
                !IsNull(XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "/entity/form/tabs/tab/columns/column/sections/section[@name='" + $v_0 + "']",
                    null))) {
                $v_3++;
                $v_0 = parentTabName + "_section_" + $v_3;
                continue
            }
            break
        }
    }
    return $v_0
};
Mscrm.SectionUtils.$2D = function() {
    var $v_0 = "/control[@classid='{0}']",
        $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" +
            String.format("[@colspan > 1]/control[@classid!='{0}']", "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}"),
            null),
        $v_2 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" +
            String.format("[@rowspan > 1]/control[@classid!='{0}']", "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}"),
            null),
        $v_3 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" + String.format($v_0, "{FD2A7985-3187-444e-908D-6624B21F69C0}"),
            null),
        $v_4 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" + String.format($v_0, "{9FDF5F91-88B1-47f4-AD53-C11EFC01A01D}"),
            null),
        $v_5 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" + String.format($v_0, "{587CDF98-C1D5-4bde-8473-14A0BC7644A7}"),
            null),
        $v_6 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" + String.format($v_0, "{080677DB-86EC-4544-AC42-F927E74B491F}"),
            null),
        $v_7 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/header/rows/row/cell" +
            String.format("/control[@classid!='{0}']", "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}"),
            null).length;
    if ($v_7 > 4 || !IsNull($v_3) || !IsNull($v_4) || !IsNull($v_5) || !IsNull($v_6) || !IsNull($v_1) || !IsNull($v_2)
    ) return true;
    return false
};
Mscrm.SectionUtils.showOrHideHeaderWarningMessage = function() {
    var $v_0 = $get("crmNotificationsForHeader");
    if (IsNull($v_0)) return;
    if (Mscrm.SectionUtils.$2D()) $v_0.style.display = "block";
    else $v_0.style.display = "none"
};
Mscrm.TabUtils = function() {};
Mscrm.TabUtils.get_enableD_BACKGROUND_COLOR = function() { return "#ffffff" };
Mscrm.TabUtils.expandCollapseTab = function(tabHeader) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
        var $v_0 = tabHeader.id.substr(10), $v_1 = Mscrm.DragDropUtils.getTabNode($v_0);
        if (!IsNull($v_1)) {
            var $v_2 = $get("tabBody_" + $v_0),
                $v_3 = $get("tabImage_" + $v_0),
                $v_4 = $v_1.attributes.getNamedItem("expanded");
            if (IsNull($v_4)) $v_4 = Mscrm.FormUtils.addAttribute($v_1, "expanded", "true");
            var $v_5 = $v_4.nodeValue;
            if (!isNullOrEmptyString($v_5)) {
                var $v_6;
                if ($v_5.toLowerCase() === "true") {
                    $v_2.style.display = "none";
                    $v_6 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                        .create(window.CDNURL + "/_imgs/tab_section_right.png"));
                    Mscrm.FormUtils.addAttribute($v_1, "expanded", "false");
                    $v_3.setAttribute("alt",
                        Mscrm.FormXmlUtils.getResourceValue("tabExpanded", Mscrm.FormEditorVariables.formXml))
                } else {
                    $v_2.style.display = "";
                    $v_6 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                        .create(window.CDNURL + "/_imgs/tab_section_down.png"));
                    Mscrm.FormUtils.addAttribute($v_1, "expanded", "true");
                    $v_3.setAttribute("alt",
                        Mscrm.FormXmlUtils.getResourceValue("tabCollapsed", Mscrm.FormEditorVariables.formXml))
                }
                $v_3.setAttribute("src", $v_6.source);
                $v_3.className = $v_6.cssClass
            }
        }
    }
};
Mscrm.TabUtils.expandTabIfRequired = function(tabNode) {
    if (!IsNull(tabNode)) {
        var $v_0 = Mscrm.FormXmlUtils.getAttributeValue(tabNode, "expanded");
        if (!IsNull($v_0) && $v_0.toString() === "false") {
            var $v_1 = $get("tabHeader_" + Mscrm.FormXmlUtils.getAttributeValue(tabNode, "id"));
            !IsNull($v_1) && Mscrm.TabUtils.expandCollapseTab($v_1)
        }
    }
};
Mscrm.TabUtils.enableDisableFormParts = function() {
    if (Mscrm.Utilities.isEdge()) Mscrm.FormEditorVariables.formXml = getResultNode(Mscrm.FormEditorVariables.formXml);
    var $v_0 = true, $v_1 = true, $v_2 = true, $v_3 = true, $v_4 = $get("tabs");
    switch (Mscrm.FormEditorVariables.fieldExpIsFor) {
    case "section":
        $v_0 = false;
        break;
    case "header":
        $v_1 = false;
        break;
    case "footer":
        $v_2 = false;
        break;
    case "navigation":
        $v_3 = false;
        break
    }
    if (Mscrm.FormEditorVariables.editorType === "formEditor") {
        Mscrm.TabUtils.$28();
        Mscrm.TabUtils.$27();
        Mscrm.TabUtils.$1a()
    }
    for (var $v_5 = XUI.Xml.SelectNodes(Mscrm.FormEditorVariables.formXml, "/entity/form/tabs/tab/@id", null),
        $v_6 = null,
        $v_7 = null,
        $v_8 = null,
        $v_9 = null,
        $v_E = 0;
        $v_E < $v_5.length;
        $v_E++) {
        $v_6 = "tabBody_" + XUI.Xml.GetText($v_5[$v_E]);
        $v_7 = "tabHeader_" + XUI.Xml.GetText($v_5[$v_E]);
        $v_8 = $get($v_6);
        $v_9 = $get($v_7);
        $v_8 && $v_9 && Mscrm.TabUtils.$u($v_4, $v_0)
    }
    var $v_A = $get("headerSection");
    $v_A && Mscrm.TabUtils.$u($v_A, $v_1);
    var $v_B = $get("footerSection");
    $v_B && Mscrm.TabUtils.$u($v_B, $v_2);
    var $v_C = $get("formNavigationBarTD"), $v_D = $get("formNavigationBar");
    !IsNull($v_C) && Mscrm.TabUtils.$u($v_D, $v_3);
    Mscrm.FieldExplorerUtils.scrollFieldExplorer(0);
    Mscrm.TabUtils.$1v()
};
Mscrm.TabUtils.setTabStatesCookie = function() {
    for (var $v_0 = "", $v_1 = Mscrm.DragDropUtils.getTabNodes(), $v_2 = null, $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
        $v_2 = $v_1[$v_3].attributes.getNamedItem("id");
        if (!IsNull($v_2)) {
            var $v_4 = $get("tabHeader_" + XUI.Xml.GetText($v_2)), $v_5 = $v_4.getAttribute("expanded");
            if (!IsNull($v_5)) if ($v_5.toString() === "false") $v_0 += XUI.Xml.GetText($v_2) + "|"
        }
    }
    if ($v_0.length > 0) document.cookie = "tabStates=" + $v_0 + ";"
};
Mscrm.TabUtils.scrollIntoTab = function(lefNavTabItem) {
    if (!IsNull(lefNavTabItem) && Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
        var $v_0 = lefNavTabItem.id;
        if (!IsNull($v_0) && $v_0.length > 11) {
            var $v_1 = $get($v_0.substr(11));
            !IsNull($v_1) && Mscrm.Utilities.click($v_1)
        }
    }
};
Mscrm.TabUtils.clickFirstTab = function() {
    var $v_0 = $get("tabs");
    if (!IsNull($v_0)) {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0), $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
        !IsNull($v_1) && !IsNull($v_2) && XUI.Html.DispatchDomEvent($v_2, XUI.Html.CreateDomEvent("click"))
    }
};
Mscrm.TabUtils.getNextTabName = function(totalTabs) {
    var $v_0 = totalTabs + 1, $v_1 = "tab_" + $v_0;
    while (true) {
        if (!IsNull(XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab[@name='" + $v_1 + "']",
            null))) {
            $v_0++;
            $v_1 = "tab_" + $v_0;
            continue
        }
        break
    }
    return $v_1
};
Mscrm.TabUtils.getTabNameFromId = function(tabId) {
    var $v_0 = "",
        $v_1 = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab[@id='" + tabId + "']",
            null);
    if (!IsNull($v_1)) $v_0 = Mscrm.FormXmlUtils.getAttributeValue($v_1, "name").toString();
    return $v_0
};
Mscrm.TabUtils.$28 = function() {
    var $v_0 = $get("hiddenExplorerImage"), $v_1 = $get("shownExplorerImage");
    if (!IsNull($v_0) && !IsNull($v_1))
        if (Mscrm.FormEditorVariables.fieldExpIsFor === "navigation") {
            $v_0.setAttribute("alt", $get("relationshipExplorerImageAltText").innerHTML);
            $v_1.setAttribute("alt", $get("relationshipExplorerImageAltText").innerHTML)
        } else {
            $v_0.setAttribute("alt", $get("fieldExplorerImageAltText").innerHTML);
            $v_1.setAttribute("alt", $get("fieldExplorerImageAltText").innerHTML)
        }
};
Mscrm.TabUtils.$27 = function() {
    if (Mscrm.FormEditorVariables
        .fieldExpIsFor ===
        "navigation") $get("unusedFilterLabel").innerHTML = $get("unusedRelationshipLabelText").innerHTML;
    else $get("unusedFilterLabel").innerHTML = $get("unusedFieldLabelText").innerHTML
};
Mscrm.TabUtils.$1v = function() {
    if (Mscrm.FormEditorVariables
        .fieldExpIsFor !==
        "section") Mscrm.TabUtils.$1D(Mscrm.DragDropUtils.getTabNodes(), "tabIndex", "-1");
    else Mscrm.TabUtils.$1D(Mscrm.DragDropUtils.getTabNodes(), "tabIndex", "10")
};
Mscrm.TabUtils.$1a = function() {
    var $v_0 = $get("unusedFilter");
    if (!IsNull($v_0))
        if (Mscrm.FormEditorVariables.fieldExpIsFor === "navigation") {
            !$v_0.checked && Mscrm.Utilities.click($v_0);
            $v_0.disabled = true
        } else $v_0.disabled = false
};
Mscrm.TabUtils.$1D = function($p0, $p1, $p2) {
    var $v_0 = null;
    if (!IsNull($p0))
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_0 = $get(Mscrm.FormXmlUtils.getAttributeValue($p0[$v_1], "id"));
            !IsNull($v_0) && $v_0.setAttribute($p1, $p2)
        }
};
Mscrm.TabUtils.$u = function($p0, $p1) {
    if (!IsNull($p0))
        if ($p1) {
            XUI.Html.SetOpacity($p0, .7);
            $p0.style.backgroundColor = "#e9edf1"
        } else {
            XUI.Html.RemoveOpacity($p0);
            $p0.style.backgroundColor = Mscrm.TabUtils.get_enableD_BACKGROUND_COLOR()
        }
};
Mscrm.DragSource.registerClass("Mscrm.DragSource", Sys.UI.Behavior, Sys.Preview.UI.IDragSource);
Mscrm.ScrollUtils.registerClass("Mscrm.ScrollUtils");
Mscrm.DropTarget.registerClass("Mscrm.DropTarget", Sys.UI.Behavior, Sys.Preview.UI.IDropTarget);
Mscrm.NavigationDropTarget.registerClass("Mscrm.NavigationDropTarget", Sys.UI.Behavior, Sys.Preview.UI.IDropTarget);
Mscrm.DragModes.registerClass("Mscrm.DragModes");
Mscrm.DragDropUtils.registerClass("Mscrm.DragDropUtils");
Mscrm.BusinessRulesExplorer.registerClass("Mscrm.BusinessRulesExplorer");
Mscrm.OperationValidator.registerClass("Mscrm.OperationValidator");
Mscrm.ElementObject.registerClass("Mscrm.ElementObject");
Mscrm.Position.registerClass("Mscrm.Position");
Mscrm.FieldExplorerUtils.registerClass("Mscrm.FieldExplorerUtils");
Mscrm.RelatioShipExplorerUtils.registerClass("Mscrm.RelatioShipExplorerUtils");
Mscrm.FieldPropertiesUtils.registerClass("Mscrm.FieldPropertiesUtils");
Mscrm.ChartGridMode.registerClass("Mscrm.ChartGridMode");
Mscrm.FormNavigationUtils.registerClass("Mscrm.FormNavigationUtils");
Mscrm.FormEditorRibbonRules.registerClass("Mscrm.FormEditorRibbonRules");
Mscrm.FormEditorVariables.registerClass("Mscrm.FormEditorVariables");
Mscrm.FormUndoRedo.registerClass("Mscrm.FormUndoRedo");
Mscrm.DirtyPartInfo.registerClass("Mscrm.DirtyPartInfo");
Mscrm.FormEditorKeyboardAccessibility.registerClass("Mscrm.FormEditorKeyboardAccessibility");
Mscrm.PreviewCellUtils.registerClass("Mscrm.PreviewCellUtils");
Mscrm.PreviewCellDefaults.registerClass("Mscrm.PreviewCellDefaults");
Mscrm.DashboardControls.registerClass("Mscrm.DashboardControls");
Mscrm.DashboardXmlAttributes.registerClass("Mscrm.DashboardXmlAttributes");
Mscrm.Register.registerClass("Mscrm.Register");
Mscrm.FormHtmlElementIds.registerClass("Mscrm.FormHtmlElementIds");
Mscrm.FormUtils.registerClass("Mscrm.FormUtils");
Mscrm.FormXMLAttributes.registerClass("Mscrm.FormXMLAttributes");
Mscrm.CellAttributes.registerClass("Mscrm.CellAttributes");
Mscrm.ControlParameters.registerClass("Mscrm.ControlParameters");
Mscrm.FormXMlConstants.registerClass("Mscrm.FormXMlConstants");
Mscrm.ResizeUtils.registerClass("Mscrm.ResizeUtils");
Mscrm.ResizeDefaults.registerClass("Mscrm.ResizeDefaults");
Mscrm.SectionUtils.registerClass("Mscrm.SectionUtils");
Mscrm.TabUtils.registerClass("Mscrm.TabUtils");
Mscrm.DragModes.fromFieldExplorer = "fromFieldExplorer";
Mscrm.DragModes.fromNavigation = "fromNavigation";
Mscrm.DragModes.fromMainCanvas = "fromMainCanvas";
Mscrm.DragDropUtils.headeR_PATH_IN_FORMXML = "/entity/form/header";
Mscrm.DragDropUtils.footeR_PATH_IN_FORMXML = "/entity/form/footer";
Mscrm.DragDropUtils.tabS_PATH_IN_FORMXML = "/entity/form/tabs";
Mscrm.DragDropUtils.taB_PATH_IN_FORMXML = "/entity/form/tabs/tab";
Mscrm.DragDropUtils.sectioN_PATH_IN_FORMXML = "/entity/form/tabs/tab/columns/column/sections/section";
Mscrm.DragDropUtils.rowS_PATH_IN_HEADER = "/entity/form/header/rows";
Mscrm.DragDropUtils.rowS_PATH_IN_FOOTER = "/entity/form/footer/rows";
Mscrm.DragDropUtils.rowS_PATH_IN_SECTION = "/entity/form/tabs/tab/columns/column/sections/section/rows";
Mscrm.DragDropUtils.cellS_PATH_IN_MAIN_CANVANS = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell";
Mscrm.DragDropUtils.cellS_PATH_IN_HEADER = "/entity/form/header/rows/row/cell";
Mscrm.DragDropUtils.cellS_PATH_IN_FOOTER = "/entity/form/footer/rows/row/cell";
Mscrm.DragDropUtils
    .dependencieS_PATH_IN_MAIN_CANVAS =
    "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/events/event/dependencies/dependency";
Mscrm.DragDropUtils
    .dependencieS_PATH_IN_FOOTER = "/entity/form/footer/rows/row/cell/events/event/dependencies/dependency";
Mscrm.DragDropUtils
    .dependencieS_PATH_IN_HEADER = "/entity/form/header/rows/row/cell/events/event/dependencies/dependency";
Mscrm.DragDropUtils.forM_DEPENDENCIES_PATH = "/entity/form/externaldependencies/dependency";
Mscrm.DragDropUtils.forM_PARAMETERS_PATH = "/entity/form/formparameters";
Mscrm.DragDropUtils.placE_HOLDER_PREFIX = "placeHolder";
Mscrm.DragDropUtils.guiD_LENGTH = 38;
Mscrm.DragDropUtils.systeM_SPACER_PREFIX = "spacer_System";
Mscrm.DragDropUtils.useR_SPACER_PREFIX = "spacer_User";
Mscrm.DragDropUtils.HEADER = "header";
Mscrm.DragDropUtils.SECTION = "crmSection";
Mscrm.DragDropUtils.FOOTER = "footer";
Mscrm.DragDropUtils.MAIN = "section";
Mscrm.DragDropUtils.crM_SECTION = "crmSection";
Mscrm.DragDropUtils.crM_TAB = "crmTab";
Mscrm.DragDropUtils.useR_SPACER_ID = "Spacer";
Mscrm.DragDropUtils.CELL = "cell";
Mscrm.DragDropUtils.IFRAME = "iframe";
Mscrm.DragDropUtils.POWERBITILE = "powerbitile";
Mscrm.DragDropUtils.SUBGRID = "subgrid";
Mscrm.DragDropUtils.QUICKFORMCOLLECTION = "quickformcollection";
Mscrm.DragDropUtils.REFERENCEPANELQUICKFORMCOLLECTION = "referencepanelquickformcollection";
Mscrm.DragDropUtils.REFERENCEPANELSUBGRID = "referencepanelsubgrid";
Mscrm.DragDropUtils.REFERENCEPANELSEARCHWIDGET = "referencepanelsearchwidget";
Mscrm.DragDropUtils.INTERACTIONWALL = "interactionwall";
Mscrm.DragDropUtils.BINGMAP = "bingmap";
Mscrm.DragDropUtils.NOTES = "notes";
Mscrm.DragDropUtils.WEBRESOURCE = "webresource";
Mscrm.DragDropUtils.TIMERCONTROL = "timercontrol";
Mscrm.DragDropUtils.SEARCHWIDGET = "searchwidget";
Mscrm.DragDropUtils.NAVITEM = "navItem";
Mscrm.DragDropUtils.NAVGROUP = "navGroup";
Mscrm.DragDropUtils.ROW = "row";
Mscrm.DragDropUtils.DELVE = "delve";
Mscrm.DragDropUtils.ACI = "aci";
Mscrm.DragDropUtils.SOCIALINSIGHT = "socialInsight";
Mscrm.DragDropUtils.ORGINSIGHTS = "orgInsights";
Mscrm.DragDropUtils.NOTES_CONTROL_ID = "notescontrol";
Mscrm.DragDropUtils.BingMapsControlId = "mapcontrol";
Mscrm.DragDropUtils.TimerControlId = "timercontrol";
Mscrm.DragDropUtils.SearchWidgetId = "searchwidget";
Mscrm.DragDropUtils.noteS_CONTROL_ROW_SPAN = 15;
Mscrm.DragDropUtils.FIELDEXPCELL = "ms-crm-Dialog-ListItem-ImportMap";
Mscrm.DragDropUtils.TAB = "ms-crm-Tab";
Mscrm.DragDropUtils.UNDO = "undo";
Mscrm.DragDropUtils.REDO = "redo";
Mscrm.DragDropUtils.navigationBottomScrollOffset = 80;
Mscrm.DragDropUtils.mainCanvasBottomScrollOffset = 20;
Mscrm.DragDropUtils.dragStarted = false;
Mscrm.DragDropUtils.dragSelected = null;
Mscrm.DragDropUtils._spacerNumber = 0;
Mscrm.BusinessRulesExplorer.businessRuleExplorer = "businessrules";
Mscrm.BusinessRulesExplorer.businessRuleExplorerUrlConstant = "BRExplorer";
Mscrm.BusinessRulesExplorer.$i = null;
Mscrm.FieldExplorerUtils.fieldExplorerCaption = "";
Mscrm.FieldExplorerUtils.relationshipExplorerCaption = "";
Mscrm.FieldExplorerUtils.businessRulesExplorerCaption = "";
Mscrm.FieldExplorerUtils.$q = 0;
Mscrm.RelatioShipExplorerUtils.relationshipXmlDefaultValue = "<relationships/>";
Mscrm.ChartGridMode.ALL = "All";
Mscrm.ChartGridMode.GRID = "Grid";
Mscrm.ChartGridMode.CHART = "Chart";
Mscrm.FormNavigationUtils.naV_GROUP_CLASS = "navGroup";
Mscrm.FormNavigationUtils.naV_ITEM_CLASS = "navItem";
Mscrm.FormNavigationUtils.NAVIGATION = "navigation";
Mscrm.FormNavigationUtils.forM_NAV_RELATIONSHIPITEM_PATH = "/entity/form/Navigation/NavBar/NavBarByRelationshipItem";
Mscrm.FormNavigationUtils.forM_NAV_ITEMS_PATH = "/entity/form/Navigation/NavBar/child::*";
Mscrm.FormNavigationUtils.forM_NAV_LINKITEM_PATH = "/entity/form/Navigation/NavBar/NavBarItem";
Mscrm.FormNavigationUtils.forM_NAV_GROUP_PATH = "/entity/form/Navigation/NavBarAreas/NavBarArea";
Mscrm.FormNavigationUtils.forM_NAVIGATION_PATH = "/entity/form/Navigation";
Mscrm.FormNavigationUtils.forM_NAVBAR_PATH = "/entity/form/Navigation/NavBar";
Mscrm.FormNavigationUtils.forM_NAVIGATION_BAR = "formNavigationBar";
Mscrm.FormNavigationUtils.forM_NAVIGATION_BAR_TD = "formNavigationBarTD";
Mscrm.FormEditorVariables.formXml = null;
Mscrm.FormEditorVariables.relationShipsXmlString = "<relationships/>";
Mscrm.FormEditorVariables.initialFormXmlText = null;
Mscrm.FormEditorVariables.fieldExpIsFor = "section";
Mscrm.FormEditorVariables.addColumnsMessage = "";
Mscrm.FormEditorVariables.cellsFor = "crmSection";
Mscrm.FormEditorVariables.unselecteD_BORDER_COLOR = "1px dashed #6d6e70";
Mscrm.FormEditorVariables.insertioN_POINT_COLOR = "red 1px solid";
Mscrm.FormEditorVariables.editoR_YAXIS_OFFSET = 192;
Mscrm.FormEditorVariables.editoR_XAXIS_OFFSET = 184;
Mscrm.FormEditorVariables.editoR_XAXIS_SUB_FACTOR = 343;
Mscrm.FormEditorVariables.editoR_YAXIS_SUB_FACTOR = 310;
Mscrm.FormEditorVariables.forM_EDITOR_ID = "editorDiv";
Mscrm.FormEditorVariables.supportNotes = "True";
Mscrm.FormEditorVariables.supportBingMaps = "False";
Mscrm.FormEditorVariables.supportSocialInsights = "False";
Mscrm.FormEditorVariables.supportTimerControl = "True";
Mscrm.FormEditorVariables.supportKMControl = "False";
Mscrm.FormEditorVariables.supportACIControl = "True";
Mscrm.FormEditorVariables.webResourceRootUrl = "";
Mscrm.FormEditorVariables.editorType = "formEditor";
Mscrm.FormEditorVariables.formId = "";
Mscrm.FormEditorVariables.formAccessType = 1030;
Mscrm.FormEditorVariables.currentFieldFilter = 1;
Mscrm.FormEditorVariables.currentRelationshipFielter = 3;
Mscrm.FormEditorVariables.isCustomizabe = "true";
Mscrm.FormEditorVariables.officeGraphDocument = "officegraphdocument";
Mscrm.FormEditorVariables.delveViewId = "{D175CD98-E31E-4D68-8B02-14D756746567}";
Mscrm.FormEditorVariables.FormType = "main";
Mscrm.FormEditorVariables.canAssignRoles = "false";
Mscrm.FormEditorVariables.canCreateForms = "true";
Mscrm.FormEditorVariables.currentFormId = "";
Mscrm.FormEditorVariables.entityLogicalName = "";
Mscrm.FormEditorVariables.parentFormId = "";
Mscrm.FormEditorVariables.entityUnpublishedLabel = "";
Mscrm.FormEditorVariables.iconPath = "";
Mscrm.FormEditorVariables.defaultIconPath = "";
Mscrm.FormEditorVariables.defaultTabIndex = "10";
Mscrm.FormEditorVariables.maxSequenceVal = -1;
Mscrm.FormEditorVariables.currentClassName = "";
Mscrm.FormEditorVariables.fieldExplorerImageAltText = "";
Mscrm.FormEditorVariables.relationshipExplorerImageAltText = "";
Mscrm.FormEditorVariables.explorerCheckBoxId = "unusedFilter";
Mscrm.FormEditorVariables.formNavigationRoot = "formNavigationRoot";
Mscrm.FormEditorVariables.designerRoot = "formDesigner";
Mscrm.FormEditorVariables.formEditorRoot = "editorRootElement";
Mscrm.FormEditorVariables.intervalId = -1;
Mscrm.FormEditorVariables.isTabletEnabled = "";
Mscrm.FormEditorVariables.initialIsTabletEnabled = null;
Mscrm.FormEditorVariables.socialInsightsConfigurations = {};
Mscrm.FormUndoRedo.fldExpRefreshed = false;
Mscrm.FormUndoRedo.addDirtyPart = true;
Mscrm.FormUndoRedo.$H = [];
Mscrm.FormUndoRedo.$I = 0;
Mscrm.FormEditorKeyboardAccessibility.$b = Mscrm.FormEditorKeyboardAccessibility.keyPressHandler;
Mscrm.FormEditorKeyboardAccessibility.$s = Mscrm.FormEditorKeyboardAccessibility.keyDownHandler;
Mscrm.PreviewCellDefaults.recordsPerPage = "8";
Mscrm.PreviewCellDefaults.showViewSelector = false;
Mscrm.PreviewCellDefaults.showSearchBoxForChart = false;
Mscrm.PreviewCellDefaults.showSearchBoxForGrid = true;
Mscrm.PreviewCellDefaults.showChartSelector = false;
Mscrm.PreviewCellDefaults.autoExpanding = false;
Mscrm.PreviewCellDefaults.showLabel = false;
Mscrm.PreviewCellDefaults.showJumpBarForChart = false;
Mscrm.PreviewCellDefaults.showJumpBarForGrid = true;
Mscrm.DashboardControls.placeholderAnchorClass = "PlaceholderAnchor";
Mscrm.DashboardControls.placeholderImgClass = "PlaceholderImg";
Mscrm.DashboardXmlAttributes.PreviewCellAttr = "ispreviewcell";
Mscrm.Register.$X = [];
Mscrm.Register.$Q = [];
Mscrm.Register.$T = [];
Mscrm.Register.$W = [];
Mscrm.Register.$V = [];
Mscrm.Register.$U = [];
Mscrm.Register.TABS = "tabs";
Mscrm.Register.SECTIONS = "sections";
Mscrm.Register.CELLS = "cells";
Mscrm.Register.NAVRELATIONS = "navRelations";
Mscrm.Register.NAVLINKS = "navLinks";
Mscrm.Register.NAVGROUPS = "navGroups";
Mscrm.Register.NAVGROUPITEMS = "navGroupItems";
Mscrm.FormHtmlElementIds.expandedExplorer = "expandedExplorer";
Mscrm.FormHtmlElementIds.collapsedExplorer = "collapsedExplorer";
Mscrm.FormHtmlElementIds.newFieldButtonTD = "newFieldTD";
Mscrm.FormHtmlElementIds.new1ToNRelationshipButtonTD = "new1ToNRelationshipTD";
Mscrm.FormHtmlElementIds.newNToNRelationshipButtonTD = "newNToNRelationshipTD";
Mscrm.FormHtmlElementIds.newBusinessRuleButtonTD = "newBusinessRuleTD";
Mscrm.FormHtmlElementIds.fieldFilterTD = "fieldFilterTD";
Mscrm.FormHtmlElementIds.relationshipFilterTD = "relationshipFilterTD";
Mscrm.FormHtmlElementIds.fieldListDiv = "fieldListDiv";
Mscrm.FormHtmlElementIds.attributeExplorerDiv = "attrExpDivShow";
Mscrm.FormHtmlElementIds.formEntityIconDiv = "formEntityIconDiv";
Mscrm.FormXMLAttributes.locK_LEVEL = "locklevel";
Mscrm.FormXMLAttributes.UNBOUNDED = "unbounded";
Mscrm.CellAttributes.shoW_LABEL = "showlabel";
Mscrm.CellAttributes.ROWSPAN = "rowspan";
Mscrm.CellAttributes.COLSPAN = "colspan";
Mscrm.ControlParameters.PARAMETERS = "parameters";
Mscrm.ControlParameters.ENABLEVIEWPICKER = "EnableViewPicker";
Mscrm.ControlParameters.ENABLEJUMPBAR = "EnableJumpBar";
Mscrm.ControlParameters.ENABLEQUICKFIND = "EnableQuickFind";
Mscrm.ControlParameters.CHARTGRIDMODE = "ChartGridMode";
Mscrm.ControlParameters.RECORDSPERPAGE = "RecordsPerPage";
Mscrm.FormXMlConstants.$p = 12;
Mscrm.FormXMlConstants.$14 = 6;
Mscrm.FormXMlConstants.$12 = 4;
Mscrm.FormXMlConstants.$1C = 1;
Mscrm.FormXMlConstants.$11 = 2;
Mscrm.FormXMlConstants.$13 = 4;
Mscrm.FormXMlConstants._interactionCentricFormEditorTextAreaRowSpan = 3;
Mscrm.TabUtils.taB_PATH_IN_FORMXML_MAIN = "/entity/form/tabs/tab";
Mscrm.TabUtils.taB_BODY_PREFIX = "tabBody_";
Mscrm.TabUtils.taB_HEADER_PREFIX = "tabHeader_";
Mscrm.TabUtils.disableD_BACKGROUND_COLOR = "#e9edf1";
Mscrm.TabUtils.taB_STATE_COOKIE = "tabStates";
Mscrm.TabUtils.tabS_ID = "tabs";
Mscrm.TabUtils.headeR_ID = "headerSection";
Mscrm.TabUtils.footeR_ID = "footerSection"