<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@ Page Language="C#" Inherits="Microsoft.Crm.Dialogs.TopBottomDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
function applychanges() {
Page_ClientValidate();
if (Page_IsValid) {
var retVal = $get("countTextBox").value;
Mscrm.Utilities.setReturnValue(retVal);
closeWindow();
}
else {
$get("countTextBox").focus();
}
}
function cancel() {
closeWindow();
}
</script>
</head>
<body>
<form id="form1" action="" runat="server" onsubmit="return false;" style="width:100%;height:100%">
<frm:DialogForm id="crmForm" runat="server">
<div style="margin: 14px;">
<div>
<nobr>
<asp:label id="viewLabel" AssociatedControlID="countTextBox" runat="server" style="width: 140px; vertical-align: middle;" />
<asp:TextBox id="countTextBox" maxlength="3" runat="server" style="width: 100px; vertical-align: middle;" />
</nobr>
</div>

<div style="margin-top: 10px; height: 1.5em;
<%if (isRTL) { %>
margin-right: 144px;
<% } else { %>
margin-left: 144px;
<% } %>
">
<asp:RangeValidator id="validator1" ControlToValidate="countTextBox"
runat="server" Display="Dynamic" MaximumValue="100" MinimumValue="1" Type="Integer" />
<asp:RequiredFieldValidator id="validator2" ControlToValidate="countTextBox"
runat="server" Display="Dynamic" />
</div>
</div>
</frm:DialogForm>
</form>
</body>
</html>
