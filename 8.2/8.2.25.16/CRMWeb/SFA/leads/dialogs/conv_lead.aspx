<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Sfa.Dialogs.ConvertLead" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script language="javascript">
var _crmOwnerLookup ;
var _crmCurrencyLookup ;
var butBegin;
var cbShowNew;
var cbAddAccount;
var cbAddContact;
var cbAddOpportunity;
var lbSelectParent;

Sys.Application.add_load(windowOnLoad);
function windowOnLoad( )
{
_crmOwnerLookup = Mscrm.FormControlInputBehavior.GetBehavior("crmOwnerLookup");
_crmCurrencyLookup = Mscrm.FormControlInputBehavior.GetBehavior("crmCurrencyLookup");
butBegin = $get("butBegin");
cbShowNew = $get("cbShowNew");
cbAddAccount = $get("cbAddAccount");
cbAddContact = $get("cbAddContact");
cbAddOpportunity = $get("cbAddOpportunity");
lbSelectParent = $get("lbSelectParent");

_crmOwnerLookup.add_change(updateUIState);
_crmCurrencyLookup.add_change(updateUIState);


butBegin.disabled = true;
$get("radQualify").focus();

<%
if((Request.QueryString["checkShowNew"] != null) && (Request.QueryString["checkShowNew"] == "true"))
{
%>
cbShowNew.checked = true;
<%
}
else
{
%>
cbShowNew.checked = false;
<%
}
%>


updateUIState();
}

function cancel( )
{
closeWindow(true);
}


function applychanges()
{
var ret = new Object();
var datavalue = _crmOwnerLookup.get_dataValue();

ret.qualify          = $get("radQualify").checked;
ret.unqualify        = $get("radUnqualify").checked;
ret.account	         = cbAddAccount.checked;
ret.contact	         = cbAddContact.checked;
ret.opportunity	     = cbAddOpportunity.checked;


if(cbAddOpportunity.checked && !IsNull(datavalue) && !cbAddContact.checked && !cbAddAccount.checked)
{
with(datavalue[0])
{
if(type == Account)
{
ret.parentAccount    = id;
ret.parentContact    = "";
}
else
{
ret.parentContact    = id;
ret.parentAccount    = "";
}
}
}
else
{
ret.parentContact    = "";
ret.parentAccount    = "";
}

ret.showNew	         = cbShowNew.checked;
ret.unqualifyStatus  = Mscrm.FormControlInputBehavior.GetBehavior("selStatus").get_dataValue();
ret.qualifyStatus  = Mscrm.FormControlInputBehavior.GetBehavior("selQualifyStatus").get_dataValue();

var sCustParams = "";

if( ret.qualify )
{
sCustParams = "&qualify=" + true ;


if( ret.parentAccount )
{
sCustParams += "&qlShowNew=" + ret.showNew;
sCustParams += "&qlCreateAccount=" + ret.account;
sCustParams += "&qlCreateContact=" + ret.contact;
sCustParams += "&qlCreateOpportunity=" + ret.opportunity;
sCustParams += "&qlOpportunityParentType=1"
sCustParams += "&qlOpportunityParentId=" + ret.parentAccount;
}
else if( ret.parentContact )
{
sCustParams += "&qlShowNew=" + ret.showNew;
sCustParams += "&qlCreateAccount=" + ret.account;
sCustParams += "&qlCreateContact=" + ret.contact;
sCustParams += "&qlCreateOpportunity=" + ret.opportunity;
sCustParams += "&qlOpportunityParentType=2"
sCustParams += "&qlOpportunityParentId=" + ret.parentContact;
}
else
{
sCustParams += "&qlShowNew=" + ret.showNew;
sCustParams += "&qlCreateAccount=" + ret.account;
sCustParams += "&qlCreateContact=" + ret.contact;
sCustParams += "&qlCreateOpportunity=" + ret.opportunity;
sCustParams += "&qlOpportunityParentType=" + "-1";
}

if(cbAddOpportunity.checked)
{
var datavalue = _crmCurrencyLookup.get_dataValue();
ret.OppCurrencyId = datavalue[0].id;
sCustParams += "&qlOppCurrencyId=" + ret.OppCurrencyId;
}
sCustParams += "&ulNewStatus=" + ret.qualifyStatus;
}

else
{
sCustParams = "&qualify=" + false;
sCustParams += "&ulNewStatus=" + ret.unqualifyStatus;
}
sCustParams+="&qlForSalesRefresh=" + false;

ret.sCustParams = sCustParams;

Mscrm.Utilities.setReturnValue(ret);
closeWindow(true);
}

function lookupParent(fldName, fldId )
{
var sXml = openStdDlg(Mscrm.CrmUri.create("/_forms/Lookup/subject.aspx?multiselect=0"), null, 398, 508);

var oXml = XUI.Xml.LoadXml(sXml);

if( XUI.Xml.GetText(oXml) != "" )
{
fldName.innerHTML	= "<img alt='' src='/_imgs/ico_18_129.gif' align='absmiddle' class='icon'>" + XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXml, "/objects/subject/name", null));
XUI.Html.SetText(fldId, XUI.Xml.GetText(XUI.Xml.SelectSingleNode(oXml, "/objects/subject/subjectid", null)));
}
}

function updateUIState( )
{
_crmCurrencyLookup.set_disabled(true);
$get("lbSelectCurrency").disabled = true;

if( $get("radUnqualify").checked )
{
cbAddAccount.disabled = true;
cbAddContact.disabled = true;
cbAddOpportunity.disabled = true;
cbShowNew.disabled = true;
_crmOwnerLookup.set_disabled(true);
lbSelectParent.disabled = true;

Mscrm.FormControlInputBehavior.GetBehavior("selStatus").set_disabled(false);
Mscrm.FormControlInputBehavior.GetBehavior("selQualifyStatus").set_disabled(true);
lbSelectParent.disabled = true;
$get("lbSelectStateCode").disabled = false;
$get("lbSelectQualifyStateCode").disabled = true;

butBegin.disabled = false;
}
else
{
if ( cbAddAccount.getAttribute("editable") != undefined)
{
cbAddAccount.disabled = false;
}

if ( cbAddContact.getAttribute("editable") != undefined)
{
cbAddContact.disabled = false;
}

if ( cbAddOpportunity.getAttribute("editable") != undefined)
{
cbAddOpportunity.disabled = false;
_crmOwnerLookup.set_disabled(false);
lbSelectParent.disabled = false;
}

<%
if((Request.QueryString["showNew"] != null) && (Request.QueryString["showNew"] == "0"))
{
%>
cbShowNew.disabled = true;
<%
}
else
{
%>
cbShowNew.disabled = false;
<%
}
%>
Mscrm.FormControlInputBehavior.GetBehavior("selStatus").set_disabled(true);
Mscrm.FormControlInputBehavior.GetBehavior("selQualifyStatus").set_disabled(false);

if( cbAddOpportunity.checked && !cbAddContact.checked && !cbAddAccount.checked )
{
lbSelectParent.disabled = true;
_crmOwnerLookup.set_disabled(false);
lbSelectParent.disabled = false;
}
else
{
lbSelectParent.disabled = false;
_crmOwnerLookup.set_disabled(true);
lbSelectParent.disabled = true;
}

if( cbAddOpportunity.checked )
{
_crmCurrencyLookup.set_disabled(false);
$get("lbSelectCurrency").disabled = false;

if( (cbAddContact.checked || cbAddAccount.checked || _crmOwnerLookup.get_dataValue() != null) && _crmCurrencyLookup.get_dataValue() != null )
{
butBegin.disabled = false;
}
else
{
butBegin.disabled = true;
}
}
else if( cbAddContact.checked || cbAddAccount.checked )
{
butBegin.disabled = false;
}
else
{
butBegin.disabled = true;
}

$get("lbSelectStateCode").disabled = true;
$get("lbSelectQualifyStateCode").disabled = false;
}
}
</script>

<table width="100%">
<tr class="main">
<td>

<table width="100%" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td rowspan="3" valign="top">
<input class="radio" tabindex="1" type="radio" id="radQualify" name="radQualifyGroup" onclick="updateUIState()" <%= _canConvertLead ? "editable checked" : "disabled"%>>
</td>
<td>
<label for="radQualify" style="FONT-WEIGHT: <%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"><loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_162" runat="server"/></label>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<col width="60"><col>
<tr>
<td>
<label id="lbSelectQualifyStateCode" for="selQualifyStatus"><loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_165" runat="server"/></label>
</td>
<td>
<sdk:PicklistStatusControl tabindex="2" id="selQualifyStatus" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td>
<input class="checkbox" tabindex="3" type="checkbox" id="cbAddAccount" onclick="updateUIState()" <%= (Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateAccount, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable" : "disabled" %>>
</td>
<td>
<label for="cbAddAccount"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Account, NameFormatStyle.Singular)) %></label>
</td>
</tr>
<tr>
<td>
<input class="checkbox" tabindex="4" type="checkbox" id="cbAddContact" onclick="updateUIState()" <%= (Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateContact, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable" : "disabled" %>>
</td>
<td>
<label for="cbAddContact"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Contact, NameFormatStyle.Singular)) %></label>
</td>
</tr>
<tr>
<td>
<input class="checkbox" tabindex="5" type="checkbox" id="cbAddOpportunity" onclick="updateUIState()" <%= (Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateOpportunity, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "editable" : "disabled" %>>
</td>
<td>
<label for="cbAddOpportunity"><% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Microsoft.Crm.Application.Utility.WebUtility.GetFmtObjName(Util.Opportunity, NameFormatStyle.Singular)) %></label>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>
<table width="100%" style="table-layout:fixed">
<col width="130"><col>
<tr>
<td class="ms-crm-Field-Normal" id="lbSelectParent"><label for="crmOwnerLookup">
<loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_135" runat="server"/>
</label></td>
<td>
<sdk:LookupControl tabindex="6" id="crmOwnerLookup" LookupStyle="single" AccessibilityLabelResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_135" runat="server"/>
</td>
</tr>
<tr>
<td class="ms-crm-Field-Normal" id="lbSelectCurrency"><label for="crmCurrencyLookup">
<loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_136" runat="server"/>
</label></td>
<td id="crmCurrencyLookup_d">
<sdk:LookupControl tabindex="7" id="crmCurrencyLookup" LookupStyle="single" AccessibilityLabelResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_136" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="2">
&nbsp;
</td>
</tr>
<tr>
<td>
<input class="checkbox" tabindex="8" type="checkbox" id="cbShowNew">
</td>
<td>
<label for="cbShowNew"><loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_145" runat="server"/></label>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
<tr class="main">
<td>

<table width="100%" style="table-layout:fixed">
<col width="26"><col>
<tr>
<td rowspan="2" valign="top">
<input class="radio" type="radio" tabindex="9" id="radUnqualify" name="radQualifyGroup" onclick="updateUIState()" <%if( !_canConvertLead ){%>checked<%}%>>
</td>
<td>
<label for="radUnqualify" style="FONT-WEIGHT: <%= Microsoft.Crm.Application.Utility.WebUtility.GetFontResourceAttribute("General.Bold.font_weight") %>"><loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_155" runat="server"/></label>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout:fixed">
<col width="60"><col>
<tr>
<td>
<label disabled id="lbSelectStateCode" for="selStatus"><loc:Text ResourceId="Web.SFA.leads.dialogs.conv_lead.aspx_165" runat="server"/></label>
</td>
<td>
<sdk:PicklistStatusControl tabindex="10" Disabled="true" id="selStatus" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
