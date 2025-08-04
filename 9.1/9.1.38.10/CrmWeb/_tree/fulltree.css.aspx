<%@ Page Language="c#" Inherits="Microsoft.Crm.Common.Application.Pages.Common.CrmStyles" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Common.Application.Pages.Common" %>

span.ftImage
{
width: 20px;
height: 26px;
display: inline-block;
vertical-align: middle;
white-space: nowrap;
}

span.ftImage > img,
span.ftLabel > img
{
position: relative;
top: 4px;
}

span.ftSelectTarget
{
margin-left: 0px;
margin-right: 0px;
height: 26px;
margin-bottom: -2px;
vertical-align: bottom;
display: inline-block;
}

div.ftRow
{
white-space: nowrap;
margin-top: 0px;
margin-bottom: 0px;
padding-top: 0px;
padding-bottom: 0px;
cursor: pointer;
}
div.fulltree
{
<% if (CrmStyles.IsRightToLeft) { %>
padding-right: 5px;
<% } else { %>
padding-left: 5px;
<% } %>
margin-bottom: 10px;
width: 100%;
height: 100%;
}
