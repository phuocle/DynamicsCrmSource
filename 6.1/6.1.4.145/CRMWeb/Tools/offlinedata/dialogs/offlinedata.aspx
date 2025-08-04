<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.OfflineData.OfflineDataPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<!DOCTYPE HTML>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script type="text/javascript">

Sys.Application.add_load(OfflineDataOnLoad);
function OfflineDataOnLoad()
{
var crmGrid = $find("crmGrid");
crmGrid.add_onBeforeFormLoad(handleDblClick);
crmGrid.SetParameter("disableDblClick", "0");
var crmGridInactive = $find("crmGridInactive");
crmGridInactive.add_onBeforeFormLoad(handleDblClickInactive);
crmGridInactive.SetParameter("disableDblClick", "0");
}

function handleDblClick(sender, args)
{
var oWindowInfo = GetWindowInformation(AppOfflineFilter);
openStdDlg(Mscrm.CrmUri.create("/Tools/OfflineData/OfflineFilter.aspx?QueryId=" + CrmEncodeDecode.CrmUrlEncode(args.objectID) + "&QuerySource=userquery&QueryType=" + CrmEncodeDecode.CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior("FilterTypeSelector").get_dataValue())), top.window, oWindowInfo.Width, oWindowInfo.Height);
$find("crmGrid").Refresh();
args.breakEvent = true;
}

function handleDblClickInactive(sender, args)
{
var oWindowInfo = GetWindowInformation(AppOfflineFilter);
openStdDlg(Mscrm.CrmUri.create("/Tools/OfflineData/OfflineFilter.aspx?QueryId=" + CrmEncodeDecode.CrmUrlEncode(args.objectID) + "&QuerySource=savedquery&QueryType=" + CrmEncodeDecode.CrmUrlEncode(Mscrm.FormControlInputBehavior.GetBehavior("FilterTypeSelector").get_dataValue())), top.window, oWindowInfo.Width, oWindowInfo.Height);
$find("crmGridInactive").Refresh();
$find("crmGrid").Refresh();
args.breakEvent = true;
}

function handleFilterTypeChange()
{
var oWindowInfo = GetWindowInformation(AppOfflineFilter);

var crmGrid = $find("crmGrid");
var crmGridInactive = $find("crmGridInactive");

if (Mscrm.FormControlInputBehavior.GetBehavior("FilterTypeSelector").get_dataValue() == "outlook") {
crmGrid.SetParameter("viewid", outlookUserFiltersView);
crmGridInactive.SetParameter("viewid", outlookSystemFiltersView);
} else {
crmGrid.SetParameter("viewid", offlineUserFiltersView);
crmGridInactive.SetParameter("viewid", offlineSystemFiltersView);
}

crmGrid.Reset(Function.emptyFunction);
crmGridInactive.Reset(Function.emptyFunction);
}

function applychanges()
{
closeWindow();
}

function cancel()
{
closeWindow();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<div style="position:absolute; top:5px; bottom:5px; left:10px; right:10px">
<div style="height:22px">
<div class="ms-crm-absolutePosition" style="width:45%;<%= Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ? "right:auto" : "left:auto" %>">
<crm:Select id="FilterTypeSelector" runat="server" onchange="handleFilterTypeChange();" />
</div>
</div>
<div style="height:22px">
<div class="ms-crm-TabBar-Cell">
<cnt:AppTabBar id="crmTabBar" runat="server" />
</div>
</div>
<div class="ms-crm-absolutePosition" style="top:43px; bottom:10px">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tab0" class="ms-crm-Tab">
<div style="height: 25px; width: 100%">
<mnu:AppGridMenuBar id="crmMenuBar" runat="server" />
</div>

<div id="GridContainer" class="ms-crm-absolutePosition" style="top:35px;bottom:0px;left:11px;right:11px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGrid" />
</div>
</div>
</div>
<div id="tab1" class="ms-crm-Tab">
<div style="height: 25px; width: 100%">
<mnu:AppGridMenuBar id="crmMenuBarInactive" runat="server" />
</div>

<div id="GridContainerInactive" class="ms-crm-absolutePosition" style="top:35px;bottom:0px;left:11px;right:11px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid runat="server" id="crmGridInactive" />
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
