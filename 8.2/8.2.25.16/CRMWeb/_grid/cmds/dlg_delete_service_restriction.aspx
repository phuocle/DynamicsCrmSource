<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Dialogs.DeleteServiceRestrictionPage" CodeBehind="Microsoft.Crm.Service.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="JavaScript">

function applychanges()
{
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel()
{
closeWindow();
}

</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Dialog_Delete_DeleteServiceRestriction" runat="server"/>
</frm:DialogForm>
</body>
</html>