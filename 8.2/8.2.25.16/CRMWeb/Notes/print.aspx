<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.PrintNote" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<style>
.ms-crm-Form
{
height:100%;
}
</style>
</head>
<body>
<frm:hardcodedform id="crmForm" runat="server">
<div style="width:100%;height:100%;position:relative">
<table cellpadding="2" cellspacing="0" height="100%" width="100%" style="table-layout:fixed;">
<tr >
<td valign="top" style="padding:10px">
<table cellpadding="2" cellspacing="0" width="100%" style="table-layout:fixed;">
<col width="120"><col><col width="120">
<tr>
<td class="ms-crm-Field-Label-Print" id="subject_c"><loc:Text ResourceId="Web.Notes.edit.aspx_97" runat="server"/></td>
<cnt:AppPrintFieldControl runat='server' id='subject_d'/>
</tr>
<tr height="5px">
</tr>
<tr>
<td class="ms-crm-Field-Data-Print" colspan="2" id="notetext_d">
<sdk:TextAreaControl id="notetext" runat="server" RenderMode="Print" />
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td valign="bottom" style="padding:10px">
<table cellpadding="2" cellspacing="0" width="100%" style="table-layout:fixed;">
<col width="120"><col><col width="120">
<tr style="padding-top:10px;">
<td class="ms-crm-Field-Label-Print" id="regarding_c" nowrap><loc:Text ResourceId="Notes_Parent_Entity" runat="server"/></td>
<td><span id="crmOwnerLookup" runat="server" /></td>
</tr>
<tr style="padding-top:20px;">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" id="attachment_c" colspan="" valign="top"><loc:Text ResourceId="Web.Notes.print.aspx_30" runat="server"/></td>
</tr>
<tr>
<td class="ms-crm-Field-Label-Print" id="filename_c"><loc:Text ResourceId="Web.Notes.print.aspx_33" runat="server"/></td>
<cnt:AppPrintAttachmentControl id="filename_d" runat='server'/>
</tr>
</table>
</td>
</tr>
</table>
</div>
</frm:hardcodedform>
</body>
</html>
