<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.InvitationPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html >
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">


        function businessUnitPage_onload() {
            if (!_bUserInviteEnabled) {

                $get("sendInvitation").checked = false;
                $get("doNotSendInvitation").checked = true;
                $get("sendInvitation").disabled = true;
                $get("sendInvitation").style.display = "none";
                $get("sendInvitationLabel").style.display = "none";
            } else {

                $get("invitationDisabled").style.display = "none";


                if (WizardHasProperty("SendInvitation")) {
                    var bSendInvitation = WizardGetProperty("SendInvitation");
                    $get("sendInvitation").checked = bSendInvitation;
                    $get("doNotSendInvitation").checked = !bSendInvitation;
                }
            }
        }


        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/ProgressPage.aspx");
            return new NextPageDefinition(oUrl);
        }


        function moveNext() {
            WizardSetProperty("SendInvitation", $get("sendInvitation").checked);

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function WantToSkip() {


            return !WizardHasProperty("SecurityRoles") || !_bUserCanSendInvitations || !IS_LIVE;
        }


        Sys.Application.add_load(businessUnitPage_onload);
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <loc:Text ResourceId="AddUsersWizard.InvitationPage.Intro" runat="server"/>
    <ul>
        <li class="ms-crm-InvitationOption">
            <input type="radio" name="invite" id="sendInvitation" class="ms-crm-RadioButton" checked="checked"/>
            <label for="sendInvitation" id="sendInvitationLabel">
                <loc:Text ResourceId="AddUsersWizard.InvitationPage.SendInvitation" runat="server"/>
            </label>
            <div class="ms-crm-InvitationOption-SecondLine" id="invitationDisabled">
                <loc:Text ResourceId="AddUsersWizard.InvitationPage.InvitationDisabled" runat="server"/>
            </div>
        </li>
        <li class="ms-crm-InvitationOption">
            <input type="radio" name="invite" id="doNotSendInvitation" class="ms-crm-RadioButton"/>
            <label for="doNotSendInvitation">
                <loc:Text ResourceId="AddUsersWizard.InvitationPage.DoNotSendInvitation" runat="server"/>
            </label>
            <div class="ms-crm-InvitationOption-SecondLine">
                <loc:Text ResourceId="AddUsersWizard.InvitationPage.DoNotSendInvitation.1" runat="server"/>
            </div>
        </li>
    </ul>
</frm:WizardForm>
</body>
</html>