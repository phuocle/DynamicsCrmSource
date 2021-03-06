Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.ScrollableTree = function(scrollableTreeOptions, element) {
    this.$$d_$M_2 = Function.createDelegate(this, this.$M_2);
    CrmJQueryWidget.ScrollableTree.initializeBase(this, [scrollableTreeOptions, element])
};
CrmJQueryWidget.ScrollableTree.$$cctor = function() {
    jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.ScrollableTree)
};
CrmJQueryWidget.ScrollableTree.prototype = {
    $C_2: null,
    $2_2: null,
    $0_2: null,
    $8_2: null,
    $9_2: null,
    $1_2: null,
    $6_2: 0,
    $4_2: 0,
    set_$F_2: function($p0) {
        this.$4_2 = $p0;
        this.$1_2.data("_offsetLeft", this.$4_2);
        return $p0
    },
    $3_2: 0,
    set_$A_2: function($p0) {
        this.$3_2 = $p0;
        this.$9_2.data("_offsetLeft", this.$3_2);
        return $p0
    },
    $7_2: 0,
    $5_2: 0,
    _create: function() {
        this.$2_2 = this.options;
        if (this.$E_2(this.$2_2.data)) return;
        this.element.data("scrollableTree-create-start", Date.now());
        if (!this.$K_2()) throw Error.create("ScrollableTree accepts data for one-level tree only");
        CrmJQueryWidget.Tree.prototype._create.call(this);
        this.$C_2 = Math.floor(Math.random() * 65535).toString();
        this.element.attr("scrollableTreeId", this.$C_2);
        this.element.addClass("scrollableTree");
        this.$8_2 = $P_CRM(".childrenContainerDiv", this.element).first();
        this.$1_2 = $P_CRM(".node", this.element).first();
        this.$8_2.children().first().attr("parentChildConnector", "");
        this.$0_2 = this.$I_2();
        this.$7_2 = this.$1_2.outerWidth(true);
        this.$5_2 = this.$1_2.position().left + this.$7_2 / 2;
        this.set_$F_2(this.$1_2.position().left);
        this.$9_2 = this.$8_2.find("ul");
        this.$9_2.length > 0 && this.set_$A_2(this.$9_2.position().left);
        this.$D_2();
        this.element.data("scrollableTree-create-end", Date.now())
    },
    destroy: function() {
        this.element.data("scrollableTree-destroy-start", Date.now());
        this.element.removeClass("scrollableTree");
        CrmJQueryWidget.Tree.prototype.destroy.call(this);
        this.element.empty();
        this.$0_2 = null;
        this.element.data("scrollableTree-destroy-end", Date.now())
    },
    scrollChildren: function(scrollBy) {
        if (!this.$0_2) return;
        this.element.data("scrollableTree-scrollChildren-start", Date.now());
        var $v_0 = new CrmJQueryWidget.ChildrenScrollStartEventData;
        $v_0.scrollBy = scrollBy;
        this._trigger("childrenScrollStart", null, $v_0);
        var $v_1 = this.$0_2.scroll(scrollBy);
        this.set_$A_2(this.$3_2 + $v_1);
        this.$D_2();
        var $v_2 = new CrmJQueryWidget.ChildrenScrollEndEventData;
        $v_2.pixelMoved = $v_1;
        this._trigger("childrenScrollEnd", null, $v_2);
        this.element.data("scrollableTree-scrollChildren-end", Date.now())
    },
    scrollRoot: function(scrollBy) {
        this.element.data("scrollableTree-scrollRoot-start", Date.now());
        this._trigger("rootScrollStart");
        scrollBy *= this.$2_2.isRTL ? -1 : 1;
        this.$N_2(scrollBy);
        this.$D_2();
        var $v_0 = new CrmJQueryWidget.RootScrollEndEventData;
        $v_0.outOfViewport = this.$L_2();
        this._trigger("rootScrollEnd", null, $v_0);
        this.element.data("scrollableTree-scrollRoot-end", Date.now())
    },
    $K_2: function() {
        var $v_0 = this.$2_2.data;
        if (this.$E_2($v_0.children)) return true;
        if ($v_0.recordId === "{00000000-0000-0000-0000-000000000000}") $v_0 = $v_0.children[0];
        return this.$J_2($v_0)
    },
    $J_2: function($p0) {
        if (this.$E_2($p0.children)) return true;
        for (var $$arr_1 = $p0.children, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            if (!(this.$E_2($v_0.children) || !$v_0.children.length)) return false
        }
        return true
    },
    $E_2: function($p0) { return typeof $p0 === "undefined" || !$p0 },
    $N_2: function($p0) {
        var $v_0 = -1 * $p0 * this.$7_2;
        this.set_$F_2(this.$4_2 + $v_0);
        this.$6_2 += $v_0;
        this.$1_2.css("left", this.$6_2.toString() + "px")
    },
    $L_2: function() {
        var $v_0 = this.element.outerWidth(true),
            $v_1 = this.$4_2,
            $v_2 = this.$1_2[0].offsetParent,
            $v_3 = this.element[0];
        while ($v_2 && $v_2 !== $v_3) {
            $v_1 += $v_2.offsetLeft;
            $v_2 = $v_2.offsetParent
        }
        $v_1 += this.$7_2 / 2;
        if ($v_1 < 0 || $v_1 > $v_0) return true;
        return false
    },
    $D_2: function() {
        var $v_0 = this.$4_2 + this.$7_2 / 2 - this.$5_2, $v_1 = -1 * this.$3_2 + this.$5_2;
        $v_1 = $v_1 + ($v_0 < 0 ? $v_0 : 0);
        var $v_2 = $v_0 < 0 ? 1 : 0,
            $v_3 = $v_0 < 0 ? 0 : 1,
            $v_4 = String
                .format("[{4}]::before {{\r\n\t\t\t\t\t\t\t\tleft: {0}px !important;\r\n\t\t\t\t\t\t\t\twidth: {1}px !important;\r\n\t\t\t\t\t\t\t\tborder-left-width: {2}px !important;\r\n\t\t\t\t\t\t\t\tborder-right-width: {3}px !important;\r\n\t\t\t\t\t\t\t\tborder-bottom-width: 1px !important;\r\n\t\t\t\t\t\t\t}}", $v_1, Math.abs($v_0), $v_2, $v_3, "parentChildConnector");
        this.$H_2("ulBefore", $v_4)
    },
    $H_2: function($p0, $p1) {
        $p0 += this.$C_2;
        this.element.find("#" + $p0).remove();
        var $v_0 = document.createElement("style");
        $v_0.id = $p0;
        var $v_1 = String.format("[{0}='{1}'] ", "scrollableTreeId", this.$C_2);
        $v_0.innerHTML = $v_1 + $p1;
        this.element.first().prepend($P_CRM($v_0))
    },
    $I_2: function() {
        var $v_0 = new CrmJQueryWidget.ScrollerOptions;
        $v_0.isRTL = this.$2_2.isRTL;
        $v_0.reload = this.$$d_$M_2;
        $v_0.itemsVisible = this.$2_2.childNodesVisible;
        return jQueryUIApi.WidgetFactory.createInstance(CrmJQueryWidget.Scroller, this.$8_2.get(0), $v_0)
    },
    _setOption: function(attributeName, value) {
        $P_CRM.Widget.prototype._setOption.call(this, attributeName, value);
        this.$0_2 &&
            attributeName === "childNodesVisible" &&
            this.$0_2.option("itemsVisible", this.$2_2.childNodesVisible)
    },
    reload: function() {
        if (!this.$0_2) return;
        this.element.data("scrollableTree-reload-start", Date.now());
        this.$0_2.reload();
        this._trigger("reload", null, null);
        this.element.data("scrollableTree-reload-end", Date.now())
    },
    $M_2: function() {
        var $v_0 = arguments[1];
        this.set_$A_2(this.$3_2 + $v_0.pixelMoved);
        if (this.$2_2.isRTL) {
            this.$6_2 += $v_0.deltaWidth / 2;
            this.set_$A_2(this.$3_2 + $v_0.deltaWidth);
            this.$5_2 += $v_0.deltaWidth;
            this.set_$F_2(this.$4_2 + $v_0.deltaWidth)
        } else {
            this.$6_2 -= $v_0.deltaWidth / 2;
            this.set_$A_2(this.$3_2 + 0);
            this.$5_2 += 0;
            this.set_$F_2(this.$4_2 + 0)
        }
        this.$1_2.css("left", this.$6_2.toString() + "px");
        this.$D_2()
    }
};
CrmJQueryWidget.RootScrollEndEventData = function() {};
CrmJQueryWidget.RootScrollEndEventData.prototype = { outOfViewport: false };
CrmJQueryWidget.ChildrenScrollStartEventData = function() {};
CrmJQueryWidget.ChildrenScrollStartEventData.prototype = { scrollBy: 0 };
CrmJQueryWidget.ChildrenScrollEndEventData = function() {};
CrmJQueryWidget.ChildrenScrollEndEventData.prototype = { pixelMoved: 0 };
CrmJQueryWidget.ScrollableTreeOptions = function() { CrmJQueryWidget.ScrollableTreeOptions.initializeBase(this) };
CrmJQueryWidget.ScrollableTreeOptions.prototype = {
    childNodesVisible: 0,
    reload: null,
    rootScrollStart: null,
    rootScrollEnd: null,
    childrenScrollStart: null,
    childrenScrollEnd: null
};
CrmJQueryWidget.ScrollableTree.registerClass("CrmJQueryWidget.ScrollableTree", CrmJQueryWidget.Tree);
CrmJQueryWidget.RootScrollEndEventData.registerClass("CrmJQueryWidget.RootScrollEndEventData");
CrmJQueryWidget.ChildrenScrollStartEventData.registerClass("CrmJQueryWidget.ChildrenScrollStartEventData");
CrmJQueryWidget.ChildrenScrollEndEventData.registerClass("CrmJQueryWidget.ChildrenScrollEndEventData");
CrmJQueryWidget.ScrollableTreeOptions.registerClass("CrmJQueryWidget.ScrollableTreeOptions",
    CrmJQueryWidget.TreeOptions);
CrmJQueryWidget.ScrollableTree.$$cctor()