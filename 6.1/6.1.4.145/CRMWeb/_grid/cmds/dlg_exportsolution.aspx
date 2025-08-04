<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ExportSolutionPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<html>




<head>
</head>




<body style="padding:10px">

<table class="stdTable" cellspacing="0" cellpadding="0">
<tr height="0">
<td>
<form name="exportForm" action="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_grid/cmds/dlg_exportsolution.aspx", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>" method="post" target="_top">
<input name="command" type="hidden" value="export"/>
<input name="appSolutionId" value="<%=CurrentSolutionContext.SolutionId%>"  type="hidden"/>
</form>
</td>
</tr>
</table>
</body>
</html>
