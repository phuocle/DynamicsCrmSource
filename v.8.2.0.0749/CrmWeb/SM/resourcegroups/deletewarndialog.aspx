<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.ResourceGroups.DeleteWarnDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">


        function button_yes() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }


        function button_no() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        function cancel() {
            closeWindow();
        }
    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" height="100%" cellspacing="0" cellpadding="0">
        <tr>
            <td>
                <loc:Text ResourceId="Dialog_Delete_Warn_Top" runat="server"/>
            </td>
        </tr>
        <tr>
            <td>
                <loc:Text ResourceId="Dialog_Delete_Warn_Bottom" runat="server"/>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>