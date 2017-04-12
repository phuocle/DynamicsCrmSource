
function territory_onload() {
}

function SubmitOverride() {
    return false
}

var _oId = new Array(CURRENT_OBJ_ID);

function VerifyMembership() {
    window.confirm(LOCID_CONFIRM_REMOVAL_FROM_TERR) &&
        ModifyMembership(null, getGridId(window.self), _oId, ACTION_ADD, AppSalesPerson)
}

function RemoveMembers(sGrid) {
    var a = getSelected(sGrid);
    if (a.length > 0) {
        var parameters = [getCrmGrid()],
            crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri
                .create("/_grid/cmds/dlg_removeusers.aspx?iObjType=" +
                    APP_SALES_PERSON_OTC +
                    "&iTotal=" +
                    a.length +
                    "&teamid=" +
                    CURRENT_OBJ_ID),
                a,
                460,
                225,
                null);
        crmDialog.setCallbackInfo("performActionAfterRemoveMembers", this, parameters);
        oResult = crmDialog.show()
    } else
        alert(LOCID_NO_ITEM_SELECTED)
}

function PerformActionAfterRemoveMembers(returnValue, gridControl) {
    returnValue &&
        !IsNull(gridControl) &&
        gridControl.refresh()
}