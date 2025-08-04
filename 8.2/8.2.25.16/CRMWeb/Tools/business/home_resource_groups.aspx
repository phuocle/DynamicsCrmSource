<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.Tools.Business.ResourceGroupsHome" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:appheader runat="server" id="crmHeader" />
<script language="JavaScript">

Sys.Application.add_load(WindowOnLoad);
function WindowOnLoad() {
HandleBackButtonIssues(null);
}
</script>
</head>
<body class="stage">
<div class="stdTable">
<div class="ms-crm-home-querycontainer" style="height: 68px">
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col width="70%">
<col width="30%">
<tr>
<td>
<label class="ms-crm-Setting-ContextHeader-Title">
<loc:text resourceid="SM_Title_Resource_Groups" runat="server" />
</label>
</td>
<td>
<cnt:appquickfind id="crmQuickFind" runat="server" />
</td>
</tr>
</table>
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col>
<col>
<col width="80%">
<tr>
<td nowrap class="home_resource_groups_td_AppViewSelector">
<label for="crmGrid_SavedQuerySelector">
<span class="ms-crm-Bold-Header">
<loc:text resourceid="Web.Tools.business.home_resource_groups.aspx_31" runat="server" />
</span>
</label>
</td>
<td>
<cnt:appviewselector id="crmViewSelector" runat="server" />
</td>
<td align="center">
<span class="home_resource_groups_span_QuickFindSpacer">&nbsp;</span>
</td>
</tr>
</table>
</div>
<div class="ms-crm-home-menucontainer">
<mnu:appgridmenubar id="crmMenuBar" runat="server" />
</div>
<div class="ms-crm-absolutePosition" style="top: 93px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="false" />
</div>
</div>
</div>
</body>
</html>
