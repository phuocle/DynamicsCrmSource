
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.FilterDataPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var FilterEditor;



function filterDataPage_onload()
{
initializePage();
}





function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/CRMReports/AdHocWizard/TableLayoutPage.aspx?lcid=" + CrmEncodeDecode.CrmUrlEncode(WizardGetProperty("Language")));
return new NextPageDefinition(oUrl);
}




function initializePage() {
FilterEditor = $find("filterEditor");


if (WizardHasProperty("DefaultFilter"))
{
window.setTimeout(initializeFilterEditor, 0);
}


if (WizardHasProperty("DefaultSelectedQuery"))
{
window.setTimeout(initializeSavedQuerySelector, 0);
}


document.getElementById("buttonBack").onclick = moveBack;
}




function initializeFilterEditor() {
FilterEditor.set_filterXml(WizardGetProperty("DefaultFilter"));
}



function initializeSavedQuerySelector() {

var savedQuerySelector = document.getElementById("savedQuerySelector");

if (savedQuerySelector != null)
{
savedQuerySelector.selectedIndex = WizardGetProperty("DefaultSelectedQuery");
}
}




function moveNext()
{
WizardSetProperty("DefaultFilter", FilterEditor.get_filterXml());
SaveQueryFilterValue();

WizardNavigate(_WizardNavigateEnum.NEXT);
}






function moveBack()
{
WizardSetProperty("DefaultFilter", FilterEditor.get_filterXml());
SaveQueryFilterValue();

WizardNavigate(_WizardNavigateEnum.BACK);
}




function SaveQueryFilterValue()
{
var savedQuerySelector = document.getElementById('savedQuerySelector');

if (savedQuerySelector != null)
{
WizardSetProperty("DefaultSelectedQuery", savedQuerySelector.selectedIndex.valueOf());
}
}


Sys.Application.add_load(filterDataPage_onload);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div style="position:absolute; height:100%; width:100%">
<cnt:AppFilterEditor id="filterEditor" runat="server" />
</div>
</frm:WizardForm>
</body>
</html>
