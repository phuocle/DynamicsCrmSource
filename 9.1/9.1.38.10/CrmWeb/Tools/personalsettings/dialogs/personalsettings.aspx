
<!DOCTYPE html>
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.PersonalSettings.PersonalSettingsPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui"  Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ps" Namespace="Microsoft.Crm.Web.Tools.PersonalSettings" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Types" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="System.Globalization" %>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type"text/css">
DIV.ms-crm-Form-SectionBar
{
	border-bottom-width: 1px;
	border-bottom-style: solid;
	font-weight:bold;
	color:#000000;	
}

Div.ms-crm-Dialog-BackgroundEx
{
	overflow:hidden; 
}
Div.TabContent
{
   height:95%;
   width:auto;
   position:absolute;
   overflow-y:auto;
   overflow-x:hidden;
   Border:0;
   vertical-align:top;
   top:0px;
   bottom:-20px;
   left:0px;
   right:0px;
   border:0px;
}

Div.ContentArea
{
	vertical-align:top;
	position:absolute;
	top:19px;bottom:0px;left:0px;right:0px;
	display:block;
	border:1px solid #a5acb5;
	overflow-y:hidden;
	overflow-x:auto; 
}

Div.Tab
{
	position:absolute;height:20px;top:0px;left:0px;right:0px;border:0px;
}

.crm-horizontal-margin10
{
	<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
	margin-left:10px;
	<% } else { %>
	margin-right:10px;
	<% } %>
}
.crm-text-decoration
{
	text-decoration:underline !important;
}

@media screen and (max-width: 780px) {
	.ms-crm-RefreshDialog-Main{
		top:59px !important;
	}

	.ms-crm-RefreshDialog-Header-Desc
	{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.ms-crm-Grid-HeaderBackColor TR,
	.ms-crm-Grid-HeaderBackColor TR > TD[role="gridcell"],
	span.ms-crm-GridButtons,
	DIV.ms-crm-ListArea DIV.ms-crm-grid-BodyContainer,
	table.ms-crm-List-StatusBar-Height,
	DIV.ms-crm-List-StatusBar{
		height: auto !important;
	}

	DIV.ms-crm-ListArea DIV.ms-crm-grid-databodycontainer
	{
		top:21px !important;
		bottom:21px !important;
	}
	.ms-crm-List-RefreshButton
	{
		top:0px !important;
	}

	.ms-crm-List-StatusBar-Label-Padding,
	DIV#emailTemplates
	{
		padding-bottom: 0px;
		padding-top: 0px;
	}

	.ms-crm-List-RefreshButton
	{
		padding-left: 0px;
		padding-right: 0px;
	}

	DIV#emailSignatureGrid
	{
		bottom: 0px !important;
	}
	
	DIV.ms-crm-RefreshDialog-Main DIV#divWarning
	{
		width: 96% !important;
		height: 88.5% !important;
	}

	DIV.ms-crm-RefreshDialog-Main
	{
		bottom: 33px !important;
	}

	DIV#emailTemplates
	{
		height: 100% !important;
	}
}

</style>
</head>

<body scroll="no">
	<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
	<div style="width:98%;height:98%;padding:10px;border:0px solid black;overflow:hidden;display:block;">
		<div id="divTabBlock" class="ms-crm-Form-Area" style="position:relative;overflow-x:auto;overflow-y:hidden;">
					<div  id="divTab"  class="ms-crm-TabBar-Cell Tab">
						<cnt:AppTabBar id="crmTabBar" runat="server" />
					</div>
					<div id="divContentArea" class="ContentArea">
								<!-- General Tab -->
								
								<div class="ms-crm-TabS TabContent" id="general" >
									<table role="presentation" width="100%" height="98%" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
										<colgroup>
										<col width="13%" />
										<col  width="36%"/>
										<col  width="16%" class="personalsettings_col_3" />
										<col width="33%"/>
										</colgroup>
										<ps:DefaultStartPage id="startPageSetting" runat="server" />
										<tr><td colspan="4">&nbsp;</td></tr>
										<ps:OutlookFormsSettingSelector id="outlookFormsSettingSelector" runat="server" />

										<ps:PagingLimitSelector id="pagingLimitSelector" runat="server" />
										<tr><td colspan="4">&nbsp;</td></tr>
										<ps:AdvancedFindModeSelector id="advancedFindModeSelector" runat="server" />
										<tr><td colspan="4">&nbsp;</td></tr>
										<% if(IsExternalSearchEnabled || IsCustomSearchEnabled) {%>
											<tr>
												<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_204" runat="server"/></td>
											</tr>
											<tr height="5" colspan="4"><td></td>
											</tr>
											<tr>
												<td width="150px" valign="center"><label for="searchExperienceValue"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_211" runat="server"/></label></td>
												<td valign="center">
													<sdk:PicklistControl runat="server" id="searchExperienceValue"/>
												</td>
											</tr>
											<tr><td colspan="4">&nbsp;</td></tr>
											<tr>
												<td width="150px" valign="center"><label for="configureFacets"><loc:Text ResourceId="ExternalSearch_Relevance_Facets" runat="server"/></label></td>
												<td valign="center">
												<button id="configureFacets" onclick="CustomizeFacetsAndFilterClicked()" class="basic-button">
					                                <loc:text resourceid="ExternalSearch_Relevance_Configure" runat="server" />
				                                </button>
												</td>
											</tr>
											<tr><td colspan="4">&nbsp;</td></tr>		
										<%} %>
										<ps:TimeZoneSelector runat="server" />
										
										<tr><td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" id="selectCurrencyHeader"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_224" runat="server"/></td></tr>
										<tr><td colspan="4"></td></tr>
										<tr>
											<td nowrap valign="center"><label for="transCurId" id="selectCurrenyLabel"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_231" runat="server"/></label></td>
											<td valign="center" id="transCurId_d"><sdk:LookupControl id="transCurId" LookupStyle="single" AccessibilityLabelResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_231"  TabIndex="0" runat="server"/></td>
											<td colspan="2"></td>
										</tr>

										<tr><td colspan="4">&nbsp;</td></tr>
										<ps:CheckBoxSettingSelector id="ckEnableHighContrastImages" section="personalsettings.imagestrips.sectionlabel" 
											label="personalsettings.imagestrips.description" checkboxlabel="personalsettings.imagestrips.checkboxlabel" runat="server" TabIndex="0" />
										<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.RefreshCommonInfrastructure, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>                              
									    	<ps:DefaultCountryCode runat="server" />
										<%} %>		
										
                                        <%--Show this option only if Both ActionCard and NonBaseActionCard FCBs are ON.--%>
										<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.ActionCard, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.NonBaseActionCard, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>
										<tr><td colspan="4"/>&nbsp;</tr>
										<tr>
											<table role="presentation" width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
												<tbody>
													<tr><td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4"><loc:Text ResourceId="personalsettings.relationshipintelligenceconfig.sectionlabel" runat="server"/></td></tr>
													<tr><td colspan="4"></td></tr>
													<tr><td colspan="4" valign="bottom"><loc:Argument runat="server"><a href="#" class="crm-text-decoration" id="RIConfigLink"  TabIndex="0" onkeyup="openRIConfiguUiByKeyboard(new Sys.UI.DomEvent(event));" onmouseover="this.style.cursor='hand'" onclick="openRIConfiguUi();"><loc:Text ResourceId="personalsettings.relationshipintelligenceconfig.link" runat="server"/></a></loc:Argument></td></tr>
													<tr><td colspan="4"></td></tr>
												</tbody>
											</table>
										</tr>
										<%} %>
										<tr><td colspan="4"/></tr>
										<tr><td colspan="4" valign="bottom"><span class="crm-text-RefreshDialog-View-Info" ><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_218" runat="server"><loc:Argument runat="server"><a href="#" class="crm-text-decoration" id="HereLink"  TabIndex="0" onkeyup="openCurrentUserByKeyboard(new Sys.UI.DomEvent(event));" onmouseover="this.style.cursor='hand'" onclick="openCurrentUser();"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_here" runat="server"/></a></loc:Argument></loc:Text></span></td></tr>
										<tr><td colspan="4"/></tr>
									</table>
								</div>
								<!-- End of General tab -->
								
								<!-- Synchronization Tab -->
								<div class="ms-crm-TabS TabContent" id="synchronization" >
									<table role="presentation" width="100%" style="table-layout:fixed;">
										<ps:OutlookSyncSettingsSelector id="outlookSyncSettingsSelector" runat="server" />
										<%if (!Microsoft.Crm.Util.IsFieldLevelSynchronizationDisabled())
										{%>
										<ps:FieldLevelSyncSettingsSelector id="fieldLevelSyncSettingsSelector" runat="server" />
										<%}%>
										<ps:OfflineSyncSettingsSelector id="offlineSyncSettingsSelector" runat="server" />
										<ps:CheckBoxSettingSelector id="ckSyncContactCompany" section="Web.Tools.personalsettings.dialogs.personalsettings.SyncContactCompanySubHeading"
											label="Web.Tools.personalsettings.dialogs.personalsettings.SyncContactCompanyDescription" checkboxlabel="Web.Tools.personalsettings.dialogs.personalsettings.SyncContactCompanyLabel"
											isforoutlookclient="true" runat="server" />
										<ps:PrimaryClientSetting id="setSynchronizingClient" runat="server" />
										<ps:OutlookSchedulableSyncSetting id="OutlookScheduledSync" section="Web.Tools.personalsettings.dialogs.personalsettings.OutlookScheduledSyncTitle"
    										checkbox="Web.Tools.personalsettings.dialogs.personalsettings.RunScheduledSync" runat="server" />
										<%if (Microsoft.Crm.Application.Utility.Util.IsResourceBookingExchangeSyncFeatureEnabledForUser(Microsoft.Crm.Application.Security.UserInformation.Current))
										{%>
											<ps:CheckBoxSettingSelector id="ckEnableResourceBookingSync" section="personalsettings.resourcebookingsyncenabled.sectionlabel" checkboxlabel="personalsettings.resourcebookingsyncenabled.checkboxlabel" IsCompositeControl="true" runat="server" TabIndex="0"/>
											<tr>
												<td valign="center" nowrap>
													<label>
														<% = String.Format(CultureInfo.InvariantCulture, CrmEncodeDecode.CrmHtmlEncodeForFormatString(AppResourceManager.Default.GetString("personalsettings.resourcebookingsyncenabled.featureDeprecatedWithInfoLink")), "<a href='https://go.microsoft.com/fwlink/?linkid=2096305' target='_blank' class='default-link'>", "</a>") %>
													</label>
												</td>
											</tr>
										<%}%>
									</table>
								</div>
								<!-- End of Synchronization tab -->
								
								<!-- Activities tab -->
								<div class="ms-crm-TabS TabContent" id="activities" >
									<ps:CalendarSettings runat="server" />
								</div>
								<!-- End of Activities tab -->
								
								<!-- Formats Tab -->
								<div class="ms-crm-TabS TabContent" id="regionalOptionsSettings" >
									<ui:RegionalOptions id="regionalOptions" usersettings="true" runat="Server"/>
								</div>
								<!-- End of Formats Tab -->

								<!-- Email Templates tab -->
								<div class="ms-crm-TabS TabContent" id="emailTemplates">
									<ps:EmailTemplateSetting id="emailTemplateSetting" runat="server" />
								</div>
								<!-- End of EmailTemplates tab -->

								<!-- Email Signatures tab -->
								<div class="ms-crm-TabS TabContent" id="emailSignatures">
									<ps:EmailSignatureSetting id="emailSignatureSetting" runat="server" />
								</div>
								<!-- End of Email Signatures tab -->

								<!-- Privacy Tab -->
								<div class="ms-crm-TabS TabContent" id="privacy" >
									<table role="presentation" width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed">
										<col width="20" /><col width="20" /><col />

										<ps:SqmSetting runat="server" />

										<ui:Hidden id="privacyOption" runat="server" />
										<ps:WatsonSetting runat="server" />
									</table>
								</div>
								<!-- End of Privacy Tab -->

								<!-- Email Tab -->
								<div class="ms-crm-TabS TabContent" id="email" >
									<ps:EmailSendAsAllowedSetting runat="server" />
									<ps:EmailIntegrationSetting runat="server" />
									<table role="presentation" width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
										<tr><td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" id="selectIncomingEmailFilteringMethodHeader"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_287" runat="server"/></td>
										</tr>
										<tr height="5" colspan="4"><td></td></tr>
										<tr>
											<td nowrap valign="top"><label id="selectIncomingEmailFilteringMethodLabel" for="selectIncomingEmailFilteringMethod"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.aspx_292" runat="server"/></label></td>
											<td valign="center" colspan="2">
												<sdk:PicklistControl runat="server" id="selectIncomingEmailFilteringMethod"/>
											</td>
										</tr>
										<tr>
											<td>
												<a href="#" id="idFolderBasedTracking" style="text-decoration:underline !important" onclick="openStdDlg(Mscrm.CrmUri.create('/tools/FolderBasedTracking/FolderBasedTracking.aspx'  + (!isNullOrEmptyString(window.APP_MODULE_APPID) ? '?appid=' + CrmEncodeDecode.CrmUrlEncode(window.APP_MODULE_APPID) : '')),null,640,658,true,false,'scroll:1');"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.Email.FolderBasedTracking" runat="server" /></a> 
											</td>
										</tr>
									</table>
									
									<ps:AutoCreateOnPromoteSettings runat="server" />
									
									<ps:DisplayIconSetting runat="server" />
									<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.October2019Update, Microsoft.Crm.Application.Security.UserInformation.Current) &&
									Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.TimelineWallDensity, Microsoft.Crm.Application.Security.UserInformation.Current) && 
									Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.TimelineWallEmailConversationCount, Microsoft.Crm.Application.Security.UserInformation.Current)) {%>                              
										<table role="presentation" width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
											<ps:CheckBoxSettingSelector id="ckEnableEmailConversationView" section="Web.Tools.personalsettings.dialogs.personalsettings.EnableEmailConversationView.SectionLabel" 
											 checkboxlabel="Web.Tools.personalsettings.dialogs.personalsettings.EnableEmailConversationView.CheckboxLabel" runat="server"/>
										</table>
									<%} %>		

									<table role="presentation" width="100%" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
										<ps:DefaultMailboxLinkControl runat="server" />
									</table>
									<!--AutoDataCapture Starts -->
									<% if (IsAutoDataCaptureOrgSettingsEnabled) { %>	 
								   <table>
										<col width="180" /><col width="135" /><col />
										<tr>
											<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="3" valign="bottom" nowrap><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.UnTracked.Title" runat="server"/></td>
										</tr>
										<tr>
											<td nowrap valign="center">
											<label id="lblAutoDataCapture"><loc:Text ResourceId="Web.Tools.personalsettings.dialogs.personalsettings.UnTracked.Label" runat="server"/></label>
											</td>
											<td>
												<crm:Radio id="rdAutoDataCapture"  runat="server"/>
											</td>
										</tr>
										<tr>
										<td colspan="3">
											<div id="mailboxNotApprovedError" runat="server">
												<img id="erroricon" alt="" src="/_imgs/usermailbox_notapproved_16x16.png" style="padding-left:2px; padding-right:2px;" />
												<%=MailboxNotApprovedText%> 
											</div>
										</td>
										</tr>
									 </table>
									 <% } %>
										<!--AutoDataCapture Ends-->
								</div>
								
								<!-- AddressBook tab -->
								<div class="ms-crm-TabS TabContent" id="addressBook" >
									<table role="presentation" width="100%" height="1%" valign="top" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
										<col width="180" /><col /><col width="135" /><col />
										<ps:AbpSyncSettings id="abpSyncSettings" runat="server" />
									</table>
									<table role="presentation" width="100%" style="table-layout:fixed;">
										<ps:OutlookSchedulableSyncSetting id="ABPScheduledSync" section="UserSettingsAddressBookTitle"  
										checkbox="Web.Tools.personalsettings.dialogs.personalsettings.RunABPScheduledSync" isperiodhours="true" maxversion="4" runat="server" />
									</table>
									<table role="presentation" width="100%" style="table-layout:fixed;">
										<ps:AddressBookEntitiesSetting id="abEntitiesSetting" runat="server" />
									</table>
								</div>
								<!-- End of AddressBook tab-->
								
								<!-- Offline tab -->
								<div class="ms-crm-TabS TabContent" id="offlineSync" >
									<table role="presentation" width="100%" style="table-layout:fixed;">
										<ps:OutlookSchedulableSyncSetting id="OfflineScheduledSync" section="UserSettingsOfflineSyncTitle" 
										checkbox="Web.Tools.personalsettings.dialogs.personalsettings.RunOfflineScheduledSync" 
										description="UserSettingsOfflineSyncDescription" runat="server" />
									</table>
									<table role="presentation" width="100%" height="1%" valign="top" cellspacing="0" cellpadding="3" style="table-layout:fixed;">
										<col width="180" /><col /><col width="135" /><col />
										<ps:CheckBoxSettingSelector id="ckDuplicateDetectionWhenGoingOnline" section="Web.Tools.personalsettings.dialogs.personalsettings.DuplicatesDetectionSettingSubHeading" 
											label="Web.Tools.personalsettings.dialogs.personalsettings.DuplicatesSetting.Note" checkboxlabel="Web.Tools.personalsettings.dialogs.personalsettings.EnableDuplicateDetection" runat="server" />
									</table>
								</div>
								<!-- End of Offline tab -->
								
								<!-- Language tab  -->
								<div class="ms-crm-TabS TabContent" id="languages" >
									<ps:LanguageSetting runat="server" />
								</div>
								<!-- End Language tab -->
						 
				   </div>
				   </div> 
	</div> 
			 <script language="javascript" type="text/javascript">
			 	Sys.Application.add_load(function () {
			 		AdjustTabAndContentWidth();
			 		$addHandler(window, 'resize', AdjustTabAndContentWidth);
			 		// Hide Track emails by folder if offline
					<%if(!Util.IsOnline()){ %>
			 		document.getElementById("idFolderBasedTracking").style.display = "none";
			 		<% } %>
			 	});

			 	function AdjustTabAndContentWidth() {
			 		var tabWidth = $get("crmTabBar").offsetWidth;
			 		var tabBlockWidth = document.getElementById("divTabBlock").offsetWidth;
			 		var curWidth = (((tabWidth > tabBlockWidth) ? tabWidth : tabBlockWidth) - 3);
			 		document.getElementById("divContentArea").style.width = curWidth + "px"
			 		document.getElementById("divTab").style.width = curWidth + "px"
			 	}
</script>
	</frm:DialogForm>
</body>
</html>
