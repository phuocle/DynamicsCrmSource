<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ConfirmAddInputArgumentDialog" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript">
function button_yes() {

Mscrm.Utilities.setReturnValue(true);
closeWindow();
}
function button_no() {

Mscrm.Utilities.setReturnValue(false);
closeWindow();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Workflow.Error.InputArgumentPreconditionNotMet" runat="server"/>
</frm:DialogForm>
</body>
</html>
