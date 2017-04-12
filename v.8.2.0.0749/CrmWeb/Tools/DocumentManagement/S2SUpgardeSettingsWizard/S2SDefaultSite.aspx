<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.S2SDefaultSite" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        Sys.Application.add_load(pageLoad);
        var isSharePointOnline = true;
        var isCRMOnline = <%= isOnline ? "true" : "false" %>;
        var isInsufficientPrivilegesVisible = <%= isInsufficientPrivilegesVisible ? "true" : "false" %>;
        var isAbsoluteWarningVisible = <%= isAbsoluteWarningVisible ? "true" : "false" %>;

        function moveBack() {
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function GetNextPageDefinition() {

            var oUrl = Mscrm.CrmUri
                .create("/Tools/DocumentManagement/S2SUpgardeSettingsWizard/S2SSharePointRealm.aspx");
            return new NextPageDefinition(oUrl, WizardGetProperty("DefaultSiteUrl"));
        }

        function moveNext() {
            Mscrm.S2SUpgradePageHelper.savePageDeploymentType();
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }

        function OnUserCancel() {
            Mscrm.S2SUpgradePageHelper.logMetricsforWizard(Mscrm.S2SUpgradePageHelper.TelemetryLogEventWizardCancel,
                "S2SDefaultSite");
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function pageLoad() {
            if (!isInsufficientPrivilegesVisible) {
                Mscrm.S2SUpgradePageHelper.renderStageControl(Mscrm.S2SIntegrationStage.deployment);
            }

            $get('buttonCancel').onclick = OnUserCancel;
            $get('buttonBack').onclick = moveBack;

            if (!isAbsoluteWarningVisible && !isInsufficientPrivilegesVisible) {
                if (WizardGetProperty("isSharePointOnline") == null) {
                    if (isCRMOnline) {
                        $get("sponline").checked = true;
                        changedradiobutton(true);
                    } else {
                        $get("sponprem").checked = true;
                        changedradiobutton(false);
                    }
                } else {
                    if (WizardGetProperty("isSharePointOnline"))
                        $get("sponline").checked = true;
                    else
                        $get("sponprem").checked = true;

                    changedradiobutton(WizardGetProperty("isSharePointOnline"));
                }

                if (!WizardHasProperty("isSharePointOnline")) {
                    Mscrm.S2SUpgradeWizardRerunHelper.retrieveSharePointSettings();
                }
            }
        }

        function changedradiobutton(isSPOnline) {
            if (isCRMOnline) {
                if (isSPOnline) {
                    $get("ShowForCrmonSpon").style.display = "";
                    $get("ShowForCrmonSpop").style.display = "none";

                } else {
                    $get("ShowForCrmonSpon").style.display = "none";
                    $get("ShowForCrmonSpop").style.display = "";
                }

            } else {
                if (isSPOnline) {
                    $get("ShowForCrmopSpop").style.display = "none";
                    $get("ShowForCrmopSpon").style.display = "";
                } else {
                    $get("ShowForCrmopSpop").style.display = "";
                    $get("ShowForCrmopSpon").style.display = "none";
                }
            }
            isSharePointOnline = isSPOnline;
        }


    </script>
</head>
<body>
<frm:wizardform id="crmForm" runat="server">
<div id="formcontent">
<div id="S2SIntegrationStageControl" style="width: 100%; margin-bottom: 28px; margin-top: 3px"></div>
<table id="absoluteURLWarningTable" width="100%" runat="server" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <div class="mscrm-validationPageHeader">
                <b>
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning.Header" runat="server"/>
                </b>
            </div>
            <div class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top: 10px;">
                <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning1" runat="server"/>
            </div>
            <div id="absoluteURLWarningLabel" class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top: 20px;" runat="server">
                <ui:LabelUI runat="server"/>
            </div>
            <div class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top: 20px;">
                <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.AbsoluteUrlWarning3" runat="server"/>
            </div>
        </td>
    </tr>
</table>
<table id="InsufficientPrivileges" width="100%" runat="server" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <div class="mscrm-validationPageHeader">
                <b>
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Header" runat="server"/>
                </b>
            </div>
            <div class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top: 10px;">
                <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege" runat="server"/>
            </div>
            <div id="Div1" class="mscrm-noSitesMessage mscrm-text-S2Swizard" style="margin-top: 20px;" runat="server">
                <ul class="mscrm-s2slist">
                    <li>
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege1" runat="server"/>
                    </li>
                    <li>
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege2" runat="server"/>
                    </li>
                    <li>
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.InsufficientPrivilege.Privilege3" runat="server"/>
                    </li>
                </ul>
            </div>
        </td>
    </tr>
</table>
<div id="DefaultSiteContent" runat="server">
    <div class="mscrm-text-SelectedStage mscrm-text-dark">
        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description1" runat="server"/>
    </div>
    <div style="margin-top: 18px" class="mscrm-text-S2S">
        <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description2" runat="server"/>
    </div>
    <table id="SharePointdeployment" width="50%" cellpadding="1" cellspacing="1" style="margin-bottom: 20px; margin-top: 13px;">
        <tr>
            <td width="25%">
                <input type="radio" name="issponline" id="sponline" class="ms-crm-RadioButton" onclick="changedradiobutton(true);"/>
                <label for="sponline" id="Label1">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SharepointOnlineButton.Label"
                              runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td width="25%">
                <input type="radio" name="issponline" id="sponprem" class="ms-crm-RadioButton" onclick="changedradiobutton(false);"/>
                <label for="sponprem">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.SharepointOnPremisesButton.Label"
                              runat="server"/>
                </label>
            </td>
        </tr>
    </table>
    <table id="ShowForCrmonSpon" style="display: none">
        <tr style="height: 20px">
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description4" runat="server"/>
            </td>
        </tr>
        <tr style="height: 220px">
        </tr>
    </table>
    <table id="ShowForCrmonSpop" style="display: none">
        <tr>
            <td colspan="2" class="mscrm-text-s2s">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description5" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description6" runat="server"/>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description9" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td colspan="2">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description10" runat="server"/>
            </td>
        </tr>
        <tr style="height: 50px">
        </tr>
        <tr>
            <td colspan="2" id="crmOnlineSPOnPremise" runat="server">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.DisclaimerOP" runat="server"/>
            </td>
        </tr>
    </table>
    <table id="ShowForCrmopSpon" style="display: none">
        <tr>
            <td colspan="2">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description11" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description14" runat="server"/>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description7" runat="server"/>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description15" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td colspan="2">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description12" runat="server"/>
            </td>
        </tr>
        <tr style="height: 50px">
        </tr>
    </table>
    <table id="ShowForCrmopSpop" style="display: none">
        <tr>
            <td colspan="2">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description13" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description7" runat="server"/>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description15" runat="server"/>
            </td>
        </tr>
        <tr>
            <td width="4%">
                <b>.</b>
            </td>
            <td>
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description9" runat="server"/>
            </td>
        </tr>
        <tr style="height: 12px">
        </tr>
        <tr>
            <td colspan="2">
                <loc:Text ResourceId="Web.Tools.S2SUpgrade.Wizard.S2SDefaultSite.Description10" runat="server"/>
            </td>
        </tr>
        <tr style="height: 50px">
        </tr>
    </table>
</div>
</div>
<div id="showProgress" class="ms-crm-Validation-Progress" style="display: none;">
    <div id="progressInner" style="height: 100%; width: 100%">
        <div style="top: 45%; text-align: center; position: relative;">
            <img alt="" src="/_imgs/AdvFind/progress.gif"/>
            <br/>
            <loc:Text ResourceId="OrgWaiting.Spinner.Alt" runat="server"/>
        </div>
    </div>
</div>

</frm:wizardform>
</body>
</html>