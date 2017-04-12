<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.CampaignNamePage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var _mcname = null;


        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create("/MA/minicampaign/ActivityPage.aspx");
            return new NextPageDefinition(oUrl);
        }

        Sys.Application.add_load(function() {
            _mcname = $get('MC_Name');
            window.setTimeout("NameFocus();", 10);
            InitializePage();
        });


        function WizardCloseMessage(oEvent) {
            oEvent = oEvent.rawEvent;
            oEvent.returnValue = " ";
            return " ";
        }

        function InitializePage() {
            attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            document.getElementById("buttonBack").onclick = moveBack;
            if (WizardHasProperty("CampaignName")) {
                _mcname.value = WizardGetProperty("CampaignName");
            }
        }

        function NameFocus() {
            _mcname.focus();
        }

        function moveBack() {
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardSetProperty("CampaignName", Trim(_mcname.value));
            WizardNavigate(_WizardNavigateEnum.BACK);
        }

        function moveNext() {
            if (isNullOrEmptyString(Trim(_mcname.value))) {
                alert(LOCID_MC_NAME_MANDATORY);
                _mcname.focus();
                return;
            }
            WizardSetProperty("CampaignName", Trim(_mcname.value));
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table height="100%" width="100%" border="0" bordercolor="red" cellpadding="0" cellspacing="0">
        <tr valign="top">
            <td class="MiniCampaign_td_PageBody2">
                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr height="20">
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr valign="top">
                        <td>
                            <label for="MC_Name">
                                <loc:text id="Text15" resourceid="MC_MSG_EnterTheName" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr valign="top">
                        <td class="MiniCampaign_td_MCNameBody1">
                            <input class="text" type="text" size="83" id="MC_Name" maxlength="200" name="minicampname" style="width: 98%">
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>