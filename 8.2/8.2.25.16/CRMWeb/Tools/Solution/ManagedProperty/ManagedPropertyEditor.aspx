<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.ManagedProperty.ManagedPropertyPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.Solution.ManagedPropertyEditor.Title" runat="server"/></title>

<script type="text/javascript" language="javascript">

function cancel() {
var managedPropertyElement = $get("managedPropertyControl");
var managedPropertyControl = managedPropertyElement.control;
if (managedPropertyControl.isDirty()) {
if (!confirm(LOCID_FORMS_SAVE_CONFIRM_TITLE)) {
return;
}
}
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

function applychanges() {
var managedPropertyElement = $get("managedPropertyControl");
var managedPropertyControl = managedPropertyElement.control;
if (managedPropertyControl.isDirty())
{
var result = Mscrm.ManagedPropertyUtil.updateManagedProperties(managedPropertyControl.get_xmlData());
Mscrm.Utilities.setReturnValue(result);
if (result) {
closeWindow();
}
}
else
{
closeWindow();
}

}


function applydialogcss() {
var dlgbodyContainer = $get("DlgHdBodyContainer");
dlgbodyContainer.style.overflow = 'auto';
}
window.onload = applydialogcss;

</script>

</head>

<body>
<div style="display:none">
<h4 class="ms-crm-dialog"><loc:Text ResourceId="ManagedPropertyEditor.DialogBody.Text" runat="server"/></h4>
</div>

<frm:DialogForm id="crmForm" runat="server">
<cnt:AppNotifications id="errorFields" runat="server"/>
<loc:Text ResourceId="ManagedPropertyEditor.DialogBody.Text" runat="server"/>
<div id="managedPropertyControl_tr">
<cnt:ManagedPropertyControl id="managedPropertyControl" runat="server"/>
</div>
</frm:DialogForm>

</body>

</html>
