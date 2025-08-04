<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.ConvertDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>


<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web._grid.cmds.dlg_convert.aspx_28" runat="server"><loc:Argument runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(toObjName)%></loc:Argument></loc:Text></title>
<script language="JavaScript">



var _sAction	= "convert";

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

<% if(int.Parse(Request.QueryString["toKit"], CultureInfo.InvariantCulture) == 0)
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_convert.aspx_64" runat="server"></loc:Text>
<%
}
else
{
%>
<loc:Text ResourceId="Web._grid.cmds.dlg_convert.aspx_63" runat="server"><loc:Argument ID="Argument2" runat="server"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(fromObjName)%></loc:Argument></loc:Text>
<%
}
%>

</frm:DialogForm>

</body>
</html>
