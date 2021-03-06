Type.registerNamespace("CrmJQueryWidget");
CrmJQueryWidget.Tree = function(treeOptions, element) {
    CrmJQueryWidget.Tree.initializeBase(this, [treeOptions, element])
};
CrmJQueryWidget.Tree.$$cctor = function() { jQueryUIApi.WidgetFactory.register(CrmJQueryWidget.Tree) };
CrmJQueryWidget.Tree.prototype = {
    _create: function() {
        this.element.data("tree-create-start", Date.now());
        $P_CRM.Widget.prototype._create.call(this);
        var $v_0 = this.options.isRTL.toString();
        this.element.addClass("treeWidget");
        this.element.attr("rtl", $v_0);
        if (!this.element.children().length) {
            this.$5_1(this.options.data);
            this._trigger("DOMReady")
        }
        this.element.data("tree-create-end", Date.now())
    },
    destroy: function() {
        this.element.data("tree-destroy-start", Date.now());
        this.element.empty();
        this.element.removeAttr("rtl");
        this.element.removeClass("treeWidget");
        $P_CRM.Widget.prototype.destroy.call(this);
        this.element.data("tree-destroy-end", Date.now())
    },
    appendChildNodes: function(parentId, children) {
        var $v_0 = this.$4_1(parentId), $v_1 = this.$2_1(children);
        $v_0.append($v_1)
    },
    prependChildNodes: function(parentId, children) {
        var $v_0 = this.$4_1(parentId), $v_1 = this.$2_1(children);
        $v_0.prepend($v_1)
    },
    removeNode: function(recordId) {
        var $v_0 = this.element.find(String.format("[data-recordid = {0}]", recordId)).parent();
        $v_0.empty();
        $v_0.remove()
    },
    $4_1: function($p0) {
        var $v_0 = this.element.find(String.format("[data-recordid = {0}]", $p0));
        return $v_0.parent().find(".childrenContainerDiv > ul").first()
    },
    $5_1: function($p0) {
        if (!$p0) return;
        var $v_0 = $p0.recordId === "{00000000-0000-0000-0000-000000000000}";
        if ($v_0) $p0 = $p0.children[0];
        var $v_1 = this.$3_1();
        this.element.append($P_CRM($v_1));
        $v_1.className += " parent";
        var $v_2 = this.$0_1($p0);
        $v_1.appendChild($v_2);
        $v_2.className += $v_0 ? " moreParent" : "";
        $v_2.className += " root";
        this.$1_1($v_2, $p0)
    },
    $1_1: function($p0, $p1) {
        if (!$p1.children) return;
        var $v_0 = document.createElement("div");
        $v_0.className += " childrenContainerDiv";
        var $v_1 = this.$3_1();
        $v_0.appendChild($v_1);
        $p0.appendChild($v_0);
        for (var $$arr_4 = $p1.children, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6], $v_3 = this.$0_1($v_2);
            $v_1.appendChild($v_3);
            if ($v_2.children)
                if (!$v_2.children.length) $v_3.className += " moreChildren";
                else this.$1_1($v_3, $v_2)
        }
    },
    $3_1: function() {
        var $v_0 = document.createElement("ul");
        return $v_0
    },
    $0_1: function($p0) {
        var $v_0 =
                "\r\n\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t<div class='node {0}' data-recordid='{1}' id='tree_{1}'>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class='nodeWidgetContainer'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- node widget rendering goes here -->\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</li>",
            $v_1 = $P_CRM(String.format($v_0, $p0.inFocus ? "inFocus" : "", $p0.recordId));
        this.options.renderNode($p0, $v_1.find(".nodeWidgetContainer").get(0));
        return $v_1[0]
    },
    $2_1: function($p0) {
        for (var $v_0 = document.createDocumentFragment(),
            $v_1 = null,
            $$arr_3 = $p0,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            $v_1 = this.$0_1($v_2);
            if ($v_2.children) if (!$v_2.children.length) $v_1.className += " moreChildren";
            $v_0.appendChild($v_1)
        }
        return $v_0
    }
};
CrmJQueryWidget.TreeOptions = function() {
    CrmJQueryWidget.TreeOptions.initializeBase(this);
    this.isRTL = false;
    this.isVertical = false
};
CrmJQueryWidget.TreeOptions.prototype = { isVertical: false, renderNode: null, data: null };
CrmJQueryWidget.TreeNode = function() {};
CrmJQueryWidget.TreeNode.prototype = { recordId: null, inFocus: false, children: null };
CrmJQueryWidget.Tree.registerClass("CrmJQueryWidget.Tree", $P_CRM.Widget);
CrmJQueryWidget.TreeOptions.registerClass("CrmJQueryWidget.TreeOptions", jQueryUIApi.WidgetOptions);
CrmJQueryWidget.TreeNode.registerClass("CrmJQueryWidget.TreeNode");
CrmJQueryWidget.Tree.emptyGuid = "{00000000-0000-0000-0000-000000000000}";
CrmJQueryWidget.Tree.$$cctor()