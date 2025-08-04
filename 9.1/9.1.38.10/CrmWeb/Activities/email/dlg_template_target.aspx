<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.TemplateTargetDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Web" %>






<HTML>
<HEAD>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Dialog_BulkEmail_Template_Title" runat="server"/></title>
<style type="text/css">
.listRow
{
cursor: pointer;
padding: 3px;
}
</style>

<script language="javascript">

var _oSelected;
Sys.Application.add_load(function () {
var listTable = $get("ListTable");
Mscrm.Utilities.click(listTable.rows[1].cells[0]);
});


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

if (bWasDblClick)
applychanges();
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

function ObjectName(id, type)
{
this.oid = id;
this.otype = type;
}
function applychanges()
{
Mscrm.Utilities.setReturnValue(new ObjectName(_oSelected.getAttribute("objectId"), _oSelected.getAttribute("objectType")));
closeWindow(true);
}

</script>

</HEAD>
<body>
<frm:DialogForm id="crmForm" runat="server">
<table cellspacing="4" cellpadding="0" width="100%" height="100%">
<tr>
<td class="dlg_template_target_td_List">
<div style="position:absolute; height:100%; width:100%; top:0px; left:0px; overflow-y: auto; background-color: #FFFFFF; border: 1px solid #949E9C">
<table id="ListTable" cellspacing="4" cellpadding="0" width="100%">
<%
if (_ToEntries.Count > 0)
{
%>
<tr>
<td style="border-bottom:2px solid #949e9c"><b><loc:Text ResourceId="EE9154E4-B2BE-4FB1-91AE-9A88EE43D709" runat="server"/></b></td>
</tr>

<%
foreach (TargetEntry t in _ToEntries)
{
%>
<tr>
<td class="listRow"
onmouseover="on(new Sys.UI.DomEvent(event))" onmouseout="off(new Sys.UI.DomEvent(event))" onclick="SelectItem(this)" ondblclick="SelectItem(this, true)"
objectId="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Id) %>" objectType="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode) %>" >
<img alt="" src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.IconUtil.GetIconPath(Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode), Microsoft.Crm.IconType.GridIcon, Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>" align="absmiddle" class="dlg_template_target_img_ToItem" /><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Name) %>
</td>
</tr>
<%
}
}
%>
<%
if (_CCEntries.Count > 0)
{
%>
<tr>
<td style="border-bottom:2px solid #949e9c"><b><loc:Text ResourceId="4DE6C786-7193-4FB3-B7A4-CDD088130452" runat="server"/></b></td>
</tr>

<%
foreach (TargetEntry t in _CCEntries)
{
%>
<tr>
<td class="listRow"
onmouseover="on(new Sys.UI.DomEvent(event))" onmouseout="off(new Sys.UI.DomEvent(event))" onclick="SelectItem(this)" ondblclick="SelectItem(this, true)"
objectId="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Id) %>" objectType="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode) %>" >
<img alt="" src="/_imgs/ico_16_<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode) %>.gif" align="absmiddle" class="dlg_template_target_img_CCItem" /><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Name) %>
</td>
</tr>
<%
}
}
%>
<%
if (_RegardingEntries.Count > 0)
{
%>
<tr>
<td style="border-bottom:2px solid #949e9c"><b><loc:Text ResourceId="0A5A5BAE-8282-4EB1-99F5-C2401632A767" runat="server"/></b></td>
</tr>

<%
foreach (TargetEntry t in _RegardingEntries)
{
%>
<tr>
<td class="listRow"
onmouseover="on(new Sys.UI.DomEvent(event))" onmouseout="off(new Sys.UI.DomEvent(event))" onclick="SelectItem(this)" ondblclick="SelectItem(this, true)"
objectId="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Id) %>" objectType="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode) %>" >
<img alt="" src="/_imgs/ico_16_<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.ObjectTypeCode) %>.gif" align="absmiddle" class="dlg_template_target_img_ReItem" /><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(t.Name) %>
</td>
</tr>
<%
}
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
