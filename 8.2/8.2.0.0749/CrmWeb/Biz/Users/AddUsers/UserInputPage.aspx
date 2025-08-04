<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.UserInputPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript" type="text/javascript">


    var _oaInputControls = null;


    var _iRemainingLicenses = 0;
    var newUsersComponent;


    function addUser() {


        var oStringBuilder = new StringBuilder();
        oStringBuilder.Append("<systemuser>");


        for (var i = 0; i < _oaInputControls.length; i++) {
            oStringBuilder.Append(Mscrm.FormControlInputBehavior.GetBehavior(_oaInputControls[i].id).get_dataXml());
        }
        oStringBuilder.Append("</systemuser>");


        var oFirstName = Mscrm.FormControlInputBehavior.GetBehavior("firstname");
        var oLastName = Mscrm.FormControlInputBehavior.GetBehavior("lastname");
        var oInternalEmailAddress = Mscrm.FormControlInputBehavior.GetBehavior("internalemailaddress");
        addUserToList(oFirstName.get_dataValue(),
            oLastName.get_dataValue(),
            oInternalEmailAddress.get_dataValue(),
            oStringBuilder.ToString());


        oFirstName.set_dataValue(null);
        oLastName.set_dataValue(null);
        oInternalEmailAddress.set_dataValue(null);


        updateAddButton();
    }


    function addUserToList(sFirstName, sLastName, sEmail, sUserXml) {

        var sUserOptionText = formatString(LOCID_USER_FORMAT, sFirstName, sLastName, sEmail);


        newUsersComponent.AddOption(sUserOptionText, sUserXml);


        newUserCountChange();
    }


    function editUser() {

        var oUserXml = XUI.Xml.LoadXml(newUsersComponent.get_dataValue());


        var oaAttributes = XUI.Xml.SelectNodes(oUserXml, "/systemuser/*", null);
        for (var i = 0; i < oaAttributes.length; i++) {
            var oAttribute = oaAttributes[i];
            Mscrm.FormControlInputBehavior.GetBehavior(oAttribute.tagName).set_dataValue(XUI.Xml.GetText(oAttribute));
        }


        updateAddButton();


        removeUser();
    }


    function GetNextPageDefinition() {
        var oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/InvitationPage.aspx");
        return new NextPageDefinition(oUrl);
    }


    function moveNext() {

        var bFoundControlWithData = false;
        for (var i = 0; i < _oaInputControls.length && !bFoundControlWithData; i++) {
            if (!IsNull(Mscrm.FormControlInputBehavior.GetBehavior(_oaInputControls[i].id).get_dataValue())) {
                bFoundControlWithData = true;
            }
        }


        if (bFoundControlWithData && !confirm(LOCID_DISCARD_CHANGES)) {
            return;
        }


        var oStringBuilder = new StringBuilder();


        oStringBuilder.Append("<systemusers>");


        var oaOptions = newUsersComponent.get_options();
        for (var i = 0; i < oaOptions.length; i++) {
            oStringBuilder.Append(oaOptions[i].DataValue);
        }


        oStringBuilder.Append("</systemusers>");


        WizardSetProperty("UserXml", oStringBuilder.ToString());

        WizardNavigate(_WizardNavigateEnum.NEXT);
    }


    function newUserCountChange() {
        var iUserCount = newUsersComponent.get_options().length;


        if (IS_LIVE) {
            if (AVAILABLE_LICENSES != -1) {
                _iRemainingLicenses = Math.max(AVAILABLE_LICENSES - iUserCount, 0);
                XUI.Html.SetText($get("licenseCountLabel"), formatString(LOCID_LICENSES_FORMAT, _iRemainingLicenses));
            } else {
                XUI.Html.SetText($get("licenseCountLabel"), "");
            }
        } else {
            _iRemainingLicenses = -1;
            $get("licenseCountLabel").style.display = 'none';
        }


        WizardSetButtonEnabled(iUserCount > 0, _WizardButtonsEnum.NEXTBUTTON);
    }


    function removeUser() {

        newUsersComponent.RemoveOption(newUsersComponent.get_dataValue());


        newUserCountChange();


        updateAddButton();


        updateEditButtons();
    }


    function updateAddButton() {


        var bDisableAdd = (_iRemainingLicenses == 0);


        for (var i = 0; i < _oaInputControls.length && !bDisableAdd; i++) {
            if (IsNull(Mscrm.FormControlInputBehavior.GetBehavior(_oaInputControls[i].id).get_dataValue())) {
                bDisableAdd = true;
            }
        }


        $get("addButton").disabled = bDisableAdd;
    }


    function updateEditButtons() {
        var bNoUserSelected = IsNull(newUsersComponent.get_dataValue());
        $get("editButton").disabled = bNoUserSelected;
        $get("deleteButton").disabled = bNoUserSelected;
    }


    function userInputPage_onload() {
        newUsersComponent = Mscrm.FormControlInputBehavior.GetBehavior('newUsers');


        _oaInputControls = $get("userTable").getElementsByTagName("INPUT");


        if (WizardHasProperty("UserXml")) {

            var oUserXml = XUI.Xml.LoadXml(WizardGetProperty("UserXml"));


            var oaUserNodes = XUI.Xml.SelectNodes(oUserXml, "/systemusers/systemuser", null);
            for (var i = 0; i < oaUserNodes.length; i++) {

                var oUserNode = oaUserNodes[i];


                var sFirstName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oUserNode, "firstname", null));
                var sLastName = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oUserNode, "lastname", null));
                var sEmail = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oUserNode, "internalemailaddress", null));


                addUserToList(sFirstName, sLastName, sEmail, oUserNode.xml);
            }
        }


        newUserCountChange();


        if (!WizardHasProperty("SecurityRoles") || !_bUserCanSendInvitations || !IS_LIVE) {
            WizardSetButtonText(LOCID_COMMIT_TEXT, LOCID_COMMIT_TOOLTIP, _WizardButtonsEnum.NEXTBUTTON);
        }
    }

    function openLicenseWizard() {
        var options = new Xrm.DialogOptions();
        options.width = 800;
        options.height = 650;
        var url = Mscrm.CrmUri.create('/WebWizard/WizardContainer.aspx?WizardId=BC3DEC10-1396-4cb3-BEDA-EEDB991F796C');
        Xrm.Internal.openDialog(url.toString(), options, null, null, null);
    }


    Sys.Application.add_load(userInputPage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table class="ms-crm-AddUsers-MaxWidth" cellpadding="0" cellspacing="0">
        <col/><col width="125"/><col/>
        <tr style="padding-bottom: 10px;">
            <td colspan="3" style="padding-bottom: 10px;">
                <% RenderIntroduction(); %>
            </td>
        </tr>
        <tr>
            <td valign="top">
                <table id="userTable" class="ms-crm-AddUsers-MaxWidth ms-crm-AddUsers-UserInput" cellpadding="0" cellspacing="0">
                    <col/>
                    <asp:panel id="defaultPanel" runat="server">
                        <tr>
                            <td class="ms-crm-Field-Required">
                                <label for="firstname">
                                    <loc:Text ResourceId="AddUsersWizard.UserInputPage.FirstName" runat="server"/>
                                    <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" src="/_imgs/frm_required.gif"/>
                                </label>
                            </td>
                        </tr>
                        <tr class="ms-crm-AddUsers-UserInputField">
                            <td style="padding-bottom: 10px;">
                                <sdk:TextBoxControl id="firstname" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="ms-crm-Field-Required">
                                <label for="lastname">
                                    <loc:Text ResourceId="AddUsersWizard.UserInputPage.LastName" runat="server"/>
                                    <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" src="/_imgs/frm_required.gif"/>
                                </label>
                            </td>
                        </tr>
                        <tr class="ms-crm-AddUsers-UserInputField">
                            <td style="padding-bottom: 10px;">
                                <sdk:TextBoxControl id="lastname" runat="server"/>
                            </td>
                        </tr>
                    </asp:panel>

                    <asp:panel id="specialPanel" runat="server">
                        <tr>
                            <td class="ms-crm-Field-Required">
                                <label for="lastname">
                                    <loc:Text ResourceId="AddUsersWizard.UserInputPage.LastName" runat="server"/>
                                    <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" src="/_imgs/frm_required.gif"/>
                                </label>
                            </td>
                        </tr>
                        <tr class="ms-crm-AddUsers-UserInputField">
                            <td style="padding-bottom: 10px;">
                                <sdk:TextBoxControl id="lastname2" runat="server" ControlId="lastname"/>
                            </td>
                        </tr>
                        <tr>
                            <td class="ms-crm-Field-Required">
                                <label for="firstname">
                                    <loc:Text ResourceId="AddUsersWizard.UserInputPage.FirstName" runat="server"/>
                                    <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" src="/_imgs/frm_required.gif"/>
                                </label>
                            </td>
                        </tr>
                        <tr class="ms-crm-AddUsers-UserInputField">
                            <td style="padding-bottom: 10px;">
                                <sdk:TextBoxControl id="firstname2" runat="server" ControlId="firstname"/>
                            </td>
                        </tr>
                    </asp:panel>

                    <tr>
                        <td class="ms-crm-Field-Required">
                            <label for="internalemailaddress">
                                <% if (isLive)
                                   { %>
                                    <loc:Text ResourceId="AddUsersWizard.UserInputPage.Email" runat="server"/>
                                <% }
                                   else
                                   { %>
                                    <loc:Text ResourceId="AddUsers_UserInput_UPN_UserName" runat="server"/>
                                <% } %>
                                <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" src="/_imgs/frm_required.gif"/>
                            </label>
                        </td>
                    </tr>
                    <tr class="ms-crm-AddUsers-UserInputField">
                        <td>
                            <sdk:EmailAddressControl id="internalemailaddress" IsLiveId="true" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
            <td class="ms-crm-AddUsers-UserInputButtons">
                <br/>
                <ui:Button ID="addButton" ResourceId="AddUsersWizard.UserInputPage.Add" OnClick="addUser();" Disabled="true" runat="server"/><br/>
                <ui:Button ID="editButton" ResourceId="AddUsersWizard.UserInputPage.Edit" OnClick="editUser();" Disabled="true" runat="server"/><br/>
                <ui:Button ID="deleteButton" ResourceId="AddUsersWizard.UserInputPage.Delete" OnClick="removeUser();" Disabled="true" runat="server"/>
            </td>
            <td valign="top">
                <div>
                    <label for="newUsers">
                        <loc:Text ResourceId="AddUsersWizard.UserInputPage.NewUsers" runat="server"/>
                    </label>
                </div>
                <ui:Select id="newUsers" runat="server"/>
                <div id="licenseCountLabel"/>
            </td>
        </tr>
        <tr style="padding-bottom: 10px; padding-top: 10px">
            <td colspan="3" style="padding-bottom: 10px; padding-top: 10px">
                <% if (isLive) RenderEmailText(); %>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>