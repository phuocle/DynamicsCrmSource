
var _oEntUtlMessages = {
        sCannotUpdateSystemEntityIcons: LOCID_ENTUTL_CANTUPDSYSENTICN,
        sCannotDeleteSystemEntity: LOCID_ENTUTL_CANTDELSYSENT,
        sCannotPublishEntity: LOCID_ENTUTL_CANTPUBLISHENT,
        sCreatingEntity: LOCID_ENTUTL_CREATINGENT,
        sUpdatingEntity: LOCID_ENTUTL_UPDATINGENT,
        sDeletingEntity: LOCID_ENTUTL_DELETINGENT,
        sPublishingEntity: LOCID_ENTUTL_PUBLISHINGENT
    },
    _oEntUtlConst = {
        entityId: "entityId",
        sCustomizationCommandObject: "SystemCustomization",
        sCreateEntityCommand: "CreateEntity",
        sUpdateEntityCommand: "UpdateEntity",
        sCreateOrUpdateEntityConfigCommand: "CreateOrUpdateCustomControlDefaultConfig",
        sPublishCustomizationsCommand: "PublishCustomizations",
        sUpdateEntityHomeGridEvents: "UpdateEntityHomeGridEvents",
        sPublishAllCustomizationsCommand: "PublishAllCustomizations",
        sCommandParameterName: "data",
        sUpdateEntityIconsUrlFormat: "/tools/systemcustomization/entities/updateIcons.aspx?entityId={0}",
        iIconsDialogWidth: 650,
        iIconsDialogHeight: 550
    };

function createEntity(sDataXml, fCallback, oCallbackParams) {
    var oCommand;
    if (Mscrm.Utilities.isSafari()) {
        oCommand = createRemoteCommandXmlWithCallbackParams(_oEntUtlConst.sCreateEntityCommand,
            sDataXml,
            oCallbackParams);
        executeRemoteCommandAsync(oCommand, _oEntUtlMessages.sCreatingEntity, fCallback, oCallbackParams)
    } else {
        oCommand = createRemoteCommand(_oEntUtlConst.sCreateEntityCommand, sDataXml);
        executeRemoteCommand(oCommand, _oEntUtlMessages.sCreatingEntity, fCallback, oCallbackParams)
    }
}

function updateEntity(sDataXml, fCallback, oCallbackParams) {
    var oCommand;
    if (Mscrm.Utilities.isSafari()) {
        oCommand = createRemoteCommandXmlWithCallbackParams(_oEntUtlConst.sUpdateEntityCommand,
            sDataXml,
            oCallbackParams);
        executeRemoteCommandAsync(oCommand, _oEntUtlMessages.sUpdatingEntity, fCallback, oCallbackParams)
    } else {
        oCommand = createRemoteCommand(_oEntUtlConst.sUpdateEntityCommand, sDataXml);
        executeRemoteCommand(oCommand, _oEntUtlMessages.sUpdatingEntity, fCallback, oCallbackParams)
    }
}

function createOrupdateCustomControlDefaultConfig(sCustomControlXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oEntUtlConst.sCustomizationCommandObject,
        _oEntUtlConst.sCreateOrUpdateEntityConfigCommand);
    oCommand.SetXmlParameter(_oEntUtlConst.sCommandParameterName, sCustomControlXml);
    executeRemoteCommand(oCommand, _oEntUtlMessages.sUpdatingEntity, fCallback, oCallbackParams)
}

function updateEntityHomeGridEvents(entityHomeGridFormXml, entityId, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oEntUtlConst.sCustomizationCommandObject,
        _oEntUtlConst.sUpdateEntityHomeGridEvents);
    oCommand.SetXmlParameter(_oEntUtlConst.sCommandParameterName, entityHomeGridFormXml);
    oCommand.SetXmlParameter("entityId", entityId);
    executeRemoteCommand(oCommand, _oEntUtlMessages.sUpdatingEntity, fCallback, oCallbackParams)
}

function publishEntities(sDataXml, bPublishableEntity, fCallback, oCallbackParams) {
    if (!bPublishableEntity) {
        alert(_oEntUtlMessages.sCannotPublishEntity);
        return
    }
    var oCommand = new Mscrm.RemoteCommandXml(_oEntUtlConst.sCustomizationCommandObject,
        _oEntUtlConst.sPublishCustomizationsCommand);
    oCommand.setParameter(_oEntUtlConst.sCommandParameterName, sDataXml);
    executeRemoteCommandXml(oCommand, _oEntUtlMessages.sPublishingEntity, fCallback, oCallbackParams)
}

function publishEntitiesAll(fCallback, oCallbackParams) {
    var oCommand = new Mscrm.RemoteCommandXml(_oEntUtlConst.sCustomizationCommandObject,
        _oEntUtlConst.sPublishAllCustomizationsCommand);
    executeRemoteCommandXml(oCommand, _oEntUtlMessages.sPublishingEntity, fCallback, oCallbackParams)
}

function updateEntityIcons(sEntityId, bCustomEntity) {
    if (!bCustomEntity) {
        alert(_oEntUtlMessages.sCannotUpdateSystemEntityIcons);
        return
    }
    var oUrl = Mscrm.CrmUri.create(formatString(_oEntUtlConst.sUpdateEntityIconsUrlFormat, sEntityId));
    return openStdDlg(oUrl, null, _oEntUtlConst.iIconsDialogWidth, _oEntUtlConst.iIconsDialogHeight)
}

function createRemoteCommand(requestName, sDataXml) {
    var oCommand = new RemoteCommand(_oEntUtlConst.sCustomizationCommandObject, requestName);
    oCommand.SetXmlParameter(_oEntUtlConst.sCommandParameterName, sDataXml);
    return oCommand
}

function createRemoteCommandXml(requestName, sDataXml) {
    var oCommand = new Mscrm.RemoteCommandXml(_oEntUtlConst.sCustomizationCommandObject, requestName);
    oCommand.setParameter(_oEntUtlConst.sCommandParameterName, sDataXml);
    return oCommand
}

function createRemoteCommandXmlWithCallbackParams(requestName, sDataXml, oCallbackParams) {
    var oCommand = createRemoteCommandXml(requestName, sDataXml);
    oCommand.set_remoteCallBackParameters(oCallbackParams);
    return oCommand
}