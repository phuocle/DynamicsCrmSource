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

#enlargeButton .crm-ImageStrip-Newenlarge
{
background-position-x:-211px;
background-position-y:-45px;
width:20px;
height:20px;
zoom:0.7;
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
color: #505050;
font-size: 14px;
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
<% if (CrmStyles.IsRightToLeft) { %>
right: 0px;
<% } else { %>
left: 0px;
<% } %>
<% if (this.IsVisualRefreshEnabled)
{ %>
color: #6B7880;
opacity: 1;
font-size: 14px;
font-family:  <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
letter-spacing: 0px;
line-height: 16px;
padding: 7px 5px;
<% } else { %>
color: #666666;
<% if (Request.Browser.Browser != "IE") { %>
padding: 4px 5px;
<% } else { %>
padding: 2px 5px;
<% } %>
<% } %>
overflow: hidden;
height: 16px;
font-weight:normal;
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
div.workflowTemplatePage_tbx.hide,
div.workflowTemplatePage_migrationMsg.hide
{
display: none;
}

div.workflowTemplatePage_selectMode.show,
div.workflowTemplatePage_templateGrid.show,
div.workflowTemplatePage_tbx.show,
div.workFlowTemplatePage_migrationMsg.show
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

div.workflowTemplatePage_migrationMsg
{
background-color: #FFF19D;
border: 1px solid #D7D889;
height: 12px;
vertical-align: middle;
line-height: 12px;
padding: 10px;
}

a.workflowMigrationMsgLink
{
color: blue;
text-decoration: underline;
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

div.workflowTemplatePageSpacer.checkedMode
{
top: 244px;
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

div.workflowTemplatePage_templateGrid.checkedMode
{
top: 252px;
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
display:block;
width:calc(100% - 35px) !important
}

<% if (this.IsVisualRefreshEnabled)
{ %>

.ms-crm-TextAutoEllipsis-Multiline {

overflow: hidden;

position: relative;

line-height: 18px;
/* max-height = line-height * max number of lines (3) */
max-height: 54px;
text-align: justify;

<% if (CrmStyles.IsRightToLeft) { %>
margin-left: -1em;
padding-left: 1em;
<% } else { %>
margin-right: -1em;
padding-right: 1em;
<% } %>
}

iframe#duplicateRecordsIframe {
height:250px !important;
}

td.ViewDuplicates_td_DupSrcSysWide iframe#duplicateRecordsIframe {
height:250px !important;
}

#duplicateRecordsGrid div.ms-crm-IE7-Height-Fix-Dummy-Container {
height: calc(100%) !important;
}
<% } %>

.ms-crm-TextAutoEllipsis-Multiline:before {
content: '...';
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>

left: 0;
bottom: 0;
<% } else { %>

right: 0;
bottom: 0;
<% } %>
}

.ms-crm-TextAutoEllipsis-Multiline:after {
content: '';
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>

left: 0;
<% } else { %>

right: 0;
<% } %>
width: 1em;
height: 1em;
margin-top: 0.2em;
background: white;
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
font-family:<%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_SemiLight") %>;
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
.ms-crm-ImageStrip-pinned_visualrefresh,
.ms-crm-ImageStrip-pinned_visualrefresh_hover,
.ms-crm-ImageStrip-pin_visualrefresh,
.ms-crm-ImageStrip-pin_visualrefresh_hover,
.ms-crm-ImageStrip-pinned_visualrefresh_RTL,
.ms-crm-ImageStrip-pinned_visualrefresh_hover_RTL,
.ms-crm-ImageStrip-pin_visualrefresh_RTL,
.ms-crm-ImageStrip-pin_visualrefresh_hover_RTL,
.defaultViewIcon
{
vertical-align:top;
<% if (this.IsVisualRefreshEnabled)
{ %>
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:9px;
margin-right:3px;
<% } else { %>
margin-right:9px;
margin-left:3px;
<% } %>
margin-top:12px;
<%} else {%>
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:14px;
margin-right:3px;
<% } else { %>
margin-right:14px;
margin-left:3px;
<% } %>
margin-top:8px;
<% } %>
}

span.ms-crm-ViewSelector-title-subGrid-lite
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: 14px;
font-weight: 600;
color: rgb(68,68,68) !important;
}

span.ms-crm-ViewSelector-title-associated-lite,
span.ms-crm-View-Name-associated-lite,
span.ms-crm-ViewSelector-title-Document
{
width: auto;
font-weight: lighter;
font-family: 'Segoe UI';
font-size: 24px;
color: #505050 !important;
line-height: 32px;
opacity: 1;
letter-spacing: 0px;
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
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
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

div.ui-helper-hidden-accessible
{
display: none;
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
<% if (!this.IsVisualRefreshEnabled) { %>
@media screen and (max-width:759px)
{
div#homepageTableCell.ms-crm-absolutePosition
{
top:70px !important
}

#crmContentPanel[gridControlPanel]{
top:125px !important
}
}
<% } %>

@media screen and (max-height:350px) {
#wrapperContainer:not(.bpfContainer) {
overflow-y: auto !important;
}
}

@media screen and (max-height:400px) {
#wrapperContainer.bpfContainer {
overflow-y: scroll !important;
}
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
<% if (this.IsVisualRefreshEnabled)
{ %>
max-width: 90%;
<% } %>
<% else { %>
max-width: 88%;
<% } %>
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

<% if (this.IsVisualRefreshEnabled) { %>

.gridContainer .ms-crm-grid-databodycontainer .ms-crm-IE7-Height-Fix-Dummy-Container{
height:calc(100% - 40px);
}

A.ms-crm-View-Name,
A.ms-crm-View-Name:link,
A.ms-crm-View-Name:visited,
A.ms-crm-View-Name:hover,
A.ms-crm-View-Name-hover:link,
A.ms-crm-View-Name-hover:hover
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.ms-crm-ImageStrip-formSelectorDropdown
{
height:20px;
}

.ms-crm-List-DataAreaEx-Lite .ms-crm-List-Data col.ms-crm-List-CheckBoxColumn
{
width:0px;
}

div[gridid="ResourceGroupsGrid"].ms-crm-List-DataAreaEx-Lite .ms-crm-List-Data col.ms-crm-List-CheckBoxColumn{
width:40px;
}

#chartToolbarContainer span.ms-crm-visualizationpane-toolbar-buttons
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
color: #505050;
}

.merge nobr
{
display:block;
}

#chartRefreshButton:hover,
#openViewButton:hover,
#enlargeButton:hover
{
cursor: pointer;
}


#chartRefreshButton::after {
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\E72C";
}

#openViewButton::after {
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\EE54";
}

#enlargeButton::after {
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\EFEC";
}

#chartRefreshButton_image,
#openViewButton_image,
#enlargeButton_image
{

display: none;
}


.openAssociatedGridViewImageButton a
{
background: none;
height: 18px !important;
width: 20px !important;
position: relative;
}


.openAssociatedGridViewImageButton a span.ms-crm-openAssociatedGridView-button-icon::before
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\ED86";
color: #505050;
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
}



.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_findCriteriaButton span
{
height: 20px !important;
width: 19px !important;
position: absolute;
border: 1px solid #BDC3C7;
padding: 4px;
}

.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_findCriteriaButton span::before
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\E721";
color: #505050;
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
position: absolute;
left: 5px;
top: 5px;
}

.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_findCriteriaButton span img
{
visibility: hidden;
}





.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_clearCriteriaButton span
{
height: 20px !important;
width: 19px !important;
position: absolute;
border: 1px solid #BDC3C7;
padding: 4px;
}

.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_clearCriteriaButton span::before
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\E711";
color: #505050;
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
position: absolute;
left: 5px;
top: 5px;
}

.ms-crm-metaphor-grid-container #crmGrid_quickFindContainer a#crmGrid_clearCriteriaButton span img
{
visibility: hidden;
}





.ms-crm-GridButtons div.ms-crm-List-RefreshButton a#refreshButtonLink span
{
background: none !important;
width: 19px;
height: 20px;
overflow: hidden;
}

.ms-crm-GridButtons div.ms-crm-List-RefreshButton a#refreshButtonLink span::before
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
content: "\E72C";
color: #505050;
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %>;
position: absolute;
}

.ms-crm-GridButtons div.ms-crm-List-RefreshButton a#refreshButtonLink span img
{
visibility: hidden;
}



.ms-crm-GridButtons div#filterButton a#filterButtonLink img
{

margin-left: 0px !important;
margin-right: 0px !important;
}

@font-face {
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts_CRMMDL2") %>;
src: url('data:font/opentype;base64, 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') format('woff');
}

.ms-crm-metaphor-dashboard-container table.home_import_table,
.ms-crm-metaphor-dashboard-container .homepage_table
{
border: none;
}

.ms-crm-DataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

div.ms-crm-TopBarContainer ul.ms-crm-CommandBar-Menu
{
background-color: #ffffff;
}

div.ms-crm-grid-quickFindContainer-subGrid-lite
{
width: CALC(100% - 20px);
max-width: none;
}

A.ms-crm-FindButton
{
width: 30px;
}

INPUT.ms-crm-Dialog-Lookup-QuickFind
{
height: 28px;
padding: 0px;
}

.ms-crm-grid-quickFindContainer-associatedGrid-lite td.AppQuickFind_Render_td A.ms-crm-FindButton,
.ms-crm-grid-quickFindContainer-subGrid-lite td.AppQuickFind_Render_td A.ms-crm-FindButton
{
width: 22px;
height: 30px;
margin-bottom:0px;
}

.ms-crm-grid-quickFindContainer-associatedGrid-lite .ms-crm-FindButton span img.ms-crm-ImageStrip-search,
.ms-crm-grid-quickFindContainer-associatedGrid-lite .ms-crm-FindButton span img.ms-crm-ImageStrip-searchhover,
.ms-crm-grid-quickFindContainer-subGrid-lite .ms-crm-FindButton span img.ms-crm-ImageStrip-search,
.ms-crm-grid-quickFindContainer-subGrid-lite .ms-crm-FindButton span img.ms-crm-ImageStrip-searchhover
{
border :1px solid #C6C6C6;
}

.ms-crm-grid-quickFindContainer-associatedGrid-lite table tr td a.ms-crm-FindButton span img.ms-crm-ImageStrip-searchclear,
.ms-crm-grid-quickFindContainer-associatedGrid-lite table tr td a.ms-crm-FindButton span img.ms-crm-ImageStrip-searchclearhover,
.ms-crm-grid-quickFindContainer-subGrid-lite table tr td a.ms-crm-FindButton span img.ms-crm-ImageStrip-searchclear,
.ms-crm-grid-quickFindContainer-subGrid-lite table tr td a.ms-crm-FindButton span img.ms-crm-ImageStrip-searchclearhover
{
border :1px solid #C6C6C6;
}

.ms-crm-grid-quickFindContainer-associatedGrid-lite INPUT.ms-crm-Dialog-Lookup-QuickFind,
.ms-crm-grid-quickFindContainer-subGrid-lite INPUT.ms-crm-Dialog-Lookup-QuickFind
{
height: 20px;
padding: 0px;
}

.ms-crm-grid-quickFindContainer-associatedGrid-lite LABEL.ms-crm-Dialog-Lookup-QuickFindHint,
.ms-crm-grid-quickFindContainer-subGrid-lite LABEL.ms-crm-Dialog-Lookup-QuickFindHint
{
padding: 3px 5px;
}

table#viewSelectorContainer img
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% } else { %>
float:left;
<% } %>
}

A.ms-crm-View-Name:hover,
A.ms-crm-View-Name-hover:link,
A.ms-crm-View-Name-hover:hover,
A.ms-crm-View-Name:active,
A.ms-crm-View-Name-hover:active,
A.ms-crm-View-Name-hover:visited,
A.ms-crm-View-Name-select,
A.ms-crm-View-Name-select:link,
A.ms-crm-View-Name-select:visited,
A.ms-crm-View-Name-select:hover,
A.ms-crm-View-Name-select:active
{
background-color: rgba(255, 255, 255, 0.3) !important;
}

span.ms-crm-ViewSelector-title-subGrid-lite
{
line-height: 17px !important;
}

td .ms-crm-ImageStrip-frm_required,
td .ms-crm-ImageStrip-frm_recommended,
td .ms-crm-Inline-RequiredLevel {
position:absolute !important;
<% if (CrmStyles.IsRightToLeft) { %>
right:5px;
<% } else { %>
left:5px;
<% } %>
top:10px;
}

.ms-crm-RefreshDialog-Main td .ms-crm-ImageStrip-frm_required{
position: relative !important;
top:0;
}

.ms-crm-ImageStrip-frm_required{
position:absolute !important;
<% if (CrmStyles.IsRightToLeft) { %>
right:0;
<% } else { %>
left:0;
<% } %>
top:0;
}

td.FormSection_CellPadding{
position:relative;
}

td.FormSection_CellPadding .ms-crm-ImageStrip-frm_required{
position:absolute !important;
<% if (CrmStyles.IsRightToLeft) { %>
right:2px;
<% } else { %>
left:2px;
<% } %>
top:5px;
}

.ms-crm-visualizationpane-toolbar span.ms-crm-visualizationpane-toolbar-buttons a
{
display: inline-block;
width: 16px;
height: 16px;
position: absolute;
}
.ms-crm-InlineTabContainer td .ms-crm-ImageStrip-frm_required
{
position: relative !important;
top:0;
}

<% if (Request.Browser.Browser == "IE") { %>
.ms-crm-visualizationpane-toolbar span.ms-crm-visualizationpane-toolbar-buttons
{
display:inline-block !important;
}
<% } %>

<% } else { %>
.ms-crm-DataCell-Lite
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}
<% } %>

body.keyboardFocusClass span.keyboardFocusClass a.ms-crm-Menu-Label.keyboardFocusClass{
padding-top:2px !important;
}

body.keyboardFocusClass .navigationControl span.navTabButton a.ms-crm-FindButton.keyboardFocusClass{
width:50px !important;
}

body.keyboardFocusClass LI.ms-crm-commandbar-menuFocus.keyboardFocusClass{
height:30px !important;
}

body.keyboardFocusClass a.ms-crm-View-Name.keyboardFocusClass{
height:35px !important;
margin-top:2px;
margin-bottom:2px;
}

body.keyboardFocusClass #TabnavTabLogoTextId a.keyboardFocusClass{
display:inline !important;
}

body.keyboardFocusClass a.navTourLearningLink.keyboardFocusClass{
border:none !important;
}


body.keyboardFocusClass div.navTourLearningLinksContainer.keyboardFocusClass{
height: 30px;
padding: 2px;
}

body.keyboardFocusClass li.nav-subgroup.keyboardFocusClass a.nav-rowBody.keyboardFocusClass{
border:none !important;
}

body.keyboardFocusClass a.navTourLearningLink.keyboardFocusClass div.navTourLearningLinkText.navTourSmallText{
top:auto !important;
}

body.keyboardFocusClass a#filterButtonLink.keyboardFocusClass,
body.keyboardFocusClass a#refreshButtonLink.keyboardFocusClass{
padding-top: 6px !important;
}

body.keyboardFocusClass a.selected.navActionButtonContainer.keyboardFocusClass{
margin-top: -4px;
<% if (CrmStyles.IsRightToLeft)
{ %>
margin-right: 4px;
<% }
else
{ %>
margin-left: 4px;
<% } %>
}

div.ErrorDetailsDiv, div.NotificationDetailsDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% }else{ %>
text-align: left;
<% } %>
}

div.NotificationDetailsDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 55px;
<% }else{ %>
padding-left: 55px;
<% } %>
color: #666666;
}

ul.TechnicalDetailsList, ul.GeneralDetailsList
{
list-style-type: none;
padding-top: 10px;
padding-bottom: 10px;
}

ul.TechnicalDetailsList
{
display: none;
}

button.TechnicalDetailsButton
{
width: auto;
}.ms-crm-ImageStrip-ico_lrg_1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -1px -1px;width:66px;height:48px;overflow:hidden;}
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
.ms-crm-ImageStrip-ico_18_123{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -145px -136px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1084{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1090{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_4206{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -163px -37px;width:16px;height:16px;overflow:hidden;}
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
.ms-crm-ImageStrip-ico_18_1088{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -221px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_1038{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -221px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_18_9507{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/entity_imgs.png").ToString()%>) no-repeat scroll -235px -199px;width:16px;height:16px;overflow:hidden;}
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
.ms-crm-ImageStrip-visorclose{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -67px -1px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visoropenhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -67px -12px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visorclosehover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -23px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-visoropen{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -34px;width:59px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-btn_off_cal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -45px;width:36px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-btn_dis_cal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -85px;width:36px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Timer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -66px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Timer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -106px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_border{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -39px -85px;width:1px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -42px -100px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefresh_cleardown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -74px -100px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefresh_clear{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -128px -1px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefreshhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -103px -45px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefreshdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -106px -77px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-search_visualrefresh_clearhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -140px;width:30px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Recent{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -33px -140px;width:30px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Enabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -65px -132px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchytoolbar{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -106px -109px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-popout{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -95px -139px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Enabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -125px -139px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Disabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -160px -1px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Disabled_proxy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -135px -33px;width:28px;height:28px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchySplitterGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -165px -31px;width:5px;height:26px;overflow:hidden;}
.ms-crm-ImageStrip-more_right_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -138px -63px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -138px -84px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -164px -63px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_right_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -138px -105px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-more_left{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -164px -84px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Home{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -164px -105px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_warning{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -155px -131px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-DefaultSitemapArea_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -172px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-more_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -33px -166px;width:24px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_error{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -59px -166px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_icn_info{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -85px -169px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-searchhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -111px -169px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-disabled_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -172px -31px;width:15px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Enabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -134px -169px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_btn_dis{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -155px -157px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_btn_on{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -1px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchcleardown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -23px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Up_Disabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -45px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Disabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -68px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-rightcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -35px -106px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-default_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -99px -66px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-vertical_line_transparent{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -103px -77px;width:1px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-searchclearhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -91px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchclear{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -113px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-searchdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -181px -135px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -27px -172px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -178px -157px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -204px -135px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -184px -157px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-qfind{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -198px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-search{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -33px -187px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -27px -195px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -56px -192px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -62px -192px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -68px -192px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Black_mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -74px -192px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-btn_off_lookup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -80px -195px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-search_disable{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -103px -195px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-btn_dis_lookup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -126px -192px;width:21px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-hover_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -155px -179px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-selected_leftcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -159px -179px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-hover_rightcap{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -149px -192px;width:2px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-enabled_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -163px -180px;width:15px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-Down_Enabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -180px -180px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_hSpacer{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -190px -157px;width:4px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-openview_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -1px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-refresh_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -23px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-enlarge_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -211px -45px;width:20px;height:20px;overflow:hidden;}
.ms-crm-ImageStrip-search_normal{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -211px -67px;width:20px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-more_up_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -87px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -105px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-horizontalGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -42px -85px;width:19px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-more_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -213px -123px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_down_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -210px -141px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_up_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -196px -159px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-more_down_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -201px -177px;width:19px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-verticalGripper{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -201px -195px;width:3px;height:19px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -222px -159px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -228px -159px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -222px -178px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -206px -195px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_ribboncollapse{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -220px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_ribbonexpand{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -20px -220px;width:17px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook14Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -39px -209px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook12Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -45px -209px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Black_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -51px -215px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Silver_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -57px -215px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-Outlook15Blue_mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -63px -215px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_hSpacerGrid{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -69px -215px;width:4px;height:17px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_click{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -75px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_warn16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -93px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_crit16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -111px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_alert16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -129px -214px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-notif_icn_info16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -147px -215px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -165px -203px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-workplace_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -183px -203px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Hierachy_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -165px -221px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-hierarchy{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -183px -221px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tab_right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -201px -216px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-close{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -235px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -235px -19px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -235px -34px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-drill_down_for_tree_control_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -233px -49px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft_HC_B{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -233px -64px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft_HC_W{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -82px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight_HC_B{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -100px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight_HC_W{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -118px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-More_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -136px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_expired{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -154px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_near_expiration{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -234px -172px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-timercontrol_success{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -212px -197px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-marketing_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -230px -190px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tab_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -219px -215px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-services_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -1px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-settings_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -19px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-resourcecenter_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -37px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-sales_24x24{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -55px -234px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-mnuDown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -73px -235px;width:11px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-msgbar_close_button_cold{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -86px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -104px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navLeft_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -122px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -140px -233px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navRight{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -158px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navdown_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -176px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navup_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -194px -239px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -212px -234px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-navup{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -230px -233px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_unchecked{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -237px -208px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-multiselect_checked{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -253px -1px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -253px -16px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-tab_rightRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -253px -30px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-enlarge{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -253px -44px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-openview{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -251px -58px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-powerbidashboard{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -72px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -86px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-tab_downRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -100px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-right{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -114px;width:12px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -136px -126px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow_HC{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -128px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-up_arrow_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -141px;width:11px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-frm_recommended{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -154px;width:10px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-frm_required{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -167px;width:10px;height:11px;overflow:hidden;}
.ms-crm-ImageStrip-email_expand{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -252px -180px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-email_collpase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -248px -192px;width:10px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-mnu_rArrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/control_imgs.png").ToString()%>) no-repeat scroll -126px -33px;width:4px;height:7px;overflow:hidden;}
.ms-crm-ImageStrip-chartsideliteTopBottom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -1px -1px;width:132px;height:38px;overflow:hidden;}
.ms-crm-ImageStrip-chartsidelite{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -1px -41px;width:38px;height:132px;overflow:hidden;}
.ms-crm-ImageStrip-chartsideliteTopBottom_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -41px;width:112px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-chartsidelite_VisualRefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -155px -1px;width:24px;height:112px;overflow:hidden;}
.ms-crm-ImageStrip-horizontalPreLoader{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -67px;width:55px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-progress{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -74px;width:36px;height:36px;overflow:hidden;}
.ms-crm-ImageStrip-Dropdown_Arrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -79px -74px;width:19px;height:22px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -112px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -100px -67px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButtonDisabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -62px -112px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButtonDisabled{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -135px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveDownButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -1px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-moveUpButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -121px -67px;width:19px;height:21px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -135px -1px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineBottom{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -143px -1px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLine{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -135px -21px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formNavTreeLineBottomRTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -143px -21px;width:6px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-formSelectorDropdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -100px -90px;width:18px;height:18px;overflow:hidden;}
.ms-crm-ImageStrip-grid_visualrefresh_refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -83px -110px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_filter{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -62px -135px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -202px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -24px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_hover_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -120px -90px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -101px -110px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_visualrefresh_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -83px -128px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_visualrefresh_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -62px -153px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_visualrefresh_hover_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -220px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_filter_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -202px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_visualrefresh_filter_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -42px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_visualrefresh_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -120px -108px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_visualrefresh_hover_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -101px -128px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -80px -146px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_FL0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -220px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_R0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -199px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_L1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -60px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_excel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -98px -146px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_assign{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -119px -126px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-reset{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -217px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-asc{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -199px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-desc{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -78px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-disablereset{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -116px -146px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_delete{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -137px -126px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-editrulebutton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -155px -115px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_print{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -217px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -199px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-addButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -181px -96px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-lockButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -134px -144px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-lockButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -173px -115px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-unlockButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -155px -133px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-chartside{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -217px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-unlockButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -199px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButtonBin{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -191px -114px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButtonHover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -173px -133px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox_visualrefresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -152px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox_visualrefresh_light{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -217px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activateButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -170px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deleteButton{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -209px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_R1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -191px -132px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_FL1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -227px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-page_visualrefresh_L0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -209px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_visualrefresh_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -188px -151px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -227px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pinned_16_RTL{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -209px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-pin_hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -227px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_visualrefresh_filter{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -1px -175px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_visualrefresh_refresh_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -19px -175px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_refresh_hover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -41px -158px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-grid_refresh{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -59px -171px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-stripDivider{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -79px -98px;width:14px;height:2px;overflow:hidden;}
.ms-crm-ImageStrip-resize{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -151px -1px;width:2px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-sorting_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -142px -67px;width:10px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-dropdown_wfilter{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -37px -176px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-dropdown{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -138px -90px;width:14px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-sorting_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -138px -106px;width:10px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-bar_line{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -151px -17px;width:2px;height:14px;overflow:hidden;}
.ms-crm-ImageStrip-addButtonDisable{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -80px -164px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-openassociatedgridview{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -95px -164px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-openassociatedgridviewhover{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -110px -164px;width:13px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-bar_up{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -79px -102px;width:13px;height:5px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox_light{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -77px -179px;width:12px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-checkbox{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -91px -179px;width:12px;height:10px;overflow:hidden;}
.ms-crm-ImageStrip-page_L1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -238px -1px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_R1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -238px -12px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_R0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -238px -23px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-navliteleft{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -238px -34px;width:7px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-navliteright{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -235px -45px;width:7px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_L0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -105px -179px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_FL1{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -125px -164px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-row_selected{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -235px -56px;width:5px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-page_FL0{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -115px -179px;width:8px;height:9px;overflow:hidden;}
.ms-crm-ImageStrip-AdvFindDownArrow{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -135px -162px;width:7px;height:7px;overflow:hidden;}
.ms-crm-ImageStrip-d{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -142px -83px;width:7px;height:4px;overflow:hidden;}
.ms-crm-ImageStrip-r{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/grid_ctrl_imgs.png").ToString()%>) no-repeat scroll -53px -176px;width:4px;height:7px;overflow:hidden;}
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
.ms-crm-ImageStrip-WebResourcePreview_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -119px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Remove_Form_Comp_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Redo_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Body_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SelectNavigation_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormProperties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_1col_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Reference_Panel_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_4cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -153px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_3cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SwitchToModernLayout_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Section_2cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2cols_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_3colsNNN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -187px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Add_Subgrid_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -187px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Add_QuickViewForm_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Web_Resource_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InsertIFrame_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-thmb_Bing_Favicon_pc_orange_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -187px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssignDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShareDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Assign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -221px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-saveaschart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -221px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChartsBarGraph_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-barchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-exportchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-piechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-tagchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -221px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-importchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -205px;width:32px;height:31px;overflow:hidden;}
.ms-crm-ImageStrip-Close_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-printpreview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DuplicateDetection_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-crmoptions32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Contents_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -255px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Troubleshooting_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -255px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-HelpUpdates_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Privacy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Activate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Reschedule_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShowSchedulingConflict_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -255px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DashboardProperties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IFRAME_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -238px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MS_Social_Listening_Icon_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InteractionWall_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseHeightDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseWidthDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFullText_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchTitle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchArticleNumber_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchExactWords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddLocations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditLocations_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Deactivate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-activityclose32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -289px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddToQueue_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-GrantPermissions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -272px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-copyshortcut32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-runworkflow32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-runreport32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -273px;width:32px;height:32px;overflow:hidden;<% if (CrmStyles.IsRightToLeft) { %>Filter:FlipH;-webkit-transform:rotateY(180deg);-moz-transform:rotateY(180deg);-ms-transform:rotateY(180deg);background-color:white;<%} %>}
.ms-crm-ImageStrip-attachment_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Email_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4207{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointmentInstance_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -323px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -323px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateChildCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssociateChildCase_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-EditForm_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAll_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-edit32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DetectAll_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -323px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CopyView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-exporttoexcel32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -306px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-filter32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomPreviewPane_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-savefiltersasview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ChartPane_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-editchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendDirectMail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SystemViews_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDelete_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -357px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingStandard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -357px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AssignRoles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-MergeRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Relationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedCustomerRelationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SelectedRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-QuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Opportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-activitysaveascancelled32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -357px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DisqualifyLead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BusinessRule_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -340px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertLead_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SetRegarding_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-customactivity32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Queues_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tiles_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsAllPages_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedQuickCampaign_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomerRelationship_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -391px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedOpportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -391px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddToMarketingList_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DesignView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-expandchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-savefilters32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-setasdefaultview32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ExportTemplate_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Copy_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteSelected_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -391px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-PublishEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CustomizeEntity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -374px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4401{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-mailmerge32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4204{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4210{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4212{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-startdialog32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendShortcut_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-QueueItemDetails_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnection_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertKnowledgeArticle_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -425px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertOpportunity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -425px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Actions_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newwindow32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchUseLikeWords_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchSubject_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SearchKeyword_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ACIControl_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseWidthDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseHeightDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-KMControl_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-powerbitile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-deletechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -425px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SendAsEmail_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-changestatus32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -408px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleServiceActivity_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-entity32_4201{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Legal_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-CRMOnlineLive_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-AdministratorGuide_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-HelpOnThisPage_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDeleteWizard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tools_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-saveandnew32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -409px;width:32px;height:31px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-funnelchart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-linechart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-areachart_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ColumnChart32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndCloseChart_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Sharing_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteDashboard32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-NewDashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Dashboard_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -341px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-InsertNavigationLink_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -375px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Timeline_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -409px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Spacer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -459px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Delve_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_2_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -69px -442px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_3colsNWN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -103px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsWW_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -137px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsWN_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_2colsNW_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -205px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Tab_1col_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -239px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreview_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -273px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Header_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomize_Footer_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -341px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Undo_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -375px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Properties_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -409px -442px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-ShowDependencies_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -443px -443px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-DownloadXML_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -493px -1px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Hide_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -493px -35px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreviewMobile_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -69px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Save_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -103px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-SaveView_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -137px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-Results_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -171px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-advancedfind32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -205px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-importdata32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -239px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-newrecord32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -273px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-OpenAssociatedGridView32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -307px;width:32px;height:32px;overflow:hidden;}
.ms-crm-ImageStrip-32_save_route{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -341px;width:31px;height:30px;overflow:hidden;}
.ms-crm-ImageStrip-Note_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -373px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-Clear_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -399px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsCompleted_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -425px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-noteyellowadd32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -451px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-CRM_Activity_Command_FolderTracking_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -493px;width:24px;height:24px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FourColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -53px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Case_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -27px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RefreshDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -45px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-areachart_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -71px -476px;width:16px;height:13px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDeleteWizard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -63px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFullText_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -81px -491px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsCompleted_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -99px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddAppointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -117px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_approveemailofqueue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -99px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailToCaseOfQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -135px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveViewAsDefault_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -117px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SelectedRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RunWorkflow_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -135px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateInCrm{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-customactivity16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -153px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFilter_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -189px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-New_Entitlement_Template_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -171px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_checkin_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -207px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_word{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -189px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_powerpoint{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -225px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -207px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DocumentLocation_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -243px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewEditLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -225px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReturnToList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -261px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShowDocumentSuggestions_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -243px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Tiles_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -279px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Queues_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -261px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OpenInSharePoint_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -297px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewAddLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -279px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UploadDocument_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -315px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_note{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -297px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ico_16_9507_Excel{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -333px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_discardcheckout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -315px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SharePoint_checkout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -351px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchFilter_Hover_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -333px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BusinessRule_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -369px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DisqualifyLead_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -351px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertLead_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -387px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-setregarding16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -369px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activitysaveascancelled16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -373px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsOnCurrentPage_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -405px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Opportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -387px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -391px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QuickCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -423px -476px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AllRecordsAllPages_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -405px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-appointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -409px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedQuickCampaign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -423px -494px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomerRelationship_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -441px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateRelatedOpportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -427px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Relationship_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddToMarketingList_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -441px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MergeRecords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -445px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -477px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssignRoles_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -459px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetRegarding{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -503px -463px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-logo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -477px -495px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveFilterAsNewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -495px -481px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingSocialProfile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -495px -499px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddExistingStandard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -519px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SystemView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -519px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DesignView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendDirectMail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-expandchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-editchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-newchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChartPane_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveFiltersAsNewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-savefilters16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomPreviewPane_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Import16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-filter16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ExportTemplate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-exporttoexcel16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CopyView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Copy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DetectAll_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteSelected_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DetectDuplicates_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Edit_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAll_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishEntity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CustomEntity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-formdesign16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -513px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddCampaignResponse_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -517px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-mailmerge16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -517px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailToCaseOfQueue_32{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_rejectemailofqueue{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_save_route{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -527px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-16_routecase{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -69px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateChildCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -87px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssociateChildCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -105px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -123px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -141px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RecurringAppointmentInstance_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -159px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddFax_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -177px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddLetter_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -195px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddPhone_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -213px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddEmail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -231px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddNote_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -249px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddTask_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -267px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-attachment_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -285px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RunReport_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -303px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-startdialog16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -321px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-StartWorkflow_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -35px -51px;width:14px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendShortcut_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -511px -339px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EmailLink_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -357px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-copyshortcut16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -375px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-GrantPermissions_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -393px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QueueItemDetails_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -411px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddToQueue_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -429px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddConnection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -447px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -521px -465px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertKnowledgeArticle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -513px -483px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertCase_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -501px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ConvertOpportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -519px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-activityclose16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -537px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-newwindow16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -537px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deactivate16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Deactivate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MarkAsComplete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AddLocations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchUseLikeWords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchExactWords_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchSubject_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchArticleNumber_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchInSubject_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchTitle_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SearchKeyword_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseWidthDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ACIControl_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DecreaseHeightDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseHeightDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IncreaseWidthDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboardComponent_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InteractionWall_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-KMControl_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-MS_Social_Listening_Icon_Default_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-powerbitile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-IFRAME_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-deletechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DashboardProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -531px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SendAsEmail_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -535px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShowSchedulingConflict_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -535px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChangeStatus_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -537px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Reschedule_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ScheduleServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ServiceActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -545px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CRMActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Activate16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Activate_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Privacy_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Legal_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-HelpUpdates_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CRMOnlineLive_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Troubleshooting_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AdministratorGuide_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Contents_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-HelpOnThisPage_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Options_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-BulkDelete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DuplicateDetection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Tools_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PrintPreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -529px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-saveandnew16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Close_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-clearRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -379px;width:16px;height:15px;overflow:hidden;}
.ms-crm-ImageStrip-bottomRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -396px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-topRules_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -414px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-importchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -432px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-doughnutchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -450px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-tagchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -539px -468px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-funnelchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -486px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-piechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -504px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-linechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -522px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-exportchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -555px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ColumnChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -555px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-barchart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ChartsBarGraph_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-saveaschart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndCloseChart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-savechart16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Refresh_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Assign_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Share_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Sharing_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ShareDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SetAsDefaultDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DeleteDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AssignDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditDashboard16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDashboard_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Contact_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-InsertNavigationLink_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-thmb_Bing_Favicon_pc_orange_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Timeline_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Notes_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -397px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Spacer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -415px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Webresource_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -433px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Add_QuickViewForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -451px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Delve_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -469px -549px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Subgrid_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -487px -553px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumns_2_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -505px -553px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumnSection_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -523px -555px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabWW_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -541px -540px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabWN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -1px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumnsTabNWN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -19px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumnsTabNNN_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -563px -37px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-TwoColumnsTabNW_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -55px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumnTab_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -73px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SwitchToModernLayout_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -91px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Entitlement_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -109px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Recent_Opportunity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -127px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Reference_Panel_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -145px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ThreeColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -163px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OneColumn_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -181px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -199px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-UpdateForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -217px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ReadOnlyForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -235px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -253px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-CreateForm_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -271px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Body_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -289px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SelectNavigation_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -307px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Header_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -547px -325px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormCustomization_Footer_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -343px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAsDraft_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -361px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Redo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -379px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Undo_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -397px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-RemoveField_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -415px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Properties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -433px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Publish_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -557px -451px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SolutionLayers{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -469px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-show_dependency{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -487px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-WebResourcePreview_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -505px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-PublishAllCustomizations_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -523px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-ImportData_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -559px -541px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewActivity_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -1px -573px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Help_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -19px -573px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Query_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -37px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -55px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAndClose_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -73px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveAs_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -91px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditProperties_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -109px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-QueryLineGrouping_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -127px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-DownloadXML_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -145px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-delete16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -163px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Delete_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -181px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Hide_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -199px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Clear_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -217px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-EditColumns_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -235px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-FormPreviewMobile_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -253px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Save_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -271px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-SaveView_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -289px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-Results_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -307px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-AdvancedFind_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -325px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-NewRecord_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -343px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-New_16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -361px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-OpenAssociatedGridView16{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -379px -567px;width:16px;height:16px;overflow:hidden;}
.ms-crm-ImageStrip-commandbar_divider{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -89px -476px;width:1px;height:12px;overflow:hidden;}
.ms-crm-ImageStrip-arrow_down{background:transparent url(<%=CrmUri.Create("/_imgs/imagestrips/ribbonhomepage.png").ToString()%>) no-repeat scroll -27px -513px;width:5px;height:3px;overflow:hidden;}
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
