<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.BulkDelete.WelcomePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var objectTypeCode = "";
var viewid = "";
var viewType = "";

Sys.Application.add_load(SearchCriteriaContainerPageOnLoad);
function SearchCriteriaContainerPageOnLoad()
{
if (!WantToSkip())
{
attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
}

if (!WizardHasProperty("wizardStartTime"))
{
WizardSetProperty("wizardStartTime",_wizardStartTime);
}
}

function WizardCloseMessage(oEvent)
{
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}





function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Tools/BulkDelete/BulkDeleteWizard/SearchCriteriaContainerPage.aspx");
return new NextPageDefinition(oUrl);
}

function moveNext()
{
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}

function WantToSkip()
{
var oUrl = Mscrm.CrmUri.create(window.parent.location.search);
var wizardInput = oUrl.get_query()["WizardInput"];
if (!IsNull(wizardInput))
{
var wizardData = wizardInput.split(",");
objectTypeCode = wizardData[0];
if(wizardData.length == 3)
{
viewType = wizardData[1];
viewid = wizardData[2];
WizardSetProperty("viewid", viewid);
WizardSetProperty("viewType", viewType);
}
WizardSetProperty("objectTypeCode", objectTypeCode);
return true;
}
return false;
}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table width="100%" cellpadding=0 cellspacing=0>
<tr valign="top">
<td>
<loc:Text ResourceId="BulkDelete_Wizard_Page1_IntroText" runat="server"/>
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<loc:Text ResourceId="BulkDelete_Wizard_Page1_IntroText2" runat="server"/>
<ul style="margin-top:2px;margin-bottom:20px;margin-left:30px;margin-right:30px; list-style:disc;">
<li>
<loc:Text ResourceId="BulkDelete_Wizard_Page1_IntroText4" runat="server" />
</li>
<li>
<loc:Text ResourceId="BulkDelete_Wizard_Page1_IntroText5" runat="server" />
</li>
</ul>
</td>
</tr>
<tr valign="top">
<td>
<loc:Text ResourceId="BulkDelete_Wizard_Page1_Continue" runat="server"/>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
