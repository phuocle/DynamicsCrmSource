
var _oField,
    _oFormXml,
    _oPropertiesXml,
    _oFieldsXml,
    _oEvent,
    _oEvents,
    _oParameters,
    _bPreviewMode,
    _sControlClassId,
    _sObjectTypeCode,
    _sActualDBName,
    _sFldExpFor,
    _objTypeCode,
    _schemaPropsEdited = false,
    _bSysReq = false,
    _bScriptReq = false,
    _secCols = 2,
    _cellId = null,
    _numRowsControl = null,
    _chkAutoExpandingControl,
    _chkShowLabelControl,
    _chkDisabledControl,
    _chkDisableAutoResolveControl,
    _chkDisableMruControl,
    _chkLockedControl,
    _chkVisibleControl,
    _chkAvailableControl,
    _chkEnableRelFilterControl,
    _chkAllowFilterOffControl,
    _chkShowQuickFindControl,
    _txtLabelControl,
    _isEditMode,
    _bRequired,
    _bAvailableForPhoneDisabled;
function FieldPropsJsWindowOnLoad()
{
    _numRowsControl = Mscrm.FormControlInputBehavior.GetBehavior("numRows");
    _chkAutoExpandingControl = Mscrm.FormControlInputBehavior.GetBehavior("chkAutoExpanding");
    _chkShowLabelControl = Mscrm.FormControlInputBehavior.GetBehavior("chkShowLabel");
    _chkDisabledControl = Mscrm.FormControlInputBehavior.GetBehavior("chkDisabled");
    _chkDisableAutoResolveControl = Mscrm.FormControlInputBehavior.GetBehavior("chkDisableAutoResolve");
    _chkDisableMruControl = Mscrm.FormControlInputBehavior.GetBehavior("chkDisableMru");
    _chkLockedControl = Mscrm.FormControlInputBehavior.GetBehavior("chkLocked");
    _chkVisibleControl = Mscrm.FormControlInputBehavior.GetBehavior("chkVisible");
    _chkAvailableControl = Mscrm.FormControlInputBehavior.GetBehavior("chkAvailable");
    _chkEnableRelFilterControl = Mscrm.FormControlInputBehavior.GetBehavior("chkEnableRelFilter");
    _chkAllowFilterOffControl = Mscrm.FormControlInputBehavior.GetBehavior("chkAllowFilterOff");
    _chkShowQuickFindControl = Mscrm.FormControlInputBehavior.GetBehavior("chkShowQuickFind");
    _txtLabelControl = Mscrm.FormControlInputBehavior.GetBehavior("txtLabel");
    getDialogParams();
    ShowTabSections(_bPreviewMode);
    OnArticleTabLoad(_oField);
    initControls();
    Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() && 
        showArticleTab();
    if(FORM_TYPE != "quick" && FORM_TYPE != "card")
    {
        var controlClassId = _oField.sControlClassId;
        if(controlClassId == _ControlClassIds.customControl)
            controlClassId = GetControlClassIdForFormFactor(_oField.FormXml,_oField.sCustomControlUniqueId,2);
        if(!IsNull(_cellId) && Mscrm.FormLibraryAndEventHandlerUtils.canElementBeAdded(_oField.sAttributeSchemaName,controlClassId,_objTypeCode))
            $addHandler($get("tabEventsTab"),"click",loadLibraryControl);
        else
            $get("tabEventsTab").style.display = "none"
    }
}
function loadLibraryControl()
{
    Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(true,Mscrm.FormControlTypes.field,_cellId,_objTypeCode)
}
Sys.Application.add_load(FieldPropsJsWindowOnLoad);
function getDialogParams()
{
    var oArgs = getDialogArguments();
    _oField = oArgs.oField;
    _oFormXml = _oField.FormXml;
    _oPropertiesXml = oArgs.oPropertiesXml;
    _oFieldsXml = oArgs.oFieldsXml;
    _oEvents = _oField.oEvents;
    _oParameters = _oField.oParameters;
    _bPreviewMode = oArgs.bPreviewMode;
    _sObjectTypeCode = oArgs.sObjectTypeCode;
    _sActualDBName = oArgs.sActualDBName;
    _bSysReq = oArgs.bSysRequired;
    _bScriptReq = oArgs.bScriptRequired;
    _sControlClassId = _oField.sControlClassId;
    _sFldExpFor = oArgs.sFldExpFor;
    _objTypeCode = oArgs.sObjectTypeCode;
    _secCols = oArgs.iSecCols;
    _cellId = oArgs.CellId;
    _isEditMode = oArgs.isEditMode;
    _bRequired = oArgs.bRequired;
    _bAvailableForPhoneDisabled = oArgs.AvailableForPhoneDisabled;
    Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(_oField.FormXml));
    Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = _oFieldsXml;
    Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = _oPropertiesXml
}
function initControls()
{
    $get("chkVisible").checked = _oField.Visible;
    if(FORM_TYPE == "mainInteractionCentric")
        $get("divAvailabilitySection").style.display = "none";
    else
    {
        if(_bAvailableForPhoneDisabled)
            $get("chkAvailable").disabled = true;
        $get("chkAvailable").checked = _oField.AvailableForPhone;
        if(_bRequired)
            $get("chkAvailable").disabled = true
    }
    if((_oField.sLabel == null || _oField.sLabel == "") && _oField.sControlClassId.toUpperCase() == _ControlClassIds.notes.toUpperCase())
        _txtLabelControl.set_dataValue(LOCID_NOTES_TITLE);
    else
        _txtLabelControl.set_dataValue(_oField.sLabel);
    _chkShowLabelControl.set_dataValue(_oField.bShowLabel);
    _chkDisabledControl.set_dataValue(_oField.bDisabled);
    if(FORM_TYPE == "card")
    {
        $get("chkDisabled").disabled = true;
        $get("chkDisabled").checked = true
    }
    if(IsNull(_oField.sTabName))
    {
        chkAutoExpanding.style.display = "none";
        chkAutoExpandingLabel.style.display = "none"
    }
    if(_sFldExpFor === "footer" || _sFldExpFor === "header" && _isEditMode)
    {
        _chkDisabledControl.set_dataValue(true);
        chkDisabled.disabled = true
    }
    $get("orderByActivityWall").value = "descending";
    $get("sortActivityWall").value = "modifiedon";
    if(_oField.sControlClassId.toUpperCase() == _ControlClassIds.notes.toUpperCase() && _oField.oParameters)
    {
        if(_oField.oParameters["DefaultTabId"])
            $get("selDefaultView").value = _oField.oParameters["DefaultTabId"];
        if(_oField.oParameters["OrderByActivityWall"])
            $get("orderByActivityWall").value = _oField.oParameters["OrderByActivityWall"];
        if(_oField.oParameters["SortActivityWall"])
            $get("sortActivityWall").value = _oField.oParameters["SortActivityWall"]
    }
    switch(_oField.sDataType)
    {
        case _oDataTypes.customer:
        case _oDataTypes.owner:
        case _oDataTypes.lookup:
        case _oDataTypes.partylist:
            $get("trDisableAutoResolve").style.display = "";
            $get("trDisableMru").style.display = "";
            _chkDisableAutoResolveControl.set_dataValue(GetParamValue("AutoResolve","true") == "false");
            $addHandler($get("chkDisableAutoResolve"),"click",ToggleDisableMru);
            _chkDisableMruControl.set_dataValue(_chkDisableAutoResolveControl.get_dataValue() || GetParamValue("DisableMru","false") == "true");
            _chkDisableMruControl.set_disabled(_chkDisableAutoResolveControl.get_dataValue());
            break
    }
    _chkLockedControl.set_dataValue(_oField.bLocked);
    if(_bSysReq || _bScriptReq)
    {
        _chkLockedControl.set_disabled(true);
        _chkLockedControl.set_dataValue(true);
        SetLockingText()
    }
    onLockedClick();
    populateColumnLayout(_oField.iColSpan,_secCols);
    populateRowLayoutSection();
    populateControlSection();
    if(_oField.sDataType === _oDataTypes.lookup && !IsMultiEntityLookup() && InSupportedFieldList())
    {
        $addHandler($get("chkEnableRelFilter"),"click",ToggleRelFilter);
        if(!IsLookupBrowse())
            populateDisplaySection();
        else
            $get("divDisplaySection").style.display = "none";
        populateRelFiltersSection()
    }
    else
    {
        $get("divRelationshipFilterSection").style.display = "none";
        $get("divDisplaySection").style.display = "none"
    }
    Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeDisplayName").set_dataValue(_oField.sAttributeDisplayName);
    Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeSchemaName").set_dataValue(_sActualDBName);
    Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeDescription").set_dataValue(_oField.sAttributeDescription);
    if(_oField.sControlClassId.toLowerCase() === _ControlClassIds.notes.toLowerCase())
        $get("divFieldSection").style.display = "none";
    if(!Mscrm.InternalUtilities.JSTypes.isNull(_oParameters) && _oParameters["ShowArticleTab"] == "true")
    {
        $get("chkShowArticleTab").checked = true;
        setSelectIndexFromValue("searchFilter",_oParameters["FilterResults"]);
        setSelectIndexFromValue("primaryCustomer",_oParameters["SelectPrimaryCustomer"]);
        setSelectIndexFromValue("actionSelection",_oParameters["ShowContextualActions"]);
        setSelectIndexFromValue("autosuggestion",_oParameters["SearchForAutoSuggestionsUsing"]);
        setSelectIndexFromValue("showRating",_oParameters["ShowRatingUsing"]);
        setSelectIndexFromValue("autosuggestionSource",_oParameters["AutoSuggestionSource"] || "0");
        setSelectIndexFromValue("defaultLanguage",_oParameters["SelectDefaultLanguage"] && _oParameters["SelectDefaultLanguage"] != Mscrm.Utilities.emptyGuid() ? _oParameters["SelectDefaultLanguage"] : "0");
        $get("chkAllowChangeFilters").checked = _oParameters["AllowChangingFiltersOnUI"] == "true" ? true : false;
        $get("chkEnableAutomaticSuggestions").checked = _oParameters["EnableAutoSuggestions"] == "true" ? true : false;
        $get("chkEnableRating").checked = _oParameters["EnableRating"] == "true" ? true : false;
        $get("chkShowLanguageFilter").checked = _oParameters["ShowLanguageFilter"] == "true" ? true : false;
        $get("chkShowDepartmentFilter").checked = _oParameters["ShowDepartmentFilter"] == "true" ? true : false;
        $get("RowsPerPage").value = _oParameters["NumberOfResults"];
        SetViewListValue(_oParameters["ActionList"],$get("ActionListSelector"));
        enableDisableKnowledgeSuggestion();
        enableDisableViewListActions()
    }
}
function InSupportedFieldList()
{
    var bSupported = true;
    switch(_sActualDBName.toLowerCase())
    {
        case "subjectid":
            bSupported = false;
            break
    }
    return bSupported
}
function IsLookupBrowse()
{
    var oLookupField = XUI.Xml.SelectSingleNode(_oPropertiesXml,"entity/fields/field[@name='" + _sActualDBName + "']",null);
    if(!IsNull(oLookupField))
    {
        var sLookupBrowse = oLookupField.getAttribute("lookupbrowse");
        return !IsNull(sLookupBrowse) && sLookupBrowse == "1"
    }
    return false
}
function GetParamValue(sName,vDefVal)
{
    if(!IsNull(_oParameters) && !IsNull(_oParameters[sName]))
        return _oParameters[sName];
    else
        return vDefVal
}
function cancel()
{
    window.returnValue = null;
    closeWindow()
}
function editSchemaProps(solutionId)
{
    OpenEditAttributeDialog(_sActualDBName,_objTypeCode,solutionId);
    SetFormEditorXmls();
    _schemaPropsEdited = true;
    var oPropertiesField = XUI.Xml.SelectSingleNode(_oPropertiesXml,"/entity/fields/field[@name = '" + _sActualDBName + "']",null);
    sAttributeDisplayName = XUI.Xml.SelectSingleNode(oPropertiesField,"displaynames/displayname[@languagecode = " + USER_LANGUAGE_CODE + "]",null).getAttribute("description");
    var oEntityField = XUI.Xml.SelectSingleNode(_oFieldsXml,"/entity/fields/field[@name = '" + _sActualDBName + "']",null);
    sAttributeDescription = oEntityField.getAttribute("description");
    Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeDisplayName").set_dataValue(sAttributeDisplayName);
    Mscrm.FormControlInputBehavior.GetBehavior("txtAttributeDescription").set_dataValue(sAttributeDescription)
}
function SetFormEditorXmls()
{
    try
    {
        command = new RemoteCommand("FormEditorWebService","GetPropAndFieldXml");
        command.SetParameter("objectTypeCode",_objTypeCode);
        result = command.Execute();
        if(result.Success)
        {
            var proAndFieldXml = result.ReturnValue;
            _oPropertiesXml = XUI.Xml.LoadXml(proAndFieldXml.anyType[1]);
            _oFieldsXml = XUI.Xml.LoadXml(proAndFieldXml.anyType[0])
        }
    }
    catch(e)
    {
    }
}
function applychanges()
{
    var oKmControl;
    if(Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() && showArticleTab())
    {
        oKmControl = applyArticleTabChanges();
        if(!oKmControl)
            return
    }
    if(validateParameters())
    {
        switch(_oField.sDataType)
        {
            case _oDataTypes.customer:
            case _oDataTypes.owner:
            case _oDataTypes.lookup:
            case _oDataTypes.partylist:
                if(InSupportedFieldList())
                {
                    if(IsNull(_oParameters))
                        _oParameters = {};
                    _oParameters["AutoResolve"] = !_chkDisableAutoResolveControl.get_dataValue() ? "true" : "false";
                    _oParameters["DisableMru"] = _chkDisableMruControl.get_dataValue() ? "true" : "false";
                    if(_oField.sDataType == _oDataTypes.lookup)
                    {
                        if($get("divDisplaySection").style.display != "none")
                        {
                            _oParameters["DisableQuickFind"] = !_chkShowQuickFindControl.get_dataValue() ? "true" : "false";
                            _oParameters["DisableViewPicker"] = !$get("viewSelection").selectedIndex ? "true" : "false";
                            if($get("DefaultViewCombo").value != null)
                                _oParameters["DefaultViewId"] = $get("DefaultViewCombo").value;
                            else
                                _oParameters["DefaultViewId"] = "";
                            _oParameters["AvailableViewIds"] = getViewsSelected($get("ViewListSelector"))
                        }
                        if($get("divRelationshipFilterSection").style.display != "none")
                        {
                            _oParameters["FilterRelationshipName"] = "";
                            _oParameters["DependentAttributeName"] = "";
                            if(_chkEnableRelFilterControl.get_dataValue())
                            {
                                _oParameters["DependentAttributeName"] = GetValFrmRelKey("DependentAttributeName");
                                _oParameters["DependentAttributeType"] = GetValFrmRelKey("DependentAttributeType");
                                _oParameters["FilterRelationshipName"] = GetValFrmRelKey("FilterRelationshipName");
                                _oParameters["AllowFilterOff"] = _chkAllowFilterOffControl.get_dataValue() ? "true" : "false"
                            }
                            else
                            {
                                _oParameters["DependentAttributeName"] = null;
                                _oParameters["FilterRelationshipName"] = null;
                                _oParameters["AllowFilterOff"] = "false"
                            }
                        }
                    }
                }
                break
        }
        var colSpan = 1;
        if($get("rdColumnSpan1").checked)
            colSpan = 1;
        if($get("rdColumnSpan2").checked)
            colSpan = 2;
        if($get("rdColumnSpan3").checked)
            colSpan = 3;
        if($get("rdColumnSpan4").checked)
            colSpan = 4;
        if(_oField.sControlClassId.toUpperCase() == _ControlClassIds.notes.toUpperCase())
        {
            if(IsNull(_oParameters))
                _oParameters = {};
            _oParameters["DefaultTabId"] = $get("selDefaultView").value;
            _oParameters["OrderByActivityWall"] = $get("orderByActivityWall").value;
            _oParameters["SortActivityWall"] = $get("sortActivityWall").value;
            if(Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() && showArticleTab())
            {
                _oParameters["ShowArticleTab"] = "true";
                _oParameters["FilterResults"] = oKmControl.FilterResults.toString();
                _oParameters["AllowChangingFiltersOnUI"] = oKmControl.AllowChangingFiltersOnUI.toString();
                _oParameters["ShowLanguageFilter"] = oKmControl.ShowLanguageFilter.toString();
                _oParameters["ShowDepartmentFilter"] = oKmControl.ShowDepartmentFilter.toString();
                _oParameters["EnableAutoSuggestions"] = oKmControl.EnableAutoSuggestions.toString();
                _oParameters["SearchForAutoSuggestionsUsing"] = oKmControl.SearchForAutoSuggestionsUsing;
                _oParameters["ShowRatingUsing"] = oKmControl.ShowRatingUsing;
                _oParameters["EnableRating"] = oKmControl.EnableRating ? oKmControl.EnableRating.toString() : "";
                _oParameters["AutoSuggestionSource"] = oKmControl.AutoSuggestionSource;
                _oParameters["SelectPrimaryCustomer"] = oKmControl.SelectPrimaryCustomer == null ? "" : oKmControl.SelectPrimaryCustomer;
                _oParameters["NumberOfResults"] = oKmControl.NumberOfResults;
                _oParameters["ShowContextualActions"] = oKmControl.ShowContextualActions.toString();
                _oParameters["ActionList"] = oKmControl.ActionList.toString();
                _oParameters["SelectDefaultLanguage"] = oKmControl.SelectDefaultLanguage
            }
            else
            {
                _oParameters["ShowArticleTab"] = "false";
                _oParameters["FilterResults"] = "";
                _oParameters["AllowChangingFiltersOnUI"] = "";
                _oParameters["ShowLanguageFilter"] = "";
                _oParameters["ShowDepartmentFilter"] = "";
                _oParameters["EnableAutoSuggestions"] = "";
                _oParameters["SearchForAutoSuggestionsUsing"] = "";
                _oParameters["ShowRatingUsing"] = "";
                _oParameters["EnableRating"] = "";
                _oParameters["AutoSuggestionSource"] = "";
                _oParameters["SelectPrimaryCustomer"] = "";
                _oParameters["NumberOfResults"] = "";
                _oParameters["ShowContextualActions"] = "";
                _oParameters["ActionList"] = "";
                _oParameters["SelectDefaultLanguage"] = Mscrm.Utilities.emptyGuid()
            }
        }
        var bAutoExpanding = _chkAutoExpandingControl.get_dataValue();
        if(!IsNull(_oField.sTabName) && bAutoExpanding)
            bAutoExpanding = AutoExpandingRequired(_oField.sTabName,_sActualDBName,_oFormXml);
        Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();
        var currentControlClassId = IsMultiControlField(_oField.sDataType,_oField.sDataTypeFormat) ? Mscrm.FormControlInputBehavior.GetBehavior("selControlClassId").get_dataValue() : _oField.sControlClassId;
        if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !IsNull(Mscrm.CustomControls) && !IsNull(Mscrm.CustomControls.CustomControlManager.get_instance()))
        {
            var _updatedFormXML = Mscrm.CustomControls.CustomControlManager.get_instance().getCustomControlDOMForformXML(Mscrm.FormLibraryAndEventHandlerUtils.formXml,currentControlClassId,_oParameters);
            Mscrm.FormLibraryAndEventHandlerUtils.formXml = _updatedFormXML
        }
        var oField = new FieldObj(_txtLabelControl.get_dataValue() == null ? "" : _txtLabelControl.get_dataValue(),_chkShowLabelControl.get_dataValue(),_chkDisabledControl.get_dataValue(),null,_oField.sSectionName,_chkLockedControl.get_dataValue(),colSpan,_numRowsControl.get_dataValue(),bAutoExpanding,Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !IsNull(Mscrm.CustomControls) ? Mscrm.CustomControls.CustomControlManager.get_instance().get_updatedFieldRowClassId() : currentControlClassId,_oField.sDataType,_oField.sDataTypeFormat,_oField.sAttributeDisplayName,_oField.sAttributeSchemaName,_oField.sAttributeDescription,_oParameters,_schemaPropsEdited,_oPropertiesXml,_oFieldsXml,Mscrm.FormLibraryAndEventHandlerUtils.formXml,$get("chkVisible").checked,$get("chkAvailable").checked);
        Mscrm.Utilities.setReturnValue(oField);
        closeWindow()
    }
}
function validateParameters()
{
    if(IsNull(_txtLabelControl.get_dataValue()))
    {
        $get("crmTabBar").control.down(tabDisplayTab);
        _txtLabelControl.setFocus();
        alert(LOCID_EMPTY_LABEL_ERROR);
        return false
    }
    var controlClassId = _oField.sControlClassId;
    if(controlClassId == _ControlClassIds.customControl)
        controlClassId = GetControlClassIdForFormFactor(_oField.FormXml,_oField.sCustomControlUniqueId,2);
    CanSpanRows(controlClassId) && IsNull(_numRowsControl.get_dataValue()) && 
        _numRowsControl.set_dataValue(_oField.iRowSpan);
    if(Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.CustomControlMobile) && !IsNull(Mscrm.CustomControls))
    {
        var validationCheck = Mscrm.CustomControls.CustomControlManager.get_instance().validateFieldCustomControls();
        if(!validationCheck)
            return false
    }
    return true
}
function ShowTabSections(bPreviewMode)
{
    ShowTabSection("Label");
    var controlClassId = _oField.sControlClassId;
    if(controlClassId == _ControlClassIds.customControl)
        controlClassId = GetControlClassIdForFormFactor(_oField.FormXml,_oField.sCustomControlUniqueId,2);
    Mscrm.Utilities.IsKnowledgeBaseFeatureAvailable() && _supportKMControl === "True" && !Mscrm.InternalUtilities.JSTypes.isNull(controlClassId) && (controlClassId.toUpperCase() == _ControlClassIds.searchwidget.toUpperCase() || controlClassId.toUpperCase() == _ControlClassIds.notes.toUpperCase()) && 
        ShowTabSection("ArticleTab");
    ShowTabSection("ColumnLayout");
    CanSpanRows(controlClassId) && 
        ShowTabSection("RowLayout");
    if(_oField.sDataType === _oDataTypes.lookup)
    {
        ShowTabSection("Display");
        ShowTabSection("RelationshipFilter")
    }
    ShowTabSection("Schema");
    ShowTabSection("Data");
    if(!bPreviewMode)
    {
        ShowTabSection("Field");
        ShowTabSection("Location");
        ShowTabSection("Locking");
        ShowTabSection("BusinessRules");
        IsMultiControlField(_oField.sDataType,_oField.sDataTypeFormat) && 
            ShowTabSection("Control");
        if(_sFldExpFor === "section")
            ShowTabSection("EventList");
        else
            document.getElementById("tabEventsTab").style.display = "none"
    }
    if(controlClassId.toUpperCase() == _ControlClassIds.notes.toUpperCase())
    {
        $get("divVisibilitySection").style.display = "none";
        ShowTabSection("DefaultView")
    }
}
function populateTabSelector(sTabName,sSectionName)
{
    var oTabs = XUI.Xml.SelectNodes(_oFormXml,"/entity/form/tabs/tab[(not(@locklevel) or @locklevel = '0') and columns/column/sections/section[not(@locklevel) or @locklevel = '0']]",null),
        oTabSelector = new Select;
    oTabSelector.ID = "selTab";
    oTabSelector.OnChange = "onTabChange();";
    oTabSelector.Selected = sTabName;
    for(var i = 0; i < oTabs.length; i++)
        oTabSelector.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oTabs[i],"labels/label[@languagecode = " + _langCode + "]/@description",null)),oTabs[i].getAttribute("name"));
    oTabSelector.AddToControl(selTab,true)
}
function populateSectionSelector(sTabName,sSectionName)
{
    var oSections = XUI.Xml.SelectNodes(_oFormXml,"/entity/form/tabs/tab[@name = '" + sTabName + "']/columns/column/sections/section[not(@locklevel) or @locklevel = '0']",null),
        oSectionSelector = new Select;
    oSectionSelector.ID = "selSection";
    oSectionSelector.OnChange = "onSectionChange();";
    oSectionSelector.Selected = sSectionName;
    for(var i = 0; i < oSections.length; i++)
        oSectionSelector.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oSections[i],"labels/label[@languagecode = " + _langCode + "]/@description",null)),oSections[i].getAttribute("name"));
    oSectionSelector.AddToControl(selSection,true)
}
function populateColumnLayoutSection()
{
    var rdColumnSpan1 = $get("rdColumnSpan1"),
        rdColumnSpan2 = $get("rdColumnSpan2");
    if(IsCurrSectionVariableHeight())
    {
        rdColumnSpan1.disabled = rdColumnSpan2.disabled = true;
        rdColumnSpan1.checked = true
    }
    else
        if(CanSpanColumns(_sControlClassId))
        {
            rdColumnSpan1.disabled = rdColumnSpan2.disabled = false;
            if(_oField.bSpansTwoColumns)
                rdColumnSpan2.checked = true;
            else
                rdColumnSpan1.checked = true
        }
        else
        {
            rdColumnSpan1.disabled = rdColumnSpan2.disabled = true;
            rdColumnSpan2.checked = true
        }
}
function populateRowLayoutSection()
{
    if(CanSpanRows(_sControlClassId))
    {
        Mscrm.FormControlInputBehavior.GetBehavior("numRows").set_dataValue(_oField.iRowSpan);
        _chkAutoExpandingControl.set_disabled(false);
        _chkAutoExpandingControl.set_dataValue(_oField.bAutoExpanding)
    }
}
function IsMultiEntityLookup()
{
    var fMultiEntityLookup = false;
    try
    {
        var command = new RemoteCommand("FormEditorWebService","IsMultipleEntityLookup");
        command.SetParameter("parentEntityCode",_sObjectTypeCode);
        command.SetParameter("attributeName",_sActualDBName);
        var result = command.Execute();
        if(result.Success)
            fMultiEntityLookup = result.ReturnValue
    }
    catch(e)
    {
        fMultiEntityLookup = true
    }
    if(fMultiEntityLookup)
    {
        $get("divDisplaySection").style.display = "none";
        $get("divRelationshipFilterSection").style.display = "none"
    }
    return fMultiEntityLookup
}
function populateDisplaySection()
{
    try
    {
        _chkShowQuickFindControl.set_dataValue(GetParamValue("DisableQuickFind","false") == "false");
        CreateViewSelector(ToggleViewSelection);
        CreateViewFilters();
        var viewSelection = $get("viewSelection");
        viewSelection.selectedIndex = GetParamValue("DisableViewPicker","false") == "false";
        if(viewSelection.selectedIndex && !IsNull(_oParameters) && !IsNull(_oParameters["AvailableViewIds"]))
            viewSelection.selectedIndex = 2;
        ToggleViewSelection();
        if(!IsNull(_oParameters))
        {
            var viewId = _oParameters["DefaultViewId"];
            viewId != null && viewId.length > 0 && 
                setSelectedValue($get("DefaultViewCombo"),viewId);
            viewSelection.selectedIndex && 
                SetViewListValue(_oParameters["AvailableViewIds"],$get("ViewListSelector"))
        }
        Mscrm.FormControlInputBehavior.GetBehavior("DefaultViewCombo").set_disabled(GetParamValue("DefaultViewReadOnly","false") == "true");
        var isViewPickerReadOnly = GetParamValue("ViewPickerReadOnly","false") == "true";
        if(isViewPickerReadOnly)
        {
            Mscrm.FormControlInputBehavior.GetBehavior("ViewListSelector").set_disabled(true);
            Mscrm.FormControlInputBehavior.GetBehavior("viewSelection").set_disabled(true)
        }
    }
    catch(e)
    {
        $get("divDisplaySection").style.display = "none"
    }
}
function populateRelFiltersSection()
{
    try
    {
        var relName = null,
            dependentAttrName = null,
            dependentAttrType = null;
        if(!IsNull(_oParameters))
        {
            relName = _oParameters["FilterRelationshipName"];
            dependentAttrName = _oParameters["DependentAttributeName"];
            dependentAttrType = _oParameters["DependentAttributeType"]
        }
        CreateCurRelFilters();
        dependentAttrName != null && dependentAttrName.length > 0 && 
            setSelectedValue($get("selCurRels"),GetRelKey(dependentAttrName,dependentAttrType,relName,true));
        CreateTarRelFilters();
        relName != null && relName.length > 0 && 
            setSelectedValue($get("selTarRels"),GetRelKey(dependentAttrName,dependentAttrType,relName,false));
        _chkAllowFilterOffControl.set_dataValue(GetParamValue("AllowFilterOff","true") == "true");
        _chkEnableRelFilterControl.set_dataValue(!IsNull(dependentAttrName) && !IsNull(relName));
        ToggleRelFilter()
    }
    catch(e)
    {
        $get("divRelationshipFilterSection").style.display = "none"
    }
}
function CreateViewFilters()
{
    var command = new RemoteCommand("FormEditorWebService","GetViewsHtmlOfAttributeEntity");
    command.SetParameter("parentEntityCode",_sObjectTypeCode);
    command.SetParameter("attributeName",_sActualDBName);
    var result = command.Execute();
    if(result.Success)
    {
        var retVal = result.ReturnValue;
        ConstructViewCombo(retVal,"DefaultViewCombo",$get("DefaultView"),handleViewComboChange);
        ConstructViewList(retVal,"ViewListSelector",$get("viewSelection"),$get("ViewsAvailable"),handleViewListChange,$get("DefaultViewCombo"));
        Mscrm.FormXmlUtils.setDomAttribute($get("ViewListSelector"),"title",LOCID_MULTISELECT_VIEW_TITLE);
        Mscrm.FormXmlUtils.setDomAttribute($get("DefaultViewCombo"),"title",XUI.Html.GetText($get("defaultViewLabelId")))
    }
}
var _xmlDocRels = null,
    sep = ".";
function GetValFrmRelKey(valName)
{
    var selAtt,
        selRel;
    if($get("selCurRels").value.split(sep).length > 1)
    {
        selAtt = $get("selCurRels");
        selRel = $get("selTarRels")
    }
    else
    {
        selAtt = $get("selTarRels");
        selRel = $get("selCurRels")
    }
    switch(valName)
    {
        case "DependentAttributeName":
            return selAtt.value.split(sep)[0] + sep + selAtt.value.split(sep)[1];
        case "DependentAttributeType":
            return selAtt.value.split(sep)[2];
        case "FilterRelationshipName":
            return selRel.value
    }
    return ""
}
function GetRelKey(depAttr,depAttrTyp,relName,isCurPl)
{
    var curNode = XUI.Xml.SelectSingleNode(_xmlDocRels.documentElement,"RelationInfo[RelationKey='" + relName + "']",null);
    if(curNode != null)
        return isCurPl ? relName : depAttr + sep + depAttrTyp;
    else
        return isCurPl ? depAttr + sep + depAttrTyp : relName
}
function CreateCurRelFilters()
{
    var command = new RemoteCommand("FormEditorWebService","GetRelatedViewsFilters");
    command.SetParameter("currentEntityCode",_sObjectTypeCode);
    command.SetParameter("attributeName",_sActualDBName);
    result = command.Execute();
    if(result.Success)
    {
        _xmlDocRels = XUI.Xml.LoadXml(result.ReturnValue);
        var parRelNodes = XUI.Xml.SelectNodes(_xmlDocRels.documentElement,"RelationInfo",null),
            SelCurRel = new Select;
        SelCurRel.ID = "selCurRels";
        var optGrpParRel = new OptionGroup("",true,true,false);
        optGrpParRel.Sorted = true;
        optGrpParRel.Ascend = true;
        for(var i = 0; i < parRelNodes.length; i++)
            optGrpParRel.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(parRelNodes[i],"DisplayName",null)),XUI.Xml.GetText(XUI.Xml.SelectSingleNode(parRelNodes[i],"RelationKey",null)));
        SelCurRel.AddOptionGroup(optGrpParRel);
        SelCurRel.AddToControl($get("tdParRels"));
        $get("selCurRels").onchange = CreateTarRelFilters;
        Mscrm.FormXmlUtils.setDomAttribute($get("selCurRels"),"title",XUI.Html.GetText($get("chkEnableRelFilterLabel")))
    }
}
function CreateTarRelFilters()
{
    var SelTarRel = new Select;
    SelTarRel.ID = "selTarRels";
    var tarRelNodes = XUI.Xml.SelectNodes(_xmlDocRels.documentElement,"RelationInfo[RelationKey='" + $get("selCurRels").value + "']/RelationInfoCollection/RelationInfo",null),
        optGrpLkupRel = new OptionGroup("",true,true,false);
    optGrpLkupRel.Sorted = true;
    optGrpLkupRel.Ascend = true;
    for(var i = 0; i < tarRelNodes.length; i++)
        optGrpLkupRel.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(tarRelNodes[i],"DisplayName",null)),XUI.Xml.GetText(XUI.Xml.SelectSingleNode(tarRelNodes[i],"RelationKey",null)));
    SelTarRel.AddOptionGroup(optGrpLkupRel);
    SelTarRel.AddToControl($get("tdLkupRels"));
    Mscrm.FormXmlUtils.setDomAttribute($get("selTarRels"),"title",XUI.Html.GetText($get("selTraRelsLabelId")))
}
function ToggleRelFilter()
{
    var chkEnableRelFilterDataValue = _chkEnableRelFilterControl.get_dataValue();
    Mscrm.FormControlInputBehavior.GetBehavior("selCurRels").set_disabled(!chkEnableRelFilterDataValue);
    Mscrm.FormControlInputBehavior.GetBehavior("selTarRels").set_disabled(!chkEnableRelFilterDataValue);
    _chkAllowFilterOffControl.set_disabled(!chkEnableRelFilterDataValue)
}
function ToggleDisableMru()
{
    _chkDisableMruControl.set_dataValue(_chkDisableAutoResolveControl.get_dataValue() || _chkDisableMruControl.get_dataValue());
    _chkDisableMruControl.set_disabled(_chkDisableAutoResolveControl.get_dataValue())
}
function setSelectedValue(control,value)
{
    for(var i = 0; i < control.options.length; i++)
    {
        var val = control.options[i].value;
        if(val === value)
        {
            control.options[i].selected = true;
            break
        }
    }
}
function setSelectIndexFromValue(controlId,value)
{
    if(Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(value))
        $get(controlId).selectedIndex = -1;
    else
        for(var control = $get(controlId),
            selectIndex = 0; selectIndex < control.length; selectIndex++)
            if(control.options[selectIndex].value == value)
            {
                control.selectedIndex = selectIndex;
                break
            }
}
function populateControlSection()
{
    if(IsMultiControlField(_oField.sDataType,_oField.sDataTypeFormat))
        switch(_oField.sDataType)
        {
            case _oDataTypes.boolean:
                var oControlClassIdSelector = new Select;
                oControlClassIdSelector.ID = "selControlClassId";
                oControlClassIdSelector.OnChange = "";
                if(_sControlClassId == _ControlClassIds.customControl)
                    oControlClassIdSelector.Selected = GetControlClassIdForFormFactor(_oField.FormXml,_oField.sCustomControlUniqueId,2);
                else
                    oControlClassIdSelector.Selected = _sControlClassId;
                oControlClassIdSelector.AddOption(LOCID_BOOLFMT_RADIO,_ControlClassIds.boolean_radio);
                oControlClassIdSelector.AddOption(LOCID_BOOLFMT_CHKBX,_ControlClassIds.boolean_checkbox);
                oControlClassIdSelector.AddOption(LOCID_BOOLFMT_PKLST,_ControlClassIds.picklist);
                oControlClassIdSelector.AddToControl($get("selControlClassId"),true);
                break
        }
}
function SetLockingText()
{
    if(_bScriptReq)
        $get("tblScriptLockedFieldMessage").style.display = "";
    if(_bSysReq)
        $get("tblSysLockedFieldMessage").style.display = ""
}
function onLockedClick()
{
    if(!_bScriptReq && !_bSysReq)
        if(_chkLockedControl.get_dataValue())
            $get("tblLockedFieldMessage").style.display = "";
        else
            $get("tblLockedFieldMessage").style.display = "none"
}
function onTabChange()
{
    var sTabName = $find("selTab").get_dataValue(),
        sSectionName = XUI.Xml.SelectSingleNode(_oFormXml,"/entity/form/tabs/tab[@name = '" + sTabName + "']/columns/column/sections/section[not(@locklevel) or @locklevel = '0']",null).getAttribute("name");
    populateSectionSelector(sTabName,sSectionName);
    onSectionChange()
}
function showArticleTab()
{
    if(IsNull($get("tabArticleTab")))
        return false;
    var chkShowAtricleTab = $get("chkShowArticleTab");
    if(chkShowAtricleTab.checked)
    {
        for(var exists = false,
            i = 0; i < $get("selDefaultView").length; i++)
            if($get("selDefaultView").options[i].text == window.LOCID_ARTICLE_TAB_TEXT)
                exists = true;
        if(!exists)
        {
            var opt = document.createElement("OPTION");
            opt.text = window.LOCID_ARTICLE_TAB_TEXT;
            opt.value = window.LOCID_ARTICLE_CONSTVALUE;
            $get("selDefaultView").options.add(opt)
        }
        $get("tabArticleTab").style.display = "";
        return true
    }
    if(!chkShowAtricleTab.checked)
    {
        $get("tabArticleTab").style.display = "none";
        for(var i = 0; i < $get("selDefaultView").length; i++)
            if($get("selDefaultView").options[i].text == window.LOCID_ARTICLE_TAB_TEXT)
                $get("selDefaultView").options[i].outerHTML = "";
        return false
    }
}
function onSectionChange()
{
    populateColumnLayout();
    populateRowLayoutSection()
}
function GetCurrentTab()
{
    return XUI.Xml.SelectSingleNode(_oFormXml,"/entity/form/tabs/tab[@id = '" + Mscrm.FormControlInputBehavior.GetBehavior("selTab").get_dataValue() + "']",null)
}
function GetCurrentSection()
{
    return XUI.Xml.SelectSingleNode(_oFormXml,"/entity/form/tabs/tab[@id = '" + Mscrm.FormControlInputBehavior.GetBehavior("selTab").get_dataValue() + "']/columns/column/sections/section[@id = '" + selSection.get_dataValue() + "']",null)
}
function IsCurrSectionVariableHeight()
{
    return GetCurrentSection().getAttribute("layout") == "varheight"
}
function IsMultiControlField(sDataType,sDataFormatType)
{
    return sDataType == _oDataTypes.boolean
}
function GetUserFriendlyRowSpan(iFormXmlRowSpan,bAutoExpanding)
{
    return iFormXmlRowSpan - (bAutoExpanding ? 1 : 0)
}
function GetFormXmlRowSpan(iUserFriendlyRowSpan,bAutoExpanding)
{
    return iUserFriendlyRowSpan + (bAutoExpanding ? 1 : 0)
}
