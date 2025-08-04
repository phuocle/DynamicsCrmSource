<!DOCTYPE html>

<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.OverrideDynamicPropertyDialogPage"
CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title>
<% if (Request.QueryString["action"] == "override")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_overrideDynamicProperty.aspx_28_override"
runat="server">
<loc:Argument runat="server">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%>
</loc:Argument>
</loc:Text>
<% }
else if (Request.QueryString["action"] == "overwrite")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_overrideDynamicProperty.aspx_28_overwrite"
runat="server">
<loc:Argument runat="server">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%>
</loc:Argument>
</loc:Text>
<% } %>
</title>
<script language="JavaScript">



function cancel() {
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

function applychanges() {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<% if (Request.QueryString["action"] == "override")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_overrideDynamicProperty.aspx_63_override"
runat="server">
</loc:Text>
<% }
else if (Request.QueryString["action"] == "overwrite")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_overrideDynamicProperty.aspx_63_overwrite"
runat="server">
</loc:Text>
<% } %>
</frm:DialogForm>
</body>
</html>
