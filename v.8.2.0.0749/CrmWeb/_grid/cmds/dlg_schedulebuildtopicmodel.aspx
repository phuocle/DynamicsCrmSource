<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ScheduleBuildTopicModelDialogPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Globalization" %>
<!DOCTYPE html>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server"/>
<title></title>
<style type="text/css">
    .ms-crm-RefreshDialog-Header { height: 100px; }

    .shedulebuilddailyhide { display: none; }

    .shedulebuildweeklyhide { display: none; }

    .shedulebuilddailyshow { display: block; }

    .shedulebuildweeklyshow { display: block; }

    .scheduleweekhide { display: none; }

    .scheduleweekshow { display: block; }

    .daysofweekhide { display: none; }

    .daysofweekshow { display: block; }

    .numberdaysweekshide { display: none; }

    .numberdaysweeksshow { display: block; }
</style>
<script type="text/javascript" language="javascript">
    var _sAction = "schedulebuildtopicmodel";

    var _custParams = "";
    var _iObjType = <%= ObjType.ToString(CultureInfo.InvariantCulture) %>;
    var daysweek = [];

    function cancel() {
        Mscrm.Utilities.setReturnValue(false);
        closeWindow();
    }


    function OnCheckedChanged() {
        if (rdDaily.checked) {
            document.getElementById('tdEveryNDays').className = "shedulebuilddailyshow";
            document.getElementById('tdEveryNWeeks').className = "shedulebuildweeklyhide";
            document.getElementById('tdEveryDay').className = "shedulebuilddailyshow";
            document.getElementById('tdEveryWeek').className = "shedulebuildweeklyhide";
            document.getElementById('trScheduleWeekDay').className = "scheduleweekhide";
            document.getElementById('trScheduleWeekDay1').className = "scheduleweekhide";
            document.getElementById('tdDayWeek').className = "daysofweekhide";
            $get("rdEveryWeek").checked = false;
            $get("rdEveryNWeeks").checked = false;
        } else {
            document.getElementById('tdEveryNDays').className = "shedulebuilddailyhide";
            document.getElementById('tdEveryNWeeks').className = "shedulebuildweeklyshow";
            document.getElementById('tdEveryDay').className = "shedulebuilddailyhide";
            document.getElementById('tdEveryWeek').className = "shedulebuildweeklyshow";
            document.getElementById('trScheduleWeekDay').className = "scheduleweekshow";
            document.getElementById('trScheduleWeekDay1').className = "scheduleweekshow";
            document.getElementById('tdDayWeek').className = "radioLabel";
            $get("rdEveryDay").checked = false;
            $get("rdEveryNDays").checked = false;
        }
        document.getElementById('numberDaysWeeks').value = "";
        document.getElementById('tdNumberDaysWeeks').className = "numberdaysweekshide";
    }


    function OnDayCheckedChanged() {
        if (rdEveryDay) {
            document.getElementById('numberDaysWeeks').value = "";
        }
        if (rdEveryNDays.checked) {
            document.getElementById('tdNumberDaysWeeks').className = "numberdaysweeksshow";
        } else {
            document.getElementById('tdNumberDaysWeeks').className = "numberdaysweekshide";
        }
    }


    function OnWeekCheckedChanged() {
        if (rdEveryWeek) {
            document.getElementById('numberDaysWeeks').value = "";
        }
        if (rdEveryNWeeks.checked) {
            document.getElementById('tdNumberDaysWeeks').className = "numberdaysweeksshow";
        } else {
            document.getElementById('tdNumberDaysWeeks').className = "numberdaysweekshide";
        }
    }

    function applychanges() {
        var startTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("startTime");
        if (startTimeCtrl.get_dataValue() < LocalDateTimeNow()) {
            alert(LOCID_DD_INVALID_TIME);
            return;
        }
        var pattern = "&recStartTime=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(startTimeCtrl.get_dataValue()));
        var interval = $get("numberDaysWeeks").value;
        if ($get("rdEveryNDays").checked) {

            if (validateDaysWeeks(this, "DAY")) {
                _custParams = pattern + "&recPattern=" + "FREQ=DAILY;INTERVAL=" + interval + "";
            } else {
                alert(LOCID_DD_ENTERINTEGER);
                return false;
            }
        } else if ($get("rdEveryNWeeks").checked) {

            if (validateDaysWeeks(this, "WEEK")) {
                daysweek = getDayWeek();
                if (daysweek == "") {
                    alert("Days are required");
                    return false;
                }
                _custParams = pattern +
                    "&recPattern=" +
                    "FREQ=WEEKLY;INTERVAL=" +
                    interval +
                    ";DAYWEEK=" +
                    daysweek.toString().substring(1) +
                    "";
            } else {
                alert(LOCID_WEEK_ENTERINTEGER);
                return false;
            }
        } else if ($get("rdEveryDay").checked) {
            _custParams = pattern + "&recPattern=" + "FREQ=DAILY";
        } else if ($get("rdEveryWeek").checked) {
            daysweek = getDayWeek();
            if (daysweek == "") {
                alert("Days are required")
                return false;
            }
            _custParams = pattern + "&recPattern=" + "FREQ=WEEKLY;DAYWEEK=" + daysweek.toString().substring(1) + "";
        } else {
            alert(LOCID_DD_CHOOSE_OPTION);
            return;
        }
        go();
    }


    function validateDaysWeeks(e, DaysWeek) {
        var number = $('#numberDaysWeeks').val();

        if (number == "")
            return false;
        if (!($.isNumeric(number)))
            return false;
        else {
            if (DaysWeek == "DAY") {
                if (number < 1 || number > 365)
                    return false;
            }
            if (DaysWeek == "WEEK") {
                if (number < 1 || number > 52)
                    return false;
            }
            return true;
        }
    }


    function getDayWeek() {
        var cb = document.getElementsByTagName('input');
        var retStr = "";
        for (var i = 0; i < cb.length; i++) {
            if (cb[i].getAttribute('type') == "checkbox") {
                if (cb[i].checked == true) {
                    daysweek = daysweek + ", " + cb[i].defaultValue;
                }
            }
        }
        return daysweek;
    }
</script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server" dialogtab="false">
    <table width="500px">
        <col width="110px"/>
        <col width="170px"/>
        <col width="130px"/>
        <col width="90px"/>
        <tr>
            <td>
                <label class="radioLabel" for="rdSchedule">
                    <loc:Text ResourceId="BulkDeleteSettings.aspx_ScheduleOptionLabel" runat="server"/>
                </label>
            </td>
            <td>
                <input type="radio" class="radio" id="rdDaily" name="rdRecurrenceOptions" onclick="OnCheckedChanged();" runat="server"/>
                <label class="radioLabel" for="rdDaily">
                    <loc:Text ResourceId="Freq_Daily" runat="server"/>
                </label>
                <input type="radio" class="radio" id="rdWeekly" name="rdRecurrenceOptions" onclick="OnCheckedChanged();" runat="server"/>
                <label class="radioLabel" for="rdWeekly">
                    <loc:Text ResourceId="Freq_Weekly" runat="server"/>
                </label>
            </td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td align="left">
                <loc:Text ResourceId="ScheduleBuild.aspx_OccurenceLabel" runat="server"/>
            </td>
            <td colspan="2" valign="top" align="left">
                <table width="100%">
                    <tr>
                        <td>
                            <table width="100%">
                                <tr>
                                    <td id="tdEveryNDays" class="shedulebuilddailyhide" align="left" runat="server">
                                        <input type="radio" class="radio" id="rdEveryNDays" name="rdscheduleOptionsDay" onclick="OnDayCheckedChanged();" runat="server"/>
                                        <loc:Text ResourceId="ScheduleBuild.aspx_EveryNDaysLabel" runat="server"/>
                                    </td>

                                    <td id="tdEveryNWeeks" class="shedulebuildweeklyhide" align="left" runat="server">
                                        <input type="radio" class="radio" id="rdEveryNWeeks" name="rdscheduleOptionsWeek" onclick="OnWeekCheckedChanged();" runat="server"/>
                                        <loc:Text ResourceId="ScheduleBuild.aspx_EveryNWeeksLabel" runat="server"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td id="tdEveryDay" class="shedulebuilddailyhide" runat="server" align="left">
                                        <input type="radio" class="radio" id="rdEveryDay" name="rdscheduleOptionsDay" onclick="OnDayCheckedChanged();" runat="server"/>
                                        <loc:Text ResourceId="ScheduleBuild.aspx_EveryDayLabel" runat="server"/>
                                    </td>

                                    <td id="tdEveryWeek" class="shedulebuildweeklyhide" runat="server" align="left">
                                        <input type="radio" class="radio" id="rdEveryWeek" name="rdscheduleOptionsWeek" onclick="OnWeekCheckedChanged();" runat="server"/>
                                        <loc:Text ResourceId="ScheduleBuild.aspx_EveryWeekLabel" runat="server"/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td id="tdNumberDaysWeeks" class="numberdaysweekshide" runat="server">
                            <table width="100%">
                                <tr></tr>
                                <tr>
                                    <td>
                                        <ui:textbox id="numberDaysWeeks" runat="server"/>
                                    </td>
                                </tr>
                                <tr></tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td id="tdDayWeek" class="daysofweekhide" runat="server" valign="top" align="left">
                <label for="rdWeekly">
                    <loc:Text ResourceId="ScheduleBuild.aspx_DaysofWeekyLabel" runat="server"/>
                </label>
            </td>
            <td colspan="3" valign="top" align="left">
                <table width="100%">
                    <tr id="trScheduleWeekDay" class="scheduleweekhide" runat="server">
                        <td>
                            <label>
                                <input type="checkbox" id="chkMonday" value="Monday" style="width: 12px" name="days" runat="server"/>
                                Monday
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="chkTuesday" value="Tuesday" style="width: 12px" name="days" runat="server"/>
                                Tuesday
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="chkWednesday" value="Wednesday" style="width: 12px" name="days" runat="server"/>
                                Wednesday
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="chkThursday" value="Thursday" style="width: 12px" name="days" runat="server"/>
                                Thursday
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="chkFriday" value="Friday" style="width: 12px" name="days" runat="server"/>
                                Friday
                            </label>
                        </td>
                    </tr>
                    <tr id="trScheduleWeekDay1" class="scheduleweekhide" runat="server">
                        <td>
                            <label>
                                <input type="checkbox" id="chkSaturday" value="Saturday" style="width: 12px" name="days" runat="server"/>
                                Saturday
                            </label>
                        </td>
                        <td>
                            <label>
                                <input type="checkbox" id="chkSunday" value="Sunday" style="width: 12px" name="days" runat="server"/>
                                Sunday
                            </label>
                        </td>
                        <td colspan="3"></td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <label class="radioLabel" for="rdSchedule" align="left">
                    <loc:Text ResourceId="BulkDeleteSettings.aspx_StartTimeOptionLabel" runat="server"/>
                </label>
            </td>
            <td align="left">
                <ui:DateTimeUI id="startTime" runat="server" AllowBlankDate="False" DisplayFormat="datetime"/>
            </td>
            <td></td>
            <td></td>
        </tr>
    </table>
</frm:dialogform>
</body>
</html>