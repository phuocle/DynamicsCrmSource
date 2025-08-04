<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

table.htmlBar
{
border-width: 1px;
border-style: solid;
border-bottom: 0px;
table-layout: fixed;
width: 100%;
height: 26px;
}
.htmlBtn,
.htmlBtnStyle
{
vertical-align: middle;
cursor: pointer;
border: 1px solid transparent;
text-align: center;
background-image: none;
background-repeat: repeat-x;
}
.htmlBtnStyle
{
font: normal <%= WebUtility.GetFontResourceForStyle("htmlbar.css.aspx.htmlStyle.font_size") %>;
}
.htmlBtn
{
font: normal <%= WebUtility.GetFontResourceForStyle("htmlbar.css.aspx.htmlbtn.font_size") %>;
}

.htmlBtnHideable
{
padding-left: 5px;
}

.htmlBtnDisabled
{
cursor: default !important;
filter:gray(enabled=true) alpha(opacity=50);
-ms-filter:"gray(enabled=true) alpha(opacity=50)";
vertical-align: middle;
border: 1px solid transparent;
text-align: center;
background-image: none;
background-repeat: repeat-x;
}

.htmlBtnDisabled img
{
opacity:0.3;
}

.htmlBtnDisabled:hover , .htmlBtnDisabled:hover a
{
border-color:transparent !important;
background-color:transparent;
cursor:default !important;
}

.htmlBarUnselectable
{
-moz-user-select: none;
-webkit-user-select: none;
user-select: none;
}

td.htmlFontCell
{
white-space: nowrap;
}

td.htmlFontCell:hover
{
background-color: #C1D2EE;
}

.htmlAnchorStyle
{
display:inline-block;
height:100%;
width:100%;
font-size: inherit !important;
}

.htmlImgStyle
{
vertical-align:middle;
padding-top:15%;
}