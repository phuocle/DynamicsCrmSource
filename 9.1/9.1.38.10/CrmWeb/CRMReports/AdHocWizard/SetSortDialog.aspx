<%@ page language="c#" inherits="Microsoft.Crm.Web.Reporting.AdHocWizard.SetSortDialog" %>
<%@ register tagprefix="cnt" namespace="Microsoft.Crm.Application.Controls" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="crm" namespace="Microsoft.Crm.Application.Components.UI" assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ register tagprefix="sdk" namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ register tagprefix="loc" namespace="Microsoft.Crm.Application.Controls.Localization" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">



function applychanges()
{
Mscrm.Utilities.setReturnValue(new Array($get('rdDescend').checked, Mscrm.FormControlInputBehavior.GetBehavior('sortColumn').get_dataValue()));
closeWindow();
}




function cancel()
{
closeWindow();
}




function setSortDialog_onload()
{

var oArgs = getDialogArguments();
var sSortAttribute = oArgs.SortAttribute;
var oSortColumnSelect = new Select();
oSortColumnSelect.ID = "sortColumn";
oSortColumnSelect.Selected = sSortAttribute;
oSortColumnSelect.OnChange = "updateRadioUI();";
oSortColumnSelect.AddOption("", "");
var oaSortColumns = oArgs.SortColumns;
for (var i = 0; i < oaSortColumns.length; i++)
{
var oSortColumn = oaSortColumns[i];
oSortColumnSelect.AddOption(oSortColumn.DisplayName, oSortColumn.AttributeAlias);
}
oSortColumnSelect.AddToControl($get('sortColumnCell'));



var oDirectionRadio = (oArgs.SortDescending) ? $get('rdDescend') : $get('rdAscend');
oDirectionRadio.checked = true;


if (IsNull(sSortAttribute))
{
updateRadioUI();
}
}





function updateRadioUI()
{
var bNoColumnSelected = IsNull(Mscrm.FormControlInputBehavior.GetBehavior('sortColumn'));
$get('rdAscend').disabled = bNoColumnSelected;
$get('rdDescend').disabled = bNoColumnSelected;
}


Sys.Application.add_load(setSortDialog_onload)
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="75"><col>
<tr height="25">
<td><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_64" runat="server"/></td>
<td id="sortColumnCell" />
</tr>
<tr>
<td valign="top"></td>
<td>
<table width="100%" cellspacing="0" cellpadding="6">
<col width="20"><col>
<tr>
<td><input type="radio" class="radio" name="rdDir" id="rdAscend" /></td>
<td><label for="rdAscend"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_74" runat="server"/></label></td>
</tr>
<tr>
<td><input type="radio" class="radio" name="rdDir" id="rdDescend" /></td>
<td><label for="rdDescend"><loc:Text ResourceId="Web.Tools.ViewEditor.dialogs.SetSort.aspx_78" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
