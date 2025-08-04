<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Web.Sfa.InvoiceCloseDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>







<script language="JavaScript">
function applychanges( )
{
Mscrm.Utilities.setReturnValue(Mscrm.FormControlInputBehavior.GetBehavior("selStatus").get_dataValue());
closeWindow();
}

function cancel( )
{
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}
</script>

<table cellspacing="0" cellpadding="3" width="100%" style="table-layout:fixed;">
<colgroup>
<col width="110"/>
<col/>
</colgroup>
<tr>
<td class="ms-crm-Field-Required">
<label for="selStatus"><loc:Text ResourceId="Web.SFA.invoice.dlg_close.aspx_67" runat="server"/>
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td>
<sdk:PicklistStatusControl id="selStatus" runat="server"/>
</td>
</tr>
</table>