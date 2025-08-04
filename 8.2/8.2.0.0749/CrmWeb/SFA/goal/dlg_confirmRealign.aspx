<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.RealignFiscalDatesDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>

<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="JavaScript">

        var title = "<%= CurrentResourceManager.GetString("Dialog_Title_Realign") %>";
        document.title = title;
        $addHandler(window, "load", windowOnLoad);

        function windowOnLoad() {
            $get("butBegin").focus();
        }

        function applychanges() {
            Mscrm.Utilities.setReturnValue(true);
            closeWindow();
        }

        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }
    </script>
</head>

<body scroll="no">
<frm:DialogForm id="crmForm" runat="server">
</frm:DialogForm>
</body>
</html>