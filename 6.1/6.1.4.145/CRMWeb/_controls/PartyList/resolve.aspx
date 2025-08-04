<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Controls.PartyList.PartyListResolvePage" CodeBehind="Microsoft.Crm.Application.Pages.dll"%>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="System.Web" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">
var _newReturnObject = null;


function returnClass()
{
this.existing = false;
this.id = null;
this.type = null;
this.name = null;
}

function applychanges()
{
var returnObject = new returnClass();

if ($get('rdoNew').checked)
{
if (_newReturnObject)
{
returnObject.existing = false;
returnObject.id = _newReturnObject.id;
returnObject.type = _newReturnObject.type;
returnObject.name = _newReturnObject.name;
}
else
{
alert(LOCID_CREATE_RECORD_FIRST);
return;
}
}
else {

var lookupBehavior = Mscrm.FormControlInputBehavior.GetElementBehavior($get('crmExistingLookup'));
if (!IsNull(lookupBehavior) && !IsNull(lookupBehavior.get_dataValue()))
{
var data = lookupBehavior.get_dataValue();
returnObject.existing = true;
returnObject.id = data[0].id;
returnObject.type = data[0].type;
returnObject.name = data[0].name;
}
else
{
alert(LOCID_SELECT_EXISTING_RECORD);
return;
}
}
Mscrm.Utilities.setReturnValue(returnObject);
closeWindow();
}

function cancel()
{
closeWindow();
}

function OpenCreate()
{
var sEmailAddress = $get('txtName').value;
var typeControl = Mscrm.FormControlInputBehavior.GetBehavior("selectQuickCreate")
var iObjectType = typeControl.get_dataValue();

var emailAttributeNode = typeControl.get_selectedOption().attributes["primaryemail"];

if (!IsNull(emailAttributeNode) && emailAttributeNode.value != "")
{
openObj(iObjectType, null, CrmEncodeDecode.CrmUrlEncode(emailAttributeNode.value) + "=" + CrmEncodeDecode.CrmUrlEncode(sEmailAddress));
}
else
{
openObj(iObjectType, null, "emailaddress1=" + CrmEncodeDecode.CrmUrlEncode(sEmailAddress));
}
}


function auto(iObjectTypeCode, sDisplayName, sId)
{
var returnObject = new Object();
returnObject.type = iObjectTypeCode;
returnObject.name = sDisplayName;
returnObject.id = sId;

var img = parent.document.createElement("IMG");
img.className = "ms-crm-Lookup-Item";
img.alt = "";
img.src = "/_imgs/ico_16_" + returnObject.type + ".gif";


var e = parent.document.createElement("SPAN");
e.className = "ms-crm-LookupItem-Name ms-crm-Lookup-Item";
e.setAttribute("oid",returnObject.id);
e.setAttribute("otype",returnObject.type);
XUI.Html.SetText(e, returnObject.name);
e.setAttribute("onclick","openObj(this.getAttribute('otype'), this.getAttribute('oid'))");

$get('divResolveDisplay').innerHTML = XUI.Html.GetOuterHTML(img) + XUI.Html.GetOuterHTML(e);


_newReturnObject = returnObject;
}

function optionClick()
{

Mscrm.FormControlInputBehavior.GetElementBehavior($get('crmExistingLookup')).set_disabled($get('rdoNew').checked);
var rdoExistingBut = $get('rdoExisting');


$get('tblResolvedTo').disabled = rdoExistingBut.checked;
$get('tblResolvedNew').disabled = rdoExistingBut.checked;
$get('btnQuickCreate').disabled = rdoExistingBut.checked;
var selectQuickCreate = $get('selectQuickCreate');
var divResolveDisplay = $get('divResolveDisplay');
if (rdoExistingBut.checked)
selectQuickCreate.disabled = true;
else
selectQuickCreate.disabled = false;
divResolveDisplay.disabled = rdoExistingBut.checked;

divResolveDisplay.className = (rdoExistingBut.checked ? "ms-crm-Lookup ms-crm-ReadOnly ms-crm-Lookup-ReadOnly" : "ms-crm-Lookup");
}
</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">

<table cellspacing="0" cellpadding="2" width="100%" style="table-layout:fixed" >
<col width="100"><col>
<tr>
<td><label for="txtName"><loc:Text ResourceId="Web.Activities.email.resolve.aspx_124" runat="server"/></label></td>
<td><input readonly runat="server" type="text" id="txtName"></td>
</tr>
</table>
<table cellspacing="0" cellpadding="2" width="100%">
<tr><td colspan="2" style="border-bottom: 1px solid #A4ABB2;">&nbsp;</td></tr>
<tr><td>&nbsp;</td></tr>

<tr>
<td valign="top">
<input checked class="radio" type="radio" name="type" id="rdoExisting" onclick="optionClick()">
</td>
<td valign="top">
<label class="ms-crm-Emphasis-Strong" for="rdoExisting"><loc:Text ResourceId="Web.Activities.email.resolve.aspx_136" runat="server"/></label>
</td>
</tr>

<tr>
<td></td>
<td valign="top" height="35px">
<sdk:LookupControl id="crmExistingLookup" LookupStyle="single" runat="server"/>
</td>
</tr>

<tr>
<td valign="top">
<input class="radio" type="radio" name="type" id="rdoNew" onclick="optionClick()">
</td>
<td valign="top">
<label class="ms-crm-Emphasis-Strong" for="rdoNew"><loc:Text ResourceId="Web.Activities.email.resolve.aspx_154" runat="server"/></label>
</td>
</tr>

<tr>
<td></td>
<td valign="top" height="35px">
<table id="tblResolvedNew" cellspacing="0" cellpadding="0" disabled style="width:100%">
<tr>
<td width="80"><label for="selectQuickCreate">
<loc:Text ResourceId="Web.Activities.email.resolve.aspx_166" runat="server"/>
</label></td>
<td width="100">
<crm:Select id="selectQuickCreate" runat="server" Disabled="true" />
</td>
<td class="prtylist_resolve_BtnQuickCreate">
&nbsp;<crm:Button Disabled=true runat="server" ID="btnQuickCreate" OnClick="OpenCreate()" ResourceId="Web.Activities.email.resolve.aspx_178_1"></crm:Button>
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td></td>
<td valign="top" height="35px">
<table id="tblResolvedTo" width="100%" cellspacing="0" cellpadding="0" disabled>
<tr>
<td width="80"><loc:Text ResourceId="Web.Activities.email.resolve.aspx_190" runat="server"/></td>
<td><div class="ms-crm-Lookup ms-crm-ReadOnly ms-crm-Lookup-ReadOnly" id="divResolveDisplay"></div></td>
</tr>
</table>
</td>
</tr>
</table>

</frm:DialogForm>
</body>
</html>
