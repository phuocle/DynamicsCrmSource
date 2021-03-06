Type.registerNamespace("Mscrm");
Mscrm.TreeNavControl = function(element) {
    this.$$d_$r_3 = Function.createDelegate(this, this.$r_3);
    this.$$d_$1B_3 = Function.createDelegate(this, this.$1B_3);
    this.$$d_switchAreaMenuHandler = Function.createDelegate(this, this.switchAreaMenuHandler);
    this.$$d_$o_3 = Function.createDelegate(this, this.$o_3);
    this.$$d_$15_3 = Function.createDelegate(this, this.$15_3);
    this.$$d_$18_3 = Function.createDelegate(this, this.$18_3);
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$17_3 = Function.createDelegate(this, this.$17_3);
    this.$$d_$16_3 = Function.createDelegate(this, this.$16_3);
    this.$7_3 = [];
    this.$8_3 = [];
    Mscrm.TreeNavControl.initializeBase(this, [element])
};
Mscrm.TreeNavControl.switchMenuBar = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    IsNull(Mscrm.TreeNavControl.$0) && $v_0.$D_3();
    if (Mscrm.TreeNavControl.$0.id !== "areaForm") {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0);
        $addHandler($v_1, "load", $v_0.$$d_switchAreaMenuHandler)
    } else $v_0.switchAreaMenuHandler(null)
};
Mscrm.TreeNavControl.iFrameOnLoadCallBack = function() {
    for (var $v_0 = Mscrm.TreeNavControl.$5(), $v_1 = 0; $v_1 < $v_0.$8_3.length; $v_1++) {
        var $v_2 = $v_0.$8_3[$v_1];
        $v_2()
    }
};
Mscrm.TreeNavControl.navigateToNode = function(category, id, subelement) {
    var $v_0 = Mscrm.TreeNavControl.$5(), $v_1 = $v_0.get_element(), $v_2, $v_3 = "nav_components";
    if (!isNullOrEmptyString(category)) {
        $v_3 = String.format("a_node_{0}", category);
        if (!isNullOrEmptyString(id)) {
            var $v_4 = $v_1.ownerDocument.getElementById($v_3);
            $v_3 = $v_3 + "_" + id;
            if ($v_4) {
                $v_0.handleCollapseExpand($v_4, 1);
                if (!isNullOrEmptyString(subelement)) {
                    $v_4 = $v_1.ownerDocument.getElementById($v_3);
                    $v_3 = $v_3 + "_" + subelement;
                    $v_4 && $v_4.getAttribute("expanded") !== "true" && $v_0.handleCollapseExpand($v_4, 1)
                }
            }
        }
    }
    $v_2 = $v_1.ownerDocument.getElementById($v_3);
    if ($v_2) {
        $v_0.selectElement($v_2);
        !isNullOrEmptyString(id) && isNullOrEmptyString(subelement) && $v_0.handleCollapseExpand($v_2, 1);
        $v_0.handleNavigation($v_2)
    }
};
Mscrm.TreeNavControl.$5 = function() {
    var $v_0 = null, $v_1 = window.self;
    while (true) {
        $v_0 = $v_1.document.getElementById(Mscrm.TreeNavControl.treeNavControlId);
        if (IsNull($v_0)) $v_1 = $v_1.parent;
        else break
    }
    var $v_2 = $v_0.control;
    return $v_2
};
Mscrm.TreeNavControl.refreshTree = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    $v_0.$o_3(null)
};
Mscrm.TreeNavControl.getHelpContextUri = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    return $v_0.getCurrentAreaUri()
};
Mscrm.TreeNavControl.saveEntityAction = function(bClose, bPublish) {
    var $v_0 = Mscrm.TreeNavControl.$5(), $v_1 = "saveEntityAction";
    if (!IsNull($v_0))
        if (bPublish) $v_0.$B_3("_saveandpublish");
        else $v_0.$B_3($v_1);
    else window[$v_1](bClose, bPublish)
};
Mscrm.TreeNavControl.closeWindow = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) {
        if ($v_0.$7_3.length > 1) {
            $v_0.$7_3.pop();
            var $v_1 = $v_0.$7_3.pop(), $v_2 = $v_0.get_element().ownerDocument.getElementById($v_1);
            XUI.Html.DispatchDomEvent($v_2, XUI.Html.CreateDomEvent("click"))
        }
    } else window.closeWindow()
};
Mscrm.TreeNavControl.publishEntityAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("publishEntityAction");
    else window.publishEntityAction()
};
Mscrm.TreeNavControl.publishEntitiesAllAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("publishEntitiesAllAction");
    else window.publishEntitiesAllAction()
};
Mscrm.TreeNavControl.updateEntityIconsAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("updateEntityIconsAction");
    else window.updateEntityIconsAction()
};
Mscrm.TreeNavControl.deleteEntityAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("deleteEntityAction");
    else window.deleteEntityAction()
};
Mscrm.TreeNavControl.showDependencyAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("showDependencyAction");
    else window.showDependencyAction()
};
Mscrm.TreeNavControl.managedPropertyAction = function() {
    var $v_0 = Mscrm.TreeNavControl.$5();
    if (!IsNull($v_0)) $v_0.$B_3("managedPropertyAction");
    else window.managedPropertyAction()
};
Mscrm.TreeNavControl.prototype = {
    $L_3: null,
    $N_3: null,
    $M_3: null,
    $J_3: null,
    $K_3: null,
    $F_3: null,
    $1_3: null,
    $G_3: null,
    defaultSelectedNodeId: null,
    treeNavComponentId: null,
    groupExpandIMGPath: null,
    groupCollapseIMGPath: null,
    nodeExpandIMGPath: null,
    nodeCollapseIMGPath: null,
    labelCollapsed: null,
    labelExpanded: null,
    breadcrumbLargeIconImgId: null,
    form_title_spanId: null,
    leftNavBreadcrumbImgId: null,
    leftNavBreadcrumbTextId: null,
    get_disabled: function() {
        var $v_0 = this.get_element().getAttribute("disabled");
        if (typeof $v_0 === "boolean") return $v_0;
        return !IsNull($v_0) && ($v_0 === "true" || $v_0 === "disabled")
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$L_3 = this.$$d_$16_3;
        this.$M_3 = this.$$d_$17_3;
        this.$N_3 = this.$$d_$14_3;
        this.$J_3 = this.$$d_$18_3;
        this.$K_3 = this.$$d_$15_3;
        this.$F_3 = this.$$d_$o_3;
        this.$G_3 = this.$$d_switchAreaMenuHandler;
        this.$1A_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$v_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $1A_3: function() {
        if (this.get_disabled()) return;
        this.$f_3(this.get_element())
    },
    $f_3: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (!IsNull($v_2.getAttribute("atype"))) {
                $addHandler($v_2, "keydown", this.$N_3);
                $addHandler($v_2, "click", this.$L_3);
                ($v_2.getAttribute("atype") === "group" || $v_2.getAttribute("atype") === "node") &&
                    $addHandler($v_2, "dblclick", this.$M_3);
                $addHandler($v_2, "focus", this.$J_3);
                $addHandler($v_2, "blur", this.$K_3)
            }
        }
    },
    $g_3: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (!IsNull($v_2.getAttribute("atype"))) {
                $removeHandler($v_2, "keydown", this.$N_3);
                $removeHandler($v_2, "click", this.$L_3);
                ($v_2.getAttribute("atype") === "group" || $v_2.getAttribute("atype") === "node") &&
                    $addHandler($v_2, "dblclick", this.$M_3);
                $removeHandler($v_2, "focus", this.$J_3);
                $removeHandler($v_2, "blur", this.$K_3)
            }
        }
    },
    $1H_3: function() {
        if (this.get_disabled()) return;
        var $v_0 = this.get_element().getAttribute("defaultselectednodeid");
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = $get("a_" + $v_0);
            if ($v_1) {
                $v_1.focus();
                if ($v_1.tagName === "A" && $v_1.getAttribute("atype") === "node") {
                    var $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1);
                    this.scrollToView($v_2)
                }
                return
            }
        }
        if (!IsNull(this.defaultSelectedNodeId)) {
            var $v_3 = $get(this.defaultSelectedNodeId);
            !IsNull($v_3) && $v_3.tagName === "A" && $v_3.focus()
        }
    },
    $v_3: function() {
        if (this.get_disabled()) return;
        this.$g_3(this.get_element())
    },
    $18_3: function($p0) {
        var $v_0 = this.$T_3($p0);
        this.selectElement($v_0)
    },
    $17_3: function($p0) {
        var $v_0 = $p0.target, $v_1 = this.$T_3($p0);
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.getAttribute("atype");
            switch ($v_2) {
            case "group":
            case "node":
                this.handleCollapseExpand($v_1, 0);
                break
            }
        }
    },
    $15_3: function($p0) { var $v_0 = this.$T_3($p0) },
    selectElement: function(element) {
        if (!IsNull(element)) {
            if (!IsNull(this.$1_3) && !IsNull(this.$1_3.getAttribute("atype")))
                if (this.$1_3.getAttribute("atype") === "group") this.$1_3.className = "ms-crm-navtree-group-heading";
                else this.$1_3.className = "ms-crm-navtree-subarea-link";
            if (!IsNull(element.getAttribute("atype")))
                if (element
                    .getAttribute("atype") ===
                    "group") element.className = "ms-crm-navtree-group-heading-selected";
                else element.className = "ms-crm-navtree-subarea-link-selected";
            this.$1_3 = element
        }
    },
    $16_3: function($p0) {
        var $v_0 = $p0.target, $v_1 = this.$T_3($p0);
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.getAttribute("atype");
            if (IsNull($v_2)) return;
            switch ($v_2) {
            case "link":
                this.handleNavigation($v_1);
                break;
            case "group":
            case "node":
                this.$10_3($v_1, $v_0);
                break
            }
        }
    },
    $14_3: function($p0) {
        if (!IsNull(this.$1_3))
            switch ($p0.keyCode) {
            case 32:
                var $v_0 = this.$1_3.getAttribute("atype");
                if (IsNull($v_0)) return;
                switch ($v_0) {
                case "link":
                    this.handleNavigation(this.$1_3);
                    break;
                case "group":
                case "node":
                    this.handleCollapseExpand(this.$1_3, 0);
                    $p0.preventDefault();
                    $p0.stopPropagation();
                    break
                }
                break;
            case 13:
                this.handleNavigation(this.$1_3);
                break;
            case 39:
                if (window.LOCID_UI_DIR === "RTL") this.handleCollapseExpand(this.$1_3, 2);
                else this.handleCollapseExpand(this.$1_3, 1);
                break;
            case 37:
                if (window.LOCID_UI_DIR === "RTL") this.handleCollapseExpand(this.$1_3, 1);
                else this.handleCollapseExpand(this.$1_3, 2);
                return
            }
    },
    $T_3: function($p0) {
        var $v_0 = $p0.target;
        while ($v_0 && $v_0.tagName !== "A") $v_0 = $v_0.parentNode;
        if (!IsNull($v_0) && !isNullOrEmptyString($v_0.getAttribute("atype"))) return $v_0;
        return null
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 14:
            this.handleWindowResize(parameters);
            break
        }
        return null
    },
    handleWindowResize: function(layoutData) {
        var $v_0 = layoutData[this.get_id()], $v_1 = $v_0["left"];
        this.get_element().offsetLeft !== $v_1 && this.set_left($v_1);
        var $v_2 = $v_0["width"];
        if ($v_2 < 0) $v_2 = 0;
        this.get_element().offsetWidth !== $v_2 && this.set_width($v_2);
        var $v_3 = $v_0["height"];
        if ($v_3 < 0) $v_3 = 0;
        this.get_element().offsetHeight !== $v_3 && this.set_height($v_3);
        this.$t_3($v_0);
        !layoutData["firstTimeLoaded"] && this.$1H_3()
    },
    $t_3: function($p0) {
        var $v_0 = $p0["height"];
        if ($v_0 !== this.get_element().children[0].offsetHeight + this.get_element().children[1].offsetHeight) {
            var $v_1 = $v_0 - this.get_element().children[0].offsetHeight;
            this.get_element().children[1].style.height = ($v_1 > 0 ? $v_1.toString() : "0") + "px"
        }
    },
    $10_3: function($p0, $p1) {
        if ($p0.getAttribute("atype") === "link") {
            this.handleNavigation($p0);
            return
        }
        if ($p1.tagName === "IMG" && $p1.getAttribute("atype") === "expand") this.handleCollapseExpand($p0, 0);
        else this.handleNavigation($p0)
    },
    handleCollapseExpand: function(element, flag) {
        var $v_0 = XUI.Html.DomUtils.GetNextSibling(element),
            $v_1 = flag === 1,
            $v_2 = flag === 2,
            $v_3 = element.getAttribute("expanded"),
            $v_4;
        if ($v_1) $v_4 = "true";
        else if ($v_2) $v_4 = "false";
        else if ($v_3 === "true") $v_4 = "false";
        else $v_4 = "true";
        element.setAttribute("expanded", $v_4);
        for (var $v_5 = XUI.Html.DomUtils.GetFirstChild(element), $v_6 = 0; $v_6 < $v_5.children.length; $v_6++) {
            var $v_7 = $v_5.children[$v_6];
            if ($v_7.tagName !== "IMG" || $v_7.getAttribute("atype") !== "expand") continue;
            var $v_8 = $v_7;
            switch (element.getAttribute("atype")) {
            case "group":
                if ($v_4 === "true") {
                    $v_8.src = this.groupCollapseIMGPath;
                    $v_8.title = this.labelExpanded;
                    $v_0.style.display = "block"
                } else {
                    $v_8.src = this.groupExpandIMGPath;
                    $v_8.title = this.labelCollapsed;
                    $v_0.style.display = "none"
                }
                return;
            case "node":
                if ($v_4 === "true") {
                    $v_8.src = this.nodeCollapseIMGPath;
                    $v_8.title = this.labelExpanded;
                    $v_8.alt = this.labelExpanded;
                    $v_0.style.display = "block";
                    this.scrollToView($v_0)
                } else {
                    $v_8.src = this.nodeExpandIMGPath;
                    $v_8.title = this.labelCollapsed;
                    $v_8.alt = this.labelCollapsed;
                    $v_0.style.display = "none"
                }
                return
            }
        }
    },
    scrollToView: function(elementToScroll) {
        var $v_0 = this.$j_3(), $v_1 = $v_0.scrollTop;
        if (elementToScroll.offsetTop > $v_0.scrollTop &&
            elementToScroll.offsetTop < $v_0.offsetHeight + $v_0.scrollTop &&
            elementToScroll
            .offsetTop +
            elementToScroll.offsetHeight >
            $v_0.offsetHeight + $v_0.scrollTop) $v_1 = $v_0.scrollTop + elementToScroll.offsetHeight;
        else if (elementToScroll.offsetTop > $v_0.scrollTop &&
            elementToScroll
            .offsetTop +
            elementToScroll.offsetHeight >
            $v_0.offsetHeight + $v_0.scrollTop)
            $v_1 = elementToScroll.offsetTop + elementToScroll.offsetHeight - $v_0.offsetHeight + 60;
        else if (elementToScroll.offsetTop < $v_0.scrollTop) $v_1 = elementToScroll.offsetTop;
        if ($v_1 < 0) $v_1 = 0;
        if ($v_1 > elementToScroll.parentNode.offsetTop) $v_1 = elementToScroll.parentNode.offsetTop;
        var $v_2 = this.$z_3();
        if ($v_2 && $v_1 > $v_2.offsetHeight) $v_1 = $v_1 - $v_2.offsetHeight;
        $v_0.scrollTop = $v_1
    },
    $j_3: function() {
        var $v_0 = null, $$t_2 = this;
        XUI.Html.DomUtils.ForEachChild(this.get_element(),
            function($p1_0) {
                if ($p1_0.className === "treenav_body") {
                    $v_0 = $p1_0;
                    return true
                }
                return false
            });
        return $v_0
    },
    handleNavigation: function(element) {
        var $v_0 = element.getAttribute("tabset"), $v_1 = element.getAttribute("url"), $v_2 = false;
        switch ($v_0) {
        case "areaForm":
            $v_2 = this.loadArea("areaForm", null);
            break;
        default:
            if (IsNull($v_1) || !$v_1.length) break;
            var $v_3 = Mscrm.CrmUri.create($v_1);
            $v_2 = this.loadArea($v_0, $v_3.toString());
            break
        }
        if (!$v_2) window.setTimeout(this.$$d_$1B_3, 2);
        else {
            if (this.$7_3.length < 10) this.$7_3.push(element.id);
            else {
                Array.dequeue(this.$7_3);
                this.$7_3.push(element.id)
            }
            this.selectElement(element);
            this.$1G_3()
        }
    },
    $1G_3: function() {
        while (this.$8_3.length > 0) Array.dequeue(this.$8_3);
        this.$1I_3()
    },
    loadArea: function(areaId, strUrl) {
        var $v_0 = $get("tdAreas"), $v_1 = null;
        if (!IsNull(strUrl)) {
            $v_1 = Mscrm.CrmUri.create(strUrl);
            var $v_3 = $get("crmFormSubmit");
            if ($v_1.get_path().indexOf("areas.aspx") >= 0) {
                $v_1.get_query()["security"] = $v_3.crmFormSubmitSecurity.value;
                $v_1.get_query()["oId"] = $v_3.crmFormSubmitId.value;
                $v_1.get_query()["oType"] = $v_3.crmFormSubmitObjectType.value
            }
            $v_1.get_query()["pagemode"] = "iframe"
        }
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        for (var $v_2 = null, $v_4 = 0; $v_4 < $v_0.children.length; $v_4++) {
            var $v_5 = $v_0.children[$v_4];
            if ($v_5.id === areaId) {
                $v_2 = $v_5;
                break
            }
        }
        if ($v_2) {
            var $v_6 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0);
            if (Mscrm.TreeNavControl.$0.id === "areaForm")
                if ($v_2.id !== Mscrm.TreeNavControl.$0.id) {
                    $v_6 = XUI.Html.DomUtils.GetFirstChild($v_2);
                    $v_6.src = $v_1.toString();
                    return this.$X_3($v_2)
                } else return true;
            else if ($v_2.id === "areaForm")
                if (isNullOrEmptyString($get("dashboardAreaForm").style
                    .width)) $get("dashboardAreaForm").style.width = $v_0.offsetWidth - 16 + "px";
            var $v_7 = this.$U_3($v_6);
            if (IsNull($v_7)) {
                $v_6.src = $v_1.toString();
                return this.$X_3($v_2)
            }
            if ($v_2.id === Mscrm.TreeNavControl.$0.id && this.$13_3($v_6.contentWindow.location, $v_1)) return true;
            if (this.$u_3($v_6)) {
                if (!IsNull($v_1)) $v_6.src = $v_1.toString();
                return this.$X_3($v_2)
            } else return false
        } else {
            $v_2 = document.createElement("div");
            $v_2.id = areaId;
            $v_2.innerHTML = "<iframe allowTransparency='-1' src='" +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.toString()) +
                "' title='" +
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_FRAMETITLE_COMPONENTS) +
                "' id='" +
                CrmEncodeDecode.CrmHtmlAttributeEncode(areaId) +
                "Frame' scrolling='no' isArea='1' width='100%' height='100%' frameborder='0'></iframe>";
            $v_0.appendChild($v_2);
            return this.$X_3($v_2)
        }
    },
    getCurrentAreaUri: function() {
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        var $v_0 = null, $v_1;
        if (Mscrm.TreeNavControl.$0.id === "areaForm") {
            $v_0 = Mscrm.CrmUri.create(window.top.location.pathname);
            $v_0.clearQuery();
            $v_0.get_query()["solutiontype"] = window.APP_SOLUTION_TYPE
        } else {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0);
            $v_1 = this.$U_3($v_2);
            if (!IsNull($v_1)) {
                $v_0 = Mscrm.CrmUri.create($v_2.contentWindow.location.pathname);
                $v_0.clearQuery();
                var $v_3 = $v_0.get_path().toLowerCase();
                switch ($v_3) {
                case "/tools/systemcustomization/relationships/relationshiplist.aspx":
                    $v_0.get_query()["relationshipRole"] = Mscrm.CrmUri.create($v_2.contentWindow.location.search)
                        .get_query()["relationshipRole"];
                    break;
                default:
                    if ($v_3.startsWith("/webresources")) {
                        $v_0 = Mscrm.CrmUri.create("/tools/systemcustomization/configuration/webresources.aspx");
                        $v_0.clearQuery()
                    }
                    break
                }
                $v_0.get_query()["solutiontype"] = window.APP_SOLUTION_TYPE
            } else if (this.$1_3) {
                var $v_4 = this.$1_3.getAttribute("url");
                if (!IsNull($v_4)) $v_0 = Mscrm.CrmUri.create($v_4)
            }
        }
        return $v_0
    },
    $D_3: function() {
        for (var $v_0 = $get("tdAreas"), $v_1 = 0; $v_1 < $v_0.children.length; $v_1++) {
            var $v_2 = $v_0.children[$v_1];
            if ($v_2.style.visibility !== "hidden") {
                Mscrm.TreeNavControl.$0 = $v_2;
                return
            }
        }
    },
    $x_3: function($p0) {
        for (var $v_0 = $get("tdAreas"), $v_1 = 0; $v_1 < $v_0.children.length; $v_1++) {
            var $v_2 = $v_0.children[$v_1];
            if ($v_2.id === $p0) return $v_2
        }
        return null
    },
    $13_3: function($p0, $p1) {
        return $p0.href.toLowerCase().endsWith($p1.toString().toLowerCase()) &&
            $p1.get_path().startsWith("/") &&
            $p0.search.toLowerCase() === $p1.get_queryString().toLowerCase()
    },
    $r_3: function($p0) {
        var $v_0 = this.$1_3;
        if (IsNull(this.$1_3)) return;
        var $v_1 = $v_0.getAttribute("atype");
        if (IsNull($v_1) || $v_1 !== "link" && $v_1 !== "node") return;
        var $v_2 = this.$x_3($v_0.getAttribute("tabset")),
            $v_3 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0),
            $v_4 = $get("div_mainmenu"),
            $v_5 = $get("div_entitymenu"),
            $v_6 = $get("div_submenu");
        $v_5.style.visibility = "hidden";
        $v_4.style.visibility = "hidden";
        $v_6.style.visibility = "hidden";
        var $v_7 = Number.parseInvariant($v_0.getAttribute("type"));
        switch ($v_7) {
        case 9801:
            if (this.$m_3($v_3)) {
                var $v_8 = $v_3.contentWindow.document.getElementById("div_crmMenuBar");
                this.$s_3();
                $v_5.innerHTML = $v_8.innerHTML;
                $v_5.style.visibility = "visible";
                this.$p_3()
            } else $v_4.style.visibility = "visible";
            break;
        case 1030:
        case 9802:
        case 9805:
        case 1111:
        case 4102:
        case 4703:
        case 8840:
        case 9951:
        case 9988:
            $v_6.style.visibility = "visible";
            this.$19_3($v_0, $v_6);
            break;
        case 7100:
        case 7103:
            $v_4.style.visibility = "visible";
            this.$n_3($v_0, $v_4);
            return;
        case 4605:
        case 4602:
            $v_4.style.visibility = "visible";
            this.$n_3($v_0, $v_4);
            return;
        default:
            break
        }
    },
    $p_3: function() {
        this.$c_3(Microsoft.Crm.CommandBar.MenuBarControl, "crmEntityMenuBarmnuBar");
        this.$c_3(Microsoft.Crm.CommandBar.CommandJewelPopup, "mnucrmEntityMenuBarfile");
        this.$c_3(Microsoft.Crm.CommandBar.CommandMenuPopup, "mnucrmEntityMenuBarhelp")
    },
    $s_3: function() {
        this.$e_3("crmEntityMenuBarmnuBar");
        this.$e_3("mnucrmEntityMenuBarfile");
        this.$e_3("mnucrmEntityMenuBarhelp")
    },
    $c_3: function($p0, $p1) { Mscrm.CrmUIComponent.crmCreate($p0, null, null, null, $get($p1)) },
    $e_3: function($p0) {
        var $v_0 = $find($p0);
        if (!IsNull($v_0)) {
            $v_0.dispose();
            $v_0 = null
        }
    },
    $19_3: function($p0, $p1) {
        var $v_0 = $p0.getAttribute("atype");
        if (IsNull($v_0) || $v_0 !== "link" && $v_0 !== "node") return;
        var $v_1 = $p0.id, $v_2 = $v_1.split("_");
        if ($v_2.length >= 4 && $v_2[2] === "9801") {
            var $v_3 = $get(this.breadcrumbLargeIconImgId, $p1),
                $v_4 = String.format("{0}_{1}_{2}_{3}", $v_2[0], $v_2[1], $v_2[2], $v_2[3]);
            $v_3.src = $get($v_4).getAttribute("largeicon");
            var $v_5 = $get(this.form_title_spanId, $p1);
            XUI.Html.SetText($v_5.children[0], $p0.getAttribute("parentdisplayname"));
            var $v_6 = $get(this.leftNavBreadcrumbImgId, $p1);
            $v_6.src = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p0)).src;
            var $v_7 = $get(this.leftNavBreadcrumbTextId, $p1);
            $v_7.innerHTML = XUI.Html.GetText($p0)
        }
    },
    $n_3: function($p0, $p1) {
        var $v_0 = $p0.getAttribute("atype");
        if (IsNull($v_0) || $v_0 !== "link" && $v_0 !== "node") return;
        var $v_1 = $p0.id, $v_2 = $v_1.split("_");
        if ($v_2.length <= 3) {
            var $v_3 = $get(this.leftNavBreadcrumbImgId, $p1);
            if ($v_0 === "node")
                $v_3.src = XUI.Html.DomUtils.GetChildElementAt(XUI.Html.DomUtils.GetFirstChild($p0), 1).src;
            else $v_3.src = XUI.Html.DomUtils.GetChildElementAt(XUI.Html.DomUtils.GetFirstChild($p0), 0).src;
            var $v_4 = $get(this.leftNavBreadcrumbTextId, $p1);
            $v_4.innerHTML = XUI.Html.GetText($p0)
        }
    },
    $u_3: function($p0) {
        var $v_0 = Mscrm.CrmUri.create($p0.contentWindow.location.toString());
        $v_0.clearQuery();
        var $v_1 = $v_0.toString().toUpperCase();
        if ($v_1.indexOf("MANAGEENTITY.ASPX") > 0) {
            var $v_2 = $p0.contentWindow._bReadyState;
            if (IsNull($v_2) || !$v_2) return true;
            var $v_3 = $p0.contentWindow.isFormDirty();
            if ($v_3) {
                if (confirm(window.LOCID_FORMS_SAVE_CONFIRM_TITLE)) {
                    $p0.contentWindow._bSaving = true;
                    $v_0 = Mscrm.CrmUri.create("/_static/blank.htm");
                    $p0.src = $v_0.toString();
                    return true
                }
                return false
            }
        }
        return true
    },
    $1I_3: function() {
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        if (Mscrm.TreeNavControl.$0.id !== "areaForm")
            if (!IsNull(this.$1_3)) {
                var $v_0 = this.$1_3.getAttribute("tabset"), $v_1 = this.$1_3.getAttribute("url");
                if ($v_0 === Mscrm.TreeNavControl.$0.id) {
                    var $v_2 = Mscrm.CrmUri.create($v_1);
                    $v_2.clearQuery();
                    if ($v_2.get_path().toUpperCase().indexOf("MANAGEENTITY.ASPX") >= 0) {
                        !Array.contains(this.$8_3, this.$G_3) && Array.enqueue(this.$8_3, this.$G_3);
                        !Array.contains(this.$8_3, this.$F_3) && Array.enqueue(this.$8_3, this.$F_3);
                        return
                    }
                }
            }
        if (Mscrm.TreeNavControl.$0.id !== "areaForm") {
            var $v_3 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0);
            $clearHandlers($v_3);
            $addHandler($v_3, "load", this.$G_3);
            $addHandler($v_3, "load", this.$F_3);
            $addHandler($v_3, "load", this.$$d_$r_3)
        } else this.$r_3(null)
    },
    switchAreaMenuHandler: function(ev) {
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0);
        if (Mscrm.TreeNavControl.$0.id !== "areaForm" && !this.isSubmenuSelected()) {
            var $v_1 = $get("div_mainmenu"), $v_2 = $get("div_entitymenu");
            if (this.$m_3($v_0)) {
                var $v_3 = $v_0.contentWindow.document.getElementById("div_crmMenuBar");
                this.$s_3();
                $v_2.innerHTML = $v_3.innerHTML;
                this.$p_3();
                $v_2.style.visibility = "visible";
                $v_1.style.visibility = "hidden"
            } else {
                $v_2.style.visibility = "hidden";
                $v_1.style.visibility = "visible"
            }
        }
    },
    $m_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = this.$U_3($p0);
            if (!IsNull($v_0)) {
                var $v_1 = Mscrm.CrmUri.create($v_0);
                $v_1.clearQuery();
                if ($v_1.get_path().toUpperCase().indexOf("MANAGEENTITY.ASPX") >= 0) return true
            }
        }
        return false
    },
    isSubmenuSelected: function() {
        var $v_0 = this.$1_3, $v_1 = 0, $v_2 = false;
        if (!IsNull($v_0)) $v_1 = Number.parseInvariant($v_0.getAttribute("type"));
        switch ($v_1) {
        case 1030:
        case 9802:
        case 9805:
        case 1111:
        case 4102:
        case 4703:
            $v_2 = true;
            break
        }
        return $v_2
    },
    $X_3: function($p0) {
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        Mscrm.TreeNavControl.$0.style.visibility = "hidden";
        Mscrm.TreeNavControl.$0.style.zIndex = -1;
        $p0.style.visibility = "visible";
        $p0.style.zIndex = 0;
        Mscrm.TreeNavControl.$0 = $p0;
        if ($p0.id === "areaForm") {
            var $v_0 = $find("crmForm");
            $v_0.HandleResize()
        }
        return true
    },
    $1B_3: function() {
        if (this.$7_3.length > 0) {
            var $v_0 = this.$7_3[this.$7_3.length - 1], $v_1 = $get($v_0);
            !IsNull($v_1) && $v_1.tagName === "A" && this.selectElement($v_1)
        }
    },
    $o_3: function($p0) {
        if (this.get_disabled()) return;
        for (var $v_0 = this.get_element().getElementsByTagName("UL"), $v_1 = null, $v_2 = 0;
            $v_2 < $v_0.length;
            $v_2++)
            if ($v_0[$v_2].id === "ul_tree_" + this.treeNavComponentId) {
                $v_1 = $v_0[$v_2];
                break
            }
        if (!IsNull($v_1)) {
            var $v_3 = new RemoteCommand("Solution", "RefreshNavigationTree", null), $v_4 = $v_3.Execute(null);
            if ($v_4.Success) {
                var $v_5 = this.$j_3(), $v_6 = $v_5.scrollTop, $v_7 = $v_5.scrollLeft, $v_8 = this.$y_3($v_1);
                this.$g_3($v_1);
                $v_1.innerHTML = $v_4.ReturnValue;
                this.$f_3($v_1);
                this.$1J_3($v_1, $v_8);
                $v_5.scrollLeft = $v_7;
                $v_5.scrollTop = $v_6
            }
        }
        if (!IsNull(this.$1_3)) {
            var $v_9 = $get(this.$1_3.id);
            if (!IsNull($v_9)) {
                this.$1_3 = null;
                this.selectElement($v_9)
            }
        }
    },
    $y_3: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = {}, $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            switch ($v_3.getAttribute("atype")) {
            case "group":
            case "node":
                if ($v_3.getAttribute("expanded") === "true") $v_1[$v_3.id] = true;
                break
            }
        }
        return $v_1
    },
    $w_3: function($p0) {
        for (var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0), $v_1 = 0; $v_1 < $v_0.children.length; $v_1++) {
            var $v_2 = $v_0.children[$v_1];
            if ($v_2.tagName === "IMG" &&
                $v_2.getAttribute("atype") === "expand" &&
                $p0.getAttribute("expanded") !== "true") {
                var $v_3 = XUI.Html.DomUtils.GetNextSibling($p0);
                $p0.setAttribute("expanded", "true");
                $v_2.src = this.nodeCollapseIMGPath;
                $v_2.title = this.labelExpanded;
                $v_2.alt = this.labelExpanded;
                $v_3.style.display = "block";
                return
            }
        }
    },
    $1J_3: function($p0, $p1) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            $p1[$v_2.id] && this.$w_3($v_2)
        }
    },
    $B_3: function($p0) {
        IsNull(Mscrm.TreeNavControl.$0) && this.$D_3();
        if (Mscrm.TreeNavControl.$0 && Mscrm.TreeNavControl.$0.id !== "areaForm") {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(Mscrm.TreeNavControl.$0), $v_1 = this.$U_3($v_0);
            if (IsNull($v_1)) return false;
            var $v_2 = Mscrm.CrmUri.create($v_1);
            $v_2.clearQuery();
            if ($v_2.get_path().toUpperCase().indexOf("MANAGEENTITY.ASPX") >= 0) {
                $v_0.contentWindow[$p0]();
                return true
            }
        }
        return false
    },
    $U_3: function($p0) {
        try {
            return $p0.contentWindow.location.toString()
        } catch ($$e_1) {
            return null
        }
    },
    $z_3: function() {
        var $v_0 = null, $$t_2 = this;
        XUI.Html.DomUtils.ForEachChild(this.get_element(),
            function($p1_0) {
                if ($p1_0.className === "treenav_header") {
                    $v_0 = $p1_0;
                    return true
                }
                return false
            });
        return $v_0
    }
};
Mscrm.SolutionSplitterControl = function(element) {
    this.$$d_$1C_3 = Function.createDelegate(this, this.$1C_3);
    this.$$d_$1F_3 = Function.createDelegate(this, this.$1F_3);
    this.$$d_$1E_3 = Function.createDelegate(this, this.$1E_3);
    this.$$d_$1D_3 = Function.createDelegate(this, this.$1D_3);
    Mscrm.SolutionSplitterControl.initializeBase(this, [element]);
    this.get_element().innerHTML = Mscrm.SolutionSplitterControl.get_$q();
    this.$Y_3 = this.$$d_$1D_3;
    this.$Z_3 = this.$$d_$1E_3;
    this.$a_3 = this.$$d_$1F_3;
    this.$P_3 = this.$$d_$1C_3;
    this.$Q_3 = this.get_element().getElementsByTagName("A")[0];
    this.$b_3 = this.get_element().getElementsByTagName("TABLE")[0];
    $addHandler(this.$Q_3, "mousedown", this.$Y_3);
    $addHandler(this.$Q_3, "dblclick", this.$P_3);
    this.$2_3 = document.createElement("div");
    this.$2_3.style.position = "absolute";
    this.$2_3.style.top = "0px";
    this.$2_3.style.bottom = "0px";
    this.$2_3.style.left = "0px";
    this.$2_3.style.right = "0px";
    this.$2_3.style.zIndex = 2e3;
    this.$2_3.style.display = "none";
    XUI.Html.SetOpacity(this.$2_3, 0);
    document.body.appendChild(this.$2_3);
    $addHandler(this.$2_3, "mouseup", this.$a_3);
    $addHandler(this.$2_3, "mousemove", this.$Z_3);
    $addHandler(this.$2_3, "dblclick", this.$P_3);
    this.$4_3 = document.createElement("DIV");
    this.$4_3.className = "ms-crm-Splitter ms-crm-SplitterMotion";
    this.$4_3.innerHTML = Mscrm.SolutionSplitterControl.get_$q();
    document.body.appendChild(this.$4_3)
};
Mscrm.SolutionSplitterControl.get_$q = function() {
    var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/verticalgripper.gif"));
    return String
        .format("<a class='ms-crm-Splitter'><table class='stdTable ms-crm-Splitter' cellspacing='0'><tr class='ms-crm-Splitter'><td><img valign='middle' class='ms-crm-Splitter {0}' src='{1}' alt=''/></td></tr></table></a>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source))
};
Mscrm.SolutionSplitterControl.prototype = {
    size: 3,
    $H_3: 0,
    $I_3: 0,
    $W_3: 0,
    $2_3: null,
    $4_3: null,
    $Q_3: null,
    $b_3: null,
    $Y_3: null,
    $a_3: null,
    $Z_3: null,
    $P_3: null,
    $V_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$V_3 = $find(Mscrm.LayoutControl.layoutControlId)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 14:
            this.handleWindowResize(parameters);
            break
        }
        return null
    },
    handleWindowResize: function(parameters) {
        parameters = parameters[this.get_id()];
        var $v_0 = parameters["height"], $v_1 = parameters["left"], $v_2 = parameters["top"];
        this.$I_3 = parameters["minLeft"];
        this.$W_3 = parameters["maxLeft"];
        if (!IsNull(parameters["defaultXPos"])) this.$H_3 = parameters["defaultXPos"];
        this.set_left($v_1);
        if ($v_0 < 0) $v_0 = 1;
        this.$b_3.style.height = $v_0.toString() + "px";
        this.set_height($v_0);
        this.set_top($v_2)
    },
    $1C_3: function($p0) {
        if (parseInt(this.$4_3.style.left) !== this.$H_3 && this.$H_3 > 0) {
            this.set_left(this.$H_3);
            this.$V_3.handleEvent(20, null, null)
        }
    },
    $1F_3: function($p0) {
        !IsNull(this.$2_3.releaseCapture) && this.$2_3.releaseCapture();
        this.set_left(parseInt(this.$4_3.style.left));
        this.$2_3.style.display = "none";
        this.$4_3.style.display = "none";
        this.$V_3.handleEvent(20, null, null)
    },
    $1E_3: function($p0) {
        var $v_0 = $p0.clientX;
        if ($p0.clientX < this.$I_3 || $p0.clientX > this.$W_3) $v_0 = $p0.clientX < this.$I_3 ? this.$I_3 : this.$W_3;
        this.$4_3.style.left = $v_0.toString() + "px";
        $p0.preventDefault()
    },
    $1D_3: function($p0) {
        !IsNull(this.$2_3.setCapture) && this.$2_3.setCapture();
        this.$2_3.style.display = "inline";
        this.$4_3.style.left = this.get_element().offsetLeft.toString() + "px";
        this.$4_3.style.top = this.get_element().offsetTop.toString() + "px";
        this.$4_3.style.height = this.get_element().offsetHeight.toString() + "px";
        this.$4_3.style.display = "inline";
        this.$4_3.focus();
        $p0.preventDefault()
    }
};
Mscrm.LayoutControl = function(element) {
    this.$$d_$d_3 = Function.createDelegate(this, this.$d_3);
    Mscrm.LayoutControl.initializeBase(this, [element])
};
Mscrm.LayoutControl.prototype = {
    $6_3: null,
    $A_3: null,
    $9_3: null,
    $C_3: null,
    $E_3: null,
    $3_3: null,
    $R_3: null,
    $O_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$O_3 = this.$$d_$d_3;
        $addHandler(window, "resize", this.$O_3);
        this.$6_3 = {};
        this.$A_3 = {};
        this.$9_3 = {};
        this.$C_3 = {};
        this.$C_3[Mscrm.SolutionSplitterControl.splitterId] = this.$6_3;
        this.$C_3[Mscrm.TreeNavControl.treeNavControlId] = this.$A_3;
        this.$C_3[Mscrm.SolutionContentPanel.contentPanelId] = this.$9_3
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(window, "resize", this.$O_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $h_3: function() {
        if (!this.$E_3) this.$E_3 = $find(Mscrm.TreeNavControl.treeNavControlId);
        if (!this.$3_3) this.$3_3 = $find(Mscrm.SolutionSplitterControl.splitterId);
        if (!this.$R_3) this.$R_3 = $find(Mscrm.SolutionContentPanel.contentPanelId)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        this.$h_3();
        switch (eventCode) {
        case 9:
            this.$11_3();
            break;
        case 20:
            this.$12_3();
            break;
        case 14:
            this.$l_3(parameters);
            break;
        default:
            break
        }
        return null
    },
    $11_3: function() {
        if (!Mscrm.LayoutControl.$S) {
            this.$d_3(null);
            Mscrm.LayoutControl.$S = true
        }
    },
    $l_3: function($p0) {
        this.$E_3.handleEvent(14, $p0, null);
        this.$3_3.handleEvent(14, $p0, null);
        this.$R_3.handleEvent(14, $p0, null)
    },
    $d_3: function($p0) {
        var $v_0 = this.$k_3(true);
        if (!$v_0) return;
        $v_0["sizeChanged"] = true;
        $v_0["firstTimeLoaded"] = Mscrm.LayoutControl.$S;
        this.$l_3($v_0)
    },
    $k_3: function($p0) {
        this.$h_3();
        var $v_0 = 98, $v_1 = 27, $v_2 = $get("warningFields");
        if (!IsNull($v_2) && $v_2.style.display === "block") $v_0 += $v_2.offsetHeight;
        var $v_3 = document.body.offsetHeight, $v_4 = document.body.offsetWidth;
        this.$C_3["bodyHeight"] = $v_3;
        this.$C_3["bodyWidth"] = $v_4;
        var $v_5 = $v_3 - $v_0 - $v_1;
        if ($v_5 < 0) return null;
        var $v_6 = 0;
        this.$6_3["defaultXPos"] = window.LOCID_UI_DIR === "RTL"
            ? $v_4 - this.$E_3.get_width() - this.$3_3.get_width()
            : this.$E_3.get_width();
        this.$6_3["height"] = $v_5;
        this.$6_3["width"] = this.$3_3.get_width();
        this.$6_3["top"] = $v_0;
        this.$6_3["minLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_4 / 2 - this.$3_3.get_width() : 40;
        this.$6_3["maxLeft"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - 40 - this.$3_3.get_width() : $v_4 / 2;
        if (!$p0) {
            $v_6 = window.LOCID_UI_DIR === "RTL"
                ? $v_4 - this.$3_3.get_left() - this.$3_3.get_width()
                : this.$3_3.get_left();
            this.$6_3["left"] = this.$3_3.get_left()
        } else {
            $v_6 = this.$E_3.get_width();
            this.$6_3["left"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - $v_6 - this.$3_3.get_width() : $v_6
        }
        if ($v_6 > $v_4 / 2) {
            $v_6 = $v_4 / 2;
            this.$6_3["left"] = window.LOCID_UI_DIR === "RTL" ? $v_4 - $v_6 - this.$3_3.get_width() : $v_6
        }
        this.$A_3["top"] = 0;
        this.$A_3["height"] = $v_5;
        this.$9_3["top"] = $v_0;
        this.$9_3["height"] = $v_5;
        if (window.LOCID_UI_DIR === "LTR") {
            this.$A_3["left"] = 0;
            this.$A_3["width"] = $v_6 - 3;
            this.$9_3["left"] = $v_6 + this.$3_3.get_width();
            this.$9_3["width"] = $v_4 - $v_6 - this.$3_3.get_width() - 10
        } else {
            this.$A_3["left"] = $v_4 - $v_6;
            this.$A_3["width"] = $v_6 - 3;
            this.$9_3["left"] = 10;
            this.$9_3["width"] = $v_4 - $v_6 - this.$3_3.get_width() - 10
        }
        return this.$C_3
    },
    $12_3: function() {
        var $v_0 = this.$k_3(false);
        $v_0["sizeChanged"] = false;
        this.handleEvent(14, $v_0, null)
    }
};
Mscrm.SolutionContentPanel = function(element) { Mscrm.SolutionContentPanel.initializeBase(this, [element]) };
Mscrm.SolutionContentPanel.prototype = {
    initialize: function() { Mscrm.CrmUIControl.prototype.initialize.call(this) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 14:
            this.$d_3(parameters);
            break
        }
        return null
    },
    $d_3: function($p0) {
        $p0 = $p0[this.get_id()];
        var $v_0 = $p0["top"];
        this.get_element().offsetTop !== $v_0 && this.set_top($v_0);
        var $v_1 = $p0["left"];
        this.get_element().offsetLeft !== $v_1 && this.set_left($v_1);
        var $v_2 = $p0["width"];
        this.get_element().offsetWidth !== $v_2 && this.set_width($v_2 > 0 ? $v_2 : 0);
        var $v_3 = $p0["height"];
        this.get_element().offsetHeight !== $v_3 && this.set_height($v_3 > 0 ? $v_3 : 0);
        if (!isNullOrEmptyString(this.get_element().className)) this.get_element().className = ""
    }
};
Mscrm.TreeNavControl.registerClass("Mscrm.TreeNavControl", Mscrm.CrmUIControl);
Mscrm.SolutionSplitterControl.registerClass("Mscrm.SolutionSplitterControl", Mscrm.CrmUIControl);
Mscrm.LayoutControl.registerClass("Mscrm.LayoutControl", Mscrm.CrmUIControl);
Mscrm.SolutionContentPanel.registerClass("Mscrm.SolutionContentPanel", Mscrm.CrmUIControl);
Mscrm.TreeNavControl.$0 = null;
Mscrm.TreeNavControl.treeNavControlId = "treeNavControl";
Mscrm.SolutionSplitterControl.splitterId = "solutionSplitter";
Mscrm.LayoutControl.$S = false;
Mscrm.LayoutControl.layoutControlId = "layoutControl";
Mscrm.SolutionContentPanel.contentPanelId = "tdAreas"