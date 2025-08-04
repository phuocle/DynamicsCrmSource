<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Solution.SolutionImportProcessPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>



<head>

<cnt:appheader runat="server" id="crmHeader" />
<script type="text/javascript">

Sys.Application.add_load(function(){

<% if(Request.Form["action"]!="import")
{%>
var hasError = $get("hasError").value;
if (hasError == "true") {
top.window.FailureCallBackFromUpload();
}
else {
top.window.SuccessCallBackFromUpload();
}
<%}%>

$addHandler(window, "resize", resizeInfoContainerDiv);
resizeInfoContainerDiv();
attachWindowOnBeforeUnload(WindowOnUnLoad);
});

function WindowOnUnLoad(oEvent)
{
$removeHandler(window, "resize", resizeInfoContainerDiv);
}

function resizeInfoContainerDiv()
{
$get("infoContainerDiv").style.top = $get("notificationDiv").offsetHeight + 4 + 'px';
}

function DisplaySolutionDetailInfo() {
var solutionXML = document.getElementById('solutionimportxml');
var uri = Mscrm.CrmUri.create('/tools/solution/import/SolutionInformationPage.aspx');
var xmlObject = new Object();
xmlObject.xml = solutionXML.value;
openStdDlg(uri, xmlObject, 740, 500, false, false, null);
}

function DisplayTechnicalDetailInfo(message) {
var uri = Mscrm.CrmUri.create('/_grid/cmds/dlg_message.aspx');
var oWindowInfo = GetWindowInformation(9208);
var iDialogX = oWindowInfo.Width;
var iDialogY = oWindowInfo.Height;
var crmDialog = new Mscrm.CrmDialog(uri, message, iDialogX, iDialogY, null)
crmDialog.show();
}

function KeyDown(e, source) {
if(e.keyCode == 13 && !IsNull(source))
{
e.rawEvent.returnValue = false;
XUI.Html.DispatchDomEvent(source, XUI.Html.CreateDomEvent('click'));
}
}

function processSkipProductUpdateDependenciesChange(skipProductUpdateDependenciesCheckBox) {
$get(Mscrm.SolutionWizardController.skipProductUpdateDependencies).value = skipProductUpdateDependenciesCheckBox.checked;
top.window.changeNextButton(skipProductUpdateDependenciesCheckBox);
}

</script>
</head>




<body class="ms-crm-solution-wizard">
<div tabindex="-1" class="ms-crm-Form-Area" id="tb_processPage">
<div id="notificationDiv">
<cnt:AppNotifications id="errorFields" runat="server"/>
</div>
<div id="infoContainerDiv" style="position:absolute; bottom:5px; top:26px; width:100% ">
<div id="page_solutionInformation" class="ms-crm-section" runat="server" style="position:absolute;" >
<div class="stdTable" id="missedDependencyTable" style="display:none" runat="server">
<cnt:AppGrid id="missedDependencyGrid" runat="server"/>
</div>
<div id="solutionImportGCCDisclaimerControl" style="position:absolute; bottom:0px" runat="server"></div>
</div>
<div id="page_solutionPostImportAction" class="ms-crm-section" runat="server" />
<div id="page_process" class="ms-crm-section" runat="server" />
<div id="page_result" class="ms-crm-section" runat="server">
<!--[if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]-->
<cnt:AppGrid id="gridImportLog" runat="server" />
<!--[if IE 7]>
</div>
<![endif]-->
</div>
</div>
<div style="position:absolute; bottom:0px; height:5px" />
</div>
<input type="hidden" id="hiddenSolutionImportResult" value ="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(solutionImportResult.ToString()) %>"/>
<input type="hidden" id="solutionimportxml" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(solutionXML)%>" />
<input type="hidden" id="unmanagedRootsDetected" value="<%=unmanagedRootsDetected?"1":"0"%>" />
<input type="hidden" id="importedsolutionid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(solutionImportInformationSection.SolutionId)%>" />
<input type="hidden" id="hiddenIsManaged" value="<%=solutionImportInformationSection.IsManaged?"1":"0"%>" />
<input type="hidden" id="importAsHoldingStatus" value="<%=ImportAsHolding?"1":"0"%>" />
<input type="hidden" id="solutionUniqueName" value="<%=solutionImportInformationSection.UniqueName%>" />
<input type="hidden" id="hiddenShowActivation" value="<%=ShowActivation?"1":"0"%>" />
<input type="hidden" id="hiddenShowPostImportAction" value="<%=ShowPostImportAction?"1":"0"%>" />
<input type="hidden" id="hasError" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(hasError.ToString().ToLower())%>" />
<input type="hidden" id="skipProductUpdateDependencies" value="false" />
</body>
</html>
