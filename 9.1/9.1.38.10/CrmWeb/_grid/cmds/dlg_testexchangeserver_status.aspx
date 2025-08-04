<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.TestExchangeServerStatusDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:text ID="dialogTitle" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript" language="JavaScript">

var emailServerTest = null;
var mailboxId = null;
var emailServerProfileId = null;



$addHandler(window, "load", testPage_onload);
function testPage_onload() {
var oUrl = Mscrm.CrmUri.create(location.href);
mailboxId = oUrl.get_query()["mailboxId"];
emailServerProfileId = oUrl.get_query()["emailserverprofileid"];
serverType = oUrl.get_query()["servertype"];
emailServerTest = new Mscrm.EmailConnector.TestExchangeServer(mailboxId, emailServerProfileId, serverType);

window.setTimeout(Function.createDelegate(this, function () {
emailServerTest.testExchangeServerTest();
}), 0);
}

function cancel() {
closeWindow();
}

function showHideRequestResonseLog() {
document.getElementById('requestResponseLogid').value = CrmEncodeDecode.CrmHtmlDecode(XUI.Html.GetText(document.getElementById('requestResponseLogid')));
if (document.getElementById('requestResponseTextHolder').style.display == 'inline') {
document.getElementById('requestResponseTextHolder').style.display = 'none';
document.getElementById('expandCollapseIcon').className = "ms-crm-TestExchangeServerProfile-img-expand";
}
else {
document.getElementById('requestResponseTextHolder').style.display = 'inline';
document.getElementById('expandCollapseIcon').className = "ms-crm-TestExchangeServerProfile-img-collapse";
}
}

function onMouseHoverIcon(obj) {
if (obj.className != 'ms-crm-TestExchangeServerProfile-img-collapse-hover'
&& obj.className != 'ms-crm-TestExchangeServerProfile-img-collapse') {
obj.className = 'ms-crm-TestExchangeServerProfile-img-expand-hover';
}
else {
obj.className = 'ms-crm-TestExchangeServerProfile-img-collapse-hover';
}
}
function onMouseOutIcon(obj) {
if (obj.className != 'ms-crm-TestExchangeServerProfile-img-collapse-hover' &&
obj.className != 'ms-crm-TestExchangeServerProfile-img-collapse') {
obj.className = 'ms-crm-TestExchangeServerProfile-img-expand';
}
else {
obj.className = 'ms-crm-TestExchangeServerProfile-img-collapse';
}
}
</script>
</head>
<body>
<div class="ms-crm-TestExchangeServerProfile-header">
<div>
<div style="float:left;width:80%">
<table cellpadding="0" cellspacing="0" class="ms-crm-TestExchangeServerProfile-bodytable">
<tr>
<td class="ms-crm-TestExchangeServerProfile-title" tabindex="0">
<b>
<span id="dialogOptionHeadingSpan"><loc:Text ID="dialogOptionHeading" runat="server" tabindex="0"/></span>
</b>
</td>
</tr>
</table>
<table id="sitesValidationStatus" runat="server" width="50%" cellpadding="0" cellspacing="0">
<colgroup>
<col />
<col />
</colgroup>
<tr>
<td class="mscrm-text-semiBold" tabindex="0"><loc:Text ID="stepsToBeValidated" runat="server" />&nbsp;</td>
<td class="mscrm-text-regular"><label id="totalValidationSteps" tabindex="0"></label></td>
</tr>
<tr>
<td class="mscrm-text-semiBold" tabindex="0" ><loc:Text ID="statusText" runat="server" /></td>
<td class="mscrm-text-regular"><label id="validationStatusMessage" tabindex="0"><loc:Text ID="statusProgress" runat="server" /></label></td>
</tr>
<tr style="display: none" id="elapsedTimeRow">
<td class="mscrm-text-semiBold" tabindex="0" ><loc:Text ID="elapsedTime" runat="server" />&nbsp;</td>
<td class="mscrm-text-regular"><label id="elapsedTimeText" tabindex="0"></label></td>
</tr>
</table>
</div>
<div class="ms-crm-ExchangeTestGlobeIcon">
<img id="exchangeConnectionStatusImage" height="75" width="75" src="/_imgs/globe.png" alt=""/>
</div>
<div style="clear:both"></div>
</div>
</div>
<div class="ms-crm-TestExchangeServerProfile-bodyDiv">
<div class="mscrm-text-semiBold-title" tabindex="0">
<loc:text id="detailsTableHeader" runat="server" />
</div>
<table id="statusReportSectionData" class="mscrm-validateSites-TableSites" border="0" cellpadding="0" cellspacing="0">
<colgroup>
<col width="35%"/>
<col width="40%"/>
<col width="25%"/>
</colgroup>
<tr>
<td class="mscrm-validateSite-HeaderColumn"  title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.TestExchangeServerProfile.NameColumn' runat='server'/>" tabindex="0">
<loc:Text ID="nameColumn" runat="server" />
</td>
<td class="mscrm-validateSite-HeaderColumn" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.TestExchangeServerProfile.DetailColumn' runat='server'/>"  tabindex="0">
<loc:Text ID="detailColumn" runat="server" />
</td>
<td class="mscrm-validateSite-HeaderColumn" style="text-align:center" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.TestExchangeServerProfile.ValidationColumn' runat='server'/>" tabindex="0">
<loc:Text ID="validationColumn" runat="server" />
</td>
</tr>
<tr>
<td colspan="4" class="mscrm-validateSite-TableFooter">
<div id="statusDiv" class="mscrm-siteValidation-OverflowDiv" >
<table id="statusReportTable" class="mscrm-docmgmt-TableGeneric" cellpadding="0" cellspacing="0">
<colgroup>
<col width="35%"/>
<col width="40%"/>
<col width="25%"/>
</colgroup>
</table>
</div>
</td>
</tr>
</table>

<table class="ms-crm-TestExchangeServerProfile-InvalidSitesMessage" style="display:none" id="invalidSitesMessage" cellpadding="0" cellspacing="0">
<tr>
<td>
<div class="ms-crm-TestExchangeServerProfile-marginbottom" tabindex="0">
<a id ="requestResponseloglink" onclick="showHideRequestResonseLog();" style="display:none">
<img id="expandCollapseIcon" src="/_imgs/imagestrips/transparent_spacer.gif" alt="" class="ms-crm-TestExchangeServerProfile-img-collapse"
onmouseover="onMouseHoverIcon(this)"
onmouseout="onMouseOutIcon(this)" onfocus="onMouseHoverIcon(this)" onblur="onMouseOutIcon(this)"/>
<div>
<loc:Text resourceid="EmailConnector.TestExchangeServerProfile.FailureDetails" runat="server" />
</div>
</a>
</div>
<div id="requestResponseTextHolder" class="ms-crm-TestExchangeServerProfile-InvalidSitesMessage">
<textarea id="requestResponseLogid" rows="10" name="S1" cols="50" class="ms-crm-TestExchangeServerProfile-textarea" contenteditable="false"></textarea>
</div>
</td>
</tr>
</table>
<table class="ms-crm-TestExchangeServerProfile-Footer" id="validationFooter" cellpadding="0" cellspacing="0">
<tr height="25">
<td>
<div class="ms-crm-TestExchangeServerProfile-img-info" id="fwdLinkInfoImage" style="display:none">
<img src="/_imgs/error/notif_icn_info16.png" alt=""/>
</div>
<div class="ms-crm-ExchangeHelpLink" id="fwdLink" tabindex="0" style="display:none">
<loc:Text ID="fwdLinkText" runat="server" />
</div>
</td>
<td class="ms-crm-TestExchangeServerProfile-close-buttonTd">
<span class='ms-crm-RefreshDialog-Button ms-crm-TestExchangeServerProfile-Hidebutton-hover'><a href="#" target="_self" id="hideDialog" onclick="cancel()">
<loc:Text resourceid="EmailConnector.TestExchangeServerProfile.CloseButton" runat="server" /></a></span>
</td>
</tr>
</table>
</div>
</body>
</html>
