<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.Business.AsyncOperationPage"  %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

<style type="text/css">
.gridMenuBar
{
top: 69px;
height: 20px;
position: absolute;
width: 100%;
}
.tableContainer
{
height: 41px;
position: absolute;
top: 28px;
width: 100%;
}
</style>
<script language="javascript" type="text/javascript">

function onFilterTypeChange()
{
oGrid = $find("crmGrid");


if (IsNull(oGrid))
{
alert(LOCID_GRID_NOT_FOUND);
return;
}

var entityCtrl = Mscrm.FormControlInputBehavior.GetBehavior("crmEntityTypeSelector");
if (!IsNull(entityCtrl))
{
oGrid.SetParameter("entitytype", entityCtrl.get_dataValue());
}
handleAdditionalFilter(oGrid);
}
</script>

</head>

<body class="stage">

<div style="height:100%; width:100%" class="stdTable">
<div id="StageTitle" runat="server" style="height: 34px; top: 0px;">
<table width="100%" height="50%" cellpadding="0" cellspacing="0">
<col width="70%"><col width="30%">
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="Homepage_SystemJobs" runat="server"/></label></td>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
</table>
</div>
<div class="tableContainer">
<table style="width:100%; height:100%; table-layout:fixed;" cellpadding="0" cellspacing="0">
<colgroup>
<col style="width:3%;" /><col style="width:10%;" /><col style="width:3%;" /><col style="width:10%;" /><col style="width:74%;" />
</colgroup>
<tbody>
<tr id="Row1" style="padding-bottom:5px;">
<td id="tdEntitySelectorLabel" class="home_asyncoperation_td_EntitySelectorLabel">
<label for="crmEntityTypeSelector">
<span class="ms-crm-Bold-Header">
<loc:Text ResourceId="SystemTask.Label_ViewByEntityType" runat="server"/>
</span>
</label>
</td>
<td id="tdEntitySelector" class="home_asyncoperation_td_EntitySelector">
<ui:Select id="crmEntityTypeSelector" runat="server" onchange="onFilterTypeChange()"/>
</td>
<td id="tdViewSelectorLabel" class="home_asyncoperation_td_TeamSelectLabel">
<label for="crmGrid_SavedQuerySelector">
<span class="ms-crm-Bold-Header">
<loc:Text ResourceId="Web.Tools.business.home_team.aspx_86" runat="server"/>
</span>
</label>
</td>
<td id="tdViewSelector">
<cnt:AppViewSelector id="crmViewSelector" runat="server"/>
</td>
<td align="center"><span class="homepage_span">&nbsp;</span></td>
</tr>
</tbody>
</table>
</div>
<div class="gridMenuBar">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-absolutePosition" style="top: 94px;">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="true"/>
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</div>
</body>
</html>
