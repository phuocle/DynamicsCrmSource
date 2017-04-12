<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.SettingsFinalize" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function moveBack() {
            WizardSetProperty("ErrorCode", null);
            WizardSetProperty("ErrorLogText", null);
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function OnEntityCentricCheckBoxClick(eventObj) {
            var chkBox = eventObj.target;
            var entityPicklist = document.getElementById("folderStructureEntity");
            entityPicklist.disabled = !chkBox.checked;
            if (chkBox.checked && entityPicklist.selectedIndex == -1) {
                entityPicklist.selectedIndex = 1;

                OnPickListChange();
            }
        }

        function OnPickListChange() {
            Mscrm.EnableDocumentManagementPageHelper.setEntityCentricDescription();
        }

        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri
                .create("/Tools/DocumentManagement/DocumentManagementSettingsWizard/CreateDocumentLibrary.aspx");
            return new NextPageDefinition(oUrl, WizardGetProperty("DefaultSiteUrl"));
        }

        function showHideErrorLog() {
            document.getElementById('errorlogtextid').value = CrmEncodeDecode
                .CrmHtmlDecode(WizardGetProperty("ErrorLogText"));
            if (document.getElementById('textHolder').style.display == 'inline') {
                document.getElementById('textHolder').style.display = 'none';
                document.getElementById('errorloglink').innerText = '+ ' + Var_Error_Log_Text;
            } else {
                document.getElementById('textHolder').style.display = 'inline';
                document.getElementById('errorloglink').innerText = '- ' + Var_Error_Log_Text;
            }
        }

        function moveNext() {
            window.parent.toggleProgressIndicator(true);
            var validateResult = WizardGetProperty("ValidateResult");
            if (validateResult == Mscrm.SPSiteValidateResult.sharePointS2SConfigureError) {
                WizardNavigate(_WizardNavigateEnum.CLOSE);
            } else {
                var autoFolderOnSharePoint = $get("autoFolderOnSharePointSetting");
                WizardSetProperty("AutoFolderOnSharePoint", autoFolderOnSharePoint.checked);
                Mscrm.EnableDocumentManagementPageHelper
                    .saveDocumentManagementSettings(SaveDocumentManagementSettingsCallBackFunction);
            }
        }

        function SaveDocumentManagementSettingsCallBackFunction(oResult) {
            window.parent.toggleProgressIndicator(false);
            if (oResult.Success == false) {
                alert(LOCID_DOCM_SAVEERROR);
                return;
            } else {
                WizardSetProperty("EntityDocMgmtXml", null);
                var validateResult = WizardGetProperty("ValidateResult");
                if ((validateResult == Mscrm.SPSiteValidateResult.sharePoint2010WithListSolution ||
                        validateResult == Mscrm.SPSiteValidateResult.sharePointS2SConfigured) &&
                    WizardGetProperty("SelectedEntityCount") > 0) {
                    WizardNavigate(_WizardNavigateEnum.NEXT);
                } else {
                    WizardNavigate(_WizardNavigateEnum.CLOSE);
                }
            }
        }

        function OnUserCancel() {
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function pageLoad() {
            var siteUrl = WizardGetProperty("DefaultSiteUrl");
            if (!IsNull(siteUrl)) {
                var siteUrlLink = "<a href=" +
                    CrmEncodeDecode.CrmHtmlEncode(siteUrl) +
                    " target=\"_blank\" style=\"text-decoration:underline;color:blue\">" +
                    CrmEncodeDecode.CrmHtmlEncode(siteUrl) +
                    "</a>";
                $get("siteCollectionUrl").innerHTML = siteUrlLink;
            }
            $get("buttonCancel").onclick = OnUserCancel;
            $get("buttonBack").onclick = moveBack;


            var validateResult = WizardGetProperty("ValidateResult");

            if (validateResult == Mscrm.SPSiteValidateResult.sharePoint2010WithListSolution) {
                Mscrm.EnableDocumentManagementPageHelper.setEntityCentricDescription();
            }
            var errorcode = WizardGetProperty("ErrorCode");
            if (errorcode != null) {
                $get("warningMessageLabel").textContent = siteUrl + "  " + errorcode;
            }
            if (WizardGetProperty("ErrorLogText") == null) {
                $get("errorLogLabel").style.display = "none";
            }
        }

        Sys.Application.add_load(pageLoad);

    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">

    <table id="validationResultTable" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td class="mscrm-docmgmt-LeftColumn">
                <img src="/_imgs/Ribbon/ValidateURL_16.png" alt=""/>
            </td>
            <td> <ui:LabelUI id="siteCollectionUrl" runat="server" class="ms-crm-Link"/>&nbsp;<ui:LabelUI id="validateResultLabel" runat="server"/> </td>
        </tr>
    </table>
    <br/>
    <table id="warningMessageTable" class="mscrm-docmgmt-WarningMessage" width="100%" cellpadding="0" cellspacing="0" runat="server">
        <tr>
            <td class="mscrm-docmgmt-WarningMessage" valign="top" width="10%">
                <img src="/_imgs/error/notif_icn_warn16.png" alt=""/>
            </td>
            <td class="mscrm-docmgmt-WarningMessage" id="warningMessageLabel" runat="server">
                <ui:LabelUI runat="server"/>
            </td>
        </tr>
    </table>
    <br/>
    <table style="display: inline-grid; margin-bottom: 10px; margin-top: 50px;" id="errorLogLabel" width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td >
                <div>
                    <a id="errorloglink" onclick="showHideErrorLog();" class="ms-crm-S2SLink">
                        +
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.S2SUpgrade.ValidateSites.Status.ErrorLog" runat="server"/>
                    </a>
                </div>
                <div id="textHolder" style="display: none; padding-bottom: 30px">
                    <textarea id="errorlogtextid" rows="5" name="S1" cols="50" style="width: 98% !important; background-color: #eeeeee" readonly></textarea>
                </div>
                </div>
            </td>
        </tr>
    </table>
    <table width="100%" id="folderStructureTable" cellpadding="2" cellspacing="2" runat="server">
        <tr>
            <td colspan="4">
                <label tabindex="0">
                    <b>
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.FolderStructureTitle" runat="server"/>
                    </b>
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <label tabindex="0">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.FolderStructureDescription" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <br/>
            </td>
        </tr>
        <tr>
            <td class="mscrm-docmgmt-LeftColumn">
                <ui:CheckBox id="entityCentricSetting" onclick="OnEntityCentricCheckBoxClick(new Sys.UI.DomEvent(event));" runat="server"/>
            </td>
            <td width="30%">
                <b>
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.EntityCentricTitle" runat="server"/>
                </b>
            </td>
            <td width="35%">
                <sdk:PicklistControl runat="server" id="folderStructureEntity" onchange="OnPickListChange();"/>
            </td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td colspan="4">
                <label id="entityCentricDescription" runat="server"/>
            </td>
        </tr>
    </table>
    <table style="margin-top: 20px;" width="100%" id="autoFolderOnSharePointTable" cellpadding="2" cellspacing="2" runat="server">
        <tr>
            <td colspan="4">
                <label tabindex="0">
                    <b>
                        <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.AutoFolderOnSharePointStructureTitle" runat="server"/>
                    </b>
                </label>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <label tabindex="0">
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.AutoFolderOnSharePointStructureDescription" runat="server"/>
                </label>
            </td>
        </tr>
        <tr>
            <td>
                <br/>
            </td>
        </tr>
        <tr>
            <td class="mscrm-docmgmt-LeftColumn">
                <ui:CheckBox id="autoFolderOnSharePointSetting" runat="server"/>
            </td>
            <td>
                <b>
                    <loc:Text ResourceId="Web.Tools.DocumentManagement.SettingsPage.AutoFolderOnSharePointTitle" runat="server"/>
                </b>
            </td>
            <td>&nbsp;</td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>