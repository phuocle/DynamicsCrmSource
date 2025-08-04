<%@ Page language="c#" Inherits="Microsoft.Crm.Service.SM.ResourceSpecifications.CreateGroupPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">





function applychanges() {
var returnPacket = new Object();
returnPacket.OK = true;

if ($get('Yes').checked == true) {
var groupname = $get('groupname');
if (Trim(groupname.value).length > 0)
{
returnPacket.name = Trim(groupname.value);
Mscrm.Utilities.setReturnValue(returnPacket);
closeWindow();
}
else
{
alert(LOCID_NO_GROUP_NAME);
groupname.focus();
}
}
else
{
returnPacket.name = "";
Mscrm.Utilities.setReturnValue(returnPacket);
closeWindow();
}
}




function choiceChanged() {
$get('groupname').disabled = ($get('Yes').checked == true) ? false : true;
$get('butBegin').disabled = ($get('Yes').checked == true && Trim($get('groupname').value).length == 0);
}




function cancel() {
var returnPacket = new Object();
returnPacket.OK = false;
returnPacket.name = "";
window.returnValue = returnPacket;
closeWindow();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" cellspacing="5" cellpadding="0">
<tr height="30">
<td colspan="3"><loc:Text ResourceId="Create_Resource_Group_Dialog_Question" runat="server"/></td>
</tr>
<tr height="30">
<td style="width:20px">
<input type="radio" class="radio" id="Yes" tabIndex="1" name="ExpressionType" value="1" onclick="choiceChanged();"/>
</td>
<td>
<label for="Yes"><loc:Text ResourceId="Create_Resource_Group_Dialog_Option_Yes" runat="server"/></label>
</td>
<td class="rsc_creategroup_td_GrpName">
<input type="text" id="groupname" name="groupname" tabIndex="2" maxlength="160" onkeyup="choiceChanged();" title="<loc:Text ResourceId='SM.SaveAsResourceGroup.GroupName.title' runat='server'/>"  disabled/>
</td>
</tr>
<tr height="30">
<td style="width:20px">
<input type="radio" class="radio" id="No" name="ExpressionType" tabIndex="1" value="0" onclick="choiceChanged();" checked />
</td>
<td colspan="2">
<label for="No"><loc:Text ResourceId="Create_Resource_Group_Dialog_Option_No" runat="server"/></label>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
