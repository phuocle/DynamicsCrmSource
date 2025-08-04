<%@ Page Language="c#" Inherits="Microsoft.Crm.Marketing.Application.Pages.MA.QuickCampaignPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ register tagprefix="frm" namespace="Microsoft.Crm.Application.Forms" assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript" type="text/javascript">





attachWindowOnBeforeUnload(WizardCloseMessage, parent.window);

function GetNextPageDefinition() {
var oUrl = Mscrm.CrmUri.create("/MA/minicampaign/CampaignName.aspx");
return new NextPageDefinition(oUrl);
}

function WizardCloseMessage(oEvent) {
oEvent = oEvent.rawEvent;
oEvent.returnValue = " ";
return " ";
}

function moveNext() {
detachWindowOnBeforeUnload(WizardCloseMessage, parent.window);
WizardNavigate(_WizardNavigateEnum.NEXT);
}
</script>
</head>
<body>
<frm:WizardForm id="crmForm" runat="server">
<table width="100%" cellpadding="0" cellspacing="0">
<tr valign="top">
<td class="MiniCampaign_td_PageBody1">
<table width="100%" cellpadding="0" cellspacing="0">
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<loc:text id="Text8" resourceid="MC_MSG_WizardUsage" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<span style="color: #333333;">
<loc:text id="Text9" resourceid="MC_MSG_WizardSteps" runat="server" />
</span>
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
<tr valign="top">
<td>
<ul>
<li>
<loc:text id="Text10" resourceid="MC_MSG_WizardSteps_ChooseActivity" runat="server" />
<li>
<loc:text id="Text11" resourceid="MC_MSG_WizardSteps_AssignActivity" runat="server" />
<li>
<loc:text id="Text12" resourceid="MC_MSG_WizardSteps_SupplyContent" runat="server" />
</ul>
</td>
</tr>
<tr valign="top">
<td>
<loc:text id="Text13" resourceid="MC_MSG_WizardSteps_Continue" runat="server" />
</td>
</tr>
<tr height="20">
<td>
&nbsp;
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:WizardForm>
</body>
</html>