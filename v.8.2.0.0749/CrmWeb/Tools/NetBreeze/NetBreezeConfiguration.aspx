<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.NetBreeze.NetBreezeConfigurationPage" %>

<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Platform.Sdk.Caching.CacheData" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
    <title>
        <loc:text resourceid="Web.Tools.NetBreeze.Config.Title" runat="server"/>
    </title>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script>
        $P_CRM(window).load(function() {
            Mscrm.SocialInsights.Provisioning.NetBreezeConfigurationHandler.run();
        });
    </script>

    <style type="text/css">
        a, a:hover, a:visited, a:link, a:active { color: #115fb7; }
    </style>
</head>
<body class="provisioning">
<div id="Disclaimer" class="content" runat="server">
    <div class="logoOffset">
        <div tabindex="0" class="title">
            <span>
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.Title" runat="server"/>
            </span>
        </div>
        <div class="claims" tabindex="0">
            <p>
                <%= NetBreezeDisclaimer %>
            </p>
        </div>

        <div class="bottomButtons">
            <button id="acceptDisclaimer" class="basic-button">
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.ContinueButton" runat="server"/>
            </button>
            <button id="close" class="basic-button">
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Disclaimer.CancelButton" runat="server"/>
            </button>
        </div>
    </div>
</div>
<div id="ProvisioningTemporaryError" class="content" runat="server">
    <div class="logoOffset">
        <div tabindex="0" class="title">
            <span>
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Title" runat="server"/>
            </span>
        </div>
        <div class="claims" tabindex="0">
            <p>
                <loc:text resourceid="Web.Tools.NetBreeze.Config.ProvisioningTemporaryError" runat="server"/>
            </p>
        </div>
    </div>
</div>
<input type="hidden" id="SocialInsightsInstance" runat="server"/>
<div id="InstanceSelection" class="content" runat="server" style="display: none;">
<div class="logoOffset">
    <div class="title" tabindex="0">
        <span>
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Title" runat="server"/>
        </span>
    </div>

    <div id="OnPremiseInstanceSelection" class="instance" runat="server">
        <div class="connect-description" tabindex="0">
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Onprem.Instance.Description" runat="server"/>
        </div>
        <ol class="onprem-description">
            <li class="configuremsl">
                <div tabindex="0">
                    <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.Step1.Title" runat="server"/>
                </div>
                <div tabindex="0">
                    <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.Step1.Description" runat="server"/>
                </div>
                <ol type="a">
                    <li tabindex="0" aria-labelledby="step1">
                        <div role="row" id="step1">
                            <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.ConfigureMSL.Step1" runat="server"/>
                        </div>
                    </li>
                    <ul class="listitem-description" tabindex="0">
                        <%
                            if (OrganizationURLs != null && OrganizationURLs.Count > 0)
                            {
                                foreach (String orgUrl in OrganizationURLs)
                                {
                        %>
                                <li class="ms-crm-Inline-Value"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(orgUrl) %></li>
                        <% }
                            }
                        %>
                    </ul>
                    <li tabindex="0" aria-labelledby="step2">
                        <label class="ms-crm-Hidden-NoBehavior" id="step2">
                            <%= ConfigureMslMicrosoftOnlineServicesPortalStepLabel %>
                        </label>
                        <div><%= ConfigureMslMicrosoftOnlineServicesPortalStep %></div>
                    </li>
                    <li tabindex="0" aria-labelledby="step3">
                        <div role="row" id="step3">
                            <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.ConfigureMSL.Step3" runat="server"/>
                        </div>
                    </li>
                    <li tabindex="0" aria-labelledby="step4">
                        <div role="row" id="step4">
                            <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.ConfigureMSL.Step4" runat="server"/>
                        </div>
                    </li>
                    <li tabindex="0" aria-labelledby="step5">
                        <div role="row" id="step5">
                            <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.ConfigureMSL.Step5" runat="server"/>
                        </div>
                    </li>
                </ol>
            </li>
            <li class="configurecrm">
                <div tabindex="0">
                    <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.Step2.Title" runat="server"/>
                </div>
                <table>
                    <tr id="allowSocialInsightsRow">
                        <td>
                            <input type="checkbox" id="ConnectMslCheckBox" runat="server" tabindex="0">
                        </td>
                        <td id="allowSocialInsightsTextColumn">
                            <label for="ConnectMslCheckBox">
                                <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.ConnectToMSL.CheckBoxLabel" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr id="enterURLTextRow">
                        <td>
                        </td>
                        <td>
                            <label for="MslUrlText">
                                <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.EnterSolutionUrl" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr id="enterURLTextBoxAndTestButtonRow">
                        <td>
                        </td>
                        <td id="enterURLTextBoxAndTestButtonColumn">
                            <input type="text" id="MslUrlText" tabindex="0" runat="server">
                            <button id="mslUrlTestButton" class="basic-button" tabindex="0">
                                <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.TestSolutionUrl" runat="server"/>
                            </button>
                        </td>
                    </tr>
                    <tr id="saveSettingsButtonRow">
                        <td>
                        </td>
                        <td>
                            <button id="mslUrlSaveButton" class="basic-button" tabindex="0">
                                <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.SaveSolutionUrl" runat="server"/>
                            </button>
                        </td>
                    </tr>
                    <tr id="errorMessagesRow">
                        <td>
                        </td>
                        <td>
                            <div id="MSLSuccessFailureMessages">
                                <div id="testMSLInstanceSuccess" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Confirmation_16.png" alt="<loc:text Encoding='HtmlAttribute' ResourceId='Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.TestSuccessMessage' runat='server' />"/>
                                    <div>
                                        <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.TestSuccessMessage" runat="server"/>
                                    </div>
                                </div>
                                <div id="saveMSLInstanceSuccess" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Confirmation_16.png" alt="<loc:text Encoding='HtmlAttribute' ResourceId='Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.SaveSuccessMessage' runat='server' />"/>
                                    <div>
                                        <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.SaveSuccessMessage" runat="server"/>
                                    </div>
                                </div>
                                <div id="testMSLInstanceFailure" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>"/>
                                    <div>
                                        <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.InstanceUnavailableMessage" runat="server"/>
                                    </div>
                                </div>
                                <div id="testMSLSignInFailure" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>"/>
                                    <div>
                                        <%= ConfigureMslSignInFailureMessage %>
                                    </div>
                                    <div id="AddToTrustedSitesMessage">
                                        <%= AddToTrustedSitesMessage %>
                                    </div>
                                </div>
                                <div id="testMSLInvalidUrlFailure" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>"/>
                                    <div>
                                        <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.InvalidUrlFailureMessage" runat="server"/>
                                    </div>
                                </div>
                                <div id="testMSLSaveToCRMFailure" style="display: none;" tabindex="0">
                                    <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>"/>
                                    <div>
                                        <loc:text resourceid="Web.Tools.NetBreeze.Config.OnPremiseInstanceSelection.SaveToCRMFailure" runat="server"/>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </li>
        </ol>
    </div>

    <div id="OnlineSolutionPicker" class="instance" runat="server">
        <div class="connect-description" tabindex="0">
            <p>
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Online.Instance.Description" runat="server"/>
            </p>
        </div>
        <label for="NetbreezeInstance" tabindex="0">
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.Select" runat="server"/>
        </label>
        <p>
            <ui:Select id="NetbreezeInstance" runat="server" tabindex="0">
            </ui:Select>
            <button id="applyInstance" class="basic-button" disabled="disabled" tabindex="0">
                <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ApplyChanges" runat="server"/>
            </button>
        </p>
        <div id="SolutionUnavailableContainer">
            <div class="solutionUnavailable" id="SolutionUnavailable" style="display: none;" runat="server" tabindex="0">
                <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Error_Title_Generic' runat='server'/>"/>
                <span class="solutionUnavailable">
                    <loc:text resourceid="Web.Tools.NetBreeze.SolutionUnavailableMessage" runat="server"/>
                </span>
            </div>
        </div>
    </div>

    <div id="resetContainer">
        <button id="resetNetbreeze" class="basic-button" tabindex="0">
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetInCRM" runat="server"/>
        </button>
        <br/>
        <span tabindex="0">
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetDescription" runat="server"/>
        </span>
        <br/>
        <div id="resetStatusMessageSucess" class="resetStatus" style="display: none;" tabindex="0">
            <img src="/_imgs/tools/Notification_Confirmation_16.png" alt="<loc:text Encoding='HtmlAttribute' ResourceId='Web.Tools.NetBreeze.Config.Instance.ResetSuccess' runat='server' />"/>
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetSuccess" runat="server"/>
        </div>
        <div id="resetStatusMessageFailure" class="resetStatus" style="display: none;" tabindex="0">
            <img src="/_imgs/tools/Notification_Error_16.png" alt="<loc:text Encoding='HtmlAttribute' ResourceId='Web.Tools.NetBreeze.Config.Instance.ResetFailure' runat='server' />"/>
            <loc:text resourceid="Web.Tools.NetBreeze.Config.Instance.ResetFailure" runat="server"/>
        </div>
    </div>
</div>
</div>
</body>
</html>