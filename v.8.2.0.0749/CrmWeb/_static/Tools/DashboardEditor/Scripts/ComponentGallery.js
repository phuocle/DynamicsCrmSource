Type.registerNamespace("Mscrm");
Mscrm.SelectorTypes = function() {};
Mscrm.SelectorTypes.prototype = { type: 1, view: 2, chart: 3 };
Mscrm.SelectorTypes.registerEnum("Mscrm.SelectorTypes", false);
Mscrm.ComponentGallery = function() {};
Mscrm.ComponentGallery.onLoad = function() {
    var $v_0 = getDialogArguments();
    if (!IsNull($v_0)) {
        Mscrm.ComponentGallery.$0 = $v_0["Field"];
        Mscrm.ComponentGallery.$U = $v_0["SecCols"];
        Mscrm.ComponentGallery.$V = $v_0["sSectionName"];
        Mscrm.ComponentGallery.$Y = $v_0["sTabName"];
        Mscrm.ComponentGallery.$S = $v_0["EditorType"];
        if ($v_0["FormAccessType"] === 1030) Mscrm.ComponentGallery.$1 = false;
        if (!IsNull(Mscrm.ComponentGallery.$0)) {
            if (!isNullOrEmptyString(Mscrm.ComponentGallery
                .$0["ChartGridMode"])) Mscrm.ComponentGallery.$2 = Mscrm.ComponentGallery.$0["ChartGridMode"];
            if (!isNullOrEmptyString(Mscrm.ComponentGallery
                .$0["Id"])) Mscrm.ComponentGallery.$6 = Mscrm.ComponentGallery.$0["Id"];
            if (!IsNull(Mscrm.ComponentGallery
                .$0["ColSpan"])) Mscrm.ComponentGallery.$G = Mscrm.ComponentGallery.$0["ColSpan"];
            if (!IsNull(Mscrm.ComponentGallery
                .$0["RowSpan"])) Mscrm.ComponentGallery.$K = Mscrm.ComponentGallery.$0["RowSpan"];
            if (!IsNull(Mscrm.ComponentGallery
                .$0["RowsPerPage"])) Mscrm.ComponentGallery.$J = Mscrm.ComponentGallery.$0["RowsPerPage"];
            if (!IsNull(Mscrm.ComponentGallery
                .$0["Labels"])) Mscrm.ComponentGallery.$3 = Mscrm.ComponentGallery.$0["Labels"]
        }
    }
    if (Mscrm.ComponentGallery.$2.toUpperCase() === "CHART") {
        var $v_1 = $get("previewFrame");
        $addHandler($v_1, "load", Mscrm.DashboardEditorUtils.onPreviewChartLoadedHandler)
    }
    Mscrm.ComponentGallery.onEntityTypeChange(true)
};
Mscrm.ComponentGallery.applyChanges = function() {
    Mscrm.ComponentGallery.$e();
    var $v_0 = new SubGridObj(Mscrm.ComponentGallery.$6,
        Mscrm.ComponentGallery.$T,
        Mscrm.ComponentGallery.$L,
        Mscrm.ComponentGallery.$K,
        Mscrm.ComponentGallery.$J,
        Mscrm.ComponentGallery.$G,
        Mscrm.ComponentGallery.$P,
        Mscrm.ComponentGallery.$R,
        Mscrm.ComponentGallery.$A,
        Mscrm.ComponentGallery.$F,
        Mscrm.ComponentGallery.$b,
        Mscrm.ComponentGallery.$E,
        Mscrm.ComponentGallery.$D,
        Mscrm.ComponentGallery.$2,
        Mscrm.ComponentGallery.$8,
        Mscrm.ComponentGallery.$Q,
        Mscrm.ComponentGallery.$3,
        Mscrm.ComponentGallery.$O,
        Mscrm.ComponentGallery.$I,
        Mscrm.ComponentGallery.$H);
    window.returnValue = $v_0;
    Mscrm.Utilities.setReturnValue($v_0);
    closeWindow()
};
Mscrm.ComponentGallery.onEntityTypeChange = function(persistViews) {
    Mscrm.ComponentGallery.$Z();
    Mscrm.ComponentGallery.$k(!persistViews)
};
Mscrm.ComponentGallery.onEntityTypeChangeForInteractionCentric = function(persistViews) {
    Mscrm.ComponentGallery.$Z();
    Mscrm.ComponentGallery.$l(!persistViews)
};
Mscrm.ComponentGallery.onViewSelectionChange = function(refreshCharts) {
    Mscrm.ComponentGallery.$a();
    Mscrm.ComponentGallery.$f(refreshCharts)
};
Mscrm.ComponentGallery.onViewSelectionChangeForInteractionCentric = function(refreshCharts) {
    Mscrm.ComponentGallery.$a();
    Mscrm.ComponentGallery.$g(refreshCharts)
};
Mscrm.ComponentGallery.onChartSelectionChange = function() {
    Mscrm.ComponentGallery.$j();
    if (Mscrm.ComponentGallery
        .$8 !==
        "{00000000-0000-0000-0000-000000000000}")
        Mscrm.DashboardEditorUtils.refreshPreview(Mscrm.ComponentGallery.$8,
            Mscrm.ComponentGallery.$N,
            Mscrm.ComponentGallery.$A,
            Mscrm.ComponentGallery.$M,
            Mscrm.ComponentGallery.$1,
            Mscrm.ComponentGallery.$C);
    else Mscrm.DashboardEditorUtils.initializeChartFrame()
};
Mscrm.ComponentGallery.$f = function($p0) {
    if (Mscrm.ComponentGallery.$2.toUpperCase() === "GRID") {
        Mscrm.ComponentGallery.$W(false);
        Mscrm.ComponentGallery.$X()
    } else Mscrm.ComponentGallery.$h($p0)
};
Mscrm.ComponentGallery.$g = function($p0) {
    if (Mscrm.ComponentGallery.$2.toUpperCase() === "GRID") {
        Mscrm.ComponentGallery.$W(false);
        Mscrm.ComponentGallery.$X()
    } else Mscrm.ComponentGallery.$i($p0)
};
Mscrm.ComponentGallery.$k = function($p0) {
    if ($p0) {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetViewsHtml");
        $v_1.SetParameter("entityCode", Mscrm.ComponentGallery.$5);
        $v_1.SetParameter("displayUserGroup", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("retrieveOnlyPublished", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("onChange", "Mscrm.ComponentGallery.onViewSelectionChange()");
        $v_1.SetParameter("id", "crmViewSelector");
        var $v_2 = $v_1.Execute(), $v_3 = $get("crmViewSelector").parentNode;
        if ($v_2.Success) $v_3.innerHTML = XUI.Xml.GetText($v_2.Xml);
        else $v_3.innerHTML = ""
    }
    var $v_0 = $get("crmViewSelector");
    Mscrm.ComponentGallery.$B($v_0, window.LOCID_CG_VIEW);
    if (!IsNull($v_0) && $v_0.options.length > 0) {
        Mscrm.ComponentGallery.$9(true);
        Mscrm.ComponentGallery.onViewSelectionChange($p0)
    } else Mscrm.ComponentGallery.$9(false)
};
Mscrm.ComponentGallery.$l = function($p0) {
    if ($p0) {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetViewsHtml");
        $v_1.SetParameter("entityCode", Mscrm.ComponentGallery.$5);
        $v_1.SetParameter("displayUserGroup", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("retrieveOnlyPublished", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("onChange", "Mscrm.ComponentGallery.onViewSelectionChangeForInteractionCentric()");
        $v_1.SetParameter("id", "crmViewSelector");
        var $v_2 = $v_1.Execute(), $v_3 = $get("crmViewSelector").parentNode;
        if ($v_2.Success) $v_3.innerHTML = XUI.Xml.GetText($v_2.Xml);
        else $v_3.innerHTML = ""
    }
    var $v_0 = $get("crmViewSelector");
    Mscrm.ComponentGallery.$B($v_0, window.LOCID_CG_VIEW);
    if (!IsNull($v_0) && $v_0.options.length > 0) {
        Mscrm.ComponentGallery.$9(true);
        Mscrm.ComponentGallery.onViewSelectionChangeForInteractionCentric($p0)
    } else Mscrm.ComponentGallery.$9(false)
};
Mscrm.ComponentGallery.$h = function($p0) {
    if ($p0) {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetVisualizationSelectorHtml");
        $v_1.SetParameter("entityCode", Mscrm.ComponentGallery.$5.toString());
        $v_1.SetParameter("displayUserGroup", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("retrieveOnlyPublished", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("onChange", "Mscrm.ComponentGallery.onChartSelectionChange()");
        $v_1.SetParameter("id", "crmChartSelector");
        var $v_2 = $v_1.Execute(), $v_3 = $get("crmChartSelector").parentNode;
        if ($v_2.Success) $v_3.innerHTML = XUI.Xml.GetText($v_2.Xml);
        else $v_3.innerHTML = ""
    }
    var $v_0 = $get("crmChartSelector");
    Mscrm.ComponentGallery.$B($v_0, window.LOCID_CG_CHART);
    if (!IsNull($v_0) && $v_0.options.length > 0) {
        Mscrm.ComponentGallery.$7(true);
        Mscrm.ComponentGallery.onChartSelectionChange()
    } else Mscrm.ComponentGallery.$7(false)
};
Mscrm.ComponentGallery.$i = function($p0) {
    if ($p0) {
        var $v_1 = new RemoteCommand("FormEditorWebService", "GetVisualizationSelectorHtmlForInteractionCentric");
        $v_1.SetParameter("entityCode", Mscrm.ComponentGallery.$5.toString());
        $v_1.SetParameter("displayUserGroup", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("retrieveOnlyPublished", Mscrm.ComponentGallery.$1);
        $v_1.SetParameter("onChange", "Mscrm.ComponentGallery.onChartSelectionChange()");
        $v_1.SetParameter("id", "crmChartSelector");
        var $v_2 = $v_1.Execute(), $v_3 = $get("crmChartSelector").parentNode;
        if ($v_2.Success) $v_3.innerHTML = XUI.Xml.GetText($v_2.Xml);
        else $v_3.innerHTML = ""
    }
    var $v_0 = $get("crmChartSelector");
    Mscrm.ComponentGallery.$B($v_0, window.LOCID_CG_CHART);
    if (!IsNull($v_0) && $v_0.options.length > 0) {
        Mscrm.ComponentGallery.$7(true);
        Mscrm.ComponentGallery.onChartSelectionChange()
    } else Mscrm.ComponentGallery.$7(false)
};
Mscrm.ComponentGallery.$Z = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(1);
    if (!IsNull($v_0)) Mscrm.ComponentGallery.$5 = $v_0.value
};
Mscrm.ComponentGallery.$a = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(2);
    if (!IsNull($v_0)) {
        Mscrm.ComponentGallery.$A = $v_0.value;
        Mscrm.ComponentGallery.$M = parseInt($v_0.getAttribute("Type"))
    }
};
Mscrm.ComponentGallery.$j = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(3);
    if (!IsNull($v_0)) {
        Mscrm.ComponentGallery.$8 = $v_0.value;
        Mscrm.ComponentGallery.$N = parseInt($v_0.getAttribute("type"));
        Mscrm.ComponentGallery.$C = $v_0.getAttribute("chartType")
    }
};
Mscrm.ComponentGallery.$B = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = document.createAttribute("title");
        $v_0.value = $p1;
        $p0.attributes.setNamedItem($v_0)
    }
};
Mscrm.ComponentGallery.$9 = function($p0) {
    var $v_0 = $get("crmViewSelector"), $v_1 = $get("butBegin");
    if (!IsNull($v_0)) $v_0.disabled = $p0 ? false : true;
    Mscrm.ComponentGallery.$7($p0)
};
Mscrm.ComponentGallery.$7 = function($p0) {
    var $v_0 = $get("crmChartSelector"), $v_1 = $get("butBegin");
    if (!IsNull($v_0)) {
        $v_0.disabled = $p0 ? false : true;
        $v_1.disabled = $v_0.disabled
    }
    if (!$p0) {
        Mscrm.DashboardEditorUtils.showDiv("contentDiv");
        var $v_2 = $get("contentDiv");
        $v_2
            .innerHTML =
            "<table style='height:100%;width:100%'><tr style='vertical-align:middle; text-align:center'><td>" +
            window.LOCID_CG_NOCHARTS +
            "</td></tr></table>"
    }
};
Mscrm.ComponentGallery.$W = function($p0) {
    var $v_0 = $p0 ? "inline" : "none", $v_1 = $get("crmChartSelector");
    if (!IsNull($v_1)) $v_1.style.display = $v_0;
    var $v_2 = $get("tdChartSelectorLabel");
    if (!IsNull($v_2)) $v_2.style.display = $v_0;
    return
};
Mscrm.ComponentGallery.$c = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(3);
    if (!IsNull($v_0)) {
        var $v_1 = parseInt($v_0.getAttribute("type"), 10);
        if ($v_1 === 1112) return true
    }
    return false
};
Mscrm.ComponentGallery.$d = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(2);
    if (!IsNull($v_0)) {
        var $v_1 = parseInt($v_0.getAttribute("Type"), 10);
        if ($v_1 === 4230) return true
    }
    return false
};
Mscrm.ComponentGallery.$e = function() {
    var $v_0 = Mscrm.ComponentGallery.$4(1);
    Mscrm.ComponentGallery.$L = !IsNull($v_0) ? $v_0.attributes.getNamedItem("logicalName").value : "";
    Mscrm.ComponentGallery.$6 = isNullOrEmptyString(Mscrm.ComponentGallery.$6)
        ? String.format("Component{0}", Math.floor(Math.random() * 1e7))
        : Mscrm.ComponentGallery.$6;
    Mscrm.ComponentGallery.$I = Mscrm.ComponentGallery.$d();
    Mscrm.ComponentGallery.$H = Mscrm.ComponentGallery.$c();
    if (Mscrm.ComponentGallery.$2.toUpperCase() === "CHART") {
        Mscrm.ComponentGallery.$F = false;
        Mscrm.ComponentGallery.$D = false;
        Mscrm.ComponentGallery.$E = false
    }
    var $v_1 = !IsNull($v_0) ? $v_0.text : "",
        $v_2 = Mscrm.ComponentGallery.$1 ? window.ORG_LANGUAGE_CODE.toString() : window.USER_LANGUAGE_CODE.toString();
    if (IsNull(Mscrm.ComponentGallery.$3) || !Mscrm.ComponentGallery.$3.length) {
        var $v_3 = new LocalizedObj($v_1, $v_2);
        Mscrm.ComponentGallery.$3 = [];
        Array.add(Mscrm.ComponentGallery.$3, $v_3)
    }
};
Mscrm.ComponentGallery.$4 = function($p0) {
    var $v_0 = null;
    switch ($p0) {
    case 1:
        $v_0 = "crmTypeSelector";
        break;
    case 2:
        $v_0 = "crmViewSelector";
        break;
    case 3:
        $v_0 = "crmChartSelector";
        break
    }
    var $v_1 = $get($v_0), $v_2 = null;
    if (!IsNull($v_1) && $v_1.options.length > 0 && $v_1.selectedIndex !== -1) $v_2 = $v_1.options[$v_1.selectedIndex];
    return $v_2
};
Mscrm.ComponentGallery.$X = function() {
    var $v_0 = null, $v_1 = function($p1_0) { $v_0 = $p1_0 }, $v_2 = function($p1_0, $p1_1) { $v_0 = null };
    XUI.Xml.Load(Mscrm.CrmUri.create("/Tools/FormEditor/formeditorsection.xsl").toString(), false, $v_1, $v_2);
    var $v_3 = Mscrm.XmlUtil.createXslTemplate();
    $v_3.stylesheet = $v_0;
    var $v_4 = $v_3.createProcessor(),
        $v_5 = XUI.Xml.LoadXml('<gridPreview><resources><resource id="GridPreviewColumnHeader">' +
            window.LOCID_GRID_PREVIEW_COLUMN_HEADER +
            "</resource></resources></gridPreview>");
    $v_4.input = $v_5;
    $v_4.transform();
    Mscrm.DashboardEditorUtils.showDiv("contentDiv");
    var $v_6 = $get("contentDiv");
    $v_6.innerHTML = $v_4.output
};
Mscrm.CHARTGRIDMODE = function() {};
Mscrm.ComponentGallery.registerClass("Mscrm.ComponentGallery");
Mscrm.CHARTGRIDMODE.registerClass("Mscrm.CHARTGRIDMODE");
Mscrm.ComponentGallery.$5 = 1;
Mscrm.ComponentGallery.$1 = true;
Mscrm.ComponentGallery.$2 = "CHART";
Mscrm.ComponentGallery.$M = 0;
Mscrm.ComponentGallery.$N = 0;
Mscrm.ComponentGallery.$0 = null;
Mscrm.ComponentGallery.$U = 1;
Mscrm.ComponentGallery.$Y = "";
Mscrm.ComponentGallery.$V = "";
Mscrm.ComponentGallery.$S = "dashboardEditor";
Mscrm.ComponentGallery.$6 = "";
Mscrm.ComponentGallery.$T = "";
Mscrm.ComponentGallery.$L = "";
Mscrm.ComponentGallery.$3 = null;
Mscrm.ComponentGallery.$K = 12;
Mscrm.ComponentGallery.$J = 10;
Mscrm.ComponentGallery.$G = 1;
Mscrm.ComponentGallery.$P = false;
Mscrm.ComponentGallery.$R = false;
Mscrm.ComponentGallery.$A = "";
Mscrm.ComponentGallery.$F = true;
Mscrm.ComponentGallery.$b = "";
Mscrm.ComponentGallery.$E = true;
Mscrm.ComponentGallery.$D = true;
Mscrm.ComponentGallery.$8 = "";
Mscrm.ComponentGallery.$C = 0;
Mscrm.ComponentGallery.$Q = false;
Mscrm.ComponentGallery.$O = "";
Mscrm.ComponentGallery.$H = false;
Mscrm.ComponentGallery.$I = false;
Mscrm.CHARTGRIDMODE.CHART = "CHART";
Mscrm.CHARTGRIDMODE.GRID = "GRID"