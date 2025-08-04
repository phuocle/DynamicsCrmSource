<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Web.Sfa.Quotes.AcceptDialog" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%
%>

<script language="javascript">

    var radCloseOpportunity;
    var radUseGivenRevenue;
    var radUseCalulatedRevenue;
    var actualRevenueControl;
    Sys.Application.add_load(function() {
        actualRevenueControl = Mscrm.FormControlInputBehavior.GetBehavior('actualRevenue');
        radCloseOpportunity = $get("radCloseOpportunity");
        radUseGivenRevenue = $get("radUseGivenRevenue");
        radUseCalulatedRevenue = $get("radUseCalulatedRevenue");
        $addHandler(actualRevenueControl.get_element(), "focus", selectGivenRevenueField);
        $addHandler(actualRevenueControl.get_element(), "change", updateUIState);
        var oArgs = getDialogArguments();


        if (! <%= canCloseOpportunity.ToString().ToLower() %>) {
            $get("radLeaveOpportunityOpen").checked = true;
            radCloseOpportunity.disabled = true;
            radUseGivenRevenue.disabled = true;
            radUseCalulatedRevenue.disabled = true;
            $get("radLeaveOpportunityOpen").disabled = true;
            actualRevenueControl.set_disabled(true);
        }

        <% = RenderInitCalendar() %>

        updateUIState();
    });

    function updateUIState() {
        var oArgs = getDialogArguments();

        var oppVisibility = "visible";

        if (! <%= canCloseOpportunity.ToString().ToLower() %>) {
            oppVisibility = "hidden";
        }

        if (oArgs.opportunityID != null) {
            if (radCloseOpportunity.checked) {
                radUseGivenRevenue.disabled = false;
                radUseCalulatedRevenue.disabled = false;
                actualRevenueControl.set_disabled(false);
                $get("butBegin").disabled = radUseGivenRevenue.checked && actualRevenueControl.get_dataValue() == null;
            } else {
                radUseCalulatedRevenue.disabled = true;
                radUseGivenRevenue.disabled = true;
                actualRevenueControl.set_disabled(true);
                $get("butBegin").disabled = false;
            }
        }
        radCloseOpportunity.style.visibility = oppVisibility;
        radUseCalulatedRevenue.style.visibility = oppVisibility;
        radUseGivenRevenue.style.visibility = oppVisibility;
        trOpporunity.style.visibility = oppVisibility;
    }

    function applychanges() {
        var oResult = new Object();
        var selStatus = Mscrm.FormControlInputBehavior.GetBehavior('selStatus');
        oResult.newStatus = selStatus.get_dataValue();
        oResult.newStatusMsg = selStatus.get_selectedText();


        oResult.closeDate = FormatUtcDate(Mscrm.FormControlInputBehavior.GetBehavior('closeDate').get_dataValue());
        var sDescription = Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataValue();

        oResult.description = sDescription == null ? "" : sDescription;
        oResult.closeOpportunity = radCloseOpportunity.checked;

        if (oResult.closeOpportunity) {
            oResult.useGivenRevenue = radUseGivenRevenue.checked;

            if (oResult.useGivenRevenue) {
                oResult.actualRevenue = actualRevenueControl.get_dataValue();
            }
        }

        Mscrm.Utilities.setReturnValue(oResult);
        closeWindow(true);
    }

    function cancel() {
        closeWindow(true);
    }

    function selectGivenRevenueField() {
        radUseGivenRevenue.checked = true;
    }

</script>

<table width="100%" style="table-layout: fixed">
    <tr>
        <td>
            <table style="table-layout: fixed">
                <colgroup>
                    <col width="80"/>
                    <col width="120"/>
                    <col/>
                </colgroup>
                <tr>

                    <td>
                        <label for="selStatus">
                            <loc:Text ResourceId="Web.SFA.quotes.aspx_40.dlg_accept" runat="server"/>
                        </label>
                    </td>
                    <td>
                        <sdk:PicklistStatusControl id="selStatus" runat="server"/>
                    </td>
                    <td></td>
                </tr>
                <tr>

                    <td>
                        <label for="closeDate">
                            <loc:Text ResourceId="Web.SFA.quotes.aspx_50.dlg_accept" runat="server"/>
                        </label>
                    </td>
                    <td>
                        <sdk:DateTimeControl id="closeDate" runat="server" ShowTime="false"/>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td style="padding-top: 20px" colspan="4">
                        <label for="description">
                            <loc:Text ResourceId="Web.SFA.salesorders.aspx_60.dlg_close" runat="server"/>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td colspan="4" height="95px">
                        <sdk:TextAreaControl id="description" MaxLength="2000" runat="server"/>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr id="trOpporunity">

        <td>
            <table width="100%" style="table-layout: fixed">
                <colgroup>
                    <col width="25"/>
                    <col width="250"/>
                    <col width="5"/>
                </colgroup>
                <tr>
                    <td>
                        <input id="radCloseOpportunity" type="radio" class="radio" name="rgOpprotunityEndState" checked onclick="updateUIState();"/>
                    </td>
                    <td>
                        <label for="radCloseOpportunity">
                            <loc:Text ResourceId="Web.SFA.quotes.aspx_243.dlg_accept" runat="server"/>
                        </label>
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td>
                        &nbsp;
                    </td>
                    <td colspan="1">
                        <table width="45%" style="table-layout: fixed">
                            <colgroup>
                                <col width="90"/>
                                <col width="30"/>
                                <col width="120"/>
                            </colgroup>
                            <tr>
                                <td>
                                    <label for="actualRevenue" style="vertical-align: middle">
                                        <loc:Text ResourceId="Web.SFA.quotes.aspx_60.dlg_accept" runat="server"/>:
                                    </label>
                                </td>
                                <td>
                                    <input id="radUseGivenRevenue" type="radio" class="radio" name="rgRevenue" onclick="updateUIState();"
                                           style="vertical-align: middle" title="<loc:Text ResourceId='Web.SFA.quotes.valuegiven.title' runat='server'/>"/>
                                </td>
                                <td>
                                    <sdk:MoneyControl id="actualRevenue" runat="server"/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <input id="radUseCalulatedRevenue" type="radio" class="radio" name="rgRevenue" checked onclick="updateUIState();"/>
                                </td>
                                <td>
                                    <label for="radUseCalulatedRevenue">
                                        <loc:Text ResourceId="Web.SFA.quotes.aspx_70.dlg_accept" runat="server"/>
                                    </label>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="radLeaveOpportunityOpen" type="radio" class="radio" name="rgOpprotunityEndState" onclick="updateUIState();"/>
                    </td>
                    <td>
                        <label for="radLeaveOpportunityOpen">
                            <loc:Text ResourceId="Web.SFA.quotes.aspx_266.dlg_accept" runat="server"/>
                        </label>
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>