<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body
{
background-color:#ffffff;
min-height: 760px;
}

.bpfConfContent
{
margin-top:0px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
<% }else{ %>
margin-left: 30px;
<% } %>
}

.bpfConfTitle
{
color: #dc9305;
font-family: Segoe\000020UI\000020Light, Segoe UI, Arial, Sans-serif;
font-weight: lighter;
margin-top: -8px;
width: 700px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
height: 50px;
}

.bpfexpandCollapse
{
float: left;
color: #dc9305;
font-size: 12px;
font-family: Segoe UI, Arial, Sans-serif;
}

.bpfConfExpandCollapseImg
{
float: left;
margin-top: 4px;
margin-left: 4px;
padding-left: 4px;
height: 10px;
width: 10px;
}

.expandCollapseContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 47px;
<% }else{ %>
float: right;
margin-right: 47px;
<% } %>
margin-top: -20px;
cursor: pointer;
}

.bpfh1
{
margin:0px;
font-size:36px;
}

.bpfh2,
.bpfh3
{
margin:0px;
}

.bpfConfReq
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
height: 11px;
width: 10px;
}

.bpfConfOptionsImg
{
margin-left:5px;
margin-right:5px;
margin-bottom:-5px;
height: 24px;
width: 24px;
}

.wfCat
{
font-family:Segoe UI, Arial, Sans-Serif;
font-weight:normal;
color: #666666;
text-transform: uppercase;
font-size: 14px;
}

.bpfConfLabelDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
width:120px;
overflow:hidden;
margin-top:6px;
}

.bpfConfForm
{
max-height:760px;
overflow: hidden;
width:1060px;
}

.bpfConfInput
{
font-weight:normal;
background-color:#ebebe4;
}

.bpfConfDetailSpacer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
overflow:hidden;
width:228px;
height:10px;
}

.bpfConfText
{
font-size:12px;
font-family: Segoe UI, Arial, Sans-Serif;
border: 1px solid #d6d6d6;
padding: 2px;
}

.bpfConfBreadcrumbImg
{
margin-right: 10px;
margin-bottom: 2px;
height: 8px;
width: 6px;
<% if (CrmStyles.IsRightToLeft) { %>
filter:FlipH();
-webkit-transform:scaleX(-1);
-moz-transform:scaleX(-1);
-o-transform:scaleX(-1);
transform:scaleX(-1);
<% }%>
}

.bpfConfBreadcrumbHide
{
display:none;
}

input[type="text"]:disabled.bpfConfInputDisabled
{
color: #000000;
}

.bpfConfStatus
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 4px;
<% }else{ %>
float: left;
margin-left:4px;
<% } %>
font-weight:bold;
}

.bpfConfLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 5px;
<% }else{ %>
float: left;
margin-left: 5px;
<% } %>
}

.bpfStatusArea
{
padding-bottom:20px;
background-color: #ececec;
}

.bpfConfFooter
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
right: 30px;
<% }else{ %>
float: left;
left: 30px;
<% } %>
bottom:0px;

position:fixed;
background-color: #ffffff;
width:984px;
border-top-style: solid;
border-top-width: 1px;
border-top-color: #d6d6d6;

}

.bpfTabSel
{
color: #dc9305;
}

label#includedEntities
{
padding-bottom:5px;
margin-top: 0px;
}

label#includedEntities.collapsed
{
margin-top: 15px;
}

.pcc
{
height:100%;
width:100%;
min-width:700px;
padding-bottom:55px;
}

.pcc.collapsed
{
margin-top: 20px;
}

.pcc .pcc_tab_data
{
overflow:hidden;
}

.ie .pcc_options
{
display: inline-block;
}

.pcc_options
{
cursor:pointer;
margin-top:-4px;
margin-left:20px;
color: #dc9305;
}

.pc_step_req
{
display:inline-block;
overflow:hidden;
padding-top:2px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:35px;
padding-right:15px;
<% }else{ %>
padding-left:15px;
padding-right:35px;
<% } %>
}

.prc_step_rc.Chrome,
.prc_step_rc.Safari
{
display:inline-block;
margin-top: 1px;
margin-left: -5px;
}

.prc_step_rc
{
display:inline-block;
margin-top: 4px;
margin-bottom: 3px;
}

.prc_step_rc_webkit
{
display:inline-block;
margin-top: 1px;
margin-left: -5px;
}

.tabsControl.pcc_tabcontrol
{
height:93%;
padding:0px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}

.pcc_content
{
height:100%;
}
.pcc_tab_data
{
height:100% !important;
}
.pcc_event
{
display:none;
height:0px;
}

.pc_en_head
{
height: 28px;
}

.pc_en
{
height:100%;
width:100%;
position:relative;
margin-top:13px;
}

#ConfiguratorArea
{
overflow: hidden;
width: 100%;
float: left;
}

.pc_en_slc
{

top:5px;
bottom:10px;
width: 1023px;
overflow:auto;
*overflow-x:hidden;
height:300px;
margin-top:5px;
position:relative;
}

.pc_en_slc.expanded
{
height: 450px;
overflow-x:hidden;
}


.pc_stage_colh_text,
.pc_step_colh_text,
.pc_stageCategory_colh_text
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #666666;
display:inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% }else{ %>
margin-left: 5px;
<% } %>
}

.pc_step_colh_text
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 21px;
<% }else{ %>
padding-left: 21px;
<% } %>
}


.pc_field_colh_text
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 6px;
padding-right: 13px;
<% }else{ %>
padding-left: 13px;
margin-left: 6px;
<% } %>
}

.pc_required_colh_text
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% }else{ %>
margin-left: 5px;
<% } %>
}

.pc_field_colh_text,
.pc_required_colh_text
{
font-size:<%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #666666;
display:inline-block;

}

.pc_field_colh_text,
.pc_stage_colh_text,
.pc_stageCategory_colh_text,
.pc_step_colh_text,
.pc_required_colh_text
{
font-family:Segoe UI, Arial, Sans-Serif;
font-weight:normal;
vertical-align: text-top;
margin-top: -3px;
}



.pc_en_stage_head,
.pc_en_stageCategory_head,
.pc_en_step_head,
.pc_en_field_head,
.pc_en_required_head
{
display:inline-block;
vertical-align:text-bottom;
margin-bottom: 2px;
}

.pc_en_stage_head
{

width:210px;
margin-top: -3px;
}

.pc_en_required_head
{
height: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #d6d6d6;
padding-right: 4px;
margin-right: 12px;
<% }else{ %>
border-left: 1px solid #d6d6d6;
margin-left: 12px;
<% } %>
}

.pc_en_stageCategory_head
{
margin-bottom: 2px;
height: 10px;
width:160px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #d6d6d6;
padding-right: 4px;
<% }else{ %>
border-left: 1px solid #d6d6d6;
<% } %>
}

.pc_step_colh_text,
.pc_stageCategory_colh_text,
.pc_required_colh_text
{
margin-bottom: 0px;
}

.pc_stage_colh_text
{
margin-bottom: -4px;
vertical-align:text-bottom;
}

.pc_en_step_head
{
width: 185px;
height: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #d6d6d6;
padding-right: 5px;
margin-right: 25px;
<% }else{ %>
border-left: 1px solid #d6d6d6;
margin-left: 30px;
<% } %>
}

.pc_field_colh_text
{
margin-bottom: 0px;
}

.pc_en_field_head
{
width:206px;
height: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
border-right: 1px solid #d6d6d6;
padding-right: 5px;
margin-right: 45px;
<% }else{ %>
border-left: 1px solid #d6d6d6;
margin-left: 55px;
<% } %>

}




.pc_en_stage_body
{
vertical-align:top;
display:inline-block;


min-height:23px;
padding-top:2px;
padding-bottom:2px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% }else{ %>
padding-left:5px;
<% } %>


width:165px;
text-transform:uppercase;
}

.pc_en_step_body
{
width:232px;
}

.pc_en_field_body
{
width:214px;
}

.pc_en_step_body,
.pc_en_field_body
{
height:23px;
overflow:hidden;
display:inline-block;




padding: 0px 2px 2px 0px;
}

.pc_en_field_body .ms-crm-Inline-Value,
.pc_en_field_body .ms-crm-Inline-Edit input.ms-crm-InlineInput
{
font-weight:500;
}



.pc_stc
{
position:relative;
}

.pc_stc_hasnext
{
border-bottom: solid 1px #d6d6d6;
}


.pc_arrow
{
position:absolute;
top:0px;
bottom:0px;
width:25px;
background-color: #666666;
}

.pc_arrow_hov
{
background-color: #262626 !important;
}

.pc_arrow_sel
{
background-color: #dc9305 !important;
}

.pc_arrow_hasNext
{
background-image:url('/_imgs/ProcessControl/ArrowTipDip.png');
background-repeat:no-repeat;
width:25px;
position:absolute;
bottom:0px;
background-position: right bottom;
}

.pc_arrow_hasPrev
{
background-image:url('/_imgs/ProcessControl/arrowTipDip.png');
background-repeat:no-repeat;
width:25px;
vertical-align:top;
background-position: left top;
}

.pc_st_arrowc
{

width:35px;
display:inline-block;
}



.pc_stage_edit
{
color:#444444;
text-transform:uppercase;
}

.pcc .ms-crm-Inline-Edit
{
*margin-top:-2px;
}

.ms-crm-Inline-Value.pc_inline_value
{
font-family:Segoe UI, Arial, Sans-Serif;
font-weight:normal;
color:#000000;
}

.ms-crm-Inline-Value.pc_stage_value.pc_inline_value
{
text-overflow:ellipsis;
text-transform:uppercase;
color:#000000;
font-family:Segoe UI, Arial, Sans-Serif;
}

.ms-crm-Inline-Value.pc_inline_value span
{
width: 100%;
text-overflow: ellipsis;
overflow: hidden;
}

.pc_en_head_line
{
border-bottom: solid 1px #d6d6d6;
border-top: solid 1px #d6d6d6;
width: 982px;
padding-bottom: 2px;
}
.pc_st_stc
{
padding-top:5px;
padding-bottom:10px;
}

.pc_steplistc,
.pc_st_stc,
.pc_steplistc
{
display:inline-block;
}

.pc_steplistc
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-right: 27px;
<% }else{ %>
float: right;
margin-left: 27px;
<% } %>
}

.pc_en_colh_img
{
width:16px;
height:16px;
display:inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:10px;
<% }else{ %>
margin-left:10px;
<% } %>

vertical-align:baseline;
margin-bottom: -1px;
margin-top: -1px;
}

.pc_en_colh_ss_div
{
height: 19px;
display:inline-block;
vertical-align:baseline;
overflow: hidden;
position: absolute;
top: -8px;
margin-top: 3px;
}

.safari .pc_en_colh_ss_div
{
margin-top: 3px;
}

.ie8 .pc_en_colh_ss_div
{
margin-top: 1px;
}

.ie .pc_en_colh_ss_div
{
top: -6px;
}

.pc_en_colh_ss_hover
{
background-color: #fde6b9;
}

.pc_en_colh_ssp_div
{
display: inline-block;
height: 25px;
width: 25px;
position: relative;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% }else{ %>
margin-left: 5px;
<% } %>
}

.pc_en_colh_ssp_img
{
position: absolute;
top: 17%;
left: 50%;
margin-top: -6.5px;
margin-left: -6.5px;
cursor: pointer;
}

.pc_en_colh_ssp_img_disabled
{
cursor: default;
margin-top: -14px;
vertical-align: bottom;
}

.pc_en_colh_ssp_img_enabled
{
cursor: pointer;
vertical-align: bottom;
}

.pc_en_colh_ssa_div
{
display: inline-block;
height: 25px;
width: 14px;
position: relative;
visibility: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: -3px;
<% }else{ %>
margin-left: -3px;
<% } %>

}

.pc_en_colh_ssa_img
{
margin-bottom: 7px;
}

.pc_en_colh_ss_menu
{
display: none;
position: absolute;
z-index: 100;
background-color: white;
border: 1px solid gray;
width: 160px;
}

.pc_en_colh_ss_menu li
{
padding: 5px;
width: 150px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}

.pc_img_c
{
width:16px;
height:16px;
cursor:pointer;
margin-left: 1px;
margin-top: -1px;
}
.pc_step
{

height:27px;
overflow:hidden;
}

.pc_step.pc_highContrast
{

height:29px;
}

.pc_step_namecontrol_container
{
padding:2px;
display:inline-block;
}

.pc_stepmo,
.pc_stephl
{
height:23px;
padding-bottom:2px;
padding-top:2px;
}


.pc_stephl,
.pc_stagehl
{
background-color: #dc9305 !important;
}


.pc_stephl.pc_highContrastFocused,
.pc_stagehl.pc_highContrastFocused,
.pc_arrow_sel.pc_highContrastFocused
{
border: 1px  !important;
border-color: red  !important;
border-style: solid  !important;
}

pc_stepmo
{
height:23px;
}

.pc_stepmo,
.pc_stagemo
{
background-color: #fde6b9;
}

.pc_stepmo.pc_highContrastHover,
.pc_stagemo.pc_highContrastHover
{
border: 1px;
border-color: red;
border-style: dashed;
}

.pc_step_dc,
.pc_stg_dc
{
display:inline-block;
vertical-align:top;
width:16px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:2px;
<% }else{ %>
margin-left:2px;
<% } %>
height:16px;
}
.pc_stg_dc
{
padding-top:5px;
*padding-top:10px;
}

.pc_step_del,
.pc_stg_del
{
width:16px;
height:16px;
display:none;
}

.pc_step_del_hov,
.pc_stg_del_hov,
.pc_step_del_sel,
.pc_stg_del_sel
{
display:inline-block !important;
margin-top:5px;
}

.pc_step_del_hov,
.pc_step_del_sel
{
margin-top:5px;
}


.ui-autocomplete-wrapper
{

<% if (CrmStyles.IsRightToLeft) { %>
margin-left:29px
<% }else{ %>
margin-right:29px
<% } %>
}

.ui-combobox-toggle
{
position:absolute;
top:0px;
bottom:0px;
<% if (CrmStyles.IsRightToLeft) { %>
left:0px;
border-left: solid 1px #CCCCCC;
<% }else{ %>
right:0px;
border-right: solid 1px #CCCCCC;
<% } %>
border-top: solid 1px #CCCCCC;
border-bottom: solid 1px #CCCCCC;
width:23px;
background-color:#ffffff;
*margin-top:-1px;
*margin-bottom:1px;
}
.ui-menu
{
background-color:#ffffff;
border: solid 1px #CCCCCC;
max-height:150px;
overflow:y:auto;
overflow-x:hidden;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:5px;
<% }else{ %>
padding-right:5px;
<% } %>
display:inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
width:160px;
<% }else{ %>
width:185px;
<% } %>
position:absolute;
overflow-y:auto;
}

.ui-menu .ui-menu-item a
{
display:block;
line-height:2;
padding: 1px 5px;
color:#666666;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
}

.ui-state-hover
{
background-color:#fde6b9;
}
.ui-autocomplete-input
{

<% if (CrmStyles.IsRightToLeft) { %>
margin-left:-29px !important;
<% }else{ %>
margin-right:-29px !important;
<% } %>
}

.ui-ac-dropdown-img
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:5px;
margin-top:3px;
<% }else{ %>
margin-left:5px;
margin-top:3px;
<% } %>

}



.pcc .ms-crm-IE7-Height-Fix-Dummy-Container
{
position:static;
*position:absolute;
}



.pcc_updown_div
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 52px;
margin-top: 10px;
margin-bottom: 10px;
<% }else{ %>
margin-top: 10px;
margin-bottom: 10px;
margin-left: 52px;
<% } %>
}

.pcc_updown_text
{
display: inline-block;
font-family: Segoe UI, Arial, Sans-Serif;
font-size: 12px;
color: #262626;
text-transform: uppercase;
margin: 0px;
position: absolute;
padding-top: 7px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% }else{ %>
padding-left: 10px;
<% } %>
white-space: nowrap;
}

.pcc_updown_text_disabled
{
color: #B1B1B1;
}

.confContainer
{
min-width:900px;
}

.configuratorDetailsDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
width:378px;
margin-bottom: 8px;
}

.configuratorControlsDiv
{
margin-top:10px;
height:20px;
}

.configuratorTextAreaDiv
{
height:60px;
width: 856px;
margin:0px;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% }else{ %>
float:left;
<% } %>
}

.configuratorLabelDiv
{
float:left;
}

.confDetailArea
{
height:160px;
margin-top:10px;
width:984px;
}

.confLabel
{
overflow: hidden;
text-overflow: ellipsis;
max-width: 100px;
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
<% }else{ %>
float:left;
<% } %>
}

.confInput
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
margin-right: 0px;
<% }else{ %>
float:left;
margin-left:0px;
<% } %>
width:250px;
}

.confDescriptionInput
{
float:left;
width:675px;
}

.confDescriptionLabel
{
<% if (CrmStyles.IsRightToLeft) { %>
float:right;
margin-right: 0px;
<% }else{ %>
float:left;
margin-right:100px;
<% } %>
width:120px;
}

.configuratorDescriptionDiv
{
clear:both;
}

.confWidgetOverlay
{
position: absolute;
top:0px;
left:0px;
}

.bpfConfEntityTabHeader
{
height:25px !important;
}

.tabsControl div#header_pcc_tabs.tabsHeader.bpfConfEntityTabHeader a.tabLink.confTabTitle
{
text-transform:uppercase;
font-size:14px;
height:19px;
color: #666666;
font-family: Segoe\000020UI\000020Light,Segoe UI Semibold, Arial, Sans-serif;
max-width: 110px;
}

.ie .tabsControl div#header_pcc_tabs.tabsHeader.bpfConfEntityTabHeader a.tabLink.confTabTitle
{
padding-top: 3px;
vertical-align: bottom;
}

.tabsControl div#header_pcc_tabs.tabsHeader.bpfConfEntityTabHeader a.tabLink.active.confTabTitle
{
color: #dc9305;
font-family: Segoe\000020UI\000020Light,Segoe UI Semibold, Arial, Sans-serif;
max-width: 110px;
}

.flyoutContainer {
font-family: Segoe UI, Tahoma, Arial;
background: white;
}

.flyoutContainer .ui-dialog-content {
border-style: solid;
border-width: 1px;
border-color: grey;
padding-bottom: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:5px;
<% }else{ %>
padding-left: 5px;
<% } %>
}

.flyoutContainer .sectionTitle {
font-size: 12px;
text-transform: uppercase;
margin-top: 4px;
margin-bottom: 10px;
font-weight: bold;
padding-top: 5px;
}

.flyoutContainer .menuItem
{
font-size: 11px;
}

.flyoutContainer .menuItemName
{
padding-bottom: 10px;
padding-top: 13px;
}

div.menuItem div,
div.sectionTitle div
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:5px;
<% }else{ %>
margin-left: 5px;
<% } %>
}

div.menuItem:hover,
div.menuItem:active,
.flyoutDelete:hover,
.flyoutDelete:active
{
background-color: #DC9305;
color: #FFFFFF;
}

.sentinelBorder{
border-width: 0 0 1px 0;
border-style: solid;
border-color: #777777;
padding-bottom: 8px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:10px;
<% }else{ %>
margin-right: 10px;
<% } %>
}

.sectionItem
{
margin-right: 10px;
}

.flyoutDelete
{
background-color: #ececec;
margin-bottom: -5px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: -5px;
<% }else{ %>
margin-left: -5px;
<% } %>
}

div.flyoutDelete div
{
font-weight: bold;
text-transform: uppercase;
font-size: 12px;
padding: 10px;
}

.sentinel
{
height: 5px;
overflow: hidden;
}

.ie8 span.pc_en_step_head img.pc_en_colh_ssp_img_enabled,
.safari span.pc_en_step_head img.pc_en_colh_ssp_img_enabled
{
margin-top: -14px;
}

.ie8 .pc_en_colh_ssp_img.ms-crm-ImageStrip-pcc_add.pc_en_colh_ssp_img_enabled,
.safari .pc_en_colh_ssp_img.ms-crm-ImageStrip-pcc_add.pc_en_colh_ssp_img_enabled
{
margin-top: -5px;
}

.ie8 SPAN.pc_en_step_head .pc_en_colh_ss_div IMG.pc_en_colh_ssp_img_disabled.ms-crm-ImageStrip-21_InactivePlus,
.safari SPAN.pc_en_step_head .pc_en_colh_ss_div IMG.pc_en_colh_ssp_img_disabled.ms-crm-ImageStrip-21_InactivePlus
{
margin-top: -13px;
}

span.pc_en_step_head img.pc_en_colh_ssp_img_enabled
{
margin-top: -5px;
<% if (CrmStyles.IsRightToLeft) { %>
left: 5px;
<% }%>
}

span.pc_en_stage_head img.pc_en_colh_ssp_img_enabled
{
margin-top: -2px;
margin-bottom: -8px;
}

span.pc_en_step_head img.pc_en_colh_ssp_img_enabled,
span.pc_en_step_head img.pc_en_colh_ssp_img_disabled
{
margin-bottom: -2px;
}

span.pc_en_colh_ss_div img.ms-crm-ImageStrip-21_InactivePlus
{
top: 50%;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: -14px;
<% }%>
}

.ie8 SPAN.pc_en_step_head .pc_en_colh_ss_div img.pc_en_colh_ssp_img.pc_en_colh_ssp_img_enabled.ms-crm-ImageStrip-21_InactivePlus.pc_en_colh_ssp_img_disabled
{
top:50%;
}

span.pc_en_colh_ss_div img.pc_en_colh_ssp_img.pc_en_colh_ssp_img_enabled.ms-crm-ImageStrip-21_InactivePlus.pc_en_colh_ssp_img_disabled
{
top: 17%;
<% if (CrmStyles.IsRightToLeft) { %>
left: 50%;
<% }%>
}

span.pc_en_field_body div.pc_inline_value.pc_inline_empty_value
{
color: #B96B08;
font-style: italic;
}

.addCloseContent
{
max-height: 325px;
overflow: auto;
}

.flyoutSectionHide
{
display: none;
}

.bpfConfFlyoutEmptySection
{
font-style: italic;
color: #666666;
height: 25px;
margin-left: 5px;
}










.ui-widget.ui-autocomplete
{
-ms-touch-action: none;
}

#pc_en_head
{
margin-top: 2px;
}

.ie10 #pc_en_head,
.ie9 #pc_en_head
{
margin-top: 0px;
margin-bottom: 2px;
}

.pc_step_colh_text,
.pc_stage_colh_text,
.pc_field_colh_text
{
max-width: 100px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}

.pc_stageCategory_colh_text
{
max-width:155px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}