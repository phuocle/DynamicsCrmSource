<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.SystemCustomization.Attributes.SetStateModelStatusConfirmation" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}
</style>
<script language="javascript">

function applychanges() {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}


function cancel() { closeWindow(); }
</script>
</head>
<body>

<frm:DialogForm id="crmForm" runat="server">

<table width="100%" cellpadding="0" cellspacing="3">
<col width="100"><col>
<tr>
<td>
<label for="subject"><loc:Text  id="warningMessage" runat="server"/></label>
</td>

</tr>

</table>
</frm:DialogForm>
</body>
</html>