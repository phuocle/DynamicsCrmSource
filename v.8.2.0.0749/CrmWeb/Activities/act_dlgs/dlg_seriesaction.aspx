<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.Dialogs.SeriesActionDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script language="javascript">


    function cancel() {
        if (!Mscrm.Utilities.resetValidationFailedElement()) {
            window.returnValue = false;
            closeWindow();
            return;
        }
    }

</script>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
</frm:DialogForm>
</body>
</html>