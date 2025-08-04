<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.Contracts.CancelDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript">


var _txtCancelDate = null;
Sys.Application.add_load(function() {
_txtCancelDate = Mscrm.FormControlInputBehavior.GetBehavior("txtCancelDate");
_txtCancelDate.add_change(updateUIState);
});
$addHandler(window, "load", function() {
<% =RenderInitCalendar() %>
});

function updateUIState(eventObject)
{
if(_txtCancelDate.get_dataValue() == "")
{
$get("butBegin").disabled = true;
}
else
{
$get("butBegin").disabled = false;
}
}

function cancel()
{
closeWindow();
}

function applychanges()
{
var ret = new Object();
ret.date = FormatUtcDate(_txtCancelDate.get_dataValue());

Mscrm.Utilities.setReturnValue(ret);
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellspacing="0" cellpadding="0" width="100%" height="100%" style="table-layout:fixed;">
<tr>
<td class="dlg_cancel_td_Cancel"><label for="txtCancelDate"><loc:Text ResourceId="Web.CS.contracts.dlg_cancel.aspx_54" runat="server"/></label></td>
<td><ui:DateTimeUI id="txtCancelDate" runat="server" /></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
