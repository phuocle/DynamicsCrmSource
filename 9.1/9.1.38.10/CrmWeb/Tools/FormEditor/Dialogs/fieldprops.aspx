
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FieldPropertiesPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<style>
	div.ms-crm-Tab
	{
		width:auto;
		height:auto;
	}
	.ms-crm-TabContainer
	{
		top:20px;
		bottom:0px;
		left:0px;
		right:0px;
	}
	fieldset
	{
		border-style: solid;
		border-width: 1px;
	}
</style>

<%if (canConfigureCustomControl){%>
	<script lang="javascript" type="text/javascript">
		window.onload = function () { Mscrm.CustomControls.CustomControlManager.get_instance().initiate(); }
	</script>
<%} %>

</head>
<!-- -------------------------------------------------------------------------------------- -->
<!-- 											Body										-->
<!-- -------------------------------------------------------------------------------------- -->
<body>
	<frm:DialogForm id="crmForm" runat="server">
		<div style="width:100%;height:100%;position:relative;min-width:370px">
			<div class="ms-crm-TabBar-Cell formEditor-TabBar">
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Tab bar -->
				<!-- ------------------------------------------------------------------------------ -->
				<cnt:AppTabBar id="crmTabBar" runat="server"/>
			</div>
			<div style="vertical-align:top">
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Display tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabDisplay" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Label section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divLabelSection" style="display:none;">
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_173" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15px"><col width="65px"><col>
								<!-- Section description -->
								<tr>
									<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_175" runat="server"/></td>
								</tr>
								<!-- Label -->
								<tr>
									<td colspan="2"><label for="txtLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server"/><img src="/_imgs/frm_required.gif" alt="Required" /></label></td>
									<td><ui:TextBox id="txtLabel" runat="server"/></td>
								</tr>
								<!-- Show label -->
								<tr>
									<td><ui:CheckBox id="chkShowLabel" runat="server"/></td>
									<td colspan="2"><label id="chkShowLabelLabel" for="chkShowLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_show_label" runat="server"/></label></td>
								</tr>
							</table>
						</fieldset>
					</div>
					<!-- -------------------------------------------------------------------------- -->
					<!-- Field section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divFieldSection" style="display:none;">
						<br>
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_fieldset_field" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15px"><col>
								<!-- Section description -->
								<tr>
									<td colspan="2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_specify_readonly" runat="server"/></td>
								</tr>
								<!-- Read-only field -->
								<tr>
									<td><ui:CheckBox id="chkDisabled" runat="server"/></td>
									<td><label id="chkDisabledLabel" for="chkDisabled"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_readonly_field" runat="server"/></label></td>
								</tr>
								<!-- Auto-Resolve field -->
								<tr id="trDisableAutoResolve" style="display:none">
									<td><ui:CheckBox id="chkDisableAutoResolve" runat="server"/></td>
									<td><label id="chkDisableAutoResolveLabel" for="chkDisableAutoResolve"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_autoresolve_field" runat="server"/></label>&nbsp;<img alt="" src="/_imgs/error/notif_icn_info16.png" title="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentResourceManager.GetString("ProcessForm.FormEditor.Warning.ToolTip")) %>"/></td>
								</tr>
							<!-- Disable MRU field -->
							<tr id="trDisableMru" style="display:none">
								<td><ui:CheckBox id="chkDisableMru" runat="server"/></td>
								<td><label id="chkDisableMruLabel" for="chkDisableMru"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_DisableMru_field" runat="server"/></label>&nbsp;</td>
							</tr>
							</table>
						</fieldset>
					</div>
					<!-- Locking section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divLockingSection" style="display:none;">
						<br>
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_230" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15px"><col>
								<!-- Section description -->
								<tr>
									<td colspan="2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_232" runat="server"/></td>
								</tr>
								<!-- Lock field -->
								<tr onclick="onLockedClick();">
									<td><ui:CheckBox id="chkLocked" runat="server"/></td>
									<td><label id="chkLockedLabel" for="chkLocked"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_234" runat="server"/></label></td>
								</tr>
							</table>
						</fieldset>
						<table id ="tblLockedFieldMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
							<col width="25"><col>
							<tr>
								<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
								<td><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_lock_message" runat="server"/></td>
							</tr>
						</table>
						<table id ="tblSysLockedFieldMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
							<col width="25"><col>
							<tr>
								<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
								<td><loc:Text ResourceId="Form_Editor_Dialog_Field_Properties_SysReqField" runat="server"/></td>
							</tr>
						</table>
						<table id ="tblScriptLockedFieldMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
							<col width="25"><col>
							<tr>
								<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
								<td><loc:Text ResourceId="Form_Editor_Dialog_Field_Properties_ScriptReqField" runat="server"/></td>
							</tr>
						</table>
					</div>

					<!-- Visiblity to Outlook section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divVisibilitySection">
						<br>
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15px"><col>
								<!-- Section description -->
								<tr>
									<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Control_Visible_Section_Heading" runat="server"/></td>
								</tr>
								<!-- Lock field -->
								<tr>
									<td><ui:CheckBox id="chkVisible" runat="server"/></td>
									<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server"/></label></td>
								</tr>
							</table>
						</fieldset>
					</div>
					<!-- Availability to phone section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divAvailabilitySection">
						<br>
						<fieldset>
						<!-- Section header -->
							<legend><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_Heading" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15px"><col>
								<!-- Section description -->
								<tr>
									<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Field_Available_Section_Heading" runat="server"/></td>
								</tr>
								<!-- Lock field -->
								<tr >
									<td><ui:CheckBox id="chkAvailable" runat="server"/></td>
									<td><label id="chkAvailableLabel" for="chkAvailable"><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_CheckBox_Label" runat="server"/></label></td>
								</tr>
							</table>
						</fieldset>
					</div>
				<div id="divRelationshipFilterSection" style="display:none;">
					<br>
					<fieldset>
						<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.Fields.aspx.RelatedRecordsFilterSection" runat="server"/>&nbsp;</legend>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
						<col width="15px"><col width="65px"><col>
							<tr>
								<td><ui:CheckBox id="chkEnableRelFilter" runat="server"/></td>
								<td colspan="2"><label id="chkEnableRelFilterLabel" for="chkEnableRelFilter"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_EnableRelFilter_label" runat="server"/></label></td>
							</tr>
							<tr>
								<td></td>
								<td colspan="2">
									<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
										<col width="15px"><col>
										<tr>
											<td colspan="2" id="tdParRels"></td>
										</tr>
										<tr>
											<td colspan="2" id="selTraRelsLabelId"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.Fields.aspx.RelatedRecords.FilterLabel" runat="server"/></td>
										</tr>
										<tr>
											<td colspan="2" id="tdLkupRels"></td>
										</tr>
										<tr>
											<td><ui:CheckBox id="chkAllowFilterOff" runat="server"/></td>
											<td><label id="chkAllowFilterOffLabel" for="chkAllowFilterOff"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_chkAllowFilterOff_label" runat="server"/></label></td>
										</tr>
									</table>
								</td>
							</tr>
						</table>
					</fieldset>
				</div>
				<div id="divDisplaySection" style="display:none;">
					<br>
					<fieldset>
						<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.Fields.aspx.LookupPropSection" runat="server"/>&nbsp;</legend>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
						<col width="15px"><col width="65px"><col>
							<tr>
								<td><ui:CheckBox id="chkShowQuickFind" runat="server"/></td>
								<td colspan="2"><label id="chkShowQuickFindLabel" for="chkShowQuickFind"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_ShowQuickFind_label" runat="server"/></label></td>
							</tr>
							<tr>
								<td colspan="2" id="defaultViewLabelId"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.DefaultView" runat="server"/></td>
								<td id="DefaultView"></td>
							</tr>
							<tr>
								<td colspan="2"><label id="chkShowViewPickerLabel"><loc:Text ResourceId="Web.DashboardEditor.ViewSelectorLabel" runat="server"/></label></td>
								<td id="tdViewSelector"></td>
							</tr>
							<tr>
								<td></td>
												<td colspan="2" id="ViewsAvailable"></td>
									</tr>
						</table>
					</fieldset>
				</div>

				<!-- Article Tab section-->
				<!-- -------------------------------------------------------------------------- -->
				<div id="divArticleTabSection" style="display:none;">
				<br>
				<fieldset>
					<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.ArticleTabSection.Label" runat="server"/>&nbsp;</legend>
					<div class="ms-crm-Dialog-Desc">
						<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.ArticleTabSection.Description" runat="server"/>
					</div>
					<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
						<col width="15px"><col>
						<tr>
							<td><ui:CheckBox id="chkShowArticleTab" onclick="showArticleTab();" runat="server"/></td>
							<td ><label for="chkShowArticleTab" id="showArticleTabLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.ArticleTabSection.Labels.CheckBox" runat="server"/></label></td>

						</tr>
					</table>
				</fieldset>
				</div>
				<div id="divDefaultViewSection" style="display:none;">
				<br>
				<fieldset>
					<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.DefaultViewSection.Label" runat="server"/>&nbsp;</legend>
					<div class="ms-crm-Dialog-Desc">
						<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.DefaultViewSection.Description" runat="server"/>
					</div>
					<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
						<col width="120"><col>
						<tr>
							<td><label for="selDefaultView"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.DefaultViewSection.Labels.Selector" runat="server"/></label></td>
							<td><ui:Select id="selDefaultView" runat="server"/></td>
						</tr>
					</table>
				</fieldset>
				</div>
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Article tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabArticle" class="ms-crm-Tab ms-crm-TabContainer" style="display: none;">
					<fieldset>
					<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.FilterSection1" runat="server"/>&nbsp;</legend>
					<%--Records Section--%>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
							<col width="50%" /><col width="50%" />
							<tr>
								<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.FilterSection2" runat="server"/></label></td>
								<td id="tdSearchFilter" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.FormEditor.Dialogs.section.Article.ToolTip' runat='server'/>"><ui:select id="searchFilter" runat="server" /></td>
							</tr>
						</table>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
							<col width="20%" /><col width="5%" /><col width="75%" />
							<tr>
								<td></td>
								<td><ui:CheckBox id="chkAllowChangeFilters" runat="server"/></td>
								<td ><label for="chkAllowChangeFilters" id="allowChangeFiltersLabel" runat="server"></label></td>
							</tr>
						</table>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
							<col width="50%" /><col width="50%" />
							<tr>
								<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.DefaultLanguage" runat="server"/></label></td>
								<td id="tdDefaultLanguage" title=""><ui:select id="defaultLanguage" runat="server" /></td>
							</tr>
						</table>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
							<col width="20%" /><col width="5%" /><col width="75%" />
							<tr>
								<td></td>
								<td><ui:CheckBox id="chkShowLanguageFilter" runat="server"/></td>
								<td ><label for="chkShowLanguageFilter" id="showLanguageFilterLabel" runat="server"></label></td>
							</tr>
						</table>
						<%-- This is for the UI removal as it is not the part of Carina. So making display none for show department filter. --%>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; display: none;">
							<col width="5%"/><col width="95%"/>
							<tr>
								<td><ui:CheckBox id="chkShowDepartmentFilter" runat="server"/></td>
								<td ><label for="chkShowDepartmentFilter" id="showDepartmentFilterLabel" runat="server"></label></td>
							</tr>
						</table>
					</fieldset>
					<br />

					<fieldset>
						<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.AdditionalOptionLegend" runat="server"/>&nbsp;</legend>
						<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
						<col width="5%" /><col width="45%" /><col width="50%" />
							<tr>
								<td><ui:CheckBox id="chkEnableAutomaticSuggestions" onclick="enableDisableKnowledgeSuggestion();" runat="server"/></td>
								<td colspan='2'><label for="chkEnableAutomaticSuggestions" id="enableAutomaticSuggestionsLabel" runat="server">
								</label></td>
							</tr>
							<tr>
								<td></td>
								<td><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.AutoSuggestion1" runat="server"/></label></td>
								<td id="tdautosuggestionsource" title=""><ui:select id="autosuggestionSource" runat="server" onchange="enableDisableKnowledgeSuggestion();" /></td>
							</tr>
							<tr>
								<td colspan='2'></td>
								<td id="tdautosuggestion" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.AutoSuggestion.TooltipTag' runat='server'/>"><ui:select id="autosuggestion" runat="server" /></td>
							</tr>
							<tr
								<%if (!Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Feedback, Microsoft.Crm.Application.Security.UserInformation.Current)) { %>
									style="display:none"
								<% } %>
							>
								<td><ui:CheckBox id="chkEnableRating" onclick="enableDisableRating();" runat="server"/></td>
								<td><label for="chkEnableRating" id="enableRatingLabel" runat="server"></label></td>
								<td id="tdrating" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Article.Rating.Field' runat='server'/>"><ui:select id="showRating" runat="server" /></td>
							</tr>
							<tr>
								<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.Customer" runat="server"/></label></td>
								<td id="tdPrimaryCustomer" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.PrimaryCustomer.TooltipTag' runat='server'/>"><ui:select id="primaryCustomer" runat="server" /></td>
							</tr>
							<tr>
								<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.Rows" runat="server"/></label></td>
								<td><ui:Number id="RowsPerPage" runat="server"/></td>
							</tr>
							<tr>
								<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.ActionsFilter" runat="server"/></label></td>
								<td id="tdActionsSelector" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Article.ActionsFilter.TooltipTag' runat='server'/>">
							</tr>
							<tr>
								<td colspan='3' id="ActionsAvailable"></td>
							</tr>
						</table>
					</fieldset>
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Formatting tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabFormatting" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Column layout section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divColumnLayoutSection" style="display:none;">
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15"/><col/><col width="85" class="fieldprops_col_3"/>
								<!-- Section description -->
								<tr>
									<td colspan="3"><loc:Text ResourceId="FormEditor_Dialogs_ColSpan_Label" runat="server"/></td>
								</tr>
								<!-- One column -->
								<tr>
									<!-- Radion button -->
									<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" class="radio"></td>
									<td><label id="rdColumnSpan1Label" for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>
									<!-- Example picture -->
									<td><table cellpadding="0" cellspacing="4" width="75" class="example">
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
									</table></td>
								</tr>
								<tr>
									<td colspan="3" height="10"></td>
								</tr>
								<!-- Two columns -->
								<tr>
									<!-- Radion button -->
									<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" class="radio"></td>
									<td><label id="rdColumnSpan2Label" for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>
									<!-- Example picture -->
									<td><table cellpadding="0" cellspacing="4" width="75" class="example">
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="2">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example" colspan="2">&nbsp;</td>
										</tr>
									</table></td>
								</tr>
								<tr>
									<td colspan="3" height="10"></td>
								</tr>
								<!-- Three columns -->
								<tr>
									<!-- Radion button -->
									<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" class="radio"></td>
									<td><label id="rdColumnSpan3Label" for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server"/></label></td>
									<!-- Example picture -->
									<td><table cellpadding="0" cellspacing="4" width="75" class="example">
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="2">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="3">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
									</table></td>
								</tr>
								<tr>
									<td colspan="3" height="10"></td>
								</tr>
								<!-- four columns -->
								<tr>
									<!-- Radion button -->
									<td><input name="rdColumnSpan" id="rdColumnSpan4" type="radio" class="radio"></td>
									<td><label id="rdColumnSpan4Label" for="rdColumnSpan4"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_207" runat="server"/></label></td>
									<!-- Example picture -->
									<td><table cellpadding="0" cellspacing="4" width="75" class="example">
										<tr>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="2">&nbsp;</td>
											<td class="example">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="3">&nbsp;</td>
											<td class="example">&nbsp;</td>
										</tr>
										<tr>
											<td class="example" colspan="4">&nbsp;</td>
										</tr>
									</table></td>
								</tr>
							</table>
						</fieldset>
					</div>
					<!-- -------------------------------------------------------------------------- -->
					<!-- Row layout section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divRowLayoutSection" style="display:none;">
						<br>
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_238" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="15"><col width="105"><col>
								<!-- Section description -->
								<tr>
									<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FormProperties.RowLayoutSection.Description" runat="server"/></td>
								</tr>
								<!-- Number of rows -->
								<tr>
									<td colspan="2"><label for="numRows"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
									<td><ui:Number id="numRows" runat="server"/></td>
								</tr>
								<!-- Auto-expanding -->
								<tr id="trAutoExpanding" style="display:<%= _mode == Mode.Preview ? "none" : ""%>;">
									<td><ui:CheckBox id="chkAutoExpanding" runat="server"/></td>
									<td colspan="2"><label id="chkAutoExpandingLabel" for="chkAutoExpanding"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server"/></label></td>
								</tr>
							</table>
						</fieldset>
					</div>
					<!-- -------------------------------------------------------------------------- -->
					<!-- Control section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divControlSection" style="display:none;">
						<br>
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_200" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col>
								<!-- Section description -->
								<tr>
									<td><label for="selControlClassId"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_202" runat="server"/></label></td>
								</tr>
								<!-- Control format -->
								<tr>
									<td><ui:Select id="selControlClassId" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Schema tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabSchema" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Schema section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divSchemaSection" style="display:none;">
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_198" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="110"><col>
								<!-- Section description -->
								<tr>
									<td colspan="2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_219" runat="server"/></td>
								</tr>
								<!-- Attribute display name -->
								<tr>
									<td><label for="txtAttributeDisplayName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_227" runat="server"/></label></td>
									<td><ui:TextBox id="txtAttributeDisplayName" Disabled="true" runat="server"/></td>
								</tr>
								<!-- Attribute schema name -->
								<tr>
									<td><label for="txtAttributeSchemaName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_224" runat="server"/></label></td>
									<td><ui:TextBox id="txtAttributeSchemaName" Disabled="true" runat="server"/></td>
								</tr>
								<!-- Attribute description -->
								<tr style="height: 120px">
									<td valign="top"><label for="txtAttributeDescription"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-boolean.aspx_228" runat="server"/></label></td>
									<td valign="top"><ui:TextArea id="txtAttributeDescription" Height="120px" Disabled="true" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
							<table>
								<tr>
									<td><ui:Button id="editSchProps" width="20" ResourceId="Edit_View_From_SubGrid" runat="server"/></ui:Button></td>
								</tr>
								<tr>
									<td style="padding-top:5px">
										<span>
												<loc:Text ResourceId="SystemCustomization.HelpContent.Link.Title" runat="server"/>
												<a target="_blank" rel="noopener noreferrer" href="<%=CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address")%>" class="help_link">
														<loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
												</a>
										</span>
									</td>
								</tr>
							</table>

				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Activity Wall tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabActivityWall" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Data section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divDataSection" style="display:none;">
						<fieldset>
							<!-- Section header --> 
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text_activityWall" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col width="170px"><col>
								<!-- Section description -->
								<tr>
									<td><label for="sortActivityWall"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FieldProps.Location.SortingLabel" runat="server"/></label></td>
									<td><ui:Select id="sortActivityWall" runat="server"/></td>
								</tr>
								<tr>
									<td><label for="orderByActivityWall"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FieldProps.Location.OrderByLabel" runat="server"/></label></td>
									<td><ui:Select id="orderByActivityWall" runat="server"/></td>
								</tr>
							</table>
						</fieldset>


        			</div>
                    <!-- -------------------------------------------------------------------------- -->
        			<!-- email section -->
        			<!-- -------------------------------------------------------------------------- -->
        			<div id="divEmailSection">
                        <br />
        				<fieldset>
        					<!-- Section header --> 
        					<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text_activityEmail" runat="server"/>&nbsp;</legend>
        					<!-- Section contents -->
        					<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<colgroup>
									<col width="15px">
									<col width="65px">
									<col>
								</colgroup>
								<!-- Section description -->
								<tbody>
									<tr>
										<td><ui:CheckBox id="chkEmailConversationView" runat="server"/></td>
										<td colspan="2"><label for="chkEmailConversationView"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FieldProps.Activity.EmailConversation" runat="server"/></label></td>
									</tr>
								</tbody>
        					</table>
        				</fieldset>


					</div>	
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Events tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabEvents" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Event list section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divEventListSection" style="display:none;">
						<fieldset>
							<!-- Section header -->
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-picklist.aspx_315" runat="server"/>&nbsp;</legend>
							<!-- Section contents -->
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<tr>
									<td >
										<cnt:FormLibraryAndEventHandlerControl CollapseFormLibrarySection="true" id="formLibraryControl" runat="server"/>
									</td>
								</tr>
								<tr>
								   <td style="display:none"><sdk:LookupControl id="libraryLookup" DisableViewPicker="true" DefaultViewId="125A31CE-0F5E-4957-8AA3-7A10C0713886" LookupBrowse="false" LookupStyle="single" runat="server" />
								   </td>
								</tr>
							</table>
						</fieldset>
					</div>
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Business Rules tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabBusinessRules" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Business Rules Grid Section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="divBusinessRulesSection" style="display:none;">
							<div class="ms-crm-IE7-Height-Fix-Dummy-Container" style="overflow:hidden;">
								<iframe src="<%=businessRuleUrl%>" id="IframeBusinessRules" name="iframeBusinessRules" class="container" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
							</div>
					</div>
				</div>

				<div id="tabWebClientProps" class="ms-crm-Tab ms-crm-TabContainer" style="pointer-events: none; min-height:515px;" >
					<!-- ------------------------------------------------------------------------------ -->
					<!-- Web clinet Properties Tab bar -->
					<!-- ------------------------------------------------------------------------------ -->
					<div class="ms-crm-TabBar-Cell formEditor-TabBar" style="pointer-events: all">
						<cnt:AppTabBar id="webClientPropsTabBar" runat="server"/>
					</div>
				</div>
				
				<div id="tabUnifiedClientProps" class="ms-crm-Tab ms-crm-TabContainer"
					style="pointer-events: none; display: none; min-height: 515px;">
					<!-- ------------------------------------------------------------------------------ -->
					<!-- Unified Interface Properties Tab bar -->
					<!-- ------------------------------------------------------------------------------ -->
					<div style="pointer-events: all">
						<div id="notificationUnifiedClientTimeline" class="Notifications Notifications-strict">
							<div role="alert" aria-live="polite" class="Notification">
								<table cellpadding="0" cellspacing="0">
									<tbody>
										<tr>
											<td valign="top">
												<img alt="" src="/_imgs/messagebar/msgbar_icn_info.png"
													class="ms-crm-ImageStrip-msgbar_icn_info">
											</td>
											<td style="padding-left: 6px">
												<span>
													<loc:text resourceid="UCI_Timeline_Notification" runat="server" />
													<a href="https://docs.microsoft.com/en-us/dynamics365/customer-service/customer-service-hub-user-guide-timeline-admin" target="_blank" rel="noopener noreferrer"
														style="color: #0072c5 !important; text-decoration: underline !important;"
														title="<loc:Text Encoding='HtmlAttribute' ResourceId='MailApp.Generic.LearnMore' runat='server'/>">
														<loc:Text ResourceId="MailApp.Generic.LearnMore" runat="server" />
													</a>
												</span>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
						<div class="ms-crm-TabBar-Cell formEditor-TabBar">
							<cnt:AppTabBar id="unifiedClientPropsTabBar" runat="server" />
						</div>
					</div>
				</div>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Activity Properties tab -->
				<!-- ------------------------------------------------------------------------------ -->
				
				<div id="tabActivityProperties" class="ms-crm-Tab ms-crm-TabContainer" style="position:absolute; margin:11px; display: none">
					<div id="divFilterBySection">
						<fieldset>
							 <legend><loc:Text ResourceId="SearchWidget.Mobile.Filters.FilterBy" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col>
								<tr>
									<td><label for="activitySelection"><loc:Text ResourceId="Show_Following_Activities" runat="server" /></label></td> 
									<td id="tdActivitySelector"></td>
								</tr>
									
								<tr>
									<td colspan="2"><ui:select id="activities" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
	

					<div id="divDataSection">
						<fieldset>
				  
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text_activityWall" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col>
								<tr>
								  
									<td><label for="sortTimelineAccTo"><loc:Text ResourceId="Sort_Timeline_Acc_To" runat="server" /></label></td>
									<td><ui:select id="sortTimelineAccTo" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
			

					<div id="divAdditionalOptionsSection">
						<fieldset>
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.AdditionalOptionLegend" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col>
								<tr style="display:none;">
								 
									<td><label for="displayActivityHeaderUsing"><loc:Text ResourceId="Display_Activity_Header_Using" runat="server" /></label></td>
									<td><ui:select id="displayActivityHeaderUsing" runat="server" /></td>
								</tr>
								<tr>
								   
									<td><label for="createActivitiesUsing"><loc:Text ResourceId="Create_Activities_Using" runat="server" /></label></td>
									<td><ui:select id="createActivitiesUsing" runat="server"/></td>
								</tr>
								<tr>
  
									<td><label for="displayActivitiesUsing"><loc:Text ResourceId="Display_Activities_Using" runat="server" /></label></td>
									<td><ui:select id="displayActivitiesUsing" runat="server"/></td>
								</tr>
                                
								</table>
							<table cellpadding="0" cellspacing="5" id="selectCardSection" style="display:none" width="100%" style="table-layout: fixed;">
                                <col width="10%"><col width="5%"><col width="35%"><col width="50%">
                                <tr>
                                    <td />
									<td colspan="3"><div class="ms-crm-Dialog-Desc"><loc:Text ResourceId="Select_Card_Form_For_Entity" runat="server" /></div></td>
								</tr>
								<tr>
									<td colspan="2" />
									<td><label for="selectActivity"><loc:Text ResourceId="Select_Activity" runat="server" /></label></td>
									<td><ui:select id="selectActivity" runat="server" /></td>
								</tr>
								<tr>
									<td colspan="2" />
									<td><label for="selectCardForm"><loc:Text ResourceId="Select_Card_Form" runat="server" />&nbsp;</label></td>
									<td><ui:select id="selectCardForm" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
				</div>
			  
				<div id="tabGeneral" class="ms-crm-Tab ms-crm-TabContainer" style="position:absolute; margin:11px;">
					<div id="divNameSection">
						<fieldset>
						 
							<legend><loc:Text ResourceId="Form_Editor_Form_Properties_Parameter_Name_Label" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col>
								<tr>
								  
									<td colspan="2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.UCI.FieldProps.NameNote" runat="server" /></td>
								</tr>
								<tr>
								  
									<td><label for="txtTimelineName"><loc:Text ResourceId="Form_Editor_Form_Properties_Parameter_Name_Label" runat="server" /></label><img src="/_imgs/frm_required.gif" alt="Required" /></td>
									<td><ui:TextBox id="txtTimelineName" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>
	
					<div id="divGenFilterBySection">
						<fieldset>
						   
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.UCI.FieldProps.FilterSection" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col>
								<tr>
								
									<td><label for="moduleSelection"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.UCI.section.Label.Modules" runat="server" /></label></td> 
									<td id="tdModuleSelector"></td>
								</tr>
									
								<tr>
									<td colspan="2"><ui:select multiple ="true" size = "4" id="modules" runat="server"/></td>
								</tr>
							</table>
						</fieldset>
					</div>

					<div id="divGenAdditionalOptionsSection">
						<fieldset>
					   
							<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.AdditionalOptionLegend" runat="server" />&nbsp;</legend>
							<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
								<col><col><col width="50%">
                               <tr>
									<td colspan="2"><label for="defaultModuleForCreateExperience"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FieldProps.Location.DefaultModuleForCreateExperienceLabel" runat="server" /></label></td>
									<td><ui:select id="defaultModuleForCreateExperience" runat="server" /></td>
							   </tr>
							   <tr>
								   
									<td colspan="3"><ui:CheckBox id="showFilterPane" runat="server" />
									<label for="showFilterPane"><loc:Text ResourceId="Show_Filter_Pane" runat="server" /></label></td>
								</tr>
								<tr>
									<td/>
									
									<td colspan="2"><ui:CheckBox id="expandFilterPane" runat="server" />
									<label for="expandFilterPane"><loc:Text ResourceId="Expand_Filter_Pane" runat="server" /></label></td>
								</tr>

											
								<tr>
								  
									<td colspan="2"><label for="orderBy"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.UCI.section.Label.Sort" runat="server" /></label></td>
									<td><ui:select id="orderBy" runat="server" /></td>
								</tr>
								<tr>
								   
									<td colspan="2"><label for="numOfResults"><loc:Text ResourceId="Number_Of_Results" runat="server" /></label></td>
									<td> <ui:TextBox id="numOfResults" runat="server" /></td>
								</tr>
								<tr>
									<td colspan="3"><ui:CheckBox id="enableWhatsChanged" runat="server" />
									<label for="enableWhatsChanged"><loc:Text ResourceId="Enable_Whats_Changed" runat="server" /></label></td>
								</tr>
							</table>
						</fieldset>
					</div>
				</div>
			  
				<%if (canConfigureCustomControl){%>
				<!-- ------------------------------------------------------------------------------ -->
				<!-- Custom Controls tab -->
				<!-- ------------------------------------------------------------------------------ -->
				<div id="tabCustomControls" class="ms-crm-Tab ms-crm-TabContainer">
					<!-- -------------------------------------------------------------------------- -->
					<!-- Control Library section -->
					<!-- -------------------------------------------------------------------------- -->
					<div id="secCustomcontrol">
						<fieldset style="border: none;height: 123px">
							<!-- Section header -->
							<div style="margin-bottom:10px;width:100%;align:center;height: 120px; overflow-y: auto" id="tblContainerDIV">
								<table class="customcontrol-tablestyle" id="tblCustomControl" rtl="<%=rtlValue%>">
									<!-- Section description -->
									<tr class="customcontrol-bottomline" style="height: 28px;line-height: 1px">
										<th class="customcontrol-text-ellipses customcontrols_configuration_control_name" rtl="<%=rtlValue%>" title="<loc:Text ResourceId='CustomControls_Configuration_Control' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Control" runat="server"/></b></th>
										<% if(Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.DataSetControl.Name, Microsoft.Crm.Application.Security.UserInformation.Current)){%>
												<th style="text-align: center;width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Web' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Web" runat="server"/></b></th>
										<% } %>
										<th style="text-align: center;width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Phone' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Phone" runat="server"/></b></th>
										<th style="text-align: center;width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Tablet' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Tablet" runat="server"/></b></th>
										<th style="width: 15%"></th>
									</tr>
								</table>
								<div style="padding-top:5px;" id="addControlDiv">
									<a href="#" id ="addcontrolid"><span class="customcontrol-subject customcontrol-fontfamily" style="cursor:pointer"><u><loc:Text ResourceId="CustomControls_Configuration_AddControl" runat="server"/></u></span></a>
								</div>
							</div>
						</fieldset>
					</div>
					<!-- Section header -->
					<div id="divPropertyTableContainer" width="100%"  style="border:1px solid #DDDDDD;height:356px">
						<div id="selectionRemindBoxId" class="selectionremindbox" rtl="<%=rtlValue%>">
							<span><loc:Text ResourceId="CustomControls_Configuration_PlaceHolderText1" runat="server"/></span>
						</div>
					</div>
				</div>
				<%} %>
			</div>
		</div>

	</frm:DialogForm>
</body>
</html>
