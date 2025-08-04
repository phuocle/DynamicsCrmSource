<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.DuplicateDetectionJobWizard.AdditionalOptionsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Sdk" %>

<!DOCTYPE html>
<html xmlns:Crm>
<head>
<cnt:AppHeader id="crmHeader" runat="server"/>
<script language="javascript">

    var _sCCRecipients = "";
    var cancelClicked = false;
    var _recipients = null;
    var numberOfDaysInputControl = null;
    var _startTime = null;

    function WizardCloseMessage(oEvent) {
        oEvent = oEvent.rawEvent;

        if (!cancelClicked) {
            oEvent.returnValue = LOCID_DD_ALERT_CLOSE;
            return LOCID_DD_ALERT_CLOSE;
        }
    }

    function OnCancelClicked() {
        cancelClicked = true;
        WizardNavigate(_WizardNavigateEnum.CANCEL);
    }

    Sys.Application.add_load(function() {
        _recipients = Mscrm.FormControlInputBehavior.GetBehavior('recipients');
        _startTime = Mscrm.FormControlInputBehavior.GetBehavior('startTime');
        attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);

        var cancelBtn = document.getElementById("buttonCancel");
        cancelBtn.onclick = function() { if (!Mscrm.Utilities.resetValidationFailedElement()) OnCancelClicked(); };

        document.getElementById("buttonBack").onclick = function() {
            if (!Mscrm.Utilities.resetValidationFailedElement()) moveBack();
        };
        InitializeControls();
    });

    function InitializeControls() {
        numberOfDaysInputControl = document.getElementById("numberOfDaysInput");

        XUI.Html.SetText(document.getElementById("checkNotifyText"), LOCID_EMAILOPTIONSTEXT);

        var txtJobName = document.getElementById("txtJobName");
        if (WizardHasProperty("jobName")) {
            txtJobName.value = WizardGetProperty("jobName");
        } else {
            txtJobName.value = formatString(LOCID_DD_WIZARD_JOBNAME, LOCID_USER_DATETIME);
        }

        if (WizardHasProperty("startDateTime")) {
            _startTime.set_dataValue(new Date(WizardGetProperty("startDateTime")));
        }

        if (WizardHasProperty("isRecurring")) {
            document.getElementById("chkRecurrence").checked = WizardGetProperty("isRecurring");
        }

        onClickChkRecurrence();

        if (WizardHasProperty("recurrenceDays")) {
            numberOfDaysInputControl.value = WizardGetProperty("recurrenceDays");
        }

        if (WizardHasProperty("sendEmail")) {
            document.getElementById("checkNotify").checked = WizardGetProperty("sendEmail");
        }

        onClickChkNotify();

        if (WizardHasProperty("emailCc")) {
            _recipients.AddItems(WizardGetProperty("emailCc"));
        }
    }

    function onChangeNumberOfDays() {
        var numDaysValue = parseInt(numberOfDaysInputControl.value, 10);

        if (!(numDaysValue > 0 && numDaysValue <= 365)) {

            if (document.getElementById("chkRecurrence").checked == true) {
                alert(LOCID_DD_ENTERINTEGER);
                numberOfDaysInputControl.value = numberOfDaysInputControl.lastValue;
                numberOfDaysInputControl.focus();
                return false;
            } else {
                numberOfDaysInputControl.value = numberOfDaysInputControl.lastValue;
                return true;
            }
        }

        return true;
    }

    function ValidateDateTime() {
        var wizardStartTime = new Date(WizardGetProperty("wizardStartTime"));


        if (_startTime.get_dataValue() >= wizardStartTime) {
            return true;
        } else {
            alert(LOCID_DD_INVALID_DATE);
            return false;
        }
    }

    function moveBack() {
        if (document.getElementById("txtJobName").value == "") {
            alert(LOCID_JOBNAME_EMPTY);
            return;
        }

        SavePageProperties();
        detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
        WizardNavigate(_WizardNavigateEnum.BACK);
    }

    function moveNext() {
        if (document.getElementById("txtJobName").value == "") {
            alert(LOCID_JOBNAME_EMPTY);
            return;
        }

        if (onChangeNumberOfDays() == false) {
            return;
        }

        if (ValidateDateTime() == false) {
            return;
        }
        if (document.getElementById("checkNotify").checked == true) {
            if (collectRecipients() == false || validateEmailRecipients() == false) {

                alert(LOCID_INVALID_EMAIL);
                return;
            }
        }


        SavePageProperties();

        var ddWizardMode = WizardGetProperty("ddWizardMode");
        if (ddWizardMode == Mscrm.DuplicateDetectionWizardMode.systemWide) {
            detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
            WizardNavigate(_WizardNavigateEnum.NEXT);
        } else {
            var result = Mscrm.DuplicateDetectionWizardHelper.extractInputsAndCreateDupDetectionJob();
            if (result.Success == true) {
                detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
                WizardNavigate(_WizardNavigateEnum.CLOSE);
            }
        }
    }

    function collectRecipients() {
        _sCCRecipients = "";
        var aItems = _recipients.Items(false, true);
        if (aItems && aItems.length > 0) {
            for (j = 0; j < aItems.length - 1; j++) {

                if (aItems[j].id) {
                    _sCCRecipients = _sCCRecipients + aItems[j].id + ",";
                } else {
                    return false;
                }
            }


            if (aItems[j].id) {
                _sCCRecipients = _sCCRecipients + aItems[j].id;
            } else {
                return false;
            }
        }

        return true;
    }

    function validateEmailRecipients() {


        var command = new RemoteCommand("DuplicateDetection", "ValidateEmailRecipients");


        command.SetParameter("recipients", _sCCRecipients);


        var result = command.Execute();

        if (result.Success == true) {
            return result.ReturnValue;
        } else {
            return false;
        }
    }

    function SavePageProperties() {
        WizardSetProperty("jobName", document.getElementById("txtJobName").value);
        WizardSetProperty("startDateTime", _startTime.get_dataValue().toString());
        WizardSetProperty("startDateTimeUtc", FormatUtcDate(_startTime.get_dataValue()));
        WizardSetProperty("recurrenceDays", parseInt(numberOfDaysInputControl.value, 10));
        WizardSetProperty("isRecurring", document.getElementById("chkRecurrence").checked);
        WizardSetProperty("sendEmail", document.getElementById("checkNotify").checked);
        WizardSetProperty("currentUserEmail", LOCID_CURRENTUSER_EMAIL);
        WizardSetProperty("ccRecipientList", _sCCRecipients);
        WizardSetProperty("emailCc", _recipients.Items(false, true, undefined, undefined, true));
    }

    function GetNextPageDefinition() {
        var entityName = "";
        if (WizardHasProperty("entityName")) {
            entityName = WizardGetProperty("entityName");
        }
        var oUrl = Mscrm.CrmUri.create("/Tools/DuplicateDetection/DuplicateDetectionJobWizard/SummaryPage.aspx");
        return new NextPageDefinition(oUrl);
    }

    function onClickChkRecurrence() {
        numberOfDaysInputControl.disabled = !document.getElementById("chkRecurrence").checked;
    }

    function onClickChkNotify() {
        _recipients.set_disabled(! $get("checkNotify").checked);
    }

</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
    <table width="100%" cellpadding=0 cellspacing=0>
        <tr>
            <td class="SystemWideDuplicateDetection_td_page3">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <% if (_option != WizardMode.SystemWide)
                       { %>
                        <tr>
                            <td>
                                <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_SpecifyNameDescription" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    <% } %>
                    <tr>
                        <td>
                            <label class="ms-crm-Bold-Header" for="txtJobName">
                                <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_Name" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-top: 5px; padding-bottom: 10px;">
                            <input class="text" type="text" size="83" id="txtJobName" maxlength=200 name="txtName"/>
                        </td>
                    </tr>
                    <tr height=15>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td class="SystemWideDuplicateDetection_td_page3">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <tr>
                        <td>
                            <label class="ms-crm-Bold-Header" for="startTime">
                                <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_StartTime" runat="server"/>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table width="100%">
                                <col width=250><col>
                                <tr>
                                    <td style="padding-top: 5px; padding-bottom: 10px;">
                                        <sdk:DateTimeControl id="startTime" runat="server"/>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                            <table width="100%">
                                <col width=20><col>
                                <tr>
                                    <td>
                                        <ui:CheckBox id="chkRecurrence" onclick="onClickChkRecurrence();" runat="Server"/>
                                    </td>
                                    <td>
                                        <label for="chkRecurrence">
                                            <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_RecurrenceText" runat="server"/>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%">
                                <col width=20><col width=100><col>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>
                                        <ui:EditableSelect id="numberOfDays" onchange="onChangeNumberOfDays();" runat="server"/>
                                    </td>
                                    <td>
                                        <label for="numberOfDays">
                                            <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_RecurrenceTextDays" runat="server"/>
                                        </label>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr height=15>
                        <td>&nbsp;</td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr valign="top">
            <td class="SystemWideDuplicateDetection_td_starttime">
                <table width="100%" cellpadding=0 cellspacing=0>
                    <tr>
                        <td class="ms-crm-Bold-Header">
                            <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_Email" runat="server"/>
                        </td>
                    </tr>
                </table>
                <table width="100%" cellpadding=0 cellspacing=0>
                    <col width=20><col>
                    <tr>
                        <td>
                            <ui:CheckBox id="checkNotify" onclick="onClickChkNotify();" runat="Server"/>
                        </td>
                        <td id="emailNotification">
                            <label for="checkNotify" id="checkNotifyText"></label>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>
                            <table width="100%">
                                <tr>
                                    <td>
                                        <label for="recipients">
                                            <loc:Text ResourceId="DuplicateDetection_Wizard_Page3_NotifyOthers" runat="server"/>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <table width="100%">
                                <col width="70%"><col>
                                <tr>
                                    <td>
                                        <sdk:PartyListControl id="recipients" LookupStyle="multi" runat="server"/>
                                    </td>
                                    <td>&nbsp;</td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</frm:WizardForm>
</body>
</html>