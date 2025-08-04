<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FormsOrder" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript">
var formsOrder_listEditComponent;

function OnLoad() {
formsOrder_listEditComponent = $find('formsOrder');
Mscrm.FormsOrder.onLoadFormsOrderPage();
var addButton = $get("formsOrder_btnAddValue");
var removeButton = $get("formsOrder_btnRemoveValue");
if (!IsNull(addButton) && !IsNull(removeButton)) {
addButton.style.display = "none";
removeButton.style.display = "none";
}
}
function applychanges() {
var returnValue = Mscrm.FormsOrder.onOkPress(formsOrder_listEditComponent.get_xmlData());
Mscrm.Utilities.setReturnValue(returnValue);
closeWindow();
}
function cancel() {
closeWindow();
}
function addValueInFormControl(name,id) {
formsOrder_listEditComponent.addValue(name, id);
}
Sys.Application.add_load(OnLoad);
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="margin-top: 5px;">
<cnt:FormsOrderList id="formsOrder" runat="server" />
</div>
</frm:DialogForm>
</body>
</html>
