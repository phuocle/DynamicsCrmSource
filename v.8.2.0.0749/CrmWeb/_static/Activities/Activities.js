
function activitiesWindowOnLoadHandler() {
    HandleBackButtonIssues("activities");
    AdjustForWindowSize();
    window.attachEvent("onresize", AdjustForWindowSize)
}

window.onload = activitiesWindowOnLoadHandler;

function AdjustForWindowSize() {
}

function OnActivityDateChange(oSelect) {
    var oGrid = $find("crmGrid");
    if (IsNull(oGrid)) {
        alert(LOCID_GRID_NOT_FOUND);
        return
    }
    var selectedValue = Mscrm.FormControlInputBehavior.GetElementBehavior(oSelect).get_dataValue();
    oGrid.SetParameter("datefilter", selectedValue);
    var findCriteria = document.getElementById("crmGrid_findCriteria"),
        appliedQuickFind = oGrid.GetParameter("quickfind");
    if (IsNull(appliedQuickFind))
        appliedQuickFind = "";
    if (findCriteria.value != appliedQuickFind) {
        findCriteria.value = appliedQuickFind;
        var hintText = Mscrm.CrmUIBehavior.getBehaviorByName(findCriteria, "HintText");
        Mscrm.CrmDebug.assert(!IsNull(hintText), "Required HintText behavior is null.");
        hintText.notifyTextChanged(null)
    }
    oGrid.Refresh();
    !IsNull(selectedValue) &&
        updateStickyViewUrl(oGrid.GetParameter("viewtype"), oGrid.GetParameter("viewid"), null, selectedValue)
}

function OnActivityTypeChange(oSelect) {
    var vizPaneID = "crmGrid_paneControl",
        vizPaneControl = $find(vizPaneID);
    if (!IsNull(vizPaneControl))
        if (vizPaneControl.isVisualizationPaneVisible() &&
            vizPaneControl.isPaneInDesignerMode() &&
            vizPaneControl.isDesignerPaneDirty()) {
            var response = confirm(LOCID_VPD_CLOSEWARNING);
            if (response == false) {
                vizPaneControl.setFocusOnVizPane();
                oSelect.selectedIndex = oSelect.oldIndex;
                return
            }
        }
    crmDateSelectorTD.Disabled = false;
    var retValues = null,
        pageManager = Mscrm.PageManager.get_instance(),
        crmGrid = $find("crmGrid");
    if (!IsNull(pageManager) && !IsOutlookClient())
        if (!IsNull(crmGrid)) {
            var parameters = {};
            parameters["key"] = String.format("ActivitiesTypeCachedView_{0}", oSelect.value);
            retValues = pageManager.raiseEvent(Mscrm.ScriptEvents.RetrieveCacheData, parameters)
        }
    var oGetQueryList = new RemoteCommand("ActivitiesWebService", "GetQueryList");
    oGetQueryList.SetParameter("entityName", oSelect.value);
    var oResult = oGetQueryList.Execute();
    oSelect.oldIndex = oSelect.selectedIndex;
    if (oResult.Success == ERROR_NONE) {
        var newVSId = "crmGrid_SavedNewQuerySelector",
            newVSControl = $find(newVSId);
        try {
            var crmGrid_OldSavedQuerySelectorTD = $get("crmGrid_OldSavedQuerySelectorTD"),
                oldSavedQuerySelectorTDFirstChild = XUI.Html.DomUtils.GetFirstChild(crmGrid_OldSavedQuerySelectorTD),
                oId = oldSavedQuerySelectorTDFirstChild.id;
            crmGrid_OldSavedQuerySelectorTD.innerHTML = XUI.Xml.GetText(oResult.Xml);
            with (oldSavedQuerySelectorTDFirstChild) {
                id = oId;
                onchange = ChangeView
            }
        } catch (e) {
        }
        if (newVSControl != null && newVSControl.showNewVSControl == true) {
            newVSControl.viewEntityName = oSelect.value;
            newVSControl.populateMenuFromQueryList(XUI.Xml.GetText(oResult.Xml));
            if (!IsNull(retValues) && retValues.length > 0 && !IsNull(retValues[0]))
                !IsNull(retValues[0]["viewid"]) &&
                    !IsNull(retValues[0]["viewtype"]) &&
                    newVSControl.setSelectedViewItemInMenu(retValues[0]["viewid"], false)
        }
        updateVisualizationList(crmGrid, oSelect.value);
        ChangeView(oSelect.value, false)
    }
}

function ChangeView(val, promptIfChartDirty) {
    var crmGrid = $find("crmGrid"),
        quickFindContainer = $find("crmGrid_quickFindContainer");
    quickFindContainer.NotifyExitedQuickFind();
    val == "bulkoperation" &&
        crmGrid.SetProperty("uiProvider", "Microsoft.Crm.Application.Controls.BulkOperationUIProvider");
    var newVSId = "crmGrid_SavedNewQuerySelector",
        newVSControl = $find(newVSId);
    try {
        var crmGrid_OldSavedQuerySelectorTD = $get("crmGrid_OldSavedQuerySelectorTD");
        handleView(XUI.Html.DomUtils.GetFirstChild(crmGrid_OldSavedQuerySelectorTD), crmGrid, promptIfChartDirty)
    } catch (e) {
        newVSControl != null &&
            newVSControl.showNewVSControl == true &&
            handleView(null, crmGrid, promptIfChartDirty)
    }
}

function updateVisualizationList(crmGrid, entityName) {
    var compositeControlId = crmGrid.get_id() + "_visualizationCompositeControl",
        compositeControl = $find(compositeControlId);
    !IsNull(compositeControl) &&
        compositeControl.isChartEnabled() &&
        compositeControl.handleEntityChange(entityName, GetStickyVisualizationId(crmGrid, entityName))
}

function GetStickyVisualizationId(crmGrid, entityName) {
    var sId = "",
        oPaneControl = $find(crmGrid.get_id() + "_paneControl");
    if (IsNull(oPaneControl))
        return "";
    var pageManager = Mscrm.PageManager.get_instance();
    if (IsNull(pageManager) || IsOutlookClient() || IsNull(crmGrid))
        return "";
    var parameters = {};
    parameters["key"] = String.format("ActivitiesTypeCachedVisualization_{0}", entityName);
    var retValues = pageManager.raiseEvent(Mscrm.ScriptEvents.RetrieveCacheData, parameters);
    if (!IsNull(retValues) && retValues.length > 0 && !IsNull(retValues[0]))
        if (!isNullOrEmptyString(retValues[0]["visualizationId"]) &&
            !isNullOrEmptyString(retValues[0]["visualizationType"]))
            return retValues[0]["visualizationId"];
    return ""
}