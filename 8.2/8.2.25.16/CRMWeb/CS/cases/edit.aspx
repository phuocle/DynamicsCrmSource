<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.CaseDetailPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
</head>
<body>
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>

<table class="ms-crm-Form-Layout" cellspacing="0" cellpadding="0">
<tr height="44">
<td>
<mnu:AppFormMenuBar id="crmMenuBar" ShowFormHeader="false" runat="server"/>
</td>
</tr>
<tr>
<td>
<frm:CrudForm id="crmForm" runat="server" RenderOnlyBody="false" />
</td>
</tr>
</table>
</body>
</html>
