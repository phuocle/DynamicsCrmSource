<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.BusinessUnitPage" EnableViewState="true" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
Sys.Application.add_load(businessUnitPage_onload);



function businessUnitPage_onload()
{
if (WizardHasProperty("BusinessUnit"))
{
Mscrm.FormControlInputBehavior.GetBehavior('businessUnit').set_dataValue(WizardGetProperty("BusinessUnit"));
}
}





function GetNextPageDefinition()
{
var oUrl = "/Biz/Users/AddUsers/SecurityRolesPage.aspx?unit=" + CrmEncodeDecode.CrmUrlEncode(WizardGetProperty("BusinessUnit"));

if (IS_OSDP) {
oUrl = "/Biz/Users/AddUsers/AddMicrosoftOnlineUserPage.aspx";
}

return new NextPageDefinition(Mscrm.CrmUri.create(oUrl));
}




function moveNext()
{

savePage();

WizardNavigate(_WizardNavigateEnum.NEXT);
}




function savePage()
{
WizardSetProperty("BusinessUnit", Mscrm.FormControlInputBehavior.GetBehavior('businessUnit').get_dataValue());
}





function WantToSkip() {
if (IS_OSDP) {
return true;
}



var bSingleBusinessUnit = (document.getElementById("businessUnit").options.length == 1);



if (bSingleBusinessUnit)
{
savePage();
}

return bSingleBusinessUnit;
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="ms-crm-AddUsers-SingleSelect">
<col width="150" /><col />
<tr>
<frm:FormCell runat="server" LabelResourceId="AddUsersWizard.BusinessUnitPage.BusinessUnit" ShowLabel="True" RequiredLevel="Required"><ui:Select id="businessUnit" runat="server" /></frm:FormCell>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
