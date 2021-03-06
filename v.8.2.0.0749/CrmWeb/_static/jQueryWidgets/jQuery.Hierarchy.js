Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.Hierarchy = function(hierarchyOptions, element) {
    this.$$d_$C_1 = Function.createDelegate(this, this.$C_1);
    this.$$d_$B_1 = Function.createDelegate(this, this.$B_1);
    this.$$d_$D_1 = Function.createDelegate(this, this.$D_1);
    this.scrollableTrees = new Array(2);
    CrmJQueryWidget.Hierarchy.initializeBase(this, [hierarchyOptions, element])
};
CrmJQueryWidget.Hierarchy.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.Hierarchy) };
CrmJQueryWidget.Hierarchy.prototype = {
    $4_1: null,
    $3_1: null,
    $1_1: null,
    $2_1: null,
    $0_1: null,
    $7_1: "rtl",
    $5_1: 0,
    _create: function() {
        this.element.data("hierarchy-create-start", Date.now());
        this.$0_1 = this.options;
        this.$F_1();
        $P_CRM.Widget.prototype._create.call(this);
        this.$A_1();
        this.element.attr(this.$7_1, this.$0_1.isRTL.toString());
        this.$1_1 = this.element.find(".topTreeContainer");
        if (!this.$1_1.length) {
            this.$1_1 = $P_CRM("<div></div>");
            this.element.append(this.$1_1);
            this.$1_1.addClass("topTreeContainer")
        }
        this.$2_1 = this.element.find(".bottomTreeContainer");
        if (!this.$2_1.length) {
            this.$2_1 = $P_CRM("<div></div>");
            this.element.append(this.$2_1);
            this.$2_1.addClass("bottomTreeContainer")
        }
        var $v_0 = new CrmJQueryWidget.ScrollableTreeOptions;
        $v_0.childNodesVisible = this.$0_1.childNodesVisible;
        $v_0.isRTL = this.$0_1.isRTL;
        $v_0.renderNode = this.$0_1.renderNode;
        $v_0.data = this.$0_1.data[0];
        $v_0.childrenScrollEnd = this.$$d_$D_1;
        var $v_1 = new CrmJQueryWidget.ScrollableTreeOptions;
        $v_1.childNodesVisible = this.$0_1.childNodesVisible;
        $v_1.isRTL = this.$0_1.isRTL;
        $v_1.renderNode = this.$0_1.renderNode;
        $v_1.data = this.$0_1.data[1];
        $v_1.rootScrollEnd = this.$$d_$B_1;
        this.$4_1 = jQueryUIApi.WidgetFactory.createInstance(CrmJQueryWidget.ScrollableTree, this.$1_1[0], $v_0);
        this.$3_1 = jQueryUIApi.WidgetFactory.createInstance(CrmJQueryWidget.ScrollableTree, this.$2_1[0], $v_1);
        this.scrollableTrees[0] = this.$4_1;
        this.scrollableTrees[1] = this.$3_1;
        this.$5_1 = this.$2_1.find(".node").first().outerWidth(true);
        this.$E_1();
        this.$9_1();
        if ($v_0.data) {
            this.element.addClass("nonEmptyTopTree");
            this.$1_1.find(".scroller").bind("scrollerreload", this.$$d_$C_1);
            var $v_2 = $P_CRM(".node.inFocus", this.$1_1);
            if ($v_2.css("visibility") === "hidden") {
                var $v_3 = $P_CRM(".childrenContainerDiv", this.$1_1),
                    $v_4 = Math.floor($v_3.width() / $v_2.outerWidth(true)),
                    $v_5 = $v_2.parent().index() - Math.floor($v_4 / 2);
                this.$4_1.scrollChildren($v_5)
            }
            this.$8_1()
        } else this.$2_1.find(".scroller").bind("scrollerreload", this.$$d_$C_1);
        this.element.data("hierarchy-create-end", Date.now())
    },
    $F_1: function() {
        if (this.$0_1.data.length !== 2) throw Error.create("Need to pass in two data objects for top and bottom tree");
        var $v_0 = this.$0_1.data[1];
        if ($v_0.recordId === "{00000000-0000-0000-0000-000000000000}") $v_0 = $v_0.children[0];
        if ($v_0.recordId !== this.$0_1.heroNode)
            throw Error.create("The root of the bottom tree should be the hero node")
    },
    $E_1: function() {
        var $v_0 = this.$2_1.find(".childrenContainerDiv").first(),
            $v_1 = $v_0.children().first(),
            $v_2 = $v_1.width(),
            $v_3 = $v_0.width();
        $v_2 <= $v_3 && $v_0.css("overflow", "visible")
    },
    $6_1: function($p0, $p1) {
        var $v_0 = 0, $v_1 = 0;
        while ($p0 && $p0 !== $p1) {
            var $v_2 = $P_CRM($p0);
            $v_0 += $v_2.data("_offsetLeft") ? $v_2.data("_offsetLeft") : $v_2.position().left;
            $v_1 += $v_2.data("_offsetTop") ? $v_2.data("_offsetTop") : $v_2.position().top;
            $p0 = $p0.offsetParent
        }
        return [$v_0, $v_1]
    },
    $8_1: function() {
        var $v_0 = $P_CRM(".node.inFocus", this.$1_1)[0], $v_1 = this.$6_1($v_0, this.$1_1[0])[0];
        if (!$v_0) {
            this.$3_1.widget().addClass("hideTree");
            return
        } else this.$3_1.widget().removeClass("hideTree");
        var $v_2 = $P_CRM(".node.inFocus", this.$2_1)[0],
            $v_3 = this.$6_1($v_2, this.$2_1[0])[0],
            $v_4 = ($v_3 - $v_1) / this.$5_1;
        $v_4 *= this.$0_1.isRTL ? -1 : 1;
        this.$3_1.scrollRoot($v_4)
    },
    $9_1: function() {
        var $v_0 = this.$1_1.width(), $v_1 = this.$2_1.width(), $v_2 = Math.max($v_0, $v_1), $v_3 = ($v_2 - $v_0) / 2;
        this.$1_1.css("padding-left", String.format("{0}px", $v_3));
        this.$1_1.css("padding-right", String.format("{0}px", $v_3));
        var $v_4 = ($v_2 - $v_1) / 2;
        this.$2_1.css("padding-left", String.format("{0}px", $v_4));
        this.$2_1.css("padding-right", String.format("{0}px", $v_4));
        var $v_5 = $P_CRM(".node", this.$1_1).first();
        if ($v_5.length === 1) {
            var $v_6 = $v_5.outerHeight(), $v_7 = this.$6_1($v_5[0], this.$1_1[0])[1];
            this.$2_1.css("top", String.format("{0}px", $v_6 + $v_7))
        }
    },
    destroy: function() {
        this.element.data("hierarchy-destroy-start", Date.now());
        this.scrollableTrees[0] = null;
        this.scrollableTrees[1] = null;
        this.$4_1.destroy();
        this.$3_1.destroy();
        this.element.empty();
        this.element.removeAttr(this.$7_1);
        this.element.removeClass("nonEmptyTopTree");
        $P_CRM.Widget.prototype.destroy.call(this);
        this.element.data("hierarchy-destroy-end", Date.now())
    },
    $A_1: function() {
        for (var $v_0 = 0; $v_0 < this.$0_1.data.length; $v_0++) {
            var $v_1 = this.$0_1.data[$v_0];
            if (!$v_1) continue;
            if ($v_1.recordId === "{00000000-0000-0000-0000-000000000000}") $v_1 = $v_1.children[0];
            if ($v_1.recordId === this.$0_1.heroNode) $v_1.inFocus = true;
            else if ($v_1.children)
                for (var $v_2 = 0; $v_2 < $v_1.children.length; $v_2++)
                    if ($v_1.children[$v_2].recordId === this.$0_1.heroNode) {
                        $v_1.children[$v_2].inFocus = true;
                        break
                    }
        }
    },
    $D_1: function() {
        var $v_0 = arguments[1];
        if ($v_0.pixelMoved) {
            var $v_1 = this.$0_1.isRTL ? 1 : -1;
            this.$3_1.scrollRoot($v_1 * $v_0.pixelMoved / this.$5_1)
        }
    },
    $B_1: function() {
        var $v_0 = arguments[1];
        if ($v_0.outOfViewport) this.$3_1.widget().addClass("hideTree");
        else this.$3_1.widget().removeClass("hideTree")
    },
    _setOption: function(attributeName, value) {
        $P_CRM.Widget.prototype._setOption.call(this, attributeName, value);
        if (attributeName === "childNodesVisible") {
            this.$4_1.option("childNodesVisible", this.$0_1.childNodesVisible);
            this.$3_1.option("childNodesVisible", this.$0_1.childNodesVisible)
        }
    },
    reload: function() {
        this.element.data("hierarchy-reload-start", Date.now());
        this.$4_1.reload();
        this.$3_1.reload();
        this.$9_1();
        this.$0_1.data[0] && this.$8_1();
        this.element.data("hierarchy-reload-end", Date.now())
    },
    $C_1: function($p0) {
        var $v_0 = $P_CRM($p0.currentTarget);
        while ($v_0.length === 1 && !$v_0.hasClass("scrollableTree")) $v_0 = $v_0.parent();
        var $v_1 = $v_0.data("ScrollableTree"), $v_2 = arguments[1], $v_3 = $v_2.deltaWidth;
        $v_3 /= 2;
        $v_3 /= this.$5_1;
        $v_1.scrollRoot(-1 * $v_3)
    }
};
CrmJQueryWidget.HierarchyOptions = function() {
    CrmJQueryWidget.HierarchyOptions.initializeBase(this);
    this.isRTL = false
};
CrmJQueryWidget.HierarchyOptions.prototype = { childNodesVisible: 0, heroNode: null, renderNode: null, data: null };
CrmJQueryWidget.Hierarchy.registerClass("CrmJQueryWidget.Hierarchy", $P_CRM.Widget);
CrmJQueryWidget.HierarchyOptions.registerClass("CrmJQueryWidget.HierarchyOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.Hierarchy.$$cctor()