Type.registerNamespace("Mscrm");
Mscrm.HierarchyViewDataProvider = function(dataManager) {
    this.$0_0 = dataManager;
    this.$1_0 = -1
};
Mscrm.HierarchyViewDataProvider.prototype = {
    $0_0: null,
    $1_0: 0,
    get_tileViewPageSize: function() { return this.$1_0 },
    set_tileViewPageSize: function(value) {
        this.$1_0 = value;
        return value
    },
    getSibling: function(guid, leftSibling, count) {
        var $v_0 = this.$0_0.getSiblingList(guid, leftSibling, count, true);
        if (leftSibling) {
            $v_0.get_children() && $v_0.get_children().reverse();
            $v_0.set_moreRightChildren(false)
        } else $v_0.set_moreLeftChildren(false);
        return this.$3_0($v_0)
    },
    getSiblingAsync: function(guid, leftSibling, count) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, String);
        if (count < 0) count = this.$1_0;
        var $v_1 = this.$0_0.getSiblingListAsync(guid, leftSibling, count, true), $$t_8 = this, $$t_9 = this;
        $v_1.then(function($p1_0) {
                if (leftSibling) {
                    $p1_0.get_children() && $p1_0.get_children().reverse();
                    $p1_0.set_moreRightChildren(false)
                } else $p1_0.set_moreLeftChildren(false);
                var $v_2 = $$t_8.$3_0($p1_0);
                $v_0.resolve($v_2)
            },
            function($p1_0) { $v_0.reject($p1_0) });
        return $v_0.promise()
    },
    getSiblingCount: function(guid, isLeft, callback) {
        var $v_0 = this.$0_0.getParentId(guid);
        return this.$0_0.getSiblingCount($v_0, guid, isLeft, callback)
    },
    getSiblingCountSync: function(guid, isLeft) {
        var $v_0 = this.$0_0.getParentId(guid);
        return this.$0_0.getSiblingCountSync($v_0, guid, isLeft)
    },
    getChildrenCount: function(guid, isParent) {
        if (isParent) guid = this.$0_0.getParentId(guid);
        return this.$0_0.getChildCount(guid)
    },
    getTree: function(heroNodeGuid, isRoot) {
        var $v_0 = null;
        if (isRoot) {
            var $v_1 = this.$0_0.getTreeHavingHeroNode(heroNodeGuid, 1);
            $v_0 = this.$2_0($v_1, isRoot, heroNodeGuid)
        } else {
            var $v_2 = this.$0_0.getParentId(heroNodeGuid);
            if (!isNullOrEmptyString($v_2)) {
                var $v_3 = this.$0_0.getTreeHavingHeroNode(heroNodeGuid, 2);
                $v_0 = this.$2_0($v_3, isRoot, heroNodeGuid);
                $v_2 = this.$0_0.getParentId($v_2);
                if (!isNullOrEmptyString($v_2)) {
                    var $v_4 = new CrmJQueryWidget.TreeNode;
                    $v_4.recordId = "{00000000-0000-0000-0000-000000000000}";
                    $v_4.children = new Array(1);
                    $v_4.children[0] = $v_0;
                    return $v_4
                }
            }
        }
        return $v_0
    },
    getTreeAsync: function(heroNodeGuid, isRoot) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(CrmJQueryWidget.TreeNode, String);
        if (isRoot) {
            var $v_1 = this.$0_0.getTreeHavingHeroNodeAsync(heroNodeGuid, 1, this.$1_0), $$t_D = this, $$t_E = this;
            $v_1.then(function($p1_0) {
                    var $v_2 = $$t_D.$2_0($p1_0, isRoot, heroNodeGuid);
                    $v_0.resolve($v_2)
                },
                function($p1_0) { $v_0.reject() })
        } else {
            var $v_3 = this.$0_0.getParentId(heroNodeGuid);
            if (!isNullOrEmptyString($v_3)) {
                var $v_4 = this.$0_0.getTreeHavingHeroNodeAsync(heroNodeGuid, 2, this.$1_0), $$t_F = this, $$t_G = this;
                $v_4.then(function($p1_0) {
                        var $v_5 = $$t_F.$2_0($p1_0, isRoot, heroNodeGuid);
                        $v_3 = $$t_F.$0_0.getParentId($v_3);
                        if (!isNullOrEmptyString($v_3)) {
                            var $v_6 = new CrmJQueryWidget.TreeNode;
                            $v_6.recordId = "{00000000-0000-0000-0000-000000000000}";
                            $v_6.children = new Array(1);
                            $v_6.children[0] = $v_5;
                            $v_0.resolve($v_6)
                        } else $v_0.resolve($v_5)
                    },
                    function($p1_0) { $v_0.reject($p1_0) })
            } else !IsNull($v_3) && !$v_3.length && $v_0.resolve(null)
        }
        return $v_0.promise()
    },
    $3_0: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.get_children().length; $v_1++) {
            var $v_2 = $p0.get_children()[$v_1], $v_3 = new CrmJQueryWidget.TreeNode;
            $v_3.recordId = $v_2.get_id();
            if ($v_2.get_totalChildCount() > 0) $v_3.children = new Array(0);
            Array.add($v_0, $v_3)
        }
        return $v_0
    },
    $2_0: function($p0, $p1, $p2) {
        if ($p1) $p2 = "";
        var $v_0 = new CrmJQueryWidget.TreeNode;
        $v_0.recordId = $p0.get_id();
        if ($p0.get_children() && $p0.get_children().length > 0 && $v_0.recordId !== $p2) {
            $v_0.children = new Array($p0.get_children().length);
            for (var $v_1 = 0; $v_1 < $p0.get_children().length; $v_1++) {
                var $v_2 = $p0.get_children()[$v_1], $v_3 = this.$2_0($v_2, $p1, $p2);
                $v_0.children[$v_1] = new CrmJQueryWidget.TreeNode;
                $v_0.children[$v_1] = $v_3
            }
        } else if ($p0.get_totalChildCount() > 0 && $v_0.recordId !== $p2) $v_0.children = new Array(0);
        return $v_0
    }
};
Mscrm.HierarchyViewDataProvider.registerClass("Mscrm.HierarchyViewDataProvider");
Mscrm.HierarchyViewDataProvider.emptyGuid = "{00000000-0000-0000-0000-000000000000}"