
var _oMessages = { sCloseAlert: LOCID_FORMS_SAVE_CONFIRM_TITLE },
    _oConst = {
        text: "text",
        $none: "$none",
        none: "none",
        block: "block",
        sInvalidSchemaNameChars: "[^A-Za-z0-9_]",
        sAttributeSchemaNameFormat: "{0}Id",
        sRelationshipEditorUrlFormat:
            "/tools/systemcustomization/relationships/manageRelationship.aspx?entityRole={0}&entityRelationshipId={1}&entityId={2}",
        sInformationPageId: "divInformation",
        sMappingsPageId: "divMappings"
    },
    _bSaving = false,
    _sInputXml = "",
    _txtSchemaName,
    _selType;
Sys.Application.add_load(ManageRelationshipJsWindowOnLoad);
Sys.Application.add_unload(ManageRelationshipJsWindowOnUnLoad);

function ManageRelationshipJsWindowOnLoad() {
    !_bCreate &&
        window.focus();
    _txtSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtSchemaName");
    _selType = Mscrm.FormControlInputBehavior.GetBehavior("selType");
    initControls();
    _sInputXml = getRelationshipXml();
    loadPage(_oConst.sInformationPageId);
    try {
        if (_bManyToMany) {
            var oCEDisplayOption = Mscrm.FormControlInputBehavior.GetBehavior("selCEDisplayOption"),
                oCEName = Mscrm.FormControlInputBehavior.GetBehavior("selCEName"),
                oOEDisplayOption = Mscrm.FormControlInputBehavior.GetBehavior("selOEDisplayOption"),
                oIntersectEntityName = Mscrm.FormControlInputBehavior.GetBehavior("txtIntersectEntityName");
            if (oCEDisplayOption != null &&
                !oCEDisplayOption.get_disabled() &&
                oCEDisplayOption.getElement().style.display != "none")
                oCEDisplayOption.setFocus();
            else if (oCEName != null && !oCEName.get_disabled() && oCEName.getElement().style.display != "none")
                oCEName.setFocus();
            else if (oOEDisplayOption != null &&
                !oOEDisplayOption.get_disabled() &&
                oOEDisplayOption.getElement().style.display != "none")
                oOEDisplayOption.setFocus();
            else if (_txtSchemaName != null &&
                !_txtSchemaName.get_disabled() &&
                _txtSchemaName.get_element().style.display != "none")
                _txtSchemaName.setFocus();
            else
                oIntersectEntityName != null &&
                    !oIntersectEntityName.get_disabled() &&
                    oIntersectEntityName.getElement().style.display != "none" &&
                    oIntersectEntityName.setFocus()
        } else {
            var oReferencedEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencedEntityName"),
                oReferencingEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencingEntityName"),
                oReferencedInstanceName = Mscrm.FormControlInputBehavior.GetBehavior("txtReferencedInstanceName"),
                oAttributeSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeSchemaName"),
                oReqLevel = Mscrm.FormControlInputBehavior.GetBehavior("selReqLevel"),
                oDisplayOption = Mscrm.FormControlInputBehavior.GetBehavior("selDisplayOption"),
                oAttributeSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeSchemaName");
            if (oReferencedEntityName != null &&
                !oReferencedEntityName.get_disabled() &&
                oReferencedEntityName.getElement().style.display != "none")
                oReferencedEntityName.setFocus();
            else if (oReferencingEntityName != null &&
                !oReferencingEntityName.get_disabled() &&
                oReferencingEntityName.getElement().style.display != "none")
                oReferencingEntityName.setFocus();
            else if (_txtSchemaName != null &&
                !_txtSchemaName.get_disabled() &&
                _txtSchemaName.getElement().style.display != "none")
                _txtSchemaName.setFocus();
            else if (oReferencedInstanceName != null &&
                !oReferencedInstanceName.get_disabled() &&
                oReferencedInstanceName.getElement().style.display != "none")
                oReferencedInstanceName.setFocus();
            else if (oAttributeSchemaName != null &&
                !oAttributeSchemaName.get_disabled() &&
                oAttributeSchemaName.getElement().style.display != "none")
                oAttributeSchemaName.setFocus();
            else if (oReqLevel != null && !oReqLevel.get_disabled() && oReqLevel.getElement().style.display != "none")
                oReqLevel.setFocus();
            else if (oDisplayOption != null &&
                !oDisplayOption.get_disabled() &&
                oDisplayOption.getElement().style.display != "none")
                oDisplayOption.setFocus();
            else
                _selType != null &&
                    !_selType.get_disabled() &&
                    _selType.getElement().style.display != "none" &&
                    _selType.setFocus()
        }
    } catch (e) {
    }
    $addHandler(document, "keydown", ProcessKeyDown);
    attachWindowOnBeforeUnload(window_onbeforeunload)
}

function ManageRelationshipJsWindowOnUnLoad() {
    $removeHandler(document, "keydown", ProcessKeyDown)
}

function window_onbeforeunload(oEvent) {
    oEvent = oEvent.rawEvent;
    if (!_bSaving && isFormDirty())
        oEvent.returnValue = _oMessages.sCloseAlert
}

function initControls() {
    _bSaveCustomCascadeParams = _selType.get_dataValue() == _oCascadeTypes.sCustom;
    onEntityChange()
}

function _save() {
    saveRelationshipAction(false)
}

function _saveandclose() {
    saveRelationshipAction(true)
}

function _saveandnew() {
}

function CallbackParams(bClose, bReload, bRefreshGrid) {
    this.bClose = bClose;
    this.bReload = bReload;
    this.bRefreshGrid = bRefreshGrid
}

function remoteRelationshipCommandCallback(oResult, oCallbackParams) {
    if (oResult.Success) {
        if (oResult.RemoteCommand.Command == _oRelUtlConst.sCreateRelationshipCommand)
            _sEntityRelationshipId = oResult.ReturnValue;
        else if (oResult.RemoteCommand.Command == _oRelUtlConst.sDeleteRelationshipCommand)
            if (!IsNull(oResult.ReturnValue) && oResult.ReturnValue.Used) {
                showUsage(_oSCUConst.sRelationshipMode, oResult.ReturnValue);
                return true
            }
        if (oCallbackParams.bRefreshGrid)
            try {
                window.opener.$find("gridRelationships").Refresh()
            } catch (e) {
            }
        if (oCallbackParams.bClose) {
            closeWindow();
            return false
        }
        if (oCallbackParams.bReload) {
            var frmReload = $get("frmReloadId");
            frmReload.action = Mscrm.CrmUri
                .create(formatString(_oConst.sRelationshipEditorUrlFormat,
                    _sEntityRole,
                    _sEntityRelationshipId,
                    _sEntityId)).toString();
            frmReload.submit();
            return false
        }
    }
    _bSaving = false;
    return true
}

function saveRelationshipAction(bClose) {
    if (!_bSaving && validateParameters() && confirmHierarchicalRelationship()) {
        _bSaving = true;
        var sDataXml = getRelationshipXml(),
            oCallbackParams = new CallbackParams(bClose, true, true);
        if (_bCreate)
            createRelationship(sDataXml, remoteRelationshipCommandCallback, oCallbackParams);
        else if (isFormDirty())
            updateRelationship(sDataXml, remoteRelationshipCommandCallback, oCallbackParams);
        else if (bClose) {
            closeWindow();
            return
        } else
            _bSaving = false
    }
}

function deleteRelationshipAction() {
    var retval = DeleteFormRecord(Mscrm.EntityTypeCode.EntityRelationship, _sEntityRelationshipId);
    if (!IsNull(retval) && retval) {
        try {
            window.opener.$find("gridRelationships").Refresh()
        } catch (e) {
        }
        closeWindow()
    }
}

var _oVisiblePage = null;

function loadPage(sPageId) {
    var oPage = $get(sPageId);
    if (!IsNull(_oVisiblePage))
        _oVisiblePage.style.display = "none";
    _oVisiblePage = oPage;
    _oVisiblePage.style.display = "inline";
    if (sPageId != _oConst.sInformationPageId) {
        var oIFrameElement = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oPage));
        if (oIFrameElement.src.indexOf("/_static/blank.htm") > -1)
            oIFrameElement.src = oIFrameElement.getAttribute("url")
    }
}

function getRelationshipXml() {
    var oDataXml = createXmlDoc(_oTags.relationship);
    addTextXmlNode(oDataXml, _oTags.relationshipid, _sRelationshipId);
    addTextXmlNode(oDataXml, _oTags.entityrelationshipid, _sEntityRelationshipId);
    var schemaName = $get("txtSchemaName").value,
        txtPrefix = $get("txtPrefix");
    if (!IsNull(txtPrefix))
        schemaName = XUI.Html.GetText(txtPrefix) + schemaName;
    addTextXmlNode(oDataXml, _oTags.schemaname, schemaName);
    if (_bManyToMany) {
        addTextXmlNode(oDataXml, _oTags.manytomany, "true");
        var intersectEntityName = $get("txtIntersectEntityName").value,
            txtPrefix2 = $get("txtPrefix2");
        if (!IsNull(txtPrefix2))
            intersectEntityName = XUI.Html.GetText(txtPrefix2) + $get("txtIntersectEntityName").value;
        addTextXmlNode(oDataXml, _oTags.intersectentityname, intersectEntityName);
        addTextXmlNode(oDataXml,
            _oTags.currententityname,
            Mscrm.FormControlInputBehavior.GetBehavior("selCEName").get_dataValue());
        var oAssociatedMenuXml = addXmlNode(oDataXml, _oTags.associatedmenu);
        addControlDataValue(oAssociatedMenuXml, _oTags.displayoption, $get("selCEDisplayOption"));
        addControlDataValue(oAssociatedMenuXml, _oTags.displayarea, $get("selCEDisplayArea"));
        addControlDataValue(oAssociatedMenuXml, _oTags.navpaneorder, $get("txtCEDisplayOrder"));
        addControlDataValue(oAssociatedMenuXml, _oTags.customlabel, $get("txtCECustomLabel"));
        addTextXmlNode(oDataXml,
            _oTags.otherentityname,
            Mscrm.FormControlInputBehavior.GetBehavior("selOEName").get_dataValue());
        var oAssociatedMenuXml = addXmlNode(oDataXml, _oTags.associatedmenuotherentity);
        addControlDataValue(oAssociatedMenuXml, _oTags.displayoption, $get("selOEDisplayOption"));
        addControlDataValue(oAssociatedMenuXml, _oTags.displayarea, $get("selOEDisplayArea"));
        addControlDataValue(oAssociatedMenuXml, _oTags.navpaneorder, $get("txtOEDisplayOrder"));
        addControlDataValue(oAssociatedMenuXml, _oTags.customlabel, $get("txtOECustomLabel"))
    } else {
        addTextXmlNode(oDataXml, _oTags.manytomany, "false");
        var oReferencedEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencedEntityName");
        addTextXmlNode(oDataXml, _oTags.referencedentityname, oReferencedEntityName.get_dataValue());
        addControlDataValue(oDataXml, _oTags.referencedinstancename, $get("txtReferencedInstanceName"));
        var oReferencingEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencingEntityName");
        addTextXmlNode(oDataXml, _oTags.referencingentityname, oReferencingEntityName.get_dataValue());
        addControlDataValue(oDataXml, _oTags.reqlevel, $get("selReqLevel"));
        addControlDataValue(oDataXml, _oTags.attributeschemaname, $get("txtAttributeSchemaName"));
        if (!_selType.get_disabled()) {
            var oTypeXml = addXmlNode(oDataXml, _oTags.cascading);
            addControlDataValue(oTypeXml, _oTags.assign, $get("selCascadeAssign"), true);
            addControlDataValue(oTypeXml, _oTags.share, $get("selCascadeShare"), true);
            addControlDataValue(oTypeXml, _oTags.unshare, $get("selCascadeUnshare"), true);
            addControlDataValue(oTypeXml, _oTags.reparent, $get("selCascadeReparent"), true);
            if (_bCustom == true) {
                addControlDataValue(oTypeXml, _oTags.Delete, $get("selCascadeDelete"), true);
                addControlDataValue(oTypeXml, "rollupview", $get("selCascadeRollupView"))
            }
        }
        addControlDataValue(oDataXml, _oTags.description, $get("txtDescription"));
        var oAssociatedMenuXml = addXmlNode(oDataXml, _oTags.associatedmenu);
        addControlDataValue(oAssociatedMenuXml, _oTags.displayoption, $get("selDisplayOption"));
        addControlDataValue(oAssociatedMenuXml, _oTags.displayarea, $get("selDisplayArea"));
        addControlDataValue(oAssociatedMenuXml, _oTags.navpaneorder, $get("txtDisplayOrder"));
        addControlDataValue(oAssociatedMenuXml, _oTags.customlabel, $get("txtCustomLabel"))
    }
    addControlDataValue(oDataXml, _oTags.isvalidforadvancedfind, $get("selectIsValidForAdvancedFind"));
    addControlDataValue(oDataXml, _oTags.ishierarchical, $get("selectIsHierarchical"));
    return convertXmlDocToString(oDataXml)
}

function validateParameters() {
    var bValid = true;
    bValid = bValid && validateSchemaName($get("txtSchemaName"));
    if (_bManyToMany) {
        bValid = bValid && validateSchemaName($get("txtIntersectEntityName"));
        bValid = bValid && validateRequiredValue($get("txtCECustomLabel"));
        bValid = bValid && validateRequiredValue($get("selOEName"));
        bValid = bValid && validateRequiredValue($get("txtOECustomLabel"))
    } else {
        bValid = bValid && validateRequiredValue($get("selReferencedEntityName"));
        bValid = bValid && validateRequiredValue($get("selReferencingEntityName"));
        bValid = bValid && validateRequiredValue($get("txtReferencedInstanceName"));
        bValid = bValid && validateRequiredValue($get("selReqLevel"));
        bValid = bValid && validateSchemaName($get("txtAttributeSchemaName"));
        bValid = bValid && validateRequiredValue($get("selType"));
        bValid = bValid && validateRequiredValue($get("txtCustomLabel"))
    }
    return bValid
}

function confirmHierarchicalRelationship() {
    var oControl = $get("selectIsHierarchical");
    if (oControl == null)
        return true;
    var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id),
        isControlDisabled = ajaxControl.get_disabled(),
        newHierarchicalValue = ajaxControl.get_dataValue();
    if (_bManyToMany ||
        (_sExistingHierarchicalRelationship == null || _sExistingHierarchicalRelationship.length == 0) ||
        isControlDisabled)
        return true;
    if (_bCreate && newHierarchicalValue == "1")
        return confirm(LOCID_MANREL_CONFIRMHIRTURNON);
    if (!_bCreate) {
        var schemaName = _txtSchemaName.get_dataValue();
        if (_sExistingHierarchicalRelationship == schemaName && newHierarchicalValue == "0")
            return confirm(LOCID_MANREL_CONFIRMHIRTURNOFF);
        if (_sExistingHierarchicalRelationship != schemaName && newHierarchicalValue == "1")
            return confirm(LOCID_MANREL_CONFIRMHIRTURNON)
    }
    return true
}

function onReferencedInstanceNameChange() {
    var oReferencedInstanceName = Mscrm.FormControlInputBehavior.GetBehavior("txtReferencedInstanceName"),
        oAttributeSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeSchemaName"),
        txtAttributeSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtSchemaName");
    if (_bCreate &&
        (oReferencedInstanceName.get_dataValue() != null && oReferencedInstanceName.get_dataValue().length > 0) &&
        (oAttributeSchemaName.get_dataValue() == null || oAttributeSchemaName.get_dataValue().length == 0)) {
        var iNameMaxLen = oAttributeSchemaName.get_element().maxLength -
                formatString(_oConst.sAttributeSchemaNameFormat, "").length,
            regExp = new RegExp(_oConst.sInvalidSchemaNameChars, "g"),
            sName = oReferencedInstanceName.get_dataValue().replace(regExp, "").substr(0, iNameMaxLen);
        sName.length > 0 &&
            oAttributeSchemaName.set_dataValue(formatString(_oConst.sAttributeSchemaNameFormat, sName))
    }
}

function onEntityChange() {
    onTypeChange();
    var oReferencedEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencedEntityName"),
        oReferencingEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencingEntityName");
    createSchemaName(oReferencedEntityName.get_dataValue(), oReferencingEntityName.get_dataValue())
}

function onOtherEntityChange() {
    var selCEName = Mscrm.FormControlInputBehavior.GetBehavior("selCEName"),
        selOEName = Mscrm.FormControlInputBehavior.GetBehavior("selOEName");
    createSchemaName(selCEName.get_dataValue(), selOEName.get_dataValue());
    createIntersectEntityName()
}

var _bSaveCustomCascadeParams = false,
    _oCustomCascadeParams = {
        sAssign: _oCascadeLinkTypes.sCascade,
        sShare: _oCascadeLinkTypes.sCascade,
        sUnshare: _oCascadeLinkTypes.sCascade,
        sReparent: _oCascadeLinkTypes.sCascade,
        sMerge: _oCascadeLinkTypes.sCascade,
        sDelete: _oCascadeLinkTypes.sCascade
    };

function onTypeChange() {
    var oReferencedEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencedEntityName"),
        sReferencedEntityName = oReferencedEntityName.get_dataValue() == null
            ? _oConst.$none
            : oReferencedEntityName.get_dataValue(),
        oReferencingEntityName = Mscrm.FormControlInputBehavior.GetBehavior("selReferencingEntityName"),
        sReferencingEntityName = oReferencingEntityName.get_dataValue() == null
            ? _oConst.$none
            : oReferencingEntityName.get_dataValue(),
        selCascadeAssign = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeAssign"),
        selCascadeShare = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeShare"),
        selCascadeUnshare = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeUnshare"),
        selCascadeReparent = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeReparent"),
        selCascadeMerge = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeMerge"),
        selCascadeDelete = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeDelete"),
        selCascadeRollupView = Mscrm.FormControlInputBehavior.GetBehavior("selCascadeRollupView");
    if (_bSaveCustomCascadeParams) {
        _oCustomCascadeParams.sAssign = selCascadeAssign.get_dataValue();
        _oCustomCascadeParams.sShare = selCascadeShare.get_dataValue();
        _oCustomCascadeParams.sUnshare = selCascadeUnshare.get_dataValue();
        _oCustomCascadeParams.sReparent = selCascadeReparent.get_dataValue();
        _oCustomCascadeParams.sMerge = selCascadeMerge.get_dataValue();
        _oCustomCascadeParams.sDelete = selCascadeDelete.get_dataValue();
        _bSaveCustomCascadeParams = false
    }
    var oCascadeParams = null;
    switch (_selType.get_dataValue()) {
    case _oCascadeTypes.sParental:
        selCascadeAssign.set_dataValue(_oCascadeLinkTypes.sCascade);
        selCascadeShare.set_dataValue(_oCascadeLinkTypes.sCascade);
        selCascadeUnshare.set_dataValue(_oCascadeLinkTypes.sCascade);
        selCascadeReparent.set_dataValue(_oCascadeLinkTypes.sCascade);
        selCascadeMerge.set_dataValue(typeof _oMergeableEntities[sReferencedEntityName] != "undefined"
            ? _oCascadeLinkTypes.sCascade
            : _oCascadeLinkTypes.sNoCascade);
        _bCustom &&
            selCascadeDelete.set_dataValue(_oCascadeLinkTypes.sCascade);
        break;
    case _oCascadeTypes.sReferential:
        selCascadeAssign.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeShare.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeUnshare.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeReparent.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeMerge.set_dataValue(typeof _oMergeableEntities[sReferencedEntityName] != "undefined"
            ? _oCascadeLinkTypes.sCascade
            : _oCascadeLinkTypes.sNoCascade);
        selCascadeDelete.set_dataValue(_oCascadeLinkTypes.sRemoveLink);
        break;
    case _oCascadeTypes.sRestricted:
        selCascadeAssign.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeShare.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeUnshare.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeReparent.set_dataValue(_oCascadeLinkTypes.sNoCascade);
        selCascadeMerge.set_dataValue(typeof _oMergeableEntities[sReferencedEntityName] != "undefined"
            ? _oCascadeLinkTypes.sCascade
            : _oCascadeLinkTypes.sNoCascade);
        selCascadeDelete.set_dataValue(_oCascadeLinkTypes.sRestrict);
        break;
    case _oCascadeTypes.sCustom:
        selCascadeAssign.set_dataValue(_oCustomCascadeParams.sAssign);
        selCascadeShare.set_dataValue(_oCustomCascadeParams.sShare);
        selCascadeUnshare.set_dataValue(_oCustomCascadeParams.sUnshare);
        selCascadeReparent.set_dataValue(_oCustomCascadeParams.sReparent);
        selCascadeMerge.set_dataValue(typeof _oMergeableEntities[sReferencedEntityName] != "undefined"
            ? _oCascadeLinkTypes.sCascade
            : _oCascadeLinkTypes.sNoCascade);
        _bCustom &&
            selCascadeDelete.set_dataValue(_oCustomCascadeParams.sDelete);
        _bSaveCustomCascadeParams = true;
        break
    }
    var bDisabled = _selType.get_dataValue() != _oCascadeTypes.sCustom;
    selCascadeAssign.set_disabled(bDisabled);
    selCascadeShare.set_disabled(bDisabled);
    selCascadeUnshare.set_disabled(bDisabled);
    selCascadeReparent.set_disabled(bDisabled);
    selCascadeMerge.set_disabled(true);
    selCascadeDelete.set_disabled(bDisabled || !_bCustom);
    setSelCascadeRollupDisableState(selCascadeRollupView, sReferencedEntityName, sReferencingEntityName)
}

function setSelCascadeRollupDisableState(selCascadeRollupView, sReferencedEntityName, sReferencingEntityName) {
    if (!IsNull(selCascadeRollupView))
        if (!_bManyToMany &&
            _bCustom &&
            _bMode != 2 &&
            isValidRollupViewEntity(sReferencedEntityName) &&
            !IsNull(_oRollupableEntities) &&
            !IsNull(_oRollupableEntities[sReferencingEntityName]) &&
            _oRollupableEntities[sReferencingEntityName] == true)
            selCascadeRollupView.set_disabled(false);
        else
            selCascadeRollupView.set_disabled(true)
}

function isValidRollupViewEntity(entityName) {
    return entityName == Mscrm.InternalUtilities.EntityNames.Account ||
        entityName == Mscrm.InternalUtilities.EntityNames.Contact ||
        entityName == Mscrm.InternalUtilities.EntityNames.Opportunity
}

function onDisplayOptionChange(selDisplayOptionPar, selDisplayAreaPar, txtCustomLabelPar, txtDisplayOrderPar) {
    var selDisplayOptionParControl = Mscrm.FormControlInputBehavior.GetElementBehavior(selDisplayOptionPar),
        selDisplayAreaParControl = Mscrm.FormControlInputBehavior.GetElementBehavior(selDisplayAreaPar),
        txtCustomLabelParControl = Mscrm.FormControlInputBehavior.GetElementBehavior(txtCustomLabelPar),
        txtDisplayOrderParControl = Mscrm.FormControlInputBehavior.GetElementBehavior(txtDisplayOrderPar);
    switch (selDisplayOptionParControl.get_dataValue()) {
    case _oDisplayOptionTypes.sDoNotDisplay:
        selDisplayAreaParControl.set_disabled(true);
        txtCustomLabelParControl.set_disabled(true);
        txtDisplayOrderParControl.set_disabled(true);
        break;
    case _oDisplayOptionTypes.sUseCollectionName:
        selDisplayAreaParControl.set_disabled(false);
        txtCustomLabelParControl.set_disabled(true);
        txtDisplayOrderParControl.set_disabled(false);
        break;
    case _oDisplayOptionTypes.sUseLabel:
        selDisplayAreaParControl.set_disabled(false);
        txtCustomLabelParControl.set_disabled(false);
        txtDisplayOrderParControl.set_disabled(false);
        break
    }
}

function isFormDirty() {
    return _sInputXml != getRelationshipXml()
}

var _schemaNamePreviousValue = null;

function createSchemaName(sEntity1, sEntity2) {
    if (_bCreate &&
        (sEntity1 != null && sEntity1.length > 0) &&
        (sEntity2 != null && sEntity2.length > 0) &&
        (_txtSchemaName.get_dataValue() == null ||
            _txtSchemaName.get_dataValue().length == 0 ||
            _txtSchemaName.get_dataValue() == _schemaNamePreviousValue)) {
        _txtSchemaName.set_dataValue((sEntity1 + "_" + sEntity2).substr(0, _txtSchemaName.get_element().maxLength));
        _txtSchemaName.set_dataValue(_txtSchemaName.get_dataValue().toLowerCase());
        _schemaNamePreviousValue = _txtSchemaName.get_dataValue()
    }
}

var _intersectEntityNamePreviousValue = null;

function createIntersectEntityName() {
    var selCEName = Mscrm.FormControlInputBehavior.GetBehavior("selCEName"),
        selOEName = Mscrm.FormControlInputBehavior.GetBehavior("selOEName"),
        txtIntersectEntityName = Mscrm.FormControlInputBehavior.GetBehavior("txtIntersectEntityName");
    if (_bCreate &&
        (selCEName.get_dataValue() != null && selCEName.get_dataValue().length > 0) &&
        (selOEName.get_dataValue() != null && selOEName.get_dataValue().length > 0) &&
        (txtIntersectEntityName.get_dataValue() == null ||
            txtIntersectEntityName.get_dataValue().length == 0 ||
            txtIntersectEntityName.get_dataValue() == _intersectEntityNamePreviousValue)) {
        txtIntersectEntityName.set_dataValue((selCEName.get_dataValue() + "_" + selOEName.get_dataValue())
            .substr(0, txtIntersectEntityName.get_element().maxLength));
        txtIntersectEntityName.set_dataValue(txtIntersectEntityName.get_dataValue().toLowerCase());
        _intersectEntityNamePreviousValue = txtIntersectEntityName.get_dataValue()
    }
}