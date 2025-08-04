<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.PendingEmailReminderPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<script language=javascript>
function applychanges()
{
closeWindow();
}
</script>




<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;" class="ms-crm-Dialog-Error">
<col><col width="56"><col width="328"><col>
<tr>
<td>&nbsp;</td>
<td class="ms-crm-Dialog-Error-Icon" valign="middle"><img alt="" id="WarningImage" runat="server"></td>
<td class="ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="PendingEmailReminderPage.DialogTitle" runat="server"/>
</td>
<td>&nbsp;</td>
</tr>
<tr>
<td colspan="2">&nbsp;</td>
<td class="ms-crm-Dialog-Error-Body">
<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_message)%>
</td>
<td>&nbsp;</td>
</tr>
</table>
