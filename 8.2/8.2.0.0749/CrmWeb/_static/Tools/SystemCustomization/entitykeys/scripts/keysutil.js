
var _oUtilMessages = {
        sConfirmEntityKeyDelete: LOCID_KEYSUTL_CONFIRMDELKEYS,
        sCreatingEntityKey: LOCID_KEYSUTL_CREATINGKEYS,
        sReactivateEntityKey: LOCID_KEYSUTL_REACTIVATEKEY,
        sDeletingEntityKey: LOCID_KEYSUTL_DELETINGKEYS
    },
    _oUtilTypes = { sString: "nvarchar" },
    _oUtilConst = {
        entityKeyId: "entityKeyId",
        sCustomizationCommandObject: "SystemCustomization",
        sCreateEntityKeyCommand: "CreateEntityKey",
        sReactivateEntityKeyCommand: "ReactivateEntityKey",
        sDeleteEntityKeyCommand: "DeleteEntityKey",
        sCommandParameterName: "data",
        sDeleteAction: "delete",
        sReactivateAction: "reactivate"
    };

function dispatchAction(sEntityKeyOid, sAction) {
    switch (sAction) {
    case _oUtilConst.sDeleteAction:
        var gridControl = $find("gridAlternateKeys");
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/ribbonactions.js"));
        var retVal = Mscrm.GridRibbonActions.deleteRecords(gridControl,
            gridControl.get_selectedRecords(),
            Mscrm.EntityTypeCode.EntityKey);
        break;
    case _oUtilConst.sReactivateAction:
        if (sEntityKeyOid == null || sEntityKeyOid.length > 1) {
            alert(window.LOCID_ACTION_SELECTONEALTERNATEKEY);
            return
        }
        reactivateEntityKeyAction(sEntityKeyOid[0])
    }
}

function getSelectedEntityKeyOids() {
    for (var aRecords = $find("gridAlternateKeys").get_innerGrid().get_selectedRecords(),
        ids = new Array(aRecords.length),
        i = 0;
        i < aRecords.length;
        i++)
        ids[i] = aRecords[i][0];
    return aRecords.length > 0 ? ids : null
}

function createEntityKey(sDataXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oUtilConst.sCustomizationCommandObject, _oUtilConst.sCreateEntityKeyCommand);
    oCommand.SetXmlParameter(_oUtilConst.sCommandParameterName, sDataXml);
    executeRemoteCommand(oCommand, _oUtilMessages.sCreatingEntityKey, fCallback, oCallbackParams)
}

function reactivateEntityKeyAction(sEntityKeyId) {
    var oCallbackParams = new CallbackParams(true, true),
        oCommand = new RemoteCommand(_oUtilConst.sCustomizationCommandObject, _oUtilConst.sReactivateEntityKeyCommand);
    oCommand.SetParameter(_oUtilConst.entityKeyId, sEntityKeyId);
    executeRemoteCommand(oCommand, _oUtilMessages.sReactivateEntityKey, reactivateCommandCallback, oCallbackParams)
}

function reactivateCommandCallback(oResult, oCallbackParams) {
    HideActionMsg();
    if (oResult.Success)
        if (oCallbackParams.bRefreshGrid)
            try {
                $find("gridAlternateKeys").Refresh()
            } catch (e) {
            }
}

function CallbackParams(bClose, bRefreshGrid) {
    this.bClose = bClose;
    this.bRefreshGrid = bRefreshGrid
}

function deleteEntityKey(sEntityKeyId, fCallback, oCallbackParams) {
    if (!confirm(_oUtilMessages.sConfirmEntityKeyDelete))
        return;
    var oCommand = new RemoteCommand(_oUtilConst.sCustomizationCommandObject, _oUtilConst.sDeleteEntityKeyCommand);
    oCommand.SetParameter(_oUtilConst.entityKeyId, sEntityKeyId);
    executeRemoteCommand(oCommand, _oUtilMessages.sDeletingEntityKey, fCallback, oCallbackParams)
}