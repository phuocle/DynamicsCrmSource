<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.PackageSelectionPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
$addHandler(window, "load", PageOnLoad);
function PageOnLoad()
{
if(WizardHasProperty("exportAsProtected"))
{
document.getElementById("rdo_id_exportAsProtected").checked = WizardGetProperty("exportAsProtected");
}

}

var exportAsEnabled = <%=exportAsEnabled.ToString().ToLower() %>;
function GetNextPageDefinition()
{
var uri = Mscrm.CrmUri.create('/Tools/Solution/ExportWizard/TargetVersionSelectionPage.aspx');
return new NextPageDefinition(uri);
}

function WantToSkip()
{
if(WizardHasProperty("isDefaultSolution") && WizardGetProperty("isDefaultSolution"))
{
WizardSetProperty("exportAsProtected", false);
return true;
}
return false;
}

function moveNext()
{
var solutionId = document.getElementById("appSolutionId").value;
var rdo_id_exportAsProtected = $get("rdo_id_exportAsProtected");
WizardSetProperty("exportAsProtected", rdo_id_exportAsProtected.checked);
optionsXml = WizardGetProperty("optionsXml");
if (!exportAsEnabled)
{
ExportSolution();
}
else
{
WizardNavigate(_WizardNavigateEnum.NEXT);
}
}

function ExportSolution()
{
WizardSetDialogReturnValue(new ReturnExportResult(true, WizardGetProperty("exportAsProtected"), WizardGetProperty("optionsXml")));
$removeHandler(window, "load", PageOnLoad);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="ms-crm-layouttable" cellpadding="0" cellspacing="0">
<col width="20">
<col>
<tbody>
<tr valign="top">
<td>
<input type="radio" class="ms-crm-RadioButton" name="rad" id="rdo_id_exportAsUnprotected"
checked runat='server' />
</td>
<td>
<label for="rdo_id_exportAsUnprotected" class="ms-crm-bold">
<loc:Text ResourceId='ExportSolutionWizard.ExportPage.Radio.Unprotected.Text' runat='server' />
</label>
</td>
</tr>
<tr valign="top">
<td>
</td>
<td>
<loc:Text ResourceId='ExportSolutionWizard.ExportPage.Info.Unprotected.Text' runat='server' />
</td>
</tr>
<tr height="10">
<td>
</td>
<td>
</td>
</tr>
<tr valign="top">
<td>
<input type="radio" class="ms-crm-RadioButton" name="rad" id="rdo_id_exportAsProtected"
runat='server' />
</td>
<td>
<label for="rdo_id_exportAsProtected" class="ms-crm-bold">
<loc:Text ResourceId='ExportSolutionWizard.ExportPage.Radio.Protected.Text' runat='server' />
</label>
</td>
</tr>
<tr valign="top">
<td>
</td>
<td>
<loc:Text ResourceId='ExportSolutionWizard.ExportPage.Info.Protected.Text' runat='server' />
</td>
</tr>
<tr height="50">
<td />
<td>
&nbsp
</td>
</tr>
<tr>
<td>
</td>
<td>
<loc:Text ResourceId='ExportSolutionWizard.PackageSelection.Help.Text' runat='server' />
</td>
</tr>
</tbody>
<input type="hidden" name="appSolutionId" id="appSolutionId" value="<%=solutionId%>" />
</table>
</frm:WizardForm>
</body>
</html>
