<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Views.EditQueryHintDialog"   %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script language="javascript">

var _queryHintSeperator = ",";

Sys.Application.add_load(editQueryHintPageOnLoad);

function editQueryHintPageOnLoad()
{
var queryHintStr = getDialogArguments();
if(!isNullOrEmptyString(queryHintStr))
{
var queryHintColl = queryHintStr.split(_queryHintSeperator);
var oChkBox = null;

for (i = 0; i < queryHintColl.length; i++)
{
oChkBox = $get(queryHintColl[i].trim());

if(!IsNull(oChkBox))
{
oChkBox.checked = true;
}
}
}
}

function applychanges()
{
var queryHintColl = [];

for (var i = 0; i < _queryHintNames.length; i++)
{
if($get(_queryHintNames[i]).checked)
{
queryHintColl.push(_queryHintNames[i]);
}
}

Mscrm.Utilities.setReturnValue(queryHintColl.join(_queryHintSeperator));

closeWindow();
}

function cancel()
{
closeWindow();
}

function showQueryHintHelp()
{
safeWindowOpen("https://go.microsoft.com/fwlink/?linkid=2062910", "queryHinthelp", "status=yes,menubar=yes,scrollbars=yes,resizable=yes,toolbar=yes", null);
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server"></frm:DialogForm>
</body>
</html>
