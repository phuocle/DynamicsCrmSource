
var _boAnySettingChanged = false,
    _uiLanguageChanged = false,
    workplaceStyleDefaultValue,
    advancedfindstartupmodeDefaultValue,
    autodatacaptureEnableDefaultValue,
    entitymodeDefaultValue,
    retValue = true;
function applychanges()
{
    if(!Mscrm.DialogsControl.IsValid())
        return;
    var checkBoxAllowCredentials = $get("checkBoxAllowCredentials"),
        textBoxEmailUserName = $get("textBoxEmailUserName"),
        textBoxEmailPassword = $get("textBoxEmailPassword"),
        textBoxEmailPasswordRetype = $get("textBoxEmailPasswordRetype");
    if(!IsNull(checkBoxAllowCredentials))
        if(checkBoxAllowCredentials.checked)
        {
            if(!IsNull(textBoxEmailUserName) && !IsNull(textBoxEmailPassword) && !IsNull(textBoxEmailPasswordRetype))
                if(textBoxEmailUserName.value.trim() == "" || textBoxEmailPassword.value == "" || textBoxEmailPasswordRetype.value == "")
                {
                    retValue = false;
                    alert(LOCID_MSG_EMPTY_CREDENTIALS);
                    return
                }
            if(Mscrm.FormUtility.isControlDirty(textBoxEmailPassword) || Mscrm.FormUtility.isControlDirty(textBoxEmailPasswordRetype))
                if(textBoxEmailPassword.value != textBoxEmailPasswordRetype.value)
                {
                    retValue = false;
                    alert(LOCID_ITEMS_PASSWORD_MISMATCH);
                    return
                }
        }
    if(!IsNull(document.getElementById("ckEnableDefaultCountryCode")) && $get("ckEnableDefaultCountryCode").checked == true)
    {
        var txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode");
        if(isNullOrEmptyString(txtDefaultCountryCodeControl.get_dataValue()))
        {
            alert(LOCID_CHECK_COUNTRY_CODE_VALUE);
            return false
        }
    }
    updateUserSettings();
    if(IsOutlookClient())
    {
        updateRegKeySettings();
        updateFilterSettings();
        updatePrimaryClient();
        updateUserEntityUISettings();
        crmRcUtil.UpdateUIElements();
        _uiLanguageChanged && 
            alert(LOCID_OUTLOOKRESTARTREQUIRED)
    }
    if(true == retValue)
    {
        if(_boAnySettingChanged == false)
            retValue = false;
        Mscrm.Utilities.setReturnValue(retValue);
        closeWindow()
    }
}
function windowOnLoadHandler()
{
    var crmTabBar = $find("crmTabBar"),
        privacyTab = $get("privacyTab"),
        emailTab = $get("emailTab"),
        selectHomePageArea = $get("selectHomepageArea");
    if(!IsNull(crmTabBar))
        if(!IsNull(crmTabBar.CurrentTab) && !IsNull(crmTabBar.CurrentTab.GetElementsByTagName("a")) && !IsNull(crmTabBar.CurrentTab.GetElementsByTagName("a")[0]))
        {
            crmTabBar.CurrentTab.GetElementsByTagName("a")[0].SetAttribute("aria-selected",false);
            window.setTimeout(function()
            {
                crmTabBar.CurrentTab.GetElementsByTagName("a")[0].Focus();
                crmTabBar.CurrentTab.GetElementsByTagName("a")[0].SetAttribute("tabindex",0);
                crmTabBar.CurrentTab.GetElementsByTagName("a")[0].SetAttribute("aria-selected",true)
            },100)
        }
    AddAriaAttributes(selectHomePageArea,"listbox","sectionHeader_Web.Tools.personalsettings.dialogs.personalsettings.aspx_178","defaultPaneLabel");
    var selectHomePageSubArea = $get("selectHomepageSubArea");
    AddAriaAttributes(selectHomePageSubArea,"listbox","sectionHeader_Web.Tools.personalsettings.dialogs.personalsettings.aspx_178","defaultTabLabel");
    var selectPagingLimit = $get("selectPagingLimit");
    AddAriaAttributes(selectPagingLimit,"listbox","sectionHeader_Web.Tools.personalsettings.dialogs.personalsettings.aspx_202","selectPagingLimitLabel");
    var selectTimeZone = $get("timezone");
    AddAriaAttributes(selectTimeZone,"listbox","setTimeZoneHeader","setTimeZoneLabel");
    var transCurId = $get("transCurId_ledit");
    AddAriaAttributes(transCurId,"","selectCurrencyHeader","selectCurrenyLabel");
    var sel_AdvancedFindModeSimple = $get("Sel_advancedfindmodesimple");
    AddAriaAttributes(sel_AdvancedFindModeSimple,"","advancedFindModeHeader","advancedFindModeLabel","Sel_advancedfindmodesimpleLabel");
    var sel_AdvancedFindModeDetailed = $get("Sel_advancedfindmodedetailed");
    AddAriaAttributes(sel_AdvancedFindModeDetailed,"","advancedFindModeHeader","advancedFindModeLabel","Sel_advancedfindmodedetailedLabel");
    var ckEnableHighContrastImages = $get("ckEnableHighContrastImages");
    if(!IsNull(ckEnableHighContrastImages) && !IsNull(ckEnableHighContrastImages.parentElement))
    {
        var siblingElement = ckEnableHighContrastImages.parentElement.nextSibling;
        if(!IsNull(siblingElement) && siblingElement.childElementCount > 0)
        {
            var highContrastLabelElements = siblingElement.querySelectorAll("label");
            !IsNull(highContrastLabelElements) && highContrastLabelElements.length > 0 && !IsNull(highContrastLabelElements[0]) && 
                highContrastLabelElements[0].setAttribute("id","enableHighContrastLabel")
        }
    }
    AddAriaAttributes(ckEnableHighContrastImages,"","sectionHeader_personalsettings.imagestrips.sectionlabel","subSectionHeader_personalsettings.imagestrips.description","enableHighContrastLabel");
    var ckEnableEmailConversationView = $get("ckEnableEmailConversationView");
    if(!IsNull(ckEnableEmailConversationView) && !IsNull(ckEnableEmailConversationView.parentElement))
    {
        var siblingElement = ckEnableEmailConversationView.parentElement.nextSibling;
        if(!IsNull(siblingElement) && siblingElement.childElementCount > 0)
        {
            var emailConversationLabelElements = siblingElement.querySelectorAll("label");
            !IsNull(emailConversationLabelElements) && emailConversationLabelElements.length > 0 && !IsNull(emailConversationLabelElements[0]) && 
                emailConversationLabelElements[0].setAttribute("id","enableEmailConversationLabel")
        }
    }
    AddAriaAttributes(ckEnableEmailConversationView,"","Web.Tools.personalsettings.dialogs.personalsettings.EnableEmailConversationView.SectionLabel","Web.Tools.personalsettings.dialogs.personalsettings.EnableEmailConversationView.CheckboxLabel");
    var ckEnableDefaultCountryCode = $get("ckEnableDefaultCountryCode");
    if(!IsNull(ckEnableDefaultCountryCode) && !IsNull(ckEnableDefaultCountryCode.parentElement))
    {
        var siblingElement = ckEnableDefaultCountryCode.parentElement.nextSibling;
        if(!IsNull(siblingElement) && siblingElement.childElementCount > 0)
        {
            var countryCodeLabelElements = siblingElement.querySelectorAll("label");
            !IsNull(countryCodeLabelElements) && countryCodeLabelElements.length > 0 && !IsNull(countryCodeLabelElements[0]) && 
                countryCodeLabelElements[0].setAttribute("id","enableCountryCodePrefixing")
        }
    }
    AddAriaAttributes(ckEnableDefaultCountryCode,"","defaultCountryCodeHeader","enableCountryCodePrefixing");
    var txtDefaultCountryCode = $get("txtDefaultCountryCode");
    AddAriaAttributes(txtDefaultCountryCode,"","defaultCountryCodeHeader","defaultCountryCodeLabel");
    var filtersLink = $get("LocalDataAnchor_filters");
    AddAriaAttributes(filtersLink,"","syncCRMHeader","LocalDataAnchor_filters");
    var syncFields = $get("LocalDataAnchor_synchronizedfields");
    AddAriaAttributes(syncFields,"","syncCRMHeader","LocalDataAnchor_synchronizedfields");
    var offlineFilters = $get("LocalDataAnchor_offlinefilters");
    AddAriaAttributes(offlineFilters,"","offlineFiltersHeader","LocalDataAnchor_offlinefilters");
    var selectDefaultCalendarView = $get("selectDefaultCalendarView");
    AddAriaAttributes(selectDefaultCalendarView,"listbox","selectDefaultCalendarViewHeader","selectDefaultCalendarViewLabel");
    var workStartTime = $get("workStartTimeTimeInput");
    AddAriaAttributes(workStartTime,"listbox","setDefaultWorkHourHeader","setWorkStartTimeLabel");
    var workEndTime = $get("workEndTimeTimeInput");
    AddAriaAttributes(workEndTime,"listbox","setDefaultWorkHourHeader","setWorkEndTimeLabel");
    var selectRegionalFormatCode = $get("selectRegionalFormatCode");
    AddAriaAttributes(selectRegionalFormatCode,"listbox","standardFormatHeader","standardFormatLabel","currentFormatLabel");
    var selectIncomingEmailFilteringMethod = $get("selectIncomingEmailFilteringMethod");
    AddAriaAttributes(selectIncomingEmailFilteringMethod,"listbox","selectIncomingEmailFilteringMethodHeader","selectIncomingEmailFilteringMethodLabel");
    var checkAutoCreateEnabled = $get("checkAutoCreateEnabled");
    AddAriaAttributes(checkAutoCreateEnabled,"","selectAutoCreateEntityHeader","checkAutoCreateEnabled_Label");
    var selectAutoCreateEntity = $get("selectAutoCreateEntity");
    AddAriaAttributes(selectAutoCreateEntity,"listbox","selectAutoCreateEntityHeader","selectAutoCreateEntityLabel");
    var sel_PrivacyOption1 = $get("Sel_privacyoption1");
    AddAriaAttributes(sel_PrivacyOption1,"","errorNotificationPreferenceHeader","Sel_privacyoption1Label");
    var sel_PrivacyOption2 = $get("Sel_privacyoption2");
    AddAriaAttributes(sel_PrivacyOption2,"","errorNotificationPreferenceHeader","Sel_privacyoption2Label");
    var sel_PrivacyOption3 = $get("Sel_privacyoption3");
    AddAriaAttributes(sel_PrivacyOption3,"","errorNotificationPreferenceHeader","Sel_privacyoption3Label");
    var selectUILanguageID = $get("selectUILanguageID"),
        languageLabelElements = document.querySelectorAll('label[for="selectUILanguageID"]');
    !IsNull(languageLabelElements) && languageLabelElements.length > 0 && !IsNull(languageLabelElements[0]) && 
        languageLabelElements[0].setAttribute("id","selectUILanguageLabel");
    AddAriaAttributes(selectUILanguageID,"listbox","selectLanguageForCRMHeader","selectUILanguageLabel");
    var selectHelpLanguageID = $get("selectHelpLanguageID"),
        selectHelpLabelElements = document.querySelectorAll('label[for="selectHelpLanguageID"]');
    !IsNull(selectHelpLabelElements) && selectHelpLabelElements.length > 0 && !IsNull(selectHelpLabelElements[0]) && 
        selectHelpLabelElements[0].setAttribute("id","selectHelpLanguageLabel");
    AddAriaAttributes(selectHelpLanguageID,"listbox","selectLanguageForCRMHeader","selectHelpLanguageLabel");
    var _MBCreateNewPersonalTemplate = $get("_MBCreateNewPersonalTemplate");
    if(!IsNull(_MBCreateNewPersonalTemplate))
    {
        var templateAnchorElements = _MBCreateNewPersonalTemplate.getElementsByTagName("a");
        !IsNull(templateAnchorElements) && templateAnchorElements.length > 0 && !IsNull(templateAnchorElements[0]) && 
            templateAnchorElements[0].setAttribute("id","_MBCreateNewPersonalTemplateLink")
    }
    var _MBCreateNewPersonalTemplateLink = $get("_MBCreateNewPersonalTemplateLink");
    if(!IsNull(_MBCreateNewPersonalTemplateLink))
    {
        var spanElements = _MBCreateNewPersonalTemplateLink.getElementsByTagName("span");
        !IsNull(spanElements) && spanElements.length > 0 && !IsNull(spanElements[0]) && 
            spanElements[0].setAttribute("id","_MBCreateNewPersonalTemplateLabel")
    }
    AddAriaAttributes(_MBCreateNewPersonalTemplateLink,"","createAndModifyEmailTemplateHeader","_MBCreateNewPersonalTemplateLabel");
    var mnucrmGridMoreActions = $get("mnucrmGridMoreActions");
    if(!IsNull(mnucrmGridMoreActions))
    {
        var actionsAnchorElements = mnucrmGridMoreActions.getElementsByTagName("a");
        !IsNull(actionsAnchorElements) && actionsAnchorElements.length > 0 && !IsNull(actionsAnchorElements[0]) && 
            actionsAnchorElements[0].setAttribute("id","mnucrmGridMoreActionsLink")
    }
    var mnucrmGridMoreActionsLink = $get("mnucrmGridMoreActionsLink");
    if(!IsNull(mnucrmGridMoreActionsLink))
    {
        var spanElements = mnucrmGridMoreActionsLink.getElementsByTagName("span");
        !IsNull(spanElements) && spanElements.length > 0 && !IsNull(spanElements[0]) && 
            spanElements[0].setAttribute("id","mnucrmGridMoreActionsLabel")
    }
    AddAriaAttributes(mnucrmGridMoreActionsLink,"button","mnucrmGridMoreActionsLabel");
    !IsNull(mnucrmGridMoreActionsLink) && 
        mnucrmGridMoreActionsLink.setAttribute("aria-expanded","false");
    var emailTemplatesTab = $get("emailTemplatesTab");
    if(!IsNull(emailTemplatesTab) && Mscrm.Utilities.isIosDevice())
        emailTemplatesTab.style.display = "none";
    if(bNavToPrivacy)
    {
        crmTabBar.down(privacyTab,true);
        window.focus()
    }
    else
        if(bNavToOC)
        {
            crmTabBar.down(emailTab,true);
            window.focus()
        }
    var workplacestyle = $get("workplacestyle");
    if(!IsNull(workplacestyle))
        workplaceStyleDefaultValue = workplacestyle.defaultValue;
    var advancedfindstartupmode = $get("advancedfindstartupmode");
    if(!IsNull(advancedfindstartupmode))
        advancedfindstartupmodeDefaultValue = advancedfindstartupmode.defaultValue;
    var entitymode = $get("EntityMode");
    if(!IsNull(entitymode))
        entitymodeDefaultValue = entitymode.defaultValue;
    updateReadingOrder();
    if(IsOutlookClient())
    {
        loadRegKeySettings();
        loadAddressBookEntities()
    }
    var okButton = $get("butBegin");
    if(!IsNull(okButton))
    {
        okButton.setAttribute("tabindex",0);
        okButton.disabled = false
    }
    else
    {
        var Sel_privacyoption1 = $get("Sel_privacyoption1"),
            Sel_privacyoption2 = $get("Sel_privacyoption2"),
            Sel_privacyoption3 = $get("Sel_privacyoption3");
        if(!IsNull(Sel_privacyoption1))
            Sel_privacyoption1.disabled = true;
        if(!IsNull(Sel_privacyoption2))
            Sel_privacyoption2.disabled = true;
        if(!IsNull(Sel_privacyoption3))
            Sel_privacyoption3.disabled = true
    }
    var cancelButton = $get("cmdDialogCancel");
    if(!IsNull(cancelButton))
    {
        cancelButton.setAttribute("tabindex",0);
        cancelButton.disabled = false
    }
    window !== null && window.parent !== null && window.parent.IsUCI && 
        $("#RIConfigLink").closest("tbody").hide()
}
function AddAriaAttributes(element,role,headerId,labelId,subLabelId)
{
    if(!IsNull(element))
        if(!Mscrm.Utilities.isIE())
        {
            role === "listbox" && 
                $(element).attr("role",role);
            role === "button" && element !== null && element.id === "mnucrmGridMoreActionsLink" && 
                $(element).attr("role",role);
            if(!IsNull(subLabelId))
                $(element).attr("aria-labelledby",headerId + " " + labelId + " " + subLabelId);
            else
                $(element).attr("aria-labelledby",headerId + " " + labelId)
        }
        else
        {
            var headerText = "",
                labelText = "",
                subHeaderText = "";
            if(!IsNull(headerId))
            {
                var headerElement = $get(headerId);
                if(!IsNull(headerElement))
                    headerText = headerElement.innerText
            }
            if(!IsNull(labelId))
            {
                var labelElement = $get(labelId);
                if(!IsNull(labelElement))
                    labelText = labelElement.innerText
            }
            if(!IsNull(subLabelId))
            {
                var subHeaderElement = $get(subLabelId);
                if(!IsNull(subHeaderElement))
                {
                    subHeaderText = subHeaderElement.innerText;
                    element.setAttribute("aria-label",headerText + " " + labelText + " " + subHeaderText)
                }
            }
            else
                element.setAttribute("aria-label",headerText + " " + labelText)
        }
}
Sys.Application.add_load(windowOnLoadHandler);
function loadAddressBookEntities()
{
    var addressBookPicklistComponent = $find("addressBookEntitiesMultipicklist");
    if(addressBookPicklistComponent)
    {
        var entitiesSettings = getAddressBookEntities();
        addressBookPicklistComponent.LoadOptionsXml(getAddressBookEntitiesOptionsXml(entitiesSettings));
        addressBookPicklistComponent.set_dataValue(getSelectedAddressBookEntities(entitiesSettings))
    }
}
function getAddressBookEntities()
{
    for(var entitiesSettings = [],
        hiddenEntities = document.getElementsByName("addressBookEntityData"),
        i = 0; i < hiddenEntities.length; i++)
    {
        var parts = hiddenEntities[i].value.split(","),
            entity = {};
        entity.code = parseInt(parts.shift());
        entity.id = parts.shift();
        entity.enabled = parts.shift() == "1";
        entity.label = parts.join();
        entitiesSettings.push(entity)
    }
    return entitiesSettings
}
function getAddressBookEntitiesOptionsXml(aEntitiesSettings)
{
    var retVal = new StringBuilder;
    retVal.Append("<select>");
    for(var i = 0; i < aEntitiesSettings.length; i++)
    {
        retVal.Append('<option value="');
        retVal.Append(i);
        retVal.Append('">');
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(aEntitiesSettings[i].label));
        retVal.Append("</option>")
    }
    retVal.Append("</select>");
    return retVal.ToString()
}
function getSelectedAddressBookEntities(aEntitiesSettings)
{
    for(var retVal = new StringBuilder,
        enabledCount = 0,
        i = 0; i < aEntitiesSettings.length; i++)
        if(aEntitiesSettings[i].enabled)
        {
            enabledCount++ > 0 && 
                retVal.Append(";");
            retVal.Append(i)
        }
    return retVal.ToString()
}
function getPagingLimit()
{
    var retVal = new StringBuilder;
    if(Mscrm.FormUtility.isControlDirty($get("selectPagingLimit")))
    {
        _boAnySettingChanged = true;
        retVal.Append("<paginglimit>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode($get("selectPagingLimit").value));
        retVal.Append("</paginglimit>")
    }
    return retVal.ToString()
}
function getAdvancedFindStartupMode()
{
    var retVal = new StringBuilder,
        advancedfindstartupmode = $get("advancedfindstartupmode");
    if(advancedfindstartupmodeDefaultValue != advancedfindstartupmode.value)
    {
        _boAnySettingChanged = true;
        retVal.Append("<advancedfindstartupmode>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(advancedfindstartupmode.value));
        retVal.Append("</advancedfindstartupmode>")
    }
    return retVal.ToString()
}
function getAutoDataCaptureEnable()
{
    var retVal = new StringBuilder,
        ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAutoDataCapture");
    if(Mscrm.FormUtility.isControlDirty($get("rdAutoDataCapture")))
    {
        _boAnySettingChanged = true;
        retVal.Append("<isautodatacaptureenabled>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(ctrl.get_dataValue() ? "true" : "false"));
        retVal.Append("</isautodatacaptureenabled>")
    }
    return retVal.ToString()
}
function getDefaultSearchMode()
{
    var retVal = new StringBuilder,
        searchExperienceSelectControl = $get("searchExperienceValue");
    if(!IsNull(searchExperienceSelectControl))
        if(Mscrm.FormUtility.isControlDirty(searchExperienceSelectControl))
        {
            _boAnySettingChanged = true;
            retVal.Append("<defaultsearchexperience>");
            retVal.Append(CrmEncodeDecode.CrmXmlEncode(searchExperienceSelectControl.value));
            retVal.Append("</defaultsearchexperience>")
        }
    return retVal.ToString()
}
function getEnableHighContrastImages()
{
    var retVal = new StringBuilder;
    if(Mscrm.FormUtility.isControlDirty($get("ckEnableHighContrastImages")))
    {
        _boAnySettingChanged = true;
        retVal.Append("<useimagestrips>");
        retVal.Append($get("ckEnableHighContrastImages").checked ? "0" : "1");
        retVal.Append("</useimagestrips>")
    }
    return retVal.ToString()
}
function getEnableResourceBookingSync()
{
    var retVal = new StringBuilder;
    if(Mscrm.FormUtility.isControlDirty($get("ckEnableResourceBookingSync")))
    {
        _boAnySettingChanged = true;
        retVal.Append("<isresourcebookingexchangesyncenabled>");
        retVal.Append($get("ckEnableResourceBookingSync").checked ? "1" : "0");
        retVal.Append("</isresourcebookingexchangesyncenabled>")
    }
    return retVal.ToString()
}
function onDefaultCountryCodeChange_UserSettings()
{
    var value = "",
        txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode");
    if(!IsNull(document.getElementById("ckEnableDefaultCountryCode")) && !IsNull(document.getElementById("txtDefaultCountryCode")))
        if($get("ckEnableDefaultCountryCode").checked == true)
            txtDefaultCountryCodeControl.set_disabled(false);
        else
            txtDefaultCountryCodeControl.set_disabled(true)
}
function getIncomingEmailFilteringMethod()
{
    var retVal = new StringBuilder,
        selectIncomingEmailFilteringMethod = $get("selectIncomingEmailFilteringMethod");
    if(Mscrm.FormUtility.isControlDirty(selectIncomingEmailFilteringMethod))
    {
        _boAnySettingChanged = true;
        retVal.Append("<incomingemailfilteringmethod>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(selectIncomingEmailFilteringMethod.value));
        retVal.Append("</incomingemailfilteringmethod>")
    }
    return retVal.ToString()
}
function getPrivacyOption()
{
    var retVal = new StringBuilder,
        privacyOption = $get("privacyOption");
    if(Mscrm.FormUtility.isControlDirty(privacyOption))
    {
        _boAnySettingChanged = true;
        retVal.Append("<reportscripterrors>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(privacyOption.value));
        retVal.Append("</reportscripterrors>")
    }
    return retVal.ToString()
}
function getCheckBoxUserSetting(sCheckBoxId,sUserSettingId)
{
    var checkBox = document.getElementById(sCheckBoxId),
        retVal = new StringBuilder;
    if(null != checkBox)
        if(Mscrm.FormUtility.isControlDirty(checkBox))
        {
            _boAnySettingChanged = true;
            retVal.Append("<");
            retVal.Append(sUserSettingId);
            retVal.Append(">");
            retVal.Append(checkBox.checked ? "1" : "0");
            retVal.Append("</");
            retVal.Append(sUserSettingId);
            retVal.Append(">")
        }
    return retVal.ToString()
}
function getTransCurId()
{
    var retVal = new StringBuilder,
        transCurIdControl = Mscrm.FormControlInputBehavior.GetBehavior("transCurId");
    if(Mscrm.FormUtility.isControlDirty($get("transCurId")))
    {
        _boAnySettingChanged = true;
        if(!IsNull(transCurIdControl.get_dataValue()))
        {
            retVal.Append("<transactioncurrencyid>");
            retVal.Append(CrmEncodeDecode.CrmXmlEncode(transCurIdControl.get_dataValue()[0].id));
            retVal.Append("</transactioncurrencyid>")
        }
        else
            retVal.Append("<transactioncurrencyid/>")
    }
    return retVal.ToString()
}
function getRegionalFormatCode()
{
    var retVal = new StringBuilder,
        selectRegionalFormatCode = $get("selectRegionalFormatCode");
    if(Mscrm.FormUtility.isControlDirty(selectRegionalFormatCode))
    {
        _boAnySettingChanged = true;
        retVal.Append("<localeid>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(selectRegionalFormatCode.value));
        retVal.Append("</localeid>")
    }
    return retVal.ToString()
}
function getUILanguageID()
{
    var retVal = new StringBuilder,
        selectUILanguageID = $get("selectUILanguageID");
    if(Mscrm.FormUtility.isControlDirty(selectUILanguageID))
    {
        _boAnySettingChanged = true;
        _uiLanguageChanged = true;
        retVal.Append("<uilanguageid>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(selectUILanguageID.value));
        retVal.Append("</uilanguageid>")
    }
    return retVal.ToString()
}
function getHelpLanguageID()
{
    var retVal = new StringBuilder,
        selectHelpLanguageID = $get("selectHelpLanguageID");
    if(Mscrm.FormUtility.isControlDirty(selectHelpLanguageID))
    {
        _boAnySettingChanged = true;
        retVal.Append("<helplanguageid>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(selectHelpLanguageID.value));
        retVal.Append("</helplanguageid>")
    }
    return retVal.ToString()
}
function getAreaSelection(homepageAreaSelection)
{
    var retVal = new StringBuilder;
    if(Mscrm.FormUtility.isControlDirty(homepageAreaSelection))
    {
        _boAnySettingChanged = true;
        retVal.Append("<homepagearea>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(homepageAreaSelection.value));
        retVal.Append("</homepagearea>")
    }
    return retVal.ToString()
}
function getSubAreaSelection(homepageSubAreaSelection)
{
    var retVal = new StringBuilder;
    if(Mscrm.FormUtility.isControlDirty(homepageSubAreaSelection))
    {
        _boAnySettingChanged = true;
        retVal.Append("<homepagesubarea>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(homepageSubAreaSelection.value));
        retVal.Append("</homepagesubarea>")
    }
    return retVal.ToString()
}
function getHomepageAreaSelection()
{
    var homepageAreaSelection = document.getElementById("selectHomepageArea"),
        homepageSubAreaSelection = document.getElementById("selectHomepageSubArea"),
        selection = new StringBuilder;
    if(null != homepageAreaSelection && null != homepageSubAreaSelection)
    {
        selection.Append(getAreaSelection(homepageAreaSelection));
        selection.Append(getSubAreaSelection(homepageSubAreaSelection))
    }
    return selection.ToString()
}
function getDefaultCalendarView()
{
    var retVal = new StringBuilder,
        selectDefaultCalendarView = $get("selectDefaultCalendarView");
    if(Mscrm.FormUtility.isControlDirty(selectDefaultCalendarView))
    {
        _boAnySettingChanged = true;
        retVal.Append("<defaultcalendarview>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(selectDefaultCalendarView.value));
        retVal.Append("</defaultcalendarview>")
    }
    return retVal.ToString()
}
function getWorkStartTime()
{
    var retVal = new StringBuilder,
        workStartTime = $get("workStartTime"),
        workStartTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("workStartTime");
    if(Mscrm.FormUtility.isControlDirty(workStartTime))
    {
        _boAnySettingChanged = true;
        retVal.Append("<workdaystarttime>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(workStartTimeCtrl.get_dataValue().toTimeString().substring(0,5)));
        retVal.Append("</workdaystarttime>")
    }
    return retVal.ToString()
}
function getWorkEndTime()
{
    var retVal = new StringBuilder,
        workEndTime = $get("workEndTime"),
        workEndTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("workEndTime");
    if(Mscrm.FormUtility.isControlDirty(workEndTime))
    {
        _boAnySettingChanged = true;
        retVal.Append("<workdaystoptime>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(workEndTimeCtrl.get_dataValue().toTimeString().substring(0,5)));
        retVal.Append("</workdaystoptime>")
    }
    return retVal.ToString()
}
function getTimeZone()
{
    var retVal = new StringBuilder,
        timezone = $get("timezone");
    if(Mscrm.FormUtility.isControlDirty(timezone))
    {
        _boAnySettingChanged = true;
        retVal.Append("<timezonecode>");
        retVal.Append(CrmEncodeDecode.CrmXmlEncode(timezone.value));
        retVal.Append("</timezonecode>")
    }
    return retVal.ToString()
}
function getTextBoxUserSetting(sTextBoxId,sUserSettingId,iMultiplier)
{
    var textBox = document.getElementById(sTextBoxId),
        textBoxControl = Mscrm.FormControlInputBehavior.GetBehavior(sTextBoxId),
        retVal = new StringBuilder;
    if(null != textBox)
        if(Mscrm.FormUtility.isControlDirty(textBox))
        {
            _boAnySettingChanged = true;
            retVal.Append("<");
            retVal.Append(sUserSettingId);
            retVal.Append(">");
            retVal.Append(CrmEncodeDecode.CrmXmlEncode(textBoxControl.get_dataValue() * iMultiplier));
            retVal.Append("</");
            retVal.Append(sUserSettingId);
            retVal.Append(">")
        }
    return retVal.ToString()
}
function updateUserSettings()
{
    var retval = new StringBuilder;
    retval.Append("<usersettings>");
    retval.Append(getPagingLimit());
    retval.Append(getAdvancedFindStartupMode());
    retval.Append(getAutoDataCaptureEnable());
    retval.Append(getDefaultSearchMode());
    retval.Append(getEnableHighContrastImages());
    retval.Append(getIncomingEmailFilteringMethod());
    retval.Append(getEnableResourceBookingSync());
    retval.Append(getPrivacyOption());
    retval.Append(getSendAsAllowedSetting());
    retval.Append(updateAutoCreateSettings());
    retval.Append(GetEnableDefaultCountryCodeFlag());
    retval.Append(GetEnableDefaultCountryCodeValue());
    retval.Append(GetEnableEmailConversationViewFlag());
    var emailSettingsXml = getEmailSettingsXml();
    if(emailSettingsXml.length > 0)
    {
        _boAnySettingChanged = true;
        retval.Append(emailSettingsXml)
    }
    retval.Append(getTransCurId());
    if(IsOnline())
    {
        retval.Append(getRegionalFormatCode());
        var regionalOptionsDataXml = GetRegionalOptionsDataXml();
        if(regionalOptionsDataXml != "")
        {
            _boAnySettingChanged = true;
            retval.Append(regionalOptionsDataXml)
        }
        retval.Append(getUILanguageID());
        retval.Append(getHelpLanguageID())
    }
    if(!IsOutlookClient())
    {
        retval.Append(getHomepageAreaSelection());
        retval.Append(getDefaultCalendarView());
        retval.Append(getWorkStartTime());
        retval.Append(getWorkEndTime());
        retval.Append(getTimeZone())
    }
    else
    {
        for(var sEntityNames = ["Appointment","Task","Contact","Email"],
            i = 0; i < sEntityNames.length; i++)
            retval.Append(getCheckBoxUserSetting("ckUseCrmFormFor" + sEntityNames[i],"usecrmformfor" + sEntityNames[i].toLowerCase()));
        retval.Append(getCheckBoxUserSetting("ckSyncContactCompany","synccontactcompany"));
        retval.Append(getTextBoxUserSetting("numPeriodBetweenABPScheduledSync","addressbooksyncinterval",60 * 60 * 1e3));
        retval.Append(getTextBoxUserSetting("numPeriodBetweenOfflineScheduledSync","offlinesyncinterval",60 * 1e3));
        retval.Append(getTextBoxUserSetting("numPeriodBetweenOutlookScheduledSync","outlooksyncinterval",60 * 1e3));
        retval.Append(getCheckBoxUserSetting("ckDuplicateDetectionWhenGoingOnline","isduplicatedetectionenabledwhengoingonline"))
    }
    retval.Append("</usersettings>");
    try
    {
        var settingsXml = XUI.Xml.LoadXml(retval.toString()),
            settingsNode = XUI.Xml.SelectSingleNode(settingsXml,"usersettings",null);
        if(settingsNode.children.length != 0)
        {
            var userRoleId = window.USER_ROLES.toString();
            for(i = 0; i < settingsNode.children.length; i++)
            {
                var childNode = settingsNode.children[i],
                    personalOptionName = childNode.nodeName,
                    personalOptionValue = XUI.Xml.GetText(childNode),
                    arguments = {};
                arguments["optionName"] = personalOptionName;
                arguments["optionValue"] = personalOptionValue;
                arguments["userRoleId"] = window.USER_ROLES.toString();
                Mscrm.MetricsReporting.instance().addMetric("personaloptions",arguments)
            }
        }
    }
    catch(e)
    {
    }
    if(_boAnySettingChanged)
    {
        var xml = XUI.Xml.LoadXml(retval.ToString());
        retValue = true;
        var xmlhttp = new XMLHttpRequest,
            oUrl = Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_update.aspx");
        xmlhttp.open("POST",oUrl.toString(),false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
        SetTokenInHeader(xmlhttp,oUrl);
        xmlhttp.send(xml);
        var success = handleXMLErr(xmlhttp.responseXML);
        if(!success)
            retValue = false
    }
    retValue = true
}
function updateAutoCreateSettings()
{
    var retval = new StringBuilder,
        autoCreateSetting = "1",
        checkAutoCreateEnabled = $get("checkAutoCreateEnabled"),
        selectAutoCreateEntity = document.getElementById("selectAutoCreateEntity");
    if(!IsNull(checkAutoCreateEnabled) && (Mscrm.FormUtility.isControlDirty(checkAutoCreateEnabled) || Mscrm.FormUtility.isControlDirty(selectAutoCreateEntity)))
    {
        if(checkAutoCreateEnabled.checked)
        {
            if(!IsNull(selectAutoCreateEntity))
            {
                var selectedEntity = selectAutoCreateEntity[selectAutoCreateEntity.selectedIndex].value.toLowerCase();
                if(selectedEntity == "contact")
                    autoCreateSetting = "1";
                else
                    if(selectedEntity == "lead")
                        autoCreateSetting = "2";
                    else
                        autoCreateSetting = "0"
            }
        }
        else
            autoCreateSetting = "0";
        retval.Append("<autocreatecontactonpromote>");
        retval.Append(autoCreateSetting);
        retval.Append("</autocreatecontactonpromote>");
        _boAnySettingChanged = true
    }
    return retval.ToString()
}
function getEmailSettingsXml()
{
    var ecString = new StringBuilder,
        emailCredentials = getCheckBoxUserSetting("checkBoxAllowCredentials","allowemailcredentials");
    ecString.Append(emailCredentials);
    var checkBoxAllowCredentials = $get("checkBoxAllowCredentials");
    if(!IsNull(checkBoxAllowCredentials))
        if(checkBoxAllowCredentials.checked)
            ecString.Append(getChangedEmailCreds());
        else
            if(Mscrm.FormUtility.isControlDirty(checkBoxAllowCredentials))
            {
                ecString.Append("<emailusername>");
                ecString.Append("");
                ecString.Append("</emailusername>");
                ecString.Append("<emailpassword>");
                ecString.Append("");
                ecString.Append("</emailpassword>")
            }
    return ecString.ToString()
}
function GetEnableEmailConversationViewFlag()
{
    _boAnySettingChanged = true;
    var retval = new StringBuilder;
    if(document.getElementById("ckEnableEmailConversationView") != null)
        Mscrm.FormUtility.isControlDirty($get("ckEnableEmailConversationView")) && 
            retval.Append("<isemailconversationviewenabled>" + ($get("ckEnableEmailConversationView").checked ? "true" : "false") + "</isemailconversationviewenabled>");
    return retval.ToString()
}
function GetEnableDefaultCountryCodeFlag()
{
    _boAnySettingChanged = true;
    var retval = new StringBuilder;
    if(document.getElementById("ckEnableDefaultCountryCode") != null)
        Mscrm.FormUtility.isControlDirty($get("ckEnableDefaultCountryCode")) && 
            retval.Append("<isdefaultcountrycodecheckenabled>" + ($get("ckEnableDefaultCountryCode").checked ? "true" : "false") + "</isdefaultcountrycodecheckenabled>");
    return retval.ToString()
}
function GetEnableDefaultCountryCodeValue()
{
    _boAnySettingChanged = true;
    var retval = new StringBuilder;
    if(document.getElementById("txtDefaultCountryCode") != null)
        if(Mscrm.FormUtility.isControlDirty($get("txtDefaultCountryCode")))
        {
            var txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode"),
                dataValue = txtDefaultCountryCodeControl.get_dataValue() ? txtDefaultCountryCodeControl.get_dataValue() : "";
            retval.Append("<defaultcountrycode>" + CrmEncodeDecode.CrmXmlEncode(dataValue) + "</defaultcountrycode>")
        }
    return retval.ToString()
}
function getSendAsAllowedSetting()
{
    var retVal = new StringBuilder,
        checkboxSendAsAllowed = document.getElementById("checkboxSendAsAllowed");
    if(!IsNull(checkboxSendAsAllowed) && Mscrm.FormUtility.isControlDirty(checkboxSendAsAllowed))
    {
        _boAnySettingChanged = true;
        retVal.Append(getCheckBoxUserSetting("checkboxSendAsAllowed","issendasallowed"))
    }
    return retVal.ToString()
}
function getChangedEmailCreds()
{
    var credString = new StringBuilder,
        textBoxEmailUserName = document.getElementById("textBoxEmailUserName");
    if(Mscrm.FormUtility.isControlDirty(textBoxEmailUserName))
    {
        credString.Append("<emailusername>");
        credString.Append(CrmEncodeDecode.CrmXmlEncode(textBoxEmailUserName.value.trim()));
        credString.Append("</emailusername>")
    }
    var textBoxEmailPassword = document.getElementById("textBoxEmailPassword");
    if(Mscrm.FormUtility.isControlDirty(textBoxEmailPassword))
    {
        credString.Append('<emailpassword xml:space="preserve">');
        credString.Append(CrmEncodeDecode.CrmXmlEncode(textBoxEmailPassword.value));
        credString.Append("</emailpassword>")
    }
    return credString.ToString()
}
function updateRegKeySettings()
{
    var emailSendSetting = $get("checkBoxEmailSend");
    if(null != emailSendSetting)
        crmRcUtil.EmailSendDisabled = !emailSendSetting.checked;
    var emailReceiveSetting = $get("checkBoxEmailReceive");
    if(null != emailReceiveSetting)
        crmRcUtil.EmailReceiveDisabled = !emailReceiveSetting.checked;
    var useCrmIconSetting = document.getElementById("radUseCrmIcon");
    if(null != useCrmIconSetting)
        crmRcUtil.UseProductIcon = useCrmIconSetting.checked;
    var runScheduledSyncSetting = Mscrm.FormControlInputBehavior.GetBehavior("ckRunOutlookScheduledSync");
    if(null != runScheduledSyncSetting && !runScheduledSyncSetting.get_disabled())
        if(crmRcUtil.RunScheduledSync != runScheduledSyncSetting.get_dataValue())
        {
            crmRcUtil.RunScheduledSync = runScheduledSyncSetting.get_dataValue();
            crmRcUtil.StartScheduledSyncs(true)
        }
    var runOfflineScheduledSync = Mscrm.FormControlInputBehavior.GetBehavior("ckRunOfflineScheduledSync");
    if(null != runOfflineScheduledSync && !runOfflineScheduledSync.get_disabled())
        crmRcUtil.RunOfflineScheduledSync = runOfflineScheduledSync.get_dataValue();
    var runABPScheduledSync = Mscrm.FormControlInputBehavior.GetBehavior("ckRunABPScheduledSync");
    if(null != runABPScheduledSync && !runABPScheduledSync.get_disabled())
        crmRcUtil.RunABPScheduledSync = runABPScheduledSync.get_dataValue();
    var sqmAccept = document.getElementById("ckSQMAccept");
    if(null != sqmAccept)
        crmRcUtil.SQMEnabled = sqmAccept.checked
}
function updateFilterSettings()
{
    var filterXml = "";
    filterXml += getABPSyncFilterSetting();
    if(filterXml != "")
    {
        filterXml = "<userqueries>" + filterXml + "</userqueries>";
        var xmlOlkFilters = XUI.Xml.LoadXml(filterXml),
            xmlhttpObj = new XMLHttpRequest;
        xmlhttpObj.open("POST",Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_updateOutlookSyncFilters.aspx?" + GetTokenAsQS(Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_updateOutlookSyncFilters.aspx"))).toString(),false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttpObj);
        xmlhttpObj.send(xmlOlkFilters);
        var bFiltersUpdated = handleXMLErr(xmlhttpObj.responseXML);
        if(!bFiltersUpdated)
            retValue = false
    }
}
function updateUserEntityUISettings()
{
    var settingsXml = getUserEntityUISettings();
    if(settingsXml != "")
    {
        settingsXml = "<userentityuisettingslist>" + settingsXml + "</userentityuisettingslist>";
        var oCommand = new RemoteCommand("UserEntityUISettings","Update");
        oCommand.SetParameter("xml",settingsXml);
        var oResult = oCommand.Execute(),
            bSettingsUpdated = oResult.Success;
        if(!bSettingsUpdated)
            retValue = false
    }
}
function getUserEntityUISettings()
{
    var settingsXml = new StringBuilder,
        addressBookPicklistComponent = $find("addressBookEntitiesMultipicklist");
    if(!IsNull(addressBookPicklistComponent))
        for(var selected = addressBookPicklistComponent.get_dataValue().split(";"),
            emailEntities = getAddressBookEntities(),
            i = 0; i < emailEntities.length; i++)
        {
            for(var found = false,
                j = 0; j < selected.length; j++)
                if(selected[j] == i.toString())
                {
                    !emailEntities[i].enabled && 
                        settingsXml.Append(getUserEntityUISettingsForEntity(emailEntities[i],true));
                    found = true;
                    break
                }
            if(!found)
                emailEntities[i].enabled && 
                    settingsXml.Append(getUserEntityUISettingsForEntity(emailEntities[i],false))
        }
    return settingsXml.ToString()
}
function getUserEntityUISettingsForEntity(settings,bEnabled)
{
    var settingsXml = new StringBuilder;
    settingsXml.Append("<userentityuisettings><objecttypecode>");
    settingsXml.Append(CrmEncodeDecode.CrmXmlEncode(settings.code));
    settingsXml.Append("</objecttypecode><showinaddressbook>");
    settingsXml.Append(bEnabled ? "1" : "0");
    settingsXml.Append("</showinaddressbook>");
    if(settings.id != "")
    {
        settingsXml.Append("<userentityuisettingsid>");
        settingsXml.Append(CrmEncodeDecode.CrmXmlEncode(settings.id));
        settingsXml.Append("</userentityuisettingsid>")
    }
    settingsXml.Append("</userentityuisettings>");
    return settingsXml.ToString()
}
function getABPSyncFilterSetting()
{
    var filterXml = new StringBuilder,
        abpRadio = document.getElementById("AbpRadio");
    if(null != abpRadio && abpRadio.value != iInitialAbpOption)
    {
        filterXml.Append(AddABPUserQueryToXml(abpRadio.value,AbpaccountQueryId.value));
        filterXml.Append(AddABPUserQueryToXml(abpRadio.value,AbpleadQueryId.value));
        filterXml.Append(AddABPUserQueryToXml(abpRadio.value,AbpqueueQueryId.value));
        filterXml.Append(AddABPUserQueryToXml(abpRadio.value,AbpsystemuserQueryId.value));
        filterXml.Append(AddABPUserQueryToXml(abpRadio.value,AbpequipmentQueryId.value))
    }
    var contactAbpRadio = document.getElementById("ContactRadio");
    null != contactAbpRadio && contactAbpRadio.value != iInitialContactAbpOption && 
        filterXml.Append(AddABPUserQueryToXml(contactAbpRadio.value,AbpcontactQueryId.value));
    return filterXml.ToString()
}
function AddUserQueryToXml(bActivate,sUserQueryId)
{
    var filterXml = new StringBuilder;
    filterXml.Append("<userquery><querytype>256</querytype><activate>");
    filterXml.Append(bActivate ? "1" : "0");
    filterXml.Append("</activate><userqueryid>");
    filterXml.Append(CrmEncodeDecode.CrmXmlEncode(sUserQueryId));
    filterXml.Append("</userqueryid></userquery>");
    return filterXml.ToString()
}
function AddABPUserQueryToXml(iStatus,userQueryId)
{
    var filterXml = new StringBuilder;
    filterXml.Append("<userquery><querytype>512</querytype><status>");
    filterXml.Append(CrmEncodeDecode.CrmXmlEncode(iStatus));
    filterXml.Append("</status><userqueryid>");
    filterXml.Append(CrmEncodeDecode.CrmXmlEncode(userQueryId));
    filterXml.Append("</userqueryid></userquery>");
    return filterXml.ToString()
}
function updatePrimaryClient()
{
    var ckSetSynchronizingClient = document.getElementById("ckSetSynchronizingClient");
    if(null != ckSetSynchronizingClient && ckSetSynchronizingClient.checked != ckSetSynchronizingClient.defaultChecked)
    {
        var xmlSynchronizingClient = XUI.Xml.LoadXml("<clientid>" + outlookSyncClientId + "</clientid>"),
            xmlhttpPrimaryClient = new XMLHttpRequest;
        xmlhttpPrimaryClient.open("POST",Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_updatePrimaryClient.aspx?" + GetTokenAsQS(Mscrm.CrmUri.create("/Tools/PersonalSettings/cmds/cmd_updatePrimaryClient.aspx"))).toString(),false);
        Mscrm.Utilities.setResponseTypeToMSXml(xmlhttpPrimaryClient);
        xmlhttpPrimaryClient.send(xmlSynchronizingClient);
        var bPrimaryClientUpdated = handleXMLErr(xmlhttpPrimaryClient.responseXML);
        if(!bPrimaryClientUpdated)
            retValue = false
    }
}
function updateHomeSubarea()
{
    var homearea = $get("selectHomepageArea").value,
        SelectSubArea = new Select;
    SelectSubArea.ID = "selectHomepageSubArea";
    if(homearea == "<Default>")
    {
        SelectSubArea.AddOptionHtml('<option selected="selected" value="<Default>">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_HOME_PAGE_SUB_AREA_DEFAULT) + "</option>");
        SelectSubArea.Disabled = true
    }
    else
    {
        SelectSubArea.AddOptionHtml(oSelSubarea[homearea]);
        SelectSubArea.Disabled = $get("selectHomepageArea").disabled;
        if(!Mscrm.Utilities.isIE())
        {
            SelectSubArea.AddAttribute("role","listbox");
            SelectSubArea.AddAttribute("aria-labelledby","getHeader_Web.Tools.personalsettings.dialogs.personalsettings.aspx_178 defaultTabLabel")
        }
        else
        {
            var headerElement = $get("getHeader_Web.Tools.personalsettings.dialogs.personalsettings.aspx_178"),
                headerText = $(headerElement).contents().first().text(),
                labelElement = $get("defaultTabLabel"),
                labelText = $(labelElement).contents().first().text();
            SelectSubArea.AddAttribute("aria-label",headerText + " " + labelText)
        }
    }
    SelectSubArea.AddToControl($get("div_homepagesubarea"))
}
function updateEmailCredentials()
{
    var allowCredentialsCheckbox = $get("checkBoxAllowCredentials");
    if(null != allowCredentialsCheckbox)
    {
        var allowCredentials = allowCredentialsCheckbox.checked;
        emailUserName = document.getElementById("emailUserNameRow");
        emailPassword = document.getElementById("emailPasswordRow");
        emailPasswordRetype = document.getElementById("emailPasswordRowRetype");
        if(null != emailUserName && null != emailPassword && null != emailPasswordRetype)
        {
            emailUserName.style.display = allowCredentials ? "" : "none";
            emailPassword.style.display = allowCredentials ? "" : "none";
            emailPasswordRetype.style.display = allowCredentials ? "" : "none"
        }
    }
}
function loadRegKeySettings()
{
    var emailSendSetting = $get("checkBoxEmailSend");
    if(null != emailSendSetting)
        emailSendSetting.checked = !crmRcUtil.EmailSendDisabled;
    var emailReceiveSetting = $get("checkBoxEmailReceive");
    if(null != emailReceiveSetting)
    {
        emailReceiveSetting.checked = !crmRcUtil.EmailReceiveDisabled;
        EmailReceiveToggled()
    }
    var useCrmIconSetting = document.getElementById("radUseCrmIcon"),
        useOutlookIconSetting = document.getElementById("radUseOutlookIcon");
    if(null != useCrmIconSetting && null != useOutlookIconSetting)
        if(crmRcUtil.UseProductIcon)
            useCrmIconSetting.checked = true;
        else
            useOutlookIconSetting.checked = true;
    var runOutlookScheduledSync = Mscrm.FormControlInputBehavior.GetBehavior("ckRunOutlookScheduledSync");
    if(null != runOutlookScheduledSync && !runOutlookScheduledSync.get_disabled())
    {
        runOutlookScheduledSync.set_dataValue(crmRcUtil.RunScheduledSync);
        Mscrm.FormControlInputBehavior.GetBehavior("numPeriodBetweenOutlookScheduledSync").set_disabled(!runOutlookScheduledSync.get_dataValue())
    }
    var runOfflineScheduledSync = Mscrm.FormControlInputBehavior.GetBehavior("ckRunOfflineScheduledSync");
    if(null != runOfflineScheduledSync && !runOfflineScheduledSync.get_disabled())
    {
        runOfflineScheduledSync.set_dataValue(crmRcUtil.RunOfflineScheduledSync);
        Mscrm.FormControlInputBehavior.GetBehavior("numPeriodBetweenOfflineScheduledSync").set_disabled(!runOfflineScheduledSync.get_dataValue())
    }
    var runABPScheduledSync = Mscrm.FormControlInputBehavior.GetBehavior("ckRunABPScheduledSync");
    if(null != runABPScheduledSync && !runABPScheduledSync.get_disabled())
    {
        runABPScheduledSync.set_dataValue(crmRcUtil.RunABPScheduledSync);
        Mscrm.FormControlInputBehavior.GetBehavior("numPeriodBetweenABPScheduledSync").set_disabled(!runABPScheduledSync.get_dataValue())
    }
    var sqmAccept = document.getElementById("ckSQMAccept");
    if(null != sqmAccept)
        sqmAccept.checked = crmRcUtil.SQMEnabled
}
function EmailReceiveToggled()
{
    var emailReceive = $get("checkBoxEmailReceive"),
        emailFiltering = document.getElementById("selectIncomingEmailFilteringMethod");
    if(null != emailReceive && null != emailFiltering)
        emailFiltering.disabled = !emailReceive.checked
}
function ScheduledSyncToggled(checkBox,textBox)
{
    var checkBoxCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(checkBox),
        textBoxCtrl = Mscrm.FormControlInputBehavior.GetElementBehavior(textBox);
    textBoxCtrl.set_disabled(!checkBoxCtrl.get_dataValue())
}
function updateReadingOrder()
{
    if(IsOnline() && LOCID_UI_DIR == "RTL")
    {
        var sample_number = $get("sample_number_d");
        sample_number.style.direction = "ltr";
        var sample_currency = $get("sample_currency_d");
        sample_currency.style.direction = "ltr";
        sample_number.style.textAlign = "right";
        sample_currency.style.textAlign = "right"
    }
}
function cancel()
{
    closeWindow()
}
function CreateNewPersonalTemplate()
{
    var options = new Xrm.DialogOptions;
    options.width = 400;
    options.height = 200;
    Xrm.Internal.openDialog(Mscrm.CrmUri.create("/Tools/EmailTemplateEditor/Dialogs/emailtemplateproperties.aspx?isPersonal=1").toString(),options,null,null,null)
}
function openCurrentUserByKeyboard(eventobj)
{
    switch(eventobj.keyCode)
    {
        case KEY_ENTER:
            openCurrentUser();
            return false
    }
}
function openCurrentUser()
{
    openObj(SystemUser,USER_GUID)
}
function openRIConfiguUiByKeyboard(eventobj)
{
    switch(eventobj.keyCode)
    {
        case KEY_ENTER:
            openRIConfiguUi();
            return false
    }
}
function openLegacyRIConfigUi()
{
    window.open("/_static/tools/RelationshipIntelligenceConfig/UnifiedConfig.html?ispersonal=true","_blank","toolbar=0,location=0,menubar=0,resizable=1,width=966,height=628")
}
function openRIConfiguUi()
{
    getAppModuleId().then(function(data)
    {
        if(data.value && data.value[0])
        {
            var appId = data.value[0].appmoduleid;
            window.open("/main.aspx?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off&appId=" + appId,"_blank","toolbar=0,location=0,menubar=0,resizable=1,width=966,height=628")
        }
        else
            window.open("/uclient/main.htm?pagetype=control&controlName=MscrmControls.UnifiedConfigWrapperControl.UnifiedConfigWrapperControl&navbar=off","_blank","toolbar=0,location=0,menubar=0,resizable=1,width=966,height=628")
    })
}
function getAppModuleId()
{
    return $.getJSON("/api/data/v8.0/appmodules?$filter=(clienttype eq 8)&$select=appmoduleid&$top=1")
}
function onclickProfiles()
{
    var urlConstructor = _gUrlConstructor,
        checkMarks = "",
        allChecks = $get("leftNavSelectorsGroup").getElementsByTagName("INPUT"),
        numberOfChecks = allChecks.length,
        nCheck = 0,
        bWorkplaceChanged = false;
    if(numberOfChecks)
        for(var i = 0; i < numberOfChecks; i++)
        {
            if(allChecks[i].checked)
                checkMarks += CrmEncodeDecode.CrmUrlEncode(allChecks[i].getAttribute("groupid") + ",");
            bWorkplaceChanged |= allChecks[i].checked != allChecks[i].defaultChecked
        }
    else
    {
        if(allChecks.checked)
            checkMarks = allChecks.getAttribute("groupid");
        bWorkplaceChanged |= allChecks.checked != allChecks.defaultChecked
    }
    var workplacestyle = $get("workplacestyle");
    workplacestyle.value = checkMarks;
    urlConstructor += checkMarks;
    leftnavframe.location = urlConstructor
}
function launchMailbox()
{
    if(typeof DefaultMailboxId == "undefined")
        return;
    openObj(Mscrm.EntityTypeCode.Mailbox,DefaultMailboxId,"","",Mscrm.NavigationMode.NavigationModeNewWindow,null)
}
function launchMailboxByKeyboard(event)
{
    switch(event.keyCode)
    {
        case KEY_ENTER:
            launchMailbox();
            return false
    }
}
function CustomizeFacetsAndFilterClicked()
{
    var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/RelevanceSearchFacetsAndFiltersConfiguration.aspx"),
        dialogOptions = new Xrm.DialogOptions;
    dialogOptions.height = 600;
    dialogOptions.width = 800;
    Xrm.Internal.openDialog(oUrl.toString(),dialogOptions,null,null,null)
}
