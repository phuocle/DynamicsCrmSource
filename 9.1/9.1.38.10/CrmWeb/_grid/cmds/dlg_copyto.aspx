<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.CopyToDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<script language="JavaScript">


var _sAction = "copyto";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;

function confirmMode(b)
{
Mscrm.Utilities.setReturnValue(b);
closeWindow();
}

_custParams += "&itemObjectId=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(itemObjectId))%>";

function applychanges()
{
<%=dialogActionOk%>
}

<%





if (dialogActionCancel != String.Empty)
{
%>
function cancel()
{
<%=dialogActionCancel%>
}
<%
}
%>

</script>

<loc:Text ResourceId="Web._grid.cmds.dlg_copyto.aspx_55" runat="server"><loc:Argument runat="server"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjName)%></loc:Argument></loc:Text>
