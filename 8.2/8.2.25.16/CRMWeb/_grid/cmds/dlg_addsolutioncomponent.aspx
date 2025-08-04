<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.AddSolutionComponentPage" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript">
var bLaunchGridRow = false;
$addHandler(document, 'keydown', function (event) {
if (event.keyCode == KEY_ENTER)
{
var el = event.target;


if (el.tagName == "TABLE" && el.className == "ms-crm-List-Data") {
event.preventDefault();
bLaunchGridRow = true;
return false;
}
else {
bLaunchGridRow = false;
}
}
});
function applychanges() {
var rdoYes = document.getElementById("rdoYes");
Mscrm.Utilities.setReturnValue(rdoYes.checked);

window.setTimeout(closeWindow_Timeout, 1);
}

function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

Sys.Application.add_load(function () {
var appGrid = $find("missingComponent");
appGrid.add_onBeforeFormLoad(Mscrm.Dependency.launchObject);
});

function closeWindow_Timeout() {
if (!bLaunchGridRow) {
closeWindow();
}
}
</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<div style="height: 45px;">
<b><loc:Text ResourceId="SolutionComponent.AddExisting.Dialog.Description" runat="server"/></b>
</div>
<div style="height: 60px;">
<table width="100%" height="30px" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr>
<td style="vertical-align:top">
<input tabindex="0" class="radio" type="radio" name="type" id="rdoYes" checked />
</td>
<td style="vertical-align:middle">
<label for="rdoYes" hidefocus="true">
<b><loc:Text ResourceId="SolutionComponent.AddExisting.Option.Yes.Text" runat="server"/></b>
</label>
</td>
</tr>
<tr>
<td style="vertical-align:top">
<input tabindex="0" class="radio" type="radio" name="type" id="rdoNo" />
</td>
<td style="vertical-align:middle">
<label for="rdoNo" hidefocus="true">
<b><loc:Text ResourceId="SolutionComponent.AddExisting.Option.No.Text" runat="server"/></b>
</label>
</td>
</tr>
</table>
</div>
<div style="display:<%=showGrid%>; height: 30px;">
<b><loc:Text ResourceId="SolutionComponent.AddExisting.Dialog.Title" runat="server"/></b>
</div>
<div class="ms-crm-absolutePosition" style="top: 135px; display:<%=showGrid%>;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<cnt:AppGrid id="missingComponent" runat="server"/>
</div>
</div>
</frm:DialogForm>

</body>
</html>
