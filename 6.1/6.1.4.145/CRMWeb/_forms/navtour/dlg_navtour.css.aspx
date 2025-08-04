<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.navTour .ms-crm-RefreshDialog-Warning {
top: 0 !important;
bottom: 0 !important;
right: 0 !important;
left: 0 !important;
}
.navTour .ms-crm-RefreshDialog-Main-HeaderLess {
bottom: 0px !important;
}
div, .navTour img {
display: block;
}
#navTourPages {
width: 100%;
height: 100%;
overflow: hidden;
}
#navTourHeader {
width: 100%;
height: 40px;
background-color: rgb(0, 32, 80);
color: white;
position: fixed;
}
#navTourPagesView {
overflow: visible;
width: 700%;
height: 100%;
}
.navTourPageContainer {
width: 100%;
height: 100%;
}
.navTourPage {
height: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
color: rgb(0, 32, 80);
}
.navTourPageMain {
overflow: hidden;
}
.navTourPageContent {
padding: 62px 15px 20px 15px;
}
.navTourPageFooter {
width: 100%;
}
.navTourPageFooter > div {
display: inline-block;
vertical-align: top;
}
.navTourCrmLogo {
direction: ltr;
display: inline-block;
padding: 0 12px;
height: 40px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.navTourClose {
display: inline-block;
height: 40px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}
.navTourCloseButton {
display: table-cell;
height: 40px;
vertical-align: middle;
}
.navTourClose img {
padding: 0 16px;
}
.navTourCrmLogoImg {
display: table-cell;
height: 40px;
vertical-align: middle;
}
.navTourCrmLogoImg img {
padding-top: 1px;
}
.navTourCrmLogoText {
display: table-cell;
vertical-align: middle;
padding-top: 2px;
font-size: 17px;
}
.navTourPageContentHead {
color: #001f50;
font-size: 36px;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
padding: 5px 25px 0 25px;
white-space:nowrap;
}
.navTourPageContentImage {
margin-top: 10px;
width: 770px;
height: 230px;
}
.navTourPageContentText {
color: #444444;
margin-top: 15px;
font-size: 18px;
padding: 0 25px;
}
.navTourLeftButton {
width: 35%;
}
.navTourLeftButton > * {
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 30px;
<% } else { %>
float: left;
margin-left: 30px;
<% } %>
}
.navTourRightButton {
width: 35%;
}
.navTourRightButton > * {
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 30px;
<% } else { %>
float: right;
margin-right: 30px;
<% } %>
}
.navTourPageIndicator {
text-align: center;
width: 30%;
}
.navTourPageIndicator img {
padding: 10px 2px;
display: inline-block;
}
.navTourLeftButton a, .navTourRightButton a {
display: block;
}
.navTourButtonText, .navTourButtonImage {
display: table-cell;
vertical-align: middle;
font-size: 18px;
color: #001f50;
}
.navTourRightButton .navTourButtonImage {
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
}
.navTourLeftButton .navTourButtonImage {
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 15px;
<% } else { %>
padding-right: 15px;
<% } %>
}
#navTourPage1 .navTourPageContainer {
<% if (CrmStyles.IsRightToLeft) { %>
background: white url('/_imgs/NavTour/NavTourPage1Back_RTL.jpg') no-repeat 0 40px;
<% } else { %>
background: white url('/_imgs/NavTour/NavTourPage1Back.jpg') no-repeat 0 40px;
<% } %>
}
#navTourPage7 .navTourPageContainer {
<% if (CrmStyles.IsRightToLeft) { %>
background: white url('/_imgs/NavTour/NavTourPage7Back_RTL.jpg') no-repeat 0 40px;
<% } else { %>
background: white url('/_imgs/NavTour/NavTourPage7Back.jpg') no-repeat 0 40px;
<% } %>
}
#navTourPage1 .navTourPageContentText, #navTourPage7 .navTourPageContentText,
#navTourPage1 .navTourPageContentHead, #navTourPage7 .navTourPageContentHead {
width: 280px;
color: white;
}
.navTourPageContentRightColumn {
width: 120px;
padding: 95px 105px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}
.navTourSmallHead {
font-size: 18px;
white-space:nowrap;
}
.navTourSmallText {
font-size: 13px;
white-space:nowrap;
}

.navTourWhiteText, .navTourWhiteText a {
color:white !important;
}