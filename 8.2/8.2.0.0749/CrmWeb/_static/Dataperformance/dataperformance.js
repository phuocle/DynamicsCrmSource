
function OnExecutionPeriodChange(oSelect) {
    var oGrid = $find("crmGrid");
    if (IsNull(oGrid)) {
        alert(LOCID_GRID_NOT_FOUND);
        return
    }
    var selectedValue = Mscrm.FormControlInputBehavior.GetElementBehavior(oSelect).get_dataValue();
    oGrid.SetParameter("periodfilter", selectedValue);
    oGrid.Refresh()
}