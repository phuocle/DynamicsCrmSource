<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.ConfirmMSTeamsFeatureDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-RefreshDialog-Header {
height: 60px !important;
}

.ms-crm-RefreshDialog-Main {
top: 55px;
}

.informationContainerStyle {
text-align: center;
font-size: 11px;
line-height: 14px;
margin: 0 70px;
color: #333333;
}

.processingIndicatorContainerStyle {
padding-top: 20px;
}

.processingIndicatorElementStyle {
height: 24px;
width: 24px;
}
</style>

<script language="JavaScript">
var isInlineDialog = window != top;

var processingDescriptionMessage = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(ProcessingDescriptionMessage)%>");
var successDescriptionMessage = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(SuccessDescriptionMessage)%>");
var finishButtonText = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FinishButtonText)%>");
var failedDescriptionMessage = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FailedDescriptionMessage)%>");
var failedHelpDescriptionMessage = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FailedHelpDescriptionMessage)%>");
var sharePointErrorDescriptionMessage = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(SharePointErrorDescriptionMessage)%>");
var entityLogicalNameList = ('<%=GetEntityLogicalNames%>');

var isRetryOkay = false;
var anyErrorOccurred = false;

function applychanges() {
if (isRetryOkay) {
if (anyErrorOccurred) {
cancel()
}
else {
apply();
}
}
else {
showLoadingAndApplyChange();
}
}

function apply() {
window.returnValue = true;
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

function cancel() {
window.returnValue = false;
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

function showLoadingAndApplyChange() {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.hideConfimationMessageAndFooterButton();
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.showLoader("informationContainerStyle", "processingIndicatorContainerStyle", "processingIndicatorElementStyle", processingDescriptionMessage);
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.setMessages(successDescriptionMessage, finishButtonText, failedDescriptionMessage, failedHelpDescriptionMessage, sharePointErrorDescriptionMessage);
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.enableSharePointForMSTeams(entityLogicalNameList).then(function (result) {
if (result) {
setFlag(true, false);
}
else {
setFlag(true, true);
}
});
}

function setFlag(isRetryOkayValue, anyErrorOccurredValue) {
isRetryOkay = isRetryOkayValue;
anyErrorOccurred = anyErrorOccurredValue;
}

</script>
</head>

<body>

<frm:DialogForm id="crmForm" runat="server">
<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<%=dialogBody%>
</td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
