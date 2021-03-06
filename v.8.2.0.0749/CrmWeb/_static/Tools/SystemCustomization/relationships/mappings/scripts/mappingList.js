
var _oMessages = {
        sNoSelectedMapping: LOCID_MAPLST_MUSTSELECT,
        sConfirmAutomap: LOCID_MAPLST_CONFIRMAUTOMAP,
        sAutoMapping: LOCID_MAPLST_AUTOMAPING,
        sCreatingMapping: LOCID_MAPLST_CREATINGMAP
    },
    _oConst = {
        entityMapId: "entityMapId",
        sCustomizationCommandObject: "SystemCustomization",
        sAutoMapCommand: "AutoMapEntityMap",
        sCreateMappingCommand: "CreateAttributeMap",
        sCommandParameterName: "data",
        sDisableDoubleClick: "0",
        sCreateMappingUrlFormat: "/tools/systemcustomization/relationships/mappings/createMapping.aspx?mappingId={0}",
        iCreateDialogWidth: 920,
        iCreateDialogHeight: 400,
        sDeleteDialogUrlFormat: "/_grid/cmds/dlg_delete.aspx?iObjType={0}&iTotal={1}",
        sDeleteAction: "delete",
        iDeleteDialogWidth: 470,
        iDeleteDialogHeight: 250
    };

function MappingListJsWindowOnLoad() {
    var gridMappings = $find("gridMappings");
    gridMappings.add_onBeforeFormLoad(onMappingDblClick);
    gridMappings.SetParameter("disableDblClick", _oConst.sDisableDoubleClick)
}

Sys.Application.add_load(MappingListJsWindowOnLoad);

function dispatchAction(aMappingList, sAction) {
    if (aMappingList.length <= 0) {
        alert(_oMessages.sNoSelectedMapping);
        return
    }
    switch (sAction) {
    case _oConst.sDeleteAction:
        deleteMappingAction(aMappingList);
        break
    }
}

function remoteMappingCommandCallback() {
    $find("gridMappings").Refresh();
    return true
}

function createMappingAction() {
    var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateMappingUrlFormat, _sEntityMapId));
    if (Mscrm.Utilities.isChrome())
        openPopupWindowInChrome(oUrl, null, _oConst.iCreateDialogWidth, _oConst.iCreateDialogHeight);
    else {
        var oResult = openStdDlg(oUrl, null, _oConst.iCreateDialogWidth, _oConst.iCreateDialogHeight);
        oResult != null &&
            displayCreatedMapping(oResult)
    }
}

function displayCreatedMapping(oResult) {
    var oCommand = new RemoteCommand(_oConst.sCustomizationCommandObject, _oConst.sCreateMappingCommand);
    oCommand.SetXmlParameter(_oConst.sCommandParameterName, oResult.sMappingXml);
    executeRemoteCommand(oCommand, _oMessages.sCreatingMapping, remoteMappingCommandCallback)
}

function autoMapAction() {
    if (!confirm(_oMessages.sConfirmAutomap))
        return;
    var oCommand = new RemoteCommand(_oConst.sCustomizationCommandObject, _oConst.sAutoMapCommand);
    oCommand.SetParameter(_oConst.entityMapId, _sEntityMapId);
    executeRemoteCommand(oCommand, _oMessages.sAutoMapping, remoteMappingCommandCallback)
}

function deleteMappingAction(aMappingList) {
    var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sDeleteDialogUrlFormat, AttributeMap, aMappingList.length)),
        crmDialog = new Mscrm.CrmDialog(oUrl,
            aMappingList,
            _oConst.iDeleteDialogWidth,
            _oConst.iDeleteDialogHeight,
            null),
        parameters = [getCrmGrid()];
    crmDialog.setCallbackInfo("gridMappingsRefresh", this, parameters);
    crmDialog.show()
}

function gridMappingsRefresh(returnValue, gridControl) {
    returnValue &&
        !IsNull(gridControl) &&
        gridControl.refresh()
}

function onMappingDblClick(sender, args) {
    args.breakEvent = true
}