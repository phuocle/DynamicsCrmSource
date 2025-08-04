<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SUpgradeFinalize" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">

        function moveNext() {
            if ($get("openDocMgmt").checked) {
                Mscrm.S2SUpgradePageHelper.openDocumentManagementSettings();
            } else {
                Mscrm.S2SUpgradePageHelper.finalizeSettings();
            }
        }

        function moveBack() {
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function OnUserCancel() {
            Mscrm.S2SUpgradePageHelper.logMetricsforWizard(Mscrm.S2SUpgradePageHelper.TelemetryLogEventWizardCancel,
                "S2SUpgradeFinalize");
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function pageLoad() {
            $get('buttonNext').disbled = true;
        }

        function openDocumentWizard() {
            openStdWin(Mscrm.CrmUri
                .create('/WebWizard/WizardContainer.aspx?WizardId=2164dd44-6f89-430c-9c7b-abfa44320cf0'),
                '_blank',
                520,
                530,
                null);
        }

        Sys.Application.add_load(pageLoad);
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table id="desription" width="100%" cellpadding="1" cellspacing="1">
        <tr>
            <td width="100%" style="text-align: center;">
                <table id="desription" width="100%" cellpadding="1" cellspacing="1">
                    <tr>
                        <td style="text-align: center;" width="100%">
                            <div style="text-align: center; margin-top: 30%; font-size: large">
                                <b>
                                    <loc:Text ResourceId="Web.Tools.S2SUpgrade.SettingsFinalizePage.Description" runat="server"/>
                                </b>
                            </div>
                            <div style="text-align: center">
                                <loc:Text ResourceId="Web.Tools.S2SUpgrade.SettingsFinalizePage.Description1" runat="server"/>
                            </div>
                            <div style="text-align: center; margin-top: 10%;" id="openDocumentManagementDescription" runat="server">

                            </div>
                            <div style="float: left; text-align: center; width: 100%; margin-top: 5%">
                                <input type="checkbox" id="openDocMgmt" style="width: 10px; vertical-align: middle; margin-left: 10%"/><loc:Text ResourceId="Web.Tools.S2SUpgrade.SettingsFinalizePage.Description5" runat="server"/>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>