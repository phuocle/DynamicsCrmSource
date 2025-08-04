<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

UL.ms-crm-Nav-LeftBar
{
height:100%;
width:100%;
overflow-y: auto;
overflow-x: hidden;
-webkit-overflow-scrolling:touch;
padding: 0px;
margin: 0px;
list-style: none;

position:relative;
}

LI.ms-crm-Nav-Subarea
{
padding: 0px 0px 2px 6px;
margin: 0px;
}

LI.ms-crm-Nav-Group
{
margin: 0px;
padding-bottom: 4px;
}
LI.ms-crm-Nav-Group-HiddenFirst
{
border-top:	1px solid #6693cf;
padding: 0px;
margin: 0px;
height: 0px;
}
LI.ms-crm-Nav-Group-Hidden
{
padding: 0px;
margin: 0px;
height: 0px;
}

A.ms-crm-Nav-Subarea-Link,
A.ms-crm-Nav-Subarea-Link:link,
A.ms-crm-Nav-Subarea-Link:visited,
A.ms-crm-Nav-Subarea-Link:active,
A.ms-crm-Nav-Subarea-Link:hover,
A.ms-crm-Nav-Subitem-Link,
A.ms-crm-Nav-Subitem-Link:link,
A.ms-crm-Nav-Subitem-Link:visited,
A.ms-crm-Nav-Subitem-Link:active,
A.ms-crm-Nav-Subitem-Link:hover
{
height: 16px;
cursor: pointer;
padding: 1px 2px;
white-space: nowrap;
<% if (CrmStyles.IsRightToLeft) { %>
text-align: right;
<% } else { %>
text-align: left;
<% } %>
width: 90%;
display: inline-block;
}

A.ms-crm-Nav-Subitem-Link,
A.ms-crm-Nav-Subitem-Link:link,
A.ms-crm-Nav-Subitem-Link:visited,
A.ms-crm-Nav-Subitem-Link:active,
A.ms-crm-Nav-Subitem-Link:hover
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 22px;
<% } else { %>
margin-left: 22px;
<% } %>
}

A.ms-crm-Nav-Subarea-Selected,
A.ms-crm-Nav-Subarea-Selected:link,
A.ms-crm-Nav-Subarea-Selected:visited,
A.ms-crm-Nav-Subarea-Selected:active,
A.ms-crm-Nav-Subitem-Selected,
A.ms-crm-Nav-Subitem-Selected:link,
A.ms-crm-Nav-Subitem-Selected:visited,
A.ms-crm-Nav-Subitem-Selected:active
{
padding: 0px 1px;
border-width: 1px;
border-style: solid;
}

A.ms-crm-Nav-Subarea-Link:hover,
A.ms-crm-Nav-Subarea-Selected:hover,
A.ms-crm-Nav-Subarea-Hovered,
A.ms-crm-Nav-Subitem-Link:hover,
A.ms-crm-Nav-Subitem-Selected:hover,
A.ms-crm-Nav-Subitem-Hovered
{
padding: 0px 1px !important;
background-repeat: repeat-x;
border-width: 1px !important;
border-style: solid;
}

A.ms-crm-Nav-Subarea-Disabled,
A.ms-crm-Nav-Subarea-Disabled:link,
A.ms-crm-Nav-Subarea-Disabled:visited,
A.ms-crm-Nav-Subarea-Disabled:active,
A.ms-crm-Nav-Subarea-Disabled:hover
{
cursor: default;
padding: 1px 2px !important;
border-width: 0px !important;
background-image: none;
color:gray;
outline: none;
}

A.ms-crm-Nav-Group-Heading,
A.ms-crm-Nav-Group-Heading:link,
A.ms-crm-Nav-Group-Heading:visited,
A.ms-crm-Nav-Group-Heading:active,
A.ms-crm-Nav-Group-Heading:hover
{
<% if (CrmStyles.IsRightToLeft) { %>
height: 19px;
text-align: right;
<% } else { %>
height: 19px;
text-align: left;
<% } %>
cursor: pointer;
width: 100%;
display: inline-block;
text-decoration:none;
}

UL.ms-crm-Nav-Group-Subareas
{
display: none;
width: 100%;
margin: 0px;
}

NOBR.ms-crm-Nav-Subitem-Title
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 28px;
<% } else { %>
margin-left: 28px;
<% } %>
}

NOBR.ms-crm-Nav-Subarea-Title
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
}


NOBR.ms-crm-Nav-Subarea-Title,
NOBR.ms-crm-Nav-Group-Title
{
width: 80%;
display: inline-block;
font-size: 12px;
}

IMG.ms-crm-Nav-Subarea-Icon
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 15px;
<% } else { %>
margin-left: 15px;
<% } %>
width: 16px;
height: 16px;
vertical-align: top;
}

IMG.ms-crm-Nav-Group-RightIcon
{
<% if (CrmStyles.IsRightToLeft) { %>
-moz-transform: scaleX(-1);
-webkit-transform: scaleX(-1);
transform: scaleX(-1);
<% } %>
}

A.ms-crm-FormSelector,
A.ms-crm-FormSelector:link,
A.ms-crm-FormSelector:visited,
A.ms-crm-FormSelector:hover,
A.ms-crm-FormSelector-Opened,
A.ms-crm-FormSelector-Opened:link,
A.ms-crm-FormSelector-Opened:visited,
A.ms-crm-FormSelector-Opened:hover,
DIV.ms-crm-FormSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 4px;
<% } else { %>
padding-left: 4px;
<% } %>
height: 18px;
}

DIV.ms-crm-FormSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 4px;
<% } else { %>
margin-left: 4px;
<% } %>
}

A.ms-crm-FormSelector,
A.ms-crm-FormSelector:link,
A.ms-crm-FormSelector:visited,
A.ms-crm-FormSelector:hover,
A.ms-crm-FormSelector-Opened,
A.ms-crm-FormSelector-Opened:link,
A.ms-crm-FormSelector-Opened:visited,
A.ms-crm-FormSelector-Opened:hover
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 3px;
<% } else { %>
margin-left: 3px;
<% } %>
cursor: pointer;
}

NOBR.ms-crm-FormSelector
{
vertical-align: middle;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Lighter.font_weight")%>;
}

SPAN.ms-crm-FormSelector
{
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
vertical-align: top;
}

UL.ms-crm-FormSelector
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 4px;
<% } else { %>
margin-left: 4px;
<% } %>

padding-bottom: 2px;
border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: #d6d6d6;
}

.refresh-form UL.ms-crm-FormSelector
{
border-bottom-width: 0;
border-bottom-style: none;
}

.ms-crm-Form-Nav-Container
{
background-color: #F3F3F3;
vertical-align: top;
position: absolute;
<% if (Util.IsForOutlookClient()) { %>
top: 84px;
<% } else { %>
top: 0px;
<% } %>
bottom:0px;
margin-bottom:8px;
<% if (Util.IsIosDevice(Page.Request)) { %>
overflow-y:auto;
overflow-x:hidden;
margin-top:15px;
-webkit-overflow-scrolling:touch;
<% } else { %>
margin-top:5px;
<% } %>

<% if (CrmStyles.IsRightToLeft) { %>
right: 0;
<% } else { %>
left: 0;
<% } %>
}

A.ms-crm-FormSelector-SubItem,
A.ms-crm-FormSelector-SubItem:link,
A.ms-crm-FormSelector-SubItem:visited
{
margin: 0px 1px;
cursor: pointer;
width: 99%;
display: inline-block;
height: 18px;
}

A.ms-crm-FormSelector-SubItem-Selected,
A.ms-crm-FormSelector-SubItem-Selected:link,
A.ms-crm-FormSelector-SubItem-Selected:visited,
A.ms-crm-FormSelector-SubItem-Selected:active
{
margin: 0px;
border-width: 0px 1px 0px 1px;
border-style: solid;
}

A.ms-crm-FormSelector-SubItem:hover,
A.ms-crm-FormSelector-SubItem-Selected:hover,
A.ms-crm-FormSelector-SubItem-Hovered
{
<% if (CrmStyles.IsRightToLeft) { %>
margin: 0px 0px 0px 1px !important;
<% } else { %>
margin: 0px 1px 0px 0px !important;
<% } %>
border-width: 0px 1px 0px 1px !important;
border-style: solid;
cursor: pointer;
background-repeat: repeat-x;
width: 99%;
}

NOBR.ms-crm-FormSelector-SubItem
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
width: 80%;
display: inline-block;
}

DIV.ms-crm-FormSelector-SubItem
{
width: 80%;
overflow: hidden;
text-overflow: ellipsis;
}

IMG.ms-crm-FormSelector-SubItem
{
<% if (CrmStyles.IsRightToLeft) { %>
margin-right: 5px;
<% } else { %>
margin-left: 5px;
<% } %>
}

.ms-crm-FormLeftNav-StandardLayout
{
height:100%;
}

.ms-crm-FormLeftNav-StandardLayout.onTop
{
z-index: 2;
position: relative;
}

DIV.ms-crm-Nav-Subarea-Title
{
text-overflow: ellipsis;
overflow: hidden;
width: 98%;
}
NOBR.ms-crm-Nav-Subarea-Title
{
display: inline-block;
line-height: 15px;
}
<% if (this.IsVisualRefreshEnabled)
{ %>
A.ms-crm-FormSelector
{
height:auto
}
<% } %>