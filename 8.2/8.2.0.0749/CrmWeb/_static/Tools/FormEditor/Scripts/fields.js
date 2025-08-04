
function AddUserSpacer() {
    CanAddFields(_oActive) &&
        Mscrm.FieldPropertiesUtils.addFieldToForm(null, _oActive)
}

function AddFields(oActive, isFromFieldExplorer) {
    isFromFieldExplorer = typeof isFromFieldExplorer !== "undefined" ? isFromFieldExplorer : false;
    if (isFromFieldExplorer == null)
        isFromFieldExplorer = false;
    if (_oActive != null) {
        if (_bPreviewMode && oActive == null)
            oActive = tblSection;
        if (!CanAddFields(oActive, isFromFieldExplorer))
            return;
        switch (oActive.className) {
        case "ms-crm-MenuItem-TextRTL":
        case "ms-crm-Menu-ButtonFirst":
            oActive = oActive.parentNode.parentNode;
            break;
        case "dlg_create_RenderListItem_img":
            oActive = oActive.parentNode;
            break
        }
        Mscrm.FieldPropertiesUtils.addFieldToForm(oActive, _oActive)
    } else
        alert(LOCID_FORMED_MUSTSELECT)
}

function GetFieldObj(oActive) {
    var sLabel = oActive.getAttribute("displayName");
    _oActive == null &&
        Mscrm.TabUtils.clickFirstTab();
    var sSectionName = GetCurrentSectionName(_oActive),
        sTabName = GetCurrentTabName(_oActive),
        sDataType = oActive.getAttribute("dataType"),
        sFormat = oActive.getAttribute("format"),
        attrId = oActive.getAttribute("id"),
        sSchemaName = attrId.substr(6, attrId.length - 5),
        oFields = [],
        fieldObj = new FieldObj(sLabel,
            true,
            false,
            sTabName,
            sSectionName,
            false,
            1,
            1,
            false,
            GetControlClassId(sDataType, sFormat),
            null,
            sDataType,
            sFormat,
            sLabel,
            sSchemaName);
    oFields[0] = fieldObj;
    return oFields
}

function AddView() {
    try {
        var command = new RemoteCommand("FormEditorWebService", "GetEntityId");
        command.SetParameter("entityCode", _objectTypeCode);
        var result = command.Execute();
        if (result.Success) {
            var entityId = result.ReturnValue,
                url = Mscrm.CrmUri
                    .create(formatString("/tools/vieweditor/viewManager.aspx?objectTypeCode={0}&mode=new&entityId={1}",
                        CrmEncodeDecode.CrmUrlEncode(_objectTypeCode),
                        CrmEncodeDecode.CrmUrlEncode(entityId))),
                windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute);
            openStdWin(url, buildWinName(), windowInfo.Width, windowInfo.Height)
        }
    } catch (e) {
    }
}

function AddNotesControl() {
    if (!CanAddFields(_oActive))
        return;
    else {
        Mscrm.FieldPropertiesUtils.addNotesControl(_oActive);
        refreshRibbon()
    }
}

function EnableDisableNotesControl() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            !Mscrm.FieldPropertiesUtils.formContainsNotesControl() &&
            Mscrm.FormEditorVariables.supportNotes === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisableBingMapsControl() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            IsNull(Mscrm.DragDropUtils.getCellNode(Mscrm.DragDropUtils.BingMapsControlId)) &&
            Mscrm.FormEditorVariables.supportBingMaps === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisableSocialInsights() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            IsNull(Mscrm.DragDropUtils.getCellNode(Mscrm.DragDropUtils.SOCIALINSIGHT)) &&
            Mscrm.FormEditorVariables.supportSocialInsights === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisableOrgInsights() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            IsNull(Mscrm.DragDropUtils.getCellNode(Mscrm.DragDropUtils.ORGINSIGHTS)) &&
            Mscrm.FormEditorVariables.supportOrgInsights === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisablePowerBITile() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            IsNull(Mscrm.DragDropUtils.getCellNode(Mscrm.DragDropUtils.POWERBITILE)) &&
            Mscrm.FormEditorVariables.supportPowerBITile === "True" &&
            !window.top.isOutlookHostedWindow())
            return true;
    return false
}

function EnableDisablePowerBIEditProperties() {
    return _oActive.className != "powerbitile" || Mscrm.FormEditorVariables.supportPowerBITile === "True"
}

function EnableDisableTimerControl() {
    if (Mscrm.FormEditorVariables.FormType == "card")
        return false;
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            Mscrm.FormEditorVariables.supportTimerControl === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisableKMControl() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() &&
            Mscrm.FormEditorVariables.supportKMControl === "True")
            return true;
        else
            return false;
    else
        return false
}

function EnableDisableACIControl() {
    if (!IsNull(Mscrm) && !IsNull(Mscrm.FormEditorVariables) && !IsNull(Mscrm.FormEditorVariables.fieldExpIsFor))
        if (Mscrm.FormEditorVariables.fieldExpIsFor == Mscrm.DragDropUtils.MAIN &&
            Mscrm.FormEditorVariables.supportACIControl === "True")
            return true;
        else
            return false;
    else
        return false
}

function AddAttribute() {
    var oUrl = Mscrm.CrmUri
            .create(formatString("/tools/systemcustomization/attributes/manageAttribute.aspx?entityId={0}",
                CrmEncodeDecode.CrmUrlEncode(_entityId))),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute),
        retVals = openStdDlg(oUrl, null, windowInfo.Width, windowInfo.Height);
    SetPropsAndFieldXml(_objectTypeCode);
    RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml)
}

function OpenEditAttributeDialog(attributeName, sObjectTypeCode, solutionId) {
    var entityId = GetEntityId(sObjectTypeCode),
        attrId = GetAttributeId(attributeName, sObjectTypeCode),
        oUrl = Mscrm.CrmUri
            .create(formatString("/tools/systemcustomization/attributes/manageAttribute.aspx?attributeId={0}&entityId={1}&appSolutionId={2}", CrmEncodeDecode.CrmUrlEncode(attrId), CrmEncodeDecode.CrmUrlEncode(entityId), CrmEncodeDecode.CrmUrlEncode(solutionId))),
        windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute),
        retVals = openStdDlg(oUrl, null, windowInfo.Width, windowInfo.Height)
}

function GetAttributeId(attributeName, sObjectTypeCode) {
    var attrId = "";
    try {
        var command = new RemoteCommand("FormEditorWebService", "GetAttributeId");
        command.SetParameter("entityCode", sObjectTypeCode);
        command.SetParameter("attributeName", attributeName);
        var result = command.Execute();
        if (result.Success)
            attrId = result.ReturnValue
    } catch (e) {
    }
    return attrId
}

function GetEntityId(sObjectTypeCode) {
    var entityId = "";
    try {
        var command = new RemoteCommand("FormEditorWebService", "GetEntityId");
        command.SetParameter("entityCode", sObjectTypeCode);
        var result = command.Execute();
        if (result.Success)
            entityId = result.ReturnValue
    } catch (e) {
    }
    return entityId
}

function SetPropsAndFieldXml(sObjectTypeCode) {
    try {
        command = new RemoteCommand("FormEditorWebService", "GetPropAndFieldXml");
        command.SetParameter("objectTypeCode", sObjectTypeCode);
        result = command.Execute();
        if (result.Success) {
            var proAndFieldXml = result.ReturnValue;
            oPropertiesXml = XUI.Xml.LoadXml(proAndFieldXml.anyType[1]);
            oFieldsXml = XUI.Xml.LoadXml(proAndFieldXml.anyType[0]);
            Mscrm.FormXmlUtils.updateFieldXmlForInternalDependencies(oFieldsXml, Mscrm.FormEditorVariables.formXml)
        }
    } catch (e) {
    }
}

function AddFieldFormXml(oFieldObj) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oFieldObj.sSectionName, null),
        oCell;
    oCell = Mscrm.FormEditorVariables.formXml.createElement("cell");
    oCell.setAttribute("id", createGuid());
    oCell.setAttribute("auto", oFieldObj.bAutoExpanding.toString());
    oCell.setAttribute("showlabel", oFieldObj.bShowLabel.toString());
    oCell.setAttribute("colspan", oFieldObj.iColSpan.toString());
    oCell.setAttribute("locklevel", oFieldObj.bLocked == true ? "1" : "0");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    var attrId = oFieldObj.sAttributeSchemaName;
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        attrId = Mscrm.FormEditorVariables.fieldExpIsFor + "_" + attrId;
    oControl.setAttribute("id", attrId);
    oControl.setAttribute("classid", oFieldObj.sControlClassId);
    oControl.setAttribute("datafieldname", oFieldObj.sAttributeSchemaName);
    oControl.setAttribute("disabled", oFieldObj.bDisabled.toString());
    AddCellToFormXml(oRows, oCell, oFieldObj.iRowSpan, oFieldObj.bSpansTwoColumns, oFieldObj.bAutoExpanding);
    var oLabels = new Array(new LocalizedObj(oFieldObj.sLabel, _langCode)),
        formXMLPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        formXMLPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        formXMLPath + "/row/cell[@id = '" + oCell.getAttribute("id") + "']/labels/label",
        oLabels)
}

function CanUpdateField(oFormCell) {
    var oSection = oFormCell.parentNode.parentNode.parentNode;
    if (oSection.getAttribute("locklevel") == "1") {
        alert(LOCID_FORMED_CHFLDLOCKEDSECTION);
        return false
    }
    var oTab = oSection.parentNode.parentNode;
    if (oTab.getAttribute("locklevel") == "1") {
        alert(LOCID_FORMED_CHFLDLOCKEDTAB);
        return false
    }
    return true
}

function UpdateField(oActive) {
    var sAttributeSchemaName = oActive.getAttribute("name"),
        formXmlPath = null,
        sActualName = sAttributeSchemaName;
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section") {
        formXmlPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
        sActualName = sAttributeSchemaName.substr(7, sAttributeSchemaName.length - 6)
    } else
        formXmlPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
    var oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!CanUpdateField(oFormCell))
        return;
    var oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null),
        sLabel = "",
        sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        slabelNode = XUI.Xml.SelectSingleNode(oFormCell, "labels/label[@languagecode = " + _langCode + "]", null);
    if (!IsNull(slabelNode))
        sLabel = slabelNode.getAttribute("description");
    var oParameters = GetParameterBag(XUI.Xml.SelectNodes(oFormCell, "control/parameters/*", null)),
        oEntityField = XUI.Xml
            .SelectSingleNode(oFieldsXml, "/entity/fields/field[@name = '" + sActualName + "']", null),
        sControlClassId = oControl.getAttribute("classid"),
        bShowLabel = true;
    if (oFormCell.getAttribute("showlabel"))
        bShowLabel = oFormCell.getAttribute("showlabel") == "true";
    var bDisabled = oControl.getAttribute("disabled") == "true",
        bAutoExpanding = oFormCell.getAttribute("auto") == "true",
        bVisible = oFormCell.getAttribute("visible") !== "false",
        bAvailable = oFormCell.getAttribute("availableforphone") !== "false",
        bLocked = oFormCell.getAttribute("locklevel") == "1",
        iRowSpan = 1;
    if (oFormCell.getAttribute("rowspan"))
        iRowSpan = Number(oFormCell.getAttribute("rowspan"));
    var iColSpan = 1;
    if (oFormCell.getAttribute("colspan"))
        iColSpan = Number(oFormCell.getAttribute("colspan"));
    var sSectionLayout = oFormCell.parentNode.parentNode.parentNode.getAttribute("layout"),
        sDataType = _oDataTypes.unknown,
        sDataTypeFormat = "",
        sAttributeDisplayName = "",
        sAttributeDescription = "";
    if (oEntityField != null) {
        var oPropertiesField = XUI.Xml.SelectSingleNode(oPropertiesXml,
            "/entity/fields/field[@name = '" + sActualName + "']",
            null);
        sDataType = oEntityField.getAttribute("datatype");
        sDataTypeFormat = oPropertiesField.getAttribute("format");
        sAttributeDisplayName = XUI.Xml.SelectSingleNode(oPropertiesField,
            "displaynames/displayname[@languagecode = " + GetLanguageCode() + "]",
            null).getAttribute("description");
        sAttributeDescription = oEntityField.getAttribute("description")
    }
    var oArgs = {},
        sCustomControlUniqueId = "";
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile)) {
        sCustomControlUniqueId = ProcessCustomControlUniqueId(oControl);
        oArgs.sCustomControlUniqueId = sCustomControlUniqueId
    }
    var oFieldObj = new FieldObj(sLabel,
        bShowLabel,
        bDisabled,
        sTabName,
        sSectionName,
        bLocked,
        iColSpan,
        iRowSpan,
        bAutoExpanding,
        sControlClassId,
        sDataType,
        sDataTypeFormat,
        sAttributeDisplayName,
        sAttributeSchemaName,
        sAttributeDescription,
        oParameters,
        false,
        null,
        null,
        Mscrm.FormEditorVariables.formXml,
        bVisible,
        bAvailable,
        sCustomControlUniqueId);
    oArgs.oField = oFieldObj;
    oArgs.oPropertiesXml = oPropertiesXml;
    oArgs.oFieldsXml = oFieldsXml;
    oArgs.bPreviewMode = _bPreviewMode;
    oArgs.sObjectTypeCode = _objectTypeCode;
    oArgs.sActualDBName = sActualName;
    oArgs.sFldExpFor = Mscrm.FormEditorVariables.fieldExpIsFor;
    oArgs.sObjectTypeCode = _objectTypeCode;
    oArgs.CellId = oActive.id;
    if (oActive.getAttribute("sysrequired") === "true")
        oArgs.bSysRequired = true;
    else
        oArgs.bSysRequired = false;
    if (Mscrm.FormUtils.isDependentOnScript(sActualName))
        oArgs.bScriptRequired = true;
    else
        oArgs.bScriptRequired = false;
    var oSection = GetSectionNode(sSectionName),
        oTab = oSection.parentNode.parentNode.parentNode.parentNode;
    if (oTab !== null &&
        oTab.getAttribute("availableforphone") !== null &&
        oTab.getAttribute("availableforphone") === "false" ||
        oSection !== null &&
        oSection.getAttribute("availableforphone") !== null &&
        oSection.getAttribute("availableforphone") === "false")
        oArgs.AvailableForPhoneDisabled = true;
    var secCols = 2,
        colAttr = oSection.getAttribute("columns");
    if (colAttr != null)
        secCols = colAttr.length;
    oArgs.iSecCols = secCols;
    oArgs.isEditMode = masterWindow().isEditMode(GetObjectTypeCode().toString());
    var attributeId = null,
        controlFor = oActive.getAttribute("controlfor");
    if (!(oActive.getAttribute("name") === Mscrm.DragDropUtils.NOTES_CONTROL_ID ||
        controlFor === Mscrm.DragDropUtils.HEADER ||
        controlFor === Mscrm.DragDropUtils.FOOTER))
        attributeId = GetAttributeId(oActive.getAttribute("name"), parseInt(GetObjectTypeCode()));
    var attributeIdInHeaderForCC = null;
    if (controlFor === Mscrm.DragDropUtils.HEADER && !IsNull(sActualName) && sActualName.length > 0)
        attributeIdInHeaderForCC = GetAttributeId(sActualName, parseInt(GetObjectTypeCode()));
    if (oPropertiesField != null) {
        var requiredLevel = oPropertiesField.getAttribute("requiredlevel");
        if (requiredLevel === "required" || requiredLevel === "systemrequired")
            oArgs.bRequired = true;
        else
            oArgs.bRequired = false
    }
    var showCustomControl = false;
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile))
        if (oArgs.sFldExpFor.toUpperCase() == "FOOTER")
            showCustomControl = false;
        else if (sActualName.indexOf("_composite") != -1 ||
            sActualName == "fullname" ||
            sActualName.indexOf("yomi") === 0 ||
            !IsTypeCustomControlManifestType(sDataType))
            showCustomControl = false;
        else
            showCustomControl = true;
    if (Mscrm.FormEditorVariables.FormType != "card") {
        var oUrl = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/fieldprops.aspx?mode=" +
                (_bPreviewMode ? "Preview" : "Form") +
                "&datatype=" +
                CrmEncodeDecode.CrmUrlEncode(sDataType) +
                "&format=" +
                CrmEncodeDecode.CrmUrlEncode(sDataTypeFormat) +
                "&controlClassId=" +
                CrmEncodeDecode.CrmUrlEncode(sControlClassId) +
                "&objectTypeCode=" +
                CrmEncodeDecode.CrmUrlEncode(GetObjectTypeCode()) +
                "&formId=" +
                CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.currentFormId) +
                (!IsNull(attributeId) ? "&attributeId=" + CrmEncodeDecode.CrmUrlEncode(attributeId) : "") +
                "&formType=" +
                CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType) +
                "&showCustomControl=" +
                CrmEncodeDecode.CrmUrlEncode(showCustomControl) +
                (!IsNull(attributeIdInHeaderForCC)
                    ? "&attributeIdInHeaderForCC=" + CrmEncodeDecode.CrmUrlEncode(attributeIdInHeaderForCC)
                    : "")),
            iWidth = 590,
            iHeight = _bPreviewMode ? 425 : 720;
        createInlineDlg(oUrl, oArgs, iHeight, iWidth, BindUpdatedFieldProperties, [oFieldObj, oActive], null)
    }
}

function IsTypeCustomControlManifestType(sDataType) {
    if (!IsNull(sDataType) && sDataType != "")
        switch (sDataType) {
        case "boolean":
        case "customer":
        case "decimal":
        case "float":
        case "memo":
        case "money":
        case "owner":
        case "partylist":
        case "picklist":
        case "datetime":
        case "integer":
        case "lookup":
        case "text":
            return true
        }
    return false
}

function BindUpdatedFieldProperties(oUpdatedFieldObj, oFieldObj, oActive) {
    if (oUpdatedFieldObj) {
        if (!IsNull(oUpdatedFieldObj.oPropsXml)) {
            oPropertiesXml = oUpdatedFieldObj.oPropsXml;
            if (isOutlookHostedWindow())
                oPropertiesXml = XUI.Xml.LoadXml(oPropertiesXml.xml)
        }
        if (!IsNull(oUpdatedFieldObj.oFieldsXml)) {
            oFieldsXml = oUpdatedFieldObj.oFieldsXml;
            if (isOutlookHostedWindow())
                oFieldsXml = XUI.Xml.LoadXml(oFieldsXml.xml);
            Mscrm.FormXmlUtils.updateFieldXmlForInternalDependencies(oFieldsXml, Mscrm.FormEditorVariables.formXml)
        }
        SetPreviewXml();
        SetPreviewFieldDefaultValues();
        var fRefreshFormEditor = false;
        if (!IsNull(oUpdatedFieldObj.FormXml) &&
            XUI.Xml.XMLSerializer.serializeToString(oUpdatedFieldObj.FormXml) !=
            XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
            fRefreshFormEditor = true;
            Mscrm.FormEditorVariables.formXml = oUpdatedFieldObj.FormXml;
            if (isOutlookHostedWindow())
                Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml(Mscrm.FormEditorVariables.formXml.xml)
        }
        var formXMLPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
        if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
            formXMLPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
        var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
        if (!IsNull(oUpdatedFieldObj.oParameters)) {
            var oParameters = oUpdatedFieldObj.oParameters,
                oParamsNode = XUI.Xml.SelectSingleNode(oCell, "control/parameters", null);
            if (oParamsNode == null) {
                oParamsNode = oCell.ownerDocument.createElement("parameters");
                oParamsNode = XUI.Xml.SelectSingleNode(oCell, "control", null).appendChild(oParamsNode)
            }
            for (var sKey in oParameters) {
                var oParamNode = XUI.Xml.SelectSingleNode(oParamsNode, sKey, null);
                if (!IsNull(oParameters[sKey]) && oParameters[sKey].length > 0) {
                    if (oParamNode == null) {
                        oParamNode = oCell.ownerDocument.createElement(sKey);
                        oParamNode = oParamsNode.appendChild(oParamNode)
                    }
                    XUI.Xml.SetText(oParamNode, oParameters[sKey]);
                    oParamsNode.appendChild(oParamNode)
                } else
                    oParamNode != null &&
                        oParamsNode.removeChild(oParamNode)
            }
        }
        var oLabels = new Array(new LocalizedObj(oUpdatedFieldObj.sLabel, _langCode));
        PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
            formXMLPath + "/row/cell[@id = '" + oActive.id + "']/labels/label",
            oLabels);
        oCell.setAttribute("showlabel", oUpdatedFieldObj.bShowLabel.toString());
        if (Mscrm.DependenciesUtils.isControlDependent(oUpdatedFieldObj.sAttributeSchemaName,
            Mscrm.FormEditorVariables.formXml))
            oCell.setAttribute("locklevel", "1");
        else
            oCell.setAttribute("locklevel", oUpdatedFieldObj.bLocked ? "1" : "0");
        var oControl = XUI.Xml.SelectSingleNode(oCell, "control", null);
        oControl.setAttribute("disabled", oUpdatedFieldObj.bDisabled.toString());
        oControl.setAttribute("classid", oUpdatedFieldObj.sControlClassId);
        if (oFieldObj.iColSpan != oUpdatedFieldObj.iColSpan) {
            var xmlAdjusted = Mscrm.FieldPropertiesUtils
                .adjustFormXmlForColSpanChange(oCell, oFieldObj.iColSpan, oUpdatedFieldObj.iColSpan);
            if (xmlAdjusted) {
                oCell.setAttribute("colspan", oUpdatedFieldObj.iColSpan.toString());
                if (oUpdatedFieldObj.iColSpan < oFieldObj.iColSpan) {
                    var elemIdInHTML = oCell.getAttribute("id"),
                        domElem = document.getElementById(elemIdInHTML);
                    HandleAfterColSpanReduced(oCell, domElem, oUpdatedFieldObj.iColSpan, oFieldObj.iColSpan)
                }
            } else
                return
        }
        if (Mscrm.FormEditorVariables.fieldExpIsFor === "section")
            if (oFieldObj.bAutoExpanding != oUpdatedFieldObj.bAutoExpanding) {
                oCell.setAttribute("auto", oUpdatedFieldObj.bAutoExpanding.toString());
                oUpdatedFieldObj.bAutoExpanding &&
                    ModifyOtherAutoExpandingFieldIfRequired(oCell)
            }
        setAttributeIfNotDefaultValue(oCell, "visible", oUpdatedFieldObj.Visible.toString(), "true");
        oUpdatedFieldObj.AvailableForPhone != null &&
            setAttributeIfNotDefaultValue(oCell,
                "availableforphone",
                oUpdatedFieldObj.AvailableForPhone.toString(),
                "true");
        if (!IsNull(oUpdatedFieldObj.iRowSpan) && oFieldObj.iRowSpan != oUpdatedFieldObj.iRowSpan) {
            Mscrm.FieldPropertiesUtils
                .adjustFormXmlForRowSpanChange(oCell, oFieldObj.iRowSpan, oUpdatedFieldObj.iRowSpan);
            oCell.setAttribute("rowspan", oUpdatedFieldObj.iRowSpan.toString())
        }
        var oSection = oActive.parentNode.parentNode.parentNode,
            newDeplist = null;
        if (oUpdatedFieldObj.oEvents != null)
            newDeplist = oUpdatedFieldObj.oEvents[0].Dependencies;
        if (fRefreshFormEditor) {
            var scrollTop = $get("editorDiv").scrollTop;
            RefreshFormEditorAndClick();
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
            $get("editorDiv").scrollTop = scrollTop
        } else
            RefreshSectionHtml(oSection, oActive.id, true)
    }
}

function SetFieldSpan(sAttributeSchemaName, bSpansTwoColumns, oActive) {
    var oRow,
        oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (bSpansTwoColumns) {
        oCell.setAttribute("colspan", "2");
        var oNextCell = XUI.Html.DomUtils.GetNextSibling(oCell),
            oParentNode = oCell.parentNode,
            oParentElem = oActive.parentNode;
        if (oNextCell)
            if (XUI.Xml.SelectSingleNode(oNextCell, "control/@id", null)) {
                oRow = Mscrm.FormEditorVariables.formXml.createElement("row");
                oRow.appendChild(GetEmptyCellNode());
                oRow.appendChild(oNextCell);
                oParentNode.parentNode.insertBefore(oRow, XUI.Html.DomUtils.GetNextSibling(oParentNode))
            } else
                oParentNode.removeChild(oNextCell);
        else {
            var oPrevCell = XUI.Html.DomUtils.GetPrevSibling(oCell);
            if (XUI.Xml.SelectSingleNode(oPrevCell, "control/@id", null)) {
                oRow = Mscrm.FormEditorVariables.formXml.createElement("row");
                oRow.appendChild(oPrevCell);
                oRow.appendChild(GetEmptyCellNode());
                oParentNode.parentNode.insertBefore(oRow, XUI.Html.DomUtils.GetNextSibling(oParentNode))
            } else
                oParentNode.removeChild(oPrevCell)
        }
    } else {
        oRow = GetRowNode(sAttributeSchemaName);
        oRow.appendChild(GetEmptyCellNode());
        oCell.removeAttribute("colspan")
    }
}

function RemoveField(oActive, bCheckIsRequired) {
    var formXmlPath = null;
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        formXmlPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
    else
        formXmlPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
    var fieldName = oActive.getAttribute("name"),
        oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id),
        oSection = oCell.parentNode.parentNode.parentNode,
        oNodes = XUI.Xml.SelectNodes(oSection,
            "rows/row/cell[@id='" + oActive.id + "']/control[@id = '" + oActive.getAttribute("name") + "']",
            null),
        sfieldList = GetDependentList(oNodes, false),
        removeDependencies = false,
        fieldCount = Mscrm.FieldPropertiesUtils.getFieldCountOnForm(oCell, Mscrm.FormEditorVariables.fieldExpIsFor);
    if (EnableRequiredFieldsOnlyInHeader())
        fieldCount = Mscrm.FieldPropertiesUtils.getFieldCountOnForm(oCell, Mscrm.DragDropUtils.HEADER) +
            Mscrm.FieldPropertiesUtils.getFieldCountOnForm(oCell, Mscrm.DragDropUtils.MAIN);
    if (fieldCount <= 1) {
        removeDependencies = true;
        if (bCheckIsRequired && sfieldList.length > 0) {
            alert(LOCID_FORMED_FIELDDEPENDENTTITLE + "\n\n" + LOCID_FORMED_FIELDDEPENDENTHEAD + "\n\n" + sfieldList);
            return false
        }
        if (bCheckIsRequired && oCell.getAttribute("locklevel") == "1") {
            alert(LOCID_FORMED_FIELDLOCKED);
            return false
        }
        if (bCheckIsRequired && oSection.getAttribute("locklevel") == "1") {
            alert(LOCID_FORMED_FIELDLOCKEDSECTION);
            return false
        }
        var oTab = oSection.parentNode.parentNode.parentNode.parentNode;
        if (oTab != null)
            if (bCheckIsRequired && oTab.getAttribute("locklevel") == "1") {
                alert(LOCID_FORMED_FIELDLOCKEDTAB);
                return false
            }
        if (bCheckIsRequired && !IsRemovable(oNodes)) {
            alert(LOCID_FORMED_FIELDREQUIRED);
            return false
        }
    }
    var rowsNode = oCell.parentNode.parentNode,
        sectionHTML = oActive.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
        sectionInnerNode = oActive.parentNode.parentNode.parentNode,
        oSection = oCell.parentNode.parentNode.parentNode,
        refreshFormEditor = false;
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor && removeDependencies) {
        var controlType = Mscrm.FormXmlUtils.getControlType(oCell);
        if (Mscrm.DependenciesUtils.hasDependencies(oCell, controlType)) {
            Mscrm.DependenciesUtils.removeLockLevelForEventDependencies(oCell, controlType);
            refreshFormEditor = true
        }
        Mscrm.FieldPropertiesUtils.removeFieldHandlers(oCell)
    }
    Mscrm.DragDropUtils.addPlaceHolders(rowsNode);
    var dragObject = Mscrm.DragDropUtils.createElementObject(oActive);
    Mscrm.DragDropUtils.removeElementInFormXml(dragObject, true);
    Mscrm.DragDropUtils.pullUp(dragObject, true);
    Mscrm.DragDropUtils.removePlaceHolders(rowsNode);
    Mscrm.DragDropUtils.pullUpIfRequired(dragObject);
    Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
    for (var iRow = dragObject.get_elementPosition().get_row(),
        iCol = dragObject.get_elementPosition().get_column(),
        childElem = null,
        rowNode = null,
        rows = [],
        i = 0,
        j = 0;
        i < rowsNode.childNodes.length;
        i++)
        if (rowsNode.childNodes[i].nodeType != 3) {
            rows[j] = rowsNode.childNodes[i];
            j++
        }
    rowNode = rows[iRow >= rows.length ? iRow - 1 : iRow];
    if (rowNode != null) {
        var cols = [];
        for (i = 0, j = 0; i < rowNode.childNodes.length; i++)
            if (rowNode.childNodes[i].nodeType != 3) {
                cols[j] = rowNode.childNodes[i];
                j++
            }
        childElem = cols[iCol]
    }
    !oActive.getAttribute("name").startsWith("spacer_") &&
        RefreshFieldExplorer(Mscrm.FormEditorVariables.formXml, oPropertiesXml, oFieldsXml);
    if (refreshFormEditor) {
        var scrollTop = $get("editorDiv").scrollTop;
        RefreshFormEditor(Mscrm.Render.wholeCanvas);
        $get("editorDiv").scrollTop = scrollTop
    } else
        RemoveFieldXmlHtml(oActive);
    var elemToClick = null;
    if (childElem) {
        var elemId = childElem.getAttribute("id");
        elemToClick = $get(elemId);
        Mscrm.Utilities.click(elemToClick);
        refreshFormEditor &&
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor)
    }
    (fieldName == Mscrm.DragDropUtils.NOTES_CONTROL_ID || fieldName == Mscrm.DragDropUtils.BingMapsControlId) &&
        refreshRibbon();
    return true
}

function RemoveFieldXmlHtml(oActive) {
    var oSection = oActive.parentNode.parentNode.parentNode;
    RefreshSectionHtml(oSection, null, true)
}

function PersistEventXml(sFieldName, oUpdatedEventObj, iEventIndex) {
    var oEvent = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
            sFieldName +
            "']/events/event[@application = 'false' and @name = '" +
            oUpdatedEventObj.Name +
            "']",
            null),
        oNewNode,
        oNode;
    if (!oEvent) {
        var oEvents = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
            sFieldName +
            "']/events",
            null);
        if (!oEvents) {
            var oNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
                sFieldName +
                "']",
                null);
            oEvents = Mscrm.FormEditorVariables.formXml.createElement("events");
            oNode.insertBefore(oEvents, XUI.Xml.SelectSingleNode(oNode, "control", null))
        }
        oEvent = Mscrm.FormEditorVariables.formXml.createElement("event");
        oEvents.appendChild(oEvent);
        var oScript = Mscrm.FormEditorVariables.formXml.createElement("script");
        oEvent.appendChild(oScript);
        oScript.appendChild(Mscrm.FormEditorVariables.formXml.createCDATASection(" "));
        var oDepends = Mscrm.FormEditorVariables.formXml.createElement("dependencies");
        oEvent.appendChild(oDepends);
        var oDepend = Mscrm.FormEditorVariables.formXml.createElement("dependency");
        oDepends.appendChild(oDepend);
        oEvent.setAttribute("name", oUpdatedEventObj.Name);
        oEvent.setAttribute("application", "false")
    }
    oEvent.setAttribute("active", 1 == oUpdatedEventObj.Active ? "true" : "false");
    var iNewLen = IsNull(oUpdatedEventObj.Dependencies) ? 0 : oUpdatedEventObj.Dependencies.length,
        bDependsSame = true;
    oParentNode = XUI.Xml.SelectNodes(oEvent, "dependencies/dependency", null);
    Mscrm.Utilities.removeAll(oParentNode);
    for (i = 0; i < iNewLen; i++) {
        oNewNode = Mscrm.FormEditorVariables.formXml.createElement("dependency");
        oNewNode.setAttribute("id", oUpdatedEventObj.Dependencies[i]);
        oParentNode = XUI.Xml.SelectSingleNode(oEvent, "dependencies", null);
        oParentNode.appendChild(oNewNode)
    }
    var oScript = XUI.Xml.SelectSingleNode(oEvent, "script", null);
    XUI.Html.DomUtils.GetFirstChild(oScript).replaceData(0,
        XUI.Html.DomUtils.GetFirstChild(oScript).length,
        oUpdatedEventObj.Script);
    return
}

function CanAddFields(oActive, isFromFieldExplorer) {
    isFromFieldExplorer = typeof isFromFieldExplorer !== "undefined" ? isFromFieldExplorer : false;
    if (isFromFieldExplorer == null)
        isFromFieldExplorer = false;
    var dataType = null;
    if (isFromFieldExplorer == true)
        if (oActive != null && oActive.getAttribute("datatype") != null) {
            dataType = oActive.getAttribute("datatype").toString();
            dataType = typeof dataType !== "undefined" ? dataType : null
        }
    if (Mscrm.OperationValidator.isOperationValid(Mscrm.EditorOperations.addField, _oActive, null, dataType)) {
        if (oActive == null) {
            alert(LOCID_FORMED_MUSTSELECT);
            return false
        }
        return true
    }
}

function AddInteractionWallFromRibbon() {
    AddInteractionWall(_oActive)
}

function AddInteractionWall(oActive) {
    if (!CanAddFields(oActive))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        newGuid = createGuid();
    _interactionWallControlId = "interactionwall" + newGuid;
    var oInteractionWall = new InteractionWallObj(_interactionWallControlId,
        new Array(new LocalizedObj("Interaction Wall", _langCode)));
    oInteractionWall.TabName = sTabName;
    oInteractionWall.SectionName = sSectionName;
    var rowsNode = Mscrm.DragDropUtils.getRowsNode(sSectionName, null),
        interactionWallId = AddInteractionWallXml(oInteractionWall);
    Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
    RefreshCellHtml(oInteractionWall.TabName, oInteractionWall.SectionName, interactionWallId)
}

function AddInteractionWallXml(oInteractionWall) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oInteractionWall.SectionName, null),
        oCell = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        cellId = createGuid();
    oCell.setAttribute("id", cellId);
    oCell.setAttribute("showlabel", false);
    oCell.setAttribute("rowspan", "2");
    oCell.setAttribute("colspan", "1");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    var oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    oControl.setAttribute("id", oInteractionWall.Id);
    oControl.setAttribute("classid", _ControlClassIds.interactionwall);
    AddCellToFormXml(oRows, oCell, 2, false, false);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
        oInteractionWall.Id +
        "']/labels/label",
        oInteractionWall.Labels);
    return cellId
}

function isReferencePanelType(oActive) {
    if (oActive.className == Mscrm.DragDropUtils.REFERENCEPANELSUBGRID ||
        oActive.className == Mscrm.DragDropUtils.REFERENCEPANELQUICKFORMCOLLECTION ||
        oActive.className == Mscrm.DragDropUtils.REFERENCEPANELSEARCHWIDGET ||
        oActive.getAttribute("name").startsWith("ref_pan_"))
        return true;
    else if (oActive.className == Mscrm.DragDropUtils.TAB &&
        oActive.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0]
        .childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].getAttribute("name")
        .startsWith("ref_pan_"))
        return true;
    return false
}

function AddSubGridFromRibbon(isChart, useComponentGallery) {
    AddSubGrid(_oActive, isChart, useComponentGallery)
}

function AddSubGrid(oActive, isChart, useComponentGallery) {
    if (Mscrm.FormEditorVariables.supportInteractionCentric === "True")
        if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2 &&
            Mscrm.FormEditorVariables.streamsCount == 0) {
            alert(LOCID_IC_STREAM_BEFORE_CHART);
            return
        }
    if (Mscrm.FormEditorVariables.supportInteractionCentric === "True") {
        var oFormCell = Mscrm.DragDropUtils.getCellNode(oActive.getAttribute("name"));
        if (checkIfChartPresent(oFormCell))
            return;
        if (oFormCell == null || oFormCell.getAttribute("ischartcell") == null) {
            alert(LOCID_IC_SELECT_CHART);
            return
        }
    }
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return false;
    if (!CanAddFields(oActive))
        return;
    var oFormCell = Mscrm.DragDropUtils.getCellNode(oActive.getAttribute("name"));
    if (Mscrm.PreviewCellUtils.isPreviewCell(oFormCell)) {
        UpdateSubGrid(oActive, isChart, useComponentGallery);
        return
    }
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        rowsPerPage = Mscrm.FormXMlConstants.get_rowsPerPage();
    if (Mscrm.FormEditorVariables.FormType == "quick")
        rowsPerPage = 5;
    var secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    var gridMode = "All";
    if (!IsNull(isChart))
        gridMode = isChart ? "Chart" : "Grid";
    oArgs.Field = new SubGridObj("",
        "",
        "",
        rowSpan,
        rowsPerPage,
        secCols,
        false,
        false,
        "",
        false,
        "",
        false,
        false,
        gridMode,
        "",
        true,
        null,
        "",
        false,
        false,
        true,
        null,
        null,
        isReferencePanelType(oActive),
        null);
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.FormType = Mscrm.FormEditorVariables.FormType;
    oArgs.ObjectTypeCode = _objectTypeCode;
    oArgs.AllEntityData = Mscrm.FieldPropertiesUtils.getAllEntityData();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor)
        oArgs.RelEntitiesData = Mscrm.FieldPropertiesUtils.getRelatedEntitiesData(_objectTypeCode);
    oArgs.SecCols = secCols;
    oArgs.sTabName = sTabName;
    oArgs.sSectionName = sSectionName;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.LangCode = _langCode;
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile))
        oArgs.sCustomControlUniqueId = createGuid();
    var uri,
        height,
        width;
    if (!IsNull(useComponentGallery) && useComponentGallery) {
        uri = Mscrm.CrmUri.create("/Tools/DashboardEditor/Dialogs/ComponentGallery.aspx");
        uri.get_query()["dashboardType"] = oArgs.FormAccessType.toString();
        uri.get_query()["mode"] = gridMode;
        if (Mscrm.FormEditorVariables.supportInteractionCentric === "True") {
            uri.get_query()["interactioncentric"] = "true";
            uri.get_query()["objecttypecode"] = _objectTypeCode;
            uri.get_query()["selectedview"] = paranthesizeAndUpperCaseGuid(Mscrm.FormEditorVariables.selectedView);
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2 &&
                Mscrm.FormEditorVariables.streamsIsQueueSelected) {
                uri.get_query()["dashboardCategory"] = Mscrm.FormEditorVariables.dashboardCategory;
                uri.get_query()["queueName"] = Mscrm.FormEditorVariables.streamsQueueName;
                uri.get_query()["queueItemName"] = Mscrm.FormEditorVariables.streamsQueueItemViewName
            }
        }
        height = Mscrm.DashboardEditorConstants.componentGalleryHeight, width = Mscrm.DashboardEditorConstants
            .componentGalleryWidth
    } else {
        uri = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/subGrid.aspx?title=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_SUBGRIDPROPS) +
            "&description=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYSUBGRIDPROPS) +
            "&formType=" +
            CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType) +
            "&chartgridmode=" +
            CrmEncodeDecode.CrmUrlEncode(gridMode));
        height = _subGridDefaults.iDialogHeight, width = _subGridDefaults.iDialogWidth
    }
    var parameters = [sTabName, sSectionName, secCols];
    createInlineDlg(uri, oArgs, height, width, OpenComponentGallery, parameters, null)
}

function paranthesizeAndUpperCaseGuid(guid) {
    if (!IsNull(guid) && guid[0] != "{")
        guid = "{" + guid.toUpperCase() + "}";
    else if (!IsNull(guid))
        return guid.toUpperCase();
    return guid
}

function checkIfChartPresent(oFormCell) {
    if (oFormCell != null) {
        var tabsHtml = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab/columns/column/sections/section[@name = 'VisualFilters']/rows/row/cell[@id = '" +
            oFormCell.getAttribute("id") +
            "']/control/parameters/VisualizationId",
            null);
        if (tabsHtml == null)
            return false;
        else {
            var id = XUI.Xml.GetText(tabsHtml);
            if (id == "")
                return false;
            else
                return true
        }
    } else
        return false
}

function AddOrgInsightsFromRibbon(useComponentGallery) {
    AddOrgInsights(_oActive, useComponentGallery)
}

function AddOrgInsights(oActive, useComponentGallery) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return false;
    if (!CanAddFields(oActive))
        return;
    var oFormCell = Mscrm.DragDropUtils.getCellNode(oActive.getAttribute("name"));
    if (Mscrm.PreviewCellUtils.isPreviewCell(oFormCell)) {
        UpdateSubGridOrgInsights(oActive, useComponentGallery);
        return
    }
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        rowsPerPage = Mscrm.FormXMlConstants.get_rowsPerPage();
    if (Mscrm.FormEditorVariables.FormType == "quick")
        rowsPerPage = 5;
    var secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    oArgs.Field = new OrgInsightsObj("",
        rowSpan,
        secCols,
        true,
        sTabName,
        sSectionName,
        null,
        true,
        null,
        "auto",
        true,
        Mscrm.FormEditorVariables.formXml,
        true,
        null,
        false);
    if (Mscrm.FormEditorVariables.editorType !== Mscrm.EditorType.dashboardEditor) {
        oArgs.Field.Id = "Component" + createGuid().substr(1, 8);
        oArgs.FieldsXml = oFieldsXml;
        oArgs.FieldPropertiesXml = oPropertiesXml;
        oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
        oArgs.ObjectTypeCode = _objectTypeCode;
        oArgs.SecCols = secCols;
        oArgs.sTabName = sTabName;
        oArgs.sSectionName = sSectionName;
        oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
        oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
        oArgs.LangCode = _langCode;
        var uri,
            height,
            width;
        uri = Mscrm.CrmUri.create("/Tools/DashboardEditor/Dialogs/OrgInsightsComponentGallery.aspx");
        uri.get_query()["dashboardType"] = oArgs.FormAccessType.toString();
        height = Mscrm.DashboardEditorConstants.orgInsightsComponentGalleryHeight, width = Mscrm
            .DashboardEditorConstants.orgInsightsComponentGalleryWidth;
        var parameters = [sTabName, sSectionName, secCols];
        createInlineDlg(uri, oArgs, height, width, OpenOrgInsightsComponentGallery, parameters, null)
    }
}

function OpenOrgInsightsComponentGallery(oSubGrid, sTabName, sSectionName, secCols) {
    if (oSubGrid) {
        if (secCols < oSubGrid.ColSpan) {
            alert(Mscrm.FormEditorVariables.addColumnsMessage);
            return
        }
        oSubGrid.TabName = sTabName;
        oSubGrid.SectionName = sSectionName;
        var rowsNode = Mscrm.DragDropUtils.getRowsNode(sSectionName, null),
            subGridId = AddOrgInsightsFormXml(oSubGrid);
        Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
        RefreshCellHtml(oSubGrid.TabName, oSubGrid.SectionName, subGridId)
    }
}

function OpenComponentGallery(oSubGrid, sTabName, sSectionName, secCols) {
    if (oSubGrid) {
        if (secCols < oSubGrid.ColSpan) {
            alert(Mscrm.FormEditorVariables.addColumnsMessage);
            return
        }
        oSubGrid.TabName = sTabName;
        oSubGrid.SectionName = sSectionName;
        var rowsNode = Mscrm.DragDropUtils.getRowsNode(sSectionName, null),
            bNeedChangeClassId;
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) &&
            oSubGrid.CustomControlSnippet != null)
            bNeedChangeClassId = !IsNull(XUI.Xml
                .SelectSingleNode(oSubGrid.CustomControlSnippet, "//controlDescription", null));
        var subGridId = AddSubGridFormXml(oSubGrid);
        Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
        RefreshCellHtml(oSubGrid.TabName, oSubGrid.SectionName, subGridId);
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) &&
            bNeedChangeClassId) {
            var controlNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@id = '" +
                oSubGrid.Id +
                "']");
            controlNode.setAttribute("classid", _ControlClassIds.customControl);
            controlNode.setAttribute("uniqueid", oSubGrid.CustomControlUniqueId)
        }
    }
}

function AddQuickFormFromRibbon() {
    AddQuickForm(_oActive)
}

function AddQuickForm(oActive) {
    if (!CanAddFields(oActive))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        rowsPerPage = Mscrm.FormXMlConstants.get_rowsPerPage(),
        secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    oArgs.Field = new QuickFormObj("", false, null, true, "", null, isReferencePanelType(oActive), null, null);
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.FormType = Mscrm.FormEditorVariables.FormType;
    oArgs.ObjectTypeCode = _objectTypeCode;
    oArgs.SecCols = secCols;
    oArgs.sTabName = sTabName;
    oArgs.sSectionName = sSectionName;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.LangCode = _langCode;
    if (Mscrm.FormEditorVariables.FormType != "card") {
        var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/quickFormCollectionControl.aspx?title=" +
                CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_SUBFORMPROPS) +
                "&description=" +
                CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYSUBFORMPROPS)),
            callBackParameters = [sTabName, sSectionName],
            dialogOptions = new Xrm.DialogOptions;
        dialogOptions.height = _subGridDefaults.iDialogHeight;
        dialogOptions.width = _subGridDefaults.iDialogWidth + 60;
        var callbkFunction = Mscrm.Utilities
            .createCallbackFunctionForXrmDialog(quickFormCallBackFunction, callBackParameters);
        Xrm.Internal.openDialog(url.toString(), dialogOptions, oArgs, null, callbkFunction)
    }
}

function quickFormCallBackFunction(oQuickForm, sTabName, sSectionName) {
    if (oQuickForm) {
        oQuickForm.TabName = sTabName;
        oQuickForm.SectionName = sSectionName;
        var rowsNode = Mscrm.DragDropUtils.getRowsNode(sSectionName, null),
            quickFormCollectionId = AddQuickFormCollectionXml(oQuickForm);
        Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
        RefreshCellHtml(oQuickForm.TabName, oQuickForm.SectionName, quickFormCollectionId)
    }
}

function AddPowerBITileFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "powerbitile", useComponentGallery)
}

function AddWebResourceFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "webresource", useComponentGallery)
}

function AddIFrameFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "iframe", useComponentGallery)
}

function AddSocialInsightFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "socialInsight", useComponentGallery)
}

function AddBingMapFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "bingmap", useComponentGallery)
}

function AddTimerControlFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "timercontrol", useComponentGallery)
}

function AddKMControlFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "searchwidget", useComponentGallery)
}

function AddDelveFromRibbon(useComponentGallery) {
    AddDelve(_oActive, useComponentGallery)
}

function AddACIControlFromRibbon(useComponentGallery) {
    AddIFrame(_oActive, "aci", useComponentGallery)
}

function EditInteractionCentricDashboardPropertiesFromRibbon() {
    if (!IsNull(Mscrm.FormEditorVariables.selectedStreamDiv) &&
        !isNullOrEmptyString(Mscrm.FormEditorVariables.selectedStreamDiv.getAttribute("id")))
        EditSelectedStream(Mscrm.FormEditorVariables.selectedStreamDiv.getAttribute("id"),
            Mscrm.FormEditorVariables.selectedStreamDiv.getAttribute("objecttypecode"));
    else
        alert(LOCID_IC_SELECT_STREAM)
}

function EditSelectedStream(id, otc) {
    var streamObject = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Streams']/rows/row/cell/control[@classid='{EE9078C8-6946-4E2C-B8F8-35E65F4BE6A8}']/parameters/StreamObjects/StreamObject[@id='" + id + "']",
        null);
    if (IsNull(streamObject)) {
        alert(LOCID_IC_SELECT_STREAM);
        return
    }
    var parameters = [],
        oArgs = {};
    oArgs.isQueue = true;
    oArgs.streamObjectId = streamObject.getAttribute("id");
    oArgs.entityCode = "0";
    var entityLogicalNameNode = XUI.Xml.SelectSingleNode(streamObject, "LogicalEntityName");
    if (!IsNull(entityLogicalNameNode))
        if (!isNullOrEmptyString(XUI.Xml.GetText(entityLogicalNameNode)))
            oArgs.entityCode = Xrm.Internal.getEntityCode(XUI.Xml.GetText(entityLogicalNameNode)) == -1
                ? "0"
                : Xrm.Internal.getEntityCode(XUI.Xml.GetText(entityLogicalNameNode)).toString();
    if (oArgs.entityCode == 0)
        if (!isNullOrEmptyString(otc))
            oArgs.entityCode = otc;
    switch (streamObject.getAttribute("type")) {
    case "0":
        var queueIdNode = XUI.Xml.SelectSingleNode(streamObject, "QueueId");
        if (!IsNull(queueIdNode))
            oArgs.queueId = XUI.Xml.GetText(queueIdNode);
        var queueViewIdNode = XUI.Xml.SelectSingleNode(streamObject, "QueueViewId");
        if (!IsNull(queueViewIdNode))
            oArgs.queueViewId = XUI.Xml.GetText(queueViewIdNode);
        break;
    case "1":
        oArgs.isQueue = false;
        var entityViewIdNode = XUI.Xml.SelectSingleNode(streamObject, "EntityViewId");
        if (!IsNull(entityViewIdNode))
            oArgs.entityViewId = XUI.Xml.GetText(entityViewIdNode);
        break;
    case "2":
        var queueIdNode = XUI.Xml.SelectSingleNode(streamObject, "SavedQueryID");
        if (!IsNull(queueIdNode))
            oArgs.queueId = XUI.Xml.GetText(queueIdNode);
        var queueViewIdNode = XUI.Xml.SelectSingleNode(streamObject, "QueueViewIdForSavedQuery");
        if (!IsNull(queueViewIdNode))
            oArgs.queueViewId = XUI.Xml.GetText(queueViewIdNode);
        break
    }
    if (!IsNull(Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD))
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=3&objecttypecode=" +
                _objectTypeCode +
                "&dashboardcategory=" +
                Mscrm.FormEditorVariables.dashboardCategory +
                "&isentitydashboard=" +
                Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD),
            oArgs,
            300,
            500,
            EditQueueCallback,
            parameters,
            null);
    else
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=3&objecttypecode=" +
                _objectTypeCode +
                "&dashboardcategory=" +
                Mscrm.FormEditorVariables.dashboardCategory),
            oArgs,
            300,
            500,
            EditQueueCallback,
            parameters,
            null)
}

function AddQueuesFromRibbon(isChart, queueType, useComponentGallery) {
    if (Mscrm.FormEditorVariables.supportInteractionCentric === "True" &&
        Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2)
        if (Mscrm.FormEditorVariables.streamsCount == 0) {
            SetActiveObject(null, $get(streamsCell().getAttribute("id")));
            AddQueues(_oActive, "queues")
        } else
            alert(LOCID_IC_ONE_STREAM);
    else
        Mscrm.FormEditorVariables.supportInteractionCentric === "True" &&
            (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR1 ||
                Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.ENTITYDASHBOARD) &&
            AddMultipleQueues("queues")
}

function AddMultipleQueues(queueType) {
    if (Mscrm.FormEditorVariables.streamsCount == 0) {
        SetActiveObject(null, $get(streamsCell().getAttribute("id")));
        AddQueues(_oActive, queueType)
    } else {
        var parameters = [],
            oArgs = {};
        oArgs.queueType = queueType;
        if (!IsNull(Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD))
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=1&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory +
                    "&isentitydashboard=" +
                    Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD),
                oArgs,
                300,
                500,
                MultipleQueueAddedCallback,
                parameters,
                null);
        else
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=1&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory),
                oArgs,
                300,
                500,
                MultipleQueueAddedCallback,
                parameters,
                null)
    }
}

function EditQueueCallback(oQueue) {
    var oStreamObjects = XUI.Xml.SelectSingleNode(streamsCell(), "control/parameters/StreamObjects", null),
        imageHTML = AddStreamObjectNode(oQueue, oStreamObjects, false, true);
    !IsNull(Mscrm.FormEditorVariables.selectedStreamDiv) &&
        $(Mscrm.FormEditorVariables.selectedStreamDiv).removeClass("stream-selected");
    Mscrm.FormEditorVariables.selectedStreamDiv = imageHTML;
    $(imageHTML).addClass("stream-selected");
    refreshRibbon()
}

function MultipleQueueAddedCallback(oQueue) {
    var oStreamObjects = XUI.Xml.SelectSingleNode(streamsCell(), "control/parameters/StreamObjects", null),
        imageHTML = AddStreamObjectNode(oQueue, oStreamObjects, false, false),
        streamCellID = streamsCell().getAttribute("id"),
        streamCellElement = document.getElementById(streamCellID),
        anchorElement = streamCellElement.querySelector("a");
    anchorElement.appendChild(imageHTML);
    ++Mscrm.FormEditorVariables.streamsCount
}

function ProcessQueueDataForFormXml(oQueue) {
    if (oQueue.queueEntityTypeCode == "")
        oQueue.queueEntityTypeCode = _objectTypeCode;
    if (oQueue.queueId.charAt(0) != "{")
        oQueue.queueId = "{" + oQueue.queueId + "}";
    if (oQueue.queueViewId.charAt(0) != "{")
        oQueue.queueViewId = "{" + oQueue.queueViewId + "}"
}

function AddTilesFromRibbon(isChart, queueType) {
    AddQueues(_oActive, "tiles")
}

function AddQueues(oActive, queueType) {
    var oFormCell,
        sTabName,
        sSectionName,
        parameters,
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        rowsPerPage = Mscrm.FormXMlConstants.get_rowsPerPage();
    oArgs.queueType = queueType;
    if (queueType == "queues") {
        oFormCell = streamsCell();
        sTabName = streamsTab().getAttribute("id");
        sSectionName = streamsSection().getAttribute("id");
        parameters = [sTabName, sSectionName, oActive, oFormCell, queueType];
        if (!IsNull(Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD))
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=1&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory +
                    "&isentitydashboard=" +
                    Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD),
                oArgs,
                300,
                500,
                QueueAddedCallback,
                parameters,
                null);
        else
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=1&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory),
                oArgs,
                300,
                500,
                QueueAddedCallback,
                parameters,
                null)
    } else if (queueType == "tiles") {
        oFormCell = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
            "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Tiles']/rows/row/cell[@id = '" + oActive.getAttribute("id") + "']",
            null);
        sTabName = GetCurrentTabName(oActive), sSectionName = GetCurrentSectionName(oActive);
        parameters = [sTabName, sSectionName, oActive, oFormCell, queueType];
        if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2 &&
            Mscrm.FormEditorVariables.streamsCount == 0) {
            alert(LOCID_IC_STREAM_BEFORE_TILE);
            return
        }
        if (oFormCell == null || oFormCell.getAttribute("istilecell") == null) {
            alert(LOCID_IC_SELECT_TILE);
            return
        }
        if (!IsNull(Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD))
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=2&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory +
                    "&isentitydashboard=" +
                    Mscrm.FormEditorVariables.IS_ENTITY_DASHBOARD),
                oArgs,
                300,
                500,
                TileAddedCallback,
                parameters,
                null);
        else
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_queues.aspx?title=2&objecttypecode=" +
                    _objectTypeCode +
                    "&dashboardcategory=" +
                    Mscrm.FormEditorVariables.dashboardCategory),
                oArgs,
                300,
                500,
                TileAddedCallback,
                parameters,
                null)
    }
}

function removeChildNodes(node) {
    while (node.hasChildNodes())
        node.removeChild(node.lastChild)
}

function AddStreamObjectNode(oQueue, oStreamObjects, isTileCell, editMode) {
    var oStreamObject = null;
    if (editMode === true) {
        oStreamObject = XUI.Xml.SelectSingleNode(oStreamObjects,
            "StreamObject[@id = '" + oQueue.EditStreamObjectId + "']",
            null);
        if (IsNull(oStreamObject))
            return;
        removeChildNodes(oStreamObject)
    } else {
        oStreamObject = Mscrm.FormEditorVariables.formXml.createElement("StreamObject");
        oStreamObject.setAttribute("id", createGuid());
        oStreamObjects.appendChild(oStreamObject)
    }
    var imageHTML,
        otc = "0";
    if (oQueue.queueViewSelected) {
        ProcessQueueDataForFormXml(oQueue);
        var queueName = oQueue.queueName;
        if (oQueue.isQueueCollection == "false") {
            oStreamObject.setAttribute("type", "0");
            var oEntityLogicalNameForQueue = Mscrm.FormEditorVariables.formXml.createElement("LogicalEntityName");
            XUI.Xml.SetText(oEntityLogicalNameForQueue,
                Xrm.Internal.getEntityName(parseInt(oQueue.queueEntityTypeCode)));
            otc = oQueue.queueEntityTypeCode;
            oStreamObject.appendChild(oEntityLogicalNameForQueue);
            var oQueueId = Mscrm.FormEditorVariables.formXml.createElement("QueueId");
            XUI.Xml.SetText(oQueueId, oQueue.queueId);
            oStreamObject.appendChild(oQueueId);
            var oQueueViewId = Mscrm.FormEditorVariables.formXml.createElement("QueueViewId");
            XUI.Xml.SetText(oQueueViewId, oQueue.queueViewId);
            oStreamObject.appendChild(oQueueViewId)
        } else {
            oStreamObject.setAttribute("type", "2");
            var oEntityLogicalNameForSavedQuery = Mscrm.FormEditorVariables.formXml.createElement("LogicalEntityName");
            XUI.Xml.SetText(oEntityLogicalNameForSavedQuery,
                Xrm.Internal.getEntityName(parseInt(oQueue.queueEntityTypeCode)));
            otc = oQueue.queueEntityTypeCode;
            oStreamObject.appendChild(oEntityLogicalNameForSavedQuery);
            var oSavedQueryID = Mscrm.FormEditorVariables.formXml.createElement("SavedQueryID");
            XUI.Xml.SetText(oSavedQueryID, oQueue.queueId);
            oStreamObject.appendChild(oSavedQueryID);
            var oQueueViewIdForSavedQuery = Mscrm.FormEditorVariables.formXml.createElement("QueueViewIdForSavedQuery");
            XUI.Xml.SetText(oQueueViewIdForSavedQuery, oQueue.queueViewId);
            oStreamObject.appendChild(oQueueViewIdForSavedQuery)
        }
        if (!isTileCell) {
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2)
                imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                    "stream-divtier2",
                    oQueue,
                    "stream-queuetier2 textEllipsis",
                    "stream-queuetier2text textEllipsis",
                    false,
                    editMode,
                    isTileCell);
            else
                imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                    "stream-div",
                    oQueue,
                    "stream-queue textEllipsis",
                    "textEllipsis",
                    false,
                    editMode,
                    isTileCell);
            imageHTML.setAttribute("objecttypecode", otc);
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
                Mscrm.FormEditorVariables.streamsIsQueueSelected = true;
                Mscrm.FormEditorVariables.streamsQueueName = oQueue.queueName;
                Mscrm.FormEditorVariables.streamsQueueItemViewName = oQueue.queueItemViewName
            }
        } else
            imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                "tile-div",
                oQueue,
                "tile-queue textEllipsis",
                "textEllipsis",
                false,
                editMode,
                isTileCell)
    } else {
        var savedQueryId = oQueue.savedQueryId;
        if (oQueue.savedQueryId.charAt(0) != "{")
            savedQueryId = "{" + oQueue.savedQueryId + "}";
        var oLogicalName = Mscrm.FormEditorVariables.formXml.createElement("LogicalEntityName");
        XUI.Xml.SetText(oLogicalName, Xrm.Internal.getEntityName(parseInt(oQueue.entityId)));
        otc = oQueue.entityId;
        oStreamObject.appendChild(oLogicalName);
        oStreamObject.setAttribute("type", "1");
        var oEntityViewId = Mscrm.FormEditorVariables.formXml.createElement("EntityViewId");
        XUI.Xml.SetText(oEntityViewId, savedQueryId);
        oStreamObject.appendChild(oEntityViewId);
        if (!isTileCell) {
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2)
                imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                    "stream-divtier2",
                    oQueue,
                    "stream-queuetier2 textEllipsis",
                    "stream-queuetier2text textEllipsis",
                    true,
                    editMode,
                    isTileCell);
            else
                imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                    "stream-div",
                    oQueue,
                    "stream-queue textEllipsis",
                    "textEllipsis",
                    true,
                    editMode,
                    isTileCell);
            imageHTML.setAttribute("objecttypecode", otc);
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2) {
                Mscrm.FormEditorVariables.streamsIsQueueSelected = false;
                Mscrm.FormEditorVariables.selectedView = oQueue.savedQueryId
            }
        } else
            imageHTML = addDivElements(oStreamObject.getAttribute("id"),
                "tile-div",
                oQueue,
                "tile-queue textEllipsis",
                "textEllipsis",
                true,
                editMode,
                isTileCell)
    }
    return imageHTML
}

function addDivElements(id, outerDivClass, oQueue, cssClassTop, cssClassBottom, isView, editMode, isTileCell) {
    var imageHTML = null;
    if (editMode === true) {
        imageHTML = document.getElementById(id);
        removeChildNodes(imageHTML)
    } else {
        imageHTML = document.createElement("div");
        if (!isTileCell) {
            AssignEventHandles(imageHTML, "dblclick", editStream);
            AssignEventHandles(imageHTML, "mousedown", setActiveStream);
            AssignEventHandles(imageHTML, "click", stopEventPropagationForStream)
        }
    }
    imageHTML.setAttribute("class", outerDivClass);
    imageHTML.setAttribute("id", id);
    if (!isView) {
        var queueDivElement = createDivElement(oQueue.queueName, cssClassTop),
            queueItemDivElement = createDivElement(oQueue.queueItemViewName, cssClassBottom),
            queueEntityDivElement = createDivElement(oQueue.queueEntity, cssClassBottom);
        imageHTML.appendChild(queueDivElement);
        imageHTML.appendChild(queueItemDivElement);
        imageHTML.appendChild(queueEntityDivElement)
    } else {
        var entityDivElement = createDivElement(oQueue.entityName, cssClassTop),
            entityViewDivElement = createDivElement(oQueue.entityViewName, cssClassBottom);
        imageHTML.appendChild(entityDivElement);
        imageHTML.appendChild(entityViewDivElement)
    }
    return imageHTML
}

function AssignEventHandles(element, event, handler) {
    if (element.addEventListener)
        element.addEventListener(event, handler, false);
    else
        element.attachEvent &&
            element.attachEvent("on" + event, handler)
}

function editStream(event) {
    var id = this.getAttribute("id"),
        otc = this.getAttribute("objecttypecode");
    EditSelectedStream(id, otc);
    stopEventPropagationForStream(event)
}

function setActiveStream(event) {
    !IsNull(Mscrm.FormEditorVariables.selectedStreamDiv) &&
        $(Mscrm.FormEditorVariables.selectedStreamDiv).removeClass("stream-selected");
    Mscrm.FormEditorVariables.selectedStreamDiv = this;
    $(this).addClass("stream-selected");
    Mscrm.FormEditorVariables.setActiveStreamCalled = true;
    refreshRibbon()
}

function stopEventPropagationForStream(event) {
    event = event || window.event;
    if (event.stopPropagation)
        event.stopPropagation();
    else
        event.cancelBubble = true
}

function createDivElement(name, cssClass) {
    var element = document.createElement("div");
    cssClass != "" &&
        element.setAttribute("class", cssClass);
    element.setAttribute("title", name);
    element.innerHTML = CrmEncodeDecode.CrmHtmlEncode(name);
    return element
}

function AddStreamObjectsNode(sTabName, sSectionName, oQueue, oFormCell, oAnchor) {
    oQueue.TabName = sTabName;
    oQueue.SectionName = sSectionName;
    oQueue.ShowLabel = false;
    oQueue.ColSpan = parseInt(oFormCell.getAttribute("colspan"), 10);
    oQueue.Visible = true;
    oQueue.Labels = [];
    oFormCell.removeAttribute("ispreviewcell");
    var oRows = Mscrm.DragDropUtils.getRowsNode(oQueue.SectionName, null);
    Mscrm.DragDropUtils.removeSystemSpacerRows(oRows);
    var oControlTag = XUI.Xml.SelectSingleNode(oFormCell, "control", null);
    oControlTag.setAttribute("id", oQueue.Id);
    oControlTag.setAttribute("classid", _ControlClassIds.queuecontainer);
    var oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
    oControlTag.appendChild(oParameters);
    var oStreamObjects = Mscrm.FormEditorVariables.formXml.createElement("StreamObjects");
    oParameters.appendChild(oStreamObjects);
    var oShowAsTiles = Mscrm.FormEditorVariables.formXml.createElement("ShowAsTiles");
    XUI.Xml.SetText(oShowAsTiles, oFormCell.getAttribute("istilecell") == "true" ? "true" : "false");
    oStreamObjects.appendChild(oShowAsTiles);
    var imageHTML = AddStreamObjectNode(oQueue,
        oStreamObjects,
        oFormCell.getAttribute("istilecell") == "true" ? true : false,
        false);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
        oQueue.Id +
        "']/labels/label",
        oQueue.Labels);
    var cellID = oAnchor.getAttribute("id"),
        cellElement = document.getElementById(cellID),
        parentElement = cellElement.querySelector("a").parentNode;
    parentElement.innerHTML = "";
    var tileQueue = "tiles";
    if (oFormCell.getAttribute("istilecell") != "true")
        tileQueue = "queues";
    var newAnchor = getAnchorElement(tileQueue);
    newAnchor.innerHTML = "";
    newAnchor.appendChild(imageHTML);
    parentElement.appendChild(newAnchor)
}

function QueueAddedCallback(oQueue, sTabName, sSectionName, oActive, oFormCell, queueType) {
    AddStreamObjectsNode(sTabName, sSectionName, oQueue, oFormCell, streamsCell());
    ++Mscrm.FormEditorVariables.streamsCount;
    if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR1) {
        var streamCellID = streamsCell().getAttribute("id");
        if (!IsNull(streamCellID)) {
            var streamCellElement = document.getElementById(streamCellID),
                parentElement = streamCellElement.querySelector("td");
            parentElement.setAttribute("class", "previewField alignStreamsTop")
        }
    }
}

function TileAddedCallback(oQueue, sTabName, sSectionName, oActive, oFormCell, queueType) {
    removeFormXml("tiles", oActive.getAttribute("id"));
    var oFormCell = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
        "//entity/form/tabs/tab[@name = 'StreamsContainer']/columns/column/sections/section[@name = 'Tiles']/rows/row/cell[@id = '" + oActive.getAttribute("id") + "']",
        null);
    AddStreamObjectsNode(sTabName, sSectionName, oQueue, oFormCell, oActive)
}

function AddDelve(oActive, useComponentGallery) {
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        return false;
    if (!CanAddFields(oActive))
        return;
    var oFormCell = Mscrm.DragDropUtils.getCellNode(oActive.getAttribute("name"));
    if (Mscrm.PreviewCellUtils.isPreviewCell(oFormCell)) {
        UpdateDelve(oActive, false);
        return
    }
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        rowsPerPage = Mscrm.FormXMlConstants.get_rowsPerPage();
    if (Mscrm.FormEditorVariables.FormType == "quick")
        rowsPerPage = 5;
    var secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    var gridMode = "Grid",
        gridUIMode = "Card",
        labels = new Array(new LocalizedObj(Xrm.Internal.getResourceString("LOCID_DELVE_TITLE"), _langCode)),
        subGridId = String.format("Component{0}", Math.floor(Math.random() * 1e7)),
        oSubGrid = new SubGridObj(subGridId,
            "",
            Mscrm.FormEditorVariables.officeGraphDocument,
            rowSpan,
            rowsPerPage,
            secCols,
            false,
            true,
            Mscrm.FormEditorVariables.delveViewId,
            false,
            "",
            false,
            false,
            gridMode,
            "",
            false,
            labels,
            "",
            false,
            false,
            true,
            gridUIMode);
    OpenComponentGallery(oSubGrid, sTabName, sSectionName, secCols)
}

function UpdateDelve(oActive, bEditComponent) {
    var sSubGridName = oActive.getAttribute("name"),
        oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!CanUpdateField(oFormCell))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null);
    Mscrm.PreviewCellUtils.isPreviewCell(oFormCell) &&
        Mscrm.PreviewCellUtils.createDefaultParams(oControl, Mscrm.DragDropUtils.DELVE, false);
    var oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null),
        oArgs = {},
        relOrdinal = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null) != null)
        relOrdinal = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null));
    var recPerPage = _subGridDefaults.iRecPerPage;
    if (XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null) != null)
        recPerPage = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null)), 10);
    else {
        var oRecPerPage = Mscrm.FormEditorVariables.formXml.createElement("RecordsPerPage");
        XUI.Xml.SetText(oRecPerPage, "4");
        Mscrm.FormEditorVariables.FormType == "quick" &&
            XUI.Xml.SetText(oRecPerPage, "5");
        oParameters.appendChild(oRecPerPage)
    }
    var enViewPicker = _subGridDefaults.bEnableViewPicker;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableViewPicker", null) != null)
        enViewPicker = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableViewPicker", null)) == "true";
    else {
        var oEnableViewPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableViewPicker");
        XUI.Xml.SetText(oEnableViewPicker, "false");
        oParameters.appendChild(oEnableViewPicker)
    }
    var viewId = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "ViewId", null) != null)
        viewId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ViewId", null));
    else {
        var oViewId = Mscrm.FormEditorVariables.formXml.createElement("ViewId");
        XUI.Xml.SetText(oViewId, viewId);
        oParameters.appendChild(oViewId)
    }
    var isUserView = "false";
    if (XUI.Xml.SelectSingleNode(oParameters, "IsUserView", null) != null)
        isUserView = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserView", null));
    else {
        var oIsUserView = Mscrm.FormEditorVariables.formXml.createElement("IsUserView");
        XUI.Xml.SetText(oIsUserView, isUserView);
        oParameters.appendChild(oIsUserView)
    }
    var viewIds = viewId;
    if (XUI.Xml.SelectSingleNode(oParameters, "ViewIds", null) != null)
        viewIds = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ViewIds", null));
    else {
        var oViewIds = Mscrm.FormEditorVariables.formXml.createElement("ViewIds");
        XUI.Xml.SetText(oViewIds, viewIds);
        oParameters.appendChild(oViewIds)
    }
    var enQuickFind = _subGridDefaults.bEnableQuickFind;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableQuickFind", null) != null)
        enQuickFind = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableQuickFind", null)) == "true";
    else {
        var oEnQuickFind = Mscrm.FormEditorVariables.formXml.createElement("EnableQuickFind");
        XUI.Xml.SetText(oEnQuickFind, "false");
        oParameters.appendChild(oEnQuickFind)
    }
    var enJumpBar = _subGridDefaults.bEnableJumpBar;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableJumpBar", null) != null)
        enJumpBar = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableJumpBar", null)) == "true";
    else {
        var oEnJumpBar = Mscrm.FormEditorVariables.formXml.createElement("EnableJumpBar");
        XUI.Xml.SetText(oEnJumpBar, "false");
        oParameters.appendChild(oEnJumpBar)
    }
    if (XUI.Xml.SelectSingleNode(oParameters, "AutoExpand", null) === null) {
        var oAutoExpand = Mscrm.FormEditorVariables.formXml.createElement("AutoExpand");
        oParameters.appendChild(oAutoExpand)
    }
    var chartGridMode = _subGridDefaults.bChartGridMode;
    if (XUI.Xml.SelectSingleNode(oParameters, "ChartGridMode", null) != null)
        chartGridMode = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ChartGridMode", null));
    else {
        var oChartGridMode = Mscrm.FormEditorVariables.formXml.createElement("ChartGridMode");
        XUI.Xml.SetText(oChartGridMode, chartGridMode);
        oParameters.appendChild(oChartGridMode)
    }
    if (XUI.Xml.SelectSingleNode(oParameters, "GridUIMode", null) != null)
        gridUIMode = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "GridUIMode", null));
    else {
        var oGridUIMode = Mscrm.FormEditorVariables.formXml.createElement("GridUIMode");
        XUI.Xml.SetText(oGridUIMode, gridUIMode);
        oParameters.appendChild(oGridUIMode)
    }
    var visualizationId = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null) != null)
        visualizationId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null));
    else {
        var oVisualizationId = Mscrm.FormEditorVariables.formXml.createElement("VisualizationId");
        XUI.Xml.SetText(oVisualizationId, visualizationId);
        oParameters.appendChild(oVisualizationId)
    }
    var isUserChart = "false";
    if (XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null) != null)
        isUserChart = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null));
    else {
        var oIsUserChart = Mscrm.FormEditorVariables.formXml.createElement("IsUserChart");
        XUI.Xml.SetText(oIsUserChart, isUserChart);
        oParameters.appendChild(oIsUserChart)
    }
    var enChartPicker = _subGridDefaults.bEnableChartPicker;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableChartPicker", null) != null)
        enChartPicker = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableChartPicker", null)) == "true";
    else {
        var oEnableChartPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableChartPicker");
        XUI.Xml.SetText(oEnableChartPicker, "true");
        oParameters.appendChild(oEnableChartPicker)
    }
    var relationshipName = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null) == null) {
        var oRelationshipName = Mscrm.FormEditorVariables.formXml.createElement("RelationshipName");
        XUI.Xml.SetText(oRelationshipName, relationshipName);
        oParameters.appendChild(oRelationshipName)
    }
    var oSubGrid = new SubGridObj(oControl.getAttribute("id"),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null)),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "TargetEntityType", null)),
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            recPerPage,
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            oFormCell.getAttribute("showlabel") == "true",
            viewId,
            enViewPicker,
            viewIds,
            enQuickFind,
            enJumpBar,
            chartGridMode,
            visualizationId,
            enChartPicker,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            relOrdinal,
            isUserView,
            isUserChart,
            oFormCell.getAttribute("availableforphone") !== "false",
            gridUIMode),
        labels = new Array(new LocalizedObj(Xrm.Internal.getResourceString("LOCID_DELVE_TITLE"), _langCode));
    if (!bEditComponent) {
        var oUpdatedGrid = new SubGridObj(oControl.getAttribute("id"),
            relationshipName,
            Mscrm.FormEditorVariables.officeGraphDocument,
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            recPerPage,
            parseInt(oFormCell.getAttribute("colspan"), 10),
            false,
            true,
            Mscrm.FormEditorVariables.delveViewId,
            false,
            viewIds,
            false,
            false,
            chartGridMode,
            visualizationId,
            false,
            labels,
            relOrdinal,
            isUserView,
            isUserChart,
            oFormCell.getAttribute("availableforphone") !== "false",
            gridUIMode);
        UpdateComponentGallery(oUpdatedGrid, oSubGrid, sTabName, sSectionName, oActive, oControl, oFormCell, recPerPage)
    } else {
        oArgs.Field = oSubGrid;
        oArgs.FieldsXml = oFieldsXml;
        oArgs.FieldPropertiesXml = oPropertiesXml;
        oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
        oArgs.ObjectTypeCode = _objectTypeCode;
        oArgs.AllEntityData = Mscrm.FieldPropertiesUtils.getAllEntityData();
        if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor)
            oArgs.RelEntitiesData = Mscrm.FieldPropertiesUtils.getRelatedEntitiesData(_objectTypeCode);
        oArgs.sTabName = sTabName;
        oArgs.sSectionName = sSectionName;
        oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
        var oSection = GetSectionNode(sSectionName),
            secCols = 2,
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length;
        oArgs.SecCols = secCols;
        if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null)).length != 0)
            oArgs.RelationShipExists = true;
        else
            oArgs.RelationShipExists = false;
        oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
        oArgs.LangCode = _langCode;
        var uri,
            height,
            width;
        uri = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/Delve.aspx?title=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_SUBGRIDPROPS) +
            "&description=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYSUBGRIDPROPS) +
            "&editorType=" +
            CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType));
        height = _subGridDefaults.iDialogHeight, width = _subGridDefaults.iDialogWidth;
        var parameters = [oSubGrid, sTabName, sSectionName, oActive, oControl, oFormCell, recPerPage];
        createInlineDlg(uri, oArgs, height, width, UpdateComponentGallery, parameters, null)
    }
}

function AddIFrame(oActive, type, useComponentGallery) {
    if (!CanAddFields(oActive))
        return;
    var oFormCell = Mscrm.DragDropUtils.getCellNode(oActive.getAttribute("name"));
    if (Mscrm.PreviewCellUtils.isPreviewCell(oFormCell)) {
        oActive.className = type;
        UpdateIFrame(oActive, useComponentGallery, "add");
        return
    }
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.SecCols = secCols;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.LangCode = _langCode;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.ObjectTypeCode = _objectTypeCode;
    var oControl = null;
    switch (type) {
    case "iframe":
        oArgs.Field = new IframeObj("",
            "",
            false,
            rowSpan,
            secCols,
            false,
            true,
            sTabName,
            sSectionName,
            null,
            false,
            null,
            null,
            true,
            Mscrm.FormEditorVariables.formXml,
            true,
            false);
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/iframe.aspx?mode=add&datatype=iframe&scrolling=auto&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        return;
    case "webresource":
        oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
        oArgs.Field = new WebResourceObj("",
            "",
            false,
            rowSpan,
            secCols,
            false,
            false,
            sTabName,
            sSectionName,
            null,
            false,
            null,
            null,
            true,
            null,
            null,
            null,
            null,
            "",
            "",
            "",
            "",
            true,
            false);
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/webresource.aspx?mode=add&datatype=iframe&scrolling=auto&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _lookupDialogParentDefaults.iDialogHeight,
            _lookupDialogParentDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        return;
    case "powerbitile":
        oArgs.Field = new PowerBITileObj("Component" + createGuid().substr(1, 8),
            rowSpan,
            secCols,
            false,
            sTabName,
            sSectionName,
            "",
            true,
            Mscrm.FormEditorVariables.formXml,
            "",
            "",
            "",
            0,
            true,
            true);
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/powerbitile.aspx?mode=add&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight + 32,
            _subGridDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        return;
    case "bingmap":
        oArgs.Field = new BingMapObj(Mscrm.DragDropUtils.BingMapsControlId,
            "",
            8,
            secCols,
            false,
            sTabName,
            sSectionName,
            null,
            false,
            Mscrm.FormEditorVariables.formXml,
            true);
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/bingmap.aspx?mode=add&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        return;
    case "timercontrol":
        oArgs.Field = new TimerControlObj("",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            2,
            secCols,
            sTabName,
            sSectionName,
            null,
            false,
            Mscrm.FormEditorVariables.formXml,
            true);
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/dlg_TimerControl.aspx?mode=add&datatype=iframe&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType) +
                "&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode)),
            oArgs,
            _timerControlDefaults.iDialogHeight,
            _timerControlDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        return;
    case "searchwidget":
        oArgs.Field = new SearchWidgetObj("",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            0,
            secCols,
            sTabName,
            sSectionName,
            null,
            false,
            Mscrm.FormEditorVariables.formXml,
            true,
            "",
            isReferencePanelType(oActive),
            null,
            false,
            "");
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/dlg_KMControl.aspx?mode=add&datatype=iframe&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType) +
                "&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode) +
                "&icon="),
            oArgs,
            _kmControlDefaults.iDialogHeight,
            _kmControlDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        break;
    case "socialInsight":
        oArgs.Field = new SocialInsightObj("",
            null,
            false,
            rowSpan,
            secCols,
            true,
            sTabName,
            sSectionName,
            null,
            true,
            null,
            "auto",
            true,
            Mscrm.FormEditorVariables.formXml,
            true);
        if (Mscrm.FormEditorVariables.editorType !== Mscrm.EditorType.dashboardEditor) {
            oArgs.Field.Id = "Component" + createGuid().substr(1, 8);
            createInlineDlg(Mscrm.CrmUri
                .create("/Tools/FormEditor/Dialogs/SocialInsight.aspx?mode=add&datatype=iframe&scrolling=auto&editorType=" + CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
                oArgs,
                _subGridDefaults.iDialogHeight,
                _subGridDefaults.iDialogWidth,
                BindFormDataOnCallback,
                [type, sTabName, sSectionName, oArgs.SecCols],
                null);
            return
        } else {
            ShowSocialInsightsConfigWizardOnDashboard("add",
                "add",
                oArgs,
                "Component" + createGuid().substr(1, 8),
                null);
            oControl = oArgs.Field;
            return
        }
    case "orgInsights":
        oArgs.Field = new IframeObj("",
            "",
            false,
            rowSpan,
            secCols,
            false,
            true,
            sTabName,
            sSectionName,
            null,
            false,
            null,
            null,
            true,
            Mscrm.FormEditorVariables.formXml,
            true,
            false);
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/iframe.aspx?mode=add&datatype=iframe&scrolling=auto&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        break;
    case "aci":
        oArgs.Field = new ACIWidgetObj("",
            "",
            false,
            rowSpan,
            secCols,
            false,
            true,
            sTabName,
            sSectionName,
            null,
            false,
            null,
            null,
            true,
            Mscrm.FormEditorVariables.formXml,
            true,
            false);
        createInlineDlg(Mscrm.CrmUri
            .create("/Tools/FormEditor/Dialogs/ACIWidget.aspx?mode=add&datatype=iframe&scrolling=auto&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            BindFormDataOnCallback,
            [type, sTabName, sSectionName, oArgs.SecCols],
            null);
        break
    }
}

function createInlineDlg(crmUri, dialogArgs, height, width, callBackFunction, callBackParameters, initialFunction) {
    var dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = height;
    dialogOptions.width = width;
    var callbkFunction = Mscrm.Utilities.createCallbackFunctionForXrmDialog(callBackFunction, callBackParameters);
    Xrm.Internal.openDialog(crmUri.toString(), dialogOptions, dialogArgs, initialFunction, callbkFunction)
}

function BindFormDataOnCallback(oControl, type, sTabName, sSectionName, secCols) {
    if (oControl) {
        if (type == "iframe") {
            if (!IsNull(oControl.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oControl.FormXml) !=
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oControl.FormXml
        } else if (type == "socialInsight" || type == "powerbitile") {
            oControl.Url = null;
            oControl.Secure = null;
            if (!IsNull(oControl.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oControl.FormXml) !=
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oControl.FormXml
        } else if (type == "orgInsights") {
            if (!IsNull(oControl.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oControl.FormXml) !=
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oControl.FormXml
        } else if (type == "timercontrol" || type == "searchwidget") {
            if (!IsNull(oControl.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oControl.FormXml) !=
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oControl.FormXml
        } else if (type == "aci")
            if (!IsNull(oControl.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oControl.FormXml) !=
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oControl.FormXml;
        if (secCols < oControl.ColSpan) {
            alert(Mscrm.FormEditorVariables.addColumnsMessage);
            return
        }
        oControl.TabName = sTabName;
        oControl.SectionName = sSectionName;
        var rowsNode = Mscrm.DragDropUtils.getRowsNode(oControl.SectionName, null);
        Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
        RefreshCellHtml(oControl.TabName, oControl.SectionName, AddControlFormXml(oControl, type));
        type == "bingmap" &&
            refreshRibbon()
    }
}

function ShowSocialInsightsConfigWizardOnDashboard(socialInsightMode, formMode, oArgs, label, oActive) {
    if (!_IsSocialInsightsInstanceAvailable)
        return;
    var oSocialInsightObj = oArgs.Field;
    oArgs.FormID = Mscrm.FormEditorVariables.formId;
    oArgs.FormType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.mode = socialInsightMode;
    oArgs.launchedFromRuntimeControl = false;
    var crmDialog = new Mscrm.CrmDialog(Mscrm.CrmUri
            .create("/WebWizard/WizardContainer.aspx?WizardId=2F705211-E38E-4CF8-A0E3-980FC83025C6"),
            oArgs,
            _socialInsightDefaults.iDialogWidth,
            _socialInsightDefaults.iDialogHeight,
            null),
        returnFunctionReference = new Mscrm.ReturnFunctionReference;
    returnFunctionReference.content = oSocialInsightObj;
    if (socialInsightMode == "add") {
        oSocialInsightObj.LangCode = _langCode;
        oSocialInsightObj.Labels = [new LocalizedObj(null, _langCode)];
        oSocialInsightObj.Id = label;
        oSocialInsightObj.ShowLabel = false
    }
    if (formMode == "add") {
        returnFunctionReference.parameters = [
            oSocialInsightObj, oSocialInsightObj.TabName, oSocialInsightObj.SectionName
        ];
        returnFunctionReference.callback = function(oSocialInsightObj, sTabName, sSectionName) {
            if (!IsNull(oSocialInsightObj.FormXml) &&
                XUI.Xml.XMLSerializer.serializeToString(oSocialInsightObj.FormXml) !==
                XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml))
                Mscrm.FormEditorVariables.formXml = oSocialInsightObj.FormXml;
            var rowsNode = Mscrm.DragDropUtils.getRowsNode(oSocialInsightObj.SectionName, null),
                socialInsightControlCellId = AddControlFormXml(oSocialInsightObj, "socialInsight");
            Mscrm.DragDropUtils.removeSystemSpacerRows(rowsNode);
            RefreshCellHtml(oSocialInsightObj.TabName, oSocialInsightObj.SectionName, socialInsightControlCellId)
        }
    } else if (formMode == "edit") {
        if (oArgs.FormID === "00000000-0000-0000-0000-000000000000" &&
            !IsNull(Mscrm.FormEditorVariables.socialInsightsConfigurations[oArgs.Field.Id]))
            oArgs.socialInsightsConfiguration = Mscrm.FormEditorVariables.socialInsightsConfigurations[oArgs.Field.Id];
        returnFunctionReference.parameters = [
            oSocialInsightObj.TabName, oSocialInsightObj.SectionName, socialInsightMode, oActive, oSocialInsightObj
        ];
        returnFunctionReference.callback = UpdateFormXml
    }
    crmDialog.setCallbackReference(returnFunctionReference);
    crmDialog.showInlineDialog()
}

function AddSubGridFormXml(oSubGrid) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oSubGrid.SectionName, null),
        oCell = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        cellId = createGuid();
    oCell.setAttribute("id", cellId);
    oCell.setAttribute("showlabel", oSubGrid.ShowLabel.toString());
    oCell.setAttribute("colspan", oSubGrid.ColSpan.toString());
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    var oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    oControl.setAttribute("id", oSubGrid.Id);
    if (oSubGrid.IsReferencePanelSubGrid)
        oControl.setAttribute("classid", _ControlClassIds.referencepanelsubgrid);
    else {
        oControl.setAttribute("classid", _ControlClassIds.subgrid);
        oControl.setAttribute("indicationOfSubgrid", "true")
    }
    oCell.setAttribute("auto", oSubGrid.Auto.toString());
    oSubGrid.Auto &&
        ModifyOtherAutoExpandingFieldIfRequired(oCell);
    var oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
    oControl.appendChild(oParameters);
    var oViewId = Mscrm.FormEditorVariables.formXml.createElement("ViewId");
    XUI.Xml.SetText(oViewId, oSubGrid.DefaultView);
    oParameters.appendChild(oViewId);
    var oIsUserView = Mscrm.FormEditorVariables.formXml.createElement("IsUserView");
    XUI.Xml.SetText(oIsUserView, oSubGrid.IsUserView.toString());
    oParameters.appendChild(oIsUserView);
    var oRelationshipName = Mscrm.FormEditorVariables.formXml.createElement("RelationshipName");
    XUI.Xml.SetText(oRelationshipName, oSubGrid.RelationshipName);
    oParameters.appendChild(oRelationshipName);
    var oTargetEntityType = Mscrm.FormEditorVariables.formXml.createElement("TargetEntityType");
    XUI.Xml.SetText(oTargetEntityType, oSubGrid.TargetEntity);
    oParameters.appendChild(oTargetEntityType);
    var oAutoExpand = Mscrm.FormEditorVariables.formXml.createElement("AutoExpand"),
        autoText = "Auto";
    if (oSubGrid.Auto.toString() != "true")
        autoText = "Fixed";
    XUI.Xml.SetText(oAutoExpand, autoText);
    oParameters.appendChild(oAutoExpand);
    var oEnableQuickFind = Mscrm.FormEditorVariables.formXml.createElement("EnableQuickFind");
    XUI.Xml.SetText(oEnableQuickFind, oSubGrid.EnableSearchBox.toString());
    oParameters.appendChild(oEnableQuickFind);
    var oEnableViewPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableViewPicker");
    XUI.Xml.SetText(oEnableViewPicker, oSubGrid.EnableViewPicker.toString());
    oParameters.appendChild(oEnableViewPicker);
    var oViewIds = Mscrm.FormEditorVariables.formXml.createElement("ViewIds");
    XUI.Xml.SetText(oViewIds, oSubGrid.Views);
    oParameters.appendChild(oViewIds);
    var oJumpBar = Mscrm.FormEditorVariables.formXml.createElement("EnableJumpBar");
    XUI.Xml.SetText(oJumpBar, oSubGrid.EnableIndex.toString());
    oParameters.appendChild(oJumpBar);
    var oChartGridMode = Mscrm.FormEditorVariables.formXml.createElement("ChartGridMode");
    XUI.Xml.SetText(oChartGridMode, oSubGrid.ChartGridMode.toString());
    oParameters.appendChild(oChartGridMode);
    if (!IsNull(oSubGrid.GridUIMode)) {
        var oGridUIMode = Mscrm.FormEditorVariables.formXml.createElement("GridUIMode");
        XUI.Xml.SetText(oGridUIMode, oSubGrid.GridUIMode.toString());
        oParameters.appendChild(oGridUIMode)
    }
    var oVisualizationId = Mscrm.FormEditorVariables.formXml.createElement("VisualizationId");
    XUI.Xml.SetText(oVisualizationId, oSubGrid.VisualizationId.toString());
    oParameters.appendChild(oVisualizationId);
    var oIsUserChart = Mscrm.FormEditorVariables.formXml.createElement("IsUserChart");
    XUI.Xml.SetText(oIsUserChart, oSubGrid.IsUserChart.toString());
    oParameters.appendChild(oIsUserChart);
    var oEnableChartPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableChartPicker");
    XUI.Xml.SetText(oEnableChartPicker, oSubGrid.EnableChartPicker.toString());
    oParameters.appendChild(oEnableChartPicker);
    var oRecsPerPage = Mscrm.FormEditorVariables.formXml.createElement("RecordsPerPage");
    XUI.Xml.SetText(oRecsPerPage, oSubGrid.RowsPerPage.toString());
    oParameters.appendChild(oRecsPerPage);
    if (!IsNull(oSubGrid.TeamTemplateId)) {
        var oTemplateId = Mscrm.FormEditorVariables.formXml.createElement("TeamTemplateId");
        XUI.Xml.SetText(oTemplateId, oSubGrid.TeamTemplateId.toString());
        oParameters.appendChild(oTemplateId)
    }
    if (oSubGrid.AssociationRoleOrdinal.length > 0) {
        var oRelationshipRoleOrdinal = Mscrm.FormEditorVariables.formXml.createElement("RelationshipRoleOrdinal");
        XUI.Xml.SetText(oRelationshipRoleOrdinal, oSubGrid.AssociationRoleOrdinal);
        oParameters.appendChild(oRelationshipRoleOrdinal)
    }
    if (oSubGrid.IsReferencePanelSubGrid) {
        var oReferencePanelSubGridIconUrl = Mscrm.FormEditorVariables.formXml
            .createElement("ReferencePanelSubgridIconUrl");
        XUI.Xml.SetText(oReferencePanelSubGridIconUrl, oSubGrid.IconUrl);
        oParameters.appendChild(oReferencePanelSubGridIconUrl)
    }
    AddCellToFormXml(oRows, oCell, oSubGrid.RowSpan, false, oSubGrid.Auto);
    AddSubgridCustomControlSnippet(oParameters, oSubGrid.CustomControlSnippet, oSubGrid.CustomControlUniqueId);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
        oSubGrid.Id +
        "']/labels/label",
        oSubGrid.Labels);
    return cellId
}

function AddOrgInsightsFormXml(oOrgInsights) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oOrgInsights.SectionName, null),
        oCell = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        cellId = createGuid();
    oCell.setAttribute("id", cellId);
    oCell.setAttribute("showlabel", oOrgInsights.ShowLabel.toString());
    oCell.setAttribute("colspan", oOrgInsights.ColSpan.toString());
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    var oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    oControl.setAttribute("id", oOrgInsights.Id);
    oControl.setAttribute("classid", _ControlClassIds.orgInsights);
    oCell.setAttribute("auto", oOrgInsights.Auto.toString());
    oOrgInsights.Auto &&
        ModifyOtherAutoExpandingFieldIfRequired(oCell);
    var oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
    oControl.appendChild(oParameters);
    var oVisualizationId = Mscrm.FormEditorVariables.formXml.createElement("VisualizationId");
    XUI.Xml.SetText(oVisualizationId, oOrgInsights.OrgInsightsConfigurarationId.toString());
    oParameters.appendChild(oVisualizationId);
    var oIsUserChart = Mscrm.FormEditorVariables.formXml.createElement("IsUserChart");
    XUI.Xml.SetText(oIsUserChart, oOrgInsights.oIsUserChart.toString());
    oParameters.appendChild(oIsUserChart);
    AddCellToFormXml(oRows, oCell, oOrgInsights.RowSpan, false, oOrgInsights.Auto);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
        oOrgInsights.Id +
        "']/labels/label",
        oOrgInsights.Labels);
    return cellId
}

function AddQuickFormCollectionXml(oQuickForm) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oQuickForm.SectionName, null),
        oCell = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        cellId = createGuid();
    oCell.setAttribute("id", cellId);
    oCell.setAttribute("showlabel", oQuickForm.ShowLabel.toString());
    oCell.setAttribute("colspan", "1");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    var oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    oControl.setAttribute("id", oQuickForm.Id);
    if (oQuickForm.IsReferencePanelQuickFormCollection)
        oControl.setAttribute("classid", _ControlClassIds.referencepanelquickformcollection);
    else
        oControl.setAttribute("classid", _ControlClassIds.quickformcollection);
    oControl.setAttribute("datafieldname", oQuickForm.DataFieldName);
    oControl.setAttribute("disabled", "false");
    oCell.setAttribute("auto", oQuickForm.Auto.toString());
    oQuickForm.Auto &&
        ModifyOtherAutoExpandingFieldIfRequired(oCell);
    var oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
    oControl.appendChild(oParameters);
    var oQuickForms = Mscrm.FormEditorVariables.formXml.createElement("QuickForms");
    oParameters.appendChild(oQuickForms);
    var i,
        len;
    len = oQuickForm.QuickFormCollectionInfo.length;
    var nodeText = "<QuickFormIds>";
    for (i = 0; i < len; i++)
        nodeText += '<QuickFormId entityname="' +
            oQuickForm.QuickFormCollectionInfo[i].entity +
            '">' +
            oQuickForm.QuickFormCollectionInfo[i].formId +
            "</QuickFormId>";
    nodeText += "</QuickFormIds>";
    XUI.Xml.SetText(oQuickForms, nodeText);
    var oControlMode = Mscrm.FormEditorVariables.formXml.createElement("ControlMode");
    XUI.Xml.SetText(oControlMode, "Edit");
    oParameters.appendChild(oControlMode);
    if (oQuickForm.IsReferencePanelQuickFormCollection) {
        var oReferencePanelQuickFormIconUrl = Mscrm.FormEditorVariables.formXml
            .createElement("ReferencePanelQuickFormCollectionIconUrl");
        XUI.Xml.SetText(oReferencePanelQuickFormIconUrl, oQuickForm.IconUrl);
        oParameters.appendChild(oReferencePanelQuickFormIconUrl)
    }
    if (Mscrm.FormEditorVariables.FormType == "mainInteractionCentric") {
        var oDisplayAsCustomer360Tile = Mscrm.FormEditorVariables.formXml.createElement("DisplayAsCustomer360Tile");
        XUI.Xml.SetText(oDisplayAsCustomer360Tile, oQuickForm.DisplayAsCustomer360Tile);
        oParameters.appendChild(oDisplayAsCustomer360Tile)
    }
    AddCellToFormXml(oRows, oCell, 0, false, oQuickForm.Auto);
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[control/@id = '" +
        oQuickForm.Id +
        "']/labels/label",
        oQuickForm.Labels);
    return cellId
}

function AddControlFormXml(oFormControl, type) {
    var oRows = Mscrm.DragDropUtils.getRowsNode(oFormControl.SectionName, null),
        oCell = Mscrm.FormEditorVariables.formXml.createElement("cell"),
        cellId = createGuid();
    oCell.setAttribute("id", cellId);
    oCell.setAttribute("showlabel", oFormControl.ShowLabel.toString());
    oCell.setAttribute("colspan", oFormControl.ColSpan.toString());
    oFormControl.Visible != null &&
        setAttributeIfNotDefaultValue(oCell, "visible", oFormControl.Visible.toString(), "true");
    oFormControl.AvailableForPhone != null &&
        setAttributeIfNotDefaultValue(oCell, "availableforphone", oFormControl.AvailableForPhone.toString(), "true");
    oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
    var oControl = Mscrm.FormEditorVariables.formXml.createElement("control");
    oCell.appendChild(oControl);
    oControl.setAttribute("id", oFormControl.Id);
    switch (type) {
    case "iframe":
        oControl.setAttribute("classid", _ControlClassIds.iframe);
        break;
    case "powerbitile":
        oControl.setAttribute("classid", _ControlClassIds.powerBITile);
        break;
    case "aci":
        oControl.setAttribute("classid", _ControlClassIds.aci);
        break;
    case "webresource":
        var wrClassId;
        switch (oFormControl.TypeCode) {
        case 1:
            wrClassId = _ControlClassIds.webResourceHtml;
            break;
        case 5:
        case 6:
        case 7:
        case 10:
            wrClassId = _ControlClassIds.webResourceImage;
            break;
        case 8:
            wrClassId = _ControlClassIds.webResourceSilverlight;
            break
        }
        oControl.setAttribute("classid", wrClassId);
        break;
    case "bingmap":
        oControl.setAttribute("classid", _ControlClassIds.bingmap);
        break;
    case "socialInsight":
        oControl.setAttribute("classid", _ControlClassIds.socialInsight);
        break;
    case "timercontrol":
        oControl.setAttribute("classid", _ControlClassIds.timercontrol);
        oFormControl.Auto = false;
        break;
    case "searchwidget":
        if (oFormControl.IsReferencePanelSearchWidget)
            oControl.setAttribute("classid", _ControlClassIds.referencepanelsearchwidget);
        else
            oControl.setAttribute("classid", _ControlClassIds.searchwidget);
        oFormControl.Auto = false;
        break;
    case "orgInsights":
        oControl.setAttribute("classid", _ControlClassIds.orgInsights);
        break
    }
    if (Mscrm.FormEditorVariables.fieldExpIsFor === "section") {
        oCell.setAttribute("auto", oFormControl.Auto.toString());
        oFormControl.Auto &&
            ModifyOtherAutoExpandingFieldIfRequired(oCell)
    }
    var oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
    oControl.appendChild(oParameters);
    if (oFormControl.Url != null) {
        var oUrl = Mscrm.FormEditorVariables.formXml.createElement("Url");
        oParameters.appendChild(oUrl);
        XUI.Xml.SetText(oUrl, oFormControl.Url)
    }
    if (oFormControl.PassParams != null) {
        var oPassParams = Mscrm.FormEditorVariables.formXml.createElement("PassParameters");
        oParameters.appendChild(oPassParams);
        XUI.Xml.SetText(oPassParams, oFormControl.PassParams.toString())
    }
    if (oFormControl.Secure != null) {
        var oRestricted = Mscrm.FormEditorVariables.formXml.createElement("Security");
        oParameters.appendChild(oRestricted);
        XUI.Xml.SetText(oRestricted, oFormControl.Secure.toString())
    }
    if (oFormControl.Scrolling != null) {
        var oScrolling = Mscrm.FormEditorVariables.formXml.createElement("Scrolling");
        oParameters.appendChild(oScrolling);
        XUI.Xml.SetText(oScrolling, oFormControl.Scrolling)
    }
    if (oFormControl.Border != null) {
        var oBorder = Mscrm.FormEditorVariables.formXml.createElement("Border");
        oParameters.appendChild(oBorder);
        XUI.Xml.SetText(oBorder, oFormControl.Border.toString())
    }
    if (oFormControl.ShowOnMobileClient != null) {
        var oShowOnMobileClient = Mscrm.FormEditorVariables.formXml.createElement("ShowOnMobileClient");
        oParameters.appendChild(oShowOnMobileClient);
        XUI.Xml.SetText(oShowOnMobileClient, oFormControl.ShowOnMobileClient.toString())
    }
    if (type === "powerbitile") {
        if (oFormControl.DashboardId != null) {
            var el = Mscrm.FormEditorVariables.formXml.createElement("PowerBIDashboardId");
            oParameters.appendChild(el);
            XUI.Xml.SetText(el, oFormControl.DashboardId)
        }
        if (oFormControl.TileId != null) {
            var el = Mscrm.FormEditorVariables.formXml.createElement("TileId");
            oParameters.appendChild(el);
            XUI.Xml.SetText(el, oFormControl.TileId)
        }
        if (oFormControl.TileUrl != null) {
            var el = Mscrm.FormEditorVariables.formXml.createElement("TileUrl");
            oParameters.appendChild(el);
            XUI.Xml.SetText(el, oFormControl.TileUrl)
        }
        if (oFormControl.Type != null) {
            var el = Mscrm.FormEditorVariables.formXml.createElement("Type");
            oParameters.appendChild(el);
            XUI.Xml.SetText(el, oFormControl.Type)
        }
        if (oFormControl.EnableInMobile != null) {
            var el = Mscrm.FormEditorVariables.formXml.createElement("EnableInMobile");
            oParameters.appendChild(el);
            XUI.Xml.SetText(el, oFormControl.EnableInMobile)
        }
    }
    if (type === "aci") {
        if (oFormControl.ViewName != null && oFormControl.ViewName.length > 0) {
            var oViewName = Mscrm.FormEditorVariables.formXml.createElement("ViewName");
            oParameters.appendChild(oViewName);
            XUI.Xml.SetText(oViewName, oFormControl.ViewName)
        }
        var oUrl = Mscrm.FormEditorVariables.formXml.createElement("Url");
        oParameters.appendChild(oUrl);
        XUI.Xml.SetText(oUrl, "https://dfdapps.projectuic-int.net/")
    }
    if (type == "webresource") {
        if (oFormControl.AltText != null && oFormControl.AltText.length > 0) {
            var oAltText = Mscrm.FormEditorVariables.formXml.createElement("AltText");
            oParameters.appendChild(oAltText);
            XUI.Xml.SetText(oAltText, oFormControl.AltText)
        }
        if (oFormControl.SizeType != null && oFormControl.SizeType.length > 0) {
            var oSizeType = Mscrm.FormEditorVariables.formXml.createElement("SizeType");
            oParameters.appendChild(oSizeType);
            XUI.Xml.SetText(oSizeType, oFormControl.SizeType)
        }
        if (oFormControl.Width != null && oFormControl.Width.length > 0) {
            var oWidth = Mscrm.FormEditorVariables.formXml.createElement("Width");
            oParameters.appendChild(oWidth);
            XUI.Xml.SetText(oWidth, oFormControl.Width)
        }
        if (oFormControl.Height != null && oFormControl.Height.length > 0) {
            var oHeight = Mscrm.FormEditorVariables.formXml.createElement("Height");
            oParameters.appendChild(oHeight);
            XUI.Xml.SetText(oHeight, oFormControl.Height)
        }
        if (oFormControl.ShowInROF != null && oFormControl.ShowInROF.toString().length > 0) {
            var oShowInROF = Mscrm.FormEditorVariables.formXml.createElement("ShowInROF");
            oParameters.appendChild(oShowInROF);
            XUI.Xml.SetText(oShowInROF, oFormControl.ShowInROF.toString())
        }
        if (oFormControl.CustomParameter != null && oFormControl.CustomParameter.length > 0) {
            var oCustomParameter = Mscrm.FormEditorVariables.formXml.createElement("Data");
            oParameters.appendChild(oCustomParameter);
            XUI.Xml.SetText(oCustomParameter, oFormControl.CustomParameter)
        }
        if (oFormControl.HorizontalAlignment != null && oFormControl.HorizontalAlignment.length > 0) {
            var oHorizontalAlignment = Mscrm.FormEditorVariables.formXml.createElement("HorizontalAlignment");
            oParameters.appendChild(oHorizontalAlignment);
            XUI.Xml.SetText(oHorizontalAlignment, oFormControl.HorizontalAlignment)
        }
        if (oFormControl.VerticalAlignment != null && oFormControl.VerticalAlignment.length > 0) {
            var oVerticalAlignment = Mscrm.FormEditorVariables.formXml.createElement("VerticalAlignment");
            oParameters.appendChild(oVerticalAlignment);
            XUI.Xml.SetText(oVerticalAlignment, oFormControl.VerticalAlignment)
        }
        if (oFormControl.WebResourceId != null && oFormControl.WebResourceId.length > 0) {
            var oWebResourceId = Mscrm.FormEditorVariables.formXml.createElement("WebResourceId");
            oParameters.appendChild(oWebResourceId);
            XUI.Xml.SetText(oWebResourceId, oFormControl.WebResourceId)
        }
    }
    if (type == "bingmap")
        if (oFormControl.AddressField != null && oFormControl.AddressField.length > 0) {
            var oAddressField = Mscrm.FormEditorVariables.formXml.createElement("AddressField");
            oParameters.appendChild(oAddressField);
            XUI.Xml.SetText(oAddressField, oFormControl.AddressField)
        }
    if (type == "timercontrol") {
        if (oFormControl.SuccessConditionName != null && oFormControl.SuccessConditionName.length > 0) {
            var oSuccessConditionName = Mscrm.FormEditorVariables.formXml.createElement("SuccessConditionName");
            oParameters.appendChild(oSuccessConditionName);
            XUI.Xml.SetText(oSuccessConditionName, oFormControl.SuccessConditionName)
        }
        if (oFormControl.SuccessConditionValue != null && oFormControl.SuccessConditionValue.length > 0) {
            var oSuccessConditionValue = Mscrm.FormEditorVariables.formXml.createElement("SuccessConditionValue");
            oParameters.appendChild(oSuccessConditionValue);
            XUI.Xml.SetText(oSuccessConditionValue, oFormControl.SuccessConditionValue)
        }
        if (oFormControl.FailureConditionName != null && oFormControl.FailureConditionName.length > 0) {
            var oFailureConditionName = Mscrm.FormEditorVariables.formXml.createElement("FailureConditionName");
            oParameters.appendChild(oFailureConditionName);
            XUI.Xml.SetText(oFailureConditionName, oFormControl.FailureConditionName)
        }
        if (oFormControl.FailureConditionValue != null && oFormControl.FailureConditionValue.length > 0) {
            var oFailureConditionValue = Mscrm.FormEditorVariables.formXml.createElement("FailureConditionValue");
            oParameters.appendChild(oFailureConditionValue);
            XUI.Xml.SetText(oFailureConditionValue, oFormControl.FailureConditionValue)
        }
        if (oFormControl.WarningConditionName != null && oFormControl.WarningConditionName.length > 0) {
            var oWarningConditionName = Mscrm.FormEditorVariables.formXml.createElement("WarningConditionName");
            oParameters.appendChild(oWarningConditionName);
            XUI.Xml.SetText(oWarningConditionName, oFormControl.WarningConditionName)
        }
        if (oFormControl.WarningConditionValue != null && oFormControl.WarningConditionValue.length > 0) {
            var oWarningConditionValue = Mscrm.FormEditorVariables.formXml.createElement("WarningConditionValue");
            oParameters.appendChild(oWarningConditionValue);
            XUI.Xml.SetText(oWarningConditionValue, oFormControl.WarningConditionValue)
        }
        if (oFormControl.CancelConditionName != null && oFormControl.CancelConditionName.length > 0) {
            var oCancelConditionName = Mscrm.FormEditorVariables.formXml.createElement("CancelConditionName");
            oParameters.appendChild(oCancelConditionName);
            XUI.Xml.SetText(oCancelConditionName, oFormControl.CancelConditionName)
        }
        if (oFormControl.CancelConditionValue != null && oFormControl.CancelConditionValue.length > 0) {
            var oCancelConditionValue = Mscrm.FormEditorVariables.formXml.createElement("CancelConditionValue");
            oParameters.appendChild(oCancelConditionValue);
            XUI.Xml.SetText(oCancelConditionValue, oFormControl.CancelConditionValue)
        }
        if (oFormControl.PauseConditionName != null && oFormControl.PauseConditionName.length > 0) {
            var oPauseConditionName = Mscrm.FormEditorVariables.formXml.createElement("PauseConditionName");
            oParameters.appendChild(oPauseConditionName);
            XUI.Xml.SetText(oPauseConditionName, oFormControl.PauseConditionName)
        }
        if (oFormControl.PauseConditionValue != null && oFormControl.PauseConditionValue.length > 0) {
            var oPauseConditionValue = Mscrm.FormEditorVariables.formXml.createElement("PauseConditionValue");
            oParameters.appendChild(oPauseConditionValue);
            XUI.Xml.SetText(oPauseConditionValue, oFormControl.PauseConditionValue)
        }
        if (oFormControl.FailureTimeField != null && oFormControl.FailureTimeField.length > 0) {
            var oFailureTimeField = Mscrm.FormEditorVariables.formXml.createElement("FailureTimeField");
            oParameters.appendChild(oFailureTimeField);
            XUI.Xml.SetText(oFailureTimeField, oFormControl.FailureTimeField)
        }
    }
    if (type == "searchwidget") {
        if (oFormControl.FilterResults != null && oFormControl.FilterResults.length > 0) {
            var oShowFilterSearchResults = Mscrm.FormEditorVariables.formXml.createElement("FilterResults");
            oParameters.appendChild(oShowFilterSearchResults);
            XUI.Xml.SetText(oShowFilterSearchResults, oFormControl.FilterResults)
        }
        if (oFormControl.AllowChangingFiltersOnUI != null) {
            var oAllowChangeFilters = Mscrm.FormEditorVariables.formXml.createElement("AllowChangingFiltersOnUI");
            oParameters.appendChild(oAllowChangeFilters);
            XUI.Xml.SetText(oAllowChangeFilters, oFormControl.AllowChangingFiltersOnUI.toString())
        }
        if (oFormControl.ShowLanguageFilter != null) {
            var oShowLanguageFilter = Mscrm.FormEditorVariables.formXml.createElement("ShowLanguageFilter");
            oParameters.appendChild(oShowLanguageFilter);
            XUI.Xml.SetText(oShowLanguageFilter, oFormControl.ShowLanguageFilter.toString())
        }
        if (oFormControl.ShowDepartmentFilter != null) {
            var oShowDepartmentFilter = Mscrm.FormEditorVariables.formXml.createElement("ShowDepartmentFilter");
            oParameters.appendChild(oShowDepartmentFilter);
            XUI.Xml.SetText(oShowDepartmentFilter, oFormControl.ShowDepartmentFilter.toString())
        }
        if (oFormControl.EnableAutoSuggestions != null) {
            var oEnableAutomaticSuggestions = Mscrm.FormEditorVariables.formXml.createElement("EnableAutoSuggestions");
            oParameters.appendChild(oEnableAutomaticSuggestions);
            XUI.Xml.SetText(oEnableAutomaticSuggestions, oFormControl.EnableAutoSuggestions.toString())
        }
        if (oFormControl
            .SearchForAutoSuggestionsUsing !=
            null &&
            oFormControl.SearchForAutoSuggestionsUsing.length > 0) {
            var oAutomaticSuggestionSearchField = Mscrm.FormEditorVariables.formXml
                .createElement("SearchForAutoSuggestionsUsing");
            oParameters.appendChild(oAutomaticSuggestionSearchField);
            XUI.Xml.SetText(oAutomaticSuggestionSearchField, oFormControl.SearchForAutoSuggestionsUsing)
        }
        if (oFormControl.EnableRating != null) {
            var oEnableRating = Mscrm.FormEditorVariables.formXml.createElement("EnableRating");
            oParameters.appendChild(oEnableRating);
            XUI.Xml.SetText(oEnableRating, oFormControl.EnableRating.toString())
        }
        if (oFormControl.ShowRatingUsing != null && oFormControl.ShowRatingUsing.length > 0) {
            var oRatingField = Mscrm.FormEditorVariables.formXml.createElement("ShowRatingUsing");
            oParameters.appendChild(oRatingField);
            XUI.Xml.SetText(oRatingField, oFormControl.ShowRatingUsing)
        }
        if (oFormControl.AutoSuggestionSource != null) {
            var oAutoSuggestionSource = Mscrm.FormEditorVariables.formXml.createElement("AutoSuggestionSource");
            oParameters.appendChild(oAutoSuggestionSource);
            XUI.Xml.SetText(oAutoSuggestionSource, oFormControl.AutoSuggestionSource)
        }
        if (oFormControl.NumberOfResults != null) {
            var oRecordsPerPage = Mscrm.FormEditorVariables.formXml.createElement("NumberOfResults");
            oParameters.appendChild(oRecordsPerPage);
            XUI.Xml.SetText(oRecordsPerPage, oFormControl.NumberOfResults)
        }
        if (oFormControl.ShowContextualActions != null) {
            var oShowContextualActions = Mscrm.FormEditorVariables.formXml.createElement("ShowContextualActions");
            oParameters.appendChild(oShowContextualActions);
            XUI.Xml.SetText(oShowContextualActions, oFormControl.ShowContextualActions)
        }
        if (oFormControl.ActionList != null) {
            var oActionList = Mscrm.FormEditorVariables.formXml.createElement("ActionList");
            oParameters.appendChild(oActionList);
            XUI.Xml.SetText(oActionList, oFormControl.ActionList)
        }
        if (oFormControl.SelectPrimaryCustomer != null && oFormControl.SelectPrimaryCustomer.length > 0) {
            var oPrimaryCustomer = Mscrm.FormEditorVariables.formXml.createElement("SelectPrimaryCustomer");
            oParameters.appendChild(oPrimaryCustomer);
            XUI.Xml.SetText(oPrimaryCustomer,
                oFormControl.SelectPrimaryCustomer != null ? oFormControl.SelectPrimaryCustomer : "")
        }
        if (oFormControl.IsReferencePanelSearchWidget) {
            var oReferencePanelSearchWidgetIconUrl = Mscrm.FormEditorVariables.formXml
                .createElement("ReferencePanelSearchWidgetIconUrl");
            oParameters.appendChild(oReferencePanelSearchWidgetIconUrl);
            XUI.Xml.SetText(oReferencePanelSearchWidgetIconUrl, oFormControl.IconUrl)
        }
        if (oFormControl.SelectDefaultLanguage != null) {
            var oDefaultLanguage = Mscrm.FormEditorVariables.formXml.createElement("SelectDefaultLanguage");
            oParameters.appendChild(oDefaultLanguage);
            XUI.Xml.SetText(oDefaultLanguage, oFormControl.SelectDefaultLanguage)
        }
    }
    Mscrm.FormEditorVariables.fieldExpIsFor === "section" &&
        UpdateIframeDependencies(oCell, oFormControl);
    AddCellToFormXml(oRows, oCell, oFormControl.RowSpan, false, oFormControl.Auto);
    var formXmlPath = "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell";
    if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
        formXmlPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows/row/cell";
    PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
        formXmlPath + "[@id = '" + cellId + "']/labels/label",
        oFormControl.Labels);
    return cellId
}

function UpdateIframeDependencies(oCell, oIframe) {
    if (oIframe.Dependencies) {
        var iLen = oIframe.Dependencies.length,
            oEvents = XUI.Xml.SelectSingleNode(oCell, "events", null);
        if (!oEvents) {
            oEvents = Mscrm.FormEditorVariables.formXml.createElement("events");
            oCell.appendChild(oEvents)
        }
        var oEvent = XUI.Xml.SelectSingleNode(oEvents, "event[@name='onload']", null);
        if (!oEvent) {
            oEvent = Mscrm.FormEditorVariables.formXml.createElement("event");
            oEvent.setAttribute("name", "onload");
            oEvents.appendChild(oEvent);
            var oDepends = Mscrm.FormEditorVariables.formXml.createElement("dependencies");
            oEvent.appendChild(oDepends);
            oEvent.setAttribute("application", false)
        }
        var oParentNode = XUI.Xml.SelectSingleNode(oEvent, "dependencies", null);
        if (IsNull(oParentNode)) {
            oParentNode = Mscrm.FormEditorVariables.formXml.createElement("dependencies");
            oEvent.appendChild(oParentNode);
            oEvent.setAttribute("application", false)
        } else {
            var oChildNodes = XUI.Xml.SelectNodes(oParentNode, "dependency", null);
            !IsNull(oChildNodes) &&
                Mscrm.Utilities.removeAll(oChildNodes)
        }
        for (var oNewNode,
            i = 0;
            i < iLen;
            i++) {
            oNewNode = Mscrm.FormEditorVariables.formXml.createElement("dependency");
            oNewNode.setAttribute("id", oIframe.Dependencies[i]);
            oParentNode.appendChild(oNewNode)
        }
    }
}

function UpdateSubGrid(oActive, isChart, useComponentGallery) {
    var sSubGridName = oActive.getAttribute("name"),
        oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (Mscrm.FormEditorVariables.supportInteractionCentric === "True" &&
        typeof isChart === "undefined" &&
        typeof useComponentGallery === "undefined")
        return;
    if (!CanUpdateField(oFormCell))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null);
    Mscrm.PreviewCellUtils.isPreviewCell(oFormCell) &&
        Mscrm.PreviewCellUtils.createDefaultParams(oControl, Mscrm.DragDropUtils.SUBGRID, isChart);
    var oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null);
    if (XUI.Xml.SelectSingleNode(oParameters, "GridUIMode", null) != null) {
        var gridUIMode = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "GridUIMode", null));
        if (gridUIMode == "Card" &&
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "TargetEntityType", null)) ==
            Mscrm.FormEditorVariables.officeGraphDocument) {
            UpdateDelve(oActive, true);
            return
        }
    }
    var oArgs = {},
        sCustomControlUniqueId = "";
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile)) {
        sCustomControlUniqueId = ProcessCustomControlUniqueId(oControl);
        oArgs.sCustomControlUniqueId = sCustomControlUniqueId
    }
    var relOrdinal = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null) != null)
        relOrdinal = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null));
    var recPerPage = _subGridDefaults.iRecPerPage;
    if (XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null) != null)
        recPerPage = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null)), 10);
    else {
        var oRecPerPage = Mscrm.FormEditorVariables.formXml.createElement("RecordsPerPage");
        XUI.Xml.SetText(oRecPerPage, "4");
        Mscrm.FormEditorVariables.FormType == "quick" &&
            XUI.Xml.SetText(oRecPerPage, "5");
        oParameters.appendChild(oRecPerPage)
    }
    var enViewPicker = _subGridDefaults.bEnableViewPicker;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableViewPicker", null) != null)
        enViewPicker = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableViewPicker", null)) == "true";
    else {
        var oEnableViewPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableViewPicker");
        XUI.Xml.SetText(oEnableViewPicker, "false");
        oParameters.appendChild(oEnableViewPicker)
    }
    var viewId = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "ViewId", null) != null)
        viewId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ViewId", null));
    else {
        var oViewId = Mscrm.FormEditorVariables.formXml.createElement("ViewId");
        XUI.Xml.SetText(oViewId, viewId);
        oParameters.appendChild(oViewId)
    }
    var isUserView = "false";
    if (XUI.Xml.SelectSingleNode(oParameters, "IsUserView", null) != null)
        isUserView = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserView", null));
    else {
        var oIsUserView = Mscrm.FormEditorVariables.formXml.createElement("IsUserView");
        XUI.Xml.SetText(oIsUserView, isUserView);
        oParameters.appendChild(oIsUserView)
    }
    var viewIds = viewId;
    if (XUI.Xml.SelectSingleNode(oParameters, "ViewIds", null) != null)
        viewIds = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ViewIds", null));
    else {
        var oViewIds = Mscrm.FormEditorVariables.formXml.createElement("ViewIds");
        XUI.Xml.SetText(oViewIds, viewIds);
        oParameters.appendChild(oViewIds)
    }
    var enQuickFind = _subGridDefaults.bEnableQuickFind;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableQuickFind", null) != null)
        enQuickFind = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableQuickFind", null)) == "true";
    else {
        var oEnQuickFind = Mscrm.FormEditorVariables.formXml.createElement("EnableQuickFind");
        XUI.Xml.SetText(oEnQuickFind, "false");
        oParameters.appendChild(oEnQuickFind)
    }
    var enJumpBar = _subGridDefaults.bEnableJumpBar;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableJumpBar", null) != null)
        enJumpBar = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableJumpBar", null)) == "true";
    else {
        var oEnJumpBar = Mscrm.FormEditorVariables.formXml.createElement("EnableJumpBar");
        XUI.Xml.SetText(oEnJumpBar, "false");
        oParameters.appendChild(oEnJumpBar)
    }
    if (XUI.Xml.SelectSingleNode(oParameters, "AutoExpand", null) === null) {
        var oAutoExpand = Mscrm.FormEditorVariables.formXml.createElement("AutoExpand");
        oParameters.appendChild(oAutoExpand)
    }
    var chartGridMode = _subGridDefaults.bChartGridMode;
    if (XUI.Xml.SelectSingleNode(oParameters, "ChartGridMode", null) != null)
        chartGridMode = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ChartGridMode", null));
    else {
        var oChartGridMode = Mscrm.FormEditorVariables.formXml.createElement("ChartGridMode");
        XUI.Xml.SetText(oChartGridMode, chartGridMode);
        oParameters.appendChild(oChartGridMode)
    }
    var visualizationId = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null) != null)
        visualizationId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null));
    else {
        var oVisualizationId = Mscrm.FormEditorVariables.formXml.createElement("VisualizationId");
        XUI.Xml.SetText(oVisualizationId, visualizationId);
        oParameters.appendChild(oVisualizationId)
    }
    var isUserChart = "false";
    if (XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null) != null)
        isUserChart = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null));
    else {
        var oIsUserChart = Mscrm.FormEditorVariables.formXml.createElement("IsUserChart");
        XUI.Xml.SetText(oIsUserChart, isUserChart);
        oParameters.appendChild(oIsUserChart)
    }
    var enChartPicker = _subGridDefaults.bEnableChartPicker;
    if (XUI.Xml.SelectSingleNode(oParameters, "EnableChartPicker", null) != null)
        enChartPicker = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableChartPicker", null)) == "true";
    else {
        var oEnableChartPicker = Mscrm.FormEditorVariables.formXml.createElement("EnableChartPicker");
        XUI.Xml.SetText(oEnableChartPicker, "true");
        oParameters.appendChild(oEnableChartPicker)
    }
    var relationshipName = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null) == null) {
        var oRelationshipName = Mscrm.FormEditorVariables.formXml.createElement("RelationshipName");
        XUI.Xml.SetText(oRelationshipName, relationshipName);
        oParameters.appendChild(oRelationshipName)
    }
    var isReferencePanelSubGrid = false;
    if (oActive.className == Mscrm.DragDropUtils.REFERENCEPANELSUBGRID)
        isReferencePanelSubGrid = true;
    var referencePanelSubGridIconUrl = null;
    if (isReferencePanelSubGrid && XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSubgridIconUrl", null) != null)
        referencePanelSubGridIconUrl = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(oParameters, "ReferencePanelSubgridIconUrl", null));
    var oSubGrid = new SubGridObj(oControl.getAttribute("id"),
        XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null)),
        XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "TargetEntityType", null)),
        parseInt(oFormCell.getAttribute("rowspan"), 10),
        recPerPage,
        parseInt(oFormCell.getAttribute("colspan"), 10),
        oFormCell.getAttribute("auto") == "true",
        oFormCell.getAttribute("showlabel") == "true",
        viewId,
        enViewPicker,
        viewIds,
        enQuickFind,
        enJumpBar,
        chartGridMode,
        visualizationId,
        enChartPicker,
        GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
        relOrdinal,
        isUserView,
        isUserChart,
        oFormCell.getAttribute("availableforphone") !== "false",
        null,
        null,
        isReferencePanelSubGrid,
        referencePanelSubGridIconUrl);
    oArgs.Field = oSubGrid;
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.ObjectTypeCode = _objectTypeCode;
    oArgs.AllEntityData = Mscrm.FieldPropertiesUtils.getAllEntityData();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor)
        oArgs.RelEntitiesData = Mscrm.FieldPropertiesUtils.getRelatedEntitiesData(_objectTypeCode);
    oArgs.sTabName = sTabName;
    oArgs.sSectionName = sSectionName;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    var oSection = GetSectionNode(sSectionName),
        secCols = 2,
        colAttr = oSection.getAttribute("columns");
    if (colAttr != null)
        secCols = colAttr.length;
    oArgs.SecCols = secCols;
    if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null)).length != 0)
        oArgs.RelationShipExists = true;
    else
        oArgs.RelationShipExists = false;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.LangCode = _langCode;
    var uri,
        height,
        width;
    if (!IsNull(useComponentGallery) && useComponentGallery) {
        uri = Mscrm.CrmUri.create("/Tools/DashboardEditor/Dialogs/ComponentGallery.aspx");
        uri.get_query()["dashboardType"] = oArgs.FormAccessType.toString();
        uri.get_query()["mode"] = chartGridMode;
        if (Mscrm.FormEditorVariables.supportInteractionCentric === "True") {
            uri.get_query()["interactioncentric"] = "true";
            uri.get_query()["objecttypecode"] = _objectTypeCode;
            uri.get_query()["selectedview"] = paranthesizeAndUpperCaseGuid(Mscrm.FormEditorVariables.selectedView);
            if (Mscrm.FormEditorVariables.dashboardCategory === InteractionCentricDashboardCategory.CSR2 &&
                Mscrm.FormEditorVariables.streamsIsQueueSelected) {
                uri.get_query()["dashboardCategory"] = Mscrm.FormEditorVariables.dashboardCategory;
                uri.get_query()["queueName"] = Mscrm.FormEditorVariables.streamsQueueName;
                uri.get_query()["queueItemName"] = Mscrm.FormEditorVariables.streamsQueueItemViewName
            }
        }
        height = Mscrm.DashboardEditorConstants.componentGalleryHeight, width = Mscrm.DashboardEditorConstants
            .componentGalleryWidth
    } else {
        if (referencePanelSubGridIconUrl == null)
            referencePanelSubGridIconUrl = "";
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents))
            oArgs.CellId = oActive.id;
        uri = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/subGrid.aspx?title=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_SUBGRIDPROPS) +
            "&description=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYSUBGRIDPROPS) +
            "&editorType=" +
            CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType) +
            "&parentFormType=" +
            CrmEncodeDecode.CrmUrlEncode(Mscrm.FormEditorVariables.FormType) +
            "&icon=" +
            CrmEncodeDecode.CrmUrlEncode(referencePanelSubGridIconUrl) +
            "&chartgridmode=" +
            CrmEncodeDecode.CrmUrlEncode(chartGridMode));
        height = _subGridDefaults.iDialogHeight, width = _subGridDefaults.iDialogWidth
    }
    var parameters = [oSubGrid, sTabName, sSectionName, oActive, oControl, oFormCell, recPerPage];
    createInlineDlg(uri, oArgs, height, width, UpdateComponentGallery, parameters, null)
}

function UpdateSubGridOrgInsights(oActive, useComponentGallery) {
    var sSubGridName = oActive.getAttribute("name"),
        oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!CanUpdateField(oFormCell))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oArgs = {},
        rowSpan = Mscrm.FormXMlConstants.get_rowSpan(),
        secCols = Mscrm.FormXMlConstants.get_colSpan();
    if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor) {
        var oSection = GetSectionNode(sSectionName),
            colAttr = oSection.getAttribute("columns");
        if (colAttr != null)
            secCols = colAttr.length
    }
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.SecCols = secCols;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.LangCode = _langCode;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.ObjectTypeCode = _objectTypeCode;
    var oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null);
    Mscrm.PreviewCellUtils.isPreviewCell(oFormCell) &&
        Mscrm.PreviewCellUtils.createDefaultParams(oControl, Mscrm.DragDropUtils.ORGINSIGHTS);
    var oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null),
        visualizationId = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null) != null)
        visualizationId = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null));
    else {
        var oVisualizationId = Mscrm.FormEditorVariables.formXml.createElement("VisualizationId");
        XUI.Xml.SetText(oVisualizationId, visualizationId);
        oParameters.appendChild(oVisualizationId)
    }
    var isUserChart = "false";
    if (XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null) != null)
        isUserChart = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null));
    else {
        var oIsUserChart = Mscrm.FormEditorVariables.formXml.createElement("IsUserChart");
        XUI.Xml.SetText(oIsUserChart, isUserChart);
        oParameters.appendChild(oIsUserChart)
    }
    var oOrgInsights = new OrgInsightsObj(oControl.getAttribute("id"),
        rowSpan,
        secCols,
        true,
        sTabName,
        sSectionName,
        null,
        true,
        null,
        "auto",
        true,
        Mscrm.FormEditorVariables.formXml,
        true,
        visualizationId,
        false);
    oArgs.Field = oOrgInsights;
    oArgs.Field.Id = "Component" + createGuid().substr(1, 8);
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.ObjectTypeCode = _objectTypeCode;
    oArgs.sTabName = sTabName;
    oArgs.sSectionName = sSectionName;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    var oSection = GetSectionNode(sSectionName),
        secCols = 2,
        colAttr = oSection.getAttribute("columns");
    if (colAttr != null)
        secCols = colAttr.length;
    oArgs.SecCols = secCols;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    oArgs.LangCode = _langCode;
    var uri,
        height,
        width;
    uri = Mscrm.CrmUri.create("/Tools/DashboardEditor/Dialogs/OrgInsightsComponentGallery.aspx");
    uri.get_query()["dashboardType"] = oArgs.FormAccessType.toString();
    height = Mscrm.DashboardEditorConstants.orgInsightsComponentGalleryHeight, width = Mscrm.DashboardEditorConstants
        .orgInsightsComponentGalleryWidth;
    var parameters = [oOrgInsights, sTabName, sSectionName, oActive, oControl, oFormCell];
    createInlineDlg(uri, oArgs, height, width, UpdateComponentGalleryOrgInsights, parameters, null)
}

function
    UpdateComponentGallery(oUpdatedGrid, oSubGrid, sTabName, sSectionName, oActive, control, oFormCell, recPerPage) {
        if (oUpdatedGrid) {
            oUpdatedGrid.TabName = sTabName;
            oUpdatedGrid.SectionName = sSectionName;
            if (oSubGrid.IsReferencePanelSubGrid)
                control.setAttribute("classid", _ControlClassIds.referencepanelsubgrid);
            else {
                control.setAttribute("classid", _ControlClassIds.subgrid);
                control.setAttribute("indicationOfSubgrid", "true")
            }
            if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents))
                if (!IsNull(oUpdatedGrid.FormXml) &&
                    XUI.Xml.XMLSerializer.serializeToString(oUpdatedGrid.FormXml) !=
                    XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
                    var form = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                            Mscrm.FormXmlPaths.formPath,
                            null),
                        existingLibraries = XUI.Xml
                            .SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                                Mscrm.FormXmlPaths.formLibrariesPath,
                                null),
                        existingEvents = XUI.Xml
                            .SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                                Mscrm.FormXmlPaths.formEventsPath,
                                null),
                        updatedLibraries = XUI.Xml
                            .SelectSingleNode(oUpdatedGrid.FormXml, Mscrm.FormXmlPaths.formLibrariesPath, null),
                        updatedEvents = XUI.Xml
                            .SelectSingleNode(oUpdatedGrid.FormXml, Mscrm.FormXmlPaths.formEventsPath, null);
                    !IsNull(existingLibraries) &&
                        form.removeChild(existingLibraries);
                    !IsNull(existingEvents) &&
                        form.removeChild(existingEvents);
                    !IsNull(updatedLibraries) &&
                        form.appendChild(updatedLibraries);
                    !IsNull(updatedEvents) &&
                        form.appendChild(updatedEvents);
                    if (isOutlookHostedWindow())
                        Mscrm.FormEditorVariables.formXml = XUI.Xml.LoadXml(Mscrm.FormEditorVariables.formXml.xml)
                }
            var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
            oCell.getAttribute("unbounded") != null &&
                oCell.removeAttribute("unbounded");
            var oControl = XUI.Xml.SelectSingleNode(oCell, "control", null),
                oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null);
            Mscrm.PreviewCellUtils.isPreviewCell(oCell) &&
                oCell.removeAttribute("ispreviewcell");
            if (!CheckAndUpdateColSpan(oCell, oSubGrid.ColSpan, oUpdatedGrid.ColSpan))
                return;
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null),
                oUpdatedGrid.RelationshipName);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "TargetEntityType", null), oUpdatedGrid.TargetEntity);
            oFormCell.setAttribute("auto", oUpdatedGrid.Auto.toString());
            oUpdatedGrid.Auto &&
                ModifyOtherAutoExpandingFieldIfRequired(oFormCell);
            oFormCell.setAttribute("showlabel", oUpdatedGrid.ShowLabel.toString());
            oUpdatedGrid.AvailableForPhone != null &&
                setAttributeIfNotDefaultValue(oFormCell,
                    "availableforphone",
                    oUpdatedGrid.AvailableForPhone.toString(),
                    "true");
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ViewId", null), oUpdatedGrid.DefaultView);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserView", null),
                oUpdatedGrid.IsUserView.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableViewPicker", null),
                oUpdatedGrid.EnableViewPicker.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null), recPerPage.toString());
            oUpdatedGrid.RowsPerPage != null &&
                XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "RecordsPerPage", null),
                    oUpdatedGrid.RowsPerPage.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableQuickFind", null),
                oUpdatedGrid.EnableSearchBox.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableJumpBar", null),
                oUpdatedGrid.EnableIndex.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ViewIds", null), oUpdatedGrid.Views);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ChartGridMode", null), oUpdatedGrid.ChartGridMode);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null),
                oUpdatedGrid.VisualizationId);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "IsUserChart", null),
                oUpdatedGrid.IsUserChart.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableChartPicker", null),
                oUpdatedGrid.EnableChartPicker.toString());
            if (oUpdatedGrid.IsReferencePanelSubGrid)
                if (XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSubgridIconUrl", null) != null)
                    XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSubgridIconUrl", null),
                        oUpdatedGrid.IconUrl);
                else {
                    var oReferencePanelSubGridIconUrl = Mscrm.FormEditorVariables.formXml
                        .createElement("ReferencePanelSubgridIconUrl");
                    XUI.Xml.SetText(oReferencePanelSubGridIconUrl, oUpdatedGrid.IconUrl);
                    oParameters.appendChild(oReferencePanelSubGridIconUrl)
                }
            var node = XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null);
            if (oUpdatedGrid.AssociationRoleOrdinal.length > 0) {
                if (node == null) {
                    var oRelationshipRoleOrdinal = Mscrm.FormEditorVariables.formXml
                        .createElement("RelationshipRoleOrdinal");
                    oParameters.appendChild(oRelationshipRoleOrdinal)
                }
                XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipRoleOrdinal", null),
                    oUpdatedGrid.AssociationRoleOrdinal)
            } else
                node != null &&
                    oParameters.removeChild(node);
            var autoText = "Auto";
            if (oUpdatedGrid.Auto.toString() != "true")
                autoText = "Fixed";
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "AutoExpand", null), autoText);
            if (oUpdatedGrid.RowSpan != null)
                if (oSubGrid.RowSpan != oUpdatedGrid.RowSpan) {
                    Mscrm.FieldPropertiesUtils
                        .adjustFormXmlForRowSpanChange(oCell, oSubGrid.RowSpan, oUpdatedGrid.RowSpan);
                    oCell.setAttribute("rowspan", oUpdatedGrid.RowSpan.toString())
                }
            oUpdatedGrid.TeamTemplateId != null &&
                XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "TeamTemplateId", null),
                    oUpdatedGrid.TeamTemplateId.toString());
            DeleteExistingSubgridControlSnippet(oControl);
            oControl.setAttribute("id", oUpdatedGrid.Id);
            var bChangeClassId =
                AddSubgridCustomControlSnippet(oParameters,
                    oUpdatedGrid.CustomControlSnippet,
                    oUpdatedGrid.CustomControlUniqueId);
            PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
                "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@id = '" +
                oActive.id +
                "']/labels/label",
                oUpdatedGrid.Labels);
            var bRefreshCellOnly = oSubGrid.ColSpan == oUpdatedGrid.ColSpan && oSubGrid.RowSpan == oUpdatedGrid.RowSpan;
            RefreshCellHtml(oUpdatedGrid.TabName, oUpdatedGrid.SectionName, oActive.id, bRefreshCellOnly);
            if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) &&
                bChangeClassId) {
                var controlType = oSubGrid.IsReferencePanelSubGrid
                        ? _ControlClassIds.referencepanelsubgrid
                        : _ControlClassIds.subgrid,
                    controlNode = null;
                if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.EditableGridControlJsEvents))
                    controlNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@id = '" +
                        oActive.id +
                        "']/control");
                else
                    controlNode = XUI.Xml.SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                        "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@id = '" +
                        oActive.id +
                        "']/control[@classid = '" +
                        controlType +
                        "']");
                controlNode.setAttribute("classid", _ControlClassIds.customControl)
            }
        }
    }

function UpdateComponentGalleryOrgInsights(oUpdatedGrid,
    oSubGrid,
    sTabName,
    sSectionName,
    oActive,
    control,
    oFormCell,
    recPerPage) {
    if (oUpdatedGrid) {
        oUpdatedGrid.TabName = sTabName;
        oUpdatedGrid.SectionName = sSectionName;
        control.setAttribute("classid", _ControlClassIds.orgInsights);
        var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
        oCell.getAttribute("unbounded") != null &&
            oCell.removeAttribute("unbounded");
        var oControl = XUI.Xml.SelectSingleNode(oCell, "control", null),
            oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null);
        Mscrm.PreviewCellUtils.isPreviewCell(oCell) &&
            oCell.removeAttribute("ispreviewcell");
        if (!CheckAndUpdateColSpan(oCell, oSubGrid.ColSpan, oUpdatedGrid.ColSpan))
            return;
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "RelationshipName", null), oUpdatedGrid.RelationshipName);
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "TargetEntityType", null), oUpdatedGrid.TargetEntity);
        oFormCell.setAttribute("auto", oUpdatedGrid.Auto.toString());
        oUpdatedGrid.Auto &&
            ModifyOtherAutoExpandingFieldIfRequired(oFormCell);
        oFormCell.setAttribute("showlabel", oUpdatedGrid.ShowLabel.toString());
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "VisualizationId", null), oUpdatedGrid.VisualizationId);
        XUI.Xml.SetText(XUI.Xml
            .SelectSingleNode(oParameters, "IsUserChart", null),
            oUpdatedGrid.IsUserChart.toString());
        var autoText = "Auto";
        if (oUpdatedGrid.Auto.toString() != "true")
            autoText = "Fixed";
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "AutoExpand", null), autoText);
        if (oUpdatedGrid.RowSpan != null)
            if (oSubGrid.RowSpan != oUpdatedGrid.RowSpan) {
                Mscrm.FieldPropertiesUtils.adjustFormXmlForRowSpanChange(oCell, oSubGrid.RowSpan, oUpdatedGrid.RowSpan);
                oCell.setAttribute("rowspan", oUpdatedGrid.RowSpan.toString())
            }
        oControl.setAttribute("id", oUpdatedGrid.Id);
        PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@id = '" +
            oActive.id +
            "']/labels/label",
            oUpdatedGrid.Labels);
        var bRefreshCellOnly = oSubGrid.ColSpan == oUpdatedGrid.ColSpan && oSubGrid.RowSpan == oUpdatedGrid.RowSpan;
        RefreshCellHtml(oUpdatedGrid.TabName, oUpdatedGrid.SectionName, oActive.id, bRefreshCellOnly)
    }
}

function UpdateQuickFormCollection(oActive) {
    var oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!CanUpdateField(oFormCell))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null),
        oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null),
        isReferencePanelQuickFormCollection = false;
    if (oActive.className == Mscrm.DragDropUtils.REFERENCEPANELQUICKFORMCOLLECTION)
        isReferencePanelQuickFormCollection = true;
    var referencePanelQuickFormCollectionIconUrl = null;
    if (isReferencePanelQuickFormCollection &&
        XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelQuickFormCollectionIconUrl", null) != null)
        referencePanelQuickFormCollectionIconUrl = XUI.Xml
            .GetText(XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelQuickFormCollectionIconUrl", null));
    var displayAsCustomer360Tile = null;
    if (XUI.Xml.SelectSingleNode(oParameters, "DisplayAsCustomer360Tile", null) != null)
        displayAsCustomer360Tile = XUI.Xml.GetText(XUI.Xml
            .SelectSingleNode(oParameters, "DisplayAsCustomer360Tile", null));
    var oArgs = {},
        quickforms = "";
    if (XUI.Xml.SelectSingleNode(oParameters, "QuickForms", null) != null)
        quickforms = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "QuickForms", null));
    var index = quickforms.indexOf("<![CDATA[");
    if (index > -1) {
        var len = quickforms.length;
        quickforms = quickforms.substring(index + 9, len - 3)
    }
    var quickFormXml = XUI.Xml.LoadXml(quickforms),
        sDataFieldName = oControl.getAttribute("datafieldname"),
        oQuickFormCollectionInfo = [],
        oNodes = XUI.Xml.SelectNodes(quickFormXml, "/QuickFormIds/QuickFormId", null);
    len = oNodes.length;
    for (i = 0; i < len; i++) {
        var quickFormInfo = new RelatedQuickFormInfo(oNodes[i].getAttribute("entityname"), XUI.Xml.GetText(oNodes[i]));
        oQuickFormCollectionInfo.push(quickFormInfo)
    }
    var oQuickForm = new QuickFormObj(oControl.getAttribute("id"),
        oFormCell.getAttribute("showlabel") == "true",
        GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
        oFormCell.getAttribute("auto") == "true",
        sDataFieldName,
        oQuickFormCollectionInfo,
        isReferencePanelQuickFormCollection,
        referencePanelQuickFormCollectionIconUrl,
        displayAsCustomer360Tile == "true");
    oArgs.Field = oQuickForm;
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
    oArgs.FormType = Mscrm.FormEditorVariables.FormType;
    oArgs.ObjectTypeCode = _objectTypeCode;
    oArgs.sTabName = sTabName;
    oArgs.sSectionName = sSectionName;
    oArgs.SecCols = 6;
    oArgs.LangCode = _langCode;
    if (referencePanelQuickFormCollectionIconUrl == null)
        referencePanelQuickFormCollectionIconUrl = "";
    var url = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/quickFormCollectionControl.aspx?title=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_SUBFORMPROPS) +
            "&description=" +
            CrmEncodeDecode.CrmUrlEncode(LOCID_FORMED_MODIFYSUBFORMPROPS) +
            "&icon=" +
            CrmEncodeDecode.CrmUrlEncode(referencePanelQuickFormCollectionIconUrl)),
        callBackParameters = [sTabName, sSectionName, oActive, sDataFieldName, oFormCell],
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = _subGridDefaults.iDialogHeight;
    dialogOptions.width = _subGridDefaults.iDialogWidth + 60;
    var callbkFunction = Mscrm.Utilities
        .createCallbackFunctionForXrmDialog(quickFormUpdateCallBackFunction, callBackParameters);
    Xrm.Internal.openDialog(url.toString(), dialogOptions, oArgs, null, callbkFunction)
}

function quickFormUpdateCallBackFunction(oUpdateQuickForm, sTabName, sSectionName, oActive, sDataFieldName, oFormCell) {
    if (oUpdateQuickForm) {
        oUpdateQuickForm.TabName = sTabName;
        oUpdateQuickForm.SectionName = sSectionName;
        var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id),
            oControl = XUI.Xml.SelectSingleNode(oCell, "control", null),
            oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null);
        if (oUpdateQuickForm.IsReferencePanelQuickFormCollection)
            if (XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelQuickFormCollectionIconUrl", null) != null)
                XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelQuickFormCollectionIconUrl", null),
                    oUpdateQuickForm.IconUrl);
            else {
                var oReferencePanelQuickFormCollectionIconUrl = Mscrm.FormEditorVariables.formXml
                    .createElement("ReferencePanelQuickFormCollectionIconUrl");
                XUI.Xml.SetText(oReferencePanelQuickFormCollectionIconUrl, oUpdateQuickForm.IconUrl);
                oParameters.appendChild(oReferencePanelQuickFormCollectionIconUrl)
            }
        if (Mscrm.FormEditorVariables.FormType == "mainInteractionCentric")
            if (XUI.Xml.SelectSingleNode(oParameters, "DisplayAsCustomer360Tile", null) != null)
                XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "DisplayAsCustomer360Tile", null),
                    oUpdateQuickForm.DisplayAsCustomer360Tile);
            else {
                var oDisplayAsCustomer360Tile = Mscrm.FormEditorVariables.formXml
                    .createElement("DisplayAsCustomer360Tile");
                XUI.Xml.SetText(oDisplayAsCustomer360Tile, oUpdateQuickForm.DisplayAsCustomer360Tile);
                oParameters.appendChild(oDisplayAsCustomer360Tile)
            }
        sDataFieldName != oUpdateQuickForm.DataFieldName &&
            oControl.setAttribute("datafieldname", oUpdateQuickForm.DataFieldName);
        oFormCell.setAttribute("auto", oUpdateQuickForm.Auto.toString());
        oUpdateQuickForm.Auto &&
            ModifyOtherAutoExpandingFieldIfRequired(oFormCell);
        oFormCell.setAttribute("showlabel", oUpdateQuickForm.ShowLabel.toString());
        var bRefreshCellOnly = false,
            node = XUI.Xml.SelectSingleNode(oParameters, "QuickForms", null),
            i,
            len;
        len = oUpdateQuickForm.QuickFormCollectionInfo.length;
        var nodeText = "<QuickFormIds>";
        for (i = 0; i < len; i++)
            nodeText += '<QuickFormId entityname="' +
                oUpdateQuickForm.QuickFormCollectionInfo[i].entity +
                '">' +
                oUpdateQuickForm.QuickFormCollectionInfo[i].formId +
                "</QuickFormId>";
        nodeText += "</QuickFormIds>";
        if (XUI.Xml.GetText(node) != nodeText) {
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "QuickForms", null), nodeText);
            bRefreshCellOnly = true
        }
        oControl.setAttribute("id", oUpdateQuickForm.Id);
        PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
            "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell[@id = '" +
            oActive.id +
            "']/labels/label",
            oUpdateQuickForm.Labels);
        RefreshCellHtml(oUpdateQuickForm.TabName, oUpdateQuickForm.SectionName, oActive.id, bRefreshCellOnly)
    }
}

function UpdateIFrame(oActive, useComponentGallery, mode) {
    var sFrameName = oActive.getAttribute("name"),
        oFormCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
    if (!CanUpdateField(oFormCell))
        return;
    var sTabName = GetCurrentTabName(oActive),
        sSectionName = GetCurrentSectionName(oActive),
        oControl = XUI.Xml.SelectSingleNode(oFormCell, "control", null),
        bVisible = oFormCell.getAttribute("visible") !== "false";
    if (Mscrm.PreviewCellUtils.isPreviewCell(oFormCell)) {
        var type;
        switch (oActive.className) {
        case "iframe":
        case "aci":
            type = Mscrm.DragDropUtils.IFRAME;
            break;
        case "webresource":
            type = Mscrm.DragDropUtils.WEBRESOURCE;
            break;
        case "powerbitile":
            type = Mscrm.DragDropUtils.POWERBITILE;
            break;
        case "socialInsight":
            type = Mscrm.DragDropUtils.SOCIALINSIGHT;
            break
        }
        Mscrm.PreviewCellUtils.createDefaultParams(oControl, type)
    }
    var oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null),
        oScrollingNode = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null) : null,
        sScrolling = oScrollingNode ? XUI.Xml.GetText(oScrollingNode) : "auto",
        oDependsNodes = XUI.Xml.SelectNodes(oFormCell, "events/event[@name='onload']/dependencies/dependency", null),
        iDependsLen = oDependsNodes.length,
        oDependsAry = new Array(iDependsLen);
    for (j = 0; j < iDependsLen; j++)
        oDependsAry[j] = oDependsNodes[j].getAttribute("id");
    var oArgs = {},
        oIframe = null;
    switch (oActive.className) {
    case "iframe":
        var showOnMobileClientNode = XUI.Xml.SelectSingleNode(oParameters, "ShowOnMobileClient", null),
            showOnMobileClient = showOnMobileClientNode ? XUI.Xml.GetText(showOnMobileClientNode) : null;
        oIframe = new IframeObj(oControl.getAttribute("id"),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Url", null)),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null)) == "true",
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Security", null)) == "true",
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            oDependsAry,
            sScrolling,
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null)) == "true",
            Mscrm.FormEditorVariables.formXml,
            bVisible,
            showOnMobileClient == "true");
        oArgs.CellId = oActive.id;
        break;
    case "aci":
        var showOnMobileClient = "true";
        oIframe = new ACIWidgetObj(oControl.getAttribute("id"),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "ViewName", null)),
            true,
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            false,
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            true,
            oDependsAry,
            sScrolling,
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null)) == "true",
            Mscrm.FormEditorVariables.formXml,
            true,
            true);
        oArgs.CellId = oActive.id;
        break;
    case "powerbitile":
        oIframe = new PowerBITileObj(oControl.getAttribute("id"),
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            false,
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "PowerBIDashboardId", null)),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "TileId", null)),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "TileUrl", null)),
            0,
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "EnableInMobile", null)) == "true",
            bVisible);
        oArgs.CellId = oActive.id;
        break;
    case "webresource":
        var heightNode = XUI.Xml.SelectSingleNode(oParameters, "Height", null),
            height = heightNode ? XUI.Xml.GetText(heightNode) : null,
            widthNode = XUI.Xml.SelectSingleNode(oParameters, "Width", null),
            width = widthNode ? XUI.Xml.GetText(widthNode) : null,
            sizeTypeNode = XUI.Xml.SelectSingleNode(oParameters, "SizeType", null),
            sizeType = sizeTypeNode ? XUI.Xml.GetText(sizeTypeNode) : null,
            bShowOnRoFormNode = XUI.Xml.SelectSingleNode(oParameters, "ShowInROF", null),
            bShowOnRoForm = bShowOnRoFormNode ? XUI.Xml.GetText(bShowOnRoFormNode) : null,
            altTextNode = XUI.Xml.SelectSingleNode(oParameters, "AltText", null),
            altText = altTextNode ? XUI.Xml.GetText(altTextNode) : null,
            passParamNode = XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null),
            passParam = passParamNode ? XUI.Xml.GetText(passParamNode) : null,
            showOnMobileClientNode = XUI.Xml.SelectSingleNode(oParameters, "ShowOnMobileClient", null),
            showOnMobileClient = showOnMobileClientNode ? XUI.Xml.GetText(showOnMobileClientNode) : null,
            securityNode = XUI.Xml.SelectSingleNode(oParameters, "Security", null),
            security = securityNode ? XUI.Xml.GetText(securityNode) : null,
            borderNode = XUI.Xml.SelectSingleNode(oParameters, "Border", null),
            border = borderNode ? XUI.Xml.GetText(borderNode) : null,
            customParameterNode = XUI.Xml.SelectSingleNode(oParameters, "Data", null),
            customParameter = customParameterNode ? XUI.Xml.GetText(customParameterNode) : null,
            horizontalAlignmentNode = XUI.Xml.SelectSingleNode(oParameters, "HorizontalAlignment", null),
            horizontalAlignment = horizontalAlignmentNode ? XUI.Xml.GetText(horizontalAlignmentNode) : null,
            verticalAlignmentNode = XUI.Xml.SelectSingleNode(oParameters, "VerticalAlignment", null),
            verticalAlignment = verticalAlignmentNode ? XUI.Xml.GetText(verticalAlignmentNode) : null,
            webResourceIdNode = XUI.Xml.SelectSingleNode(oParameters, "WebResourceId", null),
            webResourceId = webResourceIdNode ? XUI.Xml.GetText(webResourceIdNode) : null;
        oArgs.FormXml = Mscrm.FormEditorVariables.formXml;
        oIframe = new WebResourceObj(oControl.getAttribute("id"),
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Url", null)),
            passParam == "true",
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            security == "true",
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            oDependsAry,
            sScrolling,
            border == "true",
            null,
            height,
            width,
            sizeType,
            altText,
            customParameter,
            horizontalAlignment,
            verticalAlignment,
            bVisible,
            showOnMobileClient == "true",
            webResourceId);
        break;
    case "bingmap":
        var addressFieldNode = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "AddressField", null) : null;
        oIframe = new BingMapObj(oControl.getAttribute("id"),
            addressFieldNode ? XUI.Xml.GetText(addressFieldNode) : "",
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            Mscrm.FormEditorVariables.formXml,
            bVisible);
        oArgs.CellId = oActive.id;
        break;
    case "socialInsight":
        oIframe = new SocialInsightObj(oControl.getAttribute("id"),
            null,
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null)) == "true",
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            oFormCell.getAttribute("auto") == "true",
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            oDependsAry,
            sScrolling,
            XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null)) == "true",
            Mscrm.FormEditorVariables.formXml,
            bVisible);
        oArgs.CellId = oActive.id;
        break;
    case "timercontrol":
        var successConditionNameNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "SuccessConditionName", null)
                : null,
            SuccessConditionValueNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "SuccessConditionValue", null)
                : null,
            failureConditionNameNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "FailureConditionName", null)
                : null,
            failureConditionValueNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "FailureConditionValue", null)
                : null,
            warningConditionNameNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "WarningConditionName", null)
                : null,
            warningConditionValueNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "WarningConditionValue", null)
                : null,
            cancelConditionNameNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "CancelConditionName", null)
                : null,
            cancelConditionValueNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "CancelConditionValue", null)
                : null,
            pauseConditionNameNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "PauseConditionName", null)
                : null,
            pauseConditionValueNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "PauseConditionValue", null)
                : null,
            failureTimeFieldNode = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "FailureTimeField", null) : null;
        oIframe = new TimerControlObj(oControl.getAttribute("id"),
            successConditionNameNode,
            SuccessConditionValueNode,
            failureConditionNameNode,
            failureConditionValueNode,
            warningConditionNameNode,
            warningConditionValueNode,
            cancelConditionNameNode,
            cancelConditionValueNode,
            pauseConditionNameNode,
            pauseConditionValueNode,
            failureTimeFieldNode,
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            Mscrm.FormEditorVariables.formXml,
            bVisible);
        oArgs.CellId = oActive.id;
        break;
    case "searchwidget":
    case "referencepanelsearchwidget":
        var showFilterSearchResultsNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "FilterResults", null)
                : null,
            allowChangeFiltersNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "AllowChangingFiltersOnUI", null)
                : null,
            showLanguageFilter = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "ShowLanguageFilter", null) : null,
            showDepartmentFilter = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "ShowDepartmentFilter", null)
                : null,
            enableAutomaticSuggestionsNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "EnableAutoSuggestions", null)
                : null,
            automaticSuggestionSearchFieldNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "SearchForAutoSuggestionsUsing", null)
                : null,
            enableRatingNode = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "EnableRating", null) : null,
            showRatingFieldNode = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "ShowRatingUsing", null) : null,
            autoSuggestionSource = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "AutoSuggestionSource", null)
                : "1",
            recordsPerPageNode = parseInt(XUI.Xml.GetText(XUI.Xml
                    .SelectSingleNode(oParameters, "NumberOfResults", null)),
                10),
            primaryCustomerNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "SelectPrimaryCustomer", null)
                : null,
            showContextualActions = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "ShowContextualActions", null)
                : null,
            actionList = oParameters ? XUI.Xml.SelectSingleNode(oParameters, "ActionList", null) : null,
            defaultLanguageNode = oParameters
                ? XUI.Xml.SelectSingleNode(oParameters, "SelectDefaultLanguage", null)
                : null,
            isReferencePanelSearchWidget = false;
        if (oActive.className == Mscrm.DragDropUtils.REFERENCEPANELSEARCHWIDGET)
            isReferencePanelSearchWidget = true;
        var referencePanelSearchWidgetIconUrl = null;
        if (isReferencePanelSearchWidget &&
            XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSearchWidgetIconUrl", null) != null)
            referencePanelSearchWidgetIconUrl = XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSearchWidgetIconUrl", null));
        oIframe = new SearchWidgetObj(oControl.getAttribute("id"),
            showFilterSearchResultsNode,
            allowChangeFiltersNode,
            showLanguageFilter,
            showDepartmentFilter,
            enableAutomaticSuggestionsNode,
            automaticSuggestionSearchFieldNode,
            autoSuggestionSource,
            recordsPerPageNode,
            showContextualActions,
            actionList,
            primaryCustomerNode,
            parseInt(oFormCell.getAttribute("rowspan"), 10),
            parseInt(oFormCell.getAttribute("colspan"), 10),
            sTabName,
            sSectionName,
            GetLocalizedObjsArray(XUI.Xml.SelectNodes(oFormCell, "labels/label", null)),
            oFormCell.getAttribute("showlabel") == "true",
            Mscrm.FormEditorVariables.formXml,
            bVisible,
            defaultLanguageNode,
            isReferencePanelSearchWidget,
            referencePanelSearchWidgetIconUrl,
            enableRatingNode,
            showRatingFieldNode);
        oArgs.CellId = oActive.id;
        break
    }
    oArgs.Field = oIframe;
    oArgs.FieldsXml = oFieldsXml;
    oArgs.FieldPropertiesXml = oPropertiesXml;
    oArgs.ObjectTypeCode = _objectTypeCode;
    var oSection = GetSectionNode(sSectionName),
        secCols = 2,
        colAttr = oSection.getAttribute("columns");
    if (colAttr != null)
        secCols = colAttr.length;
    oArgs.SecCols = secCols;
    oArgs.EditorType = Mscrm.FormEditorVariables.editorType;
    oArgs.LangCode = _langCode;
    oArgs.FormAccessType = Mscrm.FormEditorVariables.formAccessType;
    var mode = !IsNull(mode) ? mode : "edit",
        oUpdatedIframe = null;
    switch (oActive.className) {
    case "iframe":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/iframe.aspx?mode=" +
                mode +
                "&datatype=iframe&scrolling=" +
                CrmEncodeDecode.CrmUrlEncode(sScrolling) +
                "&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "aci":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/ACIWidget.aspx?mode=" +
                mode +
                "&datatype=iframe&scrolling=" +
                CrmEncodeDecode.CrmUrlEncode(sScrolling) +
                "&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "powerbitile":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/powerbitile.aspx?mode=" +
                mode +
                "&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            Math.min(window.parent.innerHeight, _subGridDefaults.iDialogHeight + 32),
            _subGridDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "webresource":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/webresource.aspx?mode=" +
                mode +
                "&name=" +
                CrmEncodeDecode.CrmUrlEncode(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oParameters, "Url", null))) +
                "&datatype=iframe&scrolling=" +
                CrmEncodeDecode.CrmUrlEncode(sScrolling) +
                "&editorType=" +
                CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
            oArgs,
            _lookupDialogParentDefaults.iDialogHeight,
            _lookupDialogParentDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "bingmap":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/bingmap.aspx?mode=" +
                mode +
                "&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode) +
                "&addr=" +
                CrmEncodeDecode.CrmUrlEncode(oIframe.AddressField)),
            oArgs,
            _subGridDefaults.iDialogHeight,
            _subGridDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "timercontrol":
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_TimerControl.aspx?mode=" +
                mode +
                "&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode) +
                "&addr=" +
                CrmEncodeDecode.CrmUrlEncode(oIframe.AddressField)),
            oArgs,
            _timerControlDefaults.iDialogHeight,
            _timerControlDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        return;
    case "searchwidget":
    case "referencepanelsearchwidget":
        if (referencePanelSearchWidgetIconUrl == null)
            referencePanelSearchWidgetIconUrl = "";
        createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/dlg_KMControl.aspx?mode=" +
                mode +
                "&etc=" +
                CrmEncodeDecode.CrmUrlEncode(_objectTypeCode) +
                "&addr=" +
                CrmEncodeDecode.CrmUrlEncode(oIframe.AddressField) +
                "&icon=" +
                CrmEncodeDecode.CrmUrlEncode(referencePanelSearchWidgetIconUrl)),
            oArgs,
            _kmControlDefaults.iDialogHeight,
            _kmControlDefaults.iDialogWidth,
            UpdateFormXml,
            [sTabName, sSectionName, mode, oActive, oIframe],
            null);
        break;
    case "socialInsight":
        if (Mscrm.FormEditorVariables.editorType != Mscrm.EditorType.dashboardEditor)
            createInlineDlg(Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/SocialInsight.aspx?mode=" +
                    mode +
                    "&datatype=iframe&scrolling=" +
                    CrmEncodeDecode.CrmUrlEncode(sScrolling) +
                    "&editorType=" +
                    CrmEncodeDecode.CrmUrlEncode(oArgs.EditorType)),
                oArgs,
                _subGridDefaults.iDialogHeight,
                _subGridDefaults.iDialogWidth,
                UpdateFormXml,
                [sTabName, sSectionName, mode, oActive, oIframe],
                null);
        else {
            if (!window._AreSocialInsightsEnabled)
                return;
            ShowSocialInsightsConfigWizardOnDashboard(mode, "edit", oArgs, oControl.getAttribute("id"), oActive)
        }
        return
    }
}

function UpdateFormXml(oUpdatedIframe, sTabName, sSectionName, mode, oActive, oIframe) {
    if (oUpdatedIframe) {
        if (oActive.className == "socialInsight" &&
            Mscrm.FormEditorVariables.formId == "00000000-0000-0000-0000-000000000000")
            Mscrm.FormEditorVariables.socialInsightsConfigurations[oUpdatedIframe.Id] = oUpdatedIframe
                .socialInsightsConfiguration;
        if (oActive.className == "orgInsights" &&
            Mscrm.FormEditorVariables.formId == "00000000-0000-0000-0000-000000000000")
            Mscrm.FormEditorVariables.orgInsightsConfigurations[oUpdatedIframe.Id] = oUpdatedIframe
                .orgInsightsConfiguration;
        var fRefreshFormEditor = false;
        if (!IsNull(oUpdatedIframe.FormXml) &&
            XUI.Xml.XMLSerializer.serializeToString(oUpdatedIframe.FormXml) !=
            XUI.Xml.XMLSerializer.serializeToString(Mscrm.FormEditorVariables.formXml)) {
            fRefreshFormEditor = true;
            Mscrm.FormEditorVariables.formXml = oUpdatedIframe.FormXml
        }
        oUpdatedIframe.TabName = sTabName;
        oUpdatedIframe.SectionName = sSectionName;
        var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id);
        Mscrm.PreviewCellUtils.isPreviewCell(oCell) &&
            oCell.removeAttribute("ispreviewcell");
        var oControl = XUI.Xml.SelectSingleNode(oCell, "control", null);
        mode == "add" &&
            oControl.setAttribute("id", oUpdatedIframe.Id);
        oControl.setAttribute("classid", _ControlClassIds.iframe);
        if (oUpdatedIframe.TypeCode != null && oUpdatedIframe.TypeCode != -1) {
            var wrClassId;
            switch (oUpdatedIframe.TypeCode) {
            case 1:
                wrClassId = _ControlClassIds.webResourceHtml;
                break;
            case 5:
            case 6:
            case 7:
            case 10:
                wrClassId = _ControlClassIds.webResourceImage;
                break;
            case 8:
                wrClassId = _ControlClassIds.webResourceSilverlight;
                break
            }
            oControl.setAttribute("classid", wrClassId)
        }
        if (!CheckAndUpdateColSpan(oCell, oIframe.ColSpan, oUpdatedIframe.ColSpan))
            return;
        var oParameters = XUI.Xml.SelectSingleNode(oControl, "parameters", null);
        if (null == oParameters) {
            oParameters = Mscrm.FormEditorVariables.formXml.createElement("parameters");
            oControl.appendChild(oParameters)
        }
        if (oActive.className == "timercontrol") {
            oControl.setAttribute("classid", _ControlClassIds.timercontrol);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "SuccessConditionName", null),
                oUpdatedIframe.SuccessConditionName);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "SuccessConditionValue", null),
                oUpdatedIframe.SuccessConditionValue);
            updateTimerControlXML(oParameters, "FailureConditionName", oUpdatedIframe.FailureConditionName);
            updateTimerControlXML(oParameters, "FailureConditionValue", oUpdatedIframe.FailureConditionValue);
            updateTimerControlXML(oParameters, "WarningConditionName", oUpdatedIframe.WarningConditionName);
            updateTimerControlXML(oParameters, "WarningConditionValue", oUpdatedIframe.WarningConditionValue);
            updateTimerControlXML(oParameters, "CancelConditionName", oUpdatedIframe.CancelConditionName);
            updateTimerControlXML(oParameters, "CancelConditionValue", oUpdatedIframe.CancelConditionValue);
            updateTimerControlXML(oParameters, "PauseConditionName", oUpdatedIframe.PauseConditionName);
            updateTimerControlXML(oParameters, "PauseConditionValue", oUpdatedIframe.PauseConditionValue);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "FailureTimeField", null),
                oUpdatedIframe.FailureTimeField)
        } else if (oActive.className == "searchwidget" || oActive.className == "referencepanelsearchwidget") {
            if (oActive.className == "searchwidget")
                oControl.setAttribute("classid", _ControlClassIds.searchwidget);
            else
                oControl.setAttribute("classid", _ControlClassIds.referencepanelsearchwidget);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "FilterResults", null), oUpdatedIframe.FilterResults);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "AllowChangingFiltersOnUI", null),
                oUpdatedIframe.AllowChangingFiltersOnUI.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ShowLanguageFilter", null),
                oUpdatedIframe.ShowLanguageFilter.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ShowDepartmentFilter", null),
                oUpdatedIframe.ShowDepartmentFilter.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableAutoSuggestions", null),
                oUpdatedIframe.EnableAutoSuggestions.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "SearchForAutoSuggestionsUsing", null),
                oUpdatedIframe.SearchForAutoSuggestionsUsing);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "AutoSuggestionSource", null),
                oUpdatedIframe.AutoSuggestionSource);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "NumberOfResults", null),
                oUpdatedIframe.NumberOfResults);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ShowContextualActions", null),
                oUpdatedIframe.ShowContextualActions.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ActionList", null),
                oUpdatedIframe.ActionList.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "SelectDefaultLanguage", null),
                oUpdatedIframe.SelectDefaultLanguage);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableRating", null),
                oUpdatedIframe.EnableRating.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ShowRatingUsing", null),
                oUpdatedIframe.ShowRatingUsing);
            var oSelectPrimaryCustomerParam = XUI.Xml.SelectSingleNode(oParameters, "SelectPrimaryCustomer", null);
            if (!IsNull(oUpdatedIframe.SelectPrimaryCustomer) && oUpdatedIframe.SelectPrimaryCustomer.length > 0) {
                if (IsNull(oSelectPrimaryCustomerParam))
                    oSelectPrimaryCustomerParam = Mscrm.FormEditorVariables.formXml
                        .createElement("SelectPrimaryCustomer");
                oParameters.appendChild(oSelectPrimaryCustomerParam);
                XUI.Xml.SetText(oSelectPrimaryCustomerParam, oUpdatedIframe.SelectPrimaryCustomer)
            } else
                !IsNull(oSelectPrimaryCustomerParam) &&
                    oParameters.removeChild(oSelectPrimaryCustomerParam);
            if (oActive.className == "referencepanelsearchwidget")
                if (XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSearchWidgetIconUrl", null) != null)
                    XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ReferencePanelSearchWidgetIconUrl", null),
                        oUpdatedIframe.IconUrl);
                else {
                    var oReferencePanelSearchWidgetIconUrl = Mscrm.FormEditorVariables.formXml
                        .createElement("ReferencePanelSearchWidgetIconUrl");
                    oParameters.appendChild(oReferencePanelSearchWidgetIconUrl);
                    XUI.Xml.SetText(oReferencePanelSearchWidgetIconUrl, oUpdatedIframe.IconUrl)
                }
        } else if (oActive.className == "powerbitile") {
            oControl.setAttribute("classid", _ControlClassIds.powerBITile);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "PowerBIDashboardId", null),
                oUpdatedIframe.DashboardId);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "TileId", null), oUpdatedIframe.TileId);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "TileUrl", null), oUpdatedIframe.TileUrl);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Type", "0"), oUpdatedIframe.Type);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "EnableInMobile", "false"),
                oUpdatedIframe.EnableInMobile.toString())
        } else if (oActive.className == "aci") {
            oControl.setAttribute("classid", _ControlClassIds.aci);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "ViewName", null), oUpdatedIframe.ViewName);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null),
                oUpdatedIframe.PassParams.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null), oUpdatedIframe.Scrolling);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null), oUpdatedIframe.Border.toString())
        } else if (oActive.className == "socialInsight") {
            oUpdatedIframe.Url = null;
            oUpdatedIframe.Secure = null;
            oControl.setAttribute("classid", _ControlClassIds.socialInsight);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null),
                oUpdatedIframe.PassParams.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null), oUpdatedIframe.Scrolling);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null), oUpdatedIframe.Border.toString())
        } else if (oActive.className == "orgInsights") {
            oUpdatedIframe.Url = null;
            oUpdatedIframe.Secure = null;
            oControl.setAttribute("classid", _ControlClassIds.orgInsights);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null),
                oUpdatedIframe.PassParams.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null), oUpdatedIframe.Scrolling);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null), oUpdatedIframe.Border.toString())
        } else if (oActive.className == "bingmap") {
            oControl.setAttribute("classid", _ControlClassIds.bingmap);
            var oAddressField = XUI.Xml.SelectSingleNode(oParameters, "AddressField", null);
            if (null == oAddressField) {
                oAddressField = Mscrm.FormEditorVariables.formXml.createElement("AddressField");
                oParameters.appendChild(oAddressField)
            }
            XUI.Xml.SetText(oAddressField, oUpdatedIframe.AddressField)
        } else if (oActive.className == "webresource") {
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Url", null), oUpdatedIframe.Url);
            var oAltText = XUI.Xml.SelectSingleNode(oParameters, "AltText", null);
            if (oUpdatedIframe.AltText != null && oUpdatedIframe.AltText.length > 0) {
                if (oAltText == null)
                    oAltText = Mscrm.FormEditorVariables.formXml.createElement("AltText");
                oParameters.appendChild(oAltText);
                XUI.Xml.SetText(oAltText, oUpdatedIframe.AltText)
            } else
                oAltText != null &&
                    oParameters.removeChild(oAltText);
            var oSizeType = XUI.Xml.SelectSingleNode(oParameters, "SizeType", null);
            if (oUpdatedIframe.SizeType != null && oUpdatedIframe.SizeType.length > 0) {
                if (oSizeType == null)
                    oSizeType = Mscrm.FormEditorVariables.formXml.createElement("SizeType");
                oParameters.appendChild(oSizeType);
                XUI.Xml.SetText(oSizeType, oUpdatedIframe.SizeType)
            } else
                oSizeType != null &&
                    oParameters.removeChild(oSizeType);
            var oShowInROF = XUI.Xml.SelectSingleNode(oParameters, "ShowInROF", null);
            if (oUpdatedIframe.ShowInROF != null) {
                if (oShowInROF == null)
                    oShowInROF = Mscrm.FormEditorVariables.formXml.createElement("ShowInROF");
                oParameters.appendChild(oShowInROF);
                XUI.Xml.SetText(oShowInROF, oUpdatedIframe.ShowInROF.toString())
            } else
                oShowInROF != null &&
                    oParameters.removeChild(oShowInROF);
            var oWidth = XUI.Xml.SelectSingleNode(oParameters, "Width", null);
            if (oUpdatedIframe.Width != null && oUpdatedIframe.Width.length > 0) {
                if (oWidth == null)
                    oWidth = Mscrm.FormEditorVariables.formXml.createElement("Width");
                oParameters.appendChild(oWidth);
                XUI.Xml.SetText(oWidth, oUpdatedIframe.Width)
            } else
                oWidth != null &&
                    oParameters.removeChild(oWidth);
            var oHeight = XUI.Xml.SelectSingleNode(oParameters, "Height", null);
            if (oUpdatedIframe.Height != null && oUpdatedIframe.Height.length > 0) {
                if (oHeight == null)
                    oHeight = Mscrm.FormEditorVariables.formXml.createElement("Height");
                oParameters.appendChild(oHeight);
                XUI.Xml.SetText(oHeight, oUpdatedIframe.Height)
            } else
                oHeight != null &&
                    oParameters.removeChild(oHeight);
            var oCustomParameter = XUI.Xml.SelectSingleNode(oParameters, "Data", null);
            if (!IsNull(oUpdatedIframe.CustomParameter) && oUpdatedIframe.CustomParameter.length > 0) {
                if (IsNull(oCustomParameter))
                    oCustomParameter = Mscrm.FormEditorVariables.formXml.createElement("Data");
                oParameters.appendChild(oCustomParameter);
                XUI.Xml.SetText(oCustomParameter, oUpdatedIframe.CustomParameter)
            } else
                !IsNull(oCustomParameter) &&
                    oParameters.removeChild(oCustomParameter);
            var oVerticalAlignment = XUI.Xml.SelectSingleNode(oParameters, "VerticalAlignment", null);
            if (!IsNull(oUpdatedIframe.VerticalAlignment) && oUpdatedIframe.VerticalAlignment.length > 0) {
                if (IsNull(oVerticalAlignment))
                    oVerticalAlignment = Mscrm.FormEditorVariables.formXml.createElement("VerticalAlignment");
                oParameters.appendChild(oVerticalAlignment);
                XUI.Xml.SetText(oVerticalAlignment, oUpdatedIframe.VerticalAlignment)
            } else
                !IsNull(oVerticalAlignment) &&
                    oParameters.removeChild(oVerticalAlignment);
            var oHorizontalAlignment = XUI.Xml.SelectSingleNode(oParameters, "HorizontalAlignment", null);
            if (!IsNull(oUpdatedIframe.HorizontalAlignment) && oUpdatedIframe.HorizontalAlignment.length > 0) {
                if (IsNull(oHorizontalAlignment))
                    oHorizontalAlignment = Mscrm.FormEditorVariables.formXml.createElement("HorizontalAlignment");
                oParameters.appendChild(oHorizontalAlignment);
                XUI.Xml.SetText(oHorizontalAlignment, oUpdatedIframe.HorizontalAlignment)
            } else
                !IsNull(oHorizontalAlignment) &&
                    oParameters.removeChild(oHorizontalAlignment);
            var oPassParam = XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null);
            if (oUpdatedIframe.PassParams != null && oUpdatedIframe.PassParams.toString().length > 0) {
                if (oPassParam == null)
                    oPassParam = Mscrm.FormEditorVariables.formXml.createElement("PassParameters");
                oParameters.appendChild(oPassParam);
                XUI.Xml.SetText(oPassParam, oUpdatedIframe.PassParams.toString())
            } else
                oPassParam != null &&
                    oParameters.removeChild(oPassParam);
            var oShowOnMobileClient = XUI.Xml.SelectSingleNode(oParameters, "ShowOnMobileClient", null);
            if (oUpdatedIframe.ShowOnMobileClient != null && oUpdatedIframe.ShowOnMobileClient.toString().length > 0) {
                if (oShowOnMobileClient == null)
                    oShowOnMobileClient = Mscrm.FormEditorVariables.formXml.createElement("ShowOnMobileClient");
                oParameters.appendChild(oShowOnMobileClient);
                XUI.Xml.SetText(oShowOnMobileClient, oUpdatedIframe.ShowOnMobileClient.toString())
            } else
                oShowOnMobileClient != null &&
                    oParameters.removeChild(oShowOnMobileClient);
            var oSecurityParam = XUI.Xml.SelectSingleNode(oParameters, "Security", null);
            if (oUpdatedIframe.Secure != null && oUpdatedIframe.Secure.toString().length > 0) {
                if (oSecurityParam == null)
                    oSecurityParam = Mscrm.FormEditorVariables.formXml.createElement("Security");
                oParameters.appendChild(oSecurityParam);
                XUI.Xml.SetText(oSecurityParam, oUpdatedIframe.Secure.toString())
            } else
                oSecurityParam != null &&
                    oParameters.removeChild(oSecurityParam);
            var oScrollingParam = XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null);
            if (oUpdatedIframe.Scrolling != null && oUpdatedIframe.Scrolling.length > 0) {
                if (oScrollingParam == null)
                    oScrollingParam = Mscrm.FormEditorVariables.formXml.createElement("Scrolling");
                oParameters.appendChild(oScrollingParam);
                XUI.Xml.SetText(oScrollingParam, oUpdatedIframe.Scrolling)
            } else
                oScrollingParam != null &&
                    oParameters.removeChild(oScrollingParam);
            var oBorderParam = XUI.Xml.SelectSingleNode(oParameters, "Border", null);
            if (oUpdatedIframe.Scrolling != null && oUpdatedIframe.Scrolling.length > 0) {
                if (oBorderParam == null)
                    oBorderParam = Mscrm.FormEditorVariables.formXml.createElement("Border");
                oParameters.appendChild(oBorderParam);
                XUI.Xml.SetText(oBorderParam, oUpdatedIframe.Border.toString())
            } else
                oBorderParam != null &&
                    oParameters.removeChild(oBorderParam);
            var oWebResourceIdParam = XUI.Xml.SelectSingleNode(oParameters, "WebResourceId", null);
            if (!IsNull(oUpdatedIframe.WebResourceId) && oUpdatedIframe.WebResourceId.length > 0) {
                if (IsNull(oWebResourceIdParam))
                    oWebResourceIdParam = Mscrm.FormEditorVariables.formXml.createElement("WebResourceId");
                oParameters.appendChild(oWebResourceIdParam);
                XUI.Xml.SetText(oWebResourceIdParam, oUpdatedIframe.WebResourceId)
            } else
                !IsNull(oWebResourceIdParam) &&
                    oParameters.removeChild(oWebResourceIdParam)
        } else {
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Url", null), oUpdatedIframe.Url);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "PassParameters", null),
                oUpdatedIframe.PassParams.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Security", null), oUpdatedIframe.Secure.toString());
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Scrolling", null), oUpdatedIframe.Scrolling);
            XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, "Border", null), oUpdatedIframe.Border.toString());
            var showOnMobileClientNode = XUI.Xml.SelectSingleNode(oParameters, "ShowOnMobileClient", null);
            showOnMobileClientNode != null &&
                XUI.Xml.SetText(showOnMobileClientNode, oUpdatedIframe.ShowOnMobileClient.toString())
        }
        var formXMLPath = "/entity/form/tabs/tab/columns/column/sections/section/rows";
        if (Mscrm.FormEditorVariables.fieldExpIsFor != "section")
            formXMLPath = "/entity/form/" + Mscrm.FormEditorVariables.fieldExpIsFor + "/rows";
        PersistLocalizedNodes(Mscrm.FormEditorVariables.formXml,
            formXMLPath + "/row/cell[@id = '" + oActive.id + "']/labels/label",
            oUpdatedIframe.Labels);
        oCell.setAttribute("showlabel", oUpdatedIframe.ShowLabel.toString());
        Mscrm.FormEditorVariables.fieldExpIsFor === "section" &&
            UpdateIframeDependencies(oCell, oUpdatedIframe);
        if (Mscrm.FormEditorVariables.fieldExpIsFor === "section")
            if (oIframe.Auto != oUpdatedIframe.Auto) {
                oCell.setAttribute("auto", oUpdatedIframe.Auto.toString());
                oUpdatedIframe.Auto &&
                    ModifyOtherAutoExpandingFieldIfRequired(oCell)
            }
        setAttributeIfNotDefaultValue(oCell, "visible", oUpdatedIframe.Visible.toString(), "true");
        if (oIframe.RowSpan != oUpdatedIframe.RowSpan) {
            Mscrm.FieldPropertiesUtils.adjustFormXmlForRowSpanChange(oCell, oIframe.RowSpan, oUpdatedIframe.RowSpan);
            oCell.setAttribute("rowspan", oUpdatedIframe.RowSpan.toString())
        }
        if (fRefreshFormEditor) {
            var scrollTop = $get("editorDiv").scrollTop;
            RefreshFormEditorAndClick();
            SwitchFormSections(Mscrm.FormEditorVariables.fieldExpIsFor);
            $get("editorDiv").scrollTop = scrollTop
        } else {
            var bRefreshCellOnly = oIframe.ColSpan == oUpdatedIframe.ColSpan &&
                oIframe.RowSpan == oUpdatedIframe.RowSpan;
            RefreshCellHtml(oUpdatedIframe.TabName, oUpdatedIframe.SectionName, oActive.id, bRefreshCellOnly)
        }
    }
}

function updateTimerControlXML(oParameters, element, oUpdatedIframe) {
    if (XUI.Xml.SelectSingleNode(oParameters, element, null) == null) {
        if (oUpdatedIframe != null && oUpdatedIframe.length > 0) {
            var oName = Mscrm.FormEditorVariables.formXml.createElement(element);
            oParameters.appendChild(oName);
            XUI.Xml.SetText(oName, oUpdatedIframe)
        }
    } else if (oUpdatedIframe == null)
        oParameters.removeChild(XUI.Xml.SelectSingleNode(oParameters, element, null));
    else
        XUI.Xml.SetText(XUI.Xml.SelectSingleNode(oParameters, element, null), oUpdatedIframe)
}

function ChangeRowSpan(oCell, sFieldName, sOldRowSpan, sNewRowSpan, bAuto) {
    var iOldRowSpan = parseInt(sOldRowSpan, 10),
        iNewRowSpan = parseInt(sNewRowSpan, 10),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        bRefresh = false,
        tempLastRow = XUI.Html.DomUtils.GetNextSibling(oRow),
        oLastRow = oRow;
    while (tempLastRow != null && tempLastRow.childNodes.length == 0) {
        oLastRow = tempLastRow;
        tempLastRow = XUI.Html.DomUtils.GetNextSibling(tempLastRow)
    }
    if (layout == "varwidth") {
        if (iNewRowSpan > iOldRowSpan)
            for (var i = 0; i < iNewRowSpan - iOldRowSpan; i++) {
                oLastRow = Mscrm.FormEditorVariables.formXml.createElement("row");
                oRows.insertBefore(oLastRow, tempLastRow)
            }
        else
            for (var i = 0; i < iOldRowSpan - iNewRowSpan; i++)
                if (oLastRow != null && oLastRow.childNodes.length == 0) {
                    var deleteRow = oLastRow;
                    oLastRow = XUI.Html.DomUtils.GetPrevSibling(oLastRow);
                    oRows.removeChild(deleteRow)
                }
        if (bAuto)
            oSection.setAttribute("height", "auto");
        else {
            oLastRow.removeAttribute("height");
            XUI.Xml.SelectSingleNode(oSection, "rows/row/cell[@auto = 'true']", null) == null &&
                oSection.removeAttribute("height")
        }
    } else {
        CreateSectionSchema(sectionName, oRows, columns);
        var bChanged = ChangeRowSpanInSchema(sFieldName, iOldRowSpan, iNewRowSpan);
        bChanged &&
            RegenerateXmlFromSchema(oRows)
    }
    oCell.setAttribute("rowspan", iNewRowSpan)
}

function AddCellToFormXml(oRows, oCell, iRowSpan, bCanSpanColumn, bAuto) {
    Mscrm.DragDropUtils.addPlaceHolders(oRows);
    if (iRowSpan != 0)
        oCell.setAttribute("rowspan", iRowSpan);
    else
        iRowSpan = 1;
    var oSection = oRows.parentNode,
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        maxColumns = columns.length,
        icolSpan = parseInt(oCell.getAttribute("colspan"), 10),
        bInserted = false,
        rowCount = 0,
        insertPosition = 0;
    bCanSpanColumn &&
        oCell.setAttribute("colspan", "2");
    var lastRow = XUI.Html.DomUtils.GetLastChild(oRows);
    if (lastRow != null) {
        var i = 0,
            colsOccupied = 0,
            colsRequired = 0,
            bInsertRow = true,
            bCellInserted = false;
        XUI.Html.DomUtils.ForEachChild(lastRow,
            function(cellInLastRow) {
                var colSpan = cellInLastRow.getAttribute("colspan"),
                    cellId = XUI.Xml.SelectSingleNode(cellInLastRow, "control", null).getAttribute("id");
                if (cellId.startsWith("spacer_System") && icolSpan == 1 && iRowSpan == 1) {
                    var refChild = XUI.Html.DomUtils.GetNextSibling(cellInLastRow);
                    XUI.Html.DomUtils.GetLastChild(oRows).removeChild(cellInLastRow);
                    XUI.Html.DomUtils.GetLastChild(oRows).insertBefore(oCell, refChild);
                    bCellInserted = true;
                    bInsertRow = false;
                    return true
                } else if (colSpan === null)
                    colsOccupied++;
                else
                    colsOccupied += colSpan
            });
        if (!bCellInserted) {
            var cellColSpan = oCell.getAttribute("colspan");
            if (cellColSpan == null)
                colsRequired = 1;
            else
                colsRequired += cellColSpan;
            if (maxColumns - colsOccupied < colsRequired)
                bInsertRow = true;
            else {
                XUI.Html.DomUtils.GetLastChild(oRows).appendChild(oCell);
                bInsertRow = false
            }
            if (bInsertRow)
                for (var iColSpan = parseInt(oCell.getAttribute("colspan"), 10),
                    j,
                    i = 0;
                    i < iRowSpan;
                    i++) {
                    var oRow = Mscrm.FormEditorVariables.formXml.createElement("row");
                    oRows.appendChild(oRow);
                    i === 0 &&
                        oRow.appendChild(oCell);
                    for (j = iColSpan; j < maxColumns; j++)
                        oRow.appendChild(Mscrm.DragDropUtils.createSystemSpacerXml())
                }
        }
        bAuto &&
            oSection.setAttribute("height", "auto");
        Mscrm.DragDropUtils.removePlaceHolders(oRows)
    }
}

function GetNextCell(oRow, position) {
    var oCell = oRow.childNodes[position];
    while (oCell == null && position >= 0)
        oCell = oRow.childNodes[position--];
    return oCell
}

function RemoveFieldXml(oActive) {
    var oCell = Mscrm.DragDropUtils.getCellNodeFromId(oActive.id),
        oRow = oCell.parentNode,
        oRows = oRow.parentNode,
        oSection = oRows.parentNode,
        layout = oSection.getAttribute("layout"),
        columns = oSection.getAttribute("columns"),
        sectionName = oSection.getAttribute("name"),
        iRowSpan = GetRowSpan(oCell),
        iColSpan = GetColSpan(oCell);
    if (iColSpan == 2) {
        for (var i = 0; i < iRowSpan - 1; i++) {
            var nextSibling = XUI.Html.DomUtils.GetNextSibling(oRow);
            nextSibling != null &&
                oRows.removeChild(nextSibling)
        }
        oRows.removeChild(oRow);
        XUI.Xml.SelectSingleNode(oRows, "row/cell[@auto='true']", null) == null &&
            oSection.removeAttribute("height")
    } else {
        var insertPosition = XUI.Html.DomUtils.GetNextSibling(oCell) != null ? 0 : 1,
            nextRow = XUI.Html.DomUtils.GetNextSibling(oRow);
        oRow.removeChild(oCell);
        var maxColumns = columns.length;
        while (nextRow != null) {
            var nextCell = GetNextCell(nextRow, insertPosition),
                nextRowSpan = GetRowSpan(nextCell);
            if (GetColSpan(nextCell) == 2) {
                if (oRow != null && XUI.Xml.SelectSingleNode(oRow, "cell/control", null) == null) {
                    oRows.removeChild(oRow);
                    oRow = null
                }
                break
            }
            oRow.insertBefore(nextRow.removeChild(nextCell), oRow.childNodes[insertPosition]);
            for (var i = 0; i < nextRowSpan; i++) {
                oRow = XUI.Html.DomUtils.GetNextSibling(oRow);
                nextRow = XUI.Html.DomUtils.GetNextSibling(nextRow)
            }
        }
        if (oRow != null) {
            oCell = Mscrm.FormEditorVariables.formXml.createElement("cell");
            oCell.appendChild(Mscrm.FormEditorVariables.formXml.createElement("labels"));
            oCell.setAttribute("showlabel", "true");
            oCell.setAttribute("rowspan", "1");
            oCell.setAttribute("colspan", iColSpan);
            oRow.insertBefore(oCell, oRow.childNodes[insertPosition])
        }
        var deleteRow = XUI.Html.DomUtils.GetLastChild(oRows);
        while (deleteRow != null &&
            deleteRow.childNodes.length == maxColumns &&
            XUI.Xml.SelectSingleNode(deleteRow, "cell/control", null) == null) {
            oRows.removeChild(deleteRow);
            deleteRow = XUI.Html.DomUtils.GetLastChild(oRows)
        }
    }
}

function HandleAfterColSpanReduced(oCell, domElem, iUpdatedColSpan, iOriginalColSpan) {
    Mscrm.DragDropUtils.addPlaceHolders(oCell.parentNode.parentNode);
    var currentElem = Mscrm.DragDropUtils.createElementObject(domElem);
    Mscrm.DragDropUtils.removePlaceHolders(oCell.parentNode.parentNode);
    Mscrm.DragDropUtils.pullUpIfRequired(currentElem);
    currentElem.set_colSpan(iOriginalColSpan - iUpdatedColSpan);
    currentElem.get_elementPosition().set_column(currentElem.get_elementPosition().get_column() + iUpdatedColSpan);
    Mscrm.DragDropUtils.pullUpIfRequired(currentElem);
    Mscrm.DragDropUtils.removeSystemSpacerRows(oCell.parentNode.parentNode)
}

function HandleAfterColSpanReduced(oCell, domElem, iUpdatedColSpan, iOriginalColSpan) {
    Mscrm.DragDropUtils.addPlaceHolders(oCell.parentNode.parentNode);
    var currentElem = Mscrm.DragDropUtils.createElementObject(domElem);
    Mscrm.DragDropUtils.removePlaceHolders(oCell.parentNode.parentNode);
    Mscrm.DragDropUtils.pullUpIfRequired(currentElem);
    currentElem.set_colSpan(iOriginalColSpan - iUpdatedColSpan);
    currentElem.get_elementPosition().set_column(currentElem.get_elementPosition().get_column() + iUpdatedColSpan);
    Mscrm.DragDropUtils.pullUpIfRequired(currentElem);
    Mscrm.DragDropUtils.removeSystemSpacerRows(oCell.parentNode.parentNode)
}

function IncreaseWidth() {
    Mscrm.ResizeUtils.updateColSpan(_oActive, true)
}

function DecreaseWidth() {
    Mscrm.ResizeUtils.updateColSpan(_oActive, false)
}

function CheckAndUpdateColSpan(oCell, originalColSpan, updatedColSpan) {
    if (originalColSpan != updatedColSpan) {
        var xmlAdjusted = Mscrm.FieldPropertiesUtils
            .adjustFormXmlForColSpanChange(oCell, originalColSpan, updatedColSpan);
        if (xmlAdjusted) {
            oCell.setAttribute("colspan", updatedColSpan.toString());
            if (updatedColSpan < originalColSpan) {
                var elemIdInHTML = oCell.getAttribute("id"),
                    domElem = document.getElementById(elemIdInHTML);
                HandleAfterColSpanReduced(oCell, domElem, updatedColSpan, originalColSpan)
            }
            return true
        } else
            return false
    }
    return true
}

function AddSubgridCustomControlSnippet(oParameters, oCustomControlSnippet, sCustomControlUniqueId) {
    var bNeedChangeClassId = false;
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) &&
        oCustomControlSnippet != null) {
        var formXMLDoc = Mscrm.FormEditorVariables.formXml,
            rootnode = XUI.Xml.SelectSingleNode(formXMLDoc, "entity/form", null);
        if (IsNull(XUI.Xml.SelectSingleNode(formXMLDoc, "entity/form/controlDescriptions", null))) {
            controlDescriptionsTagXmlNode = formXMLDoc.createElement("controlDescriptions");
            rootnode.appendChild(controlDescriptionsTagXmlNode)
        } else
            controlDescriptionsTagXmlNode = XUI.Xml
                .SelectSingleNode(formXMLDoc, "entity/form/controlDescriptions", null);
        var controlDescriptionInSnippet = XUI.Xml.SelectSingleNode(oCustomControlSnippet, "//controlDescription", null);
        if (controlDescriptionInSnippet != null) {
            bNeedChangeClassId = true;
            if (isOutlookHostedWindow()) {
                var controlDescriptionInSnippetDoc = XUI.Xml
                    .LoadXml(XUI.Xml.XMLSerializer.serializeToString(controlDescriptionInSnippet));
                controlDescriptionsTagXmlNode.appendChild(controlDescriptionInSnippetDoc.documentElement)
            } else
                controlDescriptionsTagXmlNode.appendChild(controlDescriptionInSnippet);
            var defaultControlNodes = XUI.Xml.SelectNodes(formXMLDoc,
                "entity/form/controlDescriptions/controlDescription[@forControl='" +
                sCustomControlUniqueId +
                "']/customControl[@id='" +
                _ControlClassIds.subgrid +
                "']",
                null);
            if (defaultControlNodes != null)
                for (var i = 0; i < defaultControlNodes.length; i++) {
                    var parameterXMLstring = XUI.Xml.XMLSerializer.serializeToString(oParameters),
                        newParameterParentDoc = XUI.Xml.LoadXml(parameterXMLstring);
                    defaultControlNodes[i].firstChild != null &&
                        defaultControlNodes[i].removeChild(defaultControlNodes[i].firstChild);
                    defaultControlNodes[i].appendChild(newParameterParentDoc.firstChild)
                }
        }
    }
    return bNeedChangeClassId
}

function DeleteExistingSubgridControlSnippet(oControl) {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile)) {
        var oldSubgridControlUniqueId = oControl.getAttribute("uniqueid"),
            controlDecriptionNode = XUI.Xml
                .SelectSingleNode(Mscrm.FormEditorVariables.formXml,
                    "entity/form/controlDescriptions/controlDescription[@forControl='" +
                    oldSubgridControlUniqueId +
                    "']",
                    null);
        if (controlDecriptionNode != null) {
            var parentControlDescriptionsNode = controlDecriptionNode.parentNode;
            parentControlDescriptionsNode.removeChild(controlDecriptionNode)
        }
    }
    return
}

function ProcessCustomControlUniqueId(oControl) {
    var sCustomControlUniqueId = oControl.getAttribute("uniqueid");
    if (IsNull(sCustomControlUniqueId)) {
        sCustomControlUniqueId = createGuid();
        oControl.setAttribute("uniqueid", sCustomControlUniqueId)
    }
    return sCustomControlUniqueId
}

function IncreaseHeight() {
    Mscrm.ResizeUtils.updateRowSpan(_oActive, true)
}

function DecreaseHeight() {
    Mscrm.ResizeUtils.updateRowSpan(_oActive, false)
}

var _subGridDefaults = {
        iRecPerPage: 4,
        bEnableViewPicker: false,
        bEnableQuickFind: false,
        bEnableJumpBar: false,
        bChartGridMode: "All",
        sGridUIMode: "List",
        bEnableChartPicker: true,
        iDialogWidth: 470,
        iDialogHeight: 660
    },
    _lookupDialogParentDefaults = { iDialogWidth: 590, iDialogHeight: 660 },
    _socialInsightDefaults = { iDialogWidth: 700, iDialogHeight: 560 },
    _timerControlDefaults = { iDialogWidth: 625, iDialogHeight: 560 },
    _kmControlDefaults = { iDialogWidth: 470, iDialogHeight: 660 },
    _orgInsightsDefaults = { iDialogWidth: 700, iDialogHeight: 560 }