<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Dialogs.RemoveItemsDialogPage"    %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>

<html>
<head>
<title><loc:Text ResourceId="Web._grid.cmds.dlg_removeitems.aspx_7" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">

var _sAction = "removeitems";
var _iObjType = <%=objType.ToString("D", CultureInfo.InvariantCulture)%>;

function applychanges()
{
_custParams += "&groupid=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["groupid"]))%>";
go();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<loc:Text ResourceId="Web._grid.cmds.dlg_removeitems.aspx_41" runat="server"/>
</frm:DialogForm>
</body>
</html>
