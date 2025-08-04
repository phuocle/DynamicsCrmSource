<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.FiscalSettings.FiscalSettingsPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html >
<html>
<head>

    <cnt:AppHeader id="crmHeader" runat="server"/>

    <title>
        <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_10" runat="server"/>
    </title>

    <script language="javascript">

        var fiscalPeriodFormatOptions;
        var _fiscalPeriodFormatPeriod;
        var selectFiscalPeriodType;
        var fiscalYearFormatYear;
        var fiscalYearFormatPrefix;
        var fiscalYearFormatSuffix;

        Sys.Application.add_load(fiscalSettingsOnLoad);

        function cancel() {
            closeWindow();
        }

        function fiscalSettingsOnLoad() {
            <% = RenderInitCalendar() %>
            _fiscalPeriodFormatPeriod = Mscrm.FormControlInputBehavior.GetBehavior('fiscalPeriodFormatPeriod');
            fiscalPeriodFormatOptions = _fiscalPeriodFormatPeriod.get_options();
            selectFiscalPeriodType = Mscrm.FormControlInputBehavior.GetBehavior('selectFiscalPeriodType');
            fiscalYearFormatYear = Mscrm.FormControlInputBehavior.GetBehavior('fiscalYearFormatYear');
            fiscalYearFormatPrefix = Mscrm.FormControlInputBehavior.GetBehavior('fiscalYearFormatPrefix');
            fiscalYearFormatSuffix = Mscrm.FormControlInputBehavior.GetBehavior('fiscalYearFormatSuffix');


            var fiscalPeriodFormatPeriodValue = _fiscalPeriodFormatPeriod.get_dataValue();
            adjustPeriodFormatsBasedOnType();


            _fiscalPeriodFormatPeriod.set_dataValue(fiscalPeriodFormatPeriodValue);

            $get("tab0").style.top = $get("tab0Tab").offsetHeight + "px";
            $get("tabBarCell").style.width = ($get("tab0").offsetWidth - 20) + "px";
        }

        function fiscalTemplateonChange() {
            adjustPeriodFormatsBasedOnType();
        }

        function adjustPeriodFormatsBasedOnType() {
            var periodType = selectFiscalPeriodType.get_dataValue();
            _fiscalPeriodFormatPeriod.set_options(fiscalPeriodFormatOptions);


            switch (periodType) {
            case "2000":
                _fiscalPeriodFormatPeriod.RemoveOption('1');
                _fiscalPeriodFormatPeriod.RemoveOption('2');
                _fiscalPeriodFormatPeriod.RemoveOption('4');
                _fiscalPeriodFormatPeriod.RemoveOption('5');
                _fiscalPeriodFormatPeriod.RemoveOption('6');
                _fiscalPeriodFormatPeriod.RemoveOption('7');

                break;
            case "2001":
                _fiscalPeriodFormatPeriod.RemoveOption('1');
                _fiscalPeriodFormatPeriod.RemoveOption('2');
                _fiscalPeriodFormatPeriod.RemoveOption('4');
                _fiscalPeriodFormatPeriod.RemoveOption('5');
                _fiscalPeriodFormatPeriod.RemoveOption('7');
                _fiscalPeriodFormatPeriod.set_dataValue(6);

                break;
            case "2002":
                _fiscalPeriodFormatPeriod.RemoveOption('4');
                _fiscalPeriodFormatPeriod.RemoveOption('5');
                _fiscalPeriodFormatPeriod.RemoveOption('6');
                _fiscalPeriodFormatPeriod.RemoveOption('7');
                _fiscalPeriodFormatPeriod.set_dataValue(1);

                break;
            case "2003":
                _fiscalPeriodFormatPeriod.RemoveOption('1');
                _fiscalPeriodFormatPeriod.RemoveOption('2');
                _fiscalPeriodFormatPeriod.RemoveOption('6');
                _fiscalPeriodFormatPeriod.set_dataValue(7);
                break;
            case "2004":
                _fiscalPeriodFormatPeriod.RemoveOption('1');
                _fiscalPeriodFormatPeriod.RemoveOption('2');
                _fiscalPeriodFormatPeriod.RemoveOption('4');
                _fiscalPeriodFormatPeriod.RemoveOption('5');
                _fiscalPeriodFormatPeriod.RemoveOption('6');
                _fiscalPeriodFormatPeriod.RemoveOption('7');
                break;

            }
        }

        function applychanges() {

            var fiscalStartDateCtrl = Mscrm.FormControlInputBehavior.GetBehavior("fiscalStartDate");
            if (Trim(fiscalStartDateCtrl.get_innerText()) == "") {
                alert(LOCID_MAKE_SELECTION)
                return false;
            }


            var fiscalStartDateScratch = fiscalStartDateCtrl.get_dataValue();


            fiscalStartDateScratch.setHours(10, 59, 0);


            var year = fiscalStartDateScratch.getUTCFullYear();
            var month = fiscalStartDateScratch.getUTCMonth() + 1;
            var date = fiscalStartDateScratch.getUTCDate();

            if (year > 2100) {

                alert(LOCID_ERR_START_YEAR_INVALID);
                return false;
            }


            if (month == 2 && date == 29) {

                if (year % 4 == 0 && !(year % 100 == 0 && year % 400 != 0)) {

                    alert(LOCID_ERR_START_LEAP_DAY);
                    return false;
                }
            }

            var retval = "<organization>";
            retval += "<fiscalperiodtype>" + selectFiscalPeriodType.get_dataValue() + "</fiscalperiodtype>";
            retval += "<fiscalcalendarstart>" + FormatUtcDateTime(fiscalStartDateScratch) + "</fiscalcalendarstart>";
            retval += "<fiscalyearformatyear>" + fiscalYearFormatYear.get_dataValue() + "</fiscalyearformatyear>";
            retval += "<fiscalyearformatprefix>" + fiscalYearFormatPrefix.get_dataValue() + "</fiscalyearformatprefix>";
            retval += "<fiscalyearformatsuffix>" + fiscalYearFormatSuffix.get_dataValue() + "</fiscalyearformatsuffix>";
            retval += "<fiscalyeardisplaycode>" +
                Mscrm.FormControlInputBehavior.GetBehavior('selectFiscalYearDisplay').get_dataValue() +
                "</fiscalyeardisplaycode>";
            retval += "<fiscalperiodformatperiod>" +
                $get("fiscalPeriodFormatPeriod").value +
                "</fiscalperiodformatperiod>";
            retval += "<fiscalyearperiodconnect>" +
                Mscrm.FormControlInputBehavior.GetBehavior('selectFiscalYearPeriodConnect').get_dataValue() +
                "</fiscalyearperiodconnect>";
            retval += "</organization>";


            var xml = XUI.Xml.LoadXml(retval);

            var boSuccess = true;

            var xmlhttp = new XMLHttpRequest();
            var oUrl = Mscrm.CrmUri.create("/Tools/FiscalSettings/cmds/cmd_update.aspx");
            xmlhttp.open("POST", oUrl.toString(), false);
            Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
            SetTokenInHeader(xmlhttp, oUrl);

            boSuccess = Mscrm.Utilities.safeHttpSend(xmlhttp, xml);
            if (boSuccess) {
                handleXMLErr(xmlhttp.responseXML);
            }


            if (boSuccess) {
                closeWindow();
            }

        }
    </script>
    <style>
        div.ms-crm-FiscalTab {
            margin-left: 30px;
            margin-right: 30px;
        }
    </style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
    <input type="hidden" name="DataType">
    <input type="hidden" name="Required">
    <input type="hidden" name="OrgRequired">
    <div>
        <div class="ms-crm-Form-Area">
            <div id="tabBarCell" class="ms-crm-FiscalTab">
                <div>
                    <cnt:AppTabBar id="crmTabBar" runat="server"/>
                </div>
                <div id="tab0" class="ms-crm-FiscalTab ms-crm-Tab" style="display: block; position: absolute; left: 0px; bottom: 0px; height: auto; width: 88.5%; border-top-style: solid; border-top-width: 1px;">
                    <table width="100%">
                        <col width=35%><col width=35%><col width=15%><col/>
                        <tr>
                            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="5" valign="bottom">
                                <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_235" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td id="fiscalstartdate_c" nowrap class="ms-crm-Field-Required" valign="center">
                                <label for="fiscalStartDate">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_104" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
                                </label>
                            </td>
                            <td valign="center">
                                <ui:DateTimeUI id="fiscalStartDate" runat="server" AllowBlankDate="true" DisplayFormat="date"/>
                            </td>
                            <td colspan="3"></td>
                        </tr>
                        <tr>
                            <td id="fiscalperiodtype_c" nowrap class="ms-crm-Field-Required" valign="center">
                                <label for="selectFiscalPeriodType">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_109" runat="server"/>
                                </label>
                            </td>
                            <td valign="center">
                                <crm:Select id="selectFiscalPeriodType" runat="Server" OnChange="fiscalTemplateonChange()"/>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="5" valign="bottom">
                                <BR><loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_128" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td/>
                            <td>
                                <label for="fiscalYearFormatPrefix">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_prefix" runat="server"/>
                                </label>
                            </td>
                            <td>
                                <label for="fiscalYearFormatYear">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_yearformat" runat="server"/>
                                </label>
                            </td>
                            <td>
                                <label for="fiscalYearFormatSuffix">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_postfix" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td id="fiscalyear_c" nowrap class="ms-crm-Field-Required" valign="center">
                                <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_270" runat="server"/>
                            </td>
                            <td valign="center">
                                <sdk:PicklistControl id="fiscalYearFormatPrefix" runat="server"/>
                            </td>
                            <td valign="center">
                                <sdk:PicklistControl id="fiscalYearFormatYear" runat="server"/>
                            </td>
                            <td valign="center">
                                <sdk:PicklistControl id="fiscalYearFormatSuffix" runat="server"/>
                            </td>
                        </tr>
                        <tr>
                            <td id="namedbasedon_c" nowrap class="ms-crm-Field-Required" valign="center">
                                <label for="selectFiscalYearDisplay">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_115" runat="server"/>
                                </label>
                            </td>
                            <td valign="center">
                                <crm:Select id="selectFiscalYearDisplay" runat="Server"/>
                            </td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td id="fiscalperiod_c" nowrap class="ms-crm-Field-Required" valign="center">
                                <label for="fiscalPeriodFormatPeriod">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_149" runat="server"/>
                                </label>
                            </td>
                            <td valign="center">
                                <sdk:PicklistControl id="fiscalPeriodFormatPeriod" runat="server"/>
                            </td>
                            <td colspan="2"></td>
                        </tr>
                        <tr>
                            <td nowrap valign="center">
                                <label for="selectFiscalYearPeriodConnect">
                                    <loc:Text ResourceId="Web.Tools.FiscalSettings.Dialogs.fiscalsettings.aspx_169" runat="server"/>
                                </label>
                            </td>
                            <td valign="center">
                                <crm:Select id="selectFiscalYearPeriodConnect" runat="Server"/>
                            </td>
                            <td colspan="3"></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <input type="hidden" name="FullName" value="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Util.GetNodeValue(_OrgXml, "fullnameconventioncode")) %>">
</frm:DialogForm>
</body>
</html>