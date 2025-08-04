<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

body.ms-crm-iframeInnerBody
{
<% if (Request.Browser.Browser != "IE")
   { %>
    overflow: hidden;
<% } %>
}

BODY.ms-crm-AreaPage
{
background-color: transparent;
}
.ms-crm-Form
{
margin: 0px;
}

DIV.ms-crm-TabS,
DIV.ms-crm-Tab
{
overflow-y: auto;
padding: 10px;
}

DIV.ms-crm-InlineTabContainer
{
height: 100%;
}

DIV.ms-crm-InlineTab,
TD.ms-crm-Form-Areas
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 6px 0px 6px 6px;
<% }
   else
   { %>
    padding: 6px 6px 6px 0px;
<% } %>
}

.ms-crm-NRForm-Background
{
border-top-width: 1px;
border-top-style: dotted;
position:absolute;
top:98px;
left:0px;
right:0px;
bottom:24px;
}

TABLE.ms-crm-FormSection
{
width: 100%;
}

DIV.ms-crm-FormSection-Container
{
<% if (CrmStyles.IsRightToLeft && Request.Browser.Browser == "Chrome")
   { %>
    padding-left: 8px;
<% } %>
}

IMG.icon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right: 2px;
    margin-left: 5px;
<% }
   else
   { %>
    margin-left: 2px;
    margin-right: 5px;
<% } %>
}

.ms-crm-IE7-Height-Fix-Dummy-Container-PrintForm
{
width:100%;
}

TD.ms-crm-Form-SectionBar-Spacer
{
height: 7px;
}

TD.ms-crm-Form-SectionBar,
DIV.ms-crm-Form-SectionBar
{
border-bottom-width: 1px;
border-bottom-style: solid;
}

.ms-crm-Field-Required,TD.ms-crm-Field-Recommended,DIV.ms-crm-Field-Recommended,TD.ms-crm-Field-Normal,DIV.ms-crm-Field-Normal
{
overflow: hidden;
text-overflow: ellipsis;
padding-top: 5px;
}
div.ms-crm-Form-StatusBar,
TABLE.ms-crm-Form-StatusBar
{
color: #ffffff;
}

table.ms-crm-Form-Dashboard
{
width: 100%;
height: 100%;
table-layout: fixed;
}
body.ms-crm-Form-Dashboard
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    dir:rtl;
<% } %>
}

DIV.ms-crm-FSBContainer
{
height:24px;
position:absolute;
bottom:0px;
left:0px;
right:0px;
}
div.ms-crm-Form-StatusBar,
TD.ms-crm-Form-StatusBar
{
color: #000000;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 5px;
<% }
   else
   { %>
    padding-left: 5px;
<% } %>
height: 24px;
border-bottom: 1px solid #485673;
}

LABEL
{
cursor: pointer;
}

.ms-crm-Form-LeftBar-Header
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    padding-right:12px;
<% }
   else
   { %>
    text-align: left;
    padding-left:12px;
<% } %>
vertical-align: top;
padding-top: 22px;
padding-bottom:4px;
}

.ms-crm-Form-LeftBar
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
<% }
   else
   { %>
    text-align: left;
<% } %>


padding-top: 4px;
vertical-align: top;
overflow: auto;
border-top-style: dotted;

border-top-width: 1px;
}

.ms-crm-Form-AreaContainer-qrk
{
border-top-style: dotted;
border-top-width: 1px;
}

.ms-crm-NRForm-Background,
.ms-crm-Form-Background
{
background-repeat: repeat-x;
}

.ms-crm-Form-HeaderContainer
{
min-height: 40px;
border-bottom-width: 1px;
border-bottom-style: solid;
}

.ms-crm-Form-HeaderContainer-Print
{
min-height: 40px;
}

.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left: 10px;
<% }
   else
   { %>
    padding-right: 10px;
<% } %>

}

.ms-crm-Form-FooterContainer TD.ms-crm-Field-Data-Print
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
<% } %>
}

.ms-crm-Form-FooterContainer TD.ms-crm-Field-Label-Print span
{
white-space: nowrap;
}


TABLE.ms-crm-Email-Body-Error
{
background-color: #ffffae;
border: 1px solid #c5c5c5;
table-layout: fixed;
}

DIV.ms-crm-Form-Area-Customize
{
overflow-x: auto;
}

DIV.ms-crm-Form-Area-Customize
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding: 0px 10px 10px 7px;
<% }
   else
   { %>
    padding: 0px 7px 10px 10px;
<% } %>

}
.ms-crm-NRForm-Main-Container,
.ms-crm-Form-Main-Container
{
position: absolute;
top: 0px;
bottom: 0px;
left:0px;
right:0px;
}





@media print
{
.ms-crm-Form-Main-Container,
.ms-crm-Form-Main-Container-Print
{
margin-top: 0px;
margin-bottom: 5px;
margin-right: 8px;
margin-left: 8px;
}
}

@media screen
{
.ms-crm-Form-Main-Container,
.ms-crm-Form-Main-Container-Print
{
margin: 5px 8px 8px 8px;
}
}

.ms-crm-Form-Page
{
padding: 1px;
border-width: 1px;
border-style: solid;
background-repeat: repeat-x;
height: 100%;
position: relative;
left: 0px;
right: 0px;




<% if (Request.Browser.Browser == "IE" && (Request.Browser.MajorVersion == 9 || (Request.UserAgent != null && Request.UserAgent.Contains("Trident/5.0"))))
   { %>
    display:inline-block;
    width:100%;
    clear:both;
<% } %>
}


DIV.ms-crm-Form-Layout,
TABLE.ms-crm-Form-Layout
{
table-layout: fixed;
width: 100%;
height: 100%;
background-repeat: repeat-x;
}


TABLE.ms-crm-Form-Grid-Layout,
TABLE.ms-crm-Form-SubGrid-Layout-Selected,
TABLE.ms-crm-Form-Chart-Layout-Selected,
TABLE.ms-crm-Form-AssociatedGrid-Layout,
TABLE.ms-crm-Form-SubGrid-Layout
{
table-layout: fixed;
width: 100%;
height: 100%;
outline: none;
}


div.ms-crm-Form-SubGrid-Layout-Print
{
outline: none;
top:1px;
bottom:1px;
left:1px;
right:1px;
width: auto !important;
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion == 7)
   { %>
    height:auto !important;
<% } %>
}

div.ms-crm-Form-Grid-Layout,
div.ms-crm-Form-SubGrid-Layout-Selected,
div.ms-crm-Form-Chart-Layout-Selected,
div.ms-crm-Form-AssociatedGrid-Layout,
div.ms-crm-Form-AssociatedGrid-Layout-Lite,
div.ms-crm-Form-SubGrid-Layout,
div.ms-crm-Form-SubGrid-Layout-Lite,
div.ms-crm-Form-Card-Layout
{
outline: none;
top:1px;
bottom:1px;
left:1px;
right:1px;
position:absolute;
}

div.ms-crm-Form-AssociatedGrid-Layout-Lite
{
padding-top: 20px;
}

div.ms-crm-Form-SubGrid-Layout,
div.ms-crm-Form-SubGrid-Layout-Selected
{
overflow: hidden;
}

div.ms-crm-Form-SubGrid-Layout-Selected,
div.ms-crm-Form-AssociatedGrid-Layout,
div.ms-crm-Form-AssociatedGrid-Layout-Lite
{
top:2px;
bottom:2px;
left:2px;
right:2px;
position:absolute;
}

div.ms-crm-Form-SubGrid-Layout-Selected,
div.ms-crm-Form-AssociatedGrid-Layout,
{
border: 2px #008BBE solid;
}


TABLE.ms-crm-Form-SubGrid-Layout-Selected,
TABLE.ms-crm-Form-AssociatedGrid-Layout
{
border:2px #008BBE solid;
}
.ms-crm-Form-Chart-Layout-Selected
{
border: 1px #008BBE solid;
}
.ms-crm-Form-SubGrid-Layout-Print
{
border: 1px #a1a5aa solid;
}

DIV.ms-crm-Roles-Form-Area
{
width: 100%;
height: 100%;
overflow: auto;
}

.ms-crm-Form-FooterContainer
{
padding-bottom: 0px;
padding-left: 6px;
padding-right: 6px;
padding-top: 2px;
min-height: 20px;
border-top-width: 1px;
border-top-style: solid;
background-repeat:repeat-x;
background-position: bottom;
}

.ms-crm-Form-FooterContainer-Print
{
padding-bottom: 0px;
padding-left: 6px;
padding-right: 6px;
padding-top: 2px;
min-height: 20px;
border-top-width: 1px;
border-top-style: dotted;
background-repeat:repeat-x;
background-position: bottom;
}

.ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm
{
height: 100%;
position: relative;
}

.ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm > .ms-crm-Form-Area {
position: absolute;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
overflow: auto;
}

.RelatedInformationPaneContainer,
.ms-crm-FormBodyContainer,
.ms-crm-FormAndRIContainer
{
position: absolute;
top:0px;
bottom:0px;
}

.ms-crm-NoRIPane
{
left:0px;
right:0px;
}

.ms-crm-FormBodyContainer
{
overflow:auto;
}

.ms-crm-FormAndRIContainer
{
left:0px;
right:0px;
}

.ms-crm-FormBodyRIExpanded
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    left:210px;
    right:0px;
<% }
   else
   { %>
    right:210px;
    left:0px;
<% } %>

}

.ms-crm-FormBodyRICollapsed
{

<% if (CrmStyles.IsRightToLeft)
   { %>
    left:29px;
    right:0px;
<% }
   else
   { %>
    right:29px;
    left:0px;
<% } %>
}

.ms-crm-Form-Container
{
position: relative;
width: 100%;
height: 100%;
}


TABLE.headerDataContainerTable div.ms-crm-Field-Data-Print,
.ms-crm-Form-FooterContainer div.ms-crm-Field-Data-Print
{
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
width: 100%
}

TD.ms-crm-Form-Header-splitter
{
height: 8px;
}




TABLE.ms-crm-Form-StandaloneSection
{
<% if (Request.Browser.Browser == "IE")
   { %>
    <% if (Request.Browser.MajorVersion == 7)
       { %>
        table-layout: fixed;
    <% }
       else
       { %>
        table-layout: auto;
    <% } %>
<% } %>
<%
   else
   { %>
    table-layout: fixed;
<% } %>
width: 100%;
line-height: 16px;
overflow: hidden;
}
.ms-crm-Field-Label-Print
{
overflow: hidden;
text-overflow: ellipsis;
vertical-align: top;
}

.ms-crm-Field-Data-Print
{
vertical-align: top;
word-wrap: break-word;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

.containerClass
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right:40px;
<% }
   else
   { %>
    padding-left:40px;
<% } %>
}

TABLE.formHeader
{
table-layout: auto;
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
font-size: <%= WebUtility.GetFontResourceForStyle("General.17px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}

.ms-crm-Form-Title-Data h1
{
margin-bottom: 0px;
margin-top:0px;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
}
TABLE.headerContainerTable .ms-crm-Field-Label-Print
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
line-height: 18px;
}

TABLE.headerContainerTable .ms-crm-Field-Data-Print,
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.13px.font_size") %>;
font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %>;
line-height: 15px;
}

TABLE.headerContainerTable DIV.ms-crm-Field-Data-Print
{
padding-bottom: 7px;
}

DIV.ms-crm-Field-Data-Print
{
font-weight : <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
}

.ms-crm-Field-DateTime-Print,
.ms-crm-Field-Number-Print
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    direction: rtl;
    text-align: right;
<% }
   else
   { %>
    direction: ltr;
<% } %>
}
TABLE.ms-crm-Form-Grid-Layout-Print
{
table-layout: auto;
}
DIV.ms-crm-Form-Breadcrumb
{
padding-bottom: 5px;
position: relative;
height: 43px;
}
DIV.ms-crm-Form-Breadcrumb:after {
clear: both;
content: ".";
display: block;
height: 0;
visibility: hidden;
}
SPAN.ms-crm-Form-Breadcrumb
{
position: absolute;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align: right;
    right: 3px;
    left: 180px;
<% }
   else
   { %>
    right: 180px;
    left: 3px;
<% } %>
line-height: 20px;
vertical-align: baseline;
margin-top: 3px;
}

DIV.ms-crm-Form-Information-Title
{
line-height: 26px;
border-bottom-width: 1px;
border-bottom-style: solid;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
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



.ms-crm-Dashboard-Area
{
height: 100%;
min-width: 400px;
max-width: 1920px;
}

.ms-crm-Field-Float
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right ;
<% }
   else
   { %>
    float: left ;
<% } %>
}

#WebResource_PersonalWall_d{
display: -webkit-flex;
display: -moz-flex;
display: -ms-flexbox;
display: flex;
-webkit-flex-direction: column;
-moz-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
position: relative;
}

#WebResource_PersonalWall_d div+span{
position: relative;
display:block;
-webkit-flex: 1 1 auto;
-moz-flex: 1 1 auto;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
}

#WebResource_PersonalWall{
position: absolute;
}








@media screen and (max-width:1024px) and (min-width:768px)
{
.ms-crm-dashboardOddCell:not(.fullWidthRow),
.ms-crm-dashboardEvenCell:not(.fullWidthRow),
.ms-crm-dashboardFirstCell:not(.fullWidthRow)
{
width: 50% !important;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right !important;
<% }
   else
   { %>
    float: left !important;
<% } %>
}
.ms-crm-dashboardOddCell
{
clear:both;
}
.ms-crm-dashboardLastCell
{
width:100% !important;
}
}

@media screen and (max-width:768px)
{
.ms-crm-dashboardFirstCell, .ms-crm-dashboardOddCell, .ms-crm-dashboardEvenCell, .ms-crm-dashboardLastCell
{
width:100% !important;
clear:both !important;
}
}
.ms-crm-notification
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: left;
<% }
   else
   { %>
    float: right;
<% } %>
text-align: left;
margin-top: 10px;
}
.ms-crm-notification a
{
font-size:12px;
color: #0072c5;
text-decoration: none;
vertical-align: middle;
margin-left: 5px;
margin-right: 10px;
}
.ms-crm-notification a:hover
{
font-size:12px;
color: #0072c5;
text-decoration: none;
vertical-align: middle;
margin-left: 5px;
margin-right: 10px;
}
.ms-crm-notification-container {
position: fixed;
padding: 15px;
margin: 0.5em 0 3em;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-right:62%;
<% } %>
color: #000;
border-radius: 10px;
background-color:#F3F3F3;
border-style: solid;
width:300px;
height:400px;
z-index:10;
right:10px;
border-width:1px;
border-color:#DDDDDD;
visibility:hidden;
padding:20px 30px 20px 30px;

}


.ms-crm-notification-container:after {
content: "";
display: block;
position: absolute;
top: -15px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    left: 20%;
<% }
   else
   { %>
    left: 75%;
<% } %>
width: 0;
border-width: 0px 15px 15px 15px;
border-style: solid;
border-color: #DDDDDD transparent;
}

.ms-crm-notification-body
{
font:normal normal normal 12px / 18px 'SegoeUI', 'Segoe UI';
background-color:#F3F3F3;
color:#000000;
padding-top:20px;
}
.ms-crm-notification-body DIV
{
font:normal normal normal 12px / 18px 'SegoeUI', 'Segoe UI';
background-color:#F3F3F3;
color:#000000;
border:none;
word-wrap: break-word;
text-align:left;
}
.ms-crm-notification-body>div[style]
{
height:auto !important;
}
.ms-crm-notification-body div span
{
white-space:normal;
}
.ms-crm-notification-close
{
color:#aaaaaa;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:left;
<% }
   else
   { %>
    float:right;
<% } %>
font-size:20px;
font-weight:bold;
}
.ms-crm-notification-close:hover,.ms-crm-notification-close:focus
{
color:#000;
text-decoration: none;
cursor: pointer;
}

.ms-crm-notification-image
{
vertical-align:middle;
width:16px;
height:16px;
}

.ms-crm-notification-title
{
font:normal normal lighter 27px / 1.2em 'SegoeUI', 'Segoe UI';
color:#262626;
<% if (CrmStyles.IsRightToLeft)
   { %>
    text-align:right;
    padding-bottom:50px;
<% }
   else
   { %>
    text-align:left;
    padding-bottom:20px;
<% } %>

border-bottom-style:solid;
border-width:1px;
border-color:#DDDDDD;
}

.ms-crm-notification-subtitle
{
font:normal normal lighter 12px / 1.2em 'SegoeUI', 'Segoe UI';
color:#D9880F;
padding:10px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% } %>
}
.ms-crm-notification-notificationHeader
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float:right;
<% } %>
}

@media screen and (min-color-index:0)
and(-webkit-min-device-pixel-ratio:0) { @media
{
.containerClass{
height: 245px!important;
}
}}