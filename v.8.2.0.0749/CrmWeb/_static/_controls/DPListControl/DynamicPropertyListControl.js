Type.registerNamespace("Mscrm");
Mscrm.IDynamicPropertyInstanceDataProvider = function() {};
Mscrm.IDynamicPropertyInstanceDataProvider.registerInterface("Mscrm.IDynamicPropertyInstanceDataProvider");
Mscrm.DynamicPropertyInstanceDataProviderType = function() {};
Mscrm.DynamicPropertyInstanceDataProviderType.prototype = { dynamicProperty: 0, dummy: 1 };
Mscrm.DynamicPropertyInstanceDataProviderType.registerEnum("Mscrm.DynamicPropertyInstanceDataProviderType", false);
Mscrm.DynamicPropertyListControlRenderType = function() {};
Mscrm.DynamicPropertyListControlRenderType.prototype = { runtime: 0, design: 1, designPreview: 2 };
Mscrm.DynamicPropertyListControlRenderType.registerEnum("Mscrm.DynamicPropertyListControlRenderType", false);
Mscrm.DynamicPropertyDataProvider = function() {};
Mscrm.DynamicPropertyDataProvider.$q = function($p0, $p1, $p2, $p3) {
    var $v_0 = $p2.DataType;
    $p0.Value = null;
    var $v_1 = Mscrm.DynamicProperty.Utilities.$2[$v_0];
    $p2.DefaultValue = $p3.getValue("defaultvalue" + $v_1);
    Mscrm.DynamicPropertyDataProvider.$P($p2, $p3, $v_0, $v_1);
    if (!$v_0) {
        var $v_2 = $p1.getValue("valueinteger");
        if (!IsNull($v_2)) $p0.Value = $v_2;
        else $p0.Value = -1
    } else $p0.Value = $p1.hasField("value" + $v_1) ? $p1.getValue("value" + $v_1) : null
};
Mscrm.DynamicPropertyDataProvider.$P = function($p0, $p1, $p2, $p3) {
    if ($p2 === 3) $p0.Max = IsNull($p1.getValue("maxlengthstring")) ? 500 : $p1.getValue("maxlengthstring");
    else if ($p2 === 4) {
        $p0.Min = IsNull($p1.getValue("minvalue" + $p3)) ? -2147483648 : $p1.getValue("minvalue" + $p3);
        $p0.Max = IsNull($p1.getValue("maxvalue" + $p3)) ? 2147483647 : $p1.getValue("maxvalue" + $p3)
    } else if ($p2 === 1 || $p2 === 2) {
        $p0.Min = IsNull($p1.getValue("minvalue" + $p3)) ? -1e11 : $p1.getValue("minvalue" + $p3);
        $p0.Max = IsNull($p1.getValue("maxvalue" + $p3)) ? 1e11 : $p1.getValue("maxvalue" + $p3);
        $p0.Precision = IsNull($p1.getValue("precision")) ? 2 : parseInt($p1.getValue("precision").toString())
    }
};
Mscrm.DynamicPropertyDataProvider.$p = function($p0, $p1, $p2) {
    if (!IsNull($p1)) {
        var $v_0 = [], $v_1 = null;
        if (!IsNull($p2
            .getValue("defaultvalueoptionset")))
            $v_1 = $p2.getValue("defaultvalueoptionset").toString().split(":")[1].toString();
        for (var $$arr_5 = $p1.get_entities(), $$len_6 = $$arr_5.length, $$idx_7 = 0; $$idx_7 < $$len_6; ++$$idx_7) {
            var $v_2 = $$arr_5[$$idx_7], $v_3 = new Mscrm.DynamicPropertyOptionSetKeyModel;
            $v_3.Label = $v_2.getValue("dynamicpropertyoptionname").toString();
            $v_3.Value = $v_2.getValue("dynamicpropertyoptionvalue");
            $v_3.Id = $v_2.getValue("dynamicpropertyoptionsetvalueid").toString();
            var $v_4 = $v_2.getValue("dynamicpropertyoptionsetvalueid").toString();
            if (!IsNull($v_4) && !IsNull($v_1) && $v_4 === $v_1
            ) $p0.DefaultValue = $v_2.getValue("dynamicpropertyoptionvalue");
            else if (IsNull($v_1)) $p0.DefaultValue = -1;
            Array.add($v_0, $v_3)
        }
        $p0.OptionSetKeyList = $v_0
    } else $p0.OptionSetKeyList = null
};
Mscrm.DynamicPropertyDataProvider.$d = function($p0) {
    var $v_0 = $p0.OptionSetKeyList;
    if (!IsNull($v_0))
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2.Value === $p0.DefaultValue) return $v_2.Id
        }
    return null
};
Mscrm.DynamicPropertyDataProvider.prototype = {
    $0_0: null,
    getProperties: function(targetId, entityTypeCode, getDpi, isPreview, callback, errorCallback) {
        !IsNull(this.$0_0) && Array.clear(this.$0_0);
        this.$0_0 = [];
        var $$t_E = this,
            $v_0 = function($p1_0) { errorCallback($p1_0) },
            $v_1 = Xrm.Internal.getEntityName(entityTypeCode);
        if (!isNullOrEmptyString($v_1) && !isNullOrEmptyString(targetId)) {
            var $v_2 = new Xrm.Objects.EntityReference($v_1, new Microsoft.Crm.Client.Core.Framework.Guid(targetId));
            if (getDpi) {
                var $$t_F = this;
                Xrm.Internal.messages.retrieveProductProperties($v_2).then(function($p1_0) {
                        $$t_F.$n_0($p1_0);
                        callback($$t_F.$0_0)
                    },
                    $v_0)
            } else {
                var $v_3, $v_4 = Xrm.Page.context.getQueryStringParameters();
                if (isPreview && !Mscrm.InternalUtilities.JSTypes.isNull($v_4["IsDraftProduct"])
                ) $v_3 = Boolean.parse($v_4["IsDraftProduct"].toString());
                else $v_3 = Mscrm.DynamicProperty.Utilities.isDraftBundle();
                var $$t_G = this;
                Xrm.Internal.messages.retrieveEntityDynamicPropertyDefinitions($v_2, Boolean.parse($v_3.toString()))
                    .then(function($p1_0) {
                            $$t_G.$o_0($p1_0);
                            callback($$t_G.$0_0)
                        },
                        $v_0)
            }
        }
    },
    $n_0: function($p0) {
        for (var $v_0 = $p0,
            $v_1 = $v_0.entityCollection.get_entities(),
            $$arr_3 = $v_1,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5)
            for (var $v_2 = $$arr_3[$$idx_5],
                $v_3 = this.$M_0($v_2),
                $v_4 = $v_2.get_relatedEntities().getByRelationshipName("DynamicProperty_DynamicPropertyInstance"),
                $$arr_9 = $v_4.get_entities(),
                $$len_A = $$arr_9.length,
                $$idx_B = 0;
                $$idx_B < $$len_A;
                ++$$idx_B) {
                var $v_5 = $$arr_9[$$idx_B], $v_6 = new Mscrm.DynamicPropertyInstanceModel;
                this.$k_0($v_6, $v_5, $v_3, $v_2);
                $v_6.PropertyInstance = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityRecord($v_2);
                Array.add(this.$0_0, $v_6)
            }
        this.$Q_0(0)
    },
    $o_0: function($p0) {
        for (var $v_0 = $p0,
            $v_1 = $v_0.entityCollection.get_entities(),
            $$arr_3 = $v_1,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5], $v_3 = this.$M_0($v_2);
            !$v_3.IsHidden && Array.add(this.$0_0, $v_3)
        }
        this.$Q_0(1)
    },
    $Q_0: function($p0) {
        for (var $v_0 = [], $v_1 = [], $v_2 = [], $v_3 = [], $v_4 = null, $v_5 = 0; $v_5 < this.$0_0.length; $v_5++) {
            var $v_6 = $p0 === 1 ? this.$0_0[$v_5] : this.$0_0[$v_5].Definition;
            $v_4 = this.$K_0($v_6);
            if ($v_6.IsRequired)
                if (IsNull($v_4)) Array.add($v_0, this.$G_0($p0, $v_5));
                else Array.add($v_1, this.$G_0($p0, $v_5));
            else if (IsNull($v_4)) Array.add($v_2, this.$G_0($p0, $v_5));
            else Array.add($v_3, this.$G_0($p0, $v_5))
        }
        this.$0_0 = [];
        this.$E_0($v_0);
        this.$E_0($v_1);
        this.$E_0($v_2);
        this.$E_0($v_3)
    },
    $G_0: function($p0, $p1) {
        if ($p0 === 1) return this.$0_0[$p1];
        else return this.$0_0[$p1]
    },
    $E_0: function($p0) { for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) Array.add(this.$0_0, $p0[$v_0]) },
    $K_0: function($p0) {
        var $v_0 = $p0.InitialDefaultValue;
        if (!$p0.DataType && $v_0 === -1) return null;
        return $v_0
    },
    $M_0: function($p0) {
        var $v_0 = new Mscrm.DynamicPropertyModel,
            $v_1 = $p0.get_relatedEntities().getByRelationshipName("DynamicProperty_DynamicPropertyOptionSetItem");
        this.$l_0($v_0, $p0, $v_1);
        return $v_0
    },
    $k_0: function($p0, $p1, $p2, $p3) {
        $p0.Id = $p1.getValue("dynamicpropertyinstanceid").toString();
        Mscrm.DynamicPropertyDataProvider.$q($p0, $p1, $p2, $p3);
        $p0.Definition = $p2;
        $p0.IsDirty = false
    },
    $l_0: function($p0, $p1, $p2) {
        $p0.Id = $p1.getValue("dynamicpropertyid").toString();
        $p0.Name = $p1.getValue("name").toString();
        $p0.DataType = $p1.getValue("datatype").get_value();
        var $v_0 = $p0.DataType, $v_1 = Mscrm.DynamicProperty.Utilities.$2[$v_0];
        Mscrm.DynamicPropertyDataProvider.$P($p0, $p1, $v_0, $v_1);
        if (!$v_0) Mscrm.DynamicPropertyDataProvider.$p($p0, $p2, $p1);
        else $p0.DefaultValue = $p1.hasField("defaultvalue" + $v_1) ? $p1.getValue("defaultvalue" + $v_1) : null;
        $p0.IsRequired = Mscrm.Utilities.parseBoolean($p1.getValue("isrequired").get_value().toString());
        $p0.IsReadOnly = Mscrm.Utilities.parseBoolean($p1.getValue("isreadonly").get_value().toString());
        $p0.IsHidden = Mscrm.Utilities.parseBoolean($p1.getValue("ishidden").get_value().toString());
        $p0.StateCode = $p1.get_fields()["statecode"].get_value().toString();
        $p0.InitialDefaultValue = $p0.DefaultValue;
        $p0.InitialReadOnlyState = $p0.IsReadOnly;
        $p0.IsDirty = false;
        $p0.RegardingObjectId = $p1.getValue("regardingobjectid").Id.toString();
        $p0.RegardingObjectName = $p1.getValue("regardingobjectid").TypeName
    },
    validateProperties: function() { return false },
    updatePropertyInstances: function(targetId, entityTypeCode, dirtyRows, callback, errorCallback) {
        for (var $$t_I = this,
            $v_0 = function($p1_0) { errorCallback($p1_0) },
            $v_1 = 0,
            $v_2 = new Array(dirtyRows),
            $v_4 = 0;
            $v_4 < this.$0_0.length;
            $v_4++) {
            var $v_5 = this.$0_0[$v_4];
            if ($v_5.IsDirty) {
                var $v_6 = $v_5.Definition.DataType,
                    $v_7 = $v_5.PropertyInstance.get_relatedEntities()
                        .getByRelationshipName("DynamicProperty_DynamicPropertyInstance").get_entities()[0];
                $v_7.get_changedFieldNames().add("regardingobjectid");
                $v_7.get_changedFieldNames().add("dynamicpropertyid");
                $v_7.get_changedFieldNames().add("dynamicpropertyinstanceid");
                $v_7.get_changedFieldNames().add("value" + Mscrm.DynamicProperty.Utilities.$2[$v_6]);
                var $v_8 = Xrm.Internal.getEntityName(entityTypeCode),
                    $v_9 = new Xrm.Objects
                        .EntityReference($v_8, new Microsoft.Crm.Client.Core.Framework.Guid(targetId)),
                    $v_A = new Xrm.Objects.EntityReference("dynamicproperty",
                        new Microsoft.Crm.Client.Core.Framework.Guid($v_5.Definition.Id));
                $v_7.setValue("dynamicpropertyid", $v_A);
                $v_7.setValue("regardingobjectid", $v_9);
                $v_2[$v_1] = $v_7;
                $v_1++
            }
        }
        var $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection($v_2, false, dirtyRows, false),
            $$t_J = this;
        Xrm.Internal.messages.updateProductProperties($v_3).then(function($p1_0) { callback(true) }, $v_0)
    },
    updateProperties: function(targetId, entityTypeCode, dirtyRows, callback, errorCallback) {
        for (var $$t_M = this,
            $v_0 = function($p1_0) { errorCallback($p1_0) },
            $v_1 = 0,
            $v_2 = new Array(dirtyRows),
            $v_3 = ["regardingobjectid", "isreadonly", "name", "datatype", "statecode"],
            $v_7 = 0;
            $v_7 < this.$0_0.length;
            $v_7++) {
            var $v_8 = this.$0_0[$v_7];
            if ($v_8.IsDirty) {
                var $v_9 = {}, $v_A = {};
                $v_9["regardingobjectid"] = 6;
                $v_A["regardingobjectid"] = new Xrm.Objects
                    .EntityReference($v_8.RegardingObjectName,
                        new Microsoft.Crm.Client.Core.Framework.Guid($v_8.RegardingObjectId));
                $v_9["isreadonly"] = 0;
                $v_A["isreadonly"] = $v_8.IsReadOnly;
                $v_9["statecode"] = 12;
                $v_A["statecode"] = $v_8.StateCode;
                $v_9["name"] = 14;
                $v_A["name"] = $v_8.Name;
                $v_9["datatype"] = 11;
                $v_A["datatype"] = $v_8.DataType;
                $v_9["basedynamicpropertyid"] = 6;
                $v_A["basedynamicpropertyid"] = new Xrm.Objects
                    .EntityReference("dynamicproperty", Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_8.Id));
                var $v_B = new Xrm.Objects.EntityReference("dynamicproperty",
                    new Microsoft.Crm.Client.Core.Framework.Guid($v_8.Id));
                $v_2[$v_1] = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_B,
                        $v_A,
                        $v_9,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
                var $v_C = $v_8.DataType;
                if (!$v_C) {
                    var $v_D = Mscrm.DynamicPropertyDataProvider.$d($v_8);
                    $v_9["defaultvalueoptionset"] = 6;
                    $v_A["defaultvalueoptionset"] = isNullOrEmptyString($v_D)
                        ? null
                        : new Xrm.Objects.EntityReference("dynamicpropertyoptionsetitem",
                            new Microsoft.Crm.Client.Core.Framework.Guid($v_D));
                    $v_2[$v_1].get_changedFieldNames().add("defaultvalueoptionset")
                } else {
                    var $v_E = Mscrm.DynamicProperty.Utilities.$2[$v_C];
                    $v_9["defaultvalue" + $v_E] = Mscrm.DynamicProperty.Utilities.$7[$v_C];
                    $v_A["defaultvalue" + $v_E] = $v_8.DefaultValue;
                    $v_2[$v_1].get_changedFieldNames().add("defaultvalue" + $v_E)
                }
                $v_2[$v_1].get_changedFieldNames().addRange($v_3);
                $v_1++
            }
        }
        var $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection($v_2, false, dirtyRows, false),
            $v_5 = Xrm.Internal.getEntityName(entityTypeCode),
            $v_6 = new Xrm.Objects.EntityReference($v_5, new Microsoft.Crm.Client.Core.Framework.Guid(targetId)),
            $$t_N = this;
        Xrm.Internal.messages.overrideDynamicProperties($v_6, $v_4).then(function($p1_0) { callback(true) }, $v_0)
    },
    dispose: function() { this.$0_0 = null }
};
Mscrm.DummyDataProvider = function() {};
Mscrm.DummyDataProvider.prototype = {
    getProperties: function(targetId, entityTypeCode, getDpi, isPreview, callback, errorCallback) {
        var $v_0 = [], $v_1 = [], $v_2 = new Mscrm.DynamicPropertyOptionSetKeyModel;
        $v_2.initialize("", -1);
        var $v_3 = new Mscrm.DynamicPropertyOptionSetKeyModel;
        $v_3.initialize("Red", 1);
        var $v_4 = new Mscrm.DynamicPropertyOptionSetKeyModel;
        $v_4.initialize("Blue", 2);
        var $v_5 = new Mscrm.DynamicPropertyOptionSetKeyModel;
        $v_5.initialize("Green", 3);
        Array.add($v_1, $v_2);
        Array.add($v_1, $v_3);
        Array.add($v_1, $v_4);
        Array.add($v_1, $v_5);
        var $v_6 = new Mscrm.DynamicPropertyModel;
        $v_6.initialize("optionSet", "color", 0, null, 0, 0, 0, $v_1, false, true, false, false);
        var $v_7 = new Mscrm.DynamicPropertyInstanceModel;
        $v_7.initialize("propOptionSet", "Red", true, $v_6, false);
        Array.add($v_0, $v_7);
        var $v_8 = new Mscrm.DynamicPropertyModel;
        $v_8.initialize("integer", "size", 4, null, 5, 10, 0, null, false, false, false, false);
        var $v_9 = new Mscrm.DynamicPropertyInstanceModel;
        $v_9.initialize("propInteger", 6, true, $v_8, false);
        Array.add($v_0, $v_9);
        var $v_A = new Mscrm.DynamicPropertyModel;
        $v_A.initialize("decimal", "version", 1, 1, 1, 100, 2, null, false, false, false, false);
        var $v_B = new Mscrm.DynamicPropertyInstanceModel;
        $v_B.initialize("propDecimal", 1, true, $v_A, false);
        Array.add($v_0, $v_B);
        var $v_C = new Mscrm.DynamicPropertyModel;
        $v_C.initialize("double", "doubleAttr", 2, 1, 1, 100, 2, null, false, false, false, false);
        var $v_D = new Mscrm.DynamicPropertyInstanceModel;
        $v_D.initialize("propDouble", 2.666, true, $v_C, false);
        Array.add($v_0, $v_D);
        var $v_E = new Mscrm.DynamicPropertyModel;
        $v_E.initialize("string", "description", 3, "", 0, 100, 0, null, false, false, false, false);
        var $v_F = new Mscrm.DynamicPropertyInstanceModel;
        $v_F.initialize("propString", "dummy", true, $v_E, false);
        Array.add($v_0, $v_F);
        callback($v_0)
    },
    updatePropertyInstances: function(targetId, entityTypeCode, dirtyRows, callback, errorCallback) {},
    updateProperties: function(targetId, entityTypeCode, dirtyRows, callback, errorCallback) {},
    validateProperties: function() { return false },
    dispose: function() {}
};
Mscrm.DynamicPropertyInstanceDataProviderFactory = function() {};
Mscrm.DynamicPropertyInstanceDataProviderFactory.create = function(type) {
    switch (type) {
    case 0:
        return new Mscrm.DynamicPropertyDataProvider;
    case 1:
    default:
        return new Mscrm.DummyDataProvider
    }
};
Mscrm.DynamicPropertyListControl = function(element) {
    Mscrm.DynamicPropertyListControl.initializeBase(this, [element])
};
Mscrm.DynamicPropertyListControl.$r = function($p0, $p1) {
    var $v_0 = "value" + Mscrm.DynamicProperty.Utilities.$2[$p1];
    if (!$p0.hasField($v_0)) $p0.get_fieldTypes()[$v_0] = Mscrm.DynamicProperty.Utilities.$7[$p1]
};
Mscrm.DynamicPropertyListControl.prototype = {
    $8_3: null,
    $3_3: null,
    $6_3: null,
    get_dataTable: function() { return this.$6_3 },
    set_dataTable: function(value) {
        this.$6_3 = value;
        return value
    },
    $5_3: null,
    get_rootElement: function() { return this.$5_3 },
    set_rootElement: function(value) {
        this.$5_3 = value;
        return value
    },
    $1_3: 0,
    get_renderType: function() { return this.$1_3 },
    set_renderType: function(value) {
        this.$1_3 = value;
        return value
    },
    $I_3: false,
    get_isValid: function() { return this.$I_3 },
    set_isValid: function(value) {
        this.$I_3 = value;
        return value
    },
    $C_3: false,
    get_isPreview: function() { return this.$C_3 },
    set_isPreview: function(value) {
        this.$C_3 = value;
        return value
    },
    $4_3: null,
    get_dataProvider: function() { return this.$4_3 },
    set_dataProvider: function(value) {
        this.$4_3 = value;
        return value
    },
    $A_3: null,
    get_targetEntityId: function() { return this.$A_3 },
    set_targetEntityId: function(value) {
        this.$A_3 = value;
        return value
    },
    $B_3: 0,
    get_targetEntityTypeCode: function() { return this.$B_3 },
    set_targetEntityTypeCode: function(value) {
        this.$B_3 = value;
        return value
    },
    $D_3: false,
    get_isReadOnly: function() { return this.$D_3 },
    set_isReadOnly: function(value) {
        this.$D_3 = value;
        return value
    },
    $H_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        Mscrm.DynamicPropertyListControl.control = this;
        if (IsNull(this.$4_3)) this.$4_3 = Mscrm.DynamicPropertyInstanceDataProviderFactory.create(0);
        Mscrm.DynamicProperty.Utilities.initializeAttributeTypeMap();
        this.render(null, null, null)
    },
    dispose: function() {
        this.removeCells();
        this.$4_3.dispose();
        this.$4_3 = null
    },
    $c_3: function($p0, $p1) {
        for (var $v_0 = $P_CRM(".dplist-value-column", $p0),
            $v_1 = $P_CRM(".dplist-readOnly-column", $p0),
            $v_2 = $v_0.length + $v_1.length,
            $v_3 = 0;
            $v_3 < $v_2;
            $v_3++) {
            var $v_4 = this.$F_3($p1, $v_3, "dynamicProperty");
            this.$Z_3($v_4)
        }
    },
    $Z_3: function($p0) {
        var $v_0 = this.$8_3[$p0];
        if (!IsNull($v_0) && !$v_0.get_isDisposed()) {
            for (var $v_1 = $find($v_0.get_dataContext().get_attribute().get_dataAttributeId()), $v_2 = 0;
                $v_2 < $v_1.get_controls().getLength();
                $v_2++) this.$b_3($v_1.get_controls().get($v_2));
            delete this.$8_3[$p0];
            this.$a_3($v_1)
        }
    },
    $b_3: function($p0) { !IsNull($p0) && $p0.dispose() },
    $a_3: function($p0) {
        if (!IsNull($p0)) {
            !IsNull($p0.get_parent()) &&
                !$p0.get_parent().get_isDisposed() &&
                $p0.get_parent().get_attributes().remove($p0);
            !IsNull(Xrm.Page.data) &&
                !IsNull(Xrm.Page.data.entity) &&
                !IsNull(Xrm.Page.data.entity.attributes) &&
                Xrm.Page.data.entity.attributes.remove($p0.getWrapper());
            $p0.dispose()
        }
    },
    removeCells: function() {
        if (this.$5_3) {
            var $v_0 = $P_CRM(this.$5_3).children("tbody").children("tr");
            if (!IsNull($v_0))
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1];
                    this.$c_3($v_2, $v_1)
                }
            this.$6_3.html("");
            this.$5_3 = null
        }
    },
    onChange: function() {},
    update: function(dataChangeCallback, errorCallback, flyOutDialog) {
        var $$t_D = this,
            $v_0 = function($p1_0) { dataChangeCallback($p1_0) },
            $$t_E = this,
            $v_1 = function($p1_0) { errorCallback($p1_0) },
            $v_2 = 0,
            $v_3 = false;
        if (!this.$1_3) {
            var $$t_9, $$t_A;
            $v_3 = ($$t_A = this.$h_3($$t_9 = { val: $v_2 }), $v_2 = $$t_9.val, $$t_A)
        } else if (this.$1_3 === 1) {
            var $$t_B, $$t_C;
            $v_3 = ($$t_C = this.$i_3($$t_B = { val: $v_2 }), $v_2 = $$t_B.val, $$t_C)
        }
        if ($v_3)
            if ($v_2 > 0) {
                flyOutDialog && flyOutDialog();
                if (!this.$1_3) this.$4_3.updatePropertyInstances(this.$A_3, this.$B_3, $v_2, $v_0, $v_1);
                else this.$1_3 === 1 && this.$4_3.updateProperties(this.$A_3, this.$B_3, $v_2, $v_0, $v_1)
            } else dataChangeCallback(true);
        else dataChangeCallback(false)
    },
    $i_3: function($p0) {
        $p0.val = 0;
        for (var $v_0 = 0; $v_0 < this.$3_3.length; $v_0++) {
            var $v_1, $v_2 = false, $v_3 = false, $v_4 = this.$3_3[$v_0];
            if (this.$O_3($v_0, 0)) {
                var $$t_6, $$t_7;
                if ($$t_7 = this.$L_3($v_0, 0, false, $$t_6 = { val: $v_1 }), $v_1 = $$t_6.val, $$t_7) {
                    $v_4.DefaultValue = $v_1;
                    $v_4.IsDirty = true;
                    $v_2 = true
                }
            } else {
                $p0.val = 0;
                return false
            }
            var $$t_8, $$t_9;
            if ($$t_9 = this.$L_3($v_0, 1, true, $$t_8 = { val: $v_1 }), $v_1 = $$t_8.val, $$t_9) {
                $v_4.IsReadOnly = $v_1 === 1 ? true : false;
                $v_4.IsDirty = true;
                $v_3 = true
            }
            if ($v_2 || $v_3) $p0.val++
        }
        return true
    },
    $h_3: function($p0) {
        $p0.val = 0;
        for (var $v_0 = 0, $v_1 = 0; $v_1 < this.$3_3.length; $v_1++) {
            var $v_2, $v_3 = this.$3_3[$v_1];
            if (this.$O_3($v_1, 0)) {
                $v_0 = $v_3.Definition.DataType;
                var $$t_6, $$t_7;
                if ($$t_7 = this.$L_3($v_1, 0, false, $$t_6 = { val: $v_2 }), $v_2 = $$t_6.val, $$t_7) {
                    var $v_4 = $v_3.PropertyInstance.get_relatedEntities()
                        .getByRelationshipName("DynamicProperty_DynamicPropertyInstance").get_entities()[0];
                    Mscrm.DynamicPropertyListControl.$r($v_4, $v_0);
                    $v_4.setValue("value" + Mscrm.DynamicProperty.Utilities.$2[$v_0], $v_2);
                    $v_3.IsDirty = true;
                    $p0.val++
                }
            } else {
                $p0.val = 0;
                return false
            }
        }
        return true
    },
    $L_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$F_3($p0, $p1, "dynamicProperty"), $v_1 = this.$f_3($v_0), $v_2 = null, $v_3 = this.$8_3[$v_0];
        if (!IsNull($v_3))
            if ($v_3.get_controlMode() === "locked") {
                $p3.val = null;
                return false
            }
        if (!this.$1_3) $v_2 = this.$K_3($p0);
        else if (this.$1_3 === 1)
            if (!$p2) $v_2 = this.$K_3($p0);
            else $v_2 = this.$3_3[$p0].InitialReadOnlyState ? 1 : 0;
        if ($v_1 !== $v_2) {
            $p3.val = $v_1;
            return true
        }
        $p3.val = null;
        return false
    },
    $K_3: function($p0) {
        var $v_0 = !this.$1_3 ? this.$3_3[$p0].Value : this.$3_3[$p0].InitialDefaultValue,
            $v_1 = !this.$1_3 ? this.$3_3[$p0].Definition.DataType : this.$3_3[$p0].DataType;
        if (!$v_1 && $v_0 === -1) return null;
        return $v_0
    },
    $f_3: function($p0) {
        var $v_0 = this.$8_3[$p0];
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_state().get_validationResult();
            if ($v_1.isValid) {
                var $v_2 = $find($v_0.get_dataContext().get_attribute().get_dataAttributeId());
                return $v_2.get_value()
            }
        }
        return null
    },
    $O_3: function($p0, $p1) {
        var $v_0 = this.$F_3($p0, $p1, "dynamicProperty"), $v_1 = this.$8_3[$v_0];
        if (!IsNull($v_1)) {
            $v_1.blur();
            var $v_2 = $v_1.get_state().get_validationResult();
            if (!$v_2.isValid && !isNullOrEmptyString($v_1.get_errorValue())) {
                $v_1.setFocus();
                $v_1.setNotification($v_2.errorText);
                return false
            }
            return true
        }
        return false
    },
    render: function(errorCallback, renderInitializeCallback, renderCompleteCallback) {
        !IsNull(this.$5_3) && this.removeCells();
        var $$t_8 = this,
            $v_0 = function($p1_0) {
                renderInitializeCallback && renderInitializeCallback();
                $$t_8.$W_3($p1_0, renderCompleteCallback);
                setPerfMarkerTimestamp("FinishOpenFlyOutTimestamp")
            },
            $$t_9 = this,
            $v_1 = function($p1_0) { !IsNull(errorCallback) && errorCallback($p1_0) },
            $v_2 = !this.$1_3 ? true : false;
        this.$4_3.getProperties(this.$A_3, this.$B_3, $v_2, this.$C_3, $v_0, $v_1)
    },
    $W_3: function($p0, $p1) {
        var $v_0 = {}, $v_1 = "tmpl_" + this.get_element().id;
        $v_0["Key"] = $v_1;
        $v_0["Value"] = Mscrm.TemplateFactory.getTemplate(this.$1_3);
        Mscrm.Utilities.createScriptNodeForJQueryTemplate($v_0);
        this.$6_3 = $P_CRM(this.get_element());
        var $v_2 = $get($v_1);
        $P_CRM("#" + this.get_element().id).hide();
        this.$6_3.html($($v_2).render($p0));
        this.$U_3();
        var $$t_5 = this;
        window.setTimeout(function() {
                $$t_5.$g_3($p0);
                $p1 && $p1()
            },
            10);
        this.$5_3 = this.get_element();
        this.$3_3 = $p0
    },
    $U_3: function() {
        var $v_0 = this.get_element().children;
        if (!IsNull($v_0) && $v_0.length > 0)
            for (var $v_1 = 0; $v_1 < 10; $v_1++) {
                var $v_2 = document.createElement("tr");
                $v_0[0].appendChild($v_2)
            }
    },
    $g_3: function($p0) {
        this.$8_3 = {};
        if (!IsNull(this.$6_3)) {
            var $v_0 = this.$6_3.children("tbody").children("tr");
            this.$H_3 = new Mscrm.FlyoutDialogErrorDisplayContainerProvider(this.$6_3[0].id);
            if (!IsNull($v_0))
                for (var $v_1 = 0; $v_1 < $p0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1];
                    this.$j_3($v_2, $p0[$v_1], $v_1)
                }
        }
        $P_CRM("#" + this.get_element().id).addClass("dplist-table");
        $P_CRM("#" + this.get_element().id).show()
    },
    $j_3: function($p0, $p1, $p2) {
        var $v_0 = $P_CRM(".dplist-value-column", $p0), $v_1 = $v_0[0], $v_2 = null;
        if (!this.$1_3) {
            $v_2 = this.$N_3($p1.Definition, $p2);
            this.$J_3($p2, 0, $v_1, $v_2);
            $v_0.addClass("dplist-runtime-value-column")
        } else {
            $v_2 = this.$N_3($p1, $p2);
            this.$J_3($p2, 0, $v_1, $v_2);
            if (this.$1_3 === 1) {
                $v_0 = $P_CRM(".dplist-readOnly-column", $p0);
                $v_1 = $v_0[0];
                $v_2 = this.$e_3($p1, $p2);
                this.$J_3($p2, 1, $v_1, $v_2);
                var $v_3 = $v_0.children("div");
                $v_3.removeClass("dplist-table-Inline-Chrome")
            }
        }
    },
    $J_3: function($p0, $p1, $p2, $p3) {
        if (!IsNull($p3)) {
            var $v_0 = this.$F_3($p0, $p1, "dynamicProperty"),
                $v_1 = "normal",
                $v_2 = this.$X_3($v_0),
                $v_3 = XUI.Html.DomUtils.GetFirstChild($p2),
                $v_4 = $P_CRM($v_3),
                $v_5 = $v_4.text().trim();
            !IsNull($v_3) && $p2.removeChild($v_3);
            $p2.appendChild($v_2);
            var $v_6 = this.$Y_3($p3, $v_2, $v_1, $v_5), $v_7 = $v_2.lastChild.getAttribute("class");
            $v_2.lastChild.setAttribute("class", $v_7 + " dplist-table-Inline-Edit");
            if (!IsNull($v_6)) {
                var $v_8 = $P_CRM($p2), $v_9 = $v_6;
                $v_8.css("overflow", "visible");
                var $v_A = $find($v_9.get_dataContext().get_attribute().get_dataAttributeId());
                $v_A.get_controls().add($v_9);
                if (!isNullOrEmptyString($v_5))
                    if ($p3.AttributeType === "picklist" || $p3.AttributeType === "bit") $v_A.forceResetValue($v_5);
                    else $v_A.resetValue($v_5)
            }
        }
    },
    $F_3: function($p0, $p1, $p2) { return $p2 + "_r" + $p0.toString() + "c" + $p1.toString() },
    $X_3: function($p0) {
        var $v_0 = document.createElement("div"), $v_1 = $P_CRM($v_0);
        $v_1.attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName, $p0);
        $v_1.attr("id", $p0);
        $v_1.attr("dummy-data-attributename", $p0);
        $v_1.attr("data-fdeid", "PrimaryEntity");
        $v_1.attr("class", "dplist-table-Inline-Chrome ms-crm-Inline-Chrome nvarchar");
        $v_0.setAttribute("tabindex", 0);
        var $v_2 = this.$V_3($v_0);
        return $v_2
    },
    $V_3: function($p0) {
        var $v_0 = document.createElement("div"), $v_1 = document.createElement("span"), $v_2 = $P_CRM($v_0);
        $v_2.attr("class", "ms-crm-Inline-Value dplist-table-Inline-Value");
        $v_2.removeClass("ms-crm-Inline-EditHintState");
        $v_0.appendChild($v_1);
        $p0.appendChild($v_0);
        return $p0
    },
    $Y_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = null, $v_1 = $p3, $v_2 = null;
        if (!isNullOrEmptyString($v_1)) {
            $v_0 = {};
            if ($p0.AttributeType === "decimal") {
                $v_0["raw"] = String.format(Sys.CultureInfo.InvariantCulture.name, "{0:F}", $v_1);
                $v_0["defaultvalue"] = String.format(Sys.CultureInfo.InvariantCulture.name, "{0:F}", $v_1);
                $v_0["value"] = String.format(Sys.CultureInfo.InvariantCulture.name, "{0:F}", $v_1)
            } else {
                $v_0["raw"] = $v_1;
                $v_0["defaultvalue"] = $v_1;
                $v_0["value"] = $v_1
            }
        }
        var $v_3 = $P_CRM($p1);
        $v_2 = Mscrm.InlineControlFactory.initializeUnboundedField($v_3, $p0, $v_0, $p1.id, $p2);
        var $v_4 = $v_2;
        $v_4.set_errorDisplayAreaProvider(this.$H_3);
        $v_4.setFormType(false);
        $v_4.initializeAndRenderEditView();
        this.$8_3[$p1.id] = $v_2;
        return $v_2
    },
    $e_3: function($p0, $p1) {
        var $v_0 = {}, $v_1 = {}, $v_2 = new Array(2);
        $v_2[0] = new Mscrm.EnumOptionJsonWrapper;
        $v_2[0].Value = 1;
        $v_2[0].Label = Xrm.Internal.getResourceString("LOCID_DPCOLUMN_NONEDITABLE");
        $v_2[1] = new Mscrm.EnumOptionJsonWrapper;
        $v_2[1].Value = 0;
        $v_2[1].Label = Xrm.Internal.getResourceString("LOCID_DPCOLUMN_EDITABLE");
        $v_1.Options = $v_2;
        $v_0 = $v_1;
        $v_0.LabelName = $p0.Name + "_" + $p1.toString();
        $v_0.LogicalName = $p0.Name + "_" + $p1.toString();
        $v_0.RequiredLevel = $p0.IsRequired ? 1 : 0;
        $v_0.CanRead = true;
        $v_0.CanUpdate = Mscrm.DynamicProperty.Utilities.isDraftBundle();
        $v_0.IsDisabled = false;
        $v_0.ImeMode = "auto";
        $v_0.AttributeType = "bit";
        return $v_0
    },
    $N_3: function($p0, $p1) {
        var $v_0 = {};
        switch ($p0.DataType) {
        case 4:
        case 1:
        case 2:
            var $v_1 = {};
            $v_1.MinValue = $p0.Min;
            $v_1.MaxValue = $p0.Max;
            $v_1.Precision = $p0.Precision;
            $v_0 = $v_1;
            break;
        case 3:
            var $v_2 = {};
            $v_2.MaxLength = $p0.Max;
            $v_0 = $v_2;
            break;
        case 0:
            var $v_3 = {};
            $v_3.Options = this.$m_3($p0.OptionSetKeyList);
            $v_0 = $v_3;
            break
        }
        $v_0.LabelName = $p0.Name;
        $v_0.LogicalName = $p0.Name + $p1;
        $v_0.AttributeType = Mscrm.DynamicProperty.Utilities.$9[$p0.DataType].toString();
        $v_0.RequiredLevel = $p0.IsRequired ? 1 : 0;
        $v_0.CanRead = true;
        if (this.$1_3 === 1) $v_0.CanUpdate = Mscrm.DynamicProperty.Utilities.isDraftBundle();
        else if (this.$1_3 === 2) $v_0.CanUpdate = !$p0.IsReadOnly;
        else {
            $v_0.CanUpdate = !$p0.IsReadOnly;
            if ($v_0.CanUpdate) {
                var $v_4 = $find("PrimaryEntity");
                if (!IsNull($v_4) && Xrm.Page.ui.getFormType() === 4) $v_0.CanUpdate = false;
                else if (IsNull($v_4) && this.$D_3) $v_0.CanUpdate = false
            }
        }
        $v_0.IsDisabled = false;
        $v_0.ImeMode = "auto";
        return $v_0
    },
    $m_3: function($p0) {
        var $v_0 = !IsNull($p0) ? $p0.length : 0, $v_1 = new Array($v_0 + 1);
        $v_1[0] = new Mscrm.EnumOptionJsonWrapper;
        $v_1[0].Label = "";
        $v_1[0].Value = -1;
        if (!IsNull($p0))
            for (var $v_2 = 0; $v_2 < $v_0; $v_2++) {
                $v_1[$v_2 + 1] = new Mscrm.EnumOptionJsonWrapper;
                var $v_3 = $p0[$v_2];
                $v_1[$v_2 + 1].Label = $v_3.Label;
                $v_1[$v_2 + 1].Value = $v_3.Value
            }
        return $v_1
    },
    setFocus: function() { !IsNull(this.$5_3) && this.$5_3.focus() }
};
Mscrm.TemplateFactory = function() {};
Mscrm.TemplateFactory.getTemplate = function(renderType) {
    switch (renderType) {
    case 0:
        return Mscrm.TemplateFactory.$R;
    case 1:
        return Mscrm.TemplateFactory.$T;
    case 2:
        return Mscrm.TemplateFactory.$S;
    default:
        return null
    }
};
Mscrm.DynamicPropertyInstanceModel = function() {};
Mscrm.DynamicPropertyInstanceModel.prototype = {
    Id: null,
    Value: null,
    IsValid: false,
    Definition: null,
    IsDirty: false,
    PropertyInstance: null,
    initialize: function(id, value, isValid, definition, isDirty) {
        this.Id = id;
        this.Value = value;
        this.IsValid = isValid;
        this.Definition = definition;
        this.IsDirty = isDirty
    }
};
Mscrm.DynamicPropertyModel = function() {};
Mscrm.DynamicPropertyModel.prototype = {
    Id: null,
    Name: null,
    DataType: 0,
    RegardingObjectId: null,
    RegardingObjectName: null,
    DefaultValue: null,
    InitialDefaultValue: null,
    Min: 0,
    Max: 0,
    Precision: 0,
    OptionSetKeyList: null,
    IsReadOnly: false,
    InitialReadOnlyState: false,
    IsRequired: false,
    IsDirty: false,
    IsHidden: false,
    StateCode: null,
    initialize: function(id,
        name,
        dataType,
        def,
        min,
        max,
        precision,
        optionSetKeyList,
        isReadOnly,
        isRequired,
        isDirty,
        isHidden) {
        this.Id = id;
        this.Name = name;
        this.DataType = dataType;
        this.DefaultValue = def;
        this.InitialDefaultValue = def;
        this.Min = min;
        this.Max = max;
        this.Precision = precision;
        this.OptionSetKeyList = optionSetKeyList;
        this.IsReadOnly = isReadOnly;
        this.InitialReadOnlyState = isReadOnly;
        this.IsRequired = isRequired;
        this.IsDirty = isDirty;
        this.IsHidden = isHidden
    }
};
Mscrm.DynamicPropertyOptionSetKeyModel = function() {};
Mscrm.DynamicPropertyOptionSetKeyModel.prototype = {
    Id: null,
    Label: null,
    Value: 0,
    initialize: function(name, value) {
        this.Label = name;
        this.Value = value
    }
};
Type.registerNamespace("Mscrm.DynamicProperty");
Mscrm.DynamicProperty.Utilities = function() {};
Mscrm.DynamicProperty.Utilities.isDraftBundle = function() {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0 = Xrm.Page.data.entity.attributes)) {
        var $v_1 = $v_0.get("statecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            if ($v_1.getValue().toString() === "2" || $v_1.getValue().toString() === "3") return true
    }
    return false
};
Mscrm.DynamicProperty.Utilities.initializeAttributeTypeMap = function() {
    if (Mscrm.DynamicProperty.Utilities.$2.length > 0) return;
    Mscrm.DynamicProperty.Utilities.$2[0] = "integer";
    Mscrm.DynamicProperty.Utilities.$7[0] = 5;
    Mscrm.DynamicProperty.Utilities.$9[0] = "picklist";
    Mscrm.DynamicProperty.Utilities.$2[1] = "decimal";
    Mscrm.DynamicProperty.Utilities.$7[1] = 3;
    Mscrm.DynamicProperty.Utilities.$9[1] = "decimal";
    Mscrm.DynamicProperty.Utilities.$2[2] = "double";
    Mscrm.DynamicProperty.Utilities.$7[2] = 4;
    Mscrm.DynamicProperty.Utilities.$9[2] = "decimal";
    Mscrm.DynamicProperty.Utilities.$2[3] = "string";
    Mscrm.DynamicProperty.Utilities.$7[3] = 14;
    Mscrm.DynamicProperty.Utilities.$9[3] = "nvarchar";
    Mscrm.DynamicProperty.Utilities.$2[4] = "integer";
    Mscrm.DynamicProperty.Utilities.$7[4] = 5;
    Mscrm.DynamicProperty.Utilities.$9[4] = "int"
};
Mscrm.DynamicProperty.Utilities.get_typeNameMap = function() { return Mscrm.DynamicProperty.Utilities.$2 };
Mscrm.DynamicProperty.Utilities.get_typeAttributeMap = function() { return Mscrm.DynamicProperty.Utilities.$7 };
Mscrm.DynamicProperty.Utilities.get_dataTypeKeyMap = function() { return Mscrm.DynamicProperty.Utilities.$9 };
Mscrm.DynamicPropertyDataProvider.registerClass("Mscrm.DynamicPropertyDataProvider",
    null,
    Mscrm.IDynamicPropertyInstanceDataProvider,
    Sys.IDisposable);
Mscrm.DummyDataProvider.registerClass("Mscrm.DummyDataProvider",
    null,
    Mscrm.IDynamicPropertyInstanceDataProvider,
    Sys.IDisposable);
Mscrm.DynamicPropertyInstanceDataProviderFactory.registerClass("Mscrm.DynamicPropertyInstanceDataProviderFactory");
Mscrm.DynamicPropertyListControl.registerClass("Mscrm.DynamicPropertyListControl", Mscrm.CrmUIControl);
Mscrm.TemplateFactory.registerClass("Mscrm.TemplateFactory");
Mscrm.DynamicPropertyInstanceModel.registerClass("Mscrm.DynamicPropertyInstanceModel");
Mscrm.DynamicPropertyModel.registerClass("Mscrm.DynamicPropertyModel");
Mscrm.DynamicPropertyOptionSetKeyModel.registerClass("Mscrm.DynamicPropertyOptionSetKeyModel");
Mscrm.DynamicProperty.Utilities.registerClass("Mscrm.DynamicProperty.Utilities");
Mscrm.DynamicPropertyListControl.control = null;
Mscrm.TemplateFactory
    .$R =
    "<tr class='dplist-row' id={{>Id}} attribute-name={{>Definition.Name}}>\r\n\t\t\t\t\t\t\t\t<td title={{>Definition.Name}} class='dplist-name-column'>\r\n\t\t\t\t\t\t\t\t\t{{>Definition.Name}}\r\n\t\t\t\t\t\t\t\t\t{{if Definition.IsRequired == true }}<img class='ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel' alt='Required' src='/_imgs/imagestrips/transparent_spacer.gif' />{{/if}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class='dplist-value-column'>\r\n\t\t\t\t\t\t\t\t\t{{>Value}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>";
Mscrm.TemplateFactory
    .$T =
    "<tr class='dplist-row' id={{>Id}} attribute-name={{>Name}}>\r\n\t\t\t\t\t\t\t\t<td title={{>Name}} class='dplist-name-column dplist-designtime-name-column'>\r\n\t\t\t\t\t\t\t\t\t<div class='dplist-designtime-name-column-value'>\r\n\t\t\t\t\t\t\t\t\t\t{{>Name}}\r\n\t\t\t\t\t\t\t\t\t\t{{if IsRequired == true }}<img class='ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel' alt='Required' src='/_imgs/imagestrips/transparent_spacer.gif' />{{/if}}\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class='dplist-value-column'>\r\n\t\t\t\t\t\t\t\t\t{{>DefaultValue}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class='dplist-readOnly-column'>\r\n\t\t\t\t\t\t\t\t\t{{if IsReadOnly == true}}1{{else}}0{{/if}}\r\n\t\t\t\t\t\t\t\t</td> \r\n\t\t\t\t\t\t\t</tr>";
Mscrm.TemplateFactory
    .$S =
    "<tr class='dplist-row' id={{>Id}} attribute-name={{>Name}}>\r\n\t\t\t\t\t\t\t\t<td title={{>Name}} class='dplist-name-column'>\r\n\t\t\t\t\t\t\t\t\t{{>Name}}\r\n\t\t\t\t\t\t\t\t\t{{if IsRequired == true }}<img class='ms-crm-ImageStrip-frm_required ms-crm-Inline-RequiredLevel' alt='Required' src='/_imgs/imagestrips/transparent_spacer.gif' />{{/if}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td class='dplist-value-column'>\r\n\t\t\t\t\t\t\t\t\t{{>DefaultValue}}\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>";
Mscrm.DynamicProperty.Utilities.$2 = [];
Mscrm.DynamicProperty.Utilities.$7 = [];
Mscrm.DynamicProperty.Utilities.$9 = []