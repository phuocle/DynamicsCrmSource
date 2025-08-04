<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.Dialogs.ConvertToLead" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<script language="javascript">

var _cbOpenNew = null;

Sys.Application.add_load(function () {
var topicControl = Mscrm.FormControlInputBehavior.GetBehavior("Topic");
_cbOpenNew = $get("cbOpenNew");
if (IsNull(topicControl.get_dataValue()) || topicControl.get_dataValue() == "") {
_cbOpenNew.disabled = true;
}
});


function cancel()
{
closeWindow(true);
}


function applychanges()
{

var ret = new Object();

var _FirstName = $get("FirstName");
var _LastName = $get("LastName");
var _Company = $get("Company");
var _Topic = $get("Topic");

if (IsNull(_FirstName))
{
ret.FirstName = "";
}
else
{
ret.FirstName = _FirstName.value;

}
ret.LastName = _LastName.value;
ret.Company = _Company.value;
ret.Topic = _Topic.value;
ret.SaveActivity = false;
var _cbSaveActivity = $get("cbSaveActivity");
if (!IsNull(_cbSaveActivity))
{
ret.SaveActivity = _cbSaveActivity.checked;
}
        var _emailAddress = $get("EmailAddress");

if (IsNull(_emailAddress))
{
ret.EmailAddress = "";
}
else
{
ret.EmailAddress = _emailAddress.value;

}

ret.OpenNewRecord = _cbOpenNew.checked;


Mscrm.Utilities.setReturnValue(ret);


closeWindow(true);
}
</script>

<table width="100%" cellpadding="6">
<tr class="main">
<td>

<table width="100%" cellpadding="6" style="table-layout:fixed">
<col width="15"><col>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td>
<label for="FirstName"><loc:Text ResourceId="FirstName_Label" runat="server"/></label>
</td>
<td>
<sdk:TextBoxControl id="FirstName" MaxLength="50" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td>
<label for="LastName"><loc:Text ResourceId="LastName_Label" runat="server"/></label>
</td>
<td>
<sdk:TextBoxControl id="LastName" MaxLength="50" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td >
<label for="Company"><loc:Text ResourceId="Company_Label"  runat="server"/></label>
</td>
<td>
<sdk:TextBoxControl id="Company" MaxLength="200" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td>
<label for="EmailAddress"><loc:Text ResourceId="EmailAddress_Label" runat="server"/></label>
</td>
<td>
<sdk:EmailAddressControl id="EmailAddress" MaxLength="200" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td valign=top>
<table width="100%" style="table-layout:fixed">
<tr>
<td>
<table width="100%" cellpadding="4" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td>
<input class="checkbox" type="checkbox" id="cbOpenNew" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadLead, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled")%>>
</td>
<td>
<label for="cbOpenNew"><loc:Text ResourceId="ConvertActivity_Action_OpenNewLead" runat="server"/></td>
</td>
</tr>
<tr>
<td>
<input class="checkbox" type="checkbox" id="cbSaveActivity" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.WriteActivity, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled")%>>
</td>
<td>
<label for="cbSaveActivity"><asp:Label id="closeActivity" runat="server" /></td>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
<sdk:HiddenInputControl id="Topic" runat="server"/>
