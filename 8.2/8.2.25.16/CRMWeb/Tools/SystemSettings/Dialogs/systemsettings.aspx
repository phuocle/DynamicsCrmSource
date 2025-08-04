





<!DOCTYPE html>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemSettings.SystemSettingsPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI"
Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ps" Namespace="Microsoft.Crm.Web.Tools.PersonalSettings" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<title>
<loc:text resourceid="Web.Tools.SystemSettings.Dialogs.systemsettings.aspx_10" runat="server" />
</title>
<script type="text/javascript">







var _lastDateSeparator = "";
var _languageCode =	<% = _languageCode %>;
var _originalReportCategoryXml = "";
var _boAnySettingChanged = false;
var _boSessionTimeoutSettingChanged = false;
var _boInactivityTimeoutSettingChanged = false;

var selTrackingNumberLengthCtrl = null;
var selTrackingIdLengthCtrl = null;

var selTrackingNumberLengthElement = null;
var selTrackingIdLengthElement = null;

var edtCategory_listEditComponent;
var txtTrackingPrefixCtrl = null;
var txtSMFilterCtrl = null;
Sys.Application.add_load(SettingsOnLoad);

var _isActivityLoggingFeatureEnabled = <%= (Util.IsLive() && Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.ActivityLogging, Microsoft.Crm.Application.Security.UserInformation.Current)) ? "true" : "false" %>;

function SettingsOnLoad()
{

$get("tab<%=selectedTab%>").style.display = "inline";

selTrackingNumberLengthElement = $get('selTrackingNumberLength');
selTrackingIdLengthElement = $get('selTrackingIdLength');

selTrackingNumberLengthCtrl = Mscrm.FormControlInputBehavior.GetBehavior('selTrackingNumberLength');
selTrackingIdLengthCtrl = Mscrm.FormControlInputBehavior.GetBehavior('selTrackingIdLength');
txtTrackingPrefixCtrl = Mscrm.FormControlInputBehavior.GetBehavior('txtTrackingPrefix');
txtSMFilterCtrl = Mscrm.FormControlInputBehavior.GetBehavior('txtSMFilter');




edtCategory_listEditComponent = $find('edtCategory');

setTrackingPrefix("<%=(Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(_trackingPrefix))%>");
onEnableEmailCorrelationChange();
onEnableTrackingChange();
updateTrackingTokenExample();
onEnableSmartMatchingChange();
setSMFilter("<%=(Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(_smartMatchingFilter))%>");
onloadUpdateMarketingControlsUI();
<% if(IsCustomHelpDefined) {%>
onEnableCustomizableHelpChange();
<% } %>
<%if (FeatureEnabledHelper.IsNonOrgFeatureEnabled(FeatureControl.Current.Features.InContextHelp, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
onEnableGuidedHelpChange();
<% } %>
onEnableBingMapsChange();
onDefaultCountryCodeChange();

<% if (IsCustomSessionTimeoutEnabled){%>
onEnableSessionTimeoutChange();
<% } %>


updateReadingOrder();
_originalReportCategoryXml = getReportCategoryUpdate();


<%if (Util.IsLive()){%>
Mscrm.FormControlInputBehavior.GetBehavior("rdUseSecureFrame").set_disabled(true);
<% } %>

<% if (IsCustomInactivityTimeoutEnabled){%>
onEnableInactivityTimeoutChange();
<% } %>

var defaultEmailServerProfileBehavior = Mscrm.FormControlInputBehavior.GetBehavior("emailServerProfile");
defaultEmailServerProfileBehavior.AddParam("ShowNewButton", 0);

AdjustTabAndContentWidth();
$addHandler(window, 'resize', AdjustTabAndContentWidth);

var oldPrimaryEntity;
ConfigServiceTab();


checkRelationshipIntelligenceDependencies();


if(!isOutlookHostedWindow())
{




populateWindowArgumentsForDialog();
}
}




function getHelpContext()
{
return $find('crmTabBar').get_currentTab().getAttribute("tabID");
}




function cancel()
{
RemoveHandlersOnClose();
closeWindow();
}

function ConfirmIsFullTextSearchEnabled(returnValue, isFullTextSearchEnabled)
{
if (returnValue != null && returnValue == false) {
Mscrm.FormControlInputBehavior.GetBehavior("rdIsFullTextSearchEnabled").set_dataValue(isFullTextSearchEnabled);
}
}

function ConfirmIsExternalSearchEnabled(returnValue, isExternalSearchEnabled)
{
var externalSearchCheckBox = $get("ckEnableExternalSearch");
if (returnValue != null && returnValue == false && externalSearchCheckBox) {
$get("ckEnableExternalSearch").checked = isExternalSearchEnabled;
}
}

function ConfirmIsLPAuthoringEnabled(returnValue)
{
if (returnValue != null && returnValue == false ) {
Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").set_dataValue(false);
}
}

function ConfirmIsInAppSupportEnabled(returnValue)
{
if (returnValue != null && returnValue == false ) {
Mscrm.FormControlInputBehavior.GetBehavior("rdInAppSupportEnabled").set_dataValue(false);
}
}

function ConfirmIsInAppSupportNotDisabled(returnValue)
{
if (returnValue != null && returnValue == false ) {
Mscrm.FormControlInputBehavior.GetBehavior("rdInAppSupportEnabled").set_dataValue(true);
}
}

function ConfirmIsAzureMLFeaturePreviewEnabled(returnValue, radioId, disablePreviewRadioValue)
{

if (!(returnValue != null && returnValue == true))
{
Mscrm.FormControlInputBehavior.GetBehavior(radioId).set_dataValue(disablePreviewRadioValue);
}
}




function applychanges()
{

if (!validateMarketingControlsStatus())
{
return false;
}


if ($get("selectRegionalFormatCode").value == "")
{
alert(LOCID_REGIONCODE_REQUIRED);
return false ;
}


if ($get('numTrackingIdBase').value == "")
{
alert(LOCID_TRACKINGID_REQUIRED);
return false;
}


if ($get("ckEnableTracking").checked)
{
var sIdBase = Mscrm.FormControlInputBehavior.GetBehavior('numTrackingIdBase').get_dataValue().toString();
if (selTrackingIdLengthCtrl.get_dataValue() < sIdBase.length)
{
alert(LOCID_TRACKINGID_LENGTH_ERROR);
return false;
}
}


if (!IsNull(document.getElementById("ckEnableDefaultCountryCode")) && $get("ckEnableDefaultCountryCode").checked == true)
{
var txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode");
if(isNullOrEmptyString(txtDefaultCountryCodeControl.get_dataValue()))
{
alert(LOCID_CHECK_COUNTRY_CODE_VALUE);
return false;
}
}


if (isNullOrEmptyString(txtTrackingPrefixCtrl.get_dataValue()))
{
alert(LOCID_INVALID_TRACKING_PREFIX);
return false;
}


if ($get("ckEnableSmartMatching").checked)
{
if(isNullOrEmptyString(txtSMFilterCtrl.get_dataValue()))
{
alert(LOCID_INVALID_SM_FILTER);
return false;
}
}


if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numMinOutlookSyncInterval').get_dataValue()))
{
alert(LOCID_OLKSYNCINTERVAL_REQUIRED);
return false;
}

if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numTagPollingPeriod').get_dataValue()))
{
alert(LOCID_TAGPOLLINGPERIOD_REQUIRED);
return false;
}

var numberMaxUploadFileSizeControl = Mscrm.FormControlInputBehavior.GetBehavior('numberMaxUploadFileSize');

if(numberMaxUploadFileSizeControl.get_dataValue() > numberMaxUploadFileSizeControl.get_max())
{
crmTabBar.down(tab2Tab, true);
numberMaxUploadFileSizeControl.IsValid();
return false;
}

var defaultCrmCustomNameControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCrmCustomName");
var content = defaultCrmCustomNameControl .get_dataValue();
if(isNullOrEmptyString(content) || content.length > 100)
{
alert(LOCID_INVALID_DEFAULT_APP_NAME);
return false;
}

<% if (IsCustomSessionTimeoutEnabled){%>

if (Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue())
{

if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue()))
{
alert(LOCID_SESSIONTIMEOUT_REQUIRED);
return false;
}


if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_dataValue()))
{
alert(LOCID_SESSIONTIMEOUT_REMINDER);
return false;
}


if (Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue() > Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_max() ||
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue() < Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_min())
{
return false;
}


if (Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_dataValue() > Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_max() ||
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_dataValue() < Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_min())
{
return false;
}


if(Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_dataValue() >= Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue())
{
alert(LOCID_SESSIONTIMEOUT_VALIDATION);
return false;
}
}
<% } %>

<% if (IsCustomInactivityTimeoutEnabled){%>

if (Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue())
{

if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue()))
{
alert(LOCID_INACTIVITYTIMEOUT_REQUIRED);
return false;
}


if (isNullOrEmptyString(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_dataValue()))
{
alert(LOCID_INACTIVITYTIMEOUT_REMINDER);
return false;
}


if (Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue() > Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_max() ||
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue() < Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_min())
{
return false;
}


if (Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_dataValue() > Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_max() ||
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_dataValue() < Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_min())
{
return false;
}


if(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_dataValue() >= Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue())
{
alert(LOCID_INACTIVITYTIMEOUT_CHECK);
return false;
}

<% if (IsCustomSessionTimeoutEnabled){%>

if(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue() >= Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue())
{
alert(LOCID_INACTIVITYT_VALIDATION);
return false;
}
<% } %>
}
<% } %>

_boAnySettingChanged = false;

var retval = new StringBuilder();
retval.Append( "<organization>" );


retval.Append(GetFullNameConventionCode());
retval.Append(GetPricingDecimalPrecision());
retval.Append(GetShareOnAssign());
retval.Append(GetBlockedAttachment());
<% if(IsCustomHelpDefined) {%>
retval.Append(GetHelpURL());
<% } %>
retval.Append(GetCurrencyDisplayOption());



<%if(!(Util.IsForOutlookClient() && !Util.IsOnline())){ %>
retval.Append(GetRegionalFormatCode());

var regionalOptionsDataXml = GetRegionalOptionsDataXml();
if (regionalOptionsDataXml != "")
{
_boAnySettingChanged = true;
retval.Append(regionalOptionsDataXml);
}
<% } %>


retval.Append(GetEnableAudit());
retval.Append(GetEnableUserAccessAudit());
retval.Append(GetEnableReadAudit());

retval.Append(GetAreaAuditXml());
retval.Append(GetEnableDefaultCountryCodeFlag());
retval.Append(GetEnableDefaultCountryCodeValue());
retval.Append(GetDefaultProtocolInformation());


retval.Append(GetEmailApprovalValue());
retval.Append(GetTrackingPrefix());
retval.Append(GetTrackingIdBase());
retval.Append(GetTrackingIdLength());
retval.Append(GetTrackingNumberLength());
retval.Append(GetEnableEmailCorrelation());
retval.Append(GetEnableFolderBasedTracking());
retval.Append(GetEnableSmartMatching());
retval.Append(GetSMFilter());
retval.Append(GetSMKeywordLimit());
retval.Append(GetSMMaxDifference());
retval.Append(GetSMMinRecipients());
retval.Append(GetIgnoreInternalEmail());
retval.Append(GetEnableBingMapsIntegration());
retval.Append(GetBingMapsApiKey());
retval.Append(GetUseSecureFrame());
retval.Append(GetAllowUnresolvedParty());
retval.Append(GetUnresolveIfMultipleMatch());
retval.Append(GetEmailMonitoring());
retval.Append(GetMaxUploadFileSize());
retval.Append(GetEmailServerProfileOption());
retval.Append(GetEmailConnectionChannel());
retval.Append(GetDefaultEmailSettings());

retval.Append(GetAlertSettings());


retval.Append(GetEnableResponseCreation());
retval.Append(GetEnableExecution());
retval.Append(GetEnableUnsubscription());
retval.Append(GetEnableUnsubscriptionAcknowledgement());
retval.Append(GetTemplateLookup());


retval.Append(GetEnableAppMode());


retval.Append(GetPluginTracing());

retval.Append(GetIsEnabledForAllRoles());
retval.Append(GetDefaultCrmCustomName());

<% if (IsCustomSessionTimeoutEnabled){%>

retval.Append(GetSessionTimeoutEnabled());
retval.Append(GetSessionTimeout());
retval.Append(GetSessionTimeoutReminder());
<% } %>


retval.Append(GetDisableIECompatibilityMode());


retval.Append(GetTagMaxAggressiveCycles());
retval.Append(GetTagPollingPeriod());
retval.Append(GetSendPollingPeriod());

retval.Append(GetAllowScheduledSyncs());
retval.Append(GetOutlookSyncInterval());

retval.Append(GetAllowOfflineScheduledSyncs());
retval.Append(GetOfflinePollingPeriod());

retval.Append(GetAllowAddressBookSyncs());
retval.Append(GetAddressBookPollingPeriod());
retval.Append(GetAllowClientMessageBarAd());

<% if (IsCustomInactivityTimeoutEnabled){%>

retval.Append(GetInactivityTimeoutEnabled());
retval.Append(GetInactivityTimeout());
retval.Append(GetInactivityTimeoutReminder());
<% } %>


var reportCategoryXml = getReportCategoryUpdate();
if (_originalReportCategoryXml != reportCategoryXml)
{
_boAnySettingChanged = true;
retval.Append(reportCategoryXml);
}

retval.Append(GetMaximumAppointmentDuration());

retval.Append(GetQuickFindRecordLimitEnabled());
retval.Append(GetIsFullTextSearchEnabled());
retval.Append(GetIsExternalSearchEnabled());

<% if(IsCustomHelpDefined) {%>
retval.Append(GetCustomizedHelpEnabled());
retval.Append(GetAppendURLParametersEnabled());
<% } %>

<% if (ShouldShowTaskBasedFlowItem) {%>
retval.Append(GetTaskBasedFlowEnabled());
<% } %>

<% if (IsOrgInsightsFeatureEnabled) {%>
retval.Append(GetOrgInsightsEnabled());
<% } %>

<% if (IsCortanaProactiveExperienceFeatureEnabled) {%>
retval.Append(GetCortanaProactiveExperienceEnabled());
<% } %>


<% if (IsDelveActionHubIntegrationFeatureEnabled) {%>
retval.Append(GetDelveActionHubIntegrationEnabled());
<% } %>

<% if (IsProductRecommendationsFeatureAvailable) {%>
retval.Append(GetProductRecommendationsPreviewEnabled());
<% } %>

<% if (IsTextAnalyticsFeatureAvailable) {%>
retval.Append(GetTextAnalyticsPreviewEnabled());
<% } %>

<% if (IsRelationshipIntelligenceEnabled) {%>
retval.Append(GetRelationshipIntelligenceEnabled());
<% } %>

<% if (Microsoft.Crm.ObjectModel.PowerBIUtility.IsPowerBIEmbedFCBEnabled(Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
retval.Append(GetPowerBIFeatureEnabled());
<% } %>

retval.Append(GetIsPresencedEnabled());
retval.Append(GetIsAutoSaveEnabled());

retval.Append(GetRollupConfiguration());

retval.Append(GetAllowUsersSeeAppDownloadMessage());

retval.Append(GetIsSLASuppressed());
retval.Append(GetAutoApplySLA());
retval.Append(GetAutoApplyDefaultOnCaseCreate());
retval.Append(GetAutoApplyDefaultOnCaseUpdate());
retval.Append(GetSLAPauseStates());
retval.Append(GetMaximumBundleItems());
retval.Append(GetDefaultPriceListRuleEnabled());
retval.Append(GetDefaultDiscountSetting());
retval.Append(GetOOBPriceCalculationEnabled());
retval.Append(GetCreateProductsWithoutParentInActiveStateEnabled());
retval.Append(GetFeatureSetSettings());
retval.Append(GetIsSocialCareDisabled());
retval.Append(GetDisplayNavigationTour());
retval.Append(GetUseLegacyRendering());
retval.Append(GetAzureCDNSetting());
retval.Append(GetEnableLPAuthoring());


retval.Append(GetMaximumDynamicPropertiesAllowed());

retval.Append(GetOtherSyncSettings());

retval.Append(GetIsMicrosoftFlowEnabled());

<% if (HasMobileClientFeaturesAvailable) {%>
<% if (IsApplicationMetadataOnDemandSyncFeatureAvailable) {%>

retval.Append(GetApplicationMetadataOnDemandSyncSettings());
<% } %>
<% if (IsMocaOfflineFeatureAvailable) {%>

retval.Append(GetConflictDetectionSettings());
<% } %>
<% } %>

<%if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.OnePartyModel.Name, Microsoft.Crm.Application.Security.UserInformation.Current)){ %>
var externalPartyEnabledEntitiesSettingsXml = getExternalPartyEnableEntitiesSettingsXml();
var externalPartyCorrKeyMapDataXml = getExternalPartyCorrKeyMapDataXml();

if (externalPartyEnabledEntitiesSettingsXml != "")
{
_boAnySettingChanged = true;
retval.Append("<externalpartyentitysettings>" + CrmEncodeDecode.CrmXmlEncode(externalPartyEnabledEntitiesSettingsXml) + "</externalpartyentitysettings>");
}

if (externalPartyCorrKeyMapDataXml != "")
{
_boAnySettingChanged = true;
retval.Append("<externalpartycorrelationkeys>" + CrmEncodeDecode.CrmXmlEncode(externalPartyCorrKeyMapDataXml) + "</externalpartycorrelationkeys>");
}
<% } %>

<% if (ShowMicrosoftFlowOption) {%>
retval.Append(GetIsMicrosoftFlowEnabled());
<% } %>

retval.Append( "</organization>");

var boSuccess = true;
if (_boAnySettingChanged)
{
var xml= XUI.Xml.LoadXml(retval.ToString());

var xmlhttp = new XMLHttpRequest();
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/cmds/cmd_update.aspx");
xmlhttp.open("POST", oUrl.toString(), false);
Mscrm.Utilities.setResponseTypeToMSXml(xmlhttp);
SetTokenInHeader(xmlhttp, oUrl);

boSuccess=Mscrm.Utilities.safeHttpSend(xmlhttp,xml);
if(boSuccess)
{
boSuccess = handleXMLErr(xmlhttp.responseXML);
}




}

if (boSuccess)
{
RemoveHandlersOnClose();
closeWindow();
}
}










function GetOtherSyncSettings()
{
var returnValue = "";

var ckIsAppointmentAttachmentSyncEnabled = $get("ckIsAppointmentAttachmentSyncEnabled");
if (ckIsAppointmentAttachmentSyncEnabled != null && Mscrm.FormUtility.isControlDirty(ckIsAppointmentAttachmentSyncEnabled))
{
_boAnySettingChanged = true;
returnValue = "<isappointmentattachmentsyncenabled>" + (ckIsAppointmentAttachmentSyncEnabled.checked ? "1" : "0") + "</isappointmentattachmentsyncenabled>";
}

var ckIsAssignedTasksSyncEnabled = $get("ckIsAssignedTasksSyncEnabled");
if (ckIsAssignedTasksSyncEnabled != null && Mscrm.FormUtility.isControlDirty(ckIsAssignedTasksSyncEnabled))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<isassignedtaskssyncenabled>" + (ckIsAssignedTasksSyncEnabled.checked ? "1" : "0") + "</isassignedtaskssyncenabled>";
}

var ckIsResourceBookingExchangeSyncEnabled = $get("ckIsResourceBookingExchangeSyncEnabled");
if (ckIsResourceBookingExchangeSyncEnabled != null && Mscrm.FormUtility.isControlDirty(ckIsResourceBookingExchangeSyncEnabled))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<isresourcebookingexchangesyncenabled>" + (ckIsResourceBookingExchangeSyncEnabled.checked ? "1" : "0") + "</isresourcebookingexchangesyncenabled>";
}

var rdIsContactMailingAddressSyncEnabled = $get("rdIsContactMailingAddressSyncEnabled");
if (rdIsContactMailingAddressSyncEnabled != null && Mscrm.FormUtility.isControlDirty(rdIsContactMailingAddressSyncEnabled))
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsContactMailingAddressSyncEnabled");
_boAnySettingChanged = true;
returnValue = returnValue +  "<iscontactmailingaddresssyncenabled>" + (ctrl.get_dataValue() ? "1" : "0") + "</iscontactmailingaddresssyncenabled>";
}

return returnValue;
}

function onCurrencySymbolChange()
{
var sCurrencySymbol = $get("CurrencySymbol").value;
if (sCurrencySymbol == "")
{
sCurrencySymbol = "$";
}
updateCurrencyFormatCodeBox(sCurrencySymbol);
}

function onTrackingPrefixChange()
{
var value = "";
if (txtTrackingPrefixCtrl.get_dataValue() != null)
{
value = txtTrackingPrefixCtrl.get_dataValue();


value = value.replace(new RegExp(_sTrackingPrefixSeparator, "g"), "");
}

txtTrackingPrefixCtrl.set_dataValue(value);

updateTrackingTokenExample();
}

function onEnableTrackingChange()
{
enableEmailTracking($get("ckEnableTracking").checked);
}

function onPreviewEULAChange()
{
var shouldEnableRadioButton = $get("cbPreviewEULA").checked;
SetEnabledStateForRadio("rdTaskBasedFlowPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdCortanaProactiveExperiencePreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdDelveActionHubPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdorgInsightsPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdProductRecommendationsPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdTextAnalyticsPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdRelationshipAnalyticsPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdEmailEngagementPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdRelationshipAssistantPreview", shouldEnableRadioButton);
SetEnabledStateForRadio("rdAutoDataCapture", shouldEnableRadioButton);
}



function checkRelationshipIntelligenceDependencies()
{
var infoText = $get("relationshipAssitanceInfo");
if(infoText != null)
{
infoText.style.display = "none";
var radioEmailEngagementId = "rdEmailEngagementPreview";
var radioRelationshipAssistanceId = "rdRelationshipAssistantPreview";
var radioRelationshipAssistance = $get(radioRelationshipAssistanceId);
var radioEmailEnagnement = $get(radioEmailEngagementId);

if(radioEmailEnagnement != null)
{
var controlEmailEngagement = Mscrm.FormControlInputBehavior.GetBehavior(radioEmailEngagementId);

if(controlEmailEngagement != null && controlEmailEngagement.get_dataValue() && radioRelationshipAssistance != null)
{
var controlRelationshipAssistant = Mscrm.FormControlInputBehavior.GetBehavior(radioRelationshipAssistanceId);
if(!controlRelationshipAssistant.get_dataValue())
{
infoText.style.display = "";
}
}
}
}
}

function SetEnabledStateForRadio(radioId, isEnabled)
{
var radio = $get(radioId);

if (radio != null)
{
var control = Mscrm.FormControlInputBehavior.GetBehavior(radioId);

if(control != null)
{
if (!isEnabled)
{
control.set_dataValue(false);
control.set_disabled(true);
}
else
{
control.set_dataValue(false);
control.set_disabled(false);
}
}
}
}

function GetFeatureSetSettings() {
var result = new StringBuilder();
result.Append("<featureset>");
result.Append(CrmEncodeDecode.CrmXmlEncode("<features>"));
AppendFeatureSetXml(result, "rdGuidedHelpEnabled", CrmEncodeDecode.CrmXmlEncode('<%=GetGuidedHelpFeatureXml(true)%>'), CrmEncodeDecode.CrmXmlEncode('<%=GetGuidedHelpFeatureXml(false)%>'));
AppendFeatureSetXml(result, "rdInAppSupportEnabled", CrmEncodeDecode.CrmXmlEncode('<%=GetInAppSupportOrgFeatureXml(true)%>'), CrmEncodeDecode.CrmXmlEncode('<%=GetInAppSupportOrgFeatureXml(false)%>'));
result.Append(CrmEncodeDecode.CrmXmlEncode('<%=FeatureXmlSetOfOtherItems%>'));
result.Append(CrmEncodeDecode.CrmXmlEncode("</features>"));
result.Append("</featureset>");
return result.ToString();
}

function AppendFeatureSetXml(resultBuilder, radioId, featureEnabledValue, featureDisabledValue)
{
var radio = $get(radioId);
if(radio != null){
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior(radioId);
_boAnySettingChanged = true;

if(ctrl.get_dataValue())
{
resultBuilder.Append(featureEnabledValue);
}
else
{
resultBuilder.Append(featureDisabledValue);
}
}
}

function onEmailConnectionChannelChange()
{
var emailChannelEnum = {HostedEmailConnector:"0", EmailRouter:"1"};
var currentSelection = CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('picklistEmailConnectionChannel').get_dataValue());

if(HAS_PASSWORD_FOR_A_MAILBOX == '1' && EMAIL_CONNECTION_CHANNEL == emailChannelEnum.HostedEmailConnector && currentSelection == emailChannelEnum.EmailRouter)
{
if (!confirm(EMAIL_ROUTER_WARNING_MESSAGE, EMAIL_ROUTER_WARNING_TITLE)) {
Mscrm.FormControlInputBehavior.GetBehavior('picklistEmailConnectionChannel').set_dataValue('0');
}
}
}

function onEnableEmailCorrelationChange()
{
var enableCorrelation = $get("ckEnableEmailCorrelation").checked;

document.getElementById("ckEnableTracking").disabled = !enableCorrelation;
document.getElementById("ckEnableSmartMatching").disabled = !enableCorrelation;
document.getElementById("ckEnableTracking").disabled = !enableCorrelation;
document.getElementById("txtTrackingPrefix").disabled = !enableCorrelation;
document.getElementById("numTrackingIdBase").disabled = !enableCorrelation;
document.getElementById("selTrackingIdLength").disabled = !enableCorrelation;
document.getElementById("selTrackingNumberLength").disabled = !enableCorrelation;
document.getElementById("txtSMFilter").disabled = !enableCorrelation;
document.getElementById("numSMKeywordLimit").disabled = !enableCorrelation;
document.getElementById("numSMMaxDifference").disabled = !enableCorrelation;
document.getElementById("numSMMinRecipients").disabled = !enableCorrelation;
}

function onEnableAuditChange()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableAudit")))
{
if ($get("ckEnableAudit").checked == false)
{
bConfirm = confirm(LOCID_CONFIRM_AUDIT_DISABLE);

if (bConfirm == false)
{
$get("ckEnableAudit").checked = true;
return;
}
}
}
$get("ckEnableUserAccessAudit").disabled = !$get("ckEnableAudit").checked;

if (_isActivityLoggingFeatureEnabled) {
$get("ckEnableReadAudit").disabled = !$get("ckEnableAudit").checked;

if (!$get("ckEnableAudit").checked) {
$get("ckEnableReadAudit").checked = false;
}
}

toggleAuditAreaStates($get("ckEnableAudit").checked);
}

function onDefaultCountryCodeChange()
{
var value = "";
var txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode");
if (!IsNull(document.getElementById("ckEnableDefaultCountryCode")) && $get("ckEnableDefaultCountryCode").checked == true && !IsNull(document.getElementById("txtDefaultCountryCode")))
{
txtDefaultCountryCodeControl.set_disabled(false);
}
else if(!IsNull(document.getElementById("ckEnableDefaultCountryCode")) && $get("ckEnableDefaultCountryCode").checked == false && !IsNull(document.getElementById("txtDefaultCountryCode")))
{
value = txtDefaultCountryCodeControl.get_dataValue();
txtDefaultCountryCodeControl.set_disabled(true);
txtDefaultCountryCodeControl.set_dataValue(value);
}
}

function toggleAuditAreaStates(auditEnabled)
{
if (document.getElementById("ckCommonAudit") != null)
{
$get("ckCommonAudit").disabled = !auditEnabled || commonAuditDisabled;
$get("ckSFAAudit").disabled = !auditEnabled || sfaAuditDisabled;
$get("ckMAAudit").disabled = !auditEnabled || maAuditDisabled;
$get("ckCSAudit").disabled = !auditEnabled || csAuditDisabled;
}
}

function onEnableBingMapsChange()
{
var txtBingMapsApiKeyControl = Mscrm.FormControlInputBehavior.GetBehavior("txtBingMapsApiKey");
if (IsNull(txtBingMapsApiKeyControl))
{
return;
}
var enableBingMapsRadioControl =  Mscrm.FormControlInputBehavior.GetBehavior("rdEnableBingIntegration");
if(IsNull(enableBingMapsRadioControl) || IsNull(enableBingMapsRadioControl.get_dataValue()) || !enableBingMapsRadioControl.get_dataValue())
{
txtBingMapsApiKeyControl.set_disabled(true);
}
else
{
txtBingMapsApiKeyControl.set_disabled(false);
}
}


function onIsFullTextSearchEnabledChange()
{
var isFullTextEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdIsFullTextSearchEnabled").get_dataValue() ? true : false;

var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_confirm_enablefulltextsearch.aspx");
oUrl.get_query()["resource_description"] = isFullTextEnabled ? String.format(LOCID_FULLTEXTSEARCHENABLEDDESC):
String.format(LOCID_FULLTEXTSEARCHDISABLEDDESC);
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 600, 200, null);
var oldSelection = isFullTextEnabled ? [false] : [true];
crmDialog.setCallbackInfo("ConfirmIsFullTextSearchEnabled", this,oldSelection);
crmDialog.show();
}


function onEnableExternalSearchChange()
{
var isEnableExternalSearch = $get("ckEnableExternalSearch").checked;
showExternalSearchConfirmationDialog(isEnableExternalSearch, "ConfirmIsExternalSearchEnabled");
}

function showExternalSearchConfirmationDialog(isEnableExternalSearch, callbackMethod)
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_confirm_enableexternalsearch.aspx");
oUrl.get_query()["isEnabling"] = isEnableExternalSearch;
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 600, 200, null);
var oldSelection = isEnableExternalSearch ? [false] : [true];
crmDialog.setCallbackInfo(callbackMethod, this,oldSelection);
crmDialog.show();
}


function onAzureMLPreviewFeatureSelectionChanged(radioId)
{

if ( Mscrm.FormControlInputBehavior.GetBehavior(radioId).get_dataValue())
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_confirm_enableazuremlfeature.aspx");
oUrl.get_query()["radioId"] = radioId;
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 800, 200, null);
var parameters = new Array(radioId, false);
crmDialog.setCallbackInfo("ConfirmIsAzureMLFeaturePreviewEnabled", this, parameters);
crmDialog.show();
}
}

function onEnableSmartMatchingChange()
{
enableSmartMatching($get("ckEnableSmartMatching").checked);
}


function onEnableUnsubscriptionChange()
{

var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscription");
var ackCtrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscriptionAcknowledgement");
var lookup = Mscrm.FormControlInputBehavior.GetBehavior("luTemplateLookup");

if (ctrl.get_dataValue())
{
ackCtrl.set_disabled(false);
if (ackCtrl.get_dataValue())
{
lookup.set_disabled(false);
}
}
else
{
ackCtrl.set_disabled(true);
lookup.set_disabled(true);
}
}


function onEnableUnsubscriptionAcknowledgementChange()
{
var lookup = Mscrm.FormControlInputBehavior.GetBehavior("luTemplateLookup");

if (Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscriptionAcknowledgement").get_dataValue())
{
lookup.set_disabled(false);
}
else
{
lookup.set_disabled(true);
}
}


function onEnableSessionTimeoutChange()
{
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').set_disabled(!Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue());
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').set_disabled(!Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue());
}

function onEnableSessionTimeoutUIChange()
{
onEnableSessionTimeoutChange()

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue())
{
<%if (!Util.IsLive() && Util.IsClaims()) {%>
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').set_dataValue(<%=defaultIFDTimeoutInMintues%>);
<% } %>
<% else {%>
Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').set_dataValue(<%=defaultTimeoutInMintues%>);
<% } %>

Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').set_dataValue(<%=expirationReminderTimeInMinutes%>);
}
}


function onEnableInactivityTimeoutChange()
{
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').set_disabled(!Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue());
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').set_disabled(!Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue());
}

function onEnableInactivityTimeoutUIChange()
{
onEnableInactivityTimeoutChange()

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue())
{
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').set_dataValue(null);
Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').set_dataValue(null);
}
}


function onEnableCustomizableHelpChange()
{
var txtURLHelp = Mscrm.FormControlInputBehavior.GetBehavior("txtURLHelp");
var rdAppendURLParametersEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdAppendURLParametersEnabled");
var rdGuidedHelpEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdGuidedHelpEnabled");
var rdLPAuthoringEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled");
if (Mscrm.FormControlInputBehavior.GetBehavior("rdCustomizedHelpEnabled").get_dataValue())
{
txtURLHelp.set_disabled(false);
rdAppendURLParametersEnabled.set_disabled(false);

if(rdGuidedHelpEnabled)
{
rdGuidedHelpEnabled.set_disabled(true);
}
if(rdLPAuthoringEnabled)
{
rdLPAuthoringEnabled.set_disabled(true);
}
}
else
{
txtURLHelp.set_disabled(true);
rdAppendURLParametersEnabled.set_disabled(true);

if(rdGuidedHelpEnabled)
{

rdGuidedHelpEnabled.set_disabled(false);

if(rdLPAuthoringEnabled && rdGuidedHelpEnabled.get_dataValue())
{
rdLPAuthoringEnabled.set_disabled(false);
}
}
}
}

function onEnableGuidedHelpChange()
{
var rdLPAuthoringEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled");
var rdInAppSupportEnabled = Mscrm.FormControlInputBehavior.GetBehavior("rdInAppSupportEnabled");
if(Mscrm.FormControlInputBehavior.GetBehavior("rdGuidedHelpEnabled").get_dataValue())
{

rdLPAuthoringEnabled.set_disabled(false);
if (rdInAppSupportEnabled != null)
{
rdInAppSupportEnabled.set_disabled(false);
}
}
else
{

rdLPAuthoringEnabled.set_disabled(true);
if (rdInAppSupportEnabled != null)
{
rdInAppSupportEnabled.set_disabled(true);
}
}
}


function onloadUpdateMarketingControlsUI()
{

var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscription");
var ackCtrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscriptionAcknowledgement");
var lookup = Mscrm.FormControlInputBehavior.GetBehavior("luTemplateLookup");
if (!IsNull(ctrl) && !IsNull(ctrl.get_dataValue()) && !ctrl.get_dataValue())
{
ackCtrl.set_disabled(true);
lookup.set_disabled(true);
}
if (IsNull(ackCtrl.get_dataValue()))
{
lookup.set_disabled(true);
}
else if (!ackCtrl.get_dataValue())
{
lookup.set_disabled(true);
}
}

function onScheduledSyncToggled()
{
if (Mscrm.FormControlInputBehavior.GetBehavior("rdAllowScheduledSyncs").get_dataValue())
{
Mscrm.FormControlInputBehavior.GetBehavior('numMinOutlookSyncInterval').set_disabled(false);
}
else
{
Mscrm.FormControlInputBehavior.GetBehavior('numMinOutlookSyncInterval').set_disabled(true);
}

}

function onAddressBookSyncToggled()
{

Mscrm.FormControlInputBehavior.GetBehavior('numMinAddressBookSyncInterval').set_disabled(!Mscrm.FormControlInputBehavior.GetBehavior("rdAllowAddressBookSyncs").get_dataValue());

}

function onOfflineSyncToggled()
{
if (Mscrm.FormControlInputBehavior.GetBehavior("rdAllowOfflineScheduledSyncs").get_dataValue())
{
Mscrm.FormControlInputBehavior.GetBehavior('numMinOfflineSyncInterval').set_disabled(false);
}
else
{
Mscrm.FormControlInputBehavior.GetBehavior('numMinOfflineSyncInterval').set_disabled(true);
}
}


function onEnableLPAuthoringChange()
{
if (Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").get_dataValue())
{

if(window.top.Xrm.Internal.isGuidedHelpEnabledForUser())
{
Mscrm.Utilities.ShowLoadingDiv(window.document.body);
var isContextHelpEnabled = false;
if (window.parent._MicrosoftMars && window.parent._MicrosoftMars.Client.Utility && window.parent._MicrosoftMars.Client.Utility.Util && window.parent._MicrosoftMars.Client.Utility.Util.CreateGroup)
{
var createGroupPromise = window.parent._MicrosoftMars.Client.Utility.Util.CreateGroup();
var self = this;
createGroupPromise.done(function(value) {
if(value)
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_confirm_enablelpauthoring.aspx");
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 500, 250, null);
crmDialog.setCallbackInfo("ConfirmIsLPAuthoringEnabled", self, null);
crmDialog.show();
}
else
{
Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").set_dataValue(false);
var errorStrings = new Xrm.AlertDialogStrings();
errorStrings.text = window.parent._MicrosoftMars.Client.Loader.marsLocale.SecurityGroupCreationFailedMessage;
var options = new Xrm.DialogOptions;
options.width = 600;
options.height = 150;
Xrm.Dialog.openAlertDialog(errorStrings, options, null);
console.log("Mars utility function returned false");
}
Mscrm.Utilities.RemoveLoadingDiv();
});
createGroupPromise.fail(function() {
Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").set_dataValue(false);
var errorStrings = new Xrm.AlertDialogStrings();
errorStrings.text = String.format(Xrm.Internal.getResourceString("Error_Message_Generic_Instruction"), Xrm.Internal.getResourceString("CRM_Dynamics_Community"), Xrm.Internal.getResourceString("Microsoft_Support"));
var options = new Xrm.DialogOptions;
options.width = 600;
options.height = 150;
Xrm.Dialog.openAlertDialog(errorStrings, options, null);
Mscrm.Utilities.RemoveLoadingDiv();
});
}
else
{
Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").set_dataValue(false);
var errorStrings = new Xrm.AlertDialogStrings();
errorStrings.text = String.format(Xrm.Internal.getResourceString("Error_Message_Generic_Instruction"), Xrm.Internal.getResourceString("CRM_Dynamics_Community"), Xrm.Internal.getResourceString("Microsoft_Support"));
var options = new Xrm.DialogOptions;
options.width = 600;
options.height = 150;
Xrm.Dialog.openAlertDialog(errorStrings, options, null);
Mscrm.Utilities.RemoveLoadingDiv();
}
}

else
{
var errorStrings = new Xrm.AlertDialogStrings();
errorStrings.text = String.format(Xrm.Internal.getResourceString("Error_Message_LearningPathNotOptedIn"), Xrm.Internal.getResourceString("CRM_Dynamics_Community"), Xrm.Internal.getResourceString("Microsoft_Support"));
var options = new Xrm.DialogOptions;
options.width = 600;
options.height = 150;
Xrm.Dialog.openAlertDialog(errorStrings, options, function(e) {
Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").set_dataValue(false);
});
Mscrm.Utilities.RemoveLoadingDiv();
}
}
}


function onEnableInAppSupportChange()
{
if (Mscrm.FormControlInputBehavior.GetBehavior("rdInAppSupportEnabled").get_dataValue())
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_confirm_enableinappsupport.aspx");
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 500, 250, null);
crmDialog.setCallbackInfo("ConfirmIsInAppSupportEnabled", self, null);
crmDialog.show();
}
else
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/dlg_disable_enableinappsupport.aspx");
var crmDialog = new Mscrm.CrmDialog(oUrl, null, 500, 250, null);
crmDialog.setCallbackInfo("ConfirmIsInAppSupportNotDisabled", self, null);
crmDialog.show();
}
}


function validateMarketingControlsStatus()
{
var luTemplateLookupCtrl = Mscrm.FormControlInputBehavior.GetBehavior("luTemplateLookup");

var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscription");
var ackCtrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscriptionAcknowledgement");
if (!IsNull(ctrl) && !IsNull(ctrl.get_dataValue()) && !IsNull(ackCtrl.get_dataValue()))
{
if (ctrl.get_dataValue() && ackCtrl.get_dataValue())
{
if (IsNull(luTemplateLookupCtrl.get_dataValue()) || IsNull(luTemplateLookupCtrl.get_dataValue()[0].id))
{
alert(LOCID_INVALID_EMAIL_TEMPLATE);
return false;
}
}
}

return true;
}


function GetTagPollingPeriod()
{
if (Mscrm.FormUtility.isControlDirty($get('numTagPollingPeriod')))
{
_boAnySettingChanged = true;
return "<tagpollingperiod>" + Mscrm.FormControlInputBehavior.GetBehavior('numTagPollingPeriod').get_dataValue() * 60 * 1000 + "</tagpollingperiod>";
}

return "";
}


function GetSendPollingPeriod()
{
if (Mscrm.FormUtility.isControlDirty($get('numSendPollingPeriod')))
{
_boAnySettingChanged = true;
return "<emailsendpollingperiod>" + Mscrm.FormControlInputBehavior.GetBehavior('numSendPollingPeriod').get_dataValue() * 60 * 1000 + "</emailsendpollingperiod>";
}

return "";
}


function GetTagMaxAggressiveCycles()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdTagMaxAggressiveCycles");
if (Mscrm.FormUtility.isControlDirty($get("rdTagMaxAggressiveCycles")))
{
_boAnySettingChanged = true;

return "<tagmaxaggressivecycles>" + (ctrl.get_dataValue() ? "2" : "0") + "</tagmaxaggressivecycles>";
}

return "";
}


function GetAllowScheduledSyncs()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowScheduledSyncs");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowScheduledSyncs")))
{
_boAnySettingChanged = true;
return "<allowoutlookscheduledsyncs>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowoutlookscheduledsyncs>";
}

return "";
}


function GetOfflinePollingPeriod()
{
if (Mscrm.FormUtility.isControlDirty($get('numMinOfflineSyncInterval')))
{
_boAnySettingChanged = true;

return "<minofflinesyncinterval>" + Mscrm.FormControlInputBehavior.GetBehavior('numMinOfflineSyncInterval').get_dataValue() * 60 * 1000 + "</minofflinesyncinterval>";
}

return "";
}


function GetAllowOfflineScheduledSyncs()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowOfflineScheduledSyncs");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowOfflineScheduledSyncs")))
{
_boAnySettingChanged = true;
return "<allowofflinescheduledsyncs>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowofflinescheduledsyncs>";
}

return "";
}


function GetAllowAddressBookSyncs()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowAddressBookSyncs");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowAddressBookSyncs")))
{
_boAnySettingChanged = true;
return "<allowaddressbooksyncs>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowaddressbooksyncs>";
}

return "";
}


function GetAddressBookPollingPeriod()
{
if (Mscrm.FormUtility.isControlDirty($get('numMinAddressBookSyncInterval')))
{
_boAnySettingChanged = true;

return "<minaddressbooksyncinterval>" + Mscrm.FormControlInputBehavior.GetBehavior('numMinAddressBookSyncInterval').get_dataValue() * 60 * 60 * 1000 + "</minaddressbooksyncinterval>";
}

return "";
}

function GetEmailConnectionChannel()
{
if (Mscrm.FormUtility.isControlDirty($get("picklistEmailConnectionChannel")))
{
_boAnySettingChanged = true;
return "<emailconnectionchannel>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('picklistEmailConnectionChannel').get_dataValue()) + "</emailconnectionchannel>";
}
return "";
}

function GetOutlookSyncInterval()
{
if (Mscrm.FormUtility.isControlDirty($get('numMinOutlookSyncInterval')))
{
_boAnySettingChanged = true;

return "<minoutlooksyncinterval>" + Mscrm.FormControlInputBehavior.GetBehavior('numMinOutlookSyncInterval').get_dataValue() * 60 * 1000 + "</minoutlooksyncinterval>";
}

return "";
}


function GetAllowClientMessageBarAd()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowClientMessageBarAd");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowClientMessageBarAd")))
{
_boAnySettingChanged = true;
return "<allowclientmessagebarad>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowclientmessagebarad>";
}

return "";
}


function GetCustomizedHelpEnabled()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdCustomizedHelpEnabled");
if (Mscrm.FormUtility.isControlDirty($get("rdCustomizedHelpEnabled")))
{
_boAnySettingChanged = true;
return "<globalhelpurlenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</globalhelpurlenabled>";
}

return "";
}


function GetTaskBasedFlowEnabled()
{
var rdTaskBasedFlowEnabled = $get("rdTaskBasedFlowPreview");
if (rdTaskBasedFlowEnabled != null && Mscrm.FormUtility.isControlDirty(rdTaskBasedFlowEnabled))
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdTaskBasedFlowPreview");
_boAnySettingChanged = true;
return "<taskbasedflowenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</taskbasedflowenabled>";
}

return "";
}


function GetOrgInsightsEnabled()
{
var rdorgInsightsEnabled = $get("rdorgInsightsPreview");
if (rdorgInsightsEnabled != null && Mscrm.FormUtility.isControlDirty(rdorgInsightsEnabled))
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdorgInsightsPreview");
_boAnySettingChanged = true;
return "<orginsightsenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</orginsightsenabled>";
}

return "";
}


function GetCortanaProactiveExperienceEnabled()
{
var rdCortanaProactiveExperienceEnabled = $get("rdCortanaProactiveExperiencePreview");
if (rdCortanaProactiveExperienceEnabled != null)
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdCortanaProactiveExperiencePreview");
_boAnySettingChanged = true;
return "<cortanaproactiveexperienceenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</cortanaproactiveexperienceenabled>";
}

return "";
}


function GetDelveActionHubIntegrationEnabled()
{
var rdDelveActionHubIntegrationEnabled = $get("rdDelveActionHubPreview");
if (rdDelveActionHubIntegrationEnabled != null)
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdDelveActionHubPreview");
_boAnySettingChanged = true;

if(ctrl.get_dataValue() != null)
return "<isdelveactionhubintegrationenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</isdelveactionhubintegrationenabled>";
}

return "";
}


function GetAppendURLParametersEnabled()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAppendURLParametersEnabled");
if (Mscrm.FormUtility.isControlDirty($get("rdAppendURLParametersEnabled")))
{
_boAnySettingChanged = true;
return "<globalappendurlparametersenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</globalappendurlparametersenabled>";
}

return "";
}

function GetQuickFindRecordLimitEnabled()
{
if (!IsNull(rdQuickFindRecordLimitEnabled) && Mscrm.FormUtility.isControlDirty($get("rdQuickFindRecordLimitEnabled")))
{
_boAnySettingChanged = true;
return "<quickfindrecordlimitenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdQuickFindRecordLimitEnabled").get_dataValue() ? "true" : "false") + "</quickfindrecordlimitenabled>";
}

return "";
}

function GetIsFullTextSearchEnabled()
{
if (typeof(rdIsFullTextSearchEnabled) != "undefined"  && !IsNull(rdIsFullTextSearchEnabled) && Mscrm.FormUtility.isControlDirty($get("rdIsFullTextSearchEnabled")))
{
_boAnySettingChanged = true;
return "<isfulltextsearchenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdIsFullTextSearchEnabled").get_dataValue() ? "true" : "false") + "</isfulltextsearchenabled>";
}

return "";
}

function GetIsExternalSearchEnabled()
{
var ckEnableExternalSearchValue = $get("ckEnableExternalSearch");


if ((!IsNull(ckEnableExternalSearchValue) && Mscrm.FormUtility.isControlDirty(ckEnableExternalSearchValue)))
{
_boAnySettingChanged = true;


window.top.IsRelevanceSearchEnabledInOrgSettings = ckEnableExternalSearchValue.checked;

return "<isexternalsearchindexenabled>" + (ckEnableExternalSearchValue.checked ? "true" : "false") + "</isexternalsearchindexenabled>";
}

return "";
}


function GetProductRecommendationsPreviewEnabled()
{
var rdProductRecommendationsPreview = $get("rdProductRecommendationsPreview");
if (!IsNull(rdProductRecommendationsPreview) && Mscrm.FormUtility.isControlDirty(rdProductRecommendationsPreview))
{
_boAnySettingChanged = true;
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdProductRecommendationsPreview");
return "<productrecommendationsenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</productrecommendationsenabled>";
}

return "";
}


function GetTextAnalyticsPreviewEnabled()
{
var rdTextAnalyticsPreview = $get("rdTextAnalyticsPreview");
if (!IsNull(rdTextAnalyticsPreview) && Mscrm.FormUtility.isControlDirty(rdTextAnalyticsPreview))
{
rdTextAnalyticsPreview
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdTextAnalyticsPreview");
return "<textanalyticsenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</textanalyticsenabled>";
}

return "";
}


function GetRelationshipIntelligenceEnabled()
{
var previewSettings ="";
<% if (IsRelationshipAnalyticsEnabled && IsRelationshipAnalyticsSolutionInstalled)
{%>
var rdRelationshipAnalyticsPreview = $get("rdRelationshipAnalyticsPreview");
if (!IsNull(rdRelationshipAnalyticsPreview) && Mscrm.FormUtility.isControlDirty(rdRelationshipAnalyticsPreview))
{
_boAnySettingChanged = true;
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdRelationshipAnalyticsPreview");
previewSettings = previewSettings + "<isactivityanalysisenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</isactivityanalysisenabled>";
}
<%} %>

<% if (IsEmailEngagementEnabled)
{%>
var rdEmailEngagementPreview = $get("rdEmailEngagementPreview");
if (!IsNull(rdEmailEngagementPreview) && Mscrm.FormUtility.isControlDirty(rdEmailEngagementPreview))
{
_boAnySettingChanged = true;
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEmailEngagementPreview");
previewSettings = previewSettings +  "<ispreviewforemailmonitoringallowed>" + (ctrl.get_dataValue() ? "true" : "false") + "</ispreviewforemailmonitoringallowed>";
}
<%} %>

<% if (IsRelationshipAssistantEnabled)
{%>
var rdRelationshipAssistantPreview = $get("rdRelationshipAssistantPreview");
if (!IsNull(rdRelationshipAssistantPreview) && Mscrm.FormUtility.isControlDirty(rdRelationshipAssistantPreview))
{
_boAnySettingChanged = true;
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdRelationshipAssistantPreview");
previewSettings = previewSettings +  "<ispreviewenabledforactioncard>" + (ctrl.get_dataValue() ? "true" : "false") + "</ispreviewenabledforactioncard>";
}
<%} %>

<% if (IsAutoCaptureEnabled) {%>
var rdAutoDataCapture = $get("rdAutoDataCapture");
if (!IsNull(rdAutoDataCapture) && Mscrm.FormUtility.isControlDirty(rdAutoDataCapture))
{
_boAnySettingChanged = true;
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAutoDataCapture");
previewSettings = previewSettings + "<ispreviewforautocaptureenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</ispreviewforautocaptureenabled>";
}
<%} %>
return previewSettings;
}

function OpenQuickFindConfigDialog()
{
var oUrl = Mscrm.CrmUri.create("/Tools/SystemSettings/Dialogs/QuickFindConfiguration.aspx");
var dialogOptions = new Xrm.DialogOptions();
dialogOptions.height = 600;
dialogOptions.width = 800;
Xrm.Internal.openDialog(oUrl.toString(), dialogOptions, null, null, null);

}

function GetIsPresencedEnabled()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsPresenceEnabled");
if (Mscrm.FormUtility.isControlDirty($get("rdIsPresenceEnabled")))
{
_boAnySettingChanged = true;
return "<ispresenceenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</ispresenceenabled>";
}

return "";
}

function GetIsAutoSaveEnabled()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsAutoSaveEnabled");
if (Mscrm.FormUtility.isControlDirty($get("rdIsAutoSaveEnabled")))
{
_boAnySettingChanged = true;
return "<isautosaveenabled>" + (ctrl.get_dataValue() ? "true" : "false") + "</isautosaveenabled>";
}

return "";
}


function GetAllowUsersSeeAppDownloadMessage()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowUsersSeeAppDownloadMessage");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowUsersSeeAppDownloadMessage")))
{
_boAnySettingChanged = true;
return "<allowusersseeappdownloadmessage>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowusersseeappdownloadmessage>";
}

return "";
}

function getReportCategoryUpdate()
{
var reportCategoryData = "";
if(!IsNull(edtCategory_listEditComponent))
{
reportCategoryData += "<reportcategories>" + edtCategory_listEditComponent.get_xmlData() + "</reportcategories>";
}
return reportCategoryData;
}

function GetRollupConfiguration()
{
var rollupConfigurationData = "";
if (Mscrm.FormUtility.isControlDirty($get('rollupExpiryTime')))
{
_boAnySettingChanged = true;
rollupConfigurationData += "<goalrollupexpirytime>" + Mscrm.FormControlInputBehavior.GetBehavior('rollupExpiryTime').get_dataValue() + "</goalrollupexpirytime>";
}

if (Mscrm.FormUtility.isControlDirty($get('rollupFrequency')))
{
_boAnySettingChanged = true;
rollupConfigurationData += "<goalrollupfrequency>" + Mscrm.FormControlInputBehavior.GetBehavior('rollupFrequency').get_dataValue() + "</goalrollupfrequency>";
}

return rollupConfigurationData;
}

function GetIsSLASuppressed()
{
if (typeof(rdIsSLASuppressed) != "undefined" && !IsNull(rdIsSLASuppressed) && Mscrm.FormUtility.isControlDirty($get("rdIsSLASuppressed")))
{
_boAnySettingChanged = true;
return "<suppresssla>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdIsSLASuppressed").get_dataValue() ? "true" : "false") + "</suppresssla>";
}

return "";
}

function GetAutoApplySLA()
{
if (typeof(rdAutoApplySLA) != "undefined" && !IsNull(rdAutoApplySLA) && Mscrm.FormUtility.isControlDirty($get("rdAutoApplySLA")))
{
_boAnySettingChanged = true;
return "<autoapplysla>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdAutoApplySLA").get_dataValue() ? "true" : "false") + "</autoapplysla>";
}

return "";
}

function GetAutoApplyDefaultOnCaseCreate()
{
if (typeof(rdAutoApplyDefaultOnCaseCreate) != "undefined" && !IsNull(rdAutoApplyDefaultOnCaseCreate) && Mscrm.FormUtility.isControlDirty($get("rdAutoApplyDefaultOnCaseCreate")))
{
_boAnySettingChanged = true;
return "<autoapplydefaultoncasecreate>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdAutoApplyDefaultOnCaseCreate").get_dataValue() ? "true" : "false") + "</autoapplydefaultoncasecreate>";
}

return "";
}

function GetAutoApplyDefaultOnCaseUpdate()
{
if (typeof(rdAutoApplyDefaultOnCaseUpdate) != "undefined" && !IsNull(rdAutoApplyDefaultOnCaseUpdate) && Mscrm.FormUtility.isControlDirty($get("rdAutoApplyDefaultOnCaseUpdate")))
{
_boAnySettingChanged = true;
return "<autoapplydefaultoncaseupdate>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdAutoApplyDefaultOnCaseUpdate").get_dataValue() ? "true" : "false") + "</autoapplydefaultoncaseupdate>";
}

return "";
}

function GetIsSocialCareDisabled()
{
if (typeof(rdIsSocialCareDisabled) != "undefined" && !IsNull(rdIsSocialCareDisabled) && Mscrm.FormUtility.isControlDirty($get("rdIsSocialCareDisabled")))
{
_boAnySettingChanged = true;
return "<disablesocialcare>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdIsSocialCareDisabled").get_dataValue() ? "true" : "false") + "</disablesocialcare>";
}

return "";
}

function GetDisplayNavigationTour()
{
if (typeof(rdDisplayNavigationTour) != "undefined" && !IsNull(rdDisplayNavigationTour) && Mscrm.FormUtility.isControlDirty($get("rdDisplayNavigationTour")))
{
_boAnySettingChanged = true;
return "<displaynavigationtour>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdDisplayNavigationTour").get_dataValue() ? "true" : "false") + "</displaynavigationtour>";
}

return "";
}

function GetUseLegacyRendering()
{
if (typeof(rdUseLegacyFormRendering) != "undefined" && !IsNull(rdUseLegacyFormRendering) && Mscrm.FormUtility.isControlDirty($get("rdUseLegacyFormRendering")))
{
_boAnySettingChanged = true;
return "<uselegacyrendering>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdUseLegacyFormRendering").get_dataValue() ? "true" : "false") + "</uselegacyrendering>";
}

return "";
}

function GetAzureCDNSetting()
{
if (typeof(rdAzureCDN) != "undefined" && !IsNull(rdAzureCDN) && Mscrm.FormUtility.isControlDirty($get("rdAzureCDN")))
{
_boAnySettingChanged = true;
return "<servestaticresourcesfromazurecdn>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdAzureCDN").get_dataValue() ? "true" : "false") + "</servestaticresourcesfromazurecdn>";
}

return "";
}

function GetEnableLPAuthoring()
{
if (typeof(rdLPAuthoringEnabled) != "undefined" && !IsNull(rdLPAuthoringEnabled) && Mscrm.FormUtility.isControlDirty($get("rdLPAuthoringEnabled")))
{
_boAnySettingChanged = true;
return "<enablelpauthoring>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdLPAuthoringEnabled").get_dataValue() ? "true" : "false") + "</enablelpauthoring>";
}

return "";
}

function GetPowerBIFeatureEnabled()
{
if (typeof(rdPowerBiFeatureEnabled) != "undefined" && !IsNull(rdPowerBiFeatureEnabled) && Mscrm.FormUtility.isControlDirty($get("rdPowerBiFeatureEnabled")))
{
_boAnySettingChanged = true;
return "<powerbifeatureenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdPowerBiFeatureEnabled").get_dataValue() ? "true" : "false") + "</powerbifeatureenabled>";
}

return "";
}

function GetApplicationMetadataOnDemandSyncSettings()
{
if (typeof(ckIsMobileClientOnDemandSyncEnabled) != "undefined" && !IsNull(ckIsMobileClientOnDemandSyncEnabled) && Mscrm.FormUtility.isControlDirty($get("ckIsMobileClientOnDemandSyncEnabled")))
{
_boAnySettingChanged = true;
return "<ismobileclientondemandsyncenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("ckIsMobileClientOnDemandSyncEnabled").get_dataValue() ? "true" : "false") + "</ismobileclientondemandsyncenabled>";
}

return "";
}

function GetConflictDetectionSettings()
{
if (typeof(rdIsConflictDetectionEnabledForMobileClient) != "undefined" && !IsNull(rdIsConflictDetectionEnabledForMobileClient) && Mscrm.FormUtility.isControlDirty($get("rdIsConflictDetectionEnabledForMobileClient")))
{
_boAnySettingChanged = true;
return "<isconflictdetectionenabledformobileclient>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdIsConflictDetectionEnabledForMobileClient").get_dataValue() ? "true" : "false") + "</isconflictdetectionenabledformobileclient>";
}

return "";
}

function GetIsMicrosoftFlowEnabled()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsMicrosoftFlowEnabled");
if (Mscrm.FormUtility.isControlDirty($get("rdIsMicrosoftFlowEnabled")))
{
_boAnySettingChanged = true;
return "<enablemicrosoftflowintegration>" + (ctrl.get_dataValue() ? "true" : "false") + "</enablemicrosoftflowintegration>";
}
return "";
}








function updateUI(bDropName)
{
var bConfirm = true;

if (bDropName)
{
bConfirm = confirm(LOCID_NAME_ORDER_CONFIRM);

if (bConfirm)
{
$get("FullName").value = $get("selectFullNameConventionCode").value;
}
else
{
$get("selectFullNameConventionCode").value = $get("FullName").value;
}
}
}




var _iTrackingPrefixMaxLength = <%=TrackingPrefixMaxLength.ToString("D", CultureInfo.InvariantCulture)%>;
var _sTrackingPrefixSeparator = <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(TrackingPrefixSeparator)%>;
var _sOriginalTrackingPrefix;

function GetTrackingPrefix()
{
var sTrackingPrefix = "";
var sOldTrackingPrefix = "";
var aTrackingPrefixes = _sOriginalTrackingPrefix.split(_sTrackingPrefixSeparator);


for (var i = 0; i < aTrackingPrefixes.length; i++)
{
var sSubTrackingPrefix = aTrackingPrefixes[i].replace(/^\s*|\s*$/g,"");
if (sSubTrackingPrefix != "")
{
sOldTrackingPrefix = sSubTrackingPrefix;
break;
}
}


if (txtTrackingPrefixCtrl.get_dataValue() != null)
{
sTrackingPrefix = txtTrackingPrefixCtrl.get_dataValue();
}


if (sTrackingPrefix == sOldTrackingPrefix)
{

return "";
}
else
{


sTrackingPrefix += _sTrackingPrefixSeparator + _sOriginalTrackingPrefix;


sTrackingPrefix = trimTrackingPrefix(sTrackingPrefix);

_boAnySettingChanged = true;
return "<trackingprefix>" + CrmEncodeDecode.CrmXmlEncode(sTrackingPrefix) + "</trackingprefix>";
}
}

function setTrackingPrefix(sOriginalTrackingPrefix)
{
var sTrackingPrefix;


var aTrackingPrefixes = sOriginalTrackingPrefix.split(_sTrackingPrefixSeparator);


for (var i = 0; i < aTrackingPrefixes.length; i++)
{
var sSubTrackingPrefix = aTrackingPrefixes[i].replace(/^\s*|\s*$/g,"");
if (sSubTrackingPrefix != "")
{
sTrackingPrefix = sSubTrackingPrefix;
break;
}
}


_sOriginalTrackingPrefix = sOriginalTrackingPrefix;


txtTrackingPrefixCtrl.set_dataValue(sTrackingPrefix);
}

function trimTrackingPrefix(sTrackingPrefix)
{
if (sTrackingPrefix.length > _iTrackingPrefixMaxLength)
{

var aTrackingPrefixes = sTrackingPrefix.split(_sTrackingPrefixSeparator);

sTrackingPrefix = "";
for (var i = 0; i < aTrackingPrefixes.length; i++)
{
var sSubTrackingPrefix = aTrackingPrefixes[i].replace(/^\s*|\s*$/g,"");
if (sSubTrackingPrefix == "")
{
continue;
}
else if ((sTrackingPrefix.length + sSubTrackingPrefix.length) <= _iTrackingPrefixMaxLength)
{
sTrackingPrefix += sSubTrackingPrefix + _sTrackingPrefixSeparator;
}
else
{
break;
}
}
}

return sTrackingPrefix;
}

function setSMFilter(sOrignalSMFilter)
{
txtSMFilterCtrl.set_dataValue(sOrignalSMFilter);
}

function GetRegionalFormatCode()
{
if (Mscrm.FormUtility.isControlDirty($get("selectRegionalFormatCode")))
{
_boAnySettingChanged = true;
return "<localeid>" + CrmEncodeDecode.CrmXmlEncode($get("selectRegionalFormatCode").value) + "</localeid>";
}

return "";
}

function GetFullNameConventionCode()
{
if (Mscrm.FormUtility.isControlDirty($get("selectFullNameConventionCode")))
{
_boAnySettingChanged = true;
return "<fullnameconventioncode>" + CrmEncodeDecode.CrmXmlEncode($get("selectFullNameConventionCode").value) + "</fullnameconventioncode>";
}

return "";
}

function GetTrackingIdBase()
{
if (Mscrm.FormUtility.isControlDirty($get('numTrackingIdBase')))
{
_boAnySettingChanged = true;
return "<trackingtokenidbase>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numTrackingIdBase').get_dataValue()) + "</trackingtokenidbase>";
}

return "";
}

function GetTrackingIdLength()
{
if (Mscrm.FormUtility.isControlDirty($get("selTrackingIdLength")))
{
_boAnySettingChanged = true;
return "<trackingtokeniddigits>" + CrmEncodeDecode.CrmXmlEncode(selTrackingIdLengthCtrl.get_dataValue()) + "</trackingtokeniddigits>";
}

return "";
}


function GetEnableEmailCorrelation()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableEmailCorrelation")))
{
_boAnySettingChanged = true;
return "<emailcorrelationenabled>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('ckEnableEmailCorrelation').get_dataValue()) + "</emailcorrelationenabled>";
}
}


function GetEnableFolderBasedTracking()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableFolderBasedTracking")))
{
_boAnySettingChanged = true;
return "<isfolderbasedtrackingenabled>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('ckEnableFolderBasedTracking').get_dataValue()) + "</isfolderbasedtrackingenabled>";
}
}


function GetEnableSmartMatching()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableSmartMatching")))
{
_boAnySettingChanged = true;

return "<enablesmartmatching>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior("ckEnableSmartMatching").get_dataValue()) + "</enablesmartmatching>";
}
}
function GetEnableConversationTracking()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableConversationTracking")))
{
_boAnySettingChanged = true;
return "<enableconversationtracking>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('ckEnableConversationTracking').get_dataValue()) + "</enableconversationtracking>";
}
}


function GetSMFilter()
{
if (Mscrm.FormUtility.isControlDirty($get("txtSMFilter")))
{
_boAnySettingChanged = true;
return "<hashfilterkeywords>" + CrmEncodeDecode.CrmXmlEncode(txtSMFilterCtrl.get_dataValue()) + "</hashfilterkeywords>";
}
}


function GetSMKeywordLimit()
{
if (Mscrm.FormUtility.isControlDirty($get('numSMKeywordLimit')))
{
_boAnySettingChanged = true;
return "<hashmaxcount>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numSMKeywordLimit').get_dataValue()) + "</hashmaxcount>";
}
}


function GetSMMaxDifference()
{
if (Mscrm.FormUtility.isControlDirty($get('numSMMaxDifference')))
{
_boAnySettingChanged = true;
return "<hashdeltasubjectcount>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numSMMaxDifference').get_dataValue()) + "</hashdeltasubjectcount>";
}
}


function GetSMMinRecipients()
{
if (Mscrm.FormUtility.isControlDirty($get('numSMMinRecipients')))
{
_boAnySettingChanged = true;
return "<hashminaddresscount>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numSMMinRecipients').get_dataValue()) + "</hashminaddresscount>";
}
}

function GetShareOnAssign()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdShareOnAssign");
if (Mscrm.FormUtility.isControlDirty($get("rdShareOnAssign")))
{
_boAnySettingChanged = true;
return "<sharetopreviousowneronassign>" + (ctrl.get_dataValue() ? "true" : "false") + "</sharetopreviousowneronassign>";
}

return "";
}

function GetCurrencyDisplayOption()
{
if (Mscrm.FormUtility.isControlDirty($get("picklistCurrencyDisplayOption")))
{
_boAnySettingChanged = true;
return "<currencydisplayoption>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior("picklistCurrencyDisplayOption").get_dataValue()) + "</currencydisplayoption>";
}

return "";
}


function GetHelpURL()
{
if (Mscrm.FormUtility.isControlDirty($get("txtURLHelp")))
{
_boAnySettingChanged = true;
var txtURLHelpControl = Mscrm.FormControlInputBehavior.GetBehavior("txtURLHelp");
var dataValue = txtURLHelpControl.get_dataValue() ? txtURLHelpControl.get_dataValue() : "";
txtURLHelpControl.set_dataValue(dataValue.replace(/[\n\r]+/g, ""));
return "<globalhelpurl>" + CrmEncodeDecode.CrmXmlEncode(txtURLHelpControl.get_dataValue() ? txtURLHelpControl.get_dataValue() : "") + "</globalhelpurl>";
}

return "";
}

function GetBlockedAttachment()
{
if (Mscrm.FormUtility.isControlDirty($get("txtBlockedAttachment")))
{
_boAnySettingChanged = true;

var txtBlockedAttachmentControl = Mscrm.FormControlInputBehavior.GetBehavior("txtBlockedAttachment");
var dataValue = txtBlockedAttachmentControl.get_dataValue() ? txtBlockedAttachmentControl.get_dataValue() : "";
txtBlockedAttachmentControl.set_dataValue(dataValue.replace(/[\n\r]+/g, ""));
return "<blockedattachments>" + CrmEncodeDecode.CrmXmlEncode(txtBlockedAttachmentControl.get_dataValue() ? txtBlockedAttachmentControl.get_dataValue() : "") + "</blockedattachments>";
}

return "";
}

function GetUseSecureFrame()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdUseSecureFrame");
if (Mscrm.FormUtility.isControlDirty($get("rdUseSecureFrame")))
{
_boAnySettingChanged = true;
return "<rendersecureiframeforemail>" + (ctrl.get_dataValue() ? "true" : "false") + "</rendersecureiframeforemail>";
}

return "";
}

function GetMaximumAppointmentDuration()
{
if (Mscrm.FormUtility.isControlDirty($get('numberMaximumAppointmentDuration')))
{
_boAnySettingChanged = true;
var value = Mscrm.FormControlInputBehavior.GetBehavior('numberMaximumAppointmentDuration').get_dataValue();
return "<maxappointmentdurationdays>" + value + "</maxappointmentdurationdays>";
}

return "";
}

function GetAllowUnresolvedParty()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowUnresolvedParty");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowUnresolvedParty")))
{
_boAnySettingChanged = true;
return "<allowunresolvedpartiesonemailsend>" + (ctrl.get_dataValue() ? "true" : "false") + "</allowunresolvedpartiesonemailsend>";
}

return "";
}


function GetUnresolveIfMultipleMatch()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdUnresolveIfMultipleMatch");
if (Mscrm.FormUtility.isControlDirty($get("rdUnresolveIfMultipleMatch")))
{
_boAnySettingChanged = true;
return "<unresolveemailaddressifmultiplematch>" + (ctrl.get_dataValue() ? "true" : "false") + "</unresolveemailaddressifmultiplematch>";
}

return "";
}

function GetEmailMonitoring()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdAllowEmailMonitoring");
if (Mscrm.FormUtility.isControlDirty($get("rdAllowEmailMonitoring")))
{
_boAnySettingChanged = true;
return "<isemailmonitoringallowed>" + (ctrl.get_dataValue() ? "true" : "false") + "</isemailmonitoringallowed>";
}

return "";
}

function GetEnableResponseCreation()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableResponseCreation");
if (Mscrm.FormUtility.isControlDirty($get("rdEnableResponseCreation")))
{
_boAnySettingChanged = true;
return "<allowautoresponsecreation>" + (ctrl.get_dataValue() ? "1" : "0") + "</allowautoresponsecreation>";
}

return "";
}

function GetEnableExecution()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableExecution");
if (Mscrm.FormUtility.isControlDirty($get("rdEnableExecution")))
{
_boAnySettingChanged = true;
return "<allowmarketingemailexecution>" + (ctrl.get_dataValue() ? "1" : "0") + "</allowmarketingemailexecution>";
}

return "";
}

function GetEnableDefaultCountryCodeFlag()
{
_boAnySettingChanged = true;
if (!IsNull(document.getElementById("ckEnableDefaultCountryCode")))
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableDefaultCountryCode")))
{
return "<isdefaultcountrycodecheckenabled>" + ($get("ckEnableDefaultCountryCode").checked ? "true" : "false") + "</isdefaultcountrycodecheckenabled>";

}
}
return "";
}

function GetEnableDefaultCountryCodeValue()
{
_boAnySettingChanged = true;
if (!IsNull(document.getElementById("txtDefaultCountryCode")))
{
if (Mscrm.FormUtility.isControlDirty($get("txtDefaultCountryCode")))
{
var txtDefaultCountryCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCountryCode");
var dataValue = txtDefaultCountryCodeControl.get_dataValue() ? txtDefaultCountryCodeControl.get_dataValue() : "";
return "<defaultcountrycode>" + CrmEncodeDecode.CrmXmlEncode(dataValue) + "</defaultcountrycode>";
}
}
return "";
}


function GetEnableUnsubscription()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscription");
if (Mscrm.FormUtility.isControlDirty($get("rdEnableUnsubscription")))
{
_boAnySettingChanged = true;
return "<allowautounsubscribe>" + (ctrl.get_dataValue() ? "1" : "0") + "</allowautounsubscribe>";
}

return "";
}

function GetEnableUnsubscriptionAcknowledgement()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdEnableUnsubscriptionAcknowledgement");
if (Mscrm.FormUtility.isControlDirty($get("rdEnableUnsubscriptionAcknowledgement")))
{
_boAnySettingChanged = true;
return "<allowautounsubscribeacknowledgement>" + (ctrl.get_dataValue() ? "1" : "0") + "</allowautounsubscribeacknowledgement>";
}

return "";
}

function GetDefaultProtocolInformation()
{
var useSkypeProtocol = Mscrm.FormControlInputBehavior.GetBehavior("rdUseSkypeProtocol");
if (!IsNull(useSkypeProtocol) && Mscrm.FormUtility.isControlDirty($get("rdUseSkypeProtocol")))
{
_boAnySettingChanged = true;
return "<useskypeprotocol>" + (useSkypeProtocol.get_dataValue() ? "1" : "0") + "</useskypeprotocol>";
}
return "";
}

function GetTemplateLookup()
{
if (Mscrm.FormUtility.isControlDirty($get("luTemplateLookup")))
{
_boAnySettingChanged = true;
var lookupValue = Mscrm.FormControlInputBehavior.GetBehavior("luTemplateLookup").get_dataValue();
return "<acknowledgementtemplateid>" + ((IsNull(lookupValue) || IsNull(lookupValue[0].id)) ? "" : CrmEncodeDecode.CrmXmlEncode(lookupValue[0].id)) + "</acknowledgementtemplateid>";
}

return "";
}

function openEntityCustomization()
{
openObj(7100, '<%=SolutionConstants.DefaultSolutionId.ToString("B") %>', 'def_category=<%=Microsoft.Crm.Application.Utility.Util.Entity%>', null, true, null);
}

function GetEnableAudit()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableAudit")))
{
_boAnySettingChanged = true;
return "<isauditenabled>" + ($get("ckEnableAudit").checked ? "true" : "false") + "</isauditenabled>";
}

return "";
}
function GetEnableReadAudit() {

if (_isActivityLoggingFeatureEnabled) {
if (Mscrm.FormUtility.isControlDirty($get("ckEnableReadAudit"))) {
_boAnySettingChanged = true;
return "<isreadauditenabled>" + ($get("ckEnableReadAudit").checked ? "true" : "false") + "</isreadauditenabled>";
}
}

return "";
}
function GetEnableUserAccessAudit()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableUserAccessAudit")))
{
_boAnySettingChanged = true;
return "<isuseraccessauditenabled>" + ($get("ckEnableUserAccessAudit").checked ? "true" : "false") + "</isuseraccessauditenabled>";
}

return "";
}
function GetAreaAuditXml()
{
var auditAreaXml = "<auditareas>";


if (document.getElementById("ckCommonAudit") != null)
{
if (Mscrm.FormUtility.isControlDirty($get("ckCommonAudit")))
{
_boAnySettingChanged = true;
auditAreaXml = auditAreaXml + "<commonarea enable=\"" + ($get("ckCommonAudit").checked ? "true" : "false") + "\">";
auditAreaXml = auditAreaXml + "<% =commonEntitiesXml %>" + "</commonarea>"
}

if (Mscrm.FormUtility.isControlDirty($get("ckSFAAudit")))
{
_boAnySettingChanged = true;
auditAreaXml = auditAreaXml + "<sfaarea enable=\"" + ($get("ckSFAAudit").checked ? "true" : "false") + "\">";
auditAreaXml = auditAreaXml + "<% =sfaEntitiesXml %>" + "</sfaarea>"
}

if (Mscrm.FormUtility.isControlDirty($get("ckMAAudit")))
{
_boAnySettingChanged = true;
auditAreaXml = auditAreaXml + "<maaarea enable=\"" + ($get("ckMAAudit").checked ? "true" : "false") + "\">";
auditAreaXml = auditAreaXml + "<% =maEntitiesXml %>" + "</maaarea>"
}

if (Mscrm.FormUtility.isControlDirty($get("ckCSAudit")))
{
_boAnySettingChanged = true;
auditAreaXml = auditAreaXml + "<csarea enable=\"" + ($get("ckCSAudit").checked ? "true" : "false") + "\">";
auditAreaXml = auditAreaXml + "<% =csEntitiesXml %>" + "</csarea>"
}
}
auditAreaXml = auditAreaXml + "</auditareas>";
return auditAreaXml;
}

function GetPricingDecimalPrecision()
{
if (Mscrm.FormUtility.isControlDirty($get("selectPricingDecimalPrecision")))
{
_boAnySettingChanged = true;
return "<pricingdecimalprecision>" + CrmEncodeDecode.CrmXmlEncode($get("selectPricingDecimalPrecision").value) + "</pricingdecimalprecision>";
}

return "";
}

function GetMaxUploadFileSize()
{
if (Mscrm.FormUtility.isControlDirty($get('numberMaxUploadFileSize')))
{
_boAnySettingChanged = true;

return "<maxuploadfilesize>" + Mscrm.FormControlInputBehavior.GetBehavior('numberMaxUploadFileSize').get_dataValue() * 1024 + "</maxuploadfilesize>";
}

return "";
}





function GetEmailServerProfileOption()
{
if (Mscrm.FormUtility.isControlDirty($get("emailServerProfile")))
{
_boAnySettingChanged = true;
var oEmailServerProfile = Mscrm.FormControlInputBehavior.GetBehavior('emailServerProfile');
return "<defaultemailserverprofileid>" + ((IsNull(oEmailServerProfile.get_dataValue()) || IsNull(oEmailServerProfile.get_dataValue()[0].id)) ? "" : CrmEncodeDecode.CrmXmlEncode(oEmailServerProfile.get_dataValue()[0].id)) + "</defaultemailserverprofileid>";
}

return "";
}

function GetDefaultEmailSettings()
{
if (Mscrm.FormUtility.isControlDirty($get("incomingEmailDeliveryMethod")) ||
Mscrm.FormUtility.isControlDirty($get("outgoingEmailDeliveryMethod")) ||
Mscrm.FormUtility.isControlDirty($get("actDeliveryMethod")))
{
_boAnySettingChanged = true;
return "<defaultemailsettings>" +
CrmEncodeDecode.CrmXmlEncode("<EmailSettings>" +
"<IncomingEmailDeliveryMethod>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('incomingEmailDeliveryMethod').get_dataValue()) + "</IncomingEmailDeliveryMethod>" +
"<OutgoingEmailDeliveryMethod>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('outgoingEmailDeliveryMethod').get_dataValue()) + "</OutgoingEmailDeliveryMethod>" +
"<ACTDeliveryMethod>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('actDeliveryMethod').get_dataValue()) + "</ACTDeliveryMethod>" +
"</EmailSettings>") +
"</defaultemailsettings>";
}

return "";
}




function GetIgnoreInternalEmail()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableExclude")))
{
_boAnySettingChanged = true;
return "<ignoreinternalemail>" + ($get("ckEnableExclude").checked ? "false" : "true") + "</ignoreinternalemail>";
}

return "";
}





function GetEnableBingMapsIntegration()
{
if (Mscrm.FeatureControl.get_Current().isFeatureEnabled(Mscrm.FeatureNames.RefreshSales))
{
if (Mscrm.FormUtility.isControlDirty($get("rdEnableBingIntegration")))
{
_boAnySettingChanged = true;
return "<enablebingmapsintegration>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdEnableBingIntegration").get_dataValue() ? "true" : "false") + "</enablebingmapsintegration>";
}
}
return "";
}

function GetBingMapsApiKey()
{
if (!IsNull(document.getElementById("txtBingMapsApiKey")))
{
if(Mscrm.FormUtility.isControlDirty($get("txtBingMapsApiKey")))
{
_boAnySettingChanged = true;
var txtBingMapsApiKeyControl= Mscrm.FormControlInputBehavior.GetBehavior("txtBingMapsApiKey");
var dataValue = txtBingMapsApiKeyControl.get_dataValue() ? txtBingMapsApiKeyControl.get_dataValue() : "";
return "<bingmapsapikey>" + CrmEncodeDecode.CrmXmlEncode(dataValue) + "</bingmapsapikey>";
}
}
return "";
}





function GetEnableAppMode()
{
if (Mscrm.FormUtility.isControlDirty($get("ckEnableAppMode")))
{
_boAnySettingChanged = true;
return "<isappmode>" + ($get("ckEnableAppMode").checked ? "true" : "false") + "</isappmode>";
}

return "";
}




function GetPluginTracing()
{
if (Mscrm.FormUtility.isControlDirty($get("selectPluginTracingLevels")))
{
_boAnySettingChanged = true;
return "<plugintracelogsetting>" + CrmEncodeDecode.CrmXmlEncode($get("selectPluginTracingLevels").value) + "</plugintracelogsetting>";
}

return "";
}

function GetIsEnabledForAllRoles()
{
var ctrl = Mscrm.FormControlInputBehavior.GetBehavior("rdIsEnabledForAllRoles");
if (Mscrm.FormUtility.isControlDirty($get('rdIsEnabledForAllRoles')))
{
_boAnySettingChanged = true;
return "<isenabledforallroles>" + (ctrl.get_dataValue() ? "true" : "false") + "</isenabledforallroles>";
}
return "";
}

function GetDefaultCrmCustomName()
{
if (Mscrm.FormUtility.isControlDirty($get("txtDefaultCrmCustomName")))
{
_boAnySettingChanged = true;
var txtDefaultCrmCustomNameControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDefaultCrmCustomName");
var dataValue = txtDefaultCrmCustomNameControl.get_dataValue() ? txtDefaultCrmCustomNameControl.get_dataValue() : "";
txtDefaultCrmCustomNameControl.set_dataValue(dataValue);
return "<defaultcrmcustomname>" + CrmEncodeDecode.CrmXmlEncode(txtDefaultCrmCustomNameControl.get_dataValue() ? txtDefaultCrmCustomNameControl.get_dataValue() : "") + "</defaultcrmcustomname>";
}
return "";
}






function GetSessionTimeoutEnabled()
{
if (typeof(rdSessionTimeoutEnabled) != "undefined" && !IsNull(rdSessionTimeoutEnabled) && Mscrm.FormUtility.isControlDirty($get("rdSessionTimeoutEnabled")))
{
_boAnySettingChanged = true;
_boSessionTimeoutSettingChanged = true;
return "<sessiontimeoutenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue() ? "true" : "false") + "</sessiontimeoutenabled>";
}

return "";
}


function GetSessionTimeout()
{
if (Mscrm.FormUtility.isControlDirty($get('numSessionTimeout')) || _boSessionTimeoutSettingChanged)
{
_boAnySettingChanged = true;

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue())
{
return "<sessiontimeoutinmins>" + 0 + "</sessiontimeoutinmins>";
}
else
{
return "<sessiontimeoutinmins>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeout').get_dataValue()) + "</sessiontimeoutinmins>";
}
}

return "";
}


function GetSessionTimeoutReminder()
{
if (Mscrm.FormUtility.isControlDirty($get('numSessionTimeoutReminder')) || _boSessionTimeoutSettingChanged)
{
_boAnySettingChanged = true;

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdSessionTimeoutEnabled").get_dataValue())
{
return "<sessiontimeoutreminderinmins>" + 0 + "</sessiontimeoutreminderinmins>";
}
else
{
return "<sessiontimeoutreminderinmins>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numSessionTimeoutReminder').get_dataValue()) + "</sessiontimeoutreminderinmins>";
}
}

return "";
}






function GetInactivityTimeoutEnabled()
{
if (typeof(rdInactivityTimeoutEnabled) != "undefined" && !IsNull(rdInactivityTimeoutEnabled) && Mscrm.FormUtility.isControlDirty($get("rdInactivityTimeoutEnabled")))
{
_boAnySettingChanged = true;
_boInactivityTimeoutSettingChanged = true;
return "<inactivitytimeoutenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue() ? "true" : "false") + "</inactivitytimeoutenabled>";
}

return "";
}


function GetInactivityTimeout()
{
if (Mscrm.FormUtility.isControlDirty($get('numInactivityTimeout')) || _boInactivityTimeoutSettingChanged)
{
_boAnySettingChanged = true;

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue())
{
return "<inactivitytimeoutinmins>" + 0 + "</inactivitytimeoutinmins>";
}
else
{
return "<inactivitytimeoutinmins>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeout').get_dataValue()) + "</inactivitytimeoutinmins>";
}
}

return "";
}


function GetInactivityTimeoutReminder()
{
if (Mscrm.FormUtility.isControlDirty($get('numInactivityTimeoutReminder')) || _boInactivityTimeoutSettingChanged)
{
_boAnySettingChanged = true;

if (!Mscrm.FormControlInputBehavior.GetBehavior("rdInactivityTimeoutEnabled").get_dataValue())
{
return "<inactivitytimeoutreminderinmins>" + 0 + "</inactivitytimeoutreminderinmins>";
}
else
{
return "<inactivitytimeoutreminderinmins>" + CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior('numInactivityTimeoutReminder').get_dataValue()) + "</inactivitytimeoutreminderinmins>";
}
}

return "";
}





function GetEnableBusinessNetwork()
{
if (Mscrm.FormUtility.isControlDirty($get('rdIsBusinessNetworkEnabled')))
{
_boAnySettingChanged = true;
return "<isbusinessnetworkenabled>" + ($get('rdIsBusinessNetworkEnabled').checked ? "true" : "false") + "</isbusinessnetworkenabled>";
}
return "";
}




function GetDisableIECompatibilityMode()
{
var chkIECompatMode = $get("ckDisableIECompatibilityMode");
if(!IsNull(chkIECompatMode)){
if (Mscrm.FormUtility.isControlDirty(chkIECompatMode))
{
_boAnySettingChanged = true;
return "<DisableIECompatMode>" + (chkIECompatMode.checked ? "true" : "false") + "</DisableIECompatMode>";
}
}

return "";
}

function GetMaximumBundleItems()
{
if (Mscrm.FormUtility.isControlDirty($get('numberMaximumBundleItems')))
{
_boAnySettingChanged = true;
var value = Mscrm.FormControlInputBehavior.GetBehavior('numberMaximumBundleItems').get_dataValue();
return "<maxproductsinbundle>" + value + "</maxproductsinbundle>";
}

return "";
}



function GetDefaultDiscountSetting()
{
if (Mscrm.FormUtility.isControlDirty($get("picklistDiscountTypeOptionMethod")))
{
_boAnySettingChanged = true;
return "<discountcalculationmethod>"+ CrmEncodeDecode.CrmXmlEncode(Mscrm.FormControlInputBehavior.GetBehavior("picklistDiscountTypeOptionMethod").get_dataValue()) +"</discountcalculationmethod>";
}
return "";

}

function GetDefaultPriceListRuleEnabled()
{
if (Mscrm.FormUtility.isControlDirty($get('rdDefaultPricelistRuleEnabled')))
{

_boAnySettingChanged = true;
return "<useinbuiltrulefordefaultpricelistselection>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdDefaultPricelistRuleEnabled").get_dataValue() ? "true" : "false") + "</useinbuiltrulefordefaultpricelistselection>";

}

return "";
}
function GetOOBPriceCalculationEnabled()
{
if (Mscrm.FormUtility.isControlDirty($get("rdOOBPriceCalculationEnabled")))
{
_boAnySettingChanged = true;
return "<oobpricecalculationenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdOOBPriceCalculationEnabled").get_dataValue() ? "false" : "true") + "</oobpricecalculationenabled>";
}

return "";
}

function GetCreateProductsWithoutParentInActiveStateEnabled()
{
if (Mscrm.FormUtility.isControlDirty($get('rdCreateProductsWithoutParentInActiveState')))
{

_boAnySettingChanged = true;
return "<createproductswithoutparentinactivestate>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdCreateProductsWithoutParentInActiveState").get_dataValue() ? "true" : "false") + "</createproductswithoutparentinactivestate>";
}

return "";
}

function handleEntityTypeChange()
{
var independentMapping = document.getElementsByName("independentMapping");
for (var i = 0; i < independentMapping.length; i++)
{

independentMapping[i].style.display = "none";
}

var computedMapping = document.getElementsByName("computedMapping");
for (var i = 0; i < computedMapping.length; i++)
{

computedMapping[i].style.display = "none";
}

var selectedValue = Mscrm.FormControlInputBehavior.GetBehavior("EntityTypeSelector").get_dataValue();
var visibleAttributeRows = document.getElementsByClassName(selectedValue.toLowerCase());

for (var i = 0; i < visibleAttributeRows.length; i++)
{

if ((visibleAttributeRows[i].getAttribute("name") == "independentMapping")||(visibleAttributeRows[i].getAttribute("name") == "computedMapping"))
{
visibleAttributeRows[i].style.display = "";
}
}
}

function GetMaximumDynamicPropertiesAllowed()
{
if (Mscrm.FormUtility.isControlDirty($get('numberMaximumDynamicPropertiesAllowed')))
{
_boAnySettingChanged = true;
var value = Mscrm.FormControlInputBehavior.GetBehavior('numberMaximumDynamicPropertiesAllowed').get_dataValue();
return "<maximumdynamicpropertiesallowed>" + value + "</maximumdynamicpropertiesallowed>";
}
return "";
}




function GetEmailApprovalValue()
{
var returnValue = "";
if (Mscrm.FormUtility.isControlDirty($get("ckUserApproval")))
{
_boAnySettingChanged = true;
returnValue = "<requireapprovalforuseremail>" + ($get("ckUserApproval").checked ? "1" : "0") + "</requireapprovalforuseremail>";
}

if (Mscrm.FormUtility.isControlDirty($get("ckQueueApproval")))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<requireapprovalforqueueemail>" + ($get("ckQueueApproval").checked ? "1" : "0") + "</requireapprovalforqueueemail>";
}

return returnValue;
}




function GetTrackingNumberLength()
{
var ckEnableTracking = $get("ckEnableTracking");
if (Mscrm.FormUtility.isControlDirty(ckEnableTracking) || Mscrm.FormUtility.isControlDirty(selTrackingNumberLengthElement))
{
_boAnySettingChanged = true;
return "<maximumtrackingnumber>" + (ckEnableTracking.checked ? CrmEncodeDecode.CrmXmlEncode(selTrackingNumberLengthCtrl.get_dataValue()) : "0") + "</maximumtrackingnumber>";
}

return "";
}




function GetAlertSettings()
{
var ckGenerateAlertsForErrors = $get("ckGenerateAlertsForErrors");
var ckGenerateAlertsForWarnings = $get("ckGenerateAlertsForWarnings");
var ckGenerateAlertsForInformation = $get("ckGenerateAlertsForInformation");
var ckNotifyMailboxOwnerOfEmailServerLevelAlerts = $get("ckNotifyMailboxOwnerOfEmailServerLevelAlerts");

var returnValue = "";
if (Mscrm.FormUtility.isControlDirty(ckGenerateAlertsForErrors))
{
_boAnySettingChanged = true;
returnValue = "<generatealertsforerrors>" + (ckGenerateAlertsForErrors.checked ? "1" : "0") + "</generatealertsforerrors>";
}
if (Mscrm.FormUtility.isControlDirty(ckGenerateAlertsForWarnings))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<generatealertsforwarnings>" + (ckGenerateAlertsForWarnings.checked ? "1" : "0") + "</generatealertsforwarnings>";
}
if (Mscrm.FormUtility.isControlDirty(ckGenerateAlertsForInformation))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<generatealertsforinformation>" + (ckGenerateAlertsForInformation.checked ? "1" : "0") + "</generatealertsforinformation>";
}
if (Mscrm.FormUtility.isControlDirty(ckNotifyMailboxOwnerOfEmailServerLevelAlerts))
{
_boAnySettingChanged = true;
returnValue = returnValue + "<notifymailboxownerofemailserverlevelalerts>" + (ckNotifyMailboxOwnerOfEmailServerLevelAlerts.checked ? "1" : "0") + "</notifymailboxownerofemailserverlevelalerts>";
}
return returnValue;
}




function enableEmailTracking(bEnable)
{
var bDisabled = !bEnable;
document.getElementById("tokenConfig").style.display = bDisabled ? "none" : "";
}




function updateTrackingTokenExample()
{
var sTrackingPrefix = txtTrackingPrefixCtrl.get_dataValue();
sTrackingPrefix = IsNull(sTrackingPrefix) ? "" : sTrackingPrefix;
var sOnlineFlag = "0";
var sTrackingId = "000000000" + (Mscrm.FormControlInputBehavior.GetBehavior('numTrackingIdBase').get_dataValue() + 1).toString();
var sTrackingNumber = "000000001";
var iTrackingIdLength = Number(selTrackingIdLengthCtrl.get_dataValue());
var iTrackingNumberLength = selTrackingNumberLengthCtrl.get_dataValue().length;

sTrackingId = sTrackingId.substring(sTrackingId.length - iTrackingIdLength, sTrackingId.length);
sTrackingNumber = sTrackingNumber.substring(sTrackingNumber.length - iTrackingNumberLength, sTrackingNumber.length);

XUI.Html.SetText($get('tdTrakingTokenExample'), sTrackingPrefix + sOnlineFlag + sTrackingId + sTrackingNumber);
}




function enableSmartMatching(bEnable)
{
var bDisabled = !bEnable;
document.getElementById("smartmatching").style.display = bDisabled ? "none" : "";
}




function updateReadingOrder()
{
if ( LOCID_UI_DIR == "RTL" )
{
document.getElementById('sample_number_d').style.direction = "ltr";
document.getElementById('sample_currency_d').style.direction = "ltr";
document.getElementById('sample_number_d').style.textAlign = "right";
document.getElementById('sample_currency_d').style.textAlign = "right";
}
}











function setOptionText(selBox, sValue, sText)
{


var index = selBox.indexOf(sValue);



if (index != -1)
{
XUI.Html.SetText(selBox.options[index], sText);
}
}
function AdjustTabAndContentWidth() {
var tabWidth = $get("crmTabBar").offsetWidth;
var tabBlockWidth = document.getElementById("divTabBlock").offsetWidth;
var curWidth = (((tabWidth > tabBlockWidth) ? tabWidth : tabBlockWidth) - 3);
document.getElementById("divContentArea").style.width = curWidth + "px"
document.getElementById("divTab").style.width = curWidth + "px"
}

function RemoveHandlersOnClose() {
$removeHandler(window, 'resize', AdjustTabAndContentWidth);
}

function GetSLAPauseStates(){
<% if (IsSLAEnabled){%>

var primaryEntity=$get("PrimaryEntity").value;
HandleEntityPauseStates(primaryEntity);
return "<slapausestates>" + CrmEncodeDecode.CrmXmlEncode(PAUSE_STATES) + "</slapausestates>";

<% } %>
<% else {%>

var _oResult = {};
var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows;
var slaPauseStates="" ;
for (var rowId = 0; rowId < oRows.length; rowId++)
{
slaPauseStates = slaPauseStates+ (rowId==0 ?"":  ";") + XUI.Html.DomUtils.GetFirstChild(oRows[rowId]).id;
}
return "<slapausestates>" + CrmEncodeDecode.CrmXmlEncode(slaPauseStates) + "</slapausestates>";

<% } %>
}


function HandleEntityPauseStates(selectedEntity){
var _oResult = {};
var oRows = XUI.Html.DomUtils.GetFirstChild($get("rtnObjList")).rows;
var xmlDoc= XUI.Xml.LoadXml(PAUSE_STATES);
var xmlRootNode = xmlDoc.documentElement;
var entityNodes = xmlDoc.getElementsByTagName("entity");
var slaPauseStates="" ;
for (var rowId = 0; rowId < oRows.length; rowId++)
{
slaPauseStates = slaPauseStates+ (rowId==0 ?"":  ";") + XUI.Html.DomUtils.GetFirstChild(oRows[rowId]).id;
}
var nodepresent=false;
for(var nodeId = 0; nodeId < entityNodes.length; nodeId++)
{
if(entityNodes[nodeId].getAttribute("value") == selectedEntity)
{
nodepresent=true;
if(entityNodes[nodeId].firstChild)
{
(entityNodes[nodeId].firstChild).data = slaPauseStates;
}
else if(slaPauseStates != "")
{
var newTextNode = xmlDoc.createTextNode(slaPauseStates);
entityNodes[nodeId].appendChild(newTextNode);
}
break;
}
}

if(nodepresent == false)
{
newEntityNode = xmlDoc.createElement("entity");
newEntityNode.setAttribute("value",selectedEntity);
var newTextNode = xmlDoc.createTextNode(slaPauseStates);
newEntityNode.appendChild(newTextNode);
xmlRootNode.appendChild(newEntityNode);
}
try
{
PAUSE_STATES = (new XMLSerializer()).serializeToString(xmlDoc.documentElement);
}
catch(e)
{
PAUSE_STATES = (xmlDoc.documentElement).xml;
}
}

function ConfigServiceTab(){
Mscrm.SetStatusTransition.entityTypeCode = Mscrm.EntityTypeCode.Incident;

<% if (IsSLAEnabled){%>

oldPrimaryEntity = Mscrm.InternalUtilities.EntityNames.Incident;


var statusXmlDoc = XUI.Xml.LoadXml( STATUS_XML);
var statusEntityNodeList = statusXmlDoc.getElementsByTagName("entity");
var incidentStatusXml;
for(var nodeId = 0; nodeId < statusEntityNodeList.length; nodeId++)
{
if(statusEntityNodeList[nodeId].getAttribute("value") == Mscrm.InternalUtilities.EntityNames.Incident)
{
incidentStatusXml = statusEntityNodeList[nodeId].firstChild;
break;
}
}
var incidentStatusXmlString = XUI.Xml.XMLSerializer.serializeToString(incidentStatusXml);
var incidentPauseStates = "";

var pauseStatesXmlDoc = XUI.Xml.LoadXml(PAUSE_STATES);

if(pauseStatesXmlDoc.documentElement == null || pauseStatesXmlDoc.documentElement.nodeName != "entitiesstates")
{
var pausevalues = PAUSE_STATES;
PAUSE_STATES = "<entitiesstates><entity value=\"incident\">"+CrmEncodeDecode.CrmXmlEncode(pausevalues)+"</entity></entitiesstates>";
pauseStatesXmlDoc = XUI.Xml.LoadXml(PAUSE_STATES);
}

var entityNodeList = pauseStatesXmlDoc.getElementsByTagName("entity");
for(var nodeId = 0; nodeId < entityNodeList.length; nodeId++)
{
if(entityNodeList[nodeId].getAttribute("value") == Mscrm.InternalUtilities.EntityNames.Incident)
{
incidentPauseStates = (entityNodeList[nodeId].firstChild) ? ((entityNodeList[nodeId].firstChild).data) : "";
break;
}
}

<% } %>

var statusXML;
var PauseStates;
<% if (IsSLAEnabled){%>

statusXML = incidentStatusXmlString;
PauseStates = incidentPauseStates;

<% } %>
<% else {%>

statusXML = STATUS_XML;
PauseStates = PAUSE_STATES;

<% } %>


if(isOutlookHostedWindow())
{

if (Mscrm.InternalUtilities.JSTypes.isNull(window.dialogArguments))
{
window.dialogArguments={};
}
window.dialogArguments["valuesXml"] = Mscrm.SelectStatusTransition.createAvailableFieldsXml( XUI.Xml.LoadXml(statusXML), 1);
window.dialogArguments["sSelectedValues"] = PauseStates;
}
else
{

if (Mscrm.InternalUtilities.JSTypes.isNull(window.inlineDialogArguments))
{
window.inlineDialogArguments={};
}
window.inlineDialogArguments["valuesXml"] = Mscrm.SelectStatusTransition.createAvailableFieldsXml( XUI.Xml.LoadXml(statusXML), 1);
window.inlineDialogArguments["sSelectedValues"] = PauseStates;
}
}

function OnChangePrimaryEntity(){
HandleEntityPauseStates(oldPrimaryEntity);
var primaryEntity = $get("PrimaryEntity").value;
oldPrimaryEntity = primaryEntity;


var statusXmlDoc = XUI.Xml.LoadXml( STATUS_XML);
var statusEntityNodeList = statusXmlDoc.getElementsByTagName("entity");
var primaryEntityStatusXml;
var primaryEntityStatusXmlString;
for(var nodeId = 0; nodeId < statusEntityNodeList.length; nodeId++)
{
if(statusEntityNodeList[nodeId].getAttribute("value") == primaryEntity)
{
primaryEntityStatusXml = statusEntityNodeList[nodeId].firstChild;
break;
}
}
try
{
primaryEntityStatusXmlString = (new XMLSerializer()).serializeToString(primaryEntityStatusXml);
}
catch(e)
{
if(primaryEntity.length >0)
{
primaryEntityStatusXmlString = primaryEntityStatusXml.xml;
}
}


var pauseStatesXmlDoc = XUI.Xml.LoadXml(PAUSE_STATES);
var entityNodeList = pauseStatesXmlDoc.getElementsByTagName("entity");
var primaryEntityPauseStates = "";
for(var nodeId = 0; nodeId < entityNodeList.length; nodeId++)
{
if(entityNodeList[nodeId].getAttribute("value") == primaryEntity)
{
primaryEntityPauseStates = (entityNodeList[nodeId].firstChild) ? ((entityNodeList[nodeId].firstChild).data) : "";
break;
}
}

if(isOutlookHostedWindow())
{

if (Mscrm.InternalUtilities.JSTypes.isNull(window.dialogArguments))
{
window.dialogArguments = {};
}
window.dialogArguments["valuesXml"] = Mscrm.SelectStatusTransition.createAvailableFieldsXml( XUI.Xml.LoadXml(primaryEntityStatusXmlString), 1);
window.dialogArguments["sSelectedValues"] = primaryEntityPauseStates;
}
else
{

if (Mscrm.InternalUtilities.JSTypes.isNull(window.inlineDialogArguments))
{
window.inlineDialogArguments = {};
}
window.inlineDialogArguments["valuesXml"] = Mscrm.SelectStatusTransition.createAvailableFieldsXml( XUI.Xml.LoadXml(primaryEntityStatusXmlString), 1);
window.inlineDialogArguments["sSelectedValues"] = primaryEntityPauseStates;
}
SelectValuesJsWindowOnLoad();
}
</script>
<style type="text/css">
DIV.ms-crm-Form-SectionBar
{
border-bottom-width: 1px;
border-bottom-style: solid;
font-weight:bold;
color:#000000;
}

Div.ms-crm-Dialog-BackgroundEx
{
overflow:hidden;border:0px
}
Div.TabContent
{
height:auto;
width:auto;
position:absolute;
overflow-y:auto;
overflow-x:auto;
vertical-align:top;
top:0px;
bottom:0px;
left:0px;
right:0px;
border:0px;
}

Div.ContentArea
{
vertical-align:top;
position:absolute;
top:19px;
bottom:0px;
left:0px;
right:0px;
display:block;
border:1px solid #a5acb5;
overflow-y:hidden;
overflow-x:auto;
}

Div.Tab
{
position:absolute;
height:20px;
top:0px;
left:0px;
right:0px;
border:0px;
}
DIV.listEdit_valuelist
{
height: 168px;
}

DIV.outerContainer
{
height:auto;
padding:10px;
border:0px solid black;
overflow:hidden;
display:block;
position:absolute;
top:0px;
bottom:0px;
left:0px;
right:0px;
}
div.ms-crm-Input-Container
{
padding-left:2px !important;
}
TD.currSel
{
border-bottom:1px solid white;
}
</style>
</head>
<body>
<form name="crmForm">
<frm:DialogForm id="crmForm" runat="server" dialogtab="true">
<input type="hidden" id="DataType" name="DataType">
<input type="hidden" id="Required" name="Required">
<input type="hidden" id="OrgRequired" name="OrgRequired">
<div class="outerContainer">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="divTabBlock" class="ms-crm-Form-Area" style="position:relative;overflow-x:auto; overflow-y:hidden;">
<div  id="divTab"  class="ms-crm-TabBar-Cell Tab">
<cnt:AppTabBar id="crmTabBar" runat="server" />
</div>
<div id="divContentArea" class="ContentArea">
<div id="tab0" class="ms-crm-Tab TabContent">
<table width="100%">
<col width="45%"><col width="55%"><col>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsAutoSaveEnabled.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsAutoSaveEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsAutoSaveEnabled.Labels.IsAutoSaveEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsAutoSaveEnabled" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsPresenceEnabled.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsPresenceEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsPresenceEnabled.Labels.IsPresenceEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsPresenceEnabled" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="Web.Tools.SystemSettings.Dialogs.systemsettings.aspx_105" runat="server"/>
</td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectFullNameConventionCode"><loc:Text ResourceId="Web.Tools.SystemSettings.Dialogs.systemsettings.aspx_110" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectFullNameConventionCode" OnChange="updateUI(true);" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="Web.Tools.SystemSettings.Dialogs.systemsettings.aspx_157" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selectPricingDecimalPrecision"><loc:Text ResourceId="Web.Tools.SystemSettings.Dialogs.systemsettings.aspx_160" runat="server"/></label></td>
<td valign="center">
<crm:Select id="selectPricingDecimalPrecision" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.AssigningObjectsSection.Tite" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdShareOnAssign"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.AssigningObjectsSection.Labels.ShareOnAssign" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdShareOnAssign" runat="server"/></td>
<td></td>
</tr>
<tr>
<td colspan="3" valign="center"><cnt:AppNotifications id="notifications" runat="server" /></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><label for="txtBlockedAttachment"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.BlockedAttachment.Title" runat="server"/></label></td>
</tr>
<tr>
<td valign="center" colspan="2">
<div style="display:inline-block; width:100%;">
<crm:TextArea id="txtBlockedAttachment" Height="45px" runat="server"/>
</div>
</td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom"><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.CurrencyDisplayOption.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="picklistCurrencyDisplayOption"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.CurrencyDisplayOption.Label" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="picklistCurrencyDisplayOption" runat="server"/></td>
<td></td>
</tr>
<% if(ShowExternalSearchOption || IsQuickFindRecordLimitEnabledDefined || IsFullTextSearchEnabledDefined) {
if (ShowExternalSearchOption) { %>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.SectionHeader" runat="server"/></td>
</tr>
<% } else { %>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.SectionHeader.QuickFind" runat="server"/></td>

</tr>

<% }
}%>
<% if (ShowExternalSearchOption) {%>
<tr>
<td valign="center">
<crm:CheckBox id="ckEnableExternalSearch" runat="server" OnClick="onEnableExternalSearchChange();"/>
<label for="ckEnableExternalSearch">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.EnableRelevanceSearch.Checkbox" runat="server"/>
</label>
</td>
</tr>
<tr>
<td valign="center" colspan="2">
<%=ExternalSearchPrivacyDisclaimer %>
</td>
</tr>
<%} %>
<% if(IsQuickFindRecordLimitEnabledDefined) {%>
<tr>
<td nowrap valign="center"><label for="rdQuickFindRecordLimitEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindRecordLimitEnabled.Labels.QuickFindRecordLimitEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdQuickFindRecordLimitEnabled" runat="server"/></td>
<td></td>
</tr>
<% if (IsFullTextSearchEnabledDefined) {%>
<tr>
<td nowrap valign="center"><label for="rdIsFullTextSearchEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsFullTextSearchEnabled.Labels.IsFullTextSearchEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsFullTextSearchEnabled" runat="server" OnChange="onIsFullTextSearchEnabledChange()"/></td>
<td></td>
</tr>
<%} %>
<tr>
<% if (IsRelevanceSearchFeatureEnabled)
{%>
<td nowrap valign="center"><label for="btnConfigureQuickFind"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.DescriptionTextForCategorizedSearch" runat="server"/></label></td>
<%} else {%>
<td nowrap valign="center"><label for="btnConfigureQuickFind"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.DescriptionText" runat="server"/></label></td>
<%} %>
<td valign="center"><ui:Button CssClass="ms-crm-RefreshDialog-Button" id="btnConfigureQuickFind" OnClick="OpenQuickFindConfigDialog()" ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.ButtonText" runat="server"></ui:Button></td>
<td></td>
</tr>
<%} %>
<% if (ShowBingMapsOption) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsBingMapsIntegrationEnabled.Title" runat="server"/></td>
</tr>
<tr>
<td valign="center" colspan="2">
<%=BingMapLegalDisclaimer %>
</td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdEnableBingIntegration"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsBingMapsIntegrationEnabled.Labels.IsBingMapsIntegrationEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdEnableBingIntegration" runat="server" OnChange="onEnableBingMapsChange()"/></td>

<td></td>
</tr>
<% } %>
<% if (ShowBingMapsApiKeyOption) {%>
<tr>
<td nowrap valign="center">
<label for="txtBingMapsApiKey">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.BingMapsApiKey.Label" runat="server"/>
</label>
</td>
<td valign="center">
<crm:TextBox id="txtBingMapsApiKey" runat="server" />
</td>

<td></td>
</tr>
<% } %>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.RefreshCommonInfrastructure, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.Labels.Title" runat="server"/></td>
</tr>
<tr>
<td valign="center">
<crm:CheckBox id="ckEnableDefaultCountryCode" runat="server" OnClick="onDefaultCountryCodeChange();"/>
<label for="ckEnableDefaultCountryCode">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.Labels.Enabled" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td valign="center" width="50%">
<label for="txtDefaultCountryCode">
<loc:Text ResourceId="settings.countrycode.textboxlabel" runat="server"/>
</label>
</td>
<td valign="center" width="50%">
<crm:TextBox id="txtDefaultCountryCode" InnerCssClass="ms-crm-Phone" runat="server"/>
</td>
</tr>
</table>
</td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="defaultprotocolsectionlabel" runat="server"/></td>
</tr>
<tr>
<td colspan="3" valign="bottom" nowrap><loc:Text ResourceId="defaultprotocollabel" runat="server"/></td>
</tr>
<tr>
<td>
<table width="100%">
<col width=20><col>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:Radio id="rdUseSkypeProtocol" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.MobileAppNotificationDisplayOption.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAllowUsersSeeAppDownloadMessage"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.MobileAppNotificationDisplayOption.Labels.AllowUsersSeeAppDownloadMessage" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdAllowUsersSeeAppDownloadMessage" runat="server"/></td>
<td></td>
</tr>
<%} %>

<% if(IsCustomHelpDefined) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.SetURLTitle" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdCustomizedHelpEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.RLabel" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdCustomizedHelpEnabled" OnChange="onEnableCustomizableHelpChange();" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="txtURLHelp"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.SetURL" runat="server"/></label></td>
<td ><crm:TextBox id="txtURLHelp" Height="45px" runat="server"/>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAppendURLParametersEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.AppendURLParameters" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdAppendURLParametersEnabled" runat="server"/></td>
<td></td>
</tr>
<%if (FeatureEnabledHelper.IsNonOrgFeatureEnabled(FeatureControl.Current.Features.InContextHelp, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
<tr>
<td nowrap valign="center"><label id="labelGuidedHelpEnabled" for="rdGuidedHelpEnabled" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.LearningPath" runat="server"/></label></td>
<td valign="center" role="radiogroup" aria-labelledby="labelGuidedHelpEnabled"><crm:Radio id="rdGuidedHelpEnabled" OnChange="onEnableGuidedHelpChange();" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label id="labelLPAuthoringEnabled" for="rdLPAuthoringEnabled" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.LearningPathAuthoring" runat="server"/></label></td>
<td valign="center" role="radiogroup" aria-labelledby="labelLPAuthoringEnabled"><crm:Radio id="rdLPAuthoringEnabled" OnChange="onEnableLPAuthoringChange();" runat="server"/></td>
<td></td>
</tr>
<%if (FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.InAppSupport, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
<tr>
<td nowrap valign="center"><label tabindex="-1" id="labelInAppSupportEnabled" for="rdInAppSupportEnabled" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.URLHelp.InAppSupport" runat="server"/></label></td>
<td valign="center" role="radiogroup" aria-labelledby="labelInAppSupportEnabled"><crm:Radio id="rdInAppSupportEnabled" OnChange="onEnableInAppSupportChange();" runat="server"/></td>
<td></td>
</tr>
<%} %>
<%} %>
<%} %>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisableSocialCare.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsSocialCareDisabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisableSocialCare.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsSocialCareDisabled" runat="server" /></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisplayNavigationTour.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdDisplayNavigationTour"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisplayNavigationTour.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdDisplayNavigationTour" runat="server" /></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><label id="labelUseLegacyFormRenderingTitle" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.LegacyFormRendering.Title" runat="server"/></label></td>
</tr>
<tr>
<td nowrap valign="center"><label id="labelUseLegacyFormRendering" for="rdUseLegacyFormRendering" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.LegacyFormRendering.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdUseLegacyFormRendering" runat="server" /></td>
<td></td>
</tr>
<% if (ShowMicrosoftFlowOption) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsMicrosoftFlowEnabled.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsMicrosoftFlowEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsMicrosoftFlowEnabled.Labels.IsMicrosoftFlowEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsMicrosoftFlowEnabled" runat="server" /></td>
<td></td>
</tr>
<% } %>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsEnabledForAllRoles.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsEnabledForAllRoles"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsEnabledForAllRoles.Labels.IsEnabledForAllRoles" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsEnabledForAllRoles" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center" width="50%">
<label for="txtDefaultCrmCustomName">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.DefaultCrmCustomName.Title" runat="server"/>
</label>
</td>
<td valign="center" width="50%">
<crm:TextBox id="txtDefaultCrmCustomName" InnerCssClass="ms-crm-Phone" runat="server"/>
</td>
</tr>

<% if (IsCustomSessionTimeoutEnabled){%>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.Title" runat="server"/>
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rdSessionTimeoutEnabled">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.RLabel" runat="server"/>
</label>
</td>
<td valign="center" role="radiogroup" aria-labelledby="labelSessionTimeoutEnabled">
<crm:Radio id="rdSessionTimeoutEnabled" OnChange="onEnableSessionTimeoutUIChange();" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center" >
<label for="numSessionTimeout">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.DefaultTimeout" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td valign="center" width="50">
<crm:Number id="numSessionTimeout" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.Labels.Minutes" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<label><%=systemSessionTimeoutExpiration%></label>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td nowrap valign="center" >
<label for="numSessionTimeoutReminder">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.DefaultWarningTimeout" runat="server"/>
</label>
</td>

<td>
<table>
<tr>
<td valign="center" width="50">
<crm:Number id="numSessionTimeoutReminder" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.SessionTimeout.Labels.Minutes" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<label><%=systemSessionTimeoutWarningExpiration%></label>
</td>
</tr>
</table>
</td>
</tr>
<% } %>
<% if (IsCustomInactivityTimeoutEnabled){%>

<br>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.Title" runat="server"/>
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rdInactivityTimeoutEnabled">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.RLabel" runat="server"/>
</label>
</td>
<td valign="center" role="radiogroup" aria-labelledby="labelInactivityTimeoutEnabled">
<crm:Radio id="rdInactivityTimeoutEnabled" OnChange="onEnableInactivityTimeoutUIChange();" runat="server"/>
</td>
<td></td>
</tr>
<tr>
<td nowrap valign="center" >
<label for="numInactivityTimeout">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.DefaultTimeout" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td valign="center" width="50">
<crm:Number id="numInactivityTimeout" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.Labels.Minutes" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td nowrap valign="center" >
<label for="numInactivityTimeoutReminder">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.DefaultWarningTimeout" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td valign="center" width="50">
<crm:Number id="numInactivityTimeoutReminder" runat="server"/>
</td>
<td class="systemsettings_td_Mins">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GeneralTab.CustomInactivity.Labels.Minutes" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<% } %>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><label id="labelAzureCDNTitle" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.ServeStaticResourcesFromAzureCDN.Title" runat="server"/></label></td>
</tr>
<tr>
<td nowrap valign="center"><label tabindex="-1" id="labelAzureCDN" for="rdAzureCDN" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.ServeStaticResourcesFromAzureCDN.Label" runat="server"/></label></td>
<td valign="center" role="radiogroup" aria-labelledby="labelAzureCDN"><crm:Radio id="rdAzureCDN" runat="server" /></td>
<td></td>
</tr>
</table>
</div>
<div id="tab1" class="ms-crm-Tab TabContent">
<table width="100%">
<col width="75%"><col width="30"><col width="20%">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CalendarSection.Scheduling.Title" runat="server"/>
</tr>
<tr>
<td nowrap valign="center"><label for="numberMaximumAppointmentDuration"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CalendarSection.Scheduling.Label.MaximumAppointmentDuration" runat="server"/></label></td>
<td valign="center"><crm:Number id="numberMaximumAppointmentDuration" runat="server"/></td>
<td></td>
</tr>
</table>
</div>
<% if (!(Util.IsForOutlookClient() && !Util.IsOnline())) { %>

<div id="tab7" class="ms-crm-Tab TabContent">
<crm:RegionalOptions id="regionalOptions" usersettings="false" runat="Server"/>
</div>
<% } %>

<div id="tab8" class="ms-crm-Tab TabContent">
<table width="100%">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.MainSection.Title" runat="server"/>
</td>
</tr>
<tr>
<td valign="center">
<crm:CheckBox id="ckEnableAudit" runat="server" OnClick="onEnableAuditChange();"/>
<label for="ckEnableAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.MainSection.Labels.Enabled" runat="server"/>
</label>
</td>
</tr>
<tr>
<td valign="center">
<crm:CheckBox id="ckEnableUserAccessAudit" runat="server"/>
<label for="ckEnableUserAccessAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.MainSection.Labels.UserAccessAuditEnabled" runat="server"/>
</label>
</td>
</tr>
<%if (Util.IsLive() && Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.ActivityLogging, Microsoft.Crm.Application.Security.UserInformation.Current)){%>
<tr>
<td>
<table cellpadding="0" cellspacing="0">
<tr>
<td valign="center" style="width: 30%;">
<crm:CheckBox id="ckEnableReadAudit" runat="server"/>
<label id="lblEnableReadAudit" for="ckEnableReadAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.MainSection.Labels.ReadAuditEnabled" runat="server"/>
</label>
</td>
<td valign="center">
<% = String.Format(CultureInfo.InvariantCulture, CrmEncodeDecode.CrmHtmlEncodeForFormatString(AppResourceManager.Default.GetString("SystemCustomization.SystemSettingsDialog.AuditTab.MainSection.NoteMessageReadAuditOrg")), "<a id='NoteMessageReadAuditOrgLink' class='default-link' target='_blank' href='https://go.microsoft.com/fwlink/p/?linkid=866445'>","</a>") %>
</td>
</tr>
</table>
</td>
</tr>
<%} %>

<%
if (Microsoft.Crm.Application.Utility.SystemCustomizationSecurity.CheckSolutionPrivileges() && Microsoft.Crm.Application.Utility.SystemCustomizationSecurity.IsBaseLanguage())
{
%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.Title" runat="server"/>
</td>
</tr>
<tr title="<%=commonAuditAreaToolTip %>"  <%=commonAuditAreaMissing?"style=\"display:none;\"":String.Empty %>>
<td valign="center">
<crm:CheckBox id="ckCommonAudit" runat="server"/>
<label for="ckCommonAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.Common" runat="server"/>
</label>
<span style="width:1px; height:1px; overflow:hidden; display:block;"><%=commonAuditAreaToolTip %></span>
</td>
</tr>
<tr title="<%=sfaAuditAreaToolTip %>" <%=sfaAuditAreaMissing?"style=\"display:none;\"":String.Empty %>>
<td valign="center">
<crm:CheckBox id="ckSFAAudit" runat="server"/>
<label for="ckSFAAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.SFA" runat="server"/>
</label>
<span style="width:1px; height:1px; overflow:hidden; display:block;"><%=sfaAuditAreaToolTip %></span>
</td>
</tr>
<tr title="<%=maAuditAreaToolTip %>"  <%=maAuditAreaMissing?"style=\"display:none;\"":String.Empty %>>
<td valign="center">
<crm:CheckBox id="ckMAAudit" runat="server"/>
<label for="ckMAAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.MA" runat="server"/>
</label>
<span style="width:1px; height:1px; overflow:hidden; display:block;"><%=maAuditAreaToolTip %></span>
</td>
</tr>
<tr title="<%=csAuditAreaToolTip %>" <%=csAuditAreaMissing?"style=\"display:none;\"":String.Empty %>>
<td valign="center">
<crm:CheckBox id="ckCSAudit" runat="server"/>
<label for="ckCSAudit">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.CS" runat="server"/>
</label>
<span style="width:1px; height:1px; overflow:hidden; display:block;"><%=csAuditAreaToolTip %></span>
</td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.AuditTab.AreasSection.Customize" runat="server"><loc:Argument runat="server"><a runat="server" class="default-link" id="CrmCustomizationLink" href="#" onclick="openEntityCustomization();"><loc:Text ResourceId="Audit.EntitySettings.Title" runat="server" /></a></loc:Argument></loc:Text>
</td>
</tr>
<%
}
%>
</table>
</div>

<div id="tab2" class="ms-crm-Tab TabContent">
<table width="100%" style="table-layout:fixed;">
<col width=40><col width=40><col width=750><col>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.EmailConnectorType.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.EmailConnectorType.Description" runat="server"/></td>
</tr>
<tr>
<td></td>
<td colspan ="2">
<table id="EmailChannelTable" width="100%">
<col width=50%><col width=50%>
<tr>
<td nowrap valign="center"><label for="picklistEmailConnectionChannel"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.EmailConnectorType.SelectUsing" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="picklistEmailConnectionChannel" runat="server" OnChange="onEmailConnectionChannelChange();"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="4" nowrap><loc:Text ResourceId="SysCustomization.SysSettingsDlg.Email.ControlSection.Labels.EmailDefaultOptionInfo" runat="server"/></td>
</tr>
<tr>
<td></td>
<td colspan ="2">
<table id="Table1" width="100%">
<col width=50%><col width=50%>
<tr>
<td nowrap valign="center"><label for="emailServerProfile"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Labels.EmailServerProfile" runat="server"/></label></td>
<td valign="center"><sdk:LookupControl id="emailServerProfile" AccessibilityLabelResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Labels.EmailServerProfile"  LookupBrowse="true" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="incomingEmailDeliveryMethod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Labels.IncomingEmailDeliveryMethod" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="incomingEmailDeliveryMethod" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="outgoingEmailDeliveryMethod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Labels.OutgoingEmailDeliveryMethod" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="outgoingEmailDeliveryMethod" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="actDeliveryMethod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.Email.DefaultOption.Labels.ACTDeliveryMethod" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="actDeliveryMethod" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ApprovalSection.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.TrackingTab.ControlSection.Labels.EmailApprovalInfo" runat="server"/></td>
</tr>
<tr>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckUserApproval" runat="server"/><label for="ckUserApproval"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.UserApproval" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckQueueApproval" runat="server"/><label for="ckQueueApproval"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.QueueApproval" runat="server"/></label></td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.MessageToEnableServerSideSync" runat="server" /></td>
</tr>
<tr>
<td colspan="4" nowrap ><crm:CheckBox id="ckEnableFolderBasedTracking" runat="server"/><label id="labelEnableFolderBasedTracking" for="ckEnableFolderBasedTracking" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.ControlFolderBasedTracking" runat="server"/></label></td>
</tr>
<tr>
<td colspan="4" nowrap ><crm:CheckBox id="ckEnableEmailCorrelation" OnClick="onEnableEmailCorrelationChange();" runat="server"/><label for="ckEnableEmailCorrelation"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.ControlCorrelation" runat="server"/></label></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckEnableTracking" OnClick="onEnableTrackingChange();" runat="server"/><label for="ckEnableTracking"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.ControlTracking" runat="server"/></label></td>
</tr>
<tr>
<td></td>
<td></td>
<td>
<table id="tokenConfig" width="100%">
<col width="65%"><col width=150>
<tr>
<td nowrap valign="center"><label for="txtTrackingPrefix"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.PrefixSection.Labels.Prefix" runat="server"/></label></td>
<td valign="center" class="systemsettings_td_trackingpref"><crm:TextBox id="txtTrackingPrefix" OnChange="onTrackingPrefixChange();" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numTrackingIdBase"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.IdBaseSection.Labels.IdBase" runat="server"/></label></td>
<td valign="center"><crm:Number id="numTrackingIdBase" OnChange="updateTrackingTokenExample();" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selTrackingIdLength"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.IdLengthSection.Labels.IdLength" runat="server"/></label></td>
<td valign="center"><crm:Select id="selTrackingIdLength" OnChange="updateTrackingTokenExample();" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="selTrackingNumberLength"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.NumberLengthSection.Labels.NumberLength" runat="server"/></label></td>
<td valign="center"><crm:Select id="selTrackingNumberLength" OnChange="updateTrackingTokenExample();" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ExampleSection.Labels.Example" runat="server"/></td>
<td id="tdTrakingTokenExample" valign="center" class="systemsettings_td_trackingpref"></td>
</tr>
</table>
</td>
<td></td>
</tr>

<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckEnableSmartMatching" OnClick="onEnableSmartMatchingChange();" runat="server"/><label for="ckEnableSmartMatching"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.ControlSmartMatching" runat="server"/></label></td>
</tr>
<tr>
<td></td>
<td></td>
<td>
<table id="smartmatching" width="100%">
<col width="65%"><col width=150>
<tr>
<td nowrap valign="center"><label for="txtSMFilter"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.FilterSection.Labels.SMFilter" runat="server"/></label></td>
<td valign="center" class="systemsettings_td_smfilter"><crm:TextBox id="txtSMFilter" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numSMKeywordLimit"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.KeywordLimitSection.Labels.SMKeywordLimit" runat="server"/></label></td>
<td valign="center"><crm:Number id="numSMKeywordLimit" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numSMMaxDifference"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.MaxDifferenceSection.Labels.SMMaxDifference" runat="server"/></label></td>
<td valign="center"><crm:Number id="numSMMaxDifference" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numSMMinRecipients"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.MinRecipientsSection.Labels.SMMinRecipients" runat="server"/></label></td>
<td valign="center"><crm:Number id="numSMMinRecipients" runat="server"/></td>
</tr>
</table>
</td>
<td></td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ExcludeSection.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.TrackingTab.ExcludeSection.Labels.ControlExcludeInfo" runat="server"/></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckEnableExclude" runat="server"/><label for="ckEnableExclude"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ExcludeSection.Labels.ControlExclude" runat="server"/></label></td>
</tr>
</table>
<table width="100%">
<col width="67%"><col width="31%"><col/>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.UseSecureFrame.Title" runat="server"/></td>
</tr>
<tr>
<td  nowrap valign="center"><label for="rdUseSecureFrame"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.UseSecureFrame.Label" runat="server"/></label></td>
<td valign="center" ><crm:Radio id="rdUseSecureFrame"  runat="server"/></td>
<td></td>
</tr>

<tr>
<td  nowrap valign="center"><label for="rdAllowUnresolvedParty"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AllowUnresolvedParty.Title" runat="server" /></label></td>
<td valign="center" ><crm:Radio id="rdAllowUnresolvedParty"  runat="server"/></td>
<td></td>
</tr>
<% if (IsMultipleContactResolutionFCBEnabled){ %>
<tr>
<td nowrap valign="center"><label id="labelUnresolveIfMultipleMatch" for="rdUnresolveIfMultipleMatch" runat="server"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.UnresolveEmailAddressIfMultipleMatch.Title" runat="server" /></label></td>
<td valign="center" ><crm:Radio id="rdUnresolveIfMultipleMatch"  runat="server"/></td>
<td></td>
</tr>
<% } %>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.MaxFileSize.Title" runat="server" /></td>
</tr>
<tr>
<td  nowrap valign="center"><label for="numberMaxUploadFileSize"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.MaxFileSize.Label" runat="server" /></label></td>
<td valign="center"><crm:Number id="numberMaxUploadFileSize" runat="server"/></td>
<td></td>
</tr>
</table>
<table width="100%" style="table-layout:fixed;">
<col width=40><col width=40><col width=750><col>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom" nowrap><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.SeverityFilter.Description" runat="server"/></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckGenerateAlertsForErrors" runat="server"/><label for="ckGenerateAlertsForErrors"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Severity.Error" runat="server"/></label></td>
<td></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckGenerateAlertsForWarnings" runat="server"/><label for="ckGenerateAlertsForWarnings"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Severity.Warning" runat="server"/></label></td>
<td></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckGenerateAlertsForInformation" runat="server"/><label for="ckGenerateAlertsForInformation"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.Severity.Information" runat="server"/></label></td>
<td></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.MailboxNotification.Description" runat="server"/></td>
</tr>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckNotifyMailboxOwnerOfEmailServerLevelAlerts" runat="server"/><label for="ckNotifyMailboxOwnerOfEmailServerLevelAlerts"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.EmailTab.AlertsSection.MailboxNotification.Label" runat="server"/></label></td>
<td></td>
</tr>
</table>
</div>

<div id="tab3" class="ms-crm-Tab TabContent">
<table width="100%">
<col width=390><col width=470><col>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.ExecutionSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdEnableExecution"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.ExecutionSection.Labels.Execution" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdEnableExecution"  runat="server"/></td>
<td></td>
</tr>

<tr height="20px"><td></td></tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.ResponseSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdEnableResponseCreation"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.ResponseSection.Labels.ResponseCreation" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdEnableResponseCreation"  runat="server"/></td>
<td></td>
</tr>

<tr height="20px"><td></td></tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.UnsubscribeSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdEnableUnsubscription"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.UnsubscribeSection.Labels.Unsubscription" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdEnableUnsubscription" OnChange="onEnableUnsubscriptionChange();" runat="server"/></td>

<td></td>
</tr>
<tr height="7px"><td></td></tr>
<tr>
<td nowrap valign="center"><label for="rdEnableUnsubscriptionAcknowledgement"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.UnsubscribeSection.Labels.UnsubscriptionAcknowledgement" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdEnableUnsubscriptionAcknowledgement" OnChange="onEnableUnsubscriptionAcknowledgementChange();" runat="server"/></td>

<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="luTemplateLookup"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.UnsubscribeSection.Labels.UATemplate" runat="server"/></label></td>
<td valign="center"><sdk:LookupControl id="luTemplateLookup" AccessibilityLabelResourceId="SystemCustomization.SystemSettingsDialog.MarketingTab.UnsubscribeSection.Labels.UATemplate"  DefaultViewId="4D5BE2E9-6828-482b-99AA-2387AFED7B37" LookupBrowse="true" runat="server"/></td>
<td></td>
</tr>
</table>
</div>

<% if (HasMobileClientFeaturesAvailable) {%>
<div id="tab15" class="ms-crm-Tab TabContent">
<table width="100%">
<col width="45%"><col width="55%"><col>
<% if (IsApplicationMetadataOnDemandSyncFeatureAvailable) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><br><loc:text resourceid="SystemCustomization.SystemSettingsDialog.MobileClientTab.MobileClientSettings.Title" runat="server" /></td>
</tr>
<tr>
<td nowrap valign="center"><label id="labelIsMobileClientOnDemandSyncEnabled" for="ckIsMobileClientOnDemandSyncEnabled" runat="server"><loc:text resourceid="SystemCustomization.SystemSettingsDialog.MobileClientTab.MobileClientSettings.IsMobileClientOnDemandSyncEnabled" runat="server" /></label></td>
<td valign="center"><crm:Checkbox id="ckIsMobileClientOnDemandSyncEnabled" runat="server" /></td>
<td></td>
</tr>
<% } %>
<% if (IsMocaOfflineFeatureAvailable) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><br><loc:text resourceid="SystemCustomization.SystemSettingsDialog.GeneralTab.IsConflictDetectionForMobileEnabled.Title" runat="server" /></td>
</tr>
<tr>
<td nowrap valign="center"><label id="labelIsConflictDetectionEnabledForMobileClient" for="rdIsConflictDetectionEnabledForMobileClient" runat="server"><loc:text resourceid="SystemCustomization.SystemSettingsDialog.GeneralTab.Label.IsConflictDetectionForMobileEnabled" runat="server" /></label></td>
<td valign="center"><crm:Radio id="rdIsConflictDetectionEnabledForMobileClient" runat="server" /></td>
<td></td>
</tr>
<% } %>
</table>
</div>
<% } %>

<div id="tab4" class="ms-crm-Tab TabContent">
<table width="100%">
<col width=180><col width=220><col>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CustomizationTab.AppMode.Title" runat="server"/></td>
</tr>
<tr>
<td colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CustomizationTab.AppMode.Description" runat="server"/></td>
</tr>
<tr>
<td>
<table width="100%">
<col width=20><col>
<tr>
<td></td>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="ckEnableAppMode" runat="server"/><label for="ckEnableAppMode"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CustomizationTab.AppMode.Labels.mode" runat="server"/></label></td>
</tr>
</table>
</td>
</tr>

<% if (IsPluginTracingFeatureEnabled) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><label id="pluginTracingTitle" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CustomizationTab.PluginTracing.Title" runat="server"/></label></td>
</tr>
<tr>
<td nowrap valign="center"><label id="enablePluginTracingLevel" for="selectPluginTracingLevels" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.CustomizationTab.PluginTracing.Labels.EnableTracing" runat="server"/></label></td>
<td valign="center"><crm:Select id="selectPluginTracingLevels" runat="server"/></td>
<td></td>
</tr>
<%} %>
</table>
</div>

<div id="tab5" class="ms-crm-Tab TabContent">
<table width="100%">
<col width=390><col width=470><col>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdTagMaxAggressiveCycles"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.TagMaxACycles" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdTagMaxAggressiveCycles" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numTagPollingPeriod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.TagPollPeriod" runat="server"/></label></td>
<td>
<table>
<tr>
<td valign="center" width="50"><crm:Number id="numTagPollingPeriod" runat="server"/></td>
<td nowrap valign="center" class="systemsettings_td_Mins"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.Minutes" runat="server"/></td>
</tr>
</table>
</td>
</tr>
<tr>
<td nowrap valign="center"><label for="numSendPollingPeriod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.SendPollPeriod" runat="server"/></label></td>
<td>
<table>
<tr>
<td valign="center" width="50"><crm:Number id="numSendPollingPeriod" runat="server"/></td>
<td nowrap valign="center" class="systemsettings_td_Mins"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.Minutes" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlSchedSyncSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAllowScheduledSyncs"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlSchedSyncSection.Labels.AllowScheduledSyncs" runat="server"/></label></td>
<td valign="center"><crm:Radio OnChange="onScheduledSyncToggled();" id="rdAllowScheduledSyncs" runat="server"/></td>
<td></td>
</tr>

<tr>
<td nowrap valign="center"><label for="numMinOutlookSyncInterval"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.SetMiminumSyncInterval.Labels.MinimumInterval" runat="server"/></label></td>
<td>
<table>
<tr>
<td valign="center" width="50"><crm:Number id="numMinOutlookSyncInterval" runat="server"/></td>
<td nowrap valign="center" class="systemsettings_td_Mins"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.Minutes" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlOfflineSyncSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAllowOfflineScheduledSyncs"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlOfflineSchedSyncSection.Labels.AllowOfflineSyncs" runat="server"/></label></td>
<td valign="center"><crm:Radio OnChange="onOfflineSyncToggled();" id="rdAllowOfflineScheduledSyncs" runat="server"/></td>
<td></td>
</tr>

<tr>
<td nowrap valign="center"><label for="numMinOfflineSyncInterval"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.SetMiminumOfflineSyncInterval.Labels.MinimumInterval" runat="server"/></label></td>
<td>
<table>
<tr>
<td valign="center" width="50"><crm:Number id="numMinOfflineSyncInterval" runat="server"/></td>
<td nowrap valign="center" class="systemsettings_td_Mins"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.EmailSection.Labels.Minutes" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlAddressBookSyncSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAllowAddressBookSyncs"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlAddressBookSyncSection.Labels.AllowAddressBookSyncs" runat="server"/></label></td>
<td valign="center"><crm:Radio OnChange="onAddressBookSyncToggled();" id="rdAllowAddressBookSyncs" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numMinAddressBookSyncInterval"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.SetMiminumAddressBookSyncInterval.Labels.MinimumInterval" runat="server"/></label></td>
<td>
<table>
<tr>
<td valign="center" width="50"><crm:Number id="numMinAddressBookSyncInterval" runat="server"/></td>
<td nowrap valign="center" class="systemsettings_td_Mins"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.Labels.SyncPeriod.Hours" runat="server"/></td>
</tr>
</table>
</td>
</tr>

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlMessageBarSection.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdAllowClientMessageBarAd"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.OSTab.ControlMessageBarSection.Labels.AllowClientMessageBarAd" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdAllowClientMessageBarAd" runat="server"/></td>
<td></td>
</tr>
</table>
</div>

<div id="tab6" class="ms-crm-Tab TabContent">
<% if(_reportCategoryEnabled)
{%>
<table width="100%">
<col width="180" />
<col width="220" />
<col />

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<br>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ReportTab.Labels.SpecifyReportCategories" runat="server" />
</td>
</tr>
<tr>
<td colspan="3">
<table width="100%" cellspacing="0" cellpadding="0">

<tr class="param">
<td>
<cnt:AppListEdit id="edtCategory" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<% if (Microsoft.Crm.ObjectModel.PowerBIUtility.IsPowerBIEmbedFCBEnabled(Microsoft.Crm.Application.Security.UserInformation.Current))
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<br>
<label id="labelUsePowererBiFeatureTitle" runat="server">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ReportTab.PowerBISection.Title" runat="server" />
</label>
</td>
</tr>
<tr>
<td nowrap valign="center">
<label id="labelUsePowererBiFeature" for="rdPowerBiFeatureEnabled" runat="server">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ReportTab.PowerBISection.Selection" runat="server" />
</label>
</td>
<td valign="center">
<crm:Radio id="rdPowerBiFeatureEnabled" runat="server" />
</td>
</tr>
<tr>
<td nowrap valign="center" colspan="2">
<label id="labelUsePowerBiLegalDisclaimer" runat="server"><%=PowerBISectionLegalDisclaimerText%></label>
</td>
</tr>
<% } %>
</table>
<% } %>
</div>

<div id="tab9" class="ms-crm-Tab TabContent">
<table width="100%">
<col width=180 /><col width=220 /><col />
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GoalTab.Labels.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rollupExpiryTime">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GoalTab.Labels.RollupExpiryTime" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td width=50 valigh="middle">
<crm:Number id="rollupExpiryTime" runat="server"/>
</td>
<td><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GoalTab.Labels.RollupExpiryTimeUnit" runat="server"/></td>
</tr>
</table>
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rollupFrequency">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GoalTab.Labels.RollupFrequency" runat="server"/>
</label>
</td>
<td>
<table>
<tr>
<td width="50" valign="middle">
<crm:Number id="rollupFrequency" runat="server"/>
</td>
<td><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GoalTab.Labels.RollupFrequencyUnit" runat="server"/></td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div id="tab10" class="ms-crm-Tab TabContent">
<table width="75%" border ="0">
<col width="75%"><col width="30"><col width="20%">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.CreateProductsWithoutParentInActiveState.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdCreateProductsWithoutParentInActiveState"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.CreateProductsWithoutParentInActiveState" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdCreateProductsWithoutParentInActiveState" runat="server"/></td>
<td></td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Note.CreateProductsWithoutParentInActiveState" runat="server"></loc:Text>
</td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.UseInbuiltRuleForDefaultPricelistSelection.Title" runat="server"/>
</tr>
<tr>
<td nowrap valign="center"><label for="rdDefaultPricelistRuleEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.UseInbuiltRuleForDefaultPricelistSelection" runat="server"/></label></td>
<td valign="center" width ="30%"><crm:Radio id="rdDefaultPricelistRuleEnabled" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.MaximumBundleItems.Title" runat="server"/>
</tr>
<tr>
<td nowrap valign="center"><label for="numberMaximumBundleItems"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.MaximumBundleItems" runat="server"/></label></td>
<td valign="center"><crm:Number id="numberMaximumBundleItems" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.OOBPriceCalculationEnabled.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdOOBPriceCalculationEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.OOBPriceCalculationEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdOOBPriceCalculationEnabled" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.DiscountType.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="picklistDiscountTypeOptionMethod"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.DiscountType" runat="server"/></label></td>
<td valign="center"><sdk:PicklistControl id="picklistDiscountTypeOptionMethod" runat="server"/></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom"  nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.MaximumDynamicPropertiesAllowed.Title"  runat="server" /></td>
</tr>
<tr>
<td nowrap valign="center"><label for="numberMaximumDynamicPropertiesAllowed"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SalesTab.Label.MaximumDynamicPropertiesAllowed" runat="server" /></label></td>
<td valign="center"><crm:Number id="numberMaximumDynamicPropertiesAllowed" runat="server" /></td>
<td></td>
</tr>
</table>
</div>

<div id="tab11" class="ms-crm-Tab TabContent">
<table width="100%" border ="0">
<col width="60%" /><col />
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.SuppressSLA.Title" runat="server"/></td>
</tr>
<tr>
<% if (IsSLAEnabled) {%>
<td nowrap valign="center"><label for="rdIsSLASuppressed"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.SuppressEntitySLA.Label" runat="server"/></label></td>
<%} %>
<% else {%>
<td nowrap valign="center"><label for="rdIsSLASuppressed"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.SuppressSLA.Label" runat="server"/></label></td>
<%} %>
<td valign="center"><crm:Radio id="rdIsSLASuppressed" runat="server" /></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.AutoApplySLA.Title" runat="server"/></td>
</tr>
<tr>
<% if (IsSLAEnabled) {%>
<td nowrap valign="center"><label for="rdAutoApplySLA"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.AutoApplySLAEntity.Label" runat="server"/></label></td>
<%} %>
<% else {%>
<td nowrap valign="center"><label for="rdAutoApplySLA"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.AutoApplySLA.Label" runat="server"/></label></td>
<%} %>
<td valign="center"><crm:Radio id="rdAutoApplySLA" runat="server" /></td>
<td></td>
</tr>
<% if (IsSLAEnabled) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.Labels.HoldEntityStatus" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center">
<label for="PrimaryEntity">
<nobr style="width: 90%; text-overflow: ellipsis;">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.Labels.EntityType" runat="server"/>
</nobr>
</label>
</td>
<td valign="center">
<crm:select id="PrimaryEntity" name="PrimaryEntity" OnChange="OnChangePrimaryEntity();" runat="server" />
</td>
<td></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.HoldEntity.Description" runat="server"/></td>
</tr>
<%} %>
<% else {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.Labels.HoldCaseStatus" runat="server"/></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ServiceTab.HoldCase.Description" runat="server"/></td>
</tr>
<%} %>
<tr>
<td colspan="3">
<div id="divFieldSelect" width="100%">
</td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR>
<label id="labelAutoApplyDefaultOnCaseTitle" runat="server">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.AutoApplyDefaultonCaseCreate.Title" runat="server"/>
</label>
</td>
</tr>
<tr>
<td valign="center"><label for="rdAutoApplyDefaultOnCaseCreate" id="labelAutoApplyDefaultOnCaseCreate" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.AutoApplyDefaultonCaseCreate.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdAutoApplyDefaultOnCaseCreate" runat="server" /></td>
<td></td>
</tr>
<tr>
<td valign="center"><label id="labelAutoApplyDefaultOnCaseUpdate" for="rdAutoApplyDefaultOnCaseUpdate" runat="server"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.AutoApplyDefaultonCaseUpdate.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdAutoApplyDefaultOnCaseUpdate" runat="server" /></td>
<td></td>
</tr>
</table>
</div>

<%if (!disableSynchronizationTab)
{%>
<div id="tab12" class="ms-crm-Tab TabContent">
<table width="100%">
<ps:AdminOutlookSyncSettingsSelector id="adminOutlookSyncSettingsSelector" runat="server" />
<ps:AdminFieldLevelSyncSettingsSelector id="adminFieldLevelSyncSettingsSelector" runat="server" />
<ps:AdminOfflineSyncSettingsSelector id="adminOfflineSyncSettingsSelector" runat="server" />
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.Title" runat="server"/>
</td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.Appointments.Title" runat="server"/>
</td>
</tr>
<tr>
<td>
<table>
<tr>
<td nowrap valign="center">
<crm:CheckBox id="ckIsAppointmentAttachmentSyncEnabled" runat="server"/>
</td>
<td valign="center" nowrap>
<label for="ckIsAppointmentAttachmentSyncEnabled">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.IsAppointmentAttachmentSyncEnabled" runat="server"/>
</label>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.Contacts.Title" runat="server"/>
</td>
</tr>
<tr>
<td nowrap valign="center">
<crm:Radio id="rdIsContactMailingAddressSyncEnabled" runat="server"/>
</td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.Tasks.Title" runat="server"/>
</td>
</tr>
<tr>
<td>
<table>
<tr>
<td nowrap valign="center">
<crm:CheckBox id="ckIsAssignedTasksSyncEnabled" runat="server"/>
</td>
<td valign="center" nowrap>
<label for="ckIsAssignedTasksSyncEnabled">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.IsAssignedTasksSyncEnabled" runat="server"/>
</label>
</td>
</tr>
</table>
</td>
</tr>
<%if (Microsoft.Crm.Application.Utility.Util.IsResourceBookingExchangeSyncFeatureEnabledForOrganization(Microsoft.Crm.Application.Security.UserInformation.Current))
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" nowrap><BR>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.ResourceBookingSync.Title" runat="server"/>
</td>
</tr>
<tr>
<td>
<table>
<tr>
<td nowrap valign="center">
<crm:CheckBox id="ckIsResourceBookingExchangeSyncEnabled" runat="server"/>
</td>
<td valign="center" nowrap>
<label for="ckIsResourceBookingExchangeSyncEnabled">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.SyncInfoTab.SyncSettings.IsResourceBookingSyncEnabled" runat="server"/>
</label>
</td>
</tr>
</table>
</td>
</tr>
<%}%>
</table>
<div>
</div>
</div>
<%}%>

<div id="tab13" class="ms-crm-Tab TabContent">
<table width="90%" border ="0">
<col width="75%"><col width="30"><col width="20%">
<tr>
<td colspan="3" valign="bottom" nowrap><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.Preview.Information" runat="server"/></td>
</tr>
<tr>
<td>
<table width="100%">
<col width=20><col>
<tr>
<td colspan="3" nowrap valign="center"><crm:CheckBox id="cbPreviewEULA" runat="server" onClick="onPreviewEULAChange();"/><label for="cbPreviewEULA"><%= PreviewEULALink %></label></td>
</tr>
</table>
</td>
</tr>
<%if (ShouldShowTaskBasedFlowItem)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.TaskBasedFlowPreview.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdTaskBasedFlowPreview"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.TaskBasedFlowPreview" runat="server"/></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdTaskBasedFlowPreview" runat="server"/></td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<%= TaskBasedFlowPreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsOrgInsightsFeatureEnabled)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.OrganizationInsightsPreview.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdorgInsightsPreview"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.OrganizationInsightsPreview" runat="server"/></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdorgInsightsPreview" runat="server"/></td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<%= OrgInsightsPreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsCortanaProactiveExperienceFeatureEnabled)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="Cortana.CRM.Feature.Title" runat="server"/></td>
</tr>
<tr>
<td valign="center"><label for="rdCortanaProactiveExperiencePreview"><loc:Text ResourceId="Cortana.CRM.Feature.Description" runat="server"/></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdCortanaProactiveExperiencePreview" runat="server"/></td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<%= CortanaProactiveExperiencePreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsDelveActionHubIntegrationFeatureEnabled)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="DelveAction.CRM.Feature.Title" runat="server"/></td>
</tr>
<tr>
<td valign="center"><label for="rdDelveActionHubPreview"><loc:Text ResourceId="DelveAction.CRM.Feature.Description" runat="server"/></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdDelveActionHubPreview" runat="server"/></td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt=""/>
<%= DelveActionHubIntegrationPreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsProductRecommendationsFeatureAvailable)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<br>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.ProductRecommendationsPreview.Title" runat="server" />
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rdProductRecommendationsPreview">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.ProductRecommendationsPreview" runat="server" />
</label>
</td>
<td valign="center" colspan="2">
<crm:Radio id="rdProductRecommendationsPreview" OnChange="onAzureMLPreviewFeatureSelectionChanged('rdProductRecommendationsPreview');" runat="server" />
</td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt="" />
<%= ProductRecommendationsPreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsTextAnalyticsFeatureAvailable)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap>
<br>
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.TextAnalyticsPreview.Title" runat="server" />
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="rdTextAnalyticsPreview">
<loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.TextAnalyticsPreview" runat="server" />
</label>
</td>
<td valign="center" colspan="2">
<crm:Radio id="rdTextAnalyticsPreview" OnChange="onAzureMLPreviewFeatureSelectionChanged('rdTextAnalyticsPreview');" runat="server" />
</td>
</tr>
<tr>
<td>
<img src="/_imgs/info_16.gif" alt="" />
<%= TextAnalyticsPreviewHelpLink %>
</td>
</tr>
<%}%>
<%if (IsRelationshipIntelligenceEnabled)
{%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.RelationshipIntelligence.Title" runat="server"/></td>
</tr>
<% if (IsAutoCaptureEnabled){ %>
<tr>
<td nowrap valign="center"><label for="rdAutoDataCapture"><%=AutoDataCapturePreviewText%></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdAutoDataCapture" runat="server"/></td>
</tr>
<% } %>
<%if (IsRelationshipAssistantEnabled)
{%>
<tr>
<td nowrap valign="center"><label for="rdRelationshipAssistantPreview"><%=RelationshipAssistantPreviewText%></label>
</td>
<td valign="center" colspan="2" ><crm:Radio id="rdRelationshipAssistantPreview" runat="server" onChange="checkRelationshipIntelligenceDependencies();"/></td>
</tr>
<%}%>
<%if (IsEmailEngagementEnabled)
{%>
<tr>
<td nowrap valign="center"><label for="rdEmailEngagementPreview"><%=EmailEngagementPreviewText%></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdEmailEngagementPreview" runat="server" onChange="checkRelationshipIntelligenceDependencies();"/></td>
</tr>
<tr id="relationshipAssitanceInfo">
<td tabindex="0" title="<loc:Text Encoding='HtmlAttribute' ResourceId='SystemCustomization.SystemSettingsDialog.PreviewTab.EmailEngagementInfo' runat='server'/>">
<img src="/_imgs/info_16.gif" alt="" /> <loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.EmailEngagementInfo" runat="server"/>
</td>
</tr>
<%}%>
<%if (IsRelationshipAnalyticsEnabled && IsRelationshipAnalyticsSolutionInstalled)
{%>
<tr>
<td nowrap valign="center"><label for="rdRelationshipAnalyticsPreview"><%=RelationshipAnalyticsPreviewText%></label></td>
<td valign="center" colspan="2" ><crm:Radio id="rdRelationshipAnalyticsPreview" runat="server"/></td>
</tr>
<%}%>
<%else if (IsRelationshipAnalyticsEnabled && !IsRelationshipAnalyticsSolutionInstalled)
{%>
<tr>
<td nowrap valign="center"><a href="#" style="text-decoration:underline !important" onclick="openStdDlg(Mscrm.CrmUri.create('<loc:Text ResourceId="RI_ActivityAnalysis_Solution_Install_Url" runat="server"/>'),null,640,658,true,false,'scroll:1');"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.PreviewTab.RelationshipAnalyticsPreviewPromptMessage" runat="server"/></a></td>
</tr>
<%}%>

<%}%>
</table>
</div>

<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.OnePartyModel.Name, Microsoft.Crm.Application.Security.UserInformation.Current)) { %>
<div id="tab14" class="ms-crm-Tab TabContent" style="overflow-x:hidden;">
<crm:ExternalApplications id="externalApplications" usersettings="false" runat="Server"/>
</div>
<% } %>

</div>
</div>
</div>
</div>
<input type="hidden" id="FullName" name="FullName" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Util.GetNodeValue(_OrgXml, "fullnameconventioncode"))%>">
</frm:DialogForm>
</form>
</body>
</html>
