<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FieldPropertiesPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
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
                                                <a target="_blank" href="<%=CurrentResourceManager.GetString("CRM_Dynamics_SDK_Address")%>" class="help_link">
                                                        <loc:Text ResourceId="Brand_CRM_SDK" runat="server"/>
                                                </a>
                                        </span>
                                    </td>
                                </tr>		
                            </table>
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
        	</div>
        </div>
	</frm:DialogForm>
</body>
</html>
