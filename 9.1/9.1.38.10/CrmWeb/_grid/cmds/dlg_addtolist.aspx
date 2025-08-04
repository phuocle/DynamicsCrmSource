<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.AddToListDialogPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>


<script language="JavaScript">


var _sAction = "addtolist";
var _iObjType = <%=ObjType.ToString("D", CultureInfo.InvariantCulture)%>;

$addHandler(window, "load", windowOnLoad);
function windowOnLoad()
{
<%=autoTrigger%>
}

function confirmMode(b)
{
Mscrm.Utilities.setReturnValue(b);
closeWindow();
}

function applychanges()
{
_custParams += "&itemObjectId=" + <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["itemObjectId"]))%>;
_custParams += "&itemObjectTypeCode=" + <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(Request.QueryString["itemObjectTypeCode"]))%>;


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


<loc:Text ResourceId="Web._grid.cmds.dlg_addtolist.aspx_55" runat="server"><loc:Argument runat="server"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ObjName)%></loc:Argument><loc:Argument runat="server"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(listName) %></loc:Argument></loc:Text>


