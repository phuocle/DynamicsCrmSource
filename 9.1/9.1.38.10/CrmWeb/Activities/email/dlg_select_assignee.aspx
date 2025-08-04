<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.SelectAssigneeDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>






<HTML>
<HEAD>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
.listRow
{
cursor: pointer;
padding: 3px;
}
</style>

<script language="javascript">

var _oSelected;
Sys.Application.add_load(PageOnLoad);
function PageOnLoad()
{
Mscrm.Utilities.click($get("ListTable").cells[0]);
}

function on(eventObj)
{
var o = GetListRow(eventObj.target);

if(o != _oSelected)
{
o.className = "listRow ms-crm-GlowOn";
}
}


function off(eventObj)
{
var o = GetListRow(eventObj.target);

if(o != _oSelected)
{
o.className = "listRow";
}
}


function SelectItem(o, bWasDblClick)
{
if (o != _oSelected)
{
o.className = "listRow ms-crm-SelectOn";

if (_oSelected)
{
_oSelected.className = "listRow";
}

_oSelected = o;
}
}

function GetListRow(o)
{
while (o.tagName != "TD")
{
o = o.parentNode;
}

return o;
}

function cancel( )
{
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

function applychanges()
{
Mscrm.Utilities.setReturnValue(_oSelected.objectId);
closeWindow();
}
</script>

</HEAD>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellspacing="4" cellpadding="0" width="100%" height="100%">
<tr>
<td class="dlg_select_assignee_td_List">
<div style="height: 100%; overflow-y: scroll; background-color: #FFFFFF; border: 1px solid #949E9C">
<table id="ListTable" cellspacing="4" cellpadding="0" width="100%">
<%
foreach (QueueEntry q in _queueEntries)
{
%>
<tr>
<td class="listRow"
onmouseover="on(new Sys.UI.DomEvent(event))" onmouseout="off(new Sys.UI.DomEvent(event))" onclick="SelectItem(this)" ondblclick="SelectItem(this, true)"
objectId="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(q.Id) %>" >
<img alt="" src="/_imgs/ico_16_<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(q.ObjectTypeCode) %>.gif" align="absmiddle" class="dlg_select_assignee_img_QueueItem" /><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(q.Name) %>
</td>
</tr>
<%
}
%>
</table>
</div>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</HTML>
