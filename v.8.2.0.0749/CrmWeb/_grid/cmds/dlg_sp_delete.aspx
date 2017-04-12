<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteSharePointDocumentConfirmationPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="JavaScript">
        function applychanges() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow(true);
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }
    </script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
</frm:DialogForm>

</body>
</html>