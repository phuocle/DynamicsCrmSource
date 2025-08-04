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
height: calc(100% - 48px);
}
#navTourPages {
width: 100%;
height: 100%;
overflow: hidden;
}
#navTourFooter{
width: 100%;
background-color: #000000;
color: #ffffff;
position:fixed;
bottom: 0px;
}
#navTourFooterText{
vertical-align: middle;
color: white;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}
#dontShowAgainFirst{
height: 16px;
width: 16px;
vertical-align: middle;
margin: 0px;
margin-top: -4px;
}
#continueOutlineContainer.keyboardFocusClass{
outline-color: white;
outline-style: dotted;
outline-width: 2px;
}

#cmdClose.keyboardFocusClass{
outline-style: none !important;
}

#dontShowAgainFirstOutlineContainer.keyboardFocusClass{
outline-color: white;
outline-style: dotted;
outline-width: 2px;
}

#dontShowAgainFirst.keyboardFocusClass{
outline-style: none !important;
}
#dontShowAgainFirstOutlineContainer{
padding: 1px 2px 2px 2px;
margin: 0px;
display: inline-block;
}
#continueOutlineContainer{
padding: 2px;
margin: 0px;
}
.ms-appNavTour-outline {
position: relative;
}
.ms-appNavTour-outline:before{
border: 2px dotted #ffffff;
content: "";
position: absolute;
top: -4px;
bottom: -4px;
left: -4px;
right: -4px;
}

.displayInline{
display: inline-block;
}
.navTourSmallText {
font-size: 14px;
font-family: "Segoe UI Regular", "Segoe UI", Tahoma, Arial;
color: #CCCCCC;
white-space:nowrap;
}
#dontShowAgainContainer{
margin-top: 14px;
margin-bottom: 14px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
margin-right: 10px;
<% } else { %>
float: left;
margin-left: 10px;
<% } %>
}
#continueContainer{
margin-top: 10px;
margin-bottom: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
margin-left: 10px;
<% } else { %>
float: right;
margin-right: 10px;
<% } %>
}
.ms-crm-appsNavTourContainer-Button
{
background-color: #0072c5;
border: 1px solid #0072c5;
color: #ffffff;
cursor: pointer;
font-family: "SegoeUI-Semibold","Segoe UI WPC Semibold","Segoe UI Semibold","Segoe UI",Tahoma,"Microsoft Sans Serif",Verdana,sans-serif;
font-size: 12px;
height: 28px;
min-width: 20px;
padding-left: 25px;
padding-right: 25px;
text-align: center;
white-space: nowrap;
width: auto;
}
.ms-crm-appsNavTourContainer-Button:hover {
background-color: #6194cd;
border-color: #6194cd;
}
#navTourMainContent{
width: 100%;
height: 100%;
position: relative;
-webkit-overflow-scrolling: touch;
overflow-y: hidden;
}
#navTourMainContent::-webkit-scrollbar{
display: none;
}
#navTourMainContentIFrame{
width: 100%;
height: 100%;
border: none;
display: none;
}

#navTourMainContentLoading {
width: 100%;
height: 100%;
position: absolute;
margin: 0 auto;
padding: 0;
}​