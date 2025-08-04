<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Web.Sfa.Quotes.ProductsDialog" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script type="text/javascript">

var _lookupOpportunity = null;
Sys.Application.add_load(function() {
_lookupOpportunity = Mscrm.FormControlInputBehavior.GetBehavior('lookupOpportunity');
var transCurrId = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(Request.QueryString["transactioncurrencyid"]) %> ;
_lookupOpportunity.AddParam("transactioncurrencyid", transCurrId);
});

function cancel()
{
closeWindow();
}

function applychanges()
{
var dataValue = _lookupOpportunity.get_dataValue();
if (dataValue == null)
{
alert(LOCID_OPPORTUNITY_NOT_SELECTED);
return;
}

var ret = new Object();
ret.opportunityId = dataValue[0].id;

Mscrm.Utilities.setReturnValue(ret);
closeWindow();
}

</script>

<table cellspacing="0" cellpadding="8" width="100%" height="100%">
<tr>
<td>
<table width="100%">
<colgroup>
<col width="15%" />
<col width="10" />
</colgroup>
<tr>
<td nowrap>
<label for="lookupOpportunity">
<loc:MetadataText EntityType="opportunity" EntityNameFormatStyle="Singular" runat="server"/>
</label>
</td>
<td>&nbsp; </td>
<td>
<sdk:LookupControl TabIndex="1" id="lookupOpportunity" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>