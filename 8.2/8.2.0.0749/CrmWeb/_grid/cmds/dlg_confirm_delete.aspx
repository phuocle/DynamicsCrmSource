<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmDeleteDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>


<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web._grid.cmds.dlg_confirm_delete.aspx_10." runat="server"/>
    </title>
    <script language="javascript">
        function applychanges() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        Sys.Application.add_load(function() {
            Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
            if (Mscrm.InlineDialogUtility.isMobileClient() || window.top.UseTabletExperience) {
                document.body.addEventListener("touchmove",
                    function(event) {
                        event.preventDefault();
                        event.stopPropagation()
                    },
                    false);
            }
        });

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table width="100%" style="table-layout: fixed">
        <col>
        <tr>
            <td>
                <loc:Text ResourceId="Web._grid.cmds.dlg_confirm_delete.aspx_39" runat="server">
                    <loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjectName) %></loc:Argument><loc:Argument runat="server"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjectName) %></loc:Argument>
                </loc:Text>
            </td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>