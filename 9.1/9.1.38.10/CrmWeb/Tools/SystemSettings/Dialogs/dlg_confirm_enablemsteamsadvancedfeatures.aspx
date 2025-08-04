<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.ConfirmMSTeamsAdvancedFeaturesDialog" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>

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

var ConsentLoader = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(ConsentLoader))%>");
var ConsentWindowClosed = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(ConsentWindowClosed))%>");
var ConsentWindowClosedHelp = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(ConsentWindowClosedHelp))%>");
var TenantAdminCheckLoader = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(TenantAdminCheckLoader))%>");
var TenantAdminFailure = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(TenantAdminFailure))%>");
var TenantAdminFailureHelp = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(TenantAdminFailureHelp))%>");
var FeatureSuccess = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FeatureSuccess))%>");
var FeatureFailure = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FeatureFailure))%>");
var FeatureFailureHelp = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(FeatureFailureHelp))%>");
var AdvancedFeatureName = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(AdvancedFeatureName)%>");
var CollaborationFeature = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(AdvancedFeature.MSTeamsCollaboration.ToString())%>");
var UserSyncFeature = ("<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(AdvancedFeature.MSTeamsUserSync.ToString())%>");
var isTenantAdmin = (<%=(isTenantAdmin ? "true" : "false")%>);
var MSTeamsTabServiceURL = ("<%=(Microsoft.Crm.CrmEncodeDecode.CrmHtmlDecode(MSTeamsTabServiceURL))%>");

var isRetryOkay = false;
var anyErrorOccurred = false;

var finishButtonText = 'Finish';
var TabConsentPage = '/Home/CollabConsentStart';
var intervalId;

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

function showLoadingAndApplyChange(){

if (AdvancedFeatureName==CollaborationFeature) {            ShowLoader(ConsentLoader);            }

var childWindow = window.open(MSTeamsTabServiceURL + TabConsentPage + '?ConsentType=' + GetConsentQueryParam(), '_blank', 'height=570,width=520, left='+((screen.width - 520) / 2)+', top=' + ((screen.height - 570) / 2));

Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("ConsentWindow","Consent Window opened for "+ GetConsentQueryParam());


intervalId = window.setInterval(TimeoutConsentResponse, 1000, childWindow);


window.addEventListener('message', function (event)
{
window.clearInterval(intervalId);
var origin = event.origin;

if (origin == MSTeamsTabServiceURL)
{
var consentResponse = event.data;
if (AdvancedFeatureName == CollaborationFeature)
{
if (consentResponse == true)
{
CollaborationSuccessHandler();

}
else
{
CollaborationFailureHandler();
}
}
else if (AdvancedFeatureName == UserSyncFeature)
{
if (consentResponse == true)
{
UserSyncSuccessHandler();
}
else
{
UserSyncFailureHandler();
}
}
}

});
}

function showTenantAdminErrorMessage() {
ShowLoader(TenantAdminCheckLoader);
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("UserAccessError","User is not a TenantAdmin");
ShowFailureMessageAndClose(TenantAdminFailure,TenantAdminFailureHelp);
}

function CollaborationSuccessHandler() {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("EnableCollaboration", "Success");

AdvancedFeatureName = UserSyncFeature;
showLoadingAndApplyChange();
}

function CollaborationFailureHandler() {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("EnableCollaboration","Failure");
ShowFailureMessageAndClose(FeatureFailure,FeatureFailureHelp);
}

function UserSyncSuccessHandler() {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("EnableUserSync","Success");

ShowSuccessMessageAndClose(FeatureSuccess);
}

function UserSyncFailureHandler() {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("EnableUserSync","Failure");
ShowFailureMessageAndClose(FeatureFailure, FeatureFailureHelp);
}

function ShowLoader(processingDescriptionMessage) {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.hideConfimationMessageAndFooterButton();
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.showLoader("informationContainerStyle", "processingIndicatorContainerStyle", "processingIndicatorElementStyle", processingDescriptionMessage);
}

function ShowSuccessMessageAndClose(successMessage) {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.showCustomSuccessMessage(successMessage, finishButtonText);
setFlag(true, false);
}

function ShowFailureMessageAndClose(failureMessage, failureHelpMessage) {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.showCustomFailureMessage(failureMessage, failureHelpMessage, AdvancedFeatureName)
setFlag(true, true);
}

function TimeoutConsentResponse(childWindow) {
if (childWindow.closed) {
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("ConsentWindow","Consent Window was closed by user");
ShowFailureMessageAndClose(ConsentWindowClosed,ConsentWindowClosedHelp);
}
}

function GetConsentQueryParam() {
if (AdvancedFeatureName == CollaborationFeature) {
return 'CollabGraphConsent';
}
else if (AdvancedFeatureName == UserSyncFeature) {
return 'CollabAppConsent';
}
}

function apply() {
window.returnValue = true;
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("SettingDialog","Successfully Finished for "+ AdvancedFeatureName);
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

function cancel() {
window.returnValue = false;
Microsoft.Crm.Tools.MSTeamsPreview.Scripts.MSTeamsPreviewHelper.logMSTeamsCollabTelemetry("SettingDialog","Cancelled for "+ AdvancedFeatureName);
if (isInlineDialog)
executeDialogCloseCallback(window.returnValue);
closeWindow();
}

function setFlag(isRetryOkayValue, anyErrorOccurredValue) {
isRetryOkay = isRetryOkayValue;
anyErrorOccurred = anyErrorOccurredValue;
}

function CheckForTenantAdmin() {
if(!isTenantAdmin) {
showTenantAdminErrorMessage();
}
}

</script>
</head>

<body onload="CheckForTenantAdmin()">

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
