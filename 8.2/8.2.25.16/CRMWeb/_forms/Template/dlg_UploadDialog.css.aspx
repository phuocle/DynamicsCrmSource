<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.uploadTemplateDivWarning {
top: 0px;
right: 0px;
bottom: 0px;
left: 0px;
width: 95%;
}

.navTour .ms-crm-RefreshDialog-Main-HeaderLess {
bottom: 0px !important;
}

.uploadTemplatePage {
height: 100%;
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 30px;
<% } else { %>
padding-left: 30px;
<% } %>
}

.uploadTemplateHeader {
width: 100%;
height: 30px;
margin-top: 30px;
margin-bottom: 20px;
}

.uploadTemplateTitle {
display: inline-block;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.uploadTemplateTitleText {
font-size: 30px;
vertical-align: middle;
padding-top: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 30px;
<% } else { %>
padding-left: 30px;
<% } %>
padding-bottom: 22px;
}

.uploadTemplateMainContent {
width: 100%;
height: 344px;
position: relative;
}

.uploadTemplateFooter {
width: 100%;
height: 50px;
background-color: #0072C5;
}

#uploadTemplateFooterText {
vertical-align: middle;
color: white;
padding: 17px 0;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
padding-left: 30px;
<% } else { %>
float: right;
padding-right: 30px;
<% } %>
}

.uploadTemplateClose {
display: inline-block;
height: 40px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 15px;
<% } else { %>
float: right;
margin-right: 15px;
<% } %>
}

.uploadTemplateCloseButton {
display: table-cell;
height: 40px;
vertical-align: middle;
}

.uploadTemplate img {
padding: 20px;
}

.uploadTemplate img {
padding: 20px;
}

.uploadTemplateFooterSmallText {
font-size: 13px;
white-space:nowrap;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
}

.uploadTemplateWindowTitle {
font-size: 30px;
color: #000;
font-family: Segoe UI Light;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
position: relative;
bottom: 9px;
}

#uploadFormDragAndDrop {
padding: 0px;
}

.drop_zone {
width: 440px;
height: 190px;
text-align: center;
border-style: dashed;
border-width: 2px;
border-color: #a1cbe9;
background-color: #e6f2fb;
padding-bottom: 15px;
position: relative;
margin-bottom : 30px;
}

.drop_zone_para {
position: relative;
font-size: 14px;
font-family: Segoe UI;
color: #666;
margin-top: 10px;
}

.uploadTemplateFilePageText {
font-size: 12px;
font-family: Segoe UI;
color: #666;
position: absolute;
right: 130px;
bottom: 15px;
}

.uploadTemplateDropFileImage {
height: 60px;
width: 102px;
margin-top: 30px;
vertical-align: middle;
pointer-events: none;
}

.fileUpload {
display:none;
}

.displayFileName {
font-weight: bold;
}

a.dragHereAnchor {
color: #0072c5;
text-decoration: underline;
}

.uploadIndicatorText {
font-size: 14px;
font-family: Segoe UI;
color: #666;
margin-top: 15px;
margin-bottom: 0px;
}

.uploadIndicator {
display: none;
}

.processing .uploadIndicator {
display: inline-block;
margin-top: 10px;
}

.processing .drop_zone_para,
.processing .uploadTemplateFilePageText,
.processing .displayFileName,
.processing .fileUpload,
.processing .errorDescription {
display: none;
}

.errorDescription .specificError,
.errorDescription .genericError {
display: none;
}

.errorDescription.specificError .specificError,
.errorDescription.genericError .genericError {
font-size: 12px;
display: block;
color: rgb(255,0,0);
margin-bottom: 0px;
}

.hideUploadButton {
display: none;
}

.helpContainer {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 9px;
float: right;
<% } else { %>
margin-left: 9px;
float: left;
<% } %>
margin-top: 13px;
}

.blueCloud,
.dropText {
display: none;
}

.dropText {
pointer-events: none;
}

.displayBlueCloud #blueCloudImg,
.displayBlueCloud #drop_zone_para_shortText {
display: inline-block;
}

.displayBlueCloud #whiteCloudImg,
.displayBlueCloud #drop_zone_para,
.displayBlueCloud .uploadTemplateFilePageText {
display: none;
}

.displayBlueCloud .drop_zone {
background-color: #ffffff;
}

a.helpContainer.ar > img {
transform: scaleX(-1);
}

.hideCloseButton {
display: none;
}
