<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.ConfirmSwapDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>


<HTML>
<HEAD>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web.Activities.dlg_confirm_swap.aspx_8" runat="server"/>
    </title>
    <script language="javascript">
        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        function applychanges() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }
    </script>

</HEAD>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" cellpadding="8">
        <tr class="main">
            <td>

                <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <loc:Text ResourceId="Web.Activities.dlg_confirm_swap.aspx_27" runat="server"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <loc:Text ResourceId="Web.Activities.dlg_confirm_swap.aspx_30" runat="server"/>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</HTML>