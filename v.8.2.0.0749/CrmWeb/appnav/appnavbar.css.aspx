<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


div.crmAppNav
{
background-repeat: repeat-x;
}

div.ms-crm-NavBar-Header-Title
{
display : block;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-right: 10px;
<% }
   else
   { %>
    padding-left: 10px;
<% } %>
}

nobr.ms-crm-NavBar-Header-Title
{
vertical-align: middle;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.600.font_weight") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
color : #000000;
overflow : hidden;
text-overflow: ellipsis;
display : block;
}

img.ms-crm-NavBar-Toggle-Icon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    float : left ;
<% }
   else
   { %>
    float : right ;
<% } %>

margin-top : 3px ;
}

UL.ms-crm-NavBar-Groups
{
list-style: none;
}
tr.ms-crm-Splitter td
{
vertical-align: middle;
padding: 0px;
}
LI.ms-crm-NavBar-Group
{
margin-top: 4px;
}

A.ms-crm-NavBar-Group-Heading,
A.ms-crm-NavBar-Group-Heading:link,
A.ms-crm-NavBar-Group-Heading:visited,
A.ms-crm-NavBar-Group-Heading:active,
A.ms-crm-NavBar-Group-Heading:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height : 19px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
color: #15428b;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %>;
cursor: pointer;
}

LI.ms-crm-NavBar-Subarea
{
height : 16px;
line-height : 16px;
margin-left: 3px;
margin-right: 3px;
padding: 1px;
}

LI.ms-crm-NavBar-Subarea-Hovered
{
padding: 0px;
border-width: 1px;
border-style: solid;
}

LI.ms-crm-NavBar-Subarea-Selected
{
padding: 0px;
}

LI.ms-crm-NavBar-Subarea-Selected-Hovered
{
padding: 0px;
}

A.ms-crm-NavBar-Subarea-Link,
A.ms-crm-NavBar-Subarea-Link:link,
A.ms-crm-NavBar-Subarea-Link:visited,
A.ms-crm-NavBar-Subarea-Link:active,
A.ms-crm-NavBar-Subarea-Link:hover
{
height: 100%;
display : block;
cursor: pointer;
overflow : hidden;
text-overflow : ellipsis;
}

A.ms-crm-NavBar-Subarea-LinkShrinked
{
height: 100%;
<% if (CrmStyles.IsRightToLeft)
   { %>
    padding-left:14px;
<% }
   else
   { %>
    padding-right:14px;
<% } %>
display : block;
cursor: pointer;
overflow : hidden;
text-overflow : ellipsis;
}

A.ms-crm-NavBar-Subarea-Link-Selected,
A.ms-crm-NavBar-Subarea-Link-Selected:link,
A.ms-crm-NavBar-Subarea-Link-Selected:visited,
A.ms-crm-NavBar-Subarea-Link-Selected:active,
A.ms-crm-NavBar-Subarea-Link-Selected:hover
{
}

A.ms-crm-NavBar-Subarea-Link-Hovered,
A.ms-crm-NavBar-Subarea-Link-Hovered:link,
A.ms-crm-NavBar-Subarea-Link-Hovered:visited,
A.ms-crm-NavBar-Subarea-Link-Hovered:active,
A.ms-crm-NavBar-Subarea-Link-Hovered:hover
{
}

A.ms-crm-NavBar-Subarea-LinkRest,
A.ms-crm-NavBar-Subarea-Link-Rest:link,
A.ms-crm-NavBar-Subarea-Link-Rest:visited,
A.ms-crm-NavBar-Subarea-Link-Rest:active,
A.ms-crm-NavBar-Subarea-Link-Rest:hover
{
}

NOBR.ms-crm-NavBar-Group-Title
{
width: 80%;
overflow: hidden;
text-overflow: ellipsis;
display: inline-block;
margin-bottom: 1px;
color: #262626;
}

IMG.ms-crm-NavBar-Group-RightIcon
{
margin-top: 1px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    <%= FlipImage("h") %>
<% } %>
}

IMG.ms-crm-NavBar-Subarea-Icon
{
width: 16px;
height: 16px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left : 5px;
    margin-right : 3px;
<% }
   else
   { %>
    margin-left : 3px;
    margin-right : 5px;
<% } %>
<% if (Request.Browser.Browser != "IE")
   { %>
    vertical-align:top;
<% } %>
}

UL.ms-crm-NavBar-Group-Subareas IMG.ms-crm-NavBar-Subarea-Icon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left : 5px;
    margin-right : 17px;
<% }
   else
   { %>
    margin-left : 17px;
    margin-right : 5px;
<% } %>
}

NOBR.ms-crm-NavBar-Subarea-Title
{
width: 80%;
overflow: hidden;
text-overflow: ellipsis;
font-size : <%= WebUtility.GetFontResourceForStyle("General.11px.font_size") %> ;
}

div.ms-crm-NavBar-Subareas
{
overflow-x : hidden ;
overflow-y : auto ;
-webkit-overflow-scrolling:touch;
margin-top: 4px;
margin-bottom: 4px;
}

div.ms-crm-NavBar-Areas
{
list-style-type : none ;
}

UL.ms-crm-NavBar-Areas
{
margin-top: 4px;
padding-bottom: 4px;
}

LI.ms-crm-NavBar-Area
{
height: 22px;
padding: 1px;
margin: 4px 4px 0 2px;
color: #373737;
}

LI.ms-crm-ImageStrip-wunderbar_sel
{
padding: 0px;
border-width: 1px;
border-style: solid;
color: #000000;
}
LI.ms-crm-ImageStrip-wunderbar_hover
{
padding: 0px;
border-width: 1px;
border-style: solid;
}

A.ms-crm-NavBar-Area-Link,
A.ms-crm-NavBar-Area-Link:link,
A.ms-crm-NavBar-Area-Link:visited,
A.ms-crm-NavBar-Area-Link:active,
A.ms-crm-NavBar-Area-Link:hover
{
height: 22px;
cursor: pointer;
color: #000000;
white-space: nowrap;

overflow : hidden ;
text-overflow : ellipsis ;
display : block ;
}

IMG.ms-crm-NavBar-Area-Icon
{
width: 16px;
height: 16px;
vertical-align : center;
align : absmiddle;
display : inline;
<% if (CrmStyles.IsRightToLeft)
   { %>
    margin-left : 8px;
    margin-right : 4px;
<% }
   else
   { %>
    margin-left : 4px;
    margin-right : 8px;
<% } %>
}

NOBR.ms-crm-NavBar-Area-Title
{
display : inline;
line-height : 20px;
overflow : hidden;
text-overflow : ellipsis;

vertical-align : center;
height: 100%;
width: 80%;

font-weight : <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight") %> ;
font-size: <%= WebUtility.GetFontResourceForStyle("General.14px.font_size") %>;
}

SPAN.ms-crm-NavBar-Area-Title
{
height: 100%;
line-height : 22px;
display : block;
margin-left: 8px;
}

DIV.ms-crm-Floating-Div
{
position : fixed;
left : 0 ;
top : 0 ;

background-image : url("/_imgs/imagestrips/transparent_spacer.gif");
background-repeat : repeat-x ;
}

DIV.ms-crm-NavBar-Floating-Nav
{
z-index : 90 ;
}

UL.ms-crm-NavBar-Title-Icon
{
margin: 0px;
padding: 0px;
list-style: none;
}

LI.ms-crm-NavBar-Title-Icon
{
height: 28px;
<% if (CrmStyles.IsRightToLeft)
   { %>
    float: right;
<% }
   else
   { %>
    float: left;
<% } %>
}

SPAN.ms-crm-NavBar-Title-Icon
{
height: 26px;
overflow-y: hidden;
cursor: default;
display: inline-block;
margin-top: 2px;
}

A.ms-crm-NavBar-Title-Icon,
A.ms-crm-NavBar-Title-Icon-Hovered,
A.ms-crm-NavBar-Title-Icon-Selected
{
cursor: default;
display: inline-block;
height:24px;
}

A.ms-crm-NavBar-Title-Icon
{
border: 1px solid transparent;
}

A.ms-crm-NavBar-Title-Icon-Hovered
{
cursor: default;
}

A.ms-crm-NavBar-Title-Icon-Selected
{
cursor: default;
}

TD.ms-crm-NavBar-Title-HomeRecentIcon
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    align : right ;
<% }
   else
   { %>
    align : left ;
<% } %>
width : 75px;
}

IMG.ms-crm-NavBar-Title-Icon-Hovered
{
background-color : #FFF6D7;
}

IMG.ms-crm-NavBar-Title-Icon-Selected
{
background-color : #FFDC63;
}

DIV.ms-crm-NavBar-Resizer
{
height : 100%;
background-color : #B6B9BD;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float : left ;
<% }
   else
   { %>
    float : right ;
<% } %>
}

DIV.ms-crm-NavBar-ResizerMotion
{
z-index : 1000;
width : 3px;
position : absolute ;
display : none;
background-color : #A1A5AA;
}

IMG.ms-crm-NavBar-Resizer
{
height : 100%
vertical-align : middle;
cursor : col-resize;
}

DIV.ms-crm-NavBar-Container
{
height : 100%;
}

TABLE.ms-crm-NavBar-Resizer
{
cursor : col-resize;
}

a.ms-crm-subarea-vs
{
height : 100%;
display : inline;
position : relative;
top : -16px;

<% if (CrmStyles.IsRightToLeft)
   { %>
    float : left;
<% }
   else
   { %>
    float : right;
<% } %>
}

a.ms-crm-subarea-vs-hover
{
width : 14px;
cursor : pointer;

<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right : 1px solid #61A6E4;
<% }
   else
   { %>
    border-left : 1px solid #61A6E4;
<% } %>
}

a.ms-crm-subarea-vs-sel
{
width : 14px;
cursor : pointer;

<% if (CrmStyles.IsRightToLeft)
   { %>
    border-right : 1px solid #61A6E4;
<% }
   else
   { %>
    border-left : 1px solid #61A6E4;
<% } %>
background-color: #A7CDF0;
}

img.ms-crm-subarea-vs,
img.ms-crm-subarea-vsIE10
{
<% if (CrmStyles.IsRightToLeft)
   { %>
    <%= FlipImage("h") %>
<% } %>
}

.ms-crm-stripNavBarLeftRight
{
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9)
   { %>
    font-family: Tahoma;
<% }
   else
   { %>
    font-family: Segoe UI;
<% } %>
<% if (Request.Browser.Browser == "IE" && Request.Browser.MajorVersion < 9)
   { %>
    <% if (CrmStyles.IsRightToLeft)
       { %>
        writing-mode: tb-rl;
    <% }
       else
       { %>
        writing-mode: tb-rl;
        filter: flipv fliph;
    <% } %>

<% }
   else
   { %>
    display: inline-block;
    <% if (CrmStyles.IsRightToLeft)
       { %>
        writing-mode: tb-rl;
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
    <% }
       else
       { %>
        margin-left: -20px;
        -o-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
        -moz-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
    <% } %>
<% } %>
}