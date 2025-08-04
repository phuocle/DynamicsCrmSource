<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.SocialInsight.Configuration.SelectVisualizationPage" EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var pageHandler = null;
Sys.Application.add_load(selectVisualizationsPage_onload);



function selectVisualizationsPage_onload() {
WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);

pageHandler = Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.run();
}




function moveNext() {
pageHandler.saveAndClose();
}





function WantToSkip() {
return false;
}





function WantToSkipAndRetainBackStack() {
return Mscrm.SocialInsights.Configuration.Views.VisualizationsPageView.skip();
}


function completeClose(launchedFromRuntimeControl, config) {
getInlineDialogArgumentsFromWizard();
if (launchedFromRuntimeControl) {
executeDialogCloseCallback(config);
} else {
executeDialogCloseCallback(window.inlineDialogArguments.callbackFunction.content);
}

WizardNavigate(_WizardNavigateEnum.CLOSE);
}


function saveForFuture(config) {
var oUpdatedIframe = window.inlineDialogArguments.callbackFunction.content;

oUpdatedIframe.socialInsightsConfiguration = config;


executeDialogCloseCallback(oUpdatedIframe);
WizardNavigate(_WizardNavigateEnum.CLOSE);
}
</script>
</head>
<body tabindex="0">
<div class="SocialInsightsConfiguration">
<frm:InlineWizardForm id="crmForm" runat="server">
<div id="wizardStagesContainer">
<div class="wizardStageTextContainer">
<div class="wizardStageText">
<div>
<loc:text resourceid="NetBreeze.Config.Process.ChooseTopicType" runat="server" />
</div>
</div>
<div class="wizardStageText">
<div>
<loc:text resourceid="NetBreeze.Config.Process.SelectCreateTopic" runat="server" />
</div>
</div>
<div class="wizardStageText active" tabindex="0">
<div>
<loc:text resourceid="NetBreeze.Config.Process.SelectVisualization" runat="server" />
</div>
</div>
</div>
<div class="wizardStageArrowContainer">
<div class="arrow">
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
<div class="arrow">
<div class="arrowtail-right"></div>
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
<div class="arrow active">
<div class="arrowtail-right"></div>
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
</div>
</div>
<div id="socialInsightsEditorControl"></div>
</frm:InlineWizardForm>
</div>
</body>
</html>
