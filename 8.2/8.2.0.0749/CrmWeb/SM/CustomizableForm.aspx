<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.AppointmentDetailedForm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script>

        function SelectionChanged(selectionId) {

        }

    </script>
</head>
<body style="overflow: hidden;">
<frm:CrudForm id="crmForm" runat="server"/>
</body>
</html>