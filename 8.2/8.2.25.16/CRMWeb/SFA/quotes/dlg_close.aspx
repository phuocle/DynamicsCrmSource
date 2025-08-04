
<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Sales.Web.Sfa.Quotes.QuoteClosePage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>














<script language="javascript">

var oArgs = null;

Sys.Application.add_load(function() {
oArgs = getDialogArguments();
if (! <%= _canCloseOpportunity.ToString().ToLower() %> )
{
$get('lbCloseOpp').disabled = true;
$get('chkCloseOpp').disabled = true;
}



if (IsOutlookClient())
{
$get('rdNoRevisedQuote').checked = <%= _offline.ToString().ToLower() %> ;
$get('rdCreateRevisedQuote').disabled = <%= _offline.ToString().ToLower() %> ;
$get('lblCreateRevisedQuote').disabled = <%= _offline.ToString().ToLower() %> ;
}

updateUIState();

<% =RenderInitCalendar() %>
});

function updateUIState( )
{
$get('butBegin').disabled = (Mscrm.FormControlInputBehavior.GetBehavior('closeDate').get_dataValue() == null);





$get('lbCloseOpp').disabled	= !($get('rdNoRevisedQuote').checked && <%= _canCloseOpportunity.ToString().ToLower() %>);
var oppVisibility = "visible";
if (! <%= _canCloseOpportunity.ToString().ToLower() %> )
{
oppVisibility = "hidden";
}


$get('chkCloseOpp').disabled	= $get('lbCloseOpp').disabled;
chkCloseOpp.style.visibility = oppVisibility;
lbCloseOpp.style.visibility = oppVisibility;
}

function applychanges( )
{
var oResult		= new Object();
var bCloseOpp	= ($get('chkCloseOpp').checked && !$get('chkCloseOpp').disabled);
var ret_val = null;

if (bCloseOpp)
{
var parameters = new Array(oResult, bCloseOpp);
var oUrl = Mscrm.CrmUri.create("/sfa/opps/dlg_closeopp.aspx?pId=<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(_quoteId)) %>&pType=<%= Util.Quote.ToString(System.Globalization.CultureInfo.InvariantCulture) %>&won=false");
var crmDialog = new Mscrm.CrmDialog(oUrl, document, 450, 480, null);
crmDialog.setCallbackInfo("performActionAfterCloseOpp", this, parameters);
crmDialog.show();
}
else
performActionAfterCloseOpp(ret_val, oResult, bCloseOpp);
}


function performActionAfterCloseOpp(ret_val, oResult, bCloseOpp)
{
if(bCloseOpp)
{
if (!ret_val)
{
if (window.confirm( LOCID_CLOSE_OPP_CANCELLED ))
{
bCloseOpp = false;
}
else
{
cancel();
return;
}
}

oResult.OpportunityInfo = ret_val;
}


oResult.CloseOpportunity = bCloseOpp;
oResult.newStatus        = Mscrm.FormControlInputBehavior.GetBehavior("selStatus").get_dataValue();

oResult.closeDate        = FormatUtcDate(Mscrm.FormControlInputBehavior.GetBehavior('closeDate').get_dataValue());
var sDescription = Mscrm.FormControlInputBehavior.GetBehavior("description").get_dataValue();

oResult.description      = sDescription == null ? "" : sDescription;
oResult.createRevision = $get('rdCreateRevisedQuote').checked;

if (bCloseOpp && ret_val)
{
oResult.ActivityXml = ret_val.ActivityXml;
oResult.OpportunityState = ret_val.state;
oResult.OpportunityStatus = ret_val.reason;
}

Mscrm.Utilities.setReturnValue(oResult);
closeWindow(true);
}

function cancel( )
{
closeWindow(true);
}

</script>

<table width="100%" style="table-layout:fixed">
<colgroup>
<col width="100"/>
<col width="200"/>
<col/>
</colgroup>

<td style="padding-top:5px"><label for="selStatus"><loc:Text ResourceId="Web.SFA.quotes.aspx_40.dlg_accept" runat="server"/></label></td>
<td colspan="2"><sdk:PicklistStatusControl id="selStatus" runat="server"/></td>
</tr>
<tr>

<td><label for="closeDate"><loc:Text ResourceId="Web.SFA.quotes.dlg_close.aspx_155" runat="server"/></label></td>
<td colspan="2"><sdk:DateTimeControl id="closeDate" runat="server" ShowTime="false"/></td>
</tr>
<tr>

<td style="padding-top:20px" colspan="3"><label for="description"><loc:Text ResourceId="Web.SFA.salesorders.aspx_60.dlg_close" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3" Height="95px"><sdk:TextAreaControl id="description" MaxLength="2000" runat="server"/></td>
</tr>
<tr>

<td colspan="3">
<table width='100%' style='table-layout:fixed'>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>
<input id='rdCreateRevisedQuote' type='radio' class='radio' name='rgReviseQuote' checked onclick='updateUIState()' style="vertical-align:middle"/>
<label id="lblCreateRevisedQuote" for="rdCreateRevisedQuote" style="vertical-align:middle"><loc:Text ResourceId="Web.SFA.quotes.dlg_close.aspx_167" runat="server"/></label>
</td>
</tr>
<tr>
<td>
<input id='rdNoRevisedQuote' type='radio' class='radio' name='rgReviseQuote' onclick='updateUIState();' style="vertical-align:middle"/>
<label for="rdNoRevisedQuote" style="vertical-align:middle"><loc:Text ResourceId="Web.SFA.quotes.dlg_close.aspx_170" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
<tr>

<td class="dlg_close_td_CloseOpp" id="tdCloseOpp" colspan="2">
<input type="checkbox" class="ms-crm-CheckBox" id="chkCloseOpp">&nbsp;<label id="lbCloseOpp" for="chkCloseOpp"><loc:Text ResourceId="Web.SFA.quotes.dlg_close.aspx_178" runat="server"/></label>
</td>
</tr>
</table>
