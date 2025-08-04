<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ProductStateTransitionDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>


<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title>
<% if (Request.QueryString["stateTransitionType"] == "revise")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_revise" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "publish")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_publish" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "revert")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_revert" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "retire")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_retire" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "retirehierarchy")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_retirehierarchy" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "publishhierarchy")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_28_publishhierarchy" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text>
<% }%>

</title>
<script language="JavaScript">



var _sAction	= "productStateTransition";

function cancel()
{
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

function applychanges()
{
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<% if (Request.QueryString["stateTransitionType"] == "revise")
{
%>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(reviseDescription)%>
<script  language="JavaScript">
var bodyContainer = document.getElementById('DlgHdBodyContainer');
bodyContainer.style.top = '100px';
</script>

<% }
else if (Request.QueryString["stateTransitionType"] == "publish")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_63_publish" runat="server"></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "revert" && Request.QueryString["isProductFamily"] == "true")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_63_revise_revert" runat="server"></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "retire" &&  Request.QueryString["isProductFamily"] == "false")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_63_retire" runat="server"></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "retire" && Request.QueryString["isProductFamily"] == "true")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_63_retirehierarchy" runat="server"></loc:Text>
<% }
else if (Request.QueryString["stateTransitionType"] == "publishhierarchy")
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_productStateTransition.aspx_63_publishhierarchy" runat="server"></loc:Text>
<% }%>

</frm:DialogForm>

<script type="text/javascript" >
setTimeout(function () {
if (document.getElementById("dvEmptyTitle") != null) {
document.getElementById("dvEmptyTitle").focus();
}
}, 100);
</script>
</body>
</html>
