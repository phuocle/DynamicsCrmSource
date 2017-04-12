<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmationDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>

<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <script language="JavaScript">
        var isInlineDialog = window != top;

        function applychanges() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }

        function cancel() {
            window.returnValue = false;
            if (isInlineDialog)
                executeDialogCloseCallback(window.returnValue);
            closeWindow();
        }

    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
    <table cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <td>
                <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(dialogBody) %>
            </td>
        </tr>
    </table>
</frm:DialogForm>

</body>
</html>