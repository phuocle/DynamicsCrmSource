<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Dialogs.CancelCasePage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.CS.cases.dlg_cancel.aspx_20" runat="server"/></title>
<script language="JavaScript">
function applychanges()
{
var oResult = new Object();
var behavior = Mscrm.FormControlInputBehavior.GetBehavior('statusCode');

var dataValue = null;
if(behavior)
{
dataValue = behavior.get_dataValue();
}
else
{
dataValue = <%= defaultStatusCode %>
}
oResult.StatusCode = dataValue;
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

<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Web.CS.cases.dlg_cancel.aspx_50" runat="server"/>
<div id="StatusPickerDiv" runat="server">
<br />
<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed">
<col width="120"><col>
<tr>
<td class="dlg_deactivate_td_status"><label for="statusCode"><loc:Text ResourceId="Web._grid.cmds.dlg_cancel.aspx_87" runat="server"/></label></td>
<td>
<sdk:PicklistStatusControl runat="server" id="statusCode"/>
</td>
</tr>
</table>
</div>
</frm:DialogForm>

</body>
</html>
