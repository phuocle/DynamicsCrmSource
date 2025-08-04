<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.CS.PrintArticleEditorPage" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Xml.Xsl" %>
<%@ Import Namespace="System.Xml.XPath" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<base target="_new">
<style type="text/css">
ul
{
margin-top:0px;
margin-left:28px;
padding-top:0px;
padding-left:10px;
list-style:disc;
}

</style>
</head>
<body>
<frm:HardcodedForm id="crmForm" runat="server">
<table cellspacing="0" cellpadding="0" width="100%" height="100%">
<tr>
<td style="padding:10px;padding-top:10px;">
<table width="100%" height="100%" cellspacing="4" cellpadding="0" style="table-layout: fixed;">
<col width="80"><col><col width="10"><col width="60"><col width="150">
<tr>
<td class="ms-crm-Field-Label-Print"><loc:Text ResourceId="Web.CS.articles.print.aspx_23" runat="server"/></td>
<cnt:AppPrintFieldControl runat='server' id='printtitle'/>
<td></td>
<td class="ms-crm-Field-Label-Print"><loc:Text ResourceId="Web.CS.articles.print.aspx_26" runat="server"/></td>
<cnt:AppPrintLookupFieldControl runat='server' id='printsubjectid'/>
</tr>
<tr>
<td class="ms-crm-Field-Label-Print"><loc:Text ResourceId="Web.CS.articles.print.aspx_30" runat="server"/></td>
<cnt:AppPrintFieldControl runat='server' id='printkeywords'/>
</tr>
<tr>
<td class="ms-crm-Field-Label-Print"><loc:Text ResourceId="Web.CS.articles.print.aspx_34" runat="server"/></td>
</tr>
<tr height="100%">
<td colspan="5">
<ui:XmlRenderer id="xmlRenderer" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>

</table>

</frm:HardcodedForm>

</body>
</html>
