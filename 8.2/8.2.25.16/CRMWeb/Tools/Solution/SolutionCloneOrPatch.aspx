<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionCloneOrPatch" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Mscrm" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
input,
label {
font-size: 14px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}

#txtPatchDisplayName_container {
width: 100%;
}

td {
font-size: 14px;
margin-top: 5px;
margin-bottom: 5px;

<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}

.ms-crm-Input-Container {
font-size: 14px;
width: 20px;
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}
</style>
<script type="text/javascript" language="JavaScript">
$addHandler(document, 'keydown', function (event) {
if (event.keyCode == KEY_ENTER)
{
var el = event.target;
if (el.tagName != "BUTTON")
{
applychanges();
}
}
});

function cancel() {
closeWindow();
}

function applychanges() {
var patchOrSolutionVersion = "";
if (cloneType == 'CloneAsPatch') {
patchOrSolutionVersion = document.getElementById("majorVersion").innerHTML + "." + $get("minorVersion").innerHTML + "." + $get("txtBuildVersion").value + "." + $get("txtRevisionVersion").value;
}
if (cloneType == 'CloneAsSolution') {
patchOrSolutionVersion = $get("txtMajorVersion").value + "." + $get("txtMinorVersion").value + "." + $get("buildVersion").innerHTML + "." + $get("revisionVersion").innerHTML;
}

var solutionName = "<%= CrmEncodeDecode.CrmHtmlEncode(parentSolutionName) %>";
var displayName = $get("txtPatchDisplayName").value;
Mscrm.SolutionHandler.cloneToPatchOrSolution(cloneType, solutionName, displayName, patchOrSolutionVersion, disableButton, postSave);
}

function disableButton() {
$get("butBegin").disabled = true;
$get("cmdDialogCancel").disabled = true;
$get("progressTbl").style.display = "";
$get("detailsTbl").style.display = "none";
}

function postSave(result) {
if (result) {
Mscrm.Utilities.setReturnValue(true);
closeWindow();
}
else {
$get("butBegin").disabled = false;
$get("cmdDialogCancel").disabled = false;
$get("detailsTbl").style.display = "";
$get("progressTbl").style.display = "none";
}
}

</script>

</head>
<body>
<frm:DialogForm id="crmForm" supportsdefaultdata="true" runat="server">
<div style="overflow: hidden;">
<table id="progressTbl" style="display: none; cursor: wait; height: 100%; width: 100%">
<tr>
<td style="width: 100%; text-align: center;">
<img alt="" src="/_imgs/AdvFind/progress.gif" />
<br />
<nobr>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(SpinCaption)%>
</nobr>
</td>
</tr>
</table>
<table id="detailsTbl" cellpadding="0" cellspacing="2" style="width: 90%">
<tr>
<td style="width: 50%; display: inline">
<label id="baseSolutionName" title="<%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Base_Solution_Name")) %>"><%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Base_Solution_Name")) %></label></td>
<td style="width: 50%">
<%= CrmEncodeDecode.CrmHtmlEncode(parentSolutionName) %>
</td>
</tr>
<tr>
<td style="width: 50%; display: inline">
<label id="patchDisplayName" for="txtPatchDisplayName" title="<%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Display_Name")) %>"><%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Display_Name")) %></label></td>
<td style="width: 50%">
<sdk:TextBoxControl id="txtPatchDisplayName" TabIndex="0" runat="server" />
</td>
</tr>
<tr>
<td valign="top" style="width: 50%; display: inline">
<label id="patchVersion" title="<%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Version_Number")) %>"
<% if (isCloneTypePatch) {%>
for="txtBuildVersion"
<%} else { %>
for="txtMajorVersion"
<% } %>
><%= CrmEncodeDecode.CrmHtmlEncode(CurrentResourceManager.GetString("CloneSolution_Version_Number")) %></label></td>
<td style="width: 50%">
<div id="cloneDetails">
<% if (isCloneTypePatch) {%>
<label id="majorVersion"><%=clonedPatchVersion.Major %></label>
<label id="dot1">.</label>
<label id="minorVersion"><%=clonedPatchVersion.Minor %></label>
<label id="dot2">.</label>
<sdk:TextBoxControl id="txtBuildVersion" TabIndex="0" runat="server" />
<label id="dot3">.</label>
<sdk:TextBoxControl id="txtRevisionVersion" TabIndex="0" runat="server" />
<%} else { %>
<sdk:TextBoxControl id="txtMajorVersion" TabIndex="0" runat="server" />
<label id="dot4">.</label>
<sdk:TextBoxControl id="txtMinorVersion" TabIndex="0" runat="server" />
<label id="dot5">.</label>
<label id="buildVersion"><%=clonedSolutionVersion.Build %></label>
<label id="dot6">.</label>
<label id="revisionVersion"><%=clonedSolutionVersion.Revision %></label>
<% } %>
</div>
</td>
</tr>
</table>
</div>
</frm:DialogForm>

<script type="text/javascript" >
setTimeout(function () {
if (document.getElementById("dvEmptyTitle") != null) {
document.getElementById("dvEmptyTitle").focus();
}
}, 100);
</script>
</body>
</html>
