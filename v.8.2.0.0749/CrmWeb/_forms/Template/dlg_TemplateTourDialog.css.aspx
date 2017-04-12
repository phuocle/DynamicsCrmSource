<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.templateTour .ms-crm-RefreshDialog-Warning {
top: 0px;
bottom: 0px;
right: 0px;
left: 0px;
}

.templateTour .ms-crm-RefreshDialog-Main-HeaderLess {
top: 0px;
bottom: 0px;
}

div {
display: block;
}

.templateTourPage{
width: 100%;
height: 100%;
}

.templateTourPageHeader{
height: 30px;
width: 100%;
vertical-align: 30px;
}

.templateTourContentTextCommon {
font-family: "Segoe UI";
overflow-x: hidden;
overflow-y: auto;
}

.templateTourPageContentHead {
font-size: 36px;
height: 50px;
color: black;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
white-space: nowrap;
}

.templateTourPageView {
padding: 0px 30px 30px 30px;
height: 385px;
}

.templateTourPageContentText {
font-size: 13px;
line-height: 24px;
max-height: 220px;
}

.templateTourPageContent {
padding-top: 30px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    background: white url('/_imgs/ExcelOnlineTour/ExcelOnlineTourBack.png') no-repeat 330px 30px;
<% }
   else
   { %>
    background: white url('/_imgs/ExcelOnlineTour/ExcelOnlineTourBack.png') no-repeat 0px 30px;
<% } %>
position: relative;
}

.templateTourPageText {
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 410px;
    padding-right: 30px;
<% }
   else
   { %>
    margin-left: 410px;
    padding-left: 30px;
<% } %>
}

.templateTourCloseButton{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
}

.templateTourButtonImage {
padding-top: 18px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 18px;
<% }
   else
   { %>
    padding-right: 18px;
<% } %>
}

.templateTourPageContentHeadText{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

.templateTourPageTryGetIt{
font-size: 25px;
display:inline-block;
vertical-align:middle;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
margin-top: -65px;
margin-right: 28px;
}

.templateTourTryItOutSpan {
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
color: #444444;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
    margin-left: 8px;
<% }
   else
   { %>
    float: left;
    margin-right: 8px;
<% } %>
}

.templateTourArrowSpan {
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

.templateTourImg{
height: 0px;
}

.imgTemplateTour {
<% if (CrmStyles.IsRightToLeft)
   { %>
    transform: scaleX(-1);
<% } %>
}

.hideCloseButton {
display: none;
}