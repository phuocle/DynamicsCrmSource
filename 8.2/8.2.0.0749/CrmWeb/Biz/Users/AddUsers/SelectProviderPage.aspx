<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.SelectProviderPage" %>
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


        var _providerCombo = null;

        function GetNextPageDefinition() {

            var oUrl = "/Biz/Users/AddUsers/DomainsAndGroupsPage.aspx";
            WizardSetProperty("Provider", _providerCombo.value);
            if (_providerCombo.value == "2")
                oUrl = "/Biz/Users/AddUsers/UserInputPage.aspx";
            var oUrl = Mscrm.CrmUri.create(oUrl);

            return new NextPageDefinition(oUrl);
        }


        function moveNext() {

            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function selectUsersPage_onload() {

            PopulateProviders();
            WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
            _providerCombo = $get("ProviderCombo");
        }

        function PopulateProviders() {

            var SelectProviders = new Select();
            SelectProviders.ID = "ProviderCombo";
            SelectProviders.AddOption(LOCID_PROVIDER_AD, 1);
            SelectProviders.AddOption(LOCID_PROVIDER_UPN, 2);
            SelectProviders.AddToControl($get("identityProvider"));
            SelectProviderValue();
        }

        function SelectProviderValue() {
            var sProvider = WizardGetProperty("Provider");
            if (sProvider != null && sProvider.length > 0) {

                for (var i = 0; i < _providerCombo.options.length; i++) {
                    var val = _providerCombo.options[i].value;
                    if (val == sProvider) {
                        _providerCombo.options[i].selected = true;
                        break;
                    }
                }
            }
        }

        Sys.Application.add_load(selectUsersPage_onload)
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <div >
        <table>
            <col width="5%"/><col width="10%"/><col width="55%"/><col width="30%"/>
            <tr>
                <td></td>
                <td>
                    <label for="ProviderCombo">
                        <loc:Text ResourceId="AddUsers_AuthPage_IdentityProvider_Caption" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                    </label>
                </td>
                <td id="identityProvider"></td>
            </tr>
        </table>
    </div>
</frm:WizardForm>
</body>
</html>