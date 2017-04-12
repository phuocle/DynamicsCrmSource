<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.OfficeGraphSettingsFinalize" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        
    </style>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        function pageLoad() {
            $get('buttonNext').disbled = true;
            $get('buttonBack').disbled = true;
        }

        function moveNext() {
            WizardNavigate(_WizardNavigateEnum.CLOSE);
        }

        Sys.Application.add_load(pageLoad);
    </script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table id="entityTable" width="100%" cellpadding=1 cellspacing=1>
        <tr>
            <td width="100%" id="officeGraphAuthenticationMessage" runat="server"></td>
        </tr>
        <tr>
            <td>
                <br/>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>