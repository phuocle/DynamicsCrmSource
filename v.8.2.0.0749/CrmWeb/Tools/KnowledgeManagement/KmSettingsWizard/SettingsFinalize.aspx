<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.KnowledgeManagement.SettingsFinalize" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        table#Disclaimer td a {
            color: Blue;
            text-decoration: underline
        }
    </style>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function moveBack() {
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function moveNext() {
            window.parent.toggleProgressIndicator(true);
            var validateResult = WizardGetProperty("ValidateResult");
            Mscrm.EnableKnowledgeManagementPageHelper
                .saveKnowledgeManagementSettings(saveKnowledgeManagementSettingsCallbackFunction);
        }

        function saveKnowledgeManagementSettingsCallbackFunction(oResult) {
            if (oResult.Success == false) {
                window.parent.toggleProgressIndicator(false);
                alert(LOCID_DOCM_SAVEERROR);
                return;
            } else {
                WizardSetProperty("IsReset", null);
                Mscrm.EnableKnowledgeManagementPageHelper.updateKMSettings();
            }
        }

        function OnUserCancel() {
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function HandleWarning(validateResult) {
            if (validateResult != "0" && validateResult != "100") {
                $get("warningMessageTable").style.display = "";
                $get("validationResultTable").style.display = "none";
                $get("ParatureValues").style.display = "none";
                $get("CRMValues").style.display = "none";
                $get("Disclaimer").style.display = "none";
                $get("buttonNext").disabled = true;
                if (typeof (validateResult) == "string") {
                    switch (validateResult) {
                    case "2":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_KM_INVALIDSUPPORTURL);
                        break;
                    case "3":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_WRONG_SUPPORTURLFORMAT);
                        break;
                    case "102":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_KM_INVALIDNATIVECRMURL);
                        break;
                    case "103":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_WRONG_NATIVECRMURLFORMAT);
                        break;
                    case "104":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_WRONG_NATIVECRMURLNOKBNO);
                        break;
                    case "C6001":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_403_C6001);
                        break;
                    case "C6002":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_403_C6002);
                        break;
                    case "C6003":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_403_C6003);
                        break;
                    case "C6004":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_403_C6004);
                        break;
                    case "C6009":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_403_C6009);
                        break;
                    case "400":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_400_B6007);
                        break;
                    case "500":
                    case "C5000":
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_KMWALL_PARATURE_500_C5000);
                        break;
                    case "1":
                    case "408":
                    case "C6005":
                    case "C6006":
                    default:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_DOCM_URLERROR);
                        break;
                    }
                } else {
                    switch (validateResult) {
                    case 1:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_DOCM_URLERROR);
                        break;
                    case 2:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_KM_INVALIDSUPPORTURL);
                        break;
                    case 3:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_WRONG_SUPPORTURLFORMAT);
                        break;
                    case 102:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode.CrmHtmlEncode(LOCID_KM_INVALIDNATIVECRMURL);
                        break;
                    case 103:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_WRONG_NATIVECRMURLFORMAT);
                        break;
                    case 104:
                        $get("WarningMessage").innerHTML = CrmEncodeDecode
                            .CrmHtmlEncode(LOCID_WRONG_NATIVECRMURLNOKBNO);
                        break;
                    default:
                        break;
                    }
                }
            } else {


                if (!WizardGetProperty("IsParature")) {
                    $get("Disclaimer").style.display = "none";
                }
            }
        }

        function pageLoad() {
            if (WizardGetProperty("IsParature")) {
                $get("CRMValues").style.display = "none";
                $get("lblSiteCollectionUrlValue").innerHTML = CrmEncodeDecode
                    .CrmHtmlEncode(WizardGetProperty("DefaultSiteUrl"));
                $get("lblAccountIdValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(WizardGetProperty("AccountID"));
                $get("lblDepartmentValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(WizardGetProperty("Department"));
                $get("lblSupportURLValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(WizardGetProperty("SupportURL"));
            } else {
                $get("ParatureValues").style.display = "none";
                var chkUseExtPortal = WizardGetProperty("ChkUseExtPortal");
                var chkUseExtPortalVal = (chkUseExtPortal == true) ? "Yes" : "No";
                $get("lblChkUseExtPortalValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(chkUseExtPortalVal);
                if (chkUseExtPortal) {
                    $get("lblCrmUrlValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(WizardGetProperty("NativeCRMUrl"));
                } else {
                    $get("CRMUrlTr").style.display = "none";
                }
            }

            var validateResult = WizardGetProperty("ValidateResult");
            HandleWarning(validateResult);
            $get("buttonCancel").onclick = OnUserCancel;
            $get("buttonBack").onclick = moveBack;
        }

        Sys.Application.add_load(pageLoad);

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">

    <table id="validationResultTable" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td colspan="2">
                <img src="/_imgs/ico/16_info.gif" alt=""/><ui:LabelUI id="validateResultLabel" runat="server"/>
            </td>
        </tr>
    </table>
    <br/>
    <table id="ParatureValues" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblSiteCollectionUrl">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.URL.Label" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblSiteCollectionUrlValue" runat="server"></label>
            </td>
        </tr>
        <tr>
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblAccountId">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Account.Label" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblAccountIdValue" runat="server"></label>
            </td>
        </tr>
        <tr>
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblDepartment">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.Department.Label" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblDepartmentValue" runat="server"></label>
            </td>
        </tr>
        <tr>
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblSupportURL">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.SupprortURL.Label" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblSupportURLValue" runat="server"></label>
            </td>
        </tr>
    </table>
    <table id="CRMValues" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblChkUseExtPortal">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.UseExtPortal.Description2" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblChkUseExtPortalValue" runat="server"></label>
            </td>
        </tr>
        <tr id="CRMUrlTr" runat="server">
            <td width="35%" style="wordwrap: break-word;">
                <label id="lblCrmUrl">
                    <b>
                        <loc:Text ResourceId="Web.Tools.KnowledgeManagement.SettingsPage.CRMURL.Label" runat="server"/>
                    </b>
                </label>
            </td>
            <td>
                <label id="lblCrmUrlValue" runat="server"></label>
            </td>
        </tr>
    </table>
    <br/>
    <table id="Disclaimer" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td colspan="2">
                <img src="/_imgs/ico/16_info.gif" alt=""/><ui:LabelUI id="lblPrivacyDisclaimer" runat="server"/> <a target="_blank" href="http://go.microsoft.com/fwlink/p/?LinkID=310140">
                    <ui:LabelUI id="lblPrivacyDisclaimerHereLink" runat="server"/>
                </a> <ui:LabelUI id="lblPrivacyDisclaimerConsultText" runat="server"/> <a target="_blank" href="http://go.microsoft.com/fwlink/p/?LinkID=518691">
                    <ui:LabelUI id="lblPrivacyDisclaimerMoreInfo" runat="server"/>
                </a>
            </td>
        </tr>
    </table>
    <br/>
    <table id="warningMessageTable" class="mscrm-docmgmt-WarningMessage" width="100%" cellpadding="0" cellspacing="0" runat="server" style="border: 1px solid #808080; padding: 5px;">
        <tr style="background-color: #FFFFCC;">
            <td class="mscrm-docmgmt-WarningMessage" valign="top" width="7%">
                <img src="/_imgs/error/notif_icn_warn16.png" alt=""/>
            </td>
            <td class="mscrm-docmgmt-WarningMessage" id="warningMessageLabel" runat="server">
                <label id="WarningMessage">
            </td>
        </tr>
    </table>
    <br/>
</frm:WizardForm>
</body>
</html>