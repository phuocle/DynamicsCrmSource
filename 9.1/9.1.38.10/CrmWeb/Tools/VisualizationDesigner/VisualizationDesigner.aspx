<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.Charts.VisualizationDesigner" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ctr" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />

<script type="text/javascript" language="javascript">

var visualizationPaneControl;

Sys.Application.add_load(function () {
visualizationPaneControl = $find('crmGrid_paneControl');
visualizationPaneControl.handlePageLoad();
});

</script>

</head>

<body>
<ui:EventManager runat="server" id="crmEventManager"></ui:EventManager>
<div id="designerTable" class="stdTable" >
<div style="padding-left:9px;height:20px;padding-right:9px">
<%= SolutionTitleHtml %>
</div>
<div style="height:20px">
<div class="ms-crm-VisualizationDesigner-ViewSelectorTD">
<label id="Label1" for="visualizationDesignerViewSelector">
<loc:Text ResourceId="Web.Visualization.SystemDesigner.ViewLabel" runat="server" />
</label>
</div>
</div>
<div style="height:30px">
<div class="ms-crm-VisualizationDesigner-ViewSelectorTD" >
<ctr:ViewSelector id="visualizationDesignerViewSelector" OnChange="Mscrm.VisualizationPane.onSystemDesignerViewChange()" runat="server" />
</div>
</div>
<div class="ms-crm-absolutePosition" style="top:70px;left:9px;right:9px;">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="vizPaneCell" style="height:100%;width:100%"><cnt:VisualizationPane id="crmGrid_paneControl" runat="server" /></div>
</div>
</div>

</div>
</body>
</html>