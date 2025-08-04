<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.BusinessRules.BusinessRulesListPage"   %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE html>
<html>




<head>

<app:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript" language="javascript">
Sys.Application.add_load(FormsOnLoad);
function FormsOnLoad() {
$find("gridBusinessRules").add_onBeforeFormLoad(Mscrm.BusinessRulesGrid.onFormsGridClick);
$find("gridBusinessRules").SetParameter("disableDblClick", "<%=disableDoubleClick%>");
if (document.getElementById("crmSubmenuBarWrapper") != null) {
document.getElementById("leftNavBreadcrumbImg").src = "/_imgs/Ribbon/BusinessRule_16.png";
$("#leftNavBreadcrumbText").text("<%= submenuBarTitle %>");
}
}
</script>
<style>
#crmSubmenuBarWrapper
{
bottom: auto;
position: relative;
}

#crmSubmenuBarWrapper + .stdTable
{
position: relative;
}
</style>
</head>




<body>
<div id="crmSubmenuBarWrapper" class="ms-crm-absolutePosition" runat="server">
<mnu:AppCustomizationMenuBar id="crmSubmenuBar" runat="server" />
</div>
<div class="stdTable">

<div class="ms-crm-home-menucontainer">
<crm:MenuBar id="menuBar" runat="server"/>
</div>

<div class="ms-crm-home-staticgridcontainer" style="top:26px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<app:AppGrid id="gridBusinessRules" runat="server"/>
</div>
</div>
</div>
</body>

</html>
