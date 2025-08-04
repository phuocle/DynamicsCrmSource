<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionImportWizardPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>


<head>

    <cnt:appheader runat="server" id="crmHeader"/>
</head>

<script type="text/javascript">

    function FailureCallBackFromUpload() {
        var control = $get("crmWizardController").control;
        if (!IsNull(control)) {
            control.processPage();
        } else {

            $get(Mscrm.SolutionWizardController.id_BTN_BACK).disabled = true;
            $get(Mscrm.SolutionWizardController.id_BTN_NEXT).disabled = true;
            $get(Mscrm.SolutionWizardController.id_BTN_CANCEL).disabled = false;
        }
    }


    function SuccessCallBackFromUpload() {
        var control = $get("crmWizardController").control;
        if (!IsNull(control)) {
            control.processPage(Mscrm.SolutionWizardController.action_LOAD);
        } else {

            $get(Mscrm.SolutionWizardController.id_BTN_BACK).disabled = true;
            $get(Mscrm.SolutionWizardController.id_BTN_NEXT).disabled = false;
            $get(Mscrm.SolutionWizardController.id_BTN_CANCEL).disabled = false;
        }
    }

    function changeNextButton(skipProductUpdateDependenciesCheckBox) {
        $get(Mscrm.SolutionWizardController.id_BTN_IMPORT).disabled = !skipProductUpdateDependenciesCheckBox.checked;
    }

</script>


<body>
<cnt:SolutionWizardController id="crmWizardController" runat="server"/>
<frm:SolutionImportWizardForm id="crmForm" runat="server">
    <div id="tab0" class="ms-crm-page">
        <iframe id="uploadFileFrame" name="uploadFileFrame" src="SolutionImportFileUpload.aspx" style="width: 95%; height: 98%; overflow: hidden" frameborder="0"></iframe>
    </div>
    <div id="tab1" class="ms-crm-page" style="display: none;">
        <iframe id="processFileFrame" name="processFileFrame" src="SolutionImportProcess.aspx" style="width: 95%; height: 100%; overflow: hidden" frameborder="0"></iframe>
    </div>
    <div id="tab2" class="ms-crm-page" style="display: none;">
        <iframe id="processImportFrame" name="processImportFrame" src="SolutionImportProcess.aspx" style="width: 1%; height: 1%; overflow: hidden" frameborder="0"></iframe>
    </div>
</frm:SolutionImportWizardForm>
</body>
</html>