<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Sfa.Dialogs.DupWarning" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script language="javascript">
    var _parentAccountLookup;
    var _parentContactLookup;

    Sys.Application.add_load(function() {
        _parentAccountLookup = Mscrm.FormControlInputBehavior.GetBehavior("parentAccountLookup");
        _parentContactLookup = Mscrm.FormControlInputBehavior.GetBehavior("parentContactLookup");
    });

    function cancel() {
        closeWindow(true);
    }

    function applychanges() {
        var ret = new Object();
        var parentAccountLookupDataValue = _parentAccountLookup.get_dataValue();
        if (!IsNull(parentAccountLookupDataValue)) {
            ret.parentAccountId = parentAccountLookupDataValue[0].id;
            ret.parentAccountName = parentAccountLookupDataValue[0].name;
        }

        var parentContactLookupDataValue = _parentContactLookup.get_dataValue();
        if (!IsNull(parentContactLookupDataValue)) {
            ret.parentContactId = parentContactLookupDataValue[0].id;
            ret.parentContactName = parentContactLookupDataValue[0].name;
        }

        ret.qualifyStatus = document.getElementById("qualifyStatus").value;
        ret.transactionCurrencyId = document.getElementById("transactionCurrencyId").value;

        Mscrm.Utilities.setReturnValue(ret);
        closeWindow(true);
    }
</script>

<table style="table-layout: fixed">
    <tr>
        <td width="100" class="ms-crm-Field-Normal" id="lbSelectParentAccount">
            <label for="parentAccountLookup">
                <loc:Text ResourceId="Flyout.DupWarn.IdentifyAccount" runat="server"/>
            </label>
        </td>
        <td width="200">
            <sdk:LookupControl id="parentAccountLookup" LookupStyle="single" AccessibilityLabelResourceId="Flyout.DupWarn.IdentifyAccount" runat="server"/>
        </td>
    </tr>
    <tr>
        <td width="100" class="ms-crm-Field-Normal" id="lbSelectParentContact">
            <label for="parentContactLookup">
                <loc:Text ResourceId="Flyout.DupWarn.IdentifyContact" runat="server"/>
            </label>
        </td>
        <td width="200">
            <sdk:LookupControl id="parentContactLookup" LookupStyle="single" AccessibilityLabelResourceId="Flyout.DupWarn.IdentifyContact" runat="server"/>
        </td>
    </tr>
</table>
<br/>
<br/>
<label>
    <loc:Text ResourceId="Flyout.DupWarn.ActionText" runat="server"/>
</label>
<input type="hidden" id="qualifyStatus" runat="server"/>
<input type="hidden" id="transactionCurrencyId" runat="server"/>