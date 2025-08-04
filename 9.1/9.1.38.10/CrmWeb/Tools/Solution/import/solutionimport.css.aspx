<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

BODY
{
overflow: auto;
}

LABEL
{
cursor:			pointer;
}

DIV.ms-crm-page
{
height:			100%;
overflow: auto;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left: 2%;
padding-right: 3%;
<% } else { %>
padding-left: 3%;
padding-right: 2%;
<% } %>
}

DIV.ms-crm-section
{
height:			100%;
width:			100%;

}

TABLE.ms-crm-layouttable
{
height:			100%;
width:			100%;
table-layout: auto;
cell-padding:0px
}


TD
{
border:	0px solid blue;
}
TD.ms-crm-Import-Buttons
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:		left;
<% } else { %>
text-align:		right;
<% } %>
padding:		10px;
height:			32px;
background-color:	#E3EFFF;
}

TD.ms-crm-Import-Footer
{
border-top: 1px solid #a5acb5;
height: 40px;
padding-bottom: 8px;
padding-top: 10px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px;
padding-left: 15px;
text-align: left;
<% } else { %>
padding-left: 15px;
padding-right: 8px;
text-align: right;
<% } %>
}

TD.ms-crm-Import-Buttons-help
{
<% if (CrmStyles.IsRightToLeft) { %>
text-align:		left;
align:right;
<% } else { %>
text-align:		right;
align:left;
<% } %>
padding:		6px;
height:			32px;
background-color:	#E3EFFF;
}

TD.ms-crm-post-import-action-process
{
vertical-align: top;
}

a.ms-crm-import-link
{
overflow : hidden ;
text-overflow : ellipsis;
color: #15428b;
cursor: pointer;
text-decoration: none;
}

a.ms-crm-import-link:hover
{
overflow : hidden ;
text-overflow : ellipsis ;
color:#0000FF;
cursor: pointer;
text-decoration: underline;
}

nobr.ms-crm-import-link
{
width:			100%;
overflow:		hidden;
text-overflow:	ellipsis;
}

span.sectionbar
{
font-size: <%= WebUtility.GetFontResourceForStyle("Form.Tab.Header.FontSize") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
}
