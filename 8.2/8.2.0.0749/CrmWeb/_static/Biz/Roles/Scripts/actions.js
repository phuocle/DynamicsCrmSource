
function copyRole(sRoleId) {
    var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("performCopyRolePostAction", this),
        results = openStdDlgWithCallback(Mscrm.CrmUri.create("/_grid/cmds/dlg_clonerole.aspx?roleId=" + sRoleId),
            null,
            550,
            250,
            callbackFunction);
    isOutlookHostedWindow() &&
        performCopyRolePostAction(results)
}

function performCopyRolePostAction(roleId) {
    roleId &&
        openObj(Role, roleId)
}