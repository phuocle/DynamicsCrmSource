<!DOCTYPE html >
<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.Dialogs.RecurrenceDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<script language="javascript">


    function cancel() {
        closeWindow();
    }

</script>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <style>
        TR.ms-crm-recurrence-dialog-sectionspacer { height: 15px }
    </style>
</head>
<body>
<div id="divProgress" class="ms-crm-recurrence-dialog-progresscover">
    <table height="100%" width="100%" style="cursor: wait">
        <col/>
        <tr>
            <td valign="middle" align="center">
                <img alt="" src="/_imgs/AdvFind/progress.gif"/><br/>
                <div id="divLoading">
                    <loc:Text ResourceId="RecurrenceRule.Dialog.Loading" runat="server"/>
                </div>
                <div id="divValidating" style="display: none">
                    <loc:Text ResourceId="RecurrenceRule.Dialog.Validating" runat="server"/>
                </div>
            </td>
        </tr>
    </table>
</div>
<form name="crmForm" style="height: 100%; width: 100%">
    <frm:DialogForm id="crmForm" runat="server">
        <cnt:AppNotifications id="Notifications" Size="5" runat="server"/>
        <table id="mainBodyTable" cellspacing="0" cellpadding="0" width="100%" border="0">
            <tr class="ms-crm-recurrence-dialog-sectionspacer">
                <td class="Spacer"></td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <legend class="ms-crm-recurrence-dialog-section-title" title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.AppointmentTimeSection.Title' runat='server'/>">
                            <loc:Text ResourceId="RecurrenceRule.AppointmentTimeSection.Title" runat="server"/>
                        </legend>
                        <table cellspacing="0" cellpadding="0" width="100%" border="0" class="stdtable">
                            <colgroup>
                                <col width="20px"/>
                                <col width="140px"/>
                                <col width="140px"/>
                                <col width="20px"/>
                                <col/>
                            </colgroup>
                            <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                            <tr>
                                <td/>
                                <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.AppointmentTimeSection.StartLabel' runat='server'/>">
                                    <label for="scheduledstart">
                                        <loc:Text ResourceId="RecurrenceRule.AppointmentTimeSection.StartLabel" runat="server"/>
                                    </label>
                                </td>
                                <td class="ms-crm-recurrence-dialog-datecontrol">
                                    <sdk:DateTimeControl DisplayFormat="time" runat="server" id="scheduledstart"/>
                                </td>
                                <td/>
                                <td>
                                    <label title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_startTimeZone) %>" style="overflow: hidden" for="scheduledstart">
                                        <%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(_startTimeZone) %>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td/>
                                <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.AppointmentTimeSection.EndLabel' runat='server'/>">
                                    <label for="scheduledend">
                                        <loc:Text ResourceId="RecurrenceRule.AppointmentTimeSection.EndLabel" runat="server"/>
                                    </label>
                                </td>
                                <td class="ms-crm-recurrence-dialog-datecontrol">
                                    <sdk:DateTimeControl DisplayFormat="time" runat="server" id="scheduledend"/>
                                </td>
                                <td/>
                                <td/>
                            </tr>
                            <tr>
                                <td/>
                                <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.AppointmentTimeSection.DurationLabel' runat='server'/>">
                                    <label for="scheduleddurationminutes">
                                        <loc:Text ResourceId="RecurrenceRule.AppointmentTimeSection.DurationLabel" runat="server"/>
                                    </label>
                                </td>
                                <td class="ms-crm-recurrence-dialog-datecontrol">
                                    <sdk:DurationControl runat="server" id="scheduleddurationminutes"/>
                                </td>
                                <td/>
                            </tr>
                            <tr>
                                <td/>
                                <td/>
                                <td style="display: none">
                                    <input type="checkbox" id="isalldayevent" style="display: none" title="<% = Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("Web.SM.WorkPlans.Dialogs.timeoff.aspx__155")) %>"/>
                                </td>
                                <td/>
                            </tr>
                            <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                        </table>
                    </fieldset>
                </td>
            </tr>
            <tr class="ms-crm-recurrence-dialog-sectionspacer">
                <td class="Spacer"></td>
            </tr>
            <tr>
                <td>
                    <div style="position: relative">
                        <div id="recurrencePatDiv" style="position: absolute; width: 140px; z-index: 1; display: none;">
                            <sdk:PicklistControl id="recurrencePatternType" runat="server"/>
                        </div>
                        <fieldset>
                            <legend class="ms-crm-recurrence-dialog-section-title">
                                <div id="recurrencePatternSection" title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.RecurrencePatternSection.Title' runat='server'/>">
                                    <loc:Text ResourceId="RecurrenceRule.RecurrencePatternSection.Title" runat="server"/>
                                </div>
                            </legend>
                            <table cellspacing="0" cellpadding="0" width="100%" border="0" class="stdtable">
                                <colgroup>
                                    <col width="20px"/>
                                    <col/>
                                </colgroup>
                                <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                                <tr>
                                    <td/>
                                    <td>
                                        <div id="SelectedRecurrencePattern">
                                            <cnt:PatternContainer id="dailyPattern" runat="server"/>
                                            <cnt:PatternContainer id="weeklyPattern" runat="server"/>
                                            <cnt:PatternContainer id="monthlyPattern" runat="server"/>
                                            <cnt:PatternContainer id="yearlyPattern" runat="server"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                            </table>
                        </fieldset>
                    </div>
                </td>
            </tr>
            <tr class="ms-crm-recurrence-dialog-sectionspacer">
                <td class="Spacer"></td>
            </tr>
            <tr>
                <td>
                    <fieldset>
                        <legend class="ms-crm-recurrence-dialog-section-title" title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.RangeOfRecurrence.Title' runat='server'/>">
                            <loc:Text ResourceId="RecurrenceRule.RangeOfRecurrence.Title" runat="server"/>
                        </legend>
                        <table cellspacing="0" cellpadding="0" width="100%" border="0" class="stdtable">
                            <colgroup>
                                <col width="20px"/>
                                <col width="140px"/>
                                <col width="140px"/>
                                <col/>
                            </colgroup>
                            <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                            <tr>
                                <td/>
                                <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.RangeOfRecurrence.StartRange.Label1' runat='server'/>">
                                    <label for="PatternStartDate">
                                        <loc:Text ResourceId="RecurrenceRule.RangeOfRecurrence.StartRange.Label1" runat="server"/>
                                    </label>
                                </td>
                                <td class="ms-crm-recurrence-dialog-datecontrol">
                                    <sdk:DateTimeControl DisplayFormat="date" runat="server" id="rangeOption1_patternstartdate"/>
                                </td>
                            </tr>
                            <tr class="ms-crm-recurrence-dialog-rowspacer"/>
                            <tr>
                                <td/>
                                <td valign="top"title="<loc:Text Encoding='HtmlAttribute' ResourceId='RecurrenceRule.RangeOfRecurrence.EndRange.Label1' runat='server'/>">
                                    <label for="PatternEndDate">
                                        <loc:Text ResourceId="RecurrenceRule.RangeOfRecurrence.EndRange.Label1" runat="server"/>
                                    </label>
                                </td>
                                <td colspan="2">
                                    <div>
                                        <cnt:PatternContainer id="recurrenceRange" runat="server"/>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                </td>
            </tr>
        </table>
    </frm:DialogForm>
</form>
</body>
</html>