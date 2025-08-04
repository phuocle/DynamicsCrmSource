<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicateDetectionJobs" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

</head>

<body class="stage">

<div style="position:relative" class="stdTable">
<div class="ms-crm-home-querycontainer" style = "height:68px">
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col width="70%"><col width="30%">
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="DataManagement.DuplicateDetectionJobs.Title" runat="server"/></label></td>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
</table>
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col><col><col width="80%">
<tr>
<td id="td1" nowrap style="padding-right:5px;"><label for="crmGrid_SavedQuerySelector"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.View_Label_70" runat="server"/></span></label></td>
<td><cnt:AppViewSelector runat="server" id="crmViewSelector"/></td>
<td align="center"><span style="margin-left:8px;width:8px;height:30px;">&nbsp;</span></td>
</tr>
</table>
</div>
<div id="notificationsRow" runat="server" style="display:none;height:25px"></div>
<div class="ms-crm-home-menucontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div id="ddGridContainer" class="ms-crm-absolutePosition" runat="server">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
</div>
</div>
</div>

</body>
</html>