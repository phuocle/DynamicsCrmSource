<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Web.MA.CampaignResponse.Dialogs.ReactivateCampaignResponse" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script language="JavaScript">
function applychanges() {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

function cancel() {
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}
</script>

<table cellspacing="0" cellpadding="8" width="100%" height="100%">
<tr>
<td>
<label style="font-size :small;" for="reactivatecampaignresponse">
<loc:Text ResourceId="Web.MA.CampaignResponse.dlg_reactivatecampaignresponse.aspx_02" runat="server"/>
</label>
</td>
</tr>
</table>