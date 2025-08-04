<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.UIElements.FormsGridPage" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>

<style type="text/css">
li.ms-crm-VS-header-MenuItem
{
height:0px;
}
</style>
<script type="text/javascript" language="javascript">
Sys.Application.add_load(FormsOnLoad);
function FormsOnLoad() {
$find("gridForm").add_onBeforeFormLoad(Mscrm.UIElementsGrid.onFormsGridClick);
}
</script>

</head>

<body>
<div class="stdTable" style="position: relative; margin:0px 7px 0px 10px;">
<div class="ms-crm-home-querycontainer">
<table style="width: 100%" cellpadding="0" cellspacing="0">
<tr>
<td style="width: 100%"><cnt:AppViewSelector id="crmViewSelector" runat="server"/></td>
</tr>
</table>
</div>
<div class="ms-crm-home-menucontainer">
<crm:MenuBar id="menuBar" runat="server"/>
</div>
<div class="ms-crm-home-staticgridcontainer" style="bottom:10px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="gridForm"/>
</div>
</div>
</div>
</body>
</html>