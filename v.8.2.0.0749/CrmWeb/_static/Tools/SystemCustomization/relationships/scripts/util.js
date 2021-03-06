
var _oRelUtlMessages = {
        sCannotDeleteSystemRelationship: LOCID_RELUTL_CANTDELSYSREL,
        sConfirmRelationshipDelete: LOCID_RELUTL_CONFIRMDELREL,
        sCreatingRelationship: LOCID_RELUTL_CREATINGREL,
        sUpdatingRelationship: LOCID_RELUTL_UPDATINGREL,
        sDeletingRelationship: LOCID_RELUTL_DELETINGREL
    },
    _oRelUtlConst = {
        relationshipId: "relationshipId",
        sCustomizationCommandObject: "SystemCustomization",
        sCreateRelationshipCommand: "CreateRelationship",
        sUpdateRelationshipCommand: "UpdateRelationship",
        sDeleteRelationshipCommand: "DeleteRelationship",
        sCommandParameterName: "data"
    };

function createRelationship(sDataXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oRelUtlConst.sCustomizationCommandObject,
        _oRelUtlConst.sCreateRelationshipCommand);
    oCommand.SetXmlParameter(_oRelUtlConst.sCommandParameterName, sDataXml);
    executeRemoteCommand(oCommand, _oRelUtlMessages.sCreatingRelationship, fCallback, oCallbackParams)
}

function updateRelationship(sDataXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oRelUtlConst.sCustomizationCommandObject,
        _oRelUtlConst.sUpdateRelationshipCommand);
    oCommand.SetXmlParameter(_oRelUtlConst.sCommandParameterName, sDataXml);
    executeRemoteCommand(oCommand, _oRelUtlMessages.sUpdatingRelationship, fCallback, oCallbackParams)
}

function deleteRelationship(sRelationshipId, bCustomRelationship, fCallback, oCallbackParams) {
    if (!bCustomRelationship) {
        alert(_oRelUtlMessages.sCannotDeleteSystemRelationship);
        return
    }
    if (!confirm(_oRelUtlMessages.sConfirmRelationshipDelete))
        return;
    var oCommand = new RemoteCommand(_oRelUtlConst.sCustomizationCommandObject,
        _oRelUtlConst.sDeleteRelationshipCommand);
    oCommand.SetParameter(_oRelUtlConst.relationshipId, sRelationshipId);
    executeRemoteCommand(oCommand, _oRelUtlMessages.sDeletingRelationship, fCallback, oCallbackParams)
}