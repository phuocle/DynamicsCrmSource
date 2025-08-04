
var _oSCVConst = {regexpSchemaNameChars:RegExp("[A-Za-z0-9_]","g")},
    _oSCVErrors = {sCannotBeBlank:LOCID_SYSCUST_CANTBEBLANK,sCannotHaveInvalidChars:LOCID_SYSCUST_INVALCHARS,sCanOnlyHaveAlphaNumerics:LOCID_SYSCUST_ALPHANUMSONLY,sInvalidColorValue:LOCID_SYSCUST_INVALIDCOLORVALUE,sCollectionNameShouldBeDifferent:LOCID_SYSCUST_COLLECTIONAME,sCannotSetOneNoteInteg:LOCID_SYSCUST_CANTSETONENOTEINT,sDaysSinceRecordLastModifiedDefault:LOCID_SYSCUST_DAYS_DEFVAL_ALERT,sDaysSinceRecordLastModifiedChanged:LOCID_SYSCUST_DAYS_CHANGED_ALERT,sDaysSinceRecordLastModifiedIncreased:LOCID_SYSCUST_DAYS_INCR_ALERT,sDaysSinceRecordLastModifiedDecreased:LOCID_SYSCUST_DAYS_DECR_ALERT,sMobileOfflineFiltersDefault:LOCID_SYSCUST_NOFILTERS_ALERT,sMobileOfflineFiltersChanged:LOCID_SYSCUST_FILTERS_CHG_ALERT};
function validateName(txtName,oValidCharsRegExp,sError_InvalidCharsFormat,sError_InvalidChars)
{
    var sMessage,
        sName;
    if(sError_InvalidChars == null)
        sError_InvalidChars = "";
    var sName = Mscrm.FormControlInputBehavior.GetElementBehavior(txtName).get_dataValue();
    if(sName == null || sName == "")
        sMessage = _oSCVErrors.sCannotBeBlank;
    else
        if(sName.replace(oValidCharsRegExp,"") != "")
            sMessage = sError_InvalidCharsFormat;
        else
            return true;
    alert(formatString(sMessage,getControlName(txtName),sError_InvalidChars));
    setControlFocus(txtName);
    return false
}
function validateSchemaName(txtName)
{
    return validateName(txtName,_oSCVConst.regexpSchemaNameChars,_oSCVErrors.sCanOnlyHaveAlphaNumerics)
}
function validateRequiredValue(oControl)
{
    var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id),
        disabled = ajaxControl.get_disabled(),
        oValue = ajaxControl.get_dataValue();
    if(!disabled)
        if(oValue == null || typeof oValue == "string" && oValue == "")
        {
            alert(formatString(_oSCVErrors.sCannotBeBlank,getControlName(oControl)));
            setControlFocus(oControl);
            return false
        }
    return true
}
function validateRequiredInput(oControl,sLabel)
{
    var oValue = oControl.value;
    if(oValue == null || typeof oValue == "string" && oValue == "")
    {
        setControlFocus(oControl);
        alert(formatString(_oSCVErrors.sCannotBeBlank,sLabel));
        return false
    }
    return true
}
function validateOneNoteIntegrationValue(oControl)
{
    var oneNoteIntegAttrValue = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id).get_dataValue(),
        docMgmtAttrValue = Mscrm.FormControlInputBehavior.GetBehavior($get("enableDocumentMgmt").id).get_dataValue();
    if(oneNoteIntegAttrValue == true && docMgmtAttrValue == false)
    {
        setControlFocus(oControl);
        alert(_oSCVErrors.sCannotSetOneNoteInteg);
        return false
    }
    return true
}
function validateDaysSinceRecordLastModifiedValue(currentValue,oldValue,enablingMobileOffline)
{
    var confirmDialogMessage = "";
    if(enablingMobileOffline && currentValue == 0)
        confirmDialogMessage = _oSCVErrors.sDaysSinceRecordLastModifiedDefault;
    else
        if(!enablingMobileOffline && currentValue != oldValue)
            if(currentValue > oldValue)
                confirmDialogMessage = _oSCVErrors.sDaysSinceRecordLastModifiedIncreased;
            else
                confirmDialogMessage = _oSCVErrors.sDaysSinceRecordLastModifiedDecreased;
    return confirmDialogMessage == "" ? true : confirm(confirmDialogMessage)
}
function validateMobileOfflineFiltersValue(currentConditions,currentValue,oldValue,enablingMobileOffline)
{
    var confirmDialogMessage = "";
    if((enablingMobileOffline || currentValue != oldValue) && currentConditions == 0)
        confirmDialogMessage = _oSCVErrors.sMobileOfflineFiltersDefault;
    else
        if(currentValue != oldValue)
            confirmDialogMessage = _oSCVErrors.sMobileOfflineFiltersChanged;
    return confirmDialogMessage == "" ? true : confirm(confirmDialogMessage)
}
function showConfirmForMobileOfflineDefaultFiltersValue()
{
    return confirm(_oSCVErrors.sMobileOfflineFiltersDefault)
}
function validateColorValue(oControl)
{
    var oEntityColor = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id),
        entityColorValue = oEntityColor.get_dataValue();
    if(entityColorValue != null)
    {
        if(entityColorValue.startsWith("#"))
            entityColorValue = entityColorValue.substr(1);
        var isHexValue = /^[0-9A-F]{6}$/i.test(entityColorValue);
        if(!isHexValue)
        {
            setControlFocus(oControl);
            alert(_oSCVErrors.sInvalidColorValue);
            return false
        }
    }
    return true
}
function getControlName(oControl)
{
    return Trim(XUI.Html.GetText($get(oControl.id + "Label")))
}
function setControlFocus(oControl)
{
    var oParent = oControl.parentNode;
    do
    {
        if(oParent == null || oParent.className == "ms-crm-Tab")
            break;
        oParent = oParent.parentNode
    } while(1);
    if(oParent != null)
    {
        var oTab = $get(oParent.id + "Tab");
        Mscrm.Utilities.click(oTab)
    }
    try
    {
        var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(oControl.id);
        if(IsNull(ajaxControl))
            oControl.SetFocus();
        else
            ajaxControl.setFocus()
    }
    catch(ex)
    {
        oControl.focus()
    }
}
function validateAndPreview()
{
    var txtColorControl = Mscrm.FormControlInputBehavior.GetBehavior("ledtPicklistValues_txtItemColor"),
        oPreviewColor = $get("divPreviewColor"),
        colorValue = txtColorControl.get_dataValue();
    if(colorValue)
        if(!validateColorValue(ledtPicklistValues_txtItemColor))
        {
            txtColorControl.setFocus();
            return
        }
        else
        {
            colorValue = setHashColorValue(colorValue);
            oPreviewColor.style.backgroundColor = colorValue
        }
    else
        oPreviewColor.style.backgroundColor = "#ffffff"
}
function setHashColorValue(color)
{
    if(color != null && !color.startsWith("#"))
        color = "#" + color;
    return color
}
function getFilterElementValue(xmlValue)
{
    var filterElementValue = "";
    if(xmlValue != null)
    {
        var xmlDoc = loadXmlDoc(xmlValue);
        if(xmlDoc != null)
        {
            var filterElement = xmlDoc.getElementsByTagName("filter");
            if(filterElement != null && filterElement.length > 0)
                filterElementValue = XUI.Xml.XMLSerializer.serializeToString(filterElement[0])
        }
    }
    return filterElementValue
}
