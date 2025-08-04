<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.PendingEmailApprovalPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web"%>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<script language=javascript>
function applychanges()
{
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}
function openusersorqueueswindow(type)
{
if (type == 'user') {
Mscrm.Utilities.setReturnValue('/main.aspx?etc=8&pagetype=entitylist&viewid={89939D86-F073-42BA-BFC4-DA7999C78825}&viewtype=1039');
}
else if (type == 'queue') {
Mscrm.Utilities.setReturnValue('/main.aspx?etc=2020&pagetype=entitylist&viewid={3A8191C3-D94E-4FD4-AF7B-5BF29568A563}&viewtype=1039');
}
closeWindow(true);
}
</script>




<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;" class="ms-crm-Dialog-Error">
<col><col width="56"><col width="328"><col>
<tr>
<td>&nbsp;</td>
<td class="ms-crm-Dialog-Error-Icon" valign="middle"><img alt="" id="WarningImage" runat="server"></td>
<td class="ms-crm-Dialog-Error-Title">
<loc:Text ResourceId="PendingApprovalReminderPage.DialogTitle" runat="server"/>
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
<tr>
<td colspan="2">&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<% if(_showUserMessage == true){ %>
<tr>
<td colspan="2">&nbsp;</td>
<td class="ms-crm-Dialog-Error-Body">
<a id='approveUserLink' class='ms-crm-Dialog-Error-Link' href='#' onclick='openusersorqueueswindow("user");'><loc:Text ResourceId="PendingApprovalReminderPage.UserMessage" runat="server"/></a><br /><br />
</td>
<td>&nbsp;</td>
</tr>
<%} %>
<% if(_showQueueMessage == true){ %>
<tr>
<td colspan="2">&nbsp;</td>
<td class="ms-crm-Dialog-Error-Body">
<a id='approveQueueLink' class='ms-crm-Dialog-Error-Link' href='#' onclick='openusersorqueueswindow("queue");'><loc:Text ResourceId="PendingApprovalReminderPage.QueueMessage" runat="server"/></a><br /><br />
</td>
<td>&nbsp;</td>
</tr>
<% } %>
</table>
