<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

#processConfig .ms-crm-Inline-EditHintState .ms-crm-Inline-GradientMask
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 1px;
<% } else { %>
right: 1px;
<%} %>
}

#processConfig .ms-crm-Inline-GradientMask
{
<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<%} %>
}
.ms-crm-Inline-Validation
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:12px;
<% } %>
}

#processConfig .stage-name .ms-crm-Inline-GradientMask
{
height: 26px;
}

#processConfig .pc_stephl .ms-crm-Inline-GradientMask,
#processConfig .pc_step.hover .ms-crm-Inline-GradientMask,
#processConfig .pc_step.selected .ms-crm-Inline-GradientMask
{
background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(212, 212, 212) 25%,
rgba(212, 212, 212, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(212, 212, 212)),
color-stop(100%, rgba(212, 212, 212, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(212, 212, 212) 25%,
rgba(212, 212, 212, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(212, 212, 212) 25%,
rgba(212, 212, 212, 0) 100%);
background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(212, 212, 212) 25%,
rgba(212, 212, 212, 0) 100%);



<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#D4D4D4',
endColorstr='#40D4D4D4',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40D4D4D4',
endColorstr='#D4D4D4',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(212, 212, 212) 25%,
rgba(212, 212, 212, 0) 100%);
}

#processConfig .ms-crm-Inline-GradientMask,
#processConfig .pc_stephl .ms-crm-Inline-EditHintState .ms-crm-Inline-GradientMask,
#processConfig .pc_step .ms-crm-Inline-EditHintState .ms-crm-Inline-GradientMask
{
background: -moz-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(236, 236, 236) 25%,
rgba(236, 236, 236, 0) 100%);

background: -webkit-gradient(
linear,
<% if (CrmStyles.IsRightToLeft) { %>
left,
right,
<% } else { %>
right,
left,
<%} %>
color-stop(25%, rgb(236, 236, 236)),
color-stop(100%, rgba(236, 236, 236, 0)));

background: -webkit-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(236, 236, 236) 25%,
rgba(236, 236, 236, 0) 100%);

background: -o-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(236, 236, 236) 25%,
rgba(236, 236, 236, 0) 100%);
background: -ms-linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(236, 236, 236) 25%,
rgba(236, 236, 236, 0) 100%);



<%if( CrmStyles.IsRightToLeft && Request.Browser.MajorVersion <= 8 ){ %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#EFEFEF',
endColorstr='#40EFEFEF',
GradientType=1);
<% } else { %>
filter: progid:DXImageTransform.Microsoft.gradient(
startColorstr='#40EFEFEF',
endColorstr='#EFEFEF',
GradientType=1);
<%} %>

background: linear-gradient(
<% if (CrmStyles.IsRightToLeft) { %>
left,
<% } else { %>
right,
<%} %>
rgb(236, 236, 236) 25%,
rgba(236, 236, 236, 0) 100%);
}

.bpfConfForm
{
min-width: 800px;
}

.bpfConfForm .bpfConfContent
{
position: absolute;
overflow: auto;
top: 0px;
left: 0px;
right: 0px;
bottom: 83px;
}

.bpfConfForm .confHeader,
.bpfConfForm .confDetailArea,
.bpfConfForm .ui-dialog-content
{
margin: 17px 30px;
}

.bpfConfForm .stage
{
overflow: visible;
width: 861px;
margin-bottom: 26px;
background-color: white;
}

.bpfConfForm .stage .body
{
border: 1px solid;
background-color: #efefef;
position: relative;
padding-bottom: 0px;

<% if (CrmStyles.IsRightToLeft) { %>
float: right;
border-right-width: 9px;
<% }else{ %>
float: left;
border-left-width: 9px;
<% } %>
}

.bpfConfForm .stage .body label
{
color: #444444;
font-family: "Segoe UI",Tahoma,Arial;
font-size: 12px;
font-weight:500;
}

.bpfConfForm .stage .body .details.column
{
width: 251px;
margin-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
}

.bpfConfForm .stage .body .details.column label
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 18px;
<% }else{ %>
margin-left: 18px
<% } %>
}

.steps.column
{
width: 598px;

<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.bpfConfForm .stage .body .delete.column
{
position: absolute;
top: 0px;

<% if (CrmStyles.IsRightToLeft) { %>
left: 0px;
<% } else { %>
right: 0px;
<% } %>
}

.button.delete-stage
{
margin-top: 8px;
padding: 0;
width: 12px;
height: 12px;
background: none;
border: none;
display: none;

<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 8px;
<% } else { %>
margin-right: 8px;
<% } %>
}

.bpfConfForm .stage .footer
{
clear: both;
}

.conditionbranch
{
margin-bottom: 26px;
}

.bpfConfForm .stage .footer .button,
.conditionbranch .button.add-stage
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
padding-right: 5px;
margin-right: 0px;
margin-left: 1px;
<% }else{ %>
padding-right: 10px;
padding-left: 5px;
margin-right: 1px;
margin-left: 0px;
<% } %>
padding-top: 0px;
padding-bottom: 0px;
margin-top: 3px;
margin-bottom: 0px;
width: auto;
border: none;
background: #ffffff;
margin: 3px 1px 0px 0px;
}

.condition .conditionbranch .expressioncontainer .ms-crm-InlineMultiPicklist
{
width: 100%;
}

.condition .conditionbranch .expressioncontainer .ms-crm-InlineMultiPicklist label
{
width: 78%;
}

.bpfConfForm .stage .button.add-step
{
background: none;
border: none;
padding: 0;
margin: 0px 0px 12px 0px;
width: 13px;
height: 13px;
overflow: hidden;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% }else{ %>
margin-left: 23px;
<% } %>
}

.bpfConfForm .stage .pageSection .button.add-step
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% }else{ %>
margin-left: 23px;
<% } %>
}

.bpfConfForm .stage .steps .button.delete-step
{
display: none;
width: 12px;
height: 12px;
background: none;
border: none;
padding: 0;
margin: 0;
position: absolute;
top: 7px;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 92px;
<% }else{ %>
margin-left: 92px;
<% } %>
}

.bpfConfForm .stage .steps.pageSection .button.delete-step
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 76px;
<% }else{ %>
margin-left: 76px;
<% } %>
}

.bpfConfForm .stage .footer .button label,
.bpfConfForm .condition .button label
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% }else{ %>
margin-left: 5px;
<% } %>
font-family: "Segoe UI";
font-weight:normal;
color: #666666;
font-size: 12px;
}

.bpfConfForm .condition
{
width: 911px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 50px;
<% }else{ %>
margin-left: 50px;
<% } %>
}

.bpfConfForm .condition .condition
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 100px;
<% }else{ %>
margin-left: 100px;
<% } %>
}

.bpfConfForm .condition .stage
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 50px;
<% }else{ %>
margin-left: 50px;
<% } %>
}

.bpfConfForm .button.add-stage.conditions
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 50px;
padding-right: 0px;
<% }else{ %>
margin-left: 50px;
padding-left: 0px;
<% } %>
}

.bpfConfForm .default-cursor
{
cursor: default;
}

.bpfConfForm .clear
{
clear: both;
}

.bpfConfTitle
{
font-family: "Segoe UI Light", "Segoe UI", Arial, Sans-serif;
font-weight: lighter;
margin-top: -8px;
<% if (Request.Browser.Browser == "Safari") { %>
margin-top: -4px;
<% } %>
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
height: 50px;
}

.bpfexpandCollapse
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
font-size: 12px;
font-family: "Segoe UI", Arial, Sans-serif;
}

.bpfConfExpandCollapseImg
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
margin-top: 4px;
margin-left: 4px;
padding-left: 4px;
height: 10px;
width: 10px;
}

.expandCollapseContainer
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
cursor: pointer;
}

.expandCollapseContainer:focus
{
background-color: #D7E8F9;
}

.bpfh1
{
margin:0px;
font-size:36px;
width: 700px;
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

.wfBusinessProcessType
{
font-family:"Segoe UI", Arial, Sans-Serif;
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

.processImageDiv .bpfConfLabelDiv .setImageLink
{
color: #1160B7;
font-family: "Segoe UI", Arial, Sans-serif;
}

.setImageLink:hover
{
text-decoration: underline
}


.bpfConfText
{
font-size:12px;
font-family: "Segoe UI", Arial, Sans-Serif;
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
display: inline-block;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 4px;
<% }else{ %>
margin-left:4px;
<% } %>
font-weight:bold;
}

.bpfConfLabel
{
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% }else{ %>
margin-left: 5px;
<% } %>
}

.bpfStatusArea
{
background-color: #ececec;
line-height: 30px;
}

.bpfConfFooter
{
position: absolute;
left: 30px;
right: 30px;
bottom: 0px;
background-color: #ffffff;
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
padding-bottom:22px;
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

.prc_step_rc.Chrome,
.prc_step_rc.Safari
{
display:inline-block;
}

.prc_step_rc
{
display:inline-block;
}

.prc_step_rc_webkit
{
display:inline-block;
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
font-family:"Segoe UI", Arial, Sans-Serif;
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

.pc_en_step_body,
.pc_en_field_body,
.pc_en_source_body
{
width:230px;
height:23px;
overflow:hidden;
display:inline-block;




<% if (CrmStyles.IsRightToLeft) { %>
padding: 0px 0px 2px 2px;
<% }else{ %>
padding: 0px 2px 2px 0px;
<% } %>
}

.pageSection .pc_pagestep_element
{
width:150px;
margin-left:0px;
padding-right: 0px;
}

.pageSection .currently_processing .processing
{
vertical-align:top;
display:inline-block;
}

.pageSection .pc_en_field_body.currently_processing .ms-crm-Inline-Chrome,
.pageSection .pc_en_field_body.currently_processing .ms-crm-Inline-Chrome .pc_inline_value
{
width:130px;
display:inline-block;
}

.bpfConfForm .stage .pageSection .pc_step .ms-crm-Inline-Value
{
margin-left:24px;
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

.pc_branch
{
width:25px;
vertical-align:bottom;
background-image:url('/_imgs/ProcessControl/ArrowTipDip.png');
background-position: right bottom;
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

.bpfConfForm .stage .pc_step .ms-crm-Inline-Chrome
{
margin-top: -2px;
}

.bpfConfForm .stage .pc_step .ms-crm-Inline-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 24px;
<% }else{ %>
margin-left: 24px;
<% } %>
}

.bpfConfForm .stage .pc_step .ms-crm-Inline-Value.ms-crm-Inline-EditHintState
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 18px;
<% }else{ %>
margin-left: 18px;
<% } %>
}

.bpfConfForm .stage .pc_step .ms-crm-Inline-Edit
{
margin-top: -1px;
margin-bottom: -1px;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 19px;
<% }else{ %>
margin-left: 19px;
<% } %>
}

.bpfConfForm .ms-crm-Inline-Value
{
font-family: "Segoe UI",Tahoma,Arial;
font-size: 12px;
font-weight: bold;
}

.step-header
{
margin: 32px 0px 8px 0px;
}

.stage-name.ms-crm-Inline-Chrome
{
margin-top: -3px;
}

.stage-name .ms-crm-Inline-Edit input
{
font-size: 18px;
margin-left: -6px;
<%if (Request.Browser.Browser == "IE"){ %>
font-family: Segoe UI, Arial, sans-serif;
<% } %>
<% else { %>
font-family: "Segoe UI Semibold", Tahoma, Arial;
<% } %>
margin-top: 3px;
margin-bottom: -5px;
}

.stage .details .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet
{

<%if (Request.Browser.Browser == "IE"){ %>
height: 21px;
<% } %>
<% else { %>
height: 20px;
<% } %>
}

.stage .details .ms-crm-Inline-Edit.ms-crm-Inline-OptionSet.ms-crm-Inline-HideByZeroHeight
{
height: 0;
overflow: hidden;
}

.stage .details .ms-crm-Inline-Chrome,
.stage .stage-parent-entity,
.stage .stage-relationship,
.stage .stage-unique-name,
.stage .page-unique-name
{
margin-bottom: 19px;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: -4px;
<% } else{ %>
margin-left: -4px;
<% } %>
}

.stage .stage-relationship
{
position: relative;
}

.stage .stage-relationship-link
{
line-height: 20px;
padding-top: 2px;
padding-bottom: 3px;
font-size: 12px;
font-weight: bold;
text-decoration: underline;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% } else{ %>
margin-left: 23px;
<% } %>
}

.stage .details .ms-crm-Inline-WarningIcon
{
top: 2px;
left: 5px;
}

.stage .details .ms-crm-Inline-EditHintState
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 17px;
<% } else{ %>
margin-left: 17px;
<% } %>
margin-bottom: -2px;
}

.stage .details .stage-name .ms-crm-Inline-EditHintState
{
margin-top: 3px;
margin-bottom: -5px;
}

.stage-name .ms-crm-Inline-Value
{
font-family: "Segoe UI Semibold", Tahoma, Arial;
font-size: 18px;
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
height: 22px;
padding-top: 4px;
overflow: hidden;
position: relative;
}

.pc_step.pc_highContrast
{

height:29px;
}

.pc_step_name_value_container
{
width:209px;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% }else{ %>
margin-left: 23px;
<% } %>
}

.pc_pagestep_name_value_container
{
width:127px;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 23px;
<% }else{ %>
margin-left: 23px;
<% } %>
}

.pc_step_required_container
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% }else{ %>
margin-left: 10px;
<% } %>
}

.pc_stepmo,
.pc_stephl
{
height:23px;
padding-bottom:2px;
padding-top:2px;
}


.pc_stephl
{
background-color: #D4D4D4 !important;
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

.pc_stepmo
{
background-color: #D4D4D4;
}

.stage.pc_stagemo .body,
.stage.pc_stagehl .body
{
margin-top: -2px;
margin-bottom: -2px;
border-top-width: 3px;
border-bottom-width: 3px;

<% if (CrmStyles.IsRightToLeft) { %>
border-left-width: 3px;
<% }else{ %>
border-right-width: 3px;
<% } %>
}

.stage.pc_stagemo .button.delete-stage,
.stage.pc_stagehl .button.delete-stage
{
display: block;
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
height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:2px;
<% }else{ %>
margin-left:2px;
<% } %>
}
.pc_stg_dc
{
padding-top:5px;
*padding-top:10px;
}

.pc_stg_bc
{
display:inline-block;
vertical-align:bottom;
width:16px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:2px;
<% }else{ %>
margin-left:2px;
<% } %>
height:16px;
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
margin-left:25px
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
background-color:#cee7ff;
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
font-family: "Segoe UI", Arial, Sans-Serif;
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

.configuratorDescriptionDiv
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% }else{ %>
float: left;
<% } %>
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
margin-top:10px;
width:984px;
padding-top:10px;

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
font-family: "Segoe UI Light","Segoe UI Semibold", Arial, Sans-serif;
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
font-family: "Segoe UI Light","Segoe UI Semibold", Arial, Sans-serif;
max-width: 110px;
}

.flyoutContainer {
font-family: "Segoe UI", Tahoma, Arial;
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

.pc_step.hover,
.pc_step.selected
{
background-color: #D4D4D4;
}

.pc_step_req
{
display:inline-block;
}

.pc_step_namecontrol_container,
.pc_step_req
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

span.pc_step_req
{
margin-top: 3px;

<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
}

.ms-crm-RefreshDialog-Main-Container .warningBanner
{
background: #fff7ca;
position:absolute;
height: 26px;
background-size:100%;
top: 75px;
width:100%;

<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 30px;
<% } else { %>
padding-left: 30px;
<% } %>
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-RefreshDialog-Header
{
padding-top:20px;
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-RefreshDialog-Header .ms-crm-RefreshDialog-Header-Title
{
font-size:21px;
color:black;
}

.ms-crm-RefreshDialog-Main-Container .warningMessage
{
font-family: Segoe UI Semibold;
padding-top: 14px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

.ms-crm-RefreshDialog-Main .ms-crm-Inline-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>

}

.ms-crm-RefreshDialog-Main .ms-crm-Inline-Edit
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
<% } else { %>
margin-left: 0px;
<% } %>
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-RefreshDialog-Main .previousStageEntityColumn
{
color: black;
font-weight: bold;
width: 170px;
font-size: 12px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
<% } else { %>
padding-right: 10px;
<% } %>
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-RefreshDialog-Main .relationshipColumn
{
color: black;
font-weight: bold;
width: 210px;
font-size: 12px;
}

.ms-crm-RefreshDialog-Main .ms-crm-RefreshDialog-Warning
{
right: 25px;
left: 25px;
top: 1px;
}

.ms-crm-RefreshDialog-Main .relationshipTable
{
border-spacing: 12px;
}

.ms-crm-RefreshDialog-Main-Container .invalidState
{
top: 97px;
}

.ms-crm-RefreshDialog-Main-Container .ms-crm-ImageStrip-inlineedit_alert
{
display: block;
position: absolute;
top: 3px;
}

.ms-crm-RefreshDialog-Main-Container .invalidMessage
{
display: block;
position: absolute;
top: 4px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 26px;
<% } else { %>
padding-left: 26px;
<% } %>
}

.sectionbody > .addcontrol
{
margin-top: 2px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 20px;
<% } else { %>
margin-left: 20px;
<% } %>
}

.maskPanel
{
background: #FFFFFF;
opacity: 0.5;
filter: alpha(opacity=0.5);
}



.pc_step_debug
{
height: auto;
}

.pc_en_step_body_debug
{
height: auto;
}

.textarea_debug TEXTAREA
{
resize: auto;
}



