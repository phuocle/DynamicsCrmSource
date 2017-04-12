<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.PartnerSolutionActivating" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">

        function retry() {
            resizeWindow(925, 725);
            openStdWin(Mscrm.CrmUri
                .create("/partner/partnerredir.aspx?Name=olm&Retry=true&RedirId=<%= (int) Microsoft.Crm.Partner.RedirectLocation.Activation %>"),
                null,
                925,
                725);
        }

        function cancel() {
            closeWindow();
        }

        function applychanges() {
            closeWindow();
        }

    </script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
    <% = ActivatingLabel %>
</frm:DialogForm>
</body>
</html>