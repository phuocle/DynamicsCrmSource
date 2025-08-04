<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.ChangeSchedulePage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>


<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script language="javascript">

        function cancel() {
            closeWindow();
        }

        function applychanges() {
            var oResult = new Object();
            oResult.value = $get("choice").value;

            if ($get("choice").value == "1") {
                var command = new RemoteCommand("SchedulePlanning", "CopyCalendarRuleOnward");

                command.SetParameter("resourceIdString", $get("resourceid").value);
                command.SetParameter("calendarIdString", $get("calendarid").value);
                command.SetParameter("calendarRuleIdString", $get("calendarruleid").value);
                command.SetParameter("currentDate",
                    '<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(CurrentDate) %>');
                var oType = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ObjectTypeCode.ToString()) %>;
                command.SetParameter("oType", oType);

                var result = command.Execute();

                if (result.Success) {
                    oResult.idValue = result.ReturnValue;
                }
            }

            Mscrm.Utilities.setReturnValue(oResult);
            closeWindow();
        }

        function onUpdateUI() {
            if ($get("rad0").checked) {
                $get("choice").value = "0";
            } else if ($get("rad1").checked) {
                $get("choice").value = "1";
            } else if ($get("rad2").checked) {
                $get("choice").value = "2";
            }
        }

    </script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
    <table class="main" border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
        <tr>
            <td colspan="2">
                <div class="ms-crm-Dialog-Header-Title">
                    <loc:Text ResourceId="SM_How_To_Edit_Weekly_Schedule" runat="server"/>
                </div>
            </td>
        </tr>
        <tr>
            <td>
                <table width="100%" height="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td>
                            <table width="100%" cellspacing="0" cellpadding="2">
                                <tr>
                                    <td width="5%" nowrap>
                                        <input class="radio" type="radio" onclick="onUpdateUI();" style="border: 0px; width: 20px" name="crmFormEnddate" id="rad0" checked/>
                                    </td>
                                    <td width="95%" id="exceptionstring" nowrap>
                                        <label for="rad0"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderExceptionString()) %></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="5%" nowrap></td>
                                    <td width="95%" nowrap>
                                        <table cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <img alt="" src="/_imgs/exception.gif" style="width: 451px; height: 25px" class="changeschedule_img_exception">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="specificdate">
                                                    <img alt="" src="/_imgs/clear.gif" style="width: 223px; height: 1px" class="changeschedule_img_clear"><img alt="" src="/_imgs/line.gif">
                                                    <b style="color: #010185;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentDate) %></b>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="5%" nowrap>
                                        <input class="radio" type="radio" onclick="onUpdateUI();" style="border: 0px; width: 20px" name="crmFormEnddate" id="rad1" <%= (StartDate == CurrentDate) ? "disabled" : "" %>/>
                                    </td>
                                    <td width="95%" id="onwardstring" <%= RenderEditOnwardStyle() %> nowrap>
                                        <label for="rad1"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderEditOnwardString()) %></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="5%" nowrap></td>
                                    <td width="95%" nowrap>
                                        <table cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <img alt="" src="/_imgs/newpattern.gif" style="width: 451px; height: 25px" class="changeschedule_img_newpattern">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="onwarddate"><img alt="" src="/_imgs/clear.gif" style="width: 223px; height: 1px" class="changeschedule_img_clear"><img alt="" src="/_imgs/line.gif" style="width: 1px; height=13px">&nbsp;<b style="color: #010185;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentDate) %></b></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td width="5%" nowrap>
                                        <input class="radio" type="radio" onclick="onUpdateUI();" style="border: 0px; width: 20px" name="crmFormEnddate" id="rad2"/>
                                    </td>
                                    <td width="95%" id="wholepatternstring" nowrap>
                                        <label for="rad2"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderWholePatternString()) %></label>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="5%" nowrap></td>
                                    <td width="95%" nowrap>
                                        <table cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <img alt="" src="/_imgs/wholepattern.gif" style="width: 451px; height: 25px" class="changeschedule_img_wholepattern">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td id="wholepatterndate"><img alt="" src="/_imgs/line.gif">&nbsp;<b style="color: #010185;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(StartDate) %></b></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <input type="hidden" name="resourceid" id="resourceid" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ResourceId) %>">
    <input type="hidden" name="calendarid" id="calendarid" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId) %>">
    <input type="hidden" name="calendarruleid" id="calendarruleid" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarRuleId) %>">
    <input type="hidden" name="choice" id="choice" value="0">
</frm:DialogForm>
</body>