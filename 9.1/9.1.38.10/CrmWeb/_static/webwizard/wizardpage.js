
function WizardNavigate(iNavigateEnum)
{
    WizardNavigateSetIndicator(iNavigateEnum,true)
}
function WizardNavigateSetIndicator(iNavigateEnum,showProgressIndicator)
{
    _wizard != null && 
        _wizard.Navigate(iNavigateEnum,showProgressIndicator)
}
function WizardSetDialogReturnValue(vReturnValue)
{
    _wizard != null && 
        _wizard.SetDialogReturnValue(vReturnValue)
}
function WizardSetProperty(sPropertyName,vPropertyValue)
{
    _wizard != null && 
        _wizard.SetProperty(sPropertyName,vPropertyValue)
}
function WizardGetProperty(sPropertyName)
{
    if(_wizard != null)
        return _wizard.GetProperty(sPropertyName)
}
function WizardHasProperty(sPropertyName)
{
    return !IsNull(WizardGetProperty(sPropertyName))
}
function WizardSetButtonText(sDisplayText,sToolTipText,iButton)
{
    if(IsNull(sDisplayText))
        return;
    var oButtonElement = findButton(iButton);
    if(!IsNull(oButtonElement))
    {
        XUI.Html.SetText(oButtonElement,sDisplayText);
        oButtonElement.title = IsNull(sToolTipText) ? "" : sToolTipText
    }
}
function WizardSetButtonEnabled(bEnable,iButton)
{
    var oButtonElement = findButton(iButton);
    if(!IsNull(oButtonElement))
        oButtonElement.disabled = !bEnable
}
function WizardSetButtonVisible(bVisible,iButton)
{
    var oButtonElement = findButton(iButton);
    if(!IsNull(oButtonElement))
        oButtonElement.style.display = bVisible ? "inline" : "none"
}
function findButton(iButton)
{
    var oButtonElement = null;
    switch(iButton)
    {
        case _WizardButtonsEnum.BACKBUTTON:
            oButtonElement = document.getElementById("buttonBack");
            break;
        case _WizardButtonsEnum.CANCELBUTTON:
            oButtonElement = document.getElementById("buttonCancel");
            break;
        case _WizardButtonsEnum.NEXTBUTTON:
            oButtonElement = document.getElementById("buttonNext");
            break;
        case _WizardButtonsEnum.RESTARTBUTTON:
            oButtonElement = document.getElementById("buttonRestart");
            break
    }
    return oButtonElement
}
var _wizard = WizardFindWizard();
function WizardFindWizard()
{
    if(_wizard != null)
        return _wizard;
    var currentWindow = window,
        parent = currentWindow.parent,
        wizardcontainerpage = parent.document.getElementById("wizardcontainerpage");
    while(wizardcontainerpage == null && parent != currentWindow)
    {
        currentWindow = parent;
        parent = currentWindow.parent
    }
    if(wizardcontainerpage != null)
    {
        _wizard = new parent.window.Wizard;
        return _wizard
    }
    return null
}
function NextPageDefinition(oUrl,sDataToPost)
{
    this["Url"] = oUrl;
    this["DataToPost"] = sDataToPost
}
window.onbeforeprint = onbeforeprint;
function onbeforeprint()
{
    if(document.getElementById("helpLink"))
        document.getElementById("helpLink").style.display = "none";
    if(document.getElementById("printLink"))
        document.getElementById("printLink").style.display = "none";
    if(document.getElementById("wizardFormFooter"))
        document.getElementById("wizardFormFooter").style.display = "none";
    if(document.getElementById("wizardFormTable"))
        document.getElementById("wizardFormTable").style.height = "95%";
    if(document.getElementById("wizardFormMain"))
        document.getElementById("wizardFormMain").style.height = "95%"
}
window.onafterprint = onafterprint;
function onafterprint()
{
    if(document.getElementById("helpLink"))
        document.getElementById("helpLink").style.display = "block";
    if(document.getElementById("printLink"))
        document.getElementById("printLink").style.display = "block";
    if(document.getElementById("wizardFormFooter"))
        document.getElementById("wizardFormFooter").style.display = "block";
    if(document.getElementById("wizardFormTable"))
        document.getElementById("wizardFormTable").style.height = "100%";
    if(document.getElementById("wizardFormMain"))
        document.getElementById("wizardFormMain").style.height = "100%"
}
function getInlineDialogArgumentsFromWizard()
{
    window.inlineDialogArguments = window.parent.inlineDialogArguments;
    window.inlineDialogId = window.parent.inlineDialogId;
    window.opener = window.parent.opener;
    window.isInlined = window.parent.isInlined;
    window.isMobileClient = window.parent.isMobileClient
}
function FocusOnTab(e)
{
    _firstFocusableElement = document.getElementById("helpAnchor");
    _lastFocusableElement = document.getElementById("buttonCancel");
    _firstFocusableElement && 
        _firstFocusableElement.nextElementSibling.setAttribute("tabindex",-1);
    if(!_firstFocusableElement && !_lastFocusableElement)
        return;
    if(e.target == this._firstFocusableElement && e.keyCode == Mscrm.KeyCode.KEY_TAB && e.shiftKey)
    {
        e.stopPropagation();
        e.preventDefault();
        !IsNull(this._lastFocusableElement) && this._lastFocusableElement.focus()
    }
    else
        if(e.target == this._lastFocusableElement && e.keyCode == Mscrm.KeyCode.KEY_TAB && !e.shiftKey)
        {
            e.stopPropagation();
            e.preventDefault();
            !IsNull(this._firstFocusableElement) && this._firstFocusableElement.focus()
        }
}
