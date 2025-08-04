Type.registerNamespace('Mscrm');

Mscrm.IConditionClientControl = function() {}
Mscrm.IConditionClientControl.registerInterface('Mscrm.IConditionClientControl');


Mscrm.IConditionContainerControl = function() {}
Mscrm.IConditionContainerControl.registerInterface('Mscrm.IConditionContainerControl');


Mscrm.AttributeList = function Mscrm_AttributeList(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$1Y_3 = Function.createDelegate(this, this.$1Y_3);
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    Mscrm.AttributeList.initializeBase(this, [ element ]);
}
Mscrm.AttributeList.prototype = {
    $C_3: false,
    $0_3: null,
    $O_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (38,4)
    get_entity: function Mscrm_AttributeList$get_entity() {
        if (IsNull(this.$O_3)) {
            this.$O_3 = this.get_element().getAttribute('entity');
        }
        return this.$O_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (47,4)
    set_entity: function Mscrm_AttributeList$set_entity(value) {
        this.$O_3 = value;
        if (!this.$C_3 || IsNull(this.$0_3)) {
            return value;
        }
        this.render();
        return value;
    },
    
    $2_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (63,4)
    get_dataValue: function Mscrm_AttributeList$get_dataValue() {
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (64,4)
    set_dataValue: function Mscrm_AttributeList$set_dataValue(value) {
        this.$2_3 = value;
        if (this.$C_3) {
            if (IsNull(this.$0_3)) {
                this.$0_3 = $find(Mscrm.Condition.getControlId(this.get_id(), 'ATTR').toString());
            }
            this.$0_3.set_value(value);
            if (!IsNull(value)) {
                if (!IsNull(this.$K_3)) {
                    var $v_0 = this.$1W_3(this.$2_3);
                    this.$K_3.set_attribute($v_0);
                }
                if (!IsNull(this.$A_3)) {
                    var $v_1 = this.GetSelectList();
                    var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior($v_1.id);
                    this.$A_3.set_attribute($v_2.get_selectedOption());
                }
                if (!IsNull(this.$E_3)) {
                    this.$E_3.render();
                }
            }
        }
        return value;
    },
    
    $K_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (104,4)
    get_dependentOperator: function Mscrm_AttributeList$get_dependentOperator() {
        return this.$K_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (105,4)
    set_dependentOperator: function Mscrm_AttributeList$set_dependentOperator(value) {
        this.$K_3 = value;
        return value;
    },
    
    $E_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (112,4)
    get_dependentAttribute: function Mscrm_AttributeList$get_dependentAttribute() {
        return this.$E_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (113,4)
    set_dependentAttribute: function Mscrm_AttributeList$set_dependentAttribute(value) {
        this.$E_3 = value;
        return value;
    },
    
    $N_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (120,4)
    get_width: function Mscrm_AttributeList$get_width() {
        return this.$1_3.get_columnWidthInPixels();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (121,4)
    set_width: function Mscrm_AttributeList$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (128,4)
    get_index: function Mscrm_AttributeList$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (129,4)
    set_index: function Mscrm_AttributeList$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    $A_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (136,4)
    get_dependentValue: function Mscrm_AttributeList$get_dependentValue() {
        return this.$A_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (137,4)
    set_dependentValue: function Mscrm_AttributeList$set_dependentValue(value) {
        this.$A_3 = value;
        return value;
    },
    
    $7_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (144,4)
    get_columnData: function Mscrm_AttributeList$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (145,4)
    set_columnData: function Mscrm_AttributeList$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    $3_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (152,4)
    get_conditionParentControl: function Mscrm_AttributeList$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (153,4)
    set_conditionParentControl: function Mscrm_AttributeList$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    $1_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (160,4)
    get_conditionContainer: function Mscrm_AttributeList$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (164,4)
    set_conditionContainer: function Mscrm_AttributeList$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (170,3)
    $Q_3: function Mscrm_AttributeList$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (177,3)
    $W_3: function Mscrm_AttributeList$$W_3($p0, $p1) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_3.get_innerControl().id);
        if ($v_0.get_selectedIndex() === -1) {
            return;
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if ($v_1 !== this.get_dataValue() && !IsNull(this.$K_3)) {
            var $v_3 = this.$1W_3(this.get_dataValue());
            this.$K_3.set_attribute($v_3);
            this.$K_3.set_dataValue(null);
            $get(this.$K_3.get_id()).style.visibility = 'visible';
        }
        if ($v_1 !== this.get_dataValue() && !IsNull(this.$A_3)) {
            this.$A_3.set_attribute($v_0.get_selectedOption());
        }
        if ($v_1 !== this.get_dataValue() && !IsNull(this.$E_3)) {
            this.$E_3.render();
            this.$E_3.$0_3.set_value(null);
            $get(this.$E_3.$K_3.get_id()).style.visibility = 'hidden';
            this.$E_3.$K_3.set_dataValue(null);
        }
        this.$Q_3(false);
        var $v_2 = this.$1_3.$e_3;
        if (!IsNull($v_2) && 'function' === typeof($v_2)) {
            $v_2(null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (225,3)
    $1Y_3: function Mscrm_AttributeList$$1Y_3($p0, $p1) {
        this.$C_3 = true;
        this.set_dataValue(this.$2_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (234,3)
    render: function Mscrm_AttributeList$render() {
        if (!IsNull(this.$0_3)) {
            if (this.$1_3.get_readOnlyMode()) {
                this.$0_3.set_disabled(true);
            }
            var $v_2 = null;
            var $v_3 = this.$1_3.get_getUserDefinedList();
            if (!IsNull($v_3) && 'function' === typeof($v_3)) {
                var $v_4 = {};
                $v_4['ID'] = this.$7_3.id;
                $v_4['Element'] = this.get_element();
                $v_2 = $v_3($v_4);
            }
            if (IsNull($v_2)) {
                $v_2 = this.$1a_3();
            }
            this.$0_3.setInnerControlHtml('<select class=\'ms-crm-SelectBox\'>' + $v_2 + '</select>');
            this.$0_3.set_value(this.$2_3);
        }
        var $v_0 = this.GetSelectList();
        var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior($v_0.id);
        if (!IsNull($v_1)) {
            $v_1.set_selectedIndex(-1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (271,3)
    GetSelectList: function Mscrm_AttributeList$GetSelectList() {
        return this.$0_3.get_innerControl();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (278,3)
    $1a_3: function Mscrm_AttributeList$$1a_3() {
        if (IsNull(this.get_entity())) {
            return '';
        }
        var $v_0 = this.$1X_3();
        if (this.$O_3.indexOf('#') !== -1 && !this.$1_3.$6_3.Contains('Field', $v_0)) {
            var $v_2 = {};
            $v_2['localValueKey'] = $v_0;
            $v_2['expressionType'] = this.$1_3.$16_3;
            var $v_3 = this.$1_3.$6_3.ExecuteCommand('GetAttributesForLocalValue', 'Workflow', $v_2, null, null, null);
            this.$1_3.$6_3.PutElement('Field', $v_0, $v_3);
            return $v_3;
        }
        var $v_1 = this.$1_3.$6_3.GetElement('Field', $v_0, null);
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (304,3)
    $1X_3: function Mscrm_AttributeList$$1X_3() {
        var $v_0;
        var $v_1 = this.get_entity().indexOf('.');
        if ($v_1 === -1) {
            $v_0 = this.get_entity();
        }
        else {
            $v_0 = this.get_entity().substring(0, $v_1);
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (324,3)
    $1W_3: function Mscrm_AttributeList$$1W_3($p0) {
        var $v_0 = this.$1X_3();
        var $v_1 = this.$1_3.$6_3.GetDataType($p0, $v_0);
        if ($v_1 === 'lookup') {
            var $v_2 = this.$1_3.$6_3.GetField($p0, $v_0);
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.attributes.getNamedItem('datatype');
                if ($v_3.text === 'partylist') {
                    $v_1 = 'partylist';
                }
            }
        }
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (345,3)
    ParseXml: function Mscrm_AttributeList$ParseXml() {
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (351,3)
    GetXml: function Mscrm_AttributeList$GetXml() {
        if (IsNull(this.get_dataValue())) {
            return null;
        }
        else {
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.get_dataValue()) + '\"/>';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (370,4)
    add_onChange: function Mscrm_AttributeList$add_onChange(value) {
        this.get_events().addHandler('OnChange', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (371,4)
    remove_onChange: function Mscrm_AttributeList$remove_onChange(value) {
        this.get_events().removeHandler('OnChange', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (376,4)
    add_onInitComplete: function Mscrm_AttributeList$add_onInitComplete(value) {
        this.get_events().addHandler('OnInitComplete', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (380,4)
    remove_onInitComplete: function Mscrm_AttributeList$remove_onInitComplete(value) {
        this.get_events().removeHandler('OnInitComplete', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (388,3)
    initialize: function Mscrm_AttributeList$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\' style=\"display:block; position: relative;\"/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'ATTR')));
        var $v_0 = this.get_element().id + '_select';
        var $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1['value'] = this.$2_3;
        $v_1['defaultText'] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1['width'] = this.get_width();
        var $v_2 = {};
        $v_2['onChange'] = this.$$d_$W_3;
        $v_2['onInitComplete'] = this.$$d_$1Y_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_1, $v_2, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml('<select id=\'' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) + '\' class=\'ms-crm-SelectBox\'>' + this.$1a_3() + '</select>');
        if (this.$1_3.get_readOnlyMode()) {
            this.$0_3.set_disabled(true);
        }
        window.setTimeout(this.$$d_$n_3, 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (419,3)
    $n_3: function Mscrm_AttributeList$$n_3() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$O_3)) {
            this.set_entity(this.$O_3);
        }
        this.set_dataValue(this.$2_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\AttributeList.cs (433,3)
    dispose: function Mscrm_AttributeList$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionEntity = function Mscrm_ConditionEntity() {
}
Mscrm.ConditionEntity.prototype = {
    $1K_0: '',
    $1I_0: '',
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (20,4)
    get_entityName: function Mscrm_ConditionEntity$get_entityName() {
        return this.$1K_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (21,4)
    set_entityName: function Mscrm_ConditionEntity$set_entityName(value) {
        this.$1K_0 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (26,4)
    get_customFields: function Mscrm_ConditionEntity$get_customFields() {
        return this.$1I_0;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (27,4)
    set_customFields: function Mscrm_ConditionEntity$set_customFields(value) {
        this.$1I_0 = value;
        return value;
    }
}


Mscrm.Condition = function Mscrm_Condition(element) {
    Mscrm.Condition.initializeBase(this, [ element ]);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (38,3)
Mscrm.Condition.getPropertiesForChild = function Mscrm_Condition$getPropertiesForChild(component) {
    var $v_0 = {};
    $v_0['conditionParentControl'] = component;
    $v_0['conditionContainer'] = component.get_conditionContainer();
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (442,3)
Mscrm.Condition.isImplementsContainerControl = function Mscrm_Condition$isImplementsContainerControl(control) {
    return Mscrm.IConditionContainerControl.isImplementedBy(control);
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (586,3)
Mscrm.Condition.getControlId = function Mscrm_Condition$getControlId(parentId, suffix) {
    return parentId + suffix;
}
Mscrm.Condition.prototype = {
    $a_3: null,
    $G_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (64,4)
    add_onLoad: function Mscrm_Condition$add_onLoad(value) {
        this.get_events().addHandler('OnLoad', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (65,4)
    remove_onLoad: function Mscrm_Condition$remove_onLoad(value) {
        this.get_events().removeHandler('OnLoad', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (69,4)
    add_onNew: function Mscrm_Condition$add_onNew(value) {
        this.get_events().addHandler('OnNew', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (70,4)
    remove_onNew: function Mscrm_Condition$remove_onNew(value) {
        this.get_events().removeHandler('OnNew', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (74,4)
    add_onClear: function Mscrm_Condition$add_onClear(value) {
        this.get_events().addHandler('OnClear', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (75,4)
    remove_onClear: function Mscrm_Condition$remove_onClear(value) {
        this.get_events().removeHandler('OnClear', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (79,4)
    add_onGroup: function Mscrm_Condition$add_onGroup(value) {
        this.get_events().addHandler('OnGroup', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (80,4)
    remove_onGroup: function Mscrm_Condition$remove_onGroup(value) {
        this.get_events().removeHandler('OnGroup', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (84,4)
    add_onAddRow: function Mscrm_Condition$add_onAddRow(value) {
        this.get_events().addHandler('OnAddRow', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (85,4)
    remove_onAddRow: function Mscrm_Condition$remove_onAddRow(value) {
        this.get_events().removeHandler('OnAddRow', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (89,4)
    add_onChange: function Mscrm_Condition$add_onChange(value) {
        this.get_events().addHandler('OnChange', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (90,4)
    remove_onChange: function Mscrm_Condition$remove_onChange(value) {
        this.get_events().removeHandler('OnChange', value);
    },
    
    $V_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (100,4)
    get_visibleControl: function Mscrm_Condition$get_visibleControl() {
        return this.$V_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (101,4)
    set_visibleControl: function Mscrm_Condition$set_visibleControl(value) {
        this.$V_3 = value;
        return value;
    },
    
    $1N_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (110,4)
    get_isDirty: function Mscrm_Condition$get_isDirty() {
        return this.$1N_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (111,4)
    set_isDirty: function Mscrm_Condition$set_isDirty(value) {
        this.$1N_3 = value;
        this.fireControlEvent('OnChange', Sys.EventArgs.Empty);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (120,4)
    get_container: function Mscrm_Condition$get_container() {
        return this;
    },
    
    $6_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (126,4)
    get_clientCache: function Mscrm_Condition$get_clientCache() {
        return this.$6_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (127,4)
    set_clientCache: function Mscrm_Condition$set_clientCache(value) {
        this.$6_3 = value;
        return value;
    },
    
    $p_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (133,4)
    get_columns: function Mscrm_Condition$get_columns() {
        if (IsNull(this.$p_3)) {
            this.$p_3 = this.get_element().getAttribute('columns');
        }
        return this.$p_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (142,4)
    set_columns: function Mscrm_Condition$set_columns(value) {
        this.$p_3 = value;
        return value;
    },
    
    $1H_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (148,4)
    get_conditionId: function Mscrm_Condition$get_conditionId() {
        return this.$1H_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (149,4)
    set_conditionId: function Mscrm_Condition$set_conditionId(value) {
        this.$1H_3 = value;
        return value;
    },
    
    $y_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (155,4)
    get_primaryEntityCode: function Mscrm_Condition$get_primaryEntityCode() {
        if (IsNull(this.$y_3)) {
            this.$y_3 = this.get_element().getAttribute('primaryentitycode');
        }
        return this.$y_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (164,4)
    set_primaryEntityCode: function Mscrm_Condition$set_primaryEntityCode(value) {
        this.$y_3 = value;
        return value;
    },
    
    $z_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (170,4)
    get_secondaryEntityCode: function Mscrm_Condition$get_secondaryEntityCode() {
        if (IsNull(this.$z_3)) {
            this.$z_3 = this.get_element().getAttribute('secondaryentitycode');
        }
        return this.$z_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (178,4)
    set_secondaryEntityCode: function Mscrm_Condition$set_secondaryEntityCode(value) {
        this.$z_3 = value;
        return value;
    },
    
    $d_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (184,3)
    $H_3: function Mscrm_Condition$$H_3($p0) {
        return (this.get_generateDynamicId()) ? $p0 + '_' + this.get_id() : $p0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (190,4)
    get_headerVisible: function Mscrm_Condition$get_headerVisible() {
        if (IsNull(this.$d_3)) {
            this.$d_3 = (XUI.Html.GetComputedStyle($get(this.$H_3('cnd_header')), 'display').toLowerCase() === 'none') ? false : true;
        }
        return this.$d_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (198,4)
    set_headerVisible: function Mscrm_Condition$set_headerVisible(value) {
        this.$d_3 = value;
        if (this.$d_3) {
            $get(this.$H_3('cnd_header')).style.display = '';
        }
        else {
            $get(this.$H_3('cnd_header')).style.display = 'none';
        }
        return value;
    },
    
    $15_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (215,4)
    get_entityListVisible: function Mscrm_Condition$get_entityListVisible() {
        return this.$15_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (216,4)
    set_entityListVisible: function Mscrm_Condition$set_entityListVisible(value) {
        this.$15_3 = value;
        return value;
    },
    
    $1C_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (222,4)
    get_relatedEntitiesVisible: function Mscrm_Condition$get_relatedEntitiesVisible() {
        return this.$1C_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (223,4)
    set_relatedEntitiesVisible: function Mscrm_Condition$set_relatedEntitiesVisible(value) {
        this.$1C_3 = value;
        return value;
    },
    
    $11_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (229,4)
    get_simpleMode: function Mscrm_Condition$get_simpleMode() {
        if (IsNull(this.$11_3)) {
            this.$11_3 = this.get_element().getAttribute('simplemode');
        }
        return this.$11_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (237,4)
    set_simpleMode: function Mscrm_Condition$set_simpleMode(value) {
        this.$11_3 = value;
        return value;
    },
    
    $1O_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (243,4)
    get_modesEnum: function Mscrm_Condition$get_modesEnum() {
        return this.$1O_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (244,4)
    set_modesEnum: function Mscrm_Condition$set_modesEnum(value) {
        this.$1O_3 = value;
        return value;
    },
    
    $h_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (250,4)
    get_columnWidthInPixels: function Mscrm_Condition$get_columnWidthInPixels() {
        if (IsNull(this.$h_3) || !this.$h_3) {
            this.$h_3 = this.get_element().getAttribute('columnwidthinpixels');
        }
        return this.$h_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (259,4)
    set_columnWidthInPixels: function Mscrm_Condition$set_columnWidthInPixels(value) {
        this.$h_3 = value;
        return value;
    },
    
    $1B_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (265,4)
    get_readOnlyMode: function Mscrm_Condition$get_readOnlyMode() {
        this.$1B_3 = (this.get_element().getAttribute('readonlymode') === '1') ? true : false;
        return this.$1B_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (271,4)
    set_readOnlyMode: function Mscrm_Condition$set_readOnlyMode(value) {
        this.get_element().setAttribute('readonlymode', (value) ? '1' : '0');
        this.$1B_3 = value;
        return value;
    },
    
    $16_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (281,4)
    get_expressionType: function Mscrm_Condition$get_expressionType() {
        return this.$16_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (282,4)
    set_expressionType: function Mscrm_Condition$set_expressionType(value) {
        this.$16_3 = value;
        return value;
    },
    
    $e_3: null,
    $w_3: null,
    $18_3: null,
    $1Q_3: null,
    $1R_3: null,
    $1S_3: null,
    $1P_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (297,4)
    get_notifyConditionsChanged: function Mscrm_Condition$get_notifyConditionsChanged() {
        return this.$e_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (298,4)
    set_notifyConditionsChanged: function Mscrm_Condition$set_notifyConditionsChanged(value) {
        this.$e_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (303,4)
    get_getUserDefinedList: function Mscrm_Condition$get_getUserDefinedList() {
        if (IsNull(this.$w_3)) {
            this.$w_3 = this.get_element().getAttribute('getuserdefinedlist');
        }
        return this.$w_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (312,4)
    set_getUserDefinedList: function Mscrm_Condition$set_getUserDefinedList(value) {
        this.$w_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (317,4)
    get_getUserDefinedXml: function Mscrm_Condition$get_getUserDefinedXml() {
        return this.$18_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (318,4)
    set_getUserDefinedXml: function Mscrm_Condition$set_getUserDefinedXml(value) {
        this.$18_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (323,4)
    get_onPopulateAttributeList: function Mscrm_Condition$get_onPopulateAttributeList() {
        return this.$1Q_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (324,4)
    set_onPopulateAttributeList: function Mscrm_Condition$set_onPopulateAttributeList(value) {
        this.$1Q_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (329,4)
    get_generateDynamicId: function Mscrm_Condition$get_generateDynamicId() {
        if (!this.get_element().getAttribute('genDynamicId')) {
            return false;
        }
        return (this.get_element().getAttribute('genDynamicId').toString() === 'True');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (338,4)
    get_onPopulateEntityList: function Mscrm_Condition$get_onPopulateEntityList() {
        return this.$1R_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (339,4)
    set_onPopulateEntityList: function Mscrm_Condition$set_onPopulateEntityList(value) {
        this.$1R_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (344,4)
    get_onPopulateOperatorList: function Mscrm_Condition$get_onPopulateOperatorList() {
        return this.$1S_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (345,4)
    set_onPopulateOperatorList: function Mscrm_Condition$set_onPopulateOperatorList(value) {
        this.$1S_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (350,4)
    get_onCreateValueControl: function Mscrm_Condition$get_onCreateValueControl() {
        return this.$1P_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (351,4)
    set_onCreateValueControl: function Mscrm_Condition$set_onCreateValueControl(value) {
        this.$1P_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (356,3)
    OnPopulateFieldListForWorkflow: function Mscrm_Condition$OnPopulateFieldListForWorkflow(conditionEntity) {
        var $v_0 = {};
        $v_0['entityName'] = conditionEntity['sEntityName'];
        var $v_1 = this.$6_3.ExecuteCommand('GetAdditionalFieldListForCondition', 'Workflow', $v_0, null, null, null);
        if (!IsNull($v_1)) {
            conditionEntity['sCustomFields'] = $v_1;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (368,3)
    Clear: function Mscrm_Condition$Clear() {
        if ((!IsNull(this.$a_3) && this.$a_3.children.length > 0) && (!this.get_isDirty() || confirm(window.LOCID_AF_SEARCHMODIFIED_MSG))) {
            this.$1T_3();
            this.set_isDirty(true);
            this.$G_3.set_xml('<and></and>');
            var $v_0 = this.$e_3;
            if (!IsNull($v_0) && 'function' === typeof($v_0)) {
                $v_0(null);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (388,3)
    Group: function Mscrm_Condition$Group(op) {
        var $v_0 = [];
        var $v_1 = false;
        var $v_2 = 0;
        var $v_3;
        $v_0.push(this.$G_3.get_element());
        while ($v_0.length > 0) {
            var $v_4 = $v_0.pop();
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_4.tagName, 'Crm:ConditionGroup')) {
                $v_3 = ($find($v_4.id)).Group(op);
                $v_2 += $v_3;
                $v_1 = ($v_1 || ($v_3 === 1));
            }
            var $v_5 = $find($v_4.id);
            if (IsNull($v_5) || !Mscrm.Condition.isImplementsContainerControl($v_5)) {
                continue;
            }
            var $v_6 = $v_5.get_Children();
            if (IsNull($v_6) || !$v_6.length) {
                continue;
            }
            var $v_7 = $v_6.length;
            while ($v_7 > 0) {
                $v_7--;
                $v_0.push($v_6[$v_7]);
            }
        }
        if ($v_1 || !$v_2) {
            alert(window.LOCID_AF_ERRORGROUPING_MSG);
        }
        this.set_isDirty(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (447,3)
    $1T_3: function Mscrm_Condition$$1T_3() {
        this.$a_3 = $get(this.$H_3('cnd_spnDetailed'));
        if (!IsNull(XUI.Html.DomUtils.GetFirstChild(this.$a_3))) {
            Mscrm.ConditionCommon.DisposeDirectChilds(this.$a_3);
            this.$a_3.innerHTML = '';
        }
        var $v_0 = window.document.createElement('Crm:ConditionControl');
        $v_0.id = this.$H_3('E');
        this.$a_3.appendChild($v_0);
        var $v_1 = {};
        $v_1['conditionParentControl'] = this;
        $v_1['conditionContainer'] = this.get_container();
        this.$G_3 = $create(Mscrm.ConditionControl, $v_1, null, null, $v_0);
        this.$G_3.get_element().style.height = 'auto';
        this.$G_3.get_element().className = 'ms-crm-Condition-Control';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (472,3)
    GetColumnArray: function Mscrm_Condition$GetColumnArray() {
        if (!IsNull(this.get_columns())) {
            var $v_0 = this.get_columns().split(';');
            return $v_0;
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (483,3)
    GetColumnData: function Mscrm_Condition$GetColumnData(column) {
        return $get(column);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (490,3)
    $1e_3: function Mscrm_Condition$$1e_3() {
        this.$1T_3();
        if (!IsNull($get(this.$H_3('Xml')).getAttribute('xml'))) {
            this.$G_3.set_xml($get(this.$H_3('Xml')).getAttribute('xml'));
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (499,3)
    ParseXml: function Mscrm_Condition$ParseXml() {
        return this.GetConditionGroup().ParseXml();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (505,3)
    GetConditionGroup: function Mscrm_Condition$GetConditionGroup() {
        if (!IsNull(this.$G_3) && !IsNull(this.$G_3.get_element()) && !IsNull(XUI.Html.DomUtils.GetFirstChild(this.$G_3.get_element()))) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$G_3.get_element()));
            return ($find($v_0.id));
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (518,3)
    GetXml: function Mscrm_Condition$GetXml() {
        if (!IsNull(this.$G_3) && !IsNull(this.$G_3.get_element()) && !IsNull(XUI.Html.DomUtils.GetFirstChild(this.$G_3.get_element()))) {
            return this.GetConditionGroup().GetXml();
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (529,3)
    LoadXml: function Mscrm_Condition$LoadXml(xml) {
        $get(this.$H_3('Xml')).setAttribute('xml', xml);
        this.$1e_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (537,3)
    $1i_3: function Mscrm_Condition$$1i_3() {
        var $v_0 = $get(this.$H_3('lookup'));
        var $v_1 = $get(this.$H_3('date'));
        var $v_2 = $get(this.$H_3('txt'));
        var $v_3 = $get(this.$H_3('num'));
        var $v_4 = $get(this.$H_3('picklist'));
        var $v_5 = $get(this.$H_3('datetime'));
        this.$6_3.PutElement('ValueControl', 'lookup', $v_0.removeChild(XUI.Html.DomUtils.GetFirstChild($v_0)));
        this.$6_3.PutElement('ValueControl', 'date', $v_1.removeChild(XUI.Html.DomUtils.GetFirstChild($v_1)));
        this.$6_3.PutElement('ValueControl', 'string', $v_2.removeChild(XUI.Html.DomUtils.GetFirstChild($v_2)));
        this.$6_3.PutElement('ValueControl', 'number', $v_3.removeChild(XUI.Html.DomUtils.GetFirstChild($v_3)));
        this.$6_3.PutElement('ValueControl', 'picklist', $v_4.removeChild(XUI.Html.DomUtils.GetFirstChild($v_4)));
        this.$6_3.PutElement('ValueControl', 'datetime', $v_5.removeChild(XUI.Html.DomUtils.GetFirstChild($v_5)));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (553,3)
    LoadDynamicValues: function Mscrm_Condition$LoadDynamicValues(valueControl, attribute) {
        try {
            LoadDynamicValuesForAttribute(valueControl,attribute);
        }
        catch ($v_0) {
            if ($v_0.message.indexOf('LoadDynamicValuesForAttribute') < 0 || $v_0.toString() !== 'TypeError') {
                throw $v_0;
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (568,3)
    $1y_3: function Mscrm_Condition$$1y_3() {
        try {
            _isConditionMode = true;;
        }
        catch ($$e_0) {
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (601,3)
    initialize: function Mscrm_Condition$initialize() {
        this.set_isDirty(false);
        if (IsNull(this.$d_3)) {
            this.set_headerVisible(false);
        }
        this.$15_3 = false;
        this.$1C_3 = false;
        ConfigureToolbars(this.get_element());
        this.$6_3 = new CacheManager();
        this.$6_3.Initialize(true);
        if (IsNull(Mscrm.ConditionCommon.ControlsCache) || this.get_generateDynamicId()) {
            Mscrm.ConditionCommon.ControlsCache = [];
            this.$1i_3();
        }
        $get(this.$H_3('cnd_spnDetailed')).style.display = 'block';
        this.$1e_3();
        this.$1y_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Condition.cs (637,3)
    dispose: function Mscrm_Condition$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$G_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$G_3);
            this.$G_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionAutoShow = function Mscrm_ConditionAutoShow(element) {
    Mscrm.ConditionAutoShow.initializeBase(this, [ element ]);
}
Mscrm.ConditionAutoShow.prototype = {
    $R_4: null,
    $q_4: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (25,4)
    get_conditionContainer: function Mscrm_ConditionAutoShow$get_conditionContainer() {
        return this.$R_4;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (29,4)
    set_conditionContainer: function Mscrm_ConditionAutoShow$set_conditionContainer(value) {
        this.$R_4 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (33,4)
    get_conditionParentControl: function Mscrm_ConditionAutoShow$get_conditionParentControl() {
        if (IsNull(this.$q_4)) {
            this.$q_4 = this.get_parent();
        }
        return this.$q_4;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (41,4)
    set_conditionParentControl: function Mscrm_ConditionAutoShow$set_conditionParentControl(value) {
        this.$q_4 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (44,3)
    setContainerDirty: function Mscrm_ConditionAutoShow$setContainerDirty(isDirty) {
        this.$R_4.set_isDirty(isDirty);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (49,3)
    hideVisibleControl: function Mscrm_ConditionAutoShow$hideVisibleControl() {
        Mscrm.ConditionCommon.HideVisibleControl(this.$R_4);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (54,3)
    setContainerVisibleControl: function Mscrm_ConditionAutoShow$setContainerVisibleControl() {
        this.$R_4.$V_3 = this;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (60,3)
    onKeyUpHandler: function Mscrm_ConditionAutoShow$onKeyUpHandler(domEvent) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(domEvent.target.id);
        var $v_1 = null;
        if (!IsNull($v_0)) {
            $v_1 = $v_0.get_dataValue();
        }
        else {
            var $v_2 = $find(domEvent.target.id);
            if (!IsNull($v_2)) {
                $v_1 = $v_2.get_dataValue();
            }
        }
        if ($v_1 !== this.get_originalValue()) {
            this.$R_4.set_isDirty(true);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (84,3)
    onClick: function Mscrm_ConditionAutoShow$onClick(domEvent) {
        if (this.get_disabled()) {
            return;
        }
        if (this.$R_4.$V_3 !== this) {
            this.hideVisibleControl();
            this.$R_4.$V_3 = this;
        }
        Mscrm.AutoShow.prototype.set_hideControl.call(this, false);
    }
}


Mscrm.ConditionCommon = function Mscrm_ConditionCommon() {
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (161,3)
Mscrm.ConditionCommon.HideVisibleControl = function Mscrm_ConditionCommon$HideVisibleControl(condition) {
    if (!IsNull(condition.$V_3)) {
        condition.$V_3.ShowControl(false, false);
        condition.$V_3 = null;
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (175,3)
Mscrm.ConditionCommon.DisposeDirectChilds = function Mscrm_ConditionCommon$DisposeDirectChilds(root) {
    if (!IsNull(root)) {
        XUI.Html.DomUtils.ForEachChild(root, function($p1_0) {
            if (!isNullOrEmptyString($p1_0.id)) {
                Mscrm.ConditionCommon.DisposeAndDeleteElement($p1_0);
            }
            return false;
        });
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (196,3)
Mscrm.ConditionCommon.DisposeAndDeleteControl = function Mscrm_ConditionCommon$DisposeAndDeleteControl(component) {
    component.dispose();
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (206,3)
Mscrm.ConditionCommon.DisposeAndDeleteElement = function Mscrm_ConditionCommon$DisposeAndDeleteElement(control) {
    var $v_0 = $find(control.id);
    if (!IsNull($v_0)) {
        Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0);
    }
    $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
    if (!IsNull($v_0)) {
        Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0);
    }
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (228,3)
Mscrm.ConditionCommon.GetControlId = function Mscrm_ConditionCommon$GetControlId(parentId, suffix) {
    return parentId + suffix;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (239,3)
Mscrm.ConditionCommon.GetPropertiesForChild = function Mscrm_ConditionCommon$GetPropertiesForChild(component) {
    var $v_0 = {};
    $v_0['conditionParentControl'] = component;
    $v_0['conditionContainer'] = component.get_conditionContainer();
    return $v_0;
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (254,3)
Mscrm.ConditionCommon.CheckControlByTagName = function Mscrm_ConditionCommon$CheckControlByTagName(tagName, controlType) {
    tagName = tagName.toUpperCase();
    controlType = controlType.toUpperCase();
    if (tagName === controlType) {
        return true;
    }
    return (controlType.length === tagName.length + 4 && controlType.endsWith(tagName));
}
// file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionCommon.cs (270,3)
Mscrm.ConditionCommon.IsConditionField = function Mscrm_ConditionCommon$IsConditionField(control) {
    var $v_0 = control;
    return (!IsNull($v_0) && Mscrm.ConditionCommon.CheckControlByTagName($v_0.get_element().nodeName, 'Crm:ConditionField'));
}


Mscrm.ConditionControl = function Mscrm_ConditionControl(element) {
    this.$B_3 = [];
    this.HideAffectedControls = this.hideAffectedControls;
    this.get_Children = this.get_children;
    this.ParseXml = this.parseXml;
    this.GetXml = this.getXml;
    this.GetControl = this.getControl;
    Mscrm.ConditionControl.initializeBase(this, [ element ]);
}
Mscrm.ConditionControl.prototype = {
    $L_3: null,
    $1g_3: null,
    $M_3: false,
    $3_3: null,
    $F_3: null,
    $1_3: null,
    $g_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (28,4)
    get_conditionContainer: function Mscrm_ConditionControl$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (29,4)
    set_conditionContainer: function Mscrm_ConditionControl$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (34,4)
    get_conditionParentControl: function Mscrm_ConditionControl$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (35,4)
    set_conditionParentControl: function Mscrm_ConditionControl$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (41,4)
    get_xml: function Mscrm_ConditionControl$get_xml() {
        return this.$F_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (42,4)
    set_xml: function Mscrm_ConditionControl$set_xml(value) {
        this.$F_3 = value;
        if (!this.$M_3 || IsNull(this.$F_3)) {
            return value;
        }
        var $v_0 = this.GetFilterCtrl(0);
        ($find($v_0.id)).set_xml(this.$F_3);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (59,4)
    get_children: function Mscrm_ConditionControl$get_children() {
        return this.GetChildren();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (63,4)
    set_children: function Mscrm_ConditionControl$set_children(value) {
        this.$g_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (72,3)
    addEmptyControl: function Mscrm_ConditionControl$addEmptyControl() {
        this.AddNewConditionGroup(1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (79,3)
    GetFilterCtrl: function Mscrm_ConditionControl$GetFilterCtrl($p0) {
        return XUI.Html.DomUtils.GetChildElementAt(this.$L_3, $p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (91,3)
    AddNewConditionGroup: function Mscrm_ConditionControl$AddNewConditionGroup($p0, $p1) {
        var $v_0 = document.createElement('Crm:ConditionGroup');
        $v_0.setAttribute('Clause', 'and');
        $v_0.id = this.get_element().id + 'FGRP';
        $v_0.style.display = 'block';
        var $v_1 = this.AddControl($v_0, $p0, $p1);
        if (!IsNull($v_1)) {
            return $create(Mscrm.ConditionGroup, Mscrm.Condition.getPropertiesForChild(this), null, null, $v_0);
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (110,3)
    FieldChanged: function Mscrm_ConditionControl$FieldChanged(sender, args) {
        var $v_0 = null;
        var $v_1 = XUI.Html.DomUtils.GetLastChild(this.$L_3);
        if (IsNull($v_1)) {
            $v_0 = $find($v_1.id);
        }
        if (IsNull($v_0)) {
            $v_0 = this.AddNewConditionGroup(1);
            $v_0.set_groupClause('and');
        }
        if ($v_0.get_groupClause() !== 'and') {
            var $v_3 = this.AddNewConditionGroup(1);
            $v_3.set_groupClause('and');
            $v_0 = $find(this.$L_3.removeChild($v_0.get_element()).id);
            $v_3.AddControl($v_0.get_element(), 2, null, 0);
            $v_0 = $v_3;
        }
        var $v_2 = $v_0.AddNewConditionField(1, null);
        $v_2.SetFocus();
        this.$1_3.set_isDirty(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (143,3)
    GetNumControls: function Mscrm_ConditionControl$GetNumControls() {
        return ((this.$M_3) ? this.$L_3.children.length : this.$B_3.length);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (154,3)
    AddUngroupedField: function Mscrm_ConditionControl$AddUngroupedField($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1);
        if (!IsNull($p1) && !IsNull($v_0)) {
            var $v_3 = $find($v_0.id);
            if (!IsNull($v_3) && $v_3.get_groupClause() === 'and') {
                return $v_3.AddControl($p0, 1, null);
            }
        }
        var $v_1 = XUI.Html.DomUtils.GetNextSibling($p1);
        if (!IsNull($p1) && !IsNull($v_1)) {
            var $v_4 = $find($v_1.id);
            if (!IsNull($v_4) && $v_4.get_groupClause() === 'and') {
                $v_4.AddControl($p0, 2, null);
            }
        }
        var $v_2 = this.AddNewConditionGroup(3, $p1);
        $v_2.set_groupClause('and');
        return $v_2.AddControl($p0, 1, null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (195,3)
    AddControl: function Mscrm_ConditionControl$AddControl(control, where, whichControl, pos, ungrouping) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_conditionParentControl(this);
            $v_0.set_conditionContainer(this.$1_3);
        }
        if (this.$M_3) {
            var $v_1 = this.$L_3;
            if (Mscrm.ConditionCommon.CheckControlByTagName(control.tagName, 'Crm:ConditionField') && ungrouping) {
                return this.AddUngroupedField(control, whichControl);
            }
            if (IsNull(pos)) {
                if ((where === 3 || where === 4) && (!IsNull(whichControl) || (whichControl.parentNode !== $v_1))) {
                    return null;
                }
                $v_1.style.display = 'block';
                switch (where) {
                    case 2:
                        if ($v_1.hasChildNodes()) {
                            $v_1.insertBefore(control, $v_1.children[0]);
                        }
                        else {
                            $v_1.appendChild(control);
                        }
                        break;
                    case 3:
                        var $v_2 = false;
                        var $v_3 = $v_1.children.length - 2;
                        while ($v_3 >= 0) {
                            if ($v_1.children[$v_3] === whichControl) {
                                $v_1.insertBefore(control, $v_1.children[$v_3 + 1]);
                                $v_2 = true;
                                break;
                            }
                            $v_3--;
                        }
                        if (!$v_2) {
                            $v_1.appendChild(control);
                        }
                        break;
                    case 4:
                        $v_3 = $v_1.children.length - 1;
                        while ($v_3 >= 0) {
                            if ($v_1.children[$v_3] === whichControl) {
                                $v_1.insertBefore(control, $v_1.children[$v_3]);
                                break;
                            }
                            $v_3--;
                        }
                        break;
                    case 1:
                    default:
                        $v_1.appendChild(control);
                        break;
                }
            }
            else {
                if (pos >= $v_1.children.length || pos < 0) {
                    return null;
                }
                $v_1.insertBefore(control, $v_1.children[pos]);
            }
        }
        else {
            if (where !== 1) {
                return null;
            }
            this.$B_3[this.$B_3.length] = control;
        }
        return control;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (314,3)
    DeleteControl: function Mscrm_ConditionControl$DeleteControl(control, detachAjaxControl) {
        var $v_0 = this.$L_3;
        $v_0.removeChild(control);
        if (!$v_0.children.length) {
            $v_0.style.display = 'none';
        }
        this.$1_3.set_isDirty(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (328,3)
    GetChildren: function Mscrm_ConditionControl$GetChildren() {
        var $v_0 = [];
        var $v_1 = 0, $v_2 = 0;
        if (!IsNull(this.$L_3) && !IsNull(this.$L_3.children) && this.$L_3.children.length > 0) {
            $v_1 = this.$L_3.children.length;
            while ($v_2 < $v_1) {
                $v_0[$v_0.length] = (this.GetFilterCtrl($v_2));
                $v_2++;
            }
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (355,3)
    hideAffectedControls: function Mscrm_ConditionControl$hideAffectedControls(index) {
        (this.getControl(index)).HideAffectedControls(index);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (364,3)
    parseXml: function Mscrm_ConditionControl$parseXml() {
        var $v_0 = this.GetNumControls();
        for (var $v_1 = 0; $v_1 < $v_0; ++$v_1) {
            if (!(this.getControl($v_1)).ParseXml()) {
                return false;
            }
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (383,3)
    getXml: function Mscrm_ConditionControl$getXml() {
        var $v_0 = this.GetNumControls();
        var $v_1 = '';
        for (var $v_2 = 0; $v_2 < $v_0; ++$v_2) {
            var $v_3 = (this.getControl($v_2)).GetXml();
            if (!IsNull($v_3)) {
                $v_1 += $v_3;
            }
            $v_2++;
        }
        return $v_1;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (407,3)
    getControl: function Mscrm_ConditionControl$getControl(index) {
        var $v_0 = ((this.$M_3) ? this.$g_3[index] : this.$B_3[index]);
        return (IsNull($v_0)) ? null : $find($v_0.id);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (426,3)
    initialize: function Mscrm_ConditionControl$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = '<div class=\'ms-crm-AdvFind-Filter\' style=\'display:none\'></div><div class=\'ms-crm-AdvFind-EmptyField\'><span class=\'ms-crm-AdvFind-EmptyField\' style=\'visibility:hidden\'></span></div>';
        this.$L_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        this.$1g_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1);
        this.$M_3 = true;
        this.addEmptyControl();
        this.set_xml(this.$F_3);
        this.$F_3 = null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionControl.cs (446,3)
    dispose: function Mscrm_ConditionControl$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionEntityList = function Mscrm_ConditionEntityList(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    Mscrm.ConditionEntityList.initializeBase(this, [ element ]);
}
Mscrm.ConditionEntityList.prototype = {
    $C_3: false,
    $0_3: null,
    $2_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (32,4)
    get_dataValue: function Mscrm_ConditionEntityList$get_dataValue() {
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (33,4)
    set_dataValue: function Mscrm_ConditionEntityList$set_dataValue(value) {
        this.$2_3 = value;
        if (this.$C_3) {
            this.$0_3.set_value(value);
            if (!IsNull(value)) {
                if (!IsNull(this.$E_3)) {
                    this.$E_3.set_entity(this.$2_3);
                }
                if (!IsNull(this.$A_3)) {
                    this.$A_3.set_entity(this.$2_3);
                }
            }
        }
        return value;
    },
    
    $E_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (60,4)
    get_dependentAttribute: function Mscrm_ConditionEntityList$get_dependentAttribute() {
        return this.$E_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (61,4)
    set_dependentAttribute: function Mscrm_ConditionEntityList$set_dependentAttribute(value) {
        this.$E_3 = value;
        return value;
    },
    
    $A_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (69,4)
    get_dependentValue: function Mscrm_ConditionEntityList$get_dependentValue() {
        return this.$A_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (70,4)
    set_dependentValue: function Mscrm_ConditionEntityList$set_dependentValue(value) {
        this.$A_3 = value;
        return value;
    },
    
    $3_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (77,4)
    get_conditionParentControl: function Mscrm_ConditionEntityList$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (78,4)
    set_conditionParentControl: function Mscrm_ConditionEntityList$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    $7_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (85,4)
    get_columnData: function Mscrm_ConditionEntityList$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (86,4)
    set_columnData: function Mscrm_ConditionEntityList$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    $1_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (93,4)
    get_conditionContainer: function Mscrm_ConditionEntityList$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (94,4)
    set_conditionContainer: function Mscrm_ConditionEntityList$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    $N_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (101,4)
    get_width: function Mscrm_ConditionEntityList$get_width() {
        return this.$N_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (102,4)
    set_width: function Mscrm_ConditionEntityList$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (109,4)
    get_index: function Mscrm_ConditionEntityList$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (110,4)
    set_index: function Mscrm_ConditionEntityList$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (124,3)
    getSelectList: function Mscrm_ConditionEntityList$getSelectList() {
        return this.$0_3.get_innerControl();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (130,3)
    render: function Mscrm_ConditionEntityList$render() {
        if (IsNull(this.$0_3)) {
            return;
        }
        var $v_0 = null;
        var $v_1 = this.$1_3.get_getUserDefinedList();
        if (!IsNull($v_1) && 'function' === typeof($v_1)) {
            var $v_2 = {};
            $v_2['ID'] = this.$7_3.id;
            $v_2['Element'] = this.get_element();
            $v_0 = $v_1($v_2);
        }
        if (!IsNull($v_0)) {
            this.$0_3.setInnerControlHtml('<select class=\'ms-crm-SelectBox\'>' + CrmEncodeDecode.CrmHtmlEncode($v_0) + '</select>');
        }
        else {
            this.$0_3.setInnerControlHtml('<select class=\'ms-crm-SelectBox\'>' + this.$1G_3() + '</select>');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (161,3)
    $1G_3: function Mscrm_ConditionEntityList$$1G_3() {
        var $v_0 = '';
        var $v_1 = '';
        var $v_2 = 0;
        var $v_3 = '';
        var $v_4 = '';
        while (true) {
            var $v_5 = 'id' + $v_2;
            var $v_6 = 'name' + $v_2;
            var $v_7 = this.$7_3.attributes.getNamedItem($v_5);
            var $v_8 = this.$7_3.attributes.getNamedItem($v_6);
            if (IsNull($v_7) || IsNull($v_8)) {
                break;
            }
            if (!$v_2 && $v_7.value.substr(0, 1) !== '#' && $v_7.value.indexOf('.') < 0) {
                $v_3 = $v_8.value;
                $v_4 = String.format('<OPTGROUP id=\'id{0}\' label=\'{1}\'><OPTION VALUE=\'{2}\'>{3}</OPTION></OPTGROUP>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_PRIMARY_ENTITY_GROUP), CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value), CrmEncodeDecode.CrmHtmlEncode($v_8.value));
            }
            else {
                if (($v_7.value.substr(0, 1) === '#') || ($v_7.value.indexOf('.') !== $v_7.value.lastIndexOf('.'))) {
                    $v_1 += '<OPTION VALUE=\'' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value) + '\'>' + CrmEncodeDecode.CrmHtmlEncode($v_8.value) + '</OPTION>';
                }
                else {
                    $v_0 += '<OPTION VALUE=\'' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value) + '\'>' + CrmEncodeDecode.CrmHtmlEncode($v_8.value) + '</OPTION>';
                }
            }
            $v_2++;
        }
        if (!isNullOrEmptyString($v_3)) {
            if (!isNullOrEmptyString($v_0)) {
                var $v_9 = String.format('<OPTGROUP id=\'idRelatedTo{0}\' label=\'{1}\' Sort=\'Ascending\'>{2}</OPTGROUP>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_RELATED_ENTITY_GROUP), $v_0);
                $v_0 = $v_4 + $v_9;
            }
            else {
                $v_0 = $v_4;
            }
        }
        else {
            if (!isNullOrEmptyString($v_0)) {
                $v_0 = String.format('<OPTGROUP id=\'idRelatedTo{0}\' label=\'{1}\' Sort=\'Ascending\'>{2}</OPTGROUP>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_RELATED_ENTITY_GROUP), $v_0);
            }
        }
        if (!isNullOrEmptyString($v_1)) {
            $v_0 += String.format('<OPTGROUP id=\'idLocalValues{0}\' label=\'{1}\' Sort=\'Ascending\'>{2}</OPTGROUP>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_3), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_LOCAL_VALUES_GROUP), $v_1);
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (252,3)
    ParseXml: function Mscrm_ConditionEntityList$ParseXml() {
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (258,3)
    GetXml: function Mscrm_ConditionEntityList$GetXml() {
        if (IsNull(this.get_dataValue())) {
            return null;
        }
        else {
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.get_dataValue()) + '\" />';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (272,3)
    $W_3: function Mscrm_ConditionEntityList$$W_3($p0, $p1) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_3.get_innerControl().id);
        if ($v_0.get_selectedIndex() === -1) {
            return;
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if ($v_1 !== this.get_dataValue() && !IsNull(this.$E_3)) {
            this.$E_3.set_entity(this.get_dataValue());
            this.$E_3.set_dataValue(null);
            $get(this.$E_3.get_id()).style.visibility = 'visible';
        }
        if ($v_1 !== this.get_dataValue() && !IsNull(this.$A_3)) {
            this.$A_3.set_entity(this.get_dataValue());
            this.$A_3.set_attribute(null);
        }
        this.$Q_3(false);
        if (!IsNull(this.$3_3) && !(this.$3_3).get_isGrouped() && IfTimeoutExpressionPresented(this.$3_3.get_element())) {
            $v_0.set_selectedIndex(-1);
            return;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (313,3)
    $Q_3: function Mscrm_ConditionEntityList$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (324,4)
    add_change: function Mscrm_ConditionEntityList$add_change(value) {
        this.get_events().addHandler('OnChange', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (325,4)
    remove_change: function Mscrm_ConditionEntityList$remove_change(value) {
        this.get_events().removeHandler('OnChange', value);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (336,3)
    initialize: function Mscrm_ConditionEntityList$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\'/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'ENTITY')));
        this.$C_3 = true;
        var $v_0 = this.get_element().id + '_select';
        var $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1['value'] = this.$2_3;
        $v_1['defaultText'] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1['width'] = this.get_width();
        var $v_2 = {};
        $v_2['onChange'] = this.$$d_$W_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_1, $v_2, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml('<select id=\'' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) + '\' class=\'ms-crm-SelectBox\'>' + this.$1G_3() + '</select>');
        if (this.$1_3.get_readOnlyMode()) {
            this.$0_3.set_disabled(true);
        }
        window.setTimeout(this.$$d_$n_3, 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (364,3)
    $n_3: function Mscrm_ConditionEntityList$$n_3() {
        if (this.get_isDisposed()) {
            return;
        }
        this.set_dataValue(this.$2_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionEntityList.cs (371,3)
    dispose: function Mscrm_ConditionEntityList$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionField = function Mscrm_ConditionField(element) {
    this.$$d_OnMouseLeave = Function.createDelegate(this, this.OnMouseLeave);
    this.$$d_OnMouseEnter = Function.createDelegate(this, this.OnMouseEnter);
    this.$$d_OnMenuSpanClick = Function.createDelegate(this, this.OnMenuSpanClick);
    this.$$d_onMnuKeyUp = Function.createDelegate(this, this.onMnuKeyUp);
    this.$$d_HandleClick = Function.createDelegate(this, this.HandleClick);
    this.$$d_$1V_3 = Function.createDelegate(this, this.$1V_3);
    this.$$d_ToggleSelected = Function.createDelegate(this, this.ToggleSelected);
    this.$B_3 = [];
    this.get_Children = this.get_children;
    Mscrm.ConditionField.initializeBase(this, [ element ]);
}
Mscrm.ConditionField.prototype = {
    $19_3: false,
    $1A_3: false,
    $1h_3: false,
    $k_3: false,
    $J_3: null,
    $5_3: null,
    $X_3: null,
    $x_3: null,
    $s_3: null,
    $b_3: null,
    $u_3: null,
    $i_3: null,
    $Y_3: null,
    $4_3: null,
    $c_3: null,
    $U_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (47,4)
    add_onChange: function Mscrm_ConditionField$add_onChange(value) {
        this.get_events().addHandler('OnFieldChangeHandler', value);
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (48,4)
    remove_onChange: function Mscrm_ConditionField$remove_onChange(value) {
        this.get_events().removeHandler('OnFieldChangeHandler', value);
    },
    
    $1_3: null,
    $F_3: null,
    $3_3: null,
    $P_3: false,
    $Z_3: false,
    $g_3: null,
    $v_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (65,4)
    get_conditionContainer: function Mscrm_ConditionField$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (69,4)
    set_conditionContainer: function Mscrm_ConditionField$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (74,4)
    get_xml: function Mscrm_ConditionField$get_xml() {
        return this.$F_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (75,4)
    set_xml: function Mscrm_ConditionField$set_xml(value) {
        this.$F_3 = value;
        if (this.$k_3) {
            this.ShowXml(this.$F_3);
            this.$F_3 = null;
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (89,4)
    get_conditionParentControl: function Mscrm_ConditionField$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (90,4)
    set_conditionParentControl: function Mscrm_ConditionField$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    $S_3: false,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (97,3)
    SetFocus: function Mscrm_ConditionField$SetFocus() {
        this.$S_3 = true;
        if (this.$k_3) {
            this.$S_3 = false;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (108,4)
    get_defined: function Mscrm_ConditionField$get_defined() {
        return this.$P_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (109,4)
    set_defined: function Mscrm_ConditionField$set_defined(value) {
        this.$P_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (114,4)
    get_firstFieldDefined: function Mscrm_ConditionField$get_firstFieldDefined() {
        return this.$Z_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (115,4)
    set_firstFieldDefined: function Mscrm_ConditionField$set_firstFieldDefined(value) {
        this.$Z_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (120,4)
    get_children: function Mscrm_ConditionField$get_children() {
        return this.$g_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (121,4)
    set_children: function Mscrm_ConditionField$set_children(value) {
        this.$g_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (126,4)
    get_selected: function Mscrm_ConditionField$get_selected() {
        return this.GetSelected();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (127,4)
    set_selected: function Mscrm_ConditionField$set_selected(value) {
        this.SetSelected(value);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (135,4)
    get_isGrouped: function Mscrm_ConditionField$get_isGrouped() {
        return !IsNull(this.$3_3) && (this.$3_3).$t_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (151,3)
    GetEntityAttribute: function Mscrm_ConditionField$GetEntityAttribute($p0) {
        var $v_0 = this.$1_3.get_primaryEntityCode();
        var $v_1 = this.$1_3.get_secondaryEntityCode();
        if ($p0 === 'Attribute') {
            if (!this.$19_3 && !IsNull($v_0)) {
                this.$19_3 = true;
                return $v_0;
            }
            else if (this.$19_3 && !IsNull($v_1)) {
                return $v_1;
            }
            else {
                return null;
            }
        }
        else if ($p0 === 'Value') {
            if (!this.$1A_3 && !IsNull($v_0)) {
                this.$1A_3 = true;
                return $v_0;
            }
            else if (this.$1A_3 && !IsNull($v_1)) {
                return $v_1;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (203,3)
    GetColumnWidth: function Mscrm_ConditionField$GetColumnWidth() {
        return '100%';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (213,3)
    AppendControl: function Mscrm_ConditionField$AppendControl($p0) {
        if (!IsNull(this.$1_3.get_columnWidthInPixels())) {
            $p0.style.width = this.$1_3.get_columnWidthInPixels().toString() + 'px';
        }
        else {
            $p0.style.width = this.GetColumnWidth();
        }
        var $v_0 = this.get_id() + 'field' + this.GetNumControls();
        var $v_1 = $get($v_0, this.get_element());
        $v_1.appendChild($p0);
        this.$B_3[this.$B_3.length] = $p0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (232,3)
    onMnuKeyUp: function Mscrm_ConditionField$onMnuKeyUp($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_0 === 32 || $v_0 === 13) {
            this.ShowPopupMenu($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (242,3)
    OnMenuSpanClick: function Mscrm_ConditionField$OnMenuSpanClick($p0) {
        if (!$p0.ctrlKey) {
            this.ShowPopupMenu($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (251,3)
    OnMouseEnter: function Mscrm_ConditionField$OnMouseEnter($p0) {
        if (this.$P_3) {
            this.$J_3.className = 'ms-crm-AdvFind-SelectedFieldMenu';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (260,3)
    OnMouseLeave: function Mscrm_ConditionField$OnMouseLeave($p0) {
        if (this.$P_3) {
            this.$J_3.className = 'ms-crm-AdvFind-FieldMenu';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (273,3)
    GetMenuImg: function Mscrm_ConditionField$GetMenuImg() {
        return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_element())));
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (279,3)
    GetOuterDiv: function Mscrm_ConditionField$GetOuterDiv() {
        return XUI.Html.DomUtils.GetFirstChild(this.get_element());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (285,3)
    GetSelected: function Mscrm_ConditionField$GetSelected() {
        return this.$v_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (291,3)
    SetSelected: function Mscrm_ConditionField$SetSelected($p0) {
        this.$v_3 = $p0;
        if (this.$k_3) {
            var $v_0 = this.GetOuterDiv();
            $v_0.style.backgroundColor = (($p0) ? '#a7cdf0' : '#F9F9F9');
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (303,3)
    ToggleSelected: function Mscrm_ConditionField$ToggleSelected($p0) {
        if (!IsNull(this.$4_3)) {
            this.$4_3.hide();
        }
        this.set_selected(!this.$v_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (313,3)
    $1V_3: function Mscrm_ConditionField$$1V_3($p0) {
        this.$1U_3(null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (319,3)
    $1U_3: function Mscrm_ConditionField$$1U_3($p0) {
        if (confirm(window.LOCID_AF_DELETEFIELD)) {
            (this.$3_3).DeleteControl(this.get_element(), true);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (328,3)
    HandleClick: function Mscrm_ConditionField$HandleClick($p0) {
        if ($p0.ctrlKey) {
            this.ToggleSelected(null);
            $p0.stopPropagation();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (338,3)
    ShowPopupMenu: function Mscrm_ConditionField$ShowPopupMenu($p0) {
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement('DIV');
            $v_0.setAttribute('id', 'menuContainer');
            window.document.body.appendChild($v_0);
            this.$4_3 = Mscrm.Menu.createMenu($v_0);
            this.$4_3.set_menuId(this.$J_3.id);
            this.$4_3.set_stylePrefix(Mscrm.MenuStyles.popupStylePrefix);
            this.$4_3.set_width(170);
            this.$U_3 = Mscrm.MenuItem.createMenuItem(Mscrm.Utilities.emptyString);
            this.$U_3.set_actionCallback(this.$$d_ToggleSelected);
            this.$4_3.addItem(this.$U_3);
            this.$c_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$c_3.set_actionCallback(this.$$d_$1V_3);
            this.$4_3.addItem(this.$c_3);
        }
        this.$4_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$4_3.set_left($p0.clientX - $p0.offsetX);
        this.$U_3.set_title((this.$v_3) ? window.LOCID_AF_UNSELECTROW : window.LOCID_AF_SELECTROW);
        this.$4_3.show();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (381,3)
    GetStartElement: function Mscrm_ConditionField$GetStartElement() {
        return '<condition>';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (387,3)
    GetEndElement: function Mscrm_ConditionField$GetEndElement() {
        return '</condition>';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (393,3)
    ParseXml: function Mscrm_ConditionField$ParseXml() {
        if (!this.$Z_3) {
            return true;
        }
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = (this.GetControl($v_1));
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.get_element().tagName, 'Crm:OperatorList') && ($v_2).isUnary()) {
                return true;
            }
            if (!($v_2).ParseXml()) {
                return false;
            }
            $v_1++;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (427,3)
    GetXml: function Mscrm_ConditionField$GetXml() {
        if (!this.$P_3) {
            return null;
        }
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        var $v_2 = '';
        while ($v_1 < $v_0) {
            var $v_3 = this.GetDOMControl($v_1);
            var $v_4 = ($find($v_3.id)).GetXml();
            if (!IsNull($v_4)) {
                $v_2 += $v_4;
            }
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:OperatorList') && ($find($v_3.id)).isUnary()) {
                $v_1++;
                while ($v_1 < $v_0) {
                    var $v_5 = this.GetDOMControl($v_1);
                    if (Mscrm.ConditionCommon.CheckControlByTagName($v_5.tagName, 'Crm:Hidden')) {
                        $v_4 = ($find($v_5.id)).GetXml();
                        if (!IsNull($v_4)) {
                            $v_2 += $v_4;
                        }
                    }
                    else {
                        if (this.$1_3.get_id() === 'dupRuleAppCondition') {
                            if ((this.IsSingleEntityRuleExists() && $v_1 === 3) || (!this.IsSingleEntityRuleExists() && $v_1 === 4)) {
                                $v_2 += ($find($v_5.id)).GetXml();
                            }
                        }
                    }
                    $v_1++;
                }
                break;
            }
            $v_1++;
        }
        if ($v_2 === '') {
            return null;
        }
        else {
            return this.GetStartElement() + $v_2 + this.GetEndElement();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (495,3)
    SetXml: function Mscrm_ConditionField$SetXml($p0) {
        this.$F_3 = $p0;
        if (this.$k_3) {
            this.ShowXml($p0);
            this.$F_3 = null;
        }
        return;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (510,3)
    ShowXml: function Mscrm_ConditionField$ShowXml($p0) {
        if (IsNull($p0)) {
            return;
        }
        var $v_0 = this.$1_3.GetColumnArray();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.length;
            var $v_2 = 0;
            while ($v_2 < $v_1 && !IsNull($v_0[$v_2])) {
                var $v_3 = this.$1_3.GetColumnData($v_0[$v_2].toString());
                var $v_4 = $v_3.getAttribute('type').toString();
                if ($v_4 !== 'Predefined' && $v_4 !== 'Entity' && $v_4 !== 'Attribute' && $v_4 !== 'Operator' && $v_4 !== 'Value' && $v_4 !== 'Freeform' && $v_4 !== 'Hidden') {
                    $v_2++;
                    continue;
                }
                var $v_5 = './column[@id=\'' + $v_3.id + '\']';
                var $v_6 = XUI.Xml.SelectSingleNode($p0, $v_5, null);
                if (!$v_6) {
                    $v_2++;
                    continue;
                }
                if (!IsNull($v_6.attributes.getNamedItem('dataslugs')) && $v_6.attributes.getNamedItem('dataslugs').nodeValue === '0') {
                    this.SetControlDataValueProperty($v_2, null);
                    var $v_7 = this.$B_3[$v_2];
                    var $v_8 = $find($v_7.id);
                    $v_8.$j_3 = '0';
                    $v_8.setDataSlugs($v_6.attributes.getNamedItem('value').nodeValue, '0', $v_6.attributes.getNamedItem('dataslugtext').nodeValue);
                }
                else {
                    this.SetControlDataValueProperty($v_2, $v_6.attributes.getNamedItem('value').nodeValue);
                }
                $v_2++;
            }
        }
        this.ShowChildControlsOnRetrieve();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (575,3)
    DeleteControl: function Mscrm_ConditionField$DeleteControl(control, detachAjaxControl) {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (581,3)
    FieldChanged: function Mscrm_ConditionField$FieldChanged(sender, args) {
        this.$J_3.style.visibility = 'visible';
        this.$J_3.className = 'ms-crm-AdvFind-FieldMenu';
        this.GetMenuImg().style.visibility = 'visible';
        this.ShowChildControls();
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = this.GetDOMControl($v_1);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.tagName, 'Crm:Hidden')) {
                $v_1++;
                continue;
            }
            if (IsNull(this.GetControlDataValue($v_2)) && this.$1_3.get_id() === 'dupRuleAppCondition') {
                if ((this.IsSingleEntityRuleExists() && $v_1 === 3) || (!this.IsSingleEntityRuleExists() && $v_1 === 4)) {
                    break;
                }
            }
            if (IsNull(this.GetControlDataValue($v_2))) {
                return;
            }
            if (!this.$Z_3) {
                this.$Z_3 = true;
                this.RaiseFieldChangedEvent(sender, args);
            }
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.tagName, 'Crm:OperatorList') && ($find($v_2.id)).isUnary()) {
                break;
            }
            $v_1++;
        }
        this.$P_3 = true;
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        this.RaiseFieldChangedEvent(sender, args);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (639,3)
    RaiseFieldChangedEvent: function Mscrm_ConditionField$RaiseFieldChangedEvent($p0, $p1) {
        (this.$3_3).FieldChanged($p0, $p1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (645,3)
    ShowChildControlsOnRetrieve: function Mscrm_ConditionField$ShowChildControlsOnRetrieve() {
        this.$J_3.style.visibility = 'visible';
        this.$J_3.className = 'ms-crm-AdvFind-FieldMenu';
        this.GetMenuImg().style.visibility = 'visible';
        this.$P_3 = true;
        this.ShowChildControls();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (672,3)
    GetNumControls: function Mscrm_ConditionField$GetNumControls() {
        return this.$B_3.length;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (679,3)
    GetDOMControl: function Mscrm_ConditionField$GetDOMControl($p0) {
        return this.$B_3[$p0];
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (686,3)
    GetControl: function Mscrm_ConditionField$GetControl(index) {
        var $v_0 = this.$B_3[index];
        if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Freeform')) {
            return $find($v_0.id);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:OperatorList')) {
            return $find($v_0.id);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:AttributeList')) {
            return $find($v_0.id);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:EntityList')) {
            return $find($v_0.id);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Value')) {
            return $find($v_0.id);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Hidden')) {
            return $find($v_0.id);
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (718,3)
    GetControlDataValue: function Mscrm_ConditionField$GetControlDataValue($p0) {
        if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:Freeform')) {
            return ($find($p0.id)).get_dataValue();
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:OperatorList')) {
            return ($find($p0.id)).get_dataValue();
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:AttributeList')) {
            return ($find($p0.id)).get_dataValue();
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:EntityList')) {
            return ($find($p0.id)).get_dataValue();
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:Value')) {
            return ($find($p0.id)).get_dataValue();
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, 'Crm:Hidden')) {
            return ($find($p0.id)).get_dataValue();
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (748,3)
    SetControlDataValueProperty: function Mscrm_ConditionField$SetControlDataValueProperty($p0, $p1) {
        var $v_0 = this.$B_3[$p0];
        if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Freeform')) {
            var $v_1 = $find($v_0.id);
            $v_1.set_dataValue($p1);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:OperatorList')) {
            var $v_2 = $find($v_0.id);
            $v_2.set_dataValue($p1);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:AttributeList')) {
            var $v_3 = $find($v_0.id);
            $v_3.set_dataValue($p1);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:EntityList')) {
            var $v_4 = $find($v_0.id);
            $v_4.set_dataValue($p1);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Value')) {
            var $v_5 = $find($v_0.id);
            $v_5.set_dataValue($p1);
        }
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, 'Crm:Hidden') && !IsNull($p1)) {
            var $v_6 = $find($v_0.id);
            $v_6.set_dataValue($p1);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (786,3)
    ShowChildControls: function Mscrm_ConditionField$ShowChildControls() {
        if (!IsNull(this.get_element()) && this.get_element().id === 'VALUE') {
            return;
        }
        var $v_0 = false;
        var $v_1 = this.GetNumControls(), $v_2 = 0;
        while ($v_2 < $v_1) {
            if ($v_0 && this.$1_3.get_id() === 'dupRuleAppCondition') {
                if ((this.IsSingleEntityRuleExists() && $v_2 !== 3) || (!this.IsSingleEntityRuleExists() && $v_2 !== 4)) {
                    $v_2++;
                    continue;
                }
            }
            var $v_3 = this.GetDOMControl($v_2);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:Hidden')) {
                $v_2++;
                continue;
            }
            this.ShowChild($v_2);
            $v_2++;
            if (IsNull(this.GetControlDataValue($v_3))) {
                if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:Freeform') || Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:EntityList')) {
                    if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:Freeform')) {
                        var $v_4 = $find($v_3.id);
                        $v_4.set_dataValue(null);
                    }
                    else if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:EntityList')) {
                        var $v_5 = $find($v_3.id);
                        $v_5.render();
                        $v_5.set_dataValue(null);
                    }
                }
                break;
            }
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, 'Crm:OperatorList')) {
                var $v_6 = $find($v_3.id);
                if ($v_6.isUnary()) {
                    $v_6.hideDependents();
                    if (this.$1_3.get_id() === 'dupRuleAppCondition') {
                        $v_0 = true;
                    }
                    else {
                        return;
                    }
                }
            }
        }
        while ($v_2 < $v_1 && !$v_0) {
            this.HideChild($v_2);
            $v_2++;
        }
        if (this.$1_3.get_id() === 'dupRuleAppCondition') {
            var $v_7 = this.GetDOMControl(0);
            if (!IsNull(this.GetControlDataValue($v_7))) {
                if (this.IsSingleEntityRuleExists()) {
                    this.ShowChild(3);
                }
                else {
                    this.ShowChild(4);
                }
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (882,3)
    ShowChild: function Mscrm_ConditionField$ShowChild($p0) {
        var $v_0 = this.get_id() + 'field' + $p0;
        $get($v_0, this.get_element()).style.visibility = 'visible';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (890,3)
    HideChild: function Mscrm_ConditionField$HideChild(controlIndex) {
        if (this.$1_3.get_id() === 'dupRuleAppCondition') {
            if ((this.IsSingleEntityRuleExists() && controlIndex === 3) || (!this.IsSingleEntityRuleExists() && controlIndex === 4)) {
                return;
            }
        }
        var $v_0 = this.get_id() + 'field' + controlIndex.toString();
        $get($v_0, this.get_element()).style.visibility = 'hidden';
        var $v_1 = this.GetDOMControl(controlIndex);
        if (!Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, 'Crm:Hidden')) {
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, 'Crm:Freeform')) {
                var $v_2 = $find($v_1.id);
                $v_2.set_dataValue(null);
            }
            else if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, 'Crm:OperatorList')) {
                var $v_3 = $find($v_1.id);
                $v_3.set_dataValue(null);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (924,3)
    HideAffectedControls: function Mscrm_ConditionField$HideAffectedControls(index) {
        var $v_0 = this.GetNumControls();
        index++;
        while (index < $v_0) {
            var $v_1 = this.GetDOMControl(index);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, 'Crm:Hidden')) {
                break;
            }
            index++;
        }
        if (index < $v_0) {
            if (this.$1_3.get_id() === 'dupRuleAppCondition') {
                if (!((this.IsSingleEntityRuleExists() && index === 3) || (!this.IsSingleEntityRuleExists() && index === 4))) {
                    this.SetControlDataValueProperty(index, null);
                }
            }
            else {
                this.SetControlDataValueProperty(index, null);
            }
        }
        if (this.$1_3.get_id() === 'dupRuleAppCondition' && index > 1 && !(Mscrm.ConditionCommon.CheckControlByTagName(this.GetDOMControl(index - 1).tagName, 'Crm:OperatorList') && (this.GetControl(index - 1)).isUnary())) {
            index++;
        }
        else if (index === 1 || !(this.$1_3.get_id() === 'dupRuleAppCondition')) {
            index++;
        }
        if (this.$1_3.get_id() === 'dupRuleAppCondition') {
            if (this.IsSingleEntityRuleExists() && index === 7 || !this.IsSingleEntityRuleExists() && index === 8) {
                this.HideChild(index - 3);
            }
        }
        while (index < $v_0) {
            this.HideChild(index);
            index++;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (981,3)
    IsSingleEntityRuleExists: function Mscrm_ConditionField$IsSingleEntityRuleExists() {
        return window._isSingleEntityRule;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (999,3)
    initialize: function Mscrm_ConditionField$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$P_3 = false;
        this.$Z_3 = false;
        var $v_0 = this.get_id();
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/AdvFind/button.gif'));
        var $v_2 = document.createElement('div');
        $v_2.className = 'cndConditionFieldNew';
        $v_2.innerHTML = String.format('<span tabindex=0 style=\'visibility:hidden\' class=\'ms-crm-AdvFind-FieldMenu\'><img alt=\'\' src=\'{0}\' class = \'ms-crm-View-icon ms-crm-ImageStrip-Dropdown_Arrow\'/><a contentEditable=\'false\' tabindex=\'-1\' onclick=\'return false;\' href=\'#\' target=\'_self\' title=\"{1}\" class=\'atLink\'></a></span><span class=\'ms-crm-AdvFind-FieldList\' id=\'{2}field0\' style=\'visibility:hidden\'></span><span class=\'ms-crm-AdvFind-OperatorList\' id=\'{2}field1\' style=\'visibility:hidden\'></span><span class=\'ms-crm-AdvFind-FieldList\' id=\'{2}field2\' style=\'visibility:hidden\'></span><span class=\'ms-crm-AdvFind-FieldList\' id=\'{2}field3\' style=\'visibility:hidden\'></span><span class=\'ms-crm-AdvFind-FieldList\' id=\'{2}field4\' style=\'visibility:hidden\'></span><span class=\'ms-crm-AdvFind-HiddenFieldLabel\' id=\'{2}field5\' style=\'visibility:hidden\'></span></div>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.source), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATCONDITION), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        this.get_element().innerHTML = '';
        this.get_element().appendChild($v_2);
        $addHandler(this.get_element(), 'click', this.$$d_HandleClick);
        this.$k_3 = true;
        var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        this.$J_3 = $v_3;
        this.$J_3.id = $v_0 + 'FLDMNU';
        $addHandler(this.$J_3, 'keyup', this.$$d_onMnuKeyUp);
        XUI.Html.DomUtils.GetLastChild(this.$J_3).id = 'at' + $v_3.id;
        if (!this.$1_3.get_readOnlyMode()) {
            $addHandler(this.$J_3, 'click', this.$$d_OnMenuSpanClick);
            $addHandler(this.$J_3, 'mouseover', this.$$d_OnMouseEnter);
            $addHandler(this.$J_3, 'mouseout', this.$$d_OnMouseLeave);
        }
        var $v_4 = this.$1_3.GetColumnArray();
        if (!IsNull($v_4)) {
            var $v_5 = $v_4.length, $v_6 = 0;
            var $v_7 = null;
            var $v_8 = null;
            var $v_9 = null;
            while ($v_6 < $v_5 && !IsNull($v_4[$v_6])) {
                var $v_A = this.$1_3.GetColumnData($v_4[$v_6].toString());
                var $v_B = $v_A.getAttribute('type').toString();
                if ($v_B !== 'Predefined' && $v_B !== 'Entity' && $v_B !== 'Attribute' && $v_B !== 'Operator' && $v_B !== 'Value' && $v_B !== 'Freeform' && $v_B !== 'Hidden') {
                    $v_6++;
                    continue;
                }
                if ($v_B === 'Hidden') {
                    this.$5_3 = window.document.createElement('Crm:Hidden');
                    this.$5_3.id = this.get_element().id + 'HF';
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_C = {};
                        $v_C['index'] = $v_6;
                        $v_C['conditionParentControl'] = this;
                        $v_C['conditionContainer'] = this.$1_3;
                        $v_C['columnData'] = $v_A;
                        this.$u_3 = $create(Mscrm.Hidden, $v_C, null, null, this.$5_3);
                    }
                }
                if ($v_B === 'Freeform') {
                    this.$5_3 = window.document.createElement('Crm:Freeform');
                    if (IsNull(window.document.getElementById(this.get_element().id + 'FF'))) {
                        this.$5_3.id = this.get_element().id + 'FF';
                    }
                    else {
                        this.$5_3.id = this.get_element().id + 'FF1';
                    }
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_D = {};
                        $v_D['index'] = $v_6;
                        $v_D['conditionParentControl'] = this;
                        $v_D['conditionContainer'] = this.$1_3;
                        $v_D['columnData'] = $v_A;
                        this.$s_3 = $create(Mscrm.Freeform, $v_D, null, null, this.$5_3);
                    }
                }
                if ($v_B === 'Predefined') {
                    this.$5_3 = window.document.createElement('Crm:PredefinedList');
                    this.$5_3.id = this.get_element().id + 'PDF';
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_E = {};
                        $v_E['index'] = $v_6;
                        $v_E['conditionParentControl'] = this;
                        $v_E['conditionContainer'] = this.$1_3;
                        $v_E['columnData'] = $v_A;
                        this.$x_3 = $create(Mscrm.PredefinedList, $v_E, null, null, this.$5_3);
                    }
                }
                if ($v_B === 'Entity') {
                    this.$5_3 = window.document.createElement('Crm:EntityList');
                    this.$5_3.id = this.get_element().id + 'EF';
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_F = {};
                        $v_F['index'] = $v_6;
                        $v_F['conditionParentControl'] = this;
                        $v_F['conditionContainer'] = this.$1_3;
                        $v_F['columnData'] = $v_A;
                        this.$i_3 = $create(Mscrm.ConditionEntityList, $v_F, null, null, this.$5_3);
                        $v_7 = this.$i_3;
                    }
                }
                if ($v_B === 'Attribute') {
                    this.$5_3 = window.document.createElement('Crm:AttributeList');
                    if (IsNull(window.document.getElementById(this.get_element().id + 'AF'))) {
                        this.$5_3.id = this.get_element().id + 'AF';
                    }
                    else {
                        this.$5_3.id = this.get_element().id + 'AF1';
                    }
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_G = {};
                        $v_G['index'] = $v_6;
                        $v_G['conditionParentControl'] = this;
                        $v_G['conditionContainer'] = this.$1_3;
                        $v_G['columnData'] = $v_A;
                        if (!IsNull($v_7)) {
                            $v_G['entity'] = null;
                        }
                        else {
                            $v_G['entity'] = this.GetEntityAttribute($v_B);
                        }
                        this.$X_3 = $create(Mscrm.AttributeList, $v_G, null, null, this.$5_3);
                        if (!IsNull($v_7)) {
                            $v_7.$E_3 = this.$X_3;
                        }
                        else {
                            if (!IsNull($v_8)) {
                                $v_8.$E_3 = this.$X_3;
                            }
                        }
                        $v_8 = this.$X_3;
                    }
                }
                if ($v_B === 'Operator') {
                    this.$5_3 = window.document.createElement('Crm:OperatorList');
                    this.$5_3.id = this.get_element().id + 'OPF';
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_H = {};
                        $v_H['attribute'] = null;
                        $v_H['index'] = $v_6;
                        $v_H['conditionParentControl'] = this;
                        $v_H['conditionContainer'] = this.$1_3;
                        $v_H['columnData'] = $v_A;
                        this.$b_3 = $create(Mscrm.ConditionOperatorList, $v_H, null, null, this.$5_3);
                        $v_8.$K_3 = this.$b_3;
                    }
                }
                if ($v_B === 'Value') {
                    this.$5_3 = window.document.createElement('Crm:Value');
                    this.$5_3.id = this.get_element().id + 'VF';
                    this.AppendControl(this.$5_3);
                    if (!IsNull(this.$5_3)) {
                        var $v_I = {};
                        $v_I['attribute'] = null;
                        $v_I['operator'] = null;
                        $v_I['index'] = $v_6;
                        $v_I['conditionParentControl'] = this;
                        $v_I['conditionContainer'] = this.$1_3;
                        $v_I['columnData'] = $v_A;
                        if (!IsNull($v_7)) {
                            $v_I['entity'] = null;
                        }
                        else {
                            $v_I['entity'] = this.GetEntityAttribute($v_B);
                        }
                        this.$Y_3 = $create(Mscrm.ConditionValue, $v_I, null, null, this.$5_3);
                        $v_8.$A_3 = this.$Y_3;
                        $v_9.$A_3 = this.$Y_3;
                        if (!IsNull($v_7)) {
                            $v_7.$A_3 = this.$Y_3;
                        }
                    }
                }
                if (!IsNull($v_9)) {
                    $v_9.addDependent($v_6);
                }
                if ($v_B === 'Operator') {
                    $v_9 = this.$b_3;
                }
                $v_6++;
            }
        }
        this.SetXml(this.$F_3);
        this.ShowChildControls();
        if (this.$1h_3) {
            this.SetFocus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionField.cs (1247,3)
    dispose: function Mscrm_ConditionField$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        $removeHandler(this.get_element(), 'click', this.$$d_HandleClick);
        if (!IsNull(this.$X_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$X_3);
            this.$X_3 = null;
        }
        if (!IsNull(this.$b_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$b_3);
            this.$b_3 = null;
        }
        if (!IsNull(this.$Y_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$Y_3);
            this.$Y_3 = null;
        }
        if (!IsNull(this.$u_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$u_3);
            this.$u_3 = null;
        }
        if (!IsNull(this.$s_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$s_3);
            this.$s_3 = null;
        }
        if (!IsNull(this.$x_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$x_3);
            this.$x_3 = null;
        }
        if (!IsNull(this.$i_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$i_3);
            this.$i_3 = null;
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionGroup = function Mscrm_ConditionGroup(element) {
    this.$$d_onMnuKeyUp = Function.createDelegate(this, this.onMnuKeyUp);
    this.$$d_OnMouseOut = Function.createDelegate(this, this.OnMouseOut);
    this.$$d_OnMouseOver = Function.createDelegate(this, this.OnMouseOver);
    this.$$d_$1w_3 = Function.createDelegate(this, this.$1w_3);
    this.$$d_$1V_3 = Function.createDelegate(this, this.$1V_3);
    this.$$d_AddClause = Function.createDelegate(this, this.AddClause);
    this.$$d_ChangeGroupClause = Function.createDelegate(this, this.ChangeGroupClause);
    this.$$d_Ungroup = Function.createDelegate(this, this.Ungroup);
    this.$$d_ToggleSelected = Function.createDelegate(this, this.ToggleSelected);
    this.$$d_handleClick = Function.createDelegate(this, this.handleClick);
    this.$I_3 = 'and';
    this.$B_3 = [];
    this.get_Children = this.get_children;
    Mscrm.ConditionGroup.initializeBase(this, [ element ]);
    $addHandler(element, 'click', this.$$d_handleClick);
}
Mscrm.ConditionGroup.prototype = {
    $T_3: null,
    $1M_3: null,
    $9_3: null,
    $17_3: null,
    $1L_3: null,
    $4_3: null,
    $U_3: null,
    $c_3: null,
    $1D_3: null,
    $o_3: null,
    $14_3: null,
    $m_3: null,
    $3_3: null,
    $1_3: null,
    $M_3: false,
    $10_3: false,
    $t_3: false,
    $F_3: null,
    $g_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (49,4)
    get_groupClause: function Mscrm_ConditionGroup$get_groupClause() {
        return this.$I_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (50,4)
    set_groupClause: function Mscrm_ConditionGroup$set_groupClause(value) {
        this.$I_3 = value;
        if (this.$M_3) {
            XUI.Html.SetText(this.$1M_3, (this.$I_3 === 'and') ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR);
            this.ShowGroupBox(!this.IsImplicitANDGroup());
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (64,4)
    get_selected: function Mscrm_ConditionGroup$get_selected() {
        return this.$10_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (65,4)
    set_selected: function Mscrm_ConditionGroup$set_selected(value) {
        this.$10_3 = value;
        this.$17_3.className = (this.get_selected()) ? 'ms-crm-AdvFind-SelectedGroup' : 'ms-crm-AdvFind-GroupName';
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (74,4)
    get_conditionContainer: function Mscrm_ConditionGroup$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (75,4)
    set_conditionContainer: function Mscrm_ConditionGroup$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (80,4)
    get_conditionParentControl: function Mscrm_ConditionGroup$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (81,4)
    set_conditionParentControl: function Mscrm_ConditionGroup$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (86,4)
    get_xml: function Mscrm_ConditionGroup$get_xml() {
        return this.$F_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (87,4)
    set_xml: function Mscrm_ConditionGroup$set_xml(value) {
        this.$F_3 = value;
        this.$I_3 = 'and';
        this.set_groupClause(this.$I_3);
        if (this.$M_3) {
            this.ClearControl();
            this.ShowXml(this.$F_3);
            this.AddNewConditionField(1, null);
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (107,4)
    get_children: function Mscrm_ConditionGroup$get_children() {
        return this.GetChildren();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (108,4)
    set_children: function Mscrm_ConditionGroup$set_children(value) {
        this.$g_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (113,4)
    get_groupControls: function Mscrm_ConditionGroup$get_groupControls() {
        return this.$9_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (120,3)
    onMnuKeyUp: function Mscrm_ConditionGroup$onMnuKeyUp($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_0 === 32 || $v_0 === 13) {
            this.ShowPopupMenu($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (130,3)
    $1w_3: function Mscrm_ConditionGroup$$1w_3($p0) {
        if (!$p0.ctrlKey) {
            this.ShowPopupMenu($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (138,3)
    OnMouseOver: function Mscrm_ConditionGroup$OnMouseOver($p0) {
        this.$T_3.className = 'ms-crm-AdvFind-SelectedGroupMenu';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (144,3)
    OnMouseOut: function Mscrm_ConditionGroup$OnMouseOut($p0) {
        this.$T_3.className = 'ms-crm-AdvFind-GroupMenu';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (151,3)
    GetNumControls: function Mscrm_ConditionGroup$GetNumControls() {
        return (this.$M_3) ? this.$9_3.children.length : this.$B_3.length;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (158,3)
    IsImplicitANDGroup: function Mscrm_ConditionGroup$IsImplicitANDGroup() {
        return (Mscrm.ConditionCommon.CheckControlByTagName(this.$3_3.get_element().tagName, 'Crm:ConditionControl') && this.$I_3 === 'and');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (165,3)
    ShowGroupBox: function Mscrm_ConditionGroup$ShowGroupBox($p0) {
        this.$1L_3.style.display = this.$17_3.style.display = (($p0) ? '' : 'none');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (174,3)
    Group: function Mscrm_ConditionGroup$Group($p0) {
        var $v_0 = this.GetNumControls();
        var $v_1 = -1, $v_2 = 0;
        var $v_3 = 0;
        while ($v_2 < $v_0) {
            var $v_4 = this.GetControl($v_2);
            if ($v_4.get_selected()) {
                if ($v_1 === -1) {
                    $v_1 = $v_2;
                    $v_3++;
                }
                else {
                    var $v_5 = 0;
                    while ($v_5 < $v_0) {
                        var $v_6 = this.GetControl($v_5);
                        if (!$v_6.get_selected()) {
                            break;
                        }
                        $v_5++;
                    }
                    if ($v_5 === $v_0 && !this.IsImplicitANDGroup()) {
                        if (this.$I_3 !== $p0) {
                            this.set_groupClause($p0);
                            this.$1_3.set_isDirty(true);
                        }
                        $v_5 = 0;
                        while ($v_5 < $v_0) {
                            this.GetDOMElement($v_5).setAttribute('Selected', false);
                            (this.GetControl($v_5++)).set_selected(false);
                        }
                        return $v_5;
                    }
                    $v_2 = $v_1;
                    break;
                }
            }
            $v_2++;
        }
        if ($v_2 !== $v_0) {
            var $v_7 = window.document.createElement('Crm:ConditionGroup');
            $v_7.id = this.get_element().id + 'FGRP' + this.$1q_3++;
            this.$m_3 = $create(Mscrm.ConditionGroup, Mscrm.ConditionCommon.GetPropertiesForChild(this), null, null, $v_7);
            while ($v_2 < $v_0) {
                var $v_8 = this.GetControl($v_2);
                if ($v_8.get_selected()) {
                    var $v_9 = this.RemoveControl($v_8.get_element(), false);
                    $v_8.set_selected(false);
                    this.$m_3.AddControl($v_9, 1, null);
                    $v_0--;
                    $v_3++;
                }
                else {
                    $v_2++;
                }
            }
            this.AddControl(this.$m_3.get_element(), -1, null, $v_1);
            this.$m_3.set_groupClause($p0);
            this.$m_3.$t_3 = true;
        }
        return $v_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (275,3)
    ShowPopupMenu: function Mscrm_ConditionGroup$ShowPopupMenu($p0) {
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement('DIV');
            $v_0.setAttribute('id', 'menuContainer');
            window.document.body.appendChild($v_0);
            this.$4_3 = Mscrm.Menu.createMenu($v_0);
            this.$4_3.set_menuId(this.$T_3.id);
            this.$4_3.set_stylePrefix(Mscrm.MenuStyles.popupStylePrefix);
            this.$4_3.set_width(170);
            this.$U_3 = Mscrm.MenuItem.createMenuItem(Mscrm.Utilities.emptyString);
            this.$U_3.set_actionCallback(this.$$d_ToggleSelected);
            this.$4_3.addItem(this.$U_3);
            this.$1D_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_UNGROUP);
            this.$1D_3.set_actionCallback(this.$$d_Ungroup);
            this.$4_3.addItem(this.$1D_3);
            this.$o_3 = Mscrm.MenuItem.createMenuItem(Mscrm.Utilities.emptyString);
            this.$o_3.set_actionCallback(this.$$d_ChangeGroupClause);
            this.$4_3.addItem(this.$o_3);
            this.$14_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_ADDROWTOGRP);
            this.$14_3.set_actionCallback(this.$$d_AddClause);
            this.$4_3.addItem(this.$14_3);
            this.$c_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$c_3.set_actionCallback(this.$$d_$1V_3);
            this.$4_3.addItem(this.$c_3);
        }
        this.$4_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$4_3.set_left($p0.clientX - $p0.offsetX);
        this.$U_3.set_title((this.$10_3) ? window.LOCID_AF_UNSELECTROW : window.LOCID_AF_SELECTROW);
        this.$o_3.set_title(String.format(window.LOCID_AF_CHANGEGRP, ((this.$I_3 === 'or') ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR)));
        this.$4_3.show();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (322,3)
    DeleteControl: function Mscrm_ConditionGroup$DeleteControl(control, detachAjaxControl) {
        this.$1_3.set_isDirty(true);
        this.RemoveControl(control, detachAjaxControl);
        if (this.$3_3 && Mscrm.ConditionCommon.CheckControlByTagName(this.$3_3.get_element().tagName, 'Crm:ConditionGroup')) {
            switch (this.GetNumControls()) {
                case 1:
                    this.Ungroup(null);
                    break;
                case 0:
                    (this.$3_3).DeleteControl(this.get_element());
                    break;
            }
        }
        else if (!this.GetNumControls()) {
            this.AddClause(null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (352,3)
    RemoveControl: function Mscrm_ConditionGroup$RemoveControl($p0, $p1) {
        if ($p1) {
            var $v_0 = $find($p0.id);
            if (!IsNull($v_0)) {
                Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0);
            }
        }
        return this.$9_3.removeChild($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (367,3)
    Ungroup: function Mscrm_ConditionGroup$Ungroup($p0) {
        if (!IsNull(this.$4_3)) {
            this.$4_3.hide();
        }
        var $v_0 = this.GetNumControls();
        while ($v_0 > 0) {
            var $v_1 = this.RemoveControl(this.GetDOMElement(0), false);
            var $v_2 = $find($v_1.id);
            $v_0--;
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, 'Crm:ConditionField') && !$v_2.$P_3) {
                continue;
            }
            (this.$3_3).AddControl($v_1, 4, this.get_element(), null, true);
        }
        (this.$3_3).DeleteControl(this.get_element());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (394,3)
    IsWaitTimeoutExpression: function Mscrm_ConditionGroup$IsWaitTimeoutExpression() {
        if (this.GetNumControls() > 0 && Mscrm.ConditionCommon.CheckControlByTagName(this.$9_3.nodeName, 'Crm:ConditionField')) {
            var $v_0 = this.GetControl(0);
            if (!IsNull($v_0)) {
                return IsTimeoutCondition($v_0);
            }
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (410,3)
    $1V_3: function Mscrm_ConditionGroup$$1V_3($p0) {
        this.$1U_3(null);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (416,3)
    $1U_3: function Mscrm_ConditionGroup$$1U_3($p0) {
        if (confirm(window.LOCID_AF_DELETEFIELD)) {
            (this.$3_3).DeleteControl(this.get_element());
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (426,3)
    AddClause: function Mscrm_ConditionGroup$AddClause($p0) {
        if (!IsNull(this.$4_3)) {
            this.$4_3.hide();
        }
        if (this.IsWaitTimeoutExpression()) {
            return;
        }
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        var $v_0 = this.AddNewConditionField(1);
        if ($v_0) {
            $v_0.SetFocus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (449,3)
    ChangeGroupClause: function Mscrm_ConditionGroup$ChangeGroupClause($p0) {
        if (!IsNull(this.$4_3)) {
            this.$4_3.hide();
        }
        this.set_groupClause((this.$I_3 === 'and') ? 'or' : 'and');
        this.$1_3.set_isDirty(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (457,3)
    ToggleSelected: function Mscrm_ConditionGroup$ToggleSelected($p0) {
        if (!IsNull(this.$4_3)) {
            this.$4_3.hide();
        }
        this.set_selected(!this.$10_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (467,3)
    handleClick: function Mscrm_ConditionGroup$handleClick($p0) {
        if ($p0.ctrlKey) {
            this.ToggleSelected(null);
            $p0.stopPropagation();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (478,3)
    GetStartElement: function Mscrm_ConditionGroup$GetStartElement() {
        return '<' + CrmEncodeDecode.CrmXmlEncode(this.$I_3) + '>';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (484,3)
    GetEndElement: function Mscrm_ConditionGroup$GetEndElement() {
        return '</' + CrmEncodeDecode.CrmXmlEncode(this.$I_3) + '>';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (491,3)
    GetChildren: function Mscrm_ConditionGroup$GetChildren() {
        var $v_0 = [];
        var $v_1 = this.GetNumControls(), $v_2 = 0;
        while ($v_2 < $v_1) {
            $v_0[$v_0.length] = XUI.Html.DomUtils.GetChildElementAt(this.$9_3, $v_2);
            $v_2++;
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (504,3)
    ClearControl: function Mscrm_ConditionGroup$ClearControl() {
        while (this.GetNumControls() > 0) {
            this.RemoveControl(this.GetDOMElement(0), false);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (514,3)
    ShowXml: function Mscrm_ConditionGroup$ShowXml($p0) {
        if (isNullOrEmptyString($p0)) {
            return;
        }
        var $v_0 = XUI.Xml.LoadXml($p0);
        if (!IsNull($v_0) && !IsNull($v_0.documentElement)) {
            this.$1d_3($v_0.documentElement, 0);
            var $v_1 = this.GetControl(0);
            if (!IsNull($v_1) && $v_1.$I_3 === 'and' && this.$1o_3($v_1)) {
                var $v_2 = this.$1_3.get_isDirty();
                $v_1.Ungroup(null);
                if (!$v_2) {
                    this.$1_3.set_isDirty(false);
                }
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (552,3)
    $1o_3: function Mscrm_ConditionGroup$$1o_3($p0) {
        if (!IsNull($p0) && !IsNull($p0.$9_3)) {
            var $v_0 = $p0.$9_3.children;
            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                if (!Mscrm.ConditionCommon.CheckControlByTagName($v_0[$v_1].nodeName, 'Crm:ConditionField')) {
                    return false;
                }
            }
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (574,3)
    $1d_3: function Mscrm_ConditionGroup$$1d_3($p0, $p1) {
        if (IsNull($p0)) {
            return;
        }
        if (this.$1l_3($p0)) {
            var $v_0 = XUI.Xml.SelectNodes($p0, 'child::*', null);
            for (var $v_2 = 0; $v_2 < $v_0.length; ++$v_2) {
                this.$1d_3($v_0[$v_2], $v_2);
            }
            var $v_1 = this.GetNumControls() - $p1;
            for (var $v_3 = 0; $v_3 < $v_1; ++$v_3) {
                var $v_4 = this.GetControl($v_3 + $p1);
                $v_4.set_selected(true);
            }
            this.Group($p0.nodeName);
        }
        else {
            if ($p0.nodeName === 'condition') {
                var $v_5 = this.AddNewConditionField(1);
                $v_5.set_xml($p0);
            }
            else {
                var $v_6 = XUI.Xml.SelectNodes($p0, 'child::condition', null);
                var $v_7 = null;
                for (var $v_8 = 0; $v_8 < $v_6.length; $v_8++) {
                    $v_7 = this.AddNewConditionField(1);
                    $v_7.set_xml($v_6[$v_8]);
                    $v_7.set_selected(true);
                }
                if ($v_6.length === 1) {
                    $v_7.set_selected(false);
                }
                else {
                    this.Group($p0.nodeName);
                }
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (645,3)
    $1l_3: function Mscrm_ConditionGroup$$1l_3($p0) {
        if (!IsNull($p0)) {
            var $v_0 = XUI.Xml.SelectNodes($p0, 'child::*', null);
            if (!IsNull($v_0) && $v_0.length > 0) {
                for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                    if ($v_0[$v_1].nodeName === 'and' || $v_0[$v_1].nodeName === 'or') {
                        return true;
                    }
                }
            }
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (678,3)
    AddControl: function Mscrm_ConditionGroup$AddControl(control, where, whichControl, pos) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_conditionParentControl(this);
            $v_0.set_conditionContainer(this.$1_3);
        }
        if (this.$M_3) {
            if (IsNull(pos)) {
                if ((where === 3 || where === 4) && (IsNull(whichControl) || (whichControl.parentNode !== this.$9_3))) {
                    return null;
                }
                switch (where) {
                    case 2:
                        if (XUI.Html.DomUtils.HasChildElements(this.$9_3)) {
                            this.$9_3.insertBefore(control, XUI.Html.DomUtils.GetFirstChild(this.$9_3));
                        }
                        else {
                            this.$9_3.appendChild(control);
                        }
                        break;
                    case 3:
                        var $v_1 = false;
                        var $v_2 = null;
                        var $$t_A = this;
                        XUI.Xml.DomUtils.ForEachChild(this.$9_3, function($p1_0) {
                            if (IsNull($v_2)) {
                                $v_2 = $p1_0;
                                return false;
                            }
                            if ($v_2 === whichControl) {
                                $$t_A.$9_3.insertBefore(control, $p1_0);
                                $v_1 = true;
                                return true;
                            }
                            $v_2 = $p1_0;
                            return false;
                        });
                        if (!$v_1) {
                            this.$9_3.appendChild(control);
                        }
                        break;
                    case 4:
                        var $$t_B = this;
                        XUI.Xml.DomUtils.ForEachChild(this.$9_3, function($p1_0) {
                            if ($p1_0 === whichControl) {
                                $$t_B.$9_3.insertBefore(control, $p1_0);
                                return true;
                            }
                            return false;
                        });
                        break;
                    case 1:
                    default:
                        this.$9_3.appendChild(control);
                        break;
                }
            }
            else {
                if (pos > this.$9_3.children.length || pos < 0) {
                    return null;
                }
                if (pos === this.$9_3.children.length) {
                    this.$9_3.appendChild(control);
                }
                else {
                    this.$9_3.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt(this.$9_3, pos));
                }
            }
            XUI.Html.DomUtils.GetFirstChild(this.get_element()).style.display = 'table';
        }
        else {
            switch (where) {
                case 1:
                    this.$B_3[this.$B_3.length] = control;
                    break;
                case 2:
                    for (var $v_3 = this.$B_3.length; $v_3 > 0; $v_3--) {
                        this.$B_3[$v_3] = this.$B_3[$v_3 - 1];
                    }
                    this.$B_3[0] = control;
                    break;
                default:
                    return null;
            }
        }
        return control;
    },
    
    $1q_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (848,3)
    AddNewConditionField: function Mscrm_ConditionGroup$AddNewConditionField(where, ctrl) {
        var $v_0 = window.document.createElement('Crm:ConditionField');
        $v_0.id = Mscrm.Condition.getControlId(this.get_id(), 'CF' + Math.random().toString().replace('.', ''));
        var $v_1 = this.AddControl($v_0, where, ctrl);
        if (!IsNull($v_1)) {
            return $create(Mscrm.ConditionField, Mscrm.Condition.getPropertiesForChild(this), null, null, $v_1);
        }
        return null;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (864,3)
    FieldChanged: function Mscrm_ConditionGroup$FieldChanged(sender, args) {
        if (($find(this.GetControl(this.GetNumControls() - 1).get_id())).$Z_3) {
            this.AddClause(null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (874,3)
    HideAffectedControls: function Mscrm_ConditionGroup$HideAffectedControls(index) {
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (880,3)
    GetControl: function Mscrm_ConditionGroup$GetControl(index) {
        var $v_0 = this.GetDOMElement(index);
        return (IsNull($v_0)) ? null : $find($v_0.id);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (889,3)
    GetDOMElement: function Mscrm_ConditionGroup$GetDOMElement($p0) {
        return ((this.$M_3) ? XUI.Html.DomUtils.GetChildElementAt(this.$9_3, $p0) : this.$B_3[$p0]);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (895,3)
    ParseXml: function Mscrm_ConditionGroup$ParseXml() {
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = (this.GetControl($v_1));
            if (!$v_2.ParseXml()) {
                return false;
            }
            $v_1++;
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (914,3)
    GetXml: function Mscrm_ConditionGroup$GetXml() {
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        var $v_2 = '';
        while ($v_1 < $v_0) {
            var $v_3 = (this.GetControl($v_1)).GetXml();
            if (!IsNull($v_3)) {
                $v_2 += $v_3;
            }
            $v_1++;
        }
        if ($v_2 === '') {
            return null;
        }
        else {
            return (this.get_$1n_3() && $v_0 === 2 && Mscrm.ConditionCommon.CheckControlByTagName(this.GetControl(0).get_element().nodeName, 'Crm:ConditionGroup')) ? $v_2 : this.GetStartElement() + $v_2 + this.GetEndElement();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (951,4)
    get_hasGroupedField: function Mscrm_ConditionGroup$get_hasGroupedField() {
        return this.$t_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (955,4)
    set_hasGroupedField: function Mscrm_ConditionGroup$set_hasGroupedField(value) {
        this.$t_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (966,4)
    get_$1n_3: function Mscrm_ConditionGroup$get_$1n_3() {
        return !IsNull(this.$3_3) && !IsNull((this.$3_3).$3_3) && !IsNull(this.$1_3) && ((this.$3_3).$3_3.get_id() === this.$1_3.get_id());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (986,3)
    initialize: function Mscrm_ConditionGroup$initialize() {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create('/_imgs/AdvFind/button.gif'));
        var $v_1 = this.get_element().id + 'MNU';
        var $v_2 = 'at' + $v_1;
        var $v_3 = String.format('<table class=\'ms-crm-AdvFind-FilterGroup\' cellspacing=\'0\' cellpadding=\'0\' style=\'display:none\'>\r\n\t<tr>\r\n\t\t<td class=\'ms-crm-AdvFind-GroupName\'>\r\n\t\t\t<span tabindex=\'0\' class=\'ms-crm-AdvFind-GroupMenu\'>\r\n\t\t\t\t<img id=\'{2}\' alt=\'\' src=\'{0}\' class = \'ms-crm-View-icon {1}\'/>\r\n\t\t\t\t\t<a contentEditable=\'false\' tabindex=\'-1\' onclick=\'return false;\' href=\'#\' target=\'_self\' title=\'{3}\' id=\'{4}\' class=\'atLink\'></a>\r\n\t\t\t</span>\r\n\t\t\t<span class=\'ms-crm-AdvFind-GroupLabel cndGroupLabel\'></span>\r\n\t\t</td>\r\n\t\t<td class=\'cndGroupPadding\'></td>\r\n\t\t<td>\r\n\t\t\t<span class=\'ms-crm-AdvFind-ControlsGroup\'></span>\r\n\t\t</td>\r\n\t</tr>\r\n</table>', CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATCONDITIONGROUP), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2));
        this.get_element().innerHTML = $v_3;
        var $v_4 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        var $v_5 = $v_4.rows[0];
        this.$T_3 = XUI.Html.DomUtils.GetChildElementAt($v_5.cells[0], 0);
        this.$1M_3 = XUI.Html.DomUtils.GetChildElementAt($v_5.cells[0], 1);
        this.$9_3 = XUI.Html.DomUtils.GetFirstChild($v_5.cells[2]);
        this.set_groupClause(this.$I_3);
        this.$17_3 = ((XUI.Html.DomUtils.GetFirstChild(this.get_element())).rows[0]).cells[0];
        this.$1L_3 = ((XUI.Html.DomUtils.GetFirstChild(this.get_element())).rows[0]).cells[1];
        this.$M_3 = true;
        if (this.$1_3.get_id() === 'dupRuleAppCondition') {
            this.set_xml(this.$F_3);
        }
        var $v_6 = this.$B_3.length, $v_7 = 0;
        while ($v_7 < $v_6) {
            this.AddControl(this.$B_3[$v_7], 1);
            delete this.$B_3[$v_7];
            $v_7++;
        }
        $addHandler(this.$T_3, 'click', this.$$d_$1w_3);
        $addHandler(this.$T_3, 'mouseover', this.$$d_OnMouseOver);
        $addHandler(this.$T_3, 'mouseout', this.$$d_OnMouseOut);
        $addHandler(this.$T_3, 'MnuKeyUp', this.$$d_onMnuKeyUp);
        this.ShowGroupBox(!this.IsImplicitANDGroup());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionGroup.cs (1058,3)
    dispose: function Mscrm_ConditionGroup$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$9_3)) {
            Mscrm.ConditionCommon.DisposeDirectChilds(this.$9_3);
            this.$9_3 = null;
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionOperatorList = function Mscrm_ConditionOperatorList(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$1u_3 = Function.createDelegate(this, this.$1u_3);
    this.$$d_$1Z_3 = Function.createDelegate(this, this.$1Z_3);
    this.$l_3 = [];
    Mscrm.ConditionOperatorList.initializeBase(this, [ element ]);
}
Mscrm.ConditionOperatorList.prototype = {
    $0_3: null,
    $C_3: false,
    $S_3: false,
    $3_3: null,
    $1_3: null,
    $7_3: null,
    $2_3: null,
    $8_3: null,
    $A_3: null,
    $N_3: 0,
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (39,4)
    get_index: function Mscrm_ConditionOperatorList$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (40,4)
    set_index: function Mscrm_ConditionOperatorList$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (45,4)
    get_conditionParentControl: function Mscrm_ConditionOperatorList$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (46,4)
    set_conditionParentControl: function Mscrm_ConditionOperatorList$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (51,4)
    get_conditionContainer: function Mscrm_ConditionOperatorList$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (52,4)
    set_conditionContainer: function Mscrm_ConditionOperatorList$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (57,4)
    get_columnData: function Mscrm_ConditionOperatorList$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (58,4)
    set_columnData: function Mscrm_ConditionOperatorList$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (63,4)
    get_dataValue: function Mscrm_ConditionOperatorList$get_dataValue() {
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (64,4)
    set_dataValue: function Mscrm_ConditionOperatorList$set_dataValue(value) {
        this.$2_3 = value;
        if (this.$C_3) {
            if (!IsNull(this.$0_3)) {
                this.$0_3.set_value(value);
            }
            if (this.isUnary()) {
                this.hideDependents();
            }
            else {
                if (!IsNull(this.$A_3)) {
                    this.$A_3.set_operator(this.$2_3);
                }
            }
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (92,4)
    get_width: function Mscrm_ConditionOperatorList$get_width() {
        return this.$1_3.get_columnWidthInPixels();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (93,4)
    set_width: function Mscrm_ConditionOperatorList$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (98,4)
    get_attribute: function Mscrm_ConditionOperatorList$get_attribute() {
        return this.$8_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (99,4)
    set_attribute: function Mscrm_ConditionOperatorList$set_attribute(value) {
        if (!IsNull(this.$8_3) && (this.$8_3 !== value)) {
            this.set_dataValue(null);
        }
        this.$8_3 = value;
        if (!this.$C_3 || IsNull(this.$0_3)) {
            return value;
        }
        if (!IsNull(this.$0_3)) {
            var $v_0 = null;
            var $v_1 = this.$1_3.get_getUserDefinedList();
            if (!IsNull($v_1) && 'function' === typeof($v_1)) {
                var $v_2 = {};
                $v_2['ID'] = this.$7_3.id;
                $v_2['Element'] = this.get_element();
                $v_0 = $v_1($v_2);
            }
            if (IsNull($v_0)) {
                $v_0 = this.$1b_3();
            }
            this.$0_3.setInnerControlHtml($v_0);
        }
        this.getSelectList().set_selectedIndex(-1);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (138,4)
    get_dependentValue: function Mscrm_ConditionOperatorList$get_dependentValue() {
        return this.$A_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (139,4)
    set_dependentValue: function Mscrm_ConditionOperatorList$set_dependentValue(value) {
        this.$A_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (146,3)
    $1Z_3: function Mscrm_ConditionOperatorList$$1Z_3($p0, $p1) {
        this.$W_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (151,3)
    $1u_3: function Mscrm_ConditionOperatorList$$1u_3($p0, $p1) {
        this.$1Y_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (160,3)
    $1Y_3: function Mscrm_ConditionOperatorList$$1Y_3() {
        this.$C_3 = true;
        if (!IsNull(this.$8_3)) {
            this.set_attribute(this.$8_3);
        }
        this.set_dataValue(this.$2_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (175,3)
    getSelectList: function Mscrm_ConditionOperatorList$getSelectList() {
        return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$0_3.get_innerControl());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (181,3)
    $1b_3: function Mscrm_ConditionOperatorList$$1b_3() {
        if (IsNull(this.$8_3)) {
            return '<select class=\'ms-crm-SelectBox\'></select>';
        }
        var $v_0 = null;
        if (IsTimeoutCondition(this.$3_3)) {
            $v_0 = this.$1k_3();
        }
        else {
            if ((this.$8_3 === 'date') || (this.$8_3 === 'lookupwithuser') || (this.$8_3 === 'owner') || (this.$8_3 === 'partylist') || (this.$8_3 === 'lookupwithuserwithname') || (this.$8_3 === 'ownerwithname') || (this.$8_3 === 'lookupwithbusinessunit') || (this.$8_3 === 'lookupwithbusinessunitwithname')) {
                $v_0 = XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ConditionControlOperator', this.$8_3, null));
            }
            else {
                $v_0 = XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('Operator', this.$8_3, null));
            }
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (214,3)
    ParseXml: function Mscrm_ConditionOperatorList$ParseXml() {
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (219,3)
    $1k_3: function Mscrm_ConditionOperatorList$$1k_3() {
        var $v_0 = new Sys.StringBuilder();
        $v_0.append('<select class=\'ms-crm-SelectBox\'>');
        $v_0.append('<OPTION value=\'eq\' selected>');
        $v_0.append(CrmEncodeDecode.CrmXmlEncode(window.LOCID_AF_EQUALS));
        $v_0.append('</OPTION></select>');
        return $v_0.toString();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (229,3)
    GetXml: function Mscrm_ConditionOperatorList$GetXml() {
        if (IsNull(this.get_dataValue())) {
            return null;
        }
        else {
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.get_dataValue()) + '\"/>';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (243,3)
    $W_3: function Mscrm_ConditionOperatorList$$W_3() {
        var $v_0 = this.getSelectList();
        if ($v_0.get_selectedIndex() === -1) {
            return;
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if (this.isUnary()) {
            this.hideDependents();
        }
        else {
            if ($v_1 !== this.$2_3 && !IsNull(this.$A_3)) {
                this.$A_3.set_operator(this.$2_3);
            }
        }
        this.$Q_3(false);
        var $v_2 = this.$1_3.$e_3;
        if (!IsNull($v_2) && 'function' === typeof($v_2)) {
            $v_2(null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (280,3)
    $Q_3: function Mscrm_ConditionOperatorList$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (287,3)
    isUnary: function Mscrm_ConditionOperatorList$isUnary() {
        if (IsNull(this.$2_3)) {
            return false;
        }
        else {
            return !IsValueBoundOperator(this.$2_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (300,3)
    hideDependents: function Mscrm_ConditionOperatorList$hideDependents() {
        var $v_0 = this.$l_3.length, $v_1 = 0;
        while ($v_1 < $v_0) {
            (this.$3_3).HideChild(this.$l_3[$v_1]);
            $v_1++;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (311,3)
    addDependent: function Mscrm_ConditionOperatorList$addDependent(controlIndex) {
        this.$l_3[this.$l_3.length] = controlIndex;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (331,3)
    initialize: function Mscrm_ConditionOperatorList$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\' style=\"display:block; position: relative;\"/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'OP')));
        this.$C_3 = true;
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0['value'] = this.$2_3;
        $v_0['defaultText'] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_0['width'] = this.get_width();
        if (this.$1_3.get_readOnlyMode()) {
            $v_0['disabled'] = true;
        }
        var $v_1 = {};
        $v_1['onChange'] = this.$$d_$1Z_3;
        $v_1['onInitComplete'] = this.$$d_$1u_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml(this.$1b_3());
        window.setTimeout(this.$$d_$n_3, 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (358,3)
    $n_3: function Mscrm_ConditionOperatorList$$n_3() {
        if (this.get_isDisposed()) {
            return;
        }
        if (this.$S_3) {
            this.SetFocus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (376,3)
    SetFocus: function Mscrm_ConditionOperatorList$SetFocus() {
        this.$S_3 = true;
        if (this.$C_3) {
            this.$0_3.SetFocus();
            this.$S_3 = false;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionOperatorList.cs (390,3)
    dispose: function Mscrm_ConditionOperatorList$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.ConditionValue = function Mscrm_ConditionValue(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$1v_3 = Function.createDelegate(this, this.$1v_3);
    this.$$d_$1Z_3 = Function.createDelegate(this, this.$1Z_3);
    this.$$d_$1r_3 = Function.createDelegate(this, this.$1r_3);
    this.$$d_$1t_3 = Function.createDelegate(this, this.$1t_3);
    this.$$d_$1s_3 = Function.createDelegate(this, this.$1s_3);
    Mscrm.ConditionValue.initializeBase(this, [ element ]);
}
Mscrm.ConditionValue.prototype = {
    $0_3: null,
    $C_3: false,
    $3_3: null,
    $1_3: null,
    $7_3: null,
    $2_3: null,
    $8_3: null,
    $N_3: 0,
    $f_3: null,
    $O_3: null,
    $D_3: 0,
    $j_3: null,
    $1J_3: null,
    $r_3: null,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (41,4)
    get_index: function Mscrm_ConditionValue$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (42,4)
    set_index: function Mscrm_ConditionValue$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (47,4)
    get_conditionParentControl: function Mscrm_ConditionValue$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (48,4)
    set_conditionParentControl: function Mscrm_ConditionValue$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (53,4)
    get_conditionContainer: function Mscrm_ConditionValue$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (54,4)
    set_conditionContainer: function Mscrm_ConditionValue$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (59,4)
    get_columnData: function Mscrm_ConditionValue$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (60,4)
    set_columnData: function Mscrm_ConditionValue$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (65,4)
    get_dataSlug: function Mscrm_ConditionValue$get_dataSlug() {
        return this.$j_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (66,4)
    set_dataSlug: function Mscrm_ConditionValue$set_dataSlug(value) {
        this.$j_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (71,4)
    get_dataValue: function Mscrm_ConditionValue$get_dataValue() {
        if (this.$1F_3()) {
            return Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl()).get_firstSlugValue();
        }
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (79,4)
    set_dataValue: function Mscrm_ConditionValue$set_dataValue(value) {
        this.$2_3 = value;
        var $v_0 = value;
        var $v_1 = value;
        var $v_2 = null;
        if (this.$C_3) {
            if (this.$8_3 && value) {
                var $v_3 = this.$1_3.$6_3.AbstractDataType(this.$8_3);
                if ($v_3 === 'date') {
                    $v_1 = new Date(this.$2_3.valueOf());
                }
                else if (this.$1m_3($v_0)) {
                    var $v_4 = XUI.Xml.LoadXml($v_0);
                    var $v_5 = XUI.Xml.SelectNodes($v_4, '/lookup/value', null);
                    $v_2 = [];
                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        var $v_7 = $v_5[$v_6];
                        var $v_8 = new LookupControlItem();
                        $v_8.id = XUI.Xml.GetText($v_7);
                        $v_8.typename = XUI.Xml.GetText($v_7.attributes.getNamedItem('uitype'));
                        $v_8.name = XUI.Xml.GetText($v_7.attributes.getNamedItem('uiname'));
                        $v_2[$v_2.length] = $v_8;
                    }
                    $v_1 = $v_2;
                }
            }
            this.$0_3.set_value($v_1);
            this.$2_3 = $v_1;
        }
        else {
            this.$2_3 = $v_0;
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (124,4)
    get_attribute: function Mscrm_ConditionValue$get_attribute() {
        return this.$8_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (125,4)
    set_attribute: function Mscrm_ConditionValue$set_attribute(value) {
        this.$8_3 = value;
        if (!this.$C_3 || IsNull(this.$0_3)) {
            return value;
        }
        this.$12_3();
        if (!IsNull(this.$8_3)) {
            this.$1_3.LoadDynamicValues(this.get_element(), this.$8_3);
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (143,4)
    get_width: function Mscrm_ConditionValue$get_width() {
        return this.$N_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (144,4)
    set_width: function Mscrm_ConditionValue$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (149,4)
    get_operator: function Mscrm_ConditionValue$get_operator() {
        return this.$f_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (150,4)
    set_operator: function Mscrm_ConditionValue$set_operator(value) {
        if (!IsNull(this.$f_3) && (this.$f_3 !== value)) {
            this.set_dataValue(null);
        }
        this.$f_3 = value;
        if (!this.$C_3 || IsNull(this.$0_3)) {
            return value;
        }
        this.$12_3();
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (169,4)
    get_entity: function Mscrm_ConditionValue$get_entity() {
        return this.$O_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (170,4)
    set_entity: function Mscrm_ConditionValue$set_entity(value) {
        this.$O_3 = value;
        if (!this.$C_3 || IsNull(this.$0_3)) {
            return value;
        }
        this.$12_3();
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (191,3)
    AttachDataSlugEvents: function Mscrm_ConditionValue$AttachDataSlugEvents() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl());
            if (!IsNull($v_0)) {
                $v_0.add_deleteSlugBody(this.$$d_$1s_3);
                $v_0.add_changeDataSlug(this.$$d_$1t_3);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (205,3)
    $1Z_3: function Mscrm_ConditionValue$$1Z_3($p0, $p1) {
        this.$W_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (210,3)
    $1v_3: function Mscrm_ConditionValue$$1v_3($p0) {
        this.$1p_3($p0);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (216,3)
    $12_3: function Mscrm_ConditionValue$$12_3() {
        if (IsNull(this.$8_3) || IsNull(this.$O_3) || IsNull(this.$f_3)) {
            var $v_0 = this.$0_3.get_id() + '_select';
            this.$0_3.setInnerControlHtml('<select id=\'' + CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) + '\' class=\'ms-crm-SelectBox\'></select>');
            return;
        }
        this.$1x_3(this.$8_3, this.$f_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (229,3)
    $1x_3: function Mscrm_ConditionValue$$1x_3($p0, $p1) {
        this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.$0_3.set_toolTip(null);
        this.$0_3.set_width(150);
        switch ($p0.getAttribute('datatype').toString()) {
            case 'nvarchar':
            case 'text':
            case 'ntext':
            case 'memo':
                this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'string', null)));
                this.$0_3.get_innerControl().setAttribute('maxLength', $p0.getAttribute('maxlength'));
                break;
            case 'language':
            case 'bit':
            case 'boolean':
            case 'state':
            case 'status':
            case 'picklist':
                if (IsNameOperator($p1)) {
                    this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'string', null)));
                    this.$0_3.get_innerControl().setAttribute('maxLength', $p0.getAttribute('namemaxlength'));
                }
                else {
                    var $v_5 = $p0.getAttribute('value');
                    if (!isNullOrEmptyString($v_5) && $v_5.indexOf('#Arguments#') >= 0) {
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'number', null)));
                        var $v_6 = Mscrm.FormControlInputBehavior.GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
                        $v_6.set_dataType('int');
                        $v_6.set_precision(0);
                        $v_6.set_min(0);
                        $v_6.set_max(2147483647);
                    }
                    else {
                        var $v_7 = this.$1_3.$6_3.GetElement('ValueControl', 'picklist', null);
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_7));
                        var $v_8 = $find(this.$0_3.get_innerControl().id);
                        $v_8.LoadOptionsXml($p0.getAttribute('optionsXML'));
                    }
                }
                break;
            case 'primarykey':
            case 'partylist':
            case 'uniqueidentifier':
            case 'lookup':
            case 'customer':
            case 'owner':
                if (IsNameOperator($p1) && $p0.getAttribute('datatype') !== 'partylist') {
                    this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'string', null)));
                    this.$0_3.get_innerControl().setAttribute('maxLength', $p0.getAttribute('namemaxlength'));
                }
                else {
                    var $v_9 = this.$1_3.$6_3.GetElement('ValueControl', 'lookup', null);
                    var $v_A = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_9)), 1));
                    $v_A.setAttribute('lookuptypes', $p0.getAttribute('lookuptypes'));
                    $v_A.setAttribute('lookuptypenames', $p0.getAttribute('lookuptypenames'));
                    var $v_B = $p0.getAttribute('lookuptypes').toString().split(',');
                    $v_A.setAttribute('lookuptypeIcons', this.$1_3.$6_3.LookupIcons[parseInt($v_B[0], 10)]);
                    for (var $v_C = 1; $v_C < $v_B.length; $v_C++) {
                        $v_A.setAttribute('lookuptypeIcons', $v_A.getAttribute('lookuptypeIcons') + ':' + this.$1_3.$6_3.LookupIcons[parseInt($v_B[$v_C], 10)]);
                    }
                    if ($p0.getAttribute('lookuptypes').toString() === Mscrm.EntityTypeCode.Subject.toString()) {
                        $v_A.setAttribute('lookupstyle', 'subject');
                    }
                    else {
                        $v_A.setAttribute('lookupstyle', 'multi');
                    }
                    this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_9));
                }
                break;
            case 'decimal':
            case 'int':
            case 'float':
            case 'integer':
            case 'money':
                this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'number', null)));
                var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
                $v_0.set_dataType((($p0.getAttribute('datatype').toString() === 'integer') ? 'int' : $p0.getAttribute('datatype')));
                $v_0.set_precision(parseInt($p0.getAttribute('acc'), 10));
                $v_0.set_min($p0.getAttribute('min'));
                $v_0.set_max($p0.getAttribute('max'));
                if ($p0.getAttribute('format') === 'duration') {
                    this.$0_3.set_defaultText(this.$0_3.set_toolTip(window.LOCID_AF_ENTERVALINMINS));
                }
                break;
            case 'datetime':
            case 'date':
            case 'time':
                var $v_1 = {};
                var $v_2 = {};
                var $v_3 = '';
                switch ($p1) {
                    case 'last-x-hours':
                    case 'next-x-hours':
                        $v_1['hours'] = 1;
                        $v_2['hours'] = 2000;
                        $v_3 = 'hours';
                        break;
                    case 'last-x-days':
                    case 'next-x-days':
                        $v_1['days'] = 1;
                        $v_2['days'] = 500;
                        $v_3 = 'days';
                        break;
                    case 'last-x-weeks':
                    case 'next-x-weeks':
                        $v_1['weeks'] = 1;
                        $v_2['weeks'] = 100;
                        $v_3 = 'weeks';
                        break;
                    case 'last-x-months':
                    case 'next-x-months':
                    case 'olderthan-x-months':
                        $v_1['months'] = 1;
                        $v_2['months'] = 100;
                        $v_3 = 'months';
                        break;
                    case 'last-x-years':
                    case 'next-x-years':
                        $v_1['years'] = 1;
                        $v_2['years'] = 100;
                        $v_3 = 'years';
                        break;
                    case 'last-x-fiscal-years':
                    case 'next-x-fiscal-years':
                        $v_1['fiscalyears'] = 1;
                        $v_2['fiscalyears'] = 100;
                        $v_3 = 'fiscalyears';
                        break;
                    case 'last-x-fiscal-periods':
                    case 'next-x-fiscal-periods':
                        $v_1['fiscalperiods'] = 1;
                        $v_2['fiscalperiods'] = 100;
                        $v_3 = 'fiscalperiods';
                        break;
                    case 'in-fiscal-year':
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'fiscalperiodandyear', null)));
                        var $v_4 = ($find(this.$0_3.get_innerControl().id));
                        $v_4.set_showPeriod(false);
                        $v_4.set_showYear(true);
                        break;
                    case 'in-fiscal-period':
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'fiscalperiodandyear', null)));
                        $v_4 = ($find(this.$0_3.get_innerControl().id));
                        $v_4.set_showPeriod(true);
                        $v_4.set_showYear(false);
                        break;
                    case 'in-fiscal-period-and-year':
                    case 'in-or-before-fiscal-period-and-year':
                    case 'in-or-after-fiscal-period-and-year':
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'fiscalperiodandyear', null)));
                        $v_4 = ($find(this.$0_3.get_innerControl().id));
                        $v_4.set_showPeriod(true);
                        $v_4.set_showYear(true);
                        break;
                    case 'eq':
                    case 'ne':
                    case 'gt':
                    case 'ge':
                    case 'lt':
                    case 'le':
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'datetime', null)));
                        this.$0_3.set_width(200);
                        break;
                    default:
                        this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'date', null)));
                        break;
                }
                if ($v_3 !== '') {
                    this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML(this.$1_3.$6_3.GetElement('ValueControl', 'number', null)));
                    var $v_D = Mscrm.FormControlInputBehavior.GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
                    $v_D.set_precision(0);
                    $v_D.set_min($v_1[$v_3]);
                    $v_D.set_max($v_2[$v_3]);
                }
                break;
            default:
                break;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (454,3)
    $1m_3: function Mscrm_ConditionValue$$1m_3($p0) {
        if (IsNull($p0)) {
            return false;
        }
        return !$p0.toString().indexOf('<lookup>') && $p0.toString().indexOf('</lookup>') > 0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (463,3)
    $1F_3: function Mscrm_ConditionValue$$1F_3() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = this.$0_3.getSlugControl();
            if (typeof($v_0) !== 'undefined' && !IsNull(Mscrm.FormUtility.getSlugBehavior($v_0)) && Mscrm.FormUtility.getSlugBehavior($v_0).get_isDataSlug()) {
                return true;
            }
        }
        return false;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (478,3)
    ParseXml: function Mscrm_ConditionValue$ParseXml() {
        if (IsNull(this.$2_3) || (this.$2_3.toString() === '')) {
            if (!IsNull(this.$8_3) && (this.$8_3).getAttribute('title') !== '' && !this.$1F_3()) {
                alert(String.format(window.LOCID_AF_VALUEMISSINGFOR_MSG, (this.$8_3).getAttribute('title').toString()));
                return false;
            }
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (494,3)
    GetXml: function Mscrm_ConditionValue$GetXml() {
        var $v_0 = false;
        var $v_1 = '';
        if (this.$1F_3()) {
            $v_0 = true;
            $v_1 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl()).get_firstSlugValue();
        }
        else {
            if ((IsNull(this.$2_3) || (typeof(this.$2_3) === 'string' && this.$2_3 === '')) && !$v_0) {
                return null;
            }
            else {
                var $v_2 = this.$1_3.$6_3.AbstractDataType(this.$8_3);
                switch ($v_2) {
                    case 'owner':
                    case 'lookup':
                    case 'lookupwithuser':
                    case 'lookupwithbusinessunit':
                        var $v_3 = this.$0_3.get_value();
                        var $v_4 = $v_3.length;
                        for (var $v_6 = 0; $v_6 < $v_4; $v_6++) {
                            var $v_7 = '';
                            var $v_8 = $v_3[$v_6];
                            $v_7 = '<value uiname = \'' + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.name) + '\'';
                            $v_7 = $v_7 + ' uitype = \'' + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.typename) + '\'';
                            $v_7 = $v_7 + ' >' + CrmEncodeDecode.CrmXmlEncode($v_8.id) + '</value>';
                            $v_1 = $v_1 + $v_7;
                        }
                        if ($v_1.length > 0) {
                            $v_1 = '<lookup>' + $v_1 + '</lookup>';
                        }
                        break;
                    case 'picklist':
                        $v_1 = this.$2_3;
                        break;
                    case 'date':
                        var $v_5 = new Date(this.$2_3.valueOf());
                        $v_1 = FormatUtcDate($v_5);
                        break;
                    default:
                        $v_1 = this.$0_3.get_value();
                        break;
                }
            }
        }
        return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode($v_1) + '\" dataslugs=\"' + (($v_0) ? '0' : '') + '\" />';
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (558,3)
    setDataSlugs: function Mscrm_ConditionValue$setDataSlugs(dataSlugValues, slugIndexes, slugText) {
        if (!IsNull(slugIndexes)) {
            this.$1J_3 = dataSlugValues;
            this.$r_3 = slugText;
            if (this.$C_3) {
                this.$1c_3();
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (572,3)
    $1c_3: function Mscrm_ConditionValue$$1c_3() {
        if (!IsNull(this.$j_3)) {
            var $v_0 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl());
            $v_0.set_isDataSlug(true);
            $v_0.set_isMultiSlug(false);
            $v_0.set_isReadOnly(true);
            $v_0.InsertSlugControl(this.$1J_3, this.$r_3, false, false);
            this.$0_3.set_text(this.$r_3);
            this.$0_3.set_defaultText(this.$r_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (591,3)
    $1s_3: function Mscrm_ConditionValue$$1s_3($p0, $p1) {
        this.$0_3.set_text('');
        this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.set_dataValue(this.$0_3.get_value());
        this.$Q_3(true);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (599,3)
    $1t_3: function Mscrm_ConditionValue$$1t_3($p0, $p1) {
        this.$W_3();
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (604,3)
    $1r_3: function Mscrm_ConditionValue$$1r_3($p0) {
        if (!IsNull(this.$8_3)) {
            this.$1_3.LoadDynamicValues(this.get_element(), this.$8_3);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (613,3)
    $Q_3: function Mscrm_ConditionValue$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (625,3)
    $W_3: function Mscrm_ConditionValue$$W_3() {
        if (!IsNull(this.$0_3)) {
            this.set_dataValue(this.$0_3.get_value());
        }
        this.$Q_3(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (635,3)
    $1p_3: function Mscrm_ConditionValue$$1p_3($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_0 === 83 && $p0.altKey) {
            if (typeof($p0.target) !== 'undefined') {
                var $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target);
                if (!$v_1.IsValid()) {
                    $p0.stopPropagation();
                    return;
                }
            }
            this.set_dataValue(this.$0_3.get_value());
            this.$Q_3(true);
            return;
        }
        return;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (670,3)
    initialize: function Mscrm_ConditionValue$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\'/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'VALUE')));
        this.$C_3 = true;
        $addHandler(this.get_element(), 'click', this.$$d_$1r_3);
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0['value'] = this.$2_3;
        $v_0['defaultText'] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_0['width'] = this.get_width();
        var $v_1 = {};
        $v_1['onChange'] = this.$$d_$1Z_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        $addHandler(this.$0_3.get_element(), 'keyDown', this.$$d_$1v_3);
        this.$12_3();
        if (this.$1_3.get_readOnlyMode()) {
            this.$0_3.set_disabled(true);
        }
        window.setTimeout(this.$$d_$n_3, 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (697,3)
    $n_3: function Mscrm_ConditionValue$$n_3() {
        if (this.get_isDisposed()) {
            return;
        }
        this.set_dataValue(this.$2_3);
        if (!IsNull(this.$j_3)) {
            this.$1c_3();
            this.AttachDataSlugEvents();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\ConditionValue.cs (713,3)
    dispose: function Mscrm_ConditionValue$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        $removeHandler(this.get_element(), 'click', this.$$d_$1r_3);
        if (!IsNull(this.$0_3)) {
            $removeHandler(this.$0_3.get_element(), 'keyDown', this.$$d_$1v_3);
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.Freeform = function Mscrm_Freeform(element) {
    this.$$d_$n_3 = Function.createDelegate(this, this.$n_3);
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    Mscrm.Freeform.initializeBase(this, [ element ]);
}
Mscrm.Freeform.prototype = {
    $0_3: null,
    $C_3: false,
    $S_3: false,
    $3_3: null,
    $1_3: null,
    $7_3: null,
    $2_3: null,
    $N_3: 0,
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (30,4)
    get_index: function Mscrm_Freeform$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (31,4)
    set_index: function Mscrm_Freeform$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (36,4)
    get_conditionParentControl: function Mscrm_Freeform$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (37,4)
    set_conditionParentControl: function Mscrm_Freeform$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (42,4)
    get_conditionContainer: function Mscrm_Freeform$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (43,4)
    set_conditionContainer: function Mscrm_Freeform$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (48,4)
    get_columnData: function Mscrm_Freeform$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (49,4)
    set_columnData: function Mscrm_Freeform$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (54,4)
    get_dataValue: function Mscrm_Freeform$get_dataValue() {
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (55,4)
    set_dataValue: function Mscrm_Freeform$set_dataValue(value) {
        this.$2_3 = value;
        if (this.$C_3) {
            this.render();
            if (!isNullOrEmptyString(this.$0_3.get_element().innerHTML)) {
                this.$0_3.set_value(this.$2_3);
            }
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (71,4)
    get_width: function Mscrm_Freeform$get_width() {
        return this.$1_3.get_columnWidthInPixels();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (72,4)
    set_width: function Mscrm_Freeform$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (80,3)
    render: function Mscrm_Freeform$render() {
        if (IsNull(this.$0_3)) {
            return;
        }
        if (IsNull(this.$0_3.get_defaultText())) {
            this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        }
        if (this.$1_3.get_readOnlyMode()) {
            this.$0_3.set_disabled(true);
        }
        var $v_0 = null;
        var $v_1 = this.$1_3.get_getUserDefinedList();
        if (!IsNull($v_1) && 'function' === typeof($v_1)) {
            var $v_2 = {};
            $v_2['ID'] = this.$7_3.id;
            $v_2['Element'] = this.get_element();
            $v_0 = $v_1($v_2);
        }
        if (!IsNull($v_0)) {
            this.$0_3.setInnerControlHtml($v_0);
        }
        if (this.$1_3.get_id() === 'dupRuleAppCondition' && this.$7_3.id === 'colIgnoreBlankValues') {
            this.$0_3.set_showAlways(true);
            this.$0_3.ShowControl(true, false);
            this.$0_3.set_toolTip(window.LOCID_DEDUP_IGNOREBLANK_TOOLTIP);
            if (_isIgnoreBlankValuePresentInMetadata == false ) {
                this.$0_3.set_disabled(true);
            }
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (123,3)
    ParseXml: function Mscrm_Freeform$ParseXml() {
        if ((IsNull(this.$2_3) || this.$2_3 === '') && !(this.$7_3.id === 'colIgnoreBlankValues')) {
            if (!IsNull(window.LOCID_DEDUP_NUMCHARS_MISSING)) {
                var $v_0 = (window._isSingleEntityRule) ? 1 : 2;
                var $v_1 = (this.$3_3).GetControl($v_0);
                if (!IsNull($v_1.get_dataValue()) && !$v_1.isUnary()) {
                    var $v_2 = (this.$3_3).GetControl(0);
                    var $v_3 = $find(XUI.Html.DomUtils.GetFirstChild($v_2.get_element()).id);
                    if (!IsNull($v_3)) {
                        alert(String.format(window.LOCID_DEDUP_NUMCHARS_MISSING, $v_3.get_text()));
                        return false;
                    }
                }
            }
        }
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (152,3)
    GetXml: function Mscrm_Freeform$GetXml() {
        if (IsNull(this.get_dataValue()) || (this.get_dataValue() === '')) {
            return null;
        }
        else {
            var $v_0 = null;
            var $v_1 = this.$1_3.$18_3;
            if (!IsNull($v_1) && 'function' === typeof($v_1)) {
                var $v_2 = {};
                $v_2['ID'] = this.$7_3.id;
                $v_2['Element'] = this.get_element();
                $v_0 = $v_1($v_2);
            }
            if (IsNull($v_0)) {
                $v_0 = this.get_dataValue();
            }
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode($v_0) + '\"/>';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (181,3)
    $Q_3: function Mscrm_Freeform$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (193,3)
    $W_3: function Mscrm_Freeform$$W_3($p0, $p1) {
        var $v_0 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        this.$Q_3(false);
        var $v_1 = this.$1_3.$e_3;
        if (!IsNull($v_1) && 'function' === typeof($v_1)) {
            $v_1(null);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (220,3)
    initialize: function Mscrm_Freeform$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\' style=\"display:block; position: relative;\"/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'FREEFORM')));
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0['value'] = this.$2_3;
        $v_0['defaultText'] = window.LOCID_AF_ENTERVALUE;
        $v_0['width'] = this.get_width();
        var $v_1 = {};
        $v_1['onChange'] = this.$$d_$W_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml('<span/>');
        window.setTimeout(this.$$d_$n_3, 1);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (241,3)
    $n_3: function Mscrm_Freeform$$n_3() {
        if (this.get_isDisposed()) {
            return;
        }
        this.$C_3 = true;
        this.set_dataValue(this.$2_3);
        if (this.$S_3 && !this.$0_3.get_disabled()) {
            this.SetFocus();
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (259,3)
    SetFocus: function Mscrm_Freeform$SetFocus() {
        this.$S_3 = true;
        if (this.$C_3) {
            this.$0_3.SetFocus();
            this.$S_3 = false;
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\FreeForm.cs (273,3)
    dispose: function Mscrm_Freeform$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.Hidden = function Mscrm_Hidden(element) {
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    this.$1f_3 = [];
    Mscrm.Hidden.initializeBase(this, [ element ]);
}
Mscrm.Hidden.prototype = {
    $0_3: null,
    $C_3: false,
    $3_3: null,
    $1_3: null,
    $7_3: null,
    $2_3: null,
    $A_3: null,
    $N_3: 0,
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (33,4)
    get_index: function Mscrm_Hidden$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (34,4)
    set_index: function Mscrm_Hidden$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (40,4)
    get_conditionParentControl: function Mscrm_Hidden$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (41,4)
    set_conditionParentControl: function Mscrm_Hidden$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (46,4)
    get_conditionContainer: function Mscrm_Hidden$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (47,4)
    set_conditionContainer: function Mscrm_Hidden$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (52,4)
    get_columnData: function Mscrm_Hidden$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (53,4)
    set_columnData: function Mscrm_Hidden$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (58,4)
    get_dataValue: function Mscrm_Hidden$get_dataValue() {
        return this.$2_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (62,4)
    set_dataValue: function Mscrm_Hidden$set_dataValue(value) {
        this.$2_3 = value;
        if (this.$C_3) {
            this.$0_3.set_value(value);
        }
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (74,4)
    get_width: function Mscrm_Hidden$get_width() {
        return this.$N_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (75,4)
    set_width: function Mscrm_Hidden$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (80,4)
    get_dependentValue: function Mscrm_Hidden$get_dependentValue() {
        return this.$A_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (81,4)
    set_dependentValue: function Mscrm_Hidden$set_dependentValue(value) {
        this.$A_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (87,3)
    ParseXml: function Mscrm_Hidden$ParseXml() {
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (93,3)
    GetXml: function Mscrm_Hidden$GetXml() {
        if (IsNull(this.get_dataValue())) {
            return null;
        }
        else {
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.get_dataValue()) + '\"/>';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (107,3)
    $Q_3: function Mscrm_Hidden$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (117,3)
    $W_3: function Mscrm_Hidden$$W_3($p0, $p1) {
        var $v_0 = this.$2_3;
        this.$2_3 = this.get_element().nodeValue;
        this.$Q_3(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (138,3)
    initialize: function Mscrm_Hidden$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\'/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'HIDDEN')));
        this.$C_3 = true;
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0['value'] = this.$2_3;
        $v_0['defaultText'] = '';
        $v_0['width'] = 0;
        var $v_1 = {};
        $v_1['onChange'] = this.$$d_$W_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml('<INPUT class=\'ms-crm-Text\'/>');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\Hidden.cs (161,3)
    dispose: function Mscrm_Hidden$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.PredefinedList = function Mscrm_PredefinedList(element) {
    this.$$d_$W_3 = Function.createDelegate(this, this.$W_3);
    Mscrm.PredefinedList.initializeBase(this, [ element ]);
}
Mscrm.PredefinedList.prototype = {
    $0_3: null,
    $C_3: false,
    $3_3: null,
    $1_3: null,
    $7_3: null,
    $2_3: null,
    $A_3: null,
    $N_3: 0,
    $D_3: 0,
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (38,4)
    get_index: function Mscrm_PredefinedList$get_index() {
        return this.$D_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (39,4)
    set_index: function Mscrm_PredefinedList$set_index(value) {
        this.$D_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (44,4)
    get_conditionParentControl: function Mscrm_PredefinedList$get_conditionParentControl() {
        return this.$3_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (45,4)
    set_conditionParentControl: function Mscrm_PredefinedList$set_conditionParentControl(value) {
        this.$3_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (50,4)
    get_conditionContainer: function Mscrm_PredefinedList$get_conditionContainer() {
        return this.$1_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (51,4)
    set_conditionContainer: function Mscrm_PredefinedList$set_conditionContainer(value) {
        this.$1_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (56,4)
    get_columnData: function Mscrm_PredefinedList$get_columnData() {
        return this.$7_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (57,4)
    set_columnData: function Mscrm_PredefinedList$set_columnData(value) {
        this.$7_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (62,4)
    get_dataValue: function Mscrm_PredefinedList$get_dataValue() {
        return this.$1E_3();
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (63,4)
    set_dataValue: function Mscrm_PredefinedList$set_dataValue(value) {
        this.$1z_3(value);
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (68,4)
    get_width: function Mscrm_PredefinedList$get_width() {
        return this.$N_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (69,4)
    set_width: function Mscrm_PredefinedList$set_width(value) {
        this.$N_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (74,4)
    get_dependentValue: function Mscrm_PredefinedList$get_dependentValue() {
        return this.$A_3;
    },
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (75,4)
    set_dependentValue: function Mscrm_PredefinedList$set_dependentValue(value) {
        this.$A_3 = value;
        return value;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (83,3)
    $1j_3: function Mscrm_PredefinedList$$1j_3() {
        return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$0_3.get_innerControl());
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (89,3)
    $1G_3: function Mscrm_PredefinedList$$1G_3() {
        var $v_0 = '';
        var $v_1 = 0;
        while (true) {
            var $v_2 = 'id' + $v_1;
            var $v_3 = 'name' + $v_1;
            var $v_4 = this.$7_3.attributes.getNamedItem($v_2);
            var $v_5 = this.$7_3.attributes.getNamedItem($v_3);
            if (IsNull($v_4) || IsNull($v_5)) {
                break;
            }
            $v_0 += '<OPTION VALUE=\'' + $v_4.value + '\'>' + $v_5.value + '</OPTION>';
            $v_1++;
        }
        return $v_0;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (114,3)
    $1E_3: function Mscrm_PredefinedList$$1E_3() {
        return this.$2_3;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (118,3)
    $1z_3: function Mscrm_PredefinedList$$1z_3($p0) {
        this.$2_3 = $p0;
        if (this.$C_3) {
            this.$0_3.set_value($p0);
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (127,3)
    ParseXml: function Mscrm_PredefinedList$ParseXml() {
        return true;
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (133,3)
    GetXml: function Mscrm_PredefinedList$GetXml() {
        if (IsNull(this.$1E_3())) {
            return null;
        }
        else {
            return '<column id=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$7_3.id) + '\" value=\"' + CrmEncodeDecode.CrmXmlAttributeEncode(this.$1E_3()) + '\"/>';
        }
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (149,3)
    $Q_3: function Mscrm_PredefinedList$$Q_3($p0) {
        (this.$3_3).FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        (this.$3_3).HideAffectedControls(this.$D_3);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (161,3)
    $W_3: function Mscrm_PredefinedList$$W_3($p0, $p1) {
        var $v_0 = this.$1j_3();
        if ($v_0.get_selectedIndex() === -1) {
            return;
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.get_element().nodeValue;
        this.$Q_3(false);
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (196,3)
    initialize: function Mscrm_PredefinedList$initialize() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format('<{0} id=\'{1}\'/>', 'Crm:AutoShow', CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), 'PREDEF')));
        var $v_0 = this.get_element().id + '_select';
        this.$C_3 = true;
        var $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1['value'] = this.$2_3;
        $v_1['defaultText'] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1['width'] = 0;
        var $v_2 = {};
        $v_2['onChange'] = this.$$d_$W_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow, $v_1, $v_2, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml('<select id=\'' + $v_0 + '\' class=\'ms-crm-SelectBox\'>' + this.$1G_3() + '</select>');
    },
    
    // file://c:\bt\160165\src\core\application\web\scriptsharp\_controls\condition\PredefinedList.cs (222,3)
    dispose: function Mscrm_PredefinedList$dispose() {
        if (this.get_isDisposed()) {
            return;
        }
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null;
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this);
    }
}


Mscrm.AttributeList.registerClass('Mscrm.AttributeList', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionEntity.registerClass('Mscrm.ConditionEntity');
Mscrm.Condition.registerClass('Mscrm.Condition', Mscrm.CrmUIControl);
Mscrm.ConditionAutoShow.registerClass('Mscrm.ConditionAutoShow', Mscrm.AutoShow, Mscrm.IConditionClientControl);
Mscrm.ConditionCommon.registerClass('Mscrm.ConditionCommon');
Mscrm.ConditionControl.registerClass('Mscrm.ConditionControl', Mscrm.CrmUIControl, Mscrm.IConditionClientControl, Mscrm.IConditionContainerControl);
Mscrm.ConditionEntityList.registerClass('Mscrm.ConditionEntityList', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionField.registerClass('Mscrm.ConditionField', Mscrm.CrmUIControl, Mscrm.IConditionClientControl, Mscrm.IConditionContainerControl);
Mscrm.ConditionGroup.registerClass('Mscrm.ConditionGroup', Mscrm.CrmUIControl, Mscrm.IConditionClientControl, Mscrm.IConditionContainerControl);
Mscrm.ConditionOperatorList.registerClass('Mscrm.ConditionOperatorList', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionValue.registerClass('Mscrm.ConditionValue', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.Freeform.registerClass('Mscrm.Freeform', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.Hidden.registerClass('Mscrm.Hidden', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.PredefinedList.registerClass('Mscrm.PredefinedList', Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionCommon.CONDITION_CTRL = 'Crm:ConditionControl';
Mscrm.ConditionCommon.PREDEFINED_LIST = 'Crm:PredefinedList';
Mscrm.ConditionCommon.CONDITIONGROUP_CTRL = 'Crm:ConditionGroup';
Mscrm.ConditionCommon.CONDITIONFIELD_CTRL = 'Crm:ConditionField';
Mscrm.ConditionCommon.ENTITY_LIST = 'Crm:EntityList';
Mscrm.ConditionCommon.ATTRIBUTE_LIST = 'Crm:AttributeList';
Mscrm.ConditionCommon.OPERATOR_LIST = 'Crm:OperatorList';
Mscrm.ConditionCommon.VALUE_CTRL = 'Crm:Value';
Mscrm.ConditionCommon.FREEFORM_CTRL = 'Crm:Freeform';
Mscrm.ConditionCommon.HIDDEN_CTRL = 'Crm:Hidden';
Mscrm.ConditionCommon.AUTOSHOW_CTRL = 'Crm:AutoShow';
Mscrm.ConditionCommon.FIELD_GROUP = 'fld';
Mscrm.ConditionCommon.TimeoutExprEntity = 'waittimeout';
Mscrm.ConditionCommon.AT_END = 1;
Mscrm.ConditionCommon.AT_BEGIN = 2;
Mscrm.ConditionCommon.AT_AFTER = 3;
Mscrm.ConditionCommon.AT_BEFORE = 4;
Mscrm.ConditionCommon.and = 'and';
Mscrm.ConditionCommon.or = 'or';
Mscrm.ConditionCommon.condition = 'condition';
Mscrm.ConditionCommon.ControlsCache = null;
