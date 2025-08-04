<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>

<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.excelOnlineTour .ms-crm-RefreshDialog-Warning {
top: 0 !important;
bottom: 0 !important;
right: 0 !important;
left: 0 !important;
}

.excelOnlineTour .ms-crm-RefreshDialog-Main-HeaderLess {
top: 0px !important;
bottom: 0px !important;
}

div {
display: block;
}

#excelOnlineTourPage{
width: 100%;
height: 100%;
}

#excelOnlineTourPageHeader{
height: 30px;
width: 100%;
vertical-align: 30px;
}

.excelOnlineTourPageContentHead {
font-size: 36px;
height: 50px;
color: black;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
white-space: nowrap;
}

#excelOnlineTourPageView {
padding: 0px 30px 30px 30px;
}

.excelOnlineTourPageContentText {
font-size: 13px;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
line-height: 24px;
overflow-x: hidden;
overflow-y: auto;
max-height: 220px;
}

.excelOnlineTourPageContentLinkText {
font-size: 13px;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
padding-top: 15px;
overflow-x: hidden;
overflow-y: auto;
max-height: 35px;
}

.excelOnlineTourPageContent {
padding-top: 30px;
<% if (CrmStyles.IsRightToLeft) { %>
background: white url('/_imgs/ExcelOnlineTour/ExcelOnlineTourBack.png') no-repeat 330px 30px;
<% } else { %>
background: white url('/_imgs/ExcelOnlineTour/ExcelOnlineTourBack.png') no-repeat 0px 30px;
<% } %>
position: relative;
}

.excelOnlineTourPageText {
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 410px;
padding-right: 30px;
<% } else { %>
margin-left: 410px;
padding-left: 30px;
<% } %>
}

.excelOnlineTourPageContentSmallText{
font-size: 12px;
font-family: "Segoe UI Light", "Segoe UI", Tahoma, Arial;
word-break: break-all;
padding-top: 15px;
padding-bottom: 20px;
bottom: 0;
position: absolute;
overflow-x: hidden;
overflow-y: hidden;
max-height: 20px;
}

.excelOnlineTourCloseButton{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.excelOnlineTourButtonImage {
font-size: 18px;
padding-top: 15px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 15px;
<% } else { %>
padding-right: 15px;
<% } %>
}

.excelOnlineTourPageContentHeadText{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}

.excelOnlineTourImg{
height: 0px;
}