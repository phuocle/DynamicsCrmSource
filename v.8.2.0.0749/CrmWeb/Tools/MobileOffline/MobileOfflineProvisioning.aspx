<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.MobileOffline.MobileOfflineProvisioning" %>

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
        var saveButtonClicked = false;

        function saveButtonState() {
            isEnabled = document.getElementById("mobileOfflineEnable").checked;
        }

        function saveSettings() {

            if (saveButtonClicked === false) {
                saveButtonClicked = true;
                var requestSubmitted = Mscrm.MobileOfflineProvisioningHelper
                    .switchMobileOfflineForOrganization(isEnabled);

                if (requestSubmitted === false) {
                    saveButtonClicked = false;
                }
            }
        }

        function changeButtonState() {
            var rdoIsMobileOfflineEnabled = document.getElementById("mobileOfflineEnable");
            var rdoIsMobileOfflineDisabled = document.getElementById("mobileOfflineDisable");
            if (rdoIsMobileOfflineDisabled.checked == false && rdoIsMobileOfflineEnabled.checked == false) {
                document.getElementById("buttonSave").disabled = true;

            } else if (isEnabled == rdoIsMobileOfflineEnabled.checked) {
                document.getElementById("buttonSave").disabled = true;
            } else if (!isEnabled == rdoIsMobileOfflineDisabled.checked) {
                document.getElementById("buttonSave").disabled = true;
            } else {
                document.getElementById("buttonSave").disabled = false;
            }
        }


        function onLoad() {
            saveButtonState();
            changeButtonState();
        }
    </script>
</head>
<body onload="onLoad();">
<div id="scrollContainer" tabindex="-1">
    <div>
        <label style="font-family: 'Segoe UI Light, Segoe UI, Tahoma, Arial'; font-size: 24px; padding-left: 0px" class="ms-crm-Setting-ContextHeader-Title">
            <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Title" runat="server"/>
        </label>
    </div>
    <div class="textBlock configTitle">
        <div id="disclaimerTitle" tabindex="-1">
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
    <div id="disclaimerPart" class='content'>
        <p>
            <%= DisclaimerTextWhat %>
        </p>
        <div class="buttonsDiv">
            <a onclick="toggleControl();">
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
                        <div class="textBlock notePara" tabindex="0">
                            <p>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Note" runat="server"/>
                            </p>
                        </div>
                    </div>
                    <div>
                        <b>
                            <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.Heading" runat="server"/>
                        </b>
                    </div>
                    <div class="indent">
                        <div id="MobileOfflineEnableDiv" class="radioButtonDiv <%= HideMobileOfflineEnabledRadio ? "hide" : "" %>">
                            <input id="mobileOfflineEnable" class="MobileOfflineSelect" name="MobileOfflineSelect" <%= DisableMobileOfflineEnabledRadio ? "disabled='disabled'" : "" %> onclick="changeButtonState()" type="radio" value="0" <%= IsEnableSelected ? "checked='checked'" : "" %>/>
                            <label for="mobileOfflineEnable" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.MobileOfflineProvisioning.Config.EnableMobileOfflineTooltip' runat="server"/>">
                            <b>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.EnableMobileOffline" runat="server"/>
                            </b>
                            </label>
                        </div>
                        <div class="ms-crm-Hidden-NoBehavior" aria-describeby="mobileOfflineEnable">
                            <b>
                                <loc:Text Encoding='Html' ResourceId='Web.Tools.MobileOfflineProvisioning.Config.EnableMobileOfflineTooltip' runat="server"/>
                            </b>
                        </div>
                        <div class="radioButtonDiv">
                            <label for="mobileOfflineEnable">
                                <asp:Label id="enableStatusLabel" runat="server"/>
                            </label>
                        </div>
                    </div>
                    <div class="radioLabel indent ">
                        <div id="MobileOfflineDisableDiv" class="radioButtonDiv <%= HideMobileOfflineDisabledRadio ? "hide" : "" %>">
                            <input id="mobileOfflineDisable" class="MobileOfflineSelect" name="MobileOfflineSelect" onclick="Mscrm.MobileOfflineProvisioningHelper.alertOnDisable();changeButtonState();" <%= DisableMobileOfflineDisabledRadio ? "disabled='disabled'" : "" %> type="radio" value="1" <%= IsDisableSelected ? "checked='checked'" : "" %>/>
                            <label for="mobileOfflineDisable" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.MobileOfflineProvisioning.Config.DisableMobileOfflineTooltip' runat="server"/>">
                            <b>
                                <loc:text resourceid="Web.Tools.MobileOfflineProvisioning.Config.DisableMobileOffline" runat="server"/>
                            </b>
                            </label>
                        </div>
                        <div class="ms-crm-Hidden-NoBehavior" aria-describeby="mobileOfflineDisable">
                            <b>
                                <loc:Text Encoding='Html' ResourceId='Web.Tools.MobileOfflineProvisioning.Config.DisableMobileOfflineTooltip' runat="server"/>
                            </b>
                        </div>
                        <div class="radioButtonDiv">
                            <label for="mobileOfflineDisable">
                                <asp:Label id="disableStatusLabel" runat="server"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div id="mobileOfflineConfigurationSave" class="buttonsDiv">
                    <a onclick="if (!Mscrm.Utilities.resetValidationFailedElement()) { saveSettings(); };saveButtonState();changeButtonState();">
                        <%= RenderSaveButton() %>
                    </a>
                </div>
            </td>
        </tr>
    </table>
</div>
</body>
</html>