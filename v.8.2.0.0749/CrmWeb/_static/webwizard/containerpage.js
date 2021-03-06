
function Wizard() {
    this.SetProperty = setProperty;
    this.GetProperty = getProperty;
    this.Navigate = navigate;
    this.SetDialogReturnValue = setDialogReturnValue;

    function navigate(iNavigateEnum, showProgressIndicator) {
        wizardPageNavigateClicked(iNavigateEnum, showProgressIndicator)
    }

    function setDialogReturnValue(vReturnValue) {
        Mscrm.Utilities.setReturnValue(vReturnValue)
    }

    function setProperty(sPropertyName, vPropertyValue) {
        if (sPropertyName == null)
            return;
        _aoWizardResultBag[sPropertyName] = vPropertyValue
    }

    function getProperty(sPropertyName) {
        if (sPropertyName == null)
            return;
        return _aoWizardResultBag[sPropertyName]
    }
}