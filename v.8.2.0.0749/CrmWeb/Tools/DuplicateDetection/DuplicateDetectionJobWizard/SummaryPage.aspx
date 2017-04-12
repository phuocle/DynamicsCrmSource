<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetectionJobWizard.SummaryPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">

        var cancelClicked = false;

        function WizardCloseMessage(oEvent) {
            oEvent = oEvent.rawEvent;

            if (!cancelClicked) {
                oEvent.returnValue = LOCID_DD_ALERT_CLOSE;
                return LOCID_DD_ALERT_CLOSE;
            }
        }

        function OnCancelClicked() {
            cancelClicked = true;
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        Sys.Application.add_load(SummaryPageOnLoad);

        function SummaryPageOnLoad() {
            attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);

            var cancelBtn = document.getElementById("buttonCancel");
            cancelBtn.onclick = OnCancelClicked;


            document.getElementById("buttonBack").onclick = moveBack;
        }

        function moveBack() {
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function moveNext() {

            var nextBtn = document.getElementById("buttonNext");
            var cancelBtn = document.getElementById("buttonCancel");
            var backBtn = document.getElementById("buttonBack");
            nextBtn.disabled = true;
            cancelBtn.disabled = true;
            backBtn.disabled = true;


            var result = Mscrm.DuplicateDetectionWizardHelper.extractInputsAndCreateDupDetectionJob();

            if (result.Success == true) {

                if (!Mscrm.Utilities.isModalDialogSupported()) {
                    try {
                        window.top.opener.auto(Mscrm.EntityTypeCode.AsyncOperation);
                    } catch (e) {
                    }
                }
                detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
                WizardSetDialogReturnValue(true);
                WizardNavigate(_WizardNavigateEnum.CLOSE);
            } else {
                nextBtn.disabled = false;
                cancelBtn.disabled = false;
                backBtn.disabled = false;
            }
        }

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table width="100%" cellpadding=0 cellspacing=0>
        <tr valign="top">
            <td>
                <loc:Text ResourceId="DuplicateDetection_Wizard_Page4_Info1" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>&nbsp;</td>
        </tr>
        <tr valign="top">
            <td>
                <loc:Text ResourceId="DuplicateDetection_Wizard_PostScript" runat="server"/>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>