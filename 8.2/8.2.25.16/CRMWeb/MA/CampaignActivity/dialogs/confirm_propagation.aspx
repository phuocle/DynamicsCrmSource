<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Web.MA.CampaignActivity.Dialogs.ConfirmPropagation" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<script language="javascript">


function cancel() {
closeWindow();
}

function enable() {
Mscrm.FormControlInputBehavior.GetBehavior("ActivityLookup").set_disabled(($get("rad_user_queue").checked) ? false : true);
Mscrm.FormControlInputBehavior.GetBehavior("QueueLookup").set_disabled(($get("chk_queue").checked) ? false : true);
}


function applychanges() {

var ret = new Object();
ret.Customer = false;
ret.Activity = false;
ret.Myself = false;
ret.UserQueue = false;
ret.SendEmail = false;
ret.OwnerType = SystemUser;


if ($get("rad_1").checked) {
ret.Customer = true;
}
else if ($get("rad_3").checked) {
ret.Myself = true;
}
else if ($get("rad_user_queue").checked) {
var activityLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("ActivityLookup");
ret.UserQueue = true;
if (IsNull(activityLookupControl.get_dataValue())) {
alert(LOCID_MC_OWNER_MANDATORY);

return;
}

ret.OwnerId = activityLookupControl.get_dataValue()[0].id;
ret.OwnerType = activityLookupControl.get_dataValue()[0].type;

}
if ($get("chk_queue").checked == true) {
var queueLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("QueueLookup");
if (IsNull(queueLookupControl.get_dataValue())) {
alert(LOCID_MC_QUEUE_MANDATORY);
return;
}
ret.AddToQueue = true;
ret.QueueId = queueLookupControl.get_dataValue()[0].id;
}


ret.SendEmail = ($get("SendEmail").checked);

Mscrm.Utilities.setReturnValue(ret);


var defaultErrorPrompt = window.top.Mscrm.ScriptErrorReporting.promptAndReport;

try
{
window.top.Mscrm.ScriptErrorReporting.promptAndReport = function(ev,callback) {};

closeWindow();
}
finally
{

window.top.Mscrm.ScriptErrorReporting.promptAndReport = defaultErrorPrompt;
}
}

</script>

<table width="100%" cellpadding="8">
<tr>
<td>
<label style="FONT-WEIGHT: bold"><%=GetResourceStringWithoutEncoding("MA.CampaignActivity.Dialogs.confirm_propagation.aspx_Owner",Request.QueryString["EntityTypeCode"])%></label>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<col width="26"></col>
<tr>
<td>
<input class="radio" type="radio" id="rad_1" name="radLevel1Group" editable onclick="enable();"/>
</td>
<td>
<label for="rad_1"><%=GetResourceStringWithoutEncoding("MA.CampaignActivity.Dialogs.confirm_propagation.aspx_Owner_Customer",Request.QueryString["EntityTypeCode"]) %></label>
</td>
</tr>
<tr>
<td>
<input class="radio" type="radio" id="rad_3" name="radLevel1Group" editable checked onclick="enable();"/>
</td>
<td>
<label for="rad_3"><loc:Text ResourceId="MA.CampaignActivity.Dialogs.confirm_propagation.aspx_Owner_Myself" runat="server" /></label>
</td>
</tr>
<tr>
<td>
<input class="radio" type="radio" id="rad_user_queue" name="radLevel1Group" editable
onclick="enable();"/>
</td>
<td>
<label for="rad_user_queue">
<loc:Text ResourceId="Confirm_Propagation_Dlg_Assign_Label" runat="server" /></label>
<sdk:LookupControl id="ActivityLookup" runat="server" />
</td>
</tr>
<tr>
<td>
<ui:CheckBox id="chk_queue" onclick="enable();" runat="server"/>
</td>
<td>
<label for="chk_queue">
<loc:Text ResourceId="Confirm_Propagation_Dlg_Add_to_Queue" runat="server" />
</label>

<sdk:LookupControl id="QueueLookup" runat="server" />
</td>
</tr>

</table>
<tr>
<td>
<tr valign="top">
<td>
<label class="ms-crm-Bold-Header">
<loc:Text ResourceId="Confirm_Propagation_Email_Close" runat="server" />
</label>
</td>
</tr>
<tr valign="top">
<td>
<input class="checkbox" type="checkbox" id="SendEmail" runat="server" disabled>
<label for="SendEmail">
<loc:Text ResourceId="Confirm_Propagation_Email_check" runat="server" />
</label>
</td>
</tr>
</td>
</tr>
</td>
</tr>
</table>
