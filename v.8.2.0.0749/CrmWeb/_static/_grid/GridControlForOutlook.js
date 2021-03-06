Type.registerNamespace("Mscrm");
Mscrm.GridControlForOutlook = function(e) {
    this.$2_2 = [];
    this.$6_2 = [];
    this.$9_2 = [];
    this.$3_2 = [];
    this.$8_2 = [];
    this.$A_2 = [];
    this.getProperty = this.GetProperty;
    Mscrm.GridControlForOutlook.initializeBase(this, [e])
};
Mscrm.GridControlForOutlook.prototype = {
    $E_2: 0,
    $C_2: "",
    get_ribbonContextType: function() { return "HomePageGrid" },
    get_ribbonRelationshipType: function() { return 0 },
    get_entityTypeCode: function() { return this.$E_2 },
    set_entityTypeCode: function(value) {
        this.$E_2 = value;
        return value
    },
    get_entityTypeName: function() { return this.$C_2 },
    set_entityTypeName: function(value) {
        this.$C_2 = value;
        return value
    },
    clearSelectionCache: function() {
        this.$7_2 = -1;
        this.$5_2 = -1;
        this.$2_2 = null;
        this.$6_2 = null;
        this.$9_2 = null;
        this.$3_2 = null;
        this.$8_2 = null;
        this.$A_2 = null
    },
    $7_2: 0,
    get_selectedRecordCount: function() {
        if (this.$7_2 === -1) this.$7_2 = getOutlookHostedWindow().getRibbonSelectionData(1);
        return this.$7_2
    },
    $5_2: 0,
    get_recordCount: function() {
        if (this.$5_2 === -1) this.$5_2 = getOutlookHostedWindow().getRibbonSelectionData(0);
        return this.$5_2
    },
    get_allRecordIds: function() {
        if (!this.$2_2) this.$2_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(3));
        return this.$2_2
    },
    get_selectedIds: function() {
        if (!this.$6_2) this.$6_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(5));
        return this.$6_2
    },
    get_unselectedIds: function() {
        if (!this.$9_2) this.$9_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(7));
        return this.$9_2
    },
    get_allRecords: function() {
        if (!this.$3_2) this.$3_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(2));
        return this.$3_2
    },
    get_selectedRecords: function() {
        if (!this.$8_2) this.$8_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(4));
        return this.$8_2
    },
    get_unselectedRecords: function() {
        if (!this.$A_2) this.$A_2 = eval(getOutlookHostedWindow().getRibbonSelectionData(6));
        return this.$A_2
    },
    refresh: function() { getOutlookHostedWindow().refreshGrid() },
    getCellValue: function(columnName, rowId) { return getOutlookHostedWindow().getCellValue(columnName, rowId) },
    GetParameter: function(name) { return getOutlookHostedWindow().getParameter(name) },
    SetParameter: function(name, value) { getOutlookHostedWindow().setParameter(name, value) },
    GetProperty: function(name) {
        switch (name) {
        case "uiProvider":
        case "dataProvider":
            return "";
        default:
            throw Error.notImplemented("TODO: (TZ) - Implement IGridControl.GetProperty")
        }
    },
    get_gridXml: function() { return getOutlookHostedWindow().getRibbonSelectionData(8) },
    get_entityDisplayName: function() { return getOutlookHostedWindow().getRibbonSelectionData(9) },
    get_entityDisplayPluralName: function() { return getOutlookHostedWindow().getRibbonSelectionData(10) },
    get_viewTitle: function() { return getOutlookHostedWindow().getRibbonSelectionData(11) },
    get_viewIsUserOwned: function() { return getOutlookHostedWindow().getRibbonSelectionData(12) },
    get_pageNumber: function() { return getOutlookHostedWindow().getRibbonSelectionData(14) },
    get_hasMorePages: function() { return this.get_totalRecordCount() > this.get_pageSize() },
    get_totalRecordCount: function() { return getOutlookHostedWindow().getRibbonSelectionData(13) },
    get_pageSize: function() { return getOutlookHostedWindow().getRibbonSelectionData(15) },
    get_pageRecordCount: function() { return this.get_recordCount() },
    isLiteSubGrid: function() { return false },
    addButtonClickHandler: function() {},
    get_gridType: function() { return 1 },
    DisassociateAndRefresh: function(associationName, parentTypeCode, parentId, targetTypeCode) { return },
    exportToExcel: function() { throw Error.notImplemented("The method or operation is not implemented.") },
    DeleteConnectionAndRefresh: function() { return },
    $4_2: null,
    get_$G_2: function() {
        if (!this.$4_2) {
            var $v_0 = XUI.Xml.SelectNodes(XUI.Xml.LoadXml(this.get_gridXml()), "grid/columns/column", null);
            this.$4_2 = new Array($v_0.length);
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) this.$4_2[$v_1] = XUI.Xml.GetText($v_0[$v_1])
        }
        return this.$4_2
    },
    getChart: function() { return new Mscrm.GridControlForOutlook.XrmChartForOutlook },
    getEntityName: function() { return this.$C_2 },
    getGrid: function() { return new Mscrm.GridControlForOutlook.XrmControlGridForOutlook(this) },
    getViewSelector: function() { return new Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook(this) }
};
Mscrm.GridControlForOutlook.XrmChartForOutlook = function() {
    Mscrm.GridControlForOutlook.XrmChartForOutlook.initializeBase(this)
};
Mscrm.GridControlForOutlook.XrmChartForOutlook.prototype = { getPaneMode: function() { return 4 } };
Mscrm.GridControlForOutlook.XrmControlGridForOutlook = function($p0) {
    Mscrm.GridControlForOutlook.XrmControlGridForOutlook.initializeBase(this);
    this.$0_1 = $p0
};
Mscrm.GridControlForOutlook.XrmControlGridForOutlook.prototype = {
    $0_1: null,
    getFilter: function() { return new Mscrm.GridControlForOutlook.XrmGridFilterForOutlook },
    getRows: function() { return this.$F_1(this.$0_1.get_allRecords()) },
    getSelectedRows: function() { return this.$F_1(this.$0_1.get_selectedRecords()) },
    getTotalRecordCount: function() { return this.$0_1.get_totalRecordCount() },
    $F_1: function($p0) {
        for (var $v_0 = new Array($p0
                     .length),
            $v_1 = 0;
            $v_1 < $p0.length;
            $v_1++) $v_0[$v_1] = new Mscrm.GridControlForOutlook.XrmGridRowForOutlook(this.$0_1, $p0[$v_1]);
        return new Xrm.XrmGridRows($v_0)
    },
    addOnRecordSelect: function($p0) {},
    removeOnRecordSelect: function($p0) {},
    fireOnRecordSelect: function() {}
};
Mscrm.GridControlForOutlook.XrmGridRowForOutlook = function($p0, $p1) {
    Mscrm.GridControlForOutlook.XrmGridRowForOutlook.initializeBase(this);
    this.$0_1 = $p0;
    this.$1_1 = $p1;
    this.data = new Mscrm.GridControlForOutlook.XrmGridDataForOutlook(this.$0_1, this.$1_1)
};
Mscrm.GridControlForOutlook.XrmGridRowForOutlook
    .prototype = { $0_1: null, $1_1: null, getKey: function() { return this.$1_1.Id } };
Mscrm.GridControlForOutlook.XrmGridDataForOutlook = function($p0, $p1) {
    Mscrm.GridControlForOutlook.XrmGridDataForOutlook.initializeBase(this);
    this.$0_1 = $p0;
    this.$1_1 = $p1;
    this.entity = new Mscrm.GridControlForOutlook.XrmGridEntityForOutlook(this.$0_1, this.$1_1)
};
Mscrm.GridControlForOutlook.XrmGridDataForOutlook.prototype = { $0_1: null, $1_1: null };
Mscrm.GridControlForOutlook.XrmGridEntityForOutlook = function($p0, $p1) {
    Mscrm.GridControlForOutlook.XrmGridEntityForOutlook.initializeBase(this);
    this.$0_1 = $p0;
    this.$1_1 = $p1;
    var $v_0 = this.$0_1.get_$G_2();
    this.attributes = new Xrm.XrmEntityAttributes;
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++)
        this.attributes.add(new Mscrm.GridControlForOutlook
            .XrmGridEntityAttributeForOutlook(this.$0_1, this.$1_1, $v_0[$v_1], this))
};
Mscrm.GridControlForOutlook.XrmGridEntityForOutlook
    .prototype = {
        $0_1: null,
        $1_1: null,
        getEntityName: function() { return this.$1_1.TypeName },
        getId: function() { return this.$1_1.Id },
        getPrimaryAttributeValue: function() { return "" },
        setRecordId: function($p0) {},
        addOnSave: function($p0, $p1) {},
        getDataXml: function() { return null },
        getIsDirty: function() { return false },
        isInHierarchy: function() { return false },
        removeOnSave: function($p0) {},
        save: function($p0) {}
    };
Mscrm.GridControlForOutlook.XrmGridEntityAttributeForOutlook = function($p0, $p1, $p2, $p3) {
    Mscrm.GridControlForOutlook.XrmGridEntityAttributeForOutlook.initializeBase(this);
    this.$0_1 = $p0;
    this.$1_1 = $p1;
    this.$B_1 = $p2;
    this.$D_1 = $p3
};
Mscrm.GridControlForOutlook.XrmGridEntityAttributeForOutlook
    .prototype = {
        $0_1: null,
        $1_1: null,
        $B_1: null,
        $D_1: null,
        getKey: function() { return this.getName() },
        getName: function() { return this.$B_1 },
        getParent: function() { return this.$D_1 },
        getValue: function() { return this.$0_1.getCellValue(this.$B_1, this.$1_1.Id) },
        addOnChange: function($p0) {},
        fireOnChange: function() {},
        getAttributeType: function() { return null },
        getFormat: function() { return null },
        getIsDirty: function() { return false },
        getIsValid: function() { return false },
        getRequiredLevel: function() { return null },
        getSubmitMode: function() { return null },
        getUserPrivilege: function() { return null },
        removeOnChange: function($p0) {},
        resetInitialValue: function($p0) {},
        setRequiredLevel: function($p0) {},
        setSubmitMode: function($p0) {},
        setValue: function($p0) {}
    };
Mscrm.GridControlForOutlook.XrmGridFilterForOutlook = function() {
    Mscrm.GridControlForOutlook.XrmGridFilterForOutlook.initializeBase(this)
};
Mscrm.GridControlForOutlook.XrmGridFilterForOutlook
    .prototype = { canEnableFilters: function() { return false }, isFilterEnabled: function() { return false } };
Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook = function($p0) {
    Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook.initializeBase(this);
    this.$0_1 = $p0
};
Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook.prototype = {
    $0_1: null,
    getCurrentView: function() {
        var $v_0 = new Xrm.LookupObject;
        $v_0.name = this.$0_1.get_viewTitle();
        $v_0.id = this.$0_1.GetParameter("viewid");
        var $v_1 = this.$0_1.GetParameter("viewtype"), $v_2 = Number.parseInvariant($v_1);
        $v_0.entityType = Xrm.Internal.getEntityName($v_2);
        return $v_0
    },
    isVisible: function() { return false },
    setCurrentView: function($p0) {}
};
Mscrm.GridControlForOutlook.registerClass("Mscrm.GridControlForOutlook",
    Sys.UI.Control,
    Mscrm.IRibbonSelectionControl,
    Mscrm.IGridControl,
    Xrm.Interfaces.IXrmGridControl);
Mscrm.GridControlForOutlook.XrmChartForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmChartForOutlook", Xrm.XrmChart);
Mscrm.GridControlForOutlook.XrmControlGridForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmControlGridForOutlook", Xrm.XrmControlGrid);
Mscrm.GridControlForOutlook.XrmGridRowForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmGridRowForOutlook", Xrm.XrmGridRow);
Mscrm.GridControlForOutlook.XrmGridDataForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmGridDataForOutlook", Xrm.XrmGridData);
Mscrm.GridControlForOutlook.XrmGridEntityForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmGridEntityForOutlook", Xrm.XrmEntity);
Mscrm.GridControlForOutlook.XrmGridEntityAttributeForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmGridEntityAttributeForOutlook", Xrm.XrmEntityAttribute);
Mscrm.GridControlForOutlook.XrmGridFilterForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmGridFilterForOutlook", Xrm.XrmGridFilter);
Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook
    .registerClass("Mscrm.GridControlForOutlook.XrmViewSelectorForOutlook", Xrm.XrmViewSelector)