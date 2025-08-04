<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.GettingStarted.GettingStartedHome" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript" type="text/javascript">
$addHandler(window, 'load', PageLoad);

function PageLoad() {

if (Mscrm.Utilities.isIosDevice()) {
$get("printSection").style.display = "none";
}
}

function ChangeHomePage()
{
var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 600;
dialogOptions.width = 900;

var callbackFunction = Mscrm.Utilities.createCallbackFunctionObject("ChangeHomeCallback", this);


Xrm.Internal.openDialog(CrmUri.create("/tools/personalsettings/dialogs/personalsettings.aspx").toString(), dialogOptions, null, null, callbackFunction);
}

function ChangeHomeCallback(retValue)
{
if(retValue)
{
Mscrm.Utilities.reloadPage();
}
}

function showPrintPage()
{
openStdWin(Mscrm.CrmUri.create("/Biz/GettingStarted/PrintGettingStarted.aspx"), "PrintGettingStarted", 900,600, "scrollbars=1");
}

</script>
</head>

<body class="stage">
<div class="ms-crm-GettingStarted-TaskTreeFrame">
<table width="100%" border="0" class="ms-crm-GettingStarted-topSection">
<colgroup>
<col />
<col width="50" />
</colgroup>
<tr>
<td align="left"><div id="topSection" runat="server"></div></td>
<td align="right"><div id="printSection" runat="server"></div></td>
</tr>
</table>
</div>
</body>
</html>
