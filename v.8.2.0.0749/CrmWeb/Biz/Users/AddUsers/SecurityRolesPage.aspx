<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.SecurityRolesPage" EnableViewState="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html >
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">

        var securityRoles;


        function clearDescription() {

            XUI.Html.SetText(document.getElementById("roleName"), "");
            XUI.Html.SetText(document.getElementById("roleDescription"), LOCID_GHOST_DESCRIPTION);
        }


        function GetNextPageDefinition() {
            var oUrl = Mscrm.CrmUri.create(IS_LIVE
                ? "/Biz/Users/AddUsers/UserInputPage.aspx"
                : "/Biz/Users/AddUsers/LicensingPage.aspx");
            return new NextPageDefinition(oUrl);
        }


        function moveNext() {
            WizardSetProperty("SecurityRoles", securityRoles.get_dataValues());

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function securityRolesPage_onload() {
            securityRoles = $find('<%= securityRoles.ClientID %>');

            if (WizardHasProperty("SecurityRoles")) {
                securityRoles.set_dataValues(WizardGetProperty("SecurityRoles"));
            }


            XUI.Html.SetText(document.getElementById("roleDescription"), LOCID_GHOST_DESCRIPTION);
        }


        function setDescription(sName, sDescription) {

            XUI.Html.SetText(document.getElementById("roleName"), sName);
            XUI.Html.SetText(document.getElementById("roleDescription"), sDescription);
        }


        function WantToSkip() {

            return !_bUserCanAssignRole;
        }

        Sys.Application.add_load(securityRolesPage_onload);
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <div style="height: 100%; width: 100%;">
        <div class="ms-crm-AddUsers-SecurityRoles-Intro" style="height: 16px;">
            <div runat="server" id="introCell" style="padding-bottom: 10px;">
                <img alt="" src="/_imgs/ico/16_info.gif" class="ms-crm-Lookup-Item"/>
            </div>
        </div>
        <div style="padding-bottom: 10px; height: 14px;">
            <loc:Text ResourceId="AddUsersWizard.SecurityRolesPage.SecurityRoles" runat="server"/>
            <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Recommended.AltTag' runat='server'/>" src="/_imgs/frm_recommended.gif"/>
        </div>
        <div class="ms-crm-AddUsers-SecurityRoles">
            <div class="RolesPosition">
                <cnt:CheckBoxList id="securityRoles" runat="server"/>
            </div>
            <div class="DescriptionPosition">
                <div id="roleDescriptionSection" class="ms-crm-AddUsers-RoleDescription">
                    <table class="ms-crm-AddUsers-MaxWidth" cellpadding="0" cellspacing="0">
                        <col/>
                        <tr>
                            <td id="roleName" class="ms-crm-Form-Section"/>
                        </tr>
                        <tr>
                            <td id="roleDescription" class="ms-crm-AddUsers-RoleDescription"/>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</frm:WizardForm>
</body>
</html>