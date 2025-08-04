<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.ContractTemplateLookup" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">

var _noItemsMessage = LOCID_NO_ITEMS_MESSAGE;

function LoadItem()
{
if (!Mscrm.Utilities.resetValidationFailedElement()) { applychanges(); }
}
function applychanges()
{
var sQueryString = "_CreateFromId=" + _selectedItem.getAttribute('item');
sQueryString += "&_CreateFromType=" + ContractTemplate;


var oArgs = getDialogArguments();


window.setTimeout("closeWindow(true)", 5);
if (oArgs) {
var navigationMode = getNavigationMode(oArgs);
oArgs.openObj(Contract, false, sQueryString, null, navigationMode, null);
}
else
{
openObj(Contract, false, sQueryString);
}
}

function cancel()
{
closeWindow();
}

function getNavigationMode(oArgs) {
var navigationMode = Mscrm.NavigationMode.DefaultNavigationMode;
var isParentInLineDialog = oArgs.opener && oArgs.opener.inlineDialogId;

if (isParentInLineDialog && window.inlineDialogId && oArgs.opener.inlineDialogId != window.inlineDialogId) {
navigationMode = 0;
}

return navigationMode;
}
</script>
<style type="text/css">
ul.ms-crm-Dialog-List
{
white-space:nowrap;
overflow:hidden;
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="min-width:290px;min-height:190px;position:relative">
<div id="ItemList" class="ms-crm-Dialog-List ms-crm-absolutePosition">

<ui:XmlRenderer id="xmlRenderer" runat="server"/>
</div>
</div>
</frm:DialogForm>
</body>
</html>
