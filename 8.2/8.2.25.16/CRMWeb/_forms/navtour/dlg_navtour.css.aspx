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
#navTourPages {
width: 100%;
height: 100%;
overflow: hidden;
}
#navTourHeader {
width: 100%;
height: 16%;
position: fixed;
top: 0px;
}
.navTourTitle {
display: inline-block;
max-width: 740px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
position: absolute;
bottom: 9%;
}
.navTourTitleText{
font-size: 40px;
vertical-align: middle;
padding-top: 5.45%;
font-family: "Segoe Light", "Segoe UI", Tahoma, Arial;
color: #0072C5;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 30px;
<% } else { %>
padding-left: 30px;
<% } %>
padding-bottom: 22px;
}
#navTourMainContent{
width: 100%;
height: 65%;
position: fixed;
top: 16%;
overflow: auto;
display: inline-block;
}
#navTourImg{
bottom: -15px;
position: relative;
}
#navTourImg > img{
display: block;
margin-left: auto;
margin-right: auto;
}
#navTourLinks{
width: 100%;
height: 9%;
position: fixed;
bottom: 9.06%;
}
.navTourLearningLinks{
width: 618px;
height: 30px;
display: block;
margin-left: auto;
margin-right: auto;
}
.navTourLearningLinksContainer{
width: 33%;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.navTourLearningLink{
-webkit-transform-style: preserve-3d;
-moz-transform-style: preserve-3d;
transform-style: preserve-3d;
}
.navTourLearningLinkText{
position: relative;
top: 50%;
transform: translateY(-150%);
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 35px;
<% } else { %>
padding-left: 35px;
<% } %>
}
#navTourFooter{
width: 100%;
height: 9.06%;
background-color: #0072C5;
position: fixed;
bottom: 0px;
}
#navTourFooterText{
vertical-align: middle;
color: white;
position: absolute;
top: 45%;
<% if (CrmStyles.IsRightToLeft) { %>
left: 3.4%;
<% } else { %>
right: 3.4%;
<% } %>
transform: translate(0, -28.4%);
}
#dontShowAgainFirst{
height: 16px;
width: 16px;
vertical-align: top;
}
.displayInline{
display: inline-block;
}
.navTourClose {
display: inline-block;
height: 100%;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}
.navTourCloseButton {
display: table-cell;
height: 7.26%;
vertical-align: middle;
}
.navTourClose img {
padding: 20px;
}
.navTourSmallText {
font-size: 13px;
white-space:nowrap;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
}
.navTourWhiteText, .navTourWhiteText a {
color:white !important;
}