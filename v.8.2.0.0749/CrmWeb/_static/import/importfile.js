
function ExportErrors(importFileId, gridRecordsNumber) {
    if (gridRecordsNumber > 0) {
        var formName = "exportErrorRowForm",
            errorRowForm = document.getElementById(formName);
        if (IsNull(errorRowForm)) {
            var errorRowForm = document.createElement("FORM");
            errorRowForm.setAttribute("name", formName);
            errorRowForm.setAttribute("method", "post");
            errorRowForm.style.display = "none";
            document.body.appendChild(errorRowForm)
        }
        errorRowForm.action = Mscrm.CrmUri.create("/import/downloaderrors.aspx?id=" +
            CrmEncodeDecode.CrmUrlEncode(importFileId)).toString();
        errorRowForm.submit()
    } else
        alert(LOCID_NO_IMPORT_ERROR_ROWS)
}

function assignImport() {
    var ret_val,
        eventCode;
    eventCode = 47;
    var url = "/_grid/cmds/dlg_frmassign.aspx";
    url += "?pId=" + importId;
    url += "&pType=" + Import;
    url += "&iObjType=" + 4410;
    url += "&iTotal=1";
    var parameters = [];
    parameters[0] = eventCode;
    var callbackFunctionObject = Mscrm.Utilities
        .createCallbackFunctionObject("frmAssignImportAction", this, parameters);
    ret_val = openStdDlgWithCallback(Mscrm.CrmUri.create(url), document, 456, 260, callbackFunctionObject);
    isOutlookHostedWindow() &&
        frmAssignImportAction(ret_val, eventCode)
}

function frmAssignImportAction(ret_val, eventCode) {
    if (ret_val)
        if (ret_val.OwnerId) {
            var oOwnerId = createHiddenInput("assignOwnerId", ret_val.OwnerId),
                oOwnerType = createHiddenInput("assignOwnerType", ret_val.OwnerType);
            if (!$find("crmForm").SubmitCrmForm(eventCode, true, true, false)) {
                deleteInput(oOwnerId);
                deleteInput(oOwnerType)
            }
        }
}

function deleteAllRecordsForCurrentImport() {
    doAction("crmGrid", 4412, "deleteallimportedrecords", importFileId)
}

function deleteAllRecordsForCurrentImportFile() {
    doAction("crmGrid", 4412, "deleteimportedrecords", importFileId)
}

function hasImportCompleted() {
    if (window.HasImportCompleted === undefined)
        return false;
    if (HasImportCompleted == 1)
        return true;
    else
        return false
}