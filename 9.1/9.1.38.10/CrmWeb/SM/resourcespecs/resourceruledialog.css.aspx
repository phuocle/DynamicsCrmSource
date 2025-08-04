<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

TD.sel
{
cursor:		pointer;
}

TD.ms-crm-Dialog-Main
{
padding:	10px;
}

DIV.ms-crm-Dialog-Lookup-Objects
{
background:	#ffffff;
height:		100%;
width:		100%;
border:		1px solid #D1CDBB;
overflow-y:	scroll;
overflow-x:	hidden;
}

IMG.ms-crm-Lookup-Item
{
height:				16px;
width:				16px;
vertical-align:		middle;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:		2px;
margin-left:		5px;
<% } else { %>
margin-left:		2px;
margin-right:		5px;
<% } %>
}

TD.ms-crm-Dialog-Lookup-SearchArea
{
height:				25px;
vertical-align:		top;
padding-left:		0px;
padding-right:		0px;
padding-bottom:		5px;
}

TD.column
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
}

table.ms-crm-Dialog-Lookup-ListHeaderBar
{
width: 100%;
height: 22px;
border: 1px solid #DBDAC9;
border-bottom: 1px solid #C5C1B1;
background-color: #f0f0f0;
}

table.ms-crm-Dialog-Lookup-InlineMsg
{
position: absolute;
width: 100%;
z-index: -1;
top: 55px;
}

td.ms-crm-Dialog-Lookup-InlineMsg
{
color: gray;
padding: 25px;
padding-top:0px;
}

INPUT.radio
{
border: 0px solid;
<% if (CrmStyles.IsRightToLeft) { %>
margin-right:15;
<% } else { %>
margin-left:15;
<% } %>
}

span.link
{
text-decoration:underline;
color: #0000ff;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
}

td.rrdDivider
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight")%>;
border-bottom: 1px solid #333333;
}

img.rrdExpander
{
border: 0px;
}
img.rrdImage
{
position:relative;
bottom:-5px;
}

td.rsTaskHelp
{
font-size:<%= WebUtility.GetFontResourceForStyle("resourceruledialog.css.aspx.td.rsTaskHelp.font_size")%>;
}
