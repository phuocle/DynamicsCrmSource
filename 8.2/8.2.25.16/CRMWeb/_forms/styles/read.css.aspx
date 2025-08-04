
<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

HTML
{
height:				100%;
overflow:			hidden;
}

BODY
{
background-color:	#ffffff;

<% if (Request.Browser.Browser != "IE") { %>
overflow: hidden;
<% }  %>
}

#formselectorcontainer
{
position:relative;
font-size:13px;
height:18px;
text-transform:uppercase;
}

#header_crmFormSelector
{
display: block !important;
position: fixed !important;
}

a.ms-crm-FormSelector:link
{
border-width: 0px;
}

a.ms-crm-FormSelector:link img
{
visibility: visible;
margin-left: 4px;
}

a.ms-crm-FormSelector:hover
{
border-width: 1px;
}

a.ms-crm-FormSelector:hover img
{
visibility: visible;
}

DIV.ms-crm-Tab-Print
{
padding:			10px;
}

IMG.icon
{
height:				15px;
width:				15px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}

IFRAME.noteData
{
border-width:0px;
height:100%;
width:100%;
}





LABEL.ms-crm-readForm-stripLeftRight
{
text-overflow: ellipsis;
white-space: nowrap;
color: #3b3b3b;
cursor:pointer;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;

<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9) { %>
<%if (CrmStyles.IsRightToLeft) {%>
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
writing-mode: tb-rl;
<% } else { %>
writing-mode: tb-rl;
<%= FlipImage("hv") %>
padding-top:100px;
<% } %>

<% } else { %>
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
display:block;
<%if (CrmStyles.IsRightToLeft) {%>
writing-mode: tb-rl;
-o-transform: rotate(90deg);
transform: rotate(90deg);
-webkit-transform: rotate(90deg);
-moz-transform: rotate(90deg);
-ms-transform: rotate(90);
<% } else { %>
-o-transform: rotate(270deg);
transform: rotate(270deg);
-webkit-transform: rotate(270deg);
-moz-transform: rotate(270deg);
-ms-transform: rotate(270deg);
<% } %>
<% } %>
}
TABLE.ms-crm-readForm-Nav-Table
{
height:100%;
width:48px;
table-layout:fixed;
}
LABEL.ms-crm-ReadForm-Nav-Label
{
color:#1261e1;
}
TD.ms-crm-readForm-Nav-Table-Data
{
height:99%;
}

DIV.ms-crm-readForm-Nav-Container
{
border-width:1px;
position:fixed;
width:48px;
<% if (CrmStyles.IsRightToLeft) { %>
right:0px;
<% } else { %>
left:0px;
<% } %>
}
DIV.ms-crm-Form-Container
{
position:absolute;
<% if (CrmStyles.IsRightToLeft) { %>
right:20px;
left:8px;
<% } else { %>
left:20px;
right:8px;
<% } %>
top: 0px;
bottom: 0px;
}

DIV.ms-crm-readForm-Container-showNav
{
position: absolute;
top: 0px;
bottom: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
right:180px;
left:8px;
<% } else { %>
left:180px;
right:8px;
<% } %>
}

DIV.ms-crm-readForm-navBar-hide
{
display: none;
}

A.ms-crm-Anchor-SideStrip:hover
{
text-decoration:none;
}

TD.ms-crm-Form-Section,
DIV.ms-crm-Form-Section
{
color:				#3b3b3b;
padding-top:		7px;
text-overflow:		ellipsis;
overflow:			hidden;
}

TR.ms-crm-Form-SectionGapRow
{
height: 10px;
}


DIV.ms-crm-QuickForm TR.ms-crm-Form-SectionGapRow
{
height: 28px;
}

TD.ms-crm-Form-SectionBar,
DIV.ms-crm-Form-SectionBar
{
border-bottom:		1px solid #c0c0c0;
}

TR.ms-crm-Form-Background
{
background-image: none!important;
}

NOBR.ms-crm-Form-Title-Data-Print
{
line-height: normal;
}

H1
{
text-overflow: ellipsis;
overflow: hidden;
}

NOBR.ms-crm-Form-Title-Label-Print
{
line-height: normal;
}




.ms-crm-FormSectionNavigation , #flyoutFormSection_ContentDiv_No_Tabs
{
display: block;
text-overflow: ellipsis;
white-space: nowrap;
overflow-x: hidden;
font-family :Segoe UI;
font-weight: normal;
font-size:13px;
color: #444;
cursor: pointer;
}

a.ms-crm-FormSectionNavigation:hover
{
text-decoration: none;
}

#flyoutFormSection_ContentDiv_No_Tabs
{
display: table-cell !important;
vertical-align: middle !important;
}
.ms-crm-FormSectionNavigation-On-Scroll
{
max-width: 220px;
min-width: 220px;
display: table-cell;
}

.ms-crm-FlyoutContentTableWidth
{
width:100%;
}

.ms-crm-FormSectionNavigationFlyout-Dialog
{
position: absolute;
padding: 0px;
border: 2px solid #002050;
background-color: #fff;
}

.ms-crm-FormSectionNavigationFlyout-Dialog-Content
{
position: relative;
border: 0;
padding-right: 0px;
padding-top: 0px;
padding-left: 0px;
background: none;
overflow-x: hidden;
overflow-y: auto;
zoom: 1;
}

#flyoutFormSection_ContentTable tr
{
background-color: #fff;
}

#flyoutFormSection_ContentTable td , #flyoutFormSection_ContentDiv_No_Tabs
{
height: 30px;
min-width: 230px;
max-width: 230px;
padding-bottom: 0px !important;
padding-top: 0px !important;
padding-right: 10px !important;
padding-left: 10px !important;
}

#flyoutFormSection_ContentTable , #flyoutFormSection_ContentDiv_No_Tabs
{
border-spacing : 0px;
}

.ms-crm-FormSection-Position
{
display: inline-block;
position: relative;
padding-top: 18px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 7px;
float: right;
<% } else { %>
padding-left:7px;
float: left;
<% } %>
cursor: pointer;
}
.ms-crm-Form-Title-Position
{
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
text-overflow: ellipsis;
}



DIV.ms-crm-InlineTabContainer-Read-SLAKpiQuickView
{
overflow-y: hidden;
overflow-x: hidden;
padding-top: 0px !important;
}

TABLE.ms-crm-FormSection .ms-crm-SLAKpiQuickView
{
margin-top: 2px !important;
border-spacing:0px 0px !important;
}

Iframe
{
width: 98%;
display: block;
}
DIV.ms-crm-WebResourceMessage
{
border: 1px solid #C4C8CE;
color : #838383;
width: 100%;
text-align: center;
}


DIV.ms-crm-InlineTab-Read,
{
padding: 0px;
margin: 6px;
}

DIV.ms-crm-QuickForm DIV.ms-crm-InlineTab-Read
{
padding: 0px;
margin: 0px;
background-color: #FFFFFF;
}

.ms-crm-InlineTabBody-Read
{
width: 100%;
table-layout: fixed;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 12px;
<% } else { %>
padding-right: 12px;
<% } %>
}

DIV.ms-crm-QuickForm .ms-crm-InlineTabBody-Read
{
width: 100%;
table-layout: fixed;
padding-left:  0px;
padding-right: 0px;
}

SPAN.ms-crm-Lookup-PartyItem-Unresolved-Read
{
color: #ff0000;
}

SPAN.ms-crm-Lookup-Item-Read
{
color: #000000;
}

SPAN.ms-crm-Lookup-PartyItem-Unresolved-Read,
SPAN.ms-crm-Lookup-Item-Read
{
margin-top: -1px;
text-decoration: underline;
cursor: pointer;
margin-left: 1px;
margin-right: 1px;
word-break: break-all;
}

IMG.ms-crm-Lookup-Item
{
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}



.ms-crm-Loading-Message
{
table-layout: fixed;
padding:1;
width:100%;
height:100%;
text-align:center;
COLOR: black;
}

TD.ms-crm-Form-SectionBar-Spacer,
DIV.ms-crm-Form-SectionBar-Spacer
{
height: 7px;
}

TD.ms-crm-Form-SectionBar,
DIV.ms-crm-Form-SectionBar
{
border-bottom-width: 1px;
border-bottom-style: solid;
}

TR.ms-crm-Form-Background
{
background-repeat: repeat-x;
}

TR.ms-crm-Form-HeaderContainer
{
min-height: 40px;
}

.ms-crm-inlineheader-content TD.ms-crm-Form-Header-Icon
{
vertical-align:top;
}

.ms-crm-Form-HeaderPosition
{
position: relative;
text-align: justify;

margin-bottom: -17px;
}



.ms-crm-Form-HeaderPosition::after {
content: "";
display: inline-block;
position: relative;
width: 100%;
height: 0;
}

TABLE.ms-crm-Email-Body-Error
{
background-color:	#ffffae;
border:				1px solid #c5c5c5;
table-layout:		fixed;
}

DIV.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 10px;
<% } else { %>
padding-right: 10px;
<% } %>
}

DIV.ms-crm-Form-FooterContainer TD.ms-crm-Field-Data-Print
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 10px;
<% } else { %>
padding-left: 10px;
<% } %>
}

DIV.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print span
{
white-space: nowrap;
}

DIV.ms-crm-Form-FooterContainer div.ms-crm-Field-Data-Print
{
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
width: 100%
}

SPAN.ms-crm-Form-Breadcrumb
{
line-height: 20px;
vertical-align: baseline;
margin-top: 3px;
}

@media (min-width: 1400px) {
.ms-crm-Form-Breadcrumb {
max-width: 768px;
}
.ms-crm-Form-Title-Position {
max-width: 728px;
}
}

@media (min-width: 1024px) and (max-width: 1400px) {
.ms-crm-Form-Breadcrumb {
max-width: 600px;
}
.ms-crm-Form-Title-Position {
max-width: 560px;
}
}

@media (min-width: 500px) and (max-width: 1024px) {
.ms-crm-Form-Breadcrumb {
max-width: 380px;
}
.ms-crm-Form-Title-Position {
max-width: 340px;
}
}

@media (max-width: 500px) {
.ms-crm-Form-Breadcrumb {
max-width: 220px;
}
.ms-crm-Form-Title-Position {
max-width: 180px;
}
}

DIV.ms-crm-Form-Title-Label
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<%} %>
text-transform:uppercase;
}

div.ms-crm-Form-Area.ms-crm-Form-Area-position
{
min-width: 1024px;
}

.ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm
{
height: 100%;
position: relative;
}

.ms-crm-Form-Quick .ms-crm-Form-AreaContainer .ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm
{
height: auto;
position: static;
}

.ms-crm-Table-Row-Expanded > .ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm {
position: absolute;
top: 0px;
bottom: 0px;
width: 100%;
}

.ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm > .ms-crm-Form-Area {
position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}

.ms-crm-Form-Quick .ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm > .ms-crm-Form-Area {
position: static;
}

.ms-crm-Form-Page
{
background-image: none !important;
height: 100%;
}

TABLE.ms-crm-Form-Page-Table
{
padding: 1px;
border-width: 1px;
border-style: solid;
background-image: none !important;
}

DIV.ms-crm-Form-FooterContainer
{
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
min-height:	 26px;
background-repeat:repeat-x;
background-position: bottom;
width: 100%;
}

.formFootersContainer
{
border-top : 1px solid #D6D6D6;
}

DIV.ms-crm-Form-HeaderContainer
{
border-bottom-width: 1px;
border-bottom-style: dotted;
}
DIV.ms-crm-Form-AreaContainer
{
overflow: auto;
width: 100%;
padding-bottom: 13px;
}
DIV.ms-crm-Form-AreaContainerQuick
{
overflow: auto;
width: 100%;
}
DIV.ms-crm-Form-footer-splitter
{
height: 4px;
}

FORM.ms-crm-Form
{
margin:	0px;
}

TABLE.ms-crm-Form-StandaloneSection
{
table-layout: fixed;
width: 100%;
line-height: 16px;
}

.ms-crm-Field-Label-Print
{
overflow: hidden;
text-overflow: ellipsis;
vertical-align: top;
}

.ms-crm-Field-Data-Print
{
word-wrap: break-word !important;
vertical-align:top;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}
.ms-crm-Field-Data-Print-Bold
{
word-wrap: break-word;
vertical-align:top;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

.refresh-form .ms-crm-Field-Data-Print, .refresh-form .ms-crm-Field-Data-Print-Bold
{
word-wrap:normal;
}

.ms-crm-Form-FooterContainer .ms-crm-Field-Data-Print-Bold
{
overflow: hidden;
}

.ms-crm-Form-FooterContainer div.ms-crm-Inline-Value
{
min-width: 40px;
white-space: nowrap;
overflow: hidden;
vertical-align:top;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

div.ms-crm-Inline-Value a.help_link, div.ms-crm-Inline-Value a.help_link:active,
div.ms-crm-Inline-Value a.help_link:hover, div.ms-crm-Inline-Value a.help_link:visited,
div.ms-crm-Inline-Value a.helptoc_link:hover, div.ms-crm-Inline-Value a.ImportMapViewLink,
div.ms-crm-Inline-Value a.ImportMapViewLink:link,
div.ms-crm-Inline-Value a.ImportMapViewLink:visited,
div.ms-crm-Inline-Value a.ms-crm-gridurl:active, div.ms-crm-Inline-Value a.ms-crm-gridurl:visited,
div.ms-crm-Inline-Value a.ms-crm-Link:hover, div.ms-crm-Inline-Value a
{
<% if (Request.Browser.Browser == "Chrome") { %>
font-weight : 700;
<% } %>
<% else if (Request.Browser.Browser == "IE" || Request.Browser.Browser == "Firefox" ){ %>
font-weight : 600;
<% } else { %>
font-weight : 500;
<% } %>
}

TABLE.headerContainerTable TD
{
white-space: nowrap;
}
TABLE.headerContainerTable
{
table-layout: fixed;
}

.ms-crm-Form-Title-Label
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
}

.ms-crm-Form-Title-Data,
.ms-crm-Form-Title-Data h1
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.36px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight") %>;
}

.ms-crm-Form-Title-Data h1
{
margin: 0px;
padding-top: 10px;
padding-bottom: 24px;
}

TABLE.headerContainerTable .ms-crm-Field-Label-Print
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
line-height: 18px;
}

.ie7 TABLE.headerContainerTable .ms-crm-Field-Data-Print
{
line-height: 20px;
position: relative;
top: -4px;
}

TABLE.headerContainerTable DIV.ms-crm-Field-Data-Print
{
padding-bottom: 0px;
}

.ms-crm-Field-DateTime-Print,
.ms-crm-Field-Number-Print
{
<% if (CrmStyles.IsRightToLeft) { %>
direction: rtl;
text-align: right;
<% } else { %>
direction: ltr;
<%} %>
}

TD.selectedRowTitle
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.16px.font_size") %> !important;
font-weight: 600;
color: #666666;
padding-bottom: 10px;
text-overflow: ellipsis;
overflow: hidden;
width: 100%;
word-wrap: normal;
}
.caseBrowseGrid
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:4px !important;
<% } else { %>
margin-right:4px !important;
<%} %>
}
.caseBrowseFilter
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:35px !important;
<% } else { %>
padding-right:35px !important;
<%} %>
}

DIV.ms-crm-Form-Breadcrumb
{
padding-bottom: 5px;
}

table.stdTable
{
width: 100%;
height:	92%!important;
table-layout: fixed;
}

IFRAME.ms-crm-Custom-Read
{
max-width:			100%;
height:				100%;
<% if(!(Util.IsIosDevice(Page.Request))) { %>
border-width:		1px;
border-style:		solid;
<% } %>
}



LI.ms-crm-Group-Spacer
{
display: inline;
width: 100%;
height: 23px;
white-space: nowrap;
}
SPAN.ms-crm-MenuItem-Label
{
cursor: default;
width: 100%;
margin-top: 1px;
}
SPAN.ms-crm-Menu-Group
{
background-repeat: repeat-y;
color:		#7e7e7e;
background-color: #e9e9e9;
<% if (CrmStyles.IsRightToLeft) { %>
background-position:right;
<% } %>
}
A.ms-crm-MenuLink
{
cursor: default;
}
TD.ms-crm-MenuItem-Icon,
SPAN.ms-crm-MenuItem-Icon
{
margin-left: 1px;
margin-right: 1px;
width: 30px;
}
img.ms-crm-Menu-ButtonFirst
{
width: 16px;
height: 16px;
vertical-align: top;
outline: none;
}
SPAN.ms-crm-MenuItem-Text
{
margin: 0px 1px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
}

LI.ms-crm-Menu
{
height: 23px;
padding-top: 2px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
.ms-crm-Menu-disabled *
{
color:#5b626c !important;
cursor:default !important;
}
SPAN.ms-crm-Menu-Label
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 19px;
overflow-y: hidden;
cursor: default;
color: #FFFFFF;
display: inline-block;
}
DIV.ui-flyout-dialog-moreCommands SPAN.ms-crm-Menu-Label
{
display: block;
overflow: hidden;
text-overflow: ellipsis;
color: #000000;
white-space: nowrap;
}
SPAN.ms-crm-Menu-Label-Hovered
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 19px;
overflow-y: hidden;
display: inline-block;
text-decoration: none;
}
SPAN.ms-crm-Menu-Label-Opened
{
padding-left: 2px;
padding-right: 2px;
<% if (Request.Browser.Browser != "IE") { %>
padding-top: 3px;
<% } else { %>
padding-top: 2px;
padding-bottom: 1px;
<% } %>
height: 19px;
overflow-y: hidden;
display:inline-block;
color: #000000;
}
img.ms-crm-Menu-Button
{
margin-left: 1px;
margin-right: 1px;
}
SPAN.ms-crm-MenuItem-Text
{
margin: 0px 1px;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
}
Div.ms-crm-ToolBar
{

height: 36px;
}
LI.ms-crm-Menu-ReadForm
{
<% if (CrmStyles.IsRightToLeft) { %>
<% if(Util.IsIosDevice(Page.Request)) { %>
margin-left: 20px;
<% } else { %>
margin-left: 8px;
<% } %>

<% } else { %>
<% if(Util.IsIosDevice(Page.Request)) { %>
margin-right: 20px;
<% } else { %>
margin-right: 8px;
<% } %>
<% } %>
margin-top: 6px;
display: inline-block;
white-space: nowrap;
height: 22px;
<% if (CrmStyles.IsRightToLeft) { %>
float: right;
<% } else { %>
float: left;
<% } %>
}
LI.ms-crm-Menu-ReadForm-Inverse
{
display: inline-block;
height: 22px;
position: absolute;
top: 8px;
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
padding-left: 2px;
left: 0px;
margin-left: 14px;
<% } else { %>
float: right;
padding-right: 2px;
right: 0px;
<% } %>

}
LI.ms-crm-RefreshForm-MoreMenu,
SPAN.ms-crm-MenuItem-TextRTL,
img.ms-crm-Menu-ButtonRTL,
.ms-crm-Form-Title-Data,
.ms-crm-Form-Title-Data h1,
TD.selectedRowTitle,
#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label SPAN,
#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label-Hovered SPAN,
#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label-Opened SPAN {
font-family: Segoe UI, Arial, sans-serif;
}


LI.ms-crm-RefreshForm-MoreMenu
{
color: #000000;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
height: 19px;
margin: 0px 6px;
padding: 4px;
}
DIV.ui-flyout-dialog-moreCommands SPAN.ms-crm-MenuItem-TextRTL
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}
SPAN.ms-crm-MenuItem-TextRTL,
img.ms-crm-Menu-ButtonRTL
{
padding-left: 5px;
padding-right: 4px;
color: #666666;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
<% if (Request.Browser.Browser != "IE") { %>
padding-bottom: 3px;
<% } else { %>
padding-bottom: 5px;
<% } %>
outline: none;
}
img.ms-crm-Menu-ButtonLTR,
SPAN.ms-crm-MenuItem-TextLTR
{
padding-left: 4px;
padding-right: 5px;
<% if (Request.Browser.Browser != "IE") { %>
padding-bottom: 3px;
<% } else { %>
padding-bottom: 5px;
<% } %>
}

#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label SPAN,
#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label-Hovered SPAN,
#readFormToolBar LI.ms-crm-Menu-moreCommandsButton SPAN.ms-crm-Menu-Label-Opened SPAN
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.22px.font_size") %>;
line-height: 1px;
color: #666666;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}


#readFormToolBar LI SPAN A,
#moreCommandsList LI SPAN A
{
outline: none;
}

.moreCommandsList
{
list-style-type: none;
margin:1px;
padding:0px;
}

.moreMenuUnselected:hover
{
background: #d7e8f9;
}

#moreCommandsList LI.moreMenuSelected
{
background: #d7e8f9;
border-width: 1px;
border-style: solid;
border-color: #d7e8f9;
padding: 3px;
}

div#rofContainer
{
padding: 8px;

position: absolute;
top: 0px;
bottom: 0px;
left: 0px;
right: 0px;
}

div.ms-crm-Form-Container
{
border-width:1px;
border-style: solid;
<% if (Util.IsIosDevice(Page.Request)) { %>
margin-top:15px;
<% } else { %>
margin-top:5px;
<% } %>
}

.refresh-form div.ms-crm-Form-Container {
<% if (!Util.IsIosDevice(Page.Request)) { %>
margin-top:0px;
<% } %>
}

.ms-crm-Form-Container.noScroll.noOverflow {
overflow: hidden;
}

.ms-crm-HeaderTileElement .ms-crm-Header-Permission-key
{
margin-bottom: 2px;
}

.ms-crm-Inline-Edit.ms-crm-HeaderTile
{
width: 90px !important;
}

.ms-crm-HeaderTileElement .ms-crm-ReadField-Normal,
.ms-crm-HeaderTileElement .ms-crm-Field-Data-Print
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:8px;
<% } else { %>
padding-left:8px;
<% } %>
}


TD.ms-crm-Field-Required,DIV.ms-crm-Field-Required,TD.ms-crm-Field-Recommended,DIV.ms-crm-Field-Recommended,TD.ms-crm-ReadField-Normal,DIV.ms-crm-Field-Normal
{
overflow:		hidden;
text-overflow:	ellipsis;
vertical-align: top;
padding-top: 3px;
padding-bottom: 7px;
}
TD.ms-crm-ReadField-Normal-Footer
{
overflow:		hidden;
text-overflow:	ellipsis;
vertical-align:	top;
padding-bottom:		7px;
}
DIV.ms-crm-Form-Title-Data
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		3px;
<% } else { %>
margin-left:		3px;
<% } %>
}
TABLE.ms-crm-FormSection
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		11px;
<% } else { %>
margin-left:		11px;
<% } %>
width: 100%;
}
DIV.ms-crm-QuickForm TABLE.ms-crm-FormSection
{
margin-right: 0px;
margin-left:  0px;
width: 100%;
}
TD.ms-crm-ReadForm-LargeIcon-default
{
width: 53px;
padding-left:6px;
padding-right:6px;

}
td.ms-crm-InlineTabHeaderText
{
vertical-align: middle;
}
TABLE.headerContainerTable .ms-crm-ReadField-Normal,
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
line-height: 18px;
}

.read-optimised-form .headerContainerTable .ms-crm-Field-Data-Print
{
white-space: normal;
}

NOBR.ms-crm-Read-MessageTitle
{
width: 100%;
overflow: hidden;
text-overflow: ellipsis;
height: 18px;
}

div.ms-crm-Read-Message
{
padding: 3px 0 3px 0;
margin:0px;
border-top-width: 0px;
border-bottom-width: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: left;
border-left: 0px;
<% } else { %>
text-align: right;
border-right: 0px;
<% } %>
display:block;
padding-right: 24px;
padding-left: 24px;
white-space: nowrap;
position: relative;
}

IMG.ms-crm-Read-Image
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
align:left;
<% } else { %>
float: right;
align: right;
<% } %>
align: middle;
}

.ms-crm-label-icon span
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}



.refresh-form div.ms-crm-Form-Area.ms-crm-Form-Area-position
{
min-width: 400px;
}

.refresh-form div.ms-crm-InlineTabBody-Read
{
overflow: hidden;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 0px;
<% } else { %>
padding-right: 0px;
<% } %>
}

.refresh-form div.ms-crm-InlineTabContainer-Read
{
margin-top: 10px;
}

.refresh-form .ms-crm-Form-AreaContainerQuick  div.ms-crm-InlineTabContainer-Read
{
padding-top: 0px;
margin-top: 0px;
}

.refresh-form div.ms-crm-Form-HeaderContainer
{


<% if (Request.Browser.Browser == "IE") { %>
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 12px;
<% } else { %>
padding-left: 12px;
<% } %>
<% }  %>

border-bottom-width: 0px;

}

.refresh-form div.ms-crm-ReadForm-LargeIcon-default
{
display: none;
}

.refresh-form td.ms-crm-InlineTabHeaderText
{
padding: 3px;
}

.refresh-form DIV.ms-crm-InlineTab-Read
{
margin-bottom: 8px;
}

.refresh-form TD.ms-crm-Form-Section,
.refresh-form DIV.ms-crm-Form-Section
{
padding-top: 0px;
padding-bottom: 0px;
}

.refresh-form .qfclass-td-padding TABLE.ms-crm-FormSection > TBODY > TR > TD
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
}


.refresh-form DIV.ms-crm-Form-Title-Label,
.refresh-form DIV.ms-crm-Form-Title-Data
{
padding-left: 3px;
padding-right: 3px;
}
.refresh-form TD.ms-crm-Field-Required,
.refresh-form DIV.ms-crm-Field-Required,
.refresh-form TD.ms-crm-Field-Recommended,
.refresh-form .ms-crm-Field-Recommended,
.refresh-form TD.ms-crm-ReadField-Normal,
.refresh-form DIV.ms-crm-Field-Normal
{
padding-bottom: 0px;
}

#ProductSuggestions_LinkControl_flyoutContent td.ms-crm-ReadField-Normal
{
color: #444444;
font-weight: bold;
font-family: Segoe UI;
text-transform: uppercase;
width: 150px;
}

.refresh-form table.ms-crm-FormSection
{
margin: 0;
margin-top: 11px;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 12px;
<% } else { %>
margin-left: 12px;
<% } %>
}

.refresh-form DIV.ms-crm-Form-Title-Data
{
margin: 0;
}


.refresh-form .tabsControl
{
padding-left: 0px;
padding-right: 0px;
}


.refresh-form .ms-crm-FormBodyContainer .ms-crm-InlineTabHeaderExpander a
{
display: block;
}


.refresh-form .ms-crm-FormBodyContainer .ms-crm-InlineTabHeaderExpander
{
vertical-align: top;
margin-top: 7px;
}


.refresh-form .ms-crm-Nav-Subarea .ms-crm-Nav-Subarea-Icon,
.refresh-form .ms-crm-FormSelector .ms-crm-ImageStrip-formNavTreeLine,
.refresh-form .ms-crm-FormSelector .ms-crm-ImageStrip-formNavTreeLineBottom,
.refresh-form .ms-crm-Form-LeftBar-Header,
.refresh-form div.ms-crm-FormSelector
{
display: none;
}

.refresh-form .ms-crm-control-SideStrip-Hovered label
{
color: #0072C6;
}

.refresh-form .ms-crm-control-SideStrip label,
.refresh-form .ms-crm-control-SideStrip-Hovered label,
.refresh-form .visualizationImageTable:hover .ms-crm-stripNavBarLabelLeftRight
{
background-color: transparent;
}

.refresh-form ul.ms-crm-FormSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 7x;
<% } else { %>
margin-left: 7px;
<% } %>
}

.refresh-form .ms-crm-Form-Nav-Container
{
background-color: white;
}

.refresh-form li.ms-crm-Nav-Subarea,
.refresh-form li.ms-crm-FormSelector
{
margin-top: 2px;
height: 20px;
line-height: 20px;
padding-bottom: 2px;
}

.refresh-form li.ms-crm-Nav-Subarea a.ms-crm-Nav-Subarea-Link,
.refresh-form li.ms-crm-Nav-Subarea a.ms-crm-Nav-Subarea-Hovered,
.refresh-form li.ms-crm-FormSelector a.ms-crm-FormSelector-SubItem
{
height: 20px;
}

.refresh-form a.ms-crm-Nav-Subarea-Hovered,
.refresh-form li.ms-crm-FormSelector a.ms-crm-FormSelector-SubItem-Hovered
{

background-color: #D7EBF9;
}

.refresh-form a.ms-crm-Nav-Subarea-Disabled
{
background-color: transparent;
}

.refresh-form li.ms-crm-Nav-Subarea,
.refresh-form li.ms-crm-Nav-Subarea .ms-crm-Nav-Subarea-Link,
.refresh-form li.ms-crm-Nav-Group a
{
color: #666666;
}

.refresh-form div.ms-crm-FormLeftNav-RelatedRow
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 12px;
<% } else { %>
padding-left: 12px;
<% } %>
}

.refresh-form .ms-crm-Form-Nav-Container,
.refresh-form .ms-crm-control-SideStrip,
.refresh-form .ms-crm-readForm-navBar-hide div,
.refresh-form .ms-crm-Form-Nav-Container ul,
.refresh-form .ms-crm-Nav-LeftBar ul
{
background-color: transparent;
}


.refresh-form h2.ms-crm-Form
{
font-family: Segoe UI, Tahoma, Arial;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %>;
}


.refresh-form SPAN.ms-crm-Form
{
font-family: Segoe UI, Tahoma, Arial;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.21px.font_size") %>;
color: #1160B7;
}


.refresh-form .qfclass-td-padding h3.ms-crm-Form, .refresh-form .ms-crm-QuickForm h3.ms-crm-Form
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 15px;
<% } else { %>
padding-left: 15px;
<% } %>
}





.refresh-form td,
.refresh-form h3.ms-crm-Form
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
}


.ms-crm-CustomerCard-Name
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.18px.font_size") %> ! important;
}

.ms-crm-CustomerQf
{
position: relative;
top: -15px;
}

.ms-crm-CustomerDetails td.ms-crm-Field-Data-Print
{
padding: 0px ! important;
}

.ms-crm-CustomerDetails td.ms-crm-ReadField-Normal
{
padding-bottom: 0px;
}

.ms-crm-CustomerDetails div.ms-crm-Inline-Value
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 0px;
padding-right: 0px;
<% } else { %>
margin-left: 0px;
padding-left: 0px;
<% } %>
}

.ms-crm-CustomerTable
{
padding-top: 20px;
}

.refresh-form TABLE.ms-crm-FormSection > TBODY > TR > TD.ms-crm-CustomerTableReadonly
{
padding-left: 0px;
padding-right: 0px;
padding-top: 0px;
}
.refresh-form TABLE.ms-crm-FormSection
{
border-collapse:separate;
border-spacing:5px 0px;
background-color:#FFFFFF;
padding: 20px 18px;
}

.refresh-form .ms-crm-FormBodyContainer TABLE.ms-crm-FormSection
{
border-spacing:0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding: 15px 0px 15px 15px;
<% } else { %>
padding: 15px 15px 15px 0px;
<% } %>
}





.refresh-form-footer table
{
border-width: 0px;
background-color: #f8f8f8;
padding-left: 4px;
padding-right: 4px;
color: #666666;
}

div.refreh-form-footer.ms-crm-Form-FooterContainer,
div.refresh-form-footer td.ms-crm-Field-Data-Print
{
padding-right: 0px;
padding-left: 0px;
}

div.refresh-form-footer td.ms-crm-Field-Data-Print[visible=false]
{
display:table-cell !important;
visibility:hidden !important;
}

.refresh-form-footer .ms-crm-Inline-Value
{
margin-left: 0px;
padding-left: 10px;
color: #666666;
}

.refresh-form .status-message-container
{
position: relative;
}

.refresh-form .status-icon
{
background-color: #f8f8f8;
}

.refresh-form .alert-status-icon
{
position: absolute;
top:0;

<% if (CrmStyles.IsRightToLeft) { %>
right:-24px;
<% } else { %>
left:-24px;
<% } %>
}

.refresh-form .save-status-icon
{
position: absolute;
top: 4px;
hight: 100%;

<% if (CrmStyles.IsRightToLeft) { %>
left: 0;
<% } else { %>
right: 0;
<% } %>
}
.refresh-form-footer .status-message
{
position: relative;
color: #666666;
min-width: 100px;
}

.refresh-form-footer .status-message a
{
color: #666666;
}

.refresh-form-footer .status-message-flyout
{
position: absolute;
<% if (CrmStyles.IsRightToLeft) { %>
left: 20px;
<% } else { %>
right: 20px;
<% } %>
bottom: 30px;
z-index: 1000;

background-color: white;
border: 1px solid;
border-color: #D6D6D6;
width: 300px;
padding-top: 2px;
padding-bottom: 2px;

<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>

font-size: 12px;
color: #262626;
font-family: 'Segoe UI', 'Helvetica Neue',  Arial, sans-serif;
}

.status-message-squeeze
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-left:16px;
<% } else { %>
margin-right:16px;
<% } %>
width:100%;
overflow:hidden;
text-overflow:ellipsis;
}

.status-message-flyout-arrow
{
position: absolute;
bottom: -8px;

<% if (CrmStyles.IsRightToLeft) { %>
left: 150px;
<% } else { %>
right: 150px;
<% } %>

<%= FlipImage("v") %>
}

.status-message-flyout-arrow img
{
display: block;
background-color: white;
}

.refresh-form .vertical-divider
{
border-left:4px solid white;
height: 25px;
margin-top: -4px;
margin-bottom: -4px;
position: absolute;
top: -1px;
<% if (CrmStyles.IsRightToLeft) { %>
right: -35px;
<% } else { %>
left: -35px;
<% } %>
}

.entity-disabled .refresh-form-footer table,
.entity-disabled .refresh-form-footer .status-icon
{
background-color: #F4D89D;
}

.refresh-form-footer .ms-crm-Inline-GradientMask
{
display: none;
}

.refresh-form-footer td,
.refresh-form-footer .ms-crm-Read-Message div
{
vertical-align: middle;
}





.refresh-form-footer tr:first-child td.ms-crm-ReadField-Normal
{
padding: 0;
}

.float-right
{
<% if (CrmStyles.IsRightToLeft) { %>
float: left;
<% } else { %>
float: right;
<% } %>
}

.status-icon
{
width: 20px;
}

.inline-block
{
display: inline-block;
}


.ie7 .inline-block
{
zoom: 1;
*display: inline;
}

.ms-crm-tabcolumn0
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px;
<% } else { %>
padding-left: 0px;
<% } %>
}
.ms-crm-tabcolumn1, .ms-crm-tabcolumn2
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 40px;
<% } else { %>
padding-left: 40px;
<% } %>
}
.ms-crm-tabcolumn0, .ms-crm-tabcolumn1, .ms-crm-tabcolumn2
{
box-sizing: border-box;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
}

.ms-crm-quick-form-tabcolumn
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 0px !important;
<% } else { %>
padding-left: 0px !important;
<% } %>
}








@media screen and (max-width:1024px) and (min-width:768px)
{
.NWN .ms-crm-tabcolumn2, .NWN .ms-crm-tabcolumn0
{
width: 38.88%  !important;
clear:both;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}
.NNN .ms-crm-tabcolumn2, .NW .ms-crm-tabcolumn0, .WN .ms-crm-tabcolumn1
{
width: 33.33%  !important;
clear:both;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}

.NNN .ms-crm-tabcolumn0, .NNN .ms-crm-tabcolumn1, .WW .ms-crm-tabcolumn0, .WW .ms-crm-tabcolumn1, .NNN .ms-crm-tabcolumn2
{
width:50% !important;
}
.NWN .ms-crm-tabcolumn1
{
width:61.11% !important;
}
.NW .ms-crm-tabcolumn1, .WN .ms-crm-tabcolumn0
{
width: 66.66% !important;
}
.W .ms-crm-tabcolumn0
{
width: 100% !important;
}
}

@media screen and (max-width:768px)
{
.NNN .ms-crm-tabcolumn0, .NWN .ms-crm-tabcolumn0, .NNN .ms-crm-tabcolumn1, .NWN .ms-crm-tabcolumn1, .NNN .ms-crm-tabcolumn2, .NWN .ms-crm-tabcolumn2, .NW .ms-crm-tabcolumn0, .NW .ms-crm-tabcolumn1, .WN .ms-crm-tabcolumn0, .WN .ms-crm-tabcolumn1, .WW .ms-crm-tabcolumn0, .WW .ms-crm-tabcolumn1, .W .ms-crm-tabcolumn0
{
width:100%  !important;
clear:both;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 20px;
<% } else { %>
padding-left: 20px;
<% } %>
}
}