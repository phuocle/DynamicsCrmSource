<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.AddUsers.ProgressPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">




function GetNextPageDefinition() {
var oUrl = Mscrm.CrmUri.create(formatString(
"/Biz/Users/AddUsers/FinishPage.aspx?Warnings={0}&Errors={1}",
CrmEncodeDecode.CrmUrlEncode(WizardHasProperty("Warnings").toString()),
CrmEncodeDecode.CrmUrlEncode(WizardHasProperty("Errors").toString())));

return new NextPageDefinition(oUrl);
}




function getSecurityRoles() {



var saRawSecurityRoles = WizardHasProperty("SecurityRoles") ? WizardGetProperty("SecurityRoles") : new Array();



var saSecurityRoles = new Array();



saSecurityRoles.type = "guid";



for (var i = 0; i < saRawSecurityRoles.length; i++) {
saSecurityRoles.push(saRawSecurityRoles[i]);
}

return saSecurityRoles;
}







function getUserXml() {

var oUserXml = XUI.Xml.LoadXml(WizardGetProperty("UserXml"));


var sBusinessUnitId = WizardGetProperty("BusinessUnit");
var sAccessMode = WizardGetProperty("AccessMode");
var sSelectedCal = WizardGetProperty("SelectedCalValue");
var sSelectedIncoming = WizardGetProperty("SelectedIncomingEATypeValue");
var sSelectedOutgoing = WizardGetProperty("SelectedOutgoingEATypeValue");
var bIncludeAccessMode = !IsNull(sAccessMode);


var oUserNodes = XUI.Xml.SelectNodes(oUserXml, "/systemusers/systemuser", null);
for (var i = 0; i < oUserNodes.length; i++) {
var oUserNode = oUserNodes[i];


var oBusinessUnitIdNode = oUserXml.createElement("businessunitid");
XUI.Xml.SetText(oBusinessUnitIdNode, sBusinessUnitId);
oUserNode.appendChild(oBusinessUnitIdNode);




if (bIncludeAccessMode) {
var oAccessModeNode = oUserXml.createElement("accessmode");
XUI.Xml.SetText(oAccessModeNode, sAccessMode);
oUserNode.appendChild(oAccessModeNode);


var oCalTypeNode = oUserXml.createElement("caltype");
XUI.Xml.SetText(oCalTypeNode, sSelectedCal);
oUserNode.appendChild(oCalTypeNode);

}
if(!IsNull(sSelectedIncoming) && sSelectedIncoming!="")
{
var oIncomingEATypeNode = oUserXml.createElement("incomingemaildeliverymethod");
XUI.Xml.SetText(oIncomingEATypeNode, sSelectedIncoming);
oUserNode.appendChild(oIncomingEATypeNode);
}
if (!IsNull(sSelectedOutgoing) && sSelectedOutgoing != "")
{
var oOutgoingEATypeNode = oUserXml.createElement("outgoingemaildeliverymethod");
XUI.Xml.SetText(oOutgoingEATypeNode, sSelectedOutgoing);
oUserNode.appendChild(oOutgoingEATypeNode);
}

var provider = WizardGetProperty("Provider");
if (!IS_LIVE && provider != null && provider == "2") {

var emailNode = XUI.Xml.SelectSingleNode(oUserNode, "internalemailaddress", null);
if (emailNode != null) {
var domainNode = oUserXml.createElement("domainname");
XUI.Xml.SetText(domainNode, XUI.Xml.GetText(emailNode));
oUserNode.removeChild(emailNode);
oUserNode.appendChild(domainNode);
}
var firstNameNode = XUI.Xml.SelectSingleNode(oUserNode, "firstname", null);
var lastNameNode = XUI.Xml.SelectSingleNode(oUserNode, "lastname", null);
if (firstNameNode != null && lastNameNode != null) {
var fullNameNode = oUserXml.createElement("fullname");
XUI.Xml.SetText(fullNameNode, XUI.Xml.GetText(firstNameNode) + " " + XUI.Xml.GetText(lastNameNode));
oUserNode.appendChild(fullNameNode);
}
}

}


return CrmEncodeDecode.CrmXmlEncode(XUI.Xml.XMLSerializer.serializeToString(oUserXml));
}




function submitWizard() {


var bSendInvitation = WizardHasProperty("SendInvitation") ? WizardGetProperty("SendInvitation") : false;

var oCommand = new RemoteCommand("UserManager", "AddUsers");
oCommand.SetXmlParameter("userXml", getUserXml());
oCommand.SetParameter("roles", getSecurityRoles());
oCommand.SetParameter("sendInvitation", bSendInvitation);

oCommand.Execute(submitWizardDone);
}




function submitWizardDone(oResult) {
var iUsersAdded = 0;
var iUsersNotAdded = 0;
var saErrors = null;
var saWarnings = null;

if (oResult.Success == ERROR_NONE) {
with (oResult.ReturnValue) {
iUsersAdded = UsersAdded;
iUsersNotAdded = UsersNotAdded;
saErrors = normalizeArray(Errors.string);
saWarnings = normalizeArray(Warnings.string);
}
}

WizardSetProperty("UsersAdded", iUsersAdded);
WizardSetProperty("UsersNotAdded", iUsersNotAdded);
WizardSetProperty("Errors", saErrors);
WizardSetProperty("Warnings", saWarnings);

WizardNavigate(_WizardNavigateEnum.NEXT);
}







function normalizeArray(oResult) {
if (IsNull(oResult)) {
return null;
}

return isArray(oResult) ? oResult : new Array(oResult);
}




window.setTimeout(submitWizard, 100);
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table class="stdTable">
<tr>
<td class="ms-crm-AddUsers-Progress">
<img alt="" src="/_imgs/AdvFind/progress.gif" /><br />
<loc:Text ResourceId="AddUsersWizard.ProgressPage.Message" runat="server"/>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>
