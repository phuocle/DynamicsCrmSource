<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.ExportSummaryPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
function moveNext()
{
ExportSolution();
}

function ExportSolution()
{
var fileContent = "<% = exportZipContent %>";
var wrpcTokenAsQueryString = "<% = wrpcTokenAsQueryString %>";
WizardSetDialogReturnValue(new ReturnExportResult(true, WizardGetProperty("exportAsProtected"), WizardGetProperty("optionsXml"), WizardGetProperty("targetVersion"), fileContent, wrpcTokenAsQueryString));
WizardNavigate(_WizardNavigateEnum.CLOSE);
}
</script>
<style>
TH.ms-crm-Dialog-HeaderColumn
{
border-width: 1px 0px 2px 1px;
}
DIV.ms-crm-Dialog-TableMembers
{
height: 80%;
}
</style>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="ms-crm-Dialog-TableHeader" border="1" cellpadding="0" cellspacing="0"
id="tableHeaders" runat="server" />
<div class="ms-crm-Dialog-TableMembers">
<table id="FilterComponentsTable" runat="server" class="ms-crm-Dialog-TableData"
border="1" cellpadding="0" cellspacing="0">
</table>
</div>
</frm:WizardForm>
</body>
</html>
