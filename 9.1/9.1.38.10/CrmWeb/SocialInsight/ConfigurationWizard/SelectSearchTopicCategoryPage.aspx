<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.SocialInsight.Configuration.SelectSearchTopicCategoryPage" EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var wizardPageHandler = null;

Sys.Application.add_load(selectSearchTopicCategoryPage_onload);



function selectSearchTopicCategoryPage_onload() {
wizardPageHandler = Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.run();

WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
}




function GetPreviousPageDefinition() {
return new NextPageDefinition(Mscrm.CrmUri.create("/SocialInsight/ConfigurationWizard/ChooseTopicTypePage.aspx"));
}





function GetNextPageDefinition() {


if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate() === true) {
oUrl = "/SocialInsight/ConfigurationWizard/MslSignInPage.aspx"
}
else {
var oUrl = "/SocialInsight/ConfigurationWizard/SelectVisualizationsPage.aspx";
}



return new NextPageDefinition(Mscrm.CrmUri.create(oUrl));
}




function moveNext() {
var saveSuccess = wizardPageHandler.save();
Mscrm.CrmDebug.assert(saveSuccess, "Should never get here");

WizardNavigate(_WizardNavigateEnum.NEXT);
}





function WantToSkip() {
return false;
}





function WantToSkipAndRetainBackStack() {
return Mscrm.SocialInsights.Configuration.SelectSearchTopicCategoryHandler.skip();
}
</script>
</head>
<body tabindex="0">
<div class="SocialInsightsConfiguration">
<frm:InlineWizardForm id="crmForm" runat="server">
<div id="wizardStagesContainer">
<div class="wizardStageTextContainer">
<div class="wizardStageText" >
<div>
<loc:text resourceid="NetBreeze.Config.Process.ChooseTopicType" runat="server" />
</div>
</div>
<div class="wizardStageText active" tabindex="0">
<div>
<loc:text resourceid="NetBreeze.Config.Process.SelectCreateTopic" runat="server" />
</div>
</div>
<div class="wizardStageText">
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
<div class="arrow active">
<div class="arrowtail-right"></div>
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
<div class="arrow">
<div class="arrowtail-right"></div>
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
</div>
</div>
<div class="topicCategoryPickerContainer">
<div id="errorDiv" class="errorDiv">
<div class="errorIcon">
<img src="/_imgs/SocialInsight/error_32.png" height="32px" width="32px"/>
</div>
<div id="categoryNotFoundDescription" class="description" tabindex="0">
<loc:text resourceid="NetBreeze.Config.TopicPage.SearchCategoryNotFound" runat="server" />
</div>
</div>
<div class="topicCategoryPickerInstructions" tabindex="0">
<loc:text resourceid="NetBreeze.Config.TopicCategoryPage.SelectTopicCategory" runat="server" />
</div>
<div class="topicCategoryPicker">
<input type="hidden" class="selectedCategory" value="" />
<ul class="topicCategorySelect">
</ul>
<div class="topicCategoryPreviewContainer" tabindex="0">
<span  id="topicCount" class="topicCategoryPreviewTitle">
</span>
<ul class="topicCategoryPreview">
</ul>
</div>
</div>
</div>
</frm:InlineWizardForm>
</div>
</body>
</html>

