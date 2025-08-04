<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.SelectUsersPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">




function GetNextPageDefinition()
{
var oUrl = Mscrm.CrmUri.create("/Biz/Users/AddUsers/ProgressPage.aspx");
return new NextPageDefinition(oUrl);
}




function lookupChange()
{
var oaLookupItems = _newUsers.Items(true, true);
var iValidItemCount = 0;
var iChangedItemCount = 0;

for (var i = 0; i < oaLookupItems.length; i++)
{
var oLookupItem = oaLookupItems[i];
if (IsNull(oLookupItem.category) || isNaN(oLookupItem.category) || oLookupItem.category == LookupItemCategories.NONE)
{
if (oLookupItem.onclick != "")
{
oLookupItem.onclick = "";
iChangedItemCount++;
}

iValidItemCount++;
}
}

if (iChangedItemCount > 0)
{
_newUsers.set_dataValue(oaLookupItems);
}


WizardSetButtonEnabled(oaLookupItems.length > 0 && iValidItemCount == oaLookupItems.length, _WizardButtonsEnum.NEXTBUTTON);
}




function moveNext()
{

var oStringBuilder = new StringBuilder();


oStringBuilder.Append("<systemusers>");


var oaLookupItems = _newUsers.get_dataValue();
if (!IsNull(oaLookupItems))
{
for (var i = 0; i < oaLookupItems.length; i++)
{
var oLookupItem = oaLookupItems[i];

oStringBuilder.Append("<systemuser>");

for (var j = 0; j < oLookupItem.values.length; j++)
{
var oValue = oLookupItem.values[j];
var sName = oValue.name.replace("_Value","").replace("_Hidden","");
var sValue = oValue.value
if (sValue)
{
sValue = Trim(sValue);
}




if (sName !== "systemuserid" && sValue && sValue.length > 0)
{
var sEncodedName = CrmEncodeDecode.CrmXmlEncode(sName);
oStringBuilder.Append("<");
oStringBuilder.Append(sEncodedName);
oStringBuilder.Append(">");
oStringBuilder.Append(CrmEncodeDecode.CrmXmlEncode(sValue));
oStringBuilder.Append("</");
oStringBuilder.Append(sEncodedName);
oStringBuilder.Append(">");
}
}

oStringBuilder.Append("</systemuser>");
}
}


oStringBuilder.Append("</systemusers>");


WizardSetProperty("UserXml", oStringBuilder.ToString());


WizardSetProperty("UserLookup", _newUsers.get_dataValue());

WizardNavigate(_WizardNavigateEnum.NEXT);
}

var _newUsers = null;




function selectUsersPage_onload() {
_newUsers = Mscrm.FormControlInputBehavior.GetBehavior('newUsers');
_newUsers.AddParam("ldapPath", WizardGetProperty("UserContainer"));
_newUsers.AddParam("ShowNewButton", "0");
_newUsers.AddParam("DisableContextMenu", "1");
_newUsers.add_change(lookupChange);

if (WizardHasProperty("UserLookup"))
{

_newUsers.set_dataValue(WizardGetProperty("UserLookup"));


WizardSetButtonEnabled(true, _WizardButtonsEnum.NEXTBUTTON);
}
else
{


WizardSetButtonEnabled(false, _WizardButtonsEnum.NEXTBUTTON);
}
}


Sys.Application.add_load(selectUsersPage_onload);
</script>
<style type="text/css">
DIV.ms-crm-Lookup
{
height: 35px;
}
INPUT.ms-crm-Normal
{
height: 32px !important;
}
TD.Lookup_RenderButton_td
{
vertical-align: top;
}
</style>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<div class="ms-crm-AddUsers-SelectUsers-LookupContainer">
<sdk:LookupControl id="newUsers" DefaultViewId="1468F00B-1618-42db-8445-D08A8E487890" LookupBrowse="true" LookupStyle="multi" MaxUnresolvedTextLength="3000" DisableViewPicker="true" runat="server" />
</div>
</frm:WizardForm>
</body>
</html>
