<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.BulkDeleteRecurrenceSettingsDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>
    <title>
        <loc:Text ResourceId="Web.Tools.Bulkdelete.BulkDeleteSettings.aspx_title" runat="server"/>
    </title>
    <style type="text/css">
        .daily .hourly,
        .hourly .daily { display: none; }
    </style>
    <script type="text/javascript" language="javascript">
        function cancel() {
            Mscrm.Utilities.setReturnValue(false);
            closeWindow();
        }

        function onChangeNumberOfDays() {
            return changeNumberOfDays("numberOfDaysInput", "rdSchedule");
        }

        function onChangeNumberOfDaysForRollup() {
            return changeNumberOfDays("numberOfDaysForRollupInput", "rdDaily");
        }

        function changeNumberOfDays(inputControl, checkValue) {
            var numberOfDaysInputControl = document.getElementById(inputControl);

            var numDaysValue = parseInt(numberOfDaysInputControl.value, 10);

            if (!(numDaysValue > 0 && numDaysValue <= 365)) {

                if ($get(checkValue).checked == true) {
                    alert(LOCID_DD_ENTERINTEGER);
                    numDaysValue = parseInt(numberOfDaysInputControl.getAttribute("lastValue"), 10);
                    if (!(numDaysValue > 0 && numDaysValue <= 365)) {
                        numberOfDaysInputControl
                            .value = parseInt(numberOfDaysInputControl.getAttribute("defaultValue"), 10);
                    } else {
                        numberOfDaysInputControl
                            .value = parseInt(numberOfDaysInputControl.getAttribute("lastValue"), 10);
                    }
                    numberOfDaysInputControl.focus();
                    return false;
                } else {
                    numberOfDaysInputControl.value = parseInt(numberOfDaysInputControl.getAttribute("lastValue"), 10);
                    return true;
                }
            }
            return true;
        }

        function onChangeNumberOfHours() {
            var numberOfHoursInputControl = document.getElementById("numberOfHoursInput");

            var numHoursValue = parseInt(numberOfHoursInputControl.value, 10);

            if (!(numHoursValue > 0 && numHoursValue <= 24)) {

                alert(LOCID_HOUR_ENTERINTEGER);
                numHoursValue = parseInt(numberOfHoursInputControl.getAttribute("lastValue"), 10);
                if (!(numHoursValue > 0 && numHoursValue <= 24)) {
                    numberOfHoursInputControl
                        .value = parseInt(numberOfHoursInputControl.getAttribute("defaultValue"), 10);
                } else {
                    numberOfHoursInputControl.value = parseInt(numberOfHoursInputControl.getAttribute("lastValue"), 10);
                }
                numberOfHoursInputControl.focus();
                return false;
            }
            return true;
        }

        function OnCheckedChanged() {
            if (rdDaily.checked) {
                document.getElementById('recurrencecontrol').className = "daily";
            } else {
                document.getElementById('recurrencecontrol').className = "hourly";
            }
        }

        function applychanges() {
            var todayStartTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("todayStartTime");
            var startTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("startTime");
            <% if (IsRollupJob)
               { %>
            if (onChangeNumberOfHours() == false) {
                return;
            } else if (onChangeNumberOfDaysForRollup() == false) {
                return;
            }
            <% }
               else
               { %>
            if (onChangeNumberOfDays() == false) {
                return;
            }
            <% } %>


            <% if (IsRollupJob)
               { %>
            var pattern = "&recStartTime=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(startTimeCtrl.get_dataValue()));
            if ($get("rdHourly").checked) {
                var interval = $find("numberOfHours").get_returnValueProperty();
                _custParams = pattern + "&recPattern=" + "FREQ=HOURLY;INTERVAL=" + interval + ";";
            } else if ($get("rdDaily").checked) {
                var interval = $find("numberOfDaysForRollup").get_returnValueProperty();
                _custParams = pattern + "&recPattern=" + "FREQ=DAILY;INTERVAL=" + interval + ";";
            } else {
                alert(LOCID_DD_CHOOSE_OPTION);
                return;
            }
            <% }
               else
               { %>

            if ($get("rdNever").checked) {
                _custParams = "&recStartTime=" + "&recPattern=";
            } else if ($get("rdToday").checked) {
                if (todayStartTimeCtrl.get_dataValue() < LocalDateTimeNow()) {
                    alert(LOCID_DD_INVALID_TIME);
                    return;
                } else {
                    _custParams = "&recStartTime=" +
                        CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(todayStartTimeCtrl.get_dataValue())) +
                        "&recPattern=";
                }
            } else if ($get("rdSchedule").checked) {
                var interval = $find("numberOfDays").get_returnValueProperty();
                _custParams = "&recStartTime=" +
                    CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(startTimeCtrl.get_dataValue())) +
                    "&recPattern=" +
                    "FREQ=DAILY;INTERVAL=" +
                    interval +
                    ";";
            } else {
                alert(LOCID_DD_CHOOSE_OPTION);
                return;
            }
            <% } %>
            go();

            Mscrm.Utilities.setReturnValue(true);
        }
    </script>

</head>

<body>

<frm:DialogForm id="crmForm" runat="server" DialogTab="false">
    <table width="100%">
        <col width=2%><col width=3%><col width=5%><col width=55%><col width=20%><col>
        <tr>
            <td></td>
            <td colspan="5"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(runJobLabel) %></td>
        </tr>
        <% if (!IsRollupJob)
           { %>
            <tr>
                <td></td>
                <td>
                    <input type="radio" class="radio" id="rdNever" name="rdRecurrenceOptions" value="0" runat="server">
                </td>
                <td colspan="4">
                    <label class="radioLabel" for="rdNever">
                        <loc:Text ResourceId="BulkDeleteSettings.aspx_NeverOptionLabel" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="radio" class="radio" id="rdToday" name="rdRecurrenceOptions" value="1" runat="server">
                </td>
                <td colspan="2">
                    <label class="radioLabel" for="rdToday">
                        <loc:Text ResourceId="BulkDeleteSettings.aspx_TodayOptionLabel" runat="server"/>
                    </label>
                </td>
                <td>
                    <ui:DateTimeUI id="todayStartTime" runat="server" AllowBlankDate="False" DisplayFormat="time"/>
                </td>
                <td></td>
            </tr>
        <% } %>
        <tr>
            <td></td>
            <td>
                <input type="radio" class="radio" id="rdSchedule" name="rdRecurrenceOptions" value="2" runat="server">
            </td>
            <td colspan="4">
                <label class="radioLabel" for="rdSchedule">
                    <loc:Text ResourceId="BulkDeleteSettings.aspx_ScheduleOptionLabel" runat="server"/>
                </label>
            </td>
        </tr>


        <% if (IsRollupJob)
           { %>
            <tr>
                <td colspan="2"></td>
                <td>
                    <input type="radio" class="radio" id="rdHourly" name="rdRecurrenceOptions" value="3" onclick="OnCheckedChanged();" <% if (OptionSelected == RecurrenceFrequency.Hourly.ToString())
                                                                                                                                          { %>checked<% } %>>
                </td>
                <td>
                    <label class="radioLabel" for="rdHourly">
                        <loc:Text ResourceId="Freq_Hourly" runat="server"/>
                    </label>
                </td>
            </tr>
            <tr>
                <td colspan="2"></td>
                <td>
                    <input type="radio" class="radio" id="rdDaily" name="rdRecurrenceOptions" value="4" onclick="OnCheckedChanged();" <% if (OptionSelected == RecurrenceFrequency.Daily.ToString())
                                                                                                                                         { %>checked<% } %>>
                </td>
                <td>
                    <label class="radioLabel" for="rdDaily">
                        <loc:Text ResourceId="Freq_Daily" runat="server"/>
                    </label>
                </td>
            </tr>
        <% } %>
        <tr id="recurrencecontrol" class=" <% if (OptionSelected == RecurrenceFrequency.Daily.ToString())
                                              { %> daily <% }
                                              else
                                              { %> hourly <% } %>">
            <td colspan="3"></td>
            <td>
                <label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionLabel" runat="server"/>
            </td>
            <% if (IsRollupJob)
               { %>
                <td class="hourly">
                    <ui:EditableSelect id="numberOfHours" onchange="onChangeNumberOfHours();" onfocusout="onChangeNumberOfHours();" runat="server"/>
                </td>
                <td class="hourly">
                    <label class="radioLabel" for="rdHourly"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionHoursLabel" runat="server"/>
                </td>
                <td class="daily">
                    <ui:EditableSelect id="numberOfDaysForRollup" onchange="onChangeNumberOfDaysForRollup();" onfocusout="onChangeNumberOfDaysForRollup();" runat="server"/>
                </td>
                <td class="daily">
                    <label class="radioLabel" for="rdDaily"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionDaysLabel" runat="server"/>
                </td>

            <% }
               else
               { %>
                <td>
                    <ui:EditableSelect id="numberOfDays" onchange="onChangeNumberOfDays();" onfocusout="onChangeNumberOfDays();" runat="server"/>
                </td>
                <td>
                    <label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionDaysLabel" runat="server"/>
                </td>
            <% } %>
        </tr>
        <tr>
            <td colspan="3"></td>
            <td>
                <label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_StartTimeOptionLabel" runat="server"/>
            </td>
            <td>
                <ui:DateTimeUI id="startTime" runat="server" AllowBlankDate="False" DisplayFormat="time"/>
            </td>
            <td></td>
        </tr>
    </table>
</frm:DialogForm>
</body>
</html>