<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.SocialInsight.Configuration.ChooseTopicTypePage" EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">
var wizardPageHandler = null;

Sys.Application.add_load(loadChooseTopicTypePage);




function loadChooseTopicTypePage() {
wizardPageHandler = Mscrm.SocialInsights.Views.ChooseTopicTypeView.run();


$(document).ready(function () {
if ($.browser.msie && $.browser.version == "8.0") {
$img = $("#radio img.ui-button-icon-primary");
$img.click(function (e) {
$("#" + $(this).closest("label").attr("for"))
.click()
.change();
});
}
});
}





function GetNextPageDefinition() {
var oUrl;


if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate() === true) {
oUrl = "/SocialInsight/ConfigurationWizard/MslSignInPage.aspx"
}
else {
var topicType = $P_CRM('#radio :radio:checked').attr('id');
oUrl = "/SocialInsight/ConfigurationWizard/SelectSearchTopicPage.aspx";

if (topicType == 'socialInsightTopicCategory') {
oUrl = "/SocialInsight/ConfigurationWizard/SelectSearchTopicCategoryPage.aspx";
}
}

return new NextPageDefinition(Mscrm.CrmUri.create(oUrl));
}




function moveNext() {
wizardPageHandler.save();

WizardNavigate(_WizardNavigateEnum.NEXT);
}





function WantToSkip() {
return false;
}





function WantToSkipAndRetainBackStack() {

if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate() === true) {
return false;
}

return Mscrm.SocialInsights.Views.ChooseTopicTypeView.skip();
}
</script>
</head>
<body tabindex="0">
<frm:InlineWizardForm id="crmForm" runat="server">
<div id="wizardStagesContainer">
<div class="wizardStageTextContainer">
<div class="wizardStageText active" tabindex="0">
<div>
<loc:text resourceid="NetBreeze.Config.Process.ChooseTopicType" runat="server" />
</div>
</div>
<div class="wizardStageText">
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
<div class="arrow active">
<div class="arrowhead-right"></div>
<div class="arrowbody"></div>
</div>
<div class="arrow">
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
<div class="chooseTopicTypeDescription" tabindex="0">
<loc:text resourceid="ConfigureSocialInsightsWizard.ChooseTopicTypePage.Description" runat="server" />
</div>
<div id="radio" class="ui-buttonset">
<input type="radio" id="socialInsightTopic" name="radio" class="ui-helper-hidden-accessible">
<label for="socialInsightTopic" class="topicLabel ui-button ui-widget ui-state-default ui-corner-left ui-button-text-icon-primary ui-state-active ui-state-focus" aria-pressed="true" role="button" aria-disabled="false">
<img class="ui-button-icon-primary ui-icon" />
<span class="ui-button-text"><loc:text resourceid="NetBreeze.Config.ChooseTopicPage.Topic" runat="server" /></span>
</label>

<input type="radio" id="socialInsightTopicCategory" name="radio" class="ui-helper-hidden-accessible">
<label for="socialInsightTopicCategory" class="categoryLabel ui-button ui-widget ui-state-default ui-corner-right ui-button-text-icon-primary" aria-pressed="false" role="button" aria-disabled="false">
<img class="ui-button-icon-primary ui-icon" />
<span class="ui-button-text"><loc:text resourceid="NetBreeze.Config.ChooseTopicPage.TopicCategory" runat="server" /></span>
</label>
</div>
</frm:InlineWizardForm>
</body>
</html>
