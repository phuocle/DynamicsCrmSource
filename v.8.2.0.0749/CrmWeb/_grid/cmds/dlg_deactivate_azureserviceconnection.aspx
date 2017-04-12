<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeactivateAzureServiceConnection" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript" language="JavaScript">
        var _sAction = "deactivate_azureserviceconnection";
        var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;

        function applychanges() {
            go();
        }

        function cancel() {
            closeWindow();
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0">
        <tr>
            <td style="padding-left: 10px">
                <loc:Argument runat="server"><%= DeactivateModelConfirmationMessage %></loc:Argument>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>