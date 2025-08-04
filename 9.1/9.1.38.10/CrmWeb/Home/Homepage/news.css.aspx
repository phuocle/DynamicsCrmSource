<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

BODY
{
height:100%;
overflow:inherit;
}

TD
{
vertical-align: top;
}

div.header
{
font-size: <%= WebUtility.GetFontResourceForStyle("news.css.aspx.div.header.font_size")%>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
border-bottom: 1px solid #999999;
}

div.body
{
padding-top: 4px;
padding-bottom: 5px;
color: #555555;
}

span.link
{
color: #0000ff;
text-decoration: underline;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
cursor: pointer;
}

a.link
{
width:			100%;
overflow:		hidden;
text-overflow:	ellipsis;
font-weight:	<%= WebUtility.GetFontResourceForStyle("General.Normal.font_weight")%>;
}
DIV.announcementsOuterDiv
{
background-color: #ffffff;
overflow-y: auto;
overflow-x: hidden;
position: absolute;
left: 10px;
right: 10px;
top: 10px;
bottom: 10px;
border: 1px solid #cccccc;
padding: 10px;
}
TABLE.announcementsInnerTable
{
table-layout:fixed;
width:100%;
height:100%;
}