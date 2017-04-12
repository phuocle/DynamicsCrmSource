Type.registerNamespace("Mscrm");
Mscrm.TileView = function(element) {
    this.$$d_$q_3 = Function.createDelegate(this, this.$q_3);
    this.$$d_$t_3 = Function.createDelegate(this, this.$t_3);
    this.$$d_$u_3 = Function.createDelegate(this, this.$u_3);
    this.$$d_$y_3 = Function.createDelegate(this, this.$y_3);
    this.$$d_$12_3 = Function.createDelegate(this, this.$12_3);
    this.$$d_$v_3 = Function.createDelegate(this, this.$v_3);
    this.$$d_$s_3 = Function.createDelegate(this, this.$s_3);
    this.$$d_$x_3 = Function.createDelegate(this, this.$x_3);
    this.$$d_$w_3 = Function.createDelegate(this, this.$w_3);
    this.$$d_$z_3 = Function.createDelegate(this, this.$z_3);
    Mscrm.TileView.initializeBase(this, [element])
};
Mscrm.TileView.prototype = {
    $J_3: false,
    $6_3: null,
    $8_3: 0,
    $7_3: null,
    $4_3: null,
    $L_3: null,
    $G_3: null,
    $1_3: null,
    $2_3: null,
    $3_3: null,
    $H_3: 1,
    $C_3: 0,
    $5_3: false,
    $0_3: null,
    $F_3: null,
    $D_3: null,
    $9_3: null,
    $K_3: null,
    $A_3: null,
    $B_3: null,
    get_HeroNodeId: function() { return this.$6_3 },
    set_HeroNodeId: function(value) {
        this.$6_3 = value;
        return value
    },
    get_crmHierarchyDataManager: function() { return this.$7_3 },
    set_crmHierarchyDataManager: function(value) {
        this.$7_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $P_CRM(this.get_element());
        this.$8_3 = this.$7_3.get_TargetEntityType();
        this.$7_3.get_parameters()["otc"] = this.$8_3.toString();
        this.$5_3 = window.LOCID_UI_DIR.toLowerCase() === "rtl";
        this.$G_3 = this.$7_3.get_hierarchyDataManager();
        this.$4_3 = new Mscrm.HierarchyViewDataProvider(this.$G_3);
        this.$L_3 = new Mscrm.TileDataProvider(this.$G_3);
        this.$C_3 = this.$h_3();
        this.$4_3.set_tileViewPageSize(this.$C_3);
        this.get_element().setAttribute("animation", "beforeLoad");
        Mscrm.TileView.$I = window.document.body.clientWidth;
        $addHandler(window, "resize", this.$$d_$z_3);
        this.$K_3 = window.HIERARARCHY_SIBLING_ANNOUNCEMENT;
        var $$t_0 = this;
        window.setTimeout(function() { $$t_0.$V_3(false) }, 0)
    },
    $V_3: function($p0) {
        var $v_0 = this.$j_3(this.$6_3), $$t_4 = this;
        $v_0.done(function($p1_0) {
            if ($p1_0.length !== 2) {
                $$t_4.$0_3.trigger("hideDataLoadingOverlay");
                return
            }
            $$t_4.$T_3($p1_0);
            if ($p0) {
                $$t_4.raiseEvent(32, null);
                $$t_4.raiseEvent(105, null)
            }
        });
        var $$t_5 = this;
        $v_0.fail(function($p1_0) { $$t_5.$0_3.trigger("hideDataLoadingOverlay") })
    },
    $11_3: function() {
        var $v_0 = false;
        if (!this.$Q_3()) $v_0 = true;
        var $$t_1 = this;
        window.setTimeout(function() {
                $$t_1.get_element().setAttribute("animation", $v_0 ? "beforeLoad loaded scroll" : "scroll")
            },
            0);
        this.$0_3.trigger("hideDataLoadingOverlay")
    },
    $X_3: function() {
        this.$0_3.bind("tilewidgetontileclick", this.$$d_$w_3);
        this.$0_3.bind("tilewidgetoncheckboxclick", this.$$d_$x_3);
        this.$0_3.bind("click", this.$$d_$s_3);
        this.$0_3.bind("scrollabletreechildrenscrollstart", this.$$d_$v_3)
    },
    $s_3: function($p0) {
        var $v_0 = $p0.target.parentNode;
        (Sys.UI.DomElement.containsCssClass($v_0, "moreParentIconContainer") ||
                Sys.UI.DomElement.containsCssClass($v_0, "moreChildrenIconContainer")) &&
            $P_CRM($v_0.parentNode).find(".nodeWidgetContainer").click()
    },
    $x_3: function($p0) { this.raiseEvent(32, null) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$0_3.unbind();
        this.$A_3 && this.$A_3.unbind();
        this.$B_3 && this.$B_3.unbind();
        var $v_0 = this.$2_3.find(".moreParent .node .moreParentIconContainer > img");
        $v_0 && $v_0.unbind();
        var $v_1 = this.$2_3.find(".moreChildren .node .moreChildrenIconContainer > img");
        $v_1 && $v_1.unbind();
        this.$1_3.destroy();
        $removeHandler(window, "resize", this.$$d_$z_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    isLiteSubGrid: function() { return false },
    SetParameter: function(name, value) { throw Error.notImplemented("The method or operation is not implemented.") },
    GetParameter: function(name) {
        if (this.$7_3.get_parameters()[name]) return this.$7_3.get_parameters()[name].toString();
        return ""
    },
    get_disabled: function() { return this.$J_3 },
    set_disabled: function(value) {
        this.$J_3 = value;
        return value
    },
    get_entityTypeCode: function() { return this.$8_3 },
    get_entityTypeName: function() { return Xrm.Internal.getEntityName(this.$8_3) },
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
    get_selectedRecordCount: function() {
        if (this.$1_3) return this.$1_3.widget().find(".selectedTileBorder").length;
        else return 0
    },
    get_recordCount: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    get_allRecordIds: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    get_selectedIds: function() {
        var $v_0;
        if (this.$1_3) {
            var $v_1 = this.$1_3.widget().find(".selectedTileBorder").toArray();
            $v_0 = new Array($v_1.length);
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++)
                $v_0[$v_2] = $v_1[$v_2].parentNode.getAttribute("data-recordid").toString()
        } else $v_0 = new Array(0);
        return $v_0
    },
    get_unselectedIds: function() { return new Array(2) },
    get_allRecords: function() { return new Array(4) },
    $m_3: function($p0) {
        var $v_0 = this.$1_3.widget().find("[data-recordid=" + $p0 + "]");
        return $v_0.find(".tileTitle").attr("title")
    },
    get_selectedRecords: function() {
        for (var $v_0 = this.get_selectedRecordCount(), $v_1 = this.get_selectedIds(), $v_2 = new Array($v_0), $v_3 = 0;
            $v_3 < $v_0;
            $v_3++) {
            var $v_4 = new Mscrm.EntityReference;
            $v_4.TypeCode = this.$8_3;
            $v_4.Id = $v_1[$v_3];
            $v_4.TypeName = this.get_entityTypeName();
            $v_4.Name = this.$m_3($v_1[$v_3]);
            $v_2[$v_3] = $v_4
        }
        return $v_2
    },
    get_unselectedRecords: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    get_gridType: function() { return 1 },
    $10_3: function($p0, $p1) {
        $p0.addClass("newInFocus");
        this.$0_3.attr("animation", "scroll");
        var $v_0 = this.$k_3($p0, $p1), $v_1 = 208;
        this.$0_3.find(".inFocus > .nodeWidgetContainer").toggleClass("centerTileColor tileNormal");
        this.$0_3.find(".newInFocus > .nodeWidgetContainer").toggleClass("centerTileColor tileNormal");
        var $v_2 = this.$o_3();
        if ($v_2 < 0) this.$d_3($v_0, $v_1);
        else if ($v_2 > 0) this.$13_3($p0, $v_0, $v_1);
        else this.$c_3($v_0, $v_1)
    },
    $13_3: function($p0, $p1, $p2) {
        var $v_0 = this.$4_3.getTreeAsync($p0.data("recordid"), false),
            $$t_8 = this,
            $v_1 = function($p1_0) { $$t_8.$14_3($p1_0, $p1, $p2) },
            $$t_9 = this,
            $v_2 = function($p1_0) { $$t_9.$0_3.trigger("hideDataLoadingOverlay") };
        $v_0.done($v_1);
        $v_0.fail($v_2)
    },
    $14_3: function($p0, $p1, $p2) {
        if (!IsNull($p0)) {
            var $v_0 = this.$F_3.children.length,
                $v_1 = $p0.children.length,
                $v_2 = this.$1_3.option("childNodesVisible");
            $v_0 < $v_2 && $v_0 < $v_1 && this.$0_3.addClass("showOverflow")
        }
        this.$F_3 = null;
        this.$b_3($p1, $p2)
    },
    $d_3: function($p0, $p1) {
        var $v_0 = this.$3_3.find(".root > .node").position().left, $v_1 = "scroll transition ", $v_2 = "{0}px";
        $v_1 += "upTransition";
        this.$0_3.attr("animation", $v_1);
        this.$0_3.outerWidth(true);
        this.$3_3.find(".root > .node").css("visibility", "visible");
        this.$2_3.css("top", String.format($v_2, -$p1));
        this.$2_3.css("opacity", "0");
        this.$3_3.css("top", String.format($v_2, 0));
        this.$1_3.scrollableTrees[1].scrollChildren($p0);
        var $v_3 = Math.min(this.$1_3.option("childNodesVisible"), this.$3_3.find(".scroller ul > li").length),
            $v_4 = $v_0 / 333,
            $v_5 = ($v_3 - 1) / 2,
            $v_6 = $v_4 - $v_5;
        $v_6 *= this.$5_3 ? -1 : 1;
        this.$1_3.scrollableTrees[1].scrollRoot($v_6)
    },
    $b_3: function($p0, $p1) {
        var $v_0 = "scroll transition ", $v_1 = "{0}px";
        $v_0 += "downTransition";
        this.$0_3.attr("animation", $v_0);
        this.$0_3.outerWidth(true);
        this.$2_3.css("top", String.format($v_1, $p1));
        this.$3_3.css("top", String.format($v_1, 2 * $p1));
        this.$3_3.css("opacity", "0");
        this.$1_3.scrollableTrees[0].scrollChildren(Number.NEGATIVE_INFINITY);
        this.$1_3.scrollableTrees[0].scrollRoot($p0)
    },
    $c_3: function($p0, $p1) {
        var $v_0 = "scroll transition ", $v_1 = "{0}px";
        $v_0 += "noVertialTransition";
        this.$0_3.attr("animation", $v_0);
        this.$0_3.outerWidth(true);
        this.$3_3.css("top", String.format($v_1, 2 * $p1));
        this.$3_3.css("opacity", "0");
        this.$1_3.scrollableTrees[0].scrollChildren($p0)
    },
    $k_3: function($p0, $p1) {
        if (IsNull($p1)) return 0;
        var $v_0 = false;
        if (this.$2_3.find(".root > .node").data("recordid") === $p0.data("recordid")) $v_0 = true;
        if ($p1.recordId === "{00000000-0000-0000-0000-000000000000}") $p1 = $p1.children[0];
        var $v_1 = this.$i_3($p0, $p1, $v_0) - this.$l_3($p0, $p1);
        return $v_1
    },
    $o_3: function() {
        var $v_0;
        if (this.$2_3.find(".root > .newInFocus").length === 1) $v_0 = 1;
        else if (this.$2_3.find(".scroller .newInFocus").length === 1) $v_0 = 0;
        else $v_0 = -1;
        return $v_0
    },
    $i_3: function($p0, $p1, $p2) {
        if ($p2) {
            var $v_0 = Math.min(this.$1_3.option("childNodesVisible"), $p1.children.length);
            return ($v_0 - 1) / 2
        } else {
            var $v_1 = $p0.parent(), $v_2 = $v_1.parent().find(".first");
            return $v_1.index() - $v_2.index()
        }
    },
    $l_3: function($p0, $p1) {
        for (var $v_0 = $p0.data("recordid"),
            $v_1 = this.$1_3.option("childNodesVisible"),
            $v_2 = $p1.children,
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) if ($v_2[$v_3].recordId === $v_0) break;
        var $v_4;
        if ($v_3 < $v_1) $v_4 = 0;
        else {
            $v_4 = $v_3 - Math.floor($v_1 / 2);
            if ($v_4 > 0) $v_4 = Math.min($v_2.length - $v_1, $v_4);
            else $v_4 = 0
        }
        return $v_3 - $v_4
    },
    $U_3: function($p0) {
        this.$0_3.trigger("showDataLoadingOverlay");
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(CrmJQueryWidget.TreeNode, String),
            $v_1 = this.$4_3.getTreeAsync($p0, true),
            $$t_5 = this;
        $v_1.done(function($p1_0) {
            if (arguments.length !== 1) return;
            $v_0.resolve($p1_0)
        });
        var $$t_6 = this;
        $v_1.fail(function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    $n_3: function($p0) {
        this.$0_3.trigger("showDataLoadingOverlay");
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(CrmJQueryWidget.TreeNode, String),
            $v_1 = this.$4_3.getTreeAsync($p0, false),
            $$t_5 = this;
        $v_1.done(function($p1_0) {
            if (arguments.length !== 1) return;
            $v_0.resolve($p1_0)
        });
        var $$t_6 = this;
        $v_1.fail(function($p1_0) { $v_0.reject() });
        return $v_0.promise()
    },
    $j_3: function($p0) {
        this.$0_3.trigger("showDataLoadingOverlay");
        var $v_0 = new Array(2),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String),
            $v_2 = this.$U_3($p0),
            $v_3 = this.$n_3($p0),
            $$t_8 = this;
        $P_CRM.when($v_3, $v_2).done(function($p1_0) {
            if (arguments.length !== $v_0.length) return;
            for (var $v_4 = 0; $v_4 < arguments.length; $v_4++) $v_0[$v_4] = arguments[$v_4];
            $v_1.resolve($v_0)
        });
        var $$t_9 = this;
        $P_CRM.when($v_3, $v_2).fail(function($p1_0) { $v_1.reject() });
        return $v_1.promise()
    },
    $T_3: function($p0) {
        this.$0_3.data("TileViewGenerationStartTime", Date.now());
        setPerfMarkerTimestamp("TileViewGenerationStartTime");
        var $v_0 = new CrmJQueryWidget.HierarchyOptions;
        $v_0.isRTL = this.$5_3;
        $v_0.childNodesVisible = this.$C_3;
        $v_0.renderNode = this.$$d_$12_3;
        $v_0.heroNode = this.$6_3;
        $v_0.data = [];
        $v_0.data[0] = $p0[0];
        $v_0.data[1] = $p0[1];
        this.$F_3 = $p0[0];
        this.$0_3.bind("scrollabletreedomready", this.$$d_$y_3);
        this.$1_3 = jQueryUIApi.WidgetFactory.createInstance(CrmJQueryWidget.Hierarchy, this.get_element(), $v_0);
        this.$2_3 = this.$1_3.scrollableTrees[0].widget();
        this.$3_3 = this.$1_3.scrollableTrees[1].widget();
        this.$3_3.find(".scroller ul > li").first().hasClass("pseudoNode") &&
            this.$1_3.scrollableTrees[1].scrollChildren(this.$5_3 ? -1 : 1);
        this.$X_3();
        this.$Z_3();
        this.$S_3();
        this.$r_3();
        this.$3_3.css("top", String.format("{0}px", 208));
        this.$0_3.width(this.$2_3.outerWidth(true));
        this.$11_3();
        this.$f_3();
        this.$9_3 = null;
        this.$0_3.data("TileViewGenerationEndTime", Date.now());
        setPerfMarkerTimestamp("TileViewGenerationEndTime");
        setPerfMarkerTimestamp("TileViewRenderStartTime")
    },
    $f_3: function() {
        var $v_0 = 1;
        this.$2_3 = $P_CRM(".topTreeContainer");
        this.$3_3 = $P_CRM(".bottomTreeContainer");
        var $v_1 = $P_CRM(".childrenContainerDiv", this.$2_3), $v_2 = $P_CRM(".childrenContainerDiv", this.$3_3);
        if ($v_1.children().length) {
            $v_1.data("level", "1");
            $v_2.data("level", "2")
        } else $v_2.data("level", "1");
        if (this.$2_3.children().length) {
            var $$t_9 = this;
            $P_CRM(".nodeWidgetContainer ", this.$2_3).each(function($p1_0, $p1_1) {
                var $v_3 = $P_CRM($p1_1);
                if (!$v_3.children().length) return;
                $$t_9.$N_3($v_3);
                $$t_9.$M_3($v_3, $v_0);
                if (!$p1_0) $v_0++
            })
        }
        if (this.$3_3.children().length) {
            var $$t_A = this;
            $P_CRM(".nodeWidgetContainer ", this.$3_3).each(function($p1_0, $p1_1) {
                var $v_4 = $P_CRM($p1_1);
                if (!$v_4.children().length) return;
                $$t_A.$N_3($v_4);
                $$t_A.$M_3($v_4, $v_0);
                if (!$p1_0) $v_0++
            })
        }
    },
    $N_3: function($p0) {
        var $v_0 = $p0.attr("aria-label"), $v_1 = new RegExp("MORE_CHILDREN_ANNOUNCEMENT\\(+[^)]+\\)");
        if ($p0.siblings(".moreChildrenIconContainer").length) {
            var $v_2 = $v_0.match($v_1);
            if (!$v_2) return;
            var $v_3 = $v_2[0], $v_4 = $v_3.replace("MORE_CHILDREN_ANNOUNCEMENT(", "");
            $v_4 = $v_4.substring(0, $v_4.length - 1);
            $v_0 = $v_0.replace($v_3, $v_4);
            $p0.attr("aria-label", $v_0)
        } else {
            $v_0 = $v_0.replace($v_1, "");
            $p0.attr("aria-label", $v_0)
        }
    },
    $M_3: function($p0, $p1) {
        var $v_0, $v_1 = new RegExp("LEVEL_[A-Z0-9-]{36}");
        $v_0 = $p0.attr("aria-label");
        $v_0 = $v_0.replace($v_1, $p1.toString());
        $p0.attr("aria-label", $v_0)
    },
    $Y_3: function() {
        var $v_0 = 2;
        this.$2_3 = $P_CRM(".topTreeContainer");
        this.$3_3 = $P_CRM(".bottomTreeContainer");
        if (this.$2_3.children().length) {
            $P_CRM(".scrollButton", this.$2_3).data("level", $v_0);
            $v_0++
        }
        this.$3_3.children().length && $P_CRM(".scrollButton", this.$3_3).data("level", $v_0)
    },
    $y_3: function($p0) {
        var $v_0 = $P_CRM($p0.target), $v_1 = $v_0.find(".childrenContainerDiv ul > li"), $v_2 = this.$C_3;
        if ($v_1.length <= 0 || $v_1.length < $v_2) return;
        var $v_3 = false,
            $v_4 = 0,
            $v_5 = $v_2 - 1,
            $v_6 = $v_1.eq($v_4).find(".node"),
            $v_7 = $v_6.data("recordid"),
            $v_8 = this.$4_3.getSiblingCountSync($v_7, true),
            $v_9 = $v_1.eq($v_5).find(".node"),
            $v_A = $v_9.data("recordid"),
            $v_B = this.$4_3.getSiblingCountSync($v_A, false);
        this.$a_3($v_0, $v_8, $v_B);
        if (this.$R_3($v_0, $v_6.parent(), false)) {
            $v_3 = true;
            this.$P_3($v_0, false)
        }
        this.$R_3($v_0, $v_9.parent(), true) && this.$P_3($v_0, true);
        if ($v_0.hasClass("topTreeContainer")) {
            var $v_C, $v_D = $v_0.find(".node.inFocus").parent().index();
            if ($v_D < $v_2) $v_C = 0;
            else {
                $v_C = $v_D - Math.floor($v_2 / 2);
                if ($v_3) $v_C = $v_C - 1;
                if ($v_C > 0) {
                    $v_C = Math.min($v_1.length - $v_2, $v_C);
                    var $v_E = 0, $v_F = $v_0.find(".scrollButton.previous");
                    $v_E = $v_F.data("scrollnumber");
                    $v_E = $v_E + $v_C;
                    $v_F.data("scrollnumber", $v_E);
                    $v_F.find(".scrollNumber").text($v_E.toString());
                    this.$E_3($v_F);
                    var $v_G = $v_0.find(".scrollButton.next");
                    $v_E = $v_G.data("scrollnumber");
                    $v_E = $v_E - $v_C;
                    $v_G.data("scrollnumber", $v_E);
                    $v_G.find(".scrollNumber").text($v_E.toString());
                    this.$E_3($v_G)
                } else $v_C = 0
            }
        }
    },
    $Q_3: function() {
        if (this.get_element().getAttribute("animation").toString().indexOf("transition") >= 0) return true;
        return false
    },
    $v_3: function($p0) {
        if (this.$Q_3()) return;
        var $v_0 = $P_CRM($p0.target), $v_1 = arguments[1], $v_2 = $v_1.scrollBy > 0;
        if (!this.$15_3($v_0, !$v_2)) return;
        var $v_3 = $v_0.data("ScrollableTree"), $v_4 = $v_0.find(".root > .node").data("recordid");
        if (!$v_2) {
            $v_0.find(".first").prev().remove();
            $v_3.prependChildNodes($v_4, this.$D_3)
        } else {
            $v_0.find(".last").next().remove();
            $v_3.appendChildNodes($v_4, this.$D_3)
        }
        this.$S_3();
        var $v_5 = $v_2 ? $v_0.find(".last") : $v_0.find(".first");
        this.$R_3($v_0, $v_5, $v_2) && this.$P_3($v_0, $v_2);
        var $v_6 = this.$0_3.attr("animation");
        this.$0_3.attr("animation", $v_6.replace("scroll", ""));
        $v_3.reload();
        this.$0_3.attr("animation", $v_6);
        this.$D_3 = null
    },
    $e_3: function() {
        this.$1_3.widget().removeAttr("animation");
        this.$1_3.widget().unbind("tilewidgetontileclick");
        this.$1_3.widget().find("div.tileCheckBox").unbind("click");
        this.$1_3.widget().unbind();
        this.$1_3.destroy();
        this.$1_3 = null
    },
    $R_3: function($p0, $p1, $p2) {
        if ($p0.find(".childrenContainerDiv").length <= 0) return false;
        if ($p2 && $p1.next().hasClass("pseudoNode") || !$p2 && $p1.prev().hasClass("pseudoNode")) return false;
        var $v_0, $v_1;
        if ($p2) {
            var $v_2 = $p0.find(".childrenContainerDiv ul > li").length;
            $v_0 = $v_2 - $p1.index() - 1;
            var $v_3 = $p0.find(".scrollButton.next");
            $v_1 = $v_3.data("scrollnumber")
        } else {
            $v_0 = $p1.index();
            var $v_4 = $p0.find(".scrollButton.previous");
            $v_1 = $v_4.data("scrollnumber")
        }
        return $v_1 > $v_0
    },
    $z_3: function($p0) {
        var $v_0 = window.document.body.clientWidth, $v_1 = 5;
        if ($v_0 >= Mscrm.TileView.$I - $v_1 && $v_0 < Mscrm.TileView.$I + $v_1) return;
        var $v_2 = Mscrm.CrmUri.create(window.location.href);
        $v_2.get_query()["oId"] = this.$6_3;
        window.location.replace($v_2.toString())
    },
    $h_3: function() {
        var $v_0 = this.get_element().parentNode.clientWidth - 140;
        return Math.round(Math.max(3, Math.floor($v_0 / 333)))
    },
    $15_3: function($p0, $p1) {
        if (!$p1) return $p0.find(".last").next().hasClass("pseudoNode");
        else return $p0.find(".first").prev().hasClass("pseudoNode")
    },
    $P_3: function($p0, $p1) {
        var $v_0 =
                "\r\n\t\t\t\t\t\t\t<li class='pseudoNode hideScrollerItem'>\r\n\t\t\t\t\t\t\t\t<div class='node'>\r\n\t\t\t\t\t\t\t\t\t<div class='nodeWidgetContainer tileContainer tileUnSelected'>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</li>",
            $v_1 = $p0.find(".childrenContainerDiv > ul");
        if ($p1) $v_1.append($v_0);
        else $v_1.prepend($v_0)
    },
    $a_3: function($p0, $p1, $p2) {
        var $v_0, $v_1;
        if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            $v_0 = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_left_hc.png");
            $v_1 = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_right_hc.png")
        } else {
            $v_0 = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_left.png");
            $v_1 = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_right.png")
        }
        var $v_2 = Mscrm.ImageStrip.getImageInfo(this.$5_3 ? $v_1 : $v_0),
            $v_3 = Mscrm.ImageStrip.getImageInfo(this.$5_3 ? $v_0 : $v_1),
            $v_4 = window.LOCID_SCROLLBUTTON_TOOLTIP,
            $v_5 =
                "<a href='#' tabIndex='0' class='scrollButton {0}' title='{5}'\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tdata-scrollNumber='{3}' data-scrollDirection='{4}'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src='{1}' class='{2}' alt='{5}' style='{6}' />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class='scrollNumber'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{3}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<img src='{1}' class='{2}' alt='{5}' style='{7}' />\r\n\t\t\t\t\t\t\t\t\t\t\t</a>",
            $v_6 = String.format($v_5,
                "previous",
                $v_2.source,
                $v_2.cssClass,
                $p1,
                -1,
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_4),
                "display: none",
                "display: inline"),
            $v_7 = String.format($v_5,
                "next",
                $v_3.source,
                $v_3.cssClass,
                $p2,
                1,
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_4),
                "display: inline",
                "display: none"),
            $v_8 = $p0.find(".root").first();
        $v_8.prepend($v_6);
        $v_8.append($v_7);
        this.$Y_3();
        var $v_9 = $v_8.find(".scrollButton");
        this.$E_3($v_9);
        var $v_A = "99.6%";
        $v_9.filter(".previous").css(this.$5_3 ? "left" : "right", $v_A);
        $v_9.filter(".next").css(this.$5_3 ? "right" : "left", $v_A);
        $v_9.css("top", "199px");
        $v_9.click(this.$$d_$u_3);
        var $v_B = $p0.find(".childrenContainerDiv");
        $v_B.attr("tabIndex", "0");
        $v_B.keyup(this.$$d_$t_3);
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            this.$A_3 = $v_8.find(".previous > img");
            this.$B_3 = $v_8.find(".next > img");
            var $v_C = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_left_hover.png"),
                $v_D = Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_right_hover.png"),
                $v_E = Mscrm.ImageStrip.getImageInfo(this.$5_3 ? $v_D : $v_C),
                $v_F = Mscrm.ImageStrip.getImageInfo(this.$5_3 ? $v_C : $v_D),
                $$t_N = this;
            this.$A_3.bind("mouseenter",
                function($p1_0) {
                    $p1_0.target.setAttribute("src", $v_E.source);
                    $p1_0.target.className = $v_E.cssClass
                });
            var $$t_O = this;
            this.$A_3.bind("mouseleave",
                function($p1_0) {
                    $p1_0.target.setAttribute("src", $v_2.source);
                    $p1_0.target.className = $v_2.cssClass
                });
            var $$t_P = this;
            this.$B_3.bind("mouseenter",
                function($p1_0) {
                    $p1_0.target.setAttribute("src", $v_F.source);
                    $p1_0.target.className = $v_F.cssClass
                });
            var $$t_Q = this;
            this.$B_3.bind("mouseleave",
                function($p1_0) {
                    $p1_0.target.setAttribute("src", $v_3.source);
                    $p1_0.target.className = $v_3.cssClass
                })
        }
    },
    $t_3: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget).parent(),
            $v_1 = $v_0.find(".scrollButton.previous"),
            $v_2 = $v_0.find(".scrollButton.next"),
            $v_3 = null;
        if ($p0
            .which ===
            37 &&
            Number.parseInvariant($v_1.data("scrollnumber").toString())) $v_3 = this.$O_3($p0, $v_1);
        else if ($p0
            .which ===
            39 &&
            Number.parseInvariant($v_2.data("scrollnumber").toString())) $v_3 = this.$O_3($p0, $v_2);
        else {
            this.$0_3.trigger("hideDataLoadingOverlay");
            return
        }
        var $$t_9 = this,
            $v_4 = function($p1_0) { $P_CRM($p0.currentTarget).focus() },
            $$t_A = this,
            $v_5 = function($p1_0) { $$t_A.$0_3.trigger("hideDataLoadingOverlay") };
        $v_3.done($v_4);
        $v_3.fail($v_5)
    },
    $u_3: function($p0) {
        this.$0_3.data("onNextPageButtonEventStartTime", Date.now());
        setPerfMarkerTimestamp("onNextPageButtonClickStartTime");
        var $v_0 = $P_CRM($p0.currentTarget),
            $v_1 = this.$O_3($p0, $v_0),
            $$t_7 = this,
            $v_2 = function($p1_0) { $P_CRM($p0.currentTarget).focus() },
            $$t_8 = this,
            $v_3 = function($p1_0) { $$t_8.$0_3.trigger("hideDataLoadingOverlay") };
        $v_1.done($v_2);
        $v_1.fail($v_3);
        setPerfMarkerTimestamp("onNextPageButtonClickEndTime")
    },
    $O_3: function($p0, $p1) {
        this.$0_3.trigger("showDataLoadingOverlay");
        var $v_0 = $p1.data("scrolldirection"),
            $v_1 = $v_0 > 0,
            $v_2 = null,
            $v_3 = null,
            $v_4 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String);
        if (!$v_1) {
            $v_2 = $p1.parent().find(".first > div").data("recordid");
            $v_3 = this.$4_3.getSiblingAsync($v_2, true, -1)
        } else {
            $v_2 = $p1.parent().find(".last > div").data("recordid");
            $v_3 = this.$4_3.getSiblingAsync($v_2, false, -1)
        }
        var $$t_B = this,
            $v_5 = function($p1_0) {
                $$t_B.$D_3 = $p1_0;
                $$t_B.$W_3($p1, $$t_B.$H_3);
                $p0.preventDefault();
                $v_4.resolve()
            },
            $$t_C = this,
            $v_6 = function($p1_0) {
                $$t_C.$0_3.trigger("hideDataLoadingOverlay");
                $v_4.reject()
            };
        $v_3.done($v_5);
        $v_3.fail($v_6);
        return $v_4.promise()
    },
    $W_3: function($p0, $p1) {
        if (!$p0.data("scrollnumber")) return;
        var $v_0 = $p0;
        while ($v_0.length === 1 && !$v_0.hasClass("scrollableTree")) $v_0 = $v_0.parent();
        var $v_1 = $v_0.data("ScrollableTree"), $v_2 = $p0.data("scrolldirection");
        $v_1.scrollChildren($v_2 * $p1);
        var $v_3 = $p0.parent().find(".scrollButton").not($p0[0]);
        $p0.data("scrollnumber", Math.max($p0.data("scrollnumber") - this.$H_3, 0));
        $v_3.data("scrollnumber", Math.max($v_3.data("scrollnumber") + this.$H_3, 0));
        this.$E_3($p0);
        this.$E_3($v_3);
        var $v_4;
        if ($v_2 === 1) $v_4 = $P_CRM(".last .nodeWidgetContainer", $v_0).first();
        else $v_4 = $P_CRM(".first .nodeWidgetContainer", $v_0).first();
        var $v_5 = this.$g_3($v_0);
        this.$M_3($v_4, $v_5);
        this.$N_3($v_4);
        this.$0_3.trigger("hideDataLoadingOverlay");
        this.$0_3.data("onNextPageButtonEventEndTime", Date.now())
    },
    $g_3: function($p0) {
        var $v_0 = 2;
        if ($p0.hasClass("topTreeContainer")) $v_0 = 2;
        else if (!this.$2_3.children().length) $v_0 = 2;
        else $v_0 = 3;
        return $v_0
    },
    $E_3: function($p0) {
        var $$t_7 = this;
        $p0.each(function($p1_0, $p1_1) {
            var $v_0 = $P_CRM($p1_1), $v_1, $v_2 = $v_0.data("scrollnumber"), $v_3 = $v_0.data("level");
            $v_0.attr("aria-label", String.format($$t_7.$K_3, $v_2.toString(), $v_3.toString()));
            if (99 < $v_2) $v_1 = "99+";
            else $v_1 = $v_2.toString();
            $v_0.find(".scrollNumber").text($v_1);
            if ($v_2 <= 0) $v_0.addClass("hideButton");
            else $v_0.removeClass("hideButton")
        })
    },
    $Z_3: function() {
        var $v_0;
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_up_hc.png"));
        else $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_up.png"));
        var $v_1 = window.LOCID_MOREPARENT_TOOLTIP,
            $v_2 = String
                .format("<div class='moreParentIconContainer'>\r\n\t\t\t\t\t\t\t\t\t<img src='{0}' class='{1}' alt='{2}' title='{2}' />\r\n\t\t\t\t\t\t\t\t</div>", $v_0.source, $v_0.cssClass, CrmEncodeDecode.CrmHtmlAttributeEncode($v_1));
        this.$2_3.find(".moreParent .node").first().prepend($v_2);
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            var $v_3 = this.$2_3.find(".moreParent .node .moreParentIconContainer > img"),
                $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/tileview/more_up_hover.png"));
            if ($v_3) {
                var $$t_7 = this;
                $v_3.bind("mouseenter",
                    function($p1_0) {
                        $p1_0.target.setAttribute("src", $v_4.source);
                        $p1_0.target.className = $v_4.cssClass
                    });
                var $$t_8 = this;
                $v_3.bind("mouseleave",
                    function($p1_0) {
                        $p1_0.target.setAttribute("src", $v_0.source);
                        $p1_0.target.className = $v_0.cssClass
                    })
            }
        }
    },
    $S_3: function() {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_down.png"));
        if (Mscrm.InternalUtilities.Utilities
            .isHighContrastEnabled())
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/tileview/more_down_hc.png"));
        else $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/tileview/more_down.png"));
        var $v_1 = window.LOCID_MORECHILDREN_TOOLTIP,
            $v_2 = 16,
            $v_3 = String
                .format("<div class='moreChildrenIconContainer'>\r\n\t\t\t\t\t\t\t\t\t<img src='{0}' class='{1}' alt='{2}' title='{2}' />\r\n\t\t\t\t\t\t\t\t</div>", $v_0.source, $v_0.cssClass, CrmEncodeDecode.CrmHtmlAttributeEncode($v_1)),
            $v_4 = this.$$d_$q_3;
        this.$0_3.find(".moreChildren .node").filter($v_4).append($v_3);
        var $v_5 = this.$0_3.find(".scroller");
        $v_5.height($v_5.height() + $v_2);
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
            var $v_6 = this.$0_3.find(".moreChildren .node .moreChildrenIconContainer > img"),
                $v_7 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/tileview/more_down_hover.png"));
            if ($v_6) {
                var $$t_A = this;
                $v_6.bind("mouseenter",
                    function($p1_0) {
                        $p1_0.target.setAttribute("src", $v_7.source);
                        $p1_0.target.className = $v_7.cssClass
                    });
                var $$t_B = this;
                $v_6.bind("mouseleave",
                    function($p1_0) {
                        $p1_0.target.setAttribute("src", $v_0.source);
                        $p1_0.target.className = $v_0.cssClass
                    })
            }
        }
    },
    $q_3: function($p0) {
        var $v_0 = $P_CRM(arguments[1]);
        return !$v_0.find(".moreChildrenIconContainer").length
    },
    $r_3: function() {
        if (!Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) return;
        var $v_0 = "<div class='inFocusHighContrast'></div>";
        this.$0_3.find(".inFocus").prepend($v_0)
    },
    $12_3: function($p0, $p1) {
        var $v_0 = new Mscrm.CrmTileOptions, $v_1 = window.ORG_UNIQUE_NAME;
        $v_0.formLayOutUrl = "/" + $v_1 + "/_forms/read/tilelayout.aspx?etc=" + this.$8_3.toString() + "";
        $v_0.tileDataProviderObject = this.$L_3;
        $v_0.recordId = $p0.recordId;
        $v_0.isFocusTile = $p0.inFocus;
        var $v_2 = Mscrm.TileFactory.getTile(1, $v_0);
        $v_2.render($p1)
    },
    $w_3: function($p0) {
        var $v_0 = $P_CRM($p0.target).parent(), $v_1 = $v_0.data("recordid");
        if (isNullOrEmptyString($v_1) || $v_1.toLowerCase() === this.$6_3.toLowerCase()) return;
        this.$0_3.trigger("showDataLoadingOverlay");
        var $v_2 = new Array(2);
        this.$9_3 = null;
        var $v_3 = arguments[1].toString();
        this.$0_3.data("onTileClickTime", $v_3);
        setPerfMarkerTimestamp("onTileClickTime");
        var $v_4 = this.$U_3($v_1), $v_5 = this.$p_3($v_0), $$t_A = this;
        $P_CRM.when($v_5, $v_4).done(function($p1_0) {
            if (arguments.length !== $v_2.length) return;
            for (var $v_6 = 0; $v_6 < arguments.length; $v_6++) $v_2[$v_6] = arguments[$v_6];
            $$t_A.$9_3 = $v_2;
            $$t_A.refreshHeroNode($v_1, true)
        });
        var $$t_B = this;
        $P_CRM.when($v_4, $v_5).fail(function($p1_0) { $$t_B.$0_3.trigger("hideDataLoadingOverlay") })
    },
    $p_3: function($p0) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(CrmJQueryWidget.TreeNode, String),
            $v_1 = this.$4_3.getTreeAsync($p0.data("recordid"), false),
            $$t_7 = this,
            $v_2 = function($p1_0) {
                $$t_7.$10_3($p0, $p1_0);
                window.setTimeout(function() { $v_0.resolve($p1_0) }, 1300)
            },
            $$t_8 = this,
            $v_3 = function($p1_0) {
                $$t_8.$0_3.trigger("hideDataLoadingOverlay");
                $v_0.reject()
            };
        $v_1.done($v_2);
        $v_1.fail($v_3);
        return $v_0.promise()
    },
    refresh: function() { Mscrm.Utilities.showHierarchyPage(this.$8_3, this.$6_3, null) },
    get_viewTitle: function() { return $P_CRM(".centerTileColor .tileTitle").attr("title").toString() },
    get_viewIsUserOwned: function() { return false },
    refreshHeroNode: function(recordId, updateHeader) {
        if (isNullOrEmptyString(recordId) || recordId.toLowerCase() === this.$6_3.toLowerCase()) return;
        if (updateHeader) {
            var $v_1 = this.$7_3.get_hierarchyDataManager().getData(recordId.toUpperCase()), $v_2 = {};
            $v_2["data"] = $v_1.get_attributes();
            this.raiseEvent(104, $v_2)
        }
        var $v_0 = false;
        if (!this.$Q_3()) $v_0 = true;
        this.$e_3();
        this.$6_3 = recordId;
        this.get_element().setAttribute("animation", $v_0 ? "beforeLoad" : "");
        if (IsNull(this.$9_3)) this.$V_3(true);
        else {
            this.$T_3(this.$9_3);
            this.raiseEvent(32, null);
            this.raiseEvent(105, null);
            this.$9_3 = null
        }
    }
};
Mscrm.TileView.registerClass("Mscrm.TileView", Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControl);
Mscrm.TileView.$I = -1