<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.SocialInsight.Configuration.SelectSearchTopicPage" EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var wizardPageHandler = null;

        Sys.Application.add_load(selectSearchTopicPage_onload);


        function selectSearchTopicPage_onload() {
            WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);

            wizardPageHandler = Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.run();
        }


        function GetPreviousPageDefinition() {
            return new NextPageDefinition(Mscrm.CrmUri
                .create("/SocialInsight/ConfigurationWizard/ChooseTopicTypePage.aspx"));
        }


        function GetNextPageDefinition() {

            if (Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signInAutoNavigate() === true) {
                oUrl = "/SocialInsight/ConfigurationWizard/MslSignInPage.aspx"
            } else {
                var oUrl = "/SocialInsight/ConfigurationWizard/SelectVisualizationsPage.aspx";
            }


            return new NextPageDefinition(Mscrm.CrmUri.create(oUrl));
        }


        function moveNext() {
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function WantToSkip() {
            return false;
        }


        function WantToSkipAndRetainBackStack() {
            return Mscrm.SocialInsights.Configuration.Views.SearchTopicPageView.skip();
        }
    </script>
</head>
<body tabindex="0">
<div class="SocialInsightsConfiguration selectCreatePage">
    <frm:InlineWizardForm id="crmForm" runat="server">
        <div id="wizardStagesContainer">
            <div class="wizardStageTextContainer">
                <div class="wizardStageText">
                    <div>
                        <loc:text resourceid="NetBreeze.Config.Process.ChooseTopicType" runat="server"/>
                    </div>
                </div>
                <div class="wizardStageText active" tabindex="0">
                    <div>
                        <loc:text resourceid="NetBreeze.Config.Process.SelectCreateTopic" runat="server"/>
                    </div>
                </div>
                <div class="wizardStageText">
                    <div>
                        <loc:text resourceid="NetBreeze.Config.Process.SelectVisualization" runat="server"/>
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
        <div id="sectionsContainer" style="display: none;">
            <div id="radio" class="selectCreateRadio">
                <label class="selectATopicLabel">
                    <input type="radio" id="selectATopic" name="radio" checked disabled/>
                    <loc:text resourceid="NetBreeze.Config.TopicPage.SelectATopic" runat="server"/>
                </label>
                <label class="createNewTopicLabel">
                    <input type="radio" id="createNewTopic" name="radio" disabled/>
                    <div id="createLabel" style="display: none;">
                        <loc:text resourceid="NetBreeze.Config.TopicPage.CreateATopic" runat="server"/>
                    </div>
                    <div id="editLabel" style="display: none;">
                        <loc:text resourceid="NetBreeze.Config.TopicPage.EditATopic" runat="server"/>
                    </div>
                </label>
            </div>
            <div id="errorDiv" class="errorDiv">
                <div class="errorIcon">
                    <img src="/_imgs/SocialInsight/error_32.png" height="32px" width="32px"/>
                </div>
                <div id="topicTooBroadDescription" class="description">
                    <loc:text resourceid="NetBreeze.Config.TopicPage.TopicTooBroad" runat="server"/>
                </div>
                <div id="searchItemNotFoundDescription" class="description">
                    <loc:text resourceid="NetBreeze.Config.TopicPage.SearchItemNotFound" runat="server"/>
                </div>
            </div>
            <div id="selectATopicSection">
                <div id="topicsList">
                    <div class="searchTopicTableHeader">
                        <loc:text resourceid="ConfigureSocialInsightsWizard.TopicListTitle" runat="server"/>
                    </div>
                    <div class="searchTopicHeader">
                        <div class="searchTopicNameHeader">
                            <loc:text resourceid="ConfigureSocialInsightsWizard.TopicListName" runat="server"/>
                        </div>
                        <div class="searchTopicKeywordsHeader">
                            <loc:text resourceid="ConfigureSocialInsightsWizard.TopicListKeywords" runat="server"/>
                        </div>
                    </div>
                    <div class='searchTopicItemsList'></div>
                </div>
            </div>
            <div id="createNewTopicSection" class="createNewTopicSection" style="display: none;">
                <div id="edit" class="edit" style="display: none;">
                    <div id="row1" class="row">
                        <div id="name" class="name">
                            <label>
                                <p class="title">
                                    <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicName" runat="server"/>
                                    <img src="/_imgs/frm_required.gif" alt="Required"/>
                                </p>
                                <input type="text" id="nameInput" class="nameInput"/>
                            </label>
                        </div>
                        <div it="category" class="category">
                            <label>
                                <p class="title">
                                    <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicCategory" runat="server"/>
                                    <img src="/_imgs/frm_required.gif" alt="Required"/>
                                </p>
                                <select id="categorySelect" class="categorySelect">
                                </select>
                            </label>
                        </div>
                    </div>
                    <div id="row2" class="row">
                        <div id="keywords" class="keywords">
                            <label>
                                <p class="title">
                                    <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicKeywords" runat="server"/>
                                    <img src="/_imgs/frm_required.gif" alt="Required"/>
                                </p>
                                <input type="text" id="keywordsInput" class="keywordsInput"/>
                            </label>
                            <p class="example">
                                <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicExample" runat="server"/>
                            </p>
                        </div>
                    </div>
                    <div id="row3" class="row">
                        <div id="inclusions" class="inclusions">
                            <label>
                                <p class="title">
                                    <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicInclusions" runat="server"/>
                                </p>
                                <input type="text" id="inclusionsInput" class="inclusionsInput"/>
                            </label>
                            <p class="example">
                                <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicInclusions.Example" runat="server"/>
                            </p>
                        </div>
                        <div id="exclusions" class="exclusions">
                            <label>
                                <p class="title">
                                    <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicExclusions" runat="server"/>
                                </p>
                                <input type="text" id="exclusionsInput" class="exclusionsInput"/>
                            </label>
                            <p class="example">
                                <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicExclusions.Example" runat="server"/>
                            </p>
                        </div>
                    </div>
                    <div id="row4" class="row">
                        <div id="channelsField" class="channelsField">
                            <p class="title">
                                <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicChannels" runat="server"/>
                            </p>
                            <div class="field"></div>
                        </div>
                        <div id="languagesField" class="languagesField">
                            <p class="title">
                                <loc:text resourceid="NetBreeze.Config.TopicPage.CreateTopicLanguages" runat="server"/>
                            </p>
                            <div class="field"></div>
                        </div>
                    </div>
                    <div id="advancedEdit" class="row advancedEdit" style="display: none;" tabindex="0">
                        <%= AdvancedSetupLink %>
                    </div>
                </div>
                <div id="quickSetupUnavailable" class="quickSetupUnavailable" style="display: none" tabindex="0">
                    <%= QuickSetupUnavailableLink %>
                </div>
            </div>
        </div>
    </frm:InlineWizardForm>
</div>
</body>
</html>