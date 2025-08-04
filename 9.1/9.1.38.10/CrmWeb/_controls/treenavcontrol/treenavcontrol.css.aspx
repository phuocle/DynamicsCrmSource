<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

div.tree_container
{
height: 100%;
width: 185px;
overflow-x: hidden;
overflow-y: hidden;
background-repeat: repeat-x;
display: block;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 1px;
<% } else { %>
padding-left : 1px;
<% } %>
border-left-width:1px;
border-right-width:1px;
border-left-style:solid;
border-right-style:solid;
}

div.treenav_footer,
div.treenav_header
{
height: 26px;
width: 100%;
overflow-x: hidden;
margin: 0px;
}

div.treenav_body
{
height:100%;
width:100%;
overflow-y: auto;
overflow-x : auto;
display: block;
padding-top : 4px;
}

div.treenav_leaf
{
display: block;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 0px ;
<% } else { %>
padding-left : 0px ;
<% } %>
}

nobr.ms-crm-navtree-header-title
{
vertical-align: middle;
font-weight:    <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
overflow	 :hidden;
text-overflow:  ellipsis;
padding-top  : 4px ;

<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 4px ;
<% } else { %>
padding-left : 4px ;
<% } %>
}

img.ms-crm-navtree-toggle-icon
{
<% if (CrmStyles.IsRightToLeft) { %>
float : left ;
<% } else { %>
float : right ;
<% } %>
margin-top : 0px ;
}


a.ms-crm-navtree-group-heading,
a.ms-crm-navtree-group-heading:link,
a.ms-crm-navtree-group-heading:visited,
a.ms-crm-navtree-group-heading:active,
a.ms-crm-navtree-group-heading:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height : 24px ;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
}

a.ms-crm-navtree-group-heading-selected,
a.ms-crm-navtree-group-heading-selected:link,
a.ms-crm-navtree-group-heading-selected:visited,
a.ms-crm-navtree-group-heading-selected:active,
a.ms-crm-navtree-group-heading-selected:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height : 24px ;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
background-image: url(/_imgs/nav_header_back.gif);
background-repeat: repeat-x;
border-width: 0px;
}

li
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:1px;
<% } else { %>
padding-left:1px;
<% } %>
}

a.ms-crm-navtree-subarea-link,
a.ms-crm-navtree-subarea-link:link,
a.ms-crm-navtree-subarea-link:visited,
a.ms-crm-navtree-subarea-link:active,
a.ms-crm-navtree-subarea-link:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height: 18px;
cursor: pointer;

font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
}

a.ms-crm-navtree-subarea-link-selected,
a.ms-crm-navtree-subarea-link-selected:link,
a.ms-crm-navtree-subarea-link-selected:visited,
a.ms-crm-navtree-subarea-link-selected:active,
a.ms-crm-navtree-subarea-link-selected:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
display : block ;

height: 18px;
cursor: pointer;

border-width: 0px;
white-space: nowrap;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
outline: none;
}

a.ms-crm-navtree-subarea-link-hovered,
a.ms-crm-navtree-subarea-link-hovered:link,
a.ms-crm-navtree-subarea-link-hovered:visited,
a.ms-crm-navtree-subarea-link-hovered:active,
a.ms-crm-navtree-subarea-link-hovered:hover
{
height : 18px;
white-space: nowrap;
background-image: url(/_imgs/nav_hover_highlight.png);
background-repeat: repeat-x;
}

a.ms-crm-navtree-subarea-link-Disabled,
a.ms-crm-navtree-subarea-link-Disabled:link,
a.ms-crm-navtree-subarea-link-Disabled:visited,
a.ms-crm-navtree-subarea-link-Disabled:active,
a.ms-crm-navtree-subarea-link-Disabled:hover
{
cursor: default;
color: #808080;
height : 18px;
white-space: nowrap;
background-repeat: repeat-x;

overflow : hidden;
text-overflow : ellipsis;
display : block;
}

nobr.ms-crm-navtree-group-title
{
width:			80%;
overflow:		hidden;
text-overflow:	ellipsis;
}

nobr.ms-crm-navtree-node-title
{
width:			100%;
overflow:		hidden;
text-overflow:	ellipsis;
}

img.ms-crm-navtree-node-icon
{
width: 16px;
height: 16px;
margin: 0px;
border: 0px;
padding: 0px;
vertical-align: top;
}

img.expand
{
cursor: pointer;
<% if (CrmStyles.IsRightToLeft) { %>
<%= FlipImage("h") %>
<% } %>
}

nobr.ms-crm-navtree-subarea-title
{
width:			100%;
overflow:		hidden;
text-overflow:	ellipsis;
font-size:      <%= WebUtility.GetFontResourceForStyle("General.11px.font_size")%>;
}

div.ms-crm-navtree-subareas
{
overflow-x: hidden;
overflow-y: auto;
}

li.ms-crm-navtree-group
{
margin: 0px;
padding-bottom: 3px;
border-top:	0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 4px;
<% } else { %>
padding-left : 4px;
<% } %>
}

li.ms-crm-navtree-subarea
{
margin: 0px;
padding-bottom: 7px;
border-top:	1px solid #6693cf;
padding-right : 0px ;
padding-left : 0px ;
}

ul
{
margin: 0px;
list-style: none;
}

li.ms-crm-navroot-node-children
{
line-height: 16px;
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 23px;
<% } else { %>
padding-left : 23px;
<% } %>
}

li.ms-crm-navtree-node-top
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 7px ;
<% } else { %>
padding-left : 7px ;
<% } %>
}

li.ms-crm-navtree-node-children
{
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 2px ;
<% } else { %>
padding-left : 2px ;
<% } %>
}

li.ms-crm-navtree-leaf
{
margin: 0px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 21px ;
<% } else { %>
padding-left : 21px ;
<% } %>
}

ul.ms-crm-navtree-node-children
{
margin: 0px;
list-style: none;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right : 15px ;
<% } else { %>
padding-left : 15px ;
<% } %>
}
