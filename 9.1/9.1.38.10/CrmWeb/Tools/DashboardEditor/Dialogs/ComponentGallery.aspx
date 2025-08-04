<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DashboardEditor.ComponentGallery" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!Doctype html>
<html>
<head>
<title>
<loc:text resourceid="Web.DashboardEditor.ComponentGallery.DialogTitle" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript">

function OnLoad() {
$get("Container").style.display = "block";
Mscrm.ComponentGallery.onLoad();


if (typeof disableViewSelector != "undefined" &&
disableViewSelector === "true") {
document.getElementById("crmViewSelector").disabled = true;
}

if ((typeof ISCSR2 != "undefined") && ISCSR2) {
document.getElementById("tdViewSelectorLabel").style.display = "none";
document.getElementById("tdViewSelector").style.display = "none";
document.getElementById("tdViewSelector").parentElement.style.display = "none";
document.getElementById("tdViewSelectorLabel").parentElement.style.display = "none";
}
}

function applychanges() {
Mscrm.ComponentGallery.applyChanges();
}

function cancel() {
closeWindow();
}
Sys.Application.add_load(OnLoad);
</script>
</head>
<body>
<input type="hidden" id='componentId' name='componentId' value="" />
<frm:DialogForm id="crmForm" runat="server">
<div id="Container" style="width:100%;height:100%;">
<div style="position:relative;width:100%;height:100%">
<div class="CGSelectorTD">
<table class="stdTable CGSelectorTable" cellpadding="0" cellspacing="0" >
<tr class="CGSelectorTR">
<td nowrap="nowrap" id="tdTypeSelectorLabel">
<label for="crmTypeSelector" class="ms-crm-Bold-Header">
<loc:text resourceid="Web.DashboardEditor.ComponentGallery.TypeLabel" runat="server" />
</label>
</td>
</tr>
<tr class="CGSelectorTR">
<td id="tdTypeSelector" class="ms-crm-Dialog-Selector">
<ui:select id="crmTypeSelector" runat="server"/>
</td>
</tr>
<%if (isCsrTwo)
{ %>
<tr class="CGSelectorTR">
<td nowrap="nowrap" id="queueNameLabel">
<label for="crmQueueSelector" class="ms-crm-Bold-Header">
<loc:text resourceid="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.DisplayQueueLabel" runat="server" />
</label>
</td>
</tr>
<tr class="CGSelectorTR">
<td id="queueName" class="ms-crm-Dialog-Selector">
<ui:select id="crmQueueSelector" runat="server"/>
</td>
</tr>
<tr class="CGSelectorTR">
<td nowrap="nowrap" id="queueItemNameLabel">
<label for="crmQueueItemSelector" class="ms-crm-Bold-Header">
<loc:text resourceid="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueItemViewLabel" runat="server" />
</label>
</td>
</tr>
<tr class="CGSelectorTR">
<td id="queueItemName" class="ms-crm-Dialog-Selector">
<ui:select id="crmQueueItemSelector" runat="server"/>
</td>
</tr>
<%} %>
<tr class="CGSelectorTR">
<td nowrap="nowrap" id="tdViewSelectorLabel">
<label for="crmViewSelector" class="ms-crm-Bold-Header">
<loc:text resourceid="Web.DashboardEditor.ComponentGallery.ViewLabel" runat="server" />
</label>
</td>
</tr>
<tr class="CGSelectorTR">
<td id="tdViewSelector" class="ms-crm-Dialog-Selector">
<cnt:AppViewSelector runat="server" ShowNewSelector="false" id="crmViewSelector"/>
</td>
</tr>
<tr class="CGSelectorTR">
<td nowrap="nowrap" id="tdChartSelectorLabel">
<label for="crmChartSelector" class="ms-crm-Bold-Header">
<loc:text resourceid="Web.DashboardEditor.ComponentGallery.ChartLabel" runat="server" />
</label>
</td>
</tr>
<tr class="CGSelectorTR">
<td id="tdChartSelector" class="ms-crm-Dialog-Selector">
<cnt:VisualizationSelector runat="server" id="crmChartSelector"/>
</td>
</tr>
<tr style="height:100%">
<td>
&nbsp;
</td>
</tr>
</table>
</div>
<div class="CGChartPreviewTD ms-crm-WhiteBackground" style="margin-top:10px;">
<iframe name="previewFrame" id="previewFrame" class="CGChartPreviewFrame"
scrolling="no" frameborder=0
src="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString())%>">
</iframe>
<div id="previewLoadingDiv" style="display:none;position:absolute;top:48%;left:48%">
<img alt='' src='/_imgs/AdvFind/progress.gif' /><br/>
<loc:text resourceid="PageLoadingMessage" runat="server" />
</div>
<div id="contentDiv" style="display:none;" class="ms-crm-absolutePosition">
</div>
</div>
</div>
</div>
</frm:DialogForm>
<form name="vizForm" id="vizForm" method="post" target="previewFrame" action="">
<input type="hidden" id='vizXml' name='vizXml' value="" />
</form>
</body>
</html>
