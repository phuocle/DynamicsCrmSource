<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles"  %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>


DIV.DashboardEditor
{
background-color:#ffffff;
padding-top:0px;
padding-bottom:10px;
vertical-align:top;
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 7px;
<% } else { %>
padding-left:7px;
<% } %>
height: 100%;
}

TD.Dashboard-Body
{
height: 100%;
with: 100%;
}


TD.DashboardNameTD
{
padding-top:5px;
padding-bottom:5px;
<% if (CrmStyles.IsRightToLeft) { %>
padding-left:10px;
padding-right: 7px;
<% } else { %>
padding-left:7px;
padding-right:10px;
<% } %>
}

LABEL.DashboardNameHint
{
display: none;
position: absolute;
padding: 4px 5px;
color: black;
font-style: italic;
overflow: hidden;
height: 30px;
}
.DashboardName
{
width: 90%;
display:inline-block;
}
IMG.PlaceholderImg
{
filter:alpha(opacity=50);
opacity: 1;
}

TD.GridPreviewHeaderTD
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 8px
text-align: right;
<% } else { %>
padding-left: 8px
text-align: left;
<% } %>
}

.PlaceholderAnchorForRACards
{
margin:5px;
display:inline-block;
width:16px;
height:19px;
}

.PlaceholderAnchor
{
margin:5px;
display:inline-block;
}

TABLE.GridPreviewTable
{
width: 100%;
}

TR.ms-crm-DE-PreviewSelector
{
height:24px;
cursor: move;
}

TD.ms-crm-DE-PreviewSelector
{
width:100%;
}

.ms-crm-DE-NoUserSelect
{
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.socialInsightsDashboardPreviewMessage {
padding-left: 10px;
padding-right: 10px;
}