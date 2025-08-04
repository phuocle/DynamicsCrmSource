<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.CreateDetailDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="JavaScript">
Sys.Application.add_load(Pageload);
var txtName = null;
var txtBaseName = null;
var butBegin = null;
var transactioncurrencyid = null;
function Pageload()
{
$addHandler(document, 'keydown', documentkeydown);

txtName = Mscrm.FormControlInputBehavior.GetBehavior("txtName");
txtBaseName = Mscrm.FormControlInputBehavior.GetBehavior("txtBaseName");
butBegin = $get("butBegin");
transactioncurrencyid = Mscrm.FormControlInputBehavior.GetBehavior('transactioncurrencyid');
butBegin.disabled = true;
$addHandler($get('txtName'), "keyup", toggleCmdOk);

<%if(_ObjType == Util.UoMSchedule){%>
$addHandler($get('txtBaseName'), "keyup", toggleCmdOk);
<%}else{%>
$addHandler($get('isamounttype'), "change", toggleCurLkUp);
transactioncurrencyid.add_change(toggleCmdOk);
toggleCurLkUp();
<%}%>
txtName.setFocus();
}

function documentkeydown(eventObj)
{
if (eventObj.target.id != "cmdDialogCancel" && eventObj.keyCode == KEY_ENTER && !butBegin.disabled)
{
eventObj.preventDefault();

applychanges();
}
}

function toggleCmdOk()
{

var amountTypeValue = null;
if(!IsNull(Mscrm.FormControlInputBehavior.GetBehavior("isamounttype")))
{
amountTypeValue = Mscrm.FormControlInputBehavior.GetBehavior("isamounttype").get_dataValue();
}
if (!IsNull(txtName.get_dataValue()) <% if (_ObjType == Util.UoMSchedule){ %> && !IsNull(txtBaseName.get_dataValue()) <%}else{%> && ((amountTypeValue == 0) || (amountTypeValue == 1 && !IsNull(Mscrm.FormControlInputBehavior.GetBehavior("transactioncurrencyid").get_dataValue())))<%}%>)
{
butBegin.disabled = false;
}
else
{
butBegin.disabled = true;
}
}

function toggleCurLkUp()
{

var amountTypeValue = Mscrm.FormControlInputBehavior.GetBehavior("isamounttype").get_dataValue();
var trCurrency = $get("trCurrency");
if(amountTypeValue == "0")
{
transactioncurrencyid.tabIndex = -2;
trCurrency.style.display = "none";

}
else
{
trCurrency.style.display = "";
transactioncurrencyid.tabIndex = 3;
}

toggleCmdOk();
}

function applychanges()
{
var oUrl = getObjUrl(<%= _ObjType.ToString("D", CultureInfo.InvariantCulture) %>);
oUrl.get_query()["name"] = txtName.get_dataValue();
var s = oUrl.toString();

<%
switch (_ObjType)
{
case Util.UoMSchedule:
%>
s += "&_basename=" + CrmEncodeDecode.CrmUrlEncode(txtBaseName.get_dataValue()) + <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/userdefined/edit.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %>;
<%
break;

case Util.DiscountType:
%>
var amountTypeValue = Mscrm.FormControlInputBehavior.GetBehavior("isamounttype").get_dataValue();
var transactionCurrencyValue = Mscrm.FormControlInputBehavior.GetBehavior("transactioncurrencyid").get_dataValue();

if(amountTypeValue == "1" && !IsNull(transactionCurrencyValue))
{
s += "&transactioncurrencyid=" + transactionCurrencyValue[0].id;
}

s += "&isamounttype=" + $get("isamounttype").value + <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CurrentWrpcContext.GetWrpcTokenAsQueryString(Microsoft.Crm.Application.Utility.CrmUri.Create("/userdefined/edit.aspx", Microsoft.Crm.Application.Security.UserInformation.Current))) %>;
<%
break;
}
%>
Mscrm.Utilities.setReturnValue(s);
closeWindow(true);
}

function cancel()
{
closeWindow();
}

</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">

<table cellspacing="0" cellpadding="3" width="100%">
<col width="40%"><col width="60%">
<tr>
<td class="ms-crm-Field-Required" id="name_c"><label for="txtName">
<loc:Text ResourceId="Tools.productcatalog.dlg_create.aspx_114" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
</label></td>
<td>
<sdk:TextBoxControl id="txtName" TabIndex="1" runat="server"/>
</td>
</tr>

<%
switch (_ObjType)
{
case Util.UoMSchedule:
%>
<tr>
<td class="ms-crm-Field-Required" id="basename_c"><label for="txtBaseName">
<loc:Text ResourceId="Tools.productcatalog.dlg_create.aspx_128" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
</label></td>
<td>
<sdk:TextBoxControl id="txtBaseName" MaxLength="100" TabIndex="2" runat="server"/>
</td>
</tr>
<%
break;

case Util.DiscountType:
%>
<tr>
<td class="ms-crm-Field-Required" id="type_c"><label for="isamounttype">
<loc:Text ResourceId="Tools.productcatalog.dlg_create.aspx_144" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
</label></td>
<td>
<ui:Select id="isamounttype" TabIndex="2" runat="server"/>
</td>
</tr>
<tr id="trCurrency">
<td class="ms-crm-Field-Required" id="transactioncurrencyid_c"><label for="transactioncurrencyid">
<loc:Text ResourceId="Tools.productcatalog.dlg_create.aspx_145" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/>
</label></td>
<td>
<sdk:LookupControl id="transactioncurrencyid" AccessibilityLabelResourceId="Tools.productcatalog.dlg_create.aspx_145" LookupStyle="single" TabIndex="1" runat="server"/>

</td>
</tr>
<%
break;
}
%>
</table>

</frm:DialogForm>
</body>
</html>
