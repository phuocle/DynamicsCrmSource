<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

<% if (CrmStyles.IsRightToLeft) {  %>
html
{
direction: rtl;
}
<% } %>

html,
body
{
height: 100%;
}

body
{
direction: <% = CrmStyles.BodyDirection %>;
margin:	0px;
border: 0px;
cursor: default;
<% if (CrmStyles.IsRightToLeft) { %>
dir:rtl;
<%} %>
}



.ms-crm-propertybag-help-link
{
cursor: pointer;
color: #3b3bf5 !important;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px !important;
<% } else { %>
margin-left: 10px !important;
<% } %>
}

.ms-crm-helplink-alignment
{
vertical-align: middle;
}

.ms-crm-form-RowHeight
{
height: 24px !important;
}

.ms-crm-anchorContainer-TD
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}

.ms-crm-warningimage-help-link
{
padding: 4px 5px ;
vertical-align: middle;
}

.ms-crm-section-Table
{
border-spacing: 0px !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.ms-crm-Container-TD
{
width: 530px !important;
white-space: nowrap;
}

.ms-crm-SectionEmptyMessage
{
padding-top: 10px;
font-weight: normal !important;
font-style: normal;
}

.ms-crm-link-description
{
vertical-align: middle;
}


.IE7DivReset div{
width:auto;
height:auto;
}

table
{
cursor: default;
}

td.ms-crm-availableForMobileOffline-Control-TD
{
<% if (CrmStyles.IsRightToLeft) {  %>
padding-right:25px;
}
<% } else {%>
padding-left: 25px;
<% }%>
}

a,
a:link img,
a:visited img,
a:active img,
a:hover img
{
border: none;
}

.ms-crm-greyDiv
{
position: absolute;
top: 0; left: 0; right: 0; bottom: 0;
background: #e6e1e1;
z-index: 2000;
}


ul
{
margin:		0px;
padding:	0px;
list-style:	none;
}

button
{
line-height: 16px;
height: 20px;
width: 84px;
text-align: center;
cursor: pointer;
border-width: 1px;
border-style: solid;
background-repeat: repeat-x;
padding-left: 5px;
padding-right: 5px;
}

a,
a:link img,
a:link,
a:visited img,
a:visited,
a:active img,
a:active,
a:hover img,
a:hover
a:hover img,
input,
textarea,
select
{
color: #000000;
}


.ms-crm-Table-Layout {
display: flex;
flex-direction: column;


display: -ms-flexbox;
-ms-flex-direction: column;


display: -webkit-flex;
-webkit-flex-direction: column;
}

.ms-crm-Table-Row-AutoHeight {
flex: none;


-ms-flex: none;


-webkit-flex: none;
}

.ms-crm-Table-Row-Expanded {
flex: 1 0 auto;



position: relative;


-ms-flex: 1 1 auto;


-webkit-flex: 1;
height:100%;
}



.ms-cui-ct-ul .ms-cui-tt-a
{
border-top: none !important;
padding-top:1px;
}





.ms-cui-ribbon a:focus
{
outline-width:1px;
outline-color:black;
outline-style:dotted;
}

.ms-crm-lightbox
{
position:absolute;
z-index:100;
opacity:0.1;
}

.ms-crm-settings-leftNav
{
border:1px solid #a4abb2;
height:100%;
width:100%;
}

.ms-crm-float-leadingedge
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float: left;
<% } %>
}

.ms-crm-alignText-leadingedge
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align: left;
<% } %>
}

div.ms-crm-settings-leftNav
{
padding-top:9px;
overflow-x:hidden;
overflow-y:auto;
}

h2
{
color: #aa0000;
}

nobr
{
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
}

.stage
{
<% if (CrmStyles.IsRightToLeft) { %>
dir:rtl;
<%} %>
overflow : auto ;
background-repeat: repeat-x;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 4px;
<% } else { %>
margin-right: 4px;
<% } %>
position:relative;
}

table.stdTable
{
width: 100%;
height: 100%;
table-layout: fixed;
}

div.stdTable
{
height: 100%;
}

.autoellipsis
{
width:100%;
overflow:hidden;
text-overflow:ellipsis;
}

.ms-crm-TextAlign-LeadingEdge,
.ms-crm-FieldLabel-LeftAlign,
col.workflowTemplatePage_col_left,
quote_dlg_close_Num,
td.AppContractCalendar_Render_td,
td.dlg_camailmerge_td_ownership,
td.dlg_deactivate_td_status,
td.dlg_deactivatecampactivity_td_EndDate,
td.dlg_deactivatecampactivity_td_StartDate,
td.dlg_deactivatecampactivity_td_status,
td.dlg_setstate_asyncoperation_td,
td.dlg_setstate_td_LblStatus,
td.HtmlBar_AddTextButton_td,
td.ImportCustomizationsForm_td_BtnUploadFile,
td.ImportWizard_td_PageContainer,
td.invoice_dlg_close_td_InvNum,
td.LangTranslationsImport_td,
td.MiniCampaign_td_OwnerGroup,
td.MiniCampaign_td_PageHeader1,
td.ms-crm-Dialog-Footer-Left,
TD.ms-crm-VisualizationNameLabel,
div.notesTextBoxActionsDiv,
td.notes_htc_td_create,
td.NotesDataControl_Render_td,
td.NotesDataControl_Render_td2,
td.personalsettings_td_AdminDisb,
td.personalsettings_td_HosterTitle,
td.personalsettings_td_MinSyncPeriod,
td.personalsettings_td_RunPerMins,
td.personalsettings_td_RunSchSync,
td.personalsettings_td_SQMAccept,
td.personalsettings_td_SyncClient,
td.personalsettings_td_SyncStart,
td.personalsettings_td_SyncTitle,
td.quote_dlg_accept_td_QuoteNum,
td.quote_dlg_accept_td_RevNum,
td.relRoleEdit_edit_td_HeadSpacer,
div.report_viewer_td_BtnEditFilter,
td.RoleDetailPage_RenderCustomEntityPrivilegeRows_td,
td.roles_edit_td_RecordType,
td.salesord_dlg_close_td_OrdNum,
td.sqmsettings_td_AcceptBox,
td.systemsettings_td_Mins,
td.SystemWideDuplicateDetection_td_btnhelp,
td.SystemWideDuplicateDetection_td_headerwrapper,
div.TimeSheet_Render_div,
div.TimeSheet_Render_div2,
div.TimeSheet_Render_div3,
div.workflowTemplatePage_buttonsleft,
td.workflowTemplatePage_td_left,
td.workplan_edit_td_caption,
td.workplan_edit_td_same,
th
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

td.MiniCampaign_td_OwnerGroup
{
height:24px;
}

div.ms-crm-Dialog-Footer-Left
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
float: right;

<% } else { %>
text-align: left;
float: left;
<% } %>
margin-top:1%;
}

.ms-crm-TextAlign-TrailingEdge,
.ms-crm-FieldLabel-RightAlign,
col.fieldprops_col_3,
col.formedit_section_col_3,
col.Menu_Render_col,
prtylist_resolve_BtnQuickCreate,
td.AppAttachment_Render_td4,
td.AppAttachment_Render_td5,
td.AppFilterEditor_Render_td,
td.attrMap_td_MapFile,
td.contract_edit_td_AllotType,
td.contracts_edit_td_AllotType,
td.dlgs_timesheet_td_BtnCap,
td.GanttControlFrame_td_EndDateSec,
td.home_debug_td_ImgDebugInfo,
td.hp_news_td_SpanAnnouncments,
td.ImportFieldMap_td_ID2,
td.MiniCampaign_td_spacer,
div.ms-crm-AddUsers-Restart,
td.ms-crm-Dialog-Footer-Right,
.ms-crm-PaneChevron,
td.notes_htc_td_edit,
td.NotesDataControl_Render_td3,
td.opp_dlg_reopen_td_buttons,
td.quote_dlg_accept_td_Revenue,
td.rsc_resourcerule_td_toggle,
div.ScheduleWizard_td_BtnEditFilter,
td.ScheduleWizard_td_Text,
td.SystemWideDuplicateDetection_td_header,
td.SystemWideDuplicateDetection_td_ImgWizHead,
tr.attachement_edit_tr_BtnClose,
tr.attrMap_tr_buttons,
tr.ImportWizard_tr_Buttons,
tr.MiniCampaign_tr_MCButtons,
div.notes_edit_tr_BtnClose,
tr.SystemWideDuplicateDetection_tr_buttons,
tr.SystemWideDuplicateDetection_tr_header,
tr.ViewDuplicates_tr_Buttons
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}

td.ms-crm-NumbersAndDates
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left !important;
<% } else { %>
text-align: right !important;
<% } %>
}

td.AppAttachment_Render_td6
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
padding-right:10px;
width:10%;
<% } else { %>
text-align: right;
width:10%;
<% } %>
}
div.ms-crm-Dialog-Footer-Right
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
float: left;

<% } else { %>
text-align: right;
float: right;
<% } %>
margin-top:1%;
}

img.ms-crm-RTL-Flip,
img.addFields_img_barUp,
img.bar_Find_img_find,
img.changeschedule_img_clear,
img.changeschedule_img_exception,
img.changeschedule_img_newpattern,
img.changeschedule_img_wholepattern,
img.dlg_merge_img_boxLeft,
img.errorHandler_img_boxOnLeft,
img.errorHandler_img_BoxRight,
img.home_appbook_img_ico24caltodaymenu,
img.ms-crm-AdHocWizard-PreviewImage,
img.ms-crm-Home-Cal-RefreshPadding,
img.ms-crm-InlineTabExpander,
img.subjectEditor_img_subjWatermark,
img.ms-crm-Lookup-PresenceItem
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

.ms-crm-VerticalAlign-Top,
.ms-crm-Salesperson-Error,
IMG.ms-crm-AlignToSpan,
TD.Freq_Body,
TD.Freq_DetailBody,
td.inlabel,
TD.ms-crm-Field-Print,
td.outlabel,
TR.ms-crm-Form-Title,
TR.ms-crm-SettingsPage
{
vertical-align: top;
}

.ms-crm-LeadingEdge-Padding-2px,
.ms-crm-List-RightMarker,
td.home_workplace_td_ImgBK,
td.productManager_td_links,
td.productManager_td_PriceList,
td.productManager_td_Products,
td.productManager_td_UnitGroup
{
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
<% } else { %>
padding-left: 2px;
<% } %>
}

.ms-crm-TrailingEdge-Margin-4px,
img.dlg_create_RenderListItem_img,
img.dlg_template_target_img_CCItem,
img.dlg_template_target_img_ReItem,
img.dlg_template_target_img_ToItem,
img.MiniCampaignPage_RenderListItem_img
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 4px;
<% } else { %>
margin-right: 4px;
<% } %>
}

.ms-crm-LeadingEdge-Padding-4px,
IMG_lu_htc_b,
td.AddColumns_td_SelectAll,
td.addfields_td_SelectAll,
td.DateTimeUI_RenderTimeControl_td2
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
}



.ms-crm-TrailingEdge-Margin-5px,
img.form_properties_img_BackOffice,
img.form_properties_img_Security,
img.form_properties_ImgLabel,
img.LookupDataPage_RenderHeadings_img,
img.LookupSubjectPage_ConfigurePage_img
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:5px;
<% } else { %>
margin-right:5px;
<% } %>
}

.ms-crm-LeadingEdge-Padding-5px,
DIV.ms-crm-Dialog-Header-Title,
table.home_camps_table,
table.home_cases_table_QuickFind,
table.home_import_table,
table.home_minicamps_table,
table.RelRoleMgr_home_table,
td.attrMap_td_headerLabel,
TD.control,
td.dlg_closecase_td_CloseCase,
td.dlg_merge_td_MergeRecordTwo,
td.dlg_merge_td_RecordOne,
td.dlg_merge_td_SubRecord,
TD.ms-crm-AddUsers-Licensing-AccessMode,
.ms-crm-Dialog-Lookup-ListColumn,
TD.ms-crm-Select-TD,
textbox.DetailPage_ConfigurePage_textbox
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.ms-crm-appgridmenubar
{
border-width: 1px;
border-style: solid;
border-bottom: none;
}

table.home_import_table,
.homepage_table
{
border-width: 1px;
border-style: solid;
border-bottom: none;
}

.homepage_table
{
padding-top: 0px;
}

td.homepage_menubar
{
border-left-width: 1px;
border-left-style: solid;
border-right-width: 1px;
border-right-style: solid;
}

td.homepage_notif_cell
{
min-height: 0px;
}

.ms-crm-TrailingEdge-Padding-5px,
td.attributeList_td_Filter,
td.bar_Find_td_Text,
td.dlg_query_build_td_RecordType,
td.dlg_query_build_td_ViewSelector,
td.emailtempMgr_home_td_AppViewSelector,
td.entityList_td_Filter,
td.home_activities_td_TypeSelLbl,
td.home_biz_td_AppViewSelector,
td.home_discounttype_td_Value,
td.home_import_td_ViewLbl,
td.home_pricelevel_td_Value,
td.home_product_td_Value,
td.home_resource_groups_td_AppViewSelector,
td.home_resource_td_AppViewSelector,
td.home_service_td_AppViewSelector,
td.home_site_td_AppViewSelector,
td.home_uomschedule_td_Value,
td.home_user_td_AppViewSelector,
td.homepage_td,
td.ImportCustomizationsForm_td,
td.KBTempMgr_home_td_Value,
td.relationshipList_td_EntityRoleFilter,
td.relationshipList_td_FilterType,
td.RelRoleMgr_home_td_Value,
td.Solution_home_td_AppViewSelector,
td.uiElements_td_FilterLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
<% } else { %>
padding-right: 5px;
<% } %>
}

.ms-crm-DataCell,
.ms-crm-LeadingEdge-Padding-10px,
col.AppGridPrintUIProvider_RenderColumnHeader_col2,
td.AppGridFilterSelector_Render_td,
td.createMapping_td_RightColumn,
td.DuplicateRuleCondition_td_Status,
td.ImportFieldMap_td_EntityType,
td.ImportFieldMap_td_ImpFileName,
td.ImportFieldMap_td_PageGrid2,
td.manageAttribute_td_RightColumn,
td.manageEntity_td_RightColumn,
TD.ms-crm-workflowTemplateForm-Section,
td.SystemWideDuplicateDetection_td_ddPageBody1,
td.SystemWideDuplicateDetection_td_ddPageBody4,
td.SystemWideDuplicateDetection_td_page1
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

.ms-crm-DataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}


td.dlg_bulkemail_td_TemplateListStart
{
padding-right:10px;
padding-left:10px;
padding-top:10px;
}

.ms-crm-TrailingEdge-Padding-10px,
td.createMapping_td_LeftColumn,
td.home_activities_td_TypeSel,
td.home_activities_td_ViewSel,
td.home_asyncoperation_td_EntitySelector,
td.home_rules_td_EntityTypeLabelCode,
td.manageAttribute_td_LeftColumn,
td.manageEntity_td_LeftColumn,
td.ViewDuplicates_td_Buttons
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
<% } else { %>
padding-right: 10px;
<% } %>
}

.ms-crm-LeadingEdge-Padding-13px,
col.ImportFieldMap_col_1,
col.ImportFieldMap_col_2,
col.ImportFieldMap_col_ValueMapping1,
col.ImportFieldMap_col_ValueMapping2
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 13px;
<% } else { %>
padding-left: 13px;
<% } %>
}

.ms-crm-TrailingEdge-Padding-15px,
td.dlg_bulkemail_td_ActivitySender,
td.ImportWizard_td_Buttons,
td.MiniCampaign_td_Buttons,
td.SystemWideDuplicateDetection_td_buttons,
td.SystemWideDuplicateDetection_td_Buttons,
td.workflowTemplatePage_td_buttons
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 15px;
<% } else { %>
padding-right: 15px;
<% } %>
}

.ms-crm-HorizontalPadding-15px,
td.ImportWizard_td_iPageBody3_HeaderDeDup,
td.ImportWizard_td_iwPageBod3_AssignTo,
td.ImportWizard_td_iwPageBody1_HeaderDataFile,
td.ImportWizard_td_iwPageBody1_Spacer,
td.ImportWizard_td_iwPageBody2_Spacer,
td.ImportWizard_td_iwPageBody2_UpdateNotif,
td.ImportWizard_td_iwPageBody3_Spacer,
td.ImportWizard_td_iwPageBody4_Spacer,
td.ImportWizard_td_iwPagrBody1_Info,
td.ImportWizard_td_ReviewAutoName,
td.ViewDuplicates_td_DupListIFrame,
td.ViewDuplicates_td_DupSrcSysWide,
td.ViewDuplicates_td_NotDupSrcSysWide,
td.ViewDuplicates_td_IframeCont
{
padding-left: 15px;
padding-right: 15px;
}

.ms-crm-LeadingEdge-Padding-20px,
col.contracttypemanager_edit_col_3,
col.contracttypemanager_print_col_3,
col.FormSection_WriteColumnHeaders_col,
col.personalsettings_col_3,
col.personalsettings_col_3tab2,
col.personalsettings_col_3tabEmail,
span.personalsettings_span_Password,
span.personalsettings_span_UserName,
td.attrMap_td_gridHeader,
td.dlg_cancel_td_Cancel,
td.dlg_clone_td,
td.dlg_renew_td,
tr.ViewDuplicates_tr_CreateOnline,
tr.ViewDuplicates_tr_IgnoreOffline
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

td.FormSection_CellPadding
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>

}

td.FormSection_CellPadding_LastColumn
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
padding-left: 2px;
<% } else { %>
padding-left: 10px;
padding-right: 2px;
<% } %>

}

.ms-crm-MaxWidth,
BUTTON.listEdit_button,
Button.w100,
NOBR.ms-crm-Nav-Subitem-Title,
SPAN.Freq_FrequencyDetail,
TABLE.ms-crm-Cal-DeleteIcon,
TABLE.ms-crm-VisualizationPaneDesigner-TableAttributesSelector
{
width: 100%;
}

.ms-crm-MaxHeight-MaxWidth,
#WorkflowDynamicDataArea,
FORM.ms-crm-AddUsers-DomainsAndGroups,
IFRAME.container,
IFRAME.ms-crm-Dialog-Lookup-Results,
table.ganttCalendar,
DIV.ms-crm-Cal-Month-Day-Info,
TABLE.ms-crm-Form-Area,
TABLE.ms-crm-SettingsPage,
TD.CategoryList,
TD.ms-crm-Form-Area
{
height: 100%;
width: 100%;

}
DIV.ms-crm-Form-Area,
DIV.ms-crm-Form-Area-Customize{
height: 100%;
}

.ms-crm-Form-Area-position
{
position:relative;
}

.ms-crm-HandCursor,
IMG.calCollapse,
IMG.calExpand,
IMG.Heading,
IMG.ms-crm-AdvFind-ButtonImage,
TD.hand,
th.ms-crm-List-Sortable,
div.wizItemRow
{
cursor: pointer;
}

.ms-crm-WhiteBackground,
BODY.ms-crm-Nav,
BODY.NotesData,
div.ganttBlockAppointmentStatus1,
div.ganttBlockAppointmentStatus2,
TD.ms-crm-Cal-Month-Day-Current,
DIV.ms-crm-AdvFind-FilterField,
UL.simpleTree,
div.TreeContainer
{
background-color: #ffffff;
}

.ms-crm-QuickFindSpacer,
span.emailTemplateMgr_home_span_QuickFindSpacer,
span.home_apptbook_span_QuickFindSpacer,
span.home_camps_span_QuickFindSpacer,
span.home_cases_span_QuickFindSpacer,
span.home_discounttype_span_Spacer,
span.home_import_span_spacer,
span.home_minicamps_span_QuickFindSpacer,
span.home_pricelevel_span_spacer,
span.home_product_span_Spacer,
span.home_reports_span_spacer,
span.home_resource_groups_span_QuickFindSpacer,
span.home_resource_span_QuickFindSpacer,
span.home_service_span_QuickFindSpacer,
span.home_site_span_QuickFindSpacer,
span.home_solution_span_Spacer,
span.home_uomschedule_span_Spacer,
span.home_user_span_Spacer,
span.homepage_span,
span.KBTempMgr_home_span_Spacer,
span.relationshipList_span_spacer,
span.RelRoleMgr_home_span_spacer
{
height: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 8px;
<% } else { %>
margin-left: 8px;
<% } %>
width: 8px;
}

.ms-crm-sysHealthContent A
{
color: #0088e4;
text-decoration: none;
}
.ms-crm-sysHealthContent A:hover
{
text-decoration: underline;
}

.ms-crm-Empty,
.ms-crm-List-DefaultIndex,
A.ms-crm-Nav-Group-Heading-Hidden,
A.ms-crm-Nav-Group-Heading-Hidden:link,
A.ms-crm-Nav-Group-Heading-Hidden:visited,
A.ms-crm-Nav-Group-Heading-Hidden:active,
A.ms-crm-Nav-Group-Heading-Hidden:hover,
a.ms-crm-navtree-subarea-linkrest,
a.ms-crm-navtree-subarea-link-rest:link,
a.ms-crm-navtree-subarea-link-rest:visited,
a.ms-crm-navtree-subarea-link-rest:active,
a.ms-crm-navtree-subarea-link-rest:hover,
body.displayStringList_body,
div.secton_header,
LI.simpleTree,
SPAN.Context,
td.AppQuickFind_Render_td,
TD.popupMnuItem,
tr.htmlBar,
TR.mergeheader,
TR.ms-crm-Group,
UL.ms-crm-NavBar-Group-Subareas
{
}

td.GanttControlFrame_td_FromDateSec,
td.ImportFileChoose_td_InnerTable,
td.rsc_creategroup_td_GrpName,
td.SystemWideDuplicateDetection_td_MainWrapper,
td.ViewDuplicates_td_container
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
width: 185px;
}

td.dlg_query_build_td_BackBtn,
td.dlg_query_build_td_BtnAction,
td.dlg_query_build_td_RunQuery,
td.SystemWideDuplicateDetection_td_btn,
div.dlg_query_build_BackBtn,
div.dlg_query_build_BtnAction
{
height: 25px;
padding-bottom: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
text-align: left;
<% } else { %>
padding-right: 10px;
text-align: right;
<% } %>

}

div.dlg_query_build_div_ActionMain
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
float:left;
<% } else { %>
text-align: right;
float:right;
<% } %>

}

A.help_link,
A.help_link:active,
A.help_link:hover,
A.help_link:visited,
A.helptoc_link:hover,
a.ImportMapViewLink,
a.ImportMapViewLink:link,
a.ImportMapViewLink:visited,
A.ms-crm-gridurl:active,
A.ms-crm-gridurl:visited,
A.ms-crm-Link:hover
{
color: #0000FF;
text-decoration: underline;
}

td.home_activities_td_ViewByDate,
td.home_activities_td_ViewSelLbl,
td.home_role_td_SelBusinessUnit,
td.home_team_td_AppViewSelector,
td.QueMgr_home_td_AppViewSel
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
padding-left: 5px;
<% } else { %>
text-align: right;
padding-right: 5px;
<% } %>
}

td.emailtemplateForm_td_TemplateListStart,
td.MiniCampaign_td_ActivitiesOwn,
td.MiniCampaign_td_ChooseActivity,
td.MiniCampaign_td_MSGDetails,
td.MiniCampaign_td_PageBody1,
td.MiniCampaign_td_PageBody2
{
padding: 0px 10px;
}

td.ms-crm-MiniCampaign-Main
{
vertical-align: top;
padding-bottom: 10px;
padding-top: 10px;
border-bottom-width: 1px;
border-bottom-style: solid;
}
td.SystemWideDuplicateDetection_td_ddPageBody3,
td.SystemWideDuplicateDetection_td_ddPageBody3_SysWide,
td.SystemWideDuplicateDetection_td_page3,
td.SystemWideDuplicateDetection_td_SpecifyName,
td.SystemWideDuplicateDetection_td_starttime
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
padding-left: 20px;
<% } else { %>
padding-left: 15px;
padding-right: 20px;
<% } %>
}

td.home_camps_td_Label,
td.home_cases_td_Label,
td.home_minicamps_td_Label,
td.home_reports_td_ViewSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 5px;
<% } else { %>
padding-right: 5px;
<% } %>
}






A.simpleTree
{
cursor:pointer;
vertical-align: top;
}
IMG.simpleTree
{
padding-bottom: 2px;
vertical-align: top;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 5px;
<%= FlipImage("h") %>
<% } else { %>
margin-right: 5px;
<% } %>
}

.selectedItem
{
border-style: solid;
border-width: 1px;
}

DIV.ms-crm-AdvFind-SelectedFilterField
{
background-color: #a7cdf0;
}

SPAN.simpleTree
{
vertical-align: middle;
}

INPUT.ms-crm-Dialog-Lookup-QuickFind
{
background-color: #ffffff;
width:100%;
height: 15px;
padding-top: 1px;
padding-bottom: 2px;
padding-right: 7px;
padding-left: 7px;
margin-top: 0px;
margin-bottom: 1px;
}

LABEL.ms-crm-Dialog-Lookup-QuickFindHint
{
display: inline-block;
position: absolute;
color: #666666;
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
<% if (Request.Browser.Browser != "IE") { %>
padding: 4px 5px;
<% } else { %>
padding: 2px 5px;
<% } %>
overflow: hidden;
height: 16px;
font-weight:normal;
font-style:italic;
cursor: text;
}

A.ms-crm-FindButton
{
border: 0px;
margin: 0px;
margin-bottom: 1px;
width: 21px;
height: 20px;
display:inline-block;
}

A.ms-crm-ArticleSearchButton
{
border: 0px;
margin: 0px;
margin-top: 3px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 2px;
padding-right: 6px;
<% } else { %>
margin-left: 2px;
padding-left: 6px;
<% } %>
vertical-align: top;
display:inline-block;
}

img.articleSearchImg
{
margin-top: 2px;
}

div.articleSearchMenu
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px !important;
padding-left:2px !important;
<% } else { %>
padding-right: 2px !important;
padding-left:0px !important;
<% } %>
}

TD.ms-crm-Dialog-Lookup-Types
{
<% if (Request.Browser.Browser == "IE") { %>
padding-top: 0px;
padding-bottom: 0px;
<% } else { %>
padding-top: 5px;
padding-bottom: 5px;
<% } %>
padding-left:5px;
padding-right:5px;
}

DIV.ms-crm-SettingsPage
{
padding: 10px;
height: 100%;
background-color: #ffffff;
border:	1px solid #15428b;
overflow-x:hidden;
overflow-y:auto;
}
TABLE.homeChartPaneTable,
IFRAME.chartIframe
{
width: 99.9%;
height: 99.9%;
}


iframe.ViewDuplicatesGrid
{
border-bottom-color:#848284;
-moz-border-bottom-colors: #000000;
<% if (CrmStyles.IsRightToLeft) { %>
border-left-color:#848284;
-moz-border-left-colors: #000000;
<%} else { %>
border-right-color:#848284;
-moz-border-right-colors: #000000;
<% } %>
}

DIV.mscrm-workflow-editor-control-placeholder
{
border:1px solid #D6D6D6;
height:100%;
width:auto;
padding:2px;
}
TD.chartContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 1px;
<% } else { %>
padding-left: 1px;
<% } %>
}
IMG.chartButtonImageLast
{
margin-top:		5px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:		10px;
margin-right:		0px;
<% } else { %>
margin-left:		0px;
margin-right:		10px;
<% } %>
}
IMG.chartButtonImage
{
margin-top:		5px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:		1px;
margin-right:		0px;
<% } else { %>
margin-left:		0px;
margin-right:		1px;
<% } %>
}
img.imgHomeChartListSettings
{
vertical-align: middle;
margin-right: 5px;
}
.homeChartListHeaderText
{
font-family: Tahoma;
font-size: 11px;
font-weight: bold;
color: #15428B;
}
.homeChartListLinkText
{
font-family: Tahoma;
font-size: 11px;
color: #15428B;
}
TD.ms-crm-SettingsPage
{
padding: 0px;
}
.ms-crm-Queue-Container
{
background-color: #ffffff;
border: 1px solid #bbd4f6;
padding: 4px;
}

TABLE.ms-crm-Group-Links
{
border:	1px solid #6699cc;
background-color: #d6e8ff;
width: 100%;
background-image: url(/_imgs/formnav_header_back.gif);
background-repeat: repeat-x;
}
TABLE.ms-crm-Group
{
border:	1px solid #6699cc;
background-color: #ffffff;
width: 100%;
background-image: url(/_imgs/nav_header_back.gif);
background-repeat: repeat-x;
}
TH.ms-crm-Group-Links,
TH.ms-crm-Group
{
color: #15428b;
padding: 8px;
}
TD.ms-crm-Group
{
padding: 0px 8px 8px 8px;
}
TABLE.ms-crm-storageBar
{
border: 1px solid #000000;
padding: 1px;
height: 12px;
width: 120px;
}
TD.ms-crm-storageBarWarn
{
background-color: red;
padding: 1px;
}
TD.ms-crm-storageBarOK
{
background-color: green;
padding: 1px;
}
DIV.ms-crm-Syshealth-Spacer,
td.viewmanager_td_NotSysView
{
padding: 5px;
}
td.viewmanager_td_NotSysView
{
vertical-align:top;
}
DIV.ms-crm-LeftSideBox
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-left: 5px;
<% } else { %>
float: left;
padding-right: 5px;
<% } %>
}

hr.ms-crm-Notification-Spacer
{
border: 0px;
color: #777777;
background-color: #777777;
height: 1px;
}

A.ms-crm-Link,
A.ms-crm-Link:link,
A.ms-crm-Link:visited,
A.ms-crm-Link:active
{
color: #15428b;
}

.ms-crm-DisplayNone
{
display:none;
}

.ms-crm-Hidden-List,
.ms-crm-Hidden,
.ms-crm-Hidden-NoBehavior
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>
top:-9000px;
width:0px;
height:0px;
}
.ms-crm-Hidden,
.ms-crm-Hidden-NoBehavior
{
overflow:hidden;
}

DIV.ms-crm-Dialog-Notification-Bar
{
margin:			0px 10px;
}
TD.homeChartPaneContainer
{
height: 40%;
}
DIV.chartButtonDiv
{
background-color: #ffffff;
<% if (!CrmStyles.IsRightToLeft) { %>
text-align:right;
<%} %>
}
.ms-crm-opacity
{
opacity:1.0;
}
.ms-crm-transparence
{
opacity:0.0;
}
.ms-crm-flyout
{
padding-left:3px;
border: none;
font-family:Tahoma;
font-size: 11px;
color: #15428B;
}


.ms-crm-Code
{
direction:ltr;
}

.ms-crm-ContextMenu
{
display:none;
background-Color:menu;
border: 2px outset;
}

.ms-crm-Error-Header
{
color: #000000;
margin-bottom: 4px;
}

TD.ms-crm-Form-Section,
DIV.ms-crm-Form-Section
{
color:				#000000;
padding-bottom:		2px;
text-overflow:		ellipsis;
overflow:			hidden;
}
.dlgLabel
{
color: #666666;
}
td.ms-crm-ArticleComment-Icon
{
padding-top:2px;
<% if ( CrmStyles.IsRightToLeft ) { %>
padding-left:5px;
<% } else { %>
padding-right:5px;
<% } %>
}

td.ms-crm-ArticleComment-Body,
td.ms-crm-ArticleComment-Title
{
color: #0000bb;
}

td.ms-crm-ArticleComment-Info
{
padding-top: 5px;
}
div.ms-crm-Help-ErrorMessage
{
color:#aaaaaa;
}
.ms-crm-File-Upload
{
width:100%;
height:19px;
padding-top:2px;
}
.ms-crm-SubjectTree-Label
{
width:100%;
display:block;
color:#37377C;
border-bottom:solid 1px #D4D4D0;
}
.ms-crm-Wsdl-Title
{
width: 160px;
line-height:18px;
}
.ms-crm-Wsdl-Data
{
width: 200px;
line-height:18px;
}
div.ms-crm-ViewManager
{
text-align:center;
color:#999999;
background-color:#ffffff;
height:186px;
overflow-x:auto;
overflow-y:auto;
}
div.secTitle
{
border-bottom:1px solid #999999;
color:#222244;
}
.ms-crm-Column-SelectWidth
{
margin-top:12px;
border-bottom:1px solid #999999;
}

.ms-crm-FieldLabel-CenterAlign,
table.ms-crm-Share-Header TH
{
text-align: center;
}

TD.ms-crm-Form-LargeIcon
{
text-align: center;
width: 84px;
<% if ( CrmStyles.IsRightToLeft ) { %>
padding-left:10px;
padding-right:8px;
<% } else { %>
padding-left:8px;
padding-right:10px;
<% } %>
}

TD.ms-crm-Form-LargeIcon-default
{
width: 44px;
text-align:center;

}

TD.ms-crm-Form-LargeIcon-default IMG
{
position: relative;
top: 5px;
}

TD.ms-crm-Form-LargeIcon IMG
{
position: relative;
top: 8px;
}





.ms-crm-Form-Breadcrumb
{
line-height:	24px;
vertical-align:	bottom;
}

IMG.ms-crm-Upgraded-Ribbon-Image16
{
width:		16px;
height:		16px;
}

IMG.ms-crm-Upgraded-Ribbon-Image32
{
padding:	8px;
width:		16px;
height:		16px;
}

img.bidi
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

h4.ms-crm-Form
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
font-weight: <% = WebUtility.GetFontResourceForStyle("global.css.aspx.headertag.font_weight") %>;

margin-top : 0px;
margin-bottom : 0px;
}

h3.ms-crm-Form
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
margin-top : 0px;
margin-bottom : 0px;
}

h2.ms-crm-Form
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight") %>;
margin-top : 0px;
margin-bottom : 0px;
}

h1.ms-crm-Form,
h1.ms-crm-Form-Print
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
color : #000000;

margin-top : 0px;
margin-bottom : 0px;
}

h1.ms-crm-FormMenuBarHeader
{
font-size :  <% = WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
margin-top : 0px;
margin-bottom : 0px;
}

.ms-crm-FormMenuBarBreadcrumb
{
font-size :     <% = WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
line-height:	24px;
vertical-align:	bottom;
}

div.downloadfailure_div_position,
div.uploadfailure_div_main
{
color: #ffffff;
position:relative;
top:-303;
z-index:100;
<% if (CrmStyles.IsRightToLeft) { %>
right:-150px;
<% } else { %>
left:-150px;
<% } %>
}
div.opp_dlg_reopen_div_status
{
<% if (CrmStyles.IsRightToLeft) { %>
position:absolute;
top:80px;
right:12px;
display:none;
width:370px;
height:20px;
border:1px solid #000000;
<% } else { %>
position:absolute;
top:80px;
left:12px;
display:none;
width:370px;
height:20px;
border:1px solid #000000;
<% } %>
}
div.opp_dlg_reopen_div_fill
{
<% if (CrmStyles.IsRightToLeft) { %>
display:none;
width:0px;
position:absolute;
top:80px;
right:11px;
height:20px;
background-color:#000099;
<% } else { %>
display:none;
width:0px;
position:absolute;
top:80px;
left:11px;
height:20px;
background-color:#000099;
<% } %>
}

td.errorHandler_td
{
color:#ffffff;
padding-top:9px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:22px;
<% } else { %>
padding-left:22px;
<% } %>
}
.ms-crm-Error-AdditionalInformation
{
vertical-align:middle;
background-color:#889DC2;
color:#ffffff;
}
.ms-crm-Dialog-Title-Reversed,
.ms-crm-Dialog-Description-Reversed
{
color: #ffffff;
}
td.errorHandler_td_middle
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
padding:3px;
padding-left:23px;
<% } else { %>
text-align:right;
padding:3px;
padding-right:23px;
<% } %>
}
td.unsupported_td,
td.unsupportedSecurity_td,
td.unsupportedXmlDom_td
{
color: #000000;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
<% } else { %>
padding-left:10px;
<% } %>
}
td.dlg_camailmerge_td_SupplyDesc
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-top: 10px;
padding-right:2px;
<% } else { %>
padding-top: 10px;
padding-left:2px;
<% } %>
}
td.dlg_camailmerge_td_Unsubscribe
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-top: 5px;
padding-right:2px;
<% } else { %>
padding-top: 5px;
padding-left:2px;
<% } %>
}
td.dlg_camailmerge_td_MailMergeOwnership
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:15px;
padding-top:25px;
<% } else { %>
padding-right:15px;
padding-top:25px;
<% } %>
}
td.dlg_camailmerge_td_OwnershipDesc
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
padding-right:2px;
padding-top:2px;
<% } else { %>
padding-right: 10px;
padding-left:2px;
padding-top:2px;
<% } %>
}
td.dlg_merge_td_SelectData
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% } else { %>
padding-left:5px;
<% } %>
background-color:Menu;
font-family:MenuText;
}
span.dlg_setstate_asyncoperation_span
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:6px;
<% } else { %>
padding-right:6px;
<% } %>
}

td.workflowTemplatePage_td_selectPrimeEntity,
td.workflowTemplatePage_td_processName,
td.workflowTemplatePage_td_selectCategory,
td.workflowTemplatePage_td_selectUniqueName
{
padding: 6px 0px;
}

td.workflowTemplatePage_td_selectUniqueName
{
position: relative;
}

td.workflowTemplatePage_td_selectUniqueName span.manageAttribute_div_SchemaName
{
position: absolute;
background-color: lightgrey;
color: grey;
height: 17px;
top: 7px;
left: 1px;
}

td.workflowTemplatePage_td_selectUniqueName input
{
width:auto;
}

td.workflowTemplatePage_td_processName input
{
padding-left: 1px;
}

table.stdTable-workflowTemplate
{
max-height: 50px;
}

table.tbfUniqueNameTable
{
margin-top: 40px;
}

div.workflowTemplatePage_wfType
{
width: 82px;
padding: 4px 10px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
<% if (Request.Browser.Browser != "Firefox") { %>
word-break: break-all;
<% } %>
}

div.workflowTemplatePage_selectMode.hide,
div.workflowTemplatePage_templateGrid.hide,
div.workflowTemplatePage_tbx.hide
{
display: none;
}

div.workflowTemplatePage_selectMode.show,
div.workflowTemplatePage_templateGrid.show,
div.workflowTemplatePage_tbx.show
{
display: block;
}

tr.taskBasedFlow_tbx.hide
{
display: none;
}

tr.taskBasedFlow_tbx.show
{
display: table-row;
}

div.workflowTemplatePage_selectMode
{
height: 25px;
padding-top: 5px;
padding-left: 6px;
padding-right: 6px;
}

div.workflowTemplatePage_wfType_selector
{
padding: 0px 0px 0px 17px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>

}

div.workflowTemplatePage_BpfType,
div.workflowTemplatePage_TypeContainer
{
position: absolute;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 96px;
<% } else { %>
margin-left: 96px;
<% } %>
}

div.workflowTemplatePage_TypeGroup
{
clear: both;
padding: 0px 0px 0px 0px;
}

div.workflowTemplatePage_TypeGroupIE
{
clear: both;
padding: 3px 0px 0px 0px;
}

div.workflowTemplatePage_TypeGroupFF
{
clear: both;
padding: 0px 0px 0px 0px;
}

label.workflowTemplatePage_TypeGroup-Label
{
width: 500px;
display: block;
}

td.workflowTemplatePage_td_radLbl,
th.dlg_share_th_CMD
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:3px;
<% } else { %>
padding-left:3px;
<% } %>
}
tr.navbarpage_tr
{
<% if (CrmStyles.IsRightToLeft) { %>
height:23px;
padding-right:6px;
color:#3366CC;
text-decoration:none;
<% } else { %>
height:23px;
padding-left:6px;
color:#3366CC;
text-decoration:none;
<% } %>
}
tr.ms-crm-Nav-Area-Customize
{
cursor:pointer;
height:23px;
color:#3366CC;
text-decoration:none;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% } else { %>
padding-left: 6px;
<% } %>
}
.ms-crm-Nav-Area-Customize-Item
{
border-top:1px solid #C6CEDC;
}
td.dlg_select_assignee_td_List,
td.dlg_template_target_td_List,
td.ImportFieldMap_td_FindMapDesc
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 16px;
<% } else { %>
padding-left: 16px;
<% } %>
}
td.AdvFind_td_FindBody
{
padding-bottom:10px;
height:100%;
width:100%;
}

div.dlg_query_build_div_AdvFind
{
left:0px;
right:0px;
padding-left:1%;
padding-right:1%;
position:absolute;
bottom:0px;
}
td.Action_td_AppCondition,
td.Condition_td_AppCondition,
td.DuplicateRuleCondition_td_AppCondition
{
height:100%;
padding-bottom:10px;
padding-left:10px;
padding-right:10px;
}
div.EditFilter_div_main
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
padding-left:15px;
padding-bottom:15px;
padding-top:15px;
<% } else { %>
padding-left:15px;
padding-right:15px;
padding-bottom:15px;
padding-top:15px;
<% } %>
}
div.viewer_td_FilterEditor
{
padding-right:1.5%;
padding-left:1.5%;
width:97%;
bottom:30px;
}
tr.ViewDuplicates_tr_OlkGoOnline,
tr.ViewDuplicates_tr_SelActViewDups,
div.viewer_td_Warnings
{
padding-left:10px;
padding-right:10px;
}

td.edit_article_td_KBEdit
{
<% if (CrmStyles.IsRightToLeft) { %>
border-bottom: 1px solid gray;
border-right: 1px solid gray;
<% } else { %>
border-bottom: 1px solid gray;
border-left: 1px solid gray;
<% } %>
}
div.comments_XMLRender
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right: solid 1px black;
<% } else { %>
border-left: solid 1px black;
<% } %>
height:100%;
overflow:auto;
}

div.comments_XMLRender div
{
padding: 5px;
}

td.bar_Find_td_RunBtn
{
padding-top: 1px;
}
div.home_debug_div_AdminPriv
{
<% if (CrmStyles.IsRightToLeft) { %>
height:100%;
overflow-y:scroll;
padding-left:10px;
<% } else { %>
height:100%;
overflow-y:scroll;
padding-right:10px;
<% } %>
}
col.home_debug_col_2,
col.home_debug_col_Header,
col.home_debug_col_SectionHeader
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:12px;
<% } else { %>
padding-left:12px;
<% } %>
}
DIV.dlg_query_build_div_fixPosition
{
position:absolute;
width:98%;
}
DIV.dlg_query_build_div_Container
{
margin-left:1%;
margin-right:1%;
}

DIV.dlg_query_build_div_Member
{
padding-left:1%;
padding-right:1%;
padding-bottom:0.5%;
}
DIV.dlg_query_build_div_ManageMember
{
padding-bottom:0.7%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:3%;
padding-left:1%;
<% } else { %>
padding-left:3%;
padding-right:1%;
<% } %>
}

span.manageAttribute_div_SchemaName + input
{
padding-left:28px;
width: auto;
}

span.dlg_query_build_span,
span.dlg_query_build_span_QuickFindSpacer
{
height:30px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right:1px solid #cccccc;
margin-right:8px;
<% } else { %>
border-left:1px solid #cccccc;
margin-left:8px;
<% } %>
width:8px;
}
td.MiniCampaign_td_MCName
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 50px;
padding-top: 5px;
padding-bottom: 10px;
padding-left: 10px;
<% } else { %>
padding-left: 50px;
padding-top: 5px;
padding-bottom: 10px;
padding-right: 10px;
<% } %>
}
tr.MiniCampaign_tr_ChooseTemplate,
tr.MiniCampaign_tr_Unsubscribe
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
<% } else { %>
padding-left:10px;
<% } %>
padding-top:15px;
}
tr.MiniCampaign_tr_SummaryTop
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
padding-left:15px;
padding-bottom:5px;
padding-top:15px;
<% } else { %>
padding-left:10px;
padding-right:15px;
padding-bottom:5px;
padding-top:15px;
<% } %>
}
td.MiniCampaign_td_MCName
{
padding: 0px 15px;
overflow: hidden;
text-overflow: ellipsis;
}
td.MiniCampaign_td_MCOwner,
td.MiniCampaign_td_MCScope,
td.MiniCampaign_td_MCType
{
padding: 0px 15px;
}
td.dlg_close_td_CloseOpp
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:40px;
<% } else { %>
padding-left:40px;
<% } %>
}
LABEL.ms-crm-MiniCampaign-LabelAbove
{
height: 18px;
}
td.SchedulingDialog_td_SearchTimeSep
{
padding: 0px 3px;
}
div.ResourcespecsEdit_TaskBox
{
<% if (CrmStyles.IsRightToLeft) { %>
left: auto;
right: 0;
<% } else { %>
left: 0;
<% } %>
width: 200px;
margin: 5px;
}
div.ResourcespecsEdit_TreeCell
{
<% if (CrmStyles.IsRightToLeft) { %>
right: 205px;
<% } else { %>
left: 205px;
<% } %>
border: 1px solid #6489D4;
margin: 5px;
overflow: auto;
}
ImportFieldMap_rd_ListLookup,
td.ImportFieldMap_td_Partner
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
padding-left:15px;
<% } else { %>
padding-left:5px;
padding-right:15px;
<% } %>
}
table.ImportFieldMap_table_PicklistDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
TABLE-LAYOUT:fixed;
WIDTH:100%;
height:95%;
padding-right:14px;
<% } else { %>
TABLE-LAYOUT:fixed;
WIDTH:100%;
height:95%;
padding-left:14px;
<% } %>
}
table.ImportFileChoose_table_Upload
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
TABLE-LAYOUT:fixed;
WIDTH:100%;
padding-right:5px;
<% } else { %>
text-align:left;
TABLE-LAYOUT:fixed;
WIDTH:100%;
padding-left:5px;
<% } %>
}
td.home_asyncoperation_td_TeamSelectLabel
{
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
padding-left: 5px;
<% } else { %>
text-align: right;
padding-right: 5px;
<% } %>
}

td.home_asyncoperation_td_EntitySelectorLabel
{
overflow:hidden;
white-space:nowrap;
text-overflow:ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
padding-right:5px;
padding-left:3px;
<% } else { %>
text-align:right;
padding-left:5px;
padding-right:3px;
<% } %>
}
span.home_territory_span_Spacer
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:6px;
width:1px;
height:30px;
<% } else { %>
margin-left:6px;
width:1px;
height:30px;
<% } %>
}
td.home_rules_td_EntityTypeSelector,
td.home_rules_td_FindCriteria
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:3px;
<% } else { %>
padding-right:3px;
<% } %>
}
td.home_rules_td_EntityTypeLabel,
td.home_rules_td_ViewSelectorLabel
{
white-space:nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
padding-left:3px;
<% } else { %>
text-align:right;
padding-right:3px;
<% } %>
}
td.home_rules_td_EntityTypeLabelCode_Blank
{
white-space:nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:0px;
<% } else { %>
padding-right:0px;
<% } %>
}
td.SystemWideDuplicateDetection_td_JobName
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
padding-top: 5px;
padding-bottom: 10px;
<% } else { %>
padding-left: 20px;
padding-top: 5px;
padding-bottom: 10px;
<% } %>
}
td.SystemWideDuplicateDetection_td_BtnHelp
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
padding-left:15px;
padding-right:15px;
<% } else { %>
text-align:left;
padding-right:15px;
padding-left:15px;
<% } %>
}
.ViewDuplicates_tr_MyRecRsrcStr
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:15px;
<% } else { %>
padding-left:15px;
<% } %>
}
.ViewDuplicates_td_MyRecRsrcStr
{
padding-left:2%;
padding-right:2%;
}
td.ViewDuplicates_td_NotDupSrcSysWide
{
padding-right:15px;
padding-left:15px;
}
td.ViewDuplicates_td_BtnHelp
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
padding-left:15px;
padding-right:10px;
<% } else { %>
text-align:left;
padding-right:15px;
padding-left:10px;
<% } %>
}
tr.ViewDuplicates_tr_CreateInOnline,
tr.ViewDuplicates_tr_ManualMerge
{
padding-left:20px;
padding-right:20px;
}
tr.ViewDuplicates_tr_LinkToExist,
tr.ViewDuplicates_tr_AutoMerge
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:20px;
padding-left:60px;
<% } else { %>
padding-left:20px;
padding-right:60px;
<% } %>
}
div.addfields_div_FieldList
{
<% if (CrmStyles.IsRightToLeft) { %>
background-color: #ffffff;
height: 150px;
border-right: 1px solid #cccccc;
overflow-y: scroll;
overflow-x: hidden;
<% } else { %>
background-color: #ffffff;
height: 150px;
border-left: 1px solid #cccccc;
overflow-y: scroll;
overflow-x: hidden;
<% } %>
}
table.attrMap_table_header
{
margin-top:10px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:5px
<% } else { %>
margin-left:5px
<% } %>
}
table.attrMap_table_header2
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:0px
<% } else { %>
margin-left:0px
<% } %>
}
td.attrMap_td_btnMap {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:30px;
<% } else { %>
margin-left:30px;
<% } %>
}
td.attrMap_td_LegendText {
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:10px;
<% } else { %>
margin-right:10px;
<% } %>
}
label.attrMap_label_LegendLabel {
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}

div.Tools_formeditor_td_Editor
{
background-color:#e9edf1;
position:absolute;
top:64px;
bottom:7px;
width:100%;
}
td.Tools_formeditor_td_TaskBox
{
padding-top:0px;
padding-bottom:10px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:10px;
padding-right:0px;
<% } else { %>
padding-left:0px;
padding-right:10px;
<% } %>
}
div.ImportWizard_div_ErrorCode
{
padding:15px;
}
td.kbtemplateeditor_td_AreaForm
{
padding:20px !important;
vertical-align:top;
padding-right:20px;
}
div.OfflineFilter_td_tab0
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:10px;
padding-left:10px;
height:100%;
<% } else { %>
padding-left:10px;
padding-right:10px;
height:100%;
<% } %>
}
productManager_body,
td.SubjectEditor_td_SubTitle
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:13px;
padding-left:15px;
<% } else { %>
padding-left:13px;
padding-right:15px;
<% } %>
}
td.SubjectEditor_td_Container
{
<% if (CrmStyles.IsRightToLeft) { %>
padding:10px;
padding-top:0px;
padding-right:14px;
padding-bottom:20px;
<% } else { %>
padding:10px;
padding-top:0px;
padding-left:14px;
padding-bottom:20px;
<% } %>
}
div.manageAttribute_div_Info
{
display:inline;
}

div.AddColumns_div_FieldList
{
overflow:auto;
position:absolute;
top:22px;
bottom:13px;
left:0px;
right:0px;
<% if (CrmStyles.IsRightToLeft) { %>
background-color: #ffffff;
border-left: 1px solid #cccccc;
border-right: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
<% } else { %>
background-color: #ffffff;
border-right: 1px solid #cccccc;
border-left: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
<% } %>
}
td.viewmanager_td_Editor
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:20px;
vertical-align:top;
padding-left:10px;
<% } else { %>
padding-left:20px;
vertical-align:top;
padding-right:10px;
<% } %>
padding-bottom:20px;
padding-top:0px;
}
td.viewmanager_td_SysView
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:20px;
vertical-align:top;
padding-right:10px;
<% } else { %>
padding-right:20px;
vertical-align:top;
padding-left:10px;
<% } %>
padding-bottom:20px;
padding-top:0px;
}
table.home_activities_table_TypeSel
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
padding-top:7px;
text-align:right;
<% } else { %>
padding-left:5px;
padding-top:7px;
text-align:left;
<% } %>
}
td.home_activities_td_QuickFind
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:11px;
<% } else { %>
padding-right:11px;
<% } %>
}
td.home_activities_td_DateSel
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
padding-left:10px;
<% } else { %>
text-align:right;
padding-right:10px;
<% } %>
}

DIV.ms-crm-Home-Cal-Header
{
padding: 3px 10px;
}
DIV.ms-crm-Home-Cal-Refresh
{
padding: 3px 10px;
}
DIV.ms-crm-Home-Cal-Body
{
border-width:1px;
border-style: solid;
}
DIV.ms-crm-Home-Cal-View
{
<% if (CrmStyles.IsRightToLeft) { %>
padding:10px;
padding-left:0px;
<% } else { %>
padding:10px;
padding-right:0px;
<% } %>
}
div.ms-crm-Home-Cal-MiniCal
{
background-color:#d6e8ff;
}
UL.ms-crm-Home-Cal-Views-Items LI:hover,
UL.ms-crm-Home-Cal-CreateNew-Items LI:hover
{
padding: 0px;
height: 16px
background-repeat: repeat-x;
border-width: 1px;
border-style: solid;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
SPAN.ms-crm-AlignTo16Image
{
height: 16px;
padding: 1px 6px;
vertical-align: top;
}
div.ms-crm-Home-Cal-CreateNew-Title
{
display:none;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
UL.ms-crm-Home-Cal-CreateNew-Items
{
border-top-width: 1px;
border-top-style: solid;
}
tr.ms-crm-Home-Cal-Action-Hovered
{
background-color: #466094;
color: #ffffff;
}
div.ms-crm-Home-Cal-Views-Title
{
border-bottom-width: 1px;
border-bottom-style: solid;
margin-bottom:6px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
UL.ms-crm-Home-Cal-Views-Items
{
color:#000000;
}
table.form_properties_table_content,
table.form_properties_table_Security
{
margin-top:4px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:2%;
<% } else { %>
margin-left:2%;
<% } %>
table-layout:fixed;
width:98%;
}

span.SchedulingDialog_span_DatesForDaysArea
{
<% if (CrmStyles.IsRightToLeft) { %>
display:none;
margin-right:7px;
<% } else { %>
display:none;
margin-left:7px;
<% } %>
}
GanttControlFrame_label
{
color:#000000;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% } else { %>
margin-left:10px;
<% } %>
}
.ms-crm-Gantt-Progress-Label
{
vertical-align:top;
color:#666666;
}
home_apptbook_label_View
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:5px;
width:40px;
color:#000000;
<% } else { %>
margin-left:5px;
width:40px;
color:#000000;
<% } %>
}
table.AdvancedProperties_table,
table.AdvancedProperties_table_Title
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% } else { %>
margin-left:10px;
<% } %>
margin-top:10px;
}
td.downloadfailure_td_message,
td.uploadfailure_td_message
{
padding-top:20px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
<% } else { %>
text-align:left;
<% } %>
}
td.report_viewer_td_buttons,
div.report_viewer_td_buttons
{
padding-left = 5px ;
padding-right = 5px ;
<% if (CrmStyles.IsRightToLeft) { %>
left:5px;
bottom:5px;
height:25px;
text-align:left;
<% } else { %>
right:5px;
bottom:5px;
height:25px;
text-align:right;
<% } %>
}
div.dlg_lookupaddress_div_Buttons,
td.dlg_mailmerge_td_Buttons
{
border-top:1px solid #ffffff;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
}
div.dlg_lookupaddress_div_Buttons
{
position:absolute;
bottom:0px;
width:98%;
padding-bottom:10px;
padding-top:11px;
margin-left:1%;
margin-right:1%;
}
div.errorHandler_div_info
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
padding:7px;
height:82px;
overflow:auto;
<% } else { %>
text-align:left;
padding:7px;
height:82px;
overflow:auto;
<% } %>
}
img.lookupsubject_img_role
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 3px;
<% } else { %>
margin-right: 3px;
<% } %>
}
td.dlg_merge_td_Title
{
vertical-align: middle;
background-color: ThreeDLightShadow;
}
td.ms-crm-Nav-Groups
{
<% if (CrmStyles.IsRightToLeft) { %>
border-left:1px solid #6893cf;
<% } else { %>
border-right:1px solid #6893cf;
<% } %>
}
td.ms-crm-Nav-Areas
{
border-right:1px solid #6693cf;
border-top:1px solid #6693cf;
border-left:1px solid #6693cf;
}
div.KBSearch_div_ArticleFind
{
width:194px;
padding:5px;
padding-top:0px;
border-top:1px solid #C5C1B1;
border-bottom:1px solid #C5C1B1;
border-right:1px solid #C5C1B1;
border-left:1px solid #C5C1B1;
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>
}
div.KBSearch_div_BtnViewArticle
{
position:absolute;
bottom:0px;
width:100%;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
padding-top:5px;
<% } else { %>
text-align:right;
padding-top:5px;
<% } %>
}
div.ms-crm-Grouping-Box
{
padding: 9px;
height: 100%;
border: 1px solid #bbd4f6;
background-color: #d6e8ff;
}
td.ms-crm-Articles-LeftPane
{
background-color: #d6e8ff;
background-image: url(/_imgs/formnav_header_back.gif);
background-repeat: repeat-x;
padding:8px;
border-top:1px solid #6699cc;
border-bottom:1px solid #6699cc;
<% if (CrmStyles.IsRightToLeft) { %>
border-right:1px solid #6699cc;
<% } else { %>
border-left:1px solid #6699cc;
<% } %>
}

div.home_managekb_div
{
<% if (CrmStyles.IsRightToLeft) { %>
height:97%;
width:8px;
border-right:1px solid #6489D4;
border-bottom:1px solid #6489D4;
background-color:#EEF0F6;
<% } else { %>
height:97%;
width:8px;
border-left:1px solid #6489D4;
border-bottom:1px solid #6489D4;
background-color:#EEF0F6;
<% } %>
}
td.home_managekb_td_Spacer
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right:1px solid #6489D4;
<% } else { %>
border-left:1px solid #6489D4;
<% } %>
}
td.ImportFileChoose_td_Spacer1
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right:#cbcbcb 1px solid;
border-top:#cbcbcb 1px solid;
<% } else { %>
border-left:#cbcbcb 1px solid;
border-top:#cbcbcb 1px solid;
<% } %>
}
td.ImportFileChoose_td_Spacer2
{
<% if (CrmStyles.IsRightToLeft) { %>
border-top:#cbcbcb 1px solid;
border-left:#cbcbcb 1px solid;
<% } else { %>
border-top:#cbcbcb 1px solid;
border-right:#cbcbcb 1px solid;
<% } %>
}
div.UnmappedColumnDlg_div_FlieldList
{
<% if (CrmStyles.IsRightToLeft) { %>
background-color: #ffffff;
height:150;
border-left: 1px solid #cccccc;
border-right: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
overflow-y: scroll;
overflow-x: visible;
<% } else { %>
background-color: #ffffff;
height:150;
border-right: 1px solid #cccccc;
border-left: 1px solid #cccccc;
border-bottom: 1px solid #cccccc;
overflow-y: scroll;
overflow-x: visible;
<% } %>
}
div.manageAttribute_div_SchemaName
{
border:1px solid #6699cc;
border-right:none;
height:19px;
padding-top:1px;
<% if (CrmStyles.IsRightToLeft) { %>
dir:ltr;
<% } %>
}
div.alternateKey_div_NamePrefix
{
border:1px solid #6699cc;
border-right:none;
height:19px;
padding-top:1px;
<% if (CrmStyles.IsRightToLeft) { %>
dir:ltr;
<% } %>
}
td.home_workplace_td_Container
{
<% if (CrmStyles.IsRightToLeft) { %>
height: 22px;
border-right: 1px solid #DCD9C8;
<% } else { %>
height: 22px;
border-left: 1px solid #DCD9C8;
<% } %>
}
td.AppAttachment_Render_td
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:6px;
border-bottom:1px solid #B6B6B6;
<% } else { %>
padding-left:6px;
border-bottom:1px solid #B6B6B6;
<% } %>
}
div.AppAttachment_Render_td2
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:7px;
padding-left:9px;
<% } else { %>
padding-left:7px;
padding-right:9px;
<% } %>
}
td.AppAttachment_Render_td2
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:7px;
padding-left:9px;
border-top:1px solid #ffffff;
<% } else { %>
padding-left:7px;
padding-right:9px;
border-top:1px solid #ffffff;
<% } %>
}
td.AppHtmlAppAttachment_Render_td3
{
<% if (CrmStyles.IsRightToLeft) { %>
border:1px solid #6699cc;
background-color:#ffffff;
padding-right:4px;
<% } else { %>
border:1px solid #6699cc;
background-color:#ffffff;
padding-left:4px;
<% } %>
}

TABLE#AppGridFilterContainer
{
border-top-width: 0px;
height: 24px;
}

col.ms-crm-List-NonDataColumn,
col.ms-crm-List-PreviewGlyphColumn,
col.ms-crm-List-CheckBoxColumn,
col.ms-crm-List-RowIconColumn
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:0px;
<% } else { %>
padding-left:0px;
<% } %>
}

td.LookupList_RenderSearchHeader_td
{
<% if (CrmStyles.IsRightToLeft) { %>
width:100%;
text-align:right;
<% } else { %>
width:100%;
text-align:left;
<% } %>
}
button.LookupList_RenderSearchHeader_button
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:4px;
width:100%;
<% } else { %>
margin-left:4px;
width:100%;
<% } %>
}
table.LookupList_RenderSearchHeader_table
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:4px;
padding-left:4px;
padding-top:4px;
<% } else { %>
padding-left:4px;
padding-right:4px;
padding-top:4px;
<% } %>
}
td.HtmlBar_AddSpacer_td
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:4px;
width:10px;
<% } else { %>
padding-left:4px;
width:10px;
<% } %>
}
div.HtmlBar_AddSpacer_div
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right:1px solid #C5C2B8;
<% } else { %>
border-left:1px solid #C5C2B8;
<% } %>
}
div.TaskBox_Render_td
{
<% if (CrmStyles.IsRightToLeft) { %>
width:22px;
padding-right:4px;
border-left:0px;
<% } else { %>
width:22px;
padding-left:4px;
border-right:0px;
<% } %>
}
col.TaskBox_Render_col
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:1px;
<% } else { %>
padding-left:1px;
<% } %>
}
col.EntityPrintPage_AddContractsCalendar_col
{
<% if (CrmStyles.IsRightToLeft) { %>
PADDING-RIGHT: 20px;
<% } else { %>
PADDING-LEFT: 20px;
<% } %>
}
td.KBTemplateEditorPage_ConfigureMenus_td
{
<% if (CrmStyles.IsRightToLeft) { %>
padding:20px !important;
padding-right:0px !important;
<% } else { %>
padding:20px !important;
padding-left:0px !important;
<% } %>
}
td.AppArticleFind_Render_td
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-top:15px;
text-align:left;
<% } else { %>
padding-top:15px;
text-align:right;
<% } %>
}
input.MergeFormSectionRow_Render_input,
input.MergeFormSectionRow_Render_input2
{
border:none;
height:100%;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:-5px;
<% } else { %>
margin-left:-5px;
<% } %>
width:100%;
}
span.ms-crm-Unblock-Content-Link
{
cursor:pointer;
color:#0000ff;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:5px;
<% } else { %>
margin-left:5px;
<% } %>
}
tr.AppCondition_RenderControlHTML_tr
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:right;
background-color:#dddddd;
<% } else { %>
text-align:left;
background-color:#dddddd;
<% } %>
}
span.ms-crm-Filter-Label
{
color:#000000;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:6px;
<% } else { %>
padding-right:6px;
<% } %>
}
td.CommandBarPopup_RenderForCrmMenu_td
{
<% if (CrmStyles.IsRightToLeft) { %>
border:1px solid #ffffff;
border-left:0px;
<% } else { %>
border:1px solid #ffffff;
border-right:0px;
<% } %>
}
table.dlg_camailmerge_table_Main,
td.AppHtmlBarControl_RenderKbTemplateEditorControls_td,
td.BarControl_RenderKbTemplateEditorControls_td
{
padding-left:5px;
padding-right:5px;
}
col.select_htc_col
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
cursor:default;
<% } else { %>
padding-left:5px;
cursor:default;
<% } %>
}
th.ViewForm_AddFields_th_gridheader,
td.UnmappedColumnDlg_td_gridheader,
td.viewManager_js_td
{
cursor:pointer;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:8px;
<% } else { %>
padding-left:8px;
<% } %>
}

div.ms-crm-ColumnEditor-Header
{
border-bottom: 1px solid #999999;
height:21px;
background-color:#f0f0f0;
}
DIV.ms-crm-ColumnEditor-Footer
{
border-top: 1px solid #999999;
height:21px;
background-color:#f0f0f0;
}
img.select_htc_img_selectOff
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
cursor:pointer;
}

div.workflowTemplatePageSpacer
{
width: 97%;
position: absolute;
top: 187px;
margin: 0px auto;
display: inline-block;
left: 10px;
}

div.workflowTemplatePageSpacer.showMode
{
top: 212px;
}

div.workflowTemplatePageSpacer.tbxMode
{
display: none;
}

div.workflowTemplatePage_button
{
position: absolute;
left: 0px;
right: 0px;
bottom: 0px;
line-height: 40px;
}

div.workflowTemplatePage_button.bottombutton
{
height: 40px;
vertical-align:middle;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 23px;
text-align: left;
<% } else { %>
padding-right: 23px;
text-align: right;
<% } %>
}

div.workflowTemplatePageSpacer.border,
div.workflowTemplatePageSpacer.showMode.border,
div.workflowTemplatePage_button.bottombutton.border
{
border-top-color: #a4abb2;
border-top-style: solid;
border-top-width: 1px;
}

div.workflowTemplatePage_button.grid_properties
{
height: 32px;
}

div.workflowTemplatePage_header
{
position: absolute;
left: 0px;
right: 0px;
top: 0px;
height: 62px;

}
tr.workflowTemplatePage_tr_param
{
height: 22px

}
div.workflowTemplatePage_top
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right: 3px;
left:  13px;
<% } else { %>
right: 13px;
left:  3px;
<% } %>
top: 75px;
height: 100px;
padding-bottom: 5px;
}
tr.workflowTemplatePage_tr_type
{
height: 57px;
}
tr.workflowTemplatePage_tr_option,
tr.workflowTemplatePage_tr_tmpl
{
vertical-align:bottom;
height: 19px;
}

td.workflowTemplatePage_td_param
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px
text-align: right;
<% } else { %>
padding-left: 8px
text-align: left;
<% } %>
}
td.workflowTemplatePage_td_selectWFEntity
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px
text-align: right;
padding-left: 16px;
<% } else { %>
padding-left: 10px
text-align: left;
padding-left: 16px;
<% } %>
}

td.workflowTemplatePage_td_primaryEntity
{
text-align: center;
}

div.workflowTemplatePage_templateGrid
{
position: absolute;
bottom: 58px;
top: 195px;
right: 9px;
left: 9px;
border: 0px solid #333333;
min-height: 100px;
padding-bottom:20px;
}

div.workflowTemplatePage_templateGrid.showMode
{
top: 220px;
}

DIV.ms-crm-WorkflowTemplate-Header-Title
{
padding-right:	8px;
padding-left:	8px;
}
DIV.ms-crm-WorkflowTemplate-Header-Desc
{
padding-top:	4px;
padding-right: 8px;
padding-left: 8px;
}
DIV.ms-crm-ReportProperty-TypeSection
{
display: none;
line-height: 2.5em;
}

body.ms-crm-Dialog-Body,
body.ms-crm-ErrorDialog
{
<% if (CrmStyles.IsRightToLeft){ %>
dir:rtl;
<%} %>
}

body.ms-crm-ErrorDialog2
{
<% if (CrmStyles.IsRightToLeft){ %>
dir:rtl;
<%} %>
background-color: #ffffff;
}
div.formproperties_div
{
height: 20px;
background-color: #efefeb;
border: 1px solid #9fa090;
padding-top: 2px;
padding-bottom: 2px;
<% 	if (CrmStyles.IsRightToLeft) {%>
text-align: right;
padding-right: 6px;
<% } else {%>
text-align: left;
padding-left: 6px;
<% } %>
}
.ms-crm-Grid-Title-Print
{
color: #ffffff;
background-color: #63769B;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
height:100%;
}
TABLE.ms-crm-MastHead
{
width: 100%;
height: 100%;
background-image: url(/_imgs/mast_back.gif);
background-repeat: repeat-x;
background-color: #39497A;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: top right;
<% } else { %>
background-position: top left;
<% } %>
}
TD.ms-crm-MastHead-Logo
{
height: 58px;
background-repeat: no-repeat;
padding: 0px 15px;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: top right;
background-image: url(/_imgs/masthead_rtl.jpg);
<% } else { %>
background-position: top left;
background-image: url(/_imgs/masthead.jpg);
<% } %>
}
TD.ms-crm-MastHead-Logo-Live
{
height: 58px;
background-repeat: no-repeat;
padding: 0px 15px;
<% if (CrmStyles.IsRightToLeft) { %>
background-position: top right;
background-image: url(/_imgs/masthead_live_rtl.jpg);
<% } else { %>
background-position: top left;
background-image: url(/_imgs/masthead_live.jpg);
<% } %>
}
TD.ms-crm-MastHead-SignIn
{
color: #d6e8ff;
vertical-align: top;
padding: 5px 4px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align:left;
<% } else { %>
text-align:right;
<% } %>
}
.ms-crm-MastHead-SignIn-User,
SPAN.ms-crm-MastHead-SignIn,
SPAN.ms-crm-MastHead-SignOut
{
display: block;
}

SPAN.ms-crm-MastHead-UserInfo
{
overflow : hidden;
text-overflow : ellipsis;
white-space : nowrap;

width : 187px;
line-height:14px;
}

.ms-crm-MastHead-SignIn-Org
{
display: block;
width: 187px;
}

A.ms-crm-MastHead-SignOut-Link:hover
{
text-decoration : underline ;
cursor: pointer;
}
SPAN.ms-crm-MastHead-Button
{
padding: 2px 0px 0px 0px;
}
A IMG.ms-crm-MastHead-Button
{
border-style: none;
border-width: 0px;
margin: 1px;
}
A IMG.ms-crm-MastHead-Button:hover
{
border-style: solid;
border-width: 1px;
margin: 0px;
}
A IMG.ms-crm-MastHead-Button-Selected
{
border-style: solid;
border-width: 1px;
margin: 0px;
}
A IMG.ms-crm-MastHead-Button-Selected:hover
{
border-style: solid;
border-width: 1px;
margin: 0px;
background-color: #FFED95;
border-color: #C28A30;
}
TABLE.ms-crm-NavHeader
{
border-bottom:1px solid #485674;
<% if (CrmStyles.IsRightToLeft) { %>
border-left:1px solid #6893CF;
<% } else { %>
border-right:1px solid #6893CF;
<% } %>
}
.ms-crm-NavHeader-Title,
.ms-crm-Setting-ContextHeader-Title,
.ms-crm-ContextHeader-Title
{
background-repeat: repeat-x;
vertical-align: middle;
color:          #15428b;
overflow:       hidden;
text-overflow:  ellipsis;
padding:		0px 10px;
}

.ms-crm-NavHeader-Title,
.ms-crm-ContextHeader-Title
{
height:         26px;
}

.ms-crm-Setting-ContextHeader-Title
{
height:         33px;
}

.ms-crm-ContextHeader-Title
{
border-bottom-width:1px;
border-bottom-style:  solid;
}

div.ms-crm-Context-cell
{
border-width:0px;
border-style:  solid;
}

body.aboutdefault_body
{
<% if (CrmStyles.IsRightToLeft){ %>
dir:rtl;
<% } %>
margin:				0px;
cursor:				pointer;
background-color:	#FFFFFF;
}
div.aboutdefault_div_warnings
{
height: 150px;
color: #222222;
overflow-y: auto;
scrollbar-highlight-color: #DDDBCD;
scrollbar-shadow-color: #C0BEB1;
scrollbar-track-color: #F3F1E3;
}
td.BizRolesedit_td_r
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid;
cursor: pointer;
text-align: center;
<% } else { %>
border-left: 1px solid;
cursor: pointer;
text-align: center;
<% } %>
}
td.BizRolesedit_td_u,
td.relationshiproleeditor_edit_td_item
{
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid;
<% } else { %>
border-left: 1px solid;
<% } %>
text-align: center;
}
div.Articlesedit_article_div_secEdit
{
margin-right: 8px;
margin-top: 8px;
margin-left: 8px;
}
UL.Articlesedit_article_div_secEdit
{
margin-left:28px;
padding-left:10px;
list-style-type:disc;
}

.RTE_list_style_position
{
list-style-position:inside;
}

.ms-crm-Inline-Value-email-body ul
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:28px;
padding-right:10px;
<% } else { %>
margin-left:28px;
padding-left:10px;
<% } %>
list-style-type:disc;
}

td.ms-crm-StatusBar-Copyright
{
list-style-position:inside;
}

.ms-crm-StatusBar-Copyright
{
background-color:   #365484;
color:              #ffffff;
height:             23px;
cursor:             pointer;
text-decoration:    underline;
padding-right:      5px;
padding-left:       5px;
}

body.Helptoc_body
{
background-color: #e3efff;
<% if (CrmStyles.IsRightToLeft) { %>
border-left: 2px solid #999999;
dir:rtl;
<% } else { %>
border-right: 2px solid #999999;
<% } %>
}

td.help_chapter
{
border-top:1px solid #bbbbbb;

<% if ( CrmStyles.IsRightToLeft ) { %>
border-left:1px solid #bbbbbb;
<% } else { %>
border-right:1px solid #bbbbbb;
<% } %>
}

A.helptoc_link:active
{
color : #3366cc;
}

A.helptoc_link:visited
{
color : #800080;
}

body.home_debug_body
{
<% if (CrmStyles.IsRightToLeft) { %>
padding: 15px;
padding-left:0px;
dir:rtl;
<% } else { %>
padding: 15px;
padding-right:0px;
<% } %>
}
body.homepage_news_body
{
<% if (CrmStyles.IsRightToLeft) { %>
background-color: #ffffff;
margin-left: 0px;
dir:rtl;
<% } else { %>
background-color: #ffffff;
margin-right: 0px;
<% } %>
}
td.camps_edit_td_leftBar
{
<% if (CrmStyles.IsRightToLeft) { %>
width:              190px;
text-align:         left;
vertical-align:     top;
padding-top:        10px;
background-color:   #ffffff;
<% } else { %>
width:              190px;
text-align:         right;
vertical-align:     top;
padding-top:        10px;
background-color:   #ffffff;
<% } %>
}
body.ResourceSchedules_body
{
<% if (CrmStyles.IsRightToLeft){ %>
dir:rtl;
<%} %>
background: -webkit-gradient(linear, left top, right top, from(#D6D5C9), to(#e5e3d5));
background: -moz-linear-gradient(right,  #D6D5C9,  #e5e3d5);
overflow-y: hidden;
}
table.ms-crm-ViewForm-Header
{
background-color:	#f0f0f0;
width:				100%;
height:				22px;
border:				1px solid #dbdac9;
border-bottom:		1px solid #c5c1b1;
table-layout:		fixed;
}
td.ms-crm-ViewForm-Spacer
{
width:				2px;
}
td.ms-crm-SignIn-Banner
{
color:			#6693cf;
height:			82px;
vertical-align:	bottom;
}

table.ms-crm-Share-Header
{
width: 100%;
height: 21px;
background-color: #FFFFFF;
table-layout: fixed;
}

table.ms-crm-Share-Header TH.user-Header
{
<% if ( CrmStyles.IsRightToLeft ) { %>
text-align:right;
padding-right:8px;
<% } else { %>
text-align:left;
padding-left:8px;
<% } %>
}

td.systemsettings_td_trackingpref
{
direction:ltr;
}

td.systemsettings_td_smfilter
{
direction:ltr;
}

DIV.ms-crm-List-PreviewDialog
{
cursor: default;
border: 1px solid #6699CC;
height: 100%;
overflow: hidden;
}

img.ms-crm-form-pic-image
{
height:62px;
width:62px;
border:1px solid gray;
}

a.ms-crm-form-picture-anchor
{
position: relative;
z-index: 100;
}

DIV.ms-crm-Splitter
{
background-repeat: repeat-x;
background-image: url(/_imgs/app_back.png);
background-color : #CFD4DA;
}
DIV.ms-crm-Splitter-Fixed
{
background-repeat: repeat-x;
}

DIV.ms-crm-Splitter,
DIV.ms-crm-Splitter-Fixed
{
width : 3px;
height : 0px;
}
DIV.ms-crm-SplitterMotion,
DIV.ms-crm-SplitterMotion-Fixed
{
z-index : 1000;
width : 3px;
display : none;
}

DIV.ms-crm-Splitter
{
position: absolute;
}

DIV.ms-crm-SplitterMotion
{
position: absolute;
background-image : none;
background-color : #A5ACB5;
}

DIV.ms-crm-Splitter-Fixed
{
position : fixed;
}

DIV.ms-crm-SplitterMotion-Fixed
{
position: fixed;
background-image : none;
background-color : #A5ACB5;
}

IMG.ms-crm-Splitter
{
height : 19px !important;
width : 3px !important;
vertical-align : middle;
cursor : col-resize;
}

TABLE.ms-crm-Splitter
{
cursor : col-resize;
}

tr.ms-crm-Splitter td
{
vertical-align: middle;
padding: 0px;
}

IMG.subGrid_Entity_icon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:4px;
<% } else { %>
margin-left:4px;
<% } %>
}

IMG.associatedGrid_Entity_icon,
IMG.subGrid_Entity_icon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:4px;
<% } else { %>
margin-right:4px;
<% } %>
}


span.ms-crm-Form-NoNav-Title
{
vertical-align:	bottom;
}

span.ms-crm-Form-Entity-Title
{
font-weight: <% = WebUtility.GetFontResourceForStyle("global.css.aspx.headertag.font_weight") %>;
vertical-align: bottom;
}

span.ms-crm-View-Entity-Name
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
height: 24px;
margin-top: 2px;
padding-left: 2px;
padding-right: 2px;
vertical-align: middle;
}

.ms-crm-TextAutoEllipsis,
span.ms-crm-View-Entity-OverflowName
{
overflow: hidden;
text-overflow: ellipsis;
white-space:nowrap;
}

div.ms-crm-TextAutoEllipsis > div > span
{
overflow: hidden;
text-overflow: ellipsis;
white-space:nowrap;
display:block
width:calc(100% - 35px) !important
}

div.ms-crm-grid-viewSelectorContainer-associatedGrid-lite,
div.ms-crm-grid-viewSelectorContainer-subgrid-lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
font-family: 'Segoe UI', Arial, sans-serif;
font-size: 12px;
font-weight: bold;
}

div.ms-crm-grid-viewSelectorContainer-subgrid-lite
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
width: 100%;
}

div.ms-crm-grid-viewSelectorContainer-associatedGrid-lite
{
width: 49%;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

div.ms-crm-grid-quickFindContainer-associatedGrid-lite
{
max-width: 300px;
width: 49%;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-right:1px;
<% } else { %>
float: right;
margin-left:1px;
<% } %>
padding-top: 7px;
}

div.ms-crm-grid-filterContainer-associatedGrid-lite
{
max-width: 500px;
clear:both;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 2px;
right: 0px;
<% } else { %>
padding-left: 2px;
left: 0px;
<% } %>
}

div.ms-crm-grid-quickFindContainer-subGrid-lite,
div.ms-crm-grid-filterContainer-lite
{
display: inline-block;
}

div.ms-crm-grid-quickFindContainer-subGrid-lite
{
width: 100%;
max-width: 300px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float:left;
<% } %>

}

span.ms-crm-Viz-Name,
span.ms-crm-Viz-Name-hover,
span.ms-crm-Viz-Name-select,
span.ms-crm-View-Name,
span.ms-crm-View-Name-hover,
span.ms-crm-View-Name-select
{
cursor:pointer;
height:	20px;
line-height:	20px;
vertical-align:	top;
white-space:nowrap;
width: 90%;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% } else { %>
padding-left: 6px;
<% } %>
color : #00000;

}
span.ms-crm-View-Name,
span.ms-crm-View-Name-hover,
span.ms-crm-View-Name-select
{
font-size : <% = WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
font-family: <% = WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight")%>;
max-width:96%;
vertical-align: middle;
}
a.ms-crm-ViewSelector-anchor-lite
{
position: relative;
}
span.ms-crm-ViewSelector-title-subGrid-lite,
span.ms-crm-ViewSelector-title-associated-lite,
span.ms-crm-View-Name-associated-lite,
div.ms-crm-ViewSelector-title-associated-lite
{
display: block;
height: 100%;
line-height: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 21px;
padding-right: 0px;
<% } else { %>
margin-right: 21px;
padding-left: 0px;
<% } %>
}

span.ms-crm-ViewSelector-title-subGrid-lite
{
line-height: 21px !important;
}

.ms-crm-ImageStrip-pinned_16,
.ms-crm-ImageStrip-pin_16,
.ms-crm-ImageStrip-pin_hover_16,
.ms-crm-ImageStrip-pinned_16_RTL,
.ms-crm-ImageStrip-pin_16_RTL,
.ms-crm-ImageStrip-pin_hover_16_RTL,
.defaultViewIcon
{
vertical-align:top;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:14px;
margin-right:3px;
<% } else { %>
margin-right:14px;
margin-left:3px;
<% } %>
margin-top:8px;
}

span.ms-crm-ViewSelector-title-subGrid-lite
{
font-family: 'Segoe UI', Arial, sans-serif;
font-size: 12px;
font-weight: bold;
color: rgb(68,68,68) !important;
}

span.ms-crm-ViewSelector-title-associated-lite,
span.ms-crm-View-Name-associated-lite,
span.ms-crm-ViewSelector-title-Document
{
font-family: 'Segoe UI', Tahoma, Arial;
font-size: 27px;
font-weight: lighter;
color: #000000 !important;
line-height: 30px;
width: auto;
}

span.ms-crm-ViewSelector-title-Document
{
height: 32px;
}

span.ms-crm-ViewSelector-subGrid-title-associated-lite
{
font-family: 'Segoe UI', Arial, sans-serif;
font-size: 12px;
font-weight: bold;
}

span.ms-crm-ViewSelector-dropdown-icon-subGrid-lite,
span.ms-crm-ViewSelector-dropdown-icon-associated-lite
{
display: block;
position: absolute;
top: 3px;
width: 19px;
<% if (CrmStyles.IsRightToLeft) { %>
left: -3px;
<% } else { %>
right: -3px;
<% } %>
}

a.ms-crm-view-name-disabled
{
cursor:default !important;
}

A.ms-crm-View-Name,
A.ms-crm-View-Name:link,
A.ms-crm-View-Name:visited
{
height: 24px;
border: 1px solid transparent;
display: inline-block;
white-space:nowrap;
max-width:100%;
}

A.ms-crm-View-Name-View-Lite,
A.ms-crm-View-Name-View-Lite:link,
A.ms-crm-View-Name-View-Lite:visited
{
height: 32px;
}

A.ms-crm-View-Name:hover,
A.ms-crm-View-Name-hover:link,
A.ms-crm-View-Name-hover:hover
{
height: 24px;
border-width: 1px;
border-style: solid;
display: inline-block;
white-space:nowrap;
max-width:100%;
}

A.ms-crm-View-Name-View-Lite:hover,
A.ms-crm-View-Name-View-Lite-hover:link,
A.ms-crm-View-Name-View-Lite-hover:hover
{
height: 32px;
}

A.ms-crm-View-Name
{
border: 1px solid transparent;
}

A.ms-crm-View-Name,
A.ms-crm-Viz-Name,
A.ms-crm-Viz-Name-select,
A.ms-crm-Viz-Name-select-hover
{
display: inline-block;
white-space:nowrap;
max-width:100%;
word-wrap: normal;
}

IMG.ms-crm-View-icon
{
margin-top: 0px;
}

IMG.ms-crm-View-icon-associated-lite
{
margin-top: 1px;
}

IMG.ms-crm-View-icon-subGrid-lite
{
margin-top: -5px;
}

SPAN.ms-crm-View-icon
{
display: inline-block;
vertical-align: middle;
}

.ms-crm-DialogFooter
{
position:absolute;

bottom:0px;
width:98%;
min-width:288px;

border-top-width: 1px;
border-top-style: solid;
height: 30px;
padding-top: 10px;
padding-right: 1%;
padding-left: 1%;

<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
}

DIV.ms-crm-DialogChrome
{
position: absolute;
top: 50%;
left: 50%;
box-shadow: 0 0 1em black;
border: 1px solid #D6D6D6;
background-color: white;
}

DIV.ms-crm-InlineDialogCloseContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
<% } else { %>
text-align: right;
<% } %>
position:absolute;
}

DIV.ms-crm-InlineDialogCloseInnerContainer
{
display:inline-block;
padding-left:30px;
padding-right:30px;
padding-top:20px;
padding-bottom:20px;
}

img.ms-crm-InlineDialogCloseImage
{
height:16px;
width:16px;
}

.ms-crm-InlineDialogBackground
{
position: absolute;
width: 100%;
height: 100%;
top: 0px;
background-color: grey;
}

A.ms-crm-View-Name:active,
A.ms-crm-View-Name-hover:active,
A.ms-crm-View-Name-hover:visited,
A.ms-crm-View-Name-select,
A.ms-crm-View-Name-select:link,
A.ms-crm-View-Name-select:visited,
A.ms-crm-View-Name-select:hover,
A.ms-crm-View-Name-select:active
{
height: 24px;
border-width: 1px;
border-style: solid;
display: inline-block;
white-space:nowrap;
max-width:100%;
}

A.ms-crm-View-Name-View-Lite:active,
A.ms-crm-View-Name-View-Lite-hover:active,
A.ms-crm-View-Name-View-Lite-hover:visited,
A.ms-crm-View-Name-View-Lite-select,
A.ms-crm-View-Name-View-Lite-select:link,
A.ms-crm-View-Name-View-Lite-select:visited,
A.ms-crm-View-Name-View-Lite-select:hover,
A.ms-crm-View-Name-View-Lite-select:active
{
height: 32px;
}

a.ms-crm-Phone:hover,
A.default-link:hover
{
text-decoration: underline;
}
fieldset.ms-crm-radio-fieldset
{
border:none;
padding:	0px;
}
legend.ms-crm-radio-fieldset
{
padding:	0px;
position:absolute;
top:-2000px;
}
DIV.ms-crm-db-padding
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right:3px;
<%} else { %>
text-align: left;
padding-left:3px;
<% } %>
}

DIV.mscrm-sharepoint-LoadingDiv
{
background-color: #FFFFFF;
opacity: 0.8;
height: 100%;
width: 100%;
position: absolute;
left: 0px;
top: 0px;
right:0x;
bottom:0px;
}
TABLE.mscrm-sharepoint-LoadingTable
{
height: 100%;
width: 100%;
}
DIV.ms-crm-ReAuth-Background
{
position: absolute;
top: 0px;
left: 0px;
width: 100%;
height: 100%;
overflow: hidden;
cursor: wait;
background-color: #666666;
}
DIV.ms-crm-ReAuth-Dialog
{
position: absolute;
overflow: hidden;
cursor: wait;
background-color: #e9edf1;
margin:0 auto;
border:1px #008BBE solid;
}
TABLE.ms-crm-ReAuth-Table
{
table-layout: fixed;
position: relative;
width: 100%;
height: 100%;
}

TD.ms-crm-ReAuth-Buttons
{
vertical-align:middle;
text-align:center;
}
TD.ms-crm-ReAuth-Message
{
vertical-align: middle;
text-align: left;
}
TD.ms-crm-ReAuth-Image
{
width: 50px;
vertical-align: middle;
text-align: center;
}
img.ms-crm-FlipHorizontal
{
<%= FlipImage("h") %>
}

table.ms-crm-ZeroedCellSpacing
{
border-spacing: 0px;
border-collapse:collapse;
}
table.ms-crm-ZeroedCellPadding > tbody > tr > td
{
padding:0px;
}
.ms-crm-IE7-Height-Fix-Dummy-Container
{
position: absolute;
height: 100%;
top: 0;
left: 0;
width: 100%;
}

div.ms-crm-processing-inactive-overlay
{
z-index: 1004;
height:100%;
width:100%;
top: 0px;
left: 0px;
position:fixed;
background-color: #000000;
opacity: .05;
filter:alpha(opacity=5);
}

div.ms-crm-dialog-processing
{
z-index: 1005;
border: 0px;
background-color: #ffffff;
width: 300px;
height: 147px;
position: absolute;
top: 32%;
left: 36%;
border: 1px solid #D6D6D6;
}

.ms-crm-processing-title
{
margin: 15px 0px;
font-family: Segoe UI;
font-size: 36px;
text-align: center;
}

img.ms-crm-inline-processing
{
padding: 0px 131px;
}

#contentDiv.contentDiv
{
width: 100%;
height: 100%;
}

#contentDiv.contentDiv,
.ms-crm-absolutePosition
{
position:absolute;
left:0px;
right:0px;
top:0px;
bottom:0px;
}


<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>



div.formproperties_div
{
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#e5e3d5, EndColorStr=#D6D5C9);
}

body.ResourceSchedules_body
{
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=1, StartColorStr=#D6D5C9, EndColorStr=#e5e3d5);
}

DIV.mscrm-sharepoint-LoadingDiv
{
filter: alpha(opacity=80);
}

.ms-crm-lightbox
{
filter:alpha(opacity=10);
}

.ms-crm-opacity
{
filter:alpha(opacity=100);
}

.ms-crm-transparence
{
filter:alpha(opacity=0);
}

img.ms-crm-FlipHorizontal
{
<%= FlipImage("h") %>
}

img.select_htc_img_selectOff
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

img.ms-crm-RTL-Flip,
img.addFields_img_barUp,
img.bar_Find_img_find,
img.changeschedule_img_clear,
img.changeschedule_img_exception,
img.changeschedule_img_newpattern,
img.changeschedule_img_wholepattern,
img.dlg_merge_img_boxLeft,
img.errorHandler_img_boxOnLeft,
img.errorHandler_img_BoxRight,
img.home_appbook_img_ico24caltodaymenu,
img.ms-crm-AdHocWizard-PreviewImage,
img.ms-crm-Home-Cal-RefreshPadding,
img.ms-crm-InlineTabExpander,
img.subjectEditor_img_subjWatermark
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}



IMG.ms-crm-Lookup-PresenceItem
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-Lookup
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-Lookup-Party
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-Lookup-TransactionCurrency
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-NextButton
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<%} %>
}


IMG.ms-crm-Nav-Group-RightIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}


.ms-cui-modalDiv-ie{
filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";
}

.ms-cui-glass-ie{
filter:alpha(opacity=0);-ms-filter:"alpha(opacity=0)";
}

.ms-cui-disabled .ms-cui-img-container,.ms-cui-disabled .ms-cui-img-cont-float,.ms-cui-disabled .ms-cui-jewel-left,.ms-cui-disabled .ms-cui-jewel-middle,.ms-cui-disabled .ms-cui-jewel-right{
filter:gray(enabled=true) alpha(opacity=50);
-ms-filter:"gray(enabled=true) alpha(opacity=50)";
}

.ms-cui-tooltip-backFrame{
filter:progid:DXImageTransform.Microsoft.Shadow(color:#d9d9d9,strength:5,direction:135);-ms-filter:"progid:DXImageTransform.Microsoft.Shadow(color:#d9d9d9,strength:5,direction:135)";
}


img.ms-crm-Menu-Button-disabled
{
filter:gray(enabled=true) alpha(opacity=50);
-ms-filter:"gray(enabled=true) alpha(opacity=50)";
}


.ms-crm-List-Preview
{
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#ffffff, EndColorStr=#EAF1FF);
}


.ms-crm-stripChartLabelLeftRight
{
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("hv") %>
<% } %>
}

.ms-crm-stripGridLabelLeftRight
{
<% if (!CrmStyles.IsRightToLeft) { %>
<%= FlipImage("hv") %>
<% } %>
}

LABEL.VD-filter
{
<%= FlipImage("hv") %>
}

LABEL.ms-crm-VisualizationPaneDesigner-topRightLabel
{
<%= FlipImage("hv") %>
}

IMG.ms-crm-VisualizationPaneDesigner-StaticTopImg
{
filter:alpha(opacity=30);
}

IMG.ms-crm-VisualizationPaneDesigner-StaticBottomImg
{
filter:alpha(opacity=30);
}

IMG.ms-crm-DrillDown-back-imageDisabled
{
filter:gray alpha(opacity=50);
}
<% } %>

div.editPage[contentEditable=true] P, td.ms-crm-Email-Body[contentEditable=true] P, div.editor[contentEditable=true] P
{
margin:0px;
}

LI.ms-crm-Menu-CommandBar
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 8px;
<% } else { %>
margin-right: 8px;
<% } %>
margin-top: 6px;
display: inline-block;
white-space: nowrap;
height: 22px;
}

LI.ms-crm-Menu-CommandBar-Inverse
{
display: inline-block;
height: 22px;
position: absolute;
top: 8px;
}

LI.menuSelected
{
background: #d7e8f9;
border-color: #d7e8f9;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton SPAN.ms-crm-Menu-Label
{
background: #FFFFFF;
border-color: #FFFFFF;
}

.menuUnselected:hover
{
background: #d7e8f9;
}

DIV.ui-flyout-dialog-moreCommands SPAN.ms-crm-Menu-Label
{
display: block;
overflow: hidden;
text-overflow: ellipsis;
color: #000000;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 0px;
<% } else { %>
padding-right: 0px;
<% } %>
}

DIV.ui-flyout-dialog-moreCommands a.ms-crm-Menu-Label,
DIV.ui-flyout-dialog-moreCommands a.ms-crm-Menu-Label-Flyout
{
vertical-align: top;
height: auto;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-CustomTab a.ms-crm-Menu-Label,
DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-FlyoutAnchor a.ms-crm-Menu-Label
{
width:84%;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton a.ms-crm-Menu-Label
{
width:81%;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton a.ms-crm-Menu-Label-Flyout
{
padding-left: 4px;
padding-right: 4px;
}

div.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton a.ms-crm-CommandBar-button-selected
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-left: 3px;
padding-right: 3px;
<% } %>
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton span.ms-crm-CommandBar-Menu
{
display: inline-block;
width:69%;
max-width: 69% !important;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-CustomTab span.ms-crm-CommandBar-Menu,
DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-FlyoutAnchor span.ms-crm-CommandBar-Menu
{
display: inline-block;
width:74%;
max-width:74% !important;
}

SPAN.ms-crm-Menu-Label
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 22px;
overflow-y: hidden;
cursor: default;
color: #FFFFFF;
display: inline-block;
}

A.ms-crm-Menu-Label,
A.ms-crm-Menu-Label-Flyout
{
outline-width : 0px;
outline-style : none;
outline-color : invert;
padding-top: 8px;
padding-bottom: 4px;
}

A.ms-crm-Menu-Label-Flyout
{
padding-left : 2px;
padding-right: 2px;
}

li.ms-crm-CommandBar-SplitButton A.ms-crm-Menu-Label,
li.ms-crm-CommandBar-SplitButton A.ms-crm-Menu-Label-Flyout
{
padding-top: 4px;
padding-bottom: 5px;
border: 1px solid transparent;
}
li.ms-crm-CommandBar-SplitButton  span.ms-crm-CommandBar-Button
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 0px;
<% } else { %>
padding-right: 0px;
<% } %>
}
SPAN.ms-crm-Menu-Label-Hovered
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 22px;
overflow-y: hidden;
display: inline-block;
background-color: #D7EBF9;
text-decoration: none;
}

SPAN.ms-crm-Menu-Label-Opened
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 22px;
overflow-y: hidden;
display:inline-block;
background-color: #B1D6F0;
color: #000000;
}

SPAN.ms-crm-MenuItem-TextRTL,
img.ms-crm-Menu-ButtonRTL
{
padding-left: 5px;
padding-right: 4px;
color: #666666;
<% if (Request.Browser.Browser != "IE") { %>
padding-bottom: 3px;
<% } else { %>
padding-bottom: 5px;
<% } %>
outline: none;
}
img.ms-crm-Menu-ButtonLTR,
SPAN.ms-crm-MenuItem-TextLTR
{
padding-left: 4px;
padding-right: 5px;
<% if (Request.Browser.Browser != "IE") { %>
padding-bottom: 3px;
<% } else { %>
padding-bottom: 5px;
<% } %>
}

ul.ms-crm-CommandBar-Menu :not(ul.ms-crm-AssociatedGridCommandBar-Menu)
{
margin-top: 6px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
}

ul.ms-crm-AssociatedGridCommandBar-Menu
{
margin-top: 0px;
margin-left: 0px;
margin-right: 0px;
}

li.ms-crm-CommandBarItem
{
height: 28px;
margin-top: 6px;
margin-left: 5px;
margin-right: 5px;
vertical-align: top;
max-width: 200px;
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBarItem
{
margin-left: 0px;
margin-right: 0px;
margin-top: 0px;
}
span.ms-crm-CommandBar-Menu
{
vertical-align: top;
overflow: hidden;
text-overflow: ellipsis;
display: inline-block;
}
.splitButtonSplitter
{
height: auto;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}

DIV.ui-flyout-dialog-moreCommands a.ms-crm-Menu-Label
{
height: auto;
}

DIV.ui-flyout-dialog-moreCommands img.ms-crm-commandbar-image16by16
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
}

li.ms-crm-ChartCommandBar-menu-text span.ms-crm-CommandBar-Menu
{
display: none;
}
span.ms-crm-CommandBar-Button
{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
height: 22px;
padding-top: 5px;
padding-bottom: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 6px;
<% } else { %>
padding-right: 6px;
<% } %>
}

img.flyoutAnchorArrow
{
height:16px;
width:16px;
vertical-align: top;
}

DIV.ui-flyout-dialog-moreCommands img.flyoutAnchorArrow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 4px;
<% } else { %>
margin-left: 4px;
<% } %>
}

DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton img.flyoutAnchorArrow
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}


div.ui-dialog-content img.flyoutAnchorArrow
{
height:16px;
width:16px;

<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}
.ms-crm-moreCommands-flyout
{
height: auto;
max-height: 80%;
overflow:auto;
overflow-y:auto;
overflow-x:hidden;
}

div.ms-crm-moreCommands-flyout-ipad-scroll
{
-webkit-overflow-scrolling: touch;
}

li.ms-crm-article-search-listItem-Hover
{
background:#D7EBF9;
}
.ms-crm-articleSearch-Flyout
{
width: 75px;
curson: pointer;
}
.ms-crm-article-search-menu-spacer
{
width : 135px;
<% if (CrmStyles.IsRightToLeft){ %>
margin-right : 32px;
<% } else { %>
margin-left : 32px;
<% } %>

font-size: 0;
height : 1px;
line-height: 1px;
display : block;
vertical-align : middle;
margin-top : 1px;
margin-bottom: 1px;
overflow-y: hidden;
overflow-x: hidden;
background-color: #E2E4E7;
}

li.ms-crm-article-search-listItem,
li.ms-crm-article-search-listItem-Selected
{
height: 22px;
margin-top: 3px;
margin-bottom: 3px;
cursor: pointer;
}

span.ms-crm-article-search-listItem-span
{
height : 22px;
line-height : 22px;
width : 24px;
display : inline-block;
padding-top: 1px;
padding-bottom: 1px;
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 8px;
margin-right: 1px;
<% } else { %>
padding-left: 8px;
margin-left: 1px;
<% } %>
}

span.ms-crm-article-search-listItem-innerSpan
{
display : inline-block;
height : 22px;
line-height : 22px;
width : 1px;
vertical-align : top;
padding : 0px;

background-color: #E2E4E7;
}

img.SpinnerDownArrow,
img.SpinnerUpArrow
{
background-image: none;
}
img.SpinnerUpArrow
{
<%= FlipImage("v") %>
}
.ms-crm-Article-Item-Disabled
{
color: #5b626c;
}
div.ms-crm-Article-Search-Item-Text
{
vertical-align: top;
overflow: hidden;
text-overflow: ellipsis;
display: inline-block;
white-space: nowrap;
width:120px;
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.ms-crm-CommandBar-Input-Container
{
background-color:#ffffff;
border-color: #c6c6c6;
border-width: 1px;
border-style: solid;
}
.ms-crm-moreCommand-image
{
padding-right: 4px;
padding-left: 4px;
padding-top: 2px;
}
#visualizationListContainer
{
max-width: 88%;
overflow: hidden;
text-overflow: ellipsis;
width: auto;
display: inline-block;
}

DIV.ui-flyout-dialog-moreCommands span.ms-crm-CommandBar-Menu
{
overflow: hidden;
text-overflow: ellipsis;
width: 160px;
display: inline-block;
}
#crmRibbonManager span.ms-crm-Menu-Label span.ms-crm-CommandBar-Button
{
overflow: hidden;
text-overflow: ellipsis;
width: 80px;
display: inline-block;
}
.splitButtonSplitter
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 3px;
<% } else { %>
padding-left: 3px;
<% } %>
height: 12px;
}

.splitButtonSplitter-hidden
{
visibility: hidden !important;
}

.ms-crm-commandbar-splittter-hover
{
background: none;
}
.commandbarMenuUnselected:hover
{
background: #d7e8f9;
}
.ms-crm-commandbar-split-hover
{
border-width: 1px !important;
border-style: solid !important;
background-color: #ffffff !important;
}
.ms-crm-commandbar-hoveredOver
{
border-width: 1px !important;
border-style: solid !important;
}
span.ms-crm-More-Menu-Label
{
padding-top: 3px;
padding-bottom: 3px;
}
div.ms-crm-TopBarContainer ul.ms-crm-CommandBar-Menu
{
<% if (CrmStyles.IsRightToLeft){ %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
background-color: #f8f8f8;
}


div.ms-crm-TopBarContainer ul.ms-crm-CommandBar-Menu li.ms-crm-CommandBarItem,
#contextualActionBar
{
margin-top: 6px;
margin-bottom: 6px;
}

div.ui-flyout-dialog-moreCommands span.ms-crm-CommandBar-Button
{
max-width: 99%;
}
ul.ms-crm-CommandBar-Menu li.ms-crm-CommandBar-SplitButton span.ms-crm-CommandBar-Menu
{
max-width: 145px !important;
}
span.ms-crm-More-Menu-Label
{
padding-top: 3px;
padding-bottom: 3px;
overflow-x: hidden;
}

A.ms-crm-Menu-Label:focus,
A.ms-crm-Menu-Label-Flyout:focus
{
outline-width: 1px;
outline-style: dotted;
outline-color: #D7E8F9;
}


div.ms-crm-TopBarContainer ul.ms-crm-CommandBar-Menu li.ms-crm-CommandBarItem:focus
{
<% if (Request.Browser.Browser == "IE") { %>
outline-width: 1px;
outline-style: dotted;
outline-color: #7F7F7F;
<% } %>
}

ul.ms-crm-CommandBar-Menu A.ms-crm-Menu-Label:focus,
ul.ms-crm-CommandBar-Menu A.ms-crm-Menu-Label-Flyout:focus,
div.ui-flyout-dialog-moreCommands A.ms-crm-Menu-Label:focus,
div.ui-flyout-dialog-moreCommands A.ms-crm-Menu-Label-Flyout:focus
{
padding-top: 4px;
}
ul.ms-crm-CommandBar-Menu li.ms-crm-CommandBar-SplitButton A.ms-crm-Menu-Label:focus,
ul.ms-crm-CommandBar-Menu li.ms-crm-CommandBar-SplitButton A.ms-crm-Menu-Label-Flyout:focus
{
padding-top: 3px;
padding-bottom: 4px;
}
span.ms-crm-More-Menu-Label A.ms-crm-Menu-Label:focus
{
padding-bottom: 1px;
}
A.ms-crm-commandbar-spinner:focus
{
outline-width: 1px;
outline-style: dotted;
outline-color: #000000;
}
li.ms-crm-CommandBar-Spinner span.ms-crm-CommandBar-Button
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 1px;
<% } else { %>
padding-right: 1px;
<% } %>
}
DIV.ui-flyout-dialog-moreCommands .splitButtonSplitter
{
<% if (CrmStyles.IsRightToLeft){ %>
margin-right: 3px;
padding-right: 2px;
<% } else { %>
margin-left: 3px;
<% } %>
}
DIV.ms-crm-moreCommands-flyout div.ui-flyout-dialog-moreCommands
{
height: auto !important;
}
DIV.ui-flyout-dialog-moreCommands li.ms-crm-CommandBar-SplitButton SPAN.ms-crm-Menu-Label,
li.ms-crm-CommandBar-SplitButton span.ms-crm-CommandBar-Button
{
text-overflow: clip;
}




.PerfButtonRight
{
margin:5px;
float:right;
}
.PerfButton
{
margin:5px;
}

.PerfDiv
{
position: absolute;
left: 50%;
top: 0;
padding: 5px;
padding-top: 0px;
background: #AABBCC;
border: 1px solid #000;
z-index: 1000;
}
.PerfDivHeader
{
text-align: center;
font-weight: bold;
}

#perfTabs_container
{
border-bottom: 0px solid #ccc;
}
#perfTabs
{
list-style: none;
padding: 5px 0 4px 0;
margin: 0 0 0 0px;
}
#perfTabs li
{
display: inline;
}
#perfTabs li span
{
border: 1px solid #ccc;
padding: 4px 6px;
text-decoration: none;
background-color: #eeeeee;
border-bottom: none;
outline: none;
color: black;
cursor:pointer;
}
.hoverable #perfTabs li span:hover
{
background-color: #dddddd;
padding: 4px 6px;
}
#perfTabs li.active span
{
background-color: #fff;
padding: 4px 6px 5px 6px;
border-bottom: none;
}
.hoverable #perfTabs li.active span:hover
{
background-color: #eeeeee;
padding: 4px 6px 5px 6px;
border-bottom: none;
}
#perfTabs_content_container
{
border: 0px solid #ccc;
border-top: none;
padding: 0px;
}

.perfTabContent
{
display: none;
}

.perfTextArea
{
width: 100%;
padding-left: 5px;
border: 1px solid;
margin-top: 5px;
}

pre.mscrmpretag
{
word-wrap: break-word;
white-space: pre-wrap;
}

#perfTimelineWrapper
{
border: 1px solid #000;
background-color: White;
overflow: auto;
height: 300px;
}

#perfTimelineCanvas
{
background-color: White;
position: relative;
top: 0px;
cursor: pointer;
}

.ms-crm-inline-colorvalue
{
width: 50px;
height: 13px;
position: absolute;
top: 4px;
bottom: 3px;
z-index:10;
border: 1px solid #000000;
<% if (CrmStyles.IsRightToLeft) { %>
left: 4px;
<% } else { %>
right: 4px;
<% } %>
}

.ms-crm-InputColor
{
height: 14px;
width: 60%;
}

.ms-crm-ColorValueDirection
{
direction: ltr;
}

.ms-crm-ColorValueDirection input
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
}

TD.ms-crm-EntityName
{
background-color: rgb(255,255,255);
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

TD.ms-crm-EntityNameSelected
{
background-color: rgb(196,221,255);
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

TD.ms-crm-EntitySection
{
vertical-align: top;
padding-top: 10px;
width: 300px
}

TD.ms-crm-EntityFieldSection
{
vertical-align: top;
padding-top: 10px;
width: 550px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

DIV.ms-crm-ParentSelect
{
width: 200px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
padding-right: 10px;
<% } else { %>
float: left;
padding-left: 10px;
<% } %>
}

DIV.ms-crm-EntityFieldSection-Desc
{
padding: 10px;
}

DIV.ms-crm-FloatDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

DIV.ms-crm-ExternalAppContainerDiv
{
height: 200px;
border-style: solid;
border-width: 1px;
overflow-y: auto;
}

DIV.ms-crm-EntityFieldWarning
{
padding-top: 10px;
visibility: hidden !important;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 25px;
<% } else { %>
padding-left: 25px;
<% } %>
}

DIV.ms-crm-EntityFieldWarningDesc
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 25px;
<% } else { %>
padding-left: 25px;
<% } %>
}

DIV.ms-crm-Hidden,
TABLE.ms-crm-Hidden
{
visibility: hidden !important;
}

DIV.ms-crm-Visible,
TABLE.ms-crm-Visible
{
visibility: visible !important;
}

TD.ms-crm-EntityFieldSection-FieldLabel
{
width: 150px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

TD.ms-crm-EntityFieldSection-Select
{
width: 150px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.ms-crm-ExternalPartyEnabledConfig-Button
{
height: 24px;
font-family: Segoe UI,Tahoma,Arial;
border: 1px solid #C6C6C6;
background-image: none;
width: auto;
min-width: 80px;
white-space: nowrap;
color: #444444;
background-color: #ffffff;
}

<% if ((Request.Browser.Browser == "IE" || Request.Browser.Browser == "InternetExplorer") && CrmStyles.IsRightToLeft)
{
%>
IFRAME[title="Intentionally blank"][id^='lpSS']{
position: relative !important;
}
<% }
%>
.ms-crm-ImageStrip-ico_lrg_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -1px;width:66px;height:48px;overflow:hidden;}
.ms-crm-ImageStrip-formheader_placeholder_35x26{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -51px;width:35px;height:26px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1048{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -69px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1235{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -69px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1049{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -79px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_32_1048_inherited{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -35px -79px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InteractiveServiceHub_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -69px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AppModules_32x32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -103px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Plugin_TraceLog_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -103px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_32_1048_overridden{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1333{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -113px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_32_1024_Kit{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -35px -113px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Area_default_thumbnail{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -69px -103px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-ico_24_cal_collapse{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -38px -51px;width:24px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-placeholder_24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -99px -103px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-ico_24_caltoday_menu{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -137px -1px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-ico_24_cal_expand{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -137px -27px;width:24px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-subarea_webresource_thumbnail{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -137px -50px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-subarea_default_thumbnail{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -137px -75px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_99{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -125px -103px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9700{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -125px -123px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_126{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -147px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-17_help_rtl{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -21px -147px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-17_help{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -40px -147px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-18_calendar{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -69px -133px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-data_management{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -87px -133px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_127{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -105px -129px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_132{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -100px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4003{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -105px -147px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_3{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -118px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_2{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -123px -143px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1038{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -136px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1088{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4206{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9507{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1024_ProductFamily{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -162px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1236{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -162px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1025{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4400{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4406{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_servicecal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1010{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -167px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_calday{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -19px -167px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_caltoday{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -37px -166px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_calmonth{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -59px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-apptBookMinus{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -77px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4000{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -95px -165px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-apptBookPlus{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -113px -165px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_calweek{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -131px -161px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4212{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -149px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4210{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4207{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4214{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1120{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -180px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_129{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -180px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_busmanagement{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_marketplace{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_landing_pages{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_productcatalog{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4703_g{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -167px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4700{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -185px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -19px -185px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -37px -184px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1201_g{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -55px -169px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9606{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -73px -169px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -91px -183px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1071{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -109px -183px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9005{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -131px -179px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4710{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -149px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9105{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -167px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_3{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4230{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_subAccounts{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -198px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_history{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -198px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_act{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_8{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_2{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4502{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4710_g{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -185px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4567{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -185px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_3234{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -203px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_2015{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -19px -203px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1111{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -37px -202px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9606{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -55px -187px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_help{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -73px -187px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_AdvancedFind{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -91px -201px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Plugin_TraceLog_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -109px -201px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9605{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -127px -197px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9605{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1200_g{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_datamanagement{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4703{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_templates{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_internet_leads{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -216px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_syscust{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -216px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_administration{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ExternalAppManagement_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_marketing{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_settings{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_service{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -203px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_sales{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -203px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1130{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -221px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -19px -221px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4202{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -37px -220px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4204{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -55px -205px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_4216{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -73px -205px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9930{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -91px -219px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4001{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -109px -219px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -127px -215px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_99{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_minicamps{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1024{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -181px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4300{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -199px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomizeProperty_Customize_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -217px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1048_overridden{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1048_inherited{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1049{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1235{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -234px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1333{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -234px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1048{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1234{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1024_Kit{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1024_Bundle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1090{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -221px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1084{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -221px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_123{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1082{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -19px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9100{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -37px -238px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_2020{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -55px -223px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_import{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -73px -223px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -91px -237px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-18_home{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -109px -237px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_1024_Product{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -55px -241px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-apptBookDown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -71px -241px;width:13px;height:8px;overflow:hidden;}
.ms-crm-ImageStrip-apptBookUp{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -127px -233px;width:13px;height:8px;overflow:hidden;}
.ms-crm-ImageStrip-dotUnselected{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -127px -243px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-zoomMinus{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -142px -235px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-dotSelected{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -156px -235px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-zoomMinusOver{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -239px -163px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-zoomPlus{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -170px -235px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-zoomPlusOver{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -239px -177px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-yammer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -1px;width:64px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tree_home_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -19px;width:62px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-tree_home_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -41px;width:62px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-tree_home{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -63px;width:62px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-visorclosehover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -67px -1px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visorclose{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -67px -12px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visoropenhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -23px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visoropen{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -34px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-btn_off_cal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -45px;width:36px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-btn_dis_cal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -85px;width:36px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Timer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -66px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Timer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -106px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_border{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -39px -85px;width:1px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Recent{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -42px -100px;width:30px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Enabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -74px -100px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Disabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -128px -1px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-popout{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -103px -45px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchytoolbar{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -104px -75px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Enabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -104px -105px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Disabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -140px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchySplitterGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -35px -126px;width:5px;height:26px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_error{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -42px -126px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-DefaultSitemapArea_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -68px -130px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -94px -135px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-more_right_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -120px -135px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_right_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -158px -1px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -133px -31px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -133px -52px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -73px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -94px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Home{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -146px -115px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_info{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -146px -141px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -159px -22px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -165px -22px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-btn_dis_lookup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -159px -45px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -171px -22px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-qfind{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -160px -67px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Enabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -160px -89px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_btn_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -170px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_btn_on{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -31px -154px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Enabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -54px -156px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-disabled_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -75px -156px;width:15px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-default_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -99px -66px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Disabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -92px -161px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Disabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -113px -161px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-rightcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -177px -22px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-vertical_line_transparent{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -181px -22px;width:1px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-searchclear{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -167px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchcleardown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -157px -167px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchclearhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -184px -1px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -184px -23px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -182px -45px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-search{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -183px -67px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -181px -89px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -187px -89px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -193px -89px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -172px -112px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -199px -89px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -178px -112px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-btn_off_lookup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -184px -112px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-search_disable{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -172px -135px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-hover_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -195px -134px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-selected_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -199px -134px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-hover_rightcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -203px -134px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-enabled_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -180px -157px;width:15px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -197px -157px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-search_normal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -192px;width:20px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-horizontalGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -42px -85px;width:19px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-more_down_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -24px -176px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_up_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -23px -194px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -45px -179px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -66px -179px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_down_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -87px -184px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_up_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -108px -184px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-verticalGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -129px -184px;width:3px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -115px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -140px -115px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_ribboncollapse{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -189px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_ribbonexpand{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -153px -189px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -180px -180px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -172px -189px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -186px -180px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -192px -180px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -198px -180px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -1px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -20px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -39px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_warn16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -212px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_alert16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -19px -212px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_crit16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -44px -197px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-marketing_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -62px -197px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-services_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -80px -202px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tab_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -98px -202px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Hierachy_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -116px -208px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -208px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-settings_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -152px -208px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-close{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -170px -208px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tab_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -188px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -37px -215px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -55px -215px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-More_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft_HC_W{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight_HC_B{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight_HC_W{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -206px -58px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft_HC_B{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -206px -76px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -205px -94px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_near_expiration{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_success{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_expired{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-resourcecenter_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -204px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-sales_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -204px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-mnuDown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -206px -199px;width:11px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -230px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_info16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -19px -230px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_click{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -37px -230px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -55px -230px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-workplace_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -73px -220px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_cold{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -91px -220px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -109px -226px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -127px -226px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -145px -226px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_unchecked{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -163px -226px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_checked{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -178px -226px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-tab_downRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -193px -217px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-tab_rightRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -217px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -193px -231px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-openview{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -207px -231px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -231px -1px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-powerbidashboard{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -231px -15px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-enlarge{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -231px -29px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -231px -43px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-frm_recommended{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -224px -57px;width:10px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -224px -70px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -224px -83px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -223px -96px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-frm_required{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -225px -109px;width:10px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-email_expand{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -225px -122px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-email_collpase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -225px -134px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_rArrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -126px -31px;width:4px;height:7px;overflow:hidden;}
.ms-crm-ImageStrip-chartsideliteTopBottom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -1px -1px;width:132px;height:38px;overflow:hidden;}
.ms-crm-ImageStrip-chartsidelite{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -1px -41px;width:38px;height:132px;overflow:hidden;}
.ms-crm-ImageStrip-horizontalPreLoader{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -41px;width:55px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-progress{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -48px;width:36px;height:36px;overflow:hidden;}
.ms-crm-ImageStrip-Dropdown_Arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -79px -48px;width:19px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -86px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButtonDisabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -100px -41px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -62px -86px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -109px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButtonDisabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -100px -64px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -62px -109px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLine{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -41px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineBottomRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -83px -72px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -91px -72px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineBottom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -132px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formSelectorDropdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -83px -92px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-grid_filter{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -49px -132px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -152px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -103px -87px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -83px -112px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_filter_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -67px -132px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_hover_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -103px -105px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -59px -150px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -85px -130px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_excel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -103px -123px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_assign{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -77px -150px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-reset{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -103px -141px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-asc{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -135px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-desc{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -135px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-disablereset{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -129px -41px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_delete{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -61px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-editrulebutton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -79px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_print{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -97px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -115px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-lockButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -133px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-lockButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-unlockButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -153px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-chartside{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -153px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-unlockButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -147px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -59px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButtonBin{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -77px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -95px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activateButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -113px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -131px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_refresh_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -139px -149px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -171px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-resize{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -171px -19px;width:2px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-sorting_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -175px -19px;width:10px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-sorting_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -165px -37px;width:10px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-dropdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -55px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-dropdown_wfilter{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -173px -53px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-stripDivider{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -170px;width:14px;height:2px;overflow:hidden;}
.ms-crm-ImageStrip-bar_line{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -177px -35px;width:2px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-openassociatedgridviewhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -71px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-addButtonDisable{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -173px -69px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-openassociatedgridview{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -86px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-bar_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -59px -168px;width:13px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox_light{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -172px -84px;width:12px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -101px;width:12px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-page_R0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -95px -159px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-navliteleft{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -105px -159px;width:7px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-navliteright{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -172px -96px;width:7px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_FL1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -113px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_L1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -171px -107px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_R1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -124px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-row_selected{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -35px;width:5px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_L0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -167px -118px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_FL0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -157px -135px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-AdvFindDownArrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -177px -118px;width:7px;height:7px;overflow:hidden;}
.ms-crm-ImageStrip-d{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -74px -168px;width:7px;height:4px;overflow:hidden;}
.ms-crm-ImageStrip-r{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -95px -148px;width:4px;height:7px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook_FolderTracking_48{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -1px;width:48px;height:48px;overflow:hidden;}
.ms-crm-ImageStrip-newactivity32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -51px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Help_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -51px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Query_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -51px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -85px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndClose_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -85px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAs_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -85px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditProperties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditColumns_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Remove_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -119px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAllCustomizations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -119px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShowDependencies_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -119px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Remove_Form_Comp_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Body_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Footer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormProperties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreview_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_2cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Reference_Panel_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_4cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -153px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_3cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SwitchToModernLayout_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_1col_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsNW_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_3colsNWN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -187px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Add_Subgrid_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -187px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Add_QuickViewForm_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Spacer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InsertIFrame_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Dashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -187px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssignDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShareDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Assign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-saveaschart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -221px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChartsBarGraph_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -221px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ColumnChart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-areachart_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-linechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-funnelchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -221px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -205px;width:32px;height:31px;overflow:hidden;}
.ms-crm-ImageStrip-Close_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-printpreview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DuplicateDetection_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDeleteWizard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-HelpOnThisPage_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AdministratorGuide_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -255px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CRMOnlineLive_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -255px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Legal_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Activate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Reschedule_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShowSchedulingConflict_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DashboardProperties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -255px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IFRAME_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -238px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MS_Social_Listening_Icon_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InteractionWall_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseHeightDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseWidthDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFullText_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchKeyword_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchSubject_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchExactWords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddLocations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditLocations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Deactivate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Actions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertOpportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertKnowledgeArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnection_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -289px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-QueueItemDetails_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -272px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-copyshortcut32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-runworkflow32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-runreport32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -273px;width:32px;height:32px;overflow:hidden;<% if (CrmStyles.IsRightToLeft) { %>Filter:FlipH;-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);background-color:white;<%} %>}
.ms-crm-ImageStrip-attachment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Email_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4207{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4204{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -323px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssociateChildCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -323px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateChildCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomizeEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-edit32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DetectAll_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -323px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-exporttoexcel32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -306px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ExportTemplate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-setasdefaultview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-savefilters32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChartPane_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-editchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendDirectMail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SystemViews_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDelete_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingStandard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -357px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssignRoles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -357px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MergeRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Relationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomerRelationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SelectedRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsAllPages_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-customactivity32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertLead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -357px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BusinessRule_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -340px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DisqualifyLead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetRegarding_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-activitysaveascancelled32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Opportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tiles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Queues_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-QuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedQuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedCustomerRelationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedOpportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -391px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddToMarketingList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -391px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DesignView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-expandchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-savefiltersasview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomPreviewPane_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-filter32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Copy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteSelected_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAll_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -391px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -374px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditForm_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-mailmerge32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointmentInstance_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4210{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4212{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-startdialog32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendShortcut_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-GrantPermissions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddToQueue_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -425px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-activityclose32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -425px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newwindow32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchUseLikeWords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchArticleNumber_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchTitle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ACIControl_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseWidthDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseHeightDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-KMControl_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-powerbitile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-deletechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendAsEmail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -425px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-changestatus32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -408px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Privacy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-HelpUpdates_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Troubleshooting_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Contents_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-crmoptions32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tools_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-saveandnew32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -409px;width:32px;height:31px;overflow:hidden;}
.ms-crm-ImageStrip-importchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-tagchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-piechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-exportchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-barchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndCloseChart_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Sharing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InsertNavigationLink_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-thmb_Bing_Favicon_pc_orange_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Web_Resource_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Delve_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -459px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_2_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -442px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_3colsNNN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsWW_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsWN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_1col_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SelectNavigation_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Header_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Redo_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Undo_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Properties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -442px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-WebResourcePreview_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DownloadXML_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Hide_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -493px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreviewMobile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -493px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Save_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Results_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-advancedfind32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-importdata32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newrecord32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-OpenAssociatedGridView32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-32_save_route{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -307px;width:31px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Note_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -339px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-Clear_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -365px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsCompleted_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -391px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-noteyellowadd32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -417px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-CRM_Activity_Command_FolderTracking_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -443px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -339px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Reference_Panel_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -357px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -375px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-savechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -393px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Close_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -411px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseWidthDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -429px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchExactWords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RunReport_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -447px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_routecase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -495px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_rejectemailofqueue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -493px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DetectDuplicates_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -476px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SystemView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -53px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveFilterAsNewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -71px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-logo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -89px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetRegarding{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -107px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BusinessRule_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -125px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFilter_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -143px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_checkout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -161px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_discardcheckout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -179px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_Excel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -197px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_note{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -215px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UploadDocument_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -233px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewAddLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -251px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Tiles_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -269px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShowDocumentSuggestions_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -287px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReturnToList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -305px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Queues_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -323px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OpenInSharePoint_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewEditLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -359px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DocumentLocation_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -377px -476px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -395px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_powerpoint{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -413px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_word{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -431px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_checkin_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -449px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-New_Entitlement_Template_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -467px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFilter_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -485px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DisqualifyLead_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertLead_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -511px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-setregarding16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -494px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitysaveascancelled16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-customactivity16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Opportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QuickCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsOnCurrentPage_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsAllPages_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedQuickCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomerRelationship_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedOpportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Relationship_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddToMarketingList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MergeRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-appointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssignRoles_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateInCrm{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RunWorkflow_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SelectedRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingSocialProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingStandard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DesignView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendDirectMail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-expandchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-editchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-newchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChartPane_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveFiltersAsNewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-savefilters16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomPreviewPane_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -69px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveViewAsDefault_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -87px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-filter16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -105px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ExportTemplate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -123px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Import16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -141px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-exporttoexcel16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -159px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -177px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -195px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Copy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -213px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DetectAll_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -231px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteSelected_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -249px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Edit_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -267px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAll_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -285px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishEntity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -303px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomEntity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -510px -321px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-formdesign16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -339px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailToCaseOfQueue_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -357px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddCampaignResponse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -375px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-mailmerge16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -393px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailToCaseOfQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -411px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_approveemailofqueue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -429px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_save_route{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -447px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateChildCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -513px -465px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssociateChildCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -483px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -501px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -529px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointmentInstance_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -512px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddAppointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddFax_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddLetter_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddPhone_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddEmail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddTask_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddNote_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-attachment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-StartWorkflow_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -51px;width:14px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-startdialog16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailLink_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendShortcut_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-copyshortcut16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-GrantPermissions_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QueueItemDetails_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddToQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertKnowledgeArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertOpportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activityclose16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Deactivate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-newwindow16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deactivate16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsComplete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsCompleted_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -519px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchUseLikeWords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchSubject_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchArticleNumber_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchInSubject_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchTitle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchKeyword_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFullText_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ACIControl_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseHeightDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseHeightDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseWidthDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DashboardProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboardComponent_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InteractionWall_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-KMControl_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MS_Social_Listening_Icon_Default_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-powerbitile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IFRAME_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deletechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Activate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendAsEmail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShowSchedulingConflict_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeStatus_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Reschedule_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CRMActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Activate16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Privacy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Legal_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-HelpUpdates_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -547px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CRMOnlineLive_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -530px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Troubleshooting_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AdministratorGuide_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Contents_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-HelpOnThisPage_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Options_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDelete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDeleteWizard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DuplicateDetection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Tools_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PrintPreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-saveandnew16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-clearRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -548px;width:16px;height:15px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-importchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tagchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-funnelchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-piechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-linechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-exportchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-areachart_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -549px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-barchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ColumnChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChartsBarGraph_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndCloseChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-saveaschart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Sharing_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Assign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -537px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Share_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShareDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RefreshDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssignDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboard16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Recent_Opportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InsertNavigationLink_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-thmb_Bing_Favicon_pc_orange_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Notes_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Add_QuickViewForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Spacer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Webresource_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Delve_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Subgrid_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entitlement_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_2_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumnTab_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabNW_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumnsTabNNN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumnsTabNWN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabWN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabWW_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SwitchToModernLayout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumnSection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Contact_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Case_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FourColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReadOnlyForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -565px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UpdateForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -565px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -564px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SelectNavigation_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Footer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Header_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Body_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Redo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Undo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveField_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Properties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDraft_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-show_dependency{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-WebResourcePreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAllCustomizations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ImportData_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumn_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Help_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Query_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndClose_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAs_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QueryLineGrouping_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DownloadXML_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-delete16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Delete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -555px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Hide_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Clear_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -559px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -581px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreviewMobile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -581px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Save_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -581px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Results_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AdvancedFind_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewRecord_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-New_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OpenAssociatedGridView16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -565px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-commandbar_divider{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -567px;width:1px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -58px -567px;width:5px;height:3px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart_arrow_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -1px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -26px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -37px -1px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart_arrow_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -37px -26px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart_arrow_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -51px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart_arrow_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -37px -51px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart_arrow_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -73px -1px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -73px -26px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_arrow_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -73px -51px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart_arrow_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -76px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_arrow_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -37px -76px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -73px -76px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -101px;width:34px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-funnelChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -37px -101px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-lineChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -66px -101px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-pieChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -109px -1px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-pieChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -109px -26px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-tagChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -109px -51px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -109px -76px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -95px -101px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-clearRules_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topBottomRules_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -30px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -59px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topRules{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -88px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topBottomRules_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -138px -1px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-topBottomRules{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -138px -26px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-clearRules{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -138px -51px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -138px -76px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -124px -101px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -117px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-tagChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-tagChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -30px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-pieChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -59px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-lineChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -88px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-lineChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -117px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-funnelChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -167px -1px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -167px -26px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -167px -51px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -167px -76px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -153px -101px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-funnelChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -146px -126px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-columnChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -146px -151px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -1px -176px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-barChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -30px -176px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -59px -176px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-areaChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -88px -176px;width:27px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-deleteChart_sel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -117px -176px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteChart{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -175px -126px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteChart_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -135px -176px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-add_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -175px -144px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-add{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/visualization.png").ToString()%>) no-repeat scroll -153px -176px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addrecurrence32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CancelIncident32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-editrecurrence32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-endrecurrence32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-customaction32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-approveprimaryemail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-addmember_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_2{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_8003{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_Custom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-forwardedemail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-insertarticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-insertemailtemplate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ManageRoles32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newemailattachment32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-recalculateopportunity32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-removeattachment32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-rejectprimaryemail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-removemember32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-replyall_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-resolvecase32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-replymail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_8003_u{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyAsCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyAsTemplate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewTemplate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CloseCampaignActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertCampaignResponse_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyCampaignResponse_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateCampaignResponse_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CampaignActivityDistribute_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyListMembersToMarketingList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsWon_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsLost_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Suggestions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-LookupAddress_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-LockPricing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-UseCurrentPricing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-GetProducts_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CancelInvoice_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateOrder_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivateQuote_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReviseQuote_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateInvoice_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Reclassify_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateQuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyToList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnectionNew_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Convert_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ContractRelease_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ContractDetailsCancel_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnectionToMe_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsForCurrentImportFile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyToStatic_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-WebResource_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InstallGrid_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CloseActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SubmitArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-UnpublishArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-WebPage_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InsertSalesLiterature_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultMobileOfflineProfile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Hierarchy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Revise_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_Hierarchy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Preview_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Revert_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Retire_Hierarchy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Overwrite_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Product_Association_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BundleProduct_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Clone_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ArchiveArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DiscardArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishKnowledgeArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Major32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Translate32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleScheduled32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleDiscarded32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleVersion32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleExpired32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleArchived32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleCreate32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleApproved32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleDraft32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticlePublished32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleTranslate32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ActivityFeedsArticleUpdated32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-OpenFlows_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Minor32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RevertToDraftArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-UpdateArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RestoreArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ApproveArticle32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Retire_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-View_Published_Products_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishProduct_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MailboxApplyDefaults_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-TestEmailServerProfile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EmailServerProfileTestAccess_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultEmailServerProfile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddComment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RejectArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Record_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ValidateURL_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SubGrid_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShowAddExistingForCampActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsForCurrentImport_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendFax_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetCalendar_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ContractRenew_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ContractHold_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-TrackInCRM_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddToCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateOpportunityForMembers_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ManageMembers_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Rollup_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddAttachment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddPriceListItem_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AlignGoal_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Routing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ViewXML_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SolutionManagement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddNewStandard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReassignRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeBusinessUnit_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CancelOrder_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FulfillOrder_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SubmitOrder_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleReport_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditDefaultFilter_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PrintQuoteForCustomer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CloseQuote_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReleaseFromQueue_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertToKit_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertToProduct_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewProductBundlePopup_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewProduct_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewProductFamily_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReopenOpportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveFromMarketingList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -375px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateLead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InvoicePaid_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Phone_Case_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-WorkOn_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewSystemView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Disable_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PromoteToAdmin_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeManager_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-LaunchMailbox_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Enable_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -409px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeField_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ErrorChecking_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -35px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-JoinTeam_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -69px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewMultipleUsers_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -103px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyContract_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -137px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InvoiceContract_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -171px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssignChart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -205px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShareChart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -239px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_3{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -273px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ribbon_placeholder_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ViewInCRM_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -341px -409px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultTheme_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -367px -409px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ExitPreviewTheme_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -385px -409px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Optimize_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -403px -409px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ViewContent16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -421px -409px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OpenFlows_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Translate16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Minor16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Major16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RevertToDraftArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishKnowledgeArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UpdateArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DiscardArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RestoreArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ArchiveArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ApproveArticle16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveOptimization_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CloneTheme_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PreviewTheme_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-WriteInProduct_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Product_Association_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BundleProduct_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Overwrite_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Clone_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Retire_Hierarchy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Retire_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Revert_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -443px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShowAddExistingForCampActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -439px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsForCurrentImport_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetCalendar_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -19px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EntitlementCancel_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -37px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EntitlementRenew_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -55px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Convert_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -73px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-endrecurrence16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -91px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-editrecurrence16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -109px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_Custom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -127px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-forwardedemail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -145px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-insertemailtemplate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -163px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-rejectprimaryemail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -181px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-removemember16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -199px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-replymail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -217px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Inline_Frame_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -235px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-XML_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -253px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyAsTemplate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -271px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CloseCampaignActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -289px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyCampaignResponse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CampaignActivityDistribute_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -325px -443px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsWon_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -343px -435px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Suggestions_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -367px -427px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-LockPricing_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -385px -427px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-GetProducts_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -403px -427px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateOrder_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -421px -427px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReviseQuote_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -439px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Reclassify_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyToList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateOpportunityForMembers_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Rollup_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddPriceListItem_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Routing_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SolutionManagement_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReassignRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CancelOrder_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SubmitOrder_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditDefaultFilter_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CloseQuote_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertToKit_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewProductFamily_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveFromMarketingList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InvoicePaid_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ResolveCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefault_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CaseCancel_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PromoteToAdmin_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-LaunchMailbox_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeField_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -461px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-JoinTeam_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -457px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewMultipleUsers_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -457px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InvoiceContract_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShareChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -19px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ViewInCRM_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -37px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ContractHold_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -55px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InsertSalesLiterature_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -73px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendEmail16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -91px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InstallGrid_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -109px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CloseActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -127px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SubmitArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -145px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UnpublishArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -163px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-WebPage_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -181px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Remove_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -199px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultMobileOfflineProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -217px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TestEmailServerProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -235px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Revise_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -253px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_Hierarchy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -271px -461px;width:14px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Preview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -287px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PreviewOnTablet_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -305px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PreviewOnPhone_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -323px -461px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-View_Published_Products_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -343px -453px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishProduct_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -361px -445px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MailboxApplyDefaults_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -379px -445px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailServerProfileTestAccess_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -397px -445px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultEmailServerProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -415px -445px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddComment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -433px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RejectArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -451px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Record_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ValidateURL_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyToStatic_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsForCurrentImportFile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendFax_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ContractDetailsCancel_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ContractRelease_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ContractRenew_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnectionNew_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnectionToMe_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TrackInCrm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssignChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyContract_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ErrorChecking_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Enable_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeManager_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Disable_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveFromQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefault_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PhoneCallSupport_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateLead_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -479px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReopenOpportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -475px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertToProduct_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -475px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReleaseFromQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -469px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PrintQuoteForCustomer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -1px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleReport_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -19px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FulfillOrder_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -37px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeBusinessUnit_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -55px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddNewStandard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -73px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-WorkOn_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -91px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AlignGoal_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -109px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddAttachment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -127px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ManageMembers_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -145px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddToCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -163px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateQuickCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -181px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateInvoice_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -199px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ActivateQuote_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -217px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CancelInvoice_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -235px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UseCurrentPricing_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -253px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-LookupAddress_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -271px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsLost_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -289px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyListMembersToMarketingList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -307px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReactivateResponse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -325px -479px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertResponse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -343px -471px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewTemplate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -361px -463px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyAsCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -379px -463px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-sendinvitation16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -397px -463px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-replyall_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -415px -463px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-removeattachment16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -433px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-newemailattachment16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -451px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ManageRoles16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -469px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-insertarticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-customaction16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addrecurrence16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-approveprimaryemail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addmember_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ribbon_placeholder_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewProduct_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbon.png").ToString()%>) no-repeat scroll -497px -145px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_3{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_5{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_127{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1024{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1028{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1084{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1090{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_3008{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4204{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4210{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4214{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4300{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9400{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9600{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9603{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9606{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_3231{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4605{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4618{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_7101{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9604{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1016{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1036{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1056{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1071{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1083{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1089{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_2011{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_2020{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_3234{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4009{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4402{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4502{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4700{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_8003_u{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9105{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9940{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9502{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_systemEntity{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9508{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9941{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9106{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9100{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_8003{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4503{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4412{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4000{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_2029{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_2013{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_2010{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1091{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1085{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1080{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1070{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1039{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1022{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_1011{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_7103{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4703{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4608{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_4567{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9987{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9605{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_9602{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_9401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4710{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4400{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -1px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4251{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -19px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4212{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -37px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4207{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -55px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4202{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -73px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4001{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -91px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_3005{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -109px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1088{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -127px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1038{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -145px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1025{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1010{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_123{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_10{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-entity16_8{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_4{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_2{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entity16_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity16.png").ToString()%>) no-repeat scroll -163px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-messagebar_bkg{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -1px;height:32px;}
.ms-crm-ImageStrip-default{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -35px;height:21px;}
.ms-crm-ImageStrip-default_vertical_line{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -58px;height:21px;}
.ms-crm-ImageStrip-hover_selected_vert_line{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -81px;height:21px;}
.ms-crm-ImageStrip-hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -104px;height:21px;}
.ms-crm-ImageStrip-selected{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-1.png").ToString()%>) repeat-x scroll 0 -127px;height:21px;}
.ms-crm-ImageStrip-jewel_hover_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -1px;height:24px;}
.ms-crm-ImageStrip-jewel_hover_middle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -27px;height:24px;}
.ms-crm-ImageStrip-jewel_hover_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -53px;height:24px;}
.ms-crm-ImageStrip-jewel_normal_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -79px;height:24px;}
.ms-crm-ImageStrip-jewel_normal_middle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -105px;height:24px;}
.ms-crm-ImageStrip-jewel_normal_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -131px;height:24px;}
.ms-crm-ImageStrip-jewel_select_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -157px;height:24px;}
.ms-crm-ImageStrip-jewel_select_middle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -183px;height:24px;}
.ms-crm-ImageStrip-jewel_select_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-14.png").ToString()%>) repeat-x scroll 0 -209px;height:24px;}
.ms-crm-ImageStrip-msgbar_button_cold_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-15.png").ToString()%>) repeat-x scroll 0 -1px;height:22px;}
.ms-crm-ImageStrip-msgbar_button_click_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-15.png").ToString()%>) repeat-x scroll 0 -25px;height:22px;}
.ms-crm-ImageStrip-msgbar_button_hover_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-15.png").ToString()%>) repeat-x scroll 0 -49px;height:22px;}
.ms-crm-ImageStrip-msgbar_button_cold_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-16.png").ToString()%>) repeat-x scroll 0 -1px;height:22px;}
.ms-crm-ImageStrip-msgbar_button_click_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-16.png").ToString()%>) repeat-x scroll 0 -25px;height:22px;}
.ms-crm-ImageStrip-msgbar_button_hover_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/repeat-x-16.png").ToString()%>) repeat-x scroll 0 -49px;height:22px;}
.ms-crm-ImageStrip-ico_fhe_3{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_5{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_127{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1010{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1013{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1022{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1026{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1030{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1038{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1056{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1071{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1083{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1085{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1089{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1091{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1112{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2010{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2013{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2029{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4001{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4007{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4202{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4206{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4207{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4209{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4211{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4214{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4251{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4400{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4401_rtl{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4406{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4412{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4503{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4703{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_7100{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9102{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9106{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9602{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9605{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9750{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_8181{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_systemEntity{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9301{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9751{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9606{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9603{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9600{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9105{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_9100{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4710{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4700{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4414{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4411{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4402{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4300{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4216{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4212{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4210{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4208{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4206_rtl{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4204{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4009{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4002{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4000{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2020{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2011{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1200{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1111{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1090{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -35px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1088{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -69px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1084{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -103px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1080{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -137px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1070{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -171px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1055{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -205px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1036{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -239px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1028{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -273px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1024{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1016{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1011{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_132{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_123{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_99{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_8{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_4{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_2{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -307px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ico_fhe_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/formentityimages.png").ToString()%>) no-repeat scroll -1px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_calendar_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -1px -1px;width:42px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-reminder_no_reply_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -1px -20px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-delay_sending_mail_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -45px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-email_scheduled_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -1px -54px;width:31px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-do_not_prefer_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -35px -35px;width:31px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-activity_followed_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -79px -1px;width:31px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-need_a_reminder_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -68px -35px;width:25px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_linkclicked_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -1px -80px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_attachmentviewed_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -34px -61px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_emailreplied_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -64px -67px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_emailopen_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -1px -110px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_time_icon_disabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -31px -91px;width:19px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_time_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -31px -110px;width:19px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_cancel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -52px -97px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_confirm{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -72px -97px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_save_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -94px -67px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_edit_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -52px -117px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-field_change_indicator{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -94px -85px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_save{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -70px -117px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_alert{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -92px -103px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_progress{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -88px -121px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -112px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -79px -25px;width:14px;height:8px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_locked_black{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -95px -25px;width:9px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-inlineedit_locked{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/inlineedit_images.png").ToString()%>) no-repeat scroll -112px -19px;width:9px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-Recalculate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/rollup_runtime_images.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-rollup_refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/rollup_runtime_images.png").ToString()%>) no-repeat scroll -1px -35px;width:12px;height:26px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh_high_contrast_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/rollup_runtime_images.png").ToString()%>) no-repeat scroll -15px -35px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Recalculate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/rollup_runtime_images.png").ToString()%>) no-repeat scroll -35px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PromptResponse_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_designer_images.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-QueryCRMData_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_designer_images.png").ToString()%>) no-repeat scroll -35px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-LinkChildDialog_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_designer_images.png").ToString()%>) no-repeat scroll -1px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-stage_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_designer_images.png").ToString()%>) no-repeat scroll -35px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_dark_square{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -1px -1px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_dark_lock{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -19px -1px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_light_lock{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -1px -25px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_light_square{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -19px -25px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_light_check{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -37px -1px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -37px -25px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_completed{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -1px -49px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_dark_check{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -19px -49px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -37px -49px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_light_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -55px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_bar_warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -55px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_bar_error{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -55px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -55px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_light_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -73px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_dark_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -73px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-process_control_dark_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -73px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-15_Back_arrow_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -73px -55px;width:15px;height:15px;overflow:hidden;}
.ms-crm-ImageStrip-15_Advance_arrow_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -1px -73px;width:15px;height:15px;overflow:hidden;}
.ms-crm-ImageStrip-setstagewhite_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -18px -73px;width:12px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-create_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -37px -67px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-12_Stage_Lock_Icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -52px -73px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-12_Stage_complete_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -66px -73px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-10_Stage_scroll_arrow_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -1px -90px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-10_Stage_scroll_arrow_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -13px -90px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-8_info_icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -25px -89px;width:8px;height:8px;overflow:hidden;}
.ms-crm-ImageStrip-8x6_Collapse_Icon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/process_control_images.png").ToString()%>) no-repeat scroll -35px -82px;width:8px;height:6px;overflow:hidden;}
.ms-crm-ImageStrip-Launch_Visualizer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/processdesigner_images.png").ToString()%>) no-repeat scroll -1px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AnimatedPreloader_36{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -1px -1px;width:36px;height:36px;overflow:hidden;}
.ms-crm-ImageStrip-warning_31{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -39px -1px;width:31px;height:31px;overflow:hidden;}
.ms-crm-ImageStrip-30_movedownhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -1px -39px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-30_disabled_move_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -33px -39px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-30_disabled_move_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -1px -71px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-30_moveuphover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -33px -71px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-30_enabled_move_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -72px -1px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-30_enabled_move_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -65px -34px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-23_addminus_config{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -65px -66px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-21_InactivePlus{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -1px -103px;width:21px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-pcc_add{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -24px -103px;width:21px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-add_branch_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -47px -103px;width:15px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-pcc_dropdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -65px -92px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-white_plus_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -81px -92px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-green_plus_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -64px -108px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-12_checkbox_on{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -79px -108px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-12_checkbox_off{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -104px -1px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-12_inactive_config_delete{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -104px -15px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-12_active_config_delete{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -97px -33px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-10_expanded{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -97px -47px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-10_collapsed{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -97px -59px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-grey_plus_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -91px -71px;width:9px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-6x8_breadcrumb_config{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/pcc_images.png").ToString()%>) no-repeat scroll -109px -47px;width:6px;height:8px;overflow:hidden;}
.ms-crm-ImageStrip-erroricon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -1px -1px;width:42px;height:42px;overflow:hidden;}
.ms-crm-ImageStrip-conditionselectdoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -45px -1px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-conditionhovercloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -1px -45px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actiondoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -45px -27px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actionselectdoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -71px -1px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actionhovercloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -71px -27px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actionselectcloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -1px -71px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actioncloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -27px -53px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-actionhoverdoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -53px -53px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-conditionselectcloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -97px -1px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-conditioncloseimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -97px -27px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-conditionhoverdoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -79px -53px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-conditiondoneimage{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -1px -97px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-hovermoveupicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -27px -79px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-hovermovedownicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -45px -79px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-movedownicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -27px -97px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-hoverdeleteicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -63px -79px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pbl_SaveAs_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -45px -97px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pbl_SaveAndClose_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -105px -53px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AboutButton_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -81px -79px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-moveupicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -63px -97px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -105px -71px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-arrowright{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -81px -97px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-arrowdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -96px -97px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-hoverplussign{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -123px -1px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-plussign{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ruleeditor_images.png").ToString()%>) no-repeat scroll -123px -16px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Close{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -1px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_CloseAsWon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -19px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Deactivate{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -1px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Disqualify{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -19px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Follow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -37px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Help{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -37px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_OpenLegacyForm{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -1px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_ReactivateCase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -19px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Save{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -37px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Sharing{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -55px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_UnFollow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -55px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Settings{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -55px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_ResolveCase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -1px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Qualify{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -19px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_New{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -37px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_FormEditor{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -55px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_EmailLink{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -73px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Delete{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -73px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_Create{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -73px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_CloseAsLost{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -73px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_CaseCancel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -1px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_commandbar_AddToQueue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/refresh_commandbar_images.png").ToString()%>) no-repeat scroll -19px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_ConversationContainer_Progressbar{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -1px;width:55px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Progressbar{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -8px;width:55px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -15px;width:16px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_EditPostHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -19px -15px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Expand_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -37px -15px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Collapse_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -39px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Collapse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -19px -33px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Expand_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -37px -33px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_EditPost{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -1px -57px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_Seperator{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -55px -15px;width:1px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-activitieswall_SeeMoreArrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/activitieswall_images.png").ToString()%>) no-repeat scroll -19px -51px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-masthead_Help_White_20x20_rtl{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/tablet_masthead_images.png").ToString()%>) no-repeat scroll -1px -1px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-masthead_Help_White_20x20{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/tablet_masthead_images.png").ToString()%>) no-repeat scroll -23px -1px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-masthead_Open_White_20x20{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/tablet_masthead_images.png").ToString()%>) no-repeat scroll -1px -23px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-masthead_Login_DownArrow_White_7x4{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/tablet_masthead_images.png").ToString()%>) no-repeat scroll -23px -23px;width:7px;height:4px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Down_inactive_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -1px -1px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Down_active_hover_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -33px -1px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Up_inactive_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -1px -33px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Up_active_hover_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -33px -33px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Up_active_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -65px -1px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Arrow_Down_active_30{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -65px -33px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-nbhoverdeleteicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -1px -65px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-nbeditvisualizationicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -26px -65px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-nbhovereditvisualizationicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -51px -65px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-nbhoverediticon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -1px -90px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-nbediticon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -26px -90px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-nbdeleteicon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -51px -90px;width:23px;height:23px;overflow:hidden;}
.ms-crm-ImageStrip-add_hover_20{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -97px -1px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-add_inactive_20{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -97px -23px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-add_20{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -76px -65px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Delete_visualization_hover_12{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -97px -45px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-Delete_visualization_12{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/socialinsight_images.png").ToString()%>) no-repeat scroll -98px -59px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetKBArticleAssociated{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetArticleIcon{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -35px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_PublishedPrivateArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -35px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_AllDraftArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -35px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_PublishedPublicArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -35px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetPopOut{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -53px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetPublicArticle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -53px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetPrivateArticle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -53px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetAssociateArticle_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -69px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetCopyLink_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -69px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetDisassociateArticle_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetKBArticle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -71px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetEmailArticle_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -71px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetEmailArticle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -71px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetPopOutArticle_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetEmailArticleLink_Hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -87px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetDisassociateArticle_Grey{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -87px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetCopyLink{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetAssociateArticle{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetViews{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -1px -89px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetAttachment{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -19px -89px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetRating{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -37px -89px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetEmailLink{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -55px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_AllApprovedArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -73px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_AllPublishedArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -105px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidget_Filters_AllArticles{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -105px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchWidgetBack{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/searchwidget_images.png").ToString()%>) no-repeat scroll -91px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Activities_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Alerts_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Articles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Auditing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_AutomaticCaseCreationRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Bundle_White_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Calendar_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_CampaignResponse_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Cases_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ConnectionRoles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Contact_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Contract_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_CustomEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Dashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_DebugInfo_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Discount_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Documents_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_EmailConfiguration_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Email_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_EntitlementTemplateChannel_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Entitlement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_FieldSecurityProfiles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Goal_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Imports_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_KnowledgeBase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Letter_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_MarketingListMember_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Marketing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_MembersSelected_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_OpportunityProduct_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_QuoteDetail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Opportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_PhoneCall_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_PriceListItem_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Processes_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ProductCatalog_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Queues_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Quote_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_RecurringAppointment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Report_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_RollupQueries_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SalesLiterature_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SecurityRoles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Relationship_Intelligence_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ServiceCalendar_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ServiceLevelAgreement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Service_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SharepointSite_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SocialActivity_32_{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Solutions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SystemJobs_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Team_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Territory_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_UserSettings_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_WhatsNew_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Feedback_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_User_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_UnitGroups_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Templates_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Task_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Substitutes_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Social_Profile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Sites_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Settings_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ServiceManagement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ServiceLevelAgreementItem_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ServiceAppointment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Security_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Sales_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_RoutingRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ResourceGroup_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Relationships_White_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_RealTimeProcess_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_QuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Products_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_MicrosoftFlow_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_PriceListItem_White_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Positions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Order_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_SalesOrderDetail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_InvoiceDetail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_missing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_MembersExcluded_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_MarketingList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Mailboxes_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Lead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Invoices_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Help_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_GoalMetrics_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Faxl_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_EntitlementTemplates_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_EntitlementChannel_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_EmailServerProfiles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -69px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_DynamicsMarketplace_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -103px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_DocumentManagement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -137px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_DiscountLists_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -171px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_DatabaseManagement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -205px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Customizations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -239px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Currency_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -273px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ContractLines_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -307px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Connections_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Competitors_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Campaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_CampaignActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_BusinessManagement_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_BackgroundProcess_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_AutomaticCaseCreationRulesItem_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_AuditHistory_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Appointment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Administration_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -341px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_ActivitiesClosed_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -1px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_ActionImgs_Account_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_images.png").ToString()%>) no-repeat scroll -35px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_AdvancedFind_24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -1px -1px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarShelf{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -27px -1px;width:22px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarShelf_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -1px -27px;width:22px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarLogo_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -27px -17px;width:22px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarLogo{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -1px -43px;width:22px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarGlobalQuickCreate_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -25px -41px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarGlobalMru_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -51px -1px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarGlobalQuickCreate{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -51px -21px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarGlobalMru{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -45px -41px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarSettings_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -1px -67px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_Search_White_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -25px -61px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarSettings{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -43px -61px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarCRMHome_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -71px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarCRMHome{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -71px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarHelp_blue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -65px -41px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-NavBar_Header_NavBarHelp{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/navbar_header.png").ToString()%>) no-repeat scroll -65px -55px;width:12px;height:12px;overflow:hidden;}
