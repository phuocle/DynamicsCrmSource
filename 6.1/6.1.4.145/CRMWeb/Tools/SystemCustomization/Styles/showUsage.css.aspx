<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

.page_container
{
position:		absolute;
top:			5px;
bottom:			5px;
left:			5px;
right:			5px;
}

.header
{
position:		absolute;
top:			0px;
left:			0px;
right:			0px;
height:			56px;
}

.header_image
{
position:		absolute;
top:			0px;
bottom:			0px;
<% if (CrmStyles.IsRightToLeft) { %>
right:  0px;
<% } else { %>
left:   0px;
<% } %>
width:			75px;
}

.header_text
{
position:		absolute;
top:			10px;
bottom:			0px;
<% if (CrmStyles.IsRightToLeft) { %>
left:	0px;
right:	75px;
<% } else { %>
left:	75px;
right:	0px;
<% } %>
}

div.list_area
{
top:			56px;
padding:		10px;
background:		#ffffff;
border:			1px solid #6699cc;
overflow:		auto;
}

div.secton_list
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right:  40px;
<% } else { %>
padding-left:   40px;
<% } %>
}

td.wsdlTitle
{
font-size : 14px;
font-family : Segoe UI;
font-weight: bold;
color: #3B3B3B;
padding-top: 16px;
}

td.wsdlSubTitle
{
font-size : 12px;
font-family : Segoe UI;
font-weight: bold;
color: #3B3B3B;
padding-top: 10px;
}

td.wsdlData
{
font-size : 11px;
font-family : Segoe UI;
color: #000000;
}

table.wsdlMargin
{
margin-left:14px;
margin-right:14px;
width:96%;
}

img.wsdlIcon
{
margin-top: 2px;
margin-bottom: 2px;
margin-right: 5px;
margin-left: 5px;
}

A.wsdlLink
{
color:#3366CC;
text-decoration: none;
}

A.wsdlLink:hover
{
color:#3366CC;
text-decoration: underline;
}

A.wsdlLink:visited
{
color:#3366CC;
}



