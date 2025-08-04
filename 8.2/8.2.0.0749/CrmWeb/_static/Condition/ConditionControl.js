Type.registerNamespace("Mscrm");
Mscrm.IConditionClientControl = function() {};
Mscrm.IConditionClientControl.registerInterface("Mscrm.IConditionClientControl");
Mscrm.IConditionContainerControl = function() {};
Mscrm.IConditionContainerControl.registerInterface("Mscrm.IConditionContainerControl");
Mscrm.AttributeList = function(element) {
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$1b_3 = Function.createDelegate(this, this.$1b_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    Mscrm.AttributeList.initializeBase(this, [element])
};
Mscrm.AttributeList.prototype = {
    $A_3: false,
    $0_3: null,
    $L_3: null,
    get_entity: function() {
        if (IsNull(this.$L_3)) this.$L_3 = this.get_element().getAttribute("entity");
        return this.$L_3
    },
    set_entity: function(value) {
        this.$L_3 = value;
        if (!this.$A_3 || IsNull(this.$0_3)) return value;
        this.render();
        return value
    },
    $2_3: null,
    get_dataValue: function() { return this.$2_3 },
    set_dataValue: function(value) {
        this.$2_3 = value;
        if (this.$A_3) {
            if (IsNull(this.$0_3)) this.$0_3 = $find(Mscrm.Condition.getControlId(this.get_id(), "ATTR").toString());
            this.$0_3.set_value(value);
            if (!IsNull(value)) {
                if (!IsNull(this.$N_3)) {
                    var $v_0 = this.$1Y_3(this.$2_3);
                    this.$N_3.set_attribute($v_0)
                }
                if (!IsNull(this.$9_3)) {
                    var $v_1 = this.GetSelectList(), $v_2 = Mscrm.FormControlInputBehavior.GetBehavior($v_1.id);
                    this.$9_3.set_attribute($v_2.get_selectedOption())
                }
                !IsNull(this.$E_3) && this.$E_3.render()
            }
        }
        return value
    },
    $N_3: null,
    get_dependentOperator: function() { return this.$N_3 },
    set_dependentOperator: function(value) {
        this.$N_3 = value;
        return value
    },
    $E_3: null,
    get_dependentAttribute: function() { return this.$E_3 },
    set_dependentAttribute: function(value) {
        this.$E_3 = value;
        return value
    },
    $G_3: 0,
    get_width: function() { return this.$1_3.get_columnWidthInPixels() },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    $9_3: null,
    get_dependentValue: function() { return this.$9_3 },
    set_dependentValue: function(value) {
        this.$9_3 = value;
        return value
    },
    $6_3: null,
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    $3_3: null,
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    $1_3: null,
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    $c_3: function($p0, $p1) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_3.get_innerControl().id);
        if ($v_0.get_selectedIndex() === -1) return;
        if (IsTimeoutExpr(this.$0_3.get_value()) && !CanSetTimeoutExpression(this.$3_3.get_element())) {
            alert(window.LOCID_WF_SETTIMEOUT_EXPR_ERR);
            $v_0.set_selectedIndex(-1);
            return
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if ($v_1 !== this.$2_3 && !IsNull(this.$N_3)) {
            var $v_3 = this.$1Y_3(this.$2_3);
            this.$N_3.set_attribute($v_3);
            this.$N_3.set_dataValue(null);
            $get(this.$N_3.get_id()).style.visibility = "visible"
        }
        $v_1 !== this.$2_3 && !IsNull(this.$9_3) && this.$9_3.set_attribute($v_0.get_selectedOption());
        if ($v_1 !== this.$2_3 && !IsNull(this.$E_3)) {
            this.$E_3.render();
            this.$E_3.$0_3.set_value(null);
            $get(this.$E_3.$N_3.get_id()).style.visibility = "hidden";
            this.$E_3.$N_3.set_dataValue(null)
        }
        this.$V_3(false);
        var $v_2 = this.$1_3.$g_3;
        !IsNull($v_2) && "function" === typeof $v_2 && $v_2(null)
    },
    $1b_3: function($p0, $p1) {
        this.$A_3 = true;
        this.set_dataValue(this.$2_3)
    },
    render: function() {
        if (!IsNull(this.$0_3)) {
            this.$1_3.get_readOnlyMode() && this.$0_3.set_disabled(true);
            var $v_2 = null, $v_3 = this.$1_3.get_getUserDefinedList();
            if (!IsNull($v_3) && "function" === typeof $v_3) {
                var $v_4 = {};
                $v_4["ID"] = this.$6_3.id;
                $v_4["Element"] = this.get_element();
                $v_2 = $v_3($v_4)
            }
            if (IsNull($v_2)) $v_2 = this.$1d_3();
            this.$0_3.setInnerControlHtml("<select class='ms-crm-SelectBox'>" + $v_2 + "</select>");
            this.$0_3.set_value(this.$2_3)
        }
        var $v_0 = this.GetSelectList(), $v_1 = Mscrm.FormControlInputBehavior.GetBehavior($v_0.id);
        !IsNull($v_1) && $v_1.set_selectedIndex(-1)
    },
    GetSelectList: function() { return this.$0_3.get_innerControl() },
    $1d_3: function() {
        if (IsNull(this.get_entity())) return "";
        var $v_0 = this.$1Z_3();
        if (this.$L_3.indexOf("#") !== -1 && !this.$1_3.$8_3.Contains("Field", $v_0)) {
            var $v_2 = {};
            $v_2["localValueKey"] = $v_0;
            $v_2["expressionType"] = this.$1_3.$r_3;
            var $v_3 = this.$1_3.$8_3.ExecuteCommand("GetAttributesForLocalValue", "Workflow", $v_2, null, null, null);
            this.$1_3.$8_3.PutElement("Field", $v_0, $v_3);
            return $v_3
        }
        var $v_1 = this.$1_3.$8_3.GetElement("Field", $v_0, null);
        return $v_1
    },
    $1Z_3: function() {
        var $v_0, $v_1 = this.get_entity().indexOf(".");
        if ($v_1 === -1) $v_0 = this.get_entity();
        else $v_0 = this.get_entity().substring(0, $v_1);
        return $v_0
    },
    $1Y_3: function($p0) {
        var $v_0 = this.$1Z_3(), $v_1 = this.$1_3.$8_3.GetDataType($p0, $v_0);
        if ($v_1 === "lookup") {
            var $v_2 = this.$1_3.$8_3.GetField($p0, $v_0);
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.attributes.getNamedItem("datatype");
                if ($v_3.text === "partylist") $v_1 = "partylist"
            }
        }
        return $v_1
    },
    ParseXml: function() { return true },
    GetXml: function() {
        if (IsNull(this.$2_3)) return null;
        else
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$2_3) +
                '"/>'
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    add_onInitComplete: function(value) { this.get_events().addHandler("OnInitComplete", value) },
    remove_onInitComplete: function(value) { this.get_events().removeHandler("OnInitComplete", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}' style=\"display:block; position: relative;\"/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "ATTR")));
        var $v_0 = this.get_element().id + "_select", $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1["value"] = this.$2_3;
        $v_1["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1["width"] = this.get_width();
        var $v_2 = {};
        $v_2["onChange"] = this.$$d_$c_3;
        $v_2["onInitComplete"] = this.$$d_$1b_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_1,
            $v_2,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml("<select id='" +
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) +
            "' class='ms-crm-SelectBox'>" +
            this.$1d_3() +
            "</select>");
        this.$1_3.get_readOnlyMode() && this.$0_3.set_disabled(true);
        window.setTimeout(this.$$d_$14_3, 1)
    },
    $14_3: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$L_3) && this.set_entity(this.$L_3);
        this.set_dataValue(this.$2_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionEntity = function() {};
Mscrm.ConditionEntity.prototype = {
    $1I_0: "",
    $1G_0: "",
    get_entityName: function() { return this.$1I_0 },
    set_entityName: function(value) {
        this.$1I_0 = value;
        return value
    },
    get_customFields: function() { return this.$1G_0 },
    set_customFields: function(value) {
        this.$1G_0 = value;
        return value
    }
};
Mscrm.Condition = function(element) { Mscrm.Condition.initializeBase(this, [element]) };
Mscrm.Condition.getPropertiesForChild = function(component) {
    var $v_0 = {};
    $v_0["conditionParentControl"] = component;
    $v_0["conditionContainer"] = component.get_conditionContainer();
    return $v_0
};
Mscrm.Condition.isImplementsContainerControl = function(control) {
    return Mscrm.IConditionContainerControl.isImplementedBy(control)
};
Mscrm.Condition.getControlId = function(parentId, suffix) { return parentId + suffix };
Mscrm.Condition.prototype = {
    $d_3: null,
    $H_3: null,
    add_onLoad: function(value) { this.get_events().addHandler("OnLoad", value) },
    remove_onLoad: function(value) { this.get_events().removeHandler("OnLoad", value) },
    add_onNew: function(value) { this.get_events().addHandler("OnNew", value) },
    remove_onNew: function(value) { this.get_events().removeHandler("OnNew", value) },
    add_onClear: function(value) { this.get_events().addHandler("OnClear", value) },
    remove_onClear: function(value) { this.get_events().removeHandler("OnClear", value) },
    add_onGroup: function(value) { this.get_events().addHandler("OnGroup", value) },
    remove_onGroup: function(value) { this.get_events().removeHandler("OnGroup", value) },
    add_onAddRow: function(value) { this.get_events().addHandler("OnAddRow", value) },
    remove_onAddRow: function(value) { this.get_events().removeHandler("OnAddRow", value) },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    $U_3: null,
    get_visibleControl: function() { return this.$U_3 },
    set_visibleControl: function(value) {
        this.$U_3 = value;
        return value
    },
    $v_3: false,
    get_isDirty: function() { return this.$v_3 },
    set_isDirty: function(value) {
        this.$v_3 = value;
        this.fireControlEvent("OnChange", Sys.EventArgs.Empty);
        return value
    },
    get_container: function() { return this },
    $8_3: null,
    get_clientCache: function() { return this.$8_3 },
    set_clientCache: function(value) {
        this.$8_3 = value;
        return value
    },
    $o_3: null,
    get_columns: function() {
        if (IsNull(this.$o_3)) this.$o_3 = this.get_element().getAttribute("columns");
        return this.$o_3
    },
    set_columns: function(value) {
        this.$o_3 = value;
        return value
    },
    $1F_3: null,
    get_conditionId: function() { return this.$1F_3 },
    set_conditionId: function(value) {
        this.$1F_3 = value;
        return value
    },
    $10_3: null,
    get_primaryEntityCode: function() {
        if (IsNull(this.$10_3)) this.$10_3 = this.get_element().getAttribute("primaryentitycode");
        return this.$10_3
    },
    set_primaryEntityCode: function(value) {
        this.$10_3 = value;
        return value
    },
    $12_3: null,
    get_secondaryEntityCode: function() {
        if (IsNull(this.$12_3)) this.$12_3 = this.get_element().getAttribute("secondaryentitycode");
        return this.$12_3
    },
    set_secondaryEntityCode: function(value) {
        this.$12_3 = value;
        return value
    },
    $f_3: false,
    $K_3: function($p0) { return this.get_generateDynamicId() ? $p0 + "_" + this.get_id() : $p0 },
    get_headerVisible: function() {
        if (IsNull(this.$f_3))
            this.$f_3 = XUI.Html.GetComputedStyle($get(this.$K_3("cnd_header")), "display").toLowerCase() === "none"
                ? false
                : true;
        return this.$f_3
    },
    set_headerVisible: function(value) {
        this.$f_3 = value;
        if (this.$f_3) $get(this.$K_3("cnd_header")).style.display = "";
        else $get(this.$K_3("cnd_header")).style.display = "none";
        return value
    },
    $16_3: false,
    get_entityListVisible: function() { return this.$16_3 },
    set_entityListVisible: function(value) {
        this.$16_3 = value;
        return value
    },
    $1C_3: false,
    get_relatedEntitiesVisible: function() { return this.$1C_3 },
    set_relatedEntitiesVisible: function(value) {
        this.$1C_3 = value;
        return value
    },
    $13_3: false,
    get_simpleMode: function() {
        if (IsNull(this.$13_3)) this.$13_3 = this.get_element().getAttribute("simplemode");
        return this.$13_3
    },
    set_simpleMode: function(value) {
        this.$13_3 = value;
        return value
    },
    $1L_3: 0,
    get_modesEnum: function() { return this.$1L_3 },
    set_modesEnum: function(value) {
        this.$1L_3 = value;
        return value
    },
    $h_3: 0,
    get_columnWidthInPixels: function() {
        if (IsNull(this.$h_3) || !this.$h_3) this.$h_3 = this.get_element().getAttribute("columnwidthinpixels");
        return this.$h_3
    },
    set_columnWidthInPixels: function(value) {
        this.$h_3 = value;
        return value
    },
    $1B_3: false,
    get_readOnlyMode: function() {
        this.$1B_3 = this.get_element().getAttribute("readonlymode") === "1" ? true : false;
        return this.$1B_3
    },
    set_readOnlyMode: function(value) {
        this.get_element().setAttribute("readonlymode", value ? "1" : "0");
        this.$1B_3 = value;
        return value
    },
    $r_3: null,
    get_expressionType: function() { return this.$r_3 },
    set_expressionType: function(value) {
        this.$r_3 = value;
        return value
    },
    $g_3: null,
    $y_3: null,
    $18_3: null,
    $1N_3: null,
    $1O_3: null,
    $1P_3: null,
    $1M_3: null,
    get_notifyConditionsChanged: function() { return this.$g_3 },
    set_notifyConditionsChanged: function(value) {
        this.$g_3 = value;
        return value
    },
    get_getUserDefinedList: function() {
        if (IsNull(this.$y_3)) this.$y_3 = this.get_element().getAttribute("getuserdefinedlist");
        return this.$y_3
    },
    set_getUserDefinedList: function(value) {
        this.$y_3 = value;
        return value
    },
    get_getUserDefinedXml: function() { return this.$18_3 },
    set_getUserDefinedXml: function(value) {
        this.$18_3 = value;
        return value
    },
    get_onPopulateAttributeList: function() { return this.$1N_3 },
    set_onPopulateAttributeList: function(value) {
        this.$1N_3 = value;
        return value
    },
    get_generateDynamicId: function() {
        if (!this.get_element().getAttribute("genDynamicId")) return false;
        return this.get_element().getAttribute("genDynamicId").toString() === "True"
    },
    get_onPopulateEntityList: function() { return this.$1O_3 },
    set_onPopulateEntityList: function(value) {
        this.$1O_3 = value;
        return value
    },
    get_onPopulateOperatorList: function() { return this.$1P_3 },
    set_onPopulateOperatorList: function(value) {
        this.$1P_3 = value;
        return value
    },
    get_onCreateValueControl: function() { return this.$1M_3 },
    set_onCreateValueControl: function(value) {
        this.$1M_3 = value;
        return value
    },
    OnPopulateFieldListForWorkflow: function(conditionEntity) {
        var $v_0 = {};
        $v_0["entityName"] = conditionEntity["sEntityName"];
        var $v_1 = this.$8_3.ExecuteCommand("GetAdditionalFieldListForCondition", "Workflow", $v_0, null, null, null);
        if (!IsNull($v_1)) conditionEntity["sCustomFields"] = $v_1
    },
    Clear: function() {
        if (!IsNull(this.$d_3) &&
            this.$d_3.children.length > 0 &&
            (!this.$v_3 || confirm(window.LOCID_AF_SEARCHMODIFIED_MSG))) {
            this.$1V_3();
            this.set_isDirty(true);
            this.$H_3.set_xml("<and></and>");
            var $v_0 = this.$g_3;
            !IsNull($v_0) && "function" === typeof $v_0 && $v_0(null)
        }
    },
    Group: function(op) {
        var $v_0 = [], $v_1 = false, $v_2 = 0, $v_3;
        $v_0.push(this.$H_3.get_element());
        while ($v_0.length > 0) {
            var $v_4 = $v_0.pop();
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_4.tagName, "Crm:ConditionGroup")) {
                $v_3 = $find($v_4.id).Group(op);
                $v_2 += $v_3;
                $v_1 = $v_1 || $v_3 === 1
            }
            var $v_5 = $find($v_4.id);
            if (IsNull($v_5) || !Mscrm.Condition.isImplementsContainerControl($v_5)) continue;
            var $v_6 = $v_5.get_Children();
            if (IsNull($v_6) || !$v_6.length) continue;
            var $v_7 = $v_6.length;
            while ($v_7 > 0) {
                $v_7--;
                $v_0.push($v_6[$v_7])
            }
        }
        ($v_1 || !$v_2) && alert(window.LOCID_AF_ERRORGROUPING_MSG);
        this.set_isDirty(true)
    },
    $1V_3: function() {
        this.$d_3 = $get(this.$K_3("cnd_spnDetailed"));
        if (!IsNull(XUI.Html.DomUtils.GetFirstChild(this.$d_3))) {
            Mscrm.ConditionCommon.DisposeDirectChilds(this.$d_3);
            this.$d_3.innerHTML = ""
        }
        var $v_0 = window.document.createElement("Crm:ConditionControl");
        $v_0.id = this.$K_3("E");
        this.$d_3.appendChild($v_0);
        var $v_1 = {};
        $v_1["conditionParentControl"] = this;
        $v_1["conditionContainer"] = this.get_container();
        this.$H_3 = $create(Mscrm.ConditionControl, $v_1, null, null, $v_0);
        this.$H_3.get_element().style.height = "auto";
        this.$H_3.get_element().className = "ms-crm-Condition-Control"
    },
    GetColumnArray: function() {
        if (!IsNull(this.get_columns())) {
            var $v_0 = this.get_columns().split(";");
            return $v_0
        }
        return null
    },
    GetColumnData: function(column) { return $get(column) },
    $1h_3: function() {
        this.$1V_3();
        !IsNull($get(this.$K_3("Xml")).getAttribute("xml")) &&
            this.$H_3.set_xml($get(this.$K_3("Xml")).getAttribute("xml"))
    },
    ParseXml: function() {
        var $v_0 = this.GetConditionGroup().ParseXml();
        if ($v_0 && this.$r_3 === "timeoutonly") {
            var $v_1 = this.GetXml();
            if (isNullOrEmptyString($v_1)) {
                alert(CrmEncodeDecode.CrmHtmlEncode(String
                    .format(window.LOCID_AF_VALUEMISSINGFOR_MSG, window.LOCID_WF_EXPRESSION_TIMEOUT)));
                $v_0 = false
            }
        }
        return $v_0
    },
    GetConditionGroup: function() {
        if (!IsNull(this.$H_3) &&
            !IsNull(this.$H_3.get_element()) &&
            !IsNull(XUI.Html.DomUtils.GetFirstChild(this.$H_3.get_element()))) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$H_3.get_element()));
            return $find($v_0.id)
        }
        return null
    },
    GetXml: function() {
        if (!IsNull(this.$H_3) &&
            !IsNull(this.$H_3.get_element()) &&
            !IsNull(XUI.Html.DomUtils.GetFirstChild(this.$H_3.get_element()))) return this.GetConditionGroup().GetXml();
        return null
    },
    LoadXml: function(xml) {
        $get(this.$K_3("Xml")).setAttribute("xml", xml);
        this.$1h_3()
    },
    $1j_3: function() {
        var $v_0 = $get(this.$K_3("lookup")),
            $v_1 = $get(this.$K_3("date")),
            $v_2 = $get(this.$K_3("txt")),
            $v_3 = $get(this.$K_3("num")),
            $v_4 = $get(this.$K_3("picklist")),
            $v_5 = $get(this.$K_3("datetime"));
        this.$8_3.PutElement("ValueControl", "lookup", $v_0.removeChild(XUI.Html.DomUtils.GetFirstChild($v_0)));
        this.$8_3.PutElement("ValueControl", "date", $v_1.removeChild(XUI.Html.DomUtils.GetFirstChild($v_1)));
        this.$8_3.PutElement("ValueControl", "string", $v_2.removeChild(XUI.Html.DomUtils.GetFirstChild($v_2)));
        this.$8_3.PutElement("ValueControl", "number", $v_3.removeChild(XUI.Html.DomUtils.GetFirstChild($v_3)));
        this.$8_3.PutElement("ValueControl", "picklist", $v_4.removeChild(XUI.Html.DomUtils.GetFirstChild($v_4)));
        this.$8_3.PutElement("ValueControl", "datetime", $v_5.removeChild(XUI.Html.DomUtils.GetFirstChild($v_5)))
    },
    LoadDynamicValues: function(valueControl, attribute) {
        try {
            LoadDynamicValuesForAttribute(valueControl, attribute)
        } catch ($v_0) {
            if ($v_0.message.indexOf("LoadDynamicValuesForAttribute") < 0 || $v_0.toString() !== "TypeError") throw $v_0
        }
    },
    $21_3: function() {
        try {
            _isConditionMode = true
        } catch ($$e_0) {
        }
    },
    initialize: function() {
        this.set_isDirty(false);
        IsNull(this.$f_3) && this.set_headerVisible(false);
        this.$16_3 = false;
        this.$1C_3 = false;
        ConfigureToolbars(this.get_element());
        this.$8_3 = new CacheManager;
        this.$8_3.Initialize(true);
        if (IsNull(Mscrm.ConditionCommon.ControlsCache) || this.get_generateDynamicId()) {
            Mscrm.ConditionCommon.ControlsCache = [];
            this.$1j_3()
        }
        $get(this.$K_3("cnd_spnDetailed")).style.display = "block";
        this.$1h_3();
        this.$21_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$H_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$H_3);
            this.$H_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionAutoShow = function(element) { Mscrm.ConditionAutoShow.initializeBase(this, [element]) };
Mscrm.ConditionAutoShow.prototype = {
    $S_4: null,
    $p_4: null,
    get_conditionContainer: function() { return this.$S_4 },
    set_conditionContainer: function(value) {
        this.$S_4 = value;
        return value
    },
    get_conditionParentControl: function() {
        if (IsNull(this.$p_4)) this.$p_4 = this.get_parent();
        return this.$p_4
    },
    set_conditionParentControl: function(value) {
        this.$p_4 = value;
        return value
    },
    setContainerDirty: function(isDirty) { this.$S_4.set_isDirty(isDirty) },
    hideVisibleControl: function() { Mscrm.ConditionCommon.HideVisibleControl(this.$S_4) },
    setContainerVisibleControl: function() { this.$S_4.$U_3 = this },
    onKeyUpHandler: function(domEvent) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(domEvent.target.id), $v_1 = null;
        if (!IsNull($v_0)) $v_1 = $v_0.get_dataValue();
        else {
            var $v_2 = $find(domEvent.target.id);
            if (!IsNull($v_2)) $v_1 = $v_2.get_dataValue()
        }
        $v_1 !== this.get_originalValue() && this.$S_4.set_isDirty(true)
    },
    onClick: function(domEvent) {
        if (this.get_disabled()) return;
        if (this.$S_4.$U_3 !== this) {
            this.hideVisibleControl();
            this.$S_4.$U_3 = this
        }
        Mscrm.AutoShow.prototype.set_hideControl.call(this, false)
    }
};
Mscrm.ConditionCommon = function() {};
Mscrm.ConditionCommon.HideVisibleControl = function(condition) {
    if (!IsNull(condition.$U_3)) {
        condition.$U_3.ShowControl(false, false);
        condition.$U_3 = null
    }
};
Mscrm.ConditionCommon.DisposeDirectChilds = function(root) {
    !IsNull(root) &&
        XUI.Html.DomUtils.ForEachChild(root,
            function($p1_0) {
                !isNullOrEmptyString($p1_0.id) && Mscrm.ConditionCommon.DisposeAndDeleteElement($p1_0);
                return false
            })
};
Mscrm.ConditionCommon.DisposeAndDeleteControl = function(component) { component.dispose() };
Mscrm.ConditionCommon.DisposeAndDeleteElement = function(control) {
    var $v_0 = $find(control.id);
    !IsNull($v_0) && Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0);
    $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
    !IsNull($v_0) && Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0)
};
Mscrm.ConditionCommon.GetControlId = function(parentId, suffix) { return parentId + suffix };
Mscrm.ConditionCommon.GetPropertiesForChild = function(component) {
    var $v_0 = {};
    $v_0["conditionParentControl"] = component;
    $v_0["conditionContainer"] = component.get_conditionContainer();
    return $v_0
};
Mscrm.ConditionCommon.CheckControlByTagName = function(tagName, controlType) {
    tagName = tagName.toUpperCase();
    controlType = controlType.toUpperCase();
    if (tagName === controlType) return true;
    return controlType.length === tagName.length + 4 && controlType.endsWith(tagName)
};
Mscrm.ConditionCommon.IsConditionField = function(control) {
    var $v_0 = control;
    return !IsNull($v_0) &&
        Mscrm.ConditionCommon.CheckControlByTagName($v_0.get_element().nodeName, "Crm:ConditionField")
};
Mscrm.ConditionControl = function(element) {
    this.$D_3 = [];
    this.HideAffectedControls = this.hideAffectedControls;
    this.get_Children = this.get_children;
    this.ParseXml = this.parseXml;
    this.GetXml = this.getXml;
    this.GetControl = this.getControl;
    Mscrm.ConditionControl.initializeBase(this, [element])
};
Mscrm.ConditionControl.prototype = {
    $O_3: null,
    $1T_3: null,
    $M_3: false,
    $3_3: null,
    $F_3: null,
    $1_3: null,
    $X_3: null,
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_xml: function() { return this.$F_3 },
    set_xml: function(value) {
        this.$F_3 = value;
        if (!this.$M_3 || IsNull(this.$F_3)) return value;
        var $v_0 = this.GetFilterCtrl(0);
        $find($v_0.id).set_xml(this.$F_3);
        return value
    },
    get_children: function() { return this.GetChildren() },
    set_children: function(value) {
        this.$X_3 = value;
        return value
    },
    addEmptyControl: function() { this.AddNewConditionGroup(1) },
    GetFilterCtrl: function($p0) { return XUI.Html.DomUtils.GetChildElementAt(this.$O_3, $p0) },
    AddNewConditionGroup: function($p0, $p1) {
        var $v_0 = document.createElement("Crm:ConditionGroup");
        $v_0.setAttribute("Clause", "and");
        $v_0.id = this.get_element().id + "FGRP";
        $v_0.style.display = "block";
        var $v_1 = this.AddControl($v_0, $p0, $p1);
        if (!IsNull($v_1))
            return $create(Mscrm.ConditionGroup, Mscrm.Condition.getPropertiesForChild(this), null, null, $v_0);
        return null
    },
    FieldChanged: function(sender, args) {
        var $v_0 = null, $v_1 = XUI.Html.DomUtils.GetLastChild(this.$O_3);
        if (IsNull($v_1)) $v_0 = $find($v_1.id);
        if (IsNull($v_0)) {
            $v_0 = this.AddNewConditionGroup(1);
            $v_0.set_groupClause("and")
        }
        if ($v_0.$I_3 !== "and") {
            var $v_3 = this.AddNewConditionGroup(1);
            $v_3.set_groupClause("and");
            $v_0 = $find(this.$O_3.removeChild($v_0.get_element()).id);
            $v_3.AddControl($v_0.get_element(), 2, null, 0);
            $v_0 = $v_3
        }
        var $v_2 = $v_0.AddNewConditionField(1, null);
        $v_2.SetFocus();
        this.$1_3.set_isDirty(true)
    },
    GetNumControls: function() { return this.$M_3 ? this.$O_3.children.length : this.$D_3.length },
    AddUngroupedField: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1);
        if (!IsNull($p1) && !IsNull($v_0)) {
            var $v_3 = $find($v_0.id);
            if (!IsNull($v_3) && $v_3.$I_3 === "and") return $v_3.AddControl($p0, 1, null)
        }
        var $v_1 = XUI.Html.DomUtils.GetNextSibling($p1);
        if (!IsNull($p1) && !IsNull($v_1)) {
            var $v_4 = $find($v_1.id);
            !IsNull($v_4) && $v_4.$I_3 === "and" && $v_4.AddControl($p0, 2, null)
        }
        var $v_2 = this.AddNewConditionGroup(3, $p1);
        $v_2.set_groupClause("and");
        return $v_2.AddControl($p0, 1, null)
    },
    AddControl: function(control, where, whichControl, pos, ungrouping) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_conditionParentControl(this);
            $v_0.set_conditionContainer(this.$1_3)
        }
        if (this.$M_3) {
            var $v_1 = this.$O_3;
            if (Mscrm.ConditionCommon.CheckControlByTagName(control
                    .tagName,
                    "Crm:ConditionField") &&
                ungrouping) return this.AddUngroupedField(control, whichControl);
            if (IsNull(pos)) {
                if ((where === 3 || where === 4) && (!IsNull(whichControl) || whichControl.parentNode !== $v_1)
                ) return null;
                $v_1.style.display = "block";
                switch (where) {
                case 2:
                    if ($v_1.hasChildNodes()) $v_1.insertBefore(control, $v_1.children[0]);
                    else $v_1.appendChild(control);
                    break;
                case 3:
                    var $v_2 = false, $v_3 = $v_1.children.length - 2;
                    while ($v_3 >= 0) {
                        if ($v_1.children[$v_3] === whichControl) {
                            $v_1.insertBefore(control, $v_1.children[$v_3 + 1]);
                            $v_2 = true;
                            break
                        }
                        $v_3--
                    }
                    !$v_2 && $v_1.appendChild(control);
                    break;
                case 4:
                    $v_3 = $v_1.children.length - 1;
                    while ($v_3 >= 0) {
                        if ($v_1.children[$v_3] === whichControl) {
                            $v_1.insertBefore(control, $v_1.children[$v_3]);
                            break
                        }
                        $v_3--
                    }
                    break;
                case 1:
                default:
                    $v_1.appendChild(control);
                    break
                }
            } else {
                if (pos >= $v_1.children.length || pos < 0) return null;
                $v_1.insertBefore(control, $v_1.children[pos])
            }
        } else {
            if (where !== 1) return null;
            this.$D_3[this.$D_3.length] = control
        }
        return control
    },
    DeleteControl: function(control, detachAjaxControl) {
        var $v_0 = this.$O_3;
        $v_0.removeChild(control);
        if (!$v_0.children.length) $v_0.style.display = "none";
        this.$1_3.set_isDirty(true)
    },
    GetChildren: function() {
        var $v_0 = [], $v_1 = 0, $v_2 = 0;
        if (!IsNull(this.$O_3) && !IsNull(this.$O_3.children) && this.$O_3.children.length > 0) {
            $v_1 = this.$O_3.children.length;
            while ($v_2 < $v_1) {
                $v_0[$v_0.length] = this.GetFilterCtrl($v_2);
                $v_2++
            }
        }
        return $v_0
    },
    hideAffectedControls: function(index) { this.getControl(index).HideAffectedControls(index) },
    parseXml: function() {
        for (var $v_0 = this
                     .GetNumControls(),
            $v_1 = 0;
            $v_1 < $v_0;
            ++$v_1) if (!this.getControl($v_1).ParseXml()) return false;
        return true
    },
    getXml: function() {
        for (var $v_0 = this.GetNumControls(), $v_1 = "", $v_2 = 0; $v_2 < $v_0; ++$v_2) {
            var $v_3 = this.getControl($v_2).GetXml();
            if (!IsNull($v_3)) $v_1 += $v_3;
            $v_2++
        }
        return $v_1
    },
    getControl: function(index) {
        var $v_0 = this.$M_3 ? this.$X_3[index] : this.$D_3[index];
        return IsNull($v_0) ? null : $find($v_0.id)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element()
            .innerHTML =
            "<div class='ms-crm-AdvFind-Filter' style='display:none'></div><div class='ms-crm-AdvFind-EmptyField'><span class='ms-crm-AdvFind-EmptyField' style='visibility:hidden'></span></div>";
        this.$O_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        this.$1T_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1);
        this.$M_3 = true;
        this.addEmptyControl();
        this.set_xml(this.$F_3);
        this.$F_3 = null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionEntityList = function(element) {
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    Mscrm.ConditionEntityList.initializeBase(this, [element])
};
Mscrm.ConditionEntityList.prototype = {
    $A_3: false,
    $0_3: null,
    $2_3: null,
    get_dataValue: function() { return this.$2_3 },
    set_dataValue: function(value) {
        this.$2_3 = value;
        if (this.$A_3) {
            this.$0_3.set_value(value);
            if (!IsNull(value)) {
                !IsNull(this.$E_3) && this.$E_3.set_entity(this.$2_3);
                !IsNull(this.$9_3) && this.$9_3.set_entity(this.$2_3)
            }
        }
        return value
    },
    $E_3: null,
    get_dependentAttribute: function() { return this.$E_3 },
    set_dependentAttribute: function(value) {
        this.$E_3 = value;
        return value
    },
    $9_3: null,
    get_dependentValue: function() { return this.$9_3 },
    set_dependentValue: function(value) {
        this.$9_3 = value;
        return value
    },
    $3_3: null,
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    $6_3: null,
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    $1_3: null,
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    $G_3: 0,
    get_width: function() { return this.$G_3 },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    getSelectList: function() { return this.$0_3.get_innerControl() },
    render: function() {
        if (IsNull(this.$0_3)) return;
        var $v_0 = null, $v_1 = this.$1_3.get_getUserDefinedList();
        if (!IsNull($v_1) && "function" === typeof $v_1) {
            var $v_2 = {};
            $v_2["ID"] = this.$6_3.id;
            $v_2["Element"] = this.get_element();
            $v_0 = $v_1($v_2)
        }
        if (!IsNull($v_0))
            this.$0_3.setInnerControlHtml("<select class='ms-crm-SelectBox'>" +
                CrmEncodeDecode.CrmHtmlEncode($v_0) +
                "</select>");
        else this.$0_3.setInnerControlHtml("<select class='ms-crm-SelectBox'>" + this.$1S_3() + "</select>")
    },
    $1S_3: function() {
        var $v_0 = "", $v_1 = "", $v_2 = 0, $v_3 = "", $v_4 = "";
        while (true) {
            var $v_5 = "id" + $v_2,
                $v_6 = "name" + $v_2,
                $v_7 = this.$6_3.attributes.getNamedItem($v_5),
                $v_8 = this.$6_3.attributes.getNamedItem($v_6);
            if (IsNull($v_7) || IsNull($v_8)) break;
            if (!$v_2 && $v_7.value.substr(0, 1) !== "#" && $v_7.value.indexOf(".") < 0) {
                $v_3 = $v_8.value;
                $v_4 = String.format("<OPTGROUP id='id{0}' label='{1}'><OPTION VALUE='{2}'>{3}</OPTION></OPTGROUP>",
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_PRIMARY_ENTITY_GROUP),
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value),
                    CrmEncodeDecode.CrmHtmlEncode($v_8.value))
            } else if ($v_7.value
                .substr(0, 1) ===
                "#" ||
                $v_7.value
                .indexOf(".") !==
                $v_7.value.lastIndexOf("."))
                $v_1 += "<OPTION VALUE='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value) +
                    "'>" +
                    CrmEncodeDecode.CrmHtmlEncode($v_8.value) +
                    "</OPTION>";
            else
                $v_0 += "<OPTION VALUE='" +
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_7.value) +
                    "'>" +
                    CrmEncodeDecode.CrmHtmlEncode($v_8.value) +
                    "</OPTION>";
            $v_2++
        }
        if (!isNullOrEmptyString($v_3))
            if (!isNullOrEmptyString($v_0)) {
                var $v_9 = String.format("<OPTGROUP id='idRelatedTo{0}' label='{1}' Sort='Ascending'>{2}</OPTGROUP>",
                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                    CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_RELATED_ENTITY_GROUP),
                    $v_0);
                $v_0 = $v_4 + $v_9
            } else $v_0 = $v_4;
        else if (!isNullOrEmptyString($v_0))
            $v_0 = String.format("<OPTGROUP id='idRelatedTo{0}' label='{1}' Sort='Ascending'>{2}</OPTGROUP>",
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_RELATED_ENTITY_GROUP),
                $v_0);
        if (!isNullOrEmptyString($v_1))
            $v_0 += String.format("<OPTGROUP id='idLocalValues{0}' label='{1}' Sort='Ascending'>{2}</OPTGROUP>",
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_WF_LOCAL_VALUES_GROUP),
                $v_1);
        return $v_0
    },
    ParseXml: function() { return true },
    GetXml: function() {
        if (IsNull(this.$2_3)) return null;
        else
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$2_3) +
                '" />'
    },
    $c_3: function($p0, $p1) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.$0_3.get_innerControl().id);
        if ($v_0.get_selectedIndex() === -1) return;
        if (!IsNull(this.$3_3) && !this.$3_3.get_isGrouped() && IfTimeoutExpressionPresented(this.$3_3.get_element())) {
            $v_0.set_selectedIndex(-1);
            return
        }
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if ($v_1 !== this.$2_3 && !IsNull(this.$E_3)) {
            this.$E_3.set_entity(this.$2_3);
            this.$E_3.set_dataValue(null);
            $get(this.$E_3.get_id()).style.visibility = "visible"
        }
        if ($v_1 !== this.$2_3 && !IsNull(this.$9_3)) {
            this.$9_3.set_entity(this.$2_3);
            this.$9_3.set_attribute(null)
        }
        this.$V_3(false)
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    add_change: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "ENTITY")));
        this.$A_3 = true;
        var $v_0 = this.get_element().id + "_select", $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1["value"] = this.$2_3;
        $v_1["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1["width"] = this.get_width();
        var $v_2 = {};
        $v_2["onChange"] = this.$$d_$c_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_1,
            $v_2,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml("<select id='" +
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) +
            "' class='ms-crm-SelectBox'>" +
            this.$1S_3() +
            "</select>");
        this.$1_3.get_readOnlyMode() && this.$0_3.set_disabled(true);
        window.setTimeout(this.$$d_$14_3, 1)
    },
    $14_3: function() {
        if (this.get_isDisposed()) return;
        this.set_dataValue(this.$2_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionField = function(element) {
    this.$$d_OnMouseLeave = Function.createDelegate(this, this.OnMouseLeave);
    this.$$d_OnMouseEnter = Function.createDelegate(this, this.OnMouseEnter);
    this.$$d_OnMenuSpanClick = Function.createDelegate(this, this.OnMenuSpanClick);
    this.$$d_onMnuKeyUp = Function.createDelegate(this, this.onMnuKeyUp);
    this.$$d_HandleClick = Function.createDelegate(this, this.HandleClick);
    this.$$d_$1X_3 = Function.createDelegate(this, this.$1X_3);
    this.$$d_ToggleSelected = Function.createDelegate(this, this.ToggleSelected);
    this.$D_3 = [];
    this.get_Children = this.get_children;
    Mscrm.ConditionField.initializeBase(this, [element])
};
Mscrm.ConditionField.prototype = {
    $19_3: false,
    $1A_3: false,
    $1U_3: false,
    $k_3: false,
    $J_3: null,
    $7_3: null,
    $W_3: null,
    $z_3: null,
    $s_3: null,
    $e_3: null,
    $u_3: null,
    $i_3: null,
    $Y_3: null,
    $5_3: null,
    $Z_3: null,
    $R_3: null,
    add_onChange: function(value) { this.get_events().addHandler("OnFieldChangeHandler", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnFieldChangeHandler", value) },
    $1_3: null,
    $F_3: null,
    $3_3: null,
    $Q_3: false,
    $a_3: false,
    $X_3: null,
    $w_3: false,
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_xml: function() { return this.$F_3 },
    set_xml: function(value) {
        this.$F_3 = value;
        if (this.$k_3) {
            this.ShowXml(this.$F_3);
            this.$F_3 = null
        }
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    $P_3: false,
    SetFocus: function() {
        this.$P_3 = true;
        if (this.$k_3) this.$P_3 = false
    },
    get_defined: function() { return this.$Q_3 },
    set_defined: function(value) {
        this.$Q_3 = value;
        return value
    },
    get_firstFieldDefined: function() { return this.$a_3 },
    set_firstFieldDefined: function(value) {
        this.$a_3 = value;
        return value
    },
    get_children: function() { return this.$X_3 },
    set_children: function(value) {
        this.$X_3 = value;
        return value
    },
    get_selected: function() { return this.GetSelected() },
    set_selected: function(value) {
        this.SetSelected(value);
        return value
    },
    get_isGrouped: function() { return !IsNull(this.$3_3) && this.$3_3.$t_3 },
    GetEntityAttribute: function($p0) {
        var $v_0 = this.$1_3.get_primaryEntityCode(), $v_1 = this.$1_3.get_secondaryEntityCode();
        if ($p0 === "Attribute")
            if (!this.$19_3 && !IsNull($v_0)) {
                this.$19_3 = true;
                return $v_0
            } else if (this.$19_3 && !IsNull($v_1)) return $v_1;
            else return null;
        else if ($p0 === "Value")
            if (!this.$1A_3 && !IsNull($v_0)) {
                this.$1A_3 = true;
                return $v_0
            } else if (this.$1A_3 && !IsNull($v_1)) return $v_1;
            else return null;
        else return null
    },
    GetColumnWidth: function() { return "100%" },
    AppendControl: function($p0) {
        if (!IsNull(this.$1_3.get_columnWidthInPixels()))
            $p0.style.width = this.$1_3.get_columnWidthInPixels().toString() + "px";
        else $p0.style.width = this.GetColumnWidth();
        var $v_0 = this.get_id() + "field" + this.GetNumControls(), $v_1 = $get($v_0, this.get_element());
        $v_1.appendChild($p0);
        this.$D_3[this.$D_3.length] = $p0
    },
    onMnuKeyUp: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.ShowPopupMenu($p0)
    },
    OnMenuSpanClick: function($p0) { !$p0.ctrlKey && this.ShowPopupMenu($p0) },
    OnMouseEnter: function($p0) { if (this.$Q_3) this.$J_3.className = "ms-crm-AdvFind-SelectedFieldMenu" },
    OnMouseLeave: function($p0) { if (this.$Q_3) this.$J_3.className = "ms-crm-AdvFind-FieldMenu" },
    GetMenuImg: function() {
        return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_element())))
    },
    GetOuterDiv: function() { return XUI.Html.DomUtils.GetFirstChild(this.get_element()) },
    GetSelected: function() { return this.$w_3 },
    SetSelected: function($p0) {
        this.$w_3 = $p0;
        if (this.$k_3) {
            var $v_0 = this.GetOuterDiv();
            $v_0.style.backgroundColor = $p0 ? "#a7cdf0" : "#F9F9F9"
        }
    },
    ToggleSelected: function($p0) {
        !IsNull(this.$5_3) && this.$5_3.hide();
        this.set_selected(!this.$w_3)
    },
    $1X_3: function($p0) { this.$1W_3(null) },
    $1W_3: function($p0) { confirm(window.LOCID_AF_DELETEFIELD) && this.$3_3.DeleteControl(this.get_element(), true) },
    HandleClick: function($p0) {
        if ($p0.ctrlKey) {
            this.ToggleSelected(null);
            $p0.stopPropagation()
        }
    },
    ShowPopupMenu: function($p0) {
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        if (IsNull(this.$5_3)) {
            var $v_0 = document.createElement("DIV");
            $v_0.setAttribute("id", "menuContainer");
            window.document.body.appendChild($v_0);
            this.$5_3 = Mscrm.Menu.createMenu($v_0);
            this.$5_3.set_menuId(this.$J_3.id);
            this.$5_3.set_stylePrefix("POPUP");
            this.$5_3.set_width(170);
            this.$R_3 = Mscrm.MenuItem.createMenuItem("");
            this.$R_3.set_actionCallback(this.$$d_ToggleSelected);
            this.$5_3.addItem(this.$R_3);
            this.$Z_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$Z_3.set_actionCallback(this.$$d_$1X_3);
            this.$5_3.addItem(this.$Z_3)
        }
        this.$5_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$5_3.set_left($p0.clientX - $p0.offsetX);
        this.$R_3.set_title(this.$w_3 ? window.LOCID_AF_UNSELECTROW : window.LOCID_AF_SELECTROW);
        this.$5_3.show()
    },
    GetStartElement: function() { return "<condition>" },
    GetEndElement: function() { return "</condition>" },
    ParseXml: function() {
        if (!this.$a_3) return true;
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = this.GetControl($v_1);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.get_element().tagName, "Crm:OperatorList") &&
                $v_2.isUnary()) return true;
            if (!$v_2.ParseXml()) return false;
            $v_1++
        }
        return true
    },
    GetXml: function() {
        if (!this.$Q_3) return null;
        var $v_0 = this.GetNumControls(), $v_1 = 0, $v_2 = "";
        while ($v_1 < $v_0) {
            var $v_3 = this.GetDOMControl($v_1), $v_4 = $find($v_3.id).GetXml();
            if (!IsNull($v_4)) $v_2 += $v_4;
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:OperatorList") &&
                $find($v_3.id).isUnary()) {
                $v_1++;
                while ($v_1 < $v_0) {
                    var $v_5 = this.GetDOMControl($v_1);
                    if (Mscrm.ConditionCommon.CheckControlByTagName($v_5.tagName, "Crm:Hidden")) {
                        $v_4 = $find($v_5.id).GetXml();
                        if (!IsNull($v_4)) $v_2 += $v_4
                    } else if (this.$1_3
                        .get_id() ===
                        "dupRuleAppCondition")
                        if (this.IsSingleEntityRuleExists() && $v_1 === 3 ||
                            !this.IsSingleEntityRuleExists() && $v_1 === 4) $v_2 += $find($v_5.id).GetXml();
                    $v_1++
                }
                break
            }
            $v_1++
        }
        if ($v_2 === "") return null;
        else return this.GetStartElement() + $v_2 + this.GetEndElement()
    },
    SetXml: function($p0) {
        this.$F_3 = $p0;
        if (this.$k_3) {
            this.ShowXml($p0);
            this.$F_3 = null
        }
        return
    },
    ShowXml: function($p0) {
        if (IsNull($p0)) return;
        var $v_0 = this.$1_3.GetColumnArray();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.length, $v_2 = 0;
            while ($v_2 < $v_1 && !IsNull($v_0[$v_2])) {
                var $v_3 = this.$1_3.GetColumnData($v_0[$v_2].toString()), $v_4 = $v_3.getAttribute("type").toString();
                if ($v_4 !== "Predefined" &&
                    $v_4 !== "Entity" &&
                    $v_4 !== "Attribute" &&
                    $v_4 !== "Operator" &&
                    $v_4 !== "Value" &&
                    $v_4 !== "Freeform" &&
                    $v_4 !== "Hidden") {
                    $v_2++;
                    continue
                }
                var $v_5 = "./column[@id='" + $v_3.id + "']", $v_6 = XUI.Xml.SelectSingleNode($p0, $v_5, null);
                if (!$v_6) {
                    $v_2++;
                    continue
                }
                if (!IsNull($v_6.attributes.getNamedItem("dataslugs")) &&
                    $v_6.attributes.getNamedItem("dataslugs").nodeValue === "0") {
                    this.SetControlDataValueProperty($v_2, null);
                    var $v_7 = this.$D_3[$v_2], $v_8 = $find($v_7.id);
                    $v_8.$j_3 = "0";
                    $v_8.setDataSlugs($v_6.attributes.getNamedItem("value").nodeValue,
                        "0",
                        $v_6.attributes.getNamedItem("dataslugtext").nodeValue)
                } else this.SetControlDataValueProperty($v_2, $v_6.attributes.getNamedItem("value").nodeValue);
                $v_2++
            }
        }
        this.ShowChildControlsOnRetrieve()
    },
    DeleteControl: function(control, detachAjaxControl) {},
    FieldChanged: function(sender, args) {
        this.$J_3.style.visibility = "visible";
        this.$J_3.className = "ms-crm-AdvFind-FieldMenu";
        this.GetMenuImg().style.visibility = "visible";
        this.ShowChildControls();
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = this.GetDOMControl($v_1);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.tagName, "Crm:Hidden")) {
                $v_1++;
                continue
            }
            if (IsNull(this
                    .GetControlDataValue($v_2)) &&
                this.$1_3.get_id() === "dupRuleAppCondition")
                if (this
                    .IsSingleEntityRuleExists() &&
                    $v_1 === 3 ||
                    !this.IsSingleEntityRuleExists() && $v_1 === 4) break;
            if (IsNull(this.GetControlDataValue($v_2))) return;
            if (!this.$a_3) {
                this.$a_3 = true;
                this.RaiseFieldChangedEvent(sender, args)
            }
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_2.tagName, "Crm:OperatorList") &&
                $find($v_2.id).isUnary()) break;
            $v_1++
        }
        this.$Q_3 = true;
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        this.RaiseFieldChangedEvent(sender, args)
    },
    RaiseFieldChangedEvent: function($p0, $p1) { this.$3_3.FieldChanged($p0, $p1) },
    ShowChildControlsOnRetrieve: function() {
        this.$J_3.style.visibility = "visible";
        this.$J_3.className = "ms-crm-AdvFind-FieldMenu";
        this.GetMenuImg().style.visibility = "visible";
        this.$Q_3 = true;
        this.ShowChildControls()
    },
    GetNumControls: function() { return this.$D_3.length },
    GetDOMControl: function($p0) { return this.$D_3[$p0] },
    GetControl: function(index) {
        var $v_0 = this.$D_3[index];
        if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Freeform")) return $find($v_0.id);
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:OperatorList")) return $find($v_0.id);
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:AttributeList")) return $find($v_0.id);
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:EntityList")) return $find($v_0.id);
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Value")) return $find($v_0.id);
        else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Hidden")) return $find($v_0.id);
        return null
    },
    GetControlDataValue: function($p0) {
        if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, "Crm:Freeform")) return $find($p0.id).$2_3;
        else if (Mscrm.ConditionCommon
            .CheckControlByTagName($p0.tagName, "Crm:OperatorList")) return $find($p0.id).$2_3;
        else if (Mscrm.ConditionCommon
            .CheckControlByTagName($p0.tagName, "Crm:AttributeList")) return $find($p0.id).$2_3;
        else if (Mscrm.ConditionCommon
            .CheckControlByTagName($p0.tagName, "Crm:EntityList")) return $find($p0.id).get_dataValue();
        else if (Mscrm.ConditionCommon
            .CheckControlByTagName($p0.tagName, "Crm:Value")) return $find($p0.id).get_dataValue();
        else if (Mscrm.ConditionCommon.CheckControlByTagName($p0.tagName, "Crm:Hidden")) return $find($p0.id).$2_3;
        return null
    },
    SetControlDataValueProperty: function($p0, $p1) {
        var $v_0 = this.$D_3[$p0];
        if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Freeform")) {
            var $v_1 = $find($v_0.id);
            $v_1.set_dataValue($p1)
        } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:OperatorList")) {
            var $v_2 = $find($v_0.id);
            $v_2.set_dataValue($p1)
        } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:AttributeList")) {
            var $v_3 = $find($v_0.id);
            $v_3.set_dataValue($p1)
        } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:EntityList")) {
            var $v_4 = $find($v_0.id);
            $v_4.set_dataValue($p1)
        } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Value")) {
            var $v_5 = $find($v_0.id);
            $v_5.set_dataValue($p1)
        } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_0.tagName, "Crm:Hidden") && !IsNull($p1)) {
            var $v_6 = $find($v_0.id);
            $v_6.set_dataValue($p1)
        }
    },
    ShowChildControls: function() {
        if (!IsNull(this.get_element()) && this.get_element().id === "VALUE") return;
        var $v_0 = false, $v_1 = this.GetNumControls(), $v_2 = 0;
        while ($v_2 < $v_1) {
            if ($v_0 && this.$1_3.get_id() === "dupRuleAppCondition")
                if (this.IsSingleEntityRuleExists() && $v_2 !== 3 || !this.IsSingleEntityRuleExists() && $v_2 !== 4) {
                    $v_2++;
                    continue
                }
            var $v_3 = this.GetDOMControl($v_2);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:Hidden")) {
                $v_2++;
                continue
            }
            this.ShowChild($v_2);
            $v_2++;
            if (IsNull(this.GetControlDataValue($v_3))) {
                if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:Freeform") ||
                    Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:EntityList"))
                    if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:Freeform")) {
                        var $v_4 = $find($v_3.id);
                        $v_4.set_dataValue(null)
                    } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:EntityList")) {
                        var $v_5 = $find($v_3.id);
                        $v_5.render();
                        $v_5.set_dataValue(null)
                    }
                break
            }
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_3.tagName, "Crm:OperatorList")) {
                var $v_6 = $find($v_3.id);
                if ($v_6.isUnary()) {
                    $v_6.hideDependents();
                    if (this.$1_3.get_id() === "dupRuleAppCondition") $v_0 = true;
                    else return
                }
            }
        }
        while ($v_2 < $v_1 && !$v_0) {
            this.HideChild($v_2);
            $v_2++
        }
        if (this.$1_3.get_id() === "dupRuleAppCondition") {
            var $v_7 = this.GetDOMControl(0);
            if (!IsNull(this.GetControlDataValue($v_7)))
                if (this.IsSingleEntityRuleExists()) this.ShowChild(3);
                else this.ShowChild(4)
        }
    },
    ShowChild: function($p0) {
        var $v_0 = this.get_id() + "field" + $p0;
        $get($v_0, this.get_element()).style.visibility = "visible"
    },
    HideChild: function(controlIndex) {
        if (this.$1_3.get_id() === "dupRuleAppCondition")
            if (this.IsSingleEntityRuleExists() && controlIndex === 3 ||
                !this.IsSingleEntityRuleExists() && controlIndex === 4) return;
        var $v_0 = this.get_id() + "field" + controlIndex.toString();
        $get($v_0, this.get_element()).style.visibility = "hidden";
        var $v_1 = this.GetDOMControl(controlIndex);
        if (!Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, "Crm:Hidden"))
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, "Crm:Freeform")) {
                var $v_2 = $find($v_1.id);
                $v_2.set_dataValue(null)
            } else if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, "Crm:OperatorList")) {
                var $v_3 = $find($v_1.id);
                $v_3.set_dataValue(null)
            }
    },
    HideAffectedControls: function(index) {
        var $v_0 = this.GetNumControls();
        index++;
        while (index < $v_0) {
            var $v_1 = this.GetDOMControl(index);
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, "Crm:Hidden")) break;
            index++
        }
        if (index < $v_0)
            if (this.$1_3
                .get_id() ===
                "dupRuleAppCondition")
                !(this.IsSingleEntityRuleExists() && index === 3 || !this.IsSingleEntityRuleExists() && index === 4) &&
                    this.SetControlDataValueProperty(index, null);
            else this.SetControlDataValueProperty(index, null);
        if (this.$1_3.get_id() === "dupRuleAppCondition" &&
            index > 1 &&
            !(Mscrm.ConditionCommon.CheckControlByTagName(this.GetDOMControl(index - 1).tagName, "Crm:OperatorList") &&
                this.GetControl(index - 1).isUnary())) index++;
        else if (index === 1 || !(this.$1_3.get_id() === "dupRuleAppCondition")) index++;
        if (this.$1_3.get_id() === "dupRuleAppCondition")
            (this.IsSingleEntityRuleExists() && index === 7 || !this.IsSingleEntityRuleExists() && index === 8) &&
                this.HideChild(index - 3);
        while (index < $v_0) {
            this.HideChild(index);
            index++
        }
    },
    IsSingleEntityRuleExists: function() { return window._isSingleEntityRule },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$Q_3 = false;
        this.$a_3 = false;
        var $v_0 = this.get_id(),
            $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/advfind/button.gif")),
            $v_2 = document.createElement("div");
        $v_2.className = "cndConditionFieldNew";
        $v_2.innerHTML = String
            .format("<span tabindex=0 style='visibility:hidden' class='ms-crm-AdvFind-FieldMenu'><img alt='' src='{0}' class = 'ms-crm-View-icon ms-crm-ImageStrip-Dropdown_Arrow'/><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title=\"{1}\" class='atLink'></a></span><span class='ms-crm-AdvFind-FieldList' id='{2}field0' style='visibility:hidden'></span><span class='ms-crm-AdvFind-OperatorList' id='{2}field1' style='visibility:hidden'></span><span class='ms-crm-AdvFind-FieldList' id='{2}field2' style='visibility:hidden'></span><span class='ms-crm-AdvFind-FieldList' id='{2}field3' style='visibility:hidden'></span><span class='ms-crm-AdvFind-FieldList' id='{2}field4' style='visibility:hidden'></span><span class='ms-crm-AdvFind-HiddenFieldLabel' id='{2}field5' style='visibility:hidden'></span></div>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.source), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATCONDITION), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0));
        this.get_element().innerHTML = "";
        this.get_element().appendChild($v_2);
        $addHandler(this.get_element(), "click", this.$$d_HandleClick);
        this.$k_3 = true;
        var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        this.$J_3 = $v_3;
        this.$J_3.id = $v_0 + "FLDMNU";
        $addHandler(this.$J_3, "keyup", this.$$d_onMnuKeyUp);
        XUI.Html.DomUtils.GetLastChild(this.$J_3).id = "at" + $v_3.id;
        if (!this.$1_3.get_readOnlyMode()) {
            $addHandler(this.$J_3, "click", this.$$d_OnMenuSpanClick);
            $addHandler(this.$J_3, "mouseover", this.$$d_OnMouseEnter);
            $addHandler(this.$J_3, "mouseout", this.$$d_OnMouseLeave)
        }
        var $v_4 = this.$1_3.GetColumnArray();
        if (!IsNull($v_4)) {
            var $v_5 = $v_4.length, $v_6 = 0, $v_7 = null, $v_8 = null, $v_9 = null;
            while ($v_6 < $v_5 && !IsNull($v_4[$v_6])) {
                var $v_A = this.$1_3.GetColumnData($v_4[$v_6].toString()), $v_B = $v_A.getAttribute("type").toString();
                if ($v_B !== "Predefined" &&
                    $v_B !== "Entity" &&
                    $v_B !== "Attribute" &&
                    $v_B !== "Operator" &&
                    $v_B !== "Value" &&
                    $v_B !== "Freeform" &&
                    $v_B !== "Hidden") {
                    $v_6++;
                    continue
                }
                if ($v_B === "Hidden") {
                    this.$7_3 = window.document.createElement("Crm:Hidden");
                    this.$7_3.id = this.get_element().id + "HF";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_C = {};
                        $v_C["index"] = $v_6;
                        $v_C["conditionParentControl"] = this;
                        $v_C["conditionContainer"] = this.$1_3;
                        $v_C["columnData"] = $v_A;
                        this.$u_3 = $create(Mscrm.Hidden, $v_C, null, null, this.$7_3)
                    }
                }
                if ($v_B === "Freeform") {
                    this.$7_3 = window.document.createElement("Crm:Freeform");
                    if (IsNull(window.document
                        .getElementById(this.get_element().id + "FF"))) this.$7_3.id = this.get_element().id + "FF";
                    else this.$7_3.id = this.get_element().id + "FF1";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_D = {};
                        $v_D["index"] = $v_6;
                        $v_D["conditionParentControl"] = this;
                        $v_D["conditionContainer"] = this.$1_3;
                        $v_D["columnData"] = $v_A;
                        this.$s_3 = $create(Mscrm.Freeform, $v_D, null, null, this.$7_3)
                    }
                }
                if ($v_B === "Predefined") {
                    this.$7_3 = window.document.createElement("Crm:PredefinedList");
                    this.$7_3.id = this.get_element().id + "PDF";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_E = {};
                        $v_E["index"] = $v_6;
                        $v_E["conditionParentControl"] = this;
                        $v_E["conditionContainer"] = this.$1_3;
                        $v_E["columnData"] = $v_A;
                        this.$z_3 = $create(Mscrm.PredefinedList, $v_E, null, null, this.$7_3)
                    }
                }
                if ($v_B === "Entity") {
                    this.$7_3 = window.document.createElement("Crm:EntityList");
                    this.$7_3.id = this.get_element().id + "EF";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_F = {};
                        $v_F["index"] = $v_6;
                        $v_F["conditionParentControl"] = this;
                        $v_F["conditionContainer"] = this.$1_3;
                        $v_F["columnData"] = $v_A;
                        this.$i_3 = $create(Mscrm.ConditionEntityList, $v_F, null, null, this.$7_3);
                        $v_7 = this.$i_3
                    }
                }
                if ($v_B === "Attribute") {
                    this.$7_3 = window.document.createElement("Crm:AttributeList");
                    if (IsNull(window.document
                        .getElementById(this.get_element().id + "AF"))) this.$7_3.id = this.get_element().id + "AF";
                    else this.$7_3.id = this.get_element().id + "AF1";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_G = {};
                        $v_G["index"] = $v_6;
                        $v_G["conditionParentControl"] = this;
                        $v_G["conditionContainer"] = this.$1_3;
                        $v_G["columnData"] = $v_A;
                        if (!IsNull($v_7)) $v_G["entity"] = null;
                        else $v_G["entity"] = this.GetEntityAttribute($v_B);
                        this.$W_3 = $create(Mscrm.AttributeList, $v_G, null, null, this.$7_3);
                        if (!IsNull($v_7)) $v_7.$E_3 = this.$W_3;
                        else if (!IsNull($v_8)) $v_8.$E_3 = this.$W_3;
                        $v_8 = this.$W_3
                    }
                }
                if ($v_B === "Operator") {
                    this.$7_3 = window.document.createElement("Crm:OperatorList");
                    this.$7_3.id = this.get_element().id + "OPF";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_H = {};
                        $v_H["attribute"] = null;
                        $v_H["index"] = $v_6;
                        $v_H["conditionParentControl"] = this;
                        $v_H["conditionContainer"] = this.$1_3;
                        $v_H["columnData"] = $v_A;
                        this.$e_3 = $create(Mscrm.ConditionOperatorList, $v_H, null, null, this.$7_3);
                        $v_8.$N_3 = this.$e_3
                    }
                }
                if ($v_B === "Value") {
                    this.$7_3 = window.document.createElement("Crm:Value");
                    this.$7_3.id = this.get_element().id + "VF";
                    this.AppendControl(this.$7_3);
                    if (!IsNull(this.$7_3)) {
                        var $v_I = {};
                        $v_I["attribute"] = null;
                        $v_I["operator"] = null;
                        $v_I["index"] = $v_6;
                        $v_I["conditionParentControl"] = this;
                        $v_I["conditionContainer"] = this.$1_3;
                        $v_I["columnData"] = $v_A;
                        if (!IsNull($v_7)) $v_I["entity"] = null;
                        else $v_I["entity"] = this.GetEntityAttribute($v_B);
                        this.$Y_3 = $create(Mscrm.ConditionValue, $v_I, null, null, this.$7_3);
                        $v_8.$9_3 = this.$Y_3;
                        $v_9.$9_3 = this.$Y_3;
                        if (!IsNull($v_7)) $v_7.$9_3 = this.$Y_3
                    }
                }
                !IsNull($v_9) && $v_9.addDependent($v_6);
                if ($v_B === "Operator") $v_9 = this.$e_3;
                $v_6++
            }
        }
        this.SetXml(this.$F_3);
        this.ShowChildControls();
        this.$1U_3 && this.SetFocus()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_HandleClick);
        if (!IsNull(this.$W_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$W_3);
            this.$W_3 = null
        }
        if (!IsNull(this.$e_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$e_3);
            this.$e_3 = null
        }
        if (!IsNull(this.$Y_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$Y_3);
            this.$Y_3 = null
        }
        if (!IsNull(this.$u_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$u_3);
            this.$u_3 = null
        }
        if (!IsNull(this.$s_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$s_3);
            this.$s_3 = null
        }
        if (!IsNull(this.$z_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$z_3);
            this.$z_3 = null
        }
        if (!IsNull(this.$i_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$i_3);
            this.$i_3 = null
        }
        if (!IsNull(this.$5_3)) {
            this.$5_3.dispose();
            this.$5_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionGroup = function(element) {
    this.$$d_onMnuKeyUp = Function.createDelegate(this, this.onMnuKeyUp);
    this.$$d_OnMouseOut = Function.createDelegate(this, this.OnMouseOut);
    this.$$d_OnMouseOver = Function.createDelegate(this, this.OnMouseOver);
    this.$$d_$1z_3 = Function.createDelegate(this, this.$1z_3);
    this.$$d_handleClick = Function.createDelegate(this, this.handleClick);
    this.$$d_$1X_3 = Function.createDelegate(this, this.$1X_3);
    this.$$d_AddClause = Function.createDelegate(this, this.AddClause);
    this.$$d_ChangeGroupClause = Function.createDelegate(this, this.ChangeGroupClause);
    this.$$d_Ungroup = Function.createDelegate(this, this.Ungroup);
    this.$$d_ToggleSelected = Function.createDelegate(this, this.ToggleSelected);
    this.$D_3 = [];
    this.get_Children = this.get_children;
    Mscrm.ConditionGroup.initializeBase(this, [element]);
    $addHandler(element, "click", this.$$d_handleClick)
};
Mscrm.ConditionGroup.prototype = {
    $T_3: null,
    $1K_3: null,
    $B_3: null,
    $17_3: null,
    $1J_3: null,
    $5_3: null,
    $R_3: null,
    $Z_3: null,
    $1D_3: null,
    $n_3: null,
    $15_3: null,
    $m_3: null,
    $3_3: null,
    $1_3: null,
    $M_3: false,
    $l_3: false,
    $t_3: false,
    $I_3: "and",
    $F_3: null,
    $X_3: null,
    get_groupClause: function() { return this.$I_3 },
    set_groupClause: function(value) {
        this.$I_3 = value;
        if (this.$M_3) {
            XUI.Html.SetText(this.$1K_3, this.$I_3 === "and" ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR);
            this.ShowGroupBox(!this.IsImplicitANDGroup())
        }
        return value
    },
    get_selected: function() { return this.$l_3 },
    set_selected: function(value) {
        this.$l_3 = value;
        this.$17_3.className = this.$l_3 ? "ms-crm-AdvFind-SelectedGroup" : "ms-crm-AdvFind-GroupName";
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_xml: function() { return this.$F_3 },
    set_xml: function(value) {
        this.$F_3 = value;
        this.$I_3 = "and";
        this.set_groupClause(this.$I_3);
        if (this.$M_3) {
            this.ClearControl();
            this.ShowXml(this.$F_3);
            this.AddNewConditionField(1, null)
        }
        return value
    },
    get_children: function() { return this.GetChildren() },
    set_children: function(value) {
        this.$X_3 = value;
        return value
    },
    get_groupControls: function() { return this.$B_3 },
    onMnuKeyUp: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.ShowPopupMenu($p0)
    },
    $1z_3: function($p0) { !$p0.ctrlKey && this.ShowPopupMenu($p0) },
    OnMouseOver: function($p0) { this.$T_3.className = "ms-crm-AdvFind-SelectedGroupMenu" },
    OnMouseOut: function($p0) { this.$T_3.className = "ms-crm-AdvFind-GroupMenu" },
    GetNumControls: function() { return this.$M_3 ? this.$B_3.children.length : this.$D_3.length },
    IsImplicitANDGroup: function() {
        return Mscrm.ConditionCommon.CheckControlByTagName(this.$3_3.get_element().tagName, "Crm:ConditionControl") &&
            this.$I_3 === "and"
    },
    ShowGroupBox: function($p0) { this.$1J_3.style.display = this.$17_3.style.display = $p0 ? "" : "none" },
    Group: function($p0) {
        var $v_0 = this.GetNumControls(), $v_1 = -1, $v_2 = 0, $v_3 = 0;
        while ($v_2 < $v_0) {
            var $v_4 = this.GetControl($v_2);
            if ($v_4.get_selected())
                if ($v_1 === -1) {
                    $v_1 = $v_2;
                    $v_3++
                } else {
                    var $v_5 = 0;
                    while ($v_5 < $v_0) {
                        var $v_6 = this.GetControl($v_5);
                        if (!$v_6.get_selected()) break;
                        $v_5++
                    }
                    if ($v_5 === $v_0 && !this.IsImplicitANDGroup()) {
                        if (this.$I_3 !== $p0) {
                            this.set_groupClause($p0);
                            this.$1_3.set_isDirty(true)
                        }
                        $v_5 = 0;
                        while ($v_5 < $v_0) {
                            this.GetDOMElement($v_5).setAttribute("Selected", false);
                            this.GetControl($v_5++).set_selected(false)
                        }
                        return $v_5
                    }
                    $v_2 = $v_1;
                    break
                }
            $v_2++
        }
        if ($v_2 !== $v_0) {
            var $v_7 = window.document.createElement("Crm:ConditionGroup");
            $v_7.id = this.get_element().id + "FGRP" + this.$1a_3++;
            this.$m_3 = $create(Mscrm.ConditionGroup,
                Mscrm.ConditionCommon.GetPropertiesForChild(this),
                null,
                null,
                $v_7);
            while ($v_2 < $v_0) {
                var $v_8 = this.GetControl($v_2);
                if ($v_8.get_selected()) {
                    var $v_9 = this.RemoveControl($v_8.get_element(), false);
                    $v_8.set_selected(false);
                    this.$m_3.AddControl($v_9, 1, null);
                    $v_0--;
                    $v_3++
                } else $v_2++
            }
            this.AddControl(this.$m_3.get_element(), -1, null, $v_1);
            this.$m_3.set_groupClause($p0);
            this.$m_3.$t_3 = true
        }
        return $v_3
    },
    ShowPopupMenu: function($p0) {
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        if (IsNull(this.$5_3)) {
            var $v_0 = document.createElement("DIV");
            $v_0.setAttribute("id", "menuContainer");
            window.document.body.appendChild($v_0);
            this.$5_3 = Mscrm.Menu.createMenu($v_0);
            this.$5_3.set_menuId(this.$T_3.id);
            this.$5_3.set_stylePrefix("POPUP");
            this.$5_3.set_width(170);
            this.$R_3 = Mscrm.MenuItem.createMenuItem("");
            this.$R_3.set_actionCallback(this.$$d_ToggleSelected);
            this.$5_3.addItem(this.$R_3);
            this.$1D_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_UNGROUP);
            this.$1D_3.set_actionCallback(this.$$d_Ungroup);
            this.$5_3.addItem(this.$1D_3);
            this.$n_3 = Mscrm.MenuItem.createMenuItem("");
            this.$n_3.set_actionCallback(this.$$d_ChangeGroupClause);
            this.$5_3.addItem(this.$n_3);
            this.$15_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_ADDROWTOGRP);
            this.$15_3.set_actionCallback(this.$$d_AddClause);
            this.$5_3.addItem(this.$15_3);
            this.$Z_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$Z_3.set_actionCallback(this.$$d_$1X_3);
            this.$5_3.addItem(this.$Z_3)
        }
        this.$5_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$5_3.set_left($p0.clientX - $p0.offsetX);
        this.$R_3.set_title(this.$l_3 ? window.LOCID_AF_UNSELECTROW : window.LOCID_AF_SELECTROW);
        this.$n_3.set_title(String.format(window.LOCID_AF_CHANGEGRP,
            this.$I_3 === "or" ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR));
        this.$5_3.show()
    },
    DeleteControl: function(control, detachAjaxControl) {
        this.$1_3.set_isDirty(true);
        this.RemoveControl(control, detachAjaxControl);
        if (this.$3_3 &&
            Mscrm.ConditionCommon.CheckControlByTagName(this.$3_3.get_element().tagName, "Crm:ConditionGroup"))
            switch (this.GetNumControls()) {
            case 1:
                this.Ungroup(null);
                break;
            case 0:
                this.$3_3.DeleteControl(this.get_element());
                break
            }
        else !this.GetNumControls() && this.AddClause(null)
    },
    RemoveControl: function($p0, $p1) {
        if ($p1) {
            var $v_0 = $find($p0.id);
            !IsNull($v_0) && Mscrm.ConditionCommon.DisposeAndDeleteControl($v_0)
        }
        return this.$B_3.removeChild($p0)
    },
    Ungroup: function($p0) {
        !IsNull(this.$5_3) && this.$5_3.hide();
        var $v_0 = this.GetNumControls();
        while ($v_0 > 0) {
            var $v_1 = this.RemoveControl(this.GetDOMElement(0), false), $v_2 = $find($v_1.id);
            $v_0--;
            if (Mscrm.ConditionCommon.CheckControlByTagName($v_1.tagName, "Crm:ConditionField") && !$v_2.$Q_3) continue;
            this.$3_3.AddControl($v_1, 4, this.get_element(), null, true)
        }
        this.$3_3.DeleteControl(this.get_element())
    },
    IsWaitTimeoutExpression: function() {
        if (this.GetNumControls() > 0 &&
            Mscrm.ConditionCommon.CheckControlByTagName(this.$B_3.nodeName, "Crm:ConditionField")) {
            var $v_0 = this.GetControl(0);
            if (!IsNull($v_0)) return IsTimeoutCondition($v_0)
        }
        return false
    },
    $1X_3: function($p0) { this.$1W_3(null) },
    $1W_3: function($p0) { confirm(window.LOCID_AF_DELETEFIELD) && this.$3_3.DeleteControl(this.get_element()) },
    AddClause: function($p0) {
        !IsNull(this.$5_3) && this.$5_3.hide();
        if (this.IsWaitTimeoutExpression()) return;
        Mscrm.ConditionCommon.HideVisibleControl(this.$1_3);
        var $v_0 = this.AddNewConditionField(1);
        $v_0 && $v_0.SetFocus()
    },
    ChangeGroupClause: function($p0) {
        !IsNull(this.$5_3) && this.$5_3.hide();
        this.set_groupClause(this.$I_3 === "and" ? "or" : "and");
        this.$1_3.set_isDirty(true)
    },
    ToggleSelected: function($p0) {
        !IsNull(this.$5_3) && this.$5_3.hide();
        this.set_selected(!this.$l_3)
    },
    handleClick: function($p0) {
        if ($p0.ctrlKey) {
            this.ToggleSelected(null);
            $p0.stopPropagation()
        }
    },
    GetStartElement: function() { return "<" + CrmEncodeDecode.CrmXmlEncode(this.$I_3) + ">" },
    GetEndElement: function() { return "</" + CrmEncodeDecode.CrmXmlEncode(this.$I_3) + ">" },
    GetChildren: function() {
        var $v_0 = [], $v_1 = this.GetNumControls(), $v_2 = 0;
        while ($v_2 < $v_1) {
            $v_0[$v_0.length] = XUI.Html.DomUtils.GetChildElementAt(this.$B_3, $v_2);
            $v_2++
        }
        return $v_0
    },
    ClearControl: function() { while (this.GetNumControls() > 0) this.RemoveControl(this.GetDOMElement(0), false) },
    ShowXml: function($p0) {
        if (isNullOrEmptyString($p0)) return;
        var $v_0 = XUI.Xml.LoadXml($p0);
        if (!IsNull($v_0) && !IsNull($v_0.documentElement)) {
            this.$1g_3($v_0.documentElement, 0);
            var $v_1 = this.GetControl(0);
            if (!IsNull($v_1) && $v_1.$I_3 === "and" && this.$1s_3($v_1)) {
                var $v_2 = this.$1_3.$v_3;
                $v_1.Ungroup(null);
                !$v_2 && this.$1_3.set_isDirty(false)
            }
        }
    },
    $1s_3: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.$B_3))
            for (var $v_0 = $p0.$B_3
                         .children,
                $v_1 = 0;
                $v_1 < $v_0.length;
                ++$v_1)
                if (!Mscrm.ConditionCommon
                    .CheckControlByTagName($v_0[$v_1].nodeName, "Crm:ConditionField")) return false;
        return true
    },
    $1g_3: function($p0, $p1) {
        if (IsNull($p0)) return;
        if (this.$1p_3($p0)) {
            for (var $v_0 = XUI.Xml
                         .SelectNodes($p0, "child::*", null),
                $v_2 = 0;
                $v_2 < $v_0.length;
                ++$v_2) this.$1g_3($v_0[$v_2], $v_2);
            for (var $v_1 = this.GetNumControls() - $p1, $v_3 = 0; $v_3 < $v_1; ++$v_3) {
                var $v_4 = this.GetControl($v_3 + $p1);
                $v_4.set_selected(true)
            }
            this.Group($p0.nodeName)
        } else if ($p0.nodeName === "condition") {
            var $v_5 = this.AddNewConditionField(1);
            $v_5.set_xml($p0)
        } else {
            for (var $v_6 = XUI.Xml.SelectNodes($p0, "child::condition", null), $v_7 = null, $v_8 = 0;
                $v_8 < $v_6.length;
                $v_8++) {
                $v_7 = this.AddNewConditionField(1);
                $v_7.set_xml($v_6[$v_8]);
                $v_7.set_selected(true)
            }
            if ($v_6.length === 1) $v_7.set_selected(false);
            else this.Group($p0.nodeName)
        }
    },
    $1p_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = XUI.Xml.SelectNodes($p0, "child::*", null);
            if (!IsNull($v_0) && $v_0.length > 0)
                for (var $v_1 = 0;
                    $v_1 < $v_0.length;
                    ++$v_1
                ) if ($v_0[$v_1].nodeName === "and" || $v_0[$v_1].nodeName === "or") return true
        }
        return false
    },
    AddControl: function(control, where, whichControl, pos) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_conditionParentControl(this);
            $v_0.set_conditionContainer(this.$1_3)
        }
        if (this.$M_3) {
            if (IsNull(pos)) {
                if ((where === 3 || where === 4) && (IsNull(whichControl) || whichControl.parentNode !== this.$B_3)
                ) return null;
                switch (where) {
                case 2:
                    if (XUI.Html.DomUtils.HasChildElements(this
                        .$B_3)) this.$B_3.insertBefore(control, XUI.Html.DomUtils.GetFirstChild(this.$B_3));
                    else this.$B_3.appendChild(control);
                    break;
                case 3:
                    var $v_1 = false, $v_2 = null, $$t_A = this;
                    XUI.Xml.DomUtils.ForEachChild(this.$B_3,
                        function($p1_0) {
                            if (IsNull($v_2)) {
                                $v_2 = $p1_0;
                                return false
                            }
                            if ($v_2 === whichControl) {
                                $$t_A.$B_3.insertBefore(control, $p1_0);
                                $v_1 = true;
                                return true
                            }
                            $v_2 = $p1_0;
                            return false
                        });
                    !$v_1 && this.$B_3.appendChild(control);
                    break;
                case 4:
                    var $$t_B = this;
                    XUI.Xml.DomUtils.ForEachChild(this.$B_3,
                        function($p1_0) {
                            if ($p1_0 === whichControl) {
                                $$t_B.$B_3.insertBefore(control, $p1_0);
                                return true
                            }
                            return false
                        });
                    break;
                case 1:
                default:
                    this.$B_3.appendChild(control);
                    break
                }
            } else {
                if (pos > this.$B_3.children.length || pos < 0) return null;
                if (pos === this.$B_3.children.length) this.$B_3.appendChild(control);
                else this.$B_3.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt(this.$B_3, pos))
            }
            XUI.Html.DomUtils.GetFirstChild(this.get_element()).style.display = "table"
        } else
            switch (where) {
            case 1:
                this.$D_3[this.$D_3.length] = control;
                break;
            case 2:
                for (var $v_3 = this.$D_3.length; $v_3 > 0; $v_3--) this.$D_3[$v_3] = this.$D_3[$v_3 - 1];
                this.$D_3[0] = control;
                break;
            default:
                return null
            }
        return control
    },
    $1a_3: 0,
    AddNewConditionField: function(where, ctrl) {
        var $v_0 = window.document.createElement("Crm:ConditionField");
        $v_0.id = Mscrm.Condition.getControlId(this.get_id(), "CF" + Math.random().toString().replace(".", ""));
        var $v_1 = this.AddControl($v_0, where, ctrl);
        if (!IsNull($v_1))
            return $create(Mscrm.ConditionField, Mscrm.Condition.getPropertiesForChild(this), null, null, $v_1);
        return null
    },
    FieldChanged: function(sender, args) {
        $find(this.GetControl(this.GetNumControls() - 1).get_id()).$a_3 && this.AddClause(null)
    },
    HideAffectedControls: function(index) {},
    GetControl: function(index) {
        var $v_0 = this.GetDOMElement(index);
        return IsNull($v_0) ? null : $find($v_0.id)
    },
    GetDOMElement: function($p0) {
        return this.$M_3 ? XUI.Html.DomUtils.GetChildElementAt(this.$B_3, $p0) : this.$D_3[$p0]
    },
    ParseXml: function() {
        var $v_0 = this.GetNumControls(), $v_1 = 0;
        while ($v_1 < $v_0) {
            var $v_2 = this.GetControl($v_1);
            if (!$v_2.ParseXml()) return false;
            $v_1++
        }
        return true
    },
    GetXml: function() {
        var $v_0 = this.GetNumControls(), $v_1 = 0, $v_2 = "";
        while ($v_1 < $v_0) {
            var $v_3 = this.GetControl($v_1).GetXml();
            if (!IsNull($v_3)) $v_2 += $v_3;
            $v_1++
        }
        if ($v_2 === "") return null;
        else
            return this.get_$1r_3() &&
                $v_0 === 2 &&
                Mscrm.ConditionCommon.CheckControlByTagName(this.GetControl(0).get_element().nodeName,
                    "Crm:ConditionGroup")
                ? $v_2
                : this.GetStartElement() + $v_2 + this.GetEndElement()
    },
    get_hasGroupedField: function() { return this.$t_3 },
    set_hasGroupedField: function(value) {
        this.$t_3 = value;
        return value
    },
    get_$1r_3: function() {
        return !IsNull(this.$3_3) &&
            !IsNull(this.$3_3.$3_3) &&
            !IsNull(this.$1_3) &&
            this.$3_3.$3_3.get_id() === this.$1_3.get_id()
    },
    initialize: function() {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create("/_imgs/advfind/button.gif")),
            $v_1 = this.get_element().id + "MNU",
            $v_2 = "at" + $v_1,
            $v_3 = String
                .format("<table class='ms-crm-AdvFind-FilterGroup' cellspacing='0' cellpadding='0' style='display:none'>\r\n\t<tr>\r\n\t\t<td class='ms-crm-AdvFind-GroupName'>\r\n\t\t\t<span tabindex='0' class='ms-crm-AdvFind-GroupMenu'>\r\n\t\t\t\t<img id='{2}' alt='' src='{0}' class = 'ms-crm-View-icon {1}'/>\r\n\t\t\t\t\t<a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title='{3}' id='{4}' class='atLink'></a>\r\n\t\t\t</span>\r\n\t\t\t<span class='ms-crm-AdvFind-GroupLabel cndGroupLabel'></span>\r\n\t\t</td>\r\n\t\t<td class='cndGroupPadding'></td>\r\n\t\t<td>\r\n\t\t\t<span class='ms-crm-AdvFind-ControlsGroup'></span>\r\n\t\t</td>\r\n\t</tr>\r\n</table>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.source), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.cssClass), CrmEncodeDecode.CrmHtmlAttributeEncode($v_1), CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATCONDITIONGROUP), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2));
        this.get_element().innerHTML = $v_3;
        var $v_4 = XUI.Html.DomUtils.GetFirstChild(this.get_element()), $v_5 = $v_4.rows[0];
        this.$T_3 = XUI.Html.DomUtils.GetChildElementAt($v_5.cells[0], 0);
        this.$1K_3 = XUI.Html.DomUtils.GetChildElementAt($v_5.cells[0], 1);
        this.$B_3 = XUI.Html.DomUtils.GetFirstChild($v_5.cells[2]);
        this.set_groupClause(this.$I_3);
        this.$17_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element()).rows[0].cells[0];
        this.$1J_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element()).rows[0].cells[1];
        this.$M_3 = true;
        (this.$1_3.get_id() === "dupRuleAppCondition" || this.$1_3.get_id() === "similarityRuleAppCondition") &&
            this.set_xml(this.$F_3);
        var $v_6 = this.$D_3.length, $v_7 = 0;
        while ($v_7 < $v_6) {
            this.AddControl(this.$D_3[$v_7], 1);
            delete this.$D_3[$v_7];
            $v_7++
        }
        $addHandler(this.$T_3, "click", this.$$d_$1z_3);
        $addHandler(this.$T_3, "mouseover", this.$$d_OnMouseOver);
        $addHandler(this.$T_3, "mouseout", this.$$d_OnMouseOut);
        $addHandler(this.$T_3, "MnuKeyUp", this.$$d_onMnuKeyUp);
        this.ShowGroupBox(!this.IsImplicitANDGroup())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$B_3)) {
            Mscrm.ConditionCommon.DisposeDirectChilds(this.$B_3);
            this.$B_3 = null
        }
        if (!IsNull(this.$5_3)) {
            this.$5_3.dispose();
            this.$5_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionOperatorList = function(element) {
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$1x_3 = Function.createDelegate(this, this.$1x_3);
    this.$$d_$1c_3 = Function.createDelegate(this, this.$1c_3);
    this.$x_3 = [];
    Mscrm.ConditionOperatorList.initializeBase(this, [element])
};
Mscrm.ConditionOperatorList.prototype = {
    $0_3: null,
    $A_3: false,
    $P_3: false,
    $3_3: null,
    $1_3: null,
    $6_3: null,
    $2_3: null,
    $4_3: null,
    $9_3: null,
    $G_3: 0,
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    get_dataValue: function() { return this.$2_3 },
    set_dataValue: function(value) {
        this.$2_3 = value;
        if (this.$A_3) {
            !IsNull(this.$0_3) && this.$0_3.set_value(value);
            if (this.isUnary()) this.hideDependents();
            else !IsNull(this.$9_3) && this.$9_3.set_operator(this.$2_3)
        }
        return value
    },
    get_width: function() { return this.$1_3.get_columnWidthInPixels() },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    get_attribute: function() { return this.$4_3 },
    set_attribute: function(value) {
        !IsNull(this.$4_3) && this.$4_3 !== value && this.set_dataValue(null);
        this.$4_3 = value;
        if (!this.$A_3 || IsNull(this.$0_3)) return value;
        if (!IsNull(this.$0_3)) {
            var $v_0 = null, $v_1 = this.$1_3.get_getUserDefinedList();
            if (!IsNull($v_1) && "function" === typeof $v_1) {
                var $v_2 = {};
                $v_2["ID"] = this.$6_3.id;
                $v_2["Element"] = this.get_element();
                $v_0 = $v_1($v_2)
            }
            if (IsNull($v_0)) $v_0 = this.$1e_3();
            this.$0_3.setInnerControlHtml($v_0)
        }
        this.getSelectList().set_selectedIndex(-1);
        return value
    },
    get_dependentValue: function() { return this.$9_3 },
    set_dependentValue: function(value) {
        this.$9_3 = value;
        return value
    },
    $1c_3: function($p0, $p1) { this.$c_3() },
    $1x_3: function($p0, $p1) { this.$1b_3() },
    $1b_3: function() {
        this.$A_3 = true;
        !IsNull(this.$4_3) && this.set_attribute(this.$4_3);
        this.set_dataValue(this.$2_3)
    },
    getSelectList: function() {
        return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$0_3
            .get_innerControl())
    },
    $1e_3: function() {
        if (IsNull(this.$4_3)) return "<select class='ms-crm-SelectBox'></select>";
        var $v_0 = null;
        if (IsTimeoutCondition(this.$3_3)) $v_0 = this.$1o_3();
        else if (this.$4_3 === "date" ||
            this.$4_3 === "lookupwithuser" ||
            this.$4_3 === "owner" ||
            this.$4_3 === "partylist" ||
            this.$4_3 === "lookupwithuserwithname" ||
            this.$4_3 === "ownerwithname" ||
            this.$4_3 === "lookupwithbusinessunit" ||
            this.$4_3 === "lookupwithbusinessunitwithname" ||
            this.$4_3 === "lookupwithuserwithhierarchy" ||
            this.$4_3 === "lookupwithuserwithhierarchywithname" ||
            this.$4_3 === "dateonly")
            $v_0 = XUI.Html.GetOuterHTML(this.$1_3.$8_3.GetElement("ConditionControlOperator", this.$4_3, null));
        else $v_0 = XUI.Html.GetOuterHTML(this.$1_3.$8_3.GetElement("Operator", this.$4_3, null));
        return $v_0
    },
    ParseXml: function() { return true },
    $1o_3: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<select class='ms-crm-SelectBox'>");
        $v_0.append("<OPTION value='eq' selected>");
        $v_0.append(CrmEncodeDecode.CrmXmlEncode(window.LOCID_AF_EQUALS));
        $v_0.append("</OPTION></select>");
        return $v_0.toString()
    },
    GetXml: function() {
        if (IsNull(this.$2_3)) return null;
        else
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$2_3) +
                '"/>'
    },
    $c_3: function() {
        var $v_0 = this.getSelectList();
        if ($v_0.get_selectedIndex() === -1) return;
        var $v_1 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        if (this.isUnary()) this.hideDependents();
        else $v_1 !== this.$2_3 && !IsNull(this.$9_3) && this.$9_3.set_operator(this.$2_3);
        this.$V_3(false);
        var $v_2 = this.$1_3.$g_3;
        !IsNull($v_2) && "function" === typeof $v_2 && $v_2(null)
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    isUnary: function() {
        if (IsNull(this.$2_3)) return false;
        else return !IsValueBoundOperator(this.$2_3)
    },
    hideDependents: function() {
        var $v_0 = this.$x_3.length, $v_1 = 0;
        while ($v_1 < $v_0) {
            this.$3_3.HideChild(this.$x_3[$v_1]);
            $v_1++
        }
    },
    addDependent: function(controlIndex) { this.$x_3[this.$x_3.length] = controlIndex },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}' style=\"display:block; position: relative;\"/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "OP")));
        this.$A_3 = true;
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0["value"] = this.$2_3;
        $v_0["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_0["width"] = this.get_width();
        if (this.$1_3.get_readOnlyMode()) $v_0["disabled"] = true;
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$1c_3;
        $v_1["onInitComplete"] = this.$$d_$1x_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_0,
            $v_1,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml(this.$1e_3());
        window.setTimeout(this.$$d_$14_3, 1)
    },
    $14_3: function() {
        if (this.get_isDisposed()) return;
        this.$P_3 && this.SetFocus()
    },
    SetFocus: function() {
        this.$P_3 = true;
        if (this.$A_3) {
            this.$0_3.SetFocus();
            this.$P_3 = false
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ConditionValue = function(element) {
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$1y_3 = Function.createDelegate(this, this.$1y_3);
    this.$$d_$1c_3 = Function.createDelegate(this, this.$1c_3);
    this.$$d_$1u_3 = Function.createDelegate(this, this.$1u_3);
    this.$$d_addStageFilter = Function.createDelegate(this, this.addStageFilter);
    this.$$d_$1w_3 = Function.createDelegate(this, this.$1w_3);
    this.$$d_$1v_3 = Function.createDelegate(this, this.$1v_3);
    Mscrm.ConditionValue.initializeBase(this, [element])
};
Mscrm.ConditionValue.prototype = {
    $0_3: null,
    $A_3: false,
    $3_3: null,
    $1_3: null,
    $6_3: null,
    $2_3: null,
    $4_3: null,
    $G_3: 0,
    $b_3: null,
    $L_3: null,
    $C_3: 0,
    $j_3: null,
    $1H_3: null,
    $q_3: null,
    $11_3: null,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    get_dataSlug: function() { return this.$j_3 },
    set_dataSlug: function(value) {
        this.$j_3 = value;
        return value
    },
    get_dataValue: function() {
        if (this.$1R_3()) return Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl()).get_firstSlugValue();
        return this.$2_3
    },
    set_dataValue: function(value) {
        this.$2_3 = value;
        var $v_0 = value, $v_1 = value, $v_2 = null;
        if (this.$A_3) {
            if (this.$4_3 && value) {
                var $v_3 = this.$1_3.$8_3.AbstractDataType(this.$4_3);
                if ($v_3 === "date" || $v_3 === "dateonly") $v_1 = new Date(this.$2_3.valueOf());
                else if (this.$1q_3($v_0)) {
                    var $v_4 = XUI.Xml.LoadXml($v_0), $v_5 = XUI.Xml.SelectNodes($v_4, "/lookup/value", null);
                    $v_2 = [];
                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        var $v_7 = $v_5[$v_6], $v_8 = new LookupControlItem;
                        $v_8.id = XUI.Xml.GetText($v_7);
                        $v_8.typename = XUI.Xml.GetText($v_7.attributes.getNamedItem("uitype"));
                        $v_8.name = XUI.Xml.GetText($v_7.attributes.getNamedItem("uiname"));
                        $v_2[$v_2.length] = $v_8
                    }
                    $v_1 = $v_2
                }
            }
            this.$0_3.set_value($v_1);
            this.$2_3 = $v_1
        } else this.$2_3 = $v_0;
        return value
    },
    get_attribute: function() { return this.$4_3 },
    set_attribute: function(value) {
        this.$4_3 = value;
        if (!this.$A_3 || IsNull(this.$0_3)) return value;
        this.$1E_3();
        !IsNull(this.$4_3) && this.$1_3.LoadDynamicValues(this.get_element(), this.$4_3);
        return value
    },
    get_width: function() { return this.$G_3 },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    get_operator: function() { return this.$b_3 },
    set_operator: function(value) {
        !IsNull(this.$b_3) && this.$b_3 !== value && this.set_dataValue(null);
        this.$b_3 = value;
        if (!this.$A_3 || IsNull(this.$0_3)) return value;
        this.$1E_3();
        return value
    },
    get_entity: function() { return this.$L_3 },
    set_entity: function(value) {
        this.$L_3 = value;
        if (!this.$A_3 || IsNull(this.$0_3)) return value;
        this.$1E_3();
        return value
    },
    AttachDataSlugEvents: function() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl());
            if (!IsNull($v_0)) {
                $v_0.add_deleteSlugBody(this.$$d_$1v_3);
                $v_0.add_changeDataSlug(this.$$d_$1w_3)
            }
        }
    },
    $1c_3: function($p0, $p1) { this.$c_3() },
    $1y_3: function($p0) { this.$1t_3($p0) },
    $1E_3: function() {
        if (IsNull(this.$4_3) || IsNull(this.$L_3) || IsNull(this.$b_3)) {
            var $v_0 = this.$0_3.get_id() + "_select";
            this.$0_3.setInnerControlHtml("<select id='" +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) +
                "' class='ms-crm-SelectBox'></select>");
            return
        }
        this.$20_3(this.$4_3, this.$b_3)
    },
    $20_3: function($p0, $p1) {
        this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.$0_3.set_toolTip(null);
        this.$0_3.set_width(150);
        switch ($p0.getAttribute("datatype").toString()) {
        case "nvarchar":
        case "text":
        case "ntext":
        case "memo":
            this.$0_3.setInnerControlHtml(XUI.Html
                .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "string", null)));
            this.$0_3.get_innerControl().setAttribute("maxLength", $p0.getAttribute("maxlength"));
            break;
        case "language":
        case "bit":
        case "boolean":
        case "state":
        case "status":
        case "picklist":
            if (IsNameOperator($p1)) {
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "string", null)));
                this.$0_3.get_innerControl().setAttribute("maxLength", $p0.getAttribute("namemaxlength"))
            } else {
                var $v_5 = $p0.getAttribute("value");
                if (!isNullOrEmptyString($v_5) && $v_5.indexOf("#Arguments#") >= 0) {
                    this.$0_3.setInnerControlHtml(XUI.Html
                        .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "number", null)));
                    var $v_6 = Mscrm.FormControlInputBehavior
                        .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
                    $v_6.set_dataType("int");
                    $v_6.set_precision(0);
                    $v_6.set_min(0);
                    $v_6.set_max(2147483647)
                } else {
                    var $v_7 = this.$1_3.$8_3.GetElement("ValueControl", "picklist", null);
                    this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_7));
                    var $v_8 = $find(this.$0_3.get_innerControl().id);
                    $v_8.LoadOptionsXml($p0.getAttribute("optionsXML"))
                }
            }
            break;
        case "primarykey":
        case "partylist":
        case "uniqueidentifier":
        case "lookup":
        case "customer":
        case "owner":
            if (IsNameOperator($p1) && $p0.getAttribute("datatype") !== "partylist") {
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "string", null)));
                this.$0_3.get_innerControl().setAttribute("maxLength", $p0.getAttribute("namemaxlength"))
            } else {
                var $v_9 = this.$1_3.$8_3.GetElement("ValueControl", "lookup", null),
                    $v_A = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_9)), 1));
                $v_A.setAttribute("lookuptypes", $p0.getAttribute("lookuptypes"));
                $v_A.setAttribute("lookuptypenames", $p0.getAttribute("lookuptypenames"));
                var $v_B = $p0.getAttribute("lookuptypes").toString().split(",");
                $v_A.setAttribute("lookuptypeIcons", this.$1_3.$8_3.LookupIcons[parseInt($v_B[0], 10)]);
                for (var $v_E = 1;
                    $v_E < $v_B.length;
                    $v_E++
                )
                    $v_A.setAttribute("lookuptypeIcons",
                        $v_A.getAttribute("lookuptypeIcons") +
                        ":" +
                        this.$1_3.$8_3.LookupIcons[parseInt($v_B[$v_E], 10)]);
                if ($p0.getAttribute("lookuptypes").toString() === "129") $v_A.setAttribute("lookupstyle", "subject");
                else $v_A.setAttribute("lookupstyle", "multi");
                if (Mscrm.Utilities.parseBoolean($p0
                    .getAttribute("hierarchyenabled")))
                    ($p1 === "under" || $p1 === "not-under") && $v_A.setAttribute("lookupstyle", "single");
                this.$0_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_9));
                var $v_C = !IsNull(this.$4_3) && this.$4_3.nodeName === "OPTION" ? this.$4_3 : null,
                    $v_D = !IsNull(this.$4_3) && this.$4_3.nodeName === "OPTION" && $v_C.value === "activestageid";
                $v_D && !IsNull(this.$b_3) && !IsNull($v_9) && this.$1k_3()
            }
            break;
        case "decimal":
        case "int":
        case "float":
        case "integer":
        case "money":
            this.$0_3.setInnerControlHtml(XUI.Html
                .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "number", null)));
            var $v_0 = Mscrm.FormControlInputBehavior
                .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
            $v_0.set_dataType($p0.getAttribute("datatype").toString() === "integer"
                ? "int"
                : $p0.getAttribute("datatype"));
            $v_0.set_precision(parseInt($p0.getAttribute("acc"), 10));
            $v_0.set_min($p0.getAttribute("min"));
            $v_0.set_max($p0.getAttribute("max"));
            $p0.getAttribute("format") === "duration" &&
                this.$0_3.set_defaultText(this.$0_3.set_toolTip(window.LOCID_AF_ENTERVALINMINS));
            break;
        case "datetime":
        case "date":
        case "time":
            var $v_1 = {}, $v_2 = {}, $v_3 = "";
            switch ($p1) {
            case "last-x-hours":
            case "next-x-hours":
            case "olderthan-x-hours":
                $v_1["hours"] = 1;
                $v_2["hours"] = 2e3;
                $v_3 = "hours";
                break;
            case "last-x-days":
            case "next-x-days":
            case "olderthan-x-days":
                $v_1["days"] = 1;
                $v_2["days"] = 500;
                $v_3 = "days";
                break;
            case "last-x-weeks":
            case "next-x-weeks":
            case "olderthan-x-weeks":
                $v_1["weeks"] = 1;
                $v_2["weeks"] = 100;
                $v_3 = "weeks";
                break;
            case "last-x-months":
            case "next-x-months":
            case "olderthan-x-months":
                $v_1["months"] = 1;
                $v_2["months"] = 100;
                $v_3 = "months";
                break;
            case "olderthan-x-minutes":
                $v_1["minutes"] = 1;
                $v_2["minutes"] = 1440;
                $v_3 = "minutes";
                break;
            case "last-x-years":
            case "next-x-years":
            case "olderthan-x-years":
                $v_1["years"] = 1;
                $v_2["years"] = 100;
                $v_3 = "years";
                break;
            case "last-x-fiscal-years":
            case "next-x-fiscal-years":
                $v_1["fiscalyears"] = 1;
                $v_2["fiscalyears"] = 100;
                $v_3 = "fiscalyears";
                break;
            case "last-x-fiscal-periods":
            case "next-x-fiscal-periods":
                $v_1["fiscalperiods"] = 1;
                $v_2["fiscalperiods"] = 100;
                $v_3 = "fiscalperiods";
                break;
            case "in-fiscal-year":
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                var $v_4 = $find(this.$0_3.get_innerControl().id);
                $v_4.set_showPeriod(false);
                $v_4.set_showYear(true);
                break;
            case "in-fiscal-period":
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                $v_4 = $find(this.$0_3.get_innerControl().id);
                $v_4.set_showPeriod(true);
                $v_4.set_showYear(false);
                break;
            case "in-fiscal-period-and-year":
            case "in-or-before-fiscal-period-and-year":
            case "in-or-after-fiscal-period-and-year":
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                $v_4 = $find(this.$0_3.get_innerControl().id);
                $v_4.set_showPeriod(true);
                $v_4.set_showYear(true);
                break;
            case "eq":
            case "ne":
            case "gt":
            case "ge":
            case "lt":
            case "le":
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "datetime", null)));
                this.$0_3.set_width(200);
                break;
            default:
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "date", null)));
                break
            }
            if ($v_3 !== "") {
                this.$0_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$1_3.$8_3.GetElement("ValueControl", "number", null)));
                var $v_F = Mscrm.FormControlInputBehavior
                    .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$0_3.get_innerControl()));
                $v_F.set_precision(0);
                $v_F.set_min($v_1[$v_3]);
                $v_F.set_max($v_2[$v_3])
            }
            break;
        default:
            break
        }
    },
    $1k_3: function() {
        this.$1m_3();
        if (!isNullOrEmptyString(this.$11_3)) {
            var $v_0 = this.$0_3.get_innerControl().id + "_img",
                $v_1 = $get($v_0),
                $v_2 = Mscrm.FormInputControl.LookupUIBehavior
                    .isInstanceOfType(Mscrm.FormControlInputBehavior.GetElementBehavior($v_1))
                    ? Mscrm.FormControlInputBehavior.GetElementBehavior($v_1)
                    : null;
            !IsNull($v_2) && $v_2.add_setadditionalparams(this.$$d_addStageFilter)
        }
    },
    $1m_3: function() {
        var $v_0 = new RemoteCommand("Workflow", "GetProcessIdForEntity");
        $v_0.SetParameter("entityName", this.$L_3);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success && $v_1.ReturnValue) this.$11_3 = $v_1.ReturnValue
    },
    $1q_3: function($p0) {
        if (IsNull($p0)) return false;
        return !$p0.toString().indexOf("<lookup>") && $p0.toString().indexOf("</lookup>") > 0
    },
    $1R_3: function() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = this.$0_3.getSlugControl();
            if (typeof $v_0 !== "undefined" &&
                !IsNull(Mscrm.FormUtility.getSlugBehavior($v_0)) &&
                Mscrm.FormUtility.getSlugBehavior($v_0).get_isDataSlug()) return true
        }
        return false
    },
    ParseXml: function() {
        if (IsNull(this.$2_3) || this.$2_3.toString() === "")
            if (!IsNull(this.$4_3) && this.$4_3.getAttribute("title") !== "" && !this.$1R_3()) {
                alert(String.format(window.LOCID_AF_VALUEMISSINGFOR_MSG, this.$4_3.getAttribute("title").toString()));
                return false
            }
        return true
    },
    GetXml: function() {
        var $v_0 = false, $v_1 = "";
        if (this.$1R_3()) {
            $v_0 = true;
            $v_1 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl()).get_firstSlugValue()
        } else if ((IsNull(this.$2_3) || typeof this.$2_3 === "string" && this.$2_3 === "") && !$v_0) return null;
        else {
            var $v_2 = this.$1_3.$8_3.AbstractDataType(this.$4_3);
            switch ($v_2) {
            case "owner":
            case "lookup":
            case "lookupwithuser":
            case "lookupwithbusinessunit":
            case "lookupwithhierarchy":
            case "lookupwithhierarchywithname":
            case "lookupwithuserwithhierarchy":
            case "lookupwithuserwithhierarchywithname":
                for (var $v_3 = this.get_dataValue(), $v_4 = $v_3.length, $v_6 = 0; $v_6 < $v_4; $v_6++) {
                    var $v_7 = "", $v_8 = $v_3[$v_6];
                    $v_7 = "<value uiname = '" + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.name) + "'";
                    $v_7 = $v_7 + " uitype = '" + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.typename) + "'";
                    $v_7 = $v_7 + " >" + CrmEncodeDecode.CrmXmlEncode($v_8.id) + "</value>";
                    $v_1 = $v_1 + $v_7
                }
                if ($v_1.length > 0) $v_1 = "<lookup>" + $v_1 + "</lookup>";
                break;
            case "picklist":
                $v_1 = this.$2_3;
                break;
            case "date":
            case "dateonly":
                var $v_5 = new Date(this.$2_3.valueOf());
                $v_1 = FormatUtcDate($v_5);
                break;
            default:
                $v_1 = this.$0_3.get_value();
                break
            }
        }
        return '<column id="' +
            CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
            '" value="' +
            CrmEncodeDecode.CrmXmlAttributeEncode($v_1) +
            '" dataslugs="' +
            ($v_0 ? "0" : "") +
            '" />'
    },
    setDataSlugs: function(dataSlugValues, slugIndexes, slugText) {
        if (!IsNull(slugIndexes)) {
            this.$1H_3 = dataSlugValues;
            this.$q_3 = slugText;
            this.$A_3 && this.$1f_3()
        }
    },
    $1f_3: function() {
        if (!IsNull(this.$j_3)) {
            var $v_0 = Mscrm.FormUtility.getSlugBehavior(this.$0_3.getSlugControl());
            $v_0.set_isDataSlug(true);
            $v_0.set_isMultiSlug(false);
            $v_0.set_isReadOnly(true);
            $v_0.InsertSlugControl(this.$1H_3, this.$q_3, false, false);
            this.$0_3.set_text(this.$q_3);
            this.$0_3.set_defaultText(this.$q_3)
        }
    },
    addStageFilter: function(sender, args) {
        var $v_0 = Mscrm.FormInputControl.LookupUIBehavior.isInstanceOfType(sender) ? sender : null;
        if (!isNullOrEmptyString(this.$11_3) && !IsNull($v_0)) {
            var $v_1 = '<filter type="and"><condition attribute="processid" operator="eq" value="' +
                this.$11_3 +
                '"/></filter>';
            $v_0.addCustomFilter($v_1)
        }
    },
    $1v_3: function($p0, $p1) {
        this.$0_3.set_text("");
        this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.set_dataValue(this.$0_3.get_value());
        this.$V_3(true)
    },
    $1w_3: function($p0, $p1) { this.$c_3() },
    $1u_3: function($p0) { !IsNull(this.$4_3) && this.$1_3.LoadDynamicValues(this.get_element(), this.$4_3) },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    $c_3: function() {
        !IsNull(this.$0_3) && this.set_dataValue(this.$0_3.get_value());
        this.$V_3(false)
    },
    $1t_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_0 === 83 && $p0.altKey) {
            if (typeof $p0.target !== "undefined") {
                var $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target);
                if (!$v_1.IsValid()) {
                    $p0.stopPropagation();
                    return
                }
            }
            this.set_dataValue(this.$0_3.get_value());
            this.$V_3(true);
            return
        }
        return
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "VALUE")));
        this.$A_3 = true;
        $addHandler(this.get_element(), "click", this.$$d_$1u_3);
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0["value"] = this.$2_3;
        $v_0["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_0["width"] = this.get_width();
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$1c_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_0,
            $v_1,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        $addHandler(this.$0_3.get_element(), "keyDown", this.$$d_$1y_3);
        this.$1E_3();
        this.$1_3.get_readOnlyMode() && this.$0_3.set_disabled(true);
        window.setTimeout(this.$$d_$14_3, 1)
    },
    $14_3: function() {
        if (this.get_isDisposed()) return;
        this.set_dataValue(this.$2_3);
        if (!IsNull(this.$j_3)) {
            this.$1f_3();
            this.AttachDataSlugEvents()
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$1u_3);
        if (!IsNull(this.$0_3)) {
            $removeHandler(this.$0_3.get_element(), "keyDown", this.$$d_$1y_3);
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.Freeform = function(element) {
    this.$$d_$14_3 = Function.createDelegate(this, this.$14_3);
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    Mscrm.Freeform.initializeBase(this, [element])
};
Mscrm.Freeform.prototype = {
    $0_3: null,
    $A_3: false,
    $P_3: false,
    $3_3: null,
    $1_3: null,
    $6_3: null,
    $2_3: null,
    $G_3: 0,
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    get_dataValue: function() { return this.$2_3 },
    set_dataValue: function(value) {
        this.$2_3 = value;
        if (this.$A_3) {
            this.render();
            !isNullOrEmptyString(this.$0_3.get_element().innerHTML) && this.$0_3.set_value(this.$2_3)
        }
        return value
    },
    get_width: function() { return this.$1_3.get_columnWidthInPixels() },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    render: function() {
        if (IsNull(this.$0_3)) return;
        IsNull(this.$0_3.get_defaultText()) && this.$0_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.$1_3.get_readOnlyMode() && this.$0_3.set_disabled(true);
        var $v_0 = null, $v_1 = this.$1_3.get_getUserDefinedList();
        if (!IsNull($v_1) && "function" === typeof $v_1) {
            var $v_2 = {};
            $v_2["ID"] = this.$6_3.id;
            $v_2["Element"] = this.get_element();
            $v_0 = $v_1($v_2)
        }
        !IsNull($v_0) && this.$0_3.setInnerControlHtml($v_0);
        if (this.$1_3.get_id() === "dupRuleAppCondition" && this.$6_3.id === "colIgnoreBlankValues") {
            this.$0_3.set_showAlways(true);
            this.$0_3.ShowControl(true, false);
            this.$0_3.set_toolTip(window.LOCID_DEDUP_IGNOREBLANK_TOOLTIP);
            _isIgnoreBlankValuePresentInMetadata == false && this.$0_3.set_disabled(true)
        }
    },
    ParseXml: function() {
        if ((IsNull(this.$2_3) || this.$2_3 === "") && !(this.$6_3.id === "colIgnoreBlankValues"))
            if (!IsNull(window.LOCID_DEDUP_NUMCHARS_MISSING)) {
                var $v_0 = window._isSingleEntityRule ? 1 : 2, $v_1 = this.$3_3.GetControl($v_0);
                if (!IsNull($v_1.$2_3) && !$v_1.isUnary()) {
                    var $v_2 = this.$3_3.GetControl(0),
                        $v_3 = $find(XUI.Html.DomUtils.GetFirstChild($v_2.get_element()).id);
                    if (!IsNull($v_3)) {
                        alert(String.format(window.LOCID_DEDUP_NUMCHARS_MISSING, $v_3.get_text()));
                        return false
                    }
                }
            }
        return true
    },
    GetXml: function() {
        if (IsNull(this.$2_3) || this.$2_3 === "") return null;
        else {
            var $v_0 = null, $v_1 = this.$1_3.$18_3;
            if (!IsNull($v_1) && "function" === typeof $v_1) {
                var $v_2 = {};
                $v_2["ID"] = this.$6_3.id;
                $v_2["Element"] = this.get_element();
                $v_0 = $v_1($v_2)
            }
            if (IsNull($v_0)) $v_0 = this.$2_3;
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode($v_0) +
                '"/>'
        }
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    $c_3: function($p0, $p1) {
        var $v_0 = this.$2_3;
        this.$2_3 = this.$0_3.get_value();
        this.$V_3(false);
        var $v_1 = this.$1_3.$g_3;
        !IsNull($v_1) && "function" === typeof $v_1 && $v_1(null)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}' style=\"display:block; position: relative;\"/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "FREEFORM")));
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0["value"] = this.$2_3;
        $v_0["defaultText"] = window.LOCID_AF_ENTERVALUE;
        $v_0["width"] = this.get_width();
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$c_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_0,
            $v_1,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml("<span/>");
        window.setTimeout(this.$$d_$14_3, 1)
    },
    $14_3: function() {
        if (this.get_isDisposed()) return;
        this.$A_3 = true;
        this.set_dataValue(this.$2_3);
        this.$P_3 && !this.$0_3.get_disabled() && this.SetFocus()
    },
    SetFocus: function() {
        this.$P_3 = true;
        if (this.$A_3) {
            this.$0_3.SetFocus();
            this.$P_3 = false
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.Hidden = function(element) {
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    this.$1i_3 = [];
    Mscrm.Hidden.initializeBase(this, [element])
};
Mscrm.Hidden.prototype = {
    $0_3: null,
    $A_3: false,
    $3_3: null,
    $1_3: null,
    $6_3: null,
    $2_3: null,
    $9_3: null,
    $G_3: 0,
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    get_dataValue: function() { return this.$2_3 },
    set_dataValue: function(value) {
        this.$2_3 = value;
        this.$A_3 && this.$0_3.set_value(value);
        return value
    },
    get_width: function() { return this.$G_3 },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    get_dependentValue: function() { return this.$9_3 },
    set_dependentValue: function(value) {
        this.$9_3 = value;
        return value
    },
    ParseXml: function() { return true },
    GetXml: function() {
        if (IsNull(this.$2_3)) return null;
        else
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$2_3) +
                '"/>'
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    $c_3: function($p0, $p1) {
        var $v_0 = this.$2_3;
        this.$2_3 = this.get_element().nodeValue;
        this.$V_3(false)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "HIDDEN")));
        this.$A_3 = true;
        var $v_0 = Mscrm.Condition.getPropertiesForChild(this);
        $v_0["value"] = this.$2_3;
        $v_0["defaultText"] = "";
        $v_0["width"] = 0;
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$c_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_0,
            $v_1,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3.setInnerControlHtml("<INPUT class='ms-crm-Text'/>")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.PredefinedList = function(element) {
    this.$$d_$c_3 = Function.createDelegate(this, this.$c_3);
    Mscrm.PredefinedList.initializeBase(this, [element])
};
Mscrm.PredefinedList.prototype = {
    $0_3: null,
    $A_3: false,
    $3_3: null,
    $1_3: null,
    $6_3: null,
    $2_3: null,
    $9_3: null,
    $G_3: 0,
    $C_3: 0,
    get_index: function() { return this.$C_3 },
    set_index: function(value) {
        this.$C_3 = value;
        return value
    },
    get_conditionParentControl: function() { return this.$3_3 },
    set_conditionParentControl: function(value) {
        this.$3_3 = value;
        return value
    },
    get_conditionContainer: function() { return this.$1_3 },
    set_conditionContainer: function(value) {
        this.$1_3 = value;
        return value
    },
    get_columnData: function() { return this.$6_3 },
    set_columnData: function(value) {
        this.$6_3 = value;
        return value
    },
    get_dataValue: function() { return this.$1Q_3() },
    set_dataValue: function(value) {
        this.$22_3(value);
        return value
    },
    get_width: function() { return this.$G_3 },
    set_width: function(value) {
        this.$G_3 = value;
        return value
    },
    get_dependentValue: function() { return this.$9_3 },
    set_dependentValue: function(value) {
        this.$9_3 = value;
        return value
    },
    $1n_3: function() { return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$0_3.get_innerControl()) },
    $1S_3: function() {
        var $v_0 = "", $v_1 = 0;
        while (true) {
            var $v_2 = "id" + $v_1,
                $v_3 = "name" + $v_1,
                $v_4 = this.$6_3.attributes.getNamedItem($v_2),
                $v_5 = this.$6_3.attributes.getNamedItem($v_3);
            if (IsNull($v_4) || IsNull($v_5)) break;
            $v_0 += "<OPTION VALUE='" + $v_4.value + "'>" + $v_5.value + "</OPTION>";
            $v_1++
        }
        return $v_0
    },
    $1Q_3: function() { return this.$2_3 },
    $22_3: function($p0) {
        this.$2_3 = $p0;
        this.$A_3 && this.$0_3.set_value($p0)
    },
    ParseXml: function() { return true },
    GetXml: function() {
        if (IsNull(this.$1Q_3())) return null;
        else
            return '<column id="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$6_3.id) +
                '" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode(this.$1Q_3()) +
                '"/>'
    },
    $V_3: function($p0) {
        this.$3_3.FieldChanged(this.get_element(), Sys.EventArgs.Empty);
        this.$3_3.HideAffectedControls(this.$C_3)
    },
    $c_3: function($p0, $p1) {
        var $v_0 = this.$1n_3();
        if ($v_0.get_selectedIndex() === -1) return;
        var $v_1 = this.$2_3;
        this.$2_3 = this.get_element().nodeValue;
        this.$V_3(false)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.Condition.getControlId(this.get_id(), "PREDEF")));
        var $v_0 = this.get_element().id + "_select";
        this.$A_3 = true;
        var $v_1 = Mscrm.Condition.getPropertiesForChild(this);
        $v_1["value"] = this.$2_3;
        $v_1["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        $v_1["width"] = 0;
        var $v_2 = {};
        $v_2["onChange"] = this.$$d_$c_3;
        this.$0_3 = $create(Mscrm.ConditionAutoShow,
            $v_1,
            $v_2,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$0_3
            .setInnerControlHtml("<select id='" + $v_0 + "' class='ms-crm-SelectBox'>" + this.$1S_3() + "</select>")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$0_3)) {
            Mscrm.ConditionCommon.DisposeAndDeleteControl(this.$0_3);
            this.$0_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.AttributeList.registerClass("Mscrm.AttributeList", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionEntity.registerClass("Mscrm.ConditionEntity");
Mscrm.Condition.registerClass("Mscrm.Condition", Mscrm.CrmUIControl);
Mscrm.ConditionAutoShow.registerClass("Mscrm.ConditionAutoShow", Mscrm.AutoShow, Mscrm.IConditionClientControl);
Mscrm.ConditionCommon.registerClass("Mscrm.ConditionCommon");
Mscrm.ConditionControl.registerClass("Mscrm.ConditionControl",
    Mscrm.CrmUIControl,
    Mscrm.IConditionClientControl,
    Mscrm.IConditionContainerControl);
Mscrm.ConditionEntityList.registerClass("Mscrm.ConditionEntityList", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionField.registerClass("Mscrm.ConditionField",
    Mscrm.CrmUIControl,
    Mscrm.IConditionClientControl,
    Mscrm.IConditionContainerControl);
Mscrm.ConditionGroup.registerClass("Mscrm.ConditionGroup",
    Mscrm.CrmUIControl,
    Mscrm.IConditionClientControl,
    Mscrm.IConditionContainerControl);
Mscrm.ConditionOperatorList.registerClass("Mscrm.ConditionOperatorList",
    Mscrm.CrmUIControl,
    Mscrm.IConditionClientControl);
Mscrm.ConditionValue.registerClass("Mscrm.ConditionValue", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.Freeform.registerClass("Mscrm.Freeform", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.Hidden.registerClass("Mscrm.Hidden", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.PredefinedList.registerClass("Mscrm.PredefinedList", Mscrm.CrmUIControl, Mscrm.IConditionClientControl);
Mscrm.ConditionCommon.CONDITION_CTRL = "Crm:ConditionControl";
Mscrm.ConditionCommon.PREDEFINED_LIST = "Crm:PredefinedList";
Mscrm.ConditionCommon.CONDITIONGROUP_CTRL = "Crm:ConditionGroup";
Mscrm.ConditionCommon.CONDITIONFIELD_CTRL = "Crm:ConditionField";
Mscrm.ConditionCommon.ENTITY_LIST = "Crm:EntityList";
Mscrm.ConditionCommon.ATTRIBUTE_LIST = "Crm:AttributeList";
Mscrm.ConditionCommon.OPERATOR_LIST = "Crm:OperatorList";
Mscrm.ConditionCommon.VALUE_CTRL = "Crm:Value";
Mscrm.ConditionCommon.FREEFORM_CTRL = "Crm:Freeform";
Mscrm.ConditionCommon.HIDDEN_CTRL = "Crm:Hidden";
Mscrm.ConditionCommon.AUTOSHOW_CTRL = "Crm:AutoShow";
Mscrm.ConditionCommon.FIELD_GROUP = "fld";
Mscrm.ConditionCommon.TimeoutExprEntity = "waittimeout";
Mscrm.ConditionCommon.TimeoutExpressionType = "timeout";
Mscrm.ConditionCommon.TimeoutOnlyExpressionType = "timeoutonly";
Mscrm.ConditionCommon.AT_END = 1;
Mscrm.ConditionCommon.AT_BEGIN = 2;
Mscrm.ConditionCommon.AT_AFTER = 3;
Mscrm.ConditionCommon.AT_BEFORE = 4;
Mscrm.ConditionCommon.and = "and";
Mscrm.ConditionCommon.or = "or";
Mscrm.ConditionCommon.condition = "condition";
Mscrm.ConditionCommon.ControlsCache = null