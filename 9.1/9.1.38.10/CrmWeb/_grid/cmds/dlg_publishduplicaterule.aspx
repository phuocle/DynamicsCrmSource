<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.PublishDuplicateRuleDialogForm"    %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>


<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script language=javascript>

var _sAction	= "publishduplicaterule";
var _iObjType	= <%=ObjType.ToString("D", System.Globalization.CultureInfo.InvariantCulture)%>;

function applychanges()
{

Mscrm.Utilities.setReturnValue(true);
go();
}
function cancel()
{

Mscrm.Utilities.setReturnValue(false);
closeWindow();
}
</script>
</head>

<body scroll="no">

<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="PublishDuplicateRule_DialogText" runat="server"/>
</frm:DialogForm>

</body>
</html>