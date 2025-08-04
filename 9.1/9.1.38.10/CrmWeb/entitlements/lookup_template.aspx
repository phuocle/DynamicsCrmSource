<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Entitlements.EntitlementsTemplateLookup" %>
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

function applychanges()
{
var sQueryString = "_CreateFromId=" + CrmEncodeDecode.CrmUrlEncode(_selectedItem.getAttribute('item'));
sQueryString += "&_CreateFromType=" + CrmEncodeDecode.CrmUrlEncode(EntitlementTemplate);


var oArgs = getDialogArguments();


window.setTimeout("closeWindow(true)", 5);
if (oArgs)
{
oArgs.openObj(Entitlement, false, sQueryString);
}
else
{
openObj(Entitlement, false, sQueryString);
}
}

function cancel()
{
closeWindow();
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
