<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Dependency.DependencyViewDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="JavaScript">
var bLaunchGridRow = false;
$addHandler(document, 'keydown', function (event) {
if (event.keyCode == KEY_ENTER)
{
var el = event.target;


if (el.tagName == "TABLE" && el.className == "ms-crm-List-Data") {
event.returnValue = false;
bLaunchGridRow = true;
return false;
}
}
else {
bLaunchGridRow = false;
}
});

Sys.Application.add_load(PageOnLoad);
function PageOnLoad() {
$find("requiredComponentGrid").add_onBeforeFormLoad(Mscrm.Dependency.launchObject);
$find("dependentComponentGrid").add_onBeforeFormLoad(Mscrm.Dependency.launchObject);
$find("dependenciesForDeleteGrid").add_onBeforeFormLoad(Mscrm.Dependency.launchObject);

var errorFields = $get("errorFields");
if (!IsNull(errorFields)) {
$get("dependenciesForUninstallGridContainer").style.top = errorFields.offsetHeight + "px";
}

if (Mscrm.Utilities.isIE7OrIE7CompactMode()) {
$get("divWarning").style.right = "20px";
}

if (LOCID_UI_DIR == "RTL" && Mscrm.Utilities.isChrome()) {
divWarning.style.left = "20px";
}
};

function cancel() {
applychanges();
}

function applychanges() {

window.setTimeout(closeWindow_Timeout, 1);
}

function closeWindow_Timeout(){
if (!bLaunchGridRow) {
closeWindow();
}
}

</script>
<style type="text/css">
DIV.textOuterContainer
{
padding-top: 5px;
padding-bottom: 5px;
}
DIV.gridOuterContainer
{
<% if (Microsoft.Crm.Application.Utility.Util.IsWebClientVisualRefreshFeatureAvailable(null))
{ %>
height: 330px;
<%} else  {%>
height: 190px;
<%} %>
width: 100%;
padding-top: 5px;
padding-bottom: 5px;
}
</style>
</head>
<body scroll="no">
<frm:DialogForm id="crmForm" supportsdefaultdata="true" runat="server">
<div id="div_dependencyContent" style="width:100%; display:<%=showDependencyDisplay%>">



<div class="textOuterContainer">
<loc:Text ResourceId="Dependency_Label_DependentComponents" runat="server" />
</div>
<div class="textOuterContainer">
<loc:Text ResourceId="Dependency_Text_DependentComponents" runat="server" />
</div>
<div class="gridOuterContainer">
<cnt:AppGrid id="dependentComponentGrid" runat="server"/>
</div>





<div class="textOuterContainer">
<loc:Text ResourceId="Dependency_Label_RequiredComponents" runat="server" />
</div>
<div class="textOuterContainer">
<loc:Text ResourceId="Dependency_Text_RequiredComponents" runat="server" />
</div>
<div class="gridOuterContainer">
<cnt:AppGrid id="requiredComponentGrid" runat="server"/>
</div>
</div>
<div class="ms-crm-absolutePosition" style="display:<%=dependenciesForDeleteDisplay%>">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container" style="min-height:200px; padding-bottom:5px;">
<cnt:AppGrid id="dependenciesForDeleteGrid" runat="server"/>
</div>
</div>
<div class="ms-crm-absolutePosition" style="min-height:200px; display:<%=uninstallRequiredSolutionDisplay%>">
<div id="notificationsContainer">
<cnt:AppNotifications id="errorFields" runat="server"/>
</div>
<div id="dependenciesForUninstallGridContainer" class="ms-crm-absolutePosition">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container" style="padding-bottom: 5px;">
<cnt:AppGrid id="dependenciesForUninstallGrid" runat="server"/>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
