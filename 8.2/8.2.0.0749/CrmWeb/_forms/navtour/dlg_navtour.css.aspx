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
height: 92px;
}
.navTourTitle {
display: inline-block;
max-width: 740px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}
.navTourTitleText{
font-size: 40px;
vertical-align: middle;
padding-top: 30px;
font-family: "Segoe Light", "Segoe UI", Tahoma, Arial;
color: #0072C5;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 30px;
<% }
   else
   { %>
    padding-left: 30px;
<% } %>
padding-bottom: 22px;
}
#navTourMainContent{
width: 100%;
height: 344px;
position: relative;
}
#navTourImg{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 80px;
<% }
   else
   { %>
    padding-left: 80px;
<% } %>
}
#navTourLinks{
width: 100%;
height: 67px;
}
.navTourLearningLinks{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
padding: 20px 91px 16px 91px;
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
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 35px;
<% }
   else
   { %>
    padding-left: 35px;
<% } %>
}
#navTourFooter{
width: 100%;
height: 50px;
background-color: #0072C5;
}
#navTourFooterText{
vertical-align: middle;
color: white;
padding: 17px 0;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
    padding-left: 30px;
<% }
   else
   { %>
    float: right;
    padding-right: 30px;
<% } %>
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
height: 40px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}
.navTourCloseButton {
display: table-cell;
height: 40px;
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