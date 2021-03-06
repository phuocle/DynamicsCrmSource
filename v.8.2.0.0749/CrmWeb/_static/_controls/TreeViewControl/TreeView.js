Type.registerNamespace("Mscrm");
Mscrm.CrmFolderView = function(element) {
    this.$$d_$y_3 = Function.createDelegate(this, this.$y_3);
    Mscrm.CrmFolderView.initializeBase(this, [element])
};
Mscrm.CrmFolderView.prototype = {
    $R_3: false,
    $1_3: null,
    $9_3: null,
    $E_3: null,
    $S_3: 0,
    $T_3: false,
    get_HeroNodeId: function() { return this.$1_3 },
    set_HeroNodeId: function(value) {
        this.$1_3 = value;
        return value
    },
    get_crmHierarchyDataManager: function() { return this.$9_3 },
    set_crmHierarchyDataManager: function(value) {
        this.$9_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1_3 = this.$1_3;
        this.$S_3 = this.$9_3.get_TargetEntityType();
        this.$e_3(true)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $P_CRM(this.get_element()).unbind("refreshheronode");
        this.$d_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    SetParameter: function(name, value) {},
    GetParameter: function(name) { return "" },
    get_disabled: function() { return this.$R_3 },
    set_disabled: function(value) {
        this.$R_3 = value;
        return value
    },
    get_entityTypeCode: function() { return parseInt(this.GetParameter("otc"), 10) },
    get_entityTypeName: function() { return this.GetParameter("otn") },
    get_ribbonContextType: function() {
        var $v_0 = this.GetParameter("ribbonContext");
        if (isNullOrEmptyString($v_0)) $v_0 = "HomePageGrid";
        return $v_0
    },
    get_ribbonRelationshipType: function() {
        var $v_0 = this.GetParameter("relationshipType");
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = parseInt($v_0, 10);
            if (!isNaN($v_1)) return $v_1
        }
        return 0
    },
    get_selectedRecordCount: function() { return 0 },
    get_recordCount: function() { return 4 },
    get_allRecordIds: function() { return new Array(4) },
    get_selectedIds: function() { return new Array(2) },
    get_unselectedIds: function() { return new Array(2) },
    get_allRecords: function() { return new Array(4) },
    get_selectedRecords: function() { return new Array(2) },
    get_unselectedRecords: function() { return new Array(2) },
    $e_3: function($p0) {
        var $v_0 = $P_CRM(this.get_element());
        $v_0.data("CrmFolderViewGenerationStartTime", Date.now());
        this.$T_3 = window.LOCID_UI_DIR.toLowerCase() === "rtl";
        var $v_1 = new Mscrm.TreeViewOptions(this.get_id(), this.$1_3, this.$T_3, this.$S_3);
        $v_1.$G_0 = this.$9_3.get_HierarchyLevel();
        $v_1.$N_0 = this.$9_3.get_PageSize();
        $v_1.$K_0 = this.$9_3.get_hierarchyDataManager();
        this.$E_3 = Mscrm.TreeView.getInstance($v_1);
        this.$E_3.$C_0 = !$p0;
        this.$l_3();
        $v_0.data("CrmFolderViewGenerationEndTime", Date.now())
    },
    $l_3: function() { $P_CRM(this.get_element()).bind("refreshheronode", this.$$d_$y_3) },
    $y_3: function($p0) {
        var $v_0 = arguments[1].toString();
        this.refresh($v_0, true)
    },
    $z_3: function($p0) { this.$E_3.refreshHeroNode($p0) },
    refresh: function(selectedNodeId, updateHeader) {
        if (isNullOrEmptyString(selectedNodeId)) return;
        if (-1 === this.get_element().innerHTML.toLowerCase().indexOf(selectedNodeId.toLowerCase())) {
            this.$1_3 = selectedNodeId;
            this.$i_3(updateHeader);
            this.$d_3();
            this.$e_3(false)
        } else if (this.$1_3 !== selectedNodeId) {
            this.$1_3 = selectedNodeId;
            this.$i_3(updateHeader);
            this.$z_3(this.$1_3)
        }
        this.raiseEvent(106, null)
    },
    $i_3: function($p0) {
        if (!$p0) return;
        var $v_0 = this.$9_3.get_hierarchyDataManager().getData(this.$1_3.toUpperCase()), $v_1 = {};
        $v_1["data"] = $v_0.get_attributes();
        this.raiseEvent(104, $v_1)
    },
    $d_3: function() {
        if (IsNull(this.$E_3)) return;
        this.$E_3.dispose();
        this.$E_3 = null
    }
};
Mscrm.TreeView = function($p0) {
    this.$$d_$h_0 = Function.createDelegate(this, this.$h_0);
    this.$$d_$f_0 = Function.createDelegate(this, this.$f_0);
    this.$$d_$w_0 = Function.createDelegate(this, this.$w_0);
    this.$$d_$x_0 = Function.createDelegate(this, this.$x_0);
    this.$$d_$u_0 = Function.createDelegate(this, this.$u_0);
    this.$$d_$v_0 = Function.createDelegate(this, this.$v_0);
    this.$I_0 = $p0;
    this.$5_0 = new Mscrm.TreeViewDataProvider($p0.$K_0);
    this.$1_0 = $p0.$M_0;
    this.$8_0 = $p0.$F_0 + "_Controls";
    this.$7_0 = $p0.$F_0 + "_View";
    this.$P_0 = this.$8_0 + "_Up";
    this.$L_0 = this.$8_0 + "_Home";
    this.$0_0 = $P_CRM("#" + $p0.$F_0);
    this.$0_0.append("<div id = " + this.$8_0 + ' class = "FolderViewUpAndHome" ></div>');
    this.$0_0.append("<div id = " + this.$7_0 + " ></div>");
    this.$C_0 = false
};
Mscrm.TreeView.getInstance = function(options) {
    var $v_0 = options.get_config(), $v_1 = new Mscrm.TreeView(options);
    $v_0.json_data.data = function(obj, cb) { $v_1.GetData(obj, this, cb) };
    $v_0.hotkeys["return"] = function(e) {
        var node = this._get_node(this.data.ui.hovered);
        $v_1.EnterKeyFunction(node)
    };
    $v_1.$2_0 = $P_CRM("#" + $v_1.$7_0);
    $v_1.$2_0.jstree($v_0);
    $v_1.$2_0.bind("select_node.jstree", $v_1.$$d_$x_0);
    $v_1.$2_0.bind("loaded.jstree", $v_1.$$d_$w_0);
    return $v_1
};
Mscrm.TreeView.prototype = {
    $5_0: null,
    $2_0: null,
    $4_0: null,
    $I_0: null,
    $0_0: null,
    $1_0: null,
    $8_0: null,
    $7_0: null,
    $P_0: null,
    $L_0: null,
    $C_0: false,
    $H_0: true,
    get_activateOverLayDivOnFullTreeLoad: function() { return this.$C_0 },
    set_activateOverLayDivOnFullTreeLoad: function(value) {
        this.$C_0 = value;
        return value
    },
    get_viewDiv: function() { return this.$7_0 },
    set_viewDiv: function(value) {
        this.$7_0 = value;
        return value
    },
    $w_0: function($p0, $p1) {
        setPerfMarkerTimestamp("TreeViewGenerationEndTime");
        this.$4_0 = $P_CRM.jstree._reference("#" + this.$7_0);
        var $v_0 = this.$B_0();
        if (this.$5_0.isParentAvailable($v_0.attr("id"))) this.$H_0 = false;
        this.$p_0();
        this.$m_0();
        var $v_1 = $P_CRM("#" + this.$1_0, this.$0_0);
        this.$g_0($v_1);
        Mscrm.InternalUtilities.Utilities.isHighContrastEnabled() && this.$0_0.addClass("high-contrast");
        this.$Y_0($get(this.$7_0));
        this.$2_0.bind("open_node.jstree", this.$$d_$v_0);
        this.$2_0.bind("close_node.jstree", this.$$d_$u_0);
        setPerfMarkerTimestamp("TreeViewCompleteRenderEndTime")
    },
    $m_0: function() {
        var $$t_4 = this;
        $P_CRM(".jstree-open > a", this.$0_0).each(function($p1_0, $p1_1) { $$t_4.$V_0($p1_1) });
        var $$t_5 = this;
        $P_CRM(".jstree-closed > a", this.$0_0).each(function($p1_0, $p1_1) { $$t_5.$U_0($p1_1) })
    },
    $v_0: function($p0, $p1) {
        var $v_0 = $p1.rslt.obj.children("a").first();
        this.$V_0($v_0[0])
    },
    $V_0: function($p0) {
        var $v_0 = $p0.parentNode.title;
        $p0.setAttribute("aria-label",
            String.format(window.FOLDERVIEW_COLLAPSE_ANNOUNCEMENT, $v_0, Xrm.Internal.getEntityName(this.$I_0.$D_0)))
    },
    $u_0: function($p0, $p1) {
        var $v_0 = $p1.rslt.obj.children("a").first();
        this.$U_0($v_0[0])
    },
    $U_0: function($p0) {
        var $v_0 = $p0.parentNode.title;
        $p0.setAttribute("aria-label",
            String.format(window.FOLDERVIEW_EXPAND_ANNOUNCEMENT, $v_0, Xrm.Internal.getEntityName(this.$I_0.$D_0)))
    },
    $q_0: function($p0) {
        $p0.unbind("focus");
        var $v_0 = $p0.find("a.jstree-popout-icon");
        $v_0.unbind("click");
        $p0.removeClass("heroNode");
        $v_0.remove();
        $p0.children()[1].tabIndex = -1
    },
    $g_0: function($p0) {
        if ($p0) {
            $p0.addClass("heroNode");
            var $v_0 = document.createElement("a");
            $v_0.tabIndex = 0;
            $v_0.setAttribute("href", "#");
            $v_0.className = "jstree-popout-icon";
            var $v_1 = $P_CRM(".heroNode > a");
            $v_1.get(0).tabIndex = 0;
            if ($v_1.hasClass("jstree-open")) this.$U_0($p0[0]);
            else $v_1.hasClass("jstree-closed") && this.$V_0($p0[0]);
            $P_CRM($v_0).insertAfter($v_1);
            var $$t_9 = this;
            $v_1.focus(function($p1_0) { $$t_9.$4_0.hover_node($p0) });
            var $v_2 = document.createElement("img");
            $v_2.title = window.FOLDERVIEW_DRILLDOWN_ALT_TEXT_AND_TITLE;
            $v_2.setAttribute("alt", window.FOLDERVIEW_DRILLDOWN_ALT_TEXT_AND_TITLE);
            var $v_3;
            if (Mscrm.InternalUtilities.Utilities
                .isHighContrastEnabled())
                $v_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create("/_imgs/TreeViewControl/drill_down_for_tree_control_HC.png"));
            else
                $v_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create("/_imgs/TreeViewControl/drill_down_for_tree_control.png"));
            $v_2.setAttribute("src", $v_3.source);
            $v_2.className = $v_3.cssClass;
            $v_2.innerHTML = "&#160;";
            $P_CRM($v_2).appendTo($v_0);
            var $$t_A = this;
            $P_CRM("a.jstree-popout-icon").click(function($p1_0) {
                $$t_A.$t_0($p1_0);
                $p1_0.preventDefault();
                $p1_0.stopPropagation()
            });
            if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
                var $$t_B = this;
                $P_CRM($v_0).bind("mouseenter",
                    function($p1_0) {
                        $v_3 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri
                                .create("/_imgs/TreeViewControl/drill_down_for_tree_control_hover.png"));
                        $v_2.setAttribute("src", $v_3.source);
                        $v_2.className = $v_3.cssClass;
                        $p1_0.stopPropagation()
                    });
                var $$t_C = this;
                $P_CRM($v_0).bind("mouseleave",
                    function($p1_0) {
                        $v_3 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri
                                .create("/_imgs/TreeViewControl/drill_down_for_tree_control.png"));
                        $v_2.setAttribute("src", $v_3.source);
                        $v_2.className = $v_3.cssClass;
                        $p1_0.stopPropagation()
                    })
            }
        }
    },
    $x_0: function($p0, $p1) {
        var $v_0 = $p1.rslt.obj.attr("id");
        if ($v_0.endsWith("UpShowMore") || $v_0.endsWith("DownShowMore")) {
            this.$0_0.trigger("showDataLoadingOverlay");
            if ($v_0.endsWith("UpShowMore")) {
                var $v_1 = this.$5_0.getSibling($v_0.substring(0, $v_0.lastIndexOf("_UpShowMore")), true, -1),
                    $$t_9 = this,
                    $$t_A = this;
                $v_1.then(function($p1_0) { $$t_9.$c_0($v_0, $p1_0, true) },
                    function($p1_0) { $$t_A.$0_0.trigger("hideDataLoadingOverlay") })
            } else {
                var $v_2 = this.$5_0.getSibling($v_0.substring(0, $v_0.lastIndexOf("_DownShowMore")), false, -1),
                    $$t_B = this,
                    $$t_C = this;
                $v_2.then(function($p1_0) { $$t_B.$c_0($v_0, $p1_0, false) },
                    function($p1_0) { $$t_C.$0_0.trigger("hideDataLoadingOverlay") })
            }
        } else $v_0 !== this.$1_0 && this.$2_0.trigger("refreshheronode", [$v_0.toString()])
    },
    $c_0: function($p0, $p1, $p2) {
        if (!$p1) return;
        var $v_0;
        $v_0 = $P_CRM("#" + $p0, this.$0_0);
        if (IsNull($v_0[0])) return;
        var $v_1 = this.$4_0._get_parent($v_0);
        this.$4_0.deselect_node($v_0);
        this.$4_0.delete_node($v_0);
        if ($p2) this.$J_0($v_1, $p1, "first");
        else this.$J_0($v_1, $p1, "last");
        this.$4_0.clean_node($v_1);
        this.$4_0.hover_node($P_CRM("#" + this.$1_0, this.$0_0));
        this.$0_0.trigger("hideDataLoadingOverlay")
    },
    refreshHeroNode: function(selectedNodeId) {
        var $v_0 = $P_CRM("#" + this.$1_0, this.$0_0);
        !IsNull($v_0) && !IsNull($v_0.get(0)) && this.$q_0($v_0);
        this.$1_0 = selectedNodeId;
        $v_0 = $P_CRM("#" + this.$1_0, this.$0_0);
        this.$g_0($v_0)
    },
    $p_0: function() {
        var $v_0 = document.createElement("div");
        $v_0.title = window.FOLDERVIEW_HOME_ALT_TEXT_AND_TITLE;
        $v_0.tabIndex = -1;
        $v_0.id = this.$L_0;
        $v_0.className = "treeHome";
        $P_CRM($v_0).appendTo($P_CRM("#" + this.$8_0, this.$0_0));
        var $v_1 = document.createElement("img");
        $v_1.tabIndex = 0;
        $v_1.setAttribute("alt", window.FOLDERVIEW_HOME_ALT_TEXT_AND_TITLE);
        $P_CRM($v_1).appendTo($v_0);
        var $v_2;
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/tree_home_HC.png"));
        else $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/tree_home.png"));
        $v_1.setAttribute("src", $v_2.source);
        $v_1.className = $v_2.cssClass;
        this.$n_0();
        var $v_3 = document.createElement("div");
        $v_3.title = window.FOLDERVIEW_UP_ALT_TEXT_AND_TITLE;
        $v_3.tabIndex = -1;
        $v_3.id = this.$P_0;
        $v_3.className = "treeUp";
        $P_CRM($v_3).appendTo($P_CRM("#" + this.$8_0, this.$0_0));
        if (this.$H_0) $v_3.className += " disabled";
        else {
            this.$k_0($v_3);
            this.$o_0()
        }
    },
    $n_0: function() {
        var $v_0 = $P_CRM("#" + this.$L_0 + " img", this.$0_0);
        $v_0.click(this.$$d_$f_0);
        var $$t_8 = this;
        $v_0.bind("keydown",
            function($p1_0) {
                $p1_0.which === 13 && $$t_8.$f_0($p1_0);
                $p1_0.stopPropagation()
            });
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            var $$t_9 = this;
            $v_0.bind("mouseenter",
                function($p1_0) {
                    var $v_1 = $v_0.get(0),
                        $v_2 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/tree_home_hover.png"));
                    $v_1.setAttribute("src", $v_2.source);
                    $v_1.className = $v_2.cssClass;
                    $p1_0.stopPropagation()
                });
            var $$t_A = this;
            $v_0.bind("mouseleave",
                function($p1_0) {
                    var $v_3 = $v_0.get(0),
                        $v_4 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/tree_home.png"));
                    $v_3.setAttribute("src", $v_4.source);
                    $v_3.className = $v_4.cssClass;
                    $p1_0.stopPropagation()
                })
        }
    },
    $o_0: function() {
        var $v_0 = $P_CRM("#" + this.$P_0 + " img", this.$0_0);
        $v_0.click(this.$$d_$h_0);
        var $$t_8 = this;
        $v_0.bind("keydown",
            function($p1_0) {
                $p1_0.which === 13 && $$t_8.$h_0($p1_0);
                $p1_0.stopPropagation()
            });
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            var $$t_9 = this;
            $v_0.bind("mouseenter",
                function($p1_0) {
                    var $v_1 = $v_0.get(0),
                        $v_2 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/up_arrow_hover.png"));
                    $v_1.setAttribute("src", $v_2.source);
                    $v_1.className = $v_2.cssClass;
                    $p1_0.stopPropagation()
                });
            var $$t_A = this;
            $v_0.bind("mouseleave",
                function($p1_0) {
                    var $v_3 = $v_0.get(0),
                        $v_4 = Mscrm.ImageStrip
                            .getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/up_arrow.png"));
                    $v_3.setAttribute("src", $v_4.source);
                    $v_3.className = $v_4.cssClass;
                    $p1_0.stopPropagation()
                })
        }
    },
    $h_0: function($p0) {
        var $v_0 = this.$B_0();
        this.$0_0.trigger("showDataLoadingOverlay");
        var $v_1 = this.$5_0.getParentAndSiblings($v_0.attr("id"), -1), $$t_5 = this, $$t_6 = this;
        $v_1.then(function($p1_0) { $$t_5.$10_0($p1_0) },
            function($p1_0) { $$t_6.$0_0.trigger("hideDataLoadingOverlay") });
        return
    },
    $10_0: function($p0) {
        if (!$p0) return;
        var $v_0 = this.$B_0();
        this.$J_0(null, $p0[$p0.length - 1], "first");
        var $v_1 = $P_CRM("DIV.jstree > UL > LI").first(), $v_2 = document.createElement("ul");
        $P_CRM($v_2).appendTo($v_1);
        $v_0.appendTo($v_2);
        for (var $v_3 = $v_0.attr("id"), $v_4 = true, $v_5 = 0; $v_5 < $p0.length - 1; $v_5++) {
            var $v_6 = $p0[$v_5].attr.id;
            if ($v_6 === $v_3) {
                $v_4 = false;
                continue
            }
            if ($v_4) this.$J_0($v_0, $p0[$v_5], "before");
            else this.$J_0($v_1, $p0[$v_5], "last")
        }
        this.$4_0.clean_node($v_1);
        !this.$5_0.isParentAvailable($v_1.attr("id")) && this.$W_0();
        this.$4_0.hover_node($P_CRM("#" + this.$1_0, this.$0_0));
        this.$0_0.trigger("hideDataLoadingOverlay")
    },
    $f_0: function($p0) {
        var $v_0 = this.$B_0();
        if (this.$H_0) {
            this.$2_0.trigger("refreshheronode", [$v_0.attr("id")]);
            return
        }
        this.$0_0.trigger("showDataLoadingOverlay");
        var $v_1 = this.$5_0.getRootTree($v_0.attr("id")), $$t_5 = this, $$t_6 = this;
        $v_1.then(function($p1_0) { $$t_5.$r_0($p1_0) },
            function($p1_0) { $$t_6.$0_0.trigger("hideDataLoadingOverlay") });
        this.$W_0()
    },
    $r_0: function($p0) {
        if (!$p0) return;
        var $v_0 = this.$B_0();
        this.$J_0(null, $p0, "first");
        this.$4_0.delete_node($v_0);
        this.$4_0.clean_node(this.$B_0());
        this.$2_0.trigger("refreshheronode", [this.$B_0().attr("id")]);
        this.$0_0.trigger("hideDataLoadingOverlay")
    },
    $W_0: function() {
        var $v_0 = $P_CRM("#" + this.$P_0 + " img", this.$0_0);
        $v_0.unbind("click");
        $v_0.unbind("keydown");
        $v_0.unbind("mouseenter");
        $v_0.unbind("mouseleave");
        $v_0.get(0).tabIndex = -1;
        $v_0.parent().addClass("disabled");
        this.$H_0 = true;
        $v_0.parent().empty()
    },
    $k_0: function($p0) {
        var $v_0 = document.createElement("img");
        $v_0.tabIndex = 0;
        $v_0.setAttribute("alt", window.FOLDERVIEW_UP_ALT_TEXT_AND_TITLE);
        $P_CRM($v_0).appendTo($p0);
        var $v_1;
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/up_arrow_HC.png"));
        else $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/TreeViewControl/up_arrow.png"));
        $v_0.setAttribute("src", $v_1.source);
        $v_0.className = $v_1.cssClass
    },
    $B_0: function() { return $P_CRM("#" + this.$7_0 + "> ul > li") },
    $J_0: function($p0, $p1, $p2) {
        var $v_0 = this.$4_0._parse_json($p1), $v_1 = $P_CRM($v_0).children();
        this.$Y_0($P_CRM($v_0).get(0));
        if (!$p0) {
            this.$B_0().parent().prepend($v_1);
            return
        }
        if ($p2 === "last") $p0.children().last().append($v_1);
        else if ($p2 === "before") $p0.before($v_1);
        else $p0.children().last().prepend($v_1)
    },
    EnterKeyFunction: function(node) {
        this.$4_0.deselect_all();
        this.$4_0.select_node(node)
    },
    $t_0: function($p0) {
        var $v_0 = $p0.currentTarget.parentNode.getAttribute("id"), $v_1 = "id=" + $v_0 + "&skipFormCache=true";
        openObj(this.$I_0.$D_0, null, $v_1, null, 0, null)
    },
    $Y_0: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("a"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2.parentNode.id === this.$1_0) $v_2.setAttribute("tabindex", 0);
            else $v_2.setAttribute("tabindex", -1)
        }
    },
    GetData: function(node, jsTree, callback) {
        this.$2_0.data("onExpandIconClickStartTime", Date.now());
        if (node.toString() === "-1") {
            setPerfMarkerTimestamp("TreeViewGenerationStartTime");
            if (this.$C_0) {
                this.$0_0.trigger("showDataLoadingOverlay");
                this.$C_0 = false
            }
            var $v_0 = this.$5_0.getSubtree(this.$1_0, this.$I_0.$G_0), $$t_9 = this, $$t_A = this;
            $v_0.then(function($p1_0) {
                    callback.call(jsTree, $p1_0);
                    $$t_9.$0_0.trigger("hideDataLoadingOverlay")
                },
                function($p1_0) { $$t_A.$0_0.trigger("hideDataLoadingOverlay") })
        } else {
            this.$0_0.trigger("showDataLoadingOverlay");
            setPerfMarkerTimestamp("onExpandIconClickStartTime");
            var $v_1 = this.$5_0.getChildren(node.attr("id"), -1), $$t_B = this, $$t_C = this;
            $v_1.then(function($p1_0) {
                    callback.call(jsTree, $p1_0);
                    $$t_B.$0_0.trigger("hideDataLoadingOverlay");
                    window.setTimeout(function() { $$t_B.$Y_0(node.get(0)) }, 100);
                    $$t_B.$2_0.data("onExpandIconClickEndTime", Date.now());
                    setPerfMarkerTimestamp("onExpandIconClickEndTime")
                },
                function($p1_0) {
                    $$t_C.$0_0.trigger("hideDataLoadingOverlay");
                    $$t_C.$2_0.data("onExpandIconClickEndTime", Date.now())
                })
        }
    },
    dispose: function() {
        var $v_0 = $P_CRM("#" + this.$1_0, this.$0_0);
        $v_0.unbind("focus");
        var $v_1 = $v_0.find("a.jstree-popout-icon");
        if ($v_1) {
            $v_1.unbind("click");
            $v_1.unbind("mousenenter");
            $v_1.unbind("mousenleave")
        }
        !this.$H_0 && this.$W_0();
        var $v_2 = $P_CRM("#" + this.$L_0 + " img", this.$0_0);
        $v_2.unbind("click");
        $v_2.unbind("keydown");
        $v_2.unbind("mouseenter");
        $v_2.unbind("mouseleave");
        $P_CRM("#" + this.$8_0).empty();
        this.$2_0.unbind("open_node.jstree");
        this.$2_0.unbind("close_node.jstree");
        this.$2_0.unbind("select_node.jstree");
        this.$2_0.unbind("loaded.jstree");
        this.$4_0.destroy()
    }
};
Mscrm.TreeViewOptions = function(jsTreeDivId, heroNodeId, rightToLeft, etc) {
    this.$F_0 = jsTreeDivId;
    this.$M_0 = heroNodeId;
    this.$G_0 = 3;
    this.$N_0 = 5;
    this.$D_0 = etc;
    this.$O_0 = rightToLeft;
    this.$s_0()
};
Mscrm.TreeViewOptions.prototype = {
    $F_0: null,
    $M_0: null,
    $A_0: null,
    $K_0: null,
    $G_0: 0,
    $N_0: 0,
    $D_0: 0,
    $O_0: false,
    get_dataManager: function() { return this.$K_0 },
    set_dataManager: function(value) {
        this.$K_0 = value;
        return value
    },
    get_pageSize: function() { return this.$N_0 },
    set_pageSize: function(value) {
        this.$N_0 = value;
        return value
    },
    get_hierarchyLevel: function() { return this.$G_0 },
    set_hierarchyLevel: function(value) {
        this.$G_0 = value;
        return value
    },
    get_treeDivId: function() { return this.$F_0 },
    set_treeDivId: function(value) {
        this.$F_0 = value;
        return value
    },
    get_heroNodeId: function() { return this.$M_0 },
    set_heroNodeId: function(value) {
        this.$M_0 = value;
        return value
    },
    get_config: function() { return this.$A_0.getJSTreeConfig() },
    get_entityTypeCode: function() { return this.$D_0 },
    set_entityTypeCode: function(value) {
        this.$D_0 = value;
        return value
    },
    get_rightToLeft: function() { return this.$O_0 },
    set_rightToLeft: function(value) {
        this.$O_0 = value;
        return value
    },
    $s_0: function() {
        this.$A_0 = new jQueryApi.JSTreeOptions;
        var $v_0 = new jQueryApi.JSTreeCorePlugin;
        $v_0.set_animation("50");
        $v_0.set_loadOpen("true");
        $v_0.set_loadingString(window.FOLDERVIEW_LOADINGTEXT);
        $v_0.set_rightToLeft(this.$O_0.toString());
        var $v_1 = new jQueryApi.JSTreeUIPlugin;
        $v_1.set_selectLimit("1");
        $v_1.set_selectedParentClose("false");
        $v_1.set_selectPreviousOnDelete("false");
        var $v_2 = new jQueryApi.JSTreeThemesPlugin;
        $v_2.set_icons("false");
        $v_2.set_dots("true");
        $v_2.set_theme("default");
        $v_2.set_url("/_static/css/" + window.USER_LANGUAGE_CODE + "/TreeView.css");
        var $v_3 = new jQueryApi.JSTreeJsonDataPlugin;
        $v_3.set_progressiveRender("true");
        var $v_4 = new jQueryApi.JSTreeHotKeysPlugin;
        Array.add(this.$A_0.get_plugins(), $v_2);
        Array.add(this.$A_0.get_plugins(), $v_0);
        Array.add(this.$A_0.get_plugins(), $v_1);
        Array.add(this.$A_0.get_plugins(), $v_3);
        Array.add(this.$A_0.get_plugins(), $v_4)
    }
};
Mscrm.TreeViewDataProvider = function(dataManager) {
    this.$Z_0 = window.FOLDERVIEW_SHOWMORE.toString();
    this.$b_0 = window.FOLDERVIEW_SHOWMORE_TOOLTIP.toString();
    this.$6_0 = dataManager
};
Mscrm.TreeViewDataProvider.prototype = {
    $6_0: null,
    $3_0: "",
    $a_0: '{{"data":"{0}","attr":{{"title":"{1}","id":"',
    getSubtree: function(heroNodeGuid, level) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String),
            $v_1 = this.$6_0.getTreeHavingHeroNodeAsync(heroNodeGuid, level, -1),
            $$t_7 = this,
            $$t_8 = this;
        $v_1.then(function($p1_0) {
                $$t_7.$3_0 = "";
                $$t_7.$3_0 = $$t_7.stringifyTree($p1_0);
                var $v_2 = $P_CRM.parseJSON(String.format("{0}", $$t_7.$3_0));
                $v_0.resolve($v_2)
            },
            function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    getRootTree: function(nodeGuid) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String),
            $v_1 = this.$6_0.getRootTree(nodeGuid),
            $$t_6 = this,
            $$t_7 = this;
        $v_1.then(function($p1_0) {
                $$t_6.$3_0 = "";
                $$t_6.$3_0 = $$t_6.stringifyTree($p1_0);
                var $v_2 = $P_CRM.parseJSON(String.format("{0}", $$t_6.$3_0));
                $v_0.resolve($v_2)
            },
            function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    isParentAvailable: function(nodeGuid) {
        var $v_0 = this.$6_0.getParentId(nodeGuid);
        if (isNullOrEmptyString($v_0)) return false;
        else return true
    },
    getSibling: function(guid, leftSibling, count) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String),
            $v_1 = this.$6_0.getSiblingListAsync(guid, leftSibling, count, true),
            $$t_8 = this,
            $$t_9 = this;
        $v_1.then(function($p1_0) {
                if (leftSibling) {
                    $p1_0.get_children() && $p1_0.get_children().reverse();
                    $p1_0.set_moreRightChildren(false)
                } else $p1_0.set_moreLeftChildren(false);
                var $v_2 = $$t_8.stringifyChildren($p1_0);
                $v_0.resolve($v_2)
            },
            function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    getChildren: function(guid, count) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String),
            $v_1 = this.$6_0.getChildListAsync(guid, count, true),
            $$t_7 = this,
            $$t_8 = this;
        $v_1.then(function($p1_0) {
                var $v_2 = $$t_7.stringifyChildren($p1_0);
                $v_0.resolve($v_2)
            },
            function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    getParentAndSiblings: function(guid, count) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String), $v_1 = this.$6_0.getParentId(guid);
        if (isNullOrEmptyString($v_1)) return null;
        var $v_2 = '{"data" : "' +
                this.$X_0($v_1) +
                '","attr" :{"id" :"' +
                $v_1 +
                '"},"state":"open", "children" : [true]}',
            $v_3 = this.$6_0.getSiblingsAroundNodeAsync(guid, count),
            $$t_9 = this,
            $$t_A = this;
        $v_3.then(function($p1_0) {
                var $v_4 = $$t_9.stringifyChildren($p1_0);
                Array.add($v_4, $P_CRM.parseJSON(String.format("{0}", $v_2)));
                $v_0.resolve($v_4)
            },
            function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    $X_0: function($p0) {
        var $v_0 = this.$Q_0(this.$6_0.displayName($p0));
        return $v_0
    },
    $Q_0: function($p0) {
        if (!$p0) return null;
        var $v_0 = new RegExp("\\\\", "g"), $v_1 = new RegExp('"', "g");
        $p0 = $p0.replace($v_0, "\\\\").replace($v_1, '\\"');
        return $p0
    },
    stringifyTree: function($p0) {
        var $v_0 = this.$X_0($p0.get_id()), $v_1 = String.format(this.$a_0, this.$Q_0(this.$Z_0), this.$Q_0(this.$b_0));
        this.$3_0 += '{"data" : "' + $v_0 + '","attr" :{"id" :"' + $p0.get_id() + '","title" : "' + $v_0;
        if ($p0.get_children() && $p0.get_children().length) {
            this.$3_0 += '"},"state":"open"';
            this.$3_0 += ', "children" : [';
            if ($p0.get_children().length > 0 && $p0.get_moreLeftChildren()) {
                var $v_2 = $p0.get_children()[0];
                this.$3_0 += $v_1 + $v_2.get_id() + '_UpShowMore"}},'
            }
            for (var $v_3 = 0; $v_3 < $p0.get_children().length; $v_3++) {
                var $v_4 = $p0.get_children()[$v_3];
                this.stringifyTree($v_4);
                if ($v_3 < $p0.get_children().length - 1) this.$3_0 += ","
            }
            if ($p0.get_children().length > 0 && $p0.get_moreRightChildren()) {
                var $v_5 = $p0.get_children()[$p0.get_children().length - 1];
                this.$3_0 += "," + $v_1 + $v_5.get_id() + '_DownShowMore"}}'
            }
            this.$3_0 += "]}"
        } else if ($p0.get_totalChildCount() > 0) this.$3_0 += '"},"state" : "closed"}';
        else this.$3_0 += '"}}';
        return this.$3_0
    },
    stringifyChildren: function($p0) {
        var $v_0 = [], $v_1 = String.format(this.$a_0, this.$Q_0(this.$Z_0), this.$Q_0(this.$b_0));
        if ($p0.get_moreLeftChildren() && $p0.get_children().length > 0) {
            var $v_2 = $p0.get_children()[0];
            Array.add($v_0, $P_CRM.parseJSON(String.format("{0}", $v_1 + $v_2.get_id() + '_UpShowMore"}}')))
        }
        for (var $v_3 = 0; $v_3 < $p0.get_children().length; $v_3++) {
            var $v_4 = $p0.get_children()[$v_3], $v_5 = this.$X_0($v_4.get_id());
            if ($v_4.get_totalChildCount() > 0)
                Array.add($v_0,
                    $P_CRM.parseJSON(String.format("{0}",
                        '{"data":"' +
                        $v_5 +
                        '","attr":{"id":"' +
                        $v_4.get_id() +
                        '","title" : "' +
                        $v_5 +
                        '"},"state":"closed"}')));
            else
                Array.add($v_0,
                    $P_CRM.parseJSON(String.format("{0}",
                        '{"data":"' + $v_5 + '","attr":{"id":"' + $v_4.get_id() + '","title" : "' + $v_5 + '"}}')))
        }
        if ($p0.get_moreRightChildren() && $p0.get_children().length > 0) {
            var $v_6 = $p0.get_children()[$p0.get_children().length - 1];
            Array.add($v_0, $P_CRM.parseJSON(String.format("{0}", $v_1 + $v_6.get_id() + '_DownShowMore"}}')))
        }
        return $v_0
    }
};
Mscrm.CrmFolderView.registerClass("Mscrm.CrmFolderView", Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControl);
Mscrm.TreeView.registerClass("Mscrm.TreeView");
Mscrm.TreeViewOptions.registerClass("Mscrm.TreeViewOptions");
Mscrm.TreeViewDataProvider.registerClass("Mscrm.TreeViewDataProvider");
Mscrm.TreeViewDataProvider.upShowMoreId = "_UpShowMore";
Mscrm.TreeViewDataProvider.downShowMoreId = "_DownShowMore"