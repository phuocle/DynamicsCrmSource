Type.registerNamespace("Mscrm");
Mscrm.SolutionComponentList = function() {};
Mscrm.SolutionComponentList.addNew = function(objectTypeCode) {
    switch (objectTypeCode) {
    case 2010:
        var $v_0 = Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/emailtemplateproperties.aspx?isPersonal=0"),
            $v_1 = new Xrm.DialogOptions;
        $v_1.height = 200;
        $v_1.width = 400;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, window.self, null, null);
        break;
    case 9106:
        var $v_2 = Mscrm.CrmUri.create("");
        $v_2.get_query()["ispersonal"] = "0";
        openObj(objectTypeCode, null, $v_2.toString(), null, Mscrm.NavigationMode.DefaultNavigationMode, null);
        break;
    case 1030:
        var $v_3 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterSelectDashboardLayout",
                    Mscrm.SolutionComponentList,
                    null,
                    false),
            $v_4 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/tools/dashboardeditor/dialogs/dashboardlayoutdialog.aspx"),
                null,
                800,
                450,
                null);
        $v_4.setCallbackReference($v_3);
        $v_4.show();
        break;
    case 1032:
        var $v_5 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterSelectDashboardLayoutIC",
                    Mscrm.SolutionComponentList,
                    null,
                    false),
            $v_6 = new Mscrm.CrmDialog(Mscrm.CrmUri
                .create("/tools/dashboardeditor/dialogs/dashboardlayoutdialogIC.aspx"),
                null,
                670,
                500,
                null);
        $v_6.setCallbackReference($v_5);
        $v_6.show();
        break;
    case 1033:
        var $v_7 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterSelectEntityDashboardLayoutIC",
                    Mscrm.SolutionComponentList,
                    null,
                    false),
            $v_8 = Mscrm.CrmUri.create("/tools/dashboardeditor/dialogs/dashboardlayoutdialogIC.aspx");
        $v_8.get_query()["isentitydashboard"] = 1;
        var $v_9 = new Mscrm.CrmDialog($v_8, null, 670, 500, null);
        $v_9.setCallbackReference($v_7);
        $v_9.show();
        break;
    case 9100:
        var $v_A = Mscrm.WindowInformation.getWindowInformation(9099),
            $v_B = Mscrm.CrmUri.create("/CRMReports/reportproperty.aspx");
        $v_B.get_query()["disablePersonal"] = true;
        openStdWin($v_B, null, $v_A.Width, $v_A.Height, null);
        break;
    case 9750:
        if (Xrm.Internal.isFeatureEnabled("FCB.SLAV2")) window.top.Mscrm.CommandBarActions.openCreateSLADialog();
        else openObj(objectTypeCode, null, null, null, Mscrm.NavigationMode.DefaultNavigationMode, null);
        break;
    case 9006:
        if (Xrm.Internal.areFeaturesEnabled(["FCB.AppModuleForOrganization", "FCB.AppDesigner"])) {
            var $v_C = getDesignerUri("app", null);
            openStdWin($v_C, null, 1024, 768, null)
        }
        break;
    default:
        openObj(objectTypeCode, null, null, null, Mscrm.NavigationMode.DefaultNavigationMode, null);
        break
    }
};
Mscrm.SolutionComponentList.performActionAfterSelectDashboardLayout = function(dashboardInfo) {
    if (!IsNull(dashboardInfo)) {
        var $v_0 = Mscrm.CrmUri.create("/main.aspx?pagetype=dashboardeditor"),
            $v_1 = "&layoutId=" + dashboardInfo + "&dashboardType=" + 1030;
        $v_0.get_query()["extraqs"] = $v_1;
        openStdWin($v_0, buildWinName(null), window.screen.availWidth * .9, window.screen.availHeight * .9, null)
    }
};
Mscrm.SolutionComponentList.performActionAfterSelectDashboardLayoutIC = function(dashboardInfo) {
    if (!IsNull(dashboardInfo)) {
        var $v_0 = Mscrm.CrmUri.create("/main.aspx?pagetype=icdashboardeditor"),
            $v_1 = "&layoutId=" + dashboardInfo + "&dashboardType=" + 1030;
        $v_0.get_query()["extraqs"] = $v_1;
        openStdWin($v_0, buildWinName(null), window.screen.availWidth * .9, window.screen.availHeight * .9, null)
    }
};
Mscrm.SolutionComponentList.performActionAfterSelectEntityDashboardLayoutIC = function(dashboardInfo) {
    if (!IsNull(dashboardInfo)) {
        var $v_0 = Mscrm.CrmUri.create("/main.aspx?pagetype=icdashboardeditor"),
            $v_1 = "&layoutId=" + dashboardInfo + "&dashboardType=" + 1030;
        $v_0.get_query()["isentitydashboard"] = 1;
        $v_0.get_query()["entitytypecode"] = window.LOCID_OBJECTTYPECODE;
        $v_0.get_query()["extraqs"] = $v_1;
        openStdWin($v_0, buildWinName(null), window.screen.availWidth * .9, window.screen.availHeight * .9, null)
    }
};
Mscrm.SolutionComponentList.$b = function() {
    var $v_0 = $get("SCFilter_typefilter"), $v_1 = 0;
    if (!IsNull($v_0) && $v_0.selectedIndex >= 0) $v_1 = Number.parseInvariant($v_0.options[$v_0.selectedIndex].value);
    return $v_1
};
Mscrm.SolutionComponentList.$L = function() {
    var $v_0 = window.top.Mscrm.FormControlInputBehavior.GetBehavior("configurationpageid");
    if (!IsNull($v_0) && !IsNull($v_0.get_dataValue())) {
        var $v_1 = new RemoteCommand("Solution", "IsConfigurationIdEmpty", null);
        $v_1.SetParameter("solutionId", window.APP_SOLUTION_ID);
        var $v_2 = $v_1.Execute(null);
        if (!IsNull($v_2) && $v_2.Success && $v_2.ReturnValue) {
            $v_0.set_dataValue(null);
            $v_0.DefaultValue = null;
            var $v_3 = window.top.document.getElementById("li_nav_Configuration");
            !IsNull($v_3) && $v_3.parentNode.removeChild($v_3)
        }
    }
};
Mscrm.SolutionComponentList.addExisting = function(objectTypeCode) {
    var $v_0 = window.APP_SOLUTION_ID, $v_1 = parseInt(objectTypeCode, 10);
    switch ($v_1) {
    case 1120:
        Mscrm.SolutionComponentList.addSolutionComponent("", $v_1, $v_1);
        break;
    default:
        var $v_2 = Mscrm.CrmUri.create("/Tools/Solution/componentdialog.aspx?objecttypecode=" +
                CrmEncodeDecode.CrmUrlEncode(objectTypeCode) +
                "&solutionid=" +
                CrmEncodeDecode.CrmUrlEncode($v_0)),
            $v_3 = [$v_1],
            $v_4 = Mscrm.Utilities
                .createCallbackFunctionForXrmDialog(Mscrm.SolutionComponentList
                    .performActionAfterSelectComponent,
                    $v_3),
            $v_5 = new Xrm.DialogOptions;
        $v_5.height = 550;
        $v_5.width = 820;
        Xrm.Internal.openDialog($v_2.toString(), $v_5, null, null, $v_4);
        break
    }
};
Mscrm.SolutionComponentList.performActionAfterSelectComponent = function(returnValue, objectType) {
    Mscrm.SolutionComponentList.$D = (new Date).getTime();
    if (!IsNull(returnValue) && returnValue.length > 0) {
        var $v_0 = parseInt(returnValue[0].type, 10);
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SolutionSegmentation") && $v_0 === 9801) {
            Mscrm.SolutionComponentList.resetSelectedSolutionSubcomponents();
            Mscrm.SolutionComponentList.$M(returnValue, null, true);
            Mscrm.SolutionComponentList.$2.length >= 1 &&
                Mscrm.SolutionComponentList.$A($v_0.toString(),
                    Mscrm.SolutionComponentList.$2[0].toString(),
                    "1030",
                    false,
                    returnValue.length.toString(),
                    0)
        } else {
            var $v_1 = createXmlDoc("components");
            if (returnValue.length === 1) {
                Mscrm.SolutionComponentList.addSolutionComponent(returnValue[0].id, $v_0, objectType);
                return
            }
            for (var $v_3 = 0; $v_3 < returnValue.length; $v_3++) {
                var $v_4 = addXmlNode($v_1, "component");
                addTextXmlNode($v_4, "id", returnValue[$v_3].id);
                addTextXmlNode($v_4, "type", returnValue[$v_3].type)
            }
            var $v_2 = convertXmlDocToString($v_1);
            Mscrm.SolutionComponentList.$I($v_2, objectType)
        }
    }
};
Mscrm.SolutionComponentList.preSelectSolutionSubComponents = function() {
    var $v_0 = Mscrm.CrmLocalStorage.getItem("SolutionSegmentationSelectedSubComponents"), $v_1 = JSON.parse($v_0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && Xrm.Internal.getResourceString("LOCID_ENTITY_ID") in $v_1) {
        for (var $v_2 = $v_1[Xrm.Internal.getResourceString("LOCID_ENTITY_ID")], $v_3 = {}, $v_4 = 0;
            $v_4 < $v_2.length;
            $v_4++) {
            var $v_5 = $v_2[$v_4], $v_6 = $v_5.objectId, $v_7 = $v_5.relationshipRole, $v_8;
            if ($v_5.itemType === Xrm.Internal.getResourceString("LOCID_ENTITY_TYPE")) {
                $get("chkSelectEntityMetadata").checked = $v_5.includeComponentSettings === "true";
                $get("chkSelectAllAssets").checked = $v_5.addAllAssetsChecked === "true";
                Mscrm.SolutionComponentList.selectAllComponent()
            }
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_7) &&
                Number.parseInvariant($v_7) !== -1)
                $v_8 = Mscrm.SolutionComponentList.$7($v_5.itemType, Number.parseInvariant($v_7));
            else $v_8 = Mscrm.SolutionComponentList.$7($v_5.itemType, -1);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8))
                if ($v_8 in $v_3) {
                    var $v_9 = $v_3[$v_8];
                    $v_9.push($v_6)
                } else $v_3[$v_8] = [$v_6]
        }
        var $$dict_C = $v_3;
        for (var $$key_D in $$dict_C) {
            var $v_A = { key: $$key_D, value: $$dict_C[$$key_D] }, $v_B = $find($v_A.key);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_B) && $v_B.get_innerGrid().SelectRecord($v_A.value)
        }
    }
};
Mscrm.SolutionComponentList.$A = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = $p5 + 1 === Mscrm.SolutionComponentList.$2.length ? false : true,
        $v_1 = window.APP_SOLUTION_ID,
        $v_2 = Mscrm.CrmUri.create("/Tools/Solution/addsubcomponentdialog.aspx");
    $v_2.get_query()["objecttypecode"] = $p0;
    $v_2.get_query()["solutionid"] = $v_1;
    $v_2.get_query()["entityid"] = $p1;
    $v_2.get_query()["showNextButton"] = $v_0;
    $v_2.get_query()["showBackButton"] = $p3;
    $v_2.get_query()["selectedComponentType"] = $p2;
    $v_2.get_query()["totalEntityPageCount"] = $p4;
    $v_2.get_query()["entityPageIndex"] = ($p5 + 1).toString();
    var $v_3 = [$p1, $p4],
        $v_4 = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(Mscrm.SolutionComponentList.performActionAfterSelectSubcomponent, $v_3),
        $v_5 = new Xrm.DialogOptions;
    $v_5.height = 550;
    $v_5.width = 820;
    Xrm.Internal.openDialog($v_2.toString(), $v_5, null, null, $v_4)
};
Mscrm.SolutionComponentList
    .performActionAfterSelectSubcomponent = function(returnValue, entityId, totalEntityPageCount, entityPageIndex) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
        for (var $v_0 = [], $v_1 = 0, $v_5 = 0; $v_5 < returnValue.length - 1; $v_5++) {
            var $v_6 = new Mscrm.SolutionComponentState;
            $v_6.objectId = returnValue[$v_5].id;
            $v_6.includeSubcomponent = returnValue[$v_5].includeSubcomponents.toString();
            $v_6.objectType = returnValue[$v_5].type;
            $v_6.itemType = returnValue[$v_5].itemType;
            if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue[$v_5].relationshipRole) &&
                returnValue[$v_5].relationshipRole !== -1)
                $v_6.relationshipRole = returnValue[$v_5].relationshipRole.toString();
            if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue[$v_5]
                .includeComponentSettings))
                $v_6.includeComponentSettings = returnValue[$v_5].includeComponentSettings.toString();
            if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue[$v_5]
                .addAllAssetsChecked)) $v_6.addAllAssetsChecked = returnValue[$v_5].addAllAssetsChecked.toString();
            $v_0[$v_1] = $v_6;
            $v_1++
        }
        Mscrm.SolutionComponentList.$8[entityId] = $v_0;
        Mscrm.CrmLocalStorage.setItem("SolutionSegmentationSelectedSubComponents",
            JSON.stringify(Mscrm.SolutionComponentList.$8));
        var $v_2 = returnValue[returnValue.length - 1],
            $v_3 = Array.indexOf(Mscrm.SolutionComponentList.$2, entityId),
            $v_4 = Number.parseInvariant(totalEntityPageCount);
        if (!$v_2 && $v_3 > -1 && $v_3 === $v_4 - 1) {
            var $v_7 = createXmlDoc("components"), $$dict_H = Mscrm.SolutionComponentList.$8;
            for (var $$key_I in $$dict_H)
                for (var $v_9 = { key: $$key_I, value: $$dict_H[$$key_I] }, $v_A = $v_9.value, $v_B = 0;
                    $v_B < $v_A.length;
                    $v_B++) {
                    var $v_C = $v_A[$v_B], $v_D = addXmlNode($v_7, "component");
                    addTextXmlNode($v_D, "id", $v_C.objectId);
                    addTextXmlNode($v_D, "type", $v_C.objectType);
                    addTextXmlNode($v_D, "rootcomponentbehavior", $v_C.includeSubcomponent);
                    addTextXmlNode($v_D, "includecomponentsettings", $v_C.includeComponentSettings)
                }
            Mscrm.SolutionComponentList.resetSelectedSolutionSubcomponents();
            var $v_8 = convertXmlDocToString($v_7);
            Mscrm.SolutionComponentList.$I($v_8, 9801)
        } else if ($v_3 > -1) {
            var $v_E = $v_2
                    ? Mscrm.SolutionComponentList.$2[$v_3 - 1].toString()
                    : Mscrm.SolutionComponentList.$2[$v_3 + 1].toString(),
                $v_F = $v_2 ? $v_3 - 1 : $v_3 + 1;
            Mscrm.SolutionComponentList.$A("9801", $v_E, "1030", $v_F > 0, totalEntityPageCount, $v_F)
        }
    };
Mscrm.SolutionComponentList.resetSelectedSolutionSubcomponents = function() {
    Mscrm.SolutionComponentList.$8 = {};
    Mscrm.SolutionComponentList.$2 = [];
    Mscrm.CrmLocalStorage.removeItem("SolutionSegmentationSelectedSubComponents")
};
Mscrm.SolutionComponentList.$M = function($p0, $p1, $p2) {
    for (var $v_0 = {}, $v_1 = [], $v_2 = 0; $v_2 < $p0.length; $v_2++) {
        var $v_3, $v_4;
        if ($p2) {
            var $v_5 = $p0[$v_2];
            $v_3 = $v_5.id;
            $v_4 = $v_5.name
        } else {
            $v_3 = $p0[$v_2][0];
            $v_4 = $p1.getCellValue("displayname", $v_3)
        }
        $v_0[$v_4] = $v_3;
        $v_1.push($v_4)
    }
    $v_1.sort();
    for (var $v_6 = 0; $v_6 < $v_1.length; $v_6++) Mscrm.SolutionComponentList.$2[$v_6] = $v_0[$v_1[$v_6]]
};
Mscrm.SolutionComponentList.callPerformActionAfterSelectSubcomponent = function() {
    var $v_0 = $find("crmGridControl"), $v_1 = $v_0.get_innerGrid().get_selectedRecords();
    if ($v_1.length <= 0) {
        var $v_2 = new Xrm.AlertDialogStrings;
        $v_2.text = Xrm.Internal.getResourceString("LOCID_SELECTONEORMORE_WARN");
        Xrm.Dialog.openAlertDialog($v_2, null, null);
        return
    }
    Mscrm.SolutionComponentList.resetSelectedSolutionSubcomponents();
    Mscrm.SolutionComponentList.$M($v_1, $v_0, false);
    Mscrm.SolutionComponentList.$2.length >= 1 &&
        Mscrm.SolutionComponentList.$A("9801",
            Mscrm.SolutionComponentList.$2[0].toString(),
            "1030",
            false,
            $v_1.length.toString(),
            0)
};
Mscrm.SolutionComponentList.manageSelectedEntitySubComponents = function(returnTypeCode, entityId, subcomponentType) {
    Mscrm.SolutionComponentList.$2[0] = entityId;
    Mscrm.SolutionComponentList.$0 = subcomponentType;
    Mscrm.SolutionComponentList.$A(returnTypeCode, entityId, subcomponentType, false, "1", 0)
};
Mscrm.SolutionComponentList.$4 = function() {
    var $v_0 = $get("SCFilter");
    if (!IsNull($v_0)) return $v_0.getAttribute("gridid");
    return null
};
Mscrm.SolutionComponentList.setDefaultDashboard = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    DisplayActionMsg(window.LOCID_SET_DEFAULT_DASHBOARD, 400, 150);
    window.setTimeout(Mscrm.SolutionComponentList.$X, 100)
};
Mscrm.SolutionComponentList.assignDashboardRoles = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    var $v_0 = "1032",
        $v_1 = Mscrm.SolutionComponentList.getSelectedRow()[0][0],
        $v_2 = Mscrm.SolutionComponentList.getSelectedRow()[0][1],
        $v_3 = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormRoleAssignment.aspx");
    $v_3.get_query()["formId"] = $v_1;
    $v_3.get_query()["type"] = $v_2 === $v_0 ? "10" : "0";
    if ($v_2 === $v_0 && !IsNull(window.LOCID_OBJECTTYPECODE)
    ) $v_3.get_query()["objectTypeCode"] = window.LOCID_OBJECTTYPECODE;
    else $v_3.get_query()["objectTypeCode"] = "0";
    var $v_4 = {};
    $v_4["formId"] = $v_1;
    var $v_5 = new Xrm.DialogOptions;
    $v_5.height = 550;
    $v_5.width = 800;
    Xrm.Internal.openDialog($v_3.toString(), $v_5, $v_4, null, null)
};
Mscrm.SolutionComponentList.$X = function() {
    try {
        var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
            $v_1 = $v_0[0][0],
            $v_2 = new RemoteCommand("DashboardWebService", "SetSystemDefaultDashboard", null);
        $v_2.SetParameter("formId", $v_1);
        $v_2.IgnoreCurrentSolutionContext = true;
        var $v_3 = $v_2.Execute(null);
        !IsNull($v_3) && Mscrm.SolutionComponentList.refreshGrid()
    } finally {
        HideActionMsg()
    }
};
Mscrm.SolutionComponentList.saveAsDashboard = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    var $v_0 = $find(Mscrm.SolutionComponentList.$4()), $v_1 = null;
    if (!IsNull($v_0) && Mscrm.GridControl.isInstanceOfType($v_0)) {
        $v_1 = $v_0;
        var $v_2 = Mscrm.SolutionComponentList.getSelectedRow(), $v_3 = $v_2[0][0], $v_4 = {};
        $v_4.sName = $v_1.getCellValue("name", $v_1.get_selectedIds()[0]);
        $v_4.sDescription = $v_1.getCellValue("description", $v_1.get_selectedIds()[0]);
        $v_4.sIsTabletEnabled = $v_1.getCellValue("istabletenabled", $v_1.get_selectedIds()[0]);
        $v_4.sFormId = $v_3;
        var $v_5 = Mscrm.Utilities
                .createCallbackFunctionObject("performActionAfterDashboardQueryProperties",
                    Mscrm.SolutionComponentList,
                    null,
                    false),
            $v_6 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/AdvancedFind/QueryProperties.aspx?feature=dashboard"),
                $v_4,
                500,
                310,
                null);
        $v_6.setCallbackReference($v_5);
        $v_6.show()
    }
};
Mscrm.SolutionComponentList.performActionAfterDashboardQueryProperties = function(dashboardInfo) {
    if (!IsNull(dashboardInfo)) {
        DisplayActionMsg(window.LOCID_SAVEAS_DASHBOARD, 400, 150);
        window.setTimeout(function() { Mscrm.SolutionComponentList.$W(dashboardInfo) }, 100)
    }
};
Mscrm.SolutionComponentList.$W = function($p0) {
    try {
        if (!IsNull($p0)) {
            var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
                $v_1 = $v_0[0][0],
                $v_2 = new RemoteCommand("DashboardWebService", "SaveCopyOfDashboardWithTablet", null);
            $v_2.SetParameter("sourceDashboardId", $v_1);
            $v_2.SetParameter("sourceDashboardObjectTypeCode", "1030");
            $v_2.SetParameter("createSystem", true);
            $v_2.SetParameter("name", $p0.sName);
            $v_2.SetParameter("description", $p0.sDescription);
            $v_2.SetParameter("isTabletEnabled", $p0.sIsTabletEnabled);
            var $v_3 = $v_2.Execute();
            !IsNull($v_3) && Mscrm.SolutionComponentList.refreshGrid()
        }
    } finally {
        HideActionMsg()
    }
};
Mscrm.SolutionComponentList.publishSolutionComponent = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return;
    var $v_0 = getCommonObjectType(Mscrm.SolutionComponentList.$4());
    if (!$v_0) {
        alert(window.LOCID_HETEROGENOUS_TYPES);
        return
    }
    var $v_1 = Number.parseInvariant($v_0);
    switch ($v_1) {
    case 4703:
    case 4608:
        doAction(Mscrm.SolutionComponentList.$4(), $v_1, "activate", null);
        break;
    case 9804:
        DisplayActionMsg(window.LOCID_OPTIONSET_PUBLISHING, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$S, 100);
        break;
    case 9801:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$Q, 100);
        break;
    case 4709:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$U, 100);
        break;
    case 1120:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$T, 100);
        break;
    case 9333:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$V, 100);
        break;
    case 1032:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$R, 100);
        break;
    case 1030:
        DisplayActionMsg(window.LOCID_ENTUTL_PUBLISHINGENT, 400, 150);
        window.setTimeout(Mscrm.SolutionComponentList.$P, 100);
        break
    }
};
Mscrm.SolutionComponentList.unPublishSolutionComponent = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return;
    var $v_0 = getCommonObjectType(Mscrm.SolutionComponentList.$4());
    if (!$v_0) {
        alert(window.LOCID_HETEROGENOUS_TYPES);
        return
    }
    var $v_1 = Number.parseInvariant($v_0);
    switch ($v_1) {
    case 4703:
    case 4608:
        doAction(Mscrm.SolutionComponentList.$4(), $v_1, "deactivate", null);
        break
    }
};
Mscrm.SolutionComponentList.editSolutionComponent = function() {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SitemapDesigner")) {
        if (!Mscrm.SolutionComponentList.$1(true, false)) return;
        var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
            $v_1 = $v_0[0][0],
            $v_2 = Number.parseInvariant($v_0[0][1]);
        if ($v_2 === 4709) {
            var $v_3 = getDesignerUri("sitemap", $v_1);
            openStdWin($v_3, null, 1024, 768, null)
        }
    }
};
Mscrm.SolutionComponentList.addComponentDependency = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_1 = $v_0[0][0],
        $v_2 = Number.parseInvariant($v_0[0][1]),
        $v_3 = Mscrm.CrmUri.create("/_grid/cmds/dlg_confirmation.aspx");
    $v_3.get_query()["resource_title"] = "Dialog_AddRequiredConfirm_Title";
    $v_3.get_query()["resource_description"] = "Dialog_AddRequiredConfirm_Description";
    $v_3.get_query()["resource_body"] = "Dialog_AddRequiredConfirm_Body";
    var $v_4 = [$v_1, $v_2],
        $v_5 = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(Mscrm.SolutionComponentList
                .PerformActionAfterAddComponentConfirm,
                $v_4),
        $v_6 = new Xrm.DialogOptions;
    $v_6.height = 200;
    $v_6.width = 600;
    Xrm.Internal.openDialog($v_3.toString(), $v_6, null, null, $v_5)
};
Mscrm.SolutionComponentList.PerformActionAfterAddComponentConfirm = function(result, objId, objectTypeCode) {
    if (!IsNull(result) && result) {
        Mscrm.SolutionComponentList.$O(objId, objectTypeCode);
        Mscrm.SolutionComponentList.refreshGrid()
    }
};
Mscrm.SolutionComponentList.showComponentDependency = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    var $v_0 = Mscrm.SolutionComponentList
            .getSelectedRow(),
        $v_1 = $v_0[0][0],
        $v_2 = Number.parseInvariant($v_0[0][1]);
    Mscrm.Dependency.launchDependencyDlg($v_2, $v_1)
};
Mscrm.SolutionComponentList.addSolutionComponent = function(objectId, actualType, passinType) {
    if (Mscrm.SolutionComponentList.$e(objectId, actualType)) {
        Mscrm.SolutionComponentList.$F = passinType;
        Mscrm.SolutionComponentList.$K(objectId, actualType, 1, true)
    } else Mscrm.SolutionComponentList.addSolutionComponentCallback(false, objectId, actualType, true)
};
Mscrm.SolutionComponentList.$f = function($p0) {
    if ($p0.toString() === "4709") $p0 = "1120";
    window.self.Mscrm.TreeNavControl.navigateToNode($p0)
};
Mscrm.SolutionComponentList.launchManagedProperties = function() {
    if (!Mscrm.SolutionComponentList.$1(true, false)) return;
    var $v_0 = Mscrm.SolutionComponentList
            .getSelectedRow(),
        $v_1 = $v_0[0][0],
        $v_2 = Number.parseInvariant($v_0[0][1]);
    Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg($v_2, $v_1)
};
Mscrm.SolutionComponentList.launchRelevanceSearchConfiguration = function() {
    var $v_0 = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/RelevanceSearchConfiguration.aspx");
    $v_0.get_query()["appSolutionId"] = window.APP_SOLUTION_ID;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 800;
    $v_1.height = 600;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
};
Mscrm.SolutionComponentList.$K = function($p0, $p1, $p2, $p3) {
    var $v_0 = Mscrm.CrmUri.create("/_grid/cmds/dlg_addsolutioncomponent.aspx");
    $v_0.get_query()["iId"] = $p0;
    $v_0.get_query()["iTotal"] = $p2.toString(10);
    $v_0.get_query()["iObjectType"] = $p1.toString(10);
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 750;
    $v_1.height = 480;
    var $v_2 = [$p0, $p1, $p3],
        $v_3 = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(Mscrm.SolutionComponentList.addSolutionComponentCallback, $v_2);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3)
};
Mscrm.SolutionComponentList
    .addSolutionComponentCallback = function(result, objectId, actualType, addSingleSolutionComponent) {
        Mscrm.SolutionComponentList.$C = (new Date).getTime();
        Mscrm.SolutionComponentList.$G = Mscrm.SolutionComponentList.$C - Mscrm.SolutionComponentList.$D;
        var $v_0 = null, $v_1 = null;
        if (IsNull(result)) return;
        if (addSingleSolutionComponent) {
            $v_0 = new RemoteCommand("Solution", "AddSolutionComponent", null);
            $v_0.SetParameter("objectId", objectId);
            $v_0.SetParameter("objectType", actualType.toString());
            $v_0.SetParameter("addDependentComponent", result ? "1" : "0");
            $v_0.SetParameter("includeSubcomponent", true);
            $v_0.SetParameter("includeMetadata", true);
            $v_1 = $v_0.Execute(null);
            if (!IsNull($v_1) && $v_1.Success && !isNullOrEmptyString($v_1.ReturnValue)) {
                (actualType === 9801 || actualType === 4605) && window.setTimeout(Mscrm.TreeNavControl.refreshTree, 1);
                var $v_2 = Mscrm.SolutionComponentList.$b();
                Mscrm.SolutionComponentList.$F !== actualType &&
                    $v_2 &&
                    Mscrm.SolutionComponentList.$f(actualType.toString())
            }
        } else {
            $v_0 = new RemoteCommand("Solution", "AddSolutionComponentList", null);
            $v_0.SetXmlParameter("data", Mscrm.SolutionComponentList.$H);
            $v_0.SetParameter("addDependentComponent", result ? "1" : "0");
            $v_0.SetParameter("timeSpentOnClient", Mscrm.SolutionComponentList.$G);
            $v_1 = $v_0.Execute(null);
            if (!IsNull($v_1) && $v_1.Success && !isNullOrEmptyString($v_1.ReturnValue)) {
                var $v_3 = parseInt($v_1.ReturnValue, 10);
                ($v_3 === 9801 || $v_3 === 4605) && window.setTimeout(Mscrm.TreeNavControl.refreshTree, 1)
            }
        }
        if (Mscrm.SolutionComponentList
            .$0 &&
            Mscrm.SolutionComponentList.$0 !== "")
            Mscrm.SolutionComponentList.refreshSubcomponentGrid(Mscrm.SolutionComponentList.$0);
        else Mscrm.SolutionComponentList.refreshGrid()
    };
Mscrm.SolutionComponentList.$e = function($p0, $p1) {
    var $v_0 = new RemoteCommand("Solution", "HasSolutionComponents", null);
    $v_0.SetParameter("objectId", $p0);
    $v_0.SetParameter("objectType", $p1.toString());
    var $v_1 = $v_0.Execute(null);
    return $v_1.ReturnValue
};
Mscrm.SolutionComponentList.$I = function($p0, $p1) {
    var $v_0 = new RemoteCommand("Solution", "CheckDependentComponents", null);
    $v_0.SetXmlParameter("data", $p0);
    var $v_1 = $v_0.Execute(null);
    if ($v_1.Success) {
        var $v_2 = $v_1.ReturnValue;
        if (isNullOrEmptyString($v_2)) return;
        var $v_3 = XUI.Xml.LoadXml($v_2), $v_4 = XUI.Xml.SelectSingleNode($v_3, "result", null);
        Mscrm.SolutionComponentList.$H = $p0;
        if (!IsNull($v_4) && $v_4.childNodes.length === 3) {
            var $v_5 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "total", null)),
                $v_6 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "objectid", null)),
                $v_7 = XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_4, "objecttype", null));
            Mscrm.SolutionComponentList.$J = $p1;
            Mscrm.SolutionComponentList.$K($v_6, Number.parseInvariant($v_7), Number.parseInvariant($v_5), false)
        } else Mscrm.SolutionComponentList.addSolutionComponentCallback(false, null, 0, false)
    }
};
Mscrm.SolutionComponentList.$O = function($p0, $p1) {
    var $v_0 = new RemoteCommand("Solution", "AddComponentDependency", null);
    $v_0.SetParameter("objectId", $p0);
    $v_0.SetParameter("objectType", $p1.toString());
    $v_0.SetParameter("addDependentComponent", "1");
    var $v_1 = $v_0.Execute(null)
};
Mscrm.SolutionComponentList.$7 = function($p0, $p1) {
    Mscrm.SolutionComponentList.$5 = window.LOCID_SELECTONE_WARN;
    var $v_0 = "";
    if ($p0 && $p0 !== "")
        if ($p0.toString() === Xrm.Internal.getResourceString("LOCID_ATTRIBUTE_TYPE").toString()) {
            $v_0 = "gridAttributes";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_ATTRLST_MUSTSELECT").toString()
        } else if ($p0.toString() === Xrm.Internal.getResourceString("LOCID_SYSTEMTYPE_TYPE").toString()) {
            $v_0 = "gridForm";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_ACTION_SELECTONEFORM").toString()
        } else if ($p0.toString() === Xrm.Internal.getResourceString("LOCID_VIEW_TYPE").toString()) {
            $v_0 = "gridUIElements";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_MANUIE_MUSTSELECT").toString()
        } else if ($p0.toString() === Xrm.Internal.getResourceString("LOCID_CHARTS_TYPE").toString()) {
            $v_0 = "gridVisualizations";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_MANUIE_MUSTSELECT").toString()
        } else if ($p0
            .toString() ===
            Xrm.Internal.getResourceString("LOCID_KEYS_TYPE").toString()) $v_0 = "gridAlternateKeys";
        else if ($p0
            .toString() ===
            Xrm.Internal.getResourceString("LOCID_HIERARCHYRULE_TYPE").toString()) $v_0 = "gridHierarchyRules";
        else if ($p0
            .toString() ===
            Xrm.Internal.getResourceString("LOCID_BPF_TYPE").toString()) $v_0 = "gridBusinessRules";
        else if ($p0
            .toString() ===
            Xrm.Internal.getResourceString("LOCID_MESSAGES_TYPE").toString()) $v_0 = "gridDisplayStrings";
        else if ($p0
            .toString() ===
            Xrm.Internal.getResourceString("LOCID_DASHBOARDS_TYPE").toString()) $v_0 = "crmGridControl";
        else if ($p0.toString() === Xrm.Internal.getResourceString("LOCID_RELATIONSHIP_TYPE").toString() &&
            !Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
            $p1 !== -1) {
            if ($p1 === 256) $v_0 = "gridOneToManyRelationships";
            if ($p1 === 512) $v_0 = "gridManyToOneRelationships";
            if ($p1 === 1024) $v_0 = "gridManyToManyRelationships";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_RELLST_MUSTSELECT").toString()
        } else {
            $v_0 = "gridRelationships";
            Mscrm.SolutionComponentList.$5 = Xrm.Internal.getResourceString("LOCID_RELLST_MUSTSELECT").toString()
        }
    return $v_0
};
Mscrm.SolutionComponentList.removeSolutionSubcomponent = function(subcomponentType) {
    Mscrm.SolutionComponentList.$0 = subcomponentType;
    if (!Mscrm.SolutionComponentList.$1(false, true)) return;
    DisplayActionMsg(window.LOCID_SOLUTIONCOMPONENT_REMOVING, 400, 150);
    window.setTimeout(Mscrm.SolutionComponentList.doRemovingSolutionComponents, 100)
};
Mscrm.SolutionComponentList.removeSolutionComponent = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return;
    DisplayActionMsg(window.LOCID_SOLUTIONCOMPONENT_REMOVING, 400, 150);
    window.setTimeout(Mscrm.SolutionComponentList.doRemovingSolutionComponents, 100)
};
Mscrm.SolutionComponentList.doRemovingSolutionComponents = function() {
    try {
        var $v_0 = null, $v_1 = "";
        if (Mscrm.SolutionComponentList.$0 && Mscrm.SolutionComponentList.$0 !== "") {
            if (Mscrm.SolutionComponentList.$E(Mscrm.SolutionComponentList.$0)) {
                $v_1 = Mscrm.SolutionComponentList.$7(Mscrm.SolutionComponentList.$0, -1);
                $v_0 = Mscrm.SolutionComponentList.getSubcomponentSelectedRow($v_1)
            }
        } else $v_0 = Mscrm.SolutionComponentList.getSelectedRow();
        for (var $v_2 = createXmlDoc("components"), $v_6 = 0; $v_6 < $v_0.length; $v_6++) {
            var $v_7 = addXmlNode($v_2, "component"), $v_8 = Mscrm.SolutionComponentList.$B($v_0[$v_6][3], "oid");
            if (Mscrm.SolutionComponentList.$0 && Mscrm.SolutionComponentList.$0 !== "") {
                if (Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_SYSTEMTYPE_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_CHARTS_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_HIERARCHYRULE_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_KEYS_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_MESSAGES_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_BPF_TYPE").toString() ||
                    Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_DASHBOARDS_TYPE")
                    .toString()) addTextXmlNode($v_7, "id", $v_8);
                else
                    (Mscrm.SolutionComponentList.$0.toString() ===
                            Xrm.Internal.getResourceString("LOCID_VIEW_TYPE").toString() ||
                            Mscrm.SolutionComponentList.$0.toString() ===
                            Xrm.Internal.getResourceString("LOCID_ATTRIBUTE_TYPE").toString() ||
                            Mscrm.SolutionComponentList.$0.toString() ===
                            Xrm.Internal.getResourceString("LOCID_RELATIONSHIP_TYPE").toString()) &&
                        addTextXmlNode($v_7, "id", $v_8.toString().split(":")[2]);
                if (Mscrm.SolutionComponentList.$0.toString() ===
                    Xrm.Internal.getResourceString("LOCID_DASHBOARDS_TYPE")
                    .toString())
                    addTextXmlNode($v_7, "type", Xrm.Internal.getResourceString("LOCID_SYSTEMTYPE_TYPE").toString());
                else addTextXmlNode($v_7, "type", Mscrm.SolutionComponentList.$0)
            } else {
                addTextXmlNode($v_7, "id", $v_8);
                addTextXmlNode($v_7, "type", $v_0[0][1])
            }
        }
        var $v_3 = convertXmlDocToString($v_2), $v_4 = new RemoteCommand("Solution", "RemoveSolutionComponent", null);
        $v_4.SetXmlParameter("data", $v_3);
        var $v_5 = $v_4.Execute(null);
        $v_5.Success && parseInt($v_5.ReturnValue, 10) === 9333 && Mscrm.SolutionComponentList.$L();
        if (Mscrm.SolutionComponentList
            .$0 &&
            Mscrm.SolutionComponentList.$0 !== "")
            Mscrm.SolutionComponentList.refreshSubcomponentGrid(Mscrm.SolutionComponentList.$0);
        else Mscrm.SolutionComponentList.refreshGrid()
    } finally {
        HideActionMsg()
    }
};
Mscrm.SolutionComponentList.launchObject = function(sender, args) {
    var $v_0 = args.objectTypeCode, $v_1 = args.objectRow;
    if (IsNull($v_0) || IsNull($v_1)) return true;
    var $v_2 = $v_1;
    if (IsNull($v_2)) return true;
    var $v_3 = "";
    switch ($v_0) {
    case 9801:
        $v_3 = $v_2.getAttribute("oid");
        Mscrm.TreeNavControl.navigateToNode("9801", $v_3, null);
        args.breakEvent = true;
        return false;
    case 4703:
        $v_3 = $v_2.getAttribute("oid");
        var $v_4 = $v_2.getAttribute("category");
        if (!isNullOrEmptyString($v_3) && !isNullOrEmptyString($v_4) && Mscrm.Utilities.parseInt($v_4) === 4) {
            Mscrm.BpfConfiguratorUtils.launchConfigurator($v_3);
            args.breakEvent = true;
            return false
        }
        return true
    }
    return true
};
Mscrm.SolutionComponentList.deleteSolutionComponent = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return;
    var $v_0 = Mscrm.SolutionComponentList.getSelectedRow()[0][0];
    if ($v_0 === "{D1F511A8-1EAD-E211-BB72-00155DA9A201}") {
        alert(window.LOCID_SALES_DASHBOARD);
        return
    }
    var $v_1 = $find(Mscrm.SolutionComponentList.$4()),
        $v_2 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_3 = Number.parseInvariant($v_2[0][1]);
    switch ($v_3) {
    case 9801:
        var $v_4 = Mscrm.SolutionComponentList.$B($v_2[0][3], "subtype"), $v_5 = Number.parseInvariant($v_4);
        if (!($v_5 & 1)) {
            alert(window.LOCID_ENTUTL_CANTDELSYSENT);
            return
        }
        break;
    case 1120:
        if (window._bIsDefaultSolution) {
            alert(window.LOCID_DELETE_DEFAULT_CLIENTEXT);
            return
        } else {
            alert(window.LOCID_DELETE_CLIENTEXT);
            return
        }
    case 4709:
        for (var $v_7 = 0; $v_7 < $v_2.length; $v_7++) {
            var $v_8 = Mscrm.SolutionComponentList.$B($v_2[$v_7][3], "isappaware");
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_8) || $v_8 === "False") {
                alert(window.LOCID_DELETE_SITEMAP);
                return
            }
        }
        break
    }
    var $v_6 = Mscrm.GridRibbonActions.deleteRecords($v_1, $v_1.get_selectedRecords(), $v_3);
    $v_6 && $v_3 === 9333 && Mscrm.SolutionComponentList.$L();
    $v_6 && ($v_3 === 9801 || $v_3 === 4605) && Mscrm.TreeNavControl.refreshTree()
};
Mscrm.SolutionComponentList.getSubcomponentSelectedRow = function(gridId) { return getSelectedRow(gridId) };
Mscrm.SolutionComponentList.getSelectedRow = function() { return getSelectedRow(Mscrm.SolutionComponentList.$4()) };
Mscrm.SolutionComponentList.$1 = function($p0, $p1) {
    var $v_0 = "";
    if (Mscrm.SolutionComponentList.$0 && Mscrm.SolutionComponentList.$0 !== "") {
        if (Mscrm.SolutionComponentList.$E(Mscrm.SolutionComponentList
            .$0)) $v_0 = Mscrm.SolutionComponentList.$7(Mscrm.SolutionComponentList.$0, -1)
    } else $v_0 = Mscrm.SolutionComponentList.$4();
    var $v_1 = getSelected($v_0);
    if ($v_1.length < 1) {
        alert($p1 ? Mscrm.SolutionComponentList.$5 : window.LOCID_SELECTONE_WARN);
        return false
    }
    if ($v_1.length > 1 && $p0) {
        alert(window.LOCID_ONLYSELECTONE_WARN);
        return false
    }
    var $v_2 = getCommonObjectType($v_0);
    if (IsNull($v_2)) {
        alert(window.LOCID_HETEROGENOUS_TYPES);
        return false
    }
    return true
};
Mscrm.SolutionComponentList.$S = function() { Mscrm.SolutionComponentList.$6(9804) };
Mscrm.SolutionComponentList.$Q = function() { Mscrm.SolutionComponentList.$6(9801) };
Mscrm.SolutionComponentList.$U = function() { Mscrm.SolutionComponentList.$6(4709) };
Mscrm.SolutionComponentList.$T = function() { Mscrm.SolutionComponentList.$6(1120) };
Mscrm.SolutionComponentList.$V = function() { Mscrm.SolutionComponentList.$6(9333) };
Mscrm.SolutionComponentList.$P = function() { Mscrm.SolutionComponentList.$6(1030) };
Mscrm.SolutionComponentList.$R = function() { Mscrm.SolutionComponentList.$6(1032) };
Mscrm.SolutionComponentList.selectAllComponent = function() {
    var $v_0 = $get("chkSelectEntityMetadata");
    if ($get("chkSelectAllAssets").checked) {
        Sys.UI.DomElement.addCssClass($get("disableGrid"), "ms-crm-disableDiaglogGrid");
        $v_0.checked = true;
        $v_0.disabled = true
    } else {
        Sys.UI.DomElement.removeCssClass($get("disableGrid"), "ms-crm-disableDiaglogGrid");
        $v_0.disabled = false
    }
};
Mscrm.SolutionComponentList.applyChanges = function(backButtonClicked) {
    var $v_0 = Mscrm.SolutionComponentList.$3("gridForm"),
        $v_1 = Mscrm.SolutionComponentList.$3("gridAttributes"),
        $v_2 = Mscrm.SolutionComponentList.$3("gridBpf"),
        $v_3 = Mscrm.SolutionComponentList.$3("gridVisualizations"),
        $v_4 = Mscrm.SolutionComponentList.$3("gridOneToManyRelationships"),
        $v_5 = Mscrm.SolutionComponentList.$3("gridManyToOneRelationships"),
        $v_6 = Mscrm.SolutionComponentList.$3("gridManyToManyRelationships"),
        $v_7 = Mscrm.SolutionComponentList.$3("gridUIElements"),
        $v_8 = Mscrm.SolutionComponentList.$3("gridDisplayStrings"),
        $v_9 = Mscrm.SolutionComponentList.$3("gridAlternateKeys"),
        $v_A = Mscrm.SolutionComponentList.$3("gridHierarchyRules"),
        $v_B = Mscrm.SolutionComponentList.$3("crmGridControl"),
        $v_C = new Array(0);
    if ($get("chkSelectAllAssets").checked) {
        var $v_D = new Mscrm.SolutionComponentList.SCItem;
        $v_D.id = Xrm.Internal.getResourceString("LOCID_ENTITY_ID");
        $v_D.includeSubcomponents = true;
        $v_D.includeComponentSettings = true;
        $v_D.addAllAssetsChecked = true;
        $v_D.type = Xrm.Internal.getResourceString("LOCID_ENTITY_TYPE");
        $v_D.itemType = $v_D.type;
        $v_C.push($v_D)
    } else {
        var $v_E = new Mscrm.SolutionComponentList.SCItem;
        $v_E.id = Xrm.Internal.getResourceString("LOCID_ENTITY_ID");
        $v_E.type = Xrm.Internal.getResourceString("LOCID_ENTITY_TYPE");
        $v_E.itemType = $v_E.type;
        $v_E.includeSubcomponents = false;
        $v_E.addAllAssetsChecked = false;
        if ($get("chkSelectEntityMetadata").checked) $v_E.includeComponentSettings = true;
        else $v_E.includeComponentSettings = false;
        $v_C.push($v_E);
        $v_C = Mscrm.SolutionComponentList.setReturnValues($v_C,
            $v_0,
            Xrm.Internal.getResourceString("LOCID_SYSTEMTYPE_TYPE"));
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesForAttributeGrid($v_C, $v_1, Xrm.Internal.getResourceString("LOCID_ATTRIBUTE_TYPE"));
        $v_C = Mscrm.SolutionComponentList
            .setReturnValues($v_C, $v_2, Xrm.Internal.getResourceString("LOCID_BPF_TYPE"));
        $v_C = Mscrm.SolutionComponentList.setReturnValues($v_C,
            $v_3,
            Xrm.Internal.getResourceString("LOCID_CHARTS_TYPE"));
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesForRelationshipGrid($v_C,
                $v_4,
                Xrm.Internal.getResourceString("LOCID_RELATIONSHIP_TYPE"),
                256);
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesForRelationshipGrid($v_C,
                $v_5,
                Xrm.Internal.getResourceString("LOCID_RELATIONSHIP_TYPE"),
                512);
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesForRelationshipGrid($v_C,
                $v_6,
                Xrm.Internal.getResourceString("LOCID_RELATIONSHIP_TYPE"),
                1024);
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesForRelationshipGrid($v_C, $v_7, Xrm.Internal.getResourceString("LOCID_VIEW_TYPE"), -1);
        $v_C = Mscrm.SolutionComponentList.setReturnValues($v_C,
            $v_8,
            Xrm.Internal.getResourceString("LOCID_MESSAGES_TYPE"));
        $v_C = Mscrm.SolutionComponentList.setReturnValues($v_C,
            $v_9,
            Xrm.Internal.getResourceString("LOCID_KEYS_TYPE"));
        $v_C = Mscrm.SolutionComponentList.setReturnValues($v_C,
            $v_A,
            Xrm.Internal.getResourceString("LOCID_HIERARCHYRULE_TYPE"));
        $v_C = Mscrm.SolutionComponentList
            .setReturnValuesWithItemType($v_C,
                $v_B,
                Xrm.Internal.getResourceString("LOCID_SYSTEMTYPE_TYPE"),
                Xrm.Internal.getResourceString("LOCID_DASHBOARDS_TYPE"))
    }
    $v_C.push(backButtonClicked);
    Mscrm.Utilities.setReturnValue($v_C);
    closeWindow();
    return
};
Mscrm.SolutionComponentList.$3 = function($p0) {
    var $v_0 = $find($p0);
    if (!IsNull($v_0)) return $v_0.get_innerGrid().get_selectedRecords();
    return []
};
Mscrm.SolutionComponentList
    .setReturnValuesForRelationshipGrid = function(items, relationshipGrid, typeCode, relationshipRole) {
        return Mscrm.SolutionComponentList.$9(items, relationshipGrid, typeCode, typeCode, 2, relationshipRole)
    };
Mscrm.SolutionComponentList.setReturnValues = function(items, returnValuesGrid, typeCode) {
    return Mscrm.SolutionComponentList.$9(items, returnValuesGrid, typeCode, typeCode, -1, -1)
};
Mscrm.SolutionComponentList.setReturnValuesWithItemType = function(items, returnValuesGrid, typeCode, itemTypeCode) {
    return Mscrm.SolutionComponentList.$9(items, returnValuesGrid, typeCode, itemTypeCode, -1, -1)
};
Mscrm.SolutionComponentList
    .setReturnValuesForAttributeGrid = function(items, attributeGrid, typeCode) {
        return Mscrm.SolutionComponentList.$9(items, attributeGrid, typeCode, typeCode, 2, -1)
    };
Mscrm.SolutionComponentList.$9 = function($p0, $p1, $p2, $p3, $p4, $p5) {
    if ($p1)
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            var $v_1 = new Mscrm.SolutionComponentList.SCItem;
            if ($p4 === -1) $v_1.id = $p1[$v_0][0].toString();
            else $v_1.id = $p1[$v_0][0].toString().split(":")[$p4];
            $v_1.type = $p2;
            $v_1.itemType = $p3;
            $v_1.includeSubcomponents = true;
            $v_1.includeComponentSettings = true;
            if ($p5 !== -1) $v_1.relationshipRole = $p5;
            $p0.push($v_1)
        }
    return $p0
};
Mscrm.SolutionComponentList.$6 = function($p0) {
    try {
        var $v_0 = null, $v_1 = null;
        switch ($p0) {
        case 9804:
            $v_0 = Mscrm.SolutionComponentList.$c();
            break;
        case 9801:
            $v_0 = Mscrm.SolutionComponentList.$a();
            break;
        case 4709:
        case 1120:
            $v_0 = Mscrm.SolutionComponentList.$Y($p0);
            break;
        case 9333:
            $v_0 = Mscrm.SolutionComponentList.$d();
            break;
        case 1032:
        case 1030:
            $v_0 = Mscrm.SolutionComponentList.$Z();
            break
        }
        if (!$v_0) return;
        $v_1 = new RemoteCommand("SystemCustomization", "PublishCustomizations", null);
        $v_1.SetXmlParameter("data", $v_0);
        if (!$v_1) return;
        var $v_2 = $v_1.Execute(null)
    } finally {
        HideActionMsg()
    }
};
Mscrm.SolutionComponentList.$c = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return null;
    for (var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_1 = createXmlDoc("importexportxml"),
        $v_2 = addXmlNode($v_1, "optionsets"),
        $v_3 = 0;
        $v_3 < $v_0.length;
        $v_3++) {
        var $v_4 = $v_0[$v_3][0];
        addTextXmlNode($v_2, "optionset", $v_4)
    }
    return convertXmlDocToString($v_1)
};
Mscrm.SolutionComponentList.$Z = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return null;
    for (var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_1 = createXmlDoc("publish"),
        $v_2 = addXmlNode($v_1, "dashboards"),
        $v_3 = 0;
        $v_3 < $v_0.length;
        $v_3++) {
        var $v_4 = $v_0[$v_3][0];
        addTextXmlNode($v_2, "dashboard", $v_4)
    }
    return convertXmlDocToString($v_1)
};
Mscrm.SolutionComponentList.$d = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return null;
    for (var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_1 = createXmlDoc("publish"),
        $v_2 = addXmlNode($v_1, "webresources"),
        $v_3 = 0;
        $v_3 < $v_0.length;
        $v_3++) {
        var $v_4 = $v_0[$v_3][0];
        addTextXmlNode($v_2, "webresource", $v_4)
    }
    return convertXmlDocToString($v_1)
};
Mscrm.SolutionComponentList.$a = function() {
    if (!Mscrm.SolutionComponentList.$1(false, false)) return null;
    for (var $v_0 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_1 = createXmlDoc("publish"),
        $v_2 = addXmlNode($v_1, "entities"),
        $v_3 = 0;
        $v_3 < $v_0.length;
        $v_3++) {
        var $v_4 = Mscrm.SolutionComponentList.$B($v_0[$v_3][3], "subtype"), $v_5 = Number.parseInvariant($v_4);
        if (!($v_5 & 2)) {
            alert(window.LOCID_ENTUTL_CANTPUBLISHENT);
            return null
        }
        var $v_6 = $v_0[$v_3][0];
        addTextXmlNode($v_2, "entity", $v_6)
    }
    return convertXmlDocToString($v_1)
};
Mscrm.SolutionComponentList.$Y = function($p0) {
    var $v_0 = $p0 === 4709 ? false : true;
    if (!Mscrm.SolutionComponentList.$1($v_0, false)) return null;
    var $v_1 = null, $v_2 = null;
    switch ($p0) {
    case 4709:
        $v_1 = "sitemap";
        $v_2 = "sitemaps";
        break;
    case 1120:
        $v_1 = "ribbon";
        $v_2 = "ribbons";
        break;
    default:
        return null
    }
    for (var $v_3 = createXmlDoc("publish"),
        $v_4 = addXmlNode($v_3, $v_2),
        $v_5 = Mscrm.SolutionComponentList.getSelectedRow(),
        $v_6 = 0;
        $v_6 < $v_5.length;
        $v_6++) {
        var $v_7 = $v_5[$v_6][0];
        addTextXmlNode($v_4, $v_1, $v_7)
    }
    return convertXmlDocToString($v_3)
};
Mscrm.SolutionComponentList.refreshGrid = function() {
    var $v_0 = Mscrm.SolutionComponentList.$4();
    if (!isNullOrEmptyString($v_0)) {
        refreshGrid(Mscrm.SolutionComponentList.$4());
        Mscrm.TreeNavControl.refreshTree()
    }
};
Mscrm.SolutionComponentList.refreshSubcomponentGrid = function(componentType) {
    if (Mscrm.SolutionComponentList.$E(componentType)) {
        refreshGrid(Mscrm.SolutionComponentList.$7(componentType, -1));
        Mscrm.TreeNavControl.refreshTree()
    }
};
Mscrm.SolutionComponentList.$E = function($p0) {
    if (!isNullOrEmptyString(window.LOCID_SUBCOMPONENT_TYPES)) {
        var $v_0 = window.LOCID_SUBCOMPONENT_TYPES.split(",");
        return Array.indexOf($v_0, $p0.toString()) !== -1
    }
    return false
};
Mscrm.SolutionComponentList.onFilterChange = function(componentType, relationshipRole) {
    var $v_0 = null;
    switch (componentType) {
    case "9802":
        $v_0 = $find("gridAttributes");
        $v_0.SetParameter("attributeFilter",
            Mscrm.FormControlInputBehavior.GetBehavior("selFilterAttributes").get_dataValue().toString());
        break;
    case "9803":
        if (relationshipRole === 512) {
            $v_0 = $find("gridManyToOneRelationships");
            $v_0.SetParameter("relationshipFilter",
            (Mscrm.FormControlInputBehavior.GetBehavior("selFilterMRelationships").get_dataValue() |
                relationshipRole).toString())
        } else if (relationshipRole === 256) {
            $v_0 = $find("gridOneToManyRelationships");
            $v_0.SetParameter("relationshipFilter",
            (Mscrm.FormControlInputBehavior.GetBehavior("selFilterRelationships")
                .get_dataValue() |
                relationshipRole).toString())
        } else {
            $v_0 = $find("gridManyToManyRelationships");
            $v_0.SetParameter("relationshipFilter",
            (Mscrm.FormControlInputBehavior.GetBehavior("selFilterNToNRelationships").get_dataValue() |
                relationshipRole).toString())
        }
        break;
    case "1039":
        $v_0 = $find("gridUIElements");
        $v_0.SetParameter("uiElementsFilter",
            Mscrm.FormControlInputBehavior.GetBehavior("selFilterViews").get_dataValue().toString());
        break;
    case "1111":
        $v_0 = $find("gridVisualizations");
        $v_0.SetParameter("visualizationsFilters",
            Mscrm.FormControlInputBehavior.GetBehavior("selFilterCharts").get_dataValue().toString());
        break
    }
    if ($v_0) {
        $v_0.ResetPageNumber();
        $v_0.Refresh()
    }
};
Mscrm.SolutionComponentList.$B = function($p0, $p1) {
    var $v_0 = $p0, $v_1 = $v_0.getAttribute($p1);
    return $v_1
};
Mscrm.SolutionComponentList.SCItem = function() {};
Mscrm.SolutionComponentList.SCItem.prototype = {
    id: null,
    type: null,
    itemType: null,
    includeSubcomponents: false,
    relationshipRole: 0,
    includeComponentSettings: false,
    addAllAssetsChecked: false
};
Mscrm.SolutionComponentState = function() {};
Mscrm.SolutionComponentState.prototype = {
    objectId: null,
    includeSubcomponent: null,
    objectType: null,
    itemType: null,
    relationshipRole: null,
    includeComponentSettings: null,
    addAllAssetsChecked: null
};
Mscrm.SolutionComponentList.registerClass("Mscrm.SolutionComponentList");
Mscrm.SolutionComponentList.SCItem.registerClass("Mscrm.SolutionComponentList.SCItem");
Mscrm.SolutionComponentState.registerClass("Mscrm.SolutionComponentState");
Mscrm.SolutionComponentList.$D = 0;
Mscrm.SolutionComponentList.$C = 0;
Mscrm.SolutionComponentList.$G = 0;
Mscrm.SolutionComponentList.$2 = [];
Mscrm.SolutionComponentList.$8 = {};
Mscrm.SolutionComponentList.$0 = "";
Mscrm.SolutionComponentList.oneToManyRelationshipRole = 256;
Mscrm.SolutionComponentList.manyToOneRelationshipRole = 512;
Mscrm.SolutionComponentList.manyToManyRelationshipRole = 1024;
Mscrm.SolutionComponentList.$5 = "";
Mscrm.SolutionComponentList.$F = 0;
Mscrm.SolutionComponentList.$H = null;
Mscrm.SolutionComponentList.$J = 0;
Mscrm.SolutionComponentList.$N = ["9801", "9804", "4703", "2011", "9106", "127", "2010", "1036", "3231"]