<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.SocialInsight.Configuration.MslSignInPage" EnableViewState="true" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript" type="text/javascript">
        var wizardPageHandler = null;

        Sys.Application.add_load(loadMslSignInPage);


        function loadMslSignInPage() {
            wizardPageHandler = Mscrm.SocialInsights.Views.MslSignInView.run();
        }


        function GetNextPageDefinition() {
            return new NextPageDefinition(Mscrm.CrmUri.create(wizardPageHandler.get_pageToNavigateToAfterMslSignIn()));
        }


        function moveNext() {
            WizardNavigate(_WizardNavigateEnum.NEXT);
        }


        function WantToSkip() {

            return Mscrm.SocialInsights.Configuration.Views.WizardPageHandler.get_signedIn();
        }
    </script>
</head>
<body>
<frm:InlineWizardForm id="crmForm" runat="server">
    <div id="wizardStagesContainer">
        <div class="wizardStageTextContainer">
            <div class="wizardStageText">
                <div>
                    <loc:text resourceid="NetBreeze.Config.Process.ChooseTopicType" runat="server"/>
                </div>
            </div>
            <div class="wizardStageText">
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
    <div class="mslSignInDescription">
        <div id="SignInRequiredMessage" tabindex="0">
            <loc:text resourceid="ConfigureSocialInsightsWizard.MslSignInPage.SignInRequired" runat="server"/>
        </div>
        <div id="SessionExpiredSignInRequiredMessage" tabindex="0">
            <loc:text resourceid="ConfigureSocialInsightsWizard.MslSignInPage.SessionExpiredSignIn" runat="server"/>
        </div>
    </div>
    <div class="mslSignIn">
        <a id="mslSignInLink" href="#" tabindex="0">
            <loc:text resourceid="ConfigureSocialInsightsWizard.MslSignInPage.SignInNow" runat="server"/>
        </a>
    </div>
    <div class="mslSignInaddTrustedSites">
        <div id="AddToTrustedSitesMessageForIEOnly" tabindex="0">
            <loc:text resourceid="SocialInsights.SignInError.AddToTrustedSites.ForIEOnly" runat="server"/>
        </div>
    </div>
</frm:InlineWizardForm>
</body>
</html>