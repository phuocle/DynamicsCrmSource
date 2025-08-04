
var _oMessages = {
        sCloseAlert: LOCID_FORMS_SAVE_CONFIRM_TITLE,
        sConfirmEntityKeyDelete: LOCID_KEYSUTL_CONFIRMDELKEYS,
        sCreatingEntityKey: LOCID_KEYSUTL_CREATINGKEYS,
        sDeletingEntityKey: LOCID_KEYSUTL_DELETINGKEYS,
        sEntityKeyId: _sAlternateKeyId,
        sEntityId: _sEntityId
    },
    _oTypes = { sString: "nvarchar" },
    _oConst = {
        sInvalidSchemaNameChars: "[^A-Za-z0-9_]",
        maxSelectableColumns: _maxAttributesAllowedPerEntityKey,
        zeroSelectableColumns: 0,
        sCustomizationCommandObject: "SystemCustomization",
        sCreateEntityKeyCommand: "CreateEntityKey",
        sDeleteEntityKeyCommand: "DeleteEntityKey",
        sCommandParameterName: "data"
    },
    _bSaving = false,
    _txtKeyDisplayName,
    _txtKeyName;
Sys.Application.add_load(ManageKeysJsWindowOnLoad);
Sys.Application.add_unload(ManageKeysJsWindowOnUnLoad);

function ManageKeysJsWindowOnLoad() {
    !_bCreate &&
        window.focus();
    _txtKeyDisplayName = Mscrm.FormControlInputBehavior.GetBehavior("txtKeyDisplayName");
    _txtKeyName = Mscrm.FormControlInputBehavior.GetBehavior("txtKeyName");
    $addHandler(document, "keydown", ProcessKeyDown)
}

function window_onbeforeunload(oEvent) {
    oEvent = oEvent.rawEvent;
    if (!_bSaving && isFormDirty())
        oEvent.returnValue = _oMessages.sCloseAlert
}

function ManageKeysJsWindowOnUnLoad() {
    $removeHandler(document, "keydown", ProcessKeyDown)
}

function CallbackParams(bClose, bRefreshGrid) {
    this.bClose = bClose;
    this.bRefreshGrid = bRefreshGrid
}

function remoteEntityKeyCommandCallback(oResult, oCallbackParams) {
    if (oResult.Success) {
        if (oResult.RemoteCommand.Command == _oConst.sCreateEntityKeyCommand)
            _sAlternateKeyId = oResult.ReturnValue;
        else if (oResult.RemoteCommand.Command == _oConst.sDeleteEntityKeyCommand);
        if (oCallbackParams.bRefreshGrid)
            try {
                window.opener.$find("gridAlternateKeys").Refresh()
            } catch (e) {
            }
        if (oCallbackParams.bClose) {
            closeWindow();
            return false
        } else
            window.location.href = String.format(Mscrm.AlternateKeysGrid.viewAlternateKeysSettingUrl,
                _oMessages.sEntityId,
                _sAlternateKeyId,
                true)
    }
    _bSaving = false;
    return true
}

function _save() {
    saveAlternateKeysAction(false)
}

function _saveandclose() {
    saveAlternateKeysAction(true)
}

function saveAlternateKeysAction(bClose) {
    if (validateParameters()) {
        var sDataXml = getEntityKeyXml();
        _bSaving = true;
        var oCallbackParams = new CallbackParams(bClose, true);
        if (_bCreate)
            createEntityKey(sDataXml, remoteEntityKeyCommandCallback, oCallbackParams);
        else if (bClose) {
            closeWindow();
            Mscrm.Utilities.setReturnValue(_sAlternateKeyId)
        } else
            _bSaving = false
    }
}

function getEntityKeyXml() {
    var oDataXml = createXmlDoc(_oTags.entitykey),
        keyAttributes = CrmEncodeDecode.CrmXmlDecode(GetKeyAttributes());
    addTextXmlNode(oDataXml, _oTags.entityid, _sEntityId);
    addTextXmlNode(oDataXml, _oTags.displayname, _txtKeyDisplayName.get_dataValue());
    addTextXmlNode(oDataXml, _oTags.name, _txtKeyName.get_dataValue());
    addTextXmlNode(oDataXml, _oTags.entitykeyattributes, keyAttributes);
    return convertXmlDocToString(oDataXml)
}

function GetKeyAttributes() {
    for (var _oResult = {},
        oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows,
        alternateKeyAttributes = "",
        rowId = 0;
        rowId < oRows.length;
        rowId++)
        alternateKeyAttributes = alternateKeyAttributes +
            (rowId == 0 ? "" : ";") +
            XUI.Html.DomUtils.GetFirstChild(oRows[rowId]).id;
    return CrmEncodeDecode.CrmXmlEncode(alternateKeyAttributes)
}

function deleteAlternateKeyAction() {
    var oCallbackParams = new CallbackParams(true, true);
    deleteEntityKey(_oMessages.sEntityKeyId, remoteEntityKeyCommandCallback, oCallbackParams)
}

function validateParameters() {
    var bValid = true;
    bValid = bValid && validateRequiredValue(_txtKeyDisplayName.get_element());
    bValid = bValid && validateRequiredValue(_txtKeyName.get_element());
    bValid = bValid && validateSchemaName(_txtKeyName.get_element());
    var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows;
    if (oRows.length == _oConst.zeroSelectableColumns && bValid == true) {
        alert(LOCID_WARNING_NOCOLUMNS);
        return false
    }
    return bValid
}

function validateKeyXml(selectedRowCount) {
    var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows;
    if (oRows.length + selectedRowCount > _oConst.maxSelectableColumns) {
        alert(LOCID_WARNING_TOOMANYCOLUMNS);
        return false
    }
    return true
}

function onDisplayNameChange() {
    if (_bCreate)
        if (_txtKeyDisplayName.get_dataValue() != null &&
            _txtKeyDisplayName.get_dataValue().length > 0 &&
            (_txtKeyName.get_dataValue() == null || _txtKeyName.get_dataValue().length == 0)) {
            var regExp = new RegExp(_oConst.sInvalidSchemaNameChars, "g");
            _txtKeyName.set_dataValue(_txtKeyDisplayName.get_dataValue().replace(regExp, "")
                .substr(0, _txtKeyName.get_maxLength()))
        }
}

function getSelectedKeysOid() {
    var aRecords = $find("gridAlternateKeys").get_innerGrid().get_selectedRecords();
    if (aRecords.length > 1)
        return _oConst.sMultipleItemsSelected;
    return aRecords.length > 0 ? aRecords[0][0] : null
}