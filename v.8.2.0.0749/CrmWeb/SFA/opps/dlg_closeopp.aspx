<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Dialogs.CloseOpportunityPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>

<script language="javascript">
    var _iId = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(OpportunityId) %>;
    var _iObjType = <%= Util.GetInt(Request.QueryString["pType"]) %>;
    var _subject = "";
    var RESULT_WON = 1;
    var RESULT_LOST = 2;
    var _previousStateResult = "";
    var _oLU = null;
    var _oDiv = null;
    var _actualrevenueControl;
    var _actualrevenue;
    var isWon = '<%= OpportunityIsWon %>' != '';
    var crmLookup = null;

    Sys.Application.add_load(function() {

        if ("undefined" == typeof(isWon))
            return;

        _actualrevenueControl = Mscrm.FormControlInputBehavior.GetBehavior('actualrevenue');
        _actualrevenue = $get('actualrevenue');
        crmLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmLookup');

        <%= RenderInitCalendar() %>
        <%= JScriptHeader %>

        <% if (EstimatedRevenue.Length > 0)
           { %>

        var actualrevenueValue =
            <%= Double.Parse(EstimatedRevenue, CultureInfo.InvariantCulture).ToString(CultureInfo.InvariantCulture) %>;

        if (_actualrevenueControl.IsValid(actualrevenueValue)) {
            _actualrevenueControl.set_dataValue(actualrevenueValue);
            _actualrevenue.prevDataValue = _actualrevenueControl.get_dataValue();
        } else {
            _actualrevenueControl.setFocus();
            alert(formatString(LOCID_INCORRECT_ACTUAL_REVENUE,
                Mscrm.NumberUtility.addFormatting(_actualrevenueControl.get_min(),
                    _actualrevenueControl.get_precision()),
                Mscrm.NumberUtility.addFormatting(_actualrevenueControl.get_max(),
                    _actualrevenueControl.get_precision())));
        }
        <% } %>
        if (isWon) {
            showStatus(RESULT_WON);
            _previousStateResult = RESULT_WON;
        } else {
            showStatus(RESULT_LOST);
            _previousStateResult = RESULT_LOST;
        }
    });

    function applychanges() {

        var actualendComponent = Mscrm.FormControlInputBehavior.GetBehavior('actualend');
        var retval = "";


        if (actualendComponent.get_dataValue() == null) {
            alert(LOCID_CLOSE_DATE_NOT_SUPPLIED);
            actualendComponent.setFocus();
            return;
        }

        if ((_actualrevenueControl.get_dataValue() == null) && isWon) {
            alert(LOCID_ACT_REVENUE_NOT_SUPPLIED);
            _actualrevenueControl.focus();
            return;
        }

        var oReturn = new Object();
        var wonState = 1;
        var lostState = 2;

        oReturn.actualRevenue = _actualrevenueControl.get_dataValue();
        oReturn.description = Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataValue();

        oReturn.actualEnd = actualendComponent.get_dataXml();
        oReturn.subject = _subject;

        if (!isWon) {
            var datavalue = crmLookup.get_dataValue();
            if (!IsNull(datavalue)) {
                oReturn.competitor = datavalue[0].id;
            }

            oReturn.state = lostState;
            oReturn.reason = Mscrm.FormControlInputBehavior.GetBehavior("selLoseStatus").get_dataValue();
        } else {
            oReturn.state = wonState;
            oReturn.reason = Mscrm.FormControlInputBehavior.GetBehavior("selWinStatus").get_dataValue();
        }


        var xml = "<opportunityclose>";
        xml += _actualrevenueControl.get_dataXml();
        xml +=
            "<activityid><%= SequentialGuid.CreateGuid().ToString("B", CultureInfo.InvariantCulture).ToUpper(CultureInfo.InvariantCulture).Replace("{", "").Replace("}", "") %></activityid>";
        xml += "<opportunityid>" + _iId.replace("{", "").replace("}", "") + "</opportunityid>";
        xml += Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataXml();
        xml += actualendComponent.get_dataXml();
        xml += "<subject>" + CrmEncodeDecode.CrmXmlEncode(_subject) + "</subject>";
        if (!isWon && !IsNull(oReturn.competitor)) {
            xml += "<competitorid>" + oReturn.competitor.replace("{", "").replace("}", "") + "</competitorid>";
        }
        xml += "</opportunityclose>";
        oReturn.ActivityXml = xml;


        Mscrm.Utilities.setReturnValue(oReturn);
        closeWindow(true);
    }

    function cancel() {
        closeWindow(true);
    }

    function showStatus(result) {
        switch (result) {
        case RESULT_WON:


            if (_previousStateResult == RESULT_WON) {
                return;
            }

            $get('divLost').style.display = "none";
            $get('divWon').style.display = "";
            SetFieldRequiredOrRecommended($get('tdActualRevenue'),
                Mscrm.FormFieldType.FIELD_REQUIRED,
                LOCID_FORM_REQUIRED_ALT);
            $get('tdCompetitor').className = "";
            crmLookup.set_disabled(true);
            crmLookup.prevDataValue = crmLookup.get_dataValue();
            crmLookup.set_dataValue(null);
            _actualrevenueControl.set_dataValue(_actualrevenue.prevDataValue);
            break;

        case RESULT_LOST:


            if (_previousStateResult == RESULT_LOST) {
                return;
            }

            $get('divWon').style.display = "none";
            $get('divLost').style.display = "";
            SetFieldRequiredOrRecommended($get('tdActualRevenue'), Mscrm.FormFieldType.FIELD_NOT_REQUIRED, "");
            crmLookup.set_dataValue(crmLookup.prevDataValue);
            var sInsufficientPermission = crmLookup.get_crmAttributeId("insufficientPermission");
            if (IsNull(sInsufficientPermission) || sInsufficientPermission != "true") {
                crmLookup.set_disabled(false);
            }
            _actualrevenue.prevDataValue = _actualrevenueControl.get_dataValue();
            _actualrevenueControl.set_dataValue(0);
            break;
        }
        _previousStateResult = result;
    }
</script>

<table width="100%" cellpadding="0" cellspacing="3" style="table-layout: fixed">
    <col width="140"/>
    <col/>
    <tr height="20">
        <td class="ms-crm-Field-Required">
            <label for="selWinStatus">
                <loc:Text ResourceId="Web.SFA.opps.dlg_closeopp.aspx_197" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </label>
        </td>
        <td>
            <div id="divWon" runat="server">
                <sdk:PicklistStatusControl TabIndex="2" id="selWinStatus" runat="server"/>
            </div>
            <div id="divLost" runat="server">
                <sdk:PicklistStatusControl TabIndex="2" id="selLoseStatus" runat="server"/>
            </div>
        </td>
    </tr>
    <tr>
        <td id="tdActualRevenue" class="ms-crm-Field-Required">
            <label for="actualrevenue">
                <loc:Text ResourceId="Web.SFA.opps.dlg_closeopp.aspx_183" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </label>
        </td>
        <td>
            <sdk:MoneyControl tabindex="3" id="actualrevenue" runat="server"/>
        </td>
    </tr>
    <tr>
        <td id="tdCloseDate" class="ms-crm-Field-Required">
            <label for="actualend	">
                <loc:Text ResourceId="Web.SFA.opps.dlg_closeopp.aspx_187" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
            </label>
        </td>
        <td>
            <sdk:DateTimeControl TabIndex="4" id="actualend" runat="server" ShowTime="false"/>
        </td>
    </tr>
    <tr>
        <td id="tdCompetitor">
            <label for="crmLookup">
                <loc:Text ResourceId="Web.SFA.opps.dlg_closeopp.aspx_191" runat="server"/>
            </label>
        </td>
        <td>
            <sdk:LookupControl id="crmLookup" AccessibilityLabelResourceId="Web.SFA.opps.dlg_closeopp.aspx_191" LookupStyle="single" TabIndex="5" runat="server"/>
        </td>
    </tr>
    <tr>

        <td style="padding-top: 20px" colspan="2">
            <label for="description">
                <loc:Text ResourceId="Web.SFA.salesorders.aspx_60.dlg_close" runat="server"/>
            </label>
        </td>
    </tr>
    <tr>
        <td colspan="2" height="95px">
            <sdk:TextAreaControl TabIndex="6" id="description" MaxLength="2000" runat="server"/>
        </td>
    </tr>
</table>