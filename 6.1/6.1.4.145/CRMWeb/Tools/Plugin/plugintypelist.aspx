<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Plugin.PluginTypeListPage" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript" language="javascript">

function onFilterChange() {
var crmGrid = $find("crmGrid");
crmGrid.SetParameter("componentSubFilter", Mscrm.FormControlInputBehavior.GetBehavior("selectFilter").get_dataValue());
crmGrid.ResetPageNumber();
crmGrid.Refresh();
}

function showDependencyChange() {
var rows = getSelectedRow("crmGrid");
if (rows.length < 1) {
alert(window.LOCID_SELECTONE_WARN);
return false;
}
if (rows.length > 1) {
alert(window.LOCID_ONLYSELECTONE_WARN);
return false;
}

var oid = rows[0][0];
var objectType = Number.parseInvariant(rows[0][1]);
Mscrm.Dependency.launchDependencyDlg(objectType, oid);
}
</script>

</head>
<body>
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<div class="stdTable" style="position: relative; margin:0px 7px 0px 10px;">
<div class="ms-crm-home-menucontainer">
<crm:MenuBar id="menuBar" runat="server"/>
</div>
<div style="position:absolute;top:26px;left:0px;right:0px;bottom:10px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid id="crmGrid" runat="server"/>
</div>
</div>
</div>
</body>
</html>
