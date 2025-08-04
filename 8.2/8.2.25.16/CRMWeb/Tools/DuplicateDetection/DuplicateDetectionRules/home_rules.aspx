<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetection.DuplicateDetectionRules" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<cnt:AppHeader runat="server" id="crmHeader"/>

<script type="text/javascript">

Sys.Application.add_load(homeRulesLoad);

function homeRulesLoad()
{
HandleBackButtonIssues(null);
AdjustForWindowSize();
$addHandler(window, "resize", AdjustForWindowSize);
}

function AdjustForWindowSize()
{
var gridContainer = $get("gridContainer");
var body = document.body;
var baseHeight = body.offsetHeight - gridContainer.offsetTop;
var padding = parseInt(body.style.paddingTop) + parseInt(XUI.Html.GetComputedStyle(body, "marginRight")) + parseInt(XUI.Html.GetComputedStyle(body, "marginLeft"));
var height = Math.max(baseHeight - padding, 0);
gridContainer.style.height = height + "px";
}

function OnEntityTypeChange(oSelect)
{

oGrid = $find("crmGrid");


if (IsNull(oGrid))
{
alert(LOCID_GRID_NOT_FOUND);
return;
}

oGrid.SetParameter("entitytype", Mscrm.FormControlInputBehavior.GetElementBehavior(oSelect).get_dataValue());


var findCriteria = document.getElementById("crmGrid_findCriteria");
if (findCriteria.value != "")
{
var quickFindContainer = $find("crmGrid_quickFindContainer");
quickFindContainer.NotifyExitedQuickFind();

var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");
SavedQuerySelector.set_dataValue(SavedQuerySelector.get_defaultValue());
}


handleView(XUI.Html.DomUtils.GetFirstChild($get("td5")), oGrid);
}
</script>
<body class="stage" style="padding-top:10px;">
<div class="stdTable" style="position:relative">
<div id="quickFindContainer" class="ms-crm-home-querycontainer" style = "height:68px">
<table style="width:100%;height : 50%" cellpadding="0" cellspacing="0">
<col id="Col1" style="width:70%" />
<col id="Col2" style="width:30%" />
<tr id="Row1">
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="DataManagement.ManageRulesPage.Title" runat="server"/></label></td>
<td id="tdFindCriteria" colspan="2" class="home_rules_td_FindCriteria"><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
<tr id="Row2" style="display:none;padding-bottom:5px;">
</tr>
</table>
<table style="width:100%; height : 50%" cellpadding="0" cellspacing="0">
<col id="Col8" />
<col id="Col9" />
<col id="Col10" />
<col id="Col11"/>
<col id="Col12" style="width:70%" />
<tr id="Tr1">
<td id="td2" class="home_rules_td_EntityTypeLabel"><label for="entityTypeSelector"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="Web.View_Label_ViewByEntityType" runat="server"/></span></label></td>
<td id="td3" class="home_rules_td_EntityTypeSelector"><ui:Select id="entityTypeSelector" runat="server" onchange="OnEntityTypeChange(this);"/></td>
<td id="td4" class="home_rules_td_ViewSelectorLabel"><label for="crmGrid_SavedQuerySelector"><span class="ms-crm-Bold-Header"><loc:Text ResourceId="DataManagement.ManageRulesPage.View.Label" runat="server"/></span></label></td>
<td id="td5"><cnt:AppViewSelector runat="server" id="crmViewSelector"/></td>
<td>
<span class="homepage_span">&nbsp;</span>
</td>
</tr>
<tr id="Tr2" style="display:none;padding-bottom:5px;">
</tr>
</table>
</div>
<div id="gridMenuBarContainer" class="ms-crm-home-menucontainer">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server"/>
</div>
<div id="gridContainer" class="ms-crm-absolutePosition" style="top: 94px">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false"/>
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</div>
</body>
</html>
