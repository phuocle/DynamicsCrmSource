
var MENU_DEL_ONLY = 1,
    MENU_DEL_WIP = 2,
    MENU_DEL_ASSIGN = 4,
    MENU_ALL = 8;

function OnQueueChange(queueSelector) {
    var crmGrid = $find("crmGrid");
    if (IsNull(crmGrid)) {
        alert(LOCID_GRID_NOT_FOUND);
        return
    }
    crmGrid.SetParameter("qid", queueSelector.value);
    var findCriteria = document.getElementById("crmGrid_findCriteria");
    if (findCriteria.value != "") {
        var quickFindContainer = $find(crmGrid.get_id() + "_quickFindContainer");
        quickFindContainer.NotifyExitedQuickFind();
        var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");
        !IsNull(SavedQuerySelector) &&
            SavedQuerySelector.set_dataValue(SavedQuerySelector.get_defaultSelected())
    }
    handleAdditionalFilter(crmGrid);
    var queueValue = Mscrm.FormControlInputBehavior.GetElementBehavior(queueSelector).get_dataValue();
    if (!IsNull(queueValue)) {
        var extraParams = [];
        extraParams["queueId"] = queueValue;
        updateStickyViewUrl(crmGrid.GetParameter("viewtype"), crmGrid.GetParameter("viewid"), null, null, extraParams)
    }
    refreshRibbon()
}

function workplaceWindowOnLoadHandler() {
    HandleBackButtonIssues("workplace")
}

window.onload = workplaceWindowOnLoadHandler