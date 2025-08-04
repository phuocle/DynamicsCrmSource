





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

var selTrackingNumberLengthCtrl = null;
var selTrackingIdLengthCtrl = null;

var selTrackingNumberLengthElement = null;
var selTrackingIdLengthElement = null;

var edtCategory_listEditComponent;
var txtTrackingPrefixCtrl = null;
var txtSMFilterCtrl = null;
Sys.Application.add_load(SettingsOnLoad);
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
onEnableBingMapsChange();
onDefaultCountryCodeChange();


updateReadingOrder();
_originalReportCategoryXml = getReportCategoryUpdate();


<%if (Util.IsLive()){%>
Mscrm.FormControlInputBehavior.GetBehavior("rdUseSecureFrame").set_disabled(true);
<% } %>

var defaultEmailServerProfileBehavior = Mscrm.FormControlInputBehavior.GetBehavior("emailServerProfile");
defaultEmailServerProfileBehavior.AddParam("ShowNewButton", 0);

AdjustTabAndContentWidth();
$addHandler(window, 'resize', AdjustTabAndContentWidth);
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

_boAnySettingChanged = false;

var retval = new StringBuilder();
retval.Append( "<organization>" );

retval.Append(GetFullNameConventionCode());
retval.Append(GetPricingDecimalPrecision());
retval.Append(GetShareOnAssign());
retval.Append(GetBlockedAttachment());
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


var reportCategoryXml = getReportCategoryUpdate();
if (_originalReportCategoryXml != reportCategoryXml)
{
_boAnySettingChanged = true;
retval.Append(reportCategoryXml);
}

retval.Append(GetMaximumAppointmentDuration());

retval.Append(GetQuickFindRecordLimitEnabled());

retval.Append(GetIsPresencedEnabled());
retval.Append(GetIsAutoSaveEnabled());

retval.Append(GetRollupConfiguration());

retval.Append(GetAllowUsersSeeAppDownloadMessage());

retval.Append(GetIsSLASuppressed());

retval.Append(GetIsSocialCareDisabled());

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

function GetQuickFindRecordLimitEnabled()
{
if (!IsNull(rdQuickFindRecordLimitEnabled) && Mscrm.FormUtility.isControlDirty($get("rdQuickFindRecordLimitEnabled")))
{
_boAnySettingChanged = true;
return "<quickfindrecordlimitenabled>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdQuickFindRecordLimitEnabled").get_dataValue() ? "true" : "false") + "</quickfindrecordlimitenabled>";
}

return "";
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

function GetIsSocialCareDisabled()
{
if (typeof(rdIsSocialCareDisabled) != "undefined" && !IsNull(rdIsSocialCareDisabled) && Mscrm.FormUtility.isControlDirty($get("rdIsSocialCareDisabled")))
{
_boAnySettingChanged = true;
return "<disablesocialcare>" + (Mscrm.FormControlInputBehavior.GetBehavior("rdIsSocialCareDisabled").get_dataValue() ? "true" : "false") + "</disablesocialcare>";
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
overflow-x:hidden;
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
border-bottom:none !important;
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
<% if(IsQuickFindRecordLimitEnabledDefined) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.SectionHeader" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdQuickFindRecordLimitEnabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindRecordLimitEnabled.Labels.QuickFindRecordLimitEnabled" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdQuickFindRecordLimitEnabled" runat="server"/></td>
<td></td>
</tr>
<tr>
<td nowrap valign="center"><label for="btnConfigureQuickFind"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.DescriptionText" runat="server"/></label></td>
<td valign="center"><ui:Button CssClass="ms-crm-RefreshDialog-Button" id="btnConfigureQuickFind" OnClick="OpenQuickFindConfigDialog()" ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.QuickFindConfiguration.ButtonText" runat="server"></ui:Button></td>
<td></td>
</tr>
<%} %>
<% if (ShowBingMapsOption) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.MiscTab.IsBingMapsIntegrationEnabled.Title" runat="server"/></td>
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
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.LeoServiceFeatures, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.SuppressSLA.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsSLASuppressed"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.SuppressSLA.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsSLASuppressed" runat="server" /></td>
<td></td>
</tr>
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisableSocialCare.Title" runat="server"/></td>
</tr>
<tr>
<td nowrap valign="center"><label for="rdIsSocialCareDisabled"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.GenTab.DisableSocialCare.Label" runat="server"/></label></td>
<td valign="center"><crm:Radio id="rdIsSocialCareDisabled" runat="server" /></td>
<td></td>
</tr>
<%} %>
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
<td colspan="4" nowrap ><crm:CheckBox id="ckEnableEmailCorrelation" OnClick="onEnableEmailCorrelationChange();" runat="server"/><label for="ckEnableEmailCorrelation"><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.TrackingTab.ControlSection.Labels.ControlCorrelation" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3"><loc:Text ResourceId="SysCustomization.SysSettingsDlg.TrackingTab.ControlSection.Labels.EnableTrackingInfo" runat="server"/></td>
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
<col width="180" /><col width="220" /><col />

<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><BR><loc:Text ResourceId="SystemCustomization.SystemSettingsDialog.ReportTab.Labels.SpecifyReportCategories" runat="server"/></td>
</tr>
<tr>
<td colspan="3">
<table width="100%" cellspacing="0" cellpadding="0">

<tr class="param">
<td><cnt:AppListEdit id="edtCategory" runat="server"/></td>
</tr>
</table>
</td>
</tr>
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
</div>
</div>
</div>
</div>
<input type="hidden" id="FullName" name="FullName" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Util.GetNodeValue(_OrgXml, "fullnameconventioncode"))%>">
</frm:DialogForm>
</form>
</body>
</html>
