<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Grids.PrintDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Title_MultiPage_Print" runat="server"/></title>

<script type="text/javascript" language="JavaScript">


var RESULT_CANCEL = -1;
var RESULT_CURRENTPAGE = 0;
var RESULT_ALLPAGES = 1;

function applychanges()
{
if ($get("printCurrent").checked)
{
Mscrm.Utilities.setReturnValue(RESULT_CURRENTPAGE);
}
else if ($get("printAll").checked)
{
Mscrm.Utilities.setReturnValue(RESULT_ALLPAGES);
}

closeWindow();
}

function cancel()
{
Mscrm.Utilities.setReturnValue(RESULT_CANCEL)
closeWindow();
}
</script>

</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed">
<col width="20"/>
<col width="100%"/>
<tr>
<td colspan="2">
<b><loc:Text ResourceId="Instructions_MultiPage_Print" runat="server"/></b>
</td>
</tr>
<tr>
<td colspan="2">
<cnt:AppNotifications id="Notifications" runat="server"/>
</td>
</tr>
<tr style="vertical-align: top">
<td><input type="radio" name="printOptions" id="printCurrent" style="border:0px; width:20px;cursor:pointer;" checked="checked" /></td>
<td><label for="printCurrent" style="cursor:pointer; line-height:20px;"><loc:Text ID="txtPrintPage" ResourceId="Label_PrintDlg_PrintPage" runat="server"/></label></td>
</tr>
<tr style="vertical-align: top">
<td><input type="radio" name="printOptions" id="printAll" style="border:0px; width:20px;cursor:pointer;" /></td>
<td><label for="printAll" style="cursor:pointer; line-height:20px;"><loc:Text ResourceId="Label_PrintDlg_PrintAllPages" runat="server"/></label></td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
