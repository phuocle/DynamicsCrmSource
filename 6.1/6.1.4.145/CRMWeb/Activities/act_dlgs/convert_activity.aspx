<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Activities.Dialogs.ConvertActivity" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<script language="javascript">

var _customerLookup = null;
var _currencyLookup = null;
var _campaignLookup = null;
var _leadLookup = null;

Sys.Application.add_load(function() {

_customerLookup = Mscrm.FormControlInputBehavior.GetBehavior('CustomerLookup');
_currencyLookup = Mscrm.FormControlInputBehavior.GetBehavior('CurrencyLookup');
_campaignLookup = Mscrm.FormControlInputBehavior.GetBehavior('CampaignLookup');
_leadLookup = Mscrm.FormControlInputBehavior.GetBehavior('LeadLookup');
_cbOpenNew = $get("cbOpenNew");
_cbLogResponse = $get("cbLogResponse");

onSubjectInit();
});

function onSubjectInit()
{
var subjectControl = Mscrm.FormControlInputBehavior.GetBehavior("Subject");
if(IsNull(subjectControl.get_dataValue()) || subjectControl.get_dataValue() == "")
{
if ("<%=Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadOpportunity, Microsoft.Crm.Application.Security.UserInformation.Current)%>" == "True")
{
_cbOpenNew.checked = true;
}
_cbOpenNew.disabled = true;
}

<% if (defaultCampaignUnchecked == true)
{
%>
_cbLogResponse.checked = false;
campaignCheckHandler();
<%
}
%>

}



function cancel()
{
closeWindow(true);
}


function applychanges()
{

if(IsNull(_customerLookup.get_dataValue()))
{

alert(LOCID_CONV_ACT_CUST_MUST);
return;
}

if(IsNull(_currencyLookup.get_dataValue()))
{

alert(LOCID_CONV_ACT_CURRENCY_MUST);
return;
}

if(_cbLogResponse.checked)
{
if(IsNull(_campaignLookup.get_dataValue()))
{

alert(LOCID_CONV_ACT_CAMP_MUST);
return;
}
}


var ret = new Object();


ret.CustomerId          = "<%= Guid.Empty %>";
ret.CustomerType	    = 0;
ret.CampaignId          = "<%= Guid.Empty %>";
ret.CampaignType	    = 0;
ret.LeadId              = "";
ret.SaveActivity	    = false;
ret.ownerId              = "<%=Request.QueryString["ownerId"]%>";
ret.ownerType           = "<%=Request.QueryString["ownerType"]%>";
var _cbSaveActivity = $get("cbSaveActivity");
if(!IsNull(_cbSaveActivity))
{
ret.SaveActivity	= _cbSaveActivity.checked;
}
ret.OpenNewRecord	    = _cbOpenNew.checked;
ret.LogResponse		    = _cbLogResponse.checked;


var dataValue = _customerLookup.get_dataValue();
if(!IsNull(dataValue))
{
ret.CustomerId	 = dataValue[0].id;
ret.CustomerType = dataValue[0].type;
}
ret.CurrencyId = _currencyLookup.get_dataValue()[0].id;

<%
if(isForLead == true)
{
%>
if(!IsNull(_leadLookup)) {
var value = _leadLookup.get_dataValue();
if (!IsNull(value))
{
ret.LeadId = value[0].id;
}
}
<%
}
%>
var campaignValue = _campaignLookup.get_dataValue();
if(!IsNull(campaignValue))
{
ret.CampaignId	 = campaignValue[0].id;
ret.CampaignType = campaignValue[0].type;
}


Mscrm.Utilities.setReturnValue(ret);


closeWindow(true);
}

function campaignCheckHandler()
{
var campaignTd = $get("campaignTd");
if (_cbLogResponse.checked)
{
_campaignLookup.set_disabled(false);
SetFieldRequiredOrRecommended(campaignTd, Mscrm.FormFieldType.FIELD_REQUIRED, LOCID_FORM_REQUIRED_ALT);
}
else
{
_campaignLookup.Clear();
SetFieldRequiredOrRecommended(campaignTd, Mscrm.FormFieldType.FIELD_NOT_REQUIRED, "");
}
}
</script>
<style>
table
{
border-collapse:collapse;
}
</style>
<table width="100%" >
<tr class="main">
<td>

<table width="100%" style="table-layout:fixed">

<%
if(isForLead == true)
{
%>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td class="ms-crm-Field-Required">
<label for="LeadLookup"><loc:Text ResourceId="ConvertActivity_Lead_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td>
<sdk:LookupControl id="LeadLookup" AccessibilityLabelResourceId="ConvertActivity_Lead_Label" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<%
}
%>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td class="ms-crm-Field-Required">
<label for="CustomerLookup"><loc:Text ResourceId="ConvertActivity_Opportunity_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td>
<sdk:LookupControl id="CustomerLookup" AccessibilityLabelResourceId="ConvertActivity_Opportunity_Label" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td class="ms-crm-Field-Required">
<label for="CurrencyLookup"><loc:Text ResourceId="ConvertActivity_Currency_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td id="CurrencyLookup_d">
<sdk:LookupControl id="CurrencyLookup" AccessibilityLabelResourceId="ConvertActivity_Currency_Label" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<tr>
<td id="campaignTd" class="ms-crm-Field-Required">
<label for="CampaignLookup"><loc:Text ResourceId="ConvertActivity_Campaign_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label>
</td>
<td>
<sdk:LookupControl id="CampaignLookup" AccessibilityLabelResourceId="ConvertActivity_Campaign_Label" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td valign=top>
<table width="100%" style="table-layout:fixed" cellpadding="7">
<tr>
<td>
<table width="100%" cellpadding="7" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td>
<input class="checkbox" type="checkbox" id="cbOpenNew" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadOpportunity, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled")%>>
</td>
<td>
<label for="cbOpenNew"><loc:Text ResourceId="ConvertActivity_Action_OpenNewRecord" runat="server"/></td>
</td>
</tr>
<tr>
<td>
<input class="checkbox" type="checkbox" id="cbSaveActivity" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.WriteActivity, Microsoft.Crm.Application.Security.UserInformation.Current) ? "editable checked" : "disabled")%>>
</td>
<td>
<label for="cbSaveActivity"><asp:Label id="closeActivity" runat="server" /></td>
</td>
</tr>
<tr>
<td>
<input class="checkbox" type="checkbox" onclick="campaignCheckHandler();" id="cbLogResponse" <%=(Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateActivity, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.AppendActivity, Microsoft.Crm.Application.Security.UserInformation.Current) && (Microsoft.Crm.Security.User.GetPrivilege(Privileges.AppendToCampaign, Microsoft.Crm.Application.Security.UserInformation.Current) || Microsoft.Crm.Security.User.GetPrivilege(Privileges.AppendToActivity, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable checked" : "disabled")%>>
</td>
<td>
<label for="cbLogResponse"><loc:Text ResourceId="ConvertActivity_Action_LogResponse" runat="server"/></td>
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
<sdk:HiddenInputControl id="Subject" runat="server"/>
