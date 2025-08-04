
var _oAttrUtlMessages = {
        sCannotDeleteSystemAttribute: LOCID_ATTRUTL_CANTDELSYSATTR,
        sConfirmAttributeDelete: LOCID_ATTRUTL_CONFIRMDELATTR,
        sCreatingAttribute: LOCID_ATTRUTL_CREATINGATTR,
        sUpdatingAttribute: LOCID_ATTRUTL_UPDATINGATTR,
        sDeletingAttribute: LOCID_ATTRUTL_DELETINGATTR
    },
    _oAttrUtlConst = {
        attributeId: "attributeId",
        optionSetId: "optionSetId",
        sCustomizationCommandObject: "SystemCustomization",
        sCreateAttributeCommand: "CreateAttribute",
        sUpdateAttributeCommand: "UpdateAttribute",
        sDeleteAttributeCommand: "DeleteAttribute",
        sCommandParameterName: "data",
        sGetOptionSetDataXmlCommand: "GetOptionSetDataXml",
        sGetOptionsListCommand: "GetOptionSetList"
    };

function createAttribute(sDataXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oAttrUtlConst
        .sCustomizationCommandObject,
        _oAttrUtlConst.sCreateAttributeCommand);
    oCommand.SetXmlParameter(_oAttrUtlConst.sCommandParameterName, sDataXml);
    executeRemoteCommand(oCommand, _oAttrUtlMessages.sCreatingAttribute, fCallback, oCallbackParams)
}

function updateAttribute(sDataXml, fCallback, oCallbackParams) {
    var oCommand = new RemoteCommand(_oAttrUtlConst
        .sCustomizationCommandObject,
        _oAttrUtlConst.sUpdateAttributeCommand);
    oCommand.SetXmlParameter(_oAttrUtlConst.sCommandParameterName, sDataXml);
    executeRemoteCommand(oCommand, _oAttrUtlMessages.sUpdatingAttribute, fCallback, oCallbackParams)
}

function deleteAttribute(sAttributeId, bCustomAttribute, fCallback, oCallbackParams) {
    if (!bCustomAttribute) {
        alert(_oAttrUtlMessages.sCannotDeleteSystemAttribute);
        return
    }
    var attributeName = "";
    if (typeof attributexml != "undefined") {
        var attributeName = GetLinkedAttributeName(sAttributeId);
        if (attributeName != "")
            if (!confirm(formatString(LOCID_ATTRUTL_CONFIRMDELLINKATTR, attributeName, recurrenceentityname)))
                return
    } else if (!confirm(_oAttrUtlMessages.sConfirmAttributeDelete))
        return;
    var oCommand = new RemoteCommand(_oAttrUtlConst
        .sCustomizationCommandObject,
        _oAttrUtlConst.sDeleteAttributeCommand);
    oCommand.SetParameter(_oAttrUtlConst.attributeId, sAttributeId);
    executeRemoteCommand(oCommand, _oAttrUtlMessages.sDeletingAttribute, fCallback, oCallbackParams)
}

function GetLinkedAttributeName(sAttributeId) {
    var oXmlDoc = XUI.Xml.LoadXml(attributexml),
        xpath = '/attributes/attribute[@id="' + sAttributeId.toLowerCase() + '"]',
        xmlNodes = XUI.Xml.SelectNodes(oXmlDoc, xpath, null);
    if (xmlNodes.length == 1) {
        attributeName = xmlNodes[0].getAttribute("linkTo");
        return attributeName
    }
    return ""
}

function GetOptionSetDataXml(optionSetId) {
    var oCommand = new RemoteCommand(_oAttrUtlConst.sCustomizationCommandObject,
        _oAttrUtlConst.sGetOptionSetDataXmlCommand);
    oCommand.SetParameter(_oAttrUtlConst.optionSetId, optionSetId);
    var oResult = oCommand.Execute();
    if (oResult.Success)
        return oResult.ReturnValue;
    return null
}

function GetOptionSetList() {
    var oCommand = new RemoteCommand(_oAttrUtlConst.sCustomizationCommandObject, _oAttrUtlConst.sGetOptionsListCommand),
        oResult = oCommand.Execute();
    if (oResult.Success)
        return oResult.ReturnValue;
    return null
}