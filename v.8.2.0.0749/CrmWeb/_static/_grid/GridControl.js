Type.registerNamespace("Mscrm");
Mscrm.SuggestionNotification = function() {};
Mscrm.SuggestionNotification.prototype = { generic: 0, picked: 1, all: 2 };
Mscrm.SuggestionNotification.registerEnum("Mscrm.SuggestionNotification", false);
Mscrm.InlineGridType = function() {};
Mscrm.InlineGridType.prototype = {
    product: 0,
    moveableRows: 1,
    entitlementChannel: 2,
    dynamicPropertyOptionSetItem: 3,
    category: 4
};
Mscrm.InlineGridType.registerEnum("Mscrm.InlineGridType", false);
Mscrm.RequirementLevel = function() {};
Mscrm.RequirementLevel.prototype = { clientOnly: 0, serverOnly: 1, both: 2 };
Mscrm.RequirementLevel.registerEnum("Mscrm.RequirementLevel", false);
Mscrm.GridContextualAction = function() {};
Mscrm.GridContextualAction.prototype = { addRecord: 0, deleteRecord: 1 };
Mscrm.GridContextualAction.registerEnum("Mscrm.GridContextualAction", false);
Mscrm.GridCellRawValueType = function() {};
Mscrm.GridCellRawValueType.prototype = { none: 0, string: 1, lookupItem: 2 };
Mscrm.GridCellRawValueType.registerEnum("Mscrm.GridCellRawValueType", false);
Mscrm.IVisualizationChangable = function() {};
Mscrm.IVisualizationChangable.registerInterface("Mscrm.IVisualizationChangable");
Mscrm.ICompositeGrid = function() {};
Mscrm.ICompositeGrid.registerInterface("Mscrm.ICompositeGrid");
Mscrm.IFilterSet = function() {};
Mscrm.IFilterSet.registerInterface("Mscrm.IFilterSet");
Mscrm.IEntityInlineEditGrid = function() {};
Mscrm.IEntityInlineEditGrid.registerInterface("Mscrm.IEntityInlineEditGrid");
Mscrm.ISubGridContextualActions = function() {};
Mscrm.ISubGridContextualActions.registerInterface("Mscrm.ISubGridContextualActions");
Mscrm.IGridPresenceView = function() {};
Mscrm.IGridPresenceView.registerInterface("Mscrm.IGridPresenceView");
Mscrm.BeforeFormLoadEventArgs = function(objectTypeCode, objectId, objectRow, isDblClick) {
    Mscrm.BeforeFormLoadEventArgs.initializeBase(this);
    this.objectTypeCode = objectTypeCode;
    this.objectID = objectId;
    this.objectRow = objectRow;
    this.isDblClick = isDblClick
};
Mscrm.BeforeFormLoadEventArgs.prototype = {
    objectTypeCode: 0,
    objectID: null,
    objectRow: null,
    isDblClick: false,
    breakEvent: false
};
Mscrm.AppGridDefaultDataControl = function(element) {
    this.$$d_contextMenuItemClickHandler = Function.createDelegate(this, this.contextMenuItemClickHandler);
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$C6_3 = Function.createDelegate(this, this.$C6_3);
    this.$$d_$5w_3 = Function.createDelegate(this, this.$5w_3);
    this.$$d_$7A_3 = Function.createDelegate(this, this.$7A_3);
    this.$$d_handleContextMenu = Function.createDelegate(this, this.handleContextMenu);
    this.$$d_$AA_3 = Function.createDelegate(this, this.$AA_3);
    this.$7e_3 = ["ms-crm-List-DataCell-Lite", "ms-crm-List-RoleDataCell-Lite", "ms-crm-List-DataCell-Associated-Lite"];
    this.$d_3 = -1;
    this.$E_3 = [];
    this.$3O_3 = [];
    this.$1z_3 = -1;
    Mscrm.AppGridDefaultDataControl.initializeBase(this, [element]);
    this.$3y_3 = element;
    if (window.LOCID_UI_DIR === "RTL") {
        this.$4O_3 = 39;
        this.$4P_3 = 37
    } else {
        this.$4O_3 = 37;
        this.$4P_3 = 39
    }
};
Mscrm.AppGridDefaultDataControl.$Bn = function($p0, $p1) {
    var $v_0 = $p0.getCellValueFromGridRow("absoluteurl", $p1),
        $v_1 = $p0.getCellValueFromGridRow("readurl", $p1),
        $v_2 = $p0.getCellValueFromGridRow("oid", $p1);
    if (!isNullOrEmptyString($v_1)) Mscrm.AppGridDefaultDataControl.$7w($v_1, $v_0);
    else if (!isNullOrEmptyString($v_0)) Xrm.Internal.spOpenInNativeClient($v_0);
    else {
        var $v_3 = ["absoluteurl", "readurl"], $v_4 = null;
        Mscrm.AppGridDefaultDataControl.$B0();
        Xrm.Internal.messages.retrieve("sharepointdocument", $v_2, $v_3).then(function($p1_0) {
                $v_4 = $p1_0.entity;
                $v_0 = $v_4.getValue("absoluteurl").toString();
                $v_1 = $v_4.getValue("readurl").toString();
                Mscrm.AppGridDefaultDataControl.$7w($v_1, $v_0)
            },
            null)
    }
};
Mscrm.AppGridDefaultDataControl.$B0 = function() {};
Mscrm.AppGridDefaultDataControl.$7w = function($p0, $p1) {
    if (!isNullOrEmptyString($p0)) window.open($p0, "_blank");
    else !isNullOrEmptyString($p1) && Mscrm.AppGridDefaultDataControl.$CY($p1)
};
Mscrm.AppGridDefaultDataControl.$CY = function($p0) { !isNullOrEmptyString($p0) && window.open($p0, "_blank") };
Mscrm.AppGridDefaultDataControl.$8e = function($p0) {
    return !(Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-DataCell") ||
            Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-NonDataCell") ||
            Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-DataCell-Lite") ||
            Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-DataCell-Associated-Lite")) &&
        !(Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-SelectedRow") ||
            Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-SelectedRow-Lite")) &&
        !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-HoveredRow") &&
        !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-SelectedMultilineRow") &&
        !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-DeleteContainer") &&
        !Sys.UI.DomElement.containsCssClass($p0, "ms-crm-List-HoveredMultilineRow")
};
Mscrm.AppGridDefaultDataControl.$1S = function($p0) {
    var $v_0 = $p0.getAttribute("selected");
    if (IsNull($v_0)) return false;
    return $v_0.toUpperCase() === "TRUE"
};
Mscrm.AppGridDefaultDataControl.$7N = function($p0) {
    var $v_0 = $p0.getAttribute("expanded");
    if (IsNull($v_0)) return false;
    return $v_0.toUpperCase() === "TRUE"
};
Mscrm.AppGridDefaultDataControl.$9H = function($p0) {
    var $v_0 = null, $v_1 = $p0.target, $v_2 = false;
    while ($v_1 && !$v_2) {
        for (var $v_3 = Mscrm.Utilities.getChildElementsByClassNameRecursive($v_1, "ms-crm-Standard-Popup", false),
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            var $v_5 = $v_3[$v_4];
            if ($v_5.id === "divMenu") {
                $v_0 = $v_5;
                $v_2 = true;
                break
            }
        }
        $v_1 = $v_1.parentNode
    }
    if (!$v_2) $v_0 = $get("divMenu");
    return $v_0
};
Mscrm.AppGridDefaultDataControl.prototype = {
    $2Y_3: "",
    add_onSelectionChange: function(value) { this.get_events().addHandler("OnSelectionChange", value) },
    remove_onSelectionChange: function(value) { this.get_events().removeHandler("OnSelectionChange", value) },
    add_onBeforeFormLoad: function(value) { this.get_events().addHandler("OnBeforeFormLoad", value) },
    remove_onBeforeFormLoad: function(value) { this.get_events().removeHandler("OnBeforeFormLoad", value) },
    $59_3: false,
    $1E_3: 0,
    $4I_3: 0,
    $15_3: null,
    $1e_3: null,
    $39_3: null,
    $58_3: 0,
    $3F_3: null,
    $1f_3: null,
    $5F_3: 21,
    $3y_3: null,
    $21_3: null,
    $4q_3: 0,
    $4O_3: 0,
    $4P_3: 0,
    disposeRecordsKey: function() {
        if (!IsNull(this.$0_3) && !IsNull(this.$0_3.get_eventManager())) {
            var $v_0 = {};
            if (isNullOrEmptyString(this.$2Y_3)) $v_0["key"] = this.$0_3.GetParameter("viewid");
            else $v_0["key"] = this.$2Y_3;
            this.$0_3.raiseEvent(100, $v_0)
        }
    },
    removeDblClickHandler: function() { $removeHandler(this.get_element(), "dblclick", this.$$d_$AA_3) },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$6C_3(this.get_element(), false);
        if (!IsNull(this.$0_3)) {
            var $v_0 = $get(this.$48_3 + "_divDataArea");
            !IsNull($v_0) && $removeHandler($v_0, "contextmenu", this.$$d_handleContextMenu)
        }
        $removeHandler(this.get_element(), "keyup", this.$$d_$7A_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$5w_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$C6_3);
        $removeHandler(this.get_element(), "dblclick", this.$$d_$AA_3);
        $removeHandler(this.get_element(), "click", this.$$d_$3d_3);
        this.$0_3 = null;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $0_3: null,
    $48_3: null,
    get_parentGridControl: function() { return this.$0_3 },
    set_parentGridControl: function(value) {
        this.$0_3 = value;
        this.$48_3 = this.$0_3.get_element().id;
        if (!IsNull(value)) {
            if (IsNull(value.$2_3)) value.$2_3 = this;
            this.$6C_3(this.get_element(), true)
        }
        return value
    },
    printRow: function(row) {
        if (!IsNull(row)) {
            var $v_0 = Mscrm.CrmUri.create("/_forms/print/print.aspx");
            $v_0.get_query()["objectType"] = this.get_element().getAttribute("oname");
            $v_0.get_query()["id"] = row.getAttribute("oid");
            $v_0.get_query()["subType"] = row.getAttribute("otype");
            openStdWinWithFeatures($v_0, "print" + buildWinName(row.getAttribute("oid")), "", false)
        }
    },
    previewRow: function(row) {
        if (IsNull(row) || IsNull(row.getAttribute("otype")) || IsNull(row.getAttribute("oid"))) return;
        parseInt(row.getAttribute("otype")) === 9100 && this.$9B_3(row)
    },
    openInNewWindow: function(row) {
        if (IsNull(this.$0_3) ||
            IsNull(Mscrm.PageManager) ||
            IsNull(Mscrm.PageManager.get_instance()) ||
            !Mscrm.PageManager.isFlatUIPage()) return;
        if (!Mscrm.PageManager.isFlatObject(parseInt(this.get_element().getAttribute("oname")))) {
            this.$7S_3(this.$2b_3(row));
            return
        }
        var $v_0 = this.$2b_3(row);
        if (IsNull($v_0)) return;
        var $v_1 = {};
        $v_1["etc"] = this.get_element().getAttribute("oname");
        if (!IsNull($v_0.getAttribute("otype"))) $v_1["etc"] = $v_0.getAttribute("otype");
        $v_1["id"] = $v_0.getAttribute("oid");
        $v_1["pagetype"] = "entityrecord";
        $v_1["sitemappath"] = this.$Cf_3();
        $v_1["queryString"] = getParentEntityIdParams();
        if (this.get_element().getAttribute("oname").toString() === "1025")
            if (!IsNull($v_1["queryString"])) $v_1["queryString"] = this.$5U_3($v_1["queryString"].toString());
            else $v_1["queryString"] = this.$5U_3("");
        var $v_2 = getWindowInformation($v_1["etc"]);
        $v_1["windowWidth"] = $v_2["windowWidth"];
        $v_1["windowHeight"] = $v_2["windowHeight"];
        if (this.get_element().getAttribute("oname")
            .toString() ===
            "1048") $v_1["queryString"] = this.$6e_3($v_1["queryString"].toString(), row);
        if (Mscrm.Utilities.isChrome()) {
            $v_1["features"] = "scrollbars=1";
            $v_1["trimStatus"] = false
        }
        $v_1["includeContextInPath"] = true;
        this.$0_3.raiseEvent(21, $v_1)
    },
    $Cf_3: function() {
        var $v_0 = this.$0_3.raiseEvent(3, null);
        if (IsNull($v_0) || !$v_0.length) return null;
        var $v_1 = $v_0[0];
        if (!IsNull($v_1)) return $v_1["sitemappath"];
        return null
    },
    openSelectedRecord: function(parameters) {
        if (!IsNull(this
                .get_selectedRecords()) &&
            this.get_selectedRecords().length === 1)
            this.$7S_3(this.$2b_3(this.get_selectedRecords()[0][3]), parameters, false);
        else if (!IsNull(this
                .get_selectedRecords()) &&
            this.get_selectedRecords().length > 1) throw Error.create("More than a single record selected.")
    },
    openGridInNewWindow: function() {
        if (Mscrm.NavigationMode.DefaultNavigationMode !== 1) return;
        if (IsNull(this.$0_3) ||
            IsNull(Mscrm.PageManager) ||
            IsNull(Mscrm.PageManager.get_instance()) ||
            !Mscrm.PageManager.isFlatUIPage()) return;
        var $v_0 = {};
        $v_0["etc"] = this.get_element().getAttribute("oname");
        $v_0["viewid"] = this.$0_3.GetParameter("viewid");
        $v_0["pagetype"] = "entitylist";
        $v_0["newWindow"] = true;
        this.$0_3.raiseEvent(21, $v_0)
    },
    SelectRecord: function(recordsToSelect) {
        if (IsNull(recordsToSelect)) return;
        for (var $v_0 = this.get_dataTableBody().rows.length, $v_1 = 0, $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = this.get_dataTableBody().rows[$v_2];
            if (!IsNull($v_3.getAttribute("oid"))) {
                var $v_4 = $v_3.getAttribute("oid");
                if (this.$Aq_3(recordsToSelect, $v_4)) {
                    this.$3W_3(this.get_dataTableBody().rows[$v_2]);
                    this.$3i_3(this.get_dataTableBody().rows[$v_2], true);
                    this.$d_3 = $v_2;
                    $v_1++;
                    if ($v_1 === recordsToSelect.length) return
                }
            }
        }
    },
    $Aq_3: function($p0, $p1) {
        for (var $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4];
            if ($p1.toUpperCase().indexOf($v_0.toUpperCase()) !== -1) return true
        }
        return false
    },
    SelectRecords: function(start, stop, unselect) {
        if (IsNull(start)) start = 0;
        if (IsNull(stop)) stop = this.get_dataTableBody().rows.length - 1;
        if (!IsNull(unselect) && unselect && stop !== this.get_dataTableBody().rows.length - 1)
            for (var $v_0 = this.$E_3.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
                var $v_2 = this.$E_3[$v_1];
                if (!IsNull($v_2) && ($v_2.sectionRowIndex < start || $v_2.sectionRowIndex > stop)) {
                    this.$2h_3($v_2, false, false);
                    Array.removeAt(this.$E_3, $v_1);
                    $v_1--;
                    $v_0--
                }
            }
        for (; start < stop + 1; start++) {
            this.$3W_3(this.get_dataTableBody().rows[start]);
            var $v_3 = this.$3i_3(this.get_dataTableBody().rows[start], false);
            if (!$v_3) break
        }
        this.$d_3 = stop;
        this.$28_3()
    },
    UnselectRecords: function(skip) {
        var $v_0 = this.$E_3[this.$E_3.length - 1];
        Array.removeAt(this.$E_3, this.$E_3.length - 1);
        while (!IsNull($v_0)) {
            this.$3W_3($v_0);
            this.$2h_3($v_0, false, false);
            $v_0 = this.$E_3[this.$E_3.length - 1];
            Array.removeAt(this.$E_3, this.$E_3.length - 1)
        }
        !IsNull(skip) && this.$3i_3(skip, false);
        this.$28_3()
    },
    resizeColumn: function(columnName, width) {
        var $v_0 = this.FindColumnIndex(columnName);
        $v_0 > -1 && this.resizeColumnOnIndex($v_0, width)
    },
    resizeColumnOnIndex: function(columnIndex, width) {
        if (columnIndex > -1)
            this.get_element().getElementsByTagName("COL")[columnIndex].style.width = (width + 3).toString() + "px"
    },
    autoResizeColumn: function(columnName) {
        var $v_0 = this.get_dataTableBody().rows, $v_1 = $v_0.length, $v_2 = this.FindColumnIndex(columnName), $v_3 = 0;
        if ($v_2 < 0) return -1;
        if (XUI.Html.DomUtils.GetFirstChild($v_0[0]).className !== "ms-crm-List-MessageText")
            for (var $v_4 = 0; $v_4 < $v_1; $v_4++) {
                var $v_5 = $v_0[$v_4].cells[$v_2],
                    $v_6 = XUI.Html.DomUtils.GetFirstChild($v_5),
                    $v_7 = $v_5.style.overflow,
                    $v_8 = $v_6.style.overflow,
                    $v_9 = $v_6.innerHTML;
                $v_5.style.overflow = "visible";
                $v_6.style.overflow = "visible";
                $v_6.innerHTML = "<span>" + $v_9 + "</span>";
                var $v_A = XUI.Html.DomUtils.GetFirstChild($v_6);
                if ($v_A.offsetWidth > $v_3) $v_3 = $v_A.offsetWidth;
                $v_5.style.overflow = $v_7;
                $v_6.style.overflow = $v_8;
                $v_6.innerHTML = $v_9
            }
        return $v_3 + 12
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "keyup", this.$$d_$7A_3);
        $addHandler(this.get_element(), "keydown", this.$$d_$5w_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$C6_3);
        $addHandler(this.get_element(), "dblclick", this.$$d_$AA_3);
        $addHandler(this.get_element(), "click", this.$$d_$3d_3);
        this.$4q_3 = window.LOCID_GRID_SELECT_ALL_KEY.charCodeAt(0);
        this.$28_3();
        this.$8k_3();
        var $v_0 = (new Date).getTime();
        IsNull(this.$0_3.GetParameter("GridType")) && this.$Ak_3();
        window.self.EntityLayoutPrefetch = (new Date).getTime() - $v_0
    },
    $8k_3: function() {
        if (!IsNull(this.$0_3)) {
            var $v_0 = $get(this.$0_3.get_id() + "_divDataArea");
            $addHandler($v_0, "contextmenu", this.$$d_handleContextMenu);
            var $v_1 = this.get_numberOfRecords();
            if ($v_1 > 0)
                if (this.$7q_3()) {
                    this.SelectRecords(0, 0, false);
                    this.$d_3 = 0
                }
        }
    },
    $6C_3: function($p0, $p1) {
        if (this.$59_3 === $p1)
            if ($p1) this.$6C_3($p0, !$p1);
            else return;
        else this.$59_3 = $p1;
        var $v_0 = this.$48_3, $v_1 = {};
        $v_1["CrmGrid"] = $v_0;
        for (var $v_2 = $p0.getElementsByTagName("col"), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3].getAttribute("name");
            if (!IsNull($v_4)) {
                var $v_5 = $v_0 + "_resize_" + $v_4;
                if ($p1) {
                    var $v_6 = $get($v_5);
                    !IsNull($v_6) &&
                        IsNull($find($v_5)) &&
                        Mscrm.CrmUIComponent.crmCreate(Mscrm.ColumnResizeControl, $v_1, null, null, $v_6)
                } else {
                    var $v_7 = $find($v_5);
                    !IsNull($v_7) && $v_7.dispose()
                }
            }
        }
    },
    $7q_3: function() {
        var $v_0 = false, $v_1 = this.$0_3.GetParameter("EnableFirstRecordSelection");
        if (!IsNull($v_1)) {
            $v_0 = Mscrm.Utilities.parseBoolean($v_1);
            if ($v_0 && this.$0_3.GetParameter("GridType") === "SubGrid" && !this.$0_3.$2P_3) $v_0 = false
        }
        return $v_0
    },
    $71_3: function($p0) {
        for (var $v_0 = [], $v_1 = this.get_dataTableBody().rows.length, $v_2 = 0, $v_3 = 0; $v_3 < $v_1; $v_3++) {
            var $v_4 = this.get_dataTableBody().rows[$v_3];
            if (!IsNull($v_4.getAttribute("oid")) && (!$p0 || Mscrm.AppGridDefaultDataControl.$1S($v_4))) {
                $v_0[$v_2] = [];
                $v_0[$v_2][0] = $v_4.getAttribute("oid");
                $v_0[$v_2][3] = $v_4;
                if (!IsNull($v_4.getAttribute("otype"))) {
                    $v_0[$v_2][1] = $v_4.getAttribute("otype");
                    $v_0[$v_2][3].setAttribute("otype", $v_4.getAttribute("otype"))
                } else {
                    $v_0[$v_2][1] = this.get_element().getAttribute("oname");
                    $v_0[$v_2][3].setAttribute("otype", this.get_element().getAttribute("oname"))
                }
                $v_0[$v_2][2] = $v_3;
                $v_2++
            }
        }
        return $v_0
    },
    get_selectedRecords: function() { return this.$71_3(true) },
    get_allRecords: function() { return this.$71_3(false) },
    get_recordsKey: function() { return this.$2Y_3 },
    set_recordsKey: function(value) {
        this.$2Y_3 = value;
        return value
    },
    get_contextMenuRow: function() { return this.$15_3 },
    get_moreRecords: function() { return this.get_element().getAttribute("morerecords") === "1" },
    get_totalRecordCount: function() {
        var $v_0 = this.get_element().getAttribute("totalrecordcount");
        if (!IsNull($v_0)) return parseInt($v_0, 10);
        return -1
    },
    get_allRecordsCounted: function() { return this.get_element().getAttribute("allrecordscounted") !== "0" },
    get_dataTableBody: function() {
        var $v_0 = this.get_element().getElementsByTagName("tbody");
        if (!IsNull($v_0) && $v_0.length > 0) return $v_0[0];
        return this.get_element()
    },
    $28_3: function() { this.fireControlEvent("OnSelectionChange", Sys.EventArgs.Empty) },
    get_numberOfRecords: function() {
        var $v_0 = this.get_element().getAttribute("numRecords");
        if (!IsNull($v_0)) {
            this.$1E_3 = parseInt($v_0);
            return this.$1E_3
        }
        if (!this.$1E_3) {
            for (var $v_1 = 0, $v_2 = this.$3y_3.rows.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
                var $v_4 = this.$3y_3.rows[$v_3].getAttribute("oid");
                if (!IsNull($v_4)) $v_1++
            }
            this.$1E_3 = $v_1
        }
        return this.$1E_3
    },
    get_defaultRowHeight: function() { return this.$5F_3 },
    FindColumnIndex: function(columnName) {
        var $v_0 = 0, $v_1 = -1, $v_2 = this.get_element().getElementsByTagName("COL"), $v_3 = $v_2.length;
        while ($v_0 < $v_3) {
            var $v_4 = $v_2[$v_0];
            if (!IsNull($v_4.getAttribute("name")) && $v_4.getAttribute("name") === columnName) {
                $v_1 = $v_0;
                break
            }
            $v_0++
        }
        return $v_1
    },
    get_primaryFieldName: function() { return this.get_element().getAttribute("primaryfieldname") },
    get_primaryFieldLabel: function() {
        var $v_0 = XUI.Xml.LoadXml(this.$0_3.get_layoutXml()),
            $v_1 = XUI.Xml.SelectSingleNode($v_0,
                "columns/column[@fieldname='" + this.get_primaryFieldName() + "']",
                null);
        return XUI.Xml.GetText($v_1.attributes.getNamedItem("label"))
    },
    sendShortcut: function(throughEmail, objectTypeCode) {
        Mscrm.Utilities.sendSelectedRecordsUrl(throughEmail,
            this.$Bp_3(this.$0_3.$2_3.get_selectedRecords()),
            objectTypeCode,
            false)
    },
    $Bp_3: function($p0) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; ++$v_1) {
            var $v_2 = new Mscrm.RecentlyViewedItem;
            $v_2.Id = $p0[$v_1][0];
            $v_2.TypeCode = $p0[$v_1][1];
            $v_0[$v_1] = $v_2
        }
        return $v_0
    },
    get_primaryFieldColumnIndex: function() {
        if (!IsNull(this.get_element().getAttribute("primaryfieldname"))) {
            var $v_1 = this.FindColumnIndex(this.get_element().getAttribute("primaryfieldname"));
            if ($v_1 !== -1) return $v_1
        }
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        if (!IsNull($v_0))
            for (var $v_2 = $v_0
                         .children,
                $v_3 = $v_2.length,
                $v_4 = 0;
                $v_4 < $v_3;
                $v_4++) if (!IsNull($v_2[$v_4].getAttribute("name"))) return $v_4;
        return -1
    },
    $C6_3: function($p0) {
        var $v_0 = $p0.target;
        if (!IsNull($v_0) &&
            !$v_0.title.length &&
            $v_0.innerHTML.length > 0 &&
            ($v_0.tagName.toUpperCase() === "NOBR" ||
                this.$0_3 && this.$0_3.isLiteSubGrid() && $v_0.className === "ms-crm-data-format-string") &&
            !Sys.UI.DomElement.containsCssClass($v_0
                .parentNode,
                "ms-crm-SubGrid-InlineEdit-Nobr-Div")) $v_0.title = XUI.Html.GetText($v_0)
    },
    $2b_3: function($p0) {
        while (!IsNull($p0) && ($p0.tagName.toUpperCase() !== "TR" || IsNull($p0.getAttribute("oid")))) {
            $p0 = $p0.parentNode;
            if (IsNull($p0.tagName)) return null
        }
        return $p0
    },
    $AA_3: function($p0) { this.$5v_3($p0, true) },
    $5v_3: function($p0, $p1) {
        this.$21_3 = this.$4h_3($p0, false);
        if (!IsNull(this.$21_3))
            if (($p0.ctrlKey ||
                    $p0.target.tagName.toUpperCase() === "INPUT" && $p0.target.getAttribute("type") === "checkbox") &&
                Mscrm.AppGridDefaultDataControl.$1S(this.$21_3)) this.$2h_3(this.$21_3, true, true);
            else this.$3e_3(this.$21_3, $p0.target, Mscrm.Utilities.getDomEventKeyCode($p0), $p0.shiftKey, $p0.ctrlKey);
        var $v_0 = this.get_selectedRecords();
        if (!$v_0.length) return;
        var $v_1 = $v_0[0], $v_2 = $v_1[3];
        this.$7S_3($v_2, null, $p1)
    },
    $AR_3: function($p0) {
        var $v_0 = true;
        if (!this.$0_3) return $v_0;
        if (!isNullOrEmptyString(this.$0_3.GetParameter("disablePrimaryFieldClick")))
            if (Mscrm.Utilities.parseBoolean(this.$0_3.GetParameter("disablePrimaryFieldClick"))) {
                $v_0 = false;
                return $v_0
            }
        var $v_1 = this.$0_3.GetProperty("dataProvider");
        if (!IsNull($v_1) && $v_1 === "Microsoft.Crm.Application.Controls.LookupGridDataProvider"
        ) this.$5v_3($p0, false);
        else {
            var $v_2 = this.$4h_3($p0, false);
            !IsNull($v_2) && this.$7S_3($v_2)
        }
        return $v_0
    },
    $Ak_3: function() {
        if (!window.DISPLAY_TURBO_FORM) return;
        var $v_0 = this.$3c_3(this.get_element());
        switch ($v_0) {
        case 4200:
            $v_0 = 4212;
            break;
        case 4002:
            return
        }
        var $v_1 = this.$9q_3($v_0);
        if (!Mscrm.EtcUtil.isRefreshEnabledForEntity($v_1.$1U_0)) return;
        Xrm.Internal.trace.logT(Mscrm.AppGridDefaultDataControl, "initiating prefetch for " + $v_1);
        Mscrm.Utilities.FetchTurboFormLayout($v_1.$1U_0, "", $v_1.$1m_0, $v_1.$2C_0)
    },
    $9q_3: function($p0) {
        var $v_0 = this.get_element().getElementsByTagName("TR"), $v_1 = {}, $v_2 = new Mscrm.LayoutPageParameters;
        $v_2.$1U_0 = $p0;
        for (var $v_3 = 1, $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_0[$v_4],
                $v_6 = this.$9n_3($v_5),
                $v_7 = $v_6.toString() in $v_1 ? $v_1[$v_6.toString()] + 1 : 1;
            $v_1[$v_6.toString()] = $v_7;
            if ($v_7 > $v_3) {
                $v_3 = $v_7;
                $v_2 = $v_6
            }
        }
        return $v_2
    },
    $9n_3: function($p0) {
        var $v_0 = new Mscrm.LayoutPageParameters;
        $v_0.$1U_0 = this.$3c_3($p0);
        var $v_1 = $p0.getAttribute("processid"), $v_2 = $p0.getAttribute("processts");
        if (!IsNull($v_1) && !IsNull($v_2)) {
            $v_0.$1m_0 = $v_1;
            $v_0.$2C_0 = Number.parseInvariant($v_2)
        }
        return $v_0
    },
    $7S_3: function($p0, $p1, $p2) {
        if (!this.$0_3 || this.$0_3.GetParameter("disableDblClick") === "1" || !this.$1E_3) return;
        window.clearTimeout(this.$58_3);
        this.$58_3 = 0;
        $p0 = this.$2b_3($p0);
        if (IsNull($p0)) return;
        var $v_0 = parseInt(this.get_element().getAttribute("oname"));
        if (!IsNull($p0.getAttribute("otype"))) {
            $v_0 = parseInt($p0.getAttribute("otype"));
            if ($v_0 === 4703) {
                var $v_2 = $p0.getAttribute("oid"), $v_3 = $p0.getAttribute("category");
                if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString($v_3) && Mscrm.Utilities.parseInt($v_3) === 4) {
                    Mscrm.BpfConfiguratorUtils.launchConfigurator($v_2);
                    return
                }
            }
        }
        if (!IsNull($p0.getAttribute("otype"))) {
            $v_0 = parseInt($p0.getAttribute("otype"));
            if ($v_0 === 9507 || $v_0 === 1189) {
                Mscrm.AppGridDefaultDataControl.$Bn(this.$0_3, $p0);
                return
            }
        } else return;
        if (IsNull($p2)) $p2 = false;
        if (this.$7g_3($p0, $v_0, $p0.getAttribute("oid"), $p2)) return;
        var $v_1 = null;
        if (!isNullOrEmptyString($p1)) $v_1 = $p1;
        else $v_1 = getParentEntityIdParams();
        if (!IsNull(this.$0_3) &&
            !IsNull(Mscrm.PageManager) &&
            !IsNull(getPageManager()) &&
            Mscrm.PageManager.isFlatUIPage() &&
            Mscrm.PageManager.isFlatObject(parseInt(this.get_element().getAttribute("oname"), 10))) {
            var $v_4 = {};
            $v_4["primaryFieldColumnName"] = this.get_primaryFieldName();
            $v_4["primaryFieldColumnIndex"] = this.get_primaryFieldColumnIndex();
            $v_4["pageNumber"] = this.$0_3.get_pageNumber();
            var $v_5 = String.format("page_{0}_gridXml", this.$0_3.get_pageNumber());
            $v_4[$v_5] = this.$0_3.get_gridXml();
            $v_4["layoutXml"] = this.$0_3.get_layoutXml();
            $v_4["rpos"] = this.$9I_3(this.get_allRecords(), $p0.getAttribute("oid"));
            var $v_6 = this.$0_3.GetParameter("viewTitle");
            if (IsNull($v_6) || !$v_6.length) $v_6 = window.LOCID_GRID_NO_VIEW_NAME;
            var $v_7 = false, $v_8 = this.$0_3.get_id(), $v_9 = $find($v_8 + "_SavedNewQuerySelector");
            if (!IsNull($v_9) &&
                $v_9.showNewVSControl &&
                !$v_9.showOriginalSelectBox &&
                $v_9.selectedViewName === window.LOCID_SEARCH_RESULTS) $v_7 = true;
            var $v_A = this.get_element().ownerDocument.getElementById($v_8 + "_SavedQuerySelector");
            if (!$v_7 &&
                !IsNull($v_A) &&
                !IsNull($v_A.SelectedOption) &&
                !IsNull($v_A.SelectedOption.Search) &&
                $v_A.SelectedOption.Search) $v_7 = true;
            if ($v_7) {
                $v_6 = window.LOCID_SEARCH_RESULTS;
                var $v_H = this.get_element().ownerDocument.getElementById($v_8 + "_findCriteria").value;
                if (!IsNull($v_H)) $v_6 = String.format(window.LOCID_WINDOW_TITLE_FORMAT, $v_6, $v_H)
            }
            $v_4["viewName"] = $v_6;
            var $v_B = String.format("page_{0}_moreRecords", this.$0_3.get_pageNumber());
            $v_4[$v_B] = this.get_moreRecords();
            var $v_C = this.$0_3.get_layoutXml().indexOf('fieldname="' + this.get_primaryFieldName() + '"') >= 0,
                $v_D = [];
            if ($v_C) {
                $v_D[0] = this.get_primaryFieldName();
                $v_4["displayFieldColumnName"] = this.get_primaryFieldName();
                $v_4["displayFieldColumnLabel"] = this.get_primaryFieldLabel();
                $v_4["displayFieldColumnIndex"] = this.get_primaryFieldColumnIndex()
            } else {
                var $v_I = XUI.Xml.LoadXml(this.$0_3.get_layoutXml()),
                    $v_J = XUI.Xml.SelectSingleNode($v_I, "columns/column", null);
                $v_D[0] = XUI.Xml.GetText($v_J.attributes.getNamedItem("fieldname"));
                $v_4["displayFieldColumnName"] = XUI.Xml.GetText($v_J.attributes.getNamedItem("fieldname"));
                $v_4["displayFieldColumnLabel"] = XUI.Xml.GetText($v_J.attributes.getNamedItem("label"));
                $v_4["displayFieldColumnIndex"] = 2
            }
            var $v_E = String.format("page_{0}_Records", this.$0_3.get_pageNumber());
            $v_4[$v_E] = Sys.Serialization.JavaScriptSerializer
                .serialize(Mscrm.Grid.getGridRecords(this.get_element(), $v_D, this.$0_3.get_layoutXml()));
            var $v_F = {};
            $v_F["key"] = this.$0_3.GetParameter("viewid");
            $v_F["data"] = $v_4;
            $v_F["cacheScope"] = 2;
            $v_F["purgeDataOnCacheSync"] = true;
            var $v_G = null;
            if (!IsNull(this.$0_3) && !IsNull(this.$0_3.get_eventManager())) {
                this.disposeRecordsKey();
                $v_G = this.$0_3.raiseEvent(5, $v_F)
            }
            if (!IsNull($v_G) && $v_G.length > 0) {
                $v_1 = IsNull($v_1) || !$v_1.length ? "?" : $v_1 + "&";
                this.$2Y_3 = $v_G[0];
                $v_1 += "rskey=" + CrmEncodeDecode.CrmUrlEncode($v_G[0]);
                $v_1 += "&_gridType=" + CrmEncodeDecode.CrmUrlEncode(this.get_element().getAttribute("oname"))
            }
        }
        if (!IsNull($p0.getAttribute("processid")) && !IsNull($p0.getAttribute("processts"))) {
            $v_1 = IsNull($v_1) || !$v_1.length ? "?" : $v_1 + "&";
            $v_1 += "process=" + CrmEncodeDecode.CrmUrlEncode($p0.getAttribute("processid"));
            $v_1 += "&processts=" + CrmEncodeDecode.CrmUrlEncode($p0.getAttribute("processts"));
            $v_1 += "&opened=grid"
        }
        if (!IsNull($p0.getAttribute("processid")) && !IsNull($p0.getAttribute("processts"))) {
            $v_1 = IsNull($v_1) || !$v_1.length ? "?" : $v_1 + "&";
            $v_1 += "process=" + CrmEncodeDecode.CrmUrlEncode($p0.getAttribute("processid"));
            $v_1 += "&processts=" + CrmEncodeDecode.CrmUrlEncode($p0.getAttribute("processts"));
            $v_1 += "&opened=grid"
        }
        if (this.$0_3
            .GetParameter("sameWindow") ===
            "false") openObj($v_0, $p0.getAttribute("oid"), $v_1, null, 0, null);
        else {
            var $v_K = this.$0_3;
            if (this.get_element().getAttribute("oname").toString() === "1048") $v_1 = this.$6e_3($v_1, $p0);
            if (this.get_element().getAttribute("oname").toString() === "1025") $v_1 = this.$5U_3($v_1);
            openObj($v_0, $p0.getAttribute("oid"), $v_1);
            !this.get_isDisposed() &&
                !IsNull(this.$0_3) &&
                !IsNull(this.$0_3.get_eventManager()) &&
                $v_K.raiseEvent(86, {})
        }
    },
    $6e_3: function($p0, $p1) {
        if (!IsNull(Xrm.Page.data)) {
            $p0 += "&_parentId=" + CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId());
            if ($p1.getAttribute("candelete") &&
                $p1.getAttribute("canoverride") &&
                $p1.getAttribute("canoverwrite") &&
                $p1.getAttribute("isformreadonly")) {
                $p0 += "&_canDelete=" + $p1.getAttribute("candelete");
                $p0 += "&_canOverride=" + $p1.getAttribute("canoverride");
                $p0 += "&_canOverwrite=" + $p1.getAttribute("canoverwrite");
                $p0 += "&_isReadOnly=" + $p1.getAttribute("isformreadonly")
            }
        } else {
            if (!IsNull($p1.getAttribute("statecode")) && $p1.getAttribute("statecode").toString() === "Draft") {
                $p0 += "&_canDelete=true";
                $p0 += "&_isReadOnly=false"
            } else {
                $p0 += "&_canDelete=false";
                $p0 += "&_isReadOnly=true"
            }
            $p0 += "&_canOverride=false";
            $p0 += "&_canOverwrite=false"
        }
        return $p0
    },
    $5U_3: function($p0) {
        if (!IsNull(Xrm.Page.data) &&
            !IsNull(Xrm.Page.data.entity) &&
            Xrm.Page.data.entity.getEntityName() === "product" &&
            !IsNull(Xrm.Page.data.entity.attributes)) {
            var $v_0 = Xrm.Page.data.entity.attributes.get("productstructure");
            if (!IsNull($v_0) && $v_0.getValue() === 3) {
                if (!isNullOrEmptyString($p0)) $p0 += "&_isReadOnly=false";
                else {
                    $p0 = getParentEntityIdParams();
                    if (!isNullOrEmptyString($p0)) $p0 += "&_isReadOnly=false";
                    else $p0 += "_isReadOnly=false"
                }
                var $v_1 = Xrm.Page.context.getQueryStringParameters(),
                    $v_2 = Xrm.Page.data.entity.attributes.get("statecode");
                if (IsNull($v_1["revise"]) && $v_2.getValue() === 3) $p0 += "&revise=true";
                if (!IsNull($v_1["revise"])) $p0 += "&revise=" + CrmEncodeDecode.CrmUrlEncode($v_1["revise"])
            }
        }
        return $p0
    },
    $9I_3: function($p0, $p1) {
        if (IsNull($p0)) return -1;
        var $v_0 = 0, $v_1 = $p0.length;
        while ($v_0 < $v_1) {
            if ($p0[$v_0][0] === $p1) return $v_0;
            $v_0++
        }
        return -1
    },
    $7g_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = new Mscrm.BeforeFormLoadEventArgs($p1, $p2, $p0, $p3);
        this.fireControlEvent("OnBeforeFormLoad", $v_0);
        return $v_0.breakEvent
    },
    $4h_3: function($p0, $p1) {
        if (!this.$1E_3) {
            this.$Bq_3($p0);
            return null
        }
        var $v_0 = $p0.target, $v_1 = $v_0.tagName.toUpperCase();
        if ($v_1 === "TBODY") return null;
        if ($v_1 === "IMG") {
            $v_0 = $v_0.parentNode;
            $v_1 = $v_0.tagName.toUpperCase();
            if ($v_1 !== "SPAN" && $v_1 !== "NOBR") return $v_0.parentNode
        }
        if ($v_0.tagName.toUpperCase() === "SPAN") $v_0 = $v_0.parentNode;
        if ($v_0.tagName.toUpperCase() === "LI") $v_0 = $v_0.parentNode;
        if ($v_0.tagName.toUpperCase() === "A") {
            if ($p1) return $v_0;
            $v_0 = $v_0.parentNode
        }
        if ($v_0.tagName.toUpperCase() === "NOBR") $v_0 = $v_0.parentNode;
        if ($v_0.tagName.toUpperCase() === "INPUT" && $v_0.getAttribute("type") === "checkbox") $v_0 = $v_0.parentNode;
        if ($v_0.tagName.toUpperCase() === "DIV") $v_0 = $v_0.parentNode;
        if ($v_0.tagName.toUpperCase() === "TD") {
            if (Mscrm.AppGridDefaultDataControl.$8e($v_0)) return null;
            $v_0 = $v_0.parentNode
        }
        if ($v_0.tagName.toUpperCase() === "TR") return $v_0;
        return null
    },
    $Bq_3: function($p0) {
        if (!IsNull(this.$0_3) &&
            this.$0_3.GetParameter("LoadOnDemand") === "1" &&
            !IsNull($p0) &&
            $p0.target.getAttribute("id") === "LoadOnDemandMessage") {
            this.$0_3.SetParameter("LoadOnDemand", "0");
            this.$0_3.SetParameter("LoadOnDemand_GridEmptyMessage", "");
            this.$0_3.Refresh()
        }
    },
    $3d_3: function($p0, $p1) {
        this.$0_3.doNotFocusGridQuickFindOnLoad = true;
        var $v_0, $v_1;
        if (IsNull($p1)) {
            $v_0 = $p0.target;
            $v_1 = this.$4h_3($p0, true)
        } else {
            $v_0 = $p1;
            $v_1 = $p1
        }
        if (!IsNull($v_1) &&
            !isNullOrEmptyString($v_1.className) &&
            $v_1.className === "ms-crm-List-DeleteContainer-Div") $v_1 = $v_1.parentNode.parentNode;
        var $v_2 = false;
        if ($v_1) $v_2 = Mscrm.AppGridDefaultDataControl.$1S($v_1);
        if ($v_0.tagName.toUpperCase() === "IMG")
            if (Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-grid-checkbox-image") ||
                Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-grid-checkbox-image-Associated-Lite")) {
                this.$A7_3($p0, $v_0, $v_1, $v_2);
                return
            } else if (($v_0.src.indexOf("grid") > 0 || $v_0.className.indexOf("ms-crm-ImageStrip-r") > 0) &&
                !$p0.ctrlKey) {
                $v_1 = $v_0.parentNode.parentNode;
                !$v_2 && this.$3e_3($v_1, $v_0, Mscrm.Utilities.getDomEventKeyCode($p0), $p0.shiftKey, $p0.ctrlKey);
                this.previewRow($v_1);
                return
            }
        if (!IsNull($v_1)) {
            var $v_3 = true;
            if ($v_1.tagName.toUpperCase() === "A") {
                var $v_7 = this.$0_3.GetProperty("dataProvider");
                if ($v_1.id.indexOf("primaryField") !== -1) {
                    if (!Mscrm.Utilities.isMobileRefresh()) {
                        window.top.GridClickMarker = (new Date).getTime();
                        $v_3 = this.$AR_3($p0)
                    }
                    $p0.preventDefault()
                }
                if (!$v_3 ||
                    Mscrm.Utilities.isMobileRefresh() &&
                    !IsNull($v_7) &&
                    $v_7 === "Microsoft.Crm.Application.Controls.LookupGridDataProvider") {
                    if (Mscrm.Utilities.isMobileRefresh() &&
                        !IsNull($v_7) &&
                        $v_7 === "Microsoft.Crm.Application.Controls.LookupGridDataProvider") {
                        $v_1 = $v_1.parentNode.parentNode;
                        if (IsNull($v_1.getAttribute("class")) ||
                            $v_1.getAttribute("class") !== "row0" &&
                            $v_1.getAttribute("class") !== "row1" &&
                            $v_1.getAttribute("class") !== "ms-crm-List-Row" &&
                            $v_1
                            .getAttribute("class") !==
                            "ms-crm-List-SelectedRow") $v_1 = XUI.Html.DomUtils.GetPrevSibling($v_1)
                    } else $v_1 = $v_1.parentNode.parentNode.parentNode;
                    $v_2 = Mscrm.AppGridDefaultDataControl.$1S($v_1)
                } else return
            }
            var $v_4 = $v_0.tagName.toUpperCase() === "INPUT" && $v_0.getAttribute("type") === "checkbox",
                $v_5 = $p0.ctrlKey,
                $v_6 = this.$0_3.isLiteSubGrid();
            if (($v_4 || $v_5 || $v_6 || Mscrm.Utilities.isMobileRefresh() && $v_2) &&
                Mscrm.AppGridDefaultDataControl.$1S($v_1)) this.$2h_3($v_1, true, true);
            else this.$3e_3($v_1, $v_0, Mscrm.Utilities.getDomEventKeyCode($p0), $p0.shiftKey, $p0.ctrlKey);
            this.$6k_3($v_1)
        }
        !IsNull(this.$0_3) &&
            this.$0_3.isLiteSubGrid() &&
            !$v_2 &&
            Mscrm.Utilities.parseBoolean(this.$0_3.GetParameter("enablesingleclick")) &&
            this.handleSingleClick($p0)
    },
    $A7_3: function($p0, $p1, $p2, $p3) {
        if (!$p3) {
            !IsNull($p0) &&
                !IsNull($p0.target) &&
                !IsNull($p0.target.offsetParent) &&
                $p0.target.offsetParent.setAttribute("aria-checked", "true");
            this.$3e_3($p2, $p1, Mscrm.Utilities.getDomEventKeyCode($p0), $p0.shiftKey, $p0.ctrlKey)
        } else {
            !IsNull($p0) &&
                !IsNull($p0.target) &&
                !IsNull($p0.target.offsetParent) &&
                $p0.target.offsetParent.setAttribute("aria-checked", "false");
            this.$2h_3($p2, true, true)
        }
    },
    handleSingleClick: function(targetEvent) {
        switch (this.$0_3.get_entityTypeCode()) {
        case 112:
            var $v_0 = this.fetchSelectedRecord(),
                $v_1 = $get("titleHeader"),
                $v_2 = !$v_0 || isNullOrEmptyString($v_0[2]) ? " " : $v_0[2];
            if (!IsNull($v_1)) {
                XUI.Html.SetText($v_1, $v_2);
                $v_1.title = $v_2.trim()
            }
            var $v_3 = {};
            $v_3["entityID"] = !$v_0 || !$v_0[0] ? "" : $v_0[0];
            var $v_4 = new Mscrm.EntityReference;
            $v_4.Id = $v_3["entityID"];
            $v_4.TypeName = "incident";
            $v_4.TypeCode = 112;
            $v_4.Name = $v_2;
            $v_3["entityReference"] = $v_4;
            $v_3["entityTypeToExpand"] = "4206";
            this.$0_3.raiseEvent(79, $v_3);
            break;
        default:
            this.$5v_3(targetEvent, false);
            break
        }
    },
    fetchSelectedRecord: function() {
        var $v_0 = [];
        if (IsNull(this.get_selectedRecords()) || this.get_selectedRecords().length < 1) return null;
        var $v_1 = this.$2b_3(this.get_selectedRecords()[0][3]);
        if (IsNull($v_1)) return null;
        var $v_2 = $v_1.getAttribute("oid");
        $v_0[0] = $v_2;
        var $v_3 = parseInt(this.get_element().getAttribute("oname"));
        $v_0[1] = $v_3;
        var $v_4 = "", $v_5 = "checkBox_" + $v_2, $v_6 = $get($v_5, $v_1);
        if (!IsNull($v_6)) $v_4 = $v_6.title;
        else $v_4 = XUI.Html.GetText($v_1);
        $v_0[2] = $v_4;
        return $v_0
    },
    $5w_3: function($p0) {
        if ($p0.target.tagName.toUpperCase() === "INPUT" &&
        ($p0.target
            .className !==
            "ms-crm-RowCheckBox" &&
            $p0.target.className !== "ms-crm-RowCheckBox-Lite")) return;
        if ($p0.altKey) {
            $p0.preventDefault();
            return
        }
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_0 === 40 || $v_0 === 38) {
            $p0.preventDefault();
            var $v_1 = 0;
            if ($v_0 === 40) {
                if (this.$d_3 >= this.get_dataTableBody().rows.length - 1) return;
                $v_1 = 1
            } else if ($v_0 === 38) {
                if (this.$d_3 <= 0) return;
                $v_1 = -1
            }
            var $v_2 = this.$d_3 + $v_1, $v_3 = this.get_dataTableBody().rows[$v_2];
            if (!this.$0_3.isLiteSubGrid())
                if ($v_3.cells[0].className === "ms-crm-List-PreviewCell" ||
                    $v_3.cells[1].className === "ms-crm-List-PreviewCell") $v_2 = $v_2 + $v_1;
            this.$6k_3($v_3);
            this.$3d_3($p0, $v_3);
            var $$t_7 = this;
            $v_2 = window.setInterval(function() {
                    try {
                        !$$t_7.$CJ_3($v_3, $v_0 === 40) && window.clearInterval($v_2)
                    } catch ($$e_5) {
                        window.clearInterval($v_2)
                    }
                },
                0)
        } else if ($v_0 === this.$4q_3) $p0.ctrlKey && this.$1E_3 > 0 && this.$CK_3();
        else if ($v_0 === 80) this.$0_3.GetParameter("preview") === "1" && $p0.preventDefault();
        else if ($v_0 === 32) {
            if (!IsNull($p0) &&
                !IsNull($p0.target) &&
                !IsNull($p0.target.offsetParent) &&
                $p0.target.getAttribute("title") === "Checkbox") {
                var $v_4 = $p0.target.getAttribute("aria-checked") === "true";
                $p0.target.setAttribute("aria-checked", $v_4 ? "false" : "true")
            }
            this.$0_3.get_maximumSelectableRecords() && $p0.preventDefault();
            return
        }
    },
    $7A_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($p0.altKey || $p0.shiftKey || $p0.ctrlKey && $v_0 !== this.$4q_3) return;
        if ($v_0 === 13) {
            if (this.$1E_3 > 0 && this.$d_3 !== -1) {
                var $v_1 = $p0.target.parentNode.parentNode;
                if ($v_1.tagName
                    .toUpperCase() ===
                    "A" &&
                    this.$21_3.getAttribute("id")
                    .indexOf("primaryField") ===
                    -1)
                    XUI.Html.DispatchDomEvent(this.get_dataTableBody().rows[this.$d_3],
                        XUI.Html.CreateDomEvent("click"));
                else
                    XUI.Html.DispatchDomEvent(this.get_dataTableBody().rows[this.$d_3],
                        XUI.Html.CreateDomEvent("dblclick"))
            }
        } else if ($v_0 === 80)
            this.$0_3.GetParameter("preview") === "1" && this.previewRow(this.get_dataTableBody().rows[this.$d_3]);
        else if ($v_0 === 32) {
            if (this.$0_3.get_maximumSelectableRecords()) {
                var $v_2 = this.$4h_3($p0, false);
                if (!IsNull($v_2)) {
                    $p0.preventDefault();
                    if (Mscrm.AppGridDefaultDataControl.$1S($v_2)) this.$2h_3($v_2, true, true);
                    else
                        this.$3e_3($v_2, $p0.target, Mscrm.Utilities.getDomEventKeyCode($p0), $p0.shiftKey, $p0.ctrlKey)
                }
            }
        } else if ($v_0 === this.$4P_3)
            this.get_moreRecords() && this.$0_3.set_pageNumber(this.$0_3.get_pageNumber() + 1);
        else if ($v_0 === this.$4O_3)
            this.$0_3.get_pageNumber() > 1 && this.$0_3.set_pageNumber(this.$0_3.get_pageNumber() - 1)
    },
    $CJ_3: function($p0, $p1) {
        var $v_0 = this.$0_3.get_id() + "_divDataArea",
            $v_1 = $get($v_0),
            $v_2 = $v_1.scrollTop,
            $v_3 = $v_1.clientHeight + $v_2,
            $v_4;
        if ($p1) {
            $v_4 = $p0.offsetTop + $p0.offsetHeight;
            if ($v_4 > $v_3) {
                $v_1.scrollTop += Math.floor($v_1.offsetHeight / 8);
                return true
            }
        } else {
            $v_4 = $p0.offsetTop;
            if ($v_4 < $v_2) {
                $v_1.scrollTop -= Math.floor($v_1.offsetHeight / 8);
                return true
            }
        }
        return false
    },
    $3e_3: function($p0, $p1, $p2, $p3, $p4) {
        if (!IsNull($p0.getAttribute("IsDisabled")) && $p0.getAttribute("IsDisabled") === "1") return;
        if ($p3 && this.$d_3 !== -1) {
            if (this.$1z_3 === -1) this.$1z_3 = this.$d_3;
            if ($p0.sectionRowIndex < this.$1z_3) this.SelectRecords($p0.sectionRowIndex, this.$1z_3, true);
            else this.SelectRecords(this.$1z_3, $p0.sectionRowIndex, true);
            this.$d_3 = $p0.sectionRowIndex
        } else {
            if (!$p4)
                if ($p2 !== 32 && !this.$97_3($p1) || this.$0_3.get_maximumSelectableRecords() === 1) {
                    var $v_0 = this.$0_3.GetParameter("multiSelectOnRowClick");
                    if (IsNull($v_0) || $v_0 !== "true") {
                        var $v_1 = this.$0_3.GetParameter("IsInlineMultiLookup");
                        (!Mscrm.Utilities.isMobileRefresh() || isNullOrEmptyString($v_1) || $v_1 !== "1") &&
                            this.UnselectRecords($p0)
                    }
                }
            this.$3i_3($p0, false);
            this.$d_3 = $p0.sectionRowIndex;
            this.$1z_3 = -1
        }
        this.$28_3()
    },
    $97_3: function($p0) {
        if (this.$6f_3($p0)) return true;
        return this.$96_3($p0)
    },
    $6f_3: function($p0) {
        if (IsNull($p0.tagName)) return false;
        if ($p0.id.toString().startsWith("gridBodyTable_checkBox_Image")) return true;
        return $p0.tagName.toUpperCase() === "INPUT" && $p0.getAttribute("type") === "checkbox"
    },
    $96_3: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        return IsNull($v_0) ? false : this.$6f_3($v_0)
    },
    $6L_3: function($p0, $p1) {
        var $v_0 = "checkBox_" + $p0.getAttribute("oid"), $v_1 = $get($v_0, $p0);
        if (!IsNull($v_1)) {
            $v_1.checked = $p1;
            var $v_2 = Mscrm.GridControl.getCheckBoxImage($p0);
            if (!IsNull($v_2))
                if (!$p1) {
                    $v_2.style.visibility = "hidden";
                    Sys.UI.DomElement.removeCssClass($v_2, "ms-crm-ImageStrip-checkbox");
                    Sys.UI.DomElement.addCssClass($v_2, "ms-crm-ImageStrip-checkbox_light")
                } else {
                    $v_2.style.visibility = "visible";
                    Sys.UI.DomElement.removeCssClass($v_2, "ms-crm-ImageStrip-checkbox_light");
                    Sys.UI.DomElement.addCssClass($v_2, "ms-crm-ImageStrip-checkbox")
                }
        }
        $p0.setAttribute("selected", $p1 ? "true" : "false")
    },
    $6k_3: function($p0) {
        if (!this.$0_3.isLiteSubGrid()) {
            var $v_0 = "checkBox_" + $p0.getAttribute("oid"), $v_1 = $get($v_0, $p0);
            if (!IsNull($v_1))
                try {
                    $v_1.focus()
                } catch ($$e_3) {
                }
        }
    },
    $3i_3: function($p0, $p1) {
        if (IsNull($p0)) return false;
        if (IsNull(this.$0_3)) return false;
        var $v_0 = this.$0_3.get_maximumSelectableRecords();
        if (Mscrm.AppGridDefaultDataControl.$1S($p0)) {
            var $v_1 = this.$E_3, $v_2 = $v_1[0];
            if ($v_2.innerHTML.indexOf("gridBodyTable_primaryField") > -1)
                for (var $v_3 = $v_2.getElementsByTagName("a"), $v_4 = 0; $v_4 <= $v_3.length; $v_4++) {
                    var $v_5 = $v_3[$v_4];
                    if ($v_5 && $v_5.id.indexOf("gridBodyTable_primaryField") > -1) {
                        $v_5.focus();
                        return true
                    }
                }
            return true
        }
        if (0 === $v_0) return false;
        if (this.$0_3 && this.$0_3.isLiteSubGrid() && $p0.className === "ms-crm-Hidden-List") return false;
        if ($v_0 > 0 && this.$4I_3 + 1 <= $v_0 || $v_0 === -1) {
            if (XUI.Html.DomUtils.GetFirstChild($p0).className !== "ms-crm-List-PreviewCell") {
                this.$4I_3++;
                this.$6L_3($p0, true);
                if ($p0
                    .className ===
                    "ms-crm-List-MultilineRow" ||
                    $p0
                    .className ===
                    "ms-crm-List-HoveredMultilineRow") this.$23_3($p0, "ms-crm-List-SelectedMultilineRow");
                else if (!this.$0_3.isLiteSubGrid()) {
                    this.$23_3($p0, "ms-crm-List-SelectedRow");
                    var $v_6 = Mscrm.GridControl.getCheckBoxImage($p0);
                    if (!IsNull($v_6)) $v_6.style.visibility = "visible"
                } else if (Mscrm.InternalUtilities.Utilities
                    .isHighContrastEnabled())
                    this.$23_3($p0, "ms-crm-List-SelectedRow-Lite ms-crm-List-SelectedRow-Lite-HighContrast");
                else this.$23_3($p0, "ms-crm-List-SelectedRow-Lite");
                this.$E_3[this.$E_3.length] = $p0;
                !IsNull($p1) && $p1 && this.$28_3();
                this.$0_3.isLiteSubGrid() && Mscrm.GridControlLite.ShowDeleteButton($p0);
                return true
            }
        } else if (this.$0_3.isLiteSubGrid()) {
            if ($v_0 === 1) {
                this.UnselectRecords($p0);
                return true
            }
        } else {
            alert($v_0 === 1
                ? window.LOCID_GRID_TOO_MANY_RECORDS_ONE
                : String.format(window.LOCID_GRID_TOO_MANY_RECORDS, $v_0));
            this.$6L_3($p0, false);
            return false
        }
        return false
    },
    $2h_3: function($p0, $p1, $p2) {
        if (!IsNull($p0) && Mscrm.AppGridDefaultDataControl.$1S($p0)) {
            var $v_0 = this.get_dataTableBody().rows[$p0.sectionRowIndex + 1];
            if (!IsNull($v_0)) $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_0));
            this.$4I_3--;
            if ($p0.className === "ms-crm-List-SelectedMultilineRow") this.$23_3($p0, "ms-crm-List-MultilineRow");
            else if (!this.$0_3.isLiteSubGrid()) this.$23_3($p0, "ms-crm-List-Row");
            else this.$23_3($p0, "ms-crm-List-Row-Lite");
            this.$6L_3($p0, false);
            if (!IsNull($p1) && $p1)
                for (var $v_1 = this.$E_3.length, $v_2 = 0; $v_2 < $v_1; $v_2++)
                    if ($p0.sectionRowIndex === this.$E_3[$v_2].sectionRowIndex) {
                        Array.removeAt(this.$E_3, $v_2);
                        break
                    }
            !IsNull($p2) && $p2 && this.$28_3();
            this.$0_3.isLiteSubGrid() && Mscrm.GridControlLite.HideDeleteButton($p0)
        }
    },
    saveSelectRows: function() {
        this.$3O_3 = [];
        for (var $v_0 = 0; $v_0 < this.$E_3.length; $v_0++) this.$3O_3[$v_0] = this.$E_3[$v_0]
    },
    reselectRows: function() {
        var $v_0 = this.$3O_3.length;
        if ($v_0 > 0) for (var $v_1 = 0; $v_1 < $v_0; $v_1++) this.$3i_3(this.$3O_3[$v_1], false);
        else this.get_numberOfRecords() > 0 && this.$7q_3() && this.SelectRecords(0, 0, true);
        this.$28_3()
    },
    $CK_3: function() { this.SelectRecords(0, this.get_dataTableBody().rows.length - 1, false) },
    $23_3: function($p0, $p1) {
        var $v_0 = this.$5o_3($p0);
        if ($v_0) {
            var $v_1;
            if ($p1 === "ms-crm-List-SelectedRow" || $p1 === "ms-crm-List-SelectedMultilineRow") {
                $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/grid/row_selected.gif"));
                $v_0.alt = window.LOCID_GRID_SELECTED_ROW;
                if (window.LOCID_UI_DIR === "RTL") {
                    Mscrm.Utilities.cancelElementFlipping($v_0);
                    Mscrm.Utilities.flipElementHorizontally($v_0)
                }
            } else {
                $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/r.gif"));
                $v_0.alt = window.LOCID_GRID_UNSELECTED_ROW;
                if (window.LOCID_UI_DIR === "RTL") {
                    Mscrm.Utilities.cancelElementFlipping($v_0);
                    Mscrm.Utilities.flipElementHorizontally($v_0)
                }
            }
            $v_0.src = $v_1.source;
            $v_0.className = Mscrm.ImageStrip.replaceExistingImageStripClass($v_0.className, $v_1.cssClass)
        }
        for (var $$arr_4 = this.$7e_3, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
            var $v_2 = $$arr_4[$$idx_6];
            if (Sys.UI.DomElement.containsCssClass($p0, $v_2)) $p1 = $v_2 + " " + $p1
        }
        $p0.className = $p1
    },
    $3c_3: function($p0) {
        var $v_0;
        if (!IsNull($p0.getAttribute("otype"))) $v_0 = parseInt($p0.getAttribute("otype"));
        else $v_0 = parseInt(this.get_element().getAttribute("oname"));
        return $v_0
    },
    handleContextMenu: function(e) {
        var $v_0 = Mscrm.AppGridDefaultDataControl.$9H(e);
        if (IsNull($v_0)) return;
        this.$15_3 = this.$2b_3(e.target);
        this.$39_3 = document.createElement("DIV");
        this.$39_3.setAttribute("id", "menuContainer");
        document.body.appendChild(this.$39_3);
        this.$1e_3 = Mscrm.Menu.createMenu(this.$39_3);
        this.$1e_3.set_stylePrefix("POPUP");
        this.$1e_3.set_width(170);
        var $v_1 = CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("menuXml").toString()),
            $v_2 = XUI.Xml.LoadXml($v_1).firstChild,
            $v_3 = XUI.Xml.SelectNodes($v_2, "//Menu/MenuItem", null),
            $v_4 = false,
            $v_5 = 0;
        while ($v_5 < $v_3.length) {
            var $v_6 = null;
            $v_6 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText($v_3[$v_5].attributes.getNamedItem("title")));
            var $v_7 = $v_3[$v_5].attributes.getNamedItem("isseparator");
            if (!IsNull($v_7)) $v_6 = Mscrm.MenuItemSeparator.createSeparator(false);
            else {
                $v_6.set_reference($v_3[$v_5].attributes.getNamedItem("typeId").nodeValue);
                $v_4 = $v_3[$v_5].attributes.getNamedItem("disableonemptygrid").nodeValue === "yes" ? true : false;
                $v_6.set_actionCallback(this.$$d_contextMenuItemClickHandler);
                var $v_8 = IsNull(this.$15_3) || IsNull(this.$15_3.getAttribute("oid")),
                    $v_9 = Number.parseInvariant($v_6.get_reference().toString());
                $v_6.set_disabled($v_8 && $v_4 || $v_9 === 2 && !Mscrm.Utilities.isIE())
            }
            this.$1e_3.addItem($v_6);
            $v_5++
        }
        this.$1e_3.set_left(e.clientX);
        this.$1e_3.set_top(e.clientY);
        this.$1e_3.show();
        e.preventDefault();
        e.stopPropagation()
    },
    $BU_3: function() { this.openInNewWindow(this.$15_3) },
    $Br_3: function() { this.$0_3.Refresh() },
    $Cu_3: function() { window.open(window.location.href) },
    $CL_3: function($p0) { this.sendShortcut(true, $p0) },
    $Bf_3: function() { this.printRow(this.$15_3) },
    $8l_3: function($p0) { this.sendShortcut(false, $p0) },
    $BT_3: function() { this.$7S_3(this.$15_3) },
    contextMenuItemClickHandler: function(item) {
        if (!IsNull(item)) {
            var $v_0 = Number.parseInvariant(item.get_reference().toString());
            switch ($v_0) {
            case 1:
                this.$BU_3();
                break;
            case 2:
                this.$8l_3(this.$3c_3(this.$15_3));
                break;
            case 3:
                this.$CL_3(this.$3c_3(this.$15_3));
                break;
            case 6:
                this.$Bf_3();
                break;
            case 7:
                this.$Br_3();
                break;
            case 8:
                this.$Cu_3();
                break;
            case 0:
                this.$BT_3();
                break
            }
        }
    },
    $5o_3: function($p0) {
        var $v_0 = "previewImage_" + $p0.getAttribute("oid"), $v_1 = $get($v_0);
        return $v_1
    },
    $3W_3: function($p0) {
        var $v_0 = this.$5o_3($p0);
        if (!IsNull($p0) && Mscrm.AppGridDefaultDataControl.$7N($p0)) {
            var $v_1;
            if (Mscrm.AppGridDefaultDataControl.$1S($p0)) {
                $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/grid/row_selected.gif"));
                $v_0.setAttribute("alt", window.LOCID_GRID_SELECTED_ROW)
            } else {
                $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/r.gif"));
                $v_0.setAttribute("alt", window.LOCID_GRID_UNSELECTED_ROW);
                window.LOCID_UI_DIR === "RTL" && Mscrm.Utilities.flipElementHorizontally($v_0)
            }
            $v_0.setAttribute("src", $v_1.source);
            $v_0.className = Mscrm.ImageStrip.replaceExistingImageStripClass($v_0.className, $v_1.cssClass);
            this.get_dataTableBody().removeChild(XUI.Html.DomUtils.GetNextSibling($p0));
            $p0.setAttribute("expanded", "false");
            this.$3F_3 = null
        }
    },
    $9B_3: function($p0) {
        if (IsNull($p0)) return;
        if (Mscrm.AppGridDefaultDataControl.$7N($p0)) {
            this.$3W_3($p0);
            return
        } else !IsNull(this.$3F_3) && this.$3W_3(this.$3F_3);
        var $v_0;
        if (!IsNull($p0.getAttribute("otype"))) $v_0 = $p0.getAttribute("otype");
        else $v_0 = this.get_element().getAttribute("oname");
        if (IsNull(this.$1f_3)) this.$1f_3 = new XMLHttpRequest;
        var $v_1 = Mscrm.CrmUri.create("/_grid/preview.aspx");
        $v_1.get_query()["type"] = $v_0;
        $v_1.get_query()["id"] = $p0.getAttribute("oid");
        this.$1f_3.open("GET", $v_1.toString(), false);
        Mscrm.Utilities.setResponseTypeToMSXml(this.$1f_3);
        this.$1f_3.send(null);
        if (Mscrm.XmlUtil.handleXMLErr(this.$1f_3.responseXML, false) !== window.ERROR_NONE) return;
        var $v_2 = this.get_dataTableBody().insertRow($p0.sectionRowIndex + 1);
        $v_2.setAttribute("oid", $p0.getAttribute("oid"));
        !IsNull($p0.getAttribute("otype")) && $v_2.setAttribute("otype", $p0.getAttribute("otype"));
        $v_2.style.height = "100%";
        var $$t_9 = this;
        $addHandler($v_2, "mouseover", function($p1_0) { $p1_0.stopPropagation() });
        var $$t_A = this;
        $addHandler($v_2, "click ", function($p1_0) { $p1_0.stopPropagation() });
        var $v_3 = $v_2.insertCell(0);
        $v_3.className = "ms-crm-List-PreviewCell";
        $v_3.colSpan = $p0.cells.length;
        $v_3.innerHTML = XUI.Xml.GetText(this.$1f_3.responseXML.firstChild.firstChild);
        $p0.setAttribute("expanded", "true");
        $p0.style.paddingTop = "0px";
        var $v_4 = this.$5o_3($p0),
            $v_5 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/d.gif"));
        $v_4.src = $v_5.source;
        $v_4.className = Mscrm.ImageStrip.replaceExistingImageStripClass($v_4.className, $v_5.cssClass);
        $v_4.alt = window.LOCID_GRID_PREVIEW_ROW;
        this.$3F_3 = $p0
    }
};
Mscrm.AppGridFilterContainer = function(element) {
    this.$$d_$CS_3 = Function.createDelegate(this, this.$CS_3);
    this.$$d_refreshGridView = Function.createDelegate(this, this.refreshGridView);
    this.$$d_$CQ_3 = Function.createDelegate(this, this.$CQ_3);
    Mscrm.AppGridFilterContainer.initializeBase(this, [element]);
    this.$f_3 = element.getAttribute("GridId");
    this.$5T_3 = parseInt(element.getAttribute("autorefresh"))
};
Mscrm.AppGridFilterContainer.prototype = {
    $2e_3: null,
    $f_3: null,
    $5T_3: 0,
    initialize: function() {
        this.$2e_3 = $find(this.$f_3);
        this.$5T_3 === 1 && this.$6X_3(this.$$d_$CQ_3)
    },
    $CQ_3: function($p0) {
        var $v_0 = $find($p0.id);
        $v_0.add_onChange(this.$$d_refreshGridView)
    },
    refreshGridView: function(sender, ea) {
        this.$6X_3(this.$$d_$CS_3);
        this.$2e_3.ResetPageNumber();
        this.$2e_3.Refresh()
    },
    $CS_3: function($p0) {
        switch ($p0.className) {
        case "AppGridFilterSelector":
            var $v_0 = $find($p0.id), $v_1 = $v_0.getDataValue();
            if (!IsNull($v_1)) {
                var $$dict_4 = $v_1;
                for (var $$key_5 in $$dict_4) {
                    var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] };
                    this.$2e_3.SetParameter($v_2.key, $v_2.value)
                }
            }
            break;
        default:
            !IsNull($p0.DataValue) && this.$2e_3.SetParameter($p0.id, $p0.DataValue);
            break
        }
    },
    $6X_3: function($p0) {
        var $v_0 = $get(this.$f_3 + "_AppGridFilterSelector");
        !IsNull($v_0) && $p0($v_0)
    }
};
Mscrm.AppGridFilterSelector = function(element) {
    this.$$d_$A6_3 = Function.createDelegate(this, this.$A6_3);
    Mscrm.AppGridFilterSelector.initializeBase(this, [element]);
    this.$f_3 = element.getAttribute("GridId")
};
Mscrm.AppGridFilterSelector.prototype = {
    add_onChange: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_onChange: function(value) { this.get_events().removeHandler("OnChange", value) },
    $2a_3: null,
    $2i_3: null,
    $f_3: null,
    initialize: function() {
        var $v_0 = $get(this.$f_3 + "_FilterControl");
        if (!IsNull($v_0)) {
            this.$2a_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
            $addHandler(this.$2a_3, "change", this.$$d_$A6_3)
        }
        this.$2i_3 = $get(this.$f_3 + "_ViewControl");
        !IsNull(this.$2i_3) && $addHandler(this.$2i_3, "change", this.$$d_$A6_3)
    },
    getDataValue: function() {
        var $v_0 = {}, $v_1 = false;
        if (!IsNull(this.$2a_3)) {
            var $v_2 = this.$2a_3.id.replace(this.$f_3 + "_", "");
            $v_0[$v_2] = this.$2a_3.value;
            $v_1 = true
        }
        if (!IsNull(this.$2i_3)) {
            var $v_3 = this.$2i_3, $v_4 = $v_3.options;
            if ($v_4.length > 0) {
                $v_0["queryapi"] = $v_4[$v_3.selectedIndex].getAttribute("queryapi");
                $v_1 = true
            }
        }
        if ($v_1) return $v_0;
        else return null
    },
    $A6_3: function($p0) { this.fireControlEvent("OnChange", Sys.EventArgs.Empty) }
};
Mscrm.AppGridJumpBar = function(element) {
    this.$$d_$8y_3 = Function.createDelegate(this, this.$8y_3);
    this.$$d_$C0_3 = Function.createDelegate(this, this.$C0_3);
    this.$$d_$8L_3 = Function.createDelegate(this, this.$8L_3);
    this.$$d_$6i_3 = Function.createDelegate(this, this.$6i_3);
    Mscrm.AppGridJumpBar.initializeBase(this, [element]);
    this.$4A_3 = element
};
Mscrm.AppGridJumpBar.prototype = {
    $c_3: null,
    $4A_3: null,
    Reset: function() {
        !IsNull(this.$c_3) && this.$2B_3(this.$c_3, false);
        this.$c_3 = this.$4A_3.rows[0].cells[0];
        this.$2B_3(this.$c_3, true)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        for (var $v_0 = this.$4A_3.rows[0]
                     .cells,
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) if ($v_0[$v_1].className.indexOf("ms-crm-List-DefaultIndex") >= 0) this.$c_3 = $v_0[$v_1];
        !IsNull(this.$c_3) && this.$2B_3(this.$c_3, true);
        this.$8X_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$8x_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $2B_3: function($p0, $p1) {
        if ($p1) {
            if ($p0.className
                .indexOf(" ms-crm-List-SelectedIndex") ===
                -1) $p0.className += " ms-crm-List-SelectedIndex"
        } else $p0.className = $p0.className.replace(" ms-crm-List-SelectedIndex", "")
    },
    $8X_3: function() {
        $addHandler(this.get_element(), "click", this.$$d_$6i_3);
        $addHandler(this.get_element(), "mouseover", this.$$d_$8L_3);
        $addHandler(this.get_element(), "mouseout", this.$$d_$C0_3);
        $addHandler(this.get_element(), "keypress", this.$$d_$8y_3)
    },
    $8x_3: function() {
        $removeHandler(this.get_element(), "click", this.$$d_$6i_3);
        $removeHandler(this.get_element(), "mouseover", this.$$d_$8L_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$C0_3);
        $removeHandler(this.get_element(), "keypress", this.$$d_$8y_3)
    },
    $8L_3: function($p0) {
        $p0.target.tagName.toLowerCase() === "td" && $p0.target !== this.$c_3 && this.$2B_3($p0.target, true)
    },
    $C0_3: function($p0) {
        $p0.target.tagName.toLowerCase() === "td" && $p0.target !== this.$c_3 && this.$2B_3($p0.target, false)
    },
    $8y_3: function($p0) { $p0.charCode === 13 && this.$6i_3($p0) },
    $6i_3: function($p0) {
        var $v_0 = $p0.target;
        if ($v_0.tagName.toLowerCase() === "td") {
            var $v_1 = Mscrm.GridControl.findComponent(this.get_element().getAttribute("gridId"));
            if ($v_1.GetParameter("ispreviewmode") === "1" || $v_1.GetParameter("InnerGridDisabled") === "1") return;
            this.$2B_3(this.$c_3, false);
            this.$2B_3($v_0, true);
            this.$c_3 = $v_0;
            var $v_2 = this.$c_3.cellIndex;
            $v_1.SetParameter("filter", !$v_2 ? "" : this.$c_3.getAttribute("filter"));
            $v_1.SetParameter("filterDisplay", !$v_2 ? "" : XUI.Html.GetText(this.$c_3));
            $v_1.ClearPagingCookie();
            $v_1.set_pageNumber(1)
        }
    }
};
Mscrm.ColumnResizeControl = function(element) {
    this.$$d_$C9_3 = Function.createDelegate(this, this.$C9_3);
    this.$$d_$C8_3 = Function.createDelegate(this, this.$C8_3);
    this.$$d_$8Z_3 = Function.createDelegate(this, this.$8Z_3);
    this.$$d_$CA_3 = Function.createDelegate(this, this.$CA_3);
    Mscrm.ColumnResizeControl.initializeBase(this, [element])
};
Mscrm.ColumnResizeControl.prototype = {
    $3r_3: null,
    CrmGrid: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        $addHandler(this.get_element(), "mousedown", this.$$d_$CA_3);
        $addHandler(this.get_element(), "dblclick", this.$$d_$8Z_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mousedown", this.$$d_$CA_3);
        $removeHandler(this.get_element(), "dblclick", this.$$d_$8Z_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_$4i_3: function() {
        if (IsNull(this.$3r_3)) this.$3r_3 = Mscrm.GridControl.findComponent(this.CrmGrid);
        return this.$3r_3
    },
    $CA_3: function($p0) {
        $p0.preventDefault();
        $addHandler(window.document, "mousemove", this.$$d_$C8_3);
        $addHandler(window.document, "mouseup", this.$$d_$C9_3);
        this.get_$4i_3().HandleResizeStartup($p0)
    },
    $C9_3: function($p0) {
        $p0.preventDefault();
        $removeHandler(window.document, "mousemove", this.$$d_$C8_3);
        $removeHandler(window.document, "mouseup", this.$$d_$C9_3);
        this.get_$4i_3().HandleResizeCleanup($p0)
    },
    $C8_3: function($p0) {
        $p0.preventDefault();
        this.get_$4i_3().HandleResize($p0, this)
    },
    $8Z_3: function($p0) { this.get_$4i_3().HandleAutoResize($p0, this) }
};
Mscrm.GridControl = function(element) {
    this.$$d_$BY_3 = Function.createDelegate(this, this.$BY_3);
    this.$$d_prepareEnablePresence = Function.createDelegate(this, this.prepareEnablePresence);
    this.$$d_initAppGridPresence = Function.createDelegate(this, this.initAppGridPresence);
    this.$$d_$Bb_3 = Function.createDelegate(this, this.$Bb_3);
    this.$$d_$Ba_3 = Function.createDelegate(this, this.$Ba_3);
    this.$$d_$BZ_3 = Function.createDelegate(this, this.$BZ_3);
    this.$$d_$Bc_3 = Function.createDelegate(this, this.$Bc_3);
    this.$$d_$Bd_3 = Function.createDelegate(this, this.$Bd_3);
    this.$$d_$BJ_3 = Function.createDelegate(this, this.$BJ_3);
    this.$$d_$6l_3 = Function.createDelegate(this, this.$6l_3);
    this.$$d_HandleGridResize = Function.createDelegate(this, this.HandleGridResize);
    this.$$d_$BI_3 = Function.createDelegate(this, this.$BI_3);
    this.$$d_$BO_3 = Function.createDelegate(this, this.$BO_3);
    this.$$d_$BM_3 = Function.createDelegate(this, this.$BM_3);
    this.$$d_$85_3 = Function.createDelegate(this, this.$85_3);
    this.$$d_$Cp_3 = Function.createDelegate(this, this.$Cp_3);
    this.$$d_$A8_3 = Function.createDelegate(this, this.$A8_3);
    this.$$d_$A9_3 = Function.createDelegate(this, this.$A9_3);
    this.$$d_$5s_3 = Function.createDelegate(this, this.$5s_3);
    this.$$d_$5w_3 = Function.createDelegate(this, this.$5w_3);
    this.$$d_$7E_3 = Function.createDelegate(this, this.$7E_3);
    this.$$d_$AZ_3 = Function.createDelegate(this, this.$AZ_3);
    this.$$d_$Aa_3 = Function.createDelegate(this, this.$Aa_3);
    this.$$d_$4k_3 = Function.createDelegate(this, this.$4k_3);
    this.$$d_$9F_3 = Function.createDelegate(this, this.$9F_3);
    this.$$d_$9G_3 = Function.createDelegate(this, this.$9G_3);
    this.$$d_$9E_3 = Function.createDelegate(this, this.$9E_3);
    this.$$d_$Bu_3 = Function.createDelegate(this, this.$Bu_3);
    this.$$d_$Bv_3 = Function.createDelegate(this, this.$Bv_3);
    this.$$d_$Bt_3 = Function.createDelegate(this, this.$Bt_3);
    this.$$d_$9J_3 = Function.createDelegate(this, this.$9J_3);
    this.$$d_$BB_3 = Function.createDelegate(this, this.$BB_3);
    this.$$d_$Be_3 = Function.createDelegate(this, this.$Be_3);
    this.$$d_$7g_3 = Function.createDelegate(this, this.$7g_3);
    this.$$d_$Bm_3 = Function.createDelegate(this, this.$Bm_3);
    this.$$d_onRefreshComplete = Function.createDelegate(this, this.onRefreshComplete);
    this.$$d_handleAutoExpandRows = Function.createDelegate(this, this.handleAutoExpandRows);
    this.$$d_$A5_3 = Function.createDelegate(this, this.$A5_3);
    this.$$d_$5z_3 = Function.createDelegate(this, this.$5z_3);
    this.$$d_$B3_3 = Function.createDelegate(this, this.$B3_3);
    this.$$d_$C7_3 = Function.createDelegate(this, this.$C7_3);
    this.$U_3 = new Array(0);
    this.$2R_3 = new Array(0);
    this.$2M_3 = new Array(0);
    this.$a_3 = null;
    this.$1J_3 = null;
    this.$1T_3 = new Mscrm.MetricsStopwatch("SubGrid");
    this.$1L_3 = null;
    this
        .$37_3 =
        "<TABLE class='ms-crm-List-Message' morerecords='0'><TR><TD ID='GridLoadingMessage'><IMG alt='' src='" +
        window.CDNURL +
        "/_imgs/advfind/progress.gif'><br>{0}</TD></TR></TABLE>";
    this.$44_3 = null;
    this.$2N_3 = Mscrm.GridControl.gridTypeNone;
    this.$2T_3 = -1;
    this.getRecordsFromInnerGrid = this.GetRecordsFromInnerGrid;
    this.refresh = this.Refresh;
    this.getProperty = this.GetProperty;
    this.exportToExcel = this.ExportToExcel;
    Mscrm.GridControl.initializeBase(this, [element]);
    this.$Az_3();
    this.$2G_3 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
};
Mscrm.GridControl.get_$77 = function() {
    var $v_0 = window.self.gridViewTimestamps;
    if (IsNull($v_0)) {
        $v_0 = {};
        window.self.gridViewTimestamps = $v_0
    }
    return $v_0
};
Mscrm.GridControl.getExpanderClassName = function(expanderContainer) {
    if (expanderContainer) return XUI.Html.DomUtils.GetFirstChild(expanderContainer).className;
    else return null
};
Mscrm.GridControl.$6g = function($p0) { $p0.rawEvent.returnValue = false };
Mscrm.GridControl.findComponent = function(gridId) {
    var $v_0 = $find(gridId);
    if (!IsNull($v_0) && Mscrm.GridControl.isInstanceOfType($v_0)) return $v_0;
    return null
};
Mscrm.GridControl.getControlBehaviorFromChildElement = function(childElement) {
    var $v_0 = childElement;
    while (!IsNull($v_0) && Mscrm.GridControl.$Ap($v_0)) $v_0 = $v_0.parentNode;
    if (IsNull($v_0)) return null;
    var $v_1 = 12, $v_2 = $v_0.id.toString().substring(0, $v_0.id.toString().length - $v_1);
    return $find($v_2)
};
Mscrm.GridControl.$Ap = function($p0) {
    return IsNull($p0) || isNullOrEmptyString($p0.id) || !$p0.id.toString().endsWith("_divDataArea")
};
Mscrm.GridControl.getCheckBoxImage = function(rowElement) {
    if (Mscrm.Utilities.isMobileRefresh()) return null;
    var $v_0 = -1, $v_1 = rowElement.getAttribute("rowindex");
    if (!IsNull($v_1) && $v_1 !== -1) $v_0 = $v_1;
    else $v_0 = rowElement.sectionRowIndex;
    var $v_2 = "gridBodyTable_checkBox_Image_" + rowElement.getAttribute("oid") + "_" + $v_0,
        $v_3 = rowElement.ownerDocument.getElementById($v_2);
    return $v_3
};
Mscrm.GridControl.mouseOver = function(rowElement) {
    var $v_0 = 2;
    if (window.UseTabletExperience || window.dialogType === $v_0) return;
    var $v_1 = Mscrm.GridControl.getCheckBoxImage(rowElement);
    if (!IsNull($v_1)) $v_1.style.visibility = "visible"
};
Mscrm.GridControl.mouseOut = function(rowElement) {
    if (window.UseTabletExperience) return;
    var $v_0 = Mscrm.GridControl.getCheckBoxImage(rowElement);
    if (!isNullOrEmptyString(rowElement.getAttribute("selected")) &&
        rowElement.getAttribute("selected").toUpperCase() === "TRUE") return;
    if (!IsNull($v_0)) $v_0.style.visibility = "hidden"
};
Mscrm.GridControl.loadGridView = function(containerId, gridId, url, oId, isSubGridLite) {
    if (isSubGridLite) {
        url = Mscrm.GridControl.$A0(containerId, url);
        var $v_1 = $get(containerId);
        !IsNull($v_1) && $v_1.setAttribute("URL", url)
    }
    var $v_0 = new XMLHttpRequest;
    $v_0.onreadystatechange = function() {
        if ($v_0.readyState === 4) {
            $v_0.onreadystatechange = null;
            if ($v_0.status === 200)
                if (Mscrm.Utilities
                    .isIE11StandardOrIE11CompatibleMode())
                    window.setTimeout(function() {
                            Mscrm.GridControl.$6h($v_0.responseXML, containerId, gridId, oId, isSubGridLite)
                        },
                        0);
                else Mscrm.GridControl.$6h($v_0.responseXML, containerId, gridId, oId, isSubGridLite);
            else if (!(!$v_0.status && window.UseTabletExperience));
        }
    };
    $v_0.open("GET", url, true);
    Mscrm.Utilities.setResponseTypeToMSXml($v_0);
    Mscrm.MetricsReporting.instance().addXMLHttpRequestHeaders($v_0);
    $v_0.send(null)
};
Mscrm.GridControl.$6h = function($p0, $p1, $p2, $p3, $p4) {
    executeFunctionDeferred(function() { Mscrm.GridControl.$7K($p0, $p1, $p2, $p3, $p4) }, false, false)
};
Mscrm.GridControl.$A0 = function($p0, $p1) {
    if (isNullOrEmptyString($p0)) return $p1;
    $p0 = $p0.replace("_crmGridTD", "_span");
    var $v_0 = $get($p0);
    if (IsNull($v_0)) return $p1;
    var $v_1 = IsNull($v_0.getAttribute("TabIndexValue")) ? "" : $v_0.getAttribute("TabIndexValue").toString();
    return Mscrm.GridControl.getUpdatedUrl($p1, "tabIndex", $v_1)
};
Mscrm.GridControl.getUpdatedUrl = function(url, propertyName, propertyValue) {
    var $v_0 = Mscrm.CrmUri.create(url);
    if (isNullOrEmptyString(propertyValue) || $v_0.get_query()[propertyName].toString() === propertyValue) return url;
    else {
        $v_0.get_query()[propertyName] = propertyValue;
        return $v_0.toString()
    }
};
Mscrm.GridControl.$7K = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = $get($p1);
    if (IsNull($v_0)) {
        window.setTimeout(function() { Mscrm.GridControl.$7K($p0, $p1, $p2, $p3, $p4) }, 10);
        return
    }
    var $v_1 = new Mscrm.Performance.PerformanceStopwatch("InsertGridView " + $p2);
    $v_1.start();
    var $v_2 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "//gridXml/gridHtml", null));
    Mscrm.Utilities.assignInnerHtml($v_0, $v_2);
    var $v_3 = $get($p2);
    !IsNull($p3) && $p3 !== "" && Mscrm.GridControl.setElementParameter($v_3, "oId", $p3);
    var $v_4 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "//gridXml/gridHeader", null));
    $v_4 += XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "//gridXml/gridInitFunctionName", null)) + "();";
    var $v_5 = new Function($v_4);
    $v_5.apply(window);
    Mscrm.GridControl.$By($v_3);
    $v_1.stop()
};
Mscrm.GridControl.$By = function($p0) {
    if (IsNull($p0) || !Mscrm.InternalUtilities.Utilities.isRefreshForm()) return;
    var $v_0 = $find($p0.id), $v_1 = new Mscrm.InlineSubGridControlView($v_0);
    $v_1.setLabelNodeDisplay();
    var $v_2 = Xrm.Page.ui;
    if (IsNull($v_2.controls)) $v_2.controls = new Xrm.XrmControls;
    if (Mscrm.Utilities.isTurboForm()) $v_2.controls.add($v_1);
    else $v_2.addControl($v_1);
    Mscrm.InlineEditInitializerUtility.associateControlWithParentSection($p0, $v_1)
};
Mscrm.GridControl.setElementParameter = function(element, name, value) {
    var $v_0 = $get("divGridParams", element);
    if (!IsNull($v_0)) {
        var $v_1 = $get(name, $v_0);
        if (IsNull($v_1)) {
            $v_1 = $v_0.ownerDocument.createElement("div");
            $v_1.id = name;
            $v_0.appendChild($v_1)
        }
        $v_1.setAttribute("value", value)
    }
};
Mscrm.GridControl.$5p = function($p0) {
    for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) $v_0[$v_1] = $p0[$v_1][0];
    return $v_0
};
Mscrm.GridControl.$5W = function($p0, $p1) {
    for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1], $v_3 = new Mscrm.EntityReference;
        $v_3.Id = $v_2[0];
        $v_3.TypeCode = parseInt($v_2[1], 10);
        var $v_4 = $v_2[3];
        $v_3.TypeName = $v_4.getAttribute("otypename");
        $v_3.Name = XUI.Html.GetText($v_4.children[$p1]);
        $v_0[$v_1] = $v_3
    }
    return $v_0
};
Mscrm.GridControl.isBrowserIE8OrLower = function() {
    return Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version <= 8
};
Mscrm.GridControl.prototype = {
    add_onSelectionChange: function(value) { this.get_events().addHandler("OnSelectionChange", value) },
    remove_onSelectionChange: function(value) { this.get_events().removeHandler("OnSelectionChange", value) },
    add_onBeforeFormLoad: function(value) { this.get_events().addHandler("OnBeforeFormLoad", value) },
    remove_onBeforeFormLoad: function(value) { this.get_events().removeHandler("OnBeforeFormLoad", value) },
    add_onReset: function(value) { this.get_events().addHandler("OnReset", value) },
    remove_onReset: function(value) { this.get_events().removeHandler("OnReset", value) },
    add_onResetComplete: function(value) { this.get_events().addHandler("OnResetComplete", value) },
    remove_onResetComplete: function(value) { this.get_events().removeHandler("OnResetComplete", value) },
    $2F_3: null,
    $2w_3: null,
    $4D_3: false,
    get_isLastControl: function() { return this.$33_3 },
    RefreshAppGrid: function() { this.Reset(null) },
    Reset: function(funOnResetComplete) {
        this.fireControlEvent("OnReset", Sys.EventArgs.Empty);
        if (!IsNull(Mscrm
                .PageManager) &&
            !IsNull(Mscrm.PageManager.get_instance()) &&
            Mscrm.PageManager.isFlatUIPage()) {
            var $v_0 = {};
            $v_0["viewid"] = this.GetParameter("viewid");
            $v_0["viewtype"] = this.GetParameter("viewtype");
            this.raiseEvent(26, $v_0)
        }
        if (!IsNull(Mscrm.IFilterSet)) {
            var $v_1 = $find(this.get_id() + "_filterSet");
            if (!IsNull($v_1)) {
                var $v_2 = this.$4e_3(), $v_3 = $get("fetchXml", $v_2);
                !IsNull($v_3) && $v_2.removeChild($v_3)
            }
        }
        if (!IsNull(Mscrm.IFilterSet)) {
            var $v_4 = $find(this.get_id() + "_filterSet");
            !IsNull($v_4) && $v_4.DisposeFilterMenu()
        }
        this.$5Y_3();
        this.ShowLoadingMessage();
        if (!IsNull(funOnResetComplete)) {
            this.$2w_3 = funOnResetComplete;
            window.setTimeout(this.$$d_$C7_3, 1);
            return true
        } else {
            this.$2w_3 = null;
            return this.$7l_3()
        }
    },
    $C7_3: function() { this.$7l_3() },
    $7l_3: function() {
        if (!this.$2F_3) this.$2F_3 = new Mscrm.RemoteCommandXml("AppGridWebService", "Reset");
        this.$2F_3.setContent(this.$8b_3());
        this.$2F_3.setParameter("id", this.get_id());
        var $v_0 = this.$2F_3.execute();
        return this.resetComplete($v_0)
    },
    setImageUrl: function(gridBodyTable) {
        if (!IsNull(gridBodyTable)) {
            for (var $v_0 = gridBodyTable.getElementsByTagName("td"),
                $v_1 = {},
                $v_2 = new Sys.StringBuilder,
                $v_3 = [],
                $v_4 = 0;
                $v_4 < $v_0.length;
                $v_4++)
                if (!IsNull($v_0[$v_4].getAttribute("imageproviderwebresource")) &&
                    !IsNull($v_0[$v_4].getAttribute("imageproviderfunctionname"))) {
                    var $v_5 = $v_0[$v_4].getAttribute("RowID").toString() +
                            "_" +
                            $v_0[$v_4].getAttribute("ColName").toString() +
                            "_" +
                            $v_0[$v_4].getAttribute("RowData").toString(),
                        $v_6 = $v_0[$v_4].getAttribute("ColName").toString();
                    if (!($v_6 in $v_1)) $v_1[$v_6] = $v_6;
                    var $v_7 = window.top.GRID_WITH_IMAGE_CACHE;
                    if (!IsNull($v_7) && $v_5 in $v_7) {
                        var $v_8 = $v_7[$v_5], $v_9 = $v_0[$v_4].getElementsByTagName("img")[0];
                        !isNullOrEmptyString($v_8[0].toString()) && $v_9.setAttribute("src", $v_8[0].toString());
                        !isNullOrEmptyString($v_8[1].toString()) && $v_9.setAttribute("title", $v_8[1].toString());
                        $v_9.setAttribute("width", "16px");
                        $v_9.setAttribute("height", "16px");
                        $v_9.setAttribute("tabindex", 0)
                    } else {
                        $v_3[0] = $v_0[$v_4].getAttribute("RowData").toString();
                        $v_3[1] = parseInt($v_0[$v_4].getAttribute("LCID").toString());
                        this.insertimageURL($v_0[$v_4].getElementsByTagName("img")[0],
                            $v_0[$v_4].getAttribute("imageproviderwebresource").toString(),
                            $v_0[$v_4].getAttribute("imageproviderfunctionname").toString(),
                            $v_3,
                            $v_5)
                    }
                }
            var $$dict_C = $v_1;
            for (var $$key_D in $$dict_C) {
                var $v_A = { key: $$key_D, value: $$dict_C[$$key_D] };
                if ($v_2.toString() === "") $v_2.append($v_A.value.toString());
                else $v_2.append("," + $v_A.value.toString())
            }
            window.top.GRID_COLUMN_WITH_IMAGES = $v_2.toString()
        }
    },
    insertimageURL: function(element, imageProviderWebResource, imageProviderFunctionname, imageProviderData, key) {
        var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Array, Mscrm.ErrorInformation), $$t_A = this, $$t_B = this;
        $v_0.then(function($p1_0) {
                if (!isNullOrEmptyString($p1_0[0].toString())) {
                    if ($p1_0[0].toString().startsWith("/_imgs")) $p1_0[0] = $p1_0[0].toString();
                    else
                        $p1_0[0] = Mscrm.CrmUri.create(String.format("$webresource:{0}", $p1_0[0].toString()))
                            .toString();
                    var $v_1 = window.top.GRID_WITH_IMAGE_CACHE;
                    if (!IsNull($v_1)) {
                        $v_1[key] = $p1_0;
                        window.top.GRID_WITH_IMAGE_CACHE = $v_1
                    } else {
                        var $v_2 = {};
                        $v_2[key] = $p1_0;
                        window.top.GRID_WITH_IMAGE_CACHE = $v_2
                    }
                    element.setAttribute("src", $p1_0[0].toString());
                    element.setAttribute("width", "16px");
                    element.setAttribute("height", "16px");
                    element.setAttribute("tabindex", 0)
                }
                !isNullOrEmptyString($p1_0[1].toString()) && element.setAttribute("title", $p1_0[1].toString())
            },
            function($p1_0) { $v_0.reject($p1_0) });
        element.attributes.getNamedItem("src") &&
            this.getImageURL(imageProviderWebResource, imageProviderFunctionname, imageProviderData, $v_0)
    },
    getImageURL: function(imageProviderWebResource, imageProviderFunctionname, imageProviderData, deferred) {
        var $v_0 = [],
            $v_1 = Mscrm.Utilities
                .executeJavascriptFunction(imageProviderFunctionname,
                    imageProviderWebResource,
                    imageProviderData,
                    this.$$d_$B3_3);
        if ($v_1 && Object.getType($v_1) === Array) {
            $v_0 = $v_1;
            if ($v_0.length > 0 && $v_0[0] && Object.getType($v_0[0]) === String)
                if ($v_0.length === 2) $v_0[1] && Object.getType($v_0[1]) === String && deferred.resolve($v_0);
                else deferred.resolve($v_0)
        }
    },
    $B3_3: function($p0) { Xrm.Internal.trace.logT(Mscrm.AppGridDefaultDataControl, $p0) },
    resetComplete: function(resultCommand) {
        if (resultCommand.get_success() && !isNullOrEmptyString(resultCommand.get_returnValue())) {
            var $v_0 = XUI.Xml.LoadXml(resultCommand.get_returnValue()),
                $v_1 = $get(this.get_id() + "_gridBodyContainer");
            $v_1.removeChild(XUI.Html.DomUtils.GetFirstChild($v_1));
            if (window.IS_GRID_WITH_IMAGE) {
                var $v_3 = document.createElement("div");
                $v_3.innerHTML = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null));
                var $v_4 = $get("gridBodyTable", $v_3);
                this.setImageUrl($v_4);
                $v_1.innerHTML = $v_3.innerHTML
            } else $v_1.innerHTML = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null));
            this.$5O_3();
            var $v_2 = XUI.Xml.SelectNodes($v_0, "gridXml/viewParameters/div", null);
            if ($v_2)
                for (var $v_5 = 0;
                    $v_5 < $v_2.length;
                    $v_5++
                ) this.SetParameter($v_2[$v_5].attributes.getNamedItem("id").nodeValue, XUI.Xml.GetText($v_2[$v_5]));
            $v_2 = XUI.Xml.SelectNodes($v_0, "gridXml/gridProperties/div", null);
            if ($v_2)
                for (var $v_6 = 0;
                    $v_6 < $v_2.length;
                    $v_6++
                ) this.SetProperty($v_2[$v_6].attributes.getNamedItem("id").nodeValue, XUI.Xml.GetText($v_2[$v_6]));
            this.$Ag_3();
            this.$5z_3(null, null);
            this.InitPresence();
            eval(this.GetProperty("initStatements"));
            if (!IsNull(Mscrm.IFilterSet)) {
                var $v_7 = $find(this.get_id() + "_filterSet");
                if (!IsNull($v_7)) {
                    $v_7.handleGridReset();
                    for (var $v_8 = this.$9p_3(), $v_9 = $v_8[0].length, $v_A = 0; $v_A < $v_9; $v_A++) {
                        var $v_B = $v_8[1][$v_A], $v_C = $v_8[0][$v_A];
                        if ($v_B === "string") $create(Mscrm.StringFilterPopup, {}, null, null, $v_C);
                        else if ($v_B === "number") $create(Mscrm.NumberFilterPopup, {}, null, null, $v_C);
                        else if ($v_B === "datetime") $create(Mscrm.DateTimeFilterPopup, {}, null, null, $v_C);
                        else if ($v_B === "picklist") $create(Mscrm.PicklistFilterPopup, {}, null, null, $v_C);
                        else $v_B === "lookup" && $create(Mscrm.LookupFilterPopup, {}, null, null, $v_C);
                        $v_7.registerFilterPopup($v_8[0][$v_A].id, $v_B, "reset")
                    }
                    if ($v_7.isFilterEnabled())
                        if ($v_7.canEnableFilters()) $v_7.enableFilters();
                        else $v_7.markFiltersAsDisabled()
                }
            }
        }
        !IsNull(this.$2w_3) && this.$2w_3(resultCommand, resultCommand.get_remoteCommandXml());
        this.fireControlEvent("OnResetComplete", Sys.EventArgs.Empty);
        if (!IsNull(Mscrm
                .PageManager) &&
            !IsNull(Mscrm.PageManager.get_instance()) &&
            Mscrm.PageManager.isFlatUIPage()) {
            var $v_D = {};
            $v_D["viewid"] = this.GetParameter("viewid");
            $v_D["viewtype"] = this.GetParameter("viewtype");
            this.raiseEvent(28, $v_D)
        }
        this.finishShowLoadingMessage();
        return resultCommand.get_success()
    },
    $9p_3: function() {
        var $v_0 = [[], []], $v_1 = $get(this.get_id() + "_gridBar");
        if (!IsNull($v_1))
            for (var $v_2 = "LI",
                $v_3 = "ms-crm-FilterPopupMenu",
                $v_4 = $v_1.getElementsByTagName($v_2),
                $v_5 = 0,
                $v_6 = $v_4.length;
                $v_5 < $v_6;
                $v_5++)
                if ($v_4[$v_5].className === $v_3)
                    if (!IsNull($v_4[$v_5].getAttribute("filtermenutype"))) {
                        $v_0[0].push($v_4[$v_5]);
                        $v_0[1].push($v_4[$v_5].getAttribute("filtermenutype"))
                    }
        return $v_0
    },
    Print: function() {
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"), true);
        Mscrm.GridRibbonActions.print(this)
    },
    ExportToExcel: function() {
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"), true);
        Mscrm.GridRibbonActions.exportToExcel(this, this.get_entityTypeCode())
    },
    RunReport: function(instance, name, reportType, helpId) {
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"), true);
        Mscrm.GridRibbonActions.runReportFromAppGrid(this, this.get_selectedIds(), instance, name, reportType, helpId)
    },
    $5z_3: function($p0, $p1) {
        this.remove_onRefresh(this.$$d_$5z_3);
        this.add_onRefresh(this.$$d_$5z_3);
        this.get_$62_3() && this.get_entityTypeCode() === 9100 && this.$Ai_3();
        var $v_0 = $get(this.get_id() + "_divDataArea");
        if ($v_0.getAttribute("Expandable") === "1" &&
            this.get_element().parentNode.className !== "ms-crm-Category-List") {
            this.remove_onRefresh(this.$$d_$A5_3);
            this.add_onRefresh(this.$$d_$A5_3);
            this.$4D_3 && $removeHandler(window, "resize", this.$$d_handleAutoExpandRows);
            $addHandler(window, "resize", this.$$d_handleAutoExpandRows);
            if (Mscrm.GridControl.isBrowserIE8OrLower() && this.isLiteSubGrid()) {
                this.$4D_3 && $removeHandler(document.body, "resize", this.$$d_handleAutoExpandRows);
                $addHandler(document.body, "resize", this.$$d_handleAutoExpandRows)
            }
            this.$4D_3 = true;
            this.isLiteSubGrid() && this.$4g_3();
            if (IsNull(this.$a_3)) this.$a_3 = this.isAutoSubGrid();
            this.$a_3 && !this.isLiteSubGrid() && this.$4g_3();
            this.handleAutoExpandRows(null)
        }
        if (Mscrm.Utilities.isIosDevice())
            if (!IsNull($v_0)) {
                $v_0.style.overflow = "hidden";
                var $$t_3 = this;
                window.setTimeout(function() { $v_0.style.overflow = "auto" }, 0)
            }
    },
    $Ai_3: function() {
        this.remove_onBeforeFormLoad(Mscrm.ReportUtil.handleReportDoubleClick);
        this.add_onBeforeFormLoad(Mscrm.ReportUtil.handleReportDoubleClick)
    },
    SetDivGridParameter: function(parametersDiv, name, value) {
        if (!IsNull(parametersDiv) && !IsNull(name) && !IsNull(value)) {
            var $v_0 = $get(name, parametersDiv);
            !IsNull($v_0) && $v_0.setAttribute("value", value)
        }
    },
    $M_3: null,
    $18_3: 0,
    $3x_3: null,
    $T_3: null,
    $1i_3: 0,
    $h_3: null,
    $2x_3: 0,
    $2K_3: 0,
    $33_3: false,
    $5I_3: false,
    $5M_3: 0,
    $2o_3: 0,
    $5C_3: 0,
    $2n_3: 0,
    $5E_3: 0,
    $5D_3: 0,
    get_$62_3: function() { return window.location.href.toLowerCase().indexOf("/dashboards/dashboard.aspx") !== -1 },
    get_AutoSubGrid: function() { return this.$a_3 },
    set_AutoSubGrid: function(value) {
        this.$a_3 = value;
        return value
    },
    GetGridSpan: function() {
        var $v_0 = this.get_id() + "_span", $v_1 = this.get_element().parentNode;
        while (!IsNull($v_1) && $v_1.id !== $v_0) $v_1 = $v_1.parentNode;
        return $v_1
    },
    $5n_3: function($p0, $p1) {
        var $v_0 = null, $v_1 = $p1;
        if (IsNull($v_1)) {
            if (IsNull(this.$h_3)) this.$h_3 = this.GetGridSpan();
            $v_1 = this.$h_3
        }
        if (!IsNull($v_1)) {
            $v_0 = $v_1.parentNode;
            while (!IsNull($v_0) && $v_0.tagName !== $p0) $v_0 = $v_0.parentNode
        }
        return $v_0
    },
    getGridTDElement: function() { return this.$5n_3("TD", null) },
    $9i_3: function() { return this.$5n_3("TR", null) },
    getGridColumnPosition: function() {
        var $v_0 = 0;
        if (this.$M_3) {
            var $v_1 = XUI.Html.DomUtils.GetPrevSibling(this.$M_3);
            while ($v_1) {
                $v_0 += $v_1.colSpan;
                $v_1 = XUI.Html.DomUtils.GetPrevSibling($v_1)
            }
        }
        return $v_0
    },
    getGridRowPosition: function() {
        var $v_0 = 0;
        if (this.$3x_3) {
            var $v_1 = this.$3x_3;
            while (XUI.Html.DomUtils.GetPrevSibling($v_1)) {
                $v_0++;
                $v_1 = XUI.Html.DomUtils.GetPrevSibling($v_1)
            }
        }
        return $v_0
    },
    getGridParentTable: function() { return this.$5n_3("TABLE", null) },
    findFirstEmptyCellColInTableRow: function(rowNumber) {
        for (var $v_0 = 0; $v_0 < 8; $v_0++) if (this.$U_3[rowNumber][$v_0] === "-1") return $v_0;
        return 0
    },
    $9h_3: function() {
        if (this.$U_3.length) return;
        this.$T_3 = this.getGridParentTable();
        if (this.$T_3) {
            if (!this.$T_3.rows[0].offsetHeight) return;
            var $v_0;
            this.$1i_3 = this.$T_3.rows.length;
            for (var $v_1 = 0; $v_1 < this.$1i_3; $v_1++) {
                this.$2R_3[$v_1] = [null, null, null, null, null, null, null, null];
                this.$U_3[$v_1] = ["-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"]
            }
            for (var $v_2 = 0; $v_2 < this.$1i_3; $v_2++) {
                $v_0 = this.$T_3.rows[$v_2];
                for (var $v_3 = $v_0.offsetHeight,
                    $v_4,
                    $v_5 = this.findFirstEmptyCellColInTableRow($v_2),
                    $v_6,
                    $v_7,
                    $v_8,
                    $v_9 = 0;
                    $v_9 < $v_0.cells.length;
                    $v_9++) {
                    $v_6 = $v_0.cells[$v_9];
                    $v_7 = this.isHiddenCell($v_6);
                    while (this.$U_3[$v_2][$v_5] !== "-1") {
                        $v_5++;
                        if ($v_5 >= 8) {
                            $v_5 = 8;
                            break
                        }
                    }
                    $v_4 = $v_6.colSpan;
                    var $v_A = $v_6.getAttribute("topTDid") === this.get_id() + "_TopTD";
                    if ($v_A) $v_8 = this.$5M_3;
                    else $v_8 = $v_6.rowSpan;
                    for (var $v_B = 0; $v_B < $v_8; $v_B++)
                        for (var $v_C = 0; $v_C < $v_4; $v_C++) {
                            var $v_D;
                            if ($v_7) {
                                if (!$v_B && !$v_C) $v_D = "hc";
                                else $v_D = "hm";
                                this.$2R_3[$v_2 + $v_B][$v_5 + $v_C] = $v_6
                            } else if ($v_A) {
                                $v_D = this.get_id();
                                this.$2o_3 = $v_2;
                                this.$5C_3 = $v_9;
                                this.$5E_3 = $v_8;
                                this.$5D_3 = $v_4;
                                this.$2n_3 = $v_5
                            } else if (!$v_B && !$v_C) $v_D = "c";
                            else $v_D = "m";
                            var $v_E = $v_2 + $v_B, $v_F = $v_5 + $v_C;
                            if (!IsNull(this.$U_3[$v_E])) this.$U_3[$v_E][$v_F] = $v_D
                        }
                    $v_5 = $v_5 + $v_4
                }
                this.$2M_3[$v_2] = $v_3
            }
            this.insertHiddenCell(this.$T_3, this.$2o_3, this.$5C_3, this.$5E_3, this.$5D_3, this.$2n_3)
        }
    },
    isHiddenCell: function(cell) {
        var $v_0 = true;
        if (!IsNull(cell.children)) {
            var $$t_4 = this;
            XUI.Html.DomUtils.ForEachChild(cell,
                function($p1_0) {
                    var $v_1 = !IsNull($p1_0) && !IsNull($p1_0.style) && $p1_0.style.display === "none";
                    if (!$v_1) {
                        $v_0 = false;
                        return true
                    }
                    return false
                })
        }
        return !IsNull(cell.style) && cell.style.display === "none" || $v_0
    },
    getInitialRowSpan: function() {
        var $v_0 = 0, $v_1 = $get(this.get_id() + "_divDataArea");
        if (!IsNull($v_1)) {
            var $v_2 = parseInt($v_1.getAttribute("MaxRowsBeforeScroll"), 10);
            if (!IsNull($v_2)) $v_0 = $v_2
        }
        return $v_0
    },
    insertHiddenCell: function(gridParentTable,
        currentGridRowPosition,
        currentGridColPosition,
        currentGridRowSpan,
        currentGridColSpan,
        currentGridColPositionInControlMatrix) {
        if (this.$5I_3 || IsNull(gridParentTable) || IsNull(currentGridRowPosition)) return;
        for (var $v_0 = 1; $v_0 < currentGridRowSpan; $v_0++) {
            for (var $v_1 = gridParentTable.rows[currentGridRowPosition + $v_0], $v_2 = 0, $v_3 = 0;
                $v_3 < currentGridColPositionInControlMatrix;
                $v_3++)
                if (this.$U_3[currentGridRowPosition + $v_0][$v_3] === "c" ||
                    this.$U_3[currentGridRowPosition + $v_0][$v_3] === "hc") $v_2++;
            if (this.GetParameter("LayoutStyle") !== "PrintList")
                if (!IsNull($v_1)) {
                    var $v_4 = $v_1.insertCell($v_2);
                    $v_4.colSpan = this.$2x_3;
                    $v_4.innerHTML = '<DIV style="display:none"/>';
                    $v_4.insertBy = this.get_id();
                    $v_4.style.display = "none";
                    this.$2R_3[currentGridRowPosition + $v_0][currentGridColPositionInControlMatrix] = $v_4
                }
        }
        this.$5I_3 = true
    },
    isLastControlOfColumn: function() {
        if (this.$U_3.length > 0) {
            this.$18_3 = this.$2o_3;
            this.$2x_3 = this.$M_3.colSpan;
            for (var $v_0 = this
                    .$2o_3 +
                    1;
                $v_0 < this.$U_3.length;
                $v_0++)
                for (var $v_1 = this
                        .$2n_3;
                    $v_1 < this.$2n_3 + this.$2x_3;
                    $v_1++)
                    if (!IsNull(this.$U_3[$v_0][$v_1]) &&
                        (this.$U_3[$v_0][$v_1] === "c" || this.$U_3[$v_0][$v_1] === "mc")) return false
        }
        return true
    },
    $4g_3: function() {
        if (this.get_element().parentNode.className === "ms-crm-Category-List") return;
        this.$h_3 = this.GetGridSpan();
        this.$M_3 = this.getGridTDElement();
        this.$3x_3 = this.$9i_3();
        this.$2K_3 = this.getGridColumnPosition();
        this.$18_3 = this.getGridRowPosition();
        this.$T_3 = this.getGridParentTable();
        if (!IsNull(this.$T_3)) {
            this.$1i_3 = this.$T_3.rows.length;
            this.$5M_3 = this.$M_3.rowSpan;
            this.$2x_3 = this.$M_3.colSpan;
            this.$M_3.setAttribute("topTDid", this.get_id() + "_TopTD");
            this.$9h_3();
            this.$33_3 = this.isLastControlOfColumn()
        }
    },
    $19_3: 0,
    $9y_3: function() {
        var $v_0 = this.get_element().parentNode;
        while (!IsNull($v_0) &&
            $v_0.className !== "ms-crm-Form-SubGrid-Layout" &&
            $v_0.className !== "ms-crm-Form-SubGrid-Layout-Lite") {
            if ($v_0.className === "ms-crm-Form") return this.get_element().offsetHeight;
            $v_0 = $v_0.parentNode
        }
        var $v_1 = 0;
        if (IsNull($v_0))
            $v_1 = this.get_element().offsetHeight - Mscrm.Utilities.getVerticalBoxPadding(this.get_element());
        else {
            var $v_2 = $v_0.parentNode;
            $v_1 = $v_2.offsetHeight - Mscrm.Utilities.getVerticalBoxPadding($v_2)
        }
        return $v_1
    },
    isAutoSubGrid: function() {
        var $v_0 = this.GetParameter("subgridAutoExpand") === "1";
        return $v_0
    },
    $63_3: function() {
        var $v_0 = this.get_element().id, $v_1 = this.GetParameter("viewid");
        if (Array.contains(Mscrm.ProductEntityInlineEditGrid.get_getInlineEditViews(), $v_1) ||
            $v_0.indexOf("quotedetail") > -1 ||
            $v_0.indexOf("salesorderdetail") > -1 ||
            $v_0.indexOf("invoicedetail") > -1 ||
            $v_0.indexOf("opportunityproduct") > -1) return true;
        return false
    },
    $As_3: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("productassocaition_items") > -1
    },
    isMovableRowsGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("SLADetails") > -1 ||
            $v_0.indexOf("RuleItems") > -1 ||
            $v_0.indexOf("ConvertRuleItemsGrid") > -1 ||
            $v_0.indexOf("ProfileRuleItems") > -1
    },
    isEntitlementChannelGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("grid_EntitlementChannel") > -1
    },
    isCategoryGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("AssociatedCategoriesGrid") > -1
    },
    isDynamicPropertyOptionSetGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("grid_DynamicPropertyOptionSetItem") > -1
    },
    isDynamicPropertyOptionSetItemGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("grid_DynamicPropertyOptionSetItem") > -1
    },
    isProductSuggestionGrid: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("ProductSuggestions_LinkControl") > -1
    },
    $A5_3: function($p0, $p1) { this.handleAutoExpandRows(null) },
    $6V_3: function() {
        var $v_0 = this.get_element().offsetHeight,
            $v_1 = $get(this.get_id() + "_divDataBody").offsetHeight,
            $v_2 = $v_0 - $v_1,
            $v_3 = $get(this.get_id() + "_visualizationCompositeControl"),
            $v_4 = !IsNull($v_3) && $v_3.offsetHeight > 0 ? this.$9y_3() - $v_3.offsetHeight : 0,
            $v_5 = $get("appGridQueryFilterContainer_" + this.get_id()),
            $v_6 = !IsNull($v_5) ? $v_5.offsetHeight : 0;
        return $v_4 + $v_2 + $v_6
    },
    handleAutoExpandRows: function(domEvent) {
        if (this.get_isDisposed()) return;
        if (this.get_element().parentNode
            .className ===
            "ms-crm-Category-List" ||
            this.get_element().offsetHeight <= 0) return;
        var $v_0 = $get(this.get_id() + "_divDataArea");
        if ($v_0.getAttribute("Expandable") !== "1") return;
        if (IsNull(this.$a_3)) this.$a_3 = this.isAutoSubGrid();
        if (IsNull(this.$1J_3))
            this.$1J_3 = this.$63_3() ||
                this.isMovableRowsGrid() ||
                this.isEntitlementChannelGrid() ||
                this.isDynamicPropertyOptionSetGrid() ||
                this.isCategoryGrid();
        if (!this.$19_3)
            if (this.$a_3) {
                if (IsNull(this.$M_3)) this.$M_3 = this.getGridTDElement();
                if (!IsNull(this.$M_3)) {
                    var $v_4 = this.$M_3.rowSpan;
                    this.$M_3.rowSpan = 1;
                    this.$19_3 = this.$6V_3();
                    this.$M_3.rowSpan = $v_4
                }
            } else this.$19_3 = this.$6V_3();
        this.$a_3 && this.$4g_3();
        var $v_1 = parseInt($v_0.getAttribute("MaxRowsBeforeScroll"), 10),
            $v_2 = this.GetParameter("RecordsPerPage"),
            $v_3 = 0;
        if (!IsNull($v_2)) {
            $v_3 = parseInt($v_2, 10);
            if (!this.$1J_3 && ($v_3 < $v_1 || this.isLiteSubGrid())) $v_1 = $v_3
        }
        if (!isNaN($v_1) && $v_1 > 0) {
            var $v_5 = 0, $v_6 = 21;
            if (!IsNull(this.$2_3)) {
                $v_5 = this.$2_3.get_numberOfRecords();
                $v_6 = window.location.href.toLowerCase().indexOf("/dashboards/dashboard.aspx") !== -1
                    ? 30
                    : this.$2_3.$5F_3;
                var $v_C = this.$2_3.get_dataTableBody();
                if ($v_5 > 0 &&
                    !IsNull($v_C) &&
                    $v_C.rows.length > 0 &&
                    !IsNull(XUI.Html.GetComputedStyle($v_C.rows[0], "height"))) {
                    var $v_D;
                    if (this
                        .get_$62_3() &&
                        Mscrm.Utilities.get_ieBrowserVersion() > 9 &&
                        $v_C.rows.length > 1) $v_D = $v_C.rows[1].offsetHeight;
                    else if (Mscrm.Utilities.isEdge()) $v_D = $v_C.rows[0].offsetHeight - 1;
                    else if (Mscrm.Utilities.get_ieBrowserVersion() > 9) $v_D = $v_C.rows[0].offsetHeight - 1;
                    else $v_D = $v_C.rows[0].offsetHeight;
                    if ($v_D > 0) {
                        $v_6 = $v_D;
                        if (this.$1J_3 && $v_5 > $v_1) $v_6 = $v_6 - 4
                    }
                }
            }
            var $v_7 = $find("crmForm"), $v_8 = $get("mainContainer"), $v_9;
            if (window.location.href.toLowerCase().indexOf("dialogpage.aspx") === -1)
                if (IsNull($v_7))
                    if (IsNull($v_8)) return;
                    else $v_9 = $v_8.offsetHeight;
                else $v_9 = $v_7.GetViewportHeight();
            else {
                $v_8 = $get("crmDialogForm");
                if (!IsNull($v_8)) {
                    $v_9 = $v_8.offsetHeight;
                    var $v_E = $get("DlgHdBodyContainer"),
                        $v_F = Mscrm.Utilities.getChildElementsByClassName($v_E, "ms-crm-grid-BodyContainer", true),
                        $v_G = Mscrm.Utilities.getChildElementsByClassName($v_E, "ms-crm-List-StatusBar-Ex-Lite", true),
                        $v_H = $v_F[0],
                        $v_I = $v_G[0];
                    if (!IsNull($v_E)) {
                        if ($v_9 <= 290) $v_E.className += " ms-crm-RefreshDialog-Small-MDD-VerticalScroll";
                        if (!IsNull(this.$2_3) && this.$2_3.get_totalRecordCount() > $v_1) {
                            var $v_J = 0;
                            if (this.$a_3) {
                                var $v_K = 30, $v_L = this.$6F_3() ? $v_1 : 2;
                                $v_J = $v_6 * ($v_5 < $v_L ? $v_5 + 1 : $v_L + 1);
                                if ($v_5 < 2) $v_J += $v_K
                            } else $v_J = $v_6 * ($v_1 + 1);
                            $v_J += 17;
                            $v_I.style.visibility = "visible";
                            $v_I.style.position = "absolute";
                            $v_I.style.top = $v_J.toString() + "px"
                        }
                    }
                } else return
            }
            var $v_A = $v_1, $v_B = 45;
            $v_A = Math.floor(($v_9 - $v_B - this.$19_3) / $v_6);
            if ($v_A < 0) $v_A = 2;
            if (!$v_5 || $v_5 === 1) $v_5 = 2;
            this.$AM_3($v_1, $v_3, $v_A, $v_6, $v_5, $v_0)
        }
    },
    setSubGridHeight: function(forceResetHeight) {
        this.$1J_3 = this.$63_3() ||
            this.isMovableRowsGrid() ||
            this.isEntitlementChannelGrid() ||
            this.isDynamicPropertyOptionSetGrid() ||
            this.isCategoryGrid();
        if (this.$1J_3) {
            var $v_0 = $find("crmForm"), $v_1 = $get("mainContainer");
            if (forceResetHeight || !IsNull($v_0) && !IsNull($v_1) && $v_0.get_isNew()) {
                this.isLiteSubGrid() && this.$4g_3();
                this.handleAutoExpandRows(null)
            }
        }
    },
    $6F_3: function() { return this.$a_3 && this.$33_3 },
    $AM_3: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0;
        if (this.$a_3) {
            if (!this.$1J_3) {
                $p0 = $p1;
                $p5.style.overflowY = "auto"
            } else {
                $p5.style.overflowX = "auto";
                $p5.style.paddingBottom = "26px";
                if ($p4 <= $p0) {
                    if ($p5.className
                        .indexOf("ms-crm-Grid-DataArea-VerticalScroll") !==
                        -1) $p5.className = $p5.className.replace("ms-crm-Grid-DataArea-VerticalScroll", "");
                    if ($p5.className
                        .indexOf("ms-crm-Grid-DataArea-NoVerticalScroll") ===
                        -1) $p5.className += " ms-crm-Grid-DataArea-NoVerticalScroll"
                } else {
                    if ($p5.className
                        .indexOf("ms-crm-Grid-DataArea-NoVerticalScroll") !==
                        -1) $p5.className = $p5.className.replace("ms-crm-Grid-DataArea-NoVerticalScroll", "");
                    if ($p5.className
                        .indexOf("ms-crm-Grid-DataArea-VerticalScroll") ===
                        -1) $p5.className += " ms-crm-Grid-DataArea-VerticalScroll"
                }
            }
            var $v_3 = this.$6F_3() ? $p2 < $p0 ? $p2 : $p0 : 2;
            $v_0 = $p3 * ($p4 < $v_3 ? $p4 : $v_3)
        } else {
            $p5.style.overflowY = "auto";
            $v_0 = $p3 * $p0 + 1
        }
        if (this.isLiteSubGrid() && !this.$1J_3) {
            var $v_4 = this.GetParameter("IsAzureMLSimilarRecordsGrid");
            $p5.style.overflowY = !IsNull($v_4) && $v_4 === "1" ? "auto" : "hidden";
            $p5.style.overflowX = "auto"
        }
        $v_0 += 3;
        if ($p5.scrollWidth >= $p5.clientWidth || this.get_$62_3()) $v_0 = $v_0 + 17;
        if ($v_0 <= 0) return;
        if (this.$a_3) {
            $p5.style.height = $v_0.toString() + "px";
            if (this.$6F_3()) {
                this.$h_3 = this.GetGridSpan();
                !IsNull(this.$h_3) && this.$CW_3($v_0 + this.$19_3)
            }
        }
        $p5.style.height = $v_0.toString() + "px";
        var $v_1 = this.GetParameter("isGridHidden"), $v_2 = this.GetParameter("GridType");
        if ($v_2 === "SubGrid" && $v_1 !== "true") {
            if (IsNull(this.$h_3)) this.$h_3 = this.GetGridSpan();
            if (!IsNull(this.$h_3)) {
                var $v_5 = 0, $v_6 = 0, $v_7 = 0, $v_8 = 0;
                if (!Mscrm.Utilities.isIE7OrIE7CompactMode()) {
                    var $v_B = XUI.Html.DomUtils.GetFirstChild(this.$h_3);
                    if (XUI.Html.GetComputedStyle($v_B, "position") === "absolute") {
                        $v_5 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($v_B, "top"), 0);
                        $v_6 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($v_B, "bottom"), 0)
                    }
                    $v_7 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($v_B, "borderTopWidth"), 0);
                    $v_8 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($v_B, "borderBottomWidth"), 0)
                }
                if (this.$a_3 || this.isLiteSubGrid())
                    this.$h_3.parentNode.style.height = ($v_5 + $v_6 + $v_7 + $v_8 + $v_0 + this.$19_3).toString() +
                        "px";
                else this.$h_3.style.height = ($v_5 + $v_6 + $v_0 + this.$19_3).toString() + "px";
                var $v_9 = $get("crmDialogForm"), $v_A = $get("DlgHdBodyContainer");
                if (!IsNull($v_9) && !IsNull($v_A)) {
                    var $v_C = $v_9.offsetHeight, $v_D;
                    if (window.location.href &&
                        window.location.href.toString().indexOf("DialogPage.aspx") !== -1 &&
                        (Mscrm.Utilities.isEdge() || Mscrm.Utilities.isSafari())) $v_D = -1 * this.$19_3;
                    else $v_D = Mscrm.Utilities.get_ieBrowserVersion() > 9 ? 40 : 60;
                    this.$h_3.parentNode.style.height = ($v_5 + $v_6 + $v_7 + $v_8 + $v_0 + this.$19_3 + $v_D)
                        .toString() +
                        "px"
                }
            }
        }
    },
    $CW_3: function($p0) {
        var $v_0 = 0, $v_1 = false;
        if (!this.$U_3.length || !this.$T_3) return;
        for (var $v_5 = 0; $v_5 < this.$T_3.rows.length; $v_5++) this.$2M_3[$v_5] = this.$T_3.rows[$v_5].offsetHeight;
        this.$2M_3[this.$18_3] = 1;
        var $v_2 = this.$2M_3[this.$18_3], $v_3 = this.$U_3.length, $v_4 = 8;
        while ($p0 > $v_2 + $v_4)
            if (this.$18_3 + $v_0 < $v_3 - 1) {
                $v_2 = $v_2 + this.$2M_3[this.$18_3 + $v_0];
                $v_0 = $v_0 + 1
            } else {
                $v_1 = true;
                $v_0 = $v_0 + 1;
                break
            }
        $p0 - $v_2 > 0 && $v_1 && this.setLastRowHeight($p0 - $v_2);
        !$v_1 && this.setLastRowToAuto();
        this.setCellsHidden(this
            .$18_3 +
            1,
            this.$18_3 + $v_0 - 1,
            this.$2K_3,
            this.$2K_3 + this.$M_3.colSpan - 1,
            true);
        this.setCellsHidden(this.$18_3 + $v_0, this.$1i_3 - 1, this.$2K_3, this.$2K_3 + this.$M_3.colSpan - 1, false);
        this.$M_3.rowSpan = $v_0
    },
    setCellsHidden: function(startRow, endRow, startCol, endCol, hidden) {
        this.$T_3 = this.getGridParentTable();
        for (var $v_0 = startRow; $v_0 <= endRow; $v_0++)
            for (var $v_1 = startCol;
                $v_1 <= endCol;
                $v_1++
            ) if (!IsNull(this.$2R_3[$v_0][$v_1])) this.$2R_3[$v_0][$v_1].style.display = hidden ? "none" : ""
    },
    setLastRowHeight: function(height) {
        if (height > 0) this.$T_3.rows[this.$1i_3 - 1].style.height = height.toString()
    },
    setLastRowToAuto: function() { this.$T_3.rows[this.$1i_3 - 1].style.height = "100%" },
    $Bm_3: function($p0, $p1) { this.fireControlEvent("OnSelectionChange", $p1) },
    $7g_3: function($p0, $p1) { this.fireControlEvent("OnBeforeFormLoad", $p1) },
    $8b_3: function() {
        var $v_0 = "<grid>", $$t_6 = this;
        XUI.Html.DomUtils.ForEachChild(this.$4f_3(),
            function($p1_0) {
                if (isNullOrEmptyString($p1_0
                    .getAttribute("value"))) $v_0 += "<" + CrmEncodeDecode.CrmXmlEncode($p1_0.id) + "/>";
                else
                    $v_0 += "<" +
                        CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                        ">" +
                        CrmEncodeDecode.CrmXmlEncode($p1_0.getAttribute("value")) +
                        "</" +
                        CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                        ">";
                return false
            });
        $v_0 += "<parameters>";
        var $v_1 = this.$4e_3(),
            $v_2 = $get("viewid", $v_1),
            $v_3 = !!$v_2 && $v_2.getAttribute("value") !== "{00000000-0000-0000-0000-000000000000}",
            $$t_7 = this;
        XUI.Html.DomUtils.ForEachChild($v_1,
            function($p1_0) {
                if ((IsNull($p1_0.getAttribute("requiredMask")) ||
                        !IsNull($p1_0.getAttribute("requiredMask")) && $p1_0.getAttribute("requiredMask") !== 1) &&
                    (!$v_3 || $p1_0.id !== "layoutXml"))
                    if (isNullOrEmptyString($p1_0
                        .getAttribute("value"))) $v_0 += "<" + CrmEncodeDecode.CrmXmlEncode($p1_0.id) + "/>";
                    else
                        $v_0 += "<" +
                            CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                            ">" +
                            CrmEncodeDecode.CrmXmlEncode($p1_0.getAttribute("value")) +
                            "</" +
                            CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                            ">";
                return false
            });
        return $v_0 + "</parameters></grid>"
    },
    $3A_3: 0,
    $2z_3: 0,
    $3M_3: null,
    $3L_3: null,
    $1g_3: null,
    $2V_3: null,
    $2I_3: null,
    $3G_3: null,
    $3C_3: null,
    $2s_3: null,
    add_onRefresh: function(value) { this.get_events().addHandler("OnRefresh", value) },
    remove_onRefresh: function(value) { this.get_events().removeHandler("OnRefresh", value) },
    add_onChangePage: function(value) { this.get_events().addHandler("OnChangePage", value) },
    remove_onChangePage: function(value) { this.get_events().removeHandler("OnChangePage", value) },
    add_onBeforeRefresh: function(value) { this.get_events().addHandler("OnBeforeRefresh", value) },
    remove_onBeforeRefresh: function(value) { this.get_events().removeHandler("OnBeforeRefresh", value) },
    get_refreshAsynchronous: function() {
        if (IsNull(this.$1L_3)) this.$1L_3 = this.GetProperty("refreshAsync") === "True";
        return this.$1L_3
    },
    set_refreshAsynchronous: function(value) {
        this.$1L_3 = value;
        return value
    },
    get_remoteCommandResult: function() { return this.$3M_3 },
    set_remoteCommandResult: function(value) {
        this.$3M_3 = value;
        return value
    },
    get_remoteCommand: function() { return this.$3L_3 },
    set_remoteCommand: function(value) {
        this.$3L_3 = value;
        return value
    },
    $1b_3: null,
    $1p_3: null,
    $1d_3: true,
    $4G_3: true,
    $3o_3: true,
    $1u_3: "<TABLE class='ms-crm-List-Message' morerecords='0'><TR><TD ID='GridMessage'>{0}</TD></TR></TABLE>",
    $1x_3: false,
    $2E_3: null,
    $2Z_3: 0,
    $42_3: 0,
    $2y_3: null,
    $4E_3: true,
    $2L_3: true,
    $2P_3: false,
    $2X_3: null,
    $r_3: null,
    $2_3: null,
    $1r_3: 0,
    $4J_3: 0,
    $4K_3: 0,
    $1w_3: false,
    $5e_3: true,
    get_innerGrid: function() { return this.$2_3 },
    set_innerGrid: function(value) {
        this.$2_3 = value;
        return value
    },
    get_pageNumber: function() { return this.getPageNumber() },
    set_pageNumber: function(value) {
        this.$6E_3(value);
        return value
    },
    get_maximumSelectableRecords: function() { return this.$9o_3() },
    get_version: function() { return "3.0" },
    get_autoHideHScroll: function() { return this.$3o_3 },
    set_autoHideHScroll: function(value) {
        this.$3o_3 = value;
        var $v_0 = $get(this.get_id() + "_divDataArea");
        if (!this.$3o_3) $v_0.style.overflowX = "scroll";
        else $v_0.style.overflowX = "auto";
        return value
    },
    get_hasFocus: function() { return this.$2P_3 },
    set_hasFocus: function(value) {
        this.$2P_3 = value;
        return value
    },
    get_gridXml: function() { return this.buildGridXml(false) },
    get_layoutXml: function() { return this.$6T_3() },
    get_gridRefreshTime: function() { return this.$44_3 },
    get_gridRefreshSourceElement: function() { return this.$2y_3 },
    set_gridRefreshSourceElement: function(value) {
        this.$2y_3 = value;
        return value
    },
    get_isRefreshing: function() { return this.$1x_3 },
    get_defaultTabIndex: function() { return this.$1r_3 },
    get_loadingMessageHtml: function() { return this.$37_3 },
    set_loadingMessageHtml: function(value) {
        this.$37_3 = value;
        return value
    },
    get_messageHtml: function() { return this.$1u_3 },
    set_messageHtml: function(value) {
        this.$1u_3 = value;
        return value
    },
    get_refreshCommandExecuting: function() { return this.$1w_3 },
    set_refreshCommandExecuting: function(value) {
        this.$1w_3 = value;
        return value
    },
    $Ag_3: function() {
        this.ResetPageNumber();
        this.$7J_3()
    },
    $Bt_3: function($p0) {
        $p0.preventDefault();
        this.GetParameter("LoadOnDemand") === "1" && this.SetParameter("LoadOnDemand", "0");
        this.Refresh()
    },
    $Bv_3: function($p0) {
        var $v_0 = $get(this.get_id() + "_gridBodyContainer");
        if (!IsNull($v_0)) {
            var $v_1 = $get("refreshButton", $v_0);
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
                if (!IsNull($v_2)) {
                    var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
                    if (!IsNull($v_3)) $v_3.className = "ms-crm-ImageStrip-grid_refresh_hover"
                }
            }
        }
    },
    $Bu_3: function($p0) {
        var $v_0 = $get(this.get_id() + "_gridBodyContainer");
        if (!IsNull($v_0)) {
            var $v_1 = $get("refreshButton", $v_0);
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
                if (!IsNull($v_2)) {
                    var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
                    if (!IsNull($v_3)) $v_3.className = "ms-crm-ImageStrip-grid_refresh"
                }
            }
        }
    },
    $9E_3: function($p0) {
        Xrm.Internal.doAction(this.get_id(),
            this
            .get_entityTypeCode(),
            "enabledisablefilters",
            "")
    },
    $9G_3: function($p0) {
        var $v_0 = $get("filterButton", this.get_element()), $v_1 = $get("filterButtonImage", this.get_element());
        if (!IsNull($v_1) && !IsNull($v_0))
            if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
                if ($v_0
                    .className !==
                    "ms-crm-List-FilterButton-Selected") $v_1.src = "/_imgs/grid/grid_filter_hover.png"
            } else if ($v_0
                .className !==
                "ms-crm-List-FilterButton-Selected") $v_1.className = "ms-crm-ImageStrip-grid_filter_hover"
    },
    $9F_3: function($p0) {
        var $v_0 = $get("filterButton", this.get_element()), $v_1 = $get("filterButtonImage", this.get_element());
        if (!IsNull($v_1))
            if (Mscrm.InternalUtilities.Utilities.isHighContrastEnabled()) {
                if ($v_0.className !== "ms-crm-List-FilterButton-Selected") $v_1.src = "/_imgs/grid/grid_filter.png"
            } else if ($v_0
                .className !==
                "ms-crm-List-FilterButton-Selected") $v_1.className = "ms-crm-ImageStrip-grid_filter"
    },
    RefreshGridAndClearPaging: function() {
        this.ClearPagingCookie();
        this.ResetPageNumber();
        this.Refresh()
    },
    Refresh: function() { this.$7h_3(false) },
    $7h_3: function($p0) {
        var $v_0 = this.GetParameter("oId");
        if (isNullOrEmptyString($v_0) &&
            (this.get_ribbonRelationshipType() === 1 || this.get_ribbonRelationshipType() === 2)) {
            var $v_2 = $get(this.get_id() + "_divDataArea");
            if (!IsNull($v_2)) {
                var $v_3 = window.LOCID_EMPTY_GRID_MESSAGE_REFRESH;
                $v_2.innerHTML = String
                    .format('<div class="ms-crm-grid-Title-Data-Lite">{0}</div><div style="height: 16px;"></div>',
                        CrmEncodeDecode.CrmHtmlEncode($v_3));
                return
            }
        }
        if (this.$1w_3) return;
        this.$1w_3 = true;
        if (!this.$2E_3) this.$2E_3 = new Mscrm.RemoteCommandXml("AppGridWebService", "Refresh");
        this.$6Y_3();
        var $$t_6 = this,
            $v_1 = function() {
                $$t_6.$2E_3.setContent($$t_6.buildGridXml($p0));
                var $v_4 = $$t_6.get_events().getHandler("OnLoad");
                !IsNull($v_4) && $v_4($$t_6, null)
            };
        this.executeInternal($p0, this.$2E_3, $v_1)
    },
    executeInternal: function(calledFromPaging, command, setCommandContextCallback) {
        if (this.$1T_3) {
            this.$1T_3.properties = {};
            this.$1T_3.properties["id"] = this.get_id();
            this.$1T_3.properties["IsAsync"] = true;
            this.$1T_3.start()
        }
        Mscrm.Performance.PerformanceMarkerManager.get_instance()
            .addMarker("SubGrid - " + this.get_id() + " - Start", 1);
        Mscrm.Utilities.addControlMarker(this.get_id(),
            "Subgrid",
            "StartLoadTimestamp",
            (new Date).getTime().toString());
        if (IsNull(calledFromPaging)) calledFromPaging = false;
        this.$1x_3 = true;
        var $v_0 = new Mscrm.BeforeRefreshEventArgs;
        this.fireControlEvent("OnBeforeRefresh", $v_0);
        if ($v_0.breakEvent) {
            this.$1x_3 = false;
            return
        }
        this.$1d_3 && this.DisablePaging();
        if (window.UseTabletExperience) this.$1L_3 = true;
        this.$5Y_3();
        if (this.get_refreshAsynchronous()) {
            setCommandContextCallback && setCommandContextCallback();
            command.execute(this.$$d_onRefreshComplete);
            this.ShowLoadingMessage()
        } else {
            this.ShowLoadingMessage();
            var $$t_4 = this;
            window.setTimeout(function() {
                    setCommandContextCallback && setCommandContextCallback();
                    $$t_4.$Bs_3(command)
                },
                1)
        }
    },
    DisassociateAndRefresh: function(associationName, parentTypeCode, parentId, targetTypeCode) { return },
    DeleteConnectionAndRefresh: function() { return },
    CancelRefresh: function() {
        this.$2E_3.abort();
        this.finishShowLoadingMessage();
        this.setGridData(String.format(this.$1u_3, window.LOCID_REFRESH_GRID_CANCELLED), true);
        this.$1x_3 = false
    },
    ShowLoadingMessage: function() {
        var $v_0 = this.getLoadingMessage();
        if (IsNull($v_0)) $v_0 = window["LOCID_LOADING_" + this.get_id().toUpperCase()];
        if (IsNull(this.$2X_3)) {
            var $v_1 = $get(this.get_id() + "_divDataArea");
            this.$2X_3 = $v_1.style.overflowY;
            $v_1.style.overflowY = this.getDataAreaStyle()
        }
        $get(this.get_id() + "_divDataArea").innerHTML = String.format(this.$37_3, CrmEncodeDecode.CrmHtmlEncode($v_0))
    },
    getLoadingMessage: function() { return window.LOCID_LOADING_GRID_DATA },
    getDataAreaStyle: function() { return "hidden" },
    buildGridXml: function(calledFromPaging) {
        if (IsNull(calledFromPaging)) calledFromPaging = false;
        var $v_0 = "<grid>", $$t_8 = this;
        XUI.Html.DomUtils.ForEachChild(this.$4f_3(),
            function($p1_0) {
                var $v_3 = $p1_0.getAttribute("value");
                if (isNullOrEmptyString($v_3)) $v_0 += "<" + CrmEncodeDecode.CrmXmlEncode($p1_0.id) + "/>";
                else
                    $v_0 += "<" +
                        CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                        ">" +
                        CrmEncodeDecode.CrmXmlEncode($v_3) +
                        "</" +
                        CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                        ">";
                return false
            });
        if (IsNull(calledFromPaging) || !calledFromPaging)
            $v_0 += "<refreshCalledFromRefreshButton>1</refreshCalledFromRefreshButton>";
        if (!IsNull(this.$2_3)) {
            $v_0 += "<totalrecordcount>" +
                CrmEncodeDecode.CrmXmlEncode(this.$2_3.get_totalRecordCount().toString()) +
                "</totalrecordcount>";
            $v_0 += "<allrecordscounted>" +
                (this.$2_3.get_allRecordsCounted() ? "true" : "false") +
                "</allrecordscounted>"
        }
        $v_0 += "<returntotalrecordcount>" + (this.$4E_3 ? "true" : "false") + "</returntotalrecordcount>";
        $v_0 += "<getParameters>";
        var $v_1 = this.GetParameter("GridType"), $v_2 = this.GetParameter("fetchXmlForFilters");
        if (!IsNull($v_1) && $v_1 === "SubGrid" && IsNull($v_2)) $v_0 += "getFetchXmlForFilters";
        $v_0 += "</getParameters>";
        $v_0 += "<parameters>";
        var $$t_9 = this;
        XUI.Html.DomUtils.ForEachChild(this.$4e_3(),
            function($p1_0) {
                if (IsNull($p1_0.getAttribute("requiredMask")) ||
                    !IsNull($p1_0.getAttribute("requiredMask")) && $p1_0.getAttribute("requiredMask") !== 1) {
                    var $v_4 = $p1_0.getAttribute("value");
                    if ($v_4 && !$v_4.length) $v_0 += "<" + CrmEncodeDecode.CrmXmlEncode($p1_0.id) + "/>";
                    else
                        $v_0 += "<" +
                            CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                            ">" +
                            CrmEncodeDecode.CrmXmlEncode($v_4) +
                            "</" +
                            CrmEncodeDecode.CrmXmlEncode($p1_0.id) +
                            ">"
                }
                return false
            });
        $v_0 += this.$9w_3();
        $v_0 += this.$9c_3();
        if (window.IsTurboForm) $v_0 += "<isTurboForm>1</isTurboForm>";
        else $v_0 += "<isTurboForm>0</isTurboForm>";
        if (!IsNull(window.LOCID_OBJECTTYPECODE))
            $v_0 += "<entityDashboardCode>" + window.LOCID_OBJECTTYPECODE + "</entityDashboardCode>";
        $v_0 += "</parameters>";
        $v_0 += this.$6T_3();
        $v_0 += "</grid>";
        return $v_0
    },
    $9w_3: function() {
        var $v_0 = "", $v_1 = Xrm.Page.context.getQueryStringParameters();
        if (this.get_entityTypeCode() === 1048)
            if (!IsNull($v_1["revise"])) $v_0 = "<revise>" + CrmEncodeDecode.CrmXmlEncode($v_1["revise"]) + "</revise>";
        return $v_0
    },
    $9c_3: function() {
        var $v_0 = "", $v_1 = Xrm.Page.context.getQueryStringParameters();
        if (this.get_entityTypeCode() === 1049)
            if (!IsNull($v_1["_canDelete"]))
                $v_0 = "<canDeleteDynamicProperty>" +
                    Boolean.parse($v_1["_canDelete"].toString()) +
                    "</canDeleteDynamicProperty>";
        return $v_0
    },
    $6T_3: function() {
        var $v_0 = "", $v_1 = 0, $v_2 = this.get_id() + "_gridBar", $v_3 = this.get_id() + "_gridBarCols";
        $v_0 += "<columns>";
        var $v_4 = $get($v_2), $v_5 = $get($v_3);
        if ($v_4) {
            var $v_6 = $v_4.rows[0].cells, $v_7 = $v_6.length;
            for ($v_1 = 0; $v_1 < $v_7; $v_1++) {
                var $v_8 = $v_6[$v_1];
                if ($v_8.getAttribute("field")) {
                    $v_0 += "<column width=";
                    if ($v_8.getAttribute("isHidden")) $v_0 += '"0" isHidden="true"';
                    else {
                        var $v_9 = $v_8.scrollWidth;
                        if (!$v_9) {
                            var $v_A = XUI.Html.DomUtils.GetChildElementAt($v_5, $v_1).getAttribute("width");
                            if (!isNullOrEmptyString($v_A)) $v_9 = parseInt($v_A, 10)
                        }
                        $v_0 += '"' + $v_9 + '" isHidden="false"'
                    }
                    if ($v_8.getAttribute("metadataDisabled")) $v_0 += ' isMetadataBound="false"';
                    else $v_0 += ' isMetadataBound="true"';
                    if ($v_8.className === "ms-crm-List-Sortable") $v_0 += ' isSortable="true"';
                    else $v_0 += ' isSortable="false"';
                    $v_0 += ' label="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("displayLabel")) + '"';
                    $v_0 += ' fieldname="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_8
                            .getAttribute("fieldname")) +
                        '"';
                    $v_0 += ' entityname="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("entityname")) +
                        '"';
                    if ($v_8.getAttribute("renderertype"))
                        $v_0 += ' renderertype="' +
                            CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("renderertype")) +
                            '"';
                    if (window.IS_GRID_WITH_IMAGE) {
                        if ($v_8
                            .getAttribute("imageproviderwebresource")
                        )
                            $v_0 += ' imageproviderwebresource="' +
                                CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("imageproviderwebresource")) +
                                '"';
                        if ($v_8
                            .getAttribute("imageproviderfunctionname")
                        )
                            $v_0 += ' imageproviderfunctionname="' +
                                CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("imageproviderfunctionname")) +
                                '"'
                    }
                    if ($v_8
                        .getAttribute("relationshipname"))
                        $v_0 += ' relationshipname="' +
                            CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("relationshipname")) +
                            '"';
                    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl")) {
                        if (!Mscrm.InternalUtilities._String
                            .isNullOrWhiteSpace($v_8
                                .getAttribute("type")))
                            $v_0 += ' type="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("type")) + '"';
                        if (!Mscrm.InternalUtilities._String
                            .isNullOrWhiteSpace($v_8
                                .getAttribute("sourcetype"))
                        )
                            $v_0 += ' sourcetype="' +
                                CrmEncodeDecode.CrmXmlAttributeEncode($v_8.getAttribute("sourcetype")) +
                                '"'
                    }
                    $v_0 += ">" + CrmEncodeDecode.CrmXmlEncode($v_8.getAttribute("field")) + "</column>"
                }
            }
        }
        $v_0 += "</columns>";
        return $v_0
    },
    $Bs_3: function($p0) {
        var $v_0 = $p0.execute();
        this.onRefreshComplete($v_0, null)
    },
    onRefreshComplete: function(result, command) {
        this.finishShowLoadingMessage();
        var $$t_2 = this;
        window.setTimeout(function() { $$t_2.refreshComplete(result, command) }, 1)
    },
    get_$87_3: function() {
        var $v_0 = Mscrm.GridControl.get_$77()[this.get_id()];
        if (isNullOrEmptyString($v_0)) $v_0 = this.GetParameter("viewts");
        return $v_0
    },
    set_$87_3: function($p0) {
        Mscrm.GridControl.get_$77()[this.get_id()] = $p0;
        return $p0
    },
    refreshComplete: function(result, command) {
        if (result.get_success() && !isNullOrEmptyString(result.get_returnValue())) {
            var $v_0 = XUI.Xml.LoadXml(result.get_returnValue());
            this.SetProperty("pagingCookie",
                XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/pagingCookie", null)));
            this.setGridData(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_0, "gridXml/gridHtml", null)), true);
            var $v_1 = this.get_$87_3(),
                $v_2 = "",
                $v_3 = XUI.Xml.SelectSingleNode($v_0, "gridXml/gridParams/div[@id='viewts']", null);
            if ($v_3) $v_2 = XUI.Xml.GetText($v_3);
            this.setDivGridParameters($v_0);
            this.isSubGridStale($v_1, $v_2) && this.set_$87_3($v_2);
            if (Xrm.Internal.isTurboForm()) {
                var $v_5 = $find(this.get_id() + "_span");
                !IsNull($v_5) && $v_5.registerForHiddenGridControl()
            }
            var $v_4 = this.cacheValidation($v_1, $v_2);
            if (!$v_4) {
                this.$1w_3 = false;
                return false
            }
        } else this.displayFailedMessage();
        this.fireGridEvents(command);
        this.$4k_3(null);
        this.$44_3 = new Date;
        this.$1x_3 = false;
        if (this.$1T_3) {
            this.$1T_3.stop();
            this.$1T_3 = null
        }
        this.$1w_3 = false;
        Mscrm.Utilities.addControlMarker(this.get_id(),
            "Subgrid",
            "FinishLoadTimestamp",
            (new Date).getTime().toString());
        Mscrm.Performance.PerformanceMarkerManager.get_instance()
            .addMarker("SubGrid - " + this.get_id() + " - Stop", 1);
        this.$5e_3 && Mscrm.MetricsCollector.reportTimelineEvent(this.get_id(), "loaded");
        this.$5e_3 = false;
        !Mscrm.Utilities.isTurboForm() &&
            this.getFormDataEntityId() === "PrimaryEntity" &&
            this.$6b_3("AllSubgridsLoaded");
        this.getFormDataEntityId() !== "PrimaryEntity" && this.$6b_3("All Sub-Form Subgrids Loaded");
        return true
    },
    $6b_3: function($p0) {
        var $v_0 = Mscrm.Performance.PerformanceMarkerManager.get_instance().getMarkerByName($p0);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_0.timestamp = (new Date).getTime();
        else Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker($p0, 1)
    },
    setDivGridParameters: function(xmlDoc) {
        var $v_0 = new Array(3);
        $v_0[0] = "effectiveFetchXml";
        $v_0[1] = "isFetchXmlNotFinal";
        $v_0[2] = "fetchXmlForFilters";
        $v_0[3] = "viewts";
        for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = XUI.Xml.SelectSingleNode(xmlDoc,
                String.format("gridXml/gridParams/div[@id='{0}']", $v_0[$v_1]),
                null);
            $v_2 && this.SetParameter(XUI.Xml.GetText($v_2.attributes.getNamedItem("id")), XUI.Xml.GetText($v_2))
        }
    },
    fireOnLoadHandler: function() {
        var $v_0 = this.get_events().getHandler("OnLoad");
        if (!IsNull($v_0)) {
            var $$t_1 = this;
            window.setTimeout(function() { $v_0($$t_1, null) }, 0)
        }
    },
    cacheValidation: function(currentViewTimestamp, updatedViewTimestamp) { return true },
    fireGridEvents: function(command) {
        this.fireControlEvent("OnRefresh", Sys.EventArgs.Empty);
        var $v_0 = $find(this.get_id());
        if (this.isLiteSubGrid() ||
            !IsNull(Mscrm.PageManager) && !IsNull(Mscrm.PageManager.get_instance()) && Mscrm.PageManager.isFlatUIPage())
            if (!IsNull($v_0)) {
                var $v_1 = {};
                $v_1["gridRefreshSourceElement"] = this.$2y_3;
                this.$2y_3 = null;
                $v_0.raiseEvent(27, $v_1)
            }
    },
    displayFailedMessage: function() {
        this.setGridData(String.format(this.$1u_3, CrmEncodeDecode.CrmHtmlEncode(window.LOCID_LOADING_GRID_FAILED)),
            true)
    },
    isSubGridStale: function(currentTimestamp, updatedTimestamp) {
        if (isNullOrEmptyString(currentTimestamp) || isNullOrEmptyString(updatedTimestamp)) return true;
        return currentTimestamp !== updatedTimestamp
    },
    $88_3: function() {
        var $v_0 = $get(this.get_id() + "_AppGridFilterSelector");
        !IsNull($v_0) && Mscrm.CrmUIComponent.crmCreate(Mscrm.AppGridFilterSelector, null, null, null, $v_0);
        var $v_1 = $get("AppGridFilterContainer");
        !IsNull($v_1) && Mscrm.CrmUIComponent.crmCreate(Mscrm.AppGridFilterContainer, null, null, null, $v_1)
    },
    $8C_3: function() {
        var $v_0 = $get(this.get_id() + "_JumpBar");
        if (!IsNull($v_0)) {
            this.registerChildWithXrmUIControl($v_0, "jumpBar", "jumpBar", this.get_id(), this.get_gridType());
            Mscrm.CrmUIComponent.crmCreate(Mscrm.AppGridJumpBar, null, null, null, $v_0)
        }
    },
    $5O_3: function() {
        var $v_0 = $get("gridBodyTable", this.get_element());
        if (!IsNull($v_0)) {
            !IsNull(this.$2_3) && this.$5Y_3();
            var $v_1 = {};
            $v_1["parentGridControl"] = this;
            var $v_2 = {};
            $v_2["onSelectionChange"] = this.$$d_$Bm_3;
            $v_2["onBeforeFormLoad"] = this.$$d_$7g_3;
            Mscrm.CrmUIComponent.crmCreate(Mscrm.AppGridDefaultDataControl, $v_1, $v_2, null, $v_0)
        }
    },
    $5Y_3: function() {
        if (!IsNull(this.$2_3)) {
            this.$2_3.remove_onSelectionChange(this.$$d_$Bm_3);
            this.$2_3.remove_onBeforeFormLoad(this.$$d_$7g_3);
            this.$2_3.dispose();
            this.$2_3 = null
        }
    },
    setGridData: function(html, updatePaging) {
        var $v_0 = this.GetParameter("expandable"), $v_1 = this.GetParameter("maxrowsbeforescroll");
        if ($v_0 === "1" && !parseInt($v_1, 10)) html = html + '<div style="height: 16px;"></div>';
        $get(this.get_id() + "_divDataArea").innerHTML = html;
        this.$5O_3();
        this.$7I_3(updatePaging)
    },
    finishShowLoadingMessage: function() {
        if (!IsNull(this.$2X_3)) {
            var $v_0 = $get(this.get_id() + "_divDataArea");
            if (!IsNull($v_0)) {
                $v_0.style.overflowY = this.$2X_3;
                this.$2X_3 = null
            }
        }
    },
    ClearPagingCookie: function() { this.SetProperty("pagingCookie", "") },
    $7J_3: function() {
        var $v_0 = $get(this.get_id() + "_PageInfo"), $v_1 = $get(this.get_id() + "_RecordSelectInfo");
        if (!IsNull($v_0)) this.$1g_3 = $get("_prevPageImg", $v_0);
        this.$1d_3 = !IsNull(this.$1g_3);
        if (this.$1d_3) this.$1r_3 = this.$1g_3.tabIndex;
        if (!IsNull($v_1)) {
            var $v_6 = XUI.Html.GetText($v_1);
            this.$4G_3 = !isNullOrEmptyString($v_6)
        } else this.$4G_3 = false;
        this.$1L_3 = this.GetProperty("refreshAsync") === "True";
        this.$2L_3 = this.GetParameter("InnerGridDisabled") !== "1" || this.isLiteSubGrid() ? true : false;
        this.GetParameter("LoadOnDemand") === "1" && this.registerHiddenTab();
        if (this.$1d_3)
            if (this.$2L_3) {
                this.$3G_3 = this.$$d_$Be_3;
                this.$3C_3 = this.$$d_$BB_3;
                this.$2s_3 = this.$$d_$9J_3;
                this.$2V_3 = $get("_nextPageImg", $v_0);
                this.$2I_3 = $get("fastRewind", $v_0);
                $addHandler(this.$1g_3, "click", this.$3G_3);
                $addHandler(this.$2V_3, "click", this.$3C_3);
                $addHandler(this.$2I_3, "click", this.$2s_3)
            } else this.DisablePaging();
        var $v_2 = $get("refreshButtonLink", this.get_element());
        if (!IsNull($v_2)) {
            $addHandler($v_2, "click", this.$$d_$Bt_3);
            $addHandler($v_2, "mouseover", this.$$d_$Bv_3);
            $addHandler($v_2, "mouseout", this.$$d_$Bu_3);
            this.registerChildWithXrmUIControl($v_2, "refresh", "refresh", this.get_id(), this.get_gridType())
        }
        var $v_3 = $get("filterButtonLink", this.get_element()), $v_4 = $get("gridbuttons", this.get_element());
        if (!IsNull($v_3)) {
            $addHandler($v_3, "click", this.$$d_$9E_3);
            $addHandler($v_3, "mouseover", this.$$d_$9G_3);
            $addHandler($v_3, "mouseout", this.$$d_$9F_3);
            if (!IsNull($v_4)) $v_4.style.width = "60px";
            this.registerChildWithXrmUIControl($v_3, "filterButton", "filterButton", this.get_id(), this.get_gridType())
        } else if (!IsNull($v_4)) $v_4.style.width = "30px";
        var $v_5 = $get(this.get_id() + "_findCriteria");
        if (!IsNull($v_5)) $v_5.disabled = !this.$2L_3;
        this.$Ah_3();
        this.$7H_3(true);
        this.$7I_3(true);
        this.HandleGridResize();
        this.$44_3 = new Date
    },
    $Ah_3: function() {
        var $v_0 = $get(this.get_id() + "_divDataArea");
        !IsNull($v_0) && $addHandler($v_0, "scroll", this.$$d_$4k_3);
        if (window.UseTabletExperience && window.LOCID_UI_DIR === "RTL") {
            $addHandler($v_0, "touchstart", this.$$d_$Aa_3);
            $addHandler($v_0, "touchmove", this.$$d_$AZ_3)
        }
    },
    registerHiddenTab: function() {
        var $v_0 = $find("crmForm");
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.GetTab(this.get_element(), false);
        if (!IsNull($v_1)) {
            var $v_2 = $find($v_1.id);
            if (!IsNull($v_2) && Mscrm.FormUITab === Object.getType($v_2))
                try {
                    if ($v_2.get_displayState() === "expanded") this.$7Q_3();
                    else $v_2.add_tabStateChange(this.$$d_$7E_3)
                } catch ($$e_3) {
                }
        }
    },
    $7E_3: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            $p0.remove_tabStateChange(this.$$d_$7E_3);
            this.$7Q_3()
        }
    },
    $7Q_3: function() {
        if (this.GetParameter("LoadOnDemand") === "1") {
            this.SetParameter("LoadOnDemand", "0");
            this.Refresh()
        }
    },
    $7H_3: function($p0) {
        if ($p0) this.$r_3 = null;
        var $v_0 = this.get_id() + "_gridBar", $v_1 = $get($v_0);
        if ($v_1) {
            var $v_2 = $v_1.rows[0];
            $addHandler($v_2, "keydown", this.$$d_$5w_3);
            $addHandler($v_2, "click", this.$$d_$5s_3);
            $addHandler($v_2, "mouseover", this.$$d_$A9_3);
            $addHandler($v_2, "mouseout", this.$$d_$A8_3);
            if (!IsNull($v_2))
                for (var $v_3 = $v_2
                             .getElementsByTagName("th"),
                    $v_4 = 0;
                    $v_4 < $v_3.length;
                    $v_4++)
                    !IsNull($v_3[$v_4].getAttribute("field")) &&
                        this.registerChildWithXrmUIControl($v_3[$v_4],
                            $v_3[$v_4].getAttribute("field").toString(),
                            "gridHeader",
                            this.get_id(),
                            this.get_gridType())
        }
    },
    registerChildWithXrmUIControl: function(element, childControlName, childControlType, parentId, gridType) {
        var $v_0 = {};
        $v_0["id"] = childControlName;
        $v_0["type"] = childControlType;
        if (!IsNull(gridType) && gridType.toString() === "1") $v_0["parentId"] = "Grid";
        else $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(element, $v_0)
    },
    $7I_3: function($p0) {
        var $v_0 = $get("gridBodyTable", this.get_element());
        window.IS_GRID_WITH_IMAGE && this.setImageUrl($v_0);
        if (!IsNull($v_0)) {
            this.$2_3 = $v_0.control;
            for (var $v_1 = $v_0
                         .getElementsByTagName("tr"),
                $v_2 = 0;
                $v_2 < $v_1.length;
                $v_2++)
                !IsNull($v_1[$v_2].getAttribute("oid")) &&
                    this.registerChildWithXrmUIControl($v_1[$v_2],
                        $v_1[$v_2].getAttribute("oid").toString(),
                        "gridRow",
                        this.get_id(),
                        this.get_gridType())
        }
        if (typeof $p0 === "undefined") $p0 = true;
        this.$2L_3 && $p0 && executeFunctionDeferred(this.$$d_$Cp_3, false, false);
        if (!this.$2_3) return;
        this.$4G_3 && this.$2_3.add_onSelectionChange(this.$$d_$85_3);
        this.$85_3(null, null)
    },
    $85_3: function($p0, $p1) {
        this.$Cr_3(this.$2_3.get_selectedRecords().length,
            this.$2_3.get_numberOfRecords(),
            this.$2_3.get_moreRecords(),
            this.$2_3.get_totalRecordCount(),
            this.$2_3.get_allRecordsCounted())
    },
    $Cr_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = 0, $v_1 = 0, $v_2 = this.$72_3();
        if ($p1) {
            var $v_B = this.getPageNumber();
            if (IsNull($v_B) || $v_B === -1) $v_B = 1;
            $v_0 = ($v_B - 1) * $v_2 + 1;
            if (!IsNull(this.$2_3.get_element().getAttribute("firstLevelItemsCount"))) {
                var $v_C = this.$2_3.get_element().getAttribute("firstLevelItemsCount");
                $v_1 = ($v_B - 1) * $v_2 + parseInt($v_C)
            } else $v_1 = ($v_B - 1) * $v_2 + $p1
        }
        if ($p3 >= 0)
            if ($v_1 > $p3 || $p1 < $v_2) {
                $p3 = $v_1;
                $p4 = !$p2
            }
        var $v_3 = $get(this.get_element().id + "_StatusBar");
        this.updateVisibility($p3, $v_2, $v_3);
        var $v_4 = $get(this.get_element().id + "_FirstItem");
        !IsNull($v_4) && XUI.Html.SetText($v_4, $v_0 + "");
        var $v_5 = $get(this.get_element().id + "_LastItem");
        !IsNull($v_5) && XUI.Html.SetText($v_5, $v_1 + "");
        var $v_6 = $get(this.get_element().id + "_ItemsTotal");
        !IsNull($v_6) && XUI.Html.SetText($v_6, this.$9z_3($p3, $p4));
        var $v_7 = $get(this.get_element().id + "_TotalCountInfo");
        if (!IsNull($v_7)) $v_7.style.display = $p3 < 0 ? "none" : "inline";
        var $v_8 = $get(this.get_element().id + "_ItemsSelected");
        !IsNull($v_8) && XUI.Html.SetText($v_8, $p0.toString());
        var $v_9 = $get("chkAll", this.get_element());
        if (!IsNull($v_9)) {
            $v_9.checked = $p0 === $p1 && $p1 > 0;
            $v_9.disabled = !$p1
        }
        var $v_A = $get(this.get_id() + "_gridBodyTable_checkBox_Image_All");
        if (!IsNull($v_A)) $v_A.style.visibility = !$p1 ? "hidden" : "visible"
    },
    updateVisibility: function(totalRecordCount, recordsPerPage, statusBar) { return },
    $Cp_3: function() {
        if (this.get_isDisposed()) return;
        if (this.$1d_3) {
            var $v_0 = false;
            if (!this.$2_3) $v_0 = false;
            else $v_0 = this.$2_3.get_moreRecords();
            var $v_1 = false,
                $v_2 = false,
                $v_3 = "0",
                $v_4 = $v_0 ? "1" : "0",
                $v_5 = "pointer",
                $v_6 = "pointer",
                $v_7 = this.GetProperty("pageNum"),
                $v_8 = $get(this.get_id() + "_PageInfo");
            XUI.Html.SetText($get("_PageNum", $v_8), $v_7);
            if (parseInt($v_7, 10) > 1) $v_3 = "1";
            else {
                $v_5 = "auto";
                $v_2 = true
            }
            if (!$v_0) {
                $v_6 = "auto";
                $v_1 = true
            }
            var $v_9 = $get("_prevPageImg", $v_8);
            if (!IsNull($v_9)) {
                var $v_E = XUI.Html.DomUtils.GetFirstChild($v_9);
                $v_9.style.cursor = $v_5;
                var $v_F = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/grid/page_L" + $v_3 + ".gif"));
                $v_E.src = $v_F.source;
                $v_E.className = $v_F.cssClass;
                if ($v_2) {
                    $v_E.setAttribute("disabled", "disabled");
                    $v_9.setAttribute("disabled", "disabled");
                    $v_9.tabIndex = -1
                } else {
                    $v_E.removeAttribute("disabled");
                    $v_9.removeAttribute("disabled");
                    $v_9.tabIndex = this.$1r_3
                }
                this.SetLinkAttributes($v_9, $v_2);
                this.$2g_3($v_9, $v_2)
            }
            var $v_A = $get("fastRewind", $v_8);
            if (!IsNull($v_A)) {
                var $v_G = XUI.Html.DomUtils.GetFirstChild($v_A);
                $v_A.style.cursor = $v_5;
                var $v_H = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/grid/page_FL" + $v_3 + ".gif"));
                $v_G.src = $v_H.source;
                $v_G.className = $v_H.cssClass;
                if ($v_2) {
                    $v_G.setAttribute("disabled", "disabled");
                    $v_A.setAttribute("disabled", "disabled");
                    $v_A.tabIndex = -1
                } else {
                    $v_G.removeAttribute("disabled");
                    $v_A.removeAttribute("disabled");
                    $v_A.tabIndex = this.$1r_3
                }
                this.SetLinkAttributes($v_A, $v_2);
                this.$2g_3($v_A, $v_2)
            }
            var $v_B = $get("_nextPageImg", $v_8);
            if (!IsNull($v_B)) {
                var $v_I = XUI.Html.DomUtils.GetFirstChild($v_B);
                $v_B.style.cursor = $v_6;
                var $v_J = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(window.CDNURL + "/_imgs/grid/page_R" + $v_4 + ".gif"));
                $v_I.src = $v_J.source;
                $v_I.className = $v_J.cssClass;
                if ($v_1) {
                    $v_I.setAttribute("disabled", "disabled");
                    $v_B.setAttribute("disabled", "disabled");
                    $v_B.tabIndex = -1
                } else {
                    $v_I.removeAttribute("disabled");
                    $v_B.removeAttribute("disabled");
                    $v_B.tabIndex = this.$1r_3
                }
                this.SetLinkAttributes($v_B, $v_1);
                this.$2g_3($v_B, $v_1)
            }
            var $v_C = $get("_prevPageInlineButton", this.get_element());
            if (!IsNull($v_C))
                if ($v_2) $v_C.style.display = "none";
                else {
                    $v_C.style.display = "block";
                    var $$t_M = this;
                    $addHandler($v_C,
                        "click",
                        function($p1_0) { $$t_M.$3g_3(parseInt($$t_M.GetProperty("pageNum"), 10) - 1) })
                }
            var $v_D = $get("_nextPageInlineButton", this.get_element());
            if (!IsNull($v_D))
                if ($v_1) $v_D.style.display = "none";
                else {
                    $v_D.style.display = "block";
                    var $$t_N = this;
                    $addHandler($v_D,
                        "click",
                        function($p1_0) { $$t_N.$3g_3(parseInt($$t_N.GetProperty("pageNum"), 10) + 1) })
                }
        }
    },
    $6Y_3: function() {
        var $v_0 = $get("_prevPageInlineButton", this.get_element());
        !IsNull($v_0) && $clearHandlers($v_0);
        var $v_1 = $get("_nextPageInlineButton", this.get_element());
        !IsNull($v_1) && $clearHandlers($v_1)
    },
    SetLinkAttributes: function(pageImage, isDisabled) {
        if (!IsNull(pageImage)) {
            var $v_0 = pageImage;
            if (isDisabled) {
                $v_0.href = "#";
                $v_0.style.cursor = "default";
                $removeHandler(pageImage, "click", Mscrm.GridControl.$6g)
            } else {
                if ($v_0.style.cursor === "default") $v_0.style.cursor = "auto";
                $addHandler(pageImage, "click", Mscrm.GridControl.$6g);
                $v_0.href = "javascript:onclick();";
                return false
            }
        }
    },
    DisablePaging: function() {
        var $v_0 = $get("_prevPageImg", this.get_element()), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        $v_0.style.cursor = "auto";
        var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/page_l0.gif"));
        $v_1.src = $v_2.source;
        $v_1.className = $v_2.cssClass;
        if (window.LOCID_UI_DIR === "RTL") {
            Mscrm.Utilities.cancelElementFlipping($v_1);
            Mscrm.Utilities.flipElementHorizontally($v_1)
        }
        $v_1.setAttribute("disabled", "disabled");
        $v_0.setAttribute("disabled", "disabled");
        this.$2g_3($v_0, true);
        var $v_3 = $get("fastRewind", this.get_element()), $v_4 = XUI.Html.DomUtils.GetFirstChild($v_3);
        $v_3.style.cursor = "auto";
        var $v_5 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/page_fl0.gif"));
        $v_4.src = $v_5.source;
        $v_4.className = $v_5.cssClass;
        if (window.LOCID_UI_DIR === "RTL") {
            Mscrm.Utilities.cancelElementFlipping($v_4);
            Mscrm.Utilities.flipElementHorizontally($v_4)
        }
        $v_4.setAttribute("disabled", "disabled");
        $v_3.setAttribute("disabled", "disabled");
        this.$2g_3($v_3, true);
        var $v_6 = $get("_nextPageImg", this.get_element()), $v_7 = XUI.Html.DomUtils.GetFirstChild($v_6);
        $v_6.style.cursor = "auto";
        var $v_8 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/grid/page_r0.gif"));
        $v_7.src = $v_8.source;
        $v_7.className = $v_8.cssClass;
        if (window.LOCID_UI_DIR === "RTL") {
            Mscrm.Utilities.cancelElementFlipping($v_7);
            Mscrm.Utilities.flipElementHorizontally($v_7)
        }
        $v_7.setAttribute("disabled", "disabled");
        $v_6.setAttribute("disabled", "disabled");
        this.$2g_3($v_6, true)
    },
    $2g_3: function($p0, $p1) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_0))
            if ($p1) {
                $v_0.alt = "";
                $v_0.title = ""
            } else if (isNullOrEmptyString($v_0.alt) && !IsNull($v_0.getAttribute("tempToolTip"))) {
                $v_0.alt = $v_0.getAttribute("tempToolTip").toString();
                $v_0.title = $v_0.alt
            }
    },
    HandleGridResize: function(domEvent) {
        window.UseTabletExperience && this.$9K_3();
        this.$4k_3(domEvent);
        this.handleStatusBar();
        this.$AH_3()
    },
    $AH_3: function() {
        var $v_0 = $get(this.get_id()), $v_1 = $get(this.get_id() + "_JumpBar");
        if (!IsNull($v_1))
            if (!IsNull($v_0) && $v_0.offsetWidth < 800) $v_1.style.visibility = "hidden";
            else $v_1.style.visibility = "visible"
    },
    $9K_3: function() {
        var $v_0 = $get(this.get_id() + "_gridBodyContainer");
        if (!IsNull($v_0)) {
            $v_0.setAttribute("temp", "temp");
            $v_0.removeAttribute("temp")
        }
    },
    $4k_3: function($p0) {
        if (IsNull($p0) && window.UseTabletExperience) return;
        var $v_0 = $get(this.get_id() + "_gridBodyContainer"),
            $v_1 = $get("fixedrow", $v_0),
            $v_2 = $get(this.get_id() + "_divDataArea");
        !IsNull($v_1) && !IsNull($v_2) && this.$Cj_3($v_1, $v_2)
    },
    $Aa_3: function($p0) {
        var $v_0 = $p0.rawEvent.touches;
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            this.$4J_3 = $v_0[0].pageX;
            this.$4K_3 = $v_0[0].pageY
        }
    },
    $AZ_3: function($p0) {
        var $v_0 = $p0.rawEvent.touches;
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = $v_0[0].pageX,
                $v_2 = $v_0[0].pageY,
                $v_3 = this.$4J_3 - $v_1,
                $v_4 = this.$4K_3 - $v_2,
                $v_5 = $get(this.get_id() + "_divDataArea");
            $v_5.scrollLeft += $v_3;
            $v_5.scrollTop += $v_4;
            this.$4J_3 = $v_1;
            this.$4K_3 = $v_2
        }
    },
    handleStatusBar: function() {
        var $v_0 = $get("gridStatusBar", this.get_element()),
            $v_1 = $get(this.get_id() + "_PageInfo"),
            $v_2 = $get("page_R0", $v_1),
            $v_3 = $get(this.get_id() + "_RecordSelectInfo"),
            $v_4 = $get(this.get_id() + "_RecordSelectEndMarker"),
            $v_5 = $get("fastRewind", $v_1);
        if (IsNull($v_0) || IsNull($v_3) || IsNull($v_1) || IsNull($v_2)) return;
        var $v_6 = $v_0.offsetWidth, $v_7 = $get(this.get_id() + "_ItemsSelectedInfo"), $v_8 = $v_3.style, $v_9 = null;
        if ($v_7) $v_9 = $v_7.style;
        if ($v_8.display !== "none" && !this.$2Z_3)
            if (window.LOCID_UI_DIR !== "RTL") {
                this.$2Z_3 = 2 * $v_4.offsetLeft;
                if ($v_7) this.$42_3 = 2 * $v_7.offsetLeft
            } else {
                this.$2Z_3 = 3 * $v_5.offsetLeft;
                this.$42_3 = 2 * $v_5.offsetLeft
            }
        if ($v_6 <= this.$2Z_3) {
            if ($v_6 <= this.$42_3) {
                if ($v_7) if ($v_9.display === "none") $v_9.display = "inline";
                if ($v_6 && $v_8.display !== "none") $v_8.display = "none"
            } else {
                if ($v_7) if ($v_9.display !== "none") $v_9.display = "none";
                if ($v_8.display === "none") $v_8.display = "inline"
            }
            return
        }
        if ($v_2.offsetLeft + $v_2.offsetWidth >= $v_1.offsetWidth) {
            $v_8.display = "none";
            this.$2Z_3 = $v_6;
            return
        }
        if ($v_8.display === "none") $v_8.display = "inline";
        if ($v_7) if ($v_9.display === "none") $v_9.display = "inline";
        window.UseTabletExperience && this.$CB_3()
    },
    $CB_3: function() {
        var $v_0 = $get(this.get_id() + "_PageInfo"),
            $v_1 = $get("gridStatusBar", this.get_element()),
            $v_2 = $get(this.get_id() + "_StatusBar"),
            $v_3 = $get("page_L0", $v_0),
            $v_4 = $get("page_R0", $v_0),
            $v_5 = $get(this.get_id() + "_RecordSelectInfo"),
            $v_6 = $v_4.getAttribute("hspace");
        if ($v_1.clientWidth > $v_2.clientWidth)
            if ($v_1.clientWidth - 4 * ($v_6 - 2) <= $v_2.clientWidth) {
                var $v_7 = Math.round(($v_1.clientWidth - $v_2.clientWidth) / 4);
                if ($v_7 <= $v_6 - 2) {
                    $v_4.setAttribute("hspace", $v_6 - $v_7);
                    $v_3.setAttribute("hspace", $v_6 - $v_7)
                } else $v_5.setAttribute("style", "display:none")
            } else $v_5.setAttribute("style", "display:none")
    },
    $Av_3: function($p0) {
        if (Mscrm.Utilities.isIE()) {
            var $v_0 = document.documentMode;
            if (IsNull($v_0)) $v_0 = Sys.Browser.version;
            if ($p0.scrollLeft > 0 || $v_0 <= 7) return false;
            return true
        } else if (Mscrm.Utilities.isFirefox()) return true;
        else if (Mscrm.Utilities.isEdge()) return $p0.scrollLeft <= 0;
        else return false
    },
    $Cj_3: function($p0, $p1) {
        var $v_0 = 0;
        if (window.LOCID_UI_DIR === "RTL") {
            var $v_1 = $p1.scrollLeft, $v_2 = this.$Av_3($p0);
            if ($v_2) $v_0 = -Math.abs($p1.scrollLeft);
            else if (Mscrm.Utilities.isIE7OrIE7CompactMode()) $v_0 = $p1.scrollLeft + $p1.offsetWidth - $p1.scrollWidth;
            else $v_0 = $p1.scrollLeft + $p1.clientWidth - $p1.scrollWidth;
            if ($v_0 !== parseInt($p0.style.marginRight, 10)) {
                $p0.style.marginRight = $v_0 + "px";
                $p1.scrollLeft = $v_1
            }
        } else {
            $v_0 = $p0.scrollLeft - $p1.scrollLeft;
            if ($v_0 !== parseInt($p0.style.marginLeft, 10)) {
                $p0.style.marginLeft = $v_0 + "px";
                $p1.scrollLeft = Math.abs($v_0)
            }
        }
    },
    $Be_3: function($p0) {
        var $v_0 = $get("_prevPageImg", this.get_element()).getAttribute("disabled");
        (IsNull($v_0) || !$v_0) && this.$3g_3(parseInt(this.GetProperty("pageNum"), 10) - 1)
    },
    $BB_3: function($p0) {
        var $v_0 = $get("_nextPageImg", this.get_element()).getAttribute("disabled");
        (IsNull($v_0) || !$v_0) && this.$3g_3(parseInt(this.GetProperty("pageNum"), 10) + 1)
    },
    $9J_3: function($p0) {
        var $v_0 = $get("fastRewind", this.get_element()).getAttribute("disabled");
        (IsNull($v_0) || !$v_0) && this.$3g_3(1)
    },
    $3g_3: function($p0) {
        try {
            if ($p0 > 1) this.$4E_3 = true;
            this.$6E_3($p0)
        } finally {
            this.$4E_3 = true
        }
    },
    $6E_3: function($p0) {
        if (this.$1x_3) return;
        if ($p0 < 1) return;
        var $v_0 = new Mscrm.ChangePageEventArgs($p0, this.getPageNumber());
        this.fireControlEvent("OnChangePage", $v_0);
        this.SetProperty("pageNum", $p0.toString());
        if ($v_0.breakEvent) return;
        this.$7h_3(true)
    },
    $5w_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        switch ($v_0) {
        case 13:
            $p0.target.tagName === "TH" && this.$5s_3($p0);
            break;
        case 32:
            ($p0.target.tagName === "IMG" || $p0.target.tagName === "INPUT") && this.$5s_3($p0);
            break;
        default:
            return
        }
    },
    $5s_3: function($p0) {
        var $v_0 = $p0.target;
        switch ($v_0.tagName) {
        case "IMG":
            if (Sys.UI.DomElement
                .containsCssClass($v_0, "ms-crm-List-Sortable")
            ) $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            else if ($v_0.id.toString().startsWith(this.get_id() + "_gridBodyTable_checkBox_Image")) {
                var $v_2 = $get("chkAll", this.get_element());
                if (!$v_2.checked) {
                    this.$2_3.SelectRecords(0, this.$2_3.get_dataTableBody().rows.length - 1, false);
                    $v_2.checked = true
                } else {
                    this.$2_3.UnselectRecords(null);
                    $v_2.checked = false
                }
            }
            break;
        case "LABEL":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "NOBR":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "A":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "TD":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode;
            break;
        case "INPUT":
            if (IsNull(this.$2_3)) return;
            if ($v_0.checked) this.$2_3.SelectRecords(0, this.$2_3.get_dataTableBody().rows.length - 1, false);
            else this.$2_3.UnselectRecords(null);
            return
        }
        if (this.$20_3 || !$v_0.getAttribute("field") || $v_0.className !== "ms-crm-List-Sortable") return;
        this.$6a_3($v_0);
        var $v_1 = this.GetProperty("enableMultiSort") === "true";
        this.$r_3.toggle($v_0.getAttribute("field"), $v_1 && $p0.shiftKey);
        this.$7u_3()
    },
    $A9_3: function($p0) {
        var $v_0 = $p0.target;
        switch ($v_0.tagName) {
        case "IMG":
            if (Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-List-Sortable")) {
                $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                break
            } else return;
        case "LABEL":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "NOBR":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "A":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode.parentNode;
            break;
        case "TD":
            $v_0 = $v_0.parentNode.parentNode.parentNode.parentNode;
            break
        }
        if ($v_0.className === "ms-crm-List-Sortable" &&
            $v_0.style.backgroundImage !==
            "url(/_imgs/theme/" + Xrm.Page.context.getCurrentTheme() + "/GridColumnGradientHover.png)") {
            if (!Mscrm.FeatureControl.get_Current()
                .isFeatureEnabled("FCB.Theme"))
                $v_0.style.backgroundImage = "url(/_imgs/theme/" +
                    window.CURRENT_THEME_TYPE +
                    "/GridColumnGradientHover.png)";
            this.$1b_3 = $v_0
        }
    },
    $A8_3: function($p0) {
        var $v_0 = $p0.rawEvent.relatedTarget || $p0.rawEvent.toElement;
        if (!IsNull(this.$1b_3) &&
            !(!IsNull($v_0) &&
                ($v_0 === this.$1b_3 || $v_0.parentNode === this.$1b_3 || $v_0.parentNode.parentNode === this.$1b_3))) {
            if (!Mscrm.FeatureControl.get_Current()
                .isFeatureEnabled("FCB.Theme")) this.$1b_3.style.backgroundImage = "";
            this.$1b_3 = null
        }
    },
    $7u_3: function() {
        for (var $v_0 = this.$r_3.columns.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$6j_3(this.$r_3.columns[$v_1].$1A_0), $v_3 = null;
            if (!IsNull($v_2)) $v_3 = this.$74_3($v_2);
            if (!$v_3) return;
            $v_3.style.visibility = "visible";
            Mscrm.Utilities.cancelElementFlipping($v_3);
            var $v_4 = "", $v_5 = Mscrm.InternalUtilities.Utilities.isHighContrastEnabled();
            if (!this.$r_3.columns[$v_1].$1F_0) {
                if (!$v_5) {
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_up", "");
                    $v_3.className += " ms-crm-ImageStrip-sorting_down"
                } else {
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_up", "");
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_down", "");
                    $v_3.src = "/_imgs/grid/sorting_down.png"
                }
                $v_4 = window.LOCID_ALT_COLUMNSORTORDER_DOWN
            } else {
                if (!$v_5) {
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_down", "");
                    $v_3.className += " ms-crm-ImageStrip-sorting_up"
                } else {
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_up", "");
                    $v_3.className = $v_3.className.replace(" ms-crm-ImageStrip-sorting_down", "");
                    $v_3.src = "/_imgs/grid/sorting_up.png"
                }
                $v_4 = window.LOCID_ALT_COLUMNSORTORDER_UP
            }
            $v_3.alt = $v_4;
            $v_3.title = $v_4;
            window.LOCID_UI_DIR === "RTL" && Mscrm.Utilities.flipElementHorizontally($v_3)
        }
        this.SetProperty("sortColumns", this.$r_3.serialize());
        this.ClearPagingCookie();
        this.$6E_3(1)
    },
    SortColumn: function(domElement, sortOrder, append) {
        domElement = domElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            .parentNode.parentNode;
        if (IsNull(domElement.getAttribute("field")) || domElement.className !== "ms-crm-List-Sortable") return;
        this.$6a_3(domElement);
        var $v_0 = this.GetProperty("enableMultiSort") === "true";
        this.$r_3.multipleSort(domElement.getAttribute("field"), sortOrder, $v_0 && append);
        this.$7u_3()
    },
    $6a_3: function($p0) {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.Theme")) $p0.style.backgroundImage = "";
        if (IsNull(this.$r_3)) {
            this.$r_3 = new Mscrm.SortColumns;
            this.$r_3.deserialize(this.GetProperty("sortColumns"))
        }
        for (var $v_0 = this.$r_3.columns.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$6j_3(this.$r_3.columns[$v_1].$1A_0);
            if (!IsNull($v_2)) {
                var $v_3 = this.$74_3($v_2);
                if (!IsNull($v_3)) $v_3.style.visibility = "hidden"
            }
        }
    },
    $74_3: function($p0) {
        var $v_0 = 0, $v_1 = null, $v_2 = $p0.getElementsByTagName("IMG");
        while ($v_0 < $v_2.length) {
            if (!IsNull($v_2[$v_0].className)) {
                for (var $v_3 = $v_2[$v_0].className.split(" "), $v_4 = 0; $v_4 < $v_3.length; $v_4++)
                    if ($v_3[$v_4] === "ms-crm-List-Sortable") {
                        $v_1 = $v_2[$v_0];
                        break
                    }
                if (!IsNull($v_1)) break
            }
            $v_0++
        }
        return $v_1
    },
    $6j_3: function($p0) {
        var $v_0 = 0, $v_1 = $get(this.get_id() + "_gridBar"), $v_2 = $v_1.rows[0].cells, $v_3 = $v_2.length;
        while ($v_0 < $v_3) {
            if ($v_2[$v_0].getAttribute("field") && $v_2[$v_0].getAttribute("field") === $p0) return $v_2[$v_0];
            $v_0++
        }
        return null
    },
    getColumnNames: function() {
        var $v_0 = $get(this.get_id() + "_divDataArea"), $v_1 = $v_0.getElementsByTagName("TABLE"), $v_2 = [];
        if (!IsNull($v_1)) {
            var $v_3 = $v_1[0], $v_4 = $v_3.getElementsByTagName("COL");
            if (!IsNull($v_4))
                for (var $v_5 = null, $v_6 = null, $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                    $v_5 = $v_4[$v_7];
                    $v_6 = $v_5.getAttribute("name");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && Array.add($v_2, $v_6)
                }
        }
        return $v_2
    },
    ResetPageNumber: function() { this.SetProperty("pageNum", "1") },
    getPageNumber: function() { return this.$1d_3 ? parseInt(this.GetProperty("pageNum"), 10) : -1 },
    $72_3: function() { return parseInt(this.GetProperty("recsPerPage"), 10) },
    $9o_3: function() { return parseInt(this.GetProperty("max"), 10) },
    $6x_3: function() {
        var $v_0 = $get("fixedrow"), $v_1 = 0;
        if (!IsNull($v_0)) $v_1 = $v_0.offsetLeft;
        return $v_1
    },
    HandleResize: function(domEvent, column, width) {
        if (!this.$1p_3) {
            var $v_0 = $get(this.get_element().id + "_gridBarCols");
            this.$1p_3 = $v_0.children[parseInt(XUI.Html.DomUtils.GetPrevSibling(column.get_element().parentNode)
                .cellIndex,
                10)]
        }
        if (!IsNull(width) && width > 0) {
            this.$1p_3.setAttribute("width", width + "px");
            !IsNull(this.$2_3) &&
                this.$2_3.resizeColumn(XUI.Html.DomUtils.GetPrevSibling(column.get_element().parentNode)
                    .getAttribute("field"),
                    width)
        } else {
            var $v_1 = 0, $v_2 = 0, $v_3 = this.$6x_3();
            if (window.LOCID_UI_DIR === "RTL") {
                $v_1 = this.$3A_3 - domEvent.screenX;
                $v_2 = this.$2z_3 - $v_3
            } else {
                $v_1 = domEvent.screenX - this.$3A_3;
                $v_2 = $v_3 - this.$2z_3
            }
            var $v_4 = $v_1 - $v_2, $v_5 = parseInt(this.$1p_3.getAttribute("width"), 10) + $v_4;
            if (($v_1 > 5 || $v_1 < -5) && $v_5 >= 1) {
                this.$3A_3 = domEvent.screenX;
                this.$2z_3 = $v_3;
                this.$1p_3.setAttribute("width", $v_5 + "px");
                !IsNull(this.$2_3) &&
                    this.$2_3.resizeColumn(XUI.Html.DomUtils.GetPrevSibling(column.get_element().parentNode)
                        .getAttribute("field"),
                        $v_5);
                this.$4k_3(domEvent)
            }
        }
    },
    HandleResizeCleanup: function(domEvent) {
        Mscrm.GlobalEvents.set_globalAllowDrag(false);
        this.$1p_3 = null;
        this.$7H_3(false)
    },
    HandleResizeStartup: function(domEvent) {
        this.$3A_3 = domEvent.screenX;
        this.$2z_3 = this.$6x_3();
        Mscrm.GlobalEvents.set_globalAllowDrag(true);
        var $v_0 = $get(this.get_id() + "_gridBar").rows[0];
        $removeHandler($v_0, "keydown", this.$$d_$5w_3);
        $removeHandler($v_0, "click", this.$$d_$5s_3);
        $removeHandler($v_0, "mouseover", this.$$d_$A9_3);
        $removeHandler($v_0, "mouseout", this.$$d_$A8_3)
    },
    GetProperty: function(name) {
        var $v_0 = $get(name, this.$4f_3());
        return !IsNull($v_0) ? $v_0.getAttribute("value") : null
    },
    SetProperty: function(name, value) {
        var $v_0 = this.$4f_3(), $v_1 = $get(name, $v_0);
        if (IsNull($v_1)) {
            $v_1 = document.createElement("div");
            $v_1.setAttribute("id", name);
            $v_0.appendChild($v_1)
        }
        $v_1.setAttribute("value", value)
    },
    HandleAutoResize: function(domEvent, column) {
        if (IsNull(this.$2_3)) return;
        var $v_0 = this.$2_3.autoResizeColumn(XUI.Html.DomUtils.GetPrevSibling(column.get_element().parentNode)
            .getAttribute("field"));
        if ($v_0 === -1) $v_0 = 10;
        this.HandleResize(domEvent, column, $v_0);
        this.HandleResizeCleanup(domEvent)
    },
    $9z_3: function($p0, $p1) {
        if ($p1) return String.format(window.LOCID_GRID_EXACTTOTALCOUNT, $p0);
        else return String.format(window.LOCID_GRID_APPROXTOTALCOUNT, $p0)
    },
    $Q_3: null,
    $6Q_3: false,
    $5y_3: false,
    $4u_3: false,
    $2G_3: null,
    $Az_3: function() {
        var $v_0 = false;
        if (this.GetParameter("AutoRefreshOnLoad") === "1") {
            this.SetParameter("LoadOnDemand", "0");
            this.SetParameter("AutoRefreshOnLoad", "0");
            $v_0 = true
        } else if (this.GetParameter("RenderAsync") === "1") {
            this.SetParameter("RenderAsync", "0");
            if (this.GetParameter("LoadOnDemand") !== "1") $v_0 = true
        }
        if ($v_0) {
            this.add_onRefresh(this.$$d_$5z_3);
            this.Refresh();
            this.setSubGridHeight(false)
        } else {
            this.$5O_3();
            this.$5z_3(null, null)
        }
        (this.get_gridType() === 1 || this.get_gridType() === 2) && this.$Bx_3()
    },
    $Bx_3: function() {
        var $v_0 = {};
        $v_0["entityName"] = this.GetParameter("entitydisplayname");
        $v_0["viewid"] = this.GetParameter("viewid");
        if (this.get_gridType() === 1) XrmUI.Manager.XrmUIPage = new Mscrm.XrmUIPageWrapper("Grid", $v_0);
        else if (this.get_gridType() === 2) {
            $v_0["parentEntityName"] = Xrm.Internal.getEntityName(Number.parseInvariant(this.GetParameter("oType")));
            XrmUI.Manager.XrmUIPage = new Mscrm.XrmUIPageWrapper("SubGrid", $v_0)
        }
    },
    isLiteSubGrid: function() {
        return this.GetParameter("LayoutStyle") === "LiteGridList" ||
            this.GetParameter("LayoutStyle") === "AssociatedLiteGridList"
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (this.get_gridType() === Mscrm.GridControl.hompageGrid) {
            var $v_0 = this.GetParameter("titleformat");
            setPageTitle(String.format($v_0, this.get_entityDisplayPluralName(), this.get_viewTitle()))
        }
        if (this.get_gridType() === Mscrm.GridControl.hompageGrid ||
            this
            .get_gridType() ===
            Mscrm.GridControl.associatedGrid &&
            this.isLiteSubGrid())
            !IsNull(this.get_$2j_3()) && this.get_$2j_3().addCssClass("ms-crm-View-Name-View-Lite");
        this.add_onRefresh(this.$$d_$BM_3);
        this.add_onResetComplete(this.$$d_$BM_3);
        !IsNull(this.$2_3) && this.$2_3.add_onSelectionChange(this.$$d_$BO_3);
        if (this.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            this.$Q_3 = this.get_element().parentNode;
            while (this.$Q_3)
                if (!IsNull(this.$Q_3.className) &&
                    Sys.UI.DomElement.containsCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout")) break;
                else this.$Q_3 = this.$Q_3.parentNode
        }
        this.$5y_3 = true;
        this.$4u_3 && this.$7B_3();
        this.$7J_3();
        !IsNull(this.get_$2j_3()) && window.setTimeout(this.get_$2j_3().$$d_syncToGridStatus, 0);
        this.activateControls();
        this.HandleGridResize();
        $addHandler(window, "load", this.$$d_$BI_3);
        $addHandler(window, "resize", this.$$d_HandleGridResize)
    },
    activateControls: function() {
        this.$8C_3();
        this.$88_3();
        this.initAppGridPresence(null, null)
    },
    addNewFromSubGridStandard: function(gridTypeCode, parentEntityTypeCode, parentEntityId) {
        switch (gridTypeCode) {
        case 1071:
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/sfa/address.js"));
            AddRelatedAddress(gridTypeCode, parentEntityTypeCode, parentEntityId);
            break;
        case 127:
            gridTypeCode = 9202;
            locAddRelatedToNonForm(gridTypeCode, parentEntityTypeCode, parentEntityId, "");
            break;
        default:
            locAddRelatedToNonForm(gridTypeCode, parentEntityTypeCode, parentEntityId, "");
            break
        }
    },
    updatePageNumberOnLastRecordDelete: function() {
        var $v_0 = false, $v_1 = this.getPageNumber();
        if ($v_1 > 1 && ($v_1 - 1) * this.$72_3() === this.get_totalRecordCount() - 1) {
            this.SetProperty("pageNum", ($v_1 - 1).toString());
            $v_0 = true
        }
        return $v_0
    },
    getFormData: function() {
        var $v_0 = this.getFormDataEntityId(), $v_1 = $find($v_0);
        return $v_1
    },
    getFormDataEntityId: function() {
        var $v_0 = "", $v_1 = $get(this.get_id() + "_span");
        if (!IsNull($v_1)) $v_0 = $v_1.getAttribute("FormDataEntityId");
        return $v_0
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$BE_3(null);
        $removeHandler(window, "load", this.$$d_$BI_3);
        if (window._events["resize"] != undefined) {
            $removeHandler(window, "resize", this.$$d_HandleGridResize);
            $removeHandler(window, "resize", this.$$d_handleAutoExpandRows)
        }
        this.$6Y_3();
        if (this.$2L_3 && this.$1d_3) {
            !IsNull(this.$1g_3) && $removeHandler(this.$1g_3, "click", this.$3G_3);
            !IsNull(this.$2V_3) && $removeHandler(this.$2V_3, "click", this.$3C_3);
            !IsNull(this.$2I_3) && $removeHandler(this.$2I_3, "click", this.$2s_3);
            this.$1g_3 = null;
            this.$2V_3 = null;
            this.$2I_3 = null;
            this.$3G_3 = null;
            this.$3C_3 = null;
            this.$2s_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $4f_3: function() { return $get("divGridProps", this.get_element()) },
    $4e_3: function() { return $get("divGridParams", this.get_element()) },
    getCellValue: function(columnName, rowId) {
        var $v_0 = this.getCellValueReturnObject(columnName, rowId, true);
        if (IsNull($v_0)) return $v_0;
        return $v_0.toString()
    },
    getCellValueReturnObject: function(columnName, rowId, shouldReturnString) {
        for (var $v_0 = this.GetRecordsFromInnerGrid(false), $v_1 = rowId.toUpperCase(), $v_2 = null, $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) {
            var $v_5 = $v_0[$v_4][0];
            if ($v_5.toUpperCase() === $v_1) {
                $v_2 = $v_0[$v_4];
                break
            }
        }
        if (!$v_2) return null;
        var $v_3 = $v_2[3];
        if (shouldReturnString) return this.getCellValueFromGridRow(columnName, $v_3);
        else return this.getCellValueFromGridRowReturnObject(columnName, $v_3, false)
    },
    getCellValueFromGridRow: function(columnName, rowElement) {
        var $v_0 = this.getCellValueFromGridRowReturnObject(columnName, rowElement, true);
        if (IsNull($v_0)) return $v_0;
        return $v_0.toString()
    },
    getCellValueFromGridRowReturnObject: function(columnName, rowElement, shouldReturnString) {
        var $v_0 = rowElement.getAttribute(columnName);
        if (!isNullOrEmptyString($v_0)) return $v_0;
        var $v_1 = this.$2_3.FindColumnIndex(columnName);
        if ($v_1 !== -1 && $v_1 < rowElement.children.length) {
            var $v_2 = XUI.Html.DomUtils.GetChildElementAt(rowElement, $v_1),
                $v_3 = $v_2.attributes.getNamedItem("RawValue");
            if ($v_3)
                if (shouldReturnString) return $v_3.value;
                else return this.$9x_3($v_2, $v_3);
            return XUI.Html.GetText($v_2)
        }
        return null
    },
    $9x_3: function($p0, $p1) {
        var $v_0 = $p0.attributes.getNamedItem("GridCellRawType");
        if ($v_0) {
            var $v_1 = Number.parseInvariant($v_0.value);
            switch ($v_1) {
            case 2:
                var $v_2 = new Xrm.LookupObject;
                $v_2.id = $p0.attributes.getNamedItem("RawLookupItemID").value;
                $v_2.name = $p0.attributes.getNamedItem("RawLookupItemName").value;
                $v_2.entityType = $p0.attributes.getNamedItem("RawLookupItemType").value;
                var $v_3 = new Array(1);
                $v_3[0] = $v_2;
                return $v_3;
            default:
                break
            }
        }
        return $p1.value
    },
    $8z_3: function() {
        if (this.$Q_3 && Sys.UI.DomElement.containsCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout")) {
            Sys.UI.DomElement.removeCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout");
            Sys.UI.DomElement.addCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout-Selected");
            var $v_0 = this.$Q_3.getElementsByTagName("tr")[0];
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Form-SubGrid-viewRow");
            this.$2P_3 = true;
            !IsNull(this.$2_3) && this.$2_3.reselectRows();
            this.handleAutoExpandRows(null)
        }
    },
    $C1_3: function() {
        if (this.$Q_3 && Sys.UI.DomElement.containsCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout-Selected")) {
            Sys.UI.DomElement.removeCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout-Selected");
            Sys.UI.DomElement.addCssClass(this.$Q_3, "ms-crm-Form-SubGrid-Layout");
            var $v_0 = this.$Q_3.getElementsByTagName("tr")[0];
            Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-Form-SubGrid-viewRow");
            if (!IsNull(this.$2_3)) {
                this.$2_3.saveSelectRows();
                this.$2_3.UnselectRecords(null)
            }
            this.$2P_3 = false;
            this.handleAutoExpandRows(null)
        }
    },
    $BO_3: function($p0, $p1) { this.raiseEventWithCheck(45, null) },
    setAsRibbonSelectedControl: function() {
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl") && setSelectedControl(this)
    },
    $BM_3: function($p0, $p1) {
        !IsNull(this.$2_3) && this.$2_3.add_onSelectionChange(this.$$d_$BO_3);
        this.raiseEventWithCheck(45, null)
    },
    $BI_3: function($p0) { executeFunctionDeferred(this.$$d_$6l_3, false, false) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 42:
            !IsNull(this.$2_3) && this.$2_3.add_onSelectionChange(this.$$d_$BO_3);
            this.raiseEventWithCheck(45, null);
            break;
        case 4:
            return this.$AF_3(parameters);
        case 50:
            var $v_0 = parameters["async"];
            if ($v_0) {
                var $v_3 = this.get_refreshAsynchronous();
                this.$1L_3 = true;
                this.$79_3(parameters);
                this.$1L_3 = $v_3
            } else this.$79_3(parameters);
            break;
        case 9:
            var $$t_A = this,
                $v_1 = function() {
                    if (sourceComponent) {
                        var $v_4 = sourceComponent._disposed,
                            $v_5 = !$v_4 &&
                                sourceComponent === $find(sourceComponent.get_id()) &&
                                !$$t_A.doNotFocusGridQuickFindOnLoad;
                        $v_5 && $$t_A.$6l_3()
                    }
                    $$t_A.$4u_3 = true;
                    $$t_A.$7B_3();
                    $$t_A.HandleGridResize()
                };
            executeFunctionDeferred($v_1, false, false);
            break;
        case 29:
            !IsNull(sourceComponent) && sourceComponent === this.get_rootManager() && this.$5a_3(null);
            break;
        case 38:
            var $v_6 = parameters["selectedControl"];
            if (!IsNull($v_6) &&
            ($v_6
                .get_id() ===
                this.get_id() ||
                Mscrm.Utilities.isDescendant($v_6.get_element(), this.get_element()))) this.$8z_3();
            else this.$C1_3();
            break;
        case 95:
            var $v_2 = false;
            if (this.$9X_3() === "visible") {
                if (this.get_gridType() === Mscrm.GridControl.hompageGrid) $v_2 = true;
                if (this.get_gridType() === Mscrm.GridControl.associatedGrid &&
                    XUI.Html.GetComputedStyle(window.frameElement.parentNode, "display") !== "none" &&
                    XUI.Html.GetComputedStyle(window.parent.frameElement, "visibility") === "visible") $v_2 = true
            }
            if ($v_2) {
                (IsNull(parameters) || !(Mscrm.NavBarSharedConstants.printPreviewAvailable in parameters)) &&
                    this.Print();
                return true
            }
            return false;
        case 87:
            if (this.get_gridType() === Mscrm.GridControl.hompageGrid) {
                this.getVisible() && this.setAsRibbonSelectedControl();
                setPageTitle(String.format(this.GetParameter("titleformat"),
                    this.get_entityDisplayPluralName(),
                    this.get_viewTitle()))
            }
            break
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    $9X_3: function() {
        var $v_0 = "";
        $v_0 = XUI.Html.GetComputedStyle(window.frameElement, "visibility");
        if ($v_0 === "inherit" && !IsNull(window.parent))
            $v_0 = XUI.Html.GetComputedStyle(window.parent.frameElement, "visibility");
        return $v_0
    },
    $7B_3: function() {
        if (!this.$5y_3) return;
        this.autoExpandGridControlRows();
        this.$4u_3 = false
    },
    autoExpandGridControlRows: function() {
        this.get_gridType() === Mscrm.GridControl.inlineSubGrid && this.handleAutoExpandRows(null)
    },
    doNotFocusGridQuickFindOnLoad: false,
    $6l_3: function() {
        if (!this.$6Q_3)
            if (this.get_gridType() !== Mscrm.GridControl.inlineSubGrid) {
                var $v_0 = $get(this.get_id() + "_findCriteria");
                if (!IsNull($v_0))
                    try {
                        $v_0.focus();
                        this.$6Q_3 = true
                    } catch ($$e_1) {
                    }
            }
    },
    SetParameter: function(name, value) {
        if (!IsNull(value)) value = value.toString();
        Mscrm.GridControl.setElementParameter(this.get_element(), name, value)
    },
    GetParameter: function(name) {
        var $v_0 = this.$4e_3(), $v_1 = null;
        if (!IsNull($v_0)) {
            var $v_2 = $get(name, $v_0);
            if (!IsNull($v_2)) $v_1 = $v_2.getAttribute("value")
        }
        return $v_1
    },
    $20_3: false,
    get_sortingDisabled: function() { return this.$20_3 },
    set_sortingDisabled: function(value) {
        this.$20_3 = value;
        return value
    },
    get_disabled: function() {
        var $v_0 = false;
        if (this.get_element()) $v_0 = this.GetParameter("InnerGridDisabled") === "1";
        return $v_0
    },
    set_disabled: function(value) {
        this.get_element() && this.SetParameter("InnerGridDisabled", value ? "1" : "0");
        return value
    },
    get_gridType: function() {
        if (this.$2N_3 === Mscrm.GridControl.gridTypeNone) {
            var $v_0 = this.GetParameter("GridType");
            if ($v_0 === "AssociatedGrid") this.$2N_3 = Mscrm.GridControl.associatedGrid;
            else if ($v_0 === "SubGrid") this.$2N_3 = Mscrm.GridControl.inlineSubGrid;
            else {
                var $v_1 = Mscrm.Utilities.getContentUrl(this), $v_2 = $v_1.get_path().toUpperCase();
                if (Mscrm.Utilities.isHomepageUrl($v_1)) this.$2N_3 = Mscrm.GridControl.hompageGrid
            }
        }
        return this.$2N_3
    },
    get_primaryFieldColumnIndex: function() {
        return !IsNull(this.$2_3)
            ? this.$2_3.get_primaryFieldColumnIndex()
            : -
            1
    },
    $79_3: function($p0) {
        var $v_0 = $p0["etc"];
        if ($v_0 === this.get_entityTypeCode()) this.Refresh();
        else if (this.get_entityTypeCode() === 4200) Mscrm.EntityPropUtil.isActivityTypeCode($v_0) && this.Refresh();
        else if (this.get_entityTypeCode() === 2029) Mscrm.EntityPropUtil.isQueueItemTypeCode($v_0) && this.Refresh()
    },
    $AF_3: function($p0) {
        if (!IsNull($p0) && !IsNull($p0["pageType"]) && $p0["pageType"] === "grid") {
            var $v_0 = {};
            $v_0["Id"] = this.GetParameter("viewid");
            $v_0["otc"] = this.GetParameter("otc");
            $v_0["etn"] = this.GetParameter("otn");
            $v_0["viewtype"] = this.GetParameter("viewtype");
            $v_0["title"] = this.GetParameter("viewTitle");
            $v_0["entitydisplayname"] = this.GetParameter("entitydisplayname");
            return $v_0
        } else return null
    },
    get_ribbonContextType: function() {
        var $v_0 = this.GetParameter("ribbonContext");
        if (isNullOrEmptyString($v_0)) $v_0 = "HomePageGrid";
        return $v_0
    },
    get_ribbonRelationshipType: function() {
        var $v_0 = this.GetParameter("relationshipType");
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = parseInt($v_0, 10);
            if (!isNaN($v_1)) return $v_1
        }
        return 0
    },
    get_entityTypeCode: function() { return parseInt(this.GetParameter("otc"), 10) },
    get_entityTypeName: function() { return this.GetParameter("otn") },
    get_entityDisplayName: function() { return this.GetParameter("entitydisplayname") },
    get_entityDisplayPluralName: function() { return this.GetParameter("entitypluraldisplayname") },
    get_selectedRecordCount: function() { return this.GetRecordsFromInnerGrid(true).length },
    get_recordCount: function() { return this.GetRecordsFromInnerGrid(false).length },
    get_allRecordIds: function() { return Mscrm.GridControl.$5p(this.GetRecordsFromInnerGrid(false)) },
    get_selectedIds: function() { return Mscrm.GridControl.$5p(this.GetRecordsFromInnerGrid(true)) },
    get_unselectedIds: function() { return Mscrm.GridControl.$5p(this.$75_3()) },
    get_allRecords: function() {
        return Mscrm.GridControl.$5W(this.GetRecordsFromInnerGrid(false), this.get_primaryFieldColumnIndex())
    },
    get_selectedRecords: function() {
        return Mscrm.GridControl.$5W(this.GetRecordsFromInnerGrid(true), this.get_primaryFieldColumnIndex())
    },
    get_unselectedRecords: function() {
        return Mscrm.GridControl.$5W(this.$75_3(),
            this
            .get_primaryFieldColumnIndex())
    },
    setFocus: function() {
        var $v_0 = $P_CRM("#" + this.get_id()).parents("tr")[0];
        if (!IsNull($v_0)) $v_0.scrollIntoView();
        else this.get_element().scrollIntoView()
    },
    setVisible: function(isVisible) {
        var $v_0 = $P_CRM("#" + this.get_id()).parents("tr")[0];
        if (!IsNull($v_0)) Sys.UI.DomElement.setVisible($v_0, isVisible);
        else Sys.UI.DomElement.setVisible(this.get_element(), isVisible)
    },
    getVisible: function() { return Sys.UI.DomElement.getVisible(this.get_element()) },
    disableOrEnableAllGridCheckBoxes: function(state) {
        for (var $v_0 = this.get_element().getElementsByTagName("INPUT"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if ($v_2.type === "checkbox") $v_2.disabled = state
        }
    },
    GetRecordsFromInnerGrid: function(onlySelectedRecords) {
        if (!IsNull(this.$2_3))
            return onlySelectedRecords ? this.$2_3.get_selectedRecords() : this.$2_3.get_allRecords();
        return []
    },
    $75_3: function() {
        for (var $v_0 = this
                     .GetRecordsFromInnerGrid(true),
            $v_1 = {},
            $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) $v_1[$v_0[$v_4][0]] = true;
        for (var $v_2 = this
                     .GetRecordsFromInnerGrid(false),
            $v_3 = [],
            $v_5 = 0;
            $v_5 < $v_2.length;
            $v_5++) if (IsNull($v_1[$v_2[$v_5][0]])) $v_3[$v_3.length] = $v_2[$v_5];
        return $v_3
    },
    get_viewTitle: function() {
        if (!IsNull(this.get_element())) {
            var $v_0 = this.GetParameter("viewTitle");
            return isNullOrEmptyString($v_0) ? "" : $v_0
        } else return null
    },
    get_viewIsUserOwned: function() {
        if (!IsNull(this.get_$2j_3())) return this.get_$2j_3().get_viewIsUserOwned();
        else return false
    },
    $L_3: null,
    get_$2j_3: function() {
        if (!this.$L_3) {
            var $v_0 = this.get_id() + "_SavedQuerySelector";
            this.$L_3 = $find($v_0);
            if (IsNull(this.$L_3)) {
                var $v_1 = this.get_id() + "_SavedNewQuerySelector";
                this.$L_3 = $find($v_1)
            }
        }
        return this.$L_3
    },
    get_hasMorePages: function() { return this.$2_3.get_moreRecords() },
    get_totalRecordCount: function() {
        if (!IsNull(this.$2_3)) return this.$2_3.get_totalRecordCount();
        return -1
    },
    get_pageRecordCount: function() { return this.get_recordCount() },
    get_customControlConfigurationId: function() { return this.$2G_3 },
    set_customControlConfigurationId: function(value) {
        this.$2G_3 = value;
        return value
    },
    ActivateAdd: function() {},
    addButtonClickHandler: function() {},
    addRecord: function() { this.addButtonClickHandler() },
    removeOnLoad: function(handler) { this.get_events().removeHandler("OnLoad", handler) },
    openAssociatedGrid: function() {
        Mscrm.Grid.openAssociatedGridViewOnLiteGridStandard(Xrm.Internal.getEntityCode(this.getEntityName()), this)
    },
    getGrid: function() { return new Mscrm.XrmControlGridWrapper(this) },
    getChart: function() { return new Mscrm.XrmChartWrapper(this) },
    getRelationship: function() {
        var $v_0 = new Xrm.XrmEntityRelationship;
        $v_0.name = this.getRelationshipName();
        $v_0.relationshipType = this.getRelationshipType();
        $v_0.roleType = this.getRelationshipRoleOrdinal();
        return $v_0
    },
    getViewSelector: function() { return new Mscrm.XrmViewSelectorWrapper(this) },
    addOnLoad: function(handler) { this.get_events().addHandler("OnLoad", handler) },
    changeVisualizationTo: function(id, parameters, constructor, stylesToLoad, scriptsToLoad, configurationIdString) {
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(configurationIdString);
        if (!this.$2G_3.equals($v_0) ||
            !(new Microsoft.Crm.Client.Core.Framework.Guid(id))
            .equals(Mscrm.TurboForm.Common.FormControlClassId.gridControl)) {
            var $v_1 = Mscrm.DataSetControl.findOrCreateComponent(this.get_id(), this.get_subscribedEvents());
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) {
                $v_1.toggleGrid();
                $v_1.changeVisualizationTo(id,
                    parameters,
                    constructor,
                    stylesToLoad,
                    scriptsToLoad,
                    configurationIdString)
            }
        }
    },
    isConfigurationSame: function(configurationId) {
        return this.$2G_3.equals(new Microsoft.Crm.Client.Core.Framework.Guid(configurationId))
    },
    getEntityName: function() { return this.GetParameter("otn") },
    getRelationshipAttributeName: function() { throw Error.create("NotImplementedException") },
    getRelationshipName: function() {
        var $v_0 = this.GetParameter("relName");
        return Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0) ? "" : $v_0
    },
    getRelationshipRoleOrdinal: function() {
        var $v_0 = this.GetParameter("roleOrd");
        if (isNullOrEmptyString($v_0)) return -1;
        var $v_1 = Number.parseInvariant($v_0);
        return isNaN($v_1) ? -1 : $v_1
    },
    getRelationshipType: function() {
        switch (this.get_ribbonRelationshipType()) {
        case 2:
            return 1;
        case 1:
            return 0;
        default:
            return -1
        }
    },
    $3p_3: false,
    $e_3: null,
    $1H_3: null,
    $3D_3: null,
    $4B_3: null,
    $1B_3: null,
    $3S_3: false,
    $31_3: true,
    $3E_3: null,
    get_presenceViews: function() {
        if (IsNull(this.$3E_3)) this.$3E_3 = [];
        return this.$3E_3
    },
    set_presenceViews: function(value) {
        this.$3E_3 = value;
        return value
    },
    InitPresence: function() { this.initAppGridPresence(null, null) },
    $6c_3: function() {
        if (!this.$3p_3) {
            try {
                this.$e_3 = createPresenceControlInstance()
            } catch ($$e_0) {
            }
            this.$3p_3 = true;
            if (!IsNull(this.$e_3)) this.$e_3.OnStatusChange = this.$$d_$BJ_3
        }
        return !IsNull(this.$e_3)
    },
    $5a_3: function($p0) {
        if (!IsNull(this.$e_3)) {
            destroyPresenceControlInstance(this.$e_3);
            this.$e_3 = null;
            this.$3p_3 = false
        }
        for (var $v_0 = 0; $v_0 < this.get_presenceViews().length; $v_0++) {
            var $v_1 = this.get_presenceViews()[$v_0];
            $v_1.remove_mouseOverEvent(this.$$d_$Bd_3);
            $v_1.remove_mouseOutEvent(this.$$d_$Bc_3);
            $v_1.remove_focusInEvent(this.$$d_$BZ_3);
            $v_1.remove_focusOutEvent(this.$$d_$Ba_3);
            $v_1.remove_keyDownEvent(this.$$d_$Bb_3);
            $v_1.dispose()
        }
        Array.clear(this.get_presenceViews())
    },
    initAppGridPresence: function(sender, e) {
        this.$31_3 = true;
        if (_bPresenceEnabled) {
            this.remove_onRefresh(this.$$d_initAppGridPresence);
            this.add_onRefresh(this.$$d_initAppGridPresence);
            this.$2T_3 = window.setTimeout(this.$$d_prepareEnablePresence, 100)
        }
    },
    $BE_3: function($p0) {
        try {
            this.$2T_3 !== -1 && window.clearTimeout(this.$2T_3);
            this.$2T_3 = -1;
            this.$31_3 = false;
            this.$5a_3($p0)
        } catch ($$e_1) {
        }
    },
    $9v_3: function() {
        var $v_0 = [];
        if (IsNull(this.$2_3) || this.$2_3.get_isDisposed()) return $v_0;
        var $v_1, $v_2 = {};
        this.$1H_3 = {};
        var $v_3 = this.$2_3.get_element().getElementsByTagName("SPAN");
        for ($v_1 = 0; $v_1 < $v_3.length; $v_1++) {
            var $v_4 = $v_3[$v_1];
            hasSipAttribute($v_4) &&
                this.$8d_3($v_0, $v_2, $v_4, parseInt($v_4.getAttribute("otype")), $v_4.getAttribute("oid"))
        }
        return $v_0
    },
    $8d_3: function($p0, $p1, $p2, $p3, $p4) {
        if (!IsNull($p3) && IsPresenceType($p3)) {
            if (IsNull(this.$1H_3)) this.$1H_3 = {};
            if (IsNull(this.$1H_3[$p4])) this.$1H_3[$p4] = [];
            this.$1H_3[$p4].push($p2);
            if ($p1[$p4] !== 1) {
                $p0.push(createPresenceInfo($p4, $p2.getAttribute("sip")));
                $p1[$p4] = 1
            }
        }
    },
    $7d_3: function($p0, $p1, $p2) {
        var $v_0 = getPresenceUri($p1), $v_1 = new Mscrm.Presence.PresenceStatus;
        $v_1.set_status($p1);
        if (!IsNull(this.$1H_3)) {
            var $v_2 = this.$1H_3[$p0];
            if (!IsNull($v_2))
                for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                    var $v_4 = $v_2[$v_3];
                    if (!IsNull($v_4) && $v_4.tagName.toUpperCase() === "SPAN") {
                        var $v_5 = XUI.Html.DomUtils.GetFirstChild($v_4);
                        if (!IsNull($v_5) && !IsNull($v_5.tagName) && $v_5.tagName.toUpperCase() === "IMG") {
                            $v_5.className = "ms-crm-Lookup-PresenceItem";
                            $v_5.src = $v_0
                        } else {
                            var $v_8 = '<IMG class=ms-crm-Lookup-PresenceItem alt="" src="' +
                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0) +
                                '">' +
                                $v_4.innerHTML;
                            $v_4.innerHTML = $v_8;
                            $v_5 = XUI.Html.DomUtils.GetFirstChild($v_4)
                        }
                        var $v_6 = new Mscrm.Proxies.DomElementProxy;
                        $v_6.set_element($v_5);
                        var $v_7 = new Mscrm.GridPresenceView;
                        $v_7.set_element($v_6);
                        $v_7.set_status($v_1);
                        $v_7.initialize();
                        $p2 && this.$8Y_3($v_7)
                    }
                }
        }
        this.$3D_3[$p0] = $p1
    },
    $68_3: function($p0) {
        this.$e_3.HideOOUI();
        if (!IsNull(this.$3S_3) && !this.$3S_3 && Sys.Browser.version === 6) {
            this.$5a_3($p0);
            this.$6c_3()
        }
    },
    $7c_3: function($p0, $p1) {
        var $v_0 = $p0.target, $v_1 = null;
        if ($v_0.parentNode.tagName.toUpperCase() === "SPAN") $v_1 = $v_0.parentNode.getAttribute("oid");
        if (!IsNull($v_1)) {
            var $v_2 = getImageLocation($v_0), $v_3 = $v_2.oouiX, $v_4 = $v_2.oouiY, $v_5 = this.$4B_3[$v_1];
            this.$e_3.ShowOOUI($v_5, $p1, $v_3, $v_4)
        }
    },
    $BJ_3: function($p0, $p1, $p2) { if (!IsNull(this.$3D_3)) this.$3D_3[$p2] !== $p1 && this.$7d_3($p2, $p1, false) },
    $BY_3: function($p0) {
        if (!this.$1B_3.InscrollFunc) {
            this.$1B_3.InscrollFunc = true;
            this.$68_3($p0);
            this.$1B_3.InscrollFunc = false
        }
        !IsNull(this.$1B_3.OriginalScrollFunc) && this.$1B_3.OriginalScrollFunc($p0)
    },
    prepareEnablePresence: function() {
        if (this.get_isDisposed() || IsNull(this.$2_3) || this.$2_3.get_isDisposed()) return;
        this.$2T_3 = -1;
        if (!this.$31_3 || IsNull(this.get_id())) return;
        try {
            var $v_0 = this.$9v_3();
            if ($v_0.length > 0 && this.$6c_3() && !IsNull(this.$e_3) && this.$e_3.PresenceEnabled) {
                this.$3D_3 = {};
                this.$4B_3 = {};
                if (IsNull(this.$1B_3)) {
                    var $v_1 = $get(this.get_id() + "_divDataArea");
                    if (!IsNull($v_1)) {
                        this.$1B_3 = {};
                        this.$1B_3.OriginalScrollFunc = $v_1.scroll;
                        this.$1B_3.InscrollFunc = false;
                        $addHandler($v_1, "scroll", this.$$d_$BY_3)
                    }
                }
                this.$98_3($v_0)
            }
            if (IsNull(this.$3S_3)) this.$3S_3 = $v_0.length > 0
        } catch ($v_2) {
            if (this.$31_3) throw Error.create($v_2.message)
        }
    },
    $98_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0];
            if (!IsNull($v_1)) {
                var $v_2 = $v_1.oid, $v_3 = $v_1.sipuri;
                if (!IsNull(this.$e_3) && !IsNull($v_3) && $v_3.length > 0) {
                    var $v_4 = this.$e_3.GetStatus($v_3, $v_2);
                    this.$4B_3[$v_2] = $v_3;
                    this.$7d_3($v_2, $v_4, true)
                }
            }
        }
    },
    $8Y_3: function($p0) {
        $p0.add_mouseOverEvent(this.$$d_$Bd_3);
        $p0.add_mouseOutEvent(this.$$d_$Bc_3);
        $p0.add_focusInEvent(this.$$d_$BZ_3);
        $p0.add_focusOutEvent(this.$$d_$Ba_3);
        $p0.add_keyDownEvent(this.$$d_$Bb_3);
        Array.add(this.get_presenceViews(), $p0)
    },
    $Bb_3: function($p0, $p1) {
        var $v_0 = $p1.$1G_0;
        $v_0.altKey && $v_0.shiftKey && $v_0.keyCode === 121 && this.$e_3.DoAccelerator()
    },
    $Ba_3: function($p0, $p1) { this.$68_3($p1.$1G_0) },
    $BZ_3: function($p0, $p1) { this.$7c_3($p1.$1G_0, 0) },
    $Bc_3: function($p0, $p1) { this.$68_3($p1.$1G_0) },
    $Bd_3: function($p0, $p1) { this.$7c_3($p1.$1G_0, 0) }
};
Mscrm
    .DynamicPropertyOptionSetItemInlineEditGrid = function() { this.$Z_0 = ["{5A6D9C40-519F-4113-8CFE-B2FDD36D694D}"] };
Mscrm.DynamicPropertyOptionSetItemInlineEditGrid.prototype = {
    $2H_0: null,
    $4p_0: function($p0) {
        for (var $v_0 = 0;
            $v_0 < this.$Z_0.length;
            $v_0++
        ) if ($p0.toLowerCase() === this.$Z_0[$v_0].toLowerCase()) return true;
        return false
    },
    updateControlStyle: function(attributeMetadata, inlineEditGridControl) {
        if (attributeMetadata.LogicalName.toLowerCase().startsWith("dynamicpropertyoptionname")) {
            var $v_0 = $get(attributeMetadata.LogicalName).parentNode, $v_1 = $get($v_0.parentNode.id);
            if (this.$2H_0.isNewRecord($v_1)) {
                var $v_2 = inlineEditGridControl, $$t_5 = this;
                Mscrm.OnLoadDeferredExecutor.queueCallback(function() { $v_2.setFocus() }, 0)
            }
        }
        return
    },
    gridPreInitialize: function(grid) {
        if (grid.$G_0) grid.$G_0 = this.$4p_0(grid.$0_0.GetParameter("viewid"));
        grid.$W_0 = true;
        this.$2H_0 = grid
    },
    getGridCellInlineControlMode: function(grid, currentRow, attributeName) { return "normal" },
    gridRowSave: function(grid, currentRow) { this.$51_0(grid, "dynamicpropertyoptionsetitem", currentRow) },
    $51_0: function($p0, $p1, $p2) {
        var $v_0 = "{00000000-0000-0000-0000-000000000000}", $v_1 = $p0.isNewRecord($p2);
        if (!$v_1) $v_0 = $p0.getHiddenTableCellValue($p2, "oid");
        var $v_2 = $p0.getTableCellValue($p2, "dynamicpropertyoptionname"),
            $v_3 = $p0.getTableCellValue($p2, "dynamicpropertyoptionvalue"),
            $v_4 = $p0.getTableCellValue($p2, "dynamicpropertyoptiondescription");
        if (!IsNull($v_2) && !IsNull($v_3)) {
            if (isNullOrEmptyString($v_0)) $v_0 = "{00000000-0000-0000-0000-000000000000}";
            if ($v_3 < 0) {
                alert(window.LOCID_TOTAL_TERMS_NEGATIVE);
                var $v_5 = {};
                $v_5["DisplayText"] = window.LOCID_TOTAL_TERMS_NEGATIVE;
                var $v_6 = {};
                $v_6["_error"] = $v_5;
                $p0.onRowSaveFailure($v_6)
            } else {
                var $v_7 = Mscrm.InlineEditDataServiceProxy.get_busy();
                if (!$v_7)
                    Mscrm.InlineEditDataServiceProxy
                        .createDynamicPropertyOptionSetItem($p1,
                            $v_2,
                            $v_3,
                            $v_4,
                            $v_0,
                            $p0.$$d_onRowSaveSuccess,
                            $p0.$$d_onRowSaveFailure);
                else $p0.handleAutoSaveNotTriggered()
            }
        } else {
            $p0.resetCurrentSaveRow();
            $p0.handleAutoSaveNotTriggered()
        }
    },
    gridRowInitialize: function(grid, currentRow) { !IsNull(currentRow) && grid.$0_0.$2_3.removeDblClickHandler() },
    gridAttributeInitialValue: function(currentRow, grid, currentInitialValue, attributeMetadata) {
        var $v_0 = currentInitialValue;
        switch (attributeMetadata.LogicalName) {
        case "dynamicpropertyoptionname":
            if (isNullOrEmptyString(currentInitialValue)) $v_0 = "";
            break;
        case "dynamicpropertyoptionvalue":
            if (!isNullOrEmptyString(currentInitialValue)) {
                var $v_1 = attributeMetadata.LogicalName + "_rawvalue";
                $v_0 = grid.getHiddenTableCellValue(currentRow, $v_1)
            } else $v_0 = this.$9t_0(grid).toString();
            break;
        case "dynamicpropertyoptiondescription":
            if (isNullOrEmptyString(currentInitialValue)) $v_0 = "";
            break
        }
        return $v_0
    },
    $9t_0: function($p0) {
        var $v_0 = 0,
            $v_1 = 0,
            $v_2 = $p0.$0_0.get_element(),
            $v_3 = $P_CRM("#gridBodyTable", $v_2),
            $v_4 = $v_3.children("tbody").children("tr");
        if (!IsNull($v_4)) {
            $v_0 = $v_4.length;
            for (var $v_5 = [], $v_6 = 0; $v_6 < $v_0; $v_6++) {
                var $v_7 = $v_4[$v_6], $v_8 = $p0.getTableCellValue($v_7, "dynamicpropertyoptionvalue");
                !IsNull($v_8) && !Array.contains($v_5, $v_8) && Array.add($v_5, $v_8)
            }
            if ($v_5.length > 0) {
                var $$t_D = this;
                $v_5.sort(function($p1_0, $p1_1) { return $p1_0 - $p1_1 });
                $v_1 = $v_5[0];
                for (var $v_9 = 0; $v_9 < $v_5.length; ++$v_9)
                    if ($v_1 === $v_5[$v_9]) ++$v_1;
                    else if ($v_1 < $v_5[$v_9]) break
            }
        }
        return $v_1
    },
    gridRowSaveSuccessAction: function(grid, currentSaveRow, response) {
        this.$1l_0(grid, currentSaveRow, response, "dynamicpropertyoptionname");
        this.$1l_0(grid, currentSaveRow, response, "dynamicpropertyoptionvalue");
        this.$1l_0(grid, currentSaveRow, response, "dynamicpropertyoptiondescription");
        this.$6P_0(grid, currentSaveRow, response);
        return
    },
    initializeGridViewComplete: function(dataTable) { return },
    $6P_0: function($p0, $p1, $p2) {
        var $v_0 = "_entity";
        if (!($v_0 in $p2)) return;
        var $v_1 = $p2[$v_0];
        if (IsNull($v_1)) return;
        this.$6O_0($p0, $p1, $v_1);
        return
    },
    $1l_0: function($p0, $p1, $p2, $p3) {
        if (!($p3 in $p2)) return;
        var $v_0 = $p2[$p3], $v_1;
        if ($p3 === "dynamicpropertyoptionvalue") $v_1 = $v_0["raw"];
        else $v_1 = $v_0["value"];
        if (!IsNull($v_1)) {
            var $v_2 = this.$2H_0.getAttributeType($p3);
            switch ($v_2) {
            case "int":
            case "picklist":
                $p0.setTableCellValue($p1, $p3, parseInt($v_1), true);
                $p0.setHiddenTableCellValue($p1, $p3, parseInt($v_1));
                break;
            default:
                $v_1 = CrmEncodeDecode.CrmXmlDecode($v_1);
                $p0.setTableCellValue($p1, $p3, CrmEncodeDecode.CrmHtmlDecode($v_1), true);
                $p0.setHiddenTableCellValue($p1, $p3, CrmEncodeDecode.CrmHtmlDecode($v_1));
                break
            }
        }
    },
    $6O_0: function($p0, $p1, $p2) {
        var $v_0 = $p2["Id"];
        if (IsNull($v_0)) return;
        $p0.setHiddenTableCellValue($p1, "oid", $v_0);
        if ($p0.isNewRecord($p1)) {
            var $v_1 = $p1.querySelector("div.ms-crm-List-DeleteContainer-Div");
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
                if (!IsNull($v_2))
                    $v_2.id = "gridBodyTable_delete_" + $p1.getAttribute("oid") + "_" + $p1.getAttribute("rowindex")
            }
        }
    },
    gridRowSaveFailureAction: function(grid, currentSaveRow, response) { return },
    disposeGridRow: function(currentRow) { return }
};
Mscrm.CategoryInlineEditGrid = function() { this.$Z_0 = ["{F9D2D076-C806-4DB1-A24B-92B91D78FF22}"] };
Mscrm.CategoryInlineEditGrid.prototype = {
    $2H_0: null,
    $4p_0: function($p0) {
        for (var $v_0 = 0;
            $v_0 < this.$Z_0.length;
            $v_0++
        ) if ($p0.toLowerCase() === this.$Z_0[$v_0].toLowerCase()) return true;
        return false
    },
    updateControlStyle: function(attributeMetadata, inlineEditGridControl) { return },
    gridPreInitialize: function(grid) {
        if (grid.$G_0) grid.$G_0 = this.$4p_0(grid.$0_0.GetParameter("viewid"));
        grid.$W_0 = true;
        this.$2H_0 = grid
    },
    getGridCellInlineControlMode: function(grid, currentRow, attributeName) {
        if (attributeName === "categorynumber") return "locked";
        else return "normal"
    },
    gridRowSave: function(grid, currentRow) {
        this.$3j_0(grid, currentRow);
        this.$51_0(grid, "category", currentRow)
    },
    $51_0: function($p0, $p1, $p2) {
        var $v_0 = "{00000000-0000-0000-0000-000000000000}", $v_1 = 0, $v_2 = $p0.isNewRecord($p2);
        if (!$v_2) $v_0 = $p0.getHiddenTableCellValue($p2, "oid");
        var $v_3 = $p0.getTableCellValue($p2, "title"), $v_4 = $p0.getHiddenTableCellValue($p2, "sequencenumber");
        if (!IsNull($v_4)) $v_1 = $v_4;
        if (!IsNull($v_3)) {
            if (isNullOrEmptyString($v_0)) $v_0 = "{00000000-0000-0000-0000-000000000000}";
            var $v_5 = Mscrm.InlineEditDataServiceProxy.get_busy();
            if (!$v_5)
                Mscrm.InlineEditDataServiceProxy
                    .createCategory($v_3, $v_0, $v_1, $p0.$$d_onRowSaveSuccess, $p0.$$d_onRowSaveFailure);
            else {
                $p0.handleAutoSaveNotTriggered();
                $p0.addOrRemoveImage($p2, "")
            }
        } else {
            $p0.resetCurrentSaveRow();
            $p0.handleAutoSaveNotTriggered()
        }
    },
    gridRowInitialize: function(grid, currentRow) {},
    gridAttributeInitialValue: function(currentRow, grid, currentInitialValue, attributeMetadata) {
        var $v_0 = currentInitialValue;
        switch (attributeMetadata.LogicalName) {
        case "title":
            if (isNullOrEmptyString(currentInitialValue)) $v_0 = "";
            break
        }
        return $v_0
    },
    gridRowSaveSuccessAction: function(grid, currentSaveRow, response) {
        grid.isNewRecord(currentSaveRow) && grid.refreshGrid();
        this.$1l_0(grid, currentSaveRow, response, "title");
        this.$6P_0(grid, currentSaveRow, response);
        grid.addOrRemoveImage(currentSaveRow, "");
        return
    },
    initializeGridViewComplete: function(dataTable) { return },
    $6P_0: function($p0, $p1, $p2) {
        var $v_0 = "_entity";
        if (!($v_0 in $p2)) return;
        var $v_1 = $p2[$v_0];
        if (IsNull($v_1)) return;
        this.$6O_0($p0, $p1, $v_1);
        return
    },
    $1l_0: function($p0, $p1, $p2, $p3) {
        if (!($p3 in $p2)) return;
        var $v_0 = $p2[$p3], $v_1 = $v_0["value"];
        if (!IsNull($v_1)) {
            $v_1 = CrmEncodeDecode.CrmXmlDecode($v_1);
            $p0.setTableCellValue($p1, $p3, CrmEncodeDecode.CrmHtmlDecode($v_1), true);
            $p0.setHiddenTableCellValue($p1, $p3, CrmEncodeDecode.CrmHtmlDecode($v_1))
        }
    },
    $6O_0: function($p0, $p1, $p2) {
        var $v_0 = $p2["Id"];
        if (IsNull($v_0)) return;
        $p0.setHiddenTableCellValue($p1, "oid", $v_0);
        if ($p0.isNewRecord($p1)) {
            var $v_1 = $p1.querySelector("div.ms-crm-List-DeleteContainer-Div");
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
                if (!IsNull($v_2))
                    $v_2.id = "gridBodyTable_delete_" + $p1.getAttribute("oid") + "_" + $p1.getAttribute("rowindex")
            }
        }
    },
    gridRowSaveFailureAction: function(grid, currentSaveRow, response) {
        grid.addOrRemoveImage(currentSaveRow, "");
        return
    },
    disposeGridRow: function(currentRow) { return },
    $3j_0: function($p0, $p1) {
        var $v_0 = window.CDNURL + "/_imgs/btn_lookup_resolving.gif";
        $p0.addOrRemoveImage($p1, $v_0)
    }
};
Mscrm.EntitlementChannelInlineEditGrid = function() {
    this.$Z_0 = ["{A287D65E-D9FC-49B4-873E-D35CD58BB9A9}", "{68479526-2F13-49C5-AE26-12F50C057CD8}"]
};
Mscrm.EntitlementChannelInlineEditGrid.prototype = {
    $1s_0: null,
    $4p_0: function($p0) {
        for (var $v_0 = 0;
            $v_0 < this.$Z_0.length;
            $v_0++
        ) if ($p0.toLowerCase() === this.$Z_0[$v_0].toLowerCase()) return true;
        return false
    },
    gridPreInitialize: function(grid) {
        if (grid.$G_0) grid.$G_0 = this.$4p_0(grid.$0_0.GetParameter("viewid"));
        grid.$W_0 = true;
        grid.$2k_0 = false;
        this.$1s_0 = grid
    },
    getGridCellInlineControlMode: function(grid, currentRow, attributeName) {
        if (attributeName === "remainingterms") return "locked";
        return "normal"
    },
    gridRowSave: function(grid, currentRow) {
        switch (grid.$H_0) {
        case 9701:
            this.$51_0(grid, "entitlementchannel", currentRow);
            break;
        case 9703:
            this.$51_0(grid, "entitlementtemplatechannel", currentRow);
            break;
        default:
            break
        }
    },
    $51_0: function($p0, $p1, $p2) {
        var $v_0 = "{00000000-0000-0000-0000-000000000000}", $v_1 = $p0.isNewRecord($p2);
        if (!$v_1) $v_0 = $p0.getHiddenTableCellValue($p2, "oid");
        var $v_2 = $p0.getTableCellValue($p2, "channel"), $v_3 = $p0.getTableCellValue($p2, "totalterms");
        if (!IsNull($v_2) && ($v_1 || !IsNull($v_3))) {
            if (IsNull($v_3)) $v_3 = 0;
            if (isNullOrEmptyString($v_0)) $v_0 = "{00000000-0000-0000-0000-000000000000}";
            if ($v_3 < 0) {
                alert(window.LOCID_TOTAL_TERMS_NEGATIVE);
                var $v_4 = {};
                $v_4["DisplayText"] = window.LOCID_TOTAL_TERMS_NEGATIVE;
                var $v_5 = {};
                $v_5["_error"] = $v_4;
                $p0.onRowSaveFailure($v_5)
            } else {
                var $v_6 = Mscrm.InlineEditDataServiceProxy.get_busy();
                if (!$v_6)
                    Mscrm.InlineEditDataServiceProxy
                        .createEntitlementChannel($v_1,
                            $p0.$H_0,
                            $p1,
                            $v_2,
                            $v_3,
                            $v_0,
                            $p0.$$d_onRowSaveSuccess,
                            $p0.$$d_onRowSaveFailure);
                else $p0.handleAutoSaveNotTriggered()
            }
        } else {
            $p0.resetCurrentSaveRow();
            $p0.handleAutoSaveNotTriggered()
        }
    },
    gridRowInitialize: function(grid, currentRow) {
        if (!IsNull(currentRow))
            switch (grid.$H_0) {
            case 9701:
            case 9703:
                !IsNull(grid.$0_0) && !IsNull(grid.$0_0.$2_3) && grid.$0_0.$2_3.removeDblClickHandler();
                break
            }
    },
    updateControlStyle: function(attributeMetadata, inlineEditGridControl) {
        switch (attributeMetadata.AttributeType) {
        case "picklist":
            var $v_0 = inlineEditGridControl.get_editView();
            $v_0.set_minOptionsToShow(5);
            break
        }
        if (attributeMetadata.LogicalName.startsWith("remainingterms")) {
            var $v_1 = inlineEditGridControl;
            $v_1.set_disabled(true)
        }
    },
    gridAttributeInitialValue: function(currentRow, grid, currentInitialValue, attributeMetadata) {
        var $v_0 = currentInitialValue;
        switch (attributeMetadata.LogicalName) {
        case "channel":
            if (!isNullOrEmptyString(currentInitialValue)) {
                var $v_1 = attributeMetadata.LogicalName + "_rawvalue";
                $v_0 = grid.getHiddenTableCellValue(currentRow, $v_1)
            } else $v_0 = null;
            break;
        case "remainingterms":
        case "totalterms":
            if (isNullOrEmptyString(currentInitialValue)) $v_0 = "0";
            else {
                var $v_2 = attributeMetadata.LogicalName + "_rawvalue";
                $v_0 = grid.getHiddenTableCellValue(currentRow, $v_2);
                $v_0 = $v_0.replace(",", ".")
            }
            break
        }
        return $v_0
    },
    gridRowSaveSuccessAction: function(grid, currentSaveRow, response) {
        this.$1l_0(grid, currentSaveRow, response, "totalterms");
        this.$1l_0(grid, currentSaveRow, response, "remainingterms");
        this.$1l_0(grid, currentSaveRow, response, "channel");
        this.$6P_0(grid, currentSaveRow, response);
        return
    },
    $6P_0: function($p0, $p1, $p2) {
        var $v_0 = "_entity";
        if (!($v_0 in $p2)) return;
        var $v_1 = $p2[$v_0];
        if (IsNull($v_1)) return;
        this.$6O_0($p0, $p1, $v_1);
        return
    },
    $1l_0: function($p0, $p1, $p2, $p3) {
        if (!($p3 in $p2)) return;
        var $v_0 = $p2[$p3], $v_1 = $v_0["raw"];
        if (!IsNull($v_1)) {
            var $v_2 = this.$1s_0.getAttributeType($p3);
            switch ($v_2) {
            case "int":
            case "picklist":
                $p0.setTableCellValue($p1, $p3, parseInt($v_1), true);
                $p0.setHiddenTableCellValue($p1, $p3, parseInt($v_1));
                break;
            case "decimal":
                $p0.setTableCellValue($p1, $p3, parseFloat($v_1), true);
                $p0.setHiddenTableCellValue($p1, $p3, parseFloat($v_1));
                break;
            default:
                $p0.setTableCellValue($p1, $p3, $v_1, true);
                $p0.setHiddenTableCellValue($p1, $p3, $v_1);
                break
            }
        }
    },
    $6O_0: function($p0, $p1, $p2) {
        var $v_0 = $p2["Id"];
        if (IsNull($v_0)) return;
        $p0.setHiddenTableCellValue($p1, "oid", $v_0);
        if ($p0.isNewRecord($p1)) {
            var $v_1 = $p1.querySelector("div.ms-crm-List-DeleteContainer-Div");
            if (!IsNull($v_1)) {
                var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
                if (!IsNull($v_2))
                    $v_2.id = "gridBodyTable_delete_" + $p1.getAttribute("oid") + "_" + $p1.getAttribute("rowindex")
            }
        }
    },
    gridRowSaveFailureAction: function(grid, currentSaveRow, response) { return },
    initializeGridViewComplete: function(dataTable) { return },
    disposeGridRow: function(currentRow) { return }
};
Mscrm.DynamicPropertiesListFlyOut = function(element) {
    Mscrm.DynamicPropertiesListFlyOut.initializeBase(this, [element]);
    this.$1_3 = null
};
Mscrm.DynamicPropertiesListFlyOut.$2c = function($p0) {
    Mscrm.DynamicPropertiesListFlyOut.$Y = $p0;
    Mscrm.DynamicPropertiesListFlyOut.$Y.setContent(null);
    Mscrm.DynamicPropertiesListFlyOut.$Y.set_position("right");
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_showButtonPane(true);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_showCloseButton(true);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_closeOnEscape(false);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_showTitlePane(true);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_modal(true);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_hideWithClickOnOverlay(false);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options().set_applyAnchorClassChange(false);
    Mscrm.DynamicPropertiesListFlyOut.$Y.set_buttonsInitialTabIndex(0);
    Mscrm.DynamicPropertiesListFlyOut.$Y.get_options()
        .set_title(CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal
            .getResourceString("LOCID_DYNAMICPROPERTIESLIST")));
    var $v_0 = $P_CRM("#ui-dialog-title-DynamicPropertiesList_LinkControl_flyoutLoadingArea");
    $v_0.addClass("dplist-flyout-dialog-title");
    $v_0.attr("title",
        CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("LOCID_DYNAMICPROPERTIESLIST")));
    $v_0.parent().addClass("dplist-flyout-dialog-titlebar");
    var $v_1 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutContent");
    $v_1.addClass("dplist-flyout-dialog-innerContent");
    $v_1.show();
    Mscrm.DynamicPropertiesListFlyOut.$2v = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea");
    Mscrm.DynamicPropertiesListFlyOut.$Y.setContent(Mscrm.DynamicPropertiesListFlyOut.$2v);
    $P_CRM("#DynamicPropertiesList_LinkControl_dynamicPropertyListControl_d")
        .addClass("dplist-flyout-dialog-contentDiv");
    var $v_2 = $v_1.children("div").children("table");
    $v_2.addClass("dplist-flyout-dialog-Table");
    $v_2.children("colgroup").remove();
    Mscrm.DynamicPropertiesListFlyOut.$3T = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea-confirm");
    Mscrm.DynamicPropertiesListFlyOut.$3T.attr("style", "min-width: 58px");
    Mscrm.DynamicPropertiesListFlyOut.$3T.parent().addClass("dplist-flyout-dialog-buttonset");
    $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea-cancel").attr("style", "min-width: 58px");
    var $v_3 = Mscrm.DynamicPropertiesListFlyOut.$Y.dialogChrome();
    $v_3.addClass("dplist-flyout-dialog");
    var $v_4 = $v_3.find("div.ui-dialog-buttonpane button");
    XUI.Html.SetText($v_4[0], Xrm.Internal.getResourceString("LOCID_DYNAMICPROPERTIES_DONE"));
    XUI.Html.SetText($v_4[1], Xrm.Internal.getResourceString("LOCID_DYNAMICPROPERTIES_CANCEL"));
    var $v_5 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea-close");
    $v_5.addClass("dplist-flyout-dialog-titlebar-close");
    $v_5.click(function($p1_0) {
        Mscrm.DynamicPropertiesListFlyOut.$69();
        Mscrm.DynamicPropertyListControl.control.removeCells()
    })
};
Mscrm.DynamicPropertiesListFlyOut.generateDynamicPropertiesListFlyOut = function(linkControlObject) {
    Mscrm.DynamicPropertiesListFlyOut.$2c(linkControlObject.get_flyOutDialog());
    Mscrm.DynamicPropertiesListFlyOut.$V = true
};
Mscrm.DynamicPropertiesListFlyOut.dpListFlyOutSaveEvent = function(linkControlObj) {
    var $v_0 = null;
    $v_0 = function($p1_0) {
        if ($p1_0) {
            linkControlObj.get_flyOutDialog().hide();
            Mscrm.DynamicPropertiesListFlyOut.$69();
            Mscrm.DynamicPropertyListControl.control.removeCells();
            var $v_2 = $find(Mscrm.DynamicPropertiesListFlyOut.control.ParentGridId);
            $v_2 && $v_2.Refresh()
        }
    };
    var $v_1 = null;
    $v_1 = function($p1_0) {
        if ($p1_0) {
            Mscrm.DynamicPropertiesListFlyOut.control.$25_3 = $p1_0.get_localizedMessage().toString();
            Mscrm.DynamicPropertiesListFlyOut.control.$1_3.setContent(Mscrm.DynamicPropertiesListFlyOut.$2v);
            Mscrm.DynamicPropertiesListFlyOut.$7k();
            var $v_3 = $P_CRM("#DynamicPropertiesList_Notification_Area");
            $v_3.addClass("dplist-Notifications");
            $v_3.show();
            $v_3.attr("title", Mscrm.DynamicPropertiesListFlyOut.control.$25_3);
            $P_CRM("#DynamicPropertiesList_NotificationImage").html("<img src='/_imgs/error/notif_icn_crit16.png'/>");
            var $v_4 = $P_CRM("#DynamicPropertiesList_Notification");
            $v_4.html(Mscrm.DynamicPropertiesListFlyOut.control.$25_3)
        }
    };
    Mscrm.DynamicPropertyListControl.control.update($v_0,
        $v_1,
        function() { Mscrm.DynamicPropertiesListFlyOut.control.$1_3.initializeForReuse() });
    linkControlObj.get_flyOutDialog().set_hideFlyOutOnConfirmClick(false)
};
Mscrm.DynamicPropertiesListFlyOut.dpListFlyOutCancelEvent = function() {
    Mscrm.DynamicPropertiesListFlyOut.$69();
    Mscrm.DynamicPropertyListControl.control.removeCells()
};
Mscrm.DynamicPropertiesListFlyOut.$69 = function() {
    $P_CRM("#DynamicPropertiesList_Instruction_Text").remove();
    $P_CRM("#DynamicPropertiesList_Notification_Area").remove();
    $P_CRM("#DynamicPropertiesList_Label").remove();
    $P_CRM("#DynamicPropertyList_DesignHeader").remove()
};
Mscrm.DynamicPropertiesListFlyOut.$7k = function() {
    var $v_0 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea"),
        $v_1 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutContent");
    $v_0.removeClass("dplist-flyout-dialog-content");
    $v_0.addClass("dplist-flyout-dialog-content-temp");
    if (!Mscrm.DynamicPropertyListControl.control.get_renderType()) $v_1.attr("style", "height: 207px;");
    else Mscrm.DynamicPropertyListControl.control.get_renderType() === 1 && $v_1.height(172)
};
Mscrm.DynamicPropertiesListFlyOut.prototype = {
    $5f_3: 800,
    $1_3: null,
    $9_3: null,
    $P_3: null,
    $3X_3: null,
    $25_3: null,
    ParentGridId: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        var $v_0 = $get("DynamicPropertiesList_LinkControl_dynamicPropertyListControl");
        !IsNull($v_0) && Mscrm.CrmUIComponent.crmCreate(Mscrm.DynamicPropertyListControl, null, null, null, $v_0);
        Mscrm.DynamicPropertiesListFlyOut.control = this
    },
    onClick: function(anchor) {
        setPerfMarkerTimestamp("StartOpenFlyOutTimestamp");
        this.$9_3 = $P_CRM(anchor.target);
        this.$P_3 = $P_CRM("#mainContainer");
        !Mscrm.DynamicPropertiesListFlyOut.$V && this.$4Y_3();
        this.$1_3 = Mscrm.DynamicPropertiesListFlyOut.$Y;
        this.$1_3.initializeForReuse();
        this.$1_3.setContent(null);
        var $v_0 = $P_CRM("#ui-dialog-title-DynamicPropertiesList_LinkControl_flyoutLoadingArea");
        $v_0.parent()
            .append('<div class="dplist-flyout-instruction-text ms-crm-TextAutoEllipsis" id="DynamicPropertiesList_Instruction_Text"></div><div class=" dplist-Notifications-strict dplist-Notifications-strict-bottom " id="DynamicPropertiesList_Notification_Area" "><div class="dplist-div-Table-row"><div class="dplist-div-Table-cell" id="DynamicPropertiesList_NotificationImage"></div><div class="dplist-Notification" id="DynamicPropertiesList_Notification"></div></div></div>');
        if (IsNull(this.$1_3)) return;
        var $v_1 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea"),
            $v_2 = $P_CRM("#DynamicPropertiesList_Instruction_Text");
        $v_1.removeClass("dplist-flyout-dialog-content-temp");
        $v_1.addClass("dplist-flyout-dialog-content");
        var $$t_E = this,
            $v_3 = function($p1_0) {
                if (!IsNull($p1_0)) {
                    $$t_E.$25_3 = $p1_0.get_error().toString();
                    Mscrm.DynamicPropertiesListFlyOut.$7k();
                    var $v_7 = $P_CRM("#DynamicPropertiesList_Notification_Area");
                    $v_7.addClass("dplist-Notifications");
                    $v_7.attr("style", "display: block;");
                    $v_7.attr("title", $$t_E.$25_3);
                    $P_CRM("#DynamicPropertiesList_NotificationImage")
                        .html("<img src='/_imgs/error/notif_icn_crit16.png'/>");
                    var $v_8 = $P_CRM("#DynamicPropertiesList_Notification");
                    $v_8.html($$t_E.$25_3)
                }
            };
        if (!IsNull(Mscrm.DynamicPropertiesListFlyOut.control)) {
            var $v_9 = this.$9_3.parents("tr.ms-crm-List-Row-Lite");
            if (IsNull($v_9) || !$v_9.length) $v_9 = this.$9_3.parents("tr.ms-crm-List-SelectedRow-Lite");
            if (!IsNull($v_9)) {
                Mscrm.DynamicPropertyListControl.control.set_targetEntityId($v_9.attr("oid"));
                Mscrm.DynamicPropertyListControl.control.set_targetEntityTypeCode(parseInt($v_9.attr("otype")));
                if (parseInt($v_9.attr("otype")) === 1083) Mscrm.DynamicPropertyListControl.control.set_renderType(0);
                else
                    parseInt($v_9.attr("otype")) === 1025 && Mscrm.DynamicPropertyListControl.control.set_renderType(1);
                var $$t_F = this, $$t_G = this;
                Mscrm.DynamicPropertyListControl.control
                    .render($v_3,
                        function() { $$t_F.$1_3.setContent(Mscrm.DynamicPropertiesListFlyOut.$2v) },
                        function() { $$t_G.$1_3.setFlyOutButtonFocus(1) })
            }
        }
        if (!IsNull(anchor.target))
            if (!IsNull(anchor.target
                .getAttribute("productname")))
                Mscrm.DynamicPropertiesListFlyOut.$2f = anchor.target.getAttribute("productname").toString();
            else if (!IsNull(anchor.target
                    .parentNode) &&
                !IsNull(anchor.target.parentNode
                    .getAttribute("productname")))
                Mscrm.DynamicPropertiesListFlyOut.$2f = anchor.target.parentNode.getAttribute("productname").toString();
        if (!IsNull(Mscrm.DynamicPropertiesListFlyOut.$2f)) {
            $v_2.html(Mscrm.DynamicPropertiesListFlyOut.$2f);
            $v_2.attr("title", Mscrm.DynamicPropertiesListFlyOut.$2f)
        }
        var $v_4 = $P_CRM("#DynamicPropertiesList_LinkControl_flyoutContent"),
            $v_5 = Mscrm.DynamicPropertiesListFlyOut.$3T.parents(".ui-dialog-buttonpane");
        if (Mscrm.DynamicPropertyListControl.control.get_renderType() === 1) {
            this.$3X_3 = "table";
            var $v_A = this.$5X_3();
            $v_1.prepend($v_A);
            $v_4.removeAttr("style");
            $v_4.width(840);
            $P_CRM("#DynamicPropertiesList_Label").hide();
            $v_2.addClass("dplist-flyout-designtime-instruction-text");
            this.$5f_3 = 840;
            $v_5.addClass("dplist-flyout-dialog-designtime-buttonpane")
        } else if (!Mscrm.DynamicPropertyListControl.control.get_renderType()) {
            this.$3X_3 = "span";
            var $v_B = this.$5X_3();
            $v_4.prepend($v_B);
            $P_CRM("#DynamicPropertiesList_LinkControl_dynamicPropertyListControl_d")
                .attr("style", "margin-top: 12px;");
            $v_4.attr("style", "height:272px !important");
            $P_CRM("#DynamicPropertiesList_LinkControl_flyoutLoadingArea-confirm").parents(".ui-dialog-buttonpane")
                .attr("style", "margin-top: 15px !important;");
            $v_5.addClass("dplist-flyout-dialog-runtime-buttonpane")
        }
        this.$1_3.get_options().set_width(this.$5f_3);
        this.$1_3.get_options().set_height(400);
        this.$1_3.get_options().set_isInDelayMode(false);
        var $v_6 = this.$P_3.scrollTop();
        this.$1_3.show(this.$9_3, this.$P_3);
        this.$P_3.scrollTop($v_6)
    },
    $4Y_3: function() {
        var $v_0 = $find("DynamicPropertiesList_LinkControl$LinkControlBehavior");
        this.$1_3 = $v_0.get_flyOutDialog();
        Mscrm.DynamicPropertiesListFlyOut.$2c(this.$1_3);
        Mscrm.DynamicPropertiesListFlyOut.$V = true
    },
    $5X_3: function() {
        var $v_0 = document.createElement(this.$3X_3), $v_1 = $P_CRM($v_0);
        if (!isNullOrEmptyString(this.$3X_3))
            if (!Mscrm.DynamicPropertyListControl.control.get_renderType()) {
                $v_1.attr("id", "DynamicPropertiesList_Label");
                $v_1.attr("class", "dplist-label-Details");
                $v_1.text(Xrm.Internal.getResourceString("LOCID_DYNAMICPROPERTIES_DETAILS"))
            } else if (Mscrm.DynamicPropertyListControl.control.get_renderType() === 1) {
                var $v_2 = document.createElement("thead"), $v_3 = document.createElement("tr");
                $v_3 = this.$5Q_3($v_3, "propertyname");
                $v_3 = this.$5Q_3($v_3, "defaultvalue");
                $v_3 = this.$5Q_3($v_3, "editable");
                $v_1.attr("id", "DynamicPropertyList_DesignHeader");
                $v_1.attr("class", "dplist-design-header-table dplist-header-table");
                $v_2.appendChild($v_3);
                $v_0.appendChild($v_2)
            }
        return $v_1
    },
    $5Q_3: function($p0, $p1) {
        var $v_0 = document.createElement("th"), $v_1 = $P_CRM($v_0);
        $v_1.attr("class", "dplist-design-header-table-" + CrmEncodeDecode.CrmHtmlAttributeEncode($p1) + "Column");
        $v_1.text(Xrm.Internal.getResourceString("LOCID_DYNAMICPROPERTIES_" + $p1.toUpperCase()));
        $p0.appendChild($v_0);
        return $p0
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3) && !this.$1_3.get_isDisposed()) {
            this.$1_3.unbind();
            this.$1_3.dispose()
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.InlineEditDropDownFlyOut = function(element) {
    this.$$d_$BN_3 = Function.createDelegate(this, this.$BN_3);
    this.$$d_$AS_3 = Function.createDelegate(this, this.$AS_3);
    this.$$d_$4t_3 = Function.createDelegate(this, this.$4t_3);
    this.$$d_$65_3 = Function.createDelegate(this, this.$65_3);
    this.$$d_$AC_3 = Function.createDelegate(this, this.$AC_3);
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$B5_3 = Function.createDelegate(this, this.$B5_3);
    this.$$d_$BK_3 = Function.createDelegate(this, this.$BK_3);
    Mscrm.InlineEditDropDownFlyOut.initializeBase(this, [element]);
    this.$16_3 = element;
    this.$49_3 = $P_CRM(this.$16_3.parentNode.parentNode);
    var $v_0 = this.$49_3.siblings(".ms-crm-Grid-Title");
    this.$2U_3 = $v_0.children(".ms-crm-hidden-container-error").first();
    this.$J_3 = $v_0.children(".ms-crm-List-ErrorStatusIcon").first();
    var $v_1 = this.$49_3.parents(".ms-crm-grid-titlecontainer"), $v_2 = $v_1.outerWidth() - 7;
    $v_0.find(".ms-crm-hidden-container-error").addClass("ms-crm-Inline-Validation").css("width", $v_2 + "px");
    this.$2t_3 = true
};
Mscrm.InlineEditDropDownFlyOut.prototype = {
    ParentGridId: null,
    ConnectionToCategory: null,
    $0_3: null,
    $16_3: null,
    $5K_3: false,
    $1_3: null,
    $5J_3: false,
    $C_3: null,
    $4F_3: null,
    $X_3: null,
    $2t_3: false,
    $5N_3: null,
    $49_3: null,
    $J_3: null,
    $2U_3: null,
    $b_3: null,
    $1P_3: null,
    $5G_3: null,
    $t_3: null,
    $4X_3: null,
    get_$5c_3: function() {
        if (IsNull(this.$C_3)) this.$C_3 = new Mscrm.ErrorFlyout(this.$J_3, this.$2U_3, $P_CRM(window.document.body));
        return this.$C_3
    },
    initialize: function() {
        if ($P_CRM("#hiddenEditPrivilegeCheck_" + this.ParentGridId).length <= 0) return;
        var $v_0 = $P_CRM("#hiddenEditPrivilegeCheck_" + this.ParentGridId);
        this.$4F_3 = $v_0.html();
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $find(this.ParentGridId);
        this.$0_3.add_onRefresh(this.$$d_$BK_3)
    },
    $BK_3: function($p0, $p1) {
        if (!this.$5K_3) {
            this.$2c_3();
            this.$9S_3()
        }
        if (!IsNull(this.$1_3)) {
            if (!this.$5J_3) {
                this.$4Q_3();
                this.$6R_3()
            }
            this.$1P_3 = $P_CRM("");
            $P_CRM(this.$0_3.get_element()).find(".ms-crm-List-Row-Lite").each(this.$$d_$B5_3)
        }
    },
    $9S_3: function() {
        var $v_0 = new RemoteCommand("Connection", "SerializeConnectionRoles", null);
        $v_0.SetParameter("connectionToCategory", this.ConnectionToCategory);
        this.$5N_3 = $v_0.Execute(null).ReturnValue.toString()
    },
    $AE_3: function($p0, $p1) {
        var $v_0 = $P_CRM($P_CRM.parseXML(this.$5N_3)), $v_1 = new Sys.StringBuilder, $$t_9 = this;
        $v_0.find("connectionrole").each(function($p1_0, $p1_1) {
            var $v_3 = $P_CRM($p1_1).find("connectionroleid").text(), $v_4 = $P_CRM($p1_1).find("name").text();
            $v_1.append(String.format('<option value="{0}" title="{2}">{1}</option>',
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_3),
                CrmEncodeDecode.CrmHtmlEncode($v_4),
                CrmEncodeDecode.CrmHtmlAttributeEncode($v_4)))
        });
        var $v_2 = Math.min(10, $v_0.find("connectionrole").length).toString();
        this.$X_3 = $P_CRM(String
            .format('<select id="edit_connection_select_{0}" class="ms-crm-Inline-OptionSet-AutoOpen noScroll ui-InlineEditDropDown-Content-Select" size={1}>{2}</select>', CrmEncodeDecode.CrmHtmlAttributeEncode(this.$0_3.get_id()), CrmEncodeDecode.CrmHtmlAttributeEncode($v_2), $v_1.toString()));
        this.$7b_3($p0, $p1);
        this.$4X_3 = $P_CRM(String
            .format('<form id="edit_connection_form_{0}" class="ui-InlineEditDropDown-Content-Form"></form>',
                CrmEncodeDecode.CrmHtmlAttributeEncode(this.$0_3.get_id())));
        this.$4X_3.append(this.$X_3);
        this.$1_3.setContent(this.$4X_3)
    },
    $2c_3: function() {
        this.$1_3 = new Mscrm.InlineFlyOutDialog;
        this.$1_3.get_options().set_dialogClass("ui-dialog-minimal");
        this.$1_3.get_options().set_width(150);
        this.$1_3.get_options().set_height(17);
        this.$1_3.set_position("custom");
        this.$1_3.get_options().set_showCloseButton(false);
        this.$1_3.get_options().set_showButtonPane(false);
        this.$1_3.get_options().set_closeOnEscape(false);
        this.$1_3.get_options().set_dialogClass("ui-dialog-minimal-SubGrid-InlineEdit");
        this.$1_3.get_options().set_applyAnchorClassChange(false);
        this.$1_3.get_options().set_modal(false);
        this.$1_3.get_options().set_letjQueryHandleTabbing(true);
        this.$5K_3 = true;
        this.$1_3.set_shouldDisposeContent(false)
    },
    $4Q_3: function() {
        $P_CRM("body").click(this.$$d_$3d_3);
        this.$1_3.bind("flyout-canceled", this.$$d_$AC_3);
        this.$5J_3 = true
    },
    $3d_3: function($p0) {
        !IsNull(this.$1_3.dialogChrome()) &&
            !IsNull(this.$1P_3) &&
            !this.$1P_3.is($p0.target) &&
            !this.$1P_3.has($p0.target).length &&
            !this.$1_3.dialogChrome().is($p0.target) &&
            !this.$1_3.dialogChrome().has($p0.target).length &&
            this.$1_3.hide()
    },
    $6R_3: function() {
        this.$J_3.mouseover(this.$$d_$65_3).mouseout(this.$$d_$4t_3);
        var $v_0 = this.$J_3.children("a");
        $v_0.focus(this.$$d_$65_3);
        $v_0.blur(this.$$d_$4t_3);
        var $$t_2 = this;
        this.$t_3 = function() { $$t_2.$4l_3() };
        Mscrm.InlineEditDataService.get_dataService().add_entitySaved(this.$t_3);
        var $$t_3 = this;
        $addHandler(window,
            "unload",
            function($p1_0) {
                if (IsNull($$t_3.$t_3)) return;
                !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
                    Mscrm.InlineEditDataService.get_dataService().remove_entitySaved($$t_3.$t_3);
                $$t_3.$t_3 = null
            })
    },
    $4l_3: function() {
        this.$J_3.hide();
        if (!IsNull(this.$C_3)) {
            this.$C_3.hideError();
            this.$b_3 = null
        }
    },
    $AC_3: function($p0) {
        this.$1_3.hide();
        this.$5G_3.focus()
    },
    $AS_3: function($p0) { this.$1_3.get_visible() && this.$6A_3() },
    $6A_3: function() {
        $P_CRM(window).unbind("resize", this.$$d_$AS_3);
        this.$X_3.removeAttr("disabled");
        this.$1_3.hide();
        var $$t_0 = this;
        window.setTimeout(function() { $P_CRM($$t_0.$16_3).focus() }, 10)
    },
    $B5_3: function($p0, $p1) {
        var $v_0 = $P_CRM("span[onclick]", $p1).eq(1),
            $v_1 = $v_0.parents("a[onclick]").first(),
            $v_2 = $v_0.parents("td").first(),
            $v_3 = $P_CRM("span[onclick]", $p1).first().parents(".ms-crm-List-Row-Lite").attr("oid"),
            $v_4 = $v_0.attr("oid");
        $v_4 = $v_4.substring(1, $v_4.length - 1).toLowerCase();
        $v_0.prop("onclick", null);
        $v_1.prop("onclick", null);
        $v_1.attr("href", "#" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_3) + "_ConnectionRoleType");
        $v_1.attr("style", "cursor:default;");
        $v_0.attr("title", null);
        $v_1.attr("title", null);
        $v_2.attr("title", this.$4F_3);
        $v_1.removeAttr("class");
        $v_1.addClass("ms-crm-SubGrid-InlineEdit-Anchor");
        $v_0.removeAttr("class");
        $v_0.addClass("ms-crm-SubGrid-InlineEdit-Span");
        var $v_5 = String.format('<div class="ms-crm-Hidden-NoBehavior">{0}</div>', this.$4F_3), $v_6 = $P_CRM($v_5);
        $v_0.append($v_6);
        var $v_7 = this.$8t_3($v_2);
        this.$8E_3($v_7);
        this.$1P_3 = this.$1P_3.add($v_2);
        var $$t_B = this;
        $v_2.click(function($p1_0) { $$t_B.$CZ_3($v_3, $v_4, $v_7) });
        $v_2.addClass("ms-crm-List-RoleDataCell-Lite")
    },
    $8t_3: function($p0) {
        $p0.wrapInner('<div class="ms-crm-SubGrid-InlineEdit-Nobr-Div" style="' +
            (Mscrm.Utilities.get_isLeftToRight() ? "margin-right:" : "margin-left:") +
            11 +
            'px;"></div>');
        $p0.wrapInner('<div class="ms-crm-SubGrid-InlineEdit"></div>');
        return $p0.find('div[class="ms-crm-SubGrid-InlineEdit"]').first()
    },
    $8E_3: function($p0) {
        $p0
            .append('<img class="ms-crm-List-DataCell-DropDown-Chevron" src="/_imgs/grid/InlineEditDropDownChevron.png"/>')
    },
    $CZ_3: function($p0, $p1, $p2) {
        this.$4l_3();
        this.$1_3.set_dialogLeft($p2.offset().left);
        this.$1_3.set_dialogTop($p2.offset().top);
        if (this.$2t_3) {
            this.$AE_3($p2, $p1);
            this.$8a_3()
        }
        $P_CRM(window).resize(this.$$d_$AS_3);
        this.$5G_3 = $p2.find("a");
        this.$7b_3($p2, $p1);
        Mscrm.InlineEditDropDownFlyOut.$5V = $p0;
        this.$1_3.show($p2, $P_CRM("#crmFormTabContainer"));
        if (this.$2t_3) {
            this.$X_3 = this.$1_3.dialogChrome().find("select");
            this.$2t_3 = false
        }
        this.$X_3.focus();
        this.$1_3.dialogChrome().css("width", this.$X_3.outerWidth().toString() + "px");
        this.$1_3.dialogChrome().find("form").first().css("height", "auto").css("margin", "0px");
        this.$1_3.dialogChrome().position({ my: "left top", at: "left top", of: $p2 })
    },
    $7b_3: function($p0, $p1) {
        this.$X_3.css("width", $p0.width().toString() + "px");
        this.$X_3.find(String.format("option[value='{{{0}}}']", $p1.toUpperCase())).attr("selected", "selected")
    },
    $8a_3: function() {
        var $$t_1 = this;
        this.$X_3.keydown(function($p1_0) { ($p1_0.which === 13 || $p1_0.which === 9) && $$t_1.$83_3($$t_1.$X_3) });
        if (window.UseTabletExperience) this.$X_3.change(this.$$d_$BN_3);
        else this.$X_3.click(this.$$d_$BN_3)
    },
    $BN_3: function($p0) { this.$83_3(this.$X_3) },
    $83_3: function($p0) {
        $p0.attr("disabled", "disabled");
        var $$t_6 = this;
        $p0.find("option:selected").each(function($p1_0, $p1_1) {
            Mscrm.InlineEditDataService.updateConnection(Mscrm.InlineEditDropDownFlyOut.$5V,
                $p1_1.getAttribute("value"),
                function($p2_0) {
                    $$t_6.$6A_3();
                    $$t_6.$0_3.Refresh();
                    return true
                },
                function($p2_0) {
                    $$t_6.$6A_3();
                    $$t_6.$J_3.css("display", "inline-block");
                    var $v_0 = $p2_0["_error"];
                    if (!IsNull($v_0)) $$t_6.$b_3 = $v_0["DisplayText"];
                    else $$t_6.$b_3 = "";
                    return true
                })
        })
    },
    $65_3: function($p0) {
        if (!IsNull(this.$b_3)) {
            $p0.stopImmediatePropagation();
            this.get_$5c_3().showError(this.$b_3)
        }
    },
    $4t_3: function($p0) { !IsNull(this.$b_3) && !IsNull(this.$C_3) && this.$C_3.hideError() },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$0_3.remove_onRefresh(this.$$d_$BK_3);
        $P_CRM("body").unbind("click", this.$$d_$3d_3);
        !IsNull(this.$X_3) && this.$X_3.unbind();
        !IsNull(this.$1P_3) && this.$1P_3.unbind();
        if (!IsNull(this.$1_3)) {
            this.$1_3.unbind();
            this.$1_3.dispose()
        }
        this.$1_3 = null;
        this.$J_3.unbind();
        !IsNull(this.$C_3) && this.$C_3.dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.QuickAddFlyOut = function(element) {
    this.$$d_$Cc_3 = Function.createDelegate(this, this.$Cc_3);
    this.$$d_$95_3 = Function.createDelegate(this, this.$95_3);
    this.$$d_$4t_3 = Function.createDelegate(this, this.$4t_3);
    this.$$d_$65_3 = Function.createDelegate(this, this.$65_3);
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$7F_3 = Function.createDelegate(this, this.$7F_3);
    this.$$d_$50_3 = Function.createDelegate(this, this.$50_3);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    Mscrm.QuickAddFlyOut.initializeBase(this, [element]);
    this.$16_3 = element;
    var $v_0 = $P_CRM(this.$16_3.parentNode.parentNode), $v_1 = $v_0.siblings(".ms-crm-Grid-Title");
    this.$2U_3 = $v_1.children(".ms-crm-hidden-container-error").first();
    this.$1a_3 = $v_1.children(".ms-crm-Inline-Lookup-Subgrid").first();
    this.$J_3 = $v_1.children(".ms-crm-List-ErrorStatusIcon").first();
    this.$2p_3 = {};
    this.$2p_3["contact"] = "518D7AAA-3B4C-4041-AD33-A6FD40DF6C81";
    this.$2p_3["systemuser"] = "20079806-EB84-4093-99AD-BB46435DB028";
    this.$1_3 = null;
    this.$V_3 = false;
    var $v_2 = $v_0.parents(".ms-crm-grid-titlecontainer"), $v_3 = $v_2.outerWidth() - 7;
    $v_1.find(".ms-crm-hidden-container-error").addClass("ms-crm-Inline-Validation").css("width", $v_3 + "px");
    this.$5B_3 = Mscrm.Utilities.createGuid();
    this.$0_3 = null
};
Mscrm.QuickAddFlyOut.$6W = function($p0, $p1, $p2, $p3, $p4) {
    if (IsNull($p1)) $p1 = assocOneToManyAction;
    $p1($p0, $p4, $p3, $p2);
    return $p1
};
Mscrm.QuickAddFlyOut.prototype = {
    $2p_3: null,
    $16_3: null,
    $m_3: null,
    $10_3: null,
    $2U_3: null,
    $J_3: null,
    $1a_3: null,
    $C_3: null,
    $V_3: false,
    $5B_3: null,
    $1_3: null,
    $11_3: null,
    $9_3: null,
    $P_3: null,
    $0_3: null,
    $1I_3: false,
    $2S_3: null,
    $1K_3: null,
    $K_3: null,
    $38_3: null,
    $b_3: null,
    $t_3: null,
    AttributeId: null,
    ConnectionToEntity: null,
    ConnectionToCategory: null,
    ParentGridId: null,
    TeamTemplateId: null,
    TargetEntityType: null,
    IsInvokedFromProductFlyOut: false,
    IgnoreClickEvents: false,
    get_$5c_3: function() {
        if (IsNull(this.$C_3)) this.$C_3 = new Mscrm.ErrorFlyout(this.$J_3, this.$2U_3, $P_CRM(window.document.body));
        return this.$C_3
    },
    get_$4s_3: function() {
        if (IsNull(this.$38_3)) this.$38_3 = this.$6r_3(this.$1K_3);
        return this.$38_3
    },
    initialize: function() {
        if ($P_CRM("#hiddenAddPrivilegeCheck_" + this.ParentGridId).length <= 0) return;
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $find(this.ParentGridId);
        if (Mscrm.FeatureControl.get_Current()
            .isFeatureEnabled("FCB.DataSetControl") &&
            !this.$0_3.get_visible()) this.$0_3 = $find(Mscrm.DataSetControl.datasetctrL_PREFIX + this.ParentGridId);
        if (this.IsInvokedFromProductFlyOut) this.$m_3 = $P_CRM("#ExistingProduct");
        else this.$m_3 = $P_CRM(this.$0_3.get_addContextualButton());
        this.$0_3.get_gridType() === Mscrm.GridControl.associatedGrid && this.$6p_3();
        !this.IgnoreClickEvents && this.$m_3.on("click", this.$$d_onClick);
        $P_CRM(window).resize(this.$$d_$50_3);
        this.$50_3(null);
        this.$CN_3("data-attributename", "data-fdeid", "PrimaryEntity");
        this.$1K_3 = $P_CRM("#lookup_" + this.AttributeId + "[data-attributename]", this.$1a_3).first()
    },
    onClick: function(eventObject) {
        if ($P_CRM("#hiddenAddPrivilegeCheck_" + this.ParentGridId).length <= 0 && !Mscrm.SessionInfo.isOnline()) {
            alert(window.LOCID_OFFLINE_ADD_RECORD);
            return
        }
        this.$9_3 = $P_CRM("#" + this.AttributeId + "_gridBar");
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl") && !this.$9_3.is(":visible")) {
            var $v_0 = $P_CRM(String.format("#{0}{1}", Mscrm.DataSetControl.datasetctrL_PREFIX, this.ParentGridId));
            this.$9_3 = $v_0.find("div[id$='_searchPlaceholder']")
        }
        this.$P_3 = $P_CRM("#tdAreas");
        if (IsNull(this.$P_3) || this.$P_3.length <= 0) this.$P_3 = $P_CRM(".ms-crm-AreaPage");
        this.$4l_3();
        if (!this.$V_3) this.$4Y_3();
        else if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(this.$K_3)) {
            this.$38_3.Clear(false);
            this.$K_3.get_state().set_currentState(2)
        }
        if (IsNull(this.$1_3)) return;
        if (!this.$1I_3) {
            this.$4Q_3();
            this.$6S_3();
            this.$6R_3();
            this.$1I_3 = true
        } else if (this.IsInvokedFromProductFlyOut) {
            var $v_1 = this.$6z_3();
            if ($v_1 !== this.$2S_3) {
                this.$2S_3 = $v_1;
                var $v_2 = this.get_$4s_3();
                $v_2.AddParam("PriceLevelId", this.$2S_3);
                this.$6S_3()
            }
        }
        this.$1_3.get_options().set_width($P_CRM(this.$0_3.get_element()).width());
        this.$52_3();
        this.$1_3.show(this.$9_3, this.$P_3);
        this.$11_3.find(".ui-dialog-content").addClass("ui-QuickAddFlyout-Content");
        this.$11_3.find(".ui-dialog-content").find("td[style]").first().css("padding-left", "0px");
        this.$11_3.find("input").val("");
        this.$50_3(null)
    },
    $4l_3: function() {
        this.$J_3.hide();
        if (!IsNull(this.$C_3)) {
            this.$C_3.hideError();
            this.$b_3 = null
        }
    },
    $CN_3: function($p0, $p1, $p2) {
        this.$1a_3.children().first().attr("id", "lookup_" + this.ParentGridId);
        this.$1a_3.children().first().attr($p0, "_" + this.ParentGridId);
        this.$1a_3.children().first().attr($p1, $p2)
    },
    $52_3: function() {
        this.$1_3.set_dialogLeft($P_CRM(this.$0_3.get_element()).offset().left);
        this.$1_3.set_dialogTop(this.$9_3.offset().top + this.$9_3.outerHeight())
    },
    $4Y_3: function() {
        this.$2c_3();
        this.$V_3 = true
    },
    $2c_3: function() {
        this.$1_3 = new Mscrm.InlineFlyOutDialog;
        this.$1_3.setContent(this.$1a_3);
        this.$9Q_3();
        this.$1_3.get_options().set_dialogClass("ui-dialog-minimal");
        this.$1_3.get_options().set_height(25);
        this.$52_3();
        this.$1_3.set_position("custom");
        this.$1_3.set_shouldDisposeContent(false);
        this.$1_3.get_options().set_showCloseButton(false);
        this.$1_3.get_options().set_showButtonPane(false);
        this.$1_3.get_options().set_closeOnEscape(true);
        this.$1_3.get_options().set_applyAnchorClassChange(false);
        this.$1_3.get_options().set_modal(false);
        this.$1_3.get_options().set_letjQueryHandleTabbing(true);
        this.$11_3 = this.$1_3.dialogChrome()
    },
    $9Q_3: function() {
        if (!IsNull(this.$1K_3) && this.$1K_3.length > 0) {
            var $v_0 = this.$1K_3.attr("data-attributeName"), $v_1 = null;
            switch (this.TargetEntityType) {
            case "connection":
                if (!isNullOrEmptyString(this.ConnectionToEntity)) $v_1 = this.ConnectionToEntity;
                else $v_1 = this.TargetEntityType;
                break;
            case "quotedetail":
            case "opportunityproduct":
            case "salesorderdetail":
            case "invoicedetail":
                $v_1 = "productpricelevel";
                break;
            default:
                $v_1 = this.TargetEntityType;
                break
            }
            if (IsNull(this.$K_3)) {
                this.$K_3 = Mscrm.InlineControlFactory
                    .createInlineLookupControlForDom(this.$1K_3, $v_0, $v_1, this.$5B_3, this.$1_3.get_id());
                var $v_3 = Xrm.Page.ui;
                $v_3.controls.add(this.$K_3);
                this.TargetEntityType === "systemuser" &&
                    Xrm.Page.data.entity.getEntityName() === "team" &&
                    this.$K_3.get_chromeElement().attr("isInlineNewEnabled", "0");
                this.TargetEntityType === "socialprofile" &&
                    this.$K_3.get_chromeElement().attr("isInlineNewEnabled", "0")
            }
            var $v_2 = this.$0_3.GetParameter("relName");
            if ($v_2 === "queuemembership_association") {
                var $v_4 = {};
                $v_4["otype"] = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$v_1.toLowerCase()];
                $v_4["otypeTeam"] = Mscrm.EntityPropUtil.EntityTypeName2CodeMap["team".toLowerCase()];
                $v_4["otypename"] = $v_1;
                $v_4["otypeteamname"] = "team";
                var $v_5 = String.format("{0}:{1}:{2}", $v_4["otypename"], $v_4["otype"], $v_4["otypename"]),
                    $v_6 = String
                        .format("{0}:{1}:{2}", $v_4["otypeteamname"], $v_4["otypeTeam"], $v_4["otypeteamname"]),
                    $v_7 = this.$6r_3(this.$1K_3);
                $v_7.set_lookupTypes(String.format("{0},{1}", $v_4["otype"], $v_4["otypeTeam"]));
                $v_7.set_lookupTypeNames(String.format("{0},{1}", $v_5, $v_6));
                $v_7.set_lookupBrowse(false);
                $v_7.populateType()
            }
        }
    },
    $6r_3: function($p0) {
        var $v_0 = $P_CRM("table.ms-crm-Lookup", $p0),
            $v_1 = $v_0[0],
            $v_2 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_1);
        if (IsNull($v_2)) {
            var $v_3 = $P_CRM("td.Lookup_RenderButton_td", $v_1), $v_4 = $P_CRM("img", $v_3);
            $v_2 = Mscrm.FormControlInputBehavior.GetElementBehavior($v_4[0])
        }
        $v_2 = this.$B4_3($v_2);
        return $v_2
    },
    $B4_3: function($p0) {
        var $v_0 = this.$76_3();
        !isNullOrEmptyString($v_0) && $p0.set_defaultViewId(this.$76_3());
        var $v_1 = this.$A1_3();
        !isNullOrEmptyString($v_1) && $p0.set_viewIdForResolveItem($v_1);
        if (this.IsInvokedFromProductFlyOut) {
            this.$2S_3 = this.$6z_3();
            $p0.AddParam("PriceLevelId", this.$2S_3)
        }
        if (this.ParentGridId === "grid_EntitlementContacts") {
            var $v_2 = Xrm.Page.getAttribute("customerid"), $v_3 = $v_2.getValue(), $v_4 = $v_3[0].type;
            if ($v_4 === "1") $p0.set_filterRelationshipId("contact_customer_accounts");
            else $v_4 === "2" && $p0.set_filterRelationshipId("contact_customer_contacts");
            $p0.set_dependantAttributeName("entitlement.customerid");
            $p0.set_dependantAttributeType($v_4);
            $p0.AddParam("AllowFilterOff", "0")
        }
        return $p0
    },
    $6z_3: function() {
        var $v_0 = Xrm.Page.getAttribute("pricelevelid"), $v_1 = $v_0.getValue(), $v_2 = $v_1[0].id;
        return $v_2
    },
    $4Q_3: function() {
        !window.UseTabletExperience && $P_CRM(window).resize(this.$$d_$7F_3);
        var $$t_2 = this;
        this.$1_3.bind("flyout-visiblechanged",
            function($p1_0) {
                var $v_0 = $$t_2.$1_3.get_visible();
                if (!IsNull($$t_2.$K_3) && !$v_0 && !$$t_2.$K_3.get_isValid()) {
                    $$t_2.$K_3.get_dataContext().set_editValue("");
                    if ($$t_2.$K_3.get_isValid());
                }
            });
        $P_CRM("body").click(this.$$d_$3d_3)
    },
    $7F_3: function($p0) { this.$1_3.hide() },
    $6R_3: function() {
        this.$J_3.mouseover(this.$$d_$65_3).mouseout(this.$$d_$4t_3);
        var $v_0 = this.$J_3.children("#ErrorStatusIcon_" + this.AttributeId);
        $v_0.focus(this.$$d_$65_3);
        $v_0.blur(this.$$d_$4t_3);
        var $$t_2 = this;
        this.$t_3 = function() { $$t_2.$4l_3() };
        Mscrm.InlineEditDataService.get_dataService().add_entitySaved(this.$t_3);
        var $$t_3 = this;
        $addHandler(window,
            "unload",
            function($p1_0) {
                if (IsNull($$t_3.$t_3)) return;
                !Mscrm.InlineEditDataService.get_dataService().get_isDisposed() &&
                    Mscrm.InlineEditDataService.get_dataService().remove_entitySaved($$t_3.$t_3);
                $$t_3.$t_3 = null
            })
    },
    $3d_3: function($p0) {
        var $v_0 = this.$m_3;
        if (this.$0_3.get_gridType() === Mscrm.GridControl.associatedGrid && !IsNull(this.$10_3)) {
            this.$6p_3();
            $v_0 = this.$10_3
        }
        var $v_1 = String.format("{0}|{1}|SubGridAssociated|Mscrm.SubGrid.{0}.{2}",
                this.$0_3.get_entityTypeName(),
                this.$0_3.get_getRelationshipTypeName(),
                "AddExistingMemberAssoc"),
            $v_2 = $P_CRM($get($v_1)),
            $v_3 = $P_CRM($p0.target),
            $$t_9 = this,
            $v_4 = $v_3.parents().filter(function($p1_0) { return $v_3.parents().eq($p1_0).css("z-index") !== "auto" })
                .first().css("z-index");
        if (isNullOrEmptyString($v_4)) $v_4 = "0";
        var $v_5 = parseInt($v_4, 10), $v_6 = isNaN($v_5) || $v_5 <= 999;
        if (!IsNull(this.$11_3) &&
            !this.$11_3.has($p0.target).length &&
            !$v_0.is($p0.target) &&
            !$v_0.has($p0.target).length &&
            !$v_2.is($p0.target) &&
            !$v_2.has($p0.target).length &&
            $v_6 &&
            !IsNull(this.$K_3)) {
            this.$K_3.get_state().set_currentState(0);
            this.$1_3.hide()
        }
    },
    $95_3: function($p0) {
        var $v_0 = this.get_$4s_3();
        switch ($p0.keyCode) {
        case 27:
            if (!$v_0.isMruVisible()) {
                this.$K_3.get_state().set_currentState(0);
                this.$1_3.hide();
                this.$0_3.get_addContextualButton().focus();
                $p0.stopPropagation();
                $p0.preventDefault()
            }
            break
        }
    },
    $6S_3: function() {
        var $v_0 = this.get_$4s_3(), $v_1 = $v_0.getLookupEdit();
        $addHandler($v_1.parentNode, "keydown", this.$$d_$95_3);
        var $$t_D = this;
        $v_0.add_change(function($p1_0, $p1_1) {
            var $v_2 = $p1_0, $v_3 = $p1_1, $v_4 = $v_3.get_result().items;
            if (IsNull($v_4) || !$v_4.length) return;
            var $v_5 = $v_2.Items(false, false, false, false, false);
            if (IsNull($v_5) || $v_5.length < 1) return;
            setPerfMarkerTimestamp("StartAddingConnectionTimestamp");
            setPerfMarkerTimestamp("StartAddingCompetitorTimestamp");
            $$t_D.$1_3.hide();
            $v_0.Clear(false);
            for (var $v_6 = $$t_D.$5r_3($v_5, 0), $v_7 = 0; $v_7 < $v_5.length; $v_7++) {
                var $v_8 = $v_5[$v_7].id;
                switch ($$t_D.TargetEntityType) {
                case "competitor":
                    var $v_9 = Number.parseInvariant($$t_D.$0_3.GetParameter("oType")),
                        $v_A = Mscrm.InlineEditDataService.get_formEntity();
                    if (!IsNull($v_A) && ($v_9 === 4 || $v_9 === 3)) {
                        $v_6 = true;
                        $v_3.get_needAssociate() && $$t_D.$8V_3($v_8)
                    }
                    break;
                case "opportunityproduct":
                case "quotedetail":
                case "salesorderdetail":
                case "invoicedetail":
                    $v_6 = true;
                    $$t_D.$8q_3($$t_D.TargetEntityType, $v_5);
                    $v_7 = $v_5.length;
                    break;
                case "systemuser":
                    if (!isNullOrEmptyString($$t_D.TeamTemplateId)) {
                        $v_6 = true;
                        $$t_D.$8S_3($v_8, $$t_D.TeamTemplateId)
                    }
                    break
                }
            }
            !$v_6 && $$t_D.$AD_3($v_3);
            window.setTimeout(function() { $P_CRM($$t_D.$0_3.get_addContextualButton()).focus() }, 60)
        })
    },
    $5r_3: function($p0, $p1) {
        var $v_0 = false;
        if ($p1 >= $p0.length) return true;
        switch (this.TargetEntityType) {
        case "connection":
            $v_0 = true;
            this.$8n_3($p0, this.$2p_3[this.ConnectionToEntity].toString(), $p1);
            break
        }
        return $v_0
    },
    $6p_3: function() {
        var $v_0 = String.format("{0}|{1}|SubGridAssociated|Mscrm.SubGrid.{0}.{2}",
                this.$0_3.get_entityTypeName(),
                this.$0_3.get_getRelationshipTypeName(),
                "AddExistingStandard"),
            $v_1 = String.format("{0}|{1}|SubGridAssociated|Mscrm.SubGrid.{0}.{2}",
                this.$0_3.get_entityTypeName(),
                this.$0_3.get_getRelationshipTypeName(),
                "AddExistingAssoc"),
            $v_2 = String.format("{0}|{1}|SubGridAssociated|Mscrm.SubGrid.{0}.{2}",
                this.$0_3.get_entityTypeName(),
                this.$0_3.get_getRelationshipTypeName(),
                "AddExistingMemberAssoc");
        this.$10_3 = $P_CRM($get($v_1));
        if (IsNull(this.$10_3) || !this.$10_3.length) {
            this.$10_3 = $P_CRM($get($v_0));
            if (IsNull(this.$10_3) || !this.$10_3.length) this.$10_3 = $P_CRM($get($v_2))
        }
    },
    $8n_3: function($p0, $p1, $p2) {
        var $v_0 = $p0[$p2].id,
            $$t_A = this,
            $v_1 = function() {
                setPerfMarkerTimestamp("FinishAddingConnectionTimestamp");
                $$t_A.$0_3.Refresh();
                setPerfMarkerTimestamp("FinishRefreshingSubGridLiteTimestamp");
                return true
            },
            $v_2 = this.$8s_3($v_1, $p0, $p2),
            $$t_B = this,
            $v_3 = function($p1_0) {
                $$t_B.$54_3($p1_0);
                return true
            },
            $v_4 = this.$8o_3($v_3, $p0, $p2),
            $v_5 = Mscrm.InlineEditDataServiceProxy.get_busy();
        !$v_5 && Mscrm.InlineEditDataServiceProxy.createConnection($v_0, this.ConnectionToEntity, $p1, $v_2, $v_4)
    },
    $8s_3: function($p0, $p1, $p2) {
        var $$t_4 = this;
        return function($p1_0) {
            $p2 = $p2 + 1;
            if ($p2 < $p1.length) $$t_4.$5r_3($p1, $p2);
            else $p0($p1_0);
            return true
        }
    },
    $8o_3: function($p0, $p1, $p2) {
        var $$t_4 = this;
        return function($p1_0) {
            $p2 = $p2 + 1;
            if ($p2 < $p1.length) $$t_4.$5r_3($p1, $p2);
            else $p0($p1_0);
            return true
        }
    },
    $8S_3: function($p0, $p1) {
        var $$t_3 = this, $$t_4 = this;
        Mscrm.InlineEditDataService.addUserToRecordAccessTeam($p0,
            $p1,
            function() {
                $$t_3.$0_3.Refresh();
                return true
            },
            function($p1_0) {
                $$t_4.$54_3($p1_0);
                return true
            })
    },
    $8V_3: function($p0) {
        var $$t_2 = this, $$t_3 = this;
        Mscrm.InlineEditDataService.associateToCompetitor($p0,
            function() {
                setPerfMarkerTimestamp("FinishAddingCompetitorTimestamp");
                setPerfMarkerTimestamp("FinishAddingConnectionTimestamp");
                $$t_2.$0_3.Refresh();
                setPerfMarkerTimestamp("FinishRefreshingSubGridLiteTimestamp");
                return true
            },
            function($p1_0) {
                $$t_3.$54_3($p1_0);
                return true
            })
    },
    $8q_3: function($p0, $p1) {
        var $v_0 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$p0];
        if ($v_0 <= 0 || $p1.length <= 0) return;
        for (var $v_1 = [], $v_2 = 0; $v_2 < $p1.length; $v_2++) {
            var $v_3 = {};
            $v_3["productid"] = $p1[$v_2].id;
            $v_1[$v_2] = $v_3
        }
        setPerfMarkerTimestamp("OpportunityProducttoAdd");
        var $$t_8 = this;
        Mscrm.ProductDetail.createProduct($v_1,
            function($p1_0) {
                for (var $v_4 = 0;
                    $v_4 < $p1_0.length;
                    $v_4++
                ) Mscrm.ProductEntityInlineEditGrid.addBundleIdForExpansion($p1_0[$v_4].toString());
                $$t_8.$0_3.ResetPageNumber();
                $$t_8.$0_3.Refresh();
                Mscrm.GridControlLite.recalculateRecord()
            },
            this.$$d_$Cc_3)
    },
    $AD_3: function($p0) {
        var $v_0 = Number.parseInvariant(this.$0_3.GetParameter("otc")),
            $v_1 = Number.parseInvariant(this.$0_3.GetParameter("oType")),
            $v_2 = this.$0_3.GetParameter("oId"),
            $v_3 = GetParentObject($v_2, $v_1),
            $v_4 = $p0.get_result(),
            $v_5 = this.$0_3.get_addContextualButton().attributes.getNamedItem("action").value;
        if (this.$0_3.get_gridType() === Mscrm.GridControl.associatedGrid) $v_5 = this.$10_3.attr("command");
        if ($v_5.indexOf("AddExistingRecordFromSubGridAssociated") > -1 ||
            $v_5
            .indexOf("AddExistingMemberFromSubGridAssociated") >
            -1) $p0.get_needAssociate() && this.$8I_3($v_0, $v_4, this.$0_3, $v_3);
        else $v_5.indexOf("AddExisting") > -1 && this.$8J_3($v_0, $v_4, this.$0_3, $v_3);
        !IsNull(window.IS_OUTLOOK_CLIENT) && window.IS_OUTLOOK_CLIENT && this.$Bw_3(this.$0_3)
    },
    $Bw_3: function($p0) {
        var $v_0 = $p0.GetParameter("relName"), $v_1 = false;
        switch ($v_0) {
        case "queuemembership_association":
            $v_1 = true;
            break;
        default:
            $v_1 = false;
            break
        }
        if ($v_1) {
            var $v_2 = Xrm.Page.data.entity.getEntityName(),
                $v_3 = Xrm.Internal.getEntityCode($v_2),
                $v_4 = Xrm.Page.data.entity.getId();
            Xrm.Internal.refreshParentGrid($v_3, $v_2, $v_4)
        }
    },
    $8J_3: function($p0, $p1, $p2, $p3) {
        if (!IsNull($p2)) {
            var $v_0 = $p2.GetParameter("relName"), $v_1 = null;
            switch ($v_0) {
            case "goal_parent_goal":
                $v_1 = associateGoalAction;
                break;
            case "MobileOfflineProfile_SystemUser":
                this.$8W_3($p1, $v_1, $p3, $v_0, $p0);
                return;
            default:
                $v_1 = window.parent.assocOneToManyAction;
                if (IsNull($v_1)) $v_1 = assocOneToManyAction;
                break
            }
            $v_1($p1, $p0, $v_0, $p3)
        }
    },
    $8W_3: function($p0, $p1, $p2, $p3, $p4) {
        for (var $v_0 = new Sys
                     .StringBuilder,
            $v_2 = 0;
            $v_2 < $p0.items.length;
            $v_2++) $v_0.append("<value>" + CrmEncodeDecode.CrmXmlEncode($p0.items[$v_2].id) + "</value>");
        var $v_1 =
                "<fetch mapping='logical' distinct='true'><entity name='systemuser'><attribute name='fullname' /><attribute name='systemuserid' /><attribute name='mobileofflineprofileid' /><filter type='and'><condition attribute='systemuserid' operator='in'>" + $v_0 + "</condition><condition attribute='mobileofflineprofileid' operator='not-null'></condition><condition attribute='mobileofflineprofileid' operator='ne' value='" + $p2["id"].toString() + "'></condition></filter></entity></fetch>",
            $$t_C = this;
        Xrm.Internal.messages.retrieveMultiple($v_1).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $v_3 = $p1_0.entityCollection;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.get_count() > 0) {
                        var $v_4 = new Xrm.DialogOptions;
                        $v_4.height = 250;
                        $v_4.width = 550;
                        var $v_5 = new Xrm.ConfirmDialogStrings;
                        $v_5.text = Xrm.Internal.getResourceString("LOCID_MESSAGE_USER_MULTI_PROFILE");
                        $v_5.title = Xrm.Internal.getResourceString("LOCID_TITLE_USER_MULTI_PROFILE");
                        Xrm.Dialog.openConfirmDialog($v_5,
                            $v_4,
                            function() { $p1 = Mscrm.QuickAddFlyOut.$6W($p0, $p1, $p2, $p3, $p4) },
                            null)
                    } else $p1 = Mscrm.QuickAddFlyOut.$6W($p0, $p1, $p2, $p3, $p4)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    },
    $5R_3: function($p0, $p1, $p2, $p3, $p4, $p5) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
            if ($p0.items.length > 0) {
                for (var $v_0 = new Array($p0.items.length), $v_2 = 0; $v_2 < $p0.items.length; $v_2++) {
                    $v_0[$v_2] = new Xrm.LookupObject;
                    $v_0[$v_2].id = $p0.items[$v_2].id;
                    $v_0[$v_2].name = $p0.items[$v_2].name;
                    $v_0[$v_2].entityType = $p0.items[$v_2].type
                }
                var $v_1 = null;
                $p4 = Mscrm.InternalUtilities.JSTypes.isNull($p4) ? -1 : $p4;
                $v_1 = $p4.toString() === "-1" ? "false" : $p4.toString() === "2" ? "true" : "false";
                Xrm.Internal.associateObjects($p5["objectTypeCode"].toString(),
                    $p5["id"].toString(),
                    $p1,
                    $v_0,
                    $v_1.toString(),
                    $p2,
                    $p3,
                    true);
                Xrm.Internal.refreshParentGrid($p1, "", "")
            }
    },
    $8I_3: function($p0, $p1, $p2, $p3) {
        if (!IsNull($p2)) {
            var $v_0 = $p2.GetParameter("relName"), $v_1 = $p2.GetParameter("roleOrd"), $v_2 = false;
            switch ($p0) {
            case 4300:
                switch ($v_0) {
                case "campaignactivitylist_association":
                    this.$5R_3($p1, $p0, "", $v_0, Number.parseInvariant($v_1), $p3);
                    break;
                case "campaignlist_association":
                    this.$3V_3("locAssocCampaignAction", $p1, $p0, "subType=targetLists", $v_0, $v_1, $p3);
                    break;
                case "listlead_association":
                case "listcontact_association":
                case "listaccount_association":
                    this.$5R_3($p1, $p0, "", $v_0, Number.parseInvariant($v_1), $p3);
                    break;
                default:
                    $v_2 = true;
                    break
                }
                break;
            case 4400:
                switch ($v_0) {
                case "campaignlist_association":
                    this.$3V_3("openListCaAssociation", $p1, $p0, "subType=targetLists", $v_0, $v_1, $p3);
                    break;
                case "campaigncampaign_association":
                    this.$3V_3("locAssocCampaignAction", $p1, $p0, "", $v_0, $v_1, $p3);
                    break;
                default:
                    $v_2 = true;
                    break
                }
                break;
            case 1024:
                switch ($v_0) {
                case "productsubstitute_association":
                    this.$3V_3("associateProductAction", $p1, $p0, "", $v_0, $v_1, $p3);
                    break;
                case "productassociation_association":
                    this.$3V_3("associateProductAction", $p1, $p0, "", $v_0, $v_1, $p3);
                    break;
                case "campaignproduct_association":
                    this.$5R_3($p1, $p0, "", $v_0, Number.parseInvariant($v_1), $p3);
                    break;
                default:
                    $v_2 = true;
                    break
                }
                break;
            case 8:
                switch ($v_0) {
                case "queuemembership_association":
                    $p1 = this.$8h_3($p1);
                    $v_2 = true;
                    break;
                default:
                    $v_2 = true;
                    break
                }
                break;
            default:
                $v_2 = true;
                break
            }
            if ($v_2) {
                var $v_3 = window.parent.locAssocObjAction;
                if (IsNull($v_3)) $v_3 = locAssocObjAction;
                $v_3($p1, $p0, "", $v_0, $v_1, $p3)
            }
        }
    },
    $8h_3: function($p0) {
        for (var $v_0 = new LookupItems, $v_1 = 0, $v_2 = 0; $v_2 < $p0.items.length; $v_2++)
            if ($p0.items[$v_2].type === Mscrm.EntityPropUtil.EntityTypeName2CodeMap["team"].toString()) {
                var $v_3 = new RemoteCommand("UserManager", "RetrieveMembers", null);
                $v_3.SetParameter("teamId", $p0.items[$v_2].id);
                var $v_4 = $v_3.Execute();
                if ($v_4.Success)
                    for (var $v_5 = $v_4.ReturnValue.toString(),
                        $v_6 = XUI.Xml.LoadXml($v_5),
                        $v_7 = XUI.Xml.SelectNodes($v_6, "/systemusers/systemuser/systemuserid", null),
                        $$arr_9 = $v_7,
                        $$len_A = $$arr_9.length,
                        $$idx_B = 0;
                        $$idx_B < $$len_A;
                        ++$$idx_B) {
                        var $v_8 = $$arr_9[$$idx_B], $v_9 = new LookupItem;
                        $v_9.id = XUI.Xml.GetText($v_8);
                        $v_0.items[$v_1++] = $v_9
                    }
            } else $v_0.items[$v_1++] = $p0.items[$v_2];
        return $v_0
    },
    $3V_3: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = Mscrm.Utilities.createCallbackFunctionObject($p0, window.parent, null, false), $v_1 = $v_0.callback;
        if (IsNull($v_1)) {
            $v_0 = Mscrm.Utilities.createCallbackFunctionObject($p0, window, null, false);
            $v_1 = $v_0.callback
        }
        $v_1($p1, $p2, $p3, $p4, $p5, $p6)
    },
    $A1_3: function() {
        var $v_0 = "";
        switch (this.TargetEntityType) {
        case "incident":
            if (this.ParentGridId === "ChildCasesGrid") $v_0 = "72210bbb-d9d5-42df-8efd-39395a3cd7a7";
            break
        }
        return $v_0
    },
    $76_3: function() {
        var $v_0 = "";
        switch (this.TargetEntityType) {
        case "quotedetail":
        case "opportunityproduct":
        case "salesorderdetail":
        case "invoicedetail":
            $v_0 = "BE653221-C406-4DD1-BC80-52EC2420BDBA";
            break;
        case "list":
            $v_0 = "b21acaf1-ab60-4761-bc05-9575784a6f80";
            break;
        case "opportunity":
            var $v_1 = Number.parseInvariant(this.$0_3.GetParameter("oType"));
            if ($v_1 === 123 && this.ParentGridId === "OpportunityCurrentFiscalYear"
            ) $v_0 = "5cfca9b8-2d7c-e211-bb35-00155d882402";
            break;
        case "incident":
            if (this.ParentGridId === "ChildCasesGrid") $v_0 = "CFB670FE-D205-450F-8EDB-8F247081ADB5";
            break;
        case "convertrule":
            if (this.ParentGridId === "RecordCreationAndUpdateRuleGrid")
                if (Mscrm.FeatureControl.get_Current()
                    .isFeatureEnabled("FCB.AnyChanelToAnyEntityRecordCreation")
                ) $v_0 = "B2B8ACC3-BCF0-4077-8C49-0970E3FF2637";
                else $v_0 = "A4A41F0F-EDC6-4E03-A020-0633FCF7E7EE";
            break
        }
        return $v_0
    },
    $50_3: function($p0) {
        var $v_0 = $P_CRM("#" + this.AttributeId + "_titleWithErrors").innerWidth() - 4;
        if (this.$J_3.is(":visible")) $v_0 = $v_0 - this.$J_3.outerWidth(true);
        $P_CRM("#" + this.AttributeId + "_titleText").css("max-width", $v_0 + "px")
    },
    $Cc_3: function($p0) {
        if (!IsNull($p0
                .get_organizationServiceFault()) &&
            !IsNull($p0.get_organizationServiceFault().get_errorCode())) {
            var $v_0 = $p0.get_organizationServiceFault().get_errorCode(), $v_1 = Xrm.Internal.getErrorMessage($v_0);
            if (isNullOrEmptyString($v_1)) $v_1 = $p0.get_organizationServiceFault().get_message();
            this.$Cb_3($v_1)
        }
    },
    $Cb_3: function($p0) {
        var $v_0 = {}, $v_1 = {};
        $v_1["DisplayText"] = $p0;
        $v_0["_error"] = $v_1;
        this.$54_3($v_0)
    },
    $54_3: function($p0) {
        this.$J_3.css("display", "inline-block");
        var $v_0 = $p0["_error"], $v_1 = {};
        $v_1["description"] = $p0;
        var $v_2 = $v_1["description"];
        if (!IsNull($v_0)) this.$b_3 = $v_0["DisplayText"];
        else if (!IsNull($v_2.get_description())) this.$b_3 = $v_2.get_description().toString();
        else this.$b_3 = "";
        this.$50_3(null)
    },
    $65_3: function($p0) {
        if (!IsNull(this.$b_3)) {
            this.get_$5c_3().set_forceFlipped(Sys.Browser.agent === Sys.Browser.InternetExplorer &&
                this.$0_3.get_width() !== this.$0_3.$2_3.get_width());
            $p0.stopImmediatePropagation();
            this.get_$5c_3().showError(this.$b_3)
        }
    },
    $4t_3: function($p0) { !IsNull(this.$b_3) && !IsNull(this.$C_3) && this.$C_3.hideError() },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = Xrm.Page.ui;
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.controls) &&
            $v_0.controls.remove(this.$K_3);
        var $v_1 = this.get_$4s_3();
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.getLookupEdit();
            $clearHandlers($v_2.parentNode)
        }
        $P_CRM(window).unbind("resize", this.$$d_$50_3);
        !window.UseTabletExperience && $P_CRM(window).unbind("resize", this.$$d_$7F_3);
        !IsNull(this.$m_3) && this.$m_3.off("click", this.$$d_onClick);
        $P_CRM("body").unbind("click", this.$$d_$3d_3);
        this.$J_3.unbind();
        if (!IsNull(this.$K_3)) {
            this.$1K_3.find("input").unbind();
            this.$K_3.dispose()
        }
        if (!IsNull(this.$1_3)) {
            this.$1_3.unbind();
            this.$1_3.dispose()
        }
        this.$1a_3 = null;
        !IsNull(this.$C_3) && this.$C_3.dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.ProductGridFlyOut = function(element) {
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$Bj_3 = Function.createDelegate(this, this.$Bj_3);
    this.$$d_$7F_3 = Function.createDelegate(this, this.$7F_3);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$1k_3 = $find("SubGridCommandBarData");
    Mscrm.ProductGridFlyOut.initializeBase(this, [element]);
    this.$16_3 = element;
    var $v_0 = $P_CRM(this.$16_3.parentNode.parentNode), $v_1 = $v_0.siblings(".ms-crm-Grid-Title");
    this.$1_3 = null;
    this.$V_3 = false;
    this.$0_3 = null
};
Mscrm.ProductGridFlyOut.prototype = {
    $16_3: null,
    $m_3: null,
    $V_3: false,
    $1_3: null,
    $11_3: null,
    $9_3: null,
    $P_3: null,
    $0_3: null,
    $1I_3: false,
    ParentGridId: null,
    TargetEntityType: null,
    initialize: function() {
        if ($P_CRM("#hiddenAddPrivilegeCheck_" + this.ParentGridId).length <= 0) return;
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$0_3 = $find(this.ParentGridId);
        this.$m_3 = $P_CRM(this.$0_3.get_addContextualButton());
        this.$m_3.on("click", this.$$d_onClick)
    },
    onClick: function(eventObject) {
        var $v_0 = false, $v_1 = false;
        this.$9_3 = this.$m_3;
        this.$P_3 = $P_CRM("#tdAreas");
        !this.$V_3 && this.$4Y_3();
        if (IsNull(this.$1_3)) return;
        if (!this.$At_3()) {
            alert(window.LOCID_NO_READ_ON_PRICELIST);
            return
        } else if (this.$Ar_3()) {
            alert(window.LOCID_PRICE_LIST_NOT_SELECTED);
            return
        }
        if (!this.$1I_3) {
            this.$4Q_3();
            this.$1I_3 = true
        }
        this.$1_3.get_options().set_width(150);
        this.$52_3();
        $P_CRM("#GetProducts").show();
        $P_CRM("#WriteinProduct").show();
        this.$1_3.get_options().set_height(this.TargetEntityType === "opportunityproduct" ? 50 : 74);
        if (!IsNull(this.$0_3.get_lockPriceContextualButton())) if (this.$0_3.isPriceLocked()) $v_0 = true;
        var $v_2 = $P_CRM("#hiddenOverridePricePrivilegeCheck_" + this.ParentGridId);
        if (IsNull($v_2) || $v_2.length <= 0) $v_1 = true;
        this.$B1_3($v_0, $v_1);
        this.$1_3.show(this.$9_3, this.$P_3)
    },
    $B1_3: function($p0, $p1) {
        if ($p0 || $p1)
            if (!$p0 && $p1) {
                $P_CRM("#WriteinProduct").hide();
                if (this.$1_3.get_options().get_height() === 74) this.$1_3.get_options().set_height(50);
                else this.$1_3.get_options().get_height() === 50 && this.$1_3.get_options().set_height(28)
            } else {
                $P_CRM("#WriteinProduct").hide();
                $P_CRM("#GetProducts").hide();
                this.$1_3.get_options().set_height(28)
            }
    },
    $52_3: function() {
        var $v_0 = this.TargetEntityType === "opportunityproduct" ? -1 * 150 : 10;
        this.$1_3.set_dialogLeft(this.$m_3.offset().left + $v_0);
        this.$1_3.set_dialogTop(this.$9_3.offset().top + this.$9_3.outerHeight() + 10)
    },
    $4Y_3: function() {
        this.$2c_3();
        this.$V_3 = true
    },
    $2c_3: function() {
        this.$1_3 = new Mscrm.FlyOutDialog;
        var $v_0 = this.$9O_3(), $v_1 = $P_CRM($v_0);
        this.$1_3.setContent($v_1);
        this.$1_3.get_options().set_height(this.TargetEntityType === "opportunityproduct" ? 50 : 74);
        this.$52_3();
        this.$1_3.set_shouldDisposeContent(false);
        this.$1_3.set_position("custom");
        this.$1_3.get_options().set_showCloseButton(false);
        this.$1_3.get_options().set_showButtonPane(false);
        this.$1_3.get_options().set_closeOnEscape(true);
        this.$1_3.get_options().set_applyAnchorClassChange(false);
        this.$1_3.get_options().set_modal(false);
        this.$1_3.get_options().set_letjQueryHandleTabbing(true);
        this.$11_3 = this.$1_3.dialogChrome()
    },
    $4Q_3: function() {
        $P_CRM(window).resize(this.$$d_$7F_3);
        $P_CRM("#GetProducts").click(this.$$d_$Bj_3);
        $P_CRM("#ExistingProduct").click(this.$$d_$Bj_3);
        $P_CRM("#WriteinProduct").click(this.$$d_$Bj_3);
        $P_CRM("#GetProducts").keypress(this.$$d_$Bj_3);
        $P_CRM("#ExistingProduct").keydown(this.$$d_$Bj_3);
        $P_CRM("#WriteinProduct").keydown(this.$$d_$Bj_3);
        $P_CRM("body").click(this.$$d_$3d_3)
    },
    $7F_3: function($p0) { this.$1_3.hide() },
    $3d_3: function($p0) {
        var $v_0 = $P_CRM(this.$0_3.get_addContextualButton()),
            $v_1 = $P_CRM($p0.target),
            $$t_7 = this,
            $v_2 = $v_1.parents().filter(function($p1_0) { return $v_1.parents().eq($p1_0).css("z-index") !== "auto" })
                .first().css("z-index");
        if (isNullOrEmptyString($v_2)) $v_2 = "0";
        var $v_3 = parseInt($v_2, 10), $v_4 = isNaN($v_3) || $v_3 <= 999;
        !IsNull(this.$11_3) &&
            !this.$11_3.has($p0.target).length &&
            !$v_0.is($p0.target) &&
            !$v_0.has($p0.target).length &&
            $v_4 &&
            this.$1_3.hide()
    },
    $9O_3: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<div id='ProductGridFlyout' class='productgridflyout'> <ul id='ProductFlyout'>");
        !Mscrm.InternalUtilities._String.isNullOrEmpty(this.$4d_3("ExistingProduct")) &&
            $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
                "ExistingProduct",
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_FLYOUT_EXISTINGPRODUCT)));
        !Mscrm.InternalUtilities._String.isNullOrEmpty(this.$4d_3("WriteinProduct")) &&
            $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
                "WriteinProduct",
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_FLYOUT_WRITEINPRODUCT)));
        !Mscrm.InternalUtilities._String.isNullOrEmpty(this.$4d_3("GetProducts")) &&
            $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
                "GetProducts",
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_FLYOUT_GETPRODUCTS)));
        $v_0.append("</ul></div>");
        return $v_0.toString()
    },
    $Ar_3: function() {
        var $v_0 = Xrm.Page.getAttribute("pricelevelid");
        return IsNull($v_0) || IsNull($v_0.getValue())
    },
    $At_3: function() {
        var $v_0 = Xrm.Page.getAttribute("pricelevelid");
        return !IsNull($v_0) && $v_0.getUserPrivilege().canRead
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $P_CRM(window).unbind("resize", this.$$d_$7F_3);
        this.$m_3.off("click", this.$$d_onClick);
        $P_CRM("body").unbind("click", this.$$d_$3d_3);
        this.$1_3.unbind();
        this.$1_3.dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $Bj_3: function($p0) {
        if ($p0.type === "keydown" && $p0.which !== 13) {
            if ($p0.which === 40) $P_CRM($p0.target).next().focus();
            else $p0.which === 38 && $P_CRM($p0.target).prev().focus();
            return
        }
        var $v_0 = this.$4d_3($p0.currentTarget.id);
        this.$1_3.hide();
        this.$9A_3($v_0)
    },
    $9A_3: function($p0) {
        if (!IsNull(this.$1k_3) && !Mscrm.InternalUtilities._String.isNullOrEmpty($p0)) {
            var $v_0 = this.$1k_3.get_selectedControl();
            this.$1k_3.setCurrentSelectedControl(this.$0_3);
            this.$1k_3.executeCommand($p0, null);
            this.$1k_3.setCurrentSelectedControl($v_0)
        }
    },
    $4d_3: function($p0) {
        var $v_0 = "{0}|{1}|SubGridStandard|Mscrm.SubGrid.ProductsFlyout.{2}",
            $v_1 = "{0}|{1}|SubGridStandard|Mscrm.SubGrid.{2}.{3}",
            $v_2 = this.$0_3.get_entityTypeName(),
            $v_3 = this.$0_3.get_getRelationshipTypeName(),
            $v_4 = String.format($v_0, $v_2, $v_3, $p0),
            $v_5 = String.format($v_1, $v_2, $v_3, $v_2, $p0);
        if (this.$1k_3.isControlEnabled($v_4) && this.$1k_3.isControlVisible($v_4, $v_5)) return $v_4;
        return ""
    }
};
Mscrm.LineItemProducts = function() {};
Mscrm.LineItemProducts.prototype = { products: null };
Mscrm.LineItemProductDetail = function() {};
Mscrm.LineItemProductDetail.prototype = { productId: null, productName: null };
Mscrm.LineItemMetadata = function() {};
Mscrm.LineItemMetadata.prototype = {
    entityName: null,
    entityPrimaryKey: null,
    basketRecordLookupAttributeName: null,
    itemIdAttributeName: null,
    parentEntityPrimaryAttributeName: null
};
Mscrm.ProductSuggestionsFlyOut = function(element) {
    Mscrm.ProductSuggestionsFlyOut.initializeBase(this, [element]);
    this.$1_3 = null;
    this.$V_3 = false;
    Mscrm.ProductSuggestionsFlyOut.$3N = element
};
Mscrm.ProductSuggestionsFlyOut.addProductsAndName = function(productId, productName) {
    Mscrm.ProductSuggestionsFlyOut.$j[Mscrm.ProductSuggestionsFlyOut.$j.length] = productId;
    Mscrm.ProductSuggestionsFlyOut.$1v[Mscrm.ProductSuggestionsFlyOut.$1v.length] = productName
};
Mscrm.ProductSuggestionsFlyOut.$6D = function($p0, $p1) {
    var $v_0 = $P_CRM("#suggestion-flyout-productmessagenotification-messageid"),
        $v_1 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea"),
        $v_2 = $v_1.height(),
        $v_3;
    if ($p1.height() > $p1.parent().height()) {
        var $v_4 = $p1.height() - $p1.parent().height();
        $v_3 = $v_2 - $v_4;
        if ($p0) $v_3 = $v_3 - $v_0.height();
        $v_1.css("height", $v_3.toString() + "px");
        var $v_5 = -1 * ($p1.height() / 2);
        $p1.css("margin-top", $v_5.toString() + "px")
    } else if ($p0 && $p1.height() + $v_0.height() > $p1.parent().height()) {
        $v_3 = $v_2 - $v_0.height();
        $v_1.css("height", $v_3.toString() + "px");
        var $v_6 = -1 * ($p1.height() / 2);
        $p1.css("margin-top", $v_6.toString() + "px")
    }
};
Mscrm.ProductSuggestionsFlyOut.setGridEvents = function() {
    var $v_0 = "ms-crm-List-Row", $v_1 = "ms-crm-List-SelectedRow-Lite", $v_2 = $P_CRM("." + $v_0 + ",." + $v_1);
    if (!Mscrm.CrmBrowser.get_currentBrowser().get_isMobileSafari()) {
        $v_2.find("td:nth-child(1) a").keyup(function($p1_0) {
            var $v_3 = $P_CRM(this).parents("tr:first");
            !Mscrm.ProductSuggestionsFlyOut.$5d($p1_0) && $p1_0.which === 9 && $v_3.removeClass().addClass($v_1)
        }).keydown(function($p1_0) {
            var $v_4 = $P_CRM(this).parents("tr:first");
            Mscrm.ProductSuggestionsFlyOut.$5d($p1_0) && $p1_0.which === 9 && $v_4.removeClass().addClass($v_0)
        });
        $v_2.find("td:nth-child(2) a").keyup(function($p1_0) {
            var $v_5 = $P_CRM(this).parents("tr:first");
            if (Mscrm.ProductSuggestionsFlyOut.$5d($p1_0) && $p1_0.which === 9) {
                $v_5.removeClass().addClass($v_1);
                $v_5.next().index() !== -1 && $v_5.next().removeClass().addClass($v_0)
            }
        });
        $v_2.find("td:nth-child(3) a")
            .blur(function() { $P_CRM(this).parents("tr:first").removeClass().addClass($v_0) })
    }
};
Mscrm.ProductSuggestionsFlyOut.$5d = function($p0) { return $p0.shiftKey };
Mscrm.ProductSuggestionsFlyOut.setFlyOutToHideOnCloseClick = function() {
    if (!isNullOrEmptyString(Mscrm.ProductSuggestionsFlyOut.$27)) {
        var $v_0 = $find(Mscrm.ProductSuggestionsFlyOut.$27);
        if (!IsNull($v_0) && !IsNull(Mscrm.ProductSuggestionsFlyOut.$3N)) {
            $v_0.SetParameter("parentGridId", $v_0.get_id());
            Mscrm.GridControlLite.$6.$5P_3(Mscrm.ProductSuggestionsFlyOut.$3N, true);
            $v_0.closeSuggestionFlyOut();
            Mscrm.ProductSuggestionsFlyOut.$3N.focus()
        }
    } else Mscrm.GridControlLite.$6.hideFlyOut()
};
Mscrm.ProductSuggestionsFlyOut.addClick = function() {
    setPerfMarkerTimestamp("AddProductfromOpportunitySuggestionFlyoutStart");
    var $v_0 = $find(Mscrm.ProductSuggestionsFlyOut.$27);
    if (IsNull(Mscrm.ProductSuggestionsFlyOut.$j) || !Mscrm.ProductSuggestionsFlyOut.$j.length) {
        Mscrm.ProductSuggestionsFlyOut.showNotification(0,
            Xrm.Internal.getResourceString("LOCID_SUGGESTIONGRID_ADD_PRODUCT_ERR_MSG"));
        return
    }
    for (var $v_1 = [], $v_4 = 0; $v_4 < Mscrm.ProductSuggestionsFlyOut.$j.length; $v_4++) {
        var $v_5 = {};
        $v_5["productid"] = Mscrm.ProductSuggestionsFlyOut.$j[$v_4];
        $v_1[$v_1.length] = $v_5
    }
    var $v_2 = null, $v_3 = null;
    if (Mscrm.GridControlLite.$6.isUsingCustomLineItem) {
        $v_2 = Mscrm.GridControlLite.$6.lineItemMetadata.entityName;
        $v_3 = Mscrm.GridControlLite.$6.lineItemMetadata.entityPrimaryKey;
        for (var $v_6 = 0; $v_6 < Mscrm.ProductSuggestionsFlyOut.$j.length; $v_6++) {
            var $v_7 = new RemoteCommand("AzureRecommendationWebService", "CreateCustomLineItemEntity");
            $v_7.SetParameter("lineItemEntityLogicalName", $v_2);
            $v_7.SetParameter("basketEntityLookupFieldName",
                Mscrm.GridControlLite.$6.lineItemMetadata.basketRecordLookupAttributeName);
            $v_7.SetParameter("basketEntityId", Xrm.Page.data.entity.getId());
            $v_7.SetParameter("productEntityLookupFieldName",
                Mscrm.GridControlLite.$6.lineItemMetadata.itemIdAttributeName);
            $v_7.SetParameter("productId", Mscrm.ProductSuggestionsFlyOut.$j[$v_6]);
            var $v_8 = $v_7.Execute();
            if (!$v_8.Success);
        }
        $v_0.closeSuggestionFlyOut();
        Mscrm.ProductSuggestionsFlyOut.$j = [];
        Mscrm.ProductSuggestionsFlyOut.$1v = [];
        Mscrm.ProductSuggestionsFlyOut.$27 = null;
        Mscrm.ProductSuggestionsGrid.resetProductCount();
        Xrm.Page.data.refresh(true)
    } else
        Mscrm.ProductDetail.createProduct($v_1,
            function($p1_0) {
                for (var $v_9 = 0;
                    $v_9 < $p1_0.length;
                    $v_9++
                ) Mscrm.ProductEntityInlineEditGrid.addBundleIdForExpansion($p1_0[$v_9].toString());
                $v_0.closeSuggestionFlyOut();
                Mscrm.ProductSuggestionsFlyOut.$j = [];
                Mscrm.ProductSuggestionsFlyOut.$1v = [];
                Mscrm.ProductSuggestionsFlyOut.$27 = null;
                Mscrm.ProductSuggestionsGrid.resetProductCount();
                $v_0.ResetPageNumber();
                $v_0.Refresh();
                Mscrm.GridControlLite.recalculateRecord();
                setPerfMarkerTimestamp("AddProductfromOpportunitySuggestionFlyoutEnd")
            },
            function($p1_0) {
                if (!IsNull($p1_0.get_organizationServiceFault()) &&
                    !IsNull($p1_0.get_organizationServiceFault().get_errorCode())) {
                    var $v_A = $p1_0.get_organizationServiceFault().get_errorCode(),
                        $v_B = Xrm.Internal.getErrorMessage($v_A);
                    if (isNullOrEmptyString($v_B)) $v_B = $p1_0.get_organizationServiceFault().get_message()
                }
            })
};
Mscrm.ProductSuggestionsFlyOut.suggestionsOnChangeHandler = function() {
    var $v_0 = Mscrm.ProductSuggestionsFlyOut.$j.length,
        $v_1 = $P_CRM("#ui-dialog-title-ProductSuggestions_ProductList");
    if ($v_0) {
        var $v_3 = confirm(Xrm.Internal.getResourceString("LOCID_SUGGESTIONGRID_WARNING_PRODUCTCHANGE"));
        if (!$v_3) {
            $v_1.val(Mscrm.GridControlLite.$6.getCurrentProductId());
            return
        }
    }
    var $v_2 = $v_1.val();
    Mscrm.GridControlLite.$6.setCurrentProductId($v_2);
    Mscrm.ProductSuggestionsFlyOut.clearNotifications(2);
    Mscrm.ProductSuggestionsFlyOut.$j = [];
    Mscrm.ProductSuggestionsFlyOut.$1v = [];
    Mscrm.ProductSuggestionsGrid.resetProductCount();
    Mscrm.GridControlLite.$6.refreshAllSuggestionFlyOutGrids()
};
Mscrm.ProductSuggestionsFlyOut.showNotification = function(notification, message) {
    var $v_0 = "";
    switch (notification) {
    case 0:
        $v_0 = "#suggestion-flyout-productmessagenotification-messageid";
        break;
    case 1:
        $v_0 = "#suggestion-flyout-productaddnotification-messageid";
        break;
    default:
        return
    }
    var $v_1 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut"),
        $v_2 = $v_1.find($v_0),
        $v_3 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea");
    if (!IsNull($v_2))
        if (!isNullOrEmptyString(message))
            if ($v_0 === "#suggestion-flyout-productmessagenotification-messageid") {
                var $v_4 = $P_CRM("#suggestion-flyout-productmessagenotification-messageid-span");
                $v_4.html(CrmEncodeDecode.CrmHtmlEncode(message));
                $v_2.show();
                $v_4.focus();
                Mscrm.ProductSuggestionsFlyOut.$6D(true, $v_1)
            } else {
                var $v_5 = $P_CRM("#suggestion-flyout-productaddnotification-messageid-span"),
                    $v_6 = $P_CRM("#productaddnotification-div-id");
                $v_6.attr("title",
                    CrmEncodeDecode.CrmHtmlEncode(String
                        .format(Xrm.Internal.getResourceString("LOCID_ADDPRODUCCOUNT_TOOLTIP"), message)));
                $v_5.html(CrmEncodeDecode.CrmHtmlEncode(message));
                $v_2.show()
            }
        else {
            $v_2.hide();
            Mscrm.ProductSuggestionsFlyOut.$6D(false, $v_1)
        }
};
Mscrm.ProductSuggestionsFlyOut.clearNotifications = function(notification) {
    switch (notification) {
    case 0:
        Mscrm.ProductSuggestionsFlyOut.showNotification(0, "");
        break;
    case 1:
        Mscrm.ProductSuggestionsFlyOut.showNotification(1, "");
        break;
    case 2:
        Mscrm.ProductSuggestionsFlyOut.showNotification(0, "");
        Mscrm.ProductSuggestionsFlyOut.showNotification(1, "");
        break
    }
};
Mscrm.ProductSuggestionsFlyOut.prototype = {
    isUsingCustomLineItem: false,
    lineItemMetadata: null,
    $V_3: false,
    $1I_3: false,
    $32_3: false,
    $34_3: false,
    $41_3: false,
    $1_3: null,
    $9_3: null,
    $P_3: null,
    $3P_3: null,
    $46_3: null,
    $45_3: null,
    $1C_3: null,
    ParentGridId: null,
    IsAddCommandAvailable: false,
    onClick: function(anchor, isFromRibbon) {
        if (IsNull(anchor)) return;
        this.setCurrentProductId(null);
        this.$32_3 = isFromRibbon;
        this.$34_3 = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.ProductRecommendations");
        if (this.$34_3) {
            this.$CD_3();
            this.$41_3 = this.$CC_3();
            if (!this.$41_3 && this.$32_3) this.$1C_3 = null
        }
        this.$9_3 = $P_CRM(anchor);
        this.refreshAllSuggestionFlyOutGrids();
        this.$5P_3(anchor, false);
        this.$P_3 = $P_CRM("#mainContainer").css("position", "absolute");
        if (!this.$V_3) this.$4Y_3();
        else
            !IsNull($P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea-confirm")) &&
                $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea-confirm")
                .css("visibility", !this.IsAddCommandAvailable ? "hidden" : "visible");
        if (!this.$1I_3) {
            this.$4Q_3();
            this.$1I_3 = true
        }
        if (IsNull(this.$1_3)) return;
        var $v_0 = $P_CRM("#ui-dialog-title-ProductSuggestions_ProductName");
        !IsNull($v_0) && $v_0.remove();
        var $v_1 = $P_CRM("#suggestion-flyout-productmessagenotification-messageid");
        !IsNull($v_1) && $v_1.remove();
        var $v_2 = anchor.getAttribute("productname"),
            $v_3 = $P_CRM("#ui-dialog-title-ProductSuggestions_LinkControl_flyoutLoadingArea");
        if (!IsNull($v_3)) {
            var $v_8 = $v_3.parent();
            if (this.$34_3 && this.$41_3 || this.$32_3) {
                var $v_9 = this.$9R_3(), $v_A = $P_CRM("#ui-dialog-title-ProductSuggestions_ProductList");
                !IsNull($v_A) && $v_A.remove();
                $v_8
                    .append('<div class="ui-suggestion-flyout-product-name ms-crm-TextAutoEllipsis" id="ui-dialog-title-ProductSuggestions_ProductName"><span id="ui-dialog-title-ProductSuggestions_PicklistName">' + CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("LOCID_SUGGESTIONGRID_PRODUCT_PICKLISTNAME")) + "</span></div>");
                $v_0 = $P_CRM("#ui-dialog-title-ProductSuggestions_ProductName");
                $v_0.append($v_9)
            } else
                $v_8
                    .append('<div class="ui-suggestion-flyout-product-name ms-crm-TextAutoEllipsis" id="ui-dialog-title-ProductSuggestions_ProductName"> ' + CrmEncodeDecode.CrmHtmlEncode($v_2) + "</div>");
            $v_8
                .append('<div class="ui-suggestion-flyout-productmessagenotification-message ui-suggestion-flyout-titlebar " id="suggestion-flyout-productmessagenotification-messageid" aria-live="polite" aria-atomic="true" title=""></div>')
        }
        var $v_4 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut"),
            $v_5 = $v_4.find("#suggestion-flyout-productmessagenotification-messageid");
        if (!IsNull($v_5)) {
            $v_5.append('<span class="ui-suggestion-flyout-productmessagenotification-message-warning"><img src="' +
                window.CDNURL +
                '/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error" aria-hidden="true"></span>');
            $v_5
                .append('<span class="ui-suggestion-flyout-productmessagenotification-message-span" id="suggestion-flyout-productmessagenotification-messageid-span" tabindex ="0" title="' + CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("LOCID_SUGGESTIONGRID_ADD_PRODUCT_ERR_MSG")) + '"></span>')
        }
        Mscrm.ProductSuggestionsFlyOut.clearNotifications(2);
        Mscrm.ProductSuggestionsFlyOut.$j = [];
        Mscrm.ProductSuggestionsFlyOut.$1v = [];
        Mscrm.ProductSuggestionsGrid.resetProductCount();
        this.$1_3.get_options().set_width(675);
        this.$1_3.get_options().set_height(654);
        this.$1_3.show(this.$9_3, this.$P_3);
        var $v_6 = -1 * ($v_4.height() / 2);
        $v_4.css("margin-top", $v_6.toString() + "px");
        var $v_7 = -1 * ($v_4.width() / 2);
        $v_4.css("margin-left", $v_7.toString() + "px");
        Mscrm.ProductSuggestionsFlyOut.$6D(false, $v_4)
    },
    $4Q_3: function() {
        var $$t_0 = this;
        this.$1_3.bind("flyout-visiblechanged",
            function() {
                if (!$$t_0.$1_3.get_visible()) {
                    $$t_0.$9_3.attr("style", "visibility : visible");
                    $$t_0.$5P_3($$t_0.$9_3[0], true)
                }
            })
    },
    getCurrentProductId: function() {
        if (!this.$3P_3) {
            var $v_0 = null;
            if (this.$32_3) {
                if (this.$1C_3 && this.$1C_3.length) $v_0 = this.$1C_3[0].productId
            } else $v_0 = this.$9_3.parents("tr").attr("productid").replace("{", "").replace("}", "").toLowerCase();
            this.$3P_3 = $v_0
        }
        return this.$3P_3
    },
    setCurrentProductId: function(id) {
        this.$3P_3 = id;
        return id
    },
    $5P_3: function($p0, $p1) {
        if (IsNull($p0) ||
            IsNull($p0.parentNode) ||
            IsNull($p0.parentNode.parentNode) ||
            $p1 && (isNullOrEmptyString(this.$46_3) || isNullOrEmptyString(this.$45_3))) return;
        var $v_0 = $p0.parentNode.parentNode;
        if ($p1) {
            $v_0.setAttribute("onmouseover", this.$46_3);
            $v_0.setAttribute("onmouseout", this.$45_3)
        } else {
            this.$46_3 = $v_0.getAttribute("onmouseover");
            this.$45_3 = $v_0.getAttribute("onmouseout");
            $v_0.removeAttribute("onmouseover");
            $v_0.removeAttribute("onmouseout");
            this.$9_3.show()
        }
    },
    $4Y_3: function() {
        this.$2c_3();
        this.$V_3 = true
    },
    $2c_3: function() {
        this.$1_3 = new Mscrm.FlyOutDialog;
        this.$1_3.setContent(null);
        this.$1_3.set_position("custom");
        this.$1_3.get_options().set_showCloseButton(true);
        $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea-confirm")
            .css("visibility", !this.IsAddCommandAvailable ? "hidden" : "visible");
        this.$1_3.get_options().set_showTitlePane(true);
        this.$1_3.get_options().set_title(CrmEncodeDecode
            .CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("LOCID_SUGGESTIONS")));
        this.$1_3.get_options().set_width(675);
        var $v_0 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut").find(".ui-dialog-titlebar");
        $v_0.addClass("ui-suggestionflyout-dialog-titlebar");
        $P_CRM("#ProductSuggestions_LinkControl_flyoutContent").find("a.ms-crm-List-Sortable").attr("tabIndex", "0");
        $P_CRM("#ProductSuggestions_LinkControl_flyoutContent").find("span.ms-crm-InlineEditLabelText")
            .attr("tabIndex", "0");
        var $v_1 = $P_CRM("#ProductSuggestions_LinkControl_flyoutContent");
        this.removeAllNotifications();
        var $v_2 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut"),
            $v_3 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea-confirm");
        $v_3.parent().parent()
            .prepend('<div class="ui-suggestion-flyout-productaddnotification-message" id="suggestion-flyout-productaddnotification-messageid" aria-live="polite" aria-atomic="true" title=""></div>');
        $v_3.parent().parent().addClass("ui-suggestion-flyout-dialog-buttonpane");
        $v_3.parent().addClass("ui-suggestion-flyout-dialog-buttonset");
        var $v_4 = $v_2.find("#suggestion-flyout-productaddnotification-messageid"),
            $v_5 = String.format(Xrm.Internal.getResourceString("LOCID_SUGGESTIONGRIDADDPRODUCCOUNT"));
        $v_4
            .append('<div tabindex="0" id="productaddnotification-div-id"><span class="ui-suggestion-flyout-productaddnotification-message-span">' + CrmEncodeDecode.CrmHtmlEncode($v_5) + '</span><span class="ui-suggestion-flyout-productaddnotification-message-span-count" id="suggestion-flyout-productaddnotification-messageid-span"></span></div>');
        $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea-close").attr("tabIndex", "0");
        $v_1.show();
        $v_1.css("height", "475px");
        var $v_6 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea");
        $v_6.addClass("ui-suggestionflyout-dialog-content");
        this.$1_3.setContent($v_6)
    },
    $4y_3: function($p0) {
        var $v_0 = this.getCurrentProductId(), $v_1 = this.$6v_3($p0);
        if (IsNull($v_1)) return;
        var $v_2 = null;
        if ($p0 !== "5") {
            var $v_4 = null;
            $v_4 = Xrm.Page.getAttribute("pricelevelid");
            $v_2 = $v_4.getValue()[0];
            $v_1.SetParameter("fetchXml",
                String
                .format('<fetch mapping="logical">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<entity name="productpricelevel">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="uomid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="productpricelevelid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="pricelevelid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="amount" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="pricelevelid" operator="eq" value="{0}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="productsubstitute" to="productid" from="substitutedproductid" alias="b" link-type="inner">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="substitutedproductid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="productid" operator="eq" value="{1}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="salesrelationshiptype" operator="eq" value="{2}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="product" to="substitutedproductid" from="productid" alias="c" link-type="inner">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="or">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="0" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="3" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t\t\t\t</fetch>', $v_2.id, $v_0, $p0))
        }
        $v_1.SetParameter("suggestionsRow", this.$9_3.parents("tr").attr("oid"));
        $v_1.SetParameter("parentGridId", this.ParentGridId);
        if ($p0 === "4") $v_1.SetParameter("fetchXml", this.$6u_3($v_0, $v_2.id));
        else $p0 === "5" && $v_1.SetParameter("fetchXml", this.$6u_3($v_0, null));
        this.$7s_3($v_1, true);
        $v_1.$z_4 = [];
        $v_1.$1y_4 = [];
        var $v_3 = $v_1;
        Mscrm.ProductSuggestionsFlyOut.$27 = this.ParentGridId;
        $v_3.ResetPageNumber();
        $v_3.Refresh()
    },
    $6u_3: function($p0, $p1) {
        var $v_0 = Xrm.Page.data.entity.getId(),
            $v_1 = "",
            $v_2 = "",
            $v_3 = "",
            $v_4 = Xrm.Page.data.entity.getEntityName();
        if (this.isUsingCustomLineItem)
            return String
                .format('<fetch mapping="logical">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<entity name="recommendationcache">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="recommendeditemid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name="recommendationrating" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="itemid" operator="eq" value="{0}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="isrecommendationactive" operator="eq" value="1" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition entityname="productsuggestions_detailentity" attribute="{1}" operator="null" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<order attribute="recommendationrating" descending="true" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="product" from="productid" to="recommendeditemid" link-type="inner" alias="a_7d64828b1789436db0d0cf80c2660962">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="0" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="3" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="{2}" from="{3}" to="recommendeditemid" link-type="outer" alias="productsuggestions_detailentity" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="{4}" operator="eq" value="{5}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t\t\t\t</fetch>', $p0, this.lineItemMetadata.entityPrimaryKey, this.lineItemMetadata.entityName, this.lineItemMetadata.itemIdAttributeName, this.lineItemMetadata.basketRecordLookupAttributeName, $v_0);
        switch ($v_4) {
        case "opportunity":
            $v_3 = "opportunityproductid";
            $v_2 = "opportunityproduct";
            $v_1 = "opportunityid";
            break;
        case "quote":
            $v_3 = "quotedetailid";
            $v_2 = "quotedetail";
            $v_1 = "quoteid";
            break;
        case "salesorder":
            $v_3 = "salesorderdetailid";
            $v_2 = "salesorderdetail";
            $v_1 = "salesorderid";
            break;
        case "invoice":
            $v_3 = "invoicedetailid";
            $v_2 = "invoicedetail";
            $v_1 = "invoiceid";
            break;
        default:
            break
        }
        return String
            .format('<fetch mapping="logical" >\r\n\t\t\t\t\t\t\t\t\t\t\t<entity name= "recommendationcache" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name= "recommendationrating" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<attribute name= "additionaldatarecordid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="itemid" operator="eq" value="{0}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="recommendationtype" operator="eq" value="{1}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="isrecommendationactive" operator="eq" value="1" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition entityname="productsuggestions_detailentity" attribute="{3}" operator="null" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<order attribute="recommendationrating" descending="true" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="productpricelevel" from="productpricelevelid" to="additionaldatarecordid" link-type="inner" alias="a_6db6957ce8e04157b0a27bfbe4375229">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <attribute name="uomid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <attribute name="productid" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <attribute name="amount" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  <filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="pricelevelid" operator="eq" value="{2}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<link-entity name="product" from="productid" to="recommendeditemid" link-type="inner" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="or" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="0" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="statecode" operator="eq" value="3" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t </link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t <link-entity name="{4}" from="productid" to="recommendeditemid" link-type="outer" alias="productsuggestions_detailentity" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<filter type="and" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<condition attribute="{5}" operator="eq" value="{6}" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  </filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t\t\t\t\t </link-entity>\r\n\t\t\t\t\t\t\t\t\t\t\t  </entity>\r\n\t\t\t\t\t\t\t\t\t\t\t</fetch>', $p0, "1", $p1, $v_3, $v_2, $v_1, $v_0)
    },
    $6v_3: function($p0) {
        var $v_0 = "";
        switch ($p0) {
        case "4":
            $v_0 = "ProductSuggestions_LinkControl_crosssellgrid_recommendations";
            break;
        case "5":
            $v_0 = "ProductSuggestions_LinkControl_crosssellgrid_recommendations_custom";
            break;
        case "1":
            $v_0 = "ProductSuggestions_LinkControl_crosssellgrid";
            break;
        case "3":
            $v_0 = "ProductSuggestions_LinkControl_substitutegrid";
            break;
        case "2":
            $v_0 = "ProductSuggestions_LinkControl_accessorygrid";
            break;
        case "0":
            $v_0 = "ProductSuggestions_LinkControl_upsellgrid";
            break;
        default:
            return null
        }
        return $find($v_0)
    },
    $5b_3: function($p0, $p1) {
        for (var $$arr_2 = $p1, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
            var $v_0 = $$arr_2[$$idx_4], $v_1 = this.$6v_3($v_0);
            this.$7s_3($v_1, false)
        }
        this.$4y_3($p0)
    },
    refreshAllSuggestionFlyOutGrids: function() {
        var $v_0 = new Array(2);
        if (this.$Ae_3(this.getCurrentProductId())) {
            $v_0[0] = "1";
            if (this.isUsingCustomLineItem) {
                $v_0[1] = "4";
                this.$5b_3("5", $v_0)
            } else {
                $v_0[1] = "5";
                this.$5b_3("4", $v_0)
            }
        } else {
            $v_0[0] = "4";
            $v_0[1] = "5";
            this.$5b_3("1", $v_0)
        }
        if (!this.isUsingCustomLineItem) {
            this.$4y_3("3");
            this.$4y_3("2");
            this.$4y_3("0")
        }
    },
    $7s_3: function($p0, $p1) {
        if (!IsNull($p0)) {
            $p0.set_disabled(!$p1);
            $p0.setVisible($p1)
        }
    },
    $Ae_3: function($p0) {
        if (!this.$34_3) return false;
        if (isNullOrEmptyString($p0)) return true;
        var $v_0 = false,
            $v_1 = new RemoteCommand("AzureRecommendationWebService", "PopulateRecommendationCacheIfSupportedEntity");
        $v_1.SetParameter("entityName", Xrm.Page.data.entity.getEntityName());
        $v_1.SetParameter("itemId", new Microsoft.Crm.Client.Core.Framework.Guid($p0));
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) $v_0 = $v_2.ReturnValue;
        return $v_0
    },
    $CD_3: function() {
        var $v_0 = new RemoteCommand("AzureRecommendationWebService", "RetrieveRecommendationLineItemProducts"),
            $v_1 = new Mscrm.EntityReference;
        $v_1.Name = Xrm.Page.data.entity.getEntityName();
        $v_1.Id = Xrm.Page.data.entity.getId();
        $v_0.SetParameter("parentEntityName", $v_1.Name);
        $v_0.SetParameter("parentEntityId", $v_1.Id);
        var $v_2 = $v_0.Execute();
        if ($v_2.Success) {
            var $v_3 = $v_2.ReturnValue, $v_4 = JSON.parse($v_3);
            this.$1C_3 = $v_4.products;
            if (this.$1C_3 && this.$1C_3.length > 0) return true
        }
        return false
    },
    $CC_3: function() {
        var $v_0 = new RemoteCommand("AzureRecommendationWebService", "RetrieveRecommendationLineItemMetadata"),
            $v_1 = new Mscrm.EntityReference;
        $v_1.Name = Xrm.Page.data.entity.getEntityName();
        $v_1.Id = Xrm.Page.data.entity.getId();
        $v_0.SetParameter("parentEntityName", $v_1.Name);
        var $v_2 = $v_0.Execute();
        if ($v_2.Success) {
            if ($P_CRM.isEmptyObject($v_2.ReturnValue)) return false;
            var $v_3 = $v_2.ReturnValue;
            this.lineItemMetadata = JSON.parse($v_3);
            if (this.lineItemMetadata) {
                var $v_4 = this.lineItemMetadata.entityName.toLowerCase();
                if ($v_4 === "opportunityproduct" ||
                    $v_4 === "quotedetail" ||
                    $v_4 === "salesorderdetail" ||
                    $v_4 === "invoicedetail") this.isUsingCustomLineItem = false;
                else this.isUsingCustomLineItem = true;
                return true
            }
        }
        return false
    },
    $9R_3: function() {
        var $v_0 =
                '<select class="ms-crm-SelectBox" onchange="Mscrm.ProductSuggestionsFlyOut.suggestionsOnChangeHandler()" sort="ascending" id="ui-dialog-title-ProductSuggestions_ProductList" name="ui-dialog-title-ProductSuggestions_ProductList">{0}</select>',
            $v_1 = '<option value="{0}" title="{1}" {2}>{3}</option>',
            $v_2 = "",
            $v_3 = this.getCurrentProductId();
        if (this.$1C_3)
            for (var $$arr_4 = this.$1C_3, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_4 = $$arr_4[$$idx_6], $v_5 = "";
                if ($v_3 === $v_4.productId) $v_5 = "selected";
                $v_2 += String.format($v_1, $v_4.productId, $v_4.productName, $v_5, $v_4.productName)
            }
        $v_0 = String.format($v_0, $v_2);
        return $v_0
    },
    hideFlyOut: function() { this.$1_3.hide() },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            this.$1_3.unbind();
            this.$1_3.dispose()
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    removeAllNotifications: function() {
        var $v_0 = $P_CRM("#ProductSuggestions_LinkControl_flyoutLoadingArea_flyOut"),
            $v_1 = $v_0.find("#suggestion-flyout-productaddnotification-messageid");
        !IsNull($v_1) && $v_1.remove();
        var $v_2 = $v_0.find("#suggestion-flyout-productmessagenotification-messageid");
        !IsNull($v_2) && $v_2.remove()
    }
};
Mscrm.BeforeRefreshEventArgs = function() { Mscrm.BeforeRefreshEventArgs.initializeBase(this) };
Mscrm.BeforeRefreshEventArgs.prototype = { breakEvent: false };
Mscrm.ChangePageEventArgs = function(newPageNumber, currentPageNumber) {
    Mscrm.ChangePageEventArgs.initializeBase(this);
    this.newPageNumber = newPageNumber;
    this.currentPageNumber = currentPageNumber
};
Mscrm.ChangePageEventArgs.prototype = { newPageNumber: 0, currentPageNumber: 0, breakEvent: false };
Mscrm.GridControlLite = function(element) {
    this.$$d_$AP_4 = Function.createDelegate(this, this.$AP_4);
    this.$$d_$6d_4 = Function.createDelegate(this, this.$6d_4);
    this.$$d_$Ca_4 = Function.createDelegate(this, this.$Ca_4);
    this.$$d_$93_4 = Function.createDelegate(this, this.$93_4);
    this.$$d_$AB_4 = Function.createDelegate(this, this.$AB_4);
    this.$$d_$A2_4 = Function.createDelegate(this, this.$A2_4);
    this.$$d_$8O_4 = Function.createDelegate(this, this.$8O_4);
    this.$$d_$A3_4 = Function.createDelegate(this, this.$A3_4);
    this.$$d_$8c_4 = Function.createDelegate(this, this.$8c_4);
    this.$$d_$94_4 = Function.createDelegate(this, this.$94_4);
    this.$$d_$99_4 = Function.createDelegate(this, this.$99_4);
    this.$$d_$Bi_4 = Function.createDelegate(this, this.$Bi_4);
    this.$$d_$Bk_4 = Function.createDelegate(this, this.$Bk_4);
    this.$$d_$AL_4 = Function.createDelegate(this, this.$AL_4);
    this.$$d_$AQ_4 = Function.createDelegate(this, this.$AQ_4);
    this.$$d_$7A_4 = Function.createDelegate(this, this.$7A_4);
    this.$$d_$Cl_4 = Function.createDelegate(this, this.$Cl_4);
    this.$$d_unlockPrice = Function.createDelegate(this, this.unlockPrice);
    this.$$d_$B2_4 = Function.createDelegate(this, this.$B2_4);
    this.$$d_lockPrice = Function.createDelegate(this, this.lockPrice);
    this.$$d_MoveRecordDownLite = Function.createDelegate(this, this.MoveRecordDownLite);
    this.$$d_MoveRecordUpLite = Function.createDelegate(this, this.MoveRecordUpLite);
    this.$$d_$AJ_4 = Function.createDelegate(this, this.$AJ_4);
    this.$$d_$AK_4 = Function.createDelegate(this, this.$AK_4);
    this.$7_4 = $find("SubGridCommandBarData");
    this.$D_4 = -1;
    Mscrm.GridControlLite.initializeBase(this, [element])
};
Mscrm.GridControlLite.moreActivitiesButton = function(menuId) {
    var $v_0 = Mscrm.CrmUIComponent.crmCreate(Mscrm.ActivityCommandBarButton, null, null, null, $get(menuId));
    return $v_0
};
Mscrm.GridControlLite.openActivityMenu = function(menuId) {
    Mscrm.GridControlLite.moreActivitiesButton(menuId).get_menu().processAndShowMenu()
};
Mscrm.GridControlLite.$5u = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.GridControlLite.DeleteRecordLite = function(deleteButton) {
    var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement(deleteButton),
        $v_1 = $v_0.GetParameter("deleteAction");
    if (isNullOrEmptyString($v_1)) return;
    $v_0.$2_3.UnselectRecords(null);
    var $v_2 = deleteButton.parentNode.parentNode.parentNode.sectionRowIndex;
    $v_0.$2_3.SelectRecords($v_2, $v_2, true);
    $v_0.$5t_4($v_1);
    $v_0.updatePageNumberOnLastRecordDelete();
    var $v_3 = parseInt($v_0.GetParameter("otc"));
    Mscrm.Grid.auto($v_3, null)
};
Mscrm.GridControlLite.ShowDeleteButton = function(rowElement) {
    var $v_0 = -1, $v_1 = rowElement.getAttribute("rowindex");
    if (!IsNull($v_1) && $v_1 !== -1) $v_0 = $v_1;
    else $v_0 = rowElement.sectionRowIndex;
    var $v_2 = "gridBodyTable_delete_" + rowElement.getAttribute("oid") + "_" + $v_0,
        $v_3 = "gridBodyTable_gridDelBtn_" + $v_0,
        $v_4 = $get($v_2, rowElement),
        $v_5 = $get($v_3, rowElement);
    if (IsNull($v_4) ||
        IsNull($v_4.parentNode) ||
        IsNull($v_4.parentNode.parentNode) ||
        IsNull($v_4.parentNode.parentNode.parentNode)) return;
    var $v_6 = Mscrm.GridControl.getControlBehaviorFromChildElement(XUI.Html.DomUtils.GetFirstChild($v_4));
    if (!isNullOrEmptyString($v_6.GetParameter("enableContextualActions")) &&
        $v_6.GetParameter("enableContextualActions").toLowerCase() === "false") return;
    var $v_7 = Mscrm.GridControlLite.$9b($v_6);
    if (isNullOrEmptyString($v_7)) {
        if (!IsNull($v_5))
            if (!IsNull($v_5.attributes.getNamedItem("title"))) $v_5.attributes.getNamedItem("title").value = "";
        return
    }
    $v_6.SetParameter("deleteAction", $v_7);
    var $v_8 = Mscrm.GridControlLite.$9V($v_6);
    if (window.LOCID_UI_DIR === "RTL") $v_4.style.left = $v_8.toString() + "px";
    else $v_4.style.right = $v_8.toString() + "px";
    $v_4.parentNode.style.display = "inline";
    $v_4.parentNode.style.display = "block";
    $v_4.style.visibility = "visible";
    var $v_9 = XUI.Html.GetComputedStyle($v_4.parentNode.parentNode.parentNode, "backgroundColor");
    if ($v_9 === "transparent") $v_9 = "#FFFFFF";
    $v_4.style.backgroundColor = $v_9
};
Mscrm.GridControlLite.GetSelectedRowIndex = function($p0) {
    var $v_0 = $p0.getAttribute("rowindex");
    if (!IsNull($v_0) && $v_0 !== -1) return $v_0;
    else return $p0.sectionRowIndex
};
Mscrm.GridControlLite.HideDeleteButtonIfNotSelected = function(rowElement) {
    var $v_0 = Mscrm.GridControlLite.GetSelectedRowIndex(rowElement),
        $v_1 = Mscrm.GridControl.getControlBehaviorFromChildElement(rowElement);
    if (!IsNull($v_1) && !IsNull($v_1.$D_4) && !IsNull($v_0) && $v_1.$D_4.toString() === $v_0.toString()) return;
    Mscrm.GridControlLite.HideDeleteButton(rowElement)
};
Mscrm.GridControlLite.HideDeleteButton = function(rowElement) {
    var $v_0 = Mscrm.GridControlLite.GetSelectedRowIndex(rowElement),
        $v_1 = "gridBodyTable_delete_" + rowElement.getAttribute("oid") + "_" + $v_0,
        $v_2 = $get($v_1, rowElement);
    if (IsNull($v_2)) return;
    var $v_3 = Mscrm.GridControl.getControlBehaviorFromChildElement(XUI.Html.DomUtils.GetFirstChild($v_2));
    if (IsNull($v_3)) return;
    var $v_4 = $v_3.GetParameter("deleteAction");
    if (isNullOrEmptyString($v_4)) return;
    $v_2.style.visibility = "hidden"
};
Mscrm.GridControlLite.SelectRow = function(rowElement) {
    var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement(rowElement);
    if (IsNull($v_0) ||
        !($v_0.$63_3() || $v_0.isMovableRowsGrid() || $v_0.isEntitlementChannelGrid() || $v_0.isCategoryGrid())) return;
    Mscrm.GridControlLite.onSelectRow($v_0, rowElement.sectionRowIndex)
};
Mscrm.GridControlLite.onSelectRow = function(grid, rowIndex) {
    var $v_0 = $P_CRM(grid.get_element()).find("#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-SelectedRow-Lite");
    $v_0.filter(":visible").attr("style", "");
    var $v_1 = $v_0[rowIndex];
    if (!IsNull($v_1)) {
        for (var $v_3 = 0; $v_3 < $v_0.length - 1; $v_3++)
            if (!IsNull($v_0[$v_3].getAttribute("isnewrecord")) &&
                $v_0[$v_3].getAttribute("isnewrecord").toString() === "true") {
                grid.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled";
                grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled";
                return
            }
        grid.$D_4 = $v_1.sectionRowIndex;
        var $v_2 = grid.get_allRecords().length - 1;
        if (grid.$D_4 <= 0) {
            if (!IsNull(grid
                .get_moveUpContextualButton()))
                grid.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled"
        } else if (!IsNull(grid
            .get_moveUpContextualButton()))
            grid.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButton";
        if (grid.$D_4 < $v_2) {
            if (!IsNull(grid
                .get_moveDownContextualButton()))
                grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButton"
        } else if (!IsNull(grid
            .get_moveDownContextualButton()))
            grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled"
    }
};
Mscrm.GridControlLite.recalculateRecord = function() {
    if (!window.IsTurboForm)
        !Mscrm.InlineEditDataService.get_busy() && Mscrm.RefreshPageCommandHandler.executeCommand(66, null);
    else {
        var $v_0 = Mscrm.InlineEditDataServiceProxy.get_busy();
        if (!$v_0) {
            var $v_1 = $find("crmFormSelector"), $v_2 = "";
            if ($v_1) $v_2 = $v_1.get_currentFormId();
            Mscrm.InlineEditDataServiceProxy.recalculateRecord($v_2)
        }
    }
};
Mscrm.GridControlLite.handleTabStateForReadForm = function(value, handler) {
    var $v_0 = $get("rofContainer");
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.GridSpanControl.getTabRead(value), $v_2 = Mscrm.GridControl.getExpanderClassName($v_1);
        if (!IsNull($v_1) && !isNullOrEmptyString($v_2) && $v_2.endsWith("_right")) {
            var $v_3 = $P_CRM($v_1);
            if (!IsNull($v_3)) {
                var $v_4 = {};
                $v_4["tabExpander"] = $v_1;
                $v_4["controlObject"] = value;
                $v_4["expanderObject"] = $v_3;
                $v_3.bind("InlineTabStateChange", $v_4, handler)
            }
        }
    }
};
Mscrm.GridControlLite.showSuggestionFlyOut = function() {
    if (IsNull(Mscrm.GridControlLite.$6) || Mscrm.GridControlLite.$6.get_isDisposed()) {
        var $v_2 = {};
        $v_2["ParentGridId"] = null;
        $v_2["IsAddCommandAvailable"] = true;
        Mscrm.GridControlLite.$6 = Mscrm.CrmUIComponent
            .crmCreate(Mscrm.ProductSuggestionsFlyOut,
                $v_2,
                null,
                null,
                $get("ProductSuggestions_LinkControl_flyoutContent"))
    }
    if (!IsNull(Mscrm.GridControlLite.$6)) Mscrm.GridControlLite.$6.IsAddCommandAvailable = true;
    var $v_0 = $get("crmFormTabContainer"),
        $v_1 = Mscrm.Utilities.getChildElementsByClassName($v_0, "ms-crm-subgrid-suggestion-link", true);
    if ($v_1.length > 0) Mscrm.GridControlLite.$6.onClick($v_1[0], true);
    else Mscrm.GridControlLite.$6.onClick($v_0, true)
};
Mscrm.GridControlLite.$9V = function($p0) {
    var $v_0 = $get($p0.get_id() + "_divDataArea"),
        $v_1 = $v_0.offsetWidth,
        $v_2 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_0)).offsetWidth,
        $v_3 = $v_2 - $v_1 - $v_0.scrollLeft,
        $v_4 = $p0;
    if ($v_4.$63_3()) $v_3 = $v_3 + 15;
    return $v_3 > 0 ? $v_3 - 1 : 0
};
Mscrm.GridControlLite.$9b = function($p0) {
    var $v_0 = $p0.$9a_4();
    if ($p0
        .GetParameter("viewid") ===
        "{F79AD170-AE03-4F4C-8132-D4AA08520A0C}")
        if (!Mscrm.SessionInfo.isOutlookClient() || Mscrm.SessionInfo.isOnline()) $v_0 = "AccessTeamMemberDeleteAction";
    if ($p0
        .GetParameter("viewid") ===
        "{FE4BC089-8901-466C-A41B-1C1090F204D4}")
        if (Mscrm.SessionInfo.isOutlookClient() && !Mscrm.SessionInfo.isOnline()) $v_0 = "";
    if ($p0
        .GetParameter("viewid") ===
        "{31E76B45-BFE7-447E-B4B5-50DC393BCDBE}") $v_0 = "RemoveSystemUserFromPositionAction";
    if ($p0
        .GetParameter("viewid") ===
        "{E5D893D1-2B1F-46E5-8EA4-25562567CCCE}") $v_0 = "RemoveSystemUserFromMobileOfflineProfileAction";
    return $v_0
};
Mscrm.GridControlLite.prototype = {
    $13_4: null,
    $3J_4: null,
    $3K_4: null,
    $3u_4: null,
    $40_4: null,
    $O_4: null,
    $1h_4: null,
    $3I_4: null,
    $N_4: null,
    $2m_4: null,
    $2l_4: null,
    $1R_4: "",
    $4T_4: true,
    $26_4: "",
    $4V_4: true,
    $24_4: "",
    $4U_4: true,
    $4W_4: false,
    $61_4: false,
    $z_4: null,
    $1y_4: null,
    $29_4: null,
    get_selectedRowIndex: function() { return this.$D_4 },
    set_selectedRowIndex: function(value) {
        this.$D_4 = value;
        return value
    },
    get_commandBarData: function() { return this.$7_4 },
    get_getRelationshipTypeName: function() {
        var $v_0 = this.get_ribbonRelationshipType();
        switch ($v_0) {
        case 0:
            return "NoRelationship";
        case 1:
            return "OneToMany";
        case 2:
            return "ManyToMany"
        }
        return "NoRelationship"
    },
    get_$4n_4: function() {
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if ($v_0.get_query()["dashboardType"]) return true;
        return false
    },
    get_inlineEditGrid: function() { return this.$N_4 },
    get_addContextualButton: function() {
        var $v_0 = this.get_id() + "_addImageButton";
        return $get($v_0)
    },
    get_inlineEditGridControls: function() { return this.$N_4 },
    get_lockPriceContextualButton: function() {
        var $v_0 = this.get_id() + "_lockImageButton";
        return $get($v_0)
    },
    get_unlockPriceContextualButton: function() {
        var $v_0 = this.get_id() + "_unlockImageButton";
        return $get($v_0)
    },
    get_moveUpContextualButton: function() {
        var $v_0 = this.get_id() + "_upImageButton";
        return $get($v_0)
    },
    get_moveDownContextualButton: function() {
        var $v_0 = this.get_id() + "_downImageButton";
        return $get($v_0)
    },
    get_openAssociatedGridViewButton: function() {
        var $v_0 = this.get_id() + "_openAssociatedGridViewImageButton";
        return $get($v_0)
    },
    get_isInlineEditGrid: function() {
        return this.$63_3() ||
            this.isMovableRowsGrid() ||
            this.isEntitlementChannelGrid() ||
            this.isDynamicPropertyOptionSetGrid() ||
            this.isCategoryGrid()
    },
    refreshLiteSubGrid: function() {
        this.RefreshGridAndClearPaging();
        this.HandleGridResize()
    },
    get_selectedControlIds: function() { return this.$z_4 },
    set_selectedControlIds: function(value) {
        this.$z_4 = value;
        return value
    },
    get_selectedControlNames: function() { return this.$1y_4 },
    set_selectedControlNames: function(value) {
        this.$1y_4 = value;
        return value
    },
    openNewActivityCreateFormInline: function(activityTypeCode) {
        if (!this.get_$4n_4()) {
            var $v_0 = this.getFormData(), $v_1 = Xrm.Internal.getEntityCode($v_0.get_typeName());
            Mscrm.AddActivity.addActivityToFormFromsubgrid(activityTypeCode, $v_0.get_recordId(), $v_1)
        } else openObj(activityTypeCode, null, "", null, 0, null)
    },
    initialize: function() {
        this.$61_4 = true;
        this.$4W_4 = false;
        var $v_0 = this.getFormData(), $$t_6 = this;
        this.$29_4 = function($p1_0) { $$t_6.refreshLiteSubGrid() };
        if ($v_0) $v_0.addOnRecordIdChanged(this.$29_4, false);
        else if (Xrm.Internal.isTurboForm()) {
            var $v_1 = this.getFormDataEntityId(),
                $v_2 = Mscrm.TurboForm.Control.PageManager.getQuickFormViewModel($v_1);
            !IsNull($v_2) && $v_2.addOnRecordIdChanged(this.$29_4);
            Xrm.Page.data.addOnLoad(this.$29_4)
        }
        if (!IsNull(this.get_eventManager())) {
            this.get_eventManager().subscribeEvent(94, this.get_id());
            this.get_eventManager().subscribeEvent(117, this.get_id())
        }
        Mscrm.GridControl.prototype.initialize.call(this);
        if (!IsNull(this.get_openAssociatedGridViewButton()) && this.isOpenAssociatedGridViewButtonAvailable()) {
            !IsNull(this
                    .$$d_$AK_4) &&
                $addHandler(this.get_openAssociatedGridViewButton(), "mouseover", this.$$d_$AK_4);
            !IsNull(this.$$d_$AJ_4) && $addHandler(this.get_openAssociatedGridViewButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (this.$14_4()) this.$7i_4();
        else {
            var $v_3 = "titleContainer_", $v_4 = $get($v_3 + this.get_element().id);
            $v_4 && $v_4.removeAttribute("height")
        }
        if (!IsNull(this.get_moveUpContextualButton())) {
            $addHandler(this.get_moveUpContextualButton(), "click", this.$$d_MoveRecordUpLite);
            $addHandler(this.get_moveUpContextualButton(), "mouseover", this.$$d_$AK_4);
            $addHandler(this.get_moveUpContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_moveDownContextualButton())) {
            $addHandler(this.get_moveDownContextualButton(), "click", this.$$d_MoveRecordDownLite);
            $addHandler(this.get_moveDownContextualButton(), "mouseover", this.$$d_$AK_4);
            $addHandler(this.get_moveDownContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_lockPriceContextualButton())) {
            $addHandler(this.get_lockPriceContextualButton(), "click", this.$$d_lockPrice);
            $addHandler(this.get_lockPriceContextualButton(), "keydown", this.$$d_$B2_4);
            $addHandler(this.get_lockPriceContextualButton(), "mouseover", this.$$d_$AK_4);
            $addHandler(this.get_lockPriceContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_unlockPriceContextualButton())) {
            $addHandler(this.get_unlockPriceContextualButton(), "click", this.$$d_unlockPrice);
            $addHandler(this.get_unlockPriceContextualButton(), "keydown", this.$$d_$Cl_4);
            $addHandler(this.get_unlockPriceContextualButton(), "mouseover", this.$$d_$AK_4);
            $addHandler(this.get_unlockPriceContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        !IsNull(this.get_moveUpContextualButton()) &&
            !IsNull(this.get_moveDownContextualButton()) &&
            $addHandler(this.get_element(), "keyup", this.$$d_$7A_4);
        if (this.isOpenAssociatedGridViewButtonAvailable()) {
            !IsNull(this.get_openAssociatedGridViewButton().attributes.getNamedItem("action")) &&
                (!IsNull(this.get_openAssociatedGridViewButton().attributes.getNamedItem("assocView")) ||
                    !IsNull(this.get_openAssociatedGridViewButton().attributes.getNamedItem("nonRelationShipGrid"))) &&
                $addHandler(this.get_openAssociatedGridViewButton(), "click", this.$$d_$AQ_4);
            this.updateOpenAssociatedGridViewIcon(true)
        }
    },
    $7i_4: function() {
        if (this.$4W_4 || !this.$61_4) return;
        $addHandler(this.get_addContextualButton(), "mouseover", this.$$d_$AK_4);
        $addHandler(this.get_addContextualButton(), "mouseout", this.$$d_$AJ_4);
        if (!IsNull(this.get_addContextualButton().attributes.getNamedItem("action"))) {
            var $v_0 = this.get_addContextualButton().attributes.getNamedItem("action").value;
            if (this.$63_3()) this.$8D_4();
            else if (this.isEntitlementChannelGrid()) this.$8B_4();
            else if (this.isDynamicPropertyOptionSetItemGrid()) this.$8A_4();
            else if (this.isCategoryGrid()) this.$89_4();
            else if ($v_0 === "QuickAdd" && this.get_gridType() === Mscrm.GridControl.inlineSubGrid
            ) this.activateQuickAdd();
            else $addHandler(this.get_addContextualButton(), "click", this.$$d_$AL_4)
        }
        this.$6N_4(true);
        this.$4W_4 = true
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        if (eventCode === 94) {
            var $v_0 = this.getFormData(), $v_1 = "";
            if (!IsNull($v_0)) $v_1 = $v_0.get_recordId();
            if (!isNullOrEmptyString($v_1))
                if (this
                    .get_isInlineEditGrid() &&
                    !IsNull(this.$N_4)) !this.$N_4.checkForAllDirtyRows(false) && this.refreshLiteSubGrid();
                else this.refreshLiteSubGrid()
        } else eventCode === 117 && Mscrm.GridControlLite.recalculateRecord();
        return Mscrm.GridControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    $AQ_4: function($p0) {
        var $v_0 = this.get_openAssociatedGridViewButton().attributes.getNamedItem("action").value;
        this.$5t_4($v_0)
    },
    $AL_4: function($p0) {
        var $v_0 = this.get_addContextualButton().attributes.getNamedItem("action").value;
        this.$5t_4($v_0)
    },
    $5t_4: function($p0) {
        if ($p0 === "ActivityAddAction") {
            Mscrm.GridControlLite.openActivityMenu(this.get_id() + "moreActivitiesButton");
            return
        }
        if ($p0 === "AccessTeamMemberDeleteAction") {
            this.$C5_4(this.get_selectedIds()[0], this.GetParameter("teamTemplateId"));
            return
        }
        if ($p0 === "RemoveSystemUserFromPositionAction") {
            this.$C4_4(this.get_selectedIds()[0]);
            return
        }
        if ($p0 === "RemoveSystemUserFromMobileOfflineProfileAction") {
            this.$C3_4(this.get_selectedIds()[0]);
            return
        }
        if (!IsNull(this.$7_4)) {
            var $v_0 = this.$7_4.get_selectedControl();
            this.$7_4.setCurrentSelectedControl(this);
            this.$7_4.executeCommand($p0, null);
            this.$7_4.setCurrentSelectedControl($v_0)
        }
    },
    $C5_4: function($p0, $p1) {
        var $$t_5 = this, $$t_6 = this;
        Mscrm.InlineEditDataService.removeUserFromRecordAccessTeam($p0,
            $p1,
            function() {
                $$t_5.Refresh();
                return true
            },
            function($p1_0) {
                var $v_0 = $p1_0["_error"], $v_1 = !IsNull($v_0) ? $v_0["DisplayText"] : "";
                openErrorDlg(null, $v_1, null, -1, -1);
                return true
            })
    },
    $C4_4: function($p0) {
        var $v_0 = new Xrm.Objects.EntityReference("systemuser", new Microsoft.Crm.Client.Core.Framework.Guid($p0)),
            $v_1 = { positionid: $v_0 },
            $v_2 = { positionid: 15 },
            $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_0,
                    $v_1,
                    $v_2,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_3.initializeValue("positionid", null, 15);
        $v_3.get_changedFieldNames().addRange(["positionid"]);
        var $$t_6 = this;
        Xrm.Internal.messages.update($v_3).then(function($p1_0) { $$t_6.Refresh() }, Mscrm.GridControlLite.$5u)
    },
    $C3_4: function($p0) {
        var $v_0 = new Xrm.Objects.EntityReference("systemuser", new Microsoft.Crm.Client.Core.Framework.Guid($p0)),
            $v_1 = { mobileofflineprofileid: $v_0 },
            $v_2 = { mobileofflineprofileid: 15 },
            $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_0,
                    $v_1,
                    $v_2,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_3.initializeValue("mobileofflineprofileid", null, 15);
        $v_3.get_changedFieldNames().addRange(["mobileofflineprofileid"]);
        var $$t_6 = this;
        Xrm.Internal.messages.update($v_3).then(function($p1_0) { $$t_6.Refresh() }, Mscrm.GridControlLite.$5u)
    },
    getAddCommand: function() {
        if (!this.$4T_4) return this.$1R_4;
        this.$4T_4 = false;
        this.$1R_4 = null;
        if (!IsNull(this.$7_4)) {
            var $v_0 = $find("crmRibbonData");
            !IsNull($v_0) &&
                !IsNull($v_0.get_primaryControl()) &&
                this.$7_4.set_primaryControl($v_0.get_primaryControl());
            var $v_1 = this.get_getRelationshipTypeName();
            if (this.get_entityTypeCode() === 4200) {
                this.$1R_4 = "ActivityAddAction";
                return this.$1R_4
            }
            var $v_2 = new Mscrm.AddExistingStandardAction(this.get_entityTypeName(), $v_1);
            if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) {
                $v_2 = new Mscrm.AddNewProductAction(this.get_entityTypeName(), $v_1);
                if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) {
                    $v_2 = new Mscrm.AddNewStandardAction(this.get_entityTypeName(), $v_1);
                    if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) {
                        $v_2 = new Mscrm.AddExistingAssocAction(this.get_entityTypeName(), $v_1);
                        if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) {
                            $v_2 = new Mscrm.NewRecordAction(this.get_entityTypeName(), $v_1);
                            if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) return this.$1R_4
                        }
                    }
                }
            }
            this.$1R_4 = $v_2.get_commandBarCommandId();
            return this.$1R_4
        }
        return this.$1R_4
    },
    getOpenAssociatedGridViewCommand: function() {
        if (!this.$4V_4) return this.$26_4;
        this.$4V_4 = false;
        this.$26_4 = null;
        if (!IsNull(this.$7_4)) {
            var $v_0 = $find("crmRibbonData");
            !IsNull($v_0) &&
                !IsNull($v_0.get_primaryControl()) &&
                this.$7_4.set_primaryControl($v_0.get_primaryControl());
            var $v_1 = this.get_getRelationshipTypeName(),
                $v_2 = new Mscrm.OpenAssociatedGridViewStandardAction(this.get_entityTypeName(), $v_1);
            if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) return this.$26_4;
            this.$26_4 = $v_2.get_commandBarCommandId();
            return this.$26_4
        }
        return this.$26_4
    },
    $9a_4: function() {
        if (!this.$4U_4) return this.$24_4;
        this.$4U_4 = false;
        this.$24_4 = null;
        if (!IsNull(this.$7_4)) {
            this.$7_4.setCurrentSelectedControl(this);
            var $v_0 = $find("crmRibbonData");
            !IsNull($v_0) &&
                !IsNull($v_0.get_primaryControl()) &&
                this.$7_4.set_primaryControl($v_0.get_primaryControl());
            var $v_1 = this.get_getRelationshipTypeName(),
                $v_2 = new Mscrm.DeleteAction(this.get_entityTypeName(), $v_1);
            if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) {
                $v_2 = new Mscrm.RemoveAction(this.get_entityTypeName(), $v_1);
                if (!$v_2.isActionVisibleAndEnabled(this
                    .$7_4)) if (!$v_2.isActionVisibleAndEnabled(this.$7_4)) return this.$24_4
            }
            this.$24_4 = $v_2.get_commandBarCommandId();
            return this.$24_4
        }
        return this.$24_4
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (Mscrm.GridControl.isBrowserIE8OrLower())
            try {
                $removeHandler(document.body, "resize", this.$$d_handleAutoExpandRows)
            } catch ($$e_0) {
            }
        !IsNull(this.get_addContextualButton()) && $clearHandlers(this.get_addContextualButton());
        !IsNull(this.$O_4) && this.$O_4.dispose();
        !IsNull(this.$40_4) && this.$40_4.dispose();
        !IsNull(this.$3I_4) && this.$3I_4.dispose();
        !IsNull(this.$N_4) && this.$N_4.dispose();
        !IsNull(Mscrm.GridControlLite.$6) && Mscrm.GridControlLite.$6.dispose();
        !IsNull(this.$1h_4) && this.$1h_4.dispose();
        if (!IsNull(this.get_moveUpContextualButton())) {
            $removeHandler(this.get_moveUpContextualButton(), "click", this.$$d_MoveRecordUpLite);
            $removeHandler(this.get_moveUpContextualButton(), "mouseover", this.$$d_$AK_4);
            $removeHandler(this.get_moveUpContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_moveDownContextualButton())) {
            $removeHandler(this.get_moveDownContextualButton(), "click", this.$$d_MoveRecordDownLite);
            $removeHandler(this.get_moveDownContextualButton(), "mouseover", this.$$d_$AK_4);
            $removeHandler(this.get_moveDownContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_lockPriceContextualButton())) {
            $removeHandler(this.get_lockPriceContextualButton(), "click", this.$$d_lockPrice);
            $removeHandler(this.get_lockPriceContextualButton(), "mouseover", this.$$d_$AK_4);
            $removeHandler(this.get_lockPriceContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        if (!IsNull(this.get_unlockPriceContextualButton())) {
            $removeHandler(this.get_unlockPriceContextualButton(), "click", this.$$d_unlockPrice);
            $removeHandler(this.get_unlockPriceContextualButton(), "mouseover", this.$$d_$AK_4);
            $removeHandler(this.get_unlockPriceContextualButton(), "mouseout", this.$$d_$AJ_4)
        }
        !IsNull(this.get_moveUpContextualButton()) &&
            !IsNull(this.get_moveDownContextualButton()) &&
            $removeHandler(this.get_element(), "keyup", this.$$d_$7A_4);
        !IsNull(this.$29_4) && !IsNull(Xrm.Page.data) && Xrm.Page.data.removeOnLoad(this.$29_4);
        Mscrm.GridControl.prototype.dispose.call(this)
    },
    ShowLoadingMessage: function() {
        !Mscrm.InternalUtilities.JSTypes.isNull(this.$N_4) && this.$N_4.$BC_0();
        this
            .$37_3 =
            "<TABLE class='ms-crm-List-Message-Lite' morerecords='0'><TR><TD ID='GridLoadingMessage' class='ms-crm-List-MessageText-Lite'>{0}<IMG alt='' src='" + window.CDNURL + "/_imgs/grid/horzpreloader_5x55.gif'></TD></TR></TABLE>";
        Mscrm.GridControl.prototype.ShowLoadingMessage.call(this);
        this.$6N_4(false);
        this.updateOpenAssociatedGridViewIcon(false)
    },
    MoveRecordUpLite: function(eventObject) {
        if (this.$63_3()) {
            Mscrm.ProductEntityInlineEditGrid.MoveRecordUpLite(this, this.$D_4);
            return
        }
        if (this.$D_4 < 0) return;
        var $v_0 = $P_CRM(this.get_element()).find("#" +
            this.get_element().id +
            "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
            this.get_element().id +
            "_divDataArea table tr.ms-crm-List-SelectedRow-Lite")[this.$D_4];
        if (IsNull($v_0)) return;
        var $v_1 = $v_0, $v_2 = $P_CRM($v_1), $v_3 = $v_2.attr("sequencenumber");
        if (this.$D_4 > 0) {
            $v_2.attr("sequencenumber", $v_2.prev().attr("sequencenumber"));
            $v_2.prev().attr("sequencenumber", $v_3);
            $v_2.insertBefore($v_2.prev());
            Mscrm.GridControlLite.onSelectRow(this, this.$D_4 - 1)
        }
    },
    MoveRecordDownLite: function(eventObject) {
        if (this.$63_3()) {
            Mscrm.ProductEntityInlineEditGrid.MoveRecordDownLite(this, this.$D_4);
            return
        }
        var $v_0 = null;
        $v_0 = $P_CRM(this.get_element()).find("#" +
            this.get_element().id +
            "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
            this.get_element().id +
            "_divDataArea table tr.ms-crm-List-SelectedRow-Lite")[this.$D_4];
        if (IsNull($v_0)) return;
        var $v_1 = $v_0,
            $v_2 = $P_CRM($v_1),
            $v_3 = this.get_allRecords().length - 1,
            $v_4 = $v_2.attr("sequencenumber");
        if (this.$D_4 < $v_3) {
            $v_2.attr("sequencenumber", $v_2.next().attr("sequencenumber"));
            $v_2.next().attr("sequencenumber", $v_4);
            $v_2.insertAfter($v_2.next());
            Mscrm.GridControlLite.onSelectRow(this, this.$D_4 + 1)
        }
    },
    isPriceLocked: function() {
        var $v_0 = true;
        if (!window.IsTurboForm) {
            var $v_1 = this.getFormData();
            if (!IsNull($v_1.get_attributes().get("ispricelocked")) &&
                !IsNull($v_1.get_attributes().get("ispricelocked")
                    .get_value())) $v_0 = $v_1.get_attributes().get("ispricelocked").get_value()
        } else if (!IsNull(Xrm.Page.getAttribute("ispricelocked")) &&
            !IsNull(Xrm.Page.getAttribute("ispricelocked")
                .getValue())) $v_0 = Xrm.Page.getAttribute("ispricelocked").getValue();
        return $v_0
    },
    lockPrice: function(eventObject) { Mscrm.CommandBarActions.lock() },
    unlockPrice: function(eventObject) { Mscrm.CommandBarActions.unlock() },
    $Cl_4: function($p0) {
        if ($p0.keyCode !== 13) return;
        Mscrm.CommandBarActions.unlock()
    },
    $B2_4: function($p0) {
        if ($p0.keyCode !== 13) return;
        Mscrm.CommandBarActions.lock()
    },
    displayProductGridButtons: function(showButtons) {
        var $v_0 = showButtons ? "block" : "none";
        if (this.isPriceLocked()) this.$B_4(this.get_unlockPriceContextualButton(), $v_0);
        else this.$B_4(this.get_lockPriceContextualButton(), $v_0);
        this.$B_4(this.get_moveUpContextualButton(), $v_0);
        this.$B_4(this.get_moveDownContextualButton(), $v_0)
    },
    Refresh: function() { this.refreshContextualCommandBarButtons() && Mscrm.GridControl.prototype.Refresh.call(this) },
    get_recordId: function() {
        var $v_0 = this.getFormData();
        return $v_0.get_recordId()
    },
    refreshContextualCommandBarButtons: function() {
        if (window._IsRefreshForm === "1") {
            this.$4T_4 = true;
            this.$4V_4 = true;
            this.$4U_4 = true;
            var $v_0 = this.$3c_4(),
                $v_1 = $get(this.get_id() + "_quickFindControl"),
                $v_2 = $get(this.get_id() + "_addImageButton"),
                $v_3 = $get(this.get_id() + "_openAssociatedGridViewImageButton"),
                $v_4 = $get(this.get_id() + "_SavedNewQuerySelector"),
                $v_5 = $find(this.get_id() + "_SavedNewQuerySelector"),
                $v_6 = $get(this.get_id() + "_findCriteria");
            if (isNullOrEmptyString(this.get_recordId()) || isNullOrEmptyString($v_0)) {
                $v_2 && this.$B_4($v_2, "none");
                $v_3 && this.$B_4($v_3, "none");
                $v_1 && this.$B_4($v_1, "none");
                this.$B_4(this.get_moveDownContextualButton(), "none");
                this.$B_4(this.get_moveUpContextualButton(), "none");
                this.$B_4(this.get_lockPriceContextualButton(), "none");
                this.$B_4(this.get_unlockPriceContextualButton(), "none");
                this.set_disabled(true);
                this.$20_3 = true;
                !IsNull($v_5) && $v_5.set_disabled(true);
                if (!IsNull($v_4)) {
                    $v_4.className += " ms-crm-view-name-disabled";
                    XUI.Html.DomUtils.GetFirstChild($v_4).style.cursor = "default"
                }
                if (!IsNull($v_6)) $v_6.disabled = true;
                this.$CO_4();
                return false
            } else {
                this.set_disabled(false);
                this.$20_3 = false;
                !IsNull($v_5) && $v_5.addHandlers();
                if (!IsNull($v_4)) {
                    XUI.Html.DomUtils.GetFirstChild($v_4).style.cursor = "pointer";
                    $v_4.className = $v_4.className.replace(" ms-crm-view-name-disabled", "")
                }
                if (!IsNull($v_6)) $v_6.disabled = false;
                Mscrm.GridControl.setElementParameter(this.get_element(), "oId", this.get_recordId());
                Mscrm.GridControl.setElementParameter(this.get_element(), "oType", $v_0);
                if ($v_2) {
                    if (this.get_gridType() === Mscrm.GridControl.inlineSubGrid && this.$14_4()) {
                        this.$B_4($v_2, "block");
                        this.$7i_4()
                    } else this.$B_4($v_2, "none");
                    if (this.$63_3() || this.isMovableRowsGrid() || this.isCategoryGrid()) {
                        this.$20_3 = false;
                        if (this.isPriceLocked()) this.$B_4(this.get_unlockPriceContextualButton(), "block");
                        else this.$B_4(this.get_lockPriceContextualButton(), "block");
                        this.$B_4(this.get_moveUpContextualButton(), "block");
                        this.$B_4(this.get_moveDownContextualButton(), "block")
                    }
                }
                $v_3 && this.isOpenAssociatedGridViewButtonAvailable() && this.$B_4($v_3, "block");
                $v_1 && this.$B_4($v_1, "inline")
            }
        } else if (this.get_$4n_4()) {
            var $v_7 = $get(this.get_id() + "_addImageButton"),
                $v_8 = $get(this.get_id() + "_openAssociatedGridViewImageButton");
            $v_7 && this.$14_4() && this.$B_4($v_7, "block");
            $v_8 && this.isOpenAssociatedGridViewButtonAvailable() && this.$B_4($v_8, "block")
        }
        return true
    },
    $CO_4: function() {
        var $v_0 = window.LOCID_EMPTY_GRID_MESSAGE_REFRESH;
        $get(this.get_id() + "_divDataArea").innerHTML = String
            .format('<div class="ms-crm-grid-Title-Data-Lite">{0}</div><div style="height: 16px;"></div>',
                CrmEncodeDecode.CrmHtmlEncode($v_0))
    },
    getLoadingMessage: function() { return window.LOCID_LOADING_GRID_DATA_REFRESH },
    getDataAreaStyle: function() { return "hidden" },
    onRefreshComplete: function(result, command) {
        if (this._disposed) return;
        this.$3M_3 = result;
        this.$3L_3 = command;
        if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
            this.initializeInlineGrid(this.$63_3(), 0);
            this.initializeInlineGrid(this.isEntitlementChannelGrid(), 2);
            this.initializeInlineGrid(this.isDynamicPropertyOptionSetItemGrid(), 3);
            this.initializeInlineGrid(this.isMovableRowsGrid(), 1);
            this.initializeInlineGrid(this.isCategoryGrid(), 4)
        }
        this.$BL_4()
    },
    resetComplete: function(resultCommand) {
        var $v_0 = Mscrm.GridControl.prototype.resetComplete.call(this, resultCommand);
        this.initializeInlineGrid(this.$63_3(), 0);
        return $v_0
    },
    finishShowLoadingMessage: function() {
        Mscrm.GridControl.prototype.finishShowLoadingMessage.call(this);
        this.$6N_4(true);
        this.updateOpenAssociatedGridViewIcon(true)
    },
    activateControls: function() {
        Mscrm.GridControl.prototype.activateControls.call(this);
        this.ActivateAdd()
    },
    displayFailedMessage: function() {
        this
            .$1u_3 =
            "<TABLE class='ms-crm-List-Message-Lite' morerecords='0'><TR><TD ID='GridMessage' class='ms-crm-List-MessageText-Lite'>{0}<BR><A tabIndex=\"{1}\" class='ms-crm-List-Message-Link-Lite' id='GridRefreshLink' onclick=\"Mscrm.GridControl.getControlBehaviorFromChildElement(this).refreshLiteSubGrid();\" href=\"javascript:void(0)\">{2}</A></TD></TR></TABLE>";
        this.setGridData(String.format(this.$1u_3,
                CrmEncodeDecode.CrmHtmlEncode(window.LOCID_LOADING_GRID_FAILED),
                this.$1r_3,
                CrmEncodeDecode.CrmHtmlEncode(LOCID_GRID_REFRESH_TRY_AGAIN.toString())),
            true)
    },
    fireGridEvents: function(command) {
        Mscrm.GridControl.prototype.fireGridEvents.call(this, command);
        this.$Bl_4(command)
    },
    cacheValidation: function(currentViewTimestamp, updatedViewTimestamp) {
        if (window._IsRefreshForm === "1" && this.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            var $v_0 = this.isSubGridStale(currentViewTimestamp, updatedViewTimestamp);
            if ($v_0) {
                this.$An_4(updatedViewTimestamp);
                return false
            }
        }
        return true
    },
    isAutoSubGrid: function() {
        var $v_0 = this.GetParameter("subgridAutoExpand") === "1";
        return $v_0 && this.$33_3
    },
    updateVisibility: function(totalRecordCount, recordsPerPage, statusBar) {
        if (!IsNull(statusBar) && this.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            if (totalRecordCount > recordsPerPage || totalRecordCount < 0 && recordsPerPage > 0
            ) statusBar.style.visibility = "visible";
            else if (!this.$2_3.get_moreRecords()) statusBar.style.visibility = "hidden";
            this.handleStatusBar()
        }
    },
    $An_4: function($p0) {
        var $v_0 = this.get_id() + "_crmGridTD",
            $v_1 = $get($v_0),
            $v_2 = this.get_id(),
            $v_3 = $v_1.getAttribute("URL");
        this.$2_3.dispose();
        this.dispose();
        $v_1.innerHTML = "";
        $v_3 = Mscrm.GridControl.getUpdatedUrl($v_3, "viewts", $p0);
        Mscrm.GridControl.loadGridView($v_0, $v_2, $v_3, "", true)
    },
    $Bl_4: function($p0) {
        if (!this.isLiteSubGrid()) return;
        if (!this.GetParameter("deleteAction")) return;
        var $v_0 = this.GetParameter("deleteAction").toString();
        if (isNullOrEmptyString($v_0)) return;
        if (!IsNull($p0) && !IsNull(this.$2_3)) {
            var $v_1 = {};
            $v_1["command"] = 1;
            $v_1["recordCount"] = this.$2_3.get_totalRecordCount().toString();
            $v_1["viewId"] = this.GetParameter("viewid");
            $v_1["entitytypecode"] = this.get_entityTypeCode();
            $v_1["relationshipName"] = this.GetParameter("relName");
            this.raiseEvent(81, $v_1)
        }
    },
    activateQuickAdd: function() {
        var $v_0 = "#titleContainer_";
        if (!this.isLiteSubGrid()) return;
        var $v_1 = $P_CRM($v_0 + this.get_element().id);
        if (!$v_1.length) return;
        var $v_2 = $P_CRM("#quick_add_hidden_div", $v_1);
        if (!IsNull($v_2) && $v_2.length > 0) {
            var $v_3 = $P_CRM("#_" + this.get_element().id + "[dummy-data-attributename]", $v_2).first();
            if (!IsNull($v_3) && $v_3.length > 0) {
                this.$13_4 = {};
                this.$13_4["AttributeId"] = this.get_element().id;
                this.$13_4["TargetEntityType"] = $v_2.attr("TargetEntityType");
                this.$13_4["ParentGridId"] = this.get_id();
                var $v_4 = $v_2.attr("ConnectionToEntity");
                this.$13_4["ConnectionToEntity"] = $v_4;
                this.$13_4["ConnectionToCategory"] = $v_2.attr("ConnectionToCategory");
                this.$13_4["IsInvokedFromProductFlyOut"] = false;
                this.$13_4["IsInvokedFromQuickAdd"] = true;
                this.$13_4["TeamTemplateId"] = this.GetParameter("teamTemplateId");
                $addHandler(this.get_addContextualButton(), "click", this.$$d_$Bk_4);
                if ($v_4 === "contact" || $v_4 === "systemuser") {
                    var $v_5 = {};
                    $v_5["ParentGridId"] = this.get_id();
                    $v_5["ConnectionToCategory"] = $v_2.attr("ConnectionToCategory");
                    this.$40_4 = Mscrm.CrmUIComponent
                        .crmCreate(Mscrm.InlineEditDropDownFlyOut, $v_5, null, null, this.get_addContextualButton())
                }
            }
        }
    },
    $8D_4: function() {
        var $v_0 = "#titleContainer_";
        if (!this.isLiteSubGrid()) return;
        var $v_1 = $P_CRM($v_0 + this.get_element().id);
        if (!$v_1.length) return;
        var $v_2 = $P_CRM("#quick_add_hidden_div", $v_1);
        if (!IsNull($v_2) && $v_2.length > 0) {
            this.$3J_4 = {};
            this.$3J_4["ParentGridId"] = this.get_id();
            this.$3J_4["TargetEntityType"] = $v_2.attr("TargetEntityType");
            $addHandler(this.get_addContextualButton(), "click", this.$$d_$Bi_4)
        }
    },
    $8B_4: function() { $addHandler(this.get_addContextualButton(), "click", this.$$d_$99_4) },
    $99_4: function($p0) { this.$N_4.onCreateNewRecord() },
    $8A_4: function() { $addHandler(this.get_addContextualButton(), "click", this.$$d_$94_4) },
    $94_4: function($p0) { this.$N_4.onCreateNewRecord() },
    $89_4: function() { $addHandler(this.get_addContextualButton(), "click", this.$$d_$8c_4) },
    $8c_4: function($p0) { this.$N_4.onCreateNewRecord() },
    $Bi_4: function($p0) {
        this.$3I_4 = Mscrm.CrmUIComponent.crmCreate(Mscrm.ProductGridFlyOut,
            this.$3J_4,
            null,
            null,
            this.get_addContextualButton());
        this.$3I_4.onClick(null);
        $removeHandler(this.get_addContextualButton(), "click", this.$$d_$Bi_4)
    },
    $63_3: function() {
        var $v_0 = Mscrm.GridControl.prototype.$63_3.call(this);
        if (this.$14_4()) {
            var $v_1 = this.get_addContextualButton().attributes.getNamedItem("action"),
                $v_2 = !IsNull($v_1) ? this.get_addContextualButton().attributes.getNamedItem("action").value : "";
            return this.get_gridType() === Mscrm.GridControl.inlineSubGrid &&
                ($v_0 || $v_2.indexOf("AddNewProductFromSubGridStandard") > -1)
        }
        return $v_0
    },
    $Bk_4: function($p0) {
        this.$O_4 = Mscrm.CrmUIComponent.crmCreate(Mscrm.QuickAddFlyOut,
            this.$13_4,
            null,
            null,
            this.get_addContextualButton());
        this.$O_4.onClick(null);
        $removeHandler(this.get_addContextualButton(), "click", this.$$d_$Bk_4)
    },
    addButtonClickHandler: function() {
        if (this.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            this.setFocusIfRequired();
            if (this.get_entityTypeCode() === 4200) {
                Mscrm.GridControlLite.openActivityMenu(this.get_id() + "moreActivitiesButton");
                return
            }
        }
        if (this.get_$4n_4()) return;
        if (IsNull(this.$O_4)) {
            var $v_0 = this.$63_3();
            this.$8m_4($v_0)
        }
        this.$O_4.onClick(null)
    },
    setFocusIfRequired: function() {
        var $v_0 = $P_CRM(this.get_element()).offset().top;
        ($v_0 < 0 || $v_0 > $P_CRM(window.parent).innerHeight()) && this.setFocus()
    },
    $8m_4: function($p0) {
        var $v_0 = "#titleContainer_";
        if (!this.isLiteSubGrid() || this.get_$4n_4()) return;
        var $v_1 = $P_CRM($v_0 + this.get_element().id);
        if (!$v_1.length) return;
        var $v_2 = $P_CRM("#quick_add_hidden_div", $v_1);
        this.$O_4 = new Mscrm.QuickAddFlyOut(this.get_addContextualButton());
        this.$O_4.AttributeId = this.get_element().id;
        this.$O_4.TargetEntityType = $v_2.attr("TargetEntityType");
        this.$O_4.ParentGridId = this.get_id();
        var $v_3 = $v_2.attr("ConnectionToEntity");
        this.$O_4.ConnectionToEntity = $v_3;
        this.$O_4.ConnectionToCategory = $v_2.attr("ConnectionToCategory");
        this.$O_4.IsInvokedFromProductFlyOut = $p0;
        this.$O_4.TeamTemplateId = this.GetParameter("teamTemplateId");
        this.$O_4.IgnoreClickEvents = true;
        this.$O_4.initialize()
    },
    $14_4: function() {
        if (!IsNull(this.get_addContextualButton()))
            if (!IsNull(this.get_addContextualButton().attributes.getNamedItem("action")) &&
                this.get_addContextualButton().attributes.getNamedItem("action").value === "QuickAdd") return true;
            else {
                var $v_0 = this.getAddCommand();
                if (!isNullOrEmptyString($v_0)) {
                    this.get_addContextualButton().attributes.getNamedItem("action").value = $v_0;
                    return true
                }
            }
        return false
    },
    isOpenAssociatedGridViewButtonAvailable: function() {
        if (!IsNull(this.get_openAssociatedGridViewButton())) {
            if (this.GetParameter("viewid") === "{F79AD170-AE03-4F4C-8132-D4AA08520A0C}") return false;
            if (IsNull(this.get_openAssociatedGridViewButton().attributes.getNamedItem("action"))) return true;
            else {
                var $v_0 = this.getOpenAssociatedGridViewCommand(), $v_1 = this.getFormData();
                if (!isNullOrEmptyString($v_0)) {
                    this.get_openAssociatedGridViewButton().attributes.getNamedItem("action").value = $v_0;
                    if (!IsNull($v_1))
                        switch ($v_1.get_typeName()) {
                        case "opportunity":
                            if (this.GetParameter("viewid") === "{FE4BC089-8901-466C-A41B-1C1090F204D4}" ||
                                this.GetParameter("viewid") === "{4E3600FA-B9C8-49F4-B69A-51EBA06D9BDF}" ||
                                this.get_entityTypeName() === "product") return false;
                            break;
                        case "lead":
                            if (this.GetParameter("viewid") === "{4E3600FA-B9C8-49F4-B69A-51EBA06D9BDF}") return false;
                            break;
                        case "quote":
                            if (this.get_entityTypeName() === "product") return false;
                            break;
                        case "salesorder":
                            if (this.get_entityTypeName() === "product") return false;
                            break;
                        case "invoice":
                            if (this.get_entityTypeName() === "product") return false;
                            break;
                        case "incident":
                            if (this.GetParameter("viewid") === "{23FB1036-E41D-4D75-8AA7-27569B5B6512}") return false;
                            break
                        }
                    return true
                }
            }
        }
        return false
    },
    updateOpenAssociatedGridViewIcon: function(isEnable) {
        if (!IsNull(this.get_openAssociatedGridViewButton())) {
            this.get_openAssociatedGridViewButton()
                .className = isEnable
                ? "ms-crm-ImageStrip-openassociatedgridview"
                : "ms-crm-ImageStrip-openassociatedgridviewDisable";
            var $v_0 = $get(this.get_id() + "_contextualButtonsContainer");
            if (this.$14_4() &&
                !IsNull(this.get_openAssociatedGridViewButton().style.display) &&
                this.get_openAssociatedGridViewButton().style.display !== "none" &&
                !IsNull($v_0)) {
                var $v_1 = XUI.Html.DomUtils.GetPrevSibling($v_0);
                if (window.LOCID_UI_DIR === "RTL") {
                    $v_0.style.paddingLeft = "36px";
                    $v_1.style.paddingLeft = "36px"
                } else {
                    $v_0.style.paddingRight = "36px";
                    $v_1.style.paddingRight = "36px"
                }
            }
        }
    },
    $6N_4: function($p0) {
        if (this.$14_4())
            this.get_addContextualButton().className = $p0
                ? "ms-crm-ImageStrip-addButton"
                : "ms-crm-ImageStrip-addButtonDisable"
    },
    $AK_4: function($p0) {
        var $v_0 = $p0.target.id;
        if ($v_0.indexOf("_addImage") > 0) {
            if (this
                .$14_4() &&
                this.get_addContextualButton()
                .className !==
                "ms-crm-ImageStrip-addButtonDisable")
                this.get_addContextualButton().className = "ms-crm-ImageStrip-addButtonHover"
        } else if ($v_0
            .indexOf("_openAssociatedGridViewImageButton") >
            0) this.get_openAssociatedGridViewButton().className = "ms-crm-ImageStrip-openassociatedgridviewhover";
        else if ($v_0.indexOf("_lockImage") > 0) {
            if (!IsNull(this
                .get_lockPriceContextualButton()))
                this.get_lockPriceContextualButton().className = "ms-crm-ImageStrip-lockButtonHover"
        } else if ($v_0.indexOf("_unlockImage") > 0) {
            if (!IsNull(this
                .get_unlockPriceContextualButton()))
                this.get_unlockPriceContextualButton().className = "ms-crm-ImageStrip-unlockButtonHover"
        } else if ($v_0.indexOf("_upImage") > 0) {
            if (!IsNull(this.get_moveUpContextualButton()) &&
                this.get_moveUpContextualButton()
                .className !==
                "ms-crm-ImageStrip-moveUpButtonDisabled")
                this.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonHover"
        } else if ($v_0.indexOf("_downImage") > 0)
            if (!IsNull(this.get_moveDownContextualButton()) &&
                this.get_moveDownContextualButton()
                .className !==
                "ms-crm-ImageStrip-moveDownButtonDisabled"
            ) this.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonHover"
    },
    $AJ_4: function($p0) {
        var $v_0 = $p0.target.id;
        if ($v_0.indexOf("_addImage") > 0) {
            if (this
                .$14_4() &&
                this.get_addContextualButton()
                .className !==
                "ms-crm-ImageStrip-addButtonDisable")
                this.get_addContextualButton().className = "ms-crm-ImageStrip-addButton"
        } else if ($v_0.indexOf("_openAssociatedGridViewImageButtonImage") > 0) {
            if (this
                .isOpenAssociatedGridViewButtonAvailable()
            ) this.get_openAssociatedGridViewButton().className = "ms-crm-ImageStrip-openassociatedgridview"
        } else if ($v_0.indexOf("_lockImage") > 0)
            this.get_lockPriceContextualButton().className = "ms-crm-ImageStrip-lockButton";
        else if ($v_0.indexOf("_unlockImage") > 0)
            this.get_unlockPriceContextualButton().className = "ms-crm-ImageStrip-unlockButton";
        else if ($v_0.indexOf("_upImage") > 0) {
            if (this.get_moveUpContextualButton()
                .className !==
                "ms-crm-ImageStrip-moveUpButtonDisabled")
                this.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButton"
        } else if ($v_0.indexOf("_downImage") > 0)
            if (this.get_moveDownContextualButton()
                .className !==
                "ms-crm-ImageStrip-moveDownButtonDisabled"
            ) this.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButton"
    },
    DisassociateAndRefresh: function(associationName, parentTypeCode, parentId, targetTypeCode) {
        this.updatePageNumberOnLastRecordDelete();
        var $v_0 = this.get_selectedRecords()[0].Id, $v_1 = "<disassociateAndRefresh>";
        $v_1 += "<disassociate>";
        $v_1 += "<associationName>" + CrmEncodeDecode.CrmXmlEncode(associationName) + "</associationName>";
        $v_1 += "<parentTypeCode>" + CrmEncodeDecode.CrmXmlEncode(parentTypeCode.toString()) + "</parentTypeCode>";
        $v_1 += "<parentId>" + CrmEncodeDecode.CrmXmlEncode(parentId) + "</parentId>";
        $v_1 += "<targetTypeCode>" + CrmEncodeDecode.CrmXmlEncode(targetTypeCode.toString()) + "</targetTypeCode>";
        $v_1 += "<targetId>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</targetId>";
        $v_1 += "</disassociate>";
        $v_1 += this.buildGridXml(false);
        $v_1 += "</disassociateAndRefresh>";
        if (!this.$2m_4) this.$2m_4 = new Mscrm.RemoteCommandXml("AppGridWebService", "DisassociateAndRefresh");
        var $$t_7 = this, $v_2 = function() { $$t_7.$2m_4.setContent($v_1) };
        this.executeInternal(false, this.$2m_4, $v_2)
    },
    DeleteConnectionAndRefresh: function() {
        this.updatePageNumberOnLastRecordDelete();
        var $v_0 = this.get_selectedRecords()[0].Id, $v_1 = "<deleteConnectionAndRefresh>";
        $v_1 += "<delete>";
        $v_1 += "<targetId>" + CrmEncodeDecode.CrmXmlEncode($v_0) + "</targetId>";
        $v_1 += "</delete>";
        $v_1 += this.buildGridXml(false);
        $v_1 += "</deleteConnectionAndRefresh>";
        if (!this.$2l_4) this.$2l_4 = new Mscrm.RemoteCommandXml("AppGridWebService", "DeleteConnectionAndRefresh");
        var $$t_3 = this, $v_2 = function() { $$t_3.$2l_4.setContent($v_1) };
        this.executeInternal(false, this.$2l_4, $v_2)
    },
    $7A_4: function($p0) {
        var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement($p0.target);
        if (IsNull($v_0)) return;
        if (!$v_0.$63_3()) return;
        switch ($p0.keyCode) {
        case 38:
            $p0.altKey && $v_0.MoveRecordUpLite($p0);
            break;
        case 40:
            $p0.altKey && $v_0.MoveRecordDownLite($p0);
            break
        }
    },
    $BL_4: function() {
        this.finishShowLoadingMessage();
        var $v_0 = this.refreshComplete(this.$3M_3, this.$3L_3);
        if (!$v_0) return;
        this.processRowsPostRefresh()
    },
    processRowsPostRefresh: function() {
        this.$Aw_4() && this.$Bh_4();
        if (this.$63_3()) {
            if (IsNull(Mscrm.GridControlLite.$6) || Mscrm.GridControlLite.$6.get_isDisposed()) {
                this.$3K_4 = {};
                this.$3K_4["ParentGridId"] = this.get_id();
                this.$3K_4["IsAddCommandAvailable"] = this.$14_4();
                Mscrm.GridControlLite.$6 = Mscrm.CrmUIComponent
                    .crmCreate(Mscrm.ProductSuggestionsFlyOut,
                        this.$3K_4,
                        null,
                        null,
                        $get("ProductSuggestions_LinkControl_flyoutContent"))
            }
            if (!IsNull(Mscrm.GridControlLite.$6)) Mscrm.GridControlLite.$6.IsAddCommandAvailable = this.$14_4();
            else this.$6Z_4("suggestions")
        }
        if (this.$As_3() || this.$63_3()) {
            if (IsNull(this.$1h_4) || this.$1h_4.get_isDisposed()) {
                this.$3u_4 = {};
                this.$3u_4["ParentGridId"] = this.get_id();
                this.$1h_4 = Mscrm.CrmUIComponent.crmCreate(Mscrm.DynamicPropertiesListFlyOut,
                    this.$3u_4,
                    null,
                    null,
                    $get("DynamicPropertiesList_LinkControl_flyoutContent"))
            }
            if (!IsNull(this.$1h_4)) this.$8G_4();
            else this.$6Z_4("propertyconfigurationstatus")
        }
        if (this.isProductSuggestionGrid()) {
            this.$8N_4();
            Mscrm.ProductSuggestionsFlyOut.setGridEvents();
            this.$Ad_4()
        }
        this.$Ao_4() && this.$8U_4()
    },
    $8N_4: function() { this.$5g_4("addproduct", this.$$d_$A3_4, this.$$d_$8O_4, this.$$d_$A2_4) },
    $8G_4: function() {
        this.$5g_4("propertyconfigurationstatus", this.$$d_$AB_4, this.$$d_$93_4, this.$$d_$A2_4);
        this.$5g_4("propertycustomizationstatus", this.$$d_$AB_4, this.$$d_$93_4, this.$$d_$A2_4)
    },
    $A3_4: function($p0) {
        if (IsNull($p0.target)) return;
        var $v_0 = IsNull($P_CRM($p0.target).parents("tr")) ? null : $P_CRM($p0.target).parents("tr")[0];
        if (IsNull($v_0)) return;
        var $v_1 = this.GetParameter("suggestionsRow"), $v_2 = this.GetParameter("parentGridId");
        if (Mscrm.GridControlLite.$6.isUsingCustomLineItem) {
            var $v_3 = $v_0.childNodes[1].getAttribute("rawlookupitemid").toString();
            Mscrm.ProductSuggestionsGrid.AddProduct($v_2, $v_1, $v_3)
        } else Mscrm.ProductSuggestionsGrid.AddProduct($v_2, $v_1, $v_0.getAttribute("oid").toString());
        $p0.stopPropagation();
        if ($v_0.querySelectorAll("a").length >= 2) {
            var $v_4 = $v_0.querySelectorAll("a")[0];
            this.$4m_4($v_4);
            if (!Mscrm.GridControlLite.$6.isUsingCustomLineItem) {
                var $v_5 = $v_0.querySelectorAll("a")[1];
                this.$4m_4($v_5)
            }
            this.$z_4[this.$z_4.length] = $v_4.id;
            this.$1y_4[this.$1y_4.length] = $v_4.title
        }
    },
    $A2_4: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation()
    },
    $AB_4: function($p0) { this.$1h_4.onClick($p0) },
    $8O_4: function($p0) { Mscrm.Utilities.getDomEventKeyCode($p0) === 13 && $p0.stopPropagation() },
    $93_4: function($p0) {
        if (Mscrm.Utilities.getDomEventKeyCode($p0) === 13) {
            $p0.stopPropagation();
            $p0.target.focus()
        }
    },
    $5g_4: function($p0, $p1, $p2, $p3) {
        if (IsNull(this.$2_3)) return;
        var $v_0 = this.$2_3.FindColumnIndex($p0), $v_1 = this.$2_3.get_dataTableBody(), $v_2 = $v_1.children;
        if ($p0 === "addproduct")
            if ($v_2.length > 0)
                for (var $v_3 = $v_2[0], $v_4 = 0; $v_4 < $v_3.children.length; $v_4++) {
                    var $v_5 = $v_3.children[$v_4];
                    if (!IsNull($v_5) && $v_5.id.indexOf("_gridAddProductBtn") !== -1) {
                        $v_0 = $v_4;
                        break
                    }
                }
        if ($v_0 === -1) return;
        for (var $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
            var $v_7 = $v_2[$v_6], $v_8 = $v_7.children[$v_0];
            if (!IsNull($v_8)) {
                if (($p0 === "suggestions" || $p0 === "propertyconfigurationstatus") &&
                    IsNull($v_7.getAttribute("productid"))) continue;
                if ($p0 === "propertyconfigurationstatus" ||
                    $p0 === "propertycustomizationstatus" ||
                    $p0 === "addproduct") {
                    if (!isNullOrEmptyString(XUI.Html.GetText($v_8))) {
                        $addHandler(XUI.Html.DomUtils.GetFirstChild($v_8), "click", $p1);
                        $addHandler(XUI.Html.DomUtils.GetFirstChild($v_8), "keyup", $p2);
                        $addHandler(XUI.Html.DomUtils.GetFirstChild($v_8), "dblclick", $p3)
                    }
                    continue
                }
                $addHandler($v_8, "click", $p1);
                $addHandler($v_8, "keyup", $p2)
            }
        }
    },
    $6Z_4: function($p0) {
        var $v_0 = this.$2_3.get_dataTableBody();
        if (IsNull($v_0) || IsNull($v_0.children)) return;
        for (var $v_1 = $v_0.children, $v_2 = this.$2_3.FindColumnIndex($p0), $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (!IsNull($v_4.children[$v_2])) {
                var $v_5 = $P_CRM($v_4.children[$v_2]);
                $v_5.html("")
            }
        }
    },
    closeSuggestionFlyOut: function() { Mscrm.GridControlLite.$6.hideFlyOut() },
    $Aw_4: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("SalesAttachments") > -1
    },
    $Ao_4: function() {
        var $v_0 = this.get_element().id;
        return $v_0.indexOf("workflowexecutionhistory") > -1 || $v_0.indexOf("topicmodelexecutionhistory") > -1
    },
    $8U_4: function() {
        var $v_0 = this.$2_3.FindColumnIndex("workflowstepstatus");
        if ($v_0 < 0) $v_0 = this.$2_3.FindColumnIndex("status");
        for (var $v_1 = this.$2_3.get_dataTableBody(), $v_2 = $v_1.children, $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3], $v_5 = $v_4.attributes.getNamedItem("azuresyncerrormessage");
            if (!IsNull($v_5)) {
                var $v_6 = $v_4.children[$v_0];
                if (!IsNull($v_6)) {
                    var $v_7 = $v_6.getElementsByTagName("span");
                    if (!IsNull($v_7) && !IsNull($v_7[0])) {
                        var $v_8 = $v_7[0], $v_9 = document.createAttribute("style");
                        $v_9.value = "cursor: pointer; text-decoration:underline; color: #0000FF";
                        var $v_A = document.createAttribute("azuresyncerrormessage");
                        $v_A.value = $v_5.value;
                        $v_8.attributes.setNamedItem($v_A);
                        $v_8.className += "ms-crm-list-ErrorLink";
                        $addHandler($v_8, "click", this.$$d_$Ca_4);
                        $addHandler($v_8, "keyup", this.$$d_$Ca_4);
                        $addHandler($v_8, "dblclick", this.$$d_$Ca_4)
                    }
                }
            }
        }
    },
    $Ca_4: function($p0) {
        var $v_0 = $p0.target.attributes.getNamedItem("azuresyncerrormessage"), $v_1 = IsNull($v_0) ? "" : $v_0.value;
        Xrm.Internal.openErrorDialog(40216, "", $v_1)
    },
    $Bh_4: function() {
        var $v_0 = this.$2_3.FindColumnIndex("filename");
        if ($v_0 === -1) return;
        for (var $v_1 = this.$2_3.get_dataTableBody(), $v_2 = $v_1.children, $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
            var $v_4 = $v_2[$v_3], $v_5 = $v_4.children[$v_0];
            if (!IsNull($v_5)) {
                $addHandler($v_5, "click", this.$$d_$6d_4);
                $addHandler($v_5, "keyup", this.$$d_$AP_4)
            }
        }
    },
    $6d_4: function($p0) {
        var $v_0 = $p0.target;
        if ($v_0.tagName !== "DIV") return;
        if (!IsNull($v_0) && !IsNull($v_0.parentNode)) {
            var $v_1 = $v_0.parentNode.parentNode,
                $v_2 = $v_1.attributes.getNamedItem("otype"),
                $v_3 = $v_1.attributes.getNamedItem("oid");
            if (!IsNull($v_2) && !IsNull($v_3)) {
                var $v_4 = Mscrm.CrmUri.create("/Activities/Attachment/download.aspx");
                $v_4.setQueryParameter("AttachmentType", $v_2.value);
                $v_4.setQueryParameter("AttachmentId", $v_3.value);
                $v_4.setQueryParameter("IsNotesTabAttachment", "0");
                $v_4.appendToQuery(Mscrm.WrpcTokenFuncs.getTokenAsQS($v_4));
                $p0.preventDefault();
                $p0.stopPropagation();
                openStdWin($v_4, null, 0, 0, null)
            }
        }
    },
    $AP_4: function($p0) { Mscrm.Utilities.getDomEventKeyCode($p0) === 13 && this.$6d_4($p0) },
    $3c_4: function() {
        var $v_0 = $get(this.get_id() + "_span"), $v_1 = null;
        if ($v_0) $v_1 = $P_CRM($v_0);
        var $v_2 = null;
        $v_2 = this.getLinkedDataObject($v_1);
        var $v_3 = null;
        if ($v_2) $v_3 = $v_2["_entity"];
        var $v_4 = null;
        if (!IsNull($v_3)) $v_4 = $v_3.TypeCode.toString();
        return $v_4
    },
    getLinkedDataObject: function(container) { return Mscrm.InlineEditUtilities.getLinkedDataObject(container) },
    $B_4: function($p0, $p1) {
        if (!$p0) return;
        var $v_0 = $find(this.get_id() + "_span");
        if ($p0.style.display.toLowerCase() !== $p1.toLowerCase()) {
            $p0.style.display = $p1;
            $v_0.setGridTopStyle()
        }
    },
    initializeInlineGrid: function(isInlineGrid, inlineGridType) {
        if (!isInlineGrid) return;
        if (!IsNull(this.$N_4)) {
            this.$N_4.dispose();
            this.$N_4 = null
        }
        this.$N_4 = new Mscrm.InlineEditGrid;
        var $v_0 = null;
        switch (inlineGridType) {
        case 0:
            $v_0 = new Mscrm.ProductEntityInlineEditGrid;
            break;
        case 1:
            $v_0 = new Mscrm.MovableRowsGrid;
            break;
        case 2:
            $v_0 = new Mscrm.EntitlementChannelInlineEditGrid;
            break;
        case 3:
            $v_0 = new Mscrm.DynamicPropertyOptionSetItemInlineEditGrid;
            break;
        case 4:
            $v_0 = new Mscrm.CategoryInlineEditGrid;
            break
        }
        if ($v_0) {
            var $v_1 = this.$14_4();
            this.$N_4.initialize(this, $v_0, $v_1, window.IsTurboForm)
        }
    },
    $Ad_4: function() {
        if (!IsNull(this.$z_4) && this.$z_4.length > 0)
            for (var $v_0 = 0; $v_0 < this.$z_4.length; $v_0++) {
                var $v_1 = $get(this.$z_4[$v_0].toString());
                if ($v_1.title === this.$1y_4[$v_0].toString())
                    if (!IsNull($v_1)) {
                        $v_1.id = $v_1.id + "_" + $v_0;
                        this.$4m_4($v_1);
                        var $v_2 = $get(this.$z_4[$v_0].toString());
                        this.$4m_4($v_2);
                        $v_1.id = this.$z_4[$v_0].toString()
                    }
            }
    },
    $4m_4: function($p0) { if (!IsNull($p0)) $p0.className = "ms-crm-subgrid-add-link-selected" }
};
Mscrm.GridSizeCalculator = function(element) { Mscrm.GridSizeCalculator.initializeBase(this, [element]) };
Mscrm.GridSpanControl = function($p0) {
    this.$$d_$7E_3 = Function.createDelegate(this, this.$7E_3);
    this.$$d_registerForHiddenGridControl = Function.createDelegate(this, this.registerForHiddenGridControl);
    this.$$d_$AG_3 = Function.createDelegate(this, this.$AG_3);
    this.$$d_$A4_3 = Function.createDelegate(this, this.$A4_3);
    Mscrm.GridSpanControl.initializeBase(this, [$p0])
};
Mscrm.GridSpanControl.getTabRead = function(value) {
    var $v_0 = null;
    if (Mscrm.GridControl.isInstanceOfType(value)) $v_0 = value.get_element();
    else if (Mscrm.GridSpanControl.isInstanceOfType(value)) $v_0 = value.get_element();
    else return null;
    var $v_1 = $v_0, $v_2 = $get("rofContainer");
    while (!IsNull($v_1) && !Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-InlineTabBody-Read") && $v_1 !== $v_2
    ) $v_1 = $v_1.parentNode;
    if (IsNull($v_1) || $v_1 === $v_2) $v_1 = null;
    else {
        var $v_3 = $v_1.id;
        if ($v_3.endsWith("_content")) {
            var $v_4 = "_content", $v_5 = "_Expander";
            $v_3 = $v_3.substr(0, $v_3.length - $v_4.length);
            $v_3 += $v_5;
            var $v_6 = $get($v_3);
            if (!IsNull($v_6)) $v_1 = $v_6.parentNode
        } else $v_1 = null
    }
    return $v_1
};
Mscrm.GridSpanControl.prototype = {
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$7v_3();
        this.setGridTopStyle();
        Sys.Application.add_load(this.$$d_$A4_3);
        $addHandler(window, "resize", this.$$d_$AG_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(window, "resize", this.$$d_$AG_3);
        if (!IsNull(this.$3R_3)) {
            if (!IsNull(this.$2O_3)) {
                this.$3R_3.removeTabStateChange(this.$2O_3);
                this.$2O_3 = null
            }
            this.$3R_3 = null
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $A4_3: function($p0, $p1) { this.setGridTopStyle() },
    $AG_3: function($p0) { this.setGridTopStyle() },
    get_selectionControl: function() { return this.get_refInnerGrid() },
    $1t_3: null,
    get_innerGridId: function() { return this.$1t_3 },
    set_innerGridId: function(value) {
        this.$1t_3 = value;
        return value
    },
    $4C_3: null,
    get_refInnerGrid: function() {
        if (IsNull(this.$4C_3) && !IsNull(this.$1t_3)) this.$4C_3 = Mscrm.GridControl.findComponent(this.$1t_3);
        return this.$4C_3
    },
    $2O_3: null,
    $3R_3: null,
    setGridTopStyle: function() {
        if (this.get_isDisposed()) return;
        if ($get("areaForm")) if ($get("areaForm").style.display === "none") return;
        if (!this.get_element().hasChildNodes()) return;
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.get_element());
        this.get_element().style.overflow = "Hidden";
        var $v_1 = 0;
        try {
            var $v_3 = parseInt(XUI.Html.GetComputedStyle($v_0, "paddingTop"));
            $v_1 += $v_3
        } catch ($$e_3) {
        }
        var $$t_F = this,
            $v_2 = function($p1_0) {
                if ($p1_0.id.endsWith("_ccDiv"))
                    if (window.IsTurboForm) {
                        var $v_5 = 0, $v_6 = $p1_0.parentNode;
                        if (!IsNull($v_6))
                            for (var $v_7 = $v_6.childNodes, $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                                if ($v_7[$v_8] === $p1_0) break;
                                $v_5 += $$t_F.$6y_3($v_7[$v_8])
                            }
                        $p1_0.style.top = $v_5.toString() + "px";
                        return true
                    } else {
                        $p1_0.style.top = $v_1.toString() + "px";
                        return true
                    }
                var $v_4 = $p1_0.offsetHeight;
                if (!$v_4 && !IsNull($$t_F.get_refInnerGrid()) && $$t_F.get_refInnerGrid().isLiteSubGrid()) {
                    var $v_9 = XUI.Html.DomUtils.GetFirstChild($p1_0);
                    if (!IsNull($v_9) && $v_9.id.startsWith("titleContainer_")) {
                        var $v_A = $v_9.style.height;
                        if ($v_A.endsWith("px"))
                            try {
                                var $v_B = parseInt($v_A.substr(0, $v_A.length - 2));
                                $v_1 += isNaN($v_B) ? 0 : $v_B
                            } catch ($$e_D) {
                            }
                    }
                } else $v_1 += $v_4;
                return false
            };
        XUI.Html.DomUtils.ForEachChild($v_0, $v_2)
    },
    $6y_3: function($p0) {
        var $v_0 = this.$9k_3($p0);
        if ($v_0 > 0) return $v_0;
        for (var $v_1 = 0, $v_2 = $p0.childNodes, $v_3 = 0; $v_3 < $v_2.length; $v_3++) $v_1 += this.$6y_3($v_2[$v_3]);
        return $v_0 + $v_1
    },
    $9k_3: function($p0) {
        if (IsNull($p0) || IsNull($p0.style) || IsNull($p0.style.height)) return 0;
        var $v_0 = $p0.style.height;
        $v_0 = $v_0.toLowerCase().replace("px", "");
        if (!$v_0.trim().length) return 0;
        return Number.parseInvariant($v_0.trim())
    },
    $7v_3: function() {
        if (this.get_element().tagName === "TABLE" ||
            !IsNull(this.get_refInnerGrid()) &&
            this.get_refInnerGrid().get_gridType() !== Mscrm.GridControl.inlineSubGrid ||
            XUI.Html.DomUtils.GetFirstChild(this.get_element()).className !== "ms-crm-Form-SubGrid-Layout" &&
            XUI.Html.DomUtils.GetFirstChild(this.get_element()).className !== "ms-crm-Form-SubGrid-Layout-Lite") return;
        var $v_0 = this.get_element().parentNode;
        if (isNullOrEmptyString($v_0.getAttribute("rowSpan"))) return;
        var $v_1 = $v_0.offsetHeight;
        if ($v_1 > 0) $v_0.style.height = ($v_1 - 6).toString() + "px";
        else if (!Xrm.Internal.isTurboForm()) window.setTimeout(this.$$d_registerForHiddenGridControl, 0);
        else {
            var $v_2 = Xrm.Page.ui.controls.get(this.$1t_3), $v_3 = null;
            if (!IsNull($v_2) && !this.$7M_3($v_2)) {
                $v_3 = $v_2.getParent().getParent();
                if (!IsNull($v_3))
                    if (!IsNull(this.get_refInnerGrid()) &&
                        this.get_refInnerGrid()
                        .get_gridType() ===
                        Mscrm.GridControl.inlineSubGrid) $v_3.setIsSubGrid(true);
                    else $v_3.setIsSubGrid(false)
            }
        }
    },
    registerForHiddenGridControl: function() {
        var $v_0 = window.location.href;
        if (!Xrm.Internal.isTurboForm() && $v_0.indexOf("DialogPage.aspx") === -1) {
            var $v_1 = $find("crmForm"), $v_2 = $v_1.GetTab(this.get_element(), false);
            if (!IsNull($v_2)) {
                var $v_3 = $find($v_2.id);
                if (!IsNull($v_3) && Mscrm.FormUITab.isInstanceOfType($v_3))
                    if ($v_3.get_displayState() === "expanded") this.$4j_3();
                    else $v_3.add_tabStateChange(this.$$d_$7E_3)
            }
        } else {
            var $v_4 = Xrm.Page.ui.controls.get(this.$1t_3);
            if (!IsNull($v_4) && !this.$7M_3($v_4)) {
                var $v_5 = $v_4.getParent().getParent();
                if (!IsNull($v_5))
                    if ($v_5.getDisplayState() === "expanded") this.$4j_3();
                    else {
                        this.$2O_3 = this.$9j_3();
                        this.$3R_3 = $v_5;
                        $v_5.addTabStateChange(this.$2O_3)
                    }
            }
        }
    },
    $7M_3: function($p0) {
        try {
            return IsNull($p0.getParent())
        } catch ($$e_1) {
            return true
        }
    },
    $9j_3: function() {
        var $$t_1 = this;
        return function($p1_0) { $$t_1.$4j_3() }
    },
    $7E_3: function($p0, $p1) {
        if ($p1.get_displayState() === "expanded") {
            $p0.remove_tabStateChange(this.$$d_$7E_3);
            this.$4j_3()
        }
    },
    $4j_3: function() { this.$7t_3() },
    $7t_3: function() {
        this.$7v_3();
        this.setGridTopStyle();
        !IsNull(this.get_refInnerGrid()) && this.get_refInnerGrid().autoExpandGridControlRows()
    },
    resetLayout: function() { this.$7t_3() }
};
Mscrm.GridViewSelector = function($p0) {
    this.$$d_$CI_3 = Function.createDelegate(this, this.$CI_3);
    this.$$d_$CF_3 = Function.createDelegate(this, this.$CF_3);
    this.$$d_$Ay_3 = Function.createDelegate(this, this.$Ay_3);
    this.$$d_$Ct_3 = Function.createDelegate(this, this.$Ct_3);
    this.$$d_$7Z_3 = Function.createDelegate(this, this.$7Z_3);
    this.$$d_viewSelectorHidden = Function.createDelegate(this, this.viewSelectorHidden);
    this.$$d_$BD_3 = Function.createDelegate(this, this.$BD_3);
    this.$$d_$BH_3 = Function.createDelegate(this, this.$BH_3);
    this.$$d_$BF_3 = Function.createDelegate(this, this.$BF_3);
    this.$$d_$BP_3 = Function.createDelegate(this, this.$BP_3);
    this.$$d_$BG_3 = Function.createDelegate(this, this.$BG_3);
    this.$$d_$CG_3 = Function.createDelegate(this, this.$CG_3);
    this.$$d_$BR_3 = Function.createDelegate(this, this.$BR_3);
    this.$$d_$BQ_3 = Function.createDelegate(this, this.$BQ_3);
    this.$$d_syncToGridStatus = Function.createDelegate(this, this.syncToGridStatus);
    this.$3U_3 = [];
    Mscrm.GridViewSelector.initializeBase(this, [$p0]);
    this.$1Q_3 = $p0
};
Mscrm.GridViewSelector.prototype = {
    $3_3: null,
    $1Q_3: null,
    $x_3: null,
    $i_3: null,
    $f_3: null,
    $3B_3: false,
    $2Q_3: false,
    $3s_3: true,
    $2A_3: null,
    $5_3: null,
    $s_3: null,
    $7f_3: null,
    $4r_3: null,
    $3h_3: null,
    $6U_3: 0,
    showNewVSControl: false,
    showOriginalSelectBox: true,
    isActivitiesViewSelector: false,
    createPersonalViewEnabled: false,
    gridFiltersEnabled: false,
    viewEntityName: null,
    selectedSavedQuery: null,
    selectedSavedQueryName: null,
    selectedSavedQueryType: null,
    userSelectedDefaultView: null,
    userOwnedView: null,
    quickFindQuery: null,
    systemViewsXml: null,
    userViewsXml: null,
    systemViewsLabel: null,
    userViewsLabel: null,
    customViewsLabel: null,
    createPersonalViewLabel: null,
    saveFiltersAsNewViewLabel: null,
    saveFiltersToCurrentViewLabel: null,
    onDefaultViewToolTip: null,
    setDefaultViewToolTip: null,
    renderForPrint: false,
    selectOptionsXml: null,
    $3z_3: false,
    $1V_3: null,
    get_activityList: function() { return this.$1V_3 },
    set_activityList: function(value) {
        this.$1V_3 = value;
        return value
    },
    $4H_3: null,
    get_systemViewsMap: function() { return this.$4H_3 },
    $4L_3: null,
    get_userViewsMap: function() { return this.$4L_3 },
    $3k_3: false,
    $4M_3: false,
    get_$5x_3: function() {
        if (!IsNull(this.$3_3.get_gridType()) &&
        (this.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid ||
            this.$3_3
            .get_gridType() ===
            Mscrm.GridControl.associatedGrid &&
            this.$3_3.isLiteSubGrid())) return "ms-crm-View-Name-View-Lite-hover";
        return "ms-crm-View-Name-hover"
    },
    get_$6B_3: function() {
        if (!IsNull(this.$3_3.get_gridType()) &&
        (this.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid ||
            this.$3_3
            .get_gridType() ===
            Mscrm.GridControl.associatedGrid &&
            this.$3_3.isLiteSubGrid())) return "ms-crm-View-Name-View-Lite-select";
        return "ms-crm-View-Name-select"
    },
    get_$6M_3: function() {
        if (!IsNull(this.$3_3.get_gridType()) &&
        (this.$3_3.get_gridType() === Mscrm.GridControl.hompageGrid ||
            this.$3_3
            .get_gridType() ===
            Mscrm.GridControl.associatedGrid &&
            this.$3_3.isLiteSubGrid())) return "ms-crm-View-Name-View-Lite";
        return "ms-crm-View-Name"
    },
    selectedViewId: null,
    selectedViewType: null,
    selectedViewName: null,
    originalViewId: null,
    originalViewType: null,
    originalViewName: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (this.showNewVSControl) {
            var $v_1 = this.$1Q_3.parentNode.parentNode, $v_2 = $get(this.$1Q_3.id);
            if (!IsNull($v_2.getAttribute("gridid"))) {
                this.$f_3 = $v_2.getAttribute("gridid").toString();
                this.$2A_3 = this.$f_3 + "_SavedNewQuerySelectorTD";
                var $v_3 = $get(this.$2A_3), $v_4 = this.$70_3(this.$2A_3, "GridViewSelectorContainer");
                Mscrm.Utilities.registerControlForXrmUI($v_3, $v_4);
                var $v_5 = XUI.Html.DomUtils.GetFirstChild($v_1).getElementsByTagName("SPAN")[1];
                this.registerChildWithXrmUIControl($v_5, null, "GridViewSelectorDropDown", this.$2A_3);
                this.registerChildWithXrmUIControl($v_2,
                    this.$f_3 + "_SavedNewQuerySelector",
                    "GridViewSelector",
                    this.$2A_3)
            }
            if (!this.showOriginalSelectBox) {
                this.$x_3 = XUI.Html.DomUtils.GetFirstChild($v_1).getElementsByTagName("SPAN")[0];
                this.$i_3 = XUI.Html.DomUtils.GetFirstChild($v_1).getElementsByTagName("A")[0]
            } else {
                this.$x_3 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_1))
                    .getElementsByTagName("SPAN")[0];
                this.$i_3 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_1))
                    .getElementsByTagName("A")[0]
            }
            this.$x_3 && !this.renderForPrint && this.addHandlers();
            this.$7f_3 = this.$1Q_3.parentNode.innerHTML;
            this.$4H_3 = XUI.Xml.LoadXml(this.systemViewsXml);
            this.$4L_3 = XUI.Xml.LoadXml(this.userViewsXml);
            this.selectedViewId = this.selectedSavedQuery;
            this.selectedViewName = this.selectedSavedQueryName;
            this.selectedViewType = this.selectedSavedQueryType
        }
        var $v_0 = $get("defaultViewIcon");
        if (!IsNull($v_0)) {
            $addHandler($v_0, "mouseover", this.$$d_$BQ_3);
            $addHandler($v_0, "mouseout", this.$$d_$BR_3);
            this.registerChildWithXrmUIControl($v_0, "defaultViewIcon", "GridViewPinImage", this.$2A_3)
        }
        this.$4r_3 = {};
        this.$3h_3 = {};
        window.setTimeout(this.$$d_$CG_3, 1);
        window.setTimeout(this.$$d_syncToGridStatus, 0)
    },
    registerChildWithXrmUIControl: function(element, childControlName, childControlType, parentId) {
        var $v_0 = {};
        if (childControlName) $v_0["id"] = childControlName;
        $v_0["type"] = childControlType;
        $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(element, $v_0)
    },
    $70_3: function($p0, $p1) {
        var $v_0 = {};
        $v_0["id"] = $p0;
        $v_0["type"] = $p1;
        return $v_0
    },
    addHandlers: function() {
        if (!this.$3z_3) {
            $addHandler(this.$i_3, "mouseover", this.$$d_$BG_3);
            $addHandler(this.$i_3, "mouseout", this.$$d_$BP_3);
            $addHandler(this.$i_3, "focus", this.$$d_$BF_3);
            $addHandler(this.$i_3, "blur", this.$$d_$BP_3);
            $addHandler(this.$i_3, "keydown", this.$$d_$BH_3);
            $addHandler(this.$i_3, "click", this.$$d_$BD_3);
            this.$3z_3 = true
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$5_3) && this.$5_3.dispose();
        if (!IsNull(this.get_eventManager()))
            if (!IsNull(this.$3U_3))
                for (var $v_0 = 0; $v_0 < this.$3U_3.length; $v_0++) {
                    var $v_1 = {};
                    $v_1["key"] = this.$3U_3[$v_0];
                    this.raiseEvent(100, $v_1)
                }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $3t_3: false,
    get_disabled: function() { return this.$3t_3 },
    set_disabled: function(value) {
        this.$3t_3 = value;
        if (this.$3t_3 && this.$i_3) {
            $clearHandlers(this.$i_3);
            this.$3z_3 = false
        } else this.addHandlers();
        return value
    },
    syncToGridStatus: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.get_element().attributes.getNamedItem("GridId");
        if (!IsNull($v_0) && !isNullOrEmptyString($v_0.value)) {
            this.$f_3 = $v_0.value;
            var $v_1 = $find(this.$f_3);
            if (!IsNull($v_1) && Mscrm.GridControl.isInstanceOfType($v_1)) this.$3_3 = $v_1
        }
        this.$3_3 && this.$3_3.get_disabled() && this.set_disabled(true)
    },
    $CG_3: function() {
        if (this.get_isDisposed()) return;
        if (IsNull(Mscrm.PageManager
                .get_instance()) ||
            IsNull(this.$1Q_3) ||
            isNullOrEmptyString(this.viewEntityName)) return;
        var $v_0;
        if (this.showNewVSControl) $v_0 = this.selectOptionsXml;
        else $v_0 = this.$1Q_3.OptionsXml;
        this.$81_3($v_0)
    },
    $Cq_3: function() {
        if (IsNull(Mscrm.PageManager
                .get_instance()) ||
            IsNull(this.$1Q_3) ||
            isNullOrEmptyString(this.viewEntityName)) return;
        if (this.$3B_3) {
            var $v_0 = new RemoteCommand("SavedQuerySelectorWebService", "GetSavedViewSelector", null);
            $v_0.SetParameter("entityName", this.viewEntityName);
            var $v_1 = $v_0.Execute(null);
            if ($v_1.Success) {
                var $v_2 = $v_1.Xml, $v_3 = $v_2.text;
                !IsNull($v_3) && this.$81_3($v_3)
            }
        }
    },
    $81_3: function($p0) { this.$6J_3($p0, this.viewEntityName) },
    $6J_3: function($p0, $p1) {
        var $v_0 = {};
        $v_0["timestamp"] = new Date;
        $v_0["queryList"] = $p0;
        var $v_1 = {};
        $v_1["data"] = $v_0;
        if (this.isActivitiesViewSelector) $v_1["key"] = String.format("QueryList_{0}_ActivitySelector", $p1);
        else $v_1["key"] = String.format("QueryList_{0}", $p1);
        this.$3U_3[this.$6U_3++] = $v_1["key"];
        Mscrm.PageManager.get_instance().raiseEvent(5, $v_1)
    },
    get_viewTitle: function() {
        if (this.showNewVSControl && !this.showOriginalSelectBox) return this.selectedViewName;
        else return this.get_$7r_3().getAttribute("Text")
    },
    get_viewIsUserOwned: function() {
        if (this.showNewVSControl && !this.showOriginalSelectBox) return this.selectedViewId === this.userOwnedView;
        else {
            var $v_0 = this.get_$7r_3().getAttribute("isUserOwned");
            return !IsNull($v_0) && $v_0 === "true"
        }
    },
    get_$7r_3: function() { return Mscrm.FormControlInputBehavior.GetElementBehavior(this.$1Q_3).get_selectedOption() },
    get_selectionControl: function() { return this.$3_3 },
    $Ck_3: function($p0) {
        if (!IsNull(this.$3_3)) {
            this.addCssClass(this.get_$5x_3());
            this.removeCssClass(this.get_$6B_3());
            this.removeCssClass(this.get_$6M_3())
        }
    },
    $6K_3: function($p0) {
        if (!IsNull(this.$3_3)) {
            this.addCssClass(this.get_$6B_3());
            this.removeCssClass(this.get_$5x_3());
            this.removeCssClass(this.get_$6M_3())
        }
    },
    $82_3: function($p0) {
        if (!IsNull(this.$3_3)) {
            this.addCssClass(this.get_$6M_3());
            this.removeCssClass(this.get_$5x_3());
            this.removeCssClass(this.get_$6B_3());
            if (this.$3k_3) {
                this.$3k_3 = false;
                this.$i_3.focus()
            }
        }
    },
    $BQ_3: function($p0) {
        var $v_0 = $get("defaultViewIcon");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.InternalUtilities.Utilities.isHighContrastEnabled();
            if ($v_1) {
                if (!$v_0.src.endsWith(window.LOCID_UI_DIR === "RTL"
                    ? "/_imgs/grid/pinned_16_rtl.png"
                    : "/_imgs/grid/pinned_16.png"))
                    $v_0.src = window.LOCID_UI_DIR === "RTL"
                        ? "/_imgs/grid/pin_16_rtl.png"
                        : "/_imgs/grid/pin_hover_16.png"
            } else if (!$v_0.className.endsWith(window.LOCID_UI_DIR === "RTL"
                ? "ms-crm-ImageStrip-pinned_16_RTL"
                : "ms-crm-ImageStrip-pinned_16"))
                $v_0.className = window.LOCID_UI_DIR === "RTL"
                    ? "ms-crm-ImageStrip-pin_hover_16_RTL"
                    : "ms-crm-ImageStrip-pin_hover_16"
        }
    },
    $BR_3: function($p0) {
        var $v_0 = $get("defaultViewIcon");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.InternalUtilities.Utilities.isHighContrastEnabled();
            if ($v_1) {
                if (!$v_0.src.endsWith(window.LOCID_UI_DIR === "RTL"
                    ? "/_imgs/grid/pinned_16_rtl.png"
                    : "/_imgs/grid/pinned_16.png"))
                    $v_0.src = window.LOCID_UI_DIR === "RTL"
                        ? "/_imgs/grid/pin_hover_16_rtl.png"
                        : "/_imgs/grid/pin_16.png"
            } else if (!$v_0.className.endsWith(window.LOCID_UI_DIR === "RTL"
                ? "ms-crm-ImageStrip-pinned_16_RTL"
                : "ms-crm-ImageStrip-pinned_16"))
                $v_0.className = window.LOCID_UI_DIR === "RTL"
                    ? "ms-crm-ImageStrip-pin_16_RTL"
                    : "ms-crm-ImageStrip-pin_16"
        }
    },
    $BG_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "DIV");
        this.$Ck_3($v_0)
    },
    $BP_3: function($p0) {
        if (!this.$3k_3) {
            var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "DIV");
            this.$82_3($v_0)
        }
    },
    $BF_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "DIV");
        this.$6K_3($v_0)
    },
    $BH_3: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 32:
        case 38:
        case 40:
            $p0.stopPropagation();
            $p0.preventDefault();
            var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "DIV");
            this.$86_3($v_0);
            break
        }
    },
    $BD_3: function($p0) {
        $p0.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "DIV");
        this.$86_3($v_0)
    },
    $86_3: function($p0) {
        this.$6K_3($p0);
        var $v_0 = this.$i_3.parentNode.parentNode,
            $v_1 = Mscrm.Utilities.getXYPos($v_0, window.LOCID_UI_DIR === "RTL", $get("crmContentPanel")),
            $v_2 = $v_1["y"] + this.$i_3.offsetHeight,
            $v_3 = $v_1["x"];
        if (window.LOCID_UI_DIR === "RTL") $v_3 = $v_3 + $v_0.offsetWidth;
        this.$Ce_3($p0, $v_3, $v_2)
    },
    $Ce_3: function($p0, $p1, $p2) {
        this.$6K_3($p0);
        if (IsNull(this.$5_3)) {
            this.$5_3 = this.$4S_3();
            this.$7Y_3(this.$5_3)
        }
        var $v_0 = XUI.Html.GetText($p0);
        if (this.get_viewTitle() === window.LOCID_SEARCH_RESULTS || $v_0 === window.LOCID_SEARCH_RESULTS) {
            if (!IsNull(this.$s_3)) {
                this.$s_3.set_isSelected(false);
                this.$5_3.set_focusElementOnShow(null)
            }
            this.$s_3 = null
        } else if (IsNull(this.$s_3))
            for (var $v_1 = null, $v_2 = 0; $v_2 < this.$5_3.get_menuItems().length; $v_2++)
                if (!isNullOrEmptyString($v_0)) {
                    $v_1 = this.$5_3.get_menuItems()[$v_2];
                    if ($v_1.get_title() === $v_0) {
                        this.$s_3 = $v_1;
                        this.$s_3.set_isSelected(true);
                        this.$5_3.set_focusElementOnShow(this.$s_3.get_itemContents());
                        break
                    }
                }
        this.$5_3.set_left($p1);
        this.$5_3.set_top($p2);
        this.$5_3.show();
        if (this.$3B_3) {
            this.$3B_3 = false;
            this.$5_3.refresh()
        }
        this.$3k_3 = true;
        if (!this.isActivitiesViewSelector) this.$3s_3 && this.$7x_3(this.$5_3)
    },
    $7x_3: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.get_menuItems().length; $v_0++) {
            var $v_1 = $p0.get_menuItems()[$v_0];
            if (!IsNull($v_1.get_iconClassName()))
                if ($v_1.get_menuItemId() === this.userSelectedDefaultView) {
                    $v_1.set_iconPath(window.LOCID_UI_DIR === "RTL"
                        ? window.CDNURL + "/_imgs/grid/pinned_16_rtl.png"
                        : "/_imgs/grid/pinned_16.png");
                    this.$3s_3 = false
                } else $v_1.set_iconPath(window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif")
        }
    },
    $4S_3: function() {
        var $v_0 = Mscrm.Menu.createMenu();
        $v_0.set_stylePrefix("VS");
        $v_0.set_propagateStyle(false);
        $v_0.set_width(284);
        $v_0.set_reference(this.viewEntityName);
        $v_0.set_hideCallback(this.$$d_viewSelectorHidden);
        $v_0.set_shiftVertical(false);
        return $v_0
    },
    viewSelectorHidden: function(menu) {
        var $v_0 = this.$x_3.parentNode.parentNode;
        this.$82_3($v_0)
    },
    $7Y_3: function($p0) {
        if (IsNull($p0)) return;
        if (this.isActivitiesViewSelector)
            for (var $v_0 = 0; $v_0 < this.$1V_3.length; $v_0++) {
                var $v_1;
                $v_1 = Mscrm.Menu.createMenu();
                $v_1.set_title(this.$1V_3[$v_0].Name);
                $v_1.set_stylePrefix("AVS");
                $v_1.set_isLoading(true);
                $v_1.set_subMenuShowCallback(this.$$d_$7Z_3);
                $v_1.set_focusElementOnShow(null);
                $v_1.set_reference(this.$1V_3[$v_0].TypeName);
                $v_1.set_menuItemId("ViewSelector_" + this.$1V_3[$v_0].TypeName);
                $v_1.set_width(283);
                $v_1.set_propagateStyle(false);
                $v_1.set_iconPath(Mscrm.Utilities.getIconPath(this.$1V_3[$v_0].TypeCode));
                $p0.addItem($v_1)
            }
        else this.$7Z_3($p0)
    },
    $7o_3: function($p0) {
        var $v_0 = null, $v_1 = new RemoteCommand("ActivitiesWebService", "GetQueryList");
        $v_1.SetParameter("entityName", $p0);
        var $v_2 = $v_1.Execute(null);
        if (!IsNull($v_2) && $v_2.Success) $v_0 = XUI.Xml.GetText($v_2.Xml);
        return $v_0
    },
    $6s_3: function($p0) {
        var $v_0 = {};
        if (this.isActivitiesViewSelector) $v_0["key"] = String.format("QueryList_{0}_ActivitySelector", $p0);
        else $v_0["key"] = String.format("QueryList_{0}", $p0);
        var $v_1 = Mscrm.PageManager.get_instance().get_eventManager().raiseEvent(10, $v_0, this), $v_2 = null;
        if (!IsNull($v_1) && isArray($v_1) && $v_1.length > 0) $v_2 = $v_1[0];
        var $v_3 = null;
        if (!IsNull($v_2)) $v_3 = $v_2["queryList"];
        return $v_3
    },
    $7Z_3: function($p0) {
        var $v_0 = $p0.get_reference();
        if (this.isActivitiesViewSelector) {
            var $v_1 = null, $v_2 = this.$6s_3($v_0);
            if (IsNull($v_2)) {
                $v_2 = this.$7o_3($v_0);
                !IsNull($v_2) && this.$6J_3($v_2, $v_0)
            }
            if (!IsNull($v_2)) {
                $v_1 = XUI.Xml.LoadXml($v_2);
                this.$7m_3($v_1)
            }
            if (IsNull(this.$4r_3[$v_0]) || this.$3h_3[$v_0]) {
                if (!IsNull($v_1)) {
                    this.$4M_3 = true;
                    $p0.set_menuId("ViewMenu_" + $v_0);
                    this.$BX_3($p0, $v_1);
                    this.$4M_3 = false
                }
                this.$4r_3[$v_0] = true;
                $p0.get_parentMenu().set_focusElementOnShow($p0.get_itemContents());
                this.$3h_3[$v_0] = false
            }
            this.$7x_3($p0)
        } else {
            var $v_3 = XUI.Xml.SelectSingleNode(this.$4H_3, "savedqueries", null);
            !IsNull($v_3) && $v_3.childNodes.length > 0 && this.$7a_3($p0, $v_0, $v_3, 1039);
            var $v_4 = XUI.Xml.SelectSingleNode(this.$4L_3, "userqueries", null);
            if (!IsNull($v_4) && $v_4.childNodes.length > 0) {
                this.$2Q_3 = true;
                this.$4N_3($p0);
                this.$7a_3($p0, $v_0, $v_4, 4230)
            }
            this.$4N_3($p0);
            this.createPersonalViewEnabled && this.$66_3($p0);
            this.$67_3($p0)
        }
        $p0.get_isLoading() && $p0.set_isLoading(false)
    },
    $Cs_3: function($p0, $p1) {
        var $v_0 = $p1["viewName"],
            $v_1 = Mscrm.MenuItem.createMenuItem($v_0),
            $v_2 = $p1["viewId"],
            $v_3 = $p1["viewType"],
            $v_4 = $p1["entityName"],
            $v_5 = {};
        $v_5["viewId"] = $v_2;
        $v_5["viewType"] = $v_3;
        $v_5["entityName"] = $v_4;
        $v_5["viewName"] = $v_0;
        $v_1.set_reference($v_5);
        $v_1.set_actionCallback(this.$$d_$Ct_3);
        $v_1.set_stylePrefix("VS");
        $v_1.set_menuItemId($v_2);
        var $v_6 = $p0.get_menuItems().length;
        $p0.insertItem($v_1, $v_6 - 4);
        if (!this.$2Q_3) {
            $p0.insertItem(this.$8r_3(this.userViewsLabel), $v_6 - 4);
            this.$Al_3($p0, $v_6 - 4);
            this.$2Q_3 = true
        }
    },
    $8r_3: function($p0) {
        var $v_0 = Mscrm.MenuItem.createMenuItem($p0);
        $v_0.set_stylePrefix("VS-header");
        return $v_0
    },
    $Al_3: function($p0, $p1) {
        var $v_0 = Mscrm.MenuItemSeparator.createSeparator(false);
        $v_0.set_stylePrefix("VS");
        $p0.insertItem($v_0, $p1)
    },
    $4N_3: function($p0) {
        var $v_0 = Mscrm.MenuItemSeparator.createSeparator(false);
        $v_0.set_stylePrefix("VS");
        $p0.addItem($v_0)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 62:
            this.$AN_3(parameters);
            break;
        case 14:
        case 47:
            this.$Ab_3();
            break;
        case 92:
            this.$AY_3();
            break;
        case 91:
            this.$78_3();
            this.$3s_3 = true;
            break
        }
        return null
    },
    get_$4o_3: function() {
        return Mscrm.GridCommandActions.canEnableSaveButton(this.$3_3) &&
            Mscrm.GridCommandActions.disableButtonsWhenChartMaximized(this.$3_3)
    },
    get_$7O_3: function() { return Mscrm.RibbonActions.isUserQuerySelected(this.$3_3) },
    $AY_3: function() {
        if (this.$5_3)
            for (var $$arr_0 = this.$5_3.get_menuItems(), $$len_1 = $$arr_0.length, $$idx_2 = 0;
                $$idx_2 < $$len_1;
                ++$$idx_2) {
                var $v_0 = $$arr_0[$$idx_2];
                if ($v_0
                    .get_menuItemId() ===
                    "{SaveFiltersAsNew}" ||
                    $v_0.get_menuItemId() === "{SaveFiltersToCurrent}") {
                    $v_0.set_disabled($v_0.get_menuItemId() === "{SaveFiltersAsNew}"
                        ? !this.get_$4o_3()
                        : !(this.get_$4o_3() && this.get_$7O_3()));
                    $v_0.displayRestStyle()
                }
            }
    },
    $AN_3: function($p0) {
        if (!IsNull(this.$5_3)) {
            var $v_0 = false, $v_1 = false, $v_2, $v_3 = $p0["entityTypeCode"];
            if (!IsNull($v_3)) {
                $v_2 = Number.parseInvariant($v_3);
                if (!IsNull($v_2)) $v_0 = Mscrm.EntityPropUtil.isActivityTypeCode($v_2)
            }
            var $v_4, $v_5 = $p0["entityName"];
            if ($v_0) {
                $v_4 = this.$6s_3($v_5);
                if (!IsNull($v_4)) {
                    $v_4 = this.$7o_3($v_5);
                    if (!IsNull($v_4)) {
                        this.$6J_3($v_4, $v_5);
                        $v_1 = true
                    }
                }
            }
            if (this.isActivitiesViewSelector && $v_0) this.$3h_3[$v_5] = true;
            else {
                var $v_6 = this.$5_3.get_reference();
                if ($v_6 === $v_5) {
                    this.$Cs_3(this.$5_3, $p0);
                    this.$3B_3 = true;
                    !$v_1 && this.$Cq_3()
                }
            }
        }
    },
    $Ab_3: function() {
        if (IsNull($get(this.get_id())) || IsNull(XUI.Html.DomUtils.GetFirstChild($get(this.get_id())))) return;
        try {
            var $v_0 = $get(this.get_id()), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
            $v_1.style.width = $v_1.clientWidth.toString();
            var $v_2 = $v_0.parentNode.offsetWidth,
                $v_3 = $v_1.scrollWidth,
                $v_4 = XUI.Html.DomUtils.GetNextSibling($v_1).offsetWidth;
            if ($v_3 > $v_2 - $v_4) {
                $v_1.style.width = ($v_2 - $v_4 - 30).toString();
                $v_1.style.textOverflow = "ellipsis";
                $v_1.style.overflow = "hidden"
            } else $v_1.style.width = "auto";
            this.$78_3();
            this.$3_3.HandleGridResize()
        } catch ($$e_5) {
        }
    },
    $78_3: function() {
        var $v_0 = $get("defaultViewIcon");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.InternalUtilities.Utilities.isHighContrastEnabled();
            if (this.selectedViewId === this.userSelectedDefaultView) {
                if ($v_1)
                    $v_0.src = window.LOCID_UI_DIR === "RTL"
                        ? "/_imgs/grid/pinned_16_rtl.png"
                        : "/_imgs/grid/pinned_16.png";
                else
                    $v_0.className = window.LOCID_UI_DIR === "RTL"
                        ? "ms-crm-ImageStrip-pinned_16_RTL"
                        : "ms-crm-ImageStrip-pinned_16";
                $v_0.style.cursor = "default";
                $v_0.title = this.onDefaultViewToolTip
            } else {
                if ($v_1)
                    $v_0.src = window.LOCID_UI_DIR === "RTL"
                        ? "/_imgs/grid/pin_hover_16_rtl.png"
                        : "/_imgs/grid/pin_16.png";
                else
                    $v_0.className = window.LOCID_UI_DIR === "RTL"
                        ? "ms-crm-ImageStrip-pin_16_RTL"
                        : "ms-crm-ImageStrip-pin_16";
                $v_0.style.cursor = "pointer";
                $v_0.title = this.setDefaultViewToolTip
            }
        }
    },
    $7a_3: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p3 === 1039,
            $v_1 = $v_0 ? this.systemViewsLabel : this.userViewsLabel,
            $v_2 = Mscrm.MenuItem.createMenuItem($v_1);
        $v_2.set_stylePrefix("VS-header");
        $p0.addItem($v_2);
        var $v_3 = $v_0 ? "savedquery" : "userquery",
            $v_4 = $v_0 ? "savedqueryid" : "userqueryid",
            $v_5 = XUI.Xml.SelectNodes($p2, $v_3, null),
            $v_6 = 0;
        while ($v_6 < $v_5.length) {
            if ($v_0 && XUI.Xml.GetText(XUI.Xml.SelectNodes($v_5[$v_6], "isquickfindquery", null)[0]) === "true") {
                this.setQuickFindQuery(XUI.Xml.GetText(XUI.Xml.SelectNodes($v_5[$v_6], $v_4, null)[0]));
                $v_6++;
                continue
            }
            var $v_7 = XUI.Xml.GetText(XUI.Xml.SelectNodes($v_5[$v_6], "name", null)[0]),
                $v_8 = Mscrm.MenuItem.createMenuItem($v_7),
                $v_9 = XUI.Xml.GetText(XUI.Xml.SelectNodes($v_5[$v_6], $v_4, null)[0]),
                $v_A = {};
            $v_A["viewId"] = $v_9;
            $v_A["viewType"] = $p3;
            $v_A["entityName"] = $p1;
            $v_A["viewName"] = $v_7;
            $v_8.set_reference($v_A);
            $v_8.set_actionCallback(this.$$d_$Ct_3);
            $v_8.set_stylePrefix("VS");
            $v_8.set_menuItemId($v_9);
            if ($v_9 === this.selectedSavedQuery) {
                this.selectedViewName = $v_7;
                this.selectedViewId = $v_9;
                this.selectedViewType = $p3.toString();
                $v_8.set_isSelected(true);
                $p0.set_focusElementOnShow($v_8.get_itemContents());
                this.$s_3 = $v_8
            }
            $p0.addItem($v_8);
            $v_6++
        }
    },
    $66_3: function($p0) {
        if (this.createPersonalViewEnabled) {
            var $v_0 = Mscrm.MenuItem.createMenuItem(this.createPersonalViewLabel);
            $v_0.set_actionCallback(this.$$d_$Ay_3);
            $v_0.set_stylePrefix("VS");
            $p0.addItem($v_0)
        }
    },
    $67_3: function($p0) {
        if (this.gridFiltersEnabled) {
            var $v_0 = Mscrm.MenuItem.createMenuItem(this.saveFiltersAsNewViewLabel);
            $v_0.set_actionCallback(this.$$d_$CF_3);
            $v_0.set_stylePrefix("VS");
            $v_0.set_menuItemId("{SaveFiltersAsNew}");
            $v_0.set_disabled(!this.get_$4o_3());
            $p0.addItem($v_0);
            var $v_1 = Mscrm.MenuItem.createMenuItem(this.saveFiltersToCurrentViewLabel);
            $v_1.set_actionCallback(this.$$d_$CI_3);
            $v_1.set_stylePrefix("VS");
            $v_1.set_menuItemId("{SaveFiltersToCurrent}");
            $v_1.set_disabled(!(this.get_$4o_3() && this.get_$7O_3()));
            $p0.addItem($v_1)
        }
    },
    $BX_3: function($p0, $p1) {
        if (IsNull($p0)) $p0 = this.$4S_3();
        else $p0.clear();
        var $v_0 = $p0.get_reference(),
            $v_1 = XUI.Xml.SelectSingleNode($p1, "select/OPTGROUP[@id='AppSystemViews']", null);
        !IsNull($v_1) && $v_1.hasChildNodes() && this.$4v_3($p0, $v_0, $v_1);
        var $v_2 = XUI.Xml.SelectSingleNode($p1, "select/OPTGROUP[@id='AppUserViews']", null);
        if (!IsNull($v_2) && $v_2.hasChildNodes()) {
            this.$2Q_3 = true;
            this.$4N_3($p0);
            this.$4v_3($p0, $v_0, $v_2)
        }
        this.$4N_3($p0);
        this.$66_3($p0);
        this.$67_3($p0);
        $p0.get_isVisible() && $p0.refresh()
    },
    populateMenuFromQueryList: function(queryList) {
        if (IsNull(this.$5_3)) this.$5_3 = this.$4S_3();
        else this.$5_3.clear();
        var $v_0 = this.$5_3.get_reference(), $v_1 = XUI.Xml.LoadXml(queryList);
        this.$7m_3($v_1);
        this.$66_3(this.$5_3);
        this.$67_3(this.$5_3);
        var $v_2 = XUI.Xml.SelectSingleNode($v_1, "select/OPTGROUP[@id='AppSystemViews']", null);
        !IsNull($v_2) && $v_2.childNodes.length > 0 && this.$4v_3(this.$5_3, $v_0, $v_2);
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, "select/OPTGROUP[@id='AppUserViews']", null);
        if (!IsNull($v_3) && $v_3.childNodes.length > 0) {
            this.$2Q_3 = true;
            this.$4v_3(this.$5_3, $v_0, $v_3)
        }
        this.$5_3.refresh()
    },
    $7m_3: function($p0) {
        var $v_0 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($p0, "select", null).attributes
            .getNamedItem("quickFindQuery"));
        !isNullOrEmptyString($v_0) && this.setQuickFindQuery($v_0)
    },
    $4v_3: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText($p2.attributes.getNamedItem("LABEL")));
        $v_0.set_stylePrefix("VS-header");
        $p0.addItem($v_0);
        var $v_1 = XUI.Xml.SelectNodes($p2, "option", null), $v_2 = 0;
        while ($v_2 < $v_1.length) {
            var $v_3 = XUI.Xml.GetText($v_1[$v_2]),
                $v_4 = Mscrm.MenuItem.createMenuItem($v_3),
                $v_5 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("Type")),
                $v_6 = XUI.Xml.GetText($v_1[$v_2].attributes.getNamedItem("value")),
                $v_7 = {};
            $v_7["viewId"] = $v_6;
            $v_7["viewType"] = $v_5;
            $v_7["entityName"] = $p1;
            $v_7["viewName"] = $v_3;
            $v_4.set_reference($v_7);
            $v_4.set_actionCallback(this.$$d_$Ct_3);
            $v_4.set_stylePrefix("VS");
            $v_4.set_menuItemId($v_6);
            if (!this.$4M_3 && $v_1[$v_2].attributes.getNamedItem("SELECTED")) {
                this.setViewForNewSavedQuerySelector($v_3, $v_6, $v_5);
                this.selectedSavedQuery = $v_6;
                this.selectedSavedQueryName = $v_3;
                this.selectedSavedQueryType = $v_5;
                this.setDefaultSavedQueryView($v_6);
                $v_4.set_isSelected(true);
                $p0.set_focusElementOnShow($v_4.get_itemContents());
                this.$s_3 = $v_4
            }
            $v_1[$v_2].attributes.getNamedItem("isUserOwned") && this.setUserOwnedView($v_6);
            $v_1[$v_2].attributes.getNamedItem("isdefault") && this.setUserSelectedDefaultView($v_6);
            $p0.addItem($v_4);
            $v_2++
        }
    },
    $Ay_3: function($p0) {
        var $v_0 = "crmGrid";
        if (!IsNull(this.$3_3)) $v_0 = this.$3_3.get_id();
        openAdvFind($v_0, true)
    },
    $CF_3: function($p0) { Mscrm.RibbonActions.gridFiltersSaveAsNewView(this.$3_3) },
    $CI_3: function($p0) { Mscrm.RibbonActions.gridFiltersSaveToCurrentView(this.$3_3) },
    $Ct_3: function($p0, $p1) {
        if (IsNull($p1)) $p1 = true;
        var $v_0 = $p0.get_reference();
        !IsNull(this.$s_3) && this.$s_3.set_isSelected(false);
        $p0.set_isSelected(true);
        $p0.get_parentMenu().set_focusElementOnShow($p0.get_itemContents());
        this.$s_3 = $p0;
        var $v_1 = $v_0["viewType"], $v_2 = $v_0["viewId"], $v_3 = $v_0["viewName"], $v_4 = $v_0["entityName"];
        if (isNullOrEmptyString($v_1) || isNullOrEmptyString($v_2)) return;
        this.setViewForNewSavedQuerySelector($p0.get_title(), $v_2, $v_1);
        if ($p1) {
            handleView(null, this.$3_3);
            this.isActivitiesViewSelector && updateVisualizationList(this.$3_3, $v_4)
        }
    },
    setSelectedViewItemInMenu: function(viewId, loadView) {
        if (IsNull(loadView)) loadView = true;
        if (IsNull(this.$5_3)) {
            this.$5_3 = this.$4S_3();
            this.$7Y_3(this.$5_3)
        }
        for (var $v_0 = null, $v_1 = 0; $v_1 < this.$5_3.get_menuItems().length; $v_1++) {
            $v_0 = this.$5_3.get_menuItems()[$v_1];
            if (!isNullOrEmptyString($v_0.get_menuItemId()))
                if ($v_0.get_menuItemId() === viewId) {
                    this.$Ct_3($v_0, loadView);
                    break
                }
        }
    },
    setViewForNewSavedQuerySelector: function(viewName, viewId, viewType) {
        this.selectedViewName = viewName;
        this.selectedViewId = viewId;
        this.selectedViewType = viewType;
        if (this.showNewVSControl) {
            XUI.Html.SetText(this.$x_3, viewName);
            this.$x_3.setAttribute("currentview", viewId);
            this.$x_3.setAttribute("currentviewtype", viewType)
        }
    },
    setOriginalViewForNewSavedQuerySelector: function() {
        this.setViewForNewSavedQuerySelector(this.originalViewName, this.originalViewId, this.originalViewType)
    },
    setUserSelectedDefaultView: function(viewId) {
        this.userSelectedDefaultView = viewId;
        this.showNewVSControl && this.$x_3.setAttribute("userselecteddefaultview", viewId)
    },
    setUserOwnedView: function(viewId) {
        this.userOwnedView = viewId;
        this.showNewVSControl && this.$x_3.setAttribute("userownedview", viewId)
    },
    setQuickFindQuery: function(viewId) {
        this.quickFindQuery = viewId;
        this.showNewVSControl && this.$x_3.setAttribute("quickfindquery", viewId)
    },
    setDefaultSavedQueryView: function(viewId) {
        this.showNewVSControl && this.$x_3.setAttribute("defaultsavedqueryview", viewId)
    }
};
Mscrm.LayoutPageParameters = function() { this.$1m_0 = "" };
Mscrm.LayoutPageParameters.prototype = {
    $1U_0: 0,
    get_objectTypeCode: function() { return this.$1U_0 },
    set_objectTypeCode: function($p0) {
        this.$1U_0 = $p0;
        return $p0
    },
    $1m_0: null,
    get_processID: function() { return this.$1m_0 },
    set_processID: function($p0) {
        this.$1m_0 = $p0;
        return $p0
    },
    $2C_0: 0,
    get_processTimestamp: function() { return this.$2C_0 },
    set_processTimestamp: function($p0) {
        this.$2C_0 = $p0;
        return $p0
    },
    toString: function() { return String.format("{0}/{1}/{2}", this.$1U_0, this.$1m_0, this.$2C_0) }
};
Mscrm.QuickFindControl = function($p0) {
    this.$$d_clearQuickFind = Function.createDelegate(this, this.clearQuickFind);
    this.$$d_RunQuickFind = Function.createDelegate(this, this.RunQuickFind);
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$AI_3 = Function.createDelegate(this, this.$AI_3);
    this.$$d_$AO_3 = Function.createDelegate(this, this.$AO_3);
    this.$$d_$AU_3 = Function.createDelegate(this, this.$AU_3);
    this.$$d_$AV_3 = Function.createDelegate(this, this.$AV_3);
    this.$$d_$AW_3 = Function.createDelegate(this, this.$AW_3);
    this.$$d_$7C_3 = Function.createDelegate(this, this.$7C_3);
    Mscrm.QuickFindControl.initializeBase(this, [$p0])
};
Mscrm.QuickFindControl.$9m = function($p0) {
    var $v_0 = "", $v_1 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0["SharedKeyword"]) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0["SharedKeyword"].toString())) {
        $v_0 = $p0["SharedKeyword"].toString();
        $v_1 = true
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0["AllLocationsKeyword"]) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0["AllLocationsKeyword"].toString())) {
        if ($v_1) $v_0 += " OR ";
        $v_0 += $p0["AllLocationsKeyword"].toString()
    }
    return $v_0.length > 0 ? " AND (" + $v_0 + ")" : $v_0
};
Mscrm.QuickFindControl.$5u = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.QuickFindControl.prototype = {
    $1M_3: null,
    $1W_3: null,
    $y_3: null,
    $q_3: null,
    $1c_3: null,
    $36_3: null,
    $43_3: null,
    $p_3: null,
    $3_3: null,
    $1N_3: null,
    $35_3: false,
    $3Z_3: null,
    $3Y_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$3Z_3 = this.get_$l_3() + "_findCriteriaButton";
        this.$3Y_3 = this.get_$l_3() + "_findCriteria";
        this.$p_3 = $get(this.$3Y_3);
        this.$q_3 = $get(this.get_$l_3() + "_SavedQuerySelector");
        this.$1M_3 = $get(this.$3Z_3);
        this.$1W_3 = $get(this.get_$l_3() + "_clearCriteriaButton");
        this.$y_3 = $get(this.get_$l_3() + "_articleSearchButton");
        if (!(typeof SHOW_ARTICLE_SEACRH_MENU == "undefined" || SHOW_ARTICLE_SEACRH_MENU == null) &&
            !isOutlookHostedWindow()) {
            this.$y_3.style.display = "inline";
            $addHandler(this.$y_3, "click", this.$$d_$7C_3);
            $addHandler(this.$y_3, "mouseover", this.$$d_$AW_3);
            $addHandler(this.$y_3, "mouseout", this.$$d_$AV_3);
            $addHandler(this.$y_3, "keydown", this.$$d_$AU_3);
            Mscrm.GlobalServices.get_articleSearchRibbon().set_gridId(this.get_$l_3());
            Mscrm.GlobalServices.get_articleSearchRibbon().setHintText()
        } else this.$y_3.style.display = "none";
        $addHandler(this.get_element(), "keypress", this.$$d_$AO_3);
        $addHandler(this.get_element(), "keyup", this.$$d_$AI_3);
        $addHandler(this.get_element(), "click", this.$$d_$3d_3);
        $addHandler(this.$1M_3, "click", this.$$d_RunQuickFind);
        $addHandler(this.$1W_3, "click", this.$$d_clearQuickFind);
        var $v_0 = $get("crmQuickFindTD"), $v_1 = this.$70_3("crmQuickFindTD", "GridQuickFindContainer");
        Mscrm.Utilities.registerControlForXrmUI($v_0, $v_1);
        var $v_2 = $get(this.$3Y_3);
        this.registerChildWithXrmUIControl($v_2, this.$3Y_3, "GridQuickFindButton", "crmQuickFindTD");
        var $v_3 = $get(this.$3Z_3);
        this.registerChildWithXrmUIControl($v_3, this.$3Z_3, "GridQuickFindButton", "crmQuickFindTD")
    },
    $70_3: function($p0, $p1) {
        var $v_0 = {};
        $v_0["id"] = $p0;
        $v_0["type"] = $p1;
        return $v_0
    },
    registerChildWithXrmUIControl: function(quickFindObject, childControlName, childControlType, parentId) {
        var $v_0 = {};
        $v_0["id"] = childControlName;
        $v_0["type"] = childControlType;
        $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(quickFindObject, $v_0)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "keypress", this.$$d_$AO_3);
        $removeHandler(this.get_element(), "keyup", this.$$d_$AI_3);
        $removeHandler(this.get_element(), "click", this.$$d_$3d_3);
        $removeHandler(this.$1M_3, "click", this.$$d_RunQuickFind);
        $removeHandler(this.$1W_3, "click", this.$$d_clearQuickFind);
        if (!(typeof SHOW_ARTICLE_SEACRH_MENU == "undefined" || SHOW_ARTICLE_SEACRH_MENU == null) &&
            !isOutlookHostedWindow()) {
            $removeHandler(this.$y_3, "click", this.$$d_$7C_3);
            $removeHandler(this.$y_3, "mouseover", this.$$d_$AW_3);
            $removeHandler(this.$y_3, "mouseout", this.$$d_$AV_3);
            $removeHandler(this.$y_3, "keydown", this.$$d_$AU_3)
        }
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    get_$l_3: function() {
        var $v_0 = this.get_element().attributes.getNamedItem("GridId");
        if (!IsNull($v_0)) return $v_0.value;
        return null
    },
    get_selectionControl: function() {
        if (IsNull(this.$3_3)) this.$3_3 = this.$3a_3();
        return this.$3_3
    },
    $3a_3: function() {
        var $v_0 = this.get_$l_3();
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = Mscrm.GridControl.findComponent($v_0);
            if (!IsNull($v_1)) return $v_1;
            var $v_2 = $get("frmGanttFrame");
            if (!IsNull($v_2)) return $v_2.contentWindow.$find($v_0)
        }
        return null
    },
    $3d_3: function($p0) {
        if (!this.$1N_3) this.$1N_3 = this.$73_3();
        if (!IsNull(this.$1N_3) && this.$1N_3.viewEntityName === "kbarticle") {
            var $v_0 = $p0.target;
            if ($v_0.tagName === "INPUT") {
                IsNull(Mscrm.GlobalServices.get_articleSearchRibbon()) &&
                    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri
                        .create("/_static/CS/ArticleSearchRibbon/ArticleSearchRibbon.js"));
                !Mscrm.GlobalServices.get_articleSearchRibbon().isSearchTabEnabled() &&
                    Mscrm.GlobalServices.get_articleSearchRibbon().enableSearch();
                if (!this.$35_3) {
                    Mscrm.GlobalServices.get_articleSearchRibbon().setFocusToSearchTab();
                    this.$35_3 = true
                }
            }
        }
    },
    $AO_3: function($p0) {
        var $v_0 = this.$3a_3();
        if ($v_0.GetParameter("ispreviewmode") === "1" || $v_0.GetParameter("InnerGridDisabled") === "1") return;
        if (Mscrm.Utilities.getDomEventKeyCode($p0) === 13)
            if (this.$1M_3.style.display !== "none") this.RunQuickFind();
            else this.clearQuickFind()
    },
    $7C_3: function($p0) { Mscrm.GlobalServices.get_articleSearchRibbon().showHideSearchMenu($p0) },
    $AW_3: function($p0) {
        var $v_0 = $get("articleSearchImg");
        if (!IsNull($v_0)) $v_0.className = "ms-crm-ImageStrip-SearchFilter_Hover_16"
    },
    $AV_3: function($p0) {
        var $v_0 = $get("articleSearchImg");
        if (!IsNull($v_0)) $v_0.className = "ms-crm-ImageStrip-SearchFilter_16"
    },
    $AU_3: function($p0) { ($p0.keyCode === 13 || $p0.keyCode === 32) && this.$7C_3($p0) },
    $AI_3: function($p0) {
        if (!this.$1N_3) this.$1N_3 = this.$73_3();
        if (!IsNull(this.$1N_3) && this.$1N_3.viewEntityName === "kbarticle") {
            IsNull(Mscrm.GlobalServices.get_articleSearchRibbon()) &&
                Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri
                    .create("/_static/CS/ArticleSearchRibbon/ArticleSearchRibbon.js"));
            !Mscrm.GlobalServices.get_articleSearchRibbon().isSearchTabEnabled() &&
                Mscrm.GlobalServices.get_articleSearchRibbon().enableSearch();
            if (!this.$35_3) {
                Mscrm.GlobalServices.get_articleSearchRibbon().setFocusToSearchTab();
                this.$35_3 = true
            }
        }
        var $v_0 = this.$3a_3();
        if ($v_0.GetParameter("ispreviewmode") === "1" || $v_0.GetParameter("InnerGridDisabled") === "1") return;
        var $v_1 = Mscrm.Utilities.getDomEventKeyCode($p0);
        if ($v_1 === 13) return;
        else if ($v_1 === 40 && $v_0.$2_3.get_numberOfRecords() > 0) $v_0.$2_3.get_element().focus();
        else if ($v_1 !== 9 && $v_1 !== 18) {
            if (!IsNull(this.$p_3)) {
                var $v_2 = this.$p_3.value.replace(new RegExp("[\\*]+"), "*").trim(),
                    $v_3 = $v_0.GetParameter("quickfind");
                if (isNullOrEmptyString($v_2) &&
                    (!isNullOrEmptyString($v_3) || !isNullOrEmptyString(this.$p_3.getAttribute("defaultValue")))) {
                    this.$53_3();
                    return
                }
            }
            this.$6G_3()
        }
    },
    $73_3: function() {
        var $v_0 = $find(this.get_$l_3() + "_SavedNewQuerySelector");
        if (!IsNull($v_0)) return $v_0;
        else return $find(this.get_$l_3() + "_SavedQuerySelector")
    },
    RunQuickFind: function(domEvent) {
        !IsNull(domEvent) && domEvent.preventDefault();
        var $v_0 = "", $v_1 = this.$3a_3();
        if ($v_1.GetParameter("ispreviewmode") === "1" || $v_1.GetParameter("InnerGridDisabled") === "1") return;
        var $v_2 = $find(this.get_$l_3() + "_SavedNewQuerySelector");
        if ($v_2 && $v_2.showNewVSControl && !$v_2.showOriginalSelectBox) {
            $v_0 = $v_2.viewEntityName;
            if ($v_2.selectedViewName !== window.LOCID_SEARCH_RESULTS) {
                this.$1c_3 = $v_2.selectedViewId;
                this.$36_3 = $v_2.selectedViewName;
                this.$43_3 = $v_2.selectedViewType
            }
        } else {
            this.$q_3 = $get(this.get_$l_3() + "_SavedQuerySelector");
            if (!IsNull(this.$q_3))
                if (window.LOCID_SEARCH_RESULTS !== this.$q_3.value && this.$q_3.value.length > 0) {
                    this.$1c_3 = this.$q_3.value;
                    this.$36_3 = this.$q_3.options[this.$q_3.selectedIndex].title
                }
        }
        if ($v_0 === "sharepointdocument") {
            setPerfMarkerTimestamp("QuickFindSharePointAssocitedGridStart");
            var $v_3$4 = this.$p_3.value.trim();
            if (isNullOrEmptyString($v_3$4)) {
                alert(window.LOCID_SEARCH_ALERT_NO_CRITERIA);
                return
            }
            var $v_4 = Number.parseInvariant(Xrm.Page.context.getQueryStringParameters()["etc"].toString()),
                $v_5 = Xrm.Page.data.entity.getId();
            setPerfMarkerTimestamp("QuickFindSharePointAssocitedGridStart");
            var $v_6 = $v_1.GetParameter("locationId");
            if (IsNull($v_6)) $v_6 = "";
            var $$t_B = this;
            Xrm.Internal.messages.searchDocument($v_4, $v_5, $v_6).then(function($p1_0) {
                    setPerfMarkerTimestamp("QuickFindSharePointAssocitedGridSDKEnd");
                    $$t_B.$AX_3($p1_0, $v_3$4)
                },
                Mscrm.QuickFindControl.$5u);
            return
        }
        if ($v_0 === "kbarticle") {
            var $v_7 = this.$p_3.value.replace(new RegExp("[\\*]+"), "*").trim();
            if (isNullOrEmptyString($v_7)) {
                alert(window.LOCID_SEARCH_ALERT_NO_CRITERIA);
                return
            } else if (Mscrm.GlobalServices.get_articleSearchRibbon().get_searchType() === "SubjectSearch" &&
                Mscrm.GlobalServices.get_articleSearchRibbon().get_selectedSubjectId() ===
                "00000000-0000-0000-0000-000000000000") {
                alert(window.LOCID_SUBJECT_ALERT_NO_CRITERIA);
                return
            }
            Mscrm.GlobalServices.get_articleSearchRibbon().set_gridId(this.get_$l_3());
            Mscrm.GlobalServices.get_articleSearchRibbon().findArticles(this.$p_3.value);
            this.$53_3();
            return
        }
        if ($v_0 === "knowledgearticle") {
            var $v_8 = Mscrm.GridControl.findComponent("crmGrid");
            $v_8.SetParameter("stype", "0");
            $v_8.SetParameter("svalue", this.$p_3.value);
            $v_8.SetParameter("suppressFetch", "0");
            $v_8.SetParameter("ssubject", "00000000-0000-0000-0000-000000000000");
            $v_8.SetParameter("sinflection", "1");
            $v_8.SetParameter("sremove", "1");
            $v_8.SetParameter("queryapi", "CRMKnowledgeArticle.FullTextSearch");
            $v_8.Refresh();
            return
        }
        quickFind($v_1) && this.$53_3();
        this.$8Q_3($v_1)
    },
    $AX_3: function($p0, $p1) {
        var $v_0, $$t_6, $$t_7;
        $$t_7 = Mscrm.JsonUtilities.tryGetParsedJson($p0.searchLocation, $$t_6 = { val: $v_0 }), $v_0 = $$t_6
            .val, $$t_7;
        var $v_1 = $v_0["SearchLocationUrl"].toString(), $v_2 = $p0.documentLocation, $v_3 = Mscrm.CrmUri.create($v_1);
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) $v_3.get_query()["u"] = $v_2;
        $v_3.get_query()["k"] = $p1 + Mscrm.QuickFindControl.$9m($v_0);
        setPerfMarkerTimestamp("QuickFindSharePointAssocitedGridEnd");
        openStdWin($v_3, buildWinName(null), 1e3, 800, null)
    },
    clearQuickFind: function(domEvent) {
        !IsNull(domEvent) && domEvent.preventDefault();
        var $v_0 = "", $v_1 = this.$3a_3();
        if ($v_1.GetParameter("InnerGridDisabled") === "1") return;
        $v_1.SetParameter("quickfind", "");
        var $v_2 = false,
            $v_3 = $find(this.get_$l_3() + "_SavedNewQuerySelector"),
            $v_4 = !IsNull($v_3) && $v_3.showNewVSControl;
        if ($v_3) $v_0 = $v_3.viewEntityName;
        if ($v_0 === "kbarticle") Mscrm.GlobalServices.get_articleSearchRibbon().closeArticleSearch();
        else {
            if ($v_4 && !IsNull(this.$1c_3)) {
                $v_3.setViewForNewSavedQuerySelector(this.$36_3, this.$1c_3, this.$43_3);
                if (!$v_3.showOriginalSelectBox) {
                    $v_2 = true;
                    handleView(null, $v_1)
                }
            }
            this.$q_3 = $get(this.get_$l_3() + "_SavedQuerySelector");
            if (!IsNull(this.$q_3) && !IsNull(this.$1c_3)) {
                this.$q_3.value = this.$1c_3;
                !$v_2 && XUI.Html.DispatchDomEvent(this.$q_3, XUI.Html.CreateDomEvent("change"))
            } else !$v_2 && clearFind($v_1)
        }
        this.NotifyExitedQuickFind();
        this.$p_3.focus()
    },
    NotifyExitedQuickFind: function() {
        this.$6G_3();
        this.$p_3.value = "";
        var $v_0 = Mscrm.CrmUIBehavior.getBehaviorByName(this.$p_3, "HintText");
        $v_0.notifyTextChanged(null)
    },
    SyncQuickFindButton: function() {
        if (!isNullOrEmptyString(this.$p_3.value)) this.$53_3();
        else this.$6G_3()
    },
    $6G_3: function() {
        if (!IsNull(this.$1M_3)) {
            this.$1M_3.style.display = "inline-block";
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$1M_3);
            if (!IsNull($v_0)) {
                var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create($v_0.getAttribute("imgBase") + ".gif"));
                $v_0.src = $v_1.source;
                $v_0.className = Mscrm.ImageStrip.replaceExistingImageStripClass($v_0.className, $v_1.cssClass)
            }
        }
        if (!IsNull(this.$1W_3)) this.$1W_3.style.display = "none"
    },
    $53_3: function() {
        this.$1W_3.style.display = "inline-block";
        this.$1M_3.style.display = "none";
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$1W_3);
        $v_0.src = $v_0.getAttribute("imgBase") + ".gif"
    },
    GetSavedViewIds: function() {
        var $v_0 = {};
        $v_0["ViewId"] = this.$1c_3;
        $v_0["ViewTitle"] = this.$36_3;
        $v_0["ViewType"] = this.$43_3;
        return $v_0
    },
    $8Q_3: function($p0) {
        try {
            var $v_0 = {};
            $v_0["entityId"] = $p0.get_entityTypeCode().toString();
            $v_0["userRoleId"] = window.USER_ROLES.toString();
            $v_0["viewId"] = $p0.GetParameter("viewid");
            Mscrm.MetricsReporting.instance().addMetric("gridsearch", $v_0)
        } catch ($v_1) {
        }
    }
};
Mscrm.SortColumns = function() { this.columns = new Array(0) };
Mscrm.SortColumns.prototype = {
    toggle: function(columnName, append) {
        var $v_0 = new Mscrm.SortColumnInfo;
        $v_0.$1A_0 = columnName;
        var $v_1 = this.$7G_0(columnName);
        if ($v_1 !== -1) {
            $v_0.$1F_0 = !this.columns[$v_1].$1F_0;
            if (append) {
                this.columns[$v_1] = $v_0;
                return
            }
        }
        if (!append) this.columns = new Array(0);
        this.columns[this.columns.length] = $v_0
    },
    sort: function(columnName, sortOrder) { this.multipleSort(columnName, sortOrder, false) },
    multipleSort: function(columnName, sortOrder, append) {
        var $v_0 = new Mscrm.SortColumnInfo;
        $v_0.$1A_0 = columnName;
        $v_0.$1F_0 = sortOrder;
        if (append) {
            var $v_1 = this.$7G_0(columnName);
            if ($v_1 !== -1) {
                this.columns[$v_1] = $v_0;
                return
            }
        } else this.columns = new Array(0);
        this.columns[this.columns.length] = $v_0
    },
    $7G_0: function($p0) {
        for (var $v_0 = this.columns
                     .length,
            $v_1 = 0;
            $v_1 < $v_0;
            $v_1++) if (this.columns[$v_1].$1A_0 === $p0) return $v_1;
        return -1
    },
    deserialize: function(gridParameter) {
        for (var $v_0 = gridParameter.split(";"), $v_1 = $v_0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = new Mscrm.SortColumnInfo;
            $v_3.deserialize($v_0[$v_2]);
            this.columns[this.columns.length] = $v_3
        }
    },
    serialize: function() {
        for (var $v_0 = "", $v_1 = this.columns.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            if ($v_2 > 0) $v_0 += ";";
            $v_0 += this.columns[$v_2].serialize()
        }
        return $v_0
    }
};
Mscrm.SortColumnInfo = function() {};
Mscrm.SortColumnInfo.prototype = {
    $1A_0: "",
    $1F_0: true,
    get_name: function() { return this.$1A_0 },
    set_name: function(value) {
        this.$1A_0 = value;
        return value
    },
    get_ascend: function() { return this.$1F_0 },
    set_ascend: function(value) {
        this.$1F_0 = value;
        return value
    },
    deserialize: function(column) {
        var $v_0 = column.split(":");
        if ($v_0.length === 2) {
            this.$1A_0 = $v_0[0];
            this.$1F_0 = $v_0[1] === "1"
        }
    },
    serialize: function() { return this.$1A_0 + ":" + (this.$1F_0 ? "1" : "0") }
};
Mscrm.TurboControlMode = function() {};
Mscrm.ProductTypeCode = function() {};
Mscrm.ProductEntityInlineEditGrid = function() {
    this.$$d_$Ci_0 = Function.createDelegate(this, this.$Ci_0);
    this.$$d_$7D_0 = Function.createDelegate(this, this.$7D_0)
};
Mscrm.ProductEntityInlineEditGrid.get_getInlineEditViews = function() {
    if (!Mscrm.ProductEntityInlineEditGrid.$30) {
        Mscrm.ProductEntityInlineEditGrid.$30 = [];
        Array.addRange(Mscrm.ProductEntityInlineEditGrid.$30, Mscrm.ProductEntityInlineEditGrid.$Z)
    }
    return Mscrm.ProductEntityInlineEditGrid.$30
};
Mscrm.ProductEntityInlineEditGrid.MoveRecordUpLite = function(grid, selectedRowIndex) {
    if (IsNull(grid.get_moveUpContextualButton())) return;
    if (grid.get_moveUpContextualButton()
        .className ===
        "ms-crm-ImageStrip-moveUpButtonDisabled" ||
        selectedRowIndex < 0) return;
    var $v_0 = $P_CRM(grid.get_element()).find("#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-SelectedRow-Lite")[selectedRowIndex];
    if (IsNull($v_0)) return;
    var $v_1 = $v_0.getAttribute("oid"), $v_2 = 1, $v_3 = $v_0, $v_4 = $P_CRM($v_3);
    if (IsNull($v_4.attr("sequencenumber"))) return;
    var $v_5 = $v_4.attr("sequencenumber"),
        $v_6 = $v_4.prev(),
        $v_7 = $v_6,
        $v_8 = $v_7.attr("sequencenumber").toString();
    if (!IsNull($v_7.attr("producttypecode")) &&
        ($v_7.attr("producttypecode") === "4" || $v_7.attr("producttypecode") === "3")) {
        var $v_9 = $v_7.attr("parentbundleid").toString(),
            $v_A = Mscrm.ProductEntityInlineEditGrid.$3b($v_9, grid),
            $v_B = $P_CRM("tr[oid='" + $v_9 + "']", grid.get_element());
        $v_8 = $v_B.attr("sequencenumber").toString();
        if (!IsNull($v_A)) $v_2 = $v_2 + $v_A.length;
        $v_6 = $v_B
    }
    if (selectedRowIndex > 0) {
        $v_4.attr("sequencenumber", $v_8);
        $v_6.attr("sequencenumber", $v_5);
        $v_4.insertBefore($v_6);
        var $v_C = null;
        if (!IsNull($v_4.attr("producttypecode")) && $v_4.attr("producttypecode").toString() === "2") {
            $v_C = Mscrm.ProductEntityInlineEditGrid.$3b($v_1, grid);
            !IsNull($v_C) && $v_C.insertBefore($v_6)
        }
        Mscrm.ProductEntityInlineEditGrid.onSelectRow(grid, selectedRowIndex - $v_2)
    }
};
Mscrm.ProductEntityInlineEditGrid.MoveRecordDownLite = function(grid, selectedRowIndex) {
    var $v_0 = $P_CRM(grid.get_element()).find("#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-SelectedRow-Lite")[selectedRowIndex];
    if (IsNull(grid.get_moveDownContextualButton())) return;
    if (grid.get_moveDownContextualButton()
        .className ===
        "ms-crm-ImageStrip-moveDownButtonDisabled" ||
        IsNull($v_0)) return;
    var $v_1 = $v_0, $v_2 = $P_CRM($v_1), $v_3 = grid.get_allRecords().length - 1;
    if (IsNull($v_2.attr("sequencenumber"))) return;
    var $v_4 = $v_2.attr("sequencenumber"), $v_5 = "", $v_6;
    if (!IsNull($v_2.next())) $v_6 = $v_2.next().attr("sequencenumber");
    else return;
    if (!IsNull($v_0.getAttribute("oid"))) $v_5 = $v_0.getAttribute("oid");
    else return;
    var $v_7 = null, $v_8 = null;
    if (!IsNull($v_2.attr("producttypecode")) && $v_2.attr("producttypecode").toString() === "2") {
        $v_7 = Mscrm.ProductEntityInlineEditGrid.$3b($v_5, grid);
        if (!IsNull($v_7) && !IsNull($v_7.last()) && !IsNull($v_7.last().next())) {
            $v_6 = $v_7.last().next().attr("sequencenumber");
            $v_8 = $v_7.last().next()
        } else $v_8 = $v_2.next()
    } else $v_8 = $v_2.next();
    var $v_9 = 0;
    if (!IsNull($v_8) && !IsNull($v_8.attr("producttypecode")))
        if ($v_8.attr("producttypecode") === "2") {
            var $v_A = $v_8.attr("oid").toString();
            $v_8.attr("sequencenumber", $v_4);
            var $v_B = Mscrm.ProductEntityInlineEditGrid.$3b($v_A, grid);
            if (!IsNull($v_B)) {
                $v_8 = $v_B.last();
                $v_9 = $v_9 + $v_B.length
            }
        } else {
            if (!IsNull($v_8) && !IsNull($v_8.attr("parentbundleid")) && $v_5 === $v_8.attr("parentbundleid").toString()
            ) {
                var $v_C = Mscrm.ProductEntityInlineEditGrid.$3b($v_5, grid);
                if (!IsNull($v_C) && !IsNull($v_C.last().next())) $v_8 = $v_C.last().next();
                else return
            }
            if (!IsNull($v_8))
                if ($v_8.attr("producttypecode") === "2") {
                    $v_6 = $v_8.attr("sequencenumber").toString();
                    $v_8.attr("sequencenumber", $v_4);
                    var $v_D = $v_8.attr("oid").toString(),
                        $v_E = $P_CRM("tr[parentbundleid='" + $v_D + "']", grid.get_element());
                    if (!IsNull($v_E)) {
                        $v_E.attr("sequencenumber", $v_4);
                        $v_8 = $v_E.last();
                        $v_9 = $v_9 + $v_E.length
                    }
                } else {
                    $v_6 = $v_8.attr("sequencenumber").toString();
                    $v_8.attr("sequencenumber", $v_4)
                }
        }
    else return;
    if (selectedRowIndex < $v_3) {
        $v_2.attr("sequencenumber", $v_6);
        !IsNull($v_7) && $v_7.insertAfter($v_8);
        $v_2.insertAfter($v_8);
        Mscrm.ProductEntityInlineEditGrid.onSelectRow(grid, selectedRowIndex + $v_9 + 1)
    }
};
Mscrm.ProductEntityInlineEditGrid.$3b = function($p0, $p1) {
    var $v_0 = null;
    if (!IsNull($p1) && $p0.length > 0) {
        $v_0 = $P_CRM("tr[parentbundleid='" + $p0 + "']", $p1.get_element());
        if ($v_0.length > 0) return $v_0
    }
    return null
};
Mscrm.ProductEntityInlineEditGrid.SelectRow = function(rowElement) {
    var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement(rowElement);
    if (IsNull($v_0) || !$v_0.$63_3()) return;
    Mscrm.ProductEntityInlineEditGrid.$R = rowElement.sectionRowIndex;
    Mscrm.ProductEntityInlineEditGrid.onSelectRow($v_0, Mscrm.ProductEntityInlineEditGrid.$R)
};
Mscrm.ProductEntityInlineEditGrid.SelectRowOnKeyPress = function(domEvent, rowElement) {
    if (!IsNull(domEvent))
        if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 9) Mscrm.ProductEntityInlineEditGrid.SelectRow(rowElement);
        else {
            var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement(rowElement);
            if (!IsNull($v_0) && $v_0.$63_3()) {
                var $v_1 = $P_CRM($v_0.get_element()).find("#" +
                    $v_0.get_element().id +
                    "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
                    $v_0.get_element().id +
                    "_divDataArea table tr.ms-crm-List-SelectedRow-Lite");
                $v_1.filter(":visible").attr("style", "");
                var $v_2 = $v_1[Mscrm.ProductEntityInlineEditGrid.$R], $v_3 = $P_CRM($v_2);
                if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 38 && Mscrm.ProductEntityInlineEditGrid.$R > 0) {
                    var $v_4 = $v_3.prev();
                    if (!IsNull($v_4) && !$v_4.is(":visible")) {
                        var $v_5 = $v_3.prevUntil(":visible");
                        Mscrm.ProductEntityInlineEditGrid.$R = Mscrm.ProductEntityInlineEditGrid.$R - $v_5.length - 1
                    } else Mscrm.ProductEntityInlineEditGrid.$R = Mscrm.ProductEntityInlineEditGrid.$R - 1
                } else if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 40 &&
                    Mscrm.ProductEntityInlineEditGrid.$R < $v_1.length - 1) {
                    var $v_6 = $v_3.next();
                    if (!IsNull($v_6) && !$v_6.is(":visible")) {
                        var $v_7 = $v_3
                                .nextUntil(":visible"),
                            $v_8 = Mscrm.ProductEntityInlineEditGrid.$R + $v_7.length;
                        if ($v_8 < $v_1.length - 1) Mscrm.ProductEntityInlineEditGrid.$R = $v_8 + 1
                    } else Mscrm.ProductEntityInlineEditGrid.$R = Mscrm.ProductEntityInlineEditGrid.$R + 1
                }
                Mscrm.ProductEntityInlineEditGrid.onSelectRow($v_0, Mscrm.ProductEntityInlineEditGrid.$R);
                if (Mscrm.Utilities.getDomEventKeyCode(domEvent) === 38 ||
                    Mscrm.Utilities.getDomEventKeyCode(domEvent) === 40) {
                    domEvent.stopPropagation();
                    domEvent.preventDefault();
                    Mscrm.ProductEntityInlineEditGrid.$5w(domEvent, $v_2, $v_1[Mscrm.ProductEntityInlineEditGrid.$R])
                }
            }
        }
};
Mscrm.ProductEntityInlineEditGrid.$5w = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.GridControl.getControlBehaviorFromChildElement($p1);
    $p1.setAttribute("selected", "false");
    $p1.className = "ms-crm-List-Row-Lite";
    $p2.setAttribute("selected", "true");
    $p2.className = "ms-crm-List-SelectedRow-Lite";
    var $v_1 = $v_0.get_element().id + "_divDataArea",
        $v_2 = $get($v_1),
        $v_3 = $v_2.scrollTop,
        $v_4 = $v_2.clientHeight + $v_3,
        $v_5;
    if (Mscrm.Utilities.getDomEventKeyCode($p0) === 40) {
        $v_5 = $p2.offsetTop + $p2.offsetHeight;
        if ($v_5 > $v_4) $v_2.scrollTop += Math.floor($v_2.offsetHeight / 8)
    } else {
        $v_5 = $p2.offsetTop;
        if ($v_5 < $v_3) $v_2.scrollTop -= Math.floor($v_2.offsetHeight / 8)
    }
};
Mscrm.ProductEntityInlineEditGrid.onSelectRow = function(grid, rowIndex) {
    var $v_0 = $P_CRM(grid.get_element()).find("#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-Row-Lite,#" +
        grid.get_element().id +
        "_divDataArea table tr.ms-crm-List-SelectedRow-Lite");
    $v_0.filter(":visible").attr("style", "");
    if (rowIndex < 0 || rowIndex > $v_0.length - 1) return;
    var $v_1 = $v_0[rowIndex];
    if ($v_0.length > 0)
        if (Mscrm.ProductEntityInlineEditGrid.$12 !== rowIndex && Mscrm.ProductEntityInlineEditGrid.$12 !== -1)
            if (!IsNull($v_0[Mscrm.ProductEntityInlineEditGrid.$12])) {
                $P_CRM($v_0[Mscrm.ProductEntityInlineEditGrid.$12]).is(":visible") &&
                    $v_0[Mscrm.ProductEntityInlineEditGrid.$12].setAttribute("style", "background-color:#FFFFFF");
                Mscrm.ProductEntityInlineEditGrid.$55($v_0[Mscrm.ProductEntityInlineEditGrid.$12],
                    false,
                    "gridBodyTable_suggestion_gridurl_");
                Mscrm.GridControlLite.HideDeleteButton($v_0[Mscrm.ProductEntityInlineEditGrid.$12])
            }
    if (!IsNull($v_1)) {
        grid.$D_4 = $v_1.sectionRowIndex;
        var $v_2 = grid.get_allRecords().length - 1;
        !IsNull($v_1.getAttribute("productid")) &&
            Mscrm.ProductEntityInlineEditGrid.$55($v_1, true, "gridBodyTable_suggestion_gridurl_");
        Mscrm.GridControlLite.ShowDeleteButton($v_1);
        Mscrm.ProductEntityInlineEditGrid.$12 = rowIndex;
        for (var $v_3 = 0; $v_3 < $v_0.length - 1; $v_3++)
            if (!IsNull($v_0[$v_3].getAttribute("isnewrecord")) &&
                $v_0[$v_3].getAttribute("isnewrecord").toString() === "true") {
                if (!IsNull(grid
                    .get_moveUpContextualButton()))
                    grid.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled";
                if (!IsNull(grid
                    .get_moveDownContextualButton()))
                    grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled";
                return
            }
        if (!IsNull($v_1.getAttribute("parentbundleid"))) {
            if (!IsNull(grid
                .get_moveUpContextualButton()))
                grid.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled";
            if (!IsNull(grid
                .get_moveDownContextualButton()))
                grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled";
            return
        }
        if (!IsNull(grid.get_moveUpContextualButton()))
            grid.get_moveUpContextualButton().className = grid.$D_4 <= 0
                ? "ms-crm-ImageStrip-moveUpButtonDisabled"
                : "ms-crm-ImageStrip-moveUpButton";
        if (grid.$D_4 < $v_2)
            if ($v_1.getAttribute("producttypecode").toString() === "2") {
                var $v_4 = !IsNull($v_0.last().attr("parentbundleid")) &&
                    $v_0.last().attr("parentbundleid").toString() === $v_1.getAttribute("oid").toString();
                grid.get_moveDownContextualButton()
                    .className = $v_4 ? "ms-crm-ImageStrip-moveDownButtonDisabled" : "ms-crm-ImageStrip-moveDownButton"
            } else grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButton";
        else grid.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled"
    }
};
Mscrm.ProductEntityInlineEditGrid.collapseExpandRows = function(eventObject) {
    var $v_0 = eventObject.currentTarget;
    if (IsNull($v_0) ||
        IsNull($v_0.parentNode) ||
        IsNull($v_0.parentNode.parentNode) ||
        IsNull($v_0.parentNode.parentNode.parentNode) ||
        IsNull($v_0.getAttribute("state"))) return;
    var $v_1 = $P_CRM($v_0.parentNode.parentNode),
        $v_2 = $v_1.attr("oid"),
        $v_3 = $v_0.getAttribute("state").toString() === "0";
    $v_0.setAttribute("state", $v_3 ? "1" : "0");
    var $v_4 = $P_CRM("tr[parentbundleid='" + $v_2 + "']", $v_0.parentNode.parentNode.parentNode);
    if (!IsNull($v_4)) {
        $v_4.attr("style", "");
        if ($v_3) $v_4.hide();
        else $v_4.show()
    }
    if ($v_0.children.length > 0) {
        if (window.LOCID_UI_DIR === "RTL")
            $v_0.children[0].setAttribute("src",
                $v_3 ? "/_imgs/tab_section_left_rtl.png" : "/_imgs/tab_section_down_rtl.png");
        else
            $v_0.children[0].setAttribute("src", $v_3 ? "/_imgs/tab_section_right.png" : "/_imgs/tab_section_down.png");
        $v_0.children[0].setAttribute("alt",
            CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal
                .getResourceString($v_3 ? "LOCID_EXPAND_BUNDLE" : "LOCID_COLLAPSE_BUNDLE")));
        $v_0.children[0].setAttribute("title",
            Xrm.Internal.getResourceString($v_3 ? "LOCID_EXPAND_BUNDLE" : "LOCID_COLLAPSE_BUNDLE"))
    }
    eventObject.preventDefault();
    eventObject.stopPropagation()
};
Mscrm.ProductEntityInlineEditGrid.imageKeyUp = function(eventObject) {
    if (!IsNull(eventObject)) eventObject.which === 13 && eventObject.stopPropagation()
};
Mscrm.ProductEntityInlineEditGrid.$Cd = function($p0) {
    var $v_0 = $P_CRM($get($p0.$0_0.get_id() + "_divDataArea"));
    if (IsNull($v_0)) return;
    $v_0.hide();
    $v_0.parent().prepend(String
        .format("<DIV ID='{0}' class='ms-crm-List-Message-Lite'>{1}<IMG alt='' src='/_imgs/grid/horzpreloader_5x55.gif'></DIV>", CrmEncodeDecode.CrmHtmlEncode("ProductsGridLoadingMessage"), CrmEncodeDecode.CrmHtmlEncode(window.LOCID_LOADING_GRID_DATA_REFRESH)))
};
Mscrm.ProductEntityInlineEditGrid.ShowButtonsOnMouseOver = function(rowElement) {
    !IsNull(rowElement.getAttribute("productid")) &&
        Mscrm.ProductEntityInlineEditGrid.$55(rowElement, true, "gridBodyTable_suggestion_gridurl_");
    Mscrm.GridControlLite.ShowDeleteButton(rowElement)
};
Mscrm.ProductEntityInlineEditGrid.HideButtonsOnMouseOut = function(rowElement) {
    var $v_0 = rowElement.sectionRowIndex;
    if (Mscrm.ProductEntityInlineEditGrid.$12 !== $v_0) {
        !IsNull(rowElement.getAttribute("productid")) &&
            Mscrm.ProductEntityInlineEditGrid.$55(rowElement, false, "gridBodyTable_suggestion_gridurl_");
        Mscrm.GridControlLite.HideDeleteButton(rowElement)
    }
};
Mscrm.ProductEntityInlineEditGrid.$55 = function($p0, $p1, $p2) {
    var $v_0 = -1, $v_1 = $p0.getAttribute("rowindex");
    if (!IsNull($v_1) && $v_1 !== -1) $v_0 = $v_1;
    else $v_0 = $p0.sectionRowIndex;
    var $v_2 = $p2 + $p0.getAttribute("oid") + "_" + $v_0, $v_3 = $get($v_2);
    if (!IsNull($v_3)) $v_3.style.visibility = $p1 ? "visible" : "hidden"
};
Mscrm.ProductEntityInlineEditGrid
    .onGridRefreshRecalculateRecord = function(sender, args) { Mscrm.GridControlLite.recalculateRecord() };
Mscrm.ProductEntityInlineEditGrid
    .addBundleIdForExpansion = function(id) {
        !Array.contains(Mscrm.ProductEntityInlineEditGrid.$1n, id) &&
            Array.add(Mscrm.ProductEntityInlineEditGrid.$1n, id)
    };
Mscrm.ProductEntityInlineEditGrid.$Bo = function($p0) {
    switch ($p0.$H_0) {
    case 1089:
    case 1083:
    case 1091:
    case 1085:
        Mscrm.GridControlLite.recalculateRecord();
        break
    }
};
Mscrm.ProductEntityInlineEditGrid.prototype = {
    $3H_0: null,
    $9Z_0: function() {
        return Xrm.Page.data.entity.attributes.get("totalamount").controls.get()[0].get_dataContext()
            .get_currencySymbol()
    },
    gridPreInitialize: function(grid) {
        for (var $v_0 = grid.$0_0.GetParameter("viewid"), $v_1 = false, $v_2 = 0;
            $v_2 < Mscrm.ProductEntityInlineEditGrid.$Z.length;
            $v_2++)
            if ($v_0 === Mscrm.ProductEntityInlineEditGrid.$Z[$v_2]) {
                $v_1 = true;
                break
            }
        if (!grid.$I_0) grid.$1o_0 = this.$9Z_0();
        if (grid.$G_0) {
            grid.$G_0 = $v_1;
            Mscrm.ProductEntityInlineEditGrid.$Cd(grid)
        }
        this.$3H_0 = grid;
        grid.$W_0 = true
    },
    $8i_0: function($p0) {
        var $v_0 = false, $v_1 = $P_CRM("#hiddenOverridePricePrivilegeCheck_" + $p0);
        if (IsNull($v_1) || $v_1.length <= 0) $v_0 = true;
        return $v_0
    },
    getGridCellInlineControlMode: function(grid, currentRow, attributeName) {
        var $v_0 = "locked";
        switch (grid.$H_0) {
        case 1089:
        case 1083:
        case 1091:
        case 1085:
            if (!IsNull(currentRow.getAttribute("producttypecode"))) {
                var $v_5 = currentRow.getAttribute("producttypecode").toString();
                if (!isNullOrEmptyString($v_5) && $v_5 === "3") break
            }
            var $v_1 = grid.getHiddenTableCellValue(currentRow, "isexisting"),
                $v_2 = grid.isNewRecord(currentRow),
                $v_3 = false;
            if (!IsNull(grid.$0_0.get_lockPriceContextualButton())) $v_3 = grid.$0_0.isPriceLocked();
            var $v_4 = this.$8i_0(grid.$0_0.get_id());
            switch (attributeName) {
            case "priceperunit":
            case "productname":
                if (!$v_3) if ($v_1 === "0" && !$v_4 || $v_2) $v_0 = "normal";
                break;
            case "manualdiscountamount":
                $v_0 = "normal";
                break;
            case "quantity":
                $v_2 && !grid.$I_0 && grid.setTableCellValue(currentRow, attributeName, "1", true);
                $v_0 = "normal";
                break;
            default:
                $v_0 = "locked";
                break
            }
            break;
        default:
            $v_0 = "locked";
            break
        }
        return $v_0
    },
    gridRowSave: function(grid, currentRow) {
        switch (grid.$H_0) {
        case 1089:
            this.$4x_0(grid, "salesorderdetail", currentRow);
            break;
        case 1083:
            this.$4x_0(grid, "opportunityproduct", currentRow);
            break;
        case 1091:
            this.$4x_0(grid, "invoicedetail", currentRow);
            break;
        case 1085:
            this.$4x_0(grid, "quotedetail", currentRow);
            break;
        default:
            break
        }
    },
    updateControlStyle: function(attributeMetadata, inlineEditGridControl) { return },
    $4x_0: function($p0, $p1, $p2) {
        var $v_0 = "{00000000-0000-0000-0000-000000000000}",
            $v_1 = "{00000000-0000-0000-0000-000000000000}",
            $v_2 = -99,
            $v_3 = $p0.isNewRecord($p2);
        if (!$v_3) {
            $v_0 = $p0.getHiddenTableCellValue($p2, "oid");
            $v_2 = $p0.getHiddenTableCellValue($p2, "sequencenumber");
            $v_1 = $p0.getHiddenTableCellValue($p2, "productid")
        }
        var $v_4 = $p0.getTableCellValue($p2, "productname"),
            $v_5 = $p0.getTableCellValue($p2, "priceperunit"),
            $v_6 = $p0.getTableCellValue($p2, "quantity"),
            $v_7 = $p0.getTableCellValue($p2, "manualdiscountamount");
        if (!IsNull($v_4) && ($v_3 || !IsNull($v_6))) {
            if (IsNull($v_6)) $v_6 = 0;
            if (IsNull($v_7)) $v_7 = 0;
            if (IsNull($v_5)) $v_5 = 0;
            if (IsNull($v_2)) $v_2 = -99;
            if (isNullOrEmptyString($v_0)) $v_0 = "{00000000-0000-0000-0000-000000000000}";
            if (isNullOrEmptyString($v_1)) $v_1 = "{00000000-0000-0000-0000-000000000000}";
            if ($v_6 < 0 && $v_5 < 0) {
                alert(window.LOCID_QTY_PRICE_NEGATIVE);
                var $v_8 = {};
                $v_8["DisplayText"] = window.LOCID_QTY_PRICE_NEGATIVE;
                var $v_9 = {};
                $v_9["_error"] = $v_8;
                $p0.onRowSaveFailure($v_9)
            } else {
                var $v_A = Mscrm.InlineEditDataServiceProxy.get_busy();
                if (!$v_A)
                    Mscrm.InlineEditDataServiceProxy
                        .createProduct($v_3,
                            $p0.$H_0,
                            $v_1,
                            $p1,
                            $v_4,
                            $v_5,
                            $v_6,
                            $v_7,
                            $v_0,
                            $v_2,
                            $p0.$$d_onRowSaveSuccess,
                            $p0.$$d_onRowSaveFailure);
                else $p0.handleAutoSaveNotTriggered()
            }
        } else {
            $p0.resetCurrentSaveRow();
            $p0.handleAutoSaveNotTriggered()
        }
    },
    gridRowInitialize: function(grid, currentRow) {
        var $v_0 = true;
        if (!IsNull(currentRow))
            switch (grid.$H_0) {
            case 1089:
            case 1083:
            case 1091:
            case 1085:
                var $v_1 = !IsNull(grid.getHiddenTableCellValue(currentRow, "producttypecode"));
                if ($v_1) {
                    var $v_2 = grid.getHiddenTableCellValue(currentRow, "producttypecode");
                    !isNullOrEmptyString($v_2) && ($v_2 === "4" || $v_2 === "3") && this.$Af_0(currentRow);
                    $v_2 === "2" && grid.addCollapseExpandIcons(currentRow);
                    this.$8P_0(currentRow);
                    if ($v_0) {
                        Mscrm.ProductEntityInlineEditGrid.$12 = -1;
                        this.$Am_0(grid);
                        $v_0 = false
                    }
                }
                !grid.isNewRecord(currentRow) && this.$84_0(grid, currentRow);
                break;
            default:
                break
            }
    },
    $Am_0: function($p0) {
        var $v_0 = $p0.$0_0.get_id();
        if (!isNullOrEmptyString($v_0)) {
            var $v_1 = $find($v_0);
            if (!IsNull($v_1
                .get_moveUpContextualButton()))
                $v_1.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled";
            if (!IsNull($v_1
                .get_moveDownContextualButton()))
                $v_1.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled"
        }
    },
    $Af_0: function($p0) {
        var $v_0 = $P_CRM("td", $p0);
        if (!IsNull($v_0) && $v_0.length > 0 && !IsNull($v_0[3])) {
            var $v_1 = $P_CRM($v_0[3]);
            !IsNull($v_1) && $v_1.length > 0 && $v_1.addClass("ms-crm-Inline-Edit-SubGrid-Cell-Indentation")
        }
    },
    openProductLineItemForm: function(otc, isWriteInProduct) {
        var $v_0 = this.$3H_0.$0_0.getFormData(),
            $v_1 = Mscrm.EntityPropUtil.EntityTypeName2CodeMap[$v_0.get_typeName().toLowerCase()];
        if (otc !== 1083) {
            Mscrm.CommandBarActions.createNewLineItem(otc, $v_1, $v_0.get_recordId(), isWriteInProduct);
            this.$3H_0.$0_0.add_onRefresh(Mscrm.ProductEntityInlineEditGrid.onGridRefreshRecalculateRecord)
        } else {
            var $v_2 = {};
            $v_2["_CreateFromType"] = $v_1;
            $v_2["_CreateFromId"] = $v_0.get_recordId();
            Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(otc), null, $v_2)
        }
    },
    gridAttributeInitialValue: function(currentRow, grid, currentInitialValue, attributeMetadata) {
        var $v_0 = currentInitialValue;
        switch (grid.$H_0) {
        case 1089:
        case 1083:
        case 1091:
        case 1085:
            if (attributeMetadata.LogicalName === "quantity")
                if (isNullOrEmptyString(currentInitialValue)) $v_0 = "1";
                else {
                    var $v_1 = attributeMetadata.LogicalName + "_rawvalue";
                    $v_0 = grid.getHiddenTableCellValue(currentRow, $v_1);
                    $v_0 = $v_0.replace(",", ".")
                }
            if (attributeMetadata.LogicalName === "productdescription") attributeMetadata.RequiredLevel = 2;
            if (attributeMetadata.LogicalName === "priceperunit" ||
                attributeMetadata.LogicalName === "manualdiscountamount" ||
                attributeMetadata.LogicalName === "extendedamount")
                if (isNullOrEmptyString(currentInitialValue)) $v_0 = "0";
                else {
                    var $v_2 = attributeMetadata.LogicalName + "_rawvalue";
                    $v_0 = grid.getHiddenTableCellValue(currentRow, $v_2);
                    $v_0 = $v_0.replace(",", ".")
                }
            break
        }
        return $v_0
    },
    $84_0: function($p0, $p1) {
        var $v_0 = IsNull($p0.getHiddenTableCellValue($p1, "producttypecode"))
                ? "0"
                : $p0.getHiddenTableCellValue($p1, "producttypecode"),
            $v_1 = $p0.getHiddenTableCellValue($p1, "isexisting");
        if ($p0.isNewRecord($p1)) {
            $v_1 = "0";
            $p0.setHiddenTableCellValue($p1, "isexisting", "0")
        }
        this.$CU_0($p0, $v_0, !isNullOrEmptyString($v_1) && $v_1 === "0", $p1)
    },
    gridRowSaveSuccessAction: function(grid, currentSaveRow, response) {
        switch (grid.$H_0) {
        case 1089:
        case 1083:
        case 1091:
        case 1085:
            var $v_0 = response["extendedamount"];
            if (!IsNull($v_0)) {
                var $v_5 = grid.$I_0 ? "value" : "raw";
                !IsNull($v_0[$v_5]) && grid.setTableCellValue(currentSaveRow, "extendedamount", $v_0[$v_5], true)
            }
            var $v_1 = response["productid"];
            if (!IsNull($v_1)) {
                var $v_6 = $v_1["oid"];
                !IsNull($v_6) && grid.setHiddenTableCellValue(currentSaveRow, "productid", $v_6)
            }
            var $v_2 = response["_entity"];
            if (!IsNull($v_2)) {
                var $v_7 = $v_2["Id"];
                if (!IsNull($v_7)) {
                    grid.setHiddenTableCellValue(currentSaveRow, "oid", $v_7);
                    if (grid.isNewRecord(currentSaveRow)) {
                        var $v_8 = currentSaveRow.querySelector("div.ms-crm-List-DeleteContainer-Div");
                        if (!IsNull($v_8)) {
                            var $v_9 = XUI.Html.DomUtils.GetFirstChild($v_8);
                            if (!IsNull($v_9))
                                $v_9.id = "gridBodyTable_delete_" +
                                    currentSaveRow.getAttribute("oid") +
                                    "_" +
                                    currentSaveRow.getAttribute("rowindex")
                        }
                    }
                }
            }
            var $v_3 = response["productdescription"];
            if (!IsNull($v_3)) {
                var $v_A = $v_3["value"];
                if (!IsNull($v_A)) {
                    var $v_B = CrmEncodeDecode.CrmXmlDecode($v_A);
                    grid.setTableCellValue(currentSaveRow, "productname", CrmEncodeDecode.CrmHtmlDecode($v_B), false)
                }
            }
            this.$84_0(grid, currentSaveRow);
            var $v_4 = grid.getHiddenTableCellValue(currentSaveRow, "onlyHiddenValueChanged");
            if (!isNullOrEmptyString($v_4)) {
                var $v_C = $v_4.toUpperCase();
                $v_C === "FALSE" && Mscrm.GridControlLite.recalculateRecord()
            }
            break
        }
        return
    },
    gridRowSaveFailureAction: function(grid, currentSaveRow, response) {
        switch (grid.$H_0) {
        case 1089:
        case 1083:
        case 1091:
        case 1085:
            break
        }
        return
    },
    $CU_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = "", $v_1 = "";
        switch ($p1) {
        case "1":
            $v_0 = $p2 ? window.CDNURL + "/_imgs/grid/writeinproduct_16.png" : "/_imgs/ico_16_1024_product.png";
            $v_1 = Xrm.Internal.getResourceString("LOCID_PRODUCT_TOOLTIP");
            break;
        case "2":
            $v_0 = window.CDNURL + "/_imgs/ico_16_1024_bundle.png";
            $v_1 = Xrm.Internal.getResourceString("LOCID_BUNDLE_TOOLTIP");
            break;
        default:
            if ($p2) {
                $v_0 = window.CDNURL + "/_imgs/grid/writeinproduct_16.png";
                $v_1 = Xrm.Internal.getResourceString("LOCID_WRITEIN_PRODUCT_TOOLTIP");
                break
            }
            return
        }
        $p0.addOrRemoveImage($p3, $v_0, $v_1)
    },
    initializeGridViewComplete: function(dataTable) {
        if (IsNull(dataTable)) return;
        var $v_0 = dataTable.children("tbody"), $v_1 = Mscrm.ProductEntityInlineEditGrid.$1n.length;
        while ($v_1) {
            var $v_6 = Mscrm.ProductEntityInlineEditGrid.$1n[$v_1 - 1],
                $v_7 = $P_CRM("tr[oid='{" + $v_6.toUpperCase() + "}']", $v_0);
            if ($v_7.attr("producttypecode") !== "1")
                if (!IsNull($v_7)) {
                    var $v_8 = $v_7.find("a[state='1']");
                    !IsNull($v_8) && $v_8.click()
                }
            Array.removeAt(Mscrm.ProductEntityInlineEditGrid.$1n, $v_1 - 1);
            $v_1 = Mscrm.ProductEntityInlineEditGrid.$1n.length
        }
        var $v_2 = "#ProductsGridLoadingMessage", $v_3 = $P_CRM($v_2);
        if (!IsNull($v_3)) {
            $v_3.siblings().show();
            $v_3.remove()
        }
        setPerfMarkerTimestamp("OpportunityProductAfterAdd");
        var $v_4 = window.self.gridrefreshsource, $v_5 = window.top.self.gridrefreshsource;
        if ($v_4 || $v_5) {
            Mscrm.ProductEntityInlineEditGrid.$Bo(this.$3H_0);
            if ($v_4 === "child") delete window.self.gridrefreshsource;
            if ($v_5 === "child") delete window.top.self.gridrefreshsource
        }
    },
    $8P_0: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.getAttribute("oid")) && !IsNull($p0.getAttribute("rowindex")))
            for (var $v_0 = $p0.getAttribute("oid").toString(),
                $v_1 = $p0.getAttribute("rowindex").toString(),
                $v_2 = $p0.getElementsByTagName("a"),
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++)
                if (!IsNull(Xrm.Page.data) &&
                    !IsNull(Xrm.Page.data.entity) &&
                    !IsNull(Xrm.Page.data.entity.attributes) &&
                    $v_2[$v_3].id === "gridBodyTable_suggestion_gridurl_" + $v_0 + "_" + $v_1) {
                    var $v_4 = Xrm.Page.getAttribute("pricelevelid"),
                        $v_5 = !IsNull($v_4) ? $v_4.getUserPrivilege().canRead : true;
                    if (!$v_5) {
                        var $v_6 = $v_2[$v_3], $v_7 = $P_CRM($v_6);
                        $v_7.removeClass();
                        $v_7.removeAttr("href");
                        $v_7.css("color", "Gray")
                    } else {
                        var $v_8 = $v_2[$v_3], $v_9 = $P_CRM($v_8);
                        $v_9.click(this.$$d_$7D_0);
                        $v_9.keydown(this.$$d_$Ci_0)
                    }
                    break
                }
    },
    $7D_0: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.currentTarget) && !IsNull(Mscrm.GridControlLite.$6)) {
            setPerfMarkerTimestamp("OpportunitySuggestionClickBefore");
            Mscrm.GridControlLite.$6.onClick($p0.currentTarget, false);
            setPerfMarkerTimestamp("OpportunitySuggestionClickAfter")
        }
    },
    $Ci_0: function($p0) {
        if (!IsNull($p0))
            if ($p0.which === 13) {
                this.$7D_0($p0);
                $p0.preventDefault();
                $p0.stopPropagation()
            }
    },
    disposeGridRow: function(currentRow) { this.$C2_0(currentRow) },
    $C2_0: function($p0) {
        if (!IsNull($p0) && !IsNull($p0.getAttribute("oid")) && !IsNull($p0.getAttribute("rowindex")))
            for (var $v_0 = $p0.getAttribute("oid").toString(),
                $v_1 = $p0.getAttribute("rowindex").toString(),
                $v_2 = $p0.getElementsByTagName("a"),
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++)
                if ($v_2[$v_3].id === "gridBodyTable_suggestion_gridurl_" + $v_0 + "_" + $v_1) {
                    var $v_4 = $v_2[$v_3], $v_5 = $P_CRM($v_4);
                    $v_5.off("click", this.$$d_$7D_0);
                    $v_5.off("keydown", this.$$d_$Ci_0);
                    break
                }
    }
};
Mscrm.SaveQueueInlineEdit = function() { this.$1D_0 = [] };
Mscrm.SaveQueueInlineEdit.prototype = {
    $1D_0: null,
    enqueue: function(queueItem) {
        if (IsNull(this.$1D_0)) this.$1D_0 = [];
        this.$1D_0.push(queueItem)
    },
    dequeue: function() { return this.$1D_0.shift() },
    peek: function() { return this.$1D_0[0] },
    get_length: function() { return this.$1D_0.length },
    get_saveQueue: function() { return this.$1D_0 }
};
Mscrm.InlineEditGrid = function() {
    this.$$d_$8w_0 = Function.createDelegate(this, this.$8w_0);
    this.$$d_$BS_0 = Function.createDelegate(this, this.$BS_0);
    this.$$d_$4t_0 = Function.createDelegate(this, this.$4t_0);
    this.$$d_$65_0 = Function.createDelegate(this, this.$65_0);
    this.$$d_$B8_0 = Function.createDelegate(this, this.$B8_0);
    this.$$d_$B9_0 = Function.createDelegate(this, this.$B9_0);
    this.$$d_$BA_0 = Function.createDelegate(this, this.$BA_0);
    this.$$d_$8v_0 = Function.createDelegate(this, this.$8v_0);
    this.$$d_$AT_0 = Function.createDelegate(this, this.$AT_0);
    this.$$d_$Ch_0 = Function.createDelegate(this, this.$Ch_0);
    this.$$d_onRowSaveFailure = Function.createDelegate(this, this.onRowSaveFailure);
    this.$$d_onRowSaveSuccess = Function.createDelegate(this, this.onRowSaveSuccess);
    this.$H_0 = -1
};
Mscrm.InlineEditGrid.$Bg = function($p0) {
    var $v_0 = {};
    $v_0["temp"] = $p0;
    var $v_1 = $v_0["temp"], $v_2 = {};
    $v_2["Code"] = $v_1.get_code();
    $v_2["Description"] = $v_1.get_description();
    $v_2["DisplayText"] = Mscrm.InternalUtilities.JSTypes.isNull($v_1.get_displaytext()) ? "" : $v_1.get_displaytext();
    return $v_2
};
Mscrm.InlineEditGrid.prototype = {
    $4_0: null,
    $17_0: null,
    $5H_0: null,
    $v_0: null,
    $1Z_0: null,
    $g_0: null,
    $w_0: null,
    $F_0: null,
    $1Y_0: null,
    $u_0: null,
    $W_0: false,
    $0_0: null,
    $47_0: null,
    $5L_0: false,
    $A_0: null,
    $1O_0: null,
    $G_0: false,
    $I_0: false,
    $22_0: false,
    $2k_0: true,
    $8_0: null,
    $1o_0: "",
    $2J_0: null,
    $2u_0: null,
    $3w_0: false,
    $1X_0: null,
    $1j_0: null,
    $57_0: 0,
    $2W_0: 0,
    get_parentGridControl: function() { return this.$0_0 },
    get_entityTypeCode: function() { return this.$H_0 },
    get_enableInlineEdit: function() { return this.$G_0 },
    set_enableInlineEdit: function(value) {
        this.$G_0 = value;
        return value
    },
    get_entityHandler: function() { return this.$8_0 },
    get_currencySymbol: function() { return this.$1o_0 },
    set_currencySymbol: function(value) {
        this.$1o_0 = value;
        return value
    },
    get_isGridInlineEditInitialized: function() { return this.$W_0 },
    set_isGridInlineEditInitialized: function(value) {
        this.$W_0 = value;
        return value
    },
    get_canRollbackDefaultData: function() { return this.$2k_0 },
    set_canRollbackDefaultData: function(value) {
        this.$2k_0 = value;
        return value
    },
    get_isTurboForm: function() { return this.$I_0 },
    get_data: function() { return this.$1X_0 },
    get_uiDescriptor: function() { return this.$1j_0 },
    $CV_0: function($p0) {
        this.$u_0 = $p0;
        this.$7P_0()
    },
    $7P_0: function() {
        var $$t_2 = this;
        $P_CRM("tr.ms-crm-List-Row-Lite", this.$F_0).each(function($p1_0, $p1_1) { $$t_2.$64_0($p1_1) });
        this.$4z_0()
    },
    initialize: function(parentControl, entityHandler, editEnabled, isTurboForm) {
        this.$5H_0 = parentControl.get_element();
        this.$0_0 = parentControl;
        this.$I_0 = isTurboForm;
        if (isTurboForm) {
            this.$1X_0 = [];
            this.$1j_0 = []
        }
        this.$47_0 = parentControl.getFormData();
        var $v_0 = $P_CRM("#gridBodyTable", this.$5H_0);
        this.$W_0 = false;
        if (IsNull($v_0[0])) {
            var $$t_5 = this;
            window.setTimeout(function() { $$t_5.initialize(parentControl, entityHandler, editEnabled, isTurboForm) },
                10);
            return
        }
        if (Mscrm.PageManager.get_isUnloading()) return;
        this.$G_0 = editEnabled;
        this.$8_0 = entityHandler;
        !IsNull(this.$8_0) && this.$8_0.gridPreInitialize(this);
        this.initializeGridView($v_0);
        this.$0_0.displayProductGridButtons(this.$G_0)
    },
    initializeGridView: function(dataTable) {
        this.$F_0 = dataTable[0];
        this.$22_0 && this.$6I_0();
        this.$9g_0(dataTable);
        this.$9f_0(dataTable);
        this.$BW_0(dataTable);
        this.$Aj_0(dataTable);
        this.$2W_0 = 0;
        if (this.$I_0)
            if (this.$1X_0.length && this.$1j_0.length) {
                for (var $v_0 = {}, $v_1 = this.$1X_0, $v_2 = this.$1j_0, $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                    var $v_4 = $v_1[$v_3],
                        $v_5 = $v_2[$v_3],
                        $v_6 = createFormForGridRow($v_4, $v_5, this.$0_0.get_id()),
                        $v_7 = $v_4.rowIndex;
                    $v_0[$v_7] = $v_6
                }
                this.$CV_0($v_0)
            } else {
                this.$7P_0();
                this.$4z_0()
            }
    },
    $Aj_0: function($p0) { this.$8_0.initializeGridViewComplete($p0) },
    $BC_0: function() {
        !IsNull(this.$F_0) && !IsNull(this.$F_0.parentNode) && this.$F_0.parentNode.removeChild(this.$F_0)
    },
    dispose: function() {
        if (this.$W_0) {
            this.$6I_0();
            var $v_0 = $P_CRM(this.$F_0).children("tbody").children("tr");
            if (!IsNull($v_0))
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1];
                    this.$5Z_0($v_2)
                }
        }
        $removeHandler(window, "beforeunload", this.$$d_$Ch_0)
    },
    $5Z_0: function($p0) {
        var $v_0 = $P_CRM($p0);
        $v_0.off("SaveInlineRecord", this.$$d_$AT_0);
        this.$8_0.disposeGridRow($p0);
        for (var $v_1 = $P_CRM("td", $p0), $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
            if (!isNullOrEmptyString(this.$4_0[$v_3])) {
                var $v_4 = this.$4_0[$v_3], $v_5 = this.$g_0[$v_4];
                if (!$v_5) {
                    var $v_6 = this.getCellAttributeId($p0, this.$4_0[$v_3], false);
                    this.$90_0($v_6)
                }
            }
            if ($v_1[$v_3].id.startsWith("gridBodyTable_gridDelBtn_")) {
                var $v_7 = $P_CRM($v_1[$v_3]);
                $v_7.find(".ms-crm-List-DeleteButton").unbind("click", this.$$d_$8v_0)
            }
        }
        var $v_2 = $P_CRM($p0);
        $v_2.unbind("mouseover", this.$$d_$BA_0);
        $v_2.unbind("mouseout", this.$$d_$B9_0);
        $v_2.unbind("click", this.$$d_$B8_0);
        if (this.$I_0)
            if (this.$u_0) {
                var $v_8 = $p0.getAttribute("rowindex").toString(), $v_9 = this.$u_0[$v_8];
                Mscrm.TurboForm.Control.PageManager.get_instance().unregisterForm($v_9);
                this.$u_0[$v_8] = null;
                return
            }
        Mscrm.Utilities.clearDisposedComponentsFromSysApplication();
        Mscrm.InlineControlFactory.unregisterAllDisposedObjects()
    },
    $90_0: function($p0) {
        if (!IsNull(Xrm.Page.data.entity)) {
            var $v_1 = Xrm.Page.getAttribute($p0);
            Xrm.Page.data.entity.attributes.remove($v_1)
        }
        var $v_0 = this.$1Z_0[$p0];
        if (!IsNull($v_0) && !$v_0.get_isDisposed()) {
            for (var $v_2 = $find($v_0.get_dataContext().get_attribute().get_dataAttributeId()), $v_3 = 0;
                $v_3 < $v_2.get_controls().getLength();
                $v_3++) this.$92_0($v_2.get_controls().get($v_3));
            delete this.$1Z_0[$p0];
            this.$91_0($v_2)
        }
    },
    $92_0: function($p0) { !IsNull($p0) && $p0.dispose() },
    $91_0: function($p0) { !IsNull($p0) && $p0.dispose() },
    $7z_0: function() {
        if (this.$22_0) {
            this.checkForAllDirtyRows(true);
            var $$t_0 = this;
            window.setTimeout(function() { $$t_0.$7z_0() }, 2e3)
        }
    },
    $80_0: function() { this.$22_0 && this.checkForAllDirtyRows(true) },
    $6H_0: function($p0) {
        if (this.$22_0 && Xrm.Internal.isTurboForm()) {
            if (this.$2W_0 > 0) this.$2W_0--;
            if (!this.$2W_0) {
                window.clearTimeout(this.$57_0);
                var $$t_1 = this;
                this.$57_0 = window.setTimeout(function() { $$t_1.$80_0() }, $p0)
            }
        }
    },
    handleAutoSaveNotTriggered: function() { this.$6H_0(2e3) },
    $9g_0: function($p0) {
        var $v_0 = $p0.attr("oname");
        if (!isNullOrEmptyString($v_0)) this.$H_0 = Number.parseInvariant($v_0)
    },
    $9f_0: function($p0) {
        var $v_0 = $p0.children("colgroup"), $v_1 = $P_CRM("col", $v_0[0]);
        this.$4_0 = new Array($v_1.length);
        this.$17_0 = {};
        this.$v_0 = {};
        this.$1Z_0 = {};
        this.$g_0 = {};
        for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $P_CRM($v_1[$v_2]),
                $v_4 = $v_3.attr("name"),
                $v_5 = $v_3.attr("metadataJson"),
                $v_6 = $v_3.attr("style");
            if (isNullOrEmptyString($v_4)) this.$4_0[$v_2] = "";
            else {
                this.$4_0[$v_2] = $v_4;
                if (!isNullOrEmptyString($v_6) && !$v_3.is(":visible")) this.$g_0[$v_4] = true;
                else this.$g_0[$v_4] = false;
                var $v_7 = $P_CRM.parseJSON($v_5);
                this.$17_0[$v_4] = $v_7
            }
        }
    },
    getIconCellColumnIndex: function() { return this.$5q_0(3, $P_CRM(this.$F_0)) },
    $5q_0: function($p0, $p1) {
        for (var $v_0 = $p1.children("colgroup"), $v_1 = $P_CRM("col", $v_0[0]), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $P_CRM($v_1[$v_2]), $v_4 = $v_3.attr("class");
            if (!isNullOrEmptyString($v_4)) {
                $v_4 = $v_4.trimEnd();
                $v_4 = $v_4.trimStart()
            }
            switch ($p0) {
            case 1:
                if (isNullOrEmptyString($v_4)) return $v_2;
                break;
            case 2:
                if ($v_4 === "ms-crm-List-CheckBoxColumn") return $v_2;
                break;
            case 3:
                if ($v_4 === "ms-crm-List-RowIconColumn") return $v_2;
                break
            }
        }
        return 0
    },
    $5X_0: function($p0, $p1) {
        var $v_0 = document.createElement("div"), $v_1 = $P_CRM($v_0);
        $v_1.attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName, $p0);
        $v_1.attr("id", $p0);
        $v_1.attr("dummy-data-attributename", $p0);
        $v_1.attr("data-fdeid", "PrimaryEntity");
        $v_1.attr("class", "ms-crm-Inline-Edit-SubGrid-Cell");
        var $v_2 = this.$F_0.getAttribute("tabindex");
        $v_0.setAttribute("tabindex", $v_2);
        var $v_3 = this.$8M_0($v_0, $p1), $v_4 = this.$8T_0($v_3);
        return $v_4
    },
    $8T_0: function($p0) {
        var $v_0 = document.createElement("div"), $v_1 = $P_CRM($v_0);
        $v_1.attr("class", "ms-crm-Inline-Value");
        $p0.appendChild($v_0);
        return $p0
    },
    $8M_0: function($p0, $p1) {
        var $v_0 = document.createElement("div"), $v_1 = document.createElement("span"), $v_2 = $P_CRM($v_0);
        $v_2.attr("id", $p0.id + "_c");
        $v_2.css("display", "none");
        var $v_3 = $P_CRM($v_1);
        $v_3.attr("class", "ms-crm-InlineEditLabel");
        $v_3.text($p1);
        $v_0.appendChild($v_1);
        $p0.appendChild($v_0);
        return $p0
    },
    $5m_0: function($p0) {
        if (!IsNull(this.$17_0[$p0])) {
            var $v_0 = {};
            $v_0 = $P_CRM.extend($v_0, this.$17_0[$p0]);
            return $v_0
        } else return null
    },
    $9P_0: function($p0, $p1, $p2) {
        var $v_0 = this.$5m_0(this.$4_0[$p0]), $v_1 = $p1.parentNode;
        if (!IsNull($v_0)) {
            var $v_2 = this.getCellAttributeId($v_1, this.$4_0[$p0], false),
                $v_3 = this.$9l_0($v_1, $p0),
                $v_4 = this.$5X_0($v_2, $v_0.LogicalName),
                $v_5 = XUI.Html.DomUtils.GetFirstChild($p1),
                $v_6 = $P_CRM($v_5),
                $v_7 = $v_6.text();
            if (!IsNull(this.$8_0)) $v_7 = this.$8_0.gridAttributeInitialValue($v_1, this, $v_7, $v_0);
            $p1.removeChild($v_5);
            $p1.appendChild($v_4);
            var $v_8 = this.$BV_0($v_0, $v_4, $v_3, $v_7);
            if (!IsNull($v_8)) {
                var $v_9 = $P_CRM($p1), $v_A = $v_8;
                $v_9.css("overflow", "visible");
                this.$Cm_0($v_0, $v_A, $v_7, $p2);
                this.$8_0.updateControlStyle($v_0, $v_8);
                if (!this.$W_0)
                    if ($v_A.get_controlMode() === "alwaysedit" || $v_A.get_controlMode() === "normal") this.$W_0 = true
            } else {
                this.$v_0[$v_2] = $v_7;
                $p1.removeChild($v_4);
                $p1.appendChild($v_5)
            }
            if (this.$3w_0 && IsNull(this.$2J_0)) this.$2J_0 = $v_4
        }
    },
    $Cm_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = $find($p1.get_dataContext().get_attribute().get_dataAttributeId());
        $v_0.get_controls().add($p1);
        !IsNull(this.$47_0) && this.$47_0.get_attributes().remove($v_0);
        switch ($p0.AttributeType) {
        case "decimal":
            var $v_1 = this.getCurrencyValue($p2);
            $v_0.forceResetValue($v_1);
            break;
        case "money":
            var $v_2 = this.getCurrencyValue($p2);
            $v_0.resetValue($v_2);
            break;
        case "picklist":
            $v_0.forceResetValue(parseInt($p2));
            break;
        default:
            if ($p3) return;
            $v_0.resetValue($p2);
            break
        }
    },
    $BV_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = $p3, $v_1 = null, $v_2 = this.$6q_0($p0, $p1, $v_0), $v_3 = $P_CRM($p1);
        $v_1 = Mscrm.InlineControlFactory.initializeUnboundedField($v_3, $p0, $v_2, $p1.id, $p2);
        var $v_4 = $v_1;
        $v_4.initializeAndRenderEditView();
        this.$1Z_0[$p1.id] = $v_1;
        return $v_1
    },
    $6q_0: function($p0, $p1, $p2) {
        var $v_0 = null;
        if (!IsNull($p2)) {
            $v_0 = {};
            $v_0["raw"] = $p2;
            $v_0["defaultvalue"] = $p2;
            $v_0["value"] = $p2
        }
        $p0.LogicalName = $p1.id;
        switch ($p0.AttributeType) {
        case "money":
            var $v_1 = $p0, $v_2 = this.$9C_0($v_1);
            $v_1.CurrencySymbol = $v_2;
            var $v_3 = this.getCurrencyValue($p2);
            if (IsNull($v_0)) $v_0 = {};
            $v_0["symbol"] = $v_2;
            $v_0["precision"] = $v_1.Precision.toString();
            $v_0["value"] = $v_3;
            $v_0["raw"] = $v_3.toString();
            break;
        case "decimal":
            if (IsNull($v_0)) {
                $v_0 = {};
                $v_0["value"] = "0";
                $v_0["raw"] = "0"
            } else {
                var $v_4 = this.getCurrencyValue($p2);
                $v_0["value"] = $v_4;
                $v_0["raw"] = $v_4.toString()
            }
            break;
        case "picklist":
            if (IsNull($v_0)) {
                $v_0 = {};
                $v_0["value"] = null;
                $v_0["raw"] = null;
                $v_0["defaultvalue"] = "-1"
            } else if (this.$I_0)
                for (var $v_5 = $p0, $v_6 = 0; $v_6 < $v_5.Options.length; $v_6++) {
                    var $v_7 = $v_5.Options[$v_6];
                    if ($v_7.Label === $p2) {
                        $v_0["raw"] = $v_7.Value;
                        $v_0["defaultvalue"] = "0";
                        break
                    }
                }
            break
        }
        return $v_0
    },
    $9e_0: function($p0) {
        var $v_0 = document.createElement("div"),
            $v_1 = document.createElement("a"),
            $v_2 = document.createElement("img");
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        var $v_3 = $P_CRM($v_0);
        $v_3.attr("class", "ms-crm-List-ErrorStatusIcon");
        $v_3.attr("id", CrmEncodeDecode.CrmHtmlAttributeEncode("ErrorStatusLink_" + $p0));
        var $v_4 = $P_CRM($v_1);
        $v_4.attr("href", "#");
        $v_4.attr("id", CrmEncodeDecode.CrmHtmlAttributeEncode("ErrorStatusIcon_" + $p0));
        $v_4.attr("tabindex", this.$F_0.tabIndex + "");
        var $v_5 = $P_CRM($v_2);
        $v_5.attr("src", window.CDNURL + "/_imgs/inlineedit/warning.png");
        $v_5.attr("alt", "");
        $v_5.attr("class", "ms-crm-ImageStrip-inlineedit_warning");
        return $v_3
    },
    $9d_0: function($p0) {
        var $v_0 = document.createElement("div"), $v_1 = $P_CRM($v_0);
        $v_1.attr("id", CrmEncodeDecode.CrmHtmlAttributeEncode("div_errorFlyout_" + $p0));
        $v_1.attr("class", "ms-crm-List-ErrorStatusIcon-FlyOut");
        return $v_1
    },
    $8H_0: function($p0) {
        var $v_0 = this.getHiddenTableCellValue($p0, "rowIndex");
        if (!IsNull($v_0)) {
            var $v_1 = "r" + $v_0 + "c0";
            if (IsNull(this.$w_0)) this.$w_0 = {};
            if (IsNull(this.$w_0[$v_1])) {
                var $v_2 = $P_CRM("td", $p0),
                    $v_3 = this.$9e_0($v_1),
                    $v_4 = this.$9d_0($v_1),
                    $v_5 = $v_2[0],
                    $v_6 = $P_CRM($v_5);
                $v_6.append($v_3);
                $v_6.append($v_4);
                $v_6.css("overflow", "visible");
                var $v_7 = new Mscrm.ErrorFlyout($v_3, $v_4, $P_CRM(window.document.body));
                this.$w_0[$v_1] = $v_7;
                $v_3.css("display", "none");
                $v_4.addClass("ms-crm-Inline-Validation");
                $v_3.mouseover(this.$$d_$65_0);
                $v_4.mouseout(this.$$d_$4t_0);
                $v_4.click(this.$$d_$BS_0)
            }
        }
    },
    $Bz_0: function($p0) {
        var $v_0 = this.getHiddenTableCellValue($p0, "rowIndex");
        if (!IsNull($v_0)) {
            var $v_1 = "r" + $v_0 + "c0", $v_2 = $P_CRM("td", $p0), $v_3 = $v_2[0], $v_4 = $P_CRM($v_3);
            $v_4.removeAttr("overflow");
            var $v_5 = "#" + CrmEncodeDecode.CrmHtmlAttributeEncode("ErrorStatusLink_" + $v_1),
                $v_6 = $P_CRM($v_5, $v_2[0]),
                $v_7 = "#" + CrmEncodeDecode.CrmHtmlAttributeEncode("div_errorFlyout_" + $v_1),
                $v_8 = $P_CRM($v_7, $v_2[0]);
            $v_6.off("mouseOver", this.$$d_$65_0);
            $v_6.unbind();
            $v_8.off("mouseOut", this.$$d_$4t_0);
            $v_8.unbind();
            $v_6.remove();
            $v_8.remove();
            var $v_9 = this.$w_0[$v_1];
            $v_9.dispose();
            delete this.$w_0[$v_1]
        }
    },
    $BW_0: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0.children("tbody").children("tr");
            if (!IsNull($v_0)) {
                this.$1Y_0 = {};
                for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                    var $v_2 = $v_0[$v_1], $v_3 = $P_CRM($v_2);
                    this.$8j_0($v_2);
                    $v_3.attr("rowIndex", $v_1.toString());
                    if (this.$G_0) {
                        $v_3.attr("rowIndex", $v_1.toString());
                        if (this.$I_0) this.$7U_0($v_2);
                        else this.$7T_0($v_2);
                        var $v_4 = $v_3.attr("otype");
                        if (!isNullOrEmptyString($v_4)) if (this.$H_0 < 0) this.$H_0 = Number.parseInvariant($v_4);
                        this.$1Y_0[$v_1.toString()] = false;
                        if (this.$W_0) {
                            var $v_5 = $P_CRM($v_2);
                            $v_5.on("SaveInlineRecord", this.$$d_$AT_0)
                        }
                    }
                    this.addOrRemoveImage($v_2, "");
                    !IsNull(this.$8_0) && this.$8_0.gridRowInitialize(this, $v_2)
                }
            }
            !this.$I_0 && this.$4z_0()
        }
    },
    $7U_0: function($p0) {
        var $v_0 = $P_CRM($p0), $v_1 = $P_CRM("td[TurboFormControl='true']", $v_0);
        if (!$v_1.length) return;
        var $v_2 = {}, $v_3 = {}, $v_4 = {}, $v_5 = $v_0.attr("oid");
        if (isNullOrEmptyString($v_5)) {
            $v_3["Id"] = Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString();
            $v_3["Name"] = "";
            $v_3["TypeCode"] = this.$0_0.get_entityTypeCode()
        } else {
            $v_3["Id"] = $v_0.attr("oid");
            $v_3["Name"] = XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild($v_1[0]));
            $v_3["TypeCode"] = $v_0.attr("otype")
        }
        $v_3["TypeName"] = this.$0_0.get_entityTypeName();
        $v_2["_entity"] = $v_3;
        $v_2["rowIndex"] = $p0.getAttribute("rowIndex");
        for (var $v_6 = new Array($v_1.length), $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
            var $v_8 = XUI.Html.DomUtils.GetFirstChild($v_1[$v_7]),
                $v_9 = $v_8.getAttribute("data-attributename"),
                $v_A = this.$8_0.getGridCellInlineControlMode(this, $p0, $v_9);
            if (isNullOrEmptyString($v_A)) $v_A = "locked";
            if ($v_9 === "productname") $v_9 = "productdescription";
            var $v_B = this.$5m_0($v_9), $v_C = XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild($v_8));
            if (!Mscrm.InternalUtilities.JSTypes.isNull(this
                .$8_0)) $v_C = this.$8_0.gridAttributeInitialValue($v_0[0], this, $v_C, $v_B);
            $v_2[$v_9] = this.$6q_0($v_B, XUI.Html.DomUtils.GetFirstChild($v_1[$v_7]), $v_C);
            var $v_D = new Mscrm.TurboForm.Control.DataBoundUIControlDescriptor;
            $v_D.ControlLayout = 0;
            if ($v_A === "locked") {
                $v_D.Disabled = true;
                $v_4[$v_8.id] = "1"
            } else $v_D.Disabled = false;
            $v_D.DataFieldName = $v_9;
            $v_D.Id = $v_8.id;
            $v_D.ClassId = this.$9W_0($v_B.AttributeType);
            $v_6[$v_7] = $v_D;
            if (!this.$W_0) if ($v_A === "alwaysedit" || $v_A === "normal") this.$W_0 = true
        }
        $v_2["_disabledcontrols"] = $v_4;
        Array.add(this.$1X_0, $v_2);
        Array.add(this.$1j_0, $v_6)
    },
    $9W_0: function($p0) {
        switch ($p0) {
        case "nvarchar":
            return new Microsoft.Crm.Client.Core.Framework.Guid("{4273EDBD-AC1D-40D3-9FB2-095C621B552D}");
        case "money":
            return new Microsoft.Crm.Client.Core.Framework.Guid("{533B9E00-756B-4312-95A0-DC888637AC78}");
        case "decimal":
            return new Microsoft.Crm.Client.Core.Framework.Guid("{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}");
        case "picklist":
            return new Microsoft.Crm.Client.Core.Framework.Guid("{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}");
        case "int":
            return new Microsoft.Crm.Client.Core.Framework.Guid("{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}");
        default:
            throw Error.create("Unknown attribute type in inlintEdit subgrid")
        }
    },
    $8j_0: function($p0) {
        var $v_0 = $P_CRM("td", $p0);
        if ($v_0.length > 1) {
            var $v_1 = $v_0[1], $v_2 = $P_CRM("img", $v_1);
            $v_2.length > 0 && $v_2.attr("class", "StatusImage")
        }
    },
    $4z_0: function() {
        if (!this.$5L_0) {
            if (this.$W_0) {
                if (IsNull(this.$1O_0)) this.$1O_0 = new Mscrm.SaveQueueInlineEdit;
                this.$Cg_0();
                this.$5L_0 = true
            }
            $addHandler(window, "beforeunload", this.$$d_$Ch_0)
        }
    },
    $7T_0: function($p0) {
        for (var $v_0 = $P_CRM("td", $p0), $v_1 = this.isNewRecord($p0), $v_2 = 0; $v_2 < $v_0.length; $v_2++)
            if (!isNullOrEmptyString(this.$4_0[$v_2])) {
                var $v_3 = $v_0[$v_2],
                    $v_4 = this.getCellAttributeId($p0, this.$4_0[$v_2], false),
                    $v_5 = $P_CRM("#" + $v_4, $v_3);
                IsNull($v_5[0]) && this.$9P_0($v_2, $v_3, $v_1)
            }
        this.$64_0($p0)
    },
    $64_0: function($p0) {
        for (var $v_0 = this.isNewRecord($p0), $v_1 = 0; $v_1 < this.$4_0.length; $v_1++)
            if (!isNullOrEmptyString(this.$4_0[$v_1])) {
                var $v_2 = this.$4_0[$v_1],
                    $v_3 = this.getCellAttributeId($p0, this.$4_0[$v_1], this.$g_0[this.$4_0[$v_1]]);
                if ($v_0) {
                    if (!IsNull(this.$v_0[$v_3])) {
                        var $v_4 = "", $v_5 = 0, $v_6 = this.$17_0[$v_2];
                        this.$v_0[$v_3] = $v_4;
                        if (!IsNull($v_6))
                            if ($v_6
                                .AttributeType ===
                                "money" ||
                                $v_6.AttributeType === "decimal") this.$v_0[$v_3] = $v_5
                    }
                } else this.$v_0[$v_3] = this.getTableCellValue($p0, this.$4_0[$v_1])
            }
    },
    $CT_0: function($p0, $p1) {
        $p0.attr("rowIndex", $p1.toString());
        while (this.$8g_0($p0[0])) {
            $p1 = $p1 + 1;
            $p0.attr("rowIndex", $p1.toString())
        }
        $p0.attr("id", "row" + $p1.toString());
        return $p1
    },
    $8g_0: function($p0) {
        for (var $v_0 = false, $v_1 = $P_CRM("td", $p0), $v_2 = 0; $v_2 < $v_1.length; $v_2++)
            if (!isNullOrEmptyString(this.$4_0[$v_2])) {
                var $v_3 = this.getCellAttributeId($p0, this.$4_0[$v_2], false), $v_4 = Xrm.Page.getAttribute($v_3);
                if (!IsNull($v_4)) $v_0 = true;
                break
            }
        return $v_0
    },
    $CE_0: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$4_0.length; $v_0++)
            if (!isNullOrEmptyString(this.$4_0[$v_0])) {
                var $v_1 = this.$4_0[$v_0],
                    $v_2 = this.getCellAttributeId($p0, this.$4_0[$v_0], this.$g_0[this.$4_0[$v_0]]),
                    $v_3 = this.$17_0[$v_1],
                    $v_4 = this.$v_0[$v_2];
                if (!IsNull($v_3))
                    switch ($v_3.AttributeType) {
                    case "money":
                    case "decimal":
                        var $v_5 = this.getCurrencyValue($v_4);
                        this.setTableCellValue($p0, $v_1, $v_5, false);
                        break;
                    case "picklist":
                        this.setTableCellValue($p0, $v_1, isNullOrEmptyString($v_4) ? "-1" : $v_4, true);
                        break;
                    default:
                        this.setTableCellValue($p0, $v_1, $v_4, false);
                        break
                    }
            }
    },
    $Cn_0: function($p0, $p1) {
        if (!IsNull($p1))
            for (var $v_0 = 0; $v_0 < this.$4_0.length; $v_0++)
                if (!isNullOrEmptyString(this.$4_0[$v_0])) {
                    var $v_1 = this.$4_0[$v_0], $v_2 = $p1[$v_1];
                    if (!IsNull($v_2)) {
                        var $v_3 = $v_2["raw"];
                        if (IsNull($v_3)) $v_3 = $v_2["value"];
                        if (!IsNull($v_3)) {
                            var $v_4 = this.$17_0[$v_1];
                            if (!IsNull($v_4))
                                switch ($v_4.AttributeType) {
                                case "money":
                                case "decimal":
                                    var $v_5 = this.getCurrencyValue($v_3);
                                    this.setTableCellValue($p0, $v_1, $v_5, false);
                                    break;
                                case "picklist":
                                    this.setTableCellValue($p0, $v_1, isNullOrEmptyString($v_3) ? "-1" : $v_3, true);
                                    break;
                                case "int":
                                    if (IsNull(this
                                        .$g_0[$v_1])) this.setTableCellValue($p0, $v_1, parseInt($v_3), false);
                                    else if (this.$g_0[$v_1]) this.setTableCellValue($p0, $v_1, $v_3, false);
                                    else this.setTableCellValue($p0, $v_1, parseInt($v_3), false);
                                    break;
                                default:
                                    this.setTableCellValue($p0, $v_1, $v_3, false);
                                    break
                                }
                        }
                    }
                }
    },
    $9l_0: function($p0, $p1) {
        if (!this.$G_0) return "locked";
        var $v_0 = "";
        if (!IsNull(this.$8_0)) {
            var $v_1 = this.$4_0[$p1];
            $v_0 = this.$8_0.getGridCellInlineControlMode(this, $p0, $v_1)
        }
        if (isNullOrEmptyString($v_0)) return "locked";
        else return $v_0
    },
    setHiddenTableCellValue: function(row, attributeName, value) {
        if (!IsNull(row)) {
            var $v_0 = $P_CRM(row), $v_1 = this.getCellAttributeId(row, attributeName, true);
            this.$v_0[$v_1] = value;
            $v_0.attr(attributeName, value)
        }
    },
    getHiddenTableCellValue: function(row, attributeName) {
        if (!IsNull(row)) {
            var $v_0 = $P_CRM(row);
            return $v_0.attr(attributeName)
        }
        return null
    },
    setTableCellValue: function(row, attributeName, value, isResetAttribute) {
        if (this.$g_0[attributeName]) {
            this.setHiddenTableCellValue(row, attributeName, value);
            return
        }
        var $v_0 = this.getAttributeIndex(attributeName);
        if ($v_0 >= 0) {
            var $v_1 = this.getCellAttributeId(row, attributeName, false);
            if (!this.$I_0) this.$CX_0(value, isResetAttribute, $v_1);
            else {
                if (attributeName === "productname") attributeName = "productdescription";
                var $v_2 = row.getAttribute("rowIndex").toString(), $v_3 = this.$u_0[$v_2];
                setAttributeValue($v_3, attributeName, value);
                this.$v_0[$v_1] = value
            }
        }
    },
    $CX_0: function($p0, $p1, $p2) {
        var $v_0 = this.$1Z_0[$p2];
        if (!IsNull($v_0))
            if ($v_0.get_isValid()) {
                this.$v_0[$p2] = $p0;
                var $v_1 = $find($v_0.get_dataContext().get_attribute().get_dataAttributeId());
                if ($p1) $v_1.resetValue($p0);
                else $v_1.set_value($p0)
            }
    },
    $7L_0: function($p0, $p1, $p2) {
        if (this.$g_0[$p1]) return this.getHiddenTableCellValue($p0, $p1);
        var $v_0 = this.getAttributeIndex($p1);
        if ($v_0 >= 0)
            if (!this.$I_0) {
                var $v_1 = this.getCellAttributeId($p0, $p1, false), $v_2 = this.$1Z_0[$v_1];
                if (!IsNull($v_2))
                    if (!$p2 || $p2 && $v_2.get_isValid()) {
                        var $v_3 = $find($v_2.get_dataContext().get_attribute().get_dataAttributeId());
                        return $v_3.get_value()
                    }
            } else if (!IsNull(this.$u_0)) {
                var $v_4 = $p0.getAttribute("rowindex").toString();
                if ($p1 === "productname") $p1 = "productdescription";
                var $v_5 = this.$u_0[$v_4];
                if (!IsNull($v_5)) return getAttributeValue($v_5, $p1)
            }
        return null
    },
    getTableCellValueIfValid: function(row, attributeName) { return this.$7L_0(row, attributeName, true) },
    getTableCellValue: function(row, attributeName) { return this.$7L_0(row, attributeName, false) },
    isNewRecord: function(row) {
        var $v_0 = this.getHiddenTableCellValue(row, "isNewRecord"), $v_1 = $v_0 === "true";
        return $v_1
    },
    addOrRemoveImage: function(element, imagePath, imageToolTip) {
        var $v_0 = this.getIconCellColumnIndex();
        if ($v_0 > 0) {
            var $v_1 = $P_CRM("td", element);
            if ($v_1.length > 0) {
                if (IsNull($v_1[$v_0])) return;
                var $v_2 = $P_CRM($v_1[$v_0]), $v_3 = $P_CRM("img", $v_2);
                if ($v_3.length <= 0) {
                    var $v_4 = document.createElement("img"), $v_5 = $P_CRM($v_4);
                    $v_5.attr("class", "StatusImage");
                    $v_2.append($v_5);
                    $v_3 = $v_5
                }
                if (isNullOrEmptyString(imagePath)) $v_3.css("display", "none");
                else {
                    $v_3.css("display", "inline-block");
                    $v_3.attr("src", imagePath);
                    !isNullOrEmptyString(imageToolTip) && $v_3.attr("title", imageToolTip)
                }
            }
        }
    },
    addCollapseExpandIcons: function(element) {
        var $v_0 = $P_CRM("td", element);
        if ($v_0.length > 0) {
            if (IsNull($v_0[1])) return;
            var $v_1 = $P_CRM($v_0[1]), $v_2 = $P_CRM("a", $v_1);
            if ($v_2.length <= 0) {
                var $v_3 = document.createElement("a"), $v_4 = $P_CRM($v_3);
                $v_1.append($v_4);
                $v_2 = $v_4
            }
            $v_2.show();
            $v_2.attr("title", Xrm.Internal.getResourceString("LOCID_COLLAPSE_BUNDLE"));
            $v_1.attr("alt",
                CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("LOCID_COLLAPSE_BUNDLE")));
            $v_2.click(Mscrm.ProductEntityInlineEditGrid.collapseExpandRows);
            $v_2.keyup(Mscrm.ProductEntityInlineEditGrid.imageKeyUp)
        }
    },
    showRowError: function(response, gridRow) {
        var $v_0 = this.getHiddenTableCellValue(gridRow, "rowIndex");
        if (!IsNull($v_0)) {
            var $v_1 = response["_error"];
            this.$8H_0(gridRow);
            if (!IsNull($v_1)) {
                var $v_5 = $P_CRM(gridRow), $v_6 = null;
                if (!IsNull($v_1["Code"]) && $v_1["Code"] === "0x80040265") $v_6 = $v_1["Description"];
                else $v_6 = $v_1["DisplayText"];
                $v_5.attr("errorText", CrmEncodeDecode.CrmHtmlAttributeEncode($v_6));
                $v_5.attr("hasError", "true")
            }
            var $v_2 = $P_CRM("td", gridRow), $v_3 = $v_2[0], $v_4 = $P_CRM(".ms-crm-List-ErrorStatusIcon", $v_3);
            !IsNull($v_4) && $v_4.css("display", "inline-block")
        }
    },
    hideRowError: function(gridRow) {
        var $v_0 = this.getHiddenTableCellValue(gridRow, "rowIndex");
        if (!IsNull($v_0)) {
            var $v_1 = $P_CRM(gridRow);
            $v_1.removeAttr("errorText");
            $v_1.attr("hasError", "false");
            var $v_2 = "r" + $v_0 + "c0",
                $v_3 = $P_CRM("td", gridRow),
                $v_4 = $v_3[0],
                $v_5 = $P_CRM(".ms-crm-List-ErrorStatusIcon", $v_4);
            if (!IsNull($v_5)) {
                $v_5.css("display", "none");
                $v_5.hide();
                var $v_6 = this.$w_0[$v_2];
                !IsNull($v_6) && $v_6.hideError()
            }
            this.$Bz_0(gridRow)
        }
    },
    $65_0: function($p0) {
        var $v_0 = $p0.target, $v_1 = $P_CRM($v_0), $v_2 = $v_1.closest("tr");
        if ($v_2.length > 0) {
            var $v_3;
            if ($v_2[0].tagName === "TR") {
                $v_3 = this.getHiddenTableCellValue($v_2[0], "rowIndex");
                if (!IsNull($v_3)) {
                    var $v_4 = "r" + $v_3 + "c0";
                    $p0.stopImmediatePropagation();
                    if (!IsNull(this.$w_0[$v_4])) {
                        var $v_5 = this.$w_0[$v_4];
                        if (!IsNull($v_5)) {
                            var $v_6 = CrmEncodeDecode.CrmHtmlDecode($v_2.attr("errorText"));
                            $v_5.showError($v_6)
                        }
                    }
                }
            }
        }
    },
    $BS_0: function($p0) {
        this.$4t_0($p0);
        $p0.stopPropagation();
        $p0.preventDefault()
    },
    $4t_0: function($p0) {
        var $v_0 = $p0.target, $v_1 = $P_CRM($v_0), $v_2 = $v_1.closest("tr");
        if ($v_2.length > 0) {
            var $v_3;
            if ($v_2[0].tagName === "TR") {
                $v_3 = this.getHiddenTableCellValue($v_2[0], "rowIndex");
                if (!IsNull($v_3)) {
                    var $v_4 = "r" + $v_3 + "c0";
                    $p0.stopImmediatePropagation();
                    if (!IsNull(this.$w_0[$v_4])) {
                        var $v_5 = this.$w_0[$v_4];
                        !IsNull($v_5) && $v_5.hideError()
                    }
                }
            }
        }
    },
    getAttributeIndex: function(attributeName) { return Array.indexOf(this.$4_0, attributeName) },
    getAttributeType: function(attributeName) {
        if (!IsNull(this.$17_0[attributeName])) return this.$17_0[attributeName].AttributeType;
        return null
    },
    getCurrencyValue: function(currencyValue) {
        if (!IsNull(currencyValue) && typeof currencyValue === "number") return currencyValue;
        else if (!isNullOrEmptyString(currencyValue)) {
            currencyValue = currencyValue.trimStart();
            currencyValue = currencyValue.trimEnd();
            var $v_0 = Number(currencyValue.replace(/[^0-9\.]+/g, ""));
            if (IsNull($v_0)) {
                var $v_1 = currencyValue.replace(this.$1o_0, "");
                $v_1 = $v_1.replace("(", "");
                $v_1 = $v_1.replace(")", "");
                $v_1 = $v_1.replace("-", "");
                $v_0 = Number($v_1);
                if (IsNull($v_0)) $v_0 = 0
            }
            if (currencyValue
                .startsWith("(") &&
                currencyValue.endsWith(")") ||
                currencyValue.indexOf("-") !== -1) $v_0 = $v_0 * -1;
            return $v_0
        } else return 0
    },
    $9C_0: function($p0) {
        var $v_0 = "$";
        if (!isNullOrEmptyString(this.$1o_0)) $v_0 = this.$1o_0;
        else {
            var $v_1 = $P_CRM(".ms-crm-CurrencySymbol-Refresh");
            if ($v_1 && $v_1.length > 0 && !isNullOrEmptyString(XUI.Html.GetText($v_1[0]))
            ) $v_0 = XUI.Html.GetText($v_1[0]);
            else $v_0 = $p0.CurrencySymbol
        }
        return $v_0
    },
    getCellAttributeId: function(row, attributeName, isHiddenCell) {
        var $v_0 = this.getHiddenTableCellValue(row, "rowIndex"), $v_1 = this.getAttributeIndex(attributeName);
        if (!IsNull($v_0) && !IsNull($v_1))
            if (isHiddenCell) return this.$4_0[$v_1] + "_r" + $v_0.toString() + "_hidden";
            else return this.$4_0[$v_1] + "_r" + $v_0.toString() + "c" + $v_1.toString();
        return ""
    },
    $3j_0: function($p0, $p1) {
        var $v_0 = $p0 ? window.CDNURL + "/_imgs/btn_lookup_resolving.gif" : "";
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1
                .getAttribute("haserror")) &&
            $p1.getAttribute("haserror")) $v_0 = "";
        if ($p0) {
            var $v_1 = $P_CRM("td", $p1);
            if ($v_1.length > 0) {
                var $v_2 = $P_CRM($v_1[2]), $v_3 = $P_CRM("img", $v_2);
                this.$7j_0($v_3)
            }
        }
        this.addOrRemoveImage($p1, $v_0)
    },
    $9s_0: function() {
        for (var $v_0 = document.createElement("tr"),
            $v_1 = $P_CRM($v_0),
            $v_2 = this.$5q_0(1, $P_CRM(this.$F_0)),
            $v_3 = this.$5q_0(3, $P_CRM(this.$F_0)),
            $v_4 = CrmEncodeDecode.CrmHtmlAttributeEncode(this.$F_0.attributes.getNamedItem("tabindex").value),
            $v_5 = 0;
            $v_5 < this.$4_0.length;
            $v_5++) {
            var $v_6 = "", $v_7 = false;
            $v_7 = this.$g_0[this.$4_0[$v_5]];
            $v_6 = isNullOrEmptyString(this.$4_0[$v_5]) ? "ms-crm-List-NonDataCell" : "ms-crm-List-DataCell-Lite";
            if ($v_5 === $v_2) {
                switch (this.$H_0) {
                case 1089:
                case 1083:
                case 1091:
                case 1085:
                    $v_1.append(this.$9r_0());
                    break
                }
                $v_1.append(this.$8F_0($v_4))
            } else if (!$v_7) {
                var $v_8 = this.$4_0[$v_5], $v_9 = this.$5m_0($v_8);
                if (this.$I_0 && !IsNull($v_9)) {
                    var $v_C = Mscrm.TurboInlineEditGridTemplates.$9U($v_8, $v_9, $v_4);
                    if ($v_C) {
                        $v_1.append($v_C);
                        continue
                    }
                }
                var $v_A = document.createElement("td"), $v_B = $P_CRM($v_A);
                $v_B.attr("class", $v_6);
                if ($v_6 === "ms-crm-List-DataCell-Lite") {
                    var $v_D = document.createElement("span");
                    $v_B.append($P_CRM($v_D))
                }
                $v_1.append($v_B);
                $v_5 === $v_3 && this.$8R_0($v_0, $v_B)
            }
        }
        $v_1.attr("isNewRecord", "true");
        $v_1.attr("class", "ms-crm-List-Row-Lite");
        return $v_1
    },
    $9r_0: function() { return $P_CRM(document.createElement("td")) },
    $8R_0: function($p0, $p1) {
        var $v_0 = Xrm.Internal.getResourceString("ToolTip_GridDeleteAction");
        this.addOrRemoveImage($p0, window.CDNURL + "/_imgs/grid/actions_delete_bin_16.png", $v_0);
        var $v_1 = $P_CRM("img", $p1);
        $v_1.click(this.$$d_$8w_0)
    },
    $7j_0: function($p0) {
        var $v_0 = $p0;
        $v_0.off("click", this.$$d_$8w_0)
    },
    $8w_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName === "IMG") {
            var $v_1 = $P_CRM($v_0);
            this.$7j_0($v_1);
            var $v_2 = $v_1.closest("tr");
            if ($v_2.length > 0) {
                this.$5Z_0($v_2[0]);
                $v_2.remove()
            }
            this.$7n_0()
        }
    },
    $8v_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName === "A") {
            var $v_1 = $P_CRM($v_0), $v_2 = $v_1.closest("tr");
            Mscrm.GridControlLite.DeleteRecordLite($v_0);
            $v_2.length > 0 && this.$5Z_0($v_2[0])
        }
    },
    $8F_0: function($p0) {
        var $v_0 = document.createElement("img"),
            $v_1 = document.createElement("a"),
            $v_2 = document.createElement("div"),
            $v_3 = document.createElement("td");
        $v_0.className = "ms-crm-ImageStrip-deleteButtonBin";
        var $v_4 = document.createAttribute("src");
        $v_4.value = "/_imgs/grid/actions_delete_bin_16.png";
        $v_0.attributes.setNamedItem($v_4);
        $v_1.className = "ms-crm-List-DeleteButton";
        $v_1.style.visibility = "hidden";
        if (window.LOCID_UI_DIR === "RTL") $v_1.style.left = "14px";
        else $v_1.style.right = "14px";
        $v_1.style.backgroundColor = "rgb(215, 235, 249)";
        $v_1.setAttribute("tabindex", $p0);
        var $v_5 = document.createAttribute("title");
        $v_5.value = Xrm.Internal.getResourceString("LOCID_DELETEBUTTON_TOOLTIP");
        $v_1.attributes.setNamedItem($v_5);
        $v_1.href = "javascript:void(0)";
        var $v_6 = $P_CRM($v_1);
        $v_6.click(this.$$d_$8v_0);
        $v_2.className = "ms-crm-List-DeleteContainer-Div";
        $v_2.style.display = "block";
        $v_3.className = "ms-crm-List-DeleteContainer";
        $v_1.appendChild($v_0);
        $v_2.appendChild($v_1);
        $v_3.appendChild($v_2);
        return $P_CRM($v_3)
    },
    $8u_0: function() {
        if (!IsNull(this.$F_0)) {
            var $v_0 = $P_CRM(this.$F_0), $v_1 = $v_0.children("tbody").children("tr");
            if ($v_1.length === 1) {
                var $v_2 = $P_CRM("td:first", $v_1), $v_3 = $v_2.attr("class");
                if ($v_3 === "ms-crm-List-MessageText-Lite") {
                    $v_2.text("");
                    return true
                }
            }
        }
        return false
    },
    $8p_0: function() {
        if (!IsNull(this.$F_0)) {
            var $v_0 = this.$0_0;
            if (!IsNull($v_0.get_moveDownContextualButton()) && !IsNull($v_0.get_moveUpContextualButton())) {
                $v_0.get_moveUpContextualButton().className = "ms-crm-ImageStrip-moveUpButtonDisabled";
                $v_0.get_moveDownContextualButton().className = "ms-crm-ImageStrip-moveDownButtonDisabled"
            }
            var $v_1 = $P_CRM(this.$F_0),
                $v_2 = $v_1.children("tbody").children("tr"),
                $v_3 = $P_CRM("tbody:first", $v_1),
                $v_4 = $v_2.length;
            if (this.$8u_0()) $v_4 = 1;
            var $v_5 = this.$9s_0();
            $v_3.prepend($v_5);
            $v_4 = this.$CT_0($v_5, $v_4);
            var $v_6 = $v_5.children(".ms-crm-List-DeleteContainer")[0];
            $v_6.id = "gridBodyTable_gridDelBtn_" + $v_4;
            this.$7n_0();
            if (this.$I_0) {
                this.$7U_0($v_5[0]);
                var $v_8 = this.$1X_0[this.$1X_0.length - 1],
                    $v_9 = this.$1j_0[this.$1j_0.length - 1],
                    $v_A = $v_5[0].getAttribute("rowIndex").toString();
                if (!this.$u_0) this.$u_0 = {};
                this.$u_0[$v_A] = createFormForGridRow($v_8, $v_9, this.$0_0.get_id());
                var $v_B = $v_9[0];
                this.$2u_0 = this.$u_0[$v_A].ui.controls.get($v_B.Id);
                this.$64_0($v_5[0]);
                this.$CR_0()
            } else this.$7T_0($v_5[0]);
            !IsNull(this.$8_0) && this.$8_0.gridRowInitialize(this, $v_5[0]);
            var $v_7 = $v_5;
            $v_7.on("SaveInlineRecord", this.$$d_$AT_0);
            this.$4z_0()
        }
    },
    $CR_0: function() {
        var $$t_0 = this;
        window.setTimeout(function() {
                if (!IsNull($$t_0.$2u_0))
                    switch ($$t_0.$2u_0.getControlType()) {
                    case "optionset":
                        break;
                    default:
                        $$t_0.$2u_0.setFocus();
                        break
                    }
            },
            0)
    },
    onCreateNewRecord: function() { this.$G_0 && this.$8p_0() },
    onCreateNewRecordAndFocus: function() {
        this.$3w_0 = true;
        this.onCreateNewRecord();
        if (!this.$I_0) {
            var $$t_0 = this;
            window.setTimeout(function() {
                    if (!IsNull($$t_0.$2J_0)) {
                        Sys.UI.Behavior.getBehaviors($$t_0.$2J_0)[0].setControlToEdit();
                        $$t_0.$2J_0 = null
                    }
                    $$t_0.$3w_0 = false
                },
                0)
        }
    },
    $Au_0: function($p0) {
        for (var $v_0 = false,
            $v_1 = this.getHiddenTableCellValue($p0, "rowIndex"),
            $v_2,
            $v_3 = this.$1O_0.$1D_0,
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            var $v_5 = $v_3[$v_4];
            if (!IsNull($v_5)) {
                $v_2 = this.getHiddenTableCellValue($v_5, "rowIndex");
                if ($v_2 === $v_1) {
                    $v_0 = true;
                    break
                }
            }
        }
        return $v_0
    },
    $AT_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        if ($v_0.tagName === "TR") {
            !this.$Au_0($v_0) && this.$1O_0.enqueue($v_0);
            this.$CH_0()
        } else this.handleAutoSaveNotTriggered()
    },
    $CH_0: function() {
        if (IsNull(this.$A_0)) {
            var $v_0 = this.$1O_0.dequeue();
            this.$7p_0($v_0)
        } else this.handleAutoSaveNotTriggered()
    },
    $7p_0: function($p0) {
        if (!IsNull($p0)) {
            this.$A_0 = $p0;
            if (!IsNull(this.$8_0)) this.$8_0.gridRowSave(this, $p0);
            else this.$9D_0();
            this.$A_0 && this.$3j_0(true, $p0)
        } else this.handleAutoSaveNotTriggered()
    },
    $9D_0: function() {
        var $v_0 = {};
        $v_0["DisplayText"] = "No Entity Handler To Save Record";
        $v_0["Description"] = "No Entity Handler To Save Record";
        var $v_1 = {};
        $v_1["_error"] = $v_0;
        this.onRowSaveFailure($v_1)
    },
    $7n_0: function() {
        var $v_0 = $P_CRM(this.$0_0.$2_3.get_dataTableBody());
        this.$0_0.$2_3.get_element().setAttribute("numRecords", $v_0.children("tr").length);
        var $$t_1 = this;
        window.setTimeout(function() { $$t_1.$0_0.setSubGridHeight(true) }, 10)
    },
    resetCurrentSaveRow: function() { this.$A_0 = null },
    onRowSaveSuccess: function(response) {
        var $v_0 = this.getHiddenTableCellValue(this.$A_0, "rowIndex");
        if (!IsNull($v_0)) this.$1Y_0[$v_0.toString()] = false;
        var $v_1 = Mscrm.GridControl.getControlBehaviorFromChildElement(this.$A_0);
        if (!IsNull($v_1) && $v_1.$63_3() && !Xrm.Internal.isTurboForm()) this.$3j_0(true, this.$A_0);
        else this.$3j_0(false, this.$A_0);
        var $v_2 = this.getHiddenTableCellValue(this.$A_0, "hasError");
        if (!IsNull($v_2)) $v_2 === "true" && this.hideRowError(this.$A_0);
        this.$Cn_0(this.$A_0, response);
        !IsNull(this.$8_0) && this.$8_0.gridRowSaveSuccessAction(this, this.$A_0, response);
        if (this.isNewRecord(this.$A_0)) {
            this.$8K_0(this.$A_0);
            this.setHiddenTableCellValue(this.$A_0, "isNewRecord", "false")
        }
        this.setHiddenTableCellValue(this.$A_0, "onlyHiddenValueChanged", "true");
        this.resetCurrentSaveRow();
        this.$6H_0(2e3);
        return true
    },
    $8K_0: function($p0) {
        var $v_0 = $P_CRM($p0);
        $v_0.mouseover(this.$$d_$BA_0);
        $v_0.mouseout(this.$$d_$B9_0);
        $v_0.click(this.$$d_$B8_0)
    },
    $BA_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        $v_0.tagName === "TR" && Mscrm.GridControlLite.ShowDeleteButton($v_0)
    },
    $B9_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        $v_0.tagName === "TR" && Mscrm.GridControlLite.HideDeleteButton($v_0)
    },
    $B8_0: function($p0) {
        var $v_0 = $p0.currentTarget;
        $v_0.tagName === "TR" && Mscrm.GridControlLite.SelectRow($v_0)
    },
    onRowSaveFailure: function(errorResponse) {
        var $v_0 = {};
        if (this.$I_0) {
            var $v_4 = Mscrm.InlineEditGrid.$Bg(errorResponse);
            $v_0["_error"] = $v_4
        } else $v_0 = errorResponse;
        var $v_1 = this.getHiddenTableCellValue(this.$A_0, "rowIndex");
        if (!IsNull($v_1)) this.$1Y_0[$v_1.toString()] = false;
        this.$3j_0(false, this.$A_0);
        this.showRowError($v_0, this.$A_0);
        var $v_2 = $v_0["_error"], $v_3 = !IsNull($v_2) && !IsNull($v_2["Code"]) && $v_2["Code"] === "0x80040237";
        !IsNull(this.$8_0) && this.$8_0.gridRowSaveFailureAction(this, this.$A_0, $v_0);
        if (this.$2k_0) !$v_3 && this.$CE_0(this.$A_0);
        this.setHiddenTableCellValue(this.$A_0, "onlyHiddenValueChanged", "true");
        this.resetCurrentSaveRow();
        this.$6H_0(2e3);
        return true
    },
    $Cg_0: function() {
        this.$22_0 = true;
        if (Xrm.Internal.isTurboForm()) this.$80_0();
        else this.$7z_0()
    },
    $6I_0: function() {
        this.$22_0 = false;
        this.$9L_0()
    },
    $9L_0: function() {
        if (!IsNull(this.$1O_0))
            while (this.$1O_0.get_length() > 0) {
                var $v_0 = this.$1O_0.dequeue();
                this.$7p_0($v_0)
            }
    },
    $Ch_0: function($p0) {
        this.$6I_0();
        $removeHandler(window, "beforeunload", this.$$d_$Ch_0)
    },
    refreshGrid: function() { this.$0_0.refreshLiteSubGrid() },
    checkForAllDirtyRows: function(triggerSave) {
        for (var $v_0 = $P_CRM(this.$F_0),
            $v_1 = $v_0.children("tbody").children("tr"),
            $v_2 = false,
            $v_3 = false,
            $v_4 = 0;
            $v_4 < $v_1.length;
            $v_4++) {
            var $v_5 = $P_CRM("td:first", $v_1[$v_4]).attr("class");
            if ($v_5 === "ms-crm-List-MessageText-Lite") continue;
            $v_2 = true;
            this.$2W_0++
        }
        for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) {
            var $v_7 = $P_CRM("td:first", $v_1[$v_6]), $v_8 = $v_7.attr("class");
            if ($v_8 === "ms-crm-List-MessageText-Lite") continue;
            this.$8f_0($v_1[$v_6], triggerSave)
        }
        for (var $v_9 = 0; $v_9 < $v_1.length; $v_9++) {
            $v_3 = this.$1Y_0[$v_9.toString()];
            if ($v_3) break
        }
        !$v_2 && triggerSave && this.handleAutoSaveNotTriggered();
        return $v_3
    },
    $8f_0: function($p0, $p1) {
        var $v_0 = false;
        if (!IsNull($p0)) {
            var $v_1 = this.getHiddenTableCellValue($p0, "rowIndex");
            if (!IsNull($v_1)) {
                $v_0 = this.$1Y_0[$v_1.toString()];
                if (!$v_0)
                    for (var $v_2 = 0; $v_2 < this.$4_0.length; $v_2++)
                        if (!isNullOrEmptyString(this.$4_0[$v_2])) {
                            var $v_3 = true, $$t_9, $$t_A;
                            if ($$t_A = this.$Ac_0($p0, this.$4_0[$v_2], $$t_9 = { val: $v_3 }), $v_3 = $$t_9
                                .val, $$t_A) {
                                this.$1Y_0[$v_1.toString()] = true;
                                var $v_4 = this.getHiddenTableCellValue($p0, "onlyHiddenValueChanged");
                                if (isNullOrEmptyString($v_4)
                                ) this.setHiddenTableCellValue($p0, "onlyHiddenValueChanged", $v_3.toString());
                                else {
                                    var $v_5 = $v_4.toUpperCase();
                                    $v_5 !== "FALSE" &&
                                        this.setHiddenTableCellValue($p0, "onlyHiddenValueChanged", $v_3.toString())
                                }
                                $v_0 = true;
                                break
                            }
                        }
                if ($v_0 && $p1) {
                    var $v_6 = $P_CRM($p0);
                    $v_6.trigger("SaveInlineRecord")
                } else this.handleAutoSaveNotTriggered()
            } else this.handleAutoSaveNotTriggered()
        } else this.handleAutoSaveNotTriggered();
        return $v_0
    },
    $Ac_0: function($p0, $p1, $p2) {
        var $v_0, $v_1 = false, $v_2 = false;
        $p2.val = true;
        var $v_3 = this.$8_0.getGridCellInlineControlMode(this, $p0, $p1);
        $v_0 = this.getCellAttributeId($p0, $p1, this.$g_0[$p1]);
        if (!this.$g_0[$p1]) {
            if (!this.$I_0) $v_3 = this.$9Y_0($v_0);
            if ($v_3)
                if ($v_3 === "locked" || $v_3 === "deactivated") $v_2 = false;
                else {
                    $v_2 = true;
                    $p2.val = false
                }
        } else $v_2 = true;
        if ($v_2) {
            var $v_4 = this.getTableCellValue($p0, $p1), $v_5 = this.$v_0[$v_0];
            if (!IsNull($v_4) && $v_4 !== $v_5) $v_1 = true;
            else $v_1 = false;
            return $v_1
        } else return false
    },
    $9Y_0: function($p0) {
        var $v_0 = this.$1Z_0[$p0];
        if (!IsNull($v_0)) return $v_0.get_controlMode();
        else return null
    }
};
Mscrm.MovableRowsGrid = function() {
    this.$Z_0 = [
        "{ECBB6AF5-96E5-4544-94E1-0F339007039C}", "{C58F9F0A-5F6E-46BF-AF7F-E32304E2E63D}",
        "{93A2BA26-A53A-491A-B8AE-CBADBC255136}", "{02B21CE4-7F77-4451-BFB2-DB300236C56C}"
    ]
};
Mscrm.MovableRowsGrid.prototype = {
    $1s_0: null,
    $56_0: function($p0, $p1, $p2) {
        var $v_0 = $p0.getHiddenTableCellValue($p2, "sequencenumber"),
            $v_1 = $p0.getHiddenTableCellValue($p2, "oid"),
            $v_2 = $find("crmFormSelector"),
            $v_3 = "";
        if ($v_2) $v_3 = $v_2.get_currentFormId();
        var $v_4 = Mscrm.InlineEditDataServiceProxy.get_busy();
        if (!$v_4)
            Mscrm.InlineEditDataServiceProxy
                .updateSequenceNo($v_1, $v_3, $p1, $v_0, $p0.$$d_onRowSaveSuccess, $p0.$$d_onRowSaveFailure);
        else $p0.handleAutoSaveNotTriggered()
    },
    updateControlStyle: function(attributeMetadata, inlineEditGridControl) { return },
    gridRowSaveSuccessAction: function(grid, currentSaveRow, response) {
        this.$1l_0(grid, currentSaveRow, response, "sequencenumber");
        this.$Co_0(grid, currentSaveRow, false);
        return
    },
    $1l_0: function($p0, $p1, $p2, $p3) {
        if ($p3 in $p2) {
            var $v_0 = $p2[$p3], $v_1 = $v_0["raw"];
            if (!IsNull($v_1)) {
                var $v_2 = this.$1s_0.getAttributeType($p3);
                switch ($v_2) {
                case "int":
                    $p0.setTableCellValue($p1, $p3, parseInt($v_1), true);
                    $p0.setHiddenTableCellValue($p1, $p3, parseInt($v_1));
                    break;
                default:
                    $p0.setTableCellValue($p1, $p3, $v_1, true);
                    $p0.setHiddenTableCellValue($p1, $p3, $v_1);
                    break
                }
            }
        }
    },
    gridRowSaveFailureAction: function(grid, currentSaveRow, response) { return },
    initializeGridViewComplete: function(dataTable) { return },
    gridRowSave: function(grid, currentRow) {
        switch (grid.$H_0) {
        case 9301:
            this.$56_0(grid, "convertruleitem", currentRow);
            break;
        case 9401:
            this.$56_0(grid, "channelaccessprofileruleitem", currentRow);
            break;
        case 8199:
            this.$56_0(grid, "routingruleitem", currentRow);
            break;
        case 9751:
            this.$56_0(grid, "slaitem", currentRow);
            break;
        default:
            break
        }
    },
    gridPreInitialize: function(grid) {
        if (grid.$G_0) grid.$G_0 = this.$4p_0(grid.$0_0.GetParameter("viewid"));
        grid.$W_0 = true;
        this.$1s_0 = grid
    },
    $4p_0: function($p0) {
        for (var $v_0 = 0;
            $v_0 < this.$Z_0.length;
            $v_0++
        ) if ($p0.toLowerCase() === this.$Z_0[$v_0].toLowerCase()) return true;
        return false
    },
    getGridCellInlineControlMode: function(grid, currentRow, attributeName) { return "locked" },
    gridAttributeInitialValue: function(currentRow, grid, currentInitialValue, attributeMetadata) {
        return currentInitialValue
    },
    gridRowInitialize: function(grid, currentRow) { return },
    $Co_0: function($p0, $p1, $p2) {
        var $v_0 = false;
        if ($p2) {
            var $v_1 = this.$1s_0.getIconCellColumnIndex(), $v_2 = $P_CRM("td", $p1);
            if ($v_2.length > $v_1) {
                var $v_3 = $P_CRM("img", $v_2[$v_1]);
                if ($v_3.length > 0) {
                    var $v_4 = $v_3[0].getAttribute("src");
                    if (!IsNull($v_4)) $v_0 = !!$v_4.length
                }
            }
            $p0.setHiddenTableCellValue($p1, "hasError", $v_0 ? "1" : "0")
        } else $v_0 = $p0.getHiddenTableCellValue($p1, "hasError") === "1";
        this.$CP_0($p0, $v_0, $p1)
    },
    $CP_0: function($p0, $p1, $p2) {
        var $v_0 = $p1 ? window.CDNURL + "/_imgs/error/notif_icn_warn16.png" : "";
        $p0.addOrRemoveImage($p2, $v_0)
    },
    disposeGridRow: function(currentRow) { return }
};
Mscrm.ProductSuggestionsGrid = function() {};
Mscrm.ProductSuggestionsGrid.resetProductCount = function() { Mscrm.ProductSuggestionsGrid.$4w = 0 };
Mscrm.ProductSuggestionsGrid.AddProduct = function(gridId, rowId, productPriceLevelId) {
    var $v_0 = "";
    if (!Mscrm.GridControlLite.$6.isUsingCustomLineItem) {
        if (isNullOrEmptyString(gridId) || isNullOrEmptyString(rowId) || isNullOrEmptyString(productPriceLevelId)
        ) return;
        var $v_1 = $find(gridId);
        if (IsNull($v_1)) return;
        $v_0 = $v_1.getCellValue("productname", rowId)
    }
    Mscrm.ProductSuggestionsFlyOut.addProductsAndName(productPriceLevelId, $v_0);
    Mscrm.ProductSuggestionsGrid.$4w++;
    Mscrm.ProductSuggestionsFlyOut.showNotification(1, Mscrm.ProductSuggestionsGrid.$4w.toString());
    Mscrm.ProductSuggestionsFlyOut.clearNotifications(0)
};
Mscrm.SubGridContextualActions = function(entityTypeName, associationName) {
    this.$2r_0 = entityTypeName;
    this.$3n_0 = associationName
};
Mscrm.SubGridContextualActions.prototype = {
    $2r_0: null,
    $3n_0: null,
    isActionVisibleAndEnabled: function(commandBarData) {
        if (commandBarData.isControlVisible(this.get_commandBarCommandId(), this.get_commandBarControlId()) &&
            commandBarData.isControlEnabled(this
                .get_commandBarCommandId()))
            return commandBarData.isControlInCommandLayout(this.get_commandBarCommandId());
        return false
    },
    get_commandBarCommandId: function() {
        return String.format("{0}|{1}|SubGridStandard|{2}",
            this.$2r_0,
            this.$3n_0,
            this.get_commandBarCommandIdSuffix())
    },
    get_commandBarControlId: function() {
        return String.format("{0}|{1}|SubGridStandard|Mscrm.SubGrid.{2}.{3}",
            this.$2r_0,
            this.$3n_0,
            this.$2r_0,
            this.get_commandBarControlIdSuffix())
    }
};
Mscrm.AddExistingStandardAction = function(entityTypeName, associationName) {
    Mscrm.AddExistingStandardAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.AddExistingStandardAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.AddExistingRecordFromSubGridStandard" },
    get_commandBarControlIdSuffix: function() { return "AddExistingStandard" }
};
Mscrm.AddNewStandardAction = function(entityTypeName, associationName) {
    Mscrm.AddNewStandardAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.AddNewStandardAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.AddNewRecordFromSubGridStandard" },
    get_commandBarControlIdSuffix: function() { return "AddNewStandard" }
};
Mscrm.OpenAssociatedGridViewStandardAction = function(entityTypeName, associationName) {
    Mscrm.OpenAssociatedGridViewStandardAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.OpenAssociatedGridViewStandardAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.OpenAssociatedGridViewOnLiteGridStandard" },
    get_commandBarControlIdSuffix: function() { return "OpenAssociatedGridViewStandard" }
};
Mscrm.AddNewProductAction = function(entityTypeName, associationName) {
    Mscrm.AddNewProductAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.AddNewProductAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.AddNewProductRecordFromSubGridStandard" },
    get_commandBarControlIdSuffix: function() { return "AddNewProduct" }
};
Mscrm.AddExistingAssocAction = function(entityTypeName, associationName) {
    Mscrm.AddExistingAssocAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.AddExistingAssocAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.AddExistingRecordFromSubGridAssociated" },
    get_commandBarControlIdSuffix: function() { return "AddExistingAssoc" }
};
Mscrm.NewRecordAction = function(entityTypeName, associationName) {
    Mscrm.NewRecordAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.NewRecordAction.prototype = {
    get_commandBarCommandIdSuffix: function() { return "Mscrm.NewRecordFromGrid" },
    get_commandBarControlIdSuffix: function() { return "NewRecord" }
};
Mscrm.DeleteAction = function(entityTypeName, associationName) {
    Mscrm.DeleteAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.DeleteAction.prototype = {
    isActionVisibleAndEnabled: function(commandBarData) {
        if (commandBarData.isControlVisible(this
            .get_commandBarCommandId(),
            this.get_commandBarControlId()))
            return commandBarData.isControlInCommandLayout(this.get_commandBarCommandId());
        return false
    },
    get_commandBarCommandIdSuffix: function() { return "Mscrm.DeleteSelectedRecord" },
    get_commandBarControlIdSuffix: function() { return "Delete" }
};
Mscrm.RemoveAction = function(entityTypeName, associationName) {
    Mscrm.RemoveAction.initializeBase(this, [entityTypeName, associationName])
};
Mscrm.RemoveAction.prototype = {
    isActionVisibleAndEnabled: function(commandBarData) {
        if (commandBarData.isControlVisible(this
            .get_commandBarCommandId(),
            this.get_commandBarControlId()))
            return commandBarData.isControlInCommandLayout(this.get_commandBarCommandId());
        return false
    },
    get_commandBarCommandIdSuffix: function() { return "Mscrm.RemoveSelectedRecord" },
    get_commandBarControlIdSuffix: function() { return "Remove" }
};
Mscrm.TurboGridControl = function(element) {
    Mscrm.TurboGridControl.initializeBase(this, [element]);
    this.initializeCommandBarData();
    this.refreshContextualCommandBarButtons()
};
Mscrm.TurboGridControl.prototype = {
    $5A_5: false,
    get_recordId: function() { return getLinkedRecordId(this.get_id()) },
    add_onRefresh: function(value) {
        this.get_events().addHandler("OnRefresh", value);
        this.get_events().addHandler("OnTurboGridInitializeComplete", value)
    },
    remove_onRefresh: function(value) {
        this.get_events().removeHandler("OnRefresh", value);
        this.get_events().removeHandler("OnTurboGridInitializeComplete", value)
    },
    initializeCommandBarData: function() {
        if (this.$5A_5) return;
        var $v_0 = $find("crmRibbonData");
        if (!Mscrm.InternalUtilities.JSTypes.isNull(this.$7_4) &&
            Mscrm.InternalUtilities.JSTypes.isNull(this.$7_4.get_commandLayout()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            this.$7_4.set_commandLayout($v_0.get_commandLayout());
            this.$5A_5 = true
        }
    },
    initializeForTurboForm: function() {
        this.initializeInlineGrid(this.$63_3(), 0);
        this.initializeInlineGrid(this.isEntitlementChannelGrid(), 2);
        this.initializeInlineGrid(this.isDynamicPropertyOptionSetItemGrid(), 3);
        this.initializeInlineGrid(this.isMovableRowsGrid(), 1);
        this.initializeInlineGrid(this.isCategoryGrid(), 4);
        this.fireControlEvent("OnTurboGridInitializeComplete", Sys.EventArgs.Empty);
        this.processRowsPostRefresh()
    },
    setHeightForHiddenTabGridSpan: function() {
        var $v_0 = $find(this.get_id() + "_span");
        !IsNull($v_0) && $v_0.registerForHiddenGridControl()
    },
    getAddCommand: function() {
        this.initializeCommandBarData();
        return Mscrm.GridControlLite.prototype.getAddCommand.call(this)
    },
    getOpenAssociatedGridViewCommand: function() {
        this.initializeCommandBarData();
        return Mscrm.GridControlLite.prototype.getOpenAssociatedGridViewCommand.call(this)
    },
    getLinkedDataObject: function(container) { return getLinkedDataObject(container.get(0)) }
};
Mscrm.TurboInlineEditGridTemplates = function() {};
Mscrm.TurboInlineEditGridTemplates.$$cctor = function() {
    if (Mscrm.InternalUtilities.Utilities
        .isHighContrastEnabled())
        Mscrm.TurboInlineEditGridTemplates
            .$3l = '<span style="display:none;" class="ms-crm-Inline-WarningIcon" title=""><img src="' +
            window.CDNURL +
            '/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"><div id="{0}_w" class="ms-crm-Hidden-NoBehavior"></div></span><span id="{0}_warnSpan" style="display: none;" class="ms-crm-Inline-WarningIcon" title=""><img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"></span><span id="{0}_lock" style="display:none;" class="ms-crm-Inline-LockIcon"><img src="/_imgs/inlineedit/locked_white.png" class="ms-crm-ImageStrip-inlineedit_locked"></span>'
};
Mscrm.TurboInlineEditGridTemplates.$9U = function($p0, $p1, $p2) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid(), $v_1 = CrmEncodeDecode.CrmHtmlAttributeEncode($p0);
    switch ($p1.AttributeType) {
    case "picklist":
        var $v_2 = $p1;
        return String.format(Mscrm.TurboInlineEditGridTemplates.$4R, $v_0, $v_1, "style='overflow:visible'", $p2) +
            Mscrm.TurboInlineEditGridTemplates.$7V +
            String.format(Mscrm.TurboInlineEditGridTemplates.$7X, $v_0, $v_2.Options.length) +
            Mscrm.TurboInlineEditGridTemplates.$9u($v_2) +
            "</select></div>" +
            String.format(Mscrm.TurboInlineEditGridTemplates.$3l, $v_0, $v_1) +
            "</div></td>";
    case "money":
        return String.format(Mscrm.TurboInlineEditGridTemplates.$4R, $v_0, $v_1, "", $p2) +
            Mscrm.TurboInlineEditGridTemplates.$60 +
            String.format(Mscrm.TurboInlineEditGridTemplates.$7R, $v_0, $v_1) +
            String.format(Mscrm.TurboInlineEditGridTemplates.$3l, $v_0, $v_1) +
            "</div></td>";
    case "decimal":
    case "int":
    case "nvarchar":
        return String.format(Mscrm.TurboInlineEditGridTemplates.$4R, $v_0, $v_1, "", $p2) +
            Mscrm.TurboInlineEditGridTemplates.$60 +
            String.format(Mscrm.TurboInlineEditGridTemplates.$7y, $v_0, $v_1) +
            String.format(Mscrm.TurboInlineEditGridTemplates.$3l, $v_0, $v_1) +
            "</div></td>";
    default:
        return null
    }
};
Mscrm.TurboInlineEditGridTemplates.$9u = function($p0) {
    for (var $v_0 = "", $$arr_2 = $p0.Options, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4];
        $v_0 += String.format(Mscrm.TurboInlineEditGridTemplates.$7W, $v_1.Value, $v_1.Label)
    }
    return $v_0
};
Mscrm.GridPresenceView = function() {
    this.$$d_$Ax_0 = Function.createDelegate(this, this.$Ax_0);
    this.$$d_$9N_0 = Function.createDelegate(this, this.$9N_0);
    this.$$d_$9M_0 = Function.createDelegate(this, this.$9M_0);
    this.$$d_$B6_0 = Function.createDelegate(this, this.$B6_0);
    this.$$d_$B7_0 = Function.createDelegate(this, this.$B7_0);
    this.$S_0 = new Sys.EventHandlerList
};
Mscrm.GridPresenceView.prototype = {
    $2q_0: null,
    $n_0: null,
    $3m_0: null,
    $3Q_0: null,
    add_mouseOverEvent: function(value) { this.$S_0.addHandler("MouseOverEvent", value) },
    remove_mouseOverEvent: function(value) { this.$S_0.removeHandler("MouseOverEvent", value) },
    add_mouseOutEvent: function(value) { this.$S_0.addHandler("MouseOutEvent", value) },
    remove_mouseOutEvent: function(value) { this.$S_0.removeHandler("MouseOutEvent", value) },
    add_focusInEvent: function(value) { this.$S_0.addHandler("FocusInEvent", value) },
    remove_focusInEvent: function(value) { this.$S_0.removeHandler("FocusInEvent", value) },
    add_focusOutEvent: function(value) { this.$S_0.addHandler("FocusOutEvent", value) },
    remove_focusOutEvent: function(value) { this.$S_0.removeHandler("FocusOutEvent", value) },
    add_keyDownEvent: function(value) { this.$S_0.addHandler("KeyDownEvent", value) },
    remove_keyDownEvent: function(value) { this.$S_0.removeHandler("KeyDownEvent", value) },
    get_domHelperProxy: function() {
        if (IsNull(this.$2q_0)) this.$2q_0 = new Mscrm.Proxies.DomHelperProxy;
        return this.$2q_0
    },
    set_domHelperProxy: function(value) {
        this.$2q_0 = value;
        return value
    },
    get_element: function() { return this.$n_0 },
    set_element: function(value) {
        this.$n_0 = value;
        return value
    },
    get_ancestorAnchor: function() {
        if (IsNull(this.$3m_0)) {
            for (var $v_0 = this.$n_0.get_parentNode(), $v_1 = 0;
                $v_1 < 2 && !IsNull($v_0) && $v_0.get_tagName() !== "A" && $v_0.get_className() !== "ms-crm-List-Link";
                $v_1++) $v_0 = $v_0.get_parentNode();
            if ($v_0.get_tagName() !== "A" || $v_0.get_className() !== "ms-crm-List-Link") return null;
            this.$3m_0 = $v_0
        }
        return this.$3m_0
    },
    set_ancestorAnchor: function(value) {
        throw Error
            .invalidOperation("Mscrm.GridPresenceView.AncestorAnchor.set: Setter is used for unit testing and should not be consumed in production code.");
        return value
    },
    get_status: function() { return this.$3Q_0 },
    set_status: function(value) {
        this.$3Q_0 = value;
        return value
    },
    initialize: function() {
        this.$n_0.setAttribute("alt", this.$3Q_0.get_description());
        this.$n_0.setAttribute("title", this.$3Q_0.get_description());
        !IsNull(this.get_ancestorAnchor()) && this.$n_0.set_tabIndex(this.get_ancestorAnchor().get_tabIndex());
        this.get_domHelperProxy().addEventHandler(this.$n_0, "mouseover", this.$$d_$B7_0);
        this.get_domHelperProxy().addEventHandler(this.$n_0, "mouseout", this.$$d_$B6_0);
        this.get_domHelperProxy().addEventHandler(this.$n_0, "focusin", this.$$d_$9M_0);
        this.get_domHelperProxy().addEventHandler(this.$n_0, "focusout", this.$$d_$9N_0);
        this.get_domHelperProxy().addEventHandler(this.$n_0, "keydown", this.$$d_$Ax_0)
    },
    dispose: function() { this.get_domHelperProxy().clearEventHandlers(this.$n_0) },
    $3f_0: function($p0, $p1) {
        if (IsNull($p1)) return;
        var $v_0 = new Mscrm.GridPresenceViewEventParameters;
        $v_0.$1G_0 = $p0;
        $p1(this, $v_0)
    },
    $B7_0: function($p0) {
        var $v_0 = this.$S_0.getHandler("MouseOverEvent");
        this.$3f_0($p0, $v_0)
    },
    $B6_0: function($p0) {
        var $v_0 = this.$S_0.getHandler("MouseOutEvent");
        this.$3f_0($p0, $v_0)
    },
    $9M_0: function($p0) {
        var $v_0 = this.$S_0.getHandler("FocusInEvent");
        this.$3f_0($p0, $v_0)
    },
    $9N_0: function($p0) {
        var $v_0 = this.$S_0.getHandler("FocusOutEvent");
        this.$3f_0($p0, $v_0)
    },
    $Ax_0: function($p0) {
        var $v_0 = this.$S_0.getHandler("KeyDownEvent");
        this.$3f_0($p0, $v_0)
    }
};
Mscrm.GridPresenceViewEventParameters = function() {};
Mscrm.GridPresenceViewEventParameters.prototype = {
    $1G_0: null,
    get_domEvent: function() { return this.$1G_0 },
    set_domEvent: function(value) {
        this.$1G_0 = value;
        return value
    }
};
Mscrm.XrmControlRoutedGrid = function(gridControl, dataSetControl) {
    Mscrm.XrmControlRoutedGrid.initializeBase(this);
    this.$3_2 = gridControl;
    this.$1q_2 = dataSetControl
};
Mscrm.XrmControlRoutedGrid.findCurrentGridControl = function(gridControl, dataSetControl) {
    if (Xrm.Internal.isFeatureEnabled("FCB.DataSetControl") &&
        !_Script.isNullOrUndefined(dataSetControl) &&
        dataSetControl.get_isActive()) return dataSetControl;
    return gridControl
};
Mscrm.XrmControlRoutedGrid.prototype = {
    $3_2: null,
    $1q_2: null,
    get_currentGridControl: function() {
        return Mscrm.XrmControlRoutedGrid.findCurrentGridControl(this.$3_2, this.$1q_2).getGrid()
    }
};
Mscrm.XrmControlGridWrapper = function(gridControl) {
    Mscrm.XrmControlGridWrapper.initializeBase(this);
    this.$3_1 = gridControl
};
Mscrm.XrmControlGridWrapper.prototype = {
    $3_1: null,
    getTotalRecordCount: function() { return this.$3_1.get_totalRecordCount() },
    getRows: function() { return this.$6w_1(false) },
    getSelectedRows: function() { return this.$6w_1(true) },
    getFilter: function() { return new Mscrm.XrmGridFilterWrapper(this.$3_1) },
    $6w_1: function($p0) {
        for (var $v_0 = new Xrm.XrmGridRows,
            $v_1 = $p0 ? this.$3_1.get_selectedRecords() : this.$3_1.get_allRecords(),
            $$arr_3 = $v_1,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            $v_0.add(new Mscrm.XrmGridRowWrapper(this.$3_1, $v_2))
        }
        return $v_0
    },
    setParameter: function(key, value) { this.$3_1.SetParameter(key, value) },
    showLoadingMessage: function() { this.$3_1.ShowLoadingMessage() },
    addOnRecordSelect: function(handler) {},
    removeOnRecordSelect: function(handler) {},
    fireOnRecordSelect: function() {}
};
Mscrm.XrmGridRowWrapper = function($p0, $p1) {
    Mscrm.XrmGridRowWrapper.initializeBase(this);
    this.$3_1 = $p0;
    this.$o_1 = $p1;
    this.data = new Mscrm.XrmGridDataWrapper(this.$3_1, this.$o_1)
};
Mscrm.XrmGridRowWrapper.prototype = { $3_1: null, $o_1: null, getKey: function() { return this.$o_1.Id } };
Mscrm.XrmGridEntityAttributeWrapper = function($p0, $p1, $p2) {
    Mscrm.XrmGridEntityAttributeWrapper.initializeBase(this);
    this.$3_1 = $p0;
    this.$3v_1 = $p1;
    this.$5S_1 = $p2
};
Mscrm.XrmGridEntityAttributeWrapper.prototype = {
    $3_1: null,
    $3v_1: null,
    $5S_1: null,
    getName: function() { return this.$5S_1 },
    getParent: function() { return new Mscrm.XrmGridEntityWrapper(this.$3_1, this.$3v_1) },
    getValue: function() { return this.$3_1.getCellValueReturnObject(this.getName(), this.$3v_1.Id, false) },
    getKey: function() { return this.getName() },
    addOnChange: function(handler) {},
    fireOnChange: function() {},
    getAttributeType: function() { return null },
    getFormat: function() { return null },
    getIsDirty: function() { return false },
    getIsValid: function() { return false },
    getRequiredLevel: function() { return null },
    getSubmitMode: function() { return null },
    getUserPrivilege: function() { return null },
    removeOnChange: function(handler) {},
    resetInitialValue: function(value) {},
    setRequiredLevel: function(requiredLevel) {},
    setSubmitMode: function(mode) {},
    setValue: function(value) {}
};
Mscrm.XrmGridEntityWrapper = function($p0, $p1) {
    Mscrm.XrmGridEntityWrapper.initializeBase(this);
    this.$3_1 = $p0;
    this.$o_1 = $p1;
    this.attributes = new Xrm.XrmEntityAttributes;
    for (var $$arr_2 = this.$3_1
                 .getColumnNames(),
        $$len_3 = $$arr_2.length,
        $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_0 = $$arr_2[$$idx_4];
        this.attributes.add(new Mscrm.XrmGridEntityAttributeWrapper(this.$3_1, this.$o_1, $v_0))
    }
};
Mscrm.XrmGridEntityWrapper.prototype = {
    $3_1: null,
    $o_1: null,
    getEntityName: function() { return this.$o_1.TypeName },
    getId: function() { return this.$o_1.Id },
    getPrimaryAttributeValue: function() {
        var $v_0 = this.$3_1.$2_3.get_primaryFieldName();
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return "";
        else return this.$3_1.getCellValue($v_0, this.$o_1.Id)
    },
    setRecordId: function(createRecordId) {},
    addOnSave: function(handler, system) {},
    getDataXml: function() { return null },
    getIsDirty: function() { return false },
    isInHierarchy: function() { return false },
    removeOnSave: function(handler) {},
    save: function(action) {}
};
Mscrm.XrmGridFilterWrapper = function($p0) {
    Mscrm.XrmGridFilterWrapper.initializeBase(this);
    this.$3_1 = $p0
};
Mscrm.XrmGridFilterWrapper.prototype = {
    $3_1: null,
    canEnableFilters: function() {
        if (!IsNull(this.$3_1)) {
            var $v_0 = $find(this.$3_1.get_id() + "_filterSet");
            if (!IsNull($v_0)) return $v_0.canEnableFilters()
        }
        return false
    },
    isFilterEnabled: function() {
        if (!IsNull(this.$3_1)) {
            var $v_0 = $find(this.$3_1.get_id() + "_filterSet");
            if (!IsNull($v_0)) return $v_0.isFilterEnabled()
        }
        return false
    }
};
Mscrm.XrmGridDataWrapper = function($p0, $p1) {
    Mscrm.XrmGridDataWrapper.initializeBase(this);
    this.$3_1 = $p0;
    this.$o_1 = $p1;
    this.entity = new Mscrm.XrmGridEntityWrapper(this.$3_1, this.$o_1)
};
Mscrm.XrmGridDataWrapper.prototype = { $3_1: null, $o_1: null };
Mscrm.XrmChartWrapper = function(gridControl) {
    Mscrm.XrmChartWrapper.initializeBase(this);
    var $v_0 = gridControl.get_id() + "_visualizationCompositeControl";
    this.$3q_1 = $find($v_0)
};
Mscrm.XrmChartWrapper.prototype = {
    $3q_1: null,
    getPaneMode: function() {
        if (!IsNull(this.$3q_1)) return this.$3q_1.get_chartPaneMode();
        return 4
    }
};
Mscrm.XrmHomePageGridControlWrapper = function(gridControl, dataSetControl) {
    Mscrm.XrmHomePageGridControlWrapper.initializeBase(this);
    this.$3_2 = gridControl;
    this.$1q_2 = dataSetControl
};
Mscrm.XrmHomePageGridControlWrapper.prototype = {
    $1q_2: null,
    $3_2: null,
    get_currentGridControl: function() {
        return Mscrm.XrmControlRoutedGrid.findCurrentGridControl(this.$3_2, this.$1q_2)
    },
    getGrid: function() { return new Mscrm.XrmControlRoutedGrid(this.$3_2, this.$1q_2) },
    getEntityName: function() { return this.get_currentGridControl().getEntityName() },
    getChart: function() { return this.get_currentGridControl().getChart() },
    getViewSelector: function() { return this.get_currentGridControl().getViewSelector() },
    exportToExcel: function() { this.get_currentGridControl().exportToExcel() },
    refresh: function() { this.get_currentGridControl().refresh() },
    clearNotifications: function() { return false },
    clearNotification: function(uniqueId) { return false },
    setNotification: function(message, uniqueId) { return false },
    addNotification: function(notification) { return false },
    getControlType: function() { return "grid" },
    getParent: function() { return null },
    setFocus: function() {},
    getLabel: function() { return "" },
    getName: function() { return this.$3_2.get_id() },
    getVisible: function() { return true },
    setLabel: function(label) {},
    setVisible: function(visible) {}
};
Mscrm.XrmViewSelectorWrapper = function(gridControl) {
    Mscrm.XrmViewSelectorWrapper.initializeBase(this);
    this.$3_1 = gridControl;
    var $v_0 = gridControl.get_id() + "_SavedQuerySelector";
    this.$L_1 = $find($v_0);
    if (IsNull(this.$L_1)) {
        var $v_1 = gridControl.get_id() + "_SavedNewQuerySelector";
        this.$L_1 = $find($v_1)
    }
};
Mscrm.XrmViewSelectorWrapper.$6t = function($p0) {
    var $v_0 = Number.parseInvariant($p0);
    return Xrm.Internal.getEntityName($v_0)
};
Mscrm.XrmViewSelectorWrapper.prototype = {
    $L_1: null,
    $3_1: null,
    setCurrentView: function(view) { !IsNull(this.$L_1) && this.$L_1.setSelectedViewItemInMenu(view.id) },
    getCurrentView: function() {
        var $v_0 = new Xrm.LookupObject;
        if (IsNull(this.$L_1)) {
            $v_0.id = this.$3_1.GetParameter("viewid");
            $v_0.entityType = Mscrm.XrmViewSelectorWrapper.$6t(this.$3_1.GetParameter("viewtype"));
            $v_0.name = this.$3_1.GetParameter("viewTitle")
        } else {
            $v_0.id = this.$L_1.selectedViewId;
            $v_0.entityType = Mscrm.XrmViewSelectorWrapper.$6t(this.$L_1.selectedViewType.toString());
            $v_0.name = this.$L_1.selectedViewName
        }
        return $v_0
    },
    isVisible: function() { return IsNull(this.$L_1) ? false : this.$L_1.get_visible() }
};
Type.registerNamespace("Mscrm.TurboForm.Common");
Mscrm.TurboForm.Common.FormControlClassIdString = function() {};
Mscrm.TurboForm.Common.FormControlClassId = function() {};
Mscrm.BeforeFormLoadEventArgs.registerClass("Mscrm.BeforeFormLoadEventArgs", Sys.EventArgs);
Mscrm.AppGridDefaultDataControl.registerClass("Mscrm.AppGridDefaultDataControl", Mscrm.CrmUIControl);
Mscrm.AppGridFilterContainer.registerClass("Mscrm.AppGridFilterContainer", Mscrm.CrmUIControl);
Mscrm.AppGridFilterSelector.registerClass("Mscrm.AppGridFilterSelector", Mscrm.CrmUIControl);
Mscrm.AppGridJumpBar.registerClass("Mscrm.AppGridJumpBar", Mscrm.CrmUIControl);
Mscrm.ColumnResizeControl.registerClass("Mscrm.ColumnResizeControl", Mscrm.CrmUIControl);
Mscrm.GridControl.registerClass("Mscrm.GridControl",
    Mscrm.CrmUIControl,
    Mscrm.IExtendedGridControl,
    Mscrm.IGridControl,
    Mscrm.IUIControl,
    Mscrm.IRibbonSelectionControl,
    Xrm.Interfaces.IXrmSubGridControl,
    Xrm.Interfaces.IXrmGridControl,
    Mscrm.IVisualizationChangable);
Mscrm.DynamicPropertyOptionSetItemInlineEditGrid
    .registerClass("Mscrm.DynamicPropertyOptionSetItemInlineEditGrid", null, Mscrm.IEntityInlineEditGrid);
Mscrm.CategoryInlineEditGrid.registerClass("Mscrm.CategoryInlineEditGrid", null, Mscrm.IEntityInlineEditGrid);
Mscrm.EntitlementChannelInlineEditGrid.registerClass("Mscrm.EntitlementChannelInlineEditGrid",
    null,
    Mscrm.IEntityInlineEditGrid);
Mscrm.DynamicPropertiesListFlyOut.registerClass("Mscrm.DynamicPropertiesListFlyOut", Mscrm.CrmUIControl);
Mscrm.InlineEditDropDownFlyOut.registerClass("Mscrm.InlineEditDropDownFlyOut", Mscrm.CrmUIControl);
Mscrm.QuickAddFlyOut.registerClass("Mscrm.QuickAddFlyOut", Mscrm.CrmUIControl);
Mscrm.ProductGridFlyOut.registerClass("Mscrm.ProductGridFlyOut", Mscrm.CrmUIControl);
Mscrm.LineItemProducts.registerClass("Mscrm.LineItemProducts");
Mscrm.LineItemProductDetail.registerClass("Mscrm.LineItemProductDetail");
Mscrm.LineItemMetadata.registerClass("Mscrm.LineItemMetadata");
Mscrm.ProductSuggestionsFlyOut.registerClass("Mscrm.ProductSuggestionsFlyOut", Mscrm.CrmUIControl);
Mscrm.BeforeRefreshEventArgs.registerClass("Mscrm.BeforeRefreshEventArgs", Sys.EventArgs);
Mscrm.ChangePageEventArgs.registerClass("Mscrm.ChangePageEventArgs", Sys.EventArgs);
Mscrm.GridControlLite.registerClass("Mscrm.GridControlLite", Mscrm.GridControl);
Mscrm.GridSizeCalculator.registerClass("Mscrm.GridSizeCalculator", Mscrm.CrmUIBehavior);
Mscrm.GridSpanControl.registerClass("Mscrm.GridSpanControl",
    Mscrm.CrmUIControl,
    Mscrm.IRibbonSelectionControlProxy,
    Mscrm.IResetLayout);
Mscrm.GridViewSelector.registerClass("Mscrm.GridViewSelector", Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControlProxy);
Mscrm.LayoutPageParameters.registerClass("Mscrm.LayoutPageParameters");
Mscrm.QuickFindControl.registerClass("Mscrm.QuickFindControl", Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControlProxy);
Mscrm.SortColumns.registerClass("Mscrm.SortColumns");
Mscrm.SortColumnInfo.registerClass("Mscrm.SortColumnInfo");
Mscrm.TurboControlMode.registerClass("Mscrm.TurboControlMode");
Mscrm.ProductTypeCode.registerClass("Mscrm.ProductTypeCode");
Mscrm.ProductEntityInlineEditGrid.registerClass("Mscrm.ProductEntityInlineEditGrid", null, Mscrm.IEntityInlineEditGrid);
Mscrm.SaveQueueInlineEdit.registerClass("Mscrm.SaveQueueInlineEdit");
Mscrm.InlineEditGrid.registerClass("Mscrm.InlineEditGrid");
Mscrm.MovableRowsGrid.registerClass("Mscrm.MovableRowsGrid", null, Mscrm.IEntityInlineEditGrid);
Mscrm.ProductSuggestionsGrid.registerClass("Mscrm.ProductSuggestionsGrid");
Mscrm.SubGridContextualActions.registerClass("Mscrm.SubGridContextualActions", null, Mscrm.ISubGridContextualActions);
Mscrm.AddExistingStandardAction.registerClass("Mscrm.AddExistingStandardAction", Mscrm.SubGridContextualActions);
Mscrm.AddNewStandardAction.registerClass("Mscrm.AddNewStandardAction", Mscrm.SubGridContextualActions);
Mscrm.OpenAssociatedGridViewStandardAction.registerClass("Mscrm.OpenAssociatedGridViewStandardAction",
    Mscrm.SubGridContextualActions);
Mscrm.AddNewProductAction.registerClass("Mscrm.AddNewProductAction", Mscrm.SubGridContextualActions);
Mscrm.AddExistingAssocAction.registerClass("Mscrm.AddExistingAssocAction", Mscrm.SubGridContextualActions);
Mscrm.NewRecordAction.registerClass("Mscrm.NewRecordAction", Mscrm.SubGridContextualActions);
Mscrm.DeleteAction.registerClass("Mscrm.DeleteAction", Mscrm.SubGridContextualActions);
Mscrm.RemoveAction.registerClass("Mscrm.RemoveAction", Mscrm.SubGridContextualActions);
Mscrm.TurboGridControl.registerClass("Mscrm.TurboGridControl", Mscrm.GridControlLite);
Mscrm.TurboInlineEditGridTemplates.registerClass("Mscrm.TurboInlineEditGridTemplates");
Mscrm.GridPresenceView.registerClass("Mscrm.GridPresenceView", null, Mscrm.IGridPresenceView, Sys.IDisposable);
Mscrm.GridPresenceViewEventParameters.registerClass("Mscrm.GridPresenceViewEventParameters");
Mscrm.XrmControlRoutedGrid.registerClass("Mscrm.XrmControlRoutedGrid", Xrm.XrmControlRoutedGrid);
Mscrm.XrmControlGridWrapper.registerClass("Mscrm.XrmControlGridWrapper", Xrm.XrmControlGrid);
Mscrm.XrmGridRowWrapper.registerClass("Mscrm.XrmGridRowWrapper", Xrm.XrmGridRow);
Mscrm.XrmGridEntityAttributeWrapper.registerClass("Mscrm.XrmGridEntityAttributeWrapper", Xrm.XrmEntityAttribute);
Mscrm.XrmGridEntityWrapper.registerClass("Mscrm.XrmGridEntityWrapper", Xrm.XrmEntity);
Mscrm.XrmGridFilterWrapper.registerClass("Mscrm.XrmGridFilterWrapper", Xrm.XrmGridFilter);
Mscrm.XrmGridDataWrapper.registerClass("Mscrm.XrmGridDataWrapper", Xrm.XrmGridData);
Mscrm.XrmChartWrapper.registerClass("Mscrm.XrmChartWrapper", Xrm.XrmChart);
Mscrm.XrmHomePageGridControlWrapper.registerClass("Mscrm.XrmHomePageGridControlWrapper",
    Xrm.XrmControl,
    Xrm.Interfaces.IXrmGridControl);
Mscrm.XrmViewSelectorWrapper.registerClass("Mscrm.XrmViewSelectorWrapper", Xrm.XrmViewSelector);
Mscrm.TurboForm.Common.FormControlClassIdString.registerClass("Mscrm.TurboForm.Common.FormControlClassIdString");
Mscrm.TurboForm.Common.FormControlClassId.registerClass("Mscrm.TurboForm.Common.FormControlClassId");
Mscrm.GridControl.onRefreshEventName = "OnRefresh";
Mscrm.GridControl
    .emptyGridRefreshMessageTemplate =
    '<div class="ms-crm-grid-Title-Data-Lite">{0}</div><div style="height: 16px;"></div>';
Mscrm.GridControl.gridTypeNone = 0;
Mscrm.GridControl.hompageGrid = 1;
Mscrm.GridControl.associatedGrid = 2;
Mscrm.GridControl.inlineSubGrid = 3;
Mscrm.DynamicPropertiesListFlyOut.$V = false;
Mscrm.DynamicPropertiesListFlyOut.$Y = null;
Mscrm.DynamicPropertiesListFlyOut.$2v = null;
Mscrm.DynamicPropertiesListFlyOut.$3T = null;
Mscrm.DynamicPropertiesListFlyOut.$2f = null;
Mscrm.DynamicPropertiesListFlyOut.control = null;
Mscrm.InlineEditDropDownFlyOut.$5V = null;
Mscrm.ProductSuggestionsFlyOut.$j = [];
Mscrm.ProductSuggestionsFlyOut.$1v = [];
Mscrm.ProductSuggestionsFlyOut.$27 = null;
Mscrm.ProductSuggestionsFlyOut.$3N = null;
Mscrm.GridControlLite.$6 = null;
Mscrm.TurboControlMode.locked = "locked";
Mscrm.TurboControlMode.normal = "normal";
Mscrm.TurboControlMode.alwaysEdit = "alwaysedit";
Mscrm.TurboControlMode.deactivated = "deactivated";
Mscrm.ProductTypeCode.none = "0";
Mscrm.ProductTypeCode.product = "1";
Mscrm.ProductTypeCode.bundle = "2";
Mscrm.ProductTypeCode.requiredBundleItem = "3";
Mscrm.ProductTypeCode.optionalBundleItem = "4";
Mscrm.ProductEntityInlineEditGrid.$12 = -1;
Mscrm.ProductEntityInlineEditGrid.$R = 0;
Mscrm.ProductEntityInlineEditGrid.$Z = [
    "{A1FAA578-24AF-4ED6-B36D-47842E7E9B1E}", "{01010DE7-749E-4FE6-8037-ACA560A4FCBE}",
    "{9AC6A187-5FB8-445C-914A-3B4A33C0017E}", "{CF23F371-4C2E-44DF-BCEF-C8971249BBE0}"
];
Mscrm.ProductEntityInlineEditGrid.$1n = [];
Mscrm.ProductEntityInlineEditGrid.$30 = null;
Mscrm.ProductSuggestionsGrid.$4w = 0;
Mscrm.TurboInlineEditGridTemplates
    .$3l = '<span style="display:none;" class="ms-crm-Inline-WarningIcon" title=""><img src="' +
    window.CDNURL +
    '/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"><div id="{0}_w" class="ms-crm-Hidden-NoBehavior"></div></span><span id="{0}_warnSpan" style="display: none;" class="ms-crm-Inline-WarningIcon" title=""><img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error"></span><span id="{0}_lock" style="display:none;" class="ms-crm-Inline-LockIcon"><img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_locked"></span>';
Mscrm.TurboInlineEditGridTemplates
    .$60 =
    '<div class="ms-crm-Inline-Value" style="display: block;"><span><div class="ms-crm-Inline-GradientMask"></div></span></div>';
Mscrm.TurboInlineEditGridTemplates
    .$7V =
    '<div class="ms-crm-Inline-Value" style="display: block;"><span>--<div class="ms-crm-Inline-GradientMask"></div></span></div>';
Mscrm.TurboInlineEditGridTemplates
    .$7R =
    '<div class="ms-crm-Inline-Edit" style="display:none;"><table id="{0}_i_table" class="ms-crm-CurrencyTable-Refresh" cellpadding="0" cellspacing="0" direction="ltr" style="background-color:rgb(255, 255, 255);"><tbody><tr><td class="ms-crm-CurrencySymbol-Refresh"><span tabindex="-1" class="ms-crm-Money-CurrencySymbol"></span></td><td><div style="white-space:normal;"><input type="text" id="{0}_i" attrname="{1}" class="ms-crm-Money ms-crm-InlineInput" aria-labelledby="{1}_c"></div></td></tr></tbody></table></div>';
Mscrm.TurboInlineEditGridTemplates
    .$7y =
    '<div class="ms-crm-Inline-Edit" style="display:none;"><input type="text" id="{0}_i" class="ms-crm-InlineInput" aria-labelledby="{0}_c {0}_w" attrname="{1}"></div>';
Mscrm.TurboInlineEditGridTemplates
    .$7X =
    '<div class="ms-crm-Inline-Edit ms-crm-Inline-OptionSet noScroll ms-crm-Inline-HideByZeroHeight" style="display: none;"><select id="{0}_i" class="ms-crm-SelectBox ms-crm-Inline-OptionSet-AutoOpen ms-crm-Inline-HideByZeroHeight-Ie7" aria-labelledby="{0}_c {0}_w" size="{1}" controlmode="normal" defaultvalue="">';
Mscrm.TurboInlineEditGridTemplates.$7W = '<option value="{0}" title="{1}">{1}</option>';
Mscrm.TurboInlineEditGridTemplates
    .$4R =
    '<td class="ms-crm-List-DataCell-Lite" id="{0}_d" turboformcontrol="true" {2}><div id="{0}" data-attributename="{1}" data-fdeid="PrimaryEntity" data-layout="0" aria-describedby="{1}_c" title="" tabindex="{3}" class="ms-crm-Inline-Edit-SubGrid">';
Mscrm.TurboInlineEditGridTemplates.$$cctor();
Mscrm.TurboForm.Common.FormControlClassIdString.textBoxControl = "{4273EDBD-AC1D-40D3-9FB2-095C621B552D}";
Mscrm.TurboForm.Common.FormControlClassIdString.tickerControl = "{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}";
Mscrm.TurboForm.Common.FormControlClassIdString.urlControl = "{71716B6C-711E-476C-8AB8-5D11542BFB47}";
Mscrm.TurboForm.Common.FormControlClassIdString.phoneNumberControl = "{8C10015A-B339-4982-9474-A95FE05631A5}";
Mscrm.TurboForm.Common.FormControlClassIdString.emailAddressControl = "{ADA2203E-B4CD-49BE-9DDF-234642B43B52}";
Mscrm.TurboForm.Common.FormControlClassIdString.radioControl = "{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}";
Mscrm.TurboForm.Common.FormControlClassIdString.lookupControl = "{270BD3DB-D9AF-4782-9025-509E298DEC0A}";
Mscrm.TurboForm.Common.FormControlClassIdString.dateTimeControl = "{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}";
Mscrm.TurboForm.Common.FormControlClassIdString.integerControl = "{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}";
Mscrm.TurboForm.Common.FormControlClassIdString.moneyControl = "{533B9E00-756B-4312-95A0-DC888637AC78}";
Mscrm.TurboForm.Common.FormControlClassIdString.floatControl = "{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}";
Mscrm.TurboForm.Common.FormControlClassIdString.decimalControl = "{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}";
Mscrm.TurboForm.Common.FormControlClassIdString.textAreaControl = "{E0DECE4B-6FC8-4A8F-A065-082708572369}";
Mscrm.TurboForm.Common.FormControlClassIdString.picklistControl = "{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}";
Mscrm.TurboForm.Common.FormControlClassIdString.hiddenInputControl = "{5546E6CD-394C-4BEE-94A8-4425E17EF6C6}";
Mscrm.TurboForm.Common.FormControlClassIdString.gridControl = "{E7A81278-8635-4D9E-8D4D-59480B391C5B}";
Mscrm.TurboForm.Common.FormControlClassIdString.checkBoxControl = "{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}";
Mscrm.TurboForm.Common.FormControlClassIdString.frameControl = "{FD2A7985-3187-444E-908D-6624B21F69C0}";
Mscrm.TurboForm.Common.FormControlClassIdString.socialInsightControl = "{86B9E25E-695E-4FEF-AC69-F05CFA96739C}";
Mscrm.TurboForm.Common.FormControlClassIdString.orgInsightsControl = "{76B9E25E-695E-4FEF-AC69-F05CFA96739C}";
Mscrm.TurboForm.Common.FormControlClassIdString.durationControl = "{AA987274-CE4E-4271-A803-66164311A958}";
Mscrm.TurboForm.Common.FormControlClassIdString.regardingControl = "{F3015350-44A2-4AA0-97B5-00166532B5E9}";
Mscrm.TurboForm.Common.FormControlClassIdString.partyListControl = "{CBFB742C-14E7-4A17-96BB-1A13F7F64AA2}";
Mscrm.TurboForm.Common.FormControlClassIdString.notesControl = "{06375649-C143-495E-A496-C962E5B4488E}";
Mscrm.TurboForm.Common.FormControlClassIdString.timeZonePicklistControl = "{7C624A0B-F59E-493D-9583-638D34759266}";
Mscrm.TurboForm.Common.FormControlClassIdString.languagePicker = "{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}";
Mscrm.TurboForm.Common.FormControlClassIdString.accessTeamEntityPicker = "{3F4E2A56-F102-4B4D-AB9C-F1574CA5BFDA}";
Mscrm.TurboForm.Common.FormControlClassIdString.kbViewerControl = "{A62B6FA9-169E-406C-B1AA-EAB828CB6026}";
Mscrm.TurboForm.Common.FormControlClassIdString.picklistStatusControl = "{5D68B988-0661-4DB2-BC3E-17598AD3BE6C}";
Mscrm.TurboForm.Common.FormControlClassIdString.emailBodyControl = "{6F3FB987-393B-4D2D-859F-9D0F0349B6AD}";
Mscrm.TurboForm.Common.FormControlClassIdString.picklistLookupControl = "{2305E33A-BAD3-4022-9E15-1856CF218333}";
Mscrm.TurboForm.Common.FormControlClassIdString.relationshipRolePicklist = "{5F986642-5961-4D9F-AB5E-643D71E231E9}";
Mscrm.TurboForm.Common.FormControlClassIdString.relatedInformationControl = "{163B90A6-EB64-49D2-9DF8-3C84A4F0A0F8}";
Mscrm.TurboForm.Common.FormControlClassIdString.coverPagePicklistControl = "{4168A05C-D857-46AF-8457-5BB47EB04EA1}";
Mscrm.TurboForm.Common.FormControlClassIdString.mailMergeLanguagePicker = "{B634828E-C390-444A-AFE6-E07315D9D970}";
Mscrm.TurboForm.Common.FormControlClassIdString.connectionControl = "{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}";
Mscrm.TurboForm.Common.FormControlClassIdString
    .connectionRoleObjectTypeListControl = "{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}";
Mscrm.TurboForm.Common.FormControlClassIdString.mapsControl = "{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}";
Mscrm.TurboForm.Common.FormControlClassIdString.mapLinkControl = "{91DC0675-C8B9-4421-B1E0-261CEBF02BAC}";
Mscrm.TurboForm.Common.FormControlClassIdString.webResourceHtmlControl = "{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}";
Mscrm.TurboForm.Common.FormControlClassIdString.webResourceImageControl = "{587CDF98-C1D5-4BDE-8473-14A0BC7644A7}";
Mscrm.TurboForm.Common.FormControlClassIdString
    .webResourceSilverlightControl = "{080677DB-86EC-4544-AC42-F927E74B491F}";
Mscrm.TurboForm.Common.FormControlClassIdString.reportControl = "{A28F441B-916C-4865-87FD-0C5D53BD59C9}";
Mscrm.TurboForm.Common.FormControlClassIdString.articleContentControl = "{F02EF977-2564-4B9A-B2F0-DF083D8A019B}";
Mscrm.TurboForm.Common.FormControlClassIdString.processControl = "{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}";
Mscrm.TurboForm.Common.FormControlClassIdString.activitiesWallControl = "{6636847D-B74D-4994-B55A-A6FAF97ECEA2}";
Mscrm.TurboForm.Common.FormControlClassIdString.quickFormControl = "{69AF7DCA-2E3B-4EE7-9201-0DA731DD2413}";
Mscrm.TurboForm.Common.FormControlClassIdString.quickFormCollectionControl = "{5C5600E0-1D6E-4205-A272-BE80DA87FD42}";
Mscrm.TurboForm.Common.FormControlClassIdString.linkControl = "{DFDF1CDE-837B-4AC9-98CF-AC74361FD89D}";
Mscrm.TurboForm.Common.FormControlClassIdString.compositionLinkControl = "{DB1284EF-9FFC-4E99-B382-0CC082FE2364}";
Mscrm.TurboForm.Common.FormControlClassIdString.errorStatusControl = "{F4C16ECA-CA81-4E39-9448-834B8378721E}";
Mscrm.TurboForm.Common.FormControlClassIdString.activitiesContainerControl = "{C72511AB-84E5-4FB7-A543-25B4FC01E83E}";
Mscrm.TurboForm.Common.FormControlClassIdString.accessPrivilegeControl = "{F93A31B2-99AC-4084-8EC2-D4027C31369A}";
Mscrm.TurboForm.Common.FormControlClassIdString.timerControl = "{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}";
Mscrm.TurboForm.Common.FormControlClassIdString.dynamicPropertyListControl = "{6896F004-B17A-4202-861E-8B7EA2080E0B}";
Mscrm.TurboForm.Common.FormControlClassIdString.buttonControl = "{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}";
Mscrm.TurboForm.Common.FormControlClassIdString.searchWidget = "{E616A57F-20E0-4534-8662-A101B5DDF4E0}";
Mscrm.TurboForm.Common.FormControlClassIdString
    .emailRecipientActivityControl = "{26E9760F-7454-40DE-BB07-F6DCCCB82040}";
Mscrm.TurboForm.Common.FormControlClassIdString.labelControl = "{39354E4A-5015-4D74-8031-EA9EB73A1322}";
Mscrm.TurboForm.Common.FormControlClassIdString.customControl = "{F9A8A302-114E-466A-B582-6771B2AE0D92}";
Mscrm.TurboForm.Common.FormControlClassIdString.editFilterControl = "{1479835F-F852-4679-B864-C6892A2844C9}";
Mscrm.TurboForm.Common.FormControlClassIdString.richEditorControl = "{F94DB24F-263D-44A7-B38E-A35E9854812B}";
Mscrm.TurboForm.Common.FormControlClassIdString.powerBIControl = "{8C54228C-1B25-4909-A12A-F2B968BB0D62}";
Mscrm.TurboForm.Common.FormControlClassIdString
    .emailEngagementActionsControl = "{F454228D-1D25-4319-E12F-D27968BC0234}";
Mscrm.TurboForm.Common.FormControlClassIdString.aciControl = "{C8BFBBEF-6851-4401-A0CC-7450062FE085}";
Mscrm.TurboForm.Common.FormControlClassId.textBoxControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{4273EDBD-AC1D-40D3-9FB2-095C621B552D}");
Mscrm.TurboForm.Common.FormControlClassId.tickerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{1E1FC551-F7A8-43AF-AC34-A8DC35C7B6D4}");
Mscrm.TurboForm.Common.FormControlClassId.urlControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{71716B6C-711E-476C-8AB8-5D11542BFB47}");
Mscrm.TurboForm.Common.FormControlClassId.phoneNumberControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{8C10015A-B339-4982-9474-A95FE05631A5}");
Mscrm.TurboForm.Common.FormControlClassId.emailAddressControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{ADA2203E-B4CD-49BE-9DDF-234642B43B52}");
Mscrm.TurboForm.Common.FormControlClassId.radioControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{67FAC785-CD58-4F9F-ABB3-4B7DDC6ED5ED}");
Mscrm.TurboForm.Common.FormControlClassId.lookupControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{270BD3DB-D9AF-4782-9025-509E298DEC0A}");
Mscrm.TurboForm.Common.FormControlClassId.dateTimeControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{5B773807-9FB2-42DB-97C3-7A91EFF8ADFF}");
Mscrm.TurboForm.Common.FormControlClassId.integerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{C6D124CA-7EDA-4A60-AEA9-7FB8D318B68F}");
Mscrm.TurboForm.Common.FormControlClassId.moneyControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{533B9E00-756B-4312-95A0-DC888637AC78}");
Mscrm.TurboForm.Common.FormControlClassId.floatControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{0D2C745A-E5A8-4C8F-BA63-C6D3BB604660}");
Mscrm.TurboForm.Common.FormControlClassId.decimalControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{C3EFE0C3-0EC6-42BE-8349-CBD9079DFD8E}");
Mscrm.TurboForm.Common.FormControlClassId.textAreaControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{E0DECE4B-6FC8-4A8F-A065-082708572369}");
Mscrm.TurboForm.Common.FormControlClassId.picklistControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{3EF39988-22BB-4F0B-BBBE-64B5A3748AEE}");
Mscrm.TurboForm.Common.FormControlClassId.hiddenInputControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{5546E6CD-394C-4BEE-94A8-4425E17EF6C6}");
Mscrm.TurboForm.Common.FormControlClassId.gridControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{E7A81278-8635-4D9E-8D4D-59480B391C5B}");
Mscrm.TurboForm.Common.FormControlClassId.checkBoxControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{B0C6723A-8503-4FD7-BB28-C8A06AC933C2}");
Mscrm.TurboForm.Common.FormControlClassId.frameControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{FD2A7985-3187-444E-908D-6624B21F69C0}");
Mscrm.TurboForm.Common.FormControlClassId.socialInsightControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{86B9E25E-695E-4FEF-AC69-F05CFA96739C}");
Mscrm.TurboForm.Common.FormControlClassId.orgInsightsControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{76B9E25E-695E-4FEF-AC69-F05CFA96739C}");
Mscrm.TurboForm.Common.FormControlClassId.durationControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{AA987274-CE4E-4271-A803-66164311A958}");
Mscrm.TurboForm.Common.FormControlClassId.regardingControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F3015350-44A2-4AA0-97B5-00166532B5E9}");
Mscrm.TurboForm.Common.FormControlClassId.partyListControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{CBFB742C-14E7-4A17-96BB-1A13F7F64AA2}");
Mscrm.TurboForm.Common.FormControlClassId.notesControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{06375649-C143-495E-A496-C962E5B4488E}");
Mscrm.TurboForm.Common.FormControlClassId.timeZonePicklistControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{7C624A0B-F59E-493D-9583-638D34759266}");
Mscrm.TurboForm.Common.FormControlClassId.languagePicker = new Microsoft.Crm.Client.Core.Framework
    .Guid("{671A9387-CA5A-4D1E-8AB7-06E39DDCF6B5}");
Mscrm.TurboForm.Common.FormControlClassId.kbViewerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{A62B6FA9-169E-406C-B1AA-EAB828CB6026}");
Mscrm.TurboForm.Common.FormControlClassId.picklistStatusControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{5D68B988-0661-4DB2-BC3E-17598AD3BE6C}");
Mscrm.TurboForm.Common.FormControlClassId.emailBodyControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{6F3FB987-393B-4D2D-859F-9D0F0349B6AD}");
Mscrm.TurboForm.Common.FormControlClassId.picklistLookupControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{2305E33A-BAD3-4022-9E15-1856CF218333}");
Mscrm.TurboForm.Common.FormControlClassId.relationshipRolePicklist = new Microsoft.Crm.Client.Core.Framework
    .Guid("{5F986642-5961-4D9F-AB5E-643D71E231E9}");
Mscrm.TurboForm.Common.FormControlClassId.relatedInformationControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{163B90A6-EB64-49D2-9DF8-3C84A4F0A0F8}");
Mscrm.TurboForm.Common.FormControlClassId.coverPagePicklistControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{4168A05C-D857-46AF-8457-5BB47EB04EA1}");
Mscrm.TurboForm.Common.FormControlClassId.mailMergeLanguagePicker = new Microsoft.Crm.Client.Core.Framework
    .Guid("{B634828E-C390-444A-AFE6-E07315D9D970}");
Mscrm.TurboForm.Common.FormControlClassId.connectionControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{3246F906-1F71-45F7-B11F-D7BE0F9D04C9}");
Mscrm.TurboForm.Common.FormControlClassId.connectionRoleObjectTypeListControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{821ACF1A-7E46-4A0C-965D-FE14A57D78C7}");
Mscrm.TurboForm.Common.FormControlClassId.mapsControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{62B0DF79-0464-470F-8AF7-4483CFEA0C7D}");
Mscrm.TurboForm.Common.FormControlClassId.mapLinkControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{91DC0675-C8B9-4421-B1E0-261CEBF02BAC}");
Mscrm.TurboForm.Common.FormControlClassId.webResourceHtmlControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{9FDF5F91-88B1-47F4-AD53-C11EFC01A01D}");
Mscrm.TurboForm.Common.FormControlClassId.webResourceImageControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{587CDF98-C1D5-4BDE-8473-14A0BC7644A7}");
Mscrm.TurboForm.Common.FormControlClassId.webResourceSilverlightControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{080677DB-86EC-4544-AC42-F927E74B491F}");
Mscrm.TurboForm.Common.FormControlClassId.reportControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{A28F441B-916C-4865-87FD-0C5D53BD59C9}");
Mscrm.TurboForm.Common.FormControlClassId.articleContentControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F02EF977-2564-4B9A-B2F0-DF083D8A019B}");
Mscrm.TurboForm.Common.FormControlClassId.processControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{06E9F7AF-1F54-4681-8EEC-1E21A1CEB465}");
Mscrm.TurboForm.Common.FormControlClassId.activitiesWallControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{6636847D-B74D-4994-B55A-A6FAF97ECEA2}");
Mscrm.TurboForm.Common.FormControlClassId.quickFormControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{69AF7DCA-2E3B-4EE7-9201-0DA731DD2413}");
Mscrm.TurboForm.Common.FormControlClassId.quickFormCollectionControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{5C5600E0-1D6E-4205-A272-BE80DA87FD42}");
Mscrm.TurboForm.Common.FormControlClassId.linkControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{DFDF1CDE-837B-4AC9-98CF-AC74361FD89D}");
Mscrm.TurboForm.Common.FormControlClassId.compositionLinkControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{DB1284EF-9FFC-4E99-B382-0CC082FE2364}");
Mscrm.TurboForm.Common.FormControlClassId.errorStatusControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F4C16ECA-CA81-4E39-9448-834B8378721E}");
Mscrm.TurboForm.Common.FormControlClassId.activitiesContainerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{C72511AB-84E5-4FB7-A543-25B4FC01E83E}");
Mscrm.TurboForm.Common.FormControlClassId.accessTeamEntityPickerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{3F4E2A56-F102-4B4D-AB9C-F1574CA5BFDA}");
Mscrm.TurboForm.Common.FormControlClassId.accessPrivilegeControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F93A31B2-99AC-4084-8EC2-D4027C31369A}");
Mscrm.TurboForm.Common.FormControlClassId.timerControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{9C5CA0A1-AB4D-4781-BE7E-8DFBE867B87E}");
Mscrm.TurboForm.Common.FormControlClassId.dynamicPropertyListControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{6896F004-B17A-4202-861E-8B7EA2080E0B}");
Mscrm.TurboForm.Common.FormControlClassId.buttonControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{00AD73DA-BD4D-49C6-88A8-2F4F4CAD4A20}");
Mscrm.TurboForm.Common.FormControlClassId.searchWidget = new Microsoft.Crm.Client.Core.Framework
    .Guid("{E616A57F-20E0-4534-8662-A101B5DDF4E0}");
Mscrm.TurboForm.Common.FormControlClassId.emailRecipientActivityControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{26E9760F-7454-40DE-BB07-F6DCCCB82040}");
Mscrm.TurboForm.Common.FormControlClassId.labelControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{39354E4A-5015-4D74-8031-EA9EB73A1322}");
Mscrm.TurboForm.Common.FormControlClassId.customControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F9A8A302-114E-466A-B582-6771B2AE0D92}");
Mscrm.TurboForm.Common.FormControlClassId.editFilterControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{1479835F-F852-4679-B864-C6892A2844C9}");
Mscrm.TurboForm.Common.FormControlClassId.richEditorControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F94DB24F-263D-44A7-B38E-A35E9854812B}");
Mscrm.TurboForm.Common.FormControlClassId.powerBIControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{8C54228C-1B25-4909-A12A-F2B968BB0D62}");
Mscrm.TurboForm.Common.FormControlClassId.emailEngagementActionsControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{F454228D-1D25-4319-E12F-D27968BC0234}");
Mscrm.TurboForm.Common.FormControlClassId.aciControl = new Microsoft.Crm.Client.Core.Framework
    .Guid("{C8BFBBEF-6851-4401-A0CC-7450062FE085}")