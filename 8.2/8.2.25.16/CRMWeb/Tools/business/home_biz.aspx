<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Business.BusinessHome" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
div.stdTable
{
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
padding-top:20px;
height:auto;
}
</style>
<script type="text/javascript" language="javascript">
Sys.Application.add_load(function() {
HandleBackButtonIssues(null);
});
</script>
</head>
<body class="stage">
<div class="stdTable">
<div style="height: 68px">
<table width="100%" height = "50%" cellpadding="0" cellspacing="0">
<col width="70%"><col width="30%">
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="Web.Tools.map_xml.aspx_29" runat="server"/></label></td>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
</table>
<table width="100%" height = "50%" cellpadding="0" cellspacing="0">
<col><col><col width="80%">
<tr>
<td nowrap class="home_biz_td_AppViewSelector">
<label for="crmGrid_SavedQuerySelector">
<span class="ms-crm-Bold-Header">
<loc:text resourceid="Web.View_Label_70" runat="server" />
</span>
</label>
</td>
<td>
<cnt:appviewselector runat="server" id="crmViewSelector" />
</td>
<td>
<span class="homepage_span">&nbsp;</span>
</td>
</tr>
</table>
</div>
<div style="height: 25px">
<mnu:appgridmenubar id="crmMenuBar" runat="server" />
</div>
<div class="ms-crm-absolutePosition" style="top: 114px">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:appgrid runat="server" id="crmGrid" isgridfilteringenabled="true" />
</div>
</div>
</div>
</body>
</html>
