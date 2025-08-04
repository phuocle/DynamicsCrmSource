<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.createTemplateDivWarning {
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
}

.createTemplateDialog .ms-crm-RefreshDialog-Main-HeaderLess {
bottom: 0px !important;
}

.createTemplatePage {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 30px;
margin-left: 60px;
<% } else { %>
margin-left: 30px;
margin-right: 60px;
<% } %>
margin-top: 30px;
margin-bottom: 10px;
overflow: hidden;
width: 418px;
}

.createTemplateHeader {
width: 100%;
}

.createTemplateTitle {
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.createTemplateTitleText{
font-size: 30px;
vertical-align: middle;
color: #000;
font-family: Segoe UI Light;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
}

.displayInline{
display: inline-block;
}

.createTemplateClose {
padding: 15px 15px 0px 15px;
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.createTemplateCloseButton {
display: table-cell;
vertical-align: middle;
}

.createTemplate img {
padding: 20px;
}

.createTemplateFooterSmallText {
font-size: 13px;
}

.createTemplateText{
width: 300px;
margin-top: 20px;
}

#createTemplateGetFile{
display:inline-block;
margin-bottom: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 10px;
margin-right: 10px;
padding-right: 10px;
padding-left: 10px;
<% } else { %>
margin-right: 10px;
margin-left: 10px;
padding-left: 10px;
padding-right: 10px;
<% } %>
}

#createTemplateDropdowns{
padding: 10px 0px 0px 30px;
}

.createTemplateDropdown{
width: 200px;
margin-left: 10px;
}

#createTemplateLabelQuery{
padding: 15px 0px 0px 0px;
width: 300px;
}

.createTemplateLookFor{
width: 300px;
}

.indicatorOff {
position: absolute;
display: none;
}

.indicatorOn {
display: block;
visibility: visible;
position: absolute;
z-index: 999;
width: 100%;
height: 100%;
top: 0px;
left: 0px;
text-align: center;
filter: alpha(opacity=75);
opacity: 0.75;
}

.progressImage {
position: absolute;
}

.createTemplateType {
width: 100%;
}

.templateType {
width: 180px;
border-color: #c8c8c8;
border-width: 1px;
border-style: solid;
padding-top: 4px;
padding-bottom: 4px;
}

.templateType.word {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 20px;
<% } else { %>
margin-left: 20px;
<% } %>
}

.templateType.selected {
border-width: 2px;
border-color: #0072C5;
}

.templateImage {
padding-top: 5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
}

.templateData {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
margin-top: 8px;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
width: 135px;
}

.createTemplateDropdowns .createTemplateLabelQuery.hideDropDown {
visibility: hidden;
}

.templateType.selected .templateImage {
padding-top: 4px;
}

.templateType.selected .templateData {
margin-top: 7px;
}

.createDialogText {
font-size: 12px;
color: #444;
font-family: Segoe UI;
width: 126px;
}

.editColumnText {
font-size: 12px;
color: #0072c5;
font-family: Segoe UI;
margin-top: 20px;
text-decoration: underline;
padding-top: 6px;
display: inline-block;
}

.helpContainer {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 10px;
<% } else { %>
margin-left: 10px;
<% } %>
bottom: 8px;
z-index: 300;
position: absolute;
}

a.helpContainer.ar > img {
transform: scaleX(-1);
}

select.ms-crm-SelectBox {
<% if (CrmStyles.IsRightToLeft) { %>
margin-left: 60px;
<% } else { %>
margin-right: 60px;
<% } %>
}

select.ms-crm-SelectBox, select.ms-crm-SelectBox-WorkflowDesigner {
font-family: Segoe UI;
font-size: 12px;
}

.word.selected.templateType {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 21px;
<% } else { %>
margin-left: 21px;
<% } %>
}

.selected.templateType .templateImage {
padding-top: 4px;
}

.selected.templateType #excelImage {
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 14px;
<% } else { %>
padding-left: 14px;
<% } %>
}

#ViewList, #EntityList {
width: 260px;
height: 20px;
position: absolute;
}

.downloadedTitle {
display: none;
font-size: 27px;
font-family: Segoe UI Light;
text-align: center;
}

.createTemplateText,
#createTemplateDropdowns,
#createTemplateLabelQuery,
.createTemplateLookFor,
.createTemplateType,
.templateType,
.templateImage,
.templateData,
.createDialogText,
.editColumnsLink {
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

#downloadTemplateClose {
display: none;
}

.hideCloseButton {
display: none;
}