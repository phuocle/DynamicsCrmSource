<%@ Page language="c#" Inherits="Microsoft.Crm.Marketing.Web.MA.CampaignResponse.Dialogs.ConvertResponse" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<script language="javascript">


Sys.Application.add_load(PageLoad);
function PageLoad() {
Mscrm.FormControlInputBehavior.GetBehavior("AcctContLookup").add_change(updateUIState);
Mscrm.FormControlInputBehavior.GetBehavior("LeadLookup").add_change(updateUIState);
Mscrm.FormControlInputBehavior.GetBehavior("CrmCurrencyLookup").add_change(updateUIState);

$get("butBegin").disabled = true;


updateUIState();
}


function cancel() {
closeWindow(true);
}


function applychanges() {
var radCloseButton = $get("radClose");
var radConvertExistingLeadButton = $get("radConvertExistingLead");
var LeadLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("LeadLookup");
var radCustomerButton = $get("radCustomer");
var AcctContLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("AcctContLookup");

var radCreateNewLeadButton = $get("radCreateNewLead");
var radConvertExistingLeadButton = $get("radConvertExistingLead");
var radCustomerButton = $get("radCustomer");
var CreateNewRecordPicklistControl = Mscrm.FormControlInputBehavior.GetBehavior("CreateNewRecordPicklist");

var CrmCurrencyLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("CrmCurrencyLookup");

if (radCloseButton.checked == false) {
if (radConvertExistingLeadButton.checked) {
if (IsNull(LeadLookupControl.get_dataValue())) {

alert(LOCID_LEAD_MUST_BE_SUPPLIED);
return;
}
}
else if (radCustomerButton.checked) {
if (IsNull(AcctContLookupControl.get_dataValue())) {

alert(LOCID_CUSTOMER_MUST_BE_SUPPLIED);
return;
}
}
}


var ret = new Object();


ret.Convert = !radCloseButton.checked;
ret.CreateNewLead = radCreateNewLeadButton.checked;
ret.ConvertExistingLead = radConvertExistingLeadButton.checked;
ret.Customer = radCustomerButton.checked;
if (ret.Customer) {
var selectedPicklistControlValue = CreateNewRecordPicklistControl.get_selectedOption().value;
ret.Quote = (selectedPicklistControlValue == "3");
ret.Order = (selectedPicklistControlValue == "2");
ret.Opportunity = (selectedPicklistControlValue == "1");
}
ret.Account = "<%= Guid.Empty %>";
ret.Contact = "<%= Guid.Empty %>";
ret.Lead = "<%= Guid.Empty %>";


var leadLookupControlDataValue = LeadLookupControl.get_dataValue();
if (!IsNull(leadLookupControlDataValue)) {
ret.Lead = LeadLookupControl.get_dataValue()[0].id;
var leadObj = LeadLookupControl.get_dataValue()[0].keyValues;
if (!IsNull(leadObj) && !IsNull(leadObj['companyname'])) {
ret.LeadCompanyName = leadObj['companyname'].value;
}
}
var acctContLookupControlDataValue = AcctContLookupControl.get_dataValue();
if (!IsNull(acctContLookupControlDataValue)) {
with (AcctContLookupControl.get_dataValue()[0]) {
if (type == Account) {
ret.Account = id;
ret.Contact = "<%= Guid.Empty %>";
}
else {
ret.Contact = id;
ret.Account = "<%= Guid.Empty %>";
}
}
}
var crmCurrencyLookupControlDataValue = CrmCurrencyLookupControl.get_dataValue();
if (!IsNull(crmCurrencyLookupControlDataValue)) {
ret.Currency = crmCurrencyLookupControlDataValue[0].id;
}
else {
ret.Currency = "<%= Guid.Empty %>";
}



var ResponseStatePicklistControl = Mscrm.FormControlInputBehavior.GetBehavior("ResponseStatePicklist");

ret.ShowNew = !radCloseButton.checked;


ret.Close = radCloseButton.checked;
ret.ResponseState = $get("ResponseStatePicklist").value;


Mscrm.Utilities.setReturnValue(ret);


closeWindow(true);
}


function updateUIState() {
var radCloseButton = $get("radClose");
var radConvertExistingLeadButton = $get("radConvertExistingLead");
var LeadLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("LeadLookup");
var radCustomerButton = $get("radCustomer");
var AcctContLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("AcctContLookup");

var radCreateNewLeadButton = $get("radCreateNewLead");
var radConvertExistingLeadButton = $get("radConvertExistingLead");
var radCustomerButton = $get("radCustomer");

var CrmCurrencyLookupControl = Mscrm.FormControlInputBehavior.GetBehavior("CrmCurrencyLookup");

var ResponseStatePicklistControl = Mscrm.FormControlInputBehavior.GetBehavior("ResponseStatePicklist");
var CreateNewRecordPicklistControl = Mscrm.FormControlInputBehavior.GetBehavior("CreateNewRecordPicklist");




radCreateNewLeadButton.disabled = false;
radConvertExistingLeadButton.disabled = false;
radCustomerButton.disabled = false;
radCloseButton.disabled = false;



LeadLookupControl.set_disabled(true);
AcctContLookupControl.set_disabled(true);
CrmCurrencyLookupControl.set_disabled(true);


CreateNewRecordPicklistControl.set_disabled(true);
ResponseStatePicklistControl.set_disabled(true);


$get("butBegin").disabled = false;


if (radCloseButton.checked)
{

ResponseStatePicklistControl.set_disabled(false);


$get("butBegin").disabled = false;
}
else if (radCreateNewLeadButton.checked)
{

$get("butBegin").disabled = false;
}
else if (radConvertExistingLeadButton.checked)
{

LeadLookupControl.set_disabled(false);


$get("butBegin").disabled = false;
}
else if (radCustomerButton.checked)
{

AcctContLookupControl.set_disabled(false);


CrmCurrencyLookupControl.set_disabled(false);


CreateNewRecordPicklistControl.set_disabled(false);

if (CrmCurrencyLookupControl.get_dataValue() != null) {

$get("butBegin").disabled = false;
}
else {
$get("butBegin").disabled = true;
}
}
}
</script>

<table width="100%" cellpadding="8">
<tr class="main">
<td>

<table width="100%" style="table-layout:fixed">
<col width="26"></col>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<col width="26"></col>
<tr>
<td>
<input class="radio" type="radio" id="radCreateNewLead" name="radLevel1Group" onclick="updateUIState()" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateLead, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable checked" : "disabled"%>>
</td>
<td>
<label for="radCreateNewLead" style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_CreateNewLead" runat="server"/></label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout: fixed">
<tr valign="top">
<td>
<label><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_CreateNewLead_Description" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>
<input class="radio" type="radio" id="radConvertExistingLead" name="radLevel1Group" onclick="updateUIState()" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadLead, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable" : "disabled"%>>
</td>
<td>
<label for="radConvertExistingLead"  style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_ConvertExistingLead" runat="server"/></label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout: fixed">
<tr valign="top">
<td>
<label for="LeadLookup" style="vertical-align:text-top"><loc:text resourceid="MA.CampaignResponse.Dialogs.conv_response.aspx_ConvertExistingLead_Description" runat="server" /></label>
</td>
<td>
<sdk:lookupcontrol id="LeadLookup" runat="server" style="vertical-align:top"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td>
<input class="radio" type="radio" id="radCustomer" name="radLevel1Group" onclick="updateUIState()" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateQuote, Microsoft.Crm.Application.Security.UserInformation.Current) || Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateOrder, Microsoft.Crm.Application.Security.UserInformation.Current) || Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateOpportunity, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable" : "disabled"%>>
</td>
<td>
<label for="radCustomer"  style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"> <loc:text resourceid="MA.CampaignResponse.Dialogs.conv_response.aspx_Customer" runat="server" /> </label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td valign="top">
<label for="AcctContLookup" style="vertical-align:text-bottom"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_Customer_Description" runat="server"/></label>
</td>
<td>
<sdk:lookupcontrol id="AcctContLookup" runat="server" style="vertical-align:bottom"/>
</td>
</tr>
<tr>
<td valign="top">
<label for="CreateNewRecordPicklist" style="vertical-align:text-bottom"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_Customer_Sel_Rec" runat="server"/></label>
</td>
<td valign="top">
<ui:select id="CreateNewRecordPicklist" Disabled="true" onchange="updateUIState()" runat="server" style="vertical-align:bottom"/>
</td>
</tr>
<tr>
<td id="lbSelectCurrency">
<label for="CrmCurrencyLookup">
<loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_Customer_Sel_Currency" runat="server" style="vertical-align:text-bottom"/>
</label>
</td>
<td id="CrmCurrencyLookup_d">
<sdk:LookupControl id="CrmCurrencyLookup" AccessibilityLabelResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_136" Disabled="true" LookupStyle="single" runat="server" style="vertical-align:bottom"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
</tr>
<tr>
<td  valign="top">
<input class="radio" type="radio" id="radClose" name="radLevel1Group" onclick="updateUIState()" <%if(!CanConvertResponse){%>checked<%}%>>
</td>
<td>
<label for="radClose"  style="FONT-WEIGHT: <%= WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_CloseResponse" runat="server"/></label>
</td>
</tr>

<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td>
<label id="lbSelectStateCode" for="ResponseStatePicklist" style="vertical-align:text-top"><loc:Text ResourceId="MA.CampaignResponse.Dialogs.conv_response.aspx_Status" runat="server"/></label>
</td>
<td>
<ui:Select id="ResponseStatePicklist" Disabled="true" runat="server"  style="vertical-align:top"/>
</td>
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