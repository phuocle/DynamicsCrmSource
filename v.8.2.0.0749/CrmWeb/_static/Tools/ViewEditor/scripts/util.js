
function GetDescByLangCode(oObjs) {
    for (var iLen = oObjs.length,
        i = 0;
        i < iLen;
        i++)
        if (oObjs[i].LanguageCode == USER_LANGUAGE_CODE)
            return oObjs[i].Description;
    return ""
}

function GetLocalizedObjsArray(oNodes) {
    for (var oObjs = [],
        oNode,
        iLen = oNodes.length,
        i = 0;
        i < iLen;
        i++) {
        oNode = oNodes[i];
        oObjs[i] = new LocalizedObj(oNode.getAttribute("description"), oNode.getAttribute("languagecode"))
    }
    return oObjs
}

function GetGridRowNode(oGridXml) {
    return XUI.Xml.SelectSingleNode(oGridXml, "//row", null)
}

function GetGridCellNode(oGridXml, sFieldName) {
    return XUI.Xml.SelectSingleNode(oGridXml, "/grid/row/cell[@name = '" + sFieldName + "']", null)
}

function GetFieldDisplayName(oPropertiesXml, sEntityName, sFieldName) {
    var oFieldNode = XUI.Xml.SelectSingleNode(oPropertiesXml,
        'entities/entity[@name="' + sEntityName + "\"]/fields/field[@name = '" + sFieldName + "']",
        null);
    return oFieldNode != null
        ? GetDescByLangCode(GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFieldNode, "displaynames/displayname", null)))
        : null
}

function GetFetchEntityNode(oFetchXml) {
    return XUI.Xml.SelectSingleNode(oFetchXml, "//entity", null)
}

function GetFetchAttributeNode(oFetchXml, sFieldName) {
    var oFieldName = GetFieldAliasName(sFieldName);
    if (oFieldName.Alias.length == 0)
        return XUI.Xml.SelectSingleNode(oFetchXml, "/fetch/entity/attribute[@name = '" + sFieldName + "']", null);
    else
        return XUI.Xml.SelectSingleNode(oFetchXml,
            '/fetch/entity/link-entity[@alias="' +
            oFieldName.Alias +
            "\"]/attribute[@name = '" +
            oFieldName.FieldName +
            "']",
            null)
}

function isSortableField(oFieldsXml, sEntityName, sFieldName) {
    if (sFieldName.indexOf(".") != -1)
        return false;
    var oFieldNode = XUI.Xml.SelectSingleNode(oFieldsXml,
        'entities/entity[@name="' +
        sEntityName +
        '"]/fields/field[@name = "' +
        CrmEncodeDecode.CrmXmlEncode(sFieldName) +
        '"]',
        null);
    if (oFieldNode == null)
        return false;
    var isNonSortableCalculatedField = oFieldNode.getAttribute("isnonsortablecalculatedfield");
    if (isNonSortableCalculatedField != null && isNonSortableCalculatedField == "true")
        return false;
    var sDataType = oFieldNode.getAttribute("datatype");
    switch (sDataType) {
    case "partylist":
    case "memo":
        return false;
    default:
        return true
    }
}

function GetFieldInfo(sFieldName) {
    var oFieldName = GetFieldAliasName(sFieldName),
        sAlias = oFieldName.Alias;
    sFieldName = oFieldName.FieldName;
    var sEntityName = "",
        sEntityDisplayName = "",
        sType = null,
        sSchemaName = null,
        sDisplayName = null,
        sGridFieldDisplayMask = "{0}",
        sRelationshipId = "";
    if (sAlias.length == 0) {
        sEntityName = _sPrimaryEntityName;
        sEntityDisplayName = _sPrimaryEntityDisplayName
    } else {
        var oEntity = XUI.Xml.SelectSingleNode(oEntitiesXml, 'entities/entity[@alias="' + sAlias + '"]', null);
        if (oEntity != null) {
            sEntityName = oEntity.getAttribute("name");
            sGridFieldDisplayMask = oEntity.getAttribute("griddisplaynamemask");
            sEntityDisplayName = oEntity.getAttribute("entitydisplayname");
            sRelationshipId = oEntity.getAttribute("relid")
        }
    }
    var oFieldNode = null;
    if (sEntityName.length > 0) {
        var oFieldNode = XUI.Xml.SelectSingleNode(oFieldsXml,
            'entities/entity[@name="' + sEntityName + "\"]/fields/field[@name = '" + sFieldName + "']",
            null);
        if (oFieldNode != null) {
            sDisplayName = GetFieldDisplayName(oPropertiesXml, sEntityName, sFieldName);
            sType = oFieldNode.getAttribute("datatype");
            sSchemaName = oFieldNode.getAttribute("name")
        }
    }
    return {
        Alias: sAlias,
        FieldName: sFieldName,
        EntityName: sEntityName,
        EntityDisplayName: sEntityDisplayName,
        Type: sType,
        DisplayName: sDisplayName,
        SchemaName: sSchemaName,
        GridFieldDisplayMask: sGridFieldDisplayMask,
        InvalidField: oFieldNode == null,
        RelationshipId: sRelationshipId
    }
}

function GetDisableMetaDataBindingFieldInfo(oCell) {
    var oFieldName = GetFieldAliasName(oCell.getAttribute("name")),
        sAlias = oFieldName.Alias;
    sFieldName = oFieldName.FieldName;
    var sEntityName = "",
        sEntityDisplayName = "",
        sType = null,
        sSchemaName = null,
        sDisplayName = null,
        sGridFieldDisplayMask = "{0}",
        sRelationshipId = "",
        oEntity = XUI.Xml.SelectSingleNode(oEntitiesXml, 'entities/entity[@alias="' + sAlias + '"]', null);
    if (oEntity != null) {
        sEntityName = oEntity.getAttribute("name");
        sEntityDisplayName = oEntity.getAttribute("entitydisplayname")
    }
    if (sEntityName.length > 0)
        if (oCell != null) {
            var displaytext = oCell.getAttribute("label");
            sDisplayName = displaytext != null ? displaytext : oCell.getAttribute("name");
            sType = oCell.getAttribute("datatype");
            sSchemaName = oCell.getAttribute("name")
        }
    return {
        Alias: sAlias,
        FieldName: sFieldName,
        EntityName: sEntityName,
        EntityDisplayName: sEntityDisplayName,
        Type: sType,
        DisplayName: sDisplayName,
        SchemaName: sSchemaName,
        GridFieldDisplayMask: sGridFieldDisplayMask,
        InvalidField: false,
        RelationshipId: sRelationshipId
    }
}

function GetFieldAliasName(sFieldName) {
    var iPos = sFieldName.indexOf("."),
        sAlias = "";
    if (iPos != -1) {
        sAlias = sFieldName.substr(0, iPos);
        sFieldName = sFieldName.substr(iPos + 1)
    }
    return { Alias: sAlias, FieldName: sFieldName }
}

function GetFieldsXml(sEntityName, sAlias, bRetrieveLatest) {
    if (typeof sEntityName == "undefined")
        var sEntityName = _sPrimaryEntityName;
    return GetFieldsXmlInternal(sEntityName,
        sAlias,
        _oGridXml,
        _bQFAddSearch,
        _bExportSelect,
        _bUpdateOnAttr,
        _bSelectMode,
        bRetrieveLatest)
}

function GetFieldsXmlInlcudingHiddenFields(sEntityName, sAlias, bRetrieveLatest) {
    if (typeof sEntityName == "undefined")
        var sEntityName = _sPrimaryEntityName;
    return GetFieldsXmlInternal(sEntityName,
        sAlias,
        _oGridXml,
        _bQFAddSearch,
        _bExportSelect,
        _bUpdateOnAttr,
        _bSelectMode,
        bRetrieveLatest,
        true)
}

function GetFieldsXmlInternal(sEntityName,
    sAlias,
    oGridXml,
    bQFAddSearch,
    bExportSelect,
    bUpdateOnAttr,
    bSelectMode,
    bRetrieveLatest,
    includeHiddenFields) {
    if (typeof includeHiddenFields == "undefined")
        includeHiddenFields = false;
    var oFieldsXml,
        oPropertiesXml;
    if (IsNull(bRetrieveLatest))
        bRetrieveLatest = false;
    oFieldsXml = XUI.Xml.SelectSingleNode(_oAllFieldsXml, '/entities/entity[@name="' + sEntityName + '"]', null);
    oPropertiesXml = XUI.Xml.SelectSingleNode(_oAllFieldPropertiesXml,
        '/entities/entity[@name="' + sEntityName + '"]',
        null);
    if (IsNull(oFieldsXml) || IsNull(oPropertiesXml)) {
        var oRemoteCmd = new RemoteCommand("AdvancedFind", "GetFieldsPropertiesXml");
        oRemoteCmd.SetParameter("entityName", sEntityName);
        oRemoteCmd.SetParameter("retrieveLatest", bRetrieveLatest);
        var oResult = oRemoteCmd.Execute();
        if (oResult.Success != ERROR_NONE)
            return null;
        if (IsOutlookClient()) {
            _oAllFieldsXml = XUI.Xml.LoadXml(_oAllFieldsXml.documentElement.xml);
            _oAllFieldPropertiesXml = XUI.Xml.LoadXml(_oAllFieldPropertiesXml.documentElement.xml)
        }
        oFieldsXml = XUI.Xml.LoadXml(oResult.ReturnValue.FieldXml);
        oFieldsXml = _oAllFieldsXml.documentElement.appendChild(oFieldsXml.documentElement);
        oPropertiesXml = XUI.Xml.LoadXml(oResult.ReturnValue.PropertiesXml);
        oPropertiesXml = _oAllFieldPropertiesXml.documentElement.appendChild(oPropertiesXml.documentElement)
    }
    var sFieldName,
        sFilter = "";
    if (!(bQFAddSearch || bExportSelect || bUpdateOnAttr || bSelectMode))
        if (includeHiddenFields)
            sFilter = BuildUsedFieldFilter(XUI.Xml.SelectNodes(oGridXml, "/grid/row/cell[not(@ishidden=1)]", null),
                sEntityName,
                sAlias);
        else
            sFilter = BuildUsedFieldFilter(XUI.Xml.SelectNodes(oGridXml, "/grid/row/cell", null), sEntityName, sAlias);
    for (var oFields = XUI.Xml.SelectNodes(oPropertiesXml,
                 "fields/field" + (sFilter.length > 0 ? "[" + sFilter + "]" : ""),
                 null),
        sFieldsXml = "<fields>",
        iLen = oFields.length,
        i = 0;
        i < iLen;
        i++) {
        sFieldName = oFields[i].getAttribute("name");
        var oEntityFieldNode = XUI.Xml.SelectSingleNode(oFieldsXml,
            "fields/field[@name = '" + CrmEncodeDecode.CrmXmlEncode(sFieldName) + "']",
            null);
        if (oEntityFieldNode != null) {
            var bValidForAdvancedFind = XUI.Xml.GetText(oEntityFieldNode.attributes
                        .getNamedItem("validforadvancedfind")) ==
                    "true",
                bValidForGrid = XUI.Xml.GetText(oEntityFieldNode.attributes.getNamedItem("validforgrid")) == "true",
                sDataType = XUI.Xml.GetText(oEntityFieldNode.attributes.getNamedItem("datatype"));
            if (sFieldName != "" &&
            (bQFAddSearch && bValidForAdvancedFind && IsValidForQuickFind(sDataType) ||
                !bQFAddSearch && bValidForGrid)) {
                var displayNameObject = XUI.Xml
                        .SelectSingleNode(oFields[i],
                            "displaynames/displayname[@languagecode = " + USER_LANGUAGE_CODE + "]/@description",
                            null),
                    displayNameObjectText = XUI.Xml.GetText(displayNameObject);
                if (!IsNull(displayNameObject) && !isNullOrEmptyString(displayNameObjectText))
                    sFieldsXml += '<field name="' +
                        CrmEncodeDecode.CrmXmlEncode(sFieldName) +
                        '" displayname="' +
                        CrmEncodeDecode.CrmXmlEncode(displayNameObjectText) +
                        '" datatype="' +
                        sDataType +
                        '" required="false" orgrequired="' +
                        XUI.Xml.GetText(XUI.Xml
                            .SelectSingleNode(oPropertiesXml,
                                'fields/field[@name = "' +
                                CrmEncodeDecode.CrmXmlEncode(sFieldName) +
                                '"]/@requiredlevel',
                                null)) +
                        '"/>'
            }
        }
    }
    return sFieldsXml + "</fields>"
}

function BuildUsedFieldFilter(oNodes, sEntityName, sAlias) {
    for (var sFilter = "",
        iPos,
        iLen = oNodes.length,
        asAliasEntityMap = [],
        i = 0;
        i < iLen;
        i++) {
        var sFieldAlias = undefined,
            sFieldEntity = undefined,
            sFieldName = oNodes[i].getAttribute("name");
        if ((iPos = sFieldName.indexOf(".")) != -1) {
            sFieldAlias = sFieldName.substring(0, iPos);
            sFieldEntity = asAliasEntityMap[sFieldAlias];
            if (sFieldEntity == null) {
                var oEntity = XUI.Xml.SelectSingleNode(_oEntitiesXml,
                    'entities/entity[@alias="' + sFieldAlias + '"]',
                    null);
                if (oEntity != null)
                    asAliasEntityMap[sFieldAlias] = sFieldEntity = oEntity.getAttribute("name")
            }
        } else
            sFieldEntity = _sPrimaryEntityName;
        if (sFieldEntity == sEntityName && sFieldAlias == sAlias) {
            sFieldName = sFieldName.substr(iPos + 1);
            if (sFilter.length == 0)
                sFilter += "@name != '" + sFieldName + "'";
            else
                sFilter += " and @name != '" + sFieldName + "'"
        }
    }
    return sFilter
}

function IsValidForQuickFind(sDataType) {
    var bValid = false;
    switch (sDataType) {
    case "text":
    case "memo":
    case "boolean":
    case "lookup":
    case "owner":
    case "customer":
    case "picklist":
    case "state":
    case "status":
    case "integer":
    case "money":
    case "datetime":
    case "float":
        bValid = true;
        break
    }
    return bValid
}