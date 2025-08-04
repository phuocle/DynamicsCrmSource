Type.registerNamespace("Mscrm");
Mscrm.SelectorTypes = function() {};
Mscrm.SelectorTypes.prototype = { orgInsightsConfiguration: 1 };
Mscrm.SelectorTypes.registerEnum("Mscrm.SelectorTypes", false);
Mscrm.OrgInsightsComponentGallery = function() {};
Mscrm.OrgInsightsComponentGallery.onLoad = function() {
    var $v_0 = getDialogArguments();
    if (!IsNull($v_0)) {
        Mscrm.OrgInsightsComponentGallery.$0 = $v_0["Field"];
        Mscrm.OrgInsightsComponentGallery.$G = $v_0["SecCols"];
        Mscrm.OrgInsightsComponentGallery.$H = $v_0["sSectionName"];
        Mscrm.OrgInsightsComponentGallery.$I = $v_0["sTabName"];
        Mscrm.OrgInsightsComponentGallery.$E = $v_0["EditorType"];
        if (!IsNull(Mscrm.OrgInsightsComponentGallery
            .$0["VisualizationId"]))
            Mscrm.OrgInsightsComponentGallery.$4 = Mscrm.OrgInsightsComponentGallery.$0["VisualizationId"];
        if ($v_0["FormAccessType"] === 1030) Mscrm.OrgInsightsComponentGallery.$7 = false;
        if (!IsNull(Mscrm.OrgInsightsComponentGallery.$0)) {
            if (!isNullOrEmptyString(Mscrm.OrgInsightsComponentGallery
                .$0["Id"])) Mscrm.OrgInsightsComponentGallery.$2 = Mscrm.OrgInsightsComponentGallery.$0["Id"];
            if (!IsNull(Mscrm.OrgInsightsComponentGallery
                .$0["ColSpan"])) Mscrm.OrgInsightsComponentGallery.$5 = Mscrm.OrgInsightsComponentGallery.$0["ColSpan"];
            if (!IsNull(Mscrm.OrgInsightsComponentGallery
                .$0["RowSpan"])) Mscrm.OrgInsightsComponentGallery.$A = Mscrm.OrgInsightsComponentGallery.$0["RowSpan"];
            if (!IsNull(Mscrm.OrgInsightsComponentGallery
                .$0["RowsPerPage"]))
                Mscrm.OrgInsightsComponentGallery.$F = Mscrm.OrgInsightsComponentGallery.$0["RowsPerPage"];
            if (!IsNull(Mscrm.OrgInsightsComponentGallery
                .$0["Labels"])) Mscrm.OrgInsightsComponentGallery.$1 = Mscrm.OrgInsightsComponentGallery.$0["Labels"]
        }
    }
    var $v_1 = $get("previewFrame");
    $addHandler($v_1, "load", Mscrm.DashboardEditorUtils.onPreviewChartLoadedHandler);
    Mscrm.OrgInsightsComponentGallery.onOrgInsightsConfigurationSelectionChange()
};
Mscrm.OrgInsightsComponentGallery.applyChanges = function() {
    Mscrm.OrgInsightsComponentGallery.$K();
    var $v_0 = Mscrm.OrgInsightsComponentGallery.$2,
        $v_1 = Mscrm.OrgInsightsComponentGallery.$A,
        $v_2 = Mscrm.OrgInsightsComponentGallery.$5,
        $v_3 = Mscrm.OrgInsightsComponentGallery.$B,
        $v_4 = "",
        $v_5 = "",
        $v_6 = Mscrm.OrgInsightsComponentGallery.$1,
        $v_7 = Mscrm.OrgInsightsComponentGallery.$C,
        $v_8 = null,
        $v_9 = "auto",
        $v_A = true,
        $v_B = "",
        $v_C = Mscrm.OrgInsightsComponentGallery.$D,
        $v_D = new OrgInsightsObj($v_0,
            $v_1,
            $v_2,
            $v_3,
            $v_4,
            $v_5,
            $v_6,
            $v_7,
            $v_8,
            $v_9,
            $v_A,
            $v_B,
            $v_C,
            Mscrm.OrgInsightsComponentGallery.$3,
            Mscrm.OrgInsightsComponentGallery.$8);
    window.returnValue = $v_D;
    Mscrm.Utilities.setReturnValue($v_D);
    closeWindow()
};
Mscrm.OrgInsightsComponentGallery.onOrgInsightsConfigurationSelectionChange = function() {
    Mscrm.OrgInsightsComponentGallery.$L();
    if (Mscrm.OrgInsightsComponentGallery
        .$3 !==
        "{00000000-0000-0000-0000-000000000000}")
        Mscrm.DashboardEditorUtils
            .refreshOrgInsightsPreview(Mscrm.OrgInsightsComponentGallery.$3, Mscrm.OrgInsightsComponentGallery.$9);
    else Mscrm.DashboardEditorUtils.initializeOrgInsightsConfigurationFrame();
    Mscrm.OrgInsightsComponentGallery.$4 = ""
};
Mscrm.OrgInsightsComponentGallery.$L = function() {
    var $v_0 = Mscrm.OrgInsightsComponentGallery.$6(1);
    if (!IsNull($v_0)) {
        Mscrm.OrgInsightsComponentGallery.$3 = $v_0.value;
        Mscrm.OrgInsightsComponentGallery.$9 = parseInt($v_0.getAttribute("type"))
    }
};
Mscrm.OrgInsightsComponentGallery.$J = function() {
    var $v_0 = Mscrm.OrgInsightsComponentGallery.$6(1);
    if (!IsNull($v_0)) {
        var $v_1 = parseInt($v_0.getAttribute("type"), 10);
        if ($v_1 !== 1309) return true
    }
    return false
};
Mscrm.OrgInsightsComponentGallery.$K = function() {
    Mscrm.OrgInsightsComponentGallery.$2 = isNullOrEmptyString(Mscrm.OrgInsightsComponentGallery.$2)
        ? String.format("Component{0}", Math.floor(Math.random() * 1e7))
        : Mscrm.OrgInsightsComponentGallery.$2;
    Mscrm.OrgInsightsComponentGallery.$8 = Mscrm.OrgInsightsComponentGallery.$J();
    var $v_0 = Mscrm.OrgInsightsComponentGallery.$6(1),
        $v_1 = !IsNull($v_0) ? $v_0.text : "",
        $v_2 = Mscrm.OrgInsightsComponentGallery.$7
            ? window.ORG_LANGUAGE_CODE.toString()
            : window.USER_LANGUAGE_CODE.toString();
    if (IsNull(Mscrm.OrgInsightsComponentGallery.$1) || !Mscrm.OrgInsightsComponentGallery.$1.length) {
        var $v_3 = new LocalizedObj($v_1, $v_2);
        Mscrm.OrgInsightsComponentGallery.$1 = [];
        Array.add(Mscrm.OrgInsightsComponentGallery.$1, $v_3)
    }
};
Mscrm.OrgInsightsComponentGallery.$6 = function($p0) {
    var $v_0 = null;
    switch ($p0) {
    case 1:
        $v_0 = "crmOrgInsightsConfigurationSelector";
        break
    }
    var $v_1 = $get($v_0), $v_2 = null;
    if (!IsNull($v_1) && $v_1.options.length > 0 && $v_1.selectedIndex !== -1)
        for (var $v_3 = 0; $v_3 < $v_1.options.length; $v_3++)
            if ($v_1.options[$v_3].getAttribute("value").toString() === Mscrm.OrgInsightsComponentGallery.$4) {
                $v_2 = $v_1.options[$v_3];
                $v_1.selectedIndex = $v_3;
                break
            } else $v_2 = $v_1.options[$v_1.selectedIndex];
    return $v_2
};
Mscrm.OrgInsightsComponentGallery.registerClass("Mscrm.OrgInsightsComponentGallery");
Mscrm.OrgInsightsComponentGallery.$7 = true;
Mscrm.OrgInsightsComponentGallery.$9 = 0;
Mscrm.OrgInsightsComponentGallery.$0 = null;
Mscrm.OrgInsightsComponentGallery.$G = 1;
Mscrm.OrgInsightsComponentGallery.$I = "";
Mscrm.OrgInsightsComponentGallery.$H = "";
Mscrm.OrgInsightsComponentGallery.$E = "dashboardEditor";
Mscrm.OrgInsightsComponentGallery.$2 = "";
Mscrm.OrgInsightsComponentGallery.$1 = null;
Mscrm.OrgInsightsComponentGallery.$A = 12;
Mscrm.OrgInsightsComponentGallery.$F = 10;
Mscrm.OrgInsightsComponentGallery.$5 = 1;
Mscrm.OrgInsightsComponentGallery.$B = false;
Mscrm.OrgInsightsComponentGallery.$C = false;
Mscrm.OrgInsightsComponentGallery.$3 = "";
Mscrm.OrgInsightsComponentGallery.$D = false;
Mscrm.OrgInsightsComponentGallery.$8 = false;
Mscrm.OrgInsightsComponentGallery.$4 = ""