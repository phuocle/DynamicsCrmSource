<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.EmailRouterMigration.MainWizardPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cui" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script language="Javascript" type="text/javascript">

        var cancelClicked = false;
        var profileSelectionPageVisible = false;
        var summaryPageVisible = false;
        var migrationInProcess = false;

        function OnBeforeWindowUnload(oEvent) {
            RemoveEventListenersFromFileControls();
            oEvent = oEvent.rawEvent;
            if (WizardGetProperty("fileBeingProcessed") == true) {
                oEvent.returnValue = LOCID_FILE_PROCESS_IN_PROGRESS;
                return LOCID_FILE_PROCESS_IN_PROGRESS;
            } else if (cancelClicked) {
                return " ";
            } else {
                oEvent.returnValue = " ";
                return " ";
            }
        }

        function OnCancelClicked() {
            if ((WizardGetProperty("migrationProcessCompleted") == false) &&
            ((profileSelectionPageVisible || summaryPageVisible || migrationInProcess) &&
                !confirm(LOCID_CONFIRM_CANCEL_MIGRATION))) {
                return;
            }
            RemoveEventListenersFromFileControls();
            cancelClicked = true;
            detachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            WizardNavigate(_WizardNavigateEnum.CANCEL);
        }

        function moveNext() {

            if (summaryPageVisible) {
                migrationInProcess = true;

                StartMigrationProcess();
                return;
            } else if (profileSelectionPageVisible) {
                summaryPageVisible = true;
                ShowSummaryPage();
                return;
            } else {
                var frameContentDoc = document.getElementById("processFileFrame").contentWindow.document;
                var arr = frameContentDoc.getElementsByName("processFileName");
                var totalFileCount = 0;
                var fileNotSupported = false;
                var fileBitMapper = 0;
                var EncryptionFileBitLocation = 0x1;
                var SystemStateFileBitLocation = 0x2;
                var EmailAgentFileBitLocation = 0x4;
                for (var idx = 0; idx < arr.length; idx++) {

                    if (idx % 3 == 0) {
                        if (fileNotSupported || (totalFileCount > 0 && totalFileCount < 3)) {
                            alert(LOCID_INCOMPLETE_ROUTER_FILES);
                            return;
                        }
                        fileBitMapper = 0;
                        totalFileCount = 0;
                    }
                    var shortName = arr.item(idx).value;
                    if (!isNullOrEmptyString(shortName)) {

                        shortName = shortName.slice(shortName.lastIndexOf("\\") + 1);
                        shortName = shortName.toLowerCase();
                        if (shortName == LOCID_ROUTER_ENCRYPTION_XML.toLowerCase() &&
                            ((fileBitMapper & EncryptionFileBitLocation) == 0)) {
                            fileBitMapper = fileBitMapper | EncryptionFileBitLocation;
                            totalFileCount++;
                        } else if (shortName == LOCID_ROUTER_SYSTEMSTATE_XML.toLowerCase() &&
                            ((fileBitMapper & SystemStateFileBitLocation) == 0)) {
                            fileBitMapper = fileBitMapper | SystemStateFileBitLocation;
                            totalFileCount++;
                        } else if (shortName == LOCID_ROUTER_EMAILAGENT_XML.toLowerCase() &&
                            ((fileBitMapper & EmailAgentFileBitLocation) == 0)) {
                            fileBitMapper = fileBitMapper | EmailAgentFileBitLocation;
                            totalFileCount++;
                        } else {
                            fileNotSupported = true;
                        }
                    }
                }
                if (fileNotSupported || (totalFileCount > 0 && totalFileCount < 3)) {
                    alert(LOCID_INCOMPLETE_ROUTER_FILES);
                    return;
                }

                WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);

                RemoveEventListenersFromFileControls();
                SubmitIFrameForm();
            }
        }

        function SuccessCallBack(serverProfiles, userMapping, forwardMailboxXml) {
            WizardSetProperty("EmailServerProfiles", serverProfiles);
            WizardSetProperty("UserMappings", userMapping);
            WizardSetProperty("ForwardMailbox", forwardMailboxXml);
            WizardSetProperty("fileBeingProcessed", false);
            var profileCount = ShowServerProfilePage();
            if (profileCount > 0) {
                profileSelectionPageVisible = true;
                for (var idx = 1; idx <= profileCount; idx++) {
                    var radioElement = document.getElementById('radioyes' + idx);
                    if (!IsNull(radioElement)) {
                        radioElement.checked = true;
                    }
                }
                WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
            }
        }

        $addHandler(window, "load", PageOnLoad);

        function PageOnLoad() {
            WizardSetProperty("EmailRoutersCount", 1);
            WizardSetProperty("migrationProcessCompleted", false);
            attachWindowOnBeforeUnload(OnBeforeWindowUnload, parent.window);
            var cancelBtn = document.getElementById("buttonCancel");
            cancelBtn.onclick = OnCancelClicked;
            var serverPage = document.getElementById("serverSelectionPageDiv");
            if (!IsNull(serverPage)) {
                serverPage.style.display = "none";
                AddEventListenersOnFileControls();
            }
            var summaryPage = document.getElementById("migrationReviewSummary");
            if (!IsNull(summaryPage)) {
                summaryPage.style.display = "none";
            }
            var migrationInProcess = document.getElementById("migrationInProcessDiv");
            if (!IsNull(migrationInProcess)) {
                migrationInProcess.style.display = "none";
            }
            var lastSummaryPage = document.getElementById("LastSummaryPage");
            if (!IsNull(lastSummaryPage)) {
                lastSummaryPage.style.display = "none";
            }
        }
    </script>
</head>
<body>
<frm:wizardform id="crmForm" runat="server">
    <div id="mainBody" style="height: 100%">
        <div>
            <loc:Text ResourceId="MigrationWizard.ProcessFilePage.Header_1" runat="server"/>
            <ul class="mscrm-iw-unorderlist">
                <li><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Web.Tools.EmailRouterMigration.MigrationConstants.EncryptionKeyXml) %></li>
                <li><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Web.Tools.EmailRouterMigration.MigrationConstants.SystemStateXml) %></li>
                <li><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Web.Tools.EmailRouterMigration.MigrationConstants.EmailAgentXml) %></li>
            </ul>
            <br/>
            <loc:Text ResourceId="MigrationWizard.ProcessFilePage.Header_2" runat="server"/>
            <br/>
            <br/>
        </div>
        <div style="height: 560px">

            <iframe id="processFileFrame" name="processFileFrame" src="MigrationFileHandler.aspx" scrolling="no" frameborder="0" height="100%" width="100%">
            </iframe>
        </div>
    </div>

    <div id="serverSelectionPageDiv" style="height: 100%">
        <div id="serverSelectionPageDescription">
            <loc:Text ResourceId="MigrationWizard.ServerProfile.Description_1" runat="server"/>
            <br/>
            <br/>
        </div>
        <div id="serverPageControl"></div>
    </div>

    <div id="migrationReviewSummary" style="height: 100%">
        <div style="height: 10%">
            <loc:Text ResourceId="MigrationWizard.ReviewSummary.Description" runat="server"/>
        </div>
        <div id="migrationReviewControl" style="height: 90%"></div>
    </div>


    <div id="migrationInProcessDiv" style="height: 100%">
        <div style="height: 10%">
            <loc:Text ResourceId="MigrationWizard.MigrationInProcess.Description" runat="server"/>
        </div>
        <div id="migrationInProcessControl" style="height: 75%">
            <ol class="mscrm-iw-orderedList">
                <li id="serverprofilestep" class="mscrm-iw-orderedListItem">
                    <loc:Text ResourceId="MigrationWizard.CreatingEmailServerProfiles" runat="server"/>
                </li>
                <li id="forwardmailboxstep" class="mscrm-iw-orderedListItem">
                    <loc:Text ResourceId="MigrationWizard.CreatingForwardMailboxes" runat="server"/>
                </li>
                <li id="userqueueupdatestep" class="mscrm-iw-orderedListItem">
                    <loc:Text ResourceId="MigrationWizard.UpdatingUserQueueMailboxes" runat="server"/>
                </li>
            </ol>
            <div id="migrationProgressDiv" class="mscrm-iw-ProgressDiv">
                <table class="mscrm-iw-ProgressTable" style="height: 40%">
                    <tr>
                        <td valign='middle' align='center'>
                            <img alt='' src='/_imgs/AdvFind/progress.gif'/>
                            <br/>
                            <label id="migrationProgressMessage"></label>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    <div id="LastSummaryPage" style="height: 100%">
        <div id="successDescription">
            <div>
                <loc:Text ResourceId="MigrationWizard.MigrationSucess.Description" runat="server"/>
            </div>
            <br/>
            <div id="detailedSummary"></div>
            <br/>
            <br/>
            <div>
                <loc:Text ResourceId="MigrationWizard.StepsToFollow.Description" runat="server"/>
                <ul class="mscrm-iw-unorderlist">
                    <li>
                        <loc:Text ResourceId="MigrationWizard.Step_1_ToFollow.Description" runat="server"/>
                    </li>
                    <li>
                        <loc:Text ResourceId="MigrationWizard.Step_2_ToFollow.Description" runat="server"/>
                    </li>
                </ul>
            </div>
        </div>
        <div id="failureDescription">
            <loc:Text ResourceId="MigrationWizard.MigrationFailure.Description" runat="server"/>
            <br/>
            <br/>
        </div>
    </div>
    <div id="progressDiv" class="mscrm-iw-ProgressDiv">
        <table class="mscrm-iw-ProgressTable">
            <tr>
                <td valign='middle' align='center'>
                    <img alt='' src='/_imgs/AdvFind/progress.gif'/>
                    <br/>
                    <label id="progressMessage"></label>
                </td>
            </tr>
        </table>
    </div>
</frm:wizardform>
</body>
</html>