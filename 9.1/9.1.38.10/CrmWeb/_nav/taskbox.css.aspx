<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

div.wizHead
{
cursor: default;
vertical-align: middle;
height: 20px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
<% } else { %>
padding-left: 6px;
<% } %>
border: 1px solid #999999;
border-bottom: 0px;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
font-size: <% = WebUtility.GetFontResourceForStyle("General.10px.font_size") %>;
position:absolute;
left:0px;
right:0px;
}


div.wizBoxCont
{
border: 1px solid #999999;
border-top:0px;
background-color:#ffffff;
vertical-align: top;
position: relative;
top:20px;
bottom:0px;
left:0px;
right:0px;
}

div.wizBox
{
height: 100%;
color: #444466;
}

div.wizItem
{
vertical-align: top;
padding-top: 1px;
padding-bottom: 1px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 6px;
padding-left: 4px;
float: right;
<% } else { %>
padding-left: 6px;
padding-right: 4px;
float: left;
<% } %>
}

div.wizText
{
vertical-align: middle;
overflow:		hidden;
text-overflow:	ellipsis;
padding-top:1px;
padding-bottom:1px;
line-height:16px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:	10px;
<% } else { %>
padding-right:	10px;
<% } %>
}
a.wizText,
a.wizText:hover,
a.wizText:link,
a.wizText:visited,
a.wizText:active
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
text-decoration: none;
border: none;
color: #000000;
}
a.wizText:focus
{
outline-offset: -3px !important;
}
hr.wizSpacer
{
width: 100%;
height: 1px;
color: #cccccc;
}
Div.wizBox{
clear:both;
}
Div.wizBox br{
display:none;
}

DIV.wizItemRow
{
clear: both;
width:100%;
}

DIV.wizItemRowBottom
{
position:absolute;
bottom:0px;
}