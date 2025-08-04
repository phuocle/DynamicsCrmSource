<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.DeleteQueueDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="JavaScript">

var _sAction		= "delete";
var _iObjType	= <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;

function applychanges()
{
go();
}

Sys.Application.add_load(function ()
{
Mscrm.Utilities.setDialogHeaderHeight("tdDialogHeader", "DlgHdBodyContainer", "DlgHdTitle", "DlgHdDesc");
});
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">

</frm:DialogForm>

</body>
</html>