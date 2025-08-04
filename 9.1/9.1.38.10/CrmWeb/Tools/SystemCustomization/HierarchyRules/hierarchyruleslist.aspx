<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.HierarchyRules.HierarchyRulesListPage"   %>
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
Sys.Application.add_load(HierarchySettingsOnLoad);
function HierarchySettingsOnLoad()
{
var crmGrid = $find("gridHierarchyRules");
crmGrid.add_onBeforeFormLoad(Mscrm.HierarchySettingsGrid.onHierarchySettingsGridClick);


UpdateNewButtonDisplay( crmGrid );


crmGrid.add_onRefresh( function ()
{
UpdateNewButtonDisplay( crmGrid );
});
}


function UpdateNewButtonDisplay( crmGrid )
{
if ( !IsNull( crmGrid ) )
{
var btnCreateHierarchyRule = document.getElementById( 'btnCreateHierarchyRule' );

if ( !IsNull( btnCreateHierarchyRule ) )
{
if ( crmGrid.get_totalRecordCount() > 0 )
{

btnCreateHierarchyRule.style.display = "none";
btnCreateHierarchyRule.nextElementSibling.style.display = "none";
}
else if ( crmGrid.get_totalRecordCount() <= 0 )
{
btnCreateHierarchyRule.style.display = "block";
btnCreateHierarchyRule.nextElementSibling.style.display = "block";
}
}

}
}
</script>
</head>




<body>
<div class="stdTable">

<div class="ms-crm-home-menucontainer">
<crm:MenuBar id="menuBar" runat="server"/>
</div>

<div class="ms-crm-home-staticgridcontainer" style="top:26px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<app:AppGrid id="gridHierarchyRules" runat="server"/>
</div>
</div>
</div>
</body>

</html>
