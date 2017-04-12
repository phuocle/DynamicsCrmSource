<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MobileOffline.MobileOfflineProvisioningv1" %>

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
<html lang="en">
<head>
    <title>
        <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Title" runat="server"/>
    </title>
    <cnt:appheader runat="server" id="crmHeader"/>
    <script language="javascript" type="text/javascript">
        var isEnabled;
        var configButtonClicked = false;
        var timerId = 0;
        var requestTypeToBeSend;

        function saveConfigSetting() {
            if (configButtonClicked === false) {
                configButtonClicked = true;
                var configButton = document.getElementById("buttonConfigure");
                var configButtonTitle = configButton.title;
                if (configButton.disabled == false) {
                    configButton.disabled = true;

                    if (configButton.hasAttribute("requestType")) {
                        requestTypeToBeSend = Number.parseInvariant(configButton.getAttribute("requestType"));
                        switch (requestTypeToBeSend) {
                        case Mscrm.MobileOfflineProvisioningHelper.RequestType.provision:
                            UpdateProvisioningStatus();
                            break;

                        case Mscrm.MobileOfflineProvisioningHelper.RequestType.deprovision:
                            Mscrm.MobileOfflineProvisioningHelper.alertForDeprovisioning();
                            break;

                        case Mscrm.MobileOfflineProvisioningHelper.RequestType.stopProvisioning:
                            Mscrm.MobileOfflineProvisioningHelper.alertForStopProvisioning();
                            break;

                        default:
                            Mscrm.CrmDebug.fail("Invalid request type set for button");
                        }
                    } else {
                        Mscrm.CrmDebug.fail("Request type attribute not found for button.");
                    }
                }
                configButtonClicked = false;
            }
        }

        function ConfigureUI() {
            var configButton = document.getElementById("buttonConfigure");
            var title = "<%= ConfigureButtonLabel %>";
            configButton.accessKey = Mscrm.Utilities.getAccessKey(title);
            configButton.innerHTML = Mscrm.Utilities.decorateAccessKey(title);
            configButton.title = title;
            configButton.disabled = "<%= DisableConfigButton %>" === "True" ? true : false;
            configButton.setAttribute("requestType", <%= RequestType %>);

            var progress = "<%= ProgressBar %>";
            var color;
            var startTimer = false;
            switch (progress) {
            case "0":
                color = "orange";
                startTimer = true;
                break;
            case "1":
                color = "red";
                break;
            case "2":
                color = "green";
                break;
            default:
            }
            document.getElementById("progressBar").className = color;
            if (startTimer == true && timerId == 0) {

                timerId = window.setInterval(GetProgressUpdate, 120000);
            }
        }

        function GetProgressUpdate() {
            $.ajax({
                type: "POST",
                url: "../MobileOffline/MobileOfflineProvisioningv1.aspx/CheckForStatusUpdate",
                data: '{isOrgDedicated: "' + "<%= OrgDedicated %>" + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: OnProgressUpdateSuccess,
            });
        }

        function OnProgressUpdateSuccess(response) {
            if (response != null && response.d != null) {
                var stopTimer = Mscrm.MobileOfflineProvisioningHelper.updateUI(response.d.toString());
                if (stopTimer == true) {
                    window.clearInterval(timerId);
                    timerId = 0;
                }
            }
        }

        function UpdateProvisioningStatus() {
            $.ajax({
                type: "POST",
                url: "../MobileOffline/MobileOfflineProvisioningv1.aspx/UpdateProvisioningStatus",
                data: '{requestType: "' + requestTypeToBeSend + '"}',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: OnSuccess,
            });
        }

        function OnSuccess(val) {
            Mscrm.MobileOfflineProvisioningHelper
                .switchMobileOfflineForOrganization(requestTypeToBeSend ==
                    Mscrm.MobileOfflineProvisioningHelper.RequestType.provision,
                    true);
        }

        function toggleUI() {
            var shouldShowDisclaimer = "<%= ShouldShowDisclaimer %>";
            if (shouldShowDisclaimer == "True") {

                ShowDisclaimer()
            } else {

                ShowConfiguration();
            }
        }


        function ShowDisclaimer() {
            $P_CRM('#disclaimerPart').css('display', 'inline');
            $P_CRM('#disclaimerTitle').css('display', 'inline');
        }


        function ShowConfiguration() {
            $P_CRM('#configPart').css('display', 'inline');
            $P_CRM('#configPart').show();
            $P_CRM('#configTitle').css('display', 'inline');
            $P_CRM('#tbConfigPart').show();
        }

        function UpdateUIAfterContinueClick() {
            $P_CRM('#disclaimerPart').css('display', 'none');
            $P_CRM('#disclaimerTitle').css('display', 'none');
            ShowConfiguration();
        }


        function progressColor() {
            var progress = "<%= ProgressBar %>";
            var color;
            switch (progress) {
            case "0":
                color = "orange";
                break;
            case "1":
                color = "red";
                break;
            case "2":
                color = "green";
                break;
            default:
            }
            document.getElementById("progressBar").className = color;
        }


        function onLoad() {
            toggleUI();
            ConfigureUI();
        }
    </script>
</head>
<body onload="onLoad();" class="bodyNew">
<div id="scrollContainer" tabindex="-1">
    <div class="mobileOfflineProvisioningTitleNew">
        <label class="ms-crm-Setting-ContextHeader-Title">
            <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Title" runat="server"/>
        </label>
    </div>
    <div class="textBlock configTitleNew">
        <div id="disclaimerTitle" class="nodisplay" tabindex="-1">
            <p>
                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Disclaimer.Title" runat="server"/>
            </p>
        </div>
        <div id="configTitle" style="display: none;" tabindex="-1">
            <p>
                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.PartTitle" runat="server"/>
            </p>
        </div>
    </div>
    <div id="disclaimerPart" class="nodisplay content">
        <p>
            <%= DisclaimerTextWhat %>
        </p>
        <div class="buttonsDiv">
            <a onclick="UpdateUIAfterContinueClick();">
                <%= RenderContinueButton() %>
            </a>
            <a onclick="window.history.back();">
                <%= RenderCancelButton() %>
            </a>
        </div>
    </div>
    <table id="tbConfigPart" style="display: none" cellspacing="0">
        <tr>
            <td style="padding: 0px;">
                <div id="configPart" class="display: none;">
                    <div class='validConfigContent' style="margin-bottom: 20px">
                        <div class="textBlock firstPara" tabindex="0">
                            <p>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Connect" runat="server"/>
                            </p>
                        </div>
                        <div class="textBlock secondPara" tabindex="0">
                            <p>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.ConnectWhy" runat="server"/>
                            </p>
                        </div>
                        <div class="textBlock noteParaNew" tabindex="0">
                            <p>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Note" runat="server"/>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="mobileOfflineConfigurationButton" class="enableDisableProvisioning">
                    <a onclick="if (!Mscrm.Utilities.resetValidationFailedElement()) { saveConfigSetting(); }; ">
                        <%= RenderConfigureButton() %>
                    </a>
                </div>
                <input type="hidden" name="sendStatus" id="sendStatus" onclick="UpdateProvisioningStatus();"/>
                <div id="progressBlock" class="<%= ShowProgressBlock ? "" : "nodisplay" %>">
                    <table style="">
                        <tr>
                            <th rowspan="2" id="progressBar">
                                <span id="statuscolor"/>
                            </th>
                            <td id="progressState" class="progresstd"><%= ProgressState %></td>

                        </tr>
                        <tr>
                            <td id="progressStatus" class="progresstd">
                                <%= ProgressStatus %>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td id="lastUpdate" class="lastUpdateString">
                                <%= LastUpdateString %>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>