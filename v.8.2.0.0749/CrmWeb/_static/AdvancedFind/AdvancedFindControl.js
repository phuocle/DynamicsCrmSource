Type.registerNamespace("Mscrm");
Mscrm.AdvancedFindButtons = function() {};
Mscrm.AdvancedFindButtons.prototype = {
    none: 0,
    switchModes: 1,
    groupAnd: 2,
    groupOr: 4,
    ungroup: 8,
    newButton: 16,
    save: 32,
    saveAs: 64,
    clear: 128,
    editView: 256,
    all: 511
};
Mscrm.AdvancedFindButtons.registerEnum("Mscrm.AdvancedFindButtons", false);
Mscrm.AdvancedFindModes = function() {};
Mscrm.AdvancedFindModes.prototype = { none: 0, simple: 1, detailed: 2, all: 3 };
Mscrm.AdvancedFindModes.registerEnum("Mscrm.AdvancedFindModes", false);
Mscrm.FetchModes = function() {};
Mscrm.FetchModes.prototype = { none: 0, summary: 1, alertEmpty: 2, ignoreEmpty: 4, skipEmpty: 8 };
Mscrm.FetchModes.registerEnum("Mscrm.FetchModes", false);
Mscrm.IAdvancedFindClientControl = function() {};
Mscrm.IAdvancedFindClientControl.registerInterface("Mscrm.IAdvancedFindClientControl");
Mscrm.IAdvancedFindValueControl = function() {};
Mscrm.IAdvancedFindValueControl.registerInterface("Mscrm.IAdvancedFindValueControl");
Mscrm.IFetchXmlConstructor = function() {};
Mscrm.IFetchXmlConstructor.registerInterface("Mscrm.IFetchXmlConstructor");
Mscrm.IAdvancedFindContainerControl = function() {};
Mscrm.IAdvancedFindContainerControl.registerInterface("Mscrm.IAdvancedFindContainerControl");
Mscrm.AdvancedFindGroupEventArgs = function(operation) {
    Mscrm.AdvancedFindGroupEventArgs.initializeBase(this);
    this.operation = operation
};
Mscrm.AdvancedFindGroupEventArgs.prototype = { operation: null };
Mscrm.ResetModeWhenFetchLoaded = function(mode, advFind) {
    this.$$d_onFetchLoaded = Function.createDelegate(this, this.onFetchLoaded);
    this.$B_0 = mode;
    this.$1e_0 = advFind
};
Mscrm.ResetModeWhenFetchLoaded.prototype = {
    $B_0: 0,
    $1e_0: null,
    onFetchLoaded: function() {
        if (this.$1e_0.get_fetchXmlLoaded()) this.$1e_0.$M_3 = this.$B_0;
        else window.setTimeout(this.$$d_onFetchLoaded, 3)
    }
};
Mscrm.AdvancedFind = function(element) {
    this.$$d_$3S_3 = Function.createDelegate(this, this.$3S_3);
    this.$$d_$3N_3 = Function.createDelegate(this, this.$3N_3);
    this.$$d_$2h_3 = Function.createDelegate(this, this.$2h_3);
    Mscrm.AdvancedFind.initializeBase(this, [element])
};
Mscrm.AdvancedFind.$3d = function($p0) {
    while ($p0) {
        if ($p0.nodeType === 1 && $p0.nodeName === "link-entity") return $p0;
        $p0 = $p0.parentNode
    }
    return null
};
Mscrm.AdvancedFind.$2j = function($p0) {
    var $v_0 = "under,not-under";
    if (!IsNull($p0) &&
        $p0.$a_3 &&
        !IsNull($p0.$E_3) &&
        $p0.$E_3.get_dataType() !== "primarykey" &&
        $v_0.indexOf($p0.get_operator()) > -1) return true;
    return false
};
Mscrm.AdvancedFind.prototype = {
    $9_3: false,
    $i_3: null,
    $O_3: null,
    $C_3: null,
    $1l_3: null,
    $d_3: "",
    $x_3: "",
    $1r_3: false,
    $12_3: false,
    $1n_3: false,
    $u_3: null,
    initialize: function() {
        this.set_isDirty(false);
        this.$R_3 = false;
        this.$k_3 = this.get_element().getAttribute("QueryListVisible") === "1";
        this.$18_3 = this.get_element().getAttribute("TitleVisible") === "1";
        this.$1U_3 = this.get_element().getAttribute("EntityListVisible") === "1";
        this.$s_3 = this.get_element().getAttribute("RelatedEntitiesVisible") === "1";
        this.$q_3 = this.get_element().getAttribute("IncludeAPIQuery") === "1";
        this.$z_3 = this.get_element().getAttribute("IncludeSystemQuery") === "1";
        this.$r_3 = this.get_element().getAttribute("IncludeUserQuery") === "1";
        this.$B_3 = IsNull(this.get_element().getAttribute("Mode"))
            ? 0
            : parseInt(this.get_element().getAttribute("Mode"), 10);
        this.$13_3 = IsNull(this.get_element().getAttribute("Modes"))
            ? 0
            : parseInt(this.get_element().getAttribute("Modes"), 10);
        this.$M_3 = IsNull(this.get_element().getAttribute("FetchMode"))
            ? 2
            : parseInt(this.get_element().getAttribute("FetchMode"), 10);
        this.$1g_3 = IsNull(this.get_element().getAttribute("Buttons"))
            ? 0
            : parseInt(this.get_element().getAttribute("Buttons"), 10);
        this.$1G_3 = this.get_element().getAttribute("CanCreateUserQuery") === "1";
        this.$1R_3 = this.get_element().getAttribute("CanWriteUserQuery") === "1";
        this.$19_3 = this.get_element().getAttribute("DistinctFetch") === "1";
        this.set_saveChangesAlert(this.get_element().getAttribute("SaveChangesAlert") === "1");
        this.$1V_3 = this.get_element().getAttribute("FilterControlVisible") === "1";
        this.$y_3 = this.get_element().getAttribute("DisableValueControlInSimpleMode") === "1";
        this.$1M_3 = this.get_element().getAttribute("ShowChangeGroupMenu") === "1";
        this.$l_3 = this.get_element().getAttribute("ShowOnlyFilterControl") === "1";
        this.$F_3 = this.get_element().getAttribute("ReadOnlyMode") === "1";
        if (!IsNull(this.get_element()
                .getAttribute("EntityName")) &&
            IsNull(this.$2_3)) this.$2_3 = this.get_element().getAttribute("EntityName");
        if (!IsNull(this.get_element().getAttribute("QueryId"))) {
            this.$7_3 = this.get_element().getAttribute("QueryId");
            this.$Z_3 = parseInt(this.get_element().getAttribute("QueryObjectType"), 10)
        }
        this.$1t_3 = this.get_element().getAttribute("UIProvider");
        this.$1h_3 = this.get_element().getAttribute("DataProvider");
        this.$t_3 = parseInt(this.get_element().getAttribute("ValidQueryType"), 10);
        !this.$l_3 && ConfigureToolbars(this);
        if (IsNull(Mscrm.AdvFind.get_ClientCache())) {
            Mscrm.AdvFind.set_ClientCache(new CacheManager);
            Mscrm.AdvFind.get_ClientCache().Initialize(null);
            Mscrm.AdvFind.get_ClientCache().OnPopulateFieldList = this.$1p_3
        }
        this.$3_3 = Mscrm.AdvFind.get_ClientCache();
        if (this.$k_3) {
            var $v_0 = $get(Mscrm.AdvFind.getControlId(this.get_id(), "ctrlQueryList"));
            if (IsNull($v_0)) {
                $v_0 = $get("ctrlQueryList", this.get_element());
                $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "ctrlQueryList")
            }
            var $v_1 = {};
            $v_1["onQueryChange"] = this.$$d_$2h_3;
            this.$C_3 = $create(Mscrm.QueryList, null, $v_1, null, $v_0)
        }
        if (IsNull(Mscrm.AdvancedFindCommon.ControlsCache)) {
            Mscrm.AdvancedFindCommon.ControlsCache = [];
            this.$35_3()
        }
        this.$2V_3();
        this.$2W_3();
        this.$9_3 = true;
        this.set_fetchXml(this.$i_3);
        this.$i_3 = null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$C_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$C_3);
            this.$C_3 = null
        }
        if (!IsNull(this.$O_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$O_3);
            this.$O_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    add_onSave: function(value) { this.get_events().addHandler("OnSave", value) },
    remove_onSave: function(value) { this.get_events().removeHandler("OnSave", value) },
    add_onSaveAs: function(value) { this.get_events().addHandler("OnSaveAs", value) },
    remove_onSaveAs: function(value) { this.get_events().removeHandler("OnSaveAs", value) },
    add_onAfterSave: function(value) { this.get_events().addHandler("OnAfterSave", value) },
    remove_onAfterSave: function(value) { this.get_events().removeHandler("OnAfterSave", value) },
    add_onAfterSaveAs: function(value) { this.get_events().addHandler("OnAfterSaveAs", value) },
    remove_onAfterSaveAs: function(value) { this.get_events().removeHandler("OnAfterSaveAs", value) },
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
    $8_3: null,
    $2_3: null,
    $R_3: false,
    $B_3: 0,
    $13_3: 0,
    $1g_3: 0,
    $M_3: 0,
    $1G_3: false,
    $1R_3: false,
    $3_3: null,
    $t_3: 0,
    $Z_3: 0,
    $z_3: false,
    $q_3: false,
    $r_3: false,
    $7_3: null,
    $18_3: false,
    $1U_3: false,
    $k_3: false,
    $19_3: false,
    $s_3: false,
    $1V_3: false,
    $g_3: null,
    $y_3: false,
    $1M_3: false,
    $1t_3: null,
    $1h_3: null,
    $11_3: null,
    $l_3: false,
    $F_3: false,
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_container: function() { return this },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_isNameOrDescDirty: function() { return this.$R_3 },
    set_isNameOrDescDirty: function(value) {
        this.$R_3 = value;
        return value
    },
    get_mode: function() { return this.$B_3 },
    set_mode: function(value) {
        this.$B_3 = value;
        return value
    },
    get_modes: function() { return this.$13_3 },
    set_modes: function(value) {
        this.$13_3 = value;
        return value
    },
    get_buttons: function() { return this.$1g_3 },
    set_buttons: function(value) {
        this.$1g_3 = value;
        return value
    },
    get_fetchMode: function() { return this.$M_3 },
    set_fetchMode: function(value) {
        this.$M_3 = value;
        return value
    },
    get_canCreateUserQuery: function() { return this.$1G_3 },
    set_canCreateUserQuery: function(value) {
        this.$1G_3 = value;
        return value
    },
    get_canWriteUserQuery: function() { return this.$1R_3 },
    set_canWriteUserQuery: function(value) {
        this.$1R_3 = value;
        return value
    },
    get_clientCache: function() { return this.$3_3 },
    set_clientCache: function(value) {
        this.$3_3 = value;
        return value
    },
    get_validQueryType: function() { return this.$t_3 },
    set_validQueryType: function(value) {
        this.$t_3 = value;
        return value
    },
    get_queryObjectType: function() { return this.$Z_3 },
    set_queryObjectType: function(value) {
        this.$Z_3 = value;
        return value
    },
    get_includeSystemQuery: function() { return this.$z_3 },
    set_includeSystemQuery: function(value) {
        this.$z_3 = value;
        return value
    },
    get_includeAPIQuery: function() { return this.$q_3 },
    set_includeAPIQuery: function(value) {
        this.$q_3 = value;
        return value
    },
    get_includeUserQuery: function() { return this.$r_3 },
    set_includeUserQuery: function(value) {
        this.$r_3 = value;
        return value
    },
    get_queryId: function() { return this.$7_3 },
    set_queryId: function(value) {
        this.$7_3 = value;
        return value
    },
    get_titleVisible: function() { return this.$18_3 },
    set_titleVisible: function(value) {
        this.$18_3 = value;
        return value
    },
    get_entityListVisible: function() { return this.$1U_3 },
    set_entityListVisible: function(value) {
        this.$1U_3 = value;
        return value
    },
    get_queryListVisible: function() { return this.$k_3 },
    set_queryListVisible: function(value) {
        this.$k_3 = value;
        return value
    },
    get_distinctFetch: function() { return this.$19_3 },
    set_distinctFetch: function(value) {
        this.$19_3 = value;
        return value
    },
    get_relatedEntitiesVisible: function() { return this.$s_3 },
    set_relatedEntitiesVisible: function(value) {
        this.$s_3 = value;
        return value
    },
    get_filterControlVisible: function() { return this.$1V_3 },
    set_filterControlVisible: function(value) {
        this.$1V_3 = value;
        return value
    },
    get_layoutXml: function() { return this.$g_3 },
    set_layoutXml: function(value) {
        this.$g_3 = value;
        return value
    },
    get_disableValueControlInSimpleMode: function() { return this.$y_3 },
    set_disableValueControlInSimpleMode: function(value) {
        this.$y_3 = value;
        return value
    },
    get_showChangeGroupMenu: function() { return this.$1M_3 },
    set_showChangeGroupMenu: function(value) {
        this.$1M_3 = value;
        return value
    },
    get_uiProvider: function() { return this.$1t_3 },
    set_uiProvider: function(value) {
        this.$1t_3 = value;
        return value
    },
    get_dataProvider: function() { return this.$1h_3 },
    set_dataProvider: function(value) {
        this.$1h_3 = value;
        return value
    },
    get_visibleControl: function() { return this.$11_3 },
    set_visibleControl: function(value) {
        this.$11_3 = value;
        return value
    },
    get_queryListControl: function() { return this.$C_3 },
    get_showOnlyFilterControl: function() { return this.$l_3 },
    set_showOnlyFilterControl: function(value) {
        this.$l_3 = value;
        return value
    },
    get_isReadOnly: function() { return this.$F_3 },
    set_isReadOnly: function(value) {
        this.$F_3 = value;
        return value
    },
    $1p_3: null,
    $2A_3: null,
    $2B_3: null,
    $1q_3: null,
    $1o_3: null,
    $1K_3: null,
    $1J_3: null,
    get_onPopulateFieldList: function() { return this.$1p_3 },
    set_onPopulateFieldList: function(value) {
        this.$1p_3 = value;
        return value
    },
    get_onPopulatePrimaryEntityList: function() { return this.$2A_3 },
    set_onPopulatePrimaryEntityList: function(value) {
        this.$2A_3 = value;
        return value
    },
    get_onPopulateRelatedEntityList: function() { return this.$2B_3 },
    set_onPopulateRelatedEntityList: function(value) {
        this.$2B_3 = value;
        return value
    },
    get_onPopulateOperatorList: function() { return this.$1q_3 },
    set_onPopulateOperatorList: function(value) {
        this.$1q_3 = value;
        return value
    },
    get_onCreateValueControl: function() { return this.$1o_3 },
    set_onCreateValueControl: function(value) {
        this.$1o_3 = value;
        return value
    },
    get_onGetViewInfo: function() { return this.$1K_3 },
    set_onGetViewInfo: function(value) {
        this.$1K_3 = value;
        return value
    },
    get_onGetFetchAttributes: function() { return this.$1J_3 },
    set_onGetFetchAttributes: function(value) {
        this.$1J_3 = value;
        return value
    },
    Clone: function(callback, newId, properties) {
        var $v_0 = [], $v_1 = this.get_element().cloneNode(true);
        $v_1.id = newId;
        callback($v_1);
        if (!IsNull(this.$C_3)) {
            var $v_3 = $get(this.$C_3.get_id(), $v_1);
            $v_3.id = Mscrm.AdvFind.getControlId(newId, "ctrlQueryList")
        }
        this.$3T_3(newId, $v_1, $v_0);
        for (var $v_4 = 0; $v_4 < $v_0.length; $v_4++)
            $create(Microsoft.Crm.CommandBar.MenuBarControl, null, null, null, $v_0[$v_4]);
        var $v_2 = $create(Mscrm.AdvancedFind, properties, null, null, $v_1);
        $v_2.$B_3 = this.$B_3;
        $v_2.$M_3 = this.$M_3;
        $v_2.$19_3 = this.$19_3;
        $v_2.set_saveChangesAlert(this.$1r_3);
        $v_2.$s_3 = this.$s_3;
        return $v_1
    },
    $3T_3: function($p0, $p1, $p2) {
        for (var $v_0 = $p1.getElementsByTagName("DIV"), $v_1 = 0, $v_2 = 0, $v_3 = $v_0.length; $v_2 < $v_3; $v_2++) {
            var $v_4 = $v_0[$v_2];
            if ($v_4.className === "ms-crm-GridActionBar") {
                var $v_5 = $v_4.id;
                $v_4.id = $p0 + $v_5.substring(this.get_id().length, $v_5.length);
                $p2[$p2.length] = $v_4;
                $v_1 = $v_1 + 1;
                if ($v_1 === 2) break
            }
        }
    },
    get_shownInSimple: function() {
        if (this.$9_3) return this.$O_3.get_element().style.display === "block";
        if (IsNull(this.$i_3)) return false;
        var $v_0 = XUI.Xml.LoadXml(this.$i_3);
        return !IsNull(XUI.Xml.SelectSingleNode($v_0, ".//condition[(not(@uihidden) or @uihidden='0')]", null))
    },
    get_saveChangesAlert: function() { return this.$1r_3 },
    set_saveChangesAlert: function(value) {
        this.$1r_3 = value;
        if (value) attachWindowOnBeforeUnload(this.$$d_$3N_3, window.self);
        else detachWindowOnBeforeUnload(this.$$d_$3N_3, window.self);
        return value
    },
    get_isDirty: function() { return this.$12_3 },
    set_isDirty: function(value) {
        this.$12_3 = value;
        this.fireControlEvent("OnChange", Sys.EventArgs.Empty);
        return value
    },
    $3N_3: function($p0) {
        if (this.$l_3) return;
        if (!this.$12_3 && !this.$R_3) return;
        var $v_0;
        if (Mscrm.Utilities
            .get_ieBrowserVersion() ===
            7 ||
            Mscrm.Utilities.get_ieBrowserVersion() === 8)
            $v_0 = window.LOCID_AF_SEARCHMODIFIED_TITLE + "\n\n" + window.LOCID_AF_ONWINCLOSE_MSG;
        else $v_0 = window.LOCID_AF_SEARCHMODIFIED_TITLE;
        $p0.rawEvent.returnValue = $v_0;
        return $v_0
    },
    $2W_3: function() {
        this.$k_3 && this.$37_3();
        if (!IsNull(this.$7_3) && !IsNull(this.$Z_3)) return this.Load(this.$7_3, this.$Z_3);
        else if (IsNull(this.$i_3)) return this.$25_3();
        else return this.$3L_3()
    },
    $2V_3: function() {
        if (!this.$1U_3) return;
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("slctPrimaryEntity");
        if (!IsNull($v_0)) {
            $addHandler($v_0.get_element(), "change", this.$$d_$3S_3);
            $v_0.set_selectedIndex(-1);
            $v_0.set_dataValue(this.$2_3);
            this.$2_3 = $v_0.get_dataValue();
            if (IsNull(this.$2_3) && !IsNull($v_0.get_options()[0])) {
                $v_0.set_dataValue($v_0.get_options()[0].DataValue);
                this.$2_3 = $v_0.get_dataValue();
                this.$7_3 = null
            }
        }
    },
    $3S_3: function($p0) {
        var $v_0 = this.$2_3, $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0.target);
        this.$2_3 = $v_1.get_dataValue();
        if (!(this.$12_3 || this.$R_3) ||
            confirm(window.LOCID_AF_SEARCHMODIFIED_TITLE + "\n\n" + window.LOCID_AF_SEARCHMODIFIED_MSG)) {
            this.$7_3 = null;
            if (this.$2W_3()) {
                refreshRibbon();
                return
            }
        }
        this.$2_3 = $v_0;
        $v_1.set_dataValue(this.$2_3);
        refreshRibbon()
    },
    $2E_3: function() {
        var $v_0 = $get("spnDetailed", this.get_element());
        if (!IsNull(XUI.Html.DomUtils.GetFirstChild($v_0))) {
            Mscrm.AdvFind.disposeDirectChilds($v_0);
            $v_0.innerHTML = ""
        }
        var $v_1 = window.document.createElement("Crm:FilterControl");
        $v_1.id = Mscrm.AdvFind.getControlId(this.get_id(), "E");
        $v_1.className = "FilterControl";
        $v_0.appendChild($v_1);
        var $v_2 = {};
        $v_2["parentControl"] = this;
        $v_2["container"] = this.get_container();
        $v_2["entityName"] = this.$2_3;
        $v_2["isReadOnly"] = this.$F_3;
        this.$O_3 = $create(Mscrm.FilterControl, $v_2, null, null, $v_1);
        this.$O_3.get_element().style.height = "auto";
        if (this.$F_3) this.$O_3.get_element().disabled = true;
        this.$2o_3()
    },
    ConfigureMode: function() {
        this.$2o_3();
        Mscrm.AdvancedFindCommon.HideVisibleControl(this);
        var $v_0 = [], $v_1 = {}, $v_2;
        $v_0.push(this.$O_3.get_element());
        while ($v_0.length > 0) {
            var $v_3 = $find($v_0.pop().id);
            if ($v_1[$v_3.get_id()]) {
                $v_3.SetMode(this.$B_3);
                delete $v_1[$v_3.get_id()]
            } else {
                var $v_4 = null;
                if (Mscrm.AdvFind.isImplementsAdvancedFindContainerControl($v_3)) $v_4 = $v_3.get_children();
                if (IsNull($v_4) || !$v_4.length) $v_3.SetMode(this.$B_3);
                else {
                    $v_1[$v_3.get_id()] = true;
                    $v_0.push($v_3.get_element());
                    $v_2 = $v_4.length;
                    while ($v_2 > 0) {
                        $v_2--;
                        $v_0.push($v_4[$v_2])
                    }
                }
            }
        }
        this.$3b_3()
    },
    SetFocus: function() { !IsNull(this.$O_3) && this.$O_3.SetFocus() },
    $3b_3: function() {
        if (IsNull(this.$O_3)) return;
        var $v_0 = $get("spnInlineMsg", this.get_element()), $v_1 = $get("spnDetailed", this.get_element());
        if (this.$B_3 === 1)
            if (this.$O_3.get_element().style.display === "block") {
                $v_0.style.display = "none";
                $v_1.style.display = "block"
            } else {
                XUI.Html.SetText($v_0, window.LOCID_AF_ALLHIDDENMSG);
                $v_0.style.display = "block";
                $v_1.style.display = "none"
            }
        else if ($v_0.style.display === "block") $v_0.style.display = "none";
        $v_1.style.display = "block"
    },
    $2o_3: function() {
        var $v_0 = $get("DetailedToolBar", this.get_element()), $v_1 = $get("SimpleToolBar", this.get_element());
        if (IsNull($v_0) || IsNull($v_1)) return;
        var $v_2 = $get("spnInlineMsg", this.get_element()), $v_3 = $get("spnDetailed", this.get_element());
        switch (this.$B_3) {
        case 2:
            $v_0.style.display = "block";
            if (this.$13_3 & 1) {
                $v_2.style.display = "none";
                $v_1.style.display = "none"
            }
            $v_3.style.display = "block";
            break;
        case 1:
            XUI.Html.SetText($v_2, window.LOCID_AF_ALLHIDDENMSG);
            $v_2.style.display = "block";
            $v_3.style.display = "none";
            if (this.$13_3 & 2) $v_0.style.display = "none";
            if (!IsNull($get(this.get_id() + "mnuBar6", this.get_element()))) $v_1.style.display = "block";
            else $v_1.style.display = "none";
            break
        }
    },
    $35_3: function() {
        var $v_0 = $get("lookup", this.get_element()),
            $v_1 = $get("date", this.get_element()),
            $v_2 = $get("txt", this.get_element()),
            $v_3 = $get("num", this.get_element()),
            $v_4 = $get("picklist", this.get_element()),
            $v_5 = $get("fiscalperiodandyear", this.get_element());
        this.$3_3.PutElement("ValueControl", "lookup", $v_0.removeChild(XUI.Html.DomUtils.GetFirstChild($v_0)));
        this.$3_3.PutElement("ValueControl", "date", $v_1.removeChild(XUI.Html.DomUtils.GetFirstChild($v_1)));
        this.$3_3.PutElement("ValueControl", "string", $v_2.removeChild(XUI.Html.DomUtils.GetFirstChild($v_2)));
        this.$3_3.PutElement("ValueControl", "number", $v_3.removeChild(XUI.Html.DomUtils.GetFirstChild($v_3)));
        this.$3_3.PutElement("ValueControl", "picklist", $v_4.removeChild(XUI.Html.DomUtils.GetFirstChild($v_4)));
        this.$3_3.PutElement("ValueControl",
            "fiscalperiodandyear",
            $v_5.removeChild(XUI.Html.DomUtils.GetFirstChild($v_5)))
    },
    get_fetchXml: function() {
        var $v_0 = "", $v_1 = false;
        Mscrm.AdvFind.set_AliasForLinkEntity("");
        var $v_2 = "under,not-under", $v_3 = [];
        $v_3.push(this.$O_3.get_element());
        var $v_4 = false;
        while ($v_3.length > 0) {
            var $v_A = $v_3.pop();
            if (typeof $v_A === "string") {
                $v_0 += $v_A;
                continue
            }
            var $v_B = $find($v_A.id);
            if (Mscrm.AdvFind.isImplementsFetchXmlConstructor($v_B)) {
                var $v_C = $v_B.GetFetchStartElement();
                if (IsNull($v_C)) {
                    $v_1 = true;
                    break
                }
                if (Mscrm.AdvFind.isFilterField($v_B)) {
                    var $v_D = $v_B, $v_E = $v_D.$E_3.getFieldList().get_selectedOption();
                    if ($v_E.getAttribute("datatype") === "lookup" &&
                        Mscrm.Utilities.parseBoolean($v_E.getAttribute("hierarchyenabled")) &&
                        $v_2.indexOf($v_D.get_operator()) > -1) {
                        var $v_F = $v_D.get_value(),
                            $v_G =
                                GetNextAliasForLinkEntity(this.get_container().$g_3,
                                    this.get_container().get_element().getAttribute("aliasesInInitialFetch"));
                        $v_C = $v_C.replace('attribute="' + $v_E.getAttribute("value").toString() + '"',
                            'attribute="' + $v_E.getAttribute("referencedattribute").toString() + '"');
                        $v_C = $v_C.replace("/>",
                            ' name="' +
                            $v_F[0].typename +
                            '" to= "' +
                            $v_E.getAttribute("value").toString() +
                            '" alias= "' +
                            $v_G +
                            '"  type="lookup" />')
                    }
                }
                $v_0 += $v_C
            }
            if (Mscrm.AdvFind.isImplementsFetchXmlConstructor($v_B) && !Mscrm.AdvFind.isFilterField($v_B)) {
                var $v_H = $v_B.GetFetchEndElement();
                if (IsNull($v_H)) {
                    $v_1 = true;
                    break
                }
                $v_3.push($v_H)
            }
            if (Mscrm.AdvFind.isImplementsAdvancedFindContainerControl($v_B)) {
                var $v_I = $v_B.get_children();
                if (!IsNull($v_I) && $v_I.length) {
                    var $v_J = $v_I.length;
                    while ($v_J > 0) {
                        $v_J--;
                        $v_3.push($v_I[$v_J])
                    }
                }
            }
            if (Mscrm.AdvFind.isFilterEntity($v_B) && "many-to-one" !== $v_B.$1L_3) $v_4 = true
        }
        if ($v_1) {
            var $v_K = $v_3.length;
            while ($v_K > 0) {
                $v_3.pop();
                $v_K--
            }
            return null
        }
        var $v_5 = null;
        if (!IsNull(this.$1J_3) && typeof this.$1J_3 === "function") {
            var $v_L = this.$1J_3;
            $v_5 = $v_L(null)
        } else $v_5 = this.$1l_3;
        var $v_6 = new RegExp("<\\s*link-entity\\s", "m"), $v_7 = this.$19_3 && $v_0.search($v_6) !== -1;
        $v_7 = !!($v_7 & $v_4);
        var $v_8 = '<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="' +
            ($v_7 ? "true" : "false") +
            '"><entity name="' +
            CrmEncodeDecode.CrmXmlEncode(this.$2_3) +
            '">' +
            $v_5 +
            $v_0 +
            "</entity></fetch>";
        if (this.$M_3 === 8) {
            var $v_M = XUI.Xml.LoadXml($v_8);
            $v_8 = this.$2r_3($v_M)
        }
        var $v_9 = this.$3U_3($v_8);
        return $v_9
    },
    set_fetchXml: function(value) {
        this.$u_3 = null;
        if (isNullOrEmptyString(value)) {
            this.$u_3 = XUI.Xml.LoadXml("<fetch/>");
            this.get_element().setAttribute("aliasesInInitialFetch", "");
            return value
        }
        if (!this.$9_3)
            if (IsNull(this.$i_3)) {
                this.$i_3 = value;
                return value
            }
        this.$u_3 = XUI.Xml.LoadXml(value);
        if (Mscrm.XmlUtil.handleXMLErr(this.$u_3, false) !== window.ERROR_NONE) return value;
        for (var $v_0 = new Sys.StringBuilder,
            $v_1 = XUI.Xml.SelectNodes(this.$u_3, "//fetch/entity//link-entity[@alias]", null),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) $v_0.append("|" + $v_1[$v_2].attributes.getNamedItem("alias").nodeValue + "|");
        this.get_element().setAttribute("aliasesInInitialFetch", $v_0.toString());
        if (this.$B_3 === 1)
            if (!IsNull(this.$u_3.childNodes) &&
                !IsNull(XUI.Xml.SelectSingleNode(this.$u_3, ".//condition[(not(@uihidden) or @uihidden='0')]", null))) {
                $get("spnInlineMsg", this.get_element()).style.display = "none";
                $get("spnDetailed", this.get_element()).style.display = "block"
            } else {
                $get("spnInlineMsg", this.get_element()).style.display = "block";
                $get("spnDetailed", this.get_element()).style.display = "none"
            }
        if (IsNull(this.$O_3)) return value;
        this.$O_3.setFetchXml(XUI.Xml.SelectSingleNode(this.$u_3, "//fetch/entity", null));
        this.$1l_3 = GetFetchAttributes(value);
        return value
    },
    $2r_3: function($p0) {
        for (var $v_0 = XUI.Xml.SelectNodes($p0, ".//filter[not(.//condition)]", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) $v_0[$v_1].parentNode.removeChild($v_0[$v_1]);
        return XUI.Xml.XMLSerializer.serializeToString($p0)
    },
    $3U_3: function($p0) {
        this.$1n_3 = false;
        var $v_0 = XUI.Xml.LoadXml($p0),
            $v_1 = XUI.Xml.SelectNodes($v_0,
                '//filter/condition[(@operator="under" or @operator="not-under") and @type ="lookup"]',
                null);
        if ($v_1 && $v_1.length > 0) {
            this.$1n_3 = true;
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2],
                    $v_4 = this.$3R_3($v_3),
                    $v_5 = XUI.Xml.SelectSingleNode(XUI.Xml.LoadXml($v_4), "/RootNode/link-entity", null),
                    $v_6 = Mscrm.AdvancedFind.$3d($v_3);
                if (IsNull($v_6)) XUI.Xml.SelectSingleNode($v_0, "//fetch/entity", null).appendChild($v_5);
                else $v_6.appendChild($v_5);
                $v_3.parentNode.removeChild($v_3)
            }
        }
        return this.$2r_3($v_0)
    },
    $3R_3: function($p0) {
        var $v_0 = "",
            $v_1 = XUI.Xml.GetText($p0.attributes.getNamedItem("attribute")),
            $v_2 = "",
            $v_3 = $p0.attributes;
        $v_2 += '<condition attribute="' + $v_1 + '" operator="' + XUI.Xml.GetText($v_3.getNamedItem("operator"));
        $v_2 += '"  uiname="' +
            XUI.Xml.GetText($v_3.getNamedItem("uiname")) +
            '"  uitype="' +
            XUI.Xml.GetText($v_3.getNamedItem("uitype"));
        $v_2 += '"  value="' + XUI.Xml.GetText($v_3.getNamedItem("value")) + '" />';
        $v_0 += String
            .format('<RootNode><link-entity name="{0}" from="{1}" to="{2}" alias="{3}" link-type="inner"><filter type="and">{4}</filter></link-entity></RootNode>', XUI.Xml.GetText($p0.attributes.getNamedItem("name")), $v_1, XUI.Xml.GetText($p0.attributes.getNamedItem("to")), XUI.Xml.GetText($p0.attributes.getNamedItem("alias")), $v_2);
        return $v_0
    },
    get_fetchXmlLoaded: function() {
        if (!this.$9_3 || IsNull(this.$u_3)) return false;
        return IsNull(XUI.Xml.SelectSingleNode(this.$u_3, "//condition[not(@done)]|//link-entity[not(@done)]", null))
    },
    Save: function() { this.$2s_3(false) },
    SaveAs: function() { this.$2s_3(true) },
    $2s_3: function($p0) {
        var $v_0 = new Mscrm.CrmEventArgs;
        this.fireControlEvent($p0 ? "OnSaveAs" : "OnSave", $v_0);
        var $v_1 = null,
            $v_2 = ($p0 || this.$12_3 || this.$R_3 || IsDefaultAdvancedFindView(this.$7_3, this.$2_3, this.$3_3)) &&
                !$v_0.get_isDefaultPrevented();
        if ($v_2) {
            var $v_3 = [$p0, $v_0, $v_2];
            $v_1 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterSaveHelper", this, $v_3, false);
            this.$3X_3($p0, $v_1)
        } else this.performActionAfterSaveHelper(true, $p0, $v_0, $v_2)
    },
    performActionAfterSaveHelper: function(isSaveQuery, saveAs, args, callSaveQuery) {
        if (callSaveQuery) !isSaveQuery && args.preventDefault();
        if (!args.get_isDefaultPrevented()) {
            this.fireControlEvent(saveAs ? "OnAfterSaveAs" : "OnAfterSave", args);
            this.$1n_3 && this.Load(this.$C_3.$7_3, this.$C_3.get_queryObjectType())
        }
        return !args.get_isDefaultPrevented()
    },
    Group: function(op) {
        var $v_0 = new Mscrm.AdvancedFindGroupEventArgs(op);
        this.fireControlEvent("OnGroup", $v_0);
        if ($v_0.get_isDefaultPrevented()) return;
        if (this.$B_3 === 2) {
            var $v_1 = [], $v_2 = false, $v_3 = 0, $v_4, $v_5 = false;
            $v_1.push(this.$O_3.get_element());
            while ($v_1.length > 0) {
                var $v_6 = $v_1.pop();
                if (Mscrm.AdvFind.checkControlByTagName($v_6.tagName, "Crm:FilterFieldGroup")) {
                    $v_4 = $find($v_6.id).Group(op);
                    $v_3 += $v_4;
                    $v_2 = $v_2 || $v_4 === 1
                }
                var $v_7 = $find($v_6.id);
                if (IsNull($v_7) || !Mscrm.AdvFind.isImplementsAdvancedFindContainerControl($v_7)) {
                    var $v_A = $v_7;
                    if (Mscrm.AdvancedFind.$2j($v_A)) $v_5 = true;
                    continue
                }
                var $v_8 = $v_7.get_children();
                if (IsNull($v_8) || !$v_8.length) continue;
                var $v_9 = $v_8.length;
                while ($v_9 > 0) {
                    $v_9--;
                    $v_1.push($v_8[$v_9])
                }
            }
            if ($v_5) alert(window.LOCID_AF_HIERARCHIAL_ERROR_MSG);
            else ($v_2 || !$v_3) && alert(window.LOCID_AF_ERRORGROUPING_MSG);
            this.set_isDirty(true)
        }
    },
    EditProperties: function() {
        var $v_0 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterEditProperties", this, null, false);
        this.$2g_3(this.$7_3, this.$Z_3, $v_0)
    },
    performActionAfterEditProperties: function(isGetViewInfo) {
        if ((this.$R_3 || isGetViewInfo) && this.$Z_3 === 4230) {
            if (this.$2z_3(this.$7_3, this.$d_3, this.$x_3, this.$i_3, this.$g_3)) {
                var $v_0 = this.$3_3.GetElement("UserQuery", this.$7_3, null);
                $v_0.FetchXml = this.$i_3;
                $v_0.LayoutXml = this.$g_3;
                $v_0.Name = this.$d_3;
                $v_0.Description = this.$x_3;
                if (this.$k_3 && this.$R_3) this.$C_3.$J_3.set_selectedText(this.$d_3);
                else this.$18_3 && XUI.Html.SetText($get("tdTitle", this.get_element()), this.$d_3);
                this.set_isDirty(false);
                this.$R_3 = false
            }
        } else this.$R_3 = this.$R_3 || isGetViewInfo
    },
    EditView: function() {
        if (IsNull(this.$7_3)) this.$7_3 = this.$C_3.$7_3;
        var $v_0 = {}, $v_1 = this.$M_3;
        this.$M_3 = 4;
        var $v_2 = this.get_fetchXml();
        this.$M_3 = $v_1;
        if (IsNull($v_2)) return;
        $v_0["FetchXml"] = $v_2;
        $v_0["LayoutXml"] = this.$g_3;
        var $v_3 = [$v_1],
            $v_4 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterEditView", this, $v_3, false),
            $v_5 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/AdvancedFind/dialogs/dlg_editview.aspx?EntityName=" +
                    this.$2_3),
                $v_0,
                800,
                450,
                null);
        $v_5.setCallbackReference($v_4);
        $v_5.show()
    },
    performActionAfterEditView: function(result, oldFetchMode) {
        if (!IsNull(result) && result["IsDirty"]) {
            this.Clear(false, true);
            oldFetchMode = this.$M_3;
            this.$M_3 = 4;
            this.set_fetchXml(result["FetchXml"]);
            var $v_0 = new Mscrm.ResetModeWhenFetchLoaded(oldFetchMode, this);
            window.setTimeout($v_0.$$d_onFetchLoaded, 3);
            this.$g_3 = result["LayoutXml"];
            this.set_isDirty(true)
        }
    },
    $2Y_3: function($p0, $p1, $p2) {
        var $v_0 = $get("btnSave", $p1), $v_1 = $get("btnSaveAs", $p1);
        if (!IsNull($v_0))
            if (IsDefaultAdvancedFindView($p2.QueryId, $p2.EntityName, this.$3_3) && this.$1G_3 ||
                $p2.QueryType === 4230 && this.$1R_3 && $p2.CanWrite) $p0.disableItem($v_0, false);
            else $p0.disableItem($v_0, true);
        if (!IsNull($v_1))
            if (!this.$1G_3) $p0.disableItem($v_1, true);
            else $p0.disableItem($v_1, false)
    },
    $2T_3: function($p0) {
        var $v_0 = IsNull($p0.FetchXml) || !$p0.FetchXml.trim().length, $v_1 = $find(this.get_id() + "mnuBar7");
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1.get_element()),
                $v_3 = $get("btnSave", $v_2),
                $v_4 = $get("btnSaveAs", $v_2),
                $v_5 = $get("btnEditView", $v_2),
                $v_6 = $get("btnNew", $v_2);
            PerformToolbarOperation("disable", $v_1, $v_3, $v_0);
            PerformToolbarOperation("disable", $v_1, $v_4, $v_0);
            PerformToolbarOperation("disable", $v_1, $v_5, $v_0);
            PerformToolbarOperation("disable", $v_1, $v_6, false)
        }
        $v_1 = $find(this.get_id() + "mnuBar5");
        if (!IsNull($v_1) && this.$13_3 & 2) {
            var $v_7 = XUI.Html.DomUtils.GetFirstChild($v_1.get_element());
            PerformToolbarOperation("disable", $v_1, $get("btnSimple", $v_7), $v_0);
            PerformToolbarOperation("disable", $v_1, $get("btnAnd", $v_7), $v_0);
            PerformToolbarOperation("disable", $v_1, $get("btnOr", $v_7), $v_0);
            PerformToolbarOperation("disable", $v_1, $get("btnClear", $v_7), $v_0);
            !$v_0 && !IsNull($v_1) && this.$2Y_3($v_1, $v_7, $p0)
        }
        $v_1 = $find(this.get_id() + "mnuBar6");
        if (!IsNull($v_1) && this.$13_3 & 1) {
            var $v_8 = XUI.Html.DomUtils.GetFirstChild($v_1.get_element());
            PerformToolbarOperation("disable", $v_1, $get("btnDetailed", $v_8), $v_0);
            !$v_0 && !IsNull($v_1) && this.$2Y_3($v_1, $v_8, $p0)
        }
    },
    Load: function(queryId, queryType) {
        var $v_0 = queryType === 1039 ? "SystemQuery" : "UserQuery", $v_1 = this.$3_3.GetElement($v_0, queryId, null);
        if (IsNull($v_1)) return false;
        return this.$2K_3($v_1)
    },
    $3L_3: function() {
        var $v_0 = XUI.Xml.LoadXml(this.$i_3),
            $v_1 = XUI.Xml.SelectSingleNode($v_0, "fetch/entity/@name", null).value,
            $v_2 = new Mscrm.AdvancedFindQueryData;
        $v_2.QueryId = "";
        $v_2.QueryType = 4230;
        $v_2.Name = "";
        $v_2.Description = "";
        $v_2.FetchXml = this.$i_3;
        $v_2.LayoutXml = "";
        $v_2.EntityName = $v_1;
        $v_2.FetchAttributes = GetFetchAttributes($v_2.FetchXml);
        return this.$2K_3($v_2)
    },
    $2K_3: function($p0) {
        if (this.$2_3 !== $p0.EntityName) {
            this.$2_3 = $p0.EntityName;
            this.$2V_3()
        }
        this.$7_3 = $p0.QueryId;
        this.$Z_3 = $p0.QueryType;
        if (this.$k_3 && this.$C_3.$7_3 !== this.$7_3) {
            this.$C_3.set_entityName(this.$2_3);
            this.$C_3.set_queryId(this.$7_3)
        }
        this.$g_3 = $p0.LayoutXml;
        !this.$k_3 && this.$18_3 && XUI.Html.SetText($get("tdTitle", this.get_element()), $p0.Name);
        this.$1V_3 && this.$2E_3();
        this.$2T_3($p0);
        if (IsNull($p0.FetchXml) || !$p0.FetchXml.trim().length || !this.$3K_3($p0.FetchXml))
            if (this.$q_3) {
                XUI.Html.SetText($get("spnInlineMsg", this.get_element()), window.LOCID_AF_SPECIALQRYMSG);
                $get("spnInlineMsg", this.get_element()).style.display = "block";
                $get("spnDetailed", this.get_element()).style.display = "none"
            } else return this.$25_3();
        else {
            $get("spnInlineMsg", this.get_element()).style.display = "none";
            $get("spnDetailed", this.get_element()).style.display = "block";
            this.$1l_3 = $p0.FetchAttributes;
            this.set_fetchXml($p0.FetchXml)
        }
        if (IsDefaultAdvancedFindView($p0.QueryId, this.$2_3, this.$3_3)) {
            this.$d_3 = window.LOCID_AF_NEWQRYTITLE;
            this.$x_3 = ""
        } else {
            this.$d_3 = $p0.Name;
            this.$x_3 = $p0.Description
        }
        this.set_isDirty(false);
        this.$R_3 = false;
        this.fireControlEvent("OnLoad", Sys.EventArgs.Empty);
        return true
    },
    $37_3: function() {
        this.$C_3.$3_3 = this.$3_3;
        this.$C_3.$t_3 = this.$t_3;
        this.$C_3.$q_3 = this.$q_3;
        this.$C_3.$z_3 = this.$z_3;
        this.$C_3.$r_3 = this.$r_3;
        this.$C_3.set_entityName(this.$2_3)
    },
    $2h_3: function($p0, $p1) {
        var $v_0 = $p1;
        if ((this.$12_3 || this.$R_3) && !confirm(window.LOCID_AF_SEARCHMODIFIED_MSG)) {
            $v_0.preventDefault();
            return
        }
        if (!this.$C_3.$J_3.get_selectedIndex()) !this.$25_3() && $v_0.preventDefault();
        else {
            this.$7_3 = this.$C_3.$7_3;
            !this.Load(this.$7_3, this.$C_3.get_queryObjectType()) && $v_0.preventDefault()
        }
    },
    $3X_3: function($p0, $p1) {
        var $v_0 = this.get_fetchXml();
        if (IsNull($v_0)) return;
        var $v_1 = IsDefaultAdvancedFindView(this.$7_3, this.$2_3, this.$3_3) && !$p0;
        if ($p0 || $v_1) {
            var $v_2 = new Mscrm.AdvancedFindQueryData, $v_3 = null;
            if ($p0 || !this.$R_3) {
                var $v_4 = [$p1, $p0, $v_2, $v_0];
                $v_3 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterSaveQuery", this, $v_4, false);
                this.$2g_3(this.$7_3, this.$Z_3, $v_3)
            }
        } else if (this.$Z_3 === 4230)
            if (this.$2z_3(this.$7_3, this.$d_3, this.$x_3, $v_0, this.$g_3)) {
                var $v_5 = this.$3_3.GetElement("UserQuery", this.$7_3, null);
                $v_5.FetchXml = $v_0;
                $v_5.LayoutXml = this.$g_3;
                $v_5.Name = this.$d_3;
                $v_5.Description = this.$x_3;
                if (this.$k_3 && this.$R_3) this.$C_3.$J_3.set_selectedText(this.$d_3);
                else this.$18_3 && XUI.Html.SetText($get("tdTitle", this.get_element()), this.$d_3);
                this.set_isDirty(false);
                this.$R_3 = false
            }
    },
    performActionAfterSaveQuery: function(isGetViewInfo, callbackRef, saveAs, queryData, fetchXml) {
        var $v_0 = false;
        if (saveAs || !this.$R_3)
            if (!isGetViewInfo) {
                Mscrm.Utilities.executeFunction(callbackRef, $v_0);
                return $v_0
            }
        queryData.Name = this.$d_3;
        queryData.Description = this.$x_3;
        if (this.$r_3) {
            queryData.EntityName = this.$2_3;
            queryData.FetchXml = fetchXml;
            queryData.LayoutXml = this.$g_3;
            queryData.QueryType = this.$t_3;
            queryData.QueryId = this.$7_3;
            queryData.SourceViewType = this.$Z_3;
            queryData = this.$39_3(queryData);
            if (!IsNull(queryData)) {
                if (queryData.QueryType === 4230) {
                    var $v_1 = window.top.opener;
                    if (!IsNull($v_1) && !IsNull($v_1.Sys)) {
                        var $v_2 = $v_1.Sys.Application.findComponent("crmPageManager");
                        if (!IsNull($v_2)) {
                            var $v_3 = null;
                            if (!IsNull(this.$C_3) &&
                                !IsNull(this.$C_3.get_element().children) &&
                                XUI.Html.DomUtils
                                .HasChildElements(this.$C_3
                                    .get_element()))
                                $v_3 = XUI.Html.DomUtils.GetFirstChild(this.$C_3.get_element())
                                    .getAttribute("ReturnedTypeCode");
                            var $v_4 = {};
                            $v_4["viewId"] = queryData.QueryId;
                            $v_4["viewType"] = queryData.QueryType;
                            $v_4["entityName"] = queryData.EntityName;
                            $v_4["viewName"] = queryData.Name;
                            $v_4["entityTypeCode"] = $v_3;
                            $v_2.raiseEvent(62, $v_4)
                        }
                    }
                }
                this.set_isDirty(false);
                this.$R_3 = false;
                this.$7_3 = queryData.QueryId;
                this.$Z_3 = 4230;
                this.$2T_3(queryData);
                if (this.$k_3) {
                    this.$C_3.set_queryId(null);
                    this.$C_3.refresh();
                    this.$C_3.set_queryId(this.$7_3)
                } else this.$18_3 && XUI.Html.SetText($get("tdTitle", this.get_element()), queryData.Name);
                this.$3_3.PutElement("UserQuery", this.$7_3, queryData)
            }
            $v_0 = true
        } else $v_0 = false;
        Mscrm.Utilities.executeFunction(callbackRef, $v_0);
        return $v_0
    },
    $39_3: function($p0) {
        if ($p0.Name.length > 0) {
            var $v_0 = {};
            $v_0["entityName"] = $p0.EntityName;
            $v_0["queryType"] = $p0.QueryType;
            $v_0["name"] = $p0.Name;
            $v_0["description"] = $p0.Description;
            $v_0["fetchXml"] = $p0.FetchXml;
            $v_0["layoutXml"] = $p0.LayoutXml;
            var $v_1 = this.$3_3.ExecuteCommand("CreateAndRetrieveUserQuery", "AdvancedFind", $v_0, null, null, null);
            if (!IsNull($v_1)) {
                var $v_2 = this.$3_3.GetQuery($v_1);
                $v_2.QueryId = GetNodeValue($v_1, "userqueryid", false);
                this.$2S_3($v_2.QueryId);
                $v_2.QueryType = 4230;
                return $v_2
            }
        }
        return null
    },
    $2S_3: function($p0) {
        if (isOutlookHostedWindow()) {
            getOutlookHostedWindow().refreshViewList();
            try {
                getOutlookHostedWindow().invalidateCacheForView($p0)
            } catch ($$e_1) {
            }
        }
    },
    $2z_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = {};
        $v_0["id"] = $p0;
        $v_0["fetchXml"] = $p3;
        $v_0["layoutXml"] = $p4;
        $v_0["name"] = $p1;
        $v_0["description"] = $p2;
        $v_0["viewType"] = 4230;
        var $v_1 = this.$3_3.ExecuteCommand("UpdateQuery", "AdvancedFind", $v_0, null, null, null);
        if (IsNull($v_1)) return false;
        isOutlookHostedWindow() && this.$2S_3($p0);
        this.set_isDirty(false);
        return true
    },
    $2g_3: function($p0, $p1, $p2) {
        var $v_0 = {};
        $v_0["sQueryId"] = $p0;
        $v_0["iQueryObjectType"] = $p1;
        $v_0["sName"] = this.$d_3;
        $v_0["sDescription"] = this.$x_3;
        var $v_1 = null;
        if (!IsNull(this.$1K_3) && typeof this.$1K_3 === "function") {
            $v_1 = this.$1K_3($v_0);
            this.performActionAfterGetViewInfo($v_1, $p2)
        } else {
            var $v_2 = [$p2],
                $v_3 = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterGetViewInfo", this, $v_2, false),
                $v_4 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/AdvancedFind/QueryProperties.aspx?feature=advfind"),
                    $v_0,
                    500,
                    310,
                    null);
            $v_4.setCallbackReference($v_3);
            $v_4.show()
        }
    },
    performActionAfterGetViewInfo: function(viewInfo, callbackRef) {
        var $v_0 = false;
        if (!IsNull(viewInfo)) {
            this.$d_3 = viewInfo.sName;
            this.$x_3 = viewInfo.sDescription;
            $v_0 = true
        }
        Mscrm.Utilities.executeFunction(callbackRef, $v_0);
        return $v_0
    },
    $25_3: function() {
        if (this.$13_3 & 2) this.$B_3 = 2;
        if (this.$k_3) {
            this.$C_3.set_entityName(this.$2_3);
            this.$C_3.set_queryId(null);
            this.$7_3 = this.$C_3.$7_3;
            this.$Z_3 = this.$C_3.get_queryObjectType();
            return this.Load(this.$7_3, this.$Z_3)
        } else {
            var $v_0 = this.$3_3.GetElement("DefaultAdvFindView", this.$2_3, null);
            if (IsNull($v_0)) return false;
            this.$7_3 = $v_0.QueryId;
            this.$Z_3 = 1039;
            return this.$2K_3($v_0)
        }
    },
    StartNew: function() {
        if (!(this.$12_3 || this.$R_3) || confirm(window.LOCID_AF_SEARCHMODIFIED_MSG)) return this.$25_3();
        return false
    },
    Clear: function(prompt, resetControl) {
        if (IsNull(prompt)) prompt = true;
        if (IsNull(resetControl)) resetControl = true;
        if (!IsNull(this.$O_3) &&
            this.$O_3.get_children().length > 0 &&
            (!this.$12_3 || !prompt || confirm(window.LOCID_AF_SEARCHMODIFIED_MSG))) {
            if (resetControl) this.$2E_3();
            else {
                var $v_0 = $get("spnDetailed", this.get_element());
                !IsNull($v_0) &&
                    !IsNull(XUI.Html.DomUtils.GetFirstChild($v_0)) &&
                    $find(XUI.Html.DomUtils.GetFirstChild($v_0).id).clearControls()
            }
            this.set_isDirty(true)
        }
    },
    ResetControl: function() { !IsNull(this.$O_3) && this.$O_3.get_children().length > 0 && this.$2E_3() },
    get_defaultAdvancedFindViewId: function() {
        var $v_0 = this.$3_3.GetElement("DefaultAdvFindView", this.$2_3, null);
        if (!IsNull($v_0)) return $v_0.QueryId;
        return ""
    },
    $3K_3: function($p0) {
        for (var $v_0 = XUI.Xml.LoadXml($p0),
            $$arr_2 = Mscrm.AdvancedFindConstants.GetAdvancedFetchFeaturesList(),
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if (XUI.Xml.SelectNodes($v_0, $v_1, null).length > 0) return false
        }
        return true
    }
};
Mscrm.AdvancedFindCommon = function() {};
Mscrm.AdvancedFindCommon.HideVisibleControl = function(advancedFind) {
    if (!IsNull(advancedFind.$11_3) && !advancedFind.$11_3.get_isDisposed()) {
        advancedFind.$11_3.ShowControl(false, false);
        advancedFind.$11_3 = null
    }
};
Mscrm.AdvFind = function() {};
Mscrm.AdvFind.get_ClientCache = function() { return _oClientCache };
Mscrm.AdvFind.set_ClientCache = function(value) {
    _oClientCache = value;
    return value
};
Mscrm.AdvFind.get_AliasForLinkEntity = function() { return AliasForLinkEntity };
Mscrm.AdvFind.set_AliasForLinkEntity = function(value) {
    AliasForLinkEntity = value;
    return value
};
Mscrm.AdvFind.getPropertiesForChild = function(component) {
    var $v_0 = {};
    $v_0["parentControl"] = component;
    $v_0["container"] = component.get_container();
    $v_0["entityName"] = component.get_entityName();
    return $v_0
};
Mscrm.AdvFind.getControlId = function(parentId, suffix) { return parentId + suffix };
Mscrm.AdvFind.checkControlByTagName = function(tagName, controlType) {
    tagName = tagName.toUpperCase();
    controlType = controlType.toUpperCase();
    if (tagName === controlType) return true;
    return controlType.length === tagName.length + 4 && controlType.endsWith(tagName)
};
Mscrm.AdvFind.disposeAndDeleteControl = function(component) { component.dispose() };
Mscrm.AdvFind.disposeAndDeleteElement = function(control) {
    var $v_0 = $find(control.id);
    !IsNull($v_0) && Mscrm.AdvFind.disposeAndDeleteControl($v_0);
    $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(control.id);
    !IsNull($v_0) && Mscrm.AdvFind.disposeAndDeleteControl($v_0)
};
Mscrm.AdvFind.disposeDirectChilds = function(root) {
    !IsNull(root) &&
        XUI.Html.DomUtils.ForEachChild(root,
            function($p1_0) {
                !isNullOrEmptyString($p1_0.id) && Mscrm.AdvFind.disposeAndDeleteElement($p1_0);
                return false
            })
};
Mscrm.AdvFind.isImplementsFetchXmlConstructor = function(control) {
    return Mscrm.IFetchXmlConstructor.isImplementedBy(control)
};
Mscrm.AdvFind.isImplementsAdvancedFindContainerControl = function(control) {
    return Mscrm.IAdvancedFindContainerControl.isImplementedBy(control)
};
Mscrm.AdvFind.isFilterEntity = function(control) { return Mscrm.FilterEntity.isInstanceOfType(control) };
Mscrm.AdvFind.isFilterField = function(control) { return Mscrm.FilterField.isInstanceOfType(control) };
Mscrm.AdvFind.isFilterFieldGroup = function(control) { return Mscrm.FilterFieldGroup.isInstanceOfType(control) };
Mscrm.AdvFind.safeRemoveHandler = function(element, eventName, handler) {
    if (IsNull(element)) return false;
    var $v_0 = element._events;
    if (IsNull($v_0)) return false;
    var $v_1 = $v_0[eventName];
    if (IsNull($v_1)) return false;
    var $v_2 = $v_1.length;
    if (IsNull($v_2)) return false;
    for (var $v_3 = 0; $v_3 < $v_2; $v_3++)
        if ($v_1[$v_3].handler === handler) {
            $removeHandler(element, eventName, handler);
            return true
        }
    return false
};
Mscrm.AutoShowChangeArgs = function(autoShow, targetControl) {
    Mscrm.AutoShowChangeArgs.initializeBase(this);
    this.autoShowControl = autoShow;
    this.targetControl = targetControl
};
Mscrm.AutoShowChangeArgs.prototype = { autoShowControl: null, targetControl: null };
Mscrm.AutoShow = function(element) {
    this.$$d_onKeyUpHandler = Function.createDelegate(this, this.onKeyUpHandler);
    this.$$d_$2k_3 = Function.createDelegate(this, this.$2k_3);
    this.$$d_$3O_3 = Function.createDelegate(this, this.$3O_3);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_SetFocus = Function.createDelegate(this, this.SetFocus);
    this.$$d_$21_3 = Function.createDelegate(this, this.$21_3);
    this.$$d_$22_3 = Function.createDelegate(this, this.$22_3);
    Mscrm.AutoShow.initializeBase(this, [element]);
    $addHandler(this.get_element(), "mouseover", this.$$d_$22_3);
    $addHandler(this.get_element(), "mouseout", this.$$d_$21_3)
};
Mscrm.AutoShow.prototype = {
    $A_3: null,
    $U_3: null,
    $1E_3: null,
    $17_3: null,
    $1F_3: "",
    $16_3: "",
    $10_3: null,
    $1D_3: null,
    $S_3: null,
    $9_3: false,
    $1X_3: false,
    initialize: function() {
        this.get_element()
            .innerHTML =
            "<div class='ms-crm-AdvFind-AutoShow'><div tabindex=0 class='ms-crm-AdvFind-AutoShowEmptyControlLabel'><span></span><label for='' class='ms-crm-Hidden'></label></div><div style='display:none' class='ms-crm-AdvFind-AutoShowControl'></div></div>";
        this.$9_3 = true;
        this.$17_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        this.$U_3 = XUI.Html.DomUtils.GetFirstChild(this.$17_3);
        this.$1E_3 = XUI.Html.DomUtils.GetChildElementAt(this.$U_3, 1);
        this.$A_3 = XUI.Html.DomUtils.GetChildElementAt(this.$17_3, 1);
        this.$U_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "LBL");
        this.$A_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "CNTRL");
        $addHandler(this.$U_3, "focus", this.$$d_SetFocus);
        if (!IsNull(this.$1m_3)) this.setInnerControlHtml(this.$1m_3);
        else this.set_innerControl(this.$L_3);
        this.fireControlEvent("OnInitComplete", Sys.EventArgs.Empty);
        this.set_text(this.$10_3);
        XUI.Html.SetText(this.$1E_3, this.$16_3);
        this.set_value(this.$S_3);
        this.set_controlWidth(this.$1F_3);
        this.$f_3 && this.SetFocus();
        this.$1s_3 && this.SetMode(this.get_element().getAttribute("mode"))
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$22_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$21_3);
        if (!IsNull(this.$A_3) && !IsNull(XUI.Html.DomUtils.GetFirstChild(this.$A_3))) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            !IsNull($v_0) && UnregisterAjaxControl($v_0);
            this.$A_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $c_3: false,
    $0_3: null,
    $8_3: null,
    $2_3: null,
    $1s_3: true,
    $15_3: null,
    get_disabled: function() { return this.$c_3 },
    set_disabled: function(value) {
        this.$c_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_supportsMode: function() { return this.$1s_3 },
    set_supportsMode: function(value) {
        this.$1s_3 = value;
        return value
    },
    get_toolTip: function() { return this.$15_3 },
    set_toolTip: function(value) {
        this.$15_3 = value;
        return value
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    add_onInitComplete: function(value) { this.get_events().addHandler("OnInitComplete", value) },
    remove_onInitComplete: function(value) { this.get_events().removeHandler("OnInitComplete", value) },
    add_onKeyUp: function(value) { this.get_events().addHandler("OnKeyUp", value) },
    remove_onKeyUp: function(value) { this.get_events().removeHandler("OnKeyUp", value) },
    get_controlWidth: function() { return this.$1F_3 },
    set_controlWidth: function(value) {
        if (isNullOrEmptyString(value)) return value;
        var $v_0 = value;
        if (typeof value !== "string" || value.indexOf("px") < 0 && value.indexOf("%") < 0) $v_0 = $v_0 + "px";
        this.$1F_3 = $v_0;
        if (!this.$9_3) return value;
        if (!IsNull(this.$17_3)) {
            this.$17_3.style.width = $v_0;
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.$17_3);
            if (!IsNull($v_1)) $v_1.style.width = $v_0
        }
        return value
    },
    SetMode: function(mode) {
        this.get_element().setAttribute("mode", mode);
        if (this.$9_3) {
            var $v_0 = mode === 1;
            this.$17_3.className = $v_0 ? "ms-crm-AdvFind-SimpleAutoShow" : "ms-crm-AdvFind-AutoShow";
            this.$U_3.className = $v_0 ? "ms-crm-AdvFind-SimpleAutoShowLabel" : "ms-crm-AdvFind-AutoShowLabel"
        }
    },
    get_text: function() {
        if (this.$9_3) this.$10_3 = XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(this.$U_3));
        return this.$10_3
    },
    set_text: function(value) {
        this.$10_3 = value;
        if (this.$9_3) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$U_3);
            if (IsNull($v_0)) return value;
            if (IsNull(value)) {
                XUI.Html.SetText($v_0, this.$16_3);
                XUI.Html.SetText(this.$1E_3, this.$16_3);
                this.$U_3.className = "ms-crm-AdvFind-AutoShowEmptyControlLabel";
                this.$U_3.style.direction = "inherit"
            } else {
                XUI.Html.SetText($v_0, value);
                XUI.Html.SetText(this.$1E_3, this.$16_3);
                this.$U_3.className = parseInt(this.get_element().getAttribute("mode")) === 1
                    ? "ms-crm-AdvFind-SimpleAutoShowLabel"
                    : "ms-crm-AdvFind-AutoShowLabel";
                this.$U_3.style.direction = IsNull(this.$1D_3) ? "inherit" : this.$1D_3;
                if (window.LOCID_UI_DIR === "RTL") this.$U_3.style.textAlign = "right"
            }
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            if (IsNull($v_1)) return value;
            if (IsNull(this.$U_3.ToolTip)) {
                $v_1.style.direction = IsNull(this.$1D_3) ? "inherit" : this.$1D_3;
                $v_1.title = XUI.Html.GetText($v_0)
            } else {
                $v_1.style.direction = "inherit";
                $v_1.title = this.$U_3.ToolTip.toString()
            }
        }
        return value
    },
    get_defaultText: function() { return this.$16_3 },
    set_defaultText: function(value) {
        this.$16_3 = value;
        this.set_text(null);
        return value
    },
    get_showAlways: function() { return this.$1X_3 },
    set_showAlways: function(value) {
        this.$1X_3 = value;
        return value
    },
    $1B_3: true,
    get_hideControl: function() { return this.$1B_3 },
    set_hideControl: function(value) {
        this.$1B_3 = value;
        return value
    },
    ShowControl: function(show, setAsVisibleControl) {
        if (IsNull(this.$A_3)) return;
        if (this.$1X_3) {
            this.$U_3.style.display = "none";
            this.$A_3.style.display = "block"
        } else {
            this.$U_3.style.display = show ? "none" : "";
            this.$A_3.style.display = show ? "block" : "none"
        }
        if (!show) this.$1B_3 = true;
        setAsVisibleControl && this.setContainerVisibleControl()
    },
    $21_3: function($p0) {
        window.status = window.defaultStatus;
        this.$1B_3 && !this.$c_3 && !this.$1X_3 && this.ShowControl(false, false)
    },
    $22_3: function($p0) {
        window.status = this.get_text();
        if (this.$c_3) return;
        this.ShowControl(true, false)
    },
    onClick: function(domEvent) {
        if (this.$c_3) return;
        if (this.$0_3.$11_3 !== this) {
            this.hideVisibleControl();
            this.$0_3.$11_3 = this
        }
        this.$1B_3 = false
    },
    $f_3: false,
    SetFocus: function(domEvent) {
        window.status = this.get_text();
        this.$f_3 = true;
        if (this.$9_3) {
            if (this.$c_3) {
                this.$f_3 = false;
                return
            }
            this.hideVisibleControl();
            this.ShowControl(true, true);
            var $v_0 = GetAjaxControl(this.$L_3);
            $v_0.setFocus();
            this.$1B_3 = false;
            this.$f_3 = false
        }
    },
    $1v_3: function($p0) {
        this.$2U_3(this.$A_3, $p0);
        !$p0 && UnregisterAjaxControl(XUI.Html.DomUtils.GetFirstChild(this.$A_3))
    },
    $2U_3: function($p0, $p1) {
        if (IsNull($p0)) return true;
        var $v_0 = true, $$t_8 = this;
        XUI.Html.DomUtils.ForEachChild($p0,
            function($p1_0) {
                if (!isNullOrEmptyString($p1_0.className)) {
                    if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-Lookup")) {
                        if ($p1_0.tagName.toUpperCase() === "TABLE") {
                            $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                            $p1_0 = XUI.Html.DomUtils.GetFirstChild($p1_0.rows[0].cells[1])
                        } else return false;
                        var $v_1 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                        if ($p1) $v_1.add_change($$t_8.$$d_$3O_3);
                        else $v_1.remove_change($$t_8.$$d_$3O_3);
                        return true
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-Input-Container")) {
                        $$t_8.$m_3(XUI.Html.DomUtils.GetFirstChild($p1_0), "change", $$t_8.$$d_$2k_3, $p1);
                        $$t_8.$m_3($p1_0, "keyup", $$t_8.$$d_onKeyUpHandler, $p1);
                        $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                        $v_0 = false;
                        return true
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-DateTime")) {
                        if ($p1_0.tagName.toUpperCase() !== "TABLE") return false;
                        var $v_2 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                        if ($p1) $v_2.add_change($$t_8.$$d_$2k_3);
                        else $v_2.remove_change($$t_8.$$d_$2k_3);
                        $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                        $$t_8.$m_3($p1_0, "keyup", $$t_8.$$d_onKeyUpHandler, $p1);
                        $v_0 = false;
                        return true
                    } else if (!Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-SelectBox"))
                        if (Sys.UI.DomElement.containsCssClass($p1_0, "multipicklist")) {
                            if ($p1_0.tagName.toUpperCase() !== "SPAN") return false;
                            var $v_3 = $find($p1_0.id);
                            if ($p1) $v_3.add_onChange($$t_8.$$d_$3O_3);
                            else $v_3.remove_onChange($$t_8.$$d_$3O_3);
                            $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                            $v_0 = false;
                            return true
                        } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-CheckBox")) {
                            $$t_8.$m_3($p1_0, "change", $$t_8.$$d_$2k_3, $p1);
                            $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                            $$t_8.$m_3($p1_0, "keyup", $$t_8.$$d_onKeyUpHandler, $p1)
                        } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-FiscalPeriodAndYear")) {
                            var $v_4 = $find($p1_0.id);
                            if ($p1) $v_4.add_onChange($$t_8.$$d_$3O_3);
                            else $v_4.remove_onChange($$t_8.$$d_$3O_3);
                            $$t_8.$m_3($p1_0, "click", $$t_8.$$d_onClick, $p1);
                            $v_0 = false;
                            return true
                        } else if (Sys.UI.DomElement
                            .containsCssClass($p1_0, "ms-crm-Number")
                        ) $$t_8.$m_3($p1_0, "change", $$t_8.$$d_$2k_3, $p1);
                        else return false;
                    Mscrm.AdvFind.safeRemoveHandler($p1_0, "change", $$t_8.$$d_$2k_3);
                    Mscrm.AdvFind.safeRemoveHandler($p1_0, "click", $$t_8.$$d_onClick);
                    if ($p1) {
                        $addHandler($p1_0, "change", $$t_8.$$d_$2k_3);
                        $addHandler($p1_0, "click", $$t_8.$$d_onClick)
                    }
                    if (!$$t_8.$2U_3($p1_0, $p1)) {
                        $v_0 = false;
                        return true
                    }
                }
                return false
            });
        return $v_0
    },
    $m_3: function($p0, $p1, $p2, $p3) {
        Mscrm.AdvFind.safeRemoveHandler($p0, $p1, $p2);
        $p3 && $addHandler($p0, $p1, $p2)
    },
    $3O_3: function($p0, $p1) { this.$2p_3($p0.get_element()) },
    $2k_3: function($p0) { this.$2p_3($p0.target) },
    $2p_3: function($p0) {
        this.set_text(null);
        if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Lookup")) {
            var $v_0 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0),
                $v_1 = $v_0.Items(true, true, false, false, false),
                $v_2 = "",
                $v_3 = "";
            if ($v_1.length) {
                for (var $v_4 = $v_1.length, $v_5 = 0; $v_5 < $v_4; $v_5++) {
                    if ($v_5 > 0) {
                        $v_2 += ";";
                        $v_3 += ";"
                    }
                    $v_2 += $v_1[$v_5].name;
                    $v_3 += $v_1[$v_5].id
                }
                this.set_text($v_2);
                this.$S_3 = $v_3
            }
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Text")) {
            var $v_6 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0);
            this.$S_3 = $v_6.get_dataValue();
            this.set_text(IsNull(this.$S_3) ? null : $v_6.get_element().value)
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-Number")) {
            var $v_7 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0);
            this.$S_3 = $v_7.get_dataValue();
            this.set_text(IsNull(this.$S_3) ? null : $v_7.get_element().value)
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-DateTime")) {
            var $v_8 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0);
            this.$S_3 = $v_8.get_dataValue();
            this.set_text(IsNull(this.$S_3) ? null : $v_8.get_innerText())
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-CheckBox")) {
            var $v_9 = Mscrm.FormControlInputBehavior.GetElementBehavior($p0);
            this.$S_3 = $v_9.get_dataValue() ? "true" : "false"
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-SelectBox")) {
            var $v_A = Mscrm.FormControlInputBehavior.GetElementBehavior($p0);
            this.$S_3 = $v_A.get_dataValue();
            if (!IsNull(this.$S_3)) {
                this.set_text($v_A.get_selectedText());
                this.$U_3.title = $v_A.get_selectedText()
            }
        } else if (Sys.UI.DomElement.containsCssClass($p0, "ms-crm-FiscalPeriodAndYear")) {
            var $v_B = $find($p0.id);
            this.$S_3 = $v_B.get_dataValue();
            if (!IsNull(this.$S_3)) {
                this.set_text($v_B.$14_3);
                this.$U_3.title = $v_B.$14_3
            }
        } else if (Sys.UI.DomElement.containsCssClass($p0, "multipicklist")) {
            var $v_C = $find($p0.id);
            this.$S_3 = $v_C.get_dataValue();
            !isNullOrEmptyString(this.$S_3) && this.set_text($v_C.get_dataText())
        }
        this.setContainerDirty(true);
        this.fireControlEvent("OnChange", new Mscrm.AutoShowChangeArgs(this, $p0))
    },
    setContainerDirty: function(isDirty) { this.$0_3.set_isDirty(isDirty) },
    hideVisibleControl: function() { Mscrm.AdvancedFindCommon.HideVisibleControl(this.$0_3) },
    setContainerVisibleControl: function() { this.$0_3.$11_3 = this },
    onKeyUpHandler: function(domEvent) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(domEvent.target.id), $v_1 = null;
        if (!IsNull($v_0)) $v_1 = $v_0.get_dataValue();
        else {
            var $v_2 = $find(domEvent.target.id);
            if (!IsNull($v_2)) $v_1 = $v_2.get_dataValue()
        }
        $v_1 !== this.$S_3 && this.setContainerDirty(true)
    },
    get_value: function() { return this.$9_3 ? this.$2e_3(true, null) : this.$S_3 },
    set_value: function(value) {
        this.$S_3 = value;
        this.$9_3 && this.$2e_3(false, value);
        return value
    },
    get_originalValue: function() { return this.$S_3 },
    getSlugControl: function() {
        switch (XUI.Html.DomUtils.GetFirstChild(this.$A_3).nodeName.toUpperCase()) {
        case "DIV":
            return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$A_3));
        case "INPUT":
        case "TABLE":
        case "SPAN":
        case "SELECT":
            return XUI.Html.DomUtils.GetFirstChild(this.$A_3)
        }
        return null
    },
    createSlugIfAllowed: function(element) {
        Mscrm.FormControlInputBehavior.isSlugSupportEnabled() && $create(Mscrm.SlugSupport, null, null, null, element)
    },
    $2e_3: function($p0, $p1) { return this.$2f_3(this.$A_3, $p0, $p1) },
    $2f_3: function($p0, $p1, $p2) {
        if (IsNull($p0) || IsNull($p0.children) || !$p0.children.length) return null;
        var $v_0 = false, $v_1 = null, $$t_K = this;
        XUI.Html.DomUtils.ForEachChild($p0,
            function($p1_0) {
                if (!IsNull($p1_0) && !isNullOrEmptyString($p1_0.className))
                    if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-Lookup")) {
                        if ($p1_0.tagName.toUpperCase() === "IMG") {
                            var $v_3 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                            if ($p1) {
                                $v_1 = $v_3.get_dataValue();
                                return true
                            }
                            $$t_K.$10_3 = "";
                            if (typeof $p2 === "string") {
                                var $v_4 = [];
                                $v_4[0] = $p2;
                                $v_3.set_dataValue($v_4);
                                $$t_K.$10_3 = $p2
                            } else {
                                var $v_5 = $p2;
                                $v_3.set_dataValue($v_5);
                                if (!IsNull($v_5) && $v_5.length > 0) {
                                    for (var $v_6 = 0;
                                        $v_6 < $v_5.length - 1;
                                        $v_6++
                                    ) $$t_K.$10_3 += $v_5[$v_6].name + ";";
                                    $$t_K.$10_3 += $v_5[$v_5.length - 1].name;
                                    $$t_K.set_text($$t_K.$10_3)
                                }
                            }
                        }
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-Text")) {
                        var $v_7 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                        if ($p1) {
                            $v_1 = $v_7.get_dataValue();
                            return true
                        }
                        $v_7.set_dataValue($p2);
                        $$t_K.set_text($v_7.get_dataValue())
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-Number")) {
                        var $v_8 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                        if ($p1) {
                            $v_1 = $v_8.get_dataValue();
                            return true
                        }
                        $v_8.set_dataValue(IsNull($p2) ? null : parseFloat($p2));
                        $$t_K.set_text($v_8.get_element().value)
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-DateTime")) {
                        if ($p1_0.tagName.toUpperCase() === "TABLE") {
                            var $v_9 = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                            if ($p1) {
                                $v_1 = $v_9.get_dataValue();
                                return true
                            }
                            $v_9.set_dataValue($p2);
                            if (IsNull($p2)) $$t_K.set_text("");
                            else $$t_K.set_text($v_9.get_innerText());
                            $v_0 = true
                        }
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-CheckBox")) {
                        var $v_A = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                        if ($p1) {
                            $v_1 = $v_A.get_dataValue();
                            return true
                        }
                        $v_A.set_dataValue(IsNull($p2) ? false : $p2.toLowerCase() === "true");
                        $$t_K.set_text($p1_0.getAttribute("value"));
                        $p1_0.disabled = $$t_K.$c_3
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-SelectBox")) {
                        if ($p1_0.tagName.toUpperCase() === "SELECT") {
                            var $v_B = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0);
                            if (IsNull($v_B)) {
                                $$t_K.$3A_3($p1_0.id, true);
                                $v_B = Mscrm.FormControlInputBehavior.GetElementBehavior($p1_0)
                            }
                            if ($p1) {
                                $v_1 = $v_B.get_dataValue();
                                return true
                            }
                            $v_B.set_dataValue($p2);
                            if (!IsNull($p2) && $v_0) {
                                var $v_C = Mscrm.DateTimeUtility.formatDate($p2), $v_D = timeToString($p2, 0);
                                $$t_K.set_text($v_C + " " + $v_D)
                            } else $$t_K.set_text($v_B.get_selectedText())
                        }
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "multipicklist")) {
                        if ($p1_0.tagName.toUpperCase() !== "SPAN") return false;
                        var $v_E = $find($p1_0.id);
                        if ($p1) {
                            $v_1 = $v_E.get_dataValue();
                            return true
                        }
                        $v_E.set_dataValue($p2);
                        $$t_K.set_text($v_E.get_dataText())
                    } else if (Sys.UI.DomElement.containsCssClass($p1_0, "ms-crm-FiscalPeriodAndYear")) {
                        var $v_F = $find($p1_0.id);
                        if ($p1) {
                            $v_1 = $v_F.get_dataValue();
                            return true
                        }
                        $v_F.set_dataValue($p2);
                        $$t_K.set_text($v_F.$14_3);
                        return true
                    }
                var $v_2 = $$t_K.$2f_3($p1_0, $p1, $p2);
                if (!IsNull($v_2)) {
                    $v_1 = $v_2;
                    return true
                }
                return false
            });
        !$p1 && IsNull($p2) && this.set_defaultText(this.$16_3);
        return $v_1
    },
    $3A_3: function($p0, $p1) {
        var $v_0 = $get($p0, this.$A_3);
        switch (XUI.Html.DomUtils.GetFirstChild(this.$A_3).nodeName.toUpperCase()) {
        case "SELECT":
            if ($p1) $v_0 = $get($p0, this.$A_3);
            else {
                this.$L_3 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
                this.$L_3.id = $p0 + "CTL";
                $v_0 = $get(this.$L_3.id)
            }
            IsNull(Mscrm.FormControlInputBehavior.GetElementBehavior($v_0)) &&
                $create(Mscrm.FormInputControl.SelectInputBehavior, null, null, null, $v_0);
            break;
        case "DIV":
            this.$L_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$A_3));
            this.$L_3.id = $p0 + "CTL";
            $v_0 = $get(this.$L_3.id);
            if (Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-Text"))
                $create(Mscrm.FormInputControl.TextBoxInputBehavior, null, null, null, $v_0);
            else if (Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-Money"))
                $create(Mscrm.FormInputControl.MoneyInputBehavior, null, null, null, $v_0);
            else
                Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Number") &&
                    $create(Mscrm.FormInputControl.NumberInputBehavior, null, null, null, $v_0);
            this.createSlugIfAllowed($v_0);
            break;
        case "SPAN":
            this.$L_3 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            this.$L_3.id = $p0 + "CTL";
            $v_0 = $get(this.$L_3.id);
            Sys.UI.DomElement.containsCssClass($v_0, "multipicklist") &&
                $create(Mscrm.MultiPicklist, null, null, null, $v_0);
            break;
        case "TABLE":
            this.$L_3 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            this.$L_3.id = $p0 + "CTL";
            var $v_1 = $get(this.$L_3.id);
            if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-Lookup")) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1)), 1));
                $v_2.id = $v_1.id + "_img";
                $create(Mscrm.FormInputControl.PresenceLookupUIBehavior, null, null, null, $v_2);
                this.createSlugIfAllowed($v_1)
            } else
                $v_1.className.toLowerCase() === "ms-crm-datetime" &&
                    Mscrm.FormInputControl.DateTimeBehaviorBase.registerDateTimeComponents($v_1.parentNode);
            break;
        case "INPUT":
            $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            $v_0.id = $p0 + "CTL";
            if (Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-Text"))
                $create(Mscrm.FormInputControl.TextBoxInputBehavior, null, null, null, $v_0);
            else if (Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-Money"))
                $create(Mscrm.FormInputControl.MoneyInputBehavior, null, null, null, $v_0);
            else
                Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Number") &&
                    $create(Mscrm.FormInputControl.NumberInputBehavior, null, null, null, $v_0);
            this.createSlugIfAllowed($v_0);
            break
        }
    },
    $1m_3: null,
    setInnerControlHtml: function(value) {
        if (this.$9_3) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            if (!IsNull($v_0)) {
                this.$1v_3(false);
                this.$A_3.removeChild($v_0)
            }
            this.$A_3.innerHTML = value;
            this.$L_3 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            this.$L_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "CTL");
            this.$1E_3.setAttribute("htmlFor", this.$L_3.id);
            RegisterAjaxControl(this.$L_3);
            this.$1v_3(true);
            this.$2R_3()
        } else this.$1m_3 = value
    },
    $L_3: null,
    get_innerControl: function() { return this.$9_3 ? XUI.Html.DomUtils.GetFirstChild(this.$A_3) : this.$L_3 },
    set_innerControl: function(value) {
        this.$L_3 = value;
        if (this.$9_3) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$A_3);
            if (!IsNull($v_0)) {
                this.$1v_3(false);
                this.$A_3.removeChild($v_0)
            }
            if (!IsNull(value)) {
                this.$A_3.appendChild(this.$L_3);
                this.$L_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "CTL");
                this.$1E_3.setAttribute("htmlFor", this.$L_3.id);
                RegisterAjaxControl(this.$L_3);
                this.$1v_3(true);
                this.$2R_3()
            }
        }
        return value
    },
    get_textDirection: function() { return this.$1D_3 },
    set_textDirection: function(value) {
        this.$1D_3 = value;
        this.set_text(this.get_text());
        return value
    },
    $2R_3: function() {
        if (window.LOCID_UI_DIR === "RTL") {
            this.$A_3.style.marginRight = "0px";
            this.$A_3.style.marginTop = "0px"
        } else {
            this.$A_3.style.position = "static";
            this.$A_3.style.marginLeft = "0px";
            this.$A_3.style.marginTop = "0px"
        }
    }
};
Mscrm.AdvancedFindQueryData = function() {};
Mscrm.AdvancedFindQueryData.prototype = {
    QueryId: null,
    QueryType: 0,
    Name: null,
    Description: null,
    FetchXml: null,
    LayoutXml: null,
    EntityName: null,
    FetchAttributes: null,
    CanWrite: false,
    ReturnType: null,
    SourceViewType: 0
};
Mscrm.ClientControl = function(element) {
    this.$$d_$2k_3 = Function.createDelegate(this, this.$2k_3);
    Mscrm.ClientControl.initializeBase(this, [element])
};
Mscrm.ClientControl.prototype = {
    $1_3: null,
    $5_3: null,
    $9_3: false,
    $F_3: false,
    $1I_3: false,
    get_isReadOnly: function() { return this.$F_3 },
    set_isReadOnly: function(value) {
        this.$F_3 = value;
        return value
    },
    get_isMobileOfflineFiltersView: function() { return this.$1I_3 },
    set_isMobileOfflineFiltersView: function(value) {
        this.$1I_3 = value;
        return value
    },
    initialize: function() {
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.AdvFind.getControlId(this.get_id(), "VAL")));
        this.$9_3 = true;
        var $v_0 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_0["defaultText"] = window.LOCID_AF_ENTERVALUE;
        $v_0["disabled"] = this.$F_3;
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$2k_3;
        this.$1_3 = $create(Mscrm.AutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.set_value(this.$5_3);
        this.$1I_3 = window.document.URL.indexOf("offlinefilters") > -1
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$1_3);
            this.$1_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $8_3: null,
    $0_3: null,
    $2_3: null,
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    get_text: function() { return this.$1_3.get_text() },
    get_value: function() {
        this.$5_3 = this.$1_3.get_value();
        return this.$5_3
    },
    set_value: function(value) {
        this.$5_3 = value;
        this.$9_3 && this.$1_3.set_value(this.$5_3);
        return value
    },
    SetFocus: function() { this.$1_3.SetFocus() },
    SetMode: function(mode) { this.$1_3.SetMode(mode) },
    $2k_3: function($p0, $p1) { this.fireControlEvent("OnChange", $p1) },
    RenderControl: function(fieldProperties, controlOperator) {
        this.$1_3.set_defaultText(window.LOCID_AF_ENTERVALUE);
        this.$1_3.$15_3 = null;
        this.$1_3.$c_3 = this.$F_3;
        if (this.$0_3.$y_3) {
            this.$1_3.$c_3 = true;
            this.$1_3.SetMode(1)
        }
        switch (fieldProperties.getAttribute("datatype")) {
        case "nvarchar":
        case "text":
        case "ntext":
        case "memo":
            this.$1_3.setInnerControlHtml(XUI.Html
                .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "string", null)));
            XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_innerControl())
                .setAttribute("maxLength", fieldProperties.getAttribute("maxlength"));
            if (!this.$0_3.$y_3) {
                this.$1_3.$15_3 = window.LOCID_AF_ENTERTEXT;
                this.$1_3.set_defaultText(window.LOCID_AF_ENTERTEXT)
            }
            break;
        case "bit":
        case "boolean":
        case "state":
        case "status":
        case "picklist":
        case "language":
        case "objecttypecode":
            if (IsNameOperator(controlOperator)) {
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "string", null)));
                !IsNull(fieldProperties.getAttribute("namemaxlength")) &&
                    XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_innerControl())
                    .setAttribute("maxLength", fieldProperties.getAttribute("namemaxlength"));
                if (!this.$0_3.$y_3) {
                    this.$1_3.$15_3 = window.LOCID_AF_ENTERTEXT;
                    this.$1_3.set_defaultText(window.LOCID_AF_ENTERTEXT)
                }
            } else {
                var $v_6 = this.$0_3.$3_3.GetElement("ValueControl", "picklist", null);
                this.$1_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_6));
                var $v_7 = $find(this.$1_3.get_innerControl().id);
                $v_7.LoadOptionsXml(fieldProperties.getAttribute("optionsXML"));
                if (!this.$0_3.$y_3) {
                    this.$1_3.set_defaultText(window.LOCID_AF_ENTERPICKLIST
                        .replace("{0}", XUI.Html.GetText(fieldProperties)));
                    this.$1_3.$15_3 = window.LOCID_AF_ENTERPICKLIST.replace("{0}", XUI.Html.GetText(fieldProperties))
                }
            }
            break;
        case "primarykey":
        case "partylist":
        case "uniqueidentifier":
        case "lookup":
        case "customer":
        case "owner":
            if (IsNameOperator(controlOperator)) {
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "string", null)));
                !IsNull(fieldProperties.getAttribute("namemaxlength")) &&
                    this.$1_3.get_innerControl()
                    .setAttribute("maxLength", fieldProperties.getAttribute("namemaxlength"))
            } else {
                var $v_8 = this.$0_3.$3_3.GetElement("ValueControl", "lookup", null),
                    $v_9 = XUI.Html.DomUtils.GetFirstChild($v_8.rows[0].cells[1]);
                $v_9.setAttribute("lookuptypes", fieldProperties.getAttribute("lookuptypes"));
                $v_9.setAttribute("lookuptypenames", fieldProperties.getAttribute("lookuptypenames"));
                $v_9.setAttribute("crmattributeid", fieldProperties.getAttribute("crmattributeid"));
                $v_9.setAttribute("forfield", XUI.Html.GetText(fieldProperties));
                var $v_A = fieldProperties.getAttribute("lookuptypes").split(",");
                $v_9.setAttribute("lookuptypeIcons", this.$0_3.$3_3.LookupIcons[parseInt($v_A[0], 10)]);
                for (var $v_B = 1;
                    $v_B < $v_A.length;
                    $v_B++
                )
                    $v_9.setAttribute("lookuptypeIcons",
                        $v_9.getAttribute("lookuptypeIcons") + ":" + this.$0_3.$3_3.LookupIcons[parseInt($v_A[$v_B])]);
                if (fieldProperties.getAttribute("lookuptypes") === "129") $v_9.setAttribute("lookupstyle", "subject");
                else $v_9.setAttribute("lookupstyle", "multi");
                if (Mscrm.Utilities.parseBoolean(fieldProperties.getAttribute("hierarchyenabled")))
                    if (controlOperator === "under" || controlOperator === "not-under"
                    ) $v_9.setAttribute("lookupstyle", "single");
                    else $v_9.setAttribute("lookupstyle", "multi");
                this.$1_3.setInnerControlHtml(XUI.Html.GetOuterHTML($v_8))
            }
            break;
        case "decimal":
        case "int":
        case "float":
        case "integer":
        case "money":
            this.$1_3.setInnerControlHtml(XUI.Html
                .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "number", null)));
            var $v_0 = Mscrm.FormControlInputBehavior
                .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_innerControl()));
            $v_0.set_dataType(fieldProperties.getAttribute("datatype") === "integer"
                ? "int"
                : fieldProperties.getAttribute("datatype"));
            $v_0.set_precision(parseInt(fieldProperties.getAttribute("acc"), 10));
            $v_0.set_min(fieldProperties.getAttribute("min"));
            $v_0.set_max(fieldProperties.getAttribute("max"));
            if (fieldProperties.getAttribute("format") === "duration" && !this.$0_3.$y_3) {
                this.$1_3.set_defaultText(window.LOCID_AF_ENTERVALINMINS);
                this.$1_3.$15_3 = window.LOCID_AF_ENTERVALINMINS
            }
            this.$1_3.set_textDirection("ltr");
            break;
        case "datetime":
        case "date":
        case "time":
            var $v_1 = {}, $v_2 = {}, $v_3 = "";
            switch (controlOperator) {
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
                $v_1["days"] = this.$1I_3 ? 0 : 1;
                $v_2["days"] = this.$1I_3 ? 9999 : 500;
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
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                $find(this.$1_3.get_innerControl().id).set_showYear(true);
                break;
            case "in-fiscal-period":
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                $find(this.$1_3.get_innerControl().id).set_showPeriod(true);
                break;
            case "in-fiscal-period-and-year":
            case "in-or-before-fiscal-period-and-year":
            case "in-or-after-fiscal-period-and-year":
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "fiscalperiodandyear", null)));
                var $v_4 = $find(this.$1_3.get_innerControl().id);
                $v_4.set_showPeriod(true);
                $v_4.set_showYear(true);
                break;
            default:
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "date", null)));
                break
            }
            if (!IsNull($v_3) && $v_3.length) {
                this.$1_3.setInnerControlHtml(XUI.Html
                    .GetOuterHTML(this.$0_3.$3_3.GetElement("ValueControl", "number", null)));
                var $v_C = Mscrm.FormControlInputBehavior
                    .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.$1_3.get_innerControl()));
                $v_C.set_precision(0);
                $v_C.set_min($v_1[$v_3]);
                $v_C.set_max($v_2[$v_3])
            }
            if (!this.$0_3.$y_3) {
                this.$1_3.set_defaultText(window.LOCID_AF_ENTERDATE);
                this.$1_3.$15_3 = window.LOCID_AF_ENTERDATE
            }
            break;
        default:
            var $v_5 = this.$0_3.$1o_3;
            if (!IsNull($v_5) && "function" === typeof $v_5) {
                var $v_D = {};
                $v_D["sEntityName"] = this.$8_3.get_entityName();
                $v_D["oField"] = fieldProperties;
                $v_D["sOperator"] = controlOperator;
                var $v_E = $v_5($v_D);
                this.$1_3.set_innerControl($v_E.oValueControl)
            }
            break
        }
    }
};
Mscrm.EntityList = function(element) {
    this.$$d_$2Z_3 = Function.createDelegate(this, this.$2Z_3);
    Mscrm.EntityList.initializeBase(this, [element])
};
Mscrm.EntityList.prototype = {
    $1_3: null,
    $1T_3: null,
    $T_3: false,
    $8_3: null,
    $2_3: null,
    $0_3: null,
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_dataValue: function() { return this.$1T_3 },
    set_dataValue: function(value) {
        this.$1T_3 = value;
        this.$T_3 && this.$1_3.set_value(value);
        return value
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            Mscrm.AdvFind.getControlId(this.get_id(), "EL"));
        this.$T_3 = true;
        var $v_0 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_0["value"] = this.$1T_3;
        $v_0["controlWidth"] = 300;
        var $v_1 = {};
        $v_1["onChange"] = this.$$d_$2Z_3;
        this.$1_3 = $create(Mscrm.AutoShow, $v_0, $v_1, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$1_3.setInnerControlHtml("<select class='ms-crm-SelectBox'>" +
            (IsNull(this.$2_3) || this.$2_3 === "None" ? "" : this.$3W_3(this.$2_3)) +
            "</select>");
        this.SetMode(this.$0_3.$B_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$1_3);
            this.$1_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    getEntityList: function() { return Mscrm.FormControlInputBehavior.GetBehavior(this.$1_3.get_innerControl().id) },
    $3W_3: function($p0) {
        var $v_0 = "", $v_1, $v_2 = this.$0_3.get_element().BeforePopulateRelatedEntityList_Handler;
        if (!IsNull($v_2) && typeof $v_2 === "function") {
            $v_1 = $v_2($p0, null);
            $v_0 = $v_1.Data;
            if (IsNull($v_1.Cancel)) return $v_0
        }
        var $v_3 = this.$0_3.$3_3.GetElement("Entity", $p0, null);
        if (!IsNull($v_3)) $v_0 += $v_3;
        if (!IsNull($v_2) && typeof $v_2 === "function") {
            $v_1 = $v_2($p0, $v_0);
            $v_0 += $v_1.Data
        }
        return $v_0
    },
    $2Z_3: function($p0, $p1) {
        var $v_0 = $p1;
        this.$1T_3 = $v_0.targetControl.nodeValue;
        this.fireControlEvent("OnChange", $p1)
    },
    SetMode: function(mode) {
        this.$1_3.$c_3 = mode === 1;
        this.$1_3.SetMode(mode)
    },
    SetFocus: function() { this.$1_3.SetFocus() }
};
Mscrm.FieldChangeEventArgs = function(raisedByCode, fieldList, groupType) {
    Mscrm.FieldChangeEventArgs.initializeBase(this);
    this.raisedByCode = raisedByCode;
    this.fieldList = fieldList;
    this.groupType = groupType
};
Mscrm.FieldChangeEventArgs.prototype = { raisedByCode: false, fieldList: null, groupType: null };
Mscrm.FieldList = function(element) {
    this.$$d_$3M_3 = Function.createDelegate(this, this.$3M_3);
    this.$$d_$2H_3 = Function.createDelegate(this, this.$2H_3);
    Mscrm.FieldList.initializeBase(this, [element])
};
Mscrm.FieldList.prototype = {
    $1_3: null,
    $1f_3: null,
    $5_3: null,
    $9_3: false,
    $2_3: null,
    $0_3: null,
    $8_3: null,
    $s_3: false,
    $1F_3: 0,
    $f_3: false,
    $F_3: false,
    get_isReadOnly: function() { return this.$F_3 },
    set_isReadOnly: function(value) {
        this.$F_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_value: function() { return this.$5_3 },
    set_value: function(value) {
        this.$5_3 = value;
        if (this.$9_3) {
            if (IsNull(this.$1_3)) this.$1_3 = $find(this.$1f_3);
            this.$1_3.set_value(this.$5_3);
            !IsNull(this.$5_3) && this.$2q_3(true, "fld")
        }
        return value
    },
    get_dataType: function() {
        var $v_0 = this.getFieldList();
        return $v_0.get_selectedIndex() !== -1 ? $v_0.get_selectedOption().getAttribute("datatype") : null
    },
    get_relatedEntitiesVisible: function() { return this.$s_3 },
    set_relatedEntitiesVisible: function(value) {
        this.$s_3 = value;
        return value
    },
    get_width: function() { return this.$1F_3 },
    set_width: function(value) {
        this.$1F_3 = value;
        return value
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1f_3 = Mscrm.AdvFind.getControlId(this.get_id(), "FLD");
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>", "Crm:AutoShow", this.$1f_3);
        this.$9_3 = true;
        var $v_0 = {};
        $v_0["onChange"] = this.$$d_$2H_3;
        var $v_1 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_1["defaultText"] = window.LOCID_AF_SELECTFIELDENTITY;
        if (!IsNull(this.get_width()) && this.get_width() > 0) $v_1["controlWidth"] = this.get_width();
        $v_1["isReadOnly"] = this.$F_3;
        this.$1_3 = $create(Mscrm.AutoShow,
            $v_1,
            this.$F_3 ? null : $v_0,
            null,
            XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$1_3.setInnerControlHtml("<select " +
            (this.$F_3 ? "disbled='disabled'" : "") +
            " class='ms-crm-SelectBox' Sort='ascending' defaultSelected='-1'>" +
            (isNullOrEmptyString(this.$2_3) ? "" : this.$3V_3(this.$2_3)) +
            "</select>");
        if (this.$F_3) this.$1_3.$c_3 = true;
        window.setTimeout(this.$$d_$3M_3, 1)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$1_3);
            this.$1_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $3M_3: function() {
        if (this.get_isDisposed()) return;
        this.set_value(this.$5_3);
        this.$f_3 && this.SetFocus();
        this.SetMode(this.$0_3.$B_3)
    },
    SetFocus: function() {
        this.$f_3 = true;
        if (this.$9_3) {
            this.$1_3.SetFocus();
            this.$f_3 = false
        }
    },
    getFieldList: function() { return Mscrm.FormControlInputBehavior.GetBehavior(this.$1_3.get_innerControl().id) },
    $2q_3: function($p0, $p1) {
        var $v_0 = new Mscrm.FieldChangeEventArgs($p0, this.getFieldList(), $p1);
        this.fireControlEvent("OnChange", $v_0);
        return $v_0
    },
    $2H_3: function($p0, $p1) {
        var $v_0 = this.getFieldList();
        if ($v_0.get_selectedIndex() === -1) return;
        var $v_1 = $p0, $v_2 = this.$5_3;
        this.$5_3 = $v_1.get_value();
        var $v_3 = $v_0.get_selectedOption(), $v_4 = this.$2q_3(false, $v_3.parentNode.id);
        if ($v_4.get_isDefaultPrevented()) {
            $v_1.set_value($v_2);
            this.$5_3 = $v_2
        }
    },
    $3V_3: function($p0) {
        var $v_0 = {};
        $v_0["ShowOnlyFilterControl"] = this.$0_3.$l_3;
        var $v_1 = this.$0_3.$3_3.GetElement("Field", $p0, $v_0), $v_2 = this.$0_3.$3_3.GetElement("Entity", $p0, null);
        $v_1 = "<optgroup id='fld' label=\"" +
            window.LOCID_AF_OPTGRPFIELDS +
            '">' +
            (IsNull($v_1) ? "" : $v_1) +
            "</optgroup>";
        $v_2 = "<optgroup id='ent' label=\"" +
            window.LOCID_AF_OPTGRPRELATED +
            '">' +
            (IsNull($v_2) ? "" : $v_2) +
            "</optgroup>";
        return this.$s_3 ? $v_1 + $v_2 : $v_1
    },
    SetMode: function(mode) {
        this.$1_3.$c_3 = mode === 1;
        this.$1_3.SetMode(mode)
    }
};
Mscrm.FilterControl = function(element) {
    this.$$d_$2H_3 = Function.createDelegate(this, this.$2H_3);
    this.$27_3 = [];
    Mscrm.FilterControl.initializeBase(this, [element])
};
Mscrm.FilterControl.prototype = {
    $9_3: false,
    $e_3: null,
    $1H_3: null,
    $o_3: null,
    $E_3: null,
    $H_3: null,
    $8_3: null,
    $0_3: null,
    $2_3: null,
    $F_3: false,
    get_isReadOnly: function() { return this.$F_3 },
    set_isReadOnly: function(value) {
        this.$F_3 = value;
        return value
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    setFetchXml: function(value) {
        this.$H_3 = value;
        if (!this.$9_3 || IsNull(value)) return;
        if (this.$0_3.$B_3 === 1) {
            var $v_6 = !!value &&
                !!XUI.Xml.SelectSingleNode(value, ".//condition[(not(@uihidden) or @uihidden='0')]", null);
            this.setDisplay($v_6, this.$0_3.$B_3);
            this.$1H_3.style.display = "none"
        }
        var $v_0 = XUI.Xml.SelectNodes(value, "filter", null), $v_1 = 0, $v_2 = $v_0.length, $v_3, $v_4 = "";
        if ($v_2 === 1) {
            var $v_7 = $v_0[0].attributes.getNamedItem("type");
            $v_4 = IsNull($v_7) ? "and" : $v_7.nodeValue.toLowerCase()
        }
        if ($v_4 === "or" || $v_2 > 1) {
            var $v_8 = value.ownerDocument.createElement("filter"), $v_9 = value.ownerDocument.createAttribute("type");
            $v_9.nodeValue = "and";
            $v_8.attributes.setNamedItem($v_9);
            for ($v_1 = 0; $v_1 < $v_2; $v_1++) $v_8.appendChild($v_0[$v_1]);
            $v_3 = this.$1P_3(1, null);
            $v_3.setFetchXml($v_8)
        } else if ($v_2 === 1) {
            $v_3 = this.$1P_3(1, null);
            $v_3.setFetchXml($v_0[0])
        }
        var $v_5 = XUI.Xml.SelectNodes(value, "link-entity", null);
        $v_2 = $v_5.length;
        for ($v_1 = 0; $v_1 < $v_2; $v_1++) {
            var $v_A = this.addNewFilterEntity(1, null);
            $v_A.setFetchXml($v_5[$v_1])
        }
    },
    get_children: function() {
        var $v_0 = [], $v_1 = this.$e_3.children.length, $v_2 = 0;
        while ($v_2 < $v_1) {
            $v_0[$v_0.length] = this.$2c_3($v_2);
            $v_2++
        }
        $v_1 = this.$o_3.children.length;
        $v_2 = 0;
        while ($v_2 < $v_1) {
            $v_0[$v_0.length] = this.$2b_3($v_2);
            $v_2++
        }
        return $v_0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element()
            .innerHTML =
            "<div class='ms-crm-AdvFind-Filter' style='display:none'></div><div class='ms-crm-AdvFind-EmptyField'><span class='ms-crm-AdvFind-EmptyField'></span></div><div class='afEntityControls' style='display:none'></div>";
        this.$e_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        this.$1H_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1);
        this.$o_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 2);
        this.$9_3 = true;
        this.setFetchXml(this.$H_3);
        this.$H_3 = null;
        var $v_0 = window.document.createElement("Crm:FieldList");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "_fieldList");
        XUI.Html.DomUtils.GetFirstChild(this.$1H_3).appendChild($v_0);
        var $v_1 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_1["width"] = 300;
        if (!IsNull(this.$0_3)) $v_1["relatedEntitiesVisible"] = this.$0_3.$s_3;
        $v_1["isReadOnly"] = this.$F_3;
        var $v_2 = {};
        $v_2["onChange"] = this.$$d_$2H_3;
        this.$E_3 = $create(Mscrm.FieldList, $v_1, $v_2, null, $v_0)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$e_3)) {
            Mscrm.AdvFind.disposeDirectChilds(this.$e_3);
            this.$e_3 = null
        }
        if (!IsNull(this.$o_3)) {
            Mscrm.AdvFind.disposeDirectChilds(this.$o_3);
            this.$o_3 = null
        }
        if (!IsNull(this.$E_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$E_3);
            this.$E_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    SetMode: function(mode) {
        var $v_0 = false, $v_1 = this.$e_3.children.length - 1;
        while ($v_1 >= 0) {
            if (this.$2c_3($v_1).style.display !== "none") {
                $v_0 = true;
                break
            }
            $v_1--
        }
        $v_1 = this.$o_3.children.length - 1;
        while ($v_1 >= 0 && !$v_0) {
            if (this.$2b_3($v_1).style.display !== "none") $v_0 = true;
            $v_1--
        }
        if (mode === 1) this.$1H_3.style.display = "none";
        else {
            this.$1H_3.style.display = "";
            this.$E_3.SetMode(mode)
        }
        this.setDisplay($v_0, mode)
    },
    setDisplay: function(visibleInSimple, mode) {
        ShowIfDetailedOrNotHidden(this.get_element(), visibleInSimple, mode);
        var $v_0 = this.get_element().style.display === "inline";
        this.get_element().style.display = $v_0 ? "block" : "none"
    },
    SetFocus: function() { this.$E_3.SetFocus() },
    $2c_3: function($p0) { return XUI.Html.DomUtils.GetChildElementAt(this.$e_3, $p0) },
    $2b_3: function($p0) { return XUI.Html.DomUtils.GetChildElementAt(this.$o_3, $p0) },
    $2L_3: 0,
    $1P_3: function($p0, $p1) {
        var $v_0 = window.document.createElement("Crm:FilterFieldGroup");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "FGRP") + this.$2L_3++;
        var $v_1 = this.AddControl($v_0, $p0, $p1);
        if (!IsNull($v_1))
            return $create(Mscrm.FilterFieldGroup, Mscrm.AdvFind.getPropertiesForChild(this), null, null, $v_0);
        return null
    },
    $2H_3: function($p0, $p1) {
        var $v_0 = $p1;
        if ($v_0.groupType === "fld") {
            var $v_1 = null, $v_2 = XUI.Html.DomUtils.GetLastChild(this.$e_3);
            if (!IsNull($v_2) && !IsNull($v_2.id)) $v_1 = $find($v_2.id);
            if (IsNull($v_1)) {
                $v_1 = this.$1P_3(1, null);
                $v_1.set_groupClause("and")
            }
            if ($v_1.$b_3 !== "and") {
                var $v_4 = this.$1P_3(1, null);
                $v_4.set_groupClause("and");
                $v_1 = $find(this.$e_3.removeChild($v_1.get_element()).id);
                $v_4.AddControl($v_1.get_element(), 2, null, 0);
                $v_1 = $v_4
            }
            var $v_3 = $v_1.AddNewFilterField(1, null);
            $v_3.set_hideInSimple(false);
            $v_3.set_field($v_0.fieldList.get_dataValue());
            $v_3.SetFocus()
        } else this.$31_3($v_0.fieldList.get_selectedOption().getAttribute("value"), 1);
        this.$0_3.set_isDirty(true);
        $v_0.preventDefault()
    },
    findChildControl: function(controlType, value) {
        var $v_0 = controlType === "FilterEntity" ? this.$o_3 : this.$e_3, $v_1 = null, $$t_6 = this;
        XUI.Html.DomUtils.ForEachChild($v_0,
            function($p1_0) {
                var $v_2 = $find($p1_0.id);
                if ($v_2.get_value() === value) {
                    $v_1 = $v_2;
                    return true
                }
                return false
            });
        return $v_1
    },
    $31_3: function($p0, $p1) {
        var $v_0 = this.findChildControl("FilterEntity", $p0);
        if (IsNull($v_0)) {
            $v_0 = this.addNewFilterEntity($p1, null);
            $v_0.set_value($p0)
        } else if ($v_0.get_visible()) alert(window.LOCID_AF_RELENTITYEXISTSINQUERY);
        else {
            $v_0.setVisible(true);
            $v_0.$h_3 = null
        }
        return $v_0
    },
    addNewFilterEntity: function(where, control) {
        var $v_0 = window.document.createElement("Crm:FilterEntity");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "FE") + this.$2L_3++;
        var $v_1 = this.AddControl($v_0, where, control);
        if (!IsNull($v_1))
            return $create(Mscrm.FilterEntity, Mscrm.AdvFind.getPropertiesForChild(this), null, null, $v_1);
        return null
    },
    $32_3: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetPrevSibling($p1);
        if (!IsNull($p1) && !IsNull($v_0)) {
            var $v_3 = $find($v_0.id);
            if (!IsNull($v_3) && $v_3.$b_3 === "and") return $v_3.AddControl($p0, 1, null)
        }
        var $v_1 = XUI.Html.DomUtils.GetNextSibling($p1);
        if (!IsNull($p1) && !IsNull($v_1)) {
            var $v_4 = $find($v_1.id);
            !IsNull($v_4) && $v_4.$b_3 === "and" && $v_4.AddControl($p0, 2, null)
        }
        var $v_2 = this.$1P_3(3, $p1);
        $v_2.set_groupClause("and");
        return $v_2.AddControl($p0, 1, null)
    },
    AddControl: function(control, where, whichControl, pos, ungrouping) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_parentControl(this);
            $v_0.set_container(this.$0_3);
            $v_0.set_entityName(this.$2_3)
        }
        if (this.$9_3) {
            var $v_1 = control.tagName.toUpperCase(),
                $v_2 = Mscrm.AdvFind.checkControlByTagName($v_1, "Crm:FilterEntity") ? this.$o_3 : this.$e_3;
            if (Mscrm.AdvFind
                .checkControlByTagName($v_1, "Crm:FilterField") &&
                ungrouping) return this.$32_3(control, whichControl);
            if (IsNull(pos)) {
                if ((where === 3 || where === 4) && (IsNull(whichControl) || whichControl.parentNode !== $v_2)
                ) return null;
                $v_2.style.display = "block";
                var $v_3;
                switch (where) {
                case 2:
                    if ($v_2.hasChildNodes()) $v_2.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt($v_2, 0));
                    else $v_2.appendChild(control);
                    break;
                case 3:
                    var $v_4 = false;
                    $v_3 = $v_2.children.length - 2;
                    while ($v_3 >= 0) {
                        if (XUI.Html.DomUtils.GetChildElementAt($v_2, $v_3) === whichControl) {
                            $v_2.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt($v_2, $v_3 + 1));
                            $v_4 = true;
                            break
                        }
                        $v_3--
                    }
                    !$v_4 && $v_2.appendChild(control);
                    break;
                case 4:
                    $v_3 = $v_2.children.length - 1;
                    while ($v_3 >= 0) {
                        var $v_5 = XUI.Html.DomUtils.GetChildElementAt($v_2, $v_3);
                        $v_5 === whichControl && $v_2.insertBefore(control, $v_5);
                        $v_3--
                    }
                    break;
                case 1:
                default:
                    $v_2.appendChild(control);
                    break
                }
            } else {
                if (pos >= $v_2.children.length || pos < 0) return null;
                $v_2.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt($v_2, pos))
            }
        } else {
            if (where !== 1) return null;
            this.$27_3[this.$27_3.length] = control
        }
        return control
    },
    deleteControl: function(control, detachAjaxControl) {
        var $v_0 = Mscrm.AdvFind.checkControlByTagName(control.tagName, "Crm:FilterEntity") ? this.$o_3 : this.$e_3;
        detachAjaxControl && Mscrm.AdvFind.disposeAndDeleteControl($find(control.id));
        $v_0.removeChild(control);
        if (!$v_0.children.length) $v_0.style.display = "none";
        this.$0_3.set_isDirty(true)
    },
    clearControls: function() {
        for (var $v_0 = this.get_children(), $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
            var $v_2 = $v_0[$v_1];
            if (Mscrm.AdvFind.checkControlByTagName($v_2
                .tagName,
                "Crm:FilterEntity")) $find($v_2.id).DeleteRelatedEntity(null, false);
            else this.deleteControl($v_2, true)
        }
    }
};
Mscrm.FilterEntity = function(element) {
    this.$$d_deleteRelatedEntityMenu = Function.createDelegate(this, this.deleteRelatedEntityMenu);
    this.$$d_$3c_3 = Function.createDelegate(this, this.$3c_3);
    this.$$d_$2Z_3 = Function.createDelegate(this, this.$2Z_3);
    this.$$d_$2M_3 = Function.createDelegate(this, this.$2M_3);
    this.$$d_$21_3 = Function.createDelegate(this, this.$21_3);
    this.$$d_$22_3 = Function.createDelegate(this, this.$22_3);
    this.$$d_$2v_3 = Function.createDelegate(this, this.$2v_3);
    this.$$d_$3Y_3 = Function.createDelegate(this, this.$3Y_3);
    this.$$d_DeleteRelatedEntity = Function.createDelegate(this, this.DeleteRelatedEntity);
    this.$$d_$3E_3 = Function.createDelegate(this, this.$3E_3);
    Mscrm.FilterEntity.initializeBase(this, [element])
};
Mscrm.FilterEntity.prototype = {
    $G_3: null,
    $p_3: null,
    $5_3: null,
    $H_3: null,
    $1A_3: false,
    $2C_3: true,
    $1C_3: false,
    $1L_3: "",
    $T_3: false,
    initialize: function() {
        var $v_0 = null;
        if (!IsNull(this.$H_3)) {
            $v_0 = this.$34_3(this.$H_3, this.$2_3, this.$0_3.$3_3);
            if ($v_0) this.$1A_3 = $v_0.ErrorType === "ERROR"
        }
        if (this.$1A_3) {
            this.get_element().innerHTML = "<div class='ms-crm-AdvFind-FilterEntityError'><img tabindex=0 src='" +
                window.CDNURL +
                "/_imgs/ico/16_l_remove.gif' class='ms-crm-AdvFind-ButtonImage' align='middle' alt=\"" +
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_DELERRCLAUSE) +
                "\"><img tabindex=0 src='/_imgs/error/notif_icn_warn16.png' align='middle' alt=\"" +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0.Message) +
                '">' +
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_AF_ERRINLINKENTITY) +
                "</div>";
            var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_1, 0), "keyup", this.$$d_$3E_3);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_1, 0), "click", this.$$d_DeleteRelatedEntity);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_1, 1), "keyup", this.$$d_$3Y_3);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_1, 1), "click", this.$$d_$3Y_3);
            this.$1w_3(this.$H_3);
            this.$T_3 = true
        } else {
            var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/grid/dropdown_arrow.png"));
            this.get_element().innerHTML = String
                .format("<div class='ms-crm-AdvFind-FilterEntity'><span tabindex=0 class='ms-crm-AdvFind-FilterEntityMenu'><img alt='' src='{0}' class = 'ms-crm-View-icon {1}'><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title=\"{2}\" class='atLink'></a></span><span class='ms-crm-AdvFind-EntitySelector'><{3}/></span></div><div class='ms-crm-AdvFind-FilterEntityControl'></div>", $v_2.source, $v_2.cssClass, CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATENTITY), "Crm:EntityList");
            this.$T_3 = true;
            this.$G_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.get_element()));
            this.$p_3 = XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1);
            $addHandler(this.$G_3, "click", this.$$d_$2v_3);
            $addHandler(this.$G_3, "mouseover", this.$$d_$22_3);
            $addHandler(this.$G_3, "mouseout", this.$$d_$21_3);
            $addHandler(this.$G_3, "keyup", this.$$d_$2M_3);
            this.$G_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "MNU");
            XUI.Html.DomUtils.GetLastChild(this.$G_3).id = "at" + this.$G_3.id;
            this.$G_3.style.display = this.$0_3.$B_3 === 1 ? "none" : "";
            var $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(this.get_element()), 1));
            $v_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "ENT");
            var $v_4 = {};
            $v_4["onChange"] = this.$$d_$2Z_3;
            $create(Mscrm.EntityList, Mscrm.AdvFind.getPropertiesForChild(this), $v_4, null, $v_3);
            this.setFetchXml(this.$H_3);
            this.set_value(this.$5_3)
        }
        this.$H_3 = null;
        this.SetMode(this.$0_3.$B_3, true)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.$1b_3();
        !IsNull($v_0) && Mscrm.AdvFind.disposeAndDeleteControl($v_0);
        if (!IsNull(this.$p_3)) {
            Mscrm.AdvFind.disposeDirectChilds(this.$p_3);
            this.$p_3 = null
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $0_3: null,
    $8_3: null,
    $2_3: null,
    $h_3: null,
    $W_3: null,
    $V_3: null,
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_linkType: function() { return this.$h_3 },
    set_linkType: function(value) {
        this.$h_3 = value;
        return value
    },
    get_columnsXml: function() { return this.$W_3 },
    set_columnsXml: function(value) {
        this.$W_3 = value;
        return value
    },
    get_alias: function() { return this.$V_3 },
    set_alias: function(value) {
        this.$V_3 = value;
        return value
    },
    add_onEntityChange: function(value) { this.get_events().addHandler("OnEntityChange", value) },
    remove_onEntityChange: function(value) { this.get_events().removeHandler("OnEntityChange", value) },
    $1w_3: function($p0) {
        if (IsNull($p0)) return;
        var $v_0 = $p0.ownerDocument.createAttribute("done");
        $p0.attributes.setNamedItem($v_0);
        var $v_1 = false, $v_2 = $p0.attributes.getNamedItem("intersect");
        if (!IsNull($v_2)) $v_1 = XUI.Xml.GetText($v_2) === "true";
        if ($v_1) {
            var $v_3 = $p0.firstChild;
            $v_0 = $v_3.ownerDocument.createAttribute("done");
            $v_3.attributes.setNamedItem($v_0)
        }
    },
    $2M_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.$2v_3($p0)
    },
    $22_3: function($p0) { this.$G_3.className = "ms-crm-AdvFind-FilterEntitySelectedMenu" },
    $21_3: function($p0) { this.$G_3.className = "ms-crm-AdvFind-FilterEntityMenu" },
    get_filterControl: function() {
        return this.$1A_3
            ? null
            : XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetChildElementAt(this.get_element(), 1))
    },
    $1b_3: function() {
        if (this.$1A_3) return null;
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        if (IsNull($v_0)) return null;
        $v_0 = XUI.Html.DomUtils.GetChildElementAt($v_0, 1);
        if (IsNull($v_0)) return null;
        $v_0 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (IsNull($v_0)) return null;
        return $find($v_0.id)
    },
    get_value: function() { return this.$5_3 },
    set_value: function(value) {
        this.$5_3 = value;
        if (this.$T_3) {
            this.$1b_3().set_dataValue(value);
            IsNull(this.get_filterControl()) && this.$2D_3(true)
        }
        return value
    },
    SetMode: function(mode, fromInit) {
        if (this.$1A_3) return;
        this.$G_3.style.display = mode === 1 ? "none" : "";
        var $v_0 = false, $v_1 = this.get_filterControl();
        if (!IsNull($v_1)) $v_0 = $v_1.style.display !== "none";
        (IsNull(fromInit) || !fromInit) && this.$1b_3().SetMode(mode);
        this.getVisible() && ShowIfDetailedOrNotHidden(this.get_element(), $v_0, mode)
    },
    SetFocus: function() { this.$1b_3().SetFocus() },
    $4_3: null,
    $1a_3: null,
    $1k_3: null,
    $2v_3: function($p0) {
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement("DIV");
            $v_0.setAttribute("id", "menuContainer");
            document.body.appendChild($v_0);
            this.$4_3 = Mscrm.Menu.createMenu($v_0);
            this.$4_3.set_menuId(this.$G_3.id);
            this.$4_3.set_stylePrefix("POPUP");
            this.$4_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
            this.$4_3.set_left($p0.clientX - $p0.offsetX);
            this.$4_3.set_width(170);
            this.$1a_3 = Mscrm.MenuItem.createMenuItem("");
            this.$1a_3.set_actionCallback(this.$$d_$3c_3);
            this.$4_3.addItem(this.$1a_3);
            this.$1k_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$1k_3.set_actionCallback(this.$$d_deleteRelatedEntityMenu);
            this.$4_3.addItem(this.$1k_3)
        }
        this.$1a_3.set_title(this.$p_3.style.display === "none"
            ? window.LOCID_AF_EXPANDENTITY
            : window.LOCID_AF_COLLAPSEENTITY);
        this.$4_3.show()
    },
    deleteRelatedEntityMenu: function(menu) { this.DeleteRelatedEntity(null, true) },
    DeleteRelatedEntity: function(domEvent, prompt) {
        if ("undefined" === typeof prompt) prompt = true;
        if (!prompt || confirm(window.LOCID_AF_DELETEENTITY))
            if (!IsNull(this.$W_3)) {
                this.$2D_3(true);
                this.setVisible(false);
                this.$h_3 = "outer";
                this.$0_3.set_isDirty(true)
            } else this.$8_3.deleteControl(this.get_element(), true)
    },
    deleteControl: function(control, detachAjaxControl) {
        if (!IsNull(this.get_filterControl())) {
            this.$2G_3();
            this.$0_3.set_isDirty(true)
        }
    },
    get_children: function() {
        var $v_0 = this.get_filterControl();
        if (IsNull($v_0)) return null;
        var $v_1 = [];
        $v_1[0] = $v_0;
        return $v_1
    },
    GetFetchStartElement: function() {
        if (this.$0_3.$M_3 === 1)
            return '<link-entity uiname="' +
                CrmEncodeDecode.CrmXmlEncode(this.$1b_3().getEntityList().get_selectedText()) +
                '">';
        if (this.$1A_3) {
            alert(window.LOCID_AF_ERRINSOMECLAUSES);
            return null
        }
        var $v_0 = this.$5_3.split(";");
        this.$1C_3 = false;
        if ($v_0.length > 3) this.$1C_3 = $v_0[3] === "true";
        this.$V_3 = IsNull(this.$V_3)
            ? GetNextAliasForLinkEntity(this.$0_3.$g_3, this.$0_3.get_element().getAttribute("aliasesInInitialFetch"))
            : this.$V_3;
        var $v_1;
        if (!this.$1C_3) {
            $v_1 = '<link-entity name="' + CrmEncodeDecode.CrmXmlEncode($v_0[0]) + '"';
            if (!isNullOrEmptyString($v_0[1])) $v_1 += ' from="' + CrmEncodeDecode.CrmXmlEncode($v_0[1]) + '"';
            if (!isNullOrEmptyString($v_0[2])) $v_1 += ' to="' + CrmEncodeDecode.CrmXmlEncode($v_0[2]) + '"';
            if (!this.getVisible()) $v_1 += ' visible="false"';
            if (!IsNull(this.$h_3)) $v_1 += ' link-type="' + CrmEncodeDecode.CrmXmlEncode(this.$h_3) + '"';
            $v_1 += ' alias="' + CrmEncodeDecode.CrmXmlEncode(this.$V_3) + '">';
            this.$1L_3 = "many-to-one";
            if (!isNullOrEmptyString($v_0[1]) && !isNullOrEmptyString($v_0[2])) {
                var $v_2 = this.$0_3.$3_3.GetRelatedEntity($v_0[0], $v_0[1], $v_0[2], this.$2_3);
                if (!IsNull($v_2)) {
                    var $v_3 = XUI.Xml.GetText($v_2.attributes.getNamedItem("relationshiptype"));
                    if (!isNullOrEmptyString($v_3)) this.$1L_3 = $v_3
                }
            }
        } else {
            var $v_4 = $v_0[4], $v_5 = $v_0[5], $v_6 = $v_0[6], $v_7 = $v_0[7], $v_8 = $v_0[8];
            $v_1 = '<link-entity name="' + CrmEncodeDecode.CrmXmlEncode($v_4) + '"';
            $v_1 += ' from="' + CrmEncodeDecode.CrmXmlEncode($v_7) + '"';
            $v_1 += ' to="' + CrmEncodeDecode.CrmXmlEncode($v_5) + '"';
            $v_1 += ' visible="false"';
            $v_1 += ' intersect="true"';
            $v_1 += ">";
            $v_1 += '<link-entity name="' + CrmEncodeDecode.CrmXmlEncode($v_0[0]) + '"';
            $v_1 += ' from="' + CrmEncodeDecode.CrmXmlEncode($v_6) + '"';
            $v_1 += ' to="' + CrmEncodeDecode.CrmXmlEncode($v_8) + '"';
            if (!this.getVisible()) $v_1 += ' visible="false"';
            $v_1 += ' alias="' + CrmEncodeDecode.CrmXmlEncode(this.$V_3) + '">';
            this.$1L_3 = "many-to-many"
        }
        if (!IsNull(this.$W_3)) $v_1 += this.$W_3;
        else this.$V_3 = null;
        return $v_1
    },
    GetFetchEndElement: function() {
        if (this.$0_3.$M_3 === 1) return "</link-entity>";
        var $v_0 = "</link-entity>";
        if (this.$1C_3) $v_0 += "</link-entity>";
        return $v_0
    },
    setFetchXml: function(value) {
        this.$H_3 = value;
        if (!this.$T_3 || IsNull(value)) return;
        var $v_0 = value, $v_1 = false, $v_2 = value.attributes.getNamedItem("intersect");
        if (!IsNull($v_2)) $v_1 = XUI.Xml.GetText($v_2) === "true";
        if ($v_1) value = value.firstChild;
        if ($v_1) {
            var $v_9 = XUI.Xml.GetText($v_0.attributes.getNamedItem("name")),
                $v_A = $v_0.attributes.getNamedItem("to"),
                $v_B = $v_A ? XUI.Xml.GetText($v_A) + ";" : ";",
                $v_C = value.attributes.getNamedItem("from"),
                $v_D = $v_C ? XUI.Xml.GetText($v_C) + ";" : ";",
                $v_E = $v_0.attributes.getNamedItem("from"),
                $v_F = $v_E ? XUI.Xml.GetText($v_E) + ";" : ";",
                $v_G = value.attributes.getNamedItem("to"),
                $v_H = $v_G ? XUI.Xml.GetText($v_G) + ";" : ";",
                $v_I = XUI.Xml.GetText(value.attributes.getNamedItem("name")) + ";;;true;";
            $v_I += $v_9 + ";";
            this.set_value($v_I + $v_B + $v_D + $v_F + $v_H);
            var $v_J = XUI.Xml.SelectNodes(value, "./attribute", null);
            this.$W_3 = $v_J.length > 0 ? "" : null;
            for (var $v_K = 0; $v_K < $v_J.length; $v_K++)
                this.$W_3 += XUI.Xml.XMLSerializer.serializeToString($v_J[$v_K])
        } else {
            var $v_L = value.attributes.getNamedItem("name"),
                $v_M = value.attributes.getNamedItem("from"),
                $v_N = value.attributes.getNamedItem("to"),
                $v_O = (IsNull($v_L) ? "" : XUI.Xml.GetText($v_L)) + ";",
                $v_P = IsNull($v_M) ? null : XUI.Xml.GetText($v_M);
            $v_P = $v_P ? $v_P + ";" : ";";
            var $v_Q = IsNull($v_N) ? null : XUI.Xml.GetText($v_N);
            $v_Q = $v_Q ? $v_Q : "";
            this.set_value($v_O + $v_P + $v_Q);
            var $v_R = XUI.Xml.SelectNodes(value, "./attribute", null);
            this.$W_3 = $v_R.length > 0 ? "" : null;
            for (var $v_S = 0; $v_S < $v_R.length; $v_S++)
                this.$W_3 += XUI.Xml.XMLSerializer.serializeToString($v_R[$v_S])
        }
        var $v_3 = value.attributes.getNamedItem("alias"), $v_4 = value.attributes.getNamedItem("link-type");
        this.$V_3 = IsNull($v_3) ? null : XUI.Xml.GetText($v_3);
        this.$h_3 = IsNull($v_4) ? null : XUI.Xml.GetText($v_4);
        var $v_5 = this.$2D_3(true), $v_6 = XUI.Xml.SelectNodes(value, "filter|link-entity", null);
        if (this.$0_3.$B_3 === 1) {
            for (var $v_T = null, $v_V = 0; $v_V < $v_6.length; $v_V++) {
                var $v_W = XUI.Xml
                    .SelectSingleNode($v_6[$v_V], ".//condition[(not(@uihidden) or @uihidden='0')]", null);
                if (!IsNull($v_W)) {
                    $v_T = $v_W;
                    break
                }
            }
            var $v_U = !IsNull($v_6) && !IsNull($v_T);
            $v_5.setDisplay($v_U, this.$0_3.$B_3);
            ShowIfDetailedOrNotHidden(this.get_element(), $v_U, this.$0_3.$B_3)
        }
        $v_5.setFetchXml(value);
        var $v_7 = value.attributes.getNamedItem("visible"),
            $v_8 = XUI.Xml.SelectNodes(value, ".//filter", null).length > 0;
        this.setVisible(IsNull($v_7) || XUI.Xml.GetText($v_7) === "true" || $v_8);
        this.$1w_3($v_0)
    },
    setVisible: function(value) {
        this.get_element().style.display = value ? "" : "none";
        this.$2C_3 = value
    },
    getVisible: function() { return this.$2C_3 },
    get_intersect: function() { return this.$1C_3 },
    set_intersect: function(value) {
        this.$1C_3 = value;
        return value
    },
    get_relationshipType: function() { return this.$1L_3 },
    $3c_3: function($p0) { this.$2w_3(false) },
    $2w_3: function($p0) {
        if (!this.$T_3) return;
        !IsNull(this.$4_3) && this.$4_3.hide();
        this.$p_3.style.display = this.$p_3.style.display === "none" || $p0 ? "" : "none"
    },
    $2D_3: function($p0) {
        this.$2G_3();
        if (IsNull(this.$5_3)) return null;
        var $v_0 = window.document.createElement("Crm:FilterControl");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "E");
        $v_0.className = "FilterControl";
        this.$p_3.appendChild($v_0);
        var $v_1 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_1["entityName"] = this.$5_3.split(";")[0];
        var $v_2 = $create(Mscrm.FilterControl, $v_1, null, null, $v_0);
        this.$2w_3($p0);
        return $v_2
    },
    $2G_3: function() {
        var $v_0 = this.get_filterControl();
        if (!IsNull($v_0)) {
            Mscrm.AdvFind.disposeDirectChilds(this.$p_3);
            this.$p_3.innerHTML = ""
        }
    },
    $2Z_3: function($p0, $p1) {
        var $v_0 = $p1.autoShowControl,
            $v_1 = this.$5_3,
            $v_2 = $v_0.get_value(),
            $v_3 = IsNull($v_1) ? null : $v_1.split(";")[0],
            $v_4 = IsNull($v_2) ? null : $v_2.split(";")[0],
            $v_5 = this.$8_3.findChildControl("FilterEntity", $v_1),
            $v_6 = this.$8_3.findChildControl("FilterEntity", $v_2),
            $v_7 = this.$W_3,
            $v_8 = this.$V_3,
            $v_9 = null,
            $v_A = null;
        if (!IsNull($v_6)) {
            $v_9 = $v_6.$W_3;
            $v_A = $v_6.$V_3
        }
        if (!IsNull($v_6) && $v_6.getVisible()) {
            $v_0.set_value(this.$5_3);
            alert(window.LOCID_AF_RELENTITYEXISTSINQUERY);
            return
        }
        if ($v_3 !== $v_4) {
            if (!confirm(window.LOCID_AF_CHANGEENTITY)) {
                $v_0.set_value(this.$5_3);
                return
            }
            this.$2G_3();
            this.set_value($v_2);
            if (!IsNull($v_7)) {
                $v_5.setVisible(false);
                $v_5.$h_3 = "outer"
            }
            if (!IsNull($v_6))
                if (!IsNull($v_7)) {
                    $v_6.setVisible(true);
                    $v_6.$h_3 = null
                } else {
                    $v_5.set_value($v_2);
                    $v_5.$W_3 = $v_9;
                    $v_5.$V_3 = $v_A;
                    this.$8_3.deleteControl($v_6.get_element(), false)
                }
            else if (!IsNull($v_7)) {
                $v_6 = this.$8_3.addNewFilterEntity(1, null);
                $v_6.set_value($v_2)
            } else $v_5.set_value($v_2)
        } else if (!IsNull($v_6))
            if (!IsNull($v_7)) {
                $v_5.$W_3 = $v_9;
                $v_6.$W_3 = $v_7;
                $v_5.$V_3 = $v_A;
                $v_6.$V_3 = $v_8;
                $v_5.$h_3 = null
            } else {
                $v_5.set_value($v_2);
                $v_5.$W_3 = $v_9;
                $v_5.$V_3 = $v_A;
                this.$8_3.deleteControl($v_6.get_element(), false)
            }
        else if (!IsNull($v_7)) {
            $v_6 = this.$8_3.addNewFilterEntity(1, null);
            $v_6.set_value($v_1);
            $v_6.$W_3 = $v_7;
            $v_6.$V_3 = $v_8;
            $v_6.setVisible(false);
            $v_6.$h_3 = "outer";
            $v_5.set_value($v_2);
            $v_5.$h_3 = $v_5.$V_3 = $v_5.$W_3 = null
        } else $v_5.set_value($v_2);
        this.$0_3.set_isDirty(true)
    },
    $3E_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.DeleteRelatedEntity($p0, true)
    },
    $3Y_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($p0.type === "click" || $v_0 === 32 || $v_0 === 13) && alert($p0.target.title)
    },
    $34_3: function($p0, $p1, $p2) {
        var $v_0 = XUI.Xml.GetText($p0.attributes.getNamedItem("name")).toLowerCase(),
            $v_1 = "",
            $v_2 = XUI.Xml.GetText($p0.attributes.getNamedItem("from"));
        if (!IsNull($v_2)) $v_1 = $v_2.toLowerCase();
        var $v_3 = "", $v_4 = XUI.Xml.GetText($p0.attributes.getNamedItem("to"));
        if (!IsNull($v_4)) $v_3 = $v_4.toLowerCase();
        var $v_5 = XUI.Xml.GetText($p0.attributes.getNamedItem("intersect")) === "true", $v_6 = null;
        if (!$v_5 && !$v_1.length && !$v_3.length) {
            var $v_7 = '<related entity="' +
                    CrmEncodeDecode.CrmXmlEncode($p1) +
                    '">' +
                    $p2.GetElement("Entity", $p1, null) +
                    "</related>",
                $v_8 = XUI.Xml.LoadXml($v_7),
                $v_9 = XUI.Xml.SelectNodes($v_8, '/related/option[@entity="' + $v_0 + '"]', null),
                $v_A = false,
                $v_B = false;
            if ($v_9)
                for (var $v_C = 0; $v_C < $v_9.length; $v_C++) {
                    var $v_D = XUI.Xml.GetText($v_9[$v_C].attributes.getNamedItem("value")).split(";");
                    if ($v_D.length > 3 && $v_D[3] === "true")
                        if ($v_A) {
                            $v_B = true;
                            break
                        } else {
                            $v_A = true;
                            $v_6 = $v_9[$v_C]
                        }
                }
            if ($v_A && !$v_B) {
                var $v_E = XUI.Xml.GetText($v_6.attributes.getNamedItem("value")).split(";");
                if ($v_E.length > 8) {
                    var $v_F = $v_E[4],
                        $v_G = $v_E[5],
                        $v_H = $v_E[6],
                        $v_I = $v_E[7],
                        $v_J = $v_E[8],
                        $v_K = XUI.Xml.GetText($p0.attributes.getNamedItem("alias")),
                        $v_L = $p0.ownerDocument,
                        $v_M = $v_L.createElement("link-entity"),
                        $v_N = $v_L.createAttribute("name");
                    $v_N.nodeValue = $v_0;
                    $v_M.attributes.setNamedItem($v_N);
                    if (!IsNull($v_K)) {
                        $v_N = $v_L.createAttribute("alias");
                        $v_N.nodeValue = $v_K;
                        $v_M.attributes.setNamedItem($v_N);
                        $p0.attributes.removeNamedItem("alias")
                    }
                    $v_N = $v_L.createAttribute("from");
                    $v_N.nodeValue = $v_H;
                    $v_M.attributes.setNamedItem($v_N);
                    $v_N = $v_L.createAttribute("to");
                    $v_N.nodeValue = $v_J;
                    $v_M.attributes.setNamedItem($v_N);
                    $p0.attributes.getNamedItem("name").nodeValue = $v_F;
                    $p0.attributes.getNamedItem("from").nodeValue = $v_I;
                    $p0.attributes.getNamedItem("to").nodeValue = $v_G;
                    $p0.attributes.getNamedItem("visible").nodeValue = "false";
                    $p0.attributes.getNamedItem("intersect").nodeValue = "true";
                    if ($p0.childNodes)
                        for (var $v_O = 0;
                            $v_O < $p0.childNodes.length;
                            $v_O++
                        ) $v_M.appendChild($p0.removeChild($p0.childNodes[$v_O]));
                    $p0.appendChild($v_M);
                    $v_5 = XUI.Xml.GetText($p0.attributes.getNamedItem("intersect")) === "true"
                }
            }
        }
        if (!$v_5) $v_6 = $p2.GetRelatedEntity($v_0, $v_1, $v_3, $p1);
        else {
            var $v_P = $p0.firstChild;
            $v_0 = $v_P.attributes.getNamedItem("name").nodeValue.toLowerCase();
            $v_1 = XUI.Xml.GetText($p0.attributes.getNamedItem("to"));
            $v_3 = $v_P.attributes.getNamedItem("from").nodeValue;
            $v_6 = $p2.GetRelatedEntity($v_0, $v_1, $v_3, $p1)
        }
        if (IsNull($v_6))
            return new Mscrm.FilterFieldError("ERROR", String.format(window.LOCID_AF_RELDOESNOTEXIST, $v_0));
        return null
    }
};
Mscrm.FilterFieldError = function(errorType, message) {
    this.ErrorType = errorType;
    this.Message = message
};
Mscrm.FilterFieldError.prototype = { ErrorType: null, Message: null };
Mscrm.FilterField = function(element) {
    this.$$d_$3C_3 = Function.createDelegate(this, this.$3C_3);
    this.$$d_$3a_3 = Function.createDelegate(this, this.$3a_3);
    this.$$d_$26_3 = Function.createDelegate(this, this.$26_3);
    this.$$d_$21_3 = Function.createDelegate(this, this.$21_3);
    this.$$d_$22_3 = Function.createDelegate(this, this.$22_3);
    this.$$d_$2l_3 = Function.createDelegate(this, this.$2l_3);
    this.$$d_$2M_3 = Function.createDelegate(this, this.$2M_3);
    this.$$d_$3e_3 = Function.createDelegate(this, this.$3e_3);
    this.$$d_$2n_3 = Function.createDelegate(this, this.$2n_3);
    this.$$d_$2H_3 = Function.createDelegate(this, this.$2H_3);
    this.$$d_$3P_3 = Function.createDelegate(this, this.$3P_3);
    this.$$d_$3Q_3 = Function.createDelegate(this, this.$3Q_3);
    this.$$d_$3Z_3 = Function.createDelegate(this, this.$3Z_3);
    this.$$d_$3B_3 = Function.createDelegate(this, this.$3B_3);
    this.$$d_$2F_3 = Function.createDelegate(this, this.$2F_3);
    this.$$d_$3J_3 = Function.createDelegate(this, this.$3J_3);
    Mscrm.FilterField.initializeBase(this, [element]);
    $addHandler(this.get_element(), "click", this.$$d_$3J_3)
};
Mscrm.FilterField.prototype = {
    $E_3: null,
    $G_3: null,
    $w_3: null,
    $Y_3: null,
    $D_3: null,
    $a_3: false,
    $Q_3: false,
    $P_3: null,
    $6_3: null,
    $5_3: null,
    $4_3: null,
    $1Z_3: null,
    $1Y_3: null,
    $1i_3: null,
    $H_3: null,
    $T_3: false,
    $F_3: false,
    get_isReadOnly: function() { return this.$F_3 },
    set_isReadOnly: function(value) {
        this.$F_3 = value;
        return value
    },
    initialize: function() {
        this.$X_3 = false;
        var $v_0 = false, $v_1 = false, $v_2 = null;
        if (!IsNull(this.$H_3)) {
            $v_2 = this.$33_3(this.$H_3, this.$2_3, this.$0_3.$3_3);
            if ($v_2) {
                $v_0 = $v_2.ErrorType === "ERROR";
                $v_1 = $v_2.ErrorType === "WARN"
            }
        }
        if ($v_0) {
            this.get_element()
                .innerHTML = "<div class='ms-crm-AdvFind-FilterField' style='overflow:hidden'><img tabindex=0 src='" +
                window.CDNURL +
                "/_imgs/ico/16_l_remove.gif' class='ms-crm-AdvFind-ButtonImage' align='middle' alt=\"" +
                CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_DELERRCLAUSE) +
                "\"><img tabindex=0 src='/_imgs/error/notif_icn_warn16.png' align='middle' title=\"" +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_2.Message) +
                '" alt="' +
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_2.Message) +
                "\"><span class='ms-crm-AdvFind-FilterFieldError'>" +
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_AF_ERRINCONDITION) +
                "</span></div>";
            var $v_3 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_3, 0), "click", this.$$d_$2F_3);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_3, 0), "keyup", this.$$d_$3B_3);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_3, 1), "keyup", this.$$d_$3Z_3);
            $addHandler(XUI.Html.DomUtils.GetChildElementAt($v_3, 1), "click", this.$$d_$3Z_3);
            this.$1w_3(this.$H_3);
            this.$T_3 = true
        } else {
            var $v_4 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                .create(window.CDNURL + "/_imgs/grid/dropdown_arrow.png"));
            if ($v_1) {
                this.get_element().innerHTML = String
                    .format("<div class='ms-crm-AdvFind-FilterNewField' style='overflow:hidden'><span tabindex=0 style='visibility:hidden' class='ms-crm-AdvFind-FieldMenu'><img alt='' style='visibility:hidden' src='{0}' class = 'ms-crm-View-icon {1}'/><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title=\"{2}\" class='atLink'></a></span><span class='ms-crm-AdvFind-FieldList'><{5}/></span><span class='ms-crm-AdvFind-OperatorList'><{6}/></span><span class='ms-crm-AdvFind-ClientControl'><{7}/></span><span id='spnWarnIco'><img tabindex=0 src='" + window.CDNURL + "/_imgs/error/notif_icn_warn16.png' align='middle' title=\"{3}\" alt=\"{3}\"></span><span class='ms-crm-AdvFind-HiddenFieldLabel' style='visibility:hidden'>{4}</span></div>", $v_4.source, $v_4.cssClass, CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATNEWFIELD), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2.Message), window.LOCID_AF_CLAUSEHIDDEN, "Crm:FieldList", "Crm:OperatorList", "Crm:ClientControl");
                var $v_C = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild(this.get_element()), 4));
                $addHandler($v_C, "keyup", this.$$d_$3Z_3);
                $addHandler($v_C, "click", this.$$d_$3Z_3)
            } else {
                var $v_D = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/close.png")),
                    $v_E = new Sys.StringBuilder;
                $v_E.append(String
                    .format("<div class='ms-crm-AdvFind-FilterNewField' style='overflow:hidden'><span tabindex=0 style='visibility:hidden' class='ms-crm-AdvFind-FieldMenu'><img alt='' style='visibility:hidden' src='{0}' class = 'ms-crm-View-icon {1}'/><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title=\"{2}\" class='atLink'></a></span><span class='ms-crm-AdvFind-FieldList'><{4} id='{7}'/></span><span class='ms-crm-AdvFind-OperatorList'><{5} id='{8}'/></span><span class='ms-crm-AdvFind-ClientControl'><{6} id='{9}'/></span><span class='ms-crm-AdvFind-HiddenFieldLabel' style='visibility:hidden'>{3}</span>", $v_4.source, $v_4.cssClass, CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATNEWFIELD), window.LOCID_AF_CLAUSEHIDDEN, "Crm:FieldList", "Crm:OperatorList", "Crm:ClientControl", Mscrm.AdvFind.getControlId(this.get_id(), "_filterList"), Mscrm.AdvFind.getControlId(this.get_id(), "OP"), Mscrm.AdvFind.getControlId(this.get_id(), "CC")));
                this.$0_3.$l_3 &&
                    $v_E.append(String
                        .format("<span><img alt='' src='{0}' style='cursor:pointer' class = 'ms-crm-View-icon {1}'/><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' class='atLink'></a></span>", $v_D.source, $v_D.cssClass));
                $v_E.append("</div>");
                this.get_element().innerHTML = $v_E.toString()
            }
            this.$T_3 = true;
            var $v_5 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            if (this.$0_3.$l_3 && !this.$0_3.$F_3) {
                $addHandler($v_5, "mouseover", this.$$d_$3Q_3);
                $addHandler($v_5, "mouseout", this.$$d_$3P_3)
            }
            this.$w_3 = XUI.Html.DomUtils.GetChildElementAt($v_5, 5);
            this.$w_3 && $addHandler(this.$w_3, "click", this.$$d_$2F_3);
            var $v_6 = Mscrm.AdvFind.getPropertiesForChild(this);
            $v_6["relatedEntitiesVisible"] = false;
            $v_6["isReadOnly"] = this.$F_3;
            var $v_7 = {};
            $v_7["onChange"] = this.$$d_$2H_3;
            this.$E_3 = $create(Mscrm.FieldList,
                $v_6,
                $v_7,
                null,
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetChildElementAt($v_5, 1)));
            this.$E_3 = this.$E_3;
            var $v_8 = {};
            $v_8["onChange"] = this.$$d_$2n_3;
            var $v_9 = Mscrm.AdvFind.getPropertiesForChild(this);
            this.$Y_3 = $create(Mscrm.OperatorList,
                $v_9,
                $v_8,
                null,
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetChildElementAt($v_5, 2)));
            var $v_A = null;
            if ($v_1) {
                $v_A = {};
                $v_A["onChange"] = this.$$d_$3e_3
            }
            var $v_B = Mscrm.AdvFind.getPropertiesForChild(this);
            $v_B = Mscrm.AdvFind.getPropertiesForChild(this);
            $v_B["isReadOnly"] = this.$F_3;
            this.$D_3 = $create(Mscrm.ClientControl,
                $v_B,
                $v_A,
                null,
                XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetChildElementAt($v_5, 3)));
            XUI.Html.DomUtils.GetLastChild($v_5).id = Mscrm.AdvFind.getControlId(this.get_id(), "FLDPRM");
            this.$G_3 = XUI.Html.DomUtils.GetFirstChild($v_5);
            this.$G_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "FLDMNU");
            $addHandler(this.$G_3, "keyup", this.$$d_$2M_3);
            XUI.Html.DomUtils.GetLastChild(this.$G_3).id = "at" + this.$G_3.id;
            if (!this.$0_3.$l_3 && !this.$F_3) {
                $addHandler(this.$G_3, "click", this.$$d_$2l_3);
                $addHandler(this.$G_3, "mouseover", this.$$d_$22_3);
                $addHandler(this.$G_3, "mouseout", this.$$d_$21_3)
            }
            this.$Y_3.get_element().style.display = "none";
            this.$D_3.get_element().style.display = "none";
            this.set_fetchXml(this.$H_3);
            this.set_field(this.$P_3);
            this.set_operator(this.$6_3);
            this.set_value(this.$5_3);
            this.$f_3 && this.SetFocus();
            this.set_hideInSimple(this.$Q_3);
            if (this.$0_3.$B_3 === 1) {
                this.$G_3.style.display = "none";
                if (IsNull(this.$P_3)) this.get_element().style.display = "none"
            }
        }
        this.$H_3 = null;
        this.SetMode(this.$0_3.$B_3, true)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$3J_3);
        if (!IsNull(this.$E_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$E_3);
            this.$E_3 = null
        }
        if (!IsNull(this.$Y_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$Y_3);
            this.$Y_3 = null
        }
        if (!IsNull(this.$D_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$D_3);
            this.$D_3 = null
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $0_3: null,
    $8_3: null,
    $2_3: null,
    $X_3: false,
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    get_defined: function() { return this.$X_3 },
    set_defined: function(value) {
        this.$X_3 = value;
        return value
    },
    add_onFieldChange: function(value) { this.get_events().addHandler("OnFieldChange", value) },
    remove_onFieldChange: function(value) { this.get_events().removeHandler("OnFieldChange", value) },
    $1w_3: function($p0) {
        if (IsNull($p0)) return;
        var $v_0 = $p0.ownerDocument.createAttribute("done");
        $p0.attributes.setNamedItem($v_0)
    },
    $2M_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.$24_3($p0)
    },
    $2l_3: function($p0) { !$p0.ctrlKey && this.$24_3($p0) },
    $22_3: function($p0) { if (this.$X_3) this.$G_3.className = "ms-crm-AdvFind-SelectedFieldMenu" },
    $21_3: function($p0) { if (this.$X_3) this.$G_3.className = "ms-crm-AdvFind-FieldMenu" },
    $3Q_3: function($p0) {
        if (this.$X_3) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            this.$w_3 = XUI.Html.DomUtils.GetChildElementAt($v_0, 5);
            if (this.$w_3) {
                this.$w_3.style.visibility = "visible";
                $v_0.className = "ms-crm-FilterControlOnHover"
            }
        }
    },
    $3P_3: function($p0) {
        if (this.$X_3) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
            this.$w_3 = XUI.Html.DomUtils.GetChildElementAt($v_0, 5);
            if (this.$w_3) {
                this.$w_3.style.visibility = "hidden";
                $v_0.className = "ms-crm-AdvFind-FilterField"
            }
        }
    },
    $3H_3: function() {
        return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
            .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.get_element())))
    },
    $2J_3: function() { return XUI.Html.DomUtils.GetFirstChild(this.get_element()) },
    $3G_3: function() { return XUI.Html.DomUtils.GetLastChild(XUI.Html.DomUtils.GetFirstChild(this.get_element())) },
    SetMode: function(mode, fromInit) {
        var $v_0 = mode === 1;
        this.$2J_3().className = $v_0
            ? "ms-crm-AdvFind-FilterSimpleField"
            : this.$a_3 ? "ms-crm-AdvFind-SelectedFilterField" : "ms-crm-AdvFind-FilterField";
        if (!this.$X_3) return;
        this.$G_3.style.display = $v_0 ? "none" : "";
        ShowIfDetailedOrNotHidden(this.get_element(), !this.$Q_3 && this.$X_3, mode);
        if (!IsNull(this.$E_3)) {
            if (IsNull(fromInit) || !fromInit) {
                this.$E_3.SetMode(mode);
                this.$Y_3.SetMode(mode)
            }
            this.$E_3.get_element().parentNode.className = $v_0
                ? "ms-crm-AdvFind-SimpleFieldList"
                : "ms-crm-AdvFind-FieldList";
            this.$Y_3.get_element().parentNode.className = $v_0
                ? "ms-crm-AdvFind-SimpleOperatorList"
                : "ms-crm-AdvFind-OperatorList"
        }
    },
    $f_3: false,
    SetFocus: function() {
        this.$f_3 = true;
        if (this.$T_3) {
            this.$E_3.SetFocus();
            this.$f_3 = false
        }
    },
    get_selected: function() { return this.$a_3 },
    set_selected: function(value) {
        this.$a_3 = value;
        if (this.$T_3)
            this.$2J_3().className = value ? "ms-crm-AdvFind-SelectedFilterField" : "ms-crm-AdvFind-FilterField";
        return value
    },
    $26_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        this.set_selected(!this.$a_3)
    },
    get_hideInSimple: function() { return this.$Q_3 },
    set_hideInSimple: function(value) {
        this.$Q_3 = value;
        if (this.$T_3) this.$3G_3().style.visibility = !this.$Q_3 || !this.$X_3 ? "hidden" : "visible";
        return value
    },
    get_field: function() { return this.$E_3.$5_3 },
    set_field: function(value) {
        this.$P_3 = value;
        if (this.$T_3) {
            this.$E_3.set_value(this.$P_3);
            this.$X_3 = !IsNull(this.$P_3)
        }
        return value
    },
    get_operator: function() { return this.$Y_3.$5_3 },
    set_operator: function(value) {
        if (this.$T_3) {
            this.$Y_3.set_value(value);
            if (this.$X_3) this.$Y_3.get_element().style.display = "inline"
        }
        this.$6_3 = value;
        return value
    },
    get_value: function() { return this.$D_3.get_value() },
    set_value: function(value) {
        this.$5_3 = value;
        if (this.$T_3) {
            this.$D_3.set_value(value);
            this.$X_3 && this.$2Q_3()
        }
        return value
    },
    get_fieldListFetchXml: function() { return this.$E_3 },
    set_fieldListFetchXml: function(value) {
        this.$E_3 = value;
        return value
    },
    $3J_3: function($p0) {
        if ($p0.ctrlKey) {
            this.$26_3(null);
            $p0.stopPropagation()
        }
    },
    $24_3: function($p0) {
        Mscrm.AdvancedFindCommon.HideVisibleControl(this.$0_3);
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement("DIV");
            $v_0.setAttribute("id", "menuContainer");
            window.document.body.appendChild($v_0);
            this.$4_3 = Mscrm.Menu.createMenu($v_0);
            this.$4_3.set_menuId(this.$G_3.id);
            this.$4_3.set_stylePrefix("POPUP");
            this.$4_3.set_width(170);
            this.$1Z_3 = Mscrm.MenuItem.createMenuItem("");
            this.$1Z_3.set_actionCallback(this.$$d_$26_3);
            this.$4_3.addItem(this.$1Z_3);
            this.$1Y_3 = Mscrm.MenuItem.createMenuItem("");
            this.$1Y_3.set_actionCallback(this.$$d_$3a_3);
            this.$4_3.addItem(this.$1Y_3);
            this.$1i_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$1i_3.set_actionCallback(this.$$d_$3C_3);
            this.$4_3.addItem(this.$1i_3)
        }
        this.$4_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$4_3.set_left($p0.clientX - $p0.offsetX);
        this.$1Z_3.set_title(this.$a_3 ? window.LOCID_AF_UNSELECTROW : window.LOCID_AF_SELECTROW);
        this.$1Y_3.set_title(this.$Q_3 ? window.LOCID_AF_SHOWINSIMPLE : window.LOCID_AF_HIDEINSIMPLE);
        this.$4_3.show()
    },
    $3a_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        this.set_hideInSimple(!this.$Q_3);
        this.$0_3.set_isDirty(true)
    },
    $3C_3: function($p0) { this.$2F_3(null) },
    $2F_3: function($p0) { confirm(window.LOCID_AF_DELETEFIELD) && this.$8_3.deleteControl(this.get_element(), true) },
    GetFetchEndElement: function() { return null },
    GetFetchStartElement: function() {
        if (!this.$X_3) {
            alert(window.LOCID_AF_ERRINSOMECLAUSES);
            return null
        }
        var $v_0 = "", $v_1 = "", $v_2 = "";
        this.$6_3 = this.$Y_3.$5_3;
        if (IsValueBoundOperator(this.$6_3) &&
            (IsNull(this.$D_3.get_value()) || isNullOrEmptyString(this.$D_3.get_value())))
            switch (this.$0_3.$M_3) {
            case 2:
                alert(String.format(window.LOCID_AF_VALUEMISSINGFOR_MSG, this.$E_3.getFieldList().get_selectedText()));
                this.$0_3.$B_3 === 1 && this.$Q_3 && this.$D_3.SetFocus();
                return null;
            case 8:
            case 1:
                return "";
            default:
                break
            }
        if (this.$0_3.$M_3 === 1) {
            $v_0 = '<condition uiattributename="' +
                CrmEncodeDecode.CrmXmlEncode(this.$E_3.getFieldList().get_selectedText()) +
                '" uioperatorname="' +
                CrmEncodeDecode.CrmXmlEncode(this.$Y_3.getOperatorList().get_selectedText()) +
                '" uiname="' +
                (!IsValueBoundOperator(this.$6_3) || IsNull(this.$D_3.get_value())
                    ? ""
                    : CrmEncodeDecode.CrmXmlEncode(this.$D_3.get_text())) +
                (this.$Q_3 ? '" uihidden="1"/>' : '"/>');
            return $v_0
        }
        var $v_3 = this.$E_3.getFieldList().get_selectedOption(),
            $v_4 = this.$E_3.$5_3,
            $v_5 = this.$0_3.$3_3.AbstractDataType($v_3);
        if (!IsNull($v_3.getAttribute("nameattr")) && IsNameOperator(this.$6_3)) {
            $v_5 = "string";
            $v_4 = $v_3.getAttribute("nameattr")
        }
        switch ($v_5) {
        case "owner":
        case "lookup":
        case "lookupwithuser":
        case "lookupwithbusinessunit":
        case "lookupwithhierarchy":
        case "lookupwithuserwithhierarchy":
            var $v_6 = this.$D_3.get_value();
            if (IsValueBoundOperator(this.$6_3) && !IsNull($v_6)) {
                var $v_9 = $v_6.length;
                if ($v_9 > 1) {
                    for (var $v_A = 0;
                        $v_A < $v_9;
                        $v_A++
                    )
                        $v_1 += '<value uiname="' +
                            CrmEncodeDecode.CrmXmlEncode($v_6[$v_A].name) +
                            '" uitype="' +
                            CrmEncodeDecode.CrmXmlEncode($v_6[$v_A].typename) +
                            '">' +
                            $v_6[$v_A].id +
                            "</value>";
                    $v_0 = '<condition attribute="' +
                        CrmEncodeDecode.CrmXmlEncode($v_4) +
                        '" operator="' +
                        (this.$6_3 === "eq" ? "in" : "not-in") +
                        (this.$Q_3 ? '" uihidden="1">' : '">') +
                        $v_1 +
                        "</condition>"
                } else if ($v_9 === 1)
                    $v_0 = '<condition attribute="' +
                        CrmEncodeDecode.CrmXmlEncode($v_4) +
                        '" operator="' +
                        this.$6_3 +
                        '" uiname="' +
                        CrmEncodeDecode.CrmXmlEncode($v_6[0].name) +
                        '" uitype="' +
                        CrmEncodeDecode.CrmXmlEncode($v_6[0].typename) +
                        '" value="' +
                        $v_6[0].id +
                        (this.$Q_3 ? '" uihidden="1"/>' : '"/>')
            } else
                $v_0 = '<condition attribute="' +
                    CrmEncodeDecode.CrmXmlEncode($v_4) +
                    '" operator="' +
                    this.$6_3 +
                    '"' +
                    (this.$Q_3 ? ' uihidden="1"/>' : "/>");
            break;
        case "picklist":
        case "language":
        case "objecttypecode":
            $v_1 = this.$D_3.get_value().toString();
            if (IsValueBoundOperator(this.$6_3) && !IsNull($v_1)) {
                var $v_B = $v_1.split(";");
                $v_1 = "";
                var $v_C = $v_B.length;
                if ($v_C > 1) {
                    for (var $v_D = 0; $v_D < $v_C; $v_D++) $v_1 += "<value>" + $v_B[$v_D] + "</value>";
                    $v_0 = '<condition attribute="' +
                        CrmEncodeDecode.CrmXmlEncode($v_4) +
                        '" operator="' +
                        (this.$6_3 === "eq" ? "in" : "not-in") +
                        (this.$Q_3 ? '" uihidden="1">' : '">') +
                        $v_1 +
                        "</condition>"
                } else
                    $v_0 = '<condition attribute="' +
                        CrmEncodeDecode.CrmXmlEncode($v_4) +
                        '" operator="' +
                        this.$6_3 +
                        '" value="' +
                        $v_B[0] +
                        (this.$Q_3 ? '" uihidden="1"/>' : '"/>')
            } else
                $v_0 = '<condition attribute="' +
                    CrmEncodeDecode.CrmXmlEncode($v_4) +
                    '" operator="' +
                    this.$6_3 +
                    '"' +
                    (this.$Q_3 ? ' uihidden="1"/>' : "/>");
            break;
        case "string":
        case "memo":
            $v_1 = IsNull(this.$D_3.get_value()) ? "" : this.$D_3.get_value().toString();
            switch (this.$6_3) {
            case "contains":
            case "beginswith":
            case "endswith":
            case "doesnotcontain":
            case "doesnotbeginwith":
            case "doesnotendwith":
                var $v_7 = this.$Y_3.getOperatorList(), $v_8 = $v_7.get_selectedOption().getAttribute("fetchVal");
                this.$6_3 = $v_7.get_selectedOption().getAttribute("fetchOp");
                $v_1 = String.format($v_8, ConvertUserTypeToLike($v_1));
                break
            }
            $v_0 = '<condition attribute="' + CrmEncodeDecode.CrmXmlEncode($v_4) + '" operator="' + this.$6_3 + '"';
            if (IsValueBoundOperator(this.$6_3)) $v_0 += ' value="' + CrmEncodeDecode.CrmXmlEncode($v_1) + '"';
            $v_0 += this.$Q_3 ? ' uihidden="1"/>' : "/>";
            break;
        case "date":
        case "dateonly":
            $v_0 = '<condition attribute="' + CrmEncodeDecode.CrmXmlEncode($v_4) + '" operator="';
            $v_0 += (this.$6_3 === "anytime" ? "not-null" : this.$6_3) + '"';
            if (this.$Q_3) $v_0 += ' uihidden="1"';
            $v_1 = "";
            $v_2 = "";
            if (IsValueBoundOperator(this.$6_3)) {
                switch (this.$1y_3(this.$6_3)) {
                case 1:
                case 3:
                case 4:
                    $v_1 = IsNull(this.$D_3.get_value()) ? "" : this.$D_3.get_value().toString();
                    break;
                case 5:
                    var $v_E = IsNull(this.$D_3.get_value()) ? "" : this.$D_3.get_value().toString();
                    $v_1 = $v_E.substr(5, 2);
                    $v_2 = $v_E.substr(0, 4);
                    break;
                case 2:
                default:
                    if (!IsNull(this.$D_3.get_value())) {
                        $v_1 = FormatUtcDate(this.$D_3.get_value());
                        $v_1 = $v_1.substr(0, $v_1.length - 9)
                    }
                    break
                }
                if (!IsNull(this.$D_3.get_value()))
                    if (isNullOrEmptyString($v_2)) $v_0 += ' value="' + CrmEncodeDecode.CrmXmlEncode($v_1) + '"/>';
                    else {
                        $v_0 += "><value>" + CrmEncodeDecode.CrmXmlEncode($v_1) + "</value>";
                        $v_0 += "<value>" + CrmEncodeDecode.CrmXmlEncode($v_2) + "</value>";
                        $v_0 += "</condition>"
                    }
                else $v_0 += "/>"
            } else $v_0 += "/>";
            break;
        default:
            $v_0 = '<condition attribute="' + CrmEncodeDecode.CrmXmlEncode($v_4) + '" operator="' + this.$6_3 + '"';
            if (IsValueBoundOperator(this.$6_3))
                $v_0 += ' value="' +
                    (IsNull(this.$D_3
                            .get_value())
                        ? ""
                        : CrmEncodeDecode.CrmXmlEncode(this.$D_3.get_value().toString())) +
                    '"';
            $v_0 += this.$Q_3 ? ' uihidden="1"/>' : "/>";
            break
        }
        return $v_0
    },
    $38_3: function($p0, $p1) {
        var $v_0 = this.$v_3($p1, "value");
        this.$5_3 = $v_0;
        if (this.$6_3 === "like" || this.$6_3 === "not-like") {
            var $v_6 = !$v_0.indexOf("%"), $v_7 = $v_0.lastIndexOf("%") === $v_0.length - 1;
            if ($v_6 && $v_7) {
                this.$6_3 = this.$6_3 === "like" ? "contains" : "doesnotcontain";
                $v_0 = ConvertLikeToUserType($v_0.substr(1, $v_0.length - 2))
            } else if ($v_6) {
                this.$6_3 = this.$6_3 === "like" ? "endswith" : "doesnotendwith";
                $v_0 = ConvertLikeToUserType($v_0.substr(1))
            } else if ($v_7) {
                this.$6_3 = this.$6_3 === "like" ? "beginswith" : "doesnotbeginwith";
                $v_0 = ConvertLikeToUserType($v_0.substr(0, $v_0.length - 1))
            } else this.$6_3 = this.$6_3 === "like" ? "eq" : "ne";
            this.$5_3 = $v_0
        }
        switch ($p0) {
        case "lookup":
        case "owner":
        case "lookupwithuser":
        case "lookupwithbusinessunit":
        case "lookupwithhierarchy":
        case "lookupwithuserwithhierarchy":
            var $v_1 = [], $v_2;
            if (this.$6_3 === "in" || this.$6_3 === "not-in") {
                for (var $v_8 = XUI.Xml.SelectNodes($p1, "value", null), $v_9 = $v_8.length, $v_A = 0;
                    $v_A < $v_9;
                    $v_A++) {
                    var $v_B = $v_8[$v_A], $v_C = new LookupControlItem;
                    $v_C.id = XUI.Xml.GetText($v_B);
                    $v_C.name = this.$v_3($v_B, "uiname");
                    $v_2 = this.$v_3($v_B, "uitype");
                    if (isNaN(parseInt($v_2, 10))) $v_C.typename = $v_2;
                    else $v_C.type = $v_2;
                    if (IsNull($v_2)) $v_C.category = 5;
                    if (IsNull($v_C.name)) $v_C.name = $v_C.id;
                    $v_1[$v_1.length] = $v_C
                }
                this.$6_3 = this.$6_3 === "in" ? "eq" : "ne"
            } else if (!isNullOrEmptyString(this.$5_3)) {
                var $v_D = new LookupControlItem;
                $v_D.id = this.$v_3($p1, "value");
                $v_D.name = this.$v_3($p1, "uiname");
                $v_2 = this.$v_3($p1, "uitype");
                if (isNaN(parseInt($v_2, 10))) $v_D.typename = $v_2;
                else $v_D.type = $v_2;
                if (IsNull($v_2)) $v_D.category = 5;
                if (IsNull($v_D.name)) $v_D.name = $v_D.id;
                $v_1[$v_1.length] = $v_D
            }
            this.$5_3 = $v_1.length ? $v_1 : null;
            break;
        case "picklist":
        case "language":
        case "objecttypecode":
            if (this.$6_3 === "in" || this.$6_3 === "not-in") {
                this.$5_3 = "";
                for (var $v_E = XUI.Xml.SelectNodes($p1, "value", null), $v_F = $v_E.length, $v_G = 0;
                    $v_G < $v_F;
                    $v_G++) {
                    this.$5_3 += XUI.Xml.GetText($v_E[$v_G]);
                    this.$5_3 += ";"
                }
                if ($v_G) this.$5_3 = this.$5_3.substr(0, this.$5_3.length - 1);
                this.$6_3 = this.$6_3 === "in" ? "eq" : "ne"
            }
            break;
        case "date":
        case "dateonly":
            switch (this.$1y_3(this.$6_3)) {
            case 2:
                this.$5_3 = !isNullOrEmptyString(this.$5_3) ? ParseUtcDate(this.$5_3) : null;
                break;
            case 5:
                var $v_3 = XUI.Xml.SelectNodes($p1, "value", null),
                    $v_4 = XUI.Xml.GetText($v_3[0]),
                    $v_5 = XUI.Xml.GetText($v_3[1]);
                this.$5_3 = $v_5 + ($v_4.length < 2 ? "-0" : "-") + $v_4;
                break;
            case 1:
            case 3:
            case 4:
            default:
                break
            }
            break
        }
    },
    $v_3: function($p0, $p1) {
        var $v_0 = null, $v_1 = $p0.attributes.getNamedItem($p1);
        if (!IsNull($v_1)) $v_0 = XUI.Xml.GetText($v_1);
        return $v_0
    },
    get_fetchXml: function() { return null },
    set_fetchXml: function(value) {
        this.$H_3 = value;
        if (!this.$T_3 || IsNull(value)) return value;
        this.$P_3 = this.$v_3(this.$H_3, "attribute");
        this.set_field(this.$P_3);
        var $v_0 = this.$0_3.$3_3.GetDataType(this.$P_3, this.$2_3);
        this.set_operator(this.$v_3(this.$H_3, "operator"));
        var $v_1 = this.$0_3.$3_3.GetField(this.$P_3, this.$2_3);
        if (!IsNull($v_1.attributes.getNamedItem("nameattr")) && IsNameOperator(this.$6_3)) $v_0 = "string";
        if (IsValueBoundOperator(this.$6_3)) this.$38_3($v_0, this.$H_3);
        else this.$5_3 = null;
        this.set_operator(this.$6_3);
        this.set_value(isNullOrEmptyString(this.$5_3) ? null : this.$5_3);
        var $v_2 = this.$H_3.attributes.getNamedItem("uihidden");
        this.set_hideInSimple(IsNull($v_2) ? false : XUI.Xml.GetText($v_2) === "1");
        ShowIfDetailedOrNotHidden(this.get_element(), !this.$Q_3, this.$0_3.$B_3);
        this.$1w_3(this.$H_3);
        return value
    },
    $2H_3: function($p0, $p1) {
        var $v_0 = this.$E_3.getFieldList(), $v_1 = $v_0.get_selectedOption();
        this.$P_3 = this.$E_3.$5_3;
        this.$Y_3.get_element().style.display = "inline";
        this.$Y_3.setField($v_1);
        if ($v_0.get_selectedIndex() !== -1) {
            this.$D_3.RenderControl($v_1, this.$6_3);
            var $v_2 = $p1;
            this.$D_3.set_value($v_2.raisedByCode ? this.$5_3 : null)
        }
        this.$2Q_3();
        this.$2J_3().className = this.$0_3.$B_3 === 1
            ? "ms-crm-AdvFind-FilterSimpleField"
            : "ms-crm-AdvFind-FilterField";
        this.$G_3.style.visibility = "visible";
        if (!this.$0_3.$l_3) this.$3H_3().style.visibility = "visible";
        this.$X_3 = true
    },
    $1y_3: function($p0) {
        switch ($p0) {
        case "last-x-hours":
        case "next-x-hours":
        case "last-x-days":
        case "next-x-days":
        case "last-x-weeks":
        case "next-x-weeks":
        case "last-x-months":
        case "next-x-months":
        case "last-x-years":
        case "next-x-years":
        case "olderthan-x-months":
        case "olderthan-x-years":
        case "olderthan-x-weeks":
        case "olderthan-x-minutes":
        case "olderthan-x-hours":
        case "olderthan-x-days":
        case "last-x-fiscal-years":
        case "next-x-fiscal-years":
        case "last-x-fiscal-periods":
        case "next-x-fiscal-periods":
            return 1;
        case "in-fiscal-period":
            return 3;
        case "in-fiscal-year":
            return 4;
        case "in-fiscal-period-and-year":
        case "in-or-before-fiscal-period-and-year":
        case "in-or-after-fiscal-period-and-year":
            return 5;
        default:
            return 2
        }
    },
    $2n_3: function($p0, $p1) {
        var $v_0 = $p0,
            $v_1 = $v_0.get_value(),
            $v_2 = this.$E_3.getFieldList().get_selectedOption(),
            $v_3 = this.$0_3.$3_3.AbstractDataType($v_2);
        if ($v_3 === "date" || $v_3 === "dateonly") {
            this.$D_3.set_value(null);
            this.$D_3.RenderControl($v_2, $v_1)
        } else if ($v_3 === "lookupwithhierarchy" || $v_3 === "lookupwithuserwithhierarchy"
        ) this.$D_3.RenderControl($v_2, $v_1);
        else if (!IsNull($v_2.getAttribute("nameattr")))
            if (IsNameOperator($v_1) !== IsNameOperator(this.$6_3)) {
                this.$D_3.set_value(null);
                this.$D_3.RenderControl($v_2, $v_1)
            }
        this.$6_3 = $v_1;
        this.$2Q_3()
    },
    $2Q_3: function() {
        if (!IsNull(this.$6_3))
            this.$D_3.get_element().style.display = IsValueBoundOperator(this.$6_3) ? "inline" : "none"
    },
    $3B_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.$2F_3($p0)
    },
    $3Z_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($p0.type === "click" || $v_0 === 32 || $v_0 === 13) && alert($p0.target.title)
    },
    $3e_3: function($p0, $p1) {
        this.$D_3.remove_onChange(this.$$d_$3e_3);
        var $v_0 = $get("spnWarnIco", this.get_element());
        $v_0.parentNode && $v_0.parentNode.removeChild($v_0)
    },
    $33_3: function($p0, $p1, $p2) {
        var $v_0 = this.$v_3($p0, "attribute"), $v_1 = $p2.GetField($v_0, $p1);
        if (IsNull($v_1))
            return new Mscrm.FilterFieldError("ERROR", String.format(window.LOCID_AF_FIELDDOESNOTEXIST, $v_0));
        var $v_2 = this.$v_3($v_1, "value");
        $p0.attributes.getNamedItem("attribute").nodeValue = $v_2;
        var $v_3 = this.$v_3($p0, "operator");
        if (!IsValueBoundOperator($v_3)) return null;
        var $v_4 = XUI.Xml.SelectNodes($p0, "value", null);
        if (IsNull($v_4) || !$v_4.length) $v_4 = null;
        var $v_5, $v_6, $v_7 = false, $v_8 = null, $v_9 = "", $v_A, $v_B;
        if ($v_2 === $v_0) $v_B = $p2.GetDataType($v_0, $p1);
        else $v_B = "string";
        if (this.$0_3.$M_3 !== 4)
            switch ($v_B.toLowerCase()) {
            case "string":
            case "memo":
                if (!IsNull($v_4)) {
                    $v_8 = window.LOCID_AF_MULTIPLEVALSNOTALLOWED;
                    $v_9 = "WARN";
                    $v_7 = true
                }
                break;
            case "picklist":
            case "language":
            case "objecttypecode":
                var $v_C = $v_1.attributes.getNamedItem("optionsXML");
                if (!IsNull($v_4))
                    for ($v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                        $v_5 = XUI.Xml.GetText($v_4[$v_6]);
                        $v_A = new RegExp("<\\s*option\\s+value\\s*=\\s*([\"|'])" + $v_5 + "\\1\\s*>", "igm");
                        var $v_D = XUI.Xml.GetText($v_C);
                        if (CrmEncodeDecode.CrmXmlDecode($v_D).search($v_A) === -1) {
                            $v_7 = true;
                            $p0.removeChild(XUI.Xml.SelectSingleNode($p0, "value[.=" + $v_5 + "]", null))
                        }
                    }
                else {
                    $v_5 = $p0.attributes.getNamedItem("value").nodeValue;
                    $v_A = new RegExp("<\\s*option\\s+value\\s*=\\s*([\"|'])" + $v_5 + "\\1\\s*>", "igm");
                    var $v_E = XUI.Xml.GetText($v_C);
                    if (CrmEncodeDecode.CrmXmlDecode($v_E).search($v_A) === -1) {
                        $v_7 = true;
                        $p0.attributes.getNamedItem("value").nodeValue = ""
                    }
                }
                if ($v_7 && this.$0_3.$M_3 === 2) {
                    $v_8 = window.LOCID_AF_PCKLSTVALDOESNOTEXIST;
                    $v_9 = "WARN"
                }
                break;
            case "lookup":
            case "owner":
                if (!IsNull($v_4))
                    for ($v_6 = 0; $v_6 < $v_4.length; $v_6++) {
                        var $v_F = $v_4[$v_6];
                        if (IsNull($v_F.attributes.getNamedItem("uiname")) ||
                            IsNull($v_F.attributes.getNamedItem("uitype"))) {
                            $v_7 = true;
                            $p0.removeChild(XUI.Xml
                                .SelectSingleNode($p0, "value[.='" + XUI.Xml.GetText($v_F) + "']", null))
                        }
                    }
                else if (IsNull($p0.attributes
                        .getNamedItem("uiname")) ||
                    IsNull($p0.attributes.getNamedItem("uitype"))) {
                    $v_7 = true;
                    $p0.attributes.getNamedItem("value").nodeValue = ""
                }
                if ($v_7 && this.$0_3.$M_3 === 2) {
                    $v_8 = window.LOCID_AF_NONLOOKUPVAL;
                    $v_9 = "WARN"
                }
                break;
            case "number":
                if (!IsNull($v_4)) {
                    $v_8 = window.LOCID_AF_MULTIPLEVALSNOTALLOWED;
                    $v_9 = "WARN";
                    $v_7 = true
                } else {
                    var $v_G = $p0.attributes.getNamedItem("value");
                    if (!IsNull($v_G)) {
                        var $v_H = XUI.Xml.GetText($v_G);
                        if (!IsNull($v_H)) {
                            $v_A = new RegExp("^[-+]?([0-9]*\\.)?[0-9]+$");
                            if (!$v_A.test($v_H)) {
                                $v_8 = String.format(window.LOCID_AF_NONNUMMERICVAL, $v_H);
                                if ($v_H.length > 0 || this.$0_3.$M_3 === 2) {
                                    $v_9 = "WARN";
                                    $v_7 = true;
                                    $p0.attributes.getNamedItem("value").nodeValue = ""
                                }
                            }
                        }
                    }
                }
                break;
            case "date":
            case "dateonly":
                if (!IsNull($v_4) && this.$1y_3($v_3) !== 5) {
                    $v_8 = window.LOCID_AF_MULTIPLEVALSNOTALLOWED;
                    $v_9 = "WARN";
                    $v_7 = true
                } else {
                    var $v_I = $p0.attributes.getNamedItem("value");
                    if (!IsNull($v_I)) {
                        var $v_J = XUI.Xml.GetText($v_I);
                        if (!IsNull($v_J)) {
                            $v_7 = false;
                            switch (this.$1y_3($v_3)) {
                            case 1:
                            case 3:
                            case 4:
                                $v_A = new RegExp("^[+]?([0-9]*\\.)?[0-9]+$");
                                $v_7 = !$v_A.test($v_J);
                                break;
                            case 5:
                                break;
                            case 2:
                            default:
                                var $v_K = ParseUtcDate($v_J);
                                $v_7 = IsNull($v_K) || isNaN($v_K);
                                break
                            }
                            if ($v_7 && ($v_J.length > 0 || this.$0_3.$M_3 === 2)) {
                                $v_8 = String.format(window.LOCID_AF_NONDATEVAL, $v_J);
                                $v_9 = "WARN";
                                $p0.attributes.getNamedItem("value").nodeValue = ""
                            }
                        }
                    }
                }
                break;
            default:
                break
            }
        if ($v_7) return new Mscrm.FilterFieldError($v_9, $v_8);
        return null
    }
};
Mscrm.FilterFieldGroup = function(element) {
    this.$$d_$3D_3 = Function.createDelegate(this, this.$3D_3);
    this.$$d_$30_3 = Function.createDelegate(this, this.$30_3);
    this.$$d_$36_3 = Function.createDelegate(this, this.$36_3);
    this.$$d_$2x_3 = Function.createDelegate(this, this.$2x_3);
    this.$$d_$26_3 = Function.createDelegate(this, this.$26_3);
    this.$$d_$2M_3 = Function.createDelegate(this, this.$2M_3);
    this.$$d_$21_3 = Function.createDelegate(this, this.$21_3);
    this.$$d_$22_3 = Function.createDelegate(this, this.$22_3);
    this.$$d_$2l_3 = Function.createDelegate(this, this.$2l_3);
    this.$$d_$3I_3 = Function.createDelegate(this, this.$3I_3);
    this.$n_3 = [];
    this.deleteControl = this.DeleteControl;
    Mscrm.FilterFieldGroup.initializeBase(this, [element]);
    $addHandler(this.get_element(), "click", this.$$d_$3I_3)
};
Mscrm.FilterFieldGroup.prototype = {
    $j_3: null,
    $28_3: null,
    $N_3: null,
    $4_3: null,
    $1W_3: null,
    $1u_3: null,
    $1S_3: null,
    $1d_3: null,
    $1j_3: null,
    $b_3: "",
    $a_3: false,
    $H_3: null,
    $9_3: false,
    initialize: function() {
        var $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/dropdown_arrow.png"));
        this.get_element()
            .innerHTML =
            "<table class='ms-crm-AdvFind-FilterGroup' cellspacing=0 cellpadding=0 style='display:none'><tr><td class='ms-crm-AdvFind-GroupName'><span tabindex=0 class='ms-crm-AdvFind-GroupMenu'><img alt='' src='" + $v_0.source + "' class = 'ms-crm-View-icon " + $v_0.cssClass + "'/><a contentEditable='false' tabindex='-1' onclick='return false;' href='#' target='_self' title=\"" + CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_AF_OPT_ATGROUP) + "\" class='atLink'></a></span><span class='ms-crm-AdvFind-GroupLabel'></span></td><td class='ms-crm-AdvFind-GroupPadding'></td><td><span class='ms-crm-AdvFind-ControlsGroup'></span></td></tr></table>";
        this.$9_3 = true;
        var $v_1 = XUI.Html.DomUtils.GetFirstChild(this.get_element()), $v_2 = $v_1.rows[0];
        this.$j_3 = XUI.Html.DomUtils.GetChildElementAt($v_2.cells[0], 0);
        this.$28_3 = XUI.Html.DomUtils.GetChildElementAt($v_2.cells[0], 1);
        this.$N_3 = XUI.Html.DomUtils.GetFirstChild($v_2.cells[2]);
        this.set_groupClause(this.$b_3);
        this.setFetchXml(this.$H_3);
        this.$H_3 = null;
        var $v_3 = this.$n_3.length, $v_4 = 0;
        while ($v_4 < $v_3) {
            this.AddControl(this.$n_3[$v_4], 1, null);
            $v_4++
        }
        $addHandler(this.$j_3, "click", this.$$d_$2l_3);
        $addHandler(this.$j_3, "mouseover", this.$$d_$22_3);
        $addHandler(this.$j_3, "mouseout", this.$$d_$21_3);
        $addHandler(this.$j_3, "keyup", this.$$d_$2M_3);
        this.$j_3.id = Mscrm.AdvFind.getControlId(this.get_id(), "MNU");
        XUI.Html.DomUtils.GetLastChild(this.$j_3).id = "at" + this.$j_3.id;
        this.$2P_3(this.$0_3.$B_3 !== 1 && !this.$1z_3())
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "click", this.$$d_$3I_3);
        if (!IsNull(this.$N_3)) {
            Mscrm.AdvFind.disposeDirectChilds(this.$N_3);
            this.$N_3 = null
        }
        if (!IsNull(this.$4_3)) {
            this.$4_3.dispose();
            this.$4_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $8_3: null,
    $0_3: null,
    $2_3: null,
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_showChangeGroupMenu: function() { return this.$0_3.$1M_3 },
    set_showChangeGroupMenu: function(value) {
        this.$0_3.$1M_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    add_onEntityChange: function(value) { this.get_events().addHandler("OnEntityChange", value) },
    remove_onEntityChange: function(value) { this.get_events().removeHandler("OnEntityChange", value) },
    $2l_3: function($p0) { !$p0.ctrlKey && this.$24_3($p0) },
    $2M_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        ($v_0 === 32 || $v_0 === 13) && this.$24_3($p0)
    },
    $22_3: function($p0) { this.$j_3.className = "ms-crm-AdvFind-SelectedGroupMenu" },
    $21_3: function($p0) { this.$j_3.className = "ms-crm-AdvFind-GroupMenu" },
    $2d_3: function() { return XUI.Html.DomUtils.GetFirstChild(this.get_element()).rows[0].cells[0] },
    $3F_3: function() { return XUI.Html.DomUtils.GetFirstChild(this.get_element()).rows[0].cells[1] },
    GetNumberOfControls: function() { return this.$9_3 ? this.$N_3.children.length : this.$n_3.length },
    $1z_3: function() {
        return Mscrm.AdvFind.checkControlByTagName(this.$8_3.get_element().tagName, "Crm:FilterControl") &&
            this.$b_3 === "and"
    },
    $2P_3: function($p0) { this.$3F_3().style.display = this.$2d_3().style.display = $p0 ? "" : "none" },
    Group: function(groupClause) {
        var $v_0 = this.GetNumberOfControls(), $v_1 = -1, $v_2 = 0, $v_3 = 0, $v_4 = false;
        while ($v_2 < $v_0) {
            var $v_5 = $find(this.GetControl($v_2).id);
            if ($v_5.$a_3)
                if ($v_1 === -1) {
                    $v_1 = $v_2;
                    $v_3++
                } else {
                    var $v_6 = 0;
                    while ($v_6 < $v_0) {
                        var $v_7 = $find(this.GetControl($v_6).id);
                        if (!$v_7.$a_3) break;
                        $v_6++
                    }
                    if ($v_6 === $v_0 && !this.$1z_3()) {
                        if (this.$b_3 !== groupClause) {
                            this.set_groupClause(groupClause);
                            this.$0_3.set_isDirty(true)
                        }
                        $v_6 = 0;
                        while ($v_6 < $v_0) $find(this.GetControl($v_6++).id).set_selected(false);
                        return $v_6
                    }
                    $v_2 = $v_1;
                    break
                }
            $v_2++
        }
        for (var $v_8 = 0; $v_8 < $v_0; $v_8++) {
            var $v_9 = $find(this.GetControl($v_8).id);
            if (Mscrm.AdvancedFind.$2j($v_9)) {
                $v_4 = true;
                break
            }
        }
        if ($v_2 !== $v_0 && !$v_4) {
            var $v_A = window.document.createElement("Crm:FilterFieldGroup");
            $v_A.id = Mscrm.AdvFind.getControlId(this.get_id(), "FGRP" + this.$20_3++);
            var $v_B = $create(Mscrm.FilterFieldGroup, Mscrm.AdvFind.getPropertiesForChild(this), null, null, $v_A);
            while ($v_2 < $v_0) {
                var $v_C = $find(this.GetControl($v_2).id);
                if ($v_C.$a_3) {
                    var $v_D = this.$2N_3($v_C.get_element(), false);
                    $v_C.set_selected(false);
                    $v_B.AddControl($v_D, 1, null);
                    $v_0--;
                    $v_3++
                } else $v_2++
            }
            this.AddControl($v_B.get_element(), -1, null, $v_1);
            $v_B.set_groupClause(groupClause)
        }
        return $v_3
    },
    $24_3: function($p0) {
        Mscrm.AdvancedFindCommon.HideVisibleControl(this.$0_3);
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement("DIV");
            $v_0.setAttribute("id", "menuContainer");
            document.body.appendChild($v_0);
            this.$4_3 = Mscrm.Menu.createMenu($v_0);
            this.$4_3.set_menuId(this.$j_3.id);
            this.$4_3.set_stylePrefix("POPUP");
            this.$4_3.set_width(170);
            this.$1W_3 = Mscrm.MenuItem.createMenuItem("");
            this.$1W_3.set_actionCallback(this.$$d_$26_3);
            this.$4_3.addItem(this.$1W_3);
            this.$1u_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_UNGROUP);
            this.$1u_3.set_actionCallback(this.$$d_$2x_3);
            this.$4_3.addItem(this.$1u_3);
            if (this.get_showChangeGroupMenu()) {
                this.$1S_3 = Mscrm.MenuItem.createMenuItem("");
                this.$1S_3.set_actionCallback(this.$$d_$36_3);
                this.$4_3.addItem(this.$1S_3)
            }
            this.$1d_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_ADDROWTOGRP);
            this.$1d_3.set_actionCallback(this.$$d_$30_3);
            this.$4_3.addItem(this.$1d_3);
            this.$1j_3 = Mscrm.MenuItem.createMenuItem(window.LOCID_AF_MNUITMDELETE);
            this.$1j_3.set_actionCallback(this.$$d_$3D_3);
            this.$4_3.addItem(this.$1j_3)
        }
        this.$4_3.set_top($p0.clientY - $p0.offsetY + $p0.target.offsetHeight);
        this.$4_3.set_left($p0.clientX - $p0.offsetX);
        this.$1W_3.set_title(this.$a_3 ? window.LOCID_AF_UNSELECTGROUP : window.LOCID_AF_SELECTGROUP);
        this.get_showChangeGroupMenu() &&
            this.$1S_3.set_title(String.format(window.LOCID_AF_CHANGEGRP,
                this.$b_3 === "or" ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR));
        this.$4_3.show()
    },
    $3D_3: function($p0) { confirm(window.LOCID_AF_DELETEGROUP) && this.$8_3.deleteControl(this.get_element(), true) },
    SetMode: function(mode) {
        var $v_0 = false, $v_1 = this.GetNumberOfControls() - 1;
        while ($v_1 >= 0) {
            if (this.GetControl($v_1).style.display !== "none") {
                $v_0 = true;
                break
            }
            $v_1--
        }
        this.$2P_3(mode === 2 && !this.$1z_3());
        ShowIfDetailedOrNotHidden(this.get_element(), $v_0, mode)
    },
    SetFocus: function() { this.GetNumberOfControls() > 0 && $find(this.GetControl(0).id).SetFocus() },
    DeleteControl: function(control, detachAjaxControl) {
        this.$0_3.set_isDirty(true);
        this.$2N_3(control, detachAjaxControl);
        switch (this.GetNumberOfControls()) {
        case 1:
            this.$2x_3(null);
            break;
        case 0:
            this.$8_3.deleteControl(this.get_element(), detachAjaxControl);
            break
        }
    },
    $2N_3: function($p0, $p1) {
        if ($p1) {
            var $v_0 = $find($p0.id);
            !IsNull($v_0) && Mscrm.AdvFind.disposeAndDeleteControl($v_0)
        }
        return this.$N_3.removeChild($p0)
    },
    $2x_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        var $v_0 = this.GetNumberOfControls();
        while ($v_0 > 0) {
            var $v_1 = this.$2N_3(this.GetControl(0), false), $v_2 = $find($v_1.id);
            $v_0--;
            if (Mscrm.AdvFind.checkControlByTagName($v_1.tagName, "Crm:FilterField") && !$v_2.$X_3) continue;
            this.$8_3.AddControl($v_1, 4, this.get_element(), null, true)
        }
        this.$8_3.deleteControl(this.get_element(), false)
    },
    $30_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        Mscrm.AdvancedFindCommon.HideVisibleControl(this.$0_3);
        var $v_0 = this.AddNewFilterField(1, null);
        $v_0 && $v_0.SetFocus()
    },
    $36_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        this.set_groupClause(this.$b_3 === "and" ? "or" : "and");
        this.$0_3.set_isDirty(true)
    },
    get_groupClause: function() { return this.$b_3 },
    set_groupClause: function(value) {
        this.$b_3 = value;
        if (this.$9_3) {
            XUI.Html.SetText(this.$28_3, this.$b_3 === "and" ? window.LOCID_AF_TXTAND : window.LOCID_AF_TXTOR);
            this.$2P_3(this.$0_3.$B_3 !== 1 && !this.$1z_3())
        }
        return value
    },
    get_selected: function() { return this.$a_3 },
    set_selected: function(value) {
        this.$a_3 = value;
        this.$2d_3().className = this.$a_3 ? "ms-crm-AdvFind-SelectedGroup" : "ms-crm-AdvFind-GroupName";
        return value
    },
    $26_3: function($p0) {
        !IsNull(this.$4_3) && this.$4_3.hide();
        this.set_selected(!this.$a_3)
    },
    $3I_3: function($p0) {
        if ($p0.ctrlKey) {
            this.$26_3(null);
            $p0.stopPropagation()
        }
    },
    GetFetchStartElement: function() {
        if (this.$0_3.$M_3 === 1) return "";
        return this.GetNumberOfControls() > 0 ? '<filter type="' + this.$b_3 + '">' : ""
    },
    GetFetchEndElement: function() {
        if (this.$0_3.$M_3 === 1) return "";
        return this.GetNumberOfControls() > 0 ? "</filter>" : ""
    },
    get_children: function() {
        var $v_0 = [], $v_1 = this.GetNumberOfControls(), $v_2 = 0;
        while ($v_2 < $v_1) {
            $v_0[$v_0.length] = this.GetControl($v_2);
            $v_2++
        }
        return $v_0
    },
    setFetchXml: function(value) {
        this.$H_3 = value;
        if (!this.$9_3 || IsNull(value)) return;
        var $v_0 = value.attributes.getNamedItem("type");
        this.$b_3 = !IsNull($v_0) ? XUI.Xml.GetText($v_0).toLowerCase() : "and";
        this.set_groupClause(this.$b_3);
        var $v_1 = XUI.Xml.SelectNodes(value, "filter|condition", null);
        if (IsNull($v_1)) return;
        var $v_2 = $v_1.length;
        if (this.$0_3.$B_3 === 1) {
            var $v_3 = XUI.Xml.SelectSingleNode(value, ".//condition[(not(@uihidden) or @uihidden='0')]", null);
            ShowIfDetailedOrNotHidden(this.get_element(), !!$v_3, this.$0_3.$B_3)
        }
        for (var $v_4 = 0; $v_4 < $v_2; $v_4++)
            switch ($v_1[$v_4].nodeName.toLowerCase()) {
            case "condition":
                this.AddNewFilterField(1, null, $v_1[$v_4]);
                break;
            case "filter":
                var $v_5 = this.$1P_3(1, null);
                $v_5.setFetchXml($v_1[$v_4]);
                break
            }
    },
    AddControl: function(control, where, whichControl, position) {
        var $v_0 = $find(control.id);
        if (!IsNull($v_0)) {
            $v_0.set_parentControl(this);
            $v_0.set_container(this.$0_3);
            $v_0.set_entityName(this.$2_3)
        }
        if (this.$9_3) {
            if (IsNull(position)) {
                if ((where === 3 || where === 4) && (IsNull(whichControl) || whichControl.parentNode !== this.$N_3)
                ) return null;
                switch (where) {
                case 2:
                    if (XUI.Html.DomUtils.HasChildElements(this
                        .$N_3)) this.$N_3.insertBefore(control, XUI.Html.DomUtils.GetFirstChild(this.$N_3));
                    else this.$N_3.appendChild(control);
                    break;
                case 3:
                    var $v_1 = false, $v_2 = null, $$t_A = this;
                    XUI.Xml.DomUtils.ForEachChild(this.$N_3,
                        function($p1_0) {
                            if (IsNull($v_2)) {
                                $v_2 = $p1_0;
                                return false
                            }
                            if ($v_2 === whichControl) {
                                $$t_A.$N_3.insertBefore(control, $p1_0);
                                $v_1 = true;
                                return true
                            }
                            $v_2 = $p1_0;
                            return false
                        });
                    !$v_1 && this.$N_3.appendChild(control);
                    break;
                case 4:
                    var $$t_B = this;
                    XUI.Xml.DomUtils.ForEachChild(this.$N_3,
                        function($p1_0) {
                            if ($p1_0 === whichControl) {
                                $$t_B.$N_3.insertBefore(control, $p1_0);
                                return true
                            }
                            return false
                        });
                    break;
                case 1:
                default:
                    this.$N_3.appendChild(control);
                    break
                }
            } else {
                if (position > this.$N_3.children.length || position < 0) return null;
                if (position === this.$N_3.children.length) this.$N_3.appendChild(control);
                else this.$N_3.insertBefore(control, XUI.Html.DomUtils.GetChildElementAt(this.$N_3, position))
            }
            XUI.Html.DomUtils.GetFirstChild(this.get_element()).style.display = ""
        } else
            switch (where) {
            case 1:
                this.$n_3[this.$n_3.length] = control;
                break;
            case 2:
                for (var $v_3 = this.$n_3.length; $v_3 > 0; $v_3--) this.$n_3[$v_3] = this.$n_3[$v_3 - 1];
                this.$n_3[0] = control;
                break;
            default:
                return null
            }
        return control
    },
    $20_3: 0,
    $1P_3: function($p0, $p1) {
        var $v_0 = window.document.createElement("Crm:FilterFieldGroup");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "FGRP" + this.$20_3++);
        var $v_1 = this.AddControl($v_0, $p0, $p1);
        if (!IsNull($v_1))
            return $create(Mscrm.FilterFieldGroup, Mscrm.AdvFind.getPropertiesForChild(this), null, null, $v_1);
        return null
    },
    AddNewFilterField: function(where, control, fetchXml) {
        var $v_0 = window.document.createElement("Crm:FilterField");
        $v_0.id = Mscrm.AdvFind.getControlId(this.get_id(), "FFLD" + this.$20_3++);
        var $v_1 = this.AddControl($v_0, where, control);
        if (!IsNull($v_1)) {
            var $v_2 = Mscrm.AdvFind.getPropertiesForChild(this);
            $v_2["fetchXml"] = fetchXml;
            return $create(Mscrm.FilterField, $v_2, null, null, $v_1)
        }
        return null
    },
    GetControl: function(index) {
        return this.$9_3 ? XUI.Html.DomUtils.GetChildElementAt(this.$N_3, index) : this.$n_3[index]
    }
};
Mscrm.FiscalPeriodAndYearChangeArgs = function(value) {
    Mscrm.FiscalPeriodAndYearChangeArgs.initializeBase(this);
    this.value = value
};
Mscrm.FiscalPeriodAndYearChangeArgs.prototype = { value: null };
Mscrm.FiscalPeriodAndYear = function(element) {
    this.$$d_$2m_3 = Function.createDelegate(this, this.$2m_3);
    Mscrm.FiscalPeriodAndYear.initializeBase(this, [element])
};
Mscrm.FiscalPeriodAndYear.prototype = {
    $14_3: "",
    $1N_3: false,
    $1O_3: false,
    $I_3: null,
    $29_3: false,
    $K_3: null,
    initialize: function() {
        for (var $v_0 = this.get_element().getElementsByTagName("SELECT"), $v_3 = 0, $v_4 = $v_0.length;
            $v_3 < $v_4;
            $v_3++) {
            $v_0[$v_3].id = this.get_id() + $v_0[$v_3].id;
            RegisterAjaxControl($v_0[$v_3])
        }
        var $v_1 = this.get_element().getAttribute("IsOperatorFiscalPeriodEnabled");
        $v_1 && $v_1 === "True" && this.set_showPeriod(true);
        var $v_2 = this.get_element().getAttribute("IsOperatorFiscalYearEnabled");
        $v_2 && $v_2 === "True" && this.set_showYear(true)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$I_3)) {
            $removeHandler(this.$I_3.get_element(), "change", this.$$d_$2m_3);
            Mscrm.AdvFind.disposeAndDeleteControl(this.$I_3);
            this.$I_3 = null
        }
        if (!IsNull(this.$K_3)) {
            $removeHandler(this.$K_3.get_element(), "change", this.$$d_$2m_3);
            Mscrm.AdvFind.disposeAndDeleteControl(this.$K_3);
            this.$K_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    get_showPeriod: function() { return this.$1N_3 },
    set_showPeriod: function(value) {
        this.$1N_3 = value;
        if (this.$1N_3) {
            this.get_element().setAttribute("IsOperatorFiscalPeriodEnabled", "True");
            this.$I_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$2a_3(0));
            this.$23_3(this.$I_3, this.$1N_3)
        } else {
            this.get_element().setAttribute("IsOperatorFiscalPeriodEnabled", "False");
            this.$23_3(this.$I_3, this.$1N_3);
            this.$I_3 = null
        }
        return value
    },
    get_showYear: function() { return this.$1O_3 },
    set_showYear: function(value) {
        this.$1O_3 = value;
        if (this.$1O_3) {
            this.get_element().setAttribute("IsOperatorFiscalYearEnabled", "True");
            this.$K_3 = Mscrm.FormControlInputBehavior.GetElementBehavior(this.$2a_3(1));
            this.$23_3(this.$K_3, this.$1O_3)
        } else {
            this.get_element().setAttribute("IsOperatorFiscalYearEnabled", "False");
            this.$23_3(this.$K_3, this.$1O_3);
            this.$K_3 = null
        }
        return value
    },
    get_dataValue: function() {
        if (!IsNull(this.$I_3) && IsNull(this.$K_3)) return this.get_$1Q_3();
        else if (IsNull(this.$I_3) && !IsNull(this.$K_3)) return this.get_$1c_3();
        else if (!IsNull(this.$I_3) && !IsNull(this.$K_3))
            if (this.get_$1c_3() && this.get_$1Q_3()) {
                var $v_0 = this.get_$1c_3().toString() + "-";
                if (this.get_$1Q_3() <= 9) $v_0 += "0";
                $v_0 += this.get_$1Q_3().toString();
                return $v_0
            }
        return null
    },
    set_dataValue: function(value) {
        if (!IsNull(value)) {
            var $v_0 = value;
            if (!IsNull(this.$I_3) && IsNull(this.$K_3)) this.set_$1Q_3($v_0);
            else if (IsNull(this.$I_3) && !IsNull(this.$K_3)) this.set_$1c_3($v_0);
            else if (!IsNull(this.$I_3) && !IsNull(this.$K_3)) {
                this.set_$1c_3(parseInt($v_0.substr(0, 4)).toString());
                this.set_$1Q_3(parseInt($v_0.substr(5, 2)).toString())
            }
        }
        this.$2y_3();
        return value
    },
    get_selectedText: function() { return this.$14_3 },
    get_$1Q_3: function() { return this.$I_3.get_dataValue() },
    set_$1Q_3: function($p0) {
        this.$I_3.set_dataValue($p0);
        return $p0
    },
    get_$1c_3: function() { return this.$K_3.get_dataValue() },
    set_$1c_3: function($p0) {
        this.$K_3.set_dataValue($p0);
        return $p0
    },
    $2m_3: function($p0) {
        this.$2y_3();
        var $v_0 = new Mscrm.FiscalPeriodAndYearChangeArgs(this.get_element().getAttribute("_value"));
        this.fireControlEvent("OnChange", $v_0)
    },
    $2y_3: function() {
        if (!IsNull(this.$I_3) && IsNull(this.$K_3)) this.$14_3 = this.$I_3.get_selectedText();
        else if (IsNull(this.$I_3) && !IsNull(this.$K_3)) this.$14_3 = this.$K_3.get_selectedText();
        else if (!IsNull(this.$I_3) && !IsNull(this.$K_3))
            this.$14_3 = this.$I_3.get_selectedText() + " " + this.$K_3.get_selectedText();
        else this.$14_3 = null
    },
    $23_3: function($p0, $p1) {
        if (!IsNull($p0)) {
            $p0.get_element().parentNode.style.display = $p1 ? "" : "none";
            if ($p1) $addHandler($p0.get_element(), "change", this.$$d_$2m_3);
            else $removeHandler($p0.get_element(), "change", this.$$d_$2m_3)
        }
    },
    $2a_3: function($p0) {
        var $v_0 = this.get_element().getElementsByTagName("tbody"),
            $v_1 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetChildElementAt(XUI.Html.DomUtils.GetFirstChild($v_0[0]), $p0));
        return $v_1
    },
    setFocus: function() {
        if (!IsNull(this.$I_3) && IsNull(this.$K_3)) this.$I_3.setFocus();
        else if (IsNull(this.$I_3) && !IsNull(this.$K_3)) this.$K_3.setFocus();
        else !IsNull(this.$I_3) && !IsNull(this.$K_3) && this.$I_3.setFocus();
        if (!this.$29_3) {
            this.$2m_3(null);
            this.$29_3 = true
        }
    }
};
Mscrm.OperatorList = function(element) {
    this.$$d_$2n_3 = Function.createDelegate(this, this.$2n_3);
    Mscrm.OperatorList.initializeBase(this, [element])
};
Mscrm.OperatorList.prototype = {
    $1_3: null,
    $5_3: null,
    $P_3: null,
    $0_3: null,
    $8_3: null,
    $2_3: null,
    $9_3: false,
    get_value: function() { return this.$5_3 },
    set_value: function(value) {
        this.$5_3 = value;
        if (this.$9_3 && !IsNull(this.$P_3) && !IsNull(this.$P_3.getAttribute("datatype"))) {
            var $v_0 = this.getOperatorList();
            this.$1_3.set_value(this.$5_3);
            $v_0.set_selectedIndex($v_0.get_selectedIndex() === -1 ? 0 : $v_0.get_selectedIndex());
            this.$5_3 = this.$1_3.get_value();
            this.$1_3.set_text(this.getOperatorList().get_innerText());
            this.fireControlEvent("OnChange", Sys.EventArgs.Empty)
        }
        return value
    },
    setField: function(value) {
        this.$P_3 = value;
        if (this.$9_3 && !IsNull(this.$P_3) && !IsNull(this.getOperatorList())) {
            $removeHandler(this.getOperatorList().get_element(), "change", this.$$d_$2n_3);
            var $v_0 = this.$1_3.$0_3.$3_3.GetOpDataType(this.$P_3);
            if (!IsNull(this.$P_3.getAttribute("nameattr"))) $v_0 += "withname";
            if (this.$0_3.$l_3)
                this.$1_3.setInnerControlHtml(this.$1_3.$0_3.$3_3.GetElement("Operator", "FilterControl", null)
                    .outerHTML);
            else this.$1_3.setInnerControlHtml(this.$1_3.$0_3.$3_3.GetElement("Operator", $v_0, null).outerHTML);
            var $v_1 = this.$0_3.$1q_3;
            if (!IsNull($v_1) && typeof $v_1 === "function") {
                var $v_2 = {};
                $v_2["EntityName"] = this.$8_3.get_entityName();
                $v_2["Field"] = this.$P_3;
                $v_2["OperatorList"] = this.$1_3.get_innerControl();
                $v_1($v_2)
            }
            $addHandler(this.getOperatorList().get_element(), "change", this.$$d_$2n_3);
            this.set_value(!IsNull(this.$5_3) ? this.$5_3 : this.getOperatorList().get_dataValue());
            this.SetMode(this.$0_3.$B_3)
        }
    },
    get_parentControl: function() { return this.$8_3 },
    set_parentControl: function(value) {
        this.$8_3 = value;
        return value
    },
    get_container: function() { return this.$0_3 },
    set_container: function(value) {
        this.$0_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        this.$2_3 = value;
        return value
    },
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.get_element().innerHTML = String.format("<{0} id='{1}'/>",
            "Crm:AutoShow",
            Mscrm.AdvFind.getControlId(this.get_id(), "AS"));
        this.$9_3 = true;
        var $v_0 = Mscrm.AdvFind.getPropertiesForChild(this);
        $v_0["defaultText"] = window.LOCID_AF_SELECTCOND;
        this.$1_3 = $create(Mscrm.AutoShow, $v_0, null, null, XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$1_3.setInnerControlHtml('<select class="ms-crm-SelectBox"></select>');
        this.setField(this.$P_3);
        this.set_value(this.$5_3);
        this.SetMode(this.$0_3.$B_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$1_3);
            this.$1_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    getOperatorList: function() {
        return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$1_3.get_innerControl())
    },
    $2n_3: function($p0) {
        this.$5_3 = this.getOperatorList().get_dataValue();
        this.fireControlEvent("OnChange", Sys.EventArgs.Empty)
    },
    SetMode: function(mode) {
        this.$1_3.$c_3 = mode === 1;
        this.$1_3.SetMode(mode)
    },
    SetFocus: function() { this.$1_3.SetFocus() }
};
Mscrm.QueryList = function(element) {
    this.$$d_$2h_3 = Function.createDelegate(this, this.$2h_3);
    Mscrm.QueryList.initializeBase(this, [element])
};
Mscrm.QueryList.prototype = {
    $J_3: null,
    $2_3: null,
    $7_3: null,
    $3_3: null,
    $t_3: null,
    $q_3: false,
    $z_3: false,
    $r_3: false,
    get_clientCache: function() { return this.$3_3 },
    set_clientCache: function(value) {
        this.$3_3 = value;
        return value
    },
    get_entityName: function() { return this.$2_3 },
    set_entityName: function(value) {
        if (this.$2_3 !== value) {
            this.$2_3 = value;
            this.$2i_3()
        }
        return value
    },
    get_validQueryType: function() { return this.$t_3 },
    set_validQueryType: function(value) {
        this.$t_3 = value;
        return value
    },
    get_includeAPIQuery: function() { return this.$q_3 },
    set_includeAPIQuery: function(value) {
        this.$q_3 = value;
        return value
    },
    get_includeSystemQuery: function() { return this.$z_3 },
    set_includeSystemQuery: function(value) {
        this.$z_3 = value;
        return value
    },
    get_includeUserQuery: function() { return this.$r_3 },
    set_includeUserQuery: function(value) {
        this.$r_3 = value;
        return value
    },
    get_queryId: function() { return this.$7_3 },
    set_queryId: function(value) {
        var $v_0 = null;
        if (!IsNull(value)) $v_0 = value.toUpperCase();
        if (this.$7_3 !== $v_0) {
            this.$7_3 = $v_0;
            !IsNull(this.$J_3) && this.$2O_3()
        }
        return value
    },
    get_queryObjectType: function() {
        return IsNull(this.$J_3) || this.$J_3.get_selectedIndex() < 0
            ? null
            : parseInt(this.$J_3.get_selectedOption().getAttribute("type"), 10)
    },
    get_fetchXml: function() {
        if (!IsNull(this.$7_3))
            switch (parseInt(this.$J_3.get_selectedOption().getAttribute("objectTypeCode"))) {
            case 1039:
                return this.$3_3.GetElement("SystemQuery", this.$7_3, null);
            case 4230:
                return this.$3_3.GetElement("UserQuery", this.$7_3, null)
            }
        return null
    },
    get_queryName: function() { return this.$J_3.get_selectedIndex() > 0 ? this.$J_3.get_selectedText() : null },
    get_list: function() { return this.$J_3 },
    add_onQueryChange: function(value) { this.get_events().addHandler("OnQueryChange", value) },
    remove_onQueryChange: function(value) { this.get_events().removeHandler("OnQueryChange", value) },
    $2i_3: function() {
        if (!IsNull(this.$3_3)) {
            var $v_0 = {};
            $v_0["includeSystemQuery"] = this.$z_3;
            $v_0["includeUserQuery"] = this.$r_3;
            $v_0["includeAPIQuery"] = this.$q_3;
            $v_0["queryType"] = this.$t_3;
            var $v_1 = this.$3_3.GetElement("Query", this.$2_3, $v_0);
            if (!isNullOrEmptyString($v_1)) {
                this.get_element().innerHTML = $v_1;
                var $v_2 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
                if (isNullOrEmptyString($v_2.id)) $v_2.id = Mscrm.AdvFind.getControlId(this.get_id(), "_queryList");
                $create(Mscrm.FormInputControl.SelectInputBehavior, null, null, null, $v_2);
                this.$2X_3();
                return true
            }
        }
        return false
    },
    $2h_3: function($p0) {
        var $v_0 = this.$7_3;
        this.$7_3 = this.$J_3.get_dataValue().toUpperCase();
        var $v_1 = new Mscrm.CrmEventArgs;
        this.fireControlEvent("OnQueryChange", $v_1);
        if ($v_1.get_isDefaultPrevented()) {
            this.$7_3 = $v_0;
            this.$2O_3()
        }
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$2X_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$J_3)) {
            Mscrm.AdvFind.disposeAndDeleteControl(this.$J_3);
            this.$J_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $2X_3: function() {
        this.$J_3 = Mscrm.FormControlInputBehavior
            .GetElementBehavior(XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        if (IsNull(this.$J_3))
            this.$J_3 = $create(Mscrm.FormInputControl.SelectInputBehavior,
                null,
                null,
                null,
                XUI.Html.DomUtils.GetFirstChild(this.get_element()));
        this.$2O_3();
        $addHandler(this.$J_3.get_element(), "change", this.$$d_$2h_3)
    },
    $2O_3: function() {
        this.$J_3.set_selectedIndex(-1);
        !IsNull(this.$7_3) && this.$J_3.set_dataValue(this.$7_3.toUpperCase());
        if (this.$J_3.get_selectedIndex() === -1) {
            this.$J_3.set_selectedIndex(0);
            this.$7_3 = this.$J_3.get_dataValue()
        }
    },
    refresh: function() {
        this.$3_3.ClearCache("Query");
        this.$3_3.ClearCache("UserQuery");
        this.$3_3.ClearCache("SystemQuery");
        return this.$2i_3()
    },
    SetFocus: function() { this.$J_3.setFocus() }
};
Mscrm.AdvancedFindGroupEventArgs.registerClass("Mscrm.AdvancedFindGroupEventArgs", Mscrm.CrmEventArgs);
Mscrm.ResetModeWhenFetchLoaded.registerClass("Mscrm.ResetModeWhenFetchLoaded");
Mscrm.AdvancedFind.registerClass("Mscrm.AdvancedFind", Mscrm.CrmUIControl);
Mscrm.AdvancedFindCommon.registerClass("Mscrm.AdvancedFindCommon");
Mscrm.AdvFind.registerClass("Mscrm.AdvFind");
Mscrm.AutoShowChangeArgs.registerClass("Mscrm.AutoShowChangeArgs", Mscrm.CrmEventArgs);
Mscrm.AutoShow.registerClass("Mscrm.AutoShow", Mscrm.CrmUIControl, Mscrm.IAdvancedFindClientControl);
Mscrm.AdvancedFindQueryData.registerClass("Mscrm.AdvancedFindQueryData");
Mscrm.ClientControl.registerClass("Mscrm.ClientControl", Mscrm.CrmUIControl, Mscrm.IAdvancedFindClientControl);
Mscrm.EntityList.registerClass("Mscrm.EntityList", Mscrm.CrmUIControl, Mscrm.IAdvancedFindClientControl);
Mscrm.FieldChangeEventArgs.registerClass("Mscrm.FieldChangeEventArgs", Mscrm.CrmEventArgs);
Mscrm.FieldList.registerClass("Mscrm.FieldList", Mscrm.CrmUIControl, Mscrm.IAdvancedFindClientControl);
Mscrm.FilterControl.registerClass("Mscrm.FilterControl",
    Mscrm.CrmUIControl,
    Mscrm.IAdvancedFindClientControl,
    Mscrm.IAdvancedFindContainerControl);
Mscrm.FilterEntity.registerClass("Mscrm.FilterEntity",
    Mscrm.CrmUIControl,
    Mscrm.IAdvancedFindClientControl,
    Mscrm.IAdvancedFindValueControl,
    Mscrm.IFetchXmlConstructor,
    Mscrm.IAdvancedFindContainerControl);
Mscrm.FilterFieldError.registerClass("Mscrm.FilterFieldError");
Mscrm.FilterField.registerClass("Mscrm.FilterField",
    Mscrm.CrmUIControl,
    Mscrm.IAdvancedFindClientControl,
    Mscrm.IAdvancedFindValueControl,
    Mscrm.IFetchXmlConstructor);
Mscrm.FilterFieldGroup.registerClass("Mscrm.FilterFieldGroup",
    Mscrm.CrmUIControl,
    Mscrm.IAdvancedFindClientControl,
    Mscrm.IAdvancedFindContainerControl,
    Mscrm.IFetchXmlConstructor);
Mscrm.FiscalPeriodAndYearChangeArgs.registerClass("Mscrm.FiscalPeriodAndYearChangeArgs", Sys.EventArgs);
Mscrm.FiscalPeriodAndYear.registerClass("Mscrm.FiscalPeriodAndYear", Mscrm.CrmUIControl);
Mscrm.OperatorList.registerClass("Mscrm.OperatorList", Mscrm.CrmUIControl, Mscrm.IAdvancedFindClientControl);
Mscrm.QueryList.registerClass("Mscrm.QueryList", Mscrm.CrmUIControl);
Mscrm.AdvancedFind.fetchModeIgnoreEmpty = 4;
Mscrm.AdvancedFind.fetchModeSkipEmpty = 8;
Mscrm.AdvancedFind.fetchModeSummary = 1;
Mscrm.AdvancedFindCommon.AT_END = 1;
Mscrm.AdvancedFindCommon.AT_BEGIN = 2;
Mscrm.AdvancedFindCommon.AT_AFTER = 3;
Mscrm.AdvancedFindCommon.AT_BEFORE = 4;
Mscrm.AdvancedFindCommon.ControlsCache = null;
Mscrm.AdvFind.ENTITYLIST_CTRL = "Crm:EntityList";
Mscrm.AdvFind.FILTER_CTRL = "Crm:FilterControl";
Mscrm.AdvFind.FILTERFIELDGRP_CTRL = "Crm:FilterFieldGroup";
Mscrm.AdvFind.FILTERFIELD_CTRL = "Crm:FilterField";
Mscrm.AdvFind.FIELDLIST_CTRL = "Crm:FieldList";
Mscrm.AdvFind.OPERATORLIST_CTRL = "Crm:OperatorList";
Mscrm.AdvFind.CLIENTCONTROL_CTRL = "Crm:ClientControl";
Mscrm.AdvFind.AUTOSHOW_CTRL = "Crm:AutoShow";
Mscrm.AdvFind.FILTERENTITY_CTRL = "Crm:FilterEntity";
Mscrm.AdvFind.QUERYLIST_CTRL = "Crm:QueryList";
Mscrm.AdvFind.XPATH_SHOWNINSIMPLE = ".//condition[(not(@uihidden) or @uihidden='0')]";
Mscrm.AdvFind.XPATH_EMPTYFILTER = ".//filter[not(.//condition)]";
Mscrm.AdvFind.FIELD_GROUP = "fld";
Mscrm.AdvFind.ENTITY_GROUP = "ent"