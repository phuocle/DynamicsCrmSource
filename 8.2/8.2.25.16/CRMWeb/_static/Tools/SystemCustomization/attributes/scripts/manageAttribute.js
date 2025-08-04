
var _oMessages = {sCloseAlert:LOCID_FORMS_SAVE_CONFIRM_TITLE},
    _oFormats = {sNone:"",sEmailBody:"emailbody",sTimeZone:"timezone",sLanguage:"language"},
    _oTypes = {sString:"nvarchar",sDateTime:"datetime",sBoolean:"bit",sMoney:"money",sInteger:"int",sFloat:"float",sPicklist:"picklist",sStatus:"status",sMemo:"ntext",sDecimal:"decimal",sLookup:"lookup",sOwner:"owner",sCustomer:"customer",sPrimaryKey:"primarykey",sImage:"image"},
    _oDataSources = {sCalculated:"Calculated",sPersistent:"Persistent",sRollup:"Rollup"},
    _oConst = {sInvalidSchemaNameChars:"[^A-Za-z0-9_]",sCreateAttributeUrlFormat:"/tools/systemcustomization/attributes/manageAttribute.aspx?entityId={0}",sUpdateAttributeUrlFormat:"/tools/systemcustomization/attributes/manageAttribute.aspx?attributeId={0}&entityId={1}&_bEdit={2}",sInformationPageId:"divInformation",sBusinessRulesPageId:"divBusinessRules",sLookupRelationshipEditorUrlFormat:"/tools/systemcustomization/relationships/managerelationship.aspx?attributeId={0}&entityId={1}",sRelationshipEditorUrlFormat:"/tools/systemcustomization/relationships/managerelationship.aspx?attributeId={0}&entityId={1}&referencedEntity={2}",sPicklistEditorUrlFormat:"/tools/systemcustomization/optionset/optionset.aspx?id={0}",sPblEditorUrlFormat:"/tools/systemcustomization/calculatedfields/manageCalculatedFields.aspx?BRlaunchpoint=AttributeEditor&attributeId={0}&entityId={1}",sRollUpEditorUrlFormat:"/tools/systemcustomization/RollupFields/manageRollupFields.aspx?BRlaunchpoint=AttributeEditor&attributeId={0}&entityId={1}",sLookupSchemaNameFormat:"{0}",sDynamic:"1",sDateOnly:"2",sStaticTimeInvariant:"3"},
    _bSaving = false,
    _sInputXml = "",
    _iOldPrecision = null,
    _bValidationDone = true,
    _bCanCreateLinkedAttribute = false,
    _sDisplayName = "",
    _isCurrentSelectedLookup = false,
    _aStates = [],
    _aStateLabels = [],
    _iCurrentState = -1,
    _iNextStatusValue,
    _iNextStatusValueOriginal,
    _flsOriginalChecked,
    _flsOriginalDisabled,
    _txtDisplayName,
    _selMoneyPrecision,
    _txtSchemaName,
    _selType,
    _ledtStatusValues,
    _selectOptionSet,
    _ledtPicklistValues,
    _selectTarget,
    _txtNewAttributeName,
    _selectLinkedAttribute,
    _isStatusReasonTransitionEnabled,
    _dateTimeBehavior,
    dataSourceSel,
    dataSourceOptions,
    sFormatOptions,
    sIntFormat,
    sIntFormatSelectedValue;
Sys.Application.add_load(ManageAttributeJsWindowOnLoad);
Sys.Application.add_unload(ManageAttributeJsWindowOnUnLoad);
function ManageAttributeJsWindowOnLoad()
{
    !_bCreate && !_bEdit && 
        window.focus();
    _txtDisplayName = Mscrm.FormControlInputBehavior.GetBehavior("txtDisplayName");
    _selMoneyPrecision = Mscrm.FormControlInputBehavior.GetBehavior("selMoneyPrecision");
    _txtSchemaName = Mscrm.FormControlInputBehavior.GetBehavior("txtSchemaName");
    _selType = Mscrm.FormControlInputBehavior.GetBehavior("selType");
    _ledtStatusValues = $find("ledtStatusValues");
    _selectOptionSet = Mscrm.FormControlInputBehavior.GetBehavior("selectOptionSet");
    _ledtPicklistValues = $find("ledtPicklistValues");
    _selectTarget = Mscrm.FormControlInputBehavior.GetBehavior("selectTarget");
    _txtNewAttributeName = Mscrm.FormControlInputBehavior.GetBehavior("txtNewAttributeName");
    _selectLinkedAttribute = $get("selectLinkedAttribute");
    _dateTimeBehavior = $get("selDatetimeBehavior").value;
    loadStates();
    initControls();
    if(_linkedAttributeRequired && (_bIsCustomAttribute == "True" || _bCreate))
    {
        onFieldSecurityChange();
        $addHandler($get("rdIsFieldSecurityEnabled"),"change",onFieldSecurityChange)
    }
    _sInputXml = getAttributeXml();
    _sDisplayName = _txtDisplayName.get_dataValue();
    loadPage(_oConst.sInformationPageId);
    !_txtDisplayName.get_disabled() && 
        _txtDisplayName.setFocus();
    _iOldPrecision = Number(_selMoneyPrecision.get_dataValue());
    $addHandler(document,"keydown",ProcessKeyDown);
    $addHandler(window,"resize",AdjustDivContainerHeightByOffset);
    attachWindowOnBeforeUnload(window_onbeforeunload);
    AdjustDivContainerHeightByOffset();
    _bEdit && !isNullOrEmptyString(_sAttributeId) && 
        OpenFormulaEditor();
    dataSourceSel = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource");
    if(!isNull(dataSourceSel))
        dataSourceOptions = dataSourceSel.get_options();
    sIntFormat = Mscrm.FormControlInputBehavior.GetBehavior("selIntFormat");
    if(!isNull(sIntFormat))
        sFormatOptions = sIntFormat.get_options();
    filterDataSourceOnTypeChange()
}
function ManageAttributeJsWindowOnUnLoad()
{
    $removeHandler(document,"keydown",ProcessKeyDown);
    $removeHandler(window,"resize",AdjustDivContainerHeightByOffset)
}
function _save()
{
    saveAttributeAction(false,false)
}
function _saveandclose()
{
    saveAttributeAction(true,false)
}
function _saveandnew()
{
    saveAttributeAction(false,true)
}
function window_onbeforeunload(oEvent)
{
    oEvent = oEvent.rawEvent;
    if(!_bSaving && isFormDirty())
        oEvent.returnValue = _oMessages.sCloseAlert
}
function initControls()
{
    onTypeChange();
    onMemoFormatChange();
    onIntFormatChange();
    onStringFormatChange();
    onStateChange()
}
function loadStates(statesXml)
{
    if(statesXml == null)
        statesXml = XUI.Html.GetText($get("divStatesXml"));
    if(isNullOrEmptyString(statesXml))
        return;
    var oStatesXmlDoc = XUI.Xml.LoadXml(statesXml),
        oStatesNode = oStatesXmlDoc.documentElement,
        iStateNode,
        oStateNode,
        oStateNodeList,
        iState,
        sStatuses;
    if(!IsNull(oStatesNode))
    {
        _iNextStatusValue = Number(oStatesNode.attributes.getNamedItem("nextstatus").value);
        _iNextStatusValueOriginal = _iNextStatusValue;
        oStateNodeList = XUI.Xml.SelectNodes(oStatesNode,"state",null);
        for(iStateNode = 0; iStateNode < oStateNodeList.length; iStateNode++)
        {
            oStateNode = oStateNodeList[iStateNode];
            iState = Number(oStateNode.attributes.getNamedItem("value").value);
            sStatuses = XUI.Xml.XMLSerializer.serializeToString(XUI.Xml.SelectSingleNode(oStateNode,"values",null));
            _aStateLabels[iState] = XUI.Xml.GetText(oStateNode.attributes.getNamedItem("label"));
            _aStates[iState] = sStatuses
        }
    }
}
function CallbackParams(bClose,bReload,bRefreshGrid,bNew)
{
    this.bClose = bClose;
    this.bReload = bReload;
    this.bRefreshGrid = bRefreshGrid;
    this.bNew = bNew
}
function remoteAttributeCommandCallback(oResult,oCallbackParams)
{
    if(oResult.Success)
    {
        if(oResult.RemoteCommand.Command == _oAttrUtlConst.sCreateAttributeCommand)
            _sAttributeId = oResult.ReturnValue;
        else
            if(oResult.RemoteCommand.Command == _oAttrUtlConst.sDeleteAttributeCommand)
                if(!IsNull(oResult.ReturnValue) && oResult.ReturnValue.Used)
                {
                    showUsage(_oSCUConst.sAttributeMode,oResult.ReturnValue);
                    return true
                }
        if(oCallbackParams.bRefreshGrid)
            try
            {
                window.opener.$find("gridAttributes").Refresh()
            }
            catch(e)
            {
            }
        if(oCallbackParams.bClose)
        {
            closeWindow();
            return false
        }
        var frmReload = $get("frmReloadId");
        if(oCallbackParams.bReload)
        {
            var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sUpdateAttributeUrlFormat,_sAttributeId,_sEntityId,_bEdit));
            frmReload.action = oUrl.toString();
            frmReload.submit();
            return false
        }
        if(oCallbackParams.bNew)
        {
            var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateAttributeUrlFormat,_sEntityId));
            frmReload.action = oUrl.toString();
            frmReload.submit();
            return false
        }
    }
    _bSaving = false;
    return true
}
function saveAttributeAction(bClose,bNew)
{
    checkForDateTimeBehaviorChange(bClose,bNew)
}
function saveAttribute(bClose,bNew)
{
    if(!_bSaving && validateParameters())
    {
        _bSaving = true;
        var sDataXml = getAttributeXml(),
            oCallbackParams = new CallbackParams(bClose,!bNew,true,bNew);
        if(_bCreate)
            createAttribute(sDataXml,remoteAttributeCommandCallback,oCallbackParams);
        else
            if(isFormDirty())
            {
                checkForGoalAttributeUpdates();
                updateAttribute(sDataXml,remoteAttributeCommandCallback,oCallbackParams)
            }
            else
                if(bClose)
                {
                    closeWindow();
                    Mscrm.Utilities.setReturnValue(_sAttributeId)
                }
                else
                    if(bNew)
                    {
                        var oUrl = Mscrm.CrmUri.create(formatString(_oConst.sCreateAttributeUrlFormat,_sEntityId)),
                            frmReload = $get("frmReloadId");
                        frmReload.action = oUrl.toString();
                        frmReload.submit();
                        return
                    }
                    else
                        if(_bEdit && !isNullOrEmptyString(_sAttributeId))
                            OpenFormulaEditor();
                        else
                            _bSaving = false
    }
    else
        !isFormDirty() && _bEdit && !isNullOrEmptyString(_sAttributeId) && 
            OpenFormulaEditor();
    !isNullOrEmptyString(_sAttributType) && _sAttributType == "status" && 
        saveEnableStatusResaonTransition()
}
function deleteAttributeAction()
{
    var retval = DeleteFormRecord(Mscrm.EntityTypeCode.Attribute,_sAttributeId);
    if(!IsNull(retval) && retval)
        try
        {
            window.opener.$find("gridAttributes").Refresh();
            closeWindow()
        }
        catch(e)
        {
        }
}
var _oVisiblePage = null;
function loadPage(sPageId)
{
    var oPage = $get(sPageId);
    if(!IsNull(_oVisiblePage))
        _oVisiblePage.style.display = "none";
    _oVisiblePage = oPage;
    _oVisiblePage.style.display = "inline";
    if(Mscrm.Utilities.isIE7OrIE7CompactMode())
    {
        _oVisiblePage.style.position = "absolute";
        _oVisiblePage.style.left = "0px";
        _oVisiblePage.style.right = "0px";
        _oVisiblePage.style.top = "0px";
        _oVisiblePage.style.bottom = "0px"
    }
    if(sPageId != _oConst.sInformationPageId)
    {
        var oIFrameElement = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(oPage));
        if(oIFrameElement.src.indexOf("/_static/blank.htm") > -1)
            oIFrameElement.src = oIFrameElement.getAttribute("url")
    }
}
function getAttributeXml()
{
    var oDataXml = createXmlDoc(_oTags.attribute);
    addTextXmlNode(oDataXml,_oTags.entityid,_sEntityId);
    addTextXmlNode(oDataXml,_oTags.attributeid,_sAttributeId);
    addSchemaXml(oDataXml);
    addTypeXml(oDataXml);
    _linkedAttributeRequired && _bCanCreateLinkedAttribute && 
        addLinkedAttributeXml(oDataXml);
    return convertXmlDocToString(oDataXml)
}
function getStatesXml()
{
    return convertXmlDocToString(XUI.Xml.SelectSingleNode(XUI.Xml.LoadXml(getAttributeXml()),"attribute/type/states",null))
}
function addSchemaXml(oDataXml)
{
    addControlDataValue(oDataXml,_oTags.displayname,_txtDisplayName.get_element(),bAddEvenIfDisabled());
    if(_selType.get_dataValue() == _oTypes.sImage)
        addControlDataValue(oDataXml,_oTags.schemaname,_txtSchemaName.get_element(),true);
    else
        addControlDataValue(oDataXml,_oTags.schemaname,_txtSchemaName.get_element(),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.reqlevel,$get("selReqLevel"),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.auditenabled,$get("rdIsAuditingEnabled"),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.isfieldsecurityenabled,$get("rdIsFieldSecurityEnabled"),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.imemode,$get("selIMEMode"),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.description,$get("txtDescription"),bAddEvenIfDisabled());
    if(typeof txtHelpURL != "undefined")
    {
        addControlDataValue(oDataXml,_oTags.entityhelpurl,$get("txtHelpURL"),bAddEvenIfDisabled());
        addControlDataValue(oDataXml,_oTags.entityhelpurlenabled,$get("checkCustomizedHelp"),bAddEvenIfDisabled())
    }
    typeof selectIsGlobalFilterEnabled != "undefined" && 
        addControlDataValue(oDataXml,_oTags.isglobalfilterenabled,$get("selectIsGlobalFilterEnabled"),bAddEvenIfDisabled());
    typeof selectIsSortableEnabled != "undefined" && 
        addControlDataValue(oDataXml,_oTags.issortableenabled,$get("selectIsSortableEnabled"),bAddEvenIfDisabled());
    addControlDataValue(oDataXml,_oTags.searchable,$get("selectSearchable"),bAddEvenIfDisabled())
}
function addTypeXml(oDataXml)
{
    var oTypeXml = addXmlNode(oDataXml,_oTags.type);
    addControlDataValue(oTypeXml,_oTags.name,_selType.get_element(),bAddEvenIfDisabled());
    switch(_selType.get_dataValue())
    {
        case _oTypes.sString:
            addStringXml(oTypeXml);
            break;
        case _oTypes.sDateTime:
            addDateTimeXml(oTypeXml);
            break;
        case _oTypes.sBoolean:
            addBooleanXml(oTypeXml);
            break;
        case _oTypes.sMoney:
            addMoneyXml(oTypeXml);
            break;
        case _oTypes.sInteger:
            addIntegerXml(oTypeXml);
            break;
        case _oTypes.sFloat:
            addFloatXml(oTypeXml);
            break;
        case _oTypes.sDecimal:
            addDecimalXml(oTypeXml);
            break;
        case _oTypes.sPicklist:
            addPicklistXml(oTypeXml);
            break;
        case _oTypes.sLookup:
            addLookupXml(oTypeXml);
            break;
        case _oTypes.sCustomer:
            addCustomerXml(oTypeXml);
            break;
        case _oTypes.sStatus:
            addStatusXml(oTypeXml);
            break;
        case _oTypes.sMemo:
            addMemoXml(oTypeXml);
            break
    }
}
function addLinkedAttributeXml(oDataXml)
{
    if(_bIsCustomAttribute == "False")
    {
        addTextXmlNode(oDataXml,"linkedattributeid",_sLinkedAttributeId);
        return
    }
    if(_selectLinkedAttribute.selectedIndex > 0 && (_isCurrentSelectedLookup || _selectLinkedAttribute.selectedIndex < _selectLinkedAttribute.length - 1))
        addControlDataValue(oDataXml,"linkedattributeid",_selectLinkedAttribute);
    else
        if(_txtNewAttributeName.get_dataValue() != null)
        {
            var regExp = new RegExp(_oConst.sInvalidSchemaNameChars,"g"),
                linkedattributeschemaname = _txtNewAttributeName.get_dataValue().replace(regExp,"").substr(0,_txtSchemaName.get_element().maxLength);
            addControlDataValue(oDataXml,"linkedattributedisplayname",_txtNewAttributeName.get_element());
            addTextXmlNode(oDataXml,"linkedattributeschemaname",linkedattributeschemaname);
            addTextXmlNode(oDataXml,"linkedattributecreaterequired","true");
            addTextXmlNode(oDataXml,"recurrenceBaseId",_recurrenceBaseId)
        }
}
function addStringXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    addControlDataValue(oTypeXml,_oTags.format,$get("selStringFormat"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.length,$get("numMaxStringLen"),bAddEvenIfDisabled());
    var selStringPhonetic = $get("selStringPhonetic");
    !IsNull(selStringPhonetic) && 
        addControlDataValue(oTypeXml,_oTags.yomiof,selStringPhonetic,bAddEvenIfDisabled())
}
function addDateTimeXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    addControlDataValue(oTypeXml,_oTags.format,$get("selDatetimeFormat"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.behaviors,$get("selDatetimeBehavior"),bAddEvenIfDisabled())
}
function addBooleanXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    var oLedtBooleanControl = $find("ledtBooleanValues");
    !oLedtBooleanControl.get_disabled() && 
        addXmlString(oTypeXml,oLedtBooleanControl.get_xmlData())
}
function addMoneyXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    switch(Number(_selMoneyPrecision.get_dataValue()))
    {
        case _pricingPrecisionPicklist:
            addTextXmlNode(oTypeXml,_oTags.precisionsource,PRECISIONSOURCE_ORGANIZATION);
            addTextXmlNode(oTypeXml,_oTags.precision,_pricingDecimalPrecision);
            break;
        case _currencyPrecisionPicklist:
            addTextXmlNode(oTypeXml,_oTags.precisionsource,PRECISIONSOURCE_CURRENCY);
            addTextXmlNode(oTypeXml,_oTags.precision,_maxCurPre);
            break;
        default:
            addTextXmlNode(oTypeXml,_oTags.precisionsource,PRECISIONSOURCE_ATTRIBUTE);
            addControlDataValue(oTypeXml,_oTags.precision,_selMoneyPrecision.get_element(),bAddEvenIfDisabled());
            break
    }
    addControlDataValue(oTypeXml,_oTags.minvalue,$get("numMinMoneyValue"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.maxvalue,$get("numMaxMoneyValue"),bAddEvenIfDisabled())
}
function addIntegerXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.format,$get("selIntFormat"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    if(Mscrm.FormControlInputBehavior.GetBehavior("selIntFormat").get_dataValue() == null)
    {
        addControlDataValue(oTypeXml,_oTags.minvalue,$get("numMinIntValue"),bAddEvenIfDisabled());
        addControlDataValue(oTypeXml,_oTags.maxvalue,$get("numMaxIntValue"),bAddEvenIfDisabled())
    }
}
function addFloatXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    addControlDataValue(oTypeXml,_oTags.precision,$get("selFloatPrecision"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.minvalue,$get("numMinFloatValue"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.maxvalue,$get("numMaxFloatValue"),bAddEvenIfDisabled())
}
function addDecimalXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    addControlDataValue(oTypeXml,_oTags.precision,$get("selDecimalPrecision"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.minvalue,$get("numMinDecimalValue"),bAddEvenIfDisabled());
    addControlDataValue(oTypeXml,_oTags.maxvalue,$get("numMaxDecimalValue"),bAddEvenIfDisabled())
}
function addPicklistXml(oTypeXml)
{
    addControlDataValue(oTypeXml,_oTags.sourcetype,$get("selDataSource"),true);
    !_ledtPicklistValues.get_disabled() && 
        addXmlString(oTypeXml,_ledtPicklistValues.get_xmlData());
    if(_ledtPicklistValues.isOptionSet())
    {
        addControlDataValue(oTypeXml,_oTags.local,$get("rdUseExisting"),bAddEvenIfDisabled());
        addControlDataValue(oTypeXml,_oTags.optionsetid,$get("selectOptionSet"),bAddEvenIfDisabled());
        addControlDataValue(oTypeXml,_oTags.defaultvalue,$get("ledtPicklistDefault"),bAddEvenIfDisabled())
    }
}
function addLookupXml(oTypeXml)
{
    if(!_selectTarget.get_element().disabled && _selectTarget.get_element().selectedIndex >= 0)
    {
        var oRelationshipXml = addXmlNode(oTypeXml,_oTags.relationship);
        addTextXmlNode(oRelationshipXml,_oTags.relationshipid,"");
        addTextXmlNode(oRelationshipXml,_oTags.entityrelationshipid,"");
        var txtPrefix = $get("txtPrefix");
        if(!IsNull(txtPrefix))
        {
            var schemaName = Trim(XUI.Html.GetText(txtPrefix)) + $get("txtRelationshipName").value;
            addTextXmlNode(oRelationshipXml,_oTags.schemaname,schemaName)
        }
        else
            addControlDataValue(oRelationshipXml,_oTags.schemaname,$get("txtRelationshipName"));
        addTextXmlNode(oRelationshipXml,_oTags.manytomany,"false");
        addControlDataValue(oRelationshipXml,_oTags.referencedentityname,_selectTarget.get_element());
        addTextXmlNode(oRelationshipXml,_oTags.referencingentityname,_CurrentEntityName);
        addControlDataValue(oRelationshipXml,_oTags.referencedinstancename,_txtDisplayName.get_element());
        addTextXmlNode(oRelationshipXml,_oTags.attributeschemaname,formatString(_oConst.sLookupSchemaNameFormat,_txtSchemaName.get_dataValue() == null ? "" : _txtSchemaName.get_dataValue()));
        addControlDataValue(oRelationshipXml,_oTags.reqlevel,$get("selReqLevel"));
        addControlDataValue(oRelationshipXml,_oTags.description,$get("txtDescription"));
        addControlDataValue(oRelationshipXml,_oTags.searchable,$get("selectSearchable"));
        addControlDataValue(oRelationshipXml,_oTags.auditenabled,$get("rdIsAuditingEnabled"));
        addControlDataValue(oRelationshipXml,_oTags.isfieldsecurityenabled,$get("rdIsFieldSecurityEnabled"),bAddEvenIfDisabled());
        var oCascadingXml = addXmlNode(oRelationshipXml,_oTags.cascading);
        addTextXmlNode(oCascadingXml,_oTags.assign,_sNoCascade);
        addTextXmlNode(oCascadingXml,_oTags.share,_sNoCascade);
        addTextXmlNode(oCascadingXml,_oTags.unshare,_sNoCascade);
        addTextXmlNode(oCascadingXml,_oTags.reparent,_sNoCascade);
        addTextXmlNode(oCascadingXml,_oTags.Delete,_sRemoveLink);
        var oAssociatedMenuXml = addXmlNode(oRelationshipXml,_oTags.associatedmenu);
        addTextXmlNode(oAssociatedMenuXml,_oTags.displayoption,_sDisplayOptionType);
        addTextXmlNode(oAssociatedMenuXml,_oTags.displayarea,_sDisplayArea);
        addTextXmlNode(oAssociatedMenuXml,_oTags.navpaneorder,_sDisplayOrder);
        _linkedAttributeRequired && 
            addLinkedAttributeXml(oRelationshipXml)
    }
}
function addCustomerXml(oTypeXml)
{
    var oRelationshipXml = addXmlNode(oTypeXml,_oTags.relationship);
    addTextXmlNode(oRelationshipXml,_oTags.relationshipid,"");
    addTextXmlNode(oRelationshipXml,_oTags.entityrelationshipid,"");
    var txtPrefix = $get("txtPrefix");
    if(!IsNull(txtPrefix))
    {
        addTextXmlNode(oRelationshipXml,_oTags.schemaname,Trim(XUI.Html.GetText(txtPrefix)) + $get("txtAccountRelationshipName").value);
        addTextXmlNode(oRelationshipXml,_oTags.schemaname2,Trim(XUI.Html.GetText(txtPrefix)) + $get("txtContactRelationshipName").value)
    }
    else
    {
        addTextXmlNode(oRelationshipXml,_oTags.schemaname,$get("txtAccountRelationshipName").value);
        addTextXmlNode(oRelationshipXml,_oTags.schemaname2,$get("txtContactRelationshipName").value)
    }
    addTextXmlNode(oRelationshipXml,_oTags.manytomany,"false");
    addTextXmlNode(oRelationshipXml,_oTags.referencedentityname,"account");
    addTextXmlNode(oRelationshipXml,_oTags.referencingentityname,_CurrentEntityName);
    addControlDataValue(oRelationshipXml,_oTags.referencedinstancename,_txtDisplayName.get_element());
    addTextXmlNode(oRelationshipXml,_oTags.attributeschemaname,formatString(_oConst.sLookupSchemaNameFormat,_txtSchemaName.get_dataValue() == null ? "" : _txtSchemaName.get_dataValue()));
    addControlDataValue(oRelationshipXml,_oTags.reqlevel,$get("selReqLevel"));
    addControlDataValue(oRelationshipXml,_oTags.description,$get("txtDescription"));
    addControlDataValue(oRelationshipXml,_oTags.searchable,$get("selectSearchable"));
    addControlDataValue(oRelationshipXml,_oTags.auditenabled,$get("rdIsAuditingEnabled"));
    addControlDataValue(oRelationshipXml,_oTags.isfieldsecurityenabled,$get("rdIsFieldSecurityEnabled"),bAddEvenIfDisabled());
    var oCascadingXml = addXmlNode(oRelationshipXml,_oTags.cascading);
    addTextXmlNode(oCascadingXml,_oTags.assign,_sNoCascade);
    addTextXmlNode(oCascadingXml,_oTags.share,_sNoCascade);
    addTextXmlNode(oCascadingXml,_oTags.unshare,_sNoCascade);
    addTextXmlNode(oCascadingXml,_oTags.reparent,_sNoCascade);
    addTextXmlNode(oCascadingXml,_oTags.Delete,_sRemoveLink);
    var oAssociatedMenuXml = addXmlNode(oRelationshipXml,_oTags.associatedmenu);
    addTextXmlNode(oAssociatedMenuXml,_oTags.displayoption,_sDisplayOptionType);
    addTextXmlNode(oAssociatedMenuXml,_oTags.displayarea,_sDisplayArea);
    addTextXmlNode(oAssociatedMenuXml,_oTags.navpaneorder,_sDisplayOrder);
    _linkedAttributeRequired && 
        addLinkedAttributeXml(oRelationshipXml)
}
function bAddEvenIfDisabled()
{
    var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource");
    if(_selDataSource.get_dataValue() == _oDataSources.sCalculated || _selDataSource.get_dataValue() == _oDataSources.sRollup || _linkedAttributeRequired && _bIsCustomAttribute != "False" && _selectLinkedAttribute.selectedIndex == _selectLinkedAttribute.length - 1 && !_isCurrentSelectedLookup)
        return true;
    if(_selType.get_dataValue() == _oTypes.sDateTime)
        return true;
    return false
}
function checkForGoalAttributeUpdates()
{
    if(_CurrentEntityName == "goal")
        if(LOCID_WARN_FOR_DISP_NAME_UP == true)
        {
            var currentDisplayName = _txtDisplayName.get_dataValue();
            currentDisplayName != _sDisplayName && 
                alert(LOCID_MSG_FOR_DISP_NAME_UP)
        }
}
function checkForDateTimeBehaviorChange(bClose,bNew)
{
    var _newBehavior = $get("selDatetimeBehavior").value;
    if(!isNull(_newBehavior) && _dateTimeBehavior != _newBehavior && !_bCreate)
    {
        var _newBehaviorString = document.getElementById("selDatetimeBehavior")[document.getElementById("selDatetimeBehavior").selectedIndex].innerHTML,
            url = Mscrm.CrmUri.create("/_grid/cmds/dlg_behaviorconfirmation.aspx"),
            parameters = [bClose,bNew];
        url.get_query()["resource_title"] = "SystemCustomization.ChangeBehaviorConfirmation.Title";
        url.get_query()["resource_description"] = String.format(LOCID_CONFIRM_BEHAVIORCHANGE,_newBehaviorString);
        var crmDialog = new Mscrm.CrmDialog(url,null,500,150,null);
        crmDialog.setCallbackInfo("confirmBehaviorChange",this,parameters);
        crmDialog.show()
    }
    else
        saveAttribute(bClose,bNew)
}
function confirmBehaviorChange(returnValue,bClose,bNew)
{
    returnValue != null && returnValue == true && 
        saveAttribute(bClose,bNew)
}
function addStatusXml(oTypeXml)
{
    onStateChange();
    var iState,
        sStatusXml;
    if(_ledtStatusValues.get_disabled())
        if(!IsNull(_iNextStatusValueOriginal))
            _iNextStatusValue = _iNextStatusValueOriginal;
        else
            _iNextStatusValue = 0;
    sStatusXml = formatString('<states nextstatus="{0}">',_iNextStatusValue);
    for(iState = 0; iState < _aStates.length; iState++)
        if(_aStates[iState] != undefined)
            sStatusXml += formatString('<state value="{0}" label="{1}">{2}</state>',CrmEncodeDecode.CrmXmlAttributeEncode(iState),CrmEncodeDecode.CrmXmlAttributeEncode(_aStateLabels[iState]),_aStates[iState]);
    sStatusXml += "</states>";
    addXmlString(oTypeXml,sStatusXml)
}
function addMemoXml(oTypeXml)
{
    var oMemoFormat = Mscrm.FormControlInputBehavior.GetBehavior("selMemoFormat");
    oMemoFormat.get_dataValue() != _oFormats.sEmailBody && 
        addControlDataValue(oTypeXml,_oTags.length,$get("numMaxMemoLen"));
    addControlDataValue(oTypeXml,_oTags.format,oMemoFormat.get_element())
}
function validateParameters()
{
    var bValid = true;
    bValid = bValid && validateRequiredValue(_txtDisplayName.get_element());
    bValid = bValid && (_txtSchemaName.get_disabled() || validateSchemaName(_txtSchemaName.get_element()));
    bValid = bValid && validateRequiredValue($get("selReqLevel"));
    bValid = bValid && validateRequiredValue(_selType.get_element());
    if(bValid)
        switch(_selType.get_dataValue())
        {
            case _oTypes.sString:
                bValid = bValid && validateStringParams();
                break;
            case _oTypes.sDateTime:
                bValid = bValid && validateDateTimeParams();
                break;
            case _oTypes.sBoolean:
                bValid = bValid && validateBooleanParams();
                break;
            case _oTypes.sMoney:
                bValid = bValid && validateMoneyParams();
                break;
            case _oTypes.sInteger:
                bValid = bValid && validateIntegerParams();
                break;
            case _oTypes.sFloat:
                bValid = bValid && validateFloatParams();
                break;
            case _oTypes.sDecimal:
                bValid = bValid && validateDecimalParams();
                break;
            case _oTypes.sPicklist:
                bValid = bValid && validatePicklistParams();
                break;
            case _oTypes.sLookup:
                bValid = bValid && validateLookupParams();
                break;
            case _oTypes.sCustomer:
                bValid = bValid && validateCustomerParams();
                break;
            case _oTypes.sStatus:
                bValid = bValid && validateStatusParams();
                break;
            case _oTypes.sMemo:
                bValid = bValid && validateMemoParams();
                break
        }
    if(bValid)
        if(_linkedAttributeRequired && _bIsCustomAttribute != "False" && _bCanCreateLinkedAttribute)
            bValid = bValid && validateLinkedAttributeParams(_selectLinkedAttribute);
        else
            if(_linkedAttributeRequired && !_bCreate && typeof LOCID_UPDATE != "undefined")
            {
                if(!confirm(LOCID_UPDATE))
                    return false
            }
            else
                if(typeof LOCID_UPDATELINKTOATTRIBUTE != "undefined")
                    if(!confirm(LOCID_UPDATELINKTOATTRIBUTE))
                        return false;
    return bValid
}
function validateStringParams()
{
    var bRequired = validateRequiredValue($get("selStringFormat")) && validateRequiredValue($get("numMaxStringLen"));
    if(!bRequired)
        return false;
    var numMaxStringLenControl = Mscrm.FormControlInputBehavior.GetBehavior("numMaxStringLen"),
        _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource");
    if(!numMaxStringLenControl.get_disabled() || _selDataSource.get_dataValue() == _oDataSources.sCalculated)
        return numMaxStringLenControl.IsValid()
}
function validateDateTimeParams()
{
    return validateRequiredValue($get("selDatetimeFormat"))
}
function validateBooleanParams()
{
    return true
}
function validateMoneyParams()
{
    var numMinMoneyValue = $get("numMinMoneyValue"),
        numMaxMoneyValue = $get("numMaxMoneyValue");
    return validateRequiredValue(_selMoneyPrecision.get_element()) && validateRequiredValue(numMinMoneyValue) && validateRequiredValue(numMaxMoneyValue) && validateMinMaxValues(numMinMoneyValue,numMaxMoneyValue)
}
function validateIntegerParams()
{
    var numMinIntValue = $get("numMinIntValue"),
        numMaxIntValue = $get("numMaxIntValue");
    return Mscrm.FormControlInputBehavior.GetBehavior("selIntFormat").get_dataValue() != null || validateRequiredValue(numMinIntValue) && validateRequiredValue(numMaxIntValue) && validateMinMaxValues(numMinIntValue,numMaxIntValue)
}
function validateFloatParams()
{
    var selFloatPrecision = $get("selFloatPrecision"),
        numMinFloatValue = $get("numMinFloatValue"),
        numMaxFloatValue = $get("numMaxFloatValue");
    return validateRequiredValue(selFloatPrecision) && validateRequiredValue(numMinFloatValue) && validateRequiredValue(numMaxFloatValue) && validateMinMaxValues(numMinFloatValue,numMaxFloatValue)
}
function validateDecimalParams()
{
    var selDecimalPrecision = $get("selDecimalPrecision"),
        numMinDecimalValue = $get("numMinDecimalValue"),
        numMaxDecimalValue = $get("numMaxDecimalValue");
    return validateRequiredValue(selDecimalPrecision) && validateRequiredValue(numMinDecimalValue) && validateRequiredValue(numMaxDecimalValue) && validateMinMaxValues(numMinDecimalValue,numMaxDecimalValue)
}
function validatePicklistParams()
{
    if(_ledtPicklistValues.isOptionSet())
    {
        var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdUseExisting");
        if(!IsNull(ctrl) && !IsNull(ctrl.get_dataValue()) && ctrl.get_dataValue())
            if(IsNull($get("selectOptionSet")))
                return false
    }
    return true
}
function validateLookupParams()
{
    var txtRelationshipName = $get("txtRelationshipName");
    return validateRequiredValue(_selectTarget.get_element()) && validateRequiredValue(txtRelationshipName) && validateSchemaName(txtRelationshipName)
}
function validateCustomerParams()
{
    var txtAccountRelationshipName = $get("txtAccountRelationshipName"),
        txtContactRelationshipName = $get("txtContactRelationshipName");
    return validateRequiredValue(txtAccountRelationshipName) && validateRequiredValue(txtContactRelationshipName) && validateSchemaName(txtAccountRelationshipName) && validateSchemaName(txtContactRelationshipName)
}
function validateStatusParams()
{
    if(_ledtStatusValues.get_hasDefaultValue())
    {
        onStateChange();
        for(var iState = 0; iState < _aStates.length; iState++)
            if(_aStates[iState] != undefined)
            {
                var oXml = XUI.Xml.LoadXml(_aStates[iState]);
                if(XUI.Xml.SelectSingleNode(oXml,"/values[@default]",null).getAttribute("default") == "-1")
                {
                    alert(LOCID_ATTRUTL_EMPTYSTATUS);
                    return false
                }
            }
    }
    return true
}
function validateMemoParams()
{
    var sFormat = Mscrm.FormControlInputBehavior.GetBehavior("selMemoFormat").get_dataValue();
    return sFormat == _oFormats.sEmailBody || validateRequiredValue($get("numMaxMemoLen"))
}
function validateMinMaxValues(numMinVal,numMaxVal)
{
    numMinVal = Mscrm.FormControlInputBehavior.GetBehavior(numMinVal.id);
    numMaxVal = Mscrm.FormControlInputBehavior.GetBehavior(numMaxVal.id);
    var iMin = numMinVal.get_dataValue(),
        iMax = numMaxVal.get_dataValue();
    if(iMin > iMax)
    {
        alert(LOCID_MANATTR_REVERSEDMINMAX);
        numMinVal.setFocus();
        return false
    }
    return true
}
function validateLinkedAttributeParams(selectLinkedAttribute)
{
    if(!_bValidationDone)
    {
        alert(LOCID_SAVEWOVALIDATE);
        return false
    }
    if(selectLinkedAttribute.selectedIndex != 0 && !_bCreate)
        if(XUI.Html.GetText(selectLinkedAttribute) != Mscrm.FormControlInputBehavior.GetBehavior("txtLinkedAttributeName").get_dataValue())
            if(typeof LOCID_UPDATELINKEDATTRIBUTE == "undefined")
                return true;
            else
                if(!confirm(LOCID_UPDATELINKEDATTRIBUTE))
                    return false;
                else
                    return true;
    if(selectLinkedAttribute.selectedIndex == 0)
    {
        alert(LOCID_ATTRUTL_EMPTYSTATUS);
        setControlFocus(selectLinkedAttribute);
        return false
    }
    else
        if(selectLinkedAttribute.selectedIndex == selectLinkedAttribute.length - 1 && !_isCurrentSelectedLookup)
            return validateRequiredValue(_txtNewAttributeName.get_element());
        else
            if(selectLinkedAttribute.selectedIndex != 1)
                if(!_bCreate && typeof LOCID_UPDATE != "undefined")
                    if(!confirm(LOCID_UPDATE))
                        return false;
    return true
}
function onDisplayNameChange()
{
    if(_bCreate)
    {
        if(_txtDisplayName.get_dataValue() != null && _txtDisplayName.get_dataValue().length > 0 && (_txtSchemaName.get_dataValue() == null || _txtSchemaName.get_dataValue().length == 0))
        {
            var regExp = new RegExp(_oConst.sInvalidSchemaNameChars,"g");
            _txtSchemaName.set_dataValue(_txtDisplayName.get_dataValue().replace(regExp,"").substr(0,_txtSchemaName.get_maxLength()))
        }
        var selectTarget = Mscrm.FormControlInputBehavior.GetBehavior("selectTarget");
        if(!IsNull(selectTarget.get_dataValue()))
            $get("txtRelationshipName").value = selectTarget.get_dataValue() + "_" + _CurrentEntityName + "_" + _txtSchemaName.get_dataValue();
        $get("txtAccountRelationshipName").value = "account_" + _CurrentEntityName + "_" + _txtSchemaName.get_dataValue();
        $get("txtContactRelationshipName").value = "contact_" + _CurrentEntityName + "_" + _txtSchemaName.get_dataValue()
    }
}
function onFieldSecurityChange()
{
    var linkedAttributeRow3 = $get("linkedAttributeRow3");
    if($get("rad_rdIsFieldSecurityEnabled1").checked)
    {
        if(!IsNull(linkedAttributeRow3))
            linkedAttributeRow3.style.display = "none";
        $get("linkedAttributeRow2").disabled = true;
        _bCanCreateLinkedAttribute = false;
        $get("buttonValidate").disabled = true;
        _selectLinkedAttribute.selectedIndex = 0;
        var linkedAttributeRow4 = $get("linkedAttributeRow4");
        if(!IsNull(linkedAttributeRow4))
            linkedAttributeRow4.style.display = "none";
        _bValidationDone = true;
        $find("notifications").SetNotifications(null,"")
    }
    else
    {
        if(!IsNull(linkedAttributeRow3))
            linkedAttributeRow3.style.display = "";
        $get("linkedAttributeRow2").disabled = false;
        _bCanCreateLinkedAttribute = true
    }
}
var _oVisibleTypeParams = null;
function onTypeChange()
{
    var selDataValue = _selType.get_dataValue();
    if(selDataValue == _oTypes.sBoolean || selDataValue == _oTypes.sPicklist || selDataValue == _oTypes.sLookup || selDataValue == _oTypes.sOwner || selDataValue == _oTypes.sCustomer || selDataValue == _oTypes.sPrimaryKey || selDataValue == _oTypes.sStatus || selDataValue == _oTypes.sImage)
    {
        $get("selIMEMode").selectedIndex = 0;
        $get("imeParams").style.display = "none"
    }
    else
        $get("imeParams").style.display = "";
    if(selDataValue == _oTypes.sDateTime)
        $get("dynamicToolTip").style.display = "";
    else
    {
        $get("dynamicToolTip").style.display = "none";
        $get("dateOnlyToolTip").style.display = "none";
        $get("staticTimeZoneInvariantToolTip").style.display = "none"
    }
    filterDataSourceOnTypeChange();
    filterIntFormatOnChange();
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CalculatedFields) || Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.Rollups))
        if(selDataValue == _oTypes.sMemo || selDataValue == _oTypes.sFloat || selDataValue == _oTypes.sLookup || selDataValue == _oTypes.sOwner || selDataValue == _oTypes.sCustomer || selDataValue == _oTypes.sPrimaryKey || selDataValue == _oTypes.sStatus || selDataValue == _oTypes.sImage)
        {
            $get("selDataSource").selectedIndex = 0;
            $get("dataSourceParam").style.display = "none"
        }
        else
            $get("dataSourceParam").style.display = "";
    else
    {
        $get("selDataSource").selectedIndex = 0;
        $get("dataSourceParam").style.display = "none"
    }
    if(!IsNull(_oVisibleTypeParams))
        _oVisibleTypeParams.style.display = "none";
    _oVisibleTypeParams = $get(selDataValue + "Params");
    if(!IsNull(_oVisibleTypeParams))
        _oVisibleTypeParams.style.display = "";
    if(selDataValue != _oTypes.sString)
    {
        var selStringPhonetic = $get("selStringPhonetic");
        if(!IsNull(selStringPhonetic))
            selStringPhonetic.selectedIndex = 0;
        $get("PhoneticGuideParams").style.display = "none"
    }
    else
        onStringFormatChange();
    var selectSearchable = $get("selectSearchable"),
        txtSchemaName = $get("txtSchemaName"),
        txtSchemaNamePrefix = $get("txtSchemaNamePrefix"),
        selReqLevel = $get("selReqLevel");
    if(selDataValue == _oTypes.sImage)
    {
        if(!IsNull(selectSearchable))
        {
            selectSearchable.value = 0;
            selectSearchable.disabled = true
        }
        if(!IsNull(txtSchemaName))
        {
            txtSchemaName.value = "entityimage";
            txtSchemaName.disabled = true;
            if(!IsNull(txtSchemaNamePrefix))
                txtSchemaNamePrefix.style.display = "none"
        }
        if(!IsNull(selReqLevel))
        {
            selReqLevel.value = "None";
            selReqLevel.disabled = true
        }
    }
    else
        if(_bCreate)
        {
            if(!IsNull(selectSearchable) && selectSearchable.disabled)
            {
                selectSearchable.disabled = false;
                selectSearchable.value = 1
            }
            var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource");
            if(_selDataSource.get_dataValue() == _oDataSources.sCalculated || _selDataSource.get_dataValue() == _oDataSources.sRollup)
            {
                var selReqLevel = $get("selReqLevel");
                selReqLevel.value = "None";
                selReqLevel.disabled = true
            }
            else
                if(!IsNull(selReqLevel) && selReqLevel.disabled)
                    selReqLevel.disabled = false;
            if(!IsNull(txtSchemaName) && txtSchemaName.disabled)
                txtSchemaName.disabled = false;
            if(!IsNull(txtSchemaNamePrefix) && txtSchemaNamePrefix.style.display == "none")
            {
                txtSchemaNamePrefix.style.display = "";
                if(!IsNull(txtSchemaName))
                    txtSchemaName.value = ""
            }
        }
    var picklist_section = $get("picklistParams_section"),
        picklist_control = $get("picklistParams_control");
    if(!IsNull(picklist_section) && !IsNull(picklist_control))
    {
        picklist_section.style.display = selDataValue == _oTypes.sPicklist && Mscrm.FormControlInputBehavior.GetBehavior("rdUseExisting").get_dataValue() == 0 ? "" : "none";
        picklist_control.style.display = selDataValue == _oTypes.sPicklist && Mscrm.FormControlInputBehavior.GetBehavior("rdUseExisting").get_dataValue() == 0 ? "" : "none";
        if(selDataValue == _oTypes.sPicklist)
            _ledtPicklistValues.add_change(this.ReloadDefault);
        else
            !IsNull(_ledtPicklistValues.get_element()._events["change"]) && 
                _ledtPicklistValues.remove_change(this.ReloadDefault)
    }
    if(_linkedAttributeRequired)
        if(selDataValue == _oTypes.sLookup && !_isCurrentSelectedLookup)
        {
            _isCurrentSelectedLookup = true;
            removeCreateNew()
        }
        else
            if(_isCurrentSelectedLookup && selDataValue != _oTypes.sLookup)
            {
                _isCurrentSelectedLookup = false;
                addCreateNew()
            }
    LinkedAttributeDataChanges();
    var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource");
    if(!isNull(_selDataSource) && !isNull(_selDataSource.get_dataValue()) && (_selDataSource.get_dataValue() == _oDataSources.sCalculated || _selDataSource.get_dataValue() == _oDataSources.sRollup))
        ToggleTypeSpecificOnDataSourceChange(true);
    else
        ToggleTypeSpecificOnDataSourceChange(false);
    if(FeatureControl["FCB.Moca.InteractionCentricDashboard"])
        if(_isICEnabled)
            if(selDataValue == _oTypes.sString || selDataValue == _oTypes.sMemo || selDataValue == _oTypes.sImage)
                selectIsGlobalFilterEnabled.disabled = true;
            else
                if(_bCreate)
                    selectIsGlobalFilterEnabled.disabled = false
}
function onDataSourceChange()
{
    var selDataValue = _selType.get_dataValue();
    if(!Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CalculatedFields))
        return;
    var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource"),
        isAuditEnabled = $get("rad_rdIsAuditingEnabled1"),
        isAuditDisabled = $get("rad_rdIsAuditingEnabled2"),
        selReqLevel = $get("selReqLevel"),
        selIMEMode = $get("selIMEMode"),
        buttonDataSourceEdit = $get("buttonDataSourceEdit");
    if(_selDataSource.get_dataValue() == _oDataSources.sCalculated || _selDataSource.get_dataValue() == _oDataSources.sRollup)
    {
        isAuditEnabled.checked = false;
        isAuditEnabled.disabled = true;
        isAuditDisabled.checked = true;
        isAuditDisabled.disabled = true;
        selReqLevel.value = "None";
        selReqLevel.disabled = true;
        selIMEMode.disabled = true;
        buttonDataSourceEdit.style.display = "";
        buttonDataSourceEdit.disabled = false;
        if((_selDataSource.get_dataValue() == _oDataSources.sRollup || _selDataSource.get_dataValue() == _oDataSources.sCalculated) && selDataValue == _oTypes.sMoney)
            if(!IsNull(_txtDisplayName) && _txtDisplayName.get_element().attributes["isbasecurrency"].value == "true")
                buttonDataSourceEdit.style.display = "none";
            else
                buttonDataSourceEdit.style.display = "";
        ToggleTypeSpecificOnDataSourceChange(true)
    }
    else
    {
        isAuditEnabled.disabled = false;
        isAuditDisabled.disabled = false;
        if(selDataValue == _oTypes.sImage)
            selReqLevel.disabled = true;
        else
            selReqLevel.disabled = false;
        selIMEMode.disabled = false;
        buttonDataSourceEdit.disabled = true;
        buttonDataSourceEdit.style.display = "none";
        ToggleTypeSpecificOnDataSourceChange(false)
    }
    filterIntFormatOnChange()
}
function filterIntFormatOnChange()
{
    var prevSelectedFormat,
        options,
        _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource"),
        format = Mscrm.FormControlInputBehavior.GetBehavior("selIntFormat"),
        selDataValue = _selType.get_dataValue(),
        _intFormatDataValue;
    if(!isNull(sIntFormat))
    {
        prevSelectedFormat = sIntFormat.get_dataValue();
        if(!isNull(sFormatOptions))
        {
            sIntFormat.set_options(sFormatOptions);
            sIntFormat.set_dataValue(_oFormats.sNone)
        }
        if(_selDataSource.get_dataValue() == _oDataSources.sRollup && selDataValue == _oTypes.sInteger)
            if(!isNull(sIntFormat))
            {
                sIntFormat.RemoveOption(_oFormats.sTimeZone);
                sIntFormat.RemoveOption(_oFormats.sLanguage)
            }
        !isNull(prevSelectedFormat) && 
            sIntFormat.set_dataValue(prevSelectedFormat);
        _intFormatDataValue = sIntFormat.get_dataValue()
    }
    else
        if(!isNull(format))
        {
            prevSelectedFormat = format.get_dataValue();
            options = format.get_options();
            if(!isNull(options))
            {
                format.set_options(options);
                format.set_dataValue(_oFormats.sNone)
            }
            if(_selDataSource.get_dataValue() == _oDataSources.sRollup && selDataValue == _oTypes.sInteger)
            {
                format.RemoveOption(_oFormats.sTimeZone);
                format.RemoveOption(_oFormats.sLanguage)
            }
            !isNull(prevSelectedFormat) && 
                format.set_dataValue(prevSelectedFormat);
            _intFormatDataValue = format.get_dataValue()
        }
    if(!isNull(_oVisibleIntParams) && _oVisibleIntParams.length > 0)
        onIntFormatChange();
    else
    {
        var oVisibleParams = Mscrm.Utilities.getChildElementsByClassName($get("sectionBodyTable"),"IntegerParams");
        if(_intFormatDataValue == _oFormats.sNone)
            for(var i = 0; i < oVisibleParams.length; i++)
                oVisibleParams[i].style.display = "";
        else
            if(!IsNull(oVisibleParams) && !IsNull(oVisibleParams.length))
                for(var i = 0; i < oVisibleParams.length; i++)
                    oVisibleParams[i].style.display = "none"
    }
}
function filterDataSourceOnTypeChange()
{
    var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource"),
        selDataValue = _selType.get_dataValue();
    if(!isNull(_selDataSource))
    {
        var prevSelectedDataSource = _selDataSource.get_dataValue();
        if(!isNull(dataSourceOptions))
        {
            if(selDataValue == _oTypes.sInteger || selDataValue == _oTypes.sDecimal || selDataValue == _oTypes.sMoney || selDataValue == _oTypes.sDateTime)
                _selDataSource.set_options(dataSourceOptions);
            else
                if(selDataValue == _oTypes.sString || selDataValue == _oTypes.sBoolean || selDataValue == _oTypes.sPicklist || selDataValue == _oTypes.sStatus || selDataValue == _oTypes.sOwner || selDataValue == _oTypes.sCustomer || selDataValue == _oTypes.sPrimaryKey)
                {
                    _selDataSource.set_options(dataSourceOptions);
                    _selDataSource.RemoveOption(_oDataSources.sRollup)
                }
                else
                {
                    _selDataSource.set_options(dataSourceOptions);
                    _selDataSource.RemoveOption(_oDataSources.sRollup);
                    _selDataSource.RemoveOption(_oDataSources.sCalculated)
                }
            _selDataSource.set_dataValue(prevSelectedDataSource)
        }
    }
    onDataSourceChange()
}
function ToggleTypeSpecificOnDataSourceChange(bDisable)
{
    if(!Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CalculatedFields))
        return;
    var selDataValue = _selType.get_dataValue();
    switch(selDataValue)
    {
        case _oTypes.sString:
            $get("numMaxStringLen").disabled = bDisable;
            break;
        case _oTypes.sMoney:
            $get("numMinMoneyValue").disabled = bDisable;
            $get("numMaxMoneyValue").disabled = bDisable;
            break;
        case _oTypes.sInteger:
            $get("numMinIntValue").disabled = bDisable;
            $get("numMaxIntValue").disabled = bDisable;
            break;
        case _oTypes.sFloat:
            $get("numMinFloatValue").disabled = bDisable;
            $get("numMaxFloatValue").disabled = bDisable;
            break;
        case _oTypes.sDecimal:
            $get("numMinDecimalValue").disabled = bDisable;
            $get("numMaxDecimalValue").disabled = bDisable;
            break;
        default:
            break
    }
}
function removeCreateNew()
{
    _selectLinkedAttribute.remove(_selectLinkedAttribute.length - 1)
}
function addCreateNew()
{
    var node = document.createElement("option");
    XUI.Html.SetText(node,LOCID_CREATE_NEW);
    node.value = 2;
    _selectLinkedAttribute.options.add(node,_selectLinkedAttribute.length)
}
function onLinkedAttributeChange()
{
    var buttonValidate = $get("buttonValidate"),
        linkedAttributeRow4 = $get("linkedAttributeRow4");
    buttonValidate.disabled = true;
    linkedAttributeRow4.style.display = "none";
    _bValidationDone = true;
    $find("notifications").SetNotifications(null,"");
    if(_selectLinkedAttribute.selectedIndex == _selectLinkedAttribute.length - 1 && !_isCurrentSelectedLookup)
    {
        buttonValidate.disabled = false;
        linkedAttributeRow4.style.display = "";
        _txtNewAttributeName.set_dataValue(_txtDisplayName.get_dataValue());
        _bValidationDone = false
    }
}
function GetDataFromControl(elementID)
{
    var element = Mscrm.FormControlInputBehavior.GetBehavior(elementID);
    return element.get_dataValue()
}
function displayCreateTooltipForDateTimeBehavior()
{
    if(GetDataFromControl("selDatetimeBehavior") == _oConst.sDateOnly)
    {
        $get("dateOnlyToolTip").style.display = "";
        $get("dynamicToolTip").style.display = "none";
        $get("staticTimeZoneInvariantToolTip").style.display = "none"
    }
    if(GetDataFromControl("selDatetimeBehavior") == _oConst.sStaticTimeInvariant)
    {
        $get("staticTimeZoneInvariantToolTip").style.display = "";
        $get("dynamicToolTip").style.display = "none";
        $get("dateOnlyToolTip").style.display = "none"
    }
    if(GetDataFromControl("selDatetimeBehavior") == _oConst.sDynamic)
    {
        $get("dynamicToolTip").style.display = "";
        $get("dateOnlyToolTip").style.display = "none";
        $get("staticTimeZoneInvariantToolTip").style.display = "none"
    }
}
function displayUpdateTooltipForDateTimeBehavior()
{
    if(GetDataFromControl("selDatetimeBehavior") == _oConst.sDateOnly)
    {
        $get("dynamicToolTip").style.display = "none";
        $get("staticTimeZoneInvariantToolTip").style.display = "none";
        $get("staticTimeZoneInvariantToolTipForUpdate").style.display = "none";
        if($get("selDatetimeBehavior").disabled == false)
        {
            $get("dateOnlyToolTipForUpdate").style.display = "";
            $get("dateOnlyToolTip").style.display = ""
        }
        else
        {
            $get("dateOnlyToolTipForUpdate").style.display = "none";
            $get("dateOnlyToolTip").style.display = ""
        }
    }
    else
        if(GetDataFromControl("selDatetimeBehavior") == _oConst.sStaticTimeInvariant)
        {
            $get("dynamicToolTip").style.display = "none";
            $get("dateOnlyToolTip").style.display = "none";
            $get("dateOnlyToolTipForUpdate").style.display = "none";
            if($get("selDatetimeBehavior").disabled == false)
            {
                $get("staticTimeZoneInvariantToolTipForUpdate").style.display = "";
                $get("staticTimeZoneInvariantToolTip").style.display = ""
            }
            else
            {
                $get("staticTimeZoneInvariantToolTipForUpdate").style.display = "none";
                $get("staticTimeZoneInvariantToolTip").style.display = ""
            }
        }
        else
            if(GetDataFromControl("selDatetimeBehavior") == _oConst.sDynamic)
            {
                $get("dynamicToolTip").style.display = "";
                $get("dateOnlyToolTipForUpdate").style.display = "none";
                $get("dateOnlyToolTip").style.display = "none";
                $get("staticTimeZoneInvariantToolTip").style.display = "none";
                $get("staticTimeZoneInvariantToolTipForUpdate").style.display = "none"
            }
}
function LinkedAttributeDataChanges()
{
    var selDataValue = _selType.get_dataValue();
    if(selDataValue == _oTypes.sDateTime)
    {
        if(GetDataFromControl("selDatetimeBehavior") == _oConst.sDateOnly)
        {
            document.getElementById("selDatetimeFormat").disabled = true;
            document.getElementById("selDatetimeFormat").value = "date"
        }
        else
            document.getElementById("selDatetimeFormat").disabled = false;
        _bCreate && 
            displayCreateTooltipForDateTimeBehavior();
        !_bCreate && 
            displayUpdateTooltipForDateTimeBehavior()
    }
    if(!_linkedAttributeRequired || _bIsCustomAttribute == "False")
        return;
    $get("buttonValidate").disabled = true;
    var oXmlDoc = XUI.Xml.LoadXml(_attributexml),
        xpath = "/attributes/attribute";
    if(selDataValue == _oTypes.sString)
    {
        xpath = xpath + '[@type="string" and @format="' + GetDataFromControl("selStringFormat") + '"';
        xpath = xpath + ' and @length="' + GetDataFromControl("numMaxStringLen") + '"'
    }
    else
        if(selDataValue == _oTypes.sInteger)
        {
            var intFormat = GetDataFromControl("selIntFormat");
            if(intFormat == null)
                intFormat = "none";
            xpath = xpath + '[@type="integer" and  @format="' + intFormat + '"';
            if(intFormat == "none")
            {
                xpath = xpath + ' and @minvalue="' + GetDataFromControl("numMinIntValue") + '"';
                xpath = xpath + ' and @maxvalue="' + GetDataFromControl("numMaxIntValue") + '"'
            }
        }
        else
            if(selDataValue == _oTypes.sFloat)
            {
                var precision = GetDataFromControl("selFloatPrecision");
                xpath = xpath + '[@type="float" and  @precision="' + precision + '"';
                xpath = xpath + ' and @minvalue="' + GetDataFromControl("numMinFloatValue") + '"';
                xpath = xpath + ' and @maxvalue="' + GetDataFromControl("numMaxFloatValue") + '"'
            }
            else
                if(selDataValue == _oTypes.sDecimal)
                {
                    var precision = GetDataFromControl("selDecimalPrecision");
                    xpath = xpath + '[@type="decimal" and  @precision="' + GetDataFromControl("selDecimalPrecision") + '"';
                    xpath = xpath + ' and @minvalue="' + GetDataFromControl("numMinDecimalValue") + '"';
                    xpath = xpath + ' and @maxvalue="' + GetDataFromControl("numMaxDecimalValue") + '"'
                }
                else
                    if(selDataValue == _oTypes.sMoney)
                    {
                        var precision = GetDataFromControl("selMoneyPrecision"),
                            precisionsource = "Attribute";
                        if(precision == "102")
                            precisionsource = "Currency";
                        else
                            if(precision == "101")
                                precisionsource = "Organization";
                        xpath = xpath + '[@type="money" and  @precisionsource="' + precisionsource + '"';
                        if(precisionsource == "Attribute")
                            xpath = xpath + ' and  @precision="' + precision + '"';
                        xpath = xpath + ' and @minvalue="' + GetDataFromControl("numMinMoneyValue") + '"';
                        xpath = xpath + ' and @maxvalue="' + GetDataFromControl("numMaxMoneyValue") + '"'
                    }
                    else
                        if(selDataValue == _oTypes.sDateTime)
                        {
                            xpath = xpath + '[@type="datetime" and  @format="' + GetDataFromControl("selDatetimeFormat") + '"';
                            xpath = xpath + ' and @behavior="' + GetDataFromControl("selDatetimeBehavior") + '"'
                        }
                        else
                            if(selDataValue == _oTypes.sMemo)
                            {
                                xpath = xpath + '[@type="memo" and  @format=""';
                                xpath = xpath + ' and @length="' + GetDataFromControl("numMaxMemoLen") + '"'
                            }
                            else
                                if(selDataValue == _oTypes.sLookup)
                                    xpath = xpath + '[@type="lookup" and  @target="' + GetDataFromControl("selectTarget") + '"';
                                else
                                    if(selDataValue == _oTypes.sBoolean)
                                        xpath = xpath + '[@type="bit"';
                                    else
                                        if(selDataValue == _oTypes.sPicklist)
                                        {
                                            var count = _ledtPicklistValues.get_element().Count;
                                            xpath = xpath + '[@type="optionset" and @count="' + count + '"'
                                        }
                                        else
                                            return;
    xpath = xpath + "]";
    for(var xmlNodes = XUI.Xml.SelectNodes(oXmlDoc,xpath,null),
        i = _isCurrentSelectedLookup ? _selectLinkedAttribute.length - 1 : _selectLinkedAttribute.length - 2; i > 1; i--)
        _selectLinkedAttribute.remove(i);
    for(var i = 0; i < xmlNodes.length; i++)
    {
        var node = document.createElement("option");
        if(_isCurrentSelectedLookup)
            _selectLinkedAttribute.options.add(node,_selectLinkedAttribute.length);
        else
            _selectLinkedAttribute.options.add(node,_selectLinkedAttribute.length - 1);
        XUI.Html.SetText(node,XUI.Xml.GetText(xmlNodes[i]));
        node.value = xmlNodes[i].getAttribute("id")
    }
    if(_sLinkedAttributeId != null && _sLinkedAttributeId != "" && _sLinkedAttributeId != "{00000000-0000-0000-0000-000000000000}")
    {
        var node = document.createElement("option");
        if(_isCurrentSelectedLookup)
        {
            _selectLinkedAttribute.options.add(node,_selectLinkedAttribute.length);
            _selectLinkedAttribute.selectedIndex = _selectLinkedAttribute.length - 1
        }
        else
        {
            _selectLinkedAttribute.options.add(node,_selectLinkedAttribute.length - 1);
            _selectLinkedAttribute.selectedIndex = _selectLinkedAttribute.length - 2
        }
        XUI.Html.SetText(node,Mscrm.FormControlInputBehavior.GetBehavior("txtLinkedAttributeName").get_dataValue());
        node.value = _sLinkedAttributeId
    }
    if(_bCreate)
        _selectLinkedAttribute.selectedIndex = 0;
    onLinkedAttributeChange()
}
function onDataSourceEdit()
{
    if(!Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CalculatedFields))
        return;
    _bEdit = true;
    _save()
}
function onValidateClick()
{
    var oNewAttribute = Mscrm.FormControlInputBehavior.GetBehavior("txtNewAttributeName");
    validateRequiredValue(oNewAttribute.get_element());
    if(!IsNull(oNewAttribute.get_dataValue()))
    {
        _bValidationDone = true;
        var severity = Mscrm.Severity.SEVERITYINFORMATION,
            textMessage = String.format(LOCID_VALIDATESUCCESS,oNewAttribute.get_dataValue()),
            regExp = new RegExp(_oConst.sInvalidSchemaNameChars,"g"),
            linkedattributeschemaname = oNewAttribute.get_dataValue().replace(regExp,"").substr(0,$get("txtSchemaName").maxLength),
            command = new RemoteCommand(_oAttrUtlConst.sCustomizationCommandObject,"IsSchemaNameExists");
        command.SetParameter("entityId",entityId);
        command.SetParameter("attributeSchemaName",linkedattributeschemaname);
        command.SetParameter("checkInRecurrenceBaseEntity",_linkedAttributeRequired);
        var result = command.Execute();
        if(!result.Success || result.ReturnValue)
        {
            severity = Mscrm.Severity.SEVERITYWARNING;
            textMessage = String.format(LOCID_VALIDATEFAILURE,_txtNewAttributeName.get_dataValue())
        }
        var notifications = $find("notifications"),
            notificationAdded = notifications.AddNotification("ValidateAttribute",severity,"",textMessage);
        if(notificationAdded == false)
        {
            notifications.SetNotifications(null,"");
            notificationAdded = notifications.AddNotification("ValidateAttribute",severity,"",textMessage)
        }
    }
}
var _oVisibleMemoParams = null;
function onMemoFormatChange()
{
    hideFormatSpecificParams(_oVisibleMemoParams);
    _oVisibleMemoParams = showFormatSpecificParams("","MemoParams");
    LinkedAttributeDataChanges()
}
function onStringFormatChange()
{
    var oStringFormat = Mscrm.FormControlInputBehavior.GetBehavior("selStringFormat"),
        sFormat = IsNull(oStringFormat.get_dataValue()) ? "" : oStringFormat.get_dataValue(),
        fls = Mscrm.FormControlInputBehavior.GetBehavior("rdIsFieldSecurityEnabled"),
        flse = $get("rad_rdIsFieldSecurityEnabled1"),
        flsd = $get("rad_rdIsFieldSecurityEnabled2");
    if(sFormat == "phoneticguide")
    {
        $get("PhoneticGuideParams").style.display = "";
        _flsOriginalChecked = flse.checked;
        _flsOriginalDisabled = fls.get_disabled();
        fls.set_disabled(true);
        flse.checked = false;
        if(_flsOriginalChecked == true)
            flsd.checked = true
    }
    else
    {
        if(!IsNull(_flsOriginalChecked))
        {
            flse.checked = _flsOriginalChecked;
            flsd.checked = !flse.checked
        }
        !IsNull(_flsOriginalDisabled) && 
            fls.set_disabled(_flsOriginalDisabled);
        if(!IsNull(document.getElementById("selStringPhonetic")))
            $get("selStringPhonetic").selectedIndex = 0;
        $get("PhoneticGuideParams").style.display = "none"
    }
    LinkedAttributeDataChanges()
}
var _oVisibleIntParams = null;
function onIntFormatChange()
{
    var oIntFormat = Mscrm.FormControlInputBehavior.GetBehavior("selIntFormat"),
        sFormat = IsNull(oIntFormat.get_dataValue()) ? _oFormats.sNone : oIntFormat.get_dataValue();
    hideFormatSpecificParams(_oVisibleIntParams);
    _oVisibleIntParams = showFormatSpecificParams(sFormat,"IntegerParams");
    LinkedAttributeDataChanges()
}
function onFloatPrecisionChange()
{
    var iPrecision = Number(Mscrm.FormControlInputBehavior.GetBehavior("selFloatPrecision").get_dataValue());
    Mscrm.FormControlInputBehavior.GetBehavior("numMinFloatValue").set_precision(iPrecision);
    Mscrm.FormControlInputBehavior.GetBehavior("numMaxFloatValue").set_precision(iPrecision);
    LinkedAttributeDataChanges()
}
function onDecimalPrecisionChange()
{
    var iPrecision = Number(Mscrm.FormControlInputBehavior.GetBehavior("selDecimalPrecision").get_dataValue());
    Mscrm.FormControlInputBehavior.GetBehavior("numMinDecimalValue").set_precision(iPrecision);
    Mscrm.FormControlInputBehavior.GetBehavior("numMaxDecimalValue").set_precision(iPrecision);
    LinkedAttributeDataChanges()
}
function onMoneyPrecisionChange()
{
    var iPrecision = Number(_selMoneyPrecision.get_dataValue()),
        numMinMoneyValueControl = Mscrm.FormControlInputBehavior.GetBehavior("numMinMoneyValue");
    switch(iPrecision)
    {
        case _pricingPrecisionPicklist:
            numMinMoneyValueControl.set_precision(_pricingDecimalPrecision);
            numMinMoneyValueControl.set_precision(_pricingDecimalPrecision);
            break;
        case _currencyPrecisionPicklist:
            numMinMoneyValueControl.set_precision(_maxCurPre);
            numMinMoneyValueControl.set_precision(_maxCurPre);
            break;
        default:
            numMinMoneyValueControl.set_precision(iPrecision);
            numMinMoneyValueControl.set_precision(iPrecision);
            break
    }
    LinkedAttributeDataChanges()
}
function onStateChange()
{
    if(_iNextStatusValue != undefined)
    {
        var iNewState = Number(Mscrm.FormControlInputBehavior.GetBehavior("selState").get_dataValue());
        if(_iCurrentState >= 0)
        {
            _aStates[_iCurrentState] = _ledtStatusValues.get_xmlData();
            _iNextStatusValue = _ledtStatusValues.get_nextValue()
        }
        _ledtStatusValues.set_xmlData(_aStates[iNewState]);
        _ledtStatusValues.set_nextValue(_iNextStatusValue);
        _iCurrentState = iNewState
    }
}
function hideFormatSpecificParams(oVisibleParams)
{
    if(!IsNull(oVisibleParams) && !IsNull(oVisibleParams.length))
        for(var i = 0; i < oVisibleParams.length; i++)
            oVisibleParams[i].style.display = "none"
}
function showFormatSpecificParams(sFormat,sParamGroupSuffix)
{
    for(var oVisibleParams = Mscrm.Utilities.getChildElementsByClassName($get("sectionBodyTable"),sFormat + sParamGroupSuffix),
        i = 0; i < oVisibleParams.length; i++)
        oVisibleParams[i].style.display = "";
    return oVisibleParams
}
function isFormDirty()
{
    if(_bView)
        return false;
    return _sInputXml != getAttributeXml()
}
function onTargetChange()
{
    if(IsNull(_selectTarget.get_dataValue()))
        return;
    var schemaName = IsNull(_txtSchemaName.get_dataValue()) ? "" : _txtSchemaName.get_dataValue();
    if(!IsNull(_selectTarget.get_dataValue()))
        $get("txtRelationshipName").value = _selectTarget.get_dataValue() + "_" + _CurrentEntityName + "_" + schemaName;
    LinkedAttributeDataChanges()
}
function configureRelationship(referencedEntity)
{
    if(typeof referencedEntity == "undefined")
        var url = formatString(_oConst.sLookupRelationshipEditorUrlFormat,_sAttributeId,_sEntityId);
    else
        var url = formatString(_oConst.sRelationshipEditorUrlFormat,_sAttributeId,_sEntityId,referencedEntity);
    var windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Relationship);
    openStdWin(Mscrm.CrmUri.create(url),buildWinName(),windowInfo.Width,windowInfo.Height)
}
function OnUseExisitingChanged()
{
    var picklist_section = document.getElementById("picklistParams_section"),
        picklist_control = document.getElementById("picklistParams_control"),
        tr_selectOptionSet = document.getElementById("tr_selectOptionSet");
    if(Mscrm.FormControlInputBehavior.GetBehavior("rdUseExisting").get_dataValue() == 1)
    {
        _selectOptionSet.get_element().disabled = false;
        $get("buttonNewSet").disabled = false;
        _ledtPicklistValues.set_disabled(true);
        tr_selectOptionSet.style.display = "";
        picklist_section.style.display = "none";
        picklist_control.style.display = "none";
        OnOptionSetChange()
    }
    else
    {
        _selectOptionSet.get_element().disabled = true;
        $get("buttonNewSet").disabled = true;
        _ledtPicklistValues.set_disabled(false);
        tr_selectOptionSet.style.display = "none";
        picklist_section.style.display = "";
        picklist_control.style.display = "";
        OnOptionSetChange()
    }
}
function OnNewGlobalOptionSet()
{
    var url = formatString(_oConst.sPicklistEditorUrlFormat,""),
        callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("performActionAfterNewOptionSet",this),
        retVal = openStdDlgWithCallback(Mscrm.CrmUri.create(url),buildWinName(),800,600,callbackFunction);
    isOutlookHostedWindow() && 
        performActionAfterNewOptionSet(retVal)
}
function performActionAfterNewOptionSet(retVal)
{
    RefreshMultiplePickListSet();
    if(!IsNull(retVal) && retVal.length > 30)
    {
        _selectOptionSet.set_dataValue(retVal);
        OnOptionSetChange()
    }
}
function OnEditGlobalOptionSet()
{
    if(IsNull(_selectOptionSet.get_dataValue()))
        return;
    var url = formatString(_oConst.sPicklistEditorUrlFormat,_selectOptionSet.get_dataValue()),
        oWindowInfo = GetWindowInformation(OptionSet);
    openStdDlg(Mscrm.CrmUri.create(url),buildWinName(),oWindowInfo.Width,oWindowInfo.Height);
    var oLedtPicklistDefault = Mscrm.FormControlInputBehavior.GetBehavior("ledtPicklistDefault"),
        defValue = oLedtPicklistDefault.get_dataValue();
    RefreshMultiplePickListSet();
    OnOptionSetChange();
    if(!IsNull(defValue))
        for(var i = 0; i < oLedtPicklistDefault.get_element().options.length; i++)
            if(oLedtPicklistDefault.get_element().options[i].value == defValue)
            {
                oLedtPicklistDefault.get_element().selectedIndex = i;
                break
            }
}
function RefreshMultiplePickListSet()
{
    var ret = GetOptionSetList(),
        oldvalue = _selectOptionSet.get_dataValue();
    if(!isNullOrEmptyString(ret))
    {
        var i,
            selectOptionSet = $get("selectOptionSet");
        while(selectOptionSet.options.length > 0)
            selectOptionSet.options.remove(0);
        if(ret.indexOf("SELECTED") > 0 && ret.indexOf("SELECTED=") < 0 && ret.indexOf("SELECTED =") < 0)
            ret = ret.replace("SELECTED","");
        var oXml = XUI.Xml.LoadXml("<select>" + ret + "</select>"),
            path = "/select/option",
            oNodes = XUI.Xml.SelectNodes(oXml,path);
        for(i = 0; i < oNodes.length; i++)
        {
            var oOption = document.createElement("OPTION");
            _selectOptionSet.get_element().options.add(oOption);
            XUI.Html.SetText(oOption,XUI.Xml.GetText(oNodes[i]));
            oOption.value = oNodes[i].getAttribute("value")
        }
    }
    _selectOptionSet.set_dataValue(oldvalue)
}
function OnOptionSetChange()
{
    if(Mscrm.FormControlInputBehavior.GetBehavior("rdUseExisting").get_dataValue() == 1 && !IsNull(_selectOptionSet.get_dataValue()) && _selectOptionSet.get_dataValue().length > 1)
    {
        var retVal = GetOptionSetDataXml(_selectOptionSet.get_dataValue());
        if(retVal != null)
        {
            _ledtPicklistValues.set_xmlData(retVal);
            ReloadDefault()
        }
        $get("buttonEditSet").disabled = false
    }
    else
    {
        _ledtPicklistValues.set_xmlData(GetOptionSetDataXml(""));
        $get("buttonEditSet").disabled = true;
        ReloadDefault()
    }
}
function ReloadDefault()
{
    var ledtPicklistDefault = document.getElementById("ledtPicklistDefault"),
        defdisabled = ledtPicklistDefault.disabled;
    if(ledtPicklistDefault != null)
    {
        var defaultValue = Mscrm.FormControlInputBehavior.GetBehavior("ledtPicklistDefault").get_dataValue();
        XUI.Html.SetOuterHTML(ledtPicklistDefault,_ledtPicklistValues.createDefaultControl("ledtPicklistDefault",defaultValue));
        $create(Mscrm.FormInputControl.SelectInputBehavior,{},null,null,$get("ledtPicklistDefault"))
    }
    ledtPicklistDefault = document.getElementById("ledtPicklistDefault");
    ledtPicklistDefault.disabled = defdisabled;
    LinkedAttributeDataChanges()
}
function isNull(o)
{
    return o === null || o === undefined
}
function AdjustDivContainerHeightByOffset()
{
    if(Mscrm.Utilities.isIE())
    {
        var div = $get("ledtStatusValues_divValueList");
        if(!isNull(div))
        {
            var divOffsetParent = $get("ledtStatusValues_divValueList").parentNode;
            if(!isNull(divOffsetParent))
            {
                var offsetHeight = divOffsetParent.offsetHeight;
                if(offsetHeight > 0)
                    divOffsetParent.height = offsetHeight
            }
        }
    }
}
function resetCurrentState()
{
    _iCurrentState = -1
}
function launchStatusReasonTransitionDialog(objectTypeCode)
{
    Mscrm.StatusReasonTransition.launchStatusReasonTransitionDialog(objectTypeCode,_isStatusReasonTransitionEnabled)
}
function setEnableStatusReasonTransition(isStatusReasonTransitionEnabled)
{
    _isStatusReasonTransitionEnabled = isStatusReasonTransitionEnabled
}
function saveEnableStatusResaonTransition()
{
    if(typeof _isStatusReasonTransitionEnabled != "undefined")
    {
        var oDataXml = createXmlDoc(_oTags.entity);
        addTextXmlNode(oDataXml,_oTags.entityid,_sEntityId);
        addTextXmlNode(oDataXml,"enforcestatetransitions",_isStatusReasonTransitionEnabled);
        var rc = new RemoteCommand("SystemCustomization","UpdateEntityEnforceStateTransitions");
        rc.SetXmlParameter("data",convertXmlDocToString(oDataXml));
        var result = rc.Execute()
    }
}
function OpenFormulaEditor()
{
    _bEdit = false;
    _bSaving = false;
    var _selDataSource = Mscrm.FormControlInputBehavior.GetBehavior("selDataSource"),
        windowInfo,
        url;
    if(_selDataSource.get_dataValue() == _oDataSources.sRollup)
        url = String.format(_oConst.sRollUpEditorUrlFormat,_sAttributeId,_sEntityId);
    else
        url = String.format(_oConst.sPblEditorUrlFormat,_sAttributeId,_sEntityId);
    windowInfo = Mscrm.WindowInformation.getWindowInformation(Mscrm.EntityTypeCode.Attribute);
    openStdWin(Mscrm.CrmUri.create(url),buildWinName(),windowInfo.Width,windowInfo.Height)
}
