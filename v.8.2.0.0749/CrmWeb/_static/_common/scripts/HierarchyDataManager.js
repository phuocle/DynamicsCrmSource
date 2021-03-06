Type.registerNamespace("Mscrm");
Mscrm.IDataManager = function() {};
Mscrm.IDataManager.registerInterface("Mscrm.IDataManager");
Mscrm.IHierarchyManager = function() {};
Mscrm.IHierarchyManager.registerInterface("Mscrm.IHierarchyManager");
Mscrm.ChildrenListType = function() {};
Mscrm.ChildrenListType.prototype = { leftSiblingList: 0, rightSiblingList: 1, childrenList: 2 };
Mscrm.ChildrenListType.registerEnum("Mscrm.ChildrenListType", false);
Mscrm.CrmHierarchyDataManager = function() { Mscrm.CrmHierarchyDataManager.initializeBase(this) };
Mscrm.CrmHierarchyDataManager.prototype = {
    $a_2: null,
    $O_2: null,
    $U_2: 0,
    $E_2: 0,
    $A_2: 0,
    $P_2: false,
    $Q_2: null,
    $C_2: null,
    get_TargetEntityType: function() { return this.$U_2 },
    set_TargetEntityType: function(value) {
        this.$U_2 = Number.parseInvariant(value.toString());
        return value
    },
    get_HierarchyLevel: function() { return this.$E_2 },
    set_HierarchyLevel: function(value) {
        this.$E_2 = Number.parseInvariant(value.toString());
        return value
    },
    get_HierarchyData: function() { return this.$C_2 },
    set_HierarchyData: function(value) {
        this.$C_2 = value;
        return value
    },
    get_PageSize: function() { return this.$A_2 },
    set_PageSize: function(value) {
        this.$A_2 = Number.parseInvariant(value.toString());
        return value
    },
    get_parameters: function() { return this.$Q_2 },
    set_parameters: function(value) {
        this.$Q_2 = value;
        return value
    },
    get_isWorkflowSupported: function() { return this.$P_2 },
    set_isWorkflowSupported: function(value) {
        this.$P_2 = Boolean.parse(value.toString());
        return value
    },
    get_hierarchyDataManager: function() { return this.$a_2 },
    initialize: function() {
        Mscrm.CrmUIComponent.prototype.initialize.call(this);
        this.$O_2 = new Mscrm.HierarchyDataOptions;
        this.$O_2.$E_0 = this.$E_2;
        this.$O_2.$A_0 = this.$A_2;
        this.$O_2.$D_0 = this.$U_2;
        this.$O_2.$C_0 = this.$C_2;
        this.$C_2 = null;
        this.$a_2 = new Mscrm.HierarchyDataManager(this.$O_2);
        this.$Q_2 = {};
        if (this.$P_2) this.$Q_2["isWorkflowSupported"] = "true";
        else this.$Q_2["isWorkflowSupported"] = "false"
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    }
};
Mscrm.EntityAttributes = function() { this.$I_0 = {} };
Mscrm.EntityAttributes.prototype = {
    $I_0: null,
    get_attributes: function() { return this.$I_0 },
    set_attributes: function(value) {
        this.$I_0 = value;
        return value
    },
    getAttributeValue: function(attributeName) {
        if (attributeName in this.$I_0) return this.$I_0[attributeName];
        else return null
    },
    setAttributeValue: function(attributeName, attributeValue) {
        this.$I_0[attributeName] = attributeValue;
        return true
    }
};
Mscrm.HierarchyInfoBase = function() {};
Mscrm.HierarchyInfoBase.prototype = {
    $6_0: null,
    $1_0: null,
    $2_0: null,
    $5_0: 0,
    get_parentId: function() { return this.$6_0 },
    set_parentId: function(value) {
        this.$6_0 = value;
        return value
    },
    get_id: function() { return this.$1_0 },
    set_id: function(value) {
        this.$1_0 = value;
        return value
    },
    get_children: function() { return this.$2_0 },
    set_children: function(value) {
        this.$2_0 = value;
        return value
    },
    get_totalChildCount: function() { return this.$5_0 },
    set_totalChildCount: function(value) {
        this.$5_0 = value;
        return value
    }
};
Mscrm.HierarchyInfo = function() {
    Mscrm.HierarchyInfo.initializeBase(this);
    this.$2_0 = [];
    this.$3_1 = false;
    this.$4_1 = false;
    this.$5_0 = 0
};
Mscrm.HierarchyInfo.prototype = {
    $4_1: false,
    $3_1: false,
    get_moreLeftChildren: function() { return this.$4_1 },
    set_moreLeftChildren: function(value) {
        this.$4_1 = value;
        return value
    },
    get_moreRightChildren: function() { return this.$3_1 },
    set_moreRightChildren: function(value) {
        this.$3_1 = value;
        return value
    }
};
Mscrm.HierarchyDataOptions = function() {
    this.$E_0 = 3;
    this.$A_0 = 5
};
Mscrm.HierarchyDataOptions.prototype = {
    $D_0: 0,
    $b_0: null,
    $E_0: 0,
    $A_0: 0,
    $P_0: false,
    $C_0: null,
    get_entityTypeCode: function() { return this.$D_0 },
    set_entityTypeCode: function(value) {
        this.$D_0 = value;
        return value
    },
    get_orderByFieldName: function() { return this.$b_0 },
    set_orderByFieldName: function(value) {
        this.$b_0 = value;
        return value
    },
    get_hierarchyLevel: function() { return this.$E_0 },
    set_hierarchyLevel: function(value) {
        this.$E_0 = value;
        return value
    },
    get_pageSize: function() { return this.$A_0 },
    set_pageSize: function(value) {
        this.$A_0 = value;
        return value
    },
    get_isWorkflowSupported: function() { return this.$P_0 },
    set_isWorkflowSupported: function(value) {
        this.$P_0 = Boolean.parse(value.toString());
        return value
    },
    get_hierarchyData: function() { return this.$C_0 },
    set_hierarchyData: function(value) {
        this.$C_0 = value;
        return value
    }
};
Mscrm.HierarchyInfoInternal = function() {
    Mscrm.HierarchyInfoInternal.initializeBase(this);
    this.set_childrenListTowardsEnd([]);
    this.$0_1 = null;
    this.$3_1 = false;
    this.$4_1 = false;
    this.$5_0 = 0;
    this.$G_1 = 0;
    this.$V_1 = false;
    this.$L_1 = ""
};
Mscrm.HierarchyInfoInternal.prototype = {
    $4_1: false,
    $3_1: false,
    $L_1: null,
    $V_1: false,
    $G_1: 0,
    $0_1: null,
    get_childrenListTowardsBegin: function() { return this.$0_1 },
    set_childrenListTowardsBegin: function(value) {
        this.$0_1 = value;
        return value
    },
    get_childrenListTowardsEnd: function() { return this.$2_0 },
    set_childrenListTowardsEnd: function(value) {
        this.$2_0 = value;
        return value
    },
    get_moreLeftChildren: function() { return this.$4_1 },
    set_moreLeftChildren: function(value) {
        this.$4_1 = value;
        return value
    },
    get_moreRightChildren: function() { return this.$3_1 },
    set_moreRightChildren: function(value) {
        this.$3_1 = value;
        return value
    },
    get_pagingCookie: function() { return this.$L_1 },
    set_pagingCookie: function(value) {
        this.$L_1 = value;
        return value
    },
    get_totalRecordCountLimitExceeded: function() { return this.$V_1 },
    set_totalRecordCountLimitExceeded: function(value) {
        this.$V_1 = value;
        return value
    },
    get_totalLeftRecordCountNotFetched: function() { return this.$G_1 },
    set_totalLeftRecordCountNotFetched: function(value) {
        this.$G_1 = value;
        return value
    }
};
Mscrm.HierarchyDataManager = function(options) {
    this.$8_0 = options;
    this.$9_0 = {};
    this.$F_0 = {};
    this.$Z_0 = Mscrm.AggregatePerformanceMarkers.get_aggregateMarkers();
    if (options.$C_0) {
        var $v_0 = this.$N_0(options.$C_0);
        this.$W_0("", $v_0);
        this.$M_0(options.$C_0);
        options.$C_0 = null
    }
    this.$T_0 = true
};
Mscrm.HierarchyDataManager.prototype = {
    $8_0: null,
    $9_0: null,
    $F_0: null,
    $T_0: false,
    $Z_0: null,
    $M_0: function($p0) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("CopyEntityRecordData");
        for (var $v_0 = $p0.EntityData, $v_1 = $P_CRM.parseJSON($v_0), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2], $v_4 = new Mscrm.EntityAttributes;
            $v_4.$I_0 = $P_CRM.parseJSON($v_3.value.Attributes);
            var $v_5 = $v_3.key.substr(1, $v_3.key.length - 2).toLowerCase();
            if (!($v_5 in this.$F_0)) this.$F_0[$v_5] = $v_4
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("CopyEntityRecordData")
    },
    $N_0: function($p0) {
        var $v_0 = $p0.RelationshipData, $v_1 = $P_CRM.parseJSON($v_0);
        return $v_1
    },
    $W_0: function($p0, $p1) {
        if (null !== $p1) {
            var $v_0 = new Mscrm.HierarchyInfoInternal;
            $v_0.$1_0 = $p1.Id;
            $v_0.$L_1 = $p1.PagingCookie;
            $v_0.$5_0 = $p1.TotalChildrenCount;
            $v_0.$G_1 = $p1.TotalLeftChildrenCountNotFetched;
            $v_0.$4_1 = $p1.MoreLeftChildren;
            $v_0.$3_1 = $p1.MoreRightChildren;
            $v_0.$6_0 = $p0;
            this.$9_0[$v_0.$1_0.toLowerCase()] = $v_0;
            if ($p0 in this.$9_0) {
                var $v_1 = this.$9_0[$p0];
                Array.add($v_1.$2_0, $v_0)
            }
            if (null !== $p1.Children)
                for (var $v_2 = 0; $v_2 < $p1.Children.length; $v_2++) this.$W_0($p1.Id, $p1.Children[$v_2])
        }
    },
    $S_0: function($p0, $p1) {
        if (null === $p0) return;
        var $v_0 = this.$7_0($p0.Id.toString());
        if (null !== $v_0) {
            for (var $v_1 = 0; $v_1 < $p0.Children.length; $v_1++) {
                var $v_2 = $p0.Children[$v_1], $v_3 = new Mscrm.HierarchyInfoInternal;
                $v_3.$1_0 = $v_2.Id;
                $v_3.$L_1 = $v_2.PagingCookie;
                $v_3.$5_0 = $v_2.TotalChildrenCount;
                $v_3.$G_1 = $v_2.TotalLeftChildrenCountNotFetched;
                $v_3.$4_1 = $v_2.MoreLeftChildren;
                $v_3.$3_1 = $v_2.MoreRightChildren;
                $v_3.$6_0 = $v_0.$1_0;
                if (!$p1) {
                    if (null === $v_0.$0_1) $v_0.$0_1 = [];
                    Array.add($v_0.$0_1, $v_3)
                } else {
                    null === $v_0.get_childrenListTowardsEnd() && $v_0.set_childrenListTowardsEnd([]);
                    Array.add($v_0.get_childrenListTowardsEnd(), $v_3)
                }
                this.$9_0[$v_3.$1_0] = $v_3
            }
            switch ($p1) {
            case 0:
                $v_0.$4_1 = $p0.MoreLeftChildren;
                $v_0.$G_1 = $p0.TotalLeftChildrenCountNotFetched;
                break;
            case 1:
                $v_0.$3_1 = $p0.MoreRightChildren;
                break;
            case 2:
                $v_0.$4_1 = $p0.MoreLeftChildren;
                $v_0.$3_1 = $p0.MoreRightChildren;
                $v_0.$G_1 = $p0.TotalLeftChildrenCountNotFetched;
                break;
            default:
                break
            }
        }
    },
    $i_0: function($p0, $p1, $p2) {
        var $v_0 = this.$7_0($p1);
        if (null !== $v_0) {
            var $v_1 = "", $v_2 = null, $v_3 = null, $v_4 = 0;
            while (null !== $p0 && null !== $p0.Children) {
                if (!($p0.Id.toLowerCase() in this.$9_0)) {
                    $v_3 = new Mscrm.HierarchyInfoInternal;
                    $v_3.$1_0 = $p0.Id;
                    $v_3.$L_1 = $p0.PagingCookie;
                    $v_3.$5_0 = $p0.TotalChildrenCount;
                    $v_3.$G_1 = $p0.TotalLeftChildrenCountNotFetched;
                    $v_3.$4_1 = $p0.MoreLeftChildren;
                    $v_3.$3_1 = $p0.MoreRightChildren;
                    $v_3.$6_0 = $v_1;
                    this.$9_0[$v_3.$1_0.toLowerCase()] = $v_3;
                    if ($v_2 && !$v_2.$2_0.length) {
                        Array.add($v_2.$2_0, $v_3);
                        $v_2.$4_1 = true;
                        $v_2.$3_1 = true
                    }
                    $v_2 = $v_3
                }
                $v_1 = $p0.Id;
                if (null !== $p0.Children) $p0 = $p0.Children[0];
                else $p0 = null;
                ++$v_4
            }
            if ($v_4 < $p2) this.$T_0 = false;
            $v_0.$6_0 = $v_1;
            if ($v_3 && !$v_3.$2_0.length) {
                Array.add($v_3.$2_0, $v_0);
                $v_3.$4_1 = true;
                $v_3.$3_1 = true
            }
        }
    },
    $X_0: function($p0) {
        if ($p0 <= 0) return this.$8_0.$A_0;
        else return $p0
    },
    $k_0: function() {
        this.$9_0 = {};
        this.$F_0 = {}
    },
    $h_0: function($p0, $p1) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveHierarchyDataFromServer");
        var $v_0 = new RemoteCommand("HierarchyDataService", "RetrieveSubtree", null);
        $v_0.SetParameter("etc", this.$8_0.$D_0);
        $v_0.SetParameter("hero", $p0);
        $v_0.SetParameter("rootDepth", $p1);
        var $v_1 = $v_0.Execute();
        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveHierarchyDataFromServer");
        if ($v_1.Success) {
            Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveHierarchyDataFromServer:Processing");
            var $v_2 = this.$N_0($v_1.ReturnValue);
            this.$W_0("", $v_2);
            this.$M_0($v_1.ReturnValue);
            Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveHierarchyDataFromServer:Processing")
        } else throw Error.create("Error fetching data from server")
    },
    $r_0: function($p0, $p1) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveChildrenFromServer");
        var $v_0 = new RemoteCommand("HierarchyDataService", "RetrieveChildren", null);
        $v_0.SetParameter("etc", this.$8_0.$D_0);
        $v_0.SetParameter("parent", $p0);
        $v_0.SetParameter("childrenCount", $p1);
        var $v_1 = $v_0.Execute();
        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServer");
        if ($v_1.Success) {
            Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveChildrenFromServer:Processing");
            if (null !== $v_1.ReturnValue) {
                var $v_2 = this.$N_0($v_1.ReturnValue);
                this.$S_0($v_2, 2);
                this.$M_0($v_1.ReturnValue)
            }
            Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServer:Processing")
        } else throw Error.create("Error fetching data from server")
    },
    $s_0: function($p0, $p1) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveChildrenFromServerAsync");
        var $v_0 = new Mscrm.RemoteCommandJson("HierarchyDataService", "RetrieveChildren");
        $v_0.setParameter("etc", this.$8_0.$D_0);
        $v_0.setParameter("parent", $p0);
        $v_0.setParameter("childrenCount", $p1);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String),
            $v_2 = $v_0.execute(),
            $$t_9 = this,
            $$t_A = this;
        $v_2.then(function($p1_0) {
                var $v_3 = $$t_9.$N_0($p1_0), $v_4 = $$t_9.$7_0($v_3.Id.toLowerCase());
                if ($v_4.get_childrenListTowardsEnd().length > 0) {
                    $v_1.resolve("Data is already fetched");
                    Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServerAsync");
                    return
                }
                $$t_9.$S_0($v_3, 2);
                $$t_9.$M_0($p1_0);
                $v_1.resolve($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServerAsync")
            },
            function($p1_0) {
                $v_1.reject($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServerAsync")
            });
        return $v_1.promise()
    },
    $R_0: function($p0, $p1, $p2, $p3) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveSiblingFromServer");
        var $v_0 = new Mscrm.RemoteCommandJson("HierarchyDataService", "RetrieveSibling");
        $v_0.setParameter("etc", this.$8_0.$D_0);
        $v_0.setParameter("parentNodeId", $p0);
        $v_0.setParameter("relativeNodeId", $p1);
        $v_0.setParameter("isLeftSibling", $p2);
        $v_0.setParameter("count", $p3);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String),
            $v_2 = $v_0.execute(),
            $$t_D = this,
            $$t_E = this;
        $v_2.then(function($p1_0) {
                var $v_3 = $p2 ? 0 : 1, $v_4 = $$t_D.$N_0($p1_0), $v_5 = $$t_D.$7_0($v_4.Id.toLowerCase()), $v_6 = "";
                if ($p2) $v_6 = $$t_D.$J_0($v_5);
                else $v_6 = $$t_D.$K_0($v_5);
                if ($v_6 !== $p1) {
                    $v_1.resolve("Data is already fetched");
                    Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServerAsync");
                    return
                }
                $$t_D.$S_0($v_4, $v_3);
                $$t_D.$M_0($p1_0);
                $v_1.resolve($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServer")
            },
            function($p1_0) {
                $v_1.reject($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenFromServer")
            });
        return $v_1.promise()
    },
    $t_0: function($p0) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveRootTreeFromServer");
        var $v_0 = new Mscrm.RemoteCommandJson("HierarchyDataService", "RetrieveRootTree");
        $v_0.setParameter("etc", this.$8_0.$D_0);
        $v_0.setParameter("node", $p0);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(String, String),
            $v_2 = $v_0.execute(),
            $$t_7 = this,
            $$t_8 = this;
        $v_2.then(function($p1_0) {
                var $v_3 = $$t_7.$N_0($p1_0);
                $$t_7.$k_0();
                $$t_7.$W_0("", $v_3);
                $$t_7.$M_0($p1_0);
                $v_1.resolve($v_3.Id);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveRootTreeFromServer")
            },
            function($p1_0) {
                $v_1.reject($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveRootTreeFromServer")
            });
        return $v_1.promise()
    },
    $q_0: function($p0, $p1, $p2) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveChildrenAroundNodeFromServerAsync");
        var $v_0 = new Mscrm.RemoteCommandJson("HierarchyDataService", "RetrieveChildrenAroundHeroNode");
        $v_0.setParameter("etc", this.$8_0.$D_0);
        $v_0.setParameter("parent", $p0);
        $v_0.setParameter("hero", $p1);
        $v_0.setParameter("count", $p2);
        var $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Object, String),
            $v_2 = $v_0.execute(),
            $$t_C = this,
            $$t_D = this;
        $v_2.then(function($p1_0) {
                Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveChildrenAroundNodeFromServerAsync:Processing");
                if (null !== $p1_0) {
                    var $v_3 = $$t_C.$N_0($p1_0), $v_4 = $$t_C.$7_0($v_3.Id.toLowerCase());
                    if ($v_4.get_childrenListTowardsEnd().length > 1) {
                        $v_1.resolve("Data is already fetched");
                        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenAroundNodeFromServerAsync");
                        return
                    }
                    var $v_5 = null;
                    if ($p1 in $$t_C.$9_0) $v_5 = $$t_C.$9_0[$p1];
                    $v_4.$0_1 && Array.clear($v_4.$0_1);
                    $v_4.get_childrenListTowardsEnd() && Array.clear($v_4.get_childrenListTowardsEnd());
                    $$t_C.$S_0($v_3, 2);
                    $$t_C.$M_0($p1_0);
                    var $v_6 = $$t_C.$9_0[$p1];
                    if ($v_6) {
                        $v_6.$0_1 = $v_5.$0_1;
                        $v_6.set_childrenListTowardsEnd($v_5.get_childrenListTowardsEnd());
                        $v_6.$4_1 = $v_5.$4_1;
                        $v_6.$3_1 = $v_5.$3_1;
                        $v_6.$L_1 = $v_5.$L_1
                    }
                    $v_1.resolve($p1_0)
                }
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenAroundNodeFromServerAsync:Processing");
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenAroundNodeFromServerAsync")
            },
            function($p1_0) {
                $v_1.reject($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveChildrenAroundNodeFromServerAsync")
            });
        return $v_1.promise()
    },
    $Y_0: function($p0, $p1, $p2, $p3) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveSiblingFromServer");
        var $v_0 = new RemoteCommand("HierarchyDataService", "RetrieveSibling", null);
        $v_0.SetParameter("etc", this.$8_0.$D_0);
        $v_0.SetParameter("parentNodeId", $p0);
        $v_0.SetParameter("relativeNodeId", $p1);
        $v_0.SetParameter("isLeftSibling", $p2);
        $v_0.SetParameter("count", $p3);
        var $v_1 = $v_0.Execute();
        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveSiblingFromServer");
        if ($v_1.Success) {
            Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveSiblingFromServer:Processing");
            if (null !== $v_1.ReturnValue) {
                var $v_2 = $p2 ? 0 : 1, $v_3 = this.$N_0($v_1.ReturnValue);
                this.$S_0($v_3, $v_2);
                this.$M_0($v_1.ReturnValue)
            }
            Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveSiblingFromServer:Processing")
        } else throw Error.create("Error fetching data from server")
    },
    $m_0: function($p0, $p1, $p2, $p3) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveSiblingCountFromServer");
        var $v_0 = new RemoteCommand("HierarchyDataService", "GetSiblingCount", null);
        $v_0.SetParameter("etc", this.$8_0.$D_0);
        $v_0.SetParameter("parentId", $p0);
        $v_0.SetParameter("relativeId", $p1);
        $v_0.SetParameter("isLeft", $p2);
        if (null !== $p3) var $v_1 = $v_0.Execute($p3);
        else {
            var $v_2 = $v_0.Execute();
            if ($v_2.Success) if (null !== $v_2.ReturnValue) return $v_2.ReturnValue
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveSiblingCountFromServer");
        return -1
    },
    $g_0: function($p0) {
        if (!this.$T_0) return;
        Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveAncestorFromServer");
        var $v_0 = this.$8_0.$E_0, $v_1 = new RemoteCommand("HierarchyDataService", "RetrieveAncestors", null);
        $v_1.SetParameter("etc", this.$8_0.$D_0);
        $v_1.SetParameter("node", $p0);
        $v_1.SetParameter("count", $v_0);
        var $v_2 = $v_1.Execute();
        Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveAncestorFromServer");
        if ($v_2.Success) {
            Mscrm.AggregatePerformanceMarkers.beginMarker("RetrieveAncestorFromServer:Processing");
            if (null !== $v_2.ReturnValue) {
                var $v_3 = this.$N_0($v_2.ReturnValue);
                this.$i_0($v_3, $p0, $v_0);
                this.$M_0($v_2.ReturnValue)
            }
            Mscrm.AggregatePerformanceMarkers.endMarker("RetrieveAncestorFromServer:Processing")
        } else throw Error.create("Error fetching data from server")
    },
    $7_0: function($p0) {
        if ($p0 in this.$9_0) return this.$9_0[$p0];
        else return null
    },
    $e_0: function($p0) {
        if ($p0 in this.$F_0) return this.$F_0[$p0];
        else return null
    },
    $B_0: function($p0, $p1, $p2) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetChildPositionInternal");
        var $v_0 = -1, $v_1 = 0, $v_2 = false;
        $p2.val = false;
        var $v_3 = this.$7_0($p0);
        if (null === $v_3) return 0;
        var $v_4 = null;
        if (null !== $v_3.$0_1 && null !== $v_3.get_childrenListTowardsEnd())
            while ($v_1 < $v_3.$0_1.length && $v_1 < $v_3.get_childrenListTowardsEnd().length) {
                $v_4 = $v_3.$0_1[$v_1];
                if ($v_4.$1_0 === $p1) {
                    $v_0 = $v_1;
                    break
                }
                $v_4 = $v_3.get_childrenListTowardsEnd()[$v_1];
                if ($v_4.$1_0 === $p1) {
                    $v_0 = $v_1;
                    $v_2 = true;
                    break
                }
                ++$v_1
            }
        if ($v_0 === -1 && null !== $v_3.$0_1)
            for (var $v_5 = $v_1; $v_5 < $v_3.$0_1.length; $v_5++) {
                $v_4 = $v_3.$0_1[$v_5];
                if ($v_4.$1_0 === $p1) {
                    $v_0 = $v_5;
                    break
                }
            }
        if ($v_0 === -1 && null !== $v_3.get_childrenListTowardsEnd())
            for (var $v_6 = $v_1; $v_6 < $v_3.get_childrenListTowardsEnd().length; $v_6++) {
                $v_4 = $v_3.get_childrenListTowardsEnd()[$v_6];
                if ($v_4.$1_0 === $p1) {
                    $v_0 = $v_6;
                    $v_2 = true;
                    break
                }
            }
        if ($v_0 !== -1) {
            $p2.val = true;
            if (!$v_2) $v_0 = -($v_0 + 1)
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetChildPositionInternal");
        return $v_0
    },
    $J_0: function($p0) {
        var $v_0 = "";
        if (null !== $p0)
            if ($p0.$0_1 && $p0.$0_1.length > 0) $v_0 = $p0.$0_1[$p0.$0_1.length - 1].$1_0;
            else if ($p0
                .get_childrenListTowardsEnd() &&
                $p0.get_childrenListTowardsEnd().length > 0) $v_0 = $p0.get_childrenListTowardsEnd()[0].$1_0;
        return $v_0
    },
    $K_0: function($p0) {
        var $v_0 = "";
        if (null !== $p0 && $p0.get_childrenListTowardsEnd() && $p0.get_childrenListTowardsEnd().length > 0
        ) $v_0 = $p0.get_childrenListTowardsEnd()[$p0.get_childrenListTowardsEnd().length - 1].$1_0;
        return $v_0
    },
    $p_0: function($p0, $p1) {
        var $v_0 = this.$K_0($p0);
        if ($v_0 === $p1 && $p0.$3_1 || $v_0 !== $p1) return true;
        return false
    },
    $o_0: function($p0, $p1) {
        var $v_0 = this.$J_0($p0);
        if ($v_0 === $p1 && $p0.$4_1 || $v_0 !== $p1) return true;
        return false
    },
    $H_0: function($p0, $p1, $p2, $p3) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetChildrenListUsingPosition");
        var $v_0 = null, $v_1 = this.$7_0($p0);
        if (null === $v_1) return null;
        $v_0 = new Mscrm.HierarchyInfo;
        $v_0.$1_0 = $v_1.$1_0;
        $v_0.$6_0 = $v_1.$6_0;
        $v_0.$5_0 = $v_1.$5_0;
        var $v_2 = [];
        while ($p1 <= $p2)
            if ($p1 < 0) {
                if (null === $v_1.$0_1) {
                    $p1 = 0;
                    continue
                }
                var $v_3 = Math.abs($p1) - 1;
                if ($v_1.$0_1.length > $v_3) {
                    var $v_4 = $v_1.$0_1[$v_3];
                    if ($p3) {
                        var $v_5 = new Mscrm.HierarchyInfo;
                        $v_5.$1_0 = $v_4.$1_0;
                        $v_5.$6_0 = $v_4.$6_0;
                        $v_5.$5_0 = $v_4.$5_0;
                        Array.add($v_2, $v_5)
                    } else Array.add($v_2, $v_4.$1_0);
                    $p1++
                } else $p1 = -$v_1.$0_1.length
            } else if ($v_1.get_childrenListTowardsEnd().length > $p1) {
                var $v_6 = $v_1.get_childrenListTowardsEnd()[$p1];
                if ($p3) {
                    var $v_7 = new Mscrm.HierarchyInfo;
                    $v_7.$1_0 = $v_6.$1_0;
                    $v_7.$6_0 = $v_6.$6_0;
                    $v_7.$5_0 = $v_6.$5_0;
                    Array.add($v_2, $v_7)
                } else Array.add($v_2, $v_6.$1_0);
                $p1++
            } else $p2 = $v_1.get_childrenListTowardsEnd().length - 1;
        $v_0.$2_0 = $v_2;
        if ($v_2.length > 0) {
            var $v_8 = "";
            if ($p3) {
                var $v_9 = $v_2[0];
                $v_8 = $v_9.$1_0
            } else $v_8 = $v_2[0];
            $v_0.$4_1 = this.$o_0($v_1, $v_8);
            if ($p3) {
                var $v_A = $v_2[$v_2.length - 1];
                $v_8 = $v_A.$1_0
            } else $v_8 = $v_2[$v_2.length - 1];
            $v_0.$3_1 = this.$p_0($v_1, $v_8)
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetChildrenListUsingPosition");
        return $v_0
    },
    $l_0: function($p0, $p1, $p2) {
        if ($p1 < 0) $p1 = this.$8_0.$A_0;
        var $v_0 = this.$7_0($p0);
        if (null !== $v_0) {
            var $v_3 = $v_0.get_childrenListTowardsEnd().length;
            if ($v_0.$0_1 && $v_0.$0_1.length > 0) $v_3 += $v_0.$0_1.length;
            if (!$v_3 && $v_0.$5_0 > 0) this.$r_0($p0, $p1);
            else if ($v_3 < $p1 && $v_0.$3_1) {
                var $v_4 = this.$K_0($v_0);
                this.$Y_0($p0, $v_4, false, $p1 - $v_3)
            } else if ($v_3 < $p1 && $v_0.$4_1) {
                var $v_5 = this.$J_0($v_0);
                this.$Y_0($p0, $v_5, true, $p1 - $v_3)
            }
        }
        var $v_1 = 0, $v_2 = $p1 - 1;
        if ($v_0.$0_1 && $v_0.$0_1.length > 0) {
            $v_1 -= $v_0.$0_1.length;
            $v_2 -= $v_0.$0_1.length
        }
        return this.$H_0($p0, $v_1, $v_2, $p2)
    },
    $d_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$7_0($p0);
        if (null === $v_0) return null;
        $v_0 = this.$7_0($v_0.$6_0);
        if (null === $v_0) return null;
        if ($p2 < 0) $p2 = this.$8_0.$A_0;
        var $v_1 = false,
            $$t_B,
            $$t_C,
            $v_2 = ($$t_C = this.$B_0($v_0.$1_0, $p0, $$t_B = { val: $v_1 }), $v_1 = $$t_B.val, $$t_C);
        if (!$v_1) return null;
        var $v_3 = 0, $v_4 = 0;
        if ($p1) {
            $v_4 = $v_2 - 1;
            $v_3 = $v_4 - ($p2 - 1);
            if ($v_3 < 0 && $v_0.$4_1 && (null !== $v_0.$0_1 && Math.abs($v_3) > $v_0.$0_1.length || null === $v_0.$0_1)
            ) {
                var $v_5 = this.$J_0($v_0);
                this.$Y_0($v_0.$1_0, $v_5, true, $v_4 - $v_3 + 1)
            }
        } else {
            $v_3 = $v_2 + 1;
            $v_4 = $v_3 + $p2 - 1;
            if ($v_4 > $v_0.get_childrenListTowardsEnd().length - 1 && $v_0.$3_1) {
                var $v_6 = this.$K_0($v_0);
                this.$Y_0($v_0.$1_0, $v_6, false, $v_4 - $v_3 + 1)
            }
        }
        return this.$H_0($v_0.$1_0, $v_3, $v_4, $p3)
    },
    $n_0: function($p0, $p1, $p2, $p3) { return this.$m_0($p0, $p1, $p2, $p3) },
    $c_0: function($p0, $p1) {
        var $v_0 = [], $v_1 = $p1 > 0 ? $p1 : this.$8_0.$E_0, $v_2 = null, $v_3 = this.$7_0($p0);
        while ($v_3) {
            var $v_4 = $v_3.$1_0, $v_5 = $v_3.$6_0;
            Array.add($v_0, $v_4);
            if ($p1 > 0)
                if ($v_1 > 1) --$v_1;
                else break;
            $v_2 = $v_3;
            $v_3 = this.$7_0($v_5);
            if (null === $v_3 && !$v_2.$6_0.length) {
                this.$g_0($v_4);
                $v_3 = this.$7_0($v_2.$6_0)
            }
        }
        return $v_0
    },
    $j_0: function($p0) {
        var $v_0 = false, $$dict_3 = this.$9_0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            if (null !== $v_1) {
                $v_0 = true;
                break
            } else break
        }
        !$v_0 && this.$h_0($p0, this.$8_0.$E_0)
    },
    $f_0: function($p0, $p1, $p2, $p3) {
        $p2.val = 0;
        $p3.val = $p1 - 1;
        if ($p0.$0_1 && $p0.$0_1.length > 0) {
            $p2.val -= $p0.$0_1.length;
            $p3.val -= $p0.$0_1.length
        }
    },
    setHierarchyData: function(key, objectValue) { this.$9_0[key.toLowerCase()] = objectValue },
    setEntityData: function(key, objectValue) { this.$F_0[key.toLowerCase()] = objectValue },
    get_getPerfMarker: function() { return this.$Z_0 },
    clearInternalDataStorage: function() {
        this.$9_0 = {};
        this.$F_0 = {}
    },
    getParentId: function(guid) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetParentId");
        guid = guid.toLowerCase();
        var $v_0 = "", $v_1 = this.$7_0(guid);
        if (null !== $v_1)
            if ($v_1.$6_0.length) $v_0 = $v_1.$6_0;
            else {
                this.$g_0($v_1.$1_0);
                $v_0 = $v_1.$6_0
            }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetParentId");
        return $v_0
    },
    getRootTree: function(nodeGuid) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetRootTree");
        nodeGuid = nodeGuid.toLowerCase();
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.HierarchyInfo, String),
            $v_1 = this.$t_0(nodeGuid),
            $$t_6 = this,
            $$t_7 = this;
        $v_1.then(function($p1_0) {
                var $v_2 = $$t_6.$H_0($p1_0, 0, $$t_6.$8_0.$A_0 - 1, true);
                $v_0.resolve($v_2);
                Mscrm.AggregatePerformanceMarkers.endMarker("GetRootTree")
            },
            function($p1_0) {
                $v_0.reject($p1_0);
                Mscrm.AggregatePerformanceMarkers.endMarker("GetRootTree")
            });
        return $v_0.promise()
    },
    getSiblingsAroundNodeAsync: function(nodeGuid, count) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetSiblingsAroundNodeAsync");
        nodeGuid = nodeGuid.toLowerCase();
        var $v_0 = this.$X_0(count),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.HierarchyInfo, String),
            $v_2 = this.getParentId(nodeGuid),
            $v_3 = this.$7_0($v_2);
        if (!$v_3) {
            $v_1.resolve(null);
            return $v_1.promise()
        }
        var $v_4 = false,
            $v_5 = this.$J_0($v_3),
            $v_6 = this.$K_0($v_3),
            $$t_T,
            $$t_U,
            $v_7 = ($$t_U = this.$B_0($v_2, nodeGuid, $$t_T = { val: $v_4 }), $v_4 = $$t_T.val, $$t_U),
            $$t_V,
            $$t_W,
            $v_8 = ($$t_W = this.$B_0($v_2, $v_5, $$t_V = { val: $v_4 }), $v_4 = $$t_V.val, $$t_W),
            $$t_X,
            $$t_Y,
            $v_9 = ($$t_Y = this.$B_0($v_2, $v_6, $$t_X = { val: $v_4 }), $v_4 = $$t_X.val, $$t_Y),
            $v_A = false,
            $v_B = false,
            $v_C = 0,
            $v_D = 0;
        if ($v_3.$4_1 && Math.abs($v_8 - $v_7) < $v_0) $v_A = true;
        if ($v_3.$3_1 && Math.abs($v_9 - $v_7) < $v_0) $v_B = true;
        if ($v_A && $v_B) {
            var $v_E = this.$q_0($v_2, nodeGuid, $v_0);
            if ($v_E) {
                var $$t_p = this, $$t_q = this;
                $v_E.then(function($p1_0) {
                        var $$t_Z, $$t_a;
                        $v_7 = ($$t_a = $$t_p.$B_0($v_2, nodeGuid, $$t_Z = { val: $v_4 }), $v_4 = $$t_Z.val, $$t_a);
                        var $$t_b, $$t_c;
                        $v_8 = ($$t_c = $$t_p.$B_0($v_2, $$t_p.$J_0($v_3), $$t_b = { val: $v_4 }), $v_4 = $$t_b
                            .val, $$t_c);
                        var $$t_d, $$t_e;
                        $v_9 = ($$t_e = $$t_p.$B_0($v_2, $$t_p.$K_0($v_3), $$t_d = { val: $v_4 }), $v_4 = $$t_d
                            .val, $$t_e);
                        $v_C = Math.max($v_7 - $v_0, $v_8);
                        $v_D = Math.min($v_7 + $v_0, $v_9);
                        var $v_F = $$t_p.$H_0($v_2, $v_C, $v_D, true);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync");
                        $v_1.resolve($v_F)
                    },
                    function($p1_0) {
                        $v_1.reject($p1_0);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync")
                    })
            }
        } else if ($v_A) {
            var $v_G = this.$R_0($v_2, $v_5, true, $v_0);
            if ($v_G) {
                var $$t_r = this, $$t_s = this;
                $v_G.then(function($p1_0) {
                        var $$t_f, $$t_g;
                        $v_8 = ($$t_g = $$t_r.$B_0($v_2, $$t_r.$J_0($v_3), $$t_f = { val: $v_4 }), $v_4 = $$t_f
                            .val, $$t_g);
                        $v_C = Math.max($v_7 - $v_0, $v_8);
                        $v_D = Math.min($v_7 + $v_0, $v_9);
                        var $v_H = $$t_r.$H_0($v_2, $v_C, $v_D, true);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync");
                        $v_1.resolve($v_H)
                    },
                    function($p1_0) {
                        $v_1.reject($p1_0);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync")
                    })
            }
        } else if ($v_B) {
            var $v_I = this.$R_0($v_2, $v_6, false, $v_0);
            if ($v_I) {
                var $$t_t = this, $$t_u = this;
                $v_I.then(function($p1_0) {
                        var $$t_h, $$t_i;
                        $v_9 = ($$t_i = $$t_t.$B_0($v_2, $$t_t.$K_0($v_3), $$t_h = { val: $v_4 }), $v_4 = $$t_h
                            .val, $$t_i);
                        $v_C = Math.max($v_7 - $v_0, $v_8);
                        $v_D = Math.min($v_7 + $v_0, $v_9);
                        var $v_J = $$t_t.$H_0($v_2, $v_C, $v_D, true);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync");
                        $v_1.resolve($v_J)
                    },
                    function($p1_0) {
                        $v_1.reject($p1_0);
                        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync")
                    })
            }
        } else {
            var $$t_j, $$t_k;
            $v_7 = ($$t_k = this.$B_0($v_2, nodeGuid, $$t_j = { val: $v_4 }), $v_4 = $$t_j.val, $$t_k);
            var $$t_l, $$t_m;
            $v_8 = ($$t_m = this.$B_0($v_2, this.$J_0($v_3), $$t_l = { val: $v_4 }), $v_4 = $$t_l.val, $$t_m);
            var $$t_n, $$t_o;
            $v_9 = ($$t_o = this.$B_0($v_2, this.$K_0($v_3), $$t_n = { val: $v_4 }), $v_4 = $$t_n.val, $$t_o);
            $v_C = Math.max($v_7 - $v_0, $v_8);
            $v_D = Math.min($v_7 + $v_0, $v_9);
            var $v_K = this.$H_0($v_2, $v_C, $v_D, true);
            $v_1.resolve($v_K);
            Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingsAroundNodeAsync")
        }
        return $v_1.promise()
    },
    getTreeHavingHeroNode: function(heroGuid, level) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetTreeHavingHeroNode");
        heroGuid = heroGuid.toLowerCase();
        var $v_0 = false, $$dict_4 = this.$9_0;
        for (var $$key_5 in $$dict_4) {
            var $v_5 = { key: $$key_5, value: $$dict_4[$$key_5] };
            if (null !== $v_5) {
                $v_0 = true;
                break
            } else break
        }
        !$v_0 && this.$h_0(heroGuid, this.$8_0.$E_0);
        var $v_1 = this.$c_0(heroGuid, level);
        if (!$v_1.length) return null;
        $v_1.reverse();
        var $v_2 = null, $v_3 = null, $v_4 = this.$7_0($v_1[0]);
        if (null !== $v_4) {
            $v_3 = new Mscrm.HierarchyInfo;
            $v_2 = $v_3;
            $v_3.$1_0 = $v_4.$1_0;
            $v_3.$6_0 = $v_4.$6_0;
            $v_3.$5_0 = $v_4.$5_0
        }
        for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
            var $v_7 = "", $v_8 = $v_1[$v_6];
            if ($v_6 === $v_1.length - 1) {
                var $v_9 = $v_3.$5_0 > this.$8_0.$A_0 ? this.$8_0.$A_0 : $v_3.$5_0;
                if ($v_9) {
                    var $v_A = this.$l_0($v_8, $v_9, true);
                    $v_3.$2_0 = $v_A.$2_0;
                    $v_3.$3_1 = $v_A.$3_1
                }
            } else {
                $v_7 = $v_1[$v_6 + 1];
                var $v_B = this.$d_0($v_7, true, -1, true);
                if (null !== $v_B && $v_B.$2_0.length > 0) {
                    $v_3.$2_0 = $v_B.$2_0;
                    $v_3.$4_1 = $v_B.$4_1;
                    $v_B.$2_0 = null
                }
                var $v_C = new Mscrm.HierarchyInfo;
                $v_4 = this.$7_0($v_7);
                $v_C.$1_0 = $v_4.$1_0;
                $v_C.$6_0 = $v_4.$6_0;
                $v_C.$5_0 = $v_4.$5_0;
                Array.add($v_3.$2_0, $v_C);
                var $v_D = this.$d_0($v_7, false, -1, true);
                if (null !== $v_D && $v_D.$2_0.length > 0) {
                    for (var $v_E = 0; $v_E < $v_D.$2_0.length; $v_E++) Array.add($v_3.$2_0, $v_D.$2_0[$v_E]);
                    $v_D.$2_0 = null;
                    $v_3.$3_1 = $v_D.$3_1
                }
                $v_3 = $v_C
            }
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetTreeHavingHeroNode");
        return $v_2
    },
    getTreeHavingHeroNodeAsync: function(heroGuid, level, pageSize) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetTreeHavingHeroNodeAsync");
        heroGuid = heroGuid.toLowerCase();
        var $v_0 = this.$X_0(pageSize);
        this.$j_0(heroGuid);
        var $v_1 = this.$c_0(heroGuid, level),
            $v_2 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.HierarchyInfo, String);
        if (!$v_1.length) {
            $v_2.resolve(null);
            return $v_2.promise()
        }
        $v_1.reverse();
        var $v_3 = null, $v_4 = null, $v_5 = this.$7_0($v_1[0]);
        if (null !== $v_5) {
            $v_4 = new Mscrm.HierarchyInfo;
            $v_3 = $v_4;
            $v_4.$1_0 = $v_5.$1_0;
            $v_4.$6_0 = $v_5.$6_0;
            $v_4.$5_0 = $v_5.$5_0
        } else {
            $v_2.resolve(null);
            return $v_2.promise()
        }
        for (var $v_6 = [], $v_7 = null, $v_8 = 0; $v_8 < $v_1.length; $v_8++) {
            var $v_9 = "", $v_A = $v_1[$v_8];
            if ($v_8 === $v_1.length - 1) {
                $v_5 = this.$7_0($v_A);
                var $v_B = $v_5.$5_0 > $v_0 ? $v_0 : $v_5.$5_0;
                if ($v_B) {
                    $v_7 = this.getChildListAsync($v_A, $v_B, true);
                    Array.add($v_6, $v_7)
                }
            } else {
                $v_9 = $v_1[$v_8 + 1];
                $v_7 = this.getSiblingsAroundNodeAsync($v_9, $v_0);
                Array.add($v_6, $v_7)
            }
        }
        var $$t_M = this, $$t_N = this;
        $P_CRM.when.apply(null, $v_6).then(function($p1_0) {
                if (arguments.length !== $v_6.length) {
                    Mscrm.AggregatePerformanceMarkers.endMarker("GetTreeHavingHeroNodeAsync");
                    $v_2.resolve(null)
                }
                for (var $v_C = 0; $v_C < arguments.length; $v_C++) {
                    var $v_D = arguments[$v_C];
                    if ($v_C === $v_1.length - 1) {
                        var $v_E = $v_D;
                        if (null !== $v_E) {
                            $v_4.$2_0 = $v_E.$2_0;
                            $v_4.$4_1 = $v_E.$4_1;
                            $v_4.$3_1 = $v_E.$3_1
                        }
                    } else {
                        var $v_F = $v_D;
                        if (null !== $v_F) {
                            $v_4.$2_0 = $v_F.$2_0;
                            $v_4.$4_1 = $v_F.$4_1;
                            $v_4.$3_1 = $v_F.$3_1;
                            var $v_G = $v_4.$2_0.length - 1;
                            while ($v_1[$v_C + 1] !== $v_4.$2_0[$v_G].$1_0 && $v_G > 0) --$v_G;
                            $v_4 = $v_4.$2_0[$v_G]
                        } else {
                            Mscrm.AggregatePerformanceMarkers.endMarker("GetTreeHavingHeroNodeAsync");
                            $v_2.resolve(null)
                        }
                    }
                }
                Mscrm.AggregatePerformanceMarkers.endMarker("GetTreeHavingHeroNodeAsync");
                $v_2.resolve($v_3)
            },
            function($p1_0) {
                Mscrm.AggregatePerformanceMarkers.endMarker("GetTreeHavingHeroNodeAsync");
                $v_2.reject($p1_0)
            });
        return $v_2.promise()
    },
    getAncestorList: function(guid) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetAncestorList");
        guid = guid.toLowerCase();
        var $v_0 = this.$c_0(guid, -1);
        Mscrm.AggregatePerformanceMarkers.endMarker("GetAncestorList");
        return $v_0
    },
    getChildCount: function(parentGuid) {
        var $v_0 = this.$7_0(parentGuid);
        parentGuid = parentGuid.toLowerCase();
        if (null !== $v_0) return $v_0.$5_0;
        return -1
    },
    getSiblingCount: function(parentId, relativeId, isLeft, callback) {
        if (parentId && relativeId && !IsNull(isLeft)) return this.$n_0(parentId, relativeId, isLeft, callback);
        return -1
    },
    getSiblingCountSync: function(parentId, relativeId, isLeft) {
        var $v_0 = -1, $v_1 = false, $$t_8, $$t_9;
        $v_0 = ($$t_9 = this.$B_0(parentId, relativeId, $$t_8 = { val: $v_1 }), $v_1 = $$t_8.val, $$t_9);
        if ($v_1) {
            var $v_2 = this.$7_0(parentId);
            if ($v_2 && $v_2.$G_1 >= 0) {
                var $v_3 = $v_2.$0_1 && $v_2.$0_1.length > 0 ? $v_2.$0_1.length : 0, $v_4 = $v_2.$G_1 + $v_3 + $v_0;
                if (isLeft) return $v_4;
                else return $v_2.$5_0 - $v_4 - 1
            }
        }
        return -1
    },
    getChildListAsync: function(parentGuid, count, isMoreInfoRequired) {
        parentGuid = parentGuid.toLowerCase();
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.HierarchyInfo, String);
        count = this.$X_0(count);
        var $v_1 = null, $v_2 = this.$7_0(parentGuid), $v_3 = null;
        if (null !== $v_2) {
            var $v_4 = $v_2.get_childrenListTowardsEnd().length;
            if ($v_2.$0_1 && $v_2.$0_1.length > 0) $v_4 += $v_2.$0_1.length;
            if (!$v_4 && $v_2.$5_0 > 0) $v_3 = this.$s_0(parentGuid, count);
            else if ($v_4 < count && $v_2.$3_1) {
                var $v_5 = this.$K_0($v_2);
                $v_3 = this.$R_0(parentGuid, $v_5, false, count - $v_4)
            } else if ($v_4 < count && $v_2.$4_1) {
                var $v_6 = this.$J_0($v_2);
                $v_3 = this.$R_0(parentGuid, $v_6, true, count - $v_4)
            }
        }
        if ($v_3) {
            var $$t_K = this, $$t_L = this;
            $v_3.then(function($p1_0) {
                    var $v_7 = 0, $v_8 = count - 1, $$t_G, $$t_H;
                    $$t_K.$f_0($v_2, count, $$t_G = { val: $v_7 }, $$t_H = { val: $v_8 }), $v_7 = $$t_G
                        .val, $v_8 = $$t_H
                        .val;
                    $v_1 = $$t_K.$H_0(parentGuid, $v_7, $v_8, isMoreInfoRequired);
                    $v_0.resolve($v_1)
                },
                function($p1_0) { $v_0.reject("unable to get data") })
        } else {
            var $v_9 = 0, $v_A = count - 1, $$t_I, $$t_J;
            this.$f_0($v_2, count, $$t_I = { val: $v_9 }, $$t_J = { val: $v_A }), $v_9 = $$t_I.val, $v_A = $$t_J.val;
            $v_1 = this.$H_0(parentGuid, $v_9, $v_A, isMoreInfoRequired);
            $v_0.resolve($v_1)
        }
        return $v_0.promise()
    },
    getSiblingList: function(guid, leftSibling, count, isMoreInfoRequired) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetSiblingList");
        if (!count) return null;
        guid = guid.toLowerCase();
        var $v_0 = this.$d_0(guid, leftSibling, count, isMoreInfoRequired);
        leftSibling && $v_0.$2_0 && $v_0.$2_0.reverse();
        Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingList");
        return $v_0
    },
    getSiblingListAsync: function(guid, leftSibling, count, isMoreInfoRequired) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetSiblingListAsync");
        guid = guid.toLowerCase();
        var $v_0 = this.$7_0(guid),
            $v_1 = jQueryApi.jQueryDeferredFactory.Deferred(Mscrm.HierarchyInfo, String),
            $v_2 = null;
        if (!count || null === $v_0) {
            $v_1.reject();
            return $v_1.promise()
        }
        $v_0 = this.$7_0($v_0.$6_0);
        if (null === $v_0) {
            $v_1.reject();
            return $v_1.promise()
        }
        count = this.$X_0(count);
        var $v_3 = false,
            $$t_G,
            $$t_H,
            $v_4 = ($$t_H = this.$B_0($v_0.$1_0, guid, $$t_G = { val: $v_3 }), $v_3 = $$t_G.val, $$t_H);
        if (!$v_3) {
            $v_1.reject();
            return $v_1.promise()
        }
        var $v_5 = 0, $v_6 = 0;
        if (leftSibling) {
            $v_6 = $v_4 - 1;
            $v_5 = $v_6 - count + 1;
            if ($v_5 < 0 && $v_0.$4_1 && (null !== $v_0.$0_1 && Math.abs($v_5) > $v_0.$0_1.length || null === $v_0.$0_1)
            ) {
                var $v_8 = this.$J_0($v_0);
                $v_2 = this.$R_0($v_0.$1_0, $v_8, true, $v_6 - $v_5 + 1)
            }
        } else {
            $v_5 = $v_4 + 1;
            $v_6 = $v_5 + count - 1;
            if ($v_6 > $v_0.get_childrenListTowardsEnd().length - 1 && $v_0.$3_1) {
                var $v_9 = this.$K_0($v_0);
                $v_2 = this.$R_0($v_0.$1_0, $v_9, false, $v_6 - $v_5 + 1)
            }
        }
        var $v_7 = null;
        if (null !== $v_2) {
            var $$t_I = this, $$t_J = this;
            $v_2.then(function($p1_0) {
                    $v_7 = $$t_I.$H_0($v_0.$1_0, $v_5, $v_6, isMoreInfoRequired);
                    leftSibling && $v_7.$2_0 && $v_7.$2_0.reverse();
                    Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingListAsync");
                    $v_1.resolve($v_7)
                },
                function($p1_0) {
                    $v_1.reject($p1_0);
                    Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingListAsync")
                })
        } else {
            $v_7 = this.$H_0($v_0.$1_0, $v_5, $v_6, isMoreInfoRequired);
            leftSibling && $v_7.$2_0 && $v_7.$2_0.reverse();
            $v_1.resolve($v_7);
            Mscrm.AggregatePerformanceMarkers.endMarker("GetSiblingListAsync")
        }
        return $v_1.promise()
    },
    getData: function(entityGuid) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetData");
        entityGuid = entityGuid.toLowerCase();
        if (entityGuid in this.$F_0) {
            var $v_0 = this.$F_0[entityGuid];
            Mscrm.AggregatePerformanceMarkers.endMarker("GetData");
            return $v_0
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetData");
        return null
    },
    getEntityAttributeValue: function(entityGuid, attributeName) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("GetEntityAttributeValue");
        entityGuid = entityGuid.toLowerCase();
        var $v_0 = this.$e_0(entityGuid);
        if (null !== $v_0) {
            var $v_1 = $v_0.$I_0[attributeName];
            Mscrm.AggregatePerformanceMarkers.endMarker("GetEntityAttributeValue");
            return $v_1
        }
        Mscrm.AggregatePerformanceMarkers.endMarker("GetEntityAttributeValue");
        return null
    },
    displayName: function(entityGuid) {
        Mscrm.AggregatePerformanceMarkers.beginMarker("DisplayName");
        entityGuid = entityGuid.toLowerCase();
        var $v_0 = this.$e_0(entityGuid), $v_1 = "";
        if (null !== $v_0) $v_1 = Mscrm.Utilities.getDataForTile($v_0.$I_0, "_entity", "Name", false);
        Mscrm.AggregatePerformanceMarkers.endMarker("DisplayName");
        return $v_1
    }
};
Type.registerNamespace("Mscrm.Hierarchy");
Mscrm.Hierarchy.HierarchyData = function() {};
Type.registerNamespace("Mscrm.Hierarchy.NestedFormatter");
Mscrm.Hierarchy.NestedFormatter.Relationship1N = function() {};
Type.registerNamespace("Mscrm.Hierarchy.EntityFormatter");
Mscrm.Hierarchy.EntityFormatter.EntityData = function() {};
Mscrm.CrmHierarchyDataManager.registerClass("Mscrm.CrmHierarchyDataManager", Mscrm.CrmUIComponent);
Mscrm.EntityAttributes.registerClass("Mscrm.EntityAttributes");
Mscrm.HierarchyInfoBase.registerClass("Mscrm.HierarchyInfoBase");
Mscrm.HierarchyInfo.registerClass("Mscrm.HierarchyInfo", Mscrm.HierarchyInfoBase);
Mscrm.HierarchyDataOptions.registerClass("Mscrm.HierarchyDataOptions");
Mscrm.HierarchyInfoInternal.registerClass("Mscrm.HierarchyInfoInternal", Mscrm.HierarchyInfoBase);
Mscrm.HierarchyDataManager.registerClass("Mscrm.HierarchyDataManager",
    null,
    Mscrm.IDataManager,
    Mscrm.IHierarchyManager);
Mscrm.Hierarchy.HierarchyData.registerClass("Mscrm.Hierarchy.HierarchyData");
Mscrm.Hierarchy.NestedFormatter.Relationship1N.registerClass("Mscrm.Hierarchy.NestedFormatter.Relationship1N");
Mscrm.Hierarchy.EntityFormatter.EntityData.registerClass("Mscrm.Hierarchy.EntityFormatter.EntityData")