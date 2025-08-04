<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Application.Pages.Sfa.SalesOrders.CloseDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>












<html>
<head>
<script language="javascript">

Sys.Application.add_load(function () {
<% =RenderInitCalendar() %>
});

function applychanges()
{
var oResult = new Object();

oResult.newStatus        = Mscrm.FormControlInputBehavior.GetBehavior("selStatus").get_dataValue();


oResult.closeDate        = FormatUtcDate(Mscrm.FormControlInputBehavior.GetBehavior('closeDate').get_dataValue());
var sDescription = Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataValue();

oResult.description      = sDescription == null ? "" : sDescription;

Mscrm.Utilities.setReturnValue(oResult);
closeWindow();
}

function cancel()
{
closeWindow();
}

</script>
</head>
<body>
<table width="100%" style="table-layout: fixed">
<colgroup>
<col width="100" />
<col width="200" />
</colgroup>
<tr>
<td>
<label for="selStatus">
<loc:Text ResourceId="Web.SFA.salesorders.aspx_40.dlg_close" runat="server" />
</label>
</td>
<td>
<sdk:PicklistStatusControl id="selStatus" runat="server" />
</td>
</tr>
<tr>

<td>
<label for="closeDate">
<loc:Text id="dateText" runat="server" />
</label>
</td>
<td>
<sdk:DateTimeControl id="closeDate" runat="server" ShowTime="false" />
</td>
</tr>
<tr>

<td style="padding-top: 20px" colspan="3">
<label for="description">
<loc:Text ResourceId="Web.SFA.salesorders.aspx_60.dlg_close" runat="server" />
</label>
</td>
</tr>
<tr>
<td colspan="3" height="80px">
<sdk:TextAreaControl id="description" MaxLength="2000" runat="server" />
</td>
</tr>
</table>
</body>
</html>
